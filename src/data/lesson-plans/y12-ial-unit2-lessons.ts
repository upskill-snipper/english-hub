import type { LessonPlan } from '@/types'

export const y12IalUnit2Lessons: LessonPlan[] = [
  // ── Lesson 1: Prescriptivism vs Descriptivism ──────────────────────────────
  {
    id: 'y12u2-01',
    title: 'Prescriptivism vs Descriptivism - Theories of Language Change',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand and distinguish between prescriptivist and descriptivist attitudes to language change',
      'Evaluate the arguments for and against each theoretical position',
      'Apply knowledge of prescriptivism and descriptivism to real examples of language debate',
      'Begin to construct an argued position on language change for use in exam essays',
    ],
    successCriteria: [
      'I can define prescriptivism and descriptivism accurately and illustrate each with an example',
      'I can explain at least two arguments used by prescriptivists and two used by descriptivists',
      'I can analyse a real-world language debate using both theoretical perspectives',
      'I can write a paragraph that presents and evaluates a position on language change',
    ],
    keywords: [
      'prescriptivism',
      'descriptivism',
      'language change',
      'standard English',
      'linguistic authority',
      'language attitudes',
      'value judgement',
      'linguistic relativity',
      'prescriptive rule',
      'linguistic variation',
    ],
    starterActivity: {
      title: 'Right or Wrong? Language Attitude Sorting',
      duration: '12 minutes',
      instructions:
        'Display ten controversial language usage statements on the board - for example: "Literally cannot mean figuratively," "Disinterested can mean uninterested," "Ending a sentence with a preposition is incorrect," "They as a singular pronoun is wrong." Students work in pairs to decide: correct or incorrect? After two minutes, take a class vote for each statement. Reveal the descriptivist position for each (all are legitimate or contested usages) and use this to introduce the core tension between prescriptivism and descriptivism. Ask: who decides what is "correct" English, and on what authority?',
      differentiation: {
        support:
          'Provide a glossary card with the definitions of prescriptivism and descriptivism before the activity so students can refer to these terms during discussion.',
        core: 'Students vote and justify their position for each statement, then discuss what principle underlies their reasoning.',
        stretch:
          'Students identify which statements reflect social prejudice rather than linguistic logic and articulate the distinction between grammatical error and social stigma.',
      },
      resources: [
        'Language Attitude Sorting slide (ten statements)',
        'Mini-whiteboards or response cards',
        'Prescriptivism/descriptivism glossary card',
      ],
    },
    mainActivities: [
      {
        title: 'Theoretical Framework - Prescriptivism and Descriptivism Explained',
        duration: '25 minutes',
        instructions:
          'Teacher delivers a structured explanation of the two frameworks using examples. Prescriptivism: language has correct forms that must be preserved; change represents decay or corruption; associated with figures like Jonathan Swift (A Proposal for Correcting the English Tongue, 1712), Robert Lowth (A Short Introduction to English Grammar, 1762), and modern commentators such as Lynne Truss (Eats, Shoots and Leaves). Descriptivism: language change is natural, inevitable, and value-neutral; linguists describe how language is actually used rather than prescribing how it should be used; associated with the OED project, Steven Pinker, David Crystal. Students take structured notes using a two-column comparison frame. After the explanation, students work in pairs to complete a "Key Arguments" table, populating each side with three arguments from the explanation. Teacher circulates and addresses misconceptions.',
        differentiation: {
          support:
            'Provide a partially completed comparison table with some arguments already listed for students to match, complete, or expand.',
          core: 'Students complete the two-column comparison independently using notes from the explanation.',
          stretch:
            'Students evaluate which position they find more intellectually convincing and annotate their table with their reasoning, ready to use in a class debate.',
        },
        resources: [
          'Prescriptivism vs Descriptivism comparison frame handout',
          'Key thinkers reference card (Swift, Lowth, Crystal, Pinker, Trudgill)',
          'PowerPoint slides with examples and quotations',
        ],
      },
      {
        title: 'Applying the Frameworks - Media Language Debate Analysis',
        duration: '30 minutes',
        instructions:
          'Distribute two short newspaper opinion pieces: one prescriptivist (e.g., a Daily Mail column lamenting the decline of grammar) and one descriptivist (e.g., a Guardian piece defending new slang or pronoun change). Students annotate each text, highlighting: the position taken, the language used to express that position (e.g., emotive vocabulary, appeals to authority, loaded terms such as "corruption" or "evolution"), and any evidence cited. Students then write a structured response of 200-250 words answering the question: "How do these two writers differ in their attitudes to language change, and which position do you find more linguistically well-founded?" Pairs share responses and identify the strongest arguments made.',
        differentiation: {
          support:
            'Provide a sentence-by-sentence annotation guide with specific prompts: "Underline any word that shows the writer disapproves of change" and "Circle any evidence the writer uses to support their claim."',
          core: 'Students annotate independently and write the structured response using appropriate metalanguage.',
          stretch:
            'Students evaluate the quality of evidence in each article and consider whether either writer commits the logical fallacy of appealing to tradition or appealing to nature.',
        },
        resources: [
          'Two newspaper opinion pieces (prescriptivist and descriptivist)',
          'Annotation guide for support students',
          'Metalanguage reference sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Position Statement and Peer Challenge',
      duration: '15 minutes',
      instructions:
        'Each student writes a two-sentence position statement beginning: "I believe that prescriptivism / descriptivism provides a more useful framework for understanding language change because..." Students share their statement with a partner. The partner must provide one challenge or counter-argument. Students have two minutes to respond to the challenge. Teacher takes three examples and leads a brief whole-class discussion about whether a "balanced" position between the two frameworks is possible or desirable.',
      differentiation: {
        support:
          'Provide a sentence frame: "I believe that [position] is more useful because [reason 1] and [reason 2]. However, I acknowledge that [concession]."',
        core: "Students write independently and respond to their partner's challenge using specific terminology.",
        stretch:
          'Students consider whether the prescriptivist/descriptivist binary is itself an oversimplification and suggest a more nuanced model.',
      },
    },
    homework:
      "Find one real example of a prescriptivist language complaint (newspaper, blog, social media) and one example of a descriptivist response. Write a 150-word comparison using the terminology from today's lesson. Bring to next lesson.",
    worksheetQuestions: [
      {
        question: 'Define prescriptivism and give one example of a prescriptivist language rule.',
        lines: 4,
        modelAnswer:
          'Prescriptivism is the view that language has correct forms that should be enforced and that change represents deterioration. An example is the rule that a sentence should not end with a preposition, codified by Robert Lowth in 1762 but not inherent to English grammar.',
        marks: 3,
      },
      {
        question: 'Define descriptivism and explain why linguists generally favour this approach.',
        lines: 4,
        modelAnswer:
          'Descriptivism is the approach of describing how language is actually used, without making value judgements about whether change is good or bad. Linguists favour it because language change is a natural, universal process driven by social and communicative needs, not by declining standards.',
        marks: 3,
      },
      {
        question:
          'Explain one argument a prescriptivist might use against the use of "they" as a singular pronoun.',
        lines: 3,
        modelAnswer:
          'A prescriptivist might argue that "they" is a plural pronoun and using it as a singular violates grammatical agreement rules established over centuries, potentially causing ambiguity in written communication.',
        marks: 2,
      },
      {
        question: 'How would a descriptivist respond to the argument above?',
        lines: 4,
        modelAnswer:
          'A descriptivist would point out that singular "they" has been used in English since at least the fourteenth century (Chaucer uses it), that the "rule" against it was imposed artificially in the eighteenth century, and that it fulfils a clear communicative need as a gender-neutral singular pronoun.',
        marks: 3,
      },
      {
        question:
          'Evaluate the view that language change always represents a decline in standards. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will acknowledge the prescriptivist position - that standards in written and formal communication matter for clarity and social cohesion - before systematically dismantling the claim through descriptivist evidence. Key points include: all earlier forms of English were once "new" (Middle English was change from Old English); change often adds expressive capacity rather than reducing it; the standard itself is a socially contingent construct, not an objective norm; Aitchison\'s metaphor of language as a living organism rather than a decaying artefact. The best responses will evaluate rather than simply list, considering whether the question of "decline" is empirically answerable or inherently ideological.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'This lesson sets up a theoretical framework that underpins the entire unit - ensure students have a secure understanding of both terms before moving on.',
      'Avoid presenting this as a simple binary: the best students will understand that most linguists are descriptivists in their methodology while still acknowledging contexts (e.g., formal writing, public communication) where prescriptive standards serve a purpose.',
      'The newspaper texts chosen should be recent (ideally within five years) to maintain engagement. The Guardian and Daily Mail language columns are good sources.',
      'If time permits, showing a short clip of a prescriptivist commentator (e.g., John Humphrys) alongside a short clip of David Crystal responding creates a memorable hook for the debate.',
      'Check that students understand the distinction between a social judgement about language and a linguistic analysis - this is foundational for the comparative essay in the exam.',
    ],
    targetedSkills: [
      'AO1 - Applying linguistic terminology accurately',
      'AO2 - Demonstrating knowledge of language theories and frameworks',
      'AO3 - Analysing language in its social and historical context',
      'Critical evaluation of theoretical positions',
      'Structured analytical writing',
    ],
  },

  // ── Lesson 2: Historical English Change - Old, Middle, and Early Modern ────
  {
    id: 'y12u2-02',
    title: 'Historical English Change - Old English to Early Modern English',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Identify the key linguistic features of Old English, Middle English, and Early Modern English',
      'Explain the main causes of change at each historical stage (invasion, contact, printing, standardisation)',
      'Analyse short extracts from each period, identifying features and contextualising them historically',
      'Construct a diachronic narrative of English from 450 AD to 1700',
    ],
    successCriteria: [
      'I can identify and explain at least three features that distinguish Old English from Modern English',
      'I can explain the role of the Norman Conquest in shaping Middle English vocabulary',
      'I can describe the significance of the printing press and the Great Vowel Shift for Early Modern English',
      'I can annotate a historical text extract and link linguistic features to their historical causes',
    ],
    keywords: [
      'Old English',
      'Middle English',
      'Early Modern English',
      'inflection',
      'synthetic language',
      'analytic language',
      'Norman Conquest',
      'diglossia',
      'Great Vowel Shift',
      'standardisation',
      'kenning',
      'lexical borrowing',
    ],
    starterActivity: {
      title: 'Timeline Ordering Challenge',
      duration: '10 minutes',
      instructions:
        "Provide groups of three with a set of twelve laminated cards: four key events (Viking invasions, Norman Conquest, Caxton's printing press, King James Bible), four key terms (inflection, diglossia, Great Vowel Shift, standardisation), and four short text extracts (one from Old English, one Middle English, one Early Modern, one Present Day). Students must match each text extract to its period and then arrange all twelve cards on a timeline. Groups compare their timelines and justify any differences. Teacher reveals the correct timeline and uses it to frame the lesson.",
      differentiation: {
        support:
          'Provide a completed timeline skeleton with the four events already placed; students only match terms and text extracts.',
        core: 'Students complete the full matching and ordering task independently within their groups.',
        stretch:
          'Students annotate each card with a brief explanation of why that feature or event was linguistically significant.',
      },
      resources: [
        'Timeline card sets (laminated, one set per group of three)',
        'Blank timeline strip for each group',
        'Answer slide for whole-class review',
      ],
    },
    mainActivities: [
      {
        title: 'Three-Stage Diachronic Lecture Notes',
        duration: '30 minutes',
        instructions:
          "Teacher leads a structured input session covering all three periods. Old English (450-1100): synthetic grammar with inflections and grammatical gender, Germanic vocabulary, Viking influence and levelling of endings, kennings in poetry (whale-road, bone-house), minimal standardisation. Middle English (1100-1500): Norman Conquest creating diglossia, French lexical stratification (cow/beef, pig/pork, sheep/mutton), loss of inflections and emergence of fixed SVO word order, Chaucer and East Midland dialect prestige, dialectal variation. Early Modern English (1500-1700): Renaissance Latinate borrowings and inkhorn controversy, Shakespeare's lexical coinages and grammatical flexibility, thou/you social distinction, Great Vowel Shift changing vowel sounds, Caxton's printing press beginning standardisation. Students use a structured three-column note frame. Pause after each section for a two-minute pair-check.",
        differentiation: {
          support:
            'Provide a partially completed note frame with headings, sub-headings, and key dates already printed; students add content during the lecture.',
          core: 'Students take full notes on the three-column frame, using their own abbreviations and organisational choices.',
          stretch:
            'Students add a fourth column evaluating which period saw the most significant linguistic change and why, with reference to specific linguistic features.',
        },
        resources: [
          'Three-column note frame (Old English / Middle English / Early Modern)',
          'PowerPoint with text extracts and timeline visuals',
          'Key term glossary for the three periods',
        ],
      },
      {
        title: 'Annotated Text Analysis - Three Historical Extracts',
        duration: '30 minutes',
        instructions:
          "Students receive a worksheet containing three short extracts (approximately six lines each): an Old English passage (from Beowulf or the Anglo-Saxon Chronicle), a Middle English passage (from Chaucer's Canterbury Tales prologue), and an Early Modern passage (from a Shakespeare play or the King James Bible). For each extract, students annotate: (a) one phonological/graphological feature, (b) one lexical/semantic feature, (c) one grammatical feature, with a brief contextual explanation for each. Students work independently for 20 minutes. For the final 10 minutes, pairs compare annotations and resolve any disagreements. Teacher selects three responses to share and discuss with the class, modelling the level of contextual depth required.",
        differentiation: {
          support:
            'Provide an annotation scaffold with sentence starters: "This phonological feature is significant because it shows..." and "This grammatical feature reflects the context of the period in which..."',
          core: 'Students annotate using appropriate metalanguage and contextualise each feature with reference to historical causes.',
          stretch:
            'Students write a 100-word comparative conclusion identifying which extract shows the most variation from Present Day English and explaining why, using at least three linguistic concepts.',
        },
        resources: [
          'Three historical text extracts worksheet',
          'Annotation scaffold for support students',
          'Linguistic frameworks checklist (GASP: graphology, grammar, semantics, phonology)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Exit Quiz - Historical Change in Five Questions',
      duration: '10 minutes',
      instructions:
        'Students complete a five-question multiple-choice quiz on mini-whiteboards or paper: (1) What term describes Old English\'s grammatical system of noun endings? (2) What event in 1066 introduced French vocabulary into English? (3) What word formation device is "whale-road" an example of? (4) What sound change affected long vowels from the fifteenth century onwards? (5) What social distinction was encoded in the thou/you pronoun system? Teacher reviews answers and addresses any gaps before students leave.',
      differentiation: {
        support: 'Students may use their notes for questions 3-5 if needed.',
        core: 'Students complete the quiz from memory and check against notes afterwards.',
        stretch:
          'Students write a brief explanation for each answer rather than just the answer itself.',
      },
    },
    homework:
      "Write a 300-word analytical paragraph comparing the Old English extract and the Early Modern English extract from today's lesson. Use the frameworks GASP (graphology, grammar, semantics, phonology) and explain at least one historical cause for the differences you identify.",
    worksheetQuestions: [
      {
        question:
          'What is a synthetic language? Give an example of how this affected Old English grammar.',
        lines: 4,
        modelAnswer:
          'A synthetic language conveys grammatical relationships through inflectional word endings rather than through fixed word order. In Old English, nouns declined through four cases (nominative, accusative, genitive, dative) and belonged to one of three grammatical genders, meaning word order could be relatively free because the endings showed who did what to whom.',
        marks: 3,
      },
      {
        question: 'Explain the concept of diglossia as it applied to England after 1066.',
        lines: 4,
        modelAnswer:
          'Diglossia is a situation where two languages coexist within a community, each used in different social contexts. After the Norman Conquest, Norman French was the "high" variety used in government, law, religion, and literature, while English was the "low" variety used in everyday domestic and agricultural life. This situation lasted roughly two centuries and produced lasting lexical stratification in English.',
        marks: 4,
      },
      {
        question:
          'Give three examples of the lexical stratification created by the Norman Conquest, explaining what each pair reveals.',
        lines: 6,
        modelAnswer:
          'Cow (Old English, animal in field) / beef (French, meat at table); pig / pork; sheep / mutton. These pairs reflect the social division: English-speaking peasants used Germanic words for the animals they tended, while French-speaking aristocrats used French words for the food they consumed. This stratification is still visible in Modern English vocabulary.',
        marks: 3,
      },
      {
        question:
          'What was the Great Vowel Shift and why is it significant for understanding Early Modern English?',
        lines: 5,
        modelAnswer:
          'The Great Vowel Shift was a systematic raising of long vowel sounds that began in the fifteenth century and was largely complete by the seventeenth. It changed the pronunciation of words like "time" (formerly pronounced "teem"), "house" (formerly "hoos"), and "name" (formerly "nahme"). It is significant because it explains why English spelling is inconsistent - words were spelled before the shift was complete, preserving older spellings for changed sounds.',
        marks: 4,
      },
    ],
    teacherNotes: [
      "Use high-quality reproductions of historical manuscripts if available - seeing the visual appearance of Old and Middle English script adds to students' engagement and understanding.",
      'The three-period framework is necessarily simplified. Acknowledge to students that "Old English," "Middle English," and "Early Modern English" are scholarly categories imposed retrospectively - speakers did not experience a sudden change from one period to the next.',
      'For the Beowulf extract, use a parallel text (Old English with Modern English translation alongside) so students can engage with the language without needing to decode it from scratch.',
      'The thou/you distinction is often the most memorable feature for students. Consider using a Shakespeare scene where the pronoun shifts within a conversation (e.g., Hamlet and Claudius) to illustrate the social dynamics.',
      'Ensure time is protected for the annotated text analysis - this is the closest equivalent to the exam task and the skill most in need of practice.',
    ],
    targetedSkills: [
      'AO1 - Applying linguistic terminology to historical texts',
      'AO2 - Knowledge of historical language change and its causes',
      'AO3 - Contextualising language change within historical events',
      'Diachronic comparative analysis',
      'Structured note-taking and retrieval',
    ],
  },

  // ── Lesson 3: Contemporary Change - Technology, Globalisation, Youth Language
  {
    id: 'y12u2-03',
    title: 'Contemporary Language Change - Technology, Globalisation, and Youth Language',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Identify and explain the main drivers of contemporary language change in the twenty-first century',
      'Analyse specific examples of technology-driven, globalisation-driven, and youth language change',
      'Evaluate conflicting attitudes towards contemporary language change',
      "Apply relevant theoretical concepts (Aitchison's metaphors, Crystal's technospeak) to contemporary data",
    ],
    successCriteria: [
      'I can explain at least three distinct drivers of contemporary language change with examples',
      'I can describe what is meant by globalisation as a driver of language change and give two lexical examples',
      'I can identify features of youth language and explain their social functions',
      'I can write analytically about contemporary language change using appropriate terminology',
    ],
    keywords: [
      'technolect',
      'globalisation',
      'Americanisation',
      'youth language',
      'slang',
      'neologism',
      'semantic shift',
      'register',
      'identity marker',
      'language levelling',
      'netspeak',
      'emoji',
    ],
    starterActivity: {
      title: 'Neologism Audit - New Words from the Last Ten Years',
      duration: '12 minutes',
      instructions:
        'Students spend three minutes independently brainstorming as many new words or phrases they can think of that have entered English since 2014. They then sort their words into three columns: technology-related (e.g., "selfie," "deepfake," "scroll"), globalisation/American influence (e.g., "on fleek," "lit," "vibe"), and youth/social group language (e.g., "slay," "no cap," "snatched"). Groups compare lists and identify overlaps and ambiguities - can a word fit more than one category? Teacher facilitates a brief discussion: what does the range and volume of neologisms suggest about the pace of contemporary change?',
      differentiation: {
        support:
          'Provide a word bank of twenty neologisms for students to sort rather than generating their own list.',
        core: 'Students generate their own lists and sort independently before comparing with a group.',
        stretch:
          'Students research the etymology of three of their chosen words and present brief findings to the class.',
      },
      resources: [
        'Neologism sorting grid (three-column worksheet)',
        'Word bank for support students',
        'Dictionaries or devices for stretch research',
      ],
    },
    mainActivities: [
      {
        title: 'Three Drivers of Contemporary Change - Structured Input and Discussion',
        duration: '28 minutes',
        instructions:
          'Teacher presents three contemporary drivers of language change with examples and theoretical connections. (1) Technology: the internet as a language engine; acronyms (LOL, ICYMI), blends (podcast, blog), semantic shifts (tweet, cloud, stream), Crystal\'s concept of "technospeak" and the claim that the internet democratises language production. (2) Globalisation and American English: Americanisms entering British English through media, film, and social platforms (sidewalk, movie, math, gotten); debates about whether this constitutes "language loss" or natural contact; McWhorter\'s view that English is becoming a global lingua franca with regional varieties emerging. (3) Youth language: slang as identity marker and group boundary; African American Vernacular English (AAVE) as a major source of contemporary slang entering mainstream use; the social dynamics of appropriation; Aitchison\'s damp spoon syndrome (the idea that disapproval of youth language reflects social anxiety rather than linguistic logic). Students take notes in a three-section grid. After each section (approximately 8 minutes each), a two-minute pair-discussion consolidates understanding.',
        differentiation: {
          support:
            'Provide a partially completed grid with key headings and one example per section already given; students add further examples and explanations.',
          core: 'Students take full notes on the three-section grid and add their own examples alongside teacher-provided ones.',
          stretch:
            'Students identify points of connection between all three drivers - for instance, how youth language and technology intersect on social media platforms.',
        },
        resources: [
          'Three drivers note-taking grid',
          'PowerPoint with contemporary examples, graphs of neologism rates, and media clips',
          'Crystal and Aitchison quotation cards',
        ],
      },
      {
        title: 'Source Analysis - Three Contemporary Language Change Texts',
        duration: '28 minutes',
        instructions:
          'Students receive three short data sources: a tweet or social media post using contemporary slang (approximately 50 words), an excerpt from a corpus study showing increasing frequency of an Americanism in British English over twenty years, and a paragraph from a blog post about the youth slang term "bussin." For each source, students answer: (a) What change is illustrated here, and what driver is responsible? (b) What linguistic frameworks can you apply (lexis, semantics, pragmatics, discourse)? (c) What attitude to language change does the source either reflect or provoke? Students work for 20 minutes individually, then spend 8 minutes comparing responses in pairs, preparing to feed back one strong point per source.',
        differentiation: {
          support:
            'Provide a structured question sheet with sub-questions breaking down the analysis into smaller steps, and a metalanguage reference card.',
          core: 'Students complete the analysis independently and compare in pairs.',
          stretch:
            'Students write a 100-word evaluative comment on whether the three sources together constitute sufficient evidence to claim that contemporary language change is primarily driven by digital technology.',
        },
        resources: [
          'Three contemporary data sources worksheet',
          'Metalanguage reference card (lexis, semantics, pragmatics, discourse, phonology)',
          'Corpus frequency graph for the Americanism source',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Two-Minute Argument - For and Against Contemporary Change',
      duration: '12 minutes',
      instructions:
        "Students are randomly assigned either a prescriptivist or a descriptivist position. They have three minutes to prepare a two-minute spoken argument using at least two pieces of evidence from today's lesson. Four students present (one prescriptivist, one descriptivist, then a second pair). The class votes on who made the stronger case and explains their reasoning. Teacher draws out the key evaluative point: descriptivists tend to have the stronger empirical case, but prescriptivists often reflect genuine social concerns about intelligibility and prestige.",
      differentiation: {
        support:
          'Provide an argument planning frame with sentence starters for the opening, evidence, and conclusion.',
        core: 'Students prepare and present independently within the time constraints.',
        stretch:
          'Students prepare a rebuttal to the opposing position in addition to their own argument.',
      },
    },
    homework:
      'Collect three examples of contemporary language change from different platforms (one from social media, one from a news website, one from spoken conversation or a podcast). For each example, identify the driver of change, the linguistic level affected (lexis, semantics, grammar, phonology), and your own analytical comment of 50 words. Present this as an annotated data collection for next lesson.',
    worksheetQuestions: [
      {
        question:
          'Define "neologism" and give three examples from contemporary English, each from a different driver of change.',
        lines: 5,
        modelAnswer:
          'A neologism is a newly coined word or phrase, or an existing word used with a new meaning. Examples: "deepfake" (technology); "sidewalk" gaining currency in British English (globalisation/Americanisation); "slay" meaning to perform or succeed impressively (youth/AAVE influence).',
        marks: 4,
      },
      {
        question:
          'Explain what Jean Aitchison meant by the "damp spoon syndrome" in the context of language change.',
        lines: 4,
        modelAnswer:
          'Aitchison\'s "damp spoon syndrome" refers to the irrational irritation some people feel towards language change - the way a damp spoon left in the sugar bowl annoys some people not for rational reasons but out of habit and tradition. She uses it to argue that prescriptive objections to language change are often expressions of social anxiety or class prejudice rather than genuine linguistic concerns.',
        marks: 3,
      },
      {
        question:
          'How might globalisation threaten linguistic diversity? Use specific evidence in your answer.',
        lines: 5,
        modelAnswer:
          'Globalisation promotes dominant languages - particularly English, and specifically American English - at the expense of smaller regional varieties and languages. The penetration of American vocabulary, idioms, and grammar into British English through media, film, and social platforms may accelerate levelling of distinctive British dialect features. At a macro level, language contact driven by globalisation has contributed to the endangered status of hundreds of minority languages worldwide.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Check that examples used are genuinely current - slang terms date quickly and using outdated examples can undermine credibility with students. Ask students to suggest examples before the lesson if possible.',
      'The AAVE discussion requires sensitivity. Frame it in terms of linguistic influence and social dynamics, acknowledging AAVE as a fully rule-governed and linguistically rich variety while also discussing the often-problematic dynamics of mainstream appropriation.',
      'The corpus frequency graph activity is particularly useful for demonstrating to students that language change can be measured empirically - this combats the vague assertion that change is just "happening."',
      "Aitchison's three metaphors (damp spoon, crumbling castle, infectious disease) are all worth introducing here as they recur frequently in exam responses. Consider providing them as a reference card.",
    ],
    targetedSkills: [
      'AO1 - Using terminology for contemporary linguistic change',
      'AO2 - Understanding theories of language change (Aitchison, Crystal)',
      'AO3 - Analysing language in its contemporary social context',
      'Data analysis and interpretation',
      'Evaluative spoken and written argument',
    ],
  },

  // ── Lesson 4: Language and the Internet - Netspeak, Emoji, Social Media ────
  {
    id: 'y12u2-04',
    title: 'Language and the Internet - Netspeak, Emoji, and Social Media',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Apply David Crystal\'s concept of "netspeak" to analyse computer-mediated communication (CMC)',
      'Identify and describe the linguistic features of social media language across different platforms',
      'Evaluate the role of emoji as a paralinguistic and semantic resource in digital communication',
      'Assess competing views on whether the internet is changing written language for better or worse',
    ],
    successCriteria: [
      'I can define netspeak and list at least five linguistic features associated with it',
      'I can compare the register and linguistic features of language on at least two social media platforms',
      'I can explain what emoji add to digital communication and how they function linguistically',
      'I can write analytically about a piece of CMC data using appropriate metalanguage',
    ],
    keywords: [
      'netspeak',
      'computer-mediated communication (CMC)',
      'synchronous',
      'asynchronous',
      'paralinguistic',
      'emoji',
      'abbreviation',
      'rebus principle',
      'multimodality',
      'discourse marker',
      'hashtag',
      'platform register',
    ],
    starterActivity: {
      title: 'Platform Linguistic Profiles - Comparing Twitter/X, Instagram, and WhatsApp',
      duration: '12 minutes',
      instructions:
        'Display three short authentic (anonymised) examples of digital communication: a tweet, an Instagram caption, and a WhatsApp group message. Students work in threes, each taking one platform, and spend four minutes noting distinctive linguistic features (length, formality, emoji use, hashtags, abbreviations, punctuation style). Groups then share findings and compile a class comparison on the board. Teacher facilitates: "What does this tell us about how platform shapes language?" introducing the concept of register being constrained by mode and platform affordance.',
      differentiation: {
        support:
          'Provide a feature checklist for students to tick rather than generating observations independently.',
        core: 'Students independently identify and describe features before comparing.',
        stretch:
          "Students consider why each platform has its particular linguistic norms and what consequences the platform's design (character limits, visual format, audience expectations) has for language use.",
      },
      resources: [
        'Three anonymised digital communication examples (projected)',
        'Feature checklist for support students',
        'Blank comparison table for class notes',
      ],
    },
    mainActivities: [
      {
        title: "Crystal's Netspeak - Framework and Feature Analysis",
        duration: '30 minutes',
        instructions:
          'Teacher explains Crystal\'s argument from Language and the Internet (2001): the internet has created a new form of communication that is neither purely written nor purely spoken but occupies a new space with its own distinctive features. Key netspeak features to cover: (1) graphological - lower case, lack of punctuation, asterisks for emphasis (*really*), emoticons and emoji; (2) lexical - abbreviations (LOL, IMO, BRB), blends (blog < weblog), rebus spelling (gr8, b4, ur); (3) grammatical - ellipsis, telegraphic syntax, lack of formal sentence structure; (4) pragmatic - phatic communication maintaining social bonds, reduced paralinguistic cues replaced by emoji. Students take notes and complete a "Netspeak Feature Spotter" worksheet by identifying examples of each feature in a provided dataset of ten short digital messages. They annotate each example with the correct label and a brief comment on its communicative function.',
        differentiation: {
          support:
            'Provide a labelled example for each feature category so students understand what they are looking for before beginning the activity.',
          core: 'Students complete the feature spotter independently using their notes.',
          stretch:
            "Students evaluate the extent to which Crystal's 2001 framework still applies to contemporary digital communication, considering changes since its publication (e.g., the rise of emoji as semantic rather than purely paralinguistic devices).",
        },
        resources: [
          "Crystal's Netspeak summary handout",
          'Netspeak Feature Spotter worksheet (with dataset of ten messages)',
          'Annotated example for support students',
        ],
      },
      {
        title: 'Emoji - Paralinguistics or New Writing System?',
        duration: '28 minutes',
        instructions:
          'Teacher introduces the debate about emoji with two theoretical positions. Position A (emoji as paralinguistic): emoji supplement verbal messages by adding tone, emotion, and context in the way that gesture and facial expression do in speech; they do not add propositional content independently. Position B (emoji as semantic resource): emoji can carry meaning independently of text (a thumbs-up as "yes," a red heart as "I love you"), can alter or reverse the meaning of accompanying text (ironic use), and represent an emergent visual-verbal writing system. Students read a short academic article excerpt on emoji semantics (approximately 300 words). They then analyse five emoji-containing messages, for each one deciding: (a) Does the emoji here function as paralinguistic (adding tone/emotion only) or semantic (adding or changing meaning)? (b) What would be lost if the emoji were removed? Pairs discuss findings and write a joint 150-word conclusion on the linguistic status of emoji.',
        differentiation: {
          support:
            'Provide a sentence frame for the conclusion: "Our analysis suggests that emoji function primarily as [paralinguistic/semantic] devices because in examples [X] and [Y] we found that..."',
          core: 'Students complete the analysis and write the joint conclusion independently using appropriate metalanguage.',
          stretch:
            'Students consider whether emoji can be considered a universal language or whether their meanings are culturally and contextually specific, and evaluate the implications for linguistic analysis.',
        },
        resources: [
          'Academic article excerpt on emoji semantics',
          'Five emoji-containing message examples worksheet',
          'Conclusion sentence frame for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Is the Internet Destroying or Enriching Language? Structured Debate',
      duration: '10 minutes',
      instructions:
        'Teacher poses the question: "The internet is enriching, not destroying, the English language." Students have two minutes to privately decide whether they agree or disagree and note their strongest reason. Teacher takes a show of hands, then calls on four students (two per side) to give their reason. Class votes again after hearing arguments to see if anyone has changed their mind. Teacher summarises: Crystal, Pinker, and McWhorter tend to argue for enrichment; Humphrys, Truss, and traditional prescriptivists argue for decline. Both positions require evidence - that is what exam essays reward.',
      differentiation: {
        support: 'Students may consult their notes when formulating their reason.',
        core: 'Students contribute from memory using terminology from the lesson.',
        stretch:
          'Students pre-identify a specific piece of counter-evidence to the position they agree with.',
      },
    },
    homework:
      "Collect a sample of your own digital communication from the past week (a WhatsApp conversation, a set of tweets, an Instagram caption - anonymise other people's messages). Analyse it using Crystal's netspeak framework, identifying at least four different features with specific examples and a brief explanation of each. Write this up in 250 words.",
    worksheetQuestions: [
      {
        question:
          'Define computer-mediated communication (CMC) and explain how it differs from both traditional written language and face-to-face speech.',
        lines: 5,
        modelAnswer:
          'CMC refers to communication that takes place via digital technology (email, social media, instant messaging). Unlike traditional written language, CMC is often rapid, informal, and graphologically non-standard. Unlike speech, it lacks prosody, gesture, and facial expression, but emoji and other devices partially compensate. Crystal describes CMC as a "third medium" between speech and writing rather than a degraded version of either.',
        marks: 4,
      },
      {
        question:
          'Identify and explain three graphological features of netspeak with an example of each.',
        lines: 6,
        modelAnswer:
          'Lower case typing (e.g., "i think we should go") avoids the effort of capitalisation and has become a register marker of informality. Lack of punctuation (e.g., "that sounds good see you there") condenses messages. Asterisks for emphasis (e.g., "*this* is the issue") replicate prosodic stress that cannot be shown in standard orthography.',
        marks: 6,
      },
      {
        question:
          'Explain how emoji can function as a semantic device rather than merely a paralinguistic one.',
        lines: 4,
        modelAnswer:
          'When emoji carry propositional meaning independently of accompanying text - for example, a thumbs-up to mean "yes" or a string of emoji that tells a story without words - they function semantically rather than merely expressing tone or emotion. They can also reverse or ironise a message\'s meaning, which is a semantic operation rather than simply a tonal one.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Ensure all digital communication examples used are genuinely anonymised and do not come from students in the class or from identifiable public figures in a way that could cause offence.',
      "Crystal's Language and the Internet was published in 2001 and revised in 2006. It is worth noting to students that it predates the smartphone era and the explosion of social media, so some of his examples feel dated. The framework, however, remains applicable.",
      'The emoji debate is genuinely unresolved in linguistics. Encourage students to see ambiguity as intellectually interesting rather than a problem to be resolved - the ability to present multiple positions and evaluate them is precisely what examiners reward.',
      'If the school has access to COCA or BNC corpora, a brief demonstration of how corpus linguistics can track the spread of netspeak features into general written English adds a valuable empirical dimension.',
    ],
    targetedSkills: [
      'AO1 - Applying CMC terminology (netspeak, paralinguistic, synchronous/asynchronous)',
      "AO2 - Understanding Crystal's theoretical framework",
      'AO3 - Analysing language in its digital context',
      'Multimodal text analysis',
      'Evaluative writing about competing theoretical positions',
    ],
  },

  // ── Lesson 5: Language Attitudes and the Change Debate ─────────────────────
  {
    id: 'y12u2-05',
    title: 'Language Attitudes and Debates - Standards, Diversity, and Identity',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand the relationship between language attitudes and social identity, power, and ideology',
      'Analyse public language debates using critical discourse analysis (CDA) tools',
      'Evaluate the ideological underpinnings of arguments about standard English',
      'Distinguish between linguistic attitudes as social phenomena and as descriptions of linguistic fact',
    ],
    successCriteria: [
      'I can explain what is meant by linguistic ideology and give two examples of how it shapes public discourse about language',
      'I can apply CDA concepts (lexical choice, framing, assumed knowledge) to a newspaper text about language',
      'I can evaluate the relationship between prescriptive attitudes and social class or cultural identity',
      'I can write analytically about language attitudes, distinguishing linguistic fact from social value judgement',
    ],
    keywords: [
      'language attitude',
      'linguistic ideology',
      'standard English',
      'prestige variety',
      'stigmatised variety',
      'critical discourse analysis',
      'framing',
      'deficit model',
      'diversity model',
      'covert prestige',
      'overt prestige',
      'social identity',
    ],
    starterActivity: {
      title: 'Accent Attitude Experiment',
      duration: '10 minutes',
      instructions:
        'Play three short audio clips (30 seconds each) of speakers with different accents reading the same short news passage: Received Pronunciation (RP), a Northern English urban accent, and a regional rural accent. (If audio is unavailable, use three written representations of the same passage rendered in different orthographic styles.) Students rate each speaker on four dimensions - intelligence, education, friendliness, trustworthiness - on a 1-5 scale, without hearing each other\'s ratings. Results are compiled anonymously and displayed. Teacher facilitates discussion: Do the ratings reflect linguistic reality? What do they reveal about social attitudes encoded in accent? Introduce the concept of the "matched guise" technique used in sociolinguistic research.',
      differentiation: {
        support:
          'Frame the activity explicitly: "We are researching attitudes, not giving genuine assessments. There are no correct answers - any response you give is valid data."',
        core: 'Students complete the rating task and participate in the analysis discussion.',
        stretch:
          'Students recall any awareness of making such judgements in their own lives and connect this to wider sociolinguistic concepts such as language as social marker.',
      },
      resources: [
        'Three audio clips or written representations',
        'Rating scale handout (four dimensions, 1-5)',
        'Anonymous results compilation (teacher-prepared)',
      ],
    },
    mainActivities: [
      {
        title: 'Linguistic Ideology and the Standard Language Myth',
        duration: '28 minutes',
        instructions:
          'Teacher introduces the concept of linguistic ideology - the set of beliefs and values attached to language and its use that go beyond purely linguistic description - and the "standard language ideology" specifically: the belief that one variety of a language (standard English) is inherently superior, clearer, and more "correct" than other varieties. Key theoretical points: (1) Standard English is a social and historical construct, not a linguistically superior form; it gained prestige through association with education, the printing press, and political power, not through superior grammar or clarity. (2) Labov\'s work on AAVE demonstrated that so-called "non-standard" varieties are fully rule-governed linguistic systems. (3) Honey vs Trudgill: John Honey (Language is Power, 1997) argued that teaching standard English is a matter of social justice and empowerment; Peter Trudgill argued that condemning non-standard varieties is itself a form of social discrimination. Students read an extract from each position (approximately 150 words each) and complete a debate analysis frame: claim, evidence, assumption, counter-argument.',
        differentiation: {
          support:
            'Provide pre-highlighted versions of the two extracts with the main claim already underlined; students identify evidence and assumption only.',
          core: 'Students complete the full debate analysis frame for both positions.',
          stretch:
            'Students evaluate which position better accounts for the experience of non-standard dialect speakers in education and the workplace, drawing on concepts such as covert prestige and linguistic capital.',
        },
        resources: [
          'Honey and Trudgill extract handout',
          'Debate analysis frame worksheet',
          'Highlighted version for support students',
        ],
      },
      {
        title: 'Critical Discourse Analysis of a Language Complaint Text',
        duration: '30 minutes',
        instructions:
          'Distribute a newspaper or magazine article (approximately 400 words) expressing concern about falling language standards - e.g., a piece about declining grammar in schools, the erosion of spelling by texting, or the corruption of English by slang. Students apply a CDA lens, working through the following questions in order: (1) Framing: how does the headline and opening sentence frame the issue? What assumptions are embedded? (2) Lexical choices: what words does the writer use to describe language change? Are these evaluative (decay, corruption, erosion) or neutral? (3) Constructed opposition: who are the "defenders" of language and who are the "destroyers"? What ideological values underpin this division? (4) Omitted voices: whose perspective is absent from this article? Students write 250 words applying at least three CDA concepts from this lesson, using specific quotations from the text as evidence.',
        differentiation: {
          support:
            'Provide a structured CDA question frame with sentence starters for each of the four questions.',
          core: 'Students complete the CDA analysis independently and write the 250-word response.',
          stretch:
            'Students consider whether CDA itself involves a set of ideological assumptions and evaluate how a linguist who disagreed with those assumptions might analyse the same text differently.',
        },
        resources: [
          'Language complaint article (printed)',
          'CDA concepts reference card',
          'CDA question frame for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Concept Mapping - Language, Power, and Change',
      duration: '12 minutes',
      instructions:
        'Students create a concept map connecting at least eight of the key terms from today\'s lesson and the previous lessons, with a labelled arrow or connecting phrase explaining each relationship (e.g., "standard English ← reinforced by → prescriptivism"). Students compare maps in pairs and discuss any connections they had not thought of. Teacher projects a model map and uses it to consolidate the conceptual landscape of the unit so far.',
      differentiation: {
        support:
          'Provide a partially completed map with six nodes already placed and connected; students add the remaining two and their connections.',
        core: 'Students create their own map from scratch using the key terms list.',
        stretch:
          'Students add three additional concepts from their wider reading or general knowledge and justify their inclusion.',
      },
    },
    homework:
      "Read the extract from Peter Trudgill's Sociolinguistics: An Introduction to Language and Society (provided). Write a 200-word critical response, evaluating whether Trudgill's position adequately addresses the concern that teaching non-standard varieties in schools could disadvantage pupils in formal contexts. Use at least three terms from today's lesson.",
    worksheetQuestions: [
      {
        question:
          'What is "standard language ideology" and how does it differ from a purely linguistic description of standard English?',
        lines: 5,
        modelAnswer:
          'Standard language ideology is the belief that one variety (standard English) is inherently superior, more correct, or more logical than other varieties. This goes beyond linguistic description, which would observe that standard English is simply the most codified and institutionally supported variety. A purely linguistic description would acknowledge that non-standard varieties are equally rule-governed; the ideology adds a value judgement about worth and correctness.',
        marks: 4,
      },
      {
        question:
          'Explain the difference between overt prestige and covert prestige, with an example of each.',
        lines: 5,
        modelAnswer:
          'Overt prestige is the status conferred by using the standard variety - using RP or standard grammar in formal contexts signals education and authority. Covert prestige is the status that non-standard varieties carry within their own communities - using local dialect features signals solidarity, authenticity, and group membership. For example, a speaker might use standard English in a job interview (overt prestige) but deliberately use dialect features with friends to signal belonging (covert prestige).',
        marks: 4,
      },
      {
        question:
          'How can critical discourse analysis reveal ideological assumptions in a text about language?',
        lines: 5,
        modelAnswer:
          'CDA examines how lexical choices, framing, and constructed oppositions in a text encode particular values and power relations. In a text about language "decline," for instance, evaluative vocabulary like "corruption" and "erosion" frames change as damage; the absence of voices approving the change implies that disapproval is the natural position. CDA reveals these assumptions as ideological choices rather than neutral observations.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The accent attitude experiment needs careful framing to avoid reinforcing the very prejudices it is designed to examine. Emphasise throughout that students\' ratings are research data, not "true" assessments, and that the point is to reveal how widespread these attitudes are - not to endorse them.',
      'The Honey/Trudgill debate is genuinely contested among linguists and the question of whether it is possible to simultaneously value linguistic diversity and support the teaching of standard English is worth dwelling on - it is more complex than the binary the debate sometimes implies.',
      'When selecting the language complaint article, avoid texts that target specific ethnic or regional communities in a way that could cause personal offence to students in the class. Language complaints about "text-speak" or "Americanisms" tend to be less personally charged.',
      'CDA is introduced here at a level appropriate for A-level. Students do not need to reference Fairclough by name in the exam but the analytical moves (examining lexical choices, framing, and ideological assumptions) are directly applicable and mark-earning.',
    ],
    targetedSkills: [
      'AO1 - Applying CDA terminology (framing, ideology, prestige)',
      'AO2 - Knowledge of Honey vs Trudgill debate and standard language ideology',
      'AO3 - Critically contextualising language within power structures',
      'Critical reading of persuasive texts',
      'Evaluative analytical writing',
    ],
  },

  // ── Lesson 6: Child Language Acquisition - Chomsky, Skinner, Piaget ────────
  {
    id: 'y12u2-06',
    title: 'Child Language Acquisition - Chomsky, Skinner, and Piaget',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand and distinguish between the key theories of child language acquisition: behaviourism (Skinner), nativism (Chomsky), and cognitive development theory (Piaget)',
      'Evaluate the strengths and limitations of each theoretical framework with reference to empirical evidence',
      'Apply theoretical knowledge to analyse real examples of child language data',
      'Understand how child language acquisition relates to theories of language change at the population level',
    ],
    successCriteria: [
      "I can explain Skinner's behaviourist model of language acquisition and identify one major limitation",
      "I can describe Chomsky's Language Acquisition Device (LAD) and Universal Grammar, and explain what evidence supports it",
      "I can explain Piaget's cognitive developmental stages and their implications for language acquisition",
      'I can apply at least two theoretical frameworks to an example of child language data',
    ],
    keywords: [
      'language acquisition',
      'behaviourism',
      'nativism',
      'Language Acquisition Device (LAD)',
      'Universal Grammar',
      'cognitive development',
      'critical period hypothesis',
      'virtuous error',
      'over-generalisation',
      'input hypothesis',
      'interactionism',
      'telegraphic stage',
    ],
    starterActivity: {
      title: 'Child Language Data - What Can You Observe?',
      duration: '12 minutes',
      instructions:
        'Display six short examples of child language: utterances from children at different developmental stages, including holophrastic speech ("Milk!"), telegraphic speech ("Daddy gone"), over-generalisation ("I goed to the shop"), and virtuous errors ("I putted my shoes on"). Students work in pairs to answer: What is the child doing here? Is this random error or systematic? What does this tell us about how language is being learned? After discussion, teacher reveals that over-generalisations and virtuous errors are evidence against simple imitation and the behaviourist model - a child cannot have heard "goed" from an adult, so they must have inferred a rule and applied it. This frames the lesson\'s theoretical focus.',
      differentiation: {
        support:
          'Provide a brief explanation of each stage (holophrastic, telegraphic, virtuous error) on a reference card before the activity.',
        core: "Students observe and describe independently before the teacher's framing.",
        stretch:
          'Students try to infer what grammatical rule the child has over-generalised and articulate it explicitly.',
      },
      resources: [
        'Six child language utterances displayed on board',
        'Stage reference card for support students',
      ],
    },
    mainActivities: [
      {
        title: 'Three Theories - Structured Comparison Input',
        duration: '30 minutes',
        instructions:
          "Teacher presents the three major theories in turn, with students completing a comparison grid. Skinner (behaviourism): language is learned through operant conditioning - imitation, reinforcement, and correction; criticism: virtuous errors show children produce forms they have never heard, so pure imitation is insufficient; Chomsky countered with the poverty of the stimulus argument. Chomsky (nativism): humans are biologically pre-programmed for language acquisition; the LAD contains knowledge of Universal Grammar - the deep structural rules common to all human languages; evidence: all children acquire language in a similar sequence regardless of culture; critical period hypothesis (Lenneberg) - if language is not acquired before puberty, acquisition becomes significantly harder. Piaget (cognitive development): language development follows cognitive development; children cannot use language to express concepts they have not yet cognitively grasped; stages: sensorimotor (0-2), pre-operational (2-7), concrete operational (7-11), formal operational (11+). Additionally, introduce Vygotsky's interactionist challenge to Piaget: language and cognition co-develop through social interaction; the Zone of Proximal Development (ZPD) emphasises the role of more capable others. Students complete the comparison grid and write one question about the theory they find least convincing.",
        differentiation: {
          support:
            'Provide a partially completed comparison grid with the theorist, key concept, and one piece of evidence already filled in for each theory; students add the limitation and their own example.',
          core: 'Students complete the full grid independently during the presentation.',
          stretch:
            'Students evaluate which theory best accounts for the virtuous error data from the starter activity and write a 50-word justification.',
        },
        resources: [
          'Theory comparison grid (columns: theorist, key concept, supporting evidence, limitation, student question)',
          'Partially completed version for support students',
          'Timeline of child language development stages handout',
        ],
      },
      {
        title: 'Applying Theory to Child Language Data',
        duration: '28 minutes',
        instructions:
          'Students receive a transcript of a child (approximately age 2.5) interacting with a parent over approximately twenty conversational turns (including questions, responses, virtuous errors, and telegraphic constructions). Working individually, students annotate the transcript, identifying: (a) the developmental stage evidenced by at least three specific features, (b) one example that supports a Skinnerian interpretation (imitation or parental reinforcement), (c) one example that supports a Chomskyan interpretation (evidence of innate rule construction rather than imitation), (d) one example that supports Piaget or Vygotsky (cognitive limitation or scaffolded learning). After 20 minutes, students form groups of three to compare annotations. Each group must produce a single agreed analysis of which theory is best supported by this data, with a reason. Groups share their conclusion in the final three minutes.',
        differentiation: {
          support:
            'Provide a partially annotated transcript with two features already identified; students add the remaining two independently.',
          core: 'Students complete the full annotation independently before comparing in groups.',
          stretch:
            'Students write a 100-word conclusion arguing that no single theory fully accounts for the data and proposing what an integrated account might look like.',
        },
        resources: [
          'Child language transcript (annotated version for teacher reference)',
          'Partially annotated version for support students',
          'Theory key concepts reference card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Theory Match - Rapid-Fire Review',
      duration: '10 minutes',
      instructions:
        'Teacher reads out ten short statements, each describing a concept, a piece of evidence, or a limitation. Students write the name of the theory they associate with the statement on mini-whiteboards and hold them up. Statements include: "Poverty of the stimulus," "Operant conditioning," "Zone of Proximal Development," "Critical period hypothesis," "Virtuous errors disprove this theory," "All children follow the same acquisition sequence," "Sensorimotor stage," "Universal Grammar." Teacher reviews each answer and clarifies any confusion.',
      differentiation: {
        support: 'Students may use their comparison grid for the first five questions.',
        core: 'Students respond from memory for all ten statements.',
        stretch:
          'Students write the theorist\'s name AND a one-word qualification of their own (e.g., "Chomsky - innate").',
      },
    },
    homework:
      "Read the provided extract from Chomsky's Aspects of the Theory of Syntax (1965) (simplified for A-level). Write a 250-word analytical response: (a) summarise Chomsky's main claim about the LAD, (b) explain one piece of evidence that supports it, and (c) evaluate one significant challenge to his position. Use appropriate terminology throughout.",
    worksheetQuestions: [
      {
        question: 'What is the "poverty of the stimulus" argument, and which theorist uses it?',
        lines: 4,
        modelAnswer:
          'The poverty of the stimulus argument, associated with Chomsky, holds that the language input children receive is too limited, inconsistent, and full of incomplete sentences (false starts, hesitations) to account for the grammatical competence they develop. Children acquire complex grammatical rules they have never explicitly been taught, suggesting an innate language-acquisition capacity rather than learned imitation.',
        marks: 3,
      },
      {
        question:
          'What are "virtuous errors" and what do they suggest about how children acquire language?',
        lines: 4,
        modelAnswer:
          'Virtuous errors are systematic errors in which children apply a grammatical rule correctly but over-generalise it to irregular forms - for example, "goed" instead of "went" or "mouses" instead of "mice." They suggest that children are constructing and applying abstract grammatical rules rather than imitating heard forms (since they could never have heard "goed" from an adult), supporting nativist and cognitive theories over behaviourism.',
        marks: 3,
      },
      {
        question:
          "Explain how Vygotsky's Zone of Proximal Development challenges Piaget's theory of cognitive development.",
        lines: 5,
        modelAnswer:
          'Piaget argued that language development must wait for cognitive development - children cannot use language to express what they have not yet cognitively grasped. Vygotsky challenged this by arguing that social interaction and language use with more capable others actively drives cognitive development, rather than merely reflecting it. The ZPD is the gap between what a child can do alone and what they can do with guided support; learning happens in this zone, meaning language and thought are mutually constitutive rather than sequentially ordered.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The CLA content sits slightly at the edge of the core Language Change focus for WEN02 but is explicitly included in the Edexcel IAL specification and is a common exam question. Do not deprioritise it.',
      "Avoid presenting Chomsky's theory as the definitive answer - it has attracted significant criticism and many contemporary linguists favour interactionist or usage-based accounts. Present all three frameworks as live theoretical options.",
      'The child language transcript works best if it is genuinely naturalistic. The CHILDES database (childes.talkbank.org) provides free, ethically collected transcripts of children at various developmental stages.',
      'If students ask how CLA relates to language change, the connection is generational transmission: each generation acquires a slightly different form of the language from the input they receive, and accumulated differences across generations drive historical change. This is worth articulating explicitly.',
    ],
    targetedSkills: [
      'AO1 - Applying CLA terminology accurately',
      'AO2 - Knowledge of Chomsky, Skinner, Piaget, and Vygotsky frameworks',
      'AO3 - Analysing child language data in theoretical context',
      'Evidence-based evaluation of competing theories',
      'Annotated transcript analysis',
    ],
  },

  // ── Lesson 7: Critical Discourse Analysis of Language Change ───────────────
  {
    id: 'y12u2-07',
    title: 'Critical Discourse Analysis of Language Change Texts',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Apply a critical discourse analysis (CDA) methodology to texts that discuss or enact language change',
      'Identify how discourse about language constructs ideological positions on change, identity, and power',
      'Analyse the relationship between language change and social structures using CDA tools',
      'Produce an extended analytical response applying CDA to two contrasting texts on language change',
    ],
    successCriteria: [
      'I can identify at least five distinct CDA features in a text (lexical choice, framing, presupposition, intertextuality, agency, passivisation)',
      'I can explain how each identified feature encodes an ideological position on language change',
      'I can compare two contrasting texts using a CDA framework, identifying shared and divergent ideological positions',
      'I can write a 300-word CDA analysis using precise metalanguage and specific textual evidence',
    ],
    keywords: [
      'critical discourse analysis',
      'ideology',
      'presupposition',
      'lexical choice',
      'agency',
      'passivisation',
      'intertextuality',
      'framing',
      'hegemony',
      'discourse community',
      'modality',
      'transitivity',
    ],
    starterActivity: {
      title: 'Spot the Presupposition',
      duration: '10 minutes',
      instructions:
        'Display five sentences about language change, each containing a presupposition. Examples: "When did the quality of English begin to decline?" (presupposes that it has declined); "How can we protect English from further corruption?" (presupposes corruption is occurring); "Young people are ruining grammar" (presupposes grammar was being used correctly before). Students work in pairs to identify (a) what is presupposed and (b) what the presupposition reveals about the writer\'s ideological position. Teacher introduces presupposition as a CDA concept: the embedded assumptions that a reader must accept to make sense of the text, which are often more powerful than explicit claims because they bypass critical scrutiny.',
      differentiation: {
        support: 'Provide the definition of presupposition on the sentence card itself.',
        core: 'Students identify the presupposition and the ideological implication independently.',
        stretch:
          'Students rewrite each sentence to remove the presupposition and consider what is lost in meaning.',
      },
      resources: [
        'Five presupposition sentences displayed on board',
        'Presupposition definition card for support students',
      ],
    },
    mainActivities: [
      {
        title: 'CDA Toolkit - Frameworks for Analysing Language-About-Language',
        duration: '25 minutes',
        instructions:
          'Teacher presents a CDA analytical toolkit adapted for analysing texts about language change. Six key tools: (1) Lexical choice - evaluate the connotations and ideological weight of word choices (e.g., "corruption" vs "evolution," "decline" vs "change"); (2) Agency and passivisation - who is presented as the agent of change and who is acted upon? Passivisation conceals agency ("grammar is being eroded" - by whom?); (3) Framing - how does the title, opening, and visual layout prime the reader to see the issue from a particular perspective?; (4) Presupposition - what must the reader accept as given for the text to make sense? (5) Modality - what modal verbs reveal about the writer\'s certainty and authority ("must," "should," "might"); (6) Intertextuality - what texts or authorities does the writer invoke, and what does this reveal about their discourse community? Students add these tools to their CDA reference card and for each tool, write one example sentence (from any text they have studied) where that tool would be applicable.',
        differentiation: {
          support:
            'Provide the example sentences pre-populated; students add only the tool name and a brief explanation.',
          core: 'Students generate their own example sentences for each tool.',
          stretch:
            'Students rank the six tools in order of analytical power for this specific topic (language change) and justify their ranking.',
        },
        resources: [
          'CDA Toolkit reference card (blank version for students to complete)',
          'Pre-populated version for support students',
          'Board display of the six tools with brief definitions',
        ],
      },
      {
        title: 'Comparative CDA Analysis - Two Language Change Texts',
        duration: '35 minutes',
        instructions:
          'Students receive two texts of approximately 300 words each: Text A is a prescriptivist opinion piece arguing that grammar is declining due to technology; Text B is a descriptivist academic blog post arguing that digital language represents creative evolution. Students apply the six CDA tools systematically to both texts, completing an annotated analysis frame. After 25 minutes of individual work, pairs compare annotations and agree on the two most significant points of ideological difference between the texts. Students then write a 300-word comparative CDA analysis addressing: "How do these two texts construct contrasting positions on language change through their discourse choices?" The response should reference at least four CDA tools and use direct quotation from both texts.',
        differentiation: {
          support:
            'Provide a structured comparison frame with the six CDA tools as row headings and columns for Text A, Text B, and comparison comment; sentence starters for the written response.',
          core: 'Students complete the annotation and write the comparative analysis independently.',
          stretch:
            'Students evaluate whether the two texts are truly positioned as opposites or whether they share underlying assumptions, and consider what a more genuinely radical position on language change might look like.',
        },
        resources: [
          'Text A and Text B (printed)',
          'CDA comparison frame (with sentence starters for support)',
          'Model 300-word response for teacher reference',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Insight Each - CDA Gallery Walk',
      duration: '10 minutes',
      instructions:
        'Students write their single most interesting CDA observation from the lesson on a sticky note and post it on one of two charts: "Text A insights" or "Text B insights." Teacher reads out a selection and asks the class to evaluate: which observations are most analytical (moving from feature to meaning to ideology) and which remain at a surface level (merely naming a feature)? Teacher models the difference between a weak observation ("the writer uses emotive language") and a strong one ("the nominalization \'corruption\' presupposes agency-less deterioration, framing change as something that happens to language rather than something communities create").',
      differentiation: {
        support: 'Students may write any observation from their annotation, however simple.',
        core: 'Students aim for an observation that connects feature, function, and ideology.',
        stretch:
          "Students challenge someone else's sticky note with a counter-analysis on a different coloured note.",
      },
    },
    homework:
      "Find one text from outside school that argues a position on language change (newspaper, blog, YouTube video transcript, podcast transcript). Write a 300-word CDA analysis using at least four of the six CDA tools from today's lesson. Annotate the text itself with colour-coded highlights corresponding to each tool.",
    worksheetQuestions: [
      {
        question:
          'What is presupposition in the context of CDA? Give one example from a text about language change.',
        lines: 4,
        modelAnswer:
          'Presupposition is an assumption embedded in a text that the reader must accept for the statement to make sense. For example, the question "Why is grammar getting worse?" presupposes that grammar is getting worse, bypassing the need to prove this as a claim. In texts about language change, presuppositions often embed prescriptivist ideology without subjecting it to scrutiny.',
        marks: 3,
      },
      {
        question:
          'Explain how passivisation can be used ideologically in texts about language change.',
        lines: 4,
        modelAnswer:
          'Passivisation removes the grammatical agent from a sentence, concealing who is responsible for an action. In texts about language change, passive constructions like "grammar is being destroyed" or "standards are eroding" present change as a process without a cause, avoiding any specific attribution of responsibility. This can obscure the actual social dynamics of change and make decline seem inevitable and agent-less.',
        marks: 3,
      },
      {
        question: 'How does lexical choice reveal ideological positioning in texts about language?',
        lines: 5,
        modelAnswer:
          'Lexical choices carry ideological weight beyond their denotative meaning. Words like "corruption," "decay," and "erosion" to describe language change encode a prescriptivist position, framing change as inherently negative. Words like "evolution," "creativity," and "adaptation" encode a descriptivist position, framing the same changes as natural and positive. By examining these choices, CDA reveals how a writer constructs a particular ideological stance through what appear to be purely descriptive word choices.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'CDA is a contested field - some linguists argue it is ideologically committed in its own right (tending to favour left-leaning critiques of power). This is worth acknowledging to strong students, as it raises important questions about objectivity in linguistic analysis.',
      'The tool of "agency and passivisation" benefits from brief grammar revision. Some students may not be secure in identifying passive constructions; a quick refresher (auxiliary "to be" + past participle) before the lesson prevents confusion.',
      'When pairing texts for the comparative analysis, try to choose extracts of similar length and complexity so that students are comparing content, not being disadvantaged by the difficulty of the reading.',
      "The plenary sticky note activity is particularly effective for calibrating students' understanding of what constitutes a strong analytical observation. If time allows, photographing the sticky notes and projecting them as a class resource for revision works well.",
    ],
    targetedSkills: [
      'AO1 - Applying CDA terminology with precision',
      'AO2 - Systematic application of CDA methodology',
      'AO3 - Analysing discourse about language within its ideological context',
      'Extended analytical writing',
      'Comparative textual analysis',
    ],
  },

  // ── Lesson 8: Analysing Diachronic Data - Historical Text Comparison ────────
  {
    id: 'y12u2-08',
    title: 'Analysing Diachronic Data - Comparing Historical Texts',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Apply a systematic linguistic framework to the analysis of diachronic (historical) text data',
      'Identify and accurately describe linguistic features at multiple levels (graphology, lexis, grammar, phonology, semantics, pragmatics)',
      'Contextualise identified features within the appropriate historical period and explain the causes of change',
      'Produce an extended diachronic comparison essay structured for exam conditions',
    ],
    successCriteria: [
      'I can analyse a historical text at a minimum of four linguistic levels (GASP + semantics + pragmatics)',
      'I can identify at least three specific features that have changed between a historical and a contemporary text',
      'I can explain the historical cause for at least two of the changes I identify',
      'I can write a 400-word diachronic comparative essay with a clear analytical structure',
    ],
    keywords: [
      'diachronic',
      'synchronic',
      'graphology',
      'orthography',
      'semantic change',
      'amelioration',
      'pejoration',
      'broadening',
      'narrowing',
      'syntactic change',
      'morphological change',
      'modal auxiliary',
    ],
    starterActivity: {
      title: 'Spot the Change - Side-by-Side Text Comparison',
      duration: '12 minutes',
      instructions:
        'Display two versions of the same short passage - the original Early Modern English version and a modern paraphrase (approximately 80 words each). Students spend four minutes identifying every difference they can see: spelling, punctuation, vocabulary, grammar, word order, pronouns. They then rank their top three changes by significance: which change tells us most about how English has changed? Pairs share their top three with another pair and justify their choices. Teacher collects responses and uses them to frame the analytical framework for the main activity: "Your observations are the raw material; analysis means explaining why these changes happened."',
      differentiation: {
        support:
          'Provide a list of linguistic levels (spelling, punctuation, vocabulary, grammar, pronouns) as a structured search checklist.',
        core: 'Students generate their own list of differences and then rank them by significance.',
        stretch:
          'Students suggest what these changes reveal about broader patterns of English change and connect each to a concept or period from earlier lessons.',
      },
      resources: [
        'Two-version text displayed on board (Early Modern and Modern English)',
        'Linguistic levels checklist for support students',
      ],
    },
    mainActivities: [
      {
        title: 'GASP+SP Framework - Systematic Diachronic Analysis Methodology',
        duration: '25 minutes',
        instructions:
          'Teacher introduces the GASP+SP framework for diachronic analysis: Graphology (spelling, punctuation, capitalisation, layout), Grammar (sentence structure, verb forms, pronoun system, word order, inflections), Semantics (word meanings, connotation, semantic shift), Phonology (evidence of pronunciation from spelling), Syntax (phrase and clause structure), Pragmatics (implied meaning, social context, politeness conventions). For each level, teacher provides one specific example from a historical text and models the analytical move: identify the feature, describe it precisely, contextualise it historically, explain the direction of change. Students practise each analytical move on a mini-whiteboard with a new example provided, receiving rapid feedback before moving to independent work. Emphasise: every observation must be contextualised - a feature without context is description, not analysis.',
        differentiation: {
          support:
            'Provide a sentence-stem framework for each analytical move: "At the level of [framework], the text shows [feature]. This is significant because it reflects [historical context]..."',
          core: 'Students apply the framework to their own examples after the modelled examples.',
          stretch:
            'Students evaluate which of the six levels offers the most diagnostic evidence for dating a text from this period and justify their choice.',
        },
        resources: [
          'GASP+SP framework reference card',
          'Modelled analysis examples (one per level)',
          'Mini-whiteboards for rapid practice',
        ],
      },
      {
        title: 'Extended Diachronic Essay - Independent Analysis',
        duration: '38 minutes',
        instructions:
          'Students receive two unseen texts: Text A from the seventeenth century (a letter or prose extract) and Text B from the present day (a comparable genre or context). They have 38 minutes to write a diachronic comparative essay of approximately 400 words addressing: "Compare the linguistic features of Text A and Text B, explaining what they reveal about how English has changed." Students should structure their response by linguistic level (one paragraph per level), use specific quotations from both texts as evidence, and for each feature explain its historical cause or context. Teacher circulates, providing targeted feedback on analytical depth rather than correcting surface features.',
        differentiation: {
          support:
            'Provide a paragraph planner with the structure already mapped out: paragraph 1 (graphology), paragraph 2 (grammar), paragraph 3 (lexis and semantics), paragraph 4 (conclusion on causes of change). Include sentence starters for each.',
          core: 'Students write independently using the GASP+SP framework to structure their analysis.',
          stretch:
            'Students write an evaluative conclusion considering: are the changes seen here representative of broader patterns in English change, or do they reflect the specific genre, purpose, or social context of these texts?',
        },
        resources: [
          'Text A (seventeenth-century extract) and Text B (contemporary extract)',
          'Paragraph planner for support students',
          'GASP+SP framework reference card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Analytical Quality Audit',
      duration: '8 minutes',
      instructions:
        "Teacher selects three short extracts from students' essays (with permission, anonymised), ranging from description-level to analysis-level. Class reads each extract and rates it on a three-point scale: description (states what is there), explanation (says what it means), analysis (connects feature, meaning, historical context, and linguistic significance). Students write two specific ways they would upgrade the description-level example to reach analysis level. Teacher models the upgrade process with the first example.",
      differentiation: {
        support:
          'Students focus only on identifying whether the extract is description or analysis, without suggesting upgrades.',
        core: 'Students both identify the level and suggest two improvements.',
        stretch: 'Students rewrite the description-level extract at full analysis level.',
      },
    },
    homework:
      "Using the GASP+SP framework, write a full analysis of the seventeenth-century text from today's lesson as a standalone analytical essay (500 words). This time, go beyond comparison and focus exclusively on historical contextualisation: explain what each identified feature reveals about the state of English at that time.",
    worksheetQuestions: [
      {
        question:
          'Explain the difference between diachronic and synchronic analysis in linguistics.',
        lines: 4,
        modelAnswer:
          'Diachronic analysis examines how language has changed over time - tracing the evolution of features across different historical periods. Synchronic analysis examines language at a single point in time - describing the features of a language or variety as it exists at a particular moment. Both approaches are valid but serve different analytical purposes: diachronic analysis is central to Unit 2, while synchronic analysis underpins much of the stylistic analysis in Unit 1.',
        marks: 3,
      },
      {
        question:
          'Identify and explain two grammatical features that would indicate a text was written before 1700.',
        lines: 5,
        modelAnswer:
          'First, the use of the thou/you pronoun distinction - if "thou" appears in the text, it dates from before its disappearance in the late seventeenth century and signals an informal or condescending relationship. Second, the use of verb endings such as "-eth" (third person singular: "he walketh," "she sayeth") rather than modern "-s" forms - these endings were standard until the late sixteenth and early seventeenth centuries when the northern "-s" form spread south.',
        marks: 4,
      },
      {
        question: 'What is semantic amelioration? Give one historical example.',
        lines: 3,
        modelAnswer:
          'Semantic amelioration is the process by which a word acquires more positive or elevated connotations over time. An example is "knight," which originally meant simply "youth" or "servant" (Old English "cniht") but ameliorated to mean a noble military title. Another example is "pretty," which originally meant "cunning" or "crafty" before ameliorating to mean "attractive."',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The choice of texts for the extended essay is crucial. Use authentic historical texts where possible rather than fabricated examples - authenticity improves engagement and ensures the linguistic features are genuinely representative of the period.',
      'The GASP+SP framework is a teaching aid, not a rigid prescription. Remind students that in the exam they are not expected to use these specific letters; they should organise their analysis by linguistic level but can use whichever level is most fruitful for the texts provided.',
      "Circulating during the extended essay and providing brief oral feedback is more effective than written feedback at this stage. Target students who are writing description rather than analysis and ask a redirecting question: \"You've noted that it uses 'thou' - can you tell me what that reveals about the relationship between speaker and addressee at this time?\"",
      'Collect the essays at the end for marking using the AO1/AO2/AO3 criteria. Written feedback provided by the following lesson will have maximum impact while the task is still fresh.',
    ],
    targetedSkills: [
      'AO1 - Precise linguistic analysis using GASP+SP framework',
      'AO2 - Contextualising features within historical language change',
      'AO3 - Explaining causes of change with reference to social history',
      'Extended timed analytical writing',
      'Moving from description to contextualised analysis',
    ],
  },

  // ── Lesson 9: Comparative Essays - Structure, Argument, and Evidence ────────
  {
    id: 'y12u2-09',
    title: 'Preparing Comparative Essays on Language Change - Structure and Argument',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand the specific demands of the WEN02 comparative essay question and mark scheme criteria',
      'Plan and structure a comparative essay on language change that addresses AO1, AO2, and AO3',
      'Develop strategies for integrating data analysis, theoretical knowledge, and evaluative argument within a single essay',
      'Identify and address common weaknesses in comparative essays on language change',
    ],
    successCriteria: [
      'I can articulate the three assessment objectives for WEN02 and explain what each requires',
      'I can produce a detailed essay plan for a comparative language change question within fifteen minutes',
      'I can identify the difference between description, explanation, and evaluation in essay writing and produce an example of each',
      'I can write an opening paragraph that introduces a comparative argument about language change with a clear analytical direction',
    ],
    keywords: [
      'comparative essay',
      'assessment objective',
      'AO1',
      'AO2',
      'AO3',
      'analytical structure',
      'argument',
      'evaluation',
      'data integration',
      'line of argument',
      'topic sentence',
      'counter-argument',
    ],
    starterActivity: {
      title: 'Decoding the Question - What is the Exam Actually Asking?',
      duration: '12 minutes',
      instructions:
        'Display two past WEN02 comparative questions side by side. Students spend four minutes underlining: (a) the instruction word (compare, discuss, evaluate, analyse), (b) the linguistic focus (what aspect of language change is being tested), (c) any constraints (texts provided, time period specified). Students then answer in pairs: "What would a top-band response need to do that a middle-band response would not?" Teacher collects responses and synthesises: top-band responses analyse rather than describe, integrate theory with data, maintain a line of argument throughout, and evaluate competing positions. These four criteria frame the lesson.',
      differentiation: {
        support:
          'Provide a question annotation guide that identifies the three elements to underline with colour coding.',
        core: 'Students underline and identify independently before comparing with a partner.',
        stretch:
          'Students write a brief "what the examiner wants" note for each question, identifying the specific theoretical knowledge and analytical skills that are most relevant.',
      },
      resources: [
        'Two past WEN02 questions displayed on board',
        'Question annotation guide for support students',
        'WEN02 mark scheme summary (high band descriptors)',
      ],
    },
    mainActivities: [
      {
        title: 'Essay Architecture - Planning for Argument, not Description',
        duration: '30 minutes',
        instructions:
          'Teacher models the construction of a comparative essay plan live, using a sample question: "Compare the linguistic features of the two texts, exploring what they reveal about language change over time." Model plan has six components: (1) Introduction - state the comparison and the main argument (not just "I will compare..."); (2) Context - brief historical/social contextualisation of both texts; (3) Paragraph 1 - most significant linguistic level for comparison, with data and theory integrated; (4) Paragraph 2 - second linguistic level; (5) Paragraph 3 - evaluation of what the comparison reveals about language change (theory paragraph); (6) Conclusion - evaluate the overall significance of the comparison, not just summarise. Emphasise: each body paragraph must have a topic sentence that makes a comparative claim, not just an observation. After modelling, students apply this structure to plan a different sample question in 15 minutes, working independently. Plans are shared with a partner for feedback using a "two stars and a wish" structure.',
        differentiation: {
          support:
            'Provide a pre-structured planning template with the six sections and the topic sentence of paragraph 1 already written as a model.',
          core: 'Students write their own plan using the modelled structure and share for peer feedback.',
          stretch:
            'Students write two alternative topic sentences for each body paragraph (one description-level, one analysis-level) and explain which is stronger and why.',
        },
        resources: [
          'Modelled essay plan (displayed on board, also printed)',
          'Six-section planning template for support students',
          'Two stars and a wish peer feedback guide',
        ],
      },
      {
        title: 'Upgrading Weak Responses - From Description to Evaluation',
        duration: '28 minutes',
        instructions:
          'Students receive a printed model essay at three quality levels: Level 1 (description only - identifies features but does not explain or contextualise), Level 2 (explanation - identifies and explains features but does not evaluate or integrate theory), Level 3 (evaluation - integrates data, theory, and evaluative argument, maintaining a line of argument). Students read all three levels and annotate what is present or absent in each. They then take a specific paragraph from Level 1 and upgrade it to Level 3 in writing, adding contextualisation, theoretical connections, and evaluative language. Pairs swap upgraded paragraphs and assess which AO marks they would award and why. Teacher selects two examples to share and narrates the marking decision aloud.',
        differentiation: {
          support:
            'Provide a sentence-by-sentence annotation guide identifying precisely what is missing from the Level 1 paragraph and what could be added.',
          core: 'Students annotate independently and upgrade the paragraph without sentence starters.',
          stretch:
            'Students write a fully upgraded version of the Level 1 paragraph and add a brief evaluative comment explaining the linguistic significance of the features identified.',
        },
        resources: [
          'Three-level model essay (printed)',
          'Annotation guide for support students',
          'AO mark descriptors for student reference',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Perfect Opening Paragraph - Speed-Write Challenge',
      duration: '10 minutes',
      instructions:
        'Teacher displays a new sample question. Students have exactly eight minutes to write only the opening paragraph of their comparative essay - no more, no less. The opening must: state the main comparative argument, briefly introduce both texts, and signal the analytical direction of the essay without beginning to describe features in detail. Students self-assess using a three-point checklist (argument stated, both texts introduced, analytical direction clear). Teacher shares two examples under the visualiser and models how to evaluate them against the checklist.',
      differentiation: {
        support:
          'Provide a model opening paragraph for a different question; students use its structure as a template.',
        core: 'Students write independently to time.',
        stretch:
          'Students write two alternative openings and evaluate which makes the stronger analytical claim.',
      },
    },
    homework:
      "Using the plan you drafted in today's lesson, write a full comparative essay (500-600 words) in response to the sample question. Focus on: one strong topic sentence per paragraph, at least two pieces of data from the text as evidence, at least one theoretical reference (a linguist, a theory, or a conceptual framework), and an evaluative conclusion. Submit for teacher marking against the WEN02 mark scheme.",
    worksheetQuestions: [
      {
        question:
          'What are the three assessment objectives for WEN02 and what does each require from a student?',
        lines: 8,
        modelAnswer:
          'AO1 requires students to apply linguistic terminology and concepts accurately in written analysis - selecting and describing features of language using precise metalanguage. AO2 requires students to demonstrate knowledge of language frameworks, theories, and concepts - referencing relevant theories of language change (e.g., Aitchison, Crystal) and connecting features to theoretical explanations. AO3 requires students to analyse language in context - explaining why features exist or have changed with reference to historical, social, and cultural factors.',
        marks: 6,
      },
      {
        question:
          'Explain the difference between a description-level observation and an analysis-level observation in a comparative essay. Give a brief example of each.',
        lines: 6,
        modelAnswer:
          "A description-level observation notes what is present: \"Text A uses the pronoun 'thou.'\" An analysis-level observation identifies the feature, explains its linguistic significance, and contextualises it: \"Text A's use of 'thou' rather than 'you' signals an intimate or condescending social relationship between the speaker and addressee, reflecting the Early Modern English thou/you distinction that had largely disappeared by the late seventeenth century, after which English lost this grammatically encoded social marker.\"",
        marks: 4,
      },
      {
        question:
          'What should an essay introduction contain in a comparative essay on language change?',
        lines: 5,
        modelAnswer:
          'An effective introduction should briefly introduce both texts (genre, period, context), state the main comparative argument (what the essay will argue about how the texts differ and what this reveals about language change), and signal the analytical direction (which frameworks and levels will structure the comparison). It should not begin describing features in detail - that is the function of the body paragraphs.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The three-level model essay is most effective if it is based on a genuine past-paper question with teacher-written levels, so that students understand the mark-scheme gradient from direct experience of the question.',
      'The "upgrading weak responses" task is one of the most powerful activities for raising analytical quality. Students often find it easier to see the gap between description and analysis in someone else\'s writing before they can identify it in their own.',
      'Emphasise that a "line of argument" does not mean a simple thesis that is repeated - it means a cumulative analytical narrative where each paragraph builds on the last, moving the comparative analysis forward rather than treating each linguistic level in isolation.',
      'If time allows, brief individual consultations during the independent planning task are very effective. Five minutes with specific students who struggle to move beyond description can have a disproportionate impact on their subsequent essay quality.',
    ],
    targetedSkills: [
      'AO1 - Accurate linguistic terminology in an essay context',
      'AO2 - Integrating theoretical knowledge into comparative argument',
      'AO3 - Historical and social contextualisation of language features',
      'Essay planning and structure',
      'Moving from description to evaluation in analytical writing',
    ],
  },

  // ── Lesson 10: Timed Exam Essay Practice ────────────────────────────────────
  {
    id: 'y12u2-10',
    title: 'Timed Exam Essay Practice - WEN02 Full Question Simulation',
    text: 'IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Demonstrate the ability to plan, draft, and complete a full WEN02 comparative essay under timed conditions',
      'Apply knowledge from all previous lessons (historical change, contemporary change, theories, CDA, diachronic analysis) within a single extended response',
      'Develop exam technique strategies for managing time, maintaining analytical depth, and structuring under pressure',
      'Engage productively with detailed assessment feedback to identify specific areas for improvement',
    ],
    successCriteria: [
      'I can produce a complete comparative essay of 500-650 words within 55 minutes',
      'I can demonstrate AO1 (terminology), AO2 (theory), and AO3 (context) within a single essay',
      'I can manage my time to include introduction, at least three analytical body paragraphs, and a conclusion',
      'I can identify specific strengths and areas for development in my response using the mark scheme',
    ],
    keywords: [
      'timed essay',
      'exam technique',
      'assessment objective',
      'time management',
      'analytical writing',
      'comparative essay',
      'self-assessment',
      'mark scheme',
      'band descriptor',
      'target setting',
    ],
    starterActivity: {
      title: 'Ten-Minute Knowledge Consolidation - Unit 2 Memory Map',
      duration: '12 minutes',
      instructions:
        'Students have ten minutes to produce a unit memory map from memory, organising everything they know about Language Change under five headings: Historical Change (key periods, events, features), Contemporary Drivers (technology, globalisation, youth), Theories (Aitchison, Crystal, Chomsky, Skinner, Piaget, Trudgill, Crystal), Analytical Frameworks (GASP+SP, CDA, prescriptivism/descriptivism), and Exam Technique (structure, AOs, topic sentences). After ten minutes, students compare maps with a partner and add any missing elements in a different colour. Teacher projects a model map for the final two minutes. Students circle in red any area that feels insecure and note it as a revision priority.',
      differentiation: {
        support: 'Provide the five headings as a pre-printed frame; students populate the content.',
        core: 'Students generate the full map including headings from scratch.',
        stretch:
          "Students add connections between sections (e.g., linking Aitchison's theory to a specific historical change example) and annotate the connections.",
      },
      resources: [
        'A3 blank paper or large section of exercise book for the memory map',
        'Pre-printed frame for support students',
        'Model memory map for teacher reference (projected at end of activity)',
      ],
    },
    mainActivities: [
      {
        title: 'Exam Question Briefing and Planning',
        duration: '15 minutes',
        instructions:
          'Teacher distributes the exam paper with two texts and the comparative question. Students read both texts in silence for three minutes. Teacher then models a rapid five-minute planning process on the board: (1) annotate both texts simultaneously by linguistic level using a colour code; (2) identify the three most significant comparisons; (3) note one theorist or theory relevant to each comparison; (4) draft a one-sentence argument for the introduction. Students then complete their own plan for five minutes in silence. Teacher circulates briefly to check plans are analytical (not just listing features) and redirects where necessary. No feedback is given at this stage to preserve the exam simulation.',
        differentiation: {
          support:
            'Provide a reduced-size copy of the texts with the five linguistic levels printed alongside as prompt headings for annotation.',
          core: 'Students complete the full planning process using their own developed approach.',
          stretch:
            'Students also plan a counter-argument they will acknowledge and refute within their essay, as this is a high-band discriminator.',
        },
        resources: [
          'Exam paper with two texts and the WEN02-style question',
          'Colour pencils for multi-level annotation',
          'Planning prompt card for support students',
        ],
      },
      {
        title: 'Timed Essay - 55 Minutes',
        duration: '55 minutes',
        instructions:
          'Students write their comparative essay in full timed conditions: silence, no additional resources, personal plan only. Teacher writes time checkpoints on the board: at 15 minutes ("You should be finishing your introduction and paragraph 1"), at 30 minutes ("You should be starting paragraph 3"), at 45 minutes ("Beginning your conclusion"), at 55 minutes ("Pens down"). At the 15-minute checkpoint, teacher briefly circulates to ensure all students have started their introduction. At 45 minutes, any student who has not reached the conclusion paragraph is given a brief advisory note: "Move to your conclusion now - an incomplete essay with three good paragraphs scores more than four weaker ones." Essays are collected or students retain for self-assessment in the plenary.',
        differentiation: {
          support:
            'Support students may retain a copy of the GASP+SP framework and the theory reference card during the timed task - this mirrors the kind of scaffolding they may have access to as part of access arrangements, and it prevents stalling.',
          core: 'Students complete the essay without additional resources beyond their personal plan.',
          stretch:
            'Students aim for a high-band response by ensuring that every body paragraph both integrates data and references a theory or theoretical concept.',
        },
        resources: [
          'Exam paper (retained from planning activity)',
          'Personal plan (student-generated)',
          'GASP+SP and theory cards for support students only',
          'Timer displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '8 minutes',
      instructions:
        'Teacher distributes the WEN02 band descriptors for AO1, AO2, and AO3. Students read their own essay and make three judgements: (1) What band are they currently working at for each AO? (2) What is the single most important thing they could have added to move up one band? (3) What revision or practice will they undertake before the next timed essay? Students write their three self-assessment notes at the bottom of their essay. Teacher collects all essays for formal marking. In the final three minutes, teacher summarises the key exam technique points: analyse not describe, integrate theory, maintain a line of argument, manage time to complete the essay.',
      differentiation: {
        support:
          'Students focus only on AO1 self-assessment (terminology use) as this is most accessible for initial self-evaluation.',
        core: 'Students complete all three AO self-assessments.',
        stretch:
          'Students write a specific, actionable target for each AO rather than a general comment.',
      },
    },
    homework:
      "Using the teacher's written feedback on your timed essay, write a 200-word reflective commentary explaining: (a) what AO marks you were awarded and why, (b) what specific analytical moves you made that were effective, (c) what one change to your essay would make the biggest difference to your mark, and (d) your revised plan for the essay, incorporating the improvement.",
    worksheetQuestions: [
      {
        question:
          'Explain three strategies for effective time management in a 55-minute WEN02 essay question.',
        lines: 6,
        modelAnswer:
          'First, spend no more than five minutes planning - a brief colour-coded annotation and a one-sentence argument is sufficient before writing. Second, set internal time targets for each section: approximately eight minutes for the introduction, fifteen minutes per body paragraph, and five minutes for the conclusion. Third, prioritise completion over perfection - an essay with an introduction, three body paragraphs, and a brief conclusion will score more than a longer essay that does not reach the conclusion, because evaluation (AO2/AO3) is concentrated in the later stages.',
        marks: 6,
      },
      {
        question:
          'What does it mean to "maintain a line of argument" in a comparative essay on language change?',
        lines: 5,
        modelAnswer:
          'A line of argument means that each paragraph contributes to a cumulative analytical claim rather than treating each linguistic level in isolation. For example, if the opening argument is that Text A is more linguistically conservative than Text B, each paragraph should build evidence for (or evaluate qualifications of) that claim, so that the essay functions as a coherent analytical narrative rather than a list of separate observations. The conclusion should evaluate the overall significance of the comparison in relation to the opening argument.',
        marks: 4,
      },
      {
        question:
          'How should you allocate your marks across AO1, AO2, and AO3 in a WEN02 response?',
        lines: 4,
        modelAnswer:
          'In WEN02, all three AOs carry equal weighting, so a strong response needs to demonstrate all three simultaneously rather than treating them sequentially. In practice, this means: every analytical observation should use precise terminology (AO1), be connected to a relevant theory or framework (AO2), and be contextualised within the historical, social, or cultural circumstances that produced the linguistic feature (AO3). The three AOs should be woven together within each analytical paragraph rather than addressed in separate sections.',
        marks: 3,
      },
      {
        question:
          'Practise writing a topic sentence for a paragraph comparing two texts on language change. The paragraph will discuss changes in pronoun use between 1600 and the present day.',
        lines: 4,
        modelAnswer:
          'A model topic sentence: "The most socially significant grammatical difference between the two texts lies in the pronoun system: Text A\'s deployment of the thou/you distinction encodes a system of hierarchical social relationships that had disappeared entirely by the time Text B was produced, reflecting a broader Early Modern shift toward a single second-person form and the loss of grammatically encoded social deference." This sentence makes a comparative claim, identifies the linguistic feature, and signals the analytical direction of the paragraph.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is a high-stakes lesson for students and the exam simulation conditions should be maintained rigorously. Interruptions significantly disrupt the exam practice value of the timed essay.',
      'When marking the essays, use a two-column feedback format: "What you did well (with reference to specific AO)" and "One specific change that would move you up one band." Generic feedback ("more analysis needed") is less effective than targeted feedback ("Your paragraph on vocabulary change identifies the feature but does not connect it to any theory - adding a sentence referencing Aitchison\'s metaphors of natural change would address AO2").',
      'The self-assessment plenary is most effective if students have already seen the mark scheme in a previous lesson. If this is their first encounter with the band descriptors, allow five minutes for them to read before self-assessing.',
      "Follow this lesson with a whole-class feedback session in the next lesson, using anonymised exemplar paragraphs from students' essays to illustrate what high-band work looks like for this cohort. This is more motivating and directly relevant than using published mark scheme exemplars.",
      'Students who found the timed essay challenging should be encouraged rather than discouraged - this is their first full simulation, and the gap between current performance and target performance is exactly what subsequent lessons and revision can close.',
    ],
    targetedSkills: [
      'AO1 - Sustained accurate use of linguistic terminology under timed conditions',
      'AO2 - Integration of theoretical knowledge within a timed essay',
      'AO3 - Contextualised historical and social analysis within a timed essay',
      'Exam technique and time management',
      'Self-assessment and reflective target setting',
    ],
  },
]
