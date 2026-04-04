/**
 * Language progression ladders from Y7 through to IAL (Y13).
 * Provides skill-by-skill rungs for use in assessment, target-setting,
 * and student-facing feedback across all year groups.
 */

// -- Interfaces ----------------------------------------------------------------

export interface ProgressionRung {
  rung: number;
  descriptor: string;
  typicalYearGroup: string;
  evidence: string[];
}

export interface ProgressionLadder {
  id: string;
  skillArea: string;
  strand: 'reading' | 'writing' | 'spoken-language' | 'language-analysis' | 'critical-thinking';
  rungs: ProgressionRung[];
  topTip: string;
  assessmentPrompt: string;
}

export interface StudentFriendlyTarget {
  id: string;
  skillArea: string;
  yearGroup: string;
  currentLevel: string;
  nextStepTarget: string;
  howToImprove: string[];
  exemplarPhrase: string;
}

// -- Progression Ladders -------------------------------------------------------

export const progressionLadders: ProgressionLadder[] = [
  // 1. Reading Comprehension
  {
    id: 'ladder-reading-comprehension',
    skillArea: 'Reading Comprehension',
    strand: 'reading',
    topTip: 'Always read the question before you read the text so you know what to look for.',
    assessmentPrompt: 'Read the extract. What does the writer want the reader to understand? Use evidence to support every point you make.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Retrieves explicit information stated directly in the text with basic accuracy.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Copies or closely paraphrases a relevant quotation',
          'Locates surface-level facts (names, dates, events)',
          'Can answer "who", "what" and "where" questions correctly',
        ],
      },
      {
        rung: 2,
        descriptor: 'Identifies key ideas and makes simple inferences, beginning to read between the lines.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Selects quotations that support a given statement',
          'Makes straightforward inferences about character or setting',
          'Distinguishes between fact and opinion in non-fiction',
        ],
      },
      {
        rung: 3,
        descriptor: 'Summarises ideas from different parts of a text and explains the effect on the reader.',
        typicalYearGroup: 'Y8',
        evidence: [
          'Selects evidence from across the whole text',
          'Uses connectives to link ideas (furthermore, however)',
          'Begins to explain rather than simply describe effects',
        ],
      },
      {
        rung: 4,
        descriptor: 'Interprets implicit meanings and analyses how structural and language choices shape understanding.',
        typicalYearGroup: 'Y9',
        evidence: [
          'Tracks how a writer develops ideas across a text',
          'Comments on the effect of sentence length or paragraph order',
          'Identifies ambiguity or multiple layers of meaning',
        ],
      },
      {
        rung: 5,
        descriptor: 'Evaluates the writer\'s craft with close reference to specific language and structure, showing critical awareness.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Selects precise, well-chosen quotations rather than long extracts',
          'Analyses connotation and figurative language independently',
          'Considers how context shapes interpretation',
        ],
      },
      {
        rung: 6,
        descriptor: 'Constructs a sustained, evaluative argument about the text, integrating multiple layers of meaning.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Marshals a line of argument across an extended response',
          'Considers alternative readings with confidence',
          'Places the text in its literary or historical context',
        ],
      },
      {
        rung: 7,
        descriptor: 'Produces sophisticated, independent critical readings that engage with theory, context and intertextuality.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Applies a theoretical lens (e.g., feminist, Marxist, post-colonial) convincingly',
          'Evaluates critics\' views and positions own argument against them',
          'Synthesises close reading with broad contextual knowledge seamlessly',
        ],
      },
    ],
  },

  // 2. Language Analysis
  {
    id: 'ladder-language-analysis',
    skillArea: 'Language Analysis',
    strand: 'language-analysis',
    topTip: 'Never just name a technique -- always explain the effect it creates and why the writer chose it.',
    assessmentPrompt: 'Analyse how the writer uses language to present [subject]. Use precise terminology and explore the effect on the reader.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Names basic literary devices (simile, metaphor, alliteration) with occasional correct identification.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Labels devices when prompted with a list',
          'Gives a simple definition of the technique',
          'Attempts to say what the device makes the reader think',
        ],
      },
      {
        rung: 2,
        descriptor: 'Identifies devices accurately and begins to comment on their purpose in context.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Correctly identifies simile, metaphor, personification and repetition without prompting',
          'Makes a basic "this makes the reader feel..." statement',
          'Selects a supporting quotation for each point',
        ],
      },
      {
        rung: 3,
        descriptor: 'Analyses the effect of language choices using appropriate terminology and embedded quotations.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Embeds quotations fluently within sentences',
          'Explains connotation of individual word choices',
          'Uses a range of terminology beyond basic devices',
        ],
      },
      {
        rung: 4,
        descriptor: 'Explores how multiple language features work together to create a unified effect.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Links two or more techniques and explains how they combine',
          'Discusses tone, register and voice as well as devices',
          'Begins to compare techniques across paragraphs',
        ],
      },
      {
        rung: 5,
        descriptor: 'Produces perceptive analysis of language with clear awareness of the writer\'s deliberate craft.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Explains why a writer chose a specific word over alternatives',
          'Discusses semantic fields and their cumulative effect',
          'Considers how context shapes language choices',
        ],
      },
      {
        rung: 6,
        descriptor: 'Conducts close, sustained linguistic analysis that places language choices in broader literary and cultural context.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Analyses syntax and sentence structure alongside lexical choices',
          'References genre conventions and how the writer conforms to or subverts them',
          'Uses critical vocabulary fluently (polysemy, bathos, irony, elision)',
        ],
      },
      {
        rung: 7,
        descriptor: 'Applies a rigorous analytical framework to language, integrating stylistics, context, and literary theory.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Uses stylistic frameworks (e.g., deixis, modality, foregrounding) accurately',
          'Synthesises linguistic and literary analysis into a coherent argument',
          'Critically evaluates the limits of any single analytical approach',
        ],
      },
    ],
  },

  // 3. Essay Writing
  {
    id: 'ladder-essay-writing',
    skillArea: 'Essay Writing',
    strand: 'writing',
    topTip: 'Plan before you write. A clear argument in your introduction makes the rest of the essay much easier to sustain.',
    assessmentPrompt: 'Write an essay responding to the question below. Show a clear line of argument, support every point with evidence, and write in formal, precise English.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Organises writing into paragraphs with a beginning, middle and end; makes simple relevant points.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Uses a new paragraph for each main idea',
          'Includes an introduction and conclusion, however brief',
          'Attempts to support points with a quotation or example',
        ],
      },
      {
        rung: 2,
        descriptor: 'Develops points with some explanation and a supporting quotation; writing is mostly clear and accurate.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Uses point-evidence-explain structure consistently',
          'Avoids repeating the same idea in different words',
          'Maintains formal register throughout most of the essay',
        ],
      },
      {
        rung: 3,
        descriptor: 'Constructs a clear argument across the essay with well-chosen evidence and developing analysis.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Introduces an argument in the opening paragraph',
          'Uses discourse markers to guide the reader (moreover, in contrast)',
          'Concludes with a point that builds on rather than restates the introduction',
        ],
      },
      {
        rung: 4,
        descriptor: 'Sustains a focused argument, balancing evidence and analysis, with secure technical accuracy.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Every paragraph advances the argument rather than simply adding another point',
          'Embeds quotations economically and analyses individual word choices',
          'Achieves consistent formal register and accurate punctuation',
        ],
      },
      {
        rung: 5,
        descriptor: 'Produces a convincing, structured argument that considers counter-arguments and shows awareness of context.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Addresses the complexity of the question rather than offering a one-sided answer',
          'Integrates contextual knowledge without letting it dominate',
          'Uses a variety of well-controlled sentence structures for effect',
        ],
      },
      {
        rung: 6,
        descriptor: 'Writes with sophistication and precision, developing an original argument across an extended essay.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Opens with a clear, contestable thesis statement',
          'Maintains a coherent line of reasoning across 600-900 words',
          'Demonstrates awareness of critical debate around the text or topic',
        ],
      },
      {
        rung: 7,
        descriptor: 'Produces authoritative, critical essays that engage with scholarship, demonstrate independent thought, and sustain complex arguments.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Positions own argument clearly in relation to established critical viewpoints',
          'Integrates evidence from primary and secondary sources smoothly',
          'Demonstrates sophisticated control of structure, syntax and register',
        ],
      },
    ],
  },

  // 4. Creative Writing
  {
    id: 'ladder-creative-writing',
    skillArea: 'Creative Writing',
    strand: 'writing',
    topTip: 'Great creative writing shows, it does not tell. Replace "she was scared" with what fear looks like.',
    assessmentPrompt: 'Write a piece of creative writing using the stimulus provided. Aim to engage your reader from the very first sentence.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Produces a simple narrative with a recognisable structure; communicates ideas clearly if plainly.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Story has a clear opening, event and ending',
          'Uses some descriptive adjectives and adverbs',
          'Dialogue, if present, is punctuated correctly',
        ],
      },
      {
        rung: 2,
        descriptor: 'Creates atmosphere or character through simple descriptive language; begins to vary sentence length for effect.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Includes at least one extended description of setting or character',
          'Attempts a simile or metaphor for effect',
          'Varies between short punchy sentences and longer flowing ones',
        ],
      },
      {
        rung: 3,
        descriptor: 'Crafts engaging narrative with deliberate language choices; shows rather than tells in key moments.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Uses the senses to bring settings and events to life',
          'Develops a character through action and dialogue rather than description alone',
          'Controls pace by expanding key scenes and condensing others',
        ],
      },
      {
        rung: 4,
        descriptor: 'Demonstrates controlled craft: structure, perspective and voice are used purposefully to create impact.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Chooses and maintains a narrative perspective consistently',
          'Uses structural features (flashback, non-linear timeline, repetition) for effect',
          'Vocabulary is precise and varied; cliches are avoided',
        ],
      },
      {
        rung: 5,
        descriptor: 'Produces sophisticated creative writing with an individual voice; linguistic and structural choices are inventive and controlled.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Opening hooks the reader immediately',
          'Extended metaphor or motif runs through the piece coherently',
          'Ending resonates rather than simply concluding',
        ],
      },
      {
        rung: 6,
        descriptor: 'Writes with assured craftsmanship; work shows awareness of genre, audience, and literary tradition.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Consciously subverts or plays with genre conventions',
          'Voice is distinctive and consistent across the whole piece',
          'Demonstrates reading widely; allusions feel natural rather than forced',
        ],
      },
      {
        rung: 7,
        descriptor: 'Produces original, polished creative writing of near-publishable quality, demonstrating full command of form and language.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Form and content are fully integrated; every choice feels necessary',
          'Can write convincingly in multiple forms (prose, poetry, script)',
          'Reflective commentary articulates deliberate craft choices with precision',
        ],
      },
    ],
  },

  // 5. Comparative Analysis
  {
    id: 'ladder-comparative-analysis',
    skillArea: 'Comparative Analysis',
    strand: 'critical-thinking',
    topTip: 'Integrate comparison throughout -- do not write about Text A then Text B separately. Weave them together.',
    assessmentPrompt: 'Compare how both writers present [theme/character/idea]. Explore similarities and differences, and consider the effect on the reader.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Identifies a simple similarity or difference between two texts.',
        typicalYearGroup: 'Y7',
        evidence: [
          'States that both texts share a theme or that they differ in tone',
          'Supports each point with a basic quotation',
          'Uses "both" or "however" at least once',
        ],
      },
      {
        rung: 2,
        descriptor: 'Makes several relevant comparisons, supporting each with evidence from both texts.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Organises writing so that comparison is clear in each paragraph',
          'Uses comparative connectives consistently (similarly, whereas, by contrast)',
          'Comments briefly on the effect of language in both texts',
        ],
      },
      {
        rung: 3,
        descriptor: 'Develops comparisons with analysis of language and structure, maintaining a clear focus throughout.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Each paragraph makes a clearly comparative point rather than summarising each text',
          'Analyses specific language choices from both texts side by side',
          'Considers how different contexts might account for differences',
        ],
      },
      {
        rung: 4,
        descriptor: 'Produces a focused comparative argument, exploring how writers use different techniques to achieve similar or contrasting effects.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Thesis statement frames the comparison from the outset',
          'Traces a developing argument across multiple comparisons',
          'Moves beyond surface similarity to explore how effects differ',
        ],
      },
      {
        rung: 5,
        descriptor: 'Constructs a sustained comparative essay with perceptive analysis of similarities and differences in craft and context.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Links comparison to whole-text meaning and authorial purpose',
          'Considers how form and genre shape the comparison',
          'Offers a nuanced conclusion that weighs the significance of similarities against differences',
        ],
      },
      {
        rung: 6,
        descriptor: 'Produces a sophisticated, structured comparison that integrates context, craft and critical judgement throughout.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Comparison is genuinely analytical rather than descriptive',
          'Places both texts in their historical and literary contexts',
          'Considers how context shapes interpretation of each text differently',
        ],
      },
      {
        rung: 7,
        descriptor: 'Delivers authoritative comparative analysis that positions texts within broader literary and cultural debates.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Applies a consistent critical framework to both texts',
          'Synthesises comparison with critical and contextual knowledge seamlessly',
          'Produces an argument that goes beyond the texts to say something significant about the theme or period',
        ],
      },
    ],
  },

  // 6. Spoken Language
  {
    id: 'ladder-spoken-language',
    skillArea: 'Spoken Language',
    strand: 'spoken-language',
    topTip: 'Prepare your key points in advance but practise sounding natural -- audiences respond to confidence and eye contact, not scripted reading.',
    assessmentPrompt: 'Deliver a spoken presentation on the topic below. Aim to inform, persuade or entertain your audience using standard spoken English.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Communicates ideas clearly in spoken form; attempts to address the audience directly.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Speaks loudly enough to be heard across the room',
          'Maintains some eye contact rather than reading from notes',
          'Gets across the main idea of the talk',
        ],
      },
      {
        rung: 2,
        descriptor: 'Organises spoken content logically; uses standard English with only occasional lapses.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Talk has a recognisable structure (opening, points, closing)',
          'Avoids filler words for extended stretches',
          'Listens and responds relevantly to questions',
        ],
      },
      {
        rung: 3,
        descriptor: 'Varies tone, pace and vocabulary to engage the audience; uses rhetorical devices intentionally.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Slows down or pauses at key moments for effect',
          'Uses rhetorical questions, tricolon or direct address deliberately',
          'Adapts vocabulary to suit the formality of the occasion',
        ],
      },
      {
        rung: 4,
        descriptor: 'Delivers a confident, well-structured presentation that persuades or informs with clear impact.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Sustains audience engagement across the full duration',
          'Responds to audience reactions by adjusting pace or emphasis',
          'Handles questions and challenges with composure',
        ],
      },
      {
        rung: 5,
        descriptor: 'Uses sophisticated spoken language skills, including nuanced tone shifts, careful word choice and effective use of silence.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Moves between formal and informal registers purposefully',
          'Uses anecdote, statistics and expert reference to support argument',
          'Projects authority and conviction without appearing scripted',
        ],
      },
      {
        rung: 6,
        descriptor: 'Delivers authoritative spoken presentations that demonstrate critical thinking, adaptability and command of standard English.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Presents a complex argument clearly to a non-specialist audience',
          'Uses discourse markers and signposting to guide listeners',
          'Can chair or contribute to a formal debate with precision and fairness',
        ],
      },
      {
        rung: 7,
        descriptor: 'Commands spoken discourse at an advanced level: debates, seminars and viva-style discussions handled with scholarly precision.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Structures impromptu contributions as clearly as prepared speeches',
          'Challenges ideas respectfully using evidence and logic',
          'Demonstrates meta-linguistic awareness when discussing language use',
        ],
      },
    ],
  },

  // 7. Research Skills
  {
    id: 'ladder-research-skills',
    skillArea: 'Research Skills',
    strand: 'critical-thinking',
    topTip: 'A primary source is always more valuable than someone else\'s summary of it. Go to the original wherever you can.',
    assessmentPrompt: 'Gather information on the topic from at least three sources. Evaluate the reliability of each source and synthesise the key findings in your own words.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Locates relevant information from a given source and records it in own words.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Reads a provided article and picks out key facts',
          'Takes basic notes without simply copying whole sentences',
          'Identifies the topic and purpose of a text',
        ],
      },
      {
        rung: 2,
        descriptor: 'Searches independently for relevant information using more than one source; begins to evaluate reliability.',
        typicalYearGroup: 'Y7-Y8',
        evidence: [
          'Uses library resources and credible websites',
          'Notices when two sources disagree',
          'Records the source of each piece of information',
        ],
      },
      {
        rung: 3,
        descriptor: 'Selects, organises and synthesises information from multiple sources to answer a specific question.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Groups related information from different sources under headings',
          'Paraphrases accurately without distorting meaning',
          'Attributes quotations correctly',
        ],
      },
      {
        rung: 4,
        descriptor: 'Evaluates sources critically and uses evidence purposefully to support a line of argument.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Considers author bias, publication date and intended audience',
          'Distinguishes between primary and secondary sources',
          'Rejects unreliable evidence even when it supports the argument',
        ],
      },
      {
        rung: 5,
        descriptor: 'Conducts focused, independent research; integrates secondary sources smoothly into own writing.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Develops a research question and plans how to answer it',
          'Uses quotations from secondary sources to support, not replace, own argument',
          'Produces a bibliography in a consistent format',
        ],
      },
      {
        rung: 6,
        descriptor: 'Designs and executes a research project; positions findings within existing scholarship.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Identifies a gap in the available material',
          'Reads critically around a topic, evaluating conflicting scholarship',
          'Structures a piece of extended writing using research as scaffolding',
        ],
      },
      {
        rung: 7,
        descriptor: 'Produces a scholarly piece of research that makes an original contribution to understanding of the topic.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Constructs a clear research question, methodology and conclusion',
          'Engages critically with a wide range of primary and secondary material',
          'Demonstrates awareness of the limitations of available evidence',
        ],
      },
    ],
  },

  // 8. Linguistic Analysis (IAL)
  {
    id: 'ladder-linguistic-analysis',
    skillArea: 'Linguistic Analysis (IAL)',
    strand: 'language-analysis',
    topTip: 'In linguistics, describe what language actually does rather than prescribing what it should do. Evidence first, label second.',
    assessmentPrompt: 'Analyse the language of the texts below. Discuss phonological, lexical, grammatical and pragmatic features, explaining their significance in context.',
    rungs: [
      {
        rung: 1,
        descriptor: 'Identifies and labels basic grammatical categories (noun, verb, adjective) and simple phonological features.',
        typicalYearGroup: 'Y7',
        evidence: [
          'Labels parts of speech correctly in simple sentences',
          'Identifies rhyme and alliteration in poetry',
          'Can spot formal vs informal vocabulary with guidance',
        ],
      },
      {
        rung: 2,
        descriptor: 'Describes language features at word and sentence level, beginning to explain their communicative purpose.',
        typicalYearGroup: 'Y8-Y9',
        evidence: [
          'Identifies simple clause structures (SVO)',
          'Discusses how vocabulary choices signal register',
          'Comments on how punctuation shapes meaning in non-fiction',
        ],
      },
      {
        rung: 3,
        descriptor: 'Analyses language at multiple levels (phonology, lexis, grammar) with accurate use of linguistic terminology.',
        typicalYearGroup: 'Y9-Y10',
        evidence: [
          'Uses terms such as phoneme, morpheme, clause and discourse correctly',
          'Explains how grammatical choices create effects in speech and writing',
          'Identifies features of spoken language (e.g., fillers, repairs)',
        ],
      },
      {
        rung: 4,
        descriptor: 'Applies a systematic linguistic framework to analyse texts, noting patterns and exceptions.',
        typicalYearGroup: 'Y10-Y11',
        evidence: [
          'Organises analysis by linguistic level (graphology, phonology, lexis, grammar, pragmatics)',
          'Identifies idiolect, sociolect and dialect features accurately',
          'Begins to use theories of language change and acquisition',
        ],
      },
      {
        rung: 5,
        descriptor: 'Produces detailed, accurate linguistic analysis of spoken and written texts, integrating relevant theory.',
        typicalYearGroup: 'Y11-Y12',
        evidence: [
          'Applies Grice\'s maxims, speech act theory or politeness theory to data',
          'Analyses transcripts using standard notation and comments on prosodic features',
          'Connects analysis to broader sociolinguistic contexts',
        ],
      },
      {
        rung: 6,
        descriptor: 'Conducts rigorous comparative linguistic analysis of two or more texts, using a range of theoretical frameworks.',
        typicalYearGroup: 'Y12',
        evidence: [
          'Compares language across genres, modes or time periods systematically',
          'Applies CDA (Critical Discourse Analysis) principles to identify power and ideology',
          'Evaluates the strengths and weaknesses of different analytical frameworks',
        ],
      },
      {
        rung: 7,
        descriptor: 'Produces authoritative linguistic analysis at A-Level standard, demonstrating independent critical engagement with language data and theory.',
        typicalYearGroup: 'Y13 / IAL',
        evidence: [
          'Constructs an independent investigation using primary data',
          'Applies and critiques multiple theoretical models (Labov, Halliday, Fairclough)',
          'Produces findings that are clearly argued, well-evidenced and appropriately hedged',
        ],
      },
    ],
  },
];

// -- Student-Friendly Targets --------------------------------------------------
// 24 targets: 3 per year group, Y7 through Y13

export const studentFriendlyTargets: StudentFriendlyTarget[] = [
  // -- Y7 --------------------------------------------------------------------
  {
    id: 'sft-y7-01',
    skillArea: 'Reading Comprehension',
    yearGroup: 'Y7',
    currentLevel: 'You can find information that is written clearly in the text.',
    nextStepTarget: 'Start reading between the lines -- what is the writer hinting at but not saying directly?',
    howToImprove: [
      'Ask yourself: "What does the writer want me to think or feel here?"',
      'Look for clues in the language even when the answer is not spelled out.',
      'Write "This suggests..." to practise making inferences.',
    ],
    exemplarPhrase: 'The writer describes the house as "empty" which suggests a sense of loneliness, even though the word "lonely" never appears.',
  },
  {
    id: 'sft-y7-02',
    skillArea: 'Language Analysis',
    yearGroup: 'Y7',
    currentLevel: 'You can spot and name techniques such as simile and metaphor.',
    nextStepTarget: 'Explain why the writer chose the technique -- what effect does it create for the reader?',
    howToImprove: [
      'After naming a technique, always add "This makes the reader..."',
      'Think about the feelings or images the technique creates.',
      'Practise the P-E-E structure: Point, Evidence, Explain.',
    ],
    exemplarPhrase: 'The writer uses a metaphor, describing the city as "a concrete jungle", which makes the reader feel that the environment is hostile and overwhelming.',
  },
  {
    id: 'sft-y7-03',
    skillArea: 'Essay Writing',
    yearGroup: 'Y7',
    currentLevel: 'Your writing is organised into paragraphs and you make relevant points.',
    nextStepTarget: 'Back up every point with a quotation or example, then explain how it proves your point.',
    howToImprove: [
      'Use the P-E-E structure in every paragraph.',
      'Check each paragraph: if there is no quotation, add one.',
      'Make sure your explanation says more than the quotation already says.',
    ],
    exemplarPhrase: 'Shakespeare presents Macbeth as ambitious when he says "I have no spur to prick the sides of my intent." This shows that Macbeth knows his only motivation is ambition.',
  },

  // -- Y8 --------------------------------------------------------------------
  {
    id: 'sft-y8-01',
    skillArea: 'Reading Comprehension',
    yearGroup: 'Y8',
    currentLevel: 'You can make inferences and support them with quotations.',
    nextStepTarget: 'Summarise how a writer\'s ideas develop or change across the whole text, not just in one moment.',
    howToImprove: [
      'Read the opening and closing of a text and ask how the mood has shifted.',
      'Track one idea across several paragraphs to see how the writer builds it.',
      'Use words like "initially", "later" and "by the end" to show development.',
    ],
    exemplarPhrase: 'Initially the speaker sounds confident, but by the final stanza the tone has shifted to uncertainty, suggesting the journey has unsettled rather than resolved their feelings.',
  },
  {
    id: 'sft-y8-02',
    skillArea: 'Language Analysis',
    yearGroup: 'Y8',
    currentLevel: 'You explain what techniques mean and how they affect the reader.',
    nextStepTarget: 'Zoom in on individual word choices and explore the specific connotations of each word.',
    howToImprove: [
      'Choose a single word from your quotation and ask what it really means.',
      'Think about what the word implies, not just what it says.',
      'Practise writing "The word \'...\' connotes..."',
    ],
    exemplarPhrase: 'The word "prowled" suggests the character is predatory and calculating, implying menace far beyond simple movement.',
  },
  {
    id: 'sft-y8-03',
    skillArea: 'Creative Writing',
    yearGroup: 'Y8',
    currentLevel: 'You describe settings and characters using some imagery.',
    nextStepTarget: 'Show your reader what is happening rather than simply telling them -- use the senses to bring scenes to life.',
    howToImprove: [
      'Remove sentences that start with "He was..." or "She felt..." and replace them with actions or sensory details.',
      'Add at least two different senses to each key scene (sound, smell, touch, taste, sight).',
      'Read your work aloud and ask: can I picture this?',
    ],
    exemplarPhrase: 'The rain hammered the tin roof, each drop a small explosion of cold, and the smell of damp earth crept in beneath the door.',
  },

  // -- Y9 --------------------------------------------------------------------
  {
    id: 'sft-y9-01',
    skillArea: 'Essay Writing',
    yearGroup: 'Y9',
    currentLevel: 'Your essays are organised and include relevant analysis.',
    nextStepTarget: 'Make sure every paragraph in your essay is advancing an argument, not just adding another point.',
    howToImprove: [
      'Write a one-sentence argument for your essay before you start and check every paragraph connects to it.',
      'Use connectives that signal development: "This is further reinforced by...", "However, a more complex reading suggests..."',
      'Read your introduction and conclusion side by side -- the conclusion should go further, not just repeat.',
    ],
    exemplarPhrase: 'While Priestley uses Birling to represent capitalist complacency, the Inspector\'s exit challenges the audience to decide whether moral responsibility can exist without external enforcement.',
  },
  {
    id: 'sft-y9-02',
    skillArea: 'Language Analysis',
    yearGroup: 'Y9',
    currentLevel: 'You analyse individual word choices and explain their connotations.',
    nextStepTarget: 'Show how two or more language techniques work together to create a single powerful effect.',
    howToImprove: [
      'Pick a short extract and list all the techniques you notice, then ask how they all pull in the same direction.',
      'Use "combined with" or "reinforced by" to link your observations.',
      'Consider semantic fields -- groups of words from the same area of meaning.',
    ],
    exemplarPhrase: 'The semantic field of warfare -- "battle", "wounds", "surrender" -- combined with the fragmented syntax, mirrors the speaker\'s internal conflict and sense of defeat.',
  },
  {
    id: 'sft-y9-03',
    skillArea: 'Spoken Language',
    yearGroup: 'Y9',
    currentLevel: 'You speak clearly and use some rhetorical devices in presentations.',
    nextStepTarget: 'Vary your pace and tone deliberately to hold the audience\'s attention at key moments.',
    howToImprove: [
      'Pause before your most important point -- silence is powerful.',
      'Speed up slightly to build urgency, then slow down to land a key message.',
      'Record yourself and listen back: does your voice sound engaged?',
    ],
    exemplarPhrase: 'Pause. Make eye contact. Then deliver your strongest line slowly and clearly.',
  },

  // -- Y10 -------------------------------------------------------------------
  {
    id: 'sft-y10-01',
    skillArea: 'Reading Comprehension',
    yearGroup: 'Y10',
    currentLevel: 'You analyse language and structure and can discuss context.',
    nextStepTarget: 'Offer alternative interpretations of the same moment -- show the text can be read in more than one way.',
    howToImprove: [
      'Write "A reader might interpret this as... However, alternatively..." to practise considering multiple readings.',
      'Ask yourself whether a character can be read as both sympathetic and unsympathetic.',
      'Think about how a different reader (in a different time period or culture) might respond.',
    ],
    exemplarPhrase: 'Curley\'s wife can be read as a manipulative temptress, but an alternative interpretation presents her as a victim trapped by the patriarchal structure of the ranch.',
  },
  {
    id: 'sft-y10-02',
    skillArea: 'Essay Writing',
    yearGroup: 'Y10',
    currentLevel: 'You write structured essays with developed analysis and some contextual awareness.',
    nextStepTarget: 'Weave context into your analysis naturally rather than dropping in a separate "context paragraph".',
    howToImprove: [
      'Ask yourself: does this context change how the language choice should be read? If yes, link it directly to your analysis.',
      'Avoid beginning a paragraph with "In the 19th century..." -- start with the text.',
      'Test whether your contextual point would stand up without the quotation. If not, cut it.',
    ],
    exemplarPhrase: 'Dickens presents Scrooge\'s refusal to help the poor as wilful cruelty, a pointed critique of the laissez-faire attitude prevalent among the Victorian middle class.',
  },
  {
    id: 'sft-y10-03',
    skillArea: 'Comparative Analysis',
    yearGroup: 'Y10',
    currentLevel: 'You compare two texts using evidence from each.',
    nextStepTarget: 'Integrate your comparison paragraph by paragraph rather than writing about one text then the other.',
    howToImprove: [
      'In each paragraph, quote from both texts and connect them with "whereas", "similarly" or "unlike".',
      'Ask: what is the comparison actually showing about the theme?',
      'Your conclusion should say which text explores the theme more effectively and why.',
    ],
    exemplarPhrase: 'While Heaney celebrates manual labour as a form of artistic legacy, Owen presents physical work -- the digging of graves -- as evidence of war\'s dehumanising effect.',
  },

  // -- Y11 -------------------------------------------------------------------
  {
    id: 'sft-y11-01',
    skillArea: 'Language Analysis',
    yearGroup: 'Y11',
    currentLevel: 'You produce close, perceptive analysis of language choices.',
    nextStepTarget: 'Use a wider range of linguistic terminology (semantic field, polysemy, syntax, register) accurately and confidently.',
    howToImprove: [
      'Keep a vocabulary list of linguistic terms with a definition and an example for each.',
      'Each time you write about language, challenge yourself to use at least one term from the higher-level list.',
      'Only use a term if you are confident you can explain it -- an accurate simple term beats an inaccurate complex one.',
    ],
    exemplarPhrase: 'The polysemous nature of "light" -- evoking both physical brightness and moral purity -- allows Fitzgerald to sustain an ambiguous symbolic resonance throughout the novel.',
  },
  {
    id: 'sft-y11-02',
    skillArea: 'Essay Writing',
    yearGroup: 'Y11',
    currentLevel: 'You write convincing essays with contextual analysis and some counter-argument.',
    nextStepTarget: 'Begin each essay with a clear, specific thesis that takes a position on the question rather than simply rephrasing it.',
    howToImprove: [
      'Try starting with: "Shakespeare presents Macbeth as..." rather than "In this essay I will discuss..."',
      'Your opening paragraph should signal not just your topic but your angle on it.',
      'Ask: would two students reading my introduction know they were going to read two different essays?',
    ],
    exemplarPhrase: 'Through Macbeth\'s progressive moral disintegration, Shakespeare argues that unchecked ambition does not simply corrupt power -- it destroys the capacity for self-knowledge.',
  },
  {
    id: 'sft-y11-03',
    skillArea: 'Research Skills',
    yearGroup: 'Y11',
    currentLevel: 'You can find and use information from multiple sources.',
    nextStepTarget: 'Evaluate each source critically: who wrote it, why, and how reliable is it?',
    howToImprove: [
      'For every source, ask: is this primary or secondary? Is the author an expert? When was it written?',
      'Look for bias: does the writer have a reason to present information in a particular way?',
      'Prefer peer-reviewed articles, published books and reputable newspapers over unverified websites.',
    ],
    exemplarPhrase: 'This source is a contemporary newspaper account and therefore reflects the attitudes of the period, but may overstate public concern for dramatic effect.',
  },

  // -- Y12 -------------------------------------------------------------------
  {
    id: 'sft-y12-01',
    skillArea: 'Essay Writing',
    yearGroup: 'Y12',
    currentLevel: 'You write extended essays with a clear argument and well-integrated evidence.',
    nextStepTarget: 'Acknowledge and then challenge counter-arguments to make your own position stronger.',
    howToImprove: [
      'Introduce a counter-argument with: "One might argue that... however, this reading overlooks..."',
      'A counter-argument you deal with honestly is more persuasive than one you ignore.',
      'Make sure your own position is clearly restated after you have addressed the counter-argument.',
    ],
    exemplarPhrase: 'While some critics read Heathcliff as a Byronic hero, this interpretation is complicated by his systematic cruelty toward those with less power, which invites a more critical moral judgement.',
  },
  {
    id: 'sft-y12-02',
    skillArea: 'Comparative Analysis',
    yearGroup: 'Y12',
    currentLevel: 'You write sophisticated comparative essays that integrate context and critical analysis.',
    nextStepTarget: 'Position your texts within the wider literary tradition -- show how they respond to or diverge from the conventions of their genre or period.',
    howToImprove: [
      'Research the genre or movement each text belongs to and ask how it conforms or challenges it.',
      'Consider how one text might be in dialogue with the other (direct influence, shared concerns, deliberate contrast).',
      'Reference the critical conversation around each text briefly to show awareness of existing debate.',
    ],
    exemplarPhrase: 'Both poets work within the confessional tradition, yet Plath\'s fractured syntax enacts the psychological collapse she describes, whereas Lowell maintains a formal control that ironically underscores his sense of distance.',
  },
  {
    id: 'sft-y12-03',
    skillArea: 'Linguistic Analysis (IAL)',
    yearGroup: 'Y12',
    currentLevel: 'You apply linguistic frameworks systematically to spoken and written texts.',
    nextStepTarget: 'Apply a specific sociolinguistic or pragmatic theory to your data and evaluate how well it accounts for what you observe.',
    howToImprove: [
      'Choose one theory (e.g., Grice\'s Cooperative Principle, Brown and Levinson\'s politeness theory) and apply it to a short transcript.',
      'Note where the theory works well and where the data complicates it.',
      'Write a sentence that begins: "This theory is useful for explaining... however it does not account for..."',
    ],
    exemplarPhrase: 'The speaker\'s repeated interruptions can be analysed through Grice\'s maxim of quantity, suggesting deliberate flouting to signal dominance rather than informational need.',
  },

  // -- Y13 / IAL -------------------------------------------------------------
  {
    id: 'sft-y13-01',
    skillArea: 'Essay Writing',
    yearGroup: 'Y13',
    currentLevel: 'You write authoritative essays that engage with scholarship and develop original arguments.',
    nextStepTarget: 'Ensure your essay makes a genuine critical claim of your own that goes beyond summarising existing views.',
    howToImprove: [
      'After reading critical views, ask: "Do I agree? What do these readings miss? What is my position?"',
      'Your essay should still be arguing something in the final paragraph that you set up in the first.',
      'Originality does not mean ignoring scholarship -- it means using it to sharpen your own argument.',
    ],
    exemplarPhrase: 'While Bloom reads the Romantic lyric as an act of solipsistic self-assertion, the collaborative publication history of Keats\'s odes suggests a more dialogic relationship with audience than this model allows.',
  },
  {
    id: 'sft-y13-02',
    skillArea: 'Linguistic Analysis (IAL)',
    yearGroup: 'Y13',
    currentLevel: 'You produce rigorous linguistic analysis using a range of theoretical frameworks.',
    nextStepTarget: 'Design and carry out an independent investigation using primary data that you have collected yourself.',
    howToImprove: [
      'Choose a focused research question (e.g., "How do teenagers mark group identity through code-switching?").',
      'Collect a manageable data set (3-5 transcripts or 5-10 written samples) and apply your framework consistently.',
      'Write a methodology section explaining what you did, why you chose that approach and what its limitations are.',
    ],
    exemplarPhrase: 'The data reveals systematic code-switching at moments of increased emotional intensity, a pattern consistent with Myers-Scotton\'s markedness model but not fully accounted for by it.',
  },
  {
    id: 'sft-y13-03',
    skillArea: 'Critical Thinking',
    yearGroup: 'Y13',
    currentLevel: 'You evaluate critical perspectives and position your own argument confidently.',
    nextStepTarget: 'Demonstrate genuine intellectual independence: select the most relevant critical lenses, apply them selectively, and say clearly where they fail.',
    howToImprove: [
      'Before writing, map out: which critics agree with your thesis? Which challenge it? How does the text itself resolve the dispute?',
      'Avoid the trap of listing critics to show knowledge -- use them as tools to develop your argument.',
      'End each engagement with a critical source by advancing your own position further, not by deferring to theirs.',
    ],
    exemplarPhrase: 'Eagleton\'s Marxist reading illuminates the economic anxieties underpinning the text, but its focus on class obscures the equally significant dynamics of gender that Woolf places at the centre of her critique.',
  },
];
