import type { LessonPlan } from '@/types';

// ─── Lesson 1: Victorian Society — Historical Context ────────────────────────

const lesson1: LessonPlan = {
  id: 'c19-prose-01-victorian-society',
  title: 'Victorian Society: Historical Context for 19th Century Prose',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the key social, political, and economic features of Victorian Britain (1837–1901).',
    'Explore how industrialisation, empire, and class division shaped 19th century literature.',
    'Identify connections between Victorian contextual factors and the themes of 19th century prose texts.',
  ],
  successCriteria: [
    'I can explain at least three features of Victorian society and connect each to a literary theme.',
    'I can describe how industrialisation and urbanisation affected daily life in Britain.',
    'I can use contextual knowledge to make inferences about a writer\'s purpose.',
    'I can use terminology such as "social hierarchy", "patriarchy", and "philanthropy" accurately.',
  ],
  keywords: [
    'industrialisation', 'social hierarchy', 'patriarchy', 'philanthropy',
    'urbanisation', 'empire', 'workhouse', 'reform',
  ],
  starterActivity: {
    title: 'Then vs Now: Spot the Difference',
    duration: '8 minutes',
    instructions:
      'Display two sets of statements — one describing modern Britain, one describing Victorian Britain — but do not label them. Students work in pairs to sort the statements into "Victorian" and "Modern" categories. Statements include: "Children as young as five worked in factories", "Women could not vote or own property after marriage", "Over 30% of the population lived in poverty". Reveal answers and discuss: which facts surprised them most, and why might writers want to draw attention to these issues?',
    differentiation: {
      support: 'Provide a word bank of key terms (industrialisation, workhouse, suffrage) to assist discussion.',
      core: 'Students sort independently and justify each choice with reasoning.',
      stretch: 'Students predict which social issues would be most likely to appear in fiction and explain why writers might choose fiction over non-fiction to address them.',
    },
    resources: ['Statement sorting cards', 'Key terms word bank (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Victorian Context Knowledge Stations',
      duration: '20 minutes',
      instructions:
        'Set up five stations around the room: (1) Industrialisation and Factory Life, (2) Class and Social Hierarchy, (3) Gender Roles and the Domestic Sphere, (4) The British Empire, (5) Poverty, Philanthropy, and Reform. Each station includes an information card with key facts and a quotation from a period source. Students rotate every four minutes, completing a context grid with columns for "Key Facts", "Impact on People", and "Possible Literary Themes". After all rotations, teacher consolidates key points: Victorian writers often used prose to expose social injustice and challenge their readers\' assumptions.',
      differentiation: {
        support: 'Provide a partially completed grid with sentence starters for each station.',
        core: 'Students complete the grid independently and identify at least one literary theme per station.',
        stretch: 'Students evaluate which contextual factor had the most significant influence on Victorian literature, writing a justified paragraph.',
      },
      resources: ['Station information cards (x5)', 'Context grid worksheet', 'Timer for rotations'],
    },
    {
      title: 'Connecting Context to Text: Extract Analysis',
      duration: '20 minutes',
      instructions:
        'Provide students with the following original extract written in period-appropriate style:\n\n"The lane was narrow and ill-lit, and on either side the houses leaned together as though weary of standing. From behind their blackened walls came the ceaseless clatter of looms, for even the children laboured here from dawn until long past the setting of the sun. Mr Hartley, the mill-owner, passed through this quarter but seldom; when he did, he drew his coat more tightly about him and hastened his step, as though poverty were a contagion he might contract from the very air."\n\nStudents annotate the extract, identifying: (a) evidence of social hierarchy, (b) evidence of industrialisation, (c) the writer\'s attitude towards the characters. They then write a paragraph explaining how the writer uses this description to criticise Victorian society, using PEE (Point, Evidence, Explanation) structure.',
      differentiation: {
        support: 'Provide colour-coded annotation prompts and a PEE paragraph frame with sentence starters.',
        core: 'Students annotate independently and produce a full PEE paragraph.',
        stretch: 'Students write a second paragraph analysing the writer\'s use of language (e.g., personification of the houses, metaphor of poverty as "contagion") and its effect on the reader.',
      },
      resources: ['Extract handout', 'Annotation guide', 'PEE paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Context Connection',
    duration: '7 minutes',
    instructions:
      'Students complete an exit ticket answering: "Choose one feature of Victorian society. Explain how a writer might use prose fiction to challenge or expose this issue." Collect responses to inform groupings for future lessons.',
    differentiation: {
      support: 'Sentence starter provided: "A Victorian writer might use fiction to criticise... because..."',
      core: 'Full written response expected with a specific contextual link.',
      stretch: 'Students explain why prose fiction was a particularly effective vehicle for social criticism in the 19th century, considering literacy rates and serialisation.',
    },
  },
  homework:
    'Research one Victorian social reformer (e.g., Lord Shaftesbury, Elizabeth Fry, Josephine Butler) and write a paragraph explaining what they campaigned for and how their cause might appear as a theme in 19th century fiction.',
  worksheetQuestions: [
    {
      question: 'Explain three key features of Victorian society that influenced 19th century prose writing.',
      lines: 6,
      modelAnswer:
        'Three key features of Victorian society include: (1) Industrialisation — the rapid growth of factories and mills transformed Britain from a rural to an urban society, creating terrible working conditions that writers exposed in their fiction. (2) Social hierarchy — Victorian society was rigidly divided by class, with vast inequality between the wealthy and the poor; writers used characters from different classes to highlight injustice. (3) Patriarchy — women had limited legal rights and were expected to remain in the domestic sphere; writers such as the Bront\u00eb sisters challenged these expectations through their female characters.',
      marks: 6,
    },
    {
      question: 'How might a 19th century writer use a wealthy character\'s reaction to poverty to criticise Victorian society?',
      lines: 5,
      modelAnswer:
        'A writer might present a wealthy character who is indifferent to or disgusted by poverty in order to criticise the callousness of the upper classes. By showing the character turning away, rushing past, or blaming the poor for their own suffering, the writer invites the reader to judge that character negatively. This technique encourages the reader to reflect on their own attitudes and recognise the injustice of a system that allows such extremes of wealth and poverty to coexist.',
      marks: 4,
    },
    {
      question: 'What is meant by the term "social hierarchy" in the context of Victorian Britain?',
      lines: 4,
      modelAnswer:
        'Social hierarchy refers to the rigid class system in Victorian Britain, where people were ranked according to their birth, wealth, and occupation. At the top were the aristocracy and gentry, followed by the growing middle class of industrialists and professionals, then the working class, and at the bottom the destitute poor. Movement between classes was difficult, and a person\'s position in the hierarchy determined their opportunities, rights, and how they were treated by others.',
      marks: 3,
    },
    {
      question: 'Why did many 19th century writers use fiction rather than non-fiction to address social issues?',
      lines: 5,
      modelAnswer:
        'Fiction allowed writers to reach a broad audience through serialised stories in periodicals, which were widely read across classes. By creating compelling characters and narratives, writers could evoke empathy and emotional responses that factual reports might not achieve. Fiction also offered a degree of protection: a writer could criticise powerful institutions or individuals through thinly veiled fictional counterparts without risking direct legal consequences. Additionally, the novel form allowed writers to show the human impact of social issues through individual stories.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson provides foundational context for the entire 19th century prose unit. Ensure students retain their context grids for reference throughout.',
    'The original extract is designed to be representative of Victorian prose style without reproducing any copyrighted text.',
    'If time is short, reduce the carousel to three stations and provide the remaining two as homework reading.',
    'Emphasise that AO3 (context) is worth significant marks and must be woven into analysis, not treated as a separate bolt-on.',
    'Consider displaying a Victorian timeline on the classroom wall for the duration of this unit.',
  ],
  targetedSkills: [
    'AO3: Context',
    'Reading comprehension',
    'Note-taking',
    'Inference',
    'Analytical writing (PEE)',
  ],
};

// ─── Lesson 2: Reading 19th Century Language — Vocabulary and Syntax ─────────

const lesson2: LessonPlan = {
  id: 'c19-prose-02-language-vocabulary-syntax',
  title: 'Reading 19th Century Language: Vocabulary and Syntax',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Develop strategies for decoding unfamiliar vocabulary in 19th century prose.',
    'Understand how Victorian sentence structures differ from modern English.',
    'Apply contextual clues, root words, and syntax knowledge to interpret unseen extracts confidently.',
  ],
  successCriteria: [
    'I can identify and define at least five archaic or unfamiliar words using context clues.',
    'I can explain how Victorian syntax (e.g., subordinate clauses, inverted word order) differs from modern usage.',
    'I can read a 19th century extract and paraphrase its meaning accurately.',
    'I can use the term "archaic language" accurately in discussion.',
  ],
  keywords: [
    'archaic', 'syntax', 'subordinate clause', 'register',
    'etymology', 'paraphrase', 'diction', 'periodic sentence',
  ],
  starterActivity: {
    title: 'Victorian or Modern? Language Detective',
    duration: '7 minutes',
    instructions:
      'Display ten sentences on the board — five written in modern English and five in Victorian style. Students work individually to identify which are Victorian and underline the specific words or structures that gave it away. Examples: "She was possessed of a most agreeable countenance" vs "She had a really nice face." Discuss: what makes 19th century language feel different? Introduce key concepts: archaic vocabulary, complex syntax, formal register.',
    differentiation: {
      support: 'Provide a checklist of Victorian language features to look for (e.g., longer sentences, formal words, inverted word order).',
      core: 'Students identify Victorian sentences and explain their reasoning.',
      stretch: 'Students rewrite two of the Victorian sentences in modern English, then discuss what is lost or gained in translation.',
    },
    resources: ['Sentence display slide', 'Victorian language features checklist (support tier)'],
  },
  mainActivities: [
    {
      title: 'Decoding Vocabulary: Context Clues Toolkit',
      duration: '18 minutes',
      instructions:
        'Teach four strategies for decoding unfamiliar vocabulary: (1) Context clues — what do the surrounding words suggest? (2) Root words — does the word contain a Latin or Greek root you recognise? (3) Word class — is it a noun, verb, adjective? (4) Tone — does the sentence feel positive or negative? Provide the following original extract:\n\n"The countenance of the magistrate was stern and unyielding, and his manner bespoke a man long accustomed to the exercise of authority. He regarded the trembling supplicant before him with an air of weary condescension, as one might observe an insect upon a windowpane — with neither malice nor compassion, but merely the dull recognition of an inconvenience."\n\nStudents work through the extract, using the four strategies to decode: countenance, bespoke (in this usage), supplicant, condescension. They record definitions and the strategy that helped most.',
      differentiation: {
        support: 'Provide a glossary of root words (e.g., "supplicare" = to kneel/beg) and guided questions for each unfamiliar word.',
        core: 'Students apply the four strategies independently and record their process.',
        stretch: 'Students analyse the writer\'s word choices: why "supplicant" rather than "beggar"? What connotations does each word carry?',
      },
      resources: ['Vocabulary strategies poster', 'Extract handout', 'Root words glossary (support tier)'],
    },
    {
      title: 'Cracking Victorian Syntax: Sentence Surgery',
      duration: '22 minutes',
      instructions:
        'Explain that Victorian writers frequently used: (a) periodic sentences — where the main clause comes at the end, (b) embedded subordinate clauses — inserted between the subject and verb, (c) inverted word order — verb before subject. Provide the following original extract:\n\n"It was not until the last of the evening light had faded behind the distant hills, and the servants had drawn the curtains against the encroaching darkness, and the fire had been built up to a considerable blaze in the great hearth, that Lady Ashworth, having at length composed herself after the distressing intelligence she had that afternoon received, consented to speak upon the matter which had so violently disturbed her tranquillity."\n\nStudents "dissect" this sentence: (1) Underline the main clause, (2) Bracket each subordinate clause, (3) Rewrite it as two or three modern sentences. Then discuss: what effect does the original structure create? (Tension, suspense, formality, a sense of delayed revelation.)',
      differentiation: {
        support: 'Provide a colour-coded version with the main clause already highlighted and one subordinate clause bracketed.',
        core: 'Students dissect the sentence independently and produce a modern rewrite.',
        stretch: 'Students write their own periodic sentence in Victorian style on a topic of their choice, then explain the effect it creates.',
      },
      resources: ['Extract handout', 'Sentence structure guide', 'Colour-coded version (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Paraphrase Challenge',
    duration: '8 minutes',
    instructions:
      'Display one final short Victorian passage (3-4 sentences). Students have four minutes to write a modern English paraphrase. Swap with a partner and compare: did they capture the same meaning? Discuss any differences. Teacher models a strong paraphrase to close.',
    differentiation: {
      support: 'Sentence starters provided for the paraphrase: "This passage is describing..."',
      core: 'Students produce a full paraphrase independently.',
      stretch: 'Students identify what emotional tone or connotation is lost in the modern paraphrase.',
    },
  },
  homework:
    'Find an example of 19th century prose (from a library book or online archive) and write a paraphrase of one paragraph. Bring both the original and the paraphrase to the next lesson.',
  worksheetQuestions: [
    {
      question: 'Define the following words as they are used in 19th century prose: countenance, supplicant, condescension, tranquillity.',
      lines: 6,
      modelAnswer:
        'Countenance: a person\'s face or facial expression. Supplicant: a person making a humble plea or request, often from a position of powerlessness. Condescension: an attitude of patronising superiority; behaving as though one is lowering oneself to deal with someone beneath them. Tranquillity: a state of peace, calm, and quiet — both physical and emotional.',
      marks: 4,
    },
    {
      question: 'What is a periodic sentence and what effect does it create for the reader?',
      lines: 5,
      modelAnswer:
        'A periodic sentence is one in which the main clause — the part that completes the meaning — is delayed until the very end. Before it, the writer builds up subordinate clauses, descriptions, or conditions. This creates suspense and tension for the reader, who must hold all the preceding information in mind before the sentence\'s meaning is resolved. It also creates a sense of formality and literary sophistication typical of 19th century prose.',
      marks: 4,
    },
    {
      question: 'Explain two strategies you can use to work out the meaning of an unfamiliar word in a 19th century text.',
      lines: 5,
      modelAnswer:
        'One strategy is using context clues: examining the words and sentences around the unfamiliar word to infer its meaning from the situation being described. For example, if a character is described as looking at someone "with condescension", and the next clause compares this to observing "an insect", we can infer that condescension involves looking down on someone. A second strategy is identifying root words: many Victorian English words derive from Latin or Greek. Recognising that "supplicant" comes from the Latin "supplicare" (to kneel) helps us understand it means someone making a humble plea.',
      marks: 4,
    },
    {
      question: 'Rewrite the following Victorian sentence in modern English, then explain what is lost in the translation: "She was possessed of a disposition so amiable that even those who had cause to resent her found their animosity quite disarmed."',
      lines: 6,
      modelAnswer:
        'Modern version: "She was so kind and likeable that even people who had reason to dislike her couldn\'t stay angry." What is lost: the formal register and elevated diction of the original conveys a sense of refinement and social propriety. The word "possessed" suggests her kindness is an innate quality she owns, while "disposition" implies a settled temperament rather than a passing mood. "Animosity quite disarmed" uses a military metaphor suggesting her amiability is a kind of power that overcomes hostility. The modern version communicates the basic meaning but loses these layers of connotation.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson is essential for building student confidence with unseen 19th century extracts in the exam.',
    'Reassure students that they are not expected to understand every word — the strategies taught here allow them to make intelligent inferences.',
    'The extracts in this lesson are original compositions in period-appropriate style, not from published texts.',
    'Consider creating a class "Victorian Vocabulary Wall" that grows throughout the unit.',
    'Periodic sentences are a common feature in exam extracts — ensure students practise identifying the main clause.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language analysis',
    'Vocabulary development',
    'Paraphrasing',
    'Syntax analysis',
  ],
};

// ─── Lesson 3: Gothic Literature Conventions ─────────────────────────────────

const lesson3: LessonPlan = {
  id: 'c19-prose-03-gothic-conventions',
  title: 'Gothic Literature Conventions in 19th Century Prose',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and explain the key conventions of Gothic literature in 19th century prose.',
    'Analyse how writers use setting, atmosphere, and the supernatural to create fear and unease.',
    'Evaluate the purposes behind Gothic conventions, including the exploration of societal anxieties.',
  ],
  successCriteria: [
    'I can identify at least five conventions of Gothic literature and provide examples of each.',
    'I can analyse how a writer creates a Gothic atmosphere through language choices.',
    'I can link Gothic conventions to wider Victorian fears and anxieties.',
    'I can write an analytical paragraph on a Gothic extract using subject terminology.',
  ],
  keywords: [
    'Gothic', 'sublime', 'uncanny', 'transgression',
    'doppelg\u00e4nger', 'pathetic fallacy', 'the supernatural', 'atmosphere',
  ],
  starterActivity: {
    title: 'Gothic or Not? Image Sort',
    duration: '7 minutes',
    instructions:
      'Display a series of descriptive phrases on the board and ask students to categorise them as "Gothic" or "Not Gothic". Phrases include: "a crumbling castle on a cliff above a storm-lashed sea", "a sunny afternoon in a village market", "a locked door at the end of a long, dark corridor", "a child playing with a dog in a meadow". Students justify their choices. Teacher draws out key features: darkness, isolation, decay, mystery, the supernatural. Introduce the term "Gothic" as a literary genre.',
    differentiation: {
      support: 'Provide a list of Gothic features (darkness, isolation, mystery, decay, supernatural) to match against each phrase.',
      core: 'Students categorise independently and justify choices with reference to mood and atmosphere.',
      stretch: 'Students explain why certain images create unease psychologically — what is it about darkness, isolation, or decay that frightens us?',
    },
    resources: ['Descriptive phrases slide', 'Gothic features list (support tier)'],
  },
  mainActivities: [
    {
      title: 'Gothic Conventions Mapping',
      duration: '15 minutes',
      instructions:
        'Teacher delivers a concise overview of Gothic conventions: (1) isolated or decaying settings (castles, mansions, moors), (2) the supernatural or unexplained, (3) extreme emotions (terror, madness, despair), (4) transgression and forbidden knowledge, (5) damsels in distress or imprisoned characters, (6) the doppelg\u00e4nger or divided self, (7) pathetic fallacy and oppressive atmosphere, (8) secrets, mysteries, and concealment. Students create a "Gothic Conventions Map" — a visual diagram with each convention defined, an example, and a note on its purpose or effect. This becomes a reference tool for future lessons.',
      differentiation: {
        support: 'Provide a partially completed map with definitions given; students add examples and effects.',
        core: 'Students create the map independently from teacher input.',
        stretch: 'Students add a layer identifying which conventions reflect specific Victorian anxieties (e.g., the doppelg\u00e4nger and fears about hidden identity; transgression and fears about science).',
      },
      resources: ['Gothic conventions PowerPoint', 'Conventions map template', 'Coloured pens'],
    },
    {
      title: 'Gothic Extract Analysis',
      duration: '25 minutes',
      instructions:
        'Provide students with the following original Gothic extract:\n\n"The house stood at the extremity of the lane, where the road gave way to an expanse of moorland so vast and desolate that it seemed the very edge of the known world. No light burned in any window. The door, once painted a cheerful green, had long since surrendered its colour to the relentless assault of wind and rain, and hung now upon a single hinge, swaying with a low, rhythmic groan that might, to a fanciful mind, have been mistaken for the voice of some wretched creature imprisoned within. Above, the sky was a bruise — livid purple and black — and from the distant hills came the sound of thunder, though whether it was thunder or something altogether less natural, the traveller could not with any certainty determine."\n\nStudents: (1) Identify at least four Gothic conventions in the extract, (2) Select two language techniques and analyse their effect (e.g., personification of the door, metaphor of the sky as a "bruise"), (3) Write an analytical paragraph explaining how the writer creates a sense of unease, using the structure: What technique? What is the effect? What might the writer\'s purpose be?',
      differentiation: {
        support: 'Provide a conventions checklist to tick off as they find each one, plus a paragraph frame.',
        core: 'Students identify conventions and write an analytical paragraph independently.',
        stretch: 'Students evaluate which single technique is most effective in creating Gothic atmosphere and justify their choice with close textual reference. They also consider what Victorian anxiety this passage might reflect.',
      },
      resources: ['Extract handout', 'Gothic conventions checklist (support tier)', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Gothic Flash Fiction',
    duration: '8 minutes',
    instructions:
      'Students write 3-4 sentences of their own Gothic prose, using at least three conventions from the lesson. Volunteers read aloud; the class identifies which conventions were used. Teacher selects one strong example to display and discuss.',
    differentiation: {
      support: 'Provide a setting prompt (e.g., "an abandoned hospital at midnight") and a word bank of Gothic vocabulary.',
      core: 'Students write independently, choosing their own setting.',
      stretch: 'Students embed a specific Victorian anxiety into their writing (e.g., fear of scientific progress, fear of the "other").',
    },
  },
  homework:
    'Write a paragraph (100-150 words) of original Gothic prose set in a Victorian location. Annotate your own work, labelling the conventions you have used.',
  worksheetQuestions: [
    {
      question: 'List five conventions of Gothic literature and explain the purpose of each.',
      lines: 8,
      modelAnswer:
        '(1) Isolated or decaying settings (castles, mansions, moors) — these create a sense of entrapment and vulnerability, cutting characters off from help or civilisation. (2) The supernatural or unexplained — this creates fear and suggests forces beyond human control or understanding. (3) Extreme emotions (terror, madness, despair) — these heighten dramatic tension and explore the limits of human psychology. (4) The doppelg\u00e4nger or divided self — this explores anxieties about hidden identity, moral duality, and the idea that everyone conceals a darker nature. (5) Pathetic fallacy and oppressive atmosphere — the environment mirrors characters\' emotional states, reinforcing mood and foreshadowing danger.',
      marks: 5,
    },
    {
      question: 'Analyse how the writer creates a sense of unease in the extract through their description of the house and its surroundings.',
      lines: 8,
      modelAnswer:
        'The writer creates unease through several techniques. The house is personified as standing "at the extremity of the lane", suggesting isolation and the boundary between the safe and the unknown. The door is given human qualities — it has "surrendered" and emits a "groan" — which blurs the boundary between the animate and inanimate, creating an uncanny effect. The simile comparing this sound to "the voice of some wretched creature imprisoned within" introduces the possibility of something trapped inside, generating suspense and dread. The metaphor describing the sky as "a bruise — livid purple and black" connotes violence and injury, using pathetic fallacy to suggest that nature itself is wounded or threatening. Finally, the ambiguity of the closing clause — "whether it was thunder or something altogether less natural" — leaves the source of the sound unresolved, forcing the reader to confront their own fears.',
      marks: 6,
    },
    {
      question: 'Explain what is meant by the term "the uncanny" and why it was important in Gothic literature.',
      lines: 5,
      modelAnswer:
        'The uncanny refers to something that is strangely familiar yet unsettling — something that should feel ordinary but is slightly wrong or disturbing. In Gothic literature, the uncanny is important because it creates a deep psychological unease that goes beyond simple fear. Examples include a house that seems alive, a portrait whose eyes appear to follow you, or a person who looks identical to someone who has died. The uncanny was particularly powerful in Victorian Gothic because it tapped into anxieties about what lies beneath the surface of respectable society.',
      marks: 4,
    },
    {
      question: 'How might Gothic conventions reflect Victorian societal anxieties? Give two examples.',
      lines: 6,
      modelAnswer:
        'Gothic conventions often functioned as metaphors for real Victorian fears. For example, the doppelg\u00e4nger or divided self reflected anxieties about the hypocrisy of respectable society — the fear that behind every gentleman\'s polished exterior lurked a darker nature. This connected to real scandals and the rigid moral codes of the era. Similarly, the convention of transgression and forbidden knowledge reflected Victorian anxieties about rapid scientific progress, particularly developments in evolution, psychology, and medicine. The idea that science might "go too far" — creating monsters or unleashing forces beyond human control — expressed a genuine cultural tension between progress and morality.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson is foundational for students studying Jekyll and Hyde, Frankenstein, Dracula, or any Gothic set text.',
    'The extract is an original composition — no copyright issues.',
    'Consider showing brief visual stills from Gothic film adaptations (e.g., atmospheric shots of moors or decaying buildings) to support visual learners.',
    'Ensure students understand that "Gothic" is a genre label, not just a synonym for "scary" — it has specific, identifiable conventions.',
    'The flash fiction plenary works well as a diagnostic: students who struggle to apply conventions may need additional scaffolding in future lessons.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language and structure analysis',
    'AO3: Context',
    'Creative writing',
    'Subject terminology',
  ],
};

// ─── Lesson 4: Social Realism and Reform ─────────────────────────────────────

const lesson4: LessonPlan = {
  id: 'c19-prose-04-social-realism-reform',
  title: 'Social Realism and Reform in 19th Century Prose',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how 19th century writers used prose to expose social injustice and advocate for reform.',
    'Analyse how writers use emotive language, characterisation, and contrast to influence readers\' attitudes.',
    'Evaluate the effectiveness of prose fiction as a vehicle for social change.',
  ],
  successCriteria: [
    'I can explain the concept of social realism and its purpose in Victorian literature.',
    'I can identify at least three techniques writers use to evoke sympathy or outrage in the reader.',
    'I can write an analytical paragraph on how a writer uses language to criticise a social issue.',
    'I can discuss the relationship between literature and social reform in the 19th century.',
  ],
  keywords: [
    'social realism', 'didactic', 'emotive language', 'juxtaposition',
    'philanthropy', 'polemic', 'serialisation', 'reform',
  ],
  starterActivity: {
    title: 'Can a Book Change the World?',
    duration: '7 minutes',
    instructions:
      'Pose the question: "Can a novel actually change society?" Students discuss in pairs and then share ideas. Teacher introduces examples: Dickens\' campaigning journalism alongside his fiction; the impact of condition-of-England novels on public opinion; the connection between serialised fiction and growing literacy. Key point: in the 19th century, novels reached enormous audiences and genuinely influenced public attitudes towards poverty, education, and working conditions.',
    differentiation: {
      support: 'Provide two or three examples of books that influenced change for students to discuss.',
      core: 'Students generate their own examples and justify whether fiction or non-fiction is more persuasive.',
      stretch: 'Students consider counter-arguments: what are the limitations of fiction as a tool for social change?',
    },
    resources: ['Discussion prompt slide'],
  },
  mainActivities: [
    {
      title: 'Techniques of Social Realism',
      duration: '18 minutes',
      instructions:
        'Teacher introduces six key techniques used by social realist writers: (1) Emotive descriptions of suffering — appealing to the reader\'s sympathy. (2) Characterisation — creating innocent or vulnerable characters (often children) to maximise emotional impact. (3) Juxtaposition — placing wealth beside poverty to highlight inequality. (4) Direct address or narrative commentary — the narrator speaks directly to the reader, urging them to act or reflect. (5) Irony and satire — mocking those in power. (6) Realistic detail — specific, concrete descriptions that make the suffering feel real, not abstract. Students create a "Social Realism Toolkit" in their exercise books, defining each technique and noting its intended effect on the reader.',
      differentiation: {
        support: 'Provide definitions and students match techniques to effects.',
        core: 'Students define techniques and effects independently from teacher input.',
        stretch: 'Students rank the six techniques from most to least persuasive, justifying their ranking.',
      },
      resources: ['Techniques PowerPoint', 'Social Realism Toolkit template'],
    },
    {
      title: 'Extract Analysis: Poverty and Injustice',
      duration: '22 minutes',
      instructions:
        'Provide the following original extract:\n\n"The children of Morrow Court knew hunger as an old companion — faithful, persistent, and never far from the door. They rose before the sun to trudge through streets still wet with the night\'s refuse, their feet bare upon the cobblestones, their thin frames bowed beneath bundles of matchsticks or crossing-brooms. The youngest among them — a girl of perhaps six, though want had made her seem both older and smaller than her years — paused at the railings of a great house in Belgrave Square, pressing her face between the iron bars to watch a family at breakfast. Silver gleamed upon the table. A child her own age sat in a high-backed chair, turning away from a plate of eggs with an expression of petulant boredom. The girl at the railings watched for a long moment, then turned and walked on. She did not cry. She had forgotten how."\n\nStudents: (1) Identify which techniques from the toolkit are used, (2) Analyse the effect of the juxtaposition between the two children, (3) Write a PEE paragraph on how the writer uses language to evoke sympathy for the poor children and criticise inequality.',
      differentiation: {
        support: 'Teacher pre-labels two techniques in the extract; students find and analyse two more using guided questions.',
        core: 'Students identify techniques and write a PEE paragraph independently.',
        stretch: 'Students write a second paragraph evaluating the final sentence ("She had forgotten how") — why is this more powerful than describing the child crying?',
      },
      resources: ['Extract handout', 'PEE paragraph frame (support tier)', 'Social Realism Toolkit reference'],
    },
  ],
  plenaryActivity: {
    title: 'Writer\'s Intention Statement',
    duration: '8 minutes',
    instructions:
      'Students write one sentence completing: "The writer\'s intention in this extract is to make the reader feel... so that they..." Teacher takes three or four responses and discusses the link between emotional response and social action. Close by reinforcing that Victorian social realist writers saw fiction as a moral and political act.',
    differentiation: {
      support: 'Sentence frame provided with emotion words to choose from.',
      core: 'Students compose independently.',
      stretch: 'Students evaluate: is evoking emotion enough to create change, or does the writer need to propose a solution?',
    },
  },
  homework:
    'Write your own short extract (100-150 words) in the style of a Victorian social realist writer, highlighting a modern social issue (e.g., homelessness, food poverty). Use at least three techniques from the Social Realism Toolkit.',
  worksheetQuestions: [
    {
      question: 'What is social realism and why was it important in 19th century literature?',
      lines: 5,
      modelAnswer:
        'Social realism is a literary approach in which writers depict the everyday lives of ordinary people — particularly the poor and marginalised — in a realistic and often unflinching way. It was important in 19th century literature because it drew public attention to social injustices such as child labour, poverty, and inequality. By presenting these issues through compelling characters and narratives, social realist writers aimed to evoke sympathy in their readers and ultimately pressure society and government to enact reform.',
      marks: 4,
    },
    {
      question: 'Analyse the effect of the juxtaposition between the two children in the extract.',
      lines: 6,
      modelAnswer:
        'The writer juxtaposes the starving girl at the railings with the wealthy child inside the house to highlight the extreme inequality of Victorian society. The poor girl has "bare feet" and a "thin frame" and works carrying matchsticks, while the wealthy child sits in a "high-backed chair" turning away from food with "petulant boredom." The contrast is devastating because both children are the same age, yet their experiences are entirely opposite — one has too little, the other too much. The iron railings between them function as a powerful symbol of the class barrier: they can see each other, but the social system keeps them permanently separated. The writer\'s purpose is to make the reader feel outrage at a society that permits such inequality.',
      marks: 6,
    },
    {
      question: 'Why is the final sentence of the extract — "She had forgotten how" — particularly effective?',
      lines: 5,
      modelAnswer:
        'The sentence is effective because it is understated rather than dramatic. Instead of describing the child crying, the writer tells us she has gone beyond tears — her suffering has been so prolonged and so deep that she has lost the capacity for a basic human emotional response. This is more disturbing than a description of tears because it suggests that poverty has not just deprived her of material comfort but has fundamentally damaged her as a human being. The short, blunt sentence structure contrasts with the longer, descriptive sentences before it, making it land with greater impact.',
      marks: 4,
    },
    {
      question: 'Explain what is meant by the term "didactic" and give an example of how a 19th century text might be didactic.',
      lines: 4,
      modelAnswer:
        'Didactic means intended to teach or instruct, particularly in moral or ethical matters. A 19th century text might be didactic if it clearly presents a moral lesson — for example, showing that greed leads to suffering, or that compassion is rewarded. A social realist novel that depicts the misery of workhouse children is didactic because it is designed not just to entertain but to teach readers that child labour is wrong and to persuade them to support reform.',
      marks: 3,
    },
  ],
  teacherNotes: [
    'This lesson works well as a companion to the Victorian Society context lesson (Lesson 1).',
    'The extract is an original composition. Emphasise to students that the exam may use unfamiliar extracts, so practising with unseen material is valuable.',
    'The juxtaposition between the two children is a classic Victorian technique — students should be able to recognise and analyse it in exam conditions.',
    'The creative homework task helps students internalise the techniques by applying them — consider sharing strong examples next lesson.',
    'If students are studying A Christmas Carol, this lesson provides excellent contextual grounding for Dickens\' social criticism.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language analysis',
    'AO3: Context',
    'Analytical writing (PEE)',
    'Evaluative writing',
  ],
};

// ─── Lesson 5: Analysing 19th Century Extracts — Step-by-Step ────────────────

const lesson5: LessonPlan = {
  id: 'c19-prose-05-extract-analysis-method',
  title: 'Analysing 19th Century Extracts: A Step-by-Step Method',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply a structured, step-by-step method for analysing unseen 19th century prose extracts.',
    'Practise identifying writer\'s methods, including language, structure, and form.',
    'Develop the ability to write focused analytical paragraphs under timed conditions.',
  ],
  successCriteria: [
    'I can apply a four-step method (Read, React, Identify, Analyse) to an unseen extract.',
    'I can identify at least three writer\'s methods in a 19th century extract.',
    'I can write two analytical paragraphs under timed conditions.',
    'I can use subject terminology accurately, including terms such as "semantic field", "motif", and "tone".',
  ],
  keywords: [
    'semantic field', 'motif', 'tone', 'connotation',
    'writer\'s method', 'analytical paragraph', 'inference', 'evaluation',
  ],
  starterActivity: {
    title: 'What Do Examiners Actually Want?',
    duration: '7 minutes',
    instructions:
      'Display two sample exam responses to the same extract — one weak (retells the story, no analysis) and one strong (identifies techniques, analyses effects, links to context). Students identify three differences between them. Teacher consolidates: examiners reward analysis of how writers use language and structure to achieve effects, not retelling. Introduce the four-step method: (1) Read — what is happening? (2) React — how does it make you feel? (3) Identify — what techniques has the writer used? (4) Analyse — what effects do these techniques create and why?',
    differentiation: {
      support: 'Highlight the key differences between responses with colour coding.',
      core: 'Students identify differences independently.',
      stretch: 'Students rewrite one sentence from the weak response to make it analytical.',
    },
    resources: ['Sample responses display slide', 'Four-step method poster'],
  },
  mainActivities: [
    {
      title: 'Guided Extract Analysis: Modelling the Method',
      duration: '20 minutes',
      instructions:
        'Provide the following original extract:\n\n"Dr Fenwick stood at the window of his laboratory, gazing upon the city below with the peculiar satisfaction of a man who believes himself to have surpassed the boundaries of natural philosophy. The apparatus behind him hissed and shuddered — a tangle of copper piping and glass vessels, from which issued a vapour of such a vivid and unnatural green that it seemed to possess a luminosity of its own. He had laboured seven years upon this work. Seven years of solitude, of neglect, of the slow and methodical estrangement of every soul who had once called him friend. But what were friendships, what were the ordinary affections of the human heart, when set against the prospect of a discovery that would render death itself obsolete?"\n\nTeacher models the four-step method live, thinking aloud: Step 1 (Read) — a scientist has been working alone on an experiment. Step 2 (React) — unease, the character feels dangerous and obsessive. Step 3 (Identify) — listing of what he has sacrificed (tricolon), rhetorical question, semantic field of isolation, personification of the apparatus. Step 4 (Analyse) — teacher writes a model paragraph on the board, analysing the rhetorical question and its effect. Students copy the model paragraph and annotate it to identify its structure.',
      differentiation: {
        support: 'Provide a pre-printed version of the model paragraph for annotation rather than copying from the board.',
        core: 'Students copy and annotate the model paragraph, then identify one additional technique independently.',
        stretch: 'Students write their own paragraph on a different technique from the extract before seeing the teacher\'s model.',
      },
      resources: ['Extract handout', 'Model paragraph display', 'Four-step method reference card'],
    },
    {
      title: 'Independent Practice: Timed Analysis',
      duration: '22 minutes',
      instructions:
        'Provide a second original extract:\n\n"Mrs Ellwood received the letter at half-past nine, and by ten o\'clock her world had been quite thoroughly dismantled. She read it twice — the first time with incomprehension, the second with a dread that settled upon her chest like a physical weight. Her husband\'s debts, it seemed, were not merely considerable but catastrophic; the house, the furnishings, the carriage — all were to be seized. She folded the letter with exacting care, as though the precision of this small act might impose some order upon the chaos that now surrounded her. Then she rang for the maid and requested tea, because in the England of 1862, there was no calamity so great that it could not, at least temporarily, be addressed with a cup of Darjeeling."\n\nStudents apply the four-step method independently and write two analytical paragraphs in fifteen minutes. Remaining time for peer assessment: students swap and use a checklist to evaluate their partner\'s work (Does it identify a technique? Quote evidence? Analyse the effect? Use subject terminology?).',
      differentiation: {
        support: 'Provide a paragraph frame and a techniques checklist to scaffold the response.',
        core: 'Students apply the method and write two paragraphs independently.',
        stretch: 'Students write a third paragraph evaluating the effectiveness of the final sentence\'s ironic tone and what it reveals about Victorian social expectations.',
      },
      resources: ['Extract handout', 'Paragraph frame (support tier)', 'Peer assessment checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Method Recap: Four Steps in Four Sentences',
    duration: '6 minutes',
    instructions:
      'Students write one sentence summarising each of the four steps in their own words. Volunteers share. Teacher reinforces that this method works for any unseen extract and should become automatic through practice.',
    differentiation: {
      support: 'Fill-in-the-blank version: "Step 1 is about understanding ___."',
      core: 'Students write all four sentences independently.',
      stretch: 'Students identify which step they find most challenging and explain what they will do to improve.',
    },
  },
  homework:
    'Using the four-step method, analyse a short extract from your set text. Write two PEE paragraphs and bring them to the next lesson for teacher feedback.',
  worksheetQuestions: [
    {
      question: 'What are the four steps of the extract analysis method, and what does each involve?',
      lines: 6,
      modelAnswer:
        'Step 1 — Read: Read the extract carefully and identify what is happening — who are the characters, what is the situation, what is the mood? Step 2 — React: Consider your emotional response — how does the extract make you feel, and what has the writer done to create that response? Step 3 — Identify: Look for specific writer\'s methods — language techniques, structural features, narrative choices — and select quotations. Step 4 — Analyse: Explain the effect of each technique on the reader, using subject terminology, and consider the writer\'s purpose or intention.',
      marks: 4,
    },
    {
      question: 'Analyse how the writer presents Dr Fenwick\'s obsession in the first extract.',
      lines: 8,
      modelAnswer:
        'The writer presents Dr Fenwick as dangerously obsessive through several techniques. The tricolon "seven years of solitude, of neglect, of the slow and methodical estrangement of every soul who had once called him friend" lists the human costs of his work in escalating severity, showing that his obsession has systematically destroyed his relationships. The rhetorical question "what were friendships, what were the ordinary affections of the human heart" reveals that Fenwick has come to see human connection as worthless compared to scientific achievement — this is deeply unsettling because it suggests he has lost his humanity. The personification of the apparatus, which "hissed and shuddered", gives the experiment a menacing, animal-like quality, implying that Fenwick\'s creation may be beyond his control. The writer\'s purpose may be to explore Victorian anxieties about scientific overreach and the moral dangers of pursuing knowledge without ethical limits.',
      marks: 8,
    },
    {
      question: 'What is the effect of the ironic final sentence in the second extract about Mrs Ellwood?',
      lines: 5,
      modelAnswer:
        'The final sentence uses irony to expose the absurdity of Victorian social conventions. Mrs Ellwood has just learned that her entire life is about to collapse, yet she responds by requesting tea — a gesture of normality in the face of catastrophe. The narrator\'s ironic commentary ("there was no calamity so great that it could not, at least temporarily, be addressed with a cup of Darjeeling") gently mocks the Victorian tendency to suppress emotion and maintain appearances. The effect is both darkly humorous and poignant: the reader recognises that Mrs Ellwood\'s composure is not strength but a social performance, and that the real human cost of her situation is being concealed beneath a veneer of propriety.',
      marks: 5,
    },
    {
      question: 'Explain the difference between a response that retells the story and one that analyses the writer\'s methods.',
      lines: 5,
      modelAnswer:
        'A response that retells the story simply describes what happens in the extract (e.g., "Mrs Ellwood reads a letter and finds out her husband has debts"). It does not engage with how the writer has crafted the text. An analytical response, by contrast, focuses on the writer\'s choices — the specific language techniques, structural decisions, and narrative strategies used — and explains their effects on the reader. For example: "The writer uses the metaphor of dread settling upon her chest \'like a physical weight\' to make the emotional impact of the news tangible and visceral." The key distinction is between what happens and how the writer makes it happen.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a methods lesson — prioritise the transferable skill of structured analysis over specific content knowledge.',
    'Both extracts are original compositions, avoiding copyright concerns.',
    'The four-step method (Read, React, Identify, Analyse) should be displayed as a poster and referenced consistently throughout the unit.',
    'During the timed practice, circulate and note common errors (e.g., feature-spotting without analysis, retelling) for targeted feedback.',
    'The peer assessment activity develops Assessment Objective awareness — students internalise what examiners are looking for.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language and structure analysis',
    'Analytical writing (PEE)',
    'Timed writing skills',
    'Peer assessment',
  ],
};

// ─── Lesson 6: Narrative Techniques in Victorian Fiction ─────────────────────

const lesson6: LessonPlan = {
  id: 'c19-prose-06-narrative-techniques',
  title: 'Narrative Techniques in Victorian Fiction',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse key narrative techniques used in 19th century prose, including narrative perspective, foreshadowing, and narrative structure.',
    'Understand how Victorian writers use narrative voice to control the reader\'s sympathies and understanding.',
    'Evaluate the effects of different narrative choices on the reader\'s experience of a text.',
  ],
  successCriteria: [
    'I can identify and explain the difference between first-person, third-person omniscient, and third-person limited narration.',
    'I can analyse how narrative perspective shapes the reader\'s understanding of characters and events.',
    'I can identify foreshadowing and explain its effect on the reader.',
    'I can write an analytical paragraph on how narrative technique creates meaning.',
  ],
  keywords: [
    'omniscient narrator', 'first-person narrative', 'foreshadowing', 'narrative perspective',
    'free indirect discourse', 'dramatic irony', 'unreliable narrator', 'frame narrative',
  ],
  starterActivity: {
    title: 'Same Event, Different Narrator',
    duration: '8 minutes',
    instructions:
      'Display the same event described from three different narrative perspectives: (1) First-person by the protagonist, (2) Third-person omniscient, (3) Third-person limited from a bystander. The event: a woman drops a letter in the street and a stranger picks it up. Students discuss in pairs: how does the perspective change what the reader knows and feels? Teacher consolidates: narrative perspective is a deliberate choice by the writer that controls information, sympathy, and suspense.',
    differentiation: {
      support: 'Provide guiding questions: "What does the reader know in version 1 that they don\'t know in version 3?"',
      core: 'Students identify differences independently and discuss the effect on the reader.',
      stretch: 'Students consider which perspective would be best for a mystery novel and why.',
    },
    resources: ['Three-perspective display slide'],
  },
  mainActivities: [
    {
      title: 'Narrative Techniques Overview',
      duration: '15 minutes',
      instructions:
        'Teacher delivers a structured overview of key Victorian narrative techniques: (1) First-person narration — intimacy, subjectivity, potential unreliability. (2) Third-person omniscient — god-like knowledge, ability to reveal multiple characters\' thoughts, authorial commentary. (3) Free indirect discourse — blending narrator\'s voice with character\'s thoughts without direct speech markers. (4) Frame narrative — a story within a story, creating distance and multiple perspectives. (5) Foreshadowing — hints of future events that create suspense or dramatic irony. (6) Serialised structure — Victorian novels were often published in instalments, creating cliffhangers and episodic structure. Students create a reference table: technique, definition, effect, example.',
      differentiation: {
        support: 'Provide a partially completed reference table.',
        core: 'Students complete the table independently.',
        stretch: 'Students add a column evaluating the advantages and disadvantages of each technique for a writer.',
      },
      resources: ['Narrative techniques PowerPoint', 'Reference table template'],
    },
    {
      title: 'Comparative Extract Analysis: Narrative Voice',
      duration: '25 minutes',
      instructions:
        'Provide two original extracts describing the same event from different narrative perspectives.\n\nExtract A (First-person):\n"I confess that when I first beheld the house, a sensation of unease took hold of me which I could neither explain nor dismiss. It was a handsome enough residence — four storeys of grey stone, its windows tall and regularly spaced — and yet something in its aspect repelled me. I fancied that the upper windows regarded me with a kind of blank hostility, though I knew this to be nothing more than the irrational product of a fatigued mind. I should not have come. That much was already clear to me, though I could not yet have said why."\n\nExtract B (Third-person omniscient):\n"Mr Cavendish stood before the house and felt, though he would not have admitted it, a profound unease. Had he known what awaited him within — the discovery that would shatter his understanding of his own family, the confrontation that would leave him permanently altered — he might have turned upon his heel and walked away. But Mr Cavendish did not know. He saw only a handsome house of grey stone, and if its upper windows seemed to regard him with a blank hostility, he attributed this to fatigue and thought no more of it. He mounted the steps and rang the bell."\n\nStudents compare: (1) What does the reader know in each version? (2) How does the narrative perspective affect suspense? (3) Which version creates more sympathy for the character, and why? They write one paragraph analysing the most significant difference between the two extracts.',
      differentiation: {
        support: 'Provide a comparison table with guided prompts for each question.',
        core: 'Students compare independently and write an analytical paragraph.',
        stretch: 'Students write a third version of the extract using free indirect discourse and explain how it differs from both originals.',
      },
      resources: ['Dual extract handout', 'Comparison table (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Narrative Voice Quiz',
    duration: '7 minutes',
    instructions:
      'Display five short passages and ask students to identify the narrative perspective of each on mini-whiteboards (first-person, third-person omniscient, third-person limited, free indirect discourse). Discuss any disagreements. Teacher clarifies the difference between third-person limited and free indirect discourse, which students often confuse.',
    differentiation: {
      support: 'Provide definitions of each narrative type on a reference card.',
      core: 'Students identify perspectives from memory.',
      stretch: 'Students explain the effect of the narrative choice in each passage.',
    },
  },
  homework:
    'Rewrite a passage from your set text in a different narrative perspective. Write a short paragraph explaining how this change affects the reader\'s understanding.',
  worksheetQuestions: [
    {
      question: 'Explain the difference between first-person narration and third-person omniscient narration.',
      lines: 5,
      modelAnswer:
        'First-person narration uses "I" and presents events from the perspective of a character within the story. The reader sees only what this character sees and knows only what they know, creating intimacy but also limiting information. Third-person omniscient narration uses "he/she/they" and presents events from an all-knowing perspective. The narrator can reveal any character\'s thoughts, describe events the protagonist does not witness, and even comment on the action from an authorial position. This gives the reader a broader understanding but may reduce the sense of personal connection with any single character.',
      marks: 4,
    },
    {
      question: 'Compare how suspense is created differently in Extract A and Extract B.',
      lines: 6,
      modelAnswer:
        'In Extract A (first-person), suspense comes from the narrator\'s uncertainty — he feels uneasy but cannot explain why, and his statement "I should not have come" creates a sense of foreboding without revealing what will happen. The reader shares his limited knowledge and must wait to discover the source of his unease. In Extract B (third-person omniscient), suspense is created through dramatic irony — the narrator tells us directly that a shattering discovery and confrontation await, but Mr Cavendish does not know this. The reader knows more than the character, which creates tension as we watch him walk unknowingly towards danger. Extract A builds suspense through mystery; Extract B builds it through anticipated dread.',
      marks: 6,
    },
    {
      question: 'What is free indirect discourse and why did Victorian writers use it?',
      lines: 5,
      modelAnswer:
        'Free indirect discourse is a narrative technique in which the narrator\'s voice blends with a character\'s thoughts without using direct speech markers (quotation marks) or reporting verbs ("she thought"). For example, instead of writing "She thought that the weather was dreadful," a writer might write: "The weather was dreadful. She would not go out today." Victorian writers used this technique because it allows the reader to experience a character\'s inner world while the narrator maintains an external perspective. This creates a dual effect: intimacy with the character\'s feelings and the possibility of ironic distance, where the reader can perceive things the character cannot.',
      marks: 4,
    },
    {
      question: 'Why was serialisation important to the structure of Victorian novels?',
      lines: 4,
      modelAnswer:
        'Many Victorian novels were published in weekly or monthly instalments in periodicals before being released as complete books. This shaped their structure: writers needed to create cliffhangers at the end of each instalment to ensure readers would buy the next issue. It also encouraged episodic plotting with multiple subplots to maintain variety. Serialisation influenced pacing — writers often included recaps or reminders of earlier events for readers who might have missed an instalment. This commercial pressure shaped the distinctive structure of Victorian fiction: long, multi-plotted, and driven by suspense and revelation.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Both extracts are original compositions designed to illustrate narrative perspective clearly.',
    'Free indirect discourse is a challenging concept — use concrete examples and allow time for questions.',
    'The comparative analysis task prepares students for comparison questions in the exam.',
    'If students struggle to distinguish narrative perspectives, provide additional short examples for practice.',
    'Link to set texts wherever possible: if studying Jekyll and Hyde, discuss the frame narrative; if studying Great Expectations, discuss first-person reliability.',
  ],
  targetedSkills: [
    'AO2: Language and structure analysis',
    'Comparative analysis',
    'Subject terminology',
    'Analytical writing',
    'Critical evaluation',
  ],
};

// ─── Lesson 7: Class, Gender, and Power ──────────────────────────────────────

const lesson7: LessonPlan = {
  id: 'c19-prose-07-class-gender-power',
  title: 'Class, Gender, and Power in 19th Century Prose',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how 19th century writers present issues of class, gender, and power through characterisation and dialogue.',
    'Understand how Victorian social structures are reflected and challenged in prose fiction.',
    'Evaluate how writers use characters to reinforce or subvert contemporary attitudes.',
  ],
  successCriteria: [
    'I can explain how class, gender, and power intersect in Victorian society.',
    'I can analyse how a writer uses dialogue and description to convey power dynamics between characters.',
    'I can identify whether a writer is reinforcing or challenging Victorian social norms.',
    'I can write an evaluative paragraph considering different interpretations of a character\'s behaviour.',
  ],
  keywords: [
    'patriarchy', 'social mobility', 'hegemony', 'subversion',
    'the domestic sphere', 'the angel in the house', 'deference', 'agency',
  ],
  starterActivity: {
    title: 'Power Dynamics: Who Holds the Power?',
    duration: '7 minutes',
    instructions:
      'Display three pairs of Victorian character types: (1) Master and servant, (2) Husband and wife, (3) Factory owner and child worker. For each pair, students discuss: who holds the power, what gives them that power, and how might the less powerful person respond? Students record their answers. Teacher consolidates: in Victorian fiction, writers often explore what happens when these power dynamics are challenged or exposed.',
    differentiation: {
      support: 'Provide a structured table with the pairs and guiding questions.',
      core: 'Students discuss freely and record answers independently.',
      stretch: 'Students consider: can a character without social power still have agency? How might a writer show this?',
    },
    resources: ['Character pairs display slide', 'Power dynamics table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Class, Gender, and Power: Key Concepts',
      duration: '15 minutes',
      instructions:
        'Teacher delivers a focused overview of three interconnected themes: (1) Class — the rigid social hierarchy, limited social mobility, the importance of birth and wealth, the "deserving" vs "undeserving" poor. (2) Gender — the cult of domesticity, "the angel in the house" ideal, the Married Women\'s Property Acts, women as property. (3) Power — how class and gender determine who has authority, agency, and voice. Introduce key concepts: hegemony (dominance of one group\'s values presented as natural), subversion (when a writer challenges dominant values), and agency (a character\'s ability to act independently). Students take notes using a three-column organiser.',
      differentiation: {
        support: 'Provide a pre-printed notes organiser with key definitions filled in.',
        core: 'Students take notes independently.',
        stretch: 'Students consider how these three themes intersect — e.g., a wealthy woman has class privilege but is constrained by gender expectations.',
      },
      resources: ['Key concepts PowerPoint', 'Three-column organiser'],
    },
    {
      title: 'Extract Analysis: Power in Dialogue',
      duration: '25 minutes',
      instructions:
        'Provide the following original extract:\n\n"\\"You forget yourself, Mrs Blackwood,\\" said Mr Thornbury, setting down his glass with the deliberate care of a man who wishes his displeasure to be noted. \\"This matter is not one upon which I require your opinion.\\"\n\nShe stood quite still for a moment, her hands folded before her. A stranger might have supposed her chastened. But those who knew her well — and they were few, for she permitted few to know her — would have recognised the slight tightening of her jaw, the almost imperceptible lift of her chin, for what it was: not submission, but the careful marshalling of a resistance she had long since learned to disguise as compliance.\n\n\\"Of course, Mr Thornbury,\\" she said, with a smile so perfectly composed that it might have been painted upon her face. \\"I shall defer to your superior judgement, as always.\\"\n\nHe nodded, satisfied. He did not hear the iron in her voice. He never did."\n\nStudents analyse: (1) How does the writer present the power dynamic between these two characters? (2) How does the writer use the contrast between Mrs Blackwood\'s outward behaviour and inner resistance? (3) What is the writer\'s attitude towards gender roles — are they being reinforced or subverted? Students write an evaluative paragraph using the structure: "On one hand... however, on the other hand... ultimately, the writer seems to suggest..."',
      differentiation: {
        support: 'Provide guided annotation prompts highlighting key phrases and a paragraph frame for the evaluative response.',
        core: 'Students analyse and write the evaluative paragraph independently.',
        stretch: 'Students consider what a feminist reading of this extract would emphasise versus a historicist reading, and how these interpretations differ.',
      },
      resources: ['Extract handout', 'Annotation prompts (support tier)', 'Evaluative paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Challenge or Reinforce?',
    duration: '8 minutes',
    instructions:
      'Display three brief statements about Victorian writers and gender/class. Students vote (thumbs up/down) on whether each writer is challenging or reinforcing social norms. Discuss: can a text do both simultaneously? Teacher closes by noting that the best exam responses consider multiple interpretations.',
    differentiation: {
      support: 'Provide clear definitions of "challenge" and "reinforce" with examples.',
      core: 'Students vote and justify verbally.',
      stretch: 'Students articulate how a single text can simultaneously challenge one social norm while reinforcing another.',
    },
  },
  homework:
    'Choose a character from your set text who has limited power. Write two paragraphs: one explaining how the writer presents their lack of power, and one evaluating whether the writer challenges or reinforces the social attitudes that create this powerlessness.',
  worksheetQuestions: [
    {
      question: 'Explain the concept of "the angel in the house" and how 19th century writers responded to it.',
      lines: 5,
      modelAnswer:
        '"The angel in the house" was a Victorian ideal of femininity: women were expected to be selfless, pure, domestic, and submissive. They were to manage the home, raise children, and provide moral guidance, while remaining obedient to their husbands. Some 19th century writers reinforced this ideal by presenting virtuous, domestic women as positive role models. However, others — particularly female writers — challenged it by creating female characters who resist these expectations, experience frustration or entrapment, or demonstrate intellectual and emotional complexity that contradicts the "angel" stereotype.',
      marks: 4,
    },
    {
      question: 'Analyse how the writer presents Mrs Blackwood\'s resistance to Mr Thornbury\'s authority in the extract.',
      lines: 8,
      modelAnswer:
        'The writer presents Mrs Blackwood\'s resistance as subtle, controlled, and ultimately more powerful than Thornbury\'s overt authority. While Thornbury asserts dominance through direct speech ("I require your opinion"), Mrs Blackwood responds with physical and verbal compliance — folded hands, a composed smile, the words "I shall defer." However, the narrator reveals that this compliance is a performance: her jaw tightens, her chin lifts, and her submission is described as "the careful marshalling of a resistance she had long since learned to disguise as compliance." This suggests she possesses significant inner strength but has learned that open defiance is ineffective or dangerous within the patriarchal system. The final line — "He did not hear the iron in her voice. He never did" — is devastating in its implication: Thornbury is so confident in his authority that he cannot perceive her resistance at all. The writer subverts Victorian gender expectations by presenting the woman as more perceptive, more strategically intelligent, and ultimately more self-aware than the man who believes he controls her.',
      marks: 8,
    },
    {
      question: 'What is meant by the term "hegemony" in the context of Victorian class and gender relations?',
      lines: 4,
      modelAnswer:
        'Hegemony refers to the dominance of one social group\'s values, beliefs, and norms, which come to be accepted as natural and inevitable rather than constructed and challengeable. In Victorian Britain, the hegemony of the upper classes and of men meant that class hierarchy and patriarchy were widely accepted as the natural order. Working-class people and women often internalised these values, accepting their subordinate position as right and proper. Writers who challenged hegemony — by exposing inequality or giving voice to marginalised characters — were performing an act of subversion.',
      marks: 4,
    },
    {
      question: 'Why is it important to consider whether a writer is reinforcing or challenging social norms when analysing 19th century prose?',
      lines: 5,
      modelAnswer:
        'Considering whether a writer is reinforcing or challenging social norms is essential because it reveals the writer\'s purpose and the deeper meaning of the text. A writer who reinforces norms may be reflecting the dominant values of their time, while one who challenges them may be using fiction as a vehicle for social criticism. Understanding this helps students address AO3 (context) meaningfully — not just as background information, but as a lens for interpreting the writer\'s choices. The most sophisticated responses recognise that texts can be ambiguous: a writer may appear to reinforce norms on the surface while subtly undermining them through irony, characterisation, or narrative structure.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson deals with sensitive topics (gender inequality, class prejudice, power dynamics). Establish ground rules for respectful discussion.',
    'The extract is original and designed to demonstrate subversion of gender norms through surface compliance and underlying resistance.',
    'Encourage students to see "reinforcing vs challenging" not as a binary but as a spectrum — texts can do both simultaneously.',
    'Link to set texts: if studying Jane Eyre, discuss Bront\u00eb\'s presentation of female agency; if studying Great Expectations, discuss Pip\'s social mobility.',
    'The evaluative paragraph structure ("On one hand... however... ultimately") is a key exam skill and should be practised regularly.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language analysis',
    'AO3: Context',
    'Evaluative writing',
    'Critical thinking',
  ],
};

// ─── Lesson 8: The Unreliable Narrator ───────────────────────────────────────

const lesson8: LessonPlan = {
  id: 'c19-prose-08-unreliable-narrator',
  title: 'The Unreliable Narrator in 19th Century Prose',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the concept of the unreliable narrator and why writers use this technique.',
    'Identify textual clues that suggest a narrator may be unreliable.',
    'Analyse how narrative unreliability affects the reader\'s interpretation of events and characters.',
  ],
  successCriteria: [
    'I can define "unreliable narrator" and explain why a writer might choose to use one.',
    'I can identify at least three textual clues that suggest a narrator is unreliable.',
    'I can analyse how unreliability changes the reader\'s understanding of the story.',
    'I can write an analytical paragraph exploring the effect of an unreliable narrator on the reader.',
  ],
  keywords: [
    'unreliable narrator', 'bias', 'self-deception', 'dramatic irony',
    'subjectivity', 'confession', 'reader positioning', 'cognitive dissonance',
  ],
  starterActivity: {
    title: 'Who Do You Believe?',
    duration: '8 minutes',
    instructions:
      'Read aloud two short accounts of the same incident — a broken window. Version 1 (by the person accused): "The ball slipped from my hand quite accidentally. I never intended any harm." Version 2 (by a witness): "He threw the ball directly at the window. He was laughing." Students discuss: who is more reliable and why? What clues help us judge? Teacher introduces the concept: in literature, narrators are not always truthful — they may lie, exaggerate, omit information, or be self-deceived. This is called narrative unreliability, and recognising it is a crucial reading skill.',
    differentiation: {
      support: 'Provide a checklist of reasons a narrator might be unreliable (lying, biased, confused, self-deceived).',
      core: 'Students discuss and identify reasons for unreliability independently.',
      stretch: 'Students consider: is every first-person narrator inherently somewhat unreliable? Why or why not?',
    },
    resources: ['Two-account display slide', 'Unreliability checklist (support tier)'],
  },
  mainActivities: [
    {
      title: 'Types of Unreliable Narrator',
      duration: '15 minutes',
      instructions:
        'Teacher presents four types of unreliable narrator: (1) The deliberate liar — knowingly deceives the reader. (2) The self-deceived narrator — genuinely believes their distorted version of events. (3) The naive narrator — lacks the understanding to interpret events accurately (e.g., a child). (4) The mentally unstable narrator — their perception is distorted by illness, obsession, or emotional disturbance. For each type, discuss: what clues in the text might reveal the unreliability? (Contradictions, excessive justification, other characters\' reactions, gaps in the story, an overly emotional or defensive tone.) Students create a reference page in their exercise books with type, definition, clues, and effect on reader.',
      differentiation: {
        support: 'Provide a pre-printed table with definitions; students add clues and effects.',
        core: 'Students create the reference independently.',
        stretch: 'Students consider which type is most challenging for the reader to detect and why.',
      },
      resources: ['Types of unreliable narrator PowerPoint'],
    },
    {
      title: 'Extract Analysis: Spotting Unreliability',
      duration: '25 minutes',
      instructions:
        'Provide the following original extract — a first-person account:\n\n"I wish it to be understood from the outset that I am a man of reason and of steady temperament. What I did, I did from necessity, and I defy any man of honest heart to say he would not have acted as I did, given the same provocation. My brother had always been the favoured child — this much was evident to anyone who cared to observe — and his inheritance of the estate was an act of injustice so profound that I cannot conceive how our late father, whom in all other respects I revered, could have sanctioned it. I bore this injury with patience. I bore it, I say, for three years without complaint, until the evening of the fourteenth of November, when a trifling disagreement over supper led — through no fault of my own, I assure you — to consequences which I deeply regret, though I maintain, as I have always maintained, that they were entirely unavoidable.\n\nThe magistrate, I am told, takes a different view. But the magistrate was not there, and cannot know what passed between us. Only I know the truth of it. Only I."\n\nStudents: (1) Identify clues that suggest this narrator is unreliable. (2) Classify the type of unreliable narrator. (3) Analyse specific language choices that reveal unreliability (e.g., "through no fault of my own", excessive reassurance, contradictions). (4) Write a paragraph explaining how the unreliability affects the reader\'s response.',
      differentiation: {
        support: 'Teacher highlights three key phrases for analysis and provides guided questions.',
        core: 'Students identify clues and write the analytical paragraph independently.',
        stretch: 'Students write a paragraph from the brother\'s perspective and explain how having both accounts would change the reader\'s interpretation.',
      },
      resources: ['Extract handout', 'Guided questions (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Reliability Spectrum',
    duration: '7 minutes',
    instructions:
      'Students place the narrator from the extract on a "reliability spectrum" from fully reliable to completely unreliable, justifying their position with evidence from the text. Teacher selects students from different positions to debate. Close by noting that unreliability is often a matter of degree rather than a binary.',
    differentiation: {
      support: 'Provide sentence starter: "I think this narrator is ___ reliable because..."',
      core: 'Students justify their position with textual evidence.',
      stretch: 'Students consider: does the narrator know he is being unreliable, or is he self-deceived?',
    },
  },
  homework:
    'Write a short first-person account (100-150 words) of an everyday event from the perspective of an unreliable narrator. Include at least three clues that reveal the unreliability. Annotate your own work to identify these clues.',
  worksheetQuestions: [
    {
      question: 'What is an unreliable narrator and why might a writer choose to use one?',
      lines: 5,
      modelAnswer:
        'An unreliable narrator is a character who tells the story but whose account the reader cannot fully trust. Their unreliability may stem from deliberate lying, self-deception, naivety, or mental instability. A writer might choose to use an unreliable narrator to create suspense and mystery (the reader must work out the truth), to explore themes of truth and deception, to develop a psychologically complex character, or to force the reader into an active role — questioning, interpreting, and reassessing the narrative rather than passively accepting it.',
      marks: 4,
    },
    {
      question: 'Identify and analyse three clues in the extract that suggest the narrator is unreliable.',
      lines: 8,
      modelAnswer:
        'First, the narrator opens with an insistence that he is "a man of reason and of steady temperament" — this excessive self-justification suggests he is trying to convince the reader (and perhaps himself) of something that may not be true. Reliable narrators do not usually need to assert their own reliability. Second, the phrase "through no fault of my own, I assure you" is a direct address that feels defensive and evasive — the repeated assurances draw attention to exactly the fault he is denying. Third, the vagueness about what actually happened ("consequences which I deeply regret") is a significant omission — the narrator describes his feelings and justifications in great detail but avoids specifying the actual event, suggesting he is concealing something he knows would damage his case. The cumulative effect is a narrator who protests too much, raising the reader\'s suspicion that his version of events is heavily distorted.',
      marks: 6,
    },
    {
      question: 'Explain the difference between a deliberately lying narrator and a self-deceived narrator.',
      lines: 5,
      modelAnswer:
        'A deliberately lying narrator knowingly tells the reader something untrue — they are aware of the facts but choose to misrepresent them for a specific purpose (to gain sympathy, to conceal guilt, to manipulate). A self-deceived narrator, by contrast, genuinely believes their own distorted version of events. They have unconsciously rewritten the truth to protect themselves from uncomfortable realities. The key difference for the reader is one of intention: the liar is strategic, while the self-deceived narrator is psychologically damaged. In the extract, the narrator may be self-deceived — he seems to genuinely believe his actions were justified, even as the textual clues suggest otherwise.',
      marks: 4,
    },
    {
      question: 'What is the effect on the reader of the final sentences: "Only I know the truth of it. Only I"?',
      lines: 5,
      modelAnswer:
        'These final sentences are deeply ironic. The narrator asserts his exclusive access to the truth, but by this point the reader has strong reasons to doubt his reliability. The repetition of "Only I" is emphatic and possessive — he clings to his version of events, shutting out all other perspectives (including the magistrate\'s). The effect on the reader is one of unease and suspicion: rather than reassuring us, the insistence on sole access to truth suggests that the narrator is either lying or so deeply self-deceived that he has constructed a version of reality that serves his psychological needs. The short, isolated final sentence creates a tone of defiance that paradoxically undermines his credibility.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson introduces a concept that is highly valuable for analysing many GCSE set texts (Jekyll and Hyde, Great Expectations, Jane Eyre, etc.).',
    'The extract is an original composition designed to showcase clear markers of unreliability.',
    'The creative homework task is valuable because students who can construct unreliable narration can also recognise it in exam texts.',
    'Students often assume first-person narrators are trustworthy — this lesson should permanently shift that assumption.',
    'Link to AO2: narrative unreliability is a "structural" choice that shapes meaning.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language and structure analysis',
    'Critical reading',
    'Analytical writing',
    'Inference and interpretation',
  ],
};

// ─── Lesson 9: Comparing 19th and 21st Century Non-Fiction ───────────────────

const lesson9: LessonPlan = {
  id: 'c19-prose-09-comparing-centuries-nonfiction',
  title: 'Comparing 19th and 21st Century Non-Fiction Prose',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Compare how writers from different centuries use language, structure, and rhetorical techniques to present viewpoints.',
    'Identify similarities and differences in tone, register, and purpose between 19th and 21st century non-fiction.',
    'Write a comparative analytical response using appropriate connectives and structure.',
  ],
  successCriteria: [
    'I can identify at least three similarities and three differences between the two texts.',
    'I can analyse specific language choices in both texts and compare their effects.',
    'I can write a comparative paragraph using connectives such as "similarly", "in contrast", "whereas".',
    'I can explain how the historical context of each text influences its language and tone.',
  ],
  keywords: [
    'comparison', 'rhetoric', 'register', 'polemic',
    'persuasion', 'anaphora', 'direct address', 'tone',
  ],
  starterActivity: {
    title: 'Then and Now: Same Topic, Different Voice',
    duration: '7 minutes',
    instructions:
      'Display two short statements on the same topic (poverty): one from a 19th century perspective ("It is the duty of every Christian soul to extend the hand of charity to those whom Providence has placed in circumstances of deprivation") and one modern ("Child poverty in the UK is a national disgrace. We need action, not words."). Students identify three differences in language, tone, and approach. Teacher introduces the lesson focus: when comparing 19th and 21st century non-fiction, we must consider how context shapes language choices.',
    differentiation: {
      support: 'Provide prompts: "Which uses longer sentences? Which sounds more formal? Which is more direct?"',
      core: 'Students identify differences independently.',
      stretch: 'Students consider which statement is more persuasive and why — does formality help or hinder persuasion?',
    },
    resources: ['Comparative statements display slide'],
  },
  mainActivities: [
    {
      title: 'Paired Text Analysis',
      duration: '28 minutes',
      instructions:
        'Provide two original non-fiction extracts on the theme of education.\n\nText A — 19th century style:\n"It is a truth insufficiently acknowledged by those who govern this nation that the education of the poor is not merely a matter of benevolence but of urgent necessity. The child who is denied instruction in letters and arithmetic is condemned not only to ignorance but to a servitude from which no honest labour can deliver him. I have visited the schools — if schools they may be called — of the manufacturing districts, and I confess that what I observed there would move the most obdurate heart to pity. In one establishment, no fewer than seventy children were confined to a single room, presided over by a woman whose sole qualification for the office of teacher was that she could read, albeit with considerable difficulty, the Lord\'s Prayer. Can we, in conscience, call this education? Can we profess ourselves a civilised nation whilst permitting such a state of affairs to persist?"\n\nText B — 21st century style:\n"Let\'s be honest: the education system is failing our most vulnerable children. If you\'re born into poverty in this country, your chances of getting a decent education are significantly lower than if you\'re born into wealth. And that\'s not just unfair — it\'s a waste of human potential on a massive scale. I\'ve visited schools in deprived areas where teachers are working miracles with no resources, no support, and no recognition. These kids deserve better. We all know it. So why aren\'t we doing something about it?"\n\nStudents complete a comparison grid covering: purpose, audience, tone, register, rhetorical techniques, sentence structure, and vocabulary. They then write two comparative paragraphs: one on similarities and one on differences.',
      differentiation: {
        support: 'Provide a partially completed comparison grid and a comparative paragraph frame with connectives.',
        core: 'Students complete the grid and write two paragraphs independently.',
        stretch: 'Students write a third paragraph evaluating which text is more effective in persuading the reader and why, considering both historical context and rhetorical strategy.',
      },
      resources: ['Dual text handout', 'Comparison grid worksheet', 'Paragraph frame with connectives (support tier)'],
    },
    {
      title: 'Language Zoom: Close Comparison',
      duration: '15 minutes',
      instructions:
        'Students select one rhetorical technique that appears in both texts (e.g., rhetorical questions, emotive language, direct address) and write a detailed comparative analysis. They must: (1) Quote from both texts, (2) Analyse the effect in each text, (3) Explain how the historical context influences the way the technique is used. For example: both texts use rhetorical questions, but Text A\'s questions are formal and appeal to conscience ("Can we, in conscience..."), while Text B\'s are colloquial and confrontational ("So why aren\'t we doing something about it?").',
      differentiation: {
        support: 'Teacher identifies the technique for the student and provides the quotations; student analyses the effects.',
        core: 'Students select technique, find quotations, and analyse independently.',
        stretch: 'Students analyse a second technique and consider how audience expectations have changed between the 19th and 21st centuries.',
      },
      resources: ['Dual text handout (same as above)'],
    },
  ],
  plenaryActivity: {
    title: 'Comparison Quick-Fire',
    duration: '5 minutes',
    instructions:
      'Teacher calls out a feature (e.g., "tone", "sentence length", "vocabulary", "purpose") and students write one comparative sentence on their mini-whiteboards, using a comparative connective. Share and discuss the strongest examples.',
    differentiation: {
      support: 'Provide a connectives word bank (similarly, whereas, in contrast, both, however).',
      core: 'Students produce comparative sentences from memory.',
      stretch: 'Students include analysis of effect in their comparative sentence.',
    },
  },
  homework:
    'Find a modern newspaper opinion article on a social issue. Write a paragraph comparing its language and tone to the 19th century non-fiction extract studied in class.',
  worksheetQuestions: [
    {
      question: 'Compare the tone and register of Text A and Text B. How do they differ and why?',
      lines: 6,
      modelAnswer:
        'Text A adopts a formal, elevated register typical of 19th century non-fiction prose. It uses complex sentence structures, Latinate vocabulary ("insufficiently acknowledged", "obdurate"), and a measured, authoritative tone. This reflects the conventions of Victorian public discourse, where writers addressed educated, middle-class audiences and were expected to demonstrate their own learning and moral authority. Text B, in contrast, uses an informal, conversational register with contractions ("let\'s", "that\'s"), colloquial phrases ("let\'s be honest"), and shorter, more direct sentences. This reflects modern conventions of opinion writing, where accessibility and emotional directness are valued over formality. Both registers are appropriate to their context, but they achieve persuasion through different means: Text A through moral authority and rhetorical sophistication, Text B through authenticity and directness.',
      marks: 6,
    },
    {
      question: 'Both texts use rhetorical questions. Compare how this technique is used in each text and analyse its effect.',
      lines: 6,
      modelAnswer:
        'Text A uses rhetorical questions that appeal to the reader\'s conscience and sense of national pride: "Can we, in conscience, call this education? Can we profess ourselves a civilised nation whilst permitting such a state of affairs to persist?" These questions are formal, use elevated vocabulary, and imply that the reader shares the writer\'s moral values. Text B uses a more confrontational rhetorical question: "So why aren\'t we doing something about it?" This is informal, direct, and implicitly accusatory — it challenges the reader\'s inaction rather than appealing to their conscience. Both techniques are effective but reflect different assumptions about the audience: Text A assumes readers need to be awakened to the problem; Text B assumes they already know but have failed to act.',
      marks: 6,
    },
    {
      question: 'Identify one similarity between the two texts and explain its significance.',
      lines: 5,
      modelAnswer:
        'One significant similarity is that both writers use personal testimony — visiting schools — to strengthen their arguments. Text A states "I have visited the schools" and describes specific conditions (seventy children, one unqualified teacher). Text B similarly states "I\'ve visited schools in deprived areas" and describes teachers "working miracles with no resources." In both cases, the personal testimony serves the same purpose: it transforms an abstract social issue into a concrete, witnessed reality, which makes the argument more credible and emotionally compelling. This shows that despite the 150-year gap, the rhetorical strategy of using first-hand experience to support an argument remains powerful.',
      marks: 4,
    },
    {
      question: 'Which text do you find more persuasive, and why? Consider both the writer\'s techniques and the intended audience.',
      lines: 6,
      modelAnswer:
        'This is an evaluative question with no single correct answer. A strong response might argue that Text B is more persuasive for a modern reader because its direct, informal style feels more authentic and urgent, and its confrontational tone ("So why aren\'t we doing something about it?") demands action rather than merely inviting reflection. Alternatively, a student might argue that Text A is more persuasive because its detailed, specific evidence (seventy children, one room, an unqualified teacher) is more concrete than Text B\'s generalisations, and its formal register gives it a gravitas and moral authority that Text B\'s colloquial style lacks. The strongest responses will acknowledge that persuasiveness depends on the audience and their expectations.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson directly prepares students for AQA Paper 2 Question 4 (comparison of writers\' viewpoints and methods).',
    'Both texts are original compositions — Text A is written in the style of Victorian reformist non-fiction, Text B in the style of modern opinion journalism.',
    'Emphasise that comparison is not just "Text A does this, Text B does that" — it requires analysis of why the differences exist (context, audience, purpose).',
    'The comparison grid is a scaffold that should be gradually removed as students become more confident with comparative writing.',
    'Common error: students compare content rather than methods. Redirect: it\'s not what they say but how they say it.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language analysis',
    'AO3: Context',
    'Comparative writing',
    'Evaluative writing',
  ],
};

// ─── Lesson 10: Exam Practice — Unseen 19th Century Extract ──────────────────

const lesson10: LessonPlan = {
  id: 'c19-prose-10-exam-practice-unseen',
  title: 'Exam Practice: Unseen 19th Century Extract',
  text: '19th Century Prose',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply all skills developed in the unit to analyse an unseen 19th century prose extract under timed conditions.',
    'Demonstrate the ability to identify writer\'s methods, analyse language and structure, and embed contextual understanding.',
    'Self-assess and reflect on areas of strength and areas for improvement.',
  ],
  successCriteria: [
    'I can read and interpret an unseen 19th century prose extract with confidence.',
    'I can write at least three analytical paragraphs in timed conditions, each addressing a different writer\'s method.',
    'I can embed contextual references naturally within my analysis.',
    'I can self-assess my response against the mark scheme criteria.',
  ],
  keywords: [
    'assessment objectives', 'mark scheme', 'writer\'s methods', 'embedded context',
    'analytical paragraph', 'subject terminology', 'evaluation', 'perceptive',
  ],
  starterActivity: {
    title: 'Exam Skills Recap: Top Five Tips',
    duration: '7 minutes',
    instructions:
      'Students work in pairs to generate their "Top 5 Tips for Analysing a 19th Century Extract" from everything they have learned in the unit. Pairs share with another pair and negotiate a combined top five. Teacher collects and displays the best on the board. Likely to include: don\'t panic at old-fashioned language, use the four-step method, analyse language not just content, embed context, use subject terminology. Teacher adds any missing essentials.',
    differentiation: {
      support: 'Provide a list of eight tips — students select the five most important and rank them.',
      core: 'Students generate their own top five from memory.',
      stretch: 'Students explain why each tip matters, linking to specific assessment objectives.',
    },
    resources: ['Mini-whiteboards', 'Tips list (support tier)'],
  },
  mainActivities: [
    {
      title: 'Timed Extract Response',
      duration: '30 minutes',
      instructions:
        'Provide the following original unseen extract and exam-style question.\n\nExtract:\n"The funeral was conducted with all the solemn propriety that the occasion demanded and that the wealth of the deceased could furnish. The coffin, borne upon the shoulders of six men whose black coats had been hired for the purpose, progressed along the high street at a pace so measured and so deliberate that the watching crowd, pressed three-deep against the shop fronts, might have supposed some great benefactor was being carried to his rest.\n\nBut Mr Josiah Gripe had been no benefactor. In forty years of trade, he had ground every last farthing from the men and women who laboured in his mills, and had given nothing back — not a school, not a hospital, not so much as a drinking fountain. He had paid his workers the barest minimum that the law permitted, and when the law had been silent, he had paid them less. His house on the hill — a monument to acquisition rather than taste — contained paintings he never looked at, books he had never read, and a dining table at which he had always eaten alone.\n\nNow the Reverend Mr Ainsworth spoke of Christian charity. Now the mourners bowed their heads. And in the pews reserved for the family, his three children — whom he had raised with the same grim efficiency he had brought to commerce, and with approximately the same warmth — sat in expensive black and thought not of their father but of his will.\n\nOutside, the mill workers gathered in the cold. They had not been invited to the service, but they had come to watch, as people will when some great weight is lifted from them. An old woman at the back of the crowd, whose hands were twisted from thirty years at the loom, said quietly to no one in particular: \'Well, he\'s gone then.\' And the woman beside her nodded, and said nothing, and after a moment, smiled."\n\nQuestion: "How does the writer use language and structure to present their attitude towards Mr Gripe and the society he represents? You should consider: the writer\'s use of contrast, irony, and characterisation; how the writer structures the extract to build towards the ending; how the writer uses this passage to comment on Victorian values."\n\nStudents write a full response in 25 minutes. Teacher circulates, noting common strengths and areas for development.',
      differentiation: {
        support: 'Provide a planning grid with prompts: "Paragraph 1: How is Mr Gripe characterised? Paragraph 2: What contrasts are used? Paragraph 3: What is the effect of the ending?"',
        core: 'Students plan and write independently under timed conditions.',
        stretch: 'Students aim for a "perceptive" response by considering multiple interpretations — e.g., is the writer criticising Gripe alone, or the entire social system that enabled him?',
      },
      resources: ['Extract and question handout', 'Planning grid (support tier)', 'Lined paper'],
    },
    {
      title: 'Self-Assessment and Reflection',
      duration: '12 minutes',
      instructions:
        'Distribute a simplified mark scheme based on AQA criteria: Band 1 (simple, limited) — identifies some features but mainly retells; Band 2 (clear, relevant) — identifies techniques and explains effects; Band 3 (detailed, developed) — analyses techniques, selects apt quotations, links to context; Band 4 (perceptive, exploratory) — explores layers of meaning, evaluates effects, embeds context seamlessly. Students re-read their own response, highlight where they meet each band, and identify: (a) their strongest paragraph, (b) one specific area for improvement, (c) one skill they want to practise further. They write a brief reflection (3-4 sentences) in their exercise books.',
      differentiation: {
        support: 'Teacher models how to apply the mark scheme using a sample response before students assess their own.',
        core: 'Students self-assess independently using the mark scheme.',
        stretch: 'Students rewrite their weakest paragraph, improving it to the next band level.',
      },
      resources: ['Simplified mark scheme handout', 'Highlighters'],
    },
  ],
  plenaryActivity: {
    title: 'Unit Reflection: What I\'ve Learned',
    duration: '6 minutes',
    instructions:
      'Students complete a "3-2-1" reflection: three things they have learned across the unit, two skills they have improved, and one thing they want to continue working on. Volunteers share. Teacher closes by reinforcing that the skills developed — close reading, analysis, contextual understanding — are transferable to any unseen extract they encounter in the exam.',
    differentiation: {
      support: 'Provide a reflection frame with sentence starters.',
      core: 'Students complete the 3-2-1 independently.',
      stretch: 'Students identify connections between the skills learned in this unit and their set text study.',
    },
  },
  homework:
    'Rewrite your weakest paragraph from today\'s timed response, incorporating the improvement you identified during self-assessment. Bring the original and revised versions to the next lesson.',
  worksheetQuestions: [
    {
      question: 'How does the writer use irony to present Mr Gripe\'s funeral in the opening paragraph?',
      lines: 6,
      modelAnswer:
        'The writer uses dramatic irony by describing the funeral with language that suggests a great man is being mourned — "solemn propriety", "six men" bearing the coffin, a "measured and deliberate" pace, crowds "pressed three-deep." The phrase "might have supposed some great benefactor was being carried to his rest" sets up the irony explicitly: the funeral looks like it belongs to a generous, beloved figure. The second paragraph then demolishes this impression entirely by revealing that Gripe "had been no benefactor" and had exploited his workers ruthlessly. The irony highlights the gap between appearance and reality — a central Victorian concern — and criticises a society that accords wealthy people ceremonial respect regardless of their character.',
      marks: 6,
    },
    {
      question: 'Analyse the effect of the tricolon "paintings he never looked at, books he had never read, and a dining table at which he had always eaten alone."',
      lines: 6,
      modelAnswer:
        'This tricolon catalogues Gripe\'s possessions in a way that emphasises their emptiness and his isolation. Each item represents a form of richness — aesthetic (paintings), intellectual (books), social (a dining table) — but Gripe has failed to engage with any of them. The repetition of negatives ("never looked at", "never read", "always eaten alone") creates a devastating portrait of a man who accumulated wealth but derived no joy, beauty, or companionship from it. The dining table detail is particularly poignant: it suggests not just loneliness but a lifetime of chosen isolation. The tricolon structure builds towards this climactic image, and its rhythmic quality makes the list feel like a verdict — a final, damning summary of a wasted life.',
      marks: 6,
    },
    {
      question: 'How does the writer use the ending of the extract — the mill workers\' reaction — to present their attitude towards Gripe and the class system?',
      lines: 8,
      modelAnswer:
        'The ending shifts perspective from the wealthy mourners inside the church to the mill workers outside, creating a structural contrast that mirrors the class divide. The workers "had not been invited" — excluded even from the funeral of the man who profited from their labour — yet they have come "to watch, as people will when some great weight is lifted from them." The metaphor of a "weight" being "lifted" is powerful: Gripe is presented not as a loss but as a burden from which the workers are now released. The old woman\'s understated comment — "Well, he\'s gone then" — is remarkable for its lack of grief, anger, or bitterness; it is simply a statement of fact. The final image — the woman beside her smiling — is the emotional climax of the extract. The smile is quiet, private, and deeply significant: it suggests relief and perhaps a grim satisfaction that outliving an oppressor is itself a small victory. The writer\'s attitude is clear: the true measure of a life is not the grandeur of its funeral but its impact on those who had no power to resist it.',
      marks: 8,
    },
    {
      question: 'Evaluate how successfully the writer uses this extract to comment on Victorian values. Consider at least two specific techniques in your response.',
      lines: 8,
      modelAnswer:
        'The writer uses irony and structural contrast to mount a powerful critique of Victorian values, particularly the equation of wealth with respectability. The ironic gap between the funeral\'s grandeur and Gripe\'s actual character exposes a society that honoured wealth regardless of how it was obtained — the Reverend speaks of "Christian charity" for a man who showed none, highlighting institutional hypocrisy. The structural movement from inside the church (the wealthy family thinking about the will) to outside (the workers smiling at their release) literalises the class divide and implicitly asks the reader whose perspective matters more. The writer is particularly effective in their characterisation of Gripe\'s children, who "thought not of their father but of his will" — this suggests that Gripe\'s values (material accumulation above human connection) have been passed to the next generation, making the critique not just of one man but of a system. The extract could be read as a social realist commentary arguing that Victorian prosperity was built on exploitation, and that the rituals of respectability served to conceal rather than address this injustice.',
      marks: 8,
    },
  ],
  teacherNotes: [
    'This is the culminating lesson of the unit — it should feel like a genuine exam rehearsal.',
    'The extract is original and designed to be accessible while offering layers of meaning for more able students.',
    'During the timed writing, avoid intervening except to manage time. The goal is to simulate exam conditions.',
    'The self-assessment activity is crucial: students who can apply the mark scheme to their own work develop a much stronger understanding of what examiners reward.',
    'Use the reflections and self-assessments to plan targeted intervention for students who need additional support before the exam.',
    'Consider collecting the timed responses for formal marking and using them as a baseline assessment for the unit.',
  ],
  targetedSkills: [
    'AO1: Reading comprehension',
    'AO2: Language and structure analysis',
    'AO3: Context',
    'Timed writing under exam conditions',
    'Self-assessment',
    'Evaluative writing',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const nineteenthCenturyProseLessons: LessonPlan[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
];
