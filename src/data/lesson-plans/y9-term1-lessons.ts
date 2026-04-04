import type { LessonPlan } from '../../types';

export const y9Term1Lessons: LessonPlan[] = [
  // ── Lesson 1: Victorian England and Dickens's Social Message ─────────────
  {
    id: 'y9t1-01',
    title: "Victorian England and Dickens's Social Message",
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand the social and historical context of Victorian England, including poverty, the Poor Law, and class inequality (9R.1)',
      "Explain Dickens's purpose in writing A Christmas Carol and his role as a social reformer (9R.6)",
      'Connect contextual knowledge to specific characters and themes in the novella (9R.2)',
      'Practise integrating contextual knowledge into analytical writing rather than stating it separately (9W.3)',
    ],
    successCriteria: [
      "I can explain at least two features of Victorian England that shaped Dickens's writing",
      "I can describe Dickens's purpose in writing A Christmas Carol with reference to social reform",
      'I can connect one piece of contextual knowledge to a specific character or moment in the novella',
      'I can write a sentence that weaves context into an analytical point',
    ],
    keywords: [
      'context',
      'social reform',
      'Victorian',
      'Poor Law',
      'workhouse',
      'industrial revolution',
      'class',
      'philanthropy',
      'authorial intent',
      'didactic',
    ],
    starterActivity: {
      title: 'Victorian Britain — What Do You Already Know?',
      duration: '8 minutes',
      instructions:
        'Display five images around the room or on the board: a Victorian workhouse, a child chimney sweep, a wealthy Victorian family at Christmas, a street scene of urban poverty, and a portrait of Charles Dickens. Students circulate or observe and write one word or phrase for each image. Teacher collects responses and builds a shared mind map, drawing out key terms such as poverty, inequality, and charity. Introduce the phrase "Victorian England" and ask: what problems might a novelist want to write about in this society?',
      differentiation: {
        support:
          'Provide a word bank of contextual terms (e.g. poverty, workhouse, inequality, class, charity, reform) to help students articulate responses.',
        core: 'Students write spontaneous responses and begin drawing connections between images.',
        stretch:
          'Students write a sentence for at least two images predicting what theme a novel set in this period might explore, justifying their prediction.',
      },
      resources: [
        'Five historical images printed or displayed digitally',
        'Sticky notes or mini whiteboards',
        'Blank mind-map template on board',
      ],
    },
    mainActivities: [
      {
        title: "Context Reading — Dickens's World and His Purpose",
        duration: '22 minutes',
        instructions:
          "Distribute the Context Information Sheet covering: the Poor Law Amendment Act of 1834 (which forced the destitute into workhouses), child labour in Victorian factories and mines, the vast gap between wealthy and working-class Victorians, and Dickens's own childhood poverty and time in a blacking factory. Students read in pairs, highlighting what they consider the three most important facts and annotating with 'This matters because...' for each. Teacher leads a 5-minute whole-class discussion drawing out the idea that Dickens wrote A Christmas Carol as a deliberate act of social protest. Students then complete a two-column chart: historical fact on the left, connection to the novella on the right.",
        differentiation: {
          support:
            "Provide a pre-annotated version of the sheet with one 'This matters because...' example completed. Students add two more of their own.",
          core: 'Students annotate the full sheet and complete the two-column chart independently.',
          stretch:
            "Students write a paragraph integrating at least two contextual points into an analytical statement about Dickens's purpose, avoiding standalone context sentences.",
        },
        resources: [
          "Context Information Sheet (Poor Law, child labour, Dickens's biography)",
          'Two-column chart template',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: 'Integrated Context Writing Practice',
        duration: '18 minutes',
        instructions:
          "Model on the board the difference between a 'context dumped' paragraph ('In Victorian England there were workhouses. Scrooge talks about workhouses.') and an 'integrated context' paragraph that connects historical detail directly to character, theme, or authorial purpose. Students write their own integrated analytical sentence in response to the prompt: 'How does the historical context of Victorian England shape Dickens\\'s message in A Christmas Carol?' They draft, swap with a partner, give written feedback using the success criteria, then revise. Teacher circulates offering targeted feedback.",
        differentiation: {
          support:
            "Provide a sentence frame: 'Dickens was writing at a time when [historical detail], which explains why he presents [character/idea] as [point].'",
          core: 'Students write two to three integrated sentences, then revise after peer feedback.',
          stretch:
            "Students write a full PEEC paragraph evaluating how effectively context supports their argument about Dickens's social message.",
        },
        resources: [
          'Model paragraph examples displayed on board',
          'Peer feedback prompt cards',
          'PEEC paragraph scaffold for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Three Facts, One Connection — Exit Ticket',
      duration: '7 minutes',
      instructions:
        "Students write on a slip of paper: three key contextual facts learned today, and one specific connection between a contextual fact and a character or moment in the novella. Teacher collects slips and uses them to identify misconceptions and strong examples to share at the start of the next lesson.",
      differentiation: {
        support:
          "Provide sentence frames: 'One fact I have learned is... This connects to the novella because...'",
        core: 'Students write all three facts and one clear connection in their own words.',
        stretch:
          "Students include a comment on Dickens's authorial intent: what he wanted readers to think or feel by setting the novella in Victorian England.",
      },
    },
    homework:
      "Research one aspect of Victorian society not covered in class (e.g. the Ten Hours Act, ragged schools, or the role of the Church in charity). Write a paragraph explaining what you found and how it might connect to A Christmas Carol.",
    worksheetQuestions: [
      {
        question:
          "What was the Poor Law Amendment Act of 1834, and how does it connect to Scrooge's attitudes in the novella?",
        lines: 5,
        modelAnswer:
          "The Poor Law Amendment Act of 1834 forced destitute people to enter workhouses if they wanted relief from poverty. Conditions in workhouses were deliberately harsh to deter the poor from seeking help. This connects directly to Scrooge's chilling response early in the novella: when asked for a charitable donation, he asks whether the workhouses and prisons are 'still in operation', suggesting he believes the existing system is sufficient. Dickens uses Scrooge to embody the callous attitudes of those who supported the Poor Law rather than genuine charity.",
        marks: 5,
      },
      {
        question:
          "Describe two features of Dickens's own life that shaped the social message of A Christmas Carol.",
        lines: 4,
        modelAnswer:
          "Dickens spent part of his childhood working in a blacking factory after his father was imprisoned for debt. This experience of poverty and social humiliation gave him first-hand knowledge of the suffering of the working poor. He also visited ragged schools in London and was shocked by the conditions of child poverty. These experiences made him a passionate advocate for the poor and drove him to write A Christmas Carol as a deliberate act of social protest, using fiction to reach audiences that political pamphlets could not.",
        marks: 4,
      },
      {
        question:
          'What is meant by the term "didactic"? How does A Christmas Carol fit this description?',
        lines: 4,
        modelAnswer:
          "A didactic text is one that is designed to teach a moral lesson. A Christmas Carol is didactic because Dickens uses the narrative of Scrooge's transformation to argue that individuals have a moral duty to care for the poor, and that redemption is possible when people open their hearts to compassion. The novella is not simply an entertaining ghost story -- it is a carefully constructed moral argument dressed in the form of a seasonal tale.",
        marks: 4,
      },
      {
        question:
          'Rewrite the following sentence so that context is integrated into analysis: "Victorian England had many poor people. Dickens wrote about poverty."',
        lines: 5,
        modelAnswer:
          "A strong integrated version might read: 'Dickens wrote A Christmas Carol in 1843, a period when industrialisation had created enormous wealth for the middle and upper classes while leaving vast numbers of the working poor in desperate conditions -- a social contradiction he attacks through Scrooge's transformation from indifferent capitalist to generous benefactor.' The key is connecting the historical detail directly to a character, choice, or theme in the text rather than listing facts in isolation.",
        marks: 4,
      },
      {
        question:
          "Why is it important to integrate context into analytical writing about A Christmas Carol rather than writing a separate 'context paragraph'?",
        lines: 4,
        modelAnswer:
          "Integrated context demonstrates that a student understands how historical and social forces directly shape the meaning of the text. A standalone context paragraph merely lists facts and does not show analytical skill. Examiners reward students who connect context to specific quotations, characters, and authorial choices -- showing that Victorian history is not background decoration but the very reason Dickens made each specific narrative and linguistic decision.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Some students may arrive with very limited knowledge of Victorian England. The image activity is designed to activate curiosity rather than assumed knowledge -- treat it as discovery, not recall.",
      "Dickens's biography is a powerful hook. Many students are surprised that a famous author grew up in poverty. Use this to challenge assumptions about who gets to tell stories about inequality.",
      "The 'integrated context' vs 'context dumped' distinction is the single most important writing habit to establish in this unit. Introduce it clearly here and reinforce it in every subsequent lesson.",
      "If time allows, read aloud the opening paragraph of the novella -- 'Marley was dead, to begin with' -- to give students an immediate sense of Dickens's distinctive narrative voice before the next lesson.",
    ],
    targetedSkills: [
      '9R.1 -- Reading for meaning and context',
      '9R.2 -- Retrieval and identification of key details',
      '9R.6 -- Evaluating authorial intent and purpose',
      '9W.3 -- Integrating evidence and context in analytical writing',
      '9W.4 -- Structuring analytical paragraphs',
    ],
  },

  // ── Lesson 2: Introducing Scrooge ────────────────────────────────────────
  {
    id: 'y9t1-02',
    title: 'Introducing Scrooge -- Character and First Impressions (Stave 1)',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse how Dickens introduces Scrooge in Stave 1 through language, imagery, and narrative voice (9R.4)',
      'Identify and interpret specific techniques including extended metaphor, accumulation, and cold imagery (9R.3)',
      "Explain what Scrooge's behaviour reveals about Victorian attitudes to wealth and poverty (9R.6)",
      'Write an analytical paragraph about Scrooge using embedded quotations and subject terminology (9W.4)',
    ],
    successCriteria: [
      'I can identify at least three techniques Dickens uses to present Scrooge in Stave 1',
      'I can explain the effect of cold imagery applied to Scrooge',
      "I can connect Scrooge's characterisation to Dickens's social message",
      'I can write an analytical paragraph with an embedded quotation and named technique',
    ],
    keywords: [
      'characterisation',
      'accumulation',
      'extended metaphor',
      'cold imagery',
      'misanthropy',
      'avarice',
      'satire',
      'narrative voice',
      'first impressions',
    ],
    starterActivity: {
      title: 'First Impressions -- What Makes a Villain?',
      duration: '8 minutes',
      instructions:
        "Display the famous description of Scrooge from Stave 1 on the board: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!' Students read it twice -- once silently, once read aloud by teacher with emphasis. Ask: how many adjectives or verbs describe Scrooge? What do they have in common? What single word would students use to sum him up? Take responses and introduce the term 'accumulation'. Ask: why does Dickens pile up so many words here rather than choosing just one?",
      differentiation: {
        support:
          'Provide a vocabulary glossary for the quotation with definitions of covetous, grasping, and wrenching.',
        core: 'Students identify techniques and discuss the effect independently before sharing.',
        stretch:
          "Students consider why Dickens uses verbs (action words) rather than just adjectives -- what does this suggest about Scrooge's active, aggressive nature rather than passive indifference?",
      },
      resources: [
        'Stave 1 Scrooge quotation displayed on board',
        'Vocabulary glossary for support students',
        'Mini whiteboards or response cards',
      ],
    },
    mainActivities: [
      {
        title: 'Close Reading -- Cold Imagery and Extended Metaphor',
        duration: '22 minutes',
        instructions:
          "Direct students to the extended passage introducing Scrooge in Stave 1, from 'Oh! But he was a tight-fisted hand...' to '...even the blindman\\'s dog appeared to know him.' Students read in pairs and annotate for: (a) all references to cold, frost, or ice; (b) all similes and metaphors; (c) any moments where Dickens's narrative voice seems to be mocking Scrooge. Take whole-class feedback. Teacher models moving from quotation to technique to effect: 'The metaphor of Scrooge as a man who carried his own cold with him suggests that his miserliness is not simply a financial attitude but a fundamental coldness of character -- he actively chills everything around him.' Students then annotate three more quotations independently using this structure.",
        differentiation: {
          support:
            'Provide a pre-highlighted extract with three quotations already marked and one completed annotation as a model.',
          core: 'Students annotate the passage independently and identify three techniques with effects.',
          stretch:
            'Students consider how the cold imagery functions as an extended metaphor throughout Stave 1 and what Dickens implies about the relationship between wealth and emotional warmth.',
        },
        resources: [
          'Printed extract from Stave 1 for annotation',
          'Annotation frame (Quotation / Technique / Effect)',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: 'Analytical Paragraph Writing -- Presenting Scrooge',
        duration: '18 minutes',
        instructions:
          "Students write an analytical paragraph in response to the question: 'How does Dickens present Scrooge as a villain in Stave 1?' Teacher models a strong opening sentence using the Point-Evidence-Explain-Context (PEEC) structure. Students draft their paragraph, embed at least one quotation, name at least one technique, and include a contextual link to Victorian attitudes to poverty. Peer assessment follows: partners highlight one strength and write one suggestion for improvement. Students revise the final sentence of their paragraph in light of feedback.",
        differentiation: {
          support:
            "Provide a PEEC paragraph scaffold with sentence starters: 'Dickens presents Scrooge as... The word/phrase [x] suggests... This is significant because... In the context of Victorian England...'",
          core: 'Students write independently and complete peer assessment.',
          stretch:
            "Students write two linked paragraphs that develop an argument about whether Scrooge is a straightforward villain or a more complex figure even at this early stage -- consider the moment Dickens hints Scrooge was once different.",
        },
        resources: [
          'PEEC scaffold for support students',
          'Peer assessment prompt: What works? What could be stronger?',
          'Success criteria displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Hot Seat -- Defending Scrooge',
      duration: '7 minutes',
      instructions:
        "One volunteer (or teacher) takes the hot seat as Scrooge. Other students ask questions: 'Why do you hate Christmas?' 'Why won\\'t you give money to the poor?' The student in the hot seat responds in character, using evidence from Stave 1. After two or three exchanges, teacher steps out of role and asks: 'Has anything Scrooge said made you feel any sympathy for him?' This plants the seed for future lessons about transformation and redemption.",
      differentiation: {
        support:
          'Provide a card with three possible questions students can choose from if they cannot generate their own.',
        core: 'Students generate questions and respond in character independently.',
        stretch:
          "Students consider whether Scrooge's logic is entirely without merit in a Victorian context -- is self-reliance a defensible philosophy? -- and articulate this in a sentence after the activity.",
      },
    },
    homework:
      "Re-read Stave 1 and find two more quotations that reveal Scrooge's character. For each quotation, write two sentences: one identifying the technique used, and one explaining its effect on the reader.",
    worksheetQuestions: [
      {
        question:
          "What is accumulation? Find an example of accumulation in Dickens's description of Scrooge in Stave 1 and explain its effect.",
        lines: 5,
        modelAnswer:
          "Accumulation is the technique of listing multiple words or phrases in succession to build up an impression or argument. In Stave 1, Dickens writes that Scrooge was 'a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner'. By piling up six consecutive action-based adjectives and verbs, Dickens creates an overwhelming sense of Scrooge's greed -- the accumulation mimics the relentless, aggressive nature of Scrooge's avarice itself, as though his miserliness cannot be contained in a single word.",
        marks: 5,
      },
      {
        question:
          'Explain how Dickens uses cold imagery to characterise Scrooge. Use at least one quotation.',
        lines: 5,
        modelAnswer:
          "Dickens consistently uses cold imagery to suggest that Scrooge's miserliness is not simply a financial attitude but a fundamental emotional coldness. The narrator observes that 'he carried his own low temperature always about with him' -- a striking metaphor implying that Scrooge physically radiates cold, chilling the world around him just as he refuses to warm it with generosity. This imagery associates wealth hoarded without charity with emotional death, reinforcing Dickens's argument that selfishness is a kind of spiritual freezing.",
        marks: 5,
      },
      {
        question:
          "What does Scrooge's treatment of Bob Cratchit in Stave 1 reveal about Dickens's social message?",
        lines: 4,
        modelAnswer:
          "Scrooge keeps his clerk Bob Cratchit in a barely heated room, resenting even the coal he uses to warm himself. This reveals the power imbalance between employer and employee in Victorian England, where workers had no legal protection and were entirely dependent on their employer's goodwill. Dickens uses this relationship to attack the exploitation of the poor by the wealthy, presenting Scrooge's treatment of Bob as morally indefensible and inviting the reader to condemn the economic system that makes it possible.",
        marks: 4,
      },
      {
        question:
          "How does Dickens's narrative voice in Stave 1 shape the reader's attitude towards Scrooge?",
        lines: 4,
        modelAnswer:
          "Dickens's narrative voice is intrusive and opinionated, directly guiding the reader's response. The narrator addresses the reader conversationally -- 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!' -- using exclamation and direct address to create a sense of shared moral judgement. This satirical tone invites the reader to join the narrator in condemning Scrooge, ensuring that even readers who might sympathise with self-reliance feel the weight of Dickens's moral disapproval.",
        marks: 4,
      },
      {
        question:
          'Is Scrooge entirely unsympathetic in Stave 1? Give evidence for your view.',
        lines: 5,
        modelAnswer:
          "While Scrooge is overwhelmingly presented as a villain in Stave 1, there are early hints that he was not always so. The Ghost of Christmas Past later reveals a warmer, younger Scrooge, and even in Stave 1 the narrator notes that Scrooge was once apprenticed to the jovial Fezziwig. However, within Stave 1 itself, Scrooge's refusal to donate to charity and his contempt for the poor ('Are there no prisons? Are there no workhouses?') make it difficult to feel sympathy. Dickens deliberately withholds the backstory to ensure the reader condemns Scrooge before being invited to understand him.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The accumulation quotation ('squeezing, wrenching, grasping...') is one of the most analysed sentences in GCSE English Literature. Ensure students can name the technique, quote accurately, and explain the effect -- this will recur in assessments.",
      'The hot-seat activity works best if the teacher takes the role initially to model how to argue in character without simply agreeing with everything. Scrooge has a consistent (if morally bankrupt) logic that can be defended.',
      'Point out to students that Dickens never lets us entirely forget that Scrooge might be redeemable -- even in Stave 1 there are small signals. This prevents the character from being a flat villain and makes the transformation more believable.',
      'The cold imagery is worth spending time on as it functions as a sustained metaphor throughout the entire novella. Students who track it across all five Staves will have a strong analytical thread for their essays.',
    ],
    targetedSkills: [
      '9R.3 -- Identifying and interpreting language techniques',
      "9R.4 -- Analysing effects of writers' choices",
      '9R.6 -- Evaluating authorial intent',
      '9W.4 -- Writing analytical paragraphs with embedded quotations',
      '9S.2 -- Using subject terminology accurately',
    ],
  },

  // ── Lesson 3: The Ghost of Christmas Past ────────────────────────────────
  {
    id: 'y9t1-03',
    title: 'The Ghost of Christmas Past -- Memory and Regret',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse how Dickens uses the Ghost of Christmas Past to explore memory, loss, and regret (9R.4)',
      "Explain how Scrooge's past shapes his present character (9R.2)",
      'Interpret the significance of key scenes: Fezziwig, Fan, and Belle (9R.3)',
      'Write analytically about how Dickens uses the supernatural to deliver a moral message (9W.4)',
    ],
    successCriteria: [
      "I can describe what the Ghost of Christmas Past looks like and explain what its appearance symbolises",
      'I can explain the significance of at least two scenes Scrooge witnesses in Stave 2',
      "I can analyse how Dickens presents Scrooge's emotional response to his past",
      "I can write a paragraph connecting memory to Dickens's moral argument",
    ],
    keywords: [
      'memory',
      'regret',
      'symbolism',
      'supernatural',
      'juxtaposition',
      'pathos',
      'redemption',
      'isolation',
      'nostalgia',
    ],
    starterActivity: {
      title: 'The Ghost of Christmas Past -- First Impressions',
      duration: '8 minutes',
      instructions:
        "Read aloud the description of the Ghost of Christmas Past from Stave 2: 'It was a strange figure -- like a child: yet not so like a child as like an old man, viewed through some supernatural medium...' Students sketch the ghost in their notebooks based solely on the description, then compare with a partner. Teacher asks: why does this ghost appear young and old at once? What might this suggest about the nature of memory? Draw out the idea that memory is both vivid (child-like, immediate) and aged (the past is long ago). Introduce the word 'symbolism'.",
      differentiation: {
        support:
          'Provide the description printed on a card with key descriptive phrases highlighted.',
        core: 'Students sketch and discuss independently before whole-class sharing.',
        stretch:
          "Students write two sentences interpreting the ghost's paradoxical appearance as a comment on the nature of memory itself.",
      },
      resources: [
        'Ghost of Christmas Past description printed or displayed',
        'Blank paper for sketching',
        'Mini whiteboards for response sharing',
      ],
    },
    mainActivities: [
      {
        title: 'Key Scenes -- Fezziwig, Fan, and Belle',
        duration: '22 minutes',
        instructions:
          "Students work in groups of three. Each group member is assigned one scene: the Fezziwig Christmas party, the reunion with Fan (Scrooge's sister), or Belle's release of Scrooge from their engagement. Groups read their assigned passage and prepare a two-minute summary covering: what happens, how Scrooge reacts, and what Dickens wants the reader to understand about Scrooge's past. Groups share back. Teacher draws connections between scenes: Fezziwig shows the power of generosity and warmth; Fan shows the loss of familial love; Belle shows how Scrooge chose money over love. Whole-class discussion: which scene do students find most affecting and why?",
        differentiation: {
          support:
            'Provide a guided reading frame for each scene: Who is in this scene? What does Scrooge do or say? What does Scrooge feel? What does Dickens want us to think?',
          core: 'Students read and prepare their summary independently within the group.',
          stretch:
            "Students consider how all three scenes work together to build a picture of what Scrooge has sacrificed, and write a sentence arguing which scene is most important to his eventual transformation.",
        },
        resources: [
          'Printed extracts: Fezziwig scene, Fan scene, Belle scene',
          'Guided reading frame for support students',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: 'Analytical Writing -- Memory and Moral Message',
        duration: '18 minutes',
        instructions:
          "Students write an analytical paragraph in response to: 'How does Dickens use the Ghost of Christmas Past to develop Scrooge\\'s character?' Teacher models how to link a quotation from one of the three scenes to Dickens's wider moral argument about the importance of human connection over material wealth. Students draft, embed a quotation, name a technique, and write a contextual link. Peer assessment using the success criteria follows, then students revise.",
        differentiation: {
          support:
            "Provide a sentence starter: 'In Stave 2, Dickens uses the scene with [Fezziwig/Fan/Belle] to reveal that Scrooge was once... The word/phrase [x] suggests... This is significant because Dickens is arguing that...'",
          core: 'Students write independently and complete peer review.',
          stretch:
            "Students write two linked paragraphs arguing that the Ghost of Christmas Past is the most important of the three spirits in terms of explaining why Scrooge is the way he is, using evidence from at least two scenes.",
        },
        resources: [
          'PEEC scaffold for support students',
          'Peer assessment prompt cards',
          'Success criteria on board',
        ],
      },
    ],
    plenaryActivity: {
      title: "Scrooge's Emotional Journey -- Timeline",
      duration: '7 minutes',
      instructions:
        "Students draw a simple horizontal timeline labelled 'Start of Stave 2' to 'End of Stave 2'. They mark at least four points on the timeline where Scrooge's emotion clearly changes, noting the emotion and the cause. Teacher gathers two or three examples and asks: what does this emotional journey tell us about Dickens's purpose? Draw out the idea that the reader needs to feel Scrooge's pain in order to believe in his eventual change.",
      differentiation: {
        support:
          'Provide a pre-drawn timeline with four blank boxes to complete.',
        core: 'Students create their own timeline independently.',
        stretch:
          "Students annotate their timeline with a comment on Dickens's technique at each point -- what specific device creates the emotional shift?",
      },
    },
    homework:
      "Choose one of the three scenes from Stave 2 (Fezziwig, Fan, or Belle). Write a full analytical paragraph explaining how Dickens uses this scene to develop the reader's understanding of Scrooge, using at least one embedded quotation.",
    worksheetQuestions: [
      {
        question:
          "What does the appearance of the Ghost of Christmas Past symbolise? Use details from Dickens's description.",
        lines: 4,
        modelAnswer:
          "The Ghost of Christmas Past is described as 'like a child: yet not so like a child as like an old man' -- a paradox that symbolises the dual nature of memory, which can feel both immediate and vivid (like childhood) and yet distant and aged (like the remote past). The ghost's flickering flame coming from the top of its head may represent the illuminating but sometimes uncomfortable light that memory casts on the past. Dickens uses this supernatural figure to embody the idea that we cannot escape our own history.",
        marks: 4,
      },
      {
        question:
          "How does the Fezziwig scene develop the reader's understanding of Scrooge?",
        lines: 5,
        modelAnswer:
          "The Fezziwig scene shows Scrooge as a happy, laughing young apprentice at a generous Christmas party -- a sharp contrast to the cold, isolated figure of Stave 1. Dickens uses this scene to show that Scrooge was not always miserly and that the warmth of human generosity once brought him joy. When Scrooge defends Fezziwig's happiness against the Ghost's observation that the party cost little money, the reader sees the seeds of moral insight in Scrooge -- he understands that Fezziwig's gift was his spirit, not his money. This plants the first hint that Scrooge is capable of change.",
        marks: 5,
      },
      {
        question:
          "What does Belle's dismissal of Scrooge reveal about the theme of wealth versus human connection?",
        lines: 4,
        modelAnswer:
          "Belle tells Scrooge that he has replaced her with a 'golden idol' -- a Biblical metaphor that frames his pursuit of money as a form of false worship. She observes that Scrooge now fears poverty above all else, and that this fear has consumed the man she loved. Dickens uses this scene to argue that the pursuit of wealth at the expense of human relationships leads not to security but to spiritual and emotional poverty -- a central theme of the novella. Scrooge's anguished reaction confirms that he recognises the truth of her words.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use Scrooge's emotional reactions in Stave 2 to make the reader sympathise with him?",
        lines: 5,
        modelAnswer:
          "Dickens carefully orchestrates Scrooge's reactions to create pathos. Scrooge laughs with delight at the Fezziwig party, weeps at the sight of his younger self alone at school, and tries to prevent the scene with Belle from continuing. By showing us a Scrooge who feels remorse and pain, Dickens transforms him from a flat villain into a tragic figure -- someone who made wrong choices but is capable of suffering because of them. This sympathy is essential: the reader must believe Scrooge is worth saving for the moral resolution of the novella to be meaningful.",
        marks: 5,
      },
      {
        question:
          'Why does Dickens include the character of Fan in Stave 2?',
        lines: 4,
        modelAnswer:
          "Fan is Scrooge's beloved younger sister, who arrives joyfully to take him home from a lonely school. Her warmth and love for Scrooge show that he was once capable of deep human connection. Her inclusion also adds poignancy because the reader knows Fan has died before the events of the novella, and that her son Fred -- who has repeatedly invited Scrooge to Christmas dinner -- is all that remains of her. Dickens uses Fan to suggest that Scrooge's rejection of Fred is a rejection of his last living link to the love of his past.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'The Belle scene is the most emotionally complex in Stave 2 and repays close reading. Students who understand it well will have strong analytical material for both character and theme essays.',
      "Students sometimes struggle with the idea that Fezziwig is significant because his generosity costs relatively little -- the point is that his gift is one of spirit and warmth rather than money. Make this distinction explicit.",
      "The connection between Fan and Fred is often missed by students. Drawing attention to it enriches their understanding of why Scrooge's rejection of Fred is so pointed.",
      "The ghost's appearance (young/old, light emanating from its head) is richly symbolic. Encourage students to consider whether the light represents conscience, memory, or truth -- all interpretations can be supported.",
    ],
    targetedSkills: [
      '9R.2 -- Retrieval and identification of key details',
      "9R.3 -- Identifying and interpreting language techniques",
      "9R.4 -- Analysing effects of writers' choices",
      '9W.4 -- Writing analytical paragraphs with embedded quotations',
      '9R.6 -- Evaluating authorial intent and moral purpose',
    ],
  },

  // ── Lesson 4: The Ghost of Christmas Present ──────────────────────────────
  {
    id: 'y9t1-04',
    title: 'The Ghost of Christmas Present -- Ignorance and Want',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse how Dickens uses the Ghost of Christmas Present to broaden the social scope of the novella (9R.4)',
      'Interpret the symbolic significance of the children Ignorance and Want (9R.3)',
      "Explore how the Cratchit family scenes develop Dickens's argument about poverty and dignity (9R.2)",
      "Write analytically about how Dickens presents poverty as a social rather than individual failing (9W.3)",
    ],
    successCriteria: [
      'I can describe the Ghost of Christmas Present and explain what its appearance represents',
      'I can explain the symbolic meaning of Ignorance and Want',
      "I can analyse how Dickens presents the Cratchit family to challenge attitudes to the poor",
      'I can write a paragraph integrating context into analysis of the Ghost of Christmas Present',
    ],
    keywords: [
      'allegory',
      'symbolism',
      'poverty',
      'dignity',
      'social commentary',
      'Ignorance',
      'Want',
      'juxtaposition',
      'Malthusianism',
    ],
    starterActivity: {
      title: 'Who Are the Poor? -- Challenging Assumptions',
      duration: '8 minutes',
      instructions:
        "Write on the board: 'The poor are poor because they do not work hard enough.' Ask students to agree, disagree, or sit on the fence -- they must stand in a designated area of the room. Take responses from each group. Teacher introduces Thomas Malthus and the Victorian idea that poverty was the natural result of moral failing -- a view Dickens attacks throughout the novella. Ask: if you were Dickens, how would you use fiction to challenge this view? This sets up the lesson's focus on how Dickens uses the Cratchit family and the allegorical children to make a counter-argument.",
      differentiation: {
        support:
          'Provide a brief explanation of Malthusian ideas on a card to ensure all students can engage with the discussion.',
        core: 'Students discuss and justify their position independently.',
        stretch:
          "Students consider whether any version of the 'poverty is earned' argument is defensible and how Dickens systematically dismantles each version in Stave 3.",
      },
      resources: [
        'Statement displayed on board',
        'Area markers for agree/disagree/fence',
        'Malthus explanation card for support students',
      ],
    },
    mainActivities: [
      {
        title: 'Close Reading -- The Cratchit Christmas',
        duration: '20 minutes',
        instructions:
          "Students read the Cratchit Christmas dinner scene from Stave 3. Teacher reads aloud and asks students to annotate as they listen: where does Dickens emphasise joy despite poverty? Where does he hint at hardship? Students then discuss in pairs: how does Dickens make the reader admire the Cratchit family? Take whole-class feedback. Teacher models a close-reading annotation: 'The word [x] suggests that the Cratchits find dignity in what they have -- Dickens is arguing that poverty does not diminish humanity.' Students then annotate two further quotations independently using this structure.",
        differentiation: {
          support:
            'Provide a printed extract with three quotations highlighted and one annotation completed as a model.',
          core: 'Students annotate the passage and identify two techniques with effects.',
          stretch:
            "Students write a sentence arguing whether Dickens sentimentalises or honestly represents the Cratchit family's poverty, using evidence to support their view.",
        },
        resources: [
          'Printed Cratchit Christmas scene extract',
          'Annotation frame (Quotation / Technique / Effect)',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: 'Ignorance and Want -- Allegorical Analysis',
        duration: '20 minutes',
        instructions:
          "Read aloud the passage in which the Ghost of Christmas Present reveals two emaciated children from beneath its robe: 'This boy is Ignorance. This girl is Want.' Teacher explains the concept of allegory -- a story or image that represents an abstract idea. Students discuss: what does Ignorance represent? What does Want represent? Why does Dickens make them children? Why does the Ghost say 'Beware them both, but most of all beware this boy'? Students write three analytical sentences exploring the symbolism. Teacher then explains the contextual link: Ignorance refers to the lack of education for the poor, which Dickens saw as a greater long-term danger even than material poverty. Students add a contextual sentence to their analysis.",
        differentiation: {
          support:
            "Provide the allegory definition and a sentence frame: 'The child Ignorance represents... Dickens chooses to present this as a child because...'",
          core: 'Students write three analytical sentences independently.',
          stretch:
            "Students consider why Dickens has the Ghost -- a figure of abundance and generosity -- carry children of deprivation. What does this juxtaposition imply about the relationship between wealth and poverty in Victorian society?",
        },
        resources: [
          'Printed Ignorance and Want passage',
          'Definition of allegory displayed on board',
          'Contextual note on Victorian education and ragged schools',
        ],
      },
    ],
    plenaryActivity: {
      title: "Dickens's Argument -- One Sentence",
      duration: '7 minutes',
      instructions:
        "Students write one sentence summarising Dickens's argument in Stave 3 about the causes of poverty. Sentence must: begin with 'Dickens argues that...', include one piece of textual evidence, and make one contextual reference. Teacher shares three examples and the class votes on which most effectively integrates argument, evidence, and context. Discuss what makes the strongest example work.",
      differentiation: {
        support:
          "Provide a sentence frame: 'Dickens argues that poverty is caused by [social/political factor], as shown when [evidence], which reflects his belief that [context].'",
        core: 'Students write independently.',
        stretch:
          "Students write two sentences: one summarising Dickens's argument about Want, one about Ignorance, then explain which he considers more dangerous and why.",
      },
    },
    homework:
      "Research the Victorian ragged school movement. Write a paragraph explaining what ragged schools were and how this context helps you understand why Dickens says 'Beware this boy' -- referring to Ignorance -- more than Want.",
    worksheetQuestions: [
      {
        question:
          "What does the appearance of the Ghost of Christmas Present suggest about Dickens's view of generosity and abundance?",
        lines: 4,
        modelAnswer:
          "The Ghost of Christmas Present appears as a giant, jolly figure surrounded by a cornucopia of food, drink, and festive decoration. This abundance is not hoarded but freely given -- Scrooge is invited to touch the ghost's robe and benefit from its generosity. Dickens presents the ghost as the embodiment of the Christmas spirit: open-handed, warm, and inclusive. This contrasts sharply with Scrooge's accumulated wealth, suggesting that true abundance comes from sharing rather than hoarding.",
        marks: 4,
      },
      {
        question:
          "Explain the allegorical meaning of the children Ignorance and Want. Why does the Ghost warn Scrooge to 'beware this boy' above all?",
        lines: 5,
        modelAnswer:
          "Ignorance and Want are allegorical figures representing the two great afflictions of the Victorian poor: lack of education and material deprivation. Dickens describes them as wretched, ragged children clinging beneath the Ghost's robe -- hidden by a society that pretends they do not exist. The Ghost warns that Ignorance is the greater danger because an uneducated population cannot improve its condition and becomes prey to 'Doom'. Dickens was a passionate supporter of ragged schools and believed that denial of education was the most catastrophic failure of Victorian society.",
        marks: 5,
      },
      {
        question:
          "How does Dickens use the Cratchit family to challenge the Victorian idea that the poor are poor because of their own moral failings?",
        lines: 5,
        modelAnswer:
          "The Cratchit family is presented as warm, loving, generous, and morally admirable despite their poverty. Bob earns barely enough to survive on, yet the family celebrates Christmas with joy and gratitude. By making the Cratchits so clearly virtuous, Dickens demolishes the Malthusian idea that poverty reflects character flaws. The family's poverty is explicitly linked to Scrooge's meanness -- Bob is underpaid by a wealthy employer. Dickens argues that poverty is a systemic, social condition, not a moral one, and that those who have wealth are responsible for those who do not.",
        marks: 5,
      },
      {
        question:
          "When Scrooge uses the Ghost's words about 'surplus population' against him, what is Dickens's point?",
        lines: 4,
        modelAnswer:
          "In Stave 1, Scrooge dismisses the poor as 'surplus population' -- a phrase derived from Malthus's economic theory that the poor were an inevitable and undesirable excess. When the Ghost turns this language back on Scrooge in Stave 3, asking whether Tiny Tim is also 'surplus population', Dickens forces Scrooge -- and the reader -- to confront the moral bankruptcy of applying economic abstraction to real human beings. The moment is one of the sharpest pieces of social satire in the novella.",
        marks: 4,
      },
      {
        question:
          "How does the structure of Stave 3 -- moving from celebration to the revelation of Ignorance and Want -- reinforce Dickens's argument?",
        lines: 4,
        modelAnswer:
          "Dickens structures Stave 3 as a movement from warmth and abundance (the Cratchit Christmas, Fred's party) to horror (Ignorance and Want). This juxtaposition is deliberate: by showing the reader the joy that generosity can create, Dickens then makes the revelation of the hidden children all the more shocking and shameful. The reader, made warm by the Cratchit scenes, is suddenly confronted with the reality that such warmth is being withheld from the poorest children in Victorian England -- a structural argument for social responsibility.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The Malthusian context is essential for understanding the 'surplus population' exchange. Spend time on this -- it recurs in essay questions and students who understand it will score higher on AO3.",
      "The Cratchit family can tip into sentimentality if not handled carefully. Encourage students to notice the hints of hardship Dickens includes (the small goose, the pudding anxiety) alongside the warmth.",
      "The children Ignorance and Want are sometimes mistaken for Scrooge's own children or random street children. Be explicit: they emerge from beneath the Ghost's robe, meaning they are hidden by the very abundance the wealthy enjoy.",
      'The structural movement from joy to horror in Stave 3 is a good teaching point about how structure itself creates argument. Students who can write about structure as a technique will access higher marks.',
    ],
    targetedSkills: [
      '9R.3 -- Interpreting symbolic and allegorical meaning',
      '9R.4 -- Analysing structural and language choices',
      '9R.6 -- Evaluating authorial intent and social commentary',
      '9W.3 -- Integrating context into analytical writing',
      '9W.4 -- Writing structured analytical paragraphs',
    ],
  },

  // ── Lesson 5: The Ghost of Christmas Yet to Come ──────────────────────────
  {
    id: 'y9t1-05',
    title: 'The Ghost of Christmas Yet to Come -- Fear and Change',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse how Dickens uses the Ghost of Christmas Yet to Come to create fear and urgency (9R.4)',
      "Explore how the vision of Scrooge's death functions as a moral warning (9R.3)",
      'Explain the role of fear as a catalyst for transformation in the novella (9R.6)',
      "Write analytically about Dickens's use of Gothic conventions in Stave 4 (9W.4)",
    ],
    successCriteria: [
      'I can describe the Ghost of Christmas Yet to Come and explain what its silence symbolises',
      "I can explain how reactions to Scrooge's death reveal the consequences of his behaviour",
      'I can analyse at least two Gothic features Dickens uses in Stave 4',
      'I can write a paragraph connecting the theme of fear to the possibility of redemption',
    ],
    keywords: [
      'Gothic',
      'foreboding',
      'mortality',
      'redemption',
      'dramatic irony',
      'foreshadowing',
      'catalyst',
      'silence',
      'transformation',
    ],
    starterActivity: {
      title: 'Gothic Conventions -- Quick Identification',
      duration: '7 minutes',
      instructions:
        "Display a list of ten features sometimes associated with Gothic fiction (darkness, silence, graves, supernatural figures, fear, decay, isolation, mystery, the uncanny, death). Ask students to tick the ones they expect to find in Stave 4 based on prior knowledge. Then read the opening description of the Ghost of Christmas Yet to Come aloud. Students check off which features they identify. Teacher introduces the idea that Dickens deliberately uses Gothic conventions in this Stave to create maximum psychological impact on Scrooge -- and on the reader.",
      differentiation: {
        support:
          'Provide definitions of the ten Gothic features on a card.',
        core: 'Students identify features independently before the class check.',
        stretch:
          "Students write a sentence predicting why Dickens shifts to Gothic conventions for the final spirit rather than the warmer, more festive register of Stave 3.",
      },
      resources: [
        'List of ten Gothic features displayed on board',
        'Gothic feature definition cards for support students',
        'Opening Ghost of Christmas Yet to Come passage displayed or printed',
      ],
    },
    mainActivities: [
      {
        title: "Reactions to Scrooge's Death -- Close Reading",
        duration: '22 minutes',
        instructions:
          "Students read the three scenes in which characters react to Scrooge's death: the businessmen who joke about attending his funeral only if lunch is provided, the charwoman and laundress who steal his belongings, and the Cratchits grieving -- but not for Scrooge. Students annotate each scene for: what the reaction reveals about how Scrooge was regarded; what Dickens wants the reader to feel; and what Scrooge himself must feel witnessing this. Teacher leads discussion: why does Dickens show us these reactions before revealing whose death it is? This dramatic irony ensures the reader has processed the full horror before Scrooge does. Students write one analytical sentence about each scene.",
        differentiation: {
          support:
            'Provide a guided annotation frame: What do the characters do/say? What does this reveal about their relationship with the dead person? What is Dickens saying about how we treat others?',
          core: 'Students annotate all three scenes independently.',
          stretch:
            "Students consider the structural effect of Dickens withholding the identity of the dead man until Scrooge sees his own gravestone -- what does this delayed revelation achieve narratively and morally?",
        },
        resources: [
          'Printed extracts: three reaction scenes from Stave 4',
          'Guided annotation frame for support students',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: "Scrooge's Promise -- Writing Analytically About Fear and Change",
        duration: '18 minutes',
        instructions:
          "Read aloud Scrooge's desperate promise to the Ghost: 'I will honour Christmas in my heart, and try to keep it all the year. I will live in the Past, the Present, and the Future. The Spirits of all three shall strive within me.' Students write an analytical paragraph in response to: 'How does Dickens use the Ghost of Christmas Yet to Come to bring about Scrooge\\'s transformation?' They must: identify at least one Gothic feature, analyse its effect, and explain how fear functions as the final catalyst for change. Teacher models the opening sentence. Peer assessment using success criteria, then revision.",
        differentiation: {
          support:
            "Provide a sentence frame: 'In Stave 4, Dickens uses [Gothic feature] to create a sense of [effect]. The word/phrase [x] suggests... This is significant because fear forces Scrooge to...'",
          core: 'Students write independently and complete peer assessment.',
          stretch:
            "Students consider whether a transformation driven by fear is as morally authentic as one driven by compassion -- does it matter why Scrooge changes, only that he does? Argue a position using evidence.",
        },
        resources: [
          "Scrooge's promise quotation displayed on board",
          'PEEC scaffold for support students',
          'Peer assessment prompt cards',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Most Important Spirit -- Debate and Vote',
      duration: '8 minutes',
      instructions:
        "Students hold a brief structured debate: which of the three spirits is most important to Scrooge's transformation -- Past, Present, or Yet to Come? Each student must argue for one spirit and give one piece of evidence. Class votes at the end. Teacher draws out that while students often choose the final spirit because it is most dramatic, there is a strong case that the past spirit is most important because it reveals why Scrooge became who he is. Emphasise that exam answers should acknowledge complexity rather than offering a single 'correct' answer.",
      differentiation: {
        support:
          'Provide a card listing one argument for each spirit to scaffold the debate.',
        core: 'Students argue and vote independently.',
        stretch:
          "Students argue that the three spirits only work as a complete sequence -- that none alone would have been sufficient -- and explain why Dickens structures the novella as three progressive visions.",
      },
    },
    homework:
      "Write a full analytical paragraph arguing which of the three spirits is most important to Scrooge's transformation. Use at least one quotation from each spirit's Stave and integrate one piece of contextual knowledge.",
    worksheetQuestions: [
      {
        question:
          'What does the silence of the Ghost of Christmas Yet to Come symbolise?',
        lines: 4,
        modelAnswer:
          "The Ghost of Christmas Yet to Come does not speak -- it only points. Its silence is deeply unsettling and suggests several things: the future is unknowable and cannot be argued with; death itself is silent and indifferent; and Scrooge's fate will be determined not by words but by actions. The ghost's silence also forces Scrooge -- and the reader -- to sit with the horror of each vision without comfort or explanation. Dickens uses this silence as a Gothic device to create maximum dread.",
        marks: 4,
      },
      {
        question:
          "How do the reactions of the businessmen to the death in Stave 4 reflect Dickens's social criticism?",
        lines: 4,
        modelAnswer:
          "The businessmen discuss the death casually and joke that they will only attend the funeral if lunch is provided. This callous response reflects Dickens's criticism of a commercial culture in which human relationships are valued only in terms of financial utility. The men's indifference mirrors Scrooge's own earlier attitude to the poor -- treating other people as economic units rather than human beings. Dickens uses this ironic reversal to show Scrooge what it looks and feels like to be regarded as surplus, the very word he used about the poor.",
        marks: 4,
      },
      {
        question:
          'What is dramatic irony? How does Dickens use it in Stave 4?',
        lines: 5,
        modelAnswer:
          "Dramatic irony occurs when the audience understands something that a character does not. In Stave 4, Dickens builds dramatic irony by showing Scrooge various reactions to a mysterious death before Scrooge realises the dead man is himself. The reader quickly suspects the truth, which makes watching Scrooge witness the theft of his belongings and the indifference of his acquaintances more painful -- we know what he does not yet know. When Scrooge finally sees his own name on the gravestone, the horror is intensified because we have been dreading it alongside him.",
        marks: 5,
      },
      {
        question:
          "Analyse the language Dickens uses in Scrooge's promise to the Ghost. What does it reveal about his transformation?",
        lines: 5,
        modelAnswer:
          "Scrooge's promise -- 'I will honour Christmas in my heart, and try to keep it all the year. I will live in the Past, the Present, and the Future' -- is structured as a series of short, emphatic statements that echo the structure of a solemn vow. The repetition of 'I will' suggests determined agency -- this is not a passive change but an active commitment. The reference to 'the Past, the Present, and the Future' explicitly unites all three spirits, suggesting that genuine transformation requires learning from memory, engaging with the present world, and accepting responsibility for the future. The urgency of the language conveys both fear and sincere moral awakening.",
        marks: 5,
      },
      {
        question:
          "Is Scrooge's transformation in Stave 4 convincing? Give reasons for your view using evidence.",
        lines: 5,
        modelAnswer:
          "Scrooge's transformation in Stave 4 is convincing because Dickens has carefully prepared for it across the previous three Staves. Scrooge has been shown his lost capacity for love (Past), his current isolation from human warmth (Present), and the ultimate consequence of his choices (Yet to Come). By the time he makes his vow, the reader has seen enough of his emotional responses -- his laughter at Fezziwig, his grief at his younger self, his terror at the gravestone -- to believe he is genuinely changed rather than merely frightened. The fear of death may be the trigger, but the emotional groundwork of the earlier Staves provides the moral substance of the transformation.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The dramatic irony of the 'dead man' scenes is very effective when the Stave is read aloud in sequence. If possible, read the three reaction scenes straight through before students begin annotation -- the cumulative effect is more powerful.",
      "Students sometimes argue that a fear-driven transformation is less 'real' than one driven by compassion. This is a rich discussion: Dickens seems to suggest that the fear is real precisely because Scrooge genuinely cares, beneath his defences, about how he is remembered.",
      "The Ghost of Christmas Yet to Come's silence is often overlooked in favour of what it shows. Draw attention to it as a deliberate technique -- absence of voice is itself a powerful narrative choice.",
      "The debate activity at the end is deliberately open-ended. Resist providing a 'correct' answer -- the purpose is to model the kind of nuanced, evidence-based argument that achieves high marks in GCSE essays.",
    ],
    targetedSkills: [
      '9R.3 -- Identifying and interpreting Gothic conventions',
      '9R.4 -- Analysing effects of structural and language choices',
      '9R.6 -- Evaluating authorial intent',
      '9W.4 -- Writing analytical paragraphs with embedded quotations',
      '9S.2 -- Using subject terminology accurately',
    ],
  },

  // ── Lesson 6: Scrooge's Transformation ───────────────────────────────────
  {
    id: 'y9t1-06',
    title: "Scrooge's Transformation -- How and Why Does He Change?",
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Trace the arc of Scrooge's transformation across all five Staves (9R.2)",
      'Analyse how Dickens uses the structure of the novella to create a convincing change (9R.4)',
      "Evaluate the extent to which Scrooge's change is driven by fear, compassion, or both (9R.6)",
      "Write a structured argument about the nature and significance of Scrooge's transformation (9W.4)",
    ],
    successCriteria: [
      "I can identify key moments in each Stave that mark a stage in Scrooge's transformation",
      'I can explain how the structure of the novella supports the theme of redemption',
      "I can evaluate whether Scrooge's transformation is primarily driven by fear or genuine compassion",
      "I can write a paragraph that develops an argument about Scrooge's change using evidence from multiple Staves",
    ],
    keywords: [
      'transformation',
      'redemption',
      'structure',
      'catharsis',
      'arc',
      'cyclic',
      'resolution',
      'moral awakening',
      'repentance',
    ],
    starterActivity: {
      title: "Scrooge's Journey -- Emotion Graph",
      duration: '8 minutes',
      instructions:
        "Provide students with a pre-drawn graph: x-axis labelled Stave 1 to Stave 5, y-axis labelled from 'Closed and cold' at the bottom to 'Open and warm' at the top. Students plot Scrooge's emotional state at the end of each Stave and draw a line connecting the points. They then mark the single moment they consider the most significant turning point and be ready to explain why. Take two or three responses and note that different students identify different moments -- this is legitimate, and examiners value a convincing argued position over a 'correct' answer.",
      differentiation: {
        support:
          'Provide a list of five quotations (one per Stave) to help students decide where to plot Scrooge.',
        core: 'Students plot and annotate independently.',
        stretch:
          "Students write two sentences arguing whether the transformation is a smooth progression or arrives in a sudden final leap -- and what that choice implies about how Dickens views change.",
      },
      resources: [
        'Pre-drawn emotion graph (one per student)',
        'Quotation list for support students',
        'Mini whiteboards for sharing turning-point moments',
      ],
    },
    mainActivities: [
      {
        title: "Stave 5 -- Close Reading of Scrooge's New Self",
        duration: '22 minutes',
        instructions:
          "Read aloud the opening of Stave 5: Scrooge waking on Christmas morning, his laughter, his buying the prize turkey, his encounter with the charity collectors, his visit to Fred's party, and his behaviour with Bob Cratchit on the day after Christmas. Students annotate the passage for: (a) language that contrasts sharply with Stave 1; (b) moments that echo the visions of the three spirits; (c) evidence that the change is genuine rather than merely performative. Take whole-class feedback. Teacher models: 'The repetition of laughter in Stave 5 directly reverses the silence and coldness of Stave 1, suggesting that Scrooge has recovered not just generosity but the capacity for joy.' Students annotate two further quotations independently.",
        differentiation: {
          support:
            'Provide a printed extract from Stave 5 with six quotations highlighted and two annotations completed as models.',
          core: 'Students annotate independently and identify three contrasts with Stave 1.',
          stretch:
            "Students trace a specific image or motif (e.g. cold/warmth, laughter/silence, isolation/connection) across Stave 1 and Stave 5, writing a sentence about what this structural echo achieves.",
        },
        resources: [
          'Printed Stave 5 extract for annotation',
          'Stave 1 extract for comparison',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: "Essay Preparation -- Arguing About Transformation",
        duration: '18 minutes',
        instructions:
          "Students plan and begin a response to: 'How does Dickens present Scrooge\\'s transformation in A Christmas Carol?' Teacher models how to structure an argument that moves beyond retelling the plot: the opening sentence must make a clear claim; each paragraph must develop a point about how (technique) and why (authorial purpose); evidence must be drawn from multiple Staves. Students complete a four-point plan (one claim per paragraph) and write the opening paragraph in full. Peer assessment: partner identifies whether the opening makes a clear argument or simply describes what happens.",
        differentiation: {
          support:
            "Provide a four-point paragraph plan with the first claim completed: 'Dickens initially presents Scrooge as a man so consumed by avarice that he has lost all capacity for human warmth...'",
          core: 'Students complete a four-point plan and write the opening paragraph independently.',
          stretch:
            "Students plan a response that addresses the counter-argument: is Scrooge's transformation too sudden and too complete to be convincing? Use evidence to argue a nuanced position.",
        },
        resources: [
          'Four-point essay plan template',
          'Essay question displayed on board',
          'Peer assessment prompt cards',
        ],
      },
    ],
    plenaryActivity: {
      title: "One Word -- Scrooge's Change in a Sentence",
      duration: '7 minutes',
      instructions:
        "Each student writes one word that captures the essence of Scrooge's transformation (e.g. redemption, awakening, repentance, recovery, rebirth). They then write one sentence explaining why they chose that word using evidence from the text. Teacher collects and reads out five or six responses, comparing the word choices. Discussion: does the word 'redemption' (a religious term) capture what Dickens intended, or is a secular word like 'awakening' more appropriate? Connect to the question of whether Dickens had a specifically Christian moral argument in mind.",
      differentiation: {
        support:
          'Provide a list of six possible words to choose from.',
        core: 'Students choose their own word and write the sentence independently.',
        stretch:
          "Students write two sentences: one arguing for a religious interpretation of Scrooge's change, one arguing for a secular social interpretation, and a final sentence indicating which they find more convincing.",
      },
    },
    homework:
      "Complete the essay paragraph begun in class. Write two further paragraphs developing your argument about Scrooge's transformation. Each paragraph should use at least one embedded quotation and one piece of integrated contextual knowledge.",
    worksheetQuestions: [
      {
        question:
          "How does Dickens use the structure of A Christmas Carol to present Scrooge's transformation as believable?",
        lines: 5,
        modelAnswer:
          "Dickens structures the novella across five Staves that trace a careful emotional arc. The first Stave establishes Scrooge at his worst; Staves two, three, and four progressively reveal his past, his present responsibilities, and his future consequences; the fifth Stave shows the resolution. This five-part structure mimics the classical dramatic arc and ensures that the transformation feels earned rather than arbitrary. Dickens also uses each spirit to address a different dimension of Scrooge's failure -- love lost, human responsibility ignored, death -- so that by Stave 5, every aspect of his character has been challenged and changed.",
        marks: 5,
      },
      {
        question:
          'Identify and explain two moments in Stave 5 that directly echo or reverse scenes from Stave 1.',
        lines: 5,
        modelAnswer:
          "In Stave 1, Scrooge dismisses the charity collectors with contempt; in Stave 5, he approaches them with generosity and delight, donating a large sum. This reversal demonstrates that his change is not simply emotional but translates into concrete social action. In Stave 1, Bob Cratchit quietly warms himself at the dying coal fire, afraid to ask for more; in Stave 5, Scrooge promises Bob a raise and more coal. Dickens uses these deliberate echoes to show that Scrooge has internalised the lessons of each spirit rather than simply experiencing a mood change.",
        marks: 5,
      },
      {
        question:
          "To what extent is Scrooge's transformation driven by fear rather than genuine compassion? Argue a position using evidence.",
        lines: 6,
        modelAnswer:
          "While fear -- particularly the terror of dying unmourned and alone -- is the immediate catalyst for Scrooge's transformation in Stave 4, it would be reductive to argue that fear alone is responsible. Dickens has carefully prepared for genuine compassion through Staves 2 and 3: Scrooge weeps at the sight of his lonely younger self, laughs with delight at Fezziwig's party, and is moved by Tiny Tim's vulnerability. These emotional responses precede the Gothic horror of Stave 4 and suggest that the capacity for compassion was always within him, suppressed rather than destroyed. Fear unlocks the door, but it is compassion that walks through it.",
        marks: 6,
      },
      {
        question:
          "Why does Dickens give the novella a happy ending? What is the risk of this choice?",
        lines: 4,
        modelAnswer:
          "Dickens gives the novella a joyful ending because his purpose is didactic -- he wants to argue that change is possible and that generosity leads to human happiness. A tragic ending would undermine this message. However, the risk is that the happy ending can seem too easy, too rapid, or too complete to be psychologically convincing. Dickens manages this risk by grounding Stave 5 in specific, concrete acts of generosity rather than abstract goodwill, and by maintaining a comic, celebratory tone that signals the novella's genre as a moral fable rather than a realist novel.",
        marks: 4,
      },
      {
        question:
          "What does Scrooge's transformation suggest about Dickens's view of human nature?",
        lines: 4,
        modelAnswer:
          "Scrooge's transformation suggests that Dickens held an essentially optimistic view of human nature: that even the most hardened and selfish individual retains the capacity for compassion and change. This is a fundamentally Christian idea (redemption is available to all) but also a humanist one -- that selfishness is learned and circumstantial rather than innate. Dickens appears to believe that if people could be made to truly see the consequences of their actions and to feel genuine empathy for those they harm, they would choose to act differently. The novella is therefore as much a call to social empathy as a ghost story.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "The emotion graph starter is an excellent formative assessment tool. Students who plot a smooth line from cold to warm have understood the arc; those who plot a sudden leap at Stave 4 may be undervaluing the emotional work of Staves 2 and 3.",
      "The fear vs compassion debate (worksheet question 3) is the kind of nuanced question that appears at the top of GCSE mark schemes. Prepare students to argue a position while acknowledging the counter-argument.",
      "Stave 5 is shorter than the others and is sometimes neglected in teaching. It repays close reading -- the specific actions Dickens describes (the turkey, the charity donation, the raise for Bob) are carefully chosen to reverse each of the failures depicted in Stave 1.",
      "The question of whether the happy ending is 'earned' or too convenient is worth exploring. Students who can engage with this critically -- arguing that Dickens prioritises moral message over realism -- are demonstrating higher-order thinking.",
    ],
    targetedSkills: [
      '9R.2 -- Tracing character development across a whole text',
      '9R.4 -- Analysing structural choices and their effects',
      '9R.6 -- Evaluating authorial purpose and moral argument',
      '9W.4 -- Writing structured analytical arguments',
      '9W.5 -- Developing an extended argument with evidence from multiple locations in the text',
    ],
  },

  // ── Lesson 7: Secondary Characters ───────────────────────────────────────
  {
    id: 'y9t1-07',
    title: 'Secondary Characters -- Fred, Bob Cratchit, Tiny Tim',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      "Analyse how Dickens uses Fred, Bob Cratchit, and Tiny Tim to develop theme and argument (9R.4)",
      "Explain the function of secondary characters in relation to Scrooge's transformation (9R.2)",
      'Identify the specific techniques Dickens uses to present each character (9R.3)',
      "Write analytically about how a secondary character contributes to the novella's moral message (9W.4)",
    ],
    successCriteria: [
      "I can explain the function of Fred in the novella's moral argument",
      'I can analyse how Dickens presents Bob Cratchit as a victim of economic injustice',
      'I can explain what Tiny Tim symbolises and why he is important to the story',
      'I can write a paragraph arguing how a secondary character develops a theme',
    ],
    keywords: [
      'foil',
      'symbol',
      'innocence',
      'generosity',
      'exploitation',
      'sentimentality',
      'archetype',
      'pathos',
      'function',
    ],
    starterActivity: {
      title: 'Character Function -- Why Do They Exist?',
      duration: '7 minutes',
      instructions:
        "Write three names on the board: Fred, Bob Cratchit, Tiny Tim. Ask students: what is the function of each character? Not what happens to them, but why Dickens includes them -- what do they contribute to the novella's argument? Students write one sentence per character in two minutes, then share. Teacher introduces the concept of 'character function' -- the idea that in a short novella every character exists to serve a specific purpose. Ask: which of the three do students find most powerful, and why?",
      differentiation: {
        support:
          "Provide a prompt card: 'This character exists to show... / contrast with... / represent... / develop the theme of...'",
        core: 'Students write independently and justify their view.',
        stretch:
          "Students consider whether any of these characters could be accused of being stereotypes or archetypes rather than fully realised individuals -- and whether that matters given the novella's didactic purpose.",
      },
      resources: [
        'Three names displayed on board',
        'Function prompt card for support students',
        'Mini whiteboards or exercise books',
      ],
    },
    mainActivities: [
      {
        title: 'Character Carousel -- Close Reading in Groups',
        duration: '22 minutes',
        instructions:
          "Divide the class into three groups, each assigned one character: Fred, Bob, or Tiny Tim. Each group is given three key quotations for their character. They must: identify the technique in each quotation, explain the effect, and write one sentence on the character's function in the novella's argument. Groups then rotate to the next character's quotation set and add their annotations, building a collaborative analysis. After all groups have visited all characters, teacher draws together the key ideas: Fred as embodiment of Christmas spirit and foil to Scrooge; Bob as representative of the exploited working poor; Tiny Tim as symbol of innocent suffering and the stakes of social failure.",
        differentiation: {
          support:
            'Provide the annotation frames with technique labels already identified -- students only need to explain the effect.',
          core: 'Students annotate all three sets independently.',
          stretch:
            "Students write a sentence for each character comparing their function to a character in another text they have studied -- how does Dickens's use of character function compare to another writer's approach?",
        },
        resources: [
          'Three quotation sets (one per character, three quotations each)',
          'Annotation frame (Quotation / Technique / Effect / Function)',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: 'Analytical Writing -- Secondary Character Paragraph',
        duration: '18 minutes',
        instructions:
          "Students choose one secondary character and write an analytical paragraph in response to: 'How does Dickens use [Fred / Bob Cratchit / Tiny Tim] to develop the moral message of A Christmas Carol?' They must: make a clear argument in their opening sentence, embed at least one quotation, name at least one technique, explain the effect, and include a contextual link. Teacher models a strong opening sentence for Fred: 'Dickens presents Fred as the embodiment of the Christmas spirit Scrooge has rejected -- a foil whose persistent warmth argues that generosity is a choice available to everyone, regardless of wealth.' Peer assessment follows, then revision.",
        differentiation: {
          support:
            "Provide a PEEC scaffold with the opening sentence modelled and a sentence frame for the evidence: 'When Dickens writes [quotation], the word/phrase [x] suggests... In the context of Victorian England, this is significant because...'",
          core: 'Students write independently and complete peer assessment.',
          stretch:
            "Students write two paragraphs -- one on their chosen character and one briefly comparing their function to one of the other secondary characters, arguing which is more important to the novella's overall argument.",
        },
        resources: [
          'PEEC scaffold for support students',
          'Model opening sentence displayed on board',
          'Peer assessment prompt cards',
        ],
      },
    ],
    plenaryActivity: {
      title: "Which Secondary Character Matters Most? -- Vote and Justify",
      duration: '8 minutes',
      instructions:
        "Students vote by show of hands: which secondary character is most important to the novella's moral argument -- Fred, Bob, or Tiny Tim? Teacher records votes. Ask three students (one for each character) to give their best single argument. Class evaluates: which argument was most convincingly supported by evidence? Teacher draws out the key exam skill: the 'best' answer is not the one that picks the right character but the one that makes the strongest argument with the best evidence.",
      differentiation: {
        support:
          'Provide a prompt card listing one argument for each character to scaffold the justification.',
        core: 'Students argue independently.',
        stretch:
          "Students argue that asking which character 'matters most' is the wrong question -- all three are necessary to the argument, and the novella requires their combined presence. Can they make this case convincingly?",
      },
    },
    homework:
      "Write a full analytical paragraph about the character of Tiny Tim. Your paragraph must: explain what Tiny Tim symbolises, use at least one embedded quotation, and make an explicit connection to Dickens's argument about the treatment of the poor in Victorian England.",
    worksheetQuestions: [
      {
        question:
          'How does Dickens use Fred as a foil to Scrooge in A Christmas Carol?',
        lines: 5,
        modelAnswer:
          "Fred functions as a direct foil to Scrooge -- a character whose qualities highlight Scrooge's failings by contrast. Where Scrooge is cold, isolated, and contemptuous of Christmas, Fred is warm, sociable, and passionately committed to its spirit. Fred's famous speech in Stave 1 -- that Christmas is 'the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely' -- articulates the novella's central moral argument. Dickens uses Fred to show that generosity is not a matter of wealth but of character, undercutting Scrooge's claim that he cannot afford to be generous.",
        marks: 5,
      },
      {
        question:
          'What does Bob Cratchit reveal about the relationship between employers and employees in Victorian England?',
        lines: 4,
        modelAnswer:
          "Bob Cratchit is entirely dependent on Scrooge's goodwill and has no power to improve his situation. He earns fifteen shillings a week -- barely enough to feed his family -- and is afraid to stoke the fire in case Scrooge objects. Dickens uses this relationship to argue that the Victorian economic system placed workers at the mercy of employers who had no legal obligation to treat them fairly. Bob's dignified cheerfulness in the face of this exploitation highlights the injustice of the system rather than excusing it.",
        marks: 4,
      },
      {
        question:
          'What does Tiny Tim symbolise in A Christmas Carol? Why does Dickens include the phrase "God bless us, every one"?',
        lines: 5,
        modelAnswer:
          "Tiny Tim symbolises the innocent suffering of the Victorian poor -- children whose lives are cut short not by individual failing but by systemic economic neglect. His disability and frailty, which could be treated with better nutrition and medical care that poverty denies him, make him the clearest embodiment of the human cost of Scrooge's (and Victorian society's) indifference. His phrase 'God bless us, every one' is both inclusive and ironic: a child with every reason for bitterness offers a blessing to all, including those who have failed him. Dickens places this phrase at the novella's very end to ensure it resonates as the moral conclusion.",
        marks: 5,
      },
      {
        question:
          "Could any of these secondary characters be accused of being too idealised? Is this a weakness in Dickens's writing?",
        lines: 4,
        modelAnswer:
          "Fred, Bob, and Tiny Tim are all presented in an idealised way -- they are unrealistically patient, cheerful, and virtuous given their circumstances. This could be seen as a weakness, as it risks sentimentality and fails to represent the anger and despair that poverty often generates. However, Dickens's didactic purpose requires characters who embody the virtues he wants to promote: generosity, dignity, and hope. In the context of a moral fable rather than a realist novel, idealisation is a deliberate choice that serves the argument rather than a failure of craft.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use the secondary characters to show what Scrooge has been missing?",
        lines: 4,
        modelAnswer:
          "Each secondary character embodies something Scrooge has sacrificed: Fred represents the family warmth he rejected when he turned away his nephew; Bob represents the human loyalty and dignity he ignores in his employee; Tiny Tim represents the innocence and generosity of spirit that Scrooge has suppressed in himself. Dickens uses these characters as mirrors, showing Scrooge -- and the reader -- not just what poverty looks like from the outside, but what Scrooge himself has lost by choosing isolation and avarice over human connection.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'The character carousel works well when each group has roughly equal numbers. If the class is small, run it as a whole-class rotation with one character per portion of the lesson rather than simultaneous group work.',
      'Bob Cratchit is often underrated as a character by students who focus entirely on Tiny Tim. Emphasise that Bob\'s relationship with Scrooge is the economic heart of the novella\'s argument.',
      'The accusation of sentimentality (worksheet question 4) is a sophisticated point worth raising with higher-attaining students. Dickens was criticised in his own time for excessive sentimentality around child poverty -- engaging with this gives students a more complex view of the text.',
      "Fred's speech about Christmas in Stave 1 is one of the most quotable passages in the novella for essay purposes. Ensure all students can locate it and understand its function as a thesis statement for the novella's moral argument.",
    ],
    targetedSkills: [
      '9R.2 -- Understanding character function and development',
      '9R.3 -- Identifying language techniques and their effects',
      '9R.4 -- Analysing how writers present characters',
      '9R.6 -- Evaluating authorial purpose',
      '9W.4 -- Writing structured analytical paragraphs',
    ],
  },

  // ── Lesson 8: Dickens's Language and Narrative Voice ─────────────────────
  {
    id: 'y9t1-08',
    title: "Dickens's Language and Narrative Voice -- Techniques and Effects",
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse a range of language techniques Dickens uses across A Christmas Carol (9R.3)',
      "Explain how Dickens's intrusive narrative voice shapes the reader's response (9R.4)",
      "Evaluate how specific language choices contribute to the novella's moral argument (9R.6)",
      'Use subject terminology accurately in analytical writing (9S.2)',
    ],
    successCriteria: [
      'I can identify and explain the effect of at least four language techniques in A Christmas Carol',
      "I can explain what is meant by 'intrusive narrator' and give an example from the novella",
      'I can use at least three pieces of subject terminology accurately in my written analysis',
      'I can write a paragraph that moves from technique to effect to authorial purpose',
    ],
    keywords: [
      'intrusive narrator',
      'personification',
      'simile',
      'metaphor',
      'sibilance',
      'hyperbole',
      'direct address',
      'tone',
      'register',
    ],
    starterActivity: {
      title: 'Technique Sorting Activity',
      duration: '8 minutes',
      instructions:
        "Provide students with twelve quotation cards from A Christmas Carol and twelve technique label cards (metaphor, simile, personification, accumulation, hyperbole, direct address, sibilance, listing, exclamation, rhetorical question, irony, juxtaposition). Students work in pairs to match each quotation to its technique. Teacher reveals answers and discusses any contested matches -- some quotations use more than one technique, and this ambiguity is productive. Introduce the key point: naming a technique is only the first step; explaining why Dickens chose it is the analytical task.",
      differentiation: {
        support:
          'Reduce the matching task to eight cards and provide definitions on the back of each technique card.',
        core: 'Students match all twelve independently before comparing with another pair.',
        stretch:
          'Students write one sentence for each matched pair explaining the effect of the technique rather than simply naming it.',
      },
      resources: [
        'Twelve quotation cards (laminated if possible, for reuse)',
        'Twelve technique label cards',
        'Definitions sheet for support students',
      ],
    },
    mainActivities: [
      {
        title: "Analysing Dickens's Narrative Voice",
        duration: '20 minutes',
        instructions:
          "Direct students to three short passages where Dickens's narrator speaks directly to the reader or makes an editorial comment: (1) 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!'; (2) 'You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail'; (3) the narrator's aside about Scrooge being 'as good a friend, as good a master, and as good a man, as the good old city knew' at the close of the novella. Students annotate each passage for: what the narrator says, how they say it (technique), and why (effect on reader / authorial purpose). Take whole-class feedback. Teacher models: 'The direct address in passage 1 draws the reader into the narrator\\'s moral position, making us feel part of a shared judgement rather than passive observers -- Dickens is building a community of moral sympathy.'",
        differentiation: {
          support:
            'Provide a printed sheet with the three passages and a partially completed annotation for passage 1.',
          core: 'Students annotate all three passages independently.',
          stretch:
            "Students consider what kind of narrator Dickens creates -- is the narrative voice entirely reliable? Does Dickens ever complicate the narrator's authority? Where might the narrator's enthusiasm for Scrooge's transformation be seen as too convenient?",
        },
        resources: [
          'Three passage extracts printed or displayed',
          'Annotation frame for each passage',
          'Class copies of A Christmas Carol',
        ],
      },
      {
        title: 'Language Analysis Paragraph -- From Technique to Purpose',
        duration: '20 minutes',
        instructions:
          "Students write an analytical paragraph in response to: 'How does Dickens use language to present one of the following: Scrooge\\'s character, the spirits, or the theme of generosity?' Teacher models a paragraph that demonstrates the full analytical chain: quotation -- technique -- immediate effect -- wider purpose -- contextual link. Emphasis on moving beyond 'this technique creates an image in the reader\\'s mind' to something specific: what image, and why does Dickens want that image? Peer assessment with written feedback; students identify one strong analytical move and one place where the analysis stops short of purpose.",
        differentiation: {
          support:
            "Provide a paragraph scaffold: 'Dickens uses [technique] when he writes [quotation]. The word/phrase [x] creates the impression that... This is significant because Dickens is arguing that... In the context of Victorian England...'",
          core: 'Students write independently and complete peer assessment.',
          stretch:
            "Students write two linked paragraphs that analyse how Dickens uses contrasting language registers (e.g. festive warmth vs Gothic horror) to structure the reader's moral journey across the novella.",
        },
        resources: [
          'Paragraph scaffold for support students',
          'Peer assessment prompt cards',
          'Success criteria on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Most Powerful Technique -- Justify Your Choice',
      duration: '7 minutes',
      instructions:
        "Students write the name of the single technique they consider most central to the success of A Christmas Carol, with two sentences justifying their choice using evidence. Teacher collects responses and reads three or four aloud. Class discusses: is any one technique more important than others, or does the novella's power come from the combination? This models the kind of evaluative thinking required in high-band exam responses.",
      differentiation: {
        support:
          'Provide a list of five techniques to choose from rather than requiring a free recall.',
        core: 'Students choose and justify independently.',
        stretch:
          "Students write a sentence arguing that it is impossible to identify a single 'most important' technique because Dickens's language works through accumulation and interaction of techniques -- and explain what this tells us about how to approach language analysis in essays.",
      },
    },
    homework:
      'Choose three quotations from A Christmas Carol that you have not analysed in class. For each quotation, write three sentences: name the technique, explain its immediate effect, and connect it to Dickens\'s wider purpose or the Victorian context.',
    worksheetQuestions: [
      {
        question:
          'What is an intrusive narrator? How does Dickens use this narrative technique in A Christmas Carol?',
        lines: 5,
        modelAnswer:
          "An intrusive narrator is one who steps outside the story to comment directly on events, characters, or the reader's expected responses. Dickens uses an intrusive narrator throughout A Christmas Carol -- most strikingly in the opening pages, where the narrator addresses the reader directly ('You will therefore permit me to repeat, emphatically...') and editorialises about Scrooge's character ('Oh! But he was a tight-fisted hand at the grindstone, Scrooge!'). This technique positions the reader within the narrator's moral framework, ensuring that Dickens's judgements about wealth, poverty, and generosity are absorbed as shared common sense rather than argued positions.",
        marks: 5,
      },
      {
        question:
          "Analyse the language Dickens uses in the following quotation: 'No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty.'",
        lines: 5,
        modelAnswer:
          "Dickens uses personification to compare Scrooge to elemental forces of cold weather -- wind, snow, and rain. The triple structure creates accumulation, building the impression of Scrooge's cold character through three successive comparisons. The phrase 'less open to entreaty' applies human language (entreaty means appeal or plea) to rain and then implies that Scrooge is even less responsive to human appeal than falling rain -- a deeply damning comparison. The extended weather metaphor reinforces the cold imagery associated with Scrooge throughout Stave 1, suggesting that his miserliness is as natural, inevitable, and indifferent as the weather itself.",
        marks: 5,
      },
      {
        question:
          'How does Dickens use hyperbole and humour in A Christmas Carol? What effect does this have on the reader?',
        lines: 4,
        modelAnswer:
          "Dickens frequently employs comic hyperbole to satirise Scrooge's excesses and to maintain the novella's tone as a festive fable rather than a bleak social tract. Describing Scrooge as a man the 'blindman\\'s dog' would avoid creates an image so extreme it tips from condemnation into comedy -- even the world's most indifferent creature has the sense to avoid him. This humour allows readers to simultaneously condemn Scrooge and enjoy the entertainment of his exaggerated villainy, making the moral medicine of the novella more palatable. Dickens understood that humour increases a text's reach and persuasive power.",
        marks: 4,
      },
      {
        question:
          'Explain how Dickens uses juxtaposition as a structural and language technique in the novella.',
        lines: 4,
        modelAnswer:
          "Juxtaposition -- the placement of contrasting ideas side by side -- is central to how A Christmas Carol makes its moral argument. Dickens juxtaposes Scrooge's cold isolation with the warmth of Fred's and the Cratchits' Christmases; the abundance of the Ghost of Christmas Present with the misery of Ignorance and Want; and the Scrooge of Stave 1 with the Scrooge of Stave 5. These contrasts are not accidental but deliberate: by placing opposites in close proximity, Dickens forces the reader to make the moral comparison themselves, arriving at the intended conclusion through the experience of the narrative rather than being told what to think.",
        marks: 4,
      },
      {
        question:
          'Why is it not enough to simply identify a language technique in analytical writing? What must you do next?',
        lines: 4,
        modelAnswer:
          "Identifying a technique -- such as labelling a phrase as a metaphor -- only demonstrates recognition. Analytical writing requires the student to explain the effect of the technique on the reader (what impression does it create? what emotion does it produce?) and then to connect this effect to the writer's purpose (why did Dickens choose this technique? what argument is he making here? how does this connect to his wider social message or the Victorian context?). The chain from quotation to technique to effect to purpose is the minimum required for analytical writing that achieves high marks.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'The sorting activity generates good discussion when quotations use multiple techniques. Resist resolving these quickly -- productive ambiguity teaches students that literary analysis involves interpretation, not identification of a single correct answer.',
      'The intrusive narrator is one of the most distinctive features of A Christmas Carol and is consistently underexplored by students. Invest time here -- students who can write about narrative voice as a deliberate technique will access higher band marks.',
      'The model paragraph in the second activity should demonstrate the full chain explicitly: quotation, technique name, specific effect (not just "creates an image"), and authorial purpose. Students often stop at the third step and need to be pushed to the fourth.',
      'The homework task is a gentle scaffolded version of independent close reading. Use the three submitted quotations in the next lesson to demonstrate student-selected examples alongside teacher-selected ones.',
    ],
    targetedSkills: [
      '9R.3 -- Identifying and interpreting language techniques',
      '9R.4 -- Analysing effects of language choices',
      '9R.6 -- Evaluating authorial purpose',
      '9S.2 -- Using subject terminology accurately',
      '9W.4 -- Writing analytical paragraphs from technique to purpose',
    ],
  },

  // ── Lesson 9: Essay Planning ──────────────────────────────────────────────
  {
    id: 'y9t1-09',
    title: 'Essay Planning -- Integrating Context (AO1, AO2, AO3)',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Understand what Assessment Objectives AO1, AO2, and AO3 require in a literature essay (9W.3)',
      'Plan a structured essay response to a question about A Christmas Carol (9W.5)',
      'Practise writing an introduction and one developed analytical paragraph that integrates AO1, AO2, and AO3 (9W.4)',
      "Evaluate the quality of own and peers' planning and writing against the assessment criteria (9W.6)",
    ],
    successCriteria: [
      'I can explain in my own words what AO1, AO2, and AO3 require',
      'I can write a five-point essay plan for a question on A Christmas Carol',
      'I can write an introduction that makes a clear argument and signals the structure of my response',
      'I can write one analytical paragraph that addresses AO1, AO2, and AO3 in an integrated way',
    ],
    keywords: [
      'AO1',
      'AO2',
      'AO3',
      'thesis',
      'argument',
      'plan',
      'integrated analysis',
      'counter-argument',
      'structured response',
    ],
    starterActivity: {
      title: 'AO1, AO2, AO3 -- What Are They?',
      duration: '8 minutes',
      instructions:
        "Display the three Assessment Objectives on the board with plain-English translations: AO1 -- 'You respond to and write about the text with a clear argument'; AO2 -- 'You analyse how the writer uses language and structure'; AO3 -- 'You connect the text to its context'. Give students a sample paragraph from a weak response and a stronger response to the same question. Working in pairs, students identify: which AO each sentence in the stronger response addresses, and what is missing from the weaker response. Take whole-class feedback. Emphasise: the key to a high mark is that AO1, AO2, and AO3 are woven together, not addressed in separate paragraphs.",
      differentiation: {
        support:
          'Provide the AO definitions on a card and pre-colour-code the stronger response (AO1 in one colour, AO2 in another, AO3 in a third).',
        core: 'Students identify AOs in both responses independently.',
        stretch:
          "Students write one sentence explaining what specifically makes the stronger response more effective -- what does it do that the weaker response does not?",
      },
      resources: [
        'AO1, AO2, AO3 definitions displayed on board',
        'Sample weak and strong paragraphs printed or displayed',
        'Colour-coded version for support students',
      ],
    },
    mainActivities: [
      {
        title: 'Essay Planning -- Five-Point Plan',
        duration: '20 minutes',
        instructions:
          "Display the practice question: 'How does Dickens use Scrooge to present the theme of redemption in A Christmas Carol?' Students plan their response using a five-point structure: (1) Introduction -- thesis statement (what is your overall argument?); (2) Paragraph 1 -- Scrooge's presentation in Stave 1 (AO1 + AO2 + AO3); (3) Paragraph 2 -- a moment from the spirit visions that develops the theme; (4) Paragraph 3 -- Stave 5 and the resolution; (5) Conclusion -- return to the thesis, evaluating Dickens's success. Teacher models how to write a thesis statement: not a description of the plot but a clear argument about what Dickens achieves. Students complete their five-point plan in note form, then compare plans with a partner and identify any gaps or repetitions.",
        differentiation: {
          support:
            "Provide a five-point planning template with the first point partially completed: 'Introduction: Dickens presents Scrooge as... and uses his transformation to argue that...'",
          core: 'Students complete the plan independently and review with a partner.',
          stretch:
            "Students add a 'counter-argument' point to at least one of their paragraphs: what is the strongest objection to their argument, and how can they address it within the paragraph?",
        },
        resources: [
          'Essay question displayed on board',
          'Five-point plan template for support students',
          'Timer visible to class',
        ],
      },
      {
        title: 'Introduction and Opening Paragraph -- Timed Writing',
        duration: '20 minutes',
        instructions:
          "Students write their introduction (two to three sentences: thesis, signpost of structure, one contextual anchor) and their first full analytical paragraph in timed conditions -- 20 minutes. Teacher circulates and gives targeted verbal feedback: 'Is your first sentence an argument or a description?' 'Where is your AO2 in this paragraph?' 'Where does context appear?' After 20 minutes, students peer-assess using the three AO criteria and write one specific suggestion for improvement. Students then revise their introduction in light of feedback.",
        differentiation: {
          support:
            "Provide a sentence frame for the introduction: 'Dickens presents Scrooge as... in order to argue that... This essay will explore how...'",
          core: 'Students write independently and complete peer assessment.',
          stretch:
            'Students aim to write a two-paragraph response in the time, then evaluate whether their second paragraph develops the argument of the first or simply adds a new point.',
        },
        resources: [
          'Introduction sentence frame for support students',
          'AO checklist for peer assessment (AO1: clear argument? AO2: technique analysed? AO3: context integrated?)',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Thesis Statement Gallery',
      duration: '7 minutes',
      instructions:
        "Students write their thesis statement on a strip of paper or mini whiteboard. Teacher collects and displays five or six. Class evaluates each: Does it make an argument? Does it mention the writer? Does it address the question directly? Does it avoid retelling the plot? Students identify the two strongest and explain what makes them effective. Teacher draws out the key principle: a strong thesis statement commits to an argument and sets up the entire essay's direction.",
      differentiation: {
        support:
          'Provide three example thesis statements (one weak, one acceptable, one strong) as a benchmark for evaluating the gallery examples.',
        core: 'Students evaluate independently and justify their choices.',
        stretch:
          "Students write a second thesis statement that takes the opposite position and argue which is easier to sustain with evidence from the novella -- and why.",
      },
    },
    homework:
      "Complete the full essay plan begun in class. Write two more analytical paragraphs (Paragraphs 2 and 3 from your plan), each integrating AO1, AO2, and AO3. Bring your full plan and two paragraphs to the next lesson for peer review before the timed assessment.",
    worksheetQuestions: [
      {
        question:
          'In your own words, explain what AO1, AO2, and AO3 require in a GCSE English Literature essay.',
        lines: 5,
        modelAnswer:
          "AO1 requires students to respond to the text with a clear personal argument -- not just describing what happens but making a case for what the text means or what the writer achieves. AO2 requires students to analyse how the writer uses specific language, structure, and form to create meaning -- naming techniques and explaining their effects. AO3 requires students to connect the text to its context -- the historical, social, or biographical background that shaped the writer's choices and the text's meaning. High marks come from integrating all three within each paragraph rather than addressing them separately.",
        marks: 5,
      },
      {
        question:
          'Write a thesis statement for the following question: "How does Dickens present the theme of poverty in A Christmas Carol?"',
        lines: 4,
        modelAnswer:
          "A strong thesis statement might read: 'Dickens presents poverty not as a moral failing but as a systemic injustice, using the contrasting fates of Scrooge and the Cratchit family to argue that those with wealth have a moral obligation to those without it -- an argument rooted in his own experience of hardship and his outrage at the Poor Law of 1834.' This commits to an argument, names the writer's purpose, identifies key textual evidence, and anchors the claim in context.",
        marks: 4,
      },
      {
        question:
          "Rewrite the following weak opening sentence to make it a stronger analytical claim: 'In A Christmas Carol, Scrooge is a mean old man who doesn't like Christmas.'",
        lines: 4,
        modelAnswer:
          "A stronger version might read: 'Dickens presents Scrooge in Stave 1 as the embodiment of Victorian misanthropy -- a man whose rejection of Christmas is less a personal quirk than a deliberate philosophical position, and whose transformation Dickens uses to argue that even the most hardened individual retains the capacity for moral awakening.' This replaces description with argument, names the writer, places the claim in the text's structure, and signals the essay's direction.",
        marks: 4,
      },
      {
        question:
          'Why should AO1, AO2, and AO3 be integrated within each paragraph rather than addressed in separate sections?',
        lines: 4,
        modelAnswer:
          "Addressing the Assessment Objectives in separate sections produces an essay that feels fragmented and mechanical -- a context section, followed by a language section, followed by an argument section. Integration produces a more sophisticated analytical response because it mirrors how literary meaning actually works: context shapes language choices; language choices create meaning; meaning contributes to argument. When a student writes 'Dickens uses [technique] to argue [AO1 point] because in Victorian England [AO3 context]', they demonstrate that they understand how all three elements are interconnected rather than independent boxes to tick.",
        marks: 4,
      },
      {
        question:
          'What makes a good essay conclusion? Write a sample conclusion for an essay on redemption in A Christmas Carol.',
        lines: 5,
        modelAnswer:
          "A good conclusion returns to the thesis, draws together the essay's arguments without simply repeating them, and makes an evaluative comment about Dickens's success in achieving his purpose. A sample conclusion: 'Dickens presents redemption in A Christmas Carol not as a simple change of mood but as a complete moral and social reorientation -- one earned through confrontation with memory, human suffering, and mortality. By structuring the novella around five Staves that trace this progression systematically, Dickens creates a moral fable whose optimism feels earned rather than sentimental. In arguing that even Scrooge can change, Dickens makes his most urgent claim: that Victorian society itself -- if it could be made to see clearly -- might change too.'",
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson works best if students have already written at least one analytical paragraph earlier in the unit. If not, spend more time on the modelling in the second activity and reduce the planning time.',
      'The thesis statement gallery is a high-impact activity that repays the time investment. Seeing multiple thesis statements at once -- and evaluating them comparatively -- builds the skill faster than writing one in isolation.',
      'Resist the urge to correct planning documents extensively -- the goal is for students to identify their own gaps through peer review. Your role in circulation is to ask questions rather than provide answers.',
      "The counter-argument extension for stretch students is a genuinely challenging task. Model it briefly: 'Some might argue that Scrooge\\'s transformation is too sudden -- but Dickens anticipates this by...' This prepares students for the highest band responses.",
    ],
    targetedSkills: [
      '9W.3 -- Planning and structuring analytical writing',
      '9W.4 -- Writing integrated analytical paragraphs',
      '9W.5 -- Developing extended written arguments',
      "9W.6 -- Evaluating and improving own and peers' writing",
      '9R.6 -- Evaluating authorial purpose across a whole text',
    ],
  },

  // ── Lesson 10: Timed Essay Assessment ────────────────────────────────────
  {
    id: 'y9t1-10',
    title: 'Timed Essay Assessment',
    text: 'A Christmas Carol',
    board: 'Universal',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Demonstrate understanding of A Christmas Carol through an independently written analytical essay (9W.5)',
      'Apply knowledge of language techniques, character, theme, and context to a focused essay question (9R.6)',
      'Manage time effectively in a timed writing situation (9W.6)',
      'Produce a structured response with a clear thesis, developed paragraphs, and a conclusion (9W.4)',
    ],
    successCriteria: [
      'I have written an introduction with a clear thesis statement that directly addresses the question',
      'I have written at least three analytical paragraphs, each integrating AO1, AO2, and AO3',
      'I have embedded at least two quotations and named at least two techniques',
      'I have written a conclusion that returns to my thesis and makes an evaluative comment',
    ],
    keywords: [
      'thesis',
      'argument',
      'evidence',
      'analysis',
      'context',
      'technique',
      'structure',
      'evaluation',
      'assessment',
    ],
    starterActivity: {
      title: 'Pre-Assessment Warm-Up -- Three Key Quotations',
      duration: '8 minutes',
      instructions:
        "Before assessment conditions begin, give students 8 minutes to write down three quotations they plan to use in their essay -- one about character, one about language or technique, one connecting to context. They also write one sentence reminding themselves of their thesis. This pre-writing warm-up activates memory and reduces blank-page anxiety. Teacher collects no work from this stage -- it is purely a private warm-up. After 8 minutes, ask students to put their notes face down and begin the timed essay. Reassure students that the warm-up notes are for their eyes only and will not be assessed.",
      differentiation: {
        support:
          'Allow support students to use their essay plan from Lesson 9 and a vocabulary/quotation reference card agreed in advance.',
        core: 'Students complete the warm-up independently from memory.',
        stretch:
          'Students write a fourth quotation for their warm-up: one that could be used for a counter-argument -- something that complicates their thesis rather than simply supporting it.',
      },
      resources: [
        'Blank paper or exercise books for warm-up',
        'Vocabulary and quotation reference cards for support students (agreed in advance)',
        'Essay question sealed in envelope or kept hidden until assessment begins',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Essay -- Part 1: Introduction and First Paragraph',
        duration: '20 minutes',
        instructions:
          "Display the essay question: 'How does Dickens present the idea that people have a responsibility to help those less fortunate than themselves in A Christmas Carol?' Students write in timed, silent conditions. In the first 20 minutes they should aim to complete: (a) an introduction with a clear thesis statement; (b) their first full analytical paragraph integrating AO1, AO2, and AO3. Teacher circulates silently. At 20 minutes, give a quiet time check -- do not stop writing.",
        differentiation: {
          support:
            "Support students may use an agreed quotation card. A prompt card is available if requested: 'Have you written a thesis? Have you embedded a quotation? Have you named a technique? Have you connected to context?'",
          core: 'Students write independently in silence.',
          stretch:
            'Students aim to complete an introduction and two full paragraphs by the 20-minute mark, leaving more time for a counter-argument paragraph.',
        },
        resources: [
          'Essay question displayed on board',
          'Quotation reference cards for support students',
          'Timer visible to class',
        ],
      },
      {
        title: 'Timed Essay -- Part 2: Development and Conclusion',
        duration: '27 minutes',
        instructions:
          "Students continue writing their essay in silence for a further 27 minutes. They should aim to complete two or three more analytical paragraphs and a conclusion. At the 15-minute mark within this block (42 minutes total), give a quiet reminder that students should be working towards their conclusion. At the 25-minute mark (52 minutes total), give a final warning to complete the essay. Students should use the final 3 minutes to re-read and make any corrections. Teacher continues to circulate silently.",
        differentiation: {
          support:
            'At the 15-minute mark, teacher may quietly direct support students to move to their conclusion if they have not yet done so, to ensure all students complete a full response.',
          core: 'Students manage their own time.',
          stretch:
            'Stretch students should aim to include a counter-argument paragraph that acknowledges a complexity in the novella before returning to their overall thesis.',
        },
        resources: [
          'Timer with visible countdown',
          'Essay question displayed throughout',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Post-Assessment Reflection',
      duration: '5 minutes',
      instructions:
        "Students complete a brief self-assessment slip: (1) What is your thesis? Write it in one sentence. (2) Which paragraph do you feel strongest about? Why? (3) What one thing would you do differently if you had more time? Teacher collects essays and self-assessment slips together. The self-assessment is used when returning marked work to prompt students to engage with their own reflection before receiving teacher feedback. Do not share or discuss essay content as a class at this stage -- this avoids disadvantaging students who have written less.",
      differentiation: {
        support:
          'Provide sentence frames for the self-assessment slip.',
        core: 'Students complete independently.',
        stretch:
          'Students write a fourth reflection: what counter-argument did they include, and how effectively did they address it?',
      },
    },
    homework:
      "No written homework this week. Before the next lesson, re-read your essay and annotate it with three observations: one thing you did well, one place where you could have pushed your analysis further, and one quotation you wish you had included. Bring these annotations to the feedback lesson.",
    worksheetQuestions: [
      {
        question:
          "Write a strong thesis statement for the following question: 'How does Dickens present the idea that people have a responsibility to help those less fortunate than themselves in A Christmas Carol?'",
        lines: 4,
        modelAnswer:
          "A strong thesis statement might read: 'Dickens presents social responsibility not as an optional virtue but as a moral imperative, using Scrooge's transformation from indifferent miser to generous benefactor to argue that those who possess wealth are directly responsible for the suffering of those who do not -- a message made urgent by the conditions of Victorian England he witnessed first-hand.' This commits to a clear argument, names the writer, identifies the key mechanism (Scrooge's transformation), and anchors the claim in context.",
        marks: 4,
      },
      {
        question:
          'Write one analytical paragraph in response to the essay question above. Your paragraph should integrate AO1, AO2, and AO3.',
        lines: 8,
        modelAnswer:
          "Dickens presents the theme of social responsibility most forcefully through Scrooge's callous response to the charity collectors in Stave 1. When asked for a donation for the poor, Scrooge asks whether the prisons and workhouses are 'still in operation', implying that existing institutions are sufficient. The rhetorical question is sharply ironic -- Dickens deploys it to expose the logical bankruptcy of Scrooge's position, which relies on abstraction (institutions) rather than acknowledging the individual human beings before him. In the context of the Poor Law Amendment Act of 1834, which deliberately made workhouses harsh enough to deter the desperate, Scrooge's endorsement of 'the system' is not merely indifferent but actively cruel. Dickens is arguing that social responsibility cannot be discharged by pointing to punitive institutions -- it requires personal, direct engagement with the suffering of others.",
        marks: 8,
      },
      {
        question:
          'How would you structure a counter-argument paragraph in this essay? What would you argue, and how would you return to your thesis?',
        lines: 5,
        modelAnswer:
          "A counter-argument paragraph might argue that Dickens's presentation of social responsibility is undermined by the novella's reliance on individual conversion rather than systemic change -- Scrooge gives generously, but the economic system that starves the Cratchit family remains intact. However, the paragraph would return to the thesis by arguing that Dickens was working within the genre of moral fable: his purpose was to change the hearts of individual wealthy readers rather than to propose legislative reform. The novella targets the conscience of its middle-class audience, arguing that systemic change begins with individual moral awakening.",
        marks: 5,
      },
      {
        question:
          'What should a strong essay conclusion achieve? Write a sample conclusion for the essay question above.',
        lines: 5,
        modelAnswer:
          "A strong conclusion returns to the thesis, synthesises the essay's main arguments without repeating them, and makes an evaluative comment about Dickens's success. A sample conclusion: 'Through Scrooge's transformation, the allegorical figures of Ignorance and Want, and the warmth of the Cratchit family, Dickens constructs a sustained argument that social responsibility is not a matter of charity but of justice. Written at a moment when the Poor Law was at its most punitive, A Christmas Carol is a work of deliberate moral intervention -- and its enduring power lies in Dickens\\'s ability to make that intervention feel not like a lecture but like a gift.'",
        marks: 5,
      },
      {
        question:
          'How can you manage your time effectively in a 45-minute timed essay? Give three specific strategies.',
        lines: 4,
        modelAnswer:
          "Three effective time-management strategies are: (1) Spend the first 3 to 5 minutes planning -- a brief five-point plan prevents the essay from losing direction mid-response and is more efficient than writing without a plan. (2) Divide the remaining time into roughly equal portions for each paragraph, with a reminder to yourself at the midpoint to assess whether you are on track to complete. (3) Prioritise finishing over perfection -- a complete essay with three solid paragraphs and a conclusion will score more highly than an excellent two-paragraph response that stops mid-argument. Always leave 2 minutes at the end to re-read and correct.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Set up the room in exam conditions before students arrive: desks separated if possible, question hidden until the warm-up ends, timer displayed. The physical environment matters for building students' confidence in formal assessment settings.",
      'The 8-minute warm-up significantly reduces blank-page paralysis and improves output quality. It is not cheating -- it is good metacognitive preparation. Allow it even in formal mock conditions.',
      'Circulate during the assessment but do not read over students\' shoulders -- this creates anxiety. Position yourself at the front or back of the room and make yourself available without being intrusive.',
      'When marking, use the self-assessment slips to personalise feedback: respond directly to the student\'s own reflection before adding your own observations. This makes written feedback far more likely to be read and acted upon.',
    ],
    targetedSkills: [
      '9W.4 -- Writing structured analytical paragraphs',
      '9W.5 -- Producing an extended, structured written argument',
      "9W.6 -- Evaluating and improving written responses",
      '9R.6 -- Synthesising analysis of character, theme, language, and context',
      '9S.2 -- Using subject terminology accurately under timed conditions',
    ],
  },
];
