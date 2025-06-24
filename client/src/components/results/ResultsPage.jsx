import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ThumbsUp, Sprout, Briefcase, Star, 
  ArrowLeft, Share2, Download, BarChart4, Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalityTypes } from '../../data/personalityTypes';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.2 
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 16 } }
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1, ease: "easeOut" }
  }
};

const famousVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 + 0.2, type: "spring", stiffness: 80 }
  })
};

const preferenceBarVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const ResultsPage = ({ personalityType, traitScores, preferencePercentages, assessmentId, onRetakeAssessment, onShareResults }) => {
  const normalizedType = personalityType?.toUpperCase();
  const typeData = normalizedType ? personalityTypes[normalizedType] : null;
  
  if (!typeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {personalityType ? `Unknown Type: ${personalityType}` : "No Results Found"}
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We couldn't determine your personality type. Please retake the assessment.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRetakeAssessment}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Retake Assessment
          </motion.button>
          {assessmentId && (
            <p className="mt-4 text-sm text-gray-500">
              Assessment ID: {assessmentId.slice(-8)}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 max-w-6xl mb-8">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.07, backgroundColor: "#f3f4f6" }}
            className="flex items-center text-gray-700 font-medium px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </motion.button>
        </Link>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Success Message */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center bg-green-100 text-green-800 px-5 py-2.5 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.15 }}
          >
            <span className="mr-2">✅</span>
            Assessment completed and saved successfully!
            {assessmentId && (
              <span className="ml-3 text-xs bg-green-200 px-2.5 py-1 rounded-full">
                ID: {assessmentId.slice(-8)}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Personality Type Badge */}
        <motion.div 
          className="text-center mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            className={`inline-block bg-gradient-to-r ${typeData.color} text-white px-10 py-6 rounded-full text-7xl font-bold mb-6 shadow-xl`}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            {normalizedType}
          </motion.div>
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {typeData.name}
          </motion.h1>
          <motion.div
            className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
            {typeData.category}
          </motion.div>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            {typeData.description}
          </motion.p>
        </motion.div>

        {/* NEW: Trait Scores Section */}
        {traitScores && (
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <BarChart4 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Your Personality Traits</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(traitScores).map(([trait, score]) => (
                <div key={trait} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 capitalize">{trait}</span>
                    <span className="font-semibold text-gray-600">{score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial="hidden"
                      animate="visible"
                      variants={progressBarVariants}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

   {preferencePercentages && (
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Your MBTI Preference Spectrum</h3>
          </div>
          
          <div className="space-y-8">
            {/* E/I Spectrum */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-blue-600">Extraversion (E)</span>
                <span className="font-bold text-purple-600">Introversion (I)</span>
              </div>
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.E}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-y-0 right-0 bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.I}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-blue-600 font-medium">{preferencePercentages.E}%</span>
                <span className="text-purple-600 font-medium">{preferencePercentages.I}%</span>
              </div>
            </div>

            {/* S/N Spectrum */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-green-600">Sensing (S)</span>
                <span className="font-bold text-yellow-500">Intuition (N)</span>
              </div>
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.S}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-y-0 right-0 bg-yellow-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.N}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-green-600 font-medium">{preferencePercentages.S}%</span>
                <span className="text-yellow-500 font-medium">{preferencePercentages.N}%</span>
              </div>
            </div>

            {/* T/F Spectrum */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-red-500">Thinking (T)</span>
                <span className="font-bold text-pink-500">Feeling (F)</span>
              </div>
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.T}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-y-0 right-0 bg-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.F}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-red-500 font-medium">{preferencePercentages.T}%</span>
                <span className="text-pink-500 font-medium">{preferencePercentages.F}%</span>
              </div>
            </div>

            {/* J/P Spectrum */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-teal-600">Judging (J)</span>
                <span className="font-bold text-orange-500">Perceiving (P)</span>
              </div>
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-teal-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.J}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-y-0 right-0 bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${preferencePercentages.P}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-teal-600 font-medium">{preferencePercentages.J}%</span>
                <span className="text-orange-500 font-medium">{preferencePercentages.P}%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 text-sm">
              This shows your natural tendencies - there's no "right" or "wrong" balance.
              Your unique mix creates your personality strengths!
            </p>
          </div>
        </motion.div>
      )}

        {/* Personality Insights Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Key Traits Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(80,80,255,0.10)" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Key Traits</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {typeData.traits.map((trait, index) => (
                <motion.span
                  key={index}
                  className={`px-4 py-2.5 bg-gradient-to-r ${typeData.color} text-white rounded-full text-sm font-medium shadow-md`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Strengths Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(80,255,80,0.10)" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                <ThumbsUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Strengths</h3>
            </div>
            <ul className="space-y-4">
              {typeData.strengths.map((strength, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-green-500 text-2xl mr-3 mt-0.5">✓</span>
                  <span className="text-lg text-gray-700">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Areas for Growth Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(255,180,80,0.12)" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Areas for Growth</h3>
            </div>
            <ul className="space-y-4">
              {typeData.weaknesses.map((weakness, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-orange-500 text-2xl mr-3 mt-0.5">→</span>
                  <span className="text-lg text-gray-700">{weakness}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Career Suggestions Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(80,180,255,0.12)" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Career Suggestions</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {typeData.careers.map((career, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2.5 bg-white text-gray-800 rounded-xl text-sm font-medium shadow-sm border border-gray-200 hover:shadow-md"
                  whileHover={{ y: -3, scale: 1.07 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  {career}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Famous People Section */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-10 mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">
              Famous People with Your Type
            </h3>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-8">
            These iconic individuals share your personality traits and strengths
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {typeData.famous.map((person, index) => (
              <motion.a
                key={index}
                href={person.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all block`}
                custom={index}
                variants={famousVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.18)" }}
              >
                <div className="text-lg font-medium underline hover:text-yellow-300 transition-colors">
                  {person.name}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetakeAssessment}
            className="flex items-center justify-center px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retake Assessment
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShareResults}
            className={`flex items-center justify-center px-10 py-4 bg-gradient-to-r ${typeData.color} text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all`}
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Results
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.print()}
            className="flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5 mr-2" />
            Save as PDF
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>This assessment is based on the Myers-Briggs Type Indicator (MBTI)</p>
          <p>Remember: All personality types are equally valuable and have unique strengths</p>
          {assessmentId && (
            <p className="mt-3 text-xs text-gray-400">Assessment ID: {assessmentId}</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsPage;
