export interface LessonActivity {
  title: string;
  duration: string;
  instructions: string;
  differentiation?: {
    support: string;
    core: string;
    stretch: string;
  };
  resources?: string[];
}

export interface WorksheetQuestion {
  question: string;
  lines: number;
  modelAnswer?: string;
  marks?: number;
}

export interface LessonPlan {
  id: string;
  title: string;
  text: string;
  board: string;
  yearGroup: string;
  duration: string;
  objectives: string[];
  successCriteria: string[];
  keywords: string[];
  starterActivity: LessonActivity;
  mainActivities: LessonActivity[];
  plenaryActivity: LessonActivity;
  homework?: string;
  worksheetQuestions: WorksheetQuestion[];
  teacherNotes: string[];
  targetedSkills: string[];
}

export const christmasCarolLessons: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1: Introduction — Dickens, Victorian Context & Social Purpose
  // ─────────────────────────────────────────────
  {
    id: "acc-01-introduction-context",
    title: "Introduction: Dickens, Victorian Context & Social Purpose",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the social and historical context of Victorian England in the 1840s",
      "Explore Dickens' life and its direct influence on A Christmas Carol",
      "Identify key contextual factors: the Poor Law 1834, workhouses, Malthusian economics, and industrialisation",
      "Explain Dickens' social purpose in writing A Christmas Carol as a vehicle for reform",
    ],
    successCriteria: [
      "I can explain at least three features of Victorian society relevant to the novella",
      "I can link Dickens' personal experiences to his motivation for writing",
      "I can articulate Dickens' authorial purpose using subject-specific vocabulary",
    ],
    keywords: [
      "Victorian",
      "workhouse",
      "Poor Law 1834",
      "Malthus",
      "philanthropy",
      "social reform",
      "industrialisation",
      "capitalism",
      "authorial purpose",
      "novella",
    ],
    starterActivity: {
      title: "Victorian Image Sort — Rich vs Poor",
      duration: "8 minutes",
      instructions:
        "Display a series of images showing Victorian life: workhouses, wealthy households, child labourers, Christmas celebrations, industrial factories. Students sort images into 'rich' and 'poor' categories on mini whiteboards. Discuss: What do these images tell us about Victorian society? What surprises you? Take brief class feedback and establish the concept of extreme social inequality in 1843.",
      differentiation: {
        support:
          "Provide pre-labelled categories and sentence starters: 'This image shows... which tells us that Victorian society was...'",
        core: "Sort images independently and write a short paragraph summarising Victorian inequality.",
        stretch:
          "Consider what a wealthy Victorian might say to justify poverty — predict how this might appear in the novella.",
      },
      resources: ["Victorian image set (projected)", "Mini whiteboards"],
    },
    mainActivities: [
      {
        title: "Dickens' Life & Purpose — Information Station Carousel",
        duration: "18 minutes",
        instructions:
          "Set up four information stations around the room: (1) Dickens' Childhood — the blacking factory and debtors' prison, (2) Journalism and Social Observation — his visits to Manchester and Field Lane Ragged School, (3) The Poor Law 1834 and Malthusian Economics — 'surplus population', (4) The Writing of A Christmas Carol — published 19 December 1843, sold 6,000 copies in five days. Students rotate in groups every 4 minutes, recording key facts on a graphic organiser. Debrief: Which experience most influenced the novella?",
        differentiation: {
          support:
            "Provide a partially completed graphic organiser with key vocabulary glossed and sentence starters at each station.",
          core: "Complete the graphic organiser independently using station materials.",
          stretch:
            "At each station, write a prediction sentence: 'I think this context might appear in the novella when...'",
        },
        resources: [
          "Station information cards (4 sets, laminated)",
          "Graphic organiser handout",
          "Key vocabulary glossary sheet",
        ],
      },
      {
        title: "Contextual Deep Dive — Scrooge as Mouthpiece",
        duration: "18 minutes",
        instructions:
          "Teacher-led explanation of the 1834 Poor Law Amendment Act and Malthusian theory. Read two short primary source extracts: (1) A description of workhouse conditions, (2) A passage from Malthus. Then read Scrooge's speech from Stave 1: 'Are there no prisons?... decrease the surplus population.' Students highlight connections between Scrooge's language and the contextual material. Discuss: Is Scrooge a mouthpiece for Malthus, or is Dickens adding complexity? Students write a PEEL paragraph: 'How does Dickens use Scrooge to criticise Victorian attitudes to poverty?'",
        differentiation: {
          support:
            "Pre-highlighted extracts with guided questions pointing to key phrases. PEEL frame with sentence starters and word bank provided.",
          core: "Annotate independently and write a full PEEL paragraph linking Scrooge to Malthus.",
          stretch:
            "Write two paragraphs: one analysing the extract and one evaluating Dickens' effectiveness as a social reformer.",
        },
        resources: [
          "Primary source extracts (workhouse, Malthus)",
          "Stave 1 extract — Scrooge's charity speech",
          "PEEL paragraph frame (support tier)",
          "Highlighters",
        ],
      },
      {
        title: "Dickens' Social Purpose — Why a Story, Not a Pamphlet?",
        duration: "10 minutes",
        instructions:
          "Facilitate a structured discussion: Why did Dickens choose to write a novella rather than a political essay? Introduce 'authorial purpose' as a key term. Draw out: Dickens aimed to reach a wide audience, published at Christmas to exploit seasonal goodwill, priced at five shillings to be affordable, and used fiction to create emotional empathy rather than intellectual argument. Students write a summary statement: 'Dickens' purpose in A Christmas Carol was to...' in no more than two sentences.",
        differentiation: {
          support: "Provide three possible purpose statements — students select and improve the best one.",
          core: "Write an original purpose statement using evidence from today's lesson.",
          stretch:
            "Compare Dickens' approach to a modern charity campaign — which is more effective at changing attitudes?",
        },
        resources: ["Discussion prompt slide", "Purpose statement frame"],
      },
    ],
    plenaryActivity: {
      title: "Exit Ticket — Three Key Contexts",
      duration: "5 minutes",
      instructions:
        "Students write three contextual facts they would use in an exam essay on A Christmas Carol. Share one with a partner. Teacher selects three students to share aloud. Collect exit tickets to assess understanding and inform grouping for next lesson.",
      differentiation: {
        support: "Choose from a list of contextual facts and explain why each matters.",
        core: "Write three facts from memory and briefly explain their relevance.",
        stretch:
          "Write three facts and link each explicitly to a character, event, or quotation in the novella.",
      },
    },
    homework:
      "Research one additional fact about Victorian poverty or Dickens' life. Write a short paragraph (5-7 sentences) explaining how this fact connects to A Christmas Carol. Be prepared to share next lesson.",
    worksheetQuestions: [
      {
        question:
          "Explain two features of Victorian society that Dickens was concerned about when writing A Christmas Carol.",
        lines: 6,
        modelAnswer:
          "One feature was the workhouse system established by the 1834 Poor Law. The poor were forced into workhouses where conditions were deliberately harsh to deter people from seeking help. Dickens was concerned because this system punished people for being poor rather than helping them. A second feature was the attitude of the wealthy, influenced by Malthusian ideas, that the poor were a 'surplus population' who should be left to die. Dickens challenges this directly through Scrooge's callous dialogue in Stave 1.",
        marks: 4,
      },
      {
        question:
          "How did Dickens' childhood experience in the blacking factory influence his writing?",
        lines: 5,
        modelAnswer:
          "Dickens was sent to work in a boot-blacking factory as a child when his father was imprisoned for debt. This traumatic experience gave him first-hand knowledge of child labour and poverty. It fuelled his lifelong passion for social reform and directly influenced his sympathetic portrayal of the poor, such as the Cratchit family and Tiny Tim in A Christmas Carol.",
        marks: 3,
      },
      {
        question:
          "What was the 1834 Poor Law Amendment Act, and why is it relevant to A Christmas Carol?",
        lines: 5,
        modelAnswer:
          "The 1834 Poor Law Amendment Act created the workhouse system based on the principle of 'less eligibility' — conditions in workhouses had to be worse than the worst conditions outside, to discourage people from seeking poor relief. This is relevant because Scrooge directly references 'prisons' and 'workhouses' when asked to donate to charity, showing he shares the callous attitudes the Act encouraged. Dickens uses Scrooge to expose and condemn this mentality.",
        marks: 4,
      },
      {
        question:
          "Who was Thomas Malthus, and how does Dickens respond to his ideas in the novella?",
        lines: 5,
        modelAnswer:
          "Thomas Malthus was an economist who argued that the population would grow faster than food supplies, meaning the poor should be left to die to reduce overpopulation. Dickens responds critically through Scrooge, who echoes Malthus when he says the poor should die to 'decrease the surplus population'. The Ghost of Christmas Present throws these words back at Scrooge in Stave 3, showing Dickens' anger at such inhumane attitudes.",
        marks: 4,
      },
      {
        question:
          "Why did Dickens choose to write a story rather than a political pamphlet to address poverty?",
        lines: 4,
        modelAnswer:
          "Dickens understood that a story would reach a wider audience and have a greater emotional impact than a political argument. By making readers care about characters like Tiny Tim and experience Scrooge's transformation, he could change hearts and minds. The novella was published at Christmas and priced affordably, exploiting seasonal goodwill and generosity to maximise its reforming impact.",
        marks: 3,
      },
      {
        question:
          "Read the following quotation: 'Are there no prisons? And the Union workhouses — are they still in operation?' What does this reveal about Scrooge's attitude to the poor?",
        lines: 6,
        modelAnswer:
          "This quotation reveals that Scrooge believes the existing institutions — prisons and workhouses — are sufficient provision for the poor. His rhetorical questions suggest he sees no need for personal charity or compassion. The dismissive tone shows he views poverty as something to be managed institutionally rather than as a moral responsibility. Dickens uses Scrooge as a vehicle to criticise wealthy Victorians who used the existence of the Poor Law to justify their own lack of generosity.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Front-load key vocabulary (workhouse, philanthropy, Malthus) for EAL students.",
      "The image sort works well as a hook — choose images with clear contrasts between rich and poor.",
      "Station activity: print station cards on different coloured paper for easy identification.",
      "When reading the Malthus extract, pre-teach 'surplus population' as students will encounter it repeatedly.",
      "The PEEL paragraph is a formative assessment opportunity — collect and mark before next lesson.",
      "This lesson lays the foundation for all subsequent lessons — ensure students keep their graphic organisers.",
    ],
    targetedSkills: [
      "AO3: Context",
      "Reading comprehension",
      "Note-taking",
      "Analytical writing (PEEL)",
      "Discussion and oracy",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 2: Stave 1 — Scrooge's Characterisation & The Counting House
  // ─────────────────────────────────────────────
  {
    id: "acc-02-stave1-scrooge",
    title: "Stave 1: Scrooge's Characterisation & The Counting House",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Dickens introduces and characterises Scrooge in Stave 1",
      "Explore the use of pathetic fallacy, simile, and semantic fields to present Scrooge",
      "Understand the significance of the counting house setting as a reflection of Scrooge's values",
      "Consider Dickens' purpose in creating an unsympathetic protagonist the reader must journey with",
    ],
    successCriteria: [
      "I can identify and analyse at least three language techniques Dickens uses to describe Scrooge",
      "I can explain how the counting house setting reflects Scrooge's character and values",
      "I can link Scrooge's characterisation to Dickens' wider social message",
    ],
    keywords: [
      "pathetic fallacy",
      "simile",
      "semantic field",
      "misanthropic",
      "covetous",
      "solitary",
      "characterisation",
      "counting house",
      "protagonist",
      "cold imagery",
    ],
    starterActivity: {
      title: "Word Association — Cold",
      duration: "7 minutes",
      instructions:
        "Write the word 'COLD' in the centre of the board. Students have 90 seconds to write as many associated words as possible on mini whiteboards. Feed back and categorise: physical cold (ice, frost), emotional cold (cruel, heartless), social cold (isolated, lonely). Introduce the idea that Dickens uses cold as a metaphor for Scrooge's entire character. Ask: What kind of person would Dickens describe using these words?",
      differentiation: {
        support: "Provide three categories in advance — students sort their words into them.",
        core: "Generate words independently and discuss the metaphorical link to character.",
        stretch:
          "Predict why an author would introduce a protagonist through overwhelmingly negative imagery.",
      },
      resources: ["Mini whiteboards", "Board/projector"],
    },
    mainActivities: [
      {
        title: "Close Reading — Scrooge's Description (Stave 1 Opening)",
        duration: "22 minutes",
        instructions:
          "Distribute the extract from 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!' to 'No wind that blew was bitterer than he.' Read aloud as a class. Teacher models annotation of the first two sentences, identifying: listing of adjectives ('squeezing, wrenching, grasping, scraping, clutching'), the semantic field of cold ('froze his old features, stiffened his gait'), similes ('solitary as an oyster'), and pathetic fallacy ('The cold within him froze his old features'). Students then annotate the remainder independently. In pairs, students write a PEE paragraph: 'How does Dickens present Scrooge at the beginning of the novella?'",
        differentiation: {
          support:
            "Provide a pre-annotated version with two techniques identified. PEE frame with sentence starters: 'Dickens presents Scrooge as... This is shown when he writes... This suggests...'",
          core: "Independent annotation and a full PEE paragraph with embedded quotations.",
          stretch:
            "Write two PEE paragraphs and evaluate which technique is most effective at making the reader dislike Scrooge.",
        },
        resources: [
          "Stave 1 extract (printed — Scrooge's description)",
          "Annotation guide",
          "PEE paragraph frame (support tier)",
          "Highlighters",
        ],
      },
      {
        title: "The Counting House — Setting as Symbol",
        duration: "15 minutes",
        instructions:
          "Read the passage describing Scrooge's counting house and his treatment of Bob Cratchit. Students create a two-column table: 'Scrooge's counting house' vs 'What this tells us about Scrooge'. Key details to identify: Cratchit's tiny fire ('a very small fire'), Scrooge's refusal to add coal, the darkness and coldness. Discuss: How does the setting mirror Scrooge's character? How does Dickens use the contrast between Scrooge and Cratchit to establish the theme of social injustice? Students add a paragraph to their earlier work linking setting to characterisation.",
        differentiation: {
          support:
            "Provide a partially completed table with three details already identified. Students complete the 'what this tells us' column.",
          core: "Complete the table independently and write a linking paragraph.",
          stretch:
            "Compare the counting house to a Victorian workhouse — argue that Scrooge's business is a microcosm of Victorian exploitation.",
        },
        resources: [
          "Stave 1 extract (counting house passage)",
          "Two-column table template",
        ],
      },
      {
        title: "Scrooge's Interactions — Evidence Grid",
        duration: "10 minutes",
        instructions:
          "Students complete a quick evidence grid tracking Scrooge's interactions in Stave 1: his responses to (1) his nephew Fred, (2) the charity collectors, (3) Bob Cratchit. For each, students record: the key quotation, the technique used, and what it reveals about Scrooge. Share examples using the visualiser. Establish that Dickens systematically shows Scrooge rejecting every human connection — family, charity, and his employee.",
        differentiation: {
          support: "Quotations provided — students identify the technique and explain the effect.",
          core: "Find quotations independently and complete all three columns.",
          stretch:
            "Add a fourth row: Scrooge's interaction with Marley's Ghost. Explain how his initial reaction ('Humbug!') extends the pattern.",
        },
        resources: ["Evidence grid handout", "Full Stave 1 text (for reference)"],
      },
    ],
    plenaryActivity: {
      title: "Quotation Auction",
      duration: "6 minutes",
      instructions:
        "Display six quotations from Stave 1 describing Scrooge. Each pair has 100 'auction points' and must bid on the quotations they think are most useful for an exam essay. After the auction, the 'winners' must justify their purchase by explaining the quotation's analytical potential. Teacher reveals the 'best buy' and explains why.",
      differentiation: {
        support: "Provide a hint card showing which quotations contain named techniques.",
        core: "Bid independently and justify with reference to technique and effect.",
        stretch:
          "Evaluate the winning quotation: explain how it connects to context and Dickens' purpose.",
      },
    },
    homework:
      "Memorise the quotation 'solitary as an oyster' and write a paragraph (6-8 sentences) analysing its effect, linking to the theme of isolation and Dickens' purpose.",
    worksheetQuestions: [
      {
        question:
          "What is a semantic field? Identify the semantic field Dickens uses to describe Scrooge and explain its effect.",
        lines: 5,
        modelAnswer:
          "A semantic field is a group of words that share a common theme. Dickens uses a semantic field of cold to describe Scrooge: 'froze', 'cold', 'icy', 'nipped'. This creates the impression that Scrooge is emotionally frozen — unable to feel warmth, love, or compassion. The cold imagery also establishes a clear contrast with the warmth of Christmas that surrounds him.",
        marks: 4,
      },
      {
        question:
          "Explain the effect of the simile 'solitary as an oyster'.",
        lines: 5,
        modelAnswer:
          "This simile compares Scrooge to an oyster, which is a creature that lives sealed inside a hard shell. This suggests Scrooge has shut himself away from the world, closing himself off from human relationships and emotion. An oyster is also associated with being difficult to open, implying that changing Scrooge will be extremely challenging. The simile may also hint that, like an oyster that contains a pearl, there is something valuable hidden inside Scrooge if he can be 'opened'.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use the list of verbs 'squeezing, wrenching, grasping, scraping, clutching' to characterise Scrooge?",
        lines: 5,
        modelAnswer:
          "Dickens uses a list of aggressive, physical verbs to characterise Scrooge's greed. Each verb suggests a violent, desperate action — as though Scrooge is physically seizing money and refusing to let it go. The accumulation of verbs overwhelms the reader, mirroring Scrooge's relentless, all-consuming obsession with wealth. The present participle ('-ing') form suggests this behaviour is continuous and habitual, not occasional.",
        marks: 4,
      },
      {
        question:
          "What does the counting house setting reveal about Scrooge's character and values?",
        lines: 5,
        modelAnswer:
          "The counting house is dark, cold, and oppressive — Scrooge allows Bob Cratchit only 'a very small fire' and refuses to spend money on coal. This reflects Scrooge's priorities: profit over people. The setting acts as a physical manifestation of his miserly soul. Dickens uses the contrast between Scrooge's comfortable wealth and Cratchit's suffering to highlight the theme of social injustice and the exploitation of the working poor.",
        marks: 4,
      },
      {
        question:
          "How does Scrooge's response to the charity collectors reveal his attitude? Use a quotation in your answer.",
        lines: 6,
        modelAnswer:
          "When asked to donate to the poor, Scrooge responds: 'Are there no prisons? And the Union workhouses?' His rhetorical questions show he believes existing institutions are sufficient, refusing any personal responsibility. When told some would 'rather die' than enter a workhouse, he replies they 'had better do it, and decrease the surplus population.' This echoes Malthusian economics and reveals a complete absence of empathy. Dickens uses Scrooge to satirise wealthy Victorians who used institutional charity as an excuse for personal callousness.",
        marks: 4,
      },
      {
        question:
          "Why does Dickens make Scrooge so unsympathetic at the start? Consider his authorial purpose.",
        lines: 5,
        modelAnswer:
          "Dickens deliberately makes Scrooge extremely unsympathetic so that his eventual transformation is more dramatic and convincing. By presenting Scrooge as the worst example of Victorian greed, Dickens argues that even the most hardened miser can change — sending a powerful message that no reader is beyond redemption. It also ensures the reader recognises the attitudes Dickens is criticising, making his social commentary unmistakable.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Ensure students have access to the full Stave 1 text for the evidence grid activity.",
      "Model annotation explicitly — many students at this stage will under-annotate.",
      "The 'solitary as an oyster' simile is a high-frequency exam quotation; ensure students record it in their quotation banks.",
      "The counting house section can be extended if students are engaged — it links well to AO3.",
      "Quotation Auction is noisy but highly effective for engagement and retention.",
      "Collect PEE paragraphs to assess analytical writing before the more demanding lessons ahead.",
    ],
    targetedSkills: [
      "AO1: Critical response with textual reference",
      "AO2: Language analysis",
      "AO3: Context",
      "Annotation skills",
      "Analytical paragraph writing (PEE)",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 3: Stave 2 — The Ghost of Christmas Past & Memory
  // ─────────────────────────────────────────────
  {
    id: "acc-03-stave2-past",
    title: "Stave 2: The Ghost of Christmas Past & Memory",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse the appearance and symbolism of the Ghost of Christmas Past",
      "Explore how Dickens uses Scrooge's memories to reveal his emotional decline",
      "Understand the significance of key scenes: Fezziwig, Fan, and Belle",
      "Evaluate how memory functions as a tool for moral awakening in the novella",
    ],
    successCriteria: [
      "I can explain the symbolic significance of the Ghost's appearance",
      "I can trace Scrooge's emotional journey through his memories and analyse Dickens' purpose",
      "I can write an analytical paragraph on how Dickens uses memory as a catalyst for change",
    ],
    keywords: [
      "symbolism",
      "juxtaposition",
      "nostalgia",
      "catalyst",
      "Fezziwig",
      "Fan",
      "Belle",
      "light imagery",
      "regret",
      "moral awakening",
    ],
    starterActivity: {
      title: "Memory Reflection — The Power of the Past",
      duration: "7 minutes",
      instructions:
        "Ask students: 'Think of a memory that changed the way you see something.' Give 60 seconds of silent reflection, then share in pairs. Class discussion: Can memories change who we are? Can revisiting the past help someone become a better person? Link to Dickens' purpose: the Ghost of Christmas Past forces Scrooge to confront who he used to be and what he has lost.",
      differentiation: {
        support: "Provide prompt questions: 'What is your happiest memory? Why does it matter?'",
        core: "Reflect independently and articulate the link between memory and personal change.",
        stretch:
          "Consider why Dickens chose memory as the first stage of Scrooge's transformation — why not start with the present?",
      },
      resources: ["Discussion prompt slide"],
    },
    mainActivities: [
      {
        title: "The Ghost's Appearance — Symbolism Analysis",
        duration: "15 minutes",
        instructions:
          "Read the description of the Ghost of Christmas Past aloud. Students annotate the extract, focusing on: the light emanating from its head (knowledge, truth, memory), its fluctuating form ('now a thing with one arm, now with one leg, now with twenty legs'), and the extinguisher cap. Discuss: What does each feature symbolise? Why does Scrooge later try to press the cap down over the Ghost's light? Teacher models one symbolic interpretation, then students write their own for two further details.",
        differentiation: {
          support:
            "Provide a symbolism key matching three features to their meanings. Students explain in their own words.",
          core: "Annotate independently and write symbolic interpretations for two details.",
          stretch:
            "Evaluate why Dickens makes this Ghost's appearance ambiguous and shifting — link to the nature of memory itself.",
        },
        resources: [
          "Stave 2 extract — Ghost's description",
          "Symbolism key (support tier)",
          "Annotation guide",
        ],
      },
      {
        title: "Scrooge's Memories — Timeline and Turning Points",
        duration: "22 minutes",
        instructions:
          "Students create a timeline of the three key memories in Stave 2: (1) Young Scrooge alone at school — explore abandonment and loneliness, (2) Fezziwig's Christmas party — contrast Fezziwig's generosity as an employer with Scrooge's treatment of Cratchit, (3) Belle's departure — the moment love was sacrificed for money. For each memory, students record: the key quotation, Scrooge's emotional reaction, and what Dickens wants the reader to understand. Focus on the Fezziwig scene: read 'He has the power to render us happy or unhappy' and discuss how this is a direct challenge to Scrooge (and Victorian employers). Then focus on Belle: 'Another idol has displaced me... a golden one.' Students write a PEEL paragraph: 'How does Dickens use Scrooge's memories to begin his transformation?'",
        differentiation: {
          support:
            "Provide a partially completed timeline with quotations. PEEL paragraph frame with sentence starters.",
          core: "Complete the timeline independently and write a full PEEL paragraph.",
          stretch:
            "Write two PEEL paragraphs: one on Fezziwig as a moral mirror and one on Belle as the turning point, evaluating which memory is more significant to Scrooge's awakening.",
        },
        resources: [
          "Stave 2 key extracts (Fezziwig party, Belle's departure)",
          "Timeline template",
          "PEEL paragraph frame (support tier)",
        ],
      },
      {
        title: "The Extinguisher Cap — Scrooge's Resistance",
        duration: "10 minutes",
        instructions:
          "Read the passage where Scrooge presses the extinguisher cap over the Ghost's head. Discuss: Why does Scrooge try to suppress the light? What does this tell us about his relationship with his own past? Students write a short response (3-4 sentences): 'The extinguisher cap symbolises Scrooge's desire to...' Link to the idea that truth and memory cannot be permanently suppressed — the light still seeps out from under the cap.",
        differentiation: {
          support: "Provide sentence starters and a choice of interpretations to develop.",
          core: "Write an independent symbolic interpretation in 3-4 sentences.",
          stretch:
            "Connect the extinguisher cap to Dickens' wider message: the wealthy cannot 'cap' or hide the truth of poverty forever.",
        },
        resources: ["Stave 2 extract — extinguisher cap passage"],
      },
    ],
    plenaryActivity: {
      title: "Scrooge's Diary Entry — Hot Seat",
      duration: "6 minutes",
      instructions:
        "One student volunteers to sit in the 'hot seat' as Scrooge immediately after the Ghost of Christmas Past departs. Class members ask questions ('How did seeing Fezziwig make you feel?', 'Do you regret losing Belle?'). The student in the hot seat answers in character. Teacher facilitates and draws out key analytical points. If time allows, write one sentence as Scrooge reflecting on the visit.",
      differentiation: {
        support: "Provide question prompts for the audience and response starters for the hot seat.",
        core: "Ask and answer questions independently in character.",
        stretch:
          "After the hot seat, write a sentence evaluating whether Scrooge is genuinely changing or merely feeling self-pity.",
      },
    },
    homework:
      "Learn the quotation 'Another idol has displaced me... a golden one' (Belle to Scrooge). Write a paragraph explaining what this reveals about Scrooge's priorities and how Dickens uses Belle to criticise Victorian materialism.",
    worksheetQuestions: [
      {
        question:
          "Describe the appearance of the Ghost of Christmas Past. What does its appearance symbolise?",
        lines: 6,
        modelAnswer:
          "The Ghost is described as having a bright light streaming from its head, symbolising truth, enlightenment, and the clarity of memory. Its form constantly shifts — 'now a thing with one arm, now with one leg' — which could symbolise how memories are unstable and change over time. It carries an extinguisher cap, which represents the desire to suppress uncomfortable truths. The Ghost's childlike yet old appearance suggests that the past is both innocent and ancient — Scrooge must reconnect with both.",
        marks: 4,
      },
      {
        question:
          "How does the Fezziwig scene contrast with Scrooge's own behaviour as an employer?",
        lines: 6,
        modelAnswer:
          "Fezziwig is generous, joyful, and deeply invested in his employees' happiness. He spends money on a Christmas party and creates warmth and community. Scrooge, by contrast, begrudges Bob Cratchit a single lump of coal and resents giving him Christmas Day off. Dickens uses this juxtaposition to show Scrooge what he could be — Fezziwig proves that employers have 'the power to render us happy or unhappy', making Scrooge's cruelty a deliberate moral choice, not an inevitability.",
        marks: 4,
      },
      {
        question:
          "What does Belle mean when she says 'Another idol has displaced me... a golden one'?",
        lines: 5,
        modelAnswer:
          "Belle is telling Scrooge that money has replaced her in his heart. The word 'idol' suggests worship — Scrooge now worships gold instead of love. The religious connotation of 'idol' also implies that Scrooge has committed a form of blasphemy, choosing material wealth over human connection. Dickens uses Belle to represent the moment Scrooge's moral decline became irreversible — until the Ghosts intervene.",
        marks: 4,
      },
      {
        question:
          "Why does Scrooge try to press the extinguisher cap over the Ghost's light? What does this symbolise?",
        lines: 5,
        modelAnswer:
          "Scrooge tries to suppress the Ghost's light because the memories are painful — they force him to confront his loneliness, his lost love, and the choices that led to his isolation. The extinguisher cap symbolises Scrooge's desire to deny the truth and avoid emotional pain. However, 'the light... streamed from under it' — Dickens suggests that truth cannot be permanently hidden, and Scrooge's past will continue to haunt him until he confronts it.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use Stave 2 to begin Scrooge's transformation? Refer to at least two memories.",
        lines: 8,
        modelAnswer:
          "Dickens uses Scrooge's memories to crack open his emotional defences. The memory of his lonely schoolboy self reawakens empathy — Scrooge weeps and wishes he had given something to the carol singer he turned away. The Fezziwig scene shows Scrooge a model of generous, joyful employment, making him reflect on his own treatment of Cratchit. Belle's departure reveals the human cost of Scrooge's greed: he sacrificed love for money. Each memory builds emotional pressure, moving Scrooge from denial ('Humbug!') toward genuine regret. Dickens structures Stave 2 as the first stage of a moral education, using the past to prepare Scrooge for the revelations of present and future.",
        marks: 6,
      },
      {
        question:
          "Explain what the quotation 'He has the power to render us happy or unhappy' reveals about Dickens' message to Victorian employers.",
        lines: 5,
        modelAnswer:
          "This quotation, spoken about Fezziwig, directly addresses Victorian employers and the wealthy. Dickens argues that those with power and money have a moral obligation to use it for good — they can choose to create happiness or misery. The word 'power' emphasises that this is a choice, not an accident. Dickens is using Fezziwig as a moral exemplar to challenge the selfishness of employers like Scrooge — and, by extension, the real industrialists of Victorian England.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The memory reflection starter can be sensitive — allow students to keep reflections private if preferred.",
      "The Fezziwig passage is essential for AO3 — ensure students note the employer/employee parallel to Scrooge and Cratchit.",
      "Belle's departure is often under-analysed; push students to see her as a voice of moral authority, not just a love interest.",
      "The extinguisher cap section works well as a mini-assessment of symbolic understanding.",
      "Hot seat activity: brief the volunteer beforehand if they need confidence support.",
      "Quotation 'Another idol has displaced me' is high-frequency in AQA exams — ensure it enters quotation banks.",
    ],
    targetedSkills: [
      "AO1: Critical response with textual reference",
      "AO2: Symbolism and imagery analysis",
      "AO3: Context (employment, materialism)",
      "Analytical writing (PEEL)",
      "Empathy and character inference",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 4: Stave 3 — The Ghost of Christmas Present & The Cratchits
  // ─────────────────────────────────────────────
  {
    id: "acc-04-stave3-present",
    title: "Stave 3: The Ghost of Christmas Present & The Cratchits",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse the Ghost of Christmas Present's appearance and symbolic significance",
      "Explore Dickens' presentation of the Cratchit family as sympathetic and dignified",
      "Examine the role of Tiny Tim as a sentimental and political device",
      "Understand the significance of Ignorance and Want and Dickens' direct warning to society",
    ],
    successCriteria: [
      "I can analyse the symbolism of the Ghost of Christmas Present and its throne of food",
      "I can explain how Dickens uses the Cratchits to challenge Victorian attitudes to the poor",
      "I can evaluate the significance of Ignorance and Want as Dickens' most explicit social message",
    ],
    keywords: [
      "abundance",
      "generosity",
      "Tiny Tim",
      "pathos",
      "sentimentality",
      "Ignorance and Want",
      "allegory",
      "social responsibility",
      "dignity",
      "empathy",
    ],
    starterActivity: {
      title: "Feast vs Famine — Image Contrast",
      duration: "7 minutes",
      instructions:
        "Display two images side by side: a lavish Victorian Christmas feast and a scene of Victorian urban poverty. Students write three observations about each image on their whiteboards. Discuss: How can these two realities exist at the same time? What does this suggest about Victorian society? Link to Stave 3: the Ghost of Christmas Present will show Scrooge both abundance and deprivation.",
      differentiation: {
        support: "Provide observation prompts: 'I can see... This suggests...'",
        core: "Independent observations with a paragraph linking both images to the novella.",
        stretch:
          "Consider whose responsibility it is to address inequality — connect to Dickens' purpose.",
      },
      resources: ["Contrasting Victorian images (projected)", "Mini whiteboards"],
    },
    mainActivities: [
      {
        title: "The Ghost of Christmas Present — Appearance and Symbolism",
        duration: "12 minutes",
        instructions:
          "Read the description of the Ghost of Christmas Present aloud: its green robe, its throne of food, the torch that sprinkles generosity. Students annotate the extract identifying: the abundance imagery, the colour green (life, renewal, generosity), the bare chest ('open and free'), and the cornucopia of food. Discuss: What kind of Christmas does this Ghost represent? Why does Dickens make it so visually overwhelming? Students write 3-4 sentences explaining the Ghost's symbolic significance.",
        differentiation: {
          support: "Provide a symbolism matching activity (feature → meaning) as a scaffold.",
          core: "Annotate independently and write an original symbolic interpretation.",
          stretch:
            "Compare the Ghost of Christmas Present to Father Christmas — evaluate whether Dickens is celebrating or critiquing Victorian Christmas traditions.",
        },
        resources: [
          "Stave 3 extract — Ghost's description",
          "Symbolism matching cards (support tier)",
        ],
      },
      {
        title: "The Cratchit Family — Dignity in Poverty",
        duration: "22 minutes",
        instructions:
          "Read the Cratchit Christmas dinner scene. Students create a table: 'Evidence of poverty' vs 'Evidence of love and happiness'. Key details: the small goose, the pudding, the worn clothes, the family's gratitude and togetherness. Focus on Tiny Tim: read 'God bless us, every one!' and the Ghost's prophecy ('I see a vacant chair... and a crutch without an owner'). Discuss: Why does Dickens make the Cratchits happy despite their poverty? How does he use Tiny Tim to create pathos? Students write a PEEL paragraph: 'How does Dickens present the Cratchit family to challenge Victorian attitudes to the poor?'",
        differentiation: {
          support:
            "Provide a partially completed table and a PEEL frame. Key quotations pre-selected.",
          core: "Complete the table and PEEL paragraph independently with embedded quotations.",
          stretch:
            "Evaluate the criticism that Dickens' portrayal of the Cratchits is sentimental and unrealistic. Does this weaken or strengthen his message?",
        },
        resources: [
          "Stave 3 extract — Cratchit dinner scene",
          "Two-column table template",
          "PEEL paragraph frame (support tier)",
        ],
      },
      {
        title: "Ignorance and Want — Dickens' Warning",
        duration: "14 minutes",
        instructions:
          "Read the passage where the Ghost reveals the two children, Ignorance and Want, hidden beneath its robes. Display the original John Leech illustration. Students annotate the passage: the children are 'yellow, meagre, ragged, scowling, wolfish'. Discuss: Why are they allegorical figures rather than named characters? Why does the Ghost say 'Beware this boy, for on his brow I see that written which is Doom'? Scrooge's own words — 'Are there no prisons?' — are thrown back at him. Students write a response: 'Why does Dickens include the figures of Ignorance and Want, and what is his message to Victorian society?'",
        differentiation: {
          support:
            "Provide sentence starters and a word bank (allegory, symbol, social responsibility, doom, consequence).",
          core: "Write a full response independently, linking to context and Dickens' purpose.",
          stretch:
            "Argue whether Ignorance or Want is the greater threat to society, using evidence from the novella and Victorian context.",
        },
        resources: [
          "Stave 3 extract — Ignorance and Want passage",
          "John Leech illustration (projected)",
          "Word bank (support tier)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Scrooge's Transformation Tracker — Stave 3 Update",
      duration: "5 minutes",
      instructions:
        "Students update their ongoing transformation tracker (begun in Lesson 2): rate Scrooge's empathy on a scale of 1-10 at the end of Stave 3, with a justification sentence. Compare to their Stave 1 and Stave 2 ratings. Brief class discussion: Is Scrooge genuinely changing, or just being shown things?",
      differentiation: {
        support: "Provide a rating scale with descriptor words at each level.",
        core: "Rate and justify independently with textual reference.",
        stretch:
          "Predict what the final Ghost will need to show Scrooge to complete his transformation.",
      },
    },
    homework:
      "Learn the quotation 'I see a vacant chair... and a crutch without an owner, carefully preserved.' Write a paragraph explaining the effect of this on the reader and on Scrooge, linking to Dickens' purpose.",
    worksheetQuestions: [
      {
        question:
          "Describe the Ghost of Christmas Present. What does its appearance symbolise?",
        lines: 6,
        modelAnswer:
          "The Ghost of Christmas Present is a giant figure wearing a green fur-lined robe, seated on a throne of festive food. The green robe symbolises life, renewal, and nature's bounty. Its bare chest shows it is 'open and free' — representing generosity and openness, the opposite of Scrooge. The throne of food represents the abundance of Christmas, which should be shared rather than hoarded. The torch that sprinkles its 'incense' on people's food symbolises the spirit of generosity that Scrooge lacks.",
        marks: 4,
      },
      {
        question:
          "How does Dickens present the Cratchit family to challenge attitudes towards the poor? Use quotations.",
        lines: 8,
        modelAnswer:
          "Dickens presents the Cratchits as loving, grateful, and dignified despite their poverty. Their Christmas goose is small and their clothes are threadbare, yet they celebrate with genuine joy and togetherness. Mrs Cratchit's dress is 'twice turned' but 'brave in ribbons', showing her determination to maintain dignity. The family is united by love rather than material wealth. Dickens uses this to challenge the Victorian assumption that the poor were idle or immoral — the Cratchits work hard, love deeply, and deserve compassion. Tiny Tim's blessing, 'God bless us, every one!', makes him a symbol of innocent goodness, designed to evoke the reader's empathy and guilt.",
        marks: 6,
      },
      {
        question:
          "Explain the significance of Tiny Tim in A Christmas Carol.",
        lines: 6,
        modelAnswer:
          "Tiny Tim serves multiple purposes. He is a source of pathos — his illness and vulnerability make the reader and Scrooge feel pity. He is also a political tool: if society does not change, children like Tim will die. The Ghost's prophecy of 'a vacant chair' and 'a crutch without an owner' directly links Tim's fate to Scrooge's refusal to help. Dickens uses Tim to put a human face on the statistics of child poverty and to argue that every death from poverty is a moral failure of the wealthy.",
        marks: 4,
      },
      {
        question:
          "What do the allegorical figures of Ignorance and Want represent? Why are they significant?",
        lines: 6,
        modelAnswer:
          "Ignorance and Want are two wretched children hidden beneath the Ghost's robe. They represent the twin consequences of society's neglect of the poor: a lack of education (Ignorance) and a lack of basic necessities (Want). The Ghost warns Scrooge to 'beware this boy, for on his brow I see that written which is Doom' — Dickens argues that if society ignores these problems, it will face catastrophic consequences, possibly revolution or moral collapse. When Scrooge asks 'Have they no refuge?', the Ghost throws his own words back: 'Are there no prisons? Are there no workhouses?' This is Dickens' most direct and devastating critique of Victorian indifference.",
        marks: 6,
      },
      {
        question:
          "Why does the Ghost of Christmas Present quote Scrooge's own words back to him? What effect does this create?",
        lines: 5,
        modelAnswer:
          "The Ghost quotes 'Are there no prisons? Are there no workhouses?' back at Scrooge to force him to confront the cruelty of his own attitudes. Hearing his own words used against him creates a powerful moment of shame and self-recognition. It also creates dramatic irony for the reader, who remembers Scrooge's callousness in Stave 1. Dickens uses this technique to show that words have consequences and that indifference to suffering is a form of active cruelty.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use the contrast between abundance and poverty in Stave 3 to convey his message?",
        lines: 5,
        modelAnswer:
          "Dickens juxtaposes the Ghost's overflowing feast with the Cratchits' meagre dinner and the starving figures of Ignorance and Want. This structural contrast highlights the inequality at the heart of Victorian society: there is enough abundance for everyone, but it is hoarded by the wealthy. The Ghost itself embodies generosity, sprinkling its torch on people's food, yet Scrooge has never participated in this spirit of sharing. Dickens argues that poverty is not inevitable but is created by the selfishness of those who refuse to share.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The Cratchit dinner scene is central to the AQA exam — ensure students can write about it in detail.",
      "Tiny Tim: address the criticism that he is overly sentimental, but explain that Victorian audiences responded powerfully to such pathos.",
      "Ignorance and Want: use the John Leech illustration to make the allegorical figures visual and memorable.",
      "The moment where the Ghost quotes Scrooge's own words is one of the most powerful in the novella — give it time.",
      "Transformation tracker: if students don't have one from previous lessons, create a quick version now.",
      "This is a content-heavy lesson; prioritise the Cratchit scene and Ignorance/Want if time is short.",
    ],
    targetedSkills: [
      "AO1: Critical response with textual reference",
      "AO2: Symbolism, allegory, and language analysis",
      "AO3: Context (poverty, social responsibility)",
      "Analytical writing (PEEL)",
      "Evaluative skills",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 5: Stave 4 — The Ghost of Christmas Yet to Come & Fear
  // ─────────────────────────────────────────────
  {
    id: "acc-05-stave4-future",
    title: "Stave 4: The Ghost of Christmas Yet to Come & Fear",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse the Ghost of Christmas Yet to Come as a silent, terrifying figure and its effect on Scrooge",
      "Explore how Dickens uses fear as the final catalyst for Scrooge's transformation",
      "Examine the scenes of death — the thieves, the uncared-for corpse, and Tiny Tim's death",
      "Evaluate the significance of Scrooge's gravestone as the climax of his moral journey",
    ],
    successCriteria: [
      "I can analyse how Dickens uses the Ghost's silence and appearance to create fear",
      "I can explain how Stave 4's scenes contrast with the warmth of earlier Staves",
      "I can evaluate whether fear is a more effective motivator than memory or empathy",
    ],
    keywords: [
      "foreboding",
      "Gothic",
      "silence",
      "phantom",
      "mortality",
      "consequence",
      "gravestone",
      "catalyst",
      "dramatic climax",
      "redemption",
    ],
    starterActivity: {
      title: "Silent Teacher — What Does Silence Communicate?",
      duration: "6 minutes",
      instructions:
        "Teacher enters the room silently and communicates three instructions using only gestures and pointing (e.g., sit down, get out your books, look at the board). After completing the silent routine, ask: How did that feel? Why is silence unsettling? What does it communicate that words cannot? Link to the Ghost of Christmas Yet to Come, who never speaks a single word. Discuss: Why might Dickens have made this Ghost silent?",
      differentiation: {
        support: "Provide a prompt: 'Silence can be frightening because...'",
        core: "Discuss why Dickens chose silence and link to the Ghost's power.",
        stretch:
          "Compare the three Ghosts' communication styles — what does each method suggest about their nature?",
      },
      resources: ["None required"],
    },
    mainActivities: [
      {
        title: "The Ghost's Appearance — Gothic Horror Analysis",
        duration: "14 minutes",
        instructions:
          "Read the description of the Ghost of Christmas Yet to Come: 'shrouded in a deep black garment, which concealed its head, its face, its form, and left nothing of it visible save one outstretched hand.' Students annotate the extract identifying: Gothic conventions (darkness, concealment, the unknown), the Grim Reaper imagery, the contrast with the previous Ghosts, and the effect on Scrooge ('Scrooge feared the silent shape'). Students write 3-4 sentences: 'How does Dickens use the Ghost's appearance to create fear?'",
        differentiation: {
          support:
            "Provide a Gothic conventions checklist (darkness, silence, death, mystery). Students tick off each convention found.",
          core: "Annotate independently and write an analytical response.",
          stretch:
            "Evaluate why the Ghost that represents the future is the most terrifying — link to the human fear of death and the unknown.",
        },
        resources: [
          "Stave 4 extract — Ghost's description",
          "Gothic conventions checklist (support tier)",
        ],
      },
      {
        title: "Scenes of Consequence — The Unlamented Death",
        duration: "22 minutes",
        instructions:
          "Read three key scenes from Stave 4: (1) The businessmen discussing Scrooge's death with indifference ('It's likely to be a very cheap funeral'), (2) Old Joe's shop — the thieves selling Scrooge's stolen possessions, including his bed curtains and the shirt off his corpse, (3) The contrast with Tiny Tim's death — the Cratchit family's grief and love. Students create a three-column comparison table: 'Scene', 'Key Evidence', 'What This Reveals'. Discuss: What is Dickens showing Scrooge? The contrast between being mourned with love (Tiny Tim) and dying alone and robbed (Scrooge) is the novella's most powerful juxtaposition. Students write a PEEL paragraph: 'How does Dickens use contrasting death scenes to convey his message about how we should live?'",
        differentiation: {
          support:
            "Provide pre-selected quotations for each scene. Partially completed table. PEEL sentence starters.",
          core: "Complete the table and write a PEEL paragraph independently.",
          stretch:
            "Write two paragraphs: one analysing the thieves' scene and one evaluating whether Dickens' use of fear is more or less effective than the pathos of Tiny Tim's death.",
        },
        resources: [
          "Stave 4 extracts (three scenes, printed)",
          "Three-column table template",
          "PEEL paragraph frame (support tier)",
        ],
      },
      {
        title: "The Gravestone — Dramatic Climax",
        duration: "12 minutes",
        instructions:
          "Read the gravestone scene: Scrooge discovers his own name on the neglected grave. Focus on his desperate speech: 'I am not the man I was. I will not be the man I must have been but for this intercourse.' Students annotate the language: the repetition, the contrast between past and future selves, the begging tone. Discuss: Is this genuine repentance or just fear of death? Does it matter, if the outcome is the same? Students write a short response: 'What is the significance of the gravestone scene as the climax of Scrooge's journey?'",
        differentiation: {
          support: "Provide key phrases highlighted and a sentence frame for the response.",
          core: "Write an independent analytical response with embedded quotation.",
          stretch:
            "Evaluate whether Scrooge's transformation is motivated by genuine moral awakening or selfish terror — argue both sides.",
        },
        resources: ["Stave 4 extract — gravestone scene"],
      },
    ],
    plenaryActivity: {
      title: "Ghost Ranking — Most Effective Agent of Change",
      duration: "6 minutes",
      instructions:
        "Students rank the three Ghosts (Past, Present, Future) in order of effectiveness at changing Scrooge. Write a justification sentence for their top choice. Share with a partner, then brief class vote. Teacher draws out: Dickens structures the Ghosts as an escalating sequence — memory, empathy, then fear — suggesting all three are necessary.",
      differentiation: {
        support: "Provide a ranking frame with reasons to select from.",
        core: "Rank independently with a written justification.",
        stretch:
          "Argue that no single Ghost is sufficient alone — Dickens requires all three to effect genuine transformation.",
      },
    },
    homework:
      "Learn the quotation 'I will honour Christmas in my heart, and try to keep it all the year.' Write a paragraph analysing what this promise reveals about Scrooge's transformation and Dickens' vision of redemption.",
    worksheetQuestions: [
      {
        question:
          "How does Dickens use the Ghost of Christmas Yet to Come's appearance and silence to create fear?",
        lines: 6,
        modelAnswer:
          "The Ghost is 'shrouded in a deep black garment' that conceals everything except 'one outstretched hand.' The complete concealment creates a sense of the unknown, which is inherently frightening. Its silence is more terrifying than any words — it forces Scrooge (and the reader) to confront the visions without reassurance or explanation. The Grim Reaper imagery associates the Ghost directly with death. Unlike the previous Ghosts, it offers no warmth or humour, making it the most purely intimidating figure in the novella.",
        marks: 4,
      },
      {
        question:
          "Why does Dickens include the scene with the thieves at Old Joe's shop?",
        lines: 6,
        modelAnswer:
          "The scene at Old Joe's shop shows that after Scrooge's death, his possessions are stripped and sold — even his bed curtains and the shirt from his corpse. This represents the ultimate consequence of living only for material wealth: everything Scrooge valued can be taken and has no lasting worth. The thieves feel no guilt because Scrooge showed no kindness to anyone in life. Dickens uses this scene to argue that a life lived in pursuit of money alone will end in indignity and isolation.",
        marks: 4,
      },
      {
        question:
          "How does Dickens contrast the reactions to Scrooge's death with the reactions to Tiny Tim's death?",
        lines: 6,
        modelAnswer:
          "Scrooge's death is met with indifference, relief, and opportunistic theft — no one mourns him. The businessmen discuss his funeral casually, noting it will be cheap because no one will attend. Tiny Tim's death, by contrast, is met with profound grief and love — the Cratchit family is devastated but united. This juxtaposition powerfully illustrates Dickens' message: a life lived in love and connection is valued, while a life lived in greed and isolation is worthless. It is the ultimate warning to Scrooge — and to the reader.",
        marks: 6,
      },
      {
        question:
          "What is the significance of the gravestone scene? Why is it the climax of the novella?",
        lines: 6,
        modelAnswer:
          "The gravestone scene is the moment Scrooge confronts his own mortality — he sees his name on a neglected grave and realises the unmourned death he has been shown is his own. This is the climax because it brings together all the preceding warnings: memory, empathy, and now the inescapable reality of death. Scrooge's desperate plea — 'I am not the man I was' — represents his complete breaking point, where fear finally overcomes pride and denial. Dickens structures this as the turning point: only by facing death can Scrooge choose to live differently.",
        marks: 4,
      },
      {
        question:
          "Is Scrooge's transformation motivated by genuine moral change or selfish fear of death? Argue both sides.",
        lines: 8,
        modelAnswer:
          "On one hand, Scrooge's transformation appears driven by selfish fear: he only promises to change after seeing his own grave. His earlier reactions to the Cratchits' suffering did not produce action — only terror motivates him. This suggests his 'redemption' is self-preservation rather than genuine compassion. On the other hand, the seeds of change were planted earlier: Scrooge wept at his childhood memories, reflected on Fezziwig, and showed concern for Tiny Tim. The gravestone is the final catalyst, not the only one. Dickens may be arguing that the motivation matters less than the outcome — what matters is that Scrooge changes, whatever prompted it. Ultimately, Stave 5 will prove the sincerity of his transformation through his actions.",
        marks: 6,
      },
      {
        question:
          "Explain how Dickens structures Staves 2-4 as an escalating sequence. Why is this order significant?",
        lines: 5,
        modelAnswer:
          "Dickens moves from memory (Past) to empathy (Present) to fear (Future), escalating the emotional and moral pressure on Scrooge. The past reawakens feeling, the present shows suffering he can still prevent, and the future reveals the irreversible consequences of inaction. This structure mirrors a moral argument: first understand yourself, then understand others, then face the consequences. Each Ghost builds on the last, ensuring Scrooge's transformation is gradual and convincing rather than sudden and implausible.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The silent teacher starter is simple but very effective — commit to the silence for full impact.",
      "Stave 4 contains the most Gothic material in the novella; link to wider Gothic conventions if students study the genre.",
      "The thieves' scene is often overlooked in exams — ensure students see its thematic importance.",
      "The contrast between Scrooge's death and Tiny Tim's is one of the highest-value exam comparison points.",
      "The gravestone scene should be read with maximum dramatic impact — consider dimming lights.",
      "The debate about genuine vs selfish motivation is excellent for developing evaluative skills (top-band AO1).",
    ],
    targetedSkills: [
      "AO1: Critical response and evaluation",
      "AO2: Gothic conventions, symbolism, structural analysis",
      "AO3: Context (mortality, Victorian values)",
      "Analytical and evaluative writing",
      "Comparative analysis",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 6: Stave 5 — Scrooge's Redemption & Transformation
  // ─────────────────────────────────────────────
  {
    id: "acc-06-stave5-redemption",
    title: "Stave 5: Scrooge's Redemption & Transformation",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Dickens presents Scrooge's transformation in Stave 5",
      "Explore the language and imagery used to show Scrooge's rebirth and joy",
      "Evaluate whether Scrooge's redemption is convincing and complete",
      "Understand Dickens' message that moral transformation is possible for everyone",
    ],
    successCriteria: [
      "I can analyse the language Dickens uses to show Scrooge's transformation in Stave 5",
      "I can compare Scrooge in Stave 5 to Scrooge in Stave 1 using specific evidence",
      "I can evaluate the effectiveness of the ending and Dickens' message about redemption",
    ],
    keywords: [
      "redemption",
      "transformation",
      "rebirth",
      "joy",
      "catharsis",
      "moral resolution",
      "circular structure",
      "philanthropy",
      "second chance",
      "prolepsis",
    ],
    starterActivity: {
      title: "Before and After — Transformation Predictions",
      duration: "6 minutes",
      instructions:
        "Display a split image: left side shows the cold, dark counting house from Stave 1; right side is blank with a question mark. Students predict: What will Scrooge do first when he wakes up? How will Dickens show he has changed? Write three predictions on whiteboards. Feed back, then reveal that Dickens shows Scrooge's transformation entirely through his actions and language in a single morning.",
      differentiation: {
        support: "Provide three possible first actions — students rank them in order of likelihood.",
        core: "Make independent predictions and justify each one.",
        stretch:
          "Consider what Dickens needs to do to make the transformation convincing after Stave 4's terror.",
      },
      resources: ["Split image slide", "Mini whiteboards"],
    },
    mainActivities: [
      {
        title: "Scrooge Awakes — Language of Rebirth",
        duration: "15 minutes",
        instructions:
          "Read the opening of Stave 5: Scrooge wakes and discovers he is alive. Annotate the extract focusing on: the exclamatory sentences ('I don't know what to do! I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy!'), the similes that reverse his Stave 1 characterisation, the childlike energy and laughter, and the repeated exclamation marks. Compare directly to Stave 1 language: cold imagery vs warmth, isolation vs connection, silence vs laughter. Students write a comparative analysis: 'How does Dickens use language to show Scrooge's transformation between Stave 1 and Stave 5?'",
        differentiation: {
          support:
            "Provide a side-by-side table with Stave 1 and Stave 5 quotations. Sentence starters for comparison.",
          core: "Annotate and write a comparative paragraph independently with dual quotation embedding.",
          stretch:
            "Evaluate the literary effect of Dickens' use of listing and exclamatory sentences — is the breathless pace deliberate?",
        },
        resources: [
          "Stave 5 opening extract",
          "Stave 1 extract (for comparison)",
          "Comparison table (support tier)",
        ],
      },
      {
        title: "Scrooge's Actions — Evidence of Real Change",
        duration: "20 minutes",
        instructions:
          "Students track Scrooge's actions in Stave 5 using an evidence grid: (1) Sends the prize turkey to the Cratchits anonymously, (2) Donates generously to the charity collectors, (3) Attends Fred's Christmas dinner, (4) Raises Bob's salary and becomes 'a second father' to Tiny Tim. For each action, students record: the quotation, which Stave 1 moment it reverses, and what it shows about Scrooge's transformation. Discuss: Why does Dickens show Scrooge acting rather than just saying he has changed? Link to the proverb 'actions speak louder than words' and to Dickens' message that wealthy Victorians must act, not just feel sympathy. Students write a PEEL paragraph on one action of their choice.",
        differentiation: {
          support:
            "Provide the four actions with quotations already selected. Students complete the 'reversal' and 'significance' columns.",
          core: "Complete the grid independently and write a PEEL paragraph.",
          stretch:
            "Argue that the anonymous turkey is the most significant action because it shows selfless generosity without desire for recognition.",
        },
        resources: [
          "Full Stave 5 text",
          "Evidence grid handout",
          "PEEL paragraph frame (support tier)",
        ],
      },
      {
        title: "The Ending — Is Redemption Convincing?",
        duration: "13 minutes",
        instructions:
          "Read the final paragraph: 'He became as good a friend, as good a master, and as good a man, as the good old city knew.' Discuss: Is Scrooge's transformation convincing? Some critics argue it happens too quickly; others say the novella's moral power depends on the possibility of immediate, total change. Students participate in a structured debate: one side argues the transformation is convincing, the other argues it is too sudden. Each side must use textual evidence. After the debate, students write a concluding statement: 'Scrooge's redemption is / is not convincing because...'",
        differentiation: {
          support: "Provide argument cards with evidence for each side. Students select and present.",
          core: "Formulate arguments independently using textual evidence.",
          stretch:
            "Evaluate the circular structure: Stave 5 mirrors and reverses Stave 1. How does this structural choice reinforce Dickens' message?",
        },
        resources: ["Stave 5 final paragraph", "Argument cards (support tier)"],
      },
    ],
    plenaryActivity: {
      title: "Dickens' Final Message — One Sentence",
      duration: "6 minutes",
      instructions:
        "Students write one sentence summarising Dickens' message in A Christmas Carol. Share with a partner and refine. Teacher selects three to read aloud. Class votes on the most accurate and concise summary. Display the 'winning' sentence as a reference point for future lessons.",
      differentiation: {
        support: "Provide a sentence frame: 'Dickens' message is that...'",
        core: "Write an original summary sentence.",
        stretch:
          "Write two sentences: one about Dickens' message to individuals and one about his message to society.",
      },
    },
    homework:
      "Write a full paragraph comparing Scrooge in Stave 1 to Scrooge in Stave 5. Use at least two quotations from each Stave. Focus on language, behaviour, and Dickens' purpose.",
    worksheetQuestions: [
      {
        question:
          "How does Dickens use language to show Scrooge's transformation at the start of Stave 5? Use quotations.",
        lines: 6,
        modelAnswer:
          "Dickens uses exclamatory sentences and joyful similes to present Scrooge's transformation: 'I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy!' The listing creates a breathless, childlike energy that contrasts sharply with the cold, measured language of Stave 1. The similes — feather, angel, schoolboy — associate Scrooge with innocence, lightness, and spiritual goodness, reversing the earlier imagery of ice and hardness. The repetition of 'I am' emphasises Scrooge's new identity and his joy at simply being alive.",
        marks: 4,
      },
      {
        question:
          "Choose one of Scrooge's actions in Stave 5 and explain how it reverses his Stave 1 behaviour.",
        lines: 6,
        modelAnswer:
          "In Stave 5, Scrooge sends 'the prize Turkey' to the Cratchit family anonymously. This directly reverses his Stave 1 behaviour where he begrudged Cratchit a day off and refused to spend money on coal for the office. The anonymous nature of the gift shows genuine generosity — Scrooge is not seeking praise or recognition. Dickens uses this action to show that Scrooge has internalised the Ghosts' lessons: he now understands his responsibility to others and acts on it without being asked.",
        marks: 4,
      },
      {
        question:
          "Why does Dickens show Scrooge's transformation through actions rather than just words?",
        lines: 5,
        modelAnswer:
          "Dickens shows Scrooge acting — buying the turkey, donating to charity, visiting Fred, raising Bob's salary — because actions prove sincerity in a way that words alone cannot. This also serves Dickens' wider purpose: he wants wealthy Victorian readers to act on their sympathy for the poor, not merely feel it. By showing that Scrooge's words become deeds, Dickens models the behaviour he wants his audience to adopt. The emphasis on action also makes the transformation more convincing than a simple declaration of change.",
        marks: 4,
      },
      {
        question:
          "Explain the significance of the quotation: 'He became as good a friend, as good a master, and as good a man, as the good old city knew.'",
        lines: 5,
        modelAnswer:
          "This closing sentence uses a tricolon — 'friend', 'master', 'man' — to show that Scrooge's transformation is total and affects every dimension of his life: personal relationships, professional conduct, and moral character. The repetition of 'good' emphasises the completeness of his change. 'As the good old city knew' suggests Scrooge becomes a community figure, moving from isolation to integration. Dickens ends on this definitive note to reassure the reader that redemption is permanent and possible.",
        marks: 4,
      },
      {
        question:
          "Is Scrooge's transformation convincing? Argue both sides using evidence from the novella.",
        lines: 8,
        modelAnswer:
          "Those who find it convincing argue that Dickens prepares the reader throughout: Scrooge shows glimpses of feeling in Stave 2 (weeping at his childhood), concern in Stave 3 (asking about Tiny Tim), and terror in Stave 4 (at the gravestone). The transformation is gradual across the novella, even if Stave 5 feels sudden. Furthermore, Dickens shows change through sustained action, not a single speech. Those who are sceptical argue that a lifetime of miserliness cannot be undone in one night, and that Scrooge's change is motivated by fear of death rather than genuine empathy. However, Dickens' purpose is not realism but moral persuasion — the novella is an allegory, and the rapid transformation is the point: Dickens wants readers to believe change is possible immediately, not in some distant future.",
        marks: 6,
      },
      {
        question:
          "How does the structure of A Christmas Carol reinforce Dickens' message about redemption?",
        lines: 5,
        modelAnswer:
          "Dickens uses a circular structure: Stave 5 mirrors and reverses Stave 1. The cold counting house is replaced by warmth and laughter; the rejected nephew is embraced; the grudging charity response becomes generous donation. The five-Stave structure mirrors the five acts of a play, with Stave 4 as the climax and Stave 5 as the resolution. Calling the chapters 'Staves' (parts of a song) reinforces the musical, celebratory tone and the idea of harmony restored. This structure makes redemption feel structurally inevitable — the novella was always moving toward this joyful conclusion.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson benefits from a celebratory tone — mirror the energy of Stave 5.",
      "The Stave 1/Stave 5 comparison is one of the highest-value exam skills for A Christmas Carol.",
      "The debate activity develops evaluative skills essential for Grades 7-9.",
      "Ensure students note the circular structure — this is frequently tested in AQA exams.",
      "If students struggle with the debate, convert it into a 'thought tunnel' where Scrooge walks through two rows of students offering arguments for and against the sincerity of his change.",
      "The final message activity creates a reference sentence students can return to throughout revision.",
    ],
    targetedSkills: [
      "AO1: Critical response and comparison",
      "AO2: Language analysis, structural analysis",
      "AO3: Context (philanthropy, redemption)",
      "Evaluative and comparative writing",
      "Debate and oracy",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 7: Key Themes — Greed, Poverty, Redemption, Family, Christmas
  // ─────────────────────────────────────────────
  {
    id: "acc-07-key-themes",
    title: "Key Themes: Greed, Poverty, Redemption, Family, Christmas",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Identify and define the five key themes of A Christmas Carol: greed, poverty, redemption, family, and Christmas",
      "Trace each theme through the novella with supporting quotations and contextual links",
      "Analyse how Dickens uses themes to convey his social and moral message",
      "Prepare a thematic revision resource for exam use",
    ],
    successCriteria: [
      "I can explain each of the five key themes and provide at least two supporting quotations per theme",
      "I can link themes to Dickens' purpose and Victorian context",
      "I can write a paragraph analysing how Dickens presents one theme across the novella",
    ],
    keywords: [
      "greed",
      "poverty",
      "redemption",
      "family",
      "Christmas spirit",
      "social responsibility",
      "transformation",
      "isolation",
      "generosity",
      "moral message",
    ],
    starterActivity: {
      title: "Theme Word Cloud — What Is This Novella Really About?",
      duration: "7 minutes",
      instructions:
        "Display a word cloud containing 20 words related to A Christmas Carol, including the five key themes (greed, poverty, redemption, family, Christmas) and distractor words. Students select the five most important words and rank them. Feed back: Which word is most central? Most students will say 'redemption' or 'poverty'. Discuss: Can you have redemption without poverty? Are the themes interconnected? Establish that themes are not isolated — they work together to create Dickens' message.",
      differentiation: {
        support: "Provide the five theme words in advance; students rank them with reasons.",
        core: "Select and rank five themes independently from the word cloud.",
        stretch:
          "Argue which single theme is most important to Dickens' purpose, using evidence from across the novella.",
      },
      resources: ["Theme word cloud (projected)", "Mini whiteboards"],
    },
    mainActivities: [
      {
        title: "Theme Mapping — Quotation and Context Grid",
        duration: "25 minutes",
        instructions:
          "Students work in pairs to complete a large theme grid covering five themes: Greed, Poverty, Redemption, Family, and Christmas. For each theme, they record: (1) A definition, (2) Two key quotations from different Staves, (3) The contextual link (e.g., greed → Malthus/capitalism; poverty → Poor Law/workhouses; redemption → Christian morality; family → Victorian domestic ideal; Christmas → seasonal charity and goodwill), (4) What Dickens wants the reader to think/feel/do. Teacher circulates, providing support and challenging top-end students. After 20 minutes, groups share their strongest quotation for each theme. Teacher adds any missed quotations to a class display.",
        differentiation: {
          support:
            "Provide a partially completed grid with definitions and one quotation per theme filled in. Quotation bank available for reference.",
          core: "Complete the grid independently using their notes and the text.",
          stretch:
            "Add a sixth column: 'How this theme connects to another theme.' Identify at least three theme links (e.g., greed causes poverty; family enables redemption).",
        },
        resources: [
          "Theme grid handout (A3 size recommended)",
          "Quotation bank (support tier)",
          "Full text or Stave summaries for reference",
        ],
      },
      {
        title: "Thematic Paragraph Writing — Exam Focus",
        duration: "18 minutes",
        instructions:
          "Each student chooses one theme and writes a PEEL paragraph answering: 'How does Dickens present the theme of [chosen theme] in A Christmas Carol?' Teacher models one paragraph on the board (e.g., poverty), demonstrating: a clear topic sentence naming the theme, embedded quotation with technique identification, explanation of effect on the reader, contextual link to Victorian society, and a sentence on Dickens' purpose. Students write independently. Peer-assess using a checklist: (1) Theme named? (2) Quotation embedded? (3) Technique identified? (4) Effect explained? (5) Context linked? Share two strong examples under the visualiser.",
        differentiation: {
          support:
            "Choose from three pre-written topic sentences. Use the PEEL frame with sentence starters and the quotation bank.",
          core: "Write a full PEEL paragraph independently. Peer-assess using the checklist.",
          stretch:
            "Write two PEEL paragraphs on different themes and add a linking sentence showing how the themes interact.",
        },
        resources: [
          "PEEL paragraph frame (support tier)",
          "Peer assessment checklist",
          "Model paragraph (teacher-prepared)",
        ],
      },
      {
        title: "Theme Connections — Discussion Web",
        duration: "5 minutes",
        instructions:
          "As a quick consolidation, students draw a 'web' showing how the five themes connect. For example: greed → causes poverty; poverty → motivates Dickens to seek redemption for society; family → provides the warmth that redeems Scrooge; Christmas → the context in which generosity replaces greed. Share two or three webs. Establish that the themes are a system, not a checklist.",
        differentiation: {
          support: "Provide the five themes in circles — students draw connecting lines and label them.",
          core: "Create the web independently with labelled connections.",
          stretch:
            "Add Dickens' purpose to the centre of the web and show how each theme serves his reforming agenda.",
        },
        resources: ["Plain paper or exercise books"],
      },
    ],
    plenaryActivity: {
      title: "Exam Quick-Fire — Theme Identification",
      duration: "5 minutes",
      instructions:
        "Teacher reads six quotations aloud. For each, students hold up a card showing which theme it most relates to (colour-coded: red = greed, blue = poverty, gold = redemption, green = family, white = Christmas). Discuss any disagreements — many quotations relate to multiple themes, which is a sophisticated exam point. Award points for justified disagreements.",
      differentiation: {
        support: "Provide the quotations on a handout so students can re-read them.",
        core: "Identify the primary theme for each quotation.",
        stretch:
          "Identify the primary and secondary theme for each quotation and explain the overlap.",
      },
    },
    homework:
      "Create a revision card for each of the five themes: theme name, definition, three key quotations, contextual link, and Dickens' purpose. These will be used in the exam practice lesson.",
    worksheetQuestions: [
      {
        question:
          "How does Dickens present the theme of greed in A Christmas Carol? Use at least two quotations.",
        lines: 8,
        modelAnswer:
          "Dickens presents greed as a destructive force that isolates individuals from society. In Stave 1, Scrooge is described as 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner' — the listing of aggressive verbs creates the impression of a man consumed by the desire to accumulate wealth at any cost. Greed has made Scrooge 'solitary as an oyster', cut off from all human connection. Belle tells Scrooge that 'another idol has displaced me... a golden one', using the religious connotation of 'idol' to suggest that worshipping money is a form of moral sin. Dickens links greed to Malthusian economics and the Victorian capitalist class, arguing that individual greed creates systemic poverty. Scrooge's redemption requires him to replace greed with generosity.",
        marks: 6,
      },
      {
        question:
          "How does Dickens present the theme of poverty in the novella?",
        lines: 6,
        modelAnswer:
          "Dickens presents poverty as a man-made condition caused by the greed and indifference of the wealthy, not by the failings of the poor. The Cratchit family is hardworking, loving, and dignified despite their poverty — their goose is small but their gratitude is immense. Tiny Tim's potential death represents the human cost of Victorian neglect. The allegorical children Ignorance and Want are Dickens' most direct statement: poverty and its consequences are society's responsibility. By showing poverty through Scrooge's eyes, Dickens forces his wealthy readers to see what they normally ignore.",
        marks: 4,
      },
      {
        question:
          "Explain the theme of redemption in A Christmas Carol. Why is it central to Dickens' message?",
        lines: 6,
        modelAnswer:
          "Redemption — the idea that someone can be saved from sin or moral failure — is the novella's central theme. Scrooge begins as the embodiment of everything Dickens despises: greed, isolation, and contempt for the poor. His transformation proves that even the most hardened miser can change. This is essential to Dickens' purpose: if Scrooge can be redeemed, then no reader has an excuse not to change. The Christian concept of redemption through repentance underpins the novella, reflecting Victorian religious values while also serving Dickens' secular social message.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use the theme of family in the novella?",
        lines: 5,
        modelAnswer:
          "Family represents warmth, love, and moral goodness in the novella. The Cratchits, despite their poverty, are a loving and united family. Fred's Christmas dinner is full of laughter and connection. By contrast, Scrooge has rejected family: he refuses Fred's invitation and has no close relationships. Dickens uses family as the antidote to greed and isolation — Scrooge's redemption is marked by his return to family life, attending Fred's dinner and becoming 'a second father to Tiny Tim'. Family, for Dickens, is the foundation of a moral society.",
        marks: 4,
      },
      {
        question:
          "What role does the theme of Christmas play in A Christmas Carol?",
        lines: 5,
        modelAnswer:
          "Christmas functions as both a literal setting and a symbolic concept. Literally, the novella takes place at Christmas, exploiting the season's associations with generosity and goodwill. Symbolically, Christmas represents everything Scrooge rejects: community, charity, and celebration. Dickens uses Christmas as a moral standard — those who embrace it (the Cratchits, Fred) are good; those who reject it (Scrooge in Stave 1) are morally deficient. By the end, Scrooge promises to 'honour Christmas in my heart, and try to keep it all the year', suggesting that the Christmas spirit of generosity should be permanent, not seasonal.",
        marks: 4,
      },
      {
        question:
          "Choose two themes and explain how they are connected in the novella.",
        lines: 6,
        modelAnswer:
          "Greed and poverty are fundamentally connected in A Christmas Carol. Dickens argues that the greed of the wealthy directly causes the suffering of the poor. Scrooge's refusal to donate to charity ('Are there no prisons?') shows how individual greed becomes systemic cruelty. The Cratchits' poverty exists because employers like Scrooge pay low wages and hoard wealth. The Ghost of Christmas Present's feast versus the starving Ignorance and Want illustrates that abundance and poverty coexist because of unequal distribution, not scarcity. Dickens' message is clear: if the wealthy shared their resources, poverty would diminish.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This is a consolidation and revision lesson — students should have read or studied all five Staves before this point.",
      "The theme grid is an excellent revision resource. Consider printing on A3 for display in books.",
      "Emphasise theme interconnection — top-band answers discuss how themes work together, not in isolation.",
      "The paragraph writing section is the key assessment opportunity; circulate and provide targeted feedback.",
      "Colour-coded theme cards can be reused throughout the revision period.",
      "If time is tight, reduce the theme mapping to 20 minutes and extend the paragraph writing.",
    ],
    targetedSkills: [
      "AO1: Critical response across the whole text",
      "AO2: Methods analysis linked to themes",
      "AO3: Context integration",
      "Thematic analysis and essay writing",
      "Revision and consolidation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 8: Dickens' Use of the Supernatural & Gothic Elements
  // ─────────────────────────────────────────────
  {
    id: "acc-08-supernatural-gothic",
    title: "Dickens' Use of the Supernatural & Gothic Elements",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Identify and analyse Gothic and supernatural conventions in A Christmas Carol",
      "Explore how Dickens uses the supernatural to serve his moral and social purpose",
      "Compare the three Ghosts and Marley as supernatural agents with distinct functions",
      "Evaluate why Dickens chose a supernatural framework for a social message",
    ],
    successCriteria: [
      "I can identify at least five Gothic/supernatural conventions in the novella",
      "I can explain how Dickens uses each Ghost as a tool for moral instruction",
      "I can evaluate why the supernatural framework is effective for Dickens' purpose",
    ],
    keywords: [
      "supernatural",
      "Gothic",
      "ghost story",
      "Marley's Ghost",
      "chains",
      "spectral",
      "uncanny",
      "moral allegory",
      "pathetic fallacy",
      "foreboding",
    ],
    starterActivity: {
      title: "Gothic Convention Bingo",
      duration: "7 minutes",
      instructions:
        "Give each student a bingo card with 9 Gothic conventions: darkness, chains, ghosts, death, isolation, mystery, silence, decay, supernatural light. Teacher reads short extracts from A Christmas Carol. When students hear a convention, they cross it off. First to complete a line wins. Debrief: A Christmas Carol is full of Gothic conventions — why? Establish that Dickens borrows from the ghost story tradition to create emotional intensity and moral weight.",
      differentiation: {
        support: "Provide definitions next to each convention on the bingo card.",
        core: "Play independently and identify which extract matches which convention.",
        stretch:
          "After bingo, explain why Dickens might blend the ghost story genre with social realism.",
      },
      resources: [
        "Gothic convention bingo cards",
        "Extract cards (teacher reads aloud)",
      ],
    },
    mainActivities: [
      {
        title: "Marley's Ghost — The Chain of Consequence",
        duration: "15 minutes",
        instructions:
          "Read the passage describing Marley's appearance: 'The chain he drew was clasped about his middle. It was long, and wound about him like a tail; and it was made of cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel.' Annotate: What do the objects on the chain symbolise? Why is the chain a powerful metaphor for the consequences of greed? Discuss Marley's warning: 'I wear the chain I forged in life.' What does 'forged' suggest? Students write a PEE paragraph: 'How does Dickens use Marley's Ghost to introduce the theme of moral consequence?'",
        differentiation: {
          support:
            "Provide a symbols key matching chain objects to their meanings. PEE frame provided.",
          core: "Annotate independently and write a full PEE paragraph.",
          stretch:
            "Compare Marley's chain to Scrooge's: 'It was long, and wound about him like a tail' — Marley says Scrooge's chain was as heavy seven years ago and has grown since. What does this imply about the cumulative nature of moral failure?",
        },
        resources: [
          "Stave 1 extract — Marley's Ghost",
          "Symbols key (support tier)",
          "PEE paragraph frame (support tier)",
        ],
      },
      {
        title: "The Three Ghosts — Supernatural Comparison Table",
        duration: "22 minutes",
        instructions:
          "Students complete a comparison table for the three Ghosts of Christmas, with columns: (1) Name, (2) Appearance, (3) Key symbolic features, (4) Communication style, (5) Purpose/function, (6) Gothic conventions used, (7) Effect on Scrooge. Key points to draw out: the Ghost of Christmas Past uses light and memory (illumination); the Ghost of Christmas Present uses abundance and generosity (moral example); the Ghost of Christmas Yet to Come uses silence and darkness (terror). Discuss: Why does Dickens escalate from light to abundance to darkness? What does this structural progression achieve? After completing the table, students write a comparative paragraph: 'How does Dickens use the three Ghosts differently to achieve his purpose?'",
        differentiation: {
          support:
            "Provide a partially completed table with one Ghost fully done as a model. Students complete the other two.",
          core: "Complete the table independently and write a comparative paragraph.",
          stretch:
            "Add a fourth row for Marley's Ghost. Argue which supernatural figure is most effective at prompting Scrooge's transformation.",
        },
        resources: [
          "Comparison table template (A3 recommended)",
          "Key extracts for each Ghost (printed or available in text)",
        ],
      },
      {
        title: "Why the Supernatural? — Evaluative Discussion",
        duration: "10 minutes",
        instructions:
          "Pose the question: 'Why did Dickens choose a ghost story to deliver a social message about poverty?' Students discuss in pairs, then share. Draw out: the supernatural allows Dickens to compress time (past, present, future in one night), to show Scrooge things he couldn't normally see (the Cratchits' home, his own death), and to create emotional intensity that a realistic narrative could not. The ghost story tradition was hugely popular at Christmas in Victorian England — Dickens was using a form his audience already loved. Students write a short evaluative response (4-5 sentences): 'Evaluate why the supernatural framework is effective for Dickens' purpose.'",
        differentiation: {
          support: "Provide three reasons with evidence — students select two and explain in their own words.",
          core: "Write an independent evaluative response.",
          stretch:
            "Consider what would be lost if Dickens had used realistic means (e.g., Scrooge simply visiting the Cratchits' home himself). Why is the supernatural necessary?",
        },
        resources: ["Discussion prompt slide"],
      },
    ],
    plenaryActivity: {
      title: "Ghost Story vs Social Story — Class Vote",
      duration: "6 minutes",
      instructions:
        "Final class vote: Is A Christmas Carol primarily a ghost story or a social story? Students stand on one side of the room or the other. Each side selects a spokesperson to make their argument in 30 seconds. Teacher concludes: it is both — and that is exactly why it is so powerful. The supernatural framework is the vehicle; the social message is the cargo.",
      differentiation: {
        support: "Provide a stance card with a pre-written argument for each side.",
        core: "Choose a side and articulate a reason verbally.",
        stretch:
          "Argue that the novella's greatness lies in its refusal to be only one thing — it is simultaneously entertainment and activism.",
      },
    },
    homework:
      "Write a paragraph answering: 'How does Dickens use Marley's chain as a symbol for the consequences of a life lived selfishly?' Use quotation, technique identification, and contextual linking.",
    worksheetQuestions: [
      {
        question:
          "What is Marley's chain made of, and what does it symbolise?",
        lines: 5,
        modelAnswer:
          "Marley's chain is made of 'cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel'. Each object relates to money, business, and material wealth. The chain symbolises the moral burden of a life spent pursuing profit at the expense of human compassion. The word 'forged' is a double meaning: Marley created ('forged') the chain through his actions, but it is also literally made of metal ('wrought in steel'), suggesting the consequences of greed are heavy, permanent, and inescapable.",
        marks: 4,
      },
      {
        question:
          "Compare the appearance and effect of any two of the three Ghosts of Christmas.",
        lines: 8,
        modelAnswer:
          "The Ghost of Christmas Past is a shifting, luminous figure with a bright light streaming from its head, symbolising the illuminating power of memory. It speaks gently and shows Scrooge scenes from his past, reawakening emotions he has suppressed. The Ghost of Christmas Yet to Come, by contrast, is 'shrouded in a deep black garment' and never speaks. Its silence and darkness create terror rather than nostalgia. While the first Ghost illuminates, the last Ghost conceals — forcing Scrooge to confront the unknown. Dickens uses this contrast to escalate the emotional pressure on Scrooge, moving from gentle reflection to overwhelming fear.",
        marks: 6,
      },
      {
        question:
          "Identify three Gothic conventions Dickens uses in A Christmas Carol and explain their effect.",
        lines: 6,
        modelAnswer:
          "First, Dickens uses chains (Marley's chain) as a symbol of entrapment and punishment — a classic Gothic motif. Second, he uses pathetic fallacy: the cold, dark fog of Stave 1 mirrors Scrooge's emotional state and creates an oppressive atmosphere. Third, the Ghost of Christmas Yet to Come is a silent, shrouded phantom evoking the Grim Reaper, creating fear through concealment and the unknown. These conventions create emotional intensity and a sense of moral urgency that a purely realistic narrative could not achieve.",
        marks: 4,
      },
      {
        question:
          "Why did Dickens choose a supernatural framework for a story about poverty and social reform?",
        lines: 6,
        modelAnswer:
          "The supernatural framework allows Dickens to compress time — past, present, and future are shown in a single night — making the moral journey dramatic and urgent. It enables Scrooge to witness scenes he could not otherwise see (the Cratchits' home, his own death), creating empathy through direct experience. The ghost story was a popular Victorian Christmas tradition, so Dickens could reach a wide audience by using a form they already enjoyed. The supernatural also elevates the stakes: Scrooge's failure is not just social but spiritual, suggesting that greed is a sin with eternal consequences.",
        marks: 4,
      },
      {
        question:
          "What is the significance of Marley's warning: 'I wear the chain I forged in life'?",
        lines: 5,
        modelAnswer:
          "This warning establishes the novella's central moral logic: the way you live determines your fate after death. 'Forged' means both 'created' and 'made from metal', suggesting the consequences of greed are both self-inflicted and permanent. Marley's chain represents every selfish act accumulated over a lifetime. The warning is also directed at Scrooge — and, by extension, at the reader. Dickens uses Marley to establish that there are consequences for moral failure, creating urgency for Scrooge's (and the reader's) reformation.",
        marks: 4,
      },
      {
        question:
          "Explain how Dickens structures the Ghosts as an escalating sequence. Why is this effective?",
        lines: 5,
        modelAnswer:
          "Dickens moves from the gentle illumination of the Past (memory and nostalgia), through the abundant warmth of the Present (empathy and social awareness), to the terrifying silence of the Future (fear of death). Each Ghost increases the emotional and moral pressure on Scrooge. This escalation is effective because it mirrors the stages of moral awakening: first self-knowledge, then awareness of others, then confrontation with consequences. The structure also keeps the reader engaged through rising tension, making the eventual redemption in Stave 5 feel earned and satisfying.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Gothic bingo is highly engaging and gets every student interacting with the text immediately.",
      "Marley's chain: the double meaning of 'forged' is a high-value analytical point for AO2.",
      "The comparison table is an excellent revision resource — recommend students keep it in their folders.",
      "The 'ghost story vs social story' debate develops evaluative thinking and is good preparation for top-band responses.",
      "If students have studied other Gothic texts (e.g., Jekyll and Hyde, Frankenstein), encourage cross-text comparison.",
      "This lesson works well as a bridge between the Stave-by-Stave lessons and the more analytical lessons that follow.",
    ],
    targetedSkills: [
      "AO1: Critical response across the whole text",
      "AO2: Genre conventions, symbolism, structural analysis",
      "AO3: Context (Victorian ghost story tradition, Christianity)",
      "Comparative analysis",
      "Evaluative writing",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 9: Language, Structure & Narrative Voice
  // ─────────────────────────────────────────────
  {
    id: "acc-09-language-structure-voice",
    title: "Language, Structure & Narrative Voice",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse Dickens' language choices: imagery, listing, semantic fields, and rhetorical devices",
      "Explore the novella's structure: five Staves, circular narrative, and the progression of the Ghosts",
      "Examine Dickens' narrative voice: omniscient narrator, direct address, and irony",
      "Understand how these methods (AO2) serve Dickens' purpose and create effects on the reader",
    ],
    successCriteria: [
      "I can identify and analyse at least three language techniques Dickens uses with specific examples",
      "I can explain how the five-Stave structure and circular narrative reinforce the theme of redemption",
      "I can analyse the narrative voice and explain its effect on the reader's relationship with Scrooge",
    ],
    keywords: [
      "omniscient narrator",
      "direct address",
      "irony",
      "Stave structure",
      "circular narrative",
      "semantic field",
      "pathetic fallacy",
      "listing",
      "hyperbole",
      "tone",
    ],
    starterActivity: {
      title: "Method or Quotation? — Quick Sort",
      duration: "6 minutes",
      instructions:
        "Display twelve cards: six are method names (e.g., 'simile', 'pathetic fallacy', 'direct address') and six are examples from A Christmas Carol. Students match each method to its example. Feed back and discuss: In the exam, you must identify the method AND explain its effect. Knowing the quotation is not enough; knowing the method is not enough. You need both. This lesson focuses on how Dickens writes — his toolkit of methods.",
      differentiation: {
        support: "Reduce to four method-quotation pairs. Definitions of methods provided.",
        core: "Match all six pairs independently.",
        stretch:
          "Add a third column: 'Effect on reader' for each pair.",
      },
      resources: ["Method-quotation matching cards (projected or printed)"],
    },
    mainActivities: [
      {
        title: "Language Analysis — Dickens' Toolkit",
        duration: "20 minutes",
        instructions:
          "Teacher-led exploration of Dickens' key language techniques with specific examples. Work through five techniques with the class: (1) Listing — 'squeezing, wrenching, grasping, scraping, clutching' — creates accumulative effect, overwhelms the reader; (2) Semantic field of cold — 'froze', 'icy', 'nipped' — externalises Scrooge's emotional state; (3) Pathetic fallacy — the fog and darkness of Stave 1 vs the bright morning of Stave 5; (4) Simile — 'solitary as an oyster', 'hard and sharp as flint'; (5) Hyperbole and exclamatory sentences — 'I am as light as a feather, I am as happy as an angel!' For each technique, students record: the technique name, a quotation, and a sentence explaining its effect. Then students choose one technique and write a full PEE paragraph demonstrating analysis of that technique.",
        differentiation: {
          support:
            "Provide a pre-completed table for three techniques. Students complete the remaining two and write a PEE paragraph using the frame.",
          core: "Complete all five techniques and write a PEE paragraph independently.",
          stretch:
            "Write two PEE paragraphs on different techniques and evaluate which is most effective at shaping the reader's response to Scrooge.",
        },
        resources: [
          "Language techniques handout with quotation spaces",
          "PEE paragraph frame (support tier)",
          "Key extracts (printed)",
        ],
      },
      {
        title: "Structure — The Five Staves and Circular Narrative",
        duration: "18 minutes",
        instructions:
          "Discuss: Why does Dickens call the chapters 'Staves' rather than 'chapters'? A stave is a section of a song — the novella is structured like a Christmas carol (the title!). Explore the five-Stave structure: Stave 1 (exposition and problem), Staves 2-4 (rising action through three Ghosts), Stave 5 (resolution and transformation). Students create a structural diagram showing the arc. Then explore the circular structure: Stave 5 directly mirrors and reverses Stave 1. Students create a T-chart: 'Stave 1' vs 'Stave 5', identifying parallels and reversals (e.g., cold → warmth; rejection of Fred → dinner with Fred; miserly → generous). Write a paragraph: 'How does Dickens use structure to reinforce the theme of redemption?'",
        differentiation: {
          support:
            "Provide the structural diagram with labels. T-chart partially completed with three parallels. Paragraph frame provided.",
          core: "Create the diagram and T-chart independently; write a full paragraph.",
          stretch:
            "Explore why Dickens compresses the action into a single night — what structural effect does this urgency create?",
        },
        resources: [
          "Structural diagram template",
          "T-chart template",
          "Key Stave 1 and Stave 5 extracts",
        ],
      },
      {
        title: "Narrative Voice — Who Is Telling This Story?",
        duration: "10 minutes",
        instructions:
          "Introduce the concept of Dickens' narrative voice: an omniscient, conversational narrator who speaks directly to the reader. Read examples: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!' (direct address and exclamation), 'Marley was dead: to begin with. There is no doubt whatever about that.' (assertive, conversational). Discuss: How does this voice guide the reader's response? The narrator tells us what to think about Scrooge — is this effective or manipulative? Students write 3-4 sentences analysing one example of narrative voice and its effect.",
        differentiation: {
          support: "Provide two examples with the voice features identified. Students explain the effect.",
          core: "Find and analyse one example of narrative voice independently.",
          stretch:
            "Compare the narrator's tone in Stave 1 (critical, ironic) to Stave 5 (celebratory, warm) and argue that the narrator's transformation mirrors Scrooge's.",
        },
        resources: ["Narrative voice examples (projected)"],
      },
    ],
    plenaryActivity: {
      title: "AO2 Challenge — Rapid-Fire Method Identification",
      duration: "6 minutes",
      instructions:
        "Teacher displays eight short quotations in quick succession (10 seconds each). Students write down the method used for each on their whiteboards. Award points for correct identification AND for adding a word about the effect. Recap: AO2 is about how and why — the method and its effect. This is the skill that separates good answers from great ones.",
      differentiation: {
        support: "Display quotations with a multiple-choice method option.",
        core: "Identify methods independently from the quotation alone.",
        stretch:
          "Identify the method, name the effect, and link to Dickens' purpose — all in 10 seconds.",
      },
    },
    homework:
      "Choose three key quotations from A Christmas Carol. For each, identify the language technique, explain its effect on the reader, and link it to Dickens' purpose. Present as a revision grid.",
    worksheetQuestions: [
      {
        question:
          "Analyse the effect of the listing in 'squeezing, wrenching, grasping, scraping, clutching, covetous old sinner'.",
        lines: 5,
        modelAnswer:
          "The listing of aggressive verbs creates an accumulative effect, overwhelming the reader with the intensity of Scrooge's greed. Each verb suggests violent, desperate physical actions — as though Scrooge is physically seizing and hoarding wealth. The relentless list mirrors the relentless nature of his avarice. The climactic shift to the adjective 'covetous' and the noun 'sinner' elevates the description from physical to moral, suggesting Scrooge's greed is not just unpleasant but sinful. Dickens uses this list to ensure the reader's immediate and visceral dislike of Scrooge.",
        marks: 4,
      },
      {
        question:
          "Why does Dickens call the chapters 'Staves'? What is the significance of this structural choice?",
        lines: 5,
        modelAnswer:
          "A 'stave' is a verse or section of a song. By calling his chapters 'Staves', Dickens explicitly connects the novella to a carol — a Christmas song. This reinforces the musical, celebratory tone and suggests the story itself is a form of carol, meant to be shared and to bring joy. The five-Stave structure also gives the novella a sense of rhythm and progression, moving from discord (Stave 1) to harmony (Stave 5), mirroring Scrooge's journey from isolation to community.",
        marks: 3,
      },
      {
        question:
          "Explain how Dickens uses pathetic fallacy in A Christmas Carol. Give two examples.",
        lines: 6,
        modelAnswer:
          "In Stave 1, London is described as foggy, dark, and bitterly cold: 'The fog came pouring in at every chink and keyhole.' This mirrors Scrooge's cold, impenetrable character and creates an oppressive atmosphere. In Stave 5, Scrooge wakes to a 'clear, bright, jovial, stirring' morning — the weather reflects his transformed emotional state. The shift from darkness to light, cold to warmth, structurally reinforces the theme of redemption. Dickens uses pathetic fallacy to make the external world a mirror of Scrooge's inner moral state.",
        marks: 4,
      },
      {
        question:
          "How does the circular structure of the novella (Stave 1 mirroring Stave 5) reinforce Dickens' message?",
        lines: 6,
        modelAnswer:
          "The circular structure means that Stave 5 directly parallels Stave 1 but with every element reversed: cold becomes warmth, isolation becomes community, miserliness becomes generosity, rejection of Fred becomes acceptance. This structural mirroring makes Scrooge's transformation visible and measurable — the reader can compare directly. It also reinforces the theme of redemption: the narrative returns to where it started but everything has changed, suggesting that moral transformation does not require a new life but a new attitude to the same life. Dickens uses this structure to argue that change is always possible within existing circumstances.",
        marks: 4,
      },
      {
        question:
          "Analyse Dickens' narrative voice. How does the narrator guide the reader's response to Scrooge?",
        lines: 6,
        modelAnswer:
          "Dickens uses an omniscient, conversational narrator who speaks directly to the reader. The opening — 'Marley was dead: to begin with' — is assertive and chatty, establishing an intimate relationship with the audience. The narrator is openly judgemental: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!' The exclamation and direct address tell the reader exactly how to feel. This narrative voice means Dickens can control the reader's sympathy, guiding them to dislike Scrooge in Stave 1 and celebrate his transformation in Stave 5. The narrator acts as a moral commentator, ensuring Dickens' social message is unmistakable.",
        marks: 4,
      },
      {
        question:
          "Compare the language Dickens uses to describe Scrooge in Stave 1 and Stave 5. What does this contrast reveal?",
        lines: 6,
        modelAnswer:
          "In Stave 1, Scrooge is described through cold, hard imagery: 'hard and sharp as flint', 'the cold within him froze his old features'. In Stave 5, he is described through light, warm, childlike imagery: 'I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy!' The semantic field shifts entirely from cold to warmth, from hardness to lightness. The Stave 5 similes associate Scrooge with innocence and joy, suggesting a rebirth. Dickens uses this language contrast to make Scrooge's transformation vivid and undeniable, showing that moral change transforms everything about a person.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is AO2-focused — emphasise that AO2 is worth the most marks on the AQA Literature exam.",
      "The method-quotation sort is a quick diagnostic: if students cannot match them, they need more foundational work.",
      "Spend time on the Stave/carol connection — this is a sophisticated structural point that examiners reward.",
      "Narrative voice is often overlooked by students. The modelled examples should make it accessible.",
      "The rapid-fire plenary can be competitive and high-energy — use it to end the lesson on a positive note.",
      "Homework produces a revision resource — check completion and quality at the start of next lesson.",
    ],
    targetedSkills: [
      "AO2: Language analysis",
      "AO2: Structural analysis",
      "AO2: Narrative voice",
      "Analytical paragraph writing",
      "Comparative skills",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 10: Exam Practice — Writing a Grade 8/9 ACC Essay
  // ─────────────────────────────────────────────
  {
    id: "acc-10-exam-practice",
    title: "Exam Practice: Writing a Grade 8/9 ACC Essay",
    text: "A Christmas Carol",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the AQA GCSE English Literature Paper 1, Section B question format and mark scheme",
      "Develop a clear, confident exam strategy for the 30-mark A Christmas Carol question",
      "Practise writing a timed essay extract demonstrating Grade 8/9 skills",
      "Self-assess and improve work using the AQA mark scheme descriptors",
    ],
    successCriteria: [
      "I can decode an AQA exam question and plan a structured response in under 5 minutes",
      "I can write at least two PEEL paragraphs in 15 minutes that integrate AO1, AO2, and AO3",
      "I can self-assess my work against the AQA mark scheme and identify specific areas for improvement",
    ],
    keywords: [
      "AQA mark scheme",
      "AO1",
      "AO2",
      "AO3",
      "Grade 8/9",
      "thesis",
      "evaluative",
      "conceptualised response",
      "embedded quotation",
      "critical vocabulary",
    ],
    starterActivity: {
      title: "What Does a Grade 8/9 Look Like? — Model Paragraph Comparison",
      duration: "8 minutes",
      instructions:
        "Display two paragraphs answering the same question about Scrooge: one at Grade 5 and one at Grade 8/9. Students read both silently, then in pairs identify three differences. Feed back. Teacher highlights: (1) Grade 8/9 has a conceptualised topic sentence (an argument, not a description), (2) quotations are embedded within sentences rather than 'bolted on', (3) analysis goes beyond technique spotting to explore multiple interpretations and alternative readings, (4) context is woven into the analysis rather than added as a separate section, (5) critical vocabulary is precise ('Dickens deploys', 'the semantic field conveys', 'this subverts the reader's expectation').",
      differentiation: {
        support: "Provide a checklist of Grade 8/9 features — students tick off which are present in each paragraph.",
        core: "Identify differences independently and explain what makes the Grade 8/9 response stronger.",
        stretch:
          "Rewrite the Grade 5 paragraph to make it Grade 8/9 using the features identified.",
      },
      resources: [
        "Grade 5 and Grade 8/9 model paragraphs (printed or projected)",
        "Grade 8/9 features checklist",
      ],
    },
    mainActivities: [
      {
        title: "Decoding the Question & Planning",
        duration: "10 minutes",
        instructions:
          "Display a sample AQA-style question: 'Starting with this extract, how does Dickens present the theme of redemption in A Christmas Carol?' Teach the planning process: (1) Underline the key instruction ('how does Dickens present') — this means analyse methods (AO2), (2) Identify the focus ('the theme of redemption'), (3) Note 'starting with this extract' — begin with the given passage but move beyond it, (4) Plan three paragraphs: one on the extract, one on another moment in the novella, one that considers the whole-text significance and Dickens' purpose. Students have 5 minutes to create a bullet-point plan for this question. Share two plans under the visualiser and discuss.",
        differentiation: {
          support:
            "Provide a planning template with sections labelled (extract paragraph, wider text paragraph, purpose paragraph). Key quotations suggested.",
          core: "Plan independently using the taught strategy. Include quotation choices.",
          stretch:
            "Plan a conceptual argument that runs through all three paragraphs — what is your thesis about redemption?",
        },
        resources: [
          "Sample exam question (projected)",
          "Planning template (support tier)",
          "Extract (printed)",
        ],
      },
      {
        title: "Timed Writing — Two Grade 8/9 Paragraphs",
        duration: "20 minutes",
        instructions:
          "Students write two PEEL paragraphs in 20 minutes under exam conditions. Remind them of the Grade 8/9 features from the starter: conceptualised topic sentence, embedded quotations, multi-layered analysis (technique → effect → alternative interpretation → context), and precise vocabulary. Teacher circulates silently during writing, noting common strengths and weaknesses for feedback. After 20 minutes, pens down.",
        differentiation: {
          support:
            "Provide a paragraph frame for the first paragraph and a topic sentence for the second. Allow use of quotation bank.",
          core: "Write two paragraphs independently under timed conditions.",
          stretch:
            "Write three paragraphs and include a brief conclusion linking to Dickens' wider social purpose.",
        },
        resources: [
          "Exam paper (printed)",
          "Lined paper",
          "Quotation bank (support tier only)",
        ],
      },
      {
        title: "Self-Assessment & Improvement",
        duration: "15 minutes",
        instructions:
          "Distribute the AQA mark scheme descriptors for Bands 5 and 6 (Grades 7-9). Students read the descriptors and highlight key phrases: 'critical, exploratory, conceptualised response', 'judicious use of precise references', 'analysis of writer's methods with subject terminology', 'exploration of ideas/perspectives/contextual factors'. Students then re-read their own work and annotate it: Where have I achieved a Band 6 descriptor? Where have I fallen into Band 4 or 5? Students then choose their weakest paragraph and rewrite it, aiming to improve by one band. Teacher models how to upgrade a sentence: e.g., changing 'Dickens uses a simile' to 'Dickens deploys the simile of the oyster to encapsulate Scrooge's self-imposed isolation, subverting the reader's expectation of the protagonist as sympathetic.'",
        differentiation: {
          support:
            "Provide a simplified mark scheme with student-friendly language. Teacher highlights two specific areas for improvement.",
          core: "Self-assess independently using the full mark scheme and rewrite one paragraph.",
          stretch:
            "Peer-assess a partner's work using the mark scheme, providing written feedback with specific suggestions for improvement.",
        },
        resources: [
          "AQA mark scheme descriptors (Bands 4-6)",
          "Student-friendly mark scheme (support tier)",
          "Coloured pens for annotation",
        ],
      },
    ],
    plenaryActivity: {
      title: "One Thing I Will Do Differently — Exam Pledge",
      duration: "5 minutes",
      instructions:
        "Students write a single sentence: 'In my next essay, I will...' based on what they learned about their writing today. Examples: 'I will embed my quotations rather than bolting them on', 'I will start each paragraph with a conceptual argument, not a plot summary', 'I will weave context into my analysis rather than adding it at the end.' Share two or three. Teacher collects as a formative record.",
      differentiation: {
        support: "Choose from a list of common improvements and personalise.",
        core: "Write an original pledge based on their self-assessment.",
        stretch:
          "Write two pledges: one about AO2 (methods) and one about AO3 (context integration).",
      },
    },
    homework:
      "Complete a full timed essay (45 minutes) answering the practice question from today's lesson. Write three to four PEEL paragraphs plus a brief introduction and conclusion. Self-assess against the mark scheme before submitting.",
    worksheetQuestions: [
      {
        question:
          "What are the three Assessment Objectives (AOs) tested in the AQA A Christmas Carol question, and how many marks is each worth?",
        lines: 6,
        modelAnswer:
          "AO1 (12 marks): Read, understand and respond to texts — maintain a critical style, develop an informed personal response, use textual references including quotations to support and illustrate interpretations. AO2 (12 marks): Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology. AO3 (6 marks): Show understanding of the relationships between texts and the contexts in which they were written. The total is 30 marks, plus 4 marks for SPaG (spelling, punctuation, grammar).",
        marks: 3,
      },
      {
        question:
          "Read the following Grade 5 sentence and rewrite it at Grade 8/9 level: 'Dickens uses the simile \"hard and sharp as flint\" to describe Scrooge. This shows he is mean.'",
        lines: 6,
        modelAnswer:
          "Dickens deploys the simile 'hard and sharp as flint' to crystallise Scrooge's unyielding, abrasive nature. The mineral imagery suggests a man who is not merely ungenerous but fundamentally impenetrable — flint cannot be softened, only shattered. This mirrors the attitudes of the Victorian upper class, whom Dickens perceived as wilfully blind to the suffering around them. The word 'sharp' carries a dual meaning: Scrooge is both intellectually shrewd and emotionally cutting, a man whose very presence wounds those around him.",
        marks: 4,
      },
      {
        question:
          "Plan a response to: 'How does Dickens use the character of Scrooge to present ideas about social responsibility?' Write three paragraph topic sentences.",
        lines: 6,
        modelAnswer:
          "Paragraph 1: In Stave 1, Dickens constructs Scrooge as the embodiment of Victorian capitalism's moral bankruptcy, using his dismissal of the charity collectors to expose the callous logic of Malthusian economics. Paragraph 2: Through the Ghost of Christmas Present's revelation of the Cratchit family, Dickens forces both Scrooge and the reader to confront the human consequences of economic indifference, presenting social responsibility as a moral imperative rather than an optional virtue. Paragraph 3: Scrooge's transformation in Stave 5 serves as Dickens' thesis: that the wealthy have both the power and the duty to alleviate suffering, and that personal redemption is inseparable from social action.",
        marks: 4,
      },
      {
        question:
          "What is the difference between 'bolting on' context and integrating it? Give an example of each.",
        lines: 6,
        modelAnswer:
          "Bolted-on context is added as a separate, disconnected sentence: 'Scrooge says the poor should go to workhouses. In Victorian times, workhouses were very harsh places.' Integrated context is woven into the analysis: 'Scrooge's reference to prisons and workhouses echoes the language of the 1834 Poor Law, which Dickens regarded as institutionalised cruelty — by placing Malthusian rhetoric in Scrooge's mouth, Dickens transforms his protagonist into a satirical mouthpiece for the ideology he sought to dismantle.' The integrated version makes context part of the argument rather than a detour from it.",
        marks: 3,
      },
      {
        question:
          "Identify two common mistakes students make in A Christmas Carol essays and explain how to avoid them.",
        lines: 6,
        modelAnswer:
          "First, many students retell the story rather than analysing it — they describe what happens instead of explaining how and why Dickens writes it that way. To avoid this, start every paragraph with an analytical point about Dickens' methods or purpose, not a plot summary. Second, students often 'bolt on' context as a separate section rather than weaving it into their analysis. To avoid this, integrate context mid-paragraph: instead of writing 'In Victorian times, the poor were treated badly', write 'Scrooge echoes Malthusian ideology when he refers to the poor as \"surplus population\", reflecting the dominant economic thinking that Dickens sought to challenge.'",
        marks: 3,
      },
      {
        question:
          "Write a Grade 8/9 paragraph analysing how Dickens presents the theme of redemption in the extract where Scrooge wakes in Stave 5.",
        lines: 10,
        modelAnswer:
          "Dickens presents Scrooge's redemption as a joyous rebirth, deploying breathless exclamatory sentences — 'I don't know what to do! I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy!' — to capture the overwhelming euphoria of moral awakening. The triple simile is structurally significant: 'feather' suggests the lifting of the moral weight symbolised by Marley's chain, 'angel' elevates Scrooge to spiritual goodness, and 'school-boy' returns him to childhood innocence, reversing the lonely boy the Ghost of Christmas Past revealed. The listing creates an accumulative, almost incoherent energy that mirrors a man reborn — Scrooge cannot contain his transformation within a single image. Dickens deliberately echoes the listing technique used in Stave 1 ('squeezing, wrenching, grasping') but inverts its effect: where the earlier list constructed greed, this one constructs joy. This structural mirroring reinforces Dickens' thesis that redemption is not the creation of a new person but the recovery of a self that was always latent. For a Victorian readership steeped in Christian narratives of salvation, Scrooge's transformation would resonate as proof that no sinner is beyond grace — a message Dickens extends beyond the spiritual to the social, arguing that the wealthy can and must change their relationship with the poor.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "This is a key assessment lesson — ensure conditions are as close to exam conditions as possible for the timed writing.",
      "The 20-minute writing window is shorter than the actual exam allocation; tell students this is deliberate practice for building pace.",
      "The self-assessment against the mark scheme is crucial for developing metacognitive skills — model it thoroughly.",
      "Collect the work for marking and provide individual written feedback before the mock exam.",
      "The 'rewrite a Grade 5 sentence' question is highly effective for showing students what improvement looks like.",
      "Common issues to look for: narrative retelling, technique spotting without analysis, context bolted on at the end.",
      "Consider displaying anonymised strong paragraphs (with permission) at the start of the next lesson.",
      "Ensure all students leave with their 'exam pledge' — revisit this at the start of revision sessions.",
    ],
    targetedSkills: [
      "AO1: Critical, conceptualised response",
      "AO2: Methods analysis with subject terminology",
      "AO3: Context integration",
      "Exam technique and time management",
      "Self-assessment and metacognition",
    ],
  },
];
