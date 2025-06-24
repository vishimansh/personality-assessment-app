export const personalityQuestions = [
  // EXTRAVERSION vs INTROVERSION (8 questions)
  {
    id: 1,
    dimension: "EI",
    statement: "I feel energized after spending time with a large group of people.",
    options: [
      { text: "Strongly Agree", value: "E", points: 2 },
      { text: "Somewhat Agree", value: "E", points: 1 },
      { text: "Somewhat Disagree", value: "I", points: 1 },
      { text: "Strongly Disagree", value: "I", points: 2 }
    ]
  },
  {
    id: 2,
    dimension: "EI",
    statement: "I prefer to think things through quietly before sharing my ideas.",
    options: [
      { text: "Strongly Agree", value: "I", points: 2 },
      { text: "Somewhat Agree", value: "I", points: 1 },
      { text: "Somewhat Disagree", value: "E", points: 1 },
      { text: "Strongly Disagree", value: "E", points: 2 }
    ]
  },
  {
    id: 3,
    dimension: "EI",
    statement: "I enjoy meeting new people at parties and social events.",
    options: [
      { text: "Strongly Agree", value: "E", points: 2 },
      { text: "Somewhat Agree", value: "E", points: 1 },
      { text: "Somewhat Disagree", value: "I", points: 1 },
      { text: "Strongly Disagree", value: "I", points: 2 }
    ]
  },
  {
    id: 4,
    dimension: "EI",
    statement: "I need quiet time alone to recharge after a busy day.",
    options: [
      { text: "Strongly Agree", value: "I", points: 2 },
      { text: "Somewhat Agree", value: "I", points: 1 },
      { text: "Somewhat Disagree", value: "E", points: 1 },
      { text: "Strongly Disagree", value: "E", points: 2 }
    ]
  },
  {
    id: 5,
    dimension: "EI",
    statement: "I like to talk through my problems with others.",
    options: [
      { text: "Strongly Agree", value: "E", points: 2 },
      { text: "Somewhat Agree", value: "E", points: 1 },
      { text: "Somewhat Disagree", value: "I", points: 1 },
      { text: "Strongly Disagree", value: "I", points: 2 }
    ]
  },
  {
    id: 6,
    dimension: "EI",
    statement: "I prefer deep conversations with one person over small talk with many.",
    options: [
      { text: "Strongly Agree", value: "I", points: 2 },
      { text: "Somewhat Agree", value: "I", points: 1 },
      { text: "Somewhat Disagree", value: "E", points: 1 },
      { text: "Strongly Disagree", value: "E", points: 2 }
    ]
  },
  {
    id: 7,
    dimension: "EI",
    statement: "I speak up easily in group meetings and discussions.",
    options: [
      { text: "Strongly Agree", value: "E", points: 2 },
      { text: "Somewhat Agree", value: "E", points: 1 },
      { text: "Somewhat Disagree", value: "I", points: 1 },
      { text: "Strongly Disagree", value: "I", points: 2 }
    ]
  },
  {
    id: 8,
    dimension: "EI",
    statement: "I work better when I can focus without interruptions.",
    options: [
      { text: "Strongly Agree", value: "I", points: 2 },
      { text: "Somewhat Agree", value: "I", points: 1 },
      { text: "Somewhat Disagree", value: "E", points: 1 },
      { text: "Strongly Disagree", value: "E", points: 2 }
    ]
  },

  // SENSING vs INTUITION (8 questions)
  {
    id: 9,
    dimension: "SN",
    statement: "I focus on facts and details rather than big picture ideas.",
    options: [
      { text: "Strongly Agree", value: "S", points: 2 },
      { text: "Somewhat Agree", value: "S", points: 1 },
      { text: "Somewhat Disagree", value: "N", points: 1 },
      { text: "Strongly Disagree", value: "N", points: 2 }
    ]
  },
  {
    id: 10,
    dimension: "SN",
    statement: "I enjoy exploring new possibilities and future potential.",
    options: [
      { text: "Strongly Agree", value: "N", points: 2 },
      { text: "Somewhat Agree", value: "N", points: 1 },
      { text: "Somewhat Disagree", value: "S", points: 1 },
      { text: "Strongly Disagree", value: "S", points: 2 }
    ]
  },
  {
    id: 11,
    dimension: "SN",
    statement: "I prefer step-by-step instructions when learning something new.",
    options: [
      { text: "Strongly Agree", value: "S", points: 2 },
      { text: "Somewhat Agree", value: "S", points: 1 },
      { text: "Somewhat Disagree", value: "N", points: 1 },
      { text: "Strongly Disagree", value: "N", points: 2 }
    ]
  },
  {
    id: 12,
    dimension: "SN",
    statement: "I trust my gut feelings and intuition when making decisions.",
    options: [
      { text: "Strongly Agree", value: "N", points: 2 },
      { text: "Somewhat Agree", value: "N", points: 1 },
      { text: "Somewhat Disagree", value: "S", points: 1 },
      { text: "Strongly Disagree", value: "S", points: 2 }
    ]
  },
  {
    id: 13,
    dimension: "SN",
    statement: "I like practical, hands-on activities more than theoretical discussions.",
    options: [
      { text: "Strongly Agree", value: "S", points: 2 },
      { text: "Somewhat Agree", value: "S", points: 1 },
      { text: "Somewhat Disagree", value: "N", points: 1 },
      { text: "Strongly Disagree", value: "N", points: 2 }
    ]
  },
  {
    id: 14,
    dimension: "SN",
    statement: "I often think about how things could be improved or done differently.",
    options: [
      { text: "Strongly Agree", value: "N", points: 2 },
      { text: "Somewhat Agree", value: "N", points: 1 },
      { text: "Somewhat Disagree", value: "S", points: 1 },
      { text: "Strongly Disagree", value: "S", points: 2 }
    ]
  },
  {
    id: 15,
    dimension: "SN",
    statement: "I pay close attention to details and notice small changes.",
    options: [
      { text: "Strongly Agree", value: "S", points: 2 },
      { text: "Somewhat Agree", value: "S", points: 1 },
      { text: "Somewhat Disagree", value: "N", points: 1 },
      { text: "Strongly Disagree", value: "N", points: 2 }
    ]
  },
  {
    id: 16,
    dimension: "SN",
    statement: "I enjoy brainstorming and coming up with creative solutions.",
    options: [
      { text: "Strongly Agree", value: "N", points: 2 },
      { text: "Somewhat Agree", value: "N", points: 1 },
      { text: "Somewhat Disagree", value: "S", points: 1 },
      { text: "Strongly Disagree", value: "S", points: 2 }
    ]
  },

  // THINKING vs FEELING (8 questions)
  {
    id: 17,
    dimension: "TF",
    statement: "I make decisions based on logic rather than emotions.",
    options: [
      { text: "Strongly Agree", value: "T", points: 2 },
      { text: "Somewhat Agree", value: "T", points: 1 },
      { text: "Somewhat Disagree", value: "F", points: 1 },
      { text: "Strongly Disagree", value: "F", points: 2 }
    ]
  },
  {
    id: 18,
    dimension: "TF",
    statement: "I consider how my decisions will affect other people's feelings.",
    options: [
      { text: "Strongly Agree", value: "F", points: 2 },
      { text: "Somewhat Agree", value: "F", points: 1 },
      { text: "Somewhat Disagree", value: "T", points: 1 },
      { text: "Strongly Disagree", value: "T", points: 2 }
    ]
  },
  {
    id: 19,
    dimension: "TF",
    statement: "I value fairness and justice above personal relationships.",
    options: [
      { text: "Strongly Agree", value: "T", points: 2 },
      { text: "Somewhat Agree", value: "T", points: 1 },
      { text: "Somewhat Disagree", value: "F", points: 1 },
      { text: "Strongly Disagree", value: "F", points: 2 }
    ]
  },
  {
    id: 20,
    dimension: "TF",
    statement: "I find it easy to understand and relate to others' emotions.",
    options: [
      { text: "Strongly Agree", value: "F", points: 2 },
      { text: "Somewhat Agree", value: "F", points: 1 },
      { text: "Somewhat Disagree", value: "T", points: 1 },
      { text: "Strongly Disagree", value: "T", points: 2 }
    ]
  },
  {
    id: 21,
    dimension: "TF",
    statement: "I prefer to give direct, honest feedback even if it might hurt feelings.",
    options: [
      { text: "Strongly Agree", value: "T", points: 2 },
      { text: "Somewhat Agree", value: "T", points: 1 },
      { text: "Somewhat Disagree", value: "F", points: 1 },
      { text: "Strongly Disagree", value: "F", points: 2 }
    ]
  },
  {
    id: 22,
    dimension: "TF",
    statement: "I try to maintain harmony and avoid conflict in groups.",
    options: [
      { text: "Strongly Agree", value: "F", points: 2 },
      { text: "Somewhat Agree", value: "F", points: 1 },
      { text: "Somewhat Disagree", value: "T", points: 1 },
      { text: "Strongly Disagree", value: "T", points: 2 }
    ]
  },
  {
    id: 23,
    dimension: "TF",
    statement: "I analyze problems objectively without letting emotions interfere.",
    options: [
      { text: "Strongly Agree", value: "T", points: 2 },
      { text: "Somewhat Agree", value: "T", points: 1 },
      { text: "Somewhat Disagree", value: "F", points: 1 },
      { text: "Strongly Disagree", value: "F", points: 2 }
    ]
  },
  {
    id: 24,
    dimension: "TF",
    statement: "I believe it's important to be kind even when being completely honest.",
    options: [
      { text: "Strongly Agree", value: "F", points: 2 },
      { text: "Somewhat Agree", value: "F", points: 1 },
      { text: "Somewhat Disagree", value: "T", points: 1 },
      { text: "Strongly Disagree", value: "T", points: 2 }
    ]
  },

  // JUDGING vs PERCEIVING (8 questions)
  {
    id: 25,
    dimension: "JP",
    statement: "I like to have things planned and organized in advance.",
    options: [
      { text: "Strongly Agree", value: "J", points: 2 },
      { text: "Somewhat Agree", value: "J", points: 1 },
      { text: "Somewhat Disagree", value: "P", points: 1 },
      { text: "Strongly Disagree", value: "P", points: 2 }
    ]
  },
  {
    id: 26,
    dimension: "JP",
    statement: "I prefer to keep my options open and be spontaneous.",
    options: [
      { text: "Strongly Agree", value: "P", points: 2 },
      { text: "Somewhat Agree", value: "P", points: 1 },
      { text: "Somewhat Disagree", value: "J", points: 1 },
      { text: "Strongly Disagree", value: "J", points: 2 }
    ]
  },
  {
    id: 27,
    dimension: "JP",
    statement: "I work better when I have clear deadlines and structure.",
    options: [
      { text: "Strongly Agree", value: "J", points: 2 },
      { text: "Somewhat Agree", value: "J", points: 1 },
      { text: "Somewhat Disagree", value: "P", points: 1 },
      { text: "Strongly Disagree", value: "P", points: 2 }
    ]
  },
  {
    id: 28,
    dimension: "JP",
    statement: "I enjoy starting new projects more than finishing them.",
    options: [
      { text: "Strongly Agree", value: "P", points: 2 },
      { text: "Somewhat Agree", value: "P", points: 1 },
      { text: "Somewhat Disagree", value: "J", points: 1 },
      { text: "Strongly Disagree", value: "J", points: 2 }
    ]
  },
  {
    id: 29,
    dimension: "JP",
    statement: "I like to finish tasks completely before moving on to something else.",
    options: [
      { text: "Strongly Agree", value: "J", points: 2 },
      { text: "Somewhat Agree", value: "J", points: 1 },
      { text: "Somewhat Disagree", value: "P", points: 1 },
      { text: "Strongly Disagree", value: "P", points: 2 }
    ]
  },
  {
    id: 30,
    dimension: "JP",
    statement: "I adapt easily when plans change unexpectedly.",
    options: [
      { text: "Strongly Agree", value: "P", points: 2 },
      { text: "Somewhat Agree", value: "P", points: 1 },
      { text: "Somewhat Disagree", value: "J", points: 1 },
      { text: "Strongly Disagree", value: "J", points: 2 }
    ]
  },
  {
    id: 31,
    dimension: "JP",
    statement: "I prefer to have a clean and organized workspace.",
    options: [
      { text: "Strongly Agree", value: "J", points: 2 },
      { text: "Somewhat Agree", value: "J", points: 1 },
      { text: "Somewhat Disagree", value: "P", points: 1 },
      { text: "Strongly Disagree", value: "P", points: 2 }
    ]
  },
  {
    id: 32,
    dimension: "JP",
    statement: "I work best under pressure and close to deadlines.",
    options: [
      { text: "Strongly Agree", value: "P", points: 2 },
      { text: "Somewhat Agree", value: "P", points: 1 },
      { text: "Somewhat Disagree", value: "J", points: 1 },
      { text: "Strongly Disagree", value: "J", points: 2 }
    ]
  }
];

// Trait score calculation function
const normalizeTrait = (rawScore, rawMax) => {
  const minVal = 45;
  const maxVal = 95;
  return Math.round(minVal + (rawScore / rawMax) * (maxVal - minVal));
};

// Updated scoring system
export const calculatePersonalityType = (responses) => {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  responses.forEach(response => {
    scores[response.value] += response.points;
  });

  const personalityType = 
    (scores.E > scores.I ? 'E' : 'I') +
    (scores.S > scores.N ? 'S' : 'N') +
    (scores.T > scores.F ? 'T' : 'F') +
    (scores.J > scores.P ? 'J' : 'P');

  // Calculate trait scores using new formula
  const traitScores = {
    Leadership: normalizeTrait(scores.E + scores.J, 32),
    Empathy: normalizeTrait(scores.F, 16),
    Creativity: normalizeTrait(scores.N + scores.P, 32),
    Organization: normalizeTrait(scores.J + scores.S, 32),
    Rationality: normalizeTrait(scores.T, 16),
    Resilience: normalizeTrait(scores.I + scores.T, 32)
  };

  // Calculate MBTI preference percentages
  const preferencePercentages = {
    E: Math.round((scores.E / (scores.E + scores.I)) * 100) || 0,
    I: Math.round((scores.I / (scores.E + scores.I)) * 100) || 0,
    S: Math.round((scores.S / (scores.S + scores.N)) * 100) || 0,
    N: Math.round((scores.N / (scores.S + scores.N)) * 100) || 0,
    T: Math.round((scores.T / (scores.T + scores.F)) * 100) || 0,
    F: Math.round((scores.F / (scores.T + scores.F)) * 100) || 0,
    J: Math.round((scores.J / (scores.J + scores.P)) * 100) || 0,
    P: Math.round((scores.P / (scores.J + scores.P)) * 100) || 0
  };

  return {
    personalityType,
    traitScores,
    preferencePercentages
  };
};

export default personalityQuestions;