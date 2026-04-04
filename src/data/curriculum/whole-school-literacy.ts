export interface LiteracyStrategy {
  id: string;
  title: string;
  type: 'reading' | 'writing' | 'vocabulary' | 'oracy' | 'research';
  subjects: string[];
  yearGroups: string[];
  description: string;
  implementation: string[];
  impactEvidence: string;
  timeRequired: string;
  resources: string[];
}

export interface AcademicVocabularyList {
  id: string;
  subject: string;
  yearGroup: string;
  words: {
    word: string;
    definition: string;
    subjectContext: string;
    linkedEnglishSkill: string;
  }[];
}

export interface WritingAcrossSubjects {
  id: string;
  subjectArea: string;
  writingType: string;
  sharedFeatures: string[];
  subjectSpecificFeatures: string[];
  teachingNotes: string;
  modelSentences: string[];
}

// ---------------------------------------------------------------------------
// LITERACY STRATEGIES
// ---------------------------------------------------------------------------

export const literacyStrategies: LiteracyStrategy[] = [
  {
    id: 'ls-001',
    title: 'Frayer Model Vocabulary Instruction',
    type: 'vocabulary',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'A four-quadrant graphic organiser in which students record a word\'s definition, characteristics, examples, and non-examples. ' +
      'This deepens understanding beyond simple dictionary-style definitions and encourages students to think critically about how a term relates to what it is not.',
    implementation: [
      'Introduce the blank Frayer template at the start of a new topic.',
      'Model the process with a familiar word before moving to subject-specific terminology.',
      'Ask students to complete the template individually, then compare with a partner.',
      'Display completed models on working walls so students can revisit them throughout the unit.',
      'Return to completed Frayers at the end of a topic as a low-stakes retrieval task.',
    ],
    impactEvidence:
      'Research by Frayer, Frederick, and Klausmeier (1969) and subsequent EEF guidance on vocabulary instruction indicate that explicitly teaching word meanings through multiple exposures and contextualised examples significantly improves both comprehension and subject-specific writing.',
    timeRequired: '10-15 minutes for initial completion; 5 minutes for retrieval review',
    resources: [
      'Frayer Model template (printable A5 or projected)',
      'Working-wall display space',
      'Subject-specific word list for the current unit',
    ],
  },
  {
    id: 'ls-002',
    title: 'Teacher Read-Aloud with Think-Aloud',
    type: 'reading',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'The teacher reads a subject-relevant text aloud while narrating their own comprehension processes -- asking questions, noticing confusing sections, making inferences, and connecting ideas. ' +
      'This makes expert reading behaviour visible and accessible to students.',
    implementation: [
      'Select a short, challenging extract directly relevant to the current topic (100-300 words).',
      'Annotate your own copy in advance, marking places to pause and model a strategy.',
      'Read at a measured pace, pausing to verbalise thoughts: "I am wondering why...", "This word makes me think...".',
      'Invite students to predict what comes next before turning the page or revealing the next paragraph.',
      'After reading, ask two or three comprehension questions that require inference rather than retrieval.',
    ],
    impactEvidence:
      'The EEF Improving Literacy in Secondary Schools guidance (2019) identifies explicit reading instruction, including modelling, as having high impact. Think-aloud approaches help students internalise strategies they later apply independently.',
    timeRequired: '10-20 minutes per session',
    resources: [
      'Subject-relevant text extract (photocopied or projected)',
      'Annotation markers or visualiser for live modelling',
    ],
  },
  {
    id: 'ls-003',
    title: 'Writing Frames and Sentence Stems',
    type: 'writing',
    subjects: ['Science', 'History', 'Geography', 'Religious Studies', 'PSHE', 'MFL'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'Structured frameworks that scaffold extended written responses by providing sentence openers, connective phrases, and paragraph templates. ' +
      'Frames are progressively removed as students develop independence.',
    implementation: [
      'Design frames that model the genre expected: causal explanation, analytical essay, evaluation, and so on.',
      'Provide a "full" frame (with sentence starters), a "partial" frame (connectives only), and a "blank" version for confident writers.',
      'Display the frame on the board or hand out printed copies; allow students to choose their level.',
      'After students draft using the frame, ask them to review and replace at least one starter with their own phrasing.',
      'Gradually phase out frames across a half-term as the genre becomes familiar.',
    ],
    impactEvidence:
      'Guided writing with scaffolding, cited in EEF and in Graham and Perin\'s Writing Next report (2007), consistently shows positive effects on the quality and length of student writing, particularly for lower-attaining students.',
    timeRequired: '5 minutes to introduce frame; used throughout a writing task of 20-40 minutes',
    resources: [
      'Genre-specific writing frame templates',
      'Display copy for the board',
      'Differentiated versions: supported, partially supported, independent',
    ],
  },
  {
    id: 'ls-004',
    title: 'Talk for Writing -- Oral Rehearsal Before Writing',
    type: 'oracy',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'Students orally compose and rehearse sentences or paragraphs with a partner before committing them to paper. ' +
      'Speaking first lowers the cognitive load of writing and helps students internalise subject-specific phrasing.',
    implementation: [
      'After direct instruction or reading, give students a prompt question or statement to respond to.',
      'Ask them to turn to a partner and talk through their answer for 90 seconds.',
      'Circulate and collect strong oral examples; share these with the class before they write.',
      'Students then write their response, building on what they rehearsed.',
      'Debrief by comparing an oral and written version of the same point.',
    ],
    impactEvidence:
      'Oral rehearsal is supported by cognitive load theory (Sweller, 1988) and by Pie Corbett\'s Talk for Writing framework. Oracy-first approaches improve the quality of written responses, especially for students who struggle to begin.',
    timeRequired: '5-10 minutes for oral rehearsal before a writing task',
    resources: [
      'Prompt question or discussion stem on the board',
      'Optional: partner talk prompt cards',
    ],
  },
  {
    id: 'ls-005',
    title: 'PEEL Paragraph Structure',
    type: 'writing',
    subjects: ['History', 'Geography', 'Science', 'Religious Studies', 'PSHE', 'Business Studies'],
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'A widely used analytical writing structure: Point, Evidence, Explanation, Link. ' +
      'Teaches students to make claims, support them with specific evidence, explain the significance of that evidence, and connect back to the question.',
    implementation: [
      'Introduce each element of PEEL with a labelled model paragraph from the subject.',
      'Colour-code each section in the model so the structure is visually clear.',
      'Ask students to write a PEEL paragraph on a low-stakes topic first to consolidate the structure.',
      'Provide a checklist: Have I stated my point? Have I used subject-specific evidence? Have I explained why this matters? Have I linked back to the question?',
      'Peer-mark using the PEEL checklist before teacher feedback.',
    ],
    impactEvidence:
      'Structured paragraph frameworks reduce cognitive overload by breaking the writing process into manageable components (Bereiter and Scardamalia, 1987). Consistent use across departments reinforces the structure so students apply it with increasing automaticity.',
    timeRequired: '15-20 minutes for a single PEEL paragraph task',
    resources: [
      'Colour-coded PEEL model paragraph (subject-specific)',
      'PEEL self-assessment checklist',
      'Blank PEEL paragraph planner',
    ],
  },
  {
    id: 'ls-006',
    title: 'Word-Rich Environment -- Display and Word Walls',
    type: 'vocabulary',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'Curated classroom displays that feature key vocabulary for the current unit, model sentences, and etymology or morphology information. ' +
      'Regular, low-stakes reference to the display during lessons normalises independent vocabulary use.',
    implementation: [
      'At the start of a new unit, add 8-12 key terms to the word wall with brief definitions and visual cues where possible.',
      'Begin lessons with a 2-minute "word of the day" activity that revisits one term from the wall.',
      'Encourage students to use word wall terms in their written and oral responses; acknowledge this explicitly when it happens.',
      'Update the display mid-unit to add new vocabulary that has emerged from class discussion or reading.',
      'At the end of the unit, remove words from the wall and ask students to recall definitions from memory.',
    ],
    impactEvidence:
      'Marzano and Pickering (2005) found that deliberately teaching vocabulary using multiple exposures and visual representations produces effect sizes of 0.4 to 0.6. Word-rich environments provide ambient reinforcement between explicit teaching episodes.',
    timeRequired: '20-30 minutes to set up display; 2-5 minutes per lesson for reference activities',
    resources: [
      'Large-format word cards',
      'Blu-Tack or display boards',
      'Etymology reference cards (morpheme families)',
    ],
  },
  {
    id: 'ls-007',
    title: 'Cornell Note-Taking',
    type: 'research',
    subjects: ['Science', 'History', 'Geography', 'Business Studies', 'Psychology', 'Sociology'],
    yearGroups: ['Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'A structured note-taking system using a divided page: a narrow left-hand column for cues or questions, a wider right-hand column for notes, and a summary section at the bottom. ' +
      'Teaches students to distinguish between main ideas and detail, and to synthesise information.',
    implementation: [
      'Model the Cornell layout on the board or display a blank template at the start of the lesson.',
      'During a teacher explanation or video, students capture notes in the right column.',
      'After the input, students write a question for each note in the left column and a 2-3 sentence summary at the bottom.',
      'Use the left column cues as a retrieval practice tool: cover the right column and answer from the cues alone.',
      'Collect books periodically to assess quality of notes and summaries.',
    ],
    impactEvidence:
      'Cornell notes were developed at Cornell University and are supported by decades of educational research on self-regulated learning (Pauk and Owens, 2010). The built-in retrieval step aligns with Roediger and Butler\'s (2011) research on the testing effect.',
    timeRequired: '15-20 minutes for note-taking; 5 minutes for summary and cues',
    resources: [
      'Cornell note-taking template (A4, printed or in exercise books)',
      'Guidance poster on note-taking conventions',
    ],
  },
  {
    id: 'ls-008',
    title: 'Reciprocal Reading',
    type: 'reading',
    subjects: ['Science', 'History', 'Geography', 'Religious Studies', 'English'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'A structured small-group reading approach in which students take on the roles of Predictor, Questioner, Clarifier, and Summariser as they work through a text together. ' +
      'Distributes comprehension strategies across a group and builds metacognitive awareness.',
    implementation: [
      'Assign or allow students to choose one of the four roles.',
      'Read a short section of text (one paragraph or a few sentences).',
      'The Predictor says what they expect next; the Questioner poses a question about the section; the Clarifier identifies and explains any unclear vocabulary or ideas; the Summariser offers a one-sentence summary.',
      'Rotate roles for the next section.',
      'After the full text, discuss as a class: which strategy helped most?',
    ],
    impactEvidence:
      'Palincsar and Brown (1984) demonstrated effect sizes of 0.7-0.9 in their original reciprocal teaching studies. The EEF identifies collaborative approaches to comprehension as high-impact, particularly when roles are clearly defined.',
    timeRequired: '20-30 minutes for a 300-500 word text',
    resources: [
      'Role-card sets for each group (Predictor, Questioner, Clarifier, Summariser)',
      'Segmented text extract with clear paragraph breaks',
    ],
  },
  {
    id: 'ls-009',
    title: 'Explicit Morphology Instruction',
    type: 'vocabulary',
    subjects: ['Science', 'Geography', 'History', 'Maths', 'MFL', 'English'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'Teaching students to decode and construct words by understanding common roots, prefixes, and suffixes. ' +
      'Particularly powerful for subject-specific Latinate and Greek vocabulary that appears across curriculum areas.',
    implementation: [
      'Identify 3-5 morphemes that unlock multiple words in the current topic (e.g., "bio-" for Biology, "geo-" for Geography, "chron-" for History).',
      'Teach the morpheme explicitly: meaning, origin, examples from different subjects.',
      'Ask students to generate new words using the morpheme and check whether they are real words.',
      'Create a "morpheme map" on the board, branching out from a root to all known related words.',
      'Return to morpheme maps as a starter activity to extend the word family with new examples from reading.',
    ],
    impactEvidence:
      'Bowers and Kirby (2010) found that morphological instruction produces gains in both reading comprehension and spelling. Knowing that "graph" means "to write" unlocks biography, bibliography, autograph, and seismograph simultaneously.',
    timeRequired: '10-15 minutes for initial morpheme teaching; 5 minutes for review activities',
    resources: [
      'Morpheme reference cards (common prefixes and roots)',
      'Blank morpheme map template',
      'Cross-curricular word family lists',
    ],
  },
  {
    id: 'ls-010',
    title: 'Structured Academic Controversy',
    type: 'oracy',
    subjects: ['History', 'Geography', 'PSHE', 'Religious Studies', 'Science', 'English'],
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'A formal oracy structure in which pairs argue a position, then swap and argue the opposite position, before working together to find the most defensible view. ' +
      'Develops academic language, reasoned argument, and the ability to consider multiple perspectives.',
    implementation: [
      'Present a clear, debatable proposition connected to the current topic.',
      'Assign pairs to positions A or B, and give them 5 minutes to prepare their argument with evidence.',
      'Pair A presents to Pair B (2 minutes); Pair B asks one clarifying question.',
      'Swap: Pair B now presents the opposing view.',
      'Both pairs drop their assigned position and work together for 5 minutes to draft a "best answer" that draws on both arguments.',
      'Share best answers with the class; discuss which evidence was most persuasive.',
    ],
    impactEvidence:
      'Johnson and Johnson\'s research (1988 onwards) on cooperative learning through controversy found significant gains in reasoning quality, motivation, and retention of content. It is particularly effective for developing the academic register needed in essay writing.',
    timeRequired: '25-35 minutes including preparation, presentation, and synthesis',
    resources: [
      'Proposition card or slide',
      'Evidence cards or source extracts for each side',
      'Sentence stem card for academic argumentation',
    ],
  },
  {
    id: 'ls-011',
    title: 'Summarising -- the 25-Word Challenge',
    type: 'reading',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'Students reduce the key idea of a text, lesson, or concept to exactly 25 words (or fewer). ' +
      'The constraint forces prioritisation of information and precision in language, building both comprehension and concision in writing.',
    implementation: [
      'After reading a text or completing a learning episode, display the prompt: "Summarise this in 25 words."',
      'Give students 3 minutes to write individually.',
      'Share two or three attempts; as a class, discuss what was kept and what was cut.',
      'Challenge students to reduce their summary further: can they convey the same meaning in 15 words?',
      'Use summaries as an exit ticket or starter for the next lesson.',
    ],
    impactEvidence:
      'Summarising is one of the six high-yield strategies identified by Rosenshine (2012) in his Principles of Instruction. Reducing information to a strict word count strengthens understanding of hierarchical importance within a text.',
    timeRequired: '5-8 minutes',
    resources: [
      'Timer displayed on the board',
      'Optional: printed summary template with a word-count box',
    ],
  },
  {
    id: 'ls-012',
    title: 'Elaborative Interrogation -- "Why?" and "How?" Questions',
    type: 'reading',
    subjects: ['Science', 'History', 'Geography', 'Maths', 'Psychology', 'Sociology'],
    yearGroups: ['Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'Students generate and answer "Why is this true?" and "How does this work?" questions about facts or concepts they are studying. ' +
      'The act of generating explanations deepens encoding and supports transfer of knowledge.',
    implementation: [
      'After presenting a fact or concept, model the elaborative question: "So why might that be the case?"',
      'Ask students to write down their own "why" or "how" question about the content.',
      'Students swap questions with a partner and attempt to answer each other\'s question.',
      'Debrief: which questions were hardest to answer, and why?',
      'Return to elaborative questions as a homework or retrieval task.',
    ],
    impactEvidence:
      'Dunlosky et al. (2013) rated elaborative interrogation as having moderate utility based on substantial evidence of improved retention and transfer compared to passive re-reading.',
    timeRequired: '10-15 minutes',
    resources: [
      'Prompt card: "Why is this true? How does this connect to...?"',
      'Printed fact statements for students to interrogate',
    ],
  },
  {
    id: 'ls-013',
    title: 'Vocabulary Self-Assessment Grid',
    type: 'vocabulary',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'A grid listing key unit vocabulary in which students rate their confidence (1 = never seen it, 2 = seen it but unsure, 3 = can use it). ' +
      'Used at the start and end of a unit to make vocabulary growth visible and to direct instruction toward the highest-priority gaps.',
    implementation: [
      'Distribute the grid at the start of a unit; students mark their initial confidence rating.',
      'Do not explain any words at this stage -- the grid diagnoses gaps rather than teaching.',
      'Use the grid data (quick show of hands per word) to prioritise explicit vocabulary teaching.',
      'At the end of the unit, students complete a second rating column and identify the words they are still uncertain about.',
      'Words marked as uncertain form the revision focus for end-of-unit retrieval tasks.',
    ],
    impactEvidence:
      'Self-assessment of vocabulary knowledge (Nation, 2001) activates prior knowledge, creates retrieval cues, and motivates students to engage with unfamiliar words. When used diagnostically, it allows teachers to target instruction efficiently.',
    timeRequired: '5 minutes at the start and end of a unit',
    resources: [
      'Unit vocabulary self-assessment grid (printed or digital)',
      'Confidence-rating key displayed on the board',
    ],
  },
  {
    id: 'ls-014',
    title: 'Sentence Combining and Expansion',
    type: 'writing',
    subjects: ['All subjects'],
    yearGroups: ['Y7', 'Y8', 'Y9', 'Y10', 'Y11'],
    description:
      'Students practise combining short, simple sentences into longer, more complex ones, or expanding a bare sentence by adding specific detail. ' +
      'Builds syntactic control and teaches students to add subject-specific precision without losing clarity.',
    implementation: [
      'Display two or three short, content-relevant sentences on the board.',
      'Ask students to combine them into one sentence using a conjunction, subordinate clause, or relative clause.',
      'Share combinations; discuss which conveys the most information most clearly.',
      'For expansion, display a bare sentence (e.g., "The reaction produced gas.") and ask students to add three specific details.',
      'Evaluate expansions: did adding detail improve precision, or did it create confusion?',
    ],
    impactEvidence:
      'Sentence combining is rated as one of the most effective writing instructional strategies by Graham and Perin (2007), with a reported effect size of 0.50 across multiple studies. It develops syntactic fluency that transfers to extended writing tasks.',
    timeRequired: '10-15 minutes as a starter or mid-lesson activity',
    resources: [
      'Sentence strips for combining (printed or on card)',
      'Sentence expansion prompt: Who? What? When? Where? Why? How?',
    ],
  },
  {
    id: 'ls-015',
    title: 'Socratic Seminar',
    type: 'oracy',
    subjects: ['English', 'History', 'Religious Studies', 'PSHE', 'Philosophy', 'Sociology'],
    yearGroups: ['Y9', 'Y10', 'Y11', 'Y12', 'Y13'],
    description:
      'A facilitated whole-class or small-group discussion in which students explore a complex question or text through structured dialogue. ' +
      'The teacher acts as facilitator rather than expert, asking open questions and directing students to respond to each other rather than through the teacher.',
    implementation: [
      'Select an "essential question" that has no single correct answer and is connected to the current text or topic.',
      'Give students 5-10 minutes to read a short text and annotate two ideas they want to discuss.',
      'Arrange chairs in a circle; establish norms: listen actively, build on what others say, use evidence.',
      'Open with the essential question and remain silent for as long as possible to allow student-led discussion to develop.',
      'Use follow-up prompts only when needed: "Can you give evidence for that?", "Does anyone see it differently?"',
      'Close by asking each student to write one idea they changed their mind about.',
    ],
    impactEvidence:
      'Socratic seminars are associated with improved critical thinking, sophisticated argumentation, and deeper content understanding (Adler, 1984; Billings and Fitzgerald, 2002). They are especially effective when students have been prepared through pre-reading.',
    timeRequired: '30-40 minutes for the seminar plus 5-10 minutes of written reflection',
    resources: [
      'Essential question card',
      'Short text extract (1-2 pages maximum)',
      'Seminar norms display',
      'Discussion tracking sheet for teacher observation',
    ],
  },
];

// ---------------------------------------------------------------------------
// ACADEMIC VOCABULARY LISTS
// ---------------------------------------------------------------------------

export const academicVocabularyLists: AcademicVocabularyList[] = [
  {
    id: 'avl-001',
    subject: 'Science',
    yearGroup: 'Y8',
    words: [
      {
        word: 'hypothesis',
        definition: 'A testable prediction made before an experiment, based on prior knowledge or observation.',
        subjectContext: 'Students write a hypothesis before a practical investigation, e.g., "I predict that increasing temperature will increase the rate of reaction because..."',
        linkedEnglishSkill: 'Writing in a conditional and formal register; structuring a predictive argument with a reason.',
      },
      {
        word: 'variable',
        definition: 'Any factor that can change or be changed in an experiment; may be independent, dependent, or controlled.',
        subjectContext: 'Identifying and explaining variables is essential in method writing and evaluation sections of practical reports.',
        linkedEnglishSkill: 'Precise definition and classification; technical writing that distinguishes between related terms.',
      },
      {
        word: 'analysis',
        definition: 'The detailed examination of data or evidence to identify patterns, trends, or relationships.',
        subjectContext: 'Students analyse graphs and data tables to identify trends and draw conclusions in Science reports.',
        linkedEnglishSkill: 'Extended analytical writing; using evidence to support an interpretation.',
      },
      {
        word: 'conclusion',
        definition: 'A summary statement that explains what the evidence shows and whether it supports the original hypothesis.',
        subjectContext: 'The conclusion section of a practical report links results back to scientific theory.',
        linkedEnglishSkill: 'Synthesising evidence; writing a structured closing argument that refers back to an earlier position.',
      },
      {
        word: 'evaluate',
        definition: 'To judge the quality, reliability, or significance of evidence, methods, or conclusions, considering both strengths and limitations.',
        subjectContext: 'In Science, students evaluate the reliability of their method and suggest improvements.',
        linkedEnglishSkill: 'Balanced analytical writing that presents both sides of an argument before reaching a judgement.',
      },
      {
        word: 'correlation',
        definition: 'A relationship between two variables in which they change together, though not necessarily because one causes the other.',
        subjectContext: 'Used when analysing scatter graphs to distinguish correlation from causation.',
        linkedEnglishSkill: 'Precise language use; distinguishing between suggesting a link and claiming a cause.',
      },
      {
        word: 'systematic',
        definition: 'Done according to a fixed plan or method; methodical and thorough.',
        subjectContext: 'A systematic approach to an experiment means all variables are controlled consistently across every trial.',
        linkedEnglishSkill: 'Process writing; using sequencing language and precise procedural vocabulary.',
      },
      {
        word: 'anomaly',
        definition: 'A result that does not fit the pattern of other data and may indicate an error or an unexpected phenomenon.',
        subjectContext: 'Students identify anomalous results in tables and explain how they would deal with them when drawing a line of best fit.',
        linkedEnglishSkill: 'Identifying and explaining exceptions; evaluative writing that acknowledges limitations.',
      },
    ],
  },
  {
    id: 'avl-002',
    subject: 'History',
    yearGroup: 'Y9',
    words: [
      {
        word: 'causation',
        definition: 'The relationship between causes and their effects; the process by which one event or condition brings about another.',
        subjectContext: 'Students rank causes of major historical events and explain how long-term and short-term causes interacted.',
        linkedEnglishSkill: 'Structuring a causal argument; using connectives of cause and effect (consequently, as a result, this led to).',
      },
      {
        word: 'significance',
        definition: 'The importance or meaning of a historical event, person, or development, judged by its impact at the time and in the longer term.',
        subjectContext: 'Students evaluate the significance of historical figures using criteria such as scale, duration, and contemporary relevance.',
        linkedEnglishSkill: 'Constructing an evaluative argument; using tentative and modal language when making judgements.',
      },
      {
        word: 'interpretation',
        definition: 'A historian\'s or source\'s particular view or explanation of past events, shaped by their perspective, purpose, and context.',
        subjectContext: 'Students compare two historical interpretations of the same event and explain why they differ.',
        linkedEnglishSkill: 'Analytical reading of non-fiction; identifying how viewpoint and purpose shape meaning.',
      },
      {
        word: 'propaganda',
        definition: 'Information, often biased or misleading, used to promote a particular political cause or point of view.',
        subjectContext: 'Students analyse propaganda posters and speeches to identify rhetorical techniques and their intended effect on audiences.',
        linkedEnglishSkill: 'Language analysis; identifying rhetorical devices and evaluating their persuasive effect.',
      },
      {
        word: 'provenance',
        definition: 'The origin of a source, including who created it, when, why, and for whom, used to assess its usefulness and reliability.',
        subjectContext: 'In source analysis, students use provenance to explain why a source may be biased or limited.',
        linkedEnglishSkill: 'Contextual analysis of texts; evaluating how purpose and audience shape language choices.',
      },
      {
        word: 'chronology',
        definition: 'The arrangement of events in the order in which they occurred in time.',
        subjectContext: 'Students construct timelines and explain how chronological understanding helps identify turning points.',
        linkedEnglishSkill: 'Sequencing narrative writing; using time adverbials and temporal connectives accurately.',
      },
      {
        word: 'consequence',
        definition: 'The outcome or result of an event; what happened as a result of a particular action or decision.',
        subjectContext: 'Students categorise consequences as short-term/long-term and intended/unintended to construct a nuanced historical argument.',
        linkedEnglishSkill: 'Causal writing; constructing multi-step arguments that link evidence to outcomes.',
      },
      {
        word: 'continuity',
        definition: 'The persistence of certain features, trends, or conditions across a period of time, in contrast to change.',
        subjectContext: 'Students explain what changed and what stayed the same across a historical period, using evidence to support each claim.',
        linkedEnglishSkill: 'Comparative writing; structuring an argument that holds two contrasting ideas simultaneously.',
      },
    ],
  },
  {
    id: 'avl-003',
    subject: 'Geography',
    yearGroup: 'Y10',
    words: [
      {
        word: 'sustainability',
        definition: 'Meeting the needs of the present without compromising the ability of future generations to meet their own needs.',
        subjectContext: 'Students evaluate whether development strategies are sustainable by considering economic, social, and environmental criteria.',
        linkedEnglishSkill: 'Extended evaluative writing; structuring an argument that weighs competing priorities.',
      },
      {
        word: 'interdependence',
        definition: 'A relationship in which different places, people, or systems depend on each other and affect each other.',
        subjectContext: 'Students explore how trade, migration, and climate change create interdependence between countries at different stages of development.',
        linkedEnglishSkill: 'Writing about complex relationships; using hedged language to acknowledge competing factors.',
      },
      {
        word: 'migration',
        definition: 'The movement of people from one place to another, either within a country or between countries, for a range of economic, social, or environmental reasons.',
        subjectContext: 'Students classify migration as voluntary or forced, internal or international, and analyse push and pull factors.',
        linkedEnglishSkill: 'Classifying and categorising; writing analytical paragraphs that use specific evidence from case studies.',
      },
      {
        word: 'urbanisation',
        definition: 'The process by which an increasing proportion of a population comes to live in towns and cities.',
        subjectContext: 'Students examine rates of urbanisation in different countries and explore the challenges it creates for infrastructure and the environment.',
        linkedEnglishSkill: 'Process writing; explaining cause and effect across an extended analytical paragraph.',
      },
      {
        word: 'inequality',
        definition: 'Differences in the distribution of wealth, resources, opportunity, or power between individuals, groups, or places.',
        subjectContext: 'Students use development indicators to compare inequality between and within countries and evaluate possible responses.',
        linkedEnglishSkill: 'Comparative analytical writing; using data and case study evidence to support a sustained argument.',
      },
      {
        word: 'erosion',
        definition: 'The wearing away and removal of material (rock, soil, sediment) from the land surface by water, wind, ice, or other agents.',
        subjectContext: 'Students explain how hydraulic action, abrasion, and attrition cause erosion in river and coastal landform formation.',
        linkedEnglishSkill: 'Technical descriptive writing; sequencing a process accurately using passive constructions.',
      },
      {
        word: 'vulnerability',
        definition: 'The degree to which people, places, or systems are susceptible to harm from a hazard, depending on social, economic, and physical factors.',
        subjectContext: 'Students explain why communities in lower-income countries are often more vulnerable to natural hazards despite similar physical risks.',
        linkedEnglishSkill: 'Analytical explanation; using hedged language and qualifying evidence when making generalisations.',
      },
      {
        word: 'distribution',
        definition: 'The way in which something (population, rainfall, resources) is spread across an area.',
        subjectContext: 'Students describe the distribution of population using maps, identifying areas of high and low density and explaining the reasons.',
        linkedEnglishSkill: 'Descriptive and analytical writing about maps and data; using spatial language precisely.',
      },
    ],
  },
  {
    id: 'avl-004',
    subject: 'Mathematics',
    yearGroup: 'Y9',
    words: [
      {
        word: 'proof',
        definition: 'A logical sequence of steps that demonstrates conclusively that a mathematical statement is true.',
        subjectContext: 'Students write algebraic proofs to show that expressions are always odd, always even, or always equal a particular value.',
        linkedEnglishSkill: 'Constructing a logical argument step by step; using precise connective language (therefore, since, it follows that).',
      },
      {
        word: 'congruent',
        definition: 'Identical in shape and size; two shapes are congruent if one can be transformed into the other by rotation, reflection, or translation.',
        subjectContext: 'Students prove triangles are congruent using conditions such as SSS, SAS, ASA, and RHS.',
        linkedEnglishSkill: 'Precise definition; distinguishing between similar-meaning terms (congruent vs. similar).',
      },
      {
        word: 'derive',
        definition: 'To arrive at a formula, result, or conclusion by reasoning from known facts or general principles.',
        subjectContext: 'Students derive the formula for the area of a trapezium by manipulating known area formulas.',
        linkedEnglishSkill: 'Procedural writing; sequencing a logical process and explaining the reason for each step.',
      },
      {
        word: 'estimate',
        definition: 'To calculate an approximate value using rounded or simplified figures, to check whether an exact answer is reasonable.',
        subjectContext: 'Students round each value to one significant figure before multiplying to estimate the answer, then compare with their calculator result.',
        linkedEnglishSkill: 'Precise use of near-synonyms; distinguishing between estimate, approximate, and guess.',
      },
      {
        word: 'generalise',
        definition: 'To identify a rule or pattern that applies to all cases of a type, not just specific examples.',
        subjectContext: 'Students generalise a number pattern by writing an nth term formula that works for any term in the sequence.',
        linkedEnglishSkill: 'Moving from specific examples to general rules; using universal quantifiers (always, all, for any value of n).',
      },
      {
        word: 'proportion',
        definition: 'A relationship in which two quantities increase or decrease at the same rate; or a part considered in relation to the whole.',
        subjectContext: 'Students distinguish between direct and inverse proportion and represent each algebraically and graphically.',
        linkedEnglishSkill: 'Comparative language; explaining relationships between quantities clearly and precisely.',
      },
      {
        word: 'systematic',
        definition: 'Organised according to a fixed method or plan so that all possibilities are considered without repetition or omission.',
        subjectContext: 'Students list outcomes systematically using sample space diagrams or tree diagrams in probability.',
        linkedEnglishSkill: 'Process writing; using ordered sequencing language and clear layout conventions.',
      },
      {
        word: 'justify',
        definition: 'To give a mathematical reason that explains why an answer or method is correct, going beyond merely stating the result.',
        subjectContext: 'Students justify their choice of method when solving an equation, explaining why each step follows from the previous one.',
        linkedEnglishSkill: 'Explanatory writing; using because, since, and therefore to connect claims with reasoning.',
      },
    ],
  },
  {
    id: 'avl-005',
    subject: 'General Academic',
    yearGroup: 'Y7',
    words: [
      {
        word: 'analyse',
        definition: 'To examine something in detail, breaking it into its parts to understand how they relate to the whole.',
        subjectContext: 'Used across all subjects: analyse a poem in English, a graph in Science, a source in History, or a solution method in Maths.',
        linkedEnglishSkill: 'Extended analytical writing; constructing a response that goes beyond description to interpretation and evaluation.',
      },
      {
        word: 'infer',
        definition: 'To reach a conclusion based on evidence and reasoning rather than direct statement; to read between the lines.',
        subjectContext: 'Students infer a character\'s motivation from their actions, a scientist\'s conclusion from data, or a historian\'s argument from their selection of evidence.',
        linkedEnglishSkill: 'Close reading; distinguishing between what a text explicitly states and what it implies.',
      },
      {
        word: 'perspective',
        definition: 'A particular way of viewing or interpreting something, shaped by experience, values, or position.',
        subjectContext: 'Students consider the perspective of a writer, a historical actor, or a group of people affected by a policy or event.',
        linkedEnglishSkill: 'Analytical reading and writing; identifying how viewpoint shapes the presentation of information or events.',
      },
      {
        word: 'evidence',
        definition: 'Facts, data, examples, or quotations that support or challenge a claim or argument.',
        subjectContext: 'All subjects require students to select, embed, and explain evidence as part of extended written responses.',
        linkedEnglishSkill: 'Integrating quotation and data into analytical writing; explaining evidence rather than simply presenting it.',
      },
      {
        word: 'context',
        definition: 'The circumstances or background information that surround and help explain a text, event, or piece of evidence.',
        subjectContext: 'In English, context refers to historical or biographical background; in History, it refers to the time and place of a source; in Science, it refers to the experimental conditions.',
        linkedEnglishSkill: 'Embedding contextual knowledge into analytical writing without allowing it to replace close analysis.',
      },
      {
        word: 'argue',
        definition: 'To present a claim and support it with reasons and evidence, while anticipating and addressing counter-arguments.',
        subjectContext: 'Arguing a position is central to extended writing in English, History, Geography, RS, and Sociology.',
        linkedEnglishSkill: 'Persuasive and analytical writing; structuring a cohesive argument across multiple paragraphs.',
      },
      {
        word: 'accurate',
        definition: 'Free from error; precise and correct in detail.',
        subjectContext: 'Used to describe factual recall, data, quotations, and technical vocabulary in all subject areas.',
        linkedEnglishSkill: 'Editing and proofreading; attention to precision in vocabulary, spelling, and factual content.',
      },
      {
        word: 'relevant',
        definition: 'Closely connected to the topic, question, or argument under discussion.',
        subjectContext: 'Students are asked to select only relevant evidence and to ensure each paragraph of a response answers the question directly.',
        linkedEnglishSkill: 'Planning and structuring extended writing; distinguishing between central and peripheral information.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// WRITING ACROSS SUBJECTS
// ---------------------------------------------------------------------------

export const writingAcrossSubjects: WritingAcrossSubjects[] = [
  {
    id: 'was-001',
    subjectArea: 'Science',
    writingType: 'Scientific Report (Practical Write-Up)',
    sharedFeatures: [
      'Clear, formal register with no first-person pronouns in most sections',
      'Precise technical vocabulary used accurately',
      'Logical sequencing of information',
      'Use of evidence to support claims',
      'Objective tone that avoids emotional language',
    ],
    subjectSpecificFeatures: [
      'Passive voice in the method section (e.g., "The solution was heated..." rather than "I heated...")',
      'Present tense for stating scientific facts; past tense for describing what happened during the investigation',
      'Quantitative data referenced directly in the analysis (e.g., "The rate increased by 12% when...")',
      'Conclusion that explicitly states whether the hypothesis was supported or refuted',
      'Evaluation that identifies specific sources of error and proposes improvements',
    ],
    teachingNotes:
      'English teachers can reinforce the passive voice and tense consistency introduced in Science. ' +
      'When teaching non-fiction writing, use scientific reports as an example of purpose-driven formal register. ' +
      'Science teachers should model how to embed data into a prose sentence rather than simply listing results.',
    modelSentences: [
      'The results suggest that there is a positive correlation between temperature and reaction rate, as the rate increased from 2.1 mol/s at 20 degrees Celsius to 5.8 mol/s at 60 degrees Celsius.',
      'This anomalous result may have occurred because the thermometer was not fully submerged, leading to an inaccurate temperature reading.',
      'In conclusion, the hypothesis was partially supported: while increasing concentration did increase the rate of reaction, the relationship was not directly proportional above 2 mol/dm3.',
    ],
  },
  {
    id: 'was-002',
    subjectArea: 'History',
    writingType: 'Source Analysis Essay',
    sharedFeatures: [
      'Analytical paragraphs that move from claim to evidence to explanation',
      'Precise vocabulary that distinguishes between facts and interpretations',
      'Quotation or specific reference integrated into prose rather than dropped in',
      'Formal register free from colloquial language',
      'A sustained argument across multiple paragraphs',
    ],
    subjectSpecificFeatures: [
      'Explicit reference to the provenance of a source (author, date, audience, purpose)',
      'Evaluation of utility and reliability, using provenance and the student\'s own contextual knowledge',
      'Acknowledgement of what the source does not tell us (the limits of the evidence)',
      'Comparison of sources where required, structured by argument rather than alternating description',
      'Conclusion that weighs the overall usefulness of evidence rather than repeating points already made',
    ],
    teachingNotes:
      'Source analysis in History shares significant ground with language analysis in English. ' +
      'Both require students to consider who is speaking, to whom, for what purpose, and what effect the language has. ' +
      'History teachers can use the acronym PACT (Purpose, Audience, Context, Tone) to connect to English frameworks. ' +
      'English teachers can model how to embed a quotation from a historical source using the same skills applied to literary quotation.',
    modelSentences: [
      'Source A, a government poster produced in 1940 for a British civilian audience, suggests that public morale remained high; however, as a piece of official propaganda, its purpose was to encourage resilience rather than to record authentic public opinion.',
      'While Source B provides a useful insight into the perspective of working-class women on factory conditions, its value is limited by its brevity and by the fact that it was written retrospectively in 1965, twenty years after the events described.',
      'Taken together, Sources A and C both indicate that unemployment was a significant cause of social unrest, though they differ in their assessment of whether government policy made conditions better or worse.',
    ],
  },
  {
    id: 'was-003',
    subjectArea: 'Geography',
    writingType: 'Extended Analytical Response',
    sharedFeatures: [
      'Topic sentence that directly answers the question',
      'Evidence from case studies, data, or maps embedded within the argument',
      'Explanation of why and how, not just what',
      'Use of geographical terminology accurately and consistently',
      'Evaluative conclusion that makes a supported overall judgement',
    ],
    subjectSpecificFeatures: [
      'Reference to specific places, figures, and statistics rather than generic claims',
      'Use of comparative language to discuss contrasting places or scenarios (e.g., LICs vs. HICs)',
      'Acknowledgement of scale: local, national, and global implications',
      'Process language that explains how physical or human systems operate over time',
      'Evaluation of different management strategies, considering effectiveness and trade-offs',
    ],
    teachingNotes:
      'Geography writing demands the same analytical paragraph structure as English essays but also requires the precise use of data and named examples. ' +
      'English departments can help Geography teachers by explicitly modelling how to embed specific data into a prose sentence. ' +
      'The skill of evaluating competing arguments -- central to both subjects -- can be reinforced using shared sentence stems: "While... the more significant factor is... because..."',
    modelSentences: [
      'Flooding in Dhaka is partly a result of its physical geography, situated at the confluence of three major rivers; however, rapid and poorly planned urbanisation has significantly increased surface run-off, making flooding both more frequent and more severe.',
      'Hard engineering strategies, such as the construction of sea walls in Happisburgh, offer significant short-term protection; however, they are expensive to maintain and can increase erosion rates in adjacent areas, raising questions about their long-term sustainability.',
      'Although economic growth in China has lifted over 800 million people out of poverty since 1990, this development has been accompanied by rising inequality, with the Gini coefficient increasing from 0.31 in 1981 to 0.47 in 2012.',
    ],
  },
  {
    id: 'was-004',
    subjectArea: 'Religious Studies',
    writingType: 'Philosophical Argument and Counter-Argument',
    sharedFeatures: [
      'Clear thesis statement in the introduction',
      'Structured argument with a distinct claim, reason, and illustration per paragraph',
      'Formal academic register',
      'Acknowledgement of opposing views before rebuttal or concession',
      'Conclusion that reaches a reasoned judgement',
    ],
    subjectSpecificFeatures: [
      'Accurate reference to religious and philosophical terminology (theodicy, omnipotence, sanctity of life)',
      'Attribution of views to specific traditions, thinkers, or texts (e.g., "According to the Qur\'an...", "Aquinas argued that...")',
      'Use of hedged language to distinguish between one tradition\'s view and a universal claim',
      'Consideration of how different religious and non-religious perspectives evaluate the same issue',
      'A conclusion that reaches a personal or evaluative judgement clearly signalled as such',
    ],
    teachingNotes:
      'RS writing closely mirrors the discursive essay form taught in English: presenting, challenging, and weighing competing viewpoints. ' +
      'English departments can reinforce the discourse markers used in RS (furthermore, however, conversely, in contrast, on the other hand). ' +
      'RS teachers should model the difference between asserting a personal view and accurately representing a tradition\'s view, mirroring the distinction in English between writer\'s voice and character voice.',
    modelSentences: [
      'Christians believe that God is omnipotent, omniscient, and wholly good; however, the existence of natural evil -- suffering caused by earthquakes, disease, and famine -- appears to challenge this view directly.',
      'The Free Will Defence, developed by Alvin Plantinga, argues that a world containing genuinely free moral agents is more valuable than a world of automatons, and that God therefore permits evil as the necessary consequence of freedom.',
      'While this response has merit, critics argue that it does not account for natural evil, which is not caused by human choice, leaving the problem of evil only partially resolved.',
    ],
  },
  {
    id: 'was-005',
    subjectArea: 'Business Studies',
    writingType: 'Business Report and Recommendation',
    sharedFeatures: [
      'Clear, concise formal language without jargon that obscures meaning',
      'Organised structure with headings or clearly signposted sections',
      'Evidence-based reasoning that links data to conclusions',
      'A clear recommendation or conclusion',
      'Objective tone that avoids emotive language',
    ],
    subjectSpecificFeatures: [
      'Use of financial data and business-specific terminology (e.g., revenue, cash flow, market share)',
      'Analysis of internal and external factors using recognised frameworks (SWOT, PESTLE)',
      'Evaluation of options by weighing advantages and disadvantages before recommending',
      'Acknowledgement of risk, uncertainty, and the assumptions underlying recommendations',
      'Consideration of short-term vs. long-term implications of a decision',
    ],
    teachingNotes:
      'Business report writing develops the same skills of structured argument and evidence-based reasoning as English non-fiction writing. ' +
      'English teachers can use business reports as a model of purposeful professional writing where every sentence serves the argument. ' +
      'Business teachers should encourage students to justify their recommendation explicitly, mirroring the "L" (Link back) stage of PEEL.',
    modelSentences: [
      'Although increasing the marketing budget by 15% would raise short-term costs, the projected increase in brand awareness suggests it could generate sufficient additional revenue to recover this expenditure within two trading quarters.',
      'The SWOT analysis reveals that the company\'s main strength -- its established customer loyalty -- is under threat from a key weakness: its failure to invest in digital retail channels, which competitors have developed rapidly since 2020.',
      'On balance, Option B is recommended because it carries lower financial risk, aligns with the company\'s stated sustainability targets, and offers a more realistic return on investment within the three-year planning horizon.',
    ],
  },
  {
    id: 'was-006',
    subjectArea: 'Physical Education',
    writingType: 'Sports Analysis and Tactical Evaluation',
    sharedFeatures: [
      'Technical vocabulary used accurately and consistently',
      'Specific evidence from observed or studied performance',
      'Structured comparison of what was done versus what should have been done',
      'Explanation of why a particular approach was effective or ineffective',
      'Constructive and precise recommendations for improvement',
    ],
    subjectSpecificFeatures: [
      'Reference to specific sporting principles, rules, and tactical systems',
      'Use of performance-analysis language (e.g., decision-making under pressure, spatial awareness, transition play)',
      'Quantitative evidence where appropriate (pass completion rates, time on the ball)',
      'Connection between physical preparation and performance outcomes',
      'Evaluation that distinguishes between technical errors (skill execution) and tactical errors (decision-making)',
    ],
    teachingNotes:
      'PE written tasks develop analytical skills that parallel English language analysis: observing closely, selecting significant detail, explaining cause and effect, and making a supported evaluative judgement. ' +
      'English teachers can reference sports commentary and analysis as examples of purposeful non-fiction writing. ' +
      'PE teachers should model the difference between description ("the player ran to the left") and analysis ("the player\'s decision to move left created space for the overlapping full-back, stretching the opposition defence").',
    modelSentences: [
      'The team\'s defensive shape was effective in the first half because all four defenders maintained a compact line, denying the opposition space in behind; however, in the second half, the line broke too early on three separate occasions, allowing through-balls to be played into the penalty area.',
      'The decision to adopt a 4-3-3 formation was tactically sound given the opposition\'s reliance on wide play, as it gave the team numerical superiority in central midfield while the wide forwards could press the opposition full-backs.',
      'To improve performance, the player should focus on scanning before receiving the ball, which would reduce the time taken to make a decision after receiving and allow a quicker pass into the forward line.',
    ],
  },
  {
    id: 'was-007',
    subjectArea: 'Modern Foreign Languages',
    writingType: 'Discursive and Persuasive Essay',
    sharedFeatures: [
      'Clear introduction that states the topic and the writer\'s approach',
      'Paragraphs with a clear topic sentence',
      'Range of vocabulary and structural variety to demonstrate linguistic competence',
      'Discourse markers to signal argument structure',
      'A conclusion that reaches a clear personal position',
    ],
    subjectSpecificFeatures: [
      'Use of a wide range of tenses (present, past, future, conditional) to demonstrate grammatical range',
      'Justified opinions using constructions such as "Je pense que... parce que..." or equivalent',
      'Comparison of two sides of an argument using appropriate target-language connectives',
      'Personal anecdote or example used to illustrate a point and demonstrate authentic language use',
      'Avoidance of direct translation from English; target-language idioms and collocations where possible',
    ],
    teachingNotes: 'MFL discursive writing shares its overall structure with the English discursive essay. ' +
      'English departments can reinforce the importance of varied discourse markers and the movement from argument to counter-argument. ' +
      'MFL teachers can draw on students\' understanding of English essay structure, explicitly bridging it to the target language: "You already know how to structure a for-and-against essay in English -- today we are applying that same structure in French."',
    modelSentences: [
      'D\'un cote, les reseaux sociaux permettent aux jeunes de rester en contact avec leurs amis et de decouvrir de nouvelles cultures; d\'un autre cote, ils peuvent provoquer de l\'anxiete et nuire au sommeil.',
      'A mon avis, il est essentiel de limiter le temps passe sur les ecrans, surtout pour les enfants de moins de douze ans, car les etudes montrent que l\'utilisation excessive des ecrans reduit la capacite de concentration.',
      'Pour conclure, bien que les nouvelles technologies presentent des avantages indeniables, il faut les utiliser de facon responsable afin de profiter de leurs bienfaits sans en subir les consequences negatives.',
    ],
  },
  {
    id: 'was-008',
    subjectArea: 'Art and Design',
    writingType: 'Critical Evaluation and Artist Research',
    sharedFeatures: [
      'Formal register appropriate to academic art criticism',
      'Specific vocabulary that names techniques, materials, and compositional choices precisely',
      'Evidence drawn from observation of the work itself, not general knowledge',
      'A personal response that is justified and connected to the work\'s features',
      'Structured paragraphs that move from observation to interpretation to evaluation',
    ],
    subjectSpecificFeatures: [
      'Use of art-specific terminology (composition, chiaroscuro, impasto, juxtaposition, motif)',
      'Reference to contextual influences: biographical, historical, cultural, or artistic movement',
      'Description of how formal elements (line, tone, colour, texture, form, space) create meaning or effect',
      'Analysis of the artist\'s intentions and how successfully they are realised',
      'Connection drawn between the artist\'s choices and the student\'s own developing practice',
    ],
    teachingNotes: 'Artist research writing in Art parallels literary criticism in English: both require close reading of a created artefact, identification of the creator\'s choices, and evaluation of their effect. ' +
      'English teachers should acknowledge that analysis of visual art uses the same analytical skills as analysis of a poem: "What choices has the artist made, and what effect do those choices have on the viewer?" ' +
      'Art teachers can reinforce the "zoom in" technique from English -- selecting one specific detail and unpacking its significance -- to improve the depth of written analysis.',
    modelSentences: [
      'Kahlo\'s use of a split composition in The Two Fridas -- one figure in traditional Tehuana costume, the other in European dress -- can be interpreted as a visual representation of her divided cultural identity following her divorce from Diego Rivera in 1939.',
      'The heavy, impasted brushwork in the foreground creates a tactile quality that draws the viewer\'s eye towards the centre of the composition, while the thinly painted background recedes, creating a sense of depth without the use of conventional perspective.',
      'This work has influenced my own project because it demonstrates how symbolic objects can carry emotional weight without explicit narrative; I intend to apply this principle by incorporating personal artefacts into my still-life compositions.',
    ],
  },
];
