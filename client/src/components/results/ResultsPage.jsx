import React from 'react';
import { personalityTypes } from '../../data/personalityTypes';

const ResultsPage = ({ personalityType, assessmentId, onRetakeAssessment, onShareResults }) => {
  // Normalize personalityType to uppercase
  const normalizedType = personalityType?.toUpperCase();
  const typeData = normalizedType ? personalityTypes[normalizedType] : null;
  
  if (!typeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {personalityType ? `Unknown Type: ${personalityType}` : "No Results Found"}
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't determine your personality type. Please retake the assessment.
          </p>
          <button
            onClick={onRetakeAssessment}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Retake Assessment
          </button>
          
          {assessmentId && (
            <p className="mt-4 text-sm text-gray-500">
              Assessment ID: {assessmentId.slice(-8)}
            </p>
          )}
        </div>
      </div>
    );
  }

  // The main results page content
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Message */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✅ Assessment completed and saved successfully!
            {assessmentId && (
              <span className="ml-2 text-xs bg-green-200 px-2 py-1 rounded">
                ID: {assessmentId.slice(-8)}
              </span>
            )}
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className={`inline-block bg-gradient-to-r ${typeData.color} text-white px-8 py-4 rounded-full text-6xl font-bold mb-4`}>
              {normalizedType}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {typeData.name}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {typeData.category}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {typeData.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Key Traits */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">✨</span>
              Key Traits
            </h3>
            <div className="flex flex-wrap gap-2">
              {typeData.traits.map((trait, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${typeData.color} text-white rounded-full text-sm font-medium`}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">💪</span>
              Strengths
            </h3>
            <ul className="space-y-2">
              {typeData.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas for Growth */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">🌱</span>
              Areas for Growth
            </h3>
            <ul className="space-y-2">
              {typeData.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">→</span>
                  <span className="text-gray-700">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Suggestions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">💼</span>
              Career Suggestions
            </h3>
            <div className="flex flex-wrap gap-2">
              {typeData.careers.map((career, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm border"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Famous People */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            Famous People with Your Type
          </h3>
          <div className="flex flex-wrap gap-4">
            {typeData.famous.map((person, index) => (
              <div
                key={index}
                className={`px-4 py-2 bg-gradient-to-r ${typeData.color} text-white rounded-lg font-medium`}
              >
                {person}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetakeAssessment}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Retake Assessment
          </button>
          <button
            onClick={onShareResults}
            className={`px-8 py-3 bg-gradient-to-r ${typeData.color} text-white rounded-lg hover:opacity-90 transition-opacity font-semibold`}
          >
            Share Results
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Save as PDF
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>This assessment is based on the Myers-Briggs Type Indicator (MBTI)</p>
          <p>Remember: All personality types are equally valuable and have unique strengths</p>
          {assessmentId && (
            <p className="mt-2 text-xs">Assessment ID: {assessmentId}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
