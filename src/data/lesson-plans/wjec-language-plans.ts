// ─── WJEC English Language C700QS: 15 Comprehensive Lesson Plans ───────────
// Component 1 (Creative Writing & Transactional Texts) + Component 2 (Reading & Language)
// Ready-to-teach with full differentiation, model answers, and assessment

export interface WJECLessonPlan {
  id: string
  title: string
  duration: string
  yearGroup: string
  examBoard: 'WJEC'
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

export const wjecLanguageLessonPlans: WJECLessonPlan[] = [
  {
    id: 'wjec-lang-01',
    title: 'Overview: WJEC C700QS Assessment Structure, Weightings & Exam Timing',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Understand the complete WJEC C700QS structure: Component 1 (50%) and Component 2 (50%)',
      'Know assessment weightings across creative writing, transactional writing, reading, and language analysis',
      'Manage time effectively across two exam papers (1.5 hours each)',
      'Create a personalized exam strategy based on mark allocation and personal strengths'
    ],
    starterActivity: {
      description: 'Component Balance Challenge: Display a pie chart showing WJEC C700QS assessment weightings (Creative Writing 25%, Transactional Writing 25%, Reading Analysis 25%, Language Study 25%). Students estimate how much time to spend on each component in a 1.5-hour paper. Discuss their reasoning. Reveal actual suggested time allocations. Discuss why WJEC balances writing and reading equally.',
      duration: '10 mins',
      resources: ['Pie chart of WJEC assessment weightings (projected)', 'Time allocation reference sheet', 'Whiteboard for student estimates']
    },
    mainActivity: {
      description: 'Build a comprehensive WJEC C700QS framework showing both components, assessment weightings, mark allocations per task, question types, and time management strategy. Use WJEC specimen papers to identify each component in context. Students work in pairs to complete a blank template, then compare in groups of four. Build a master version on the board together. Key teaching: Component 1 (2 hours total: 1 hour creative writing + 1 hour transactional writing); Component 2 (1.5 hours: 45 mins reading, 45 mins language study). Run a "timing simulation": project questions from both components (creative prompt, transactional task, reading passage with questions, language analysis task) and ask students to allocate time appropriately, considering their personal reading/writing speed. Debrief: Which task do you prefer? Which takes longest? How will you manage pacing on exam day? Students write personalized exam strategy card.',
      duration: '35 mins',
      steps: ['Distribute blank WJEC C700QS framework showing Component 1 and 2', 'Using projected WJEC specimen papers, students identify task types and marks', 'Fill in: component, task type, marks, suggested time, question style', 'Pairs compare with groups of four, resolving differences', 'Teacher builds master version on board; discuss time allocation rationale', 'Project four different tasks (one from each assessment area); students allocate time realistically', 'Discuss: Which tasks feel longest? Why? How will anxiety affect your pacing?', 'Students write personalized exam strategy: which tasks to attempt first, how to manage time, what contingencies if running late'],
      differentiation: {
        support: 'Provide partially completed framework with Component 1 tasks pre-filled. Include visual timer showing time allocation per section. Offer time management checklist (Have I planned my time? Do I know which tasks suit me?). Allow extra time to process timing information.',
        stretch: 'Students analyse past paper data to identify which components carry highest marks across multiple years. Create a personalized component priority ranking (e.g., if stronger at writing, allocate more time to creative writing). Write rationale for your strategy choices.'
      }
    },
    plenary: {
      description: 'Strategy Card Swap: Students exchange personalized exam strategy cards with a partner. Partner reads the strategy and provides constructive feedback: Is the time allocation realistic? Have you considered contingencies (e.g., running over time)? Partners return cards with annotations. Whole-class reflection: What makes a good exam strategy?',
      duration: '10 mins'
    },
    homework: 'Create a revision poster showing WJEC C700QS structure: both components, marks, weightings, task types, time allocation, and one key success criterion per component. Include a visual timer showing how to pace yourself across each paper. Bring to next lesson for peer review.',
    resourcesNeeded: ['Pie chart of WJEC assessment weightings', 'Time allocation reference sheet', 'Blank WJEC C700QS framework sheet', 'WJEC specimen papers (projected or printed)', 'Four sample questions (one from each task type)', 'Personalized exam strategy template', 'Countdown timer for classroom use'],
    assessmentOpportunities: ['Time allocation estimate in starter (quick assessment of initial understanding)', 'Check completed framework for accuracy', 'Assess personalized exam strategy for realism and detail', 'Peer feedback on strategy card completeness'],
    keyVocabulary: ['component', 'assessment objective', 'weighting', 'mark allocation', 'time management', 'exam strategy', 'specimen paper', 'creative writing', 'transactional', 'reading analysis', 'language study'],
    crossCurricular: ['Mathematics (proportions, time allocation)', 'Planning and organization skills'],
    sendAdaptations: 'Provide pre-completed weighting diagram with visual breakdown; simplify framework to show only main task types; allow extra time to process timing concepts; pair with stronger peer for strategy development; offer visual timer template; provide checklist to guide strategy card completion; seat near teacher for additional explanation.'
  },

  {
    id: 'wjec-lang-02',
    title: 'Creative Writing: Narrative & Descriptive Techniques (WJEC Component 1a)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Create compelling, sustained creative narrative or descriptive writing',
      'Use a range of literary techniques (imagery, pacing, characterization, dialogue)',
      'Demonstrate technical accuracy (spelling, punctuation, grammar) in extended writing',
      'Score 18+ marks (out of 25) through combining engaging content with linguistic precision'
    ],
    starterActivity: {
      description: 'Opening Impact Carousel: Display five different creative writing openings (5–6 sentences each), ranging from weak to strong. Project them on the board. Students walk around and mark each opening with sticky notes: "Hook me!" or "Slow start". Discuss what makes an opening compelling (specificity, sensory detail, intrigue, voice). Show how the opening sets tone and engages the reader immediately.',
      duration: '10 mins',
      resources: ['Five sample opening paragraphs (projected/printed)', 'Sticky note pads', 'Opening effectiveness checklist']
    },
    mainActivity: {
      description: 'Teach creative narrative writing through the lens of WJEC assessment: (1) Opening hook: Start with specificity, sensory detail, or unexpected juxtaposition. Avoid "Once upon a time" generics. (2) Character development: Show character through dialogue, action, internal thought; avoid telling emotions. (3) Pacing and tension: Vary sentence length to control pace. Short sentences create urgency; longer sentences allow reflection. (4) Descriptive technique: Use imagery (visual, auditory, tactile, olfactory, gustatory), metaphor, symbolism. Connect description to mood and meaning. (5) Resolution: Conclude with meaning-making moment, not simply "and then they woke up" (if dream framework used). Model a complete narrative (500 words): Opening (specific sensory detail + character introduced), Development (character motivation, action, dialogue, internal reflection), Turn (moment of realization or change), Resolution (what the character has learned or how their understanding has shifted). Show Grade 5 response (clear narrative, some sensory detail, technical accuracy adequate but not polished) and Grade 8+ response (compelling voice, layered characterization, sophisticated technique use, minimal errors). Complete one timed creative writing task (45 mins) responding to a WJEC-style prompt (open-ended narrative or descriptive prompt). Self-assess using detailed mark scheme: Does the opening hook? Is character developed beyond telling? Is description vivid and purposeful? Is there a clear arc (setup, development, resolution or thematic shift)? Are technical errors minimal?',
      duration: '35 mins',
      steps: ['Introduce WJEC creative writing assessment criteria: content & organization, technical accuracy, use of linguistic features', 'Discuss what makes opening compelling: specificity, sensory detail, intrigue, voice', 'Model character development: showing vs telling emotion through action and dialogue', 'Discuss pacing: how sentence length variation controls reader experience', 'Model descriptive technique use: imagery, metaphor, symbolism in service of meaning', 'Discuss resolution: must provide insight, not just end plot', 'Show Grade 5 narrative (clear but generic; adequate but not polished writing)', 'Show Grade 8+ narrative (compelling voice; sophisticated characterization; varied descriptive techniques; precise language; minimal errors)', 'Discuss what distinguishes high-level creative writing: specificity, voice, technique variety, technical precision', 'Distribute WJEC-style creative prompt (open-ended narrative or descriptive)', 'Students plan (10 mins): brainstorm character/setting, identify key moments, note techniques to use', 'Students draft (35 mins): aim for 500–600 words, maintaining focus on technique and accuracy'],
      differentiation: {
        support: 'Provide writing frame: (Opening: "In [setting], [specific detail]. [Character] was...") (Development: "First, [action]. Then, [complication]...") (Turn: "That\'s when [realization]...") (Resolution: "From that moment..."). Offer bank of descriptive language (imagery words, metaphor examples). Reduce target length (aim for 350–400 words instead of 500–600). Allow extra 5 minutes for planning.',
        stretch: 'Challenge students to use three different literary techniques intentionally, annotating which technique appears where and why. Write opening two different ways and explain which is more effective. Analyse how professional writers use pacing and voice; replicate one technique in their own writing.'
      }
    },
    plenary: {
      description: 'Technique Spotlight: Students read aloud one sentence from their creative writing that demonstrates a particular technique (imagery, dialogue, pacing variation, metaphor, etc.). Class identifies the technique and discusses its effect. Repeat with 5–6 different examples. Reinforce: Technique is only valuable if it serves the story, creates effect, or reveals character.',
      duration: '10 mins'
    },
    homework: 'Complete a full WJEC creative writing task (500–600 words) under timed conditions (45 minutes). Afterward, annotate your writing identifying three literary techniques you used. Reflect: Did each technique serve a purpose (reveal character, create atmosphere, control pacing)? Which techniques felt most natural to use? Bring annotated draft to next lesson.',
    resourcesNeeded: ['Five sample openings (varying quality)', 'Opening effectiveness checklist', 'WJEC creative writing prompts (past papers or specimen)', 'Character development examples (showing vs telling)', 'Descriptive language word bank (for support)', 'Writing frame template (for support)', 'Grade 5 and Grade 8+ model narratives', 'Detailed WJEC creative writing mark scheme (0–25)', 'Timer for writing session'],
    assessmentOpportunities: ['Opening analysis in carousel activity (quick check of engagement awareness)', 'Planning notes (organization check)', 'Timed creative writing task (self-assessed against mark scheme)', 'Annotation of techniques used (reflection on craft)', 'Homework creative writing (self-assessed for technique and accuracy)'],
    keyVocabulary: ['narrative', 'descriptive', 'character development', 'pacing', 'imagery', 'metaphor', 'symbolism', 'dialogue', 'opening hook', 'resolution', 'technical accuracy', 'voice', 'technique purpose'],
    crossCurricular: ['Creative writing', 'Literary analysis', 'Psychology (character motivation)', 'Visual arts (composition, imagery)'],
    sendAdaptations: 'Provide detailed writing frame with sentence starters; offer comprehensive descriptive language word bank; reduce target length (aim for 350–400 words instead of 500–600); allow typed response if handwriting is barrier; allow extra 10 minutes per task; provide example narratives showing different technique approaches; pair with peer for planning discussion; allow verbal planning recorded by TA; use highlighted examples showing effective techniques; provide annotation template for reflecting on technique use.'
  },

  {
    id: 'wjec-lang-03',
    title: 'Transactional Writing: Purpose, Register & Audience Awareness (WJEC Component 1b)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Write transactional texts (email, letter, proposal, article) achieving clear communicative purpose',
      'Adapt register and tone appropriately for specified audience and context',
      'Organize information logically with clear paragraphing and purpose-driven structure',
      'Score 18+ marks (out of 25) through clear communication and purposeful language use'
    ],
    starterActivity: {
      description: 'Register Roulette: Display three transactional texts on the same topic (e.g., requesting a school trip) in three different registers: very formal (to headteacher), neutral (to teacher), very informal (to friend). Students identify the register level of each and discuss what signal words/structures indicate formality. Show how the same message requires completely different tone based on audience.',
      duration: '10 mins',
      resources: ['Three register-variant texts on same topic (printed/projected)', 'Register identification checklist', 'Audience/purpose analysis chart']
    },
    mainActivity: {
      description: 'Teach transactional writing for WJEC: (1) Identify communicative purpose: Are you requesting, persuading, informing, complaining, proposing? Let purpose drive structure. (2) Analyze audience: Who is reading this? What does the reader need to know? What tone suits them? (3) Select register: Match formality level to audience. Formal (headteacher, company) uses "I am writing to...", full names, complex sentences. Neutral (teacher, unknown person) uses "I wanted to ask..." or "Could you...?". Informal (friend, peer) uses "Hey", contractions, conversational syntax. (4) Organize for clarity: Opening paragraph states purpose. Middle paragraphs develop supporting points with specific examples and detail. Closing paragraph reinforces purpose and states required action. Model a transactional text: email requesting flexible exams (opening: state purpose, acknowledge reader, signal context; development: explain specific circumstances with evidence, explain how flexibility would help, address reader\'s potential concerns; closing: polite request for response, thank you). Show Grade 5 response (purpose clear, adequate organization, minor register inconsistencies) and Grade 8+ response (purpose crystal clear, logical organization, consistent register, purposeful language throughout, specific detail). Complete two timed transactional writing tasks (20 mins each) responding to different scenarios requiring different registers. Self-assess using mark scheme: Is purpose clear and achieved? Is register appropriate to audience? Is information organized logically? Is detail specific and purposeful?',
      duration: '35 mins',
      steps: ['Introduce WJEC transactional writing assessment criteria: content & organization, audience/purpose awareness, linguistic accuracy', 'Discuss how audience determines register and tone', 'Model register analysis: formal opening, neutral opening, informal opening (same request, different registers)', 'Introduce purpose-driven organization: opening (state purpose) + body (develop with detail + examples) + closing (action/outcome)', 'Model transactional text (email requesting something): opening, developed body, purposeful closing', 'Show Grade 5 response (purpose achieved, some organizational issues, register mostly consistent)', 'Show Grade 8+ response (purpose expertly achieved, logical organization, register consistent throughout, specific purposeful language)', 'Distribute two transactional prompts (different audiences requiring different registers)', 'Task 1 — Formal scenario (e.g., email to company, letter to local authority) — 20 mins', 'Task 2 — Neutral or informal scenario (e.g., email to teacher, letter to friend) — 20 mins', 'Self-assess both using mark scheme; compare register consistency with peer'],
      differentiation: {
        support: 'Provide structure frame for each task: (Opening: state purpose, acknowledge reader) (Body: first point + example, second point + example, address counterargument) (Closing: restate purpose, action requested, thank you). Offer register-specific word banks (formal phrases: "I am writing to...", "I would greatly appreciate..."; informal: "I\'m wondering if...", "Could you possibly...?"). Reduce writing length (aim for 200–250 words instead of 300). Provide audience analysis checklist.',
        stretch: 'Challenge students to achieve a complex purpose (e.g., complaining AND requesting compensation AND asking for improved service). Identify register shifts and explain why each is necessary. Analyse how a professional organization (company, school) structures similar communications; emulate effective strategies. Compare own response with model answer and identify one area for improvement.'
      }
    },
    plenary: {
      description: 'Register Reality Check: Students read aloud their formal transactional text to a partner. Partner listens for: Is register appropriate? Does any language feel odd or out of place? Are there moments where register drops (shifts too informal)? Provide specific feedback: "Your opening is very formal, but this sentence sounds too casual." Repeat with informal text. Reinforce: Register must be consistent throughout; inconsistency jars the reader.',
      duration: '10 mins'
    },
    homework: 'Complete a WJEC transactional writing task (300 words, 30 minutes under timed conditions) in response to a new scenario. Specify audience, purpose, and required register before you begin. After completing, annotate your text: highlight opening (is purpose clear?), circle register markers (formal language, informal language), mark specific detail that supports purpose. Bring annotated text to next lesson.',
    resourcesNeeded: ['Three register-variant texts on same topic', 'Register identification checklist', 'Audience/purpose analysis chart', 'WJEC transactional writing prompts (different audiences)', 'Structure frame template (for support)', 'Register-specific word bank (for support)', 'Grade 5 and Grade 8+ model transactional texts', 'Detailed WJEC transactional mark scheme (0–25)', 'Timer for writing sessions'],
    assessmentOpportunities: ['Register identification in starter (quick check)', 'Two timed transactional writing tasks (self-assessed against mark scheme)', 'Register consistency peer feedback during plenary', 'Homework transactional text (self-assessed for register consistency and purposeful detail)'],
    keyVocabulary: ['transactional', 'register', 'audience', 'purpose', 'formality', 'tone', 'specific detail', 'organization', 'opening', 'closing', 'opening', 'body', 'closing', 'consistency'],
    crossCurricular: ['Professional communication', 'Customer service', 'Audience awareness', 'Context sensitivity'],
    sendAdaptations: 'Provide detailed structure frame for each register level; offer comprehensive register-specific word banks; reduce writing length (aim for 200–250 words instead of 300); allow typed response if handwriting is barrier; allow extra 5 minutes per task; provide audience analysis checklist; give examples of transactional texts from real organizations (company emails, letters); pair with peer for register checking; allow oral planning recorded by TA; use color-coded examples showing register markers.'
  },

  {
    id: 'wjec-lang-04',
    title: 'Reading Comprehension & Analysis: Explicit & Implicit Meaning (WJEC Component 2a)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Identify and retrieve explicit information from complex texts',
      'Understand implicit meaning, inference, and inference development in sophisticated texts',
      'Analyse how writers create meaning through word choice, structure, and technique',
      'Score 18+ marks (out of 25) on reading comprehension and analysis tasks'
    ],
    starterActivity: {
      description: 'Meaning Layers: Display a short paragraph from a literary text (6–8 sentences). Ask: What does this paragraph explicitly state (tell us directly)? Students identify literal facts. Then ask: What does it imply or suggest beyond the explicit? How do we know? Discuss that writers layer meaning — explicit statements plus implicit suggestion. Show how close reading reveals multiple meaning layers.',
      duration: '10 mins',
      resources: ['Short literary paragraph (projected/printed)', 'Meaning layers diagram', 'Inference prompt cards']
    },
    mainActivity: {
      description: 'Teach reading comprehension and analysis for WJEC: (1) Explicit retrieval: Identify directly stated information. Use specific quotations as evidence. (2) Inference: Use textual clues (word choice, action, setting detail) to infer what is implied but not directly stated. Support inferences with evidence. (3) Technique analysis: Identify how writers create effect through word choice, sentence structure, imagery, symbolism. Explain why writers make these choices. (4) Interpretation: Draw conclusions about meaning based on evidence. Consider multiple interpretations; defend your reading with textual support. Model a reading task: Provide a 400-word passage from a WJEC-style text (narrative, article, or opinion piece). Model three types of questions: (A) Explicit retrieval ("What does the text tell us about the character\'s background?"), (B) Inference ("What can we infer about the character\'s emotional state? Find evidence."), (C) Technique analysis ("How does the writer\'s use of [technique] contribute to meaning? Explain the effect."). Show Grade 5 response (retrieval accurate, some inference, limited technique analysis) and Grade 8+ response (accurate retrieval, developed inference with multiple supporting quotations, sophisticated technique analysis with effect explanation and wider impact). Complete three timed reading tasks (5–10 mins each) using WJEC-style passages and questions. Self-assess using mark scheme: Did I retrieve information accurately? Did I support inferences with evidence? Did I analyze technique and explain its purpose?',
      duration: '35 mins',
      steps: ['Introduce WJEC reading assessment criteria: understanding, analysis, use of textual evidence', 'Explain three levels of meaning: explicit (stated), implicit (implied through detail), interpretive (what the text suggests about human experience)', 'Model retrieval: identifying directly stated information + quotation as proof', 'Model inference: noticing detail that suggests meaning beyond explicit statement + evidence + explanation', 'Model technique analysis: identifying specific word choice, structure, imagery + explaining effect + linking to character/theme', 'Show Grade 5 reading response (retrieval correct, inference present, technique analysis basic)', 'Show Grade 8+ reading response (retrieval accurate, inference developed with multiple quotations, technique analysis sophisticated with broader context awareness)', 'Distribute WJEC-style passage (400–500 words) with three question types', 'Task 1 — Explicit retrieval question (5 mins) — identify stated information, provide quotation', 'Task 2 — Inference question (10 mins) — develop inference, support with multiple textual clues', 'Task 3 — Technique analysis question (10 mins) — identify technique, explain effect, link to wider meaning', 'Self-assess all three tasks using detailed mark scheme'],
      differentiation: {
        support: 'Provide question scaffolds: (Explicit: "The text tells us that ___. Evidence: \'...\'".) (Inference: "We can infer that ___ because ___. The text shows this through \'...\'.") (Technique: "The writer uses ___ (technique) when ___. This creates ___. The effect is..."). Pre-highlight relevant sections of text. Reduce passage length (250–300 words instead of 400–500). Allow extra 2 minutes per question.',
        stretch: 'Identify multiple valid interpretations of same passage; explain how textual evidence supports each interpretation. Analyse how writer\'s technique choices create specific effects on different readers. Compare technique use across two similar passages; discuss how different writers create similar effects differently.'
      }
    },
    plenary: {
      description: 'Evidence Strength Challenge: Display a question and three student responses with varying amounts of textual evidence and analysis depth. Class votes: Which response is strongest and why? Discuss: What makes evidence compelling? Is one quotation enough or do you need multiple? How does explanation of effect strengthen response? Reinforce: High marks require both identification of technique AND explanation of how it creates meaning.',
      duration: '10 mins'
    },
    homework: 'Find a passage from a novel or article you are reading (300–400 words). Write three short responses: (1) Retrieve two explicit facts from the passage (with quotations). (2) Make one inference from detail in the passage; explain your reasoning (with quotation). (3) Identify one technique the writer uses; explain its effect and purpose (with quotation). Bring responses to next lesson.',
    resourcesNeeded: ['Short literary paragraph (starter)', 'Meaning layers diagram', 'WJEC-style passages (400–500 words)', 'Question scaffolds (for support)', 'Three question types (retrieval, inference, technique)', 'Grade 5 and Grade 8+ model reading responses', 'Detailed WJEC reading mark scheme (0–25)', 'Highlighted example passages (for support)', 'Timer for reading tasks'],
    assessmentOpportunities: ['Meaning layers identification in starter (quick check)', 'Three timed reading tasks (self-assessed against mark scheme)', 'Evidence strength analysis in plenary', 'Homework reading analysis (self-assessed for quotation use and explanation depth)'],
    keyVocabulary: ['explicit', 'implicit', 'inference', 'evidence', 'technique', 'effect', 'word choice', 'structure', 'imagery', 'quotation', 'analysis', 'interpretation', 'textual support'],
    crossCurricular: ['Critical reading', 'Literary analysis', 'Evidence-based reasoning'],
    sendAdaptations: 'Provide question scaffolds with sentence starters for each response type; pre-highlight relevant passages or mark relevant lines; reduce passage length (250–300 words instead of 400–500); offer multiple-choice elements for some questions; allow extra 2–3 minutes per question; provide annotated example responses showing effective quotation use and explanation; pair with stronger peer for inferencing tasks; allow verbal responses scribed by TA; use visual annotation examples (highlight + annotation example).'
  },

  {
    id: 'wjec-lang-05',
    title: 'Language Study: Grammar, Syntax & Stylistic Devices (WJEC Component 2b)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Identify and analyze grammatical structures (clauses, phrases, sentence types)',
      'Understand how syntax (sentence structure choices) creates effect',
      'Recognize stylistic devices (repetition, parallelism, lists, rhetorical questions, etc.)',
      'Score 18+ marks (out of 25) by analyzing language in depth with textual evidence'
    ],
    starterActivity: {
      description: 'Syntax Surgery: Display a sentence written two ways with different syntax: Version 1 (short, simple sentences creating staccato effect): "She walked to the door. Her hand shook. She turned the handle slowly." Version 2 (long, complex sentence creating flowing effect): "As she walked slowly to the door, her trembling hand reached for the handle, which turned with deliberate care." Students compare: How is the effect different? Why does syntax matter? Introduce the concept of deliberate syntactic choice as stylistic tool.',
      duration: '10 mins',
      resources: ['Two syntax-variant sentences (projected/printed)', 'Sentence effect comparison chart', 'Stylistic device examples']
    },
    mainActivity: {
      description: 'Teach language study (grammar, syntax, stylistic devices) for WJEC: (1) Grammatical structures: Simple sentence (one independent clause), compound (two independent clauses), complex (independent + dependent clause). Each serves different purpose. (2) Sentence types by purpose: Statement (declarative), question (interrogative), command (imperative), exclamation (exclamatory). Each creates different reader effect. (3) Syntax as style: Short sentences create pace/urgency. Long sentences create reflection/complexity. Inverted word order (fronting) emphasizes particular element. (4) Stylistic devices: Repetition (emphasizes idea), parallelism (creates pattern and balance), listing (accumulates detail or argument), rhetorical question (engages reader and signals argument), alliteration/assonance (creates musicality or emphasis). (5) Lexical choice: Formal vs informal diction, abstract vs concrete language, positive vs negative word connotation. Model language analysis: Provide short passage. Identify grammatical structures used. Analyze effect of sentence length variation. Identify stylistic devices. Explain how language choices combine to create overall effect. Show Grade 5 analysis (identifies techniques, basic explanation of effect) and Grade 8+ analysis (identifies techniques, explains effect with specificity, links to writer\'s purpose and broader context). Complete three language analysis tasks (10–15 mins each) identifying and explaining grammatical, syntactic, and stylistic features. Self-assess using mark scheme: Did I identify specific language features? Did I explain their effects? Did I link to writer\'s purpose?',
      duration: '35 mins',
      steps: ['Introduce WJEC language study assessment criteria: identification of features, analysis of effect, use of textual evidence', 'Teach grammatical structures: simple, compound, complex; explain why writers choose each', 'Teach sentence types by purpose: statement, question, command, exclamation; discuss effect each creates', 'Model syntax as style: sentence length variation, word order choices, structural patterns', 'Teach stylistic devices: repetition, parallelism, listing, rhetorical question, alliteration, assonance', 'Discuss lexical choice: formality, concreteness, connotation, word associations', 'Model language analysis: passage analysis identifying and explaining three language features', 'Show Grade 5 analysis (features identified, basic effect explanation)', 'Show Grade 8+ analysis (features identified, effect explained specifically, purpose linked, context aware)', 'Distribute three passages for language analysis', 'Task 1 — Grammatical analysis (identify simple/compound/complex sentences; explain effect) — 15 mins', 'Task 2 — Stylistic device analysis (identify 2–3 devices; explain how each creates effect) — 15 mins', 'Task 3 — Integrated language analysis (identify 3+ language features; explain combined effect) — 15 mins', 'Self-assess all three using detailed mark scheme'],
      differentiation: {
        support: 'Provide feature identification checklist: Does the passage include short sentences? Long sentences? Repetition? Questions? Commands? Pre-highlight language features in text. Offer analysis sentence starters: "The writer uses [technique] to [effect]. This creates [reader response]..." Reduce number of features to identify (1–2 instead of 3). Allow extra 2 minutes per task.',
        stretch: 'Identify how multiple language features work together to create cumulative effect. Compare two passages and discuss how different language choices create different effects. Analyse how a writer\'s language choices reflect their purpose and intended audience. Rewrite a passage using different language choices; explain how effect shifts.'
      }
    },
    plenary: {
      description: 'Language Effect Map: Display a short passage and create a visual map: Central box = passage excerpt. Arrows pointing outward to surrounding boxes, each identifying one language feature. Further arrows from each feature box to effect boxes. Example: Central passage → "short sentences" arrow → "pace" and "tension" boxes. Class completes the map together, adding features and effects. Reinforce: Language features create effects; the more features you identify and explain, the higher your analysis marks.',
      duration: '10 mins'
    },
    homework: 'Find a 200–300 word passage from a newspaper article, advertisement, or opinion piece (must be nonfiction). Conduct a detailed language analysis: identify 5+ language features (grammatical structures, sentence types, stylistic devices, lexical choices); explain the effect of each; explain how the features combine to create overall effect. Annotate the passage to show your analysis. Bring to next lesson.',
    resourcesNeeded: ['Two syntax-variant sentences (starter)', 'Sentence effect comparison chart', 'Grammatical structures explanation sheet', 'Sentence types by purpose poster', 'Stylistic device examples (repetition, parallelism, etc.)', 'Three language analysis passages (100–200 words each)', 'Feature identification checklist (for support)', 'Analysis sentence starters (for support)', 'Grade 5 and Grade 8+ model language analyses', 'Detailed WJEC language analysis mark scheme (0–25)', 'Language effect map template'],
    assessmentOpportunities: ['Syntax effect comparison in starter (quick check of awareness)', 'Three timed language analysis tasks (self-assessed against mark scheme)', 'Language effect map co-construction (group check of understanding)', 'Homework language analysis passage (self-assessed for feature identification and effect explanation)'],
    keyVocabulary: ['grammar', 'syntax', 'clause', 'phrase', 'simple sentence', 'compound sentence', 'complex sentence', 'stylistic device', 'repetition', 'parallelism', 'listing', 'rhetorical question', 'alliteration', 'assonance', 'lexical', 'connotation', 'effect'],
    crossCurricular: ['Language structure', 'Literary devices', 'Communication analysis'],
    sendAdaptations: 'Provide feature identification checklist with brief definitions of each feature; pre-highlight language features in passages; offer analysis sentence starters on sheet; reduce number of features to identify (aim for 1–2 instead of 3+); allow extra 2–3 minutes per task; provide annotated example passages showing effective feature identification and explanation; pair with peer for joint analysis; allow verbal analysis recorded by TA; use color-coding to mark different feature types.'
  },

  {
    id: 'wjec-lang-06',
    title: 'Comparison Skills: Analysing Two Texts for Theme, Technique & Purpose',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Analyse two texts (different genres, periods, or perspectives) for similar or contrasting themes',
      'Identify and compare writer\'s techniques and how each creates effect',
      'Develop sustained comparison using embedded evidence and analytical language',
      'Score 18+ marks on comparison tasks through systematic analysis with clear comparative framework'
    ],
    starterActivity: {
      description: 'Comparison Venn Diagram: Display two short texts on related topics (e.g., two articles about technology, or a poem and news article about nature). Students create a Venn diagram: Left circle (Text A features), Right circle (Text B features), Overlap (similarities). Discuss: What\'s different in how these writers approach the same topic? What\'s similar? Show that comparison requires noticing both similarities and differences.',
      duration: '10 mins',
      resources: ['Two short texts on related topic (projected/printed)', 'Venn diagram template', 'Comparison prompt cards']
    },
    mainActivity: {
      description: 'Teach comparison analysis for WJEC: (1) Identify commonalities: What themes/issues do both texts address? What similar techniques do writers use? (2) Identify differences: How do the texts approach the topic differently? What different techniques does each writer employ? Why? (3) Analyze effects: How does Text A\'s approach create effect X? How does Text B\'s approach create effect Y? (4) Develop comparison: Use comparative language ("While Text A..., Text B..." or "Both texts..., but Text A emphasizes..." or "Whereas Text A uses [technique], Text B employs [technique], creating..."). (5) Link to purpose and context: Why might writers choose different approaches? What does context (audience, purpose, genre, time period) explain about their choices? Model a comparison: Provide two texts — perhaps a contemporary news article about climate change and a 19th-century poem about nature. Model comparison: "Both texts address humanity\'s relationship with nature. However, the news article uses factual data and urgent tone to persuade readers of climate danger, whereas the poem uses vivid imagery and nostalgic reflection to critique industrial change. While the article focuses on future consequences, the poem focuses on loss of beauty." Show Grade 5 comparison (identifies some similarities/differences, uses some comparative language) and Grade 8+ comparison (systematic identification of similarities and differences, multiple techniques analyzed in both texts, sophisticated comparative language, links to purpose and context). Complete one extended comparison task (45 mins) analyzing two WJEC-style texts. Self-assess using mark scheme: Did I identify multiple points of comparison? Did I analyze technique in both texts? Did I use effective comparative language? Did I link to purpose/context?',
      duration: '35 mins',
      steps: ['Introduce WJEC comparison assessment criteria: analysis of both texts, identification of similarities/differences, textual evidence, comparative language use', 'Discuss why writers choose different approaches to similar topics', 'Introduce comparative frameworks: both... but..., whereas..., while..., unlike... , similarly...', 'Model comparison analysis: provide two texts, identify commonalities (themes, techniques, purpose)', 'Identify differences (different techniques, different emphasis, different effects)', 'Model analytical language showing comparison: embedded quotations from both texts with comparative connectives', 'Show Grade 5 comparison (compares but sometimes separately; comparative language present but basic)', 'Show Grade 8+ comparison (integrates comparison throughout; embedded evidence from both texts; sophisticated comparative language; context aware)', 'Distribute two WJEC-style texts (different genres/periods/purposes but related topics)', 'Students plan comparison (10 mins): identify 3+ points of comparison (theme, technique, purpose, effect)', 'Students draft comparison (30 mins): analyze both texts systematically, using embedded quotations and comparative language', 'Students review for: multiple comparison points, analysis depth, evidence use, comparative language variety'],
      differentiation: {
        support: 'Provide comparison frame: (Similarity 1: Both texts address [topic]. Text A uses [technique] while Text B uses [technique]. This difference creates...) (Similarity 2:...) (Difference 1:...). Offer comparative language starters on sheet. Reduce number of comparison points required (2–3 instead of 3+). Pre-identify one similarity and one difference; students develop analysis.',
        stretch: 'Identify subtle thematic differences within apparent similarities (e.g., both address grief but differently). Analyse how context (time period, genre, intended audience) explains writers\' different choices. Evaluate which approach is more effective for their respective contexts and purposes. Write a brief explanation of why writers might make contrasting choices.'
      }
    },
    plenary: {
      description: 'Comparison Showcase: Students share one particularly strong comparative statement from their analysis (e.g., a sentence showing how two writers use different techniques for similar effects). Class discusses: Does this statement clearly compare? Does it include evidence from both texts? Is the comparative language precise? Collect exemplars for classroom display.',
      duration: '10 mins'
    },
    homework: 'Complete a full comparison analysis (500–600 words, 45 minutes under timed conditions) of two provided texts from past WJEC papers. Annotate your response identifying: (1) Similarities identified, (2) Differences identified, (3) Comparative language used. Reflect: Which points of comparison were easiest to develop? Which required more detailed analysis? Bring annotated response to next lesson.',
    resourcesNeeded: ['Two short texts on related topic (starter)', 'Venn diagram template', 'Comparison prompt cards', 'Two WJEC-style texts for main task (different genres/periods)', 'Comparison planning frame (for support)', 'Comparative language starters sheet (for support)', 'Grade 5 and Grade 8+ model comparison responses', 'Detailed WJEC comparison mark scheme (0–25)', 'Timer for writing task'],
    assessmentOpportunities: ['Venn diagram creation in starter (quick check of comparison awareness)', 'Comparison planning (check for identification of multiple comparison points)', 'Timed comparison analysis (self-assessed against mark scheme)', 'Comparative statement peer review in plenary', 'Homework comparison analysis (self-assessed for multiple point comparison and language variety)'],
    keyVocabulary: ['comparison', 'similarity', 'difference', 'contrast', 'technique', 'purpose', 'effect', 'context', 'genre', 'audience', 'comparative language', 'whilst', 'whereas', 'similarly', 'unlike', 'conversely'],
    crossCurricular: ['Critical thinking', 'Analytical writing', 'Perspective-taking'],
    sendAdaptations: 'Provide comparison planning frame with identified similarities/differences; offer comprehensive comparative language starters sheet; reduce comparison length (aim for 400 words instead of 500–600); allow typed response if handwriting is barrier; allow extra 10 minutes for planning; provide annotated example comparison showing effective technique; pair with peer for comparison point brainstorming; allow verbal comparison recorded by TA; use side-by-side text layout for easier reference.'
  },

  {
    id: 'wjec-lang-07',
    title: 'Timed Writing: Managing Time Across Creative and Transactional Tasks',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Manage time effectively in 1-hour writing sessions (Creative + Transactional)',
      'Prioritize between creative and transactional writing based on personal strengths',
      'Plan briefly but effectively even under time pressure',
      'Maintain technical accuracy and communication clarity despite time constraints'
    ],
    starterActivity: {
      description: 'Time Estimation Challenge: Display a creative writing prompt and a transactional writing prompt. Ask students: How long would each task take you realistically? Collect estimates for each. Discuss variation in answers (different writing speeds, different confidence levels). Introduce the concept of personalized timing strategy: You don\'t need equal time for both; allocate based on your strengths and speed.',
      duration: '10 mins',
      resources: ['One creative prompt and one transactional prompt (projected)', 'Time estimation worksheet', 'Personal writing speed reference sheet']
    },
    mainActivity: {
      description: 'Simulate a realistic 1-hour WJEC writing session: (1) Students receive both creative and transactional prompts simultaneously. (2) They must allocate 60 minutes between the two tasks (e.g., 35 mins creative + 25 mins transactional, or 30 mins each, or 25 mins creative + 35 mins transactional, depending on personal preference and strengths). (3) Within each task allocation: 5 mins planning, remaining time drafting. (4) Emphasis on completing both tasks, even if not to full polish. Debrief after session: (A) Did your time allocation work? (B) Which task felt rushed? Why? (C) What would you change in a real exam? (D) How confident are you that both pieces communicated their purpose effectively? Complete the 1-hour simulation once with teacher guidance, then discuss personalized timing strategies. Introduce the concept of "priority order": Should you attempt creative first (while freshest) or transactional (while details are sharp)? Should you attempt the task you\'re strongest at first (build confidence) or weakest first (more thinking time needed)? Students create individualized timing plan.',
      duration: '35 mins',
      steps: ['Explain that this 1-hour session mirrors actual WJEC paper conditions', 'Distribute creative and transactional prompts simultaneously', 'Students must allocate 60 minutes between tasks realistically', 'Suggest time option 1 (35 mins creative, 25 mins transactional) for creative writers', 'Suggest time option 2 (30 mins each) for balanced writers', 'Suggest time option 3 (25 mins creative, 35 mins transactional) for transactional writers', 'Within each task: 5 mins planning, remaining time drafting', 'Set timer for full 60 minutes; students write continuously', 'Call out time checks at 10, 20, 30, 45-minute marks to encourage pacing awareness', 'At 60 minutes, students stop and submit both drafts', 'Debrief immediately: Which task felt rushed? Did time allocation match your plan? What happened if you ran over?', 'Discuss adjustments for next session', 'Students create personal timing plan for next timed writing session'],
      differentiation: {
        support: 'Provide reduced time simulation (45 minutes instead of 60, with shorter prompts). Offer time management checklist (Did I allocate time before starting? Did I check time every 15 minutes?). Allow 1 extra minute for planning per task. Pair with stronger peer for timing discussion post-simulation.',
        stretch: 'Challenge students to complete full 60-minute session, then review both pieces for technical accuracy and refinement opportunities under additional time constraints (if revising). Analyse their actual time use vs planned time; identify discrepancies and plan adjustments. Set increasingly tight time limits across multiple practice sessions.'
      }
    },
    plenary: {
      description: 'Timing Reality Check: Students reflect on their 60-minute experience. Poll: How many people finished both tasks? Who felt rushed on one task? Who had time to review? Discuss: What helped manage time well? What caused delays? Share successful strategies. Remind: In real exam, both pieces need to demonstrate communicative purpose; polish is less important than completion and clarity.',
      duration: '10 mins'
    },
    homework: 'Practice one 60-minute WJEC writing session (creative + transactional prompts provided). Use your personal timing plan. Time yourself strictly. After session, reflect: Did my timing plan work? Which task took longer than estimated? What adjustments would help in the real exam? Bring both drafts and reflection to next lesson.',
    resourcesNeeded: ['One creative and one transactional prompt (for main activity)', 'Timer (visible to all)', 'Time management checklist (for support)', 'Personal timing plan template', 'Practice prompts for homework', 'Reflection sheet for post-session debrief'],
    assessmentOpportunities: ['Time estimation in starter (awareness check)', 'Actual time allocation during 60-minute simulation (did students follow their plan?)', 'Completion of both tasks within time (practical check)', 'Post-simulation reflection (metacognition about pacing)', 'Homework timing practice and reflection'],
    keyVocabulary: ['time management', 'allocation', 'pacing', 'prioritization', 'planning', 'drafting', 'timed writing', 'personal strategy', 'contingency'],
    crossCurricular: ['Exam technique', 'Time management', 'Stress management', 'Metacognition'],
    sendAdaptations: 'Provide reduced-time simulation (45 minutes instead of 60); offer detailed time management checklist with visual timer; allow 1 extra minute per task planning phase; reduce writing length expectations (200–250 words per task instead of 300); pair with stronger peer for timing discussion and support; provide frequent time checks (every 10 minutes instead of every 15); allow use of timing visual aids (countdown timer projected); discuss contingency plans (what if you fall behind?).'
  },

  {
    id: 'wjec-lang-08',
    title: 'Synthesis: Mock Exam Under Full Assessment Conditions',
    duration: '2 hours',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Complete full WJEC C700QS mock exam (both components) under authentic conditions',
      'Demonstrate all assessed skills (creative writing, transactional writing, reading analysis, language study)',
      'Self-assess performance against detailed mark schemes',
      'Identify strengths and development areas before final exam'
    ],
    starterActivity: {
      description: 'Pre-Exam Checklist: Display a 5-item checklist: (1) Do I understand the timing? (2) Do I have my personal exam strategy? (3) Do I feel ready for both writing tasks? (4) Do I feel confident with reading analysis? (5) Do I understand language study assessment? Students self-assess each item: Yes/Somewhat/No. Quick discussion: Which areas need last-minute review before mock? This activates exam awareness.',
      duration: '5 mins',
      resources: ['Pre-exam readiness checklist (projected)', 'Self-assessment recording sheet']
    },
    mainActivity: {
      description: 'Conduct a full mock exam simulating authentic WJEC C700QS conditions: (1) Students complete Component 1 (1 hour: creative + transactional writing) under timed conditions. (2) Students complete Component 2 (1 hour: reading analysis + language study) under timed conditions. Provide: Full paper with all questions, detailed mark schemes, time management reminders (warnings at 15, 5 mins before end of each section). After exam: Students self-assess each section against detailed mark schemes. Create self-assessment sheet identifying: (A) Strengths (what went well, what felt confident), (B) Challenges (what felt rushed, what wasn\'t clear), (C) Personal development priorities (which skill or task type needs more practice). Whole-class debrief: General questions (How did you manage the timing? Which section was most challenging?). Individual consultation: Teacher reviews each student\'s mock exam and self-assessment, providing personalized feedback and prioritized next steps.',
      duration: '110 mins (5 min briefing + 60 min Component 1 + 45 min debrief & self-assessment)',
    },
    plenary: {
      description: 'Development Planning: Each student writes a personal exam development plan for final weeks: (1) What will I focus on before the real exam? (2) What specific skill (creative opening, transactional register consistency, inference analysis, technique identification) needs practice? (3) What resources or support do I need? (4) What\'s one thing I did well that I want to repeat in the real exam? Students share one focus area with a partner. Teacher collects all development plans to inform targeted revision support.',
      duration: '10 mins'
    },
    homework: 'Complete final self-reflection on mock exam performance: (1) Review your self-assessed marks and compare with teacher feedback. (2) Identify one specific weakness (e.g., "My creative openings lack specificity", "My transactional writing register shifts inconsistently", "I miss implied meanings in reading"). (3) Complete one focused practice task targeting that weakness. (4) Bring both reflection and practice task to next lesson for review.',
    resourcesNeeded: ['Full WJEC C700QS mock exam paper (both components)', 'Detailed mark schemes for all sections (0–25 for each)', 'Time management reminders/warnings for teacher', 'Self-assessment sheet template (strengths, challenges, priorities)', 'Development plan template', 'Exam conditions (invigilated, timed, quiet environment)'],
    assessmentOpportunities: ['Pre-exam readiness checklist (identifies preparation gaps)', 'Complete mock exam response (comprehensive assessment of all skills)', 'Self-assessment against mark schemes (identifies student perception vs actual performance)', 'Personal development plan (identifies priorities for final revision)', 'Homework focused practice task and reflection'],
    keyVocabulary: ['mock exam', 'assessment conditions', 'self-assessment', 'mark scheme', 'development plan', 'priority', 'strength', 'challenge', 'reflection', 'authentic'],
    crossCurricular: ['Exam technique', 'Self-assessment', 'Metacognition', 'Stress management'],
    sendAdaptations: 'Provide detailed mark schemes with visual band descriptors; offer time management cues (5-minute interval warnings); reduce paper length or task number if needed; allow extra 10–15 minutes per component (total 2.5 hours instead of 2); provide structure frames and word banks for both writing tasks; pair with peer for mutual support during exam; provide access to reference materials during language study section if appropriate; allow recorded speaking element if required; debrief individually with teacher immediately after; provide detailed annotated feedback on mock exam response.'
  },

  {
    id: 'wjec-lang-09',
    title: 'Creative Writing Refinement: Voice, Technique Variety & Technical Precision',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Develop distinctive, sustained writer\'s voice in creative work',
      'Use a range of literary techniques effectively and purposefully',
      'Maintain high technical accuracy (spelling, punctuation, grammar) in extended writing',
      'Score 22+ marks (out of 25) through combining literary quality with precision'
    ],
    starterActivity: {
      description: 'Voice Comparison: Display two passages on same topic (e.g., waking up in the morning) written in markedly different voices — one lyrical and reflective, one sharp and urgent. Students identify: Which voice is which? How can you tell? What word choices and sentence structures create each voice? Introduce the concept that "voice" is the reader\'s sense of the writer\'s presence, created through consistent language choices.',
      duration: '10 mins',
      resources: ['Two voice-distinct passages on same topic (projected/printed)', 'Voice characteristics chart', 'Language choice examples']
    },
    mainActivity: {
      description: 'Teach advanced creative writing techniques: (1) Voice consistency: Make deliberate, consistent language choices that reflect a particular perspective or personality. Voice is created through: word choice (formal vs colloquial, abstract vs concrete, unusual metaphors), sentence structure (short staccato vs flowing complex), tense and perspective choices (first person creates intimacy; third person creates distance), sensory focus (visual vs auditory focus, for example). (2) Technique variety and purpose: Use multiple techniques, but each should serve the narrative. Don\'t use metaphor just to have metaphor; use it to reveal character or deepen mood. (3) Technical accuracy under pressure: Maintain spelling, punctuation, and grammar even during rapid drafting. Slow writing speed if necessary to sustain accuracy. (4) Revision and refinement: After drafting, read aloud to catch rhythm issues. Check for repetitive word use. Verify technical accuracy. Model a creative passage showing strong voice: consistent perspective (first person), lyrical sensory language, varied sentence structure, multiple techniques purposefully deployed. Show Grade 6 response (clear narrative, basic voice, some technical errors) and Grade 9 response (compelling voice, technique variety, minimal technical errors, language precision throughout). Complete a revision task: Take a previous creative writing draft (from lesson 2) and revise it for voice consistency, technique variety, and technical accuracy. Students should annotate changes made and explain their revisions.',
      duration: '35 mins',
      steps: ['Introduce voice as reader\'s sense of writer presence through language choices', 'Discuss voice components: word choice formality, sentence structure patterns, perspective, sensory focus', 'Model voice through example: show how to maintain consistent voice across 3–4 paragraphs', 'Discuss technique variety: using multiple techniques purposefully, not just for inclusion', 'Show Grade 6 creative response (voice present but inconsistent, technique basic, some technical errors)', 'Show Grade 9 creative response (strong consistent voice, varied techniques purposefully used, minimal technical errors)', 'Discuss revision strategies: reading aloud, checking word repetition, verifying technical accuracy', 'Students select previous creative writing draft', 'Students revise for: (A) Voice consistency (do language choices reflect same perspective throughout?), (B) Technique variety (are multiple techniques used purposefully?), (C) Technical accuracy (are errors corrected?)', 'Students annotate revision changes and explain reasoning', 'Peer review of revision choices: Are the changes effective? Does voice feel stronger?'],
      differentiation: {
        support: 'Provide voice characteristics chart showing examples of lyrical, urgent, reflective, matter-of-fact voices. Offer technique purposefulness checklist: "Why did I use this metaphor? Does it serve the story?" Allow students to revise for one element at a time (first voice, then technique, then accuracy) rather than simultaneously. Reduce revision scope (revise two paragraphs instead of full passage).',
        stretch: 'Rewrite passage in a different voice; explain what language changes were necessary. Identify all techniques in peer\'s revised passage and evaluate their effectiveness. Write brief analysis of how your voice choices reflect character perspective or narrative purpose.'
      }
    },
    plenary: {
      description: 'Voice Showcase: Students read aloud one revised paragraph from their creative writing. Class listens for voice consistency and identifies one word choice or sentence structure that creates voice. Provide feedback: "Your voice feels [descriptor] throughout this paragraph because of [specific language choices]." Reinforce: Strong voice makes writing memorable and engaging.',
      duration: '10 mins'
    },
    homework: 'Revise a complete creative writing passage (300–400 words) for voice consistency, technique variety, and technical accuracy. Annotate the passage showing: (1) Voice markers (highlight language choices that create voice), (2) Techniques identified (label metaphors, imagery, etc.), (3) Technical corrections made. Write a brief reflection: What does your voice sound like? What techniques feel most natural to you? Bring annotated passage and reflection to next lesson.',
    resourcesNeeded: ['Two voice-distinct passages (starter)', 'Voice characteristics chart', 'Technique purposefulness checklist (for support)', 'Student creative writing draft from previous lesson', 'Grade 6 and Grade 9 model creative responses', 'Revision annotation template', 'Reading aloud checklist'],
    assessmentOpportunities: ['Voice identification in starter passages (quick check)', 'Revision task (check for voice consistency improvements)', 'Peer review of revision choices (qualitative feedback)', 'Plenary voice showcase (formative assessment of voice consistency)', 'Homework annotated revision and reflection'],
    keyVocabulary: ['voice', 'perspective', 'consistency', 'technique variety', 'purposeful', 'word choice', 'sentence structure', 'sensory', 'tense', 'revision', 'technical accuracy', 'authentic'],
    crossCurricular: ['Literary style', 'Creative expression', 'Self-expression through writing'],
    sendAdaptations: 'Provide detailed voice characteristics chart with examples of different voices; offer technique purposefulness checklist guiding intentional use; reduce scope of revision (revise two paragraphs instead of full passage); allow extra time for reading aloud and reflection; pair with stronger peer for voice feedback; provide checklist for technical accuracy review (spelling, punctuation, grammar); allow verbal reflection recorded by TA; use highlighted examples showing strong voice maintenance across passages.'
  },

  {
    id: 'wjec-lang-10',
    title: 'Transactional Mastery: Sophisticated Purpose Achievement Across Formats',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Write sophisticated transactional texts achieving complex communicative purposes',
      'Adapt register and tone with precision to match specific audiences',
      'Organize information strategically to maximize persuasive or communicative impact',
      'Score 22+ marks (out of 25) through combining effective communication with technical accuracy'
    ],
    starterActivity: {
      description: 'Register Precision: Display five short transactional openings (one sentence each) at different formality levels describing the same purpose (requesting something from school). Students rank them from most formal to least formal. Discuss: What specific language markers signal formality? How would you identify the precise register needed for a particular audience?',
      duration: '10 mins',
      resources: ['Five register-variant opening sentences (projected/printed)', 'Register formality scale', 'Audience-register matching chart']
    },
    mainActivity: {
      description: 'Teach sophisticated transactional writing: (1) Purpose complexity: Transactional texts often achieve multiple purposes simultaneously. E.g., an email might: request something AND acknowledge a previous issue AND build rapport. (2) Register precision: Don\'t settle for "formal" or "informal"; identify the specific register that suits the particular relationship and context. (3) Strategic organization: Sequence information not just logically but persuasively. Frontload the most compelling reason in a complaint. Lead with shared values in a persuasive letter. (4) Audience adaptation: Anticipate reader concerns and address them preemptively. (5) Technical accuracy: Maintain accuracy even in tone shifts; errors undermine purpose. Model a sophisticated transactional text: Email to local council requesting youth facility renovation. Purpose 1 (primary): Request immediate action. Purpose 2 (secondary): Demonstrate that young people have thoughtfully researched the need. Purpose 3 (tertiary): Build collaborative tone. Organization: Opening (introduce issue + signal youth involvement), Body 1 (youth research findings + specific recommendations), Body 2 (address anticipated council concern about funding), Body 3 (vision for community benefit), Closing (call to action + collaborative language). Show Grade 5 response (purpose achieved, register mostly consistent, some organizational awkwardness) and Grade 9 response (multiple purposes achieved seamlessly, register precisely appropriate, strategic organization, sophisticated language, minimal errors). Complete one extended transactional task (40 mins) requiring complex purpose and strategic organization. Self-assess using mark scheme.',
      duration: '35 mins',
      steps: ['Introduce concept of transactional purpose complexity: multiple simultaneous purposes', 'Discuss how audience determines register precision; show matching chart', 'Model strategic organization: frontloading compelling information, addressing reader concerns, building rapport', 'Model multiple-purpose text: opening (introduce purpose), body (develop with evidence + address concerns), closing (action + collaborative tone)', 'Show Grade 5 transactional response (purpose clear but basic organization, register mostly consistent)', 'Show Grade 9 transactional response (multiple purposes achieved, strategic organization, precise register, sophisticated language)', 'Discuss how technical accuracy supports purpose: errors undermine credibility', 'Distribute complex transactional prompt (requiring multiple purposes or sophisticated audience relationship)', 'Students plan (10 mins): identify primary and secondary purposes, analyze audience, determine register, plan organization strategy', 'Students draft (30 mins): develop with specific detail, maintain register, build persuasive/communicative effect through organization'],
      differentiation: {
        support: 'Provide detailed planning sheet: What are your purposes? Who is your audience? What register is appropriate? What are their concerns? How will you address them? Offer structured organizer: (Opening: [purpose + rapport], Body 1: [evidence/detail], Body 2: [address concern], Closing: [action + tone]). Reduce writing length (250–300 words instead of 350–400). Provide register reference cards.',
        stretch: 'Write text achieving three distinct purposes. Analyse how structure choices persuade or communicate. Rewrite text for different audience; explain register and organization changes required. Compare with model answer; identify sophisticated strategies used and attempt to apply them.'
      }
    },
    plenary: {
      description: 'Purpose Effectiveness Check: Display one student transactional response (anonymized). Class identifies: (1) What purposes does this text achieve? (2) Is register appropriate to audience? (3) Is the persuasive/communicative effect strong? Why or why not? Provide constructive feedback focusing on purpose achievement and strategic effectiveness.',
      duration: '10 mins'
    },
    homework: 'Write a sophisticated transactional text (350–400 words, 40 minutes under timed conditions) in response to a complex scenario requiring multiple purposes and strategic audience awareness. Afterward, annotate identifying: (1) Primary and secondary purposes (are both achieved?), (2) Register markers (is register consistent and appropriate?), (3) Strategic organization choices (how does structure support persuasive/communicative effect?). Bring annotated response to next lesson.',
    resourcesNeeded: ['Five register-variant opening sentences (starter)', 'Register formality scale', 'Audience-register matching chart', 'Complex transactional prompt requiring multiple purposes', 'Planning sheet (for support)', 'Structured organizer template (for support)', 'Grade 5 and Grade 9 model transactional responses', 'Detailed WJEC transactional mark scheme (0–25)', 'Timer for writing session'],
    assessmentOpportunities: ['Register precision identification in starter (quick check)', 'Planning sheet (check for purpose identification and audience analysis)', 'Timed transactional writing task (self-assessed against mark scheme)', 'Purpose effectiveness analysis in plenary', 'Homework annotated transactional response (self-assessed for multiple purpose achievement and register consistency)'],
    keyVocabulary: ['transactional', 'purpose complexity', 'register precision', 'audience awareness', 'strategic organization', 'persuasive effect', 'communicative intent', 'coherence', 'rapport', 'authenticity'],
    crossCurricular: ['Persuasive communication', 'Audience awareness', 'Strategic thinking'],
    sendAdaptations: 'Provide detailed planning sheet for purpose identification and audience analysis; offer structured organizer with sentence starters for each section; reduce writing length (250–300 words instead of 350–400); allow typed response if handwriting is barrier; allow extra 5 minutes per task; provide register reference cards with examples; give examples of sophisticated transactional texts from real organizations; pair with peer for planning discussion; allow oral planning recorded by TA; provide annotated example showing effective multiple-purpose communication.'
  },

  {
    id: 'wjec-lang-11',
    title: 'Reading Analysis Depth: Inference, Technique, & Interpretive Sophistication',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Make developed, layered inferences supported by multiple textual clues',
      'Analyze technique with sophistication, explaining effect and broader implications',
      'Develop interpretations that consider context, ambiguity, and multiple readings',
      'Score 22+ marks (out of 25) through combining analysis depth with textual precision'
    ],
    starterActivity: {
      description: 'Inference Layers: Display a short passage (5–6 sentences) with dense implication. Show how the same detail can support different inference levels: Surface inference ("The character is sad"), Deeper inference ("The character feels isolated"), Sophisticated inference ("The writer suggests that grief is fundamentally isolating, even in the presence of others"). Discuss: What clues support each level? How does evidence accumulation strengthen inference?',
      duration: '10 mins',
      resources: ['Short passage with layered implication (projected/printed)', 'Inference layers diagram', 'Clue identification sheet']
    },
    mainActivity: {
      description: 'Teach sophisticated reading analysis: (1) Inference development: Simple inference ("X happens, so Y is true") vs developed inference (multiple details combine to suggest meaning; consider counterargument; acknowledge ambiguity). (2) Technique analysis depth: Identify technique, explain immediate effect, link to writer\'s purpose, consider broader implications. E.g., "The writer uses fragmentary sentences, creating urgency and fragmentation. This technique mirrors the character\'s mental state, suggesting how trauma disrupts coherent thought." (3) Interpretive sophistication: Consider how context (time period, author\'s biography, genre conventions) shapes meaning. Recognize that some texts deliberately contain ambiguity; multiple readings can be valid. (4) Textual precision: Support all claims with specific quotation. Show how close reading of word choice reveals implication. Model analysis task: Provide 600-word literary passage with three reading questions: (A) Explicit retrieval, (B) Developed inference, (C) Technique analysis with broader implication. Model Grade 6 response (inference present, technique identified, some support but basic) and Grade 9 response (developed inference with multiple supporting details, sophisticated technique analysis linking to purpose and broader theme, nuanced interpretation acknowledging complexity). Complete three reading analysis tasks with increasing complexity. Self-assess using detailed mark scheme.',
      duration: '35 mins',
      steps: ['Introduce inference development: simple vs layered vs sophisticated inference', 'Model how multiple textual clues combine to support developed inference', 'Show technique analysis depth: identify → explain effect → link to purpose → consider broader implication', 'Discuss interpretive sophistication: context awareness, ambiguity tolerance, multiple valid readings', 'Show Grade 6 reading response (inference basic, technique identified but not deeply analyzed)', 'Show Grade 9 reading response (developed inference with evidence, sophisticated technique analysis, contextual awareness, nuanced interpretation)', 'Distribute 600-word passage with three questions (retrieval, inference, technique)', 'Task 1 — Explicit retrieval (state information directly; provide quotation) — 5 mins', 'Task 2 — Developed inference (make inference from multiple textual clues; acknowledge complexity) — 15 mins', 'Task 3 — Sophisticated technique analysis (identify technique; explain effect; link to purpose; consider broader implication) — 15 mins', 'Self-assess all three using detailed mark scheme'],
      differentiation: {
        support: 'Provide inference scaffolds: "The text suggests that ___ because ___. We see this in \'[quotation 1]\' and \'[quotation 2]\', which show that ___." Offer technique analysis scaffolds: "The writer uses ___ (technique) when ___. This creates the effect of ___. The writer likely used this technique to ___." Pre-highlight relevant text sections. Reduce passage length (400 words instead of 600).',
        stretch: 'Make multiple valid inferences from ambiguous passage; explain how each interpretation is supported. Analyse how technique choices reveal author\'s perspective or assumptions. Consider how context (genre, time period, intended audience) shapes meaning. Compare interpretations with peers and discuss validity of multiple readings.'
      }
    },
    plenary: {
      description: 'Interpretation Strength Showcase: Display three interpretations of the same passage: (A) Simple inference, (B) Developed inference with multiple clues, (C) Sophisticated interpretation acknowledging context and complexity. Class votes on strength of each and discusses: What evidence is required for interpretation to be credible? How does textual specificity strengthen analytical claims?',
      duration: '10 mins'
    },
    homework: 'Find a 400–500 word passage from a literary text you are reading. Write three analytical responses: (1) Retrieve two explicit facts (with quotations). (2) Make one developed inference using multiple textual clues (explain how clues combine to support meaning). (3) Analyse one technique the writer uses; explain its effect, link to purpose, and consider broader implications. Bring annotated passage and responses to next lesson.',
    resourcesNeeded: ['Short passage with layered implication (starter)', 'Inference layers diagram', 'Literary passage for main tasks (600 words)', 'Inference development scaffolds (for support)', 'Technique analysis scaffolds (for support)', 'Grade 6 and Grade 9 model reading responses', 'Detailed WJEC reading analysis mark scheme (0–25)', 'Context information for passage (author, period, genre)'],
    assessmentOpportunities: ['Inference layers identification in starter (quick check)', 'Three timed reading analysis tasks (self-assessed against mark scheme)', 'Interpretation strength comparison in plenary', 'Homework reading analysis (self-assessed for inference development and technique analysis depth)'],
    keyVocabulary: ['inference', 'developed inference', 'technique', 'effect', 'purpose', 'implication', 'context', 'ambiguity', 'interpretation', 'textual evidence', 'sophistication', 'nuance'],
    crossCurricular: ['Critical thinking', 'Literary analysis', 'Context awareness'],
    sendAdaptations: 'Provide comprehensive inference and technique scaffolds with sentence starters; pre-highlight relevant text sections; reduce passage length (400 words instead of 600); offer multiple-choice elements for some questions; allow extra 3–5 minutes per analysis task; provide annotated example responses showing developed inference and sophisticated technique analysis; pair with stronger peer for interpretive discussion; allow verbal analysis recorded by TA; provide visual clue identification examples showing how details combine to support inference.'
  },

  {
    id: 'wjec-lang-12',
    title: 'Language Analysis Sophistication: Structure, Effect, & Contextual Awareness',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Identify and analyze language features (grammatical, stylistic, lexical) with precision',
      'Explain effects of language choices with specificity and depth',
      'Link language analysis to writer\'s purpose and intended effect on reader',
      'Score 22+ marks (out of 25) through combining technical precision with interpretive depth'
    ],
    starterActivity: {
      description: 'Effect Precision: Display a sentence with multiple potential effects of a particular language choice. E.g., "The politician used short, blunt sentences." Potential effects: (1) Creates impression of decisiveness, (2) Suggests anger or impatience, (3) Reflects speaker\'s limited vocabulary, (4) Mirrors the simplicity of the idea being expressed. Discuss: Which effect is most likely? How do we decide? What context clues help?',
      duration: '10 mins',
      resources: ['Sample sentence with multiple potential effects (projected)', 'Effect precision checklist', 'Context consideration guide']
    },
    mainActivity: {
      description: 'Teach sophisticated language analysis: (1) Feature identification with precision: Don\'t just identify "short sentences"; identify "two consecutive single-word sentences creating staccato pace." (2) Effect specificity: Don\'t say "creates effect"; specify "creates urgency and prevents reader pause, mirroring the character\'s panicked mental state." (3) Purpose linkage: Consider why the writer made this choice. What reader response is desired? (4) Contextual awareness: Consider genre (news article demands different language than poem), intended audience (academic writing differs from advertising), purpose (persuade vs inform vs entertain). (5) Multiple feature integration: Show how several language features work together to create cumulative effect. Model a language analysis passage: Analyze a 200-word excerpt, identifying 3–4 language features and explaining how each creates effect while contributing to overall impact. Show Grade 5 analysis (features identified, basic effect explanation) and Grade 9 analysis (precise feature identification, specific effect explanation, purpose linkage, contextual awareness, integrated analysis of multiple features). Complete one integrated language analysis task (30 mins) analyzing multiple features from provided passage. Self-assess using detailed mark scheme.',
      duration: '35 mins',
      steps: ['Introduce precision in feature identification: avoid vague labels', 'Teach effect specificity: move from "creates effect" to "creates reader response of X because [reason]"', 'Discuss purpose linkage: why would writer choose this language?', 'Introduce contextual consideration: genre, audience, purpose shape language choices', 'Model identifying multiple features working together to create cumulative effect', 'Show Grade 5 language analysis (features identified, basic effect)', 'Show Grade 9 language analysis (precise identification, specific effect, purpose linked, contextual aware, integrated)', 'Distribute 200–300 word passage for analysis', 'Students identify 3–4 language features (grammatical, stylistic, lexical)', 'Students explain effect of each feature with specificity', 'Students link features to writer\'s purpose and overall impact', 'Students consider context (genre, audience, purpose) shaping language choices'],
      differentiation: {
        support: 'Provide feature identification checklist: Does the passage include short sentences? Long sentences? Repetition? Questions? Alliteration? Pre-highlight language features. Offer effect specificity checklist: "What does this feature make the reader feel/think? Why?" Provide purpose linking sentence starter: "The writer likely used [feature] to [purpose]." Allow analysis of 2 features instead of 3–4.',
        stretch: 'Identify how multiple features work together to create cumulative effect. Analyse how the same feature might create different effects in different contexts. Rewrite passage changing language choices; explain how meaning shifts. Compare language choices in two texts addressing similar topics; discuss why writers made different choices.'
      }
    },
    plenary: {
      description: 'Feature Integration Map: Display a passage and create a visual map showing language features identified and their effects. Central box = passage. Arrows to feature boxes. Arrows to effect boxes. Further arrows showing how effects combine to create overall impact. Class co-creates the map. Reinforce: High-level language analysis integrates multiple features and shows how they work together.',
      duration: '10 mins'
    },
    homework: 'Find a 250–300 word passage from a newspaper article, advertisement, or essay (nonfiction). Conduct a detailed language analysis: identify 4+ language features (grammatical structures, sentence types, stylistic devices, lexical choices); explain the effect of each; explain how features combine to create overall effect; consider context (genre, audience, purpose) shaping language choices. Bring annotated passage to next lesson.',
    resourcesNeeded: ['Sample sentence with multiple effects (starter)', 'Effect precision checklist', 'Context consideration guide', 'Passage for main task (200–300 words)', 'Feature identification checklist (for support)', 'Effect specificity checklist (for support)', 'Purpose linking sentence starters (for support)', 'Grade 5 and Grade 9 model language analyses', 'Detailed WJEC language analysis mark scheme (0–25)', 'Feature integration map template'],
    assessmentOpportunities: ['Effect precision identification in starter (quick check)', 'Feature identification and effect explanation in main task (self-assessed)', 'Feature integration in plenary map co-creation', 'Homework language analysis passage (self-assessed for precision and depth)'],
    keyVocabulary: ['language feature', 'grammatical', 'stylistic', 'lexical', 'effect', 'specificity', 'purpose linkage', 'context', 'integration', 'cumulative effect', 'precision'],
    crossCurricular: ['Language analysis', 'Literary devices', 'Contextual communication'],
    sendAdaptations: 'Provide feature identification checklist with brief definitions; offer effect specificity checklist with guiding questions; provide purpose linking sentence starters; pre-highlight language features in passage; reduce number of features to identify (aim for 2–3 instead of 3–4); allow extra 5 minutes per task; provide annotated example analysis showing precise identification and specific effect explanation; pair with peer for joint analysis discussion; allow verbal analysis recorded by TA; use color-coded example showing feature integration.'
  },

  {
    id: 'wjec-lang-13',
    title: 'Extended Revision: Targeted Skill Building & Weak Area Development',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Identify personal skill gaps from mock exam performance',
      'Complete targeted practice focusing on weakest areas',
      'Build confidence in specific task types or techniques',
      'Demonstrate measurable improvement in identified weak skills'
    ],
    starterActivity: {
      description: 'Weakness Identification: Students review their mock exam self-assessment and teacher feedback. They identify: (1) What skill felt most challenging? (2) Why? (e.g., time pressure, conceptual confusion, technique weakness). (3) What specific improvement would help most? Display common weaknesses: "Creative openings lack specificity", "Transactional register shifts", "Inference not developed enough", "Technique analysis too basic". Poll: Which is your challenge? Discuss how targeted practice addresses specific weaknesses.',
      duration: '10 mins',
      resources: ['Mock exam self-assessment and teacher feedback (student documents)', 'Common weaknesses poster', 'Skill development pathway chart']
    },
    mainActivity: {
      description: 'Deliver individualized targeted skill-building: (1) Students spend 45 minutes on ONE skill area requiring improvement (identified from mock exam). (2) Teacher provides focused instruction and practice for that area. (3) Students complete multiple short practice activities (rather than one long task) to build fluency. E.g., if weakness is creative openings, students complete: (A) Quick analysis of 5 strong openings (identify specificity, sensory detail, intrigue — 5 mins), (B) Quick write: 5 different opening sentences for same scene (5 mins), (C) Revision: improve their own opening sentence (5 mins), (D) Peer feedback on opening specificity (5 mins), (E) Timed opening task mimicking exam (15 mins). Debrief after task: Did this focused practice help? Are you feeling more confident? What\'s still unclear? Complete the practice activity once with scaffolding, then potentially attempt once more for fluency building. Goal: By end of session, student should feel noticeably more confident and capable in targeted skill.',
      duration: '40 mins'
    },
    plenary: {
      description: 'Confidence Reflection: Students reflect: (1) Did focused practice on this skill help? (2) Are you more confident now? (3) What would you still like to practice before the real exam? (4) What\'s one thing you learned or improved today? Whole-class discussion: Share successes. Discuss how targeted practice builds skill and confidence. Remind: Final weeks before exam should focus on your weakest areas, not reviewing strengths.',
      duration: '10 mins'
    },
    homework: 'Choose your single weakest skill from mock exam feedback. Complete three focused practice tasks targeting that skill area: (1) Analysis/identification task, (2) Quick practice task, (3) Timed exam-style task. Reflect: Has your confidence in this skill improved? What would help you feel more prepared before the real exam? Bring practice tasks and reflection to next lesson.',
    resourcesNeeded: ['Mock exam feedback (student documents)', 'Common weaknesses poster', 'Targeted skill-building materials for each weakness area: Creative openings (strong opening analysis + quick practice), Transactional register (register analysis + practice task), Inference development (clue identification + practice), Technique analysis (technique identification + effect explanation practice)', 'Multiple short practice activities vs one long task', 'Scaffolded and unsupported practice versions', 'Confidence reflection sheet'],
    assessmentOpportunities: ['Weakness identification from mock exam (self-assessment)', 'Focused practice task completion (check for understanding)', 'Peer feedback on focused practice task', 'Confidence reflection and improvement identification', 'Homework targeted practice tasks and reflection'],
    keyVocabulary: ['weakness', 'targeted', 'skill gap', 'fluency', 'confidence', 'focused practice', 'improvement', 'reflection', 'development'],
    crossCurricular: ['Self-awareness', 'Metacognition', 'Growth mindset'],
    sendAdaptations: 'Provide clear weakness identification from mock exam feedback; offer multiple short practice activities (5–10 mins each) rather than one long task; provide scaffolded practice version first, then less scaffolded version for building fluency; allow extra time (60 minutes instead of 45 for main task); pair with peer for same weakness area (collaborative practice); provide confidence-building feedback; celebrate improvements; allow adapted assessment of skill (e.g., longer time, structure support, word bank) while practicing; provide written reflection prompts to guide thinking.'
  },

  {
    id: 'wjec-lang-14',
    title: 'Final Exam Preparation: Stress Management & Confidence Building',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Manage exam anxiety and stress using practical techniques',
      'Build confidence based on demonstrated skill improvement',
      'Finalize personal exam strategy considering practice experience',
      'Approach final exam with clarity, readiness, and resilience'
    ],
    starterActivity: {
      description: 'Confidence Stocktake: Students complete a quick self-assessment: (1) Rate your confidence in each skill (creative writing, transactional writing, reading analysis, language analysis) on a 1–10 scale. (2) Identify one skill where confidence has grown since start of revision. (3) Identify one strategy that helped build confidence (e.g., targeted practice, understanding mark scheme, time management planning). Whole-class discussion: Celebrate improvements. Identify common confidence-building strategies to share.',
      duration: '10 mins',
      resources: ['Confidence self-assessment scale (1–10 for each skill)', 'Improvement tracking sheet', 'Strategy sharing chart']
    },
    mainActivity: {
      description: 'Address exam stress and build final-stage confidence: (1) Discuss common exam anxieties: time pressure, fear of blank page, worry about mistakes, physical symptoms (racing heart, shaking hands). Normalize these responses; they\'re common. (2) Introduce practical anxiety management techniques: Deep breathing (4–count in, 6–count out), positive self-talk ("I\'ve prepared well for this exam"), physical techniques (tensing and releasing muscle groups), grounding (5 things you can see, 4 you can hear, 3 you can touch, 2 you can smell, 1 you can taste). (3) Discuss exam day logistics: What to bring, when to arrive, what to do if you feel panicked (raise hand, ask for water, breathe). (4) Create personal pre-exam routine: 30 minutes before exam, what will help you settle (quiet reflection, review of strategy card, conversation with supportive person)? (5) Finalize exam strategy: Review timing plan, priority order (which task first?), contingencies (if running late, what will you do?). Practice one anxiety management technique together (deep breathing or grounding exercise). Create personal "exam day kit": strategy card, anxiety management reminder card, confidence statements.',
      duration: '40 mins',
      steps: ['Introduce common exam anxieties and normalize responses', 'Teach deep breathing technique: 4-in, 6-out', 'Teach grounding technique: 5-4-3-2-1 sensory awareness', 'Discuss positive self-talk: "I\'ve prepared for this. I know what to do."', 'Discuss physical anxiety management: exercise beforehand, warm-up stretches', 'Review exam day logistics: timing, arrival, what to bring', 'Create personal pre-exam routine: what helps you feel ready?', 'Finalize timing strategy: review plan, priority order, contingencies', 'Practice one anxiety management technique together (deep breathing)', 'Each student creates personal exam day kit: strategy card, anxiety reminder, confidence statements', 'Practice accessing kit and using techniques if anxiety spikes during exam'],
      differentiation: {
        support: 'Provide anxiety management reminder card with step-by-step breathing instructions and grounding script. Allow practice of techniques multiple times. Discuss one-on-one any specific exam anxieties. Create simplified exam day kit. Assign peer or teacher check-in immediately before exam. Discuss contingencies for specific worries (e.g., "What if I go blank?").',
        stretch: 'Discuss how to channel exam nerves into focused energy. Develop personalized resilience strategies beyond basic anxiety management. Reflect on past successes and apply confidence lessons to final exam.'
      }
    },
    plenary: {
      description: 'Confidence & Readiness Affirmation: Each student writes one sentence affirming their readiness and confidence: "I am ready for this exam because ___." or "I will manage exam anxiety by ___." Students optionally share with a partner or small group. Whole-class affirmation: Teacher and classmates acknowledge each other\'s readiness. Send students into final revision phase with clear message: You\'ve prepared well. You have strategies. You will do this.',
      duration: '10 mins'
    },
    homework: 'Complete pre-exam final tasks: (1) Review your personal exam strategy card and timing plan one more time. (2) Use at least one anxiety management technique daily from now until exam (e.g., breathing exercise, positive affirmation, physical activity). (3) Assemble your exam day kit: strategy card, anxiety reminder card, confidence statements, anything else that will help you feel ready. (4) Get good sleep and healthy meals for final days. (5) On exam morning, use your pre-exam routine to settle and prepare. Bring exam day kit to final class before exam.',
    resourcesNeeded: ['Confidence self-assessment scale (1–10 for each skill)', 'Anxiety management technique instruction sheet (deep breathing, grounding, positive self-talk)', 'Exam day logistics checklist', 'Personal pre-exam routine template', 'Exam day kit assembly checklist: strategy card, anxiety reminder, confidence statements', 'One-on-one anxiety discussion (for support students)', 'Affirmation reflection sheet'],
    assessmentOpportunities: ['Confidence stocktake self-assessment', 'Anxiety management technique practice (formative check)', 'Personal exam strategy finalization (readiness check)', 'Personal affirmation reflection', 'Exam day kit assembly (readiness indicator)'],
    keyVocabulary: ['confidence', 'anxiety', 'stress management', 'resilience', 'strategy', 'preparation', 'readiness', 'affirmation', 'grounding', 'contingency'],
    crossCurricular: ['Wellbeing', 'Stress management', 'Mental health', 'Resilience building'],
    sendAdaptations: 'Provide detailed anxiety management reminder cards with step-by-step instructions for breathing and grounding techniques; allow multiple practice runs of techniques; discuss individual exam anxieties one-on-one and develop personalized coping strategies; simplify exam day kit (core items only); arrange peer or teacher check-in immediately before exam; prepare contingency discussion for specific worries (going blank, time pressure, etc.); normalize anxiety responses; celebrate preparation and readiness; provide affirmation reinforcement throughout final revision period; offer quiet space if anxiety spikes during exam; arrange predetermined signal system for requesting exam support if needed.'
  },

  {
    id: 'wjec-lang-15',
    title: 'Post-Exam Reflection: Learning from Performance & Future Development',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'WJEC',
    learningObjectives: [
      'Analyze exam performance objectively using mark scheme feedback',
      'Identify patterns in performance (strengths maintained, improvements achieved, persistent challenges)',
      'Develop learning from exam experience applicable to future writing and reading tasks',
      'Celebrate achievements and plan continued growth beyond this exam'
    ],
    starterActivity: {
      description: 'Honest Performance Review: Students receive marked exam papers and detailed feedback. They complete a quick initial reaction: (1) What marks did you receive? (2) Are you surprised? Relieved? Disappointed? (3) Which section went better than expected? Which was harder than expected? Whole-class discussion: It\'s normal to feel mixed emotions about exam results. Marks don\'t define worth. The goal is learning from performance.',
      duration: '10 mins',
      resources: ['Marked exam papers and detailed feedback', 'Performance reaction sheet', 'Emotional processing support (if needed)']
    },
    mainActivity: {
      description: 'Conduct thorough exam analysis and reflection: (1) Students use detailed mark scheme to analyze each section: Where did marks go? What would have earned more marks? (2) Pattern analysis: Across all four task types, what patterns emerge? (E.g., consistently strong narrative voice, weak register consistency, good inference but poor technique analysis, strong openings but weak closings.) (3) Improvement identification: Compare mock exam to final exam if marks improved, identify what helped. If marks stayed similar, identify what needs development. (4) Skill strength vs weakness comparison: Return to pre-exam confidence self-assessment. How did confidence predict actual performance? What was overconfident? What did you underestimate? (5) Future application: What have you learned about yourself as a writer and reader? What writing habits, reading strategies, exam techniques will serve you well in future English work and other subjects? (6) Celebration and closure: What went well? What achievement are you proud of? Complete an "Exam Learning Reflection" sheet capturing all analysis and identifying personal growth areas.',
      duration: '40 mins',
      steps: ['Distribute marked exam papers and detailed feedback', 'Students analyze each section using detailed mark scheme: section mark, band descriptor, what earned marks, what lost marks', 'Pattern analysis: across creative writing, transactional writing, reading analysis, language analysis, what patterns emerge?', 'Improvement comparison: if this was better than mock exam, what helped? If similar, what needs development?', 'Confidence vs performance analysis: were you overconfident anywhere? Underconfident?', 'Skill strength/weakness summary: what are your clear strengths? Clear development areas?', 'Future application thinking: what have you learned about yourself? What habits/strategies will help future learning?', 'Celebration: what achievement are you proud of? What went well?', 'Complete "Exam Learning Reflection" sheet with analysis, patterns, future plans'],
      differentiation: {
        support: 'Provide guided reflection prompts: "In my creative writing, the strongest part was ___ because ___. I could improve by ___." Offer one-on-one support reviewing feedback. Celebrate specific improvements (e.g., "Your transactional register is much more consistent than in mock exam"). Focus on effort and growth, not just marks.',
        stretch: 'Analyse mark scheme in depth to understand exact grading criteria for each band. Develop detailed improvement plan for next assessment or exam. Reflect on metacognitive learning (what you learned about how you learn best). Set ambitious future targets.'
      }
    },
    plenary: {
      description: 'Learning & Growth Affirmation: Students share (optionally): (1) One thing they did well and are proud of, (2) One thing they\'ll do differently next time based on this exam experience. Whole-class discussion: Celebrate diverse achievements. Reinforce that exams are learning opportunities. Growth happens through effort and reflection, not just marks. End with clear message: You\'ve done the exam. You\'ve learned from it. You\'re ready for whatever comes next.',
      duration: '10 mins'
    },
    homework: 'Complete final reflection: (1) Write a letter to yourself reflecting on this exam experience. What did you learn? What are you proud of? What will you do differently next time? (2) Develop a personalized "Next Steps" plan: What reading and writing skills will you continue developing? What study habits will you maintain? How will you apply lessons from this exam to other subjects and assessments? (3) Set 2–3 realistic growth targets for next term. Optional: Share letter or reflection with supportive peer or family member.',
    resourcesNeeded: ['Marked exam papers and detailed feedback', 'Performance reaction sheet', 'Exam section analysis template (mark breakdown, band descriptor analysis)', 'Pattern analysis worksheet', 'Improvement comparison sheet', 'Exam Learning Reflection template', 'Learning & Growth Affirmation prompt sheet', 'Next Steps planning template'],
    assessmentOpportunities: ['Performance analysis against mark scheme (self-assessment)', 'Pattern identification across task types', 'Improvement reflection', 'Confidence vs actual performance analysis', 'Learning reflection (metacognitive assessment)', 'Growth affirmation sharing', 'Post-exam reflection letter (summative reflection)'],
    keyVocabulary: ['reflection', 'performance analysis', 'pattern', 'improvement', 'growth', 'strength', 'development', 'metacognition', 'learning', 'resilience'],
    crossCurricular: ['Metacognition', 'Self-awareness', 'Growth mindset', 'Future planning'],
    sendAdaptations: 'Provide guided reflection prompts with sentence starters for each analysis area; offer one-on-one feedback discussion regarding marked paper; celebrate specific improvements and effort; focus on growth and learning, not just marks; simplify reflection sheet to core questions only; allow verbal reflection recorded; pair with supportive peer for reflection discussion; provide emotional support if marks were lower than expected; emphasize effort, preparation, and learning over outcome; discuss realistic next steps and achievable goals.'
  },
]
