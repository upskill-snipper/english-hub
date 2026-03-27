export interface DiagnosticQuestion {
  id: string;
  question: string;
  skillTested: string;
  expectedResponse: string;
  commonErrors: string[];
  followUp: string;
}

export interface Misconception {
  id: string;
  misconception: string;
  evidence: string;
  correction: string;
  activities: string[];
}

export interface InterventionStrategy {
  id: string;
  title: string;
  targetSkill: string;
  duration: string;
  description: string;
  resources: string[];
  successCriteria: string[];
}

export interface GapAnalysisTool {
  id: string;
  title: string;
  board: string;
  subject: string;
  targetArea: string;
  diagnosticQuestions: DiagnosticQuestion[];
  commonMisconceptions: Misconception[];
  interventionStrategies: InterventionStrategy[];
  progressIndicators: string[];
}

export const gapAnalysisTools: GapAnalysisTool[] = [
  {
    id: 'reading-comp-inference',
    title: 'Reading Comprehension — Inference and Deduction',
    board: 'GCSE/A-Level',
    subject: 'English Literature & Language',
    targetArea: 'Inference and deduction skills',
    diagnosticQuestions: [
      {
        id: 'infer-001',
        question: 'Read this passage: "She gathered her coat and gloves, checking the clock twice." What can we infer about the character\'s state of mind?',
        skillTested: 'Making inferences from textual details',
        expectedResponse: 'The character is anxious, nervous, or in a hurry; the repeated time-checking and deliberate gathering of items suggests concern about being late or anticipation about an event',
        commonErrors: [
          'Simply stating she is leaving',
          'Only identifying individual actions without connecting them to emotional state',
          'Making inferences without textual evidence',
          'Confusing explicit information with inference'
        ],
        followUp: 'What specific words or phrases helped you reach that conclusion?'
      },
      {
        id: 'infer-002',
        question: 'In a passage where a character "avoids his father\'s gaze" and "his voice drops to a whisper," what can we deduce about their relationship?',
        skillTested: 'Deducing relationships from behavioral details',
        expectedResponse: 'There is tension, discomfort, or conflict between them; the character feels shame, guilt, or fear; the relationship is strained or distant',
        commonErrors: [
          'Over-generalizing without textual support',
          'Stating they are shy without considering context',
          'Missing the emotional dimension of the behaviors',
          'Not considering what these behaviors reveal about power dynamics'
        ],
        followUp: 'Can you identify three pieces of evidence that support your deduction?'
      },
      {
        id: 'infer-003',
        question: 'A character receives a letter and immediately burns it without opening it. What might we infer about the letter\'s origin?',
        skillTested: 'Using action to infer about unstated information',
        expectedResponse: 'The character knows or suspects who it\'s from and fears its contents; it may contain unwelcome news, accusations, or reminders of a painful past',
        commonErrors: [
          'Simply saying they don\'t want to read it',
          'Missing the significance of not opening it',
          'Failing to consider why someone would burn rather than throw away',
          'Making inferences that contradict the action'
        ],
        followUp: 'What does the choice to burn it (rather than discard it) tell us?'
      },
      {
        id: 'infer-004',
        question: 'In a passage, a wealthy family member "insists on paying" at a restaurant, but the other character "tenses visibly" when offered. What can we infer?',
        skillTested: 'Recognizing complex emotional subtext',
        expectedResponse: 'There is a history of power imbalance or control; the character may feel humiliated, dependent, or resentful; acceptance comes with emotional cost',
        commonErrors: [
          'Thinking they\'re simply grateful or polite',
          'Not recognizing the tension in the interaction',
          'Missing the implications of power dynamics',
          'Confusing surface politeness with genuine comfort'
        ],
        followUp: 'What does the body language tell us that dialogue might not?'
      },
      {
        id: 'infer-005',
        question: 'A character "had learned long ago not to ask questions." What can we infer about their past experiences?',
        skillTested: 'Drawing inferences about history from present behavior',
        expectedResponse: 'They have experienced punishment, dismissal, or harm when asking questions; they come from an environment where curiosity was unwelcome or dangerous',
        commonErrors: [
          'Simply saying they are quiet',
          'Not connecting past to present behavior',
          'Underestimating the severity of the implication',
          'Failing to recognize this as a survival mechanism'
        ],
        followUp: 'What kind of environment would produce this learned behavior?'
      },
      {
        id: 'infer-006',
        question: 'A narrator describes childhood home in cold, sparse language, but earlier described current home with warmth and detail. What does this contrast suggest?',
        skillTested: 'Using contrasts to infer emotional truth',
        expectedResponse: 'The childhood home was emotionally empty, neglectful, or traumatic; the current home represents safety, comfort, and belonging they lacked',
        commonErrors: [
          'Simply noting the different descriptions without interpreting',
          'Confusing physical details with emotional truth',
          'Not recognizing deliberate contrast as technique',
          'Missing the autobiographical implications'
        ],
        followUp: 'How does the language choice itself reinforce the inference?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-inf-001',
        misconception: 'Inference is the same as explicit information; if it\'s not directly stated, it\'s not a valid inference',
        evidence: 'Students confuse textual evidence with inference, thinking they can only answer if the text explicitly states something',
        correction: 'Inference bridges the gap between stated details and unstated meanings. Writers intentionally leave gaps for readers to fill using evidence. An inference is valid if supported by textual details, even if never directly stated',
        activities: [
          'Gap-fill exercises where students identify what is NOT stated but can be deduced',
          'Comparison activities: explicit statement vs. inference from same passage',
          'Detective work: hiding a crucial fact and requiring inference from clues',
          'Progressive layers: showing how multiple details combine to create an inference'
        ]
      },
      {
        id: 'misc-inf-002',
        misconception: 'Any inference is acceptable as long as you provide any evidence',
        evidence: 'Students make wild inferences loosely connected to text, or make inferences that contradict textual evidence',
        correction: 'Inferences must be grounded in textual evidence and must not contradict explicit information. The evidence must logically support the inference. Multiple inferences should be consistent with each other',
        activities: [
          'Validity testing: present inferences and ask students to rank by evidence strength',
          'Contradiction detection: highlight inferences that conflict with stated facts',
          'Evidence chains: require students to show the logical path from detail to inference',
          'Counter-inferences: practice arguing why an inference is NOT supported'
        ]
      },
      {
        id: 'misc-inf-003',
        misconception: 'Emotional or psychological inferences are vague and impossible to defend',
        evidence: 'Students avoid making inferences about character states, motivations, or relationships, thinking they\'re too subjective',
        correction: 'Emotional inferences are deeply grounded in linguistic choices: word choice, syntax, punctuation, physical details, and behavior. These are analyzable, defensible, and often the most important inferences in literature',
        activities: [
          'Emotion terminology building: create precise vocabulary for emotional states',
          'Behavioral analysis: translate physical actions into emotional meanings',
          'Linguistic markers: identify specific language patterns that signal emotion',
          'Multi-evidence inferences: require combining 3+ details to defend emotional readings'
        ]
      },
      {
        id: 'misc-inf-004',
        misconception: 'Inferences about the past require explicit backstory; you can\'t infer history from present details',
        evidence: 'Students miss rich opportunities to infer character history from their present behaviors, attitudes, and relationships',
        correction: 'Character history is revealed through present behavior, choices, and reactions. Small details—learned behaviors, reflexive responses, avoidances—tell us much about someone\'s past. Writers use present action as window to history',
        activities: [
          'Character archaeology: excavating history from behavior',
          'Learned behavior identification: spotting what experience taught a character',
          'Reaction analysis: understanding why a character reacts as they do',
          'Backstory construction: creating plausible histories that explain present behavior'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-inf-001',
        title: 'Structured Inference Framework',
        targetSkill: 'Moving from evidence to inference systematically',
        duration: '3-4 lessons (45 min each)',
        description: 'Teach students a explicit three-step process: (1) Identify specific textual detail, (2) Translate detail into what it suggests, (3) Connect suggestion to broader inference. Use sentence stems and scaffolds initially, gradually removing support. Model with think-alouds showing inference failures and corrections.',
        resources: [
          'Inference scaffold sheet with sentence starters',
          'Annotated model texts showing inference chains',
          'Comparison chart: detail vs. inference vs. reader reaction',
          'Video modeling of expert thinking process'
        ],
        successCriteria: [
          'Student can identify textual details that support an inference',
          'Student can articulate the logical bridge between detail and inference',
          'Student can defend an inference against challenge',
          'Student creates inferences that are consistent with overall textual meaning'
        ]
      },
      {
        id: 'strat-inf-002',
        title: 'Close Reading and Pattern Recognition',
        targetSkill: 'Spotting cumulative evidence and patterns',
        duration: '2-3 lessons',
        description: 'Teach students to read for patterns rather than isolated details. Use highlighting exercises to color-code related details (all references to time, all nervous behaviors, all cold imagery). Show how patterns emerge that support stronger inferences than single details. Practice with texts of increasing complexity.',
        resources: [
          'Highlighted sample texts showing pattern types',
          'Pattern identification worksheets',
          'Comparison: single detail vs. multiple details supporting same inference',
          'Pattern-to-inference translation exercises'
        ],
        successCriteria: [
          'Student can identify 5+ related textual details',
          'Student recognizes patterns that repeat across a text',
          'Student connects pattern to deeper meaning',
          'Student understands that cumulative evidence strengthens inference'
        ]
      },
      {
        id: 'strat-inf-003',
        title: 'Reverse Engineering: Inference to Evidence',
        targetSkill: 'Validating and defending inferences',
        duration: '2 lessons',
        description: 'Present a strong inference (e.g., "The character is deeply lonely") and have students find textual evidence that supports it. This reverses normal process and helps students understand what valid inference looks like. Create a class bank of strong inferences with supporting evidence. Gradually transition to making inferences and justifying them.',
        resources: [
          'Inference statements (teacher-selected)',
          'Evidence hunt worksheets',
          'Strength-ranking exercises for evidence',
          'Inference + evidence pairing activities'
        ],
        successCriteria: [
          'Student can locate evidence for a given inference',
          'Student can rank evidence by strength',
          'Student can articulate why evidence supports an inference',
          'Student applies this reasoning to self-generated inferences'
        ]
      },
      {
        id: 'strat-inf-004',
        title: 'Dialogue and Debate: Testing Inferences',
        targetSkill: 'Refining inferences through collaborative reasoning',
        duration: '2-3 lessons',
        description: 'Engage students in structured discussions about what a character\'s behavior means. Introduce competing inferences and have students argue which is better supported. Model respectful disagreement and evidence-based reasoning. Use talking points and argument frames. This develops confidence in defending complex interpretations.',
        resources: [
          'Argument frames for inference discussions',
          'Evidence evaluation rubrics',
          'Model dialogues showing strong reasoning',
          'Competing inference scenarios'
        ],
        successCriteria: [
          'Student can articulate alternative inferences',
          'Student can compare strength of evidence for different readings',
          'Student can revise inferences based on new evidence',
          'Student engages respectfully with different interpretations'
        ]
      }
    ],
    progressIndicators: [
      'Student identifies textual details without prompting',
      'Student articulates what details suggest about character or situation',
      'Student makes inferences that are supported by multiple details',
      'Student can explain why an inference is or is not valid',
      'Student revises inferences when presented with contradictory evidence',
      'Student makes inferences about complex emotional and psychological states',
      'Student infers character history from present behavior',
      'Student defends inferences against challenge with additional evidence'
    ]
  },
  {
    id: 'lang-analysis-techniques',
    title: 'Language Analysis — Identifying Techniques',
    board: 'GCSE/A-Level',
    subject: 'English Language',
    targetArea: 'Recognizing and naming language techniques accurately',
    diagnosticQuestions: [
      {
        id: 'tech-001',
        question: 'Read: "The crowd roared like a single beast." What technique is used here, and what is its effect?',
        skillTested: 'Identifying and explaining metaphor/simile',
        expectedResponse: 'This is a simile (comparison using "like"). It suggests the crowd acts as a unified, animalistic force, emphasizing their power and lack of individual agency',
        commonErrors: [
          'Calling it a metaphor when it uses "like"',
          'Identifying the technique but not the effect',
          'Describing the comparison without analyzing its impact',
          'Confusing simile with personification'
        ],
        followUp: 'How would the effect change if it said "The crowd was a single beast" instead?'
      },
      {
        id: 'tech-002',
        question: 'Analyze: "The silence screamed at me from every corner." What is happening linguistically here?',
        skillTested: 'Identifying oxymoron and personification',
        expectedResponse: 'This uses both oxymoron (silence cannot scream) and personification (silence is given human qualities). Together they create paradox—the absence of sound becomes a powerful presence',
        commonErrors: [
          'Only identifying one technique',
          'Missing the contradiction',
          'Naming technique without analyzing effect',
          'Not recognizing this as intensification'
        ],
        followUp: 'Why would an author choose to combine these techniques?'
      },
      {
        id: 'tech-003',
        question: 'What technique is being used in: "I have told you once, twice, three times"?',
        skillTested: 'Identifying repetition and its effect',
        expectedResponse: 'Anaphora or systematic repetition for emphasis. The repeated structure builds intensity and frustration, suggesting exasperation and the weight of accumulated reminders',
        commonErrors: [
          'Calling it alliteration',
          'Not recognizing the pattern',
          'Identifying repetition without considering cumulative effect',
          'Missing the tonal impact'
        ],
        followUp: 'How does the rhythm of this repetition affect the reader?'
      },
      {
        id: 'tech-004',
        question: 'In the phrase "The road less traveled by," what technique creates the effect here?',
        skillTested: 'Identifying word order and inversion effects',
        expectedResponse: 'This uses inversion (inverted syntax/word order). Standard order would be "the less traveled road." The inversion creates a poetic effect and emphasizes "less traveled"',
        commonErrors: [
          'Not recognizing non-standard word order',
          'Thinking it\'s metaphor or symbolism instead',
          'Not understanding why word order matters',
          'Assuming technique only refers to figurative language'
        ],
        followUp: 'What would be lost if we rearranged it to normal word order?'
      },
      {
        id: 'tech-005',
        question: 'How is language being used in: "Peter Piper picked a peck of pickled peppers"?',
        skillTested: 'Identifying alliteration and sound effects',
        expectedResponse: 'This uses extensive alliteration (repetition of the "p" sound). It creates a playful, tongue-twister effect and emphasizes the words, making the phrase memorable and rhythmic',
        commonErrors: [
          'Calling it assonance',
          'Missing the sound pattern entirely',
          'Identifying alliteration but not considering its effect',
          'Not recognizing this as deliberate technique'
        ],
        followUp: 'What does the repeated sound do to how we experience this phrase?'
      },
      {
        id: 'tech-006',
        question: 'What is the effect of: "Children screaming, sirens wailing, cars honking"?',
        skillTested: 'Identifying asyndeton and accumulation',
        expectedResponse: 'Asyndeton (omission of conjunctions) creates a rushed, chaotic effect through short, staccato sentences. The accumulated sounds build a sense of disorder and overwhelm',
        commonErrors: [
          'Calling it a list without recognizing the technique',
          'Not noticing the absent conjunctions',
          'Missing how the structure creates meaning',
          'Treating it as simple description'
        ],
        followUp: 'How would adding "and" between items change the effect?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-tech-001',
        misconception: 'Identifying techniques is the main goal; effect is secondary',
        evidence: 'Students name techniques accurately but cannot explain why an author chose that technique',
        correction: 'Technique identification is just the first step. The real work is understanding why a writer chose this technique. Effect analysis is where students show sophisticated understanding',
        activities: [
          'Effect-first analysis: describe effect, then identify technique',
          'Technique substitution: what if a different technique was used?',
          'Missing technique: reading without techniques, then with, comparing',
          'Effect mapping: tracking how a technique creates cumulative impact'
        ]
      },
      {
        id: 'misc-tech-002',
        misconception: 'All figurative language is essentially the same',
        evidence: 'Students confuse simile and metaphor; don\'t recognize distinctions',
        correction: 'Each technique creates subtly different effects. Understanding these distinctions allows precise analysis',
        activities: [
          'Technique contrast: same idea expressed with different techniques',
          'Precision practice: matching technique to definition',
          'Sentence transformation: changing metaphor to simile',
          'Technique recognition games'
        ]
      },
      {
        id: 'misc-tech-003',
        misconception: 'Technique is limited to figurative language',
        evidence: 'Students miss sentence structure, word order, punctuation choices',
        correction: 'Techniques encompass all linguistic choices: grammar, syntax, punctuation, word choice, sound patterns',
        activities: [
          'Punctuation analysis',
          'Sentence length variation',
          'Word order exercises',
          'Grammar as meaning'
        ]
      },
      {
        id: 'misc-tech-004',
        misconception: 'There\'s one correct technique name for each technique',
        evidence: 'Students panic if they\'re unsure of exact terminology',
        correction: 'Terminology can vary. What matters is precise description. Analysis quality matters more than terminology precision',
        activities: [
          'Analysis without terminology',
          'Multiple naming approaches',
          'Terminology building',
          'Flexibility practice'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-tech-001',
        title: 'Technique Library and Recognition',
        targetSkill: 'Accurate identification of major techniques',
        duration: '4-5 lessons',
        description: 'Build a comprehensive technique library with examples. Create visual posters showing technique definition, example, and effect. Use deliberate repetition to build automatic recognition. Play games where students match techniques to examples.',
        resources: [
          'Technique definition sheets',
          'Visual posters',
          'Card games',
          'Annotated texts',
          'Technique checklist'
        ],
        successCriteria: [
          'Student can accurately name 15+ techniques',
          'Student recognizes techniques in unseen text',
          'Student distinguishes between similar techniques',
          'Student identifies techniques across text types'
        ]
      },
      {
        id: 'strat-tech-002',
        title: 'From Identification to Effect Analysis',
        targetSkill: 'Moving beyond naming to explaining impact',
        duration: '3-4 lessons',
        description: 'Use structured sentence frames to connect technique to effect. Start with obvious techniques, then progress to subtle ones. Model how to articulate precisely what a reader experiences',
        resources: [
          'Effect analysis sentence frames',
          'Model analyses',
          'Reader response mapping',
          'Technique-to-effect flowcharts',
          'Comparative analysis'
        ],
        successCriteria: [
          'Student explains effect for each technique',
          'Student connects effect to author\'s purpose',
          'Student articulates specific reader experience',
          'Student analyzes how techniques work together'
        ]
      },
      {
        id: 'strat-tech-003',
        title: 'Close Reading with Annotation',
        targetSkill: 'Sustained technique identification in texts',
        duration: '2-3 lessons',
        description: 'Teach systematic annotation: highlight technique, label in margin, write effect briefly. Model on passages. Create annotation codes. Read passages multiple times, each focusing on different technique types.',
        resources: [
          'Annotation code legend',
          'Model annotated texts',
          'Annotation practice sheets',
          'Multi-pass reading guides',
          'Student annotation comparison'
        ],
        successCriteria: [
          'Student identifies 5+ techniques per page',
          'Student annotates consistently',
          'Student provides clear effect explanations',
          'Student catches techniques on first reading'
        ]
      },
      {
        id: 'strat-tech-004',
        title: 'Technique Choice and Author\'s Purpose',
        targetSkill: 'Understanding why authors choose specific techniques',
        duration: '2-3 lessons',
        description: 'Examine passages written multiple ways with different techniques. Discuss what each version achieves. Have students revise passages, replacing techniques and analyzing changes. Discuss author\'s purpose as context.',
        resources: [
          'Multi-version passages',
          'Purpose cards',
          'Revision exercises',
          'Case studies',
          'Prediction practice'
        ],
        successCriteria: [
          'Student explains why a technique suits its context',
          'Student predicts likely techniques for purposes',
          'Student understands technique choice as deliberate',
          'Student adapts own writing with purposeful technique choices'
        ]
      }
    ],
    progressIndicators: [
      'Student identifies techniques in guided text',
      'Student identifies techniques in independent reading',
      'Student names techniques using precise terminology',
      'Student explains effect for each technique',
      'Student recognizes subtle technique use',
      'Student understands techniques across text types',
      'Student connects technique choice to author\'s purpose',
      'Student applies technique knowledge in own writing'
    ]
  },
  {
    id: 'lang-analysis-effects',
    title: 'Language Analysis — Explaining Effects',
    board: 'GCSE/A-Level',
    subject: 'English Language',
    targetArea: 'Sophisticated analysis of how techniques create meaning',
    diagnosticQuestions: [
      {
        id: 'effect-001',
        question: 'Why does the author use short, punchy sentences like "She left. He didn\'t follow. The silence was absolute."?',
        skillTested: 'Analyzing sentence structure and psychological effect',
        expectedResponse: 'Short sentences create a staccato rhythm, suggesting shock, finality, and emotional distance. The abruptness mirrors the character\'s emotions. The final statement about silence hits harder due to the pattern preceding it',
        commonErrors: [
          'Simply saying it creates emphasis without explaining how',
          'Not connecting structure to meaning/emotion',
          'Missing the contrast with longer sentences elsewhere',
          'Not recognizing the rhythm as intentional'
        ],
        followUp: 'How would the effect change if these were longer, complex sentences?'
      },
      {
        id: 'effect-002',
        question: 'A text repeatedly uses "pale," "cold," "gray," and "empty" to describe a setting. What is the cumulative effect?',
        skillTested: 'Recognizing color and descriptor patterns',
        expectedResponse: 'The language creates a sense of desolation, emotional emptiness, or loss. The repeated emphasis on lack and absence builds an atmosphere of depression, abandonment, or death',
        commonErrors: [
          'Simply listing the descriptive words',
          'Not recognizing the pattern as intentional',
          'Missing the emotional/psychological dimension',
          'Treating imagery as purely visual'
        ],
        followUp: 'What emotional state does this language placement reflect?'
      },
      {
        id: 'effect-003',
        question: 'Why might an author use complex, lengthy sentences filled with parentheses and multiple clauses?',
        skillTested: 'Understanding how syntax creates reader experience',
        expectedResponse: 'Complex sentences create intellectual demand, slowness, or the sense of an overwhelmed mind. The reader must work to parse meaning, mirroring cognitive difficulty or emotional confusion',
        commonErrors: [
          'Assuming complexity always equals quality',
          'Not recognizing that style has psychological effects',
          'Missing how form mirrors content',
          'Thinking sentence length is about clarity rather than effect'
        ],
        followUp: 'How might a character\'s mental state be reflected in sentence structure?'
      },
      {
        id: 'effect-004',
        question: 'What is the effect of repeating a word or phrase three times versus once?',
        skillTested: 'Understanding how repetition accumulates impact',
        expectedResponse: 'Single use highlights importance; three uses intensifies the message, drives it home, builds emotional force. The repetition suggests obsession, urgency, or the weight of accumulated emphasis',
        commonErrors: [
          'Thinking repetition is always positive or always effective',
          'Not considering context and purpose',
          'Missing how repetition can suggest obsession or desperation',
          'Failing to explain the cumulative build'
        ],
        followUp: 'When might three repetitions feel excessive or irritating?'
      },
      {
        id: 'effect-005',
        question: 'How does using first-person versus third-person narration affect the reader\'s relationship to a character?',
        skillTested: 'Understanding narrative perspective effects',
        expectedResponse: 'First-person creates intimacy and immediacy; the reader experiences the character\'s thoughts directly. Third-person creates distance and allows multiple perspectives. First-person makes the reader complicit; third-person creates opportunity for irony',
        commonErrors: [
          'Thinking perspective is merely technical without emotional impact',
          'Not considering reader positioning',
          'Missing how perspective shapes interpretation',
          'Confusing narrator reliability with point of view'
        ],
        followUp: 'How would the reader\'s sympathy change if we switched perspective?'
      },
      {
        id: 'effect-006',
        question: 'Why would an author use predominantly nouns rather than verbs?',
        skillTested: 'Understanding how word class choices affect agency and tone',
        expectedResponse: 'Nominalization (noun-heavy language) can create distance, abstraction, or lack of accountability. It makes events seem inevitable or removes human agency. It sounds formal or bureaucratic',
        commonErrors: [
          'Not recognizing that word choice includes word class',
          'Missing how nominalization obscures agency',
          'Failing to connect language to meaning/tone',
          'Not considering what\'s emphasized vs. backgrounded'
        ],
        followUp: 'What if we changed this to active verb form—how would that shift meaning?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-effect-001',
        misconception: 'Effect analysis is just describing what emotion you feel',
        evidence: 'Students write "this is sad" or "this is scary" without explaining the linguistic mechanism',
        correction: 'Effect analysis requires explaining the specific connection between technique and the reader\'s response. "The short sentences and repeated "no" create urgency and finality, making the reader feel despair" is analysis',
        activities: [
          'Effect expansion: taking simple responses and breaking down the mechanism',
          'Linguistic bridge-building: connecting specific choices to specific effects',
          'Evidence for effects: finding textual proof for claimed responses',
          'Comparison: distinguishing personal response from effect analysis'
        ]
      },
      {
        id: 'misc-effect-002',
        misconception: 'All techniques have the same effect regardless of context',
        evidence: 'Students claim repetition "always creates emphasis" without considering context',
        correction: 'Context determines effect. Repetition can create emphasis, rhythm, obsession, or tedium depending on context. Analysis requires considering the specific moment and surrounding language',
        activities: [
          'Same technique, different contexts: analyzing identical techniques in different texts',
          'Context-dependent analysis: showing how surrounding language changes effect',
          'Technique mutation: why same technique feels powerful here, odd there',
          'Purpose consideration: linking technique choice and context to author\'s intent'
        ]
      },
      {
        id: 'misc-effect-003',
        misconception: 'Explaining effect means using vague language',
        evidence: 'Students avoid precise analytical language, using informal responses instead',
        correction: 'Effect analysis requires precise, technical language. Compare "this makes you feel stuff" to "the asyndeton creates a breathless, chaotic effect, propelling the reader through the chaos." Develop sophisticated vocabulary',
        activities: [
          'Effect vocabulary building: creating precise terminology',
          'Vague-to-precise translation: refining imprecise descriptions',
          'Model analysis: reading sophisticated effect analysis',
          'Peer translation: helping each other find more precise language'
        ]
      },
      {
        id: 'misc-effect-004',
        misconception: 'Effects are universal; all readers experience language the same way',
        evidence: 'Students assume their personal response is the guaranteed effect',
        correction: 'While techniques create tendencies, readers interpret differently. Analysis should consider likely effects while acknowledging variation. Context clues help determine intended effect',
        activities: [
          'Variation acknowledgment: discussing how different readers respond differently',
          'Intended audience analysis: considering effects in relation to specific audience',
          'Cultural context: understanding how background shapes response',
          'Disagreement analysis: respectfully discussing different interpretations'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-effect-001',
        title: 'Technique to Effect Pipeline',
        targetSkill: 'Moving from identification to effect explanation systematically',
        duration: '3-4 lessons',
        description: 'Teach a model: (1) Identify technique, (2) Name the effect, (3) Explain why the language creates that effect, (4) Connect to author\'s purpose. Use consistent sentence frames. Model extensively. Use same passage multiple times, analyzing different techniques',
        resources: [
          'Effect analysis sentence frames',
          'Step-by-step anchor charts',
          'Highlighted model texts',
          'Think-aloud recordings',
          'Worked examples at different complexity levels'
        ],
        successCriteria: [
          'Student identifies technique',
          'Student names the effect clearly',
          'Student explains the causal connection',
          'Student connects effect to author\'s purpose'
        ]
      },
      {
        id: 'strat-effect-002',
        title: 'Effect Vocabulary Development',
        targetSkill: 'Precise, sophisticated articulation of effects',
        duration: '2-3 lessons',
        description: 'Build extensive effect vocabulary: pace, rhythm, tone, atmosphere, perspective, tension. Create a class glossary. Practice replacing vague language with precise alternatives. Play word substitution games. Read critical analysis and identify effect vocabulary',
        resources: [
          'Effect vocabulary glossary',
          'Thesaurus of effect terms',
          'Vague-to-precise transformation exercises',
          'Model analyses with vocabulary highlighted',
          'Critical readings showing sophisticated vocabulary'
        ],
        successCriteria: [
          'Student uses precise effect vocabulary consistently',
          'Student demonstrates understanding of nuanced distinctions',
          'Student applies vocabulary across different texts',
          'Student\'s analysis language sounds increasingly sophisticated'
        ]
      },
      {
        id: 'strat-effect-003',
        title: 'Comparative Effect Analysis',
        targetSkill: 'Understanding how different techniques create different effects',
        duration: '2-3 lessons',
        description: 'Present same passage with different linguistic choices. Analyze the different effects each creates. Have students revise passages, changing one technique at a time and tracking how effect changes. This builds understanding that form creates meaning',
        resources: [
          'Multi-version passages',
          'Revision exercises with before/after analysis',
          'Comparison charts',
          'Author revision case studies',
          'Student revision portfolio'
        ],
        successCriteria: [
          'Student recognizes that different techniques create different effects',
          'Student predicts likely effects before seeing new version',
          'Student explains why one technique creates a particular effect',
          'Student makes deliberate technique choices in own writing'
        ]
      },
      {
        id: 'strat-effect-004',
        title: 'Contextual Effect Analysis',
        targetSkill: 'Understanding effects in context rather than in isolation',
        duration: '3-4 lessons',
        description: 'Emphasize that effect depends on context: surrounding sentences, passage purpose, audience, genre expectations. Teach students to consider "what comes before," "what comes after," and "why is this passage here?" Analyze same technique in different texts',
        resources: [
          'Passages with technique removed',
          'Technique impact maps',
          'Before/after context analysis',
          'Genre and convention analysis',
          'Purpose-driven structure analysis'
        ],
        successCriteria: [
          'Student considers surrounding context in analysis',
          'Student explains how context affects interpretation',
          'Student revises interpretations when given more context',
          'Student predicts likely effects based on contextual clues'
        ]
      }
    ],
    progressIndicators: [
      'Student explains effect for identified techniques with sentence frames',
      'Student explains effects independently without frames',
      'Student uses precise effect vocabulary consistently',
      'Student considers multiple possible effects and discusses likelihood',
      'Student connects effects to author\'s purpose',
      'Student understands how context shapes effect',
      'Student predicts effects of unfamiliar techniques',
      'Student applies effect analysis to own writing'
    ]
  },
  {
    id: 'structure-analysis',
    title: 'Structure Analysis',
    board: 'GCSE/A-Level',
    subject: 'English Literature & Language',
    targetArea: 'Understanding how texts are organized and why structure matters',
    diagnosticQuestions: [
      {
        id: 'struct-001',
        question: 'Why might a story begin with the ending? What effect does this narrative structure create?',
        skillTested: 'Understanding non-linear narrative',
        expectedResponse: 'Beginning with the ending creates foreknowledge and allows for mystery. It reduces suspense while increasing dramatic irony. The reader understands characters\' fates before understanding their journeys',
        commonErrors: [
          'Not recognizing this as a structural choice',
          'Thinking it\'s a mistake or weakness',
          'Missing the effect on reader knowledge',
          'Not considering author\'s purpose'
        ],
        followUp: 'How would the reader\'s experience differ with chronological telling?'
      },
      {
        id: 'struct-002',
        question: 'A text alternates between past and present, switching perspective each time. What structural effect does this create?',
        skillTested: 'Analyzing multi-perspective and temporal structure',
        expectedResponse: 'The alternation creates layers of understanding and raises questions about how past influences present. It positions two perspectives as equally important. The back-and-forth rhythm creates a sense of dialogue',
        commonErrors: [
          'Simply describing what the structure is',
          'Missing the pattern\'s significance',
          'Not considering how structure shapes reader understanding',
          'Treating structure as merely technical'
        ],
        followUp: 'What connections do you make because of this alternating structure?'
      },
      {
        id: 'struct-003',
        question: 'Why does a poem repeat the same line at the beginning and end? What structural purpose does this serve?',
        skillTested: 'Understanding cyclical structure',
        expectedResponse: 'The repetition creates a sense of return or closure, suggesting the speaker has returned to where they began, potentially with new understanding. It can feel satisfying or ironic',
        commonErrors: [
          'Not recognizing the structural repetition as intentional',
          'Missing the effect of cyclical return',
          'Treating the repeated line as having the same meaning both times',
          'Not considering how repetition affects reading'
        ],
        followUp: 'Has the meaning of this line changed by the poem\'s end?'
      },
      {
        id: 'struct-004',
        question: 'Why might a long, complex paragraph be followed by a very short one—just one sentence? What is the structural effect?',
        skillTested: 'Understanding paragraph length effects',
        expectedResponse: 'The short sentence provides relief and emphasis through contrast. It slows the reader, forces attention, and often signals something significant. The dramatic shift in pace creates a moment of clarity or shock',
        commonErrors: [
          'Not recognizing that paragraph length is a structural choice',
          'Missing the effect of contrast',
          'Not understanding that short doesn\'t mean simple',
          'Treating paragraph length as accident'
        ],
        followUp: 'What if all paragraphs were this short? How would effect change?'
      },
      {
        id: 'struct-005',
        question: 'A text is divided into multiple short sections, each with its own heading. How does this sectioning shape how we read?',
        skillTested: 'Understanding text division effects',
        expectedResponse: 'Sections create natural pauses, allow readers to stop and resume, and can signal thematic shifts. Headings provide interpretation guides. The sectioning breaks content into digestible units and emphasizes certain ideas',
        commonErrors: [
          'Thinking sections are merely organizational',
          'Not recognizing headings as interpretive guides',
          'Missing how breaks affect pacing',
          'Not considering what the structure emphasizes'
        ],
        followUp: 'What would change if all these sections were merged into one continuous text?'
      },
      {
        id: 'struct-006',
        question: 'Why do many stories build to a climax and then resolve quickly? How does this structure shape tension?',
        skillTested: 'Understanding conventional narrative structure',
        expectedResponse: 'The three-act structure builds reader engagement and creates a satisfying arc. The rapid resolution after climax prevents exhaustion and provides release from tension. It creates psychological satisfaction',
        commonErrors: [
          'Not recognizing the three-act structure',
          'Not understanding how structure creates and releases tension',
          'Thinking structure is just convention without effect',
          'Missing the psychological satisfaction it provides'
        ],
        followUp: 'What would happen if the climax came very early? If it never came?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-struct-001',
        misconception: 'Structure is about organization; it\'s separate from meaning-making',
        evidence: 'Students discuss structure only in technical terms without considering its effect',
        correction: 'Structure is a fundamental meaning-making tool. How a text is organized shapes how readers understand it. The order of information, the breaks, the pacing—all of these create meaning',
        activities: [
          'Restructuring exercises: reorganizing content and noting how meaning changes',
          'Effect-driven structure analysis: asking what effect the structure creates',
          'Comparison: same content in different structures',
          'Structure mapping: visually showing a text\'s architecture'
        ]
      },
      {
        id: 'misc-struct-002',
        misconception: 'Non-linear narratives are confusing; chronological is always better',
        evidence: 'Students dismiss non-linear structures as flawed',
        correction: 'Non-linear structures serve specific purposes: creating mystery, developing themes, positioning perspective. They\'re not better or worse; they\'re different tools for different effects',
        activities: [
          'Non-linear structure case studies',
          'Narrative ordering exercises',
          'Student structure experiments',
          'Appreciation of complexity'
        ]
      },
      {
        id: 'misc-struct-003',
        misconception: 'You can analyze structure only after understanding content',
        evidence: 'Students tend to read for content first and ignore structural features',
        correction: 'Structure should be analyzed from the first reading. Notice what comes first, what comes last, what\'s emphasized. Structure is part of content, not separate',
        activities: [
          'Structure-first reading',
          'Sentence-level structure analysis',
          'Visual structure mapping',
          'Predictive structure analysis'
        ]
      },
      {
        id: 'misc-struct-004',
        misconception: 'There are only a few standard structures; everything else is just experimenting',
        evidence: 'Students lack vocabulary for describing diverse structural approaches',
        correction: 'While some structures are conventional, infinite variations exist. Develop vocabulary for describing structural innovations. Understand the full range of possibilities',
        activities: [
          'Structure taxonomy building',
          'Innovation analysis',
          'Structural vocabulary building',
          'Genre and structure exploration'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-struct-001',
        title: 'Structural Mapping and Visualization',
        targetSkill: 'Recognizing and articulating structure clearly',
        duration: '2-3 lessons',
        description: 'Teach students to map text structure visually: timeline for chronological events, flowchart for cause-effect, layers for nested narratives. Create visual outlines. Use physical arrangement. This kinesthetic approach helps students grasp patterns',
        resources: [
          'Timeline templates',
          'Cause-effect flowcharts',
          'Pyramid diagrams',
          'Layer diagrams',
          'Student-created structure maps'
        ],
        successCriteria: [
          'Student can identify major structural divisions',
          'Student can create accurate visual map',
          'Student understands how parts relate to whole',
          'Student can explain structure in spatial terms'
        ]
      },
      {
        id: 'strat-struct-002',
        title: 'Restructuring Exercises',
        targetSkill: 'Understanding how structure shapes meaning',
        duration: '3-4 lessons',
        description: 'Take a passage and reorganize it in different ways. Read each version and discuss how meaning changes. Have students predict what will happen next based on structure. Discuss author\'s choices',
        resources: [
          'Passages reorganized multiple ways',
          'Restructuring exercises',
          'Prediction worksheets',
          'Justification exercises',
          'Student restructuring projects'
        ],
        successCriteria: [
          'Student recognizes how different structures create different effects',
          'Student understands arrangement as authorial choice',
          'Student predicts likely structures for stated purposes',
          'Student articulates connection between structure and meaning'
        ]
      },
      {
        id: 'strat-struct-003',
        title: 'Structure Pattern Recognition',
        targetSkill: 'Identifying common structures and their conventions',
        duration: '2-3 lessons',
        description: 'Teach common structures: three-act narrative, hero\'s journey, sonnet structure, flashback structure, frame narrative, parallel structure. Provide multiple examples. Play recognition games. Discuss how genre and form conventions shape structure',
        resources: [
          'Structure pattern cards',
          'Multiple texts exemplifying each structure',
          'Matching games',
          'Genre and structure charts',
          'Comparison of how same structure appears across genres'
        ],
        successCriteria: [
          'Student identifies common structures',
          'Student understands genre influences on structure',
          'Student recognizes structural variations',
          'Student discusses why structures suit purposes'
        ]
      },
      {
        id: 'strat-struct-004',
        title: 'Effect-Driven Structure Analysis',
        targetSkill: 'Analyzing what structure accomplishes',
        duration: '3-4 lessons',
        description: 'For each structural element, ask: "What does this accomplish?" Model how experts question structure. Develop language for articulating effects precisely. Progress from obvious to subtle effects',
        resources: [
          'Effect analysis prompts',
          'Model think-alouds',
          'Effect vocabulary specific to structure',
          'Comparison of structural approaches',
          'Purpose-driven structure analysis'
        ],
        successCriteria: [
          'Student explains effect of each major structural feature',
          'Student connects structure to author\'s purpose',
          'Student discusses how structure shapes reader experience',
          'Student uses precise language for structural effects'
        ]
      }
    ],
    progressIndicators: [
      'Student identifies major structural divisions',
      'Student creates accurate visual representation of structure',
      'Student recognizes common structural patterns',
      'Student understands how structure shapes reading experience',
      'Student articulates effects of structural choices',
      'Student connects structure to author\'s purpose',
      'Student predicts effects of structural reorganization',
      'Student makes intentional structural choices in own writing'
    ]
  },
  {
    id: 'evaluation-skills',
    title: 'Evaluation Skills',
    board: 'GCSE/A-Level',
    subject: 'English Literature & Language',
    targetArea: 'Making and defending judgments about text quality',
    diagnosticQuestions: [
      {
        id: 'eval-001',
        question: 'Do you think this character\'s decision was realistic? Support your judgment with evidence',
        skillTested: 'Making supported judgments about believability',
        expectedResponse: 'Strong response considers: character\'s prior behavior and psychology, circumstances forcing the decision, alternative choices, what the text tells us about their reasoning',
        commonErrors: [
          'Making judgment without evidence',
          'Only citing one piece of evidence',
          'Not considering alternative interpretations',
          'Confusing personal preference with critical evaluation',
          'Ignoring character arc'
        ],
        followUp: 'What would make this decision more or less realistic?'
      },
      {
        id: 'eval-002',
        question: 'Is the ending satisfying? Evaluate based on narrative structure and character development',
        skillTested: 'Evaluating endings against narrative and thematic demands',
        expectedResponse: 'Strong response considers: resolution of conflicts, character arc completion, alignment with tone/genre, whether it feels earned, thematic coherence',
        commonErrors: [
          'Confusing satisfying with happy',
          'Not distinguishing between personal preference and effectiveness',
          'Ignoring genre conventions',
          'Missing thematic requirements',
          'Making vague judgments'
        ],
        followUp: 'What narrative requirements must an ending meet to feel satisfying?'
      },
      {
        id: 'eval-003',
        question: 'How effective is this author\'s use of metaphor? Consider frequency, originality, and coherence',
        skillTested: 'Evaluating technique effectiveness across multiple criteria',
        expectedResponse: 'Strong response considers: are metaphors fresh or clichéd? Do they recur coherently? Do they enhance meaning or distract? Are they appropriate to context and purpose?',
        commonErrors: [
          'Simple assertion of effectiveness without criteria',
          'Evaluating only based on personal taste',
          'Not considering coherence or pattern',
          'Missing the difference between technically present and effective',
          'Not acknowledging text-dependent nature'
        ],
        followUp: 'Are these metaphors more or less effective than conventional alternatives?'
      },
      {
        id: 'eval-004',
        question: 'Is the dialogue in this scene convincing? What makes dialogue feel authentic or artificial?',
        skillTested: 'Evaluating dialogue authenticity',
        expectedResponse: 'Strong response considers: sentence structure and length variations, vernacular appropriateness, subtext and what\'s unsaid, character voice distinctiveness, natural pauses and interruptions',
        commonErrors: [
          'Thinking dialogue is either realistic or artificial',
          'Not recognizing stylized dialogue can be effective',
          'Judging by real-life speech rather than literary convention',
          'Missing dialogue\'s multiple functions',
          'Not considering time period and genre conventions'
        ],
        followUp: 'How does this author balance naturalistic speech with literary effect?'
      },
      {
        id: 'eval-005',
        question: 'Evaluate the narrator\'s reliability. What evidence suggests trustworthiness or deception?',
        skillTested: 'Making judgments about narrative reliability',
        expectedResponse: 'Strong response identifies: contradictions in account, gaps in knowledge, acknowledged biases, consistency/inconsistency with external evidence, what readers must verify or doubt',
        commonErrors: [
          'Assuming narrators are reliable unless proven otherwise',
          'Not recognizing unreliability can be intentional and literary',
          'Missing subtle signs of deception',
          'Confusing first-person perspective with reliability',
          'Making judgments without evidence'
        ],
        followUp: 'How does narrative unreliability affect the reader\'s interpretation?'
      },
      {
        id: 'eval-006',
        question: 'Is this text successful in achieving its apparent purpose? What evidence supports your judgment?',
        skillTested: 'Evaluating texts against their purposes',
        expectedResponse: 'Strong response identifies: the text\'s likely purpose, criteria for success, evidence of effectiveness or failure, consideration of intended audience, acknowledgment of trade-offs',
        commonErrors: [
          'Not identifying or considering the purpose',
          'Evaluating against wrong criteria',
          'Confusing personal response with effectiveness',
          'Not considering audience expectations',
          'Making dogmatic assertions'
        ],
        followUp: 'For a different audience, would your evaluation change?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-eval-001',
        misconception: 'Evaluation is just personal opinion; all opinions are equally valid',
        evidence: 'Students make assertions without evidence',
        correction: 'Critical evaluation requires evidence, reasoning, and consideration of multiple perspectives. Literary evaluation uses shared criteria and conventions',
        activities: [
          'Opinion vs. evaluation: distinguishing between and practicing both',
          'Criteria development: what makes an evaluation valid?',
          'Evidence-based evaluation: requiring support for every claim',
          'Counterargument practice: acknowledging other valid interpretations'
        ]
      },
      {
        id: 'misc-eval-002',
        misconception: 'Evaluation means finding flaws; successful evaluation criticizes',
        evidence: 'Students approach evaluation as fault-finding',
        correction: 'Strong evaluation considers both strengths and weaknesses. Appreciation of strengths is as important as identifying limitations',
        activities: [
          'Balanced evaluation practice',
          'Appreciation exercises',
          'Trade-off analysis',
          'Context-aware evaluation'
        ]
      },
      {
        id: 'misc-eval-003',
        misconception: 'Evaluating effectiveness requires a universal standard',
        evidence: 'Students make absolute claims about what\'s "good"',
        correction: 'Effectiveness is contextual. A technique might be brilliant in one context and misguided in another. Evaluation must account for context',
        activities: [
          'Context-dependent evaluation',
          'Audience-dependent effectiveness',
          'Purpose-driven analysis',
          'Situational assessment'
        ]
      },
      {
        id: 'misc-eval-004',
        misconception: 'Unconventional or experimental texts are automatically flawed',
        evidence: 'Students dismiss innovation',
        correction: 'Experimental approaches can be highly effective. Evaluate against the text\'s goals, not against your expectations. Innovation requires evaluation on its own terms',
        activities: [
          'Experimental literature study',
          'Convention-breaking analysis',
          'Innovation appreciation',
          'Criteria adaptation'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-eval-001',
        title: 'Criteria Development and Evaluation Frameworks',
        targetSkill: 'Building structured approaches to evaluation',
        duration: '3-4 lessons',
        description: 'Teach students to develop evaluation criteria before evaluating. For any judgment, establish: What are we evaluating? What criteria matter? How do we measure success? Create rubrics collaboratively. Use consistent frameworks across texts',
        resources: [
          'Evaluation criteria templates',
          'Rubrics for common evaluation tasks',
          'Criteria development worksheets',
          'Comparison of different criteria sets',
          'Student-created evaluation frameworks'
        ],
        successCriteria: [
          'Student identifies appropriate criteria',
          'Student applies criteria consistently',
          'Student weighs multiple criteria in judgment',
          'Student explains why certain criteria matter'
        ]
      },
      {
        id: 'strat-eval-002',
        title: 'Evidence-Based Evaluation Practice',
        targetSkill: 'Supporting judgments with specific evidence',
        duration: '2-3 lessons',
        description: 'Establish non-negotiable requirement: every evaluative claim requires evidence. Teach evidence hierarchy: specific quotation is strongest, pattern reference is strong, general statement is weakest. Use sentence frames. Provide extensive practice',
        resources: [
          'Evidence requirement non-negotiables',
          'Sentence frames',
          'Model evaluations with evidence highlighted',
          'Evidence strength ranking',
          'Weak-to-strong revision'
        ],
        successCriteria: [
          'Student provides evidence for every claim',
          'Student selects strongest available evidence',
          'Student connects evidence to evaluation clearly',
          'Student anticipates and addresses counterarguments'
        ]
      },
      {
        id: 'strat-eval-003',
        title: 'Perspective-Taking and Contextual Evaluation',
        targetSkill: 'Considering context and multiple viewpoints',
        duration: '3-4 lessons',
        description: 'Teach students to ask: For whom is this effective? In what context? For what purpose? Have students evaluate same text from different perspectives. Discuss how audience, time period, genre, and purpose shape effectiveness',
        resources: [
          'Perspective-taking prompts',
          'Audience analysis worksheets',
          'Historical context research',
          'Genre convention explication',
          'Same-text different-context evaluation'
        ],
        successCriteria: [
          'Student identifies relevant contexts',
          'Student adjusts evaluation based on context',
          'Student acknowledges validity of different evaluations',
          'Student makes nuanced judgments'
        ]
      },
      {
        id: 'strat-eval-004',
        title: 'Evaluative Discussion and Debate',
        targetSkill: 'Defending evaluations and considering counterarguments',
        duration: '2-3 lessons',
        description: 'Engage students in structured evaluative discussions. Present competing evaluations and have students argue for/against. Model respectful disagreement. Teach students to acknowledge strong points while maintaining their position',
        resources: [
          'Debate prompts',
          'Evaluation comparison exercises',
          'Argument construction frames',
          'Counterargument response strategies',
          'Model evaluative debates'
        ],
        successCriteria: [
          'Student articulates evaluation clearly and defensibly',
          'Student anticipates and addresses counterarguments',
          'Student modifies position with strong evidence',
          'Student engages respectfully with different evaluations'
        ]
      }
    ],
    progressIndicators: [
      'Student makes evaluative judgments (supported or unsupported)',
      'Student supports judgments with textual evidence',
      'Student uses multiple criteria in evaluation',
      'Student acknowledges limitations or counterarguments',
      'Student adjusts evaluation based on context',
      'Student discusses strengths as well as weaknesses',
      'Student makes nuanced, sophisticated evaluations',
      'Student defends evaluations against challenge'
    ]
  },
  {
    id: 'creative-descriptive',
    title: 'Creative Writing — Descriptive Techniques',
    board: 'GCSE/A-Level',
    subject: 'English Creative Writing',
    targetArea: 'Developing vivid, purposeful description in creative writing',
    diagnosticQuestions: [
      {
        id: 'desc-001',
        question: 'Rewrite this sentence with richer description: "The room was dark and cold."',
        skillTested: 'Expanding basic description with sensory detail',
        expectedResponse: 'Strong revision specifies what kind of dark/cold, uses sensory language, creates atmosphere. Example: "Shadow pooled in corners like spilled ink. The cold bit at exposed skin, a predatory chill."',
        commonErrors: [
          'Adding adjectives without specificity',
          'Using clichéd phrases',
          'Over-describing without purpose',
          'Losing original meaning',
          'Adding description that doesn\'t suit tone'
        ],
        followUp: 'What mood or tone does your description create?'
      },
      {
        id: 'desc-002',
        question: 'Describe a character\'s fear without using the word "fear." Show it through physical detail',
        skillTested: 'Using physical detail to convey emotion',
        expectedResponse: 'Strong response shows fear through: trembling hands, shallow breathing, jaw clenching, eyes darting, sweat, stomach tightness. Physical details create emotional understanding',
        commonErrors: [
          'Naming the emotion while claiming not to',
          'Using physical description disconnected from emotion',
          'Focusing only on obvious physical signs',
          'Not ensuring descriptions match the situation',
          'Choosing details that suggest different emotions'
        ],
        followUp: 'How did you choose which physical details to show?'
      },
      {
        id: 'desc-003',
        question: 'Describe a place using not just visual detail but sound, smell, texture, and taste. Make it multi-sensory',
        skillTested: 'Developing multi-sensory, immersive description',
        expectedResponse: 'Strong response engages multiple senses, choosing details that create coherent atmosphere. Example: forest might include "dark shadows, bird song layering, earth-thick smell, damp moss soft underfoot, moisture taste in air"',
        commonErrors: [
          'Forcing senses unnaturally',
          'Overloading description',
          'Sensory details that don\'t match the place',
          'Neglecting some senses',
          'Details that create conflicting atmospheres'
        ],
        followUp: 'Which sensory detail is most important to your description?'
      },
      {
        id: 'desc-004',
        question: 'Describe an object so specifically that a reader could visualize it clearly. What precise details matter most?',
        skillTested: 'Selecting precise, revealing details',
        expectedResponse: 'Strong response focuses on specific, revealing details: particular colors, textures, proportions, unusual characteristics. Example: coffee cup "chipped on rim, stained with permanent ghost, handle worn smooth from thousands of grasps"',
        commonErrors: [
          'Using only obvious details',
          'Over-describing without purpose',
          'Missing distinctive features',
          'Describing what any object of this type would be',
          'Adding generic adjectives'
        ],
        followUp: 'What do your chosen details reveal about the object\'s history or significance?'
      },
      {
        id: 'desc-005',
        question: 'Write a description that reveals character through environment. Don\'t describe the person; describe their space',
        skillTested: 'Using environmental detail to reveal character',
        expectedResponse: 'Strong response selects environmental details that suggest personality, values, habits, emotional state. A teenager\'s room with posters, books, half-finished projects, expensive equipment next to broken things—tells a character story',
        commonErrors: [
          'Describing only physical characteristics',
          'Not selecting details that reveal character meaningfully',
          'Being too explicit about what details suggest',
          'Missing the connection between environment and character',
          'Describing space without considering what it reveals'
        ],
        followUp: 'What assumptions might a visitor make about this person based on their space?'
      },
      {
        id: 'desc-006',
        question: 'Describe the same scene from two different emotional perspectives (joyful and terrified). How does perspective shape what you notice?',
        skillTested: 'Understanding how perspective shapes perception',
        expectedResponse: 'Strong response shows that same scene looks different when described by different emotional states. Bright light becomes harsh or beautiful depending on filter. The joyful person notices beauty; terrified person notices dangers',
        commonErrors: [
          'Describing scene objectively without emotional shaping',
          'Using different descriptions that don\'t feel like same scene',
          'Being too explicit about emotional difference',
          'Not understanding perspective shapes what gets described',
          'Descriptions that feel forced'
        ],
        followUp: 'What does a reader understand about the narrator by reading their description?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-desc-001',
        misconception: 'Good description means using big, fancy adjectives',
        evidence: 'Students write: "absolutely magnificent, gorgeous, breathtakingly beautiful landscape"',
        correction: 'Effective description uses precise, specific language—often simple words. One specific detail outperforms piles of generic adjectives. Quality over quantity; specificity over grandiosity',
        activities: [
          'Adjective elimination: rewriting without adjectives',
          'Precision practice: finding exact right simple word',
          'Cliché replacement: finding alternatives to overworn phrases',
          'Detail elevation: making nouns and verbs do the work'
        ]
      },
      {
        id: 'misc-desc-002',
        misconception: 'Description should be detailed and elaborate in every case',
        evidence: 'Students over-describe everything, slowing pace and losing reader attention',
        correction: 'Description serves purpose. Sometimes a sentence suffices; sometimes a paragraph. Strategic description is more effective than constant detail. Restraint is a virtue',
        activities: [
          'Fast and slow: comparing over-detailed and sparse descriptions',
          'Purpose-driven selection: determining how much description suits purpose',
          'Pacing practice: alternating detailed and sparse passages',
          'Editor exercises: cutting unnecessary description'
        ]
      },
      {
        id: 'misc-desc-003',
        misconception: 'Physical description is most important; emotional description is optional',
        evidence: 'Students focus on appearance and setting, neglecting emotional dimensions',
        correction: 'The most powerful description often conveys emotional or psychological states. Physical detail is the vehicle, not the destination. Description that creates atmosphere and reveals inner life is more effective',
        activities: [
          'Emotional description emphasis',
          'Physical-to-emotional translation',
          'Atmosphere building',
          'Character revelation without stating emotions'
        ]
      },
      {
        id: 'misc-desc-004',
        misconception: 'Description must be "beautiful" or "poetic" to be good',
        evidence: 'Students write prettified description that doesn\'t match tone or purpose',
        correction: 'Description serves the story\'s purpose and tone. Some descriptions should be ugly, harsh, ordinary, mundane. Match description style to tone and purpose',
        activities: [
          'Tone-matching: selecting description that matches various tones',
          'Genre-appropriate description',
          'Ugly description: practicing effective unglamorous description',
          'Tonal consistency: ensuring description supports rather than contradicts tone'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-desc-001',
        title: 'Specific Detail Over Generic Adjectives',
        targetSkill: 'Replacing vague language with precise details',
        duration: '3-4 lessons',
        description: 'Teach the hierarchy: specific noun/verb > concrete detail > generic adjective > abstract descriptor. Model replacing "big beautiful building" with "mansion sprawled across lot, columns cracked from decades of weather." Practice identifying generic descriptions and replacing them. Play "detail detective"',
        resources: [
          'Generic vs. specific comparison examples',
          'Detail replacement worksheets',
          'Model texts with specific details highlighted',
          'Adjective elimination exercises',
          'Student revision projects'
        ],
        successCriteria: [
          'Student minimizes generic adjectives',
          'Student selects specific, revealing details',
          'Student describes with concrete language',
          'Student creates vivid images through detail'
        ]
      },
      {
        id: 'strat-desc-002',
        title: 'Multi-Sensory Description Development',
        targetSkill: 'Engaging all senses or purposefully limiting them',
        duration: '2-3 lessons',
        description: 'Teach sensory awareness and description. Start with single senses, then combine. Use sensory imagery exercises: describe one place through taste only, then sound only, then layering senses. Discuss when multi-sensory is appropriate',
        resources: [
          'Sensory vocabulary lists',
          'Single-sense description exercises',
          'Multi-sensory layering worksheets',
          'Model texts with rich sensory description',
          'Sensory imagery games'
        ],
        successCriteria: [
          'Student includes multiple senses in description',
          'Student chooses sensory details purposefully',
          'Student creates immersive, evocative description',
          'Student understands when sensory limitation is effective'
        ]
      },
      {
        id: 'strat-desc-003',
        title: 'Description as Character and Emotion Revelation',
        targetSkill: 'Using description to show rather than tell',
        duration: '3-4 lessons',
        description: 'Teach that description reveals narrator and character. Environmental detail shows character; physical detail shows emotion; sensory focus shows priorities. Have students describe same place from different emotional perspectives. Practice showing character through environment',
        resources: [
          'Perspective-based description exercises',
          'Character-through-environment practice',
          'Emotion-through-physical-detail worksheets',
          'Narrator voice in description analysis',
          'Inference-from-description discussions'
        ],
        successCriteria: [
          'Student reveals character through description',
          'Student shows emotion through physical detail',
          'Student shapes description to match narrator perspective',
          'Student understands what readers infer from descriptions'
        ]
      },
      {
        id: 'strat-desc-004',
        title: 'Purposeful, Strategic Description',
        targetSkill: 'Using description to serve the story',
        duration: '2-3 lessons',
        description: 'Emphasize that description serves purpose: creating atmosphere, revealing character, moving plot, controlling pacing. Teach students to ask: "Why am I describing this?" Practice alternating detailed and sparse passages. Discuss how description speed affects reader experience',
        resources: [
          'Purpose-driven description frameworks',
          'Fast and slow description comparison',
          'Pacing analysis in model texts',
          'Description editing: cutting and adding strategically',
          'Purpose justification exercises'
        ],
        successCriteria: [
          'Student justifies description choices',
          'Student varies description length purposefully',
          'Student description serves story needs',
          'Student balances detail with pacing and plot'
        ]
      }
    ],
    progressIndicators: [
      'Student uses specific detail rather than generic adjectives',
      'Student engages multiple senses in description',
      'Student creates atmosphere through description',
      'Student reveals character through environmental detail',
      'Student shows emotion through physical detail',
      'Student matches description to tone and purpose',
      'Student balances description with pacing and plot',
      'Student uses description strategically and effectively'
    ]
  },
  {
    id: 'creative-narrative',
    title: 'Creative Writing — Narrative Structure',
    board: 'GCSE/A-Level',
    subject: 'English Creative Writing',
    targetArea: 'Crafting effective narrative structure and pacing',
    diagnosticQuestions: [
      {
        id: 'narr-001',
        question: 'Should your story begin with action or background information? What are the trade-offs?',
        skillTested: 'Understanding different opening strategies',
        expectedResponse: 'Strong response acknowledges trade-offs: action openings grab readers immediately but may lack context; background openings establish world/character but may feel slow. The right choice depends on story needs and intended effect',
        commonErrors: [
          'Assuming action openings are always better',
          'Not recognizing context as potentially interesting',
          'Not considering what readers need to understand',
          'Ignoring that opening sets expectations',
          'Missing the connection between opening and reader engagement'
        ],
        followUp: 'What would readers understand from different opening choices?'
      },
      {
        id: 'narr-002',
        question: 'You\'ve written an exciting climax. How do you pace the falling action after it?',
        skillTested: 'Understanding post-climax pacing and resolution',
        expectedResponse: 'Strong response recognizes that post-climax pacing depends on purpose: quick resolution can feel satisfying; lingering can show consequences. Genre and reader expectations matter',
        commonErrors: [
          'Rushing resolution without showing impact',
          'Over-lingering after climax',
          'Not considering emotional arc',
          'Missing that resolution shows what the story means',
          'Ignoring reader fatigue after intense climax'
        ],
        followUp: 'How long can you sustain reader attention after climax?'
      },
      {
        id: 'narr-003',
        question: 'When should you reveal important information? Early, midway, or late? What determines the best timing?',
        skillTested: 'Understanding information management and revelation timing',
        expectedResponse: 'Strong response recognizes that revelation timing creates mystery, surprise, or dramatic irony. Early revelation allows readers to anticipate; late creates shock. Midway builds complexity. Purpose and effect determine timing',
        commonErrors: [
          'Revealing everything upfront',
          'Withholding information readers need, creating confusion',
          'Revealing at convenient moments rather than purposeful ones',
          'Not considering how early readers understand trajectory',
          'Missing that readers piece together understanding progressively'
        ],
        followUp: 'How would the story change if this information were revealed earlier or later?'
      },
      {
        id: 'narr-004',
        question: 'You have multiple plot threads. How do you weave them together?',
        skillTested: 'Managing multiple narrative strands effectively',
        expectedResponse: 'Strong response recognizes that thread management affects pacing. Introducing threads too quickly overwhelms; pacing allows development. Threads should connect thematically or causally. Timing creates balance',
        commonErrors: [
          'Too many threads introduced at once',
          'Neglecting to develop some threads',
          'Threads feeling disconnected',
          'Uneven pacing due to random thread switching',
          'Not recognizing when threads should resolve'
        ],
        followUp: 'How should these threads converge or interact?'
      },
      {
        id: 'narr-005',
        question: 'Your story includes a moment of calm or reflection. Is this effective pacing or should it be cut?',
        skillTested: 'Understanding pacing variation and slower sections',
        expectedResponse: 'Strong response recognizes that constant high tension exhausts readers. Strategic calm allows processing and sets up later action. The calm section should reveal character, develop relationships, or deepen meaning',
        commonErrors: [
          'Assuming all slow sections are flaws',
          'Not recognizing value of variation',
          'Including reflection that doesn\'t advance understanding',
          'Cutting potentially rich character moments',
          'Failing to ensure calm sections are earned'
        ],
        followUp: 'What does this calm moment accomplish? What would be lost if cut?'
      },
      {
        id: 'narr-006',
        question: 'How do you know when your story should end? What determines the right ending point?',
        skillTested: 'Understanding closure and where stories should stop',
        expectedResponse: 'Strong response recognizes that stories should end when the central question is answered or when the arc feels complete. Continuing past the natural ending point feels forced. The right ending shows what the story means',
        commonErrors: [
          'Continuing well past natural ending',
          'Ending too early before questions are resolved',
          'Multiple false endings',
          'Not recognizing that endings reveal meaning',
          'Ending because of idea exhaustion'
        ],
        followUp: 'What questions does your ending answer or leave open?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-narr-001',
        misconception: 'Good stories are always fast-paced with continuous action',
        evidence: 'Students rush through events without pausing for character development',
        correction: 'Pacing variation is essential. Constant action exhausts readers and prevents understanding. Strategic pacing—alternating intense and calm—creates more effective narratives',
        activities: [
          'Pacing variation analysis in model texts',
          'Pacing mapping: showing acceleration and deceleration',
          'Experimentation: writing same story with different pacing',
          'Reflection section writing'
        ]
      },
      {
        id: 'misc-narr-002',
        misconception: 'Structure means beginning-middle-end; anything else is confusing',
        evidence: 'Students stick rigidly to chronological structure',
        correction: 'While chronological is conventional, many effective structures exist: non-linear, frame narratives, nested stories, in medias res. Structure is a tool; choose structures that serve story needs',
        activities: [
          'Structure variety: reading non-chronological stories',
          'Structure experimentation: writing same story in different structures',
          'Purpose-driven structure: understanding why authors choose structures',
          'Structure matching and effect discussion'
        ]
      },
      {
        id: 'misc-narr-003',
        misconception: 'Backstory should be presented all at once, early in the story',
        evidence: 'Students front-load exposition, creating slow openings',
        correction: 'Backstory should be revealed gradually, woven throughout. Revealing little by little maintains mystery and pacing. Information should become apparent as readers need it',
        activities: [
          'Information drip practice',
          'Natural integration: embedding backstory naturally',
          'Comparison: front-loaded vs. gradual backstory',
          'Mystery maintenance'
        ]
      },
      {
        id: 'misc-narr-004',
        misconception: 'Plot is separate from character',
        evidence: 'Students create plot-driven stories where character feels arbitrary',
        correction: 'Character and plot are inseparable. Character choices drive plot; plot reveals and develops character. Strong narratives integrate them completely',
        activities: [
          'Character-plot integration: showing how character determines plot',
          'Choice analysis: how character would choose differently',
          'Arc alignment: ensuring character arc parallels plot arc',
          'Motivation checking'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-narr-001',
        title: 'Story Structure Frameworks and Variations',
        targetSkill: 'Understanding multiple structures and choosing appropriately',
        duration: '3-4 lessons',
        description: 'Teach conventional three-act structure and variations (five-act, hero\'s journey, non-linear). Read examples of each. Discuss when different structures suit different stories. Have students outline same story in multiple structures',
        resources: [
          'Story structure diagrams',
          'Examples of each structure',
          'Structure variation analysis',
          'Outline exercises',
          'Student structure planning'
        ],
        successCriteria: [
          'Student understands conventional structures',
          'Student recognizes variations in texts',
          'Student chooses structures appropriate to story needs',
          'Student plans story using intentional choices'
        ]
      },
      {
        id: 'strat-narr-002',
        title: 'Pacing and Rhythm Development',
        targetSkill: 'Creating effective variation in narrative pace',
        duration: '2-3 lessons',
        description: 'Teach pacing as intentional choice. Analyze published stories for pacing variations. Chart pacing visually. Have students rewrite sections with different pacing and discuss effects. Teach that short sentences accelerate; long sentences slow down',
        resources: [
          'Pacing analysis charts',
          'Sentence length variation studies',
          'Fast/slow section comparison',
          'Pacing revision exercises',
          'Student pacing experiments'
        ],
        successCriteria: [
          'Student varies sentence length purposefully',
          'Student alternates intense and calm sections',
          'Student adjusts pacing to match story needs',
          'Student creates rhythmic variation that engages readers'
        ]
      },
      {
        id: 'strat-narr-003',
        title: 'Information Revelation and Mystery Management',
        targetSkill: 'Controlling what readers know and when',
        duration: '3-4 lessons',
        description: 'Teach strategic information management. Discuss dramatic irony, foreshadowing, and revelation timing. Have students map information revealing. Discuss what happens with reader knowledge variation. Practice weaving backstory naturally',
        resources: [
          'Information mapping worksheets',
          'Backstory integration examples',
          'Dramatic irony analysis and practice',
          'Foreshadowing examples',
          'Gradual revelation planning'
        ],
        successCriteria: [
          'Student reveals information strategically',
          'Student integrates backstory naturally',
          'Student maintains mystery effectively',
          'Student manages reader knowledge for engagement'
        ]
      },
      {
        id: 'strat-narr-004',
        title: 'Character-Plot Integration and Arc Alignment',
        targetSkill: 'Ensuring character drives plot',
        duration: '3-4 lessons',
        description: 'Emphasize that strong narratives integrate character and plot completely. Teach character arc (internal change) and plot arc (external events) and how they parallel. Have students analyze stories showing alignment. Practice developing story ideas as character studies and plot-driven narratives simultaneously',
        resources: [
          'Character arc vs. plot arc diagrams',
          'Alignment analysis in model texts',
          'Character motivation and choice mapping',
          'Consequence analysis',
          'Student story planning with integrated arcs'
        ],
        successCriteria: [
          'Student recognizes character as driver of plot',
          'Student develops parallel character and plot arcs',
          'Student ensures character choices drive story events',
          'Student creates narratives where character and plot are inseparable'
        ]
      }
    ],
    progressIndicators: [
      'Student plans stories with intentional structure',
      'Student understands multiple structural possibilities',
      'Student varies narrative pace effectively',
      'Student integrates backstory naturally',
      'Student manages information revelation strategically',
      'Student creates parallel character and plot arcs',
      'Student ensures character motivation drives plot',
      'Student crafts satisfying endings that resolve central questions'
    ]
  },
  {
    id: 'transactional-writing',
    title: 'Transactional Writing — Argument and Persuasion',
    board: 'GCSE/A-Level',
    subject: 'English Language',
    targetArea: 'Developing persuasive writing with strong argument structure',
    diagnosticQuestions: [
      {
        id: 'trans-001',
        question: 'Write a paragraph persuading people to recycle. What makes persuasion effective?',
        skillTested: 'Identifying and using persuasive techniques',
        expectedResponse: 'Strong response uses multiple techniques: clear thesis, evidence/reasoning, appeals to emotion/logic/credibility, engaging language. Discusses why each technique matters for persuasion',
        commonErrors: [
          'Simply stating opinion without support',
          'Using emotional appeals without evidence',
          'Overusing techniques without purpose',
          'Using techniques that undermine credibility',
          'Not considering audience'
        ],
        followUp: 'Which technique would be most effective with your specific audience?'
      },
      {
        id: 'trans-002',
        question: 'Present a strong counterargument to your position, then refute it. How does this strengthen your argument?',
        skillTested: 'Understanding counterargument and sophisticated argumentation',
        expectedResponse: 'Strong response presents opposing view fairly, explains its appeal, then provides reasoned refutation. This shows sophisticated thinking and addresses potential reader objections, appearing more convincing',
        commonErrors: [
          'Presenting straw-man versions of opposing views',
          'Dismissing opposition without addressing it',
          'Leaving counterargument unanswered',
          'Using mocking tone toward opposition',
          'Not recognizing rhetorical strength'
        ],
        followUp: 'What\'s the strongest counterargument to your position?'
      },
      {
        id: 'trans-003',
        question: 'What evidence would convince a skeptical reader? What counts as good evidence in argument?',
        skillTested: 'Understanding evidence strength and relevance',
        expectedResponse: 'Strong response identifies: specific examples, statistics, expert testimony, logical reasoning, case studies. Discusses why evidence matters and how weak evidence undermines argument',
        commonErrors: [
          'Relying on personal opinion as evidence',
          'Using outdated or irrelevant statistics',
          'Not distinguishing between anecdote and evidence',
          'Selecting only supporting evidence',
          'Not explaining why evidence supports claim'
        ],
        followUp: 'Where would you find the strongest evidence for your argument?'
      },
      {
        id: 'trans-004',
        question: 'Adapt your argument for three different audiences: politicians, teenagers, wealthy businesspeople. How do you adjust your approach?',
        skillTested: 'Understanding audience awareness and adaptation',
        expectedResponse: 'Strong response shows how persuasion is audience-dependent. Different audiences have different concerns and values. Effective persuasion speaks to audience interests and uses appropriate language',
        commonErrors: [
          'Writing same argument for all audiences',
          'Stereotyping audiences',
          'Misjudging audience sophistication or interests',
          'Using inappropriate language for audience',
          'Selecting irrelevant evidence'
        ],
        followUp: 'What does each audience care about most?'
      },
      {
        id: 'trans-005',
        question: 'Is your argument logical? Identify any logical fallacies or weak reasoning',
        skillTested: 'Recognizing logical fallacies',
        expectedResponse: 'Strong response identifies potential fallacies: ad hominem, false cause, false dichotomy, appeal to authority. Shows awareness that logic matters for persuasion and credibility',
        commonErrors: [
          'Not recognizing fallacies in own writing',
          'Using fallacies unknowingly',
          'Not understanding why fallacies weaken argument',
          'Using intentional fallacies without recognizing the move',
          'Confusing emotion-based persuasion with logical fallacy'
        ],
        followUp: 'How could you strengthen any weak reasoning?'
      },
      {
        id: 'trans-006',
        question: 'How does your tone affect persuasiveness? When is anger/humor/formality effective or counterproductive?',
        skillTested: 'Understanding tone and its persuasive effect',
        expectedResponse: 'Strong response recognizes tone as strategic choice. Some audiences respond to anger, others to humor or formality. Tone should match message and audience. Condescending tone undermines persuasion',
        commonErrors: [
          'Using tone inappropriately for audience',
          'Tone suggesting contempt for reader',
          'Inconsistent tone throughout argument',
          'Not recognizing tone as persuasive element',
          'Overusing emotional tone, appearing manipulative'
        ],
        followUp: 'What tone would be most persuasive for your specific argument and audience?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-trans-001',
        misconception: 'Persuasion means telling people they\'re wrong; stronger persuasion = more forceful',
        evidence: 'Students write aggressive, dismissive arguments that alienate readers',
        correction: 'Effective persuasion respects the reader. Aggressive, dismissive tone undermines credibility. The strongest persuasion is often reasonable, measured, and respectful. Force alienates; reason convinces',
        activities: [
          'Tone analysis: reading persuasive writing and discussing what tones work',
          'Audience empathy: understanding why aggression backfires',
          'Reasonable vs. aggressive comparison',
          'Persuasion through respect'
        ]
      },
      {
        id: 'misc-trans-002',
        misconception: 'Emotional appeals are manipulative; good argument uses only logic',
        evidence: 'Students avoid emotional language and human stories',
        correction: 'Effective persuasion uses both logic and emotion. Stories and emotional truth can be as persuasive as statistics. The key is honesty: emotional appeals should be genuine, not exploitative',
        activities: [
          'Emotional persuasion analysis',
          'Logic and emotion balance',
          'Story integration',
          'Ethical persuasion'
        ]
      },
      {
        id: 'misc-trans-003',
        misconception: 'Acknowledging opposing views weakens your argument',
        evidence: 'Students avoid counterargument',
        correction: 'Acknowledging strong counterarguments strengthens persuasion. It shows sophisticated thinking, addresses reader concerns proactively, and demonstrates confidence. Avoiding opposition looks defensive',
        activities: [
          'Counterargument analysis',
          'Respectful opposition',
          'Rhetorical strategy understanding',
          'Refutation practice'
        ]
      },
      {
        id: 'misc-trans-004',
        misconception: 'All evidence is equally valid; more evidence always makes stronger argument',
        evidence: 'Students cite personal anecdotes alongside statistics',
        correction: 'Evidence has hierarchy: controlled studies > statistics > expert testimony > personal examples. Carefully selected evidence is stronger than quantity. Selection bias undermines credibility',
        activities: [
          'Evidence hierarchy',
          'Selection awareness',
          'Evidence evaluation',
          'Balanced representation'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-trans-001',
        title: 'Persuasive Technique Identification and Application',
        targetSkill: 'Recognizing and using persuasive techniques effectively',
        duration: '3-4 lessons',
        description: 'Teach major persuasive techniques: ethos (credibility), pathos (emotion), logos (logic), rhetorical questions, antithesis, repetition, inclusive language. Provide examples and have students identify techniques in persuasive texts. Practice using techniques purposefully',
        resources: [
          'Technique posters and definitions',
          'Identification in model texts',
          'Application exercises',
          'Before/after: adding techniques',
          'Technique effect discussions'
        ],
        successCriteria: [
          'Student identifies persuasive techniques in texts',
          'Student uses multiple techniques in own writing',
          'Student applies techniques purposefully',
          'Student understands how techniques affect audience'
        ]
      },
      {
        id: 'strat-trans-002',
        title: 'Argument Structure and Logic Development',
        targetSkill: 'Building coherent, logically sound arguments',
        duration: '3-4 lessons',
        description: 'Teach argument structure: thesis, supporting points, evidence, reasoning, conclusion. Use essay outlines to make structure visible. Teach logical reasoning and common fallacies. Have students evaluate arguments for logical strength',
        resources: [
          'Argument structure templates',
          'Logical fallacy examples',
          'Outlines of model arguments',
          'Logical reasoning worksheets',
          'Fallacy recognition exercises'
        ],
        successCriteria: [
          'Student structures arguments clearly',
          'Student supports each claim with evidence and reasoning',
          'Student recognizes logical fallacies',
          'Student builds logically sound arguments'
        ]
      },
      {
        id: 'strat-trans-003',
        title: 'Audience Awareness and Adaptation',
        targetSkill: 'Tailoring persuasion to specific audiences',
        duration: '2-3 lessons',
        description: 'Teach audience analysis: What does this audience care about? What\'s their current position? What language do they use? What evidence matters to them? Have students write same argument for different audiences, adjusting tone, evidence, and approach',
        resources: [
          'Audience analysis worksheets',
          'Same argument, different audiences examples',
          'Tone and language adaptation',
          'Evidence selection by audience',
          'Student audience-specific writing'
        ],
        successCriteria: [
          'Student analyzes audience carefully',
          'Student adapts tone and language appropriately',
          'Student selects evidence relevant to audience',
          'Student tailors persuasive approach to audience'
        ]
      },
      {
        id: 'strat-trans-004',
        title: 'Counterargument and Refutation Development',
        targetSkill: 'Acknowledging and effectively refuting opposing views',
        duration: '2-3 lessons',
        description: 'Teach students to research counterarguments seriously, present them fairly, and develop strong refutations. Use debate frameworks. Have students practice articulating opposing views before refuting them. Discuss why this strengthens argument',
        resources: [
          'Counterargument identification and presentation',
          'Fair representation of opposing views',
          'Refutation strategy development',
          'Debate frameworks',
          'Student counterargument and refutation'
        ],
        successCriteria: [
          'Student identifies strong counterarguments',
          'Student presents opposing views fairly',
          'Student develops effective refutations',
          'Student strengthens argument through engagement'
        ]
      }
    ],
    progressIndicators: [
      'Student states clear thesis and position',
      'Student supports claims with evidence and reasoning',
      'Student uses persuasive techniques appropriately',
      'Student considers audience and adapts approach',
      'Student anticipates and addresses counterarguments',
      'Student maintains logical consistency',
      'Student uses appropriate, persuasive tone',
      'Student develops sophisticated, convincing arguments'
    ]
  },
  {
    id: 'comparison-skills',
    title: 'Comparison Skills (Language Paper 2)',
    board: 'GCSE/A-Level',
    subject: 'English Language',
    targetArea: 'Analyzing similarities and differences between texts effectively',
    diagnosticQuestions: [
      {
        id: 'comp-001',
        question: 'Compare these two passages on the same topic. What are key similarities and differences in approach?',
        skillTested: 'Identifying similarities and differences systematically',
        expectedResponse: 'Strong response identifies multiple points of comparison: tone, purpose, audience, techniques, evidence, structure. Goes beyond surface to deeper structural and rhetorical differences',
        commonErrors: [
          'Only identifying obvious differences',
          'Treating sources as isolated',
          'Missing similarities',
          'Not using comparative language',
          'Describing rather than comparing'
        ],
        followUp: 'Why might these writers approach the topic differently?'
      },
      {
        id: 'comp-002',
        question: 'Both passages use descriptive language, but to different effects. Analyze their different uses',
        skillTested: 'Comparing technique effects across texts',
        expectedResponse: 'Strong response analyzes description in each text, identifies how they differ, and discusses why differences matter. Shows understanding that same technique serves different purposes',
        commonErrors: [
          'Analyzing each text separately',
          'Not discussing why differences exist',
          'Assuming same technique = same effect',
          'Missing the point of comparison',
          'Making vague comparisons'
        ],
        followUp: 'What does each author\'s choice of description reveal about their purpose?'
      },
      {
        id: 'comp-003',
        question: 'These texts are written for different audiences. How does audience influence their approach?',
        skillTested: 'Understanding how audience shapes choices',
        expectedResponse: 'Strong response identifies intended audience for each, explains how this shapes choices (language, evidence, tone, structure), and shows how different audiences create necessarily different approaches',
        commonErrors: [
          'Not identifying audience',
          'Assuming all texts should appeal to same audience',
          'Missing how audience constrains choices',
          'Not recognizing audience-appropriateness varies',
          'Making judgments without considering audience fit'
        ],
        followUp: 'How would each text need to change if adapted for a different audience?'
      },
      {
        id: 'comp-004',
        question: 'Both passages convey similar information, but one is much shorter. What information is prioritized in each?',
        skillTested: 'Comparing information management and emphasis',
        expectedResponse: 'Strong response identifies what each text emphasizes, discusses how decisions about inclusion/exclusion shape argument, and shows how space = importance',
        commonErrors: [
          'Not noticing what\'s emphasized by length',
          'Assuming omitted information is forgotten',
          'Not understanding selection is rhetorical',
          'Missing how space allocation shapes meaning',
          'Not comparing what each text emphasizes'
        ],
        followUp: 'What does each text\'s emphasis reveal about its priorities?'
      },
      {
        id: 'comp-005',
        question: 'Compare the tone of these texts. How do tone differences affect how readers receive the message?',
        skillTested: 'Comparing tone and analyzing its effect',
        expectedResponse: 'Strong response identifies tone in each text, explains how language creates it, and discusses how different tones affect reader reception. Shows that tone is rhetorical choice',
        commonErrors: [
          'Not identifying tone clearly',
          'Describing tone without explaining what creates it',
          'Not discussing tone\'s rhetorical effect',
          'Assuming one tone is better',
          'Missing how tone shapes message reception'
        ],
        followUp: 'Which tone is more effective for the intended purpose and audience?'
      },
      {
        id: 'comp-006',
        question: 'Structure these passages differently. How does structure choice affect the message?',
        skillTested: 'Understanding how structure creates meaning',
        expectedResponse: 'Strong response recognizes structure as rhetorical choice, shows how different structures emphasize different aspects, and discusses how structure affects reader understanding',
        commonErrors: [
          'Not noticing structure',
          'Treating structure as neutral organization',
          'Not understanding structure as meaning-making',
          'Missing how structure affects reader experience',
          'Not comparing structural differences'
        ],
        followUp: 'Why might these authors have chosen these particular structures?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-comp-001',
        misconception: 'Comparison means describing each text, then noting similarities and differences',
        evidence: 'Students write one analysis of Text A, one of Text B, then add comparison sections',
        correction: 'Comparison is integrated throughout. Discuss texts in dialogue, weaving analysis. Comparative language should thread through. Each analytical point should illuminate both texts simultaneously',
        activities: [
          'Integrated comparison models',
          'Comparative language practice',
          'Parallel analysis',
          'Comparison-first outlining'
        ]
      },
      {
        id: 'misc-comp-002',
        misconception: 'Comparison is listing surface differences',
        evidence: 'Students note that Text A is longer, Text B is formal, without exploring significance',
        correction: 'Effective comparison identifies differences and explores their significance. Why is Text A longer? What does that accomplish? Surface observation without interpretation isn\'t comparison',
        activities: [
          'Why questions',
          'Rhetorical significance',
          'Deep comparison',
          'Interpretation requirement'
        ]
      },
      {
        id: 'misc-comp-003',
        misconception: 'Similarities are less important than differences',
        evidence: 'Students focus almost entirely on differences',
        correction: 'Similarities are often more revealing. Both texts might use narrative even with different tones. Similarities with different effects are particularly interesting',
        activities: [
          'Similarity identification',
          'Same technique, different effects',
          'Similarity + difference',
          'Significance of similarity'
        ]
      },
      {
        id: 'misc-comp-004',
        misconception: 'Making a judgment about which text is "better" is comparison',
        evidence: 'Students spend energy asserting one text is more effective',
        correction: 'Comparison describes and analyzes; judgment depends entirely on criteria and context. Text A might be more effective for audience X with purpose Y. Avoid simple preference; discuss contextual effectiveness',
        activities: [
          'Criteria-dependent analysis',
          'Audience-dependent effectiveness',
          'Purpose-dependent analysis',
          'Avoiding preference'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-comp-001',
        title: 'Integrated Comparative Analysis',
        targetSkill: 'Moving from separate to woven comparative discussion',
        duration: '3-4 lessons',
        description: 'Teach integrated comparison explicitly. Use comparative language frames. Model weaving discussion of both texts simultaneously. Practice identifying an analytical point, then exploring it in both texts without separating them',
        resources: [
          'Comparative language sentence frames',
          'Model analyses with woven comparison',
          'Parallel analysis templates',
          'Comparison planning sheets',
          'Student integrated comparison'
        ],
        successCriteria: [
          'Student weaves discussion throughout analysis',
          'Student uses comparative language consistently',
          'Student avoids separate sections',
          'Student explores same points in both texts'
        ]
      },
      {
        id: 'strat-comp-002',
        title: 'Finding Significance in Differences',
        targetSkill: 'Explaining why differences matter',
        duration: '2-3 lessons',
        description: 'Teach the "so what?" test: identify difference, then ask why it matters. Develop reasons: rhetorical effect, audience appeal, emphasis, purpose achievement, credibility. Have students practice explaining significance',
        resources: [
          'Why-questions prompts',
          'Significance explanation frameworks',
          'Model analysis',
          'Practice chains',
          'Student significance analysis'
        ],
        successCriteria: [
          'Student identifies differences clearly',
          'Student explains significance of each',
          'Student understands differences as rhetorical choices',
          'Student connects differences to purposes and effects'
        ]
      },
      {
        id: 'strat-comp-003',
        title: 'Systematic Comparison Framework',
        targetSkill: 'Comparing across multiple dimensions consistently',
        duration: '2-3 lessons',
        description: 'Provide framework for systematic comparison: Tone, Purpose, Audience, Techniques, Structure, Evidence, Emphasis. Teach students to apply this framework. Use the framework to ensure comprehensive analysis',
        resources: [
          'Comparison framework templates',
          'Feature comparison worksheets',
          'Systematic analysis guides',
          'Comparison checklists',
          'Student frameworks'
        ],
        successCriteria: [
          'Student compares across multiple dimensions',
          'Student uses systematic approach consistently',
          'Student identifies all major differences and similarities',
          'Student provides comprehensive comparison'
        ]
      },
      {
        id: 'strat-comp-004',
        title: 'Context-Aware Effectiveness Analysis',
        targetSkill: 'Discussing effectiveness as contextual',
        duration: '2-3 lessons',
        description: 'Teach that effectiveness depends on: purpose, intended audience, context, criteria. Have students analyze effectiveness with multiple audiences in mind. Discuss how same text might be effective for one audience and less for another',
        resources: [
          'Audience context worksheets',
          'Criteria-dependent templates',
          'Contextual effectiveness prompts',
          'Multiple-perspective analysis',
          'Student context-aware analysis'
        ],
        successCriteria: [
          'Student identifies relevant contexts',
          'Student states criteria explicitly',
          'Student avoids absolute judgments',
          'Student discusses effectiveness as audience/purpose-dependent'
        ]
      }
    ],
    progressIndicators: [
      'Student identifies multiple similarities and differences',
      'Student weaves discussion of both texts throughout analysis',
      'Student uses comparative language appropriately',
      'Student explains why differences matter',
      'Student compares across multiple analytical dimensions',
      'Student connects differences to rhetorical purposes and effects',
      'Student discusses effectiveness as contextual',
      'Student provides sophisticated, comprehensive analysis'
    ]
  },
  {
    id: 'poetry-unseen',
    title: 'Poetry Analysis — Unseen Poems',
    board: 'GCSE/A-Level',
    subject: 'English Literature',
    targetArea: 'Analyzing unfamiliar poems effectively with close reading skills',
    diagnosticQuestions: [
      {
        id: 'poem-001',
        question: 'Read this unfamiliar poem once. What is your first impression? What are you noticing?',
        skillTested: 'Initial impressions and identifying broad features',
        expectedResponse: 'Strong response notes: tone, form/structure, apparent subject, emotional register, language register. First impressions often catch major features',
        commonErrors: [
          'Claiming complete understanding before detailed reading',
          'Not trusting immediate impressions',
          'Over-analyzing minor details',
          'Missing obvious features',
          'Confusing first impression with final analysis'
        ],
        followUp: 'What details support or complicate this first impression?'
      },
      {
        id: 'poem-002',
        question: 'This poem has a regular rhyme scheme. What effect does the regularity or irregularity create?',
        skillTested: 'Analyzing form and its effects',
        expectedResponse: 'Strong response identifies rhyme scheme, notes whether regular or irregular, and discusses effects: regular can feel predictable, controlled, song-like; irregular can feel surprising, disrupted, realistic',
        commonErrors: [
          'Only identifying rhyme scheme without discussing effect',
          'Assuming regular form is better',
          'Not understanding form creates meaning',
          'Missing how form surprises or meets expectations',
          'Treating form as decoration'
        ],
        followUp: 'How would the poem change if the rhyme scheme were different?'
      },
      {
        id: 'poem-003',
        question: 'Identify the poem\'s central image, metaphor, or symbol. What might it represent?',
        skillTested: 'Recognizing major figurative elements',
        expectedResponse: 'Strong response identifies central image/metaphor, explores what it represents, considers multiple interpretations, and discusses how it\'s developed throughout',
        commonErrors: [
          'Missing the poem\'s central image',
          'Over-interpreting minor details',
          'Making interpretations without support',
          'Confusing image with meaning',
          'Stopping at literal meaning'
        ],
        followUp: 'What does this image/symbol allow the poet to explore?'
      },
      {
        id: 'poem-004',
        question: 'How does the poem\'s pacing shift? Are lines long or short? Where do breaks occur?',
        skillTested: 'Analyzing form elements: line length, stanzaic structure, enjambment',
        expectedResponse: 'Strong response describes pacing changes, identifies long/short lines and effects, notes enjambment or breaks, and discusses how these create rhythm and meaning',
        commonErrors: [
          'Not noticing pacing variation',
          'Describing line length without discussing effect',
          'Missing significance of breaks',
          'Assuming normal is "natural"',
          'Not understanding form is meaning-making'
        ],
        followUp: 'How would the poem feel if every line had the same length?'
      },
      {
        id: 'poem-005',
        question: 'What is the poem\'s tone, and how do language choices create it? Does tone shift?',
        skillTested: 'Identifying tone and analyzing its linguistic creation',
        expectedResponse: 'Strong response names tone, identifies specific language choices creating it, notes shifts if present, and discusses emotional effect. Shows that tone is created through deliberate choice',
        commonErrors: [
          'Not identifying tone clearly',
          'Assuming all poems have consistent tone',
          'Missing tonal shifts',
          'Not explaining what creates tone',
          'Confusing subject with tone'
        ],
        followUp: 'How would the poem\'s meaning change if the tone were different?'
      },
      {
        id: 'poem-006',
        question: 'What seems to be the poem\'s concern or focus? What is it exploring or arguing?',
        skillTested: 'Identifying theme and poetic purpose',
        expectedResponse: 'Strong response identifies central concern, shows how the poem explores this through imagery and language, and acknowledges that themes often have complexity and multiple valid interpretations',
        commonErrors: [
          'Claiming to understand the poem\'s meaning after one reading',
          'Making interpretations without support',
          'Oversimplifying complex themes',
          'Confusing subject with theme',
          'Believing there\'s one correct interpretation'
        ],
        followUp: 'What is the poem suggesting about this theme?'
      }
    ],
    commonMisconceptions: [
      {
        id: 'misc-poem-001',
        misconception: 'Poetry is mysterious and inaccessible; you either understand it or you don\'t',
        evidence: 'Students give up on unfamiliar poetry',
        correction: 'Poetry is challenging but analyzable. It uses techniques purposefully. While multiple interpretations exist, not all are equally valid. Systematic close reading and attention to language reveal meaning',
        activities: [
          'Scaffolded poetry reading',
          'Focus questions',
          'Multiple reading passes',
          'Poetry confidence building'
        ]
      },
      {
        id: 'misc-poem-002',
        misconception: 'Poetry has hidden meaning you have to find; analysis means guessing correctly',
        evidence: 'Students make unsupported interpretations',
        correction: 'Poetry meaning is created through language, not hidden. Interpretations should be supported by textual evidence. Multiple valid interpretations can coexist. Analysis means explaining how language creates meaning',
        activities: [
          'Evidence requirement',
          'Multiple valid interpretations',
          'Support ranking',
          'Interpretation respect'
        ]
      },
      {
        id: 'misc-poem-003',
        misconception: 'Form is decoration; the "real" meaning is in content',
        evidence: 'Students analyze only subject matter',
        correction: 'Form and content are inseparable. Line breaks, rhyme, meter, stanza structure—all these create meaning. Form is not decoration; it is fundamental',
        activities: [
          'Same content, different forms',
          'Form analysis primacy',
          'Form-meaning connections',
          'Form as technique'
        ]
      },
      {
        id: 'misc-poem-004',
        misconception: 'Analyzing poetry means interpreting symbolism; everything is a symbol',
        evidence: 'Students over-interpret minor details',
        correction: 'While poetry uses symbolism, not everything is symbolic. Concrete images can matter for themselves. Some elements are ornamental. All interpretations should be supported',
        activities: [
          'Image vs. symbol: distinguishing',
          'Support requirement',
          'Over-interpretation detection',
          'Literal and symbolic discussion'
        ]
      }
    ],
    interventionStrategies: [
      {
        id: 'strat-poem-001',
        title: 'Systematic Poetry Analysis Framework',
        targetSkill: 'Developing a consistent approach to unseen poetry',
        duration: '4-5 lessons',
        description: 'Teach explicit steps: (1) Read for impression and subject, (2) Analyze form, (3) Close read language, (4) Explore imagery and symbolism, (5) Consider theme and effect. Use the framework consistently. Gradually internalize the process',
        resources: [
          'Poetry analysis framework posters',
          'Step-by-step worksheets',
          'Annotated model poems',
          'Analysis checklists',
          'Student frameworks'
        ],
        successCriteria: [
          'Student follows systematic process',
          'Student identifies major features at each step',
          'Student weaves findings into coherent analysis',
          'Student applies framework to new poems'
        ]
      },
      {
        id: 'strat-poem-002',
        title: 'Form Analysis and Effect Recognition',
        targetSkill: 'Understanding how form creates meaning',
        duration: '3-4 lessons',
        description: 'Teach major formal elements: rhyme schemes, meter, line length, enjambment, stanzaic structure. Analyze how each affects the poem. Compare poems with different formal choices. Have students examine form\'s effects explicitly',
        resources: [
          'Form terminology posters',
          'Poems with different structures',
          'Form effect analysis worksheets',
          'Same poem formatted different ways',
          'Student form analysis'
        ],
        successCriteria: [
          'Student identifies major formal features',
          'Student explains form\'s effects clearly',
          'Student understands form as meaningful',
          'Student connects form to meaning-making'
        ]
      },
      {
        id: 'strat-poem-003',
        title: 'Evidence-Based Interpretation',
        targetSkill: 'Supporting interpretations with textual evidence',
        duration: '2-3 lessons',
        description: 'Establish that all interpretations require evidence. Teach what counts as evidence: specific language, images, formal choices, patterns. Practice finding evidence. Discuss when evidence strongly vs. weakly supports a reading',
        resources: [
          'Evidence identification worksheets',
          'Interpretation + evidence pairing',
          'Evidence strength ranking',
          'Model analyses',
          'Student evidence-based practice'
        ],
        successCriteria: [
          'Student provides evidence for all interpretations',
          'Student selects strongest evidence',
          'Student explains why evidence supports interpretation',
          'Student recognizes weak vs. strong support'
        ]
      },
      {
        id: 'strat-poem-004',
        title: 'Poetry Confidence and Fluency Building',
        targetSkill: 'Developing comfort with analyzing diverse poems',
        duration: '2-3 lessons (ongoing)',
        description: 'Regular practice with variety of poems builds confidence. Start with more accessible poems, progress to challenging. Discuss poems collaboratively before individual analysis. Build community around poetry. Celebrate successful analysis',
        resources: [
          'Diverse poem anthology',
          'Collaborative discussion guides',
          'Paired poetry analysis',
          'Poetry competitions or celebrations',
          'Confidence-building scaffolds'
        ],
        successCriteria: [
          'Student approaches poems with less anxiety',
          'Student analyzes increasingly challenging poems',
          'Student generates multiple valid interpretations',
          'Student develops fluency with analysis process'
        ]
      }
    ],
    progressIndicators: [
      'Student reads poem and identifies basic features',
      'Student analyzes form and its effects',
      'Student recognizes and names techniques',
      'Student traces images and their development',
      'Student identifies central theme or concern',
      'Student supports interpretations with evidence',
      'Student generates multiple valid interpretations',
      'Student analyzes diverse, challenging poems confidently'
    ]
  }
];
