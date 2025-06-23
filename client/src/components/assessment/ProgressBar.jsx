import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = ((currentQuestion) / totalQuestions) * 100;
  
  const motivationalPhrases = [
    "Let's get started!",
    "Great progress!",
    "Halfway there!",
    "Almost done!",
    "Final stretch! 🎉"
  ];
  
  const phraseIndex = Math.min(
    Math.floor((currentQuestion / totalQuestions) * motivationalPhrases.length),
    motivationalPhrases.length - 1
  );

  return (
    <motion.div 
      className="max-w-3xl mx-auto mb-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-5"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress Text */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-600">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-sm font-medium bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">
        <motion.div 
          className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-orange-400"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Motivational Text */}
      <div className="text-center mt-3">
        <span className="text-sm font-medium text-gray-600">
          {motivationalPhrases[phraseIndex]}
        </span>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
