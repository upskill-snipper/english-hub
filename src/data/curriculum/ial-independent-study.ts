// IAL English Language — Independent Study and Self-Directed Learning
// Pearson Edexcel International A Level (YEN01/YEN02/YEN03/YEN04)

export interface IndependentStudyTask {
  id: string;
  title: string;
  unit: 'Unit 1' | 'Unit 2' | 'Unit 3' | 'Unit 4' | 'General';
  type: 'reading' | 'data-collection' | 'analysis-practice' | 'writing-practice' | 'research' | 'revision' | 'peer-discussion';
  description: string;
  instructions: string[];
  resources: string[];
  timeRequired: string;
  submittable: boolean;
  feedbackOpportunity: string;
  aoAlignment: string[];
}

export interface RecommendedReading {
  id: string;
  title: string;
  author: string;
  type: 'academic' | 'popular-linguistics' | 'literary' | 'newspaper' | 'journal-article';
  unit: string;
  synopsis: string;
  whyRecommended: string;
  keyIdeas: string[];
  difficulty: 'accessible' | 'intermediate' | 'challenging';
}

// ─────────────────────────────────────────────────────────────────────────────
// INDEPENDENT STUDY TASKS  (24 tasks — 6 per unit)
// ─────────────────────────────────────────────────────────────────────────────

export const ialIndependentStudyTasks: IndependentStudyTask[] = [

  // ── UNIT 1: Language and Identity ──────────────────────────────────────────

  {
    id: 'ial-ist-u1-01',
    title: 'Accent and Identity Interview',
    unit: 'Unit 1',
    type: 'data-collection',
    description: 'Record a short interview with a willing participant about how they feel their accent or dialect reflects their identity. Transcribe a two-minute extract using basic transcription conventions and annotate it for phonological and pragmatic features.',
    instructions: [
      'Ask a family member, friend, or neighbour if they are willing to be recorded for a school linguistics project.',
      'Prepare four to six open questions that invite reflection on identity and language, e.g. "Has anyone ever commented on the way you speak?" or "Do you change the way you talk in different situations?"',
      'Record the conversation (audio only) using your phone. Aim for at least five minutes of natural conversation.',
      'Select a two-minute extract that is rich in features to analyse.',
      'Transcribe the extract using the basic Conversation Analysis conventions you have learned (pauses, overlaps, intonation markers).',
      'Annotate your transcript: highlight at least three phonological features, two pragmatic features, and one example of code-switching or style-shifting if present.',
      'Write a 300-word analytical commentary on what the data reveals about the relationship between accent, dialect, and identity.',
    ],
    resources: [
      'Your class notes on phonological frameworks and transcription conventions',
      'David Crystal, "The Stories of English" — chapters on dialect and identity',
      'Sociolinguistics: An Introduction to Language and Society — Peter Trudgill (library copy)',
    ],
    timeRequired: '2.5 to 3 hours',
    submittable: true,
    feedbackOpportunity: 'Submit transcript and commentary to your teacher for written feedback on analytical depth and use of terminology.',
    aoAlignment: ['AO1 — accurate use of linguistic terminology and transcription conventions', 'AO2 — demonstrating knowledge of language concepts (sociolinguistics, identity)'],
  },

  {
    id: 'ial-ist-u1-02',
    title: 'Regional Dialect Mapping',
    unit: 'Unit 1',
    type: 'research',
    description: 'Research one regional British dialect (e.g. Scouse, Geordie, Black Country, Yorkshire) and produce an annotated fact-sheet covering phonological, lexical, and grammatical features. Compare at least two dialect features to standard southern British English.',
    instructions: [
      'Choose one British regional dialect you find interesting or have personal connection to.',
      'Use the British Library "Sounds Familiar" website and at least one academic source to gather information.',
      'Document at least four phonological features with IPA examples where possible (e.g. h-dropping, vowel shifts, rhoticity).',
      'List eight to ten distinctive lexical items with their standard equivalents and any notes on etymology.',
      'Note any grammatical features that diverge from Standard English (e.g. double negation, non-standard past tense forms, pronoun usage).',
      'Produce a one-page fact-sheet (A4) with clear headings that could be used as a revision resource.',
      'Write a short 150-word reflection on why this dialect has retained distinct features — consider geography, community, and social attitudes.',
    ],
    resources: [
      'British Library "Sounds Familiar" online resource (bl.uk/learning/langlit/sounds)',
      'Peter Trudgill, "The Dialects of England" (library copy or excerpts)',
      'Survey of English Dialects — digitised data via the Leeds Archive of Vernacular Culture',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Share fact-sheet with the class as a peer-teaching resource; invite questions and corrections.',
    aoAlignment: ['AO1 — accurate use of phonological and grammatical terminology', 'AO2 — knowledge of dialect variation and sociolinguistic context'],
  },

  {
    id: 'ial-ist-u1-03',
    title: 'Social Media Identity Analysis',
    unit: 'Unit 1',
    type: 'analysis-practice',
    description: 'Collect ten posts or comments from a single public social media account (a public figure, journalist, or organisation — not a private individual). Analyse how language choices construct a particular identity or persona online.',
    instructions: [
      'Choose a public figure or organisation with an active, text-heavy social media presence (politicians, authors, and charities work well).',
      'Screenshot or copy ten posts/comments and save them as your data set.',
      'Read through all ten and identify recurring patterns before you begin formal analysis.',
      'Analyse lexical choices: note semantic fields, register, formality level, and any notable word choices.',
      'Analyse graphological features: use of capitalisation, punctuation, emoji, hashtags, and formatting.',
      'Consider pragmatic strategies: how does the writer position themselves in relation to their audience?',
      'Write a 400 to 500-word analytical essay arguing what identity is being constructed and how.',
      'Use at least six accurately deployed linguistic terms with brief explanations in brackets the first time each is used.',
    ],
    resources: [
      'Your class notes on identity, persona, and computer-mediated communication',
      'Naomi Baron, "Always On: Language in an Online and Mobile World" (selected chapters)',
      'Unit 1 Assessment Objectives guidance sheet from your teacher',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Swap essays with a partner for peer-marking using the AO1/AO2 mark descriptors before teacher review.',
    aoAlignment: ['AO1 — analytical writing and accurate terminology', 'AO2 — understanding of identity construction and CMC'],
  },

  {
    id: 'ial-ist-u1-04',
    title: 'Gender and Language: Testing the Theories',
    unit: 'Unit 1',
    type: 'peer-discussion',
    description: 'Conduct a structured group discussion with two or three peers about the key theories of gendered language (Lakoff, Tannen, Cameron, Coates). Prepare a position statement in advance, then record and reflect on the discussion itself as linguistic data.',
    instructions: [
      'Before the discussion, read a summary of at least three gender and language theories from your notes or a textbook.',
      'Prepare a two-minute verbal position statement: do you find the theories convincing based on your own experience of language?',
      'Organise a 20-minute group discussion with two to three classmates, ideally including a mix of perspectives.',
      'Record the discussion with everyone\'s consent.',
      'After the discussion, listen back and identify at least two examples of features associated with any of the theories you discussed (e.g. hedging, interruption, minimal responses, topic shifts).',
      'Write a 200-word reflection: what did the discussion itself reveal about gender and language, and how did it challenge or support the theories?',
    ],
    resources: [
      'Robin Lakoff, "Language and Woman\'s Place" — key extracts',
      'Deborah Tannen, "You Just Don\'t Understand" — chapter summaries',
      'Deborah Cameron, "The Myth of Mars and Venus" — introduction and Chapter 1',
    ],
    timeRequired: '1.5 hours',
    submittable: false,
    feedbackOpportunity: 'Share reflections in a class discussion; teacher will highlight strong examples of applied theory.',
    aoAlignment: ['AO2 — knowledge and application of gender and language theories', 'AO3 — evaluating competing theoretical perspectives'],
  },

  {
    id: 'ial-ist-u1-05',
    title: 'Occupational Language Investigation',
    unit: 'Unit 1',
    type: 'data-collection',
    description: 'Gather a sample of language from a specific occupational context (medicine, law, sport, gaming, cooking, etc.) and analyse how specialist vocabulary, jargon, and register construct a professional identity and regulate access to the discourse community.',
    instructions: [
      'Choose an occupational field that interests you or that you have some access to.',
      'Collect a data set of at least 20 examples of specialist language: these can come from websites, manuals, overheard conversations, TV programmes, or podcasts.',
      'Organise your data under three headings: technical vocabulary (jargon), shared abbreviations or acronyms, and pragmatic conventions specific to the profession.',
      'For each category, select your two strongest examples and write a two to three sentence analysis explaining the linguistic feature and its social function.',
      'Consider: how does this specialised language include insiders and exclude outsiders? What does it reveal about power and hierarchy within the profession?',
      'Write a 250-word conclusion connecting your findings to the concept of discourse communities (Swales) or communities of practice (Eckert and McConnell-Ginet).',
    ],
    resources: [
      'John Swales, "Genre Analysis" — concept of discourse communities (library or excerpts)',
      'Your class notes on register, jargon, and occupational dialect',
      'Any professional website, journal, or specialist forum relevant to your chosen field',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Present findings in a five-minute class presentation for peer Q&A and teacher feedback on theoretical application.',
    aoAlignment: ['AO1 — use of lexical and pragmatic terminology', 'AO2 — discourse communities and register'],
  },

  {
    id: 'ial-ist-u1-06',
    title: 'Ethnicity and Language: Researching Multicultural London English',
    unit: 'Unit 1',
    type: 'research',
    description: 'Research Multicultural London English (MLE) as a contemporary case study in language, identity, and change. Produce an essay of 500 to 600 words evaluating MLE as evidence that identity and language are co-constructed by ethnicity, age, and place.',
    instructions: [
      'Begin with the BBC and British Library online resources on MLE before moving to academic sources.',
      'Take notes on: the geographical and demographic origins of MLE, its key phonological features (e.g. th-fronting, monophthongisation), its key lexical features (loanwords from Jamaican Creole, South Asian languages, and other sources), and its spread beyond its original community.',
      'Read at least one academic article — Kerswill, Cheshire, or Fox are good starting points.',
      'Draft an essay with an introduction, two analytical paragraphs, and a conclusion. Your essay should answer: "To what extent does MLE challenge traditional models of dialect formation?"',
      'Include at least two specific examples of MLE features with linguistic analysis.',
      'Reference your sources accurately at the end.',
    ],
    resources: [
      'Paul Kerswill et al. — research papers on MLE (available via Google Scholar)',
      'British Library "Evolving English" exhibition resources (online)',
      'Jenny Cheshire, "Contact, the feature pool and the speech community: The emergence of Multicultural London English" (Journal of Sociolinguistics, 2011)',
    ],
    timeRequired: '3 hours',
    submittable: true,
    feedbackOpportunity: 'Teacher written feedback on essay structure, use of evidence, and evaluation of linguistic theory.',
    aoAlignment: ['AO2 — ethnicity, place, and language change', 'AO3 — evaluating evidence and academic perspectives'],
  },

  // ── UNIT 2: Language over Time ─────────────────────────────────────────────

  {
    id: 'ial-ist-u2-01',
    title: 'Etymological Word History Project',
    unit: 'Unit 2',
    type: 'research',
    description: 'Trace the etymological history of ten English words across different historical periods, noting the language(s) of origin, any semantic shifts, and what the history of each word reveals about broader historical and cultural change.',
    instructions: [
      'Select ten words from different semantic fields — aim for variety: one word from Old English, two from Middle English, two from the Early Modern period, two borrowed in the 18th/19th centuries, and three contemporary or recent coinages.',
      'Use the Oxford English Dictionary (OED) online, which your school may have access to, or Etymonline as an accessible alternative.',
      'For each word, record: original language of borrowing or creation, approximate date of entry into English, original meaning, any changes in meaning (amelioration, pejoration, broadening, narrowing, metaphorical extension), and one example sentence from a historical period.',
      'Write a 400-word analytical commentary identifying two or three patterns across your ten words (e.g. the influence of Norman French, the role of technology in lexical change).',
      'Include a formatted table of your ten words as an appendix.',
    ],
    resources: [
      'Oxford English Dictionary online (OED — check school login)',
      'Etymonline.com — free etymological reference',
      'David Crystal, "The Stories of English" — chapters on Old and Middle English',
    ],
    timeRequired: '2.5 hours',
    submittable: true,
    feedbackOpportunity: 'Teacher feedback on the quality of etymological research and the sophistication of the analytical commentary.',
    aoAlignment: ['AO1 — accurate terminology for semantic change', 'AO2 — historical language change and external influences on lexis'],
  },

  {
    id: 'ial-ist-u2-02',
    title: 'Comparing Shakespeare to Modern English',
    unit: 'Unit 2',
    type: 'analysis-practice',
    description: 'Select a 20-line extract from a Shakespeare play and rewrite it in contemporary Standard English. Then write an analysis comparing the two versions, focusing on grammatical and lexical changes between Early Modern English and present-day English.',
    instructions: [
      'Choose any 20-line extract from a Shakespeare play — a soliloquy works well.',
      'Work through the extract carefully, consulting a good annotated edition or the No Fear Shakespeare series for help with meaning.',
      'Rewrite the extract in contemporary English, prioritising accuracy of meaning over style.',
      'Present the two versions side by side.',
      'Write a 350-word comparative analysis. Focus on: changes in pronoun usage (thou/thee/ye versus you), verb inflections (-eth, -est endings), vocabulary items that have become archaic or shifted in meaning, and any syntactic inversions that differ from modern word order.',
      'Conclude with a sentence connecting your findings to the concept of prescriptivism versus descriptivism in attitudes to language change.',
    ],
    resources: [
      'Your chosen Shakespeare play — any good annotated edition',
      'No Fear Shakespeare (sparknotes.com/shakespeare) for accessible modern translations',
      'Your class notes on Early Modern English grammatical features',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Peer review in class: partners check each other\'s grammatical analysis for accuracy and completeness.',
    aoAlignment: ['AO1 — grammatical terminology for morphology and syntax', 'AO2 — historical change in grammar and lexis'],
  },

  {
    id: 'ial-ist-u2-03',
    title: 'News Language Then and Now',
    unit: 'Unit 2',
    type: 'analysis-practice',
    description: 'Compare a newspaper front page from at least 50 years ago with a contemporary front page from the same publication. Analyse how the language of journalism has changed, focusing on lexis, grammar, graphology, and formality.',
    instructions: [
      'Source a historical newspaper front page — the British Newspaper Archive (online), your school library, or a newspaper\'s own digital archive are good starting points. Aim for at least 50 years difference.',
      'Select a contemporary front page from the same publication for comparison.',
      'Annotate both pages with linguistic observations before writing.',
      'Write a 500-word comparative analysis structured around at least three linguistic frameworks. For each framework, present an example from each text before explaining the significance of the difference.',
      'Consider the influence of technology on layout, sentence length, use of headline language, vocabulary choices, and the implied relationship between paper and reader.',
      'Include scanned or photographed images of both front pages as an appendix.',
    ],
    resources: [
      'British Newspaper Archive (britishnewspaperarchive.co.uk — check school or local library access)',
      'The Guardian digital archive (guardian.com)',
      'Your class notes on graphology and media language',
    ],
    timeRequired: '2.5 hours',
    submittable: true,
    feedbackOpportunity: 'Submit for teacher feedback with particular focus on framework integration and use of comparative terminology.',
    aoAlignment: ['AO1 — comparative analysis using multiple frameworks', 'AO2 — diachronic change in media language'],
  },

  {
    id: 'ial-ist-u2-04',
    title: 'Language Change Debate: Decline or Evolution?',
    unit: 'Unit 2',
    type: 'peer-discussion',
    description: 'Prepare for and participate in a structured class debate on the motion: "This house believes that the English language is declining." Research both sides, take a position, and then write a post-debate reflection applying key theoretical frameworks.',
    instructions: [
      'Research arguments FOR the motion: focus on prescriptivist perspectives, concerns about literacy standards, the influence of texting and social media on formal writing, and the loss of complex grammatical structures.',
      'Research arguments AGAINST the motion: focus on descriptivist linguistics, evidence that every generation perceives decline, the creativity and adaptability of language change, and the expansion of English vocabulary.',
      'Identify at least three named linguists or commentators for each side (e.g. Simon Heffer and Lynne Truss for prescriptivism; Steven Pinker and David Crystal for descriptivism).',
      'Participate actively in the debate, using at least one direct reference to a linguist or piece of evidence.',
      'Write a 300-word reflection after the debate: what was the strongest argument you heard, and how does it connect to the theoretical frameworks covered in Unit 2?',
    ],
    resources: [
      'David Crystal, "Language and the Internet" — Chapter 1',
      'Steven Pinker, "The Language Instinct" — Chapter 12 (The Language Mavens)',
      'Simon Heffer, "Strictly English" — introduction (prescriptivist perspective)',
    ],
    timeRequired: '2 hours (including preparation)',
    submittable: false,
    feedbackOpportunity: 'Teacher oral feedback during the debate; written reflection submitted for comment.',
    aoAlignment: ['AO3 — evaluating competing perspectives on language change', 'AO2 — prescriptivism and descriptivism'],
  },

  {
    id: 'ial-ist-u2-05',
    title: 'The Language of Technology: Neologism Tracker',
    unit: 'Unit 2',
    type: 'data-collection',
    description: 'Build a personal glossary of 20 technology-related neologisms that have entered English in the past 20 years. For each word, identify its word-formation process, date of coinage or popularisation, and any evidence of semantic shift or spread beyond its original field.',
    instructions: [
      'Brainstorm and list as many technology-related neologisms as you can: think about internet culture, smartphones, social media, artificial intelligence, gaming, and streaming.',
      'Research the origins and dates of 20 of your best examples using OED, Merriam-Webster\'s "Words We\'re Watching" section, and reliable tech journalism.',
      'For each word, complete a structured entry including: the word, part of speech, date of first recorded use, word-formation process (compounding, blending, affixation, conversion, acronym, eponym, etc.), original meaning, current meaning if different, and one example sentence.',
      'Write a 200-word overview identifying the most common word-formation processes in your glossary and what this reveals about how the digital age is shaping language.',
    ],
    resources: [
      'Oxford English Dictionary "Word of the Year" archives (en.oxforddictionaries.com)',
      'Merriam-Webster "Words We\'re Watching" (merriam-webster.com/words-at-play)',
      'Your class notes on word-formation processes',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Glossary reviewed in class; teacher highlights strong examples of word-formation analysis for class discussion.',
    aoAlignment: ['AO1 — accurate identification of word-formation processes', 'AO2 — lexical change and the influence of technology'],
  },

  {
    id: 'ial-ist-u2-06',
    title: 'Historical Text Close Reading',
    unit: 'Unit 2',
    type: 'analysis-practice',
    description: 'Analyse a pre-1900 text of your choice (a letter, a pamphlet, an extract from a novel, or a political speech) using the linguistic frameworks. Identify and explain five specific features that differ from present-day English, demonstrating your knowledge of historical language change.',
    instructions: [
      'Select a pre-1900 text — Project Gutenberg has an enormous free archive of historical texts, or use one provided by your teacher.',
      'Read the whole text or extract before beginning analysis.',
      'Identify at least five linguistic features that reflect the language of the period and would be unusual in contemporary English. Aim for at least three different frameworks.',
      'For each feature, write three to four sentences: quote the example, name the linguistic feature precisely, explain what makes it historically distinctive, and briefly note what the contemporary equivalent would be.',
      'Write a 100-word introduction placing the text in its historical and linguistic context.',
      'Ensure your analysis is genuinely linguistic — avoid focusing on content or historical events at the expense of language analysis.',
    ],
    resources: [
      'Project Gutenberg (gutenberg.org) — free archive of pre-1900 texts',
      'Your class notes on Old, Middle, and Early Modern English features',
      'David Crystal, "Evolving English: One Language, Many Voices" (British Library publication)',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Submit analysis for teacher feedback focused on depth of historical linguistic knowledge and accuracy of framework application.',
    aoAlignment: ['AO1 — framework-based textual analysis', 'AO2 — knowledge of historical English language change'],
  },

  // ── UNIT 3: Investigating Language ─────────────────────────────────────────

  {
    id: 'ial-ist-u3-01',
    title: 'Research Question Brainstorm and Refinement',
    unit: 'Unit 3',
    type: 'writing-practice',
    description: 'Generate a longlist of 10 potential research questions for your Unit 3 investigation, then apply a set of evaluative criteria to narrow down to your top two, writing a rationale for each.',
    instructions: [
      'Spend 20 minutes free-writing potential research questions. Think about language and gender, age, ethnicity, region, online communication, power, occupation, or any topic that genuinely interests you.',
      'Review your longlist against four criteria: (1) Is it linguistically focused — does it ask about language, not just about a social phenomenon? (2) Is the data collectible — can you realistically gather primary data? (3) Is it focused enough for a 2,500-word investigation? (4) Is there existing academic literature to draw on?',
      'Apply the criteria honestly to reduce your list to two strong candidates.',
      'For each of your top two questions, write a 150-word rationale explaining why the question is appropriate and what methods you might use.',
      'Bring your shortlist to a tutorial with your teacher for discussion.',
    ],
    resources: [
      'Your Unit 3 specification guidance and mark scheme',
      'Your teacher\'s guidance on appropriate investigation topics',
      'Language and Linguistics journals for inspiration: Journal of Sociolinguistics, Language in Society',
    ],
    timeRequired: '1.5 hours',
    submittable: true,
    feedbackOpportunity: 'Individual or small-group tutorial with teacher to discuss the viability and focus of your top two questions.',
    aoAlignment: ['AO1 — clear articulation of research focus', 'AO4 — independent investigation planning'],
  },

  {
    id: 'ial-ist-u3-02',
    title: 'Methodology Review: Comparing Data Collection Approaches',
    unit: 'Unit 3',
    type: 'research',
    description: 'Research three different data collection methods used in sociolinguistic investigations (e.g. interview, observation, corpus analysis, questionnaire, experiment). For each method, summarise the strengths and limitations, and decide which best suits your investigation.',
    instructions: [
      'Research three of the following methods: ethnographic observation, sociolinguistic interview, matched guise test, questionnaire/survey, corpus analysis, discourse completion task, or text-based data collection.',
      'For each method, write a structured summary of 150 to 200 words covering: what the method involves, what kinds of data it produces, its main strengths, and its main limitations (including ethical considerations).',
      'Note at least one named linguist or study that has used each method.',
      'Write a 200-word conclusion explaining which method or combination of methods you are considering for your own investigation and why.',
    ],
    resources: [
      'Guy Cook and Sara Aldridge, research methodology chapters in A-level English Language textbooks',
      'Ronald Wardhaugh, "An Introduction to Sociolinguistics" — methodology chapter',
      'Your school\'s ethics guidelines for student research',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Teacher written feedback on the thoroughness of your methodology review and the suitability of your proposed approach.',
    aoAlignment: ['AO4 — understanding of research methodology', 'AO2 — knowledge of sociolinguistic research traditions'],
  },

  {
    id: 'ial-ist-u3-03',
    title: 'Pilot Data Collection and Reflection',
    unit: 'Unit 3',
    type: 'data-collection',
    description: 'Conduct a small-scale pilot of your chosen data collection method, gather a limited sample, and write a reflective evaluation of what worked well and what you would change before the main data collection phase.',
    instructions: [
      'Before the pilot, write down exactly what you expect to find (your working hypothesis) and any concerns you have about the method.',
      'Conduct your pilot with one or two participants or a small sample of texts — this is a test run, not your main data.',
      'After the pilot, review what you collected: was the data rich enough? Did the method produce the kind of language you were hoping to analyse? Were there any practical problems?',
      'Write a 350-word reflective evaluation addressing: what the pilot revealed about the method, any adjustments you need to make to your research question, consent forms, or procedure, and what you would do differently.',
      'Note any ethical issues that arose and how you addressed or plan to address them.',
    ],
    resources: [
      'Your draft methodology from the previous task',
      'Your school\'s consent form templates',
      'Advice on reflexivity in qualitative research from your teacher or A-level textbook',
    ],
    timeRequired: '2 to 3 hours',
    submittable: true,
    feedbackOpportunity: 'Tutorial with teacher to review pilot findings and confirm methodology before full data collection.',
    aoAlignment: ['AO4 — reflective research practice', 'AO1 — accurate record-keeping and methodological awareness'],
  },

  {
    id: 'ial-ist-u3-04',
    title: 'Literature Review for Your Investigation',
    unit: 'Unit 3',
    type: 'reading',
    description: 'Identify, read, and summarise three to five academic sources relevant to your investigation topic. Write a short literature review that synthesises the key theoretical positions and sets up the rationale for your own research.',
    instructions: [
      'Use Google Scholar, JSTOR, or your school library to find three to five academic sources relevant to your topic (journal articles, book chapters, or research reports).',
      'Read each source carefully, taking structured notes: main argument, key evidence, theoretical framework used, and relevance to your investigation.',
      'Write a literature review of 400 to 500 words. Do not simply summarise sources one by one — instead, organise by theme or argument and show how sources agree, disagree, or complement each other.',
      'End your literature review with a paragraph explaining what gap your investigation fills or what question it will explore in more depth.',
      'Include a reference list in a consistent citation format (APA or Harvard).',
    ],
    resources: [
      'Google Scholar (scholar.google.com)',
      'JSTOR — journal articles in linguistics (jstor.org — check school access)',
      'Your teacher\'s reading list for Unit 3',
    ],
    timeRequired: '3 hours',
    submittable: true,
    feedbackOpportunity: 'Teacher written feedback on quality of source selection, synthesis, and academic writing style.',
    aoAlignment: ['AO2 — application of relevant linguistic theory', 'AO4 — independent research and literature engagement'],
  },

  {
    id: 'ial-ist-u3-05',
    title: 'Quantitative and Qualitative Analysis Practice',
    unit: 'Unit 3',
    type: 'analysis-practice',
    description: 'Take a provided data set (or one collected during your pilot) and practise applying both quantitative methods (counting, frequency tables, percentages) and qualitative methods (close linguistic analysis). Write a comparative reflection on what each approach reveals.',
    instructions: [
      'Use a data set of at least 10 texts or extracts (you can use the sample data sets your teacher has provided, or your own pilot data).',
      'Apply a quantitative approach first: count instances of a specific feature (e.g. use of hedges, sentence length, use of passive voice, frequency of a particular word class). Create a simple frequency table or bar chart.',
      'Apply a qualitative approach to the three most interesting examples: close-read each, applying relevant linguistic frameworks and terminology.',
      'Write a 300-word reflection: what does counting tell you that close reading cannot? What does close reading reveal that counting misses? Which approach seems most suitable for your investigation, or would a mixed-methods approach be stronger?',
    ],
    resources: [
      'Your class notes on quantitative versus qualitative research methods',
      'Your teacher\'s sample data sets',
      'Norbert Schmitt, "Researching Vocabulary" — Chapter 2 on research design (concepts applicable to linguistics broadly)',
    ],
    timeRequired: '1.5 hours',
    submittable: false,
    feedbackOpportunity: 'Bring your reflection to a seminar discussion on research methodology; teacher will facilitate comparison of approaches.',
    aoAlignment: ['AO4 — research methodology', 'AO1 — accurate data analysis and presentation'],
  },

  {
    id: 'ial-ist-u3-06',
    title: 'Draft Introduction and Methodology Section',
    unit: 'Unit 3',
    type: 'writing-practice',
    description: 'Write a full draft of the introduction and methodology sections of your Unit 3 investigation. Aim for the introduction to contextualise your research question and the methodology section to explain and justify your data collection and analysis approach.',
    instructions: [
      'Draft your introduction (300 to 400 words): begin with a broad contextualising statement, narrow to your specific topic, briefly review relevant literature, and state your research question and any hypotheses clearly.',
      'Draft your methodology section (300 to 400 words): describe exactly what data you collected, from whom or where, how you selected it, what methods you used to analyse it, and how you addressed ethical considerations.',
      'Ensure your methodology section is written in sufficient detail that a reader could replicate your study.',
      'Proofread both sections for clarity, accuracy of terminology, and citation accuracy.',
      'Submit the draft for teacher feedback before writing your analysis and discussion sections.',
    ],
    resources: [
      'Your literature review from the previous task',
      'Unit 3 mark scheme and examiner guidance from your teacher',
      'Examples of previous successful investigations (anonymised) if available from your teacher',
    ],
    timeRequired: '2.5 hours',
    submittable: true,
    feedbackOpportunity: 'Detailed written teacher feedback on the draft, focusing on research question clarity, methodological justification, and academic register.',
    aoAlignment: ['AO1 — academic writing and terminology', 'AO4 — investigation planning, structure, and ethical awareness'],
  },

  // ── UNIT 4: Language over Time / Writing for Different Purposes ────────────

  {
    id: 'ial-ist-u4-01',
    title: 'Crafting an Original Narrative: Voice and Register',
    unit: 'Unit 4',
    type: 'writing-practice',
    description: 'Write two short narrative pieces (250 words each) on the same event but from two different perspectives with contrasting narrative voices. Then write a 200-word commentary analysing the linguistic choices you made in each piece.',
    instructions: [
      'Choose a simple but evocative event: a missed train, an argument, finding something lost, a first day somewhere new.',
      'Write the first piece in first-person voice with an introspective, literary tone: use complex syntax, figurative language, and a rich lexical palette.',
      'Write the second piece in second-person or close third-person with a terse, journalistic or conversational tone: shorter sentences, plainer lexis, more direct pragmatic address.',
      'In your commentary, identify and explain at least three specific linguistic choices from each piece (six total), using precise terminology.',
      'Reflect briefly on how perspective and purpose shape register.',
    ],
    resources: [
      'Your class anthology of stylistic models',
      'Your class notes on narrative voice, focalization, and register',
      'Any short story collection that demonstrates contrasting styles (e.g. Raymond Carver for minimalism; Ali Smith for linguistic play)',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Teacher feedback on the sophistication of stylistic choice and the quality of the analytical commentary.',
    aoAlignment: ['AO5 — crafting original writing with deliberate linguistic choices', 'AO1 — analytical commentary on own writing'],
  },

  {
    id: 'ial-ist-u4-02',
    title: 'Stylistic Imitation: Writing in the Style of a Published Author',
    unit: 'Unit 4',
    type: 'writing-practice',
    description: 'Select a published author whose prose style is distinctive. Write a 300-word passage in their style, then produce an annotated list identifying the specific linguistic features you imitated.',
    instructions: [
      'Choose an author with a recognisable, analysable style. Strong choices include: Virginia Woolf (stream of consciousness, long syntactic chains, sensory detail), Ernest Hemingway (minimalism, short declaratives, understatement), Zadie Smith (multicultural lexis, free indirect style, essayistic intrusions), or Kazuo Ishiguro (irony, understatement, first-person unreliable narration).',
      'Read several pages of your chosen author before writing — get their rhythm in your head.',
      'Write a 300-word passage that imitates their style. You may use any subject matter, but it should feel authentically in their manner.',
      'Produce an annotated list of at least eight specific linguistic features you consciously imitated, with a brief example and explanation for each.',
      'Reflect in two to three sentences on what the imitation process taught you about how the author uses language.',
    ],
    resources: [
      'Your chosen author\'s published work',
      'Your class notes on stylistics and prose analysis',
      'Paddy Crewe, "Advanced English Language" — stylistics section',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Workshop session where two or three pieces are read aloud anonymously and peers identify the author being imitated.',
    aoAlignment: ['AO5 — crafting writing with conscious stylistic control', 'AO1 — accurate application of stylistic terminology'],
  },

  {
    id: 'ial-ist-u4-03',
    title: 'Writing for Different Audiences: Adapting a Complex Idea',
    unit: 'Unit 4',
    type: 'writing-practice',
    description: 'Take a complex linguistic or scientific concept and write three short explanations of it — one for a 10-year-old, one for an informed adult non-specialist, and one for an academic peer. Analyse the register shifts you made in a 250-word commentary.',
    instructions: [
      'Choose a genuinely complex concept: the arbitrariness of the sign (Saussure), the Sapir-Whorf hypothesis, Chomsky\'s universal grammar, code-switching, or the great vowel shift are all suitable.',
      'Write approximately 150 words on the concept for each of the three audiences.',
      'As you write, think carefully about: vocabulary level and the use of analogy, sentence complexity and length, degree of assumed knowledge, use of examples, and tone and pragmatic relationship with the reader.',
      'In your commentary, identify and analyse at least two specific linguistic choices from each version that reflect the target audience, using register, lexis, and pragmatic terminology.',
    ],
    resources: [
      'Your class notes on audience, purpose, and register',
      'Any good popular-science writing model (e.g. articles from "New Scientist" or "The Conversation")',
      'Your textbook explanations of the concept you choose as a starting point',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Peer feedback: classmates identify which version they find clearest and most appropriate; discussion of what works for each audience.',
    aoAlignment: ['AO5 — adapting writing for purpose and audience', 'AO1 — register, lexis, and pragmatic analysis'],
  },

  {
    id: 'ial-ist-u4-04',
    title: 'Directed Writing: Persuasive Speech',
    unit: 'Unit 4',
    type: 'writing-practice',
    description: 'Write a 500-word persuasive speech on a topic related to language (e.g. "Schools should teach linguistics", "Dialect should be celebrated, not corrected", "Social media is enriching the English language"). Deliver it to a small group and evaluate the feedback you receive.',
    instructions: [
      'Choose your topic and decide on your position. You do not have to argue what you personally believe — arguing the harder position is good practice.',
      'Plan your speech with an engaging opening, three to four structured arguments, acknowledgement and rebuttal of a counter-argument, and a memorable conclusion.',
      'Draft the speech at 500 words. Focus on: rhetorical devices (tricolon, anaphora, antithesis, direct address, rhetorical question), sentence variety for rhythmic effect, appropriate register for a formal speaking context, and ethos, pathos, and logos as persuasive modes.',
      'Deliver your speech to a small group or record yourself delivering it.',
      'Write a 150-word evaluation: which linguistic choices were most effective, and what would you change?',
    ],
    resources: [
      'Your class notes on rhetoric and persuasive language',
      'Example speeches from TED Talks or parliamentary debates',
      'George Orwell, "Politics and the English Language" — for a famous example of argumentative prose about language',
    ],
    timeRequired: '2.5 hours',
    submittable: true,
    feedbackOpportunity: 'Oral feedback from the small group and teacher; written evaluation submitted separately.',
    aoAlignment: ['AO5 — crafting writing for specific purpose, audience, and form', 'AO1 — rhetorical and pragmatic analysis of own writing'],
  },

  {
    id: 'ial-ist-u4-05',
    title: 'Critical Commentary Practice',
    unit: 'Unit 4',
    type: 'revision',
    description: 'Practise writing a critical commentary on a piece of your own writing under timed conditions. Focus on demonstrating meta-linguistic awareness: the ability to reflect analytically on your own linguistic choices.',
    instructions: [
      'Choose a piece of your own writing from earlier in the course (your stylistic imitation, persuasive speech, or one of your narrative pieces).',
      'Set a timer for 25 minutes.',
      'Write a commentary of 250 to 300 words that addresses: what your intended purpose and audience was, what register you selected and why, at least four specific linguistic choices (with examples) and the effect you were aiming for, and one thing you would change if you redrafted it.',
      'After the timer, review your commentary: have you used at least six different linguistic terms accurately? Have you focused on language choices rather than content? Have you evaluated rather than just described?',
      'Highlight any terms you used inaccurately or vaguely and look them up.',
    ],
    resources: [
      'Your own writing portfolio from the course',
      'Unit 4 mark scheme descriptors (your teacher will provide these)',
      'Your class notes on writing commentaries',
    ],
    timeRequired: '45 minutes (timed task)',
    submittable: true,
    feedbackOpportunity: 'Teacher marks the commentary against the Unit 4 AO descriptors and provides a grade with written targets.',
    aoAlignment: ['AO1 — meta-linguistic analysis of own writing', 'AO5 — understanding of purpose, audience, and form in own writing'],
  },

  {
    id: 'ial-ist-u4-06',
    title: 'Reading as a Writer: Annotating a Model Text',
    unit: 'Unit 4',
    type: 'reading',
    description: 'Select and closely annotate a published piece of writing you admire — a newspaper column, a chapter opening, an essay, a speech — identifying the specific techniques that make it effective. Write a 300-word reflection on what you have learned as a writer.',
    instructions: [
      'Choose a piece of writing that genuinely impressed or moved you. It should be at least 400 words long.',
      'Read it twice before annotating: once for overall response, once for linguistic detail.',
      'Annotate the text using different colours or symbols for different frameworks: lexical choices, syntactic patterns, phonological effects, pragmatic strategies, structural moves.',
      'Aim for at least 15 specific annotations — each should name a feature, quote the example, and note the effect.',
      'Write a 300-word reflection: what three to four techniques will you consciously try to use in your own writing, and what does this text teach you about the relationship between reading and writing?',
    ],
    resources: [
      'A newspaper, literary magazine, or essay collection of your choice',
      'Your class notes on the frameworks to use for annotation',
      'Your teacher\'s model annotations from class (if available)',
    ],
    timeRequired: '1.5 hours',
    submittable: true,
    feedbackOpportunity: 'Share the annotated text and reflection with a partner; discuss which features you each found most striking and worth imitating.',
    aoAlignment: ['AO5 — developing as an independent writer through critical reading', 'AO1 — analytical annotation using linguistic frameworks'],
  },

  // ── GENERAL (Cross-unit enrichment) ────────────────────────────────────────

  {
    id: 'ial-ist-gen-01',
    title: 'Linguistics in the News: Monthly Reading Log',
    unit: 'General',
    type: 'reading',
    description: 'Keep a monthly log of news stories, podcasts, or online articles about language and linguistics. Write a brief analytical response (100 to 150 words) to each item, connecting it to a specific topic or theory from your course.',
    instructions: [
      'Set up a simple digital or paper log with columns for: date, source, topic, summary (2 to 3 sentences), and connection to the course (specific unit, topic, or named theory).',
      'Aim to log at least two items per month throughout the year.',
      'Recommended sources: the Guardian\'s language section, the Economist\'s Johnson column, the BBC\'s "Sounds Familiar" and "Voices" resources, Language Log blog (languagelog.ldc.upenn.edu), and the Linguistics Society of America\'s public-facing content.',
      'For each entry, write 100 to 150 words connecting the news item to course content: name the relevant theory or concept, explain the connection, and give your own brief evaluation.',
      'Review your log at the end of each term and identify the three entries that were most valuable to your learning.',
    ],
    resources: [
      'The Guardian — language section (theguardian.com/books/series/languageissues)',
      'Language Log blog (languagelog.ldc.upenn.edu)',
      'The Economist "Johnson" language column',
    ],
    timeRequired: '20 to 30 minutes per entry',
    submittable: true,
    feedbackOpportunity: 'Share the most interesting entry with the class each month; teacher highlights the strongest examples of theoretical application.',
    aoAlignment: ['AO2 — breadth of linguistic knowledge and cultural awareness', 'AO3 — engagement with contemporary linguistic debate'],
  },

  {
    id: 'ial-ist-gen-02',
    title: 'Personal Linguistic Autobiography',
    unit: 'General',
    type: 'writing-practice',
    description: 'Write a 600-word linguistic autobiography reflecting on your own language history: your dialect, any languages you speak, how your language use has changed, and how language reflects your identity.',
    instructions: [
      'Reflect on your own language history: What dialect or accent did you grow up with? Have you ever changed how you speak in different contexts? Do you speak more than one language or variety? Have you been judged or complimented on your language?',
      'Draft a 600-word autobiographical essay. This should be written in an engaging, reflective register — personal but intellectually aware.',
      'Connect your personal reflections to at least three linguistic concepts from the course: relevant theoretical frameworks might include code-switching, style-shifting, accommodation theory (Giles), the linguistic marketplace (Bourdieu), or language and identity models.',
      'Integrate the linguistic concepts naturally — do not write a separate analytical section, but weave the theory into your reflection.',
      'Consider your audience: a fellow linguistics student who would be interested in both the personal story and the theoretical connections.',
    ],
    resources: [
      'Your class notes on identity and language (Unit 1)',
      'Janet Holmes, "An Introduction to Sociolinguistics" — chapters on identity',
      'Any published linguistic autobiography for inspiration (e.g. Amy Tan, "Mother Tongue"; James Baldwin, "If Black English Isn\'t a Language, Then Tell Me, What Is?")',
    ],
    timeRequired: '2 hours',
    submittable: true,
    feedbackOpportunity: 'Teacher written feedback on the balance between personal reflection and theoretical application, and on the quality of the academic-personal register.',
    aoAlignment: ['AO1 — integrating terminology in extended writing', 'AO2 — applying identity and sociolinguistic theory to personal experience'],
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// RECOMMENDED READING  (20 items)
// ─────────────────────────────────────────────────────────────────────────────

export const ialRecommendedReading: RecommendedReading[] = [

  {
    id: 'ial-rr-01',
    title: 'The Language Instinct: How the Mind Creates Language',
    author: 'Steven Pinker',
    type: 'popular-linguistics',
    unit: 'General / Unit 1 / Unit 2',
    synopsis: 'Pinker argues that language is a biological instinct, shaped by natural selection and hardwired into the human brain. Drawing on cognitive science, linguistics, and evolutionary biology, he defends the view that language is a uniquely human adaptation rather than a cultural invention.',
    whyRecommended: 'Provides an accessible and engaging introduction to the core debates in linguistics: the nature-nurture question, universal grammar, language acquisition, and prescriptivism versus descriptivism. Chapter 12, "The Language Mavens", is essential reading for Unit 2 debates about language change and decline.',
    keyIdeas: [
      'Language as an evolved biological instinct, not a cultural invention',
      'Noam Chomsky\'s universal grammar and the language acquisition device',
      'The poverty of the stimulus argument for innate grammatical knowledge',
      'Prescriptivism versus descriptivism: why "language mavens" are often wrong',
      'Creoles and pidgins as evidence for universal grammatical structure',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-02',
    title: 'Txtng: The Gr8 Db8',
    author: 'David Crystal',
    type: 'popular-linguistics',
    unit: 'Unit 2 / General',
    synopsis: 'Crystal\'s lively and evidence-based response to moral panics about texting and the English language. He examines the actual linguistic features of text messages and argues that texting promotes rather than undermines literacy, drawing on historical parallels with previous panics about new technologies.',
    whyRecommended: 'Directly relevant to Unit 2 debates about language change, technology, and attitudes to non-standard language. Crystal\'s descriptive approach and use of evidence is an excellent model for evaluating arguments about language decline. Also relevant to discussions of CMC in Unit 1.',
    keyIdeas: [
      'Textisms as a form of deliberate, creative linguistic play rather than ignorant error',
      'Historical parallels: every generation has feared a new technology will corrupt language',
      'The myth that texting causes poor spelling — evidence from research studies',
      'Graphological features of digital communication as a new register, not a degraded one',
      'The relationship between abbreviation and playfulness in language history',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-03',
    title: 'Language and Woman\'s Place',
    author: 'Robin Lakoff',
    type: 'academic',
    unit: 'Unit 1',
    synopsis: 'The 1975 founding text of feminist linguistics, in which Lakoff argues that women are socialised to speak in a distinctive, tentative style — characterised by hedges, tag questions, and indirect speech acts — which reflects and reinforces their subordinate social position.',
    whyRecommended: 'Essential theoretical background for Unit 1 study of gender and language. Lakoff\'s deficit model is the starting point for all subsequent debates in the field, and the book rewards reading critically: its methodology has been widely questioned, making it excellent material for AO3 evaluation practice.',
    keyIdeas: [
      'The deficit model: women\'s language as deviant from a male norm',
      'Features of "women\'s language": hedges, tag questions, empty adjectives, polite forms',
      'Language as a reflection of women\'s subordinate social status',
      'The double bind: women are criticised for being too assertive or too tentative',
      'Methodology critique: based on introspection rather than empirical data',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ial-rr-04',
    title: 'The Myth of Mars and Venus',
    author: 'Deborah Cameron',
    type: 'popular-linguistics',
    unit: 'Unit 1',
    synopsis: 'Cameron demolishes popular claims about fundamental differences between male and female communication styles, arguing that the "men are from Mars, women are from Venus" narrative is not supported by research evidence and actively harms gender equality.',
    whyRecommended: 'An essential critical counterpoint to Tannen and the popular literature on gender and language. Cameron\'s forensic evaluation of research claims is a model of how to assess evidence, and the book directly supports AO3 skills in evaluating competing perspectives on gender and language.',
    keyIdeas: [
      'The difference model and its popular appeal versus its evidential basis',
      'Confirmation bias in research on gender and language',
      'Overlapping distributions: more variation within genders than between them',
      'The political implications of claiming fundamental communicative differences',
      'A call for descriptive research over prescriptive gender narratives',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-05',
    title: 'You Just Don\'t Understand: Women and Men in Conversation',
    author: 'Deborah Tannen',
    type: 'popular-linguistics',
    unit: 'Unit 1',
    synopsis: 'Tannen\'s influential popularisation of the difference model of gender and language, arguing that men and women approach conversation with different goals: men seek status and independence (report talk), while women seek connection and closeness (rapport talk).',
    whyRecommended: 'Widely cited in Unit 1 study and highly readable. Should be read alongside Cameron\'s critique to develop a balanced, evaluative understanding of the gender and language debate. Tannen\'s conversational examples are useful for classroom data analysis.',
    keyIdeas: [
      'Report talk (masculine) versus rapport talk (feminine)',
      'Cross-cultural communication model: male and female styles as learned culturally',
      'Men and women\'s different conversational goals leading to miscommunication',
      'The difference model as distinct from the deficit and dominance models',
      'Criticism: tends towards essentialism and ignores power and context',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-06',
    title: 'The Stories of English',
    author: 'David Crystal',
    type: 'popular-linguistics',
    unit: 'Unit 2',
    synopsis: 'A sweeping, readable history of the English language from its Anglo-Saxon origins to the present day, with particular emphasis on non-standard varieties, regional dialects, and the stories of ordinary speakers rather than just literary and official uses of the language.',
    whyRecommended: 'Essential background reading for Unit 2. Crystal\'s descriptive approach and his championing of dialect and non-standard varieties provides an excellent counterpoint to prescriptivist attitudes. The historical sweep helps students understand language change as a continuous, natural process.',
    keyIdeas: [
      'The diversity of English from the very beginning — no single Standard English',
      'Anglo-Saxon, Old Norse, Norman French, and Latin as layers of influence',
      'The role of printing in standardising spelling and grammar',
      'Dialect as a rich form of language, not a corrupted form of Standard English',
      'Language change as driven by social forces, migration, and contact',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-07',
    title: 'Sociolinguistics: An Introduction to Language and Society',
    author: 'Peter Trudgill',
    type: 'academic',
    unit: 'Unit 1 / Unit 2',
    synopsis: 'One of the most widely used introductions to sociolinguistics, covering dialect, accent, language and gender, language change, multilingualism, and the social stratification of language use. Trudgill writes with characteristic clarity and uses accessible British examples throughout.',
    whyRecommended: 'The clearest academic introduction to the core theories and concepts of sociolinguistics. Recommended for any student who wants a solid theoretical foundation for Units 1 and 2. Trudgill\'s work on dialect and prestige is particularly valuable.',
    keyIdeas: [
      'Covert and overt prestige in dialect evaluation',
      'Social stratification of language: class, gender, age, and ethnicity',
      'Language change as socially motivated and regular',
      'Standard language ideology and its social functions',
      'Diglossia and code-switching in multilingual communities',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ial-rr-08',
    title: 'Watching the English: The Hidden Rules of English Behaviour',
    author: 'Kate Fox',
    type: 'popular-linguistics',
    unit: 'Unit 1',
    synopsis: 'An anthropologist\'s amusing and insightful study of English social behaviour and culture, with substantial sections on the social rules governing English conversation, politeness, class, and language use. Fox applies social anthropological methods to everyday English interactions.',
    whyRecommended: 'Excellent for Unit 1 discussions of pragmatics, politeness theory, and the social functions of language. Fox writes accessibly and humorously, making abstract sociolinguistic ideas vivid through real examples. Useful for thinking about face-saving behaviour and politeness strategies.',
    keyIdeas: [
      'The English use of weather talk as a social lubricant and face-saving ritual',
      'Class and language: how vocabulary and accent signal social position',
      'Irony and understatement as distinctively English communicative strategies',
      'Politeness as a governing principle of English conversation',
      'The social rules of queue behaviour, moaning, and other culturally specific genres',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-09',
    title: 'Through the Language Glass: Why the World Looks Different in Other Languages',
    author: 'Guy Deutscher',
    type: 'popular-linguistics',
    unit: 'Unit 1 / Unit 2',
    synopsis: 'Deutscher revisits the Sapir-Whorf hypothesis with new evidence, arguing that language does influence thought in measurable ways — not in the strong version that language determines thought, but in a weaker and more interesting form. He draws on colour perception, spatial cognition, and grammatical gender.',
    whyRecommended: 'Provides an engaging, balanced treatment of linguistic relativity — a key theoretical debate for A-level. Deutscher models excellent academic thinking: he evaluates evidence carefully and resists oversimplification. Useful for Unit 1 discussions of language and thought.',
    keyIdeas: [
      'The Sapir-Whorf hypothesis: strong (linguistic determinism) versus weak (linguistic relativity) versions',
      'Colour vocabulary and perception: how naming categories shape colour discrimination',
      'Spatial language and its influence on mental representations of direction',
      'Grammatical gender and conceptual associations',
      'Language as a lens that can influence habitual thought patterns',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ial-rr-10',
    title: 'Language and the Internet',
    author: 'David Crystal',
    type: 'popular-linguistics',
    unit: 'Unit 2 / General',
    synopsis: 'Crystal examines the emergence of "Netspeak" as a new medium of communication — neither wholly spoken nor wholly written — and analyses the distinctive linguistic features of email, chat, instant messaging, and online communities in the early internet age.',
    whyRecommended: 'Foundational text for discussions of computer-mediated communication and language change driven by technology. Although written before smartphones and social media, Crystal\'s analytical framework remains valuable. Reading it alongside more recent scholarship on CMC demonstrates how quickly the field evolves.',
    keyIdeas: [
      'Netspeak as a new medium distinct from both speech and writing',
      'The spoken-written continuum and where CMC sits upon it',
      'Synchronous versus asynchronous online communication and their different linguistic features',
      'The democracy of online language: anyone can publish and influence usage',
      'Creative and playful features of internet language (emoticons, abbreviations, capitalisation)',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-11',
    title: 'The Dialects of England',
    author: 'Peter Trudgill',
    type: 'academic',
    unit: 'Unit 1 / Unit 2',
    synopsis: 'A systematic and authoritative survey of the regional dialects of England, covering phonological, lexical, and grammatical variation across the country. Trudgill draws on Survey of English Dialects data and more recent research to map the extraordinary diversity of English within a single nation.',
    whyRecommended: 'The standard academic reference for regional dialect variation in England. Directly relevant to Unit 1 study of dialect and identity and Unit 2 study of language change. Students studying specific dialects for their investigations will find it invaluable.',
    keyIdeas: [
      'The traditional dialect areas of England and their origins in Anglo-Saxon settlement patterns',
      'The isogloss: how dialect boundaries are drawn and why they are fuzzy',
      'Dialect levelling: the reduction of regional features under standardisation and mobility',
      'Rhoticity, vowel systems, and consonantal variation across English regions',
      'The survival of dialect features in rural areas and working-class urban communities',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ial-rr-12',
    title: 'An Introduction to Sociolinguistics',
    author: 'Janet Holmes',
    type: 'academic',
    unit: 'Unit 1 / Unit 3',
    synopsis: 'A comprehensive and student-friendly introduction to sociolinguistics, widely used on undergraduate courses. Holmes covers all the major topics: variation, multilingualism, gender, politeness, language change, and language attitudes, with clear frameworks and well-chosen examples.',
    whyRecommended: 'The most accessible academic introduction to sociolinguistics at a level slightly above the A-level textbook. Particularly useful for Unit 3 students who need a solid theoretical framework for their investigations. Holmes\'s treatment of politeness theory and face is especially clear.',
    keyIdeas: [
      'Social and stylistic variation: axes of variation in language use',
      'Politeness theory: Brown and Levinson\'s face-threatening act model',
      'Language and gender: an overview of key theories and evidence',
      'Attitudes to language variation: the matched guise experiment',
      'Language planning and standardisation',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ial-rr-13',
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    type: 'literary',
    unit: 'Unit 1 / Unit 2',
    synopsis: 'Orwell\'s dystopian novel imagines a totalitarian society in which language itself is weaponised for political control. The invented language "Newspeak" is designed to make dissident thought literally inexpressible by progressively eliminating vocabulary.',
    whyRecommended: 'Essential for discussions of the relationship between language and thought, language and power, and deliberate language change as a political tool. The appendix on Newspeak is a standalone essay on prescriptivism and linguistic engineering. Pairs excellently with the Sapir-Whorf hypothesis and with Orwell\'s own essay "Politics and the English Language".',
    keyIdeas: [
      'Newspeak: the idea that controlling vocabulary controls thought',
      'Doublethink and the political manipulation of semantic meaning',
      'Language and power: who controls discourse controls reality',
      'Euphemism and propaganda as real-world parallels to Newspeak',
      'The Appendix on Newspeak as a prescriptivist thought experiment',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-14',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    type: 'literary',
    unit: 'Unit 1',
    synopsis: 'Atwood\'s dystopian novel depicts a theocratic society in which women\'s language is systematically controlled and suppressed. The narrator reflects on the power of naming, the politics of storytelling, and the relationship between language, identity, and resistance.',
    whyRecommended: 'Rich with linguistic themes relevant to Unit 1: language and power, language and identity, the politics of naming, and gendered language. Atwood\'s own comments on language in interviews are worth seeking out. Excellent for thinking about the relationship between narrative voice and identity construction.',
    keyIdeas: [
      'The politics of naming and renaming (Offred = of Fred) as identity erasure',
      'Language as a tool of oppression and also of resistance',
      'Narrative voice and the unreliable female narrator as a linguistic and political construct',
      'The suppression of women\'s writing and speaking as a mechanism of patriarchal control',
      'Atwood\'s "historical notes" coda as a commentary on how stories are framed and controlled',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-15',
    title: 'Small Island',
    author: 'Andrea Levy',
    type: 'literary',
    unit: 'Unit 1',
    synopsis: 'Levy\'s Booker Prize-winning novel follows Jamaican immigrants arriving in post-war Britain, exploring themes of race, identity, belonging, and the complex relationship between Caribbean English and British English. The novel\'s multiple narrators speak in strikingly different voices.',
    whyRecommended: 'Exceptional for exploring how dialect, accent, and code-switching relate to identity, belonging, and power. Levy\'s representation of Caribbean English and its reception in Britain connects directly to Unit 1 topics on accent discrimination, ethnicity, and language. The multi-voiced narrative structure is itself a linguistic argument about perspective.',
    keyIdeas: [
      'Dialect as a marker of identity and belonging — and of exclusion',
      'Accent and racial prejudice: how language becomes a site of discrimination',
      'Code-switching between Jamaican Creole and Standard English as identity negotiation',
      'Multiple narrative voices as a structural representation of competing language varieties',
      'The history of Caribbean English and its relationship to British English',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-16',
    title: 'White Teeth',
    author: 'Zadie Smith',
    type: 'literary',
    unit: 'Unit 1',
    synopsis: 'Smith\'s debut novel is set in multicultural North London and explores the lives of second-generation immigrants negotiating British identity, cultural heritage, and belonging. The novel\'s language is itself a rich mix of registers, dialects, and cultural references.',
    whyRecommended: 'A vivid literary representation of MLE, code-switching, and the relationship between language and multicultural identity in contemporary Britain. Smith\'s prose style is highly analysable — a model for Unit 4 stylistic imitation — and the themes connect directly to Unit 1 discussions of ethnicity, identity, and language.',
    keyIdeas: [
      'Multicultural London English as a literary medium and political statement',
      'Second-generation immigrant identity negotiated through language choice',
      'Code-switching between South Asian languages, MLE, and Standard English',
      'Register shifting as a character-building tool in literary fiction',
      'The relationship between naming (White Teeth, Iqbal, Jones) and cultural identity',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-17',
    title: 'Strictly English: The Correct Way to Write -- and Why It Matters',
    author: 'Simon Heffer',
    type: 'popular-linguistics',
    unit: 'Unit 2',
    synopsis: 'Heffer\'s forceful defence of Standard English usage, arguing that clarity and precision in writing depend on adherence to grammatical rules that are being eroded by careless education and cultural decline. An uncompromising prescriptivist manifesto.',
    whyRecommended: 'Essential reading as a prescriptivist counterpoint to the descriptivist mainstream of academic linguistics. Reading Heffer alongside Crystal and Pinker gives students a genuine debate to evaluate for Unit 2. Students who engage critically with Heffer\'s arguments will develop strong AO3 evaluation skills.',
    keyIdeas: [
      'The prescriptivist case: rules exist to preserve clarity and precision',
      'Grammar as the foundation of clear thought and effective communication',
      'The alleged decline of Standard English in education and public life',
      'Snobbery or principle? The class politics of prescriptivism',
      'Specific targets: split infinitives, dangling modifiers, the misuse of "literally"',
    ],
    difficulty: 'accessible',
  },

  {
    id: 'ial-rr-18',
    title: 'Language in the News',
    author: 'Roger Fowler',
    type: 'academic',
    unit: 'Unit 2 / Unit 3',
    synopsis: 'Fowler applies critical discourse analysis to British newspaper language, arguing that news texts are not neutral reports of facts but ideologically charged constructions that naturalise particular social views. He analyses transitivity, naming, and modality as tools of ideological representation.',
    whyRecommended: 'Directly relevant to media language analysis and the concept of critical discourse analysis (CDA), which is useful for both Unit 2 and Unit 3 investigations. Fowler\'s analytical method is a model for how to move from linguistic observation to ideological interpretation.',
    keyIdeas: [
      'Critical discourse analysis: language as ideological practice',
      'Transitivity and how the choice of active or passive voice assigns agency',
      'Naming and labelling as strategies of inclusion, exclusion, and delegitimisation',
      'Modality and the naturalisation of contingent social arrangements',
      'The newspaper as a genre with specific ideological functions',
    ],
    difficulty: 'challenging',
  },

  {
    id: 'ial-rr-19',
    title: 'Journal of Sociolinguistics — Key Articles',
    author: 'Various (Wiley-Blackwell)',
    type: 'journal-article',
    unit: 'Unit 1 / Unit 3',
    synopsis: 'The leading academic journal in the field of sociolinguistics, publishing peer-reviewed research on language variation, change, identity, and social interaction. Freely accessible articles include work on MLE, language and gender, dialect change, and CMC.',
    whyRecommended: 'Reading real academic journal articles is the best preparation for Unit 3 investigations and develops the academic reading skills valued by examiners. Recommended articles include Kerswill et al. on MLE (2011), Eckert and McConnell-Ginet on communities of practice (1992), and Coupland on style (2001). Ask your teacher for specific recommendations.',
    keyIdeas: [
      'Peer-reviewed research as the gold standard of linguistic knowledge',
      'Abstract and introduction reading strategies for academic articles',
      'Methodology sections: how sociolinguists design studies and justify choices',
      'Results and discussion: how evidence is interpreted in the light of theory',
      'Citation and reference as a model for your own investigation writing',
    ],
    difficulty: 'challenging',
  },

  {
    id: 'ial-rr-20',
    title: 'Language: The Basics',
    author: 'R. L. Trask',
    type: 'academic',
    unit: 'General',
    synopsis: 'A clear, concise, and comprehensive introduction to the science of linguistics, covering all the major subfields from phonology to pragmatics. Trask writes with exceptional clarity and a welcome wit, making abstract linguistic concepts readily understandable for newcomers to the discipline.',
    whyRecommended: 'The ideal starting point for any student who wants to go beyond the A-level syllabus and understand linguistics as an academic discipline. Trask\'s coverage of phonology, morphology, syntax, semantics, and pragmatics provides the theoretical scaffolding for all units of the IAL course. His treatment of the prescriptivism debate is particularly recommended.',
    keyIdeas: [
      'Linguistics as a scientific discipline with descriptive, not prescriptive, goals',
      'The arbitrary nature of the linguistic sign (Saussure)',
      'The levels of linguistic description: phonology, morphology, syntax, semantics, pragmatics',
      'Language universals and the question of deep structural similarity across languages',
      'The descriptive linguist\'s toolkit: how language is observed and analysed systematically',
    ],
    difficulty: 'accessible',
  },

];
