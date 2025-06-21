import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ResultsPage from '../results/ResultsPage';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import { personalityQuestions, calculatePersonalityType } from '../../data/questions';
import { submitAssessment } from '../../utils/api/assessmentApi';

const AssessmentFlow = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [personalityResult, setPersonalityResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedAssessmentId, setSavedAssessmentId] = useState(null);

  const currentQuestion = personalityQuestions[currentQuestionIndex];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === personalityQuestions.length - 1;

  const handleAnswerSelect = (questionId, selectedOption) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const handleNext = async () => {
    if (isLast) {
      await handleCompleteAssessment();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleCompleteAssessment = async () => {
  setLoading(true);
  setError(null);

  try {
    // Calculate personality type
    const responses = Object.values(answers);
    const personalityType = calculatePersonalityType(responses);

    // Debug logs
    console.log('🔍 Raw answers object:', answers);
    console.log('🔍 Responses array:', responses);
    console.log('🔍 Personality type:', personalityType);

    // FIX: Format responses correctly for backend
    const formattedResponses = Object.entries(answers).map(([questionId, selectedOption]) => ({
      questionId: parseInt(questionId), // Ensure questionId is a number
      selectedOption: selectedOption    // This already has text, value, points
    }));

    // Prepare data for backend
    const assessmentData = {
      userId: `user_${Date.now()}`,
      responses: formattedResponses, // Use formatted responses
      personalityType: personalityType
    };

    console.log('📤 Sending to backend:', assessmentData);

    // Submit to backend
    const result = await submitAssessment(assessmentData);
    
    if (result.success) {
      setPersonalityResult(personalityType);
      setSavedAssessmentId(result.assessment._id);
      setAssessmentComplete(true);
      console.log('✅ Assessment saved with ID:', result.assessment._id);
    } else {
      throw new Error(result.message || 'Failed to save assessment');
    }
  } catch (error) {
    console.error('Assessment submission error:', error);
    setError(error.response?.data?.message || 'Failed to save your assessment. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const handlePrevious = () => {
    if (!isFirst) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRetakeAssessment = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setAssessmentComplete(false);
    setPersonalityResult(null);
    setError(null);
    setSavedAssessmentId(null);
  };

  const handleShareResults = () => {
    const shareText = `I just discovered I'm an ${personalityResult} personality type! Take the assessment to find out yours.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Personality Assessment Results',
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.href);
      alert('Results copied to clipboard!');
    }
  };

  const handleRetrySubmission = () => {
    handleCompleteAssessment();
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <LoadingSpinner message="Calculating your personality type..." />
        </div>
      </div>
    );
  }

  // Error state
  if (error && !assessmentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <ErrorMessage message={error} onRetry={handleRetrySubmission} />
        </div>
      </div>
    );
  }

  // Results page
  if (assessmentComplete) {
    return (
      <ResultsPage
        personalityType={personalityResult}
        assessmentId={savedAssessmentId}
        onRetakeAssessment={handleRetakeAssessment}
        onShareResults={handleShareResults}
      />
    );
  }

  // Assessment flow
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Personality Assessment
          </h1>
          <p className="text-lg text-gray-600">
            Discover your unique personality type through our comprehensive evaluation
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar 
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={personalityQuestions.length}
        />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          onAnswerSelect={handleAnswerSelect}
          selectedAnswer={answers[currentQuestion.id]?.text || ''}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={isFirst}
          isLast={isLast}
        />

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Your responses are securely saved and anonymous
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentFlow;
