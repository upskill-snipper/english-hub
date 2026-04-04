import type { LessonPlan } from '@/types';

export const y9FullLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 1 — A Christmas Carol (Lessons 1-5)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 1: Victorian Context and Dickens' Purpose ─────────────────────
  {
    id: 'y9-01-victorian-context-dickens-purpose',
    title: "Victorian Context and Dickens' Purpose",
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Understand the social and historical context of Dickens' A Christmas Carol",
      'Explore how Dickens uses the novella as a vehicle for social criticism',
      'Identify key features of Victorian society including the Poor Law and workhouses',
      "Analyse how context shapes meaning and Dickens' authorial intent (9R.4)",
    ],
    successCriteria: [
      'I can describe at least three features of Victorian society relevant to A Christmas Carol',
      "I can explain Dickens' purpose in writing the novella using contextual evidence",
      'I can link specific events or characters to real Victorian social issues',
      "I can use the phrase 'Dickens intends to...' or 'This reflects...' to discuss authorial purpose",
    ],
    keywords: [
      'context',
      'Victorian',
      'workhouse',
      'Poor Law',
      'philanthropy',
      'social reform',
      'authorial intent',
      'allegory',
    ],
    starterActivity: {
      title: 'Victorian Britain: Myth vs Reality',
      duration: '8 minutes',
      instructions:
        'Display six statements about Victorian Britain (e.g. "Children as young as five worked in factories", "The rich paid a tax to help the poor"). Students sort statements into TRUE or FALSE on mini-whiteboards. Teacher reveals answers, correcting misconceptions. Introduce the concept that Dickens wrote A Christmas Carol to expose these realities to a middle-class audience who could afford to buy his book.',
      differentiation: {
        support:
          'Provide statements with images and a glossary of key terms (e.g. workhouse, philanthropist).',
        core: 'Students sort independently and justify one answer with reasoning.',
        stretch:
          'Students predict which of these issues Dickens might address in A Christmas Carol and explain why.',
      },
      resources: ['True/False statement slides', 'Mini-whiteboards', 'Victorian context glossary'],
    },
    mainActivities: [
      {
        title: "Contextual Investigation: Dickens' World",
        duration: '20 minutes',
        instructions:
          "Students receive an information pack containing short extracts about Victorian poverty, the 1834 Poor Law Amendment Act, Malthus' theory of population, and child labour. In groups of four, each student reads one source and becomes the 'expert'. Groups then jigsaw — each expert teaches their source to the group. Students complete a contextual fact-file recording key dates, facts, and how each issue might appear in A Christmas Carol.",
        differentiation: {
          support:
            'Provide pre-highlighted extracts with guiding questions for each source (e.g. "What does this tell us about how the poor were treated?").',
          core: 'Students complete the fact-file independently after the jigsaw discussion.',
          stretch:
            "Students evaluate which contextual factor had the greatest influence on Dickens' writing and justify their choice in a short paragraph.",
        },
        resources: [
          'Victorian context information pack (4 sources)',
          'Contextual fact-file worksheet',
          'Timeline of key events handout',
        ],
      },
      {
        title: "Linking Context to Text: Scrooge's 'Are there no prisons?'",
        duration: '20 minutes',
        instructions:
          "Read aloud the exchange between Scrooge and the charity collectors in Stave One. Students annotate the extract, identifying where Scrooge echoes real Victorian attitudes (e.g. Malthusian ideas, support for workhouses). Teacher models one annotation: 'When Scrooge says \"Are there no prisons?\", Dickens is reflecting the attitude of the wealthy who believed poverty was the fault of the poor.' Students then write two further annotations independently. Class discussion: Is Scrooge a villain, or a product of his society?",
        differentiation: {
          support:
            'Provide a pre-annotated version with one example completed and sentence starters for the remaining annotations.',
          core: 'Students produce two independent annotations linking text to context.',
          stretch:
            "Students write a paragraph arguing whether Dickens wants us to hate Scrooge or pity him at this point, using contextual evidence to support their view.",
        },
        resources: [
          'Stave One extract (charity collectors scene)',
          'Annotation guide with sentence starters',
          'Contextual reference sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: "Dickens' Purpose Statement",
      duration: '7 minutes',
      instructions:
        "Students complete the sentence: 'Dickens wrote A Christmas Carol in order to...' in no more than two sentences. Three students share their statements aloud. Teacher selects the strongest and models how to refine it further. Exit ticket: write one thing Dickens would change about Victorian society if he could.",
      differentiation: {
        support: "Provide a word bank: expose, criticise, persuade, educate, wealthy, responsibility.",
        core: 'Students write their purpose statement independently.',
        stretch:
          "Students compare Dickens' purpose with a modern writer or filmmaker who critiques society and note a similarity.",
      },
    },
    homework:
      "Research one Victorian social issue not covered in the lesson (e.g. education, sanitation, women's rights). Write a paragraph explaining how Dickens might have addressed this issue if he had included it in A Christmas Carol.",
    worksheetQuestions: [
      {
        question:
          'List three features of Victorian society that are relevant to understanding A Christmas Carol.',
        lines: 4,
        modelAnswer:
          '1) The 1834 Poor Law forced the destitute into workhouses where conditions were deliberately harsh. 2) Malthusian ideas suggested overpopulation was the cause of poverty and the poor should not be helped. 3) Child labour was widespread, with children working long hours in dangerous factories and mines.',
        marks: 3,
      },
      {
        question:
          "Explain why Dickens wrote A Christmas Carol. What was his purpose? Use the phrase 'Dickens intends to...' in your answer.",
        lines: 5,
        modelAnswer:
          "Dickens intends to expose the callous indifference of the wealthy towards the poor and to argue that everyone has a social responsibility to help those less fortunate. He wrote the novella in 1843, a time when the gap between rich and poor was extreme. By transforming Scrooge from a miser into a generous man, Dickens intends to show his middle-class readers that change is possible and morally necessary.",
        marks: 4,
      },
      {
        question:
          'Read Scrooge\'s line: "Are there no prisons? Are there no workhouses?" What does this reveal about his attitude towards the poor? How does this reflect real Victorian attitudes?',
        lines: 6,
        modelAnswer:
          "Scrooge's rhetorical questions reveal his belief that existing institutions like prisons and workhouses are sufficient to deal with poverty. He sees no personal responsibility to help. This reflects the real attitude of many wealthy Victorians who supported the Poor Law and believed poverty was a moral failing. Dickens uses Scrooge as a mouthpiece for these views so he can systematically dismantle them through the novella.",
        marks: 5,
      },
      {
        question:
          "How does understanding the Victorian context change the way we read A Christmas Carol? Write a paragraph explaining why context matters when studying this text.",
        lines: 8,
        modelAnswer:
          "Understanding Victorian context transforms A Christmas Carol from a simple ghost story into a powerful piece of social criticism. When we know that workhouses deliberately separated families and fed inmates barely enough to survive, Scrooge's dismissal of the poor becomes far more disturbing. Similarly, knowing that Dickens himself experienced poverty as a child when his father was imprisoned for debt adds personal urgency to his message. Context allows us to see that Dickens is not just telling a story but making an argument — that the wealthy have a moral duty to help those in need. Without this knowledge, a modern reader might miss the anger and purpose behind the text.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'This is the opening lesson for the A Christmas Carol unit. Establishing strong contextual knowledge here will support all subsequent analytical writing.',
      'Consider creating a classroom display with a Victorian timeline that can be referenced throughout the unit.',
      'The jigsaw activity works best with mixed-ability groupings so that stronger readers can support weaker ones during the expert phase.',
      "Avoid spending too long on context without connecting it to the text — always bring discussion back to Dickens' choices.",
    ],
    targetedSkills: [
      '9R.4',
      'Contextual Understanding',
      'Authorial Intent',
      'Evidence-Based Discussion',
    ],
  },

  // ── Lesson 2: Scrooge's Transformation — Language Analysis ───────────────
  {
    id: 'y9-02-scrooge-transformation-language',
    title: "Scrooge's Transformation — Language Analysis",
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse how Dickens uses language to present Scrooge at the beginning and end of the novella (9R.3)",
      'Identify and explore the effects of specific word choices, imagery, and figurative language',
      "Track Scrooge's character arc through close language analysis (9R.5)",
      "Develop conceptual vocabulary for discussing Dickens' methods",
    ],
    successCriteria: [
      'I can identify at least three language techniques Dickens uses to describe Scrooge in Stave One',
      'I can analyse the connotations of specific words and explain their effect on the reader',
      "I can compare Dickens' language choices in Stave One and Stave Five to show Scrooge's transformation",
      'I can write an analytical paragraph exploring how language presents character change',
    ],
    keywords: [
      'connotation',
      'imagery',
      'simile',
      'metaphor',
      'pathetic fallacy',
      'semantic field',
      'transformation',
      'juxtaposition',
    ],
    starterActivity: {
      title: 'Cold vs Warm: Word Association',
      duration: '7 minutes',
      instructions:
        'Display two columns on the board: COLD and WARM. Students brainstorm words and phrases associated with each. Teacher reveals that Dickens uses a semantic field of cold to describe Scrooge in Stave One and warmth in Stave Five. Students predict why Dickens makes this choice. Introduce the idea that language reflects character and that tracking language patterns is a key analytical skill.',
      differentiation: {
        support: 'Provide a word bank of cold/warm vocabulary to sort into columns.',
        core: 'Students generate their own words and make a prediction about why Dickens uses temperature imagery.',
        stretch:
          'Students consider what the shift from cold to warm symbolises about Scrooge and Victorian society more broadly.',
      },
      resources: ['Cold/Warm columns slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Close Language Analysis: Stave One Description of Scrooge',
        duration: '20 minutes',
        instructions:
          'Provide students with the Stave One description of Scrooge ("Oh! But he was a tight-fisted hand at the grindstone..."). Teacher models close reading of the first sentence, zooming into individual word choices: "tight-fisted" — connotations of greed, control; "squeezing, wrenching, grasping" — the list of aggressive verbs creates a sense of relentless cruelty. Students then work in pairs to annotate three further quotations from the extract, identifying technique, connotation, and effect on the reader. Share findings using a class annotation on the board.',
        differentiation: {
          support:
            'Provide a partially completed annotation table with the technique column filled in; students add connotation and effect.',
          core: 'Students annotate independently using the framework: technique — connotation — effect.',
          stretch:
            "Students consider how Dickens' description makes Scrooge seem less than human and link this to the theme of isolation.",
        },
        resources: [
          'Stave One extract (Scrooge description)',
          'Language analysis annotation table',
          'Technique reference sheet',
        ],
      },
      {
        title: 'Comparative Analysis: Stave One vs Stave Five',
        duration: '22 minutes',
        instructions:
          'Provide the Stave Five description of the transformed Scrooge ("He went to church, and walked about the streets..."). Students create a comparison table tracking language choices across both staves. For each pair of quotations, students write a sentence explaining the shift. Teacher models: "In Stave One, Dickens describes Scrooge as \'solitary as an oyster\', suggesting he is closed off and impenetrable. However, in Stave Five, Scrooge \'patted children on the head\', which conveys openness and tenderness." Students then write one full PEEL paragraph comparing a language feature across the two staves.',
        differentiation: {
          support:
            'Provide a pre-populated comparison table with Stave One quotations already filled in; students find the Stave Five equivalents and write about the contrast using sentence starters.',
          core: 'Students complete the comparison table and write a PEEL paragraph independently.',
          stretch:
            "Students write two paragraphs and evaluate which stave's language is more effective and why, considering Dickens' purpose.",
        },
        resources: [
          'Stave Five extract (transformed Scrooge)',
          'Comparison table template',
          'PEEL paragraph frame',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Transformation Tracker',
      duration: '6 minutes',
      instructions:
        'Students draw a simple line graph on their mini-whiteboard with "Stave" on the x-axis and "Warmth/Humanity" on the y-axis. They plot where they think Scrooge sits at the end of each stave based on what they know so far. Compare graphs with a partner. Teacher takes a class snapshot and previews that future lessons will track this journey in detail.',
      differentiation: {
        support: 'Provide a pre-drawn axis with labels; students just plot the points.',
        core: 'Students draw and plot independently, justifying one point with a quotation.',
        stretch:
          'Students annotate their graph with brief quotations at each plotted point to evidence their placement.',
      },
    },
    homework:
      'Find three quotations from Stave Two that show Scrooge beginning to change. For each quotation, write one sentence explaining what it reveals about his emotions.',
    worksheetQuestions: [
      {
        question:
          'Identify two language techniques Dickens uses to describe Scrooge in Stave One. For each, explain the effect on the reader.',
        lines: 6,
        modelAnswer:
          'Dickens uses a list of verbs — "squeezing, wrenching, grasping, scraping, clutching" — which creates a relentless rhythm that makes Scrooge seem mechanically cruel, as if he cannot stop exploiting others. Dickens also uses the simile "solitary as an oyster", which suggests Scrooge is sealed off from humanity, hard-shelled, and unwilling to open up to others. This makes the reader see him as self-imposed isolated and cold.',
        marks: 4,
      },
      {
        question:
          'What is a "semantic field"? Identify the semantic field Dickens uses to describe Scrooge in Stave One and explain why he uses it.',
        lines: 5,
        modelAnswer:
          'A semantic field is a group of words that share a common theme or meaning. In Stave One, Dickens uses a semantic field of cold: "frozen", "icy", "cold within him". He uses this to reflect Scrooge\'s emotional state — his lack of warmth, compassion, and human connection. The cold imagery makes Scrooge seem almost inhuman.',
        marks: 4,
      },
      {
        question:
          "Write a PEEL paragraph comparing how Dickens presents Scrooge in Stave One and Stave Five. Focus on one language feature that changes.",
        lines: 10,
        modelAnswer:
          'Dickens uses contrasting imagery to demonstrate the extent of Scrooge\'s transformation. In Stave One, Scrooge is described as carrying "his own low temperature always about with him", suggesting his coldness is a permanent, defining characteristic that affects everyone around him. However, in Stave Five, Dickens writes that Scrooge "was so fluttered and so glowing with his good intentions", with the adjective "glowing" directly reversing the earlier cold imagery to suggest warmth, energy, and radiating goodness. This dramatic shift in language reflects Dickens\' message that even the most hardened individuals can be redeemed, reinforcing his broader purpose of encouraging his readers to embrace generosity and compassion.',
        marks: 6,
      },
      {
        question:
          'Dickens writes that Scrooge "carried his own low temperature always about with him." Analyse this quotation in detail, exploring connotations and what it reveals about Scrooge.',
        lines: 8,
        modelAnswer:
          'The verb "carried" suggests that Scrooge\'s coldness is something he transports with him wherever he goes, implying it is inescapable and ever-present. The phrase "his own" makes the coldness personal and self-created, hinting that Scrooge has chosen this state rather than having it imposed upon him. "Low temperature" functions as a metaphor for emotional detachment — he lacks the warmth of human feeling. The adverb "always" reinforces the idea that this is not temporary but a defining, permanent trait. Dickens uses this to present Scrooge as someone who actively repels human connection.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Ensure students have access to the full Stave One and Stave Five extracts, not just isolated quotations.',
      'The comparison activity is crucial for building the skill of tracking change across a text — this is a key assessment skill.',
      'Model the difference between identifying a technique and analysing its effect. Push students beyond "this shows" to "this suggests/implies/conveys".',
      'Collect the PEEL paragraphs to assess progress and identify students who need additional support with analytical writing.',
    ],
    targetedSkills: [
      '9R.3',
      '9R.5',
      'Language Analysis',
      'Comparative Writing',
      'Close Reading',
      'PEEL Paragraphs',
    ],
  },

  // ── Lesson 3: Themes — Redemption and Responsibility ─────────────────────
  {
    id: 'y9-03-themes-redemption-responsibility',
    title: 'Themes: Redemption and Responsibility',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Identify and explore the themes of redemption and social responsibility in A Christmas Carol (9R.4)',
      'Analyse how Dickens develops these themes through character, structure, and events',
      "Evaluate the significance of these themes in relation to Dickens' purpose (9R.5)",
      'Construct analytical paragraphs that link themes to context and authorial intent',
    ],
    successCriteria: [
      'I can define redemption and social responsibility and explain their relevance to the novella',
      'I can identify at least three moments where these themes are presented',
      'I can analyse how Dickens uses character and plot to convey his message about responsibility',
      "I can write a paragraph linking a theme to Dickens' purpose using evidence",
    ],
    keywords: [
      'redemption',
      'responsibility',
      'morality',
      'transformation',
      'atonement',
      'compassion',
      'social conscience',
      'allegory',
    ],
    starterActivity: {
      title: 'What Does Redemption Mean?',
      duration: '7 minutes',
      instructions:
        'Display the word REDEMPTION in large letters. Students discuss in pairs: What does it mean? Can you think of examples from films, books, or real life where someone is "redeemed"? Teacher takes feedback and co-constructs a working definition: "Being saved from sin, error, or wrongdoing through a journey of change." Students then predict: what must Scrooge be redeemed from, and how might Dickens achieve this?',
      differentiation: {
        support: 'Provide three film/book examples of redemption for students to discuss and compare.',
        core: 'Students generate their own examples and co-construct the definition.',
        stretch:
          'Students consider whether redemption requires suffering and link this to what Scrooge experiences.',
      },
      resources: ['Redemption definition slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Theme Tracking: Responsibility Through the Staves',
        duration: '20 minutes',
        instructions:
          "Working in pairs, students receive a theme tracking grid with five rows (one per stave). For each stave, students identify a key moment, quotation, and explanation of how the theme of responsibility or redemption is presented. Teacher models Stave One: Key moment — Scrooge refuses charity collectors; Quotation — 'Are there no prisons?'; Explanation — Scrooge rejects personal responsibility, echoing Malthusian attitudes. Students complete the remaining staves using their texts and notes from previous lessons.",
        differentiation: {
          support:
            'Provide key moments pre-identified for each stave; students find quotations and write explanations.',
          core: 'Students complete the tracking grid independently with quotations and analysis.',
          stretch:
            "Students add a column evaluating how Dickens' presentation of responsibility intensifies across the staves and why.",
        },
        resources: [
          'Theme tracking grid worksheet',
          'A Christmas Carol text',
          'Previous lesson notes',
        ],
      },
      {
        title: 'Analytical Writing: Linking Theme to Purpose',
        duration: '22 minutes',
        instructions:
          "Students write two PEEL paragraphs responding to: 'How does Dickens present the theme of responsibility in A Christmas Carol?' Teacher models a strong opening: 'Dickens presents responsibility as a moral obligation that the wealthy must accept.' Students plan their paragraphs using a planning frame, select quotations from their theme tracking grid, and write. After 15 minutes, peer assessment using 'Two Stars and a Wish' focusing on: Does the paragraph link to context? Does it discuss Dickens' purpose?",
        differentiation: {
          support:
            "Provide a writing frame with sentence starters and a completed example paragraph to use as a model.",
          core: 'Students write two paragraphs independently and peer assess.',
          stretch:
            "Students write a third paragraph evaluating which stave most powerfully presents the theme of responsibility and justify their choice with reference to Dickens' methods.",
        },
        resources: [
          'Essay question slide',
          'PEEL planning frame',
          'Peer assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: "Dickens' Message in One Sentence",
      duration: '6 minutes',
      instructions:
        "Students complete: 'Through A Christmas Carol, Dickens teaches his readers that...' in one powerful sentence. Volunteers share. Teacher selects the strongest and annotates it on the board, highlighting how it links theme, context, and purpose. Students copy the strongest version into their notes as a revision reference.",
      differentiation: {
        support: "Provide a word bank: duty, wealthy, compassion, change, society, neglect.",
        core: 'Students write their sentence independently and share.',
        stretch:
          'Students write two versions — one from a Victorian perspective and one from a modern perspective — and compare what has or has not changed.',
      },
    },
    homework:
      "Write a paragraph explaining how the Ghost of Christmas Present's revealing of Ignorance and Want (Stave Three) connects to the theme of social responsibility. Include at least one quotation and reference to Victorian context.",
    worksheetQuestions: [
      {
        question:
          'Define "redemption" and "social responsibility" in your own words. Give one example of each from A Christmas Carol.',
        lines: 5,
        modelAnswer:
          "Redemption means being saved or forgiven after doing wrong, usually through a process of change. In A Christmas Carol, Scrooge is redeemed when he wakes on Christmas morning and commits to being generous and kind. Social responsibility means the idea that individuals have a duty to contribute to the wellbeing of society. Dickens shows this when Scrooge donates money to the charity collectors and raises Bob Cratchit's salary.",
        marks: 4,
      },
      {
        question:
          'Identify two key moments in the novella where the theme of responsibility is presented. For each, explain what Dickens is saying about responsibility.',
        lines: 6,
        modelAnswer:
          'In Stave One, Marley\'s ghost tells Scrooge that "mankind was my business" — this reveals that Marley failed to accept his responsibility to help others and is now suffering for eternity. Dickens is warning readers that neglecting social duty has consequences. In Stave Three, the Ghost of Christmas Present reveals two children, Ignorance and Want, hidden beneath his robe, warning that "most of all beware this boy" (Ignorance). Dickens is arguing that society\'s failure to educate and care for the poor will lead to its destruction.',
        marks: 6,
      },
      {
        question:
          'How does Dickens use the structure of the novella (five staves) to develop the theme of redemption? Consider the journey Scrooge takes.',
        lines: 8,
        modelAnswer:
          'Dickens structures the novella in five staves — like a musical composition — to create a satisfying arc of redemption. Stave One establishes Scrooge as unredeemed: cold, miserly, and isolated. Staves Two through Four function as the redemptive journey, with each ghost forcing Scrooge to confront a different aspect of his failings — his past loneliness, his present neglect, and his future death. The structural progression from past to present to future creates a sense of inevitability: Scrooge must change or face damnation. Stave Five provides the resolution, showing a transformed Scrooge who embodies the values Dickens champions. This five-part structure mirrors a moral argument, moving from problem to evidence to solution.',
        marks: 6,
      },
      {
        question:
          "Do you think Dickens' message about responsibility is still relevant today? Explain your view with reference to the text and modern society.",
        lines: 8,
        modelAnswer:
          "Dickens' message remains powerfully relevant. In the novella, he criticises those who believe poverty is the fault of the poor and that institutional solutions like workhouses are sufficient. Today, debates around food banks, homelessness, and welfare cuts echo the same tensions. Scrooge's question 'Are there no prisons?' mirrors modern arguments that the poor should simply work harder. Dickens' insistence that 'mankind was my business' — that we all have a duty to care for one another — challenges readers in any era to examine their own compassion and generosity.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'The theme tracking grid is a valuable revision resource — encourage students to keep it in their folders.',
      'When modelling analytical writing, emphasise the importance of the "so what?" question: why does this theme matter to Dickens and his audience?',
      'Ignorance and Want is a rich passage for discussion — consider displaying an illustration of this scene for visual learners.',
      'The homework focuses on Stave Three, which bridges lessons on themes and conceptual interpretation.',
    ],
    targetedSkills: [
      '9R.4',
      '9R.5',
      'Thematic Analysis',
      'Analytical Writing',
      'Contextual Linking',
    ],
  },

  // ── Lesson 4: Conceptual Interpretation ──────────────────────────────────
  {
    id: 'y9-04-conceptual-interpretation',
    title: 'Conceptual Interpretation — "This suggests... which reflects..."',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand what conceptual interpretation means and why it elevates analytical writing (9R.5)',
      'Move beyond surface-level analysis to explore deeper meanings and abstract ideas',
      "Use the framework 'This suggests... which reflects...' to develop conceptual responses",
      'Apply conceptual thinking to key extracts from A Christmas Carol',
    ],
    successCriteria: [
      'I can explain the difference between a literal interpretation and a conceptual interpretation',
      "I can use 'This suggests... which reflects...' to develop a deeper reading of a quotation",
      'I can link my interpretation to a broader concept such as morality, humanity, or social justice',
      'I can write an analytical paragraph that reaches a conceptual level of interpretation',
    ],
    keywords: [
      'conceptual',
      'interpretation',
      'abstract',
      'symbolism',
      'microcosm',
      'allegory',
      'universal truth',
      'deeper meaning',
    ],
    starterActivity: {
      title: 'Surface vs Depth',
      duration: '8 minutes',
      instructions:
        'Display two responses to the same quotation ("the cold within him froze his old features"). Response A: "This shows Scrooge is cold." Response B: "This suggests that Scrooge\'s emotional detachment has become so embedded that it has physically manifested, reflecting Dickens\' belief that moral decay corrupts the entire self." Students discuss: what makes Response B stronger? Teacher introduces the concept of moving from WHAT to SO WHAT — from identifying to interpreting. Introduce the sentence frame: "This suggests... which reflects...".',
      differentiation: {
        support: 'Provide a highlighted version of Response B showing which parts make it conceptual.',
        core: 'Students articulate why Response B is stronger in their own words.',
        stretch:
          "Students write a third response that is even more conceptual, perhaps linking to Dickens' wider body of work or Victorian attitudes.",
      },
      resources: ['Comparison slide (Response A vs B)', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Building Conceptual Interpretations',
        duration: '20 minutes',
        instructions:
          'Students receive five quotations from A Christmas Carol on a worksheet. For each, they complete three levels of analysis: Level 1 — What does this literally mean? Level 2 — What does this suggest about the character/theme? Level 3 — What broader concept or idea does this reflect? Teacher models all three levels for the first quotation, then students work in pairs on the remaining four. Each pair shares their strongest Level 3 interpretation with the class.',
        differentiation: {
          support:
            'Provide Levels 1 and 2 pre-completed for three of the five quotations; students focus on reaching Level 3.',
          core: 'Students complete all three levels for each quotation independently.',
          stretch:
            'Students identify connections between the Level 3 interpretations across all five quotations — what universal message emerges?',
        },
        resources: [
          'Five quotations worksheet with three-level framework',
          'Model example slide',
          'Concept vocabulary reference sheet',
        ],
      },
      {
        title: 'Writing a Conceptual Analytical Paragraph',
        duration: '20 minutes',
        instructions:
          'Students choose one quotation from the previous activity and write a full analytical paragraph that reaches a conceptual level. Teacher provides a structure: Point (make a claim about Dickens\' intention) — Evidence (embed a quotation) — Analyse (explore language choices) — Conceptualise (use "This suggests... which reflects..." to reach a deeper meaning) — Link (connect to theme or context). After writing, students highlight the conceptual sentence in their paragraph in a different colour. Peer review: does the paragraph reach beyond the surface?',
        differentiation: {
          support:
            'Provide a paragraph scaffold with the Point and Evidence sections completed; students write the Analyse, Conceptualise, and Link sections.',
          core: 'Students write a full paragraph independently using the structure.',
          stretch:
            'Students write a second paragraph that builds on the first, creating a sustained chain of conceptual reasoning across two paragraphs.',
        },
        resources: [
          'Paragraph structure guide',
          'Coloured highlighters',
          'Peer review checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Conceptual Interpretation Challenge',
      duration: '7 minutes',
      instructions:
        'Teacher displays a new quotation from A Christmas Carol that has not been studied today. Students have three minutes to write the most conceptual one-sentence interpretation they can. Volunteers share and the class votes on which reaches the deepest level. Teacher annotates the winning response on the board, labelling the conceptual elements.',
      differentiation: {
        support: 'Provide the sentence frame: "This suggests... which reflects Dickens\' belief that...".',
        core: 'Students write their interpretation independently.',
        stretch:
          'Students write their interpretation without the sentence frame, using their own academic phrasing.',
      },
    },
    homework:
      'Choose a quotation from Stave Four (the Ghost of Christmas Yet to Come). Write a paragraph that includes at least one conceptual interpretation using "This suggests... which reflects...".',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between a literal interpretation and a conceptual interpretation. Give an example of each using a quotation from A Christmas Carol.',
        lines: 6,
        modelAnswer:
          'A literal interpretation explains the surface meaning of a quotation — what it directly says. A conceptual interpretation goes deeper to explore the abstract ideas, values, or universal truths it represents. For example, the quotation "old Marley was as dead as a door-nail" — literally, this means Marley has died. Conceptually, this might suggest that moral death (a life lived without compassion) is absolute and irreversible, reflecting Dickens\' warning that failing to change has permanent consequences.',
        marks: 4,
      },
      {
        question:
          'Read the following quotation: "The cold within him froze his old features." Using the framework "This suggests... which reflects...", write a conceptual interpretation.',
        lines: 6,
        modelAnswer:
          'This suggests that Scrooge\'s emotional coldness is not merely a personality trait but a force that has physically altered him, consuming his identity. Which reflects Dickens\' belief that moral corruption does not remain internal — it shapes how a person is perceived and experienced by others. The cold is both literal (his physical appearance) and metaphorical (his lack of humanity), suggesting that when individuals reject compassion, they become something less than fully human.',
        marks: 5,
      },
      {
        question:
          'Why does Dickens present Scrooge\'s bed curtains being stolen in Stave Four? Write a conceptual interpretation of this moment.',
        lines: 8,
        modelAnswer:
          "The theft of Scrooge's bed curtains after his death suggests that in the absence of human connection and generosity, a person's possessions become meaningless — they are simply commodities to be picked over by strangers. This reflects Dickens' argument that material wealth without moral worth is ultimately hollow. The bed curtains, which should represent comfort and privacy, are stripped away just as Scrooge stripped warmth and dignity from others in life. Conceptually, this moment serves as a warning that those who hoard wealth while ignoring the suffering of others will be remembered not with love but with indifference, their legacy reduced to whatever can be sold for profit.",
        marks: 6,
      },
      {
        question:
          "Write a full analytical paragraph about the quotation: 'Mankind was my business.' Ensure your paragraph reaches a conceptual level.",
        lines: 10,
        modelAnswer:
          'Dickens uses Marley\'s ghost to articulate the novella\'s central moral message: "Mankind was my business." The noun "mankind" is deliberately inclusive and universal, encompassing all of humanity rather than a specific group, which elevates Marley\'s regret from a personal failing to a universal truth. The word "business" is particularly powerful because it directly repurposes the language of commerce that both Marley and Scrooge lived by — the very thing they devoted their lives to (business as profit) is revealed to be a corruption of their true purpose (business as duty to others). This suggests that Dickens is arguing capitalism without compassion is not just selfish but fundamentally inhuman, which reflects his broader belief that the Victorian obsession with profit had caused society to forget its most basic moral obligations. The ghost\'s chains — forged in life — symbolise the weight of neglected responsibility, warning that moral debts, unlike financial ones, can never be repaid after death.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Conceptual interpretation is the skill that separates competent analytical writing from sophisticated analytical writing. Spend time on the modelling stage.',
      'The "This suggests... which reflects..." frame is a scaffold — encourage stronger students to develop their own academic phrasing.',
      'Consider displaying a "Levels of Analysis" poster: Level 1 (Identifies), Level 2 (Explains), Level 3 (Conceptualises).',
      "This lesson prepares students for the assessment in Lesson 5. Ensure they practise the skill in a low-stakes environment before the timed essay.",
    ],
    targetedSkills: [
      '9R.5',
      'Conceptual Interpretation',
      'Abstract Thinking',
      'Analytical Writing',
      'Academic Vocabulary',
    ],
  },

  // ── Lesson 5: Assessment — Sustained Analytical Essay ────────────────────
  {
    id: 'y9-05-assessment-analytical-essay-acc',
    title: 'Assessment: Sustained Analytical Essay',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Demonstrate understanding of A Christmas Carol through a sustained analytical essay (9R.1-9R.7)',
      'Use evidence, analysis, and contextual knowledge to support a clear argument (9W.2)',
      'Write with accuracy, fluency, and appropriate academic register (9W.5)',
      'Apply conceptual interpretation to elevate the quality of analysis',
    ],
    successCriteria: [
      'I can plan and write a structured essay with an introduction, analytical paragraphs, and a conclusion',
      'I can embed quotations and analyse language, structure, and form',
      'I can link my analysis to Victorian context and Dickens\' purpose',
      'I can include at least one conceptual interpretation using "This suggests... which reflects..."',
    ],
    keywords: [
      'essay',
      'argument',
      'thesis',
      'sustained',
      'analytical',
      'register',
      'coherence',
      'conclusion',
    ],
    starterActivity: {
      title: 'Planning Under Pressure',
      duration: '10 minutes',
      instructions:
        'Reveal the essay question: "How does Dickens present the theme of redemption in A Christmas Carol?" Students have 10 minutes to plan using a planning grid: Introduction (thesis statement), Paragraph 1 (Stave One — before redemption), Paragraph 2 (turning point — which stave and why?), Paragraph 3 (Stave Five — after redemption), Conclusion (link to Dickens\' purpose and context). Teacher circulates to check plans and offer brief guidance.',
      differentiation: {
        support:
          'Provide a pre-structured planning grid with paragraph focus areas and space for quotations. Include a quotation bank.',
        core: 'Students use the planning grid independently.',
        stretch:
          'Students plan a fourth analytical paragraph exploring a counter-argument or alternative interpretation.',
      },
      resources: ['Essay question slide', 'Planning grid worksheet', 'Quotation bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'Timed Essay Writing',
        duration: '40 minutes',
        instructions:
          'Students write their essay in timed conditions. The expectation is three to four PEEL paragraphs with an introduction and conclusion. Teacher displays a countdown timer and offers a five-minute warning before the end. Students should aim for: embedded quotations (not free-standing), analysis of language and/or structure, at least one reference to context, and at least one conceptual interpretation. Silence is maintained throughout. Teacher circulates to support individuals discreetly where needed.',
        differentiation: {
          support:
            'Provide sentence starters for each paragraph and a word bank of key vocabulary. Allow access to the quotation bank and a brief contextual reference sheet.',
          core: 'Students write independently with access to the text only.',
          stretch:
            'Students aim for sophisticated academic register, multiple conceptual interpretations, and a nuanced conclusion that considers alternative readings.',
        },
        resources: [
          'Lined essay paper or exercise books',
          'A Christmas Carol text',
          'Countdown timer display',
          'Sentence starters (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Reflection',
      duration: '5 minutes',
      instructions:
        "Students re-read their essay and use a traffic light system to self-assess against four criteria: Use of evidence (quotations embedded), Analysis of language/structure, Reference to context, Conceptual interpretation. Students write one sentence identifying their strongest element and one target for improvement. Teacher collects essays for formal marking.",
      differentiation: {
        support: 'Provide a checklist version of the four criteria with tick boxes.',
        core: 'Students self-assess using traffic lights and write their target.',
        stretch:
          'Students identify the single sentence in their essay they are most proud of and explain why it is effective.',
      },
    },
    homework:
      'Reflect on the assessment. Write three bullet points: What went well? What was difficult? What will you do differently next time?',
    worksheetQuestions: [
      {
        question:
          'How does Dickens present the theme of redemption in A Christmas Carol? Write a sustained analytical essay. You should consider: how Scrooge is presented before his redemption, the turning point in his journey, how he is presented after his transformation, and how Dickens uses the theme of redemption to convey his message to Victorian readers.',
        lines: 40,
        modelAnswer:
          "This is a formal assessment question. A strong response will include: an introduction with a clear thesis statement about redemption; at least three analytical paragraphs using PEEL structure with embedded quotations; analysis of Dickens' language choices and their effects; references to Victorian context (e.g. the Poor Law, Malthusian economics, workhouses); at least one conceptual interpretation that moves beyond surface-level analysis; and a conclusion that links the theme of redemption to Dickens' authorial purpose. Top-level responses will track a clear argument across paragraphs, use sophisticated academic vocabulary, and consider how structure (the five-stave format) contributes to the theme of redemption.",
        marks: 30,
      },
    ],
    teacherNotes: [
      'This is a formal assessment lesson. Ensure students understand the expectations before the timer starts.',
      'Consider providing the essay question at the end of the previous lesson so students can begin thinking about their response.',
      'Mark using the school\'s KS3 assessment criteria or a bespoke rubric covering: understanding, analysis, context, conceptual thinking, and written accuracy.',
      'Use the self-assessment data to identify common areas for improvement and plan a feedback lesson.',
      'Students who struggle significantly may benefit from a scaffolded re-draft opportunity.',
    ],
    targetedSkills: [
      '9R.1',
      '9R.2',
      '9R.3',
      '9R.4',
      '9R.5',
      '9R.6',
      '9R.7',
      '9W.2',
      '9W.5',
      'Essay Writing',
      'Timed Conditions',
      'Self-Assessment',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 2 — Transactional & Creative Writing (Lessons 6-10)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 6: Writing for Purpose — Articles and Speeches ────────────────
  {
    id: 'y9-06-writing-purpose-articles-speeches',
    title: 'Writing for Purpose — Articles and Speeches',
    text: 'Transactional Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand how purpose, audience, and form shape transactional writing (9W.1)',
      'Identify the key conventions of articles and speeches (9W.8)',
      'Analyse how professional writers adapt their style for different purposes',
      'Plan and begin drafting a piece of transactional writing',
    ],
    successCriteria: [
      'I can identify the purpose, audience, and form of a given transactional writing task',
      'I can list at least four conventions of either an article or a speech',
      'I can explain how language choices differ when writing to argue, persuade, inform, or advise',
      'I can plan a transactional piece using a structured planning method',
    ],
    keywords: [
      'purpose',
      'audience',
      'form',
      'convention',
      'register',
      'headline',
      'rhetoric',
      'tone',
    ],
    starterActivity: {
      title: 'PAF Detective',
      duration: '7 minutes',
      instructions:
        'Display four short extracts from different transactional texts (a newspaper article, a speech, a letter to a headteacher, and an advice column). Students identify the Purpose, Audience, and Form (PAF) of each. Teacher reveals answers and discusses how PAF shapes the writer\'s choices — vocabulary, tone, structure, level of formality. Introduce the acronym PAF as a planning tool.',
      differentiation: {
        support: 'Provide a PAF table with the Form column pre-completed; students identify Purpose and Audience.',
        core: 'Students identify all three PAF elements independently for each extract.',
        stretch:
          'Students rank the extracts from most to least formal and explain what language features create formality.',
      },
      resources: ['Four transactional extract slides', 'PAF table handout'],
    },
    mainActivities: [
      {
        title: 'Conventions Investigation: Articles vs Speeches',
        duration: '18 minutes',
        instructions:
          'Students receive a model article and a model speech on the same topic (e.g. "Should school uniforms be abolished?"). In pairs, they create a Venn diagram identifying the conventions unique to articles (headline, subheadings, short paragraphs, expert quotations), unique to speeches (direct address, rhetorical questions, repetition, anecdotes, call to action), and shared (persuasive language, statistics, emotive vocabulary). Teacher leads a class discussion to compile a definitive conventions list.',
        differentiation: {
          support:
            'Provide a partially completed Venn diagram with three conventions already placed; students add the rest.',
          core: 'Students complete the Venn diagram independently.',
          stretch:
            'Students evaluate which form is more effective for the given topic and justify their answer.',
        },
        resources: [
          'Model article handout',
          'Model speech handout',
          'Venn diagram template',
          'Conventions reference sheet',
        ],
      },
      {
        title: 'Planning a Transactional Piece',
        duration: '22 minutes',
        instructions:
          'Students choose one of three tasks: 1) Write an article for a school magazine arguing that homework should be abolished. 2) Write a speech to your year group persuading them to support a charity fundraiser. 3) Write an article for a local newspaper advising teenagers on managing screen time. Students identify PAF, then plan using a structured grid: Opening hook, Key arguments (three), Evidence/examples for each, Counter-argument, Closing statement. After planning, students write their opening paragraph. Teacher models a strong article opening with a provocative headline and an engaging first line.',
        differentiation: {
          support:
            'Provide a scaffolded planning grid with sentence starters for each section and a model opening paragraph to adapt.',
          core: 'Students plan independently and write their opening paragraph.',
          stretch:
            'Students write two different openings (one for an article, one for a speech on the same topic) and evaluate which is more engaging and why.',
        },
        resources: [
          'Task choice slide',
          'Structured planning grid',
          'Model opening paragraph examples',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Opening Paragraph Showcase',
      duration: '8 minutes',
      instructions:
        'Three volunteers read their opening paragraphs aloud. The class uses their conventions checklist to identify which features have been used. Teacher annotates one paragraph under the visualiser, highlighting strengths and one area for improvement. Students write one target for their next draft.',
      differentiation: {
        support: 'Students use the conventions checklist to tick off features they hear.',
        core: 'Students identify conventions and suggest one improvement.',
        stretch:
          'Students evaluate the effectiveness of the opening and suggest a more impactful alternative first sentence.',
      },
    },
    homework:
      'Complete a full first draft of your transactional piece (article or speech). Aim for at least 400 words and ensure you include at least four conventions of your chosen form.',
    worksheetQuestions: [
      {
        question: 'What does PAF stand for? Why is it important to identify PAF before you start writing?',
        lines: 4,
        modelAnswer:
          'PAF stands for Purpose, Audience, and Form. It is important because these three elements determine every writing choice you make — your vocabulary, tone, structure, and level of formality. Identifying PAF ensures your writing is appropriate and effective for its intended context.',
        marks: 3,
      },
      {
        question: 'List four conventions of a newspaper article and four conventions of a speech.',
        lines: 6,
        modelAnswer:
          'Article: 1) Headline, 2) Subheadings to break up sections, 3) Short paragraphs for readability, 4) Expert quotations for authority. Speech: 1) Direct address to the audience ("Ladies and gentlemen..."), 2) Rhetorical questions to engage listeners, 3) Rule of three for emphasis, 4) A clear call to action at the end.',
        marks: 4,
      },
      {
        question:
          'Read the following opening: "Homework. We all hate it. But should schools actually ban it?" Identify three techniques used and explain their effects.',
        lines: 6,
        modelAnswer:
          'The writer uses a minor sentence ("Homework.") for dramatic impact, forcing the reader to stop and focus on the single word. The pronoun "we" creates inclusivity and assumes the reader shares the writer\'s view. The rhetorical question ("But should schools actually ban it?") engages the reader by making them think and want to read on to discover the answer.',
        marks: 6,
      },
      {
        question:
          'Write an opening paragraph for a speech persuading your school to introduce a four-day school week. Include at least three speech conventions.',
        lines: 10,
        modelAnswer:
          "A strong response will include direct address, a rhetorical question, a statistic or anecdote, an inclusive pronoun, and an engaging hook. For example: the student might open with a provocative question, use 'we' and 'our' to build solidarity, include a shocking statistic about student wellbeing, and establish a clear argument within the first paragraph.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'This is the opening lesson for the transactional and creative writing unit. Establish clear expectations about PAF as a planning tool.',
      'The model texts can be adapted to suit current affairs or topics relevant to your students.',
      'Encourage students to keep a "conventions checklist" in their folders that they can reference throughout the unit.',
      'The homework draft will form the basis of Lesson 7, so ensure all students complete it.',
    ],
    targetedSkills: [
      '9W.1',
      '9W.8',
      'Transactional Writing',
      'Planning',
      'Audience Awareness',
      'Form Conventions',
    ],
  },

  // ── Lesson 7: Argument and Persuasion ────────────────────────────────────
  {
    id: 'y9-07-argument-persuasion',
    title: 'Argument and Persuasion',
    text: 'Transactional Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand how to structure a sustained argument with a clear line of reasoning (9W.2)',
      'Use rhetorical devices to strengthen persuasive writing (9W.3)',
      'Develop and refute a counter-argument within a piece of writing',
      'Revise and improve a first draft to enhance persuasive impact',
    ],
    successCriteria: [
      'I can structure an argument using topic sentences that build logically',
      'I can use at least four rhetorical devices effectively (e.g. rule of three, anaphora, rhetorical questions)',
      'I can include a counter-argument and refute it convincingly',
      'I can revise my draft to improve sentence variety and persuasive vocabulary',
    ],
    keywords: [
      'rhetoric',
      'anaphora',
      'counter-argument',
      'refutation',
      'ethos',
      'pathos',
      'logos',
      'hyperbole',
    ],
    starterActivity: {
      title: 'Rhetoric Relay',
      duration: '8 minutes',
      instructions:
        'Display a list of eight rhetorical devices with definitions (rhetorical question, rule of three, anaphora, direct address, emotive language, hyperbole, statistics, expert opinion). Teacher reads a short persuasive speech extract. Students listen and hold up the number (1-8) of each device they hear. Teacher reveals the devices used and discusses their effects. Students then rank the devices from most to least persuasive and justify their top choice.',
      differentiation: {
        support: 'Provide a definition card for each device with an example; students match rather than recall.',
        core: 'Students identify devices independently and explain one effect.',
        stretch:
          'Students explain why certain combinations of devices are more effective than individual ones.',
      },
      resources: ['Rhetorical devices list slide', 'Speech extract handout', 'Number cards 1-8'],
    },
    mainActivities: [
      {
        title: 'Counter-Argument and Refutation',
        duration: '15 minutes',
        instructions:
          'Teacher explains the importance of acknowledging the opposition in persuasive writing. Model the structure: "Some may argue that... However..." and "While it is true that... this fails to consider..." Students receive three arguments (e.g. "School uniforms should be banned"). For each, they write a counter-argument and a refutation. Teacher selects strong examples to share and discusses how refutation strengthens the writer\'s credibility.',
        differentiation: {
          support: 'Provide counter-arguments already written; students write refutations using sentence starters.',
          core: 'Students write both the counter-argument and refutation independently.',
          stretch:
            'Students write a sophisticated refutation that concedes a partial point before dismantling the argument.',
        },
        resources: [
          'Counter-argument exercise sheet',
          'Sentence starters for refutation',
        ],
      },
      {
        title: 'Draft Revision Workshop',
        duration: '25 minutes',
        instructions:
          'Students retrieve their homework draft (transactional piece from Lesson 6). Using a revision checklist, they work through their draft in four passes: Pass 1 — Highlight topic sentences (do they build logically?). Pass 2 — Underline rhetorical devices (aim for at least four different ones). Pass 3 — Circle where you address a counter-argument (add one if missing). Pass 4 — Check sentence variety (short sentences for impact? Complex sentences for development?). Students then rewrite their weakest paragraph, incorporating feedback from the checklist.',
        differentiation: {
          support:
            'Provide a simplified checklist with examples of what to look for and how to fix it. Teacher or TA supports during the revision process.',
          core: 'Students complete all four passes and rewrite one paragraph independently.',
          stretch:
            'Students rewrite two paragraphs and add a new concluding paragraph that ends with a powerful call to action.',
        },
        resources: [
          'Student homework drafts',
          'Revision checklist (four passes)',
          'Coloured highlighters',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Before and After',
      duration: '7 minutes',
      instructions:
        'Two volunteers share their original weakest paragraph and their revised version. The class identifies what changed and why the revision is more effective. Teacher reinforces: revision is not about fixing mistakes — it is about making deliberate choices to strengthen your writing.',
      differentiation: {
        support: 'Students identify one specific improvement in the revised paragraph.',
        core: 'Students identify multiple improvements and explain why they are effective.',
        stretch:
          'Students suggest one further improvement to the revised paragraph and explain how it would enhance the argument.',
      },
    },
    homework:
      'Complete the revision of your full transactional piece. Ensure it includes at least four rhetorical devices, a counter-argument with refutation, and a strong concluding paragraph.',
    worksheetQuestions: [
      {
        question: 'Define "counter-argument" and "refutation". Why are they important in persuasive writing?',
        lines: 4,
        modelAnswer:
          'A counter-argument is an opposing point of view that contradicts your main argument. A refutation is your response to the counter-argument, explaining why it is wrong or incomplete. They are important because they show the reader you have considered other perspectives, which makes your argument more balanced and credible.',
        marks: 3,
      },
      {
        question: 'Identify four rhetorical devices and explain the effect of each on the reader.',
        lines: 8,
        modelAnswer:
          '1) Rhetorical question — engages the reader by making them think and often implies the answer the writer wants. 2) Rule of three — creates a rhythmic, memorable pattern that reinforces a point through repetition. 3) Anaphora — repetition at the start of successive sentences builds momentum and emphasis. 4) Emotive language — appeals to the reader\'s feelings, making them sympathise with the writer\'s position.',
        marks: 4,
      },
      {
        question:
          'Write a counter-argument and refutation for the following claim: "Social media should be banned for anyone under 16."',
        lines: 6,
        modelAnswer:
          'Counter-argument: Some may argue that social media allows young people to stay connected with friends and family, particularly those who live far away, and that banning it would increase social isolation. Refutation: However, research consistently shows that excessive social media use is linked to anxiety, depression, and poor sleep among teenagers. While connection is valuable, there are safer alternatives — such as messaging apps with parental controls — that allow communication without exposing children to the harmful content and addictive algorithms that social media platforms rely on.',
        marks: 5,
      },
      {
        question:
          'Revise the following paragraph to make it more persuasive. Add at least two rhetorical devices and improve the vocabulary.\n\n"School should start later. Students are tired. They can\'t concentrate. It would help everyone."',
        lines: 8,
        modelAnswer:
          'A strong revision might read: "How can we expect our young people to thrive when we force them into classrooms at the crack of dawn? Students are exhausted, disengaged, and struggling — not because they are lazy, but because the system is designed against their biology. Starting school just one hour later would transform concentration, improve mental health, and boost academic results. The evidence is overwhelming. The question is not whether we should change, but why we haven\'t changed already."',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The revision workshop is the most important part of this lesson. Students must bring their drafts — have a contingency for those who forget.',
      'Model the revision passes live on a visualiser using a student example (with permission) to show the process in real time.',
      'The four-pass revision method can be used across all writing tasks and should be reinforced throughout the year.',
      'Collect revised drafts to assess improvement and identify students who need further support with persuasive techniques.',
    ],
    targetedSkills: [
      '9W.2',
      '9W.3',
      'Persuasive Writing',
      'Rhetorical Devices',
      'Counter-Argument',
      'Drafting and Revision',
    ],
  },

  // ── Lesson 8: Crafted Narrative Writing ──────────────────────────────────
  {
    id: 'y9-08-crafted-narrative-writing',
    title: 'Crafted Narrative Writing',
    text: 'Creative Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand how to structure a narrative for maximum impact (9W.6)',
      'Use varied sentence structures to control pace and tension (9W.7)',
      'Develop character and setting through showing rather than telling',
      'Apply crafted openings and endings to engage the reader',
    ],
    successCriteria: [
      'I can plan a narrative with a clear structure (exposition, rising action, climax, resolution)',
      'I can use short sentences for tension and complex sentences for description',
      'I can show a character\'s emotions through actions and dialogue rather than stating them',
      'I can write an opening paragraph that hooks the reader within the first two sentences',
    ],
    keywords: [
      'narrative',
      'exposition',
      'climax',
      'resolution',
      'pacing',
      'dialogue',
      'showing not telling',
      'in medias res',
    ],
    starterActivity: {
      title: 'Which Opening Hooks You?',
      duration: '8 minutes',
      instructions:
        'Display four different narrative openings: 1) A description of setting, 2) Dialogue, 3) In medias res (starting in the middle of the action), 4) A single provocative sentence. Students read all four and rank them from most to least engaging. Discuss in pairs, then share. Teacher explains that there is no single "best" opening but that effective writers make deliberate choices based on the effect they want to create.',
      differentiation: {
        support: 'Provide the four openings with labels explaining the technique used in each.',
        core: 'Students rank and justify their choice of the most engaging opening.',
        stretch:
          'Students write their own version of each opening type based on a given scenario (e.g. "A character discovers something unexpected in their attic").',
      },
      resources: ['Four openings slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Showing Not Telling: Character and Emotion',
        duration: '15 minutes',
        instructions:
          'Teacher displays two descriptions: Telling — "She was scared." Showing — "Her fingers trembled against the door handle. Each breath came in short, ragged bursts." Students discuss why the second is more effective. Teacher models converting three more "telling" sentences into "showing" descriptions using sensory detail, actions, and body language. Students then receive six "telling" sentences and rewrite each one using the "showing" technique. Pairs swap and evaluate each other\'s work.',
        differentiation: {
          support:
            'Provide a "showing" toolkit with a list of body language, actions, and sensory details students can use.',
          core: 'Students convert all six sentences independently.',
          stretch:
            'Students write an extended "showing" passage (five to six sentences) that conveys a character\'s fear without ever using the word "fear" or any synonyms.',
        },
        resources: [
          'Telling vs Showing examples slide',
          'Six telling sentences worksheet',
          'Showing toolkit (support tier)',
        ],
      },
      {
        title: 'Crafting a Narrative: Opening and Climax',
        duration: '25 minutes',
        instructions:
          'Students choose one of three narrative prompts: 1) Write about a time someone faced their greatest fear. 2) A character receives unexpected news that changes everything. 3) Write a story that begins and ends in the same location but everything has changed. Students plan using a narrative arc diagram (exposition, rising action, climax, falling action, resolution), then write their opening paragraph and their climax scene. Teacher models the use of short sentences during the climax to increase pace: "He ran. The footsteps followed. Closer. Louder." Students focus on crafting these two key moments rather than writing the entire story.',
        differentiation: {
          support:
            'Provide a narrative arc template with guiding questions for each stage. Offer sentence starters for the opening and climax.',
          core: 'Students plan independently and write both the opening and climax paragraphs.',
          stretch:
            'Students also write the resolution, ensuring it mirrors or contrasts with the opening to create a circular structure.',
        },
        resources: [
          'Narrative prompt cards',
          'Narrative arc diagram template',
          'Model climax paragraph',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Climax Read-Aloud',
      duration: '7 minutes',
      instructions:
        'Four volunteers read their climax paragraphs aloud. After each, the class identifies: one example of showing not telling, one use of sentence variety for pace, and the overall effect on the reader. Teacher highlights how deliberate crafting creates impact.',
      differentiation: {
        support: 'Students listen and identify one technique used.',
        core: 'Students identify multiple techniques and comment on their effectiveness.',
        stretch:
          'Students suggest one revision that would heighten the tension or emotional impact further.',
      },
    },
    homework:
      'Complete your full narrative (opening, rising action, climax, and resolution). Aim for 500-600 words. Focus on showing not telling and varying your sentence lengths.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between "showing" and "telling" in narrative writing. Give one example of each.',
        lines: 5,
        modelAnswer:
          'Telling directly states a character\'s emotion or a situation: "He was angry." Showing conveys the same idea through actions, body language, or sensory detail without stating it explicitly: "His jaw clenched. He hurled the glass against the wall, watching the fragments scatter across the floor." Showing is more effective because it allows the reader to infer the emotion, creating a more immersive and engaging experience.',
        marks: 3,
      },
      {
        question:
          'Rewrite the following "telling" sentence using the "showing" technique: "The old house was creepy and nobody wanted to go inside."',
        lines: 6,
        modelAnswer:
          'Ivy strangled the crumbling brickwork, its tendrils reaching across the boarded windows like grasping fingers. The gate hung from a single hinge, groaning in the wind. Children on the pavement crossed to the other side of the street, quickening their pace without looking up. Nobody spoke about the house. Nobody needed to.',
        marks: 4,
      },
      {
        question:
          'Why is sentence length important in narrative writing? Explain how a writer can use short and long sentences to control pace.',
        lines: 5,
        modelAnswer:
          'Short sentences create urgency, tension, and impact. They speed up the pace and can shock or surprise the reader. Long, complex sentences slow the pace and allow for detailed description, reflection, or building atmosphere. A skilled writer varies sentence length deliberately — using long sentences to build tension slowly and then a sudden short sentence to deliver a dramatic moment.',
        marks: 4,
      },
      {
        question:
          'Write the opening paragraph of a narrative using the "in medias res" technique. Your story should begin in the middle of a dramatic moment.',
        lines: 10,
        modelAnswer:
          'A strong response will drop the reader into the action immediately, withholding context to create intrigue. It will use sensory detail, varied sentence structures, and showing not telling. The reader should feel disoriented but compelled to continue reading to understand what is happening.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'This lesson focuses on crafting specific moments rather than writing a complete narrative from start to finish. This is deliberate — students need to learn to write well before writing at length.',
      'The "showing not telling" activity is foundational for creative writing success and should be revisited regularly.',
      'Consider displaying exemplary climax paragraphs on the classroom wall as models for future reference.',
      'The homework narrative will feed into Lesson 9 on descriptive techniques.',
    ],
    targetedSkills: [
      '9W.6',
      '9W.7',
      'Narrative Writing',
      'Showing Not Telling',
      'Sentence Variety',
      'Story Structure',
    ],
  },

  // ── Lesson 9: Descriptive Techniques — Imagery and Symbolism ─────────────
  {
    id: 'y9-09-descriptive-techniques-imagery-symbolism',
    title: 'Descriptive Techniques — Imagery and Symbolism',
    text: 'Creative Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand how imagery (simile, metaphor, personification) creates vivid descriptions (9W.3)',
      'Explore how symbolism adds layers of meaning to creative writing',
      'Apply sensory imagery to engage the reader across all five senses',
      'Revise creative writing to incorporate descriptive techniques strategically',
    ],
    successCriteria: [
      'I can use at least three types of imagery effectively in my writing',
      'I can explain how a symbol represents a deeper meaning in a narrative',
      'I can write a descriptive passage that engages at least three of the five senses',
      'I can revise a piece of writing to replace generic descriptions with vivid imagery',
    ],
    keywords: [
      'imagery',
      'simile',
      'metaphor',
      'personification',
      'symbolism',
      'sensory language',
      'motif',
      'connotation',
    ],
    starterActivity: {
      title: 'Senses Snapshot',
      duration: '7 minutes',
      instructions:
        'Display a photograph of a busy market scene. Students have three minutes to write five sentences — one for each sense (sight, sound, smell, touch, taste). Teacher shares examples and highlights the most vivid descriptions. Discuss: which sense is easiest to write about? Which is hardest? Why do most students default to sight? Introduce the idea that engaging multiple senses creates immersive writing.',
      differentiation: {
        support: 'Provide sentence starters for each sense (e.g. "I could hear...", "The air tasted of...").',
        core: 'Students write all five sense sentences independently.',
        stretch:
          'Students combine two or more senses in a single sentence (e.g. "The spices burned her nostrils and coated her tongue with heat").',
      },
      resources: ['Market scene photograph', 'Senses grid worksheet'],
    },
    mainActivities: [
      {
        title: 'Imagery Workshop: Simile, Metaphor, Personification',
        duration: '18 minutes',
        instructions:
          'Teacher models upgrading generic descriptions using imagery. Example: Generic — "The sun was hot." Simile — "The sun blazed like a furnace." Metaphor — "The sun was a relentless tyrant." Personification — "The sun hammered its fists against the earth." Students receive ten generic sentences and must rewrite each using a specified type of imagery (three similes, three metaphors, four personifications). Pairs share their strongest examples. Teacher selects the most effective and discusses what makes imagery powerful: specificity, originality, and appropriate connotation.',
        differentiation: {
          support:
            'Provide a word bank of comparative nouns and powerful verbs to use in their imagery. Complete the first example together.',
          core: 'Students rewrite all ten sentences independently using the specified imagery types.',
          stretch:
            'Students rewrite each sentence using all three types and evaluate which is most effective for each context.',
        },
        resources: [
          'Ten generic sentences worksheet',
          'Imagery types reference card',
          'Word bank (support tier)',
        ],
      },
      {
        title: 'Symbolism in Action',
        duration: '22 minutes',
        instructions:
          'Teacher explains symbolism: an object, colour, or element that represents something beyond its literal meaning. Examples: a storm = turmoil/conflict; a locked door = secrets/barriers; a mirror = self-reflection/truth. Students receive three short narrative scenarios. For each, they choose an object to use as a symbol and write a paragraph where the symbol is woven into the description to convey the character\'s emotional state. Teacher models: "The wilting flower on the windowsill reflected her own fading hope — petals curling inward, colours draining to grey."',
        differentiation: {
          support:
            'Provide a symbol bank (e.g. storm, mirror, clock, empty chair, wilting flower) with suggested meanings.',
          core: 'Students choose their own symbols and write three paragraphs independently.',
          stretch:
            'Students create a sustained symbolic motif — using the same symbol three times across a passage, each time with a different shade of meaning.',
        },
        resources: [
          'Narrative scenario cards',
          'Symbol bank (support tier)',
          'Model symbolism paragraph',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Generic to Vivid: Live Revision',
      duration: '8 minutes',
      instructions:
        'Display a generic paragraph on the board: "The man walked down the street. It was cold. He was sad. The sky was grey." As a class, revise it sentence by sentence, replacing generic language with imagery, symbolism, and sensory detail. The final version should be unrecognisable from the original. Students copy the revised version as a model for their own revision work.',
      differentiation: {
        support: 'Students contribute one revision suggestion.',
        core: 'Students contribute multiple suggestions and explain why they improve the writing.',
        stretch:
          'Students offer alternative revisions and compare which is more effective.',
      },
    },
    homework:
      'Retrieve your narrative from Lesson 8 homework. Revise it by adding at least five examples of imagery (simile, metaphor, or personification) and one symbolic element. Highlight or underline each addition.',
    worksheetQuestions: [
      {
        question:
          'Define simile, metaphor, and personification. Write one original example of each describing a thunderstorm.',
        lines: 6,
        modelAnswer:
          "A simile compares two things using 'like' or 'as': \"The thunder cracked like a whip across the sky.\" A metaphor directly states something is something else: \"The sky was a bruise — purple, swollen, angry.\" Personification gives human qualities to non-human things: \"The wind screamed through the trees, clawing at the windows with desperate fingers.\"",
        marks: 6,
      },
      {
        question:
          'What is symbolism? Give an example of a symbol and explain what it could represent in a story.',
        lines: 4,
        modelAnswer:
          'Symbolism is when an object, setting, or element in a story represents a deeper meaning beyond its literal purpose. For example, a broken clock could symbolise a character feeling trapped in the past, unable to move forward. The clock\'s inability to function reflects the character\'s emotional paralysis.',
        marks: 3,
      },
      {
        question:
          'Rewrite the following passage using imagery and sensory language to make it vivid: "The garden was old and neglected. There were weeds everywhere. It smelled bad."',
        lines: 8,
        modelAnswer:
          'A strong revision might read: "The garden exhaled decay — a thick, sweet rot that clung to the back of the throat. Weeds had colonised every inch, their tangled roots splitting the paving stones like veins beneath skin. A rusted watering can lay on its side, half-swallowed by the earth, and the fence sagged under the weight of creeping ivy, as though the garden itself were slowly pulling everything down into its depths."',
        marks: 6,
      },
      {
        question:
          'Write a descriptive paragraph about a character sitting alone in a room. Use a symbolic object to reflect their emotional state. Do not name the emotion directly.',
        lines: 10,
        modelAnswer:
          "A strong response will use a symbolic object (e.g. a candle burning down, rain against a window, a half-finished letter) to convey the character's inner world. The paragraph should engage multiple senses, use varied sentence structures, and employ at least two types of imagery. The emotion should be clearly implied through the description without being explicitly stated.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'This lesson pairs naturally with Lesson 8 and the homework creates a revision loop — students should see improvement in their narrative writing.',
      'Avoid praising imagery that is cliched ("as white as snow", "fast as lightning"). Push students towards original and specific comparisons.',
      'The symbolism activity is ambitious for some students. Ensure the modelling is clear and the symbol bank is accessible.',
      'Consider creating a class anthology of the best descriptive paragraphs produced in this lesson.',
    ],
    targetedSkills: [
      '9W.3',
      'Descriptive Writing',
      'Imagery',
      'Symbolism',
      'Sensory Language',
      'Revision',
    ],
  },

  // ── Lesson 10: Assessment — Writing Portfolio ────────────────────────────
  {
    id: 'y9-10-assessment-writing-portfolio',
    title: 'Assessment: Writing Portfolio',
    text: 'Transactional & Creative Writing',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Demonstrate a range of writing skills across transactional and creative forms (9W.1-9W.10)',
      'Produce a polished piece of writing under timed conditions',
      'Apply planning, drafting, and revision strategies independently',
      'Show control of tone, register, and audience awareness',
    ],
    successCriteria: [
      'I can select and respond to a writing task appropriate to my strengths',
      'I can plan effectively within the first ten minutes',
      'I can write with accuracy in spelling, punctuation, and grammar',
      'I can demonstrate deliberate crafting through varied sentence structures, vocabulary choices, and structural features',
    ],
    keywords: [
      'portfolio',
      'crafted',
      'register',
      'accuracy',
      'drafting',
      'proofreading',
      'cohesion',
      'voice',
    ],
    starterActivity: {
      title: 'Task Selection and Planning',
      duration: '10 minutes',
      instructions:
        'Reveal two task options: Task A (Transactional) — "Write an article for a national newspaper arguing that the school curriculum needs to change to prepare students for the future." Task B (Creative) — "Write the opening to a story entitled \'The Last Light\'." Students choose one task and spend 10 minutes planning. Transactional writers use the PAF grid and argument structure. Creative writers use a narrative arc or descriptive plan. Teacher circulates to check all students have a clear plan before writing begins.',
      differentiation: {
        support:
          'Provide a task-specific planning template with sections to fill in. Include a checklist of features to include.',
        core: 'Students plan independently using their preferred method.',
        stretch:
          'Students plan with the intention of demonstrating at least six advanced writing techniques (e.g. anaphora, symbolism, in medias res, counter-argument).',
      },
      resources: [
        'Task options slide',
        'Planning templates (transactional and creative)',
        'Feature checklists',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Writing',
        duration: '40 minutes',
        instructions:
          'Students write their chosen piece under timed conditions. Transactional responses should be 400-500 words. Creative responses should be 350-450 words. Teacher displays a countdown timer with a five-minute warning. Students should aim for deliberate crafting — this is not a race but a demonstration of skill. Silence is maintained. Teacher circulates to support discreetly. In the final five minutes, students proofread for SPaG errors.',
        differentiation: {
          support:
            'Allow access to a word bank, spelling reference, and the feature checklist. Sentence starters available for the first paragraph only.',
          core: 'Students write independently.',
          stretch:
            'Students aim for a sophisticated and controlled voice with a clear authorial presence throughout.',
        },
        resources: [
          'Lined paper or exercise books',
          'Countdown timer display',
          'Word bank (support tier)',
          'SPaG reference card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Proofreading and Reflection',
      duration: '5 minutes',
      instructions:
        'Students swap their work with a partner for a final proofread. Partners circle any SPaG errors (do not correct — the writer should fix them). Students then write a brief self-reflection: What am I most proud of in this piece? What would I improve with more time? Teacher collects all work for formal assessment.',
      differentiation: {
        support: 'Provide a proofread checklist focusing on capital letters, full stops, and common spelling errors.',
        core: 'Students proofread for a range of SPaG issues and write a reflective comment.',
        stretch:
          'Students identify one stylistic choice they made deliberately and explain why it was effective.',
      },
    },
    homework:
      'Write a brief comparison (one paragraph) of your transactional and creative writing skills. Which do you feel more confident in? What is your key target for improvement?',
    worksheetQuestions: [
      {
        question:
          'Task A: Write an article for a national newspaper arguing that the school curriculum needs to change to prepare students for the future. OR Task B: Write the opening to a story entitled "The Last Light." Choose ONE task.',
        lines: 40,
        modelAnswer:
          "This is a formal assessment piece. Task A: A strong response will use article conventions (headline, subheadings, short paragraphs), a clear argument structure with topic sentences, at least four rhetorical devices, a counter-argument with refutation, statistics or anecdotes for evidence, and a powerful conclusion. Task B: A strong response will hook the reader from the opening line, use imagery and sensory language, demonstrate showing not telling, vary sentence lengths for pace and effect, employ symbolism or motif, and create a strong sense of character or atmosphere.",
        marks: 30,
      },
    ],
    teacherNotes: [
      'This is a formal assessment lesson. Brief students on expectations the lesson before so they come prepared.',
      'Consider weighting the assessment 50% on content/craft and 50% on accuracy/SPaG to incentivise proofreading.',
      'The portfolio model allows students to play to their strengths while the reflection identifies areas for development.',
      'Use the assessment data to set targets for Term 3 and to inform groupings.',
      'Students who choose Task B may benefit from a word count reminder — creative writers often write too much or too little.',
    ],
    targetedSkills: [
      '9W.1',
      '9W.2',
      '9W.3',
      '9W.4',
      '9W.5',
      '9W.6',
      '9W.7',
      '9W.8',
      '9W.9',
      '9W.10',
      'Assessment',
      'Portfolio Writing',
      'Self-Reflection',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 3 — Of Mice and Men (Lessons 11-15)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 11: 1930s Context — The American Dream ────────────────────────
  {
    id: 'y9-11-1930s-context-american-dream',
    title: '1930s Context — The American Dream',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand the historical context of 1930s America: the Great Depression, migrant workers, and the Dust Bowl (9R.4)',
      "Explore the concept of the American Dream and its relevance to Steinbeck's novella",
      'Analyse how context shapes character motivation and thematic concerns',
      "Evaluate whether the American Dream is presented as achievable or illusory in Steinbeck's world",
    ],
    successCriteria: [
      'I can describe at least three features of 1930s America relevant to Of Mice and Men',
      "I can explain the American Dream and its significance to the novel's characters",
      "I can link contextual factors to characters' hopes and circumstances",
      "I can use the phrase 'Steinbeck suggests...' to discuss authorial intent",
    ],
    keywords: [
      'Great Depression',
      'migrant workers',
      'American Dream',
      'Dust Bowl',
      'itinerant',
      'segregation',
      'ranch',
      'dispossession',
    ],
    starterActivity: {
      title: 'The American Dream: What Is It?',
      duration: '8 minutes',
      instructions:
        'Display the phrase "The American Dream" and ask students: What does this mean? What does it promise? Students brainstorm on mini-whiteboards. Teacher introduces the concept: the belief that anyone in America, regardless of background, can achieve success through hard work. Then ask: Do you think this was true for everyone in the 1930s? Show three photographs from the Great Depression era (a breadline, a migrant camp, a Dust Bowl farm). Students discuss what these images suggest about who the American Dream excluded.',
      differentiation: {
        support: 'Provide a definition of the American Dream and guided questions for the photographs.',
        core: 'Students articulate the concept and make inferences from the photographs independently.',
        stretch:
          'Students consider whether the American Dream is a positive aspiration or a harmful illusion and prepare a brief argument.',
      },
      resources: ['American Dream definition slide', 'Three historical photographs', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Contextual Investigation: 1930s America',
        duration: '20 minutes',
        instructions:
          'Students receive a context information sheet covering four areas: 1) The Wall Street Crash and Great Depression, 2) The Dust Bowl and migrant workers, 3) Segregation and racism, 4) The lives of itinerant ranch workers. Students read and annotate their sheet, then complete a context grid linking each area to a prediction about the novel. Teacher models: "The Great Depression caused mass unemployment — I predict that characters in the novel will be desperate for work and afraid of losing their jobs."',
        differentiation: {
          support:
            'Provide a pre-annotated context sheet with key information highlighted and guiding questions.',
          core: 'Students annotate independently and make four contextual predictions.',
          stretch:
            "Students evaluate which contextual factor they think will have the most significant impact on the novel's characters and justify their choice.",
        },
        resources: [
          'Context information sheet (4 areas)',
          'Context grid worksheet',
          '1930s America timeline',
        ],
      },
      {
        title: 'The American Dream and George and Lennie',
        duration: '20 minutes',
        instructions:
          'Read aloud George and Lennie\'s conversation about "livin\' off the fatta the lan\'" from Chapter 1. Students follow in their texts. Discuss: What is their dream? Why is it important to them? What makes it different from the lives of other ranch workers? Students annotate the passage, identifying how Steinbeck presents the dream (language of hope, repetition, Lennie\'s childlike excitement). Then students write a paragraph: "How does Steinbeck present the American Dream through George and Lennie in Chapter 1?" Include at least one quotation and one reference to context.',
        differentiation: {
          support:
            'Provide key quotations pre-selected and sentence starters for the paragraph.',
          core: 'Students annotate and write the paragraph independently.',
          stretch:
            "Students consider whether Steinbeck presents the dream as genuine hope or as a comforting fiction, and support their view with evidence.",
        },
        resources: [
          'Of Mice and Men text (Chapter 1)',
          'Extract handout (dream conversation)',
          'Annotation guide',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Dream or Illusion? Quick Debate',
      duration: '7 minutes',
      instructions:
        "Students stand on a continuum line across the room: one end = 'The American Dream is achievable', the other = 'The American Dream is an illusion.' Students position themselves based on their reading of the text so far and justify their position to the person nearest them. Teacher takes three responses from different positions on the line. Preview: we will return to this question at the end of the novel.",
      differentiation: {
        support: 'Students choose a side and give one reason.',
        core: 'Students justify their position with a quotation or contextual reference.',
        stretch:
          'Students argue both sides before choosing their position, showing nuanced understanding.',
      },
    },
    homework:
      'Research one real migrant worker story from 1930s America (Steinbeck often drew on real accounts). Write a paragraph explaining how this real story connects to themes you expect to see in Of Mice and Men.',
    worksheetQuestions: [
      {
        question:
          'What was the Great Depression? Explain how it affected ordinary Americans in the 1930s.',
        lines: 4,
        modelAnswer:
          'The Great Depression was a severe economic downturn that began with the Wall Street Crash of 1929. Banks collapsed, businesses closed, and millions lost their jobs. Ordinary Americans faced extreme poverty, homelessness, and hunger. Many became migrant workers, travelling from place to place in search of temporary employment on farms and ranches.',
        marks: 3,
      },
      {
        question:
          'What is the "American Dream"? Why might it be especially significant to characters like George and Lennie?',
        lines: 5,
        modelAnswer:
          "The American Dream is the belief that anyone can achieve success, prosperity, and happiness through hard work, regardless of their social background. For George and Lennie, who are itinerant workers with no home, no family, and no security, the dream of owning their own land represents everything they lack: stability, independence, and dignity. It gives them hope in a world that offers very little.",
        marks: 4,
      },
      {
        question:
          'Read the quotation: "Guys like us, that work on ranches, are the loneliest guys in the world." What does this tell us about the lives of migrant workers? How does context help us understand this line?',
        lines: 6,
        modelAnswer:
          "The superlative \"loneliest\" emphasises the extreme isolation of migrant workers. They moved from ranch to ranch, never staying long enough to form lasting relationships or put down roots. The pronoun \"us\" shows George identifies with this group — he is not an outsider observing but someone living this reality. Contextually, during the Great Depression, millions of men travelled alone looking for work. Steinbeck, who had witnessed migrant workers' lives firsthand, uses this line to humanise them and challenge readers to recognise their suffering.",
        marks: 5,
      },
      {
        question:
          'How does Steinbeck present the American Dream in Chapter 1 through George and Lennie? Write a paragraph including a quotation and a reference to context.',
        lines: 8,
        modelAnswer:
          "Steinbeck presents the American Dream as a shared fantasy that sustains George and Lennie in a hostile world. When Lennie begs George to \"tell about how it's gonna be\", the repetitive, ritualistic quality of the exchange suggests this is not a plan but a story they tell themselves to endure their circumstances. The dream of \"livin' off the fatta the lan'\" represents self-sufficiency and freedom from the exploitative ranch system. However, Steinbeck subtly undermines the dream's achievability: the dialect and the childlike tone hint that this is closer to a fairy tale than a realistic goal. Contextually, the vast majority of migrant workers never escaped the cycle of poverty, which suggests Steinbeck may be presenting the American Dream as a necessary illusion rather than a genuine possibility.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'This is the opening lesson for the Of Mice and Men unit. Strong contextual grounding here will pay dividends throughout.',
      'Use photographs and primary sources where possible — visual context is powerful for engagement.',
      'The continuum debate is a low-stakes way to introduce literary argumentation. Return to this activity at the end of the novel to see if positions have shifted.',
      'Steinbeck\'s own background (he worked alongside migrant workers) is worth sharing to establish the authenticity of his portrayal.',
    ],
    targetedSkills: [
      '9R.4',
      'Contextual Understanding',
      'Authorial Intent',
      'Prediction',
      'Discussion Skills',
    ],
  },

  // ── Lesson 12: Character Analysis — George and Lennie ────────────────────
  {
    id: 'y9-12-character-analysis-george-lennie',
    title: 'Character Analysis — George and Lennie',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse how Steinbeck presents George and Lennie through language, dialogue, and actions (9R.3)",
      'Explore the dynamic of their relationship and what it represents',
      "Develop interpretations of character using evidence and conceptual thinking (9R.5)",
      'Compare how Steinbeck presents the two characters to highlight their differences and dependence',
    ],
    successCriteria: [
      'I can identify key quotations that reveal character traits for both George and Lennie',
      'I can analyse how Steinbeck uses language (dialogue, description, animal imagery) to present character',
      'I can explain the significance of the George-Lennie relationship within the context of the novel',
      'I can write a comparative paragraph exploring how both characters are presented differently',
    ],
    keywords: [
      'characterisation',
      'dialogue',
      'animal imagery',
      'protector',
      'dependence',
      'innocence',
      'burden',
      'foil',
    ],
    starterActivity: {
      title: 'First Impressions: George vs Lennie',
      duration: '7 minutes',
      instructions:
        "Display the opening description of George and Lennie from Chapter 1 (their physical descriptions and how they walk). Students create a quick sketch or stick figure of each character based on the description. Below each sketch, they write three adjectives. Teacher discusses: what do Steinbeck's descriptions already tell us about the power dynamic between these two characters? Why does Steinbeck describe them walking in single file?",
      differentiation: {
        support: 'Provide the descriptions with key words highlighted and an adjective word bank.',
        core: 'Students select their own adjectives and explain how the descriptions establish the characters.',
        stretch:
          'Students analyse why Steinbeck introduces the characters through physical description rather than dialogue and what this reveals about his method.',
      },
      resources: ['Chapter 1 opening description extract', 'Character sketch template'],
    },
    mainActivities: [
      {
        title: 'Language Analysis: Animal Imagery and Lennie',
        duration: '20 minutes',
        instructions:
          "Provide students with a collection of quotations where Steinbeck uses animal imagery to describe Lennie (e.g. \"dabbled his big paw in the water\", \"snorting into the water like a horse\", \"dragging his feet a little, the way a bear drags his paws\"). Students annotate each quotation, exploring: What animal is Lennie compared to? What does this suggest about him? Why does Steinbeck use animal imagery rather than human descriptions? Teacher models: 'The simile \"like a bear\" presents Lennie as powerful but clumsy, suggesting he is a creature of instinct rather than intellect. This foreshadows the danger his strength poses.' Students then write a PEEL paragraph on: How does Steinbeck use animal imagery to present Lennie?",
        differentiation: {
          support:
            'Provide the quotations with the animal references underlined and sentence starters for the PEEL paragraph.',
          core: 'Students annotate independently and write a PEEL paragraph.',
          stretch:
            'Students explore what the animal imagery suggests about how society views people like Lennie — as less than human — and link this to the theme of marginalisation.',
        },
        resources: [
          'Animal imagery quotation collection',
          'Annotation guide',
          'PEEL paragraph frame',
        ],
      },
      {
        title: 'The Relationship: Protector and Protected',
        duration: '20 minutes',
        instructions:
          'Students read the passage where George explains to Slim why he looks after Lennie (Chapter 3). In pairs, they discuss: Is George a willing protector or a reluctant one? Find evidence for both interpretations. Students create a two-column table: "Evidence George cares for Lennie" vs "Evidence George is burdened by Lennie." Using their table, students write a comparative paragraph: "Steinbeck presents the relationship between George and Lennie as both..." Include quotations from both sides.',
        differentiation: {
          support:
            'Provide pre-selected quotations for each column; students sort them and write the paragraph using a scaffold.',
          core: 'Students find their own quotations and write the comparative paragraph independently.',
          stretch:
            'Students evaluate which interpretation is more convincing and consider what Steinbeck is saying about human connection and responsibility through this relationship.',
        },
        resources: [
          'Chapter 3 extract (George talks to Slim)',
          'Two-column evidence table',
          'Comparative paragraph frame',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Word, One Quotation',
      duration: '8 minutes',
      instructions:
        'Students choose one word that best sums up the George-Lennie relationship and one quotation that supports it. Share in a rapid-fire round. Teacher records words on the board and identifies patterns. Discuss: does the class lean more towards seeing the relationship as loving or as tragic? What does this tell us about Steinbeck\'s presentation?',
      differentiation: {
        support: 'Students choose from a provided list of words and quotations.',
        core: 'Students choose their own word and quotation and explain the connection.',
        stretch:
          'Students choose a word that captures the complexity of the relationship (e.g. "codependent", "sacrificial") and justify it.',
      },
    },
    homework:
      'Choose either George or Lennie. Find three quotations from Chapter 2 that reveal something new about this character (beyond what was discussed in the lesson). Write a sentence of analysis for each.',
    worksheetQuestions: [
      {
        question:
          'Identify three examples of animal imagery Steinbeck uses to describe Lennie. For each, explain what it suggests about his character.',
        lines: 6,
        modelAnswer:
          '1) "Dabbled his big paw in the water" — the word "paw" makes Lennie seem animal-like rather than human, suggesting he operates on instinct rather than thought. 2) "Snorting into the water like a horse" — the simile presents Lennie as powerful and unrefined, drinking without awareness of social conventions. 3) "Dragging his feet a little, the way a bear drags his paws" — the bear comparison emphasises both his size and his lumbering, gentle nature, while foreshadowing the destructive potential of his strength.',
        marks: 6,
      },
      {
        question:
          'Why does Steinbeck use animal imagery to present Lennie rather than describing him in purely human terms?',
        lines: 5,
        modelAnswer:
          'Steinbeck uses animal imagery to show that Lennie exists outside the norms of human society — he does not understand social rules, danger, or consequences. The animal comparisons emphasise his innocence and instinctive nature, making him sympathetic but also foreshadowing tragedy. Animals act without malice but can still cause harm. This imagery also reflects how society dehumanises people with learning difficulties, reducing them to something less than human.',
        marks: 4,
      },
      {
        question:
          'Is George a good friend to Lennie? Write a balanced paragraph exploring both sides of the argument, using quotations.',
        lines: 8,
        modelAnswer:
          "On one hand, George is a devoted protector who has sacrificed his freedom for Lennie's safety. He tells Slim that Lennie \"ain't mean\" and repeatedly defends him to others. However, George also expresses frustration and resentment, telling Lennie: \"I could live so easy\" without him. He fantasises about a life of freedom — spending his money on drink and women — which suggests the relationship is a burden as well as a bond. Steinbeck presents their friendship as deeply complex: genuine love and loyalty coexist with frustration and sacrifice, reflecting the harsh reality that in a world as unforgiving as 1930s America, even the closest bonds are tested by circumstance.",
        marks: 6,
      },
      {
        question:
          'Write a PEEL paragraph analysing how Steinbeck presents Lennie in the opening of the novel. Include a quotation and analysis of language.',
        lines: 10,
        modelAnswer:
          'Steinbeck presents Lennie as a gentle but potentially dangerous figure through carefully crafted animal imagery. In the opening description, Lennie is said to be "dragging his feet a little, the way a bear drags his paws." The simile comparing Lennie to a bear is significant: bears are large, powerful creatures capable of great destruction, yet they are also associated with a lumbering innocence. The verb "dragging" suggests a lack of purpose or awareness, as though Lennie moves through the world without fully understanding it. This duality — power without intent — is central to Steinbeck\'s characterisation and foreshadows the tragic events of the novel, where Lennie\'s strength will cause harm despite his gentle nature. The animal imagery also reflects how society reduces individuals like Lennie to something less than human, denying them agency and understanding.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Animal imagery is one of the most accessible analytical entry points for this text — use it to build confidence before moving to more abstract analysis.',
      'The George-Lennie relationship question ("Is George a good friend?") is an excellent discussion prompt that can be returned to after the ending.',
      'Encourage students to track character quotations in a dedicated section of their notes — this will be invaluable for the assessment.',
      'Be sensitive to the portrayal of learning difficulty in the text. Discuss Steinbeck\'s historical context and the limitations of 1930s understanding.',
    ],
    targetedSkills: [
      '9R.3',
      '9R.5',
      'Character Analysis',
      'Language Analysis',
      'Comparative Writing',
      'Close Reading',
    ],
  },

  // ── Lesson 13: Themes — Loneliness and Dreams ────────────────────────────
  {
    id: 'y9-13-themes-loneliness-dreams',
    title: 'Themes: Loneliness and Dreams',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Identify and explore the themes of loneliness and dreams in Of Mice and Men (9R.4)',
      'Analyse how Steinbeck presents these themes through different characters (9R.5)',
      "Evaluate how the themes connect to Steinbeck's critique of 1930s American society",
      'Construct analytical paragraphs that explore thematic concerns with depth and nuance',
    ],
    successCriteria: [
      'I can identify at least four characters who experience loneliness and explain the cause of their isolation',
      'I can analyse how Steinbeck uses setting, dialogue, and symbolism to convey loneliness',
      'I can compare how different characters\' dreams function within the novel',
      "I can write a thematic paragraph linking loneliness or dreams to Steinbeck's purpose",
    ],
    keywords: [
      'loneliness',
      'isolation',
      'dreams',
      'aspiration',
      'futility',
      'marginalisation',
      'companionship',
      'solitude',
    ],
    starterActivity: {
      title: 'The Loneliest Character',
      duration: '7 minutes',
      instructions:
        "Display the names of six characters: George, Lennie, Candy, Crooks, Curley's wife, Slim. Students rank them from most lonely to least lonely and write one sentence justifying their top choice. Pairs compare and debate. Teacher takes feedback and introduces the idea that loneliness in the novel is not just emotional but structural — it is built into the world Steinbeck creates.",
      differentiation: {
        support: 'Provide a brief reminder of each character and their situation.',
        core: 'Students rank independently with justification.',
        stretch:
          'Students argue that loneliness in the novel is a social condition rather than a personal failing, using evidence from at least two characters.',
      },
      resources: ['Character names slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Theme Mapping: Loneliness Across Characters',
        duration: '20 minutes',
        instructions:
          "Students create a theme map for loneliness. In the centre: LONELINESS. Radiating outward: character names. For each character, students note: 1) The cause of their loneliness (e.g. Crooks — racial segregation), 2) A key quotation, 3) How Steinbeck presents their loneliness (e.g. through setting, dialogue, symbolism). Teacher models Crooks: 'Crooks' loneliness is caused by racial segregation — he lives alone in the barn, excluded from the bunkhouse. Steinbeck uses the setting of his room to symbolise his isolation: he has \"books\" and \"a tattered dictionary\" suggesting he is intelligent but denied companionship.' Students complete the map for at least three other characters.",
        differentiation: {
          support:
            'Provide the causes of loneliness pre-identified for each character; students find quotations and analyse presentation.',
          core: 'Students complete the theme map independently for four characters.',
          stretch:
            "Students identify connections between characters' loneliness and evaluate whether Steinbeck suggests any character could escape their isolation.",
        },
        resources: [
          'Theme map template',
          'Of Mice and Men text',
          'Character quotation bank',
        ],
      },
      {
        title: "Dreams and Futility: Are the Characters' Dreams Achievable?",
        duration: '20 minutes',
        instructions:
          "Students receive a table listing each major character and their dream (George and Lennie — own a farm; Curley's wife — be in the movies; Crooks — equality and belonging; Candy — security and purpose). For each dream, students write: What is the dream? Why do they need it? Is it achievable? What does Steinbeck suggest about dreams through this character? Students then write a PEEL paragraph responding to: 'How does Steinbeck use dreams to explore the theme of futility in Of Mice and Men?'",
        differentiation: {
          support:
            'Provide the dreams and quotations pre-completed; students focus on the analysis and write the paragraph with sentence starters.',
          core: 'Students complete the table and write the paragraph independently.',
          stretch:
            "Students compare two characters' dreams and argue which is more tragic, linking to Steinbeck's critique of the American Dream.",
        },
        resources: [
          'Dreams and characters table worksheet',
          'PEEL paragraph frame',
          'American Dream context reference',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Steinbeck\'s Message About Dreams',
      duration: '8 minutes',
      instructions:
        "Students complete: 'Through Of Mice and Men, Steinbeck suggests that dreams are...' in one sentence. Teacher collects four or five responses and writes them on the board. Class discussion: Does Steinbeck think dreams are positive (they give hope) or negative (they give false hope)? Or both? Students vote and justify.",
      differentiation: {
        support: 'Provide a word bank: necessary, cruel, comforting, impossible, essential, deceptive.',
        core: 'Students write their sentence and justify their position in the discussion.',
        stretch:
          'Students argue that Steinbeck presents dreams as simultaneously essential and destructive, providing textual evidence.',
      },
    },
    homework:
      "Choose one character who is lonely in Of Mice and Men. Write two paragraphs: one analysing how Steinbeck presents their loneliness, and one evaluating whether their dream offers genuine hope or false comfort.",
    worksheetQuestions: [
      {
        question:
          'Why is loneliness such an important theme in Of Mice and Men? Explain with reference to the historical context.',
        lines: 5,
        modelAnswer:
          'Loneliness is central to the novel because it reflects the reality of life for migrant workers during the Great Depression. Men travelled alone from ranch to ranch, rarely forming lasting relationships. Steinbeck shows that loneliness is not just an emotion but a social condition — created by racism (Crooks), sexism (Curley\'s wife), ageism (Candy), and economic exploitation. By making loneliness universal among his characters, Steinbeck critiques a society that isolates its most vulnerable members.',
        marks: 4,
      },
      {
        question:
          "How does Steinbeck use the setting of Crooks' room to convey the theme of loneliness? Include a quotation.",
        lines: 6,
        modelAnswer:
          "Steinbeck uses Crooks' room — a small, separate space in the barn — to physically represent his isolation from the other men. The room contains \"a tattered dictionary\" and \"a mauled copy of the California civil code\", suggesting Crooks is intelligent and knows his rights, yet is still excluded from companionship. The detail of the \"small, yellow light\" creates an atmosphere of confinement and sadness. Steinbeck uses this setting to show that racial segregation denies Crooks both physical and emotional connection, making his loneliness a direct consequence of structural racism.",
        marks: 5,
      },
      {
        question:
          'Compare the dreams of two different characters in Of Mice and Men. How are they similar and how are they different?',
        lines: 8,
        modelAnswer:
          "George and Lennie dream of owning a small farm where they can \"live off the fatta the lan'\", while Curley's wife dreams of being \"in the movies\" and living a glamorous life in Hollywood. Both dreams represent an escape from their current circumstances and a desire for autonomy and recognition. However, George and Lennie's dream is rooted in simplicity and togetherness, whereas Curley's wife's dream is about individual fame and escape from a loveless marriage. Steinbeck presents both dreams as ultimately unachievable — George and Lennie's dream dies with Lennie, and Curley's wife's dream was never realistic. Through both, Steinbeck suggests that the American Dream is a comforting fiction that sustains people in hardship but rarely delivers on its promise.",
        marks: 6,
      },
      {
        question:
          'Write a PEEL paragraph analysing how Steinbeck presents the theme of loneliness through Candy. Include a quotation and reference to context.',
        lines: 10,
        modelAnswer:
          "Steinbeck presents Candy's loneliness as a consequence of ageing and obsolescence in a society that values only productive labour. Candy's attachment to his old dog — who is eventually shot by Carlson — symbolises his own fear of being discarded when he is no longer useful. The quotation \"I won't have no place to go, an' I can't get no more jobs\" reveals Candy's terror of a future without purpose or security. The repetition of \"no\" emphasises the hopelessness of his situation. Contextually, there was no welfare state or pension system for itinerant workers in 1930s America — old age meant destitution. Steinbeck uses Candy to argue that a society that treats its workers as disposable tools is fundamentally inhumane.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'This lesson covers two major themes — if time is tight, focus on loneliness and set dreams as the homework focus.',
      "The theme map is a valuable revision resource. Encourage students to add to it throughout the unit.",
      "Curley's wife's dream provides an excellent opportunity to discuss gender roles and the limited options available to women in 1930s America.",
      "The plenary debate about whether dreams are positive or negative is a question that appears frequently in assessments — practise it regularly.",
    ],
    targetedSkills: [
      '9R.4',
      '9R.5',
      'Thematic Analysis',
      'Comparative Thinking',
      'Contextual Linking',
      'Analytical Writing',
    ],
  },

  // ── Lesson 14: Comparing Ideas Across the Text ───────────────────────────
  {
    id: 'y9-14-comparing-ideas-across-text',
    title: 'Comparing Ideas Across the Text',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Develop the skill of comparing ideas, themes, and character presentations across different parts of the text (9R.6)',
      'Identify patterns and contrasts in how Steinbeck develops meaning throughout the novel',
      'Use comparative connectives and frameworks to structure cross-textual analysis',
      'Write a sustained comparative paragraph that tracks an idea across the novel',
    ],
    successCriteria: [
      'I can identify how a theme or idea is presented differently at different points in the novel',
      'I can use comparative connectives (similarly, in contrast, whereas, however, conversely)',
      'I can explain why Steinbeck develops or shifts his presentation of an idea across the text',
      'I can write a comparative paragraph that analyses two moments from different chapters',
    ],
    keywords: [
      'comparison',
      'contrast',
      'development',
      'parallel',
      'juxtaposition',
      'structural shift',
      'cyclical',
      'foreshadowing',
    ],
    starterActivity: {
      title: 'Same Theme, Different Moment',
      duration: '7 minutes',
      instructions:
        'Display two quotations about the dream — one from Chapter 1 (full of hope) and one from Chapter 5 or 6 (after the dream has collapsed). Students identify: What has changed? What has stayed the same? Why has Steinbeck shifted his presentation? Teacher introduces the concept of tracking ideas across a text and explains that this is a higher-order analytical skill that examiners look for.',
      differentiation: {
        support: 'Provide the two quotations with the key differences highlighted.',
        core: 'Students identify changes and explain the shift in their own words.',
        stretch:
          'Students consider what structural purpose the shift serves — what is Steinbeck saying about hope by placing these moments where he does in the novel?',
      },
      resources: ['Two quotations comparison slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Cross-Text Comparison: Building a Comparison Grid',
        duration: '20 minutes',
        instructions:
          'Students choose one theme or idea to track across the novel: loneliness, dreams, power, or violence. Using a comparison grid, they find quotations from the beginning, middle, and end of the novel that relate to their chosen theme. For each quotation, they note: chapter, context, language technique, and what it reveals about the theme at that point. Teacher models with "violence": Chapter 1 (Lennie kills a mouse — accidental, small-scale), Chapter 5 (Lennie kills Curley\'s wife — accidental, catastrophic), Chapter 6 (George kills Lennie — deliberate, merciful). Students identify the pattern: how does Steinbeck\'s presentation of this idea develop?',
        differentiation: {
          support:
            'Provide a partially completed grid with one quotation per section; students add analysis and find additional quotations.',
          core: 'Students complete the comparison grid independently with three quotations.',
          stretch:
            'Students add a fourth row evaluating the overall trajectory of the theme and what Steinbeck\'s structural choices suggest about his message.',
        },
        resources: [
          'Comparison grid worksheet',
          'Of Mice and Men text',
          'Theme tracking notes from previous lessons',
        ],
      },
      {
        title: 'Writing a Comparative Paragraph',
        duration: '22 minutes',
        instructions:
          'Teacher models a comparative paragraph structure: "At the beginning of the novel, Steinbeck presents [theme] as... This is evident when... The [technique] suggests... However, by [later chapter], Steinbeck shifts his presentation to... This is shown through... The contrast between these two moments reveals that Steinbeck is arguing..." Students then write their own comparative paragraph using their grid. After writing, students highlight their comparative connectives in one colour and their analytical language in another. Peer assessment: Does the paragraph make a clear comparison? Does it explain why the shift matters?',
        differentiation: {
          support:
            'Provide a writing scaffold with the comparative structure and sentence starters filled in. Students select quotations and write the analytical sections.',
          core: 'Students write the comparative paragraph independently using the modelled structure.',
          stretch:
            'Students write two comparative paragraphs and include a conceptual interpretation linking the comparison to Steinbeck\'s wider purpose.',
        },
        resources: [
          'Comparative paragraph model slide',
          'Comparative connectives reference sheet',
          'Peer assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Big Shift',
      duration: '6 minutes',
      instructions:
        'Students write one sentence completing: "The most significant shift in Of Mice and Men is when Steinbeck changes his presentation of [theme] from [X] to [Y] because..." Three students share. Teacher selects the most insightful and discusses what makes a comparison truly analytical — it is not just about noticing difference but explaining why the difference matters.',
      differentiation: {
        support: 'Provide a sentence frame with blanks to fill in.',
        core: 'Students write their sentence independently and share.',
        stretch:
          'Students explain how the shift they identified contributes to the novel\'s overall message or emotional impact.',
      },
    },
    homework:
      'Write a comparative paragraph tracking how Steinbeck presents the setting of the river clearing in Chapter 1 and Chapter 6. How does the setting change in significance? What does this reveal about Steinbeck\'s structural choices?',
    worksheetQuestions: [
      {
        question:
          'Why is it important to compare ideas across different parts of a text rather than just analysing individual moments?',
        lines: 4,
        modelAnswer:
          'Comparing ideas across a text allows you to see how a writer develops meaning over time. A single moment tells you what a character feels or what a theme means at one point. A comparison reveals the trajectory — how attitudes shift, how themes deepen, and how the writer builds towards their overall message. This kind of analysis shows a sophisticated understanding of how the text works as a whole, not just in isolated parts.',
        marks: 3,
      },
      {
        question:
          'List five comparative connectives you could use in a cross-text analytical paragraph.',
        lines: 3,
        modelAnswer:
          '1) However, 2) In contrast, 3) Similarly, 4) Whereas, 5) Conversely. These connectives signal to the reader that you are making deliberate comparisons and help structure your argument.',
        marks: 2,
      },
      {
        question:
          'How does Steinbeck present violence differently in Chapter 1 (Lennie kills the mouse) and Chapter 5 (Lennie kills Curley\'s wife)? What pattern does this create?',
        lines: 8,
        modelAnswer:
          "In Chapter 1, Lennie's violence is small-scale and almost comic — he has accidentally killed a mouse by petting it too hard, which establishes his immense strength and inability to control it. Steinbeck presents this as innocent and pitiable. However, by Chapter 5, the same instinct — petting something soft — leads to the death of Curley's wife. The violence is no longer comic but catastrophic. Steinbeck creates a pattern of escalation: mouse, puppy, woman. Each incident is structurally parallel — the same cause (Lennie's desire to touch soft things) produces increasingly devastating consequences. This pattern suggests that tragedy is inevitable when society fails to protect vulnerable individuals, and that Lennie's fate was sealed from the opening chapter.",
        marks: 6,
      },
      {
        question:
          'Write a comparative paragraph tracking how Steinbeck presents the dream in Chapter 1 and Chapter 6. Include quotations from both chapters and explain the significance of the shift.',
        lines: 10,
        modelAnswer:
          "In Chapter 1, Steinbeck presents the dream as a source of warmth and hope. When Lennie begs George to \"tell about how it's gonna be\", the ritualistic repetition suggests the dream is a comforting story that sustains both men through hardship. The language is full of sensory pleasure — \"live off the fatta the lan'\" — creating a vision of abundance and security. However, in Chapter 6, when George repeats the dream one final time before killing Lennie, the same words carry an entirely different emotional weight. The reader knows the dream is over, transforming the passage from hope into elegy. Steinbeck's structural choice to bookend the novel with the dream creates a cyclical pattern that emphasises futility — the dream returns to where it started, having achieved nothing. This reflects Steinbeck's broader argument that the American Dream is not a path to success but a loop of hope and disappointment from which migrant workers could never escape.",
        marks: 8,
      },
    ],
    teacherNotes: [
      'This is one of the most analytically demanding lessons in the unit. Ensure the modelling is thorough and give students time to practise.',
      'The comparison grid is a transferable skill — students should be able to apply it to any text.',
      'The cyclical structure of Of Mice and Men (opening and closing at the river clearing) is a key structural feature for assessment preparation.',
      'Consider pairing this lesson with a re-read of the final chapter to refresh students\' memories before the assessment.',
    ],
    targetedSkills: [
      '9R.6',
      'Comparative Analysis',
      'Cross-Text Tracking',
      'Structural Analysis',
      'Analytical Writing',
    ],
  },

  // ── Lesson 15: Assessment — Timed Analytical Essay ───────────────────────
  {
    id: 'y9-15-assessment-timed-essay-omam',
    title: 'Assessment: Timed Analytical Essay',
    text: 'Of Mice and Men',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Demonstrate understanding of Of Mice and Men through a sustained analytical essay (9R.1-9R.7)',
      'Use evidence, analysis, and contextual knowledge to support a clear argument (9W.2)',
      'Apply comparative and conceptual skills developed throughout the unit',
      'Write with accuracy, fluency, and appropriate academic register',
    ],
    successCriteria: [
      'I can plan and write a structured essay with an introduction, analytical paragraphs, and a conclusion',
      'I can embed quotations and analyse language, form, and structure',
      "I can link my analysis to 1930s context and Steinbeck's purpose",
      'I can include at least one comparison across the text and one conceptual interpretation',
    ],
    keywords: [
      'essay',
      'argument',
      'thesis',
      'sustained',
      'analytical',
      'comparative',
      'conceptual',
      'conclusion',
    ],
    starterActivity: {
      title: 'Planning Under Timed Conditions',
      duration: '10 minutes',
      instructions:
        'Reveal the essay question: "How does Steinbeck present the theme of loneliness in Of Mice and Men?" Students plan using a grid: Introduction (thesis statement about loneliness), Paragraph 1 (Character 1 — how loneliness is presented through language/setting), Paragraph 2 (Character 2 — comparison/contrast), Paragraph 3 (How the theme develops across the novel), Conclusion (link to Steinbeck\'s purpose and 1930s context). Teacher circulates to check plans.',
      differentiation: {
        support:
          'Provide a planning template with character suggestions and a quotation bank for each character.',
        core: 'Students plan independently using the grid.',
        stretch:
          'Students plan a fourth paragraph offering an alternative interpretation or exploring a counter-argument.',
      },
      resources: [
        'Essay question slide',
        'Planning grid',
        'Quotation bank (support tier)',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Essay Writing',
        duration: '40 minutes',
        instructions:
          'Students write their essay in timed conditions. Expectations: three to four PEEL paragraphs with an introduction and conclusion. Students should aim for: embedded quotations, analysis of language and/or structure, at least one cross-text comparison, at least one reference to context, and at least one conceptual interpretation. Silence maintained throughout. Teacher circulates for discreet support. Five-minute warning before the end for proofreading.',
        differentiation: {
          support:
            'Allow access to the quotation bank, a context reference sheet, and sentence starters for the first paragraph. Access to the text.',
          core: 'Students write independently with access to the text only.',
          stretch:
            'Students aim for multiple conceptual interpretations, a sophisticated thesis, and a conclusion that evaluates Steinbeck\'s overall message about loneliness in society.',
        },
        resources: [
          'Lined essay paper or exercise books',
          'Of Mice and Men text',
          'Countdown timer display',
          'Sentence starters (support tier)',
          'Quotation bank (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Year 9 Reflection',
      duration: '5 minutes',
      instructions:
        'Students self-assess against five criteria: 1) Use of quotations, 2) Analysis of language/structure, 3) Reference to context, 4) Cross-text comparison, 5) Conceptual interpretation. Traffic light each criterion. Then write a brief reflection: "Looking back at the year, my biggest improvement in English has been... and my key target for Year 10 is..." Teacher collects essays for formal marking.',
      differentiation: {
        support: 'Provide a tick-box checklist for the five criteria.',
        core: 'Students traffic light and write a reflective comment.',
        stretch:
          'Students identify the most sophisticated sentence in their essay and explain what makes it effective.',
      },
    },
    homework:
      'Write a reflective letter to your future Year 10 self: What have you learned about analytical writing this year? What advice would you give yourself for GCSE English?',
    worksheetQuestions: [
      {
        question:
          'How does Steinbeck present the theme of loneliness in Of Mice and Men? Write a sustained analytical essay. You should consider: how loneliness affects different characters, how Steinbeck uses language, setting, and structure to convey loneliness, how the theme connects to 1930s American society, and what Steinbeck\'s overall message about loneliness might be.',
        lines: 40,
        modelAnswer:
          "This is a formal assessment question. A strong response will include: an introduction with a clear thesis about loneliness as a social condition; at least three analytical paragraphs using PEEL structure with embedded quotations; analysis of Steinbeck's language choices (e.g. animal imagery, setting descriptions, dialogue); at least one cross-text comparison showing how the theme develops; references to 1930s context (the Great Depression, segregation, itinerant workers, women's limited roles); at least one conceptual interpretation moving beyond surface-level analysis; and a conclusion linking the theme to Steinbeck's authorial purpose. Top-level responses will sustain a clear argument, use sophisticated vocabulary, compare multiple characters, and evaluate whether Steinbeck offers any hope or presents loneliness as an inescapable condition.",
        marks: 30,
      },
    ],
    teacherNotes: [
      'This is the final formal assessment of Year 9. Consider providing the essay question at the end of Lesson 14 so students can begin thinking.',
      'Mark using the school\'s KS3 assessment criteria with particular attention to the comparative and conceptual skills developed in this unit.',
      'Use the self-assessment and reflection data to write transition reports for the Year 10 English team.',
      'The reflective homework letter is a low-stakes but valuable activity that encourages metacognition.',
      'Students who perform significantly below expectation may benefit from a supported re-draft during a subsequent lesson.',
    ],
    targetedSkills: [
      '9R.1',
      '9R.2',
      '9R.3',
      '9R.4',
      '9R.5',
      '9R.6',
      '9R.7',
      '9W.2',
      'Essay Writing',
      'Timed Conditions',
      'Self-Assessment',
      'Comparative Analysis',
      'Conceptual Interpretation',
    ],
  },
];
