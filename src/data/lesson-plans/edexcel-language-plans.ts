// ─── Types ───────────────────────────────────────────────────────────────────

export interface LessonActivity {
  title: string;
  duration: string;
  instructions: string;
  steps?: string[];
  differentiation?: { support: string; core: string; stretch: string };
  resources?: string[];
}

export interface WorksheetQuestion {
  question: string;
  lines: number;
  modelAnswer?: string;
  marks?: number;
}

export interface LessonPlan {
  id: string;
  title: string;
  text: string;
  board: string;
  yearGroup: string;
  duration: string;
  objectives: string[];
  successCriteria: string[];
  keywords: string[];
  starterActivity: LessonActivity;
  mainActivities: LessonActivity[];
  plenaryActivity: LessonActivity;
  homework?: string;
  worksheetQuestions: WorksheetQuestion[];
  teacherNotes: string[];
  targetedSkills: string[];
}

// ════════════════════════════════════════════════════════════════════════════════
// PAPER 1: NON-FICTION READING & WRITING (1EN0/01)
// ════════════════════════════════════════════════════════════════════════════════

// ── Lesson 1: Understanding Paper 1 Structure & Assessment Objectives ──

const edexcelLang1: LessonPlan = {
  id: 'edexcel-lang-01-paper1-structure',
  title: 'Edexcel Language Paper 1: Structure & Assessment Objectives',
  text: 'Edexcel Language Paper 1 (1EN0/01)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the structure of Paper 1 and its five question types',
    'Map each question to relevant assessment objectives (AO1-AO4)',
    'Identify mark allocations and develop a timing strategy',
    'Recognise what Edexcel expects for each question'
  ],
  successCriteria: [
    'I can describe all five questions on Paper 1 and their mark values',
    'I can explain which AO each question targets',
    'I can create a realistic timing plan for 105 minutes',
    'I understand the difference between retrieval, analysis, and evaluation'
  ],
  keywords: ['non-fiction', 'assessment objective', 'retrieval', 'analysis', 'evaluation', 'timing', 'mark allocation'],
  starterActivity: {
    title: 'Paper 1 Question Types Speed Match',
    duration: '8 minutes',
    instructions: 'Prepare five cards with question types (Q1 retrieval, Q2/Q3 analysis, Q4 evaluation, Q5 writing) and five cards with mark allocations (1 mark, 6 marks, 6 marks, 15 marks, 72 marks). Students match them in pairs, then reveal answers and briefly explain why Edexcel allocates marks this way.',
    differentiation: {
      support: 'Provide four matches only; reduce challenge by highlighting key words.',
      core: 'Students complete all five matches and justify their answers.',
      stretch: 'Students predict why marks increase and discuss the cognitive demand of each question type.'
    },
    resources: ['Question type cards', 'Mark allocation cards']
  },
  mainActivities: [
    {
      title: 'Question-by-Question Breakdown',
      duration: '25 minutes',
      instructions: 'Display the Paper 1 overview grid. Walk through each question: (1) Q1 (1 mark, locate information), (2) Q2 (6 marks, analyse language in context), (3) Q3 (6 marks, analyse structure and form), (4) Q4 (15 marks, evaluate writer\'s viewpoint), (5) Q5 (72 marks, write persuasively or descriptively). Show a specimen extract and demonstrate how each question works. Emphasise that Q1 tests surface retrieval, Q2-Q3 test analytical reading, Q4 tests critical thinking, and Q5 tests extended writing under time pressure.',
      steps: [
        'Display specimen extract on visualiser',
        'Model a Q1 response (highlight the answer, explain why)',
        'Model a Q2 analysis paragraph (technique → quotation → effect)',
        'Model a Q3 structure analysis (opening, middle, ending effects)',
        'Model a Q4 evaluation response (agree/disagree stance + evidence)',
        'Discuss what a timed Q5 response requires'
      ],
      differentiation: {
        support: 'Provide a scaffolded question-by-question handout with sentence starters.',
        core: 'Students follow the full walkthrough and add notes to their own grids.',
        stretch: 'Students predict assessment criteria for each question before teacher reveals them.'
      },
      resources: ['Paper 1 specimen extract', 'Question overview grid handout', 'AO reference chart', 'Mark scheme extracts']
    }
  ],
  plenaryActivity: {
    title: 'Timing Plan Creation',
    duration: '7 minutes',
    instructions: 'Students create a personal timing plan for 105 minutes. Recommend: Q1 (2 mins), Q2 (10 mins), Q3 (10 mins), Q4 (20 mins), Q5 (55 mins), buffer (8 mins). Discuss why Q5 gets the most time and why rushing the planning phase is costly.',
    differentiation: {
      support: 'Provide a pre-filled timing plan and ask students to explain why.',
      core: 'Students create their own plan and compare it to the teacher recommendation.',
      stretch: 'Students justify their plan and discuss how they would adjust if they finished Q5 early.'
    }
  },
  homework: 'Write a 150-word explanation of why Question 5 accounts for more than half the marks on Paper 1. What skills must a student demonstrate to score highly?',
  worksheetQuestions: [
    {
      question: 'List the five questions on Edexcel Language Paper 1 and their mark allocations.',
      lines: 5,
      modelAnswer: 'Q1: 1 mark (retrieval). Q2: 6 marks (language analysis, AO2). Q3: 6 marks (structure analysis, AO2). Q4: 15 marks (critical evaluation, AO4). Q5: 72 marks (writing persuasively or descriptively, AO5/AO6).',
      marks: 5
    }
  ],
  teacherNotes: [
    'Use a real specimen or past paper to make this concrete.',
    'Emphasise the mark allocation as the key to time management.',
    'The AO discussion can feel abstract; use visual examples.'
  ],
  targetedSkills: ['time management', 'strategic reading', 'understanding assessment criteria']
};

// ── Lesson 2: Question 1 (Retrieval) – Locating Information ──

const edexcelLang2: LessonPlan = {
  id: 'edexcel-lang-02-q1-retrieval',
  title: 'Question 1: Retrieval – Locating & Presenting Information',
  text: 'Edexcel Language Paper 1 Q1 (1 mark)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '45 minutes',
  objectives: [
    'Understand what Q1 tests: direct retrieval from a non-fiction text',
    'Practise locating answers efficiently under time pressure',
    'Present answers clearly and concisely'
  ],
  successCriteria: [
    'I can spot the answer to a Q1 question within one minute',
    'I know how much information to include in my answer',
    'I present my answer clearly'
  ],
  keywords: ['retrieval', 'skimming', 'scanning', 'direct quotation', 'paraphrase', 'concise'],
  starterActivity: {
    title: 'Speed Retrieval Race',
    duration: '5 minutes',
    instructions: 'Give students a short non-fiction extract (200 words). Ask four retrieval questions. Students race to find answers in one minute per question.',
    differentiation: {
      support: 'Ask only two questions; highlight key words in the extract.',
      core: 'Students answer all four questions and time themselves.',
      stretch: 'Students write their own Q1-style questions for peers.'
    },
    resources: ['Short non-fiction extract', 'Four retrieval questions', 'Timer']
  },
  mainActivities: [
    {
      title: 'What Does Retrieval Mean? Exploring Q1 Depth',
      duration: '15 minutes',
      instructions: 'Display three Q1 questions and model answering each. Discuss why Q1 is only 1 mark: there is one correct answer. Emphasise that Q1 is a confidence-builder designed to be quick and achievable.',
      steps: [
        'Display Q1 question type 1: straightforward retrieval',
        'Model finding and highlighting the answer',
        'Display Q1 type 2: slightly inferential retrieval',
        'Model how to infer the answer',
        'Recap: Q1 is not analysing or evaluating'
      ],
      differentiation: {
        support: 'Provide pre-highlighted answers; students copy and explain.',
        core: 'Students identify answers independently and write them out.',
        stretch: 'Students identify question types and explain retrieval levels.'
      },
      resources: ['Q1 question bank', 'Non-fiction extract', 'Model answers']
    },
    {
      title: 'Practice & Timing: Five Q1 Questions',
      duration: '18 minutes',
      instructions: 'Provide a fresh non-fiction extract and five Q1-style questions. Students answer under timed conditions (1 minute per question).',
      differentiation: {
        support: 'Reduce to three questions; allow 8 minutes.',
        core: 'Complete all five questions in 5 minutes.',
        stretch: 'Complete five questions and explain how you found each answer.'
      },
      resources: ['Q1 practice extract and questions', 'Model answers', 'Timer']
    }
  ],
  plenaryActivity: {
    title: 'Q1 Tips and Misconceptions',
    duration: '5 minutes',
    instructions: 'Recap the key tip: read Q1 question first, identify the key word, scan the extract, write concisely. Discuss common mistakes: copying entire sentences, writing opinions, failing to re-read the question.',
    differentiation: {
      support: 'Provide a Q1 checklist.',
      core: 'Students write their own tips and discuss with a partner.',
      stretch: 'Students identify why some students overthinki Q1.'
    }
  },
  homework: 'Find a news article online. Write five Q1-style retrieval questions for a peer. Ensure your questions test straightforward retrieval.',
  worksheetQuestions: [
    {
      question: 'What is the purpose of Question 1, and why is it worth only 1 mark?',
      lines: 3,
      modelAnswer: 'Q1 tests direct retrieval: the ability to locate specific information. It is 1 mark because there is one correct answer.',
      marks: 2
    }
  ],
  teacherNotes: [
    'Q1 can feel trivial but is valuable for student confidence and time management.',
    'Some students overthink Q1 and write analytical paragraphs. Reinforce retrieval focus.',
    'If a student struggles with Q1, check reading comprehension and vocabulary.'
  ],
  targetedSkills: ['reading for purpose', 'skimming and scanning', 'time management', 'concision']
};

// Continuing with remaining lessons in next chunks...

// ── Lesson 3: Questions 2 & 3 (Analysis) – Language and Structure ──

const edexcelLang3: LessonPlan = {
  id: 'edexcel-lang-03-q2-q3-analysis',
  title: 'Questions 2 & 3: Language and Structure Analysis',
  text: 'Edexcel Language Paper 1 Q2 & Q3 (6 marks each)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '90 minutes',
  objectives: [
    'Understand how to analyse language techniques and their effects',
    'Learn to analyse structure and form in non-fiction texts',
    'Write analytical paragraphs that address AO2 criteria'
  ],
  successCriteria: [
    'I can identify language techniques and explain their effects on the reader',
    'I can select and embed quotations that support my analysis',
    'I can analyse structural choices and their impact on reader engagement'
  ],
  keywords: ['technique', 'effect', 'quotation', 'connotation', 'structure', 'form', 'repetition', 'metaphor', 'AO2'],
  starterActivity: {
    title: 'Technique Detective',
    duration: '8 minutes',
    instructions: 'Display six short extracts. Each contains one language technique (alliteration, metaphor, rhetorical question, imperative, repetition, triplet). Students identify the technique and predict its effect.',
    differentiation: {
      support: 'Label techniques and ask students to find examples and suggest effects.',
      core: 'Students identify techniques and effects independently.',
      stretch: 'Students predict why each technique is more effective than alternatives.'
    },
    resources: ['Six technique extracts slide deck']
  },
  mainActivities: [
    {
      title: 'Language Analysis (Q2)',
      duration: '35 minutes',
      instructions: 'Display a non-fiction extract. Model the Q2 analytical process. Model writing a secure analytical paragraph. Provide three sample responses.',
      differentiation: {
        support: 'Pre-highlight language techniques; provide sentence starters.',
        core: 'Students identify techniques, select quotations, and write one full paragraph.',
        stretch: 'Students write two analytical paragraphs and self-assess against Level 3 descriptors.'
      },
      resources: ['Non-fiction extract', 'Q2 model paragraph', 'Three sample Q2 responses', 'AO2 mark scheme descriptors']
    },
    {
      title: 'Structure Analysis (Q3)',
      duration: '35 minutes',
      instructions: 'Explain the difference between language and structure. Model how to answer Q3.',
      differentiation: {
        support: 'Provide a structure checklist and pre-identified features.',
        core: 'Students identify structural features and write a full Q3 response.',
        stretch: 'Students write two Q3 responses on different structural aspects.'
      },
      resources: ['Non-fiction extract', 'Structure analysis frame', 'Three sample Q3 responses']
    },
    {
      title: 'Guided Practice: Q2 and Q3 on Fresh Extract',
      duration: '12 minutes',
      instructions: 'Provide a new extract. Students write one paragraph for each question within 15 minutes total.',
      resources: ['New extract', 'Q2 and Q3 questions']
    }
  ],
  plenaryActivity: {
    title: 'Q2 vs Q3 Clarity Check',
    duration: '5 minutes',
    instructions: 'Display two sample responses side by side. Discuss differences. Recap: Q2 = language; Q3 = structure/form.',
    differentiation: {
      support: 'Provide sentence starters.',
      core: 'Students write their own distinction.',
      stretch: 'Students discuss why both skills are needed.'
    }
  },
  homework: 'Write a Q2 and Q3 response to a new extract. Aim for 6-8 sentences per response.',
  worksheetQuestions: [
    {
      question: 'Explain language analysis vs. structure analysis with examples.',
      lines: 5,
      modelAnswer: 'Language analysis focuses on word choice and techniques like metaphor. Structure analysis focuses on text organization: openings, paragraph progression, sentence variety. Language example: "vivid imagery creates beauty." Structure example: "Short sentences create urgency."',
      marks: 4
    }
  ],
  teacherNotes: [
    'Use colour-coding and consistent examples to distinguish language from structure.',
    'Q2 and Q3 are equally weighted. Emphasise balanced time allocation.'
  ],
  targetedSkills: ['text analysis', 'technical terminology', 'embedded quotation', 'critical reading']
};

// ── Lesson 4: Question 4 (Evaluation) ──

const edexcelLang4: LessonPlan = {
  id: 'edexcel-lang-04-q4-evaluation',
  title: 'Question 4: Critical Evaluation – Judging a Writer\'s Viewpoint',
  text: 'Edexcel Language Paper 1 Q4 (15 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '75 minutes',
  objectives: [
    'Understand evaluation as distinct from analysis',
    'Take a stance and defend it with evidence',
    'Address counterarguments'
  ],
  successCriteria: [
    'I can identify the writer\'s viewpoint',
    'I can take a clear stance (agree, disagree, nuanced)',
    'I support my evaluation with textual evidence and reasoning'
  ],
  keywords: ['evaluation', 'viewpoint', 'stance', 'evidence', 'reasoning', 'counterargument', 'AO3', 'AO4'],
  starterActivity: {
    title: 'Agree or Disagree?',
    duration: '5 minutes',
    instructions: 'Read statements from non-fiction texts. Students vote and discuss why people disagree.',
    differentiation: {
      support: 'Ask for show of hands; don\'t require explanation.',
      core: 'Students vote and give one reason.',
      stretch: 'Students explain why the statement is ambiguous.'
    }
  },
  mainActivities: [
    {
      title: 'Understanding Evaluation',
      duration: '20 minutes',
      instructions: 'Define evaluation. Model how to approach Q4: identify viewpoint, decide stance, select evidence, explain reasoning, acknowledge opposing view.',
      steps: [
        'Define evaluation vs. analysis',
        'Identify the writer\'s viewpoint',
        'Model taking a stance',
        'Model selecting evidence',
        'Write a complete Q4 response'
      ],
      differentiation: {
        support: 'Provide a structured Q4 frame.',
        core: 'Students follow the process and write a response.',
        stretch: 'Students write two Q4 responses with different stances.'
      },
      resources: ['Non-fiction extract', 'Q4 model response', 'Structured Q4 frame']
    },
    {
      title: 'Sample Evaluation Responses',
      duration: '18 minutes',
      instructions: 'Show three Q4 responses (weak, secure, exceptional). Students rank them and identify differences.',
      differentiation: {
        support: 'Provide pre-labelled responses.',
        core: 'Students rank independently and justify.',
        stretch: 'Students write their own Q4 response and peer-assess.'
      },
      resources: ['Three sample Q4 responses', 'Mark scheme descriptors']
    },
    {
      title: 'Guided Practice: Writing Q4',
      duration: '27 minutes',
      instructions: 'Provide a new extract and Q4 question. Students write a response within 25 minutes.',
      differentiation: {
        support: 'Provide planning template and sentence starters.',
        core: 'Full independent response.',
        stretch: 'Full response plus self-assessment using mark scheme.'
      },
      resources: ['Non-fiction extract', 'Q4 question', 'Mark scheme']
    }
  ],
  plenaryActivity: {
    title: 'The Key to Q4 Success',
    duration: '5 minutes',
    instructions: 'Q4 rewards well-supported judgements, not right or wrong answers. Students write one personal tip.',
    differentiation: {
      support: 'Provide Q4 tip checklist.',
      core: 'Students generate their own tip.',
      stretch: 'Students discuss why Q4 is the most cognitively demanding.'
    }
  },
  homework: 'Write a full Q4 response (approx. 200 words). Use the mark scheme to self-assess.',
  worksheetQuestions: [
    {
      question: 'Explain the difference between analysis and evaluation.',
      lines: 4,
      modelAnswer: 'Analysis examines how writers use language and structure. Evaluation judges whether the argument is convincing. Analysis is descriptive; evaluation is critical and requires personal judgement supported by reasoning.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students struggle to distinguish evaluation from analysis.',
    'Some students fear disagreeing with the writer.',
    'Q4 is worth 15 marks. Emphasise this importance.'
  ],
  targetedSkills: ['critical thinking', 'reasoned argument', 'textual evidence use', 'stance clarity']
};

// ── Lesson 5: Question 5 Part A – Persuasive Writing ──

const edexcelLang5: LessonPlan = {
  id: 'edexcel-lang-05-q5-persuasive-writing',
  title: 'Question 5 Part A: Persuasive Writing – Non-Fiction',
  text: 'Edexcel Language Paper 1 Q5A (36 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '90 minutes',
  objectives: [
    'Understand persuasive writing purpose and audience',
    'Develop strategies for planning and structuring persuasive texts',
    'Apply persuasive techniques',
    'Write responses that meet AO5 criteria'
  ],
  successCriteria: [
    'I can identify purpose (persuade) and audience',
    'I can plan persuasive text with clear structure',
    'I can use persuasive techniques effectively',
    'I can write within 45 minutes'
  ],
  keywords: ['persuasive writing', 'audience', 'purpose', 'rhetorical devices', 'emotive language', 'evidence', 'AO5'],
  starterActivity: {
    title: 'Persuasion in the Wild',
    duration: '8 minutes',
    instructions: 'Show three advertising slogans. Students identify purpose, technique, and audience.',
    differentiation: {
      support: 'Provide pre-highlighted techniques.',
      core: 'Students identify purpose, technique, and audience.',
      stretch: 'Students evaluate effectiveness and suggest alternatives.'
    }
  },
  mainActivities: [
    {
      title: 'Structure of Persuasive Writing',
      duration: '25 minutes',
      instructions: 'Explain persuasive structure: hook, position, point 1, point 2, counterargument, conclusion. Model planning a Q5A response.',
      differentiation: {
        support: 'Provide a persuasive writing frame.',
        core: 'Students create their own plan.',
        stretch: 'Students identify which techniques they will use in each paragraph.'
      },
      resources: ['Q5A task prompt', 'Persuasive structure frame']
    },
    {
      title: 'Persuasive Techniques and Rhetorical Devices',
      duration: '25 minutes',
      instructions: 'Teach key techniques: rhetorical questions, repetition, emotive language, triplet, direct address, anecdotes, facts, counterargument.',
      differentiation: {
        support: 'Provide colour-coded examples.',
        core: 'Students identify techniques in a provided passage.',
        stretch: 'Students identify techniques and discuss effectiveness.'
      },
      resources: ['Technique definitions and examples', 'Technique Bank handout']
    },
    {
      title: 'Timed Practice: Writing Q5A',
      duration: '30 minutes',
      instructions: 'Provide a Q5A task. Students write a response within 45 minutes.',
      differentiation: {
        support: 'Provide planning template and sentence starters.',
        core: 'Full independent response.',
        stretch: 'Full response plus self-assessment using AO5 descriptors.'
      },
      resources: ['Q5A task prompt', 'Planning template', 'Mark scheme descriptors']
    }
  ],
  plenaryActivity: {
    title: 'Persuasive Writing Reflection',
    duration: '5 minutes',
    instructions: 'Students reflect on techniques used. Write one technique to focus on in next task.',
    differentiation: {
      support: 'Provide reflection sentence starters.',
      core: 'Students write their own reflection.',
      stretch: 'Students plan how they will develop one technique.'
    }
  },
  homework: 'Write a persuasive text (300-400 words). Use at least three techniques. Self-assess using Technique Bank and mark scheme.',
  worksheetQuestions: [
    {
      question: 'What is the purpose of persuasive writing?',
      lines: 3,
      modelAnswer: 'Persuasive writing aims to convince the reader to believe something or take action using techniques and evidence.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Students often confuse persuasive with opinion writing.',
    'Students may overuse rhetorical devices. Teach restraint.',
    'Use real-world persuasive texts as models.'
  ],
  targetedSkills: ['persuasive technique application', 'rhetorical device usage', 'audience awareness', 'planning']
};

// ── Lesson 6: Question 5 Part B – Descriptive Writing ──

const edexcelLang6: LessonPlan = {
  id: 'edexcel-lang-06-q5-descriptive-writing',
  title: 'Question 5 Part B: Descriptive Writing',
  text: 'Edexcel Language Paper 1 Q5B (36 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '90 minutes',
  objectives: [
    'Understand descriptive writing purpose and audience',
    'Develop strategies for selecting and structuring vivid details',
    'Apply techniques to create atmosphere and engage senses',
    'Write responses that meet AO5 and AO6 criteria'
  ],
  successCriteria: [
    'I can identify purpose (describe) and audience',
    'I can plan descriptive text with vivid, organised details',
    'I can use sensory language effectively',
    'I can write within 45 minutes'
  ],
  keywords: ['descriptive writing', 'sensory language', 'atmosphere', 'imagery', 'metaphor', 'simile', 'AO5', 'AO6'],
  starterActivity: {
    title: 'Sensory Engagement',
    duration: '8 minutes',
    instructions: 'Read two versions of a scene (bland vs. vivid). Students vote which is more engaging. Discuss sensory language.',
    differentiation: {
      support: 'Students identify one sensory detail.',
      core: 'Students identify sensory details and explain effectiveness.',
      stretch: 'Students discuss how descriptions create specific mood.'
    }
  },
  mainActivities: [
    {
      title: 'Planning Descriptive Writing',
      duration: '25 minutes',
      instructions: 'Explain that effective description is organised (spatial or temporal) and sensory. Model planning a Q5B response.',
      differentiation: {
        support: 'Provide a descriptive writing frame.',
        core: 'Students create their own plan.',
        stretch: 'Students identify sensory details that will create intended atmosphere.'
      },
      resources: ['Q5B task prompt', 'Descriptive structure frame']
    },
    {
      title: 'Descriptive Techniques',
      duration: '25 minutes',
      instructions: 'Teach key techniques: similes, metaphors, precise adjectives, personification, pathetic fallacy, sensory language.',
      differentiation: {
        support: 'Provide colour-coded examples.',
        core: 'Students identify techniques in a provided passage.',
        stretch: 'Students identify techniques and discuss how each creates specific effects.'
      },
      resources: ['Technique definitions and examples', 'Descriptive Techniques Bank handout']
    },
    {
      title: 'Timed Practice: Writing Q5B',
      duration: '30 minutes',
      instructions: 'Provide a Q5B task. Students write a response within 45 minutes.',
      differentiation: {
        support: 'Provide planning template and descriptive techniques checklist.',
        core: 'Full independent response.',
        stretch: 'Full response plus self-assessment using AO5/AO6 descriptors.'
      },
      resources: ['Q5B task prompt', 'Planning template', 'Descriptive Techniques Bank', 'Mark scheme descriptors']
    }
  ],
  plenaryActivity: {
    title: 'Vivid vs. Generic Language',
    duration: '5 minutes',
    instructions: 'Show generic vs. vivid sentence versions. Discuss effectiveness. Recap importance of precise, sensory word choice.',
    differentiation: {
      support: 'Provide sentence starters.',
      core: 'Students discuss differences.',
      stretch: 'Students rewrite generic sentences and explain choices.'
    }
  },
  homework: 'Write a descriptive text (300-400 words) evoking specific emotion. Use at least four techniques. Self-assess using mark scheme.',
  worksheetQuestions: [
    {
      question: 'How is descriptive writing different from narrative writing?',
      lines: 3,
      modelAnswer: 'Descriptive writing creates vivid pictures and atmosphere. Narrative writing tells a story. Descriptive focuses on sensory details; narrative focuses on plot and action.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Students often write generic descriptions. Emphasise precise, specific sensory details.',
    'Students may overthink figurative language. Teach that vivid writing can be literal or figurative.',
    'Sensory engagement varies by student. Encourage all senses, not just visual.'
  ],
  targetedSkills: ['sensory language use', 'vivid imagery', 'atmosphere creation', 'precise word choice', 'literary device usage']
};

// ════════════════════════════════════════════════════════════════════════════════
// PAPER 2: FICTION READING & WRITING (1EN0/02)
// ════════════════════════════════════════════════════════════════════════════════

// ── Lesson 7: Paper 2 Overview & Question 1 (Narrative Analysis) ──

const edexcelLang7: LessonPlan = {
  id: 'edexcel-lang-07-paper2-q1-narrative',
  title: 'Paper 2: Fiction Reading & Writing Overview & Q1 Narrative Analysis',
  text: 'Edexcel Language Paper 2 (1EN0/02)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '75 minutes',
  objectives: [
    'Understand the structure of Paper 2 and its four question types',
    'Learn to analyse narrative techniques in fiction extracts',
    'Respond to Q1 analytical questions on fiction texts'
  ],
  successCriteria: [
    'I can describe the four questions on Paper 2 and their mark values',
    'I can identify narrative techniques and explain their effects',
    'I can write analytical paragraphs on narrative techniques'
  ],
  keywords: ['narrative technique', 'fiction', 'perspective', 'dialogue', 'description', 'pacing', 'AO2'],
  starterActivity: {
    title: 'Story Elements Quiz',
    duration: '8 minutes',
    instructions: 'Display extracts from fiction texts. Students identify narrative techniques: point of view, dialogue, pacing, description, characterisation.',
    differentiation: {
      support: 'Label techniques and ask students to find examples.',
      core: 'Students identify techniques independently.',
      stretch: 'Students explain why each technique is effective in context.'
    }
  },
  mainActivities: [
    {
      title: 'Paper 2 Overview & Q1 Introduction',
      duration: '25 minutes',
      instructions: 'Display Paper 2 structure: Q1 (short answer narrative analysis, 1-2 marks), Q2 (narrative analysis, 6 marks), Q3 (compare two narrative extracts, 6 marks), Q4 (imaginative writing, 72 marks). Model answering a Q1 question on a fiction extract. Discuss narrative techniques: point of view, dialogue, pacing, sensory description, characterisation.',
      differentiation: {
        support: 'Provide a question overview grid.',
        core: 'Students follow the walkthrough and add notes.',
        stretch: 'Students predict assessment criteria for each question.'
      },
      resources: ['Fiction extract', 'Q1 question', 'Paper 2 overview grid']
    },
    {
      title: 'Narrative Technique Analysis',
      duration: '30 minutes',
      instructions: 'Teach key narrative techniques. For each, show an example and explain its effect. Model analysing a fiction passage that employs multiple narrative techniques. Students identify techniques and explain effects.',
      differentiation: {
        support: 'Provide colour-coded technique bank.',
        core: 'Students identify techniques in a provided passage.',
        stretch: 'Students identify techniques and discuss how the writer combines them.'
      },
      resources: ['Fiction extract', 'Narrative Technique Bank handout']
    },
    {
      title: 'Guided Practice: Q1 Responses',
      duration: '12 minutes',
      instructions: 'Provide three Q1-style questions on a new fiction extract. Students answer within 10 minutes. Discuss answers as a class.',
      resources: ['New fiction extract', 'Three Q1 questions']
    }
  ],
  plenaryActivity: {
    title: 'Narrative Techniques Reflection',
    duration: '5 minutes',
    instructions: 'Students identify one narrative technique they found tricky and one they felt confident about.',
    differentiation: {
      support: 'Provide sentence starters.',
      core: 'Students write their own reflection.',
      stretch: 'Students plan how they will apply techniques in their own writing.'
    }
  },
  homework: 'Identify three narrative techniques in a fiction excerpt and explain their effects on the reader.',
  worksheetQuestions: [
    {
      question: 'Define narrative technique and give two examples with their effects.',
      lines: 4,
      modelAnswer: 'Narrative techniques are methods writers use to tell stories and engage readers. Examples: dialogue (reveals character and creates immediacy), pacing (controls reader tempo through sentence length and paragraph breaks).',
      marks: 3
    }
  ],
  teacherNotes: [
    'Paper 2 mirrors Paper 1 structure but uses fiction instead of non-fiction.',
    'Many students struggle to distinguish narrative techniques from language techniques. Emphasise narrative perspective, dialogue, and structure choices.',
    'Use authentic fiction extracts from exam papers.'
  ],
  targetedSkills: ['narrative technique identification', 'effect analysis', 'fiction-specific terminology']
};

// ── Lesson 8: Question 2 (Narrative Analysis Deep Dive) ──

const edexcelLang8: LessonPlan = {
  id: 'edexcel-lang-08-paper2-q2-narrative-analysis',
  title: 'Question 2: Narrative Analysis – Analysing Fictional Techniques',
  text: 'Edexcel Language Paper 2 Q2 (6 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '75 minutes',
  objectives: [
    'Develop sustained analysis of narrative techniques in fiction',
    'Write analytical paragraphs focusing on narrative effects',
    'Apply narrative analysis terminology accurately'
  ],
  successCriteria: [
    'I can identify narrative techniques in fiction extracts',
    'I can write analytical paragraphs on narrative techniques',
    'I can explain how narrative choices affect the reader'
  ],
  keywords: ['narrative technique', 'point of view', 'dialogue', 'description', 'pacing', 'characterisation', 'analysis', 'AO2'],
  starterActivity: {
    title: 'Technique Effect Matching',
    duration: '8 minutes',
    instructions: 'Display five narrative techniques and five possible effects. Students match them and discuss why each technique creates that effect.',
    differentiation: {
      support: 'Provide some matches filled in.',
      core: 'Students complete all matches and justify.',
      stretch: 'Students suggest alternative effects for each technique.'
    }
  },
  mainActivities: [
    {
      title: 'Analysing Narrative Techniques',
      duration: '30 minutes',
      instructions: 'Display a fiction extract. Model Q2 analysis: identify a narrative technique, select a relevant passage, analyse how it affects the reader. Model writing a secure analytical paragraph: "The writer uses [technique] when [quote]. This creates [effect], making the reader [response]. This is significant because [writer\'s purpose]." Show three sample Q2 responses (weak, secure, exceptional). Students rank them and identify why the exceptional response earns more marks.',
      differentiation: {
        support: 'Pre-highlight techniques; provide paragraph frame.',
        core: 'Students identify techniques and write one full paragraph.',
        stretch: 'Students write two analytical paragraphs on different narrative techniques.'
      },
      resources: ['Fiction extract', 'Q2 model paragraph', 'Three sample Q2 responses', 'Analytical paragraph frame']
    },
    {
      title: 'Comparing Narrative Approaches',
      duration: '25 minutes',
      instructions: 'Show two contrasting fiction passages (e.g., one using first-person, one using third-person; one with dialogue-heavy narrative, one with internal thoughts). Students identify the narrative technique each uses and discuss why the writer chose that approach. This prepares them for Q3 (comparison questions).',
      differentiation: {
        support: 'Provide pre-labelled techniques.',
        core: 'Students identify techniques and suggest reasons for choices.',
        stretch: 'Students discuss how each narrative approach affects reader perspective.'
      },
      resources: ['Two contrasting fiction passages']
    },
    {
      title: 'Timed Practice: Q2 Response',
      duration: '10 minutes',
      instructions: 'Provide a new fiction extract and a Q2 question. Students write a response within 12 minutes (realistic exam timing for Q2).',
      differentiation: {
        support: 'Provide paragraph frame and sentence starters.',
        core: 'Full independent response.',
        stretch: 'Response plus self-assessment using mark scheme.'
      },
      resources: ['New fiction extract', 'Q2 question']
    }
  ],
  plenaryActivity: {
    title: 'Q1 vs. Q2 Clarity',
    duration: '5 minutes',
    instructions: 'Recap: Q1 requires short answers (1-2 marks); Q2 requires fuller analytical paragraphs (6 marks). Discuss why Q2 is more demanding.',
    differentiation: {
      support: 'Provide Q1 vs. Q2 comparison chart.',
      core: 'Students discuss the difference.',
      stretch: 'Students plan how they would adjust their approach from Q1 to Q2.'
    }
  },
  homework: 'Write a Q2 response (6-8 sentences) to a new fiction extract. Use the mark scheme to self-assess.',
  worksheetQuestions: [
    {
      question: 'Analyse a narrative technique from a provided fiction extract.',
      lines: 6,
      modelAnswer: 'The writer uses [technique] in [quote]. This creates a sense of [effect], making the reader feel [emotional response]. This is effective because [link to characterisation/plot/themes]. The writer\'s choice of [technique] emphasizes [authorial purpose].',
      marks: 6
    }
  ],
  teacherNotes: [
    'Students often confuse narrative techniques with literary devices. Emphasise that narrative techniques are structural/perspective choices.',
    'Point of view (first-person vs. third-person) is a major narrative technique. Explore its effects thoroughly.',
    'Use fiction extracts from exam papers to build familiarity.'
  ],
  targetedSkills: ['narrative analysis', 'effect explanation', 'sustained writing', 'AO2 development']
};

// ── Lesson 9: Question 3 (Comparison) – Comparing Two Narrative Extracts ──

const edexcelLang9: LessonPlan = {
  id: 'edexcel-lang-09-paper2-q3-comparison',
  title: 'Question 3: Comparison – Analysing Two Narrative Extracts',
  text: 'Edexcel Language Paper 2 Q3 (6 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '75 minutes',
  objectives: [
    'Understand comparison as a distinct skill from single-text analysis',
    'Identify similarities and differences in narrative techniques',
    'Write comparative analytical paragraphs'
  ],
  successCriteria: [
    'I can identify narrative techniques in two extracts',
    'I can compare and contrast how they are used',
    'I can write comparative paragraphs with embedded evidence'
  ],
  keywords: ['comparison', 'similarity', 'difference', 'narrative technique', 'contrast', 'both', 'whereas', 'AO3'],
  starterActivity: {
    title: 'Spot the Similarities & Differences',
    duration: '8 minutes',
    instructions: 'Display two short fiction passages. Students identify: (1) What narrative techniques do both use? (2) What techniques does only one use? (3) How do they create different effects?',
    differentiation: {
      support: 'Provide pre-labelled techniques.',
      core: 'Students identify similarities and differences independently.',
      stretch: 'Students explain why writers might choose contrasting narrative approaches.'
    }
  },
  mainActivities: [
    {
      title: 'Understanding Comparison Structure',
      duration: '25 minutes',
      instructions: 'Explain that comparative analysis requires both similarities AND differences. Model writing comparative analytical paragraphs: "Both extracts use [technique], but whereas Extract A [effect], Extract B [effect]. This suggests that…" Show how to structure a response: comparison point 1, then comparison point 2, identifying similarities and differences in how narrative techniques are used. Provide three sample Q3 responses (weak, secure, exceptional) and have students rank them.',
      differentiation: {
        support: 'Provide a comparison frame with sentence starters.',
        core: 'Students identify comparison points and write one full paragraph.',
        stretch: 'Students write two comparative paragraphs and self-assess.'
      },
      resources: ['Two fiction extracts', 'Q3 model paragraph', 'Three sample Q3 responses', 'Comparative paragraph frame']
    },
    {
      title: 'Practising Comparative Analysis',
      duration: '30 minutes',
      instructions: 'Provide two new fiction extracts with different narrative approaches (e.g., different points of view, different pacing, different use of dialogue). Students identify narrative techniques in each and write comparative analytical paragraphs. Circulate and provide formative feedback.',
      differentiation: {
        support: 'Pre-highlight techniques in each extract.',
        core: 'Students identify techniques and write comparative paragraphs.',
        stretch: 'Students write two comparative paragraphs and identify which narrative approach is more effective.'
      },
      resources: ['Two new fiction extracts', 'Comparative paragraph frame']
    },
    {
      title: 'Timed Practice: Q3 Response',
      duration: '12 minutes',
      instructions: 'Provide a third pair of fiction extracts and a Q3 question. Students write a response within 15 minutes.',
      differentiation: {
        support: 'Provide comparison frame.',
        core: 'Full independent response.',
        stretch: 'Response plus self-assessment using mark scheme.'
      },
      resources: ['Two fiction extracts', 'Q3 question']
    }
  ],
  plenaryActivity: {
    title: 'Key Comparison Language',
    duration: '5 minutes',
    instructions: 'Recap comparison words: both, whereas, in contrast, similarly, unlike, conversely. Students write three comparison sentences using these words.',
    differentiation: {
      support: 'Provide sentence starters using comparison words.',
      core: 'Students write their own sentences.',
      stretch: 'Students identify why comparison language makes analysis clearer.'
    }
  },
  homework: 'Write a Q3 response comparing two narrative techniques in two fiction extracts. Use the mark scheme to self-assess.',
  worksheetQuestions: [
    {
      question: 'What is the difference between analysing a single technique (Q2) and comparing techniques in two extracts (Q3)?',
      lines: 4,
      modelAnswer: 'Q2 focuses on one extract and explains how a technique creates effects. Q3 requires examining two extracts and comparing how narrative techniques are used similarly or differently. Q3 demands synthesis and contrast, not just explanation.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students write two separate analyses instead of comparative analysis. Emphasise the importance of explicit comparison language.',
    'Use extracts that offer clear comparison points (e.g., contrasting points of view, pacing differences).',
    'Comparison language (both, whereas, similarly) is crucial. Teach it explicitly.'
  ],
  targetedSkills: ['comparative analysis', 'synthesis', 'contrast identification', 'AO3 development']
};

// ── Lesson 10: Question 4 Part A – Narrative Writing (Story-Telling) ──

const edexcelLang10: LessonPlan = {
  id: 'edexcel-lang-10-paper2-q4-narrative-writing',
  title: 'Question 4 Part A: Narrative Writing – Creating Stories',
  text: 'Edexcel Language Paper 2 Q4A (36 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '90 minutes',
  objectives: [
    'Understand the purpose and structure of narrative writing',
    'Develop strategies for planning effective stories',
    'Apply narrative techniques to engage readers',
    'Write narrative responses that meet AO5 and AO6 criteria'
  ],
  successCriteria: [
    'I can identify purpose (tell a story) and audience',
    'I can plan a narrative with clear plot structure, characterisation, and setting',
    'I can use narrative techniques effectively',
    'I can write a well-developed story within 45 minutes'
  ],
  keywords: ['narrative writing', 'plot', 'characterisation', 'setting', 'point of view', 'dialogue', 'pacing', 'AO5', 'AO6'],
  starterActivity: {
    title: 'Story Hook Challenge',
    duration: '8 minutes',
    instructions: 'Display three story openings. Students vote which is most engaging and discuss why. Discuss elements of effective story openings: vivid description, intrigue, character introduction.',
    differentiation: {
      support: 'Ask students to identify one engaging feature.',
      core: 'Students identify why each opening is (or isn\'t) effective.',
      stretch: 'Students suggest how they would improve less effective openings.'
    }
  },
  mainActivities: [
    {
      title: 'Narrative Structure & Planning',
      duration: '25 minutes',
      instructions: 'Explain narrative structure: exposition (setting and characters), rising action (complications), climax (peak moment), falling action (resolution), denouement (ending). Model planning a narrative response to a Q4A task (e.g., "Write a story about a moment that changed everything"). Create a detailed plan covering: setting, main character(s), key events, climactic moment, resolution. Show how to allocate 45 minutes: planning (5 mins), writing (35 mins), checking (5 mins). Emphasise that a well-planned story is easier to write within time constraints.',
      differentiation: {
        support: 'Provide a narrative planning template.',
        core: 'Students create their own plan for a Q4A task.',
        stretch: 'Students create a plan and identify which narrative techniques they will use in key sections.'
      },
      resources: ['Q4A task prompt', 'Narrative structure frame', 'Model plan on visualiser']
    },
    {
      title: 'Narrative Techniques for Engagement',
      duration: '25 minutes',
      instructions: 'Teach key narrative techniques: point of view (first-person intimacy, third-person flexibility), dialogue (reveals character, creates immediacy), pacing (sentence and paragraph length to control tempo), description (sensory details for atmosphere), foreshadowing (hints at future events). Model using three techniques in one narrative paragraph. Provide a "Narrative Techniques Bank" handout. Students read a short story and identify techniques used.',
      differentiation: {
        support: 'Provide colour-coded technique examples.',
        core: 'Students read a story and identify five techniques.',
        stretch: 'Students identify techniques and discuss how the writer combines them for effect.'
      },
      resources: ['Technique definitions and examples', 'Narrative Techniques Bank handout', 'Short story to analyse']
    },
    {
      title: 'Timed Practice: Writing Q4A',
      duration: '30 minutes',
      instructions: 'Provide a fresh Q4A task. Students write a narrative response within 45 minutes. Circulate and offer formative feedback. After time, collect responses. Select one or two to mark on visualiser, highlighting effective narrative techniques and structural choices.',
      differentiation: {
        support: 'Provide planning template and narrative techniques checklist.',
        core: 'Full independent response with planning time.',
        stretch: 'Full response plus written self-assessment using AO5/AO6 descriptors.'
      },
      resources: ['Q4A task prompt', 'Planning template', 'Narrative Techniques Bank', 'AO5/AO6 mark scheme descriptors']
    }
  ],
  plenaryActivity: {
    title: 'Narrative Reflection',
    duration: '5 minutes',
    instructions: 'Students reflect: What narrative techniques did I use? Which felt most natural? Which do I need to practise more? Students write one technique they will focus on in their next narrative task.',
    differentiation: {
      support: 'Provide reflection sentence starters.',
      core: 'Students write their own reflection.',
      stretch: 'Students identify one technique and plan how they will develop it further.'
    }
  },
  homework: 'Write a narrative text (300-400 words) on a prompt of your choice. Focus on using at least three different narrative techniques. Self-assess using the Narrative Techniques Bank and mark scheme.',
  worksheetQuestions: [
    {
      question: 'What is the difference between plot and narrative technique?',
      lines: 3,
      modelAnswer: 'Plot is the sequence of events in a story (what happens). Narrative technique is how the writer tells the story (point of view, dialogue, pacing, description). A story needs both a compelling plot and effective techniques to engage readers.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students rush into writing without planning. Emphasise the importance of planning within the time limit.',
    'Some students write dull plots. Encourage conflict, tension, and unexpected turns.',
    'Point of view choice is crucial. Discuss why first-person creates intimacy and third-person offers flexibility.',
    'The 45-minute time constraint is important. Realistic timing practice is essential.'
  ],
  targetedSkills: ['narrative technique application', 'story structure', 'characterisation', 'dialogue writing', 'pacing control', 'extended narrative writing']
};

// ── Lesson 11-20: Continuation (Creating final 10 lessons) ──

// ── Lesson 11: Question 4 Part B – Descriptive Writing (Imaginative Setting) ──

const edexcelLang11: LessonPlan = {
  id: 'edexcel-lang-11-paper2-q4-descriptive-writing',
  title: 'Question 4 Part B: Descriptive Writing – Imaginative Settings & Scenes',
  text: 'Edexcel Language Paper 2 Q4B (36 marks)',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '90 minutes',
  objectives: [
    'Understand descriptive writing in imaginative fiction context',
    'Develop strategies for planning vivid, atmospheric descriptions',
    'Apply narrative and descriptive techniques together',
    'Write descriptive responses that meet AO5 and AO6 criteria'
  ],
  successCriteria: [
    'I can identify purpose (describe imaginatively) and audience',
    'I can plan a description with vivid, organised sensory details',
    'I can use narrative and literary techniques to create atmosphere',
    'I can write within 45 minutes'
  ],
  keywords: ['descriptive writing', 'atmosphere', 'imagery', 'sensory language', 'characterisation through description', 'narrative viewpoint', 'AO5', 'AO6'],
  starterActivity: {
    title: 'Atmospheric Openings',
    duration: '8 minutes',
    instructions: 'Read two story openings: one bland, one vivid and atmospheric. Students vote which is more engaging. Discuss: What makes the vivid version superior? Introduce the idea that fictional description can be both sensory and character-revealing.',
    differentiation: {
      support: 'Ask students to identify one sensory detail.',
      core: 'Students identify multiple sensory details and discuss their effects.',
      stretch: 'Students discuss how the description reveals character or foreshadows plot.'
    }
  },
  mainActivities: [
    {
      title: 'Planning Imaginative Descriptions',
      duration: '25 minutes',
      instructions: 'Explain that fictional descriptions serve multiple purposes: establish atmosphere, reveal character through reaction to surroundings, create mood, move plot forward. Model planning a Q4B response to a prompt like "Write a description of an abandoned place" or "Describe a place that holds memories." Create a detailed plan noting: setting details, sensory elements, whose perspective (affects what is noticed), mood to establish, how description links to implied story. Show how to allocate 45 minutes.',
      differentiation: {
        support: 'Provide a descriptive planning frame.',
        core: 'Students create their own plan for a Q4B task.',
        stretch: 'Students create a plan and identify which techniques will create the intended atmosphere and perspective.'
      },
      resources: ['Q4B task prompt', 'Descriptive structure frame', 'Model plan on visualiser']
    },
    {
      title: 'Blending Narrative & Descriptive Techniques',
      duration: '25 minutes',
      instructions: 'Explain that fictional descriptions often blend sensory language with narrative perspective. Model a paragraph that uses description but through a character\'s eyes (third-person limited or first-person). Show how to use dialogue or character reaction alongside description. Teach techniques: precise noun phrases, figurative language, sensory imagery, character perspective filtering. Provide "Imaginative Description Techniques Bank" handout.',
      differentiation: {
        support: 'Provide colour-coded examples.',
        core: 'Students identify techniques in a provided passage.',
        stretch: 'Students identify techniques and discuss how perspective shapes what is described.'
      },
      resources: ['Technique definitions and examples', 'Imaginative Description Techniques Bank handout']
    },
    {
      title: 'Timed Practice: Writing Q4B',
      duration: '30 minutes',
      instructions: 'Provide a fresh Q4B task. Students write a descriptive response within 45 minutes. After time, collect responses. Select one or two to mark, highlighting effective sensory language and atmospheric creation.',
      differentiation: {
        support: 'Provide planning template and technique checklist.',
        core: 'Full independent response.',
        stretch: 'Full response plus self-assessment using AO5/AO6 descriptors.'
      },
      resources: ['Q4B task prompt', 'Planning template', 'Technique Bank', 'Mark scheme descriptors']
    }
  ],
  plenaryActivity: {
    title: 'Descriptive vs. Narrative Writing in Fiction',
    duration: '5 minutes',
    instructions: 'Discuss: In a fiction story, how is descriptive writing different from narrative writing? (Narrative drives plot and character; description establishes atmosphere and setting.) How do they work together?',
    differentiation: {
      support: 'Provide comparison chart.',
      core: 'Students discuss the relationship.',
      stretch: 'Students plan how they would blend narrative and description in a piece of fiction.'
    }
  },
  homework: 'Write a descriptive text (300-400 words) of an imaginative setting that creates a specific atmosphere. Self-assess using the Imaginative Description Techniques Bank and mark scheme.',
  worksheetQuestions: [
    {
      question: 'How can description in fiction be more than just "pretty language"?',
      lines: 3,
      modelAnswer: 'Effective description reveals character perspective, establishes mood that affects plot, creates atmosphere that engages readers, and foreshadows events. It is purposeful, not decorative.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Students often write generic descriptions. Emphasise that fictional description serves plot and character.',
    'Discuss how a character\'s emotional state shapes what they notice and how they perceive surroundings.',
    'Use model texts that blend description with narrative effectively.',
    'The 45-minute constraint is crucial. Timed practice builds fluency.'
  ],
  targetedSkills: ['imaginative description', 'sensory language use', 'atmosphere creation', 'character perspective', 'extended writing']
};

// ── Lesson 12: Exam Technique – Managing Time Across Both Papers ──

const edexcelLang12: LessonPlan = {
  id: 'edexcel-lang-12-exam-technique-time-management',
  title: 'Exam Technique: Managing Time Across Both Papers',
  text: 'Edexcel Language 1EN0 Time Management Strategy',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the overall 2-hour and 45-minute exam structure',
    'Develop effective time management across both papers',
    'Practise strategic decisions about time allocation',
    'Reduce exam anxiety through preparation'
  ],
  successCriteria: [
    'I can create a realistic time plan for the full exam',
    'I understand why certain questions warrant more time',
    'I can manage my time flexibly based on question difficulty'
  ],
  keywords: ['time management', 'exam technique', 'strategic planning', 'pacing', 'prioritisation'],
  starterActivity: {
    title: 'The Maths of Time',
    duration: '8 minutes',
    instructions: 'Display: 2 hours 45 minutes total. Paper 1 = 105 minutes (100 marks). Paper 2 = 105 minutes (100 marks). 15-minute reading time. Students calculate: How many minutes per mark on each paper? Why might you allocate time differently despite equal marks?',
    differentiation: {
      support: 'Do the calculation together.',
      core: 'Students calculate and discuss.',
      stretch: 'Students explain why different question types warrant different time per mark.'
    }
  },
  mainActivities: [
    {
      title: 'Creating Your Personal Time Plan',
      duration: '25 minutes',
      instructions: 'Walk through recommended time allocation for both papers. Paper 1: Q1 (2 mins), Q2 (10 mins), Q3 (10 mins), Q4 (20 mins), Q5 (55 mins), buffer (8 mins). Paper 2: identical allocation. Discuss: Why does Q5 get 55 minutes? Why do Q1-Q4 get roughly proportional time to marks? Introduce the concept that students should personalise plans based on strengths and weaknesses (e.g., strong at Q4? Allocate 25 mins. Weak at Q5? Allocate 50 mins and rush slightly on Q2-Q3). Model creating a personalised plan.',
      differentiation: {
        support: 'Provide recommended time plan.',
        core: 'Students create their own personalised plan.',
        stretch: 'Students create multiple plans based on different scenarios (if Q4 is strong, if Q5 is weak, etc.).'
      },
      resources: ['Time allocation worksheet', 'Visualiser showing mark-to-time ratio']
    },
    {
      title: 'Practising Flexible Time Management',
      duration: '20 minutes',
      instructions: 'Present exam scenarios: "You finish Q4 in 15 minutes instead of 20. What do you do?" (Transfer the 5 minutes to Q5). "You get stuck on Q3 analytical paragraph. What do you do?" (Move on after 12 minutes, allocate time to Q4 instead). "You finish Q5 with 10 minutes remaining. What do you do?" (Check previous answers, proofread). Students discuss strategies for managing unexpected time situations.',
      differentiation: {
        support: 'Provide scenario cards with suggested strategies.',
        core: 'Students discuss strategies for each scenario.',
        stretch: 'Students create their own exam scenarios and develop strategies.'
      },
      resources: ['Exam scenario cards']
    },
    {
      title: 'Reflection: Personalising Your Plan',
      duration: '10 minutes',
      instructions: 'Students reflect on their own strengths and weaknesses across the questions. Which questions do they spend the most/least time on? Why? Create a personalised time plan based on honest assessment.',
      differentiation: {
        support: 'Provide reflection prompts.',
        core: 'Students create their own personalised plan.',
        stretch: 'Students create multiple plans for different exam conditions.'
      },
      resources: ['Personalisation worksheet']
    }
  ],
  plenaryActivity: {
    title: 'Time Management Mantra',
    duration: '5 minutes',
    instructions: 'Discuss: What is the most important thing to remember about time management in this exam? (Example: Q5 is worth the most marks, so allocate the most time.) Students write one personal time management rule.',
    differentiation: {
      support: 'Provide example rules.',
      core: 'Students create their own rule.',
      stretch: 'Students explain why their rule is important for their personal exam success.'
    }
  },
  homework: 'Create a detailed time plan for the full 2-hour 45-minute exam, including reading time and buffer time. Keep it somewhere accessible for exam revision.',
  worksheetQuestions: [
    {
      question: 'Why is time management essential in the Edexcel Language exam?',
      lines: 3,
      modelAnswer: 'Time management ensures you attempt all questions and allocate proportional time to marks. Q5 is worth 72/100 marks (72%), so rushing it or running out of time will severely impact your grade. Strategic planning prevents this.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students lose marks not because they can\'t answer questions but because they run out of time on Q5.',
    'Personalised plans are more effective than one-size-fits-all plans.',
    'Practise time management in timed mock exams.',
    'Reduce exam anxiety by emphasising preparation and planning.'
  ],
  targetedSkills: ['strategic planning', 'time management', 'prioritisation', 'exam technique']
};

// ── Lesson 13: Proofreading & Technical Accuracy (AO6 Focus) ──

const edexcelLang13: LessonPlan = {
  id: 'edexcel-lang-13-proofreading-ao6',
  title: 'Proofreading & Technical Accuracy: AO6 Excellence',
  text: 'Technical Accuracy (Spelling, Punctuation, Grammar) – AO6',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand AO6 assessment criteria for technical accuracy',
    'Develop effective proofreading strategies',
    'Identify and correct common errors under exam conditions'
  ],
  successCriteria: [
    'I can identify common spelling, punctuation, and grammar errors',
    'I can proofread my own writing effectively',
    'I understand how technical errors impact marks'
  ],
  keywords: ['spelling', 'punctuation', 'grammar', 'AO6', 'proofreading', 'technical accuracy'],
  starterActivity: {
    title: 'Error Spotting Challenge',
    duration: '8 minutes',
    instructions: 'Display a short passage with 10 intentional errors (spelling, punctuation, grammar). Students race to find as many as possible in 5 minutes. Discuss: What errors did you miss? Why are some errors harder to spot?',
    differentiation: {
      support: 'Highlight certain lines.',
      core: 'Students find errors independently.',
      stretch: 'Students categorise errors (spelling, punctuation, grammar) and suggest fixes.'
    }
  },
  mainActivities: [
    {
      title: 'Common Error Patterns',
      duration: '20 minutes',
      instructions: 'Teach common errors: missing commas in lists, apostrophes (possessive vs. plural), their/there/they\'re, subject-verb agreement, sentence fragments, comma splices. Model identifying and correcting each. Show student examples (anonymised) containing these errors. Have students identify and correct them.',
      differentiation: {
        support: 'Focus on three most common errors.',
        core: 'Teach all error types with examples.',
        stretch: 'Students explain why each error disrupts reader comprehension.'
      },
      resources: ['Common error guide', 'Student writing samples with errors', 'Correction key']
    },
    {
      title: 'Effective Proofreading Strategies',
      duration: '20 minutes',
      instructions: 'Teach proofreading techniques: (1) Read aloud slowly (catches omissions and awkward phrasing), (2) Read backwards (focuses on words, not meaning), (3) Use a checklist of personal common errors, (4) Mark potential errors as you read first, then correct them, (5) Leave time to proofread (don\'t proofread while tired). Model proofreading a student paragraph. Emphasise that in exams, you have 5 minutes buffer time for proofreading. Provide a "Proofreading Checklist" handout personalised to student error patterns.',
      differentiation: {
        support: 'Provide a detailed proofreading checklist.',
        core: 'Students create their own checklist based on personal error patterns.',
        stretch: 'Students teach others their most effective proofreading strategy.'
      },
      resources: ['Proofreading Checklist handout', 'Student paragraph to proofread', 'Correction key']
    },
    {
      title: 'Timed Proofreading Practice',
      duration: '12 minutes',
      instructions: 'Provide a student response to a Q5 task (containing 8-10 errors). Students proofread within 5 minutes (realistic exam buffer time). Discuss how many errors they caught. Review all errors together.',
      differentiation: {
        support: 'Provide a highlighted checklist guiding where to look.',
        core: 'Full proofreading independently.',
        stretch: 'Full proofreading plus identification of error types and patterns.'
      },
      resources: ['Student response to proofread', 'Proofreading checklist', 'Correction key']
    }
  ],
  plenaryActivity: {
    title: 'Creating Your Personal Error List',
    duration: '5 minutes',
    instructions: 'Students review their own recent writing and identify their three most common errors. Write them down to focus on in future proofreading.',
    differentiation: {
      support: 'Provide list of common errors to check against.',
      core: 'Students identify their own patterns.',
      stretch: 'Students create strategies to prevent their personal errors during writing, not just proofreading.'
    }
  },
  homework: 'Proofread a past exam response (yours or a model answer). Identify and categorise all errors found. Create a personal proofreading checklist.',
  worksheetQuestions: [
    {
      question: 'How does technical accuracy (AO6) affect your overall exam grade?',
      lines: 3,
      modelAnswer: 'AO6 is assessed on Q5 only and can account for up to 12 marks (out of 36 for Q5). Consistent technical accuracy across words, sentences, and paragraphs can earn you 10-12 marks. Poor technical accuracy can lose you 5-10 marks.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students lose marks to careless errors in Q5, even though they know better.',
    'Personalised checklists are more effective than generic checklists.',
    'Proofreading is a skill that improves with practice. Emphasise the importance of buffer time in exams.',
    'Discuss that technical accuracy matters more in creative writing (Q5) than in reading analysis (Q1-Q4).'
  ],
  targetedSkills: ['proofreading', 'error identification and correction', 'self-editing', 'attention to detail']
};

// ── Lesson 14: Vocabulary & Word Choice Excellence ──

const edexcelLang14: LessonPlan = {
  id: 'edexcel-lang-14-vocabulary-word-choice',
  title: 'Vocabulary & Word Choice: Precision & Effect',
  text: 'Using Precise & Effective Vocabulary in Analysis & Writing',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Expand vocabulary for analysis of texts',
    'Develop precise word choice in creative writing',
    'Understand how word choice affects reader impact'
  ],
  successCriteria: [
    'I can use subject-specific terminology accurately in analysis',
    'I can choose precise, evocative words in creative writing',
    'I understand why word choice matters in both contexts'
  ],
  keywords: ['vocabulary', 'word choice', 'connotation', 'precision', 'effect', 'terminology'],
  starterActivity: {
    title: 'Synonym Challenge',
    duration: '8 minutes',
    instructions: 'Display five generic words (said, nice, sad, happy, angry). Students suggest synonyms with different connotations (whispered, muttered, shouted for "said"; delightful, pleasant, charming for "nice"). Discuss how synonyms create different effects.',
    differentiation: {
      support: 'Provide three synonyms per word.',
      core: 'Students generate their own synonyms and discuss effects.',
      stretch: 'Students select the most precise synonym for different contexts.'
    }
  },
  mainActivities: [
    {
      title: 'Analytical Vocabulary: Subject-Specific Terminology',
      duration: '20 minutes',
      instructions: 'Teach analytical terminology for literature and language analysis. Create a visual reference sheet with terms: metaphor, simile, personification, alliteration, assonance, onomatopoeia, rhetorical question, triplet, anaphora, antithesis, paradox, oxymoron, irony, pun, understatement, exaggeration. For each, provide an example and its effect. Model using terminology accurately in analytical writing. Emphasise that using terms correctly elevates the quality of analysis.',
      differentiation: {
        support: 'Focus on 8 most common terms.',
        core: 'Learn all terms with examples.',
        stretch: 'Students identify terms in texts and create new examples.'
      },
      resources: ['Analytical Terminology Reference Sheet', 'Text samples for identifying terms']
    },
    {
      title: 'Creative Writing Vocabulary: Precision & Evocation',
      duration: '20 minutes',
      instructions: 'Teach that creative writing demands precise, evocative vocabulary. Model the difference between generic and specific word choices: "The old man walked slowly" vs. "The weathered figure shuffled across the threshold." Show how synonym choices in creative writing create atmosphere and characterisation. Discuss connotations: does "thin" have the same effect as "gaunt"? Does "bright" create the same image as "dazzling"? Students rewrite bland sentences with more precise vocabulary.',
      differentiation: {
        support: 'Provide word banks of precise alternatives.',
        core: 'Students identify generic words and replace with precise alternatives.',
        stretch: 'Students discuss why certain word choices are more effective in specific contexts.'
      },
      resources: ['Bland sentence examples', 'Word choice effect guide']
    },
    {
      title: 'Practising Vocabulary in Context',
      duration: '12 minutes',
      instructions: 'Provide a student analytical paragraph and a student creative paragraph (both using generic vocabulary). Students identify generic words and suggest more precise alternatives. Discuss how the improvements elevate the quality.',
      differentiation: {
        support: 'Highlight generic words for replacement.',
        core: 'Students identify and replace generic vocabulary.',
        stretch: 'Students justify why their word choices are more effective.'
      },
      resources: ['Student paragraphs with generic vocabulary', 'Thesaurus (optional)']
    }
  ],
  plenaryActivity: {
    title: 'Your Personal Vocabulary Goal',
    duration: '5 minutes',
    instructions: 'Students identify one generic word they use frequently and commit to replacing it with more precise alternatives. Create a personal vocabulary goal for exams.',
    differentiation: {
      support: 'Provide list of common generic words with precise alternatives.',
      core: 'Students identify their own generic habits.',
      stretch: 'Students plan how they will expand vocabulary in preparation for exams.'
    }
  },
  homework: 'Identify five generic words you use frequently. Find three precise synonyms for each. Create a personal vocabulary reference sheet for exam preparation.',
  worksheetQuestions: [
    {
      question: 'Why does precise vocabulary matter in analysis and in creative writing?',
      lines: 3,
      modelAnswer: 'In analysis, precise terminology (metaphor, alliteration) demonstrates subject knowledge and clarity. In creative writing, precise word choice creates vivid imagery, conveys emotion, and engages readers more effectively than generic language.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Vocabulary expansion is an ongoing process. Encourage reading widely.',
    'Thesauruses can help, but students should understand connotations, not just synonyms.',
    'Model how to use precise vocabulary naturally, not forced.',
    'Emphasise that vocabulary matters more in Q1-Q4 (analysis) than in Q5, where clarity matters more.'
  ],
  targetedSkills: ['analytical terminology', 'precise word choice', 'vocabulary expansion', 'effect awareness']
};

// Final update to export array

// ── Lesson 15: Creative Confidence – Overcoming Writer's Block ──

const edexcelLang15: LessonPlan = {
  id: 'edexcel-lang-15-creative-confidence',
  title: 'Creative Confidence: Overcoming Writer\'s Block & Exam Nerves',
  text: 'Building Confidence in Timed Creative Writing',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '45 minutes',
  objectives: [
    'Understand common causes of writer\'s block in exams',
    'Develop strategies to overcome creative anxiety',
    'Build confidence in timed writing situations'
  ],
  successCriteria: [
    'I understand why I get blocked and have strategies to overcome it',
    'I can start a timed writing task even when uncertain',
    'I feel more confident about Q5'
  ],
  keywords: ['writer\'s block', 'confidence', 'anxiety', 'creative writing', 'exam technique'],
  starterActivity: {
    title: 'Block or Not?',
    duration: '8 minutes',
    instructions: 'Students anonymously write one sentence about their biggest fear regarding timed Q5 writing. Collect and display common themes: "Don\'t know what to write," "Start but get stuck midway," "Run out of time," "Not creative enough." Normalise these feelings.',
    differentiation: {
      support: 'Ask students to share verbally or provide sentence starters.',
      core: 'Students anonymously contribute fears.',
      stretch: 'Students identify which fears are about skill vs. confidence.'
    }
  },
  mainActivities: [
    {
      title: 'Strategies for Starting',
      duration: '18 minutes',
      instructions: 'Teach strategies for overcoming the blank page: (1) Brainstorm freely (don\'t judge ideas), (2) Free-write the opening without planning (sometimes you find your idea as you write), (3) Use the planning section to list key moments rather than a detailed outline, (4) Remember that a good story doesn\'t need to be original—familiar plots are fine if well-executed. Show how the first 5 minutes of planning can unlock ideas. Discuss: Perfect doesn\'t exist under time pressure. Aim for good enough.',
      differentiation: {
        support: 'Provide brainstorming template.',
        core: 'Students learn strategies and discuss which suits them.',
        stretch: 'Students test different strategies under timed conditions and compare effectiveness.'
      },
      resources: ['Starting strategy cards', 'Brainstorming template']
    },
    {
      title: 'Practising Under Pressure',
      duration: '15 minutes',
      instructions: 'Set a 10-minute timed writing task (e.g., "Write the opening paragraph of a story about a discovery"). After 10 minutes, students pause and reflect: Did you get stuck? How did you unstick yourself? Did the quality suffer? Discuss: Timed writing is a skill that improves with practice. Every attempt builds confidence.',
      differentiation: {
        support: 'Provide a shorter prompt (5 minutes) and more scaffolding.',
        core: 'Full 10-minute timed response.',
        stretch: 'Full response plus reflection on strategies used.'
      },
      resources: ['Timed writing prompt', 'Timer']
    }
  ],
  plenaryActivity: {
    title: 'Your Confidence Mantra',
    duration: '5 minutes',
    instructions: 'Students create a personal confidence statement for Q5 (e.g., "I have planned well. My story doesn\'t have to be perfect. I can write a solid story in 45 minutes."). Write it down to review before exams.',
    differentiation: {
      support: 'Provide example mantras.',
      core: 'Students create their own.',
      stretch: 'Students create mantras and explain why they work psychologically.'
    }
  },
  homework: 'Write the opening paragraph of three different stories from different prompts. Don\'t worry about perfection. Focus on getting words on the page within 5 minutes per prompt. Build fluency and confidence.',
  worksheetQuestions: [
    {
      question: 'What is the difference between writer\'s block and lack of skill in creative writing?',
      lines: 3,
      modelAnswer: 'Writer\'s block is a psychological barrier (anxiety, overthinking, perfectionism) that prevents writing, even when the skill exists. Lack of skill is an actual inability to structure ideas or use techniques. Recognising the difference is important: if it\'s block, strategies like planning and positive self-talk help. If it\'s skill, more practice and instruction are needed.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Exam anxiety affects many students. Normalising these feelings reduces shame and isolation.',
    'Confidence is built through repeated success. More timed practice = more confidence.',
    'Perfectionism is a major cause of writer\'s block. Teach "good enough under pressure."',
    'Some anxiety is helpful (it keeps you alert). Distinguish helpful anxiety from debilitating anxiety.'
  ],
  targetedSkills: ['exam resilience', 'problem-solving under pressure', 'confidence building', 'positive self-talk']
};

// ── Lesson 16: Revision Techniques & Strategy ──

const edexcelLang16: LessonPlan = {
  id: 'edexcel-lang-16-revision-techniques',
  title: 'Revision Techniques & Exam Preparation Strategy',
  text: 'Effective Revision for Edexcel Language 1EN0',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand which revision techniques are most effective for language exams',
    'Develop a personalised revision plan',
    'Prepare for the specific demands of Edexcel Language papers'
  ],
  successCriteria: [
    'I know which revision techniques are most effective for me',
    'I have a revision plan covering both papers',
    'I understand what final exam preparation looks like'
  ],
  keywords: ['revision', 'exam preparation', 'technique bank', 'timed practice', 'past papers'],
  starterActivity: {
    title: 'Revision Myth-Buster',
    duration: '8 minutes',
    instructions: 'Display myths: "Reading through notes is revision," "Highlighting textbooks helps," "Revision should be painful." Students identify which are myths. Discuss: Effective revision is active, targeted, and varied. It should involve retrieval practice and application, not passive reading.',
    differentiation: {
      support: 'Provide answers.',
      core: 'Students identify myths and explain why they\'re false.',
      stretch: 'Students suggest what revision techniques replace these myths.'
    }
  },
  mainActivities: [
    {
      title: 'Most Effective Revision Techniques for Language Exams',
      duration: '20 minutes',
      instructions: 'Teach evidence-based revision techniques: (1) Practice questions repeatedly (retrieval practice), (2) Timed exam conditions (builds speed and time management), (3) Technique bank creation (organise notes into reference materials), (4) Past paper analysis (understand question patterns), (5) Self-testing (use mark schemes to check understanding), (6) Peer quizzing (explain concepts to others). For language exams specifically, active revision means: doing analysis tasks, writing timed responses, reading mark schemes, explaining techniques to peers. Discuss which techniques suit different learning styles.',
      differentiation: {
        support: 'Focus on three most accessible techniques.',
        core: 'Teach all techniques and discuss which suit individual learners.',
        stretch: 'Students research learning science behind effective revision and present findings.'
      },
      resources: ['Effective Revision Techniques guide', 'Learning styles inventory (optional)']
    },
    {
      title: 'Creating Your Revision Plan',
      duration: '25 minutes',
      instructions: 'Guide students in creating a personalised revision plan. Key components: (1) Identify weaknesses (Q1-Q5, Papers 1-2), (2) Schedule timed practice for weak areas (if weak at Q4, do Q4 multiple times), (3) Review technique banks (create references for rhetorical devices, narrative techniques, etc.), (4) Do complete past papers under timed exam conditions, (5) Self-mark using mark schemes. Create a simple Gantt chart or weekly breakdown showing when to practice each question type.',
      differentiation: {
        support: 'Provide a template revision plan structure.',
        core: 'Students create their own personalised plan.',
        stretch: 'Students create a detailed plan with daily breakdown and contingency if progress is slower than expected.'
      },
      resources: ['Revision Plan template', 'Past paper bank information']
    },
    {
      title: 'Mock Exam Analysis',
      duration: '10 minutes',
      instructions: 'Discuss: After mock exams, what should you do? (1) Mark your paper using the mark scheme (understand where you lost marks), (2) Identify error patterns (Did you rush Q5? Did you misread Q4? etc.), (3) Update your revision focus based on findings. Have students analyse a mock exam result together, identifying specific areas for revision.',
      differentiation: {
        support: 'Teacher leads analysis of one sample mock.',
        core: 'Students analyse their own mock and identify focus areas.',
        stretch: 'Students create a targeted revision plan based on their mock analysis.'
      },
      resources: ['Sample marked mock exam', 'Analysis worksheet']
    }
  ],
  plenaryActivity: {
    title: 'Revision Readiness Check',
    duration: '5 minutes',
    instructions: 'Students reflect: Am I confident in my revision approach? Do I know what to revise? Do I have past papers to practise with? If not, solve these issues now (get past papers, clarify weak areas, etc.).',
    differentiation: {
      support: 'Provide a readiness checklist.',
      core: 'Students assess their readiness.',
      stretch: 'Students identify obstacles to effective revision and problem-solve solutions.'
    }
  },
  homework: 'Create a detailed revision plan for the next 4-6 weeks leading to your exam. Include which question types to practise, when, and how you\'ll track progress.',
  worksheetQuestions: [
    {
      question: 'Why is timed practice more important for language exams than other subjects?',
      lines: 3,
      modelAnswer: 'Language exams require timed creative writing (Q5) and timed analysis. Practising under realistic time pressure is essential to building speed, confidence, and exam technique. Revision without timed practice leaves you unprepared for the actual exam conditions.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students revise passively (reading notes). Actively teach which techniques are effective.',
    'Timed practice is non-negotiable for this exam. Make it a revision priority.',
    'Mock exams are valuable data sources. Use them strategically to identify remaining weaknesses.',
    'Revision fatigue is real. Encourage balanced revision (variety, breaks, rest).'
  ],
  targetedSkills: ['strategic planning', 'self-assessment', 'effective learning techniques', 'exam preparation']
};

// ── Lesson 17: Analysing Mark Schemes & Assessment Criteria ──

const edexcelLang17: LessonPlan = {
  id: 'edexcel-lang-17-mark-schemes-assessment',
  title: 'Understanding Mark Schemes & Assessment Criteria',
  text: 'Decoding Edexcel Language Mark Schemes for Success',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how mark schemes work and what examiners look for',
    'Use mark schemes to self-assess and improve',
    'Align your responses with assessment criteria'
  ],
  successCriteria: [
    'I can read and understand mark schemes',
    'I can use mark schemes to identify why responses earn certain marks',
    'I can adjust my writing to meet higher levels of the mark scheme'
  ],
  keywords: ['mark scheme', 'assessment criteria', 'level descriptors', 'self-assessment', 'AO1-AO6'],
  starterActivity: {
    title: 'Mark Scheme Mystery',
    duration: '8 minutes',
    instructions: 'Show three Q2 analytical responses (weak, secure, exceptional) and their marks (3 marks, 5 marks, 6 marks). Students predict which gets which mark and why. Discuss: What makes the exceptional response better?',
    differentiation: {
      support: 'Provide marks and ask students to match.',
      core: 'Students predict marks and discuss features.',
      stretch: 'Students predict marks and identify specific mark scheme descriptors evident in each response.'
    }
  },
  mainActivities: [
    {
      title: 'How Mark Schemes Work',
      duration: '20 minutes',
      instructions: 'Explain mark scheme structure: (1) Reading and Analysis questions (Q1-Q3 on both papers) are marked against AO1, AO2, AO3, AO4 level descriptors, (2) Writing questions (Q5 on both papers) are marked against AO5 and AO6 descriptors. Each level (1, 2, 3, 4, 5 or higher) describes what students do at that level. Show an actual mark scheme (Q2 or Q4). Walk through: What does Level 2 require? What does Level 3 add? How do you move from Level 2 to Level 3? Emphasise that understanding the gap between levels is key to improvement.',
      differentiation: {
        support: 'Provide a simplified version of one mark scheme.',
        core: 'Study full mark schemes for Q1-Q4.',
        stretch: 'Study mark schemes and compare how criteria differ across questions.'
      },
      resources: ['Actual Edexcel mark schemes (Q2, Q4, Q5)', 'Mark scheme annotation guide']
    },
    {
      title: 'Using Mark Schemes for Self-Assessment',
      duration: '20 minutes',
      instructions: 'Teach students to self-assess using mark schemes: (1) Write or complete a task, (2) Read the mark scheme level descriptors, (3) Identify which level your response fits, (4) Identify what\'s missing to reach the next level, (5) Plan improvements. Model this process with a student Q2 response and the Q2 mark scheme. Have students self-assess one of their own responses using the mark scheme.',
      differentiation: {
        support: 'Provide a self-assessment template.',
        core: 'Students self-assess using mark scheme independently.',
        stretch: 'Students self-assess and create a plan to reach the next level.'
      },
      resources: ['Mark scheme self-assessment template', 'Student response to assess']
    },
    {
      title: 'Bridging the Levels',
      duration: '15 minutes',
      instructions: `Focus on common level gaps. For Q2 (analysis): What's the difference between Level 2 (basic analysis with some effect explanation) and Level 3 (sustained analysis, detailed effect explanation)? For Q5 (writing): What's the difference between Level 3 (clear communication, some technique use) and Level 4 (sustained communication, confident technique use)? Provide concrete examples from mark schemes. Discuss: How do you deliberately aim for Level 3 or 4?`,
      differentiation: {
        support: 'Focus on one question type and one level gap.',
        core: 'Study multiple level gaps across different questions.',
        stretch: 'Students identify their personal level ceiling and plan strategies to break through it.'
      },
      resources: ['Mark scheme level descriptors for Q2 and Q5']
    }
  ],
  plenaryActivity: {
    title: 'My Target Levels',
    duration: '5 minutes',
    instructions: 'Students identify their target level for each question (realistic based on current ability). Write them down. For exam revision, focus on reaching target level across all questions.',
    differentiation: {
      support: 'Suggest realistic targets based on student ability.',
      core: 'Students set their own targets.',
      stretch: 'Students set ambitious targets and create plans to reach them.'
    }
  },
  homework: 'Obtain the full Edexcel Language mark schemes (from exam board or your teacher). Study and annotate them. Create a one-page summary of what each level requires for Q2 and Q5.',
  worksheetQuestions: [
    {
      question: 'How can understanding mark schemes improve your exam performance?',
      lines: 3,
      modelAnswer: 'Mark schemes reveal exactly what examiners look for at each level. By understanding the criteria and level descriptors, you can deliberately write responses that meet higher levels. Self-assessing against mark schemes shows you what\'s missing from your work and how to improve.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Many students don\'t understand mark schemes or how to use them strategically.',
    'Access to official mark schemes is crucial. Ensure students have them.',
    'Mark scheme study is highly effective for improving exam performance.',
    'Discuss that different examiners may interpret levels slightly differently, so responses can be borderline.'
  ],
  targetedSkills: ['critical self-assessment', 'understanding criteria', 'targeting improvement', 'exam awareness']
};

// ── Lesson 18: Common Mistakes & How to Avoid Them ──

const edexcelLang18: LessonPlan = {
  id: 'edexcel-lang-18-common-mistakes',
  title: 'Common Mistakes & How to Avoid Them',
  text: 'Learning from Common Student Errors on Edexcel Language',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '45 minutes',
  objectives: [
    'Identify common student mistakes across different questions',
    'Understand why these mistakes occur',
    'Develop strategies to avoid them'
  ],
  successCriteria: [
    'I can identify common mistakes and why they occur',
    'I have strategies to prevent each mistake in my own writing',
    'I use my error patterns to guide revision'
  ],
  keywords: ['common mistakes', 'misconceptions', 'error analysis', 'exam technique'],
  starterActivity: {
    title: 'Spot the Mistake',
    duration: '8 minutes',
    instructions: 'Display four student responses to the same question. Two contain common mistakes. Students identify which are problematic and why.',
    differentiation: {
      support: 'Label which responses have mistakes.',
      core: 'Students identify mistakes and explain them.',
      stretch: 'Students categorise mistakes and suggest how to avoid them.'
    }
  },
  mainActivities: [
    {
      title: 'Common Mistakes by Question Type',
      duration: '20 minutes',
      instructions: 'Teach common mistakes: Q1 (copying too much instead of concise answer, misreading question), Q2/Q3 (summarising instead of analysing, not embedding quotations, missing the "effect" step), Q4 (not taking a stance, purely summarising writer\'s viewpoint without evaluation), Q5 (lack of planning leading to rushed, underdeveloped responses; generic vocabulary; lack of time management leading to incomplete work). For each, discuss why students make the mistake and how to prevent it.',
      differentiation: {
        support: 'Focus on mistakes in students\' weaker question types.',
        core: 'Learn common mistakes across all questions.',
        stretch: 'Students reflect on their own common mistakes and create prevention strategies.'
      },
      resources: ['Common Mistakes by Question handout', 'Student examples of each mistake']
    },
    {
      title: 'Case Study Analysis',
      duration: '12 minutes',
      instructions: 'Show a student Q4 response that makes a common mistake (e.g., fails to evaluate, just summarises). Discuss: What mistake is made? Where in the response? How could it be fixed? Have students rewrite the response to eliminate the mistake. Repeat with another question type.',
      differentiation: {
        support: 'Teacher guides the analysis.',
        core: 'Students identify mistakes and suggest fixes.',
        stretch: 'Students identify mistakes and rewrite responses eliminating them.'
      },
      resources: ['Student response with mistake', 'Correction guide']
    }
  ],
  plenaryActivity: {
    title: 'Your Personal Mistake Prevention Plan',
    duration: '5 minutes',
    instructions: 'Students identify their most likely mistakes (based on past exam responses or mock exams) and create a prevention plan (e.g., "I rush Q5. Prevention: I will spend 5 minutes planning before writing."). Write it down to review before exams.',
    differentiation: {
      support: 'Provide a mistake prevention template.',
      core: 'Students create their own plan.',
      stretch: 'Students create multiple plans for different scenarios.'
    }
  },
  homework: 'Review your own past exam responses or mock exams. Identify three mistakes you personally tend to make. Write prevention strategies for each.',
  worksheetQuestions: [
    {
      question: 'Why do students often summarise instead of analyse in Q2 and Q3?',
      lines: 3,
      modelAnswer: 'Summarising is easier and requires less deep thinking than analysis. To analyse, students must identify how a technique works and explain its effect on the reader. This requires more cognitive effort. Emphasising the "effect" step and modelling analysis helps prevent this mistake.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Learning from common mistakes is highly efficient. Address the most frequent errors in your cohort.',
    'Some mistakes are conceptual (e.g., confusing analysis with summary). Others are procedural (e.g., running out of time).',
    `Use real student work (anonymised) to illustrate mistakes. It's more powerful than invented examples.`,
    'Track common mistakes across your classes to identify patterns.'
  ],
  targetedSkills: ['error awareness', 'problem prevention', 'self-reflection', 'continuous improvement']
};

// ── Lesson 19: Exam Day Strategy & Final Preparation ──

const edexcelLang19: LessonPlan = {
  id: 'edexcel-lang-19-exam-day-strategy',
  title: 'Exam Day Strategy & Final Preparation',
  text: 'Last-Minute Tips & Exam Day Tactics',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '45 minutes',
  objectives: [
    'Prepare mentally and practically for exam day',
    'Develop last-minute revision strategies',
    'Execute effective exam day tactics'
  ],
  successCriteria: [
    'I have a plan for the night before and morning of the exam',
    'I know what to do when I open the exam paper',
    'I feel prepared and confident'
  ],
  keywords: ['exam day', 'final preparation', 'exam tactics', 'mental preparation', 'reading time'],
  starterActivity: {
    title: 'Exam Day Checklist',
    duration: '8 minutes',
    instructions: 'Display a checklist: pen/pencil, ruler, watch, water bottle, snack, tissues, exam timetable. Discuss: What else might students need? What should they NOT do the night before (cram new material, stay up late)?',
    differentiation: {
      support: 'Provide a checklist.',
      core: 'Students create their own checklist.',
      stretch: 'Students create a holistic prep plan (night before, morning of, first minutes of exam).'
    }
  },
  mainActivities: [
    {
      title: 'Final Revision (Week Before)',
      duration: '15 minutes',
      instructions: 'In the final week before the exam, avoid cramming new material. Instead: (1) Revisit technique banks and mark schemes (retrieval), (2) Do timed practice questions (last few full papers under exam conditions), (3) Review personalised error patterns and common mistakes. The goal is confidence and fluency, not learning new content. Discuss: Why is last-minute cramming ineffective? (Stress, fatigue, no time for consolidation.)',
      differentiation: {
        support: 'Provide a week-before revision plan.',
        core: 'Students create their own final week schedule.',
        stretch: 'Students create a contingency plan if they feel behind on exam eve.'
      },
      resources: ['Final Week Revision Guide']
    },
    {
      title: 'Exam Day Tactics',
      duration: '15 minutes',
      instructions: 'Teach exam day tactics: (1) Read the paper overview carefully during reading time (identify how many marks for each section), (2) Underline key words in questions (what are you being asked to do?), (3) Manage time by tracking progress against your time plan (watch or question number), (4) If stuck on a question, move on and return if time permits, (5) Use any remaining time to proofread and improve lower-value answers (leave highest-value Q5 for final polish). Discuss: Panic and overthinking lose more marks than strategy errors. How do you stay calm?',
      differentiation: {
        support: 'Provide an exam tactics checklist.',
        core: 'Students develop their own exam tactics.',
        stretch: 'Students plan contingency tactics for different scenarios (stuck on Q4, running out of time, etc.).'
      },
      resources: ['Exam Day Tactics card', 'Contingency strategies']
    }
  ],
  plenaryActivity: {
    title: 'Your Exam Day Plan',
    duration: '5 minutes',
    instructions: 'Students create a one-page Exam Day Plan: night-before plan, morning-of plan, paper 1 time allocation, paper 2 time allocation, tactics if stuck. Keep it visible during final prep.',
    differentiation: {
      support: 'Provide a template.',
      core: 'Students create their own.',
      stretch: 'Students create multiple plans for different exam scenarios.'
    }
  },
  homework: 'Finalise your Exam Day Plan. Prepare your exam materials checklist. Set reminders for final revision during the week before.',
  worksheetQuestions: [
    {
      question: 'Why is the reading time at the start of each paper important?',
      lines: 3,
      modelAnswer: 'Reading time allows you to scan the entire paper, identify question types, estimate mark allocations, and start planning your time strategy. It also settles nerves. Using reading time strategically sets the tone for successful exam performance.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Mental preparation is as important as content preparation.',
    'Students often neglect logistics (water, snack, watch). Practical comfort matters on exam day.',
    'Last-minute panic is common. Reassure students that if they\'ve revised strategically, they\'re ready.',
    'Normalise exam nerves. Some anxiety is healthy; it keeps you alert.'
  ],
  targetedSkills: ['exam technique', 'mental resilience', 'practical preparation', 'stress management']
};

// ── Lesson 20: Reflection & Goal-Setting for Exam Success ──

const edexcelLang20: LessonPlan = {
  id: 'edexcel-lang-20-reflection-goal-setting',
  title: 'Reflection & Goal-Setting for Exam Success',
  text: 'Final Reflection & Personal Goal-Setting',
  board: 'Edexcel',
  yearGroup: '10-11',
  duration: '45 minutes',
  objectives: [
    'Reflect on learning journey and progress',
    'Set realistic and ambitious exam goals',
    'Identify final action steps before exam'
  ],
  successCriteria: [
    'I can reflect honestly on my progress',
    'I have realistic and ambitious exam goals',
    'I know my final action steps'
  ],
  keywords: ['reflection', 'goal-setting', 'progress', 'success criteria', 'growth mindset'],
  starterActivity: {
    title: 'Progress Snapshot',
    duration: '8 minutes',
    instructions: 'Students reflect: When we started, what felt most challenging? Q2 analysis? Time management? Vocabulary? Do you feel more confident now? Discuss growth made so far.',
    differentiation: {
      support: 'Provide reflection prompts.',
      core: 'Students reflect freely.',
      stretch: 'Students identify specific evidence of growth (better mark scheme awareness, faster writing, etc.).'
    }
  },
  mainActivities: [
    {
      title: 'Honest Self-Assessment',
      duration: '15 minutes',
      instructions: 'Students complete a self-assessment across all questions: (1) Q1-Q4 on Papers 1-2 (confidence: 1-5 scale), (2) Q5 (quality of timed writing: 1-5 scale), (3) Time management (1-5 scale), (4) Technical accuracy (1-5 scale). Identify areas of strength and remaining development needs. Discuss: What does this tell you about what to focus on in final prep?',
      differentiation: {
        support: 'Provide a structured self-assessment form.',
        core: 'Students complete self-assessment independently.',
        stretch: 'Students compare their self-assessment to mock exam data and discuss discrepancies.'
      },
      resources: ['Self-Assessment Form']
    },
    {
      title: 'Goal-Setting: Realistic & Ambitious',
      duration: '15 minutes',
      instructions: 'Guide students in setting exam goals. Discuss two types: (1) Realistic goals based on current ability (e.g., "I will score 65-70% based on my mock exam performance"), (2) Ambitious goals that stretch you (e.g., "I will push myself to score 75% by focusing on Q5 quality"). Both are valuable. Set specific, measurable goals by question: "I will aim for Level 3/4 on Q2," "I will write a 500-word Q5 response with three narrative techniques." Write goals down and review weekly during final prep.',
      differentiation: {
        support: 'Provide goal-setting templates with examples.',
        core: 'Students set their own goals.',
        stretch: 'Students set ambitious goals and create detailed action plans to reach them.'
      },
      resources: ['Goal-Setting Template']
    }
  ],
  plenaryActivity: {
    title: 'Final Message & Commitment',
    duration: '5 minutes',
    instructions: 'Discuss: What will you commit to before the exam? (More timed practice? Proofreading every response? Using mark schemes to guide revision?) Students write a final personal commitment to themselves.',
    differentiation: {
      support: 'Provide commitment statement templates.',
      core: 'Students write their own commitment.',
      stretch: 'Students create accountability: share their commitment with a peer and check in weekly.'
    }
  },
  homework: 'Write a final reflection: What have you learned about yourself as a reader, writer, and exam-taker? What are you proud of? What will you carry forward after this exam?',
  worksheetQuestions: [
    {
      question: 'What is the difference between realistic and ambitious goals? Why do you need both?',
      lines: 3,
      modelAnswer: 'Realistic goals are based on current ability and provide motivation through achievable targets. Ambitious goals stretch you and encourage growth beyond your current level. Realistic goals build confidence; ambitious goals inspire you to push further. Together, they create a balanced, motivating approach.',
      marks: 3
    }
  ],
  teacherNotes: [
    'Reflection is a powerful learning tool. Create space for honest, non-judgmental reflection.',
    'Goal-setting increases motivation and focus. Make goals specific and measurable.',
    'Discuss growth mindset: effort and strategy improve performance, not fixed talent.',
    'End on a positive note. Students have prepared well. Exams are an opportunity to demonstrate learning.'
  ],
  targetedSkills: ['self-reflection', 'metacognition', 'goal-setting', 'growth mindset', 'self-motivation']
};

// ════════════════════════════════════════════════════════════════════════════════
// EXPORT FINAL ARRAY
// ════════════════════════════════════════════════════════════════════════════════

export const edexcelLanguageLessonPlans: LessonPlan[] = [
  edexcelLang1,
  edexcelLang2,
  edexcelLang3,
  edexcelLang4,
  edexcelLang5,
  edexcelLang6,
  edexcelLang7,
  edexcelLang8,
  edexcelLang9,
  edexcelLang10,
  edexcelLang11,
  edexcelLang12,
  edexcelLang13,
  edexcelLang14,
  edexcelLang15,
  edexcelLang16,
  edexcelLang17,
  edexcelLang18,
  edexcelLang19,
  edexcelLang20,
];
