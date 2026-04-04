// ============================================================
// IAL English Language -- Lesson Presentation Content
// Y12 and Y13 slide decks for classroom use
// ============================================================

export interface SlideContent {
  id: string;
  slideNumber: number;
  title: string;
  bulletPoints: string[];
  teacherNotes: string;
  activity?: string;
}

export interface LessonPresentation {
  id: string;
  lessonTitle: string;
  yearGroup: string;
  termUnit: string;
  totalSlides: number;
  slides: SlideContent[];
}

// ============================================================
// Y12 PRESENTATION 1 -- Linguistic Frameworks: An Introduction
// ============================================================

const y12FrameworksPresentation: LessonPresentation = {
  id: 'y12-pres-01-frameworks',
  lessonTitle: 'Linguistic Frameworks -- An Introduction',
  yearGroup: 'Y12',
  termUnit: 'Unit 1 -- Language and Identity',
  totalSlides: 10,
  slides: [
    {
      id: 'y12-pres-01-s01',
      slideNumber: 1,
      title: 'What Is a Linguistic Framework?',
      bulletPoints: [
        'A linguistic framework is a structured analytical lens for examining language',
        'Frameworks provide the technical vocabulary needed at A-Level',
        'Six core frameworks: phonology, lexis, grammar, semantics, pragmatics, discourse',
        'Strong analysis integrates multiple frameworks rather than treating them in isolation',
        'Frameworks apply to both spoken and written language data',
      ],
      teacherNotes:
        'Open with a brief discussion: ask students what tools they currently use to analyse language. Most will say "techniques" or literary devices. Establish that A-Level shifts from technique-spotting to systematic linguistic analysis. Emphasise that the frameworks are not a checklist -- they are an interconnected system.',
      activity:
        'Starter: Students annotate a short text (e.g. an advertisement) using any language knowledge they already have. Pairs share findings. Teacher identifies which framework categories their observations fall into, previewing the lesson.',
    },
    {
      id: 'y12-pres-01-s02',
      slideNumber: 2,
      title: 'Framework 1 -- Phonology',
      bulletPoints: [
        'Phonology: the study of sound patterns in language',
        'Spoken data: accent, intonation, stress, rhythm, phonemes',
        'Written data: alliteration, assonance, onomatopoeia, rhyme',
        'Prosodic features: pitch, pace, volume, pause',
        'Received Pronunciation (RP) as a prestige accent -- but not the only valid variety',
      ],
      teacherNotes:
        'Play a short audio clip contrasting RP with a regional accent (e.g. Yorkshire or Scouse). Ask students what social judgements are triggered by each -- this pre-empts the Language and Identity unit. Introduce IPA notation briefly; students do not need to transcribe fully at this stage but should be aware it exists.',
    },
    {
      id: 'y12-pres-01-s03',
      slideNumber: 3,
      title: 'Framework 2 -- Lexis',
      bulletPoints: [
        'Lexis: the vocabulary system of a language',
        'Semantic fields: groups of thematically related words',
        'Denotation (literal meaning) vs connotation (associations)',
        'Register: formal, informal, technical, colloquial, slang',
        'Word formation: compounding, affixation, blending, conversion',
        'Figurative language: metaphor, simile, metonymy, personification',
      ],
      teacherNotes:
        'Contrast two texts from the same domain (e.g. a broadsheet and tabloid report on the same event). Ask students to group words into semantic fields and note register. Stress that lexical analysis must always be tied to effect and context -- never a list of interesting words.',
      activity:
        'Pair task: Students receive two texts. They highlight words from contrasting semantic fields and annotate the connotations of each. Whole-class share: how do lexical choices construct a particular version of events?',
    },
    {
      id: 'y12-pres-01-s04',
      slideNumber: 4,
      title: 'Framework 3 -- Grammar',
      bulletPoints: [
        'Grammar covers morphology (word structure) and syntax (sentence structure)',
        'Word classes: noun, verb, adjective, adverb, pronoun, preposition, conjunction, determiner',
        'Sentence types: simple, compound, complex, compound-complex',
        'Clause types: main, subordinate, relative, adverbial, noun clause',
        'Verb features: tense, aspect, modality, voice (active/passive), mood',
        'Always connect grammatical observations to meaning and effect',
      ],
      teacherNotes:
        'Many students arrive with shaky grammar foundations. A quick diagnostic (identify the word classes in three sentences) will reveal gaps. Reassure students that grammatical analysis is a skill that improves with practice. Stress the examiner mantra: never just label, always explain effect.',
    },
    {
      id: 'y12-pres-01-s05',
      slideNumber: 5,
      title: 'Framework 4 -- Semantics',
      bulletPoints: [
        'Semantics: the study of meaning in language',
        'Denotation vs connotation -- words carry multiple layers of meaning',
        'Synonymy, antonymy, hyponymy: relationships between word meanings',
        'Semantic change: amelioration, pejoration, broadening, narrowing',
        'Semantic fields reveal how speakers construct representations of the world',
        'Presupposition: meaning taken for granted within an utterance',
      ],
      teacherNotes:
        'A productive example is the word "home" vs "house" -- same referent, very different connotations. Political language offers rich semantic examples: "freedom fighter" vs "terrorist". Students often conflate lexis and semantics -- clarify that lexis focuses on word choices while semantics focuses on how meaning is constructed.',
    },
    {
      id: 'y12-pres-01-s06',
      slideNumber: 6,
      title: 'Framework 5 -- Pragmatics',
      bulletPoints: [
        'Pragmatics: meaning in context, beyond literal semantic content',
        "Grice's Maxims: quantity, quality, relation, manner",
        'Implicature: what is implied but not explicitly stated',
        'Speech acts: utterances that perform actions (requesting, apologising, promising)',
        'Politeness theory: positive face (approval) and negative face (autonomy)',
        'Essential for analysing spoken language and informal written registers',
      ],
      teacherNotes:
        'Use a conversation transcript to illustrate how pragmatic meaning can diverge entirely from literal meaning. A classic: "Can you pass the salt?" is grammatically a yes/no question but pragmatically a request. Face-threatening acts are particularly relevant to the identity and power themes in Unit 1.',
      activity:
        'Role-play analysis: Students are given six short dialogue exchanges. They identify the implied meaning, the speech act performed, and whether any face-threatening act is occurring. Discussion: how does power affect pragmatic choices?',
    },
    {
      id: 'y12-pres-01-s07',
      slideNumber: 7,
      title: 'Framework 6 -- Discourse',
      bulletPoints: [
        'Discourse: analysis at the level of whole texts and extended stretches of language',
        'Cohesion: devices that link a text (reference, conjunction, ellipsis, lexical chains)',
        'Coherence: overall logical and thematic consistency',
        'Genre conventions: expected features of particular text types',
        'Discourse markers: signal structure and transitions ("however", "furthermore")',
        'Discourse positions the reader/listener and relates to broader social context',
      ],
      teacherNotes:
        'Contrast a well-cohesive text with a version where cohesive devices have been removed -- students immediately feel the disorientation. This makes an abstract concept visceral. Discourse analysis is often neglected at A-Level in favour of word-level analysis; encourage students to always consider the macro-level structure.',
    },
    {
      id: 'y12-pres-01-s08',
      slideNumber: 8,
      title: 'Integrating the Frameworks',
      bulletPoints: [
        'Top-band responses move fluidly between frameworks',
        'Begin with discourse-level observations, then zoom into detail',
        'Identify how frameworks interact: grammar can shape pragmatic meaning',
        'Use precise technical terminology from each framework',
        'Avoid a "framework by framework" structure -- integrate analytically',
        'Evidence (quotation) + framework label + effect = the basic analytical move',
      ],
      teacherNotes:
        'Model a paragraph of integrated analysis on a shared text. Annotate it live, showing where each framework is being applied and how the paragraph connects them. Then give students a short text and ask them to write one integrated analytical paragraph before the end of the lesson.',
      activity:
        'Modelled writing: Teacher constructs an analytical paragraph aloud with student input. Students then independently write one paragraph on a new short text, aiming to reference at least three frameworks. Peer mark against the integration criteria.',
    },
    {
      id: 'y12-pres-01-s09',
      slideNumber: 9,
      title: 'Applying Frameworks to Data: Worked Example',
      bulletPoints: [
        'Extract: a political speech opening (approximately 100 words)',
        'Phonology: note any prosodic effects implied by punctuation and syntax',
        'Lexis/Semantics: identify semantic fields, connotations, figurative language',
        'Grammar: examine sentence types, modality, passive constructions',
        'Pragmatics: identify speech acts, presuppositions, implied meanings',
        'Discourse: consider how the opening positions the audience and establishes genre',
      ],
      teacherNotes:
        'Provide the worked example extract on a printed handout as well. Walk through the analysis framework by framework first, then model how to weave them into continuous prose. The contrast between the "checklist" version and the "integrated" version is very instructive for students at this stage.',
    },
    {
      id: 'y12-pres-01-s10',
      slideNumber: 10,
      title: 'Consolidation and Homework',
      bulletPoints: [
        'Review: six frameworks and their key concepts',
        'Assessment objective: AO1 -- use frameworks to analyse language accurately and in detail',
        'Homework: annotate a provided newspaper front page using all six frameworks',
        'Produce one integrated analytical paragraph (150 words minimum)',
        'Key vocabulary test next lesson: 20 terms from todays frameworks',
        'Reading: Pearson IAL English Language Student Book, Chapter 1',
      ],
      teacherNotes:
        'Consolidation quiz can be done as a quick Kahoot or whiteboard activity. Stress that the vocabulary test is low-stakes -- its diagnostic. Homework annotation should use a colour-coding system (one colour per framework) to make the integration visible before they write it up in prose.',
    },
  ],
};

// ============================================================
// Y12 PRESENTATION 2 -- Language and Social Identity
// ============================================================

const y12IdentityPresentation: LessonPresentation = {
  id: 'y12-pres-02-identity',
  lessonTitle: 'Language and Social Identity',
  yearGroup: 'Y12',
  termUnit: 'Unit 1 -- Language and Identity',
  totalSlides: 10,
  slides: [
    {
      id: 'y12-pres-02-s01',
      slideNumber: 1,
      title: 'Language as Identity Construction',
      bulletPoints: [
        'Identity is not fixed -- it is constructed, negotiated, and performed through language',
        'Social identity categories: gender, age, ethnicity, class, region, occupation',
        'We do not simply have an identity -- we perform identities in different contexts',
        'Code-switching: adapting language to different social situations and audiences',
        'Key question: how does language both reflect and shape who we are?',
      ],
      teacherNotes:
        'Open with a brief reflection exercise: students write three words that describe themselves in (a) a job interview, (b) with close friends, (c) at home with family. Discuss how their language choices would differ across these contexts -- this is code-switching. Establish that identity is plural and contextual, not singular and fixed.',
      activity:
        'Starter reflection: students write three sentences they might say in three different social contexts. Class discussion: what features of language change? What stays the same? Introduce the concept of identity as performance.',
    },
    {
      id: 'y12-pres-02-s02',
      slideNumber: 2,
      title: 'Gender and Language',
      bulletPoints: [
        'Deficit model (Lakoff, 1975): womens language is less direct and assertive',
        'Dominance model: male dominance in interaction reflected through language',
        'Difference model (Tannen): men and women have distinct communicative cultures',
        "Dynamic model: gender identity is performed, not innate (Butler's performativity)",
        'Features associated with female speech: hedging, tag questions, politeness strategies',
        'Critical evaluation: stereotypes vs evidence from authentic data',
      ],
      teacherNotes:
        'Students often arrive with strong (and sometimes stereotyped) prior views on gender and language. Frame the task as one of critical engagement with theories rather than acceptance or rejection. The dynamic model is most current and most theoretically sophisticated -- encourage students to challenge the deficit and dominance models using counter-examples.',
    },
    {
      id: 'y12-pres-02-s03',
      slideNumber: 3,
      title: 'Age and Language: Sociolects and Generational Variety',
      bulletPoints: [
        'Idiolect: the unique language variety of an individual',
        'Sociolect: language variety shared by a social group',
        "Youth language: innovation, slang, identity-marking, in-group solidarity",
        'Language change often initiated by younger speakers in urban areas',
        'Older speakers tend to maintain more conservative linguistic features',
        'Multi-Ethnic Youth Dialect (MEYD): new hybrid variety emerging in urban Britain',
      ],
      teacherNotes:
        'Bring in examples of contemporary youth slang and ask students whether they use these terms -- generational variation is immediately apparent. The MEYD is a rich example of how social identity, ethnicity, and age intersect in language. Stress that non-standard varieties are linguistically systematic, not "incorrect".',
      activity:
        'Data analysis: students are given three short transcripts from speakers of different ages discussing the same topic. They identify lexical, grammatical, and phonological differences and relate these to age identity. Written analysis paragraph to follow.',
    },
    {
      id: 'y12-pres-02-s04',
      slideNumber: 4,
      title: 'Regional Identity and Dialect',
      bulletPoints: [
        'Dialect: variation in vocabulary and grammar associated with a region or social group',
        'Accent: variation in pronunciation only',
        'Dialect continuum: regional varieties shade into each other geographically',
        'Prestige varieties: Standard English and RP carry social authority',
        'Covert prestige: non-standard varieties valued for solidarity and authenticity',
        'Dialect levelling: regional features converging towards a more uniform variety',
      ],
      teacherNotes:
        'The concept of covert prestige is particularly important for student engagement -- it explains why people do not simply abandon non-standard features even when they are aware of the prestige variety. Use local examples where possible. If the class is linguistically diverse, this can be a very productive discussion about whose variety is valued and why.',
    },
    {
      id: 'y12-pres-02-s05',
      slideNumber: 5,
      title: 'Ethnicity, Class, and Language',
      bulletPoints: [
        'Ethnolect: a variety associated with an ethnic community',
        "Bernstein's codes: elaborated code (middle class) vs restricted code (working class)",
        'Critiques of Bernstein: deficit thinking vs valuing difference',
        'AAVE (African American Vernacular English): a systematic, rule-governed variety',
        'Code-switching between Standard English and community variety in different contexts',
        'Language as a site of cultural identity and resistance',
      ],
      teacherNotes:
        "Bernstein is controversial and should be handled carefully. The deficit framing of his work has been used to pathologise working-class speech; Labov's counter-argument (that all varieties are equally complex) is essential balance. AAVE offers a case study in how a non-prestige variety can carry both stigma and deep cultural significance.",
    },
    {
      id: 'y12-pres-02-s06',
      slideNumber: 6,
      title: 'Language and Power',
      bulletPoints: [
        'Power can be encoded in language at every level: lexis, grammar, discourse',
        'Asymmetric power: teacher/student, doctor/patient, employer/employee',
        'Instrumental power: using language to achieve a goal',
        'Influential power: using language to shape beliefs and attitudes',
        'Powerful participants: control topic, take longer turns, interrupt more',
        'Critical Discourse Analysis (CDA): examining how power is reproduced through language',
      ],
      teacherNotes:
        'Use a transcript of an asymmetric interaction (e.g. a job interview or courtroom exchange). Students identify who holds power and what linguistic features enact that power. Introduce CDA as a theoretical framework -- language does not simply reflect power structures, it actively constructs them.',
      activity:
        'Transcript analysis: students annotate an asymmetric interaction transcript. They identify at least five linguistic features that encode the power differential. Class discussion: could the less powerful participant resist through language? What would happen if they did?',
    },
    {
      id: 'y12-pres-02-s07',
      slideNumber: 7,
      title: 'Occupational and Professional Identity',
      bulletPoints: [
        'Occupational register: specialist vocabulary and conventions of a professional domain',
        'Jargon: in-group technical language that excludes non-specialists',
        'Professional identity constructed through appropriate register and discourse',
        'Institutional discourse: how organisations encode power and values through language',
        'Language and professional gatekeeping: who gets to speak and be heard',
        'Analysis task: compare two texts from the same profession at different formality levels',
      ],
      teacherNotes:
        'Medical language is a particularly accessible example -- compare a clinical letter with an explanation given to a patient. The shift in register, sentence complexity, and vocabulary immediately illustrates how professional identity is performed through language. Students with part-time jobs may have rich examples from their own experience.',
    },
    {
      id: 'y12-pres-02-s08',
      slideNumber: 8,
      title: 'Online Identity and Digital Communication',
      bulletPoints: [
        'Computer-mediated communication (CMC): language use in digital contexts',
        'Digital discourse features: abbreviation, emoji, hashtags, multimodality',
        'Performative identity in social media: curated self-presentation',
        'Anonymity online: how identity shifts when accountability is reduced',
        'New communities of practice formed around shared digital spaces',
        'Cyberspeak as a new register: features and conventions',
      ],
      teacherNotes:
        'This topic is highly engaging for students because it is immediately relevant to their daily lives. Caution: avoid being prescriptive about "good" vs "bad" online language. Frame digital communication as a domain with its own conventions and purposes, not as a degradation of "proper" English.',
      activity:
        'Digital data collection: students (with privacy considered) bring a screenshot of a public social media thread. They analyse it using discourse frameworks -- cohesion, register, identity construction, power dynamics. Written analysis to complete for homework.',
    },
    {
      id: 'y12-pres-02-s09',
      slideNumber: 9,
      title: 'Applying Identity Theory to Unseen Data',
      bulletPoints: [
        'Exam skill: reading data rapidly and selecting relevant identity frameworks',
        'Step 1: identify the context, participants, and purpose of the data',
        'Step 2: note macro-level discourse features (genre, structure, register)',
        'Step 3: zoom into lexis, grammar, semantics for specific evidence',
        'Step 4: connect linguistic observations to identity construction explicitly',
        'Avoid: listing features without explaining their identity-related significance',
      ],
      teacherNotes:
        'Timed practice with unseen data is essential at this point. Provide a text (spoken or written) with rich identity markers. Model the exam approach: annotation, planning, then writing under timed conditions. Students should aim for one analytical paragraph completed before the end of the lesson.',
    },
    {
      id: 'y12-pres-02-s10',
      slideNumber: 10,
      title: 'Consolidation: Identity, Language, and the Exam',
      bulletPoints: [
        'Core theories: Lakoff, Tannen, Butler, Labov, Bernstein, Trudgill',
        'AO2: demonstrate knowledge of linguistic concepts, methods, and issues',
        'AO3: analyse language in relation to context, purpose, and audience',
        'Homework: 400-word analytical response on a provided identity-focused text',
        'Revise all key theorists and their main claims for next lesson quiz',
        'Extension: read Crystal on netspeak and compare with your own digital data',
      ],
      teacherNotes:
        'End with a "which theorist said what" matching activity -- quick and effective for consolidating theoretical knowledge. Remind students that the exam will never ask them to simply describe a theory: they must apply theories as analytical lenses on data. The homework response should be peer-assessed at the start of next lesson.',
    },
  ],
};

// ============================================================
// Y12 PRESENTATION 3 -- Language Change: Historical and Contemporary
// ============================================================

const y12LanguageChangePresentation: LessonPresentation = {
  id: 'y12-pres-03-language-change',
  lessonTitle: 'Language Change -- Historical and Contemporary',
  yearGroup: 'Y12',
  termUnit: 'Unit 2 -- Language Change and Diversity',
  totalSlides: 10,
  slides: [
    {
      id: 'y12-pres-03-s01',
      slideNumber: 1,
      title: 'Why Does Language Change?',
      bulletPoints: [
        'Language change is constant, gradual, and inevitable',
        'Internal factors: analogy, regularisation, phonological drift',
        'External factors: contact with other languages, technology, social change',
        'Attitudes to change: prescriptivism (rules-based) vs descriptivism (usage-based)',
        'No variety of English is frozen -- even "Standard English" is a historical construct',
        'Key periods: Old English, Middle English, Early Modern English, Modern English',
      ],
      teacherNotes:
        'Begin with a brief Old English passage (e.g. from Beowulf) to illustrate how dramatic change can be over time. Students often find it unreadable -- this is a useful reminder that English was not always as it is now. Establish the prescriptivist/descriptivist debate early as it underpins many exam questions on change.',
      activity:
        'Text timeline: students are given four short texts from different historical periods. Working in groups, they order them chronologically and identify at least three features that indicate their period. Class discussion: what patterns of change are visible?',
    },
    {
      id: 'y12-pres-03-s02',
      slideNumber: 2,
      title: 'Historical Overview: Old to Modern English',
      bulletPoints: [
        'Old English (450-1100): inflectional morphology, Germanic vocabulary, runic script',
        'Middle English (1100-1500): Norman French influence, loss of inflections, Chaucer',
        'Early Modern English (1500-1700): printing press, standardisation, Shakespeare',
        'Modern English (1700-present): global spread, lexical expansion, digital change',
        'The Great Vowel Shift (1400-1700): systematic change in long vowel pronunciation',
        'Key catalyst: the Norman Conquest (1066) transformed English vocabulary and syntax',
      ],
      teacherNotes:
        "The Great Vowel Shift is always fascinating for students -- it explains many spelling/pronunciation inconsistencies in present-day English. Use Chomsky and Halle's classic description or a simplified animated version. Connect the historical overview to the concept that change is always happening, even if we can't perceive it in real time.",
    },
    {
      id: 'y12-pres-03-s03',
      slideNumber: 3,
      title: 'Processes of Lexical Change',
      bulletPoints: [
        'Borrowing (loanwords): from Latin, French, Norse, and global languages',
        'Coinage: entirely new words invented (e.g. "internet", "blog")',
        'Compounding: combining existing words ("smartphone", "website")',
        'Affixation: adding prefixes/suffixes ("unfriend", "selfie-worthy")',
        'Semantic change: meaning shifts -- amelioration, pejoration, broadening, narrowing',
        'Conversion (functional shift): using a word class differently ("to Google")',
      ],
      teacherNotes:
        'This slide is vocabulary-heavy but the processes are memorable with good examples. Ask students to generate their own examples for each process -- particularly for recent digital coinages. Semantic change is particularly interesting: "nice" originally meant "foolish", "silly" meant "blessed". These historical shifts reveal cultural values.',
    },
    {
      id: 'y12-pres-03-s04',
      slideNumber: 4,
      title: 'Grammatical and Phonological Change',
      bulletPoints: [
        'Loss of grammatical gender in English (retained in French, German, Spanish)',
        'Reduction of case system: only pronouns retain distinct forms (he/him, she/her)',
        "Regularisation of irregular verbs: 'helped' replacing 'holp' over centuries",
        'T-V distinction lost: "thou" disappeared, replaced universally by "you"',
        'Phonological change: vowel shifts, consonant dropping (knight, gnaw)',
        'Ongoing change: glottal stop, H-dropping, vowel mergers in contemporary speech',
      ],
      teacherNotes:
        'The loss of "thou" is a particularly rich example: it was not simply about formality but about social equality and religious register. Quakers continued using "thee" as a mark of equality. Contemporary phonological change (the glottal stop spreading from East End London) illustrates that change is still active and socially driven.',
    },
    {
      id: 'y12-pres-03-s05',
      slideNumber: 5,
      title: 'Language Contact and Influence',
      bulletPoints: [
        'English has always been a borrowing language -- this is a strength, not a weakness',
        'Norse influence: pronouns (they/them/their), vocabulary (sky, window, egg)',
        'Norman French: legal and administrative vocabulary (justice, parliament, government)',
        'Latin and Greek: scientific and academic vocabulary',
        'Contemporary global borrowings: from Hindi, Japanese, Arabic, and many others',
        'Pidgins and creoles: new languages arising from contact situations',
      ],
      teacherNotes:
        'The percentage of English vocabulary that is borrowed (often cited at around 70%) surprises students. A vocabulary categorisation activity (native Germanic vs French vs Latin vs other) is very effective here. The creation of creoles from contact languages is a fascinating case of language emergence and can connect to discussions of linguistic creativity.',
      activity:
        'Etymology challenge: students use dictionaries or etymology apps to find the origin of 10 given words. They categorise them by source language and identify the historical period in which each borrowing likely occurred. Reflection: what does this tell us about the history of English contact?',
    },
    {
      id: 'y12-pres-03-s06',
      slideNumber: 6,
      title: 'Contemporary Language Change',
      bulletPoints: [
        'Technology as a driver of change: internet language, text messaging, social media',
        'Globalisation: spread of Americanisms and global English',
        'New words added to dictionaries each year: "selfie", "photobomb", "ghosting"',
        'Changing grammatical conventions: singular "they", split infinitives',
        'Youth language as an engine of change -- new features spread from younger speakers',
        'Media influence: films, TV, music, and online platforms spreading new usage',
      ],
      teacherNotes:
        'The singular "they" is now used by the Associated Press and many major style guides -- this is a real-time example of grammatical change driven by social need and now codified by institutions. Students find this debate engaging, especially if they use singular "they" themselves without thinking about it.',
    },
    {
      id: 'y12-pres-03-s07',
      slideNumber: 7,
      title: 'Attitudes to Language Change',
      bulletPoints: [
        'Prescriptivism: there are correct rules that should be upheld',
        'Descriptivism: linguists describe usage without judging it',
        'Common prescriptivist concerns: split infinitives, "less" vs "fewer", apostrophes',
        'Arguments for prescriptivism: clarity, shared standards, social mobility',
        'Arguments for descriptivism: language reflects real usage, standards are arbitrary',
        'Exam task: evaluate both positions using linguistic evidence, not personal preference',
      ],
      teacherNotes:
        'Students often have strong personal feelings here -- "text speak is ruining English" is a common starting position. The task is to move them from opinion to evidence. Provide examples of prescriptivist complaints across history (the split infinitive "rule" was invented in the 19th century) to show that what counts as "correct" changes over time.',
    },
    {
      id: 'y12-pres-03-s08',
      slideNumber: 8,
      title: 'Theories of Language Change',
      bulletPoints: [
        "Trudgill's dialect contact model: features spread through contact and accommodation",
        "Labov's concept of change from below: non-prestige features spreading upward",
        'S-curve model: change is slow, then rapid, then slow again as it completes',
        'Lexical diffusion: a change spreads word by word through the lexicon',
        "Cheshire's work on new dialect formation in urban areas",
        'Key principle: change is socially embedded, not random',
      ],
      teacherNotes:
        'Students at A-Level are expected to engage with named theorists and models. Trudgill and Labov are the most assessable. The S-curve model can be illustrated with a graph -- students find visual representations helpful. Emphasise that linguistic change is not decay: every generation has feared that their language is deteriorating, and none of them were right.',
    },
    {
      id: 'y12-pres-03-s09',
      slideNumber: 9,
      title: 'Analysing Historical Texts',
      bulletPoints: [
        'Look for archaic vocabulary: words no longer in common use',
        'Note grammatical differences: word order, verb forms, pronoun use',
        'Consider spelling: standardisation post-printing press vs earlier variation',
        'Identify semantic change: words whose meanings have shifted',
        'Reference historical context: what events or influences shaped this text?',
        'AO1: use precise framework terminology even when analysing historical language',
      ],
      teacherNotes:
        'Provide a 16th-century text (e.g. a letter from the Paston Letters or an extract from Tyndale\'s Bible translation). Students annotate it using the checklist on the slide. The goal is to connect the features they observe to specific processes of change. Glossing the most obscure vocabulary in advance prevents students getting stuck on translation rather than analysis.',
      activity:
        'Historical text annotation: students annotate a provided 17th-century text in pairs. They must identify at least two features from each framework category. Whole-class comparison: which features have changed the most? Which have remained stable?',
    },
    {
      id: 'y12-pres-03-s10',
      slideNumber: 10,
      title: 'Consolidation and Assessment Preparation',
      bulletPoints: [
        'Key processes: borrowing, coinage, semantic change, grammatical regularisation',
        'Key theorists: Trudgill, Labov, Cheshire, Leith, Crystal',
        'Exam question types: discuss attitudes to change; analyse historical/contemporary data',
        'Homework: 500-word essay -- "Language change is always a sign of decay." Discuss.',
        'Revision: produce a timeline of English language history with key features at each stage',
        'Next lesson: Language diversity across world Englishes and global contexts',
      ],
      teacherNotes:
        'The essay title is deliberately provocative -- it asks students to engage with the prescriptivist position even if they do not hold it. Good essays will present both sides with evidence before reaching a nuanced conclusion. Remind students to use specific examples and theorist references rather than general claims.',
    },
  ],
};

// ============================================================
// Y12 PRESENTATION 4 -- Analysing Language Data
// ============================================================

const y12DataAnalysisPresentation: LessonPresentation = {
  id: 'y12-pres-04-data-analysis',
  lessonTitle: 'Analysing Language Data',
  yearGroup: 'Y12',
  termUnit: 'Unit 1 -- Skills and Methods',
  totalSlides: 10,
  slides: [
    {
      id: 'y12-pres-04-s01',
      slideNumber: 1,
      title: 'What Is Language Data?',
      bulletPoints: [
        'Language data: any authentic sample of language use collected for analysis',
        'Spoken data: transcripts of conversations, interviews, speeches, broadcasts',
        'Written data: texts from any genre -- digital, print, historical, contemporary',
        'Multimodal data: texts combining language with images, layout, sound',
        'Primary data: collected first-hand; secondary data: from existing sources',
        'The exam will always ask you to work with unseen data -- practice is essential',
      ],
      teacherNotes:
        'Establish from the outset that data analysis is a skill that can be learned and improved, not an innate talent. Students who practise regularly with varied data will outperform those who rely on textbook examples alone. Introduce the idea of a "data bank" -- students should be collecting and annotating interesting language samples throughout the year.',
      activity:
        'Data collection starter: students photograph or screenshot three examples of language in use before the next lesson (signs, social media, conversations overheard). They bring these to the next session as their own primary data.',
    },
    {
      id: 'y12-pres-04-s02',
      slideNumber: 2,
      title: 'Spoken Language Transcription Conventions',
      bulletPoints: [
        '(.) -- micro-pause; (..) -- short pause; numbers in brackets -- timed pause in seconds',
        'CAPITALS -- loud speech; underline -- stressed syllable',
        '[ ] -- overlapping speech with a second speaker',
        '= -- latching (speech immediately following without pause)',
        '((laughs)) -- paralinguistic features in double brackets',
        '::: -- elongation of a sound (more colons = longer elongation)',
      ],
      teacherNotes:
        'These conventions follow the Jefferson transcription system, which is standard in conversation analysis. Students should be able to read transcripts fluently in the exam -- provide practice material with detailed annotations. Stress that transcription conventions are analytical tools: the way a transcript is marked up already reflects analytical choices.',
    },
    {
      id: 'y12-pres-04-s03',
      slideNumber: 3,
      title: 'Approaching Unseen Written Data',
      bulletPoints: [
        'Step 1: read the whole text before annotating anything',
        'Step 2: identify purpose, audience, genre, context (PAGC)',
        'Step 3: annotate for macro features (structure, register, discourse organisation)',
        'Step 4: annotate for micro features (lexis, grammar, phonology, semantics)',
        'Step 5: select the most significant features for your analytical response',
        'Never: annotate everything you notice and call it analysis',
      ],
      teacherNotes:
        'The PAGC framework (Purpose, Audience, Genre, Context) is a useful heuristic for initial reading. Emphasise that annotation is a means, not an end -- the goal is to select the most analytically productive features, not to annotate every word. Model the difference between annotation (marking features) and analysis (explaining their significance).',
    },
    {
      id: 'y12-pres-04-s04',
      slideNumber: 4,
      title: 'Writing Analytical Paragraphs: The AEE Model',
      bulletPoints: [
        'AEE: Assertion -- Evidence -- Explanation',
        'Assertion: a specific analytical claim about the language of the text',
        'Evidence: a direct quotation or transcript reference that supports the claim',
        'Explanation: analysis of how the language creates the effect you have claimed',
        'Extend: link to a second piece of evidence or a counter-example',
        'The explanation should be the longest part of the paragraph',
      ],
      teacherNotes:
        'Students often reverse the balance, writing one line of analysis after three lines of quotation. Demonstrate the ideal ratio: short quotation, extended explanation. The "because" and "which suggests" sentence starters are useful scaffolds for pushing students towards explanation rather than description.',
      activity:
        'Paragraph surgery: students are given three sample paragraphs of varying quality. They identify which part is assertion, evidence, and explanation, then annotate what is missing or underdeveloped. They rewrite the weakest paragraph to AEE standard.',
    },
    {
      id: 'y12-pres-04-s05',
      slideNumber: 5,
      title: 'Quantitative and Qualitative Analysis',
      bulletPoints: [
        'Qualitative analysis: in-depth interpretation of specific features and their effects',
        'Quantitative analysis: counting, measuring, and comparing features across data',
        'Word frequency counts, average sentence length, type-token ratio',
        'Quantitative data adds rigour -- a claim about frequency must be verifiable',
        'Limitations: quantity alone does not explain meaning -- qualitative interpretation needed',
        'Best practice: combine both approaches for a complete analytical picture',
      ],
      teacherNotes:
        'Students often overlook quantitative approaches, treating language analysis as purely qualitative. Introduce the type-token ratio (number of unique words divided by total words) as a measure of lexical diversity. A transcript comparison using word frequency and average utterance length can reveal power dynamics objectively. These methods are also important preparation for the Y13 Language Investigation.',
    },
    {
      id: 'y12-pres-04-s06',
      slideNumber: 6,
      title: 'Comparing Two Texts',
      bulletPoints: [
        'Comparison questions are common across both exam units',
        'Establish what the texts share (genre? purpose? topic? context?)',
        'Then identify the most significant differences in language use',
        'Avoid: describing Text A fully, then Text B, with a brief conclusion',
        'Aim for: integrated comparison -- use "whereas", "by contrast", "similarly"',
        'Framework by framework comparison: compare phonology, then lexis, etc. as a plan',
      ],
      teacherNotes:
        'The most common error in comparative analysis is the "describe then describe" structure. Model an integrated comparative paragraph on the board: "While Text A uses predominantly formal Latinate vocabulary to construct authority, Text B employs colloquial Germanic lexis to create intimacy with the reader." Show students the structural difference clearly.',
    },
    {
      id: 'y12-pres-04-s07',
      slideNumber: 7,
      title: 'Contextual Analysis: Purpose, Audience, Genre',
      bulletPoints: [
        'Context shapes every linguistic choice a writer or speaker makes',
        'Purpose: to inform, persuade, entertain, instruct, narrate, express',
        'Audience: age, background, expertise, assumed relationship with producer',
        'Genre: the text type and its associated conventions and expectations',
        'Context of production vs context of reception: these can differ significantly',
        'Strong analysis always links linguistic choices back to context explicitly',
      ],
      teacherNotes:
        'The distinction between context of production (where/when the text was made) and context of reception (where/when it is read or heard) is important for historical texts and for media analysis. A Victorian newspaper editorial had a very different context of reception from the one it has now. Students should always specify which context they are discussing.',
      activity:
        'Context cards: students are given a text extract and a set of context cards (different audiences, purposes, and genres). They discuss how the analysis of the text changes depending on which contextual assumptions are applied. This reveals how context is interpretive, not simply a given.',
    },
    {
      id: 'y12-pres-04-s08',
      slideNumber: 8,
      title: 'Analysing Multimodal Texts',
      bulletPoints: [
        'Multimodality: texts that combine language with visual, spatial, and other modes',
        'Layout and typography carry meaning: font size, bold, white space, colour',
        'Image-text relationships: anchorage (image restricts meaning of text) vs relay',
        'Kress and van Leeuwens visual grammar: framing, salience, composition',
        'Digital texts are inherently multimodal: consider the whole screen, not just words',
        'AO1 still applies: use linguistic frameworks as your primary analytical tools',
      ],
      teacherNotes:
        'Multimodality often falls outside students comfort zone because it requires analysis of visual elements. Kress and van Leeuwen is the key theoretical framework. Keep the focus on how visual elements interact with linguistic ones -- the exam will not ask for a purely visual analysis, but ignoring visual features is a missed opportunity.',
    },
    {
      id: 'y12-pres-04-s09',
      slideNumber: 9,
      title: 'Timed Practice: Approaching the Clock',
      bulletPoints: [
        'Exam Unit 1: approximately 1 hour 30 minutes for two data-based questions',
        'Suggested timing: 5 minutes reading, 10 minutes planning, 30 minutes writing per question',
        'Planning: annotate the data, then write a brief paragraph plan before writing',
        'Opening paragraph: contextualise the data -- do not begin with a quotation',
        'Closing paragraph: synthetic overview of the most significant analytical findings',
        'Practice under timed conditions regularly -- speed and fluency are skills to develop',
      ],
      teacherNotes:
        'Timed practice is the single most effective exam preparation activity. Students who practise under timed conditions consistently outperform those who only practise without time pressure. Model the planning process in real time: annotation, three-minute plan, then begin writing. Visible planning time reassures students that planning is not wasted time.',
      activity:
        'Timed practice: students have 35 minutes to annotate and write a response to an unseen data question. Teacher circulates and notes common errors. Peer assessment using the mark scheme criteria at the end of the lesson.',
    },
    {
      id: 'y12-pres-04-s10',
      slideNumber: 10,
      title: 'Consolidation: Data Analysis Skills Checklist',
      bulletPoints: [
        'Can you identify purpose, audience, genre, and context rapidly?',
        'Can you annotate macro and micro features systematically?',
        'Can you write AEE paragraphs with extended explanation?',
        'Can you integrate framework analysis (not treat frameworks as separate checklists)?',
        'Can you compare two texts with integrated, not sequential, analysis?',
        'Homework: timed 30-minute response to the provided practice data question',
      ],
      teacherNotes:
        'Use the checklist as a genuine self-assessment tool. Students mark themselves against each criterion (red/amber/green) and use this to identify their development priorities. The homework should be marked with written feedback focusing on one strength and one specific target for improvement.',
    },
  ],
};

// ============================================================
// Y13 PRESENTATION 1 -- Crafting Language: Original Writing
// ============================================================

const y13OriginalWritingPresentation: LessonPresentation = {
  id: 'y13-pres-01-original-writing',
  lessonTitle: 'Crafting Language -- Original Writing',
  yearGroup: 'Y13',
  termUnit: 'Unit 3 -- Language in Use: Original Writing',
  totalSlides: 10,
  slides: [
    {
      id: 'y13-pres-01-s01',
      slideNumber: 1,
      title: 'Original Writing at A-Level: The Task',
      bulletPoints: [
        'Unit 3 requires you to produce an original piece of writing (800-1000 words)',
        'You choose the genre, purpose, audience, and form',
        'Marks are awarded for: craft, linguistic choices, and self-awareness of choices',
        'You are both a writer and a student of language -- these roles must work together',
        'The best original writing shows deliberate, controlled use of language',
        'Weak writing: generic, unaware of genre conventions, or linguistically thin',
      ],
      teacherNotes:
        'Establish from the outset that this is not a creative writing competition -- it is a demonstration of linguistic knowledge through creative production. Students who write with flair but no analytical awareness will score less well than those who make deliberate, articulable choices. The critical commentary (next lesson) will require them to explain why they made the choices they did.',
      activity:
        'Genre audit: students list five different genres of writing they have read or written in the past month. In pairs, they identify three key linguistic features of each genre. Class share: what makes each genre distinctive?',
    },
    {
      id: 'y13-pres-01-s02',
      slideNumber: 2,
      title: 'Understanding Genre Conventions',
      bulletPoints: [
        'Genre: a category of text defined by shared conventions and reader expectations',
        'Macro conventions: overall structure, layout, length, mode of address',
        'Micro conventions: typical vocabulary, sentence patterns, cohesive devices',
        'Genre-blending: deliberately mixing conventions for effect',
        'Reader expectations: meeting them creates familiarity; subverting them creates impact',
        'Research before you write: read multiple examples of your chosen genre',
      ],
      teacherNotes:
        'Students often underestimate how much genre knowledge is required before they can write effectively. Before beginning their original piece, they should read at least three or four strong examples of their chosen genre and annotate the conventions. This is research, not procrastination. Genre knowledge is the foundation of all craft decisions.',
    },
    {
      id: 'y13-pres-01-s03',
      slideNumber: 3,
      title: 'Voice and Persona',
      bulletPoints: [
        'Voice: the distinctive personality and style projected by a piece of writing',
        'Persona: a constructed narrator or speaker, which may differ from the author',
        'First person: intimacy, unreliable narrators, direct address',
        'Third person limited: single character focus with authorial distance',
        'Third person omniscient: god-like access to all characters and events',
        'Second person: unusual, immersive -- pulls the reader directly into the narrative',
      ],
      teacherNotes:
        'Voice is one of the most sophisticated concepts in original writing. Ask students to take one paragraph of neutral prose and rewrite it in two different voices (e.g. a cynical teenager, an enthusiastic travel journalist). The contrast illustrates how voice is constructed through specific linguistic choices, not just through general "style".',
      activity:
        'Voice experiment: students rewrite the same three-sentence event (a traffic jam) from three different narrative voices and perspectives. They then annotate the specific linguistic choices that create each voice. Discussion: what does this tell us about the relationship between language and identity in creative writing?',
    },
    {
      id: 'y13-pres-01-s04',
      slideNumber: 4,
      title: 'Crafting at the Sentence Level',
      bulletPoints: [
        'Sentence variety: alternating sentence types for rhythm and emphasis',
        'Minor sentences and fragments for dramatic effect',
        'Long complex sentences to build detail, subordinate clauses to qualify',
        'Parallelism and tricolon for rhetorical power',
        'Fronted adverbials and other marked word orders for emphasis',
        'Punctuation as a rhythmic tool: the colon, the dash, the ellipsis',
      ],
      teacherNotes:
        'Connect explicitly to the grammar framework from Y12. Students should use the grammatical terminology they know to describe and justify their sentence-level choices in the commentary. A sentence-level imitation exercise (take a published writer\'s paragraph and replicate their syntactic patterns with different content) is highly effective.',
    },
    {
      id: 'y13-pres-01-s05',
      slideNumber: 5,
      title: 'Lexical Crafting: Choosing Words Precisely',
      bulletPoints: [
        'Every word choice is a decision -- good writers reject the first word that comes to mind',
        'Semantic fields: building a network of related words to create coherent atmosphere',
        'Connotation: exploiting the emotional and cultural associations of words',
        'Concrete vs abstract: ground abstract ideas in specific, sensory detail',
        'Register consistency: unless deliberately disrupted for effect',
        'Vocabulary range: show control of formal, informal, technical, and figurative registers',
      ],
      teacherNotes:
        'The exercise of replacing every adjective and adverb in a draft paragraph with more precise alternatives is enormously instructive. Students often rely on generic modifiers ("very", "nice", "big"). Thesaurus work with attention to connotation -- not just synonym selection -- is a valuable habit to establish.',
      activity:
        'Word choice clinic: students swap their draft opening paragraph with a partner. They underline every word that could be replaced with a more precise or evocative alternative and suggest three options for each. Writers then decide which replacements (if any) to accept and justify their decisions.',
    },
    {
      id: 'y13-pres-01-s06',
      slideNumber: 6,
      title: 'Using Figurative Language Purposefully',
      bulletPoints: [
        'Figurative language should deepen meaning, not decorate it',
        'Metaphor: establish a governing metaphor and sustain it through the piece',
        'Simile: use sparingly -- overuse weakens impact',
        'Personification: gives agency and emotional resonance to non-human subjects',
        'Pathetic fallacy: environment as emotional mirror -- use with awareness of its conventionality',
        'Avoid: mixed metaphors, cliched comparisons, and figurative language that contradicts tone',
      ],
      teacherNotes:
        'Students often over-use figurative language in original writing, treating it as synonymous with quality. The concept of the governing metaphor -- a single extended comparison that structures the whole piece -- is a sophisticated technique that moves beyond simple decoration. Give examples from published writing where figurative language is central to meaning.',
    },
    {
      id: 'y13-pres-01-s07',
      slideNumber: 7,
      title: 'Discourse-Level Craft: Structure and Cohesion',
      bulletPoints: [
        'Opening: establish voice, context, and intrigue within the first paragraph',
        'Structure: linear vs fragmented vs circular -- choose deliberately',
        'Cohesion devices: lexical chains, reference, conjunction, pronoun consistency',
        'Pacing: vary the density of events, description, and reflection',
        'The ending: avoid summarising -- aim for resonance, irony, or unresolved tension',
        'Paragraphing: each paragraph advances the purpose in a specific way',
      ],
      teacherNotes:
        'Discourse-level craft is often neglected in favour of word-level choices. A structural plan before writing is essential -- not just a plot plan for narrative, but a discourse plan: where will the writing be dense and slow, where will it accelerate? Where will figurative language concentrate? These are architectural decisions that shape the whole piece.',
    },
    {
      id: 'y13-pres-01-s08',
      slideNumber: 8,
      title: 'Writing for Specific Audiences',
      bulletPoints: [
        'Audience affects every level of language: vocabulary, syntax, register, tone',
        'Explicit audience: identified in the brief (e.g. "a feature for a travel magazine")',
        'Implied audience: constructed through linguistic choices',
        'Reader positioning: how does the text position the reader in relation to content?',
        'Mode of address: direct vs indirect, formal vs informal, inclusive vs exclusive',
        'Test your work: would a real member of your intended audience engage with this?',
      ],
      teacherNotes:
        'Audience awareness is a key AO criterion. Students should be able to articulate precisely who their audience is (not just "adults" but "readers of a specific broadsheet supplement with an interest in environmental issues, likely aged 35-55"). The more precisely the audience is defined, the more focused the linguistic choices can be.',
    },
    {
      id: 'y13-pres-01-s09',
      slideNumber: 9,
      title: 'The Redrafting Process',
      bulletPoints: [
        'Professional writers revise extensively -- a first draft is raw material, not finished work',
        'Read your draft aloud: your ear will catch what your eye misses',
        'Redrafting checklist: voice consistency, genre conventions, sentence variety, word precision',
        'Cut ruthlessly: if a sentence does not advance purpose or voice, remove it',
        'Seek a second reader: fresh eyes identify what you cannot see yourself',
        'Final check: every linguistic choice should be explainable in the commentary',
      ],
      teacherNotes:
        'The connection between original writing and the commentary is crucial here. Students should not finalise their writing and then try to write a commentary about it -- the commentary and the writing should develop together. Every revision is potentially a commentary point. Encourage students to keep notes on why they made specific changes during redrafting.',
      activity:
        'Redrafting workshop: students bring their current draft. In groups of three, each writer reads their opening paragraph aloud. Listeners give structured feedback on one strength and one specific linguistic improvement. Writers then have 10 minutes to redraft in response to feedback.',
    },
    {
      id: 'y13-pres-01-s10',
      slideNumber: 10,
      title: 'Consolidation: Craft Checklist and Next Steps',
      bulletPoints: [
        'Does your piece have a distinctive, consistent voice?',
        'Have you used genre conventions deliberately and with awareness?',
        'Is your lexical range varied and precise?',
        'Does your sentence-level craft create rhythm, emphasis, and variety?',
        'Is your structure coherent at the discourse level?',
        'Is every linguistic choice one you can explain and justify?',
      ],
      teacherNotes:
        'Use this as a self-assessment checklist for the current draft. Students rate themselves against each criterion and set two specific targets for the next draft. These targets become the starting point of the next lesson. The connection between the craft checklist and the commentary criteria should be made explicit.',
    },
  ],
};

// ============================================================
// Y13 PRESENTATION 2 -- Writing the Critical Commentary
// ============================================================

const y13CommentaryPresentation: LessonPresentation = {
  id: 'y13-pres-02-commentary',
  lessonTitle: 'Writing the Critical Commentary',
  yearGroup: 'Y13',
  termUnit: 'Unit 3 -- Language in Use: Critical Commentary',
  totalSlides: 10,
  slides: [
    {
      id: 'y13-pres-02-s01',
      slideNumber: 1,
      title: 'What Is the Critical Commentary?',
      bulletPoints: [
        'The commentary accompanies your original writing piece in Unit 3',
        'Word count: approximately 500-750 words (check current specification)',
        'Purpose: to demonstrate linguistic knowledge through reflection on your own writing',
        'You explain the choices you made and why they are effective for your purpose and audience',
        'The commentary is not a summary of your piece -- it is linguistic analysis of it',
        'AO1 and AO2 are both assessed: use precise framework terminology throughout',
      ],
      teacherNotes:
        'Students frequently misunderstand the commentary as a "what I did and why I enjoyed it" piece. Establish clearly that it is linguistic analysis directed inward at their own writing. A student who can analyse a published text with sophistication must apply that same analytical eye to their own work. The commentary and the writing are assessed together.',
      activity:
        'Model commentary analysis: students read a published sample commentary and annotate it for (a) linguistic framework terminology, (b) explicit connection to purpose and audience, (c) evidence from the writing itself. What patterns do they notice in high-scoring commentaries?',
    },
    {
      id: 'y13-pres-02-s02',
      slideNumber: 2,
      title: 'Structuring the Commentary',
      bulletPoints: [
        'Paragraph 1: overview -- genre, purpose, audience, and key linguistic strategies chosen',
        'Middle paragraphs: detailed analysis of specific linguistic choices across frameworks',
        'Final paragraph: reflective evaluation -- what worked, what you would change',
        'Do not structure by listing features ("First I used metaphor... then I used...")  ',
        'Structure by analytical thread: "The construction of authority through grammatical choices..."',
        'Each paragraph should develop one coherent analytical claim',
      ],
      teacherNotes:
        'The structural difference between a list of features and an analytical argument is the hardest distinction for students to grasp. Model both versions of an opening paragraph side by side. The analytical thread structure requires students to think about what they are claiming about their own writing, not just what they did.',
    },
    {
      id: 'y13-pres-02-s03',
      slideNumber: 3,
      title: 'Integrating Evidence from Your Own Writing',
      bulletPoints: [
        'Quote directly from your own text -- treat it as you would any data',
        'Short quotations embedded in your analysis, not block quotations',
        'Reference specific linguistic features using precise framework terminology',
        'Connect each feature to its effect on the intended audience',
        'Connect each feature to your purpose and genre conventions',
        'Avoid: "I used this word because I liked the sound of it"',
      ],
      teacherNotes:
        'Encourage students to build a "quotation bank" from their own writing as they draft the piece -- noting specific phrases that they made deliberate linguistic choices about. These become the evidence base for the commentary. The same AEE paragraph structure they use for analytical responses applies here: Assertion -- Evidence -- Explanation.',
    },
    {
      id: 'y13-pres-02-s04',
      slideNumber: 4,
      title: 'Discussing Purpose and Audience',
      bulletPoints: [
        'Define your audience specifically: not "adults" but a precise demographic and context',
        'Explain how specific linguistic choices construct or maintain that audience relationship',
        'Mode of address: formal/informal, direct/indirect, inclusive/exclusive pronouns',
        'Readability: sentence length and complexity appropriate to your audience',
        'Register consistency: explain any deliberate register shifts and their purpose',
        'Purpose: how does each major linguistic strategy advance your overall purpose?',
      ],
      teacherNotes:
        'Purpose and audience discussion is one of the strongest differentiators between grade bands. Students who can articulate precisely how their lexical register constructs a relationship with a specific audience demonstrate sophisticated AO2 knowledge. Provide sentence starters: "The use of [feature] constructs [audience effect] because in the genre of [genre] readers expect [convention]..."',
      activity:
        'Commentary paragraph workshop: students write one commentary paragraph focused on audience and purpose. They must include: one direct quotation from their writing, two pieces of framework terminology, and one explicit connection to genre convention. Peer mark against these three criteria.',
    },
    {
      id: 'y13-pres-02-s05',
      slideNumber: 5,
      title: 'Discussing Genre Choices',
      bulletPoints: [
        'Name your genre and its key conventions explicitly',
        'Explain which conventions you followed and why they serve your purpose',
        'Explain which conventions you subverted and what effect this creates',
        'Reference the genre knowledge you drew on: specific texts, published models',
        'Connect genre choices to audience expectations and how you met or disrupted them',
        'Macro genre features (structure, length, mode) as well as micro features',
      ],
      teacherNotes:
        "Genre discussion is an opportunity to demonstrate the breadth of reading students have done as preparation. If they can say \"following the confessional column conventions established by writers such as [name], I chose second-person address to create immediacy,\" this demonstrates both genre knowledge and deliberate craft. Encourage specific references to real published examples.",
    },
    {
      id: 'y13-pres-02-s06',
      slideNumber: 6,
      title: 'Discussing Lexical and Semantic Choices',
      bulletPoints: [
        'Identify your dominant semantic fields and explain their strategic function',
        'Discuss specific word choices where connotation was a deliberate factor',
        'Explain any register choices: why formal or informal, technical or accessible?',
        'Discuss figurative language: what conceptual work does it do?',
        'Comment on vocabulary range and how it constructs the voice of the piece',
        'Always connect to effect on the reader, not just intention of the writer',
      ],
      teacherNotes:
        'Lexical and semantic discussion tends to be the strongest section for most students because it is the most concrete. Encourage them to go beyond "I chose this word because it sounds good" to "the connotations of [word] within the semantic field of [X] reinforce the central theme of [Y] and position the reader to [Z]." Precision of claim is everything.',
    },
    {
      id: 'y13-pres-02-s07',
      slideNumber: 7,
      title: 'Discussing Grammatical Choices',
      bulletPoints: [
        'Sentence types and their effects: simple for impact, complex for nuance',
        'Verb tense choices: past for narrative, present for immediacy, future for speculation',
        'Modality: how modal verbs construct the voice and the writers stance',
        'Passive voice: when and why you chose it (or avoided it)',
        'Syntactic patterns: parallelism, fronting, minor sentences',
        'Connect every grammatical observation to meaning -- never just label',
      ],
      teacherNotes:
        'Grammatical commentary is often thin because students are less confident with grammatical terminology than with lexical terminology. Encourage them to focus on two or three grammatical features they used deliberately and analyse those in depth, rather than superficially touching on ten features. Quality over quantity applies especially here.',
      activity:
        'Grammatical focus exercise: students identify three sentences in their own piece where they made a deliberate grammatical decision. They write two sentences of commentary for each, using precise grammatical terminology and connecting to effect. Pairs compare and assess whether the connections are explicit enough.',
    },
    {
      id: 'y13-pres-02-s08',
      slideNumber: 8,
      title: 'The Evaluative Conclusion',
      bulletPoints: [
        'The final paragraph should reflect critically on the success of your piece',
        'What worked well linguistically and why?',
        'What would you change on a further draft and what linguistic improvement would this make?',
        'How well did your choices serve your intended audience and purpose?',
        'Reference the genre conventions -- did your piece achieve what the genre demands?',
        'Avoid: false modesty or vague self-criticism ("it could be better")',
      ],
      teacherNotes:
        'The evaluative conclusion is an opportunity to demonstrate metalinguistic awareness. Students who can identify a specific weakness ("the shift into second person in paragraph three disrupts the intimate register established in the opening") show a sophisticated understanding of how linguistic coherence works. This is much more impressive than generic self-praise or unfocused self-criticism.',
    },
    {
      id: 'y13-pres-02-s09',
      slideNumber: 9,
      title: 'Common Commentary Weaknesses to Avoid',
      bulletPoints: [
        'Weakness 1: summarising the plot or content of the piece rather than analysing language',
        'Weakness 2: listing features without explaining effect ("I used alliteration")',
        'Weakness 3: vague audience description ("aimed at a general audience")',
        'Weakness 4: no framework terminology -- reads like a general writing reflection',
        'Weakness 5: no quotation from the piece -- claims are ungrounded',
        'Weakness 6: ignoring the evaluative requirement -- only description, no assessment',
      ],
      teacherNotes:
        'This list is most effective when illustrated with anonymised weak commentary extracts (from previous years or constructed examples). Students identifying weaknesses in others work helps them avoid those weaknesses in their own. A paired "weakness hunt" activity on sample commentaries is a good diagnostic of students current understanding.',
    },
    {
      id: 'y13-pres-02-s10',
      slideNumber: 10,
      title: 'Consolidation: Commentary Writing Checklist',
      bulletPoints: [
        'Does the commentary analyse language, not summarise content?',
        'Is framework terminology used precisely throughout?',
        'Are direct quotations from your own writing used as evidence?',
        'Is the audience defined specifically and connected to linguistic choices?',
        'Are genre conventions discussed with reference to published models?',
        'Does the conclusion evaluate effectiveness with specific linguistic reasoning?',
      ],
      teacherNotes:
        'Use as a self-assessment before submission. Students should be able to tick all six criteria -- if they cannot, they know what to redraft. The commentary and the original writing should be submitted together; read them in tandem when marking to ensure the commentary accurately reflects the choices visible in the writing.',
    },
  ],
};

// ============================================================
// Y13 PRESENTATION 3 -- Language Investigation: Research Methods
// ============================================================

const y13ResearchMethodsPresentation: LessonPresentation = {
  id: 'y13-pres-03-research-methods',
  lessonTitle: 'Language Investigation -- Research Methods',
  yearGroup: 'Y13',
  termUnit: 'Unit 4 -- Language Investigation',
  totalSlides: 10,
  slides: [
    {
      id: 'y13-pres-03-s01',
      slideNumber: 1,
      title: 'What Is a Language Investigation?',
      bulletPoints: [
        'Unit 4 requires an independent investigation into a language topic of your choice',
        'Length: 2000-2500 words (including data analysis; excluding data appendix)',
        'You design the research question, collect data, analyse it, and draw conclusions',
        'The investigation must have a clear linguistic focus -- not a general essay',
        'You are acting as a linguist: systematic, evidence-based, and theoretically informed',
        'Assessment: AO1, AO2, and AO3 -- analysis, knowledge, and contextual awareness',
      ],
      teacherNotes:
        'The language investigation is the most open-ended task students will face at A-Level. Many students initially find the freedom daunting. Establish that choosing a good research question is the most important decision they will make -- a well-scoped, genuinely interesting question makes all subsequent work easier. Begin exploring possible topics in this lesson.',
      activity:
        'Brainstorm session: students spend five minutes writing down every aspect of language they find interesting or puzzling. In groups, they share ideas and identify which might be researchable. Class creates a list of possible topic areas on the board. Teacher provides brief guidance on which are most feasible.',
    },
    {
      id: 'y13-pres-03-s02',
      slideNumber: 2,
      title: 'Choosing a Research Question',
      bulletPoints: [
        'A good research question is specific, focused, and genuinely investigable',
        'Too broad: "How does language change over time?"',
        'Better: "How has the language of BBC weather forecasts changed between 1990 and 2020?"',
        'The question should have a clear linguistic dimension, not just a content dimension',
        'Avoid questions whose answers are obvious or pre-determined',
        'Consider: what data can you realistically collect? What frameworks will you apply?',
      ],
      teacherNotes:
        'Spend significant time on research question development -- this cannot be rushed. Require students to submit three possible questions with a brief rationale for each before settling on one. Peer feedback on question quality is valuable. The question should generate genuine uncertainty in the student: they should not already know the answer.',
    },
    {
      id: 'y13-pres-03-s03',
      slideNumber: 3,
      title: 'Quantitative vs Qualitative Research Methods',
      bulletPoints: [
        'Quantitative: collecting and measuring linguistic data numerically',
        'Word counts, frequency analysis, sentence length, type-token ratio',
        'Qualitative: in-depth interpretation of specific features and their effects',
        'Most language investigations benefit from combining both approaches',
        'Quantitative data provides evidence for patterns; qualitative data explains why',
        'Mixed methods: use quantitative findings to select features for qualitative analysis',
      ],
      teacherNotes:
        'The distinction between quantitative and qualitative methods is important for methodological rigour. A purely qualitative investigation (analysing a few interesting examples) lacks systematic rigour. A purely quantitative investigation (counting features without interpretation) lacks analytical depth. Students should articulate their methods explicitly in the methodology section.',
    },
    {
      id: 'y13-pres-03-s04',
      slideNumber: 4,
      title: 'Collecting Primary Data',
      bulletPoints: [
        'Primary data: collected directly by the researcher for this specific investigation',
        'Spoken data collection: recordings, transcription, ethical consent required',
        'Written data collection: authentic texts sourced for your specific question',
        'Sample size: enough data to identify patterns, not so much that analysis becomes superficial',
        'Comparability: if comparing groups, ensure conditions are equivalent',
        'Pilot study: test your method before committing to full data collection',
      ],
      teacherNotes:
        'Ethical considerations are often neglected at this level. If students are recording people, they must obtain informed consent. If they are using sensitive topics (mental health language, political extremism), they need to handle data carefully. Discuss these issues before students begin data collection. A pilot transcript is always worth doing -- it reveals problems with method before they commit to full collection.',
      activity:
        'Data collection planning: students complete a data collection plan form for their investigation. This includes: research question, data type, collection method, sample size, and ethical considerations. Pairs peer-review plans and identify potential problems.',
    },
    {
      id: 'y13-pres-03-s05',
      slideNumber: 5,
      title: 'Transcription for the Language Investigation',
      bulletPoints: [
        'For spoken data: decide on the level of detail required for your research question',
        'A phonological investigation requires detailed phonetic transcription',
        'A discourse investigation may only need basic conversation analysis conventions',
        'Consistency: use the same transcription conventions throughout',
        'Include your transcription key in the appendix of the investigation',
        'Time investment: budget approximately one hour of transcription per minute of speech',
      ],
      teacherNotes:
        'Transcription is time-consuming and students often underestimate the effort involved. Stress that they do not need to transcribe all their data to the same level of detail -- they can transcribe the most analytically relevant sections in full and summarise the rest. The transcription conventions chosen should be justified in the methodology section.',
    },
    {
      id: 'y13-pres-03-s06',
      slideNumber: 6,
      title: 'Using Secondary Sources and Existing Research',
      bulletPoints: [
        'Secondary sources: existing research, theories, and studies relevant to your topic',
        'Academic journals: Journal of Sociolinguistics, Language in Society, English Language and Linguistics',
        'Use theory to frame your research question and interpret your findings',
        'Engage critically with sources: do not just summarise, evaluate and apply',
        'Harvard referencing: all sources cited in text and listed in bibliography',
        'Your own data is the centre of the investigation -- theory supports, not dominates',
      ],
      teacherNotes:
        'Students sometimes produce what is effectively a literature review rather than an investigation. The secondary source material should appear in the introduction (to frame the question) and in the discussion (to contextualise findings), but the analytical core must be based on the students own primary data. The ratio should be roughly 70% own data analysis, 30% theoretical framing.',
    },
    {
      id: 'y13-pres-03-s07',
      slideNumber: 7,
      title: 'The Investigation Structure',
      bulletPoints: [
        'Introduction: research question, context, rationale, theoretical framework',
        'Methodology: how data was collected, transcribed, and analysed; ethical considerations',
        'Analysis: systematic examination of data using linguistic frameworks',
        'Discussion: interpretation of findings; connections to existing theory',
        'Conclusion: summary of findings; limitations; suggestions for further research',
        'Appendix: data samples, transcripts, transcription key',
      ],
      teacherNotes:
        'The investigation structure mirrors real academic research articles. Introducing students to the genre conventions of academic writing is an important part of this unit. The methodology section is often underdeveloped -- remind students that explaining how they collected and analysed data is itself an analytical skill being assessed. Limitations should be discussed honestly.',
    },
    {
      id: 'y13-pres-03-s08',
      slideNumber: 8,
      title: 'Analytical Rigour in the Investigation',
      bulletPoints: [
        'Rigour: your findings should be grounded in specific evidence from your data',
        'Avoid over-generalising from a small sample',
        'Acknowledge counter-examples and explain why they do not invalidate your argument',
        'Use framework terminology precisely throughout the analysis section',
        'Quantitative claims must be supported by counts, percentages, or comparisons',
        'Qualitative claims must be supported by specific quotations from data',
      ],
      teacherNotes:
        'Analytical rigour is what distinguishes a strong investigation from a weak one. Students who cherry-pick supporting examples and ignore counter-evidence will be penalised. Model how to acknowledge and explain a counter-example: "While most instances in the data support [claim], three exceptions suggest [qualification], which indicates [nuanced interpretation]."',
    },
    {
      id: 'y13-pres-03-s09',
      slideNumber: 9,
      title: 'Common Investigation Pitfalls',
      bulletPoints: [
        'Pitfall 1: a research question too broad to answer with a small data set',
        'Pitfall 2: data collected that does not directly address the research question',
        'Pitfall 3: analysis section reads as description, not interpretation',
        'Pitfall 4: no engagement with existing theory or research in the discussion',
        'Pitfall 5: ethical issues (recording without consent, identifying participants)',
        'Pitfall 6: exceeding the word count significantly, reducing analytical depth',
      ],
      teacherNotes:
        'Each pitfall should be illustrated with a brief example. These pitfalls are based on common examiner feedback -- presenting them explicitly prevents students making avoidable errors. A progress checkpoint at the data collection stage (before writing begins) allows the teacher to identify students at risk of pitfall 1 or 2 before it is too late.',
    },
    {
      id: 'y13-pres-03-s10',
      slideNumber: 10,
      title: 'Investigation Timeline and Next Steps',
      bulletPoints: [
        'Week 1-2: finalise research question; complete secondary source reading',
        'Week 3-4: collect and transcribe primary data',
        'Week 5-6: complete quantitative analysis; begin qualitative analysis',
        'Week 7-8: write analysis and discussion sections',
        'Week 9: write introduction, methodology, and conclusion',
        'Week 10: redrafting, proofreading, referencing check, and submission',
      ],
      teacherNotes:
        'The timeline assumes approximately 10 weeks from brief to submission -- adjust according to your school calendar. The most common scheduling error is leaving writing until the last two weeks; analysis and writing should proceed together. Build in a compulsory progress check at week 5 (data collection complete) and a draft submission at week 8.',
    },
  ],
};

// ============================================================
// Y13 PRESENTATION 4 -- Analysing and Presenting Data
// ============================================================

const y13DataPresentationPresentation: LessonPresentation = {
  id: 'y13-pres-04-data-presentation',
  lessonTitle: 'Analysing and Presenting Data',
  yearGroup: 'Y13',
  termUnit: 'Unit 4 -- Language Investigation',
  totalSlides: 10,
  slides: [
    {
      id: 'y13-pres-04-s01',
      slideNumber: 1,
      title: 'From Raw Data to Analysis: The Process',
      bulletPoints: [
        'Raw data: your collected texts or transcripts in their original form',
        'Stage 1: familiarisation -- read or listen to all data before beginning analysis',
        'Stage 2: initial coding -- identify broad patterns and recurring features',
        'Stage 3: focused coding -- examine key features in depth using frameworks',
        'Stage 4: quantification -- count significant features to support qualitative claims',
        'Stage 5: interpretation -- what do the patterns tell you about your research question?',
      ],
      teacherNotes:
        'The five-stage process models good analytical practice. Students who jump straight to stage 3 without familiarisation and initial coding often miss the most interesting patterns in their data. Stage 2 (initial coding) can be done with coloured highlighters on printed transcripts -- a concrete, tactile approach that many students find more productive than working on screen.',
      activity:
        'Live coding exercise: students receive an anonymised transcript relevant to a sample research question. They have 10 minutes to code it independently, then compare coding with a partner. Discussion: what did different coders notice? What does this tell us about the interpretive nature of coding?',
    },
    {
      id: 'y13-pres-04-s02',
      slideNumber: 2,
      title: 'Quantitative Analysis: What to Count and How',
      bulletPoints: [
        'Type-token ratio (TTR): unique words divided by total words -- measures lexical diversity',
        'Word frequency: how often specific words or word classes appear',
        'Average sentence/utterance length: measure of syntactic complexity',
        'Feature frequency: how often a specific feature (e.g. hedges, interruptions) occurs',
        'Comparative frequency: comparing feature rates across two data sets',
        'Present quantitative findings in tables, graphs, or clearly labelled counts',
      ],
      teacherNotes:
        'Quantitative analysis needs to be purposeful -- students should count features that are directly relevant to their research question, not everything they can think of. A frequency count that reveals nothing interesting about the research question is wasted word count. Model how to present quantitative findings briefly and then interpret them at length.',
    },
    {
      id: 'y13-pres-04-s03',
      slideNumber: 3,
      title: 'Presenting Data in Tables and Graphs',
      bulletPoints: [
        'Tables: effective for comparing multiple features across multiple data sets',
        'Bar charts: effective for comparing frequency of features between groups',
        'Pie charts: effective for showing proportions within a single data set',
        'All visual data must be labelled clearly: title, axes labels, units, source',
        'Refer to all tables and graphs explicitly in the analysis prose',
        'Visual data appears in the appendix if it is large; small tables may appear in-text',
      ],
      teacherNotes:
        'Data presentation is a skill that students need explicit instruction in. A poorly labelled table or an unreferenced graph will not earn marks. Model what a well-presented data table looks like with clear headings, consistent formatting, and cross-referencing in the text. Remind students that the visual data is evidence -- it must be interpreted, not just displayed.',
      activity:
        'Data presentation workshop: students are given a set of raw frequency counts from a sample investigation. They must present the data in two different formats (one table, one graph) and write two sentences interpreting what each visual shows. Pairs compare presentations and discuss which format communicates the data most clearly.',
    },
    {
      id: 'y13-pres-04-s04',
      slideNumber: 4,
      title: 'Qualitative Analysis: Close Reading of Data',
      bulletPoints: [
        'Select the most analytically significant extracts from your data for close analysis',
        'Apply linguistic frameworks systematically to each selected extract',
        'Use AEE paragraph structure: Assertion -- Evidence -- Explanation',
        'Connect observations to your research question explicitly in every paragraph',
        'Do not describe -- interpret: what does this feature tell us about the question?',
        'Acknowledge when data is complex or contradictory and explain the implications',
      ],
      teacherNotes:
        'The single most common weakness in investigations is description rather than analysis. Students describe what is in the data but do not interpret what it means for their research question. Model the difference with two versions of the same analytical paragraph: one descriptive, one interpretive. The interpretive version connects every observation back to the research question.',
    },
    {
      id: 'y13-pres-04-s05',
      slideNumber: 5,
      title: 'Triangulating Quantitative and Qualitative Findings',
      bulletPoints: [
        'Triangulation: using multiple methods or data types to cross-check findings',
        'Quantitative pattern: "Female speakers used twice as many hedging devices as male speakers"',
        'Qualitative interpretation: "In the following extracts, hedging constructs [specific effect]..."',
        'Convergence: when both methods point to the same conclusion -- strengthens argument',
        'Divergence: when methods give contradictory results -- requires further investigation',
        'Present triangulated findings in the discussion section to show critical engagement',
      ],
      teacherNotes:
        'Triangulation is a concept from social science research methodology. At this level, it does not need to be highly technical -- the key principle is that findings are more credible when they are supported by more than one type of evidence. Students who use only qualitative analysis are missing an opportunity to strengthen their arguments with quantitative support and vice versa.',
    },
    {
      id: 'y13-pres-04-s06',
      slideNumber: 6,
      title: 'Writing the Analysis Section',
      bulletPoints: [
        'The analysis section is the longest and most heavily weighted part of the investigation',
        'Organise by theme or by framework, not by feature checklist',
        'Each paragraph should advance a specific analytical argument',
        'Integrate quantitative and qualitative evidence within paragraphs',
        'Use signposting language: "Further evidence of this pattern can be seen in...",',
        'Conclude each analytical section with a mini-summary connecting back to the question',
      ],
      teacherNotes:
        'Organisation is crucial in the analysis section. Students who organise by feature (first I will discuss lexis, then grammar) often produce repetitive work. Organising by analytical theme (the construction of authority; the negotiation of solidarity) allows each section to integrate multiple frameworks purposefully. Model the thematic structure with a sample investigation plan.',
    },
    {
      id: 'y13-pres-04-s07',
      slideNumber: 7,
      title: 'Writing the Discussion Section',
      bulletPoints: [
        'The discussion interprets and contextualises the findings of the analysis',
        'Connect your findings to existing theory: do your results support or challenge it?',
        'Consider the limitations of your study: sample size, data collection method, bias',
        'Suggest implications: what do your findings tell us about language use more broadly?',
        'Propose further research: what related questions emerge from your investigation?',
        'The discussion is where your voice as a linguist is most clearly heard',
      ],
      teacherNotes:
        'The discussion section is where the most sophisticated thinking happens. Students who simply restate their findings without connecting them to theory or acknowledging limitations will not access the highest marks. A strong discussion demonstrates that the student understands their investigation as one contribution to a larger field of enquiry, not as a definitive answer to a complex question.',
      activity:
        'Discussion paragraph practice: students write one discussion paragraph connecting their analysis findings to a named theoretical position. They must include: a specific finding from their analysis, a named theory or theorist, a statement of convergence or divergence, and a limitation of the conclusion. Peer assessment against these four criteria.',
    },
    {
      id: 'y13-pres-04-s08',
      slideNumber: 8,
      title: 'Acknowledging Limitations',
      bulletPoints: [
        'All research has limitations -- acknowledging them shows academic maturity',
        'Sample size limitations: a small corpus cannot generate universal claims',
        'Selection bias: were your data sources representative?',
        'Observer effect: did the presence of a recorder change the language used?',
        'Coding subjectivity: is your coding system replicable by another researcher?',
        'Word count constraints: what further analysis would a longer study allow?',
      ],
      teacherNotes:
        'Students are often reluctant to acknowledge limitations, fearing it will make their investigation look weak. Emphasise that the opposite is true: a student who can identify the limitations of their own work demonstrates epistemological sophistication. The limitations section should also suggest how future research could address each limitation identified.',
    },
    {
      id: 'y13-pres-04-s09',
      slideNumber: 9,
      title: 'The Appendix: What to Include and How',
      bulletPoints: [
        'Include all data that supports your analysis but would interrupt the main text',
        'Full transcripts or extended text extracts (annotated)',
        'Raw frequency tables before synthesis',
        'Transcription key and any coding rubric used',
        'Consent forms (anonymised) or notes on ethical procedures',
        'Label all appendix items clearly (Appendix A, Appendix B) and cross-reference in text',
      ],
      teacherNotes:
        'The appendix is not counted in the word limit but it is assessed -- examiners read it to verify that the analysis in the main text is grounded in the data. Ensure transcripts are neatly formatted and fully labelled. An appendix that is difficult to navigate will frustrate the examiner and undermine the impression created by the main text.',
    },
    {
      id: 'y13-pres-04-s10',
      slideNumber: 10,
      title: 'Final Checklist and Submission Preparation',
      bulletPoints: [
        'Research question clearly stated and addressed throughout',
        'Methodology section explains data collection and analysis procedures',
        'Analysis uses precise framework terminology and AEE structure',
        'Discussion connects findings to theory and acknowledges limitations',
        'All data in appendix is clearly labelled and cross-referenced',
        'Harvard referencing consistent and complete; word count within specification limits',
      ],
      teacherNotes:
        'Run this checklist as a final review approximately one week before submission. Students should be able to tick all six criteria -- if they cannot, they have a clear list of remaining tasks. A peer-review swap (read each other\'s investigations against this checklist) is one of the most useful final-stage activities and models the kind of critical reading that examiners will apply.',
    },
  ],
};

// ============================================================
// EXPORT: all eight presentations
// ============================================================

export const ialPresentations: LessonPresentation[] = [
  // Y12
  y12FrameworksPresentation,
  y12IdentityPresentation,
  y12LanguageChangePresentation,
  y12DataAnalysisPresentation,
  // Y13
  y13OriginalWritingPresentation,
  y13CommentaryPresentation,
  y13ResearchMethodsPresentation,
  y13DataPresentationPresentation,
];
