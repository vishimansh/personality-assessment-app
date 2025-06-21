import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer, onNext, onPrevious, isFirst, isLast }) => {
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState(selectedAnswer || '');

  const handleAnswerChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = question.options.find(option => option.text === selectedValue);
    
    setLocalSelectedAnswer(selectedValue);
    onAnswerSelect(question.id, selectedOption);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 m-4">
      {/* Question Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {question.statement}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <label 
            key={index}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
              localSelectedAnswer === option.text 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.text}
              checked={localSelectedAnswer === option.text}
              onChange={handleAnswerChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-3 text-lg text-gray-700">
              {option.text}
            </span>
          </label>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isFirst 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={!localSelectedAnswer}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            !localSelectedAnswer 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isLast ? 'Finish Assessment' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
