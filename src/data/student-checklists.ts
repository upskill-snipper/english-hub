// @ts-nocheck
export interface StudentChecklist {
  id: string;
  title: string;
  board: string;
  context: string;
  items: {
    item: string;
    category: string;
    priority: 'essential' | 'important' | 'bonus';
  }[];
  tips: string[];
}

export const studentChecklists: StudentChecklist[] = [
  {
    id: 'pre-exam-night',
    title: 'Pre-Exam Night Checklist',
    board: 'All',
    context: 'The night before your English exam to ensure you\'re prepared and rested',
    items: [
      {
        item: 'Lay out exam day clothes (neat and appropriate)',
        category: 'Preparation',
        priority: 'important',
      },
      {
        item: 'Prepare your exam bag with pens, pencils, and erasers',
        category: 'Preparation',
        priority: 'essential',
      },
      {
        item: 'Check exam entry requirements and timing',
        category: 'Preparation',
        priority: 'essential',
      },
      {
        item: 'Avoid heavy caffeine after 3pm',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Do light reading review (nothing new)',
        category: 'Revision',
        priority: 'important',
      },
      {
        item: 'Review key terminology and definitions (15 minutes max)',
        category: 'Revision',
        priority: 'important',
      },
      {
        item: 'Set alarm for exam day (at least 1.5 hours before start)',
        category: 'Preparation',
        priority: 'essential',
      },
      {
        item: 'Eat a balanced dinner (nothing too heavy)',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Avoid social media and stressful content',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Get 7-9 hours of sleep',
        category: 'Wellness',
        priority: 'essential',
      },
      {
        item: 'Write down anxieties then put the paper away',
        category: 'Mental Health',
        priority: 'bonus',
      },
      {
        item: 'Prepare a snack and water bottle for after exam',
        category: 'Preparation',
        priority: 'bonus',
      },
    ],
    tips: [
      'Don\'t cram the night before; your brain needs rest',
      'Reviewing for 15-30 minutes can calm anxiety without overstimulation',
      'A good night\'s sleep is worth more than extra revision',
      'Prepare everything physical the night before to reduce morning stress',
    ],
  },
  {
    id: 'exam-day-morning',
    title: 'Exam Day Morning Checklist',
    board: 'All',
    context: 'Morning routine on your exam day to start mentally prepared',
    items: [
      {
        item: 'Eat a healthy breakfast with protein and carbohydrates',
        category: 'Wellness',
        priority: 'essential',
      },
      {
        item: 'Drink water to stay hydrated',
        category: 'Wellness',
        priority: 'essential',
      },
      {
        item: 'Check weather and plan transport accordingly',
        category: 'Practical',
        priority: 'essential',
      },
      {
        item: 'Do a 5-minute breathing or meditation exercise',
        category: 'Mental Preparation',
        priority: 'important',
      },
      {
        item: 'Review your exam checklist specific to the paper type',
        category: 'Mental Preparation',
        priority: 'important',
      },
      {
        item: 'Wear your prepared outfit',
        category: 'Practical',
        priority: 'important',
      },
      {
        item: 'Arrive 15-20 minutes early to settle in',
        category: 'Practical',
        priority: 'essential',
      },
      {
        item: 'Use the toilet before entering the exam room',
        category: 'Practical',
        priority: 'important',
      },
      {
        item: 'Take deep breaths and remind yourself of exam strategies',
        category: 'Mental Preparation',
        priority: 'important',
      },
      {
        item: 'Avoid last-minute cramming with other students',
        category: 'Mental Preparation',
        priority: 'important',
      },
      {
        item: 'Positive self-talk: "I am prepared, I will do my best"',
        category: 'Mental Preparation',
        priority: 'bonus',
      },
    ],
    tips: [
      'Breakfast boosts concentration; don\'t skip it',
      'Arriving early gives your nervous system time to settle',
      'Avoid comparing your preparation to others',
      'The exam invigilator will explain everything; listen carefully',
    ],
  },
  {
    id: 'aqa-p1-during-exam',
    title: 'AQA Paper 1 During-Exam Checklist',
    board: 'AQA',
    context: 'During AQA Paper 1 (Explorations in Creative Reading and Writing)',
    items: [
      {
        item: 'Read all instructions carefully before beginning',
        category: 'Exam Process',
        priority: 'essential',
      },
      {
        item: 'Identify source material and spend 5-10 minutes reading actively',
        category: 'Reading',
        priority: 'essential',
      },
      {
        item: 'Annotate the source text: highlight key phrases, underline examples',
        category: 'Reading',
        priority: 'important',
      },
      {
        item: 'Identify literary devices: metaphor, simile, personification, etc.',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Make notes on writer\'s intentions and effects on reader',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Plan your 4-mark comprehension response before writing',
        category: 'Planning',
        priority: 'important',
      },
      {
        item: 'Use evidence from text with quotation marks in comprehension',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Allocate 40-45 minutes for Q2 language analysis (24 marks)',
        category: 'Time Management',
        priority: 'essential',
      },
      {
        item: 'Use "QUAD" method for language: Quote, Unapick, Analysis, Do (effect)',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Write at least 6-8 substantial language paragraphs for Q2',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Allocate 40-45 minutes for creative writing task (24 marks)',
        category: 'Time Management',
        priority: 'essential',
      },
      {
        item: 'Plan creative writing: plot, characters, tone, style elements',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Use sentence variety: simple, compound, complex sentences',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Include relevant literary devices in creative writing',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Check spelling, punctuation, and grammar before submitting',
        category: 'Proofreading',
        priority: 'important',
      },
      {
        item: 'Read through work one final time with time remaining',
        category: 'Proofreading',
        priority: 'bonus',
      },
    ],
    tips: [
      'For Q2, each language technique needs 2-3 sentences of explanation',
      'Spend more time planning creative writing for better results',
      'Use synonyms and varied vocabulary throughout your responses',
      'Time-check at 45-minute mark to ensure you\'re on track',
    ],
  },
  {
    id: 'aqa-p2-during-exam',
    title: 'AQA Paper 2 During-Exam Checklist',
    board: 'AQA',
    context: 'During AQA Paper 2 (Writers\' Perspectives and Ideas)',
    items: [
      {
        item: 'Read all source materials at least twice before analyzing',
        category: 'Reading',
        priority: 'essential',
      },
      {
        item: 'Identify the two source texts and their main ideas',
        category: 'Reading',
        priority: 'essential',
      },
      {
        item: 'Annotate: author\'s tone, perspective, intended audience',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note the time period and context of each source',
        category: 'Context',
        priority: 'important',
      },
      {
        item: 'Allocate 20-25 minutes for summary question (8 marks)',
        category: 'Time Management',
        priority: 'important',
      },
      {
        item: 'Write concise bullet points or short sentences for summary',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Use your own words, not copied phrases from the source',
        category: 'Writing',
        priority: 'essential',
      },
      {
        item: 'Allocate 25-30 minutes for language comparison (16 marks)',
        category: 'Time Management',
        priority: 'essential',
      },
      {
        item: 'Identify 4-5 language features to compare across sources',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Write comparative sentences: "Source A uses... whereas Source B..."',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Explain the effect and purpose of each language choice',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Allocate 30-35 minutes for perspective comparison (20 marks)',
        category: 'Time Management',
        priority: 'essential',
      },
      {
        item: 'Identify similarities and differences in viewpoint/tone',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Use evidence with quotations to support all points',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Discuss how each writer\'s perspective is conveyed effectively',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Review for clarity and ensure your argument is cohesive',
        category: 'Proofreading',
        priority: 'important',
      },
    ],
    tips: [
      'Always use "Source A" and "Source B" clearly in your comparisons',
      'Link language choices directly to the writer\'s perspective',
      'Don\'t just list similarities; explain why they matter',
      'Aim for 3-4 well-developed paragraphs for the perspective question',
    ],
  },
  {
    id: 'creative-writing-before-submit',
    title: 'Creative Writing Before-Submit Checklist',
    board: 'All',
    context: 'Final check before submitting your creative writing task',
    items: [
      {
        item: 'Check your opening line hooks the reader',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Verify you have a clear beginning, middle, and end',
        category: 'Structure',
        priority: 'essential',
      },
      {
        item: 'Ensure character(s) are developed with clear motivations',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Check that setting is described vividly and purposefully',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Verify you use a range of sentence types',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Check for varied vocabulary; highlight repetitive words',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Identify at least 3 literary techniques used deliberately',
        category: 'Technique',
        priority: 'important',
      },
      {
        item: 'Ensure tone is consistent and appropriate to the task',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Check that dialogue (if used) sounds natural and advances plot',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Proofread all spelling; pay attention to homophones',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Check all punctuation, especially apostrophes and speech marks',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Verify correct grammar and verb tenses throughout',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Ensure paragraphing is logical and supports flow',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Check word count is within any set limits',
        category: 'Technical',
        priority: 'essential',
      },
      {
        item: 'Read final version aloud to catch awkward phrasing',
        category: 'Proofreading',
        priority: 'bonus',
      },
    ],
    tips: [
      'A strong ending is as important as a strong opening',
      'Show don\'t tell: use sensory details instead of telling the reader how to feel',
      'Reread your work at least twice before final submission',
      'If you find a mistake, correct it; don\'t cross through with large lines',
    ],
  },
  {
    id: 'transactional-writing-checklist',
    title: 'Transactional Writing Checklist',
    board: 'All',
    context: 'For letters, emails, articles, and other non-fiction writing tasks',
    items: [
      {
        item: 'Identify the form (letter, email, article, review, speech, etc.)',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Identify the intended audience and their needs',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Identify the purpose (persuade, inform, complain, request, etc.)',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Plan main points before writing',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Use appropriate formal or informal register for the audience',
        category: 'Register',
        priority: 'essential',
      },
      {
        item: 'Include all required conventions for the form (date, salutation, etc.)',
        category: 'Format',
        priority: 'important',
      },
      {
        item: 'Open with a clear, engaging statement of purpose',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Develop ideas with relevant supporting evidence or examples',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Use rhetorical devices if appropriate (rhetorical questions, lists, etc.)',
        category: 'Technique',
        priority: 'important',
      },
      {
        item: 'Organize information logically with clear paragraphing',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Use cohesive devices to link ideas between sentences',
        category: 'Coherence',
        priority: 'important',
      },
      {
        item: 'Conclude with a clear, memorable closing statement',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Use varied sentence structures and vocabulary',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Maintain consistent tone throughout',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Proofread for spelling, punctuation, and grammar errors',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Check that form conventions are correctly formatted',
        category: 'Format',
        priority: 'essential',
      },
    ],
    tips: [
      'Match your tone to your audience: formal for business, conversational for peers',
      'Include specific details and evidence to make your writing convincing',
      'Transitions between paragraphs should feel natural, not forced',
      'Reread your work at least once before final submission',
    ],
  },
  {
    id: 'poetry-essay-checklist',
    title: 'Poetry Essay Checklist',
    board: 'All',
    context: 'For essays analyzing poetry or comparing poems',
    items: [
      {
        item: 'Read the poem at least three times before writing',
        category: 'Preparation',
        priority: 'essential',
      },
      {
        item: 'Identify the speaker and their perspective',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note the poem\'s form (sonnet, free verse, haiku, etc.)',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Analyze the rhyme scheme and its effect',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note the meter or rhythm (iambic pentameter, irregular, etc.)',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Identify at least 5-6 literary devices (imagery, metaphor, etc.)',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Explain how each device contributes to the poem\'s meaning',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Identify the poem\'s themes and central idea',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Consider the poem\'s historical or cultural context',
        category: 'Context',
        priority: 'important',
      },
      {
        item: 'Note the tone and mood of the poem',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Structure essay with clear introduction, body, conclusion',
        category: 'Writing',
        priority: 'essential',
      },
      {
        item: 'Quote directly from the poem with line numbers',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Explain each quotation\'s significance, don\'t just state it',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Use subject terminology accurately (stanza, verse, couplet, etc.)',
        category: 'Language',
        priority: 'important',
      },
      {
        item: 'Ensure each paragraph has a clear topic sentence',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Proofread carefully for technical accuracy',
        category: 'Proofreading',
        priority: 'essential',
      },
    ],
    tips: [
      'Use the structural elements of poetry as evidence for deeper meaning',
      'Don\'t just list techniques; always explain their effect on the reader',
      'When comparing poems, find both similarities and contrasting perspectives',
      'Poetry is personal; your interpretation is valid if supported by evidence',
    ],
  },
  {
    id: 'literature-essay-checklist',
    title: 'Literature Essay Checklist',
    board: 'All',
    context: 'For essays analyzing prose, novels, or plays',
    items: [
      {
        item: 'Ensure you understand the essay question fully',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Plan your essay with a clear thesis statement',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Identify relevant characters and their motivations',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note key plot points and turning moments',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Analyze the narrative perspective (first-person, third-person, etc.)',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Identify major themes and how they develop',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Note the author\'s use of symbolism and imagery',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Consider the historical and social context of the work',
        category: 'Context',
        priority: 'important',
      },
      {
        item: 'Use direct quotations as evidence (with page numbers if available)',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Explain how each quotation supports your argument',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Analyze writer\'s methods (dialogue, description, action, etc.)',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Address the question throughout, not just in conclusion',
        category: 'Structure',
        priority: 'essential',
      },
      {
        item: 'Use paragraphing to organize ideas logically',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Include topic sentences that link to your thesis',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Use literary terminology accurately throughout',
        category: 'Language',
        priority: 'important',
      },
      {
        item: 'Conclude with a strong summary of your argument',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Proofread for spelling, grammar, and punctuation',
        category: 'Proofreading',
        priority: 'essential',
      },
    ],
    tips: [
      'Your thesis should answer the question directly',
      'Balance plot summary with analytical discussion',
      'Use specific character names and specific events from the text',
      'Consider alternative interpretations; acknowledge complexity',
    ],
  },
  {
    id: 'comparison-essay-checklist',
    title: 'Comparison Essay Checklist',
    board: 'All',
    context: 'For essays comparing two texts, poems, characters, or ideas',
    items: [
      {
        item: 'Identify both texts/subjects clearly at the start',
        category: 'Introduction',
        priority: 'essential',
      },
      {
        item: 'Develop a thesis that directly addresses the comparison',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Identify key similarities between the texts',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Identify key differences between the texts',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Plan paragraphs using a balanced approach (not one-sided)',
        category: 'Planning',
        priority: 'important',
      },
      {
        item: 'Use comparative language: "similarly", "whereas", "in contrast", etc.',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Provide evidence from both texts in each paragraph',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Avoid simply describing one text then the other',
        category: 'Structure',
        priority: 'essential',
      },
      {
        item: 'Integrate comparisons throughout, not just in conclusion',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Analyze why similarities or differences matter',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Consider context differences affecting the comparison',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Use topic sentences that signal the comparison',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Ensure equal treatment of both texts (roughly equal length)',
        category: 'Balance',
        priority: 'important',
      },
      {
        item: 'Use specific quotations from both texts as evidence',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Proofread for clarity and coherence',
        category: 'Proofreading',
        priority: 'important',
      },
      {
        item: 'Verify comparisons are accurate and relevant',
        category: 'Accuracy',
        priority: 'essential',
      },
    ],
    tips: [
      'Use a point-by-point structure rather than block structure for better comparison',
      'Each paragraph should address the same aspect of both texts',
      'Link differences back to the writers\' different purposes or contexts',
      'Comparison questions aren\'t just analysis; they require active comparison',
    ],
  },
  {
    id: 'unseen-poetry-checklist',
    title: 'Unseen Poetry Checklist',
    board: 'All',
    context: 'For analyzing a poem you\'ve never seen before in an exam',
    items: [
      {
        item: 'Read the poem carefully at least twice',
        category: 'Reading',
        priority: 'essential',
      },
      {
        item: 'Read the question and identify what you need to address',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Annotate the poem: mark key words and phrases',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Identify the speaker and audience of the poem',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note the poem\'s form and structure',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Examine the rhyme scheme (or lack thereof)',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Look for literary devices: simile, metaphor, personification, etc.',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Identify key themes and central idea',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note the tone and mood of the poem',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Consider the effect of word choice and imagery',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Plan your answer with a clear structure',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Quote directly from the poem with specific line references',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Explain how each quotation supports your point',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Use subject terminology accurately',
        category: 'Language',
        priority: 'important',
      },
      {
        item: 'Address the question throughout your answer',
        category: 'Structure',
        priority: 'essential',
      },
      {
        item: 'Proofread your response for clarity and accuracy',
        category: 'Proofreading',
        priority: 'important',
      },
    ],
    tips: [
      'Don\'t panic; unseen poetry is manageable if you stay methodical',
      'Look at the title, form, and structure for clues to meaning',
      'Make inferences from language choices, not assumptions',
      'It\'s okay if you don\'t "get" the poem immediately; analysis will reveal meaning',
    ],
  },
  {
    id: 'revision-week-checklist',
    title: 'Revision Week Checklist',
    board: 'All',
    context: 'During intensive revision week before exams',
    items: [
      {
        item: 'Create a revision schedule with realistic daily targets',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'List all major topics and texts to be covered',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Prepare revision materials (flashcards, notes, mind maps)',
        category: 'Preparation',
        priority: 'important',
      },
      {
        item: 'Use active recall: test yourself rather than just rereading',
        category: 'Technique',
        priority: 'essential',
      },
      {
        item: 'Review key literary terms and ensure you can define them',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Practice timed essay writing on past paper questions',
        category: 'Practice',
        priority: 'essential',
      },
      {
        item: 'Analyze sample essays to understand high-level responses',
        category: 'Learning',
        priority: 'important',
      },
      {
        item: 'Note quotations from each key text with line numbers',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Create revision summaries (one-page per text)',
        category: 'Preparation',
        priority: 'important',
      },
      {
        item: 'Take breaks every 45-50 minutes to maintain focus',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Stay hydrated and eat regular, nutritious meals',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Get 7-8 hours of sleep each night',
        category: 'Wellness',
        priority: 'essential',
      },
      {
        item: 'Exercise or take walks to reduce stress',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Identify weak areas and focus revision on these',
        category: 'Strategy',
        priority: 'important',
      },
      {
        item: 'Join study groups if they help your learning',
        category: 'Learning',
        priority: 'bonus',
      },
      {
        item: 'Avoid social media during revision time',
        category: 'Focus',
        priority: 'important',
      },
    ],
    tips: [
      'Revision is most effective when active, not passive',
      'Space out revision over several weeks; don\'t cram the night before',
      'Practice writing essays under timed conditions',
      'Quality over quantity; focused revision beats marathon sessions',
    ],
  },
  {
    id: 'mock-exam-preparation',
    title: 'Mock Exam Preparation Checklist',
    board: 'All',
    context: 'Preparing for mock exams to simulate real exam conditions',
    items: [
      {
        item: 'Review the exam structure and paper format',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Check exact duration and mark allocations per question',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Complete several full past papers under timed conditions',
        category: 'Practice',
        priority: 'essential',
      },
      {
        item: 'Practice time management: allocate minutes per mark',
        category: 'Strategy',
        priority: 'essential',
      },
      {
        item: 'Use only the texts and materials allowed in real exam',
        category: 'Authenticity',
        priority: 'important',
      },
      {
        item: 'Take mocks without notes or revision materials',
        category: 'Authenticity',
        priority: 'essential',
      },
      {
        item: 'Check your answers against mark schemes after completion',
        category: 'Feedback',
        priority: 'important',
      },
      {
        item: 'Identify patterns in questions and frequently tested topics',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Review examiner comments on sample answers',
        category: 'Learning',
        priority: 'important',
      },
      {
        item: 'Practice weaker question types more intensively',
        category: 'Strategy',
        priority: 'important',
      },
      {
        item: 'Refine time allocation based on mock performance',
        category: 'Strategy',
        priority: 'important',
      },
      {
        item: 'Practice reading sources multiple times quickly',
        category: 'Technique',
        priority: 'important',
      },
      {
        item: 'Develop efficient annotation techniques for sources',
        category: 'Technique',
        priority: 'important',
      },
      {
        item: 'Work on legible, clear handwriting if writing by hand',
        category: 'Technique',
        priority: 'bonus',
      },
      {
        item: 'Simulate exam environment (quiet room, timer, no interruptions)',
        category: 'Authenticity',
        priority: 'important',
      },
      {
        item: 'Get feedback from teacher on your mock responses',
        category: 'Feedback',
        priority: 'important',
      },
    ],
    tips: [
      'Mock exams reveal your actual speed and weak areas',
      'Time yourself strictly; this is essential practice',
      'Analyze why you lost marks on specific questions',
      'Use mocks to build confidence and reduce exam anxiety',
    ],
  },
  {
    id: 'coursework-submission-checklist',
    title: 'Coursework Submission Checklist',
    board: 'All',
    context: 'Before submitting any coursework assignment',
    items: [
      {
        item: 'Confirm the essay question and requirements',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Check word count limits and format requirements',
        category: 'Technical',
        priority: 'essential',
      },
      {
        item: 'Verify submission deadline and method',
        category: 'Technical',
        priority: 'essential',
      },
      {
        item: 'Ensure your thesis directly addresses the question',
        category: 'Content',
        priority: 'essential',
      },
      {
        item: 'Verify all required texts/sources are included',
        category: 'Content',
        priority: 'essential',
      },
      {
        item: 'Check that all quotations have proper citations',
        category: 'Academic Integrity',
        priority: 'essential',
      },
      {
        item: 'Verify correct use of quotation marks or block quotes',
        category: 'Academic Integrity',
        priority: 'important',
      },
      {
        item: 'Include a bibliography if required',
        category: 'Academic Integrity',
        priority: 'important',
      },
      {
        item: 'Use correct in-text citation format (MLA, Harvard, etc.)',
        category: 'Academic Integrity',
        priority: 'important',
      },
      {
        item: 'Ensure introduction has a clear thesis statement',
        category: 'Structure',
        priority: 'essential',
      },
      {
        item: 'Check body paragraphs have topic sentences and evidence',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Verify conclusion summarizes argument without repetition',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Proofread thoroughly for spelling and grammar errors',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Check punctuation, particularly apostrophes and hyphens',
        category: 'Proofreading',
        priority: 'important',
      },
      {
        item: 'Verify consistent formatting throughout (font, size, spacing)',
        category: 'Presentation',
        priority: 'important',
      },
      {
        item: 'Include page numbers and header/footer if required',
        category: 'Presentation',
        priority: 'important',
      },
      {
        item: 'Save document with your name and correct filename',
        category: 'Technical',
        priority: 'important',
      },
      {
        item: 'Submit at least 1 hour before the deadline',
        category: 'Technical',
        priority: 'important',
      },
      {
        item: 'Confirm submission receipt (check email or system)',
        category: 'Technical',
        priority: 'important',
      },
    ],
    tips: [
      'Academic integrity is critical; all borrowed ideas must be cited',
      'Reread your work at least three times before submission',
      'A strong introduction and conclusion frame your entire essay',
      'Late submissions often incur penalties; submit early',
    ],
  },
  {
    id: 'edexcel-reading-response',
    title: 'Edexcel Reading Response Checklist',
    board: 'Edexcel',
    context: 'For Edexcel GCSE English Literature reading response tasks',
    items: [
      {
        item: 'Read the text extract carefully at least twice',
        category: 'Reading',
        priority: 'essential',
      },
      {
        item: 'Identify the question type (response to extract, character analysis, etc.)',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Annotate key lines and literary features in the extract',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Note the context of this extract within the text',
        category: 'Understanding',
        priority: 'important',
      },
      {
        item: 'Identify the writer\'s methods: language, structure, form',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Quote directly from the extract with clear references',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Explain the effect of each method on the reader',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Address character, action, or thematic elements as required',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Link extract analysis to broader themes of the text',
        category: 'Connection',
        priority: 'important',
      },
      {
        item: 'Structure answer clearly with introduction, body, conclusion',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Use subject terminology accurately throughout',
        category: 'Language',
        priority: 'important',
      },
      {
        item: 'Maintain focus on the extract (don\'t summarize the whole text)',
        category: 'Focus',
        priority: 'essential',
      },
      {
        item: 'Proofread for clarity and technical accuracy',
        category: 'Proofreading',
        priority: 'important',
      },
    ],
    tips: [
      'Edexcel often focuses on writer\'s methods; analyze HOW things are written',
      'Link specific language choices to their intended effect on readers',
      'Quote phrases, not entire sentences, to show focused analysis',
      'Always reference the extract, even when discussing broader context',
    ],
  },
  {
    id: 'ocr-written-expression',
    title: 'OCR Written Expression Checklist',
    board: 'OCR',
    context: 'For OCR GCSE English Language creative and transactional writing tasks',
    items: [
      {
        item: 'Understand the text type (narrative, persuasive, informative, etc.)',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Identify the purpose and intended audience',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Plan your response with a clear structure',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Use appropriate register for the audience and purpose',
        category: 'Tone',
        priority: 'essential',
      },
      {
        item: 'Develop ideas with relevant detail and examples',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Use varied sentence structures for effect',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Include rhetorical or literary devices where appropriate',
        category: 'Technique',
        priority: 'important',
      },
      {
        item: 'Organize paragraphs logically with clear progression',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Use cohesive devices to link ideas smoothly',
        category: 'Coherence',
        priority: 'important',
      },
      {
        item: 'Maintain consistent tone throughout',
        category: 'Tone',
        priority: 'important',
      },
      {
        item: 'Create a memorable opening that engages the reader',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Conclude effectively with appropriate closure',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Use varied and precise vocabulary throughout',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Proofread for spelling, punctuation, and grammar',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Verify response meets any specific requirements',
        category: 'Technical',
        priority: 'essential',
      },
    ],
    tips: [
      'OCR values accurate, varied technical writing',
      'Use sentence structures deliberately to create specific effects',
      'Engage the reader through vivid detail and clear purpose',
      'Proofread at least twice; technical accuracy is important to OCR',
    ],
  },
  {
    id: 'wjec-language-analysis',
    title: 'WJEC Language Analysis Checklist',
    board: 'WJEC',
    context: 'For WJEC GCSE English Language text analysis and comparison tasks',
    items: [
      {
        item: 'Read each source text carefully and actively',
        category: 'Reading',
        priority: 'essential',
      },
      {
        item: 'Identify the source type and context (when/where it\'s from)',
        category: 'Understanding',
        priority: 'important',
      },
      {
        item: 'Annotate for language features: vocabulary, imagery, etc.',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Note how sources are written to achieve their purpose',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Identify writer\'s intended audience and effect on them',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Identify similarities in language use between texts',
        category: 'Comparison',
        priority: 'important',
      },
      {
        item: 'Identify differences in language use between texts',
        category: 'Comparison',
        priority: 'important',
      },
      {
        item: 'Quote from both texts with clear reference',
        category: 'Evidence',
        priority: 'essential',
      },
      {
        item: 'Explain how language features contribute to meaning',
        category: 'Analysis',
        priority: 'essential',
      },
      {
        item: 'Consider tone, mood, and voice of each text',
        category: 'Analysis',
        priority: 'important',
      },
      {
        item: 'Use comparative language: "whereas", "similarly", etc.',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Structure analysis around language themes (not text by text)',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Proofread for clarity and technical accuracy',
        category: 'Proofreading',
        priority: 'important',
      },
    ],
    tips: [
      'WJEC emphasizes careful language analysis over simple identification',
      'Always explain WHY a writer chose particular language',
      'Link language choices directly to purpose and effect',
      'Structure comparisons thematically, not by source',
    ],
  },
  {
    id: 'igcse-continuous-writing',
    title: 'IGCSE Continuous Writing Checklist',
    board: 'IGCSE',
    context: 'For IGCSE English Language extended composition or creative writing',
    items: [
      {
        item: 'Understand the task type (story, essay, article, etc.)',
        category: 'Understanding',
        priority: 'essential',
      },
      {
        item: 'Identify any stimulus or prompt material provided',
        category: 'Understanding',
        priority: 'important',
      },
      {
        item: 'Plan content with clear structure before writing',
        category: 'Planning',
        priority: 'essential',
      },
      {
        item: 'Develop interesting and relevant ideas throughout',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Use a wide range of sentence structures',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Use sophisticated and varied vocabulary',
        category: 'Writing',
        priority: 'important',
      },
      {
        item: 'Maintain appropriate register for purpose and audience',
        category: 'Tone',
        priority: 'important',
      },
      {
        item: 'Organize ideas logically with clear paragraphing',
        category: 'Structure',
        priority: 'important',
      },
      {
        item: 'Use cohesive devices to link sentences and paragraphs',
        category: 'Coherence',
        priority: 'important',
      },
      {
        item: 'Show evidence of creative or critical thinking',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Engage reader with vivid description or compelling narrative',
        category: 'Content',
        priority: 'important',
      },
      {
        item: 'Proofread carefully for spelling and punctuation',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Verify grammar is accurate throughout',
        category: 'Proofreading',
        priority: 'essential',
      },
      {
        item: 'Check that response meets word count requirements',
        category: 'Technical',
        priority: 'essential',
      },
    ],
    tips: [
      'IGCSE values sophisticated language and mature expression',
      'Show your ability to vary sentence structures for effect',
      'Develop ideas fully; quality beats quantity',
      'Proofread at least twice; accuracy is essential',
    ],
  },
  {
    id: 'final-examination-review',
    title: 'Final Examination Review Checklist',
    board: 'All',
    context: 'Day before your final exam for last-minute preparation and confidence building',
    items: [
      {
        item: 'Review your examination timetable one final time',
        category: 'Preparation',
        priority: 'essential',
      },
      {
        item: 'Confirm location, time, and any special arrangements',
        category: 'Practical',
        priority: 'essential',
      },
      {
        item: 'Review key quotations from major texts (30 minutes max)',
        category: 'Revision',
        priority: 'important',
      },
      {
        item: 'Mentally rehearse your essay structure for different questions',
        category: 'Mental Preparation',
        priority: 'important',
      },
      {
        item: 'Visualize yourself calmly working through an exam paper',
        category: 'Mental Preparation',
        priority: 'bonus',
      },
      {
        item: 'Review your time allocation strategy one more time',
        category: 'Strategy',
        priority: 'important',
      },
      {
        item: 'Prepare your exam kit: pens, pencils, erasers, calculator',
        category: 'Practical',
        priority: 'essential',
      },
      {
        item: 'Check what materials are allowed and pack them',
        category: 'Practical',
        priority: 'essential',
      },
      {
        item: 'Plan your breakfast for exam day',
        category: 'Wellness',
        priority: 'important',
      },
      {
        item: 'Review any allowable texts (if open book exam)',
        category: 'Preparation',
        priority: 'bonus',
      },
      {
        item: 'Avoid new revision topics; focus on consolidation only',
        category: 'Strategy',
        priority: 'essential',
      },
      {
        item: 'Prioritize sleep over last-minute cramming',
        category: 'Wellness',
        priority: 'essential',
      },
      {
        item: 'Avoid comparing your preparation with other students',
        category: 'Mental Health',
        priority: 'important',
      },
      {
        item: 'Remind yourself of your exam achievements so far',
        category: 'Confidence',
        priority: 'bonus',
      },
    ],
    tips: [
      'Your preparation is done; now focus on rest and confidence',
      'Avoid panicking about topics you\'ve forgotten; you\'ve learned more than you realize',
      'Trust your preparation; you\'ve worked hard',
      'Remember: exams are designed to show what you know, not what you don\'t',
    ],
  },
];
