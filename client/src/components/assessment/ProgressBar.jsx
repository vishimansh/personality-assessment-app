import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto mb-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Progress Text */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Motivational Text */}
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">
            {currentQuestion === totalQuestions 
              ? "🎉 Almost done! One more step to discover your personality type!" 
              : "Keep going! You're doing great!"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
