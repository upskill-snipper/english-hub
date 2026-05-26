// @ts-nocheck
// ─── Romeo and Juliet Lesson Plans ──────────────────────────────────────────
//
// 10 GCSE-level lessons covering Shakespeare's Romeo and Juliet.
// All original content - no exam board copyrighted material.

import type { LessonPlan } from './macbeth-lessons'

// ─── Lesson 1: Prologue and Fate ────────────────────────────────────────────

const lesson1: LessonPlan = {
  id: 'rj-01-prologue-fate',
  title: 'Prologue and Fate: Examining the Sonnet Prologue',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the structure and language of the Prologue as a Shakespearean sonnet.',
    'Explore how Shakespeare establishes the theme of fate from the opening lines.',
    'Understand how the Prologue functions as a dramatic device, creating tension through foreknowledge.',
  ],
  successCriteria: [
    'I can identify the sonnet form (14 lines, iambic pentameter, rhyme scheme ABAB CDCD EFEF GG) and explain its significance.',
    'I can analyse at least two quotations from the Prologue that introduce the theme of fate.',
    'I can explain why Shakespeare reveals the ending at the start and evaluate its effect on the audience.',
  ],
  keywords: [
    'prologue',
    'sonnet',
    'iambic pentameter',
    'fate',
    'star-crossed',
    'foreshadowing',
    'dramatic irony',
    'tragedy',
  ],
  starterActivity: {
    title: 'Predicting the Plot',
    duration: '8 minutes',
    instructions:
      'Display the phrase "star-crossed lovers" on the board. Students discuss in pairs: what does "star-crossed" mean? What might it suggest about the ending of a love story? Collect responses and introduce the idea that Elizabethan audiences believed the stars controlled human destiny. Then reveal: Shakespeare tells the audience the ending before the play even begins. Why would a playwright do this?',
    differentiation: {
      support:
        'Provide a definition of "star-crossed" and a sentence starter: "This phrase suggests the lovers will..."',
      core: 'Students discuss and record their interpretation independently before feedback.',
      stretch:
        'Students consider how the concept of fate in Elizabethan England differs from modern ideas of free will and choice.',
    },
    resources: ['Keyword slide', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Sonnet Structure Analysis',
      duration: '18 minutes',
      instructions:
        'Distribute the full text of the Prologue. Teacher models the sonnet form: 14 lines, three quatrains and a couplet, ABAB CDCD EFEF GG rhyme scheme, iambic pentameter. Students annotate the Prologue, marking the rhyme scheme, identifying stressed/unstressed syllables in two lines, and highlighting key vocabulary. In pairs, students discuss: why would Shakespeare choose a love poem form (sonnet) to open a tragedy? Feed back as a class.',
      differentiation: {
        support:
          'Provide a pre-annotated version with the rhyme scheme marked; students focus on vocabulary and meaning.',
        core: 'Students annotate independently, identifying both structural features and key language choices.',
        stretch:
          'Students compare the Prologue sonnet to a Petrarchan sonnet and evaluate why Shakespeare chose his own form.',
      },
      resources: [
        'Prologue text handout',
        'Sonnet structure reference sheet',
        'Coloured highlighters',
      ],
    },
    {
      title: 'Language Analysis: Fate and Conflict',
      duration: '22 minutes',
      instructions:
        'Students work through four key quotations from the Prologue: (1) "star-crossed lovers", (2) "death-marked love", (3) "fatal loins", (4) "ancient grudge". For each quotation, students complete a table: what does it literally mean? What does it suggest about the play? What technique is Shakespeare using? Teacher models the first example. Students then write one analytical paragraph on how Shakespeare uses the Prologue to establish fate as a controlling force, using PEE structure. Share examples under the visualiser.',
      differentiation: {
        support:
          'Provide a completed first row of the table and sentence starters for the paragraph: "Shakespeare presents fate as..."',
        core: 'Students complete the table and write a full PEE paragraph independently.',
        stretch:
          'Students write a second paragraph evaluating whether the Prologue suggests the lovers have any agency or are entirely controlled by fate.',
      },
      resources: ['Quotation analysis table', 'PEE paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Why Reveal the Ending?',
    duration: '7 minutes',
    instructions:
      'Students answer: "Why does Shakespeare reveal that Romeo and Juliet will die before the play begins? What effect does this have on the audience?" Collect responses to assess understanding of dramatic irony and foreshadowing.',
    differentiation: {
      support:
        'Sentence starter: "Shakespeare reveals the ending because he wants the audience to..."',
      core: 'Full written response expected with reference to a specific technique or quotation.',
      stretch: 'Students link their answer to Elizabethan beliefs about fate and predestination.',
    },
  },
  homework:
    'Write a paragraph explaining how the Prologue prepares the audience for a tragedy. Include at least two quotations and explain their effects.',
  worksheetQuestions: [
    {
      question: 'What is the structure of the Prologue and why is it significant?',
      lines: 5,
      modelAnswer:
        "The Prologue is written as a Shakespearean sonnet: 14 lines of iambic pentameter with the rhyme scheme ABAB CDCD EFEF GG. The sonnet form is traditionally associated with love poetry, so Shakespeare's choice to use it for a story that ends in death creates an immediate tension between love and tragedy. The regular rhythm and tight structure also suggest the inevitability of fate - the lovers' story is already written and cannot be changed.",
      marks: 4,
    },
    {
      question:
        'Analyse the phrase "star-crossed lovers" and explain what it reveals about the play.',
      lines: 5,
      modelAnswer:
        'The compound adjective "star-crossed" combines astrology with the idea of being thwarted or opposed. In Elizabethan England, the stars were believed to control human destiny, so "star-crossed" suggests that Romeo and Juliet\'s love is doomed by forces beyond their control. The word "crossed" implies conflict and obstruction. Shakespeare establishes from the very first scene that the lovers\' fate is sealed, creating dramatic irony as the audience watches them fall in love knowing they will die.',
      marks: 4,
    },
    {
      question: 'How does the Prologue create dramatic irony?',
      lines: 5,
      modelAnswer:
        'Dramatic irony occurs when the audience knows something the characters do not. The Prologue reveals that Romeo and Juliet will die - "a pair of star-crossed lovers take their life" - before the audience meets them. This means that every moment of joy and hope in the play is undercut by the audience\'s knowledge of the tragic ending. Shakespeare uses this technique to heighten tension and encourage the audience to focus not on what happens, but on why and how it happens.',
      marks: 4,
    },
    {
      question: 'Explain how the phrase "death-marked love" contributes to the themes of the play.',
      lines: 5,
      modelAnswer:
        'The oxymoronic phrase "death-marked love" juxtaposes two opposing ideas: love, which is associated with life and joy, and death. The word "marked" suggests something branded or destined - the love is permanently stamped with death from the outset. This establishes the central paradox of the play: that love and death are inseparable. Shakespeare suggests that in a world poisoned by hatred and feuding, love can only end in destruction.',
      marks: 4,
    },
    {
      question:
        'Why might Shakespeare have chosen to write the Prologue as a sonnet rather than in blank verse?',
      lines: 6,
      modelAnswer:
        "Shakespeare chose the sonnet form because it is the traditional form of love poetry, immediately signalling that love will be central to the play. However, the content of this particular sonnet is about death, violence, and fate, which creates a deliberate tension between form and content. The rigid structure of the sonnet - 14 lines, strict metre, fixed rhyme - also mirrors the inescapable nature of fate: just as the poem cannot deviate from its form, the lovers cannot escape their destiny. This is a powerful opening statement of Shakespeare's authorial intention.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is an introductory lesson; students do not need prior knowledge of the play.',
    "Ensure students understand the sonnet form before moving to language analysis - this underpins later work on Romeo and Juliet's shared sonnet in Act 1, Scene 5.",
    'The Prologue is a highly efficient text for teaching AO2 (methods) and AO3 (context) together.',
    'Collect exit tickets to identify students who need additional support with analytical writing.',
  ],
  targetedSkills: [
    'AO2: Language and structure analysis',
    'AO3: Context',
    'Close reading',
    'Analytical writing (PEE)',
    'Dramatic conventions',
  ],
}

// ─── Lesson 2: Act 1 - The Feud and the Party ──────────────────────────────

const lesson2: LessonPlan = {
  id: 'rj-02-act1-feud-party',
  title: 'Act 1: The Feud and the Party',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shakespeare establishes the Montague-Capulet feud in Act 1, Scene 1.',
    "Explore the significance of the Capulet ball and Romeo and Juliet's first meeting in Act 1, Scene 5.",
    'Examine how Shakespeare uses contrast between violence and love to create dramatic tension.',
  ],
  successCriteria: [
    'I can explain how the opening brawl establishes the theme of conflict and its consequences.',
    'I can analyse the shared sonnet between Romeo and Juliet in Act 1, Scene 5, identifying its significance.',
    'I can evaluate how Shakespeare uses the juxtaposition of love and violence to engage the audience.',
  ],
  keywords: [
    'feud',
    'patriarchy',
    'honour',
    'juxtaposition',
    'shared sonnet',
    'courtly love',
    'Petrarchan',
    'dramatic tension',
  ],
  starterActivity: {
    title: 'Opening Lines: Setting the Tone',
    duration: '7 minutes',
    instructions:
      'Display the opening exchange between Sampson and Gregory (Act 1, Scene 1): "I will push Montague\'s men from the wall, and thrust his maids to the wall." Students discuss in pairs: what does this language reveal about the feud? How does crude, violent language set the tone for the play? Teacher draws out the link between male honour, violence, and patriarchy in Elizabethan society.',
    differentiation: {
      support: 'Provide a modern English paraphrase alongside the original text.',
      core: 'Students annotate the language independently, identifying violent and sexual imagery.',
      stretch:
        "Students consider how the servants' language mirrors the behaviour of their masters and what this suggests about the feud's reach.",
    },
    resources: ['Opening lines slide', 'Glossary handout'],
  },
  mainActivities: [
    {
      title: "The Brawl and the Prince's Warning",
      duration: '18 minutes',
      instructions:
        "Read Act 1, Scene 1 (the brawl and the Prince's speech) aloud as a class with allocated roles. Students then analyse the Prince's threat: \"If ever you disturb our streets again, your lives shall pay the forfeit of the peace.\" In pairs, students create a table comparing the language of the fighting servants with the Prince's authoritative verse. Discuss: what does Shakespeare suggest about the consequences of unchecked violence? How does the Prince represent order?",
      differentiation: {
        support:
          'Provide a pre-completed row of the comparison table; students complete the remaining rows with guidance.',
        core: 'Students complete the comparison table independently and write a summary sentence for each row.',
        stretch:
          "Students link the Prince's role to the Elizabethan concept of the monarch as God's representative and the Great Chain of Being.",
      },
      resources: ['Act 1, Scene 1 text', 'Comparison table worksheet', 'Role allocation cards'],
    },
    {
      title: 'The Shared Sonnet: Love at First Sight',
      duration: '22 minutes',
      instructions:
        'Distribute the text of Romeo and Juliet\'s first exchange (Act 1, Scene 5, lines 92-105). Reveal that this dialogue forms a perfect Shakespearean sonnet split between two speakers. Students annotate the sonnet, identifying: religious imagery ("holy shrine", "pilgrim", "saints"), the shared rhyme scheme, and the volta. Teacher models an analytical paragraph on the religious imagery. Students then write their own PEE paragraph answering: "How does Shakespeare present love as sacred in Romeo and Juliet\'s first meeting?" Share and peer-assess using success criteria.',
      differentiation: {
        support:
          'Provide a glossary of religious terms and a paragraph frame with sentence starters.',
        core: 'Students write a full PEE paragraph independently, embedding quotations.',
        stretch:
          'Students evaluate whether the religious language elevates their love or foreshadows its sacrificial end.',
      },
      resources: [
        'Act 1, Scene 5 extract',
        'Sonnet annotation guide',
        'PEE paragraph frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Love vs Violence: Class Debate',
    duration: '8 minutes',
    instructions:
      'Quick-fire debate: "In Act 1, is Shakespeare more interested in love or violence?" Students vote with hands, then three students from each side justify their position using evidence from the lesson. Teacher summarises: Shakespeare deliberately juxtaposes both to show that love and violence are inseparable in Verona.',
    differentiation: {
      support:
        'Students can refer to their notes and use a sentence frame: "I think Shakespeare is more interested in... because..."',
      core: 'Students justify their position with a specific quotation.',
      stretch:
        'Students argue that both are equally important and explain how they are interconnected.',
    },
  },
  homework:
    'Write a paragraph comparing the language of violence in Act 1, Scene 1 with the language of love in Act 1, Scene 5. What does this contrast reveal about Verona?',
  worksheetQuestions: [
    {
      question: 'How does Shakespeare establish the feud in the opening scene of the play?',
      lines: 5,
      modelAnswer:
        "Shakespeare establishes the feud through the servants' aggressive, crude language and their eagerness to fight. Sampson and Gregory speak in sexual and violent puns, showing that the hatred between the families has infected every level of society, not just the nobility. The brawl escalates rapidly from insults to swordplay, suggesting the feud is volatile and uncontrollable. The Prince's intervention - threatening death for further disturbances - shows that the feud endangers the entire city.",
      marks: 4,
    },
    {
      question:
        'Analyse the significance of Romeo and Juliet sharing a sonnet in their first meeting.',
      lines: 6,
      modelAnswer:
        'The shared sonnet is significant because it shows Romeo and Juliet\'s instant compatibility - they complete each other\'s lines, share the rhyme scheme, and together create a perfect 14-line poem. The sonnet form is associated with love poetry, so Shakespeare uses it to signal that their love is genuine and poetic. The religious imagery ("holy shrine", "pilgrim", "prayer") elevates their love to something sacred, contrasting sharply with the violence that surrounds them. However, since the Prologue has already revealed their fate, the beauty of this moment is undercut by dramatic irony.',
      marks: 4,
    },
    {
      question: 'What is the role of the Prince in Act 1, Scene 1?',
      lines: 5,
      modelAnswer:
        'The Prince represents law, order, and authority in Verona. His speech interrupts the chaos of the brawl and re-establishes control through the threat of execution: "If ever you disturb our streets again, your lives shall pay the forfeit of the peace." His measured, authoritative blank verse contrasts with the servants\' prose, reinforcing his status. Shakespeare uses the Prince to show that the feud threatens social order, and his warning foreshadows the tragic consequences that will eventually force peace upon the families.',
      marks: 4,
    },
    {
      question: 'Explain how Shakespeare uses religious imagery in Act 1, Scene 5.',
      lines: 5,
      modelAnswer:
        'Shakespeare uses an extended religious metaphor in Romeo and Juliet\'s first exchange. Romeo describes Juliet as a "holy shrine" and himself as a "pilgrim" who wishes to worship her. This language elevates their attraction beyond physical desire to something spiritual and pure. The imagery of "prayer" and "saints" suggests that their love is blessed, which contrasts tragically with the family feud that will destroy it. Shakespeare may also be suggesting that their love transcends the earthly hatred of their families.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The opening lines contain sexual and violent puns - address this directly and maturely with the class, as it is essential to understanding the tone.',
    'The shared sonnet in Act 1, Scene 5 is one of the most analytically rich passages in the play. Ensure students can identify it as a sonnet before analysing its content.',
    'Link back to the Prologue sonnet from Lesson 1 - Shakespeare bookends Act 1 with sonnets about love and fate.',
    'This lesson covers a lot of ground; if time is tight, prioritise the shared sonnet activity as it yields the richest analysis.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context (patriarchy, honour)',
    'Comparative analysis',
    'Analytical writing',
  ],
}

// ─── Lesson 3: Act 2 - The Balcony Scene and Secret Marriage ────────────────

const lesson3: LessonPlan = {
  id: 'rj-03-act2-balcony-marriage',
  title: 'Act 2: The Balcony Scene and Secret Marriage',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the language and imagery of the balcony scene (Act 2, Scene 2) in detail.',
    'Explore how Shakespeare presents Juliet as an unconventional Elizabethan woman in this scene.',
    'Evaluate the significance of the secret marriage and its role in accelerating the tragedy.',
  ],
  successCriteria: [
    "I can analyse Romeo's use of light and celestial imagery to describe Juliet.",
    'I can explain how Juliet challenges Elizabethan gender norms through her language and actions.',
    'I can write an analytical paragraph on a key quotation from Act 2, Scene 2 using embedded evidence.',
  ],
  keywords: [
    'soliloquy',
    'imagery',
    'celestial',
    'Petrarchan conventions',
    'patriarchy',
    'subversive',
    'clandestine',
    'dramatic irony',
  ],
  starterActivity: {
    title: "What's in a Name?",
    duration: '7 minutes',
    instructions:
      'Display the quotation: "What\'s in a name? That which we call a rose by any other word would smell as sweet." Ask students: what is Juliet arguing here? Do names matter? Students discuss in pairs, then feed back. Teacher explains that Juliet is challenging the entire basis of the feud - the idea that a name (Montague or Capulet) defines a person\'s identity and loyalties. Link to Elizabethan ideas about family honour and duty.',
    differentiation: {
      support:
        'Provide a modern English paraphrase and a sentence starter: "Juliet is arguing that..."',
      core: "Students explain Juliet's argument in their own words and consider whether they agree.",
      stretch:
        "Students evaluate whether Juliet's argument is idealistic or radical, and what it reveals about her character.",
    },
    resources: ['Quotation slide', 'Discussion prompts'],
  },
  mainActivities: [
    {
      title: "Close Analysis: Romeo's Soliloquy",
      duration: '20 minutes',
      instructions:
        "Read Romeo's soliloquy from the start of the balcony scene: \"But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.\" Students annotate the speech, identifying: light vs dark imagery, celestial metaphors (sun, moon, stars), and hyperbolic language. In pairs, students discuss: is Romeo's language genuine passion or Petrarchan exaggeration? Teacher introduces the concept of Petrarchan conventions (idealising the beloved) and asks students to consider whether Shakespeare is celebrating or gently mocking Romeo's style. Students write a PEE paragraph analysing Romeo's use of light imagery.",
      differentiation: {
        support:
          'Provide a pre-annotated text highlighting key imagery; students focus on explaining effects.',
        core: 'Students annotate independently and write a full PEE paragraph with embedded quotations.',
        stretch:
          "Students compare Romeo's language here to his earlier descriptions of Rosaline and evaluate what the difference reveals about the nature of his love.",
      },
      resources: [
        "Act 2, Scene 2 extract (Romeo's soliloquy)",
        'Petrarchan conventions reference card',
        'Annotation guide',
      ],
    },
    {
      title: "Juliet's Voice: Gender and Agency",
      duration: '20 minutes',
      instructions:
        'Focus on Juliet\'s dialogue in the balcony scene. Highlight three key moments: (1) "Deny thy father and refuse thy name" - asking Romeo to reject his identity; (2) "What\'s in a name?" - questioning the basis of the feud; (3) "If that thy bent of love be honourable, thy purpose marriage, send me word tomorrow" - Juliet taking control of the relationship by proposing marriage. Students complete a character analysis grid: what does each quotation reveal about Juliet? How does she challenge Elizabethan expectations of women? Teacher contextualises: Elizabethan women were expected to be obedient to fathers and passive in courtship. Students then write a paragraph: "How does Shakespeare present Juliet as a subversive character in Act 2, Scene 2?"',
      differentiation: {
        support:
          'Provide the character analysis grid with one completed example and sentence starters for the paragraph.',
        core: 'Students complete the grid and paragraph independently.',
        stretch:
          "Students evaluate whether Juliet's agency is empowering or ultimately contributes to her tragic end.",
      },
      resources: [
        "Act 2, Scene 2 extract (Juliet's lines)",
        'Character analysis grid',
        'Elizabethan gender roles reference card',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Secret Marriage: Help or Hindrance?',
    duration: '8 minutes',
    instructions:
      'Quick discussion: Romeo and Juliet marry in secret at the end of Act 2. Is this an act of love or an act of recklessness? Students write three bullet points arguing one side, then share. Teacher connects to the theme of fate: does the secret marriage seal their doom, or is it their one attempt to defy it?',
    differentiation: {
      support: 'Students choose from provided arguments and add one of their own.',
      core: 'Students generate their own arguments with textual references.',
      stretch:
        'Students consider the role of Friar Lawrence and evaluate his motivations for agreeing to the marriage.',
    },
  },
  homework:
    'Write a comparative paragraph analysing how Romeo and Juliet each speak about love in Act 2, Scene 2. Who is more practical and who is more idealistic?',
  worksheetQuestions: [
    {
      question: "Analyse Romeo's use of light imagery in the balcony scene.",
      lines: 6,
      modelAnswer:
        'Romeo uses an extended metaphor of light to describe Juliet: "It is the east, and Juliet is the sun." By comparing her to the sun, he suggests she brings warmth, life, and illumination to his world. He continues: "Arise, fair sun, and kill the envious moon" - the moon represents the pale, inferior beauty of Rosaline, whom Juliet has replaced. The celestial imagery elevates Juliet to something divine and unreachable, following Petrarchan conventions of idealising the beloved. However, this language also foreshadows tragedy: stars and celestial bodies are linked to fate, and the Prologue has already told us they are "star-crossed".',
      marks: 4,
    },
    {
      question: 'How does Juliet challenge Elizabethan expectations of women in Act 2, Scene 2?',
      lines: 6,
      modelAnswer:
        'Juliet challenges Elizabethan gender norms in several ways. She questions the authority of family names - "What\'s in a name?" - which implicitly challenges her father\'s authority and the patriarchal structure of Verona. She is direct and practical about love, warning Romeo against swearing by the "inconstant moon" and asking him to prove his sincerity. Most radically, she effectively proposes marriage: "If that thy bent of love be honourable, thy purpose marriage, send me word tomorrow." In Elizabethan society, marriages were arranged by fathers, and women were expected to be passive. Juliet seizes control of her own destiny, which Shakespeare presents as both courageous and dangerous.',
      marks: 4,
    },
    {
      question: 'What is the significance of Romeo comparing Juliet to the sun?',
      lines: 5,
      modelAnswer:
        'The metaphor "Juliet is the sun" is significant because the sun is the most powerful source of light and life. It suggests Juliet has replaced everything else in Romeo\'s world - she is the centre around which he orbits. The contrast with the moon (representing Rosaline) implies that his previous love was pale and reflected, while Juliet is genuine and radiant. However, the imagery also carries danger: the sun rises and sets, suggesting the transient nature of their happiness, and celestial imagery links to the "star-crossed" fate established in the Prologue.',
      marks: 4,
    },
    {
      question:
        'Why does Shakespeare have Romeo and Juliet marry in secret? What is the dramatic purpose?',
      lines: 5,
      modelAnswer:
        'The secret marriage serves multiple dramatic purposes. It accelerates the plot, binding Romeo and Juliet together before the violence of Act 3 tears them apart. It raises the stakes: once married, Juliet cannot marry Paris without committing bigamy, which makes her later dilemma far more desperate. It also deepens the tragedy: their love must be hidden because the feud makes it impossible to be open, which leads directly to the miscommunications that cause their deaths. Shakespeare uses the secret marriage to show that the feud corrupts everything, even forcing love into secrecy.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The balcony scene is the most frequently examined passage from Romeo and Juliet. Ensure students can write about it with precision and depth.',
    "Emphasise the contrast between Romeo's poetic idealism and Juliet's practical realism - this is a common exam angle.",
    'The Petrarchan convention context is essential for AO3. Students should understand that Shakespeare is both using and subverting the tradition.',
    "Link forward to Lesson 6 (Juliet's Dilemma) to show how Juliet's agency here is tested and constrained later in the play.",
  ],
  targetedSkills: [
    'AO1: Textual reference and inference',
    'AO2: Language analysis (imagery)',
    'AO3: Context (gender, patriarchy)',
    'Character analysis',
    'Analytical writing',
  ],
}

// ─── Lesson 4: Mercutio and Tybalt - Conflict and Consequence ───────────────

const lesson4: LessonPlan = {
  id: 'rj-04-mercutio-tybalt',
  title: 'Mercutio and Tybalt: Conflict and Consequence',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the characters of Mercutio and Tybalt as dramatic foils and catalysts for tragedy.',
    'Explore the themes of masculinity, honour, and violence through their confrontation in Act 3, Scene 1.',
    "Evaluate how Shakespeare uses Mercutio's death to shift the tone of the play from comedy to tragedy.",
  ],
  successCriteria: [
    'I can explain how Mercutio and Tybalt represent different aspects of the theme of conflict.',
    'I can analyse Mercutio\'s "A plague on both your houses" and explain its significance to the play as a whole.',
    'I can write an analytical paragraph on how Shakespeare presents toxic masculinity and honour culture.',
  ],
  keywords: [
    'foil',
    'catalyst',
    'masculinity',
    'honour',
    'hot-blooded',
    'peripeteia',
    'dramatic function',
    'curse',
  ],
  starterActivity: {
    title: 'Honour and Masculinity',
    duration: '7 minutes',
    instructions:
      'Display two quotations: Tybalt\'s "What, drawn, and talk of peace? I hate the word" and Mercutio\'s "O calm, dishonourable, vile submission!" Students rank these on a spectrum from "controlled" to "reckless." Discuss: what do these quotations reveal about how Elizabethan men were expected to behave? Introduce the concept of honour culture and the pressure on men to fight rather than appear weak.',
    differentiation: {
      support: 'Provide modern English paraphrases and a glossary of key terms.',
      core: "Students explain what each quotation reveals about the speaker's character and values.",
      stretch:
        'Students consider how these attitudes connect to the feud and whether the feud creates toxic masculinity or vice versa.',
    },
    resources: ['Quotation slide', 'Spectrum line on board'],
  },
  mainActivities: [
    {
      title: 'Character Study: Mercutio and Tybalt as Foils',
      duration: '18 minutes',
      instructions:
        'Students complete a dual character profile for Mercutio and Tybalt. For each character, they identify: role in the plot, key quotations (at least two each), relationship to Romeo, and dramatic function. Teacher explains the concept of a "foil" - a character who contrasts with another to highlight their qualities. Students then answer: How is Mercutio a foil to Romeo? How is Tybalt a foil to Benvolio? Students create a Venn diagram showing similarities and differences between Mercutio and Tybalt.',
      differentiation: {
        support:
          'Provide a partially completed character profile with quotations supplied; students explain their significance.',
        core: 'Students complete profiles independently, selecting their own quotations from the text.',
        stretch:
          'Students evaluate which character is more responsible for the tragedy and justify their answer.',
      },
      resources: [
        'Character profile worksheet',
        'Act 1 and Act 3 extracts',
        'Venn diagram template',
      ],
    },
    {
      title: 'Close Analysis: Act 3, Scene 1 - The Fight',
      duration: '22 minutes',
      instructions:
        "Read Act 3, Scene 1 (from Tybalt's challenge to Mercutio's death) aloud with allocated roles. Focus on three key moments: (1) Romeo's refusal to fight: \"I do protest I never injured thee, but love thee better than thou canst devise\"; (2) Mercutio's intervention and death: \"A plague on both your houses!\"; (3) Romeo's reaction: \"O, I am fortune's fool!\" For each moment, students analyse: what does it reveal about the character? How does it advance the plot? What themes does it explore? Students write an analytical paragraph on Mercutio's dying words and their significance to the play as a whole.",
      differentiation: {
        support: 'Provide a scaffolded analysis table with guiding questions for each moment.',
        core: "Students analyse all three moments and write a full paragraph on Mercutio's dying words.",
        stretch:
          'Students evaluate whether Romeo is right to call himself "fortune\'s fool" or whether his choices, not fate, cause the tragedy.',
      },
      resources: ['Act 3, Scene 1 text', 'Analysis table', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Who is to Blame?',
    duration: '8 minutes',
    instructions:
      "Students rank the following in order of responsibility for Mercutio's death: Romeo, Tybalt, Mercutio himself, the feud, fate. Students justify their top choice to a partner, then share with the class. Teacher summarises: Shakespeare distributes blame to show that violence in Verona is systemic, not individual.",
    differentiation: {
      support: 'Provide reasons for each option; students select and rank.',
      core: 'Students generate their own justifications.',
      stretch:
        'Students argue that the ranking itself is impossible because Shakespeare deliberately makes blame ambiguous.',
    },
  },
  homework:
    "Write a paragraph explaining how Shakespeare uses Mercutio's death to change the direction of the play. What shifts after Act 3, Scene 1?",
  worksheetQuestions: [
    {
      question: "What is Mercutio's dramatic function in the play?",
      lines: 5,
      modelAnswer:
        "Mercutio serves multiple dramatic functions. As Romeo's closest friend, he provides a foil: his witty, cynical view of love contrasts with Romeo's romantic idealism. His Queen Mab speech in Act 1 mocks the idea of dreams and love, grounding the play in reality. Most critically, his death in Act 3, Scene 1 is the catalyst for the tragedy - it forces Romeo to kill Tybalt, leading to banishment and the chain of events that ends in death. His dying curse, \"A plague on both your houses,\" indicts both families and reinforces Shakespeare's message that the feud destroys everyone it touches.",
      marks: 4,
    },
    {
      question: 'Analyse the significance of Mercutio\'s line "A plague on both your houses."',
      lines: 5,
      modelAnswer:
        "This line is significant because Mercutio - who is neither Montague nor Capulet - becomes a victim of a feud that is not his own. The word \"plague\" suggests a disease that infects and kills indiscriminately, implying that the feud is a sickness destroying all of Verona. The repetition of this curse (he says it three times as he dies) emphasises his anger and pain. It also functions as a prophecy: the feud will indeed claim more lives, including Romeo and Juliet's. Shakespeare uses Mercutio's death to show the audience that the feud's consequences extend far beyond the two families.",
      marks: 4,
    },
    {
      question: 'How does Shakespeare present Tybalt as a character driven by honour and violence?',
      lines: 5,
      modelAnswer:
        'Tybalt is presented as the embodiment of the feud\'s aggression. His first line - "What, drawn, and talk of peace? I hate the word" - immediately establishes him as someone who rejects peace and craves conflict. He is described as the "Prince of Cats," suggesting he is quick, dangerous, and predatory. His insistence on challenging Romeo at the ball and again in Act 3 shows that he values family honour above all else, including his own life. Shakespeare uses Tybalt to represent the destructive cycle of honour culture, where perceived insults must be avenged with violence, regardless of the consequences.',
      marks: 4,
    },
    {
      question:
        'Explain the significance of Romeo\'s exclamation "O, I am fortune\'s fool!" after killing Tybalt.',
      lines: 5,
      modelAnswer:
        'Romeo\'s exclamation is significant because it directly references the theme of fate. "Fortune\'s fool" suggests that Romeo sees himself as a plaything of destiny, manipulated by forces beyond his control. This connects to the Prologue\'s description of the lovers as "star-crossed." However, the audience can also see that Romeo\'s own choices - his decision to intervene in the fight, his impulsive killing of Tybalt - have contributed to this moment. Shakespeare creates ambiguity: is Romeo genuinely controlled by fate, or is he using fate as an excuse for his own reckless actions? This tension between fate and free will is central to the play.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Act 3, Scene 1 is the peripeteia (turning point) of the play. Ensure students understand this structural term for exam purposes.',
    'The theme of masculinity and honour is highly relevant to AO3 and is often underexplored. Encourage students to think about how the pressure to fight drives the tragedy.',
    "Mercutio's Queen Mab speech (Act 1, Scene 4) is useful additional context but is not the focus of this lesson - it can be revisited in Lesson 8 (Love as a Theme).",
    'The "who is to blame" activity works well as preparation for essay questions about responsibility.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language and methods analysis',
    'AO3: Context (masculinity, honour)',
    'Character analysis',
    'Evaluative writing',
  ],
}

// ─── Lesson 5: Act 3 - The Turning Point ────────────────────────────────────

const lesson5: LessonPlan = {
  id: 'rj-05-act3-turning-point',
  title: 'Act 3: The Turning Point',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Act 3 functions as the structural turning point (peripeteia) of the tragedy.',
    "Explore Romeo's banishment and its impact on both Romeo and Juliet.",
    'Evaluate how Shakespeare uses Act 3 to accelerate the pace of the tragedy.',
  ],
  successCriteria: [
    'I can explain why Act 3 is the turning point and how the tone shifts from hope to despair.',
    "I can analyse key quotations from Act 3, Scenes 2 and 3 that reveal Romeo and Juliet's reactions to banishment.",
    'I can write analytically about how Shakespeare uses structure to create tragic momentum.',
  ],
  keywords: [
    'peripeteia',
    'banishment',
    'exile',
    'dramatic structure',
    'tragic momentum',
    'hamartia',
    'catharsis',
    'climax',
  ],
  starterActivity: {
    title: 'Before and After',
    duration: '7 minutes',
    instructions:
      'Display a timeline of the play divided in half: before Act 3 and after Act 3. Students work in pairs to list the mood and events of the first half (love, hope, comedy, the ball, the wedding) and predict what the second half will contain. Reveal: Act 3 is the hinge - everything before it moves towards love; everything after it moves towards death. Introduce the term "peripeteia" (the reversal of fortune in a tragedy).',
    differentiation: {
      support: 'Provide event cards that students sort into "before" and "after" categories.',
      core: 'Students generate their own lists and predictions.',
      stretch:
        'Students compare this structure to another Shakespeare tragedy they know and identify a similar turning point.',
    },
    resources: ['Timeline slide', 'Event cards (support tier)'],
  },
  mainActivities: [
    {
      title: "Juliet's Reaction: Act 3, Scene 2",
      duration: '20 minutes',
      instructions:
        "Read Juliet's speech upon learning of Tybalt's death and Romeo's banishment (Act 3, Scene 2). Focus on the oxymora: \"Beautiful tyrant! Fiend angelical! Dove-feathered raven! Wolvish-ravening lamb!\" Students identify and list all the oxymora in the speech. Discuss: what do these contradictions reveal about Juliet's emotional state? Why does she use opposites? Students then analyse Juliet's conclusion: despite everything, she sides with Romeo over her own family. Write a paragraph analysing how Shakespeare uses oxymora to convey Juliet's internal conflict.",
      differentiation: {
        support:
          'Provide a modern English paraphrase and a list of the oxymora with definitions. Students explain the effect of two examples.',
        core: 'Students identify the oxymora independently and write a full analytical paragraph.',
        stretch:
          "Students evaluate whether Juliet's choice to side with Romeo over Tybalt represents strength or the beginning of her tragic downfall.",
      },
      resources: [
        'Act 3, Scene 2 extract',
        'Oxymoron definition card',
        'Paragraph frame (support tier)',
      ],
    },
    {
      title: "Romeo's Despair: Act 3, Scene 3",
      duration: '20 minutes',
      instructions:
        "Read Romeo's reaction to banishment in Friar Lawrence's cell (Act 3, Scene 3). Focus on: \"There is no world without Verona walls, but purgatory, torture, hell itself.\" Students compare Romeo's language here with his language in the balcony scene. Create a comparison table: how has his imagery shifted from celestial and hopeful to infernal and despairing? Discuss: is Romeo's reaction proportionate or excessive? How does the Friar respond? Students write a comparative paragraph analysing the shift in Romeo's language from Act 2 to Act 3.",
      differentiation: {
        support:
          'Provide both quotations side-by-side with key words highlighted; students explain the contrast.',
        core: 'Students select their own quotations from both scenes and write a comparative paragraph.',
        stretch:
          "Students evaluate whether Romeo's extreme reaction to banishment foreshadows his impulsive decision to take his own life in Act 5.",
      },
      resources: [
        'Act 3, Scene 3 extract',
        'Comparison table template',
        'Act 2, Scene 2 extract for reference',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Turning Point: One-Sentence Summary',
    duration: '8 minutes',
    instructions:
      'Students write one sentence summarising why Act 3 is the turning point of the play. Three students share. Teacher models a strong example that incorporates a quotation and subject terminology. Class votes on the best response.',
    differentiation: {
      support: 'Sentence starter: "Act 3 is the turning point because..."',
      core: 'Students write independently, including at least one quotation.',
      stretch: 'Students incorporate the terms "peripeteia" and "hamartia" accurately.',
    },
  },
  homework:
    'Write a paragraph explaining how Shakespeare creates a sense of tragic inevitability in Act 3. Consider how the events of this act make the final outcome unavoidable.',
  worksheetQuestions: [
    {
      question: 'Why is Act 3 considered the turning point of the play?',
      lines: 5,
      modelAnswer:
        'Act 3 is the turning point because it reverses the fortunes of Romeo and Juliet. Before Act 3, the play moves towards love: Romeo and Juliet meet, fall in love, and marry. After Act 3, everything moves towards death: Mercutio and Tybalt are killed, Romeo is banished, and the chain of miscommunications begins. The killings in Act 3, Scene 1 are the peripeteia - the moment when the trajectory of the play shifts from comedy to tragedy. Shakespeare compresses these events into a single day to create a sense of unstoppable momentum.',
      marks: 4,
    },
    {
      question: "Analyse Shakespeare's use of oxymora in Juliet's speech in Act 3, Scene 2.",
      lines: 6,
      modelAnswer:
        'Juliet\'s speech is dense with oxymora: "Beautiful tyrant! Fiend angelical! Dove-feathered raven!" These contradictions reflect her conflicting emotions - Romeo is both her beloved husband and the killer of her cousin Tybalt. Each oxymoron pairs beauty with violence, love with hate, showing that these opposites coexist in Romeo and in her feelings for him. The accumulation of oxymora also mirrors the wider play, where love and death, peace and violence, are constantly intertwined. Shakespeare uses this technique to show that in Verona, nothing can be purely good or purely evil - the feud corrupts everything.',
      marks: 4,
    },
    {
      question: "How does Romeo's language change between Act 2 and Act 3?",
      lines: 5,
      modelAnswer:
        'In Act 2, Romeo uses celestial, light-filled imagery: "Juliet is the sun," "bright angel." His language is hopeful, ecstatic, and elevated. In Act 3, after banishment, his imagery becomes dark and infernal: "There is no world without Verona walls, but purgatory, torture, hell itself." The shift from heaven to hell mirrors the structural shift from love to tragedy. Shakespeare uses this contrast to show how quickly fortune can reverse in the world of the play, and how Romeo\'s emotional extremes - from ecstasy to despair - contribute to his tragic end.',
      marks: 4,
    },
    {
      question:
        "Evaluate whether Romeo's banishment or his impulsiveness is more responsible for the tragedy.",
      lines: 6,
      modelAnswer:
        "Both factors contribute to the tragedy, but they are interconnected. Romeo's impulsiveness leads directly to his banishment: he kills Tybalt in a moment of rage, despite having earlier refused to fight. However, it is the banishment that creates the conditions for the final catastrophe - if Romeo were not exiled, the Friar's plan would be unnecessary, and the fatal miscommunication would not occur. Shakespeare seems to suggest that Romeo's hamartia (tragic flaw) is his impulsiveness, but that fate and circumstance amplify its consequences. The tragedy requires both character and fortune to collide.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson is structurally focused - students need to understand the concept of peripeteia and how Shakespeare builds tragic momentum.',
    "Juliet's oxymoron speech is a high-frequency exam passage. Ensure students can write about it confidently.",
    "The comparison between Romeo's language in Acts 2 and 3 is excellent preparation for comparison-style essay questions.",
    'If students find the concept of dramatic structure abstract, use a graph on the board showing the emotional arc of the play rising in Acts 1-2 and falling in Acts 3-5.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language and structure analysis',
    "AO2: Writer's methods (oxymoron)",
    'Comparative analysis',
    'Structural awareness',
  ],
}

// ─── Lesson 6: Juliet's Dilemma - Loyalty and Defiance ──────────────────────

const lesson6: LessonPlan = {
  id: 'rj-06-juliet-dilemma',
  title: "Juliet's Dilemma: Loyalty and Defiance",
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Shakespeare presents Juliet's conflict between obedience to her father and loyalty to Romeo.",
    "Explore the significance of Lord Capulet's threats and the theme of patriarchal authority.",
    "Evaluate how Juliet's isolation drives her towards the Friar's desperate plan.",
  ],
  successCriteria: [
    "I can analyse Lord Capulet's language in Act 3, Scene 5 and explain how it reveals patriarchal power.",
    'I can explain how Juliet is systematically abandoned by every adult in her life.',
    "I can write analytically about how Shakespeare uses Juliet's dilemma to criticise patriarchal society.",
  ],
  keywords: [
    'patriarchy',
    'filial duty',
    'obedience',
    'agency',
    'isolation',
    'defiance',
    'arranged marriage',
    'dramatic irony',
  ],
  starterActivity: {
    title: 'Obey or Defy?',
    duration: '7 minutes',
    instructions:
      'Display the scenario: "Your father has arranged a marriage for you to someone wealthy and respected. You are already secretly married to someone else. What do you do?" Students vote: obey or defy? Discuss in pairs, then reveal: in Elizabethan England, defying your father could mean being disowned, left penniless, and socially ruined. A daughter was legally her father\'s property until marriage. Recast the scenario: would students change their answer knowing the consequences?',
    differentiation: {
      support:
        'Provide a simplified scenario with clear options and a sentence starter for discussion.',
      core: 'Students discuss independently and consider the social consequences.',
      stretch:
        "Students compare Elizabethan expectations of filial obedience with modern attitudes and consider what Shakespeare's audience would have thought of Juliet.",
    },
    resources: ['Scenario slide', 'Elizabethan context card'],
  },
  mainActivities: [
    {
      title: "Close Analysis: Lord Capulet's Rage (Act 3, Scene 5)",
      duration: '22 minutes',
      instructions:
        'Read Lord Capulet\'s speech to Juliet when she refuses to marry Paris (Act 3, Scene 5). Focus on key quotations: "Hang, beg, starve, die in the streets," "my fingers itch," and "disobedient wretch." Students annotate the speech, identifying: imperative verbs, violent imagery, dehumanising language. In groups of three, students discuss: how does Capulet\'s language reveal his view of Juliet? Is he a concerned father or a tyrant? Students write an analytical paragraph: "How does Shakespeare present Lord Capulet\'s patriarchal authority in Act 3, Scene 5?"',
      differentiation: {
        support: 'Provide a glossary and a scaffolded paragraph with gaps to fill.',
        core: 'Students annotate and write independently, embedding at least two quotations.',
        stretch:
          'Students compare Capulet\'s behaviour here with his earlier protectiveness in Act 1, Scene 2 ("my child is yet a stranger in the world") and evaluate why he changes.',
      },
      resources: [
        'Act 3, Scene 5 extract',
        'Annotation guide',
        'Scaffolded paragraph (support tier)',
      ],
    },
    {
      title: "Juliet's Isolation: Abandoned by All",
      duration: '18 minutes',
      instructions:
        'Students map Juliet\'s support network across the play. Create a diagram showing the adults in Juliet\'s life (Capulet, Lady Capulet, the Nurse, Friar Lawrence) and how each one fails her in Act 3, Scene 5 and Act 4. The Nurse advises her to marry Paris ("I think it best you married with the County"); Lady Capulet is cold and distant ("Talk not to me, for I\'ll not speak a word"); Capulet threatens violence and disinheritance; the Friar offers a dangerous plan involving feigned death. Students answer: by Act 4, who can Juliet rely on? What does her isolation reveal about Shakespeare\'s view of patriarchal society?',
      differentiation: {
        support:
          'Provide a pre-drawn diagram with character names; students add quotations and explanations.',
        core: 'Students create the diagram from scratch, selecting their own quotations.',
        stretch:
          "Students evaluate whether the Nurse's betrayal or Capulet's threats is the more significant moment of abandonment, and justify their answer.",
      },
      resources: ['Support network diagram template', 'Act 3-4 key quotations sheet'],
    },
  ],
  plenaryActivity: {
    title: "Juliet's Soliloquy: In Her Own Words",
    duration: '8 minutes',
    instructions:
      "Students write 3-4 sentences in Juliet's voice expressing her feelings at the end of Act 3, Scene 5, after everyone has left. What is she thinking? What are her options? Share examples and discuss: does Juliet have any real choice, or has the patriarchal system trapped her?",
    differentiation: {
      support:
        'Sentence starter: "I am alone now. My father has... My mother has... The Nurse has... I must..."',
      core: "Students write freely in Juliet's voice, reflecting her emotional state.",
      stretch: "Students write in iambic pentameter, mirroring Shakespeare's style.",
    },
  },
  homework:
    "Write a paragraph evaluating who is most responsible for Juliet's isolation: Capulet, Lady Capulet, or the Nurse. Use quotations to support your argument.",
  worksheetQuestions: [
    {
      question:
        'How does Shakespeare present Lord Capulet as a threatening figure in Act 3, Scene 5?',
      lines: 6,
      modelAnswer:
        'Shakespeare presents Capulet as aggressive and authoritarian through violent language and imperatives. He tells Juliet: "Hang, beg, starve, die in the streets" - a list of punishments delivered in short, brutal clauses that show his anger is absolute. The phrase "my fingers itch" implies a desire to physically strike her, revealing that his patriarchal authority is ultimately backed by violence. He also dehumanises Juliet, calling her "disobedient wretch" and "baggage," reducing her from a daughter to a possession that has failed to obey. Shakespeare uses Capulet to expose the cruelty lurking beneath Elizabethan patriarchy.',
      marks: 4,
    },
    {
      question: "Why is the Nurse's advice to Juliet in Act 3, Scene 5 a significant betrayal?",
      lines: 5,
      modelAnswer:
        'The Nurse advises Juliet to forget Romeo and marry Paris: "I think it best you married with the County." This is a betrayal because the Nurse has been Juliet\'s closest confidante throughout the play - she helped arrange the secret marriage and acted as a messenger between the lovers. Her sudden pragmatism reveals that she does not understand the depth of Juliet\'s love or commitment. For Juliet, this is the final abandonment: the one person she trusted has sided with the patriarchal system. After this moment, Juliet tells the audience she will never confide in the Nurse again, marking her complete isolation.',
      marks: 4,
    },
    {
      question: "How does Shakespeare use Juliet's dilemma to criticise patriarchal society?",
      lines: 6,
      modelAnswer:
        "Shakespeare places Juliet in an impossible position: she is secretly married to Romeo but her father demands she marry Paris. Through this dilemma, Shakespeare exposes the injustice of a society where women have no legal autonomy. Juliet cannot reveal her marriage without endangering Romeo, cannot refuse Paris without being disowned, and cannot seek help from any adult who should protect her. Every person who should support her - father, mother, nurse - either threatens, dismisses, or betrays her. Shakespeare's authorial intention may be to show the audience that patriarchal systems, when taken to extremes, destroy the very people they claim to protect.",
      marks: 4,
    },
    {
      question: "Compare Lord Capulet's attitude to Juliet in Act 1, Scene 2 with Act 3, Scene 5.",
      lines: 6,
      modelAnswer:
        'In Act 1, Scene 2, Capulet appears protective and caring: "My child is yet a stranger in the world" suggests he values Juliet\'s youth and is reluctant to rush her into marriage. He tells Paris to win her consent: "My will to her consent is but a part." This suggests a degree of respect for Juliet\'s agency. However, by Act 3, Scene 5, his tone has entirely changed: he threatens her with starvation, violence, and disinheritance. The shift suggests that Capulet\'s earlier gentleness was conditional on Juliet\'s obedience. Once she defies him, his patriarchal authority overrides any paternal affection. Shakespeare uses this contrast to show that Elizabethan fatherly love was often inseparable from control.',
      marks: 4,
    },
  ],
  teacherNotes: [
    "This lesson is central to AO3 (gender and patriarchy). Ensure students can discuss Elizabethan attitudes to women's obedience and arranged marriage.",
    "Lord Capulet's speech in Act 3, Scene 5 is a frequently examined extract. Students should be able to write about it from memory.",
    "The Nurse's betrayal is often overlooked but is crucial to understanding Juliet's isolation and desperation.",
    "Link this lesson to Lesson 3 (the balcony scene) to show how Juliet's early agency is gradually constrained by patriarchal forces.",
    'Handle the themes of domestic abuse and control sensitively - some students may find this material personally relevant.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context (patriarchy, gender)',
    'Character analysis',
    'Evaluative and comparative writing',
  ],
}

// ─── Lesson 7: Act 5 - Death and Reconciliation ────────────────────────────

const lesson7: LessonPlan = {
  id: 'rj-07-act5-death-reconciliation',
  title: 'Act 5: Death and Reconciliation',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the dramatic impact of the double suicide in Act 5, Scene 3.',
    'Explore how Shakespeare uses the deaths of Romeo and Juliet to resolve the feud.',
    'Evaluate the ending: is reconciliation a hopeful or hollow resolution?',
  ],
  successCriteria: [
    'I can analyse key quotations from Act 5, Scene 3, explaining how Shakespeare creates pathos.',
    "I can explain the significance of the families' reconciliation and connect it to the Prologue.",
    'I can write an evaluative paragraph on whether the ending is triumphant or tragic.',
  ],
  keywords: [
    'catharsis',
    'denouement',
    'pathos',
    'resolution',
    'sacrifice',
    'reconciliation',
    'tragic waste',
    'didactic',
  ],
  starterActivity: {
    title: 'Returning to the Prologue',
    duration: '7 minutes',
    instructions:
      'Display the Prologue\'s final couplet: "Which, but their children\'s end, naught could remove." Ask students: what does this line predict? What is Shakespeare saying about what it takes to end a feud? Discuss: is it acceptable that two young people had to die for their parents to make peace? This question will frame the entire lesson.',
    differentiation: {
      support:
        'Provide a modern English paraphrase and a clear question: "What had to happen before the feud could end?"',
      core: 'Students discuss the moral implications of the line independently.',
      stretch:
        'Students consider whether Shakespeare is criticising the parents, society, or fate - or all three.',
    },
    resources: ['Prologue couplet slide'],
  },
  mainActivities: [
    {
      title: 'Close Analysis: The Tomb Scene',
      duration: '22 minutes',
      instructions:
        'Read the final scene in the Capulet tomb (Act 5, Scene 3). Focus on three key moments: (1) Romeo\'s final speech: "Here\'s to my love... Thus with a kiss I die"; (2) Juliet\'s awakening and discovery: "What\'s here? A cup, closed in my true love\'s hand? Poison, I see, hath been his timeless end"; (3) Juliet\'s death: "O happy dagger! This is thy sheath. There rust, and let me die." For each moment, students analyse: what language techniques does Shakespeare use? How does he create pathos? What is the effect on the audience? Students write an analytical paragraph on one of the three moments.',
      differentiation: {
        support: 'Provide a scaffolded analysis with key words highlighted and guiding prompts.',
        core: 'Students analyse all three moments and write a full paragraph on their chosen extract.',
        stretch:
          "Students compare the brevity of Juliet's death (three lines) with Romeo's longer speech and evaluate why Shakespeare gives them different amounts of stage time.",
      },
      resources: ['Act 5, Scene 3 extract', 'Analysis scaffold (support tier)', 'Pathos checklist'],
    },
    {
      title: 'The Reconciliation: Hollow Peace or Genuine Hope?',
      duration: '18 minutes',
      instructions:
        "Read the Prince's final speech and the families' reconciliation. Focus on: \"All are punished\" and Capulet and Montague's offers to build golden statues. Students debate in groups: is this ending satisfying? Is the reconciliation genuine or performative? Do golden statues represent real change or empty gestures? Groups prepare three arguments for their position and present to the class. Teacher draws out: Shakespeare's ending is deliberately ambiguous - the audience is meant to question whether the sacrifice was worth it.",
      differentiation: {
        support: 'Provide argument cards for and against the reconciliation being genuine.',
        core: 'Students generate their own arguments with textual evidence.',
        stretch:
          'Students evaluate whether the play is ultimately didactic (teaching a moral lesson) or nihilistic (suggesting that nothing meaningful has been learned).',
      },
      resources: [
        "Prince's final speech extract",
        'Debate preparation sheet',
        'Argument cards (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Final Word',
    duration: '8 minutes',
    instructions:
      'Students write their own final couplet for the play in iambic pentameter, summarising its message. Share three examples. Teacher reads the Prince\'s actual final couplet: "For never was a story of more woe / Than this of Juliet and her Romeo." Discuss: why does Shakespeare end on "Romeo" rather than "Juliet"? What is the effect of ending on the man\'s name?',
    differentiation: {
      support: "Students write a final sentence summarising the play's message in their own words.",
      core: 'Students attempt the couplet in iambic pentameter.',
      stretch:
        "Students write two alternative couplets - one optimistic, one pessimistic - and evaluate which better fits Shakespeare's intentions.",
    },
  },
  homework:
    'Write a paragraph answering: "Is the ending of Romeo and Juliet hopeful or hopeless?" Use at least two quotations from Act 5 to support your argument.',
  worksheetQuestions: [
    {
      question: 'How does Shakespeare create pathos in the tomb scene?',
      lines: 6,
      modelAnswer:
        'Shakespeare creates pathos through dramatic irony: the audience knows Juliet is alive, but Romeo does not. His speech over her "dead" body - "Death, that hath sucked the honey of thy breath, hath had no power yet upon thy beauty" - is heartbreaking because he unknowingly describes signs of life. The timing is agonisingly close: Juliet wakes moments after Romeo drinks the poison. Shakespeare maximises the audience\'s suffering by making the tragedy avoidable - if Romeo had waited minutes longer, both would have lived. This technique creates catharsis, the emotional purging that Aristotle identified as the purpose of tragedy.',
      marks: 4,
    },
    {
      question: 'What is the significance of the Prince\'s line "All are punished"?',
      lines: 5,
      modelAnswer:
        'The Prince\'s declaration "All are punished" distributes responsibility for the tragedy across the entire community. It is not only the lovers who have suffered: Montague has lost Romeo, Capulet has lost Juliet and Tybalt, and the Prince himself has lost Mercutio and Paris, who were his kinsmen. The line suggests that the feud has had consequences far beyond the two families. Shakespeare uses this to deliver a moral message: hatred and violence harm everyone, not just those directly involved. The Prince speaks for the audience, articulating the lesson they are meant to take from the play.',
      marks: 4,
    },
    {
      question: 'Are the golden statues a meaningful gesture of reconciliation? Evaluate.',
      lines: 6,
      modelAnswer:
        "The golden statues can be interpreted in two ways. Optimistically, they represent a genuine attempt at reconciliation - the families are publicly honouring each other's children and acknowledging their shared grief. The statues will stand as permanent reminders of the cost of hatred. However, a more cynical reading sees the statues as a superficial, materialistic response to a profound tragedy. Gold is associated with wealth and status, suggesting the families are still competing - even their grief becomes a display of power. Shakespeare may be suggesting that the families have learned nothing: they respond to death with the same pride and possessiveness that caused it.",
      marks: 4,
    },
    {
      question: 'How does the ending of the play connect to the Prologue?',
      lines: 5,
      modelAnswer:
        'The ending fulfils every prediction made in the Prologue. The "star-crossed lovers take their life," the "death-marked love" reaches its inevitable end, and "their children\'s end" removes the "ancient grudge." This circular structure reinforces the theme of fate: the ending was written before the play began, both literally (in the Prologue) and figuratively (in the stars). Shakespeare\'s structural choice suggests that the tragedy was always inevitable - the audience has watched it unfold knowing the outcome, which heightens the sense of tragic waste and the feeling that the deaths were both necessary and unbearably pointless.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The tomb scene is emotionally intense. Give students time to process and discuss their reactions.',
    'The dramatic irony of the tomb scene is one of the most powerful teaching moments in the play - make sure students fully understand that the audience knows Juliet is alive.',
    'The debate about the reconciliation works well as preparation for evaluative essay questions (AO1 with evaluation).',
    "Link back to Lesson 1 (the Prologue) to show how the play comes full circle. Students should be able to discuss the play's structure holistically.",
  ],
  targetedSkills: [
    'AO1: Textual reference and evaluation',
    'AO2: Language analysis (pathos)',
    'AO2: Structure (circular narrative)',
    'AO3: Context (tragedy conventions)',
    'Evaluative writing',
  ],
}

// ─── Lesson 8: Love as a Theme ──────────────────────────────────────────────

const lesson8: LessonPlan = {
  id: 'rj-08-love-theme',
  title: 'Love as a Theme in Romeo and Juliet',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shakespeare presents different types of love across the play.',
    "Explore the contrast between Romeo's love for Rosaline and his love for Juliet.",
    'Evaluate whether Shakespeare presents love as a positive or destructive force.',
  ],
  successCriteria: [
    'I can identify and explain at least three different types of love presented in the play.',
    'I can analyse how Shakespeare contrasts shallow infatuation with genuine love.',
    "I can write an essay-style paragraph evaluating Shakespeare's overall presentation of love.",
  ],
  keywords: [
    'Petrarchan love',
    'courtly love',
    'unrequited',
    'infatuation',
    'transcendent',
    'destructive',
    'familial love',
    'fraternal love',
  ],
  starterActivity: {
    title: 'Types of Love',
    duration: '8 minutes',
    instructions:
      'Display a list of types of love: romantic, familial, fraternal (friendship), unrequited, infatuation, courtly, spiritual. Students work in pairs to match each type to a character or relationship in Romeo and Juliet. Feed back and create a class mind map on the board. Teacher emphasises: Shakespeare does not present a single, simple view of love - the play explores love in all its forms, from the genuine to the superficial.',
    differentiation: {
      support: 'Provide character-relationship cards to match with love types.',
      core: 'Students match independently and add a quotation for each type.',
      stretch:
        'Students identify types of love that overlap or conflict (e.g., familial duty vs romantic love) and explain the tension.',
    },
    resources: ['Love types slide', 'Character cards (support tier)', 'Mind map template'],
  },
  mainActivities: [
    {
      title: 'Rosaline vs Juliet: Infatuation vs Genuine Love',
      duration: '20 minutes',
      instructions:
        'Compare Romeo\'s language about Rosaline (Act 1, Scene 1: "She hath Dian\'s wit", using cliched Petrarchan conventions) with his language about Juliet (Act 2, Scene 2: "It is the east, and Juliet is the sun"). Students create a comparison table analysing: imagery used, emotional depth, originality of language, and what each passage reveals about Romeo\'s state of mind. Discuss: how does Shakespeare signal that Romeo\'s love for Rosaline is superficial and his love for Juliet is genuine? What techniques does he use to differentiate the two? Students write a comparative paragraph.',
      differentiation: {
        support:
          'Provide both extracts with key language pre-highlighted and a comparison table with one completed row.',
        core: 'Students complete the table independently and write a full comparative paragraph.',
        stretch:
          'Students evaluate whether Shakespeare is criticising Petrarchan love poetry itself, and consider the metafictional implications.',
      },
      resources: [
        'Act 1 Rosaline quotations',
        'Act 2 Juliet quotations',
        'Comparison table',
        'Petrarchan conventions reference',
      ],
    },
    {
      title: 'Love and Death: The Central Paradox',
      duration: '20 minutes',
      instructions:
        'Students trace the connection between love and death throughout the play. Working in pairs, they find quotations that link love to death: the Prologue ("death-marked love"), the balcony scene ("My grave is like to be my wedding bed"), Romeo in the tomb ("Thus with a kiss I die"). Students plot these quotations on a timeline of the play. Discuss: why does Shakespeare consistently connect love and death? Is he suggesting that in a world of hatred, love must be sacrificial? Students write a thematic paragraph: "How does Shakespeare present love and death as inseparable in Romeo and Juliet?"',
      differentiation: {
        support: 'Provide the quotations on cards; students sequence them and explain each one.',
        core: 'Students find their own quotations and write a full thematic paragraph.',
        stretch:
          'Students evaluate whether Shakespeare presents love as a force that transcends death (the lovers are reunited) or one that is defeated by it.',
      },
      resources: [
        'Timeline template',
        'Quotation cards (support tier)',
        'Play text for quotation hunting',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Love on Trial',
    duration: '7 minutes',
    instructions:
      'Students vote: does Shakespeare present love as ultimately positive (it ends the feud) or ultimately destructive (it kills the lovers)? Three students argue each side. Teacher concludes: the genius of the play is that both are true simultaneously - love is the only force powerful enough to end the feud, but it can only do so through sacrifice.',
    differentiation: {
      support: 'Students choose a side and use a provided sentence to justify their vote.',
      core: 'Students justify with their own argument and a quotation.',
      stretch:
        'Students argue that the question itself is too simplistic and offer a more nuanced reading.',
    },
  },
  homework:
    'Write a full paragraph answering: "How does Shakespeare use the contrast between Romeo\'s love for Rosaline and his love for Juliet to explore the nature of true love?"',
  worksheetQuestions: [
    {
      question: 'What different types of love does Shakespeare present in the play?',
      lines: 6,
      modelAnswer:
        "Shakespeare presents multiple types of love. Romeo's initial feelings for Rosaline represent Petrarchan infatuation - he uses cliched imagery and is more in love with the idea of being in love than with Rosaline herself. His love for Juliet, by contrast, is presented as genuine, mutual, and transformative. The Nurse's love for Juliet is maternal and protective, though ultimately practical rather than principled. Capulet's love for Juliet is possessive and conditional. Mercutio's love for Romeo is fraternal - he fights Tybalt to defend Romeo's honour. Shakespeare uses these contrasts to suggest that love takes many forms, and not all of them are pure or selfless.",
      marks: 4,
    },
    {
      question:
        "How does Shakespeare differentiate between Romeo's love for Rosaline and his love for Juliet?",
      lines: 5,
      modelAnswer:
        'Romeo\'s love for Rosaline is characterised by conventional Petrarchan language: oxymora ("O brawling love, O loving hate"), references to classical mythology, and self-conscious suffering. His love is performative - he speaks about it publicly and theatrically. In contrast, his language for Juliet is original, specific, and deeply felt: "It is the east, and Juliet is the sun" is a metaphor he creates himself, not a borrowed convention. Shakespeare signals the shift from infatuation to genuine love through the quality and originality of Romeo\'s poetry, suggesting that true love inspires authentic expression.',
      marks: 4,
    },
    {
      question: 'How does Shakespeare present love and death as connected throughout the play?',
      lines: 6,
      modelAnswer:
        'Love and death are intertwined from the Prologue ("death-marked love") to the final scene. Juliet says "My grave is like to be my wedding bed" before she even knows Romeo is a Montague, foreshadowing the connection between marriage and death. In the tomb, Romeo\'s final act is a kiss - "Thus with a kiss I die" - merging love and death into a single gesture. The play\'s central paradox is that love cannot survive in a world poisoned by hate; it can only triumph through death, which ends both the lovers and the feud. Shakespeare presents love as a sacrificial force: powerful enough to change the world, but at an unbearable cost.',
      marks: 4,
    },
    {
      question:
        'Evaluate whether Shakespeare presents love as a positive or destructive force in the play.',
      lines: 6,
      modelAnswer:
        "Shakespeare presents love as both positive and destructive, refusing to simplify it. On one hand, Romeo and Juliet's love is presented as the most beautiful and genuine emotion in the play - it transcends the hatred of their families and inspires moments of extraordinary poetry. On the other hand, it leads directly to the deaths of six characters (Mercutio, Tybalt, Paris, Romeo, Juliet, and Lady Montague). However, it is arguable that love itself is not destructive - rather, it is the feud and the patriarchal society that corrupt and destroy love. Shakespeare may be suggesting that love is inherently good, but that it cannot flourish in a world defined by violence and control.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a thematic overview lesson - ideal for consolidation before exam practice.',
    'The Rosaline vs Juliet comparison is a very common exam question. Ensure students have strong comparative quotations memorised.',
    "The love-death connection is central to the play's meaning. Students who can discuss this paradox fluently will access the highest marks.",
    'Encourage students to avoid simplistic readings ("love is good/bad") and instead embrace the play\'s deliberate ambiguity.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context (Petrarchan conventions)',
    'Thematic analysis',
    'Evaluative writing',
  ],
}

// ─── Lesson 9: Conflict and Violence ────────────────────────────────────────

const lesson9: LessonPlan = {
  id: 'rj-09-conflict-violence',
  title: 'Conflict and Violence in Romeo and Juliet',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Shakespeare presents different forms of conflict: physical, verbal, and internal.',
    'Explore the relationship between the feud, masculinity, and violence across the play.',
    "Evaluate Shakespeare's authorial intention in presenting the consequences of unchecked conflict.",
  ],
  successCriteria: [
    'I can identify and analyse at least three different types of conflict in the play.',
    'I can explain how Shakespeare uses conflict to drive the plot and develop themes.',
    'I can write a thematic essay paragraph linking conflict to context and authorial intention.',
  ],
  keywords: [
    'conflict',
    'feud',
    'vendetta',
    'escalation',
    'toxic masculinity',
    'internal conflict',
    'civil disorder',
    'consequence',
  ],
  starterActivity: {
    title: 'Mapping Conflict',
    duration: '8 minutes',
    instructions:
      'Students brainstorm every instance of conflict in Romeo and Juliet (physical fights, verbal arguments, internal dilemmas) on a large sheet of paper. In pairs, they categorise these into three types: physical conflict, verbal/social conflict, and internal conflict. Feed back and discuss: which type of conflict causes the most damage? Teacher introduces the idea that Shakespeare presents conflict as a disease that infects every level of society, from the streets to the family home to the individual soul.',
    differentiation: {
      support: 'Provide a list of key events; students categorise them into the three types.',
      core: 'Students brainstorm independently and categorise, then identify which type is most prevalent.',
      stretch:
        'Students argue that all three types of conflict are interconnected and explain how one leads to another.',
    },
    resources: ['Brainstorm paper', 'Event cards (support tier)', 'Category headings'],
  },
  mainActivities: [
    {
      title: 'Physical Conflict: The Street Brawls',
      duration: '18 minutes',
      instructions:
        'Students compare two moments of physical violence: the opening brawl (Act 1, Scene 1) and the fight in Act 3, Scene 1. For each, they analyse: who starts the conflict? How does it escalate? What are the consequences? What language does Shakespeare use to present the violence? Students create a table comparing the two scenes. Discuss: how does the violence escalate across the play? What does this escalation suggest about the nature of feuds? Students then analyse the Prince\'s response to each brawl and how his punishment escalates (warning in Act 1 vs banishment in Act 3). Write a paragraph: "How does Shakespeare present the escalation of violence in the play?"',
      differentiation: {
        support:
          'Provide a pre-completed comparison table for one scene; students complete the second.',
        core: 'Students complete the comparison independently and write a full paragraph.',
        stretch:
          'Students link the escalation of violence to Elizabethan anxieties about civil disorder and the breakdown of social order.',
      },
      resources: [
        'Act 1, Scene 1 extract',
        'Act 3, Scene 1 extract',
        'Comparison table',
        "Prince's speeches extract",
      ],
    },
    {
      title: "Internal Conflict: Romeo and Juliet's Impossible Choices",
      duration: '22 minutes',
      instructions:
        "Students analyse moments of internal conflict for both protagonists. Romeo: the tension between love and loyalty after Mercutio's death (Act 3, Scene 1). Juliet: the tension between obedience and love after Tybalt's death and Romeo's banishment (Act 3, Scene 5). For each character, students find quotations that reveal their inner turmoil and analyse the language techniques Shakespeare uses to convey it (soliloquy, oxymoron, rhetorical questions). Students write a comparative paragraph: \"How does Shakespeare present Romeo and Juliet's internal conflicts, and how are they similar and different?\"",
      differentiation: {
        support:
          'Provide key quotations with annotations; students explain the internal conflict in their own words.',
        core: 'Students find their own quotations and write a full comparative paragraph.',
        stretch:
          "Students evaluate which character's internal conflict is more complex and why, considering the role of gender expectations.",
      },
      resources: ['Act 3 extracts (Scenes 1, 2, and 5)', 'Internal conflict analysis template'],
    },
  ],
  plenaryActivity: {
    title: "Shakespeare's Message",
    duration: '7 minutes',
    instructions:
      'Students complete the sentence: "Through the theme of conflict, Shakespeare\'s authorial intention is to..." Share responses and discuss. Teacher consolidates: Shakespeare uses the play to show that violence breeds more violence, that conflict destroys love, and that the only way to break the cycle is through sacrifice - though even that lesson may not be permanent.',
    differentiation: {
      support: 'Provide three possible completions; students choose and justify.',
      core: 'Students write their own completion with a supporting quotation.',
      stretch:
        "Students evaluate whether the play's message about conflict is still relevant today and explain why.",
    },
  },
  homework:
    'Write a paragraph explaining how Shakespeare uses the feud to drive the plot of Romeo and Juliet. Include at least three specific examples of how the feud causes events to happen.',
  worksheetQuestions: [
    {
      question: 'Identify and explain three different types of conflict in Romeo and Juliet.',
      lines: 6,
      modelAnswer:
        "Physical conflict is seen in the street brawls (Act 1, Scene 1; Act 3, Scene 1) where the Montague and Capulet servants and family members fight with swords. Verbal/social conflict is evident in Capulet's confrontation with Juliet (Act 3, Scene 5), where he uses threats and insults to force her obedience. Internal conflict is central to both protagonists: Romeo is torn between love and loyalty after Mercutio's death, and Juliet is torn between duty to her father and love for Romeo. Shakespeare shows that conflict operates at every level - street, home, and soul - and that all three types are connected to the overarching feud.",
      marks: 4,
    },
    {
      question: 'How does Shakespeare present the escalation of violence across the play?',
      lines: 5,
      modelAnswer:
        "Violence escalates steadily. The opening brawl is relatively contained - servants fight, and the Prince warns both families. By Act 3, Scene 1, the violence has become lethal: Mercutio and Tybalt are killed. The Prince's punishment also escalates from a warning to banishment. By Act 5, the violence has consumed the lovers themselves. This pattern of escalation shows that the feud is self-perpetuating: each act of violence provokes retaliation, which provokes further violence. Shakespeare suggests that without intervention, hatred will always escalate until it destroys everything.",
      marks: 4,
    },
    {
      question:
        "How does Shakespeare use Romeo's internal conflict in Act 3, Scene 1 to develop the tragedy?",
      lines: 5,
      modelAnswer:
        'Romeo initially refuses to fight Tybalt because of his secret marriage to Juliet: "I do protest I never injured thee, but love thee better than thou canst devise." His internal conflict is between love (his new bond with the Capulets through Juliet) and the masculine honour code that demands he fight. When Mercutio is killed, Romeo\'s grief overwhelms his restraint: "O sweet Juliet, thy beauty hath made me effeminate." He blames love for making him weak, revealing that the toxic masculinity of Verona is so powerful that even Romeo cannot fully resist it. His decision to kill Tybalt is the moment where conflict defeats love.',
      marks: 4,
    },
    {
      question:
        "What is Shakespeare's authorial intention in presenting the consequences of conflict?",
      lines: 6,
      modelAnswer:
        'Shakespeare\'s authorial intention is to show his audience the devastating consequences of unchecked hatred and violence. The feud destroys not only the fighters (Mercutio, Tybalt) but also the innocent (Romeo, Juliet, Paris, Lady Montague). The Prince\'s final speech - "All are punished" - makes explicit that the entire community has suffered. Writing in Elizabethan England, where civil unrest and political violence were real fears, Shakespeare may have intended the play as a warning: feuds and factions tear apart the social fabric and can only end in tragedy. The reconciliation at the end is bittersweet precisely because it comes at such a terrible cost.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a thematic overview lesson on conflict - pair it with Lesson 8 (Love) for a comprehensive thematic revision.',
    'The concept of toxic masculinity is a powerful AO3 angle. Help students articulate how the pressure to fight drives the tragedy.',
    'The internal conflict analysis is excellent preparation for character-focused essay questions.',
    'Encourage students to link conflict to other themes: love, fate, family, and social order.',
    'This lesson works well as revision - students should already know the plot and characters in detail.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language and structure analysis',
    'AO3: Context (masculinity, civil disorder)',
    'Thematic analysis',
    'Comparative and evaluative writing',
  ],
}

// ─── Lesson 10: Exam Practice - Essay Writing ───────────────────────────────

const lesson10: LessonPlan = {
  id: 'rj-10-exam-practice',
  title: 'Exam Practice: Romeo and Juliet Essay Writing',
  text: 'Romeo and Juliet',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply knowledge of Romeo and Juliet to a timed essay question under exam conditions.',
    'Practise structuring analytical paragraphs using PEE/PEEL with embedded quotations.',
    'Self-assess and peer-assess responses using mark-scheme-aligned criteria.',
  ],
  successCriteria: [
    'I can plan and write at least three analytical paragraphs in response to an essay question within the time limit.',
    'I can embed quotations fluently and analyse language, form, and structure (AO2).',
    'I can integrate contextual knowledge (AO3) naturally within my analysis.',
    "I can identify strengths and areas for improvement in my own and others' writing using assessment criteria.",
  ],
  keywords: [
    'PEE/PEEL',
    'embedded quotation',
    'topic sentence',
    'analytical verb',
    'assessment objectives',
    'mark scheme',
    'evaluation',
    'authorial intention',
  ],
  starterActivity: {
    title: 'Decoding the Question',
    duration: '8 minutes',
    instructions:
      'Display a sample essay question: "How does Shakespeare present the theme of fate in Romeo and Juliet? Write about how fate is presented in the play and how Shakespeare uses language and structure to convey ideas about fate." Students underline key words and identify: what the question is asking them to do, which assessment objectives are being targeted, and what "present" means in this context. Teacher models decoding the question and planning a response: identify three main points, each linking to a different part of the play.',
    differentiation: {
      support: 'Provide a question-decoding checklist and a model plan with one point completed.',
      core: 'Students decode the question independently and create a three-point plan.',
      stretch:
        'Students identify which points will score the highest AO2 and AO3 marks and prioritise accordingly.',
    },
    resources: ['Essay question slide', 'Question-decoding checklist', 'Planning template'],
  },
  mainActivities: [
    {
      title: 'Planning and Writing Under Timed Conditions',
      duration: '35 minutes',
      instructions:
        'Students spend 5 minutes planning and 30 minutes writing their essay response. Teacher circulates, offering brief individual guidance where needed. Remind students of the assessment criteria displayed on the board: AO1 - clear argument with well-chosen textual references; AO2 - analysis of language, form, and structure with subject terminology; AO3 - relevant context integrated into analysis; AO4 - accurate spelling, punctuation, and grammar. Students should aim for an introduction, three analytical paragraphs, and a brief conclusion. Teacher provides a 5-minute warning and a 1-minute warning.',
      differentiation: {
        support:
          'Provide a paragraph frame for each section with sentence starters and a quotation bank.',
        core: 'Students write independently, using their own quotations and analysis.',
        stretch:
          'Students aim to include a counter-argument or alternative interpretation in at least one paragraph.',
      },
      resources: [
        'Essay paper/exercise books',
        'Planning template',
        'Paragraph frame (support tier)',
        'Quotation bank (support tier)',
        'Timer displayed on board',
      ],
    },
    {
      title: 'Self-Assessment and Peer Assessment',
      duration: '10 minutes',
      instructions:
        'Students swap essays with a partner. Using a simplified mark-scheme grid, they assess their partner\'s work against four criteria: (1) Clear argument with textual references (AO1); (2) Analysis of language and methods (AO2); (3) Relevant context integrated into analysis (AO3); (4) Accurate SPaG and use of terminology (AO4). For each criterion, students give a mark out of 5 and write one specific "what went well" (WWW) and one "even better if" (EBI). Students then read their own feedback and write a personal target for improvement.',
      differentiation: {
        support:
          "Provide example WWW and EBI statements as models; students adapt them to their partner's work.",
        core: 'Students assess independently using the mark-scheme grid.',
        stretch:
          "Students write a short paragraph explaining which assessment objective their partner's essay is strongest on and which needs most development, with specific line references.",
      },
      resources: [
        'Simplified mark-scheme grid',
        'WWW/EBI feedback sheet',
        'Example feedback models (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Sharing Targets',
    duration: '5 minutes',
    instructions:
      'Students share their personal improvement target with the class or a partner. Teacher identifies common themes across the class (e.g., "many of you need to integrate context more naturally" or "try to use more analytical verbs"). Display a list of common improvements and ask students to record which ones apply to them. Teacher collects essays for formative marking.',
    differentiation: {
      support: 'Students select their target from a provided list of common improvement areas.',
      core: 'Students articulate a specific, actionable target based on peer feedback.',
      stretch:
        'Students write a revised version of their weakest paragraph incorporating their improvement target.',
    },
  },
  homework:
    'Rewrite your weakest paragraph from the timed essay, incorporating the feedback you received. Highlight the specific changes you have made.',
  worksheetQuestions: [
    {
      question:
        'Write an analytical paragraph responding to: "How does Shakespeare present fate in the Prologue?"',
      lines: 8,
      modelAnswer:
        'Shakespeare presents fate as an inescapable force from the very opening of the play. The Prologue describes Romeo and Juliet as "star-crossed lovers," with the compound adjective "star-crossed" drawing on Elizabethan beliefs in astrology and predestination to suggest that their love is doomed by cosmic forces beyond their control. The word "crossed" implies opposition and obstruction, foreshadowing the obstacles they will face. Shakespeare\'s decision to reveal the ending in the Prologue is itself a structural embodiment of fate: just as the characters cannot escape their destiny, the audience cannot escape their foreknowledge of the tragedy. This creates dramatic irony throughout the play, as every moment of hope is shadowed by the audience\'s awareness that the lovers will die. Shakespeare\'s authorial intention may be to encourage his audience to focus not on what happens, but on why - examining the social forces (the feud, patriarchy, honour culture) that make the tragedy inevitable.',
      marks: 8,
    },
    {
      question:
        'Write an analytical paragraph responding to: "How does Shakespeare use Juliet\'s character to explore the theme of defiance?"',
      lines: 8,
      modelAnswer:
        "Shakespeare presents Juliet as a character who defies the patriarchal expectations of Elizabethan society. In Act 2, Scene 2, she challenges the very foundation of the feud by questioning the significance of names: \"What's in a name? That which we call a rose by any other word would smell as sweet.\" The rhetorical question and natural imagery suggest that identity is innate, not defined by family allegiance - a radical idea in a society where family honour was paramount. Juliet further defies convention by effectively proposing marriage to Romeo, taking control of the courtship in a way that would have surprised Elizabethan audiences who expected women to be passive. However, Shakespeare also shows the limits of Juliet's defiance: by Act 4, she is so isolated by patriarchal forces that her only option is the Friar's dangerous plan. Shakespeare may be suggesting that while individual defiance is admirable, it cannot succeed against systemic oppression without tragic consequences.",
      marks: 8,
    },
    {
      question:
        'Write an analytical paragraph responding to: "How does Shakespeare present violence as destructive in Act 3, Scene 1?"',
      lines: 8,
      modelAnswer:
        'In Act 3, Scene 1, Shakespeare presents violence as a destructive force that consumes even those who try to resist it. Romeo initially refuses to fight Tybalt - "I do protest I never injured thee, but love thee better than thou canst devise" - but his attempt at peace is misunderstood as cowardice by Mercutio, who intervenes and is killed. Romeo\'s subsequent killing of Tybalt is driven by guilt and rage rather than honour, showing how violence perpetuates itself through emotional contagion. Mercutio\'s dying curse, "A plague on both your houses," uses the metaphor of disease to suggest that the feud is a sickness infecting all of Verona. The scene is the play\'s peripeteia - the turning point after which tragedy becomes inevitable. Shakespeare\'s authorial intention is to demonstrate that in a culture of violence, even love cannot protect the innocent, and that the cycle of revenge will always claim more victims than the original wrong.',
      marks: 8,
    },
    {
      question:
        'List five key quotations from Romeo and Juliet that you could use in any essay, and briefly explain the significance of each.',
      lines: 10,
      modelAnswer:
        '1. "Star-crossed lovers" (Prologue) - establishes the theme of fate and the inevitability of tragedy. 2. "What\'s in a name?" (Act 2, Scene 2) - Juliet challenges the feud and questions identity. 3. "A plague on both your houses" (Act 3, Scene 1) - Mercutio curses both families, showing the feud destroys the innocent. 4. "O, I am fortune\'s fool!" (Act 3, Scene 1) - Romeo recognises the role of fate after killing Tybalt. 5. "Hang, beg, starve, die in the streets" (Act 3, Scene 5) - Capulet\'s threats reveal the violence of patriarchal authority. These five quotations cover the play\'s major themes (fate, love, conflict, patriarchy) and can be applied to almost any essay question.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This is a timed essay lesson - enforce the time limit strictly to build exam stamina.',
    'The question provided is a sample, not from a past paper. Adjust to match whichever exam board your students are preparing for.',
    'Circulate during the writing phase and make brief notes on common errors to address in feedback.',
    "The peer assessment phase is essential - students learn as much from assessing others' work as from writing their own.",
    "Collect essays for detailed marking. Consider using this lesson's output to set differentiated revision targets.",
    'This lesson works best at the end of the teaching sequence, once all other lessons have been completed.',
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

export const romeoJulietLessons: LessonPlan[] = [
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

/** @deprecated Use romeoJulietLessons instead */
export const romeoJulietLessonPlans = romeoJulietLessons
