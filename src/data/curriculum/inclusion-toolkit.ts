// ---------------------------------------------------------------------------
// Inclusion Toolkit
// Differentiation and inclusion strategies for English teaching
// Covers SEN, EAL, G&T, LAP, HAP, and whole-class approaches
// ---------------------------------------------------------------------------

// ========================== INTERFACES ==========================

export interface DifferentiationStrategy {
  id: string;
  title: string;
  targetGroup: 'SEN' | 'EAL' | 'G&T' | 'LAP' | 'HAP' | 'ALL';
  skillArea: 'reading' | 'writing' | 'speaking' | 'all';
  yearGroups: string[];
  strategy: string;
  howToImplement: string[];
  resources: string[];
  adaptationsNeeded: string;
  impactOnLearning: string;
}

export interface AccessibilityAdaptation {
  id: string;
  assessmentType: string;
  adaptationType: 'extra-time' | 'reader' | 'scribe' | 'word-processor' | 'simplified-language' | 'visual-support' | 'chunked-tasks';
  description: string;
  implementationNotes: string;
  qualityAssurance: string;
}

export interface EalSupport {
  id: string;
  stage: 'new-to-English' | 'early-acquisition' | 'developing' | 'consolidating' | 'advanced';
  yearGroup: string;
  strategy: string;
  vocabularySupport: string;
  writingFrameGuidance: string;
  assessmentModification: string;
}

// ========================== DIFFERENTIATION STRATEGIES ==========================

export const differentiationStrategies: DifferentiationStrategy[] = [
  {
    id: 'diff-001',
    title: 'Tiered Question Scaffolding',
    targetGroup: 'ALL',
    skillArea: 'reading',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Provide three tiers of comprehension questions: literal recall for LAP/SEN learners, inferential questions for core learners, and evaluative/analytical questions for HAP/G&T learners. All students engage with the same text but at an appropriate cognitive level.',
    howToImplement: [
      'Design question sets in three tiers before the lesson: recall (who, what, where), inference (why, how, what suggests), evaluation (how effectively, to what extent, compare).',
      'Print or display questions colour-coded by tier so students self-select or teacher directs.',
      'Allow LAP students to move to higher tiers if they complete lower-tier questions confidently.',
      'Use whole-class discussion to share responses across tiers, modelling progression of thinking.',
    ],
    resources: [
      'Tiered question template (three-column table)',
      'Bloom\'s Taxonomy question stem cards',
      'Text with annotations highlighting key evidence',
    ],
    adaptationsNeeded: 'Produce simplified text version for SEN/EAL learners using same passage with glossary annotations. G&T learners receive unseen extension passage for comparative analysis.',
    impactOnLearning: 'Ensures all learners experience success and challenge simultaneously; builds metacognitive awareness of progression from surface to deep reading.',
  },
  {
    id: 'diff-002',
    title: 'Writing Frames with Graduated Scaffolding',
    targetGroup: 'LAP',
    skillArea: 'writing',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10'],
    strategy: 'Supply structured writing frames that provide sentence starters, paragraph organisers, and connective banks. Scaffolding is gradually reduced across the year as students internalise structure.',
    howToImplement: [
      'Create a full-scaffold version (sentence starters + connective bank + paragraph labels) and a partial-scaffold version (labels only).',
      'Begin the year with full scaffolds; withdraw them incrementally each half-term.',
      'Model completing a frame on the board before independent work.',
      'Pair LAP students with a more confident peer for the drafting stage.',
    ],
    resources: [
      'PEE/PEEL paragraph frame templates',
      'Connective and discourse marker word mats',
      'Model annotated response at target grade',
    ],
    adaptationsNeeded: 'SEN students may need frames retained for longer; HAP students skip frames and use planning grids instead to promote independence.',
    impactOnLearning: 'Reduces cognitive load so working memory is freed for content and analysis; builds implicit knowledge of essay structure over time.',
  },
  {
    id: 'diff-003',
    title: 'Vocabulary Pre-Teaching',
    targetGroup: 'EAL',
    skillArea: 'all',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    strategy: 'Introduce key tier-2 and tier-3 vocabulary before reading a text, using visual glossaries, word maps, and first-language support where available, so EAL learners access meaning rather than decoding unfamiliar words during reading.',
    howToImplement: [
      'Identify 8-12 high-frequency academic words and subject-specific terms from the text in advance.',
      'Create a bilingual glossary card for the most common first languages in the cohort.',
      'Use images, synonyms, example sentences, and word class labels on the vocabulary card.',
      'Begin lessons with a 5-minute vocabulary warm-up activity (matching, gap-fill, or ranking).',
      'Display the vocabulary wall throughout the lesson for reference.',
    ],
    resources: [
      'Tier-2 academic word glossary cards',
      'Visual vocabulary mat with images and definitions',
      'Bilingual dictionary access (print or digital)',
    ],
    adaptationsNeeded: 'SEN learners benefit from the same visual glossary; G&T learners analyse connotation, etymology, and register of the same words to develop precision.',
    impactOnLearning: 'Closes the vocabulary gap that prevents EAL learners from demonstrating subject knowledge; builds transferable academic language for all assessments.',
  },
  {
    id: 'diff-004',
    title: 'Graphic Organiser for Text Analysis',
    targetGroup: 'SEN',
    skillArea: 'reading',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10'],
    strategy: 'Provide visual graphic organisers (spidergrams, annotated text tables, cause-effect diagrams) to help SEN learners organise ideas spatially before writing a linear response.',
    howToImplement: [
      'Design a two-column organiser: evidence (quote or reference) on the left, effect/technique on the right.',
      'Model filling in the organiser using a shared text on the board.',
      'Allow students to use the completed organiser as a planning tool during written tasks.',
      'Encourage colour-coding of different themes or characters across the organiser.',
    ],
    resources: [
      'Pre-printed graphic organiser sheets',
      'Colour-coding pens or highlighter sets',
      'Annotated model organiser for the unit text',
    ],
    adaptationsNeeded: 'EAL learners can add first-language notes in the organiser; HAP learners use a blank organiser with minimal pre-labelling to build independent structure.',
    impactOnLearning: 'Externalises working memory demands; helps SEN learners see relationships between ideas before encoding them in prose form.',
  },
  {
    id: 'diff-005',
    title: 'Talk Partners and Structured Discussion Roles',
    targetGroup: 'ALL',
    skillArea: 'speaking',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Assign structured discussion roles (questioner, clarifier, summariser, challenger) so all learners contribute meaningfully regardless of confidence or language level. Role cards provide sentence stems for each function.',
    howToImplement: [
      'Create laminated role cards with the role title and 4-5 sentence stems per card.',
      'Assign roles strategically: EAL/SEN students take the summariser role initially (lower language demand); G&T students take the challenger role.',
      'Rotate roles across discussions throughout the unit.',
      'Debrief after discussions: ask students to evaluate the quality of their contributions.',
    ],
    resources: [
      'Laminated discussion role cards with sentence stems',
      'Self-assessment speaking grid',
      'Discussion topic prompt sheet',
    ],
    adaptationsNeeded: 'EAL new arrivals observe and use a bilingual prompt card before taking an active role; SEN students may use a pictorial role card.',
    impactOnLearning: 'Increases oracy participation for quieter learners; develops academic language register and argumentation skills for all.',
  },
  {
    id: 'diff-006',
    title: 'Open-Ended Questioning for G&T Extension',
    targetGroup: 'G&T',
    skillArea: 'all',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    strategy: 'Embed stretch questions that require synthesis across multiple texts, evaluation of authorial intent, or connection to wider literary, historical, or cultural contexts, ensuring G&T learners are consistently challenged beyond grade-level expectations.',
    howToImplement: [
      'Prepare two or three extension questions for each lesson that require cross-textual or contextual thinking.',
      'Display extension questions at the start of the lesson so G&T learners know the ceiling of challenge.',
      'Invite G&T students to share extension responses in the whole-class discussion to raise ambition.',
      'Set independent research tasks that feed into extension responses (short reading list or article).',
    ],
    resources: [
      'Extension question bank (contextual, comparative, evaluative)',
      'Critical reading list for independent study',
      'Annotated bibliography of relevant critical essays',
    ],
    adaptationsNeeded: 'Extension tasks are optional for HAP learners who have completed core work; core questions remain accessible to all.',
    impactOnLearning: 'Prevents G&T underachievement through boredom; develops the higher-order thinking skills required for A-level and beyond.',
  },
  {
    id: 'diff-007',
    title: 'Chunking and Step-by-Step Task Breakdown',
    targetGroup: 'SEN',
    skillArea: 'writing',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Deconstruct multi-part writing tasks into discrete, numbered steps with clear success criteria for each step, reducing overwhelm and enabling SEN learners to track their own progress through the task.',
    howToImplement: [
      'Rewrite task instructions as a numbered checklist of small steps (no more than 10 words per step).',
      'Provide a visual progress bar or checklist that students tick off as they complete each step.',
      'Set interim deadlines (e.g., "By 10 minutes: complete step 1-3") to maintain pace.',
      'Conference briefly with SEN learners after step 3 to check understanding before they continue.',
    ],
    resources: [
      'Task breakdown checklist template',
      'Visual timer for the classroom board',
      'Self-assessment traffic-light card',
    ],
    adaptationsNeeded: 'HAP learners receive an open-ended task without chunking to promote autonomous planning; LAP learners may need a teacher or TA to read each step aloud.',
    impactOnLearning: 'Reduces anxiety and task avoidance; builds executive function skills and time management alongside the English skill being practised.',
  },
  {
    id: 'diff-008',
    title: 'Partially Completed Model Answers',
    targetGroup: 'LAP',
    skillArea: 'writing',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    strategy: 'Provide partially completed model answers with key analytical phrases removed (cloze procedure) so LAP learners focus cognitive effort on analysis rather than mechanics of paragraph structure.',
    howToImplement: [
      'Write a high-quality model paragraph and remove analytical phrases, leaving sentence starters in place.',
      'Ask students to complete the missing sections using their own reading of the text.',
      'Reveal the full model after student completion and ask students to compare and evaluate.',
      'Progress to gap-fill with no sentence starters, then to fully independent writing across the term.',
    ],
    resources: [
      'Cloze-procedure model paragraph sheets',
      'Word and phrase bank to support completion',
      'Full model answer for teacher-led reveal',
    ],
    adaptationsNeeded: 'Core learners receive a full model only for annotation before independent writing; HAP learners receive no model and evaluate a deliberately flawed exemplar instead.',
    impactOnLearning: 'Bridges the gap between reading and writing by making analytical language visible and accessible; accelerates progress for LAP learners who lack analytical vocabulary.',
  },
  {
    id: 'diff-009',
    title: 'Personalised Reading Challenges',
    targetGroup: 'HAP',
    skillArea: 'reading',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Assign HAP learners a parallel or contrasting text for independent reading alongside the class text, with a structured comparative question to explore at the end of each unit, building analytical range.',
    howToImplement: [
      'Select 2-3 thematically related texts at a higher challenge level (e.g., a critical essay, a poem from a different era, a short story with an unreliable narrator).',
      'Set a weekly short written or verbal comparison task (3-4 sentences) to be shared in the lesson.',
      'Create a reading log template for HAP learners to record personal responses and questions.',
      'Build comparative comments into HAP learners\' end-of-unit assessments.',
    ],
    resources: [
      'Curated extension reading list per unit',
      'Comparative analysis sentence stem card',
      'Reading response journal template',
    ],
    adaptationsNeeded: 'Core learners can opt into one extension text per term; LAP learners receive the class text with audio support rather than an additional text.',
    impactOnLearning: 'Develops breadth and depth of literary knowledge; prepares HAP learners for the independent comparative skills required at A-level and IB.',
  },
  {
    id: 'diff-010',
    title: 'Think-Aloud Modelling for Inference',
    targetGroup: 'SEN',
    skillArea: 'reading',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    strategy: 'Teacher performs a live think-aloud while reading a passage, verbalising the inferential and analytical thought process explicitly, making invisible comprehension strategies visible for SEN learners who struggle to self-monitor reading.',
    howToImplement: [
      'Select a short, rich extract (8-12 lines) and prepare a think-aloud script in advance.',
      'Read aloud to the class, pausing to say "I notice...", "This makes me think...", "The word X suggests..." at pre-planned points.',
      'Annotate a projected version of the text in real time as you think aloud.',
      'Invite students to continue the think-aloud for the next paragraph in pairs.',
      'Repeat the modelling with new extracts weekly until students internalise the strategy.',
    ],
    resources: [
      'Annotated teacher think-aloud script',
      'Projected or enlarged text extract',
      'Student annotation think-aloud prompt card',
    ],
    adaptationsNeeded: 'EAL learners benefit from a glossary attached to the extract; G&T learners are challenged to identify moments where the think-aloud was incomplete or could go deeper.',
    impactOnLearning: 'Makes metacognitive reading strategies explicit and transferable; particularly effective for SEN learners who have not developed self-monitoring habits.',
  },
  {
    id: 'diff-011',
    title: 'Peer Editing with Targeted Success Criteria',
    targetGroup: 'ALL',
    skillArea: 'writing',
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Pair students for peer editing using a focused success criteria checklist (3-4 specific targets per task), ensuring all learners receive constructive feedback at their own level before final drafting.',
    howToImplement: [
      'Create differentiated success criteria cards: LAP criteria focus on structure and evidence; core criteria focus on analysis and vocabulary; HAP criteria focus on sophistication, originality, and evaluation.',
      'Train students to use the "two stars and a wish" feedback model linked to the criteria.',
      'Allow 10 minutes for silent reading of the peer\'s work, then 5 minutes for written feedback.',
      'Require students to respond in writing to peer feedback before submitting the final draft.',
    ],
    resources: [
      'Differentiated success criteria cards (three levels)',
      'Peer editing feedback proforma',
      'Teacher model of annotated peer feedback',
    ],
    adaptationsNeeded: 'SEN learners may give verbal feedback recorded on a device; EAL learners focus on one criterion (vocabulary and phrasing) to avoid overload.',
    impactOnLearning: 'Improves quality of written outcomes by giving a genuine audience and additional feedback cycle; develops critical reading skills alongside writing.',
  },
  {
    id: 'diff-012',
    title: 'Vocabulary Notebooks and Word Walls',
    targetGroup: 'EAL',
    skillArea: 'all',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Students maintain a personal vocabulary notebook with a consistent recording format (word, definition, example sentence, image or first-language translation) and a class word wall is updated weekly with key unit vocabulary.',
    howToImplement: [
      'Establish a standard notebook format: word in English, word class, definition, example sentence in context, space for illustration or translation.',
      'Dedicate 3-5 minutes per lesson for vocabulary recording and review.',
      'Update the class word wall every Friday with the top 5 words from that week.',
      'Use vocabulary notebook entries as the basis for low-stakes weekly vocabulary quizzes.',
    ],
    resources: [
      'Vocabulary notebook template (printed inserts or digital)',
      'Word wall cards with images',
      'Weekly vocabulary quiz proforma',
    ],
    adaptationsNeeded: 'All learners maintain notebooks; SEN learners use a pre-printed template with images; G&T learners add etymology, synonyms, and antonyms in their entries.',
    impactOnLearning: 'Builds personal ownership of vocabulary growth; systematic retrieval practice embeds new words in long-term memory; particularly transformative for EAL learners.',
  },
  {
    id: 'diff-013',
    title: 'Audio Support for Reading Texts',
    targetGroup: 'SEN',
    skillArea: 'reading',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Provide audio recordings of set texts and extracts so that SEN learners with dyslexia, processing difficulties, or low reading fluency can access the content through listening while following the written text.',
    howToImplement: [
      'Source or create audio recordings of all key extracts (teacher-recorded, professional audiobooks, or text-to-speech tools).',
      'Make recordings available via QR code on the printed extract or through the school VLE.',
      'Train students to follow the text with a finger or ruler while listening to support tracking.',
      'Pair audio access with a glossary of difficult vocabulary printed alongside the extract.',
    ],
    resources: [
      'Audio recordings via school VLE or QR-linked files',
      'Headphones for individual listening',
      'Annotated extract with glossary margin notes',
    ],
    adaptationsNeeded: 'All learners may benefit from an initial teacher read-aloud; EAL learners can listen multiple times; HAP learners analyse differences between spoken and written register.',
    impactOnLearning: 'Removes decoding barrier so SEN learners engage with literary content and analysis at the level of their cognitive ability rather than their reading fluency.',
  },
  {
    id: 'diff-014',
    title: 'Stretch and Challenge Extension Menus',
    targetGroup: 'G&T',
    skillArea: 'all',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Provide an "extension menu" at the start of each unit with a range of choice-based tasks at different cognitive levels (creative, analytical, research, evaluative), giving G&T learners agency and sustained intellectual challenge.',
    howToImplement: [
      'Design a menu of 6-8 tasks per unit across different skill areas: e.g., write a critical essay, create a directors\' commentary, conduct author research, write a pastiche.',
      'Share the menu at the start of the unit and agree a minimum of two tasks to be completed.',
      'Allow extension menu work to be completed during free reading time, form periods, or as home tasks.',
      'Share selected responses in a class "showcase" at the end of the unit.',
    ],
    resources: [
      'Printed or digital extension menu per unit',
      'Research guidance sheet with recommended sources',
      'Showcase display board or digital portfolio',
    ],
    adaptationsNeeded: 'HAP learners are invited to choose one menu item per unit; core students who complete main tasks early can select from menu items.',
    impactOnLearning: 'Sustains engagement and intellectual curiosity; develops autonomy, research skills, and creative risk-taking beyond the core curriculum.',
  },
  {
    id: 'diff-015',
    title: 'Sentence-Level Grammar Focus for EAL Writers',
    targetGroup: 'EAL',
    skillArea: 'writing',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10'],
    strategy: 'Identify the two or three most common grammatical patterns required by the writing task (e.g., relative clauses, passive voice, subject-verb agreement) and provide a brief explicit teaching mini-lesson with EAL-friendly examples before writing.',
    howToImplement: [
      'Analyse previous EAL writing samples to identify the most common grammatical errors for the group.',
      'Design a 10-minute mini-lesson on the target grammar pattern using coloured sentence manipulation cards.',
      'Provide a grammar reference card with the pattern, an example, and a gap-fill practice sentence.',
      'Ask students to use the target structure at least twice in their writing and self-highlight uses.',
    ],
    resources: [
      'Colour-coded sentence manipulation card sets',
      'Grammar reference card per writing task',
      'EAL writing error analysis log (teacher record)',
    ],
    adaptationsNeeded: 'SEN learners receive the same grammar card; native English HAP learners analyse how published authors manipulate the same structure for stylistic effect.',
    impactOnLearning: 'Addresses the specific linguistic barriers that prevent EAL learners from demonstrating their analytical ability in writing; builds transferable grammatical knowledge.',
  },
  {
    id: 'diff-016',
    title: 'Visual Story Mapping for Narrative',
    targetGroup: 'LAP',
    skillArea: 'writing',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    strategy: 'Use visual storyboards, plot diagrams, and character maps as pre-writing planning tools for LAP learners who struggle to hold a complex narrative structure in working memory while writing.',
    howToImplement: [
      'Provide a blank storyboard (6-8 panels) for students to sketch or note the key events in sequence before writing.',
      'Model filling in the storyboard from a mentor text, identifying the five-act structure or narrative arc.',
      'Allow students to return to their storyboard at any point while writing to track their position.',
      'After writing, ask students to check their written sequence against the storyboard for gaps or inconsistencies.',
    ],
    resources: [
      'Blank storyboard template (6-panel and 8-panel versions)',
      'Narrative arc diagram (Freytag\'s pyramid simplified)',
      'Character map template',
    ],
    adaptationsNeeded: 'SEN learners may use images instead of words in the storyboard; HAP learners plan non-linear narratives without the template, using a blank page.',
    impactOnLearning: 'Externalises narrative planning so LAP learners can focus on language quality in each section rather than losing structural coherence; develops planning as a habit of mind.',
  },
  {
    id: 'diff-017',
    title: 'Collaborative Annotation and Close Reading',
    targetGroup: 'ALL',
    skillArea: 'reading',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Students annotate a shared text collaboratively in small groups, with each learner responsible for a different analytical lens (language, structure, tone, context), pooling observations to build a richer collective reading.',
    howToImplement: [
      'Assign roles: one student marks language choices, one marks structural devices, one marks tone and mood shifts, one notes contextual links.',
      'Give each role a different coloured pen or annotation symbol.',
      'Groups share annotations aloud; teacher scribes key observations on a class copy displayed on the board.',
      'Students then write an individual analytical paragraph drawing on the shared annotations.',
    ],
    resources: [
      'Enlarged printed or projected extract',
      'Annotation role cards',
      'Group annotation poster paper for display',
    ],
    adaptationsNeeded: 'LAP/SEN learners take the language-level role (most concrete); G&T learners take the contextual role (most abstract) and are asked to make cross-textual connections.',
    impactOnLearning: 'Democratises analytical reading by valuing different levels of observation; models the process of building interpretation from multiple perspectives.',
  },
  {
    id: 'diff-018',
    title: 'Frequent Low-Stakes Retrieval Practice',
    targetGroup: 'ALL',
    skillArea: 'all',
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    strategy: 'Begin each lesson with a 5-minute retrieval quiz covering vocabulary, quotations, techniques, or context from previous lessons, using differentiated question sets so all learners are appropriately challenged.',
    howToImplement: [
      'Design two versions of the quiz: Version A (4 questions) for SEN/EAL/LAP with recall-level questions; Version B (6 questions) for core and HAP with recall plus application questions.',
      'Deliver quizzes on mini whiteboards, printed slips, or a digital quiz platform.',
      'Mark immediately in class and ask students to correct errors in a different colour.',
      'Track scores over time to celebrate improvement and identify knowledge gaps.',
    ],
    resources: [
      'Weekly retrieval quiz bank (two versions)',
      'Mini whiteboards or printed quiz slips',
      'Student progress tracker sheet',
    ],
    adaptationsNeeded: 'SEN learners receive a word bank alongside Version A questions; G&T learners extend Version B by writing an analytical sentence using one retrieved term.',
    impactOnLearning: 'Strengthens long-term retention of core knowledge; low-stakes format reduces test anxiety; immediate feedback enables same-lesson correction of misconceptions.',
  },
  {
    id: 'diff-019',
    title: 'Reader\'s Theatre for Reluctant Speakers',
    targetGroup: 'SEN',
    skillArea: 'speaking',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    strategy: 'Use scripted reader\'s theatre performances to build oral fluency, expression, and confidence in SEN learners who are reluctant or anxious speakers, providing a safe rehearsed context for public performance.',
    howToImplement: [
      'Select or create a short dramatic script based on the unit text (8-12 lines per character).',
      'Assign roles to match complexity with student confidence: SEN learners receive shorter roles or repetitive chorus lines.',
      'Allow 2-3 rehearsal sessions in small groups before the class performance.',
      'Video the final performance so students can self-assess their spoken delivery.',
    ],
    resources: [
      'Adapted reader\'s theatre scripts per unit',
      'Performance self-assessment checklist',
      'Simple props or name cards for characters',
    ],
    adaptationsNeeded: 'EAL early-stage learners take non-speaking or minimal-speaking roles initially; G&T learners direct the performance and provide constructive feedback to peers.',
    impactOnLearning: 'Rehearsal removes improvisation anxiety; performance of literary language builds prosodic awareness and expression; increases willingness to speak in subsequent lessons.',
  },
  {
    id: 'diff-020',
    title: 'Metacognitive Reflection Journals',
    targetGroup: 'HAP',
    skillArea: 'all',
    yearGroups: ['Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    strategy: 'HAP learners maintain a reflective learning journal where they evaluate their analytical choices, identify their own misconceptions, and set targets for improvement, developing the metacognitive independence required for high-level performance.',
    howToImplement: [
      'Provide a structured journal template: "What strategy did I use?", "What worked and why?", "What would I do differently?", "My target for next time."',
      'Set aside 5 minutes at the end of each lesson or assessed task for journal completion.',
      'Teacher responds briefly in writing to journal entries once per fortnight.',
      'Use journal reflections as the basis for one-to-one target-setting conversations each half-term.',
    ],
    resources: [
      'Metacognitive reflection journal template',
      'Target-setting proforma',
      'Teacher response prompt card',
    ],
    adaptationsNeeded: 'Core learners use a simplified two-question reflection slip; SEN/LAP learners use a traffic-light self-assessment card rather than written reflection.',
    impactOnLearning: 'Develops self-regulation and the ability to identify and address gaps autonomously; critical for closing the gap between HAP performance and excellence at A-level.',
  },
];

// ========================== ACCESSIBILITY ADAPTATIONS ==========================

export const accessibilityAdaptations: AccessibilityAdaptation[] = [
  {
    id: 'access-001',
    assessmentType: 'Written examination (timed)',
    adaptationType: 'extra-time',
    description: 'Student is granted 25% additional time (or as specified in their learning support plan) on all timed written assessments, including in-class tests, mock examinations, and formal end-of-unit assessments.',
    implementationNotes: 'Arrange for the student to sit in a separate room or small group setting to minimise distraction. Ensure invigilators are briefed on the exact time allowance. Provide a clock visible to the student. Extra time begins from the moment writing commences, not from when the paper is distributed.',
    qualityAssurance: 'Confirm time allowance with SENCO before each assessment cycle. Update the student\'s individual access arrangements document annually. Ensure percentage is consistent across all subjects and matches any external exam board provisions.',
  },
  {
    id: 'access-002',
    assessmentType: 'Reading comprehension and unseen text tasks',
    adaptationType: 'reader',
    description: 'A trained reader reads all written instructions, text extracts, and questions aloud to the student. The student listens and formulates their own responses independently without assistance with meaning.',
    implementationNotes: 'The reader must read at a clear, measured pace without emphasis that might guide interpretation. The reader may re-read sections on request but must not paraphrase, explain, or clarify content. Ensure the reader has access to the full question paper and any accompanying materials before the assessment begins.',
    qualityAssurance: 'Reader must be trained and approved by the SENCO. Record all reader-supported assessments in the student\'s file. Confirm that the reader adaptation does not conflict with any specific exam board restrictions on the nature of support provided.',
  },
  {
    id: 'access-003',
    assessmentType: 'Extended writing tasks and examinations',
    adaptationType: 'scribe',
    description: 'A trained scribe writes or types the student\'s responses exactly as dictated, including punctuation when the student specifies it. The scribe does not prompt, correct, or suggest improvements.',
    implementationNotes: 'The student must dictate all punctuation (e.g., "full stop", "new paragraph") unless the scribe is instructed to use normal punctuation automatically as agreed in the learning support plan. The scribe should read back completed sections on request. If the student self-corrects a dictated answer, the scribe amends without comment.',
    qualityAssurance: 'Scribe must be trained and approved by the SENCO or equivalent. Scribed work should be annotated to indicate it was scribed. Compare scribed work to classroom samples to ensure authenticity. Review annually whether scribe continues to be the most appropriate adaptation.',
  },
  {
    id: 'access-004',
    assessmentType: 'All written assessment tasks',
    adaptationType: 'word-processor',
    description: 'Student completes written assessments on a laptop or desktop computer using a standard word processor. Spell-check and predictive text functions are typically disabled unless specified in the learning support plan.',
    implementationNotes: 'Ensure the device is charged before the assessment and that no internet access is available unless the task requires it. Confirm with SENCO whether spell-check is permitted (some learners with dyspraxia or motor difficulties may have this enabled). Print the final response for marking at the end of the session; also save a digital backup.',
    qualityAssurance: 'Confirm that word-processor use is documented in the student\'s access arrangements file. Ensure font and formatting are standardised (e.g., Arial 12pt, double-spaced) to avoid disadvantage in marking. Check device readiness the day before each assessment.',
  },
  {
    id: 'access-005',
    assessmentType: 'Reading comprehension tasks and short-answer questions',
    adaptationType: 'simplified-language',
    description: 'Task instructions and question wording are rewritten in plain English using shorter sentences, active voice, and common vocabulary, while preserving the same cognitive demand and assessment objective as the standard version.',
    implementationNotes: 'Simplified language applies to instructions and questions only, never to assessed reading extracts (which must remain as set by the exam board or teacher). Use a readability checker to verify that simplified instructions are at an appropriate reading level. Avoid using bullet points or numbered lists to replace multi-part questions if the task requires sustained written response.',
    qualityAssurance: 'Have simplified versions reviewed by the SENCO and a second teacher to confirm that the assessment objective has not been altered. Maintain a record of all simplified versions created. Ensure the assessment task requires the same quality of response as the standard version.',
  },
  {
    id: 'access-006',
    assessmentType: 'Poetry and unseen literature analysis',
    adaptationType: 'visual-support',
    description: 'Students receive an annotated or visually enhanced version of the assessment text with structural features highlighted, key terms defined in a margin glossary, and paragraph or stanza breaks clearly marked.',
    implementationNotes: 'Visual support annotations must not include analytical content or interpretive comments that would constitute assistance with the assessment. Use highlighting colours consistently across the school year so students are familiar with the coding system. Margin glossaries should define only denotative meaning (what a word means), not connotation or effect.',
    qualityAssurance: 'Confirm with SENCO which students are entitled to visual support adaptations. Review annotations to ensure they do not inadvertently guide interpretation. For external examinations, check exam board guidance on permitted materials before applying visual support to any extract.',
  },
  {
    id: 'access-007',
    assessmentType: 'Extended writing examinations and coursework',
    adaptationType: 'chunked-tasks',
    description: 'The assessment task is broken into smaller timed sections with a brief pause and refocus prompt between each section, helping students with attention, processing, or executive function difficulties to sustain performance throughout.',
    implementationNotes: 'Design three or four task sections with approximate time guidance (e.g., "Section 1: Plan your response - 10 minutes"). Provide a brief written prompt at the start of each section reminding the student of the task focus. Pauses between sections should be 2-3 minutes and may include a brief movement break if specified in the learning support plan.',
    qualityAssurance: 'Confirm chunking arrangement with SENCO. Ensure the total task time equals the standard allocation plus any extra time entitlement. Verify that chunked section boundaries do not inadvertently limit the range of responses (e.g., do not require the conclusion to be written in a separate section from the body).',
  },
  {
    id: 'access-008',
    assessmentType: 'In-class reading tasks and independent reading',
    adaptationType: 'reader',
    description: 'A peer or classroom assistant reads aloud a text extract to a small group of students who require reading support during in-class tasks, allowing the group to access the content through listening while following in the text.',
    implementationNotes: 'This adaptation is for classroom tasks only and requires less formal oversight than exam conditions. The reader should read at a pace that allows students to follow the printed text. After the initial read, students re-read silently or with audio support before completing the task. This is distinct from examination reader provision and does not require SENCO pre-approval for routine classroom use.',
    qualityAssurance: 'Document use in lesson plans and mark schemes. Ensure that the classroom reader adaptation is flagged in student progress notes so subject teachers can monitor whether it affects the validity of reading comprehension marks. Review termly whether the student is developing independent reading strategies.',
  },
  {
    id: 'access-009',
    assessmentType: 'Oral presentations and spoken language assessments',
    adaptationType: 'simplified-language',
    description: 'Assessment brief and marking criteria for spoken language tasks are provided in simplified language, and students may use prompt notes, cue cards, or a structured planning template during the preparation phase.',
    implementationNotes: 'Cue cards used during the performance itself should contain brief notes or keywords only, not full scripts. The adapted brief must retain the same assessment objectives as the standard version. Allow additional preparation time (up to double the standard preparation period) for SEN or EAL learners undertaking formal spoken language assessments.',
    qualityAssurance: 'Mark the spoken assessment against the standard criteria unless the learning support plan specifies modified marking. Note the use of simplified brief and cue cards in the assessment record. For externally assessed components, confirm with the exam board whether this adaptation is permissible.',
  },
  {
    id: 'access-010',
    assessmentType: 'All classroom and formal assessment tasks',
    adaptationType: 'chunked-tasks',
    description: 'For students with anxiety, attention difficulties, or fatigue-related needs, all assessment tasks are presented with a visual task breakdown card showing the steps, checkpoints, and estimated timings for the whole task, displayed alongside the question paper.',
    implementationNotes: 'The task breakdown card summarises only the structure of the task (e.g., "Step 1: read the extract; Step 2: annotate for language; Step 3: plan your paragraph; Step 4: write and review"). It must not provide content guidance. Laminate cards for reuse where the same task format recurs across assessments. Introduce the card format during low-stakes classroom tasks before using it in formal assessment contexts.',
    qualityAssurance: 'Confirm with SENCO that the task breakdown card does not constitute assistance beyond what is permitted. Review the card content after each assessment cycle to ensure it remains neutral and task-appropriate. Collect student feedback on whether the card reduces anxiety and supports performance.',
  },
];

// ========================== EAL SUPPORT STRATEGIES ==========================

export const ealSupportStrategies: EalSupport[] = [
  {
    id: 'eal-001',
    stage: 'new-to-English',
    yearGroup: 'Y7',
    strategy: 'Buddy system and visual timetable orientation. New-to-English students are paired with a bilingual buddy (same or similar first language) and provided with a visual timetable showing lesson activities with images, reducing reliance on verbal instruction for daily navigation.',
    vocabularySupport: 'Provide a picture-based glossary of essential school and classroom vocabulary (pencil, book, sit down, listen, write) in English alongside first-language translations. Update weekly with the 5 most important new words encountered.',
    writingFrameGuidance: 'Writing tasks are not yet the primary focus. Student completes drawing-based or labelling activities using English key words provided on a word mat. Sentence frame: "[Character/subject] is [adjective]. [Character/subject] feels [emotion word]."',
    assessmentModification: 'Assessment is observation-based only at this stage. Teacher records verbal or non-verbal responses (e.g., pointing, sorting, drawing) as evidence of understanding. No written grade is assigned; progress is recorded on an EAL language acquisition profile.',
  },
  {
    id: 'eal-002',
    stage: 'new-to-English',
    yearGroup: 'Y8',
    strategy: 'Total Physical Response (TPR) and visual storytelling. Use gesture, image sequences, and drama to convey narrative and meaning without relying on extended verbal explanation. TPR commands (stand up, point to, show me) build comprehension of action vocabulary in context.',
    vocabularySupport: 'Supply a visual story map of the unit text with images for each key event, character names labelled, and 3-5 key words per scene. Core English words are used consistently and repeated in every activity without paraphrase.',
    writingFrameGuidance: 'Provide a sentence template: "In [setting], [character] [verb]. He/She feels [emotion] because [simple reason]." Student copies and completes the frame using the word mat. No expectation of independent sentence construction at this stage.',
    assessmentModification: 'Student is assessed on participation, engagement, and ability to match images to vocabulary. Written components are replaced by labelling, sequencing, or matching activities. Progress is shared with parents via EAL profile rather than grade.',
  },
  {
    id: 'eal-003',
    stage: 'early-acquisition',
    yearGroup: 'Y7',
    strategy: 'Structured input with sentence-level language models. The student receives simplified versions of class texts with shorter sentences, high-frequency vocabulary, and key phrases highlighted. All oral input from the teacher is delivered at a slightly slower pace with visual support.',
    vocabularySupport: 'Provide a tiered word list: common words with definitions, and key subject-specific terms with an example sentence and image. Student rehearses words in a weekly paired vocabulary activity using flashcard matching.',
    writingFrameGuidance: 'Frame: "The writer uses the word [word]. This is [technique]. It makes the reader feel [effect] because [simple reason]." Connective bank provided: also, because, however, this shows, which suggests.',
    assessmentModification: 'Written assessments are shortened (2 questions instead of 4). Student answers in note form, bullet points, or simple sentences. Marks are awarded for content and demonstration of understanding rather than accuracy of expression.',
  },
  {
    id: 'eal-004',
    stage: 'early-acquisition',
    yearGroup: 'Y9',
    strategy: 'Oral rehearsal before writing. All writing tasks are preceded by a structured oral preparation phase in which the student talks through their response with a partner or TA using prompt questions, building confidence with the ideas and vocabulary before encoding in writing.',
    vocabularySupport: 'Oral vocabulary practice using question-answer pair cards: teacher or TA asks a question, student answers using a sentence stem printed on the card. Key analytical vocabulary (tension, contrast, imply, convey) is introduced through oral use before appearing in writing tasks.',
    writingFrameGuidance: 'Frame uses a spoken-to-written bridge: student first speaks the answer using a stem card, then writes the same sentence. Frame: "The writer creates [effect] by using [technique]. The word [word] suggests [meaning] and this makes the reader [response]."',
    assessmentModification: 'Student may give oral responses to up to 50% of written assessment questions, recorded by TA and transcribed. Marks are awarded on the same criteria as written responses. Spelling and grammar errors in written components are not penalised if meaning is clear.',
  },
  {
    id: 'eal-005',
    stage: 'developing',
    yearGroup: 'Y8',
    strategy: 'Guided writing with a teacher or TA conferencing during the task. The student begins writing independently, then receives a structured 3-minute conference at the mid-point of the task to review what has been written and identify one improvement to make before completing the response.',
    vocabularySupport: 'Provide a subject-specific thesaurus card with alternatives for overused words (good = effective, powerful, striking; bad = disturbing, unsettling, menacing; shows = suggests, implies, conveys, reveals). Student is encouraged to make two vocabulary upgrades per paragraph.',
    writingFrameGuidance: 'Partial frame: paragraph opener and first analytical sentence are provided; student generates the rest independently. Frame: "The writer presents [character/theme] as [quality] through the use of [technique]. [Student continues from here]."',
    assessmentModification: 'Full written assessment with additional 15 minutes and access to a vocabulary mat. Spelling and grammar are assessed under a separate strand where this is within the mark scheme; content and analysis marks are awarded without penalty for language accuracy.',
  },
  {
    id: 'eal-006',
    stage: 'developing',
    yearGroup: 'Y10',
    strategy: 'Explicit teaching of academic discourse markers and text organisation. The student is taught how paragraphs link (firstly, furthermore, in contrast, consequently, to conclude) and how to signal to the reader the direction of an argument or analysis, building control of extended writing.',
    vocabularySupport: 'Discourse marker card organised by function: adding information, contrasting, explaining cause, giving examples, concluding. Student uses the card to select appropriate connectives when writing and checks that each paragraph begins with a discourse marker that follows logically from the previous paragraph.',
    writingFrameGuidance: 'No sentence-level frame is provided. Instead, student is given an essay plan template with paragraph purpose labelled: introduction (context + thesis), paragraph 1 (first point + evidence + analysis), paragraph 2 (second point + development), paragraph 3 (contrast or alternative view), conclusion (evaluation). Student constructs language independently within the structure.',
    assessmentModification: 'Standard assessment with extra time (25%). Bilingual dictionary is permitted for checking meaning of unseen vocabulary in reading extracts. No assistance with generating analytical content.',
  },
  {
    id: 'eal-007',
    stage: 'consolidating',
    yearGroup: 'Y9',
    strategy: 'Modelled deconstruction of high-band exemplar responses. The student analyses model A/A* responses alongside the marking criteria, identifying the features that distinguish them from lower-band responses, with a focus on precision of language and sophistication of analysis.',
    vocabularySupport: 'Provide a word upgrade checklist targeting common consolidating-stage plateaus: replacing "the writer shows" with a more precise verb (evokes, manipulates, subverts), replacing vague effect statements ("makes you feel scared") with precise register ("creates a sense of foreboding").',
    writingFrameGuidance: 'No frame is used. Student plans independently using a blank essay planner. After completing a first draft, student uses the model response and a self-assessment checklist to identify one structural improvement and one language upgrade before submitting.',
    assessmentModification: 'Standard assessment conditions with extra time if specified in individual plan. For internally marked work, teacher notes EAL status in marking but applies standard criteria. Feedback is focused on one specific linguistic target per assessment cycle (e.g., "extend your analysis of word-level choices").',
  },
  {
    id: 'eal-008',
    stage: 'consolidating',
    yearGroup: 'Y11',
    strategy: 'Independent extended writing with post-task linguistic analysis. After completing an assessed piece, the student identifies 3-5 examples of where their English phrasing was approximate and rewrites those sentences with support from a dictionary and model texts, building meta-awareness of linguistic precision.',
    vocabularySupport: 'Student maintains a personal "precision log": a running list of phrases they have rewritten more precisely, with the original and improved version side by side. This log is reviewed with the teacher once per half-term and feeds into personal writing targets.',
    writingFrameGuidance: 'No writing frame used. Student uses a pre-writing checklist: thesis drafted, 3-4 points planned with quotations, discourse markers identified, conclusion strategy chosen. Post-writing checklist: each paragraph has evidence, analysis, and effect; connectives vary; final sentence of each paragraph links back to thesis.',
    assessmentModification: 'Standard assessment conditions. For formal examinations, bilingual dictionary access is confirmed with the exam board. Feedback includes a "linguistic target" comment in addition to analytical feedback, specific to the student\'s EAL development stage.',
  },
  {
    id: 'eal-009',
    stage: 'advanced',
    yearGroup: 'Y12',
    strategy: 'Seminar-style discussion and Socratic questioning to develop critical oral fluency in academic English. The student participates in structured seminars on literary texts, practising the formulation of complex arguments, the qualification of claims, and the use of hedging language in academic discourse.',
    vocabularySupport: 'Provide an academic hedging and qualification language bank: "One might argue...", "This reading is complicated by...", "While X is convincing, it fails to account for...", "A more nuanced interpretation would suggest...". Student is challenged to use three hedging phrases per seminar discussion.',
    writingFrameGuidance: 'No frame used. Student writes independently under examination conditions. Pre-task: review personal writing targets and the mark scheme. Post-task: self-mark against the mark scheme before receiving teacher feedback, then compare self-mark with teacher mark to develop marking accuracy.',
    assessmentModification: 'Standard A-level assessment conditions with any individually agreed access arrangement. No content-related EAL modifications at this stage. Feedback distinguishes between language-accuracy issues (handled via linguistic targets) and analytical development issues (handled via academic targets).',
  },
  {
    id: 'eal-010',
    stage: 'advanced',
    yearGroup: 'Y13',
    strategy: 'Independent research and critical reading with seminars on secondary sources. The advanced EAL student engages with literary criticism, contextual scholarship, and comparative texts, developing the ability to integrate source material into original argument using correct attribution and academic register.',
    vocabularySupport: 'Focus shifts from vocabulary acquisition to precision and register: student works on eliminating colloquialisms, informal constructions, and direct translation from first language that persist in advanced writing. Teacher identifies one recurring language pattern per assessment cycle for targeted improvement.',
    writingFrameGuidance: 'No frame. Student constructs extended comparative and evaluative essays independently. Writing targets from the precision log and feedback from Y12 carry forward. Student conducts one self-directed writing improvement session per fortnight using a self-selected model essay from a critical anthology.',
    assessmentModification: 'Full standard assessment conditions. EAL status is noted in coursework folder documentation but assessment is against standard criteria only. Any access arrangements are confirmed by SENCO and applied consistently across all A-level subjects.',
  },
];
