export interface Question {
  id: string;
  category: string;
  question: string;
  description?: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  options: {
    value: string;
    label: string;
    description?: string;
    score: number;
  }[];
  construct: string;
  dimension: 'W' | 'I' | 'S' | 'C' | 'A' | 'R';
}

export const assessmentQuestions: Question[] = [
  // WILL - Motivation & Grit
  {
    id: 'w1',
    category: 'Motivation & Drive',
    question: 'When working on detailed tasks that require sustained attention, how do you typically respond?',
    type: 'multiple-choice',
    options: [
      { value: 'lose_focus', label: 'I tend to lose focus and make errors after a short time', score: 1 },
      { value: 'need_breaks', label: 'I need frequent breaks but can maintain quality', score: 3 },
      { value: 'stay_focused', label: 'I can maintain focus for extended periods with good accuracy', score: 4 },
      { value: 'thrive_detail', label: 'I actually thrive on detailed work and find it energizing', score: 5 }
    ],
    construct: 'persistence',
    dimension: 'W'
  },
  {
    id: 'w2',
    category: 'Motivation & Drive',
    question: 'How do you handle repetitive tasks that are essential but not particularly exciting?',
    type: 'multiple-choice',
    options: [
      { value: 'avoid', label: 'I actively avoid them and find them draining', score: 1 },
      { value: 'tolerate', label: 'I can tolerate them but prefer variety', score: 2 },
      { value: 'systematic', label: 'I develop systems to make them more efficient', score: 4 },
      { value: 'find_value', label: 'I find satisfaction in doing them well and consistently', score: 5 }
    ],
    construct: 'task_persistence',
    dimension: 'W'
  },
  {
    id: 'w3',
    category: 'Motivation & Drive',
    question: 'When you encounter a challenging problem that requires multiple attempts to solve, you typically:',
    type: 'multiple-choice',
    options: [
      { value: 'give_up', label: 'Give up after a few attempts and seek help', score: 1 },
      { value: 'try_few', label: 'Try several approaches but get frustrated if no quick solution', score: 2 },
      { value: 'persistent', label: 'Keep trying different approaches until resolved', score: 4 },
      { value: 'systematic_approach', label: 'Methodically work through possibilities and learn from each attempt', score: 5 }
    ],
    construct: 'grit',
    dimension: 'W'
  },

  // INTEREST - Career Relevance & Curiosity
  {
    id: 'i1',
    category: 'Healthcare Interest',
    question: 'How interested are you in healthcare and medical information?',
    type: 'multiple-choice',
    options: [
      { value: 'not_interested', label: 'Not particularly interested in healthcare topics', score: 1 },
      { value: 'somewhat', label: 'Somewhat interested but not my primary focus', score: 2 },
      { value: 'interested', label: 'Genuinely interested in healthcare and medical information', score: 4 },
      { value: 'fascinated', label: 'Fascinated by medical terminology and healthcare systems', score: 5 }
    ],
    construct: 'domain_interest',
    dimension: 'I'
  },
  {
    id: 'i2',
    category: 'Work Environment Preference',
    question: 'Which work environment appeals most to you?',
    type: 'multiple-choice',
    options: [
      { value: 'creative_dynamic', label: 'Creative, dynamic environments with lots of variety', score: 2 },
      { value: 'social_interaction', label: 'High social interaction and team collaboration', score: 2 },
      { value: 'structured_independent', label: 'Structured environment where I can work independently', score: 5 },
      { value: 'outdoor_hands_on', label: 'Outdoor or hands-on physical work', score: 1 }
    ],
    construct: 'work_preference',
    dimension: 'I'
  },
  {
    id: 'i3',
    category: 'Task Preference',
    question: 'Which type of work tasks do you find most engaging?',
    type: 'multiple-choice',
    options: [
      { value: 'creative_artistic', label: 'Creative and artistic projects', score: 1 },
      { value: 'people_helping', label: 'Helping people and providing services', score: 2 },
      { value: 'data_analysis', label: 'Analyzing data and ensuring accuracy', score: 5 },
      { value: 'leadership_management', label: 'Leading teams and managing projects', score: 2 }
    ],
    construct: 'task_interest',
    dimension: 'I'
  },

  // SKILL - Current Capabilities
  {
    id: 's1',
    category: 'Technical Skills',
    question: 'How comfortable are you with computer software and learning new systems?',
    type: 'multiple-choice',
    options: [
      { value: 'struggle', label: 'I struggle with technology and avoid learning new software', score: 1 },
      { value: 'basic', label: 'I can handle basic functions but need help with complex features', score: 2 },
      { value: 'comfortable', label: 'I\'m comfortable learning new software with some guidance', score: 4 },
      { value: 'proficient', label: 'I quickly master new software and help others learn it', score: 5 }
    ],
    construct: 'technical_aptitude',
    dimension: 'S'
  },
  {
    id: 's2',
    category: 'Communication Skills',
    question: 'How would you rate your written communication and documentation skills?',
    type: 'multiple-choice',
    options: [
      { value: 'poor', label: 'I struggle with written communication and documentation', score: 1 },
      { value: 'basic', label: 'I can write clearly but sometimes lack detail or organization', score: 2 },
      { value: 'good', label: 'I write clearly and organize information well', score: 4 },
      { value: 'excellent', label: 'I excel at detailed, accurate written communication', score: 5 }
    ],
    construct: 'communication',
    dimension: 'S'
  },
  {
    id: 's3',
    category: 'Attention to Detail',
    question: 'In your current work or studies, how often do you catch errors that others miss?',
    type: 'multiple-choice',
    options: [
      { value: 'rarely', label: 'Rarely - I often miss details myself', score: 1 },
      { value: 'sometimes', label: 'Sometimes - about average at catching errors', score: 2 },
      { value: 'often', label: 'Often - I notice details others overlook', score: 4 },
      { value: 'consistently', label: 'Consistently - I\'m known for my attention to detail', score: 5 }
    ],
    construct: 'attention_detail',
    dimension: 'S'
  },

  // COGNITIVE - Learning & Processing Ability
  {
    id: 'c1',
    category: 'Learning Ability',
    question: 'When learning complex rules or procedures, you typically:',
    type: 'multiple-choice',
    options: [
      { value: 'struggle_rules', label: 'Struggle to remember multiple rules and their applications', score: 1 },
      { value: 'need_repetition', label: 'Need significant repetition and practice to master them', score: 2 },
      { value: 'learn_steadily', label: 'Learn steadily with focused study and practice', score: 4 },
      { value: 'quick_mastery', label: 'Quickly understand and apply complex rule systems', score: 5 }
    ],
    construct: 'rule_learning',
    dimension: 'C'
  },
  {
    id: 'c2',
    category: 'Problem Solving',
    question: 'How do you approach solving problems that require following specific procedures?',
    type: 'multiple-choice',
    options: [
      { value: 'improvise', label: 'I prefer to improvise and find creative solutions', score: 2 },
      { value: 'mix_approaches', label: 'I mix following procedures with some creative adaptation', score: 3 },
      { value: 'follow_procedures', label: 'I carefully follow established procedures step by step', score: 5 },
      { value: 'avoid_procedures', label: 'I find detailed procedures constraining and difficult to follow', score: 1 }
    ],
    construct: 'procedural_thinking',
    dimension: 'C'
  },
  {
    id: 'c3',
    category: 'Information Processing',
    question: 'How well do you handle tasks that require processing large amounts of detailed information?',
    type: 'multiple-choice',
    options: [
      { value: 'overwhelmed', label: 'I feel overwhelmed and make frequent errors', score: 1 },
      { value: 'manageable_small', label: 'I can handle it in small chunks with breaks', score: 2 },
      { value: 'systematic', label: 'I develop systematic approaches to manage the information', score: 4 },
      { value: 'excel', label: 'I excel at organizing and processing large amounts of detailed data', score: 5 }
    ],
    construct: 'information_processing',
    dimension: 'C'
  },

  // ABILITY TO LEARN - Growth Mindset & Adaptability
  {
    id: 'a1',
    category: 'Learning Mindset',
    question: 'When you receive feedback about mistakes in your work, you typically:',
    type: 'multiple-choice',
    options: [
      { value: 'defensive', label: 'Feel defensive and discouraged', score: 1 },
      { value: 'reluctant', label: 'Accept it reluctantly but don\'t enjoy the process', score: 2 },
      { value: 'appreciate', label: 'Appreciate the feedback and work to improve', score: 4 },
      { value: 'seek_feedback', label: 'Actively seek feedback to continuously improve', score: 5 }
    ],
    construct: 'feedback_receptivity',
    dimension: 'A'
  },
  {
    id: 'a2',
    category: 'Adaptability',
    question: 'How do you handle changes in procedures or requirements?',
    type: 'multiple-choice',
    options: [
      { value: 'resist_change', label: 'I resist change and prefer to stick with familiar methods', score: 1 },
      { value: 'adapt_slowly', label: 'I adapt slowly and need extra support during transitions', score: 2 },
      { value: 'adapt_well', label: 'I adapt well with some adjustment time', score: 4 },
      { value: 'embrace_change', label: 'I embrace change and quickly master new approaches', score: 5 }
    ],
    construct: 'adaptability',
    dimension: 'A'
  },
  {
    id: 'a3',
    category: 'Growth Mindset',
    question: 'Your belief about abilities and intelligence is:',
    type: 'multiple-choice',
    options: [
      { value: 'fixed', label: 'People are born with certain abilities that don\'t change much', score: 1 },
      { value: 'somewhat_fixed', label: 'Some improvement is possible but within natural limits', score: 2 },
      { value: 'can_develop', label: 'Most abilities can be developed through effort and practice', score: 4 },
      { value: 'growth_mindset', label: 'Intelligence and skills can be significantly developed through dedication', score: 5 }
    ],
    construct: 'growth_mindset',
    dimension: 'A'
  },

  // REAL-WORLD FIT - Job Task Alignment
  {
    id: 'r1',
    category: 'Work Tasks',
    question: 'You need to review medical records and assign appropriate codes. How appealing is this task?',
    description: 'This involves reading physician notes, identifying diagnoses and procedures, and selecting the correct standardized codes.',
    type: 'multiple-choice',
    options: [
      { value: 'unappealing', label: 'Very unappealing - sounds boring and tedious', score: 1 },
      { value: 'tolerable', label: 'Tolerable if well-compensated', score: 2 },
      { value: 'interesting', label: 'Interesting - I like detailed analytical work', score: 4 },
      { value: 'exciting', label: 'Exciting - this combines healthcare knowledge with precision', score: 5 }
    ],
    construct: 'task_fit',
    dimension: 'R'
  },
  {
    id: 'r2',
    category: 'Work Environment',
    question: 'Your typical workday involves sitting at a computer, working independently with minimal social interaction. How does this sound?',
    type: 'multiple-choice',
    options: [
      { value: 'terrible', label: 'Terrible - I need social interaction and variety', score: 1 },
      { value: 'challenging', label: 'Challenging but I could adapt', score: 2 },
      { value: 'suitable', label: 'Suitable - I work well independently', score: 4 },
      { value: 'ideal', label: 'Ideal - I prefer focused, independent work', score: 5 }
    ],
    construct: 'environment_fit',
    dimension: 'R'
  },
  {
    id: 'r3',
    category: 'Career Motivation',
    question: 'What most motivates you about pursuing medical coding?',
    type: 'multiple-choice',
    options: [
      { value: 'quick_entry', label: 'Quick entry into healthcare field', score: 2 },
      { value: 'stable_income', label: 'Stable income and job security', score: 3 },
      { value: 'healthcare_contribution', label: 'Contributing to healthcare while using analytical skills', score: 5 },
      { value: 'work_life_balance', label: 'Good work-life balance and remote work options', score: 3 }
    ],
    construct: 'career_motivation',
    dimension: 'R'
  }
];

export const careerRoles = [
  {
    title: 'Medical Coding Specialist',
    description: 'Convert patient health information into standardized medical codes for billing and data management.',
    matchPercentage: 85,
    salaryRange: '$35,000 - $55,000',
    growthOutlook: 'Strong (8% growth)',
    requiredSkills: ['ICD-10', 'CPT Coding', 'Medical Terminology', 'Attention to Detail', 'HIPAA Compliance'],
    timeToEntry: '6-12 months training + certification'
  },
  {
    title: 'Clinical Documentation Specialist',
    description: 'Review and improve medical documentation to ensure accuracy and compliance.',
    matchPercentage: 78,
    salaryRange: '$45,000 - $65,000',
    growthOutlook: 'Very Strong (13% growth)',
    requiredSkills: ['Clinical Knowledge', 'Documentation Review', 'Quality Assurance', 'EHR Systems'],
    timeToEntry: '1-2 years experience + advanced training'
  },
  {
    title: 'Health Information Technician',
    description: 'Organize and manage health information data to ensure quality, accuracy, and security.',
    matchPercentage: 72,
    salaryRange: '$32,000 - $48,000',
    growthOutlook: 'Strong (8% growth)',
    requiredSkills: ['Health Information Systems', 'Data Management', 'Privacy Regulations', 'Database Skills'],
    timeToEntry: '3-9 months training'
  },
  {
    title: 'Medical Billing Coordinator',
    description: 'Process medical claims and handle billing operations for healthcare providers.',
    matchPercentage: 68,
    salaryRange: '$30,000 - $45,000',
    growthOutlook: 'Moderate (5% growth)',
    requiredSkills: ['Medical Billing', 'Insurance Processing', 'Customer Service', 'Software Proficiency'],
    timeToEntry: '3-6 months training'
  },
  {
    title: 'Insurance Claims Analyst',
    description: 'Review and process insurance claims to determine coverage and payment amounts.',
    matchPercentage: 64,
    salaryRange: '$38,000 - $52,000',
    growthOutlook: 'Moderate (5% growth)',
    requiredSkills: ['Claims Processing', 'Policy Analysis', 'Investigation Skills', 'Attention to Detail'],
    timeToEntry: '6-12 months training'
  }
];