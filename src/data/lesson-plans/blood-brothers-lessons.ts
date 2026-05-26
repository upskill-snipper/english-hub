// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

import type { LessonPlan } from './macbeth-lessons'

// ─── Lesson 1: The Narrator and Dramatic Irony ─────────────────────────────

const lesson1: LessonPlan = {
  id: 'blood-brothers-01-narrator-dramatic-irony',
  title: 'The Narrator and Dramatic Irony',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the role of the Narrator as a dramatic device in Blood Brothers.',
    'Understand how Russell uses dramatic irony to create tension and engage the audience.',
    "Explore the Narrator's connections to fate, superstition and moral judgement.",
  ],
  successCriteria: [
    'I can explain at least two functions of the Narrator in Blood Brothers.',
    'I can identify and analyse examples of dramatic irony in the opening and throughout the play.',
    'I can evaluate whether the Narrator represents fate, conscience or the voice of society.',
  ],
  keywords: [
    'dramatic irony',
    'chorus',
    'omniscient',
    'prologue',
    'foreboding',
    'Greek chorus',
    'authorial voice',
    'staging',
  ],
  starterActivity: {
    title: 'The Spoiler Effect',
    duration: '8 minutes',
    instructions:
      'Display the opening stage direction and Narrator\'s prologue speech on the board: "So did y\' hear the story of the Johnstone twins?" Explain that Russell tells the audience the ending before the play begins. Students discuss in pairs: why would a playwright reveal the ending at the start? What effect does this have on the audience? Collect responses and introduce the term "dramatic irony" - the audience knows more than the characters. Link to the tradition of the Greek chorus.',
    differentiation: {
      support:
        'Provide a definition card for dramatic irony with an everyday example (e.g., a horror film where the audience sees the danger but the character does not).',
      core: 'Students explain in their own words why dramatic irony increases tension rather than reducing it.',
      stretch:
        'Students compare the prologue to a Greek tragedy and consider why Russell chose this classical structure for a working-class story.',
    },
    resources: [
      'Prologue extract displayed on board',
      'Definition cards for support tier',
      'Mini-whiteboards',
    ],
  },
  mainActivities: [
    {
      title: "Tracking the Narrator's Role",
      duration: '20 minutes',
      instructions:
        'Provide students with a selection of five key Narrator extracts from across the play (prologue, "shoes upon the table", the deal scene, the teenage years, and the final scene). Students complete a table with columns: Extract, What the Narrator Does (narrate/warn/judge/foreshadow), Effect on Audience, and Link to Theme. Teacher models the first row. Students work in pairs to complete the remaining rows. Feed back whole class, highlighting how the Narrator shifts between roles.',
      differentiation: {
        support:
          'Provide a word bank of effects (tension, foreboding, guilt, unease) and a partially completed first row.',
        core: "Students complete all rows independently and write a summary sentence about the Narrator's overall purpose.",
        stretch:
          'Students evaluate which role (narrator/judge/fate figure) is most important and justify their answer with textual evidence.',
      },
      resources: [
        'Narrator extracts handout',
        'Role-tracking table worksheet',
        'Word bank (support tier)',
      ],
    },
    {
      title: 'Analytical Writing: The Narrator as a Device',
      duration: '22 minutes',
      instructions:
        'Students write two analytical paragraphs responding to: "How does Russell use the Narrator to create dramatic tension?" Model a paragraph using PEE (Point, Evidence, Explain) structure on the board, focusing on the "shoes upon the table" motif. Students then write their own paragraph using a different extract. Peer assessment using success criteria checklist: Does the paragraph include a clear point? Is a quotation embedded? Is the effect on the audience explained? Is Russell\'s intention discussed?',
      differentiation: {
        support:
          'Provide a paragraph frame with sentence starters: "Russell uses the Narrator to... This is shown when... The effect on the audience is..."',
        core: 'Students write two full PEE paragraphs independently and peer assess.',
        stretch:
          'Students include a counter-argument: "However, an alternative interpretation is..." and consider how staging (the Narrator watching from the shadows) contributes to the effect.',
      },
      resources: [
        'PEE model paragraph on board',
        'Paragraph frame (support tier)',
        'Peer assessment checklist',
      ],
    },
  ],
  plenaryActivity: {
    title: "The Narrator's Identity - Class Vote",
    duration: '7 minutes',
    instructions:
      "Pose the question: \"Who or what is the Narrator?\" Display three options: (A) The Devil or fate itself, (B) Society's voice judging the characters, (C) The audience's conscience. Students vote and justify their choice. Teacher summarises that Russell deliberately leaves the Narrator ambiguous - this ambiguity is itself a dramatic device that forces the audience to question who is responsible for the twins' deaths.",
    differentiation: {
      support: 'Students select one option and give one reason for their choice.',
      core: 'Students justify their answer with a specific reference to the text.',
      stretch:
        'Students argue why the ambiguity itself is more powerful than any single interpretation.',
    },
  },
  homework:
    'Write a paragraph explaining whether the Narrator is more like a judge or a storyteller, using at least one quotation from the play to support your view.',
  worksheetQuestions: [
    {
      question:
        'What is dramatic irony and how does Russell use it in the prologue of Blood Brothers?',
      lines: 5,
      modelAnswer:
        "Dramatic irony is when the audience knows something that the characters do not. Russell uses it in the prologue by revealing that the twins will die before the story even begins. This means that throughout the play, every happy moment is tinged with sadness because the audience already knows the tragic ending. Russell uses this to create a constant sense of foreboding and to encourage the audience to focus not on what happens, but on why it happens - particularly the role of social class in the twins' fate.",
      marks: 4,
    },
    {
      question:
        'Explain the significance of the Narrator\'s recurring reference to "shoes upon the table".',
      lines: 5,
      modelAnswer:
        "The \"shoes upon the table\" is a superstition that the Narrator repeatedly references to create a sense of foreboding and inevitability. Each time it is mentioned, it reminds the audience that the characters are moving closer to their tragic fate. Russell uses this motif to link the play's events to superstition, suggesting that the characters' lives are controlled by forces beyond their understanding. It also reflects Mrs Johnstone's working-class belief system and contrasts with the rational, middle-class world of the Lyons family.",
      marks: 4,
    },
    {
      question:
        'How does the Narrator function differently from a traditional character in a play?',
      lines: 5,
      modelAnswer:
        "Unlike a traditional character, the Narrator does not participate in the events of the story. Instead, he stands outside the action, commenting on it, warning the audience, and foreshadowing events. He functions like a Greek chorus, providing moral commentary and creating tension. He directly addresses the audience, breaking the fourth wall, which reminds them that they are watching a constructed story with a deliberate message. Russell uses the Narrator to guide the audience's interpretation and ensure they see the play as a social commentary, not just a family drama.",
      marks: 4,
    },
    {
      question:
        'Do you think the Narrator represents fate, society, or something else? Explain your view with evidence.',
      lines: 6,
      modelAnswer:
        "The Narrator could represent fate because he knows the ending from the start and seems to control the pace of events, appearing at every crucial moment like an inescapable force. However, he could also represent society's judgement, as he often comments on the characters' choices in a critical, almost threatening tone - particularly towards Mrs Johnstone when she makes the pact. Russell may have intended the Narrator to be deliberately ambiguous so that the audience must decide for themselves who is truly responsible: fate, superstition, or the class system that divides the twins.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'Students often confuse the Narrator with a character - emphasise that he is a dramatic device with multiple functions.',
    'The Greek chorus comparison is useful but avoid over-simplifying; Russell adapts rather than replicates the convention.',
    'If students have not yet read/watched the full play, the prologue extract works as a standalone introduction.',
    'Consider showing a clip of the Narrator from a stage production to illustrate staging choices (standing in shadows, following characters).',
    'This lesson pairs well with Lesson 9 (Fate, Superstition and the Ending) for revision.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Language and structure analysis',
    'Analytical writing (PEE)',
    'Inference',
    'Evaluative response',
  ],
}

// ─── Lesson 2: Mrs Johnstone - Poverty and Sacrifice ────────────────────────

const lesson2: LessonPlan = {
  id: 'blood-brothers-02-mrs-johnstone-poverty',
  title: 'Mrs Johnstone: Poverty and Sacrifice',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Russell presents Mrs Johnstone as a sympathetic character shaped by poverty.',
    "Explore how her songs reveal her inner emotions and Russell's authorial intention.",
    'Evaluate whether Mrs Johnstone is a victim of circumstance or partly responsible for the tragedy.',
  ],
  successCriteria: [
    'I can explain how Russell uses Mrs Johnstone to criticise social inequality.',
    'I can analyse at least two quotations that reveal her character and circumstances.',
    'I can write an evaluative response considering multiple interpretations of her choices.',
  ],
  keywords: [
    'poverty',
    'maternal instinct',
    'sacrifice',
    'exploitation',
    'working class',
    'authorial intention',
    'pathos',
    'monologue',
  ],
  starterActivity: {
    title: 'What Would You Do?',
    duration: '7 minutes',
    instructions:
      'Present students with a moral dilemma (no names): "A single mother with seven children and no money is pregnant with twins. A wealthy woman who cannot have children offers to take one of the babies and give it a better life. What would you do?" Students discuss in pairs and feed back. Then reveal this is the central premise of Blood Brothers. Discuss: does poverty limit your choices? Is it fair to judge someone in desperate circumstances?',
    differentiation: {
      support:
        'Provide a simple agree/disagree card for students to hold up, then ask them to explain their choice verbally.',
      core: 'Students must give a reason for and against the decision before choosing a side.',
      stretch:
        'Students consider how social class affects the range of options available to people and link to 1960s Liverpool context.',
    },
    resources: ['Moral dilemma slide', 'Agree/Disagree cards (support tier)'],
  },
  mainActivities: [
    {
      title: "Mrs Johnstone's Journey - Key Extracts Analysis",
      duration: '22 minutes',
      instructions:
        'Provide four key extracts showing Mrs Johnstone at different points: (1) her opening monologue about being "left" by her husband, (2) the pact with Mrs Lyons, (3) the locket scene, (4) the final scene. For each extract, students annotate: what does this reveal about her character? What emotions is the audience intended to feel? How does Russell use language to create sympathy? Teacher models annotation of extract 1. Students work through remaining extracts in pairs.',
      differentiation: {
        support:
          'Provide guided annotation prompts beside each extract (e.g., "What does the word \'left\' suggest about how she sees herself?").',
        core: "Students annotate independently and write a sentence summarising Russell's presentation of Mrs Johnstone for each extract.",
        stretch:
          'Students compare how Mrs Johnstone is presented in the early scenes versus the ending and analyse how Russell develops her character across the play.',
      },
      resources: [
        'Key extracts handout (x4)',
        'Annotation guide (support tier)',
        'Coloured pens for annotation',
      ],
    },
    {
      title: 'Evaluative Writing: Victim or Responsible?',
      duration: '20 minutes',
      instructions:
        'Students write a response to: "To what extent is Mrs Johnstone responsible for the tragedy?" Teacher models a balanced opening on the board: "On one hand... On the other hand..." Students must include: one argument that she is a victim (poverty, manipulation by Mrs Lyons, lack of support), one argument that she bears some responsibility (she agreed to the pact, she kept the secret), and a concluding judgement. Peer review using two stars and a wish.',
      differentiation: {
        support:
          'Provide a writing frame with sentence starters for each section (victim argument, responsibility argument, conclusion).',
        core: 'Students write a full balanced response with embedded quotations.',
        stretch:
          "Students consider Russell's authorial intention - does he want the audience to blame Mrs Johnstone or the system that trapped her? Use contextual evidence about 1980s Thatcherism.",
      },
      resources: ['Writing frame (support tier)', 'Quotation bank handout', 'Peer review sheet'],
    },
  ],
  plenaryActivity: {
    title: 'Sympathy Barometer',
    duration: '6 minutes',
    instructions:
      "Draw a scale of 1-10 on the board (1 = no sympathy, 10 = full sympathy). Students rate their sympathy for Mrs Johnstone and hold up a number on their fingers. Select students from different points to justify. Key question: does Russell want us to sympathise with her? How does he achieve this? Summarise that Russell uses songs, direct address and pathos to position the audience firmly on Mrs Johnstone's side - she represents the working-class experience.",
    differentiation: {
      support: 'Students give a one-sentence justification for their rating.',
      core: 'Students link their rating to a specific moment or quotation.',
      stretch:
        "Students explain how Russell manipulates the audience's sympathy through specific dramatic techniques.",
    },
  },
  homework:
    'Find and copy out the lyrics to "Marilyn Monroe" or "Tell Me It\'s Not True". Write a paragraph analysing how the song reveals Mrs Johnstone\'s emotions and Russell\'s message about class.',
  worksheetQuestions: [
    {
      question:
        'How does Russell present Mrs Johnstone as a victim of poverty in the opening of the play?',
      lines: 5,
      modelAnswer:
        'Russell presents Mrs Johnstone as a victim of poverty from the very beginning. She describes how her husband "left" her when she became pregnant again, leaving her alone with seven children and no income. The language of abandonment emphasises her vulnerability. Russell uses her direct address to the audience to create sympathy - she speaks honestly and without self-pity, which makes the audience admire her resilience while pitying her circumstances. Her comparison of herself to Marilyn Monroe shows her lost dreams and the gap between aspiration and reality for working-class women.',
      marks: 4,
    },
    {
      question:
        'Why does Mrs Johnstone agree to give away one of her twins? What does this reveal about her character?',
      lines: 5,
      modelAnswer:
        'Mrs Johnstone agrees to give away one of her twins because she is desperate - she already has more children than she can afford to feed, and Mrs Lyons pressures her with the promise that the child will have a better life. This reveals her selflessness: she believes she is doing what is best for the baby, even though it causes her immense pain. However, it also reveals her powerlessness - she does not feel she has the right to say no to her employer. Russell uses this moment to show how poverty strips people of agency and forces impossible choices.',
      marks: 4,
    },
    {
      question: 'Analyse the significance of the locket scene between Mrs Johnstone and Edward.',
      lines: 6,
      modelAnswer:
        "The locket scene is significant because it shows Mrs Johnstone's enduring love for Edward despite giving him away. When she gives him a locket with a photograph, it symbolises the bond that class division cannot completely sever. For the audience, this moment is charged with dramatic irony - Edward does not know the significance of the gift, but the audience does. Russell uses this to highlight the cruelty of the separation and to show that Mrs Johnstone never stopped being Edward's mother emotionally, even if she could not be his mother materially. The locket later becomes a key prop in the climactic revelation.",
      marks: 5,
    },
    {
      question: 'To what extent is Mrs Johnstone responsible for the deaths of Mickey and Edward?',
      lines: 6,
      modelAnswer:
        "Mrs Johnstone bears some responsibility because she agreed to the pact and kept the secret for years. If she had told the truth earlier, the tragedy might have been avoided. However, Russell presents her as a victim of a deeply unequal class system - she was manipulated by Mrs Lyons, who exploited her position as employer. Mrs Johnstone had no financial security, no partner, and no power. Russell's authorial intention is not to blame Mrs Johnstone but to blame the society that created the conditions in which such a desperate bargain was possible. The tragedy is ultimately caused by class inequality, not by an individual's moral failure.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best if students have read or watched at least the first half of the play.',
    'Mrs Johnstone\'s songs are crucial to understanding her character - consider playing audio or video of "Marilyn Monroe" and "Tell Me It\'s Not True".',
    'The moral dilemma starter can generate strong opinions - manage sensitively, especially if students have experience of family separation.',
    'Emphasise that AQA rewards exploration of authorial intention - why does Russell present her this way?',
    'Link forward to Lesson 3 (Mrs Lyons) for a contrast study.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Language analysis',
    'AO3: Context',
    'Evaluative writing',
    'Empathy and inference',
  ],
}

// ─── Lesson 3: Mrs Lyons - Class Anxiety and Manipulation ───────────────────

const lesson3: LessonPlan = {
  id: 'blood-brothers-03-mrs-lyons-class-anxiety',
  title: 'Mrs Lyons: Class Anxiety and Manipulation',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Russell presents Mrs Lyons as a manipulative and anxious character.',
    'Explore how class privilege and fear drive her actions throughout the play.',
    "Compare and contrast Mrs Lyons with Mrs Johnstone to understand Russell's message about class.",
  ],
  successCriteria: [
    'I can explain how Mrs Lyons manipulates Mrs Johnstone using her social power.',
    "I can analyse quotations showing Mrs Lyons' growing paranoia and desperation.",
    'I can compare the two mothers and explain what Russell is saying about class through their differences.',
  ],
  keywords: [
    'manipulation',
    'paranoia',
    'privilege',
    'exploitation',
    'middle class',
    'antagonist',
    'dramatic foil',
    'hysteria',
  ],
  starterActivity: {
    title: 'Power and Persuasion',
    duration: '7 minutes',
    instructions:
      'Display two statements: "Money can buy happiness" and "Money brings fear." Students discuss which they agree with more. Then present a scenario: a wealthy employer asks her cleaner for an impossible favour. What power dynamics exist? How might the employer persuade the cleaner? Introduce Mrs Lyons as someone who has wealth and status but uses them to manipulate someone more vulnerable.',
    differentiation: {
      support: 'Provide simple definitions of "power dynamic" and "manipulation" on a card.',
      core: 'Students identify three ways an employer might have power over an employee.',
      stretch:
        'Students consider how Russell might use the employer-employee relationship to comment on wider class structures in 1980s Britain.',
    },
    resources: ['Discussion statements slide', 'Key terms card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Mrs Lyons Through the Play - Character Arc',
      duration: '20 minutes',
      instructions:
        'Students are given a timeline of six key moments for Mrs Lyons: (1) persuading Mrs Johnstone to give up the baby, (2) using the superstition as a weapon, (3) sacking Mrs Johnstone, (4) trying to keep Edward away from Mickey, (5) attempting to pay Mrs Johnstone to move, (6) telling Mickey the truth. For each moment, students complete: What she does, Why she does it (motivation), How Russell presents her (language/stage directions), and What the audience feels. Class discussion: does Mrs Lyons become more sympathetic or less sympathetic as the play progresses?',
      differentiation: {
        support: 'Provide a partially completed timeline with key quotations already identified.',
        core: 'Students complete the timeline independently and identify the turning point in her character.',
        stretch:
          'Students argue whether Mrs Lyons is a villain or a victim of her own class anxieties, using evidence from across the play.',
      },
      resources: [
        'Character arc timeline worksheet',
        'Key quotations sheet',
        'Partially completed version (support tier)',
      ],
    },
    {
      title: 'Comparative Analysis: Mrs Johnstone vs Mrs Lyons',
      duration: '22 minutes',
      instructions:
        'Students create a comparison table with categories: Wealth, Mothering Style, Motivation, How They Treat the Twins, How the Audience Responds. Then write a comparative paragraph: "Russell presents Mrs Johnstone and Mrs Lyons as contrasting mothers to show..." Teacher models the opening of a comparative paragraph using connectives (whereas, in contrast, however). Students write their own paragraph focusing on one category. Share examples under the visualiser.',
      differentiation: {
        support: 'Provide a Venn diagram template and sentence starters for the paragraph.',
        core: 'Students write a full comparative paragraph using embedded quotations from both characters.',
        stretch:
          'Students analyse what Russell is saying about class through the contrast - is he arguing that wealth corrupts, or that poverty ennobles? Evaluate both sides.',
      },
      resources: [
        'Comparison table template',
        'Venn diagram (support tier)',
        'Connectives word mat',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Hot Seat: Mrs Lyons on Trial',
    duration: '8 minutes',
    instructions:
      'Select a confident student (or teacher in role) to sit in the hot seat as Mrs Lyons. The class asks questions about her choices: "Why did you take the baby?" "Do you regret sacking Mrs Johnstone?" "Why did you tell Mickey the truth at the end?" The student in role must answer in character. After the hot seat, discuss: does understanding her motivations change our judgement of her?',
    differentiation: {
      support:
        'Provide three pre-written questions for students who find it difficult to generate their own.',
      core: 'Students prepare and ask their own questions, using evidence from the text.',
      stretch:
        'Students challenge the hot-seater with counter-evidence: "But in Act 2 you said..."',
    },
  },
  homework:
    'Write a paragraph answering: "Is Mrs Lyons a villain or a victim?" Use at least two quotations and consider Russell\'s authorial intention.',
  worksheetQuestions: [
    {
      question: 'How does Mrs Lyons manipulate Mrs Johnstone into giving up her child?',
      lines: 5,
      modelAnswer:
        'Mrs Lyons manipulates Mrs Johnstone by exploiting their unequal power dynamic. As her employer, she holds financial power over Mrs Johnstone. She appeals to Mrs Johnstone\'s love for her children by arguing the baby will have a "better life" with money and opportunities. Crucially, she then uses superstition - telling Mrs Johnstone that if the twins ever discover they are brothers, they will die - to seal the pact and prevent her from reclaiming Edward. Russell shows how the middle class can exploit working-class vulnerability through a combination of financial leverage and psychological manipulation.',
      marks: 4,
    },
    {
      question: "How does Russell present Mrs Lyons' paranoia as it develops through the play?",
      lines: 5,
      modelAnswer:
        'Russell presents Mrs Lyons\' paranoia as escalating dangerously throughout the play. Initially, she is anxious but controlled, but as Edward grows closer to Mickey, her fear intensifies. She sacks Mrs Johnstone to remove the threat, then attempts to bribe her to move away. By the second half of the play, she is described in stage directions as increasingly "hysteric" and desperate. Her final act - telling Mickey the truth - is an act of unhinged desperation, not rational calculation. Russell suggests that her privilege, rather than protecting her, has made her fragile and unstable because she has too much to lose.',
      marks: 4,
    },
    {
      question: 'Compare how Russell presents Mrs Johnstone and Mrs Lyons as mothers.',
      lines: 6,
      modelAnswer:
        "Russell presents Mrs Johnstone as a warm, instinctive mother who loves all her children despite having nothing material to offer them. She is affectionate, playful and emotionally available. In contrast, Mrs Lyons is presented as a possessive, anxious mother whose love for Edward is entangled with her fear of losing him. She controls rather than nurtures. Russell uses this contrast to argue that good mothering is not about wealth but about emotional generosity. Mrs Johnstone, despite her poverty, is the better mother - Russell positions the audience to admire her warmth while pitying Mrs Lyons' inability to love without fear.",
      marks: 5,
    },
    {
      question:
        "Why does Mrs Lyons tell Mickey the truth at the end of the play? What is Russell's intention in this moment?",
      lines: 5,
      modelAnswer:
        "Mrs Lyons tells Mickey the truth because she has become consumed by paranoia and desperation. She cannot bear the closeness between Edward and Linda, and she wants to destroy Edward's happiness. This is her most destructive act and it directly triggers the play's tragic climax. Russell's intention is to show how class anxiety and the fear of losing privilege can drive people to cruelty. Mrs Lyons does not act out of pure malice but out of a distorted, possessive love that has been warped by years of secrecy. Russell suggests that the pact itself - the attempt to deny the truth - is what ultimately destroys everyone.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'Students sometimes dismiss Mrs Lyons as a straightforward villain - push them to consider her complexity.',
    'The hot seat works particularly well with this character as it forces students to explore motivation rather than simply judging.',
    "Link to context: 1980s class divisions, Thatcher's Britain, the idea that wealth = moral superiority.",
    'This lesson pairs naturally with Lesson 2 (Mrs Johnstone) and could be taught back-to-back.',
    'For the comparison task, ensure students use comparative connectives, not just separate paragraphs on each character.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Language and structure analysis',
    'AO3: Context',
    'Comparative analysis',
    'Drama and empathy',
  ],
}

// ─── Lesson 4: Mickey and Edward's Childhood Friendship ─────────────────────

const lesson4: LessonPlan = {
  id: 'blood-brothers-04-childhood-friendship',
  title: "Mickey and Edward's Childhood Friendship",
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Russell presents Mickey and Edward's first meeting and childhood friendship.",
    'Explore how language differences reflect their class backgrounds from an early age.',
    'Understand how Russell uses the childhood scenes to establish the nature vs nurture debate.',
  ],
  successCriteria: [
    'I can analyse the language and behaviour of Mickey and Edward as children and link differences to class.',
    'I can explain how Russell uses humour and innocence to engage the audience in the childhood scenes.',
    "I can begin to explore the nature vs nurture debate using evidence from the boys' early interactions.",
  ],
  keywords: [
    'dialect',
    'register',
    'innocence',
    'sociolect',
    'juxtaposition',
    'nature vs nurture',
    'blood bond',
    'dramatic irony',
  ],
  starterActivity: {
    title: 'The Language of Class',
    duration: '8 minutes',
    instructions:
      'Display two short speech extracts side by side - one from Mickey ("Gis a sweet") and one from Edward ("Would you like to come and play?"). Do not reveal which character said which. Students identify differences in vocabulary, grammar and tone. Discuss: what can language tell us about someone\'s background? Introduce the terms "sociolect" and "register." Reveal the speakers and explain that Russell uses language to highlight class from the boys\' very first lines.',
    differentiation: {
      support:
        'Highlight specific words in each extract and ask students to describe the difference (e.g., formal vs informal).',
      core: 'Students identify three specific linguistic differences and suggest what each reveals about the speaker.',
      stretch:
        'Students consider whether Russell is reinforcing or challenging stereotypes about working-class and middle-class speech.',
    },
    resources: ['Speech extracts slide', 'Sociolect/register definition cards'],
  },
  mainActivities: [
    {
      title: 'Close Reading: The First Meeting (Act 1)',
      duration: '20 minutes',
      instructions:
        "Provide the extract where Mickey and Edward first meet and discover they share a birthday. Students read aloud in pairs, then annotate for: (1) how each boy speaks (vocabulary, sentence structure, slang), (2) what each boy admires about the other, (3) moments of humour, (4) dramatic irony (the audience knows they are twins). Focus question: why does Russell make their friendship so immediate and joyful? Whole-class discussion linking to the audience's knowledge of the tragic ending.",
      differentiation: {
        support:
          'Provide colour-coded annotation prompts: yellow = language differences, blue = humour, pink = dramatic irony.',
        core: 'Students annotate independently and write a summary sentence for each of the four focus areas.',
        stretch:
          'Students analyse how Russell uses the stage directions in this scene to enhance the sense of instant connection between the boys.',
      },
      resources: [
        'First meeting extract handout',
        'Annotation colour guide (support tier)',
        'Highlighters',
      ],
    },
    {
      title: 'What Do They See in Each Other? - Character Perspectives',
      duration: '20 minutes',
      instructions:
        "Students write two short diary entries: one from Mickey's perspective after meeting Edward, and one from Edward's perspective after meeting Mickey. Each entry should reflect: what they liked about the other boy, how the other boy is different from people they usually meet, and what they wish they had that the other boy has. Then students highlight where class differences are visible, even though the boys themselves are unaware of them. Select students to read aloud. Discuss: Russell shows that as children, class does not divide - so what changes?",
      differentiation: {
        support: 'Provide a diary entry template with sentence starters for each section.',
        core: 'Students write both entries independently, maintaining a distinct voice for each character.',
        stretch:
          "Students add a paragraph from the Narrator's perspective, commenting ominously on the friendship.",
      },
      resources: [
        'Diary entry template (support tier)',
        'Character voice word banks for Mickey and Edward',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Innocence Timeline',
    duration: '7 minutes',
    instructions:
      'Display a timeline of Mickey and Edward\'s relationship. Mark the childhood section as "Innocence." Ask students: what makes this section innocent? Collect responses (no awareness of class, no jealousy, playful language, blood bond). Then ask: when does the innocence begin to end, and why? This previews Lesson 5 (Adolescence). Students write one sentence on a sticky note predicting what will change and why.',
    differentiation: {
      support: 'Students complete the sentence: "The friendship is innocent because..."',
      core: 'Students explain what preserves the friendship in childhood and what will threaten it later.',
      stretch:
        "Students consider Russell's structural choice - why does he dedicate so much stage time to the childhood scenes?",
    },
  },
  homework:
    'Write a paragraph analysing how Russell uses language differences between Mickey and Edward in Act 1 to reflect their class backgrounds. Include at least two quotations.',
  worksheetQuestions: [
    {
      question: "How does Russell present Mickey and Edward's first meeting?",
      lines: 5,
      modelAnswer:
        'Russell presents their first meeting as joyful, immediate and almost magical. The boys discover they share the same birthday and become instant friends, making a "blood bond" to be brothers. Russell uses humour - Edward is fascinated by Mickey\'s swearing, Mickey is amazed by Edward\'s politeness - to make the scene warm and engaging. The audience, however, experiences dramatic irony because they know the boys really are brothers. This creates a bittersweet effect: the friendship is genuine and beautiful, but the audience knows it is built on a secret that will eventually destroy them both.',
      marks: 4,
    },
    {
      question:
        'How does Russell use language to show class differences between Mickey and Edward as children?',
      lines: 5,
      modelAnswer:
        'Mickey speaks in working-class Liverpool dialect with informal grammar, slang and swearing ("Gis a sweet", "I\'ll tell me mam"). Edward speaks in Standard English with polite, formal vocabulary ("Shall we go and play?", "You say smashing things"). Russell uses this linguistic contrast to show that class shapes identity from a very early age - even as seven-year-olds, the boys have been moulded by their environments. Importantly, neither boy judges the other for their language; Russell suggests that class prejudice is learned, not natural.',
      marks: 4,
    },
    {
      question: 'What is the significance of the "blood bond" between Mickey and Edward?',
      lines: 5,
      modelAnswer:
        'The blood bond is deeply significant because it is both literal and symbolic. Literally, Mickey and Edward prick their hands and mix their blood to become "blood brothers" - a childhood ritual of friendship. Symbolically, the audience knows they already share blood because they are twins. Russell uses this dramatic irony to highlight the tragedy: the boys instinctively feel a connection that goes beyond friendship, but they can never know the truth. The blood bond also foreshadows the blood that will be shed at the end of the play, linking innocence to inevitable violence.',
      marks: 5,
    },
    {
      question: 'Why does Russell make the childhood scenes so happy and humorous?',
      lines: 5,
      modelAnswer:
        "Russell makes the childhood scenes happy and humorous to increase the emotional impact of the tragedy. By showing Mickey and Edward as carefree, playful children who genuinely love each other's company, he makes the audience invest emotionally in their friendship. This makes their later separation, jealousy and deaths all the more devastating. The happiness also serves Russell's argument about nature vs nurture: as children, before society's class divisions take full effect, the boys are equals. The humour and joy prove that class barriers are constructed, not natural - which makes the tragedy a social crime, not an inevitable fate.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson works best with students reading the extract aloud - the language differences are much more apparent when spoken.',
    'Consider having students perform the first meeting scene in pairs before analysing it.',
    'The diary entry task encourages empathy and inference - remind students to stay in character throughout.',
    'Link the "blood bond" to the title of the play and to the Narrator\'s use of blood imagery.',
    'Preview the shift to adolescence (Lesson 5) at the end - this contrast is essential for the exam.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Language analysis',
    'Creative writing in character',
    'Inference and empathy',
    'Dramatic irony identification',
  ],
}

// ─── Lesson 5: Adolescence and Growing Apart ────────────────────────────────

const lesson5: LessonPlan = {
  id: 'blood-brothers-05-adolescence-growing-apart',
  title: 'Adolescence and Growing Apart',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Russell presents the transition from childhood to adolescence for Mickey and Edward.',
    'Explore how class divisions become increasingly visible and damaging as the boys grow up.',
    'Evaluate how Russell uses structural contrast between childhood and adolescence to develop his message.',
  ],
  successCriteria: [
    "I can explain how and why Mickey and Edward's friendship changes during adolescence.",
    "I can analyse quotations showing the impact of class on each character's opportunities.",
    "I can discuss Russell's structural choice to contrast childhood innocence with adolescent awareness.",
  ],
  keywords: [
    'adolescence',
    'disillusionment',
    'class consciousness',
    'resentment',
    'unemployment',
    'structural contrast',
    'turning point',
    'inequality',
  ],
  starterActivity: {
    title: 'Then and Now',
    duration: '7 minutes',
    instructions:
      'Display two images side by side: a photo of two children playing happily, and a photo of two teenagers in very different settings (one in a school uniform, one on a street corner). Ask students: what changes between childhood and adolescence that can damage friendships? Collect responses (awareness of money, different schools, different opportunities, peer pressure). Link to Mickey and Edward: at what point does their friendship begin to fracture, and why?',
    differentiation: {
      support:
        'Provide a list of possible reasons for friendships changing and ask students to rank them.',
      core: 'Students generate their own reasons and link at least one to the play.',
      stretch:
        'Students consider whether it is growing up itself or growing up in an unequal society that damages the friendship.',
    },
    resources: ['Discussion images slide', 'Ranking list (support tier)'],
  },
  mainActivities: [
    {
      title: 'Act 2 Extract Analysis: The Teenage Years',
      duration: '22 minutes',
      instructions:
        "Provide two key extracts from Act 2: (1) the scene where Mickey, Edward and Linda are teenagers together and the dynamic has shifted, (2) the scene where Edward goes to university while Mickey gets a factory job. Students complete a dual-column analysis: for each extract, note what has changed from childhood, how each character's language and behaviour has shifted, and what the audience feels. Focus question: when does Mickey first become aware of the class gap? Teacher leads a discussion on the line \"I grew up. An' you didn't, because you didn't need to\" - what does Mickey mean?",
      differentiation: {
        support:
          'Provide a "then vs now" grid with prompts for each character (how they spoke as children vs teenagers).',
        core: 'Students complete the dual-column analysis independently and identify the key turning point in the friendship.',
        stretch:
          'Students analyse the structural significance of this shift: why does Russell compress time and skip over several years? What effect does this have?',
      },
      resources: [
        'Act 2 extracts handout',
        'Dual-column analysis template',
        'Then vs Now grid (support tier)',
      ],
    },
    {
      title: "Mickey's Monologue: The Weight of Growing Up",
      duration: '20 minutes',
      instructions:
        "Focus on Mickey's key speech about growing up and the responsibilities that crush him - work, money, housing. Students annotate the extract for tone, word choices that convey frustration and entrapment, and contrast with Edward's carefree university life. Then students write an analytical paragraph: \"How does Russell present the effect of class inequality on Mickey during adolescence?\" Use PEE structure with a focus on AO2 (language analysis) and AO3 (context - 1980s unemployment, Thatcher's policies).",
      differentiation: {
        support:
          'Provide a paragraph frame and a context information card about 1980s Liverpool unemployment.',
        core: 'Students write a full PEE paragraph with embedded quotation and contextual link.',
        stretch:
          "Students write a second paragraph comparing Mickey's experience with Edward's, arguing that Russell uses the contrast to show how class determines life chances.",
      },
      resources: [
        "Mickey's speech extract",
        'Context card: 1980s Liverpool',
        'Paragraph frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Who Changed More?',
    duration: '6 minutes',
    instructions:
      "Quick debate: who changed more between childhood and adolescence - Mickey or Edward? Students stand on one side of the room to indicate their choice. Select representatives from each side to argue their case. Teacher summarises: Russell's point is that Mickey was forced to change by poverty and responsibility, while Edward had the luxury of remaining carefree. The inequality is what destroys the friendship.",
    differentiation: {
      support: 'Students give one reason for their choice.',
      core: 'Students support their argument with a quotation or specific scene reference.',
      stretch:
        'Students argue that Russell shows it is not the characters but the system that changed - the boys are the same, their circumstances are not.',
    },
  },
  homework:
    "Write a paragraph explaining what Mickey means when he says \"I grew up. An' you didn't, because you didn't need to.\" Link your answer to Russell's message about class.",
  worksheetQuestions: [
    {
      question:
        'How does Russell show that class divisions become more visible during adolescence?',
      lines: 5,
      modelAnswer:
        'During childhood, Mickey and Edward are unaware of their class differences - they play together as equals. However, during adolescence, their paths diverge sharply. Edward goes to boarding school and then university, while Mickey leaves school with no qualifications and takes a factory job. Russell shows that the education system and job market reinforce class divisions that childhood friendships cannot survive. The language also changes: Mickey becomes bitter and frustrated, while Edward remains optimistic and idealistic. Russell uses this divergence to argue that class is not just about money but about the opportunities and choices available to each person.',
      marks: 4,
    },
    {
      question:
        "Analyse the significance of Mickey's line: \"I grew up. An' you didn't, because you didn't need to.\"",
      lines: 6,
      modelAnswer:
        "This line is one of the most important in the play because it crystallises Russell's central argument about class. Mickey is saying that growing up for a working-class person means facing harsh realities - unemployment, poverty, responsibility - while Edward's wealth protected him from these pressures, allowing him to remain idealistic and carefree. The word \"need\" is crucial: Mickey did not choose to become bitter and disillusioned; he was forced to by his circumstances. Russell uses this line to show that the friendship did not fail because of the boys' characters but because of the unequal society they grew up in. It is a direct challenge to the idea that success is simply a matter of individual effort.",
      marks: 5,
    },
    {
      question: 'How does Russell use structural contrast between childhood and adolescence?',
      lines: 5,
      modelAnswer:
        "Russell structures the play so that the joyful, humorous childhood scenes contrast sharply with the tense, bitter adolescent scenes. The childhood section is full of games, songs and laughter, while the adolescent section introduces unemployment, jealousy and violence. By placing these sections in sequence, Russell forces the audience to ask: what went wrong? The answer is not that the boys changed as people, but that society imposed different futures on them based on their class. This structural contrast is Russell's most powerful tool for delivering his political message - the play's structure itself is an argument against inequality.",
      marks: 4,
    },
    {
      question: "How does 1980s context help us understand Mickey's experience as a teenager?",
      lines: 5,
      modelAnswer:
        "The play is set during a period of mass unemployment in Liverpool, caused partly by Margaret Thatcher's economic policies, which devastated working-class communities in the north of England. Factories closed, jobs disappeared, and communities that had relied on industry for generations were left without prospects. Mickey's experience - leaving school, getting a dead-end factory job, and then being made redundant - directly reflects this real historical context. Russell, who grew up in Liverpool, uses Mickey's story to give a human face to the statistics. By contrast, Edward's comfortable progression to university shows how class protected the middle classes from the worst effects of economic decline.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'The "I grew up" line is a high-frequency exam quotation - ensure students can analyse it in depth.',
    "Context is crucial here: prepare a brief overview of 1980s Liverpool, Thatcher's policies, and mass unemployment.",
    'Students may need reminding that Russell himself grew up in working-class Liverpool - this is autobiographical territory.',
    'The structural contrast between childhood and adolescence is a key AO2 (structure) point for the exam.',
    'This lesson links directly to Lesson 7 (Social Class and Inequality) and Lesson 8 (Nature vs Nurture).',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Structure analysis',
    'AO3: Context',
    'Analytical writing (PEE)',
    'Debate and discussion',
  ],
}

// ─── Lesson 6: Linda - Caught Between Two Worlds ────────────────────────────

const lesson6: LessonPlan = {
  id: 'blood-brothers-06-linda-between-two-worlds',
  title: 'Linda: Caught Between Two Worlds',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Russell presents Linda's character and her relationships with Mickey and Edward.",
    "Explore Linda's role in the love triangle and its connection to the play's themes.",
    'Evaluate how Russell uses Linda to comment on gender and class.',
  ],
  successCriteria: [
    "I can explain Linda's changing role from childhood to adulthood and what drives her choices.",
    'I can analyse how the love triangle intensifies the conflict between Mickey and Edward.',
    'I can evaluate whether Russell presents Linda as a fully developed character or as a plot device.',
  ],
  keywords: [
    'love triangle',
    'loyalty',
    'gender roles',
    'catalyst',
    'agency',
    'trapped',
    'pragmatism',
    'betrayal',
  ],
  starterActivity: {
    title: 'The Triangle',
    duration: '7 minutes',
    instructions:
      "Draw a triangle on the board with Mickey, Edward and Linda at each point. Ask students: in a love triangle, who gets hurt the most? Discuss the dynamics of jealousy, loyalty and betrayal. Then ask: is a love triangle always about romance, or can it also be about class and opportunity? Introduce the idea that Linda's relationship with Edward is not just romantic but represents the pull of a better life - comfort, security, hope.",
    differentiation: {
      support:
        'Provide a brief character summary of Linda and her relationships before the discussion.',
      core: 'Students identify how each character in the triangle might feel at different points in the play.',
      stretch:
        "Students consider whether the love triangle is a personal tragedy or Russell's metaphor for class mobility.",
    },
    resources: ['Triangle diagram on board', 'Character summary card (support tier)'],
  },
  mainActivities: [
    {
      title: "Linda's Journey: From Childhood to Tragedy",
      duration: '20 minutes',
      instructions:
        'Provide students with four key extracts showing Linda at different stages: (1) as a bold child standing up for Mickey, (2) as a teenager in the "Summer Sequence" montage, (3) as Mickey\'s wife struggling with his depression and unemployment, (4) turning to Edward for help. Students complete a character development grid: what she does, why, how the audience responds, and what it reveals about gender and class. Teacher leads discussion: how does Linda\'s confidence and agency diminish as she moves from childhood to adulthood? Why?',
      differentiation: {
        support: 'Provide a partially completed grid with key quotations already embedded.',
        core: "Students complete the grid independently and write a sentence summarising Linda's arc.",
        stretch:
          "Students compare Linda's trajectory with Mrs Johnstone's - does Russell suggest that working-class women are trapped in a cycle?",
      },
      resources: [
        'Four extracts handout',
        'Character development grid',
        'Partially completed grid (support tier)',
      ],
    },
    {
      title: 'Analytical Writing: Linda and the Love Triangle',
      duration: '22 minutes',
      instructions:
        'Students write a response to: "How does Russell use Linda to develop conflict between Mickey and Edward?" Teacher models an opening that addresses the question directly and embeds a quotation. Students write two paragraphs: one about Linda\'s role in childhood (bringing the boys together) and one about her role in adulthood (driving them apart). Emphasis on AO2: how does Russell structure the love triangle to create tension and mirror the class divide?',
      differentiation: {
        support:
          'Provide a structured paragraph frame with sentence starters and a quotation bank.',
        core: 'Students write two full paragraphs with embedded quotations and structural analysis.',
        stretch:
          "Students add a third paragraph evaluating whether Linda has genuine agency or whether she is trapped by her circumstances, linking to Russell's presentation of gender.",
      },
      resources: ['Paragraph frame (support tier)', 'Quotation bank', 'AO2 structure checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Character or Device?',
    duration: '6 minutes',
    instructions:
      'Pose the question: "Is Linda a fully rounded character or is she primarily a plot device to cause conflict between Mickey and Edward?" Students vote and justify. Teacher summarises: Russell gives Linda enough depth to be sympathetic (she fights for Mickey, she endures hardship) but her primary dramatic function is to embody the final wedge between the twins. Both readings are valid in an exam.',
    differentiation: {
      support: 'Students choose one side and give one supporting reason.',
      core: 'Students justify their view with a specific scene or quotation.',
      stretch:
        'Students argue that Linda is both - Russell uses her as a device but gives her enough humanity that the audience cannot simply reduce her to a function.',
    },
  },
  homework:
    'Write a paragraph explaining why Linda turns to Edward. Is she disloyal to Mickey, or is she driven by desperation? Use evidence from the text.',
  worksheetQuestions: [
    {
      question: 'How does Russell present Linda as a child compared to her adult self?',
      lines: 5,
      modelAnswer:
        "As a child, Linda is bold, confident and assertive. She stands up for Mickey, defends him against bullies, and is the driving force in the children's games. She has more agency and personality than either boy in the childhood scenes. However, as an adult, Linda becomes increasingly worn down by poverty, Mickey's depression, and the weight of responsibility. Russell shows how class and gender conspire to diminish her: the spirited girl becomes a struggling wife trapped in a life with no prospects. This mirrors Mrs Johnstone's trajectory, suggesting Russell believes working-class women are particularly vulnerable to the crushing effects of inequality.",
      marks: 4,
    },
    {
      question: "Why does Linda turn to Edward? What is Russell's intention in presenting this?",
      lines: 5,
      modelAnswer:
        "Linda turns to Edward because Mickey is consumed by depression and addiction following his unemployment and imprisonment. Edward offers her kindness, support, and practical help - things Mickey can no longer provide. Russell's intention is not to condemn Linda but to show that poverty destroys relationships. Linda does not turn to Edward out of shallow desire but out of desperation for warmth and normality. Russell uses this to reinforce his message: the class system does not just affect individuals, it destroys families and love. Linda's choice is a symptom of inequality, not a personal moral failing.",
      marks: 5,
    },
    {
      question: 'How does the love triangle contribute to the tragedy of the play?',
      lines: 5,
      modelAnswer:
        'The love triangle is the final trigger for the tragedy. When Mickey discovers that Linda has turned to Edward, his jealousy and rage combine with his existing resentment about class inequality. He takes a gun and confronts Edward, leading to the climactic scene where both twins die. Russell structures the love triangle so that it mirrors the class divide: Edward can offer Linda what Mickey cannot because of his wealth and status. The personal betrayal Mickey feels is inseparable from the social betrayal he has experienced throughout his life. Russell uses the love triangle to show that class inequality poisons every aspect of human life - including love.',
      marks: 5,
    },
    {
      question:
        'To what extent does Russell present Linda as having genuine agency (the power to make her own choices)?',
      lines: 6,
      modelAnswer:
        "As a child, Linda has significant agency - she is the boldest of the three children and often leads the action. However, Russell gradually reduces her agency as she grows up, reflecting the constraints placed on working-class women. Her marriage to Mickey is shaped by circumstance (pregnancy), and her turn to Edward is driven by desperation rather than free choice. Russell suggests that in an unequal society, agency is a luxury of the privileged. Linda's choices are always constrained by poverty, gender expectations, and the needs of others. However, some might argue that her decision to seek help from Edward shows pragmatic agency - she acts to survive, even if her options are limited.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'Linda is often under-analysed in exams - encourage students to see her as more than "the love interest."',
    'The gender dimension is important: Russell shows how working-class women face both class and gender oppression.',
    'The comparison between Linda and Mrs Johnstone is productive for exploring cyclical disadvantage.',
    'The "Summer Sequence" (if available on film) is excellent for showing the transition from innocent friendship to romantic tension.',
    "Ensure students understand that Linda's turn to Edward is a structural device as well as a character choice.",
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Language and structure analysis',
    'AO3: Context (gender and class)',
    'Evaluative writing',
    'Character analysis',
  ],
}

// ─── Lesson 7: Social Class and Inequality ──────────────────────────────────

const lesson7: LessonPlan = {
  id: 'blood-brothers-07-social-class-inequality',
  title: 'Social Class and Inequality',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Analyse how Russell presents social class as the central force shaping the characters' lives.",
    'Explore specific scenes where class inequality is made visible through language, setting and opportunity.',
    "Evaluate Russell's political message about class and connect it to 1980s British context.",
  ],
  successCriteria: [
    'I can identify and analyse at least three ways Russell presents class inequality in the play.',
    "I can link Russell's presentation of class to the historical context of 1980s Britain.",
    'I can write an analytical response arguing that class is the true cause of the tragedy.',
  ],
  keywords: [
    'social class',
    'inequality',
    'Thatcherism',
    'meritocracy',
    'determinism',
    'social mobility',
    'poverty trap',
    'privilege',
  ],
  starterActivity: {
    title: 'Two Babies, Two Futures',
    duration: '7 minutes',
    instructions:
      'Display the scenario: two identical babies are born on the same day. One is raised in a wealthy family in a large house with private education. The other is raised in a poor family in a council estate with state education. Will their lives turn out the same? Students write a prediction in 30 seconds, then share. Reveal: this is exactly the experiment Russell creates in Blood Brothers. The play is his argument that class determines destiny.',
    differentiation: {
      support: 'Provide a simple "same or different?" choice and ask for one reason.',
      core: 'Students predict specific differences (education, job, health, relationships) and justify.',
      stretch:
        'Students consider what would need to change in society for the two babies to have equal chances.',
    },
    resources: ['Scenario slide'],
  },
  mainActivities: [
    {
      title: 'Class Inequality Evidence Grid',
      duration: '22 minutes',
      instructions:
        "Students work through a structured evidence grid examining class inequality across five categories: (1) Housing (Johnstone council estate vs Lyons detached house), (2) Education (Mickey's school vs Edward's boarding school/university), (3) Language (sociolect and register differences), (4) Law and Justice (how the police treat Mickey vs Edward), (5) Employment and Opportunity (Mickey's factory vs Edward's councillor role). For each category, students find a quotation or scene reference, explain how it shows inequality, and state Russell's intention. Teacher models category 1.",
      differentiation: {
        support:
          'Provide a quotation bank matched to each category; students explain the quotations.',
        core: 'Students find their own evidence and write explanations independently.',
        stretch:
          'Students add a sixth category of their own and evaluate which area of inequality Russell presents as most damaging.',
      },
      resources: [
        'Evidence grid worksheet',
        'Quotation bank (support tier)',
        'Context reference sheet',
      ],
    },
    {
      title: 'The Policeman Scene: Class in Action',
      duration: '20 minutes',
      instructions:
        'Focus on the parallel scenes where the policeman visits the Johnstone and Lyons households after the boys get into trouble. Read both scenes aloud. Students analyse: how does the policeman\'s language change? How do Mrs Johnstone and Mrs Lyons respond differently? What is Russell showing about how the justice system treats people differently based on class? Students write an analytical paragraph using PEE: "Russell uses the parallel policeman scenes to show..." Emphasis on AO2 (structural contrast) and AO3 (context).',
      differentiation: {
        support: 'Provide annotated versions of both scenes with key differences highlighted.',
        core: 'Students write a full PEE paragraph analysing the structural contrast.',
        stretch:
          'Students extend their paragraph to link to modern debates about institutional classism and bias in the justice system.',
      },
      resources: [
        'Policeman scenes extracts',
        'Annotated versions (support tier)',
        'PEE structure reminder',
      ],
    },
  ],
  plenaryActivity: {
    title: "Russell's Message - In One Sentence",
    duration: '6 minutes',
    instructions:
      'Challenge students to summarise Russell\'s message about class in a single sentence. Share and vote on the most accurate. Teacher offers: "Russell argues that class inequality, not fate or personal choice, determines people\'s lives and destroys potential." Discuss whether students agree. Exit on sticky notes: one thing they learned about class in the play today.',
    differentiation: {
      support: 'Provide a sentence frame: "Russell\'s message about class is that..."',
      core: 'Students write their sentence and justify it with a scene reference.',
      stretch:
        "Students explain whether they think Russell's message is still relevant today and why.",
    },
  },
  homework:
    'Write two paragraphs answering: "How does Russell use the play Blood Brothers to criticise social inequality?" Include specific evidence and link to 1980s context.',
  worksheetQuestions: [
    {
      question: 'How does Russell use the policeman scenes to highlight class inequality?',
      lines: 6,
      modelAnswer:
        "Russell creates two parallel scenes in which a policeman visits the Johnstone and Lyons households. When visiting the Johnstones, the policeman is aggressive, threatening, and condescending - he warns Mrs Johnstone to keep her children under control or face consequences. When visiting the Lyons, the same policeman is polite, deferential, and amused - he treats the incident as a boyish prank and reassures Mrs Lyons it is nothing serious. Russell uses this structural parallel to show that the law treats people differently based on class. The same behaviour receives punishment in a working-class household and indulgence in a middle-class one. This directly reflects Russell's experience of class bias in 1980s Britain.",
      marks: 5,
    },
    {
      question: 'How does education contribute to the different futures of Mickey and Edward?',
      lines: 5,
      modelAnswer:
        "Edward attends a private boarding school where he receives an excellent education, develops social confidence, and gains access to university. Mickey attends a local comprehensive where he is not encouraged or supported, leaves with no qualifications, and enters a dead-end factory job. Russell shows that education is not a level playing field but a system that reinforces class privilege. Edward's education opens doors; Mickey's closes them. Russell is arguing that the meritocratic ideal - that hard work leads to success - is a myth when the starting conditions are so unequal.",
      marks: 4,
    },
    {
      question: "What is Russell's overall message about social class in Blood Brothers?",
      lines: 6,
      modelAnswer:
        "Russell's central message is that social class, more than any other factor, determines people's life chances. By creating twin brothers who are biologically identical but raised in different classes, he constructs a direct experiment: the only variable is class, and the outcomes are radically different. Edward gets education, opportunity, comfort and confidence. Mickey gets poverty, unemployment, depression and prison. Russell argues that this is not natural or inevitable but is the result of a deeply unfair social system. Writing in the context of 1980s Thatcherism, when inequality in Britain was widening, Russell uses the play as a political argument for social justice and against the myth that poverty is a personal failure.",
      marks: 5,
    },
    {
      question: 'How does the setting of the play reflect class divisions?',
      lines: 5,
      modelAnswer:
        "Russell uses contrasting settings to make class divisions physically visible. The Johnstone family lives in a cramped council house in a deprived area of Liverpool, while the Lyons family lives in a large, comfortable detached house in the suburbs. When the Johnstones are relocated to Skelmersdale, they initially feel optimistic, but the new estate soon becomes another site of deprivation. Edward's world includes boarding schools and university campuses - spaces of privilege and opportunity. Russell uses these contrasting settings to show that class is not just an abstract idea but a lived, physical reality that shapes every aspect of daily life.",
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is the most explicitly political lesson - be prepared for students to have strong opinions about class and fairness.',
    'The policeman scene is one of the most frequently examined extracts - students should know it well.',
    "Context is essential: briefly cover Thatcher's policies, deindustrialisation, and the north-south divide.",
    "Russell's own background (working-class Liverpool, left school at 15) is relevant authorial context.",
    'Link forward to Lesson 8 (Nature vs Nurture) which develops the same argument from a different angle.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Structure analysis (parallel scenes)',
    'AO3: Context (1980s Britain, Thatcherism)',
    'Analytical writing',
    'Critical thinking and debate',
  ],
}

// ─── Lesson 8: Nature vs Nurture - The Central Debate ───────────────────────

const lesson8: LessonPlan = {
  id: 'blood-brothers-08-nature-vs-nurture',
  title: 'Nature vs Nurture: The Central Debate',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Understand the nature vs nurture debate and how Russell uses it as the play's central argument.",
    "Analyse how Mickey and Edward's different outcomes despite identical biology support Russell's message.",
    'Evaluate whether Russell presents nurture (environment) as entirely responsible or whether nature plays a role.',
  ],
  successCriteria: [
    'I can explain the nature vs nurture debate and apply it to Blood Brothers with specific evidence.',
    'I can analyse how Russell structures the play as an experiment in nature vs nurture.',
    'I can write an evaluative response weighing both sides of the debate using evidence from the text.',
  ],
  keywords: [
    'nature',
    'nurture',
    'environment',
    'heredity',
    'determinism',
    'social conditioning',
    'identity',
    'tabula rasa',
  ],
  starterActivity: {
    title: 'Born or Made?',
    duration: '8 minutes',
    instructions:
      'Display a list of traits: intelligence, kindness, confidence, criminal behaviour, ambition, mental health. For each, students vote: is this primarily determined by nature (genetics) or nurture (environment)? Record results on the board. Then introduce the concept: Russell wrote Blood Brothers as a thought experiment - what happens when identical twins are raised in different classes? The play is his answer to the nature vs nurture question.',
    differentiation: {
      support:
        'Provide simple definitions of nature (what you are born with) and nurture (how you are raised) on cards.',
      core: 'Students justify their vote for each trait with a reason.',
      stretch:
        'Students consider whether the nature vs nurture distinction is too simplistic - could both always be involved?',
    },
    resources: [
      'Traits list slide',
      'Nature/Nurture definition cards (support tier)',
      'Voting cards',
    ],
  },
  mainActivities: [
    {
      title: 'The Twin Experiment: Mapping Mickey and Edward',
      duration: '22 minutes',
      instructions:
        "Students create a detailed comparison chart tracking Mickey and Edward across five life stages: birth, childhood, adolescence, early adulthood, and the ending. For each stage, they record: circumstances, behaviour, language, relationships, and opportunities. Then they highlight: what is the same (nature - both are warm, both value friendship, both love Linda) and what is different (nurture - education, wealth, confidence, mental health). Class discussion: what does this comparison prove? Russell's argument is clear: nurture (class) determines destiny, not nature.",
      differentiation: {
        support:
          'Provide a partially completed chart with the "birth" and "childhood" stages filled in.',
        core: "Students complete the chart independently and write a summary statement about Russell's argument.",
        stretch:
          "Students identify moments where nature seems to override nurture (e.g., both boys' instinct to befriend each other) and consider what this adds to Russell's argument.",
      },
      resources: [
        'Five-stage comparison chart template',
        'Partially completed chart (support tier)',
        'Quotation reference sheet',
      ],
    },
    {
      title: 'Debate: Nature vs Nurture in Blood Brothers',
      duration: '20 minutes',
      instructions:
        "Divide the class into two teams: Team Nature (argue that Mickey and Edward's fates were determined by inborn traits or fate) and Team Nurture (argue that their fates were entirely determined by their upbringing and class). Each team prepares three arguments with textual evidence (10 minutes). Then conduct a structured debate (8 minutes): each side presents, responds, and rebuts. Teacher chairs. After the debate, students write a personal conclusion: which side does Russell support, and how do you know?",
      differentiation: {
        support:
          'Provide each team with a starter argument and a relevant quotation to build from.',
        core: 'Students develop their own arguments with evidence and present confidently.',
        stretch:
          "Students play devil's advocate during the debate and in their written conclusion, acknowledge the strongest argument from the opposing side.",
      },
      resources: [
        'Debate preparation sheets',
        'Starter arguments (support tier)',
        'Timer for debate',
      ],
    },
  ],
  plenaryActivity: {
    title: "Russell's Verdict",
    duration: '5 minutes',
    instructions:
      "Return to the Narrator's final lines and the play's ending. Ask: does Russell give a definitive answer to the nature vs nurture question? Students discuss in pairs. Teacher summarises: Russell clearly sides with nurture - the play is designed to show that class, not biology, determines life outcomes. However, the supernatural elements (the Narrator, superstition) leave a deliberate thread of ambiguity. Write one sentence: \"Russell's answer to the nature vs nurture question is...\"",
    differentiation: {
      support: 'Complete the sentence frame provided.',
      core: 'Write a full sentence with a justification.',
      stretch:
        'Explain why Russell might want to leave some ambiguity rather than giving a completely clear answer.',
    },
  },
  homework:
    'Write a full essay plan (introduction, three paragraphs, conclusion) for: "How does Russell use Mickey and Edward to explore the nature vs nurture debate?"',
  worksheetQuestions: [
    {
      question:
        'What is the nature vs nurture debate and how does Russell use Blood Brothers to explore it?',
      lines: 6,
      modelAnswer:
        "The nature vs nurture debate asks whether a person's character, abilities and life outcomes are determined by their genetics (nature) or by their environment and upbringing (nurture). Russell uses Blood Brothers as a dramatic experiment to test this question. He creates identical twins - Mickey and Edward - who share the same DNA but are raised in completely different class environments. By showing that their lives turn out radically differently despite being biologically identical, Russell argues that nurture (specifically social class) is the dominant factor. Edward thrives because of wealth, education and opportunity; Mickey struggles because of poverty, unemployment and lack of support. Russell's message is that society, not biology, creates inequality.",
      marks: 5,
    },
    {
      question: 'What evidence in the play suggests that nurture is more important than nature?',
      lines: 5,
      modelAnswer:
        "The strongest evidence is the contrast between Mickey and Edward's adult lives. Despite being twins, Edward becomes a successful, confident councillor while Mickey becomes unemployed, depressed and eventually imprisoned. Their different educations, housing, and economic opportunities create entirely different trajectories. The policeman scenes also show how society treats them differently based on class, not character. Even their language diverges - Mickey speaks in working-class dialect while Edward speaks in Standard English - showing that environment shapes even the most fundamental aspects of identity. Russell uses every available contrast to prove that nurture, not nature, is decisive.",
      marks: 4,
    },
    {
      question:
        "Is there any evidence in the play that nature plays a role? How does this affect Russell's argument?",
      lines: 5,
      modelAnswer:
        'There is some evidence that nature plays a role: both boys are drawn to each other instinctively, form an immediate friendship, and share a love of fun and adventure as children. Both also fall in love with Linda, suggesting a shared emotional disposition. These similarities could be read as evidence of their biological connection overriding their different upbringings. However, Russell likely includes these similarities to strengthen, not weaken, his argument: by showing that the boys are naturally alike, he makes it even clearer that their different outcomes are caused by class, not by inherent differences. Nature makes them the same; nurture tears them apart.',
      marks: 5,
    },
    {
      question:
        'How might the nature vs nurture debate in Blood Brothers connect to real-world issues of social inequality?',
      lines: 5,
      modelAnswer:
        'Russell\'s exploration of nature vs nurture connects directly to real-world debates about social mobility, education policy, and welfare. Politicians who argue that poverty is caused by personal failings (laziness, poor choices) take a "nature" position. Russell\'s play directly challenges this by showing that identical people with identical potential end up in radically different positions because of their class circumstances. The play supports the "nurture" argument: that inequality is systemic and structural, not individual. Writing during Thatcher\'s Britain, when the government argued for personal responsibility over social support, Russell\'s play is a political counterargument - poverty is not a choice but a trap created by an unequal system.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This is an intellectually demanding lesson - consider whether students need a simplified version of the nature vs nurture debate.',
    'The debate activity works best with clear rules: timed speeches, no interrupting, evidence required.',
    'Ensure students understand that Russell clearly favours nurture but includes elements of nature for complexity.',
    'Link to modern debates about social mobility, educational attainment gaps, and child poverty.',
    'This lesson is essential preparation for the exam - nature vs nurture is the most frequently assessed theme.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Structure analysis',
    'AO3: Context and social debate',
    'Evaluative and balanced argument writing',
    'Debate and oracy',
  ],
}

// ─── Lesson 9: Fate, Superstition and the Ending ────────────────────────────

const lesson9: LessonPlan = {
  id: 'blood-brothers-09-fate-superstition-ending',
  title: 'Fate, Superstition and the Ending',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Russell uses superstition and fate as recurring motifs throughout the play.',
    'Explore the dramatic impact of the ending and how Russell builds towards it.',
    'Evaluate whether the tragedy is caused by fate, superstition or class inequality.',
  ],
  successCriteria: [
    'I can identify and analyse the key superstition motifs and explain their effect on the audience.',
    "I can analyse the ending of the play and explain Russell's dramatic choices.",
    'I can construct a balanced argument about whether fate or class is the true cause of the tragedy.',
  ],
  keywords: [
    'fate',
    'superstition',
    'inevitability',
    'foreboding',
    'motif',
    'climax',
    'catharsis',
    'tragic ending',
  ],
  starterActivity: {
    title: 'Superstition Survey',
    duration: '7 minutes',
    instructions:
      'Ask students: are you superstitious? Quick show of hands for each: walking under a ladder, breaking a mirror, new shoes on the table, Friday the 13th. Then ask: do superstitions have any real power, or do they only have power if you believe in them? Link to the play: Mrs Johnstone believes in superstitions; Mrs Lyons does not (at first). Yet Mrs Lyons is the one who uses superstition as a weapon. Discuss: is Russell saying superstitions are real, or is he using them as a metaphor?',
    differentiation: {
      support: 'Provide a simple list of superstitions mentioned in the play.',
      core: 'Students explain the difference between believing in superstition and using it as a tool of control.',
      stretch:
        'Students consider whether Russell uses superstition to represent working-class fatalism - the belief that life is beyond your control.',
    },
    resources: ['Superstition survey slide', 'Superstitions in the play list (support tier)'],
  },
  mainActivities: [
    {
      title: 'Tracking Superstition and Fate Through the Play',
      duration: '20 minutes',
      instructions:
        'Provide a motif-tracking table with four key superstition/fate references: (1) "shoes upon the table," (2) "new shoes on the table" - the pact being sealed, (3) the Narrator\'s repeated warnings, (4) the magpie references ("one for sorrow"). For each, students record: who says it, when, what it foreshadows, and what effect it has on the audience. Then discuss: Russell places these motifs at structural turning points - why? What does this suggest about whether fate is real in the play or whether Russell is using it to create dramatic tension?',
      differentiation: {
        support: 'Provide the quotations pre-identified with page/scene references.',
        core: 'Students complete the tracking table and identify the structural pattern.',
        stretch:
          'Students argue whether the superstition motifs suggest that the ending is genuinely fated or whether Russell uses them ironically to distract from the real cause (class).',
      },
      resources: ['Motif-tracking table', 'Key quotations with references (support tier)'],
    },
    {
      title: 'The Ending: Close Analysis',
      duration: '22 minutes',
      instructions:
        'Read or watch the final scene from when Mrs Lyons tells Mickey the truth to the deaths of both twins. Students annotate for: (1) stage directions and their effect, (2) the revelation - how does Mickey react and why?, (3) the Narrator\'s final lines, (4) Mrs Johnstone\'s cry of "Tell Me It\'s Not True." Then students write a response to: "How does Russell make the ending of Blood Brothers dramatically effective?" Focus on AO2 (dramatic techniques, structure, staging) and AO1 (personal response - how does the ending make you feel and why?).',
      differentiation: {
        support:
          'Provide a guided annotation worksheet with specific prompts for each section of the extract.',
        core: 'Students annotate independently and write a full analytical response.',
        stretch:
          'Students consider the Narrator\'s final question to the audience - "And do we blame superstition for what came to pass? / Or could it be what we, the English, have come to know as class?" - and analyse how this shapes the audience\'s final interpretation.',
      },
      resources: [
        'Final scene extract or video clip',
        'Guided annotation sheet (support tier)',
        'Response planning template',
      ],
    },
  ],
  plenaryActivity: {
    title: 'The Final Question',
    duration: '6 minutes',
    instructions:
      'Display the Narrator\'s closing lines on the board: "And do we blame superstition for what came to pass? / Or could it be what we, the English, have come to know as class?" Students write their answer on a mini-whiteboard and hold up. Discuss: Russell gives the audience a choice, but the entire play has been building the case for class as the answer. Why does he phrase it as a question rather than a statement? (Because he wants the audience to actively think, not passively receive the message.)',
    differentiation: {
      support: 'Students choose "superstition" or "class" and give one reason.',
      core: 'Students explain their choice with evidence from the play.',
      stretch:
        'Students analyse the rhetorical effect of ending with a question rather than a statement.',
    },
  },
  homework:
    "Write a full paragraph responding to the Narrator's closing lines. Do you blame superstition or class? Justify your answer with evidence from across the whole play.",
  worksheetQuestions: [
    {
      question: 'How does Russell use the "shoes upon the table" superstition throughout the play?',
      lines: 5,
      modelAnswer:
        'The "shoes upon the table" superstition is referenced by the Narrator at key turning points in the play, creating a recurring motif of foreboding. It first appears when Mrs Johnstone makes the pact with Mrs Lyons, suggesting that the deal itself is the "bad luck" event. Each subsequent reference reminds the audience that tragedy is approaching. Russell uses this superstition structurally to create tension and a sense of inevitability. However, the superstition also serves as a red herring - Russell hints that the tragedy might be caused by fate, when in reality he is building his argument that class inequality is the true cause.',
      marks: 4,
    },
    {
      question: 'How does Russell make the ending of Blood Brothers dramatically effective?',
      lines: 6,
      modelAnswer:
        "Russell makes the ending dramatically effective through a combination of dramatic irony, climax and emotional catharsis. The audience has known from the prologue that the twins will die, so the ending fulfils the promised tragedy. The revelation - Mrs Johnstone telling Mickey and Edward they are brothers - is the play's climactic moment. Mickey's reaction, holding a gun in desperation, is made more powerful by the audience's understanding that his anger comes not just from betrayal but from a lifetime of inequality. The final tableau of the dead twins and Mrs Johnstone's song \"Tell Me It's Not True\" creates catharsis - the audience's accumulated emotion is released. Russell's structural choice to bookend the play with the Narrator's prologue and closing question makes the tragedy feel both inevitable and preventable.",
      marks: 5,
    },
    {
      question:
        'Analyse the Narrator\'s closing lines: "And do we blame superstition for what came to pass? / Or could it be what we, the English, have come to know as class?"',
      lines: 6,
      modelAnswer:
        'The Narrator\'s closing lines are the thesis statement of the entire play. By framing the question as a choice between superstition and class, Russell forces the audience to decide what caused the tragedy. Throughout the play, he has used superstition as a structural device to create tension, but his real argument - developed through every contrast between Mickey and Edward - is that class inequality is responsible. The phrase "we, the English" implicates the audience directly, suggesting that class division is a collective social choice, not a natural phenomenon. By ending with a question, Russell refuses to let the audience be passive: he demands they engage with his political message and consider their own role in perpetuating inequality.',
      marks: 5,
    },
    {
      question:
        'Is the ending of Blood Brothers inevitable, or could the tragedy have been avoided?',
      lines: 6,
      modelAnswer:
        "The play's structure - with the prologue revealing the ending before the story begins - suggests that the tragedy is inevitable, and the superstition motifs reinforce this sense of fate. However, Russell's political argument requires the tragedy to be avoidable: if it were genuinely fated, then there would be no point in criticising the class system. The tragedy could have been avoided if the twins had been raised together, if Mrs Johnstone had not been exploited, if Mickey had received the same education and opportunities as Edward. Russell uses the appearance of inevitability to make his real point: the tragedy feels inevitable because class inequality is so deeply embedded in English society that it seems natural - but it is not. It is a social construct that can and should be changed.",
      marks: 5,
    },
  ],
  teacherNotes: [
    "The Narrator's closing lines are arguably the most important quotation in the play - ensure all students can analyse them.",
    'If possible, show a stage or film version of the ending - the visual and musical impact is significant.',
    'Students sometimes struggle with the idea that Russell uses superstition as a red herring - scaffold this carefully.',
    'The question of inevitability vs avoidability is an excellent exam discussion point.',
    "Link back to Lesson 1 (The Narrator) to show how the play's opening and ending mirror each other structurally.",
  ],
  targetedSkills: [
    'AO1: Reading and personal response',
    'AO2: Structure and dramatic techniques',
    'AO3: Context',
    'Close reading and annotation',
    'Extended analytical writing',
  ],
}

// ─── Lesson 10: Exam Practice - Whole Text Response ─────────────────────────

const lesson10: LessonPlan = {
  id: 'blood-brothers-10-exam-practice',
  title: 'Exam Practice: Whole Text Response',
  text: 'Blood Brothers',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply knowledge of Blood Brothers to a timed exam-style response.',
    'Practise structuring a whole-text essay with an introduction, analytical paragraphs and conclusion.',
    'Self-assess and improve responses using AQA mark scheme criteria.',
  ],
  successCriteria: [
    'I can plan a whole-text response in 5 minutes, selecting evidence from across the play.',
    'I can write at least three analytical paragraphs with embedded quotations, language analysis and context.',
    'I can self-assess my response against AO1, AO2, AO3 and AO4 criteria and identify areas for improvement.',
  ],
  keywords: [
    'AO1',
    'AO2',
    'AO3',
    'AO4',
    'thesis statement',
    'embedded quotation',
    'topic sentence',
    'evaluative conclusion',
  ],
  starterActivity: {
    title: 'Exam Skills Recap',
    duration: '8 minutes',
    instructions:
      'Display the four Assessment Objectives on the board: AO1 (understanding and response), AO2 (language, form and structure), AO3 (context), AO4 (spelling, punctuation and grammar). For each AO, students write one sentence explaining what it means and one practical tip for achieving it. Quick fire feedback. Then display the exam question: "How does Russell present the theme of social class in Blood Brothers?" Students identify which AOs are targeted (all four). Teacher models how to decode the question: "How does Russell present" = AO2 focus; "theme of social class" = AO1/AO3 focus.',
    differentiation: {
      support: 'Provide an AO summary card with simplified definitions and example sentences.',
      core: 'Students recall AOs from memory and generate their own tips.',
      stretch:
        'Students explain how to integrate all four AOs within a single paragraph rather than addressing them separately.',
    },
    resources: ['AO display slide', 'AO summary card (support tier)', 'Exam question display'],
  },
  mainActivities: [
    {
      title: 'Planning Under Timed Conditions',
      duration: '10 minutes',
      instructions:
        'Students have 5 minutes to plan their response to: "How does Russell present the theme of social class in Blood Brothers?" Teacher displays a planning template on the board: Introduction (thesis statement + brief overview), Paragraph 1 (childhood - class is invisible), Paragraph 2 (adolescence/adulthood - class becomes destructive), Paragraph 3 (the ending - Russell\'s message), Conclusion (evaluative judgement). Students select quotations for each paragraph from memory (closed book exam practice). After 5 minutes, teacher shares a model plan and students add any missing evidence.',
      differentiation: {
        support:
          'Provide a quotation bank of eight key quotations to select from, and a plan template with prompts.',
        core: 'Students plan independently from memory, then refine using the model plan.',
        stretch:
          'Students plan a fourth paragraph that challenges or nuances the question (e.g., "However, Russell also suggests that superstition and fate play a role...").',
      },
      resources: ['Planning template on board', 'Quotation bank (support tier)', 'Timer'],
    },
    {
      title: 'Timed Writing',
      duration: '30 minutes',
      instructions:
        'Students write their response under timed conditions (30 minutes mirrors the exam allocation for this question). Teacher circulates silently, noting common issues for whole-class feedback. Students should aim for: a clear introduction with a thesis statement, three developed PEE paragraphs with embedded quotations and context, and a brief evaluative conclusion. Remind students to check spelling, punctuation and grammar in the final 2 minutes (AO4).',
      differentiation: {
        support:
          'Provide a paragraph frame for the introduction and first paragraph; students write paragraphs 2-3 and the conclusion independently.',
        core: 'Students write the full response independently under timed conditions.',
        stretch:
          "Students aim for a sophisticated response that integrates alternative interpretations and evaluates Russell's authorial choices.",
      },
      resources: [
        'Lined paper or exam booklets',
        'Paragraph frame (support tier)',
        'Timer displayed on board',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Self-Assessment Against Mark Scheme',
    duration: '10 minutes',
    instructions:
      'Display a simplified version of the AQA mark scheme with descriptors for each band. Students re-read their response and highlight evidence of AO1 (blue), AO2 (green), AO3 (yellow), and AO4 (check for errors). They then estimate which band their response falls into and write two targets: "To move up a band, I need to..." Collect responses for teacher marking. If time allows, select one strong paragraph to share and annotate as a class.',
    differentiation: {
      support:
        'Provide a simplified self-assessment checklist (tick-box format) with clear descriptors.',
      core: 'Students use the full mark scheme and write detailed targets.',
      stretch:
        'Students identify the single weakest paragraph in their response and rewrite it on a separate sheet.',
    },
  },
  homework:
    "Rewrite your weakest paragraph from today's timed response, incorporating the targets you identified during self-assessment. Aim to improve by one mark band.",
  worksheetQuestions: [
    {
      question:
        'Write an introduction for the essay question: "How does Russell present the theme of social class in Blood Brothers?"',
      lines: 6,
      modelAnswer:
        "In Blood Brothers, Willy Russell presents social class as the defining force that shapes the characters' lives and ultimately causes the tragedy. Written in the context of 1980s Thatcherite Britain, when inequality between the rich and poor was widening, the play uses the story of twin brothers separated at birth and raised in different classes to argue that it is nurture, not nature, that determines a person's destiny. Through the contrasting experiences of Mickey and Edward, the parallel mothering of Mrs Johnstone and Mrs Lyons, and the structural device of the Narrator, Russell constructs a powerful political argument that class inequality is not natural or inevitable but is a social injustice that destroys lives.",
      marks: 4,
    },
    {
      question:
        "Write an analytical paragraph about how Russell presents class inequality through Mickey's experience.",
      lines: 8,
      modelAnswer:
        'Russell presents class inequality most powerfully through Mickey\'s experience of growing up working class. As a child, Mickey is carefree and confident, but as he enters adolescence and adulthood, the weight of poverty crushes him. He tells Edward bitterly, "I grew up. An\' you didn\'t, because you didn\'t need to," revealing that "growing up" for a working-class person means facing harsh realities that wealth protects against. The verb "need" is crucial - Mickey did not choose to become disillusioned; he was forced to by circumstance. Russell shows Mickey losing his job, his freedom (through imprisonment), and eventually his mental health, while Edward thrives at university and becomes a councillor. This stark contrast is Russell\'s most direct argument that class, not individual character, determines life outcomes. Writing during Thatcher\'s era, when the government promoted individual responsibility over social support, Russell uses Mickey to give a human face to the devastating impact of structural inequality.',
      marks: 6,
    },
    {
      question:
        "Write a concluding paragraph that evaluates Russell's overall message about class.",
      lines: 6,
      modelAnswer:
        'Ultimately, Russell\'s message is unambiguous: social class is the true villain of Blood Brothers. While he uses superstition and the Narrator to create an atmosphere of fate and inevitability, the Narrator\'s closing question - "do we blame superstition... or could it be what we, the English, have come to know as class?" - makes clear that the tragedy is a social crime, not a supernatural one. Russell does not simply ask the audience to feel sorry for Mickey; he asks them to recognise their own complicity in a system that creates such inequality. The play remains urgently relevant because the class divisions Russell depicted in the 1980s have not been resolved, and his central argument - that identical people with identical potential will have radically different lives based on their class - continues to challenge comfortable assumptions about meritocracy and fairness.',
      marks: 5,
    },
    {
      question:
        'Identify three common mistakes students make when writing about Blood Brothers in the exam and explain how to avoid them.',
      lines: 6,
      modelAnswer:
        'First, students often retell the plot instead of analysing Russell\'s techniques - to avoid this, always start paragraphs with "Russell presents/shows/suggests" rather than "Mickey does/says." Second, students sometimes write about context as a separate bolt-on paragraph rather than integrating it - to avoid this, weave contextual references into analytical points (e.g., "Writing during Thatcher\'s Britain, Russell uses Mickey\'s unemployment to show..."). Third, students frequently ignore structure (AO2) - to avoid this, always consider why Russell places events in a particular order, how scenes parallel or contrast with each other, and how the Narrator\'s interventions shape the audience\'s response. Addressing all three issues will significantly improve response quality.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson should ideally come after lessons 1-9 so students have a full bank of knowledge to draw on.',
    'The 30-minute timed write mirrors the AQA exam allocation - enforce timing strictly.',
    'Collect responses for marking to provide individualised feedback before the exam.',
    'Common issues to watch for: narrative retelling, context as a bolt-on, ignoring AO2 (structure/language), weak conclusions.',
    'Consider providing a "What a Band 5/6 response looks like" exemplar for students to compare against their own work.',
    'Self-assessment is more effective if students have practised using the mark scheme in previous lessons.',
  ],
  targetedSkills: [
    'AO1: Reading and understanding',
    'AO2: Language, form and structure',
    'AO3: Context',
    'AO4: Spelling, punctuation and grammar',
    'Exam technique and time management',
    'Self-assessment and target-setting',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const bloodBrothersLessons: LessonPlan[] = [
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
