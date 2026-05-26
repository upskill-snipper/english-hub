// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

export interface LessonActivity {
  title: string
  duration: string
  instructions: string
  differentiation?: { support: string; core: string; stretch: string }
  resources?: string[]
}

export interface WorksheetQuestion {
  question: string
  lines: number
  modelAnswer?: string
  marks?: number
}

export interface LessonPlan {
  id: string
  title: string
  text: string
  board: string
  yearGroup: string
  duration: string
  objectives: string[]
  successCriteria: string[]
  keywords: string[]
  starterActivity: LessonActivity
  mainActivities: LessonActivity[]
  plenaryActivity: LessonActivity
  homework?: string
  worksheetQuestions: WorksheetQuestion[]
  teacherNotes: string[]
  targetedSkills: string[]
}

// ─── Lesson 1: Introduction to Macbeth - Context, Plot & Key Themes ─────────

const lesson1: LessonPlan = {
  id: 'macbeth-01-intro-context',
  title: 'Introduction to Macbeth: Context, Plot & Key Themes',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the Jacobean historical context in which Shakespeare wrote Macbeth.',
    'Identify the key plot events across all five acts of the play.',
    'Explore the central themes of ambition, guilt, the supernatural, and kingship.',
    "Link contextual factors such as the Gunpowder Plot and Divine Right of Kings to Shakespeare's authorial intentions.",
  ],
  successCriteria: [
    'I can explain at least three contextual factors relevant to Macbeth and connect them to the text.',
    'I can summarise the plot of Macbeth in chronological order, identifying the key turning points.',
    'I can identify and define at least four major themes and link each to a character or event.',
    'I can use the term "authorial intention" accurately in discussion or writing.',
  ],
  keywords: [
    'Jacobean',
    'Divine Right of Kings',
    'regicide',
    'Great Chain of Being',
    'Gunpowder Plot',
    'tragedy',
    'hamartia',
    'authorial intention',
  ],
  starterActivity: {
    title: 'True or False: Jacobean England',
    duration: '8 minutes',
    instructions:
      'Display ten true/false statements about Jacobean beliefs and society on the board (e.g., "King James I wrote a book about witchcraft", "Women could own property", "Killing a king was considered a sin against God"). Students discuss in pairs and record answers on mini-whiteboards. Reveal all statements are true, then discuss: why would Shakespeare write a play about regicide in 1606?',
    differentiation: {
      support:
        'Provide a glossary of key terms (regicide, Jacobean, Divine Right) alongside the statements.',
      core: 'Students justify each answer with a reason before feedback.',
      stretch:
        'Students predict how each contextual fact might influence the plot or characters of a tragedy.',
    },
    resources: [
      'True/False statement slide',
      'Mini-whiteboards',
      'Key terms glossary (support tier)',
    ],
  },
  mainActivities: [
    {
      title: 'Jacobean Context Information Carousel',
      duration: '18 minutes',
      instructions:
        'Set up four stations around the room: (1) King James I and the Gunpowder Plot, (2) The Divine Right of Kings and the Great Chain of Being, (3) Witchcraft and the Supernatural in 1606, (4) Gender Roles and Patriarchy. Each station has an information card and two retrieval questions. Students rotate every 4-5 minutes, completing a note-taking grid. After the carousel, teacher consolidates: Shakespeare wrote Macbeth to explore what happens when the natural order is violated.',
      differentiation: {
        support: 'Provide a partially completed grid with sentence starters for each station.',
        core: 'Students complete the grid independently, adding their own inferences about how each factor connects to the play.',
        stretch:
          "Students add a column evaluating which contextual factor is most important to understanding Shakespeare's authorial intentions.",
      },
      resources: [
        'Station information cards (x4)',
        'Note-taking grid worksheet',
        'Timer for rotations',
      ],
    },
    {
      title: 'Plot Overview and Theme Mapping',
      duration: '22 minutes',
      instructions:
        'Teacher provides a one-page plot summary of all five acts (or students watch a 5-minute animated plot summary). Students then complete a theme-tracking table: for each theme (Ambition, Guilt, Supernatural, Kingship, Appearance vs Reality), they must identify at least one key event and one character linked to that theme. In pairs, students rank the themes from most to least important, justifying their top choice in a short paragraph. Share two or three examples under the visualiser.',
      differentiation: {
        support:
          'Provide a pre-filled theme table with one example per theme; students add a second example for each.',
        core: 'Students complete the theme table independently and write a ranking justification paragraph.',
        stretch:
          'Students explain how two themes interconnect (e.g., how ambition leads to guilt) using specific plot events as evidence.',
      },
      resources: [
        'Plot summary handout or animated summary video',
        'Theme-tracking table worksheet',
        'Paragraph frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Context to Text',
    duration: '7 minutes',
    instructions:
      'Students complete an exit ticket: "Explain one way Jacobean context is important to understanding Macbeth. Use a specific detail from the plot." Collect and use responses to inform groupings for the next lesson.',
    differentiation: {
      support:
        'Sentence starter provided: "Jacobean audiences would have been shocked by... because..."',
      core: 'Full written response expected with a specific contextual link.',
      stretch:
        "Students write a second sentence evaluating Shakespeare's authorial intention in presenting this contextual idea.",
    },
  },
  homework:
    "Research one additional fact about King James I's relationship with Shakespeare and write a paragraph explaining how it might have influenced the writing of Macbeth.",
  worksheetQuestions: [
    {
      question:
        'What is the "Divine Right of Kings" and why is it important to understanding Macbeth?',
      lines: 5,
      modelAnswer:
        'The Divine Right of Kings was the Jacobean belief that monarchs were chosen by God to rule and that their authority was sacred. Killing a king (regicide) was therefore not just a political crime but a sin against God. This is central to Macbeth because when Macbeth murders Duncan, he is violating the divine order, which explains the chaos and guilt that follow. Shakespeare uses this to warn his audience - particularly King James I - about the dangers of ambition and treason.',
      marks: 4,
    },
    {
      question:
        'Explain the concept of the "Great Chain of Being" and how it connects to the events of the play.',
      lines: 5,
      modelAnswer:
        'The Great Chain of Being was the Jacobean belief in a strict hierarchy: God → King → Nobles → Men → Women → Animals. Disrupting this chain was believed to cause chaos in the natural world. When Macbeth murders Duncan, he breaks the chain, and Shakespeare shows the consequences through unnatural events: horses eating each other, darkness during the day, and storms. This reflects the Jacobean belief that regicide would upset the entire natural order.',
      marks: 4,
    },
    {
      question: 'Why did Shakespeare write Macbeth in 1606? What was his authorial intention?',
      lines: 5,
      modelAnswer:
        "Shakespeare wrote Macbeth in 1606, just one year after the Gunpowder Plot, in which Catholic conspirators attempted to blow up Parliament and kill King James I. The play can be read as a warning about the dangers of treason and regicide. Shakespeare's authorial intention was likely to flatter James I - who was also his patron - by showing that those who kill kings are punished, while also exploring the psychological consequences of unchecked ambition.",
      marks: 4,
    },
    {
      question:
        'Identify two key themes in Macbeth and explain how each connects to a specific character or event.',
      lines: 6,
      modelAnswer:
        "Ambition is a central theme, most clearly embodied by Macbeth, whose desire to become king leads him to murder Duncan. His ambition is described as \"vaulting\" - it drives him forward but ultimately destroys him. Guilt is another key theme, seen in both Macbeth's hallucination of the dagger and Banquo's ghost, and in Lady Macbeth's sleepwalking and obsessive hand-washing in Act 5. Shakespeare suggests that guilt is the inevitable consequence of immoral ambition.",
      marks: 4,
    },
    {
      question:
        'Why might a Jacobean audience have responded differently to Macbeth than a modern audience?',
      lines: 5,
      modelAnswer:
        "A Jacobean audience would have genuinely believed in witchcraft, the Divine Right of Kings, and the Great Chain of Being, so the supernatural elements and the horror of regicide would have felt much more real and threatening. They would have seen Macbeth's downfall as God's punishment for violating the natural order. A modern audience, by contrast, might focus more on the psychological aspects of guilt and ambition, or read the play as a political commentary on power and corruption.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson assumes no prior knowledge of the play. Use the starter to gauge existing understanding.',
    'Station cards for the carousel should be laminated for reuse. Ensure readability at different levels.',
    'If using an animated plot summary, the BBC Bitesize or Mr Bruff versions work well and are exam-board aligned.',
    'Collect exit tickets to identify students who need additional context support before moving into close text analysis.',
    'Emphasise from the outset that AO3 (context) must be integrated into analysis, not bolted on as a separate paragraph.',
  ],
  targetedSkills: [
    'AO3: Context',
    'Reading comprehension',
    'Note-taking',
    'Inference',
    'Thematic analysis',
  ],
}

// ─── Lesson 2: Macbeth's Ambition - Act 1 Analysis ──────────────────────────

const lesson2: LessonPlan = {
  id: 'macbeth-02-ambition-act1',
  title: "Macbeth's Ambition: Act 1 Analysis",
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Shakespeare presents Macbeth's ambition in Act 1, Scenes 3 and 7.",
    "Explore the significance of Macbeth's reaction to the witches' prophecy.",
    'Examine the "vaulting ambition" soliloquy and its dramatic function.',
    'Evaluate whether Macbeth is presented as inherently ambitious or corrupted by external forces.',
  ],
  successCriteria: [
    "I can analyse at least two quotations from Act 1 that reveal Macbeth's ambition.",
    'I can explain the significance of Macbeth\'s aside "If chance will have me king" (Act 1.3).',
    'I can write an analytical paragraph on Macbeth\'s "vaulting ambition" soliloquy using PEE structure.',
    "I can discuss whether Macbeth's ambition is self-generated or externally provoked.",
  ],
  keywords: [
    'ambition',
    'soliloquy',
    'aside',
    'hamartia',
    'tragic flaw',
    'vaulting ambition',
    'prophecy',
    'dramatic irony',
  ],
  starterActivity: {
    title: 'Ambition Spectrum',
    duration: '7 minutes',
    instructions:
      'Display the question: "Is ambition always a positive quality?" Students physically position themselves on a spectrum line across the room (Strongly Agree to Strongly Disagree). Teacher interviews three or four students from different positions. Then reveal: in Jacobean England, excessive ambition was considered dangerous and sinful - it disrupted the Great Chain of Being. Link to the concept of hamartia (tragic flaw).',
    differentiation: {
      support:
        'Provide a sentence starter for verbal responses: "I think ambition is... because..."',
      core: 'Students explain their position with a real-world or literary example.',
      stretch:
        'Students consider how the definition of "acceptable" ambition might differ between Jacobean and modern audiences.',
    },
    resources: ['Spectrum labels (Agree/Disagree)', 'Hamartia definition slide'],
  },
  mainActivities: [
    {
      title: "Act 1, Scene 3: The Prophecy and Macbeth's Reaction",
      duration: '20 minutes',
      instructions:
        'Read Act 1, Scene 3 from "All hail, Macbeth" to "If chance will have me king, why, chance may crown me / Without my stir." Students annotate the extract, focusing on: (1) Macbeth\'s physical reaction - "why do you start and seem to fear / Things that do sound so fair?" (Banquo), (2) The aside - what does it reveal about his inner thoughts?, (3) The word "stir" - what does it suggest about his moral state? Model one annotation on the board. Students write a PEE paragraph answering: "How does Shakespeare present Macbeth\'s ambition in Act 1, Scene 3?"',
      differentiation: {
        support:
          'Provide a pre-annotated extract with two devices identified. PEE frame with sentence starters.',
        core: 'Independent annotation and a full PEE paragraph with embedded quotations.',
        stretch:
          "Write a second paragraph evaluating whether Macbeth's reaction suggests pre-existing ambition or a new temptation.",
      },
      resources: ['Act 1 Scene 3 extract (printed)', 'PEE paragraph frame', 'Annotation guide'],
    },
    {
      title: 'Act 1, Scene 7: "Vaulting Ambition" Soliloquy Analysis',
      duration: '22 minutes',
      instructions:
        'Read Macbeth\'s soliloquy from "If it were done when \'tis done" to "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on the other." Discuss: what reasons does Macbeth give for NOT killing Duncan? (He is his kinsman, his host, a good king.) What is the ONLY reason he gives FOR killing him? (Ambition.) Students create a two-column table: "Reasons Against" vs "Reasons For" and annotate the metaphor of "vaulting ambition" - a horse rider jumping too high and falling. In groups, discuss: what does this soliloquy reveal about Macbeth\'s character? Students then write a paragraph analysing the significance of the phrase "vaulting ambition".',
      differentiation: {
        support:
          'Provide a modern English translation alongside the original. Two-column table partially completed.',
        core: "Students complete the analysis independently with close attention to Shakespeare's metaphor.",
        stretch:
          "Students compare this soliloquy to the earlier aside in Act 1.3 - how has Macbeth's attitude to ambition changed? What has caused the shift?",
      },
      resources: [
        'Act 1 Scene 7 extract (printed)',
        'Modern translation (support tier)',
        'Two-column analysis grid',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Big Question: Is Macbeth Already Ambitious?',
    duration: '8 minutes',
    instructions:
      'Class debate: "Macbeth\'s ambition already existed before the witches - they simply awoke it." Students vote with a show of hands, then the teacher selects three students from each side to justify their position using textual evidence. Teacher summarises both positions and introduces the idea that this ambiguity is deliberate on Shakespeare\'s part.',
    differentiation: {
      support: 'Display two key quotations on the board to help students form their argument.',
      core: 'Students must reference a specific quotation in their verbal response.',
      stretch:
        "Students consider what Shakespeare's authorial intention might be in leaving this ambiguous.",
    },
  },
  homework:
    'Learn the quotation "I have no spur to prick the sides of my intent, but only vaulting ambition" and write a paragraph explaining its meaning, the effect of the metaphor, and what it reveals about Macbeth\'s character.',
  worksheetQuestions: [
    {
      question:
        "What is a soliloquy and why is Macbeth's soliloquy in Act 1, Scene 7 dramatically significant?",
      lines: 5,
      modelAnswer:
        'A soliloquy is a speech delivered by a character alone on stage, revealing their inner thoughts to the audience. Macbeth\'s soliloquy in Act 1.7 is significant because it shows his internal conflict - he lists multiple reasons not to kill Duncan but admits his only motivation is "vaulting ambition." This creates dramatic tension because the audience sees Macbeth wavering, which makes Lady Macbeth\'s subsequent persuasion even more powerful.',
      marks: 4,
    },
    {
      question:
        'Explain the effect of the metaphor "vaulting ambition, which o\'erleaps itself and falls on the other."',
      lines: 5,
      modelAnswer:
        'The metaphor compares Macbeth\'s ambition to a horse rider who jumps too ambitiously and falls on the other side. "Vaulting" suggests excessive, uncontrolled ambition that overreaches. The image of falling foreshadows Macbeth\'s eventual downfall - his ambition will ultimately destroy him. Shakespeare uses this to warn the audience that unchecked ambition leads to self-destruction, reflecting the Jacobean belief that disrupting the natural order invites disaster.',
      marks: 4,
    },
    {
      question: 'What reasons does Macbeth give against killing Duncan in Act 1, Scene 7?',
      lines: 5,
      modelAnswer:
        'Macbeth lists several reasons: Duncan is his kinsman (family), his king (so killing him would be regicide), and his guest ("he\'s here in double trust"). He also acknowledges that Duncan is a virtuous and well-loved king whose murder would provoke outrage. Despite all these reasons, Macbeth admits he has no justification except his own ambition, which reveals that he recognises the immorality of his plan even as he is drawn towards it.',
      marks: 4,
    },
    {
      question:
        'How does Macbeth\'s aside in Act 1, Scene 3 ("If chance will have me king") reveal his state of mind?',
      lines: 4,
      modelAnswer:
        'The aside reveals that Macbeth is already contemplating the idea of becoming king, but he hopes it will happen without him having to act - "without my stir." The word "stir" suggests he is aware that taking action would mean something violent or immoral. The aside shows that ambition has already taken root in his mind, even though he tries to convince himself he can be passive. This is the first sign of his internal conflict.',
      marks: 3,
    },
    {
      question:
        "Do you think Macbeth was ambitious before the witches' prophecy, or did they create his ambition? Use evidence from Act 1 to support your answer.",
      lines: 6,
      modelAnswer:
        'There is evidence for both interpretations. Banquo notes that Macbeth "starts" at the prophecy, which suggests the idea of kingship excites or frightens him - possibly because it echoes his own secret desires. However, Macbeth initially says "If chance will have me king," suggesting he will leave it to fate. It is only after Lady Macbeth\'s persuasion that he commits to action. Shakespeare deliberately leaves this ambiguous, perhaps suggesting that ambition is a latent quality that external forces - the witches and Lady Macbeth - bring to the surface.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The spectrum activity works best if students physically move - it energises the start of the lesson and creates talking points.',
    'When annotating the soliloquy, model the difference between identifying a technique and analysing its effect - many students stop at identification.',
    'The "Reasons Against vs Reasons For" table is a powerful exam skill: students often need to track an argument across a speech.',
    'Emphasise that AQA examiners reward students who discuss alternative interpretations - the debate plenary introduces this skill.',
    'The stretch comparison between Act 1.3 and Act 1.7 builds towards the kind of "whole text" thinking required for Grade 8/9.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context',
    'Analytical writing (PEE)',
    'Evaluative thinking',
  ],
}

// ─── Lesson 3: Lady Macbeth - Power, Manipulation & Gender ──────────────────

const lesson3: LessonPlan = {
  id: 'macbeth-03-lady-macbeth-power',
  title: 'Lady Macbeth: Power, Manipulation & Gender',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shakespeare presents Lady Macbeth as a powerful and transgressive figure in Act 1.',
    'Explore the significance of the "unsex me here" soliloquy (Act 1.5) in relation to Jacobean gender roles.',
    "Examine Lady Macbeth's manipulation techniques in Act 1, Scene 7.",
    "Evaluate Shakespeare's authorial intention in presenting a woman who defies patriarchal expectations.",
  ],
  successCriteria: [
    'I can analyse at least two quotations from Lady Macbeth\'s "unsex me here" soliloquy.',
    'I can explain how Lady Macbeth manipulates Macbeth using specific persuasion techniques.',
    "I can link Lady Macbeth's behaviour to Jacobean attitudes towards women and gender.",
    'I can write an evaluative response considering different interpretations of Lady Macbeth.',
  ],
  keywords: [
    'patriarchy',
    'transgression',
    'soliloquy',
    'imperative verbs',
    'emasculation',
    'manipulation',
    'gender roles',
    'subversion',
  ],
  starterActivity: {
    title: 'What Were Women Expected to Be?',
    duration: '7 minutes',
    instructions:
      'Display two columns: "Jacobean Ideal Woman" and "Lady Macbeth." Students brainstorm qualities for column 1 based on prior knowledge (gentle, obedient, pious, maternal, silent in public). Leave column 2 blank. After reading the "unsex me here" soliloquy, students will return to complete column 2. Discuss: why would a Jacobean audience find a woman who defied these expectations deeply unsettling?',
    differentiation: {
      support:
        'Provide a word bank of adjectives for column 1 (gentle, submissive, nurturing, pious, modest).',
      core: 'Students brainstorm independently and add a brief explanation for each quality.',
      stretch:
        'Students consider which modern expectations of women have changed and which have persisted since the Jacobean era.',
    },
    resources: ['Two-column comparison slide', 'Word bank (support tier)'],
  },
  mainActivities: [
    {
      title: '"Unsex Me Here": Soliloquy Close Analysis (Act 1.5)',
      duration: '22 minutes',
      instructions:
        'Read Lady Macbeth\'s soliloquy from "The raven himself is hoarse" to "Hold, hold!" aloud. Students annotate a printed copy focusing on: (1) "Unsex me here" - what does she want to remove and why? (2) "Fill me from the crown to the toe top-full of direst cruelty" - the imperative verbs and invocation of dark spirits, (3) "Come to my woman\'s breasts / And take my milk for gall" - the rejection of femininity and nurturing. Model one annotation. Students write a PEE paragraph answering: "How does Shakespeare present Lady Macbeth as a transgressive figure in her soliloquy?" Then return to the starter table and complete column 2.',
      differentiation: {
        support:
          'Provide a pre-annotated version with two techniques identified. PEE frame with sentence starters.',
        core: 'Independent annotation with a full PEE paragraph embedding at least two quotations.',
        stretch:
          'Students evaluate whether Lady Macbeth genuinely rejects femininity or is performing a role she cannot sustain, using the soliloquy as evidence.',
      },
      resources: [
        'Act 1 Scene 5 soliloquy extract (printed)',
        'Annotation guide',
        'PEE paragraph frame',
      ],
    },
    {
      title: "Lady Macbeth's Manipulation: Act 1, Scene 7",
      duration: '20 minutes',
      instructions:
        'Read Act 1, Scene 7 from "Was the hope drunk" to "screw your courage to the sticking-place." In groups of three, students identify Lady Macbeth\'s persuasion techniques: (1) Questioning his masculinity - "When you durst do it, then you were a man", (2) Emotional blackmail - the baby-dashing image, (3) Providing a practical plan - framing the guards. Students label each technique on the extract and then rank them by effectiveness. Class discussion: which technique is most powerful and why? Students write a paragraph analysing ONE technique in detail.',
      differentiation: {
        support:
          'Provide the three techniques pre-identified with line references. Students explain why each is effective.',
        core: 'Students identify the techniques independently and write a full analytical paragraph.',
        stretch:
          'Students consider what the baby-dashing image reveals about Lady Macbeth - is this a real memory or a rhetorical strategy? What does each interpretation suggest about her character?',
      },
      resources: [
        'Act 1 Scene 7 extract (printed)',
        'Persuasion techniques reference card',
        'Ranking grid',
      ],
    },
  ],
  plenaryActivity: {
    title: 'One-Word Verdict',
    duration: '6 minutes',
    instructions:
      "Students choose ONE word to describe Lady Macbeth based on today's lesson and write it on a sticky note with a one-sentence justification using a quotation. Display all sticky notes on the board. Discuss patterns - are the words mostly negative? Why might Shakespeare want us to feel conflicted about Lady Macbeth? Introduce the idea that she can be read as both a villain and a victim of patriarchy.",
    differentiation: {
      support:
        'Provide a choice of five words (powerful, dangerous, ambitious, fearless, manipulative) for students to select from.',
      core: 'Students choose their own word and justify with a quotation.',
      stretch:
        'Students explain why their chosen word might be viewed differently by a Jacobean vs a modern audience.',
    },
  },
  homework:
    "Learn the quotation \"Look like the innocent flower, but be the serpent under't\" and write a paragraph explaining how it reflects Lady Macbeth's character and Shakespeare's use of the appearance vs reality theme.",
  worksheetQuestions: [
    {
      question:
        'What does Lady Macbeth mean when she says "unsex me here"? Why is this significant in a Jacobean context?',
      lines: 5,
      modelAnswer:
        'Lady Macbeth is asking dark spirits to remove her feminine qualities - her compassion, gentleness, and capacity for nurturing - so she can be ruthless enough to help plan Duncan\'s murder. In Jacobean society, women were expected to be gentle, obedient, and maternal. By asking to be "unsexed," Lady Macbeth is directly transgressing the gender roles of her time. A Jacobean audience would have found this deeply disturbing, as it defies the Great Chain of Being and suggests an unnatural, almost demonic ambition.',
      marks: 4,
    },
    {
      question:
        'Analyse the effect of the imagery in "Come to my woman\'s breasts / And take my milk for gall."',
      lines: 5,
      modelAnswer:
        'The image of replacing breast milk - a symbol of maternal nurturing - with "gall" (poison/bitterness) is shocking and transgressive. Shakespeare uses this to show Lady Macbeth rejecting the most fundamental aspect of womanhood as defined by Jacobean society: motherhood. The imperative "Come" suggests she is actively inviting evil spirits, which links her to the witches and the supernatural. The image foreshadows the destruction that will come from her rejection of natural femininity.',
      marks: 4,
    },
    {
      question:
        'How does Lady Macbeth manipulate Macbeth in Act 1, Scene 7? Identify two techniques and analyse their effect.',
      lines: 6,
      modelAnswer:
        "Lady Macbeth questions Macbeth's masculinity: \"When you durst do it, then you were a man\" uses emasculation to shame him into action. This is effective because in a patriarchal society, masculinity was tied to courage and honour. She also uses the horrifying image of dashing a baby's brains out to show she would do anything to keep her word, making Macbeth feel cowardly by comparison. Both techniques exploit Macbeth's insecurities and manipulate him through shame rather than logical argument.",
      marks: 5,
    },
    {
      question:
        'Explain what Lady Macbeth means by "Look like the innocent flower, but be the serpent under\'t."',
      lines: 4,
      modelAnswer:
        'Lady Macbeth is advising Macbeth to hide his murderous intentions behind a welcoming appearance. The "innocent flower" represents the outward appearance of loyalty and hospitality, while the "serpent" represents the hidden evil beneath. The serpent allusion links to the biblical serpent in the Garden of Eden, connecting Lady Macbeth to temptation and the Fall of Man. This reflects the theme of appearance vs reality that runs throughout the play.',
      marks: 4,
    },
    {
      question: 'Is Lady Macbeth a villain or a victim? Explain your view with reference to Act 1.',
      lines: 6,
      modelAnswer:
        'Lady Macbeth can be read as both. She is villainous in that she actively plans Duncan\'s murder and manipulates her husband through emotional cruelty. However, she can also be seen as a victim of patriarchal society: she has ambition and intelligence but no legitimate outlet for them because she is a woman. Her need to call on spirits to "unsex" her suggests she cannot be ruthless in her natural state and must transform herself. Shakespeare may be critiquing a society that forces women into such extreme measures to access power.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The "unsex me here" soliloquy is one of the most commonly examined extracts - students must know it in detail.',
    'Be sensitive to the baby-dashing image; contextualise it as a rhetorical strategy within the play rather than dwelling on the graphic content.',
    'The feminist reading (Lady Macbeth as victim of patriarchy) is excellent for AO3 and helps students access higher-band responses.',
    'The comparison between Jacobean and modern attitudes to gender is a strong AO3 skill that examiners reward.',
    "Remind students that Lady Macbeth's power in Act 1 will contrast sharply with her powerlessness in Act 5 - plant this seed for Lesson 7.",
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context (gender and patriarchy)',
    'Evaluative writing',
    'Close reading',
  ],
}

// ─── Lesson 4: The Supernatural - Witches, Visions & Prophecy ───────────────

const lesson4: LessonPlan = {
  id: 'macbeth-04-supernatural',
  title: 'The Supernatural: Witches, Visions & Prophecy',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shakespeare presents the witches and their role in the play.',
    "Explore the significance of the supernatural elements: prophecies, the dagger vision, and Banquo's ghost.",
    "Understand how Jacobean beliefs about witchcraft shape the audience's response to the Weird Sisters.",
    'Evaluate whether the witches control Macbeth or merely reveal his existing desires.',
  ],
  successCriteria: [
    "I can analyse the witches' language, including their use of trochaic tetrameter and rhyming couplets.",
    'I can explain the dramatic significance of at least two supernatural events in the play.',
    'I can link the presentation of the supernatural to Jacobean beliefs about witchcraft.',
    'I can evaluate the witches\' role using the terms "catalyst" and "agent".',
  ],
  keywords: [
    'Weird Sisters',
    'trochaic tetrameter',
    'prophecy',
    'equivocation',
    'Daemonologie',
    'pathetic fallacy',
    'apparition',
    'supernatural',
  ],
  starterActivity: {
    title: 'Witchcraft in 1606: What Did People Really Believe?',
    duration: '8 minutes',
    instructions:
      "Display four facts: (1) James I wrote Daemonologie, a guide to identifying witches, (2) Over 200 people were executed for witchcraft during James I's reign, (3) Witches were believed to control the weather and cause illness, (4) The 1604 Witchcraft Act made consorting with evil spirits punishable by death. Students discuss in pairs: how would an audience who genuinely believed in witchcraft respond to Act 1, Scene 1? How is this different from a modern audience's response?",
    differentiation: {
      support:
        'Provide a comparison frame: "Jacobean audiences would have felt... because... Modern audiences might feel... because..."',
      core: 'Students discuss and record two differences between Jacobean and modern responses.',
      stretch:
        'Students consider why Shakespeare chose to open the play with the witches - what effect does this create?',
    },
    resources: ['Witchcraft facts slide', 'Comparison frame (support tier)'],
  },
  mainActivities: [
    {
      title: "Act 1, Scene 1 and Scene 3: The Witches' Language",
      duration: '20 minutes',
      instructions:
        'Read Act 1, Scene 1 and the witches\' speeches from Act 1, Scene 3 aloud. Students annotate, focusing on: (1) Trochaic tetrameter - the inverted rhythm (stressed-unstressed) that sounds like a chant or spell, contrasting with the iambic pentameter of noble characters, (2) Rhyming couplets - "Fair is foul, and foul is fair" - how the rhyme creates an incantatory, ritualistic quality, (3) Paradox and equivocation - the witches speak in riddles that are technically true but deliberately misleading. Students create a table comparing the witches\' language to Macbeth\'s language, identifying at least three differences. Write a PEE paragraph on: "How does Shakespeare use language to present the witches as unnatural?"',
      differentiation: {
        support:
          'Provide a glossary of trochaic tetrameter and equivocation with examples. Partially completed comparison table.',
        core: 'Independent annotation and comparison table with a full PEE paragraph.',
        stretch:
          'Students analyse the significance of Macbeth\'s first line - "So foul and fair a day I have not seen" - echoing the witches. What does this suggest about his connection to them?',
      },
      resources: [
        'Act 1 Scene 1 and Scene 3 extracts',
        'Language comparison table',
        'Glossary of terms (support tier)',
      ],
    },
    {
      title: "Supernatural Visions: The Dagger and Banquo's Ghost",
      duration: '22 minutes',
      instructions:
        'Read the dagger soliloquy (Act 2.1: "Is this a dagger which I see before me?") and the banquet scene excerpt (Act 3.4). For each, students answer: (1) What does Macbeth see? (2) Is it real or imaginary? (3) What does it reveal about his psychological state? (4) How would a Jacobean audience interpret it versus a modern audience? In pairs, students create a "Supernatural Evidence Board" - a visual diagram linking all supernatural events (witches, prophecies, dagger, ghost, apparitions) and noting what each reveals about Macbeth\'s deteriorating mental state. Groups present their boards. Teacher draws out the key point: Shakespeare uses the supernatural as an externalisation of Macbeth\'s inner guilt.',
      differentiation: {
        support:
          'Provide a partially completed evidence board with three events pre-mapped. Students add two more.',
        core: 'Students create a complete evidence board independently with annotations for each event.',
        stretch:
          'Students evaluate whether the supernatural elements are "real" within the world of the play or projections of Macbeth\'s guilt, using evidence for both sides.',
      },
      resources: [
        'Dagger soliloquy and banquet scene extracts',
        'Evidence board template (A3)',
        'Colour pens/sticky notes',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Catalyst or Agent? The Big Debate',
    duration: '7 minutes',
    instructions:
      'Two sides of the room: Side A - "The witches are catalysts: they ignite ambition that was already there." Side B - "The witches are agents: they actively corrupt Macbeth and cause his downfall." Students move to their side and prepare a one-sentence argument with textual evidence. Teacher takes two arguments from each side. Conclude: AQA rewards students who explore both interpretations.',
    differentiation: {
      support: 'Display a key quotation for each side to help students formulate their argument.',
      core: 'Students must include a quotation in their verbal argument.',
      stretch:
        "Students explain Shakespeare's authorial intention in leaving this question ambiguous.",
    },
  },
  homework:
    'Write a paragraph answering: "How does Shakespeare use the supernatural to create a sense of moral disorder in Macbeth?" Include at least two quotations.',
  worksheetQuestions: [
    {
      question:
        "What is trochaic tetrameter and why does Shakespeare use it for the witches' speech?",
      lines: 5,
      modelAnswer:
        'Trochaic tetrameter is a rhythmic pattern where each line has four stressed-unstressed beats (e.g., "DOUble, DOUble, TOIL and TROUble"). It contrasts with the iambic pentameter used by noble characters like Macbeth and Duncan. Shakespeare uses this inverted rhythm to make the witches sound unnatural and otherworldly - their speech literally disrupts the "normal" poetic order, reflecting how they disrupt the moral and political order of the play. The chant-like quality also suggests ritual and spellcasting.',
      marks: 4,
    },
    {
      question: 'Explain the significance of "Fair is foul, and foul is fair."',
      lines: 5,
      modelAnswer:
        'This paradox establishes the central theme of appearance vs reality: nothing in the play is what it seems. "Fair" (good/beautiful) and "foul" (evil/ugly) are reversed, suggesting the witches inhabit a world where moral values are inverted. It also foreshadows the equivocation and deception that runs throughout - the witches\' prophecies sound promising but lead to destruction. Significantly, Macbeth\'s first line echoes this - "So foul and fair a day" - linking him to the witches from his first appearance.',
      marks: 4,
    },
    {
      question:
        'How does Shakespeare present the dagger vision in Act 2, Scene 1? What does it reveal about Macbeth?',
      lines: 5,
      modelAnswer:
        'Macbeth sees a floating dagger leading him towards Duncan\'s chamber, with blood appearing on its blade. He questions whether it is real - "Is this a dagger which I see before me?" - or "a dagger of the mind, a false creation / Proceeding from the heat-oppressed brain." The vision reveals Macbeth\'s psychological turmoil: he is horrified by what he is about to do, yet drawn towards it. A Jacobean audience might interpret the dagger as a demonic temptation, while a modern audience might see it as a hallucination caused by guilt and stress.',
      marks: 4,
    },
    {
      question:
        "Why is James I's book Daemonologie relevant to understanding the witches in Macbeth?",
      lines: 4,
      modelAnswer:
        "James I wrote Daemonologie in 1597, arguing that witchcraft was real and that witches were agents of the devil. Since James was Shakespeare's patron, the inclusion of witches in Macbeth was likely intended to flatter and engage the king. The play validates James's beliefs by presenting the witches as genuinely dangerous and deceptive. Understanding this context helps explain why the witches are presented as evil catalysts rather than harmless figures.",
      marks: 3,
    },
    {
      question:
        "Do the witches control Macbeth's fate, or does he make his own choices? Use evidence from the play.",
      lines: 6,
      modelAnswer:
        "The witches prophesy that Macbeth will be king but never tell him to kill Duncan - that decision is his own (with Lady Macbeth's encouragement). This suggests the witches are catalysts who reveal a possibility, but Macbeth exercises free will in choosing murder. However, the witches' equivocal prophecies in Act 4 (\"none of woman born shall harm Macbeth\") give him false confidence that leads directly to his downfall. Shakespeare seems to suggest a combination: the witches exploit Macbeth's existing ambition, but he remains morally responsible for his choices.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'The supernatural is one of the most frequently examined topics in the AQA Macbeth question - students must be confident with this material.',
    'Emphasise that "the witches made him do it" is a weak argument - examiners reward nuanced discussion of agency and free will.',
    'The trochaic tetrameter analysis is excellent AO2 material and distinguishes higher-ability responses.',
    'If time allows, play a short clip of the witches from a film adaptation (Polanski, Kurzel, or the RSC) to discuss directorial choices.',
    'Link the "Catalyst vs Agent" debate back to the concept of hamartia from Lesson 2 - is Macbeth\'s flaw ambition or suggestibility?',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language and structural analysis',
    'AO3: Context (Jacobean witchcraft beliefs)',
    'Evaluative argument',
    'Comparative analysis',
  ],
}

// ─── Lesson 5: Guilt & Conscience - The Banquet Scene (Act 3.4) ─────────────

const lesson5: LessonPlan = {
  id: 'macbeth-05-guilt-banquet',
  title: 'Guilt & Conscience: The Banquet Scene (Act 3.4)',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Shakespeare presents guilt through the appearance of Banquo's ghost in Act 3, Scene 4.",
    "Explore how Macbeth's public breakdown reveals his psychological deterioration.",
    "Examine Lady Macbeth's role in attempting to control the situation and the shifting power dynamic.",
    "Evaluate Shakespeare's use of the supernatural as a dramatic device to externalise guilt.",
  ],
  successCriteria: [
    "I can analyse at least two quotations from Act 3.4 that reveal Macbeth's guilt.",
    "I can explain the dramatic significance of Banquo's ghost appearing at the banquet.",
    "I can compare Macbeth and Lady Macbeth's behaviour in this scene to their roles in Act 1.",
    'I can use the term "dramatic irony" accurately in relation to this scene.',
  ],
  keywords: [
    'guilt',
    'conscience',
    'hallucination',
    'dramatic irony',
    'paranoia',
    'power dynamic',
    'banquet',
    'apparition',
  ],
  starterActivity: {
    title: 'Guilt on Trial',
    duration: '7 minutes',
    instructions:
      'Display the question: "Can guilt drive someone mad?" Students quick-write for 2 minutes, then share one idea with their partner. Teacher takes three responses and links to Macbeth: by Act 3, Macbeth has murdered Duncan and ordered Banquo\'s assassination. Recap: what has happened between Act 1 and Act 3? Display a brief plot timeline to orient students.',
    differentiation: {
      support: 'Provide a plot recap handout covering Acts 1-3 to support recall.',
      core: 'Students quick-write independently and share with textual connections.',
      stretch:
        'Students predict how Shakespeare might dramatise guilt on stage - what theatrical techniques could be used?',
    },
    resources: ['Question slide', 'Acts 1-3 plot recap handout (support tier)'],
  },
  mainActivities: [
    {
      title: 'Close Reading: The Banquet Scene (Act 3.4)',
      duration: '25 minutes',
      instructions:
        'Read key extracts from Act 3.4, beginning with the ghost\'s first appearance: "Which of you have done this?" through to "You have displaced the mirth." Students annotate focusing on: (1) Macbeth\'s terror - "Thou canst not say I did it. Never shake / Thy gory locks at me" - the desperation in his denial, (2) The dramatic irony - the lords cannot see the ghost; only Macbeth (and the audience) can, (3) Lady Macbeth\'s attempts to control the situation - "Are you a man?" (echoing Act 1.7) and "You look but on a stool." Students create a split-page analysis: LEFT side = Macbeth\'s words and behaviour; RIGHT side = Lady Macbeth\'s words and behaviour. Write an analytical paragraph: "How does Shakespeare use the banquet scene to present Macbeth\'s guilt?"',
      differentiation: {
        support:
          'Provide a pre-annotated extract with key lines highlighted. Split-page template with prompts.',
        core: 'Independent annotation and split-page analysis with a full PEE paragraph.',
        stretch:
          'Students analyse how the power dynamic between Macbeth and Lady Macbeth has shifted since Act 1 and what this foreshadows.',
      },
      resources: [
        'Act 3 Scene 4 extract (printed)',
        'Split-page analysis template',
        'PEE paragraph frame',
      ],
    },
    {
      title: 'Ghost or Guilt? Interpretation Activity',
      duration: '18 minutes',
      instructions:
        'Divide the class into two groups. Group A argues: "Banquo\'s ghost is a real supernatural event - a punishment from beyond the grave." Group B argues: "The ghost is a hallucination - a manifestation of Macbeth\'s guilty conscience." Each group finds three pieces of evidence from the text. After 8 minutes of preparation, conduct a structured debate with alternating arguments. Teacher concludes: both interpretations are valid and AQA rewards students who explore multiple readings. Students then write a paragraph presenting BOTH interpretations.',
      differentiation: {
        support:
          'Provide two quotations for each interpretation to scaffold the debate preparation.',
        core: 'Students find their own evidence and present a balanced paragraph.',
        stretch:
          'Students consider which interpretation Shakespeare intended and why, linking to Jacobean beliefs about the supernatural vs modern psychology.',
      },
      resources: ['Debate preparation sheet', 'Quotation bank (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Power Shift Tracker',
    duration: '7 minutes',
    instructions:
      'Display a simple graph: x-axis = Scenes (Act 1.5, 1.7, 2.2, 3.4), y-axis = Power. Students plot two lines - one for Macbeth and one for Lady Macbeth - showing how their relative power changes across these scenes. In pairs, write one sentence explaining the overall trend. Teacher highlights: by Act 3.4, the power dynamic has completely reversed from Act 1.',
    differentiation: {
      support: 'Provide a partially completed graph with Act 1.5 and 1.7 already plotted.',
      core: 'Students complete the graph independently with written justification.',
      stretch: 'Students predict where the two lines will go in Act 5 and explain their reasoning.',
    },
  },
  homework:
    "Write a paragraph comparing Macbeth's behaviour at the banquet (Act 3.4) to his behaviour before Duncan's murder (Act 2.1). How has guilt changed him? Use at least two quotations.",
  worksheetQuestions: [
    {
      question:
        'What happens in the banquet scene (Act 3, Scene 4) and why is it dramatically significant?',
      lines: 5,
      modelAnswer:
        "Macbeth hosts a royal banquet to celebrate his kingship, but the ghost of Banquo - whom he has just had murdered - appears and sits in his seat. Macbeth is terrified and speaks to the ghost, which only he can see, alarming the lords. The scene is dramatically significant because it shows Macbeth's guilt destroying his ability to function as king. The public breakdown reveals that his crimes are catching up with him, and the dramatic irony creates intense tension.",
      marks: 4,
    },
    {
      question:
        'Analyse the effect of Macbeth\'s words: "Thou canst not say I did it. Never shake thy gory locks at me."',
      lines: 5,
      modelAnswer:
        'Macbeth\'s desperate denial - "Thou canst not say I did it" - reveals his overwhelming guilt and paranoia. He is technically correct: he did not physically kill Banquo (he hired murderers), but the ghost\'s "gory locks" (blood-soaked hair) are a visual reminder of his moral responsibility. The exclamatory tone and imperative "Never shake" suggest he is losing control. Shakespeare presents guilt as something that cannot be escaped through technicalities - Macbeth is haunted regardless of who held the blade.',
      marks: 4,
    },
    {
      question:
        "How does Lady Macbeth respond to Macbeth's breakdown? How has their relationship changed since Act 1?",
      lines: 6,
      modelAnswer:
        'Lady Macbeth tries to control the situation by questioning his masculinity - "Are you a man?" - echoing her tactic from Act 1.7. She also dismisses the ghost as a hallucination: "This is the very painting of your fear." However, her influence is weaker now; Macbeth is too consumed by guilt to be controlled. In Act 1, Lady Macbeth was the dominant partner who directed the action. By Act 3.4, the power dynamic has shifted - Macbeth acts independently (ordering Banquo\'s murder without consulting her), and she is reduced to damage control.',
      marks: 5,
    },
    {
      question:
        "Is Banquo's ghost real or a hallucination? Give evidence for both interpretations.",
      lines: 6,
      modelAnswer:
        'The ghost could be real within the supernatural world of the play - the witches are presented as genuinely powerful, so a ghostly apparition is consistent with the play\'s logic. A Jacobean audience would likely have accepted this reading. Alternatively, the ghost is a hallucination caused by guilt - only Macbeth can see it, just as only he saw the imaginary dagger in Act 2. Lady Macbeth dismisses it as "the very painting of your fear." A modern, psychological reading supports this interpretation. Shakespeare arguably intended both: the supernatural and the psychological operating simultaneously.',
      marks: 5,
    },
    {
      question: "What is the significance of the ghost sitting in Macbeth's seat at the banquet?",
      lines: 4,
      modelAnswer:
        "The ghost occupying Macbeth's seat is deeply symbolic. It suggests that Macbeth has no rightful claim to the throne - he has stolen it through murder, and the ghost of his victim literally takes his place. It also foreshadows the fulfilment of the witches' prophecy that Banquo's descendants will be kings: even in death, Banquo's claim to the future throne displaces Macbeth's present one. The empty seat becomes a visual symbol of Macbeth's illegitimate kingship.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'This scene is frequently set as an extract question in the AQA exam - ensure students can analyse it in detail.',
    'The power dynamic shift between Macbeth and Lady Macbeth is a strong structural point for AO2 and distinguishes top-band responses.',
    'The "Ghost or Guilt?" debate develops the evaluative skills needed for AO1 at the highest levels.',
    "If time allows, show two film versions of the banquet scene (e.g., Polanski's visible ghost vs a production where the ghost is invisible) to discuss directorial interpretation.",
    'The homework comparison task (Act 2.1 vs Act 3.4) builds whole-text knowledge essential for the exam.',
  ],
  targetedSkills: [
    'AO1: Textual reference and interpretation',
    'AO2: Language and dramatic analysis',
    'AO3: Context',
    'Evaluative writing',
    'Debate and discussion',
  ],
}

// ─── Lesson 6: Kingship & Tyranny - Duncan vs Macbeth ───────────────────────

const lesson6: LessonPlan = {
  id: 'macbeth-06-kingship-tyranny',
  title: 'Kingship & Tyranny: Duncan vs Macbeth',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shakespeare presents Duncan as an ideal king and Macbeth as a tyrant.',
    'Explore the Jacobean concept of the Divine Right of Kings and its relevance to the play.',
    'Examine how the natural world reflects the moral state of kingship in the play.',
    "Evaluate Shakespeare's message about legitimate vs illegitimate power.",
  ],
  successCriteria: [
    'I can compare Duncan and Macbeth as kings using specific textual evidence.',
    "I can explain the significance of the natural disorder following Duncan's murder.",
    'I can link the theme of kingship to the Jacobean concept of the Divine Right of Kings.',
    "I can write a comparative paragraph analysing Shakespeare's presentation of two contrasting types of kingship.",
  ],
  keywords: [
    'tyranny',
    'Divine Right of Kings',
    'regicide',
    'legitimate power',
    'pathetic fallacy',
    'natural order',
    'Great Chain of Being',
    'Malcolm',
  ],
  starterActivity: {
    title: 'What Makes a Good King?',
    duration: '7 minutes',
    instructions:
      'Students brainstorm ten qualities of a good leader/ruler on mini-whiteboards. Display Malcolm\'s list of "king-becoming graces" from Act 4.3: "justice, verity, temperance, stableness, bounty, perseverance, mercy, lowliness, devotion, patience, courage, fortitude." Students compare their list to Malcolm\'s. Discuss: does Duncan display these qualities? Does Macbeth?',
    differentiation: {
      support: 'Provide definitions for each of Malcolm\'s "king-becoming graces" on a handout.',
      core: 'Students match each grace to evidence of Duncan displaying it or Macbeth lacking it.',
      stretch:
        'Students consider whether Duncan is too trusting - is his goodness also a weakness?',
    },
    resources: ["Malcolm's graces slide", 'Definitions handout (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Duncan as Ideal King: Act 1 Analysis',
      duration: '18 minutes',
      instructions:
        'Students examine key quotations about Duncan: (1) "This castle hath a pleasant seat" (Act 1.6) - his trusting, generous nature, (2) Macbeth\'s own admission: "this Duncan / Hath borne his faculties so meek, hath been / So clear in his great office" (Act 1.7) - even the murderer acknowledges Duncan is a good king, (3) "his virtues / Will plead like angels" (Act 1.7). Students annotate each quotation and write a paragraph: "How does Shakespeare present Duncan as an ideal king?" Teacher highlights the dramatic irony of Duncan praising Macbeth\'s castle moments before being murdered in it.',
      differentiation: {
        support: 'Provide the three quotations with modern translations and a paragraph frame.',
        core: 'Independent annotation and paragraph with embedded quotations.',
        stretch:
          'Students evaluate whether Shakespeare presents Duncan as too perfect - is he a realistic character or a symbol of ideal kingship?',
      },
      resources: [
        'Duncan quotations handout',
        'Paragraph frame (support tier)',
        'Annotation guide',
      ],
    },
    {
      title: 'Macbeth as Tyrant: Acts 3-5 Evidence Gathering',
      duration: '25 minutes',
      instructions:
        'Provide students with a selection of quotations and references from Acts 3-5 showing Macbeth\'s tyrannical rule: (1) Ordering Banquo\'s murder and the killing of Fleance (Act 3), (2) The murder of Macduff\'s wife and children (Act 4), (3) "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er" (Act 3.4), (4) The natural disorder: "unnatural deeds / Do breed unnatural troubles" (Act 5.1), (5) Ross\'s report: "Alas, poor country! Almost afraid to know itself" (Act 4.3). Students create a comparison table: Duncan (Legitimate King) vs Macbeth (Tyrant), with columns for Evidence, Language Features, and Effect. Write a comparative paragraph.',
      differentiation: {
        support:
          'Provide the comparison table partially completed with modern translations of key quotations.',
        core: 'Students complete the comparison table independently and write a full comparative paragraph.',
        stretch:
          "Students analyse the significance of Malcolm's restoration at the end - what is Shakespeare saying about legitimate kingship and the natural order?",
      },
      resources: [
        'Acts 3-5 quotation selection',
        'Comparison table template',
        'Modern translations (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Restoration of Order',
    duration: '7 minutes',
    instructions:
      'Read Malcolm\'s final speech (Act 5.8): "We shall not spend a large expense of time / Before we reckon with your several loves." Discuss: why does Shakespeare end the play with Malcolm becoming king? Students write two sentences: (1) What is Shakespeare\'s message about kingship? (2) How would this message have pleased King James I? Teacher consolidates: the play is a warning about tyranny and a celebration of legitimate, divinely sanctioned kingship.',
    differentiation: {
      support: 'Provide sentence starters for both responses.',
      core: 'Independent written responses.',
      stretch:
        'Students evaluate whether the ending is truly hopeful or whether the cycle could repeat - are there any warning signs?',
    },
  },
  homework:
    'Write a paragraph answering: "How does Shakespeare use the theme of kingship to convey a moral message to a Jacobean audience?" Use at least two quotations from different parts of the play.',
  worksheetQuestions: [
    {
      question: 'How does Shakespeare present Duncan as an ideal king? Use evidence from the text.',
      lines: 5,
      modelAnswer:
        'Shakespeare presents Duncan as generous, trusting, and virtuous. He rewards loyalty - promoting Macbeth to Thane of Cawdor - and his language is warm and gracious: "This castle hath a pleasant seat" shows his trusting nature. Even Macbeth admits Duncan has "borne his faculties so meek" and been "so clear in his great office," meaning he has used his power gently and justly. Shakespeare presents Duncan as the embodiment of the Jacobean ideal king, making his murder all the more horrifying.',
      marks: 4,
    },
    {
      question:
        'Analyse the metaphor: "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er."',
      lines: 5,
      modelAnswer:
        'Macbeth compares his murderous reign to wading through a river of blood. He has gone so far that turning back would be as difficult as continuing forward. The word "stepp\'d" suggests deliberate action - he chose this path - while "tedious" is chillingly casual, suggesting he has become desensitised to violence. The metaphor shows his complete moral deterioration: murder is now a matter of convenience rather than anguish. This contrasts starkly with his tortured soliloquy in Act 1.7.',
      marks: 4,
    },
    {
      question: 'How does the natural world reflect the state of kingship in Macbeth?',
      lines: 5,
      modelAnswer:
        "Shakespeare uses pathetic fallacy to show that Macbeth's tyranny disrupts the natural order. After Duncan's murder, an \"unruly\" night with storms and unnatural events occurs: an owl kills a falcon, Duncan's horses \"turn'd wild in nature\" and eat each other. This reflects the Jacobean belief in the Great Chain of Being - killing the king (God's representative on earth) causes cosmic disorder. The natural world is only restored when Malcolm, the legitimate heir, takes the throne.",
      marks: 4,
    },
    {
      question:
        'Why does Shakespeare include Malcolm\'s list of "king-becoming graces" in Act 4, Scene 3?',
      lines: 5,
      modelAnswer:
        "Malcolm lists the virtues of a good king - justice, mercy, temperance, courage - to contrast the ideal of kingship with Macbeth's tyranny. The scene serves as a direct comparison: Malcolm embodies these graces, while Macbeth has none of them. Shakespeare uses this to reinforce the play's moral message: legitimate kingship based on virtue brings order, while tyranny brings chaos. The list also reassures the audience that Malcolm will be a good king, providing hope for the play's resolution.",
      marks: 4,
    },
    {
      question: 'How would King James I have responded to the theme of kingship in Macbeth?',
      lines: 5,
      modelAnswer:
        "James I would have been flattered by the play's message. The play validates the Divine Right of Kings by showing that killing a divinely appointed monarch (Duncan) brings catastrophic consequences, while the restoration of a legitimate king (Malcolm) brings peace and order. The play was likely written partly to please James, who had survived the Gunpowder Plot and believed strongly in his God-given right to rule. Shakespeare's message - that regicide is the worst possible crime - would have directly reinforced James's political authority.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'The kingship theme is often neglected by students who focus on ambition and guilt - emphasise that it is equally important for AO3.',
    'Malcolm\'s "king-becoming graces" are a useful quotation bank for any Macbeth question about kingship or character.',
    'The "blood river" metaphor (Act 3.4) is a commonly examined quotation - ensure students can analyse it in detail.',
    'The stretch question about whether Duncan is "too perfect" develops critical thinking and higher-band evaluation.',
    'Link the pathetic fallacy to the Great Chain of Being for strong AO2 + AO3 integration.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context (Divine Right of Kings)',
    'Comparative writing',
    'Evaluative thinking',
  ],
}

// ─── Lesson 7: Lady Macbeth's Decline - Sleepwalking Scene (Act 5.1) ────────

const lesson7: LessonPlan = {
  id: 'macbeth-07-lady-macbeth-decline',
  title: "Lady Macbeth's Decline: Sleepwalking Scene (Act 5.1)",
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Shakespeare presents Lady Macbeth's psychological decline in Act 5, Scene 1.",
    'Explore the significance of the prose form, the hand-washing motif, and the fragmented speech.',
    'Compare Lady Macbeth in Act 5.1 to her presentation in Act 1 to track her character arc.',
    'Evaluate Shakespeare\'s message about guilt and the consequences of "unnatural" ambition.',
  ],
  successCriteria: [
    "I can analyse at least three key features of Lady Macbeth's language and behaviour in Act 5.1.",
    "I can explain the significance of Shakespeare's shift from verse to prose in this scene.",
    "I can compare Lady Macbeth's Act 5.1 presentation to her Act 1 soliloquy and identify the dramatic contrast.",
    'I can write an evaluative response considering whether Lady Macbeth deserves sympathy.',
  ],
  keywords: [
    'prose',
    'verse',
    'fragmented speech',
    'motif',
    'guilt',
    'madness',
    'dramatic irony',
    'tragic arc',
  ],
  starterActivity: {
    title: 'Then vs Now: Lady Macbeth Recall',
    duration: '7 minutes',
    instructions:
      'Display two quotations side by side. Quote A (Act 1.5): "Come, you spirits / That tend on mortal thoughts, unsex me here." Quote B (Act 5.1): "Out, damned spot! Out, I say!" Students discuss in pairs: what has changed? How has Lady Macbeth\'s language, tone, and power shifted? Predict what might have caused this transformation. Feed back as a class.',
    differentiation: {
      support:
        'Provide a modern English translation for each quotation and a sentence starter: "In Act 1, Lady Macbeth was... but in Act 5 she is..."',
      core: 'Students identify at least two changes in language, tone, or power and explain them.',
      stretch:
        "Students consider how this transformation reflects Shakespeare's message about guilt and natural order.",
    },
    resources: ['Dual-quotation comparison slide', 'Modern translations (support tier)'],
  },
  mainActivities: [
    {
      title: 'Close Analysis: The Sleepwalking Scene (Act 5.1)',
      duration: '25 minutes',
      instructions:
        'Read Act 5.1 aloud, with three students taking the roles of Lady Macbeth, the Doctor, and the Gentlewoman. Students annotate a printed extract, focusing on: (1) The shift to prose - Lady Macbeth, who spoke in commanding verse in Act 1, now speaks in broken, fragmented prose, reflecting her fractured mind, (2) "Out, damned spot!" - the obsessive hand-washing and the irony of her earlier "A little water clears us of this deed" (Act 2.2), (3) "All the perfumes of Arabia will not sweeten this little hand" - the reversal of her earlier confidence, (4) "What\'s done cannot be undone" - the resignation and despair. Students write two PEE paragraphs: one on the hand-washing motif and one on the shift from verse to prose.',
      differentiation: {
        support:
          'Provide a pre-annotated extract with three features highlighted. PEE frame with sentence starters for both paragraphs.',
        core: 'Independent annotation and two full PEE paragraphs with embedded quotations.',
        stretch:
          'Students analyse the role of the Doctor and Gentlewoman as audience surrogates - what is their function in the scene?',
      },
      resources: [
        'Act 5 Scene 1 extract (printed)',
        'PEE paragraph frame',
        'Annotation colour guide',
      ],
    },
    {
      title: 'Character Arc Comparison: Act 1 vs Act 5',
      duration: '18 minutes',
      instructions:
        "Students create a character arc diagram for Lady Macbeth, plotting her power, confidence, and mental state across key scenes: Act 1.5 (the letter and soliloquy), Act 1.7 (manipulating Macbeth), Act 2.2 (after the murder), Act 3.4 (the banquet scene), Act 5.1 (sleepwalking). For each point, students note a key quotation and a one-sentence summary. In pairs, discuss: is Lady Macbeth's decline a punishment, a consequence, or a tragedy? Write a paragraph evaluating whether a modern audience should feel sympathy for Lady Macbeth.",
      differentiation: {
        support:
          'Provide the arc diagram partially completed with quotations for Acts 1.5 and 5.1.',
        core: 'Students complete the full arc independently with quotations and evaluative summaries.',
        stretch:
          "Students compare Lady Macbeth's arc to Macbeth's - whose decline is more tragic and why?",
      },
      resources: ['Character arc diagram template', 'Key quotations bank', 'A3 paper for diagram'],
    },
  ],
  plenaryActivity: {
    title: 'Epitaph for Lady Macbeth',
    duration: '7 minutes',
    instructions:
      "Students write a four-line epitaph (gravestone inscription) for Lady Macbeth that captures her character arc. It should reference both her early power and her final decline. Share three or four examples. Teacher uses the best ones to summarise the key points about Lady Macbeth's presentation in the play.",
    differentiation: {
      support: 'Provide a template: "Here lies Lady Macbeth, who once... but now..."',
      core: 'Students write an original epitaph using at least one quotation or paraphrase.',
      stretch:
        'Students write the epitaph from a specific perspective (Shakespeare, Macbeth, a Jacobean audience, or a feminist critic).',
    },
  },
  homework:
    'Write a paragraph answering: "How does Shakespeare use Lady Macbeth\'s sleepwalking scene to convey a message about guilt?" Include analysis of at least two quotations from Act 5.1.',
  worksheetQuestions: [
    {
      question:
        'Why is it significant that Lady Macbeth speaks in prose rather than verse in Act 5, Scene 1?',
      lines: 5,
      modelAnswer:
        'In Shakespeare\'s plays, high-status characters typically speak in verse (iambic pentameter), while prose is associated with lower status, madness, or loss of control. Lady Macbeth speaks in commanding verse throughout Act 1, reflecting her power and intellect. The shift to prose in Act 5.1 signals her complete psychological breakdown - her mind is fractured, and she can no longer control her thoughts or speech. The fragmented sentences ("The Thane of Fife had a wife. Where is she now?") mirror her fragmented mental state.',
      marks: 4,
    },
    {
      question:
        'Analyse the significance of Lady Macbeth\'s words: "Out, damned spot! Out, I say!"',
      lines: 5,
      modelAnswer:
        'Lady Macbeth is obsessively trying to wash imaginary blood from her hands - blood that represents the guilt she cannot escape. The imperative "Out!" echoes her commanding tone from Act 1, but now she is commanding a stain rather than her husband. The word "damned" suggests she recognises the spiritual consequences of their actions - she is damned to hell. This is deeply ironic because in Act 2.2, she dismissed Macbeth\'s guilt with "A little water clears us of this deed." Shakespeare shows that guilt cannot be washed away, no matter how much she denied it earlier.',
      marks: 4,
    },
    {
      question:
        'Compare Lady Macbeth\'s confidence in Act 2.2 ("A little water clears us of this deed") to her despair in Act 5.1 ("All the perfumes of Arabia will not sweeten this little hand"). What does this contrast reveal?',
      lines: 6,
      modelAnswer:
        'In Act 2.2, Lady Macbeth is dismissive and practical - she believes guilt can be easily dealt with. The simplicity of "a little water" suggests she underestimates the psychological weight of murder. By Act 5.1, the scale has dramatically shifted: "All the perfumes of Arabia" represents the entire wealth and fragrance of a continent, yet even this cannot remove the stain. The progression from "a little water" to "all the perfumes of Arabia" shows that guilt has grown from something she dismissed to something overwhelming and inescapable. Shakespeare uses this structural contrast to demonstrate that guilt is a moral force that cannot be suppressed.',
      marks: 5,
    },
    {
      question: 'What is the role of the Doctor and the Gentlewoman in Act 5, Scene 1?',
      lines: 4,
      modelAnswer:
        'The Doctor and Gentlewoman function as audience surrogates - they observe and comment on Lady Macbeth\'s behaviour, guiding the audience\'s response. The Doctor\'s confession - "This disease is beyond my practice" - suggests that Lady Macbeth\'s condition is not medical but spiritual or moral, and that only divine intervention can help her. Their horror mirrors what the audience should feel, reinforcing Shakespeare\'s message that guilt from "unnatural deeds" leads to "unnatural troubles."',
      marks: 4,
    },
    {
      question: "Does Lady Macbeth deserve the audience's sympathy in Act 5? Explain your view.",
      lines: 6,
      modelAnswer:
        'A Jacobean audience might view her suffering as deserved punishment for defying natural gender roles and participating in regicide. She called on "spirits" to "unsex" her and actively planned Duncan\'s murder, so her madness is a consequence of her own choices. However, a modern or feminist reading might elicit more sympathy: she is a woman trapped in a patriarchal society with no legitimate outlet for her intelligence and ambition. Her guilt shows she has a conscience - she is not a monster but a human being destroyed by the very actions she once embraced. Shakespeare presents her decline as both punishment and tragedy.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Act 5.1 is the most commonly examined Lady Macbeth extract - students must know it thoroughly.',
    'The verse-to-prose shift is an excellent AO2 structural point that examiners specifically reward.',
    'The comparison between "a little water" and "all the perfumes of Arabia" is perhaps the most powerful structural contrast in the play - drill this.',
    'The epitaph activity is an effective creative assessment that also checks understanding of the character arc.',
    'If time allows, show an RSC or National Theatre clip of the sleepwalking scene to discuss performance choices.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language and structural analysis',
    'AO3: Context (gender, morality)',
    'Comparative analysis',
    'Evaluative writing',
  ],
}

// ─── Lesson 8: Macbeth's Downfall - Act 5 & Tragic Hero ────────────────────

const lesson8: LessonPlan = {
  id: 'macbeth-08-downfall-tragic-hero',
  title: "Macbeth's Downfall: Act 5 & Tragic Hero",
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse Macbeth\'s "Tomorrow" soliloquy (Act 5.5) and its significance as a moment of nihilistic despair.',
    "Explore how Shakespeare presents Macbeth's final stand in Act 5 - courage, defiance, or delusion?",
    'Evaluate whether Macbeth meets the criteria for a tragic hero as defined by Aristotle.',
    "Assess Shakespeare's structural choices in ending the play with Malcolm's restoration.",
  ],
  successCriteria: [
    'I can analyse at least three language features in the "Tomorrow" soliloquy.',
    "I can explain the significance of the witches' equivocal prophecies and how they lead to Macbeth's downfall.",
    'I can evaluate whether Macbeth is a tragic hero using the terms hamartia, peripeteia, and catharsis.',
    "I can write a structured response on Macbeth's presentation in Act 5.",
  ],
  keywords: [
    'tragic hero',
    'hamartia',
    'peripeteia',
    'catharsis',
    'nihilism',
    'equivocation',
    'hubris',
    'denouement',
  ],
  starterActivity: {
    title: 'The Tragic Hero Checklist',
    duration: '8 minutes',
    instructions:
      "Display Aristotle's criteria for a tragic hero: (1) Noble status - high-born or powerful, (2) Hamartia - a tragic flaw that leads to downfall, (3) Peripeteia - a reversal of fortune, (4) Anagnorisis - a moment of self-recognition, (5) Catharsis - the audience feels pity and fear. Students tick which criteria Macbeth meets and provide brief evidence for each. Discuss: does Macbeth fully meet the criteria, or is he too villainous to be truly tragic?",
    differentiation: {
      support:
        'Provide definitions of each term with an example from another text (e.g., Oedipus).',
      core: 'Students complete the checklist independently with textual evidence for Macbeth.',
      stretch:
        'Students consider whether Shakespeare deliberately subverts the tragic hero model - is Macbeth a cautionary figure rather than a tragic one?',
    },
    resources: ['Tragic hero criteria slide', 'Definitions handout (support tier)'],
  },
  mainActivities: [
    {
      title: 'The "Tomorrow" Soliloquy: Act 5, Scene 5',
      duration: '22 minutes',
      instructions:
        'Read the soliloquy from "She should have died hereafter" to "Signifying nothing." Students annotate focusing on: (1) "Tomorrow, and tomorrow, and tomorrow" - the repetition and its effect of weariness, meaninglessness, (2) "Out, out, brief candle!" - the light/life metaphor, (3) "Life\'s but a walking shadow, a poor player" - the extended theatre metaphor, reducing life to a meaningless performance, (4) "full of sound and fury / Signifying nothing" - the nihilistic conclusion. Model one annotation, then students write a PEE paragraph answering: "How does Shakespeare present Macbeth\'s state of mind in Act 5, Scene 5?"',
      differentiation: {
        support:
          'Provide a pre-annotated version with two features identified. PEE frame with sentence starters.',
        core: 'Independent annotation and a full PEE paragraph with embedded quotations.',
        stretch:
          'Students compare this soliloquy to the "vaulting ambition" soliloquy (Act 1.7) - how has Macbeth\'s relationship to his own ambition changed?',
      },
      resources: [
        'Act 5 Scene 5 soliloquy extract (printed)',
        'PEE paragraph frame',
        'Annotation guide',
      ],
    },
    {
      title: 'The Final Battle: Equivocation and Downfall',
      duration: '20 minutes',
      instructions:
        'Students track how each of the witches\' Act 4 prophecies is fulfilled: (1) "Beware Macduff" - Macduff kills Macbeth, (2) "None of woman born shall harm Macbeth" - Macduff was "from his mother\'s womb / Untimely ripp\'d" (born by Caesarean section), (3) "Macbeth shall never vanquish\'d be until / Great Birnam Wood to high Dunsinane Hill / Shall come" - Malcolm\'s soldiers camouflage themselves with tree branches. Students complete a table: Prophecy, What Macbeth understood, What actually happened, How it is equivocation. In pairs, discuss: is it fair to say the witches tricked Macbeth? Or did he trick himself by hearing what he wanted to hear? Write a paragraph evaluating the role of equivocation in Macbeth\'s downfall.',
      differentiation: {
        support:
          'Provide the table partially completed with the first prophecy filled in as a model.',
        core: 'Students complete the table independently and write an evaluative paragraph.',
        stretch:
          'Students link equivocation to the theme of appearance vs reality and to the historical context of the Gunpowder Plot trials, where Catholic conspirators were accused of equivocation.',
      },
      resources: [
        'Act 4 prophecies extract',
        'Equivocation table template',
        'Act 5 battle extracts',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Hero or Villain? Final Verdict',
    duration: '7 minutes',
    instructions:
      'Students position a counter on a spectrum line printed on a handout: "Complete Villain" on the left, "Tragic Hero" on the right. They mark their position and write a two-sentence justification beneath. Collect for assessment. Teacher closes: the ambiguity is the point - Shakespeare creates a character who provokes both pity and revulsion, which is what makes Macbeth endure as a text.',
    differentiation: {
      support: 'Provide a sentence starter: "I think Macbeth is closer to a... because..."',
      core: 'Students write two sentences with a quotation supporting their position.',
      stretch:
        'Students explain how their verdict might differ depending on whether they adopt a Jacobean or modern perspective.',
    },
  },
  homework:
    'Write a full paragraph answering: "Is Macbeth a tragic hero or a villain? Use Aristotle\'s criteria and evidence from across the play to support your argument."',
  worksheetQuestions: [
    {
      question: 'Analyse the effect of the repetition in "Tomorrow, and tomorrow, and tomorrow."',
      lines: 5,
      modelAnswer:
        'The triple repetition creates a weary, plodding rhythm that reflects Macbeth\'s sense of life as meaningless and monotonous. Each "tomorrow" stretches time out endlessly, suggesting he no longer looks forward to anything. The use of commas creates pauses that slow the line down, mirroring his exhaustion and despair. This is a stark contrast to Act 1, where Macbeth was driven by urgent ambition. By Act 5, his ambition has given him nothing but emptiness - Shakespeare shows that the crown he killed for has brought no fulfilment.',
      marks: 4,
    },
    {
      question:
        'Explain the metaphor "Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage."',
      lines: 5,
      modelAnswer:
        'Macbeth compares life to a shadow (something insubstantial and fleeting) and then to a bad actor ("poor player") who performs briefly on stage and then disappears. The theatre metaphor reduces all of human life - including his own kingship - to a meaningless performance. "Struts and frets" suggests that people act with importance but achieve nothing lasting. This nihilistic worldview represents Macbeth\'s complete moral and psychological collapse: the man who once desperately wanted the crown now sees all human endeavour as pointless.',
      marks: 4,
    },
    {
      question:
        'What is equivocation and how do the witches use it to manipulate Macbeth in Act 4?',
      lines: 5,
      modelAnswer:
        'Equivocation means using deliberately ambiguous language that is technically true but misleading. The witches tell Macbeth "none of woman born shall harm" him, which he interprets as meaning no one can kill him - but Macduff was born by Caesarean section, making the prophecy a trick. Similarly, they say he is safe until Birnam Wood moves, which seems impossible but is fulfilled when soldiers carry branches. The witches exploit Macbeth\'s overconfidence: he hears what he wants to hear because his hubris prevents him from questioning the prophecies\' true meaning.',
      marks: 4,
    },
    {
      question:
        "Does Macbeth meet the criteria for Aristotle's tragic hero? Use the terms hamartia, peripeteia, and catharsis.",
      lines: 6,
      modelAnswer:
        'Macbeth partly meets the criteria. He has noble status (Thane, then King) and a clear hamartia - his "vaulting ambition." He experiences peripeteia: his fortune reverses from celebrated warrior to despised tyrant. He also has a moment of anagnorisis in the "Tomorrow" soliloquy, recognising the meaninglessness of what he has achieved. However, the question of catharsis is debatable: a Jacobean audience might feel satisfaction at his punishment rather than pity. A modern audience may feel more sympathy, seeing him as a man destroyed by forces beyond his control. Shakespeare arguably creates an ambiguous tragic hero - both pitiable and contemptible.',
      marks: 5,
    },
    {
      question:
        'Why does Shakespeare end the play with Malcolm becoming king? What is the significance of this structural choice?',
      lines: 5,
      modelAnswer:
        "Shakespeare ends with Malcolm's restoration to create a sense of order being re-established. The play begins with a good king (Duncan), is disrupted by tyranny (Macbeth), and concludes with a new legitimate king (Malcolm). This circular structure reinforces the message that the natural order - the Great Chain of Being - will always reassert itself. For a Jacobean audience, it validated the Divine Right of Kings and reassured James I that tyranny will always be defeated. It also provides the catharsis that Aristotle's tragic model requires.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'The "Tomorrow" soliloquy is one of the most commonly examined extracts - students must be able to analyse it in detail.',
    "Aristotle's tragic hero model is excellent for structured evaluation and helps students access AO1 at the highest levels.",
    'The equivocation table is a valuable exam revision tool - encourage students to keep it in their notes.',
    'The "Hero or Villain?" spectrum is an effective formative assessment that also practises evaluative thinking.',
    'Emphasise that AQA rewards structural analysis - tracking how Macbeth changes from Act 1 to Act 5 is a key skill for Grade 8/9.',
  ],
  targetedSkills: [
    'AO1: Textual reference and interpretation',
    'AO2: Language and structural analysis',
    'AO3: Context (tragedy, Jacobean morality)',
    'Evaluative argument',
    'Extended writing',
  ],
}

// ─── Lesson 9: Key Quotes & Analysis Workshop ──────────────────────────────

const lesson9: LessonPlan = {
  id: 'macbeth-09-key-quotes-workshop',
  title: 'Key Quotes & Analysis Workshop',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Consolidate knowledge of the 15-20 most important quotations for the AQA Macbeth exam.',
    'Practise analysing quotations at word and phrase level, identifying language techniques and their effects.',
    'Develop the skill of linking quotations to themes, characters, and context (AO1, AO2, AO3).',
    'Build confidence in selecting and deploying quotations under timed conditions.',
  ],
  successCriteria: [
    'I can recall and explain at least 12 key quotations from across the play.',
    'I can analyse a quotation at word level, identifying techniques and explaining their effects.',
    'I can link each quotation to at least one theme and one contextual factor.',
    'I can write a timed analytical paragraph using an embedded quotation in under 8 minutes.',
  ],
  keywords: [
    'embedded quotation',
    'word-level analysis',
    'connotation',
    'semantic field',
    'authorial intention',
    'AO1',
    'AO2',
    'AO3',
  ],
  starterActivity: {
    title: 'Quote Recall Challenge',
    duration: '8 minutes',
    instructions:
      'Students have 5 minutes to write down as many Macbeth quotations as they can from memory. After 5 minutes, students swap papers with a partner and check/correct. Display a master list of 20 key quotations. Students mark their score and identify their three weakest areas. Teacher notes class-wide gaps to address during the main activity.',
    differentiation: {
      support:
        'Provide the first word of each quotation as a prompt (e.g., "Fair is...", "Is this a...", "Out, damned...").',
      core: 'Students recall quotations from memory without prompts.',
      stretch:
        'Students also note the act, scene, speaker, and theme for each quotation they recall.',
    },
    resources: ['Timer', 'Master quotation list (20 quotes) slide', 'Blank paper'],
  },
  mainActivities: [
    {
      title: 'Deep Dive Analysis: Quotation Stations',
      duration: '25 minutes',
      instructions:
        'Set up five analysis stations, each with a key quotation and a structured analysis task. Station 1: "Fair is foul, and foul is fair" - analyse paradox and link to appearance vs reality theme. Station 2: "Look like the innocent flower, but be the serpent under\'t" - analyse imagery and link to Lady Macbeth and deception. Station 3: "Is this a dagger which I see before me?" - analyse the rhetorical question and link to guilt/supernatural. Station 4: "Out, damned spot!" - analyse imperative/exclamatory and link to guilt and Lady Macbeth\'s decline. Station 5: "Tomorrow, and tomorrow, and tomorrow" - analyse repetition and link to nihilism and tragic hero. Students rotate every 5 minutes, completing a structured analysis grid for each quotation: (1) Technique, (2) Effect on the reader, (3) Theme connection, (4) Context link, (5) How to embed this in an exam paragraph.',
      differentiation: {
        support:
          'Provide a model analysis for Station 1 and sentence starters for the remaining stations.',
        core: 'Students complete the analysis grid independently for all five stations.',
        stretch:
          'Students add an "alternative interpretation" row to each analysis, considering how different readers might respond to the quotation.',
      },
      resources: [
        'Five station cards with quotations',
        'Structured analysis grid (per student)',
        'Model analysis (support tier)',
      ],
    },
    {
      title: 'Timed Paragraph Practice',
      duration: '18 minutes',
      instructions:
        'Students choose one quotation from the stations and write a full analytical paragraph in 8 minutes. The paragraph must: (1) Open with a clear topic sentence linking to the question, (2) Embed the quotation fluently, (3) Analyse at word level (not just technique identification), (4) Link to context or authorial intention, (5) Include a concluding sentence that evaluates or offers an alternative interpretation. After 8 minutes, students swap and peer-assess using a simplified mark scheme checklist. Teacher models a Grade 8/9 response for comparison.',
      differentiation: {
        support: 'Provide a paragraph structure template with sentence starters for each element.',
        core: 'Students write independently and peer-assess using the mark scheme.',
        stretch:
          'Students write a second paragraph linking their chosen quotation to a different part of the play (whole-text reference).',
      },
      resources: [
        'Timer',
        'Paragraph structure template',
        'Simplified mark scheme checklist',
        'Model Grade 8/9 paragraph',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Quotation Flashcard Creation',
    duration: '6 minutes',
    instructions:
      'Students create three flashcards for their three weakest quotations (identified in the starter). Front: the quotation. Back: speaker, act/scene, technique, theme, one-sentence analysis. These become a personal revision resource. Teacher challenges: by next lesson, learn all three by heart.',
    differentiation: {
      support: 'Provide a flashcard template with prompts for what to include on each side.',
      core: 'Students create flashcards independently.',
      stretch:
        'Students create a "connection card" linking two quotations from different parts of the play and explaining how they relate thematically.',
    },
  },
  homework:
    'Learn five quotations from the master list that you cannot currently recall. For each, write one sentence explaining its significance to a theme or character. Test yourself using the look-cover-write-check method.',
  worksheetQuestions: [
    {
      question:
        'Analyse the quotation: "Look like the innocent flower, but be the serpent under\'t." What technique is used and what is its effect?',
      lines: 5,
      modelAnswer:
        'Lady Macbeth uses a simile comparing Macbeth to an "innocent flower" (outward appearance) and a "serpent" (hidden evil). The serpent alludes to the biblical serpent in the Garden of Eden, linking Lady Macbeth to temptation, deception, and the Fall of Man. Shakespeare presents her as the driving force behind the deception, instructing Macbeth to conceal his murderous intent behind a welcoming exterior. The juxtaposition of "innocent" and "serpent" encapsulates the theme of appearance vs reality.',
      marks: 4,
    },
    {
      question:
        'Analyse the quotation: "Will all great Neptune\'s ocean wash this blood clean from my hand?" What does it reveal about Macbeth?',
      lines: 5,
      modelAnswer:
        "Macbeth's rhetorical question uses hyperbole to express the magnitude of his guilt: even the Roman god of the sea's entire ocean could not wash away the blood. The blood is both literal (from the murder) and metaphorical (representing his guilt and moral stain). The scale of the imagery - from his hand to the entire ocean - shows guilt overwhelming him. This foreshadows Lady Macbeth's later obsessive hand-washing and her realisation that \"all the perfumes of Arabia will not sweeten this little hand.\" Shakespeare presents guilt as inescapable and all-consuming.",
      marks: 4,
    },
    {
      question:
        'Why is it important to analyse quotations at word level rather than just identifying techniques?',
      lines: 4,
      modelAnswer:
        'Identifying a technique (e.g., "this is a metaphor") only earns basic AO2 marks. Word-level analysis - exploring the connotations, sounds, and effects of individual words - demonstrates deeper understanding and earns higher marks. For example, rather than saying "vaulting ambition is a metaphor," analysing "vaulting" (suggesting overreaching, uncontrolled leaping, inevitable falling) shows sophisticated engagement with Shakespeare\'s language choices. AQA examiners specifically reward this level of detail.',
      marks: 3,
    },
    {
      question:
        'Choose any Macbeth quotation and write a Grade 8/9 analytical paragraph that includes word-level analysis, a context link, and an evaluative comment.',
      lines: 8,
      modelAnswer:
        'Shakespeare presents Macbeth\'s guilt as physically consuming through the metaphor "I am in blood / Stepp\'d in so far that, should I wade no more, / Returning were as tedious as go o\'er." The verb "stepp\'d" implies deliberate agency - Macbeth chose to enter this metaphorical river of blood - while "wade" suggests heavy, laboured movement, as if the accumulated guilt weighs him down. The word "tedious" is strikingly casual: murder has become a matter of inconvenience rather than horror, revealing his moral desensitisation. A Jacobean audience would recognise this as the inevitable consequence of regicide - the Great Chain of Being, once broken, cannot be restored by the one who broke it. However, the fact that Macbeth can articulate his own moral predicament so clearly suggests he retains some self-awareness, which arguably makes him more tragic than purely villainous.',
      marks: 6,
    },
    {
      question:
        'Match each quotation to its speaker, the act/scene, and the main theme it relates to: (a) "Fair is foul, and foul is fair", (b) "Unsex me here", (c) "Is this a dagger which I see before me?", (d) "Out, damned spot!", (e) "Tomorrow, and tomorrow, and tomorrow".',
      lines: 10,
      modelAnswer:
        '(a) Witches, Act 1.1 - Appearance vs Reality / Supernatural. (b) Lady Macbeth, Act 1.5 - Gender / Ambition / Supernatural. (c) Macbeth, Act 2.1 - Guilt / Supernatural. (d) Lady Macbeth, Act 5.1 - Guilt / Conscience / Decline. (e) Macbeth, Act 5.5 - Nihilism / Tragic Hero / Despair. Each quotation should be memorised with its context, speaker, and thematic connection for use in the exam.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best as a consolidation session after the main teaching of the play - ideally in the revision period.',
    'The quote recall starter is an honest diagnostic - use it to identify class-wide gaps and target revision accordingly.',
    'Emphasise that AQA does not require exact quotation - close paraphrase is acceptable - but exact quotations demonstrate stronger preparation.',
    'The timed paragraph practice is essential exam preparation. 8 minutes per paragraph reflects the pace needed for the actual exam.',
    'The flashcard activity creates a tangible revision resource students can take home.',
    'Consider displaying the model Grade 8/9 paragraph permanently in the classroom as a benchmark.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Word-level language analysis',
    'AO3: Context integration',
    'Exam technique',
    'Quotation recall and deployment',
  ],
}

// ─── Lesson 10: Exam Practice - Writing a Grade 8/9 Macbeth Essay ───────────

const lesson10: LessonPlan = {
  id: 'macbeth-10-exam-practice',
  title: 'Exam Practice: Writing a Grade 8/9 Macbeth Essay',
  text: 'Macbeth',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the structure and demands of the AQA GCSE English Literature Macbeth question.',
    'Practise planning a response that addresses the extract and the wider play.',
    'Develop the skill of writing analytical paragraphs that integrate AO1, AO2, AO3, and AO4.',
    'Self-assess and improve a response using the AQA mark scheme descriptors for Bands 5 and 6.',
  ],
  successCriteria: [
    'I can decode an AQA Macbeth question and identify what it is really asking.',
    'I can plan a response in under 5 minutes that covers the extract AND the wider play.',
    'I can write at least three analytical paragraphs in 30 minutes that address all four AOs.',
    'I can self-assess my work using the AQA mark scheme and identify two specific improvements.',
  ],
  keywords: [
    'AO1',
    'AO2',
    'AO3',
    'AO4',
    'extract question',
    'wider play',
    'mark scheme',
    'band descriptors',
  ],
  starterActivity: {
    title: 'Decoding the Question',
    duration: '8 minutes',
    instructions:
      'Display a sample AQA Macbeth question: "Starting with this extract, how does Shakespeare present the theme of ambition in Macbeth? Write about: how Shakespeare presents ambition in this extract; how Shakespeare presents ambition in the play as a whole." Students highlight key instruction words: "starting with" (extract first), "how does Shakespeare present" (focus on methods, not just content), "in this extract" (AO1 + AO2 focus), "in the play as a whole" (wider text knowledge + AO3 opportunity). Teacher models how to decode the question and identifies common traps: (1) Only writing about the extract, (2) Retelling the story, (3) Not analysing language.',
    differentiation: {
      support:
        'Provide a question-decoding template with prompts: "The key instruction is... The focus is... I must write about..."',
      core: 'Students decode independently and note the AOs they need to address.',
      stretch:
        'Students rewrite the question in their own words and identify which AO each part of the question targets.',
    },
    resources: [
      'Sample exam question slide',
      'Question-decoding template (support tier)',
      'AO summary card',
    ],
  },
  mainActivities: [
    {
      title: 'Planning Under Pressure: The 5-Minute Plan',
      duration: '12 minutes',
      instructions:
        'Teacher models a 5-minute planning technique: (1) Read the extract twice - once for content, once for language features (2 minutes), (2) Identify 3-4 quotations from the extract to analyse (1 minute), (3) Identify 2-3 moments from the wider play that link to the same theme (1 minute), (4) Decide on paragraph order - teacher recommends: 2 extract paragraphs followed by 2 wider play paragraphs (1 minute). Students then practise planning a response to the sample question using this method. Teacher circulates and checks plans. Key message: the plan is your roadmap - without it, responses lose focus and structure.',
      differentiation: {
        support:
          'Provide a planning template with boxes for each step and suggested wider play moments.',
        core: 'Students plan independently using the 5-minute method.',
        stretch:
          'Students plan an additional "conceptualised opening" that immediately establishes a critical argument (e.g., "Shakespeare presents ambition as a corrupting force that...").',
      },
      resources: ['Sample extract (printed)', 'Planning template', 'Timer'],
    },
    {
      title: 'Timed Writing: 30 Minutes',
      duration: '32 minutes',
      instructions:
        'Students write their response under timed conditions. Teacher displays a countdown timer. During writing, teacher circulates silently, noting common issues for the plenary. Students should aim for: (1) A brief conceptualised introduction (2-3 sentences), (2) Two paragraphs on the extract with close language analysis (AO2) and embedded quotations (AO1), (3) Two paragraphs on the wider play with context (AO3) and structural points, (4) Careful SPaG throughout (AO4). At the 25-minute mark, teacher gives a "5 minutes remaining" warning and advises students to write a concluding sentence if they have not already. Remind students: 4 marks are available for AO4 - proofread in the final 2 minutes.',
      differentiation: {
        support:
          'Provide a paragraph-by-paragraph structure scaffold with sentence starters for each paragraph.',
        core: 'Students write independently under timed conditions.',
        stretch:
          'Students aim for a "conceptualised" response that threads a critical argument through every paragraph (e.g., every paragraph links back to the idea that ambition is presented as a destructive force).',
      },
      resources: [
        'Timer (30 minutes)',
        'Exam booklets or lined paper',
        'Structure scaffold (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Self-Assessment Against the Mark Scheme',
    duration: '8 minutes',
    instructions:
      'Display simplified Band 5 (Grade 7) and Band 6 (Grade 8/9) descriptors. Students read their own response and highlight evidence of: (1) AO1 - relevant textual references (yellow), (2) AO2 - analysis of language/structure/form (green), (3) AO3 - context linked to the text (blue), (4) AO4 - accurate SPaG and terminology (pink). Students then identify TWO specific improvements they would make if they could rewrite their response. Write these on a sticky note and attach to their essay. Teacher collects for marking.',
    differentiation: {
      support: 'Provide a simplified self-assessment checklist with yes/no questions for each AO.',
      core: 'Students self-assess using the band descriptors and identify improvements.',
      stretch:
        'Students compare their response to the Band 6 descriptors specifically and identify what would push them from Band 5 to Band 6.',
    },
  },
  homework:
    'Rewrite ONE paragraph from your timed response, incorporating the two improvements you identified. Bring both versions to the next lesson for comparison.',
  worksheetQuestions: [
    {
      question:
        'What are the four Assessment Objectives for AQA GCSE English Literature, and how many marks is each worth in the Macbeth question?',
      lines: 6,
      modelAnswer:
        'AO1 (12 marks): Read, understand, and respond to texts using textual references to support interpretations. AO2 (12 marks): Analyse the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology. AO3 (6 marks): Show understanding of the relationships between texts and the contexts in which they were written. AO4 (4 marks): Use a range of vocabulary and sentence structures for clarity, purpose, and effect, with accurate spelling and punctuation. Total: 34 marks (plus 4 for AO4).',
      marks: 4,
    },
    {
      question:
        'What is the difference between a Band 5 (Grade 7) and a Band 6 (Grade 8/9) response?',
      lines: 5,
      modelAnswer:
        'A Band 5 response shows "thoughtful, developed" engagement with the text, using "apt" references and "clear, relevant" analysis. A Band 6 response shows "critical, exploratory, conceptualised" engagement, using "judicious" references and analysis that is "convincing" and offers "alternative interpretations." The key difference is the level of sophistication: Band 6 responses thread a critical argument through the essay, consider multiple perspectives, and analyse language with precision and originality, rather than making individual points in isolation.',
      marks: 4,
    },
    {
      question:
        'Why is it important to write about both the extract AND the wider play in your response?',
      lines: 4,
      modelAnswer:
        'The question explicitly asks for both: "in this extract" and "in the play as a whole." Writing only about the extract limits access to marks because it prevents you from demonstrating wider textual knowledge and restricts AO3 opportunities. Wider play references also allow you to track how a theme or character develops across the text, which is a structural (AO2) skill that examiners reward. A balanced response typically includes two extract paragraphs and two wider play paragraphs.',
      marks: 3,
    },
    {
      question:
        'Write a model opening paragraph for the following question: "How does Shakespeare present the theme of guilt in Macbeth?"',
      lines: 6,
      modelAnswer:
        "Shakespeare presents guilt as an inescapable, consuming force that destroys those who transgress the moral and divine order. Throughout the play, guilt manifests both psychologically - through hallucinations, paranoia, and madness - and supernaturally, blurring the boundary between the internal conscience and external punishment. In a Jacobean context, this reflects the belief that sin against God's anointed king would invite divine retribution, and Shakespeare uses the motif of blood - from the dagger vision to Lady Macbeth's obsessive hand-washing - to trace guilt's relentless, spreading stain across the entire play.",
      marks: 4,
    },
    {
      question:
        'List three common mistakes students make in the Macbeth exam and explain how to avoid each one.',
      lines: 6,
      modelAnswer:
        '(1) Retelling the story instead of analysing - avoid this by always asking "how does Shakespeare present..." and focusing on methods (language, structure, form) rather than plot. (2) Writing about context in a separate paragraph instead of integrating it - avoid this by weaving contextual points into your analysis (e.g., "A Jacobean audience would have understood... because..."). (3) Only writing about the extract and neglecting the wider play - avoid this by planning 2 extract + 2 wider play paragraphs before you start writing. These three errors are the most common reasons students score Band 3-4 instead of Band 5-6.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson works best near the end of the Macbeth unit or during the revision period.',
    'The 30-minute timed write reflects roughly the time students will have in the actual AQA exam (approximately 50-55 minutes for the full Shakespeare question, minus reading and planning time).',
    'Circulate silently during the timed write - avoid interrupting unless a student is visibly stuck.',
    'The self-assessment activity is crucial: students who can accurately assess their own work improve faster.',
    'Consider collecting the timed responses for formal assessment and returning them with WWW/EBI feedback.',
    'If the class needs more support, split this lesson across two sessions: planning and modelling in Lesson 10a, timed writing in Lesson 10b.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context integration',
    'AO4: SPaG and terminology',
    'Exam technique',
    'Timed writing',
    'Self-assessment',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const macbethLessons: LessonPlan[] = [
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
]
