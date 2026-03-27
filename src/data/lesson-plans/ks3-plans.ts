// ─── KS3 English: 20 Comprehensive Lesson Plans ────────────────────
// Years 7-9: Reading Skills (7), Writing Skills (7), SPaG & Vocabulary (3), Spoken Language (3)
// Ready-to-teach with full differentiation for mixed-ability classes

export interface KS3LessonPlan {
  id: string
  title: string
  duration: string
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9'
  category: 'Reading' | 'Writing' | 'SPaG & Vocabulary' | 'Spoken Language'
  learningObjectives: string[]
  starterActivity: {
    description: string
    duration: string
    resources: string[]
  }
  mainActivity: {
    description: string
    duration: string
    steps: string[]
    differentiation: {
      support: string
      stretch: string
    }
  }
  plenary: {
    description: string
    duration: string
  }
  homework: string
  resourcesNeeded: string[]
  assessmentOpportunities: string[]
  keyVocabulary: string[]
  crossCurricular: string[]
  sendAdaptations: string
}

export const ks3LessonPlans: KS3LessonPlan[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // READING SKILLS (Lessons 1–7)
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'ks3-read-01',
    title: 'Inference and Deduction: Reading Between the Lines',
    duration: '1 hour',
    yearGroup: 'Year 7',
    category: 'Reading',
    learningObjectives: [
      'Understand the difference between explicit and implicit information',
      'Develop skills to make inferences from textual clues',
      'Use evidence to support inferences about character and plot',
      'Distinguish between inference and assumption'
    ],
    starterActivity: {
      description:
        'Mystery Character: Show an image of a character (illustration or screenshot from a film). Students list 5 facts they can see and 5 things they can infer (age, personality, background, interests). Discuss: How do we know things we cannot actually see? Introduce idea of "reading between the lines".',
      duration: '10 mins',
      resources: [
        'Character image (projected)',
        'Inference/fact recording sheet',
        'Whiteboard markers'
      ]
    },
    mainActivity: {
      description:
        'Inference Master Class: Model inferring from short text extracts. Read aloud a 5-sentence paragraph showing character emotion through action/dialogue without stating it directly. Think aloud: What does the character do? What does that suggest about their feelings? What words hint at this? Use sentence stems: "I infer... because...", "This suggests...", "This makes me think...". Then work through three guided extracts together as a class, with students building inferences on whiteboards. Finally, provide three independent texts (increasing difficulty) for students to make inferences in pairs, recording evidence and reasoning.',
      duration: '35 mins',
      steps: [
        'Model inference with first extract: read, think aloud, identify clues, make inference, cite evidence',
        'Show sentence stems for making inferences',
        'Work through guided extracts 1-3 with whole class, building responses together',
        'Pairs work on first independent extract (easy): identify clues, make inference, record evidence',
        'Pairs work on second independent extract (medium): identify multiple clues, make inference, explain reasoning',
        'Pairs work on third independent extract (hard): infer about character, setting, and mood; support all with evidence',
        'Share inferences from each text; discuss where interpretations differ and why'
      ],
      differentiation: {
        support:
          'Provide extracts with key clues pre-highlighted. Use template with boxes: "I notice... / This suggests... / Evidence is...". Allow oral responses initially. Pre-teach vocabulary. Work in small group with teacher.',
        stretch:
          'Provide literary extracts with subtle inferences. Ask students to identify multiple interpretations and evaluate which is most supported by evidence. Challenge: Write your own short extract where readers must infer information about character without it being stated.'
      }
    },
    plenary: {
      description:
        'Inference Gallery Walk: Display three extracts around the room. Post-it notes beside each. Students walk around and write one inference about each. Vote on which inference per text is most convincing and explain why. Recap: Inference needs textual evidence; assumptions do not.',
      duration: '10 mins'
    },
    homework:
      'Find a short paragraph from a book, comic, or article. Write three inferences about character/plot/setting with evidence for each. Bring to next lesson for peer review.',
    resourcesNeeded: [
      'Character image',
      'Five short text extracts (increasing difficulty)',
      'Sentence stems poster',
      'Inference recording template',
      'Whiteboards and markers',
      'Post-it notes'
    ],
    assessmentOpportunities: [
      'Whiteboard responses to guided extracts (informal)',
      'Recording on three independent extracts (formative)',
      'Gallery walk post-it inferences (formative)',
      'Homework evidence review'
    ],
    keyVocabulary: [
      'inference',
      'deduction',
      'explicit',
      'implicit',
      'clue',
      'evidence',
      'assumption',
      'suggest',
      'interpret'
    ],
    crossCurricular: [
      'Critical thinking',
      'Detective/investigation skills',
      'Empathy'
    ],
    sendAdaptations:
      'Pre-highlight key clues in texts. Provide sentence stems and vocabulary cards. Offer visual representations (emojis, sketches) alongside text. Allow extra thinking time. Pair with stronger reader. Offer shorter extracts initially.'
  },

  {
    id: 'ks3-read-02',
    title: 'Language Analysis: Writer\'s Choice and Effect',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Reading',
    learningObjectives: [
      'Identify and analyse the effect of language features (metaphor, simile, personification, alliteration)',
      'Understand why writers choose specific words and phrases',
      'Use subject terminology to discuss language accurately',
      'Link language choices to mood, tone, and meaning'
    ],
    starterActivity: {
      description:
        'Word Detective: Display two versions of the same sentence. Version 1: "The wind moved through the trees." Version 2: "The wind howled through the skeletal trees." Discuss: How does each feel different? Which words create that feeling? Introduce idea that writers choose words carefully for effect.',
      duration: '8 mins',
      resources: [
        'Two sentence versions (projected)',
        'Comparison grid'
      ]
    },
    mainActivity: {
      description:
        'Analyse three guided extracts, each focusing on one language feature. For each: Identify the feature, state the precise example, explain its literal meaning, discuss its effect (mood, emotion, image created), and link to overall meaning. Use template: "The writer uses [technique]... specifically [quote]... This [describes/suggests/makes us feel/creates image of]... which [effect on reader/atmosphere]." Model with first extract, guided write with second, independent with third. Then provide short passage for pair work: highlight language features, annotate effects, rank by power of effect.',
      duration: '37 mins',
      steps: [
        'Model language analysis with first extract: identify feature, quote, literal meaning, effect, link to text',
        'Show PEE structure: Point (technique), Evidence (quote), Explanation (effect)',
        'Guided analysis of second extract: class identifies feature and quotes, students explain effect',
        'Independent analysis of third extract using template',
        'Pair work: short passage, highlight all language features, annotate effects for each',
        'Rank language features by power: which is most effective and why?',
        'Share analyses; discuss where interpretations differ'
      ],
      differentiation: {
        support:
          'Provide extracts with language features pre-highlighted. Use template with fill-in-the-blank structure. Pre-teach terminology with visual cards (metaphor, simile, personification examples). Limit to 2-3 features. Work in small group.',
        stretch:
          'Analyse complex extracts with multiple layered features. Identify feature, explain multiple possible effects, evaluate which is most powerful. Write analysis paragraph explaining writer\'s overall use of language. Create own example sentences using same techniques.'
      }
    },
    plenary: {
      description:
        'Language Effect Continuum: Draw line on board with "Subtle effect" at one end and "Powerful effect" at other. Call out features or quotes; students stand on line indicating power of effect. Discuss disagreements and justify positions. Debrief: Different features suit different purposes.',
      duration: '10 mins'
    },
    homework:
      'Select a paragraph from a text you\'re reading. Identify three language features and analyse their effects in 3-4 sentences each. Use PEE structure.',
    resourcesNeeded: [
      'Three guided text extracts',
      'Short passage for pair work',
      'Language feature card deck (metaphor, simile, personification, alliteration, hyperbole, etc.)',
      'PEE structure poster',
      'Analysis template sheet',
      'Highlighters'
    ],
    assessmentOpportunities: [
      'Guided analysis responses (formative)',
      'Pair work annotations (formative)',
      'Continuum positioning and justifications (formative)',
      'Homework analysis (summative)'
    ],
    keyVocabulary: [
      'metaphor',
      'simile',
      'personification',
      'alliteration',
      'onomatopoeia',
      'hyperbole',
      'imagery',
      'tone',
      'effect',
      'mood'
    ],
    crossCurricular: [
      'Art (colour choice, composition)',
      'Music (rhythm, pattern)',
      'Empathy (reader response)'
    ],
    sendAdaptations:
      'Pre-highlight language features. Provide visual cards showing each technique with examples. Offer shorter extracts. Use fill-in-the-blank templates. Allow verbal responses first. Pair with stronger reader. Teach one technique deeply before multiple.'
  },

  {
    id: 'ks3-read-03',
    title: 'Structural Analysis: How Texts are Organised',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Reading',
    learningObjectives: [
      'Identify structural features (paragraphing, sentence length, repetition, opening/closing)',
      'Understand how structure affects meaning and reader response',
      'Analyse the purpose of structural choices',
      'Recognise how different genres use structure differently'
    ],
    starterActivity: {
      description:
        'Structure Surprise: Display a short text with conventional paragraphs, then show the same text with all breaks removed (one long block). Read both. Discuss: How does structure affect reading? Which is easier? How does it make us feel? Introduce idea that writers organise texts deliberately.',
      duration: '8 mins',
      resources: [
        'Same text in two formats (projected)',
        'Response sheet'
      ]
    },
    mainActivity: {
      description:
        'Explore structural features across three different texts (story, article, poem). For each, identify: paragraph length and frequency, sentence length variation, repetition, opening and closing lines, dialogue placement, pacing changes. Model with first text: annotate structure, discuss purpose (builds tension, creates pause, emphasises key point). Guided analysis of second text: class marks structural features, students discuss purpose in pairs. Independent analysis of third text. Then provide unannotated passage: students mark structural choices and explain their effects.',
      duration: '37 mins',
      steps: [
        'Model structural analysis: identify breaks, sentence length changes, repetition, opening/closing',
        'Explain purpose of each structural choice (pacing, emphasis, pause, build tension)',
        'Guided analysis: class identifies features, discuss purpose',
        'Independent analysis using annotated template',
        'Provide unannotated passage: students mark all structural features',
        'Pairs discuss: What is the effect of each structural choice?',
        'Share and discuss different interpretations'
      ],
      differentiation: {
        support:
          'Provide texts with structural breaks marked with coloured lines. Use checklist: "How many paragraphs? Are sentences short, medium, or long? Is anything repeated? What is the opening? What is the closing?" Focus on one feature at a time.',
        stretch:
          'Analyse complex texts with multiple structural techniques layered. Explain how structure contributes to overall effect and genre conventions. Write your own short text using deliberately varied structure to create specific effect.'
      }
    },
    plenary: {
      description:
        'Structure Detective: Display a passage with all structural information removed (no paragraphs, no sentence breaks). Students work in pairs to add structure to it themselves, justifying each choice. Compare versions. Discuss: How did you decide where to break/pause?',
      duration: '10 mins'
    },
    homework:
      'Analyse the structure of a full page from a book you\'re reading. Identify 3-4 structural features and explain how each contributes to the text\'s effect.',
    resourcesNeeded: [
      'Three texts demonstrating different structures',
      'Passage with removed structure',
      'Structural features checklist poster',
      'Annotated examples (story, article, poem)',
      'Coloured highlighters',
      'Analysis template sheet'
    ],
    assessmentOpportunities: [
      'Guided analysis responses (formative)',
      'Unannotated passage analysis (formative)',
      'Structure recreation and justification (formative)',
      'Homework analysis (summative)'
    ],
    keyVocabulary: [
      'paragraph',
      'stanza',
      'sentence length',
      'repetition',
      'pacing',
      'climax',
      'opening',
      'closing',
      'structure',
      'effect'
    ],
    crossCurricular: [
      'Film editing (pacing, montage)',
      'Music composition (tempo, rhythm)',
      'Architecture (design, form)'
    ],
    sendAdaptations:
      'Colour-code structural breaks. Provide visual maps showing text structure. Focus on major breaks first. Use simplified checklist. Read aloud while marking structure. Work in small group with teacher. Offer scaffolded templates.'
  },

  {
    id: 'ks3-read-04',
    title: 'Comparing Texts: Similarities and Differences',
    duration: '1 hour',
    yearGroup: 'Year 9',
    category: 'Reading',
    learningObjectives: [
      'Compare texts across language, structure, and content',
      'Identify similarities and differences in writer\'s purpose',
      'Link comparison to broader patterns and themes',
      'Develop evaluation skills through comparative analysis'
    ],
    starterActivity: {
      description:
        'Twin Texts: Display two brief texts on the same topic (e.g., two accounts of the same event, two poems about the sea, two articles about technology). Discuss: What\'s the same? What\'s different? Why might writers present the same topic differently? Frame comparison as puzzle-solving.',
      duration: '8 mins',
      resources: [
        'Two paired texts (projected)',
        'Venn diagram template'
      ]
    },
    mainActivity: {
      description:
        'Compare two texts in depth across three lenses: purpose (what is each writer trying to do?), audience (who reads each?), language (how do they write?). Model with first pair: list similarities and differences, link to purpose/audience, draw conclusions about writer\'s approach. Guided comparison of second pair: class identifies differences, students explain reasons. Independent comparison of third pair using Venn diagram and structured table. Emphasise: comparison with evidence and reasoning, not just listing differences.',
      duration: '37 mins',
      steps: [
        'Model comparison framework: Purpose, Audience, Language, Content, Structure',
        'Identify similarities and differences across each lens',
        'Link differences to writer\'s purpose and audience',
        'Guided comparison: class gathers evidence, students explain reasons',
        'Independent comparison using structured template',
        'Identify patterns: What does each text do well?',
        'Write comparison paragraph: Both texts aim to [purpose], but Text A [approach] while Text B [approach]...'
      ],
      differentiation: {
        support:
          'Provide partially completed comparison table with some entries filled. Offer comparison sentence stems: "Both texts... / However, Text A... while Text B... / This difference suggests..." Focus on one lens (language or purpose) rather than all. Pair with stronger reader.',
        stretch:
          'Compare three texts or texts from different time periods/cultures. Evaluate which is more effective for its purpose. Identify patterns across texts. Write extended comparison paragraph explaining how writers adapt approach based on audience/purpose.'
      }
    },
    plenary: {
      description:
        'Comparison Speed Round: Show 5 paired quotations from the two texts (one from each). Students quickly identify which text each quote comes from and explain how the difference shows different approach. Discuss: What have we learned about these texts by comparing them?',
      duration: '10 mins'
    },
    homework:
      'Find two texts on a topic you\'re interested in. Compare them across purpose, audience, and language in 150-200 words. Use comparison sentence stems.',
    resourcesNeeded: [
      'Three pairs of comparable texts',
      'Comparison framework poster (Purpose, Audience, Language, etc.)',
      'Venn diagram template',
      'Comparison table template',
      'Sentence stems handout',
      'Paired quotations for plenary'
    ],
    assessmentOpportunities: [
      'Guided comparison evidence-gathering (formative)',
      'Independent comparison table (formative)',
      'Comparison paragraph (summative)',
      'Speed round quotation matching (formative)',
      'Homework comparison (summative)'
    ],
    keyVocabulary: [
      'compare',
      'contrast',
      'similarity',
      'difference',
      'purpose',
      'audience',
      'approach',
      'perspective',
      'tone',
      'effect'
    ],
    crossCurricular: [
      'History (source comparison)',
      'Science (comparing explanations)',
      'Critical thinking'
    ],
    sendAdaptations:
      'Provide pre-completed Venn diagram as reference. Use comparison table with questions to guide analysis. Focus on one lens (language or purpose) initially. Offer shorter texts. Read texts aloud. Allow oral comparison first. Pair with stronger reader. Provide comparison sentence stems prominently.'
  },

  {
    id: 'ks3-read-05',
    title: 'Non-Fiction Reading: Information, Persuasion, and Bias',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Reading',
    learningObjectives: [
      'Distinguish between information, persuasion, and opinion in non-fiction',
      'Identify bias and recognise writer\'s perspective',
      'Analyse how non-fiction writers use language and structure to persuade',
      'Evaluate reliability and trustworthiness of sources'
    ],
    starterActivity: {
      description:
        'Spotting Spin: Show two versions of the same event described differently (e.g., "Protesters caused traffic chaos" vs "Thousands advocated for change despite disruption"). Discuss: Same event, different descriptions. What words changed meaning? Why? Introduce idea of bias, perspective, and persuasion in non-fiction.',
      duration: '8 mins',
      resources: [
        'Two versions of same event (projected)',
        'Response sheet'
      ]
    },
    mainActivity: {
      description:
        'Analyse three non-fiction texts: a factual article, a persuasive piece, and an opinion piece. For each, identify: facts vs opinions, persuasive techniques (expert opinion, emotional language, statistics), bias (word choice, what\'s included/excluded, source), and perspective (who would benefit from this message?). Model with first text: colour-code facts (green) and opinions (red), circle persuasive words, discuss bias. Guided analysis of second text: class identifies facts/opinions, students identify persuasive techniques and bias. Independent analysis of third text. Then provide mixed-genre extracts: students classify and analyse each.',
      duration: '37 mins',
      steps: [
        'Define: fact, opinion, bias, perspective',
        'Model analysis of first text: colour-code facts/opinions, identify persuasive techniques, discuss perspective',
        'Guided analysis of second text: class identifies facts/opinions and bias',
        'Students analyse third text independently',
        'Provide mixed-genre extracts: classify as factual/persuasive/opinion',
        'Identify persuasive techniques in each (statistics, expert opinion, emotional language, repetition)',
        'Discuss: Which is most reliable? Why?'
      ],
      differentiation: {
        support:
          'Provide texts with facts pre-highlighted in one colour and opinions in another. Use checklist: "Are numbers given? (fact) / Does it use words like I think...? (opinion) / Are there emotional words? (persuasion)". Focus on one text type at a time.',
        stretch:
          'Analyse complex persuasive texts with subtle bias. Identify multiple perspectives on same issue from different sources. Evaluate credibility of each source. Write your own factual version of a biased piece, removing opinion and persuasive language.'
      }
    },
    plenary: {
      description:
        'Claim Evaluation: Display five claims from the texts (mix of fact, opinion, persuasion). Students rate each 1-5: "1 = Definitely false" to "5 = Definitely true". Discuss: What made some claims harder to evaluate? When is a source trustworthy?',
      duration: '10 mins'
    },
    homework:
      'Find a non-fiction article from online or print. Highlight facts in one colour and opinions in another. Write which source you trust most and why in 100-150 words.',
    resourcesNeeded: [
      'Three non-fiction texts (factual, persuasive, opinion)',
      'Mixed-genre extracts for analysis',
      'Fact/opinion colour-coding markers',
      'Persuasive techniques card deck',
      'Checklist: Fact vs Opinion',
      'Claims for plenary evaluation'
    ],
    assessmentOpportunities: [
      'Colour-coding of facts/opinions (formative)',
      'Guided analysis responses (formative)',
      'Independent text analysis (formative)',
      'Claim evaluation and discussion (formative)',
      'Homework source evaluation (summative)'
    ],
    keyVocabulary: [
      'fact',
      'opinion',
      'bias',
      'perspective',
      'persuasion',
      'evidence',
      'source',
      'reliable',
      'credible',
      'emotive'
    ],
    crossCurricular: [
      'Media literacy',
      'Critical thinking',
      'Citizenship (evaluating sources)',
      'Maths (statistics)'
    ],
    sendAdaptations:
      'Provide colour-coded examples. Use fact/opinion checklist with images. Focus on short, clear texts first. Read aloud. Allow verbal analysis. Pair with stronger reader. Pre-teach persuasive techniques with visual examples.'
  },

  {
    id: 'ks3-read-06',
    title: 'Poetry Introduction: Sound, Image, and Feeling',
    duration: '1 hour',
    yearGroup: 'Year 7',
    category: 'Reading',
    learningObjectives: [
      'Understand poetry as a form of writing that plays with sound and meaning',
      'Identify poetic techniques (rhyme, rhythm, metaphor, imagery)',
      'Read poetry aloud and respond to its emotional impact',
      'Begin to analyse how poets create meaning through language choices'
    ],
    starterActivity: {
      description:
        'Poetry in Movement: Read a short, rhythmic poem aloud (e.g., a poem with strong rhythm or rhyme). Ask students to move/sway/gesture to the rhythm as you read. Then read it in a flat, monotone voice. Discuss: What was different? What did the rhythm do? Introduce idea that poetry is meant to be heard, not just read.',
      duration: '8 mins',
      resources: [
        'Short rhythmic poem (printed/projected)',
        'Open space for movement'
      ]
    },
    mainActivity: {
      description:
        'Explore three poems exploring different poetic techniques: rhyme, rhythm, and imagery. First, read each aloud while students listen. Then analyse: What did you notice? How did it sound? How did it make you feel? Model analysis of Poem 1: identify rhyme scheme, explain effect (creates rhythm, makes memorable). Guided analysis of Poem 2: class identifies rhyming words, discuss effect. Independent response to Poem 3: listen, respond to feeling, then identify techniques. Finally, read three more poems aloud without analysis—just experience the language and image. Complete activity: "This poem made me feel... because..." Write one sentence response.',
      duration: '37 mins',
      steps: [
        'Read Poem 1 aloud; listen for rhyme. Identify rhyming words. Explain how rhyme creates rhythm and effect.',
        'Read Poem 2 aloud; listen for rhythm. Count syllables or beats. Discuss how rhythm affects meaning.',
        'Read Poem 3 aloud; listen for images. What do you picture? How does language create image?',
        'Teach key techniques: alliteration, assonance, metaphor, simile, personification',
        'Guided analysis: class gathers examples, students explain effects',
        'Listen to three new poems without analysis; just respond emotionally',
        'Write response: This poem made me feel... because...'
      ],
      differentiation: {
        support:
          'Use shorter poems. Read aloud multiple times. Use visual cards showing rhyming words. Focus on one technique (rhyme) before others. Allow drawing/emoji responses before writing. Play audio recording of poem.',
        stretch:
          'Analyse complex poems with multiple techniques layered. Write about how techniques combine to create effect. Create own poem using rhyme, rhythm, and image. Compare two poems\' approaches to similar themes.'
      }
    },
    plenary: {
      description:
        'Poetry Carousel: Display four poems around the room. Students rotate, read each silently, write one sentence about how it makes them feel on sticky note. Return to each poem, read all responses. Discuss: How different are our responses? That\'s the beauty of poetry.',
      duration: '10 mins'
    },
    homework:
      'Find a poem you like (from anthology, online, or book). Copy the opening. Write: What sounds/words appeal to you? What does it make you picture? How does it make you feel?',
    resourcesNeeded: [
      'Six short poems (varied techniques)',
      'Poetic techniques visual cards',
      'Rhythm/beat markers',
      'Sticky notes for carousel',
      'Audio recording of poem (optional)',
      'Response template'
    ],
    assessmentOpportunities: [
      'Listening and movement response (formative)',
      'Technique identification (formative)',
      'Guided analysis contributions (formative)',
      'Emotional response writing (formative)',
      'Carousel responses (formative)',
      'Homework response (formative)'
    ],
    keyVocabulary: [
      'rhyme',
      'rhyme scheme',
      'rhythm',
      'beat',
      'metaphor',
      'simile',
      'imagery',
      'alliteration',
      'personification',
      'stanza'
    ],
    crossCurricular: [
      'Music (rhythm, pattern)',
      'Art (imagery, visualisation)',
      'Drama (performance, emotion)'
    ],
    sendAdaptations:
      'Use very short, simple poems. Provide audio recordings. Read aloud multiple times. Use visual poetic technique cards. Focus on one technique initially. Allow drawing/emoji responses. Pair with stronger reader. Play poems set to music.'
  },

  {
    id: 'ks3-read-07',
    title: 'Extended Reading Response: From Text to Essay',
    duration: '1 hour',
    yearGroup: 'Year 9',
    category: 'Reading',
    learningObjectives: [
      'Develop sustained textual analysis skills',
      'Write structured responses to literature',
      'Use evidence to support analytical points',
      'Evaluate character, theme, and writer\'s technique across extended texts'
    ],
    starterActivity: {
      description:
        'Essay Skeleton: Display essay title (e.g., "How does the writer create sympathy for the main character?"). Ask students: What would you need to explain? What evidence would you find? Map out essay structure: Introduction (state your idea), Point 1 (with evidence), Point 2 (with evidence), Point 3 (with evidence), Conclusion. Frame essay as "answering a question about the text."',
      duration: '8 mins',
      resources: [
        'Essay title (projected)',
        'Essay structure diagram'
      ]
    },
    mainActivity: {
      description:
        'Write an extended response (4-5 paragraphs) addressing an essay question about a text studied in class. Model paragraph 1: topic sentence (state main idea), evidence (quote with page reference), explanation (how does evidence support idea?), link to question. Write guided paragraph 2 together: class identifies main idea, finds evidence, writes explanation. Write paragraph 3 independently from prompt. Paragraph 4: introduce new evidence/idea, analyse independently. Paragraph 5: conclusion, summarise main ideas, restate answer to question. Throughout, emphasise: every paragraph needs a point, evidence, and explanation. No plot summary.',
      duration: '37 mins',
      steps: [
        'Display essay question; discuss what needs to be analysed',
        'Model paragraph structure: Point, Evidence, Explanation, Link',
        'Model Paragraph 1 fully: write introduction + first analytical paragraph',
        'Guided Paragraph 2: class identifies main idea and evidence, students write explanation',
        'Independent Paragraph 3: provide prompt idea, students write full paragraph',
        'Independent Paragraph 4: students identify new evidence and analyse',
        'Write conclusion: summarise main ideas, restate answer',
        'Proofread: check for quotations, explanation, not summary'
      ],
      differentiation: {
        support:
          'Provide essay question with planning grid (Point, Evidence, Explanation for each paragraph). Use fill-in-the-blank paragraph template. Pre-select key quotations with line numbers. Limit to 3 paragraphs (intro, one main point, conclusion). Work in small group with teacher.',
        stretch:
          'Write response to challenging question requiring evaluation. Include multiple pieces of evidence per paragraph. Evaluate effectiveness of writer\'s techniques. Write counter-argument paragraph exploring alternative interpretation.'
      }
    },
    plenary: {
      description:
        'Essay Peer Review: Partners exchange essays. Use checklist: Does introduction state an idea? Does each paragraph have a main point? Does each paragraph have evidence? Is evidence explained (not just quoted)? Are paragraphs linked to question? Feedback: one strength, one area to develop.',
      duration: '10 mins'
    },
    homework:
      'Revise your essay based on peer feedback. Add one more paragraph analysing a different aspect of the text. Bring final version to next lesson.',
    resourcesNeeded: [
      'Essay question and text',
      'Essay structure diagram poster',
      'Point-Evidence-Explanation frame (visual)',
      'Paragraph template',
      'Key quotations reference sheet (for support students)',
      'Peer review checklist',
      'Highlighters for marking quotations'
    ],
    assessmentOpportunities: [
      'Modelled paragraph identification (formative)',
      'Guided paragraph analysis (formative)',
      'Independent paragraphs (formative/summative)',
      'Peer review feedback (formative)',
      'Final revised essay (summative)'
    ],
    keyVocabulary: [
      'topic sentence',
      'evidence',
      'quotation',
      'explanation',
      'analysis',
      'structure',
      'introduction',
      'conclusion',
      'link',
      'evaluate'
    ],
    crossCurricular: [
      'Writing skills across all subjects',
      'Critical thinking',
      'Argument and evidence'
    ],
    sendAdaptations:
      'Provide detailed planning grid. Use paragraph template with sentence starters. Pre-select key quotations. Limit word count or paragraph count. Work closely with teacher on Point and Evidence; student provides Explanation. Allow verbal draft first. Pair with stronger writer for revision.'
  },

  // ──────────────────────────────────────────────────────────────────────────
  // WRITING SKILLS (Lessons 8–14)
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'ks3-write-01',
    title: 'Narrative Writing: Crafting Engaging Stories',
    duration: '1 hour',
    yearGroup: 'Year 7',
    category: 'Writing',
    learningObjectives: [
      'Understand narrative structure: beginning, middle, end',
      'Develop character through action, dialogue, and description',
      'Create engaging openings and satisfying conclusions',
      'Use varied sentence structures to maintain interest'
    ],
    starterActivity: {
      description:
        'Story Beginning Challenge: Read three different story openings (action-focused, dialogue-focused, description-focused). Which hooks you most? Why? Discuss: What makes a good opening? What makes you want to read more? Collect ideas on board.',
      duration: '8 mins',
      resources: [
        'Three story openings (projected)',
        'Response sheet'
      ]
    },
    mainActivity: {
      description:
        'Plan and write a short story (400-500 words) following skeleton structure provided. Model story planning: setting, main character, problem, action, resolution. Use story map template with boxes. Model opening paragraph: hook reader, introduce character, hint at problem. Write first paragraph together as class. Students plan their own story (5 mins) using template. Write middle (action, dialogue, obstacle), model on whiteboard. Students write independently (15 mins). Write ending, emphasise: satisfying resolution, not rushed. Share and celebrate.',
      duration: '37 mins',
      steps: [
        'Display story map: Setting, Character, Problem, Action, Climax, Resolution',
        'Model story opening: how to hook reader, introduce character',
        'Class writes opening sentence together',
        'Students complete story map planning their own story (5 mins)',
        'Model middle section: problem/action, dialogue, detail',
        'Students write story independently (15 mins)',
        'Model conclusion: what happens? Is problem solved?',
        'Students write ending (5 mins)',
        'Read one aloud; discuss what works'
      ],
      differentiation: {
        support:
          'Provide story map template with sentence starters in each section. Provide character cards, setting cards, problem cards; students choose one of each. Limit to 200 words. Allow drawing/bullet-point outline before writing. Work in small group.',
        stretch:
          'Write story from unusual perspective (animal, object, villain). Include multiple problems and complications. Use varied sentence structures deliberately. Include vivid sensory details. Peer-mentor other writers.'
      }
    },
    plenary: {
      description:
        'Story Circle: Sit in circle. One student reads their opening sentence. Next student reads their second sentence (from any story). Next reads third. Continue as mixed-author story. Discuss: Did it work as a story? What made it confusing? What made it engaging?',
      duration: '10 mins'
    },
    homework:
      'Extend your story to 600 words. Add one more scene with dialogue. Proofread for spelling and punctuation.',
    resourcesNeeded: [
      'Three story openings',
      'Story map template',
      'Character, setting, problem card decks',
      'Sentence starter posters (for support)',
      'Draft paper',
      'Highlighters for marking key details'
    ],
    assessmentOpportunities: [
      'Story map completion (formative)',
      'Opening paragraph (formative)',
      'Draft story (formative)',
      'Peer listening and feedback (formative)',
      'Final extended story (summative)'
    ],
    keyVocabulary: [
      'narrative',
      'character',
      'setting',
      'plot',
      'dialogue',
      'climax',
      'resolution',
      'structure',
      'hook',
      'perspective'
    ],
    crossCurricular: [
      'Drama (character, dialogue)',
      'Film (narrative structure)',
      'History (storytelling traditions)'
    ],
    sendAdaptations:
      'Use detailed story map with images. Provide character, setting, and problem cards for selection. Use sentence starters throughout. Allow collaborative writing with peer. Scribe for student if writing is barrier. Allow drawing story before writing. Provide simplified template (beginning, middle, end only).'
  },

  {
    id: 'ks3-write-02',
    title: 'Descriptive Writing: Creating Vivid Worlds',
    duration: '1 hour',
    yearGroup: 'Year 7',
    category: 'Writing',
    learningObjectives: [
      'Use sensory language to create vivid descriptions',
      'Employ imagery and figurative language effectively',
      'Build atmosphere and mood through word choice',
      'Show rather than tell emotional responses'
    ],
    starterActivity: {
      description:
        'Sensory Scramble: Display an object (or image of object). Ask students to generate words relating to each sense: sight, sound, smell, taste, touch. Create word bank on board. Discuss: Using sensory words makes writing vivid. We show readers what we experience.',
      duration: '8 mins',
      resources: [
        'Object or image',
        'Whiteboard for word bank'
      ]
    },
    mainActivity: {
      description:
        'Rewrite boring descriptions with vivid language and imagery. Model: Show dull sentence (e.g., "It was a dark forest"). Think aloud: What do I see? Hear? Smell? Rewrite with sensory language and metaphor: "The forest was a wall of shadows, thick with the smell of damp earth and rotting leaves, every step crushing twigs like breaking bones." Provide three more boring sentences. Guided rewrite of first: class generates sensory words, writes together. Students rewrite second and third independently. Share and celebrate strongest examples. Then write 150-word paragraph describing a place, using sensory language and imagery.',
      duration: '37 mins',
      steps: [
        'Model rewriting bland sentence with sensory details and imagery',
        'Show technique: metaphor, simile, alliteration for description',
        'Guided rewrite: class generates sensory words, teacher writes',
        'Students rewrite sentences 2 and 3 independently',
        'Share and compare: discuss which versions are most vivid',
        'Write 150-word description of place using sensory language',
        'Use checklist: At least 2 senses? Figurative language? Specific, not vague words? Varied sentence length?'
      ],
      differentiation: {
        support:
          'Provide sensory word bank for each sentence. Use template: "I see... I hear... I smell... I feel..." Focus on one sense at a time. Write description of very familiar place (bedroom, classroom). Use adjective-choice cards.',
        stretch:
          'Rewrite descriptions using multiple figurative techniques. Write description that builds mood or atmosphere. Create description that reveals character emotion without naming it. Write description from unusual perspective (animal, ghost, tiny creature).'
      }
    },
    plenary: {
      description:
        'Sensory Circle: Sit in circle. Place object (or show image) in centre. Each student contributes one sensory word. Go around twice. Discuss: How many different sensory words can describe one thing? Strongest image?',
      duration: '10 mins'
    },
    homework:
      'Write a 200-word description of your favourite place at home. Use at least three senses. Underline sensory words.',
    resourcesNeeded: [
      'Object or image for starter',
      'Three "bland" sentences to rewrite',
      'Sensory word bank poster',
      'Figurative language examples (metaphor, simile)',
      'Place description prompts',
      'Checklist for descriptive writing',
      'Adjective choice cards (for support)'
    ],
    assessmentOpportunities: [
      'Sensory word generation (formative)',
      'Sentence rewrites (formative)',
      'Peer feedback on vividness (formative)',
      'Description paragraph (summative)',
      'Homework description (summative)'
    ],
    keyVocabulary: [
      'sensory',
      'imagery',
      'metaphor',
      'simile',
      'personification',
      'alliteration',
      'atmosphere',
      'mood',
      'vivid',
      'figurative'
    ],
    crossCurricular: [
      'Art (colour, composition)',
      'Music (mood, emotion)',
      'Science (observation, detail)'
    ],
    sendAdaptations:
      'Provide detailed sensory word bank. Use fill-in-the-blank template for rewriting. Focus on one sense initially. Provide visual images to describe rather than abstract places. Use word cards for vocabulary support. Allow drawing before writing. Pair with stronger writer.'
  },

  {
    id: 'ks3-write-03',
    title: 'Persuasive Writing: Constructing Compelling Arguments',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Writing',
    learningObjectives: [
      'Understand persuasive techniques and their effects',
      'Structure persuasive writing with clear arguments',
      'Use evidence and examples to support claims',
      'Adapt persuasive approach for different audiences and purposes'
    ],
    starterActivity: {
      description:
        'Persuasion Detective: Show two persuasive texts arguing different positions on same issue (e.g., school uniform: for and against). Identify persuasive techniques in each: facts, emotion, expert opinion, repetition, addressing opposition. Discuss: Which is more persuasive? Why?',
      duration: '8 mins',
      resources: [
        'Two opposing persuasive texts',
        'Technique identifier sheet'
      ]
    },
    mainActivity: {
      description:
        'Write 4-5 paragraph persuasive piece arguing for position on school/local issue. Model structure: Introduction (present issue and position), Argument 1 (point + evidence), Argument 2 (point + evidence), Address opposition, Conclusion (restate position strongly). Model opening: state issue, reveal position clearly. Class writes first argument together, identifying technique (fact, emotion, expert opinion). Students write Argument 2 independently. Model acknowledging opposition: "Some argue... However..." Students write this. Write conclusion emphasising strongest argument. Techniques focus: facts, emotional appeals, rhetorical questions, repetition, addressing opposition.',
      duration: '37 mins',
      steps: [
        'Introduce persuasive issue; students state position',
        'Model opening: introduce issue, reveal position, hint at arguments',
        'Model Argument 1: Point + Evidence + Technique',
        'Guided Argument 1: class identifies technique, writes point',
        'Students write Argument 2 independently using similar structure',
        'Model acknowledging opposition: "Some argue... However..."',
        'Students write opposition paragraph',
        'Model conclusion: restate position strongly, summarise strongest point',
        'Students write conclusion'
      ],
      differentiation: {
        support:
          'Provide persuasive structure template with sentence starters. Provide fact cards and quote cards to use as evidence. Limit to 3 arguments instead of 5. Use simple issue (lunch time changes). Pair with teacher for argument planning.',
        stretch:
          'Write on complex, contentious issue. Include 3+ arguments with varied techniques. Acknowledge and refute multiple opposing views. Use rhetorical devices (rhetorical questions, repetition, tripling). Vary sentence structure deliberately.'
      }
    },
    plenary: {
      description:
        'Persuasion Vote: Three students read opening of their persuasive pieces (position statement only). Other students vote: "Do I agree? I already did? I need to hear more?" Discuss: What made you curious to hear more? Strong opening?',
      duration: '10 mins'
    },
    homework:
      'Revise your persuasive piece. Strengthen weakest argument by adding one more fact or example. Proofread for clarity.',
    resourcesNeeded: [
      'Persuasive issue briefing',
      'Two opposing persuasive texts',
      'Persuasive techniques card deck',
      'Argument structure template',
      'Fact cards / quote cards',
      'Sentence starter posters',
      'Technique examples poster',
      'Checklist: Clear position? Evidence? Technique?'
    ],
    assessmentOpportunities: [
      'Technique identification (formative)',
      'Opening statement clarity (formative)',
      'Each argument (formative)',
      'Addressing opposition (formative)',
      'Peer voting and feedback (formative)',
      'Revised persuasive piece (summative)'
    ],
    keyVocabulary: [
      'persuasion',
      'argument',
      'evidence',
      'technique',
      'position',
      'rhetorical question',
      'repetition',
      'emotional appeal',
      'fact',
      'opinion'
    ],
    crossCurricular: [
      'Citizenship (debates, issues)',
      'Media literacy (advertising)',
      'History (rhetoric, speeches)'
    ],
    sendAdaptations:
      'Provide detailed argument template with fill-in-the-blank sentences. Provide fact and quote cards to select from. Focus on simple persuasive issue. Limit arguments to 2. Work closely with teacher on structure. Allow oral rehearsal first. Pair with stronger writer for revision.'
  },

  {
    id: 'ks3-write-04',
    title: 'Letter Writing: Formal and Informal',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Writing',
    learningObjectives: [
      'Understand differences between formal and informal letter registers',
      'Write formal letters with appropriate structure and conventions',
      'Write informal letters with personality and warmth',
      'Adapt language and tone for purpose and audience'
    ],
    starterActivity: {
      description:
        'Tone Detective: Display two letters making same request: one formal (to company), one informal (to friend). Compare: salutation, language level, formality, sign-off. Discuss: Same message, completely different tone. Letters adapt to audience.',
      duration: '8 mins',
      resources: [
        'Two example letters (formal and informal)',
        'Comparison chart'
      ]
    },
    mainActivity: {
      description:
        'Write two letters: one formal (complaint letter to school, applying for position), one informal (thank-you letter to friend, inviting friend to event). Model formal letter first: address, greeting (Dear Sir/Madam or name + title), formal language register, clear purpose in opening, organised body paragraphs, formal closing (Yours faithfully/sincerely), signature. Write formal letter with class in shared writing. Students write formal letter independently based on provided scenario. Then model informal letter: casual greeting, conversational language, personality, warm tone, informal sign-off. Students write informal letter on topic of choice.',
      duration: '37 mins',
      steps: [
        'Teach formal letter conventions: address, date, salutation, formal language, clear paragraphs, formal close',
        'Teach informal letter conventions: casual greeting, conversational tone, personality, informal close',
        'Model formal letter: complaint or application',
        'Guided formal letter: class identifies purpose, students write opening',
        'Students write complete formal letter on scenario',
        'Model informal letter: thank-you or invitation',
        'Students write informal letter on chosen topic',
        'Proofread both using checklist'
      ],
      differentiation: {
        support:
          'Provide letter template with sections marked and sentence starters. Provide formal/informal phrase cards. Focus on formal letter only initially. Use simple scenario (thank teacher). Model addresses and punctuation explicitly.',
        stretch:
          'Write formal letter to actual authority (local councillor, company CEO). Include 3+ body paragraphs. Use formal language accurately without sounding stilted. Write both formal and informal letters on same topic; compare effect.'
      }
    },
    plenary: {
      description:
        'Letter Swap: Exchange formal letters with partner. Check: Is address present? Is greeting formal? Is language formal? Is purpose clear? Is closing appropriate? Provide one feedback comment. Share strongest formal opening.',
      duration: '10 mins'
    },
    homework:
      'Write one more letter (formal or informal) to someone outside school on topic of your choice. Bring to lesson for display.',
    resourcesNeeded: [
      'Two example letters (formal and informal)',
      'Letter template with sections marked',
      'Formal phrase card deck',
      'Informal phrase card deck',
      'Scenario cards (complaints, applications, invitations)',
      'Proper address format examples',
      'Letter-writing checklist',
      'Comparison chart: formal vs informal'
    ],
    assessmentOpportunities: [
      'Tone comparison activity (formative)',
      'Formal letter draft (formative)',
      'Informal letter draft (formative)',
      'Peer feedback on letters (formative)',
      'Final letters (summative)',
      'Homework letter (summative)'
    ],
    keyVocabulary: [
      'formal',
      'informal',
      'salutation',
      'register',
      'purpose',
      'audience',
      'convention',
      'tone',
      'closing',
      'punctuation'
    ],
    crossCurricular: [
      'Citizenship (complaints, applications)',
      'Business studies (professional communication)',
      'Social skills'
    ],
    sendAdaptations:
      'Provide detailed letter template with all sections and examples. Provide formal and informal phrase cards to select from. Focus on formal letter initially. Use real addresses of known organisations. Provide pre-written closing options. Allow email format as alternative if writing is barrier. Work closely with teacher.'
  },

  {
    id: 'ks3-write-05',
    title: 'Article Writing: News and Features',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Writing',
    learningObjectives: [
      'Understand article structure: headline, byline, introduction, body',
      'Write engaging article openings (nut graf)',
      'Develop article content with relevant details and quotes',
      'Adapt article approach for different publications and audiences'
    ],
    starterActivity: {
      description:
        'Headline Challenge: Display a real news story. Show 5 different headlines for same story (ranging from sensationalist to understated). Discuss: Which headline is most eye-catching? Which is most accurate? Which would make you read more? Introduce idea that headlines shape how readers respond to story.',
      duration: '8 mins',
      resources: [
        'News story with 5 different headlines',
        'Response sheet'
      ]
    },
    mainActivity: {
      description:
        'Write article (300-400 words) on school or local event. Model article structure: Headline (engaging, accurate), Byline (writer name + date), Nut graf (opening paragraph answering Who/What/When/Where/Why), Body (key information, quotes, details, background), Conclusion (final thought or next step). Model headline writing: catchy but accurate. Write opening paragraph with class, ensuring it answers key questions. Students write article body independently based on event provided or researched. Include one direct quote. Model conclusion: leave reader with something to think about. Share and discuss which articles are most engaging.',
      duration: '37 mins',
      steps: [
        'Teach article structure: headline, byline, nut graf, body, conclusion',
        'Model headline: engaging, accurate, not misleading',
        'Teach nut graf: Who? What? When? Where? Why? = compelling opening',
        'Guided nut graf: class discusses event, teacher writes opening',
        'Students write article body: key information, details, quote',
        'Model conclusion: summary or looking forward',
        'Students write conclusion',
        'Proofread for clarity and accuracy'
      ],
      differentiation: {
        support:
          'Provide article structure template with sections marked. Provide quote cards (pre-selected quotes). Focus on one school event everyone witnessed. Use fill-in-the-blank nut graf template. Limit to 200 words.',
        stretch:
          'Write article on researched local/national event. Include multiple quotes. Develop engaging angle (human interest, unusual detail). Write two versions for different publications (local paper vs school newsletter).'
      }
    },
    plenary: {
      description:
        'Article Launch: Display headlines from all articles. Class votes on: "Most eye-catching headline", "Best nut graf", "Best quote". Discuss: What made them work?',
      duration: '10 mins'
    },
    homework:
      'Research a current local or national news story. Write article (300 words) with headline, byline, and all required sections. Bring to lesson.',
    resourcesNeeded: [
      'News story with multiple headlines',
      'Article structure template',
      'Sample articles (school magazine, local paper)',
      'Event details or research material',
      'Quote cards (if using provided)',
      'Headline writing tips poster',
      'Nut graf template',
      'Checklist: Headline? Byline? Nut graf? Body? Quote? Conclusion?'
    ],
    assessmentOpportunities: [
      'Headline evaluation (formative)',
      'Nut graf clarity (formative)',
      'Article body quality (formative)',
      'Quote integration (formative)',
      'Peer voting on strongest elements (formative)',
      'Final article (summative)',
      'Homework researched article (summative)'
    ],
    keyVocabulary: [
      'headline',
      'byline',
      'nut graf',
      'article',
      'quote',
      'direct quote',
      'paraphrase',
      'fact',
      'opinion',
      'news'
    ],
    crossCurricular: [
      'Media literacy',
      'Citizenship (current events)',
      'Journalism'
    ],
    sendAdaptations:
      'Provide detailed article template with all sections. Provide pre-selected quotes to use. Focus on one familiar school event. Use fill-in-the-blank nut graf. Limit to 150 words. Allow bullet-point outline before writing. Work with teacher on structure. Read aloud to check clarity.'
  },

  {
    id: 'ks3-write-06',
    title: 'Speech Writing: Speaking to Persuade and Inspire',
    duration: '1 hour',
    yearGroup: 'Year 9',
    category: 'Writing',
    learningObjectives: [
      'Understand features of effective speeches: rhetorical devices, personal anecdotes, direct address',
      'Write speeches for specific occasions and audiences',
      'Use language devices to create impact (repetition, tripling, antithesis)',
      'Structure speech with compelling opening and memorable conclusion'
    ],
    starterActivity: {
      description:
        'Speech or Sermon? Play audio clip of famous speech (30 seconds, no identification). Students listen. Discuss: What techniques did you notice? How did they make you feel? Why is this speech remembered? Introduce speeches as a powerful form of persuasion and inspiration.',
      duration: '8 mins',
      resources: [
        'Audio clip of famous speech (30 seconds)',
        'Speakers'
      ]
    },
    mainActivity: {
      description:
        'Write 3-minute speech (approx. 350-400 words) for specific occasion (school assembly, fundraising event, young person\'s inaugural speech). Model speech structure: Hook (opening that captures attention), Context (establish purpose and audience), Main point 1 (with example or anecdote), Main point 2 (with evidence or emotion), Powerful closing. Model rhetorical devices: repetition for emphasis, direct address to audience, anecdote for connection, tripling (three related phrases), rhetorical questions. Write opening together: grabber, reveal purpose. Students write main body with two clear points, using one rhetorical device per point. Model conclusion: memorable final thought, call to action, or inspiration. Model reading aloud to check flow and rhythm.',
      duration: '37 mins',
      steps: [
        'Teach speech structure: Hook, Context, Point 1, Point 2, Powerful Close',
        'Teach rhetorical devices: repetition, direct address, anecdote, tripling, rhetorical questions',
        'Model speech opening: hook audience, reveal purpose',
        'Guided opening: class suggests ideas for hook, teacher writes',
        'Students write Point 1 with example or anecdote',
        'Students write Point 2 with emotional appeal or evidence',
        'Model closing: memorable final phrase, call to action or inspiration',
        'Students write closing',
        'Read aloud; check for rhythm and natural pacing'
      ],
      differentiation: {
        support:
          'Provide speech template with sections marked and sentence starters. Provide example anecdotes and quotes to use. Focus on one clear point rather than two. Use simple occasion (thanking teachers). Read aloud multiple times to check flow.',
        stretch:
          'Write speech for contentious or complex topic. Include 3+ points with varied rhetorical devices. Use sophisticated language precisely. Deliver speech and receive feedback on impact. Compare with famous speeches; analyse techniques used.'
      }
    },
    plenary: {
      description:
        'Speech Delivery Preview: Three students stand and read opening of their speech aloud. Class notes: Does opening grab attention? Do you want to hear more? Discuss what made opening effective.',
      duration: '10 mins'
    },
    homework:
      'Practise reading your speech aloud. Note where to pause, emphasise, speed up. Record yourself reading it. Bring to next lesson for peer feedback on delivery.',
    resourcesNeeded: [
      'Audio clip of famous speech',
      'Speech structure template',
      'Rhetorical devices card deck',
      'Example anecdotes and quotes',
      'Sample speeches (various occasions)',
      'Sentence starter posters',
      'Pacing and delivery checklist',
      'Recording device (phone/computer)'
    ],
    assessmentOpportunities: [
      'Speech structure understanding (formative)',
      'Opening statement impact (formative)',
      'Main points clarity and evidence (formative)',
      'Use of rhetorical devices (formative)',
      'Conclusion power and clarity (formative)',
      'Peer feedback on delivery (formative)',
      'Final written speech (summative)',
      'Recorded or live delivery (summative)'
    ],
    keyVocabulary: [
      'speech',
      'rhetoric',
      'rhetorical device',
      'repetition',
      'tripling',
      'antithesis',
      'anecdote',
      'direct address',
      'persuasion',
      'inspiration'
    ],
    crossCurricular: [
      'Drama (delivery, performance)',
      'Citizenship (public speaking, advocacy)',
      'History (famous speeches)'
    ],
    sendAdaptations:
      'Provide detailed speech template with all sections and examples. Provide sentence starters and rhetorical device examples. Focus on one clear point. Use fill-in-the-blank sections. Model reading aloud multiple times. Pair with stronger speaker for practice. Allow written-only format if delivery is barrier.'
  },

  {
    id: 'ks3-write-07',
    title: 'Creative Writing Masterclass: Developing Voice and Style',
    duration: '1 hour',
    yearGroup: 'Year 9',
    category: 'Writing',
    learningObjectives: [
      'Develop distinctive writing voice and style',
      'Experiment with form, structure, and perspective',
      'Integrate craft techniques (imagery, dialogue, pacing) seamlessly',
      'Evaluate and revise own writing for effect and impact'
    ],
    starterActivity: {
      description:
        'Voice Detective: Read three extracts from published authors describing same scene (market, storm, discovery). Discuss: How are these different? Each author has distinct voice. Voice = personality, word choice, perspective, rhythm. Readers recognise voice.',
      duration: '8 mins',
      resources: [
        'Three extracts on same scene from different authors',
        'Comparison chart'
      ]
    },
    mainActivity: {
      description:
        'Develop and write a polished creative piece (400-500 words) experimenting with one aspect of craft: distinctive voice, unusual perspective, experimental structure, or stylistic technique. Model craft choice: decide on voice (quirky? lyrical? tough? humorous?), then select words, syntax, and structure to achieve it. Show published examples of distinctive voices. Students choose craft focus: Write in voice of unusual character (time traveller, robot, elderly person, inanimate object), or tell story in fragments/letters/headlines, or write entirely in dialogue, or use heavy sensory language, or mix genres. Plan approach (5 mins), write draft (20 mins), revise for effect (10 mins). Focus on how choices create intended effect, not just what they do.',
      duration: '37 mins',
      steps: [
        'Analyse craft choices in three published extracts',
        'Discuss voice: personality, distinctiveness, recognisability',
        'Offer creative writing challenges: unusual perspective, experimental form, stylistic focus',
        'Model craft choice: decide approach, show how language supports it',
        'Students choose craft focus and plan approach (5 mins)',
        'Students write draft (20 mins)',
        'Revise for effect: is voice/style consistent? Do choices serve meaning? (10 mins)',
        'Share extracts; discuss craft choices and effects'
      ],
      differentiation: {
        support:
          'Provide list of character perspectives to choose from. Provide structure template (letters, fragments, dialogue) with examples. Focus on one craft element: distinctive voice or unusual perspective, not both. Work closely with teacher on planning.',
        stretch:
          'Experiment with two craft elements simultaneously. Write on complex, nuanced topic. Incorporate subtle techniques (metaphor, structure, syntax) seamlessly. Evaluate how all choices combine to create effect. Revise based on peer feedback targeting specific techniques.'
      }
    },
    plenary: {
      description:
        'Craft Circle: Share extracts in small groups. For each, identify: What was the author\'s craft choice? Did it work? What made it work (or not)? Which piece shows most distinctive voice?',
      duration: '10 mins'
    },
    homework:
      'Revise your creative piece based on group feedback. Add one new technique or refine existing technique for stronger effect. Bring polished version to next lesson.',
    resourcesNeeded: [
      'Three published extracts (same scene)',
      'Creative challenge cards (unusual perspectives, forms)',
      'Published examples of distinctive voices',
      'Craft technique reference sheet',
      'Structure template examples',
      'Character perspective cards',
      'Revision checklist: Is voice consistent? Do choices serve meaning?'
    ],
    assessmentOpportunities: [
      'Voice identification in published texts (formative)',
      'Craft choice planning (formative)',
      'Draft writing (formative)',
      'Peer feedback on craft choices (formative)',
      'Revision quality (formative)',
      'Final polished piece (summative)'
    ],
    keyVocabulary: [
      'voice',
      'style',
      'perspective',
      'form',
      'structure',
      'craft',
      'technique',
      'effect',
      'distinctive',
      'tone'
    ],
    crossCurricular: [
      'Art (style, technique)',
      'Music (voice, arrangement)',
      'Drama (character, perspective)'
    ],
    sendAdaptations:
      'Provide specific character perspective options and structure templates. Focus on one craft element. Provide sentence and phrase models. Work closely with teacher on planning and initial draft. Allow verbal planning and brainstorming. Pair with stronger writer for revision. Simplify challenge: write from familiar character\'s perspective using template.'
  },

  // ──────────────────────────────────────────────────────────────────────────
  // SPaG & VOCABULARY (Lessons 15–17)
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'ks3-spag-01',
    title: 'Sentence Variety: Simple, Compound, and Complex',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'SPaG & Vocabulary',
    learningObjectives: [
      'Understand and identify simple, compound, and complex sentences',
      'Use sentence variety deliberately to create effect',
      'Vary sentence length for pacing and emphasis',
      'Combine clauses accurately using appropriate conjunctions'
    ],
    starterActivity: {
      description:
        'Sentence Surgery: Display paragraph with all simple sentences of similar length and rhythm. Read aloud; discuss how it sounds. Then show revised version with varied sentence types and lengths. Read aloud again. Discuss: Which flows better? Why? Introduce idea that sentence variety keeps writing interesting.',
      duration: '8 mins',
      resources: [
        'Two versions of same paragraph',
        'Audio of both read aloud'
      ]
    },
    mainActivity: {
      description:
        'Teach three sentence types and their effects. Simple sentence = one independent clause (quick, punchy, for emphasis). Compound = two independent clauses joined by conjunction (and, but, or) or semicolon (shows relationship between ideas). Complex = independent clause + dependent clause (using when, because, although, if, while) (adds information, shows cause/effect, adds nuance). Model identifying each type in published texts. Then model varying sentences: Start with paragraph of simple sentences, deliberately revise to include compound and complex sentences strategically. Guided practice: provide passage with only simple sentences, class revises together using conjunctions and subordination. Students revise three more passages independently, focusing on varying sentence type and length. Discuss effect of each revision.',
      duration: '37 mins',
      steps: [
        'Teach and identify simple sentences',
        'Teach and identify compound sentences with and, but, or',
        'Teach and identify complex sentences with subordinating conjunctions',
        'Show published examples of varied sentence types',
        'Model revising all-simple-sentence paragraph',
        'Guided revision: class helps identify where to add complex/compound',
        'Students revise three passages independently',
        'Discuss: How does variety affect pacing and meaning?'
      ],
      differentiation: {
        support:
          'Focus on simple and compound sentences initially. Provide list of conjunctions (and, but, or, so, because, when, if). Provide revision template showing which sentences to combine. Use shorter passages. Colour-code sentence types.',
        stretch:
          'Work with complex sentences including multiple dependent clauses. Discuss subtle differences between conjunctions and their effects (because vs although). Write original paragraph demonstrating deliberate sentence variety for specific effect.'
      }
    },
    plenary: {
      description:
        'Sentence Type Scavenger Hunt: Display paragraph with variety of sentence types. Students highlight simple sentences one colour, compound sentences another, complex sentences a third. Count: How many of each? Discuss: Balance? Effect?',
      duration: '10 mins'
    },
    homework:
      'Write a short paragraph (8-10 sentences) that deliberately uses all three sentence types. Label each sentence type. Explain why you varied them.',
    resourcesNeeded: [
      'Two paragraph versions (varied vs simple)',
      'Conjunction reference cards',
      'Published text examples',
      'Colour-coding system for sentence types',
      'Three revision passages',
      'Sentence type labelling poster',
      'Scavenger hunt passage',
      'Checklist: Do I have all three types? Varied lengths? Clear connections?'
    ],
    assessmentOpportunities: [
      'Sentence type identification (formative)',
      'Guided revision contributions (formative)',
      'Independent revision (formative)',
      'Scavenger hunt accuracy (formative)',
      'Homework paragraph with labels (summative)',
      'Explanation of choices (summative)'
    ],
    keyVocabulary: [
      'simple sentence',
      'compound sentence',
      'complex sentence',
      'conjunction',
      'subordinating conjunction',
      'independent clause',
      'dependent clause',
      'pacing',
      'effect',
      'emphasis'
    ],
    crossCurricular: [
      'Music (rhythm, pacing)',
      'Speech (fluency, delivery)',
      'Writing across curriculum'
    ],
    sendAdaptations:
      'Focus on simple and compound sentences initially. Provide visual colour-coded examples. Use short, clear sentences for modelling. Provide conjunction card reference. Use fill-in-the-blank revision template. Work in small group with teacher. Provide word bank of conjunctions. Allow verbal explanation before writing.'
  },

  {
    id: 'ks3-spag-02',
    title: 'Punctuation for Effect: Beyond the Full Stop',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'SPaG & Vocabulary',
    learningObjectives: [
      'Understand and use sophisticated punctuation: colon, semicolon, em-dash, ellipsis',
      'Use punctuation to control pacing and create emphasis',
      'Employ punctuation to clarify meaning',
      'Understand how punctuation creates effect in published texts'
    ],
    starterActivity: {
      description:
        'Punctuation Transformation: Show sentence punctuated three different ways (different marks create different meanings and effects): "She ran—exhausted." / "She ran... exhausted." / "She ran (exhausted)." Discuss: How does punctuation change meaning? Pace? Emotion? Introduce idea that punctuation is a writer\'s tool for creating effect.',
      duration: '8 mins',
      resources: [
        'Sentence with three punctuation versions',
        'Response sheet'
      ]
    },
    mainActivity: {
      description:
        'Teach sophisticated punctuation marks and their effects. Colon = introduces explanation or list. Semicolon = joins related independent clauses; shows connection without full stop. Em-dash = creates pause, emphasis, or interruption. Ellipsis = trails off, suggests incompleteness, creates suspense. Brackets/parentheses = adds additional information. Exclamation mark = emphasis, emotion (use sparingly). Analyse examples in published texts, noting effect of each punctuation choice. Model using each mark in short paragraphs, explaining effect. Guided practice: provide paragraphs needing punctuation; class decides which mark and why. Students edit three passages, adding sophisticated punctuation for effect. Discuss: How does punctuation enhance writing?',
      duration: '37 mins',
      steps: [
        'Teach colon with examples: "She had one goal: revenge."',
        'Teach semicolon with examples: "The storm raged; the house held strong."',
        'Teach em-dash with examples: "He was leaving—for good."',
        'Teach ellipsis with examples: "She waited... and waited..."',
        'Show published examples; analyse effect of each punctuation mark',
        'Model adding sophisticated punctuation to plain paragraph',
        'Guided practice: class identifies where to add marks, why',
        'Students edit three passages adding sophisticated punctuation',
        'Discuss effect of each choice'
      ],
      differentiation: {
        support:
          'Focus on colon and semicolon initially. Provide visual reference card showing punctuation marks with examples. Provide passages with boxes where punctuation goes; students select from options. Use simpler sentences. Model each mark multiple times.',
        stretch:
          'Analyse subtle differences between punctuation choices. Explain why author chose one mark over another. Write paragraphs demonstrating control of punctuation for specific effect. Compare punctuation in different genres.'
      }
    },
    plenary: {
      description:
        'Punctuation Choices: Display paragraph with various punctuation marks used. Students identify each mark and its effect. Discuss: Author\'s choices? How does punctuation serve meaning?',
      duration: '10 mins'
    },
    homework:
      'Write a short passage using at least four different punctuation marks (colon, semicolon, em-dash, ellipsis, or exclamation mark). Underline and label each, explaining why you chose it.',
    resourcesNeeded: [
      'Sentence with three punctuation versions',
      'Punctuation reference card (visual)',
      'Published text examples for analysis',
      'Three passages needing punctuation',
      'Punctuation effect poster',
      'Colour-coding for different marks',
      'Checklist: Colon used correctly? Semicolon joins independent clauses? Em-dash creates intended effect?'
    ],
    assessmentOpportunities: [
      'Punctuation effect identification (formative)',
      'Guided punctuation practice (formative)',
      'Independent passage editing (formative)',
      'Plenary discussion and analysis (formative)',
      'Homework passage with labels and explanations (summative)'
    ],
    keyVocabulary: [
      'colon',
      'semicolon',
      'em-dash',
      'ellipsis',
      'parentheses',
      'punctuation',
      'effect',
      'pacing',
      'emphasis',
      'clause'
    ],
    crossCurricular: [
      'Music (pacing, rhythm)',
      'Drama (delivery, pauses)',
      'Writing across curriculum'
    ],
    sendAdaptations:
      'Focus on colon and semicolon initially. Provide visual reference card with large, clear examples. Provide passages with boxes showing where punctuation goes; students select from options. Read examples aloud to demonstrate effect. Work in small group with teacher. Use fill-in-the-blank template.'
  },

  {
    id: 'ks3-spag-03',
    title: 'Vocabulary Development: From Basic to Brilliant',
    duration: '1 hour',
    yearGroup: 'Year 7',
    category: 'SPaG & Vocabulary',
    learningObjectives: [
      'Understand word classes and word relationships (synonyms, antonyms, etymology)',
      'Expand vocabulary through exploration of word families and roots',
      'Choose precise words to enhance writing and clarity',
      'Develop strategies for learning and remembering new vocabulary'
    ],
    starterActivity: {
      description:
        'Word Upgrade Challenge: Display sentences with vague/weak word choices (e.g., "He was happy." "The day was nice." "She walked across the room."). Discuss: Can we be more specific? More interesting? Generate alternatives, discussing shades of meaning. Introduce idea that choosing precise vocabulary strengthens writing.',
      duration: '8 mins',
      resources: [
        'Sentences with weak word choices',
        'Whiteboard for alternatives'
      ]
    },
    mainActivity: {
      description:
        'Explore vocabulary through three lenses: synonyms and precise meaning, word families and roots, and word class. Model synonym exploration: "happy" = content, cheerful, delighted, ecstatic, elated. Each has different intensity and nuance. Discuss shades of meaning. Then model word families: look, overlook, outlook, lookalike. Explore word roots: "bio" (life), "graph" (write), "morph" (change). Guided practice: choose 5 common words (good, bad, run, nice, said), as class generate synonyms on spectrum of intensity. Then students work in pairs to create word family webs (starting with common root words). Introduce strategy: use thesaurus carefully, considering meaning, not just alternatives. Students upgrade three sentences with vague vocabulary, explaining word choice. Discuss: Is upgraded always better? (No—context matters.)',
      duration: '37 mins',
      steps: [
        'Teach synonyms: shades of meaning, intensity spectrum',
        'Model happy→ecstatic spectrum: show emotional intensity difference',
        'Teach word families: look, over-look, outlook, looking glass',
        'Teach word roots: bio-, graph-, morph-, phon-, chron-',
        'Guided synonym exploration: good, bad, said (5 minutes)',
        'Pair work: create word family webs for 3 root words',
        'Model upgrading weak sentences with precise vocabulary',
        'Students upgrade three sentences, explain choices',
        'Discuss: Context matters; is upgraded always better? (sometimes simple is best)'
      ],
      differentiation: {
        support:
          'Focus on synonyms and precise meaning initially. Provide synonym cards with intensity spectrum shown visually. Use very common words (good, bad, big, happy). Work in small group with teacher. Provide upgraded sentence options to choose from.',
        stretch:
          'Explore word roots and etymology deeply. Create comprehensive word family webs. Discuss subtle meaning differences between synonyms. Evaluate which word choice is most effective in published texts for specific purpose and effect.'
      ]
    },
    plenary: {
      description:
        'Vocabulary Wall: Display upgraded sentences with original weak versions. Class reads both, votes on which is stronger, explains why. Create word bank of "power words" replacing common weak words.',
      duration: '10 mins'
    },
    homework:
      'Find 3-5 weak words in your own writing (from previous piece). Replace each with more precise synonym. Explain why each upgrade strengthens the writing.',
    resourcesNeeded: [
      'Sentences with weak vocabulary',
      'Synonym synonym cards (intensity spectrum)',
      'Word root reference cards',
      'Thesaurus (print or digital)',
      'Word family web template',
      'Published text examples with precise vocabulary',
      'Common weak words → strong alternatives poster',
      'Vocabulary intensity spectrum visual'
    ],
    assessmentOpportunities: [
      'Synonym identification (formative)',
      'Intensity spectrum understanding (formative)',
      'Word family creation (formative)',
      'Synonym exploration contributions (formative)',
      'Sentence upgrade explanations (summative)',
      'Vocabulary wall discussion (formative)',
      'Homework vocabulary improvements (summative)'
    ],
    keyVocabulary: [
      'synonym',
      'antonym',
      'word family',
      'word root',
      'etymology',
      'precise',
      'intensity',
      'nuance',
      'context',
      'word class'
    ],
    crossCurricular: [
      'Language learning (cognates, roots)',
      'Science (Latin/Greek terminology)',
      'History (etymology, language change)',
      'Spelling patterns'
    ],
    sendAdaptations:
      'Focus on synonyms initially. Provide visual synonym intensity spectrums. Use very common words. Provide synonym cards to select from rather than generating. Use fill-in-the-blank template for word families. Work closely with teacher. Read examples aloud. Use picture cards with vocabulary words.'
  },

  // ──────────────────────────────────────────────────────────────────────────
  // SPOKEN LANGUAGE (Lessons 18–20)
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'ks3-spoken-01',
    title: 'Presentation Skills: Speaking with Confidence',
    duration: '1 hour',
    yearGroup: 'Year 7',
    category: 'Spoken Language',
    learningObjectives: [
      'Understand key presentation skills: posture, pace, voice projection, eye contact',
      'Plan and deliver a 2-3 minute presentation',
      'Use visual aids effectively',
      'Handle nervousness and speak with confidence'
    ],
    starterActivity: {
      description:
        'Presentation Watch: Show 2-minute video clip of effective presentation (TED talk, educational video, school assembly). Students note what the speaker does well: eye contact, gestures, pace, voice variety, engaging content. Discuss: What makes a good presenter?',
      duration: '8 mins',
      resources: [
        'Video clip of effective presentation',
        'Observation checklist'
      ]
    },
    mainActivity: {
      description:
        'Prepare and deliver 2-3 minute presentation on topic of choice (hobby, book, place, historical figure, invention, skill). Teach presentation skills: posture (stand tall, face audience), pace (speak at natural speed, not rushed or slow), voice (project, vary tone, emphasise key points), eye contact (look at different audience members), gestures (natural, purposeful, not fidgeting), fillers (avoid um, uh, like). Model strong presentation: clear opening ("Today I\'m going to tell you about..."), organised content (three main points), engaging examples or stories, strong closing. Students plan presentation using structure template (Introduction, Point 1 + example, Point 2 + example, Point 3 + example, Conclusion). Create simple visual aid (poster, slides, or object). Deliver to small group first (practice, build confidence). Then deliver to whole class with peer observation checklist.',
      duration: '37 mins',
      steps: [
        'Teach presentation body language: posture, eye contact, gestures',
        'Teach voice technique: pace, projection, variety, emphasis',
        'Model strong presentation with clear structure',
        'Students choose presentation topic',
        'Students plan using structure template (5 mins)',
        'Students create simple visual aid',
        'Practise in small groups (peer as audience)',
        'Deliver to whole class (while peers observe using checklist)',
        'Peer feedback: one strength, one area to develop'
      ],
      differentiation: {
        support:
          'Provide presentation structure template with sentence starters. Focus on one point rather than three. Allow 1-2 minutes rather than 2-3. Present to teacher and small group only, not whole class. Provide notecards with main points. Video record and review before presenting to class.',
        stretch:
          'Present on more complex topic requiring research. Include 3-4 detailed points with examples and evidence. Use sophisticated visual aids (slides, video clips, interactive element). Present to larger audience. Incorporate sophisticated presentation techniques (rhetorical questions, pause for effect).'
      }
    },
    plenary: {
      description:
        'Presentation Reflection: Students complete reflection: What went well in my presentation? What would I improve? What did I notice about strong presentations? Discuss: Presentation skills improve with practice.',
      duration: '10 mins'
    },
    homework:
      'Watch another presentation (TED talk, podcast, video). Note presentation techniques used (posture, pace, voice, eye contact). Write: What made it effective?',
    resourcesNeeded: [
      'Video clip of effective presentation',
      'Presentation skills poster (body language, voice)',
      'Presentation structure template',
      'Peer observation checklist',
      'Notecards template',
      'Visual aid materials (poster paper, markers)',
      'Video recording device (optional)',
      'Reflection template'
    ],
    assessmentOpportunities: [
      'Presentation skills observation (formative)',
      'Presentation planning (formative)',
      'Small group practice presentation (formative)',
      'Live class presentation (summative)',
      'Peer feedback (formative)',
      'Presentation reflection (summative)',
      'Homework presentation analysis (summative)'
    ],
    keyVocabulary: [
      'presentation',
      'posture',
      'pace',
      'projection',
      'eye contact',
      'gesture',
      'confidence',
      'audience',
      'visual aid',
      'structure'
    ],
    crossCurricular: [
      'Drama (performance, confidence)',
      'Public speaking',
      'Citizenship (community events)',
      'All subjects (presentations)'
    ],
    sendAdaptations:
      'Provide detailed presentation structure template with sentence starters. Allow 1-2 minutes instead of 2-3. Present to teacher and small group only. Provide notecards with main points and key phrases pre-written. Video record and review before live presentation. Partner with confident peer. Use visual aid as "script" (detailed poster). Allow time to practise multiple times.'
  },

  {
    id: 'ks3-spoken-02',
    title: 'Group Discussion: Listening, Responding, Building Ideas',
    duration: '1 hour',
    yearGroup: 'Year 8',
    category: 'Spoken Language',
    learningObjectives: [
      'Develop active listening skills',
      'Contribute meaningfully to group discussions',
      'Build on others\' ideas and respond respectfully',
      'Use discussion to deepen understanding of texts and topics'
    ],
    starterActivity: {
      description:
        'Listening Challenge: Read aloud a short story or article (3-4 minutes). Ask students to listen actively without notes or visuals. Afterwards, discuss: What do you remember? What was the key idea? Emphasise: Good listening is hard work; we must focus.',
      duration: '8 mins',
      resources: [
        'Short story or article to read aloud'
      ]
    },
    mainActivity: {
      description:
        'Conduct structured small-group discussions on text-based question or topic (e.g., "Should humans colonize Mars?" or "Is the character\'s action justified?"). Teach discussion norms: Listen without interrupting, make eye contact, build on others\' ideas, disagree respectfully, ask clarifying questions. Model discussion roles: facilitator (keeps discussion on track), timekeeper (ensures balance), note-taker (records ideas), voice of caution (challenges ideas respectfully). Assign roles rotating. Provide discussion prompt and 20 minutes for group discussion. Facilitate groups, not dominating but ensuring all participate. Note examples of strong listening and responding. After discussion, debrief: Which groups stayed on topic? Whose ideas were built upon? How did groups handle disagreement? Share one example of strong discussion move (asking clarifying question, building on idea, respectful disagreement).',
      duration: '37 mins',
      steps: [
        'Teach discussion norms: listen, make eye contact, build on ideas, disagree respectfully',
        'Assign discussion roles: facilitator, timekeeper, note-taker, voice of caution',
        'Display discussion prompt (text-based question or topic)',
        'Model strong discussion move: asking for clarification',
        'Model strong discussion move: building on previous idea',
        'Model strong discussion move: respectful disagreement',
        'Small groups discuss for 20 minutes',
        'Teacher circulates, observes, notes examples',
        'Debrief: reflect on discussion quality and participation'
      ],
      differentiation: {
        support:
          'Provide discussion prompt with sentence starters: "I agree because...", "That\'s interesting, and...", "Can you explain what you mean by...?" Assign more structured roles. Provide response cards with discussion moves. Work in smaller group (3 people). Allow shorter discussion time (10 mins).',
        stretch:
          'Discuss more complex, open-ended question requiring analysis. Rotate roles. Facilitate group without adult support. Record discussion and self-assess participation and listening. Prepare mini-speech summarising group\'s main ideas.'
      }
    },
    plenary: {
      description:
        'Discussion Showcase: Each group shares one key idea from their discussion. Class listens and notes: Did group support ideas with evidence? Did members listen to each other? Discuss: What made discussions productive?',
      duration: '10 mins'
    },
    homework:
      'Reflect on your participation in group discussion: Did you listen actively? Did you contribute? Did you build on others\' ideas? What\'s one thing you\'ll do differently next time?',
    resourcesNeeded: [
      'Story or article for listening challenge',
      'Discussion norms poster',
      'Discussion role cards',
      'Discussion prompt (text-based question)',
      'Sentence starters for discussion',
      'Response cards with discussion moves',
      'Notepad for note-taker',
      'Timer for timekeeper',
      'Reflection template'
    ],
    assessmentOpportunities: [
      'Active listening demonstration (formative)',
      'Contribution to discussion (formative)',
      'Quality of ideas shared (formative)',
      'Listening to others (formative)',
      'Discussion role performance (formative)',
      'Group showcase idea (formative)',
      'Reflection on participation (summative)'
    ],
    keyVocabulary: [
      'discussion',
      'listen',
      'respond',
      'build on',
      'respectfully',
      'clarify',
      'evidence',
      'contribution',
      'participation',
      'idea'
    ],
    crossCurricular: [
      'Citizenship (dialogue, respect)',
      'Social skills',
      'All subjects (collaborative learning)'
    ],
    sendAdaptations:
      'Provide detailed discussion sentence starters on card. Assign facilitator role (more structured). Use simplified discussion prompt requiring yes/no or simple answers. Work in very small group (3 people, including teacher). Allow written response option before speaking. Record responses and play back to check understanding. Provide response cards with discussion moves to choose from.'
  },

  {
    id: 'ks3-spoken-03',
    title: 'Formal Debate: Constructing and Defending Arguments',
    duration: '1 hour',
    yearGroup: 'Year 9',
    category: 'Spoken Language',
    learningObjectives: [
      'Understand formal debate structure and conventions',
      'Construct coherent, evidence-based arguments',
      'Anticipate and counter opposing arguments',
      'Speak persuasively and respond to challenge'
    ],
    starterActivity: {
      description:
        'Debate Preview: Show 3-minute video clip of formal debate (mock parliament, debate competition, or university debate). Students observe: How is it structured? What is each person doing? Discuss: Debate requires both preparation and quick thinking. Evidence matters.',
      duration: '8 mins',
      resources: [
        'Video clip of formal debate',
        'Observation checklist'
      ]
    },
    mainActivity: {
      description:
        'Conduct formal debate on contentious but age-appropriate topic (school uniforms, homework, screen time limits, climate change policy, animal rights). Structure: Two teams (For and Against), opening statement from each, two speeches per team, closing statements. Before debate, teams prepare (10 mins): Identify 3 main arguments with evidence, anticipate opposition, plan refutation. Model opening statement and first speech: state position clearly, present first argument with evidence, explain how it supports position. Model refutation: "Our opponents argue X, but...", counter their logic with stronger evidence. Conduct debate with students delivering prepared speeches and responses. Assign roles: main speaker, second speaker (builds on first and counters opposition), closer (summarises team\'s strongest points). After debate, audience votes on winning argument (not which team they agree with, but which argued most effectively).',
      duration: '37 mins',
      steps: [
        'Assign students to For and Against teams on debate topic',
        'Teach debate structure: opening, speech 1, speech 2, rebuttal, closing',
        'Teach argument structure: Position → Evidence → Explanation',
        'Teach refutation: acknowledge opposition → counter with stronger argument',
        'Teams prepare arguments and evidence (10 mins)',
        'Team For opening statement (2 mins)',
        'Team Against opening statement (2 mins)',
        'Team For first speech (3 mins)',
        'Team Against first speech (3 mins)',
        'Rebuttal round: teams counter each other\'s points (2 mins each)',
        'Closing statements (1 min each)',
        'Audience votes on most effective argument'
      ],
      differentiation: {
        support:
          'Provide argument framework with 3 pre-researched arguments and evidence for each side. Assign less complex role (second speaker who builds on prepared argument). Provide sentence starters: "This is important because...", "Our opponents argue..., but the evidence shows..." Allow preparation with adult support.',
        stretch:
          'Debate on more complex, nuanced topic. Prepare own arguments and research evidence. Take on more demanding role (opening or closer). Prepare both opening and counter-argument. Analyse opposing team\'s logic and identify weaknesses in their argument.'
      }
    },
    plenary: {
      description:
        'Debate Reflection: Audience votes on winning argument (most persuasive, best-supported, strongest response to opposition). Discuss: Why did we vote that way? What made one side more convincing? Did minds change during debate? How did evidence strengthen or weaken arguments?',
      duration: '10 mins'
    },
    homework:
      'Reflect on the debate. Write: If you were on the opposing team, how would you strengthen your argument? What new evidence or counter-argument would you add?',
    resourcesNeeded: [
      'Video clip of formal debate',
      'Debate topic briefing (for and against perspective)',
      'Debate structure poster',
      'Argument framework template',
      'Evidence cards (pre-researched)',
      'Sentence starters: arguments, refutation, closing',
      'Role cards: opener, main speaker, closer, counter-speaker',
      'Audience voting form',
      'Reflection template'
    ],
    assessmentOpportunities: [
      'Argument clarity and structure (formative)',
      'Evidence quality and relevance (formative)',
      'Refutation strength (formative)',
      'Delivery and persuasiveness (formative)',
      'Peer assessment of debate effectiveness (summative)',
      'Audience voting and justification (formative)',
      'Homework reflection (summative)'
    ],
    keyVocabulary: [
      'debate',
      'argument',
      'evidence',
      'position',
      'refutation',
      'counter-argument',
      'persuasive',
      'logic',
      'fallacy',
      'concede'
    ],
    crossCurricular: [
      'Citizenship (civic engagement, dialogue)',
      'History (rhetoric, speeches)',
      'Critical thinking'
    ],
    sendAdaptations:
      'Provide detailed argument framework with 3 pre-researched arguments and evidence cards. Assign less complex role (speaker who delivers prepared argument without responding to opposition). Provide detailed sentence starters and response templates. Allow extensive preparation with adult support. Work in small group debate rather than whole class. Video record and review before live debate.'
  }
]
