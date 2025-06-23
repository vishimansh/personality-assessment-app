import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ResultsPage from '../results/ResultsPage';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import { personalityQuestions, calculatePersonalityType } from '../../data/questions';
import { submitAssessment } from '../../utils/api/assessmentApi';

const AssessmentFlow = () => {
  // State logic (assume same as your previous code)
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
      const responses = Object.values(answers);
      const personalityType = calculatePersonalityType(responses);

      const formattedResponses = Object.entries(answers).map(([questionId, selectedOption]) => ({
        questionId: parseInt(questionId),
        selectedOption: selectedOption
      }));

      const assessmentData = {
        userId: `user_${Date.now()}`,
        responses: formattedResponses,
        personalityType: personalityType
      };

      const result = await submitAssessment(assessmentData);

      if (result.success) {
        setPersonalityResult(personalityType);
        setSavedAssessmentId(result.assessment._id);
        setAssessmentComplete(true);
      } else {
        throw new Error(result.message || 'Failed to save assessment');
      }
    } catch (error) {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <LoadingSpinner message="Analyzing your responses..." />
          <p className="text-center text-gray-600 mt-4">
            Discovering your unique personality profile
          </p>
        </motion.div>
      </div>
    );
  }

  // Error state
  if (error && !assessmentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ErrorMessage 
            message={error} 
            onRetry={handleRetrySubmission} 
            retryLabel="Retry Submission"
          />
        </motion.div>
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
    <motion.div 
      className="min-h-screen pt-32 bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Personality Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer honestly to discover your true personality type
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full mx-auto mt-4"></div>
        </motion.div>

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

        {/* Security Assurance */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500 inline-flex items-center justify-center">
            <span className="mr-2 text-green-500 text-lg" role="img" aria-label="lock">🔒</span>
            Your responses are encrypted and never shared
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AssessmentFlow;
