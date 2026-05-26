import type { LessonPlan } from '@/types'

export const y10IgcseLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LANGUAGE PAPER 1 (5 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 1: Paper 1 Overview - Format, Timing, AOs ─────────────────────
  {
    id: 'y10-igcse-01-paper1-overview',
    title: 'Language Paper 1 Overview: Format, Timing and Assessment Objectives',
    text: 'IGCSE English Language',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the structure and format of IGCSE English Language Paper 1',
      'Identify the assessment objectives (AO1: Reading, AO2: Writing) and how marks are distributed',
      'Develop a timing strategy for each section of the paper',
      'Recognise the command words and question types across both reading and writing sections',
    ],
    successCriteria: [
      'I can describe the format of Paper 1, including the number of questions and marks available',
      'I can explain what AO1 and AO2 require in my own words',
      'I can allocate appropriate timings to each question based on mark weighting',
      'I can identify command words and explain what each one requires me to do',
    ],
    keywords: [
      'assessment objective',
      'AO1',
      'AO2',
      'command word',
      'mark allocation',
      'reading comprehension',
      'transactional writing',
      'directed writing',
    ],
    starterActivity: {
      title: 'Exam Myth-Busters',
      duration: '8 minutes',
      instructions:
        'Display a series of true/false statements about the IGCSE English Language exam on the board (e.g. "You only need to read the passage once", "Spelling doesn\'t matter in the reading section", "You should spend equal time on every question"). Students vote using mini-whiteboards. Teacher reveals answers and uses this to surface common misconceptions, establishing a baseline of understanding.',
      differentiation: {
        support:
          'Provide a glossary card defining key terms such as "assessment objective", "mark allocation" and "command word" for reference during the activity.',
        core: 'Students justify their true/false answers with reasoning before the reveal.',
        stretch:
          'Students predict why each misconception might be harmful and what the consequences would be in an actual exam.',
      },
      resources: ['True/false statements slide', 'Mini-whiteboards and pens'],
    },
    mainActivities: [
      {
        title: 'Paper 1 Anatomy: Mapping the Exam',
        duration: '18 minutes',
        instructions:
          'Distribute a blank Paper 1 overview grid with columns for Question Number, Skill Tested, AO, Marks, Suggested Timing, and Key Command Words. Using an annotated specimen paper projected on the board, teacher guides students through each question, pausing for students to fill in the grid. Highlight how marks translate to minutes (roughly 1 mark = 1 minute plus planning/checking time). Students colour-code reading questions (AO1) and writing questions (AO2) to visualise the balance.',
        differentiation: {
          support:
            'Provide a partially completed grid with some rows already filled in; students complete the remaining rows.',
          core: 'Students complete the full grid independently alongside the teacher walkthrough.',
          stretch:
            'Students calculate the percentage of marks for reading vs. writing and evaluate which section they should prioritise in revision.',
        },
        resources: [
          'Paper 1 overview grid handout',
          'Specimen paper (projected)',
          'Colour highlighters',
        ],
      },
      {
        title: 'Command Word Decoding and Practice',
        duration: '18 minutes',
        instructions:
          'Present the key command words from Paper 1: identify, explain, analyse, describe, write, argue, persuade. For each, provide a definition and an example question stem. Students work in pairs to match command words to example questions from past papers, then rank them by difficulty. In the final 8 minutes, students attempt a short 1-mark and a 2-mark reading question from a specimen paper to put their understanding into practice. Teacher models the marking process using the mark scheme on the visualiser.',
        differentiation: {
          support:
            'Provide a command word reference mat with definitions and example sentence starters for each.',
          core: 'Students match, rank, and attempt the practice questions independently.',
          stretch:
            'Students write their own exam-style question for a partner using the correct command words and mark allocations.',
        },
        resources: [
          'Command word cards and definitions',
          'Past paper question excerpts',
          'Mark scheme extracts',
        ],
      },
    ],
    plenaryActivity: {
      title: 'My Paper 1 Action Plan',
      duration: '6 minutes',
      instructions:
        'Students complete a reflection card with three prompts: (1) The section I feel most confident about is... because..., (2) The section I need to focus on is... because..., (3) My timing strategy will be... Teacher collects cards to inform future planning and identify areas of concern across the class.',
      differentiation: {
        support: 'Provide sentence starters and a simplified reflection template.',
        core: 'Students complete all three prompts with detailed reasoning.',
        stretch:
          'Students set two specific, measurable targets for their Paper 1 preparation with a timeline.',
      },
    },
    homework:
      'Read the specimen paper insert passage at home. Annotate it by underlining key words and phrases, and write three questions you think the examiner might ask about it.',
    worksheetQuestions: [
      {
        question:
          'List the two assessment objectives for IGCSE English Language Paper 1 and explain what each one tests.',
        lines: 4,
        modelAnswer:
          'AO1 (Reading) tests the ability to understand and analyse texts, including retrieving information, making inferences, and analysing language and structure. AO2 (Writing) tests the ability to write clearly, accurately and effectively for a specific purpose and audience, including organising ideas and using appropriate register.',
        marks: 4,
      },
      {
        question:
          'A student has 1 hour 45 minutes for Paper 1. The reading section is worth 50 marks and the writing section is worth 40 marks. Suggest a timing plan and justify your allocation.',
        lines: 5,
        modelAnswer:
          'Approximately 55-60 minutes for reading and 40-45 minutes for writing, leaving 5 minutes for checking. This reflects the mark weighting - reading carries more marks and requires careful textual evidence, while writing needs planning time built in. A rough guide is 1 minute per mark plus 5 minutes planning for the writing task.',
        marks: 4,
      },
      {
        question:
          'Explain the difference between the command words "identify" and "explain". Use an example to illustrate each.',
        lines: 4,
        modelAnswer:
          '"Identify" means to find and state specific information from the text - it requires retrieval, not analysis. For example, "Identify two ways the writer shows the character is nervous." "Explain" means to give reasons and develop a point with evidence and analysis. For example, "Explain how the writer creates a tense atmosphere" requires selecting evidence and analysing the effect.',
        marks: 3,
      },
      {
        question:
          'Why is it important to read the passage more than once before answering the questions? Give at least two reasons.',
        lines: 4,
        modelAnswer:
          "First reading gives overall understanding of the text's content, tone and purpose. A second reading allows closer attention to specific language choices, structural techniques and implicit meanings that questions will target. Without re-reading, students often miss nuance and select superficial evidence.",
        marks: 2,
      },
      {
        question:
          'A student spends 40 minutes on Question 1 (worth 10 marks) and rushes the final writing question (worth 25 marks) in 15 minutes. What advice would you give them?',
        lines: 5,
        modelAnswer:
          'The student has spent disproportionate time on a lower-mark question. They should spend roughly 10-12 minutes on a 10-mark question and 25-30 minutes on a 25-mark question. Advice: practise under timed conditions, use the mark = minute rule as a guide, plan writing tasks before starting, and leave 5 minutes at the end to proofread.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Use the CIE specimen papers and mark schemes available on the Cambridge website - ensure you are using the correct syllabus (IGCSE Language A or Language B).',
      'This lesson establishes exam literacy that underpins all subsequent Paper 1 lessons. Refer back to the overview grid regularly.',
      'Consider creating a classroom display of the Paper 1 structure that students can reference throughout the year.',
      'Differentiation data from the reflection cards is valuable for grouping students in future lessons.',
    ],
    targetedSkills: [
      'Exam Technique',
      'Time Management',
      'Command Word Analysis',
      'Assessment Objective Awareness',
      'Self-Assessment',
    ],
  },

  // ── Lesson 2: Reading - Inference and Retrieval (AO1) ────────────────────
  {
    id: 'y10-igcse-02-inference-retrieval',
    title: 'Reading: Inference and Retrieval Skills (AO1)',
    text: 'IGCSE English Language',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Retrieve explicit information from a text accurately and concisely',
      'Make inferences supported by textual evidence',
      'Distinguish between retrieval questions and inference questions in exam contexts',
      'Structure responses to short-answer reading questions for maximum marks',
    ],
    successCriteria: [
      'I can locate and quote specific details from a passage to answer retrieval questions',
      'I can infer meaning from implicit details and explain my reasoning with evidence',
      'I can identify whether a question requires retrieval or inference and adjust my approach',
      'I can write concise responses that match the mark tariff of each question',
    ],
    keywords: [
      'retrieval',
      'inference',
      'explicit',
      'implicit',
      'evidence',
      'textual reference',
      'connotation',
      'deduce',
    ],
    starterActivity: {
      title: 'Surface vs. Depth Reading',
      duration: '7 minutes',
      instructions:
        'Display a short paragraph (5-6 lines) from a prose fiction text. Ask students to write two facts they can see directly in the text (retrieval) and two things they can work out that are not stated directly (inference). Share examples under the visualiser and collaboratively label them as retrieval or inference. Establish the key distinction: retrieval = "it says", inference = "it suggests".',
      differentiation: {
        support:
          'Provide the paragraph with key phrases pre-highlighted and a two-column table labelled "It says" and "It suggests".',
        core: 'Students independently identify two examples of each type.',
        stretch:
          'Students rank their inferences by how much evidence supports them and discuss which would score higher in an exam.',
      },
      resources: ['Short prose extract slide', 'Two-column table template'],
    },
    mainActivities: [
      {
        title: 'Retrieval Question Drill',
        duration: '15 minutes',
        instructions:
          'Provide an exam-style passage (approximately 600 words) and a set of five retrieval questions worth 1-2 marks each. Students work individually under light time pressure (8 minutes). Teacher then models the marking process using the mark scheme, emphasising: use short quotations, do not over-explain, match the number of points to the number of marks. Students self-mark using green pen and note areas for improvement.',
        differentiation: {
          support:
            'Paragraph numbers are given for each question so students know where to look; provide a retrieval checklist (find it, quote it, move on).',
          core: 'Students locate evidence independently across the full passage.',
          stretch:
            'Students identify a "trap" answer - a plausible but incorrect response - and explain why it would not gain marks.',
        },
        resources: [
          'Exam-style passage handout',
          'Retrieval questions sheet',
          'Mark scheme extract',
          'Green marking pens',
        ],
      },
      {
        title: 'Inference Ladder: Building Developed Responses',
        duration: '22 minutes',
        instructions:
          'Using the same passage, present three inference questions worth 3-4 marks each. Teacher models the "Inference Ladder" technique on the board: Step 1 - Identify the clue in the text. Step 2 - State what it suggests (inference). Step 3 - Explain why using word-level analysis. Step 4 - Consider the wider implication. Students practise one question collaboratively, then attempt the remaining two independently. After writing, students peer-assess using a simplified mark scheme grid, awarding marks for evidence, inference, and development.',
        differentiation: {
          support:
            'Provide an inference scaffold with sentence starters: "The writer suggests...", "This is shown through...", "The word/phrase ___ implies...", "This could mean...".',
          core: 'Students use the Inference Ladder independently for two questions.',
          stretch:
            'Students write an alternative interpretation for the same evidence, demonstrating that texts can support multiple readings.',
        },
        resources: [
          'Inference Ladder poster/slide',
          'Inference questions sheet',
          'Peer-assessment mark scheme grid',
          'Inference scaffold (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: "Examiner's Chair",
      duration: '6 minutes',
      instructions:
        'Select two student responses (one retrieval, one inference) and display them anonymously on the board. The class acts as "examiners", awarding marks using the mark scheme and justifying their decisions. Teacher confirms the marks and highlights what would push each response to full marks. Students note one improvement target in their exercise books.',
      differentiation: {
        support: 'Provide the mark scheme as a simple checklist to follow.',
        core: 'Students justify their marks with reference to the mark scheme criteria.',
        stretch: 'Students rewrite the weaker response to achieve full marks in two minutes.',
      },
    },
    homework:
      'Complete a set of six exam-style retrieval and inference questions on a new unseen passage. Self-assess using the provided mark scheme and highlight any questions where you are unsure of your mark.',
    worksheetQuestions: [
      {
        question:
          'Read the passage and identify two things we learn about the setting in the first paragraph. Use short quotations to support your answer. [AO1 Retrieval]',
        lines: 4,
        modelAnswer:
          'We learn the setting is remote and isolated - "miles from the nearest village." We also learn it is in a state of decay - "the walls crumbled like old teeth." Each point is supported by a direct quotation from the text.',
        marks: 2,
      },
      {
        question:
          'What impression does the writer create of the main character in lines 5-12? Support your answer with evidence from the text. [AO1 Inference]',
        lines: 6,
        modelAnswer:
          'The writer creates the impression that the character is anxious and fearful. The detail "her fingers drummed against the tabletop" suggests nervous energy and restlessness. The simile "she flinched like a startled animal" implies heightened sensitivity to her surroundings and a sense of vulnerability, as if she is prey rather than predator. This builds a picture of someone in a state of constant alertness.',
        marks: 4,
      },
      {
        question:
          'Explain the difference between a retrieval question and an inference question. Give an example of each.',
        lines: 5,
        modelAnswer:
          'A retrieval question asks you to find and state information directly from the text - the answer is explicitly there. Example: "What colour is the character\'s coat?" An inference question asks you to read between the lines and interpret what the text suggests but does not state directly. Example: "What impression does the writer give of the character\'s mood?" Inference requires analysis and explanation.',
        marks: 3,
      },
      {
        question:
          'A student answers a 3-mark inference question with: "The character is scared." What is missing from this response? Rewrite it to achieve full marks.',
        lines: 6,
        modelAnswer:
          "The response lacks textual evidence and developed explanation. A full-mark version: \"The character is presented as scared. This is suggested by the detail 'his breath came in shallow, ragged gasps', which implies he is physically affected by fear. The adjective 'ragged' suggests a loss of control, conveying that his fear is overwhelming and involuntary, rather than a mild unease.\"",
        marks: 3,
      },
      {
        question:
          'Using the Inference Ladder technique, write a response to the following: "How does the writer suggest that time is running out in lines 15-20?" Refer closely to the language used. [AO1]',
        lines: 8,
        modelAnswer:
          'The writer suggests time is running out through increasingly urgent language. The phrase "the clock hammered its relentless rhythm" personifies the clock, using the verb "hammered" to create a sense of violent, unstoppable force. The adjective "relentless" implies there is no possibility of pausing or reversing time, adding to the pressure. The wider implication is that the character is trapped by circumstance, unable to act quickly enough - this builds tension and a sense of inevitability for the reader.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Use CIE past paper passages where possible to build familiarity with the style and length of exam texts.',
      'The Inference Ladder is a scaffold - as students grow in confidence, encourage them to internalise the steps rather than rigidly following the frame.',
      'Common error: students copy large chunks of text as evidence. Emphasise selecting short, embedded quotations of 2-5 words.',
      'Peer assessment is most effective when students have practised using the mark scheme several times - this may be their first exposure, so model thoroughly.',
    ],
    targetedSkills: [
      'AO1 Reading',
      'Retrieval',
      'Inference',
      'Evidence Selection',
      'Concise Response Writing',
    ],
  },

  // ── Lesson 3: Reading - Language Analysis (AO2) ──────────────────────────
  {
    id: 'y10-igcse-03-language-analysis',
    title: 'Reading: Language Analysis (AO2)',
    text: 'IGCSE English Language',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Identify language techniques used by writers in prose and non-fiction texts',
      'Analyse the effect of specific word choices on the reader',
      'Structure an analytical response using Point, Evidence, Analysis, Link',
      'Use subject terminology accurately when discussing language',
    ],
    successCriteria: [
      'I can identify at least three language techniques in a given extract',
      "I can analyse the effect of a writer's word choices, going beyond feature-spotting",
      'I can write a PEAL paragraph that moves from identification to analysis of effect',
      'I can use subject terminology such as metaphor, connotation, semantic field, and tone accurately',
    ],
    keywords: [
      'language analysis',
      'connotation',
      'imagery',
      'metaphor',
      'simile',
      'personification',
      'semantic field',
      'tone',
    ],
    starterActivity: {
      title: 'Word-Level Zoom',
      duration: '7 minutes',
      instructions:
        'Display a single sentence from a prose text on the board, e.g. "The forest devoured the path." Students annotate the sentence on mini-whiteboards, circling powerful word choices and noting what each word suggests. Discuss as a class: What does "devoured" suggest that "covered" would not? Establish the principle that language analysis is about why the writer chose this word over alternatives.',
      differentiation: {
        support:
          'Provide the sentence with the key word underlined and two alternative words to compare it against.',
        core: 'Students independently identify the powerful word choice and explain its connotations.',
        stretch:
          'Students rewrite the sentence using three different verbs and evaluate how each changes the effect.',
      },
      resources: ['Sentence slide', 'Mini-whiteboards and pens'],
    },
    mainActivities: [
      {
        title: 'Technique Toolkit: Identifying and Labelling Language Features',
        duration: '15 minutes',
        instructions:
          'Provide a passage of approximately 400 words (prose fiction or descriptive non-fiction). Students work in pairs to annotate the extract, highlighting examples of: metaphor, simile, personification, semantic field, emotive language, and sensory imagery. Each pair must find at least four different techniques and label them using the correct subject terminology. Teacher circulates and challenges students who are only identifying similes to look for less obvious techniques. Class shares findings, building a collective annotated version on the board.',
        differentiation: {
          support:
            'Provide a technique checklist with definitions and examples. Pre-highlight two techniques for students to identify as a starting point.',
          core: 'Students identify and label at least four techniques independently.',
          stretch:
            'Students identify patterns across techniques (e.g. a sustained semantic field or a shift in tone) and comment on the cumulative effect.',
        },
        resources: [
          'Annotatable passage handout',
          'Technique checklist (support tier)',
          'Colour highlighters',
        ],
      },
      {
        title: 'From Feature-Spotting to Analysis: Writing PEAL Paragraphs',
        duration: '22 minutes',
        instructions:
          "Teacher models a full PEAL (Point, Evidence, Analysis, Link) paragraph on the board using one technique from the passage, thinking aloud to show the process. Emphasise: Analysis means exploring connotations, explaining the effect on the reader, and considering the writer's purpose - not just naming the technique. Students then write two PEAL paragraphs of their own, choosing different techniques from their annotations. After 14 minutes of writing, two volunteers share their work under the visualiser. The class evaluates each paragraph against the AO2 mark scheme band descriptors, identifying what moves a response from Band 2 (identifies features) to Band 4 (analyses effects with precision).",
        differentiation: {
          support:
            'Provide a PEAL writing frame with sentence starters: "The writer creates a sense of...", "This is evident in the phrase...", "The word ___ connotes...", "This suggests to the reader that...".',
          core: 'Students write two PEAL paragraphs independently using the passage.',
          stretch:
            'Students write a third paragraph that analyses how two techniques work together to create a combined effect, using discourse markers to connect ideas.',
        },
        resources: [
          'PEAL writing frame (support tier)',
          'AO2 mark scheme band descriptors',
          'Vocabulary mat: analytical verbs (connotes, implies, evokes, reinforces)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Band It: Mark Scheme Bingo',
      duration: '6 minutes',
      instructions:
        'Display three anonymous student responses (pre-prepared or from the lesson). Students read each response and decide which mark scheme band it falls into (Band 1-4), writing their answer on a mini-whiteboard. Teacher reveals the correct band for each and highlights the key features that distinguish between bands - particularly the difference between identifying a technique and analysing its effect.',
      differentiation: {
        support: 'Provide a simplified band descriptor summary to reference.',
        core: 'Students justify their band decision with a specific reason.',
        stretch:
          'Students identify one change that would move the weakest response up by one band.',
      },
    },
    homework:
      'Write three PEAL paragraphs analysing language in a new unseen extract. Focus on word-level analysis and aim for Band 3 or above. Underline the Analysis section of each paragraph to self-check that you have moved beyond feature-spotting.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between identifying a language technique and analysing its effect? Explain with an example. [AO2]',
        lines: 5,
        modelAnswer:
          'Identifying means naming the technique, e.g. "The writer uses a metaphor." Analysing means explaining the effect on the reader, e.g. "The metaphor \'the city was a jungle\' suggests chaos and survival instincts, creating an atmosphere of danger. The connotations of \'jungle\' - wildness, predators, entanglement - imply the city is unpredictable and threatening." Analysis explores meaning; identification merely labels.',
        marks: 3,
      },
      {
        question:
          'Read the following sentence: "The wind screamed through the broken windows, clawing at the curtains." Identify two language techniques and analyse the effect of each. [AO2]',
        lines: 8,
        modelAnswer:
          'Personification: "The wind screamed" gives the wind a human voice, suggesting pain or fury. The verb "screamed" has connotations of distress and violence, which makes the setting feel hostile and alive, unsettling the reader. Personification: "clawing at the curtains" suggests the wind is an animal or predator, with "clawing" implying aggression and desperation. Together, these techniques create an atmosphere of threat, as if the house is under attack from nature itself.',
        marks: 6,
      },
      {
        question:
          'Write a PEAL paragraph analysing the effect of the following: "She moved through the crowd like smoke, unseen and untouchable." [AO2]',
        lines: 8,
        modelAnswer:
          'The writer presents the character as elusive and mysterious. This is evident in the simile "like smoke", which compares her movement to something intangible and ephemeral. The connotations of smoke - impermanence, obscurity, and the inability to grasp it - suggest she deliberately avoids attention. The parallel adjectives "unseen and untouchable" reinforce this impression, implying she exists on a different plane from the crowd, either by choice or by nature. This creates intrigue for the reader and positions her as a figure of quiet power.',
        marks: 5,
      },
      {
        question:
          'Explain what a "semantic field" is and why a writer might use one. Give an example. [AO2]',
        lines: 4,
        modelAnswer:
          'A semantic field is a group of words that relate to the same theme or concept. A writer might use a semantic field of war (e.g. "battle", "armour", "siege", "defeated") to describe a relationship, suggesting conflict and hostility. This creates a sustained impression and reinforces the writer\'s intended tone or message throughout the text.',
        marks: 3,
      },
      {
        question:
          'A student writes: "The writer uses alliteration in \'dark, desolate depths.\' This is effective because it sounds good." Rewrite this response to achieve a higher mark. [AO2]',
        lines: 6,
        modelAnswer:
          'The writer employs the alliterative phrase "dark, desolate depths" to create a heavy, oppressive rhythm that mirrors the bleakness of the setting. The repetition of the harsh plosive "d" sound creates a drumming effect, suggesting something inescapable and relentless. The adjective "desolate" connotes emptiness and abandonment, while "depths" implies something hidden and unknowable, contributing to an atmosphere of dread and hopelessness.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The most common weakness at IGCSE is feature-spotting without analysis. Repeatedly model the difference using "So what?" questioning: "You\'ve identified a metaphor - so what? What does it do to the reader?"',
      'Encourage students to analyse individual words within a technique, not just the technique as a whole. Word-level zoom is what distinguishes top-band responses.',
      'The PEAL frame should be seen as a scaffold that students eventually internalise, not a rigid template. Top responses integrate analysis fluidly.',
      'Band descriptors should become a familiar reference tool - consider laminating them for regular use.',
    ],
    targetedSkills: [
      'AO2 Language Analysis',
      'Subject Terminology',
      'PEAL Paragraphs',
      'Connotation Analysis',
      "Writer's Effect",
    ],
  },

  // ── Lesson 4: Transactional Writing - Articles and Speeches ──────────────
  {
    id: 'y10-igcse-04-transactional-writing',
    title: 'Transactional Writing: Articles and Speeches',
    text: 'IGCSE English Language',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the conventions of articles and speeches as transactional writing forms',
      'Adapt tone, register, and structure to suit purpose and audience',
      'Use persuasive and rhetorical techniques effectively within these forms',
      'Plan and write the opening and development of a transactional piece under timed conditions',
    ],
    successCriteria: [
      'I can identify the structural conventions of articles (headline, strapline, paragraphing) and speeches (direct address, rhetorical questions, repetition)',
      'I can select an appropriate tone and register for the given purpose and audience',
      'I can use at least three persuasive/rhetorical techniques with clear intent',
      'I can write a planned, structured opening and two developed paragraphs within 20 minutes',
    ],
    keywords: [
      'transactional writing',
      'article',
      'speech',
      'rhetoric',
      'register',
      'direct address',
      'persuasion',
      'audience',
    ],
    starterActivity: {
      title: 'Form Detective',
      duration: '7 minutes',
      instructions:
        'Display two short extracts side by side - one from a newspaper article and one from a speech transcript. Students identify which is which and list the features that helped them decide. Compile a class list on the board, separating article conventions from speech conventions. Teacher clarifies any misconceptions and introduces the idea that both forms persuade but use different tools.',
      differentiation: {
        support:
          'Provide a feature bank (e.g. "headline", "direct address", "rhetorical question") for students to match to each form.',
        core: 'Students identify at least three distinguishing features per form.',
        stretch:
          'Students explain why each convention is effective for its specific audience - why does direct address work better in a speech than an article?',
      },
      resources: ['Article and speech extract slides', 'Feature bank cards (support tier)'],
    },
    mainActivities: [
      {
        title: 'Rhetoric Toolkit: Techniques for Persuasion',
        duration: '18 minutes',
        instructions:
          'Introduce the AFOREST mnemonic (Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon/Rule of Three) plus additional techniques: anecdote, counter-argument, imperative verbs, and direct address. For each technique, show a real-world example from journalism or speeches. Students then receive a practice prompt: "Write a speech to your year group arguing that school uniforms should be abolished." In pairs, students brainstorm which techniques they would use and draft three sentences that each deploy a different technique. Pairs share their strongest sentence with the class.',
        differentiation: {
          support:
            'Provide a technique reference card with definitions and sentence starters for each. Limit to choosing three techniques from AFOREST.',
          core: 'Students independently select and deploy at least four techniques in their draft sentences.',
          stretch:
            'Students experiment with combining techniques in a single sentence (e.g. a rhetorical question containing emotive language and a tricolon) and evaluate the cumulative effect.',
        },
        resources: [
          'AFOREST reference sheet',
          'Real-world article and speech examples',
          'Practice prompt slide',
        ],
      },
      {
        title: 'Timed Writing: Article or Speech Opening',
        duration: '20 minutes',
        instructions:
          'Present an exam-style transactional writing prompt, e.g. "Write an article for a local newspaper in which you argue that more green spaces are needed in urban areas." Students have 3 minutes to plan (using a planning template: Purpose, Audience, Form, Key Arguments, Techniques) and 17 minutes to write an opening paragraph and two developed body paragraphs. Emphasise: the opening must hook the reader, establish the form, and make the purpose clear. After writing, teacher projects a model response and students compare their work, noting strengths and areas for development.',
        differentiation: {
          support:
            'Provide a structured planning template with prompts and a writing frame for the opening paragraph.',
          core: 'Students plan and write independently using the prompt.',
          stretch:
            'Students write in both forms (article and speech) using the same prompt and evaluate how the change of form affects their language choices.',
        },
        resources: [
          'Exam-style prompt slide',
          'Planning template handout',
          'Model response for comparison',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Technique Tally',
      duration: '5 minutes',
      instructions:
        'Students swap their written work with a partner. The partner reads and tallies every persuasive/rhetorical technique they can identify, labelling each one in the margin. Students receive their work back and set a target: which technique will they add or improve in their homework redraft?',
      differentiation: {
        support: 'Provide a technique checklist for partners to tick off as they find each one.',
        core: 'Partners identify and label techniques independently.',
        stretch:
          'Partners evaluate the effectiveness of each technique used - which was the most convincing and why?',
      },
    },
    homework:
      'Redraft your timed piece from this lesson into a complete article or speech (minimum 350 words). Include at least five different persuasive techniques and highlight each one with a margin annotation explaining its intended effect.',
    worksheetQuestions: [
      {
        question:
          'List three structural conventions of a newspaper article and three structural conventions of a speech. [AO2 Writing]',
        lines: 6,
        modelAnswer:
          'Article: (1) Headline - catchy, often uses wordplay; (2) Strapline or subheading to introduce the topic; (3) Short paragraphs with topic sentences for easy reading. Speech: (1) Direct address to the audience ("Ladies and gentlemen..."); (2) Rhetorical questions to engage listeners; (3) Repetition of key phrases for emphasis and memorability.',
        marks: 6,
      },
      {
        question:
          'Explain what "register" means and why it matters in transactional writing. Give an example of formal and informal register. [AO2 Writing]',
        lines: 4,
        modelAnswer:
          'Register is the level of formality in language. It matters because the wrong register alienates the audience or undermines the writer\'s credibility. Formal: "It is imperative that we address this issue immediately." Informal: "We really need to sort this out, and fast." A speech to parliament requires formal register; an article for a teen magazine may use informal register.',
        marks: 3,
      },
      {
        question:
          'Write the opening paragraph of an article arguing that teenagers spend too much time on social media. Include at least two persuasive techniques. [AO2 Writing]',
        lines: 8,
        modelAnswer:
          'Are our teenagers drowning in a digital ocean? According to recent research, the average young person spends over four hours a day scrolling through social media - that is 28 hours a week, time that could be spent reading, exercising, or connecting with the real world. Yet we continue to hand them devices with barely a second thought. It is time to wake up to the quiet crisis unfolding in our homes and schools. [Techniques: rhetorical question, statistic, emotive language, imperative]',
        marks: 5,
      },
      {
        question:
          'Explain why a counter-argument can make a persuasive piece more effective, not weaker. [AO2 Writing]',
        lines: 4,
        modelAnswer:
          'A counter-argument shows the writer has considered opposing views, which builds credibility and makes the argument appear balanced and reasoned. By acknowledging the opposition and then dismantling it, the writer appears more authoritative and persuasive. For example: "Some argue that social media builds community - yet research consistently shows it increases isolation."',
        marks: 3,
      },
      {
        question:
          'Rewrite the following weak opening to make it more engaging: "I am going to talk about why we should recycle more." [AO2 Writing]',
        lines: 5,
        modelAnswer:
          'Every single day, eight million tonnes of plastic pour into our oceans - choking marine life, poisoning ecosystems, and slowly suffocating the planet we call home. And yet, incredibly, only 9% of all plastic ever produced has been recycled. The question is not whether we should recycle more; the question is whether we can afford not to. [Uses: statistic, tricolon, emotive language, rhetorical question]',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Students often confuse form conventions - ensure they understand that an article should not begin with "Dear..." and a speech should not have a headline.',
      'Model the planning process explicitly. Many students lose marks not for writing quality but for structural incoherence caused by lack of planning.',
      'The timed writing element is crucial preparation for exam conditions - resist the temptation to extend the time.',
      'Collect the homework redrafts and use them as a formative assessment to identify students who need further support with register or structural conventions.',
    ],
    targetedSkills: [
      'AO2 Writing',
      'Transactional Writing',
      'Persuasive Techniques',
      'Rhetorical Devices',
      'Audience and Purpose',
    ],
  },

  // ── Lesson 5: Full Paper 1 Practice ──────────────────────────────────────
  {
    id: 'y10-igcse-05-paper1-practice',
    title: 'Full Paper 1 Practice: Reading and Writing Under Exam Conditions',
    text: 'IGCSE English Language',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply reading and writing skills under timed exam conditions',
      'Manage time effectively across both sections of Paper 1',
      'Self-assess responses using mark scheme criteria and band descriptors',
      'Identify personal strengths and areas for targeted improvement',
    ],
    successCriteria: [
      'I can complete a selection of reading and writing questions within the allocated time',
      'I can apply the strategies practised in Lessons 1-4 to unseen material',
      'I can self-assess my work accurately using the mark scheme and identify my current band',
      'I can set specific, actionable targets for improvement based on my self-assessment',
    ],
    keywords: [
      'exam practice',
      'timed conditions',
      'mark scheme',
      'band descriptor',
      'self-assessment',
      'improvement target',
      'exam technique',
      'annotation',
    ],
    starterActivity: {
      title: 'Strategy Recap: Quick-Fire Retrieval',
      duration: '5 minutes',
      instructions:
        'Teacher poses five rapid-fire questions reviewing the key strategies from Lessons 1-4: (1) How should you calculate time per question? (2) What does AO1 assess? (3) Name three persuasive techniques. (4) What is the difference between retrieval and inference? (5) What does the A in PEAL stand for? Students answer on mini-whiteboards. Teacher addresses any gaps before the timed practice begins.',
      differentiation: {
        support: 'Provide a strategy recap card summarising key points from Lessons 1-4.',
        core: 'Students answer from memory on mini-whiteboards.',
        stretch: 'Students add a sixth question of their own to test a partner.',
      },
      resources: [
        'Quick-fire questions slide',
        'Mini-whiteboards',
        'Strategy recap card (support tier)',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Exam Practice: Reading Section',
        duration: '22 minutes',
        instructions:
          'Distribute a past/specimen paper reading passage and a selection of questions covering retrieval (1-2 marks), inference (3-4 marks), and language analysis (5-6 marks). Students work in silence under strict timed conditions. Teacher displays a countdown timer. Students should annotate the passage before answering, as practised in previous lessons. No teacher input during the timed period - this simulates exam conditions. After 22 minutes, pens down.',
        differentiation: {
          support:
            'Provide a reduced question set (three questions instead of five) to allow adequate time. Include an annotation prompt sheet as a reminder.',
          core: 'Students complete the full question set within 22 minutes.',
          stretch:
            'Students attempt an additional extension question requiring comparison between two parts of the passage.',
        },
        resources: [
          'Past/specimen paper passage',
          'Reading questions handout',
          'Countdown timer',
          'Annotation prompt sheet (support tier)',
        ],
      },
      {
        title: 'Timed Exam Practice: Writing Section',
        duration: '18 minutes',
        instructions:
          'Present a transactional writing prompt from a past paper (e.g. article, speech, or letter). Students spend 3 minutes planning using the PAF method (Purpose, Audience, Form) and 15 minutes writing their response. Emphasise: quality of opening, structural features appropriate to form, and variety of persuasive techniques. Pens down at 18 minutes. Students immediately underline any persuasive techniques they used and note the form conventions they included in the margin.',
        differentiation: {
          support:
            'Provide a planning template and a form conventions checklist to reference during writing.',
          core: 'Students plan and write independently under timed conditions.',
          stretch:
            'Students write their final paragraph as a deliberate contrast in tone or pace to their opening, and annotate why they made this structural choice.',
        },
        resources: [
          'Writing prompt (past paper)',
          'Planning template (support tier)',
          'Form conventions checklist (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '10 minutes',
      instructions:
        'Distribute the mark scheme for both sections. Students self-assess their reading responses, awarding marks with justification. For the writing section, students use the band descriptors to identify which band their response falls into. Students then complete a target-setting pro forma: (1) My strongest area was... (2) I need to improve... (3) My specific target for next time is... Teacher collects these for review and uses them to inform future lesson planning.',
      differentiation: {
        support:
          'Provide a simplified mark scheme with student-friendly language and examples of each band.',
        core: 'Students self-assess using the full mark scheme and set specific targets.',
        stretch:
          'Students identify one reading answer and rewrite it to move up by one mark, annotating what they changed.',
      },
    },
    homework:
      'Complete any unanswered questions from the practice paper. Then, choose your weakest reading response and rewrite it in full, aiming to move up one band. Attach the mark scheme and annotate your rewrite to show where you have improved.',
    worksheetQuestions: [
      {
        question:
          'Reflect on your timed reading responses. Which question type did you find most challenging: retrieval, inference, or language analysis? Explain why and identify one strategy to improve.',
        lines: 5,
        modelAnswer:
          "Responses will vary. A strong reflection might say: \"I found language analysis most challenging because I tended to identify techniques without fully analysing their effect. My strategy to improve is to practise the 'So what?' technique - after naming a technique, I will ask myself 'So what does this do to the reader?' and write at least two sentences of analysis before moving on.\"",
        marks: 3,
      },
      {
        question:
          'Look at your writing response. List the form conventions you included and any you missed. What will you add next time? [AO2 Writing]',
        lines: 5,
        modelAnswer:
          'Responses will vary. A strong answer for an article might include: "I included a headline and short paragraphs but forgot a strapline. I used rhetorical questions and a statistic but did not include a counter-argument. Next time, I will plan my structure to include a counter-argument in my third paragraph and add a strapline after my headline."',
        marks: 3,
      },
      {
        question:
          'Using the mark scheme, identify which band your best reading answer falls into. Quote the band descriptor that matches your response and explain why.',
        lines: 5,
        modelAnswer:
          "Responses will vary. A strong self-assessment might say: \"My inference response falls into Band 3 because I 'make clear inferences supported by relevant textual reference' - I used a short quotation and explained what it suggests. To reach Band 4, I would need to 'analyse the effects of language with precision', which means exploring word-level connotations in more depth.\"",
        marks: 3,
      },
      {
        question:
          'Write three specific targets for your Paper 1 revision, based on today\'s practice. Each target should be measurable (e.g. "I will practise two timed inference questions per week").',
        lines: 6,
        modelAnswer:
          'Example targets: (1) I will practise one timed language analysis paragraph every other day, focusing on word-level analysis. (2) I will learn the form conventions for all five transactional writing forms and test myself weekly. (3) I will complete one full timed Paper 1 practice every fortnight and self-assess using the mark scheme.',
        marks: 3,
      },
      {
        question:
          'A student runs out of time on the writing section and only writes one paragraph. What three pieces of advice would you give them for next time?',
        lines: 5,
        modelAnswer:
          '(1) Plan before writing - spend 3 minutes creating a brief outline so you know where you are going. (2) Use the "1 mark = 1 minute" rule to allocate time proportionally, and set a mental checkpoint halfway through. (3) Practise writing under timed conditions regularly so that speed and fluency improve over time. A one-paragraph response will be capped at Band 1 regardless of quality.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This is the first full practice paper - manage expectations. Many students will find the timing challenging, and that is the point. Use it as a diagnostic.',
      'Silence during the timed sections is essential to simulate exam conditions. Consider rearranging seating.',
      'Collect the target-setting pro formas and use them to create personalised revision checklists for each student.',
      'If possible, use a past paper from the correct CIE syllabus (IGCSE Language A / Language B) to maximise relevance.',
      'Consider peer assessment in a follow-up lesson for a second perspective on the writing responses.',
    ],
    targetedSkills: [
      'Exam Technique',
      'Time Management',
      'Self-Assessment',
      'AO1 Reading',
      'AO2 Writing',
      'Target Setting',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE PAPER 1 - POETRY (5 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 6: Approaching the Poetry Anthology ───────────────────────────
  {
    id: 'y10-igcse-06-poetry-anthology-approach',
    title: 'Approaching the Poetry Anthology',
    text: 'IGCSE English Literature - Poetry',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the format and requirements of the IGCSE Literature poetry examination',
      'Develop strategies for approaching unseen and anthology poems systematically',
      'Annotate a poem using a structured method covering meaning, language, form, and structure',
      'Begin building a personal anthology of notes and annotations for revision',
    ],
    successCriteria: [
      'I can explain the format of the poetry section of the IGCSE Literature exam',
      'I can use a structured annotation method (SMILE or similar) to break down a poem',
      'I can identify the subject, tone, and message of a poem after first reading',
      'I can annotate a poem with comments on language, imagery, form, and structure',
    ],
    keywords: [
      'anthology',
      'annotation',
      'stanza',
      'speaker',
      'tone',
      'theme',
      'imagery',
      'verse form',
    ],
    starterActivity: {
      title: 'First Impressions: Blind Reading',
      duration: '8 minutes',
      instructions:
        'Teacher reads an anthology poem aloud without showing the text. Students listen and jot down their immediate impressions: What is the poem about? What mood does it create? What words or phrases stuck out? After the reading, students share their impressions in pairs. Then display the poem on the board and read it again - students note what they missed on first hearing. Discuss why poetry rewards multiple readings.',
      differentiation: {
        support:
          'Provide a listening frame with prompts: "The poem seems to be about...", "The mood feels...", "A word that stood out was...".',
        core: 'Students note impressions independently during the listening and compare after the second reading.',
        stretch:
          'Students predict what techniques the poet might have used based on the mood and subject before seeing the text.',
      },
      resources: ['Selected anthology poem', 'Listening frame (support tier)'],
    },
    mainActivities: [
      {
        title: 'SMILE Annotation Method',
        duration: '20 minutes',
        instructions:
          'Introduce the SMILE framework: Structure, Meaning, Imagery, Language, Effect. Provide a clean copy of the poem for annotation. Teacher models annotating the first stanza using SMILE, demonstrating how to colour-code each element. Students then work independently to annotate the remaining stanzas, aiming to make at least two annotations per stanza covering different SMILE elements. Teacher circulates and prompts with questions: "What is the poet\'s tone here?", "Why has the poet chosen this word over an alternative?", "How does the structure of this stanza reflect its meaning?"',
        differentiation: {
          support:
            'Provide a SMILE bookmark with definitions and example annotations. Pre-annotate one stanza as a model on the handout.',
          core: 'Students annotate the full poem independently using the SMILE framework.',
          stretch:
            'Students identify connections between poems - does this poem share themes, techniques, or tone with another anthology poem they know?',
        },
        resources: [
          'Clean poem handout for annotation',
          'SMILE framework poster/bookmark',
          'Colour pens/highlighters (five colours)',
        ],
      },
      {
        title: 'Building Your Poetry Toolkit: Theme and Message',
        duration: '18 minutes',
        instructions:
          'After individual annotation, students work in groups of four to complete a poem analysis grid with sections for: Subject (what is the poem about?), Speaker (who is speaking and to whom?), Themes (what bigger ideas does the poem explore?), Message (what does the poet want the reader to think or feel?), Key Quotations (three quotations with brief analysis). Groups present their findings in 2-minute summaries. Teacher synthesises and displays a model completed grid for students to compare their work against. Students add the completed grid to their anthology revision folder.',
        differentiation: {
          support:
            'Provide the analysis grid with the Subject and Speaker sections pre-completed. Students focus on Themes, Message, and Key Quotations.',
          core: 'Students complete the full analysis grid in their group.',
          stretch:
            'Students write a one-paragraph critical overview of the poem in their own words, suitable for use as a revision summary.',
        },
        resources: [
          'Poem analysis grid handout',
          'Model completed grid (for comparison)',
          'Anthology revision folders',
        ],
      },
    ],
    plenaryActivity: {
      title: "One Thing I'd Tell a Friend",
      duration: '4 minutes',
      instructions:
        'Students write a single sentence summarising the most important thing to remember about this poem, as if explaining it to a friend who missed the lesson. Teacher selects three students to share and uses their responses to highlight the key takeaway: approaching poetry requires a systematic method, multiple readings, and attention to both what the poem says and how it says it.',
      differentiation: {
        support: 'Provide the sentence starter: "The most important thing about this poem is...".',
        core: 'Students write their summary sentence independently.',
        stretch:
          'Students write a second sentence explaining the most useful annotation technique they used today and why.',
      },
    },
    homework:
      'Annotate a second anthology poem independently using the SMILE method. Complete a poem analysis grid and add it to your revision folder. Write three discussion questions about the poem to bring to next lesson.',
    worksheetQuestions: [
      {
        question:
          'What does SMILE stand for? Briefly explain each element as it applies to poetry analysis.',
        lines: 6,
        modelAnswer:
          'S = Structure: How the poem is organised - stanza length, line length, rhyme scheme, enjambment, caesura. M = Meaning: What the poem is about on a literal and deeper level. I = Imagery: The pictures the poet creates - metaphor, simile, personification, sensory detail. L = Language: Specific word choices and their connotations, including register and tone. E = Effect: The impact on the reader - what the poet wants us to think, feel, or understand.',
        marks: 5,
      },
      {
        question:
          'Why is it important to read a poem more than once? Explain with reference to the annotation process.',
        lines: 4,
        modelAnswer:
          'First reading gives a general understanding of subject and mood. Subsequent readings reveal layers of meaning - techniques that contribute to tone, structural choices that mirror content, and word-level connotations that add depth. Without re-reading, annotations tend to be surface-level and miss the complexity that examiners reward.',
        marks: 3,
      },
      {
        question:
          'Identify the speaker, subject, and tone of the poem you annotated in class today. Support your answer with brief quotations.',
        lines: 6,
        modelAnswer:
          'Responses will vary by poem. A strong answer identifies who is speaking (e.g. "a first-person narrator reflecting on a childhood memory"), the subject (e.g. "the loss of innocence"), and the tone (e.g. "nostalgic yet melancholic, shifting to resigned acceptance by the final stanza"), each supported by a short quotation.',
        marks: 4,
      },
      {
        question:
          'Choose one key quotation from the poem and write a PEAL paragraph analysing its effect.',
        lines: 8,
        modelAnswer:
          "Responses will vary. A strong answer selects a short quotation, identifies the technique used, analyses word-level connotations, explains the effect on the reader, and links to the poem's wider theme or message. It moves beyond feature-spotting to genuine analysis of meaning and intent.",
        marks: 5,
      },
      {
        question:
          'What is the difference between the "subject" of a poem and its "theme"? Give an example.',
        lines: 4,
        modelAnswer:
          'The subject is what the poem is literally about - the surface-level content (e.g. "a soldier returning from war"). The theme is the bigger idea or message the poem explores through that subject (e.g. "the psychological toll of conflict" or "the impossibility of returning to normality"). A poem about a bird might have the theme of freedom; the bird is the subject, freedom is the theme.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose an accessible anthology poem for this first lesson - save more complex poems for later. The goal is to establish the annotation method, not to challenge with difficulty.',
      'SMILE is one of several annotation frameworks. If your department uses a different one (e.g. FLIRTS, PETALS), adapt accordingly - the principle of systematic annotation is more important than the specific acronym.',
      'Anthology revision folders should be established in this lesson and maintained throughout the unit. Students will need them for exam preparation.',
      'The "blind reading" starter is powerful - it demonstrates that poetry is an aural art form and rewards careful listening as well as visual analysis.',
    ],
    targetedSkills: [
      'Poetry Annotation',
      'SMILE Framework',
      'Close Reading',
      'Theme Identification',
      'Exam Preparation',
    ],
  },

  // ── Lesson 7: Language Analysis in Poetry ────────────────────────────────
  {
    id: 'y10-igcse-07-poetry-language-analysis',
    title: 'Language Analysis in Poetry',
    text: 'IGCSE English Literature - Poetry',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse the effects of imagery, figurative language, and word choice in poetry',
      'Explore how poets use language to create mood, tone, and meaning',
      'Write analytical paragraphs that focus on the effect of language choices',
      'Develop precision in the use of literary terminology',
    ],
    successCriteria: [
      'I can identify examples of imagery, metaphor, simile, personification, and other figurative language in a poem',
      'I can analyse the connotations of individual words and explain their contribution to meaning',
      'I can write a paragraph that analyses the effect of a language choice on the reader',
      'I can use terms such as connotation, juxtaposition, oxymoron, and sibilance accurately',
    ],
    keywords: [
      'imagery',
      'figurative language',
      'connotation',
      'juxtaposition',
      'oxymoron',
      'sibilance',
      'assonance',
      'diction',
    ],
    starterActivity: {
      title: 'Word Swap Challenge',
      duration: '7 minutes',
      instructions:
        'Display a line from an anthology poem with a key word blanked out. Provide three alternative words that could fill the blank. Students discuss in pairs which word the poet actually used and why it is the most effective choice. Reveal the original word and discuss: what does this word achieve that the alternatives do not? Focus on connotation, sound, and rhythm.',
      differentiation: {
        support: 'Provide the definitions and connotations of each alternative word on the slide.',
        core: 'Students justify their choice by analysing connotations independently.',
        stretch:
          "Students suggest a fourth alternative and argue whether it would be more or less effective than the poet's original choice.",
      },
      resources: ['Word Swap slide with poem line and alternatives'],
    },
    mainActivities: [
      {
        title: 'Language Feature Hunt: Deep Annotation',
        duration: '18 minutes',
        instructions:
          'Provide a poem (or section of a longer poem) rich in figurative language. Students work individually to annotate every example of imagery and figurative language they can find, using precise terminology. After 10 minutes of independent annotation, students join a partner and compare findings, filling gaps in each other\'s work. Teacher then leads a class discussion, building an annotated version on the board. For each technique identified, push students beyond identification: "You\'ve found a metaphor - now tell me what it does. What does it make the reader see, feel, or understand?"',
        differentiation: {
          support:
            'Provide a terminology glossary and pre-highlight three examples of figurative language as starting points.',
          core: 'Students annotate independently and identify at least five examples with correct terminology.',
          stretch:
            "Students identify patterns in the poet's language choices - do they favour a particular type of imagery? Does the type of figurative language change across the poem, and if so, why?",
        },
        resources: [
          'Poem handout for annotation',
          'Terminology glossary (support tier)',
          'Colour pens',
        ],
      },
      {
        title: 'Crafting Analytical Paragraphs: The "Zoom In" Method',
        duration: '20 minutes',
        instructions:
          'Teacher models the "Zoom In" method for poetry analysis: (1) Context - place the quotation within the poem. (2) Quotation - embed a short quotation. (3) Technique - name the device. (4) Word-level zoom - analyse individual word connotations. (5) Effect - explain the impact on the reader. (6) Link to theme. Model a full paragraph on the board, annotating each step. Students then choose two quotations from their annotations and write two analytical paragraphs using the Zoom In method. After writing, one volunteer shares their paragraph and the class evaluates it against the AO mark scheme.',
        differentiation: {
          support:
            'Provide a Zoom In writing frame with sentence starters for each step and a worked example to reference.',
          core: 'Students write two paragraphs independently using the Zoom In method.',
          stretch:
            'Students write a paragraph that analyses how two language features interact within the same line or stanza, exploring combined effect.',
        },
        resources: [
          'Zoom In method poster/slide',
          'Writing frame (support tier)',
          'AO mark scheme extract for poetry',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Upgrade My Sentence',
      duration: '5 minutes',
      instructions:
        'Display a weak analytical sentence on the board, e.g. "The poet uses a simile which is effective." Students have 2 minutes to rewrite it as a full analytical sentence that includes word-level analysis and effect on the reader. Share and compare three upgraded versions, discussing what makes each one effective.',
      differentiation: {
        support:
          'Provide the simile being referenced so students have a concrete example to work with.',
        core: 'Students rewrite the sentence independently with word-level analysis.',
        stretch:
          "Students write a second sentence that links their analysis to the poem's wider theme.",
      },
    },
    homework:
      'Choose three quotations from a different anthology poem. For each, write a Zoom In analytical paragraph. Aim to analyse at least one word-level connotation per paragraph.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between "imagery" and "figurative language". Can a poem have one without the other?',
        lines: 4,
        modelAnswer:
          "Imagery refers to language that creates a picture or sensory experience in the reader's mind - it appeals to the senses (sight, sound, taste, touch, smell). Figurative language uses words in a non-literal way to create meaning (metaphor, simile, personification). A poem can have imagery without figurative language (e.g. a literal description of a sunset) and figurative language without vivid imagery, though they often overlap.",
        marks: 3,
      },
      {
        question:
          'Read the line: "The stars stitched themselves into the fabric of the night." Identify the technique and analyse its effect in detail.',
        lines: 6,
        modelAnswer:
          'The poet uses an extended metaphor, comparing the night sky to a piece of fabric and the stars to stitching. The verb "stitched" suggests careful, deliberate placement, implying order and craftsmanship in nature. The metaphor of "fabric" connotes warmth and domesticity, transforming the vastness of the sky into something intimate and comforting. This creates a sense of beauty and security, suggesting the speaker finds solace in the natural world.',
        marks: 5,
      },
      {
        question:
          'What is "juxtaposition" and why might a poet use it? Give an example from a poem you have studied.',
        lines: 5,
        modelAnswer:
          'Juxtaposition is the placement of two contrasting ideas, images, or words close together to highlight the difference between them. A poet might use it to create tension, surprise, or to emphasise a theme. For example, placing imagery of innocence alongside imagery of violence forces the reader to confront the contrast and consider the relationship between the two concepts.',
        marks: 3,
      },
      {
        question:
          'Write an analytical paragraph using the Zoom In method on the following line: "The river muttered darkly over the stones."',
        lines: 8,
        modelAnswer:
          'The poet personifies the river through the verb "muttered", which attributes human speech to the water. "Muttered" connotes dissatisfaction, secrecy, and complaint - as if the river is expressing suppressed grievance. The adverb "darkly" intensifies this sinister quality, suggesting not just sound but intent, as though the river harbours something threatening. Combined with the preposition "over", which implies weight and dominance, the river is presented as a brooding, ominous presence in the landscape, reflecting the poem\'s wider exploration of nature as an unpredictable and potentially hostile force.',
        marks: 5,
      },
      {
        question:
          'Why is it important to analyse individual words rather than whole phrases in poetry? Explain with reference to exam mark schemes.',
        lines: 4,
        modelAnswer:
          'Analysing individual words demonstrates close reading and precision, which is rewarded in higher mark bands. Mark schemes distinguish between "identifies features" (lower bands) and "analyses the effects of language with precision and originality" (higher bands). Word-level analysis explores connotations, sound qualities, and subtle shades of meaning that phrase-level analysis often misses.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The Zoom In method builds on the PEAL framework from Language lessons but adds the word-level focus that poetry analysis demands.',
      'Resist the temptation to let students simply list techniques. Every identification must be followed by "So what does it do?".',
      'Sound devices (sibilance, assonance, plosives) are often neglected at IGCSE. Model how to analyse the effect of sound on mood and pace.',
      'Collect the homework paragraphs and use them diagnostically - word-level analysis is the single biggest discriminator between mid-band and top-band poetry responses.',
    ],
    targetedSkills: [
      'Poetry Language Analysis',
      'Word-Level Analysis',
      'Figurative Language',
      'Zoom In Method',
      'Literary Terminology',
    ],
  },

  // ── Lesson 8: Form and Structure in Poetry ───────────────────────────────
  {
    id: 'y10-igcse-08-poetry-form-structure',
    title: 'Form and Structure in Poetry',
    text: 'IGCSE English Literature - Poetry',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand how poets use form and structure to shape meaning',
      'Identify and analyse structural features including enjambment, caesura, stanza form, and volta',
      "Explore the relationship between a poem's form and its content",
      'Write analytical responses that address structure, not just language',
    ],
    successCriteria: [
      'I can define and identify enjambment, caesura, volta, and end-stopping in a poem',
      "I can explain how a poem's structure (e.g. stanza length, line length, rhyme scheme) contributes to its meaning",
      "I can analyse why a poet has chosen a particular form and how it supports the poem's themes",
      'I can write a paragraph that analyses a structural feature and its effect, rather than simply identifying it',
    ],
    keywords: [
      'enjambment',
      'caesura',
      'volta',
      'stanza',
      'rhyme scheme',
      'free verse',
      'sonnet',
      'end-stopping',
    ],
    starterActivity: {
      title: 'Shape the Meaning',
      duration: '7 minutes',
      instructions:
        'Display the same short text arranged in three different ways: as a single block of prose, as a poem with regular stanzas, and as a poem with irregular line breaks and spacing. Ask students: "Which version is most powerful? Why?" Discuss how the arrangement of words on a page affects how we read and understand them. Introduce the idea that form and structure are deliberate choices that carry meaning.',
      differentiation: {
        support: 'Provide a prompt card: "Think about: pace, pauses, emphasis, surprise."',
        core: 'Students identify at least two differences in effect between the versions.',
        stretch:
          'Students create a fourth arrangement of the same text and explain the effect they are trying to create.',
      },
      resources: ['Three-version text comparison slide'],
    },
    mainActivities: [
      {
        title: 'Structural Toolkit: Key Features and Effects',
        duration: '18 minutes',
        instructions:
          'Teach the key structural features: enjambment (creates pace, urgency, or connection between ideas), caesura (creates pause, reflection, or disruption), volta (a turn or shift in argument or tone), end-stopping (creates finality or certainty), rhyme scheme (creates pattern, expectation, or dissonance when broken), stanza form (organises ideas, creates visual impact). For each feature, display an example from an anthology poem. Students create a structural toolkit page in their revision folders with the feature name, definition, example, and typical effect. Teacher models how to annotate structural features on a poem - using a different annotation symbol for each.',
        differentiation: {
          support:
            'Provide a pre-formatted toolkit page with definitions completed. Students add examples and effects.',
          core: 'Students complete the full toolkit page independently during the teaching.',
          stretch:
            'Students find an additional example of each feature from a different poem in the anthology and add these to their toolkit.',
        },
        resources: [
          'Structural features presentation slides',
          'Toolkit page template',
          'Anthology poems for examples',
        ],
      },
      {
        title: 'Analysing Structure in Context',
        duration: '20 minutes',
        instructions:
          "Provide an anthology poem with rich structural features. Students annotate the poem focusing exclusively on structure (not language) for 8 minutes. Then, teacher models writing an analytical paragraph about a structural feature, emphasising: name the feature, quote or reference the specific moment, explain how it shapes the reader's experience, link to the poem's meaning. Students write two paragraphs analysing different structural features from their annotations. After writing, students peer-assess using a checklist: (1) Does the paragraph name a structural feature? (2) Does it reference a specific moment in the poem? (3) Does it explain the effect? (4) Does it link to meaning?",
        differentiation: {
          support:
            'Provide sentence starters: "The poet uses enjambment in line __ to...", "The caesura in \'___\' creates the effect of...", "The shift in tone at the volta suggests...".',
          core: 'Students write two paragraphs analysing structure independently.',
          stretch:
            'Students write a paragraph comparing how two poems in the anthology use structure differently to explore a similar theme.',
        },
        resources: [
          'Poem handout for structural annotation',
          'Paragraph writing frame (support tier)',
          'Peer-assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure in One Sentence',
      duration: '5 minutes',
      instructions:
        'Each student writes a single sentence explaining how one structural feature contributes to the meaning of the poem studied. Teacher selects five examples and reads them aloud, asking the class to identify which structural feature each sentence refers to. This reinforces both the terminology and the principle that structure serves meaning.',
      differentiation: {
        support:
          'Provide the sentence frame: "The poet\'s use of ___ in line ___ creates the effect of ___, which reinforces the idea that...".',
        core: 'Students write their sentence independently.',
        stretch:
          "Students evaluate whether structure or language is more important to the poem's overall effect and justify their view.",
      },
    },
    homework:
      "Choose two poems from the anthology that use contrasting structures. For each, write a paragraph analysing one structural feature and its effect on meaning. In a final short paragraph, compare the two poems' structural choices.",
    worksheetQuestions: [
      {
        question:
          'Define the following terms and give an example of each: enjambment, caesura, volta.',
        lines: 6,
        modelAnswer:
          'Enjambment: when a sentence or phrase continues beyond the end of a line into the next line without punctuation. Example: "I wandered lonely as a cloud / That floats on high o\'er vales and hills." Effect: creates flow and momentum. Caesura: a pause within a line of poetry, usually created by punctuation. Example: "To be, or not to be - that is the question." Effect: creates a pause for reflection or emphasis. Volta: a turn or shift in a poem\'s argument, tone, or subject, often occurring in sonnets. Effect: introduces a new perspective or resolution.',
        marks: 6,
      },
      {
        question:
          'A student writes: "The poem has four stanzas." Explain why this is not analysis and rewrite it as an analytical statement.',
        lines: 4,
        modelAnswer:
          'The original statement is purely descriptive - it observes a feature without explaining its effect or purpose. An analytical version: "The poem\'s four equal stanzas create a sense of order and control, which contrasts with the chaotic emotions described within them. This tension between neat structure and turbulent content mirrors the speaker\'s attempt to contain their grief."',
        marks: 3,
      },
      {
        question:
          'Why might a poet choose to use free verse instead of a regular rhyme scheme? Link your answer to how form reflects meaning.',
        lines: 5,
        modelAnswer:
          'Free verse allows the poet to break away from the constraints of regular rhythm and rhyme, reflecting ideas of freedom, spontaneity, or disorder. If the poem explores themes of rebellion, loss of control, or stream of consciousness, free verse mirrors this content through its form. The absence of a predictable pattern can also create unease in the reader, as they cannot anticipate what comes next.',
        marks: 4,
      },
      {
        question:
          'Analyse the effect of enjambment in the following lines: "She could not / stop the memories from / flooding back." Consider how the line breaks shape meaning.',
        lines: 6,
        modelAnswer:
          'The enjambment across three lines mirrors the uncontrollable flow of memories. The break after "not" isolates the word of negation, emphasising the speaker\'s powerlessness - she cannot stop what is happening. The break after "from" creates a momentary pause before "flooding back", which delays the full impact and mimics the building pressure of memory before it overwhelms. The verb "flooding" suggests an unstoppable natural force, and the enjambment enacts this overflow formally.',
        marks: 5,
      },
      {
        question:
          'Explain what is meant by the statement "form mirrors content" in poetry. Use an example.',
        lines: 5,
        modelAnswer:
          '"Form mirrors content" means the physical shape, structure, or pattern of the poem reflects its subject matter or themes. For example, a poem about imprisonment might use short, regular stanzas with a strict rhyme scheme to evoke the feeling of confinement. A poem about chaos might use irregular line lengths and no rhyme scheme to mirror disorder. The form becomes a visual and rhythmic representation of the poem\'s meaning.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Structure is the most commonly neglected area in IGCSE poetry responses. Students default to language analysis - this lesson deliberately isolates structure to build competence.',
      'The starter activity is powerful because it demonstrates the impact of form without requiring any prior knowledge.',
      'When teaching enjambment and caesura, read the poem aloud both ways - with and without the line breaks - so students can hear the difference.',
      'Encourage students to ask "Why has the poet put the line break here?" rather than simply noting that enjambment exists.',
    ],
    targetedSkills: [
      'Structural Analysis',
      'Enjambment and Caesura',
      'Form and Meaning',
      'Poetry Terminology',
      'Comparative Thinking',
    ],
  },

  // ── Lesson 9: Comparative Poetry Essay ───────────────────────────────────
  {
    id: 'y10-igcse-09-comparative-poetry',
    title: 'Comparative Poetry Essay',
    text: 'IGCSE English Literature - Poetry',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the requirements of a comparative poetry essay in the IGCSE exam',
      'Develop a structured approach to comparing two poems by theme, language, and structure',
      'Use comparative discourse markers fluently to connect points across poems',
      'Plan and begin writing a comparative essay under timed conditions',
    ],
    successCriteria: [
      'I can identify meaningful points of comparison and contrast between two poems',
      'I can structure a comparative essay using an integrated (alternating) approach rather than writing about each poem separately',
      'I can use discourse markers such as "similarly", "in contrast", "whereas", and "conversely" to link comparisons',
      'I can write a comparative introduction and at least two comparative paragraphs in 25 minutes',
    ],
    keywords: [
      'comparison',
      'contrast',
      'integrated response',
      'discourse markers',
      'thematic link',
      'similarly',
      'whereas',
      'in contrast',
    ],
    starterActivity: {
      title: 'Spot the Connection',
      duration: '7 minutes',
      instructions:
        'Display the titles and opening lines of two anthology poems on the board. Students brainstorm as many connections and differences as they can in 3 minutes (theme, tone, speaker, imagery, form). Pairs share their best connection and best contrast. Teacher explains that comparative questions require both similarities and differences, and that the best responses integrate comparison throughout rather than writing about Poem A then Poem B.',
      differentiation: {
        support:
          'Provide a comparison prompt sheet: "Both poems explore the theme of...", "Poem A uses ___ whereas Poem B uses...", "The tone differs because...".',
        core: 'Students generate at least three connections and three differences.',
        stretch:
          'Students rank their comparisons by significance and explain which comparison would form the strongest essay argument.',
      },
      resources: ['Poem titles and opening lines slide', 'Comparison prompt sheet (support tier)'],
    },
    mainActivities: [
      {
        title: 'Comparative Essay Structure: The Integrated Approach',
        duration: '15 minutes',
        instructions:
          'Teacher explains two approaches: the block method (Poem A, then Poem B) and the integrated method (alternating between poems point by point). Demonstrate why the integrated method scores higher - it shows sustained comparison and analytical control. Display a comparative essay plan template with: Introduction (name both poems, state overarching comparison), Paragraph 1 (first point of comparison - both poems), Paragraph 2 (second point - contrast), Paragraph 3 (language/structural comparison), Conclusion (evaluative judgement). Students then plan their own essay comparing the two poems from the starter, using the template. Teacher models a comparative introduction on the board, highlighting how to mention both poems, establish the comparison, and signal the argument.',
        differentiation: {
          support:
            'Provide a completed model plan to reference alongside the blank template. Include a bank of comparative discourse markers.',
          core: 'Students complete the plan independently using the template.',
          stretch:
            "Students add a fourth paragraph to their plan that compares contextual influences on each poet's perspective.",
        },
        resources: [
          'Essay plan template',
          'Comparative discourse markers bank',
          'Model plan (support tier)',
        ],
      },
      {
        title: 'Timed Comparative Writing',
        duration: '25 minutes',
        instructions:
          'Using their completed plans, students write a comparative introduction and at least two full comparative paragraphs in 25 minutes. Emphasise: each paragraph should reference both poems and include quotation and analysis from each. Discourse markers should signal the shift between poems within a paragraph. Teacher displays a countdown timer and circulates silently, noting common strengths and areas for development. After 25 minutes, students count their comparative discourse markers and underline them - aim for at least four.',
        differentiation: {
          support:
            'Provide a paragraph scaffold with sentence starters for each section of a comparative paragraph. Aim for a minimum of one full comparative paragraph plus an introduction.',
          core: 'Students write an introduction and two comparative paragraphs independently.',
          stretch:
            'Students write three paragraphs and a conclusion, aiming for an evaluative final judgement about which poem is more effective.',
        },
        resources: [
          'Countdown timer',
          'Paragraph scaffold (support tier)',
          'Discourse markers reference card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Peer Review: Comparison Check',
      duration: '8 minutes',
      instructions:
        'Students swap essays with a partner. The partner reads and checks: (1) Are both poems mentioned in the introduction? (2) Does each paragraph reference both poems? (3) Are comparative discourse markers used? (4) Is there quotation and analysis from both poems? Partners write one strength and one target on a feedback slip. Students read their feedback and write a brief reflection on what they will improve when redrafting.',
      differentiation: {
        support: 'Provide the four-point checklist as a printed slip to guide the peer review.',
        core: 'Partners provide detailed written feedback against the checklist.',
        stretch:
          'Partners suggest one additional comparison the writer could have made and explain why it would strengthen the essay.',
      },
    },
    homework:
      'Redraft your comparative essay in full (minimum 500 words). Ensure every paragraph references both poems with integrated comparison. Highlight all comparative discourse markers in yellow.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between the "block method" and the "integrated method" for comparative essays. Which is more effective and why?',
        lines: 5,
        modelAnswer:
          'The block method writes about Poem A in full, then Poem B in full. The integrated method compares both poems within each paragraph, alternating between them point by point. The integrated method is more effective because it demonstrates sustained comparative thinking, avoids repetition, and shows the examiner that you can hold both poems in mind simultaneously - this is rewarded in higher mark bands.',
        marks: 4,
      },
      {
        question:
          'Write a comparative introduction for two poems you have studied that explore the same theme. Name both poems, state the theme, and signal your argument.',
        lines: 6,
        modelAnswer:
          'Responses will vary. A strong introduction names both poems and poets, identifies a shared theme, and signals the argument: e.g. "Both [Poem A] and [Poem B] explore the theme of loss, yet they approach it from contrasting perspectives. While [Poet A] presents loss as a gradual, inevitable process through their use of natural imagery, [Poet B] conveys loss as sudden and violent, reflected in their fragmented structure and aggressive diction."',
        marks: 4,
      },
      {
        question:
          'List five comparative discourse markers and use each one in a sentence comparing two poems.',
        lines: 8,
        modelAnswer:
          '(1) "Similarly, both poets use natural imagery to convey the passage of time." (2) "In contrast, Poem A employs a regular rhyme scheme while Poem B uses free verse." (3) "Whereas Poet A addresses the reader directly, Poet B uses a detached third-person speaker." (4) "Conversely, the tone of Poem B shifts from anger to resignation, while Poem A maintains its elegiac tone throughout." (5) "However, both poems ultimately arrive at acceptance despite their differing journeys."',
        marks: 5,
      },
      {
        question:
          'A student writes about Poem A for three paragraphs, then writes about Poem B for three paragraphs. What is the problem with this approach? How would you restructure it?',
        lines: 5,
        modelAnswer:
          'This is the block method, which separates the poems rather than comparing them. The examiner has to make connections themselves, and the student misses the opportunity to demonstrate comparative skill. To restructure: organise by theme or technique, not by poem. Each paragraph should reference both poems with comparative discourse markers, e.g. "Both poets explore isolation, yet Poet A focuses on physical solitude while Poet B presents emotional alienation."',
        marks: 3,
      },
      {
        question:
          'Write one comparative paragraph comparing how two poems use structure differently to explore a shared theme.',
        lines: 8,
        modelAnswer:
          'Responses will vary. A strong comparative paragraph integrates both poems, compares a structural feature, includes brief quotation or reference, and explains how the structural choices reflect meaning differently. It uses at least one comparative discourse marker and avoids simply describing each poem separately.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The integrated method is a significant step up for Year 10 students - many will default to the block method. Persistent modelling is essential.',
      'Provide a laminated discourse markers card that students can keep in their pencil cases for regular use.',
      'Common weakness: students compare themes but not techniques. Push them to compare how each poet achieves their effect, not just what they write about.',
      'The peer review is important for developing critical awareness. Train students to give constructive feedback that identifies specific strengths, not just "good work".',
    ],
    targetedSkills: [
      'Comparative Analysis',
      'Essay Structure',
      'Discourse Markers',
      'Integrated Comparison',
      'Poetry Exam Technique',
    ],
  },

  // ── Lesson 10: Poetry Exam Practice ──────────────────────────────────────
  {
    id: 'y10-igcse-10-poetry-exam-practice',
    title: 'Poetry Exam Practice',
    text: 'IGCSE English Literature - Poetry',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply poetry analysis and comparison skills under timed exam conditions',
      'Demonstrate the ability to write about language, form, and structure in an integrated response',
      'Self-assess using IGCSE Literature mark scheme band descriptors',
      'Identify areas of strength and specific targets for improvement in poetry responses',
    ],
    successCriteria: [
      'I can write a comparative poetry essay (or a single poem analysis) within the allocated time',
      'I can include analysis of language, form, and structure, not just content',
      'I can self-assess my response against the band descriptors and identify my current band',
      'I can set a specific target to move my response up by one band',
    ],
    keywords: [
      'exam practice',
      'band descriptor',
      'self-assessment',
      'timed response',
      'comparative essay',
      'language',
      'form',
      'structure',
    ],
    starterActivity: {
      title: 'Exam Strategy Recap',
      duration: '5 minutes',
      instructions:
        'Rapid review: students answer four questions on mini-whiteboards: (1) What is the integrated method? (2) Name two structural features to analyse. (3) What does "word-level analysis" mean? (4) How many poems should you reference in each paragraph of a comparative essay? Teacher clarifies any uncertainties and displays a checklist of success criteria for the timed essay: analyse language, analyse structure, compare throughout, use quotations, use discourse markers.',
      differentiation: {
        support:
          'Provide the success criteria checklist as a printed card to keep beside them during writing.',
        core: 'Students answer from memory and note the checklist.',
        stretch:
          'Students add two additional success criteria of their own based on previous feedback.',
      },
      resources: ['Recap questions slide', 'Success criteria checklist card (support tier)'],
    },
    mainActivities: [
      {
        title: 'Timed Poetry Essay',
        duration: '35 minutes',
        instructions:
          'Present an exam-style poetry question requiring comparison of two anthology poems (or analysis of a single poem, depending on syllabus). Students have 5 minutes to plan and 30 minutes to write. Strict exam conditions: silence, no resources (except clean copies of anthology poems if permitted by the syllabus), no teacher support. Teacher displays a countdown timer with 10-minute and 5-minute warnings. Students should aim for an introduction, three analytical paragraphs, and a conclusion.',
        differentiation: {
          support:
            'Provide a planning template to structure their 5 minutes of planning. Allow access to their annotation notes from previous lessons.',
          core: 'Students plan and write independently under full exam conditions.',
          stretch:
            'Students aim for four analytical paragraphs and an evaluative conclusion that makes a judgement about which poem is more effective.',
        },
        resources: [
          'Exam-style poetry question',
          'Clean anthology poem copies',
          'Countdown timer',
          'Planning template (support tier)',
        ],
      },
      {
        title: 'Self-Assessment Against Band Descriptors',
        duration: '12 minutes',
        instructions:
          'Distribute the IGCSE Literature mark scheme band descriptors (simplified, student-friendly version). Students re-read their own response and highlight evidence of: (a) language analysis, (b) structural analysis, (c) comparison (if applicable), (d) use of quotations, (e) personal response. They then decide which band their essay falls into and write a justification on their self-assessment sheet. Finally, students identify one specific action to move up by one band (e.g. "I need to add word-level analysis" or "I need to integrate comparison into each paragraph instead of separating poems").',
        differentiation: {
          support:
            'Provide the band descriptors with examples of what each band looks like in practice. Guide students to check off features before deciding on a band.',
          core: 'Students self-assess against the full band descriptors and write a justified band decision.',
          stretch:
            'Students identify a specific paragraph in their essay and rewrite it to achieve the next band up, annotating the changes.',
        },
        resources: [
          'Band descriptors (student-friendly version)',
          'Self-assessment sheet',
          'Green pens for annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Band Up',
      duration: '3 minutes',
      instructions:
        'Students write their current self-assessed band on a sticky note and their single most important target on the back. Teacher collects them to create a class overview and identify common areas for development. Quick verbal summary of patterns: "Many of you are strong on language analysis but need to develop structural analysis" or similar.',
      differentiation: {
        support: 'Provide the sentence starter: "To move up a band, I need to...".',
        core: 'Students write a specific, actionable target.',
        stretch:
          'Students set two targets - one for content/analysis and one for essay structure/technique.',
      },
    },
    homework:
      'Redraft your timed essay in full, addressing the target identified in your self-assessment. Highlight all changes in a different colour and annotate in the margin to explain what you improved and why. Submit both the original and the redraft.',
    worksheetQuestions: [
      {
        question:
          'Reflect on your timed essay. Which of the following did you include? Tick all that apply and explain one area you need to improve: language analysis, structural analysis, comparison, quotation, personal response, discourse markers.',
        lines: 5,
        modelAnswer:
          'Responses will vary. A strong reflection will honestly identify what was included and what was missing, with a specific plan for improvement. For example: "I included language analysis and quotation but my structural analysis was limited to one sentence about enjambment. I need to write a full paragraph analysing form/structure and link it to the poem\'s meaning."',
        marks: 3,
      },
      {
        question:
          'What is the difference between a Band 2 and a Band 4 poetry response? Use the mark scheme to explain.',
        lines: 5,
        modelAnswer:
          "A Band 2 response shows some awareness of the poem's meaning and identifies some features of language or structure, but analysis is limited or superficial. A Band 4 response demonstrates a perceptive, detailed understanding with sustained analysis of language, form, and structure. It offers a personal, evaluative response supported by well-selected, embedded quotations and explores the effects of the poet's choices with precision.",
        marks: 4,
      },
      {
        question:
          'Write a brief exam-style plan for the following question: "Compare how the poets present conflict in Poem X and Poem Y." Include your introduction focus and three paragraph topics.',
        lines: 6,
        modelAnswer:
          "Introduction: Both poems explore conflict but present it differently - Poem X focuses on internal, psychological conflict while Poem Y depicts external, physical conflict. Paragraph 1: Compare how imagery conveys the nature of conflict in each poem. Paragraph 2: Contrast the structural choices - Poem X uses irregular free verse to mirror inner turmoil; Poem Y uses regular stanzas to reflect military order. Paragraph 3: Compare the speakers' attitudes to conflict and how tone shifts across each poem.",
        marks: 4,
      },
      {
        question:
          'Identify one paragraph from your essay that you feel is your strongest. Explain what makes it effective with reference to the mark scheme.',
        lines: 5,
        modelAnswer:
          'Responses will vary. A strong answer will quote or reference a specific paragraph, identify its analytical qualities (e.g. word-level analysis, structural observation, comparison), and link these to mark scheme criteria (e.g. "This paragraph analyses the effect of language with precision, which is a Band 4 descriptor").',
        marks: 3,
      },
      {
        question:
          'Write three specific revision targets for the poetry section of your IGCSE Literature exam.',
        lines: 5,
        modelAnswer:
          'Example targets: (1) Memorise three key quotations from each anthology poem and practise analysing them at word level. (2) Practise writing comparative paragraphs using the integrated method - aim for one timed paragraph per day for two weeks. (3) Create a revision card for each poem covering: theme, speaker, tone, key techniques, structural features, and connections to other poems.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This is a formative practice - use the self-assessment data to plan targeted intervention before the actual exam.',
      'If students have not yet studied enough anthology poems for a comparative question, adapt to a single-poem analysis question.',
      'Consider running a "gallery walk" in a follow-up lesson where students display their best paragraphs and read each other\'s work for inspiration.',
      'The self-assessment process is a skill in itself - students often over- or under-estimate their band. Compare their self-assessment to your teacher assessment and discuss discrepancies.',
      'Collect both original and redrafted essays to track progress and identify students who need additional support.',
    ],
    targetedSkills: [
      'Poetry Exam Technique',
      'Timed Writing',
      'Self-Assessment',
      'Band Descriptor Awareness',
      'Redrafting',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE PAPER 1 - OF MICE AND MEN (5 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 11: Context and Key Themes ────────────────────────────────────
  {
    id: 'y10-igcse-11-omam-context-themes',
    title: 'Of Mice and Men: Context and Key Themes',
    text: 'IGCSE English Literature - Prose',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      "Understand the historical and social context of 1930s America and its influence on Steinbeck's novella",
      'Identify the key themes of the text: the American Dream, loneliness, friendship, prejudice, and power',
      'Connect contextual knowledge to specific moments in the text',
      'Begin developing the ability to use context analytically rather than as a biographical bolt-on',
    ],
    successCriteria: [
      'I can explain at least three aspects of 1930s American context relevant to the novella (e.g. the Great Depression, migrant workers, racial segregation)',
      'I can identify and define the key themes of the text',
      'I can link a contextual factor to a specific character, event, or quotation in the text',
      'I can explain how Steinbeck uses his characters to comment on social issues, rather than simply retelling the plot',
    ],
    keywords: [
      'context',
      'the American Dream',
      'Great Depression',
      'migrant worker',
      'loneliness',
      'prejudice',
      'segregation',
      'itinerant',
    ],
    starterActivity: {
      title: 'Image Inference: 1930s America',
      duration: '8 minutes',
      instructions:
        'Display a series of four photographs from 1930s America: a Dust Bowl landscape, a migrant worker camp, a "Whites Only" sign, and a Depression-era breadline. Students work in pairs to infer as much as they can about life in this period from the images. Share findings as a class. Teacher draws connections between the images and the world of the novella, establishing why context matters: Steinbeck wrote about what he saw.',
      differentiation: {
        support:
          'Provide captions beneath each photograph with brief contextual information and a guiding question.',
        core: 'Students infer and discuss without captions, drawing on prior knowledge and visual analysis.',
        stretch:
          'Students predict how each contextual factor might be reflected in the novella through specific characters or events.',
      },
      resources: ['Four contextual photographs (projected)', 'Caption cards (support tier)'],
    },
    mainActivities: [
      {
        title: 'Contextual Knowledge Builder',
        duration: '18 minutes',
        instructions:
          "Teacher delivers a focused contextual overview covering: the Great Depression (economic collapse, unemployment, poverty), migrant ranch workers (itinerant lifestyle, loneliness, lack of roots), the American Dream (aspiration, failure, illusion), racial segregation (Jim Crow laws, the experience of Black Americans), and women in 1930s society (limited agency, defined by relationships to men). Students take structured notes using a five-column grid: Context Factor, Key Facts, Characters/Moments in Text, Quotation Link, Steinbeck's Purpose. For each context factor, students must link to the text - this prevents context being treated as a separate essay paragraph.",
        differentiation: {
          support:
            'Provide the grid with Context Factor and Key Facts pre-completed. Students focus on linking to characters, quotations, and purpose.',
          core: 'Students complete the full five-column grid during the teacher input.',
          stretch:
            'Students add a sixth column: "How a critic might interpret this", introducing the idea of multiple perspectives on context.',
        },
        resources: [
          'Contextual overview slides',
          'Five-column context grid handout',
          'Text copies for quotation reference',
        ],
      },
      {
        title: 'Theme Mapping: From Context to Text',
        duration: '20 minutes',
        instructions:
          'Students work in groups of four, each group assigned a key theme: (1) The American Dream, (2) Loneliness and isolation, (3) Power and powerlessness, (4) Prejudice and marginalisation, (5) Friendship and loyalty. Each group creates a theme map on A3 paper with: the theme at the centre, relevant characters and quotations branching out, contextual links, and a one-sentence summary of Steinbeck\'s message about this theme. Groups present their theme maps in 2-minute summaries. Teacher photographs each map for the class resource bank. Students then write a paragraph linking their theme to a specific moment in the text, using the sentence structure: "Steinbeck uses [character/event] to [comment on/criticise/explore] [theme] by [method]. This reflects the context of [contextual factor] because [explanation]."',
        differentiation: {
          support:
            'Provide a pre-started theme map with two characters and one quotation already placed. Provide the paragraph sentence structure as a frame.',
          core: 'Students contribute fully to the group theme map and write their paragraph independently.',
          stretch:
            'Students write a second paragraph considering an alternative interpretation of the theme - could Steinbeck be suggesting something more complex than a single message?',
        },
        resources: [
          'A3 paper and colour pens for theme maps',
          'Text copies',
          'Paragraph structure frame (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Context in a Sentence',
      duration: '4 minutes',
      instructions:
        'Students write one sentence that links a contextual factor to the text analytically. Share three examples under the visualiser. Teacher evaluates: does the sentence use context to enhance analysis of the text, or does it feel bolted on? Emphasise: context should be woven into analysis, not treated as a separate paragraph.',
      differentiation: {
        support:
          'Provide the starter: "Steinbeck reflects the reality of ___ through his portrayal of ___, suggesting that...".',
        core: 'Students write their sentence independently.',
        stretch:
          'Students explain why context used analytically is more effective than context used as a separate paragraph.',
      },
    },
    homework:
      'Create a revision resource for context: a double-sided A4 sheet with key contextual facts on one side and links to specific characters, quotations, and themes on the other. This should be a resource you can use for essay planning.',
    worksheetQuestions: [
      {
        question:
          'Explain three ways in which the Great Depression affected the lives of migrant ranch workers in 1930s America.',
        lines: 5,
        modelAnswer:
          "(1) Mass unemployment meant workers had to travel constantly to find temporary ranch work, living an itinerant lifestyle with no stability. (2) Poverty was widespread - workers were paid little and had no job security, making the American Dream feel increasingly unattainable. (3) Social isolation was common - workers moved alone, rarely forming lasting friendships, which Steinbeck reflects in the loneliness experienced by characters like Crooks, Candy, and Curley's wife.",
        marks: 3,
      },
      {
        question:
          'How does Steinbeck use the character of Crooks to comment on racial prejudice in 1930s America? Refer to context in your answer.',
        lines: 6,
        modelAnswer:
          'Steinbeck uses Crooks to expose the cruelty and injustice of racial segregation. Crooks is physically separated from the other workers - he sleeps alone in the harness room, reflecting the Jim Crow laws that enforced racial segregation across the American South. His bitter comment that he "ain\'t wanted in the bunkhouse" reveals both the reality of exclusion and its psychological toll. Steinbeck suggests that prejudice strips individuals of dignity and companionship.',
        marks: 5,
      },
      {
        question:
          'What is the "American Dream"? Why does Steinbeck present it as both powerful and dangerous in the novella?',
        lines: 5,
        modelAnswer:
          "The American Dream is the belief that anyone can achieve success, prosperity, and happiness through hard work. Steinbeck presents it as powerful because it gives characters like George, Lennie, and Candy hope and purpose - their dream of owning a farm sustains them. However, he also presents it as dangerous because it is ultimately an illusion; the economic reality of the Depression makes the dream unattainable, and pursuing it makes the characters' eventual failure more devastating.",
        marks: 4,
      },
      {
        question:
          'Explain what is meant by using context "analytically" rather than as a "bolt-on". Give an example of each approach.',
        lines: 5,
        modelAnswer:
          'A "bolt-on" approach treats context as a separate fact: "In the 1930s there was a Depression. This is reflected in the novel." An analytical approach weaves context into textual analysis: "Steinbeck\'s depiction of George and Lennie\'s shared dream reflects the desperation of Depression-era workers who clung to aspiration as a psychological defence against poverty." The analytical approach uses context to deepen interpretation, not just to demonstrate knowledge.',
        marks: 3,
      },
      {
        question:
          'Choose one theme from the novella and explain how Steinbeck uses two different characters to explore it.',
        lines: 8,
        modelAnswer:
          "Responses will vary. A strong answer selects a theme (e.g. loneliness), discusses two characters (e.g. Crooks and Curley's wife), provides quotations for each, analyses Steinbeck's methods, and considers his purpose - what is he saying about this aspect of society? The answer should integrate context and avoid plot retelling.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'Context is essential but often poorly used in IGCSE essays. This lesson establishes the principle of analytical integration from the outset.',
      'The image starter works well because it makes context visual and tangible rather than abstract.',
      'Photograph the theme maps and share them as a class revision resource - they represent the collective knowledge of the class.',
      'Monitor for plot retelling in the writing task. Students often default to retelling what happens rather than analysing why Steinbeck makes it happen.',
    ],
    targetedSkills: [
      'Contextual Understanding',
      'Theme Identification',
      'Analytical Context Use',
      'Text-Context Links',
      'Quotation Selection',
    ],
  },

  // ── Lesson 12: Character Analysis Techniques ─────────────────────────────
  {
    id: 'y10-igcse-12-omam-character-analysis',
    title: 'Of Mice and Men: Character Analysis Techniques',
    text: 'IGCSE English Literature - Prose',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Analyse how Steinbeck presents key characters through description, dialogue, actions, and the reactions of others',
      'Develop the ability to write about characters as constructs rather than real people',
      "Select and analyse key quotations that reveal character traits and Steinbeck's intentions",
      "Structure a character analysis paragraph that addresses the writer's methods",
    ],
    successCriteria: [
      "I can identify how Steinbeck uses description, speech, actions, and others' reactions to present a character",
      'I can use the phrase "Steinbeck presents..." to show I understand characters are the writer\'s creation',
      'I can select a key quotation and analyse it at word level to reveal character traits',
      'I can write a character analysis paragraph that focuses on methods rather than retelling plot',
    ],
    keywords: [
      'characterisation',
      'construct',
      'presentation',
      'description',
      'dialogue',
      'motif',
      'foreshadowing',
      'authorial intent',
    ],
    starterActivity: {
      title: 'Character or Real Person?',
      duration: '6 minutes',
      instructions:
        'Display two statements: (1) "George is mean to Lennie because he is frustrated." (2) "Steinbeck presents George as harsh towards Lennie to reveal the burden of responsibility he carries." Ask students: which statement would score higher in an exam and why? Establish the crucial principle: in literature essays, characters are constructs - they are created by the writer to convey meaning. We must discuss what the writer does, not what the character "is".',
      differentiation: {
        support: 'Provide the terms "construct" and "authorial intent" with definitions on a card.',
        core: 'Students explain the difference between the two statements independently.',
        stretch:
          'Students rewrite a third "real person" statement about Lennie as a "construct" statement about Steinbeck\'s methods.',
      },
      resources: ['Comparison statements slide'],
    },
    mainActivities: [
      {
        title: 'Four Methods of Characterisation',
        duration: '20 minutes',
        instructions:
          "Introduce four methods Steinbeck uses to present characters: (1) Physical description - what they look like and how they move. (2) Dialogue - what they say and how they say it. (3) Actions - what they do and how they behave. (4) Others' reactions - how other characters respond to them. For each method, teacher displays a key quotation about a central character (e.g. Lennie) and models analysis. Students then work in pairs, each pair assigned a different character (George, Lennie, Curley, Curley's wife, Slim, Crooks, Candy). Each pair finds one quotation for each method of characterisation from the text and writes a brief analysis. Pairs feed back to the class, building a comprehensive character evidence bank.",
        differentiation: {
          support:
            'Provide page references for where to find relevant quotations. Supply a four-column grid with the methods pre-labelled.',
          core: 'Students find quotations and write analysis independently using the text.',
          stretch:
            'Students identify which method of characterisation is most revealing for their character and explain why Steinbeck relies on it.',
        },
        resources: [
          'Text copies',
          'Four-column characterisation grid handout',
          'Character evidence bank template',
        ],
      },
      {
        title: 'Writing Character Analysis: The "What, How, Why" Method',
        duration: '20 minutes',
        instructions:
          'Teacher models the "What, How, Why" method for character analysis paragraphs: WHAT does Steinbeck present? (the character trait or impression). HOW does he present it? (the specific method - quotation and technique). WHY does he present it this way? (authorial intent, thematic significance, contextual relevance). Model a full paragraph on the board for one character. Students then write two character analysis paragraphs of their own on different characters, using the What-How-Why structure. After writing, teacher displays two exemplar paragraphs (one mid-band, one top-band) and students identify the differences, focusing on depth of analysis and use of context.',
        differentiation: {
          support:
            'Provide a What-How-Why writing frame with sentence starters and a model paragraph to reference.',
          core: 'Students write two paragraphs independently using the What-How-Why method.',
          stretch:
            "Students write a third paragraph that tracks how a character changes across the novella, analysing what this development reveals about Steinbeck's message.",
        },
        resources: [
          'What-How-Why method slide/poster',
          'Writing frame (support tier)',
          'Exemplar paragraphs (mid-band and top-band)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Real Person vs. Construct',
      duration: '4 minutes',
      instructions:
        'Display five statements about characters. Students categorise each as "real person" language or "construct" language using a thumbs up/down vote. Teacher corrects and reinforces: in your essays, every statement about a character should acknowledge the writer behind the construction.',
      differentiation: {
        support: 'Provide a reference card with "real person" phrases vs. "construct" phrases.',
        core: 'Students categorise independently and justify one decision.',
        stretch: 'Students rewrite each "real person" statement as a "construct" statement.',
      },
    },
    homework:
      'Choose one character from the novella. Write three What-How-Why paragraphs analysing how Steinbeck presents them at three different points in the text. Include at least one quotation per paragraph and link to a theme.',
    worksheetQuestions: [
      {
        question:
          'Explain why we should refer to characters as "constructs" in literature essays. How does this affect the way we write about them?',
        lines: 4,
        modelAnswer:
          'Characters are constructs because they are created by the writer to serve a purpose - to explore themes, convey messages, or represent social groups. Writing about them as real people (e.g. "Lennie is sad") misses the writer\'s craft. Instead, we should write: "Steinbeck presents Lennie as vulnerable to highlight the exploitation of those with intellectual disabilities." This shows understanding of authorial intent.',
        marks: 3,
      },
      {
        question:
          'Identify the four methods of characterisation discussed in this lesson. For one character, find a quotation that illustrates each method.',
        lines: 8,
        modelAnswer:
          'The four methods are: physical description, dialogue, actions, and others\' reactions. Example for Curley\'s wife: Description - "She had full, rouged lips and wide-spaced eyes." Dialogue - "I get lonely... You can talk to people, but I can\'t talk to nobody but Curley." Actions - she lingers in the bunkhouse doorway, seeking attention. Others\' reactions - George warns Lennie: "Don\'t you even take a look at that b****." Each method reveals different aspects of her character and role in the novella.',
        marks: 5,
      },
      {
        question:
          'Write a What-How-Why paragraph about how Steinbeck presents Slim in the novella.',
        lines: 8,
        modelAnswer:
          'Steinbeck presents Slim as a figure of quiet authority and moral integrity. This is conveyed through the description of his face as "ageless" and the assertion that he "moves with a majesty only achieved by royalty and master craftsmen." The reverential register, including the claim that "his authority was so great that his word was taken on any subject", elevates Slim above the other ranch workers, suggesting he possesses wisdom and judgement that transcend the harsh environment. Steinbeck creates Slim as a moral compass within the novella - he is the only character who fully understands George\'s decision at the end, reflecting Steinbeck\'s belief that true leadership comes from empathy rather than aggression.',
        marks: 5,
      },
      {
        question:
          'A student writes: "Curley is a bully and he picks on Lennie because he is jealous." Rewrite this in a way that treats the character as a construct and focuses on Steinbeck\'s methods.',
        lines: 5,
        modelAnswer:
          'Steinbeck presents Curley as an aggressive, insecure figure who targets those he perceives as weaker. His hostility towards Lennie functions as a vehicle through which Steinbeck critiques toxic masculinity and the abuse of power - Curley\'s status as the boss\'s son gives him authority he has not earned, reflecting the arbitrary power structures of Depression-era ranches. The verb "glanced coldly" conveys calculated aggression rather than impulsive anger.',
        marks: 4,
      },
      {
        question:
          'Why is it important to track how a character changes across the text, not just describe them at one point?',
        lines: 4,
        modelAnswer:
          "Tracking change shows understanding of the writer's craft - characters are shaped by events to develop themes. For example, Candy's shift from passive acceptance to desperate hope (when he joins the dream) to devastation (when the dream dies) mirrors the broader arc of the American Dream itself. Analysing change reveals Steinbeck's structural choices and deeper thematic intentions.",
        marks: 3,
      },
    ],
    teacherNotes: [
      'The "construct" principle is the single most important conceptual shift students need to make at IGCSE. Reinforce it in every subsequent lesson.',
      'The character evidence bank created in the first activity is a valuable revision resource - ensure students file it.',
      'Watch for students who analyse quotations at technique level but forget to link back to authorial intent. The "Why" in What-How-Why is the most important step.',
      'Consider displaying a "banned phrases" poster with examples like "This shows that the character is..." replaced by "Steinbeck suggests that...".',
    ],
    targetedSkills: [
      'Character Analysis',
      'Characterisation Methods',
      'Authorial Intent',
      'What-How-Why Method',
      'Construct Awareness',
    ],
  },

  // ── Lesson 13: Writer's Methods - Language and Structure ─────────────────
  {
    id: 'y10-igcse-13-omam-writers-methods',
    title: "Of Mice and Men: Writer's Methods - Language and Structure",
    text: 'IGCSE English Literature - Prose',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      "Analyse Steinbeck's use of language techniques including imagery, symbolism, and dialect",
      'Explore structural methods including foreshadowing, cyclical structure, and narrative perspective',
      'Understand how language and structure work together to create meaning',
      "Write analytical paragraphs that address both language and structure as writer's methods",
    ],
    successCriteria: [
      'I can identify and analyse examples of imagery, symbolism, and dialect in the novella',
      'I can explain how Steinbeck uses structural techniques such as foreshadowing and cyclical structure',
      "I can write a paragraph that analyses a language or structural method and links it to Steinbeck's purpose",
      "I can discuss Steinbeck's methods using subject terminology accurately",
    ],
    keywords: [
      'symbolism',
      'foreshadowing',
      'cyclical structure',
      'dialect',
      'imagery',
      'motif',
      'third-person narration',
      'dramatic irony',
    ],
    starterActivity: {
      title: 'Method or Plot?',
      duration: '6 minutes',
      instructions:
        'Display six statements about Of Mice and Men. Students sort them into two categories: "Plot" (what happens) and "Method" (how the writer creates meaning). Examples: "Lennie kills the puppy" (plot) vs. "Steinbeck foreshadows the tragedy through the repeated motif of Lennie accidentally killing soft things" (method). Discuss: examiners reward method analysis, not plot retelling.',
      differentiation: {
        support: 'Provide definitions of "plot" and "method" with examples before sorting.',
        core: 'Students sort independently and justify one categorisation.',
        stretch: 'Students convert each "plot" statement into a "method" statement.',
      },
      resources: ['Six statements sorting slide/cards'],
    },
    mainActivities: [
      {
        title: 'Language Methods Deep Dive',
        duration: '22 minutes',
        instructions:
          "Teacher introduces three key language methods in the novella: (1) Imagery - Steinbeck's descriptions of the natural setting (the Salinas River, the clearing in the woods) and how they create mood. (2) Symbolism - key symbols such as Lennie's puppy, Candy's dog, Curley's wife's red dress, and George's solitaire game. (3) Dialect - Steinbeck's use of colloquial speech and how it creates authenticity and reveals social status. For each method, teacher provides key quotations and models analysis. Students then work independently to find two additional examples of each method from the text and write a paragraph analysing one example in detail, focusing on Steinbeck's purpose.",
        differentiation: {
          support:
            'Provide a quotation bank organised by method and page reference. Students select from the bank rather than searching independently.',
          core: 'Students find examples independently and write one analytical paragraph.',
          stretch:
            'Students analyse how two language methods interact in a single passage (e.g. how imagery and symbolism combine in the opening description of the clearing) and evaluate the combined effect.',
        },
        resources: [
          'Language methods presentation slides',
          'Quotation bank (support tier)',
          'Text copies',
        ],
      },
      {
        title: 'Structural Methods: The Big Picture',
        duration: '18 minutes',
        instructions:
          'Teacher introduces four structural methods: (1) Cyclical structure - the novella begins and ends at the same pool by the Salinas River, creating a sense of inevitability. (2) Foreshadowing - repeated moments (Candy\'s dog, the dead mouse, the puppy) build towards the final tragedy. (3) Third-person omniscient narration - Steinbeck controls what the reader sees and when, creating dramatic irony. (4) Chapter structure - each chapter is set in a single location, functioning like a stage play. Students create a structural methods revision card for each technique: name, definition, example from the text, quotation, and effect. Teacher then poses the question: "Why does Steinbeck begin and end the novella in the same place?" Students write a paragraph answering this question, linking structure to theme.',
        differentiation: {
          support:
            'Provide the revision cards with definitions and examples pre-completed. Students add quotations and effects.',
          core: 'Students complete the revision cards independently and write the structural analysis paragraph.',
          stretch:
            "Students compare the opening and closing scenes in detail, analysing what has changed and what has not, and consider what this reveals about Steinbeck's cyclical view of history.",
        },
        resources: [
          'Structural methods presentation slides',
          'Revision card templates',
          'Text copies (opening and closing chapters)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Method in 30 Seconds',
      duration: '4 minutes',
      instructions:
        'Each student writes one method Steinbeck uses and its effect on a sticky note. Teacher collects and reads five aloud, asking the class to identify whether each is a language method or a structural method. Quick discussion: are structural methods harder to analyse than language methods? Why might students avoid them in exams?',
      differentiation: {
        support: 'Provide the starter: "Steinbeck uses [method] to [effect], for example...".',
        core: 'Students write independently.',
        stretch:
          'Students explain why structural analysis is often absent from student essays and suggest how to integrate it more naturally.',
      },
    },
    homework:
      'Write two paragraphs: one analysing a language method and one analysing a structural method used by Steinbeck. Each paragraph must include a quotation and link to a theme or Steinbeck\'s purpose. Label each paragraph as "language" or "structure".',
    worksheetQuestions: [
      {
        question:
          'Explain what "foreshadowing" means. Identify two examples of foreshadowing in Of Mice and Men and explain how they prepare the reader for the ending.',
        lines: 6,
        modelAnswer:
          "Foreshadowing is when the writer gives hints or clues about what will happen later in the text. (1) The shooting of Candy's dog foreshadows the shooting of Lennie - both are acts of \"mercy\" that parallel each other structurally. (2) Lennie's repeated killing of soft things (mice, puppy) foreshadows his accidental killing of Curley's wife. Both examples build a pattern of tragic inevitability, suggesting Lennie's fate is sealed from the beginning.",
        marks: 5,
      },
      {
        question:
          "Why is the cyclical structure of the novella significant? How does it contribute to Steinbeck's message?",
        lines: 5,
        modelAnswer:
          'The novella begins and ends at the same pool by the Salinas River. This cyclical structure suggests that nothing has fundamentally changed - despite the hopes and dreams of the characters, they are trapped in a cycle of poverty, loneliness, and violence. Steinbeck implies that the American Dream is a loop, not a ladder - migrant workers are doomed to repeat the same patterns, making the dream an illusion.',
        marks: 4,
      },
      {
        question:
          "Analyse the symbolism of Candy's dog in the novella. What does the dog represent and how does it connect to wider themes?",
        lines: 6,
        modelAnswer:
          "Candy's dog symbolises those who are old, weak, and no longer productive. Carlson's insistence on shooting the dog because it is \"no good to himself\" reflects the ruthless utilitarianism of the ranch - and of Depression-era America. The dog's fate parallels Candy's own fear of being discarded and foreshadows Lennie's death. Steinbeck uses the dog to critique a society that values individuals only for their economic output.",
        marks: 5,
      },
      {
        question:
          "Why does Steinbeck write the characters' dialogue in dialect? What effect does this have on the reader?",
        lines: 4,
        modelAnswer:
          "Steinbeck uses dialect to create authenticity and realism - the reader feels immersed in the world of 1930s ranch workers. Dialect also reveals social status and education levels; for example, Lennie's simple, repetitive speech reflects his intellectual disability, while Slim's more measured speech conveys his authority. The dialect makes the characters feel real and specific to their historical moment.",
        marks: 3,
      },
      {
        question:
          'Write a paragraph analysing how Steinbeck uses the natural setting in the opening of the novella. Focus on his methods, not the plot.',
        lines: 8,
        modelAnswer:
          'Steinbeck opens the novella with a detailed description of the natural landscape by the Salinas River, using sensory imagery to create a peaceful, almost Edenic setting. The "golden foothill slopes" and "fresh and green" willows create a sense of beauty and tranquillity. However, this idyllic description functions structurally as a contrast to the harsh human world that follows - the ranch, with its cruelty and loneliness, is set against nature\'s beauty. By framing the novella with this setting, Steinbeck suggests that nature offers an alternative to human brutality, making the return to the pool at the end both a homecoming and a tragedy.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Students frequently neglect structure in their essays. This lesson deliberately separates language and structure to build competence in both before expecting integration.',
      'The "Method or Plot?" starter is simple but powerful - use it regularly as a warm-up to keep the distinction alive.',
      'Symbolism is often handled superficially. Push students beyond "the puppy represents innocence" to explore how the symbol functions within the narrative and connects to context.',
      'The revision cards created in this lesson are valuable - ensure students bring them to every subsequent lesson for reference.',
    ],
    targetedSkills: [
      "Writer's Methods",
      'Language Analysis',
      'Structural Analysis',
      'Symbolism',
      'Foreshadowing',
    ],
  },

  // ── Lesson 14: Extract to Whole Text Response ────────────────────────────
  {
    id: 'y10-igcse-14-omam-extract-whole-text',
    title: 'Of Mice and Men: Extract to Whole Text Response',
    text: 'IGCSE English Literature - Prose',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the structure of an extract-based essay question in IGCSE Literature',
      'Develop the skill of moving from close analysis of an extract to discussion of the whole text',
      'Balance extract analysis with wider textual references in a timed response',
      'Use the extract as a springboard for discussing themes, characters, and methods across the novella',
    ],
    successCriteria: [
      'I can analyse an extract in detail, focusing on language, structure, and character presentation',
      'I can move from the extract to the wider text, making relevant connections to other moments in the novella',
      'I can balance close reading of the extract with broader discussion of the whole text',
      'I can structure an extract-based essay with an introduction, extract-focused paragraphs, and whole-text paragraphs',
    ],
    keywords: [
      'extract',
      'whole text',
      'close reading',
      'wider reference',
      'essay structure',
      'topic sentence',
      'textual evidence',
      'thematic connection',
    ],
    starterActivity: {
      title: "Extract vs. Whole Text: What's the Balance?",
      duration: '6 minutes',
      instructions:
        'Display an extract-based question from a past paper. Ask students: "If this question is worth 25 marks, how would you divide your time and paragraphs between the extract and the wider text?" Students discuss in pairs and share. Teacher establishes the recommended balance: approximately 60% extract analysis, 40% wider text references. Explain that the extract is your anchor - analyse it in detail first, then branch out.',
      differentiation: {
        support:
          'Provide a visual pie chart showing the 60/40 balance and a simple essay structure diagram.',
        core: "Students discuss and justify their own balance before the teacher's recommendation.",
        stretch:
          'Students explain why the examiner provides an extract - what skills does it test that a general essay question does not?',
      },
      resources: ['Extract-based question slide', 'Balance visual (support tier)'],
    },
    mainActivities: [
      {
        title: 'Close Reading of the Extract',
        duration: '22 minutes',
        instructions:
          'Distribute a key extract from the novella (approximately 30-40 lines). Students annotate the extract in silence for 10 minutes, focusing on: language techniques, characterisation methods, structural features, connections to themes, and links to context. Teacher then models analysing the first section of the extract on the board, writing a paragraph that demonstrates close reading with embedded quotation and word-level analysis. Students write one close-reading paragraph on a different section of the extract. After writing, teacher displays a model response and students compare their paragraph against it, noting strengths and gaps.',
        differentiation: {
          support:
            'Provide annotation prompts in the margins of the extract (e.g. "Look at the verb here - what does it suggest?"). Supply a paragraph writing frame.',
          core: 'Students annotate and write their paragraph independently.',
          stretch:
            'Students write two paragraphs - one on language and one on structure - and explain how they work together in the extract.',
        },
        resources: [
          'Extract handout with annotation space',
          'Annotation prompt sheet (support tier)',
          'Model paragraph for comparison',
        ],
      },
      {
        title: 'Bridging to the Whole Text',
        duration: '18 minutes',
        instructions:
          'Teacher models the "bridge" technique: at the end of an extract paragraph, use a connecting sentence that transitions to the wider text. Example: "This moment in the extract connects to the broader theme of ___ which Steinbeck develops throughout the novella through ___." Students practise writing a "bridge" sentence for their existing paragraph, then write a full whole-text paragraph that expands on the theme or character introduced in their extract analysis. This whole-text paragraph should reference a different moment in the novella and include a quotation from memory. Teacher circulates, checking that whole-text paragraphs do not simply retell plot but maintain analytical focus.',
        differentiation: {
          support:
            'Provide three "bridge" sentence starters and a bank of whole-text quotations to choose from.',
          core: 'Students write the bridge sentence and whole-text paragraph independently.',
          stretch:
            'Students write a whole-text paragraph that compares how the theme or character is presented differently at another point in the novella, analysing the significance of the change.',
        },
        resources: [
          'Bridge sentence models',
          'Quotation bank (support tier)',
          'Text copies for reference',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Essay Plan Challenge',
      duration: '4 minutes',
      instructions:
        'Students write a five-point essay plan for the extract question, labelling each point as "extract" or "whole text". Teacher selects one plan and evaluates it on the board: does it achieve the 60/40 balance? Does it cover language, structure, and theme? Does it include context? Quick class vote on whether the plan would produce a top-band essay.',
      differentiation: {
        support: 'Provide a plan template with "extract" and "whole text" labels pre-printed.',
        core: 'Students write the plan independently.',
        stretch:
          'Students explain what their introduction would argue and write the first sentence of their conclusion.',
      },
    },
    homework:
      'Write a full extract-based essay on the question studied in class (minimum 600 words). Use the 60/40 balance between extract and whole text. Annotate your own essay in the margin, labelling each paragraph as "extract" or "whole text" and identifying your use of language analysis, structural analysis, and context.',
    worksheetQuestions: [
      {
        question:
          'Explain the recommended balance between extract analysis and whole-text discussion in an IGCSE extract-based essay. Why is this balance important?',
        lines: 4,
        modelAnswer:
          'The recommended balance is approximately 60% extract analysis and 40% whole-text discussion. This is important because the examiner provides the extract to test close-reading skills - detailed analysis of specific language and structure. However, whole-text references show wider knowledge and the ability to connect ideas across the novella. An essay that only analyses the extract will miss marks for broader understanding; one that ignores the extract will miss marks for close reading.',
        marks: 3,
      },
      {
        question:
          'Write a "bridge" sentence that transitions from analysis of Lennie\'s behaviour in an extract to a whole-text discussion of his characterisation.',
        lines: 3,
        modelAnswer:
          "\"Lennie's childlike confusion in this extract is characteristic of Steinbeck's sustained presentation of him as simultaneously powerful and vulnerable - a duality that Steinbeck develops from the opening description of Lennie drinking from the pool 'like a horse' through to the tragic conclusion at the same location.\"",
        marks: 2,
      },
      {
        question:
          'Read the following extract paragraph and identify what is missing. Then suggest how to improve it.\n\n"In this extract, Steinbeck writes about Curley\'s wife. She comes into the bunkhouse and talks to the men. The men don\'t want to talk to her."',
        lines: 6,
        modelAnswer:
          'The paragraph is missing: (1) quotation from the extract, (2) analysis of language or method, (3) focus on Steinbeck\'s purpose/intent, (4) connection to a theme. It reads as plot retelling. An improved version would select a specific quotation, analyse the language (e.g. how Steinbeck describes her appearance or the men\'s reactions), and link to the theme of loneliness or marginalisation, using the phrase "Steinbeck presents..." to maintain analytical focus.',
        marks: 4,
      },
      {
        question:
          'Why is it important to reference moments from across the novella in a whole-text paragraph, rather than just the events immediately before and after the extract?',
        lines: 4,
        modelAnswer:
          'Referencing moments from different parts of the novella demonstrates comprehensive knowledge and the ability to trace a theme or character arc across the whole text. It shows the examiner that you understand how Steinbeck structures the novella and how ideas develop. Limiting references to moments near the extract suggests a narrow understanding and may result in plot retelling rather than thematic analysis.',
        marks: 3,
      },
      {
        question:
          'Write an opening paragraph for an extract-based essay on the following question: "How does Steinbeck present the theme of dreams in this extract and in the novella as a whole?"',
        lines: 6,
        modelAnswer:
          'Responses will vary. A strong introduction names the text and author, addresses the theme of dreams, signals the argument (e.g. that dreams function as both sustenance and delusion), and previews the structure of the essay. Example: "Throughout Of Mice and Men, Steinbeck presents dreams as a double-edged force - sustaining characters through hardship while ultimately intensifying their suffering when reality intrudes. In this extract, the dream is at its most vivid and tangible, yet Steinbeck embeds subtle signals of its inevitable collapse."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The extract-to-whole-text essay is a specific skill that needs explicit teaching. Students often write entirely about the extract or abandon it too quickly.',
      'The "bridge" technique is a practical tool for transitions. Practise it repeatedly until it becomes habitual.',
      'Ensure students have memorised sufficient quotations from across the novella to support whole-text paragraphs. Regular quotation tests are helpful.',
      'Monitor for the tendency to retell plot in whole-text paragraphs. The shift from extract to whole text should not be a shift from analysis to narration.',
    ],
    targetedSkills: [
      'Extract Analysis',
      'Whole-Text Reference',
      'Essay Structure',
      'Bridge Technique',
      'Close Reading',
    ],
  },

  // ── Lesson 15: OMAM Exam Practice ────────────────────────────────────────
  {
    id: 'y10-igcse-15-omam-exam-practice',
    title: 'Of Mice and Men: Exam Practice',
    text: 'IGCSE English Literature - Prose',
    board: 'CIE IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Complete an extract-based essay question on Of Mice and Men under timed exam conditions',
      'Demonstrate the skills developed across Lessons 11-14: context, character, methods, and extract-to-whole-text structure',
      'Self-assess using IGCSE Literature mark scheme band descriptors',
      'Identify personal strengths and set actionable targets for the exam',
    ],
    successCriteria: [
      'I can write a structured extract-based essay within the allocated time',
      'I can analyse language, structure, and context in my response',
      'I can balance extract analysis with whole-text references using the 60/40 approach',
      'I can self-assess my work against band descriptors and identify specific improvements',
    ],
    keywords: [
      'exam practice',
      'extract-based essay',
      'band descriptor',
      'self-assessment',
      'timed response',
      'revision target',
      'close reading',
      'whole text',
    ],
    starterActivity: {
      title: 'Pre-Exam Checklist',
      duration: '5 minutes',
      instructions:
        'Display a pre-exam checklist on the board: (1) Annotate the extract before writing. (2) Use the What-How-Why method for character analysis. (3) Balance extract (60%) and whole text (40%). (4) Include language analysis, structural analysis, and context. (5) Treat characters as constructs. (6) Use "bridge" sentences to transition. Students tick off each item to confirm they understand, and write one personal reminder based on their previous feedback (e.g. "Remember to analyse words, not just techniques").',
      differentiation: {
        support: 'Provide the checklist as a printed card to keep beside them during writing.',
        core: 'Students review the checklist and add their personal reminder.',
        stretch:
          'Students write a one-sentence thesis for the essay question before the timer starts.',
      },
      resources: ['Pre-exam checklist slide/card'],
    },
    mainActivities: [
      {
        title: 'Timed Extract-Based Essay',
        duration: '40 minutes',
        instructions:
          'Distribute an extract from the novella and an exam-style question (e.g. "How does Steinbeck present loneliness in this extract and in the novella as a whole?"). Students have 5 minutes to annotate the extract and plan their essay, and 35 minutes to write. Strict exam conditions: silence, no notes or revision resources (except the extract and a clean copy of the text if permitted by the syllabus). Teacher displays a countdown timer with warnings at 20 minutes, 10 minutes, and 5 minutes remaining. Students should aim for: introduction, two extract paragraphs, two whole-text paragraphs, and a brief conclusion.',
        differentiation: {
          support:
            'Allow access to a quotation revision sheet for whole-text references. Provide a planning template. Aim for a minimum of introduction and three paragraphs.',
          core: 'Students plan and write independently under full exam conditions.',
          stretch:
            "Students aim for five analytical paragraphs plus a conclusion that makes an evaluative judgement about Steinbeck's most effective method of presenting the theme.",
        },
        resources: [
          'Extract handout',
          'Exam-style question',
          'Clean text copies (if permitted)',
          'Countdown timer',
          'Planning template (support tier)',
          'Quotation revision sheet (support tier)',
        ],
      },
      {
        title: 'Self-Assessment and Reflection',
        duration: '10 minutes',
        instructions:
          'Distribute the IGCSE Literature mark scheme band descriptors (student-friendly version). Students re-read their essay and highlight evidence of: (a) close reading of the extract, (b) language analysis, (c) structural analysis, (d) whole-text references, (e) contextual integration, (f) character-as-construct awareness. They assign themselves a band and write a justification. Then complete a reflection pro forma: (1) My strongest aspect was... (2) I need to develop... (3) My specific revision target is... (4) By the exam, I will have...',
        differentiation: {
          support:
            'Provide the band descriptors with examples and a simplified reflection template with sentence starters.',
          core: 'Students self-assess against the full band descriptors and complete the reflection independently.',
          stretch:
            'Students select their weakest paragraph, rewrite it on the back of their essay to achieve the next band up, and annotate the changes.',
        },
        resources: [
          'Band descriptors (student-friendly version)',
          'Reflection pro forma',
          'Green pens for annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket: One Strength, One Target',
      duration: '5 minutes',
      instructions:
        "Students write on a sticky note: one strength they demonstrated in today's essay and one specific target for their revision. Teacher collects all sticky notes and reads three anonymised examples, celebrating strengths and normalising the fact that everyone has areas to develop. Teacher uses the collected data to plan revision sessions and targeted intervention.",
      differentiation: {
        support:
          'Provide sentence frames: "I did well at... because..." and "I need to improve... by...".',
        core: 'Students write independently.',
        stretch:
          'Students write a specific study plan for the next two weeks, allocating time to their identified target area.',
      },
    },
    homework:
      'Redraft your exam essay in full, addressing the targets identified in self-assessment. Use a different colour pen for all additions and changes. Submit both the original and the redraft with a brief annotation explaining what you improved and why.',
    worksheetQuestions: [
      {
        question:
          'Reflect on your timed essay. How effectively did you balance extract analysis with whole-text discussion? What would you change next time?',
        lines: 5,
        modelAnswer:
          'Responses will vary. A strong reflection honestly assesses the balance: e.g. "I spent too long on the extract and only had time for one whole-text paragraph. Next time, I will plan my timing more carefully - 15 minutes for extract paragraphs and 10 minutes for whole-text paragraphs - to ensure I demonstrate wider textual knowledge."',
        marks: 3,
      },
      {
        question:
          'Identify which band your essay falls into using the mark scheme. Quote the band descriptor that best matches your response and explain why.',
        lines: 5,
        modelAnswer:
          'Responses will vary. A strong answer quotes a specific descriptor (e.g. "shows developed response to text with ideas supported by a range of references") and explains which aspects of their essay match this description, while acknowledging what is missing for the next band.',
        marks: 3,
      },
      {
        question:
          'Write down five key quotations from Of Mice and Men that you should have memorised for the exam. For each, note which character or theme it relates to.',
        lines: 8,
        modelAnswer:
          'Responses will vary but should cover a range of characters and themes. Example selections might include: (1) "Guys like us... are the loneliest guys in the world" - George/loneliness/American Dream. (2) "I could get you strung up on a tree so easy" - Curley\'s wife/power/racism. (3) "A guy needs somebody - to be near him" - Crooks/loneliness/isolation. (4) "I ought to of shot that dog myself" - Candy/regret/foreshadowing. (5) "I seen hundreds of men come by on the road... every damn one of \'em\'s got a little piece of land in his head" - Crooks/American Dream/disillusionment.',
        marks: 5,
      },
      {
        question:
          "A student's essay includes these paragraphs: (1) Introduction, (2) Extract paragraph on language, (3) Extract paragraph on character, (4) Plot summary of the ending. What advice would you give about paragraph 4?",
        lines: 5,
        modelAnswer:
          "Paragraph 4 is plot summary, not analysis. The student should replace it with an analytical whole-text paragraph that discusses the theme or character from the extract question at a different point in the novella. It should include a quotation, analyse Steinbeck's methods, and link to context or authorial intent. Plot summary scores zero marks - examiners assume you know the plot.",
        marks: 3,
      },
      {
        question:
          'Create a revision plan for the Of Mice and Men section of the exam. Include at least four specific activities with timelines.',
        lines: 6,
        modelAnswer:
          'Example plan: (1) Week 1-2: Re-read the novella and update annotations, focusing on methods rather than plot. (2) Week 3: Create a revision card for each character and theme with key quotations and analysis. (3) Week 4: Practise three timed extract-based essays on different themes, self-assessing each against band descriptors. (4) Week 5: Memorise 15 key quotations and practise writing analytical paragraphs from memory. (5) Ongoing: Use past paper questions for weekly practice, rotating between themes.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is the culmination of the OMAM unit - use the self-assessment data to plan targeted revision sessions before the exam.',
      "Compare students' self-assessed bands with your own teacher assessment. Where there are discrepancies, hold individual conferences.",
      'Collect both original and redrafted essays to track progress over time. The redraft is where real learning happens.',
      'Consider organising a "revision week" before the exam with focused sessions on the most common weaknesses identified across the class.',
      'The quotation memorisation question is deliberately practical - students who know their quotations perform significantly better in timed conditions.',
    ],
    targetedSkills: [
      'Exam Technique',
      'Timed Essay Writing',
      'Self-Assessment',
      'Extract to Whole Text',
      'Revision Planning',
    ],
  },
]
