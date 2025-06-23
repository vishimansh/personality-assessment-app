
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus, Zap, BookOpen, Search, Sparkles, Brain, Heart, Calendar, Leaf,
  Castle, Puzzle, Crown, Lightbulb, Globe, Flower, Smile,
  ShieldCheck, Briefcase, Handshake, Hammer, Palette, Rocket, Mic2, ChevronDown, HelpCircle
} from 'lucide-react';
import Navbar from '../components/common/Navbar';

const iconAnimation = {
  whileHover: { scale: 1.15 },
  transition: { type: 'spring', stiffness: 300, damping: 15 }
};

const HowItWorks = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const faqs = [
    { question: "What is MBTI and how does it work?", answer: "MBTI (Myers-Briggs Type Indicator) is a framework to understand your thinking and decision-making preferences using four key personality dichotomies." },
    { question: "How accurate is the Echo MBTI assessment?", answer: "Echo uses scientific methodologies and AI-backed models to ensure reliable personality insights, though no tool is 100% definitive." },
    { question: "Can my MBTI type change over time?", answer: "Your core type remains stable, but you may develop traits of other types over time due to life experiences." },
    { question: "How long does the assessment take to complete?", answer: "Echo’s assessment takes just around 5 minutes—quick and insightful." },
    { question: "Can I use my MBTI results for career guidance?", answer: "Definitely. Your type can help identify work environments, roles, and team dynamics that suit you best." },
    { question: "Are the 16 personality types equally valuable?", answer: "Yes! Every type offers unique strengths. There’s no best or worst type." }
  ];

  const animatedIcon = (Icon, className = "w-6 h-6") => (
    <motion.div {...iconAnimation}>
      <Icon className={className} />
    </motion.div>
  );

  const preferencePairs = [
    {
      left: {
        title: "Extraversion (E)",
        desc: "Draws energy from social interaction, action, and external activities.",
        color: "bg-orange-100",
        textColor: "text-orange-600",
        icon: animatedIcon(Zap),
      },
      right: {
        title: "Introversion (I)",
        desc: "Energized by quiet reflection, solitude, and deep personal focus.",
        color: "bg-red-100",
        textColor: "text-red-600",
        icon: animatedIcon(BookOpen),
      },
    },
    {
      left: {
        title: "Sensing (S)",
        desc: "Prefers concrete facts, present details, and real-world observations.",
        color: "bg-purple-100",
        textColor: "text-purple-600",
        icon: animatedIcon(Search),
      },
      right: {
        title: "Intuition (N)",
        desc: "Focuses on patterns, big ideas, and future possibilities.",
        color: "bg-pink-100",
        textColor: "text-pink-600",
        icon: animatedIcon(Sparkles),
      },
    },
    {
      left: {
        title: "Thinking (T)",
        desc: "Makes decisions using logic, fairness, and objective reasoning.",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
        icon: animatedIcon(Brain),
      },
      right: {
        title: "Feeling (F)",
        desc: "Chooses based on empathy, values, and emotional harmony.",
        color: "bg-pink-100",
        textColor: "text-pink-600",
        icon: animatedIcon(Heart),
      },
    },
    {
      left: {
        title: "Judging (J)",
        desc: "Likes structure, clear plans, and decisive action.",
        color: "bg-blue-100",
        textColor: "text-blue-600",
        icon: animatedIcon(Calendar),
      },
      right: {
        title: "Perceiving (P)",
        desc: "Prefers flexibility, spontaneity, and keeping options open.",
        color: "bg-teal-100",
        textColor: "text-teal-600",
        icon: animatedIcon(Leaf),
      },
    },
  ];

  const personalityTypes = {
    analysts: {
      title: "Analysts",
      bgColor: "bg-purple-50",
      catColor: "bg-purple-600",
      borderColor: "border-purple-200",
      iconColor: "bg-purple-100 text-purple-600",
      types: [
        { code: "INTJ", name: "Architect", desc: "Strategic, imaginative, and confident problem-solvers.", icon: animatedIcon(Castle) },
        { code: "INTP", name: "Logician", desc: "Inventive thinkers, curious and deeply analytical.", icon: animatedIcon(Puzzle) },
        { code: "ENTJ", name: "Commander", desc: "Bold leaders, driven by vision and efficiency.", icon: animatedIcon(Crown) },
        { code: "ENTP", name: "Debater", desc: "Energetic innovators, love arguing for fun and ideas.", icon: animatedIcon(Lightbulb) },
      ]
    },
    diplomats: {
      title: "Diplomats",
      bgColor: "bg-green-50",
      catColor: "bg-green-600",
      borderColor: "border-green-200",
      iconColor: "bg-green-100 text-green-600",
      types: [
        { code: "INFJ", name: "Advocate", desc: "Quiet visionaries, guided by purpose and values.", icon: animatedIcon(Globe) },
        { code: "INFP", name: "Mediator", desc: "Empathetic dreamers, deeply guided by ideals.", icon: animatedIcon(Flower) },
        { code: "ENFJ", name: "Protagonist", desc: "Charismatic leaders, inspiring and compassionate.", icon: animatedIcon(Sparkles) },
        { code: "ENFP", name: "Campaigner", desc: "Enthusiastic, creative, and free-spirited adventurers.", icon: animatedIcon(Smile) },
      ]
    },
    sentinels: {
      title: "Sentinels",
      bgColor: "bg-blue-50",
      catColor: "bg-blue-600",
      borderColor: "border-blue-200",
      iconColor: "bg-blue-100 text-blue-600",
      types: [
        { code: "ISTJ", name: "Logistician", desc: "Responsible and detail-oriented with strong ethics.", icon: animatedIcon(BookOpen) },
        { code: "ISFJ", name: "Defender", desc: "Loyal caregivers, attentive and supportive.", icon: animatedIcon(ShieldCheck) },
        { code: "ESTJ", name: "Executive", desc: "Organized leaders, committed to tradition and rules.", icon: animatedIcon(Briefcase) },
        { code: "ESFJ", name: "Consul", desc: "Warm-hearted helpers, value harmony and community.", icon: animatedIcon(Handshake) },
      ]
    },
    explorers: {
      title: "Explorers",
      bgColor: "bg-orange-50",
      catColor: "bg-orange-600",
      borderColor: "border-orange-200",
      iconColor: "bg-orange-100 text-orange-600",
      types: [
        { code: "ISTP", name: "Virtuoso", desc: "Bold tinkerers, love hands-on projects and action.", icon: animatedIcon(Hammer) },
        { code: "ISFP", name: "Adventurer", desc: "Creative and sensitive, explore beauty in the world.", icon: animatedIcon(Palette) },
        { code: "ESTP", name: "Entrepreneur", desc: "Energetic thrill-seekers, thrive on excitement and risk.", icon: animatedIcon(Rocket) },
        { code: "ESFP", name: "Entertainer", desc: "Fun-loving and social, bring energy to any room.", icon: animatedIcon(Mic2) },
      ]
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section - What is MBTI? */}
<section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-[60vh] flex items-center">
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
  <div className="max-w-4xl mx-auto w-full">
    <motion.div
      className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl px-6 sm:px-12 py-12 sm:py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
          What is{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-teal-500 bg-clip-text text-transparent">
            MBTI?
          </span>
          
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-800">
          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          A science-backed framework for understanding yourself and others.
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg space-y-5 leading-relaxed font-normal text-center">
        <p>
          The Myers-Briggs Type Indicator (MBTI) is a popular personality assessment that helps people understand themselves and others.
          It’s based on <span className="text-orange-500 font-medium">four pairs of preferences</span>, creating 16 unique personality types
          that reflect how you interact with the world, process information, make decisions, and organize your life.
        </p>
        
        <button className="mt-2 inline-block px-5 py-2 border border-gray-400 text-gray-700 rounded-xl shadow-sm hover:shadow-md transition font-semibold text-sm">
          How it works ?
        </button>

        <p>
          MBTI is based on <span className="text-orange-500 font-medium">four pairs of preferences</span>. Your choices across these pairs
          combine to form one of 16 unique personality types—each with its own strengths and style.
        </p>
      </div>
    </motion.div>
  </div>
</section>


      {/* The Four MBTI Preference Pairs */}
<section className="py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
        The <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-teal-500 bg-clip-text text-transparent">Four</span>{" "}
        MBTI Preference Pairs
      </h2>
    </motion.div>

    {/* 8 Cards in 2 Columns */}
    <div className="grid md:grid-cols-2 gap-6">
      {preferencePairs
        .flatMap((pair) => [pair.left, pair.right])
        .map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
          >
            <div
              className={`p-3 rounded-lg ${item.color} ${item.textColor} flex items-center justify-center`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-base">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-snug">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
    </div>
  </div>
</section>


      {/* The 16 Personality Types */}
<section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-orange-500">16</span> <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-teal-500 bg-clip-text text-transparent">Personality Types</span>
            </h2>
          </motion.div>

          {Object.entries(personalityTypes).map(([key, cat], categoryIndex) => (
            <motion.div key={key} className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * categoryIndex }}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-800">
                  <span className={`h-2 w-2 rounded-full ${cat.catColor}`}></span>{cat.title}
                </div>
                <p className="text-gray-600">{cat.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {cat.types.map((type, idx) => (
                  <motion.div
                    key={type.code}
                    className={`${cat.bgColor} ${cat.borderColor} border rounded-2xl p-6 hover:shadow-md transition`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-inner ${cat.iconColor}`}>{type.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{type.code}</h4>
                      <h5 className="text-lg font-medium text-gray-700 mb-3">{type.name}</h5>
                      <p className="text-sm text-gray-600 leading-relaxed">{type.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
 <section className="py-20 px-4 sm:px-6 ">
  <div className="max-w-4xl mx-auto">
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 p-10 sm:p-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-teal-500 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-gray-600 text-base">
          Find quick answers to common queries. Still unsure? Reach out to us!
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index }}
          >
            <div className={`border rounded-xl overflow-hidden shadow-sm transition-all duration-200 ${openFAQ === index ? 'bg-teal-50 border-teal-300' : 'bg-white border-gray-200'}`}>
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-900 font-medium text-base sm:text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-10">
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition">
          <HelpCircle className="w-5 h-5" />
          Contact Support
        </button>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default HowItWorks;


