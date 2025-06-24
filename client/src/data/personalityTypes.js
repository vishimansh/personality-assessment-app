export const personalityTypes = {
  // ANALYSTS
  INTJ: {
    name: "The Architect",
    category: "Analysts",
    description: "INTJs are independent, strategic thinkers who see patterns and connections others often miss. Driven by a desire for competence and mastery, they approach life with a visionary mindset, always planning for the long term. They excel at solving complex problems and are known for their high standards, both for themselves and others. While sometimes reserved and private, INTJs are deeply committed to their goals and value logic, efficiency, and innovation. Their combination of creativity and analytical ability allows them to implement original ideas and achieve remarkable results.",
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
    famous: [
      { name: "Elon Musk", wiki: "https://en.wikipedia.org/wiki/Elon_Musk" },
      { name: "Stephen Hawking", wiki: "https://en.wikipedia.org/wiki/Stephen_Hawking" },
      { name: "Nikola Tesla", wiki: "https://en.wikipedia.org/wiki/Nikola_Tesla" }
    ],
    color: "from-purple-600 to-indigo-600"
  },

  INTP: {
    name: "The Logician", 
    category: "Analysts",
    description: "INTPs are curious, inventive, and analytical minds with a passion for understanding how things work. They thrive on exploring abstract theories and love to challenge existing ideas, often coming up with novel solutions. Independent and open-minded, they are happiest when allowed to pursue their intellectual interests without constraints. INTPs may appear reserved, but their inner world is rich with ideas and possibilities. They value logic and objectivity, and while they may struggle with routine or practical matters, their creativity and adaptability make them natural innovators.",
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
        famous: [
      { name: "Albert Einstein", wiki: "https://en.wikipedia.org/wiki/Albert_Einstein" },
      { name: "Bill Gates", wiki: "https://en.wikipedia.org/wiki/Bill_Gates" },
      { name: "Charles Darwin", wiki: "https://en.wikipedia.org/wiki/Charles_Darwin" }
    ],
    color: "from-blue-600 to-purple-600"
  },

  ENTJ: {
    name: "The Commander",
    category: "Analysts", 
    description: "ENTJs are bold, decisive, and natural leaders who excel at organizing people and resources to achieve ambitious goals. They possess a rare combination of strategic vision and practical efficiency, often seeing opportunities where others see obstacles. ENTJs are confident and assertive, unafraid to take charge and make tough decisions. They value competence and are driven by a desire for success and achievement. While their directness can sometimes be intimidating, ENTJs inspire others with their energy, determination, and ability to turn ideas into reality.",
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
   famous: [
      { name: "Steve Jobs", wiki: "https://en.wikipedia.org/wiki/Steve_Jobs" },
      { name: "Margaret Thatcher", wiki: "https://en.wikipedia.org/wiki/Margaret_Thatcher" },
      { name: "Napoleon Bonaparte", wiki: "https://en.wikipedia.org/wiki/Napoleon" }
    ],
    color: "from-red-600 to-orange-600"
  },

  ENTP: {
    name: "The Debater",
    category: "Analysts",
    description: "ENTPs are energetic, quick-witted, and intellectually curious individuals who thrive on debate and exploration of new ideas. They are natural brainstormers, always eager to challenge assumptions and test boundaries. Adaptable and resourceful, ENTPs enjoy tackling complex problems and are not afraid to take risks. They can be charming and persuasive, often inspiring others with their enthusiasm. While they may struggle with routine or follow-through, their creativity and love of innovation make them exciting collaborators and thought leaders.",
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
    famous: [
      { name: "Mark Twain", wiki: "https://en.wikipedia.org/wiki/Mark_Twain" },
      { name: "Thomas Edison", wiki: "https://en.wikipedia.org/wiki/Thomas_Edison" },
      { name: "Richard Feynman", wiki: "https://en.wikipedia.org/wiki/Richard_Feynman" }
    ],
    color: "from-orange-600 to-yellow-600"
  },

  // DIPLOMATS
  INFJ: {
    name: "The Advocate",
    category: "Diplomats",
    description: "INFJs are insightful, compassionate, and idealistic individuals guided by a strong sense of purpose. They seek meaning in their lives and are driven to help others realize their potential. With a unique ability to understand people’s motivations, INFJs often serve as quiet leaders, inspiring those around them with their vision and integrity. They are deeply committed to their values and can be both creative and organized, skillfully turning their dreams into actionable plans. While sensitive to criticism, INFJs are resilient and tireless in their pursuit of positive change.",
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
     famous: [
      { name: "Martin Luther King Jr.", wiki: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr." },
      { name: "Nelson Mandela", wiki: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
      { name: "Mahatma Gandhi", wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi" }
    ],
    color: "from-green-600 to-teal-600"
  },

  INFP: {
    name: "The Mediator",
    category: "Diplomats",
    description: "INFPs are gentle, empathetic, and imaginative souls who are deeply attuned to their inner values. They are driven by a desire to make the world a better place and often express themselves through creative pursuits. INFPs are open-minded and flexible, valuing authenticity and harmony in their relationships. They may appear reserved, but their compassion and idealism run deep. While they can be sensitive and sometimes struggle with practical matters, their passion and integrity inspire others and help them overcome challenges.",
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
    famous: [
      { name: "William Shakespeare", wiki: "https://en.wikipedia.org/wiki/William_Shakespeare" },
      { name: "J.R.R. Tolkien", wiki: "https://en.wikipedia.org/wiki/J._R._R._Tolkien" },
      { name: "Vincent van Gogh", wiki: "https://en.wikipedia.org/wiki/Vincent_van_Gogh" }
    ],
    color: "from-pink-600 to-purple-600"
  },

  ENFJ: {
    name: "The Protagonist", 
    category: "Diplomats",
    description: "ENFJs are charismatic, inspiring, and empathetic leaders who excel at bringing people together. They have a natural ability to understand others’ feelings and motivations, making them effective communicators and motivators. ENFJs are driven by a desire to help others grow and succeed, often taking on mentorship or leadership roles. They are passionate about their beliefs and work tirelessly to create positive change in their communities. While they may sometimes neglect their own needs, ENFJs’ warmth and enthusiasm make them beloved by those around them.",
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
   famous: [
      { name: "Oprah Winfrey", wiki: "https://en.wikipedia.org/wiki/Oprah_Winfrey" },
      { name: "Barack Obama", wiki: "https://en.wikipedia.org/wiki/Barack_Obama" },
      { name: "Maya Angelou", wiki: "https://en.wikipedia.org/wiki/Maya_Angelou" }
    ],
    color: "from-emerald-600 to-green-600"
  },

  ENFP: {
    name: "The Campaigner",
    category: "Diplomats", 
    description: "ENFPs are enthusiastic, creative, and free-spirited individuals who see possibilities everywhere. They are energized by new ideas and experiences, and their curiosity leads them to explore many different interests. ENFPs are warm, sociable, and deeply empathetic, making them natural connectors and motivators. They value authenticity and seek meaningful relationships, often inspiring others with their optimism and zest for life. While they may struggle with routine or follow-through, their adaptability and passion make them dynamic and engaging companions.",
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
famous: [
      { name: "Robin Williams", wiki: "https://en.wikipedia.org/wiki/Robin_Williams" },
      { name: "Ellen DeGeneres", wiki: "https://en.wikipedia.org/wiki/Ellen_DeGeneres" },
      { name: "Walt Disney", wiki: "https://en.wikipedia.org/wiki/Walt_Disney" }
    ],
    color: "from-yellow-600 to-orange-600"
  },

  // SENTINELS
  ISTJ: {
    name: "The Logistician",
    category: "Sentinels",
    description: "ISTJs are responsible, reliable, and detail-oriented individuals who value tradition and order. They approach life with a practical mindset, excelling at organizing systems and ensuring that tasks are completed efficiently. ISTJs are thorough and dependable, often serving as the backbone of organizations and families. They take pride in their work and are committed to meeting their obligations. While they may be reserved and cautious, ISTJs’ loyalty and integrity make them trusted friends and colleagues.",
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
famous: [
      { name: "George Washington", wiki: "https://en.wikipedia.org/wiki/George_Washington" },
      { name: "Warren Buffett", wiki: "https://en.wikipedia.org/wiki/Warren_Buffett" },
      { name: "Angela Merkel", wiki: "https://en.wikipedia.org/wiki/Angela_Merkel" }
    ],
    color: "from-slate-600 to-gray-600"
  },

  ISFJ: {
    name: "The Defender",
    category: "Sentinels",
    description: "ISFJs are caring, conscientious, and loyal protectors who are deeply committed to the well-being of others. They are attentive to details and excel at creating harmony in their environments. ISFJs are practical and organized, often going above and beyond to support their loved ones and communities. They value tradition and stability, and their kindness is matched by a strong sense of duty. While they may be modest and sometimes neglect their own needs, ISFJs’ warmth and dedication make them cherished by those around them.",
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
     famous: [
      { name: "Mother Teresa", wiki: "https://en.wikipedia.org/wiki/Mother_Teresa" },
      { name: "Kate Middleton", wiki: "https://en.wikipedia.org/wiki/Catherine,_Princess_of_Wales" },
      { name: "Jimmy Carter", wiki: "https://en.wikipedia.org/wiki/Jimmy_Carter" }
    ],
    color: "from-blue-600 to-indigo-600"
  },

  ESTJ: {
    name: "The Executive",
    category: "Sentinels",
    description: "ESTJs are organized, assertive, and practical leaders who excel at managing people and resources. They are decisive and efficient, with a strong sense of responsibility and a clear vision for achieving goals. ESTJs value order and tradition, often taking charge to ensure that systems run smoothly. They are reliable and hardworking, setting high standards for themselves and others. While they may be perceived as inflexible or blunt, ESTJs’ commitment to excellence and leadership abilities make them invaluable in any setting.",
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
    famous: [
      { name: "Hillary Clinton", wiki: "https://en.wikipedia.org/wiki/Hillary_Clinton" },
      { name: "John D. Rockefeller", wiki: "https://en.wikipedia.org/wiki/John_D._Rockefeller" },
      { name: "Vince Lombardi", wiki: "https://en.wikipedia.org/wiki/Vince_Lombardi" }
    ],
    color: "from-red-600 to-pink-600"
  },

  ESFJ: {
    name: "The Consul",
    category: "Sentinels",
    description: "ESFJs are warm, outgoing, and conscientious individuals who thrive on helping others. They are natural caregivers, attentive to the needs and feelings of those around them. ESFJs excel at organizing events and bringing people together, creating supportive and harmonious environments. They value tradition and social connection, often serving as pillars of their communities. While they may be sensitive to criticism or overly concerned with others’ opinions, ESFJs’ generosity and reliability make them beloved friends and colleagues.",
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
    famous: [
      { name: "Taylor Swift", wiki: "https://en.wikipedia.org/wiki/Taylor_Swift" },
      { name: "Jennifer Garner", wiki: "https://en.wikipedia.org/wiki/Jennifer_Garner" },
      { name: "Danny Glover", wiki: "https://en.wikipedia.org/wiki/Danny_Glover" }
    ],
    color: "from-pink-600 to-rose-600"
  },

  // EXPLORERS
  ISTP: {
    name: "The Virtuoso",
    category: "Explorers",
    description: "ISTPs are independent, practical, and resourceful problem-solvers who thrive on hands-on experiences. They are observant and adaptable, able to quickly analyze situations and find effective solutions. ISTPs enjoy exploring how things work and are skilled at using tools and technology. They prefer to act rather than talk, often excelling in crisis situations. While they may be reserved or unpredictable, ISTPs’ calmness under pressure and ability to improvise make them invaluable in dynamic environments.",
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
    description: "ISFPs are gentle, artistic, and flexible individuals who are deeply attuned to their senses and emotions. They appreciate beauty in the world and often express themselves through creative pursuits. ISFPs value freedom and authenticity, preferring to live in the moment and explore new experiences. They are caring and supportive, though often private about their feelings. While they may struggle with planning or criticism, ISFPs’ warmth and creativity enrich the lives of those around them.",
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
    famous: [
      { name: "Bob Dylan", wiki: "https://en.wikipedia.org/wiki/Bob_Dylan" },
      { name: "Frida Kahlo", wiki: "https://en.wikipedia.org/wiki/Frida_Kahlo" },
      { name: "Audrey Hepburn", wiki: "https://en.wikipedia.org/wiki/Audrey_Hepburn" }
    ],
    // ...
    color: "from-purple-600 to-pink-600"
  },

  ESTP: {
    name: "The Entrepreneur",
    category: "Explorers",
    description: "ESTPs are energetic, bold, and perceptive individuals who thrive on excitement and new challenges. They are action-oriented and adaptable, able to think on their feet and respond quickly to changing circumstances. ESTPs enjoy taking risks and are skilled at influencing others, making them natural leaders in fast-paced environments. They value practicality and efficiency, often seeking immediate results. While they may be impatient or overlook long-term consequences, ESTPs’ charisma and resourcefulness make them dynamic and engaging personalities.",
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
    famous: [
      { name: "Donald Trump", wiki: "https://en.wikipedia.org/wiki/Donald_Trump" },
      { name: "Ernest Hemingway", wiki: "https://en.wikipedia.org/wiki/Ernest_Hemingway" },
      { name: "Madonna", wiki: "https://en.wikipedia.org/wiki/Madonna_(entertainer)" }
    ],
    color: "from-orange-600 to-red-600"
  },

  ESFP: {
    name: "The Entertainer",
    category: "Explorers",
    description: "ESFPs are lively, spontaneous, and enthusiastic individuals who love to be at the center of attention. They are sociable and fun-loving, bringing joy and energy to any group. ESFPs live in the moment and are highly attuned to their surroundings, often excelling in creative or performance-based roles. They value connection and seek to make others feel included and appreciated. While they may struggle with planning or criticism, ESFPs’ warmth, humor, and zest for life make every day an adventure.",
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
    famous: [
      { name: "Marilyn Monroe", wiki: "https://en.wikipedia.org/wiki/Marilyn_Monroe" },
      { name: "Elvis Presley", wiki: "https://en.wikipedia.org/wiki/Elvis_Presley" },
      { name: "Will Smith", wiki: "https://en.wikipedia.org/wiki/Will_Smith" }
    ],
    color: "from-yellow-600 to-pink-600"
  }
};

export default personalityTypes;
