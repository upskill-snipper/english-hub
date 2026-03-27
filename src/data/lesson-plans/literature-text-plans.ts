// @ts-nocheck
// ─── Literature Text Lesson Plans ────────────────────────────────────────────
// 30 complete GCSE Literature lesson plans covering major set texts
// Macbeth (6), A Christmas Carol (6), An Inspector Calls (6),
// Jekyll & Hyde (6), Romeo & Juliet (6)

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

export interface LiteratureLesson {
  id: string
  title: string
  text: string
  examBoard: string
  yearGroup: string
  duration: string
  learningObjectives: string[]
  starterActivity: LessonActivity
  mainActivity: LessonActivity & { differentiation: { support: string; core: string; stretch: string } }
  plenary: LessonActivity
  homework: string
  resourcesNeeded: string[]
  assessmentOpportunities: string[]
  keyVocabulary: string[]
  sendAdaptations: string
}

// ════════════════════════════════════════════════════════════════════════════
// MACBETH — 6 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const macbethLesson1: LiteratureLesson = {
  id: 'macbeth-lit-01',
  title: 'Macbeth: Context, Historical Background & Key Themes',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Understand Jacobean historical context and the Gunpowder Plot',
    'Identify key themes: ambition, guilt, power, the supernatural',
    'Link context to Shakespeare\'s authorial intention',
    'Summarise the complete plot structure across five acts',
  ],
  starterActivity: {
    title: 'Jacobean Context True/False',
    duration: '8 minutes',
    instructions: 'Display 8 true/false statements about Jacobean England (Divine Right of Kings, witchcraft beliefs, gender roles). Students use mini-whiteboards. Discuss why these beliefs matter to understanding a play about regicide written in 1606.',
    resources: ['True/False slides', 'Mini-whiteboards'],
  },
  mainActivity: {
    title: 'Context Information Carousel & Theme Mapping',
    duration: '42 minutes',
    instructions: 'Station 1: King James I & Gunpowder Plot. Station 2: Divine Right & Great Chain of Being. Station 3: Witchcraft & Supernatural. Station 4: Gender & Power. Students rotate every 4 minutes completing a note-taking grid. Then complete a theme-tracking table identifying ambition, guilt, supernatural, and kingship across all five acts with key events and characters.',
    differentiation: {
      support: 'Provide partially completed grid with sentence starters for each station.',
      core: 'Complete independently with inference column about authorial intention.',
      stretch: 'Add evaluation of which contextual factor most influences Shakespeare\'s presentation of themes.',
    },
    resources: ['Station information cards (4)', 'Note-taking grid', 'Theme-tracking table', 'Timer'],
  },
  plenary: {
    title: 'Exit Ticket: Context to Text Link',
    duration: '5 minutes',
    instructions: 'Students write: "Explain one way Jacobean context is important to understanding Macbeth." Collect to assess prior understanding.',
    differentiation: {
      support: 'Sentence starter: "Jacobean audiences would have been shocked by... because..."',
      core: 'Full response with specific contextual link and plot detail.',
      stretch: 'Add second sentence evaluating Shakespeare\'s authorial intention.',
    },
  },
  homework: 'Research King James I\'s relationship with Shakespeare and write one paragraph on how it influenced Macbeth.',
  resourcesNeeded: ['Jacobean context slides', 'Station cards', 'Note-taking grids', 'Theme table worksheet'],
  assessmentOpportunities: ['Exit ticket responses', 'Theme-tracking accuracy', 'Contextual understanding'],
  keyVocabulary: ['Jacobean', 'Divine Right of Kings', 'regicide', 'Great Chain of Being', 'Gunpowder Plot', 'tragedy', 'hamartia', 'authorial intention'],
  sendAdaptations: 'Provide audio recording of context information. Simplify vocabulary list. Offer pre-written theme examples for completion.',
};

const macbethLesson2: LiteratureLesson = {
  id: 'macbeth-lit-02',
  title: 'Act 1: Ambition Awakened — The Witches & the Prophecy',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Shakespeare presents the witches and the supernatural',
    'Examine Macbeth\'s reaction to the prophecy in Act 1, Scene 3',
    'Explore the significance of the aside "If chance will have me king"',
    'Evaluate whether the witches control Macbeth or awaken existing ambition',
  ],
  starterActivity: {
    title: 'Ambition Spectrum',
    duration: '7 minutes',
    instructions: 'Students position themselves on a line: "Ambition is always a positive quality" (Agree to Disagree). Three students justify their position. Link to concept of hamartia (tragic flaw) and Jacobean beliefs about dangerous ambition.',
    resources: ['Spectrum labels'],
  },
  mainActivity: {
    title: 'Extract Analysis: Prophecy & Macbeth\'s Reaction',
    duration: '42 minutes',
    instructions: 'Read Act 1.3 from "All hail, Macbeth" to "Without my stir." Students annotate focusing on: (1) Physical reactions and Banquo\'s observation "why do you start", (2) The aside revealing inner thoughts, (3) Word choice "stir" suggesting moral awareness. Model one annotation on visualiser. Students write PEE paragraph: "How does Shakespeare present Macbeth\'s ambition in Act 1, Scene 3?" Then discuss whether ambition is pre-existing or newly awakened by the witches.',
    differentiation: {
      support: 'Pre-annotated extract with two devices identified. PEE frame with sentence starters.',
      core: 'Independent annotation and full PEE paragraph with embedded quotations.',
      stretch: 'Write second paragraph comparing this scene to Act 1.7, evaluating how ambition has developed.',
    },
    resources: ['Act 1 Scene 3 extract', 'Modern English translation', 'PEE paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'Class Debate: Witches or Ambition?',
    duration: '6 minutes',
    instructions: 'Debate: "The witches control Macbeth; he is not responsible for his actions." Half class agrees, half disagrees. Each side presents one textual argument. Discuss why Shakespeare leaves this ambiguous.',
    differentiation: {
      support: 'Display key quotations on board to support arguments.',
      core: 'Verbal response with specific textual reference.',
      stretch: 'Consider Shakespeare\'s authorial intention in creating ambiguity.',
    },
  },
  homework: 'Memorise "I have no spur to prick the sides of my intent, but only vaulting ambition" (Act 1.7) and write three sentences explaining the metaphor and what it reveals about Macbeth.',
  resourcesNeeded: ['Act 1 Scene 3 extract (printed)', 'Modern translation', 'PEE frame', 'Key quotation slides'],
  assessmentOpportunities: ['PEE paragraph quality', 'Annotation precision', 'Debate argumentation', 'Homework quotation understanding'],
  keyVocabulary: ['soliloquy', 'aside', 'prophecy', 'hamartia', 'tragic flaw', 'vaulting ambition', 'supernatural', 'fate vs free will'],
  sendAdaptations: 'Provide simplified extract. Audio recording of scene. Visual diagram showing Macbeth\'s emotional journey. Simplified PEE template.',
};

const macbethLesson3: LiteratureLesson = {
  id: 'macbeth-lit-03',
  title: 'Acts 2-3: Guilt, Power & Psychological Collapse',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Shakespeare presents guilt through language and imagery',
    'Examine the dagger soliloquy and the ghost of Banquo',
    'Explore how Macbeth\'s psychological state deteriorates',
    'Link guilt to the theme of consequences and moral breakdown',
  ],
  starterActivity: {
    title: 'Guilt in Modern Life',
    duration: '6 minutes',
    instructions: 'Quick brainstorm: "How do we show guilt in real life?" (body language, avoidance, aggression, obsession). Then show image of Macbeth\'s dagger. Discuss: how might a character show psychological guilt in a play?',
    resources: ['Dagger image', 'Brainstorm slide'],
  },
  mainActivity: {
    title: 'The Dagger Soliloquy & Banquo\'s Ghost Analysis',
    duration: '46 minutes',
    instructions: 'Read Act 2.1.33-61 (dagger soliloquy). Annotate for: personification, metaphor, physical imagery. Students identify how the dagger is "not there" — a hallucination created by guilt. Then read Act 3.4 (ghost of Banquo). Create a two-column comparison: "Dagger (Act 2)" vs "Ghost (Act 3)". What do both reveal about Macbeth\'s mental state? Students write analytical paragraph on how Shakespeare uses supernatural imagery to show guilt. Discuss: is the dagger "real" or psychological?',
    differentiation: {
      support: 'Provide annotated dagger extract. Completed comparison columns. Paragraph frame.',
      core: 'Independent analysis with thoughtful interpretation of ambiguity.',
      stretch: 'Evaluate how Macbeth\'s guilt responses differ between Acts 2 and 3, showing progression of psychological breakdown.',
    },
    resources: ['Act 2.1 dagger extract', 'Act 3.4 ghost extract', 'Comparison grid', 'Paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'Show Not Tell: How We Know Macbeth Feels Guilty',
    duration: '5 minutes',
    instructions: 'Without naming the emotion "guilt," students identify how the text shows it (language, behaviour, imagery). List responses. Highlight: Shakespeare never directly states emotions; he shows them through language choices.',
    differentiation: {
      support: 'Provide word bank of emotions and textual clues.',
      core: 'Independent identification with textual reference.',
      stretch: 'Discuss how this is an AO2 skill — analysing writer\'s methods.',
    },
  },
  homework: 'Write a detailed analysis of one quotation from the dagger soliloquy showing how language conveys Macbeth\'s mental state. (Aim for 8-10 sentences.)',
  resourcesNeeded: ['Dagger soliloquy extract', 'Ghost scene extract', 'Comparison grid', 'Analysis frame'],
  assessmentOpportunities: ['Annotation quality', 'Paragraph analysis', 'Understanding of psychological imagery', 'Quotation selection'],
  keyVocabulary: ['soliloquy', 'hallucination', 'personification', 'metaphor', 'psychological breakdown', 'guilt', 'conscience', 'mental deterioration'],
  sendAdaptations: 'Simplified extracts with key phrases highlighted. Visual timeline of Macbeth\'s guilt. Audio recording. Structured paragraph template with sentence starters.',
};

const macbethLesson4: LiteratureLesson = {
  id: 'macbeth-lit-04',
  title: 'Character Study: Lady Macbeth & Power',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Lady Macbeth\'s character development across the play',
    'Explore how she uses manipulation and language to gain power',
    'Examine her psychological decline from Act 3 onwards',
    'Evaluate gender and power in Jacobean context',
  ],
  starterActivity: {
    title: 'Power & Manipulation',
    duration: '6 minutes',
    instructions: 'Define manipulation. Show short clip of Lady Macbeth\'s "unsex me here" speech (film version if available). Students discuss: how is Lady Macbeth powerful despite being a woman in Jacobean society?',
    resources: ['Definition slide', 'Film clip (optional)', 'Context note on gender'],
  },
  mainActivity: {
    title: 'Lady Macbeth: From Power to Breakdown',
    duration: '47 minutes',
    instructions: 'Divide lesson into two halves. PART 1 (20 min): Read Act 1.7 and Act 2.2. Annotate Lady Macbeth\'s language focusing on: (1) Rhetorical questions ("Was the hope drunk?"), (2) Accusation of cowardice, (3) Appeals to masculinity. Students write: "How does Lady Macbeth use language to manipulate Macbeth?" PART 2 (27 min): Read Act 5.1 (sleepwalking scene). Dramatic contrast: Lady Macbeth is now broken, obsessed with hand-washing, unable to speak coherently. Students create a character arc diagram showing her journey from power to madness. Write comparative paragraph: "What has changed between Acts 1 and 5, and what does this suggest about the consequences of unchecked ambition?"',
    differentiation: {
      support: 'Annotated extracts. Character arc template. Comparative paragraph frame.',
      core: 'Independent analysis with clear evidence of textual understanding and character tracking.',
      stretch: 'Evaluate Shakespeare\'s presentation of gender and power: is Lady Macbeth punished for exceeding traditional female roles?',
    },
    resources: ['Act 1.7 extract', 'Act 2.2 extract', 'Act 5.1 sleepwalking extract', 'Character arc template', 'Paragraph frame'],
  },
  plenary: {
    title: 'Key Quotation: "A little water clears us of this deed"',
    duration: '4 minutes',
    instructions: 'Display the quotation from Act 2.2. Discuss: Why is it ironic that Lady Macbeth says this? What does Act 5.1\'s obsessive hand-washing tell us about the truth of guilt? Link to broader theme.',
    differentiation: {
      support: 'Explain irony using simple examples first.',
      core: 'Identify and discuss the irony.',
      stretch: 'Discuss what this reveals about Shakespeare\'s views on moral responsibility.',
    },
  },
  homework: 'Write a full analytical essay (300-400 words): "Analyse how Shakespeare presents Lady Macbeth\'s power and its ultimate destruction."',
  resourcesNeeded: ['Key extracts (4)', 'Character arc template', 'Essay frame', 'Film clip (optional)'],
  assessmentOpportunities: ['Annotation accuracy', 'Paragraph quality', 'Character arc understanding', 'Essay writing', 'Comparative analysis'],
  keyVocabulary: ['manipulation', 'persuasion', 'moral ambition', 'guilt', 'madness', 'dramatic irony', 'character development', 'gender roles'],
  sendAdaptations: 'Heavily annotated extracts. Pre-filled character arc. Essay template with section headings and sentence starters. Visual summary of Lady Macbeth\'s journey.',
};

const macbethLesson5: LiteratureLesson = {
  id: 'macbeth-lit-05',
  title: 'Acts 4-5: Fate, Ambition & Tragic Downfall',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the witches\' second prophecies and their deceptive nature',
    'Examine how Macbeth\'s ambition leads to his downfall',
    'Explore the final confrontation with Macduff and the restoration of order',
    'Evaluate Shakespeare\'s presentation of tragic justice',
  ],
  starterActivity: {
    title: 'Deception & Wordplay',
    duration: '7 minutes',
    instructions: 'Play a quick game: "All in this room are safe from slings and arrows." (True but misleading — they\'re protected by walls/roof, not morally.) Link to witches\' equivocations. Discuss: how can something be "true" but still deceptive?',
    resources: ['Equivocation definition slide'],
  },
  mainActivity: {
    title: 'Prophecies, Ambition & Tragic Inevitability',
    duration: '45 minutes',
    instructions: 'PART 1 (20 min): Read Act 4.1 (witches\' second prophecies: "none of woman born", "until Birnam Wood moves"). Annotate for ambiguity and wordplay. Create a three-column table: "The Prophecy | What Macbeth Understands | What Actually Happens". PART 2 (25 min): Read Act 5.6-7 (Macduff vs Macbeth). Track how each prophecy is fulfilled through technical/literal language rather than straightforward meaning. Discuss: is Macbeth a victim of the witches or his own unchecked ambition? Students write analytical paragraph: "To what extent does Shakespeare present Macbeth\'s downfall as inevitable?"',
    differentiation: {
      support: 'Provided prophecy table with some answers filled in. Paragraph frame.',
      core: 'Complete independently with clear cause-and-effect reasoning.',
      stretch: 'Debate the extent of Macbeth\'s agency vs the witches\' control using textual evidence.',
    },
    resources: ['Act 4.1 prophecies extract', 'Act 5.6-7 battle extract', 'Prophecy table template', 'Paragraph frame'],
  },
  plenary: {
    title: 'Order Restored: What Happens After?',
    duration: '5 minutes',
    instructions: 'Briefly read Malcolm\'s final speech. Discuss: how does the restoration of order mirror the Great Chain of Being concept from Lesson 1? Link Shakespeare\'s ending to Jacobean beliefs about moral order.',
    differentiation: {
      support: 'Provide key quotations from Malcolm\'s speech.',
      core: 'Discuss connection to Great Chain of Being.',
      stretch: 'Evaluate whether the ending truly restores order or if damage is permanent.',
    },
  },
  homework: 'Revise all five lessons. Write a practice exam paragraph: "How does Shakespeare present the consequences of ambition in Macbeth?"',
  resourcesNeeded: ['Act 4.1 extract', 'Act 5.6-7 extract', 'Prophecy table', 'Malcolm\'s final speech'],
  assessmentOpportunities: ['Understanding of equivocation', 'Prophecy tracking', 'Analytical paragraph quality', 'Exam-style writing'],
  keyVocabulary: ['equivocation', 'prophecy', 'ambition', 'tragic inevitability', 'nemesis', 'restoration of order', 'wordplay', 'double meaning'],
  sendAdaptations: 'Simplified prophecy table. Pre-highlighted key phrases in extracts. Completed examples of prophecy interpretations. Exam paragraph template.',
};

const macbethLesson6: LiteratureLesson = {
  id: 'macbeth-lit-06',
  title: 'Exam Practice: Essay & Extract Questions',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Apply analytical skills to full essay and extract questions',
    'Demonstrate integrated use of AO1, AO2, AO3',
    'Practice time management under exam conditions',
    'Develop exam technique and self-assessment',
  ],
  starterActivity: {
    title: 'Exam Command Words',
    duration: '5 minutes',
    instructions: 'Display three exam questions. Highlight command words: "How does Shakespeare present...", "Analyse the effect of...", "Compare...". Discuss what each word demands. Remind students: analyse means explain the effect of language choices, not just identify them.',
    resources: ['Example questions', 'Command word definitions'],
  },
  mainActivity: {
    title: 'Timed Extract Question & Essay Planning',
    duration: '48 minutes',
    instructions: 'PART 1 (20 min): Provide an unseen extract (5-10 lines). Students complete 30-minute essay-style answer on paper. PART 2 (18 min): Discuss model extract answer. Highlight: specific language analysis, contextual integration, clear PEE structure. PART 3 (10 min): Provide essay title ("How does Shakespeare explore the theme of guilt in Macbeth?"). Students plan in 10 minutes only: thesis, three main arguments, key quotations. Walk around and check plans for clarity and evidence.',
    differentiation: {
      support: 'Provide sentence starters for extract answer. Essay plan frame with prompts.',
      core: 'Timed answer with minimal support. Independent plan.',
      stretch: 'Provide two extract questions; students choose the stronger analysis to explain why.',
    },
    resources: ['Extract (unseen)', 'Essay title', 'Model answer', 'Plan template', 'Timer'],
  },
  plenary: {
    title: 'Self-Assessment & Target-Setting',
    duration: '4 minutes',
    instructions: 'Students use mark scheme to self-assess their extract response. Identify one strength and one area for improvement. Write one sentence: "To improve my next response, I will..."',
    differentiation: {
      support: 'Provide simplified mark scheme with student-friendly language.',
      core: 'Full mark scheme self-assessment.',
      stretch: 'Grade their answer and identify which AO (1, 2, or 3) is strongest/weakest.',
    },
  },
  homework: 'Complete the essay plan from the plenary into a full 40-minute answer (500-600 words).',
  resourcesNeeded: ['Unseen extract', 'Essay title', 'Model answer', 'Mark scheme', 'Plan template', 'Timer'],
  assessmentOpportunities: ['Extract answer', 'Essay plan', 'Full essay (homework)', 'Self-assessment accuracy', 'Mark scheme application'],
  keyVocabulary: ['command words', 'PEE structure', 'analyse', 'context integration', 'quotation selection', 'mark scheme', 'self-assessment'],
  sendAdaptations: 'Simplified mark scheme. Model answer with annotations showing AO2 analysis. Extended time for timed activity (50 minutes instead of 30). Essay planning scaffold with checklist.',
};

// ════════════════════════════════════════════════════════════════════════════
// A CHRISTMAS CAROL — 6 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const christmasCarolLesson1: LiteratureLesson = {
  id: 'carol-lit-01',
  title: 'A Christmas Carol: Context, Structure & Central Message',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Understand Victorian context: industrialisation, poverty, and social responsibility',
    'Identify the five-stave structure and its narrative function',
    'Explore Dickens\' social message and critique of capitalism',
    'Analyse the novella\'s moral purpose',
  ],
  starterActivity: {
    title: 'Rich vs Poor in Victorian England',
    duration: '7 minutes',
    instructions: 'Show images of Victorian London: wealthy mansion and workhouse. Discuss: who bears responsibility for poverty — the individual or society? This debate drives the entire novella.',
    resources: ['Victorian images (mansion and workhouse)', 'Discussion prompt'],
  },
  mainActivity: {
    title: 'Five Staves Structure & Dickens\' Message',
    duration: '45 minutes',
    instructions: 'Introduce five-stave structure: Stave 1 (Marley\'s Warning), Stave 2 (Past), Stave 3 (Present), Stave 4 (Yet to Come), Stave 5 (Redemption). Create visual timeline on whiteboard. For each stave, provide a short summary paragraph. Students then complete a table: "What does each spirit show Scrooge?" and "What is Dickens trying to teach readers?" Discuss: why is redemption possible? What does this suggest about Dickens\' moral philosophy? Link to Victorian social conditions and the call for charity.',
    differentiation: {
      support: 'Provide pre-filled stave table with main events. Simplified summaries.',
      core: 'Complete table independently, identifying Dickens\' message per stave.',
      stretch: 'Add column evaluating how effective each spirit is in changing Scrooge\'s perspective.',
    },
    resources: ['Five-stave diagram', 'Stave summaries', 'Structure table', 'Context slides on Victorian poverty'],
  },
  plenary: {
    title: 'Dickens\' Moral Purpose',
    duration: '5 minutes',
    instructions: 'Conclude: "A Christmas Carol is a ghost story, but Dickens\' real message is social and moral." Discuss: what is he arguing about human responsibility? Why publish this as a novella rather than a sermon?',
    differentiation: {
      support: 'Provide sentence starter: "Dickens wants readers to understand that..."',
      core: 'Full response linking story to message.',
      stretch: 'Consider whether ghost story is an effective method for delivering social critique.',
    },
  },
  homework: 'Research one fact about Victorian workhouses or poverty and write 3-4 sentences on how it contextualises Dickens\' critique.',
  resourcesNeeded: ['Five-stave diagram', 'Stave summaries', 'Structure table', 'Victorian context images'],
  assessmentOpportunities: ['Understanding of structure', 'Context knowledge', 'Message identification', 'Homework research'],
  keyVocabulary: ['stave', 'redemption', 'charity', 'industrialisation', 'workhouse', 'moral message', 'social responsibility', 'supernatural', 'social critique'],
  sendAdaptations: 'Heavily illustrated five-stave diagram with images. Pre-completed stave table. Audio summary of each stave. Visual timeline with key events marked.',
};

const christmasCarolLesson2: LiteratureLesson = {
  id: 'carol-lit-02',
  title: 'Stave 1: Scrooge Introduced — Greed, Isolation & Indifference',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Dickens\' presentation of Scrooge\'s character at the novella\'s opening',
    'Explore language and imagery used to show his greed and isolation',
    'Examine the significance of the "Are there no prisons?" dialogue',
    'Evaluate Dickens\' social critique through characterisation',
  ],
  starterActivity: {
    title: 'Character First Impressions',
    duration: '6 minutes',
    instructions: 'Display key opening quotations (e.g., "Hard as flint", "tight-fisted hand", "counting house"). Students use one word to describe Scrooge. Build word cloud on board. Discuss: does Dickens want us to sympathise with or condemn Scrooge?',
    resources: ['Opening quotations slide', 'Word cloud tool or paper'],
  },
  mainActivity: {
    title: 'Scrooge\'s Characterisation & Social Philosophy',
    duration: '48 minutes',
    instructions: 'Read Stave 1 focusing on: (1) Description of Scrooge ("Hard as flint, cold as ice"), (2) His treatment of Bob Cratchit (cold office, meagre wages), (3) The charity collectors and his response "If they would rather die, they had better do it and decrease the surplus population." Annotate for Dickens\' critique of Scrooge\'s philosophy. Create a character profile showing: Physical description | Emotional state | Beliefs about poor | Beliefs about responsibility. Then read Marley\'s ghost entrance. Discuss: why is Marley chained? What is Dickens\' message? Students write analytical paragraph: "How does Dickens present Scrooge as a symbol of Victorian greed and indifference to suffering?"',
    differentiation: {
      support: 'Annotated extract with key devices marked. Character profile template.',
      core: 'Independent annotation and full paragraph with embedded quotations.',
      stretch: 'Analyse Dickens\' use of imagery (light/dark, warmth/cold) to reinforce character.',
    },
    resources: ['Stave 1 extract', 'Character profile template', 'Paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'Key Quotation: "Are there no prisons?"',
    duration: '3 minutes',
    instructions: 'Display Scrooge\'s response to the charity collectors. Discuss: why does Dickens make Scrooge\'s words so cold and harsh? What is the historical context? (Workhouses did exist, Poor Laws were harsh.)',
    differentiation: {
      support: 'Provide context on Victorian Poor Laws.',
      core: 'Discuss how quotation reveals Scrooge\'s philosophy.',
      stretch: 'Evaluate whether Dickens is fair to this perspective or deliberately biased.',
    },
  },
  homework: 'Analyse the phrase "hard as flint, cold as ice". Explain what Dickens suggests through this metaphor and how it links to his social message.',
  resourcesNeeded: ['Stave 1 extract', 'Character profile template', 'Key quotations slide', 'Paragraph frame'],
  assessmentOpportunities: ['Annotation accuracy', 'Character understanding', 'Paragraph quality', 'Quotation analysis'],
  keyVocabulary: ['characterisation', 'greed', 'indifference', 'isolation', 'metaphor', 'social critique', 'surplus population', 'redemption arc'],
  sendAdaptations: 'Heavily annotated extract. Simplified character profile. Visual representation of Scrooge\'s coldness (colour palette). Pre-filled paragraph with gaps to complete.',
};

const christmasCarolLesson3: LiteratureLesson = {
  id: 'carol-lit-03',
  title: 'Staves 2-3: The Spirits Show Past & Present',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how the Ghost of Christmas Past reveals Scrooge\'s lost humanity',
    'Explore the Ghost of Christmas Present and the contrast between Scrooge\'s isolation and Cratchit family warmth',
    'Examine Dickens\' presentation of the Cratchit family as moral exemplars',
    'Link characterisation to broader social messages about values and meaning',
  ],
  starterActivity: {
    title: 'What Makes a Happy Christmas?',
    duration: '5 minutes',
    instructions: 'Quick brainstorm: students list elements of a happy Christmas (family, warmth, laughter, simple pleasures). Show image of Cratchit household. Discuss: notice the contrast — the Cratchits are poor but happy. What does this suggest?',
    resources: ['Cratchit household image or description', 'Brainstorm slide'],
  },
  mainActivity: {
    title: 'Past, Present & Moral Contrast',
    duration: '50 minutes',
    instructions: 'PART 1 (15 min): Read Stave 2 (Ghost of Christmas Past). Focus on young Scrooge\'s character — his youthful warmth and his love for Fan (sister). Annotate for: sensory language (light, warmth), emotional language showing young Scrooge\'s capacity for love, and Dickens\' regret at lost humanity. PART 2 (20 min): Read Stave 3 (Ghost of Christmas Present). Show the Cratchit family at dinner despite poverty — observe the warmth, love, and gratitude. Annotate for imagery of warmth and togetherness. Create a Venn diagram: "Scrooge\'s House | Both | Cratchit House". PART 3 (15 min): Students write comparative paragraph: "How does Dickens use the contrast between Scrooge and the Cratchit family to present his moral values?"',
    differentiation: {
      support: 'Annotated extracts. Pre-completed Venn diagram. Paragraph frame.',
      core: 'Independent annotation and full comparison paragraph.',
      stretch: 'Analyse Dickens\' use of sentimentality — is the Cratchit portrayal effective or manipulative?',
    },
    resources: ['Stave 2 past extract', 'Stave 3 present extract', 'Venn diagram template', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Turn: Scrooge\'s Compassion Awakens',
    duration: '2 minutes',
    instructions: 'Briefly read Scrooge\'s question about Tiny Tim in Stave 3 and his visible distress. Discuss: when does Scrooge\'s change truly begin?',
    differentiation: {
      support: 'Provide the quotation.',
      core: 'Identify the turning point.',
      stretch: 'Discuss whether emotional change precedes moral change.',
    },
  },
  homework: 'Write a detailed comparison (300 words): "Compare the presentation of Scrooge\'s home and the Cratchit home. What does each suggest about the characters who live there?"',
  resourcesNeeded: ['Stave 2 extract', 'Stave 3 extract', 'Venn diagram', 'Cratchit home description', 'Paragraph frame'],
  assessmentOpportunities: ['Understanding of past/present narrative', 'Comparative analysis', 'Interpretation of moral contrast', 'Essay writing'],
  keyVocabulary: ['redemption', 'nostalgia', 'humanity', 'compassion', 'warmth', 'isolation', 'family values', 'moral exemplar', 'sentimentality'],
  sendAdaptations: 'Heavily illustrated Staves 2 and 3 with character images. Pre-annotated extracts. Completed Venn diagram example. Essay template with structure guidance.',
};

const christmasCarolLesson4: LiteratureLesson = {
  id: 'carol-lit-04',
  title: 'Stave 4: Yet to Come — Fear, Consequences & Mortality',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the Ghost of Christmas Yet to Come\'s terrifying, silent presentation',
    'Examine how Dickens presents the consequences of Scrooge\'s greed and isolation',
    'Explore the symbolic meaning of Scrooge\'s funeral and missing body',
    'Link mortality and legacy to Dickens\' social message',
  ],
  starterActivity: {
    title: 'Fear of Death',
    duration: '6 minutes',
    instructions: 'Discuss: "Who fears death? Why?" Then reveal: Stave 4 is about Scrooge\'s future death and what happens after. The Ghost is silent and terrifying. Why would Dickens make this spirit different from the first two?',
    resources: ['Discussion prompts'],
  },
  mainActivity: {
    title: 'Stave 4: The Silent Terror & Scrooge\'s Reckoning',
    duration: '47 minutes',
    instructions: 'Read Stave 4. Key scenes: (1) The businessmen discussing "a wealthy man" dying without mourning, (2) The poor scavenging Scrooge\'s possessions, (3) The Cratchit family and Tiny Tim\'s death, (4) Scrooge\'s own grave. Annotate for: (a) Tone shift — the absence of warmth, (b) Symbolic objects (bed curtains, wedding ring stripped from corpse), (c) The emotional impact on Scrooge. Create a two-column table: "What Scrooge Fears | Why This Matters". Then write analytical paragraph: "How does Dickens use the Ghost of Christmas Yet to Come to force Scrooge — and readers — to confront mortality and the meaninglessness of greed?"',
    differentiation: {
      support: 'Annotated extract with key scenes marked. Fear table started.',
      core: 'Independent annotation and analysis.',
      stretch: 'Analyse Dickens\' use of symbolism (bed curtains, corpse, grave) and its effectiveness.',
    },
    resources: ['Stave 4 extract', 'Fear table template', 'Paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'The Wake-Up Call',
    duration: '4 minutes',
    instructions: 'Brief transition to Stave 5. Scrooge wakes on Christmas morning and learns the night was only hours long, not years. Discuss: why does Dickens make it so short? What is the message?',
    differentiation: {
      support: 'Explain the timeline.',
      core: 'Discuss the symbolic meaning.',
      stretch: 'Evaluate whether the rapid redemption is believable.',
    },
  },
  homework: 'Analyse one symbolic object from Stave 4 (e.g., bed curtains, wedding ring, Scrooge\'s grave). Write 3-4 sentences on what it symbolises and why Dickens includes it.',
  resourcesNeeded: ['Stave 4 extract', 'Fear table', 'Paragraph frame', 'Symbol analysis guide'],
  assessmentOpportunities: ['Understanding of silent spirit', 'Symbolic analysis', 'Paragraph quality', 'Emotional impact recognition'],
  keyVocabulary: ['mortality', 'consequence', 'symbolic', 'legacy', 'redemption', 'fear', 'greed', 'isolation', 'significance of objects'],
  sendAdaptations: 'Heavily annotated extract with emotional tone marked. Fear table completed as example. Visual timeline showing the one-night redemption arc. Symbol analysis scaffold.',
};

const christmasCarolLesson5: LiteratureLesson = {
  id: 'carol-lit-05',
  title: 'Stave 5 & Redemption: Complete Transformation',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Scrooge\'s complete transformation and its credibility',
    'Examine how Dickens presents the triumph of Christmas spirit and morality',
    'Explore the novella\'s ending and social message',
    'Evaluate the effectiveness of Dickens\' moral argument',
  ],
  starterActivity: {
    title: 'Complete Transformation: Believable?',
    duration: '6 minutes',
    instructions: 'Discuss: can a greedy, isolated man completely change overnight? Why or why not? This is key to evaluating Dickens\' argument about human capacity for redemption.',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'Stave 5: New Scrooge & Dickens\' Message',
    duration: '47 minutes',
    instructions: 'Read Stave 5. Track Scrooge\'s actions: (1) He rises early and buys the biggest turkey for the Cratchits, (2) He raises Bob\'s wages, (3) He becomes active in charity work, (4) He embraces the Christmas spirit, (5) He becomes "a second father" to Tiny Tim. Annotate for: language showing warmth, action verbs showing agency, and the reversal of his earlier indifference. Create a before-and-after character comparison: "Miser Scrooge | Redeemed Scrooge". Students write analytical paragraph: "How effectively does Dickens present Scrooge\'s redemption, and what does it suggest about human nature and morality?" Discuss: is this ending optimistic? Does it match the novella\'s earlier social critique, or does it shift responsibility from society to the individual?',
    differentiation: {
      support: 'Annotated extract. Character comparison template.',
      core: 'Independent analysis and paragraph.',
      stretch: 'Critically evaluate the ending: does redemption of one miser solve Victorian poverty?',
    },
    resources: ['Stave 5 extract', 'Character comparison template', 'Paragraph frame'],
  },
  plenary: {
    title: 'Dickens\' Final Message',
    duration: '4 minutes',
    instructions: 'Return to opening — Scrooge\'s coldness and Dickens\' social critique. Conclude: "A Christmas Carol is both a moral argument for individual compassion AND a critique of systemic indifference." Discuss whether both messages work together or create tension.',
    differentiation: {
      support: 'Provide framework: "Dickens argues that... AND that..."',
      core: 'Discuss dual message.',
      stretch: 'Evaluate which message is more important to Dickens.',
    },
  },
  homework: 'Write a practice exam question (40 min): "How does Dickens present redemption and transformation in A Christmas Carol?" Include analysis of Scrooge\'s journey.',
  resourcesNeeded: ['Stave 5 extract', 'Character comparison template', 'Paragraph frame', 'Exam question'],
  assessmentOpportunities: ['Redemption understanding', 'Character tracking', 'Paragraph quality', 'Exam-style essay'],
  keyVocabulary: ['redemption', 'transformation', 'morality', 'Christmas spirit', 'charity', 'agency', 'legacy', 'human capacity for change'],
  sendAdaptations: 'Heavily illustrated Stave 5 with Scrooge\'s actions depicted. Pre-filled character comparison example. Exam essay template with structure headings.',
};

const christmasCarolLesson6: LiteratureLesson = {
  id: 'carol-lit-06',
  title: 'Themes, Dickens\' Methods & Exam Practice',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Synthesise understanding of key themes: redemption, charity, social responsibility, family',
    'Analyse how Dickens uses narrative structure, symbolism, and characterisation to convey themes',
    'Apply knowledge to essay and extract exam questions',
    'Develop examination technique',
  ],
  starterActivity: {
    title: 'Theme Mapping',
    duration: '6 minutes',
    instructions: 'Display five key themes: Redemption, Charity, Family, Isolation, Social Responsibility. Students place each on a spectrum from "barely present" to "central". Discuss: which theme is most important to Dickens?',
    resources: ['Theme spectrum slide'],
  },
  mainActivity: {
    title: 'Methods & Exam Practice',
    duration: '48 minutes',
    instructions: 'PART 1 (15 min): Create a methods reference sheet. For each theme, identify Dickens\' method: (Redemption: Ghost structure, Scrooge\'s journey | Charity: dialogue and character contrast | Family: warmth imagery in Cratchit scenes | Isolation: opening descriptions, Marley\'s chains | Social Responsibility: "Are there no prisons?" speech, workhouse mention). PART 2 (18 min): Provide two exam questions: (a) Extract question with unseen 5-10 line passage. Students write 15-min response. (b) Essay question. Students plan in 10 min. PART 3 (15 min): Discuss model answers. Highlight what makes answers Grade 8/9 (specific language analysis, thematic understanding, contextual integration).',
    differentiation: {
      support: 'Pre-completed methods table. Extract response frame. Essay plan scaffold.',
      core: 'Independent work on both questions.',
      stretch: 'Provide two extract options; students compare which question is stronger and why.',
    },
    resources: ['Theme-to-method sheet', 'Exam question (extract)', 'Exam question (essay)', 'Model answer', 'Plan template'],
  },
  plenary: {
    title: 'Self-Assessment & Reflection',
    duration: '3 minutes',
    instructions: 'Students use mark scheme to assess their extract response. Identify one AO2 analysis strength and one area to develop before the full exam.',
    differentiation: {
      support: 'Simplified mark scheme.',
      core: 'Full mark scheme assessment.',
      stretch: 'Identify which AO (1, 2, or 3) is strongest and explain why.',
    },
  },
  homework: 'Complete the essay plan from the lesson into a full 40-minute response (500-600 words).',
  resourcesNeeded: ['Methods reference sheet', 'Extract exam question', 'Essay exam question', 'Model answers', 'Mark scheme', 'Plan template'],
  assessmentOpportunities: ['Methods application', 'Extract response', 'Essay plan', 'Full essay (homework)', 'Self-assessment'],
  keyVocabulary: ['redemption', 'charity', 'social responsibility', 'isolation', 'family', 'symbolism', 'structure', 'characterisation', 'narrative purpose'],
  sendAdaptations: 'Pre-completed methods table with colour coding. Simplified extract response. Model answers with annotations. Extended time for timed work.',
};


// ════════════════════════════════════════════════════════════════════════════
// AN INSPECTOR CALLS — 6 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const inspectorLesson1: LiteratureLesson = {
  id: 'inspector-lit-01',
  title: 'An Inspector Calls: Context, Structure & Priestley\'s Message',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Understand the play\'s Edwardian setting and 1945 writing context',
    'Identify the three-act structure and dramatic unities',
    'Explore Priestley\'s socialist message and critique of capitalism',
    'Analyse the Inspector\'s symbolic function as a moral force',
  ],
  starterActivity: {
    title: 'Inspector Clues',
    duration: '7 minutes',
    instructions: 'Display the title. Ask: what is an inspector\'s job? Then reveal: the play is set in 1912 but written in 1945. What historical events happened between these dates? How might this affect Priestley\'s message?',
    resources: ['Timeline slide: 1912-1945'],
  },
  mainActivity: {
    title: 'Context, Structure & Priestley\'s Social Argument',
    duration: '46 minutes',
    instructions: 'PART 1 (12 min): Establish context. 1912: pre-WWI, rigid class system, capitalism unchecked. 1945: post-WWII, socialism rising, welfare state emerging. Priestley is arguing that society must change. PART 2 (18 min): Explain three-act structure and the dramatic unities (all action happens in one evening, one room). Why does Priestley use these constraints? Creates tension and forces confrontation. PART 3 (16 min): Introduce the Birling family and the Inspector\'s arrival. Create a character introduction table: Name | Age | Social Status | Role | Initial Response to Inspector. Students identify: why does the Inspector seem threatening? Discuss: he represents moral judgment. Write one sentence: "What does Priestley\'s use of an Inspector as the protagonist reveal about his message?"',
    differentiation: {
      support: 'Pre-filled character table with some entries. Timeline simplified.',
      core: 'Complete table independently with inferences about social positions.',
      stretch: 'Add column evaluating which character is most defensive and why.',
    },
    resources: ['Timeline', 'Character introduction table', 'Context slides'],
  },
  plenary: {
    title: 'Priestley\'s Argument',
    duration: '4 minutes',
    instructions: 'Conclusion: "This play is not primarily a detective mystery. It\'s a moral argument about social responsibility and collective guilt." Each character shares blame for Eva Smith\'s death. Discuss: why does Priestley make the guilt collective rather than individual?',
    differentiation: {
      support: 'Explain collective guilt concept.',
      core: 'Discuss the implications.',
      stretch: 'Link to socialist ideology — individual vs collective responsibility.',
    },
  },
  homework: 'Research 1912 and 1945 — what major events happened? Write 4-5 sentences on how the gap between these dates shapes the play\'s meaning.',
  resourcesNeeded: ['Timeline 1912-1945', 'Character table', 'Context slides', 'Inspector introduction'],
  assessmentOpportunities: ['Context understanding', 'Character identification', 'Social message comprehension'],
  keyVocabulary: ['collective guilt', 'social responsibility', 'capitalism', 'socialism', 'moral message', 'dramatic unities', 'dramatic irony', 'social critique'],
  sendAdaptations: 'Illustrated timeline with key events. Pre-completed character table. Visual diagram of Birling family relationships. Simplified context summary.',
};

const inspectorLesson2: LiteratureLesson = {
  id: 'inspector-lit-02',
  title: 'Act 1: The Birling Family & Eva Smith\'s First Connection',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Priestley introduces the Birling family and their values',
    'Examine Mr Birling\'s characterisation through language and dramatic irony',
    'Explore Eva Smith\'s significance and Sheila\'s emerging sympathy',
    'Link characterisation to Priestley\'s social critique',
  ],
  starterActivity: {
    title: 'First Impressions',
    duration: '6 minutes',
    instructions: 'Show opening stage directions describing the Birling home as "substantial and comfortable". Then display Mr Birling\'s first lines celebrating a prosperous business deal. Ask: what is Priestley establishing about the family?',
    resources: ['Stage direction slide', 'Opening quotation'],
  },
  mainActivity: {
    title: 'Mr Birling\'s Character & Dramatic Irony',
    duration: '47 minutes',
    instructions: 'Read Act 1 to Sheila\'s confession about Eva at the department store. Focus on: (1) Mr Birling\'s predictions ("The Titanic... unsinkable", "no possibility of war"), (2) His speech about selfish individualism ("a man has to mind his own business"), (3) Sheila\'s behaviour at the beginning vs her growing distress at the mention of Eva Smith. Annotate Birling\'s language for pomposity and certainty. Create a dramatic irony table: "What Birling Says | What Will Actually Happen | What This Reveals". Then examine Sheila\'s shift from support of her parents to fear and sympathy. Write analytical paragraph: "How does Priestley use dramatic irony to undermine Mr Birling\'s capitalist philosophy?"',
    differentiation: {
      support: 'Annotated extract with ironic statements highlighted. Irony table partially completed.',
      core: 'Independent annotation and analysis.',
      stretch: 'Explain what Priestley\'s dramatic irony reveals about his view of business morality.',
    },
    resources: ['Act 1 extract', 'Dramatic irony table', 'Paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'Sheila\'s Moment',
    duration: '4 minutes',
    instructions: 'Highlight Sheila\'s reaction when the Inspector shows the photograph. She recognises Eva from Millwards department store. Discuss: why is Sheila\'s growing sympathy important to Priestley\'s argument about moral responsibility?',
    differentiation: {
      support: 'Read the relevant quotation aloud.',
      core: 'Discuss Sheila\'s emotional response.',
      stretch: 'Evaluate how her youth makes her more capable of change.',
    },
  },
  homework: 'Analyse Mr Birling\'s speech beginning "A man has to mind his own business". Explain what Priestley suggests about this philosophy through context and dramatic irony.',
  resourcesNeeded: ['Act 1 extract', 'Dramatic irony table', 'Key quotation slide', 'Paragraph frame'],
  assessmentOpportunities: ['Understanding of dramatic irony', 'Character analysis', 'Paragraph quality', 'Priestley\'s critique'],
  keyVocabulary: ['dramatic irony', 'characterisation', 'pomposity', 'moral responsibility', 'capitalism', 'individualism', 'sympathy', 'social responsibility'],
  sendAdaptations: 'Heavily annotated extract with dramatic irony marked. Pre-completed irony table example. Visual comparison of Birling\'s predictions vs reality. Simplified paragraph frame.',
};

const inspectorLesson3: LiteratureLesson = {
  id: 'inspector-lit-03',
  title: 'Act 2: Exposing Complicity — Sheila & Gerald\'s Connections',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Priestley reveals each character\'s connection to Eva\'s downfall',
    'Examine Sheila\'s moral awareness contrasted with her parents\' defensiveness',
    'Explore Gerald\'s confession and the extent of his responsibility',
    'Link characterisation to Priestley\'s critique of class and hypocrisy',
  ],
  starterActivity: {
    title: 'Who is Responsible?',
    duration: '6 minutes',
    instructions: 'Establish: Mr Birling fired Eva for asking for higher wages. Now the Inspector will reveal how others harmed her. Discuss: if multiple people cause someone\'s death, is everyone equally guilty?',
    resources: ['Guiding question slide'],
  },
  mainActivity: {
    title: 'Act 2: Collective Guilt & Moral Awareness',
    duration: '48 minutes',
    instructions: 'Read Act 2 focusing on: (1) Sheila\'s confession about her jealous dismissal of Eva from Millwards, (2) Gerald\'s confession about his affair with Eva (she became his mistress out of desperation), (3) The contrast between Sheila\'s immediate remorse and her parents\' resistance. Create a table: "Character | Their Action | Their Response to Guilt". Annotate Sheila\'s language showing genuine shame vs Mr and Mrs Birling\'s attempts to shift blame or minimise their role. Write analytical paragraph: "How does Priestley use the Inspector to systematically reveal each character\'s complicity in Eva\'s tragedy, and what do their different responses suggest about moral awareness?"',
    differentiation: {
      support: 'Annotated extract with confessions highlighted. Guilt response table template.',
      core: 'Independent annotation and full analysis.',
      stretch: 'Evaluate whether Gerald\'s affair or the parents\' dismissal is more morally culpable.',
    },
    resources: ['Act 2 extract', 'Guilt response table', 'Paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'Turning Point: Sheila\'s Insight',
    duration: '3 minutes',
    instructions: 'Sheila realises: "We\'re all partly responsible" for Eva\'s fate. Her parents refuse to accept this. Discuss: why does Priestley make the younger generation more morally aware?',
    differentiation: {
      support: 'Quote the line and explain collective responsibility.',
      core: 'Discuss generational difference in moral awareness.',
      stretch: 'Evaluate whether the play suggests optimism about social change through younger generations.',
    },
  },
  homework: 'Write a comparison (300 words): "Compare how Sheila and her parents respond differently to the revelation of their actions. What does this suggest about moral responsibility?"',
  resourcesNeeded: ['Act 2 extract', 'Guilt response table', 'Comparison frame', 'Key quotations slide'],
  assessmentOpportunities: ['Understanding of complicity', 'Character response analysis', 'Comparative essay', 'Moral awareness identification'],
  keyVocabulary: ['complicity', 'collective guilt', 'moral awareness', 'responsibility', 'remorse', 'hypocrisy', 'class difference', 'generational difference'],
  sendAdaptations: 'Heavily annotated extract. Pre-filled guilt response table example. Comparison essay template with section headings. Character response visual.',
};

const inspectorLesson4: LiteratureLesson = {
  id: 'inspector-lit-04',
  title: 'Act 2-3: Mrs Birling & Eric\'s Revelations',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Mrs Birling\'s character and her absolute refusal of responsibility',
    'Examine Eric\'s confession and moral crisis',
    'Explore Priestley\'s presentation of male weakness and female rigidity',
    'Link character responses to the play\'s moral argument',
  ],
  starterActivity: {
    title: 'The Hardest Truths',
    duration: '6 minutes',
    instructions: 'By Act 2/3, most characters have confessed. Mr Birling, Mrs Birling, and Eric remain. Ask: what might each character\'s reaction reveal about their values and moral capacity?',
    resources: ['Guiding question'],
  },
  mainActivity: {
    title: 'Mrs Birling & Eric: Refusal & Breakdown',
    duration: '46 minutes',
    instructions: 'PART 1 (18 min): Read Mrs Birling\'s interview with the Inspector. She reveals she refused to help Eva when Eva applied to a charity for assistance, calling her a "loose woman." Crucially, Mrs Birling is completely unapologetic. She insists the person who "made her pregnant" is responsible. When the Inspector reveals that person is her own son Eric, she cannot accept it. Annotate for: coldness of language, class prejudice ("loose woman"), refusal of empathy. PART 2 (18 min): Read Eric\'s confession. He is destroyed by guilt — he fathered Eva\'s child and tried to "help" her with money stolen from the office. He despises his parents for their lack of compassion. Create a character contrast table: "Mrs Birling | Eric". Write analytical paragraph: "How does Priestley contrast Mrs Birling\'s moral rigidity with Eric\'s breakdown to critique capitalist values?"',
    differentiation: {
      support: 'Annotated extracts. Character contrast template started.',
      core: 'Independent annotation and analysis.',
      stretch: 'Evaluate whether Mrs Birling is presented as a villain or a tragic figure trapped by class ideology.',
    },
    resources: ['Mrs Birling extract', 'Eric extract', 'Character contrast table', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Family Fractures',
    duration: '5 minutes',
    instructions: 'By the end, Eric and Sheila are united against their parents. The family is morally split. Discuss: what is Priestley suggesting about the impossibility of maintaining moral blindness in the face of truth?',
    differentiation: {
      support: 'Explain the family division.',
      core: 'Discuss moral implications.',
      stretch: 'Consider whether Priestley offers hope for social change through the younger generation.',
    },
  },
  homework: 'Analyse Mrs Birling\'s character. Write 4-5 sentences on whether she is presented as evil or as a tragic product of her class and ideology.',
  resourcesNeeded: ['Mrs Birling extract', 'Eric extract', 'Character contrast table', 'Paragraph frame'],
  assessmentOpportunities: ['Character analysis', 'Contrast understanding', 'Moral interpretation', 'Class critique understanding'],
  keyVocabulary: ['moral rigidity', 'class prejudice', 'hypocrisy', 'moral breakdown', 'capitalist values', 'empathy', 'generational conflict', 'social responsibility'],
  sendAdaptations: 'Heavily annotated extracts. Pre-filled character contrast. Simplified moral interpretation. Audio recording of emotional scenes.',
};

const inspectorLesson5: LiteratureLesson = {
  id: 'inspector-lit-05',
  title: 'The Inspector\'s Identity & Priestley\'s Twist',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the Inspector\'s symbolic function as a moral force',
    'Examine the ambiguity of his true identity',
    'Explore Priestley\'s use of dramatic twist and dramatic irony',
    'Link the ending to Priestley\'s broader social message',
  ],
  starterActivity: {
    title: 'Is He Real?',
    duration: '7 minutes',
    instructions: 'As Act 3 concludes, a phone call reveals no girl has actually died at the hospital. The "Inspector" may not be a real police officer. Ask: what does this revelation change about the play? Does it matter if he\'s "real"?',
    resources: ['Phone call revelation slide'],
  },
  mainActivity: {
    title: 'The Inspector as Symbol & Priestley\'s Argument',
    duration: '45 minutes',
    instructions: 'Read the ending of Act 3 focusing on: (1) The phone call revealing no death, (2) Mr Birling\'s relief and attempt to reassess blame, (3) The Inspector\'s final speech: "We don\'t live alone... One body. If anything happened to one of us all happened to us all..." Annotate the final speech for its universal moral claim. Discuss: regardless of whether the Inspector is "real," what has he accomplished? He has forced each character to confront their actions. Create a diagram: "Inspector\'s Function: Real Detective | Moral Force | Priestley\'s Mouthpiece". Write analytical paragraph: "How does Priestley use the ambiguity of the Inspector\'s identity to emphasise his moral message about collective responsibility?"',
    differentiation: {
      support: 'Annotated final speech. Function diagram template.',
      core: 'Independent analysis and paragraph.',
      stretch: 'Debate whether the ending validates or undermines Priestley\'s moral argument.',
    },
    resources: ['Act 3 ending extract', 'Inspector\'s final speech', 'Function diagram', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Real Mystery',
    duration: '3 minutes',
    instructions: 'Conclude: "The play\'s mystery is not who the Inspector is. It\'s whether people will learn from moral judgment." Priestley suggests society must choose: accept collective responsibility or continue in selfish isolation.',
    differentiation: {
      support: 'Explain the moral mystery.',
      core: 'Discuss Priestley\'s social argument.',
      stretch: 'Evaluate whether the play is optimistic or pessimistic.',
    },
  },
  homework: 'Memorise and analyse the Inspector\'s final speech. Write 5-6 sentences explaining what Priestley argues about human responsibility and social connection.',
  resourcesNeeded: ['Act 3 ending extract', 'Final speech', 'Function diagram', 'Analysis frame'],
  assessmentOpportunities: ['Understanding of symbolism', 'Dramatic twist analysis', 'Moral message comprehension', 'Quotation analysis'],
  keyVocabulary: ['symbolic', 'ambiguity', 'dramatic twist', 'moral force', 'collective responsibility', 'social connection', 'universal theme', 'dramatic irony'],
  sendAdaptations: 'Highlighted final speech. Annotated extract. Visual diagram of Inspector\'s function. Simplified analysis frame with sentence starters.',
};

const inspectorLesson6: LiteratureLesson = {
  id: 'inspector-lit-06',
  title: 'Structure, Language & Exam Practice',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Synthesise understanding of dramatic structure and Priestley\'s techniques',
    'Analyse how language reveals character and moral position',
    'Apply knowledge to examination questions',
    'Develop time management and exam technique',
  ],
  starterActivity: {
    title: 'Structure Recap',
    duration: '5 minutes',
    instructions: 'Recall: three acts, one evening, one room. Priestley reveals guilt progressively. Why is this structure so effective for his moral argument?',
    resources: ['Structure slide'],
  },
  mainActivity: {
    title: 'Methods & Exam Questions',
    duration: '50 minutes',
    instructions: 'PART 1 (15 min): Create a techniques reference sheet. For each technique (dramatic structure, dramatic irony, language/characterisation, stage directions, the Inspector\'s function), identify one example and its effect. PART 2 (20 min): Provide two exam questions: (a) Extract with 6-8 lines. Students write 15-min response. (b) Essay. Students plan in 10 min. PART 3 (15 min): Review model answers emphasising: specific language analysis, integration of context and social message, clear argument development.',
    differentiation: {
      support: 'Pre-completed techniques sheet. Extract frame. Essay scaffold.',
      core: 'Independent work on both questions.',
      stretch: 'Provide two extract options; students compare effectiveness and explain choice.',
    },
    resources: ['Techniques reference sheet', 'Extract exam question', 'Essay question', 'Model answer', 'Plan template', 'Mark scheme'],
  },
  plenary: {
    title: 'Preparation for Real Exam',
    duration: '2 minutes',
    instructions: 'Remind students: the play is not a mystery novel. Focus on Priestley\'s social argument. Link all analysis to the moral message about responsibility.',
    differentiation: {
      support: 'Provide exam focus checklist.',
      core: 'General reminder.',
      stretch: 'Challenge: identify the strongest argument structure in the model answer.',
    },
  },
  homework: 'Complete the essay plan into full 40-minute response (500-600 words).',
  resourcesNeeded: ['Techniques sheet', 'Extract question', 'Essay question', 'Model answers', 'Mark scheme', 'Planning template'],
  assessmentOpportunities: ['Techniques application', 'Extract response', 'Essay plan', 'Full essay (homework)', 'Exam readiness'],
  keyVocabulary: ['dramatic irony', 'dramatic structure', 'characterisation', 'moral message', 'social critique', 'collective responsibility', 'stage directions', 'language analysis'],
  sendAdaptations: 'Pre-completed techniques sheet. Simplified extract response frame. Model answers with annotations. Extended time for timed work.',
};

// ════════════════════════════════════════════════════════════════════════════
// JEKYLL & HYDE — 6 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const jekyllHydeLesson1: LiteratureLesson = {
  id: 'jekyll-lit-01',
  title: 'Jekyll & Hyde: Context, Duality & Victorian Morality',
  text: 'Jekyll and Mr. Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Understand Victorian context: propriety, scientific progress, and repression',
    'Identify the dual nature of human identity as the central theme',
    'Explore Stevenson\'s social critique of Victorian hypocrisy',
    'Analyse the novella\'s structure and narrative technique',
  ],
  starterActivity: {
    title: 'Duality',
    duration: '7 minutes',
    instructions: 'Ask students: do people have a "shadow self"? Darker impulses we hide? Stevenson explores this in 1886, reflecting Victorian anxieties about repression. Discuss: what is the cost of suppressing your true nature?',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'Victorian Context & Stevenson\'s Themes',
    duration: '46 minutes',
    instructions: 'PART 1 (10 min): Context — 1886 London, strict moral codes, scientific optimism, fear of social disorder. Stevenson explores whether "civilised" people can control their baser nature. PART 2 (15 min): Introduce narrative structure. The novella is framed by various perspectives (Utterson\'s narration, letters, testimonies). Why does Stevenson avoid direct access to Jekyll\'s consciousness? Create a structure map showing each narrator and what they reveal. PART 3 (21 min): Identify key themes: duality, the split self, repression, science vs morality, the nature of evil. Create a theme web with the central question: "Is Hyde evil, or is he simply the suppressed part of Jekyll?" Write one sentence synthesis.',
    differentiation: {
      support: 'Pre-filled structure map. Theme web template.',
      core: 'Complete independently with analysis.',
      stretch: 'Add column evaluating Stevenson\'s intended message about human nature.',
    },
    resources: ['Victorian context slides', 'Structure map', 'Theme web template'],
  },
  plenary: {
    title: 'The Central Question',
    duration: '4 minutes',
    instructions: 'Conclude: Stevenson is not just writing a horror story. He\'s exploring Victorian anxieties about the divided self and the danger of moral repression. The novella asks: what happens when you deny your nature?',
    differentiation: {
      support: 'Explain the psychological question.',
      core: 'Discuss Stevenson\'s argument.',
      stretch: 'Link to Victorian sexual repression and forbidden desires.',
    },
  },
  homework: 'Research Victorian attitudes to science, morality, and respectability. Write 4-5 sentences on how these attitudes influenced Stevenson\'s novel.',
  resourcesNeeded: ['Victorian context slides', 'Structure map', 'Theme web', 'Narrative techniques guide'],
  assessmentOpportunities: ['Context understanding', 'Theme identification', 'Structure comprehension'],
  keyVocabulary: ['duality', 'repression', 'Victorian morality', 'divided self', 'respectability', 'narrative frame', 'scientific progress', 'social order'],
  sendAdaptations: 'Illustrated Victorian London images. Pre-filled structure map. Visual theme web. Simplified context summary with key points.',
};

const jekyllHydeLesson2: LiteratureLesson = {
  id: 'jekyll-lit-02',
  title: 'Early Chapters: Mystery & Moral Unease',
  text: 'Jekyll and Mr. Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Stevenson\'s use of mystery and suspense',
    'Examine characterisation of Utterson and his moral perspective',
    'Explore the introductory depiction of Hyde and its unsettling nature',
    'Link narrative technique to theme development',
  ],
  starterActivity: {
    title: 'First Encounter',
    duration: '6 minutes',
    instructions: 'Show the opening: Utterson witnesses Mr Carew\'s murder by Hyde. The victim is a respected man, struck down casually. Ask: what is Stevenson\'s effect by opening with violence?',
    resources: ['Opening description slide'],
  },
  mainActivity: {
    title: 'Mystery, Characterisation & Growing Dread',
    duration: '46 minutes',
    instructions: 'Read early chapters (Utterson investigating, Hyde\'s physical appearance). Key focuses: (1) Utterson\'s character — respectable lawyer, curious, loyal to Jekyll, morally upright. Annotate for his rationality and growing unease. (2) Descriptions of Hyde — always unsettling, difficult to describe, physically repulsive yet magnetic. Why can\'t anyone quite explain what makes Hyde so disturbing? (3) Stevenson\'s narrative technique — mystery deepens gradually. We don\'t know what connections exist until Utterson does. Create a two-column annotation: "What Utterson Observes | What This Suggests" (without revealing the ending). Write analytical paragraph: "How does Stevenson use Utterson\'s perspective and the narrative of mystery to create moral unease in the reader?"',
    differentiation: {
      support: 'Annotated extract with observation/suggestion examples. Paragraph frame.',
      core: 'Independent annotation and paragraph.',
      stretch: 'Analyse Stevenson\'s use of gothic elements and suspense.',
    },
    resources: ['Early chapters extract', 'Annotation guide', 'Observation/Suggestion table', 'Paragraph frame'],
  },
  plenary: {
    title: 'Something\'s Wrong',
    duration: '5 minutes',
    instructions: 'Utterson\'s dreams and discomfort mount. He senses something deeply wrong. Discuss: what is Stevenson\'s purpose in withholding explanation? How does mystery serve his moral argument?',
    differentiation: {
      support: 'Explain narrative suspense.',
      core: 'Discuss the psychological effect.',
      stretch: 'Evaluate whether mystery is justified thematically or merely sensational.',
    },
  },
  homework: 'Analyse Stevenson\'s physical description of Hyde (select one passage, 3-5 lines). Explain what the language suggests about his nature and moral status.',
  resourcesNeeded: ['Early chapters extract', 'Annotation guide', 'Observation/Suggestion table', 'Description passages'],
  assessmentOpportunities: ['Understanding of mystery', 'Characterisation analysis', 'Language analysis', 'Narrative technique'],
  keyVocabulary: ['mystery', 'suspense', 'characterisation', 'gothic', 'unease', 'reputation', 'moral ambiguity', 'physical repulsiveness'],
  sendAdaptations: 'Heavily annotated extract. Pre-filled observation/suggestion table example. Visual character card for Utterson. Simplified paragraph frame.',
};

const jekyllHydeLesson3: LiteratureLesson = {
  id: 'jekyll-lit-03',
  title: 'The Transformation & Scientific Ambition',
  text: 'Jekyll and Mr. Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Jekyll\'s motivation and the scientific experiment',
    'Examine the language of transformation and loss of control',
    'Explore Stevenson\'s critique of scientific ambition without moral restraint',
    'Link character motivation to Victorian context',
  ],
  starterActivity: {
    title: 'Why Transform?',
    duration: '6 minutes',
    instructions: 'Dr Jekyll is respectable, successful, intelligent. Why would he risk everything? Discuss: what do his reasons reveal about Victorian repression?',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'Jekyll\'s Confession & Loss of Control',
    duration: '46 minutes',
    instructions: 'Read Jekyll\'s confession (Letter in final chapters). Key focuses: (1) His motivation — "the greatest interest was in the loathsome study of my own heart" and the desire to "shake off the body of the conventional self." He wants to separate his respectable self from his darker impulses. (2) The transformation language — powerful, almost ecstatic at first. Annotate for: metaphors of freedom, scientific language, then growing horror at loss of control. (3) His realisation — Hyde grows stronger, requires larger doses, begins to act without Jekyll\'s consent. Write two annotated versions of the same passage: first reading (ecstasy), second reading (horror). Then write analytical paragraph: "How does Stevenson use Jekyll\'s confession to argue that the denial and suppression of human nature leads to psychological breakdown?"',
    differentiation: {
      support: 'Annotated confession extract. Comparative annotation example.',
      core: 'Independent analysis with dual reading.',
      stretch: 'Evaluate whether Jekyll is victim or villain — does Stevenson hold him responsible?',
    },
    resources: ['Jekyll\'s confession extract', 'Annotation guide', 'Paragraph frame', 'Context on scientific ambition'],
  },
  plenary: {
    title: 'Science Without Morality',
    duration: '3 minutes',
    instructions: 'Stevenson\'s critique: science, if pursued without moral restraint, enables human corruption. The potion is not evil — Jekyll\'s use of it is. Discuss: is this fair?',
    differentiation: {
      support: 'Explain the moral argument.',
      core: 'Discuss scientific responsibility.',
      stretch: 'Link to Victorian anxieties about evolution and the "animal" self.',
    },
  },
  homework: 'Write a detailed analysis of one transformation passage from Jekyll\'s confession. Explain what the language reveals about his emotional state and Stevenson\'s view of the experiment.',
  resourcesNeeded: ['Confession extract', 'Annotation guide', 'Paragraph frame', 'Key quotations'],
  assessmentOpportunities: ['Understanding of motivation', 'Language analysis', 'Interpretation of transformation', 'Moral evaluation'],
  keyVocabulary: ['transformation', 'repression', 'scientific ambition', 'loss of control', 'psychological breakdown', 'duality', 'morality', 'free will'],
  sendAdaptations: 'Heavily annotated confession extract. Simplified version of confession in modern English. Transformation passage with emotional tone marked. Paragraph frame with sentence starters.',
};

const jekyllHydeLesson4: LiteratureLesson = {
  id: 'jekyll-lit-04',
  title: 'Hyde\'s Nature: Evil, Manifestation, or Victim?',
  text: 'Jekyll and Mr. Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the nature and character of Mr Hyde',
    'Examine whether Hyde is inherently evil or a manifestation of repressed impulses',
    'Explore Stevenson\'s presentation of morality and human nature',
    'Evaluate interpretations of Hyde\'s role in the novella',
  ],
  starterActivity: {
    title: 'Is Hyde Evil?',
    duration: '7 minutes',
    instructions: 'Three possible interpretations: (1) Hyde is genuinely evil, a separate being. (2) Hyde is Jekyll\'s repressed self — amoral, not evil. (3) Hyde is a victim of Jekyll\'s experiment. Students vote. Discuss: what does Stevenson\'s text suggest?',
    resources: ['Interpretation options slide'],
  },
  mainActivity: {
    title: 'Hyde\'s Character & Symbolic Function',
    duration: '45 minutes',
    instructions: 'Examine key scenes involving Hyde: (1) The Carew murder — unprovoked violence, casual cruelty. (2) Hyde\'s appearances — always described as repulsive, animalistic. (3) Jekyll\'s observation that Hyde is "wholly evil" and yet is his own creation. Create a character profile for Hyde: Physical Appearance | Actions | Language | Symbolic Meaning. Annotate descriptions for Stevenson\'s language choices — why "ape-like"? What does animalism suggest? Then write analytical paragraph addressing: "Is Mr Hyde presented as a separate evil being, or as a manifestation of Jekyll\'s repressed nature? What does Stevenson\'s portrayal suggest about the duality of human beings?"',
    differentiation: {
      support: 'Annotated Hyde descriptions. Character profile template.',
      core: 'Independent analysis of multiple perspectives.',
      stretch: 'Debate whether Stevenson\'s portrayal of Hyde supports or undermines his moral argument.',
    },
    resources: ['Hyde scenes extract', 'Character profile template', 'Annotation guide', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Ambiguity',
    duration: '3 minutes',
    instructions: 'Conclude: Stevenson deliberately leaves this ambiguous. Is Hyde pure evil or merely Jekyll\'s unleashed appetites? The answer reveals your interpretation of human nature itself.',
    differentiation: {
      support: 'Explain the ambiguity.',
      core: 'Discuss different interpretations.',
      stretch: 'Connect to Victorian debates about morality and nature vs nurture.',
    },
  },
  homework: 'Write a comparative paragraph (200-250 words): "Compare how Stevenson presents Jekyll and Hyde. What does each character reveal about the other?"',
  resourcesNeeded: ['Hyde scenes extract', 'Character profile template', 'Comparison frame', 'Annotation guide'],
  assessmentOpportunities: ['Character analysis', 'Moral interpretation', 'Comparative essay', 'Symbolic understanding'],
  keyVocabulary: ['manifestation', 'repression', 'duality', 'morality', 'evil', 'animalistic', 'symbolism', 'human nature'],
  sendAdaptations: 'Illustrated character profile comparing Jekyll and Hyde. Annotated description passages. Simplified interpretation options. Comparison essay scaffold.',
};

const jekyllHydeLesson5: LiteratureLesson = {
  id: 'jekyll-lit-05',
  title: 'Descent & Collapse: The Final Transformation',
  text: 'Jekyll and Mr. Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the progressive loss of Jekyll\'s control and agency',
    'Examine the final collapse and Jekyll\'s despair',
    'Explore the novella\'s conclusion and moral lesson',
    'Link ending to broader themes of repression and human nature',
  ],
  starterActivity: {
    title: 'Point of No Return',
    duration: '6 minutes',
    instructions: 'As the novella progresses, Jekyll transitions from wanting the transformation to dreading it. He begins transforming involuntarily. Ask: what has he lost?',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'Collapse & Moral Reckoning',
    duration: '46 minutes',
    instructions: 'Read the final chapters (Jekyll\'s cabin isolation, his last transformation, suicide). Key focuses: (1) Jekyll\'s physical and psychological deterioration — the transformations become involuntary and more frequent. Annotate for imagery of decay and loss of control. (2) His realisation that he can no longer suppress Hyde. The potion runs out; he is trapped as Hyde. (3) His final confession — despair at his own monstrosity, acceptance of responsibility. Create a timeline: "Jekyll\'s Agency" showing his shift from control to helplessness. Write analytical paragraph: "How does Stevenson present Jekyll\'s final collapse, and what does this suggest about the consequences of moral repression?"',
    differentiation: {
      support: 'Annotated final chapters. Agency timeline template.',
      core: 'Independent analysis and paragraph.',
      stretch: 'Evaluate whether the ending validates Stevenson\'s moral message about denial and repression.',
    },
    resources: ['Final chapters extract', 'Agency timeline template', 'Paragraph frame', 'Annotation guide'],
  },
  plenary: {
    title: 'Stevenson\'s Argument',
    duration: '3 minutes',
    instructions: 'Conclusion: Jekyll\'s tragedy is not Hyde\'s evil. It\'s Jekyll\'s belief that he could separate and deny part of himself. Stevenson argues: accept your whole nature, or pay the price.',
    differentiation: {
      support: 'Explain the moral lesson.',
      core: 'Discuss Stevenson\'s philosophy.',
      stretch: 'Evaluate how this argument applies to Victorian society itself.',
    },
  },
  homework: 'Analyse Jekyll\'s final confession: "I am now at my last hour of the condemned." Write 5-6 sentences explaining what he has learned and what Stevenson wants readers to understand.',
  resourcesNeeded: ['Final chapters extract', 'Agency timeline', 'Paragraph frame', 'Final confession quotations'],
  assessmentOpportunities: ['Understanding of collapse', 'Agency analysis', 'Moral interpretation', 'Thematic understanding'],
  keyVocabulary: ['collapse', 'despair', 'repression', 'moral reckoning', 'loss of control', 'consequence', 'redemption', 'acceptance'],
  sendAdaptations: 'Heavily annotated final chapters. Visual timeline of Jekyll\'s agency with illustrations. Simplified moral lesson explanation. Analysis frame with sentence starters.',
};

const jekyllHydeLesson6: LiteratureLesson = {
  id: 'jekyll-lit-06',
  title: 'Themes, Narrative Technique & Exam Practice',
  text: 'Jekyll and Mr. Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Synthesise understanding of key themes and Stevenson\'s techniques',
    'Analyse narrative structure and its effect on meaning',
    'Apply knowledge to examination questions',
    'Develop examination technique and time management',
  ],
  starterActivity: {
    title: 'Narrative Frames',
    duration: '5 minutes',
    instructions: 'Recall: we learn about Jekyll through Utterson\'s eyes first, then letters, then Jekyll\'s confession. Why does Stevenson structure the novella this way? Why not tell Jekyll\'s story directly?',
    resources: ['Narrative structure slide'],
  },
  mainActivity: {
    title: 'Methods & Exam Practice',
    duration: '48 minutes',
    instructions: 'PART 1 (12 min): Create methods reference sheet. For each technique (narrative frame, symbolism, imagery of duality, characterisation, setting), identify examples and explain effect. PART 2 (20 min): Provide two exam questions: (a) Extract question with 6-8 lines. Students write 15-min response. (b) Essay. Students plan in 10 min. PART 3 (16 min): Review model answers. Highlight: analysis of Stevenson\'s methods, integration of theme and context, clear argument about human nature and morality.',
    differentiation: {
      support: 'Pre-completed methods sheet. Extract frame. Essay scaffold.',
      core: 'Independent work on both questions.',
      stretch: 'Provide two extract options; students compare which allows more sophisticated analysis.',
    },
    resources: ['Methods reference sheet', 'Extract question', 'Essay question', 'Model answers', 'Mark scheme', 'Plan template'],
  },
  plenary: {
    title: 'Key Exam Focus',
    duration: '4 minutes',
    instructions: 'Remind: Jekyll & Hyde is fundamentally about the divided self and the dangers of moral repression. Link all analysis to this central theme. Use specific terminology: duality, manifestation, repression, moral restraint.',
    differentiation: {
      support: 'Provide exam focus checklist.',
      core: 'General reminders.',
      stretch: 'Challenge: identify strongest thematic argument in model answer.',
    },
  },
  homework: 'Complete essay plan into full 40-minute response (500-600 words).',
  resourcesNeeded: ['Methods sheet', 'Extract question', 'Essay question', 'Model answers', 'Mark scheme', 'Plan template'],
  assessmentOpportunities: ['Methods application', 'Extract response', 'Essay plan', 'Full essay (homework)', 'Exam readiness'],
  keyVocabulary: ['duality', 'narrative frame', 'symbolism', 'imagery', 'moral repression', 'characterisation', 'theme', 'context'],
  sendAdaptations: 'Pre-completed methods sheet. Simplified extract response frame. Model answers with annotations. Extended time for timed work.',
};

// ════════════════════════════════════════════════════════════════════════════
// ROMEO & JULIET — 6 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const romeoJulietLesson1: LiteratureLesson = {
  id: 'romeo-lit-01',
  title: 'Romeo & Juliet: Context, Love & Conflict',
  text: 'Romeo and Juliet',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Understand Elizabethan context: courtly love, feudal honour, and tragedy',
    'Identify the central conflict between public (family feud) and private (love)',
    'Explore Shakespeare\'s presentation of love as transformative and destructive',
    'Analyse the play\'s structure and tragic inevitability',
  ],
  starterActivity: {
    title: 'Star-Crossed Lovers',
    duration: '7 minutes',
    instructions: 'The Prologue tells us the lovers are "star-crossed" — their fate is sealed. Discuss: what is Shakespeare suggesting about destiny, choice, and external circumstances?',
    resources: ['Prologue quotation slide'],
  },
  mainActivity: {
    title: 'Context, Conflict & Tragedy Structure',
    duration: '46 minutes',
    instructions: 'PART 1 (10 min): Elizabethan context — codes of honour, revenge, courtly love conventions. The Montague-Capulet feud is ancient, absurd, yet deeply serious. PART 2 (15 min): Introduce the central tension: public conflict (family hatred) vs private love (Romeo and Juliet\'s union). Create a chart: "The Feud | The Lovers | The Cost". PART 3 (21 min): Identify tragic structure — Shakespeare presents love as beautiful and destructive simultaneously. Write synthesis: "How does Shakespeare use the contrast between public enmity and private love to create tragedy?"',
    differentiation: {
      support: 'Pre-filled conflict chart. Simplified context.',
      core: 'Complete independently with analysis.',
      stretch: 'Evaluate whether Shakespeare blames fate, character choice, or circumstance for the tragedy.',
    },
    resources: ['Elizabethan context slides', 'Conflict chart', 'Prologue analysis'],
  },
  plenary: {
    title: 'The Central Question',
    duration: '4 minutes',
    instructions: 'Conclude: this play explores whether love can overcome hatred, and at what cost. From the outset, we know the answer: it cannot, and the lovers will die.',
    differentiation: {
      support: 'Explain tragic inevitability.',
      core: 'Discuss the play\'s argument about love and conflict.',
      stretch: 'Link to Renaissance philosophy about love and fate.',
    },
  },
  homework: 'Research Elizabethan concepts of courtly love and honour. Write 4-5 sentences on how these contexts shape the lovers\' choices.',
  resourcesNeeded: ['Context slides', 'Conflict chart', 'Prologue text', 'Feudal honour explanation'],
  assessmentOpportunities: ['Context understanding', 'Conflict identification', 'Tragic structure comprehension'],
  keyVocabulary: ['star-crossed', 'courtly love', 'honour', 'feud', 'tragic', 'fate vs choice', 'transformation', 'conflict'],
  sendAdaptations: 'Illustrated context slides with Elizabethan London images. Pre-filled conflict chart. Visual family tree of Montagues and Capulets. Simplified context summary.',
};

const romeoJulietLesson2: LiteratureLesson = {
  id: 'romeo-lit-02',
  title: 'Acts 1-2: Love at First Sight & the Balcony Scene',
  text: 'Romeo and Juliet',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Shakespeare\'s presentation of Romeo\'s transformation through love',
    'Examine the balcony scene and its language of devotion',
    'Explore the tension between love\'s beauty and its danger',
    'Link characterisation to tragic inevitability',
  ],
  starterActivity: {
    title: 'Love at First Sight',
    duration: '6 minutes',
    instructions: 'Show the moment Romeo first sees Juliet at the ball. He forgets Rosaline instantly. Ask: is this romantic or problematic? What does it suggest about Romeo\'s nature?',
    resources: ['Ball scene description slide'],
  },
  mainActivity: {
    title: 'Romeo\'s Love & The Balcony Scene',
    duration: '47 minutes',
    instructions: 'Read Act 1.5 (Romeo at the ball) and Act 2.2 (balcony scene). Focus on: (1) Romeo\'s language — hyperbolic, poetic, comparing Juliet to light and divinity. Annotate for metaphor and imagery. (2) His recklessness — he ignores danger to be near her. (3) The balcony scene — both lovers speak poetry, but they are also deeply vulnerable. Juliet\'s "What\'s in a name?" speech questions the feud\'s logic. Create a poetry analysis table: "Language Device | Purpose | Effect". Students write analytical paragraph: "How does Shakespeare use language and imagery to present Romeo\'s love as both beautiful and dangerous?"',
    differentiation: {
      support: 'Annotated extracts. Poetry analysis table template.',
      core: 'Independent annotation and analysis.',
      stretch: 'Evaluate whether Romeo\'s love is genuine devotion or destructive obsession.',
    },
    resources: ['Act 1.5 extract', 'Act 2.2 balcony scene', 'Poetry analysis table', 'Paragraph frame'],
  },
  plenary: {
    title: 'Dangerous Beauty',
    duration: '4 minutes',
    instructions: 'The balcony scene is poetic and tender, but Shakespeare reminds us of danger: Romeo is trespassing, both families would condemn this union. Beauty and danger coexist. Discuss: does Shakespeare warn us?',
    differentiation: {
      support: 'Explain the dramatic tension.',
      core: 'Discuss coexistence of beauty and danger.',
      stretch: 'Evaluate whether Shakespeare presents the lovers as naive or tragically aware.',
    },
  },
  homework: 'Memorise and analyse one quotation from the balcony scene (Juliet\'s "What\'s in a name?" or Romeo\'s response). Write 5-6 sentences explaining what it reveals about their love and their understanding of the feud.',
  resourcesNeeded: ['Act 1.5 extract', 'Act 2.2 balcony scene', 'Poetry table', 'Paragraph frame'],
  assessmentOpportunities: ['Poetic language analysis', 'Character understanding', 'Quotation analysis', 'Paragraph quality'],
  keyVocabulary: ['metaphor', 'imagery', 'poetic language', 'courtly love', 'danger', 'devotion', 'recklessness', 'tragedy'],
  sendAdaptations: 'Heavily annotated extracts with literary devices marked. Simplified poetry analysis table. Visual setting of balcony scene. Paragraph frame with sentence starters.',
};

const romeoJulietLesson3: LiteratureLesson = {
  id: 'romeo-lit-03',
  title: 'Act 3: The Turning Point — Violence & Consequences',
  text: 'Romeo and Juliet',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the pivotal Act 3 street brawl and its consequences',
    'Examine how violence disrupts the love story',
    'Explore Romeo\'s emotional responses and rash decisions',
    'Link the turning point to tragic inevitability',
  ],
  starterActivity: {
    title: 'One Moment Changes Everything',
    duration: '6 minutes',
    instructions: 'In Act 3, the lovers have just married secretly. Then Tybalt challenges Romeo. A street fight erupts. Ask: what is the consequence of this one act of violence?',
    resources: ['Act 3 summary slide'],
  },
  mainActivity: {
    title: 'The Brawl: Violence & Tragic Consequence',
    duration: '47 minutes',
    instructions: 'Read Act 3.1 (the street fight) and Act 3.2 (Juliet\'s response). Key focuses: (1) Romeo\'s shift from lover to fighter — he kills Tybalt in revenge for Mercutio\'s death. Annotate for emotional language showing his rage and despair. (2) The immediate consequence — Romeo is banished from Verona. (3) Juliet\'s reaction — "O serpent heart, hid with a flowering face!" She curses Romeo while still loving him. The tragedy pivots on this moment. Create a before-and-after diagram: "The Lovers\' Hope | Act 3.1 | Their Despair". Students write analytical paragraph: "How does Shakespeare use Act 3 to shift the play from romance to tragedy, and what does he suggest about the relationship between love and violence?"',
    differentiation: {
      support: 'Annotated extract with emotional shifts marked. Before/After diagram template.',
      core: 'Independent analysis and paragraph.',
      stretch: 'Debate whether Romeo\'s killing of Tybalt is justified or tragic flaw.',
    },
    resources: ['Act 3.1 brawl extract', 'Act 3.2 Juliet response', 'Before/After diagram', 'Paragraph frame'],
  },
  plenary: {
    title: 'No Going Back',
    duration: '4 minutes',
    instructions: 'After Act 3.1, the lovers cannot escape their fate. The feud has claimed them. Shakespeare suggests that their love, while beautiful, cannot survive in a world of violence and hatred.',
    differentiation: {
      support: 'Explain the turning point.',
      core: 'Discuss tragic momentum.',
      stretch: 'Evaluate whether the tragedy was avoidable.',
    },
  },
  homework: 'Write a detailed analysis of Romeo\'s response to killing Tybalt. Explain what his language and actions reveal about his character and his tragic flaw.',
  resourcesNeeded: ['Act 3.1 extract', 'Act 3.2 extract', 'Before/After diagram', 'Paragraph frame'],
  assessmentOpportunities: ['Understanding of turning point', 'Emotional analysis', 'Paragraph quality', 'Tragic flaw identification'],
  keyVocabulary: ['turning point', 'tragedy', 'banishment', 'revenge', 'rash', 'tragic flaw', 'violence', 'consequence'],
  sendAdaptations: 'Heavily annotated extracts with emotional tone marked. Pre-filled before/after diagram. Visual scene of street fight. Simplified analysis frame.',
};

const romeoJulietLesson4: LiteratureLesson = {
  id: 'romeo-lit-04',
  title: 'Act 3-4: Separation & Secret Plans',
  text: 'Romeo and Juliet',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the lovers\' night together and their separation',
    'Examine Juliet\'s parents\' plan for Paris and her moral crisis',
    'Explore the theme of miscommunication and dramatic irony',
    'Link dramatic irony to tragic inevitability',
  ],
  starterActivity: {
    title: 'One Night',
    duration: '6 minutes',
    instructions: 'Romeo and Juliet marry and consummate their love. But Romeo must flee at dawn or die. Ask: why does Shakespeare give them this one perfect moment before tragedy?',
    resources: ['Act 3.5 setting slide'],
  },
  mainActivity: {
    title: 'Separation, Crisis & Dramatic Irony',
    duration: '46 minutes',
    instructions: 'Read Act 3.5 (morning parting) and Act 3.4-4.1 (Paris engagement and Juliet\'s crisis). Focus on: (1) The lovers\' parting — they attempt to deny dawn\'s arrival, speaking of night and stars. Annotate for imagery of light/dark and their unwillingness to separate. (2) Juliet\'s parents announce her betrothal to Paris. She cannot reveal her secret marriage. She is trapped. (3) Juliet seeks Friar Lawrence\'s help. He provides the potion plan. This is critical dramatic irony — the plan to avoid tragedy will cause it. Students create a dramatic irony table: "What the Characters Believe | What We Know | The Consequence". Write analytical paragraph: "How does Shakespeare use dramatic irony and the potion plan to accelerate the tragedy?"',
    differentiation: {
      support: 'Annotated extracts. Dramatic irony table template.',
      core: 'Independent analysis.',
      stretch: 'Evaluate whether Friar Lawrence\'s plan is foolish or reasonable given the circumstances.',
    },
    resources: ['Act 3.5 extract', 'Act 4.1 Friar scene extract', 'Dramatic irony table', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Fatal Plan',
    duration: '5 minutes',
    instructions: 'The Friar\'s potion is meant to preserve Juliet\'s marriage to Romeo. Instead, it will cause both their deaths. Shakespeare shows how good intentions combined with miscommunication lead to tragedy.',
    differentiation: {
      support: 'Explain the plan and its tragic result.',
      core: 'Discuss miscommunication.',
      stretch: 'Evaluate whether the Friar bears responsibility for the deaths.',
    },
  },
  homework: 'Write a comparison (250-300 words): "Compare Romeo and Juliet\'s responses to their separation and the threat of Juliet\'s marriage to Paris. What does their contrast reveal about their characters?"',
  resourcesNeeded: ['Act 3.5 extract', 'Act 4.1 extract', 'Dramatic irony table', 'Comparison frame'],
  assessmentOpportunities: ['Understanding of dramatic irony', 'Character comparison', 'Plot understanding', 'Essay writing'],
  keyVocabulary: ['dramatic irony', 'miscommunication', 'separation', 'crisis', 'fate', 'good intentions', 'tragedy'],
  sendAdaptations: 'Heavily annotated extracts. Pre-filled dramatic irony table example. Visual timeline of plot progression. Comparison essay scaffold.',
};

const romeoJulietLesson5: LiteratureLesson = {
  id: 'romeo-lit-05',
  title: 'Act 5: Tragedy Fulfilled',
  text: 'Romeo and Juliet',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the final catastrophe and its inevitability',
    'Examine Romeo\'s response to news of Juliet\'s "death"',
    'Explore the tragic ending and its emotional impact',
    'Link the conclusion to the play\'s themes and context',
  ],
  starterActivity: {
    title: 'The Final Act',
    duration: '6 minutes',
    instructions: 'Romeo receives false news that Juliet is dead. He purchases poison and goes to her tomb. What will happen when both lovers believe the other is dead?',
    resources: ['Act 5 summary prompt'],
  },
  mainActivity: {
    title: 'The Tomb Scene: Tragic Resolution',
    duration: '46 minutes',
    instructions: 'Read Act 5.3 (the tomb scene). Key focuses: (1) Romeo\'s arrival at the tomb — he fights Paris and kills him. Annotate for his desperation and rage. (2) His discovery of "dead" Juliet — his final speech is one of Shakespeare\'s most poetic and tragic moments. He compares her to light even in death, kisses her, and drinks the poison. Annotate for imagery and the irony that Juliet is alive but he believes her dead. (3) Juliet\'s awakening — she finds Romeo truly dead and kills herself. (4) The families\' arrival and their discovery of the tragedy. Create a final irony table: "Romeo\'s Misunderstanding | Juliet\'s Misunderstanding | The Preventable Tragedy". Students write analytical paragraph: "How does Shakespeare present the final tragedy as both inevitable and preventable, and what does this suggest about the nature of tragedy itself?"',
    differentiation: {
      support: 'Annotated tomb scene. Irony table started.',
      core: 'Independent analysis with sophisticated interpretation.',
      stretch: 'Evaluate whether the tragedy could have been prevented by any character.',
    },
    resources: ['Act 5.3 tomb extract', 'Final irony table', 'Paragraph frame', 'Key quotations'],
  },
  plenary: {
    title: 'Waste & Redemption',
    duration: '3 minutes',
    instructions: 'The Prologue told us "a pair of star-crossed lovers take their life." We have now witnessed the tragedy. But the ending also suggests redemption — the families end their feud because of the lovers\' deaths. Discuss: is there hope in this resolution?',
    differentiation: {
      support: 'Explain the ironic resolution.',
      core: 'Discuss redemption through tragedy.',
      stretch: 'Evaluate whether the families\' reconciliation justifies the lovers\' deaths.',
    },
  },
  homework: 'Analyse Romeo\'s final speech before drinking poison (Act 5.3.102-120). Write 6-7 sentences explaining what it reveals about his love, his despair, and Shakespeare\'s presentation of tragedy.',
  resourcesNeeded: ['Act 5.3 extract', 'Final irony table', 'Paragraph frame', 'Final speech quotation'],
  assessmentOpportunities: ['Understanding of tragic resolution', 'Irony analysis', 'Quotation analysis', 'Thematic comprehension'],
  keyVocabulary: ['tragedy', 'inevitable', 'irony', 'miscommunication', 'fate', 'poetic', 'sacrifice', 'redemption'],
  sendAdaptations: 'Heavily annotated tomb scene with emotional tone marked. Pre-filled irony table. Visual timeline of final act. Paragraph frame with sentence starters.',
};

const romeoJulietLesson6: LiteratureLesson = {
  id: 'romeo-lit-06',
  title: 'Language, Structure & Exam Practice',
  text: 'Romeo and Juliet',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Synthesise understanding of Shakespeare\'s dramatic techniques',
    'Analyse use of poetry, imagery, and dramatic irony',
    'Apply knowledge to examination questions',
    'Develop exam technique and critical evaluation',
  ],
  starterActivity: {
    title: 'Shakespeare\'s Tools',
    duration: '5 minutes',
    instructions: 'Recall key techniques: dramatic irony, poetic language, imagery (light/dark, stars, fate), soliloquies, dramatic structure. Which is most important to understanding the play?',
    resources: ['Techniques overview slide'],
  },
  mainActivity: {
    title: 'Methods & Exam Practice',
    duration: '50 minutes',
    instructions: 'PART 1 (15 min): Create methods reference sheet. For each technique (dramatic irony, imagery, language of love/violence, dramatic structure, characterisation), identify examples and explain their function in creating tragedy. PART 2 (20 min): Provide two exam questions: (a) Extract (6-8 lines from any key scene). Students write 15-min response. (b) Essay. Students plan in 10 min. PART 3 (15 min): Review model answers emphasising: specific language analysis, thematic understanding, integration of context (Elizabethan love conventions, the feud), and evaluation of Shakespeare\'s presentation.',
    differentiation: {
      support: 'Pre-completed methods sheet. Extract frame. Essay scaffold.',
      core: 'Independent work on both questions.',
      stretch: 'Provide two extracts; students compare which allows richer analysis.',
    },
    resources: ['Methods reference sheet', 'Extract question', 'Essay question', 'Model answers', 'Mark scheme', 'Plan template'],
  },
  plenary: {
    title: 'Final Exam Focus',
    duration: '2 minutes',
    instructions: 'Key: Romeo & Juliet is fundamentally a tragedy about the collision between love and hatred, private passion and public enmity. Use specific terminology: dramatic irony, imagery, poetic language, tragic inevitability. Link all analysis to this central tension.',
    differentiation: {
      support: 'Provide exam focus checklist.',
      core: 'Remind of key themes.',
      stretch: 'Challenge: identify most sophisticated argument in model answer.',
    },
  },
  homework: 'Complete essay plan into full 40-minute response (500-600 words).',
  resourcesNeeded: ['Methods sheet', 'Extract question', 'Essay question', 'Model answers', 'Mark scheme', 'Plan template'],
  assessmentOpportunities: ['Methods application', 'Extract response', 'Essay plan', 'Full essay (homework)', 'Exam readiness'],
  keyVocabulary: ['dramatic irony', 'imagery', 'poetic language', 'tragedy', 'fate', 'love', 'conflict', 'characterisation'],
  sendAdaptations: 'Pre-completed methods sheet. Simplified extract response frame. Model answers with annotations. Extended time for timed work.',
};

// ════════════════════════════════════════════════════════════════════════════
// EXPORT
// ════════════════════════════════════════════════════════════════════════════


// ════════════════════════════════════════════════════════════════════════════
// MACBETH — 4 ADDITIONAL SPECIALIZED LESSONS (ACTS 1, 2, 3, 5)
// ════════════════════════════════════════════════════════════════════════════

const macbethActOneAmbition: LiteratureLesson = {
  id: 'macbeth-lit-07',
  title: 'Macbeth Act 1: Ambition Awakened & The Seeds of Tragedy',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the role of ambition as a tragic flaw in Act 1',
    'Examine how the witches and Lady Macbeth activate Macbeth\'s latent ambition',
    'Explore the concept of fate versus free will through Act 1 events',
    'Evaluate Shakespeare\'s use of the supernatural to foreshadow tragedy',
    'Link Act 1 characterisation to later psychological breakdown',
  ],
  starterActivity: {
    title: 'Ambition: Virtue or Vice?',
    duration: '7 minutes',
    instructions: 'Students rank motivations: family, honour, wealth, power, fame. Discuss: which drive Macbeth in Act 1? Show image of ambitious people (politicians, CEOs). Is ambition inherently dangerous or does context matter? Link to Jacobean beliefs about unchecked ambition threatening divine order.',
    resources: ['Ambition ranking cards', 'Modern examples images'],
  },
  mainActivity: {
    title: 'The Witches\' Prophecy & Macbeth\'s Internal Conflict',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read Act 1.3 (encounter with witches). Annotate: (1) Physical reactions ("start" "pall"), (2) The three prophecies, (3) The crucial aside "If chance will have me king, why, yet it may come without my stir". Identify Shakespeare\'s presentation of Macbeth as neither puppet nor free agent. PART 2 (15 min): Read Act 1.7 ("We will proceed no further"). Annotate Lady Macbeth\'s manipulation tactics: rhetorical questions, accusations of cowardice, appeals to masculinity. Track how she unravels Macbeth\'s rational objections. PART 3 (17 min): Students complete a "Reasons for Murder" chart: What does the witches\' prophecy do? What does Lady Macbeth do? What does Macbeth\'s ambition do? Write extended response: "Which force — supernatural, spousal influence, or personal ambition — is most responsible for Macbeth\'s decision to murder Duncan? Use Act 1 evidence."',
    differentiation: {
      support: 'Pre-annotated key extracts with devices labeled. Reasons chart template with sentence starters.',
      core: 'Independent annotation and response with clear textual integration.',
      stretch: 'Evaluate Shakespeare\'s intentional ambiguity: does he want audiences to judge Macbeth harshly or sympathetically given the forces arrayed against him?',
    },
    resources: ['Act 1.3 witches extract', 'Act 1.7 Lady Macbeth extract', 'Reasons chart template', 'Response frame', 'Context notes on Jacobean fatalism'],
  },
  plenary: {
    title: 'The Tragic Flaw Emerges',
    duration: '3 minutes',
    instructions: 'Define hamartia. Conclude: "Macbeth\'s ambition is triggered by the witches but shaped by Lady Macbeth and enabled by his own desire for power. All three must work together for tragedy to unfold." Students exit with this idea in mind for future lessons.',
    differentiation: {
      support: 'Display definition of hamartia on board.',
      core: 'Understand how ambition becomes tragic flaw.',
      stretch: 'Consider: is ambition the flaw, or is it Macbeth\'s susceptibility to influence?',
    },
  },
  homework: 'Write a 400-word analytical essay: "How does Shakespeare present the competing forces of fate, influence, and free will in Act 1 of Macbeth?" Include at least three quotations.',
  resourcesNeeded: ['Act 1.3 and 1.7 extracts', 'Reasons chart', 'Context slides on Jacobean fatalism', 'Hamartia definition card'],
  assessmentOpportunities: ['Annotation precision', 'Chart accuracy', 'Essay analysis', 'Understanding of tragic flaw concept', 'Quotation selection'],
  keyVocabulary: ['ambition', 'hamartia', 'tragic flaw', 'prophecy', 'manipulation', 'free will', 'fate', 'supernatural', 'aside'],
  sendAdaptations: 'Heavily annotated extracts with line numbers. Pre-filled reasons chart. Essay frame with paragraph headings. Audio recording of key scenes. Simplified explanation of hamartia with modern examples.',
};

const macbethActTwoGuilt: LiteratureLesson = {
  id: 'macbeth-lit-08',
  title: 'Macbeth Act 2: Guilt, Conscience & The Point of No Return',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Shakespeare presents guilt through soliloquy and imagery',
    'Examine the dagger hallucination as manifestation of conscience',
    'Explore the murder of Duncan and its immediate psychological aftermath',
    'Evaluate the contrast between Lady Macbeth\'s resolve and Macbeth\'s breakdown',
    'Link Act 2 to the themes of ambition and moral corruption',
  ],
  starterActivity: {
    title: 'Before & After Murder',
    duration: '6 minutes',
    instructions: 'Show film stills of a heist movie before and after the crime. Discuss: how do characters\' emotions and thoughts change after crossing a moral line? Introduce: Act 2 shows Macbeth\'s conscience erupting before he even commits the murder.',
    resources: ['Film stills (heist/crime drama)', 'Discussion prompt'],
  },
  mainActivity: {
    title: 'The Dagger Soliloquy & Psychological Disintegration',
    duration: '46 minutes',
    instructions: 'PART 1 (18 min): Read Act 2.1.33-61 (dagger soliloquy). Students annotate for: (1) Personification ("dagger that I see before me"), (2) Metaphor comparing blood to nature ("gout" of blood), (3) Sensory imagery (visual but not tactile), (4) Shift from wondering if the dagger is real to understanding it\'s a vision created by his mind. Create a "What the Dagger Represents" chart: rational interpretation vs psychological interpretation. PART 2 (18 min): Read Act 2.2.60-72 ("A little water clears us of this deed"). Juxtapose with Act 5.1\'s sleepwalking obsession. Discuss: how is this ironic? What does Lady Macbeth not understand about guilt? PART 3 (10 min): Students write analytical paragraph: "Analyse how the dagger soliloquy reveals Macbeth\'s state of mind before the murder and foreshadows his later psychological deterioration."',
    differentiation: {
      support: 'Pre-highlighted dagger soliloquy devices. Chart template. Paragraph frame with sentence starters.',
      core: 'Independent annotation and response with developed analysis.',
      stretch: 'Write second paragraph comparing the dagger to the ghost of Banquo in Act 3, discussing how both reveal Macbeth\'s internal state.',
    },
    resources: ['Act 2.1 soliloquy extract', 'Act 2.2 extract', 'Chart template', 'Paragraph frame', 'Device identification guide'],
  },
  plenary: {
    title: 'The Crime is Committed: What Now?',
    duration: '5 minutes',
    instructions: 'Brief discussion: Macbeth has killed Duncan and become king. Seems like ambition is satisfied. But why does he seem miserable? Introduce idea of Act 3: becoming king does not bring peace; it brings paranoia and further violence.',
    differentiation: {
      support: 'Provide clear summary of Act 2\'s ending.',
      core: 'Predict what Macbeth might do next and why.',
      stretch: 'Discuss: does guilt serve as a natural brake on further crime, or will Macbeth commit more violence to protect his position?',
    },
  },
  homework: 'Memorise six lines from the dagger soliloquy and write detailed analysis of one device\'s use. Aim for 8-10 sentences showing sophisticated analysis of Shakespeare\'s methods.',
  resourcesNeeded: ['Act 2.1.33-61 soliloquy', 'Act 2.2 extract', 'Chart template', 'Analysis frame', 'Device guide'],
  assessmentOpportunities: ['Soliloquy annotation', 'Chart completion', 'Irony identification', 'Analytical paragraph quality', 'Quotation memorisation and analysis'],
  keyVocabulary: ['soliloquy', 'personification', 'metaphor', 'hallucination', 'conscience', 'guilt', 'psychological breakdown', 'irony', 'foreshadowing'],
  sendAdaptations: 'Simplified soliloquy with modern English translation. Pre-annotated version for comparison. Chart template with examples. Paragraph frame with all sentence starters provided. Visual diagram of Macbeth\'s emotional state.',
};

const macbethActThreeTyranny: LiteratureLesson = {
  id: 'macbeth-lit-09',
  title: 'Macbeth Act 3: Tyranny, Paranoia & The Spiral of Violence',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Macbeth transforms from guilt-ridden murderer to tyrant',
    'Examine the nature of tyranny through Macbeth\'s actions and paranoia',
    'Explore the ghost of Banquo as representation of Macbeth\'s guilt',
    'Evaluate how ambition leads to escalating violence',
    'Link Act 3 to Shakespearean and Jacobean concepts of kingship',
  ],
  starterActivity: {
    title: 'Ambition to Power: What\'s the Difference?',
    duration: '6 minutes',
    instructions: 'Define: Ambition (desire to achieve), Power (ability to control). Discuss: Does gaining power satisfy ambition or create new anxieties? Show image of secure vs insecure ruler. Introduce: Macbeth has achieved his ambition but now fears losing his power.',
    resources: ['Definitions slide', 'Ruler images (confident vs paranoid)'],
  },
  mainActivity: {
    title: 'From King to Tyrant: Macbeth\'s Descent into Paranoia',
    duration: '46 minutes',
    instructions: 'PART 1 (15 min): Read Act 3.1.48-72 (Macbeth\'s soliloquy about Banquo). Annotate for: (1) His fear that the prophecy is for Banquo\'s children ("They hailed him father to a line of kings"), (2) His awareness that achieving the crown hasn\'t brought peace ("to be thus is nothing"), (3) His decision to hire murderers. Track: Macbeth is now planning murder not to achieve ambition but to secure power. PART 2 (16 min): Read Act 3.4 (the banquet scene and Banquo\'s ghost). Annotate for: (1) How the ghost appears twice, (2) Macbeth\'s visible terror, (3) His attempt to hide his reaction from nobles, (4) The revelation of his isolated paranoia. PART 3 (15 min): Students create a "Spiral of Violence" diagram: Duncan\'s murder → Macbeth fears Banquo → Macbeth murders Banquo → Macbeth fears Macduff → (next lesson). Write analytical paragraph: "How does Shakespeare show that tyranny and violence spiral out of control once ambition turns to paranoia?"',
    differentiation: {
      support: 'Pre-annotated soliloquy and banquet scene. Spiral diagram template with prompts.',
      core: 'Independent annotation and diagram with analytical writing.',
      stretch: 'Evaluate: does Macbeth have legitimate political concerns about Banquo\'s heirs, or is his paranoia entirely irrational? Use context of Renaissance political theory.',
    },
    resources: ['Act 3.1.48-72 soliloquy', 'Act 3.4 banquet scene extract', 'Spiral diagram template', 'Paragraph frame', 'Context on Renaissance kingship'],
  },
  plenary: {
    title: 'The Tyrant\'s Isolation',
    duration: '5 minutes',
    instructions: 'Conclude: "Macbeth\'s tyranny stems from paranoia. The more he tries to secure power through violence, the more isolated and fearful he becomes." Link to kingship theme: a true king should rule through legitimacy and virtue, not fear. This sets up Act 4\'s witches\' prophecies and Act 5\'s inevitable downfall.',
    differentiation: {
      support: 'Provide summary statement.',
      core: 'Understand connection between paranoia and tyranny.',
      stretch: 'Discuss Shakespeare\'s political message about legitimacy vs usurped power.',
    },
  },
  homework: 'Write extended response (500 words): "Analyse the transition from Macbeth as murderer to Macbeth as tyrant in Act 3. How has his character and motivation changed?" Include at least three quotations.',
  resourcesNeeded: ['Act 3.1 soliloquy', 'Act 3.4 banquet scene', 'Spiral diagram template', 'Context on Renaissance kingship'],
  assessmentOpportunities: ['Annotation accuracy', 'Diagram completion', 'Understanding of escalation', 'Analytical writing quality', 'Quotation integration'],
  keyVocabulary: ['tyrant', 'paranoia', 'usurpation', 'legitimacy', 'kingship', 'escalation', 'isolation', 'fear', 'guilt', 'violence'],
  sendAdaptations: 'Simplified extracts with key phrases highlighted. Pre-filled spiral diagram. Response frame with section headings. Audio recordings of scenes. Visual timeline of Act 3 events.',
};

const macbethActFiveDownfall: LiteratureLesson = {
  id: 'macbeth-lit-10',
  title: 'Macbeth Act 5: Downfall, Justice & Tragic Resolution',
  text: 'Macbeth',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the final battle and Macbeth\'s confrontation with Macduff',
    'Examine how the witches\' prophecies are fulfilled through ambiguous language',
    'Explore themes of justice, fate, and moral restoration',
    'Evaluate Shakespeare\'s tragic resolution and thematic conclusion',
    'Link Act 5 to the complete arc from ambition to destruction',
  ],
  starterActivity: {
    title: 'Prophecies & Deception',
    duration: '6 minutes',
    instructions: 'Quick logic puzzle: "You will be safe from all men born of woman." What\'s the trick? (Macduff was "from his mother\'s womb untimely ripped.") Introduce: the witches\' prophecies use truth deceptively, setting up Macbeth\'s tragic end.',
    resources: ['Logic puzzle', 'Prophecy slides'],
  },
  mainActivity: {
    title: 'Equivocation, Irony & Tragic Justice',
    duration: '46 minutes',
    instructions: 'PART 1 (16 min): Read Act 4.1 (witches\' prophecies). Create three-column table: Prophecy | How Macbeth Interprets It | True Meaning. Focus on: "none of woman born", "until Birnam Wood moves to Dunsinane", "no man of woman born shall harm Macbeth". Annotate for equivocation (technically true but deceptive). PART 2 (18 min): Read Act 5.6-7 (final battle). Track: Birnam soldiers use camouflage (moving wood), Macduff reveals "untimely ripped" birth, Macbeth is killed. Discuss: are the prophecies truly fulfilled, or did Macbeth misunderstand them? PART 3 (12 min): Students write analytical response: "How does Shakespeare use the witches\' equivocal prophecies to present tragic fate? Is Macbeth a victim of deception or his own misinterpretation?" Consider both perspectives.',
    differentiation: {
      support: 'Provided prophecy table with one example completed. Response frame.',
      core: 'Independent table and analytical response.',
      stretch: 'Write second response debating whether Macbeth is ultimately responsible for his downfall despite the witches\' deception.',
    },
    resources: ['Act 4.1 prophecies', 'Act 5.6-7 battle scene', 'Prophecy table template', 'Response frame', 'Equivocation definition'],
  },
  plenary: {
    title: 'Order Restored: The Complete Arc',
    duration: '5 minutes',
    instructions: 'Read Malcolm\'s final speech briefly. Discuss: how does the restoration of order mirror the opening? Macbeth\'s unchecked ambition has destroyed Scotland; his death restores the natural hierarchy. Link to Jacobean political philosophy: legitimate kingship vs tyranny. Conclude the complete arc: Act 1 ambition → Act 2 guilt → Act 3 tyranny → Act 5 justice.',
    differentiation: {
      support: 'Provide Malcolm\'s key quotations.',
      core: 'Understand tragic resolution.',
      stretch: 'Evaluate whether Malcolm\'s restoration fully repairs Scotland or if permanent damage persists.',
    },
  },
  homework: 'Revise Acts 1-5. Write practice exam response (timed 30 min): "How does Shakespeare use the witches to explore ideas about fate and responsibility in Macbeth?"',
  resourcesNeeded: ['Act 4.1 prophecies', 'Act 5.6-7 battle scene', 'Malcolm\'s final speech', 'Prophecy table'],
  assessmentOpportunities: ['Prophecy interpretation', 'Table accuracy', 'Understanding of equivocation', 'Analytical response quality', 'Thematic comprehension'],
  keyVocabulary: ['equivocation', 'prophecy', 'irony', 'fate', 'ambiguity', 'tragic justice', 'restoration', 'legitimacy', 'kingship'],
  sendAdaptations: 'Simplified battle scene. Pre-completed prophecy examples. Response frame with sentence starters. Visual timeline of entire play. Glossary of key concepts.',
};

// ════════════════════════════════════════════════════════════════════════════
// JEKYLL & HYDE — 4 ADDITIONAL SPECIALIZED LESSONS
// ════════════════════════════════════════════════════════════════════════════

const jekyllHydeDuality: LiteratureLesson = {
  id: 'jekyll-hyde-lit-07',
  title: 'Jekyll & Hyde: Duality & The Divided Self',
  text: 'The Strange Case of Dr Jekyll and Mr Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse how Stevenson presents the concept of duality in human nature',
    'Examine Dr Jekyll\'s attempt to separate good and evil',
    'Explore the symbolic meaning of the transformation',
    'Evaluate Stevenson\'s critique of Victorian morality',
    'Link duality to Victorian repression and hidden desires',
  ],
  starterActivity: {
    title: 'Good vs Evil Within',
    duration: '6 minutes',
    instructions: 'Discussion: Can one person contain both good and evil? Or are they separate? Show images of Jekyll vs Hyde. Introduce: Victorian society believed humans could separate their "respectable" and "hidden" selves. Stevenson challenges this.',
    resources: ['Jekyll and Hyde images', 'Discussion prompt'],
  },
  mainActivity: {
    title: 'The Divided Self: Analysis of Duality',
    duration: '47 minutes',
    instructions: 'PART 1 (18 min): Read key passages showing Jekyll and Hyde\'s contrasts. Annotate for physical descriptions, behavioural differences, speech patterns. Create a comparison chart: Jekyll\'s Characteristics | Hyde\'s Characteristics. Note: Hyde appears younger, more vital, more expressive — suggesting repressed vitality. PART 2 (18 min): Read Jekyll\'s confession where he describes the attraction of the potion: "the drug had no action on the physical nature...it was on the spiritual side...that led me to this choice." Annotate for: what desires does Jekyll want to suppress? What does the potion allow him to do? PART 3 (11 min): Students write analytical paragraph: "How does Stevenson use the characters of Jekyll and Hyde to present the idea that human nature cannot be divided? Use textual evidence to show that suppressing evil does not eliminate it."',
    differentiation: {
      support: 'Provided comparison chart with examples. Paragraph frame.',
      core: 'Independent chart and response.',
      stretch: 'Add evaluation column to chart: "What does each character\'s behaviour reveal about human nature?"',
    },
    resources: ['Jekyll descriptions', 'Hyde descriptions', 'Confession extract', 'Comparison chart', 'Paragraph frame'],
  },
  plenary: {
    title: 'One Self or Two?',
    duration: '4 minutes',
    instructions: 'Conclude: "Jekyll attempts to create two separate selves but discovers they are fundamentally one. The potion does not create evil; it releases what is already within." Link to Victorian hypocrisy: respectable surface hiding darker desires.',
    differentiation: {
      support: 'Provide statement to copy.',
      core: 'Understand the key idea of unified self.',
      stretch: 'Consider modern parallels: social media personas, public vs private behaviour.',
    },
  },
  homework: 'Write 400-word response: "Evaluate whether Stevenson suggests that good and evil are separate forces or two aspects of one nature." Use at least three quotations.',
  resourcesNeeded: ['Jekyll and Hyde descriptions', 'Confession extract', 'Comparison chart', 'Paragraph frame'],
  assessmentOpportunities: ['Chart accuracy', 'Textual annotation', 'Analytical paragraph', 'Understanding of duality theme', 'Quotation selection'],
  keyVocabulary: ['duality', 'divided self', 'repression', 'transformation', 'moral ambiguity', 'hypocrisy', 'human nature', 'Dr. Jekyll', 'Mr. Hyde'],
  sendAdaptations: 'Visual comparison chart with images. Pre-highlighted confession extract. Paragraph frame with sentence starters. Audio recording of confession scene. Simplified vocabulary.',
};

const jekyllHydeVictorianRepression: LiteratureLesson = {
  id: 'jekyll-hyde-lit-08',
  title: 'Jekyll & Hyde: Victorian Repression & Hidden Desires',
  text: 'The Strange Case of Dr Jekyll and Mr Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Understand Victorian morality and social repression',
    'Analyse how the novella critiques Victorian hypocrisy',
    'Examine how respectable characters hide darker desires',
    'Explore the symbolism of the locked door and secret laboratory',
    'Evaluate Stevenson\'s social message about repression and its consequences',
  ],
  starterActivity: {
    title: 'Victorian Morality & Respectability',
    duration: '7 minutes',
    instructions: 'Display images of Victorian London: formal dress, rigid social codes, social hierarchy. Discuss: what could you not do in Victorian society? (Drink, gamble, visit inappropriate places openly, express emotions, explore sexuality.) What happens when desires are suppressed? Introduce: Stevenson\'s novella is a critique of repression.',
    resources: ['Victorian social images', 'Code of conduct slides'],
  },
  mainActivity: {
    title: 'Respectable Facades & Hidden Desires',
    duration: '46 minutes',
    instructions: 'PART 1 (18 min): Examine Jekyll\'s position in society: respected physician, church elder, man of science. Read passages describing his public life. Annotate for: signs of constraint, hints of unfulfilled desires, the facade of respectability. PART 2 (18 min): Read about Jekyll\'s admission of "undignified pleasures" and his desire to "escape." Annotate for: what specific desires does he mention? What does he fear if they become known? Why does respectable society force such repression? PART 3 (10 min): Students create a chart comparing Jekyll\'s Public Image vs Private Desires. Then write analytical response: "How does Stevenson use the character of Dr Jekyll to critique Victorian repression and hypocrisy? What is he arguing about the dangers of suppressing human desires?"',
    differentiation: {
      support: 'Guided annotations. Chart template with prompts.',
      core: 'Independent analysis and chart completion.',
      stretch: 'Research Victorian attitudes toward medicine, science, sexuality. Evaluate how relevant Stevenson\'s critique was to his contemporaries.',
    },
    resources: ['Jekyll\'s public life passages', 'Confession extract on desires', 'Public vs Private chart', 'Response frame', 'Victorian context slides'],
  },
  plenary: {
    title: 'The Cost of Repression',
    duration: '4 minutes',
    instructions: 'Key message: "Stevenson suggests that Victorian repression is dangerous. Suppressed desires do not disappear; they transform into something monstrous." Link to tragic ending: Jekyll\'s attempt to deny his darker nature leads to his destruction.',
    differentiation: {
      support: 'Provide key message statement.',
      core: 'Understand the cautionary message.',
      stretch: 'Discuss: is Stevenson sympathetic to Jekyll or does he judge him? Evidence?',
    },
  },
  homework: 'Write analytical essay (400-500 words): "Analyse how Stevenson uses the figure of Jekyll to critique Victorian society\'s repression of human desires and hypocrisy."',
  resourcesNeeded: ['Jekyll\'s public and private passages', 'Confession extract', 'Context slides on Victorian morality', 'Chart template'],
  assessmentOpportunities: ['Understanding of Victorian context', 'Annotation precision', 'Chart completion', 'Analytical essay quality', 'Thematic comprehension'],
  keyVocabulary: ['repression', 'Victorian morality', 'hypocrisy', 'respectability', 'facade', 'undignified pleasures', 'desire', 'social constraint', 'liberation'],
  sendAdaptations: 'Visual comparison of Victorian respectability vs hidden life. Pre-annotated confession extract. Chart template with examples. Essay frame with paragraph headings. Historical context slides.',
};

const jekyllHydeTransformation: LiteratureLesson = {
  id: 'jekyll-hyde-lit-09',
  title: 'Jekyll & Hyde: The Transformation & Loss of Control',
  text: 'The Strange Case of Dr Jekyll and Mr Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the symbolic and physical nature of the transformation',
    'Examine how Jekyll loses control of the transformation process',
    'Explore the horror of involuntary metamorphosis',
    'Evaluate the breakdown of Jekyll\'s rational scientific control',
    'Link the transformation to themes of addiction and loss of agency',
  ],
  starterActivity: {
    title: 'Addiction & Loss of Control',
    duration: '6 minutes',
    instructions: 'Discussion: what happens when something that initially feels like freedom (drinking, drugs, risky behaviour) becomes compulsive? Show brief scene of transformation. Introduce: Jekyll\'s potion mirrors addiction — initially voluntary, eventually compulsive.',
    resources: ['Transformation scene (film clip or description)', 'Addiction discussion prompt'],
  },
  mainActivity: {
    title: 'The Potion\'s Power: Voluntary to Involuntary',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read passages describing Jekyll\'s early transformations. Annotate for: his control, his excitement, the thrill of liberation. Track how he uses language of freedom and relief: "I felt younger... lighter in body; within I was conscious of a heady recklessness." PART 2 (18 min): Read later passages where Jekyll transforms involuntarily (at night, without the potion). Annotate for: fear, loss of control, horror at his own nature. Track the shift from "I will take the potion" to "the potion is taking me." PART 3 (14 min): Students create a timeline showing the progression: Control → Partial Control → Loss of Control → Complete Inversion (Hyde\'s control over Jekyll). Write analytical paragraph: "How does Stevenson present the gradual erosion of Jekyll\'s agency and control? What does this suggest about the nature of human desire?"',
    differentiation: {
      support: 'Pre-highlighted control passages. Timeline template with prompts.',
      core: 'Independent identification and timeline creation.',
      stretch: 'Add evaluation: why does Jekyll lose control? Is it the potion\'s failure or the nature of desire itself?',
    },
    resources: ['Early transformation passages', 'Later involuntary transformation passages', 'Timeline template', 'Paragraph frame'],
  },
  plenary: {
    title: 'Science Gone Wrong',
    duration: '4 minutes',
    instructions: 'Conclude: "Jekyll believed science could separate and control human nature. The involuntary transformation proves him wrong. His attempt at rational control backfires into complete loss of control." Link to Victorian anxieties about science and progress.',
    differentiation: {
      support: 'Provide key conclusion.',
      core: 'Understand the irony of failed scientific control.',
      stretch: 'Discuss Stevenson\'s critique of Victorian faith in science and reason.',
    },
  },
  homework: 'Write extended analysis (450 words): "Examine how Stevenson uses the transformation to present themes of addiction, loss of control, and the failure of reason." Include specific textual references.',
  resourcesNeeded: ['Early transformation passages', 'Late transformation passages', 'Timeline template', 'Paragraph frame'],
  assessmentOpportunities: ['Annotation accuracy', 'Timeline precision', 'Understanding of progression', 'Analytical paragraph quality', 'Thematic comprehension'],
  keyVocabulary: ['transformation', 'involuntary', 'agency', 'loss of control', 'addiction', 'compulsion', 'science', 'reason', 'failure'],
  sendAdaptations: 'Visual timeline showing transformation stages. Pre-annotated passages highlighting control language. Paragraph frame with sentence starters. Audio recording of transformation descriptions.',
};

const jekyllHydeFinalChapter: LiteratureLesson = {
  id: 'jekyll-hyde-lit-10',
  title: 'Jekyll & Hyde: The Final Chapter & Tragic Resolution',
  text: 'The Strange Case of Dr Jekyll and Mr Hyde',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Jekyll\'s final confession and self-awareness',
    'Examine the tragic resolution and its moral implications',
    'Explore themes of damnation and redemption through confession',
    'Evaluate Stevenson\'s message about human nature and morality',
    'Link the ending to Victorian anxieties about respectability and hidden secrets',
  ],
  starterActivity: {
    title: 'Confession & Redemption',
    duration: '6 minutes',
    instructions: 'Discussion: does confession redeem someone? Or is it too late if the damage is done? Show image of final scene. Introduce: Jekyll\'s full confession is the novella\'s climax — he finally tells the truth.',
    resources: ['Discussion prompt', 'Final scene images'],
  },
  mainActivity: {
    title: 'Jekyll\'s Confession: Truth, Regret & Damnation',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read the "Henry Jekyll\'s Full Statement" chapter. Annotate for: Jekyll\'s self-awareness, his regret, his understanding that he cannot reverse the transformation. Track language of damnation: "I am now at my last hour", "I cannot say I am innocent", "I have long since lost the self-respect of virtue." PART 2 (18 min): Examine Jekyll\'s explanation of how Hyde grew stronger. Annotate for: the irony that attempting to suppress evil made it more powerful, the moment when he realizes he is truly trapped. PART 3 (14 min): Students create a chart showing Jekyll\'s Evolution of Understanding: Initial Optimism | Growing Doubt | Horror | Final Acceptance. Write analytical response: "How does Jekyll\'s confession reveal his gradual understanding that his attempt to separate good and evil was doomed? What is Stevenson\'s final message about human nature?"',
    differentiation: {
      support: 'Provided confession with key passages highlighted. Chart template.',
      core: 'Independent reading and chart completion.',
      stretch: 'Evaluate whether Jekyll\'s confession is truthful or self-serving. Does he blame Hyde or accept responsibility?',
    },
    resources: ['Jekyll\'s confession chapter', 'Chart template', 'Response frame', 'Damnation/redemption vocabulary'],
  },
  plenary: {
    title: 'No Escape: The Novella\'s Message',
    duration: '4 minutes',
    instructions: 'Conclude: "Stevenson\'s ending offers no redemption. Jekyll\'s confession comes too late. His attempt to separate and control human nature leads not to liberation but to damnation. The novella suggests: accept your whole self or be destroyed by denial." Link to Victorian anxieties about respectability.',
    differentiation: {
      support: 'Provide conclusion statement.',
      core: 'Understand tragic resolution.',
      stretch: 'Discuss: is this a pessimistic message? Or a realistic one about denying human nature?',
    },
  },
  homework: 'Write final analytical essay (500-600 words): "Analyse how the final chapter of Jekyll and Hyde completes Stevenson\'s exploration of duality and human nature. What is his ultimate message?" Include at least four quotations.',
  resourcesNeeded: ['Jekyll\'s confession chapter', 'Chart template', 'Response frame', 'Vocabulary slides'],
  assessmentOpportunities: ['Understanding of confession', 'Chart accuracy', 'Analytical response quality', 'Essay writing', 'Thematic comprehension'],
  keyVocabulary: ['confession', 'damnation', 'redemption', 'self-awareness', 'irony', 'tragic resolution', 'duality', 'acceptance', 'denial'],
  sendAdaptations: 'Pre-highlighted confession with key emotional turns marked. Chart template with examples. Response frame with paragraph headings. Audio recording of confession. Glossary of difficult vocabulary.',
};

// ════════════════════════════════════════════════════════════════════════════
// AN INSPECTOR CALLS — 4 ADDITIONAL SPECIALIZED LESSONS
// ════════════════════════════════════════════════════════════════════════════

const inspectorBirlingCapitalism: LiteratureLesson = {
  id: 'inspector-lit-07',
  title: 'An Inspector Calls: Birling\'s Capitalism & Social Responsibility',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Birling\'s character and his capitalist philosophy',
    'Examine his justifications for refusing to help Eva Smith',
    'Explore the conflict between individual profit and social responsibility',
    'Evaluate Priestly\'s critique of capitalist indifference',
    'Link Birling\'s views to 1912 and 1945 political contexts',
  ],
  starterActivity: {
    title: 'Profit vs People',
    duration: '6 minutes',
    instructions: 'Debate: If a business is losing money paying fair wages, should the owner cut wages to save the company? Two sides. Discuss: does profit justify any action? Introduce: this is the core of Birling\'s philosophy in the play.',
    resources: ['Debate prompt', 'Wage discussion slides'],
  },
  mainActivity: {
    title: 'Birling\'s Defense & Priestly\'s Critique',
    duration: '47 minutes',
    instructions: 'PART 1 (16 min): Read Act 1 where Birling discusses the wage cut for Eva Smith. Annotate for: his justifications ("cheap labour keeps prices down"), his dismissal of responsibility ("every man for himself"), his confidence in capitalist progress. PART 2 (18 min): Read his speech about war and capitalism ("The Titanic will never sink") and future prosperity. Annotate for: his confidence in progress, his blindness to consequences, his self-interest. PART 3 (13 min): Students create a two-column chart: Birling\'s Argument for Cutting Wages | Counter-argument from Social Responsibility. Write analytical paragraph: "How does Priestly use Birling\'s character to critique capitalist indifference to workers? What alternative does Priestly suggest?"',
    differentiation: {
      support: 'Annotated extracts. Chart template with prompts.',
      core: 'Independent annotation and response.',
      stretch: 'Research 1945 context: how would 1945 audiences (post-WWII, facing socialism) view Birling\'s 1912 capitalism?',
    },
    resources: ['Act 1 wage discussion', 'Birling\'s speeches', 'Chart template', 'Paragraph frame', '1945 context slides'],
  },
  plenary: {
    title: 'Individual vs Collective Responsibility',
    duration: '4 minutes',
    instructions: `Key message: "Priestly argues that we are interconnected. Birling's individualism — 'every man for himself' — causes Eva Smith's death. The play demands collective social responsibility." Link to post-WWII audience expectations.`,
    differentiation: {
      support: 'Display key message.',
      core: 'Understand contrast between Birling and Inspector.',
      stretch: 'Consider: was Priestly right? Is individual profit or collective welfare more important?',
    },
  },
  homework: 'Write 400-word analytical response: "Analyse how Priestly uses Birling\'s character to critique capitalist values and demand social responsibility."',
  resourcesNeeded: ['Act 1 extracts', 'Birling\'s speeches', 'Chart template', '1945 context slides'],
  assessmentOpportunities: ['Annotation precision', 'Chart completion', 'Analytical paragraph', 'Understanding of social message', 'Contextual awareness'],
  keyVocabulary: ['capitalism', 'profit', 'social responsibility', 'exploitation', 'individualism', 'collective', 'conscience', 'indifference', 'greed'],
  sendAdaptations: 'Pre-annotated extracts highlighting key arguments. Chart template with examples. Paragraph frame with sentence starters. Context summary cards. Visual comparison of Birling vs Inspector values.',
};

const inspectorSheilaTransformation: LiteratureLesson = {
  id: 'inspector-lit-08',
  title: 'An Inspector Calls: Sheila\'s Transformation & Redemption',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Sheila\'s character development from beginning to end',
    'Examine her role in Eva Smith\'s downfall',
    'Explore her capacity for moral awareness and change',
    'Evaluate the difference between genuine redemption and mere guilt',
    'Link Sheila\'s journey to Priestly\'s moral message',
  ],
  starterActivity: {
    title: 'Judgment & Redemption',
    duration: '6 minutes',
    instructions: 'Discussion: if you hurt someone without meaning to, does being sorry change anything? Should it change how you\'re punished? Introduce: Sheila harms Eva Smith out of vanity but later shows genuine remorse.',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'From Selfishness to Moral Awareness',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read Act 1-2 where Sheila gets Eva Smith fired from Milwards. Annotate for: her vanity, her thoughtlessness, her initial lack of guilt. Track how she views the situation: "Just because I happened to laugh when some girl made a face at a customer." Examine her tone: casual, dismissive. PART 2 (18 min): Read Act 2-3 where Sheila realizes the consequences and becomes deeply upset. Annotate for: "That\'s the second time I\'ve had it thrown in my face. It doesn\'t matter now, does it, what happened to her?... I wish you\'d stop telling me to sit down." Examine: genuine shame, horror, understanding of her role. PART 3 (14 min): Students create a character arc showing Sheila\'s emotional and moral journey. Write analytical paragraph: "How does Priestly present Sheila\'s capacity for moral change? What makes her redemption credible or incomplete?"',
    differentiation: {
      support: 'Pre-highlighted extracts showing tone shift. Arc template.',
      core: 'Independent annotation and arc creation.',
      stretch: 'Evaluate: has Sheila truly changed or just learned to feel guilt? Will she act differently after the play?',
    },
    resources: ['Act 1-2 Sheila excerpt', 'Act 2-3 Sheila excerpt', 'Arc template', 'Paragraph frame', 'Tone analysis guide'],
  },
  plenary: {
    title: 'Hope for Change',
    duration: '4 minutes',
    instructions: 'Conclude: "Sheila represents hope for moral change. Unlike her parents who remain defensive, she accepts responsibility and shows genuine remorse. Priestly suggests that younger generation can build better society." Link to 1945 post-war audience.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand Sheila as symbol of change.',
      stretch: 'Compare: is Sheila\'s change realistic or idealistic?',
    },
  },
  homework: 'Write analytical essay (450 words): "Analyse how Priestly presents Sheila\'s moral development as more genuine than her parents\' responses. What does this suggest about society\'s capacity for change?"',
  resourcesNeeded: ['Act 1-2 Sheila lines', 'Act 2-3 Sheila lines', 'Arc template', 'Paragraph frame'],
  assessmentOpportunities: ['Tone analysis', 'Arc accuracy', 'Analytical paragraph quality', 'Essay writing', 'Character understanding'],
  keyVocabulary: ['moral awareness', 'redemption', 'remorse', 'change', 'shame', 'responsibility', 'transformation', 'conscience', 'generational difference'],
  sendAdaptations: 'Visual character arc with emotional markers. Pre-annotated extracts with tone shifts highlighted. Paragraph frame with sentence starters. Audio recording of Sheila\'s lines showing emotional change. Comparison chart.',
};

const inspectorGeraldSecrets: LiteratureLesson = {
  id: 'inspector-lit-09',
  title: 'An Inspector Calls: Gerald\'s Secrets & Middle-Class Hypocrisy',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Gerald\'s relationship with Eva Smith',
    'Examine how his actions reveal class and gender hypocrisy',
    'Explore the irony of his attempted deception at the play\'s end',
    'Evaluate Priestly\'s critique of middle-class respectability',
    'Link Gerald\'s character to broader themes of responsibility and accountability',
  ],
  starterActivity: {
    title: 'Seduction & Responsibility',
    duration: '6 minutes',
    instructions: 'Discussion: if someone helps another person (giving money, shelter, attention) but for selfish reasons, are they still responsible for consequences? Introduce: Gerald gives Eva Smith money and a place to stay but uses her.',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'Gerald\'s "Kindness" & Hidden Motives',
    duration: '47 minutes',
    instructions: 'PART 1 (16 min): Read Act 2 where Gerald describes helping Eva Smith (giving her money, taking her away from streets). Annotate for: language that sounds generous ("I helped her... gave her some money"), details about how he met her at the Palace music hall, the implication that he was taking her to an accessible place. Track: is this help or exploitation? PART 2 (16 min): Read the revelation of their affair and his eventual abandonment of her. Annotate for: how he justifies his actions ("I didn\'t love her"), how he escapes consequences (unlike her suicide), how his class and gender protect him. PART 3 (15 min): Students create two-column analysis: What Gerald Says He Did | What He Actually Did. Write analytical response: "How does Priestly reveal the hypocrisy of Gerald\'s actions? What does his character suggest about class privilege and accountability?"',
    differentiation: {
      support: 'Annotated extracts. Analysis template with prompts.',
      core: 'Independent annotation and response.',
      stretch: 'Research gender and class dynamics of 1912: how would contemporary audiences judge Gerald vs Eva?',
    },
    resources: ['Act 2 Gerald extracts', 'Affair revelation passage', 'Analysis template', 'Response frame', '1912 context slides'],
  },
  plenary: {
    title: 'Privilege & Evasion',
    duration: '4 minutes',
    instructions: 'Conclude: "Gerald\'s class and gender allow him to escape consequence. He helps Eva while exploiting her. Priestly suggests that middle-class respectability masks exploitation and injustice." Link to themes of social inequality.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand Gerald\'s hypocrisy.',
      stretch: 'Consider: does the play offer hope that Gerald will change, unlike the Birlings?',
    },
  },
  homework: 'Write 450-word analytical response: "How does Priestly use Gerald\'s character to expose the hypocrisy of middle-class respectability and the exploitation of working-class women?"',
  resourcesNeeded: ['Gerald extracts', 'Affair revelation', 'Analysis template', '1912 context slides'],
  assessmentOpportunities: ['Annotation precision', 'Analysis accuracy', 'Understanding of hypocrisy', 'Response quality', 'Contextual awareness'],
  keyVocabulary: ['hypocrisy', 'exploitation', 'privilege', 'class', 'respectability', 'evasion', 'accountability', 'seduction', 'consequence'],
  sendAdaptations: 'Pre-highlighted passages showing contradiction. Two-column chart with examples. Response frame with sentence starters. Context summary on class and gender dynamics. Visual comparison of Gerald\'s narrative vs reality.',
};

const inspectorInspectorRole: LiteratureLesson = {
  id: 'inspector-lit-10',
  title: 'An Inspector Calls: The Inspector\'s Role & Priestly\'s Message',
  text: 'An Inspector Calls',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the Inspector\'s character and role as moral arbiter',
    'Examine his speeches and their rhetorical power',
    'Explore the ambiguity of his identity and methods',
    'Evaluate Priestly\'s use of the Inspector to deliver moral message',
    'Link the Inspector to post-WWII audience and social responsibility',
  ],
  starterActivity: {
    title: 'Who is the Inspector?',
    duration: '6 minutes',
    instructions: 'Discussion: is the Inspector real or a ghost/spirit? Does it matter? Introduce: Priestly\'s ambiguity about the Inspector\'s identity serves his moral purpose.',
    resources: ['Discussion prompt', 'End-of-play evidence slides'],
  },
  mainActivity: {
    title: 'The Inspector as Moral Voice & Social Conscience',
    duration: '47 minutes',
    instructions: 'PART 1 (16 min): Read key Inspector speeches: "If you prefer to call her Miss Smith, that is of course your privilege. In fact, her own name was Eva Smith." (Asserting her humanity), "One Eva Smith is dead. Three of you knew her. Two of you treated her badly." (Establishing moral culpability), His final speech about collective responsibility. Annotate for: direct address, moral judgment, refusal to accept excuses. PART 2 (16 min): Analyse his investigative method: he forces each person to confront their role in Eva\'s death. Annotate for: how he uses the photograph (or does he?), how he separates people, how he gradually reveals consequences. PART 3 (15 min): Students create annotation of the final Inspector speech identifying rhetorical techniques: repetition, direct address, metaphor ("millions of Eva Smiths"), call to action. Write analytical paragraph: "How does Priestly use the Inspector to present his moral vision of social responsibility? What makes the Inspector\'s voice persuasive?"',
    differentiation: {
      support: 'Pre-highlighted speeches. Rhetorical devices list.',
      core: 'Independent annotation and response.',
      stretch: 'Evaluate: is the Inspector effective? Do the Birlings learn? Would 1945 audiences find him convincing?',
    },
    resources: ['Inspector speeches', 'Final speech', 'Rhetorical devices guide', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Play\'s Message',
    duration: '4 minutes',
    instructions: 'Conclude: "The Inspector articulates Priestly\'s social vision: we are all connected; our actions have consequences; we must accept collective responsibility. Whether he is real is less important than his message." Link to 1945 election and post-war social change.',
    differentiation: {
      support: 'Provide key message.',
      core: 'Understand Inspector\'s moral function.',
      stretch: 'Discuss: how has British society changed since 1945? Is Priestly\'s vision realized?',
    },
  },
  homework: 'Write final analytical essay (500-600 words): "Analyse how Priestly uses the Inspector to convey his message about social responsibility and interconnectedness. Is the play ultimately optimistic or pessimistic about social change?"',
  resourcesNeeded: ['Inspector speeches', 'Final speech', 'Rhetorical analysis guide', '1945 context slides'],
  assessmentOpportunities: ['Speech analysis', 'Rhetorical devices identification', 'Analytical paragraph quality', 'Essay writing', 'Message comprehension'],
  keyVocabulary: ['moral arbiter', 'social responsibility', 'rhetorical', 'collective', 'conscience', 'accountability', 'interconnected', 'hypocrisy', 'social message'],
  sendAdaptations: 'Pre-highlighted key speeches with rhetorical devices marked. Final speech annotation guide. Paragraph frame with sentence starters. Context summary on 1945 post-war Britain. Audio recording of Inspector speeches.',
};

// ════════════════════════════════════════════════════════════════════════════
// A CHRISTMAS CAROL — 4 ADDITIONAL SPECIALIZED LESSONS
// ════════════════════════════════════════════════════════════════════════════

const christmasCarolScroogeIsolation: LiteratureLesson = {
  id: 'carol-lit-07',
  title: 'A Christmas Carol: Scrooge\'s Isolation & Moral Blindness',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Scrooge\'s isolation as both physical and moral',
    'Examine how his greed creates emotional distance from others',
    'Explore the symbolism of his cold, dark chambers',
    'Evaluate Dickens\' presentation of isolation as self-imposed',
    'Link isolation to Victorian social structures and poverty',
  ],
  starterActivity: {
    title: 'Alone vs Isolated',
    duration: '6 minutes',
    instructions: 'Discussion: what\'s the difference between being alone and being isolated? Can you be surrounded by people and still isolated? Introduce: Scrooge is wealthy but utterly isolated by his own choices.',
    resources: ['Discussion prompt', 'Scrooge\'s London image'],
  },
  mainActivity: {
    title: 'Scrooge\'s Chambers & Disconnection',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read descriptions of Scrooge\'s home, office, and physical appearance. Annotate for: cold imagery ("colder than a frosty wind"), references to being untouched ("as if the cold had gotten into his blood"), the locked doors, the darkness. Track: how physical coldness mirrors emotional isolation. PART 2 (18 min): Examine his interactions with others: dismissal of the charity collectors, coldness to Bob Cratchit, contempt for the poor. Annotate for: his inability or unwillingness to connect, his judgment, his refusal of human compassion. PART 3 (14 min): Students create a visual map showing Scrooge\'s Isolation with four branches: Physical Space | Emotional State | Relationships | Moral Blindness. Write analytical paragraph: "How does Dickens present Scrooge\'s isolation as self-imposed? What does his character suggest about the consequences of prioritising wealth over human connection?"',
    differentiation: {
      support: 'Provided isolation descriptions. Map template.',
      core: 'Independent annotation and map creation.',
      stretch: 'Research Victorian attitudes toward workhouses and poor laws: how does Scrooge\'s isolation reflect wider societal indifference?',
    },
    resources: ['Scrooge\'s chamber descriptions', 'Interaction passages', 'Isolation map template', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Cost of Greed',
    duration: '4 minutes',
    instructions: 'Conclude: "Scrooge\'s wealth has bought him isolation and moral blindness. Dickens suggests that greed does not create happiness; it creates disconnection and loss of humanity." Link to social message about community and compassion.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand isolation as consequence of greed.',
      stretch: 'Consider: can Scrooge\'s redemption undo years of isolation? Is true connection possible after?',
    },
  },
  homework: 'Write analytical response (400 words): "How does Dickens use imagery and characterisation to present Scrooge\'s isolation as a moral and emotional consequence of his greed?"',
  resourcesNeeded: ['Chamber descriptions', 'Interaction passages', 'Isolation map', 'Paragraph frame'],
  assessmentOpportunities: ['Annotation accuracy', 'Map completion', 'Understanding of symbolism', 'Analytical response quality', 'Thematic comprehension'],
  keyVocabulary: ['isolation', 'moral blindness', 'greed', 'disconnection', 'coldness', 'self-imposed', 'consequence', 'humanity', 'compassion'],
  sendAdaptations: 'Visual map with images showing isolation. Pre-highlighted descriptive passages. Paragraph frame with sentence starters. Contrast images: Scrooge alone vs Cratchit family. Audio recording of isolation descriptions.',
};

const christmasCarolFezziwigScrooge: LiteratureLesson = {
  id: 'carol-lit-08',
  title: 'A Christmas Carol: Fezziwig vs Scrooge — The Cost of Ambition',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the contrast between Fezziwig and Scrooge\'s management styles',
    'Examine how both men value profit but differently',
    'Explore Scrooge\'s abandonment of Fezziwig\'s compassionate values',
    'Evaluate Dickens\' critique of ambition and capitalism',
    'Link the past to Scrooge\'s present moral blindness',
  ],
  starterActivity: {
    title: 'Two Types of Employers',
    duration: '6 minutes',
    instructions: 'Display contrasting management styles: generous/people-focused vs profit-focused/people-as-cost. Discuss: which is better for workers? Which is more profitable? Introduce: Scrooge worked for Fezziwig and learned different values, but abandoned them.',
    resources: ['Management styles comparison', 'Discussion prompt'],
  },
  mainActivity: {
    title: 'Fezziwig\'s Humanity vs Scrooge\'s Greed',
    duration: '47 minutes',
    instructions: 'PART 1 (16 min): Read the Fezziwig Christmas celebration scene. Annotate for: the generosity to workers, the warmth and Christmas spirit, Fezziwig\'s character ("if he wished to work his will upon us, he can do much"), the implication that kindness to workers costs little in the long run ("to have a kind master/mistress"). PART 2 (16 min): Contrast with present-day Scrooge: his treatment of Bob Cratchit, his view of wages as cost to be minimized, his refusal of human connection. Annotate for: how far he has moved from Fezziwig\'s values, the irony that ambition has made him cruel. PART 3 (15 min): Students create a comparison chart: Fezziwig\'s Values | Scrooge\'s Present Values | The Cost to Each. Write analytical paragraph: "How does Dickens use the contrast between Fezziwig and Scrooge to critique unbridled ambition and capitalism? What does Scrooge lose in pursuit of wealth?"',
    differentiation: {
      support: 'Annotated Fezziwig passage. Chart template.',
      core: 'Independent annotation and chart.',
      stretch: 'Research 19th-century attitudes toward paternalistic employers: was Fezziwig realistic or idealized?',
    },
    resources: ['Fezziwig scene', 'Present Scrooge passages', 'Comparison chart', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Path Not Taken',
    duration: '4 minutes',
    instructions: 'Conclude: "Scrooge chose profit over Fezziwig\'s compassion. The Spirit of Christmas Past shows him what he sacrificed: a humanity and kindness that might have brought genuine happiness." Link to themes of redemption and choice.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand Scrooge\'s moral choice.',
      stretch: 'Discuss: was Scrooge\'s choice inevitable or could he have remained compassionate while successful?',
    },
  },
  homework: 'Write analytical essay (450 words): "How does Dickens use the contrast between Fezziwig and Scrooge to present a critique of ambition and capitalism? What alternative does the novella suggest?"',
  resourcesNeeded: ['Fezziwig scene', 'Present Scrooge passages', 'Comparison chart', 'Paragraph frame'],
  assessmentOpportunities: ['Contrast identification', 'Chart accuracy', 'Analytical essay quality', 'Understanding of values', 'Thematic comprehension'],
  keyVocabulary: ['ambition', 'capitalism', 'greed', 'compassion', 'paternalistic', 'sacrifice', 'humanity', 'choice', 'redemption'],
  sendAdaptations: 'Visual comparison chart with images. Pre-highlighted contrasting passages. Paragraph frame with sentence starters. Timeline showing Scrooge\'s moral journey. Audio recording of Fezziwig scene.',
};

const christmasCarolIgnoranceWant: LiteratureLesson = {
  id: 'carol-lit-09',
  title: 'A Christmas Carol: Ignorance & Want — Social Critique & Responsibility',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Dickens\' presentation of Ignorance and Want as personified social problems',
    'Examine the famous "surplus population" line and its irony',
    'Explore how poverty is connected to lack of education and opportunity',
    'Evaluate Dickens\' argument for collective social responsibility',
    'Link the spirits to specific social issues of Victorian England',
  ],
  starterActivity: {
    title: 'The Hidden Underclass',
    duration: '6 minutes',
    instructions: 'Show images of Victorian London: wealthy areas vs slums. Discuss: are poor people invisible to the wealthy? Why might Scrooge not know how people live below his station? Introduce: the Spirit of Christmas Present reveals hidden suffering.',
    resources: ['Victorian London images (contrast)', 'Discussion prompt'],
  },
  mainActivity: {
    title: 'Ignorance & Want: Dickens\' Social Message',
    duration: '47 minutes',
    instructions: 'PART 1 (16 min): Read the scene where the Spirit reveals Ignorance and Want beneath their robes. Annotate for: physical descriptions (ragged clothes, hollow eyes), the names themselves (not hunger but ignorance), the Spirit\'s statement that both "cling to the skirts of me." Track: Dickens presents ignorance and poverty as interconnected social problems. PART 2 (16 min): Find and read the "surplus population" passage where Scrooge earlier said the poor should be dealt with by workhouses or prisons. Annotate for: the terrible cynicism, the dehumanization (calling people "surplus"), the moral horror. Show irony: the Spirit later asks "if these shadows remain unaltered by the future, will the child live or die?" suggesting that society itself must change. PART 3 (15 min): Students create a chart: Scrooge\'s View of Poverty | Dickens\' View of Poverty | What Needs to Change. Write analytical response: "How does Dickens use Ignorance and Want to challenge Victorian attitudes toward poverty? What is his argument about social responsibility?"',
    differentiation: {
      support: 'Highlighted passages. Chart template.',
      core: 'Independent annotation and response.',
      stretch: 'Research Victorian poor laws and workhouses: how radical was Dickens\' critique in 1843?',
    },
    resources: ['Ignorance & Want passage', '"Surplus population" passage', 'Chart template', 'Response frame', 'Victorian context slides'],
  },
  plenary: {
    title: 'Society\'s Responsibility',
    duration: '4 minutes',
    instructions: 'Conclude: "Dickens argues that poverty is not inevitable or deserved; it results from ignorance (lack of education, opportunity) and social indifference. Society must change or children will suffer." Link to post-WWII welfare state expectations.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand Dickens\' social critique.',
      stretch: 'Discuss: has modern society adequately addressed Dickens\' concerns about ignorance and poverty?',
    },
  },
  homework: 'Write analytical essay (500 words): "How does Dickens present Ignorance and Want to deliver a powerful critique of Victorian society and demand for social responsibility? How does this connect to Scrooge\'s redemption?"',
  resourcesNeeded: ['Ignorance & Want passage', '"Surplus population" passage', 'Chart template', 'Victorian context slides'],
  assessmentOpportunities: ['Annotation precision', 'Chart accuracy', 'Understanding of social critique', 'Essay quality', 'Contextual awareness'],
  keyVocabulary: ['ignorance', 'poverty', 'surplus population', 'social responsibility', 'welfare', 'education', 'opportunity', 'critique', 'workhouse'],
  sendAdaptations: 'Visual description of Ignorance and Want with annotations. Pre-highlighted "surplus population" passage with moral horror noted. Chart template with examples. Context summary on Victorian poor laws. Audio recording of key passages.',
};

const christmasCarolRedemption: LiteratureLesson = {
  id: 'carol-lit-10',
  title: 'A Christmas Carol: Redemption & The Power of Change',
  text: 'A Christmas Carol',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the nature of Scrooge\'s redemption and its moral significance',
    'Examine the final chapter\'s transformation of behaviour and values',
    'Explore how Dickens presents possibility of change in people and society',
    'Evaluate the completeness and sustainability of redemption',
    'Link redemption to Christian themes and Victorian morality',
  ],
  starterActivity: {
    title: 'Can People Change?',
    duration: '6 minutes',
    instructions: 'Debate: can someone fundamentally change their nature and values? Or do they just pretend? Introduce: the novella argues for genuine transformation, but is it realistic?',
    resources: ['Discussion prompt'],
  },
  mainActivity: {
    title: 'Scrooge\'s Transformation: Genuine or Temporary?',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read the final chapter describing Scrooge\'s actions Christmas morning: raising Bob\'s wages, buying the turkey, giving money to the Poor Law charity, becoming like a second father to Tiny Tim. Annotate for: concrete actions (not just remorse), the specific amounts of generosity, the breadth of his change (business, charity, personal relationships). PART 2 (18 min): Examine his emotional state: the language of joy, freedom, lightness. Annotate for: how different he is, phrases like "he became as good a friend... as good a master... as good a man." Track: this is transformation in values, not just behavior. PART 3 (14 min): Students create a before/after analysis chart: Scrooge\'s Values Before | Scrooge\'s Values After | Evidence. Write analytical paragraph: "Evaluate Dickens\' presentation of Scrooge\'s redemption. Is the transformation complete and sustainable? What message does it send about human nature and moral change?"',
    differentiation: {
      support: 'Pre-highlighted transformation passages. Chart template.',
      core: 'Independent annotation and response.',
      stretch: 'Critical evaluation: does one night of supernatural intervention realistically change a lifetime of values? Is the ending optimistic or too idealistic?',
    },
    resources: ['Final chapter extracts', 'Before/after chart', 'Paragraph frame'],
  },
  plenary: {
    title: 'Hope for Humanity',
    duration: '4 minutes',
    instructions: 'Conclude: "Dickens\' novella is fundamentally hopeful. It argues that redemption is possible, that people can change radically, and that individual change can inspire social change." Link to Christmas themes of renewal and second chances.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand redemption as novella\'s central message.',
      stretch: 'Discuss: why is A Christmas Carol so popular during Christmas season? What does it offer readers spiritually and morally?',
    },
  },
  homework: 'Write final analytical essay (550 words): "Analyse how Dickens presents the possibility of redemption in Scrooge\'s transformation. How convincing is the change? What does the novella ultimately argue about human nature and moral responsibility?"',
  resourcesNeeded: ['Final chapter extracts', 'Before/after chart', 'Paragraph frame'],
  assessmentOpportunities: ['Transformation analysis', 'Chart accuracy', 'Critical evaluation', 'Essay quality', 'Thematic comprehension'],
  keyVocabulary: ['redemption', 'transformation', 'moral change', 'renewal', 'second chance', 'hope', 'generosity', 'social responsibility', 'human nature'],
  sendAdaptations: 'Visual before/after character analysis with images. Pre-highlighted transformation passages. Chart template with examples. Paragraph frame with sentence starters. Summary of entire novella\'s arc.',
};

// ════════════════════════════════════════════════════════════════════════════
// BLOOD BROTHERS — 4 ADDITIONAL SPECIALIZED LESSONS
// ════════════════════════════════════════════════════════════════════════════

const bloodBrothersNatureNurture: LiteratureLesson = {
  id: 'blood-bro-lit-07',
  title: 'Blood Brothers: Nature vs Nurture & Identity',
  text: 'Blood Brothers',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Russell\'s exploration of nature versus nurture through the twin brothers',
    'Examine how environment shapes personality and opportunity',
    'Explore the significance of blood kinship versus social identity',
    'Evaluate the extent to which Mickey and Edward are the same or different',
    'Link the nature/nurture debate to 1980s social context',
  ],
  starterActivity: {
    title: 'Twin Experiment: Would Identical Twins Be Identical?',
    duration: '6 minutes',
    instructions: 'Discussion: if identical twins were raised in completely different circumstances, would they be the same person? Show images of Mickey and Edward at different ages. Introduce: Russell uses the twins to explore whether our nature or circumstances define us.',
    resources: ['Twin discussion prompt', 'Mickey/Edward comparison images'],
  },
  mainActivity: {
    title: 'The Same Blood, Different Lives',
    duration: '47 minutes',
    instructions: 'PART 1 (16 min): Examine early scenes showing baby Mickey and Edward. Annotate for: any differences in personality (are they present from birth?), the moment of separation, the narrator\'s commentary suggesting fate/superstition. Track: Russell hints at essential similarity (blood) and growing divergence (environment). PART 2 (18 min): Read scenes showing adolescent Mickey (struggling, poor, delinquent) and Edward (educated, privileged, naive). Annotate for: how environment has shaped their paths, their speech patterns, their aspirations, their self-confidence. Track specific differences: Mickey\'s swearing, Edward\'s formality; Mickey\'s limited opportunities, Edward\'s possibilities. PART 3 (13 min): Students create a comparison table with three columns for each age: Birth | Age 7-8 (reunion) | Age 17 (near end). For each column, note Similarities and Differences. Write analytical paragraph: "How does Russell present nature and nurture as forces shaping Mickey and Edward? To what extent are they the same person divided by circumstance?"',
    differentiation: {
      support: 'Provided scenes. Comparison table template.',
      core: 'Independent selection of scenes and analysis.',
      stretch: 'Evaluate: does Russell believe in fate or social determinism? Does the tragic ending support one view over the other?',
    },
    resources: ['Early scenes with Mickey/Edward', 'Adolescent scenes', 'Comparison table', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Question Russell Asks',
    duration: '4 minutes',
    instructions: 'Conclude: "Russell\'s play suggests that while the twins share blood, nurture profoundly shapes who they become. Yet the tragic ending suggests that even identical twins cannot escape the social structures that divide them." Link to social inequality themes.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand the nature/nurture dilemma Russell presents.',
      stretch: 'Consider: can social systems be changed to give all children opportunities, or are class differences inevitable?',
    },
  },
  homework: 'Write analytical response (400 words): "How does Russell use the twin brothers to explore the question of nature versus nurture? What does the play suggest about the power of environment to shape human destiny?"',
  resourcesNeeded: ['Early Mickey/Edward scenes', 'Adolescent scenes', 'Comparison table', 'Paragraph frame'],
  assessmentOpportunities: ['Scene selection', 'Table accuracy', 'Comparison precision', 'Analytical response quality', 'Thematic understanding'],
  keyVocabulary: ['nature', 'nurture', 'identity', 'fate', 'social determinism', 'environment', 'opportunity', 'class', 'destiny'],
  sendAdaptations: 'Visual timeline showing Mickey and Edward\'s development. Pre-selected key scenes with annotations. Comparison table with examples. Paragraph frame with sentence starters. Summary of nature/nurture debate.',
};

const bloodBrothersClassDivide: LiteratureLesson = {
  id: 'blood-bro-lit-08',
  title: 'Blood Brothers: Class Divide & Social Inequality',
  text: 'Blood Brothers',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Russell\'s presentation of class division in 1980s Britain',
    'Examine how poverty limits Mickey\'s life choices and opportunities',
    'Explore the contrast between the Lyons family wealth and the Johnstone family poverty',
    'Evaluate Russell\'s critique of social inequality',
    'Link class themes to the tragic ending and social commentary',
  ],
  starterActivity: {
    title: 'What Money Buys',
    duration: '6 minutes',
    instructions: 'Discussion: how does family wealth affect opportunities? (Education, housing, career, confidence, expectations.) Show contrast images: wealthy vs poor neighbourhoods. Introduce: Russell uses the families to show how class determines destiny in 1980s Britain.',
    resources: ['Wealth discussion prompt', 'Class comparison images'],
  },
  mainActivity: {
    title: 'Poverty vs Privilege: The Structural Trap',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read scenes showing the Johnstone family: crowded housing, financial stress, job insecurity, Mrs Johnstone\'s desperation, the poverty that forces her into giving away Mickey. Annotate for: language showing poverty\'s weight, the lack of choice, the exhaustion. Track: poverty is structural, not individual failing. PART 2 (18 min): Contrast with the Lyons family: comfortable home, money for education, professional stability, plans for Edward\'s future. Annotate for: ease, options, casual mention of money, lack of anxiety. PART 3 (14 min): Students create a Venn diagram: Johnstone Family Only | Both Families | Lyons Family Only. Add words/phrases showing resources, opportunities, language, values. Write analytical paragraph: "How does Russell use the two families to present class as a determining force in life outcomes? What critique of 1980s social inequality is he offering?"',
    differentiation: {
      support: 'Selected family scenes. Venn diagram template.',
      core: 'Independent scene selection and analysis.',
      stretch: 'Research 1980s Britain: Thatcher\'s policies, unemployment, social inequality. How does Russell respond to these issues in his play?',
    },
    resources: ['Johnstone family scenes', 'Lyons family scenes', 'Venn diagram template', 'Paragraph frame', '1980s context slides'],
  },
  plenary: {
    title: 'Systems of Inequality',
    duration: '4 minutes',
    instructions: 'Conclude: "Russell shows that class is not about individual merit; it is about systems that give opportunities to some while trapping others in poverty. The tragic ending is inevitable given the structural inequality."',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand class as structural, not individual.',
      stretch: 'Discuss: can individual goodness (Mickey, Edward, even Mrs Johnstone) overcome structural inequality?',
    },
  },
  homework: 'Write analytical essay (450 words): "How does Russell use the contrast between the Johnstone and Lyons families to critique class inequality in 1980s Britain? What does the tragic ending suggest about social mobility?"',
  resourcesNeeded: ['Johnstone family scenes', 'Lyons family scenes', 'Venn diagram', 'Paragraph frame', 'Context slides'],
  assessmentOpportunities: ['Scene analysis', 'Diagram accuracy', 'Contrast identification', 'Essay quality', 'Contextual awareness'],
  keyVocabulary: ['class', 'inequality', 'poverty', 'privilege', 'opportunity', 'social mobility', 'systemic', 'structural', 'destiny'],
  sendAdaptations: 'Visual Venn diagram with images. Pre-highlighted family scenes showing contrasts. Paragraph frame with sentence starters. Context summary on 1980s inequality. Timeline of families\' diverging paths.',
};

const bloodBrothersSuperstition: LiteratureLesson = {
  id: 'blood-bro-lit-09',
  title: 'Blood Brothers: Superstition, Fate & The Narrator',
  text: 'Blood Brothers',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse Russell\'s use of superstition and fate as dramatic devices',
    'Examine the role of the Narrator as omniscient presence',
    'Explore the gunshot omen and its symbolic meaning',
    'Evaluate whether the tragedy is fated or socially determined',
    'Link superstition to the play\'s deeper message about inevitability',
  ],
  starterActivity: {
    title: 'Fate or Coincidence?',
    duration: '6 minutes',
    instructions: 'Discussion: is the tragedy inevitable or could different choices prevent it? Play opening lines of the play (Narrator\'s prediction). Introduce: Russell uses superstition and the Narrator to create a sense of inevitability.',
    resources: ['Opening lines', 'Discussion prompt'],
  },
  mainActivity: {
    title: 'The Narrator\'s Warning & The Structure of Inevitability',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read the Narrator\'s opening speech predicting the tragic ending. Annotate for: the certainty of language ("will be"), the reference to superstition and fate, the creation of dramatic irony (audience knows ending before characters). PART 2 (18 min): Track moments of superstition throughout: the blood brothers oath, references to breaking the pact, the fear that their friendship is doomed. Annotate for: how superstition expresses underlying social anxiety, how it mirrors social inevitability. PART 3 (14 min): Read the final gunshot and death scene. Annotate for: how it feels inevitable given everything before, the role of circumstance vs character choice, whether Russell presents fate as real or as metaphor for social determinism. Students write analytical paragraph: "How does Russell use the Narrator, superstition, and fate to create a sense of tragic inevitability? Is the ending predetermined by social forces or actual supernatural fate?"',
    differentiation: {
      support: 'Provided Narrator speech and key superstition moments. Paragraph frame.',
      core: 'Independent identification and analysis.',
      stretch: 'Evaluate: what is Russell\'s real message—that fate is real, or that social inequality is so powerful it seems like fate?',
    },
    resources: ['Narrator\'s opening speech', 'Superstition moments', 'Final scene', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Illusion of Choice',
    duration: '4 minutes',
    instructions: 'Conclude: "Russell uses superstition and the Narrator to suggest that the tragedy is inevitable. Whether literally fated or socially determined, the brothers cannot escape their destinies. The play asks: how much control do we have over our lives?"',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand role of fate/inevitability.',
      stretch: 'Discuss: does belief in fate remove responsibility from characters or society?',
    },
  },
  homework: 'Write analytical response (400 words): "How does Russell use the Narrator and superstition to create a sense of tragic inevitability? What is his commentary on human agency and social determination?"',
  resourcesNeeded: ['Narrator\'s speech', 'Superstition moments', 'Final scene', 'Paragraph frame'],
  assessmentOpportunities: ['Speech analysis', 'Superstition identification', 'Dramatic technique understanding', 'Response quality', 'Thematic comprehension'],
  keyVocabulary: ['fate', 'superstition', 'inevitability', 'dramatic irony', 'omens', 'destiny', 'agency', 'determinism', 'prophecy'],
  sendAdaptations: 'Pre-highlighted Narrator\'s speech. Timeline showing fate-related moments. Paragraph frame with sentence starters. Visual summary of omens. Audio recording of opening speech.',
};

const bloodBrothersEnding: LiteratureLesson = {
  id: 'blood-bro-lit-10',
  title: 'Blood Brothers: The Ending & Social Tragedy',
  text: 'Blood Brothers',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1 hour',
  learningObjectives: [
    'Analyse the final confrontation and deaths of the brothers',
    'Examine Russell\'s presentation of the police officer shooting Mickey',
    'Explore how the ending comments on social injustice',
    'Evaluate the emotional and political impact of the tragedy',
    'Link the ending to the play\'s broader themes of class, fate, and inevitability',
  ],
  starterActivity: {
    title: 'Justice & Circumstance',
    duration: '6 minutes',
    instructions: 'Discussion: if someone breaks the law under desperation, are they equally guilty as someone who breaks it from malice? Introduce: Mickey\'s death raises questions about justice and the circumstances that drive people to desperate acts.',
    resources: ['Justice discussion prompt'],
  },
  mainActivity: {
    title: 'The Final Scene: Tragedy & Social Critique',
    duration: '47 minutes',
    instructions: 'PART 1 (15 min): Read the confrontation between Mickey, Edward, and the police officer(s). Annotate for: Mickey\'s desperation, the moment of shooting, Edward\'s death, Mickey\'s response. Track the pace: how quickly does the tragedy unfold? How does Russell manage the shocking violence? PART 2 (18 min): Examine the final moment: Mrs Johnstone\'s reaction, the revelation of truth (that they are brothers), and the immediate aftermath. Annotate for: the emotional devastation, the pointlessness of the violence, how knowledge of their shared blood transforms the tragedy. PART 3 (14 min): Students analyse the social critique: Mickey is driven to crime by poverty and desperation; Edward tries to help but is trapped by class boundaries; the police officer shoots without understanding context. Write analytical paragraph: "How does Russell use the ending to present a social critique of inequality and injustice? What is the significance of the brothers\' deaths?"',
    differentiation: {
      support: 'Provided key scenes. Paragraph frame.',
      core: 'Independent scene analysis.',
      stretch: 'Evaluate: is the play\'s ending pessimistic or a powerful statement about social failure? Does it inspire change or despair?',
    },
    resources: ['Confrontation scene', 'Final moment/revelation', 'Mrs Johnstone reaction', 'Paragraph frame'],
  },
  plenary: {
    title: 'The Play\'s Final Message',
    duration: '4 minutes',
    instructions: 'Conclude: "Blood Brothers\' tragic ending is not just personal tragedy; it is social tragedy. Two identical brothers, separated by class, destroyed by a system that divides them. Russell argues: if we allow such inequality, this is the result." Link to social responsibility and systemic change.',
    differentiation: {
      support: 'Provide conclusion.',
      core: 'Understand tragedy as social statement.',
      stretch: 'Discuss: nearly 40 years after writing, is Russell\'s critique still relevant to British society?',
    },
  },
  homework: 'Write final analytical essay (550 words): "Analyse the significance of the ending of Blood Brothers. How does Russell use the deaths of Mickey and Edward to deliver a powerful social message about class inequality and the failure of society?"',
  resourcesNeeded: ['Confrontation and final scenes', 'Paragraph frame'],
  assessmentOpportunities: ['Scene analysis', 'Understanding of social critique', 'Emotional response analysis', 'Essay quality', 'Thematic comprehension'],
  keyVocabulary: ['tragedy', 'justice', 'desperation', 'class', 'inevitability', 'social critique', 'guilt', 'brotherhood', 'injustice'],
  sendAdaptations: 'Visual timeline of final scenes. Pre-highlighted confrontation passage. Paragraph frame with sentence starters. Summary of social messages throughout play. Audio recording of final revelation.',
};
export const literatureTextPlans: LiteratureLesson[] = [
  // Macbeth (Original 6 + 4 new)
  macbethLesson1,
  macbethLesson2,
  macbethLesson3,
  macbethLesson4,
  macbethLesson5,
  macbethLesson6,
  macbethActOneAmbition,
  macbethActTwoGuilt,
  macbethActThreeTyranny,
  macbethActFiveDownfall,
  // A Christmas Carol (Original 6 + 4 new)
  christmasCarolLesson1,
  christmasCarolLesson2,
  christmasCarolLesson3,
  christmasCarolLesson4,
  christmasCarolLesson5,
  christmasCarolLesson6,
  christmasCarolScroogeIsolation,
  christmasCarolFezziwigScrooge,
  christmasCarolIgnoranceWant,
  christmasCarolRedemption,
  // An Inspector Calls (Original 6 + 4 new)
  inspectorLesson1,
  inspectorLesson2,
  inspectorLesson3,
  inspectorLesson4,
  inspectorLesson5,
  inspectorLesson6,
  inspectorBirlingCapitalism,
  inspectorSheilaTransformation,
  inspectorGeraldSecrets,
  inspectorInspectorRole,
  // Jekyll & Hyde (Original 6 + 4 new)
  jekyllHydeLesson1,
  jekyllHydeLesson2,
  jekyllHydeLesson3,
  jekyllHydeLesson4,
  jekyllHydeLesson5,
  jekyllHydeLesson6,
  jekyllHydeDuality,
  jekyllHydeVictorianRepression,
  jekyllHydeTransformation,
  jekyllHydeFinalChapter,
  // Romeo & Juliet (Original 6)
  romeoJulietLesson1,
  romeoJulietLesson2,
  romeoJulietLesson3,
  romeoJulietLesson4,
  romeoJulietLesson5,
  romeoJulietLesson6,
  // Blood Brothers (New 4)
  bloodBrothersNatureNurture,
  bloodBrothersClassDivide,
  bloodBrothersSuperstition,
  bloodBrothersEnding,
]
