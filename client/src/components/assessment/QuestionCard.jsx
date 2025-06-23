import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer, onNext, onPrevious, isFirst, isLast }) => {
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState(selectedAnswer || '');

  const handleAnswerChange = (value) => {
    const selectedOption = question.options.find(option => option.text === value);
    setLocalSelectedAnswer(value);
    onAnswerSelect(question.id, selectedOption);
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 sm:p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Question Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3">
          {question.statement}
        </h2>
        
      </div>

      {/* Answer Options */}
      <div className="space-y-4 mb-10">
        {question.options.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <label 
              className={`block cursor-pointer p-5 rounded-xl border-2 transition-all duration-200 ${
                localSelectedAnswer === option.text 
                  ? 'border-gray-800 bg-gradient-to-r from-teal-50 to-orange-50 shadow-md' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.text}
                  checked={localSelectedAnswer === option.text}
                  onChange={() => handleAnswerChange(option.text)}
                  className="w-5 h-5 accent-orange-400 border-gray-300 "
                />
                <span className="ml-4 text-lg font-medium text-gray-700">
                  {option.text}
                </span>
              </div>
            </label>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          disabled={isFirst}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            isFirst 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          ← Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          disabled={!localSelectedAnswer}
          className={`px-8 py-3 rounded-xl font-semibold shadow-lg transition-all ${
            !localSelectedAnswer 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-teal-500 to-orange-400 text-white hover:shadow-xl'
          }`}
        >
          {isLast ? 'Finish Assessment' : 'Next →'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
