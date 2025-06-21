export const personalityTypes = {
  // ANALYSTS
  INTJ: {
    name: "The Architect",
    category: "Analysts",
    description: "Imaginative and strategic thinkers, with a plan for everything.",
    traits: ["Strategic", "Analytical", "Independent", "Visionary"],
    strengths: [
      "High logical reasoning",
      "Creative and analytical thinking", 
      "Independent and self-motivated",
      "Long-term strategic planning"
    ],
    weaknesses: [
      "Can be overly critical",
      "May struggle with emotional expression",
      "Sometimes impatient with others",
      "Tendency to be perfectionistic"
    ],
    careers: [
      "Software Engineer", "Data Scientist", "Research Scientist", 
      "Strategic Planner", "Investment Banker", "Architect"
    ],
    famous: ["Elon Musk", "Stephen Hawking", "Nikola Tesla"],
    color: "from-purple-600 to-indigo-600"
  },

  INTP: {
    name: "The Logician", 
    category: "Analysts",
    description: "Innovative inventors with an unquenchable thirst for knowledge.",
    traits: ["Logical", "Intellectually Curious", "Deep Thinking", "Innovative"],
    strengths: [
      "Exceptional logical reasoning",
      "Creative problem-solving",
      "Independent thinking",
      "Adaptable and open-minded"
    ],
    weaknesses: [
      "May procrastinate on routine tasks",
      "Can be insensitive to others' feelings", 
      "Difficulty with practical matters",
      "May struggle with deadlines"
    ],
    careers: [
      "Research Scientist", "Software Developer", "Mathematician",
      "Philosopher", "Systems Analyst", "University Professor"
    ],
    famous: ["Albert Einstein", "Bill Gates", "Charles Darwin"],
    color: "from-blue-600 to-purple-600"
  },

  ENTJ: {
    name: "The Commander",
    category: "Analysts", 
    description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one.",
    traits: ["Confident", "Strategic", "Decisive", "Natural Leader"],
    strengths: [
      "Excellent leadership abilities",
      "Strategic thinking and planning",
      "Confident decision-making",
      "Goal-oriented and efficient"
    ],
    weaknesses: [
      "Can be overly demanding",
      "May dismiss others' emotions",
      "Impatient with inefficiency", 
      "Can be seen as intimidating"
    ],
    careers: [
      "CEO", "Management Consultant", "Investment Banker",
      "Lawyer", "Project Manager", "Entrepreneur"
    ],
    famous: ["Steve Jobs", "Margaret Thatcher", "Napoleon Bonaparte"],
    color: "from-red-600 to-orange-600"
  },

  ENTP: {
    name: "The Debater",
    category: "Analysts",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    traits: ["Smart", "Curious", "Outspoken", "Innovative"],
    strengths: [
      "Excellent brainstorming abilities",
      "Quick thinking and wit",
      "Adaptable and resourceful",
      "Enthusiastic and energetic"
    ],
    weaknesses: [
      "May struggle with routine tasks",
      "Can be argumentative",
      "Difficulty following through",
      "May neglect practical matters"
    ],
    careers: [
      "Entrepreneur", "Marketing Manager", "Journalist",
      "Consultant", "Inventor", "Public Relations"
    ],
    famous: ["Mark Twain", "Thomas Edison", "Richard Feynman"],
    color: "from-orange-600 to-yellow-600"
  },

  // DIPLOMATS
  INFJ: {
    name: "The Advocate",
    category: "Diplomats",
    description: "Quiet and mystical, yet very inspiring and tireless idealists.",
    traits: ["Conscientious", "Insightful", "Organized", "Inspiring"],
    strengths: [
      "Deep insight into people and situations",
      "Strong sense of purpose and values",
      "Creative and visionary thinking",
      "Excellent at helping others grow"
    ],
    weaknesses: [
      "Can be overly sensitive",
      "May struggle with criticism",
      "Tendency to be perfectionistic",
      "Can burn out from helping others"
    ],
    careers: [
      "Counselor", "Psychologist", "Writer", "Teacher",
      "Social Worker", "Human Resources"
    ],
    famous: ["Martin Luther King Jr.", "Nelson Mandela", "Mahatma Gandhi"],
    color: "from-green-600 to-teal-600"
  },

  INFP: {
    name: "The Mediator",
    category: "Diplomats",
    description: "Poetic, kind and altruistic people, always eager to help a good cause.",
    traits: ["Empathetic", "Introspective", "Imaginative", "Idealistic"],
    strengths: [
      "Strong personal values and integrity",
      "Creative and imaginative",
      "Empathetic and understanding",
      "Flexible and open-minded"
    ],
    weaknesses: [
      "Can be overly idealistic",
      "May struggle with criticism",
      "Difficulty with conflict",
      "Can be disorganized"
    ],
    careers: [
      "Writer", "Graphic Designer", "Counselor", "Teacher",
      "Social Worker", "Artist"
    ],
    famous: ["William Shakespeare", "J.R.R. Tolkien", "Vincent van Gogh"],
    color: "from-pink-600 to-purple-600"
  },

  ENFJ: {
    name: "The Protagonist", 
    category: "Diplomats",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    traits: ["Charismatic", "Passionate", "Empathetic", "Inspiring"],
    strengths: [
      "Excellent communication skills",
      "Natural leadership abilities", 
      "Empathetic and understanding",
      "Motivating and inspiring to others"
    ],
    weaknesses: [
      "Can be overly idealistic",
      "May neglect own needs",
      "Sensitive to criticism",
      "Can be manipulative"
    ],
    careers: [
      "Teacher", "Counselor", "Public Relations", "Sales Manager",
      "Human Resources", "Life Coach"
    ],
    famous: ["Oprah Winfrey", "Barack Obama", "Maya Angelou"],
    color: "from-emerald-600 to-green-600"
  },

  ENFP: {
    name: "The Campaigner",
    category: "Diplomats", 
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
    traits: ["Warm", "Outgoing", "Encouraging", "Curious"],
    strengths: [
      "Enthusiastic and energetic",
      "Creative and innovative",
      "Excellent people skills",
      "Flexible and spontaneous"
    ],
    weaknesses: [
      "Can be disorganized",
      "May struggle with routine tasks",
      "Difficulty with follow-through",
      "Can be overly emotional"
    ],
    careers: [
      "Marketing", "Journalism", "Acting", "Teaching",
      "Counseling", "Event Planning"
    ],
    famous: ["Robin Williams", "Ellen DeGeneres", "Walt Disney"],
    color: "from-yellow-600 to-orange-600"
  },

  // SENTINELS
  ISTJ: {
    name: "The Logistician",
    category: "Sentinels",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    traits: ["Responsible", "Organized", "Realistic", "Loyal"],
    strengths: [
      "Highly reliable and responsible",
      "Excellent organizational skills",
      "Strong attention to detail",
      "Practical and realistic approach"
    ],
    weaknesses: [
      "Can be inflexible",
      "May resist change",
      "Difficulty expressing emotions",
      "Can be overly critical"
    ],
    careers: [
      "Accountant", "Project Manager", "Administrator", 
      "Engineer", "Military Officer", "Auditor"
    ],
    famous: ["George Washington", "Warren Buffett", "Angela Merkel"],
    color: "from-slate-600 to-gray-600"
  },

  ISFJ: {
    name: "The Defender",
    category: "Sentinels",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    traits: ["Quiet", "Considerate", "Hardworking", "Loyal"],
    strengths: [
      "Supportive and reliable",
      "Practical and organized",
      "Strong sense of duty",
      "Excellent memory for details"
    ],
    weaknesses: [
      "Can be overly humble",
      "May neglect own needs",
      "Difficulty with change",
      "Can be taken advantage of"
    ],
    careers: [
      "Nurse", "Teacher", "Social Worker", "Administrator",
      "Counselor", "Human Resources"
    ],
    famous: ["Mother Teresa", "Kate Middleton", "Jimmy Carter"],
    color: "from-blue-600 to-indigo-600"
  },

  ESTJ: {
    name: "The Executive",
    category: "Sentinels",
    description: "Excellent administrators, unsurpassed at managing things – or people.",
    traits: ["Organized", "Assertive", "Practical", "Decisive"],
    strengths: [
      "Excellent leadership and management",
      "Highly organized and efficient",
      "Strong work ethic",
      "Good at making decisions"
    ],
    weaknesses: [
      "Can be inflexible",
      "May be insensitive to others",
      "Difficulty with change",
      "Can be overly controlling"
    ],
    careers: [
      "Manager", "Administrator", "Military Officer",
      "Judge", "Financial Officer", "Sales Manager"
    ],
    famous: ["Hillary Clinton", "John D. Rockefeller", "Vince Lombardi"],
    color: "from-red-600 to-pink-600"
  },

  ESFJ: {
    name: "The Consul",
    category: "Sentinels",
    description: "Extraordinarily caring, social and popular people, always eager to help.",
    traits: ["Warm", "Cooperative", "Loyal", "Conscientious"],
    strengths: [
      "Excellent people skills",
      "Supportive and encouraging",
      "Reliable and responsible",
      "Good at organizing people and events"
    ],
    weaknesses: [
      "Can be overly concerned with others' opinions",
      "May neglect own needs",
      "Difficulty with criticism",
      "Can be inflexible"
    ],
    careers: [
      "Teacher", "Nurse", "Social Worker", "Event Planner",
      "Human Resources", "Customer Service"
    ],
    famous: ["Taylor Swift", "Jennifer Garner", "Danny Glover"],
    color: "from-pink-600 to-rose-600"
  },

  // EXPLORERS
  ISTP: {
    name: "The Virtuoso",
    category: "Explorers",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    traits: ["Observant", "Adaptable", "Problem-solving", "Independent"],
    strengths: [
      "Excellent troubleshooting skills",
      "Practical and hands-on approach",
      "Calm under pressure",
      "Flexible and adaptable"
    ],
    weaknesses: [
      "Can be insensitive to others",
      "May struggle with long-term planning",
      "Difficulty expressing emotions",
      "Can be unpredictable"
    ],
    careers: [
      "Engineer", "Mechanic", "Pilot", "Software Developer",
      "Forensic Scientist", "Athletic Trainer"
    ],
    famous: ["Clint Eastwood", "Michael Jordan", "Bruce Lee"],
    color: "from-gray-600 to-slate-600"
  },

  ISFP: {
    name: "The Adventurer",
    category: "Explorers",
    description: "Flexible and charming artists, always ready to explore and experience something new.",
    traits: ["Caring", "Passionate", "Loyal", "Artistic"],
    strengths: [
      "Creative and artistic",
      "Flexible and open-minded",
      "Loyal and supportive",
      "Strong personal values"
    ],
    weaknesses: [
      "Can be overly competitive",
      "May struggle with planning",
      "Difficulty with criticism",
      "Can be unpredictable"
    ],
    careers: [
      "Artist", "Designer", "Musician", "Photographer",
      "Counselor", "Veterinarian"
    ],
    famous: ["Bob Dylan", "Frida Kahlo", "Audrey Hepburn"],
    color: "from-purple-600 to-pink-600"
  },

  ESTP: {
    name: "The Entrepreneur",
    category: "Explorers",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    traits: ["Bold", "Pragmatic", "Energetic", "Direct"],
    strengths: [
      "Excellent people skills",
      "Practical and realistic",
      "Energetic and enthusiastic",
      "Good at crisis management"
    ],
    weaknesses: [
      "Can be impatient",
      "May struggle with long-term planning",
      "Difficulty with theory and abstract concepts",
      "Can be insensitive"
    ],
    careers: [
      "Sales Representative", "Entrepreneur", "Paramedic",
      "Police Officer", "Real Estate Agent", "Coach"
    ],
    famous: ["Donald Trump", "Ernest Hemingway", "Madonna"],
    color: "from-orange-600 to-red-600"
  },

  ESFP: {
    name: "The Entertainer",
    category: "Explorers",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
    traits: ["Enthusiastic", "Spontaneous", "Sociable", "Friendly"],
    strengths: [
      "Excellent people skills",
      "Enthusiastic and energetic",
      "Flexible and spontaneous",
      "Practical and realistic"
    ],
    weaknesses: [
      "Can be easily bored",
      "May struggle with long-term planning",
      "Difficulty with criticism",
      "Can be overly sensitive"
    ],
    careers: [
      "Actor", "Musician", "Event Planner", "Teacher",
      "Social Worker", "Fashion Designer"
    ],
    famous: ["Marilyn Monroe", "Elvis Presley", "Will Smith"],
    color: "from-yellow-600 to-pink-600"
  }
};

export default personalityTypes;
