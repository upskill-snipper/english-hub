// @ts-nocheck
// ─── AQA English Language: 20 Comprehensive Lesson Plans ────────────────────
// Paper 1 (Reading & Creative Writing) + Paper 2 (Writing & Spoken Language)
// Ready-to-teach with full differentiation, model answers, and assessment

export interface AQALessonPlan {
  id: string
  title: string
  duration: string
  yearGroup: string
  examBoard: 'AQA'
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

export const aqaLanguageLessonPlans: AQALessonPlan[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // PAPER 1: READING & CREATIVE WRITING (Lessons 1-10)
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'aqa-lang-p1-01',
    title: 'Paper 1 Overview: Exam Structure, Timing & Assessment Objectives',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand the complete structure of AQA Paper 1 (5 questions, 80 marks, 1hr 45mins)',
      'Know mark allocation and assessment objectives for each question',
      'Create a realistic personalised timing plan',
      'Identify what reading and writing skills the paper tests',
    ],
    starterActivity: {
      description:
        'Paper 1 Misconceptions Quiz: Display 10 true/false statements (e.g., "Paper 1 tests both fiction and non-fiction", "Q5 is worth half the marks", "You should spend equal time on every question"). Students discuss in pairs and hold up cards. Reveal answers, correcting misconceptions.',
      duration: '10 mins',
      resources: [
        'True/False statement slide deck',
        'Mini whiteboards or True/False cards',
        'Keyword glossary handout for SEND/EAL students',
      ],
    },
    mainActivity: {
      description:
        'Build a complete Paper 1 framework showing all five questions, their marks, AOs, and time allocation. Use a projected specimen paper. Students work in pairs to complete a blank template, then compare in groups of four. Build a master version on the board together. Key teaching: Q1 = 4 marks ≈ 5 mins; Q5 = 40 marks ≈ 45 mins. Then run a "timing simulation" - project a short fiction extract (150 words) and set timed bursts: 2 mins for Q1-style, 5 mins for Q2-style, 5 mins for Q4-style. Debrief: Did you finish? What would you change? Students write their personalised timing card.',
      duration: '35 mins',
      steps: [
        'Distribute blank Paper 1 framework with five rows (one per question)',
        'Using projected AQA specimen paper, students fill in: question number, marks, AO, what it asks, suggested time',
        'Pairs compare with groups of four, resolving differences',
        'Teacher builds master version on board; discuss marks-to-minutes ratio',
        'Project short fiction extract; run timing simulation with three timed bursts',
        'Students write personalised timing plan on card to keep',
      ],
      differentiation: {
        support:
          'Provide partially completed framework with Q1 and Q5 pre-filled. Include word bank of AOs. Offer visual clock diagram. Allow 90 seconds for timing simulation instead of strict times.',
        stretch:
          'Students identify personal weaknesses (slow reading, rushed Q5) and adjust plan, explaining reasoning in writing. Write "top tips" card for each question for younger students.',
      },
    },
    plenary: {
      description:
        'Paper 1 in 60 Seconds: Students write everything they now know about Paper 1 (question numbers, marks, timings, AOs, top tips). Swap with partner who ticks correct info and adds anything missing in different colour. Cold-call three students to share one key fact each.',
      duration: '10 mins',
    },
    homework:
      'Create a revision poster or infographic showing Paper 1 structure: all five questions, marks, AOs, timing, and one top tip per question. Bring to next lesson for peer review.',
    resourcesNeeded: [
      'AQA specimen paper (projected or printed)',
      'Blank Paper 1 framework sheet',
      'Countdown timer',
      'Timing plan card template',
      'AO word bank for LA students',
    ],
    assessmentOpportunities: [
      'Check completed framework for accuracy',
      'Assess timing plan justifications',
      '60-second recall paper (formative check of basic understanding)',
    ],
    keyVocabulary: [
      'assessment objective',
      'source text',
      'fiction',
      'creative reading',
      'creative writing',
      'evaluation',
      'mark allocation',
      'time management',
      'retrieval',
      'inference',
    ],
    crossCurricular: ['Maths (proportion, time allocation)', 'Organisation skills'],
    sendAdaptations:
      'Provide pre-completed AO word bank; allow extra time for timing simulation; pair with stronger peer for framework task; offer visual clock diagram for timing plan; seat near teacher for additional explanation.',
  },

  {
    id: 'aqa-lang-p1-02',
    title: 'Question 1: Information Retrieval (4 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand Q1 requires listing four explicit pieces of information from specified lines',
      'Practise identifying relevant information quickly and accurately',
      'Distinguish between explicit information and inference',
      'Complete Q1 within 5 minutes to exam standard',
    ],
    starterActivity: {
      description:
        'Spot the Difference: Retrieval vs Inference. Display a short paragraph (5-6 sentences). Show eight statements below - four explicitly stated, four requiring inference. Students sort into "Directly Stated" and "Inferred" columns. Discuss why Q1 tests retrieval separately and what "explicit" means.',
      duration: '10 mins',
      resources: [
        'Short paragraph on PowerPoint',
        'Eight statement cards (printed or projected)',
        'Sorting grid worksheet',
      ],
    },
    mainActivity: {
      description:
        'Model a Q1 response using an AQA-style fiction extract. Think aloud: Read question carefully, note line references, read ONLY specified lines, underline explicit information, select four clear points, write concisely. Show three sample responses (4/4, 2/4 with inference errors, 1/4 with wrong section). Students identify why each scored as it did. Then complete three Q1 tasks (5 mins each) with increasing difficulty. After each, self-assess using mark scheme and traffic-light system (Green = 4/4, Amber = 2-3/4, Red = 0-1/4). Address common error before next extract.',
      duration: '35 mins',
      steps: [
        'Project fiction extract with line references highlighted',
        'Model Q1 response step-by-step: read question, identify lines, underline explicit info, select four points, write concisely',
        'Show three sample responses; students discuss why each scored differently',
        'Provide sentence starters (We learn that..., The text tells us that..., According to the source...)',
        'Complete first Q1 task (5 mins) with easy fiction extract; self-assess',
        'Complete second Q1 task (5 mins) with medium difficulty extract; self-assess',
        'Complete third Q1 task (5 mins) with harder extract; self-assess',
        'Teacher addresses most common error after each round',
      ],
      differentiation: {
        support:
          'First extract has relevant lines pre-highlighted. Second has line numbers marked. All three have numbered list format to complete (1. ___, 2. ___, 3. ___, 4. ___). Provide sentence starters and explicit keyword glossary.',
        stretch:
          'Write "examiner commentary" explaining marks for each sample response using AQA language. Write "common mistakes guide" for students stuck at 2/4. After all three tasks, write one sentence explaining what reading skill Q1 tests.',
      },
    },
    plenary: {
      description:
        'Q1 Exit Ticket: Students complete one final Q1 task on fresh extract, strictly timed at 5 minutes. Before starting, ask three students to share their top tip for Q1. Display checklist: Did I read only specified lines? Did I list four separate points? Is every point explicit? Did I finish within 5 minutes?',
      duration: '10 mins',
    },
    homework:
      'Find a fiction extract from a novel at home. Write your own Q1-style question with line references, then answer it. Bring both question and answer to next lesson for peer marking using mark scheme.',
    resourcesNeeded: [
      'Three fiction extracts of increasing difficulty',
      'Q1 mark scheme for self-assessment',
      'Traffic-light self-assessment cards',
      'Countdown timer',
      'Sentence starters sheet',
      'Model responses (4/4, 2/4, 1/4)',
      'Exit ticket template',
    ],
    assessmentOpportunities: [
      'Self-assessment of three timed Q1 tasks using mark scheme',
      'Traffic-light system identifies students needing intervention',
      'Exit ticket (collected, formal assessment)',
      'Homework peer marking',
    ],
    keyVocabulary: [
      'retrieval',
      'explicit',
      'implicit',
      'inference',
      'paraphrase',
      'line references',
      'list',
      'identify',
    ],
    crossCurricular: ['Speed reading', 'Note-taking', 'Information processing'],
    sendAdaptations:
      'Pre-highlight relevant lines on all extracts; provide numbered list format; use larger font; reduce number of distractors (show only relevant paragraph, not full page); allow extra 2 minutes per task; pair with reading assistant for difficult extracts; provide word bank for paraphrasing.',
  },

  {
    id: 'aqa-lang-p1-03',
    title: 'Question 2: Language Analysis (8 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Identify and name language techniques (simile, metaphor, alliteration, personification, etc.)',
      'Analyse the effect and purpose of language choices',
      'Write developed language analysis using PEE structure',
      'Score 7+ marks on Q2 by balancing coverage and depth',
    ],
    starterActivity: {
      description:
        'Technique Snap: Prepare 16 cards - eight show language techniques (words "metaphor", "alliteration", etc.), eight show example sentences using those techniques. Students snap cards to matching pairs, discuss why they match, then whole-class review defines each technique briefly.',
      duration: '10 mins',
      resources: [
        'Technique/example card pairs (16 total)',
        'Definition poster for classroom wall',
        'Technique name banner cards',
      ],
    },
    mainActivity: {
      description:
        'Teach the "Quote-Name-Effect-Explain" (QNEE) formula for Q2: (1) Select a short quotation showing a technique. (2) Name the technique. (3) Identify the effect (e.g., creates vivid imagery, conveys emotion, builds tension). (4) Explain why the writer chose this technique and its impact on the reader. Model with a fiction extract: "The shop window gleamed like a jewel." Model response: Quote: "gleamed like a jewel". Name: Simile. Effect: Creates a sense of beauty and value. Explain: The simile elevates the ordinary shop window to something precious, suggesting the protagonist sees it as special or unattainable. Then show a Grade 5 response (basic technique naming + one effect) and Grade 8 response (technique naming + multiple layered effects + contextual awareness). Students complete three Q2 tasks (5 marks each from specimen paper), identifying 2-3 techniques per task. Self-assess using mark scheme.',
      duration: '35 mins',
      steps: [
        'Introduce and display QNEE formula on board',
        'Model full QNEE response using fiction extract (teacher thinks aloud)',
        'Show Grade 5 model answer (technique naming + basic effect)',
        'Show Grade 8 model answer (technique + layered effects + context awareness)',
        'Students identify why Grade 8 scores higher',
        'Task 1: Identify 2 techniques from extract A, write QNEE for each',
        'Self-assess Task 1 using mark scheme; teacher addresses errors',
        'Task 2: Identify 2 techniques from extract B, write QNEE for each',
        'Self-assess Task 2; compare with peer',
        'Task 3: Identify 2 techniques from extract C, write QNEE for each',
        'Exit task: students select their best QNEE response and annotation one area for improvement',
      ],
      differentiation: {
        support:
          'Provide technique word bank (metaphor, simile, alliteration, personification, etc.). Pre-highlight 2-3 technique examples in each extract. Offer QNEE sentence starters: "The writer uses [technique] to...", "This creates [effect] because...", "The reader feels [emotion] as a result...". Allow shorter responses (2-3 sentences per technique instead of 4-5).',
        stretch:
          'Identify 3-4 techniques per extract. Analyse how multiple techniques work together (e.g., alliteration + metaphor create a particular mood). Write a comparison: "How does the writer use language differently in these two extracts?" Identify techniques that could be interpreted in multiple ways and discuss ambiguity.',
      },
    },
    plenary: {
      description:
        'Language Carousel: Display three short extracts (projected) around the room. Students circulate in pairs, writing one QNEE response per extract on large paper (3 mins per station, 9 mins total). Teacher highlights the best responses and discusses why they score well. Collect responses as formative assessment.',
      duration: '10 mins',
    },
    homework:
      'Find one paragraph from a novel you are reading. Identify three language techniques in it and write a QNEE response for each. Bring to next lesson. (Alternatively: complete Q2 task from homework booklet or past paper.)',
    resourcesNeeded: [
      'Technique/example card pairs',
      'Three fiction extracts for practice',
      'QNEE sentence starters sheet',
      'Q2 mark scheme (4-8 marks)',
      'Grade 5 and Grade 8 model answers',
      'Technique name poster',
      'Large paper for carousel activity',
    ],
    assessmentOpportunities: [
      'Technique identification in starter (quick check)',
      'Three QNEE practice tasks (self-assessed)',
      'Language Carousel responses (collected, formative)',
      'Homework analysis (self/peer/teacher marked)',
    ],
    keyVocabulary: [
      'technique',
      'simile',
      'metaphor',
      'personification',
      'alliteration',
      'assonance',
      'onomatopoeia',
      'effect',
      'imagery',
      'tone',
      'connotation',
    ],
    crossCurricular: [
      'Visual art (colour, imagery)',
      'Music (sound patterns, rhythm)',
      'Psychology (reader response)',
    ],
    sendAdaptations:
      'Provide comprehensive technique word bank with definitions and examples; pre-highlight technique words in extracts; offer QNEE sentence starters printed on response sheet; reduce number of techniques to identify (aim for 1-2 instead of 2-3); allow verbal responses (scribed by TA); use larger font, increased spacing; pair with peer for carousel activity; allow extra 5 minutes per task.',
  },

  {
    id: 'aqa-lang-p1-04',
    title: 'Question 3: Structural Analysis (8 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Identify structural techniques (paragraph placement, sentence length variation, time shifts, etc.)',
      'Explain how structure creates effect and guides the reader through the text',
      'Write developed structural analysis using PEE',
      'Distinguish between language (Q2) and structure (Q3) analysis',
    ],
    starterActivity: {
      description:
        'Structure Detective: Distribute three extracts showing different structural features: (1) increasingly short sentences creating urgency, (2) long opening paragraph shifting to short paragraphs, (3) repeated structural pattern. Students identify what changes in each and discuss effect on reader (pace, tension, clarity). Teacher labels techniques: sentence length variation, paragraph breaks, repetition of structure.',
      duration: '10 mins',
      resources: [
        'Three extracts showing different structural techniques (printed/projected)',
        'Technique label cards',
        'Effect explanation poster',
      ],
    },
    mainActivity: {
      description:
        'Teach the "Structural Feature-Location-Effect-Explanation" (SFLE) formula: (1) Name the structural feature (e.g., short sentences, long paragraphs, time shift). (2) Locate it in the text (e.g., "in the opening paragraph", "towards the end"). (3) Identify the effect (e.g., creates tension, slows pacing, emphasises a moment). (4) Explain why the writer chose this and its impact on the reader. Model with fiction: "At the end of the extract, sentences become very short. This increases pace and tension as the action quickens. The reader feels breathless and anxious, mirroring the character\'s fear." Show Grade 5 response (basic feature naming + one effect) and Grade 8 response (feature + location + multiple effects + reader awareness). Complete three timed Q3 tasks identifying 2-3 structural features per extract. Self-assess using mark scheme. Key teaching: STRUCTURE ≠ LANGUAGE. Structure is about HOW the text is organised (sentence length, paragraphs, timing), not WHAT words are used.',
      duration: '35 mins',
      steps: [
        'Introduce and display SFLE formula on board',
        'Model full SFLE response using fiction extract (teacher thinks aloud)',
        'Emphasise difference between language and structure',
        'Show Grade 5 model answer (feature naming + basic effect)',
        'Show Grade 8 model answer (feature + location + layered effects + reader understanding)',
        'Discuss why Grade 8 is higher',
        'Task 1: Identify 2 structural features from extract A, write SFLE for each',
        'Self-assess using mark scheme; address common errors',
        'Task 2: Identify 2 structural features from extract B, write SFLE for each',
        'Task 3: Identify 2 structural features from extract C, write SFLE for each',
        'Peer review and discuss variation in responses',
      ],
      differentiation: {
        support:
          'Provide structural feature checklist: sentence length variation, paragraph breaks, time jumps, repetition, opening/closing techniques. Highlight 2-3 structural features in each extract. Offer SFLE sentence starters: "The writer uses [feature]...", "This makes the reader feel...", "The effect is...". Allow shorter written responses.',
        stretch:
          'Identify 3+ features per extract. Analyse how multiple structural features combine (e.g., short sentences + paragraph breaks create a particular effect). Compare structural choices in two different extracts. Discuss what effect would result if the structure were different.',
      },
    },
    plenary: {
      description:
        'Language vs Structure Debate: Display a short extract. Show a Language analysis response and a Structure analysis response (both correct, addressing different aspects). Students discuss: "Which is better and why?" Conclude: Both are needed for a high mark. Ideal Q2 and Q3 together cover multiple techniques and structural features from the text.',
      duration: '10 mins',
    },
    homework:
      'Find one paragraph from a novel or text you are reading. Identify two structural features and write SFLE responses for each. Then compare your structural analysis with a language analysis of the same paragraph - discuss what each reveals that the other does not.',
    resourcesNeeded: [
      'Three extracts showing different structural features',
      'Structural feature checklist',
      'SFLE sentence starters sheet',
      'Q3 mark scheme (4-8 marks)',
      'Grade 5 and Grade 8 model answers',
      'Language vs Structure comparison poster',
    ],
    assessmentOpportunities: [
      'Structure Detective identification (starter)',
      'Three SFLE practice tasks (self-assessed)',
      'Language vs Structure debate responses',
      'Homework structural analysis (self/peer/teacher marked)',
    ],
    keyVocabulary: [
      'structure',
      'sentence length',
      'paragraph',
      'time shift',
      'repetition',
      'pace',
      'tension',
      'effect',
      'opening',
      'closing',
      'perspective',
      'narrative structure',
    ],
    crossCurricular: [
      'Film/video editing (pacing, cuts)',
      'Architecture (how spaces are organized)',
      'Music (tempo, rhythm, repetition)',
    ],
    sendAdaptations:
      'Provide detailed structural feature checklist with definitions and examples; highlight structural features in extracts; offer SFLE sentence starters printed on response sheet; reduce number of features to identify (1-2 instead of 2-3); allow verbal responses (scribed by TA); use larger font with more spacing; pair with peer for tasks; allow extra 5 minutes per practice task.',
  },

  {
    id: 'aqa-lang-p1-05',
    title: 'Question 4: Evaluation & Critical Response (20 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand Q4 is an evaluation task requiring a personal judgment and argument',
      'Construct a sustained evaluation using evidence from the text',
      'Write paragraphs developing a thesis with multiple quotations',
      'Score 15+ marks by balancing assertion, evidence, and analysis',
    ],
    starterActivity: {
      description:
        'Agree or Disagree?: Display a statement about a character or event from a fiction extract (e.g., "The narrator feels trapped by his circumstances"). Students stand on a line: Strongly Agree (one end) to Strongly Disagree (other end). In pairs, they explain their position using one quotation from the extract. Teacher highlights that Q4 requires this kind of personal, evidence-backed judgment.',
      duration: '10 mins',
      resources: [
        'Statement card(s) about extract',
        'Quotation slip cards',
        'Standing line indicator (tape or chalk)',
      ],
    },
    mainActivity: {
      description:
        'Teach the Q4 structure: (1) Write a clear opening statement that answers the question directly. (2) Write 3-4 body paragraphs, each making ONE main point supported by evidence. (3) Analyse the evidence explaining its relevance to your argument. (4) Write a brief conclusion that reinforces your position. Model a Grade 6 response (assertion + 2 quotations + basic analysis), Grade 8 response (assertion + 3+ quotations + layered analysis), and Grade 9 response (complex thesis + sophisticated evidence + contextual awareness). Complete one timed Q4 task (15-20 mins) responding to a specimen paper question. Then self-assess using detailed mark scheme (coverage of points, use of evidence, depth of analysis). Identify what would need to improve to reach next grade. Key teaching: Evaluation is not "I liked this" - it is "The writer successfully achieves X because Y."',
      duration: '35 mins',
      steps: [
        'Introduce Q4 structure (opening statement, 3-4 body paragraphs, conclusion)',
        'Explain each paragraph should make ONE point + provide 1-2 quotations + analyse their significance',
        'Model Grade 6 response (adequate assertion and evidence, basic analysis)',
        'Model Grade 8 response (developed assertion, multiple well-chosen quotations, layered analysis)',
        'Model Grade 9 response (sophisticated thesis, exemplary evidence selection, nuanced interpretation)',
        'Discuss what makes each response higher in mark value',
        'Provide a Q4 question (specimen paper or similar)',
        'Students plan their response (5 mins): write opening statement + list 3-4 main points',
        'Students draft their response (15 mins), aiming for 3-4 developed paragraphs',
        'Guided self-assessment (5 mins) using detailed mark scheme',
      ],
      differentiation: {
        support:
          'Provide a response frame: (Opening: "The statement is [agree/disagree] because...") (Point 1: "Firstly... Quote: \'...\' This shows...) (Point 2: "Secondly...") (Conclusion: "Overall..."). Offer a bank of quotations from the text pre-selected. Allow shorter response (2 developed paragraphs instead of 3-4). Scribe if needed.',
        stretch:
          'Challenge students to identify a quotation that could support both sides of the argument and discuss how to handle ambiguity. Write a fourth point introducing a counterargument then refuting it. Compare their evaluation with the mark scheme and identify how to improve from, e.g., Grade 7 to Grade 8.',
      },
    },
    plenary: {
      description:
        'Mini Peer Review: Students exchange Q4 responses with a partner. Partner reads opening statement and identifies whether the response would likely agree or disagree with the original statement. Partner then reads the conclusion and checks if the opening and closing are consistent. Feedback (2-3 minutes per pair) focuses on clarity of position and consistency of argument.',
      duration: '10 mins',
    },
    homework:
      'Complete a full Q4 task (specimen paper or homework booklet) under timed conditions (20 minutes). Mark your own response using the detailed mark scheme. Identify one area for improvement and write a sentence on how you would strengthen that area in a future response.',
    resourcesNeeded: [
      'Q4 specimen paper question(s)',
      'Response frame template (for support)',
      'Quotation bank from extract (for support)',
      'Grade 6, 8, and 9 model answers',
      'Detailed Q4 mark scheme (0-20 marks)',
      'Planning sheet template',
      'Self-assessment checklist',
    ],
    assessmentOpportunities: [
      'Standing line discussion (comprehension check)',
      'Planned response outline (organisation check)',
      'Timed Q4 response (self-assessed against mark scheme)',
      'Peer review of opening/conclusion consistency',
      'Homework Q4 (self-marked against model answers)',
    ],
    keyVocabulary: [
      'evaluation',
      'assertion',
      'evidence',
      'analysis',
      'judgment',
      'thesis',
      'quotation',
      'evaluate',
      'critically',
      'perspective',
      'counterargument',
    ],
    crossCurricular: [
      'Debating and argument',
      'Philosophy/critical thinking',
      'Law/case presentation',
    ],
    sendAdaptations:
      'Provide detailed response frame with sentence starters; offer pre-selected quotation bank from text; allow 25-30 minutes instead of 20; allow scribed response or typed response if hand-writing is barrier; reduce number of paragraphs needed (aim for 2 strong paragraphs instead of 3-4); provide detailed mark scheme with visual hierarchy; pair with reading support for quotation selection; allow oral response recorded by TA.',
  },

  {
    id: 'aqa-lang-p1-06',
    title: 'Question 5: Creative Writing - Narrative (40 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Plan and draft a compelling narrative within 45 minutes (5 plan + 35 write + 5 check)',
      'Use a range of narrative techniques (dialogue, description, pacing, perspective)',
      'Demonstrate accurate spelling, punctuation, and grammar (technical accuracy)',
      'Score 30+ marks by balancing character/plot development with linguistic quality',
    ],
    starterActivity: {
      description:
        'Story Dice: Distribute dice or cards with random prompts (object, character, emotion, setting, action). Students roll/draw three prompts and talk in pairs for 2 minutes, creating a rapid story premise that includes all three elements. This activates creativity and shows that good stories can emerge from constraints. Examples: "Find a way to include: a locket, an elderly woman, and the feeling of betrayal" or "Tell a story that begins: I had forgotten about the letter until...".',
      duration: '10 mins',
      resources: ['Story Dice or prompt cards', '2-minute timer', 'Whiteboard for brainstorm'],
    },
    mainActivity: {
      description:
        'Teach narrative planning and drafting within the 45-minute Q5 window. (1) Allocate 5 minutes to planning: Read the question/prompt carefully. Brainstorm character, setting, conflict, resolution. Write a one-sentence summary of your story. (2) Draft your narrative in 35 minutes: Write an engaging opening (hook the reader). Use description, dialogue, and action to show character and develop plot. Vary sentence length and structure. Show not tell. Check that your resolution satisfies the setup. (3) Spend 5 minutes checking: Fix obvious spelling/punctuation errors. Add/adjust words to improve effect. Cut any confusing sections. Model a Grade 5 narrative (clear plot, basic characterisation, some technical errors) and Grade 8 narrative (compelling voice, nuanced character, varied techniques, minimal errors). Then complete a timed narrative task. Students draft under exam conditions (45 minutes total: 5 plan + 35 draft + 5 check). Self-assess using mark scheme criteria (AO5: communication/organisation, AO6: technical accuracy).',
      duration: '35 mins',
      steps: [
        'Introduce the 5-35-5 timing structure (plan-draft-check)',
        'Model planning: read prompt, brainstorm character/setting/conflict/resolution, write one-sentence summary on planning sheet',
        'Show Grade 5 narrative opening (clear but simple prose)',
        'Show Grade 8 narrative opening (vivid language, distinctive voice, intriguing hook)',
        'Discuss narrative techniques: dialogue (show character voice), description (paint a picture, use precise language), varying sentence length (long for reflection, short for tension), perspective (first person creates intimacy, third person offers scope)',
        'Display Grade 8 extract and annotate: varied vocabulary, varied sentence structure, specific detail, effective dialogue',
        'Provide narrative prompt (e.g., "Write a narrative beginning with: She\' been waiting for this moment for five years.",  or "Write a narrative exploring the theme of betrayal")',
        'Students plan their narrative (5 mins): character sketch, setting, main conflict, resolution, one-sentence summary',
        'Students draft their narrative (35 mins) using planning sheet; teacher circulates offering brief encouragement/prompts',
        'Students check their work (5 mins): read aloud if possible, fix obvious errors, underline any words they want to change',
      ],
      differentiation: {
        support:
          'Provide a narrative frame: "My character is [name], who feels [emotion] because [reason]. The story is set in [place/time]. The main problem is [conflict]. My character tries to [action], which leads to [consequence]. By the end [resolution]." Offer a bank of narrative openings to adapt. Allow typed response. Provide spell-checker or word list. Reduce target word count (300-400 words instead of 500+). Reduce number of techniques to use.',
        stretch:
          'Challenge students to use an unreliable narrator (reader discovers the narrator is lying/mistaken). Write in a distinctive voice or register (formal, colloquial, archaic). Employ a plot twist. Use multiple perspectives. Include sophisticated vocabulary and sentence structures. Target 600+ words.',
      },
    },
    plenary: {
      description:
        'Narrative Showcase: Collect one narrative per student to read aloud (volunteer basis or teacher select). After each reading, the class gives feedback: "One thing I liked was... because..." and "One technique I noticed was..." Focus on celebrating strong character voice, effective description, or compelling plot.',
      duration: '10 mins',
    },
    homework:
      'Complete a full narrative task under timed conditions (45 minutes: 5 plan + 35 draft + 5 check). Choose from: (a) past paper Q5 prompt, or (b) prompt provided by teacher. Self-assess using detailed mark scheme. Identify one area of strength and one area for improvement. Write how you would approach that area differently in your next narrative.',
    resourcesNeeded: [
      'Story Dice or prompt cards',
      'Narrative prompt(s) (specimen paper or teacher-created)',
      'Planning sheet template (character/setting/conflict/resolution/summary)',
      'Grade 5 and Grade 8 narrative model answers',
      'Detailed mark scheme (AO5 + AO6, 0-40 marks)',
      'Annotated Grade 8 extract showing techniques',
      'Narrative technique checklist',
      'Countdown timer',
      'Proofreading checklist',
    ],
    assessmentOpportunities: [
      'Rapid story creation in pairs (engagement check)',
      'Planning sheet (planning check)',
      'Timed narrative draft (self-assessed)',
      'Peer feedback during showcase (formative)',
      'Homework narrative (self-marked against model + mark scheme)',
    ],
    keyVocabulary: [
      'narrative',
      'characterisation',
      'dialogue',
      'description',
      'perspective',
      'pace',
      'tension',
      'resolution',
      'voice',
      'technique',
      'imagery',
      'setting',
      'conflict',
      'opening',
      'closing',
    ],
    crossCurricular: [
      'Drama (character development, voice)',
      'Film/video (narrative structure, pacing)',
      'Creative writing',
    ],
    sendAdaptations:
      'Provide detailed planning frame with prompts for each section; offer sentence starters for opening; list narrative techniques with examples; allow word processor (text-to-speech, spell-checker); scribe if needed; allow extra 10 minutes (55 total: 5 plan + 40 draft + 10 check); reduce target word count; pair with writing support peer; provide word bank of descriptive vocabulary; allow verbal planning (scribed by TA); reduce number of techniques to aim for (focus on dialogue + description only).',
  },

  {
    id: 'aqa-lang-p1-07',
    title: 'Question 5: Creative Writing - Description (40 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Plan and draft a compelling descriptive piece within 45 minutes',
      'Use sensory detail (sight, sound, smell, taste, touch) to create vivid description',
      'Employ figurative language (metaphor, simile, personification) deliberately',
      'Score 30+ marks by balancing descriptive richness with technical accuracy',
    ],
    starterActivity: {
      description:
        'Sense Walk: Project an image (e.g., a bustling market, an abandoned building, a coastal storm) for 30 seconds. Remove it. Students write four sensory words per sense (sight, sound, smell, touch) that they remember or would associate with that scene. Share words aloud; discuss how sensory language creates vivid description. Emphasise: Description is not just visual - involve all five senses.',
      duration: '10 mins',
      resources: [
        'Evocative image (projected)',
        '30-second timer',
        'Sensory word chart (printed/projected)',
      ],
    },
    mainActivity: {
      description:
        'Teach descriptive writing using the 5-35-5 timing structure (plan-draft-check). (1) Plan (5 mins): Choose a setting/scene. Brainstorm sensory details. List 3-4 figurative language ideas (metaphors, similes, personification). (2) Draft (35 mins): Write an engaging opening that sets mood. Build description through sensory detail and figurative language. Vary sentence structures (long flowing sentences for atmosphere, short sentences for emphasis). Show not tell. Use precise vocabulary. (3) Check (5 mins): Read aloud, adjust weak language, fix errors. Model a Grade 5 description (clear images, some effective language, occasional errors) and Grade 8 description (vivid, multi-sensory, sophisticated language, varied structure, minimal errors). Complete a timed descriptive task. Self-assess using mark scheme. Key teaching: Descriptive writing demonstrates CONTROL of language - every word is chosen for effect. Avoid clichés (dark clouds, golden sunset) in favour of fresh, specific imagery.',
      duration: '35 mins',
      steps: [
        'Introduce descriptive writing vs narrative (description paints a picture; narrative tells a story)',
        'Explain planning for description: choose setting, brainstorm sensory words, plan figurative language ideas',
        'Show Grade 5 description: clear images, basic language, some errors',
        'Show Grade 8 description: multi-sensory, sophisticated language, varied structure, precise vocabulary',
        'Annotate Grade 8 extract: highlight sensory language, figurative language, varied sentence structures',
        'Teach techniques: sensory detail (words that appeal to the five senses), figurative language (metaphor, simile, personification), varied sentence length, precise vocabulary (replace "nice" with "delicate", "overwhelming", etc.)',
        'Provide a descriptive prompt (e.g., "Describe a place that is both beautiful and unsettling", or "Describe a moment of discovery")',
        'Students plan their description (5 mins): setting, sensory details (sight/sound/smell/taste/touch), figurative language ideas, opening line',
        'Students draft their description (35 mins); teacher circulates offering brief encouragement',
        'Students check their work (5 mins): read aloud, improve weak language, fix errors',
      ],
      differentiation: {
        support:
          'Provide description frame: (Opening: Set mood using sensory detail) (Middle: Build atmosphere through figurative language) (Closing: Return to opening image with fresh perspective). Offer a sensory word bank (sight/sound/smell/taste/touch words). Provide examples of similes and metaphors to adapt. Allow shorter piece (250-350 words). Allow typed response.',
        stretch:
          'Challenge students to write a description that captures a paradox (beautiful/ugly, peaceful/tense, familiar/strange). Use an extended metaphor running through the piece. Experiment with unusual sentence structures (short fragments for effect, rhetorical questions for reader engagement). Target 600+ words. Analyse how professional authors use description in a similar setting and adopt/adapt their techniques.',
      },
    },
    plenary: {
      description:
        "Sensory Sentence Swap: Collect descriptions. Project one student's description (volunteer). Class identifies: (1) One effective sensory detail, (2) One figurative language example, (3) One varied sentence structure. Discuss what makes this writing strong. Repeat with 2-3 examples. Celebrate rich imagery and linguistic variety.",
      duration: '10 mins',
    },
    homework:
      'Complete a full descriptive task under timed conditions (45 minutes). Choose from: (a) past paper Q5 description prompt, or (b) teacher-provided prompt. Self-assess using mark scheme. Identify your strongest sentence and explain why it is effective. Identify one sentence you would rewrite and explain your improvement.',
    resourcesNeeded: [
      'Evocative image for starter',
      'Sensory word chart',
      'Descriptive prompt(s)',
      'Planning sheet template (setting/sensory words/figurative language ideas)',
      'Grade 5 and Grade 8 model descriptions',
      'Annotated Grade 8 extract',
      'Detailed mark scheme (AO5 + AO6)',
      'Figurative language reference sheet',
      'Countdown timer',
      'Proofreading checklist',
    ],
    assessmentOpportunities: [
      'Sense Walk word generation (vocabulary check)',
      'Planning sheet (planning quality)',
      'Timed descriptive draft (self-assessed)',
      'Sensory Sentence Swap peer feedback',
      'Homework description (self-marked)',
    ],
    keyVocabulary: [
      'description',
      'sensory',
      'imagery',
      'vivid',
      'figurative language',
      'metaphor',
      'simile',
      'personification',
      'atmosphere',
      'mood',
      'precise vocabulary',
      'cliché',
    ],
    crossCurricular: [
      'Visual art (composition, colour, mood)',
      'Photography (perspective, detail)',
      'Poetry (image and language)',
    ],
    sendAdaptations:
      'Provide detailed planning frame with sensory prompts (What can you see/hear/smell/taste/touch?); offer figurative language examples to adapt; provide word bank of descriptive vocabulary; allow word processor; scribe if needed; allow extra time (55 mins total); reduce target word count; provide sentence starters; pair with writing support peer; allow oral brainstorm (scribed by TA).',
  },

  {
    id: 'aqa-lang-p1-08',
    title: 'Paper 1 Integration: Reading + Writing in 1hr 45mins',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Practise the complete Paper 1 exam under timed conditions',
      'Manage time effectively across all five questions',
      'Allocate focus proportionally to mark weightings',
      'Identify personal strengths and areas for improvement',
    ],
    starterActivity: {
      description:
        'Timing Confidence Check: Display your personalised timing plan from Lesson 1 on the board. Students review their plan (1 minute). Discuss: "Does this still feel realistic? What would you change?" Quick poll: Who is confident about timing Q1? Q5? This activates prior knowledge and allows teacher to address lingering anxieties about pacing.',
      duration: '5 mins',
      resources: [
        "Students' personalised timing plans from Lesson 1",
        'Whiteboard for poll results',
      ],
    },
    mainActivity: {
      description:
        'Deliver a complete Paper 1 past paper or specimen paper under realistic exam conditions (1hr 45mins). Brief at the start: "You will complete all five questions today. Aim to follow your timing plan from Lesson 1. After 10 minutes (reading + Q1 time), I will give a five-minute warning so you move to Q2. This is authentic exam practice." Students work independently. Teacher circulates, observes, but does NOT provide help (authentic exam conditions). Note any students who are significantly behind pace (struggling with Q2 after 20 mins would indicate a pacing problem). After exam concludes, students immediately complete a simple reflection sheet (5 mins): Did you finish all questions? Which question felt most confident? Which felt least confident? Did you stick to your timing plan? What would you do differently next time?',
      duration: '50 mins',
      steps: [
        'Brief students on exam conditions (1 min): This is authentic Paper 1 practice. Follow your timing plan. No help will be given. Work independently.',
        'Distribute Paper 1 exam paper + blank paper/booklet (1 min)',
        'Students read source text and answer all five questions (105 mins / 1hr 45mins): Time allocation follows student plan (typically 10 reading, 5 Q1, 10 Q2, 10 Q3, 20 Q4, 45 Q5, 5 buffer)',
        'At 10-min mark: 5-minute warning that Q2 is approaching',
        'At 20-min mark: 5-minute warning that Q3 is approaching',
        'At 30-min mark: 5-minute warning that Q4 is approaching',
        'At 50-min mark: 5-minute warning that Q5 is approaching',
        'At 100-min mark: Final 5 minutes remaining',
        'At 105 mins: Collect papers',
        'Students complete reflection sheet (5 mins)',
      ],
      differentiation: {
        support:
          'Provide a timing checklist that student can mark as they move through each question (ensures they stay aware of time). Allow slightly longer if a student is reading slowly (e.g., 120 mins instead of 105). Offer a quiet, distraction-free space. Seat near teacher for encouragement (non-intrusive).',
        stretch:
          'After completing the paper, students self-assess one answer (e.g., Q5 narrative) using the mark scheme. Identify what would push it from Grade 7 to Grade 8. Draft an improved version of that section.',
      },
    },
    plenary: {
      description:
        'Reflection & Forward Planning (5 mins). Collect reflection sheets. Discuss as a class (without naming individuals): "What went well today?" "What surprised you?" "What will you do differently in your next practice exam?" Display common pacing issues (e.g., "Several students felt rushed on Q5" → means we need to allocate more time, or "Several students over-analysed Q1" → means we need to remind about retrieval vs analysis). Celebrate completion and identify strengths observed.',
      duration: '5 mins',
    },
    homework:
      "Choose your most challenging answer from today's exam (likely Q4 or Q5). Revise it using the mark scheme as guidance. Bring your original response and your revision to next lesson for feedback. Alternatively: complete the Paper 1 exam self-marking checklist (was every question attempted? did I follow my timing plan?).",
    resourcesNeeded: [
      'AQA Paper 1 past paper or specimen paper (printed)',
      'Blank paper/exam booklet for responses',
      'Countdown timer (visible to class)',
      'Timing checklist (for support students)',
      'Reflection sheet template (printed)',
      'Marking scheme (for homework revision)',
    ],
    assessmentOpportunities: [
      'Complete Paper 1 exam (summative assessment against mark scheme)',
      'Reflection sheet (shows self-awareness of strengths/areas for development)',
      'Observation during exam (teacher notes pacing issues, technique application)',
      'Homework revision (shows ability to improve work using feedback)',
    ],
    keyVocabulary: [
      'time management',
      'mark weighting',
      'pacing',
      'exam conditions',
      'authentic practice',
    ],
    crossCurricular: ['Examination technique', 'Self-reflection and metacognition'],
    sendAdaptations:
      'Provide quiet, distraction-free exam space; allow 25% extra time (131 mins instead of 105); provide timing checklist; seat near teacher for quiet encouragement; provide large-print exam paper if needed; allow reader/scribe if appropriate (with prior arrangement); allow frequent short breaks (stretch breaks); provide word processor if hand-writing is barrier.',
  },

  {
    id: 'aqa-lang-p1-09',
    title: 'Paper 1 Feedback: Marking & Improvement',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand how to use the mark scheme to self-assess writing',
      'Identify specific areas for improvement in each question type',
      'Revise and improve one answer using teacher/mark scheme feedback',
      'Recognise progress from previous attempts',
    ],
    starterActivity: {
      description:
        'Mark Scheme Detective: Project the Q2 mark scheme (4-8 marks). Show a Q2 response that scores 5 marks. Students must identify: (1) What the response does well (e.g., identifies a technique and explains effect), and (2) What is missing to reach 6-7 marks (e.g., needs more precise language analysis or a second technique). Discuss findings. Repeat with a different response (6 marks). This teaches students how to READ a mark scheme for improvement, not just for grading.',
      duration: '10 mins',
      resources: ['Q2 mark scheme (projected)', 'Two example Q2 responses (5-mark and 6-mark)'],
    },
    mainActivity: {
      description:
        'Lead a detailed feedback session on the Paper 1 exam from Lesson 8. (1) Project ONE Q1 response (volunteer or generic). Mark it as a class using the Q1 mark scheme (should be straightforward - either explicit or inference). (2) Project ONE Q2 response. Mark it as a class, discussing technique naming, effect identification, and analysis depth. (3) Project ONE Q3 response. Mark it, highlighting structural feature choice, location, and effect explanation. (4) Project ONE Q4 response. Mark it, evaluating opening statement clarity, evidence use, and argument consistency. (5) Project the opening of ONE Q5 response. Discuss: What is the narrative voice? Is it engaging? What techniques are visible in the first paragraph? Then distribute personalised feedback sheets to students based on their exam papers. Each sheet shows: (a) Marks per question, (b) What they did well, (c) One specific area to improve, (d) How to improve it. Provide time for students to re-read their own responses against the feedback sheet and ask clarifying questions.',
      duration: '35 mins',
      steps: [
        'Explain: Today we mark our Paper 1 exam together. This teaches you how to use the mark scheme to improve.',
        'Project a Q1 response; ask students to estimate mark before revealing (0-4)',
        'Discuss: What makes this 4/4 or 2/4? Which information is explicit? Use mark scheme to confirm',
        'Project a Q2 response; ask students to estimate mark before revealing (4-8)',
        'Discuss technique naming, effect identification, analysis depth using mark scheme',
        'Project a Q3 response; discuss structural feature, location, effect using mark scheme',
        'Project a Q4 response; discuss opening statement clarity, evidence coverage, argument consistency',
        'Project opening of a Q5 response; discuss narrative voice, opening hook, visible techniques',
        'Distribute personalised feedback sheets to students',
        'Pair students; they read their feedback together and ask clarifying questions',
        'Teacher circulates, answering questions and offering encouragement',
      ],
      differentiation: {
        support:
          'Provide a "How to Use Feedback" guide sheet that shows: (1) Read your mark, (2) Look at what you did well, (3) Identify ONE thing to improve, (4) In next attempt, focus on that one thing. Offer one-to-one feedback conference with teacher/TA. Scribe/read-aloud feedback if needed.',
        stretch:
          'Challenge students to compare two of their responses (e.g., Q2 and Q3). Discuss: "Why did you score higher on Q3? What technique from Q3 could you apply to Q2?" Write an action plan for reaching Grade 8 on Q2, Q4, and Q5 in future attempts.',
      },
    },
    plenary: {
      description:
        'Revision Task Assignment. Students choose ONE answer from their Paper 1 exam to revise (likely Q4 or Q5, as these are highest-value questions). They receive a revision template: (a) Original answer, (b) Feedback received, (c) What I will improve, (d) My revised version. Students begin revision work in class (10 mins). Homework is to complete the revision fully.',
      duration: '10 mins',
    },
    homework:
      'Complete your chosen revision (Q4 and/or Q5). Use the feedback sheet and mark scheme to guide improvements. Bring original, feedback, and revised version to next lesson. Be prepared to explain what you changed and why.',
    resourcesNeeded: [
      'Q1, Q2, Q3, Q4, Q5 mark schemes (projected)',
      'Example responses from student exams (with permission) or teacher-created anonymised examples',
      'Personalised feedback sheets (pre-printed for each student, based on their exam)',
      '"How to Use Feedback" guide sheet',
      'Revision template (printed)',
      'Highlighters for annotating feedback',
    ],
    assessmentOpportunities: [
      'Mark Scheme Detective identification (shows understanding of criteria)',
      'Class marking discussions (formative understanding of standards)',
      "Personalised feedback sheets (shows teacher assessment of each student's exam)",
      'Homework revision (shows ability to apply feedback and improve)',
    ],
    keyVocabulary: [
      'mark scheme',
      'criteria',
      'feedback',
      'improvement',
      'revision',
      'self-assessment',
      'grade boundaries',
    ],
    crossCurricular: [
      'Metacognition (reflecting on learning)',
      'Self-improvement and growth mindset',
    ],
    sendAdaptations:
      'Provide mark schemes in large print with highlighted key criteria; read feedback aloud; offer one-to-one feedback conference with teacher/TA; simplify feedback to ONE key point only (not multiple); pair with peer for revision; allow extra time for revision; provide a simplified "next steps" card (e.g., "Next time: use 2 techniques in Q2 instead of 1").',
  },

  {
    id: 'aqa-lang-p1-10',
    title: 'Paper 1 Mastery: Second Practice Exam & Sustained Progress',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Apply feedback from first practice exam to a second attempt',
      'Demonstrate improvement in identified areas (e.g., technique analysis, Q5 planning)',
      'Track personal progress across both exams',
      'Build confidence and resilience in exam conditions',
    ],
    starterActivity: {
      description:
        'Progress Check: Display a simple progress tracker showing the five questions. Students write their mark from Exam 1 on a sticky note and place it on the chart. Visually, they can see: (a) their personal baseline, (b) where they are strongest and weakest, (c) where most of the class struggled. Discuss: "What will be our focus today? Where did most students struggle? What feedback will we apply?" This builds collective ownership of improvement.',
      duration: '5 mins',
      resources: [
        'Progress tracker chart (on board/wall)',
        'Sticky notes and pens',
        'Exam 1 feedback sheets',
      ],
    },
    mainActivity: {
      description:
        'Second Practice Exam under timed conditions (1hr 45mins). Brief before starting: "Today you\'re doing Exam 2. You\'ve received feedback from Exam 1. I want you to focus on applying that feedback - especially in the area that was challenging for you. For example, if you scored 5/8 on Q2, aim to identify TWO clear techniques today and analyse their effects more fully. If you struggled with Q5 planning, spend a full 5 minutes planning before you start writing." Distribute a different Paper 1 past paper. Students work independently following their timing plan. Teacher circulates, observes, notes progress (without providing help). After exam, students compare their Exam 2 responses with Exam 1 on a simple progress tracker: Same mark, improved mark, or lower mark? Why? What feedback did you apply? What remains challenging?',
      duration: '50 mins',
      steps: [
        'Brief students (2 mins): This is Exam 2. Apply your Exam 1 feedback. Show improvement in your identified area.',
        'Distribute different Paper 1 past paper (1 min)',
        'Students complete Paper 1 under exam conditions (105 mins / 1hr 45mins)',
        'Teacher circulates observing and noting progress (non-intrusive)',
        'Collect papers at end of timed period',
        'Students complete comparison sheet (5 mins): Which questions improved? Which stayed the same? Which are still tricky?',
      ],
      differentiation: {
        support:
          'Highlight the specific feedback area in your papers: "You struggled with technique identification in Q2. Today, aim to find TWO clear techniques." Provide a checklist to tick off as you complete each question. Allow extra time (120 mins total) if needed. Seat near teacher for non-verbal encouragement.',
        stretch:
          'Challenge: "From Exam 1, you scored 18/20 on Q4. Today, can you reach 19 or 20? What would push your evaluation to the next level?" Or: "Your Q5 narrative scored 28/40. Today, focus on more precise vocabulary and more varied sentence structures to reach 32+." Set a specific grade target and work towards it.',
      },
    },
    plenary: {
      description:
        'Reflection & Celebration (5 mins). As papers are collected, students complete one-sentence reflections: "One thing I did better on Exam 2 was...", "Next time I want to focus on...", "I feel [confident/less worried/still nervous] about Paper 1 because..." Collect these. Read a selection aloud (anonymously). Celebrate all attempts and progress, however small. "Everyone tried hard today. Many of you applied feedback. Well done."',
      duration: '5 mins',
    },
    homework:
      'Complete a final self-assessment comparing Exam 1 and Exam 2. For each question, write: (a) Exam 1 mark, (b) Exam 2 mark, (c) What improved, (d) What is still a challenge. Identify your ONE priority for Paper 1 moving forward (e.g., "I need to manage Q5 planning time better", "I need to analyse language more deeply on Q2"). Write how you will address this before the real exam.',
    resourcesNeeded: [
      'Different AQA Paper 1 past paper (printed)',
      'Blank paper/exam booklet',
      'Countdown timer (visible)',
      'Progress tracker chart',
      'Comparison sheet template (Exam 1 vs Exam 2)',
      'Sticky notes for progress tracker',
    ],
    assessmentOpportunities: [
      'Progress tracker (visual representation of baseline and improvement)',
      'Exam 2 response (summative assessment, compared with Exam 1)',
      'Comparison sheet (shows student understanding of their own progress)',
      'Reflection sentence (shows self-awareness)',
    ],
    keyVocabulary: [
      'progress',
      'improvement',
      'feedback application',
      'growth mindset',
      'resilience',
    ],
    crossCurricular: [
      'Self-assessment and metacognition',
      'Growth mindset',
      'Data recording (personal progress)',
    ],
    sendAdaptations:
      'Highlight your specific feedback area in the exam paper; provide a checklist of questions to tick as completed; allow 25% extra time (131 mins); seat near teacher; provide large-print exam; offer quiet space; allow reader/scribe if appropriate; celebrate any improvement, however small; provide one-to-one encouragement conferences.',
  },

  {
    id: 'aqa-lang-p2-01',
    title: 'Paper 2 Overview: Writing & Spoken Language Assessment',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand Paper 2 has two sections: Section A (writing 80 marks) and Section B (Spoken Language NEA 16 marks)',
      'Know the exam structure: 90 minutes for two 40-mark writing tasks',
      'Identify assessment objectives and time allocation for each task',
      'Understand difference between timed exam writing and separate NEA',
    ],
    starterActivity: {
      description:
        'Paper 1 vs Paper 2: Quick Comparison. Display Venn diagram. Class shouts features: Paper 1 (Fiction reading, Q1-5, creative writing, 1hr 45) vs Paper 2 (Real-world writing, two 40-mark tasks, 1hr 45 + separate Spoken Language NEA). Complete diagram. Discuss: What skills are different? What writing skills appear on both papers?',
      duration: '10 mins',
      resources: ['Venn diagram template', 'Marker/whiteboard pen'],
    },
    mainActivity: {
      description:
        'Teach Paper 2 structure. (1) Section A Writing: Two tasks, each 40 marks, 1hr 45mins total. Task 1 usually persuasive/discursive (letter, article, speech). Task 2 usually narrative/descriptive. Both test AO5 (communication/organisation) + AO6 (technical accuracy). (2) Section B Spoken Language NEA: Separate assessment. Deliver prepared 3-5 minute presentation + answer spontaneous questions. Not part of timed exam. Assessed separately (16 marks). Create Paper 2 framework sheet: Task 1 (writing, 40 marks, ~45 mins), Task 2 (writing, 40 marks, ~45 mins), Spoken Language NEA (separate, 3-5 mins prepared + Q&A, 16 marks). Discuss: Different purposes (persuade vs entertain), different audiences, different techniques needed.',
      duration: '35 mins',
      steps: [
        'Display Paper 2 structure: Section A (two 40-mark tasks, 1hr 45) + Section B (NEA, separate)',
        'Explain Task 1: given purpose, audience, form. Must write accordingly.',
        'Explain Task 2: different purpose/audience/form from Task 1. Must switch mindsets.',
        'Discuss timing: 45 mins per task (5 plan + 35 draft + 5 check OR 5 plan + 40 draft)',
        'Show example Task 1 prompt (persuasive article) and Task 2 prompt (narrative)',
        'Create Paper 2 framework together on board',
        'Explain Spoken Language NEA: Separate assessment. 3-5 minute presentation on topic of choice + spontaneous Q&A. Assessed separately (16 marks = 5% of GCSE).',
        'Students write down Paper 2 structure on framework sheet',
      ],
      differentiation: {
        support:
          'Provide partially completed framework sheet. Highlight Task 1 and Task 2 format. Offer visual timeline showing 45 mins per task.',
        stretch:
          'Compare Paper 1 Q5 (creative, 40 marks, one task) with Paper 2 Tasks 1&2 (40 each, two different tasks). Discuss advantages and challenges of switching between two tasks.',
      },
    },
    plenary: {
      description:
        'Paper 2 in 90 Seconds: Students write everything they know about Paper 2. Swap with partner; partner ticks correct info and adds anything missing. Teacher calls on three students to share one fact each. Collect for formative assessment.',
      duration: '10 mins',
    },
    homework:
      'Create a Paper 2 quick-reference card (A5 size). Include: Section A (two 40-mark writing tasks, 1hr 45mins), Section B (Spoken Language NEA, separate), what each task typically asks, personalised timing plan. Use this card in exam conditions.',
    resourcesNeeded: [
      'Venn diagram template',
      'AQA Paper 2 specimen paper or example prompts',
      'Paper 2 framework template',
      'Example Task 1&2 prompts',
      'Whiteboard/marker',
      'Quick-reference card template',
    ],
    assessmentOpportunities: [
      'Venn diagram completion',
      'Framework sheet creation',
      '90-second recall',
      'Quick-reference card',
    ],
    keyVocabulary: [
      'Section A',
      'Section B',
      'writing task',
      'purpose',
      'audience',
      'form',
      'persuasive',
      'narrative',
      'NEA',
    ],
    crossCurricular: ['Spoken communication', 'Public speaking', 'Audience awareness'],
    sendAdaptations:
      'Provide pre-completed framework with info highlighted. Use large print. Simplify language. Read aloud. Pair with peer. Seat near teacher. Use visual timeline.',
  },

  {
    id: 'aqa-lang-p2-02',
    title: 'Writing for Purpose & Audience: Persuasive & Discursive Writing',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand the difference between persuasive (convince), discursive (explore both sides), and explanatory writing',
      'Identify how purpose and audience shape writing choices (vocabulary, tone, structure)',
      'Plan and draft purposeful writing for a specific reader',
      'Score 30+ marks by matching content and style to purpose and audience',
    ],
    starterActivity: {
      description:
        'Purpose Charades: Four groups each given different purpose card (Persuade, Discursive, Inform, Entertain). Each group acts out their purpose without speaking. Others guess. Discuss: How would your writing look different for each purpose? This activates understanding that PURPOSE changes EVERYTHING.',
      duration: '10 mins',
      resources: ['Purpose card deck (Persuade/Discursive/Inform/Entertain)', 'Space for charades'],
    },
    mainActivity: {
      description:
        'Teach relationship between PURPOSE, AUDIENCE, and WRITING CHOICES. Purpose shapes content: Persuasive uses repetition, rhetorical questions, emotive language. Discursive presents opposing views fairly. Informative explains clearly with facts/examples. Audience shapes tone/vocabulary: Different language for teenagers vs parents vs business leaders. Form shapes structure: Letter (greeting/closing), Article (headline, subheadings), Speech (opening hook, powerful conclusion). Model PERSUASIVE task: "Write persuasive article for school magazine arguing uniforms should be banned." Show Grade 6 response (basic opinion + reasons + conclusion, some techniques). Show Grade 8 response (engaging hook, rhetorical questions, 3 reasons with evidence, counterargument addressed, powerful closing, sophisticated language, varied structure). Students then plan and draft persuasive or discursive piece (25 mins). Self-assess using mark scheme.',
      duration: '35 mins',
      steps: [
        'Teach purpose/writing choices relationship: chart showing Persuasive, Discursive, Informative, Narrative techniques',
        'Teach audience awareness: writing for teenagers ≠ parents ≠ business leaders',
        'Teach form: Letter, Article, Speech structures and conventions',
        'Model Grade 6 persuasive piece (basic opinion + reasons + conclusion)',
        'Model Grade 8 persuasive piece (engaging hook, reasons with evidence, counterargument, powerful ending)',
        'Discuss what makes Grade 8 higher',
        'Provide persuasive task prompt',
        'Students plan their persuasive piece (5 mins): purpose, audience, form, main argument, 3 reasons, opening hook',
        'Students draft persuasive piece (20 mins)',
        'Guided self-assessment (5 mins) using mark scheme',
      ],
      differentiation: {
        support:
          'Provide purpose/audience/form frame template. Offer persuasive techniques list with examples. Provide sentence starters. Allow shorter response (300-400 words).',
        stretch:
          'Write discursive piece presenting both sides fairly before conclusion. Include counterargument and refutation. Compare with professional opinion article and adopt techniques.',
      },
    },
    plenary: {
      description:
        'Purpose Sorting: Display five extracts (persuasive article, discursive essay, information leaflet, narrative, speech). Students identify purpose and explain reasoning. Discuss: What clues tell you the purpose?',
      duration: '10 mins',
    },
    homework:
      'Write persuasive or discursive piece (400-500 words) in response to past paper prompt or teacher prompt. Spend 5 mins planning, 30 mins drafting, 5 mins checking. Annotate: highlight one persuasive technique, one audience awareness example, one piece of evidence.',
    resourcesNeeded: [
      'Purpose card deck',
      'Purpose/audience/form chart',
      'Persuasive techniques reference sheet',
      'Form structure guides',
      'Grade 6&8 model responses',
      'Past paper prompts',
      'Mark scheme',
    ],
    assessmentOpportunities: [
      'Purpose Charades',
      'Planned outline',
      'Timed persuasive draft (self-assessed)',
      'Homework annotated piece',
    ],
    keyVocabulary: [
      'purpose',
      'persuasive',
      'discursive',
      'informative',
      'narrative',
      'audience',
      'form',
      'tone',
      'rhetorical question',
      'emotive language',
    ],
    crossCurricular: [
      'Persuasion & rhetoric',
      'Debate & argumentation',
      'Public speaking',
      'Marketing & advertising',
    ],
    sendAdaptations:
      'Provide detailed purpose/audience/form frame. Offer persuasive techniques list with examples. Provide sentence starters. Allow word processor. Scribe if needed. Reduce word count (250-300). Pair with peer. Large print. Extra time.',
  },

  {
    id: 'aqa-lang-p2-03',
    title: 'Writing Technique: Rhetorical Devices for Persuasion',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Identify and use key rhetorical devices (rhetorical question, repetition, emotive language, direct address, tricolon, metaphor)',
      'Understand why each device is persuasive',
      'Apply rhetorical devices strategically in persuasive writing',
      'Score higher marks by demonstrating sophisticated persuasive technique',
    ],
    starterActivity: {
      description:
        'Rhetorical Device Spotlight: Display five persuasive sentences each using different device. Students match sentences to devices (Rhetorical question, Repetition, Emotive language, Direct address, Tricolon, Metaphor). Discuss: Which sentence affected you most? Why? Activates awareness that rhetorical devices create emotional and logical impact.',
      duration: '10 mins',
      resources: ['Five persuasive sentences (projected)', 'Rhetorical device cards/labels'],
    },
    mainActivity: {
      description:
        'Teach six key rhetorical devices and persuasive effects. (1) RHETORICAL QUESTION: Poses question reader not expected to answer. Effect: Engages reader, makes them consider point. Example: "How can we ignore this crisis?" (2) REPETITION: Repeats key word/phrase. Effect: Emphasises importance, builds emotional power. Example: "We need change. We need action. We need it now." (3) EMOTIVE LANGUAGE: Words with strong emotional associations. Effect: Triggers emotional response, makes argument feel urgent. (4) DIRECT ADDRESS: Speaks directly to reader using "you". Effect: Makes reader feel personally involved. (5) TRICOLON: Lists three items in sequence. Effect: Creates rhythm, memorable phrasing. (6) METAPHOR/VIVID IMAGERY: Figurative language. Effect: Creates memorable, visual argument. Model persuasive paragraph using 3-4 devices. Students identify devices: "Did you spot the rhetorical question? The repetition? The metaphor?" Students draft short persuasive paragraph (100-150 words) on given topic, deliberately using at least THREE rhetorical devices. Share examples; identify devices; discuss effectiveness.',
      duration: '35 mins',
      steps: [
        'Display and define six rhetorical devices with effect of each',
        'Provide example sentence for each device',
        'Model persuasive paragraph (on board) using 3-4 devices deliberately',
        'Read model aloud; ask students to spot each device',
        'Discuss: Which device was most persuasive? Why?',
        'Provide persuasive topic (e.g., "Why teenagers should have voice in school decisions")',
        'Students plan their persuasive paragraph: main argument? Which devices? Where in paragraph?',
        'Students draft persuasive paragraph (100-150 words) using at least 3 rhetorical devices',
        'Volunteer reads aloud; class identifies devices',
        'Discuss effectiveness: Which devices worked well? Which felt forced?',
      ],
      differentiation: {
        support:
          'Provide definition cards with examples. Provide sentence starters showing how to use each device. Allow shorter response (80-100 words). Reduce number of devices (aim for 2 instead of 3).',
        stretch:
          'Challenge: Use all six devices in single paragraph. Write two versions: one using devices, one using facts only. Compare persuasive power.',
      },
    },
    plenary: {
      description:
        'Device Detective: Display short professional persuasive piece (Greenpeace article, political speech, charity letter). Students highlight/mark each rhetorical device. Discuss: How does professional author use devices strategically? What can we learn?',
      duration: '10 mins',
    },
    homework:
      'Find persuasive text outside classroom (social media, advertisement, speech, article, letter). Identify at least THREE rhetorical devices. Bring text and annotation to next lesson. Be prepared to explain why each device was chosen and how effective it is.',
    resourcesNeeded: [
      'Five persuasive sentences (starter)',
      'Device definition cards (with examples)',
      'Six rhetorical devices reference sheet',
      'Model persuasive paragraph (annotated)',
      'Persuasive topic prompts',
      'Professional persuasive text excerpt (plenary)',
      'Annotation colours/markers',
    ],
    assessmentOpportunities: [
      'Device Spotlight matching',
      'Model paragraph annotation',
      'Student persuasive paragraphs',
      'Professional text annotation',
      'Homework text analysis',
    ],
    keyVocabulary: [
      'rhetorical device',
      'rhetorical question',
      'repetition',
      'emotive language',
      'direct address',
      'tricolon',
      'metaphor',
      'persuasive',
      'effect',
      'impact',
    ],
    crossCurricular: [
      'Persuasion & rhetoric',
      'Marketing & advertising',
      'Political speech analysis',
      'Media literacy',
    ],
    sendAdaptations:
      'Provide large definition cards with visual examples. Colour-code each device consistently. Offer sentence starters. Reduce devices to identify/use (2 instead of 3). Pair with peer for drafting. Read professional text aloud. Allow extra time. Large-print resources.',
  },

  {
    id: 'aqa-lang-p2-04',
    title: 'Writing Format: Structure & Technique for Articles, Letters & Speeches',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand structure and conventions of three common writing forms: Article, Letter, Speech',
      'Write in each form appropriately for audience and purpose',
      'Use form-specific techniques (headline, subheadings, opening hook, addresses)',
      'Score higher marks by demonstrating form-appropriate writing',
    ],
    starterActivity: {
      description:
        'Form Match: Distribute cards showing KEY features of three forms ("Starts with greeting like Dear Sir/Madam" = Letter; "Has headline and subheadings" = Article; "Designed to be spoken, opens with hook to engage audience" = Speech). Students sort features into three columns: ARTICLE, LETTER, SPEECH. Discuss which features appear where and why.',
      duration: '10 mins',
      resources: [
        'Form feature cards (printed)',
        'Three-column sorting template (board)',
        'Whiteboard/markers',
      ],
    },
    mainActivity: {
      description:
        'Teach structure and conventions of Article, Letter, Speech. (1) ARTICLE: Headline (catchy, engaging), subheadings (guide reader), paragraphs (develop ideas), conclusion (summarise/call to action). Techniques: rhetorical devices, varied paragraph length, direct address. (2) LETTER: Greeting (Dear Sir/Madam), body (clear purpose, evidence, persuasive techniques), closing (Yours sincerely/faithfully), signature. Techniques: formal tone, clear structure, evidence. (3) SPEECH: Opening hook (capture attention, rhetorical question, anecdote), main points (clear, easy to follow when spoken), rhetorical devices (repetition, tricolon, direct address work in speeches), powerful conclusion. Techniques: short sentences for impact, repetition, direct address, rhetorical devices, conversational tone. Model same argument in three forms. Discuss: How does form change word choice, structure, tone? Students choose one form and write on given topic. Self-assess using form-specific mark scheme.',
      duration: '35 mins',
      steps: [
        'Display ARTICLE structure: Headline | Subheadings | Paragraphs | Conclusion',
        'Show example article opening (highlight headline, subheadings)',
        'Display LETTER structure: Greeting | Clear purpose | Body | Closing | Signature',
        'Show example business letter (highlight greeting, body structure, closing)',
        'Display SPEECH structure: Hook | Main points | Rhetorical devices | Powerful ending',
        'Show example speech opening (highlight hook, rhetorical questions, direct address)',
        'Model same argument in three forms: LETTER version (formal), ARTICLE version (headline/subheadings), SPEECH version (direct address/short sentences)',
        'Compare: Notice how form changes language?',
        'Provide topic for students to write about',
        'Students choose ONE form: Article OR Letter OR Speech',
        'Students draft their piece (25 mins) using correct form conventions',
        'Self-assess: Does my piece use correct form structure? Do I use form-appropriate language and techniques?',
      ],
      differentiation: {
        support:
          'Provide detailed form templates with sentence starters. Provide partially completed form with headings/sections ready to fill. Allow choice of simpler form (Letter or Article, not Speech).',
        stretch:
          'Challenge: Write same topic in TWO different forms. Compare how form changes language, structure, persuasive approach. Or: Write speech designed to be delivered. Record or present to class.',
      },
    },
    plenary: {
      description:
        'Form Recognition: Distribute different writing excerpts (article, letter, speech transcript). Students identify form and explain what clues told them. Discuss how form affects reader/listener experience.',
      duration: '10 mins',
    },
    homework:
      'Write persuasive piece in response to past paper prompt, choosing preferred form (Article, Letter, or Speech). Aim for 400-500 words. Use all conventions of chosen form correctly (headline for article, greeting/closing for letter, clear hook and direct address for speech). Annotate: highlight three form-specific features you used.',
    resourcesNeeded: [
      'Form feature cards (sorting)',
      'Three-column sorting template',
      'Article structure guide + example',
      'Letter structure guide + example',
      'Speech structure guide + example',
      'Same argument in all three forms',
      'Form-specific templates (support)',
      'Past paper prompts',
      'Mark scheme',
    ],
    assessmentOpportunities: [
      'Form feature sorting',
      'Three versions identification',
      'Student writing in chosen form',
      'Homework annotated piece',
    ],
    keyVocabulary: [
      'article',
      'letter',
      'speech',
      'headline',
      'subheading',
      'greeting',
      'closing',
      'formal',
      'direct address',
      'hook',
      'convention',
      'form',
    ],
    crossCurricular: ['Business communication', 'Journalism', 'Public speaking', 'Persuasion'],
    sendAdaptations:
      'Provide pre-completed templates with structure marked. Simplify examples. Offer list of conventions to check. Reduce word count (250-300). Allow Letter or Article only (not Speech). Pair with peer. Large print. Extra time.',
  },

  {
    id: 'aqa-lang-p2-05',
    title: 'Paper 2 Task 1 Practice: Persuasive & Discursive Writing (40 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Practise writing under timed conditions (45 minutes for 40-mark task)',
      'Apply purpose, audience, form, and rhetorical techniques appropriately',
      'Manage time effectively (5 mins plan + 35 mins draft + 5 mins check)',
      'Score 30+ marks by demonstrating audience awareness and persuasive technique',
    ],
    starterActivity: {
      description:
        'Prompt Decoder: Display past paper Task 1 prompt. Students work in pairs to identify: (1) What form am I writing in? (2) What is my purpose? (3) Who is my audience? (4) What is the context? Example: "Write persuasive article for magazine aimed at teenagers, arguing whether school uniform should be compulsory." Answer: Article, Persuade, Teenagers, Uniform policy. Activates careful reading of task before writing.',
      duration: '10 mins',
      resources: ['Past paper Task 1 prompt(s)', 'Prompt Decoder worksheet', 'Whiteboard'],
    },
    mainActivity: {
      description:
        'Complete timed Paper 2 Task 1 under realistic exam conditions (45 minutes). Brief: "You have 45 minutes for this task. Use 5 minutes to plan (identify form, purpose, audience, main argument). Use 35 minutes to draft (write using appropriate form and persuasive techniques). Use 5 minutes to check (fix errors, improve weak language)." Distribute past paper Task 1 prompt. Students work independently. Teacher circulates observing (no help, authentic exam conditions). Circulate every 10 minutes observing: Planning? Form-appropriate language? Rhetorical devices visible? After 45 minutes, collect. Students immediately reflect: Did you finish? What was your approach? Which rhetorical device did you use? How confident?',
      duration: '35 mins',
      steps: [
        'Distribute Task 1 prompt',
        'Students identify: form, purpose, audience, context using Prompt Decoder (2 mins)',
        'Students plan response (5 mins): main argument, 3 supporting points, rhetorical devices, form-specific features',
        'Students draft response (35 mins)',
        'Teacher circulates every 10 mins observing',
        'At 40-min: announce final 5 minutes',
        'Students check their work (5 mins)',
        'At 45 mins: collect responses',
        'Students complete reflection sheet (5 mins)',
      ],
      differentiation: {
        support:
          'Provide detailed planning template. Offer sentence starters. Allow 50 minutes instead of 45. Provide large-print prompt. Seat near teacher.',
        stretch:
          'Aim for 500+ words. Use 4+ rhetorical devices. After finishing, self-assess against mark scheme and identify what would push from Grade 7 to Grade 8.',
      },
    },
    plenary: {
      description:
        'Reflection & Observation (5 mins). Collect reflection sheets. Ask volunteers: "What did you find challenging? What was your approach?" Observe (without naming): Which rhetorical devices appeared? Did students use form-appropriate language? Address common challenges. Celebrate completion and effort.',
      duration: '5 mins',
    },
    homework:
      'Complete second Task 1 prompt (different topic, same format) under timed conditions (45 minutes). Self-assess response against detailed mark scheme. Identify: (1) What mark would you give yourself? (2) What is your strongest aspect? (3) What would improve your mark? (4) How is this response different from first Task 1 attempt?',
    resourcesNeeded: [
      'Past paper Task 1 prompt (lesson)',
      'Prompt Decoder worksheet',
      'Planning template',
      'Countdown timer',
      'Reflection sheet',
      'Second Task 1 prompt (homework)',
      'Detailed mark scheme',
    ],
    assessmentOpportunities: [
      'Prompt Decoder identification',
      'Planning notes',
      'Timed Task 1 response (summative)',
      'Reflection sheet',
      'Homework self-assessment',
    ],
    keyVocabulary: [
      'task',
      'prompt',
      'form',
      'purpose',
      'audience',
      'planning',
      'rhetorical device',
      'persuasive technique',
    ],
    crossCurricular: ['Exam technique', 'Time management', 'Self-assessment'],
    sendAdaptations:
      'Provide detailed planning template and sentence starters. Allow 50 minutes. Seat near teacher. Large-print prompt. Quiet exam space. Reader/scribe if appropriate. 10-minute and 5-minute time warnings clearly. Word bank of useful vocabulary.',
  },

  {
    id: 'aqa-lang-p2-06',
    title: 'Paper 2 Task 2 Practice: Narrative & Descriptive Writing (40 marks)',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Practise writing a second 40-mark task, often narrative or descriptive, in 45 minutes',
      'Switch writing modes effectively from Task 1 to Task 2',
      'Apply narrative/descriptive techniques appropriately',
      'Score 30+ marks demonstrating communication, organisation, and technical accuracy',
    ],
    starterActivity: {
      description:
        'Task 1 vs Task 2: Quick Switch. Display Task 1 prompt (persuasive) and Task 2 prompt (narrative/descriptive). Discuss: "How are these different? What skills does each need?" Example: Task 1 uses rhetorical devices and argument; Task 2 uses sensory detail, figurative language, character, plot. This preps students for mental shift between two tasks.',
      duration: '10 mins',
      resources: ['Task 1 and Task 2 prompts (contrasting)', 'Whiteboard'],
    },
    mainActivity: {
      description:
        'Complete timed Task 2 under realistic exam conditions (45 minutes). Task 2 often asks for narrative or descriptive writing, different from persuasive/discursive Task 1. Brief: "You have completed Task 1. Now you are moving to Task 2. This has a different purpose - probably narrative or descriptive. Use 5 minutes to plan your narrative/description (character/setting/plot or sensory details). Use 35 minutes to draft (write vividly, use varied sentence structures). Use 5 minutes to check (fix errors, improve language)." Distribute past paper Task 2 prompt. Students work independently. Teacher circulates observing. After 45 minutes, collect. Students reflect: Did switching from persuasive to narrative feel different? What techniques did you use? How confident?',
      duration: '35 mins',
      steps: [
        'Distribute Task 2 prompt',
        'Students identify: Is this narrative or descriptive? (1 min)',
        'If NARRATIVE: Plan character, setting, conflict, resolution (4 mins)',
        'If DESCRIPTIVE: Plan sensory details, figurative language, mood (4 mins)',
        'Students draft response (35 mins)',
        'Teacher circulates observing',
        'At 40-min: announce final 5 minutes',
        'Students check work (5 mins)',
        'At 45 mins: collect responses',
        'Students complete reflection (5 mins)',
      ],
      differentiation: {
        support:
          'Provide narrative/descriptive planning template. Offer sentence starters. Allow 50 minutes instead of 45. Reduce target word count. Seat near teacher. Large-print prompt.',
        stretch:
          'Challenge: After finishing, self-assess against mark scheme. Identify one sentence you would strengthen and rewrite it. Calculate estimated mark.',
      },
    },
    plenary: {
      description:
        'Task Comparison (5 mins): Students briefly share approach to Task 1 and Task 2. Discuss: "How different was your writing process? How did techniques change between tasks?" Celebrate the ability to switch modes - it is a sophisticated skill.',
      duration: '5 mins',
    },
    homework:
      'Complete both Task 1 and Task 2 under full timed conditions (90 minutes: 45 mins Task 1 + 45 mins Task 2, with 5-minute break between). Self-assess both responses against detailed mark scheme. Compare: Which task felt more successful? Why?',
    resourcesNeeded: [
      'Past paper Task 2 prompt (lesson)',
      'Planning template for narrative/descriptive',
      'Countdown timer',
      'Reflection sheet',
      'Past paper Task 1 and Task 2 prompts (homework)',
      'Detailed mark scheme',
    ],
    assessmentOpportunities: [
      'Task 1 vs Task 2 comparison',
      'Timed Task 2 response (summative)',
      'Reflection',
      'Homework full exam',
    ],
    keyVocabulary: [
      'narrative',
      'descriptive',
      'character',
      'setting',
      'plot',
      'sensory detail',
      'figurative language',
      'mood',
      'technique',
      'communication',
      'organisation',
    ],
    crossCurricular: ['Creative writing', 'Exam technique'],
    sendAdaptations:
      'Provide detailed planning template for narrative/descriptive. Offer sentence starters. Allow 50 minutes. Seat near teacher. Large-print prompt. Quiet space. Reader/scribe if needed. Clear 10-minute and 5-minute time warnings. Reduce target word count.',
  },

  {
    id: 'aqa-lang-p2-07',
    title: 'Spoken Language: Planning & Delivering a Formal Presentation',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand the Spoken Language NEA: a 3-5 minute prepared presentation + spontaneous Q&A',
      'Plan a presentation on a topic of personal interest',
      'Develop the skills to present confidently: pace, volume, clarity, engagement',
      'Score 12+ marks by demonstrating control of formal speech and responding to questions',
    ],
    starterActivity: {
      description:
        'Presentation Autopsy: Show a 2-minute video of a professional speaker. Ask: What makes this person effective? Students note pace, volume, eye contact, pauses, gesture. This models what effective spoken language looks like.',
      duration: '10 mins',
      resources: ['Video clip of professional speaker (2 mins)', 'Effective speaking checklist'],
    },
    mainActivity: {
      description:
        'Teach NEA requirements and presentation planning. Requirements: Prepare a 3-5 minute presentation on a topic of personal interest. Delivery skills: Pace, Volume, Clarity, Eye contact, Gesture, Confidence. Model a 2-3 minute presentation. Students choose topic and plan: Choose topic → Identify 4-5 main points → Gather examples → Plan opening and closing.',
      duration: '35 mins',
      steps: [
        'Explain NEA requirements: 3-5 mins prepared speech + spontaneous Q&A',
        'Display planning stages: Topic → Main points → Examples → Opening + Closing',
        'Model a presentation (highlighting delivery techniques)',
        'Explain delivery techniques: Pace, Volume, Clarity, Eye contact, Gesture, Confidence',
        'Provide topic options (students choose)',
        'Students plan presentation (20 mins): Topic, 4-5 points, examples, hook, closing',
        'Share plans in pairs',
      ],
      differentiation: {
        support: 'Provide topic suggestions and planning template with sentence starters.',
        stretch:
          'Plan a persuasive presentation or one requiring research. Include counterarguments.',
      },
    },
    plenary: {
      description: 'Topic Showcase: Students share chosen topics. Celebrate range of interests.',
      duration: '5 mins',
    },
    homework:
      'Complete planning. Prepare speaker notes (bullet points). Practice delivery at home. Time yourself - aim for 3-5 minutes.',
    resourcesNeeded: [
      'Professional speaker video clip',
      'Effective speaking checklist',
      'Planning template',
      'Topic options',
    ],
    assessmentOpportunities: [
      'Planning sheet (topic + structure)',
      'Peer feedback on topic choice',
    ],
    keyVocabulary: ['presentation', 'NEA', 'pace', 'volume', 'clarity', 'eye contact', 'gesture'],
    crossCurricular: ['Public speaking', 'Communication skills', 'Confidence building'],
    sendAdaptations:
      'Provide detailed planning template; offer topic suggestions; normalize presentation anxiety; pair with peer; allow practice run beforehand; clarify that accent/pronunciation are never marked.',
  },

  {
    id: 'aqa-lang-p2-08',
    title: 'Spoken Language: Delivery & Spontaneous Question Response',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Deliver a prepared 3-5 minute presentation with confident delivery',
      'Respond confidently to spontaneous follow-up questions',
      'Demonstrate control of formal spoken language',
      'Receive feedback and identify improvement areas',
    ],
    starterActivity: {
      description:
        'Nerves Normalization: Discuss presentation anxiety. Affirm: "Nervousness is normal. Good preparation helps." Outline what will happen: "You\'ll deliver your presentation. I\'ll ask 2-3 questions. Classmates will listen respectfully and give feedback."',
      duration: '5 mins',
      resources: ['Calm, supportive classroom tone'],
    },
    mainActivity: {
      description:
        'Students deliver prepared presentations (3-5 mins each). After each, teacher asks 2-3 follow-up questions. Class gives feedback. Assessment focus: Clarity, pace, eye contact, confidence, ability to respond to questions.',
      duration: '50 mins',
      steps: [
        'One student presents at front; others face presenter',
        'Student delivers presentation (3-5 mins)',
        'Teacher asks 2-3 follow-up questions (1-2 mins)',
        'Teacher notes delivery observations',
        'Class gives one-sentence feedback',
        'Repeat for all students',
      ],
      differentiation: {
        support:
          'Allow standing beside teacher if anxious. Provide sentence starters. Assure that answers do NOT need to be perfect.',
        stretch:
          'Make eye contact with different audience members. Include rhetorical question or powerful closing statement.',
      },
    },
    plenary: {
      description:
        'Celebration (5 mins). Discuss: "What went well? What delivery techniques did you notice? How did you feel?" Celebrate all speakers.',
      duration: '5 mins',
    },
    homework:
      'Reflect on your presentation: (1) How confident did you feel? (2) What went well? (3) What would you improve? (4) How did you respond to follow-up questions? Write brief reflection.',
    resourcesNeeded: [
      'Classroom space',
      'Stopwatch/timer',
      'Assessment form',
      'Listener feedback sheet',
    ],
    assessmentOpportunities: [
      'Live presentation (assessed against rubric)',
      'Spontaneous Q&A response',
      'Peer feedback',
      'Self-reflection',
    ],
    keyVocabulary: ['presentation', 'delivery', 'pace', 'volume', 'clarity', 'confidence', 'Q&A'],
    crossCurricular: ['Public speaking', 'Communication', 'Confidence'],
    sendAdaptations:
      'Allow seated presentation if standing causes anxiety. Allow beside teacher. Provide practice beforehand. Simplify follow-up questions. Normalize anxiety and celebrate attempt. Seat in quiet space if distracted. Allow extra time. Clarify that accent/pronunciation not marked.',
  },

  {
    id: 'aqa-lang-p2-09',
    title: 'Full Paper 2 Exam: Both Writing Tasks Under Timed Conditions',
    duration: '1.5 hours',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Complete full Paper 2 exam (90 mins: 45 Task 1 + 5 break + 45 Task 2)',
      'Apply purpose, audience, form, and techniques appropriately',
      'Manage time effectively across two different tasks',
      'Identify remaining areas for targeted revision',
    ],
    starterActivity: {
      description:
        "Brief confidence check: \"Today you're completing a full Paper 2 exam under authentic conditions. You've practiced both tasks multiple times. You're ready. Work independently. No help will be given. Afterward, you'll receive feedback for final revision.\"",
      duration: '5 mins',
      resources: ['Full Paper 2 past paper'],
    },
    mainActivity: {
      description:
        'Deliver complete Paper 2 exam (90 mins: 45 Task 1 + 5-min break + 45 Task 2). Students work independently. Teacher circulates observing. Time announcements at intervals. After 90 mins, collect papers. Students complete reflection exit slip.',
      duration: '90 mins + 5 mins reflection',
      steps: [
        'Distribute past paper',
        'Students begin Task 1 (45 mins)',
        'Time announcements (40, 30, 20, 5 mins)',
        'At 45 mins: Announce break',
        'At 50 mins: Begin Task 2',
        'Time announcements again',
        'At 90 mins: Collect papers',
        'Students complete reflection exit slip (5 mins)',
      ],
      differentiation: {
        support:
          'Provide planning templates; allow 105 mins; seat near teacher; use large-print paper; allow word processor or reader/scribe.',
        stretch: 'Challenge: Self-assess one response against mark scheme after finishing.',
      },
    },
    plenary: {
      description:
        'Debrief (5 mins): "You\'ve completed a full mock exam. Excellent exam practice. Feedback comes next. Reflect on what went well and what was challenging."',
      duration: '5 mins',
    },
    homework:
      'Self-reflect on your Paper 2 exam. Write: (1) How did you feel? (2) Did you finish both tasks? (3) Which task felt stronger? (4) What would you do differently in the real exam?',
    resourcesNeeded: [
      'Full Paper 2 past paper',
      'Blank paper/exam booklet',
      'Countdown timer',
      'Exit slip template',
      'Planning templates',
    ],
    assessmentOpportunities: [
      'Complete Paper 2 exam (summative)',
      'Exit slip reflection',
      'Teacher observation of technique use',
    ],
    keyVocabulary: ['mock exam', 'authentic conditions', 'time management'],
    crossCurricular: ['Exam technique', 'Resilience under pressure'],
    sendAdaptations:
      'Provide planning templates; allow 105 mins; seat near teacher; large-print paper; word processor; reader/scribe; clear time announcements; affirm effort; celebrate completion.',
  },

  {
    id: 'aqa-lang-p2-10',
    title: 'Final Revision: Consolidation & Exam Readiness',
    duration: '1 hour',
    yearGroup: 'Year 10-11',
    examBoard: 'AQA',
    learningObjectives: [
      'Understand how to use mocks to plan final revision',
      'Consolidate core skills for Paper 1 and Paper 2',
      'Create personalised revision focus based on mock feedback',
      'Develop exam confidence and readiness for real GCSE',
    ],
    starterActivity: {
      description:
        'Progress Review: Display visual timeline showing journey from Lesson 1 to now. Affirm: "Look how far you\'ve come. You\'ve practiced every question type and improved. This final lesson helps you focus your last weeks of revision."',
      duration: '5 mins',
      resources: ['Progress tracker (visual timeline)'],
    },
    mainActivity: {
      description:
        'Deliver Paper 2 mock feedback. Hand out personalised feedback sheets. Students read. Pair discussion. Create revision focus cards identifying ONE area per paper. Create final revision checklist together: Paper 1 (Q1-Q5) and Paper 2 (Task 1, Task 2, Spoken Language). Students copy into revision book. Share cards in groups.',
      duration: '50 mins',
      steps: [
        'Distribute Paper 2 mock feedback sheets',
        'Students read feedback (2 mins)',
        'Pair discussion (5 mins): "What feedback? What will you focus on?"',
        'Students write ONE revision focus per paper on cards',
        'Create final revision checklist on board: Paper 1 (Q1-Q5) + Paper 2 (Task 1, Task 2, Spoken Language)',
        'Discuss practice strategies for each area',
        'Students copy checklist into revision book',
        'Share revision focus cards in groups',
      ],
      differentiation: {
        support:
          'Simplify feedback to ONE point per paper. Provide revision focus options. Offer one-to-one feedback.',
        stretch:
          'Write 3-4 specific revision activities for focus area. Create accountability tracker.',
      },
    },
    plenary: {
      description:
        "Celebration & Commitment (5 mins). Affirm: \"You've learned so much. Practiced every question type. Received feedback. Your revision focuses show where your effort will matter most. I'm confident you're ready. Let's make these final weeks count.\"",
      duration: '5 mins',
    },
    homework:
      'Begin targeted revision based on focus cards. For Paper 1 focus: Complete one question, self-assess. For Paper 2 focus: Complete one practice task, self-assess. For Spoken Language: Practise presentation delivery. Bring evidence of revision to next lesson.',
    resourcesNeeded: [
      'Personalised Paper 2 mock feedback sheets',
      'Progress tracker',
      'Revision focus card template',
      'Revision checklist template',
      'Past paper question banks',
    ],
    assessmentOpportunities: [
      'Paper 2 mock feedback (summative)',
      'Revision focus cards (identifies needs)',
      'Revision checklist (planning tool)',
      'Homework revision activities (formative)',
    ],
    keyVocabulary: [
      'feedback',
      'revision focus',
      'targeted improvement',
      'self-assessment',
      'progress',
    ],
    crossCurricular: ['Self-assessment', 'Study skills and time management'],
    sendAdaptations:
      'Provide simplified feedback (one key point per paper). Offer pre-made revision options. Offer one-to-one feedback. Pair with peer. Use simple, clear language. Celebrate progress and effort. Affirm that revision is individual and personal.',
  },
]

export default aqaLanguageLessonPlans
