import type { LessonPlan } from '@/types'

export const y8FullLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 1 - THE HUNGER GAMES
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 1: Power and Inequality - First Reading ──────────────────────
  {
    id: 'y8-t1-01-power-inequality-first-reading',
    title: 'Power and Inequality - First Reading',
    text: 'The Hunger Games',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Read and respond to the opening chapters of The Hunger Games with a focus on power and inequality (8R.1)',
      'Identify how Suzanne Collins establishes the dystopian setting through descriptive detail (8R.4)',
      'Make inferences about the power dynamics between the Capitol and the Districts',
      'Begin to explore how the writer positions the reader to sympathise with the oppressed',
    ],
    successCriteria: [
      'I can describe the world of Panem and explain the relationship between the Capitol and the Districts',
      'I can identify at least three details that show inequality between the Capitol and District 12',
      'I can make inferences about how characters feel about the Reaping using evidence from the text',
      'I can explain how the writer makes the reader feel sympathy for Katniss and her community',
    ],
    keywords: [
      'dystopia',
      'inequality',
      'oppression',
      'Capitol',
      'district',
      'Reaping',
      'power',
      'control',
    ],
    starterActivity: {
      title: 'Dystopian World-Building Gallery',
      duration: '8 minutes',
      instructions:
        'Display four images representing different dystopian worlds (surveillance, poverty, propaganda, uniformity). Students work in pairs to rank them from "most oppressive" to "least oppressive" using mini-whiteboards. Pairs justify their top choice to the class. Teacher introduces the term "dystopia" and connects it to the world they are about to enter in The Hunger Games.',
      differentiation: {
        support:
          'Provide a glossary card defining "dystopia", "oppression", and "surveillance" with simple examples.',
        core: 'Students rank images and justify their reasoning independently.',
        stretch:
          'Students predict what features a dystopian society in a novel might include and explain why authors use dystopian settings.',
      },
      resources: ['Dystopian images slide', 'Mini-whiteboards', 'Glossary cards'],
    },
    mainActivities: [
      {
        title: 'Guided Reading: The Reaping (Chapter 1 Extract)',
        duration: '20 minutes',
        instructions:
          'Teacher reads aloud the opening extract describing District 12 and the Reaping, pausing at key moments to model inference. Students follow on their own copies and annotate for: details showing poverty, details showing the Capitol\'s power, and Katniss\'s emotional state. After reading, students complete a two-column table: "Evidence of Inequality" and "What This Tells Us About Power." Teacher models the first row, then students complete three more independently.',
        differentiation: {
          support:
            'Provide a pre-highlighted extract with key quotations underlined and the first two rows of the table completed as models.',
          core: 'Students annotate the extract and complete the table independently with at least three rows.',
          stretch:
            'Students add a third column - "How the Reader is Positioned" - and explain how Collins makes us feel about the Capitol through her language choices.',
        },
        resources: ['Chapter 1 extract handout', 'Two-column table worksheet', 'Annotation guide'],
      },
      {
        title: 'Exploring the Capitol vs. District 12',
        duration: '18 minutes',
        instructions:
          'Students work in groups of four to create a comparison poster or mind-map contrasting the Capitol and District 12. Each group is given additional short extracts describing Capitol citizens. Groups must find at least four contrasts (food, clothing, entertainment, safety) and select a key quotation for each. Groups present their most striking contrast to the class. Teacher facilitates discussion: "Why does Collins make the contrast so extreme?" and introduces the concept of the writer\'s purpose in establishing inequality.',
        differentiation: {
          support:
            'Provide a partially completed comparison grid with categories already listed and one example filled in.',
          core: 'Students identify four contrasts with supporting quotations from the extracts.',
          stretch:
            'Students write a paragraph explaining how Collins uses the contrast between Capitol and District to position the reader, using at least two embedded quotations.',
        },
        resources: [
          'Capitol descriptions extract sheet',
          'A3 paper or digital whiteboard',
          'Comparison grid template',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One-Sentence Summary',
      duration: '5 minutes',
      instructions:
        'Students write one sentence summarising the most important thing they have learned about power and inequality in The Hunger Games. Sentences must include one quotation from the text. Teacher selects three to read aloud and discusses what makes a strong summary sentence. Exit ticket: "On a scale of 1-5, how confident are you in explaining the power dynamics in Panem?"',
      differentiation: {
        support: 'Provide a sentence starter: "Collins shows inequality by..."',
        core: 'Students write their summary sentence independently with an embedded quotation.',
        stretch:
          'Students write two sentences - one about inequality and one predicting how Katniss might challenge the power structure.',
      },
    },
    homework:
      "Read Chapters 2-3 of The Hunger Games. Write five bullet points noting examples of inequality or the Capitol's control over the Districts. Bring these to the next lesson.",
    worksheetQuestions: [
      {
        question:
          'What is a dystopia? Give two features of the dystopian world in The Hunger Games.',
        lines: 4,
        modelAnswer:
          'A dystopia is an imagined society where life is extremely oppressive, unjust, or frightening. In The Hunger Games, two features are: (1) the Capitol controls all resources and forces children to fight to the death in the Hunger Games, and (2) the Districts live in poverty and fear while the Capitol lives in luxury.',
        marks: 3,
      },
      {
        question:
          'Find a quotation from the extract that shows District 12 is a place of poverty. Explain what it reveals about life in the District.',
        lines: 5,
        modelAnswer:
          'The description of the Seam as a place where "meadow" meets "scruffy" houses with sagging roofs shows that District 12 is neglected and impoverished. This reveals that the Capitol does not invest in the well-being of its citizens, treating them as expendable resources rather than people deserving of comfort or safety.',
        marks: 4,
      },
      {
        question:
          'How does Suzanne Collins make the reader feel sympathy for Katniss in the opening chapter? Use evidence to support your answer.',
        lines: 6,
        modelAnswer:
          'Collins makes the reader feel sympathy for Katniss by showing that she has had to become a provider for her family at a young age, hunting illegally to keep them alive. The fact that she must risk punishment to feed her sister Prim positions her as a brave and selfless character, which makes the reader admire and worry for her. The reader understands that the system is unjust, deepening our sympathy.',
        marks: 4,
      },
      {
        question:
          'Compare the Capitol and District 12 using the extract. Identify two differences and explain what they suggest about power in Panem.',
        lines: 8,
        modelAnswer:
          'The Capitol is presented as a place of excess and luxury, while District 12 is characterised by poverty and scarcity. For example, Capitol citizens have abundant food and extravagant clothing, whereas people in District 12 struggle to find enough to eat. This contrast suggests that power in Panem is based on exploitation - the Capitol maintains its wealth by taking from the Districts. The extreme inequality implies that the system is designed to keep the Districts weak and dependent, making rebellion almost impossible.',
        marks: 5,
      },
      {
        question:
          'Why do you think Collins chose to begin the novel on the day of the Reaping? What effect does this have on the reader?',
        lines: 5,
        modelAnswer:
          'Collins begins on the day of the Reaping to immediately create tension and fear, drawing the reader into the story through a moment of crisis. This structural choice means the reader experiences the dread and injustice of the system from the very first page, establishing the central theme of power and control. It also introduces Katniss as a character under threat, which generates empathy.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is the first lesson in the Hunger Games unit - spend time establishing context and vocabulary before diving into analysis.',
      'If students have not read the novel, the extract-based approach works well; if they have, encourage them to draw on wider knowledge.',
      'Consider displaying a map of Panem to help students visualise the relationship between Capitol and Districts.',
      "The comparison activity works well as a physical poster or a collaborative digital document - choose based on your class's needs.",
    ],
    targetedSkills: ['8R.1', '8R.4', 'Inference', 'Contextual Understanding', 'Comparison'],
  },

  // ── Lesson 2: Character Analysis - Katniss as Resistance ────────────────
  {
    id: 'y8-t1-02-character-analysis-katniss',
    title: 'Character Analysis - Katniss as Resistance',
    text: 'The Hunger Games',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Analyse how Collins presents Katniss as a symbol of resistance (8R.3)',
      'Explore how language choices reveal character traits and motivations (8R.5)',
      'Develop analytical paragraphs exploring character presentation',
      'Understand how a protagonist can embody themes of defiance and hope',
    ],
    successCriteria: [
      'I can identify at least three character traits of Katniss and support them with evidence',
      "I can analyse how specific word choices reveal Katniss's role as a resistant figure",
      'I can write a PEEL paragraph exploring how Collins presents Katniss',
      "I can explain how Katniss challenges the Capitol's power through her actions and choices",
    ],
    keywords: [
      'protagonist',
      'resistance',
      'defiance',
      'characterisation',
      'motivation',
      'symbolism',
      'connotation',
      'agency',
    ],
    starterActivity: {
      title: 'Character Trait Auction',
      duration: '7 minutes',
      instructions:
        'Display ten character traits on the board (e.g. brave, calculating, compassionate, rebellious, resourceful, loyal, stubborn, selfless, determined, fearful). Each pair has an imaginary budget of 100 points and must "bid" on the five traits they think best describe Katniss. Pairs justify their top choice with evidence from their reading so far. Teacher collects the most popular traits and displays them - these become the focus for analysis.',
      differentiation: {
        support:
          'Provide trait cards with simple definitions and a prompt: "I think Katniss is ___ because in the book she ___."',
        core: 'Students select five traits and justify each with a specific reference to the text.',
        stretch:
          'Students rank their five chosen traits in order of importance and explain which trait is most connected to the theme of resistance.',
      },
      resources: ['Character trait cards', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Close Analysis: Key Extracts Showing Resistance',
        duration: '20 minutes',
        instructions:
          "Provide students with three short extracts showing key moments of Katniss's defiance (e.g. volunteering for Prim, the three-finger salute, her actions in the arena). For each extract, students annotate for: language techniques used, what the language reveals about Katniss, and how the reader is positioned. Teacher models annotation of the first extract using a visualiser, focusing on verb choices and their connotations. Students work independently on extracts two and three, then compare annotations with a partner.",
        differentiation: {
          support:
            'Provide annotated example of extract one and a word bank of analytical verbs (suggests, implies, reveals, conveys, emphasises).',
          core: 'Students annotate all three extracts independently, identifying at least two techniques per extract.',
          stretch:
            "Students explore how Collins's use of first-person narration affects the reader's perception of Katniss's resistance - does her internal voice differ from her actions?",
        },
        resources: [
          'Three-extract handout',
          'Annotation colour code guide',
          'Analytical word bank',
        ],
      },
      {
        title: 'Writing an Analytical Paragraph: Katniss as a Symbol of Resistance',
        duration: '20 minutes',
        instructions:
          'Using one of the three extracts, students write a PEEL paragraph responding to: "How does Collins present Katniss as a figure of resistance?" Teacher models the Point and Evidence sentences on the board, then students write their Explain and Link independently. After 12 minutes, students swap paragraphs with a partner for peer feedback using a checklist (Has the student embedded a quotation? Is the explanation analytical rather than descriptive? Does the link connect back to the theme of resistance?). Students then have 5 minutes to redraft based on feedback.',
        differentiation: {
          support:
            'Provide a PEEL writing frame with sentence starters: "Collins presents Katniss as resistant through...", "This is evident when...", "The word ___ suggests...", "This reinforces the idea that..."',
          core: 'Students write a full PEEL paragraph and redraft after peer feedback.',
          stretch:
            "Students write two linked PEEL paragraphs - one on Katniss's external actions and one on her internal thoughts - and explain how the contrast between them deepens her characterisation.",
        },
        resources: [
          'PEEL writing frame',
          'Peer feedback checklist',
          'Analytical sentence starters',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Resistance Ranking',
      duration: '5 minutes',
      instructions:
        'Display the three key moments of resistance from the lesson on the board. Students rank them from "most defiant" to "least defiant" on a sticky note and write one sentence justifying their top choice. Teacher collects and reads a selection, facilitating debate about which moment most clearly challenges the Capitol\'s power.',
      differentiation: {
        support: 'Students choose one moment and explain why it shows resistance.',
        core: 'Students rank all three moments and justify their number one choice.',
        stretch:
          "Students predict how Katniss's resistance might escalate in the rest of the novel and what consequences this might bring.",
      },
    },
    homework:
      'Choose a moment from The Hunger Games where Katniss shows either courage or compassion. Write a PEEL paragraph explaining how Collins presents this quality. Use at least one embedded quotation.',
    worksheetQuestions: [
      {
        question:
          'List three character traits of Katniss Everdeen and provide a piece of evidence for each from the text.',
        lines: 6,
        modelAnswer:
          "Brave - she volunteers as tribute in place of her sister, knowing she may die. Resourceful - she has taught herself to hunt with a bow to feed her family. Defiant - she challenges the Capitol's rules by forming an alliance and refusing to accept their control over her humanity.",
        marks: 6,
      },
      {
        question:
          "Analyse the significance of Katniss volunteering to take Prim's place at the Reaping. What does this action reveal about her character and the theme of resistance?",
        lines: 6,
        modelAnswer:
          "Katniss's decision to volunteer is significant because it is one of the first moments of individual defiance against the Capitol's system. The Reaping is designed to enforce obedience through fear, but Katniss's act of love disrupts this - she turns a moment of submission into one of agency. This reveals her selflessness and establishes her as a character who will prioritise human bonds over institutional control, foreshadowing her role as a symbol of resistance.",
        marks: 5,
      },
      {
        question:
          'Choose a quotation that shows Katniss as a figure of resistance. Write a PEEL paragraph analysing how Collins presents her.',
        lines: 10,
        modelAnswer:
          "Collins presents Katniss as a figure of resistance who refuses to be dehumanised by the Games. This is evident when Katniss decorates Rue's body with flowers after her death, an act that is described as a deliberate statement. The verb choices suggest a conscious decision to honour humanity in a context designed to destroy it. By choosing beauty and dignity over the brutality the Capitol expects, Katniss transforms a moment of grief into an act of political defiance. This reinforces the novel's central theme that true power lies in compassion and solidarity, not in violence and control.",
        marks: 5,
      },
      {
        question:
          "How does Collins's use of first-person narration affect the way we understand Katniss's resistance? Explain with reference to the text.",
        lines: 6,
        modelAnswer:
          "First-person narration allows the reader to access Katniss's internal thoughts, revealing that her resistance is not always confident or planned - she often acts out of instinct, fear, or love rather than calculated rebellion. This makes her a more realistic and sympathetic protagonist because we see her doubts and vulnerabilities alongside her brave actions. It also positions the reader as an ally who understands her motivations in ways other characters cannot.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson builds on Lesson 1 - ensure students have a solid understanding of the power dynamics in Panem before focusing on Katniss's character.",
      'The peer feedback activity is crucial for developing self-editing skills - model what good feedback looks like before the activity.',
      "If time allows, show a short clip from the film adaptation to compare how Katniss's resistance is conveyed visually versus textually.",
      'Emphasise the difference between describing a character and analysing how a writer presents a character - this is a common KS3 misconception.',
    ],
    targetedSkills: ['8R.3', '8R.5', 'Character Analysis', 'PEEL Writing', 'Language Analysis'],
  },

  // ── Lesson 3: Embedding Quotations ──────────────────────────────────────
  {
    id: 'y8-t1-03-embedding-quotations',
    title: 'Embedding Quotations - "This suggests... because..."',
    text: 'The Hunger Games',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand the difference between dropped-in and embedded quotations (8R.2)',
      'Practise embedding quotations fluently within analytical sentences (8R.5)',
      'Use analytical stems such as "This suggests... because..." to develop explanations',
      'Apply quotation embedding skills to analysis of The Hunger Games',
    ],
    successCriteria: [
      'I can identify a dropped-in quotation and explain why it is less effective',
      'I can embed a quotation within my own sentence so it reads fluently',
      'I can follow an embedded quotation with "This suggests... because..." analysis',
      'I can write at least two analytical sentences with correctly embedded quotations',
    ],
    keywords: [
      'embed',
      'quotation',
      'integrate',
      'fluency',
      'analysis',
      'suggests',
      'implies',
      'conveys',
    ],
    starterActivity: {
      title: 'Spot the Difference: Dropped vs. Embedded',
      duration: '7 minutes',
      instructions:
        'Display two versions of the same analytical sentence - one with a "dropped-in" quotation and one with an embedded quotation. Students discuss in pairs: which sounds better and why? Teacher reveals the terms "dropped-in" and "embedded" and explains the rule: an embedded quotation should fit grammatically into the student\'s own sentence. Show three more pairs and students vote on which is embedded using thumbs up/down.',
      differentiation: {
        support:
          "Provide a colour-coded example where the student's words are blue and the quotation is red, making the integration visible.",
        core: 'Students identify embedded vs. dropped-in in three examples and explain the difference.',
        stretch:
          'Students rewrite the three dropped-in examples so they become embedded, changing the surrounding sentence as needed.',
      },
      resources: ['Comparison slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Modelling and Practising Quotation Embedding',
        duration: '18 minutes',
        instructions:
          'Teacher models how to embed a quotation in four steps: (1) Write your point sentence. (2) Choose a short, key quotation (ideally a word or phrase). (3) Weave the quotation into your own sentence so it reads as one fluent statement. (4) Follow with analysis using "This suggests... because..." or "The word ___ implies... which reveals..." Students practise with five quotations from The Hunger Games, embedding each into an analytical sentence. After completing three, they share their best sentence with a partner for feedback on fluency.',
        differentiation: {
          support:
            'Provide sentence frames: "Collins describes Katniss as ___[quotation]___, which suggests..." with the quotation already selected.',
          core: 'Students embed five quotations independently and follow each with an analytical comment.',
          stretch:
            'Students embed two quotations within a single sentence to create a comparison (e.g. "While Katniss is described as ___, the Capitol citizens are presented as ___").',
        },
        resources: [
          'Quotation embedding steps handout',
          'Five quotations from The Hunger Games',
          'Sentence frame support sheet',
        ],
      },
      {
        title: 'From Embedding to Analysis: Building Full Responses',
        duration: '22 minutes',
        instructions:
          'Students choose one of three focus questions about The Hunger Games (e.g. "How does Collins present the Capitol as oppressive?", "How is Katniss shown to be brave?", "How does Collins create tension during the Reaping?"). For their chosen question, students write two connected PEEL paragraphs, focusing specifically on embedding quotations fluently and following each with "This suggests... because..." analysis. Teacher circulates and uses a class tracker to note common errors. After 15 minutes, teacher pauses to address the most common embedding mistake and models the correction. Students revise their work in the remaining time.',
        differentiation: {
          support:
            'Provide a writing frame for one paragraph with the Point, Evidence (quotation selected), and sentence starters for Explain and Link.',
          core: 'Students write two paragraphs independently with embedded quotations and "This suggests..." analysis.',
          stretch:
            "Students write a third paragraph that synthesises their analysis, drawing together the quotations from both paragraphs to make a broader argument about Collins's intentions.",
        },
        resources: [
          'Three focus questions slide',
          'PEEL writing frame (support tier)',
          'Class tracker sheet for teacher',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Quotation Embedding Challenge',
      duration: '5 minutes',
      instructions:
        'Display a new, unseen short quotation from The Hunger Games on the board. Students have 90 seconds to embed it into an analytical sentence on their mini-whiteboard and add a "This suggests..." follow-up. Teacher selects three to display and the class votes on the most fluent embedding. Discuss what made the winning example effective.',
      differentiation: {
        support: 'Provide the sentence start: "Collins presents... through the description of..."',
        core: 'Students write their embedding and analysis independently within the time limit.',
        stretch:
          'Students attempt to embed the quotation in two different ways, showing flexibility in their analytical writing.',
      },
    },
    homework:
      'Find three quotations from The Hunger Games that relate to the theme of power. For each, write one analytical sentence embedding the quotation and following it with "This suggests... because...".',
    worksheetQuestions: [
      {
        question:
          'What is the difference between a "dropped-in" quotation and an "embedded" quotation? Give an example of each.',
        lines: 5,
        modelAnswer:
          "A dropped-in quotation is placed into writing without being grammatically integrated, e.g. \"Katniss is brave. 'I volunteer as tribute.'\" An embedded quotation is woven into the writer's own sentence so it reads fluently, e.g. \"When Katniss cries 'I volunteer as tribute,' she demonstrates her courage and selflessness.\" Embedded quotations are more effective because they show the student can handle evidence skillfully.",
        marks: 3,
      },
      {
        question:
          'Rewrite the following sentence so the quotation is embedded rather than dropped in:\n\n"The Capitol is powerful. \'They hold all the cards.\'"',
        lines: 3,
        modelAnswer:
          'Collins emphasises the Capitol\'s dominance by suggesting they "hold all the cards," implying that the Districts have no agency or control over their own fates.',
        marks: 2,
      },
      {
        question:
          'Embed the following quotation into an analytical sentence and follow it with a "This suggests... because..." explanation:\n\nQuotation: "his eyes were cold and calculating"',
        lines: 5,
        modelAnswer:
          'The character is described as having eyes that are "cold and calculating," which suggests he is emotionally detached and strategic. This implies he views others as pieces in a game rather than as people, because the adjective "cold" strips away warmth and humanity while "calculating" connotes deliberate, chess-like manipulation.',
        marks: 4,
      },
      {
        question:
          'Write a full PEEL paragraph about The Hunger Games, embedding at least one quotation and using "This suggests... because..." in your explanation.',
        lines: 10,
        modelAnswer:
          'Collins presents the Reaping as a mechanism of fear and control designed to maintain the Capitol\'s power. This is evident when the crowd is described as standing in "silence," a reaction that conveys both collective dread and enforced obedience. This suggests that the Capitol\'s authority is so absolute that even grief is suppressed, because any outward display of emotion could be interpreted as defiance and punished. The word "silence" also implies a loss of voice - the Districts literally cannot speak against their oppressors. This reinforces the novel\'s exploration of how totalitarian regimes use spectacle and terror to prevent resistance.',
        marks: 5,
      },
      {
        question:
          'A student writes: "Katniss is resourceful. She \'hunts in the woods.\' This is good because it shows she can look after herself." Improve this response by embedding the quotation and developing the analysis.',
        lines: 6,
        modelAnswer:
          'Collins presents Katniss as resourceful by showing that she regularly "hunts in the woods" beyond the District fence to feed her family. This suggests that Katniss is willing to break the Capitol\'s laws in order to survive, because hunting illegally requires both physical skill and moral courage. The fact that she has taught herself this skill implies a self-reliance born from necessity, positioning her as a character who refuses to be defeated by the system designed to oppress her.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This is a skill-focused lesson - the Hunger Games content is the vehicle, not the primary focus. Students should leave confident in the mechanical skill of embedding.',
      'Common mistakes to watch for: quotations that are too long (encourage single words or short phrases), quotations that do not fit grammatically, and analysis that retells rather than analyses.',
      'Display an "Analytical Verbs" poster (suggests, implies, conveys, reveals, emphasises, highlights, reinforces) for students to reference throughout.',
      'Consider using coloured pens: students write their own words in blue and quotations in red to visually check embedding quality.',
    ],
    targetedSkills: ['8R.2', '8R.5', 'Quotation Embedding', 'Analytical Writing', 'Close Reading'],
  },

  // ── Lesson 4: Analytical Essay Writing ──────────────────────────────────
  {
    id: 'y8-t1-04-analytical-essay-writing',
    title: 'Analytical Essay Writing',
    text: 'The Hunger Games',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Plan and structure an analytical essay in response to a question about The Hunger Games (8W.2)',
      'Write a cohesive essay with an introduction, developed body paragraphs, and a conclusion (8W.5)',
      'Sustain a clear argument throughout the essay, linking paragraphs to the central question',
      'Apply quotation embedding and analytical skills from previous lessons',
    ],
    successCriteria: [
      'I can plan an essay with a clear thesis and three supporting points',
      'I can write an introduction that addresses the question and outlines my argument',
      'I can write at least two developed PEEL paragraphs with embedded quotations',
      'I can write a conclusion that synthesises my argument without simply repeating it',
    ],
    keywords: [
      'thesis',
      'argument',
      'cohesion',
      'introduction',
      'conclusion',
      'topic sentence',
      'discourse marker',
      'synthesise',
    ],
    starterActivity: {
      title: 'Essay Structure Jigsaw',
      duration: '7 minutes',
      instructions:
        'Display a model essay response (without the question) that has been cut into six sections: introduction, three body paragraphs, and a conclusion. Students work in pairs to arrange the sections in the correct order. Once arranged, students identify the function of each section (introducing the argument, developing point 1, etc.). Teacher reveals the correct order and the essay question, highlighting how each paragraph connects back to it.',
      differentiation: {
        support:
          'Provide labelled cards (Introduction, Body 1, Body 2, Body 3, Conclusion) so students match sections to labels.',
        core: 'Students arrange and label sections independently, explaining the function of each.',
        stretch:
          'Students evaluate the model essay - which body paragraph is strongest and why? What could be improved?',
      },
      resources: ['Cut-up model essay', 'Section label cards'],
    },
    mainActivities: [
      {
        title: 'Planning an Analytical Essay',
        duration: '15 minutes',
        instructions:
          'Present the essay question: "How does Collins explore the theme of power in The Hunger Games?" Teacher models how to create a thesis statement - a single sentence that summarises the student\'s overall argument. Then, using a planning grid, teacher models selecting three key aspects of power (e.g. political control, surveillance, resistance) and matching each to a key quotation and analytical point. Students complete their own planning grid for the same question. Teacher circulates to check thesis statements and offer feedback before students begin writing.',
        differentiation: {
          support:
            'Provide a pre-populated planning grid with thesis options to choose from and quotations already selected - students match quotations to aspects of power.',
          core: 'Students create their own thesis and complete the planning grid with three points and quotations.',
          stretch:
            'Students plan a fourth "counter-argument" paragraph (e.g. "However, Collins also shows that power can be challenged through...") to add complexity.',
        },
        resources: ['Essay planning grid', 'Quotation bank handout', 'Thesis statement examples'],
      },
      {
        title: 'Timed Essay Writing',
        duration: '25 minutes',
        instructions:
          'Students write their essay in timed conditions. Teacher puts a timer on the board with suggested time splits: 3 minutes for introduction, 7 minutes per body paragraph (x2-3), 3 minutes for conclusion. Remind students of the success criteria: embedded quotations, analytical language ("This suggests..."), discourse markers between paragraphs ("Furthermore," "In contrast," "Most significantly"), and a conclusion that synthesises rather than repeats. Teacher circulates with a focus on introductions in the first five minutes, offering live feedback to students who are stuck.',
        differentiation: {
          support:
            'Provide an introduction writing frame and sentence starters for each PEEL component. Allow students to write two body paragraphs rather than three.',
          core: 'Students write a full essay (introduction, two-three body paragraphs, conclusion) independently.',
          stretch:
            'Students include a counter-argument paragraph and aim for sophisticated connectives ("Whilst Collins initially presents..., she ultimately reveals...").',
        },
        resources: [
          'Essay writing frame (support tier)',
          'Timer display',
          'Discourse markers reference sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Conclusion Swap',
      duration: '5 minutes',
      instructions:
        'Students swap their conclusion paragraph with a partner. Each student reads the other\'s conclusion and writes one positive comment and one improvement suggestion on a sticky note. Partners return the conclusions and students read their feedback. Teacher asks: "Did your conclusion synthesise your argument or just repeat it? What is the difference?" and takes two or three responses to reinforce the concept.',
      differentiation: {
        support: 'Provide a feedback frame: "One strength is... To improve, you could..."',
        core: "Students give specific, targeted feedback on the conclusion's effectiveness.",
        stretch:
          "Students rewrite their conclusion in light of their partner's feedback, improving its sophistication.",
      },
    },
    homework:
      'Complete and polish your essay if unfinished. If finished, reread your essay and highlight every embedded quotation in one colour and every analytical comment in another - check you have a balance of both.',
    worksheetQuestions: [
      {
        question:
          'What is a thesis statement? Write a thesis statement for the question: "How does Collins explore the theme of power in The Hunger Games?"',
        lines: 4,
        modelAnswer:
          "A thesis statement is a single sentence that summarises the writer's overall argument in response to the essay question. Example: \"Collins explores the theme of power through the Capitol's political control, the use of the Games as a tool of fear, and Katniss's emergence as a symbol of resistance, ultimately arguing that true power lies in hope and solidarity rather than oppression.\"",
        marks: 3,
      },
      {
        question:
          'What is the difference between a conclusion that repeats and a conclusion that synthesises? Write an example of a synthesising conclusion for the essay above.',
        lines: 6,
        modelAnswer:
          'A repeating conclusion simply restates the points already made. A synthesising conclusion draws the points together to make a broader, more insightful observation. Example: "Ultimately, Collins uses the Hunger Games not merely as a backdrop for an adventure story, but as a sustained critique of how power operates through fear, spectacle, and inequality. By positioning Katniss as a reluctant rebel, Collins suggests that the most powerful form of resistance is not violence but the refusal to be dehumanised."',
        marks: 4,
      },
      {
        question:
          'Write the opening paragraph (introduction) for an essay responding to: "How does Collins use the character of Katniss to challenge ideas about power?"',
        lines: 8,
        modelAnswer:
          "In The Hunger Games, Suzanne Collins presents Katniss Everdeen as a character who embodies resistance against an oppressive regime. Through her actions - volunteering for the Games, forming alliances, and refusing to play by the Capitol's rules - Katniss challenges the established power structures of Panem. Collins uses Katniss to argue that true strength comes not from political authority or violence, but from compassion, solidarity, and the courage to defy injustice. This essay will explore how Collins presents Katniss as a catalyst for change through her relationships, her choices in the arena, and her symbolic significance to the Districts.",
        marks: 5,
      },
      {
        question:
          'List three discourse markers that could be used to link body paragraphs in an analytical essay. For each, write a sentence showing how it could be used.',
        lines: 6,
        modelAnswer:
          '"Furthermore" - Furthermore, Collins reinforces the theme of power through the Capitol\'s use of surveillance. "In contrast" - In contrast, Katniss\'s quiet acts of compassion reveal a different kind of strength. "Most significantly" - Most significantly, it is Katniss\'s refusal to kill Peeta that poses the greatest challenge to the Capitol\'s authority.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson consolidates skills from Lessons 1-3. Ensure students have their annotated extracts and notes available.',
      'The timed writing element prepares students for assessment conditions - adjust timings based on class ability.',
      'Model the difference between a "repeating" and "synthesising" conclusion explicitly; this is a common weakness at KS3.',
      'Consider collecting essays for formative marking before the formal assessment in Lesson 5.',
    ],
    targetedSkills: ['8W.2', '8W.5', 'Essay Structure', 'Thesis Development', 'Analytical Writing'],
  },

  // ── Lesson 5: Assessment - Theme of Power ──────────────────────────────
  {
    id: 'y8-t1-05-assessment-theme-of-power',
    title: 'Assessment: Theme of Power in The Hunger Games',
    text: 'The Hunger Games',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Demonstrate understanding of how Collins explores the theme of power (8R.2, 8R.3, 8R.4, 8R.5)',
      'Write a sustained analytical essay under timed conditions (8W.2)',
      'Apply quotation embedding, analytical language, and essay structure skills independently',
      'Self-assess work against success criteria upon completion',
    ],
    successCriteria: [
      'I can write a clear thesis statement that addresses the question directly',
      'I can write at least two developed PEEL paragraphs with embedded quotations',
      'I can use analytical language ("This suggests...", "The writer implies...", "This reinforces...")',
      'I can write a synthesising conclusion that draws my argument together',
    ],
    keywords: [
      'assessment',
      'thesis',
      'analysis',
      'embedded quotation',
      'synthesise',
      'power',
      'control',
      'resistance',
    ],
    starterActivity: {
      title: 'Skill Recap and Confidence Check',
      duration: '5 minutes',
      instructions:
        'Display a checklist of key skills on the board: thesis statement, PEEL structure, embedded quotations, analytical stems, discourse markers, synthesising conclusion. Students self-assess each skill using a traffic light (green/amber/red) on their mini-whiteboard. Teacher takes a quick scan and offers one final tip for the most common amber/red area. Remind students of the assessment question and distribute the extract/quotation bank.',
      differentiation: {
        support:
          'Provide a one-page revision summary with examples of each skill from previous lessons.',
        core: 'Students self-assess and set one personal target for the assessment.',
        stretch:
          'Students write down one ambitious technique they will try to include (e.g. counter-argument, comparative point, or sophisticated connective).',
      },
      resources: ['Skills checklist slide', 'Mini-whiteboards', 'Revision summary sheet'],
    },
    mainActivities: [
      {
        title:
          'Timed Assessment: "How does Collins explore the theme of power in The Hunger Games?"',
        duration: '45 minutes',
        instructions:
          'Students complete the essay under timed conditions. The assessment question is: "How does Suzanne Collins explore the theme of power in The Hunger Games? You should consider: the relationship between the Capitol and the Districts, how characters respond to power, and how the writer uses language to convey ideas about power." Students are provided with an extract and a quotation bank. Teacher displays suggested time allocation: planning (5 mins), introduction (5 mins), body paragraphs (25 mins), conclusion (5 mins), proofreading (5 mins). Exam conditions: silent working, no talking, books closed except for the extract provided.',
        differentiation: {
          support:
            'Provide a planning frame with three bullet points to fill in, a quotation bank with six pre-selected quotations, and sentence starters for the introduction and conclusion.',
          core: 'Students write the full essay independently using the extract and quotation bank.',
          stretch:
            'Students are encouraged to use their own quotations from memory alongside the provided ones and to include a counter-argument or nuanced conclusion.',
        },
        resources: [
          'Assessment question sheet',
          'Extract handout',
          'Quotation bank',
          'Planning frame (support tier)',
          'Lined paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Reflection',
      duration: '5 minutes',
      instructions:
        'Students reread their essay and complete a self-assessment grid, rating themselves (Developing/Secure/Excelling) against five criteria: thesis statement, PEEL structure, embedded quotations, analytical language, and conclusion quality. Students then write one sentence identifying their biggest strength and one sentence identifying their area for development. Teacher collects essays and self-assessments together.',
      differentiation: {
        support:
          'Provide the self-assessment grid with clear descriptions of what each level looks like.',
        core: 'Students complete the self-assessment honestly and set a target for next term.',
        stretch:
          'Students write a short paragraph reflecting on how their analytical writing has improved across the five lessons of this unit.',
      },
    },
    homework:
      "No written homework. Students should read ahead for next term's poetry unit. Optional extension: write a creative response - a diary entry from Katniss's perspective reflecting on power.",
    worksheetQuestions: [
      {
        question:
          'Assessment Question: How does Suzanne Collins explore the theme of power in The Hunger Games? You should consider: the relationship between the Capitol and the Districts; how characters respond to power; and how the writer uses language to convey ideas about power. Write a full essay response.',
        lines: 40,
        modelAnswer:
          'A strong response will include: a clear thesis identifying Collins\'s multi-layered exploration of power; at least two developed PEEL paragraphs exploring different aspects (e.g. political power of the Capitol, symbolic power of the Games, personal power through resistance); fluently embedded quotations with analytical commentary using stems such as "This suggests..." and "The word ___ implies..."; discourse markers linking paragraphs; and a synthesising conclusion arguing for Collins\'s overall message about power. Top-band responses will show nuance (e.g. power is both oppressive and liberating) and may include a counter-argument or exploration of the writer\'s purpose.',
        marks: 30,
      },
    ],
    teacherNotes: [
      'This is a formal assessment - set up the room in exam conditions before students arrive.',
      'Decide in advance whether support-tier students will receive the full scaffold or just the quotation bank, based on their progress in Lessons 1-4.',
      "Mark using the school's KS3 assessment criteria or create a bespoke mark scheme aligned with 8R.2-8R.5 and 8W.2.",
      'Use the self-assessment data to inform planning for Term 2 - students who scored themselves as "Developing" on quotation embedding will need continued reinforcement.',
      'Consider sharing marked work with individual targets before the start of the next unit.',
    ],
    targetedSkills: [
      '8R.2',
      '8R.3',
      '8R.4',
      '8R.5',
      '8W.2',
      'Essay Writing',
      'Quotation Embedding',
      'Self-Assessment',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 2 - CONFLICT POETRY & SHAKESPEARE
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 6: Analysing a Conflict Poem ─────────────────────────────────
  {
    id: 'y8-t2-06-analysing-conflict-poem',
    title: 'Analysing a Conflict Poem',
    text: 'Conflict Poetry',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Read and respond to a conflict poem, identifying its themes and key ideas (8R.3)',
      "Analyse the poet's use of language, structure, and imagery to convey the experience of conflict (8R.5)",
      'Write analytical paragraphs about poetic techniques and their effects',
      'Begin to develop a personal response to poetry',
    ],
    successCriteria: [
      "I can summarise the poem's content and identify its central theme",
      'I can identify at least three language or structural techniques used by the poet',
      'I can analyse how the poet uses these techniques to convey ideas about conflict',
      'I can write a PEEL paragraph about the poem using embedded quotations',
    ],
    keywords: ['imagery', 'metaphor', 'simile', 'tone', 'mood', 'enjambment', 'caesura', 'stanza'],
    starterActivity: {
      title: 'Conflict Word Cloud',
      duration: '7 minutes',
      instructions:
        'Students have 90 seconds to write as many words as they associate with "conflict" on their mini-whiteboards. Teacher collects responses and builds a word cloud on the board. Discuss: do the words suggest conflict is only about war, or can it be broader (internal conflict, family conflict, societal conflict)? Teacher introduces the poem for the lesson and asks students to predict what kind of conflict it might explore based on its title.',
      differentiation: {
        support:
          'Provide prompt categories: physical conflict, emotional conflict, political conflict.',
        core: 'Students generate at least eight words independently and group them into categories.',
        stretch:
          'Students predict what techniques a poet might use to convey each type of conflict (e.g. violent imagery for war, short sentences for tension).',
      },
      resources: ['Mini-whiteboards', 'Word cloud software (optional)'],
    },
    mainActivities: [
      {
        title: 'First Reading and Annotation',
        duration: '20 minutes',
        instructions:
          'Teacher reads the poem aloud while students listen with eyes closed to focus on the sounds and rhythm. Second reading: students follow the text and annotate for initial reactions, questions, and powerful words or images. Third reading: students annotate more formally for techniques - imagery, structural features, shifts in tone, and key quotations. Teacher models annotation of the first stanza on the board, labelling technique, quotation, and effect. Students complete the remaining stanzas independently. Pairs compare annotations and select the three most important quotations in the poem.',
        differentiation: {
          support:
            'Provide a pre-annotated first stanza and a technique checklist (metaphor, simile, personification, enjambment, caesura, repetition) with definitions.',
          core: 'Students annotate the full poem independently, identifying at least four techniques.',
          stretch:
            "Students annotate for structural features as well as language - how does the poem's shape, line length, or stanza arrangement contribute to meaning?",
        },
        resources: [
          'Poem handout (large margins for annotation)',
          'Technique checklist',
          'Annotation colour code guide',
        ],
      },
      {
        title: 'Writing an Analytical Response',
        duration: '20 minutes',
        instructions:
          'Students write two PEEL paragraphs responding to: "How does the poet present the experience of conflict?" Students must focus on different techniques in each paragraph and embed quotations fluently. Teacher provides a model opening sentence for the first paragraph, then students continue independently. After 12 minutes, teacher pauses to share a strong example from the class (with permission), highlighting what makes it effective. Students revise and continue for the remaining time.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters and a quotation already selected for the first paragraph.',
          core: 'Students write two independent PEEL paragraphs with embedded quotations.',
          stretch:
            "Students write a third paragraph exploring how the poem's structure contributes to its meaning, moving beyond language analysis.",
        },
        resources: ['PEEL writing frame', 'Model opening sentence slide'],
      },
    ],
    plenaryActivity: {
      title: 'Personal Response Exit Ticket',
      duration: '5 minutes',
      instructions:
        'Students write on their exit ticket: "The most powerful moment in this poem is ___ because ___." Teacher collects exit tickets and reads two or three aloud, celebrating a range of personal responses. Remind students that there is no single "right" answer in poetry - what matters is supporting your interpretation with evidence.',
      differentiation: {
        support: 'Use the prompt as written with a sentence starter provided.',
        core: 'Students write their personal response independently with evidence.',
        stretch:
          'Students add: "If I could ask the poet one question, it would be ___ because ___."',
      },
    },
    homework:
      'Reread the poem at home and learn three key quotations by heart. Write a short paragraph explaining what the poem means to you personally.',
    worksheetQuestions: [
      {
        question:
          "Summarise the poem in three to four sentences. What is it about? What is the poet's message?",
        lines: 5,
        modelAnswer:
          'The poem explores the devastating impact of conflict on individuals and communities. The poet describes scenes of destruction and loss, using vivid imagery to convey both the physical horror and the emotional trauma of war. The central message is that conflict dehumanises people and leaves lasting scars that go beyond the battlefield.',
        marks: 3,
      },
      {
        question:
          'Identify and analyse one example of imagery in the poem. What technique is used and what effect does it create?',
        lines: 6,
        modelAnswer:
          'The poet uses a powerful metaphor to describe the aftermath of conflict, comparing the landscape to a wounded body. This technique creates a visceral, physical response in the reader by personifying the land as something that can feel pain. The effect is to suggest that conflict damages not only people but the world itself, extending the horror beyond the human to the environmental.',
        marks: 4,
      },
      {
        question:
          'How does the poet use structure (e.g. stanza length, enjambment, caesura) to convey ideas about conflict?',
        lines: 6,
        modelAnswer:
          'The poet uses enjambment to create a sense of momentum and chaos, mirroring the uncontrollable nature of conflict. Lines spill into one another without pause, reflecting how violence escalates beyond control. In contrast, a sudden caesura in the middle of the poem creates a jarring pause, forcing the reader to stop and absorb the horror of what has been described. This structural shift mirrors a moment of realisation or shock.',
        marks: 4,
      },
      {
        question:
          'Write a PEEL paragraph analysing how the poet presents the human cost of conflict.',
        lines: 10,
        modelAnswer:
          "The poet powerfully presents the human cost of conflict through emotive language and personal detail. This is evident through the use of intimate, domestic imagery juxtaposed with scenes of destruction, which forces the reader to recognise the individual lives behind the statistics of war. The contrast between the ordinary and the horrific suggests that conflict violently disrupts normality, tearing apart the fabric of everyday life. This reinforces the poet's broader message that the true cost of conflict is measured not in territory gained but in humanity lost.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'Choose a conflict poem appropriate to your class - options include poems by Wilfred Owen, Siegfried Sassoon, or contemporary poets exploring modern conflict.',
      'The three-reading approach (listen, read, annotate) helps students build understanding gradually before analysis.',
      'Emphasise that "conflict" in poetry can mean more than war - internal conflict, moral conflict, and societal tension are all valid interpretations.',
      'Keep annotated copies of the poem as students will need them for the comparison task in Lesson 7.',
    ],
    targetedSkills: ['8R.3', '8R.5', 'Poetry Analysis', 'Language Analysis', 'Personal Response'],
  },

  // ── Lesson 7: Comparing Two Poems ───────────────────────────────────────
  {
    id: 'y8-t2-07-comparing-two-poems',
    title: 'Comparing Two Conflict Poems',
    text: 'Conflict Poetry',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Compare how two poets present the theme of conflict using similarities and differences (8R.6)',
      'Use comparative connectives to structure a comparison essay (8W.2)',
      'Analyse how different techniques achieve different effects across two poems',
      'Develop the ability to sustain a comparative argument',
    ],
    successCriteria: [
      'I can identify at least two similarities and two differences between the poems',
      'I can use comparative connectives (similarly, in contrast, whereas, however) fluently',
      'I can write a comparative PEEL paragraph discussing both poems together',
      'I can evaluate which poem is more effective at conveying the experience of conflict',
    ],
    keywords: [
      'compare',
      'contrast',
      'similarly',
      'whereas',
      'however',
      'alternatively',
      'both poets',
      'in contrast',
    ],
    starterActivity: {
      title: 'Venn Diagram Speed Challenge',
      duration: '8 minutes',
      instructions:
        'Students are given the two poems and have four minutes to complete a Venn diagram identifying similarities (centre) and differences (outer circles) in themes, language, structure, and tone. After four minutes, pairs compare their diagrams and add any points they missed. Teacher collects the three most common similarities and differences on the board, establishing the key comparison points for the lesson.',
      differentiation: {
        support:
          'Provide a partially completed Venn diagram with two similarities already filled in and category prompts (theme, language, structure, tone).',
        core: 'Students complete the Venn diagram independently with at least three points in each section.',
        stretch:
          'Students rank their comparison points from most to least significant and explain which comparison would make the strongest essay focus.',
      },
      resources: ['Both poem handouts', 'Venn diagram template'],
    },
    mainActivities: [
      {
        title: 'Modelling Comparative Writing',
        duration: '15 minutes',
        instructions:
          'Teacher models writing a comparative PEEL paragraph on the board using one of the class\'s identified comparison points. Key teaching: instead of writing about Poem A then Poem B, weave both poems together using comparative connectives. Teacher demonstrates the "Point about both, Evidence from Poem A, Analyse, Evidence from Poem B, Analyse, Link comparing both" structure. Students copy the model paragraph and highlight every comparative connective in one colour and every quotation in another.',
        differentiation: {
          support:
            'Provide a comparative connectives word mat and a copy of the model paragraph with gaps for students to fill in.',
          core: 'Students copy, annotate, and identify the structure of the model paragraph.',
          stretch:
            'Students evaluate the model paragraph and suggest an improvement - could the analysis go deeper? Could a different quotation be more effective?',
        },
        resources: [
          'Model paragraph (written live)',
          'Comparative connectives word mat',
          'Highlighters',
        ],
      },
      {
        title: 'Writing a Comparative Response',
        duration: '25 minutes',
        instructions:
          "Students write their own comparative response to: \"Compare how the two poets present the experience of conflict. You should compare: the poets' ideas and perspectives, the poets' use of language and structure.\" Students write at least two comparative PEEL paragraphs. Teacher circulates with a focus checklist: Are both poems discussed in each paragraph? Are comparative connectives used? Are quotations embedded? After 18 minutes, teacher pauses to share a strong comparative connective from a student's work. Students continue and aim to write a brief conclusion evaluating which poem they find more effective.",
        differentiation: {
          support:
            'Provide a writing frame with the comparative structure scaffolded: "Both poets explore... In Poem A, the poet... Similarly/In contrast, Poem B..."',
          core: 'Students write two comparative PEEL paragraphs and a conclusion independently.',
          stretch:
            'Students write three paragraphs (language, structure, overall perspective) and include an evaluative judgement about which poem is more effective and why.',
        },
        resources: [
          'Comparative writing frame (support tier)',
          'Both poems with annotations from Lesson 6',
          'Focus checklist for teacher',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Which Poem Wins?',
      duration: '5 minutes',
      instructions:
        'Students vote (hands up or stand on a side of the room) for the poem they find more powerful. Three students from each side justify their choice in one sentence. Teacher summarises the debate and reinforces that evaluation is a high-level skill - explaining why you prefer one interpretation over another demonstrates sophisticated critical thinking.',
      differentiation: {
        support: 'Students choose a side and explain using: "I prefer Poem ___ because..."',
        core: 'Students justify their preference with specific reference to technique or effect.',
        stretch:
          'Students acknowledge the strength of the opposing poem before explaining why their choice is ultimately more effective.',
      },
    },
    homework:
      "Write a third comparative paragraph focusing on the poems' structures (e.g. stanza length, rhythm, enjambment). Use at least two comparative connectives.",
    worksheetQuestions: [
      {
        question:
          'List three similarities and three differences between the two conflict poems studied in this lesson.',
        lines: 8,
        modelAnswer:
          'Similarities: Both poems explore the destructive impact of conflict; both use vivid imagery to convey the horror of violence; both invite the reader to empathise with those affected. Differences: Poem A uses a first-person perspective while Poem B uses third person; Poem A focuses on an individual soldier while Poem B takes a broader view of a community; Poem A uses regular stanza lengths suggesting control while Poem B uses irregular structure suggesting chaos.',
        marks: 6,
      },
      {
        question:
          'Write a comparative PEEL paragraph comparing how the two poets use imagery to present conflict.',
        lines: 10,
        modelAnswer:
          "Both poets use powerful imagery to convey the devastating effects of conflict, though they achieve this in different ways. In Poem A, the poet employs a visceral simile to describe the physical impact of violence, creating a raw and immediate sense of horror that forces the reader to confront the reality of war. Similarly, Poem B uses imagery to convey suffering, yet this poet favours metaphor over simile, creating a more abstract and haunting impression that lingers in the reader's mind. While Poem A's directness shocks, Poem B's subtlety unsettles, suggesting that both approaches are effective at communicating the human cost of conflict, but through fundamentally different emotional registers.",
        marks: 5,
      },
      {
        question:
          'What are comparative connectives and why are they important in a comparison essay? Give three examples used in sentences.',
        lines: 6,
        modelAnswer:
          'Comparative connectives are linking words and phrases that show the relationship between two things being compared. They are important because they signal to the reader whether the writer is drawing a similarity or a contrast. Examples: "Similarly, Poem B also uses personification to convey the land\'s suffering." "In contrast, Poem A presents conflict through a personal lens." "Whereas Poem A ends with hope, Poem B closes on an image of irreversible loss."',
        marks: 3,
      },
      {
        question:
          'Which of the two poems do you find more effective at presenting the experience of conflict? Explain your choice with reference to both poems.',
        lines: 8,
        modelAnswer:
          "I find Poem A more effective because its use of first-person narration creates an intimate and immediate connection with the speaker, making the reader feel as though they are experiencing the conflict directly. While Poem B's broader perspective is powerful in showing the scale of destruction, Poem A's focus on one individual's sensory experience makes the horror more personal and therefore more impactful. However, Poem B's structural choices - particularly the fragmented lines - effectively mirror the chaos of conflict in a way that Poem A's more regular form does not achieve.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'Students will need their annotated copies of the poem from Lesson 6 - remind them to bring these.',
      'The biggest challenge in comparative writing is getting students to discuss both poems together rather than writing about each separately. The model paragraph is crucial.',
      'Consider pairing poems with clear similarities and differences to make the comparison accessible (e.g. a World War I poem with a modern conflict poem).',
      'The evaluative question in the plenary and worksheet prepares students for the assessment in Lesson 10.',
    ],
    targetedSkills: ['8R.6', '8W.2', 'Comparative Writing', 'Evaluation', 'Connective Use'],
  },

  // ── Lesson 8: Introduction to Macbeth - Power and Ambition ──────────────
  {
    id: 'y8-t2-08-macbeth-power-ambition',
    title: 'Introduction to Macbeth - Power and Ambition',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand the plot, characters, and historical context of Macbeth (8R.3)',
      'Explore how Shakespeare presents the themes of power and ambition in the opening scenes',
      "Make inferences about character motivations and their connection to the play's central themes",
      'Begin to engage with Shakespearean language and its effects',
    ],
    successCriteria: [
      'I can outline the basic plot of Macbeth and identify the key characters',
      'I can explain the historical context of the play (Jacobean England, the Divine Right of Kings)',
      "I can identify how the witches and Lady Macbeth influence Macbeth's ambition",
      'I can begin to analyse how Shakespeare uses language to present ambition as dangerous',
    ],
    keywords: [
      'ambition',
      'tragic hero',
      'prophecy',
      'regicide',
      'divine right',
      'Jacobean',
      'supernatural',
      'fate',
    ],
    starterActivity: {
      title: 'Would You... Moral Dilemma',
      duration: '7 minutes',
      instructions:
        'Present students with a series of "Would you..." scenarios on a sliding scale (e.g. "Would you cheat on a test if you knew you\'d never be caught?", "Would you betray a friend to get a promotion?", "Would you commit a crime if it made you king/queen?"). Students position themselves on an agree/disagree continuum. Teacher facilitates discussion about where students draw the line and introduces the central question of Macbeth: how far would you go if you were promised ultimate power?',
      differentiation: {
        support: 'Students respond with thumbs up/down and give a one-sentence reason.',
        core: 'Students explain their moral reasoning and consider where their limits lie.',
        stretch:
          'Students predict how a character in a play might justify crossing moral boundaries and what the consequences might be.',
      },
      resources: ['Moral dilemma scenarios slide'],
    },
    mainActivities: [
      {
        title: 'Contextual Introduction and Plot Overview',
        duration: '15 minutes',
        instructions:
          'Teacher delivers a concise introduction to Macbeth using a timeline or storyboard format: Jacobean context (James I, witchcraft, the Gunpowder Plot, the Divine Right of Kings), the plot in five acts (summarised on a handout), and the key characters (displayed as a relationship map). Students complete a context grid matching key terms (regicide, divine right, tragic hero, prophecy) to their definitions. Teacher emphasises the central question: is Macbeth a victim of fate or a villain of ambition?',
        differentiation: {
          support:
            'Provide a completed relationship map and a matching exercise for key terms rather than writing definitions.',
          core: 'Students complete the context grid and write a prediction: "I think Macbeth will... because..."',
          stretch:
            'Students consider why Shakespeare chose to write about regicide for a king who had survived an assassination attempt (the Gunpowder Plot) and what political message the play might carry.',
        },
        resources: [
          'Plot summary handout',
          'Character relationship map',
          'Context grid worksheet',
          'Timeline slide',
        ],
      },
      {
        title: "Reading Act 1, Scene 3: The Witches' Prophecy",
        duration: '25 minutes',
        instructions:
          "Students read an edited extract from Act 1, Scene 3 (the witches' prophecy and Macbeth's reaction). Teacher reads the witches' lines aloud using dramatic delivery, then students take roles for Macbeth and Banquo. After reading, students complete a three-part analysis task: (1) What do the witches promise Macbeth? (2) How does Macbeth react - what do his words reveal about his character? (3) How does Shakespeare use language in this scene to suggest that ambition is dangerous? Teacher models the third question using one example, then students write their own response. Class discussion: \"Are the witches creating Macbeth's ambition, or are they revealing something already inside him?\"",
        differentiation: {
          support:
            'Provide the extract with a modern English translation alongside the original and the first two questions answered as a model.',
          core: 'Students answer all three questions with quotations from the extract.',
          stretch:
            'Students explore the dramatic irony in the scene - what does the audience know (from the plot overview) that Macbeth does not? How does this affect tension?',
        },
        resources: [
          'Act 1, Scene 3 extract (edited)',
          'Modern translation sidebar',
          'Three-part analysis worksheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Macbeth: Victim or Villain?',
      duration: '5 minutes',
      instructions:
        'Students write "VICTIM" or "VILLAIN" on their mini-whiteboard and hold it up. Teacher counts and displays the split. Three students from each side give their one-sentence justification. Teacher introduces the idea that Macbeth is a "tragic hero" - someone who is both victim and villain - and asks students to hold this ambiguity in mind throughout the unit.',
      differentiation: {
        support: 'Students choose a side and complete: "I think Macbeth is a ___ because..."',
        core: 'Students justify their position with reference to the scene studied.',
        stretch:
          'Students argue the opposite position to the one they initially chose, demonstrating they can see both sides.',
      },
    },
    homework:
      'Research one of the following and write a paragraph: (a) the Gunpowder Plot and why it matters for understanding Macbeth, (b) Jacobean beliefs about witchcraft, or (c) the concept of the "tragic hero" in literature.',
    worksheetQuestions: [
      {
        question:
          'Who was the monarch when Macbeth was first performed? Why is this significant for understanding the play?',
        lines: 4,
        modelAnswer:
          "Macbeth was first performed for King James I. This is significant because James I was fascinated by witchcraft (he even wrote a book about it) and had survived the Gunpowder Plot, a real assassination attempt. Shakespeare's play about regicide and supernatural evil would have directly appealed to the king's interests while also reinforcing the message that killing a monarch leads to chaos and divine punishment.",
        marks: 3,
      },
      {
        question:
          'What do the witches prophesy for Macbeth in Act 1, Scene 3? How does Macbeth react to their words?',
        lines: 5,
        modelAnswer:
          'The witches prophesy that Macbeth will become Thane of Cawdor and then King of Scotland. Macbeth reacts with a mixture of shock, fascination, and barely concealed excitement. His reaction suggests that the idea of becoming king is not entirely new to him - the witches may be voicing an ambition he already harbours. His immediate desire to know more reveals that his ambition is quickly overtaking his moral judgement.',
        marks: 4,
      },
      {
        question: 'Explain the term "tragic hero." Why might Macbeth be considered a tragic hero?',
        lines: 5,
        modelAnswer:
          'A tragic hero is a character of high status who has a fatal flaw (hamartia) that leads to their downfall and eventual destruction. Macbeth is considered a tragic hero because he begins as a respected and loyal warrior, but his fatal flaw - his ambition - is exploited by the witches and Lady Macbeth, leading him to commit regicide and descend into tyranny and madness. His story follows the tragic arc from greatness to ruin.',
        marks: 4,
      },
      {
        question:
          "Do you think the witches create Macbeth's ambition or reveal an ambition that was already there? Explain your reasoning with reference to the text.",
        lines: 6,
        modelAnswer:
          'There is evidence for both interpretations. The fact that Macbeth is immediately captivated by the prophecy and does not dismiss it suggests the ambition was already present - the witches simply give it voice. However, without the prophecy, Macbeth might never have acted on his desire for power, which suggests the witches are the catalysts. Shakespeare leaves this deliberately ambiguous to explore the nature of temptation: is evil something done to us or something within us?',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is an introductory lesson - prioritise engagement and contextual understanding over deep analysis. Deep language analysis comes in Lesson 9.',
      "The moral dilemma starter sets up the central theme effectively. Choose scenarios appropriate to your class's maturity.",
      'The "Victim or Villain?" debate will run throughout the Macbeth portion of this unit - consider keeping a class tally that evolves.',
      'If students find the Shakespearean language challenging, use shared reading with frequent pausing to paraphrase.',
    ],
    targetedSkills: [
      '8R.3',
      'Contextual Understanding',
      'Shakespearean Language',
      'Inference',
      'Dramatic Awareness',
    ],
  },

  // ── Lesson 9: Soliloquy and Stagecraft ──────────────────────────────────
  {
    id: 'y8-t2-09-soliloquy-stagecraft',
    title: 'Soliloquy and Stagecraft in Macbeth',
    text: 'Macbeth',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand the dramatic function of a soliloquy and how it reveals character (8R.5)',
      "Analyse Shakespeare's language choices in Macbeth's key soliloquy (8W.5)",
      'Explore how stagecraft (lighting, positioning, delivery) enhances meaning',
      "Write an analytical response exploring how Shakespeare uses a soliloquy to present Macbeth's internal conflict",
    ],
    successCriteria: [
      'I can define "soliloquy" and explain why Shakespeare uses it',
      "I can analyse at least three language features in Macbeth's soliloquy",
      "I can explain how stagecraft choices (tone of voice, movement, lighting) could enhance the soliloquy's meaning",
      "I can write an analytical paragraph about how the soliloquy reveals Macbeth's inner conflict",
    ],
    keywords: [
      'soliloquy',
      'aside',
      'stagecraft',
      'dramatic irony',
      'internal conflict',
      'imagery',
      'iambic pentameter',
      'delivery',
    ],
    starterActivity: {
      title: 'Inner Voice vs. Outer Voice',
      duration: '7 minutes',
      instructions:
        'Display a scenario: "You see your best friend cheating on a test." Ask two volunteers to act it out: Student A speaks their "outer voice" (what they say to their friend) and Student B speaks the "inner voice" (what they are really thinking). Class discusses the difference between what we say and what we think. Teacher introduces the term "soliloquy" - a dramatic convention where a character speaks their inner thoughts aloud to the audience. Why is this a powerful tool for a playwright?',
      differentiation: {
        support:
          'Students contribute to the discussion by identifying the difference between inner and outer voice.',
        core: 'Students explain why a soliloquy is useful for revealing character to the audience.',
        stretch:
          "Students predict what Macbeth's inner thoughts might be before committing the murder and explain why Shakespeare would want the audience to hear them.",
      },
      resources: ['Scenario slide'],
    },
    mainActivities: [
      {
        title: 'Analysing Macbeth\'s Soliloquy: "Is this a dagger which I see before me?"',
        duration: '22 minutes',
        instructions:
          'Teacher reads the soliloquy aloud dramatically (Act 2, Scene 1). Students follow on their extract and underline any words or phrases that stand out. Teacher leads a guided analysis: line by line for the first six lines, modelling how to identify technique, embed a quotation, and explain effect. Students then work in pairs to annotate the remaining lines independently. Focus areas: imagery of the dagger, references to darkness and night, the shift from questioning to resolution, and the use of imperative verbs. After annotation, students write one analytical paragraph on: "How does Shakespeare use the soliloquy to reveal Macbeth\'s state of mind?"',
        differentiation: {
          support:
            'Provide a glossed version of the soliloquy with modern English translations and the first four annotations completed as a model.',
          core: 'Students annotate independently and write a full analytical paragraph.',
          stretch:
            "Students consider how the soliloquy connects to the wider theme of appearance versus reality - Macbeth sees a dagger that is not there. What does this suggest about his mental state and the play's themes?",
        },
        resources: [
          'Soliloquy extract with glossary',
          'Annotation guide',
          'Analytical paragraph writing frame',
        ],
      },
      {
        title: 'Stagecraft Workshop: Directing the Soliloquy',
        duration: '18 minutes',
        instructions:
          "In groups of four, students become directors. Each group must plan how they would stage the soliloquy, making decisions about: lighting (bright? dim? flickering?), positioning (centre stage? creeping forward? reaching for the dagger?), delivery (whispering? crescendo? broken rhythm?), and costume/props (real dagger shown? nothing on stage?). Groups record their decisions on a stagecraft planning sheet and annotate the extract with director's notes. Each group performs a 30-second excerpt of their version for the class. Class discusses which staging choices were most effective at revealing Macbeth's inner turmoil and why.",
        differentiation: {
          support:
            'Provide a menu of stagecraft options to choose from rather than generating ideas from scratch.',
          core: 'Groups make and justify four stagecraft decisions and perform their excerpt.',
          stretch:
            "Groups consider how different stagecraft choices could change the audience's interpretation - could staging make Macbeth seem more sympathetic or more villainous?",
        },
        resources: [
          'Stagecraft planning sheet',
          "Director's notes template",
          'Performance space in classroom',
        ],
      },
    ],
    plenaryActivity: {
      title: "One Thing I'd Change",
      duration: '5 minutes',
      instructions:
        'Students reflect on the performances they saw and write on a sticky note: "One stagecraft choice I would change and why." Teacher collects and reads three, facilitating brief discussion about how directorial choices shape audience interpretation. Link back to the key question: a soliloquy is not just words on a page - it is a living, performed moment, and our understanding of character changes depending on how it is delivered.',
      differentiation: {
        support: 'Students identify one thing they liked about a performance.',
        core: 'Students identify one change they would make and explain its effect on meaning.',
        stretch:
          "Students connect their suggested change to what it would reveal about Macbeth's character or mental state.",
      },
    },
    homework:
      'Learn the first six lines of the soliloquy by heart. Write a paragraph explaining why you think Shakespeare chose to include a soliloquy at this moment in the play - what does it achieve that dialogue between characters could not?',
    worksheetQuestions: [
      {
        question: 'What is a soliloquy? Why does Shakespeare use soliloquies in his plays?',
        lines: 4,
        modelAnswer:
          "A soliloquy is a speech in which a character speaks their thoughts aloud while alone on stage, addressing the audience directly. Shakespeare uses soliloquies to reveal a character's inner thoughts, feelings, and conflicts that they would not share with other characters. This creates dramatic irony (the audience knows more than other characters) and deepens the audience's understanding of and relationship with the character.",
        marks: 3,
      },
      {
        question:
          "Analyse the imagery of the dagger in Macbeth's soliloquy. What does the imagined dagger reveal about Macbeth's state of mind?",
        lines: 6,
        modelAnswer:
          "The dagger that Macbeth sees before him is a hallucination, revealing that his mind is torn between his ambition and his conscience. The fact that the dagger is not real but seems tangible to Macbeth suggests he is being consumed by his murderous intent - his imagination is manifesting his darkest desires. The dagger leads him towards Duncan's chamber, symbolising how ambition pulls him towards a point of no return. This imagery reveals a man on the brink of moral collapse.",
        marks: 4,
      },
      {
        question:
          "If you were directing this soliloquy, what three stagecraft decisions would you make? Explain how each would enhance the audience's understanding.",
        lines: 8,
        modelAnswer:
          "I would use dim, flickering lighting to suggest instability and moral darkness. I would have the actor begin whispering and gradually increase in volume as Macbeth's resolve hardens. I would position Macbeth downstage centre, reaching towards the empty air where the dagger appears, forcing the audience to share his perspective. These choices would enhance the soliloquy by making Macbeth's psychological disintegration visceral and immediate for the audience.",
        marks: 6,
      },
      {
        question:
          "Write a paragraph analysing how Shakespeare uses language in the soliloquy to present Macbeth's internal conflict.",
        lines: 10,
        modelAnswer:
          "Shakespeare presents Macbeth's internal conflict through a soliloquy that oscillates between doubt and determination. The opening question signals uncertainty and disbelief - Macbeth cannot trust his own senses, suggesting his conscience is resisting what his ambition demands. Shakespeare's use of dark imagery throughout the speech associates the murder with evil and the supernatural, revealing Macbeth's awareness that he is about to cross a moral threshold. Yet the soliloquy ends with resolution and action, suggesting that ambition ultimately overwhelms conscience. The shift from questioning to commanding in the final lines mirrors the character's tragic journey from hesitation to irreversible action.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson combines analytical reading with practical drama work - the stagecraft activity is essential, not optional.',
      'The "Is this a dagger" soliloquy works well because it is vivid, relatively accessible, and connects directly to the themes of ambition and moral conflict.',
      'If time is short, reduce the performance element to one or two groups presenting rather than all.',
      'Consider showing two contrasting filmed versions of the soliloquy (e.g. Ian McKellen vs. a modern film) to demonstrate how stagecraft choices change interpretation.',
    ],
    targetedSkills: [
      '8R.5',
      '8W.5',
      'Soliloquy Analysis',
      'Stagecraft',
      'Shakespearean Language',
      'Performance',
    ],
  },

  // ── Lesson 10: Assessment - Poetry Comparison ───────────────────────────
  {
    id: 'y8-t2-10-assessment-poetry-comparison',
    title: 'Assessment: Poetry Comparison',
    text: 'Conflict Poetry',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Demonstrate the ability to compare two conflict poems analytically (8R.2, 8R.3, 8R.4, 8R.5, 8R.6)',
      'Write a sustained comparative response under timed conditions',
      'Apply all analytical skills developed across the term: quotation embedding, PEEL, comparative connectives',
      'Self-assess work using success criteria',
    ],
    successCriteria: [
      'I can identify and compare themes, language, and structure across two poems',
      'I can use comparative connectives to integrate discussion of both poems',
      'I can embed quotations from both poems and analyse their effects',
      'I can write a conclusion evaluating which poem is more effective',
    ],
    keywords: [
      'compare',
      'evaluate',
      'analytical',
      'comparative connective',
      'embedded quotation',
      'perspective',
      'technique',
      'effect',
    ],
    starterActivity: {
      title: 'Comparative Skills Warm-Up',
      duration: '5 minutes',
      instructions:
        'Display two short, simple sentences about two different poems. Students rewrite them as one comparative sentence using a connective. Example: "Poem A uses metaphor." / "Poem B uses simile." becomes "While Poem A uses metaphor to convey..., Poem B achieves a similar effect through simile, suggesting..." Three examples are completed rapidly on mini-whiteboards. Teacher praises effective comparative connective use and reminds students of the assessment expectations.',
      differentiation: {
        support: 'Provide connective options to choose from for each example.',
        core: 'Students choose their own connectives and write fluent comparative sentences.',
        stretch:
          'Students add analytical depth to each comparative sentence, explaining the effect of each technique.',
      },
      resources: ['Example sentences slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Assessment: Compare How Two Poets Present Conflict',
        duration: '45 minutes',
        instructions:
          'Students complete a comparative poetry essay under timed conditions. Assessment question: "Compare how the poets present the experience of conflict in [Poem A] and [Poem B]. You should compare the poets\' ideas and perspectives, their use of language and structure, and their overall effectiveness." Students are provided with clean copies of both poems and a comparative connectives reference sheet. Suggested timing: planning (5 mins), introduction (5 mins), comparative paragraphs (25 mins), evaluative conclusion (5 mins), proofreading (5 mins). Exam conditions: silent working.',
        differentiation: {
          support:
            'Provide a planning frame, a pre-selected quotation bank (three quotations per poem), and sentence starters for the introduction and conclusion.',
          core: 'Students write a full comparative essay independently using the poems and connectives sheet.',
          stretch:
            'Students are encouraged to go beyond language and compare structural choices, develop a nuanced thesis, and include evaluative judgements throughout rather than only in the conclusion.',
        },
        resources: [
          'Assessment question sheet',
          'Both poems (clean copies)',
          'Comparative connectives reference sheet',
          'Planning frame (support tier)',
          'Lined paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '5 minutes',
      instructions:
        'Students complete a self-assessment grid rating their performance against five criteria: comparative structure, quotation embedding, analytical language, comparative connectives, and evaluative conclusion. Students write one strength and one improvement target. Teacher collects essays and self-assessments together for marking.',
      differentiation: {
        support: 'Provide the self-assessment grid with descriptors for each level.',
        core: 'Students self-assess honestly and set a specific, actionable target.',
        stretch:
          'Students write a reflection on how their comparative writing has developed since the start of the term.',
      },
    },
    homework:
      'No formal homework. Optional: rewrite your weakest paragraph from the assessment, improving it based on your self-assessment targets.',
    worksheetQuestions: [
      {
        question:
          "Assessment Question: Compare how the poets present the experience of conflict in the two poems you have studied. You should compare: the poets' ideas and perspectives; their use of language and structure; and their overall effectiveness. Write a full comparative essay.",
        lines: 40,
        modelAnswer:
          "A strong response will include: an introduction identifying the central comparison; at least two comparative PEEL paragraphs that discuss both poems together (not sequentially); fluent use of comparative connectives (similarly, in contrast, whereas, however); embedded quotations from both poems with analytical commentary; exploration of both language and structural choices; and an evaluative conclusion that makes a judgement about which poem is more effective and why. Top-band responses will show nuance, explore the poets' perspectives and contexts, and sustain a clear comparative argument throughout.",
        marks: 30,
      },
    ],
    teacherNotes: [
      'This assessment covers skills from Lessons 6-9. Ensure students have had adequate practice with comparative writing before this point.',
      'Decide whether to use the same poems studied in class or introduce one new unseen poem - the latter tests transfer of skills.',
      "Mark using the school's KS3 assessment criteria with a focus on 8R.2-8R.6 and comparative writing quality.",
      'Use results to identify students who need targeted support in comparative connective use or quotation embedding for Term 3.',
      'Return marked assessments with individual targets before Term 3 begins.',
    ],
    targetedSkills: [
      '8R.2',
      '8R.3',
      '8R.4',
      '8R.5',
      '8R.6',
      'Comparative Writing',
      'Poetry Analysis',
      'Self-Assessment',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TERM 3 - RHETORIC & MEDIA
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 11: Analysing a Speech - Persuasive Techniques ───────────────
  {
    id: 'y8-t3-11-analysing-speech-persuasive',
    title: 'Analysing a Speech - Persuasive Techniques',
    text: 'Rhetoric & Persuasion',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse persuasive techniques used in a famous speech (8R.3)',
      'Understand the rhetorical triangle (ethos, pathos, logos) and apply it to analysis (8R.5)',
      'Analyse how a speaker uses language to persuade a specific audience',
      'Write analytical responses about the effect of persuasive techniques',
    ],
    successCriteria: [
      'I can define ethos, pathos, and logos with examples',
      'I can identify at least five persuasive techniques in a speech',
      'I can analyse the effect of these techniques on the audience',
      'I can write a PEEL paragraph about how the speaker uses language to persuade',
    ],
    keywords: [
      'rhetoric',
      'ethos',
      'pathos',
      'logos',
      'persuasion',
      'anaphora',
      'tricolon',
      'emotive language',
    ],
    starterActivity: {
      title: 'Persuasion in Action',
      duration: '7 minutes',
      instructions:
        'Display three short advertising slogans or taglines. Students identify which appeal each one uses: emotional (pathos), logical (logos), or credibility (ethos). Teacher introduces the rhetorical triangle and explains that great speeches use all three. Students draw and label the triangle in their books. Quick-fire round: teacher reads five short extracts and students hold up a card labelled E (ethos), P (pathos), or L (logos) for each.',
      differentiation: {
        support:
          'Provide a reference card with definitions and examples of ethos, pathos, and logos.',
        core: 'Students identify the dominant appeal in each extract and justify their choice.',
        stretch:
          'Students explain how a speaker might combine all three appeals in a single sentence and write an example.',
      },
      resources: ['Advertising slogans slide', 'E/P/L cards', 'Rhetorical triangle diagram'],
    },
    mainActivities: [
      {
        title: 'Analysing a Famous Speech',
        duration: '22 minutes',
        instructions:
          'Play an audio or video recording of a famous speech (e.g. a historical address on justice or equality - choose a speech appropriate to your context). Students listen once for overall impact, then receive the transcript. Second reading: students annotate the transcript for persuasive techniques using a colour code: rhetorical questions (red), emotive language (blue), repetition/anaphora (green), tricolon/list of three (purple), direct address (orange). Teacher models annotation of the first paragraph on the board. Students annotate the rest independently. After annotation, teacher leads a class discussion: "Which technique is the most powerful in this speech and why?"',
        differentiation: {
          support:
            'Provide a simplified version of the transcript with the first five techniques pre-identified and labelled.',
          core: 'Students annotate the full transcript independently, identifying at least eight techniques.',
          stretch:
            'Students annotate for structural persuasion as well - how does the speech build? Where is the climax? How does the opening hook the audience?',
        },
        resources: [
          'Audio/video of speech',
          'Transcript handout (wide margins)',
          'Colour code annotation guide',
          'Persuasive techniques glossary',
        ],
      },
      {
        title: 'Writing an Analytical Response',
        duration: '18 minutes',
        instructions:
          'Students write two PEEL paragraphs in response to: "How does the speaker use language to persuade their audience?" Each paragraph must focus on a different technique, embed a quotation from the speech, and explain its effect on the audience. Teacher provides a model topic sentence and students continue independently. After 12 minutes, students swap with a partner and use a peer checklist to assess: Has the technique been named? Is the quotation embedded? Is the effect on the audience explained? Students revise in the remaining time.',
        differentiation: {
          support:
            'Provide a writing frame with the first paragraph partially completed and sentence starters for the second.',
          core: 'Students write two PEEL paragraphs independently and revise after peer feedback.',
          stretch:
            "Students write a third paragraph connecting the speech's persuasive techniques to the rhetorical triangle - which appeal dominates and why is this effective for the specific audience?",
        },
        resources: [
          'PEEL writing frame',
          'Peer assessment checklist',
          'Annotated transcript from previous activity',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Technique Ranking',
      duration: '5 minutes',
      instructions:
        'Display the five most commonly identified techniques from the speech. Students rank them from most to least persuasive on their mini-whiteboard. Teacher asks two or three students to justify their number one choice. Discuss: does the "most effective" technique depend on the audience? Could a different audience respond differently?',
      differentiation: {
        support: 'Students choose the most effective technique and explain why.',
        core: 'Students rank all five and justify their top choice.',
        stretch:
          'Students consider how the same speech might need to be adapted for a different audience and which techniques would change.',
      },
    },
    homework:
      'Find a persuasive speech, advertisement, or opinion article online. Identify three persuasive techniques used and explain their effect on the audience in a paragraph.',
    worksheetQuestions: [
      {
        question:
          'Define ethos, pathos, and logos. Give an example of each from the speech studied in this lesson.',
        lines: 6,
        modelAnswer:
          "Ethos is an appeal to the speaker's credibility or authority - for example, when the speaker references their experience or position. Pathos is an appeal to the audience's emotions - for example, when the speaker uses emotive language to describe suffering or injustice. Logos is an appeal to logic and reason - for example, when the speaker uses statistics or logical arguments to support their point.",
        marks: 6,
      },
      {
        question:
          'Identify and analyse one example of repetition or anaphora in the speech. What effect does it create?',
        lines: 5,
        modelAnswer:
          'The speaker uses anaphora to build momentum and emphasis, repeating a key phrase at the start of successive sentences. This creates a rhythmic, almost musical quality that makes the message memorable and emotionally powerful. The repetition also suggests conviction - the speaker returns to the same idea insistently, implying it is non-negotiable and central to their vision.',
        marks: 4,
      },
      {
        question:
          'How does the speaker use direct address to connect with the audience? Analyse one example.',
        lines: 5,
        modelAnswer:
          'The speaker uses the pronoun "you" and "we" to directly address the audience, creating a sense of shared responsibility and unity. By using "we," the speaker positions themselves alongside the audience rather than above them, building trust (ethos) and making the audience feel they are part of a collective movement. This technique makes the message personal and urgent, as though each listener has a role to play.',
        marks: 4,
      },
      {
        question:
          'Write a PEEL paragraph analysing how the speaker uses emotive language to persuade the audience.',
        lines: 10,
        modelAnswer:
          "The speaker uses emotive language to create a powerful appeal to pathos, stirring the audience's feelings of injustice and hope. This is evident through carefully chosen words that evoke strong emotional responses, moving the audience from anger at the current situation to determination for change. The effect of this emotive language is to make the issue feel personal and immediate rather than abstract, because the speaker connects large-scale injustice to individual human suffering. This strategy is highly effective because it motivates action through feeling - the audience is not merely informed but moved, which is ultimately what persuasion requires.",
        marks: 5,
      },
    ],
    teacherNotes: [
      'Choose a speech that is age-appropriate, engaging, and rich in techniques. Historical speeches about justice and equality tend to work well.',
      'Playing the audio/video first (before distributing the transcript) helps students experience the speech as a performance, not just a text.',
      'The rhetorical triangle provides a framework that students can apply to any persuasive text - reinforce it throughout Term 3.',
      'Consider creating a classroom display of persuasive techniques with examples that students can reference in Lessons 12-15.',
    ],
    targetedSkills: [
      '8R.3',
      '8R.5',
      'Rhetorical Analysis',
      'Persuasive Techniques',
      'Audience Awareness',
    ],
  },

  // ── Lesson 12: Writing a Speech ─────────────────────────────────────────
  {
    id: 'y8-t3-12-writing-a-speech',
    title: 'Writing a Persuasive Speech',
    text: 'Rhetoric & Persuasion',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Plan and write a persuasive speech for a specific audience and purpose (8W.1)',
      'Apply rhetorical techniques studied in Lesson 11 to original writing (8W.6)',
      'Structure a speech with a clear opening, developed argument, and powerful conclusion',
      'Perform and evaluate speeches, considering the impact of delivery',
    ],
    successCriteria: [
      'I can plan a speech with a clear thesis and three supporting arguments',
      'I can use at least four persuasive techniques deliberately in my speech',
      'I can write an engaging opening and a powerful conclusion',
      'I can deliver my speech with appropriate tone, pace, and emphasis',
    ],
    keywords: [
      'rhetoric',
      'audience',
      'purpose',
      'opening hook',
      'call to action',
      'anaphora',
      'tricolon',
      'delivery',
    ],
    starterActivity: {
      title: 'The 30-Second Pitch',
      duration: '7 minutes',
      instructions:
        'Each student has 30 seconds to persuade a partner to agree with a fun, low-stakes opinion (e.g. "Summer is better than winter", "Dogs are better than cats", "Homework should be banned"). Partners then swap. After both have spoken, teacher asks: "What did your partner do that was persuasive? What techniques did they use naturally?" Teacher lists natural persuasive strategies on the board and links them to the formal terms from Lesson 11 (e.g. "They gave reasons" = logos; "They got emotional" = pathos; "They said everyone agrees" = bandwagon).',
      differentiation: {
        support: 'Provide the opinion and three bullet-point arguments to use in the pitch.',
        core: 'Students deliver their pitch and identify one technique they used naturally.',
        stretch:
          'Students deliberately revise their pitch to include a technique they did not use the first time, then deliver it again.',
      },
      resources: ['Opinion cards', 'Timer'],
    },
    mainActivities: [
      {
        title: 'Planning a Persuasive Speech',
        duration: '15 minutes',
        instructions:
          'Teacher presents three speech topics for students to choose from (e.g. "Social media does more harm than good", "Every student should learn a musical instrument", "We should have a four-day school week"). Students choose a topic and complete a planning grid: thesis statement, audience, three key arguments, evidence/examples for each, techniques to use, opening hook, and closing call to action. Teacher models completing the planning grid for a fourth topic on the board. Students work independently on their plans. Teacher circulates to check thesis statements are clear and arguments are distinct.',
        differentiation: {
          support:
            'Provide a partially completed planning grid with the thesis and one argument already filled in. Include a technique checklist to select from.',
          core: 'Students complete the planning grid independently with three arguments and at least four planned techniques.',
          stretch:
            'Students plan a counter-argument section ("Some people might argue that... However...") to add sophistication to their speech.',
        },
        resources: [
          'Speech topics slide',
          'Planning grid worksheet',
          'Persuasive techniques checklist',
        ],
      },
      {
        title: 'Drafting and Delivering',
        duration: '25 minutes',
        instructions:
          'Students draft their speech (aim: 200-300 words). Teacher writes key reminders on the board: start with a hook (question, statistic, bold statement), use the rhetorical triangle throughout, vary sentence length for impact, end with a call to action. Students draft for 15 minutes, then practise delivering their speech to a partner. Partners give feedback on both content and delivery (Was the opening engaging? Could you identify the techniques? Was the conclusion powerful? Was the delivery confident?). In the final five minutes, three volunteers deliver their speeches to the class. Class identifies the techniques used and votes on the most persuasive moment.',
        differentiation: {
          support:
            'Provide a speech writing frame with sentence starters for the opening, each argument, and the conclusion.',
          core: 'Students write and deliver a 200-300 word speech independently.',
          stretch:
            'Students incorporate audience interaction (e.g. asking the audience a rhetorical question, pausing for effect) and aim for a 2-minute delivery with varied tone and pace.',
        },
        resources: [
          'Speech writing frame (support tier)',
          'Key reminders slide',
          'Peer feedback sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Golden Sentence',
      duration: '5 minutes',
      instructions:
        'Each student rereads their speech and underlines the one sentence they are most proud of - their "golden sentence." Five students read their golden sentence aloud. Teacher asks: "Why is this sentence effective? Which technique does it use?" Celebrate strong writing and remind students that these skills transfer to all persuasive writing, not just speeches.',
      differentiation: {
        support: 'Students choose their golden sentence and identify the technique used.',
        core: 'Students explain why their golden sentence is effective and how it would impact the audience.',
        stretch:
          'Students revise their golden sentence to make it even stronger, then share both versions to show improvement.',
      },
    },
    homework:
      'Polish and finalise your speech at home. Practise delivering it aloud at least twice. Be ready to perform it in a future lesson if selected.',
    worksheetQuestions: [
      {
        question:
          'Write an effective opening for a speech arguing that homework should be reduced. Use at least one rhetorical technique.',
        lines: 5,
        modelAnswer:
          'How many hours of your life have you spent staring at textbooks when you could have been pursuing your passions, spending time with your family, or simply resting? Every evening, millions of students sacrifice their wellbeing at the altar of homework - and for what? It is time to ask whether the mountains of homework we assign are truly helping our young people learn, or whether they are simply drowning them.',
        marks: 4,
      },
      {
        question:
          'What is a "call to action" and why is it important at the end of a speech? Write an example.',
        lines: 4,
        modelAnswer:
          'A call to action is a direct instruction or appeal to the audience telling them what you want them to do next. It is important because it turns passive listening into active response - the audience leaves the speech knowing exactly how to make a difference. Example: "So I urge you - speak up, sign the petition, and demand change. Because if we do not act now, no one will."',
        marks: 3,
      },
      {
        question:
          'Write the body of a speech (one argument paragraph) using at least three persuasive techniques. Label each technique in the margin.',
        lines: 10,
        modelAnswer:
          '[Direct address] You know what it feels like to be ignored. You know the frustration of speaking and not being heard. [Tricolon] Our voices matter, our experiences matter, our futures matter. [Statistic/logos] Research shows that when young people are given a platform, communities become stronger, schools become fairer, and society moves forward. [Emotive language/pathos] We cannot afford to silence an entire generation simply because they are young. The cost of their silence is not measured in grades or attendance - it is measured in lost potential, crushed confidence, and broken trust.',
        marks: 5,
      },
      {
        question:
          "Explain how a speaker's delivery (tone, pace, volume, pauses) can enhance the persuasiveness of a speech. Give two specific examples.",
        lines: 5,
        modelAnswer:
          "Delivery transforms words on a page into a living, breathing argument. For example, slowing pace before a key point creates anticipation and signals to the audience that something important is coming, making the message more memorable. Similarly, raising volume during an emotional climax intensifies the pathos and conveys passion and conviction, which can inspire the audience to feel the speaker's urgency.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is the creative counterpart to Lesson 11 - students move from analysis to application.',
      'The 30-second pitch starter is energising and lowers the stakes before formal speech writing begins.',
      'If time is tight, reduce the performance element to partner delivery only and save whole-class performances for a future lesson.',
      "Consider recording willing students' speeches on video for use in self-reflection or portfolio work.",
    ],
    targetedSkills: [
      '8W.1',
      '8W.6',
      'Persuasive Writing',
      'Speech Writing',
      'Rhetorical Techniques',
      'Oral Delivery',
    ],
  },

  // ── Lesson 13: Media Literacy - Bias in News ───────────────────────────
  {
    id: 'y8-t3-13-media-literacy-bias',
    title: 'Media Literacy - Bias in News',
    text: 'Rhetoric & Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Understand what media bias is and how it operates in news reporting (8R.4)',
      'Identify techniques used to create bias: selection, omission, framing, language choice',
      'Compare two news reports on the same event to identify different perspectives',
      'Develop critical reading skills for evaluating non-fiction texts',
    ],
    successCriteria: [
      'I can define media bias and explain why it matters',
      'I can identify at least three techniques used to create bias in a news article',
      'I can compare two reports on the same event and explain how they present different perspectives',
      "I can explain how word choice affects the reader's perception of an event",
    ],
    keywords: [
      'bias',
      'perspective',
      'framing',
      'selection',
      'omission',
      'headline',
      'connotation',
      'objectivity',
    ],
    starterActivity: {
      title: 'Same Event, Different Headlines',
      duration: '8 minutes',
      instructions:
        'Display two contrasting headlines about the same event (e.g. "Brave Protesters Stand Up for Rights" vs. "Mob Causes Chaos in City Centre"). Students discuss in pairs: Do these headlines describe the same event? How do you know? What is different about them? Which one do you trust more - and why? Teacher reveals both headlines are about the same event and introduces the concept of "framing" - how the way a story is told shapes the reader\'s response. Ask: "Is any news truly objective?"',
      differentiation: {
        support:
          'Provide a sentence frame: "Headline A makes me feel ___ because the word ___ suggests..."',
        core: 'Students identify the different perspectives and explain how word choice creates bias.',
        stretch:
          'Students write a third headline that attempts to be neutral and explain what they had to change and why pure neutrality is difficult.',
      },
      resources: ['Contrasting headlines slide'],
    },
    mainActivities: [
      {
        title: 'Bias Detection: Analysing Two News Reports',
        duration: '22 minutes',
        instructions:
          'Provide students with two news reports about the same event, written from different perspectives. Students read both reports and complete a comparison grid analysing: headline language, opening sentence, facts included, facts omitted, quotations selected, adjectives and verbs used, overall tone. Teacher models completing the first row (headline analysis) on the board, explicitly naming the bias technique used (e.g. "loaded language", "selection bias", "framing"). Students complete the remaining rows independently. After completing the grid, students write a summary sentence: "Report A is biased towards ___ because ___, while Report B is biased towards ___ because ___."',
        differentiation: {
          support:
            'Provide a simplified comparison grid with fewer rows and the key quotations from each report pre-highlighted.',
          core: 'Students complete the full comparison grid and write a summary sentence.',
          stretch:
            'Students identify what information a truly balanced report would need to include, drawing from both sources and noting what both omit.',
        },
        resources: [
          'Two news reports (same event, different perspectives)',
          'Comparison grid worksheet',
          'Bias techniques glossary',
        ],
      },
      {
        title: 'The Power of Word Choice',
        duration: '17 minutes',
        instructions:
          'Teacher presents five pairs of sentences describing the same action with different word choices (e.g. "The politician explained his policy" vs. "The politician defended his controversial policy"). For each pair, students identify how the word choice changes the reader\'s perception. Students then complete a word-swap challenge: given a "neutral" news paragraph, they rewrite it twice - once with a positive bias and once with a negative bias - changing only the adjectives, verbs, and adverbs. Pairs swap their biased paragraphs and try to identify which is positive and which is negative. Class discussion: "How easy is it to manipulate a reader through word choice alone?"',
        differentiation: {
          support:
            'Provide a word bank of positive and negative alternatives for the key words in the neutral paragraph.',
          core: 'Students rewrite the paragraph twice, changing at least five words each time.',
          stretch:
            'Students write a paragraph explaining how and why media organisations might use biased language, connecting to broader ideas about power and influence.',
        },
        resources: [
          'Word-choice pairs slide',
          'Neutral paragraph handout',
          'Positive/negative word bank (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Bias Spotter Pledge',
      duration: '5 minutes',
      instructions:
        'Students write a "Media Literacy Pledge" on a card: "I will be a critical reader by..." completing the sentence with one specific action they will take when reading news in the future (e.g. "...checking multiple sources", "...looking for loaded language", "...asking what has been left out"). Teacher collects and reads a selection. Display a summary: "Every text has a perspective. A critical reader asks: whose perspective? What is included? What is left out? Why?"',
      differentiation: {
        support: 'Choose from three provided pledge options and explain why they chose it.',
        core: 'Students write their own pledge with a specific, actionable commitment.',
        stretch:
          'Students add a second sentence explaining why their pledge matters for being an informed citizen.',
      },
    },
    homework:
      'Find two different news sources reporting on the same event. Write a paragraph comparing how they present the event differently, identifying at least two bias techniques.',
    worksheetQuestions: [
      {
        question:
          'What is media bias? Give two reasons why it is important for readers to be aware of bias in news reporting.',
        lines: 5,
        modelAnswer:
          'Media bias is the tendency of news reporting to present information in a way that favours a particular perspective, political viewpoint, or outcome. It is important to be aware of bias because: (1) biased reporting can manipulate public opinion by presenting only one side of a story, leading people to form views based on incomplete information; (2) understanding bias helps readers become critical thinkers who can evaluate sources, seek multiple perspectives, and form their own informed opinions.',
        marks: 4,
      },
      {
        question:
          'Explain the difference between "selection bias" and "framing." Give an example of each.',
        lines: 5,
        modelAnswer:
          'Selection bias is when a news source chooses which facts, quotes, or details to include and which to leave out, creating a one-sided impression. Example: a report on a protest that only interviews police officers and not protesters. Framing is how a story is presented - the angle, headline, and context that shape how the reader interprets events. Example: framing a tax increase as "investing in public services" (positive) versus "government taking more of your money" (negative).',
        marks: 4,
      },
      {
        question:
          'Rewrite the following neutral sentence with (a) a positive bias and (b) a negative bias:\n\n"The company announced it would close three factories."',
        lines: 6,
        modelAnswer:
          '(a) Positive bias: "The company announced a bold restructuring plan, streamlining its operations by consolidating three sites to secure long-term growth and innovation." (b) Negative bias: "The company ruthlessly axed three factories, leaving hundreds of hardworking families facing an uncertain future."',
        marks: 4,
      },
      {
        question:
          'Compare the two news reports studied in this lesson. How do they present the same event differently? Which report do you consider more reliable, and why?',
        lines: 8,
        modelAnswer:
          'The two reports present the same event from opposing perspectives. Report A uses emotive language and selects quotations that support its viewpoint while omitting contrary evidence. Report B takes a different angle, emphasising different facts and using loaded vocabulary to create a contrasting impression. Neither report is fully objective, as both use selection and framing to guide the reader. I consider Report B slightly more reliable because it includes a wider range of viewpoints, even if its language choices still reveal a bias. However, the most reliable approach would be to read both and additional sources to form a balanced understanding.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Choose news reports that are age-appropriate and politically neutral enough not to impose a particular viewpoint on students - the goal is to develop critical thinking, not to promote a stance.',
      'The word-swap activity is highly effective - students are often surprised by how much power individual word choices hold.',
      'This lesson connects strongly to PSHE and citizenship - consider cross-curricular links.',
      'Remind students that bias is not the same as lying - all texts have a perspective, and the skill is in recognising it.',
    ],
    targetedSkills: [
      '8R.4',
      'Media Literacy',
      'Critical Reading',
      'Bias Detection',
      'Comparative Analysis',
    ],
  },

  // ── Lesson 14: Creating Persuasive Media ────────────────────────────────
  {
    id: 'y8-t3-14-creating-persuasive-media',
    title: 'Creating Persuasive Media',
    text: 'Rhetoric & Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Plan and create a piece of persuasive media for a specific audience and purpose (8W.1)',
      'Apply understanding of bias, rhetoric, and persuasive techniques to original media creation (8W.6)',
      'Make deliberate choices about language, layout, and visual elements to maximise impact',
      "Evaluate the effectiveness of peers' media creations",
    ],
    successCriteria: [
      'I can identify my target audience and tailor my language and design accordingly',
      'I can use at least four persuasive techniques deliberately in my media piece',
      'I can explain the choices I have made and why they will be effective',
      "I can evaluate a peer's media piece and suggest improvements",
    ],
    keywords: [
      'audience',
      'purpose',
      'layout',
      'headline',
      'strapline',
      'call to action',
      'visual rhetoric',
      'tone',
    ],
    starterActivity: {
      title: 'Media Technique Hunt',
      duration: '7 minutes',
      instructions:
        'Display four examples of persuasive media (an advertisement, a charity leaflet, a political poster, a social media campaign). Students work in pairs and have three minutes to find as many persuasive techniques as possible across all four examples. Pairs tally their findings and the pair with the most techniques identified wins. Teacher reviews the most common techniques found and adds any missed, creating a class reference list for the main activity.',
      differentiation: {
        support:
          'Provide a techniques checklist to look for (e.g. emotive language, imperative verbs, statistics, images).',
        core: 'Students identify techniques independently and name them using correct terminology.',
        stretch:
          'Students analyse not just the techniques but the layout choices - why are certain elements larger, positioned centrally, or in particular colours?',
      },
      resources: ['Four persuasive media examples (projected or printed)', 'Techniques checklist'],
    },
    mainActivities: [
      {
        title: 'Planning a Persuasive Media Piece',
        duration: '15 minutes',
        instructions:
          'Students choose from three briefs: (a) a campaign poster for a school issue (e.g. reducing plastic waste, improving the library), (b) a charity leaflet for a cause they care about, or (c) a one-page persuasive article for a school magazine. Students complete a planning sheet: target audience, purpose, key message, three arguments/appeals, techniques to use, layout/design choices. Teacher models how to annotate a rough layout sketch with technique labels (e.g. "headline = emotive language + imperative verb", "image = pathos appeal", "statistic = logos"). Students sketch their own layout plan.',
        differentiation: {
          support:
            'Provide a pre-structured layout template for the chosen format and a techniques bank to select from.',
          core: 'Students plan independently, selecting at least four techniques and sketching a layout.',
          stretch:
            'Students plan for two different audiences and explain how their language and design choices would change for each.',
        },
        resources: [
          'Three briefs handout',
          'Planning sheet',
          'Layout template (support tier)',
          'Techniques bank',
        ],
      },
      {
        title: 'Creating and Peer-Reviewing',
        duration: '25 minutes',
        instructions:
          'Students create their persuasive media piece. They may work on paper (handwritten and illustrated) or digitally if devices are available. Teacher circulates with a checklist: clear headline, identifiable audience, at least four techniques, call to action, visual elements that support the message. After 18 minutes, students swap their draft with a partner for peer review. Partners complete a feedback form: "I can see these techniques: ___", "The strongest element is ___", "To improve, I would suggest ___." Students have the remaining time to revise based on feedback.',
        differentiation: {
          support:
            'Provide a partially completed template with spaces for headline, image, text body, and call to action clearly labelled.',
          core: 'Students create a complete persuasive media piece independently and revise after peer feedback.',
          stretch:
            'Students annotate their final piece with a "creator\'s commentary" explaining every deliberate choice and its intended effect on the audience.',
        },
        resources: [
          'A3 paper, coloured pens, rulers (or digital devices)',
          'Teacher checklist',
          'Peer feedback form',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Gallery Walk',
      duration: '5 minutes',
      instructions:
        'Display all completed media pieces around the classroom. Students walk around and place a star sticker next to the three pieces they find most persuasive. After the walk, teacher identifies the three most-starred pieces and asks their creators: "What was your most important design or language choice, and why?" Class discusses what makes persuasive media effective.',
      differentiation: {
        support: 'Students choose their favourite piece and say one reason it is persuasive.',
        core: 'Students place three stars and justify one of their choices to a partner.',
        stretch:
          'Students write a one-sentence review of the most effective piece, analysing why it works.',
      },
    },
    homework:
      'Complete and polish your persuasive media piece if unfinished. Write a 100-word "creator\'s statement" explaining your choices: Who is your audience? What techniques did you use? Why?',
    worksheetQuestions: [
      {
        question:
          'Why is it important to consider your audience when creating persuasive media? Explain with an example.',
        lines: 5,
        modelAnswer:
          'Considering your audience is essential because different groups respond to different techniques and appeals. For example, a charity leaflet aimed at adults might use statistics and formal language to appeal to logic (logos), while the same cause presented to teenagers might use informal language, bold visuals, and social media references to appeal to identity and emotion (pathos). If you do not tailor your message to your audience, your persuasion will fail because it will not resonate with the people you are trying to reach.',
        marks: 4,
      },
      {
        question:
          'Write a persuasive headline and strapline for a campaign to encourage recycling at school. Explain the techniques you have used.',
        lines: 5,
        modelAnswer:
          'Headline: "Your Planet. Your Choice. Your Responsibility." Strapline: "One small action today can save tomorrow." The headline uses a tricolon of short, punchy sentences with direct address ("Your") to make the reader feel personally responsible. The strapline uses contrast between "today" and "tomorrow" to emphasise the long-term impact of individual action, appealing to both logic and emotion.',
        marks: 4,
      },
      {
        question:
          'Explain how visual elements (images, colour, layout) contribute to persuasion in media. Give two examples.',
        lines: 6,
        modelAnswer:
          "Visual elements work alongside language to create emotional impact and guide the reader's attention. For example, a charity advert might use a large, close-up photograph of a child's face to create empathy (pathos), making the cause personal rather than abstract. Similarly, colour choices affect mood - red can convey urgency or danger, while green suggests nature, growth, or safety. The layout itself is persuasive: placing the call to action at the bottom right (where the eye naturally ends) ensures it is the last thing the reader sees.",
        marks: 4,
      },
      {
        question:
          'Evaluate your own persuasive media piece. What is its greatest strength? What would you change if you had more time?',
        lines: 6,
        modelAnswer:
          'The greatest strength of my piece is the headline, which uses a rhetorical question combined with emotive language to immediately engage the reader and make them think about the issue. If I had more time, I would add a stronger statistical element to support my emotional appeal with evidence, creating a better balance between pathos and logos. I would also reconsider my colour scheme to ensure it aligns with the mood of my campaign.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is the creative application of Lessons 11-13 - students move from analysis to creation.',
      'The gallery walk is motivating and builds a sense of audience - students write differently when they know their work will be displayed.',
      'If devices are available, students can use tools like Canva or Google Slides to create professional-looking media. If not, hand-drawn work is equally valid.',
      'The "creator\'s statement" homework is important - it develops metacognition and prepares students for the reflective element of the final assessment.',
    ],
    targetedSkills: [
      '8W.1',
      '8W.6',
      'Persuasive Writing',
      'Media Creation',
      'Audience Awareness',
      'Visual Literacy',
    ],
  },

  // ── Lesson 15: Assessment - Speech and Media Analysis ───────────────────
  {
    id: 'y8-t3-15-assessment-speech-media',
    title: 'Assessment: Speech and Media Analysis',
    text: 'Rhetoric & Media',
    board: 'Universal',
    yearGroup: 'Year 8',
    duration: '60 minutes',
    objectives: [
      'Demonstrate the ability to analyse persuasive techniques in a speech or media text',
      'Write a sustained analytical response under timed conditions',
      'Apply all rhetorical and media literacy skills developed across Term 3',
      'Self-assess work and set targets for future development',
    ],
    successCriteria: [
      'I can identify and name persuasive techniques accurately',
      'I can embed quotations and analyse their effect on the audience',
      'I can discuss how the rhetorical triangle (ethos, pathos, logos) operates in the text',
      'I can write a sustained analytical response with a clear introduction, developed paragraphs, and evaluative conclusion',
    ],
    keywords: [
      'assessment',
      'rhetoric',
      'persuasion',
      'ethos',
      'pathos',
      'logos',
      'analyse',
      'evaluate',
    ],
    starterActivity: {
      title: 'Rhetorical Triangle Quick-Fire',
      duration: '5 minutes',
      instructions:
        'Teacher reads five short extracts from persuasive texts. For each, students hold up an E (ethos), P (pathos), or L (logos) card to identify the dominant appeal. Teacher confirms answers and offers a final tip for the assessment: "When you analyse a persuasive technique, always explain its effect on the audience - why does the speaker/writer choose this approach?" Distribute the assessment materials.',
      differentiation: {
        support:
          'Provide a reference card with ethos/pathos/logos definitions for use during the quick-fire.',
        core: 'Students identify the dominant appeal and briefly justify their choice.',
        stretch:
          'Students identify secondary appeals in each extract, noting how speakers often blend ethos, pathos, and logos.',
      },
      resources: ['E/P/L cards', 'Five extracts slide', 'Reference card (support tier)'],
    },
    mainActivities: [
      {
        title: 'Timed Assessment: Analyse a Persuasive Text',
        duration: '45 minutes',
        instructions:
          'Students complete the assessment under timed conditions. Assessment question: "How does the writer/speaker use language to persuade the audience? You should consider: the persuasive techniques used and their effects, how the writer/speaker uses the rhetorical triangle (ethos, pathos, logos), and the overall effectiveness of the text." Students are provided with a speech transcript or persuasive media text (unseen). Suggested timing: reading and annotation (8 mins), planning (5 mins), introduction (5 mins), analytical paragraphs (20 mins), evaluative conclusion (5 mins), proofreading (2 mins). Exam conditions: silent working.',
        differentiation: {
          support:
            'Provide the text with key techniques pre-highlighted, a planning frame, and sentence starters for the introduction and conclusion. Allow students to focus on three techniques rather than attempting comprehensive analysis.',
          core: 'Students write a full analytical response independently using the unseen text.',
          stretch:
            "Students are encouraged to discuss how the text's persuasive strategies might work differently on different audiences, demonstrating sophisticated critical evaluation.",
        },
        resources: [
          'Assessment question sheet',
          'Unseen persuasive text (speech transcript or media article)',
          'Planning frame (support tier)',
          'Lined paper',
        ],
      },
    ],
    plenaryActivity: {
      title: 'End-of-Year Reflection',
      duration: '5 minutes',
      instructions:
        'Students complete a self-assessment grid covering the three terms of Year 8 English: Hunger Games analysis (Term 1), Poetry and Shakespeare (Term 2), Rhetoric and Media (Term 3). For each term, students rate their confidence (Developing/Secure/Excelling) and write one highlight and one area for development. Students then write a final reflection sentence: "The most important thing I have learned in Year 8 English is..." Teacher collects assessments and reflections.',
      differentiation: {
        support: "Provide the self-assessment grid with prompts for each term's key skills.",
        core: 'Students complete the full reflection with honest self-assessment across all three terms.',
        stretch:
          'Students write a paragraph reflecting on their overall growth as a reader, writer, and critical thinker across Year 8.',
      },
    },
    homework:
      'No formal homework. Year 8 English is complete. Optional: create a "Top 10 Things I Learned in Year 8 English" list to keep as a revision reference for Year 9.',
    worksheetQuestions: [
      {
        question:
          'Assessment Question: How does the writer/speaker use language to persuade the audience? You should consider: the persuasive techniques used and their effects; how the writer/speaker uses the rhetorical triangle (ethos, pathos, logos); and the overall effectiveness of the text. Write a full analytical response.',
        lines: 40,
        modelAnswer:
          "A strong response will include: an introduction identifying the text's purpose, audience, and overall persuasive strategy; at least two developed PEEL paragraphs analysing specific techniques with embedded quotations and audience-focused effects; reference to the rhetorical triangle (naming which appeal dominates and why this is effective); and an evaluative conclusion assessing the overall effectiveness of the text. Top-band responses will show awareness of how techniques work in combination, consider how different audiences might respond, and offer a nuanced evaluation that acknowledges both strengths and limitations of the persuasive approach.",
        marks: 30,
      },
    ],
    teacherNotes: [
      'This assessment tests the full range of Term 3 skills - choose an unseen text that is rich in techniques but accessible in content.',
      'A speech transcript works well because students have practised analysing speeches, but a persuasive article or media text is also valid.',
      "Mark using the school's KS3 assessment criteria with a focus on analytical quality, technique identification, and audience awareness.",
      'The end-of-year reflection is valuable data - use it to inform Year 9 planning and to identify students who need continued support in specific skill areas.',
      'Consider sharing final assessment results and individual targets with Year 9 teachers for continuity.',
    ],
    targetedSkills: [
      '8R.3',
      '8R.5',
      '8W.2',
      'Rhetorical Analysis',
      'Persuasive Techniques',
      'Self-Assessment',
      'Evaluation',
    ],
  },
]
