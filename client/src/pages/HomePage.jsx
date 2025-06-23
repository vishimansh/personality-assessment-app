import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import { 
  Clock, DollarSign, Shield, Target, Users, TrendingUp 
} from 'lucide-react';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const hoverScale = {
  scale: 1.03,
  transition: { 
    type: "spring", 
    stiffness: 300, 
    damping: 10 
  }
};

const tapScale = { 
  scale: 0.98 
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* AI-Powered Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            AI-Powered MBTI assessment
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="text-gray-900">Discover Your </span>
            <motion.span 
              className="bg-gradient-to-r from-[#2ca2a4] via-[#6c795a] to-[#d35801] bg-clip-text text-transparent"
              initial={{ backgroundPosition: '0% 0%'}}
              animate={{ backgroundPosition: '100% 100%'}}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: 'reverse' 
              }}
            >
              True Personality
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover your authentic self, find your perfect career path, and build stronger relationships through
            scientifically-backed personality insights designed specifically for ambitious young Indians.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Link to="/assessment">
                <motion.button
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
                  whileHover={hoverScale}
                  whileTap={tapScale}
                >
                  Start Your Journey
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div variants={item}>
              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors duration-200"
                whileHover={hoverScale}
                whileTap={tapScale}
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Card 1 */}
            <motion.div 
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-200"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-6 h-6 text-orange-600" />
                </motion.div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">5 min assessment</h3>
              <p className="text-gray-600 text-sm">Quick 5-minute personality analysis with instant results.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-200"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <motion.div
                  whileHover={{ rotate: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </motion.div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free forever</h3>
              <p className="text-gray-600 text-sm">Complete personality insights at zero cost, always.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-200"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-6 h-6 text-orange-600" />
                </motion.div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Complete privacy</h3>
              <p className="text-gray-600 text-sm">Your data stays private with high level security.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              Why you must use Echo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-orange-500">Echo</span>
              <span className="text-gray-900"> Changes Everything</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the three pillars of personality-driven success that have transformed thousands of young lives
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Career Clarity */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              variants={item}
              whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity 
                    } 
                  }}
                >
                  <Target className="w-8 h-8 text-red-600" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Clarity</h3>
              <p className="text-gray-600 mb-6">
                Find your perfect career match based on your unique personality blueprint.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Discover careers that energize rather than drain you.",
                  "Understand your ideal work environment and culture fit.",
                  "Identify roles where your natural strengths shine.",
                  "Get personalised career recommendations from 200+ professions.",
                  "Avoid costly career mistakes and job dissatisfaction."
                ].map((text, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stronger Connections */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              variants={item}
              whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity 
                    } 
                  }}
                >
                  <Users className="w-8 h-8 text-orange-600" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stronger Connections</h3>
              <p className="text-gray-600 mb-6">
                Build authentic connections through deep self-awareness and understanding others.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Understand your communication style and preferences.",
                  "Learn how to connect with different personality types.",
                  "Improve your personal and professional relations.",
                  "Excel in team collaborations and group projects.",
                  "Develop emotional intelligence and empathy skills."
                ].map((text, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Personal Growth */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              variants={item}
              whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity 
                    } 
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Growth</h3>
              <p className="text-gray-600 mb-6">
                Unlock your hidden strengths and transform growth areas into superpowers.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Identify your top 5 natural strengths and talents.",
                  "Understand your growth areas without any judgment.",
                  "Create personalised development plans.",
                  "Build confidence through self confidence.",
                  "Accelerate your personal and professional life through our evaluation."
                ].map((text, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-teal-500 mr-2 mt-1">•</span>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
