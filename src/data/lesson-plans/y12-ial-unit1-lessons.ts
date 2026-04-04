import type { LessonPlan } from '../../types';

export const y12IalUnit1Lessons: LessonPlan[] = [
  // -- Lesson 1: Introduction to Linguistic Frameworks -------------------------
  {
    id: 'y12u1-01',
    title: 'Introduction to Linguistic Frameworks -- Phonology, Lexis, Grammar, Discourse, Pragmatics',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Identify and define the five core linguistic frameworks: phonology, lexis, grammar, discourse, and pragmatics',
      'Apply each framework to a short spoken or written text as an analytical tool',
      'Understand how the frameworks work together to produce a complete linguistic analysis',
      'Begin to use accurate metalanguage when annotating texts',
    ],
    successCriteria: [
      'I can define each of the five frameworks with a clear example',
      'I can identify at least one feature from each framework in an unseen text',
      'I can explain why a specific linguistic feature is significant within its context',
      'I can use at least eight items of metalanguage correctly in written annotations',
    ],
    keywords: [
      'phonology',
      'lexis',
      'semantics',
      'grammar',
      'syntax',
      'morphology',
      'discourse',
      'pragmatics',
      'metalanguage',
      'framework',
      'annotation',
      'register',
    ],
    starterActivity: {
      title: 'Five Frameworks Card Sort',
      duration: '12 minutes',
      instructions:
        'Provide each pair with a set of twenty laminated cards: four examples for each of the five frameworks (e.g., alliteration for phonology, neologism for lexis, passive voice for grammar, cohesive device for discourse, implicature for pragmatics). Students sort the cards into five groups, labelling each group with the framework name. After sorting, pairs compare with another pair and resolve disagreements. Teacher leads whole-class feedback, clarifying any misallocated cards and explaining the distinction between overlapping categories such as lexis and semantics.',
      differentiation: {
        support:
          'Provide a reference strip listing the name and a one-sentence definition of each framework so students can consult it while sorting.',
        core: 'Students sort independently, then annotate each card with a brief reason for their categorisation.',
        stretch:
          'Students identify two cards that could plausibly belong to more than one framework and write a justification for each, explaining the conceptual overlap.',
      },
      resources: [
        'Framework card sets (laminated, one per pair)',
        'Framework definition reference strip (for support students)',
        'Answer slide for whole-class review',
      ],
    },
    mainActivities: [
      {
        title: 'Frameworks Explained -- Structured Input and Note-Making',
        duration: '25 minutes',
        instructions:
          'Teacher delivers a structured explanation of all five frameworks with examples drawn from varied text types. Phonology: the sound system of language; includes features such as alliteration, assonance, onomatopoeia, rhythm, stress, intonation, and accent. Lexis and semantics: word choice and meaning; includes formal/informal register, semantic fields, neologisms, jargon, connotation, denotation, and figurative language. Grammar: morphology (word structure, affixation, tense, pluralisation) and syntax (sentence types, clause structure, passive/active voice, verb phrase complexity). Discourse: organisation above sentence level; includes coherence, cohesion, topic structure, adjacency pairs, turn-taking, and text genre. Pragmatics: implied meaning and language in social context; includes speech acts, implicature, politeness theory, face-threatening acts, and context. Students complete a five-section note frame, adding their own examples for each framework as teacher explains. Pause after each framework for a sixty-second peer check.',
        differentiation: {
          support:
            'Provide a partially completed note frame with the framework names, sub-categories, and one example per section already printed; students add the second example and a definition.',
          core: 'Students take notes independently using the blank five-section frame and contribute examples during pauses.',
          stretch:
            'Students annotate their notes with a brief evaluative comment on which framework they predict will be most useful for analysing spoken versus written language, and why.',
        },
        resources: [
          'Five-section note frame handout',
          'PowerPoint with worked examples from spoken and written texts',
          'Metalanguage glossary card',
        ],
      },
      {
        title: 'Framework Application -- Annotating an Unseen Text',
        duration: '30 minutes',
        instructions:
          'Distribute a short unseen text (a newspaper advertisement of approximately 120 words). Students annotate the text applying all five frameworks, using a colour-coded system: one colour per framework. Students must identify at least two features per framework and write a one-sentence comment explaining the effect or significance of each feature. After 20 minutes of independent annotation, students work in pairs to compare findings. Each pair selects their three strongest annotations and contributes these to a class gallery: annotations are written on sticky notes and displayed under the five framework headings on the board. Teacher leads a ten-minute discussion of the gallery, highlighting the most perceptive observations and correcting any misapplied metalanguage.',
        differentiation: {
          support:
            'Provide an annotation guide with sentence starters: "This [framework] feature is significant because it suggests..." and a list of features to look for under each framework.',
          core: 'Students annotate independently, selecting their own features and constructing their own comments.',
          stretch:
            'Students write a 100-word evaluative paragraph explaining which framework is most productive for analysing this particular text and why, with reference to specific annotations.',
        },
        resources: [
          'Unseen text handout (newspaper advertisement)',
          'Colour-coded annotation guide for support students',
          'Sticky notes and framework heading cards for gallery display',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Framework Exit Tickets',
      duration: '13 minutes',
      instructions:
        'Each student receives an exit ticket card with five boxes, one per framework. They must write: the framework name, one technical term from that framework, and one example from today\'s lesson text. Students complete the card independently in seven minutes. Teacher collects the cards and quickly sorts them into confident/developing/needs-support piles for use in planning the next lesson. Verbally review one strong example from each framework before the end of the lesson.',
      differentiation: {
        support:
          'Provide a word bank of ten metalanguage terms on the back of the exit ticket card for students to draw from if they cannot recall independently.',
        core: 'Students complete the exit ticket without additional resources, relying on their notes.',
        stretch:
          'Students add a sixth box labelled "Cross-framework connection" and describe how two frameworks interact in the lesson text with a specific example.',
      },
    },
    homework:
      'Select any text of your choice (an advert, a social media post, a news headline, a song lyric). Write a 200-word analysis applying all five frameworks, using at least two items of metalanguage per framework. Bring the original text and your analysis to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Name and define the five linguistic frameworks studied in this lesson.',
        lines: 10,
        modelAnswer:
          'Phonology: the study of the sound system of language, including accent, intonation, rhythm, and sound devices. Lexis and semantics: the study of vocabulary and meaning, including word choice, connotation, and semantic fields. Grammar: the study of morphology (word structure) and syntax (sentence and clause structure). Discourse: the study of how language is organised above sentence level, including coherence, cohesion, and genre. Pragmatics: the study of how context shapes meaning, including speech acts, implicature, and politeness.',
        marks: 5,
      },
      {
        question: 'Explain the difference between semantics and pragmatics, using an example for each.',
        lines: 6,
        modelAnswer:
          'Semantics refers to the literal or implied meaning encoded in words and sentences -- for example, the word "home" connotes warmth and belonging beyond its denotation of a dwelling. Pragmatics refers to meaning shaped by social context and inference -- for example, "Can you pass the salt?" is grammatically a question about ability but pragmatically a polite request, understood through shared conversational conventions.',
        marks: 4,
      },
      {
        question: 'Identify two grammatical features in the following sentence and explain the effect of each: "The report was released without explanation."',
        lines: 6,
        modelAnswer:
          'First, the passive voice ("was released") removes the agent, concealing who released the report and potentially implying evasion or institutional distance. Second, the prepositional phrase "without explanation" functions as an adverbial, foregrounding the absence of justification and suggesting a lack of transparency.',
        marks: 4,
      },
      {
        question: 'What is a discourse feature? Give two examples from different text types.',
        lines: 5,
        modelAnswer:
          'A discourse feature is a linguistic device that organises language above sentence level, creating coherence and structure. Examples: in spoken conversation, adjacency pairs (question followed by answer) structure interaction; in written journalism, topic sentences at the start of paragraphs create thematic coherence and guide the reader through the argument.',
        marks: 3,
      },
      {
        question:
          'Analyse the following short text using at least three frameworks, explaining the effect of one feature from each: "New. Improved. Irresistible." (advertising slogan). (9 marks)',
        lines: 18,
        modelAnswer:
          'A strong response will identify: phonology -- the list of three monosyllabic adjectives creates a punchy rhythm that mirrors the declarative confidence of the product claim, with the final multisyllabic word ("irresistible") providing rhythmic variation and emphasis; lexis and semantics -- the adjective "irresistible" carries connotations of desire and compulsion, positioning the product as something the consumer cannot logically refuse; grammar -- three minor sentences (non-finite, verbless) create an assertive, almost imperious tone, positioning the brand as authoritative; discourse -- the tricolon structure creates escalation, building from functional ("new") to emotional ("irresistible"), which is a well-established persuasive pattern; pragmatics -- the slogan implicates that previous products were inferior without stating this explicitly, flattering the consumer for upgrading.',
        marks: 9,
      },
    ],
    teacherNotes: [
      'This is the foundation lesson for the entire unit -- it is essential that students leave with a secure working definition of all five frameworks and some experience applying them. Do not rush the application activity.',
      'Students often conflate lexis with semantics and grammar with discourse. Address these overlaps explicitly during the explanation phase; the colour-coded annotation task helps reinforce distinctions.',
      'The unseen text chosen for the application task should be simple enough to allow access for all students but rich enough to yield features across all five frameworks. Advertisements work well because they are short, densely crafted, and multi-modal.',
      'Collect exit tickets and use them diagnostically: students who cannot name a feature under discourse or pragmatics will need explicit support in early follow-up lessons.',
      'Model the annotation process on the board for the first two minutes of the application task before releasing students to work independently -- this is especially important for students who have not studied linguistics before.',
    ],
    targetedSkills: [
      'AO1 -- Applying linguistic terminology and frameworks accurately',
      'AO2 -- Demonstrating knowledge of the five linguistic frameworks',
      'AO3 -- Analysing language in its social and communicative context',
      'Close textual annotation and evidence selection',
      'Metalanguage use in written analysis',
    ],
  },

  // -- Lesson 2: Language and Social Identity ----------------------------------
  {
    id: 'y12u1-02',
    title: 'Language and Social Identity -- Dialect, Idiolect, Sociolect',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Define and distinguish between dialect, idiolect, and sociolect as varieties of language',
      'Explain how language reflects and constructs social identity',
      'Apply relevant theoretical concepts (Labov, Trudgill, social network theory) to language variation data',
      'Analyse transcripts and written texts for evidence of social identity construction',
    ],
    successCriteria: [
      'I can define dialect, idiolect, and sociolect with accurate examples',
      'I can explain at least two ways in which language choices signal group membership',
      'I can apply Labov\'s concept of social stratification of language to a given example',
      'I can annotate a transcript to identify features that indicate social identity',
    ],
    keywords: [
      'dialect',
      'idiolect',
      'sociolect',
      'accent',
      'standard English',
      'non-standard English',
      'covert prestige',
      'overt prestige',
      'social network',
      'language variation',
      'identity',
      'accommodation',
    ],
    starterActivity: {
      title: 'Who Said That? Identifying Social Identity Through Language',
      duration: '10 minutes',
      instructions:
        'Display five short anonymous quotes (two to three sentences each) on the board, each constructed to reflect a different social background, age group, or regional identity through vocabulary, syntax, and orthographic representation of accent features. Students work individually to write one sentence for each quote predicting the speaker\'s social background and the linguistic evidence that supports their prediction. After three minutes, pairs compare predictions. Take class feedback and reveal how each quote was constructed. Use this to introduce the concept that language both reflects and signals identity.',
      differentiation: {
        support:
          'Provide a list of linguistic features to look for (e.g., dialect vocabulary, contractions, formal/informal lexis) to scaffold the analysis.',
        core: 'Students analyse independently and articulate their reasoning using appropriate terminology.',
        stretch:
          'Students consider the ethical implications of making identity inferences from language and whether such inferences risk reinforcing social stereotypes.',
      },
      resources: [
        'Five-quote display slide',
        'Feature checklist for support students',
        'Individual response slips',
      ],
    },
    mainActivities: [
      {
        title: 'Dialect, Idiolect, Sociolect -- Theoretical Input',
        duration: '25 minutes',
        instructions:
          'Teacher delivers a structured explanation of the three key concepts with examples. Dialect: a variety of language associated with a geographic region or social group, differing from the standard in vocabulary, grammar, and (when spoken) phonology; examples include Yorkshire dialect ("tha knows"), Cockney rhyming slang, African American Vernacular English. Idiolect: the unique variety of language used by an individual, shaped by their personal history, social networks, and experiences; include the concept of linguistic fingerprinting. Sociolect: a variety associated with a social group, including age, class, occupation, or subculture. Introduce Labov\'s department store study (1966) as evidence that social stratification is encoded in phonological choices (rhoticity in New York), and Trudgill\'s Norwich study (1974) showing covert prestige -- non-standard forms carry social value within peer groups. Introduce social network theory (Milroy): dense, multiplex networks promote dialect maintenance; looser networks allow dialect levelling. Students take notes using a graphic organiser. Pause after each theorist for a pair-check.',
        differentiation: {
          support:
            'Provide a pre-structured graphic organiser with the theorist names, study titles, and key findings already labelled; students add the explanations during the input.',
          core: 'Students complete the graphic organiser independently from teacher explanation and their own notes.',
          stretch:
            'Students evaluate which study provides the strongest evidence for language as a social identity marker and justify their choice with reference to methodology and findings.',
        },
        resources: [
          'Graphic organiser handout (dialect / idiolect / sociolect / theorists)',
          'PowerPoint with Labov and Trudgill study summaries',
          'Social network theory diagram',
        ],
      },
      {
        title: 'Transcript Analysis -- Social Identity in Spoken Language',
        duration: '30 minutes',
        instructions:
          'Distribute two short transcripts (approximately fifteen lines each): one featuring a speaker using strong regional dialect features in an informal context, and one featuring the same speaker (or a constructed equivalent) in a formal interview context. Students annotate both transcripts identifying: dialect vocabulary, non-standard grammatical forms, phonological features represented in the transcript (e.g., dropped /h/, glottal stop representation), code-switching between transcripts. Students write a 200-word analysis comparing the two transcripts and explaining how the speaker\'s language choices reflect both social identity and context of interaction. Introduce Giles\'s Communication Accommodation Theory as a framework: speakers converge towards or diverge from interlocutors depending on social goals. Students apply this concept to their analysis.',
        differentiation: {
          support:
            'Provide an annotation key identifying specific lines to focus on and sentence starters: "In the informal transcript, the speaker uses [feature], which signals..." and "In contrast, in the formal context..."',
          core: 'Students annotate independently and write the comparative analysis using appropriate metalanguage.',
          stretch:
            'Students consider the concept of style-shifting versus code-switching and evaluate which term more accurately describes the speaker\'s behaviour across the two transcripts.',
        },
        resources: [
          'Two-transcript handout',
          'Annotation key and sentence starters (for support students)',
          'Giles\'s Accommodation Theory summary card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Social Identity Language Audit',
      duration: '15 minutes',
      instructions:
        'Students spend five minutes writing a short description of their own idiolect: what dialect features they use, what sociolect features mark their peer group membership, and how their language changes across different social contexts. Students share one observation with the class. Teacher draws together the discussion to reinforce the key conceptual distinction: dialect, idiolect, and sociolect are not deficient forms of language but functional varieties that serve social and communicative purposes.',
      differentiation: {
        support:
          'Provide a prompt list: "I use [word/phrase] with friends that I would not use with a teacher. I think this is an example of [sociolect/idiolect] because..."',
        core: 'Students write their audit independently using today\'s terminology.',
        stretch:
          'Students reflect on how their idiolect has changed over time and which social forces have driven that change, connecting to social network theory.',
      },
    },
    homework:
      'Record (with permission) or recall a short conversation of approximately two minutes from your everyday life. Write a 150-word analysis identifying at least three features of dialect, idiolect, or sociolect. Note how context affected the language choices made. Bring to next lesson.',
    worksheetQuestions: [
      {
        question: 'Define dialect and explain how it differs from accent.',
        lines: 4,
        modelAnswer:
          'Dialect refers to a variety of language that differs from the standard in vocabulary, grammar, and sometimes phonology, associated with a geographic region or social group. Accent refers specifically to the phonological features of a variety -- the way sounds are produced -- without any reference to grammar or vocabulary. All speakers have an accent; not all speakers use a distinct dialect.',
        marks: 3,
      },
      {
        question: 'What is covert prestige? Explain with reference to Trudgill\'s Norwich study.',
        lines: 5,
        modelAnswer:
          'Covert prestige is the social value attached to non-standard language varieties within particular communities, even when those varieties are officially stigmatised. In Trudgill\'s Norwich study (1974), male working-class speakers over-reported their use of non-standard forms (e.g., dropping word-final /ng/ to produce "walkin\'") because these forms carried covert prestige within their peer group, signalling toughness, authenticity, and local solidarity.',
        marks: 4,
      },
      {
        question: 'Explain how social network theory accounts for dialect maintenance.',
        lines: 5,
        modelAnswer:
          'Milroy\'s social network theory proposes that speakers embedded in dense, multiplex networks -- where members know each other through multiple roles (neighbours, workmates, family) -- are more likely to maintain non-standard dialect features because social pressure within the group reinforces local norms. Speakers with looser, more diverse networks are more exposed to different varieties and more likely to accommodate towards the standard.',
        marks: 4,
      },
      {
        question: 'What does Labov\'s department store study reveal about the relationship between language and social stratification?',
        lines: 6,
        modelAnswer:
          'Labov\'s 1966 New York study showed that workers in higher-status stores (Saks Fifth Avenue) were more likely to produce post-vocalic /r/ (a prestige feature) than workers in lower-status stores (S. Klein). This demonstrated that phonological variation is socially stratified -- speakers adjust their pronunciation, consciously or unconsciously, to align with the social prestige associated with their workplace. Language is therefore not simply a communication tool but a marker of social position.',
        marks: 4,
      },
      {
        question:
          'Analyse the following extract from a transcript for evidence of social identity construction. "Yeah so like we was chattin after an\' she goes, proper mental innit, an\' I said yeah but what can ya do." Refer to at least three linguistic features. (10 marks)',
        lines: 20,
        modelAnswer:
          'Strong responses will identify: non-standard grammar -- "we was" rather than "we were" reflects a sociolectal feature associated with informal vernacular speech, signalling in-group solidarity; lexis -- "chattin" (informal progressive form), "proper" used as an intensifying adverb, and "mental" used to mean surprising/extreme are sociolectal markers of informal youth register; discourse -- the reporting structure ("she goes") uses the quotative "go" rather than "say", a feature of informal colloquial speech associated with younger speakers (Tagliamonte); pragmatics -- "innit" functions as a discourse marker and solidarity-seeking tag question, inviting agreement and reinforcing interpersonal alignment; phonology (orthographically represented) -- the apostrophes in "chattin", "an\'", "ya" suggest consonant deletion and vowel reduction typical of informal connected speech. The best responses will connect these features to theories of sociolect and social identity, noting that they collectively construct a persona of casual informality and in-group belonging.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'Students frequently confuse accent and dialect -- it is worth drawing this distinction on the board as a Venn diagram: accent is a subset of dialect (all dialect speakers have an accent, but you can have a non-standard accent while using standard grammar).',
      'The Labov and Trudgill studies are frequently assessed in the exam; students should know the study name, date, method, and key finding for each.',
      'When using the transcripts, choose examples with genuine sociolinguistic richness rather than caricatures -- the goal is analytical insight, not social stereotyping.',
      'The personal idiolect audit in the plenary is often one of the most engaging moments of the lesson; allow students to share genuinely without requiring them to self-disclose anything they find uncomfortable.',
      'Accommodation Theory (Giles) is introduced here as a preliminary concept; it will be developed further in lessons on gender and occupation.',
    ],
    targetedSkills: [
      'AO1 -- Applying sociolinguistic metalanguage accurately',
      'AO2 -- Demonstrating knowledge of Labov, Trudgill, and Milroy',
      'AO3 -- Analysing language in its social and regional context',
      'Transcript annotation and comparative analysis',
      'Evaluating theoretical frameworks against linguistic evidence',
    ],
  },

  // -- Lesson 3: Gender and Language -------------------------------------------
  {
    id: 'y12u1-03',
    title: 'Gender and Language -- Deficit, Dominance, and Difference Models',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand and distinguish between the deficit, dominance, and difference models of gendered language',
      'Evaluate the contributions of Lakoff, Tannen, and Cameron to the study of gender and language',
      'Apply gendered language frameworks to real spoken and written data',
      'Construct a balanced analytical argument about the relationship between gender and language use',
    ],
    successCriteria: [
      'I can explain the deficit, dominance, and difference models with a theorist and key concept for each',
      'I can identify features of Lakoff\'s "women\'s language" in a transcript and evaluate the theory\'s limitations',
      'I can explain Tannen\'s distinction between rapport talk and report talk',
      'I can write a paragraph that applies a gender and language framework to textual evidence',
    ],
    keywords: [
      'deficit model',
      'dominance model',
      'difference model',
      'hedging',
      'tag question',
      'rapport talk',
      'report talk',
      'gender performativity',
      'interruption',
      'minimal response',
      'covert prestige',
      'face-threatening act',
    ],
    starterActivity: {
      title: 'True or False? Gender and Language Myths',
      duration: '12 minutes',
      instructions:
        'Display eight statements about gender and language on the board, mixing research-supported claims with popular misconceptions: for example, "Women talk more than men," "Men interrupt more than women," "Women use more standard language forms," "Gender differences in language are innate." Students vote true or false using mini-whiteboards. After each vote, reveal the research position (with caveats where evidence is contested). Use this to introduce the idea that assumptions about gender and language are often ideological rather than empirical, and that linguistic research complicates popular stereotypes. Ask: who benefits from these stereotypes?',
      differentiation: {
        support:
          'Provide a brief one-sentence context for each statement before the vote (e.g., "Researchers have studied this in workplace conversations...") to help students engage with the nuance.',
        core: 'Students vote, then write one sentence justifying their answer before the reveal.',
        stretch:
          'Students identify which statements might be true in some contexts but not others, introducing the concept of contextual variability in gendered language research.',
      },
      resources: [
        'Eight statements display slide',
        'Mini-whiteboards or response cards',
        'Research findings reference card for teacher',
      ],
    },
    mainActivities: [
      {
        title: 'Three Models of Gender and Language -- Structured Explanation',
        duration: '28 minutes',
        instructions:
          'Teacher delivers a structured explanation of the three theoretical models. Deficit model (Lakoff, 1975): women\'s language is deficient compared to men\'s; Lakoff identified features such as hedges ("sort of," "I think"), tag questions ("It\'s hot, isn\'t it?"), empty adjectives ("divine"), hypercorrect grammar, and super-polite forms. These features were interpreted as reflecting women\'s social insecurity and lack of authority. Dominance model (Zimmerman and West, 1975; Fishman, 1978): language differences result from male dominance; men interrupt more, hold the floor longer, and receive more minimal responses; women perform more interactional shiv work to maintain conversation. Difference model (Tannen, 1990): men and women grow up in different subcultures and develop different communicative styles; men use "report talk" (public, factual, status-oriented) and women use "rapport talk" (private, relational, connection-oriented); neither style is deficient. Introduce Cameron (1995): critiques all three models for treating gender as a fixed binary and ignoring within-group variation; argues for gender as performance (following Butler) rather than a stable identity category. Students complete a three-column comparison frame. Pause after each model for a pair-check.',
        differentiation: {
          support:
            'Provide a partially completed comparison frame with theorist names, dates, and one key concept per model already filled in; students add the definition and an example.',
          core: 'Students complete the full comparison frame independently from teacher explanation.',
          stretch:
            'Students write a critical evaluation of each model in a fourth column, noting one specific weakness or counter-evidence for each.',
        },
        resources: [
          'Three-column comparison frame handout',
          'PowerPoint with key quotes from Lakoff, Tannen, and Cameron',
          'Timeline of gender and language research (1975--2000)',
        ],
      },
      {
        title: 'Applying the Models -- Transcript Analysis',
        duration: '28 minutes',
        instructions:
          'Distribute a mixed-gender conversation transcript (approximately twenty-five lines, constructed or adapted from a published research corpus). Students annotate the transcript in three stages. Stage 1 (8 minutes): apply Lakoff\'s features -- highlight any hedges, tag questions, or politeness features and note the gender of the speaker. Stage 2 (8 minutes): apply dominance model concepts -- identify interruptions (coded as [INT] in the transcript), minimal responses, and topic control moves. Stage 3 (8 minutes): consider the difference model -- does either speaker appear to prioritise rapport or report? Students write a 150-word analysis using evidence from all three annotation stages. In the final four minutes, pairs share their analyses and assess: which model accounts best for what they observe in this transcript?',
        differentiation: {
          support:
            'Provide a line-by-line annotation guide with specific prompts directing students to relevant lines: "Look at line 7 -- what type of response is this and what does it suggest about power?"',
          core: 'Students annotate independently across all three stages and write the analysis using appropriate metalanguage.',
          stretch:
            'Students apply Cameron\'s critique to their analysis, arguing whether the transcript data supports or undermines a binary view of gender and language.',
        },
        resources: [
          'Mixed-gender conversation transcript handout',
          'Annotation guide (for support students)',
          'Three-model reference card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Model Evaluation -- Strengths and Limitations',
      duration: '12 minutes',
      instructions:
        'Students are assigned one of the three models at random (or by choice). They have four minutes to write two strengths and two limitations of their assigned model. Students then find two other students with different models and share their evaluations in a brief round-robin. Teacher facilitates a whole-class summary, asking: is any single model sufficient to explain all the gendered language patterns we observe? Use this to introduce the concept that combining frameworks often produces richer analysis.',
      differentiation: {
        support:
          'Provide a strengths/limitations frame with sentence starters: "A strength of this model is that it explains... because..." and "A limitation is that it ignores..."',
        core: 'Students write their evaluations independently using today\'s metalanguage.',
        stretch:
          'Students propose what a "fourth model" that addresses the weaknesses of all three might look like, drawing on Cameron\'s performativity framework.',
      },
    },
    homework:
      'Find a media text (TV programme, podcast excerpt, social media thread) that features speakers of different genders. Write a 200-word analysis applying at least two of today\'s models. Evaluate which model is most useful for explaining what you observe. Bring the text and your analysis to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Explain Lakoff\'s deficit model of women\'s language, naming three specific features she identified.',
        lines: 6,
        modelAnswer:
          'Lakoff (1975) argued that women\'s language is a deficient form compared to men\'s, reflecting women\'s subordinate social position. Three features she identified are: hedges (e.g., "I think" or "sort of"), which make statements sound tentative and lacking in confidence; tag questions (e.g., "It\'s cold, isn\'t it?"), which seek approval rather than asserting a position; and hypercorrect grammar, where women conform more closely to prestige norms in formal contexts, reflecting social anxiety about being judged.',
        marks: 4,
      },
      {
        question: 'What is the key difference between the dominance model and the difference model?',
        lines: 5,
        modelAnswer:
          'The dominance model (Zimmerman and West; Fishman) sees gender differences in language as the result of male power over women -- men interrupt, control topics, and receive conversational labour from women. The difference model (Tannen) sees gender differences as the result of different but equally valid communicative subcultures, not power imbalance; neither style is inherently deficient.',
        marks: 3,
      },
      {
        question: 'Explain what Tannen means by "rapport talk" and "report talk".',
        lines: 4,
        modelAnswer:
          'Tannen argues that women tend to use "rapport talk" -- language oriented towards building relationships, expressing feelings, and maintaining connection -- in informal private contexts. Men tend to use "report talk" -- language oriented towards conveying information, establishing status, and demonstrating expertise -- in public contexts. These differences reflect different socialisation, not deficiency.',
        marks: 3,
      },
      {
        question: 'How does Cameron\'s work challenge the deficit and difference models?',
        lines: 5,
        modelAnswer:
          'Cameron (1995) argues that both models treat gender as a fixed, binary category and ignore the enormous variation within gender groups. Drawing on Butler\'s concept of gender performativity, she argues that gender is something people do through repeated actions (including language) rather than something they are. This means language differences cannot be simply mapped onto a male/female binary; context, identity, and social role are more important than biological sex.',
        marks: 4,
      },
      {
        question:
          'Evaluate the view that gender is the most significant factor determining how people use language. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will engage with all three models: deficit (Lakoff), dominance (Zimmerman, West, Fishman), and difference (Tannen), before considering Cameron\'s challenge to the gender-as-binary assumption. The response should evaluate alternative factors: social class (Labov, Trudgill), age (Eckert), ethnicity, and context of interaction. Strong responses will use specific evidence -- e.g., Labov\'s finding that gender interacts with social class in determining phonological variation; Eckert\'s work showing that social category (jock vs burnout) was more predictive than gender in adolescent language use. The best responses will conclude that gender is one significant factor among many, and that its significance varies with context, and will consider the methodological challenge of isolating gender as an independent variable.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'Students often arrive with strong prior opinions about gender and language, sometimes based on popular stereotypes. The True or False starter is designed to surface and gently challenge these assumptions before the theoretical input.',
      'Lakoff\'s features (hedges, tag questions) are frequently misapplied: students need to understand that these features are not exclusively used by women and that their function depends on context. A tag question can signal uncertainty or can be a control device.',
      'Cameron\'s critique is conceptually challenging for Year 12 students; introduce it as a "complication" of the earlier models rather than a replacement, and focus on the concept of within-group variation.',
      'Ensure the transcript used is rich enough to support application of all three models; avoid transcripts that too neatly confirm one model, as this inhibits critical evaluation.',
    ],
    targetedSkills: [
      'AO1 -- Applying gender and language metalanguage accurately',
      'AO2 -- Demonstrating knowledge of Lakoff, Tannen, Cameron, and dominance theorists',
      'AO3 -- Analysing language in its social and cultural context',
      'Evaluating competing theoretical frameworks against evidence',
      'Constructing balanced analytical arguments in writing',
    ],
  },

  // -- Lesson 4: Language and Occupation ---------------------------------------
  {
    id: 'y12u1-04',
    title: 'Language and Occupation -- Register, Jargon, and Workplace Discourse',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Define occupational register and explain how it varies according to field, tenor, and mode',
      'Analyse the function of jargon and technical language in professional communication',
      'Examine power dynamics encoded in workplace discourse, including asymmetrical interaction',
      'Apply register theory and discourse analysis to authentic workplace texts and transcripts',
    ],
    successCriteria: [
      'I can define register and its three variables (field, tenor, mode) with examples',
      'I can explain the functions of jargon in professional contexts, including both inclusion and exclusion',
      'I can identify and comment on power asymmetry in a workplace interaction',
      'I can write an analysis of an occupational text applying at least three linguistic frameworks',
    ],
    keywords: [
      'register',
      'field',
      'tenor',
      'mode',
      'jargon',
      'technical language',
      'euphemism',
      'power asymmetry',
      'institutional discourse',
      'directive',
      'face-threatening act',
      'occupational sociolect',
    ],
    starterActivity: {
      title: 'Jargon Translation Challenge',
      duration: '10 minutes',
      instructions:
        'Display five short passages, each drawn from a different occupational domain (medicine, law, IT, finance, education). Each passage contains three to four items of specialist jargon. Students work in pairs to: (a) identify the occupational domain of each passage, (b) attempt to translate the jargon into plain English. Pairs share their translations; class discusses any that proved difficult. Teacher uses this to introduce the idea that occupational jargon serves multiple functions: precision, efficiency, and in-group identity -- but can also exclude outsiders and obscure meaning (as in euphemistic institutional language).',
      differentiation: {
        support:
          'Provide a glossary for one of the five domains to demonstrate the process before students attempt the others independently.',
        core: 'Students translate all five passages and suggest a function for each example of jargon.',
        stretch:
          'Students evaluate whether the jargon in each passage functions primarily to include, exclude, or obscure, and consider who benefits from each function.',
      },
      resources: [
        'Five occupational passages display slide or handout',
        'Domain glossary (one domain, for support students)',
        'Answer guide for teacher',
      ],
    },
    mainActivities: [
      {
        title: 'Register Theory and Workplace Discourse -- Structured Input',
        duration: '25 minutes',
        instructions:
          'Teacher explains Halliday\'s register theory: field (the subject matter or activity), tenor (the relationship between participants, including formality and power), and mode (the channel of communication -- spoken, written, digital). Apply each variable to a worked example: a doctor\'s letter to a specialist versus a doctor\'s conversation with a patient. Introduce the concept of occupational sociolect: the shared variety of language used within a professional community that signals membership and expertise. Discuss power asymmetry in institutional discourse: interactions between employers and employees, doctors and patients, teachers and students are typically asymmetrical in terms of who asks questions, who controls topic, and who uses directives. Introduce face-threatening acts (Brown and Levinson): directives in the workplace can threaten positive face (the desire to be liked) or negative face (the desire for autonomy); politeness strategies are used to mitigate this. Students complete a structured note frame. Pair-check after each section.',
        differentiation: {
          support:
            'Provide a pre-structured note frame with the key terms and their definitions already given; students add examples during the explanation.',
          core: 'Students take notes independently and generate their own examples for each concept.',
          stretch:
            'Students evaluate whether power asymmetry in workplace discourse is always negative or whether it can serve legitimate communicative functions, using examples.',
        },
        resources: [
          'Structured note frame handout',
          'PowerPoint with worked register analysis example',
          'Brown and Levinson politeness theory summary card',
        ],
      },
      {
        title: 'Workplace Text and Transcript Analysis',
        duration: '32 minutes',
        instructions:
          'Distribute a pack containing two texts: (a) a formal workplace email from a manager to a team member about a performance issue, and (b) a short transcript of an informal workplace conversation between colleagues about the same issue. Students annotate both texts using a dual-focus approach. First focus -- register: identify field, tenor, and mode features in each text and compare how register shifts between the two. Second focus -- power and discourse: in the email, identify directives (explicit and hedged), euphemisms, and institutional formality markers; in the transcript, identify how power is negotiated through interruption, topic shifts, and alignment/disalignment. Students write a 200-word comparative analysis. Teacher circulates and prompts students to move beyond feature identification towards explanation of effect and function.',
        differentiation: {
          support:
            'Provide a line-by-line annotation checklist specifying what to look for in each text: "In the email, underline any directive verb phrases. In the transcript, circle any instances where one speaker changes the topic."',
          core: 'Students annotate independently and write the comparative analysis.',
          stretch:
            'Students consider how the same communicative goal (addressing poor performance) is achieved through very different linguistic strategies in each text, and evaluate which approach is more effective and why.',
        },
        resources: [
          'Workplace text pack (email and transcript)',
          'Annotation checklist (for support students)',
          'Register and discourse analysis framework card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Register Transformation Task',
      duration: '13 minutes',
      instructions:
        'Display a short formal institutional text (a health and safety notice of approximately sixty words). Students have six minutes to rewrite the text in two alternative registers: (1) as a spoken instruction from a supervisor to a new employee (informal, face-to-face), and (2) as a text message between colleagues. Students then annotate their rewrites, highlighting the specific changes they made to field, tenor, and mode in each version. Three examples are shared with the class for discussion. Teacher highlights how register transformation reveals the choices embedded in the original text.',
      differentiation: {
        support:
          'Provide a partially rewritten version for one of the two registers as a model, then ask students to complete the second transformation independently.',
        core: 'Students complete both transformations independently and annotate their choices.',
        stretch:
          'Students reflect on which transformation was more challenging and why, linking their answer to theories of register and the constraints of different modes.',
      },
    },
    homework:
      'Collect a real example of occupational language from any profession (a leaflet, a notice, an email, a website). Write a 200-word register analysis applying field, tenor, and mode. Identify at least three items of jargon and explain the function of each. Bring the text and your analysis to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Define register and explain its three variables using an example from a professional context.',
        lines: 6,
        modelAnswer:
          'Register is the variety of language used in a particular social situation. Halliday identifies three variables: field (the subject matter -- e.g., a medical consultation involves disease, treatment, and symptoms); tenor (the social relationship between participants -- e.g., the asymmetrical relationship between doctor and patient, with the doctor holding institutional authority); and mode (the channel -- e.g., a spoken consultation versus a written prescription, each with different linguistic conventions).',
        marks: 4,
      },
      {
        question: 'Explain two functions of jargon in professional communication.',
        lines: 5,
        modelAnswer:
          'First, jargon serves a precision function: technical terms allow professionals to communicate complex or specialised concepts efficiently and unambiguously within their field (e.g., "myocardial infarction" is more precise than "heart attack"). Second, jargon serves an identity function: using occupational terminology signals membership of a professional community and establishes credibility. However, jargon can also function as an exclusion device, restricting access to information for non-specialists.',
        marks: 4,
      },
      {
        question: 'What is a face-threatening act? Give one example from a workplace context.',
        lines: 5,
        modelAnswer:
          'A face-threatening act (Brown and Levinson) is a communicative act that potentially damages the positive face (the desire to be liked and approved of) or negative face (the desire for autonomy) of the hearer. In a workplace context, a manager\'s directive -- "Make sure this is submitted by five o\'clock" -- threatens the employee\'s negative face by imposing on their autonomy. Politeness strategies such as hedging ("If you could..."), questioning ("Could you...?"), or offering reasons mitigate this threat.',
        marks: 3,
      },
      {
        question: 'Analyse the following extract for features of occupational register: "We kindly request that all personnel ensure compliance with the mandatory evacuation protocol in accordance with Section 4.2 of the Health and Safety Policy."',
        lines: 8,
        modelAnswer:
          'Field: health and safety/institutional administration -- evidenced by technical noun phrases ("mandatory evacuation protocol," "compliance") and the reference to a formal policy document. Tenor: formal and hierarchical -- the use of "personnel" rather than "staff" or "people" maintains institutional distance; "we kindly request" is a hedged directive that preserves the organisation\'s authority while offering a degree of face-saving. Mode: formal written institutional communication -- the long complex noun phrase "Section 4.2 of the Health and Safety Policy" is characteristic of written rather than spoken language, which would use shorter, more direct formulations. The euphemistic "kindly request" softens the directive force while the word "mandatory" reasserts it.',
        marks: 5,
      },
      {
        question:
          'Evaluate the view that the language of the workplace always reflects and reinforces existing power structures. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will demonstrate understanding of how workplace discourse can encode power asymmetry: through directives from superiors, control of topic and agenda in meetings, differential use of formal titles, and access to specialist registers. It should reference relevant frameworks -- Brown and Levinson\'s politeness theory, Fairclough\'s critical discourse analysis, Goffman\'s concept of face. However, a strong response will also challenge the "always" in the question: workplaces vary enormously in their power structures; informal horizontal communication (between colleagues of equal status) need not reflect hierarchy; political language and euphemism can be used by less powerful actors to resist or subvert authority; and the same linguistic form (e.g., a question) can serve either hierarchical or egalitarian functions depending on context. The best responses will evaluate the extent to which power is encoded in language structures themselves versus performed through interaction.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'The jargon translation starter is reliably engaging; choose occupational domains that are genuinely unfamiliar to most students to ensure authentic challenge.',
      'Halliday\'s register variables (field, tenor, mode) are foundational for the whole unit and recur in the exam; ensure students have a secure understanding before moving on.',
      'Brown and Levinson\'s politeness theory and face-threatening acts are introduced here for the first time; keep the explanation practical and focused on examples rather than abstract theory.',
      'The worked email versus transcript comparison works best when both texts address the same communicative situation, allowing students to see how register transforms the same content.',
      'Avoid using real workplace emails that could identify individuals; construct or adapt texts to ensure they are illustrative without being potentially offensive.',
    ],
    targetedSkills: [
      'AO1 -- Applying register and discourse metalanguage accurately',
      'AO2 -- Demonstrating knowledge of Halliday\'s register theory and politeness theory',
      'AO3 -- Analysing language in its institutional and professional context',
      'Comparative text analysis across spoken and written modes',
      'Evaluating the relationship between language and power',
    ],
  },

  // -- Lesson 5: Language and Age ----------------------------------------------
  {
    id: 'y12u1-05',
    title: 'Language and Age -- Teen Language, Elderspeak, and Generational Variation',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Explain how language varies across different age groups and life stages',
      'Analyse the social functions of teen language including identity construction and peer bonding',
      'Evaluate the concept of elderspeak and its implications for communication and social attitude',
      'Apply theories of language and age (Eckert, Kerswill) to linguistic data',
    ],
    successCriteria: [
      'I can explain why teen language tends to diverge from adult norms and identify three specific features',
      'I can define elderspeak and explain its linguistic characteristics and social implications',
      'I can distinguish between age-grading (temporary change) and generational change (permanent)',
      'I can write an analysis of an age-related language variety using appropriate theoretical frameworks',
    ],
    keywords: [
      'age-grading',
      'generational change',
      'teen language',
      'slang',
      'elderspeak',
      'dialect levelling',
      'life stage',
      'peer group',
      'innovation',
      'obsolescence',
      'vernacular',
      'register',
    ],
    starterActivity: {
      title: 'Generational Slang Timeline',
      duration: '12 minutes',
      instructions:
        'Display a timeline from 1950 to 2025 with ten slang terms placed at the decade in which they emerged or peaked in use: e.g., "groovy" (1960s), "wicked" (1980s), "sick" (2000s), "slay" (2020s). Students work in pairs to match the terms to their era and attempt to define each term in context. After four minutes, pairs share their answers and the class discusses: why do slang terms emerge? Why do they fall out of use? Which terms have broadened or narrowed in meaning over time? Teacher uses this to introduce the concepts of age-grading and generational change.',
      differentiation: {
        support:
          'Provide a word bank of the ten eras alongside the ten terms so students only need to match rather than independently date each term.',
        core: 'Students match and define independently, then discuss the underlying processes.',
        stretch:
          'Students identify any terms whose meaning has shifted over time and consider whether the shift represents broadening, narrowing, amelioration, or pejoration.',
      },
      resources: [
        'Generational slang timeline slide',
        'Era word bank (for support students)',
        'Response slips',
      ],
    },
    mainActivities: [
      {
        title: 'Language and Age -- Theoretical Input',
        duration: '28 minutes',
        instructions:
          'Teacher delivers structured input on language and age. Life stage and language: language changes across the life course -- children acquire language, adolescents innovate and diverge, adults stabilise (age-grading), older speakers may simplify or accommodate. Age-grading versus generational change: age-grading refers to features that are typical of a particular life stage but do not persist as the speaker ages (e.g., teen slang is usually abandoned in adulthood); generational change refers to features introduced by a cohort that persist and spread through the language system (e.g., rising intonation spreading from younger to older speakers). Teen language: Eckert\'s work on jocks and burnouts shows that social category within age group (not just age) shapes linguistic choice; teens use language to construct peer group identity and distance from adult norms. Key features: lexical innovation (slang), semantic shift (words with new meanings for each generation), phonological features (high rising terminal, vocal fry), pragmatic innovation (new discourse markers). Elderspeak: a simplified, slow, high-pitched speech style sometimes used when speaking to elderly people -- similar features to child-directed speech. Problematic because it implies cognitive impairment and infantilises the recipient. Students take notes on a graphic organiser. Pause after each section for pair-check.',
        differentiation: {
          support:
            'Provide a pre-structured graphic organiser with headers and one example per section already completed; students add definitions and further examples during the input.',
          core: 'Students take notes independently using the blank graphic organiser.',
          stretch:
            'Students evaluate whether the concept of "age-grading" presupposes that adult language is the norm against which other age-related varieties are measured, and consider whose interests this assumption serves.',
        },
        resources: [
          'Graphic organiser handout (life stage / age-grading / teen language / elderspeak)',
          'PowerPoint with Eckert study summary and feature list',
          'Elderspeak research summary card',
        ],
      },
      {
        title: 'Comparative Data Analysis -- Teen Language and Elderspeak',
        duration: '28 minutes',
        instructions:
          'Distribute two short data sets: (a) a transcript of an informal conversation between two sixteen-year-olds (approximately twenty lines), and (b) a short transcript of a carer speaking to an elderly resident in a care home (approximately fifteen lines). Students annotate both transcripts, identifying and labelling: lexical features (slang, technical terms, informal vocabulary), grammatical features (non-standard forms, simplified structures), phonological features where represented (high rising terminal, reduced speech), discourse features (topic control, question structure), pragmatic features (social function of each utterance). Students write a 200-word comparative analysis addressing the question: in what ways do both teen language and elderspeak represent departures from an assumed "adult standard," and what social assumptions underlie each departure?',
        differentiation: {
          support:
            'Provide a structured annotation guide with specific features to identify in each transcript and sentence starters for the comparison.',
          core: 'Students annotate independently and write the comparative analysis.',
          stretch:
            'Students challenge the premise of the question by arguing that the concept of an "adult standard" is itself ideologically loaded and consider what it would mean to treat all age-related varieties as equally valid.',
        },
        resources: [
          'Two-transcript handout (teen language and elderspeak)',
          'Annotation guide (for support students)',
          'Age-related language feature checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Age-Grading or Generational Change? Predicting the Future',
      duration: '12 minutes',
      instructions:
        'Display five current slang terms or linguistic features that are predominantly associated with younger speakers (e.g., a specific discourse marker, a semantic shift of a common adjective). Students vote on each: age-grading (will likely fade as this cohort ages) or generational change (will persist and spread). Students must give a reason for each prediction, drawing on theories discussed in the lesson. Class discusses the difficulty of predicting which changes will be permanent, linking to broader questions about how language change is studied.',
      differentiation: {
        support:
          'Provide a decision frame: "I think this is [age-grading / generational change] because [reason from theory]."',
        core: 'Students vote and justify independently.',
        stretch:
          'Students consider what evidence a sociolinguist would need to gather to confirm whether a feature represents age-grading or generational change, and how such a study might be designed.',
      },
    },
    homework:
      'Interview a family member or family friend who is at least twenty years older or younger than you. Record (with permission) or note down five examples of language that you think are age-specific to that person. Write a 150-word analysis of your findings applying the concepts of age-grading, generational change, or teen language. Bring your examples and analysis to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Distinguish between age-grading and generational change in language use.',
        lines: 5,
        modelAnswer:
          'Age-grading refers to language features that are characteristic of a particular life stage but do not persist as the individual ages -- for example, slang terms used in adolescence are typically abandoned in adulthood. Generational change refers to linguistic innovations introduced by a cohort that persist as the cohort ages and may spread to other age groups -- for example, high rising terminal, introduced by younger speakers, has spread to middle-aged speakers in some regions.',
        marks: 4,
      },
      {
        question: 'What is elderspeak? Identify two linguistic features associated with it.',
        lines: 5,
        modelAnswer:
          'Elderspeak is a simplified speech register used (often unconsciously) when speaking to elderly people, characterised by features similar to child-directed speech. Two linguistic features are: high pitch and exaggerated intonation (used to convey warmth but implying reduced cognitive capacity), and simplified syntax -- shorter sentences, slower pace, more repetition -- which can be experienced as infantilising and condescending.',
        marks: 3,
      },
      {
        question: 'Explain how Eckert\'s research complicates a simple age-based explanation of teen language.',
        lines: 5,
        modelAnswer:
          'Eckert\'s study of high school students ("jocks" and "burnouts") showed that linguistic variation among teenagers was not simply a function of age but of social category within the age group. Burnouts (working-class students opposed to school norms) used more non-standard vernacular features than jocks (middle-class students aligned with school values), despite being the same age. This demonstrates that social identity and peer group membership are more powerful predictors of linguistic choice than age alone.',
        marks: 4,
      },
      {
        question: 'Identify three features of teen language from the following extract and explain the social function of each: "That exam was bare long tbh, I was gassed to get out ngl. Didn\'t wanna peak too early innit."',
        lines: 8,
        modelAnswer:
          'Lexical slang: "bare" is used as an intensifying adverb meaning "very," a feature of Multicultural London English that has spread into youth vernacular; its use signals peer group alignment and familiarity. Initialisms: "tbh" (to be honest) and "ngl" (not gonna lie) are digital-origin discourse markers that have entered spoken teen language; they function as hedges or authenticity signals, managing the speaker\'s stance. Discourse marker: "innit" functions as a solidarity-seeking tag, inviting agreement and constructing rapport within the peer group. Each feature signals in-group membership and distances the speaker from formal adult norms.',
        marks: 5,
      },
      {
        question:
          'Evaluate the view that teen language is simply a form of linguistic rebellion against adult norms. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will acknowledge the dimension of identity construction and differentiation from adult norms -- Eckert\'s work, Labov\'s concept of the vernacular, and the role of peer group pressure in lexical innovation all support the idea that teen language serves to mark generational and social boundaries. However, the "rebellion" framing is reductive: Eckert shows that the most linguistically innovative teens are the most socially engaged within their peer group, not simply resistant to adults; lexical innovation in teen language often reflects creativity, cultural responsiveness, and contact with diverse communities (e.g., Multicultural London English influencing national youth vernacular). Moreover, some teen features persist into adulthood (generational change), which challenges the idea that they are purely reactive. The best responses will also consider the political dimension: framing teen language as "rebellion" or "slang" implies it is deviant, reflecting the same prescriptive attitude that has historically stigmatised non-standard varieties of all kinds.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'Students are often highly engaged by this topic because it directly relates to their own language use; encourage them to be analytical rather than simply self-referential.',
      'The elderspeak section requires sensitivity; frame it as a linguistic phenomenon with social implications rather than a criticism of carers, many of whom use elderspeak without awareness.',
      'Eckert\'s jocks and burnouts study is conceptually important because it shows that social category within an age group matters more than age itself; this is a useful counter-argument in any essay on language and age.',
      'The homework interview task is optional for students who do not have access to a suitable family member; offer an alternative such as analysing a TV programme featuring speakers of different ages.',
    ],
    targetedSkills: [
      'AO1 -- Applying age-related language metalanguage accurately',
      'AO2 -- Demonstrating knowledge of Eckert, Kerswill, and age-grading theory',
      'AO3 -- Analysing language in its social and generational context',
      'Comparative transcript analysis across age groups',
      'Evaluating the relationship between language, identity, and social category',
    ],
  },

  // -- Lesson 6: Language and Ethnicity ----------------------------------------
  {
    id: 'y12u1-06',
    title: 'Language and Ethnicity -- MLE, Code-Switching, and Multicultural English',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Define Multicultural London English (MLE) and identify its key phonological, lexical, and grammatical features',
      'Explain the concept of code-switching and its social functions in multilingual and multicultural communities',
      'Evaluate the role of ethnicity in language variation and language change',
      'Apply relevant research (Cheshire, Fox, Kerswill) to the analysis of ethnically diverse language data',
    ],
    successCriteria: [
      'I can identify at least four features of MLE and explain their origins',
      'I can define code-switching and distinguish it from style-shifting',
      'I can explain two social functions of code-switching with reference to specific contexts',
      'I can write an analysis of a multilingual or multicultural language sample using appropriate frameworks',
    ],
    keywords: [
      'Multicultural London English',
      'MLE',
      'code-switching',
      'code-mixing',
      'multilingualism',
      'contact language',
      'ethnic identity',
      'accommodation',
      'diaspora',
      'lexical borrowing',
      'dialect levelling',
      'sociolect',
    ],
    starterActivity: {
      title: 'MLE Feature Spotting',
      duration: '10 minutes',
      instructions:
        'Display a short transcript extract (fifteen lines) featuring a speaker using recognisable MLE features. Students read the extract and individually identify any features that seem unfamiliar or non-standard, annotating them with a question mark or a brief comment. After three minutes, pairs share their annotations. Teacher takes class feedback and introduces the term Multicultural London English, explaining that this is a well-studied linguistic variety, not a "corrupted" form of English. Display the research context briefly: Cheshire, Fox, Kerswill and colleagues (Hackney and inner-city London research 2007--2011). Ask: where do you think these features come from?',
      differentiation: {
        support:
          'Provide a list of six MLE features to look for (e.g., "man" as a first-person pronoun, "bare" as an intensifier, glottal stop, fronted /th/) so students can search specifically rather than open-endedly.',
        core: 'Students annotate independently using general awareness of non-standard features.',
        stretch:
          'Students speculate on the linguistic origins of two features they have identified before the teacher provides the research context.',
      },
      resources: [
        'MLE transcript extract handout',
        'MLE feature checklist (for support students)',
        'Research context slide (Cheshire, Fox, Kerswill)',
      ],
    },
    mainActivities: [
      {
        title: 'MLE and Language Contact -- Structured Input',
        duration: '28 minutes',
        instructions:
          'Teacher delivers structured input on MLE and related concepts. MLE origins: developed in London\'s ethnically diverse inner-city communities from the 1980s onwards; features drawn from Jamaican Creole, Bengali, West African languages, Cockney, and other contact varieties. Key features: phonological (th-fronting producing /f/ for voiceless /th/ as in "fing" for "thing"; vocalic changes; glottal stop); lexical (borrowings such as "mandem" from Jamaican Creole, "peng," "bare," "wagwan"; pronoun extension -- "man" used as first-person singular); grammatical (negative concord -- "I ain\'t done nothing"; aspectual "been" for remote past; invariant "don\'t" across persons). Spread of MLE: research shows MLE features spreading beyond the original communities to white working-class teenagers and beyond London (dialect levelling at a national level). Code-switching: shifting between two or more language varieties in a single interaction; different from style-shifting (shifting register within one variety). Social functions: signalling ethnic identity, managing interlocutor relationships, expressing concepts more precisely in one variety, including or excluding participants. Students complete a structured note frame with pauses for pair-checks.',
        differentiation: {
          support:
            'Provide a pre-structured note frame with MLE feature categories (phonological / lexical / grammatical) and a definition of code-switching already given; students add examples and explanations.',
          core: 'Students take full notes independently and identify their own examples for each feature category.',
          stretch:
            'Students evaluate whether MLE should be classified as a dialect of English, a creole, or a contact language, and justify their classification with reference to its features and origins.',
        },
        resources: [
          'Structured note frame handout',
          'PowerPoint with MLE feature examples and Cheshire et al. study summary',
          'Code-switching definition and functions card',
        ],
      },
      {
        title: 'Code-Switching Analysis -- Multilingual Speaker Data',
        duration: '28 minutes',
        instructions:
          'Distribute a transcript of a multilingual speaker (or a speaker using MLE alongside more standard English) across two different contexts: an informal conversation with friends and a semi-formal conversation with a teacher or employer. Students annotate the transcripts to: (a) identify specific instances of code-switching, noting which variety is used in each instance; (b) suggest the social function of each switch (solidarity, authority, precision, exclusion, face-management); (c) identify any features shared across both contexts that suggest the speaker has a stable multilingual repertoire rather than two separate, competing systems. Students write a 200-word analysis arguing whether the speaker\'s code-switching reflects choice and agency or social constraint. Reference Gumperz\'s distinction between metaphorical and situational code-switching where appropriate.',
        differentiation: {
          support:
            'Provide a code-switching annotation key with four function labels (solidarity / authority / identity / exclusion) and ask students to assign one label to each switch before writing their analysis.',
          core: 'Students annotate independently and write the analysis using appropriate metalanguage.',
          stretch:
            'Students evaluate whether the concept of "code-switching" itself implies that one variety is the default and the other is the deviation, and consider whether a more neutral term would better reflect multilingual speakers\' experience.',
        },
        resources: [
          'Multilingual speaker transcript handout (two contexts)',
          'Code-switching annotation key (for support students)',
          'Gumperz situational/metaphorical code-switching summary',
        ],
      },
    ],
    plenaryActivity: {
      title: 'MLE: Enrichment or Threat? Evaluating Language Attitudes',
      duration: '14 minutes',
      instructions:
        'Display two short opinion pieces: one from a popular media source framing MLE as "lazy English" or a sign of cultural fragmentation, and one from a linguistic researcher presenting MLE as a creative and systematic variety reflecting the cultural richness of multicultural Britain. Students spend five minutes writing three bullet points evaluating the evidence and reasoning in each piece, applying their knowledge from the lesson. Class discussion: what assumptions about language, culture, and identity does each piece reflect? Which is better supported by linguistic evidence?',
      differentiation: {
        support:
          'Provide a structured comparison frame: "Piece A claims... This is supported by / undermined by linguistic evidence because..." to scaffold the evaluation.',
        core: 'Students evaluate independently using metalanguage from today\'s lesson.',
        stretch:
          'Students consider why media representations of MLE tend to be negative and whose social interests these representations serve, drawing on critical discourse analysis.',
      },
    },
    homework:
      'Research one variety of English spoken in a multicultural community outside London (e.g., Birmingham\'s multicultural English, Manchester, Toronto\'s Multicultural English). Write a 150-word account of its key features, origins, and social context. Note one similarity to and one difference from MLE. Bring your research to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Define Multicultural London English and explain its origins.',
        lines: 5,
        modelAnswer:
          'Multicultural London English (MLE) is a variety of English that developed in London\'s ethnically diverse inner-city communities from approximately the 1980s onward. It draws features from Jamaican Creole, West African languages, South Asian languages, and traditional Cockney, shaped by contact between speakers of diverse linguistic backgrounds. It is a contact variety in the sense that its features cannot be attributed to a single source language but emerge from sustained multilingual interaction.',
        marks: 4,
      },
      {
        question: 'Identify two phonological features of MLE and explain their significance.',
        lines: 5,
        modelAnswer:
          'First, th-fronting: the voiceless dental fricative /th/ is realised as /f/ (e.g., "fing" for "thing"), a feature found in several contact varieties and traditional Cockney but now strongly associated with MLE. Second, the glottal stop replacing /t/ in medial and final positions is widespread in MLE, reflecting both contact-language influence and broader urban vernacular patterns. Both features have spread beyond the original ethnic communities to white working-class youth, suggesting MLE is driving dialect levelling.',
        marks: 4,
      },
      {
        question: 'Define code-switching and explain two social functions it can serve.',
        lines: 6,
        modelAnswer:
          'Code-switching is the practice of shifting between two or more languages or language varieties within a single conversation or interaction. First, it can serve a solidarity function: switching to a shared heritage language or in-group variety signals ethnic or cultural identity and creates intimacy between speakers who share that repertoire. Second, it can serve an exclusion function: switching to a variety unknown to one interlocutor allows speakers to communicate privately within a mixed-language group.',
        marks: 4,
      },
      {
        question: 'What does the spread of MLE features to non-ethnic-minority speakers suggest about language change?',
        lines: 5,
        modelAnswer:
          'The spread of MLE features (e.g., "bare," "mandem," th-fronting) to white working-class teenagers and eventually to speakers beyond London suggests that ethnically diverse urban varieties can act as motors of language change in the wider community. This challenges the assumption that language change flows "downwards" from prestige varieties; instead, it shows that contact varieties with high covert prestige among youth can drive change across ethnic and regional boundaries -- a process researchers call dialect levelling or supralocal spread.',
        marks: 3,
      },
      {
        question:
          'Evaluate the view that code-switching demonstrates that multilingual speakers have a richer linguistic repertoire than monolingual speakers. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will argue for the enrichment view: code-switching is a skilled practice requiring knowledge of two (or more) systems and sensitivity to social context; Gumperz\'s distinction between metaphorical and situational switching shows that bilingual speakers use code choice as a sophisticated communicative resource. The response should engage with evidence: studies of MLE speakers show metalinguistic awareness of when to switch and why; code-switching serves functions (identity, precision, intimacy) that are difficult to achieve in a single variety. The response should also engage critically: monolingual speakers are not linguistically impoverished -- they have access to a full range of registers and styles within one system; the comparison depends on how "richness" is defined. The best responses will consider the ideological dimension: the framing of multilingualism as "rich" versus monolingualism as "limited" can itself be politically motivated, and the question of richness is methodologically difficult to operationalise.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'This lesson requires particular sensitivity around the topics of race, ethnicity, and language. Frame MLE as a legitimate, well-researched linguistic variety from the outset; never allow classroom discussion to slide into stereotyping.',
      'Cheshire, Fox, Kerswill et al. "Contact, the feature pool and the speech community: The emergence of Multicultural London English" (2011) is the key research paper; students do not need to read it but should know the names and the broad finding.',
      'The plenary media comparison works well because students have now enough knowledge to critique media misrepresentation; this is empowering and links to broader AO3 skills.',
      'Code-switching can be illustrated by asking students (sensitively and voluntarily) if they have experience of switching between languages or varieties -- many will, and their personal experience is genuinely relevant data.',
    ],
    targetedSkills: [
      'AO1 -- Applying ethnicity and language metalanguage accurately',
      'AO2 -- Demonstrating knowledge of MLE research and code-switching theory',
      'AO3 -- Analysing language in its multicultural and sociolinguistic context',
      'Critical evaluation of media representations of language',
      'Transcript analysis with attention to social function',
    ],
  },

  // -- Lesson 7: Media Language ------------------------------------------------
  {
    id: 'y12u1-07',
    title: 'Media Language -- Tabloid vs Broadsheet, Online Media',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Analyse the linguistic features that distinguish tabloid from broadsheet newspaper language',
      'Examine how online and social media have created new hybrid genres of language',
      'Apply discourse and pragmatic frameworks to media texts',
      'Evaluate the relationship between media language, audience, and ideology',
    ],
    successCriteria: [
      'I can identify and explain at least five linguistic features that are characteristic of tabloid language',
      'I can compare tabloid and broadsheet coverage of the same story using appropriate metalanguage',
      'I can explain how online media combines features of written and spoken language',
      'I can write an analysis of a media text applying lexis, grammar, discourse, and pragmatics frameworks',
    ],
    keywords: [
      'tabloid',
      'broadsheet',
      'headline',
      'lexical density',
      'nominalisation',
      'sensationalism',
      'emotive language',
      'hybrid genre',
      'multimodality',
      'hypertext',
      'discourse structure',
      'ideology',
    ],
    starterActivity: {
      title: 'Same Story, Different Language: Headline Sorting',
      duration: '12 minutes',
      instructions:
        'Provide each pair with eight headline cards: four tabloid and four broadsheet, all reporting the same four news stories. Students sort the headlines by story and then by publication type, arranging them in a two-by-four grid. After sorting, pairs annotate the differences they notice using any metalanguage they already know. Take class feedback: what makes the tabloid headlines immediately recognisable? What words or structures signal broadsheet? Teacher lists student observations on the board and frames these as the starting point for the lesson\'s analytical framework.',
      differentiation: {
        support:
          'Provide a hint card listing three categories of difference to look for: vocabulary choices, sentence structure, and tone.',
        core: 'Students sort and annotate independently, generating their own observations.',
        stretch:
          'Students articulate an overarching principle explaining why the two newspaper types make such consistently different linguistic choices, drawing on their knowledge of audience and ideology.',
      },
      resources: [
        'Headline card sets (laminated, one per pair)',
        'Hint card (for support students)',
        'Answer grid slide for whole-class review',
      ],
    },
    mainActivities: [
      {
        title: 'Tabloid, Broadsheet, and Online Media -- Linguistic Features Explained',
        duration: '25 minutes',
        instructions:
          'Teacher delivers a structured explanation of the linguistic features of each media type. Tabloid language: short, punchy sentences; strong declarative headlines with emotive vocabulary ("FURY," "SLAMS," "SHOCK"); Anglo-Saxon monosyllabic lexis; direct address to the reader ("YOU"); second-person imperatives; high density of proper nouns and celebrity references; sensationalist framing; tabloid puns and wordplay; abbreviated names and nicknames. Broadsheet language: more complex syntax; passive constructions and nominalisations to maintain objectivity; longer sentences; abstract noun phrases; hedging language and attribution ("alleged," "sources suggest"); formal register maintained throughout. Online media: hybrid features combining written and spoken language; brevity driven by screen format and attention economy; hyperlinks creating non-linear discourse structure; multimodal integration (image, video, text); reader comments creating polyphony; social media posts blurring producer/consumer boundaries. Students take notes using a three-column frame. Pair-check after each section.',
        differentiation: {
          support:
            'Provide a partially completed three-column frame with the main categories for each media type already labelled; students add definitions and examples.',
          core: 'Students take full notes and provide their own examples for each feature.',
          stretch:
            'Students evaluate which framework (discourse, pragmatics, or lexis/semantics) is most productive for analysing media language and justify their choice with reference to specific features.',
        },
        resources: [
          'Three-column note frame handout',
          'PowerPoint with annotated examples from each media type',
          'Media language metalanguage glossary',
        ],
      },
      {
        title: 'Parallel Text Analysis -- Same Story, Full Analysis',
        duration: '30 minutes',
        instructions:
          'Distribute a handout with two full articles covering the same news story: one from a tabloid and one from a broadsheet (approximately 200 words each). Students complete a systematic analysis of both texts in three stages. Stage 1 -- lexis and semantics (8 minutes): identify and comment on five significant lexical choices in each text, focusing on connotation, semantic field, and register. Stage 2 -- grammar and discourse (8 minutes): analyse sentence structure, verb choices, and the overall discourse organisation of each text (headline, lead paragraph, body, conclusion). Stage 3 -- pragmatics (8 minutes): consider what is implied rather than stated in each article, and how each text constructs its implied reader (the audience position embedded in the text). Students write a 150-word evaluative paragraph: which article is more linguistically effective at achieving its communicative purpose, and why? Pairs share their paragraphs; three are read to the class.',
        differentiation: {
          support:
            'Provide a structured analysis frame with specific line numbers and prompts: "Look at the headline -- what single word creates the strongest connotation? Why might the tabloid writer have chosen this word rather than a neutral alternative?"',
          core: 'Students complete the three-stage analysis independently.',
          stretch:
            'Students identify the ideological position implied by each article\'s linguistic choices and evaluate whether "objectivity" in broadsheet journalism is itself a linguistic construction rather than a genuine absence of bias.',
        },
        resources: [
          'Parallel article handout',
          'Structured analysis frame (for support students)',
          'Implied reader / audience position concept card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Media Language in 140 Characters',
      duration: '13 minutes',
      instructions:
        'Students are given a broadsheet-style news summary (sixty words, formal register, complex syntax). They have five minutes to rewrite it in three formats: (1) a tabloid headline and opening sentence, (2) a tweet (under 140 characters), (3) a two-sentence summary for a news app push notification. Students then compare their rewrites with a partner and identify the specific linguistic transformations they made for each format. Teacher draws out the key principle: media language is always shaped by format, platform, audience, and purpose.',
      differentiation: {
        support:
          'Provide one partially completed rewrite (the tabloid version) as a model before students attempt the tweet and notification independently.',
        core: 'Students complete all three rewrites independently.',
        stretch:
          'Students reflect on whether these three formats are equally capable of conveying complexity and nuance, and consider what is lost when broadsheet language is compressed into social media formats.',
      },
    },
    homework:
      'Choose a news story that was covered in at least one tabloid and one broadsheet on the same day. Write a 250-word parallel analysis comparing the linguistic choices made in each article, using frameworks from today\'s lesson. Include at least two specific quotations from each article. Bring the articles and your analysis to the next lesson.',
    worksheetQuestions: [
      {
        question: 'Identify and explain three linguistic features that are typically associated with tabloid newspaper language.',
        lines: 6,
        modelAnswer:
          'First, emotive and sensationalist lexis: tabloids use words with strong affective connotations ("fury," "slams," "shock") to generate emotional engagement and sell papers. Second, short declarative sentences and punchy monosyllabic headlines: brevity creates impact and accessibility for a mass audience. Third, direct address and personal pronouns: the use of "you" and "your" constructs a close relationship between newspaper and reader, creating the impression of personal relevance.',
        marks: 4,
      },
      {
        question: 'What is nominalisation and why is it associated with broadsheet journalism?',
        lines: 5,
        modelAnswer:
          'Nominalisation is the process of converting a verb or adjective into a noun form -- for example, "investigate" becomes "investigation," "decide" becomes "decision." Broadsheet journalism uses nominalisation because it creates an abstract, impersonal tone associated with objectivity and authority; it also allows complex processes to be expressed concisely. However, nominalisation can also obscure agency -- "a decision was reached" conceals who decided -- which critics argue serves ideological functions.',
        marks: 3,
      },
      {
        question: 'Explain two ways in which online media differs linguistically from print media.',
        lines: 5,
        modelAnswer:
          'First, online media combines features of spoken and written language (a hybrid genre): informal vocabulary, contractions, and interactive comments sections introduce spoken informality into a written medium. Second, online media uses hyperlink structure to create non-linear discourse: the reader can navigate between linked texts, disrupting the linear, author-controlled discourse structure of print articles. This gives the reader more agency but also fragments the reading experience.',
        marks: 4,
      },
      {
        question: 'Analyse the following tabloid headline for linguistic features: "FURY AS PM SNUBS WAR HEROES."',
        lines: 6,
        modelAnswer:
          'Lexis: "FURY" is capitalised and placed in the prominent subject position, immediately foregrounding extreme emotional response; its connotations of righteous anger position the reader alongside the "furious" public. "SNUBS" is an informal, punchy verb with connotations of deliberate disrespect and social slight, making the PM\'s action seem both personal and contemptuous. "WAR HEROES" is an emotive noun phrase that invokes national pride and sacrifice, making the snub morally indefensible. Grammar: the headline uses an embedded clause structure ("AS PM SNUBS") that packages a complex implied narrative -- a cause-and-effect relationship -- in five words. Discourse: the presentation of "fury" as the subject elides who exactly is angry, suggesting that fury is universal and inevitable.',
        marks: 5,
      },
      {
        question:
          'Evaluate the view that tabloid language is inherently manipulative and therefore inferior to broadsheet language. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will challenge the premise by problematising both "manipulative" and "inferior." All language is rhetorically constructed: broadsheet language uses nominalisation, passive voice, and hedging to construct an appearance of objectivity that is itself a form of rhetorical construction. The choice of which stories to report, which sources to quote, and which adjectives to use reflects ideological positioning in both tabloid and broadsheet. The response should note that tabloid language serves a legitimate communicative purpose: accessibility, engagement, and relevance to a mass readership. Functional stylistics would evaluate language by its effectiveness at achieving its purpose, not by comparison with a prestige norm. The best responses will consider the social dimension: framing tabloid language as "inferior" often reflects class-based assumptions about readership and can be seen as a form of linguistic elitism parallel to prescriptivism.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'Use real, recent articles rather than constructed examples wherever possible; the authenticity significantly increases student engagement.',
      'The parallel analysis task benefits from articles that have genuine differences in tone and framing rather than simply lexical variation; crime stories or political stories tend to generate the richest contrasts.',
      'The online media section can be illustrated effectively with a brief comparison of the same story presented on a newspaper website versus a Twitter thread versus a news app notification.',
      'Students sometimes conflate tabloid with "bad journalism" -- challenge this by asking them to consider what functions tabloid language effectively serves for its intended audience.',
    ],
    targetedSkills: [
      'AO1 -- Applying media language metalanguage accurately',
      'AO2 -- Demonstrating knowledge of media genre and discourse conventions',
      'AO3 -- Analysing language in its media and social context',
      'Parallel text comparison and evaluative writing',
      'Critical evaluation of ideology and audience in media language',
    ],
  },

  // -- Lesson 8: Analysing Spoken Language Data --------------------------------
  {
    id: 'y12u1-08',
    title: 'Analysing Spoken Language Data -- Transcription and Conversation Analysis',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand and apply a standard transcription system for representing spoken language',
      'Apply conversation analysis (CA) concepts including turn-taking, adjacency pairs, and repair',
      'Analyse transcripts for features of spoken language not found in written texts',
      'Write an analytical response to spoken language data using appropriate frameworks and metalanguage',
    ],
    successCriteria: [
      'I can read and produce a basic transcript using standard CA conventions',
      'I can identify and explain adjacency pairs, turn-taking mechanisms, and repair sequences in a transcript',
      'I can explain the difference between planned and unplanned speech with reference to specific features',
      'I can write a full analytical paragraph about spoken language data, using evidence from the transcript',
    ],
    keywords: [
      'transcription',
      'turn-taking',
      'adjacency pair',
      'repair',
      'overlap',
      'false start',
      'filler',
      'hedging',
      'back-channel',
      'prosody',
      'deixis',
      'planned speech',
    ],
    starterActivity: {
      title: 'Transcript Decoding Challenge',
      duration: '10 minutes',
      instructions:
        'Display a short extract from an academic transcription (approximately ten lines) using full CA conventions including overlaps in square brackets, pauses in brackets with numbers, latching symbols, rising intonation markers, and degree signs for quiet speech. Students are challenged to read the transcript aloud in pairs, attempting to recreate the spoken interaction it represents. After three minutes, play a short audio clip of the original interaction (or a teacher-read version) so students can compare their reading with the actual speech. Teacher explains the transcription key and addresses any conventions that were misread.',
      differentiation: {
        support:
          'Provide a simplified transcript key card before the task, explaining each symbol with a brief example.',
        core: 'Students decode the transcript and read aloud without additional scaffolding.',
        stretch:
          'Students consider what is lost and what is gained when spoken language is transcribed into written form, and how those choices affect analysis.',
      },
      resources: [
        'CA transcript extract (displayed and as a handout)',
        'Transcription key card',
        'Audio recording or teacher-read version of the extract',
      ],
    },
    mainActivities: [
      {
        title: 'Conversation Analysis -- Key Concepts Explained',
        duration: '28 minutes',
        instructions:
          'Teacher explains the key concepts of conversation analysis with reference to the lesson transcript. Turn-taking: Sacks, Schegloff, and Jefferson (1974) proposed that conversation is managed through a turn-taking system involving transition relevance places (TRPs) -- moments where the next speaker may take the floor. Signals of TRP include falling intonation, grammatical completion, gaze, and body language. Adjacency pairs: paired conversational turns where the first pair part (FPP) creates an expectation of a second pair part (SPP) -- e.g., question/answer, greeting/greeting, invitation/acceptance or refusal. Repair: the process by which speakers correct or modify their own or others\' speech -- self-initiated self-repair (speaker corrects themselves), other-initiated other-repair (a listener corrects the speaker). False starts, fillers (um, er, uh, you know, like), and hesitation phenomena: features of unplanned speech absent from writing; reflect real-time processing demands. Back-channels: minimal responses (mm, yeah, right) that signal continued attention without taking the floor. Prosody: rhythm, intonation, stress, and pace as meaning-making resources. Students complete a glossary frame. Pair-check after each concept.',
        differentiation: {
          support:
            'Provide a pre-completed glossary with definitions already given; students add one example from the lesson transcript for each term.',
          core: 'Students complete the glossary independently and add their own examples.',
          stretch:
            'Students evaluate which CA concept is most analytically productive for understanding the power dynamics in the lesson transcript, with specific evidence.',
        },
        resources: [
          'CA glossary frame handout',
          'CA transcript extract (used throughout the lesson)',
          'PowerPoint with annotated turn-taking example',
        ],
      },
      {
        title: 'Full Transcript Analysis Task',
        duration: '30 minutes',
        instructions:
          'Distribute a new, longer transcript (approximately thirty-five lines) of an authentic or realistic spoken interaction -- for example, a radio phone-in, a semi-formal interview, or a mixed-group informal conversation. Students complete an independent analysis addressing three analytical questions: (1) Identify and comment on three turn-taking features, explaining what they reveal about the relationship and relative power of the speakers. (2) Identify two adjacency pairs and explain how each functions in the interaction. (3) Identify at least two features of unplanned speech and explain what they suggest about the speaker\'s cognitive state or level of confidence. Students write their analysis in structured paragraphs, aiming for 250 words. In the final seven minutes, pairs compare analyses and assess: have they used specific evidence from the transcript? Have they moved beyond feature identification to explanation of effect?',
        differentiation: {
          support:
            'Provide line-specific prompts for each question: "For question 1, look at lines 4, 12, and 19. What happens at each of these points and why is it significant?"',
          core: 'Students select their own evidence and write independently.',
          stretch:
            'Students write an additional evaluative paragraph assessing the limitations of CA as a method -- what does it not tell us about this interaction? -- and suggest what complementary framework would provide the most useful additional insight.',
        },
        resources: [
          'Longer transcript handout',
          'Line-specific prompts (for support students)',
          'CA reference card (all key terms)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Transcribing Live Speech',
      duration: '12 minutes',
      instructions:
        'Teacher reads aloud a short spontaneous spoken passage (approximately sixty words) once at natural speed, once at reduced speed. Students attempt to transcribe it using at least three CA conventions from today\'s lesson. After both readings, teacher displays a model transcription. Students compare their transcription with the model and identify: one convention they applied correctly, one they missed, and one they would apply differently on reflection. Brief class discussion: why is transcription an act of interpretation rather than purely objective recording?',
      differentiation: {
        support:
          'Provide a partially transcribed version with the words already written and students only needing to add CA annotations (pauses, overlaps, stress marks).',
        core: 'Students produce a full transcription attempt from the teacher reading.',
        stretch:
          'Students consider what decisions the transcriber makes that could affect analysis -- e.g., how long a pause must be before it is marked, whether to represent accent features -- and discuss whether a "neutral" transcript is possible.',
      },
    },
    homework:
      'Record (with permission) two minutes of a real conversation. Produce a transcript of at least thirty lines using at least five CA conventions. Write a 150-word analysis of three features you notice in your transcript, applying concepts from today\'s lesson. Bring both transcript and analysis to the next lesson.',
    worksheetQuestions: [
      {
        question: 'What is an adjacency pair? Give one example with a first pair part and a second pair part.',
        lines: 4,
        modelAnswer:
          'An adjacency pair is a two-turn conversational sequence in which the first pair part (FPP) creates a structural expectation for a particular type of second pair part (SPP). Example: a question ("Have you finished the report?") as FPP creates the expectation of a confirmation or denial as SPP ("Yes, just sent it" or "Not yet, sorry").',
        marks: 3,
      },
      {
        question: 'Explain the difference between self-initiated self-repair and other-initiated other-repair.',
        lines: 5,
        modelAnswer:
          'Self-initiated self-repair occurs when a speaker recognises and corrects their own error or reformulation without prompting from another participant -- for example, a false start: "I went -- we went to the cinema last night." Other-initiated other-repair occurs when a different speaker signals that a correction is needed and provides it -- for example, responding to "He\'s from London, right?" with "Actually, Manchester." Other-initiated other-repair is a more face-threatening act because it explicitly corrects the first speaker\'s claim.',
        marks: 4,
      },
      {
        question: 'List three features of unplanned speech that are typically absent from formal written English.',
        lines: 4,
        modelAnswer:
          'Fillers and hesitation phenomena (um, er, like, you know), which reflect real-time processing demands and are edited out of written language; false starts, where the speaker begins a syntactic structure and abandons it mid-utterance; and back-channels (mm, yeah, right), which are listener responses that belong to the spoken interaction but have no direct written equivalent.',
        marks: 3,
      },
      {
        question: 'Analyse the following transcript extract for conversation analysis features: "A: so what did you -- [think B: [I mean I wasn\'t really] -- A: yeah no exactly."',
        lines: 8,
        modelAnswer:
          'Overlap: square brackets indicate simultaneous speech -- B begins speaking before A completes, suggesting a competitive or engaged conversational style where minimal listening-time for the transition relevance place (TRP) is tolerated. False start by A: "what did you --" is abandoned mid-clause, suggesting either a topic reorientation or deference to B\'s interruption; the dash indicates the self-interruption. Back-channel from A ("yeah no exactly"): A\'s response functions as an affirming back-channel, signalling alignment with B\'s view even before hearing it fully; the pragmatic meaning implies agreement and encourages B to continue. The interaction suggests a conversation with relatively equal power dynamics and a cooperative style.',
        marks: 5,
      },
      {
        question:
          'Evaluate the usefulness of conversation analysis as a method for studying spoken language. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will identify the genuine strengths of CA: it takes spoken language seriously on its own terms (not as degraded writing); it provides rigorous empirical tools for analysing interaction (turn-taking, adjacency pairs, repair); it has generated major insights into how conversation is organised across cultures. Weaknesses should be acknowledged: CA in its classic form brackets out context, avoiding psychological states and social structures that clearly shape interaction; the transcription process is itself interpretive and theory-laden; CA is better at describing local conversational organisation than at explaining why conversations take the forms they do. The response should compare CA with alternative approaches: interactional sociolinguistics (Gumperz) brings context back in; critical discourse analysis (Fairclough) analyses power relations that CA tends to bracket. The best responses will conclude that CA is highly productive when combined with contextual frameworks, but that its methodological purity can become a limitation when broader social patterns are the object of inquiry.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'Transcription conventions vary between research traditions; make clear which system the students are expected to use in the exam (Edexcel IAL uses a simplified convention set) and model it consistently throughout the lesson.',
      'The live transcription task in the plenary is highly effective at demonstrating that transcription involves interpretive decisions; it also gives students a practical skill for the homework.',
      'Students often find it easier to identify features than to explain their significance; model the move from identification to analysis explicitly: "This is a false start. This is significant because it suggests that..."',
      'The longer transcript for the main analysis task should be chosen to allow genuine CA-relevant features -- avoid transcripts that are too neat or too monologic.',
    ],
    targetedSkills: [
      'AO1 -- Applying CA metalanguage and transcription conventions accurately',
      'AO2 -- Demonstrating knowledge of Sacks, Schegloff, and Jefferson\'s CA framework',
      'AO3 -- Analysing spoken language in its interactional and social context',
      'Close reading of transcript data with evidence-based analysis',
      'Evaluating the methodological limitations of transcription as a research tool',
    ],
  },

  // -- Lesson 9: Analysing Written Language Data --------------------------------
  {
    id: 'y12u1-09',
    title: 'Analysing Written Language Data -- Applying Frameworks to Texts',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Apply all five linguistic frameworks (phonology, lexis, grammar, discourse, pragmatics) to written texts',
      'Distinguish between different written text types and their associated linguistic conventions',
      'Construct a well-organised, evidence-based analytical response to unseen written language data',
      'Evaluate the effectiveness of different analytical approaches for different text types',
    ],
    successCriteria: [
      'I can annotate a written text systematically using all five frameworks',
      'I can identify the genre conventions of at least three different written text types',
      'I can write a full analytical response that moves beyond feature-spotting to explanation of effect',
      'I can select the most analytically productive features from a text rather than listing everything I notice',
    ],
    keywords: [
      'genre',
      'conventions',
      'graphology',
      'lexical density',
      'cohesion',
      'coherence',
      'intertextuality',
      'implied reader',
      'foregrounding',
      'deixis',
      'modality',
      'clause structure',
    ],
    starterActivity: {
      title: 'Genre Identification Speed Round',
      duration: '10 minutes',
      instructions:
        'Display eight short text extracts in rapid succession (ten to fifteen seconds each), each from a different written genre: a legal contract, a personal letter, a recipe, a news article, a product label, a charity appeal, a literary novel, an instruction manual. Students write the genre name and one linguistic feature that gave it away on a mini-whiteboard. After all eight are shown, teacher reviews and introduces the concept of genre conventions: the shared linguistic features that define a genre and signal it to the reader. Discuss: how do we recognise genre so quickly, and what happens when genre conventions are violated?',
      differentiation: {
        support:
          'Provide a genre list of eight options before the task so students only need to match the extract to the genre rather than recall the genre label independently.',
        core: 'Students identify genre and linguistic feature independently.',
        stretch:
          'Students consider what the violation of genre conventions (e.g., a legal document written in the style of a recipe) achieves -- comic effect, critical commentary, genre-bending -- and think of real examples.',
      },
      resources: [
        'Eight genre extract slides',
        'Genre options list (for support students)',
        'Mini-whiteboards or response cards',
      ],
    },
    mainActivities: [
      {
        title: 'Framework Application -- Modelled Analysis',
        duration: '25 minutes',
        instructions:
          'Teacher selects an unseen written text (a charity appeal letter of approximately 180 words) and models a complete analytical response in real time, thinking aloud as each framework is applied. Phonology/graphology: bold text, italics, paragraph structure, use of white space -- what effects do these create? Lexis and semantics: semantic field of suffering/hope, emotive vocabulary, first- and second-person pronouns, imperative verb forms. Grammar: sentence lengths and types (declarative, imperative, interrogative), verb tense and modality ("you could save a life"), subordination and coordination. Discourse: text structure (problem, evidence, solution, appeal), cohesive devices (repetition, anaphoric reference, discourse connectors), implied reader position. Pragmatics: speech acts (appeal = directive), presupposition, implicature. Teacher writes a 150-word analytical paragraph in real time, demonstrating: how to open with a claim, how to embed evidence as quotation, how to explain the effect, and how to link back to purpose and context. Students copy the paragraph and annotate it with the moves they observe.',
        differentiation: {
          support:
            'Provide an annotated model paragraph with the claim, evidence, and explanation moves highlighted in three different colours before the teacher starts modelling.',
          core: 'Students copy and annotate the paragraph as the teacher models, identifying the structural moves independently.',
          stretch:
            'Students evaluate the modelled paragraph and suggest one alternative analytical point that could have been made, explaining why it would add value.',
        },
        resources: [
          'Charity appeal letter handout',
          'Annotated model paragraph frame (for support students)',
          'Framework application checklist',
        ],
      },
      {
        title: 'Independent Written Analysis Task',
        duration: '33 minutes',
        instructions:
          'Distribute a new unseen text (a travel brochure or product advertisement of approximately 200 words -- a different genre from the charity appeal to ensure transfer of skills). Students work independently through three stages. Stage 1 -- annotation (10 minutes): annotate the text systematically using all five frameworks, using colour-coding or marginal labelling. Stage 2 -- selection (5 minutes): choose the five most analytically productive features from their annotation -- features that reveal something interesting about purpose, audience, or effect -- and rank them in order of significance. Stage 3 -- writing (18 minutes): write a 250-word analytical response to the question: "Analyse how language is used in this text to achieve its purpose." The response must include at least one paragraph for three different frameworks. Teacher circulates and provides targeted oral feedback during the writing stage.',
        differentiation: {
          support:
            'Provide a structured writing frame with paragraph starters for three frameworks: "Looking at the lexis of the text..." / "In terms of grammar and syntax..." / "From a discourse perspective..."',
          core: 'Students write independently without a frame, selecting their own structural approach.',
          stretch:
            'Students write an evaluative final paragraph assessing which single framework generated the most significant analytical insight for this particular text and why.',
        },
        resources: [
          'Unseen text handout (travel brochure or advertisement)',
          'Structured writing frame (for support students)',
          'Analytical response mark scheme extract (AO1, AO2, AO3)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Peer Marking and Feedback',
      duration: '12 minutes',
      instructions:
        'Students swap their analytical response with a partner. Using a simplified mark scheme (displayed on screen), partners annotate the response, identifying: one strength in feature identification, one strength in explanation of effect, one place where the analysis remains at feature-spotting level and could be developed, and one piece of missing metalanguage that would strengthen the response. Students write a two-sentence mark-scheme-style comment at the bottom of their partner\'s response. Partners return the work and have three minutes to read the feedback and revise one paragraph in response.',
      differentiation: {
        support:
          'Provide a sentence-frame for the feedback comment: "This response effectively [strength] because [reason]. To improve, the writer could [specific action]."',
        core: 'Students write feedback independently using the mark scheme criteria.',
        stretch:
          'Students rank the analytical response on a notional 1--10 scale, justify their ranking with reference to specific criteria, and identify the single most important revision that would move the response up the scale.',
      },
    },
    homework:
      'Find an unseen text of your choice (maximum 200 words) from any written genre. Produce a full analytical response of 300 words applying at least four frameworks. Ensure you include a claim, evidence, and explanation in every paragraph. Bring the original text and your response to the next lesson for further peer assessment.',
    worksheetQuestions: [
      {
        question: 'What is lexical density and why does it vary between text types?',
        lines: 5,
        modelAnswer:
          'Lexical density is the proportion of content words (nouns, main verbs, adjectives, adverbs) to total words in a text. Academic and technical writing tends to have high lexical density because information is compressed into noun phrases and content words; spoken language and informal writing tends to have low lexical density because meaning is spread across more function words, repetitions, and fillers. Genre and purpose determine what density is appropriate.',
        marks: 3,
      },
      {
        question: 'Explain what is meant by the "implied reader" of a text.',
        lines: 4,
        modelAnswer:
          'The implied reader is the type of reader presupposed and constructed by the linguistic choices in a text -- the audience position that the text invites the reader to occupy. For example, a charity appeal that uses the pronoun "you" and assumes knowledge of a particular cause implies a sympathetic, politically engaged reader. Identifying the implied reader helps analysts understand the ideological assumptions embedded in a text.',
        marks: 3,
      },
      {
        question: 'What is cohesion? Give two examples of cohesive devices from different categories.',
        lines: 5,
        modelAnswer:
          'Cohesion refers to the linguistic devices that connect sentences and clauses, creating a sense of unity and connectedness within a text. Two examples from different categories: lexical cohesion -- the use of synonyms or related words across a text to maintain a semantic field (e.g., "disaster," "crisis," "catastrophe" across a news article); grammatical cohesion -- anaphoric reference, where a pronoun refers back to a preceding noun (e.g., "The minister gave a speech. She argued that..."), creating continuity without repetition.',
        marks: 4,
      },
      {
        question: 'Analyse the following text extract using three frameworks: "Don\'t let your family down. For just a pound a day, you could give a child a future. Give today."',
        lines: 8,
        modelAnswer:
          'Pragmatics: the three sentences function as a series of directive speech acts (commands/requests), escalating in directness -- "Don\'t let" (threat to negative face), "you could give" (hedged suggestion, preserving autonomy), "Give today" (bare imperative, maximally direct). Lexis: the semantic field of family and duty ("family," "child," "future") creates an ethical obligation; "just" minimises the financial ask while maximising the contrast with the presented consequence; "future" carries expansive positive connotations positioning donation as transformative. Grammar: the bare imperatives ("Don\'t," "Give") and the modal construction "you could" create a rhythm between compulsion and invitation; the second-person pronoun "you" throughout personalises the appeal and makes refusal feel individual rather than systemic.',
        marks: 5,
      },
      {
        question:
          'Evaluate the view that linguistic analysis of written texts always involves the analyst\'s own subjectivity. (10 marks)',
        lines: 20,
        modelAnswer:
          'A strong response will acknowledge the dimension of analyst subjectivity: the choice of which features to select for analysis, what framework to apply, and what significance to attribute to a feature all involve interpretive decisions. Different analysts may produce different analyses of the same text; this is well-documented in stylistics. However, a strong response will also argue for the constraints on subjectivity: linguistic frameworks (phonology, grammar, discourse) provide systematic, replicable tools for analysis; metalanguage creates shared standards for description; the features of a text are real and observable even if their significance is interpreted. The response should consider the role of context and purpose: an analyst who knows the text\'s production context will make different interpretive choices from one who does not; this is not pure subjectivity but contextually grounded interpretation. The best responses will conclude that analysis involves both systematic description and informed interpretation, and that the goal is not to eliminate subjectivity but to make it explicit and accountable.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'The modelled analysis is one of the most valuable elements of this lesson; invest sufficient time in the think-aloud and make the reasoning process as transparent as possible.',
      'Students at this stage tend to list features without explaining their significance; the selection stage (choosing the five most analytically productive features) is designed to force prioritisation and evaluative thinking.',
      'Peer marking works best when students have internalised the mark scheme criteria; display the simplified criteria throughout the plenary and draw explicit links between the feedback activity and the criteria.',
      'Vary the text types used in this lesson from those used in previous lessons to ensure students are practising transferable analytical skills rather than genre-specific responses.',
    ],
    targetedSkills: [
      'AO1 -- Applying all five frameworks systematically to written texts',
      'AO2 -- Demonstrating knowledge of written genre conventions',
      'AO3 -- Analysing written language in its social and communicative context',
      'Structured analytical writing with claim, evidence, and explanation',
      'Peer assessment and critical evaluation of analytical responses',
    ],
  },

  // -- Lesson 10: Exam Preparation ---------------------------------------------
  {
    id: 'y12u1-10',
    title: 'Exam Preparation -- WEN01 Full Question Practice',
    text: 'IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand the structure and assessment objectives of the WEN01 examination paper',
      'Apply the marking criteria for WEN01 to a sample response and calibrate expectations',
      'Complete a timed analysis question under exam conditions using all frameworks studied in the unit',
      'Identify personal areas of strength and development through self-assessment against mark scheme criteria',
    ],
    successCriteria: [
      'I can describe the structure of WEN01, including the number of questions and the time allocation',
      'I can identify the features of a Band 3 and a Band 4 response using the WEN01 mark scheme',
      'I can write a timed analytical response that applies at least three frameworks to unseen data',
      'I can self-assess my response against the mark scheme and identify two specific targets for improvement',
    ],
    keywords: [
      'assessment objective',
      'AO1',
      'AO2',
      'AO3',
      'mark scheme',
      'band descriptor',
      'unseen data',
      'timed writing',
      'analytical paragraph',
      'framework',
      'evidence',
      'evaluation',
    ],
    starterActivity: {
      title: 'What Does WEN01 Look Like? Exam Paper Deconstruction',
      duration: '12 minutes',
      instructions:
        'Distribute a copy of the WEN01 exam paper structure guide (teacher-produced or from the Edexcel specification). Students work in pairs to answer six questions about the paper: How many sections are there? How many marks is each question worth? Which assessment objectives are tested in each section? How long is the paper? How should time be allocated across questions? What types of data (spoken/written) might appear? Pairs share their answers; teacher reviews and corrects any misunderstandings. Emphasise: the exam rewards systematic, framework-led analysis with well-selected evidence and explanation of effect, not a list of features.',
      differentiation: {
        support:
          'Provide the six answers in scrambled form so students are matching rather than independently recalling.',
        core: 'Students answer the six questions using the paper structure guide.',
        stretch:
          'Students consider the implications of the mark allocation for time management: if a 20-mark question is worth twice a 10-mark question, how should they proportionally allocate their time?',
      },
      resources: [
        'WEN01 paper structure guide handout',
        'Scrambled answer sheet (for support students)',
        'Edexcel IAL specification AO summary',
      ],
    },
    mainActivities: [
      {
        title: 'Mark Scheme Calibration -- Evaluating Sample Responses',
        duration: '25 minutes',
        instructions:
          'Distribute two sample student responses to the same WEN01-style question (one weak, one strong). Students read both responses and independently: (a) identify which band they would place each response in (Band 1--4), (b) write two bullet points explaining why each response merits that band, (c) identify the single most important change that would move the weaker response up by one band. After fifteen minutes, teacher reveals the "official" band allocation and reasoning, drawing out the key distinctions between bands: Band 1 (feature identification only); Band 2 (some comment on effect, inconsistent metalanguage); Band 3 (consistent metalanguage, some contextualisation); Band 4 (perceptive analysis, secure metalanguage, consistent contextualisation, evaluative writing). Class discussion: what does "perceptive" mean in practice? What does "contextualisation" mean in a language analysis essay?',
        differentiation: {
          support:
            'Provide a simplified band descriptor card with three or four bullet points per band, using plain language alongside the official wording.',
          core: 'Students engage with the full mark scheme language independently.',
          stretch:
            'Students write a one-paragraph critique of the mark scheme, evaluating whether it adequately rewards all the analytical approaches they have learned in the unit.',
        },
        resources: [
          'Two sample student response handouts',
          'WEN01 mark scheme extract (Band 1--4 descriptors)',
          'Simplified band descriptor card (for support students)',
        ],
      },
      {
        title: 'Timed Exam Practice -- Full Question Under Exam Conditions',
        duration: '38 minutes',
        instructions:
          'Students complete a full timed exam-style question under near-exam conditions. Distribute the question and data pack (an unseen text or transcript of approximately 200 words). Students are given 35 minutes to read, annotate (5 minutes), and write a full analytical response (30 minutes). Silence is maintained throughout. After 35 minutes, students swap with a partner. Partners spend 3 minutes annotating the response with one tick for every piece of well-embedded evidence, one circle for every unsupported feature identification, and one star for every evaluative comment. Students retrieve their own work and spend the final 5 minutes writing a self-assessment: which band do they think they achieved and what are their two main targets?',
        differentiation: {
          support:
            'Provide a planning frame to complete during the first five minutes: a grid with one row per framework, prompting students to select one feature and one quotation before writing.',
          core: 'Students annotate and write independently without additional scaffolding.',
          stretch:
            'Students aim to include an evaluative conclusion that considers which single analytical insight they found most revealing about the text\'s purpose and context.',
        },
        resources: [
          'Timed question and data pack handout',
          'Planning frame (for support students)',
          'Mark scheme for peer annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Target Setting and Unit Review',
      duration: '15 minutes',
      instructions:
        'Teacher leads a brief review of the unit\'s key content: the five frameworks, the social context topics (identity, gender, occupation, age, ethnicity, media), spoken and written analysis skills, and exam technique. Students complete a personal unit review grid, rating themselves 1--4 on eight skills (framework knowledge, metalanguage accuracy, spoken analysis, written analysis, application of theory, evaluation of theory, exam timing, self-assessment accuracy). Students identify their top two targets for independent revision before the exam. Teacher collects the grids to inform planning for any follow-up revision lessons. Final message: consolidate framework knowledge, practise selecting the most productive features rather than listing all features, and always explain the effect -- not just the label.',
      differentiation: {
        support:
          'Provide a revision checklist for each topic area studied in the unit, with three bullet points per topic, so students have a clear and concrete starting point for independent revision.',
        core: 'Students complete the self-rating grid and write their targets independently.',
        stretch:
          'Students write a 100-word "examiner\'s advice" paragraph addressed to a hypothetical future student about the three most important habits for success in WEN01.',
      },
    },
    homework:
      'Using the self-assessment targets you identified today, produce a revision resource for your two weakest areas. This could be a mind map, a set of flashcards, a model paragraph, or a set of practice questions. Bring your revision resource to the next lesson (or to the revision session before the exam) to share with a peer.',
    worksheetQuestions: [
      {
        question: 'Describe the structure of the WEN01 exam paper, including the assessment objectives tested.',
        lines: 6,
        modelAnswer:
          'WEN01 is a 90-minute written exam assessing Unit 1 of the Edexcel IAL English Language specification. It contains questions that require students to analyse unseen spoken and/or written language data. The paper assesses AO1 (applying linguistic terminology and frameworks), AO2 (demonstrating knowledge of language theories and concepts), and AO3 (analysing language in its social and historical context). Questions are marked using a banded mark scheme; students are expected to produce analytical prose responses rather than bullet-pointed lists.',
        marks: 4,
      },
      {
        question: 'What is the difference between a Band 2 and a Band 4 response in WEN01?',
        lines: 6,
        modelAnswer:
          'A Band 2 response identifies some features of language and makes occasional comments on their effect, but uses metalanguage inconsistently or inaccurately and lacks contextualisation of the data within its social or communicative context. A Band 4 response demonstrates perceptive, well-organised analysis using secure and accurate metalanguage throughout; it consistently explains the significance and effect of linguistic features, contextualises them within relevant theories (AO2), and evaluates rather than simply lists.',
        marks: 4,
      },
      {
        question: 'Explain what "contextualisation" means in the context of a WEN01 analytical response.',
        lines: 4,
        modelAnswer:
          'Contextualisation means linking the linguistic features identified in the data to the broader social, cultural, or communicative context in which the text was produced -- for example, connecting features of a spoken transcript to theories of gender or power, or explaining features of a tabloid article with reference to its target audience and commercial purpose. A response that identifies features without connecting them to context remains at a descriptive level.',
        marks: 3,
      },
      {
        question: 'Read the following extract and write an analytical paragraph applying one framework of your choice: "As a nurse myself, I know that our patients aren\'t just cases -- they\'re people. And people deserve to be heard."',
        lines: 10,
        modelAnswer:
          'Looking at the pragmatics of this extract, the speaker deploys several strategies to establish credibility and alignment with the audience. The self-identification "as a nurse myself" is a classic face-work move, invoking professional ethos to pre-authorise the claim that follows; it positions the speaker as both expert and insider, lending weight to an otherwise potentially sentimental assertion. The pronoun shift from first-person singular ("I") to collective first-person plural ("our patients") constructs a sense of professional solidarity and invites the listener to share the speaker\'s perspective. The repetition and reformulation "they\'re not just cases -- they\'re people" uses a correction structure that heightens the emotional contrast: the lexical choice of "cases" carries clinical detachment, while "people" asserts full humanity. The final aphorism ("people deserve to be heard") functions as a presupposition -- its truth is treated as self-evident, positioning any disagreement as morally indefensible.',
        marks: 5,
      },
      {
        question:
          'Analyse the following spoken transcript for features of language that reveal the relationship between the two speakers. "A: Right so I was wondering if we could maybe go over the targets from last week? B: Mm. A: Because I felt like some of them were -- I\'m not sure, maybe a bit unrealistic? B: (1.5) Yeah, look, we set them together didn\'t we. A: Yeah, no, absolutely." (10 marks)',
        lines: 20,
        modelAnswer:
          'Strong responses will identify the power dynamics encoded throughout the transcript. Speaker A\'s hedging is extensive: "I was wondering if," "maybe," "I felt like," "I\'m not sure," and the tag-question intonation implied by "unrealistic?" all mark A as the lower-status participant who must mitigate even a mild challenge. The modal "could" softens the request, preserving B\'s negative face (autonomy). B\'s long pause (1.5 seconds) is a power move, allowing discomfort to settle before a measured but face-threatening response: "we set them together didn\'t we" is a reminder of A\'s own complicity, using a tag question not for information-seeking but for rhetorical pressure. A\'s capitulation ("Yeah, no, absolutely") deploys two contradictory minimal responses ("yeah" and "no") to convey both agreement and backtracking simultaneously -- a classic face-saving move. The interaction shows the linguistic mechanisms through which institutional power is negotiated in workplace interaction, connecting to Brown and Levinson\'s politeness theory and Goffman\'s concept of face. The best responses will evaluate the significance of what is not said -- A\'s original concern is never addressed.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'This lesson works best near the end of the teaching sequence, once all content topics have been covered; it consolidates rather than introduces.',
      'The mark-scheme calibration activity is often the most valuable element of the lesson: students who engage seriously with the band descriptors internalise the distinction between description and analysis more effectively than through any amount of instruction.',
      'The timed practice is genuinely useful even if it reveals how much revision is still needed; frame it as diagnostic rather than summative to reduce anxiety.',
      'Collect the self-assessment grids and use them to plan any remaining revision lessons -- they provide genuine formative data about the cohort\'s readiness.',
      'Ensure students leave with three concrete, actionable targets rather than a vague sense that they need to "revise everything"; specificity is the most useful outcome of an exam preparation lesson.',
    ],
    targetedSkills: [
      'AO1 -- Applying frameworks and metalanguage under timed exam conditions',
      'AO2 -- Demonstrating knowledge of theories in analytical responses',
      'AO3 -- Contextualising language data within social and communicative frameworks',
      'Exam technique: selection, planning, and structured analytical writing',
      'Self-assessment and target-setting against mark scheme criteria',
    ],
  },
];
