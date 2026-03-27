export interface ExamTimingGuide {
  id: string;
  title: string;
  board: string;
  paper: string;
  totalTime: number;
  totalMarks: number;
  sections: {
    section: string;
    timeAllocation: number;
    marks: number;
    questionBreakdown: {
      question: string;
      marks: number;
      suggestedTime: number;
      approach: string;
      commonMistakes: string[];
      topTips: string[];
    }[];
  }[];
  timeSavingTips: string[];
  lastMinuteChecklist: string[];
  dayBeforeAdvice: string;
}

export const examTimingGuides: ExamTimingGuide[] = [
  // AQA Language Paper 1
  {
    id: 'aqa-lang-paper-1',
    title: 'AQA GCSE English Language Paper 1: Explorations in Creative Reading and Writing',
    board: 'AQA',
    paper: 'Language Paper 1',
    totalTime: 105, // 1 hour 45 minutes
    totalMarks: 80,
    sections: [
      {
        section: 'Reading: Source A Analysis (0-45 mins)',
        timeAllocation: 45,
        marks: 32,
        questionBreakdown: [
          {
            question: 'Q1: List 4 things from Source A (4 marks)',
            marks: 4,
            suggestedTime: 5,
            approach: 'Skim Source A (first 60 seconds) to identify content. Spend 4 minutes selecting 4 distinct facts/details from the passage. Be specific - avoid vague answers. Look for concrete information presented explicitly in the text.',
            commonMistakes: [
              'Listing the same point twice in different words',
              'Including your interpretation or inference rather than explicit information',
              'Writing incomplete or fragmented answers',
              'Copying entire sentences instead of concise points'
            ],
            topTips: [
              'List one detail per line for clarity',
              'Start points with different phrases to show variety',
              'Underline relevant sections in Source A as you identify them',
              'Use bullet points or numbering for clear structure'
            ]
          },
          {
            question: 'Q2: Analyse language techniques (8 marks)',
            marks: 8,
            suggestedTime: 12,
            approach: 'Select 3-4 distinct language features from Source A. For each: identify the technique, quote it, explain effect (why the writer uses it, how it affects the reader). Build a mini argument about how language creates meaning. Focus on semantic fields, imagery, sound devices, sentence structures.',
            commonMistakes: [
              'Identifying techniques but not explaining their effect',
              'Choosing words that don\'t contain deliberate techniques',
              'Explaining what happens to the reader without connecting to language choice',
              'Over-quoting - quotes should be short and integrated'
            ],
            topTips: [
              'Use the PEE method: Point (identify technique), Evidence (quote), Explanation (effect)',
              'Focus on "how" and "why" - what effect does this create?',
              'Write about 2-3 sentences per technique for depth',
              'Comment on connotations and emotional impact'
            ]
          },
          {
            question: 'Q3: Compare language techniques across sources (8 marks)',
            marks: 8,
            suggestedTime: 15,
            approach: 'Identify how Source A and Source B (a second extract) present their subjects differently through language. Find 3-4 comparable points. For each: identify technique in A, identify parallel/different technique in B, compare effects. Use comparative language: "whereas", "in contrast", "similarly", "both use".',
            commonMistakes: [
              'Analyzing sources separately instead of comparing',
              'Not finding genuine parallel points between texts',
              'Focusing only on differences, ignoring similarities',
              'Using weak comparative language or no comparison language at all'
            ],
            topTips: [
              'Use topic sentence to signal comparison: "Both sources use vivid language, though for different purposes"',
              'Find specific examples that are genuinely comparable',
              'Balance your response between A and B - don\'t favor one',
              'Explain WHY the writers make different language choices'
            ]
          },
          {
            question: 'Q4: Evaluate a writer\'s use of structure (12 marks)',
            marks: 12,
            suggestedTime: 13,
            approach: 'Analyze how Source A is organized and structured. Look at: paragraph organization, sentence length variation, use of repetition, opening/closing impact, pace changes. Evaluate HOW these structural choices support the writer\'s purpose and effect on readers. Link structure to meaning and emotional impact.',
            commonMistakes: [
              'Describing structure without evaluating its effect',
              'Not linking structural analysis to writer\'s purpose',
              'Analyzing language instead of structure',
              'Missing the big picture - how structure works overall'
            ],
            topTips: [
              'Start: "The structure of the text supports the writer\'s purpose by..."',
              'Comment on progression: opening hooks reader, middle develops ideas, ending reinforces message',
              'Note how short sentences create tension, long sentences build complexity',
              'Analyze paragraph breaks and topic development'
            ]
          }
        ]
      },
      {
        section: 'Writing: Creative Piece (45-105 mins)',
        timeAllocation: 60,
        marks: 48,
        questionBreakdown: [
          {
            question: 'Q5: Write about a moment when you had an unusual experience (40 marks for writing, 8 marks for technical accuracy)',
            marks: 48,
            suggestedTime: 55,
            approach: 'Spend 5 mins planning: create a story arc with clear beginning/middle/end, identify key moments of tension/emotion, decide on narrative technique. Write for 40 mins: establish setting and character quickly, use vivid descriptive language, vary sentence structures for effect, build tension gradually, end with a strong conclusion. Spend 10 mins proofreading: check spelling, punctuation, sentence boundaries, vary vocabulary.',
            commonMistakes: [
              'Spending too little time planning, resulting in rambling narrative',
              'Writing too fast and making careless spelling/punctuation errors',
              'Forgetting to vary sentence types - all simple or all complex',
              'Not showing emotions/sensory details - telling instead of showing',
              'Running out of time mid-story'
            ],
            topTips: [
              'Plan a 3-part story: setup (2-3 paragraphs), development (3-4 paragraphs), resolution (1-2 paragraphs)',
              'Use the senses: describe what you see, hear, smell, feel, taste',
              'Vary your sentence starters: avoid repetition of "I" or "The"',
              'Include dialogue to break up narrative and show character',
              'Use rhetorical techniques: metaphors, similes, personification for impact',
              'Save 5 mins for final read-through to catch errors'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Spend first 2 minutes skimming both sources before attempting questions',
      'Underline key words in questions to stay focused - don\'t answer the wrong question',
      'For Q1, use quick scanning techniques: look for numbers, names, specific facts',
      'Write concisely for analytical questions - aim for quality over quantity',
      'For your creative writing, have a clear mental outline before starting',
      'Don\'t re-read the entire source when answering - use Find & Replace mentally',
      'Use margin notes to track which points you\'ve used in comparison questions'
    ],
    lastMinuteChecklist: [
      'Confirm you answered all 5 questions (1-5)',
      'Check your creative piece has a clear beginning, middle, and end',
      'Verify all quotes are accurately copied from the source',
      'Ensure comparative language is present in Q3',
      'Look for spelling errors in high-value words',
      'Check sentence boundaries - no run-ons or fragments',
      'Verify you\'ve given explanations, not just identified techniques',
      'Make sure your creative writing shows, not tells, emotions',
      'Count: do you have roughly the right word count for writing section?'
    ],
    dayBeforeAdvice: 'Review structure techniques and language devices in familiar texts. Practice identifying language techniques from a news article or advertisement. Read through a model essay showing strong comparative language. Don\'t write full practice essays the night before - just review your techniques. Get good sleep - a clear mind is more important than more revision.'
  },

  // AQA Language Paper 2
  {
    id: 'aqa-lang-paper-2',
    title: 'AQA GCSE English Language Paper 2: Writers\' Perspectives and Purposes',
    board: 'AQA',
    paper: 'Language Paper 2',
    totalTime: 105,
    totalMarks: 80,
    sections: [
      {
        section: 'Reading: Source Analysis and Synthesis (0-45 mins)',
        timeAllocation: 45,
        marks: 32,
        questionBreakdown: [
          {
            question: 'Q1: Identify 4 things stated about theme from Source A (4 marks)',
            marks: 4,
            suggestedTime: 5,
            approach: 'Read Source A in first 60 seconds to understand its main theme. Identify 4 explicit statements about this theme. Each point should be a separate, distinct fact. Write in your own words - concisely, one per line. Avoid interpretation or inference.',
            commonMistakes: [
              'Including inferred points rather than explicit statements',
              'Repeating the same point in different words',
              'Misreading the source or missing key details'
            ],
            topTips: [
              'Underline the theme as you identify it',
              'Read the question carefully - it asks what is "stated", not implied',
              'Keep answers short and specific'
            ]
          },
          {
            question: 'Q2: Analyse writers\' methods in Source A (8 marks)',
            marks: 8,
            suggestedTime: 12,
            approach: 'Find 3-4 key language techniques the writer uses to convey their perspective. For each: identify technique, quote precisely, explain effect. Show how the writer\'s word choice shapes their message. Focus on vocabulary choice, imagery, emotional language, repetition, and sentence types.',
            commonMistakes: [
              'Not explaining WHY the writer chose this technique',
              'Analyzing grammar without connecting to purpose',
              'Choosing weak examples that don\'t clearly demonstrate technique'
            ],
            topTips: [
              'Focus on word choice analysis - explore connotations',
              'Use phrases: "The writer uses... to suggest...", "This conveys..."',
              'Explain effect on the reader\'s perception'
            ]
          },
          {
            question: 'Q3: Analyse writers\' methods in Source B (8 marks)',
            marks: 8,
            suggestedTime: 12,
            approach: 'Repeat the process for Source B. Find 3-4 techniques. Be thorough and methodical. This source presents a different perspective, so note what techniques help express this different viewpoint. Compare mentally to Source A but focus on B\'s own methods.',
            commonMistakes: [
              'Comparing sources instead of analyzing B independently',
              'Using less depth than in Q2',
              'Missing unique techniques specific to this source'
            ],
            topTips: [
              'Give equal weight and depth to Source B as to Source A',
              'Note if this writer uses similar or different techniques',
              'Explain specific effects that support this source\'s perspective'
            ]
          },
          {
            question: 'Q4: Compare perspectives in both sources (12 marks)',
            marks: 12,
            suggestedTime: 16,
            approach: 'Synthesize both sources. Identify 3-4 areas where perspectives differ or align. For each area: state how Source A views it, state how Source B views it, use evidence from both, explain significance of difference/similarity. Use comparison language: "However", "In contrast", "While... similarly", "Both sources...". Show depth of understanding across both texts.',
            commonMistakes: [
              'Making comparisons at surface level only',
              'Not using evidence from both sources equally',
              'Stating what\'s similar/different without explaining why it matters',
              'Describing rather than analyzing'
            ],
            topTips: [
              'Find genuine contrasts: not just "A says X, B says Y" but "A emphasizes X, while B prioritizes Y, suggesting..."',
              'Use topic sentences to guide comparison: "The two writers have fundamentally different views about..."',
              'Quote selectively from both sources',
              'Explain how writer\'s perspective shapes their approach'
            ]
          }
        ]
      },
      {
        section: 'Writing: Persuasive Piece (45-105 mins)',
        timeAllocation: 60,
        marks: 48,
        questionBreakdown: [
          {
            question: 'Q5: Write an article, letter, or speech persuading your audience (40 marks for writing, 8 marks for technical accuracy)',
            marks: 48,
            suggestedTime: 55,
            approach: 'Plan for 5 mins: decide your viewpoint, identify 3-4 persuasive techniques to use, outline your argument. Write for 40 mins: craft a strong opening that hooks reader, develop 3 main arguments with evidence, use persuasive devices (rhetorical questions, repetition, emotive language, statistics, direct address), build to a powerful conclusion. Proofread for 10 mins: check spelling, punctuation, sentence variety, appropriate register.',
            commonMistakes: [
              'Forgetting to match the format (article, letter, speech)',
              'Using persuasion techniques without purpose - they seem forced',
              'Not addressing the audience appropriately',
              'Making arguments without supporting evidence',
              'Poor spelling and punctuation weakening persuasive impact'
            ],
            topTips: [
              'Use address directly: "You must understand...", "Imagine if...", "Consider this..."',
              'Build emotional connection - persuasion isn\'t just logic',
              'Include counter-argument and refute it for strength',
              'Use rule of three: "The time has come, the moment is here, we must act now"',
              'End with call to action or memorable statement',
              'Vary sentence length for rhythm and emphasis'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Scan sources in first 90 seconds, then tackle questions in order',
      'For Q1, skim for obvious, stated points - don\'t overthink',
      'Underline evidence before writing analysis - saves time hunting later',
      'Write concisely on analysis questions - depth matters more than length',
      'For persuasive writing, stick to your plan - don\'t rewrite midway',
      'Use complex sentence structures to add weight without adding words',
      'Check comparative language in Q4 - make sure you\'re comparing, not just describing'
    ],
    lastMinuteChecklist: [
      'Verify you have 5 answers (Q1-5)',
      'Check Q1: are all 4 points distinct and stated explicitly?',
      'Confirm Q2 and Q3: do you have 3-4 techniques analyzed per source?',
      'Verify Q4: are both sources used equally with specific evidence?',
      'Check persuasive piece: do you have an engaging opening and strong conclusion?',
      'Verify you\'ve used persuasive techniques appropriately',
      'Look for spelling mistakes, especially in complex words',
      'Check sentence boundaries - no fragments or run-ons',
      'Verify punctuation is correct, particularly for complex sentences'
    ],
    dayBeforeAdvice: 'Practice identifying a writer\'s purpose and perspective from a short article. Work on comparing two texts on the same topic to understand synthesis. Review persuasive techniques: rhetorical questions, repetition, emotive language, direct address. Write a short persuasive paragraph to build confidence. Focus on getting good rest - you\'ll need a sharp mind for synthesis and writing.'
  },

  // AQA Literature Paper 1
  {
    id: 'aqa-lit-paper-1',
    title: 'AQA GCSE English Literature Paper 1: Shakespeare and Contemporary Drama',
    board: 'AQA',
    paper: 'Literature Paper 1',
    totalTime: 105,
    totalMarks: 64,
    sections: [
      {
        section: 'Section A: Shakespeare (0-60 mins)',
        timeAllocation: 60,
        marks: 32,
        questionBreakdown: [
          {
            question: 'Q1: Analyse how a character is portrayed and how language creates effects (32 marks)',
            marks: 32,
            suggestedTime: 50,
            approach: 'Read the question carefully - identify which character and which moment/play section. Spend 2 mins planning: list 3-4 key scenes/moments showing this character, identify language techniques Shakespeare uses, plan your argument about how character develops or is presented. Write for 40 mins: structure as 4-5 paragraphs, each focusing on different scene/technique. Quote directly from text (Shakespeare), analyze language (imagery, metaphor, tone, syntax), explain character motivation and development. Link to broader themes. Proofread for 5 mins.',
            commonMistakes: [
              'Retelling plot instead of analyzing character portrayal',
              'Quoting without analyzing the language and its effects',
              'Ignoring the specific question - answering a different question about the character',
              'Not using evidence from the play text',
              'Focusing on what happens rather than how Shakespeare presents it'
            ],
            topTips: [
              'Start with direct answer: "Shakespeare portrays [character] as [quality] through..."',
              'Use embedded quotes - integrate them into sentences',
              'Analyze at word level: explain why Shakespeare chose this specific word',
              'Track character development - show how they change through play',
              'Connect to themes: how does this character explore the play\'s main ideas?',
              'Use subject terminology: soliloquy, dramatic irony, stage directions, aside'
            ]
          },
          {
            question: 'Timed essay response',
            marks: 32,
            suggestedTime: 50,
            approach: 'This is an essay requiring evidence from throughout the play. Plan your 3-4 main points, each supported by quotes from different scenes. Structure: intro (introduce character and argument), 3-4 body paragraphs (different scenes/techniques), conclusion (summarize argument and link to overall play themes). Use transition phrases between paragraphs.',
            commonMistakes: [
              'Using only one or two scenes as evidence',
              'Not having a clear argument to sustain throughout',
              'Writing narrative summary instead of analysis'
            ],
            topTips: [
              'Structure as introduction, three development paragraphs, conclusion',
              'Each paragraph should open with a clear topic sentence',
              'Use variety of scenes from across the play',
              'Link character to themes and other characters'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read the question once carefully, then start planning immediately - don\'t re-read',
      'Use shorthand while planning: character qualities, scenes, techniques, themes',
      'Write thesis statement first - this guides your essay structure',
      'Use topic sentences to signal your argument clearly',
      'Write faster than usual - aim for fluency over perfection on first draft',
      'Use book annotations or memory of key scenes efficiently',
      'Don\'t spend time on introduction longer than 2-3 sentences'
    ],
    lastMinuteChecklist: [
      'Confirm you answered the specific question asked',
      'Check: do you have evidence from at least 3-4 different scenes?',
      'Verify: have you analyzed language effects, not just identified techniques?',
      'Look for: do you have a clear argument running through the essay?',
      'Check: is your opening sentence direct and clear?',
      'Verify: does your conclusion summarize your argument, not introduce new points?',
      'Scan for: spelling mistakes, incomplete sentences, punctuation errors',
      'Check: have you used embedded quotes (short, integrated) rather than long blocks?',
      'Verify: does every paragraph start with a clear topic sentence?'
    ],
    dayBeforeAdvice: 'Review key scenes from your Shakespeare play - don\'t re-read the whole thing. Create a one-page summary of main characters and themes. Practice writing one paragraph analyzing a key scene, focusing on language analysis. Read a model essay to see how to structure your response. Avoid cramming - get rest so you can think clearly about character and language under exam conditions.'
  },

  // AQA Literature Paper 2
  {
    id: 'aqa-lit-paper-2',
    title: 'AQA GCSE English Literature Paper 2: Prose and Poetry',
    board: 'AQA',
    paper: 'Literature Paper 2',
    totalTime: 135,
    totalMarks: 96,
    sections: [
      {
        section: 'Section A: Modern Prose (0-60 mins)',
        timeAllocation: 60,
        marks: 32,
        questionBreakdown: [
          {
            question: 'Q1: Analyse how a theme is presented in the novel (32 marks)',
            marks: 32,
            suggestedTime: 50,
            approach: 'Read question to identify theme. Spend 2 mins planning: list 3-4 key scenes where this theme appears, identify techniques/devices used, plan your argument. Write essay for 40 mins: Introduction (define theme and state how author presents it), Body (3-4 paragraphs, each covering different scene/technique, focusing on theme development), Conclusion (summarize how theme is central to novel). Quote from text, analyze writer\'s techniques (characterization, setting, dialogue, narrative perspective), explain effects. Proofread 5 mins.',
            commonMistakes: [
              'Summarizing plot instead of analyzing theme',
              'Using evidence from only one or two scenes',
              'Not explaining how techniques create meaning about the theme',
              'Ignoring the specific theme in the question'
            ],
            topTips: [
              'Define the theme explicitly in your introduction',
              'Show how theme develops/changes through the novel',
              'Analyze writer\'s techniques: use of dialogue to reveal theme, setting\'s symbolic role, character development reflecting theme',
              'Use embedded quotes relevant to theme',
              'Connect to other characters and subplots showing different facets of theme',
              'Discuss author\'s possible purpose in exploring this theme'
            ]
          }
        ]
      },
      {
        section: 'Section B: Poetry (60-135 mins)',
        timeAllocation: 75,
        marks: 64,
        questionBreakdown: [
          {
            question: 'Q2: Compare poems\' treatment of theme (32 marks)',
            marks: 32,
            suggestedTime: 35,
            approach: 'Question specifies two poems to compare. Spend 3 mins planning: identify how each poem treats the theme, find 3-4 comparable points, identify poetic techniques in each. Write for 28 mins: Structure with introduction (state what you\'re comparing), 3-4 comparison paragraphs (each covering one aspect of theme across both poems), conclusion (synthesis). Use comparison language: "Whereas", "In contrast", "Similarly", "Both poets...". Analyze techniques: imagery, structure, tone, language choice. Proofread 4 mins.',
            commonMistakes: [
              'Analyzing poems separately instead of comparing throughout',
              'Identifying techniques without explaining their effect on meaning',
              'Using weak comparison language or no comparison at all',
              'Not having equal coverage of both poems'
            ],
            topTips: [
              'Use comparison topic sentences: "Both poets use vivid imagery, though to different effect..."',
              'Find genuinely comparable points - not just surface-level similarities',
              'Analyze at close reading level: word choice, line breaks, rhythm, sound',
              'Explain WHY poets make different choices - what does this reveal?',
              'Use transition phrases that emphasize comparison',
              'Balance analysis - roughly equal time on each poem'
            ]
          },
          {
            question: 'Q3: Analyse a single poem\'s techniques (32 marks)',
            marks: 32,
            suggestedTime: 40,
            approach: 'Question specifies a poem and aspect to analyze. Spend 2 mins planning: identify 3-4 key techniques (imagery, structure, tone, rhythm, line breaks, language choices), map where they appear in poem, plan how they work together. Write for 33 mins: Introduction (state what techniques create), Body (3-4 paragraphs analyzing different techniques and their combined effect), Conclusion (synthesis of how techniques work together). Quote from poem, analyze at word level, explain effects on reader. Proofread 5 mins.',
            commonMistakes: [
              'Just identifying techniques without explaining effects',
              'Not using relevant quotations',
              'Analyzing language at word level without considering poetic form',
              'Treating techniques in isolation rather than showing how they work together'
            ],
            topTips: [
              'Start with what the poem does/creates, then explain how techniques achieve this',
              'Analyze sound: alliteration, assonance, onomatopoeia - how do they affect reading?',
              'Analyze structure: line length, stanza form, line breaks - what effect?',
              'Analyze imagery: what senses does it appeal to? What does it suggest?',
              'Analyze language: why these words? What are their connotations?',
              'Show how techniques reinforce each other and the poem\'s overall meaning'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read questions before reading texts - know what to focus on',
      'Plan your essays with bullet points - 2-3 mins per essay planning saves time in writing',
      'Use topic sentences to signal your points - makes essay structure clear',
      'Quote efficiently: use short quotations integrated into sentences',
      'For comparison, use a grid while planning: poem A technique, effect, poem B technique, effect',
      'Write at good pace - you can edit quickly but can\'t write from scratch in remaining time',
      'Don\'t re-read entire texts when answering - use memory and spot-check key moments'
    ],
    lastMinuteChecklist: [
      'Verify you answered both Q2 (comparison) and Q3 (analysis) plus prose Q1',
      'Check: do you have evidence from throughout texts, not just opening/ending?',
      'Verify: have you used embedded quotes (short and integrated)?',
      'Check: does each essay have a clear introduction, development, and conclusion?',
      'Verify: comparison essay uses actual comparison language throughout?',
      'Look for: spelling mistakes, incomplete sentences, punctuation errors',
      'Check: have you answered the specific question asked, not a different question?',
      'Verify: does your analysis explain HOW techniques create effects, not just what they are?',
      'Check: does conclusion synthesize and return to your main argument?'
    ],
    dayBeforeAdvice: 'Reread your poems and prose novel - focus on key scenes/poems. Create one-page summary of themes and key techniques. Practice one timed paragraph comparing two poems. Review comparison language: "whereas", "in contrast", "similarly", "both poets use...". Don\'t write full essays - practice planning instead, which is more valuable. Get good sleep - essay writing under time pressure requires mental clarity.'
  },

  // Edexcel Language Paper 1
  {
    id: 'edexcel-lang-paper-1',
    title: 'Edexcel GCSE English Language Paper 1: Transactional and Creative Writing',
    board: 'Edexcel',
    paper: 'Language Paper 1',
    totalTime: 105,
    totalMarks: 64,
    sections: [
      {
        section: 'Reading: Source Analysis (0-45 mins)',
        timeAllocation: 45,
        marks: 16,
        questionBreakdown: [
          {
            question: 'Q1: Identify key information and infer meaning (8 marks)',
            marks: 8,
            suggestedTime: 15,
            approach: 'Read the source article/text carefully in first 3 minutes. Question asks you to identify explicit information and make inferences. Spend 12 minutes: list 4 pieces of information stated, then explain 2-3 inferences you can make from the text. Support inferences with textual evidence. Show reading comprehension - you understand what\'s stated and can read between the lines.',
            commonMistakes: [
              'Confusing inference with pure opinion - inference must be text-based',
              'Not supporting inferences with evidence',
              'Misreading what\'s explicitly stated',
              'Making wild inferences not grounded in the text'
            ],
            topTips: [
              'Inferences: use phrases like "This suggests...", "The reader can deduce...", "This implies..."',
              'Support each inference with a quotation',
              'Look for language that hints at meaning: "seemed", "appeared", "perhaps"',
              'Read the text, noting your reactions - these often lead to good inferences'
            ]
          },
          {
            question: 'Q2: Analyse the writer\'s use of language (8 marks)',
            marks: 8,
            suggestedTime: 15,
            approach: 'Identify 3-4 language techniques the writer uses. For each: pinpoint the technique, quote it, explain its effect. Show how language choices create specific impressions or persuade the reader. Focus on vocabulary, tone, imagery, or rhetorical devices. Connect language to writer\'s purpose.',
            commonMistakes: [
              'Describing what happens without explaining how language creates it',
              'Choosing weak examples that don\'t clearly show technique',
              'Not explaining the effect on the reader',
              'Over-quoting - short, integrated quotes work better'
            ],
            topTips: [
              'Find language that shows attitude or persuades - not just information',
              'Analyze word choice: what are the connotations of this word?',
              'Look at tone: formal/informal, approving/critical, emotional/factual',
              'Explain effect: "This creates a sense of...", "This persuades the reader to..."'
            ]
          }
        ]
      },
      {
        section: 'Writing: Transactional or Creative Text (45-105 mins)',
        timeAllocation: 60,
        marks: 48,
        questionBreakdown: [
          {
            question: 'Q3: Write transactional text (letter, email, article, leaflet) OR creative text (50 marks total: 40 for writing, 10 for technical accuracy)',
            marks: 50,
            suggestedTime: 55,
            approach: 'TRANSACTIONAL: Plan for 5 mins (identify purpose, audience, format; list 3 key points). Write for 40 mins (match format exactly - letter has opening/closing, email has subject line, article has headline, leaflet is structured visually). Use formal/appropriate register. Organize logically with clear paragraphs. Proofread 10 mins for accuracy. CREATIVE: Plan for 5 mins (outline story, identify key moment, plan twist/ending). Write for 40 mins (establish setting, develop character, build tension, end with impact). Use descriptive language and varied sentences. Proofread 10 mins.',
            commonMistakes: [
              'Transactional: not matching the required format (missing letter opening, email structure, etc.)',
              'Transactional: using informal register when formal is needed',
              'Creative: spending too much time on setup, rushing the ending',
              'Either: poor spelling and punctuation undermining message',
              'Either: not tailoring content to stated audience/purpose'
            ],
            topTips: [
              'TRANSACTIONAL: Write format features first (letter date/address, email subject, headline) then content',
              'TRANSACTIONAL: Match register to purpose - job application is formal, complaint to friend is informal',
              'CREATIVE: Show don\'t tell - use sensory details and dialogue',
              'CREATIVE: Vary sentence length: short for tension, long for description',
              'Both: Check that every word serves your purpose - eliminate waffle',
              'Both: Proofread aloud to catch awkward phrasing'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Spend first 5 minutes reading the source and question carefully',
      'Underline key words in questions to stay focused',
      'For reading analysis, jot down technique and effect next to relevant passages',
      'Write concisely - quality of analysis matters more than quantity',
      'For writing, have clear plan before starting to write',
      'Use paragraph structure to organize ideas clearly',
      'Save 10 minutes for proofreading - catch careless errors'
    ],
    lastMinuteChecklist: [
      'Verify you answered all 3 questions',
      'Check: Q1 has explicit information and inferences with evidence?',
      'Verify: Q2 analysis includes technique, quotation, and explanation of effect?',
      'Check: Q3 matches the required format (letter/email/article/leaflet/story)',
      'Verify: appropriate register for audience and purpose',
      'Look for spelling mistakes, especially in key words',
      'Check: sentence boundaries - no run-ons or fragments',
      'Verify: paragraphs are clearly structured with topic ideas',
      'Check: writing style matches format (formal letter vs. creative story)'
    ],
    dayBeforeAdvice: 'Review one news article, analyzing language techniques and inferences. Practice writing a formal letter or email to build confidence in transactional writing. Write a short creative paragraph focusing on sensory detail and varied sentences. Look at model answers to see structure and standard. Don\'t write full practice essays - focus on techniques and format. Get rest - clear thinking matters more than last-minute cramming.'
  },

  // Edexcel Language Paper 2
  {
    id: 'edexcel-lang-paper-2',
    title: 'Edexcel GCSE English Language Paper 2: Engaging with Non-Fiction',
    board: 'Edexcel',
    paper: 'Language Paper 2',
    totalTime: 125,
    totalMarks: 96,
    sections: [
      {
        section: 'Reading and Analysis (0-50 mins)',
        timeAllocation: 50,
        marks: 24,
        questionBreakdown: [
          {
            question: 'Q1: Identify and interpret information (8 marks)',
            marks: 8,
            suggestedTime: 12,
            approach: 'Read source quickly. Question asks for explicit information and interpretation. Identify 4 explicit facts, then explain what this information suggests about a topic/attitude. Support interpretations with textual reference. Show you understand both surface meaning and implied meaning.',
            commonMistakes: [
              'Not clearly separating explicit information from interpretation',
              'Making inferences without any textual support',
              'Misreading factual information'
            ],
            topTips: [
              'Use clear structure: "The text explicitly states... This suggests..."',
              'Reference specific parts of text when interpreting',
              'Explain the significance of the information you identify'
            ]
          },
          {
            question: 'Q2: Analyse language techniques and effects (8 marks)',
            marks: 8,
            suggestedTime: 13,
            approach: 'Find 3-4 distinct language choices. For each: identify technique, quote precisely, explain effect on reader/persuasiveness. Show how language creates tone, emotion, or persuasion. Connect to writer\'s purpose.',
            commonMistakes: [
              'Identifying techniques without explaining effect',
              'Choosing examples that don\'t strongly show technique',
              'Not explaining why the writer made this choice'
            ],
            topTips: [
              'Look for emotionally loaded language or persuasive devices',
              'Analyze connotations of word choices',
              'Comment on tone created by language choices',
              'Link to purpose: how does this language persuade/influence?'
            ]
          },
          {
            question: 'Q3: Compare perspectives and attitudes across two sources (8 marks)',
            marks: 8,
            suggestedTime: 13,
            approach: 'Identify how two sources present different viewpoints about a topic. Find 3-4 areas of difference/similarity in attitude. For each: describe Source A\'s perspective, describe Source B\'s perspective, use evidence from both. Use comparison language. Show understanding of how both writers use language to convey attitude.',
            commonMistakes: [
              'Describing separately instead of comparing',
              'Not using evidence from both sources equally',
              'Weak comparison language or no comparison signals'
            ],
            topTips: [
              'Use topic sentences that signal comparison: "While A presents X positively, B views it critically..."',
              'Find specific language in each source that reveals attitude',
              'Quote from both sources in each comparison point',
              'Explain significance of different perspectives'
            ]
          }
        ]
      },
      {
        section: 'Writing: Persuasive or Informative Text (50-125 mins)',
        timeAllocation: 75,
        marks: 72,
        questionBreakdown: [
          {
            question: 'Q4: Write persuasive/informative article or letter (56 marks for writing, 16 for technical accuracy)',
            marks: 72,
            suggestedTime: 70,
            approach: 'Plan for 5 mins: determine format (article, letter, speech), identify your perspective/argument, list 3-4 main points with supporting ideas. Write for 55 mins: Write engaging opening that hooks reader (2-3 sentences), develop 3-4 main points with supporting details/examples/evidence, use appropriate persuasive or informative techniques, build toward strong conclusion. Aim for 350-400 words. Vary sentence structures and vocabulary. Proofread for 10 mins: check spelling, punctuation, sentence boundaries, register consistency.',
            commonMistakes: [
              'Not matching format (article needs headline, letter needs structure)',
              'Using persuasion techniques that seem forced or artificial',
              'Poor paragraph structure - ideas seem disorganized',
              'Weak opening or conclusion',
              'Careless spelling and punctuation errors reducing impact',
              'Not addressing the specified audience appropriately'
            ],
            topTips: [
              'Format: Start with headline/opening line that grabs attention',
              'Use rule of three for memorable phrasing: "Action is needed now, commitment is essential, change is possible"',
              'Use rhetorical devices: rhetorical questions, repetition, direct address, emotive language',
              'Include specific examples or statistics to support points',
              'Vary sentence length: short sentences for emphasis, longer for development',
              'Use topic sentences to signal paragraph ideas clearly',
              'End with call to action or memorable statement',
              'Match tone to purpose: persuasive is urgent/emotional, informative is clear/balanced'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read all sources quickly first (5 mins) to understand overall topic',
      'Underline key words in questions to avoid misinterpretation',
      'Use margin notes while analyzing - mark where techniques appear',
      'Write concisely on analysis questions - depth and precision matter more than length',
      'For writing, use your 5-minute plan to stay focused and avoid backtracking',
      'Use time management: 50 mins reading, 75 mins writing = 125 total',
      'Don\'t over-check the reading section - you can\'t add new points by rereading'
    ],
    lastMinuteChecklist: [
      'Verify you answered Q1, Q2, Q3 (reading) and Q4 (writing)',
      'Check: Q3 compares perspectives with evidence from both sources?',
      'Verify: Q4 matches required format (article/letter/speech)',
      'Check: Q4 has engaging opening and strong conclusion',
      'Verify: appropriate tone and register for audience and purpose',
      'Look for spelling mistakes, especially in longer words',
      'Check: sentence boundaries - no fragments or run-ons',
      'Verify: varied sentence structures throughout',
      'Check: paragraphs are logically organized with clear topic ideas'
    ],
    dayBeforeAdvice: 'Practice analyzing a short article for language techniques and perspective. Read two short texts on same topic and practice comparing their viewpoints. Write a short persuasive paragraph focusing on rhetorical devices and varied sentence structure. Review your format-specific requirements (article headline, letter structure, etc.). Don\'t write full essays - practice planning and technique identification instead. Ensure you get good sleep for mental clarity during exam.'
  },

  // Edexcel Literature Paper 1
  {
    id: 'edexcel-lit-paper-1',
    title: 'Edexcel GCSE English Literature Paper 1: Shakespeare and Unseen Poetry',
    board: 'Edexcel',
    paper: 'Literature Paper 1',
    totalTime: 105,
    totalMarks: 80,
    sections: [
      {
        section: 'Section A: Shakespeare (0-55 mins)',
        timeAllocation: 55,
        marks: 40,
        questionBreakdown: [
          {
            question: 'Q1: Analyse character or theme in Shakespeare (40 marks)',
            marks: 40,
            suggestedTime: 50,
            approach: 'Read question carefully - identify character/theme to analyze. Spend 3 mins planning: list 3-4 key scenes showing character/theme, identify Shakespeare\'s techniques, plan argument. Write for 42 mins: Introduction (direct answer to question), Body (3-4 paragraphs each analyzing different scene, Shakespeare\'s techniques, effects), Conclusion (synthesis and link to broader play meaning). Use embedded quotes from text. Analyze language at close-reading level. Show understanding of historical/dramatic context. Proofread 5 mins.',
            commonMistakes: [
              'Summarizing plot instead of analyzing character/theme',
              'Using evidence from only 1-2 scenes',
              'Identifying techniques without explaining effects on meaning',
              'Not directly answering the specific question asked',
              'Ignoring Shakespeare\'s use of language and dramatic devices'
            ],
            topTips: [
              'Open with clear thesis: "Shakespeare presents [character] as [quality], revealed through..."',
              'Use embedded quotes - integrate them into analytical sentences',
              'Analyze at word level: why did Shakespeare choose THIS word?',
              'Comment on dramatic irony, soliloquies, asides, stage directions',
              'Track character development or theme evolution through play',
              'Link to historical context or dramatic conventions where relevant',
              'Use subject terminology: dramatic tension, tragic flaw, verbal irony, etc.'
            ]
          }
        ]
      },
      {
        section: 'Section B: Unseen Poetry (55-105 mins)',
        timeAllocation: 50,
        marks: 40,
        questionBreakdown: [
          {
            question: 'Q2: Analyse an unseen poem (40 marks)',
            marks: 40,
            suggestedTime: 45,
            approach: 'Read poem 2-3 times (don\'t spend more than 3 mins). Spend 3 mins planning: identify poem\'s subject/theme, list 3-4 key techniques (imagery, structure, language, form), map their effects, plan your argument. Write for 37 mins: Introduction (identify poem\'s subject and how poet creates meaning), Body (3-4 paragraphs analyzing different techniques and their effects), Conclusion (overall effect and meaning). Use embedded quotes. Analyze at word level and at structural level. Proofread 5 mins.',
            commonMistakes: [
              'Paraphrasing poem instead of analyzing techniques',
              'Not using quotes to support analysis',
              'Treating techniques in isolation rather than showing how they work together',
              'Not explaining effects on reader/meaning created',
              'Analyzing language without considering poetic form'
            ],
            topTips: [
              'Read poem title and first/last lines carefully - they often signal meaning',
              'Structure analysis: subject (what\'s it about?) → techniques (how is it conveyed?) → effect (why does this matter?)',
              'Analyze sound: alliteration, assonance, onomatopoeia, rhyme scheme - what effect do they create?',
              'Analyze structure: line breaks, stanza form, enjambment - how do they guide reading?',
              'Analyze imagery: what senses does it appeal to? What\'s the impact?',
              'Analyze language: word choice, connotations, tone - what do they reveal?',
              'Show how techniques work together to create overall meaning',
              'Comment on poet\'s possible intention and reader\'s emotional response'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Shakespeare: know your play well - you won\'t have time to look up scenes',
      'Use topic sentences to signal your argument clearly - saves time editing',
      'Write embedded quotes only - avoid quote blocks that waste time and space',
      'For unseen poetry: read it 2-3 times carefully, then plan before writing',
      'Use planning time wisely - good plan means faster, more organized writing',
      'Write at a good pace - you can refine but can\'t write from scratch later',
      'Don\'t re-read entire texts when answering - trust your memory and spot-check'
    ],
    lastMinuteChecklist: [
      'Verify you answered both Q1 (Shakespeare) and Q2 (unseen poetry)',
      'Check: do you have evidence from multiple scenes/sections of Shakespeare?',
      'Verify: poetry analysis includes specific quotations supporting each point?',
      'Look for: is your argument clear and consistent throughout?',
      'Check: does opening sentence directly answer the question?',
      'Verify: have you analyzed language/techniques, not just identified them?',
      'Check: does conclusion synthesize your argument, not introduce new ideas?',
      'Look for spelling mistakes, incomplete sentences, punctuation errors',
      'Verify: each paragraph starts with clear topic sentence'
    ],
    dayBeforeAdvice: 'Review key scenes from your Shakespeare play - create one-page summary. Practice analyzing a familiar poem for techniques and effects. Look at a model essay to understand expected structure and depth. Read one unseen poem for practice, analyzing techniques. Don\'t write full essays - focus on understanding how to analyze language and structure. Get good sleep - analytical thinking requires a fresh mind.'
  },

  // Edexcel Literature Paper 2
  {
    id: 'edexcel-lit-paper-2',
    title: 'Edexcel GCSE English Literature Paper 2: Prose and Romantic Poetry',
    board: 'Edexcel',
    paper: 'Literature Paper 2',
    totalTime: 135,
    totalMarks: 96,
    sections: [
      {
        section: 'Section A: Modern Prose (0-70 mins)',
        timeAllocation: 70,
        marks: 48,
        questionBreakdown: [
          {
            question: 'Q1: Analyse theme, character, or writer\'s methods in the novel (48 marks)',
            marks: 48,
            suggestedTime: 60,
            approach: 'Read question - identify what to analyze. Spend 3 mins planning: list 3-4 key scenes/moments showing what the question asks about, identify writer\'s techniques, plan argument. Write for 52 mins: Introduction (direct answer), Body (4 paragraphs analyzing different scenes, techniques, effects), Conclusion (synthesis). Use embedded quotes from novel. Analyze writer\'s methods: characterization, dialogue, setting, narrative perspective, symbolism. Show understanding of author\'s purpose. Proofread 5 mins.',
            commonMistakes: [
              'Summarizing plot instead of analyzing theme/character/methods',
              'Using evidence from only 1-2 scenes',
              'Not explaining how techniques create meaning',
              'Not directly addressing the specific question',
              'Ignoring narrative perspective and other structural elements'
            ],
            topTips: [
              'Start with thesis: "The writer presents [theme/character] through..."',
              'Track theme or character development across the novel',
              'Analyze dialogue - what does it reveal about character/theme?',
              'Analyze setting - how does it reinforce theme or character?',
              'Analyze narrative perspective - how does the narrative method shape meaning?',
              'Identify symbols and discuss their significance',
              'Discuss author\'s purpose - why explore this theme?',
              'Use embedded quotes integrated into analytical sentences'
            ]
          }
        ]
      },
      {
        section: 'Section B: Romantic Poetry (70-135 mins)',
        timeAllocation: 65,
        marks: 48,
        questionBreakdown: [
          {
            question: 'Q2: Compare two poems\' treatment of theme (24 marks)',
            marks: 24,
            suggestedTime: 30,
            approach: 'Question specifies two poems. Spend 3 mins planning: identify how each poem treats the theme, find 3-4 comparable points, identify techniques in each. Write for 23 mins: Introduction (what theme are you comparing?), 3-4 comparison paragraphs (each analyzes how both poems approach one aspect of theme), Conclusion (overall comparison). Use comparison language. Analyze techniques creating meaning. Balance coverage of both poems. Proofread 4 mins.',
            commonMistakes: [
              'Analyzing poems separately instead of comparing throughout',
              'Not finding genuine comparative points',
              'Weak comparison language or no signals of comparison',
              'Imbalanced coverage - focusing on one poem more than the other'
            ],
            topTips: [
              'Use comparison topic sentences: "Both poems explore love, yet reveal different perspectives..."',
              'Find specific techniques that create comparable effects',
              'Analyze at close-reading level: word choice, line length, rhythm, rhyme',
              'Explain WHY poets make different technical choices',
              'Balance: roughly equal lines on each poem',
              'Use transition phrases: "Similarly", "However", "Whereas", "In contrast"'
            ]
          },
          {
            question: 'Q3: Analyse a single Romantic poem in depth (24 marks)',
            marks: 24,
            suggestedTime: 25,
            approach: 'Spend 2 mins planning: identify poem\'s subject/purpose, list 3-4 key techniques, map their effects, plan analysis. Write for 19 mins: Introduction (what the poem does/creates), 3-4 paragraphs (each analyzing different technique and its effect), Conclusion (how techniques work together). Analyze at word level, line level, and structural level. Use embedded quotes. Show how techniques support the poem\'s meaning. Proofread 4 mins.',
            commonMistakes: [
              'Just identifying techniques without explaining effects',
              'Not using quotes to support analysis',
              'Treating techniques as isolated rather than interconnected',
              'Not explaining why the poet makes these choices'
            ],
            topTips: [
              'Structure: what\'s the poem\'s subject? → how are techniques deployed? → what\'s the overall effect?',
              'Analyze form: is it regular/irregular? How does form affect meaning?',
              'Analyze sound: rhyme, rhythm, alliteration - how do they create effect?',
              'Analyze imagery: what senses? What\'s significant?',
              'Analyze language: specific word choices and their connotations',
              'Show how techniques work together to create overall meaning and effect'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read novel and poems - don\'t rely on summaries for exam',
      'Plan your essays with bullet points (2-3 mins) - good plan saves writing time',
      'Use topic sentences to organize ideas - makes structure clear and saves revision time',
      'Write embedded quotes only - short, integrated quotes are more efficient than blocks',
      'For comparison poems, use grid while planning to see parallel points',
      'Write at good pace - you can edit quickly but can\'t write from scratch later',
      'Manage your 135 minutes: 70 mins on prose, 65 mins on poetry'
    ],
    lastMinuteChecklist: [
      'Verify you answered Q1 (prose), Q2 (comparison), and Q3 (single poem)',
      'Check: do you have evidence throughout the novel, not just opening/closing?',
      'Verify: poetry comparison uses actual comparison language throughout?',
      'Check: each essay has clear opening sentence answering the question',
      'Verify: all analysis explains HOW techniques create effects, not just what they are',
      'Look for spelling mistakes, incomplete sentences, punctuation errors',
      'Check: paragraphs have topic sentences and follow clear structure',
      'Verify: conclusion synthesizes argument, doesn\'t introduce new points',
      'Check: all quotations are integrated into analytical sentences'
    ],
    dayBeforeAdvice: 'Reread key sections of your novel - focus on theme/character. Review your Romantic poems - know them well. Practice writing one paragraph analyzing a technique in a poem. Write one paragraph comparing two poems on same theme. Look at model essays to see structure and depth. Don\'t write full essays - focus on understanding technique and comparison. Get good rest - essay writing requires clear, analytical thinking.'
  },

  // OCR Language Paper 1
  {
    id: 'ocr-lang-paper-1',
    title: 'OCR GCSE English Language Paper 1: Communicating Ideas and Information',
    board: 'OCR',
    paper: 'Language Paper 1',
    totalTime: 120,
    totalMarks: 80,
    sections: [
      {
        section: 'Reading: Analysis of Information Text (0-50 mins)',
        timeAllocation: 50,
        marks: 20,
        questionBreakdown: [
          {
            question: 'Q1: Identify and select information (6 marks)',
            marks: 6,
            suggestedTime: 10,
            approach: 'Read source article quickly (2 mins). Identify key information points requested by question. Select and note 4-6 relevant pieces of information. Be concise and specific - use own words, not copying extended phrases from text.',
            commonMistakes: [
              'Selecting points that don\'t directly answer the question',
              'Copying large chunks instead of summarizing',
              'Including irrelevant information'
            ],
            topTips: [
              'Skim for keywords from the question',
              'Select only what\'s asked - don\'t add extra',
              'Summarize in your own words',
              'Be concise - one phrase per point'
            ]
          },
          {
            question: 'Q2: Explain how information is presented (8 marks)',
            marks: 8,
            suggestedTime: 15,
            approach: 'Look at how the article is structured and formatted. Analyze: paragraph organization, use of lists/bullets, headings, emphasis techniques, visual hierarchy. Explain HOW these presentation choices help communicate information effectively to the reader. Show understanding of audience and purpose.',
            commonMistakes: [
              'Describing format without explaining its effect',
              'Not connecting format to purpose/audience',
              'Listing features without analysis'
            ],
            topTips: [
              'Consider purpose: is text trying to inform, persuade, or both?',
              'How does structure guide reader through information?',
              'How do headings help reader navigate?',
              'How does visual layout emphasize key points?',
              'Explain effect on reader - does format make information clear/persuasive?'
            ]
          },
          {
            question: 'Q3: Analyse the writer\'s use of language (6 marks)',
            marks: 6,
            suggestedTime: 13,
            approach: 'Identify 2-3 language techniques/choices. For each: quote, identify technique, explain effect. Show how language choices support the text\'s purpose. Focus on vocabulary, tone, or rhetorical devices.',
            commonMistakes: [
              'Not explaining effect of language choices',
              'Choosing weak examples',
              'Not connecting to purpose/audience'
            ],
            topTips: [
              'Look for persuasive language or emotional language',
              'Analyze word choice: why this word? What connotations?',
              'Comment on tone: formal/informal, approving/critical, etc.',
              'Link to purpose: how does language help achieve it?'
            ]
          }
        ]
      },
      {
        section: 'Writing: Creating an Information Text (50-120 mins)',
        timeAllocation: 70,
        marks: 60,
        questionBreakdown: [
          {
            question: 'Q4: Write an information text (website, leaflet, article, guide) (50 marks for writing, 10 for technical accuracy)',
            marks: 60,
            suggestedTime: 65,
            approach: 'Plan for 5 mins: identify format, purpose, audience; list 4-5 main ideas to communicate. Write for 52 mins: match format (website includes navigation, leaflet includes sections, article includes headline), structure information logically with clear headings/sections, use engaging language that suits audience, include specific details/examples, use formatting effectively (lists, emphasis) to aid clarity. Proofread 8 mins: check spelling, punctuation, clarity of expression.',
            commonMistakes: [
              'Not matching specified format',
              'Poor organization - information seems random',
              'Passive, unclear language - doesn\'t engage reader',
              'Careless spelling and punctuation errors',
              'Failing to adapt to audience/purpose'
            ],
            topTips: [
              'Match format: website needs structure, leaflet needs sections, article needs headline',
              'Use clear headings and subheadings to guide reader',
              'Organize information logically: by importance, chronologically, by category',
              'Use lists and bullet points for clarity',
              'Use active voice where possible: "We offer" not "Services are offered"',
              'Adapt vocabulary to audience - not too simple, not too technical',
              'Ensure every sentence communicates clearly - remove waffle',
              'Proofread carefully - errors undermine credibility'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read source and questions carefully first (2-3 mins) - understand what\'s being asked',
      'Underline key requirements in each question',
      'For information selection, skim for relevant points - don\'t reread entire text',
      'Write concisely on analysis questions - precision matters more than length',
      'For writing, use your 5-minute plan to stay focused',
      'Use clear heading structure - saves time editing and improves clarity',
      'Save 8-10 minutes for proofreading - catch careless errors'
    ],
    lastMinuteChecklist: [
      'Verify you answered Q1, Q2, Q3 (reading) and Q4 (writing)',
      'Check: Q1 points directly answer the question asked?',
      'Verify: Q2 explains presentation choices and their effects?',
      'Check: Q3 includes technique identification, quotation, and effect?',
      'Verify: Q4 matches required format',
      'Check: information is organized logically with clear structure',
      'Verify: headings and formatting aid reader understanding',
      'Look for spelling mistakes, especially in key terms',
      'Check: sentence boundaries - no fragments or run-ons',
      'Verify: language is clear and suited to audience/purpose'
    ],
    dayBeforeAdvice: 'Review how information can be presented: lists, headings, visual hierarchy. Read an article or leaflet, analyzing how format aids understanding. Write a short informative paragraph using headings and lists. Practice identifying language techniques in a non-fiction text. Don\'t write full pieces - focus on format and clarity instead. Get good sleep - clear thinking is essential for planning and writing under timed conditions.'
  },

  // OCR Language Paper 2
  {
    id: 'ocr-lang-paper-2',
    title: 'OCR GCSE English Language Paper 2: Transactional and Creative Writing',
    board: 'OCR',
    paper: 'Language Paper 2',
    totalTime: 120,
    totalMarks: 80,
    sections: [
      {
        section: 'Writing: Choice of Two Sections (0-120 mins)',
        timeAllocation: 120,
        marks: 80,
        questionBreakdown: [
          {
            question: 'Choose EITHER Section A (Transactional Writing) OR Section B (Creative Writing)',
            marks: 40,
            suggestedTime: 60,
            approach: 'You answer ONE of two options. TRANSACTIONAL (email, letter, report, proposal): Plan 3-5 mins (identify format, purpose, audience, key points). Write 50-55 mins (match format, use appropriate register, structure clearly, include all necessary information). Proofread 5-7 mins. CREATIVE (narrative or descriptive): Plan 3-5 mins (outline story/mood, identify key moments, plan sensory details). Write 50-55 mins (establish setting, develop character/tension, vary sentence structures, build to conclusion). Proofread 5-7 mins.',
            commonMistakes: [
              'Not matching specified format',
              'Transactional: using wrong register for audience',
              'Creative: telling rather than showing emotions/sensations',
              'Either: poor structure - ideas don\'t follow logically',
              'Either: careless spelling and punctuation'
            ],
            topTips: [
              'TRANSACTIONAL: Write format features first (letter date/closing, email subject line, report heading)',
              'TRANSACTIONAL: Formal register for professional audiences, conversational for friends',
              'TRANSACTIONAL: Use clear paragraphing, bullet points where appropriate',
              'CREATIVE: Show don\'t tell - use sensory details and dialogue',
              'CREATIVE: Vary sentence length: short for impact, long for description',
              'CREATIVE: Develop character through action and dialogue, not description',
              'Either: Every word should serve the purpose - eliminate unnecessary phrases',
              'Either: Proofread aloud to catch awkward phrasing'
            ]
          },
          {
            question: 'Section A and/or Section B (select questions within chosen section)',
            marks: 40,
            suggestedTime: 60,
            approach: 'Within your chosen section, you may have a choice of topics. Read all options before selecting. Choose the one you can write most compellingly about. Follow the approach outlined above. Remember: you answer EITHER A or B, not both sections.',
            commonMistakes: [
              'Attempting both sections - you can only score for one',
              'Choosing a topic you\'re not confident with',
              'Not reading all options before deciding'
            ],
            topTips: [
              'Read all topics before choosing',
              'Choose based on what you can write best about, not what seems easiest',
              'Commit to one section - don\'t waste time on the other'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Decide immediately which section (A or B) suits you - don\'t waste time deliberating',
      'Within your chosen section, read all topics and choose quickly (2 mins)',
      'Spend 3-5 mins planning before writing - clear plan saves time editing',
      'Write at good pace - aim for fluency, you can polish in proofreading',
      'Use paragraph breaks to organize ideas - clear structure saves revision time',
      'Save 5-7 minutes for proofreading - catch errors before submitting',
      'Don\'t attempt the section you didn\'t choose - focus fully on one'
    ],
    lastMinuteChecklist: [
      'Verify you chose either Section A or Section B (not both)',
      'Check: does your writing match the specified format?',
      'Verify: tone and register suit the audience/purpose?',
      'Check: is your structure clear with logical organization?',
      'Verify: Transactional piece includes all necessary information?',
      'Check: Creative piece has clear beginning, development, and conclusion?',
      'Look for spelling mistakes, especially in key words',
      'Check: sentence boundaries - no fragments or run-ons',
      'Verify: word choice is appropriate and varied',
      'Check: proofreading is thorough - no careless errors'
    ],
    dayBeforeAdvice: 'Practice writing in your chosen section (A or B). If transactional, write a formal email and informal letter to see different registers. If creative, write a short story or descriptive paragraph. Review format requirements for your chosen type (letter structure, article format, etc.). Don\'t practice both sections - focus fully on your stronger area. Get good rest - creative and persuasive writing require a fresh, clear mind.'
  },

  // WJEC Language Component 1
  {
    id: 'wjec-lang-component-1',
    title: 'WJEC GCSE English Language Component 1: Non-Fiction Texts and Transactional Writing',
    board: 'WJEC',
    paper: 'Language Component 1',
    totalTime: 105,
    totalMarks: 80,
    sections: [
      {
        section: 'Part 1: Reading and Understanding Non-Fiction (0-50 mins)',
        timeAllocation: 50,
        marks: 30,
        questionBreakdown: [
          {
            question: 'Q1: Comprehension and summarization (10 marks)',
            marks: 10,
            suggestedTime: 15,
            approach: 'Read source text in first 3 minutes. Answer 5-6 short comprehension questions testing understanding of explicit information and simple inferences. Write concise answers - aim for 1-2 sentences per question. Show you understand what text says and what it implies.',
            commonMistakes: [
              'Misreading the question or source text',
              'Over-explaining when concise answers suffice',
              'Making inferences without text evidence'
            ],
            topTips: [
              'Read each question carefully before answering',
              'Find the relevant part of the text before answering',
              'Support inferences with reference to the text',
              'Keep answers concise - quality over length'
            ]
          },
          {
            question: 'Q2: Analyse language techniques (10 marks)',
            marks: 10,
            suggestedTime: 15,
            approach: 'Identify 3-4 language techniques/choices from the text. For each: pinpoint the technique, quote it, explain its effect on reader. Show how word choice, tone, and language devices create meaning or persuade. Connect to writer\'s purpose.',
            commonMistakes: [
              'Identifying techniques without explaining effect',
              'Choosing weak examples',
              'Not connecting to purpose/meaning'
            ],
            topTips: [
              'Look for emotionally loaded language or persuasive devices',
              'Analyze connotations of word choices',
              'Comment on tone created by language',
              'Link to writer\'s purpose - what effect is intended?'
            ]
          },
          {
            question: 'Q3: Analyse text structure and organization (10 marks)',
            marks: 10,
            suggestedTime: 13,
            approach: 'Analyze how text is organized and structured. Look at: paragraph breaks, use of headings, sentence length variation, opening and closing impact, logical development of ideas. Explain HOW these structural choices support the text\'s purpose and effectiveness.',
            commonMistakes: [
              'Describing structure without explaining effect',
              'Not connecting to purpose/audience',
              'Treating structure in isolation'
            ],
            topTips: [
              'Start: "The structure of the text is effective because..."',
              'Note how opening engages reader, middle develops argument, closing reinforces message',
              'Comment on paragraph organization - how ideas progress',
              'Explain effect of short/long sentences on reading pace',
              'Connect structure to purpose and audience'
            ]
          }
        ]
      },
      {
        section: 'Part 2: Writing a Transactional Text (50-105 mins)',
        timeAllocation: 55,
        marks: 50,
        questionBreakdown: [
          {
            question: 'Q4: Write a transactional text (letter, email, article, advertisement, or report) (35 marks for writing, 15 for technical accuracy)',
            marks: 50,
            suggestedTime: 50,
            approach: 'Plan for 5 mins: determine format, identify purpose, audience, and key points to communicate. Write for 40 mins: match format exactly (letter has greeting/closing, email has subject line, article has headline, report has sections), use appropriate register and tone, organize information logically with clear paragraphing, include specific details/examples, ensure clarity of expression. Proofread 5 mins: check spelling, punctuation, sentence boundaries, appropriate vocabulary.',
            commonMistakes: [
              'Not matching the specified format',
              'Using inappropriate register for the audience',
              'Poor organization - ideas seem disjointed',
              'Vague or unclear expression',
              'Careless spelling and punctuation errors'
            ],
            topTips: [
              'Format: write format features first (letter date/address/closing, email subject)',
              'Audience: adapt vocabulary and tone to suit - formal for professionals, conversational for friends',
              'Organization: use clear paragraphing, with each paragraph having one main idea',
              'Clarity: ensure every sentence serves a purpose - remove waffle',
              'Tone: consistent with audience and purpose - maintain register throughout',
              'Examples: include specific details to support your communication',
              'Proofread: check spelling of important words, sentence boundaries, punctuation'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read source and questions carefully first (3-4 mins)',
      'Underline key words in questions to stay focused',
      'For Q1, find relevant text section before answering - speeds up comprehension',
      'Write concisely - quality of analysis matters more than length',
      'For writing, use your 5-minute plan to stay focused and organized',
      'Use paragraph structure and headings - aids clarity and saves editing time',
      'Save 5 minutes for proofreading - catch careless errors'
    ],
    lastMinuteChecklist: [
      'Verify you answered Q1, Q2, Q3 (reading) and Q4 (writing)',
      'Check: Q1 comprehension answers directly address questions?',
      'Verify: Q2 includes technique identification, quotation, and effect?',
      'Check: Q3 explains structure and connects to purpose/effect?',
      'Verify: Q4 matches required format',
      'Check: appropriate register and tone throughout writing',
      'Verify: information organized logically with clear paragraphing',
      'Look for spelling mistakes, especially in key words',
      'Check: sentence boundaries - no fragments or run-ons',
      'Verify: language is clear and suited to audience/purpose'
    ],
    dayBeforeAdvice: 'Practice reading a non-fiction text and identifying language techniques and structure. Write a formal letter and informal email to practice matching format and register. Review format features: letter structure, email conventions, article layout. Don\'t write full pieces - focus on understanding technique, structure, and format instead. Get good sleep - clear thinking is essential for analysis and writing.'
  },

  // WJEC Language Component 2
  {
    id: 'wjec-lang-component-2',
    title: 'WJEC GCSE English Language Component 2: Creative and Personal Writing',
    board: 'WJEC',
    paper: 'Language Component 2',
    totalTime: 120,
    totalMarks: 80,
    sections: [
      {
        section: 'Creative and Personal Writing (0-120 mins)',
        timeAllocation: 120,
        marks: 80,
        questionBreakdown: [
          {
            question: 'Choose from 3 creative/personal writing topics (35 marks for writing, 15 for technical accuracy)',
            marks: 50,
            suggestedTime: 110,
            approach: 'Spend 2 mins reading all 3 topic options. Choose the one you\'re most confident writing about. Plan for 5 mins: outline your story/personal experience, identify key moments, plan sensory details and emotions to include. Write for 95 mins: establish setting and character quickly, develop narrative with dialogue and description, build tension/emotional impact, vary sentence structures for effect, end with strong conclusion. Proofread 8 mins: check spelling, punctuation, sentence boundaries, varied vocabulary.',
            commonMistakes: [
              'Choosing a topic you\'re not confident with',
              'Spending too much time on setup, rushing the ending',
              'Telling emotions instead of showing through action/dialogue',
              'Repetitive sentence structures and vocabulary',
              'Careless spelling and punctuation errors',
              'Losing focus on the narrative/experience'
            ],
            topTips: [
              'Choose topic where you have genuine ideas - authenticity shows',
              'Plan a clear story arc: setup (introduce character/situation), development (build tension/emotion), resolution (satisfying conclusion)',
              'Show don\'t tell: use dialogue and action to reveal character',
              'Use senses: describe what you see, hear, smell, feel, taste',
              'Vary sentence structures: short for impact, long for description',
              'Include dialogue to break up narrative and show character',
              'Use literary devices: metaphor, simile, personification for effect',
              'Develop character through their choices and reactions',
              'Proofread carefully - errors distract from your story'
            ]
          },
          {
            question: 'Alternative writing options available',
            marks: 50,
            suggestedTime: 110,
            approach: 'Exam may offer different topic options (narrative, personal experience, descriptive). Whichever option you choose, follow the approach above: plan clearly, write with vivid detail, vary sentence structures, end with impact. The key is committing fully to your chosen option.',
            commonMistakes: [
              'Wasting time trying to write multiple options',
              'Choosing a topic just because it seems easy',
              'Not tailoring your approach to the specific type (narrative vs. descriptive, etc.)'
            ],
            topTips: [
              'Read all options before choosing',
              'Choose based on what you can write most compellingly',
              'Commit to one choice - don\'t second-guess',
              'Adapt your approach to the specific requirement'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Spend only 2 minutes choosing your topic - decide quickly',
      'Plan for 5 minutes - good plan saves time in writing and editing',
      'Write at good pace - aim for fluency over perfection on first draft',
      'Use paragraph breaks naturally - they aid structure without requiring thinking time',
      'Don\'t re-read while writing - keep momentum, edit afterward',
      'Save 8 minutes for proofreading - catch careless errors'
    ],
    lastMinuteChecklist: [
      'Verify you answered one of the creative writing options',
      'Check: does your narrative/experience have clear beginning, middle, and end?',
      'Verify: sensory details and emotions are shown, not just told?',
      'Check: sentence structures vary - not all simple or all complex?',
      'Verify: dialogue and action reveal character effectively?',
      'Look for spelling mistakes, especially in longer words',
      'Check: sentence boundaries - no fragments or run-ons',
      'Verify: vocabulary is varied and appropriate',
      'Check: conclusion is strong and satisfying, not rushed',
      'Verify: proofreading is thorough - no careless errors'
    ],
    dayBeforeAdvice: 'Write a short narrative or descriptive paragraph focusing on sensory detail. Practice varying sentence structures - mix short sentences for impact with longer, descriptive ones. Review dialogue techniques - how does dialogue reveal character? Don\'t write a full piece the night before - just build confidence with shorter practice. Get good sleep - creative writing requires a fresh, imaginative mind.'
  },

  // IGCSE Language Paper 1
  {
    id: 'igcse-lang-paper-1',
    title: 'IGCSE English Language Paper 1: Reading and Vocabulary',
    board: 'IGCSE',
    paper: 'Language Paper 1',
    totalTime: 120,
    totalMarks: 80,
    sections: [
      {
        section: 'Reading Comprehension (0-120 mins)',
        timeAllocation: 120,
        marks: 80,
        questionBreakdown: [
          {
            question: 'Q1: Reading Passage A - Comprehension questions (20 marks)',
            marks: 20,
            suggestedTime: 25,
            approach: 'Read Passage A in first 4 minutes. Then answer comprehension questions testing understanding of: explicit information, inferences, vocabulary in context, writer\'s attitude. For each question: read carefully, identify relevant section of passage, formulate concise answer using own words where required. Questions may ask you to select correct answer, fill blanks, answer in complete sentences, or explain understanding.',
            commonMistakes: [
              'Misreading questions - answering the wrong question',
              'Not finding the relevant text section before answering',
              'Over-explaining simple comprehension questions',
              'Misunderstanding what "in your own words" requires'
            ],
            topTips: [
              'Read each question twice before answering',
              'Locate the relevant section of Passage A',
              'Keep answers concise but complete',
              'Use own words for comprehension but reference text for support',
              'Check your answer makes sense in context of question'
            ]
          },
          {
            question: 'Q2: Reading Passage A - Language analysis (15 marks)',
            marks: 15,
            suggestedTime: 20,
            approach: 'Answer questions analyzing how writer uses language to create effects. Identify 3-4 language techniques/features. For each: pinpoint location in text, name the technique, explain its effect on reader. Focus on word choice, figurative language, tone, sentence structures. Show understanding of how language supports meaning.',
            commonMistakes: [
              'Identifying techniques without explaining effects',
              'Choosing weak examples that don\'t clearly show technique',
              'Not explaining why writer chose this technique'
            ],
            topTips: [
              'Look for vivid language, emotive words, or stylistic devices',
              'Explain connotations of word choices',
              'Comment on tone and how it\'s created',
              'Link language analysis to writer\'s purpose/meaning'
            ]
          },
          {
            question: 'Q3: Reading Passage B - Comprehension questions (20 marks)',
            marks: 20,
            suggestedTime: 25,
            approach: 'Read Passage B in 4 minutes. Answer comprehension questions about this passage. Same types of questions as Passage A: explicit understanding, inferences, vocabulary in context, writer\'s attitude. Be precise and concise.',
            commonMistakes: [
              'Confusing Passage A and Passage B content',
              'Misreading questions',
              'Not using text evidence for inferences'
            ],
            topTips: [
              'Keep Passages A and B separate in your mind',
              'Reread each question to ensure accuracy',
              'Support answers with text reference'
            ]
          },
          {
            question: 'Q4: Reading Passage B - Language analysis (15 marks)',
            marks: 15,
            suggestedTime: 20,
            approach: 'Analyze language techniques in Passage B. Same process as Q2: identify techniques, quote precisely, explain effects. Show understanding of how language creates meaning and supports writer\'s purpose.',
            commonMistakes: [
              'Repeating same techniques as Passage A analysis',
              'Not giving equal depth to Passage B as to Passage A',
              'Analyzing language without explaining effect'
            ],
            topTips: [
              'Find different techniques from Passage A',
              'Give equal analytical depth to both passages',
              'Explain specific effects on reader'
            ]
          },
          {
            question: 'Q5: Vocabulary and word use (10 marks)',
            marks: 10,
            suggestedTime: 10,
            approach: 'Answer questions about vocabulary: find synonyms, explain word meanings in context, discuss connotations, or replace words with alternatives. Show understanding of word choice and meaning.',
            commonMistakes: [
              'Not understanding the word in its context',
              'Giving a dictionary definition rather than contextual meaning',
              'Proposing substitutes that don\'t work in context'
            ],
            topTips: [
              'Read the word in context - full sentence or paragraph',
              'Consider what the word contributes to meaning',
              'For synonyms, find words that work in this context',
              'Understand connotations, not just denotations'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Read both passages strategically (8 mins total) - don\'t reread multiple times',
      'Underline key words in questions to stay focused',
      'For comprehension, find relevant text section before writing answer',
      'For language analysis, identify technique, effect, purpose in that order',
      'Write concisely - precise answers save time and avoid confusion',
      'Answer all questions even if you\'re unsure - partial credit is possible',
      'Don\'t spend excessive time on any single question - move on and return if time'
    ],
    lastMinuteChecklist: [
      'Verify you answered Q1 (Passage A comprehension) completely',
      'Check: Q2 language analysis includes technique, quotation, and effect',
      'Verify: Q3 (Passage B comprehension) all questions answered',
      'Check: Q4 language analysis is thorough and balanced',
      'Verify: Q5 vocabulary answers show contextual understanding',
      'Look for spelling mistakes, especially in quotations',
      'Check: all answers are complete and address the question',
      'Verify: you haven\'t left any questions blank',
      'Check: quotations are accurate and properly referenced'
    ],
    dayBeforeAdvice: 'Practice reading comprehension by reading news articles and answering questions about them. Review language techniques: metaphor, simile, alliteration, tone, word choice. Practice analyzing why a writer chose particular words and what effects they create. Read a model answer to see expected depth of analysis. Don\'t write full practice exams - focus on understanding techniques and vocabulary. Get good sleep for sharp reading comprehension.'
  },

  // IGCSE Language Paper 2
  {
    id: 'igcse-lang-paper-2',
    title: 'IGCSE English Language Paper 2: Writing',
    board: 'IGCSE',
    paper: 'Language Paper 2',
    totalTime: 120,
    totalMarks: 50,
    sections: [
      {
        section: 'Writing Tasks (0-120 mins)',
        timeAllocation: 120,
        marks: 50,
        questionBreakdown: [
          {
            question: 'Q1: Directed writing - Write a transactional/functional text based on scenario (15 marks)',
            marks: 15,
            suggestedTime: 35,
            approach: 'Read scenario carefully - identify format (letter, email, article, advert, report), purpose, audience, key information to include. Plan 3 mins: list essential points and format features. Write 28 mins: match format exactly (letter structure, email conventions, etc.), use appropriate register (formal for professional, conversational for personal), organize logically, include all required information, use clear language. Proofread 4 mins: check spelling, punctuation, format correctness.',
            commonMistakes: [
              'Not matching the specified format',
              'Using wrong register for the audience',
              'Missing key information from the scenario',
              'Poor organization - ideas seem disjointed',
              'Careless spelling and punctuation'
            ],
            topTips: [
              'Write format features first (letter date/address, email subject)',
              'Understand audience - adapt tone accordingly',
              'Include all information required by scenario',
              'Organize logically with clear paragraphing',
              'Use register appropriate to context - don\'t mix formal and informal',
              'Be concise but complete',
              'Proofread for format correctness and spelling'
            ]
          },
          {
            question: 'Q2: Creative writing - Choose from narrative or descriptive writing (15 marks)',
            marks: 15,
            suggestedTime: 40,
            approach: 'Read all creative writing options and choose the one you\'re most confident with. Plan 5 mins: outline narrative/mood, identify key moments, plan sensory details. Write 32 mins: establish setting and character, develop narrative with dialogue and vivid description, vary sentence structures for effect, build to satisfying conclusion. Aim for 350+ words. Proofread 3 mins: check spelling, punctuation, sentence boundaries.',
            commonMistakes: [
              'Choosing a topic you\'re not confident with',
              'Telling emotions instead of showing through action',
              'Repetitive vocabulary and sentence structures',
              'Weak opening or rushed ending',
              'Careless spelling and punctuation'
            ],
            topTips: [
              'Choose based on what you can write compellingly about',
              'Show not tell: use dialogue, action, sensory detail to convey emotion',
              'Establish setting quickly - don\'t spend half your time on setup',
              'Develop character through choices and reactions',
              'Vary sentence length: short for emphasis, long for description',
              'Use literary devices: metaphor, simile, personification',
              'End with impact - don\'t rush the conclusion',
              'Proofread for spelling and sentence structure'
            ]
          },
          {
            question: 'Q3: Writing from different perspective - Rewrite or respond to a scenario (20 marks)',
            marks: 20,
            suggestedTime: 35,
            approach: 'Read scenario - you may be asked to rewrite in a different format, write from a different character\'s perspective, or respond to given text. Plan 5 mins: understand requirements, identify key points, plan structure. Write 28 mins: match the new perspective/format, use appropriate tone and register, include relevant detail, maintain coherence with original context. Proofread 2 mins: check spelling and sentence structure.',
            commonMistakes: [
              'Not fully understanding the perspective/format change needed',
              'Omitting important details from original scenario',
              'Inconsistent perspective or tone',
              'Poor structure - ideas seem disconnected',
              'Careless spelling and punctuation'
            ],
            topTips: [
              'Understand the new perspective - how does it change your approach?',
              'Maintain consistency with original scenario details',
              'Use tone appropriate to new format/perspective',
              'Organize logically with clear progression',
              'Include sufficient detail to make writing convincing',
              'Proofread for accuracy and clarity'
            ]
          }
        ]
      }
    ],
    timeSavingTips: [
      'Decide which writing tasks suit you best - plan your 120 minutes strategically',
      'Plan each writing task (3-5 mins) - good plan saves writing and editing time',
      'Write at good pace - aim for fluency, you can polish in proofreading',
      'Use paragraph structure to organize ideas clearly',
      'Don\'t re-read while writing - keep momentum',
      'Save 5-10 minutes total for proofreading all pieces',
      'Answer all three questions if possible - partial credit is valuable'
    ],
    lastMinuteChecklist: [
      'Verify you answered Q1 (directed writing) with correct format',
      'Check: Q1 includes all information required by scenario',
      'Verify: Q1 uses appropriate register for audience/purpose',
      'Check: Q2 (creative writing) has engaging opening and strong conclusion',
      'Verify: Q2 sensory details and emotions are shown, not told',
      'Check: Q2 sentence structures vary throughout',
      'Verify: Q3 (perspective/response) maintains consistency with scenario',
      'Check: Q3 uses appropriate tone for new perspective/format',
      'Look for spelling mistakes across all three pieces',
      'Verify: sentence boundaries are correct - no fragments or run-ons'
    ],
    dayBeforeAdvice: 'Practice writing different formats: formal letter, email, article headline. Practice creative writing with focus on sensory detail and varied sentence structures. Read a scenario and practice rewriting from different perspective. Review appropriate registers for different audiences. Don\'t write full practice essays - focus on format accuracy and technique. Get good sleep - writing tasks require creativity and concentration.'
  }
];
