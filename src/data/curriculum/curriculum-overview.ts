// ═══════════════════════════════════════════════════════════════════════════════
// Master Curriculum Overview - Year 7 to Year 13
// ═══════════════════════════════════════════════════════════════════════════════
// Maps the entire English programme across seven year groups.
// KS3 (Y7-Y9):  National Curriculum strand mappings
// KS4 (Y10-Y11): Edexcel IGCSE Language A & IGCSE Literature
// KS5 (Y12-Y13): Edexcel IAL English Language (YEN0) & Literature (YET0)
// ═══════════════════════════════════════════════════════════════════════════════

export interface CurriculumYear {
  year: number
  title: string
  bigQuestion: string
  focus: string
  terms: CurriculumTerm[]
  endOfYearExpectations: {
    reading: string[]
    writing: string[]
    spokenLanguage: string[]
    grammarControl: string[]
  }
}

export interface CurriculumTerm {
  id: string
  termLabel: string
  unitTitle: string
  coreTexts: string[]
  writingFocus: string
  spagFocus: string
  keySkills: string[]
  keyVocabulary: string[]
  assessmentType: string
  assessmentWeighting: string
  linkedCourseIds: string[]
  linkedLessonPlanIds: string[]
  linkedWorkbookIds: string[]
  ncStrands: string[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 7 - Foundations
// ═══════════════════════════════════════════════════════════════════════════════

const year7: CurriculumYear = {
  year: 7,
  title: 'Foundations of English',
  bigQuestion: 'How do writers shape the way we see the world?',
  focus:
    'Building confident, accurate readers and writers who can identify techniques, select evidence, and write in complete, controlled paragraphs.',
  terms: [
    {
      id: 'y7-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'Introduction to Narrative: Stories That Shape Us',
      coreTexts: [
        'Private Peaceful - Michael Morpurgo',
        'Short story anthology (curated extracts)',
      ],
      writingFocus: 'Descriptive and narrative writing - setting and character',
      spagFocus:
        'Sentence types (simple, compound, complex); full stops and capital letters; paragraph structure',
      keySkills: [
        'Identify explicit and implicit information',
        'Select and embed short quotations',
        'Use PEE (Point, Evidence, Explain) paragraphs',
        'Write in clear, accurate sentences',
        'Plan a piece of narrative writing',
      ],
      keyVocabulary: [
        'narrative',
        'protagonist',
        'antagonist',
        'setting',
        'atmosphere',
        'simile',
        'metaphor',
        'personification',
        'inference',
        'explicit',
        'implicit',
        'connotation',
        'paragraph',
        'topic sentence',
      ],
      assessmentType: 'Reading comprehension (extract-based) + descriptive writing',
      assessmentWeighting: '50% reading / 50% writing',
      linkedCourseIds: ['ks3-reading'],
      linkedLessonPlanIds: ['ks3-reading-comprehension', 'ks3-creative-writing'],
      linkedWorkbookIds: ['wb-y7-narrative'],
      ncStrands: [
        'NC-Reading: Understanding texts through inference and deduction',
        'NC-Reading: Identifying how language and structure create effects',
        'NC-Writing: Writing narratives with varied sentence structures',
        'NC-Grammar: Using standard English confidently',
        'NC-Grammar: Sentence construction and punctuation',
      ],
    },
    {
      id: 'y7-t2',
      termLabel: 'Spring Term',
      unitTitle: 'Poetry and Performance: Voices and Viewpoints',
      coreTexts: [
        'Poetry anthology: selected poems (Tennyson, Agard, Dharker, Duffy)',
        'Performance poetry selections',
      ],
      writingFocus: 'Analytical writing - responding to poetry using PEE/PETAL',
      spagFocus:
        'Apostrophes (contraction and possession); commas in lists and after fronted adverbials; subject-verb agreement',
      keySkills: [
        'Identify and explain poetic techniques',
        'Compare ideas across two poems',
        'Read aloud with expression and clarity',
        'Structure an analytical paragraph',
        'Use subject terminology accurately',
      ],
      keyVocabulary: [
        'stanza',
        'enjambment',
        'caesura',
        'rhyme scheme',
        'rhythm',
        'imagery',
        'tone',
        'mood',
        'voice',
        'speaker',
        'alliteration',
        'sibilance',
        'onomatopoeia',
        'juxtaposition',
      ],
      assessmentType: 'Poetry analysis essay + spoken language presentation',
      assessmentWeighting: '60% written analysis / 40% spoken language',
      linkedCourseIds: ['ks3-reading'],
      linkedLessonPlanIds: ['ks3-poetry', 'ks3-spoken-language'],
      linkedWorkbookIds: ['wb-y7-poetry'],
      ncStrands: [
        'NC-Reading: Reading and appreciating poetry',
        'NC-Reading: Making critical comparisons across texts',
        'NC-Writing: Writing for a range of purposes - analysis',
        'NC-Spoken Language: Presenting and performing',
        'NC-Grammar: Vocabulary development and subject terminology',
      ],
    },
    {
      id: 'y7-t3',
      termLabel: 'Summer Term',
      unitTitle: "Shakespeare Introduction: A Midsummer Night's Dream",
      coreTexts: ["A Midsummer Night's Dream - William Shakespeare"],
      writingFocus: 'Persuasive and discursive writing - letters and articles',
      spagFocus:
        "Semicolons and colons; speech punctuation; homophones (their/there/they're, its/it's)",
      keySkills: [
        'Understand Shakespearean language and context',
        'Analyse character and theme in a play',
        'Write persuasive texts with rhetorical devices',
        'Use discourse markers to structure argument',
        'Perform and interpret dramatic scenes',
      ],
      keyVocabulary: [
        'comedy',
        'tragedy',
        'dramatic irony',
        'soliloquy',
        'aside',
        'iambic pentameter',
        'blank verse',
        'prose',
        'rhetoric',
        'audience',
        'stage directions',
        'Elizabethan',
        'patriarchy',
      ],
      assessmentType: 'Character analysis essay + persuasive article',
      assessmentWeighting: '50% reading / 50% writing',
      linkedCourseIds: ['ks3-reading'],
      linkedLessonPlanIds: ['ks3-shakespeare-context', 'ks3-non-fiction-writing'],
      linkedWorkbookIds: ['wb-y7-shakespeare'],
      ncStrands: [
        'NC-Reading: Studying Shakespeare - understanding plot, character, and themes',
        'NC-Reading: Understanding how texts reflect their historical context',
        'NC-Writing: Writing persuasively with rhetorical devices',
        'NC-Spoken Language: Participating in drama and performance',
        'NC-Grammar: Colons, semicolons, and speech punctuation',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Read fluently and with good comprehension across fiction, non-fiction, and poetry',
      'Identify explicit and implicit information from a text',
      'Select short, relevant quotations and embed them in sentences',
      'Explain how a writer uses language to create an effect (PEE paragraphs)',
      'Show awareness of how context shapes meaning',
    ],
    writing: [
      'Write in clear, accurate paragraphs with topic sentences',
      'Produce descriptive and narrative writing with varied vocabulary',
      'Write a structured persuasive text with rhetorical devices',
      'Plan and organise extended writing before beginning',
    ],
    spokenLanguage: [
      'Read aloud with confidence, expression, and appropriate pace',
      'Present ideas clearly to a small group or the whole class',
      'Participate constructively in group discussion',
    ],
    grammarControl: [
      'Use full stops, capital letters, and question marks accurately',
      'Construct simple, compound, and complex sentences',
      'Use apostrophes correctly for contraction and possession',
      'Spell common homophones accurately',
      'Use commas after fronted adverbials and in lists',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 8 - Developing Critical Readers
// ═══════════════════════════════════════════════════════════════════════════════

const year8: CurriculumYear = {
  year: 8,
  title: 'Developing Critical Readers',
  bigQuestion: 'How do writers use language and structure to influence us?',
  focus:
    'Deepening analytical skills through sustained engagement with challenging texts; writing with greater accuracy, ambition, and awareness of audience.',
  terms: [
    {
      id: 'y8-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'The Gothic Tradition',
      coreTexts: [
        'Frankenstein (abridged / extracts) - Mary Shelley',
        'Gothic short stories: Poe, Stoker, Jackson',
      ],
      writingFocus: 'Creative writing - atmosphere, tension, and the senses',
      spagFocus:
        'Varying sentence openings; deliberate sentence fragments for effect; parenthetical dashes and commas',
      keySkills: [
        'Analyse how writers create atmosphere and tension',
        'Explore how structure shapes reader response',
        'Write with deliberate control of mood',
        'Use extended analysis (PETAL: Point, Evidence, Technique, Analysis, Link)',
        'Compare how different writers use the same genre conventions',
      ],
      keyVocabulary: [
        'Gothic',
        'sublime',
        'uncanny',
        'foreboding',
        'pathetic fallacy',
        'foreshadowing',
        'motif',
        'symbolism',
        'tension',
        'suspense',
        'denouement',
        'unreliable narrator',
        'epistolary',
        'Romantic',
      ],
      assessmentType: 'Analytical essay on atmosphere + Gothic creative writing piece',
      assessmentWeighting: '50% reading / 50% writing',
      linkedCourseIds: ['ks3-reading'],
      linkedLessonPlanIds: ['ks3-reading-comprehension', 'ks3-creative-writing'],
      linkedWorkbookIds: ['wb-y8-gothic'],
      ncStrands: [
        'NC-Reading: Reading a wide range of fiction from the English literary heritage',
        'NC-Reading: Analysing language, structure, and form',
        'NC-Writing: Writing imaginatively with controlled craftsmanship',
        'NC-Grammar: Using punctuation for deliberate effect',
      ],
    },
    {
      id: 'y8-t2',
      termLabel: 'Spring Term',
      unitTitle: 'Conflict and Power in Poetry',
      coreTexts: [
        'War poetry anthology: Owen, Sassoon, Brooke, Agard, Dharker',
        'Linked non-fiction: war letters, speeches, journalism',
      ],
      writingFocus: 'Comparative analytical writing - comparing two poems',
      spagFocus:
        'Embedding quotations fluently within sentences; varying paragraph length; connectives for comparison (similarly, conversely, whereas)',
      keySkills: [
        'Compare poems thematically and methodologically',
        'Analyse how context influences meaning',
        'Write a structured comparative essay',
        'Synthesise information from non-fiction sources',
        'Use tentative and evaluative language',
      ],
      keyVocabulary: [
        'propaganda',
        'patriotism',
        'disillusionment',
        'volta',
        'refrain',
        'elegy',
        'semantic field',
        'anaphora',
        'plosive',
        'fricative',
        'contrast',
        'antithesis',
        'emotive language',
        'register',
      ],
      assessmentType: 'Comparative poetry essay + non-fiction synthesis task',
      assessmentWeighting: '60% analytical reading / 40% non-fiction writing',
      linkedCourseIds: ['ks3-reading'],
      linkedLessonPlanIds: ['ks3-poetry', 'ks3-non-fiction-writing'],
      linkedWorkbookIds: ['wb-y8-conflict-poetry'],
      ncStrands: [
        'NC-Reading: Making critical comparisons across texts',
        'NC-Reading: Understanding how texts relate to their contexts',
        'NC-Writing: Writing analytically with comparative structures',
        'NC-Grammar: Using discourse markers and connectives',
        'NC-Spoken Language: Debating ideas about conflict and power',
      ],
    },
    {
      id: 'y8-t3',
      termLabel: 'Summer Term',
      unitTitle: 'Novel Study: Animal Farm',
      coreTexts: [
        'Animal Farm - George Orwell',
        'Linked non-fiction: propaganda, revolution, power',
      ],
      writingFocus: 'Discursive and argumentative writing - speech and editorial',
      spagFocus: 'Relative clauses; active and passive voice; formal vs informal register',
      keySkills: [
        'Analyse allegory and symbolism in a novel',
        'Explore how writers use narrative voice and structure',
        'Write a speech using rhetorical techniques',
        'Evaluate ideas critically - forming and defending opinions',
        'Link textual analysis to historical and political context',
      ],
      keyVocabulary: [
        'allegory',
        'satire',
        'totalitarianism',
        'propaganda',
        'corruption',
        'revolution',
        'commandment',
        'hypocrisy',
        'dystopia',
        'utopia',
        'narrative voice',
        'third person',
        'omniscient',
        'didactic',
      ],
      assessmentType: 'Thematic essay on power + argumentative speech writing',
      assessmentWeighting: '50% reading / 50% writing',
      linkedCourseIds: ['ks3-reading', 'animal-farm'],
      linkedLessonPlanIds: ['ks3-animal-farm', 'ks3-non-fiction-writing'],
      linkedWorkbookIds: ['wb-y8-animal-farm'],
      ncStrands: [
        'NC-Reading: Reading novels from the English literary heritage',
        'NC-Reading: Analysing how writers present themes and ideas',
        'NC-Writing: Writing argumentatively with a clear thesis',
        'NC-Spoken Language: Delivering a formal speech',
        'NC-Grammar: Active and passive voice; formal register',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Analyse how writers use language and structure to shape meaning (PETAL)',
      'Compare two texts - identifying similarities and differences in method and purpose',
      'Understand how historical and social context influences a text',
      'Read and interpret 19th-century prose with confidence',
      'Identify and explain allegory, symbolism, and narrative voice',
    ],
    writing: [
      'Write creative pieces with deliberate control of atmosphere and tension',
      'Produce comparative analytical essays with clear topic sentences',
      'Write argumentative speeches with rhetorical devices and controlled tone',
      'Vary sentence structures and paragraph lengths for effect',
    ],
    spokenLanguage: [
      'Deliver a formal speech with rhetorical techniques',
      'Debate a proposition with evidence and counter-argument',
      'Listen actively and respond constructively to opposing views',
    ],
    grammarControl: [
      'Embed quotations fluently within analytical sentences',
      'Use semicolons, colons, and dashes accurately',
      'Control the active and passive voice',
      'Vary sentence openings for stylistic effect',
      'Spell subject-specific terminology accurately',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 9 - Transition Year (KS3 to KS4 bridge)
// ═══════════════════════════════════════════════════════════════════════════════

const year9: CurriculumYear = {
  year: 9,
  title: 'Mastering Analysis - Bridging to GCSE',
  bigQuestion: 'How do we read, write, and speak with authority and precision?',
  focus:
    'Consolidating KS3 skills and introducing GCSE-style assessment; building the stamina, vocabulary, and analytical sophistication needed for exam success.',
  terms: [
    {
      id: 'y9-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'Shakespeare: Macbeth - Ambition and Morality',
      coreTexts: ['Macbeth - William Shakespeare'],
      writingFocus: 'GCSE-style extract-based analytical essay',
      spagFocus:
        'Sustaining formal register; academic connectives (moreover, consequently, nevertheless); precise vocabulary choices',
      keySkills: [
        'Write a sustained analytical essay on a Shakespeare play',
        'Analyse language, structure, and form in drama',
        'Integrate context seamlessly into analysis',
        'Develop a conceptualised personal response',
        'Use subject terminology with precision and confidence',
      ],
      keyVocabulary: [
        'hamartia',
        'hubris',
        'ambition',
        'tyranny',
        'regicide',
        'Jacobean',
        'divine right',
        'supernatural',
        'equivocation',
        'tragic hero',
        'catharsis',
        'prophecy',
        'guilt',
        'masculinity',
      ],
      assessmentType: 'GCSE-style extract-based essay (Macbeth)',
      assessmentWeighting: '100% analytical reading',
      linkedCourseIds: ['ks3-reading'],
      linkedLessonPlanIds: ['ks3-macbeth', 'ks3-shakespeare-context'],
      linkedWorkbookIds: ['wb-y9-macbeth'],
      ncStrands: [
        'NC-Reading: Studying two Shakespeare plays - understanding plot, character, themes, and context',
        'NC-Reading: Analysing the conventions of drama',
        'NC-Writing: Writing essays with sustained critical analysis',
        'NC-Grammar: Formal academic register and precise vocabulary',
        'NC-Spoken Language: Performing and interpreting dramatic extracts',
      ],
    },
    {
      id: 'y9-t2',
      termLabel: 'Spring Term',
      unitTitle: '19th-Century Prose: A Christmas Carol',
      coreTexts: [
        'A Christmas Carol - Charles Dickens',
        '19th-century non-fiction extracts (journalism, letters, speeches)',
      ],
      writingFocus: 'Non-fiction transactional writing - article, letter, review',
      spagFocus:
        'Paragraph cohesion (discourse markers, topic sentences, linking phrases); sophisticated punctuation (ellipsis, parenthetical commas)',
      keySkills: [
        'Analyse how a 19th-century writer presents character and theme',
        'Explore the relationship between text and Victorian context',
        'Write transactional texts for different audiences and purposes',
        'Plan and structure extended writing under timed conditions',
        'Self-assess using GCSE mark-scheme criteria',
      ],
      keyVocabulary: [
        'Victorian',
        'Malthusian',
        'social reform',
        'redemption',
        'avarice',
        'philanthropy',
        'morality tale',
        'novella',
        'stave',
        'proleptic',
        'transformation',
        'allegory',
        'didactic',
        'workhouse',
      ],
      assessmentType: 'Thematic essay (A Christmas Carol) + transactional writing',
      assessmentWeighting: '50% reading / 50% writing',
      linkedCourseIds: ['ks3-reading', 'christmas-carol'],
      linkedLessonPlanIds: ['ks3-christmas-carol', 'ks3-non-fiction-writing'],
      linkedWorkbookIds: ['wb-y9-christmas-carol'],
      ncStrands: [
        'NC-Reading: Reading 19th-century fiction and non-fiction',
        'NC-Reading: Understanding how texts relate to Victorian social context',
        'NC-Writing: Writing for a range of audiences and purposes',
        'NC-Grammar: Paragraph cohesion and sophisticated punctuation',
      ],
    },
    {
      id: 'y9-t3',
      termLabel: 'Summer Term',
      unitTitle: 'Modern Drama: An Inspector Calls',
      coreTexts: ['An Inspector Calls - J.B. Priestley'],
      writingFocus: 'Evaluative and critical writing - agreeing or challenging a statement',
      spagFocus:
        'Proofreading and editing own work; eliminating common errors under pressure; crafting an authoritative academic voice',
      keySkills: [
        'Analyse a modern drama text at GCSE standard',
        'Evaluate a critical statement about a text',
        'Sustain an analytical argument across a full essay',
        'Revise and refine own writing for accuracy and style',
        'Prepare for the transition to IGCSE study',
      ],
      keyVocabulary: [
        'capitalism',
        'socialism',
        'responsibility',
        'class',
        'hierarchy',
        'dramatic irony',
        'stage directions',
        'fourth wall',
        'morality play',
        'Edwardian',
        'welfare state',
        'collective responsibility',
        'inspector',
      ],
      assessmentType: 'GCSE-style evaluative essay (An Inspector Calls) + end-of-KS3 assessment',
      assessmentWeighting: '70% reading / 30% writing accuracy',
      linkedCourseIds: ['ks3-reading', 'inspector-calls'],
      linkedLessonPlanIds: ['ks3-inspector-calls'],
      linkedWorkbookIds: ['wb-y9-inspector-calls'],
      ncStrands: [
        'NC-Reading: Studying post-1914 drama with critical insight',
        'NC-Reading: Evaluating texts critically and supporting with evidence',
        'NC-Writing: Sustaining a critical argument with a clear thesis',
        'NC-Spoken Language: Formal debate and discussion',
        'NC-Grammar: Proofreading and editing for accuracy',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Write a sustained GCSE-style analytical essay on a literary text',
      'Analyse language, form, and structure using precise subject terminology',
      'Integrate contextual understanding seamlessly into analysis',
      'Evaluate a critical proposition with a personal and supported response',
      'Read and respond to unseen 19th-century non-fiction confidently',
    ],
    writing: [
      'Write transactional non-fiction for varied audiences and purposes',
      'Produce evaluative writing that engages with a critical statement',
      'Plan, write, and proofread extended responses under timed conditions',
      'Demonstrate an authoritative academic voice with controlled formality',
    ],
    spokenLanguage: [
      'Deliver a formal individual presentation lasting 3-5 minutes',
      'Engage in formal debate with clear structure and evidence',
      'Respond to questions spontaneously with confidence and clarity',
    ],
    grammarControl: [
      'Write with consistent accuracy in spelling, punctuation, and grammar',
      'Use a range of sentence structures with deliberate stylistic intent',
      'Deploy sophisticated punctuation accurately (semicolons, colons, dashes, ellipsis)',
      'Maintain formal register throughout an extended essay',
      'Self-edit effectively under timed conditions',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 10 - IGCSE Year 1
// Edexcel IGCSE English Language A & IGCSE Literature
// ═══════════════════════════════════════════════════════════════════════════════

const year10: CurriculumYear = {
  year: 10,
  title: 'IGCSE English - Year 1',
  bigQuestion: 'How do we read critically and write with precision for an international exam?',
  focus:
    'Beginning the two-year Edexcel IGCSE English Language A and IGCSE Literature courses. Developing exam-ready reading analysis and controlled transactional and creative writing.',
  terms: [
    {
      id: 'y10-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'IGCSE Language: Non-Fiction Reading & Transactional Writing',
      coreTexts: [
        'Unseen non-fiction extracts (articles, speeches, letters, travel writing)',
        '19th- and 20th-century non-fiction anthology',
      ],
      writingFocus:
        'Transactional writing - articles, letters, speeches, reviews (4EA1 Paper 1 Section B)',
      spagFocus:
        'Discourse markers for non-fiction; rhetorical devices; register and tone control; paragraphing for argument',
      keySkills: [
        'Retrieve and synthesise information from non-fiction texts (4EA1 AO1)',
        'Analyse how writers use language for effect (4EA1 AO2)',
        'Evaluate how successfully a writer achieves a purpose (4EA1 AO4)',
        'Write transactional texts matched to audience and purpose (4EA1 AO3)',
        'Apply IGCSE mark-scheme criteria to self- and peer-assessment',
      ],
      keyVocabulary: [
        'transactional',
        'discursive',
        'rhetorical question',
        'anecdote',
        'direct address',
        'counter-argument',
        'concession',
        'register',
        'tone',
        'bias',
        'objectivity',
        'subjectivity',
        'synthesis',
      ],
      assessmentType: 'IGCSE Paper 1 style mock (Reading + Transactional Writing)',
      assessmentWeighting: 'Paper 1: 60% of Language - Reading 30 marks / Writing 30 marks',
      linkedCourseIds: ['edexcel-igcse-lang-a'],
      linkedLessonPlanIds: ['igcse-language-p1', 'igcse-non-fiction-reading'],
      linkedWorkbookIds: ['wb-y10-igcse-lang-p1'],
      ncStrands: [
        'Edexcel 4EA1 Paper 1: Non-Fiction Texts and Transactional Writing',
        'AO1: Read and understand a range of texts',
        'AO2: Understand and analyse how writers use linguistic and structural devices',
        'AO3: Write clearly, effectively and imaginatively for different purposes and audiences',
        'AO4: Use a range of sentence structures and vocabulary with accurate spelling and punctuation',
      ],
    },
    {
      id: 'y10-t2',
      termLabel: 'Spring Term',
      unitTitle: 'IGCSE Literature: Drama & Prose Set Texts',
      coreTexts: [
        'An Inspector Calls - J.B. Priestley (Drama)',
        'Of Mice and Men - John Steinbeck (Prose)',
      ],
      writingFocus: "Literary essay writing - character, theme, and writer's methods",
      spagFocus:
        'Embedding context within analytical sentences; controlling complex sentence structures; using literary terminology precisely',
      keySkills: [
        'Respond to an extract-based question on a drama text (IGCSE Literature AO1)',
        'Analyse how writers create character and theme (IGCSE Literature AO2)',
        'Explore how context shapes meaning (IGCSE Literature AO3)',
        'Write coherently with accurate SPaG (IGCSE Literature AO4)',
        'Develop a personal, conceptualised interpretation',
      ],
      keyVocabulary: [
        'class system',
        'collective responsibility',
        'American Dream',
        'loneliness',
        'marginalisation',
        'microcosm',
        'naturalism',
        'didactic',
        'exposition',
        'denouement',
        'cyclical structure',
        'dramatic tension',
        'stage directions',
        'social criticism',
      ],
      assessmentType: 'IGCSE Literature Paper 1 style mock (Drama & Prose)',
      assessmentWeighting: 'Paper 1: 50% of Literature - Drama 25% / Prose 25%',
      linkedCourseIds: ['igcse-lit-drama-prose', 'inspector-calls'],
      linkedLessonPlanIds: ['igcse-inspector-calls', 'igcse-prose-texts'],
      linkedWorkbookIds: ['wb-y10-igcse-lit-p1'],
      ncStrands: [
        'Edexcel IGCSE Literature Paper 1: Drama and Prose',
        'AO1: Close knowledge and understanding of texts with informed personal response',
        "AO2: Analyse language, form, and structure - writer's methods and effects",
        'AO3: Understand relationships between texts and contexts',
        'AO4: Communicate clearly with accurate SPaG',
      ],
    },
    {
      id: 'y10-t3',
      termLabel: 'Summer Term',
      unitTitle: 'IGCSE Language: Poetry, Prose & Imaginative Writing',
      coreTexts: [
        'Unseen poetry and prose extracts',
        'Anthology of literary extracts for close reading',
      ],
      writingFocus:
        'Imaginative / creative writing - narrative and descriptive (4EA1 Paper 2 Section B)',
      spagFocus:
        "Crafting openings and endings; controlling tense shifts; punctuation for pace and rhythm; show-don't-tell",
      keySkills: [
        'Respond to unseen poetry with close textual analysis (4EA1 AO1/AO2)',
        'Analyse prose extracts for language and structural effects (4EA1 AO2)',
        'Write imaginative prose with controlled craftsmanship (4EA1 AO3)',
        'Plan creative writing under timed conditions',
        'Evaluate and compare unseen literary texts',
      ],
      keyVocabulary: [
        'free verse',
        'sonnet',
        'dramatic monologue',
        'volta',
        'couplet',
        'enjambment',
        'caesura',
        'sensory imagery',
        'extended metaphor',
        'narrative perspective',
        'first person',
        'stream of consciousness',
      ],
      assessmentType: 'IGCSE Paper 2 style mock (Literary Reading + Imaginative Writing)',
      assessmentWeighting: 'Paper 2: 40% of Language - Reading 30 marks / Writing 30 marks',
      linkedCourseIds: ['edexcel-igcse-lang-a'],
      linkedLessonPlanIds: ['igcse-language-p2', 'igcse-creative-writing'],
      linkedWorkbookIds: ['wb-y10-igcse-lang-p2'],
      ncStrands: [
        'Edexcel 4EA1 Paper 2: Poetry and Prose Texts and Imaginative Writing',
        'AO1: Read and understand a range of literary texts',
        'AO2: Analyse language, form, and structure in poetry and prose',
        'AO3: Write imaginatively and creatively for different purposes',
        'AO4: Accurate spelling, punctuation, and grammar in creative writing',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Analyse unseen non-fiction and literary texts at IGCSE standard',
      'Respond to extract-based literature questions with sustained analysis',
      'Compare unseen poems using comparative connectives and parallel structure',
      'Evaluate how successfully writers achieve their purpose',
      'Integrate contextual understanding into analytical paragraphs',
    ],
    writing: [
      'Write transactional texts matched to purpose, audience, and form',
      'Produce imaginative writing with controlled craftsmanship and originality',
      'Sustain a literary essay with conceptualised argument and precise evidence',
      'Self-assess using IGCSE mark-scheme criteria',
    ],
    spokenLanguage: [
      'Present a literary argument formally to the class',
      'Participate in academic discussion using evidence and counter-argument',
      'Respond to questioning with clarity and intellectual confidence',
    ],
    grammarControl: [
      'Write with consistent technical accuracy under timed conditions',
      'Control complex sentence structures without losing clarity',
      'Use literary and analytical terminology accurately and precisely',
      'Deploy a wide range of punctuation for effect and accuracy',
      'Maintain appropriate register throughout extended responses',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 11 - IGCSE Year 2 (Exam Year)
// ═══════════════════════════════════════════════════════════════════════════════

const year11: CurriculumYear = {
  year: 11,
  title: 'IGCSE English - Exam Year',
  bigQuestion: 'How do we perform at our best under exam conditions?',
  focus:
    'Completing the IGCSE courses, mastering exam technique, and building the resilience and precision needed to achieve top grades in the summer examinations.',
  terms: [
    {
      id: 'y11-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'IGCSE Literature: Poetry - Unseen and Anthology',
      coreTexts: [
        'Edexcel IGCSE Poetry Anthology (IGCSE Literature)',
        'Unseen poetry extracts for comparison',
      ],
      writingFocus: 'Comparative poetry essay - anthology and unseen',
      spagFocus:
        'Comparative connectives (conversely, in contrast, similarly); embedding quotations with analysis; controlling essay length',
      keySkills: [
        'Analyse anthology poems in detail (IGCSE Literature AO1/AO2)',
        'Compare an anthology poem with an unseen poem (IGCSE Literature AO2)',
        'Respond to unseen poetry independently (IGCSE Literature AO1)',
        'Write under timed conditions with sustained quality',
        'Use revision strategies effectively (flashcards, retrieval practice)',
      ],
      keyVocabulary: [
        'anthology',
        'thematic link',
        'comparative essay',
        'unseen poetry',
        'structural shift',
        'tone shift',
        'ambiguity',
        'dual interpretation',
        'contextual resonance',
        'authorial intent',
        'reader response',
      ],
      assessmentType: 'IGCSE Literature Paper 2 mock (Poetry)',
      assessmentWeighting: 'Paper 2: 50% of Literature - Anthology 25% / Unseen 25%',
      linkedCourseIds: ['igcse-lit-poetry'],
      linkedLessonPlanIds: ['igcse-poetry-anthology', 'igcse-unseen-poetry'],
      linkedWorkbookIds: ['wb-y11-igcse-lit-p2'],
      ncStrands: [
        'Edexcel IGCSE Literature Paper 2: Poetry',
        'AO1: Close knowledge of anthology poems with personal response',
        'AO2: Analyse poetic methods - language, form, structure',
        'AO3: Contextual understanding of poets and movements',
        'AO4: Accurate written communication in essay form',
      ],
    },
    {
      id: 'y11-t2',
      termLabel: 'Spring Term',
      unitTitle: 'IGCSE Exam Preparation - Language and Literature',
      coreTexts: [
        'Past paper packs - IGCSE Language A (4EA1)',
        'Past paper packs - IGCSE Literature',
        'Revision anthology and model answer booklets',
      ],
      writingFocus: 'Exam-technique refinement across all question types',
      spagFocus:
        'Speed and accuracy under pressure; eliminating persistent errors; final polish strategies',
      keySkills: [
        'Complete full papers under timed exam conditions',
        'Apply mark-scheme criteria to identify and close gaps',
        'Refine exam technique for every question type across both papers',
        'Use targeted revision strategies based on diagnostic data',
        'Manage exam stress and time effectively',
      ],
      keyVocabulary: [
        'mark scheme',
        'assessment objective',
        'band descriptor',
        'examiner report',
        'command word',
        'rubric',
        'diagnostic',
        'retrieval practice',
        'interleaving',
        'spaced repetition',
      ],
      assessmentType:
        'Full mock examination - Language Paper 1, Paper 2; Literature Paper 1, Paper 2',
      assessmentWeighting:
        'Language: Paper 1 (60%) + Paper 2 (40%); Literature: Paper 1 (50%) + Paper 2 (50%)',
      linkedCourseIds: ['edexcel-igcse-lang-a', 'igcse-lit-drama-prose', 'igcse-lit-poetry'],
      linkedLessonPlanIds: ['igcse-exam-prep', 'igcse-revision-strategies'],
      linkedWorkbookIds: ['wb-y11-exam-prep'],
      ncStrands: [
        'Edexcel 4EA1: Full specification revision - Papers 1 & 2',
        'Edexcel IGCSE Literature: Full revision - Papers 1 & 2',
        'All AOs assessed across timed mock examinations',
      ],
    },
    {
      id: 'y11-t3',
      termLabel: 'Summer Term',
      unitTitle: 'Final Revision and Examinations',
      coreTexts: [
        'Targeted revision materials based on individual gaps',
        'Walking-talking mock scripts',
      ],
      writingFocus:
        'Targeted gap-closing - individual weaknesses addressed through focused practice',
      spagFocus: 'Final accuracy drills; common error correction; last-minute precision checks',
      keySkills: [
        'Perform confidently across all exam papers',
        'Manage time effectively in a real exam setting',
        'Apply examiner-level understanding of what earns top marks',
        'Self-regulate anxiety and maintain focus',
        'Review and refine responses before submitting',
      ],
      keyVocabulary: [
        'exam technique',
        'time management',
        'focused revision',
        'walking-talking mock',
        'gap analysis',
        'confidence building',
      ],
      assessmentType:
        'IGCSE External Examinations - Language A Papers 1 & 2, Literature Papers 1 & 2',
      assessmentWeighting: '100% external examination',
      linkedCourseIds: [
        'edexcel-igcse-lang-a',
        'edexcel-igcse-lang-b',
        'igcse-lit-drama-prose',
        'igcse-lit-poetry',
      ],
      linkedLessonPlanIds: ['igcse-final-revision'],
      linkedWorkbookIds: ['wb-y11-final-revision'],
      ncStrands: [
        'Edexcel 4EA1: External examination - June series',
        'Edexcel IGCSE Literature: External examination - June series',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Achieve a Grade 7+ in IGCSE Language A reading components',
      'Achieve a Grade 7+ in IGCSE Literature across drama, prose, and poetry',
      'Respond to unseen texts independently and with analytical confidence',
      'Write comparative literary essays with sustained conceptualised argument',
      "Evaluate writers' methods with precision and flair",
    ],
    writing: [
      'Produce high-quality transactional writing under exam conditions',
      'Write imaginative prose that demonstrates controlled craftsmanship',
      'Sustain literary essays with embedded evidence and seamless context',
      'Self-edit effectively within the final minutes of an exam',
    ],
    spokenLanguage: [
      'Present a formal, evidence-based argument with confidence',
      'Respond to challenge and questioning with composure',
      'Use standard English and academic register in formal settings',
    ],
    grammarControl: [
      'Write with near-faultless technical accuracy under exam conditions',
      'Demonstrate a wide vocabulary used precisely and appropriately',
      'Control complex and compound-complex sentences with consistent clarity',
      'Punctuate speech, quotations, and all sentence types accurately',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 12 - IAL Year 1 (AS Level)
// Edexcel IAL English Language (YEN0) & English Literature (YET0)
// ═══════════════════════════════════════════════════════════════════════════════

const year12: CurriculumYear = {
  year: 12,
  title: 'IAL English - Year 1 (AS)',
  bigQuestion: 'How do we develop a sophisticated, independent critical voice?',
  focus:
    'Beginning the Edexcel International Advanced Level courses. Developing advanced analytical skills, independent research, and the ability to construct nuanced literary and linguistic arguments.',
  terms: [
    {
      id: 'y12-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'IAL Literature Unit 1: Post-2000 Prose & Drama',
      coreTexts: [
        "The Handmaid's Tale - Margaret Atwood (Prose)",
        'A Streetcar Named Desire - Tennessee Williams (Drama)',
      ],
      writingFocus: 'Advanced literary essay - sustained argument with multiple interpretations',
      spagFocus:
        'Academic register at A-Level; complex subordination; nuanced hedging language (arguably, perhaps, it could be contended)',
      keySkills: [
        'Construct a sustained critical argument across an essay (YET0 AO1)',
        'Analyse how writers use language, form, and structure at an advanced level (YET0 AO2)',
        'Explore connections between texts and their contexts (YET0 AO3)',
        'Engage with different interpretations and critical perspectives (YET0 AO5)',
        'Write with sophistication, precision, and intellectual independence',
      ],
      keyVocabulary: [
        'dystopia',
        'theocracy',
        'feminism',
        'patriarchy',
        'subjugation',
        'desire',
        'illusion',
        'reality',
        'masculinity',
        'Southern Gothic',
        'postmodernism',
        'metanarrative',
        'unreliable narrator',
        'polyphony',
        'critical perspective',
        'Marxist reading',
        'feminist reading',
      ],
      assessmentType: 'IAL Literature Unit 1 mock (essay-based)',
      assessmentWeighting: 'Unit 1: 40% of AS / 20% of A Level',
      linkedCourseIds: ['ial-lit-unit1'],
      linkedLessonPlanIds: ['ial-handmaids-tale', 'ial-streetcar'],
      linkedWorkbookIds: ['wb-y12-ial-lit-u1'],
      ncStrands: [
        'Edexcel YET0 Unit 1: Post-2000 Poetry, Drama and Prose',
        'AO1: Articulate informed responses using coherent, accurate written expression',
        'AO2: Analyse ways in which meanings are shaped in texts',
        'AO3: Demonstrate understanding of significance and influence of contexts',
        'AO5: Explore literary texts informed by different interpretations',
      ],
    },
    {
      id: 'y12-t2',
      termLabel: 'Spring Term',
      unitTitle: 'IAL Language Unit 1: Language, the Individual and Society',
      coreTexts: [
        'Non-fiction text anthology (speeches, journalism, memoirs, digital communication)',
        'Language study reference texts',
      ],
      writingFocus: 'Analytical commentary on language use + original non-fiction writing',
      spagFocus:
        'Metalanguage for linguistic analysis (phonology, morphology, syntax, semantics, pragmatics); controlling discursive argument',
      keySkills: [
        'Analyse how language varies according to context, audience, and purpose (YEN0 AO1)',
        'Apply linguistic frameworks to real-world texts (YEN0 AO2)',
        'Understand key concepts in sociolinguistics and language change (YEN0 AO3)',
        'Write original non-fiction for a specific audience (YEN0 AO5)',
        'Evaluate how language shapes and reflects identity and power',
      ],
      keyVocabulary: [
        'sociolect',
        'idiolect',
        'dialect',
        'register',
        'code-switching',
        'pragmatics',
        'semantics',
        'syntax',
        'morphology',
        'phonology',
        'prescriptivism',
        'descriptivism',
        'language change',
        'etymology',
        'Standard English',
        'Received Pronunciation',
        'discourse',
      ],
      assessmentType: 'IAL Language Unit 1 mock (text analysis + original writing)',
      assessmentWeighting: 'Unit 1: 40% of AS / 20% of A Level',
      linkedCourseIds: ['ial-lang-unit1'],
      linkedLessonPlanIds: ['ial-language-analysis', 'ial-sociolinguistics'],
      linkedWorkbookIds: ['wb-y12-ial-lang-u1'],
      ncStrands: [
        'Edexcel YEN0 Unit 1: Language, the Individual and Society',
        'AO1: Apply linguistic methods and terminology',
        'AO2: Analyse ways in which meanings are shaped in texts',
        'AO3: Analyse and evaluate contextual factors affecting language use',
        'AO5: Demonstrate expertise in original writing',
      ],
    },
    {
      id: 'y12-t3',
      termLabel: 'Summer Term',
      unitTitle: 'AS Examinations & Unit 2 Introduction',
      coreTexts: [
        'Revision packs - Literature Unit 1 and Language Unit 1',
        'Introduction to Unit 2 core texts (Shakespeare / Pre-1900 poetry)',
      ],
      writingFocus: 'Exam technique refinement + introduction to extended comparative writing',
      spagFocus:
        'Final accuracy and fluency under A-Level timed conditions; comparative discourse structures',
      keySkills: [
        'Perform at a high standard across AS-level papers',
        'Manage time effectively across extended essay questions',
        'Reflect on AS performance to set targets for A2',
        'Begin engaging with Unit 2 texts with advanced critical frameworks',
        'Develop independent reading habits and wider literary knowledge',
      ],
      keyVocabulary: [
        'AS Level',
        'unit assessment',
        'synoptic',
        'comparative framework',
        'critical lens',
        'literary canon',
        'independent study',
      ],
      assessmentType: 'AS External Examinations - YET0 Unit 1, YEN0 Unit 1',
      assessmentWeighting: '100% external examination (AS awards)',
      linkedCourseIds: ['ial-lit-unit1', 'ial-lang-unit1'],
      linkedLessonPlanIds: ['ial-as-exam-prep'],
      linkedWorkbookIds: ['wb-y12-as-exam-prep'],
      ncStrands: [
        'Edexcel YET0 Unit 1: External examination - May/June series',
        'Edexcel YEN0 Unit 1: External examination - May/June series',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Construct a sustained, conceptualised literary argument at AS standard',
      'Analyse language, form, and structure with precision and independence',
      'Engage with multiple critical interpretations of literary texts',
      'Apply linguistic frameworks to non-fiction and multimodal texts',
      'Demonstrate understanding of how context shapes language and literature',
    ],
    writing: [
      'Write extended analytical essays with a confident academic voice',
      'Produce original non-fiction writing for specified audiences and purposes',
      'Sustain a comparative argument across multiple texts',
      'Edit and refine own writing to near-publishable standard',
    ],
    spokenLanguage: [
      'Present a formal academic argument lasting 5-10 minutes',
      'Engage in Socratic seminar discussion with intellectual rigour',
      'Defend an interpretation against challenge with evidence and reasoning',
    ],
    grammarControl: [
      'Write with consistent accuracy at A-Level standard',
      'Use academic metalanguage for both literary and linguistic analysis',
      'Control complex argumentative structures across extended essays',
      'Deploy hedging and nuanced evaluative language effectively',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// YEAR 13 - IAL Year 2 (A Level - full qualification)
// ═══════════════════════════════════════════════════════════════════════════════

const year13: CurriculumYear = {
  year: 13,
  title: 'IAL English - Year 2 (A Level)',
  bigQuestion: 'How do we become truly independent critical thinkers?',
  focus:
    'Completing the Edexcel IAL courses. Developing synoptic understanding, independent research, and the intellectual maturity needed for top grades and successful progression to university.',
  terms: [
    {
      id: 'y13-t1',
      termLabel: 'Autumn Term',
      unitTitle: 'IAL Literature Unit 3: Shakespeare & Pre-1900 Poetry',
      coreTexts: [
        'Othello - William Shakespeare',
        'Selected Pre-1900 poetry (Romantic and Victorian poets)',
      ],
      writingFocus: 'Synoptic literary essay - connecting Shakespeare, poetry, and wider reading',
      spagFocus:
        'Maintaining a sophisticated critical voice; integrating critical theory; controlling multi-layered arguments',
      keySkills: [
        'Write a synoptic essay connecting Shakespeare with wider literary tradition (YET0 AO1/AO4)',
        'Analyse Shakespeare with advanced attention to language, form, and dramatic structure (YET0 AO2)',
        'Explore how pre-1900 poetry reflects its historical and cultural contexts (YET0 AO3)',
        'Engage critically with published literary criticism (YET0 AO5)',
        'Develop an independent, authoritative critical voice',
      ],
      keyVocabulary: [
        'tragedy',
        'hamartia',
        'jealousy',
        'otherness',
        'Venetian',
        'Moor',
        'colonialism',
        'race',
        'Romantic',
        'sublime',
        'lyric',
        'ode',
        'elegy',
        'pastoral',
        'synoptic',
        'canonical',
        'postcolonial criticism',
        'psychoanalytic reading',
        'New Historicism',
      ],
      assessmentType: 'IAL Literature Unit 3 mock (synoptic essay)',
      assessmentWeighting: 'Unit 3: 30% of A Level',
      linkedCourseIds: ['ial-lit-unit3'],
      linkedLessonPlanIds: ['ial-othello', 'ial-pre1900-poetry'],
      linkedWorkbookIds: ['wb-y13-ial-lit-u3'],
      ncStrands: [
        'Edexcel YET0 Unit 3: Shakespeare and Pre-1900 Poetry',
        'AO1: Articulate informed, personal and creative responses',
        'AO2: Analyse ways in which meanings are shaped - advanced level',
        'AO3: Contexts of production and reception across literary periods',
        'AO4: Explore connections across literary texts and movements',
        'AO5: Engage with different interpretations and critical debates',
      ],
    },
    {
      id: 'y13-t2',
      termLabel: 'Spring Term',
      unitTitle: 'IAL Language Unit 3: Investigating Language & Unit 4: Crafting Language',
      coreTexts: [
        'Independent language investigation data (self-collected)',
        'Wider reading in language and linguistics',
      ],
      writingFocus: 'Independent language investigation + crafted original writing with commentary',
      spagFocus:
        'Research writing conventions; methodology and analysis sections; reflective commentary with metalanguage',
      keySkills: [
        'Design and conduct an independent language investigation (YEN0 AO1/AO2/AO3)',
        'Collect, transcribe, and analyse authentic language data',
        'Write a crafted piece of original writing with an analytical commentary (YEN0 AO5)',
        'Apply advanced linguistic frameworks independently',
        'Present research findings with academic rigour',
      ],
      keyVocabulary: [
        'methodology',
        'hypothesis',
        'data collection',
        'transcription',
        'corpus',
        'qualitative',
        'quantitative',
        'variable',
        'control',
        'linguistic framework',
        'commentary',
        'metalinguistic awareness',
        'stylistic analysis',
        'genre conventions',
        'intertextuality',
      ],
      assessmentType: 'IAL Language Units 3 & 4 (coursework/controlled assessment)',
      assessmentWeighting: 'Unit 3: 20% of A Level; Unit 4: 20% of A Level',
      linkedCourseIds: ['ial-lang-unit3', 'ial-lang-unit4'],
      linkedLessonPlanIds: ['ial-language-investigation', 'ial-original-writing'],
      linkedWorkbookIds: ['wb-y13-ial-lang-u3u4'],
      ncStrands: [
        'Edexcel YEN0 Unit 3: Investigating Language',
        'Edexcel YEN0 Unit 4: Crafting Language',
        'AO1: Apply linguistic methods systematically to data',
        'AO2: Analyse meanings and representations in texts',
        'AO3: Analyse and evaluate contextual factors',
        'AO4: Explore connections between language concepts',
        'AO5: Demonstrate expertise and creativity in original writing',
      ],
    },
    {
      id: 'y13-t3',
      termLabel: 'Summer Term',
      unitTitle: 'A Level Final Revision and Examinations',
      coreTexts: [
        'Revision packs - Literature Units 1, 3 & 4',
        'Revision packs - Language Units 1, 3 & 4',
        'Past papers and examiner reports',
      ],
      writingFocus: 'Exam technique mastery and targeted gap-closing',
      spagFocus: 'Final accuracy at A-Level standard; confident control of all written modes',
      keySkills: [
        'Perform at Grade A/A* across all examined units',
        'Manage extended examination sessions with sustained quality',
        'Apply synoptic thinking - connecting ideas across units and texts',
        'Reflect critically on own development as a reader and writer',
        'Prepare for the transition to university-level study',
      ],
      keyVocabulary: [
        'synoptic assessment',
        'A Level',
        'UCAS',
        'personal statement',
        'independent scholarship',
        'critical autonomy',
        'intellectual maturity',
      ],
      assessmentType: 'A Level External Examinations - YET0 Units 1, 3, 4; YEN0 Units 1, 3, 4',
      assessmentWeighting: '100% external examination (full A Level awards)',
      linkedCourseIds: [
        'ial-lit-unit1',
        'ial-lit-unit3',
        'ial-lit-unit4',
        'ial-lang-unit1',
        'ial-lang-unit3',
        'ial-lang-unit4',
      ],
      linkedLessonPlanIds: ['ial-a-level-exam-prep'],
      linkedWorkbookIds: ['wb-y13-a-level-exam-prep'],
      ncStrands: [
        'Edexcel YET0: Full A Level - Units 1, 3, 4 external examination',
        'Edexcel YEN0: Full A Level - Units 1, 3, 4 external examination',
        'All AOs assessed synoptically across the full qualification',
      ],
    },
  ],
  endOfYearExpectations: {
    reading: [
      'Write synoptic literary essays connecting texts across periods and genres',
      'Engage critically with published literary criticism and apply critical theory',
      'Conduct an independent language investigation with academic rigour',
      'Analyse Shakespeare at the highest level with attention to dramatic art and context',
      'Demonstrate the reading breadth and analytical independence expected for university',
    ],
    writing: [
      'Produce extended critical essays with a confident, independent voice',
      'Write crafted original fiction or non-fiction with an analytical commentary',
      'Present research findings using academic conventions',
      'Self-edit and refine all writing to near-publication standard',
    ],
    spokenLanguage: [
      'Present original research with confidence and academic authority',
      'Participate in high-level critical discussion and seminar',
      'Defend interpretations with evidence, reasoning, and intellectual openness',
    ],
    grammarControl: [
      'Write with consistent, near-faultless accuracy at A-Level standard',
      'Command advanced academic register across all written modes',
      'Use the full range of punctuation with confidence and precision',
      'Demonstrate mature, controlled, and deliberate prose style',
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// Export
// ═══════════════════════════════════════════════════════════════════════════════

export const curriculumOverview: CurriculumYear[] = [
  year7,
  year8,
  year9,
  year10,
  year11,
  year12,
  year13,
]
