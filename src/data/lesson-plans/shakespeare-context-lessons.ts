// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

export interface LessonActivity {
  title: string;
  duration: string;
  instructions: string;
  differentiation?: { support: string; core: string; stretch: string };
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

// ─── Lesson 1: Elizabethan and Jacobean Society ─────────────────────────────

const lesson1: LessonPlan = {
  id: 'shakespeare-context-01-elizabethan-jacobean-society',
  title: 'Elizabethan and Jacobean Society',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the key social, political, and religious features of Elizabethan and Jacobean England.',
    'Explain how the transition from Elizabeth I to James I shaped cultural attitudes reflected in Shakespeare\'s plays.',
    'Analyse how contextual knowledge of the period enhances interpretation of Shakespeare\'s texts.',
  ],
  successCriteria: [
    'I can identify at least four key features of Elizabethan and Jacobean society and explain their significance.',
    'I can explain how the change of monarch in 1603 affected the cultural climate in which Shakespeare wrote.',
    'I can connect at least two contextual factors to specific moments or themes in Shakespeare\'s plays.',
  ],
  keywords: [
    'Elizabethan', 'Jacobean', 'Protestant Reformation', 'patriarchy',
    'social hierarchy', 'divine right', 'patronage', 'Renaissance',
  ],
  starterActivity: {
    title: 'Then vs Now: Society Sorting',
    duration: '8 minutes',
    instructions:
      'Display twelve statement cards on the board (e.g., "Women could not act on stage", "The monarch was believed to be chosen by God", "Public executions were a form of entertainment"). Students sort them into three columns: Elizabethan Only, Jacobean Only, or Both Periods. Discuss answers as a class, correcting misconceptions and introducing the idea that Shakespeare lived and wrote across both eras (Elizabeth died 1603, James took over).',
    differentiation: {
      support: 'Provide a timeline with key dates and a glossary defining Elizabethan (1558-1603) and Jacobean (1603-1625).',
      core: 'Students sort independently, then justify two of their choices in writing using full sentences.',
      stretch: 'Students predict how each social fact might influence the content or themes of a Shakespeare play.',
    },
    resources: ['Statement cards (x12)', 'Sorting grid worksheet', 'Key dates timeline (support tier)'],
  },
  mainActivities: [
    {
      title: 'Elizabethan and Jacobean Society Jigsaw',
      duration: '20 minutes',
      instructions:
        'Divide the class into expert groups, each assigned one aspect of society: (1) Religion — the Protestant Reformation, Catholic persecution, and religious anxiety; (2) Social Structure — the class system, role of the nobility, and poverty; (3) Politics — monarchy, Parliament, succession crises, and the Gunpowder Plot; (4) Daily Life — entertainment, education, plague, and gender expectations. Each group reads an information sheet and creates a summary poster with three key facts, one quotation or source, and one link to Shakespeare. Groups then reform into mixed jigsaw groups to teach each other.',
      differentiation: {
        support: 'Provide a structured poster template with sentence starters for each section.',
        core: 'Students complete the poster independently and prepare a 90-second verbal summary for jigsaw sharing.',
        stretch: 'Students rank the four areas by significance to Shakespeare\'s writing, justifying their top choice in a paragraph.',
      },
      resources: ['Information sheets (x4)', 'A3 poster paper', 'Poster template (support tier)', 'Timer'],
    },
    {
      title: 'Context-to-Text Connection Wall',
      duration: '20 minutes',
      instructions:
        'Display a grid of eight contextual facts and eight short quotations or plot summaries from across Shakespeare\'s plays (e.g., "Women were expected to be obedient" paired with Katherina\'s final speech in The Taming of the Shrew; "James I feared Catholic conspiracy" paired with the witches in Macbeth). Students work in pairs to match each context card to the most relevant textual example and write one sentence explaining the connection. Teacher models the first match, then students work independently. Debrief by discussing which connections were most debatable.',
      differentiation: {
        support: 'Reduce to six pairs and provide the first two matches completed as models.',
        core: 'Students match all eight pairs and write explanations using the phrase "Shakespeare may have intended..."',
        stretch: 'Students identify an alternative match for two of the pairs and argue which connection is stronger.',
      },
      resources: ['Context-to-Text matching cards (x16)', 'Connection recording sheet', 'Model paragraph on board'],
    },
  ],
  plenaryActivity: {
    title: 'One-Minute Expert',
    duration: '7 minutes',
    instructions:
      'Students have one minute to write a response to the question: "Why is understanding Elizabethan and Jacobean society essential for studying Shakespeare?" Then cold-call three students to share. Class votes on the most convincing response. Teacher consolidates by linking to AO3 requirements.',
    differentiation: {
      support: 'Sentence starter provided: "Understanding the society Shakespeare wrote in is important because..."',
      core: 'Full written response expected, referencing at least one specific contextual detail.',
      stretch: 'Students explain why a modern audience might miss meaning without contextual knowledge, using a specific example.',
    },
  },
  homework:
    'Write a paragraph comparing one aspect of Elizabethan/Jacobean society with modern British society. Explain how the difference would affect the way an audience responds to a Shakespeare play.',
  worksheetQuestions: [
    {
      question: 'Explain three key differences between Elizabethan and Jacobean England.',
      lines: 6,
      modelAnswer:
        'Firstly, Elizabeth I was a Protestant queen who maintained relative religious stability, whereas James I faced immediate Catholic opposition, culminating in the Gunpowder Plot of 1605. Secondly, Elizabeth never married and had no direct heir, creating succession anxiety, while James united the English and Scottish crowns, bringing a new political dynamic. Thirdly, James I was personally fascinated by witchcraft and wrote Daemonologie (1597), which intensified public interest in the supernatural — a theme Shakespeare exploited in Macbeth.',
      marks: 6,
    },
    {
      question: 'Why is it important for GCSE students to understand the historical context of Shakespeare\'s plays?',
      lines: 5,
      modelAnswer:
        'Understanding historical context is essential because Shakespeare wrote for a specific audience with specific beliefs and concerns. Without knowing that Jacobean audiences genuinely feared witchcraft, for example, a student might underestimate the terror of the witches in Macbeth. Context also helps students discuss authorial intention — why Shakespeare made particular choices — which is a requirement of AO3 in the GCSE exam. It transforms analysis from description into critical interpretation.',
      marks: 4,
    },
    {
      question: 'How might the Protestant Reformation have influenced the themes of Shakespeare\'s plays?',
      lines: 5,
      modelAnswer:
        'The Protestant Reformation created a society anxious about religious authority, salvation, and moral order. Shakespeare reflects this in plays like Hamlet, where the Ghost raises questions about Purgatory — a Catholic concept rejected by Protestants. The tension between old Catholic beliefs and new Protestant doctrines gave Shakespeare rich material for exploring doubt, conscience, and moral conflict. Audiences living through this upheaval would have felt these themes personally and urgently.',
      marks: 4,
    },
    {
      question: 'Explain how the social hierarchy of Shakespeare\'s time is reflected in the structure of his plays.',
      lines: 5,
      modelAnswer:
        'Shakespeare\'s plays typically reflect the rigid social hierarchy of his era. Kings and nobles speak in verse and dominate the main plots, while servants, clowns, and lower-class characters often speak in prose and appear in subplots. This mirrors the Great Chain of Being, where every person had a fixed position ordained by God. When characters disrupt this hierarchy — as Macbeth does by killing the king — chaos follows, reinforcing the social belief that order must be maintained.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson works as a standalone context overview or as the first lesson in a Shakespeare unit before studying a specific play.',
    'The jigsaw activity requires pre-preparation of information sheets at appropriate reading levels.',
    'Emphasise that context should be integrated into analysis, not presented as a separate paragraph — model this throughout.',
    'Students often conflate Elizabethan and Jacobean; the timeline visual helps clarify the distinction.',
    'Link forward to subsequent lessons on specific contextual topics (Globe Theatre, Chain of Being, etc.).',
  ],
  targetedSkills: [
    'AO3: Context',
    'Historical understanding',
    'Note-taking',
    'Collaborative learning',
    'Analytical writing',
  ],
};

// ─── Lesson 2: The Globe Theatre and Performance ────────────────────────────

const lesson2: LessonPlan = {
  id: 'shakespeare-context-02-globe-theatre-performance',
  title: 'The Globe Theatre and Performance',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Describe the key physical features of the Globe Theatre and how they shaped performance.',
    'Explain how the conditions of Elizabethan performance — no sets, daylight, groundlings — influenced Shakespeare\'s writing techniques.',
    'Analyse specific examples of Shakespeare\'s stagecraft and evaluate how performance context affects meaning.',
  ],
  successCriteria: [
    'I can label and explain the function of at least five features of the Globe Theatre.',
    'I can explain how the absence of lighting and scenery led Shakespeare to use language to create atmosphere.',
    'I can analyse a passage from Shakespeare showing how it was designed to work in performance at the Globe.',
  ],
  keywords: [
    'Globe Theatre', 'groundlings', 'soliloquy', 'aside',
    'thrust stage', 'gallery', 'stagecraft', 'prologue',
  ],
  starterActivity: {
    title: 'Modern Cinema vs The Globe',
    duration: '7 minutes',
    instructions:
      'Show a 90-second clip from a modern Shakespeare film adaptation (e.g., the opening of Baz Luhrmann\'s Romeo + Juliet). Then show an image of the Globe Theatre reconstruction. Ask: "What would this scene have looked like at the Globe in 1599?" Students brainstorm in pairs what would be different: no special effects, daylight performances, minimal props, audience standing three feet from the actors. Collect ideas on the board and ask: "So how did Shakespeare create atmosphere without technology?"',
    differentiation: {
      support: 'Provide a comparison table with prompts: lighting, sound, costumes, audience, stage.',
      core: 'Students generate their own comparison points and write two sentences summarising the biggest difference.',
      stretch: 'Students hypothesise how the lack of technology made Shakespeare a better writer, with specific reasoning.',
    },
    resources: ['Film clip (90 seconds)', 'Globe Theatre image', 'Comparison table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Anatomy of the Globe: Annotated Diagram',
      duration: '15 minutes',
      instructions:
        'Distribute a large diagram of the Globe Theatre (cross-section view). Teacher guides students through labelling key features: thrust stage, pit (yard), galleries, tiring house, trapdoor, heavens (canopy), pillars, balcony. For each feature, students write a brief note explaining how it influenced performance. For example: "The thrust stage meant actors were surrounded on three sides, so they needed to project their voices and move constantly" or "The trapdoor was used for supernatural entrances — ghosts and witches."',
      differentiation: {
        support: 'Provide a word bank and pre-labelled diagram with three features missing for students to complete.',
        core: 'Students label all features independently and write function notes for each.',
        stretch: 'Students explain how two features worked together in a specific play (e.g., the balcony and thrust stage in Romeo and Juliet).',
      },
      resources: ['Globe Theatre diagram (A4)', 'Word bank (support tier)', 'Coloured pens for annotation'],
    },
    {
      title: 'Shakespeare\'s Stagecraft: Language as Scenery',
      duration: '25 minutes',
      instructions:
        'Present three short extracts where Shakespeare uses language to compensate for the Globe\'s limitations: (1) The Prologue from Henry V ("O for a Muse of fire...") where the Chorus asks the audience to imagine armies and battlefields; (2) Act 2, Scene 1 of Macbeth ("Is this a dagger which I see before me...") where language creates a hallucination without props; (3) Act 3, Scene 2 of The Tempest where Ariel describes the island\'s sounds. For each extract, students annotate how Shakespeare uses language techniques to create setting, mood, or spectacle that the Globe could not provide visually. Students then write a comparative paragraph on how Shakespeare turned the Globe\'s limitations into creative strengths.',
      differentiation: {
        support: 'Provide glossed versions of the extracts with vocabulary support and a paragraph frame for the written response.',
        core: 'Students annotate all three extracts and write a comparative paragraph independently.',
        stretch: 'Students argue whether the Globe\'s limitations ultimately made Shakespeare\'s plays better than modern productions, using evidence from the extracts.',
      },
      resources: ['Extract handout (x3 passages)', 'Annotation guide', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Director\'s Chair',
    duration: '8 minutes',
    instructions:
      'Students imagine they are directing a scene at the Globe. They choose one of the three extracts studied and write three director\'s notes explaining how they would stage it using only the Globe\'s features (no modern technology). Share two or three examples under the visualiser. Class discusses which directions best capture Shakespeare\'s intentions.',
    differentiation: {
      support: 'Provide a director\'s notes template with prompts: "The actor should stand... because..." / "I would use the trapdoor to..."',
      core: 'Students write three independent director\'s notes with clear justification.',
      stretch: 'Students explain what would be lost if their scene were performed in a modern proscenium theatre instead.',
    },
  },
  homework:
    'Research one feature of the Globe Theatre not covered in the lesson (e.g., the heavens paintings, the discovery space, the flag system) and write a paragraph explaining how it would have affected the audience\'s experience.',
  worksheetQuestions: [
    {
      question: 'Describe three key features of the Globe Theatre and explain how each influenced Shakespeare\'s writing.',
      lines: 6,
      modelAnswer:
        'The thrust stage extended into the audience on three sides, meaning actors had to address different sections of the crowd. This encouraged the use of soliloquies and asides, where characters speak directly to the audience. The lack of artificial lighting meant performances happened in daylight, so Shakespeare used language to create darkness and atmosphere — for example, Macbeth\'s "Stars, hide your fires" signals nightfall through words. The trapdoor in the stage floor allowed for dramatic supernatural entrances, explaining why ghosts and spirits frequently rise from below in plays like Hamlet and The Tempest.',
      marks: 6,
    },
    {
      question: 'Why does the Chorus in Henry V ask the audience to use their imagination? What does this tell us about the Globe?',
      lines: 5,
      modelAnswer:
        'The Chorus apologises for the "unworthy scaffold" (the stage) and asks the audience to "piece out our imperfections with your thoughts." This reveals that the Globe had no scenery, special effects, or realistic sets. Shakespeare could not show the battlefields of Agincourt or vast armies on a small wooden stage, so he relied on the audience\'s imagination — activated through his vivid, descriptive language. This tells us that the relationship between playwright and audience was collaborative: Shakespeare provided the words, and the audience created the visual world in their minds.',
      marks: 4,
    },
    {
      question: 'How did the presence of "groundlings" affect Shakespeare\'s writing style?',
      lines: 5,
      modelAnswer:
        'Groundlings were the poorer audience members who stood in the yard for a penny. They were notoriously restless, noisy, and quick to heckle if bored. Shakespeare had to keep them engaged, which is why his plays include physical comedy, bawdy jokes, sword fights, and dramatic spectacle alongside the more intellectual content aimed at wealthier patrons in the galleries. This dual audience explains the mixture of high and low culture in Shakespeare\'s plays — the Porter scene in Macbeth, for example, provides crude comedy immediately after the horrific murder of Duncan.',
      marks: 4,
    },
    {
      question: 'Explain why understanding the Globe Theatre helps students achieve higher marks in their GCSE Shakespeare exam.',
      lines: 5,
      modelAnswer:
        'Understanding the Globe Theatre supports AO3 (context) by allowing students to explain why Shakespeare made specific dramatic choices. Rather than simply identifying techniques, students can explain that soliloquies existed because of the thrust stage\'s intimacy, or that vivid descriptive language was necessary because there was no scenery. This contextual understanding shows the examiner that the student can interpret Shakespeare\'s methods as deliberate responses to the conditions of his theatre, which is a hallmark of sophisticated, top-band analysis.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'If possible, show the Shakespeare\'s Globe virtual tour (available free online) during the diagram activity.',
    'The Henry V Prologue is particularly powerful for demonstrating how Shakespeare addressed his theatrical limitations directly.',
    'Encourage students to use phrases like "Shakespeare\'s original audience at the Globe would have..." in their exam responses.',
    'This lesson pairs well with a follow-up on soliloquies and dramatic irony (Lesson 4).',
    'Consider a homework extension where students design their own Globe Theatre stage for a specific scene.',
  ],
  targetedSkills: [
    'AO3: Context',
    'Dramatic techniques',
    'Stagecraft analysis',
    'Language analysis',
    'Comparative writing',
  ],
};

// ─── Lesson 3: Shakespeare's Language — Iambic Pentameter and Prose ─────────

const lesson3: LessonPlan = {
  id: 'shakespeare-context-03-iambic-pentameter-prose',
  title: 'Shakespeare\'s Language: Iambic Pentameter and Prose',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Define iambic pentameter and identify it in passages from Shakespeare\'s plays.',
    'Explain why Shakespeare alternates between verse and prose and what this reveals about character, status, and emotion.',
    'Analyse how disruptions to the metre — irregular lines, shared lines, and trochaic inversions — create dramatic meaning.',
  ],
  successCriteria: [
    'I can scan a line of iambic pentameter, marking the stressed and unstressed syllables correctly.',
    'I can explain why a character speaks in verse or prose and what this tells us about their status or mental state.',
    'I can identify at least one example of disrupted metre and explain its dramatic significance.',
  ],
  keywords: [
    'iambic pentameter', 'blank verse', 'prose', 'metre',
    'stressed syllable', 'unstressed syllable', 'trochee', 'caesura',
    'shared line', 'enjambment',
  ],
  starterActivity: {
    title: 'Rhythm Challenge',
    duration: '8 minutes',
    instructions:
      'Without explaining the term, play a drum beat in a de-DUM de-DUM de-DUM de-DUM de-DUM pattern (or clap it). Ask students to replicate it. Then display the line "But SOFT, what LIGHT through YON-der WIN-dow BREAKS" with stressed syllables capitalised. Students clap along, discovering the rhythm. Reveal this is iambic pentameter: five pairs of unstressed-stressed syllables per line, the "heartbeat" of Shakespeare\'s verse. Ask: "Why might Shakespeare write in a rhythm that sounds like a heartbeat?"',
    differentiation: {
      support: 'Provide three additional lines with stresses pre-marked for practice before independent work.',
      core: 'Students clap the rhythm and then try to mark stresses on a new unmarked line independently.',
      stretch: 'Students explain why the heartbeat analogy is significant — verse is alive, natural, ordered — and predict when Shakespeare might break this pattern.',
    },
    resources: ['Rhythm audio or clapping guide', 'Displayed line with stress markings', 'Practice lines worksheet'],
  },
  mainActivities: [
    {
      title: 'Verse vs Prose: Status and State of Mind',
      duration: '20 minutes',
      instructions:
        'Present four paired extracts where the same character or scene shifts between verse and prose: (1) Hamlet speaking to Horatio in verse vs his "What a piece of work is a man" prose speech; (2) Lady Macbeth\'s verse commands in Act 1 vs her prose ramblings in the sleepwalking scene; (3) Benedick\'s prose wit in Much Ado vs his awkward verse love poem; (4) Bottom speaking prose in A Midsummer Night\'s Dream while the nobles speak verse. For each pair, students identify which is verse and which is prose, then write an explanation of what the shift reveals. Teacher consolidates the pattern: verse = high status, order, control, formality; prose = low status, madness, informality, emotional chaos.',
      differentiation: {
        support: 'Provide a decision flowchart: "Does it have a regular rhythm? Are the lines the same length? If yes = verse, if no = prose."',
        core: 'Students identify and explain all four pairs independently using the terms verse, prose, status, and control.',
        stretch: 'Students challenge the "rule" by finding an exception (e.g., Shylock\'s powerful prose in The Merchant of Venice) and explaining why Shakespeare broke the convention.',
      },
      resources: ['Paired extracts handout (x4 pairs)', 'Verse/prose decision flowchart (support tier)', 'Explanation recording sheet'],
    },
    {
      title: 'Breaking the Beat: Metre and Meaning',
      duration: '20 minutes',
      instructions:
        'Teacher models scanning a regular line of iambic pentameter, then introduces three types of metrical disruption: (1) Trochaic inversion — a stressed-unstressed foot at the start of a line, creating emphasis (e.g., "NEVER, NEVER, NEVER, NEVER, NEVER" — King Lear); (2) Shared lines — when two characters split a single line of pentameter, showing connection, urgency, or power dynamics; (3) Short lines — fewer than ten syllables, creating pauses that suggest hesitation or shock. Students receive six annotated extracts and identify which type of disruption is present in each. They then write analytical sentences explaining the dramatic effect, using the frame: "Shakespeare disrupts the iambic pentameter here by... This suggests... because..."',
      differentiation: {
        support: 'Provide the type of disruption for each extract; students focus only on explaining the effect.',
        core: 'Students identify the disruption type and write analytical sentences for all six extracts.',
        stretch: 'Students write a full paragraph comparing two disruptions and arguing which is more dramatically effective.',
      },
      resources: ['Six annotated extract cards', 'Scanning guide sheet', 'Analytical sentence frame'],
    },
  ],
  plenaryActivity: {
    title: 'Verse or Prose — You Decide',
    duration: '7 minutes',
    instructions:
      'Present three scenarios (e.g., "A king giving a battle speech", "A servant gossiping about their master", "A noblewoman going mad"). Students decide whether Shakespeare would use verse or prose for each and justify their choice in one sentence. Reveal the actual Shakespeare examples that match each scenario. Discuss any surprises.',
    differentiation: {
      support: 'Provide a reminder card summarising when Shakespeare uses verse vs prose.',
      core: 'Students justify each choice independently with reference to status, control, or emotion.',
      stretch: 'Students explain a scenario where the "wrong" choice (e.g., a king in prose) would be dramatically more powerful and why.',
    },
  },
  homework:
    'Find a passage from the Shakespeare play you are studying. Identify whether it is in verse or prose and write a paragraph explaining what this choice reveals about the character\'s status, emotions, or state of mind at that point in the play.',
  worksheetQuestions: [
    {
      question: 'What is iambic pentameter? Explain its structure and why Shakespeare used it.',
      lines: 5,
      modelAnswer:
        'Iambic pentameter is a metrical pattern consisting of five pairs (feet) of syllables per line, each pair following an unstressed-stressed pattern (de-DUM). This creates a ten-syllable line with a natural, speech-like rhythm often compared to a heartbeat. Shakespeare used it because it sounds elevated and formal — suitable for noble characters and serious themes — while remaining close enough to natural English speech patterns to sound believable. It also provides a structural framework that Shakespeare could deliberately disrupt for dramatic effect.',
      marks: 4,
    },
    {
      question: 'Explain why Shakespeare uses both verse and prose in his plays. What does each form typically signify?',
      lines: 6,
      modelAnswer:
        'Shakespeare uses verse (specifically blank verse — unrhymed iambic pentameter) for high-status characters, formal occasions, and moments of intense emotion or reflection. Prose, by contrast, is used for lower-status characters, comic scenes, informal conversation, and — crucially — characters experiencing mental disintegration. The shift between forms is never arbitrary: when Lady Macbeth moves from commanding verse in Act 1 to fragmented prose in the sleepwalking scene, Shakespeare signals her psychological collapse. The form itself becomes a dramatic device that conveys meaning beyond the words.',
      marks: 4,
    },
    {
      question: 'What is a "shared line" in Shakespeare\'s verse and what dramatic effect does it create?',
      lines: 5,
      modelAnswer:
        'A shared line (or split line) occurs when two characters divide a single line of iambic pentameter between them, each speaking part of the ten-syllable line. This creates a sense of rapid exchange, urgency, or intimate connection. It can show characters who are closely aligned (such as Macbeth and Lady Macbeth plotting together) or characters in tense confrontation where neither will yield. The shared line also indicates to the actors that there should be no pause between speakers, maintaining dramatic momentum.',
      marks: 4,
    },
    {
      question: 'Analyse the dramatic effect of the line "Never, never, never, never, never" from King Lear.',
      lines: 5,
      modelAnswer:
        'This line is extraordinary because it consists of five trochaic feet (NEVER repeated five times) rather than the expected iambic pattern. The relentless repetition of a stressed syllable followed by an unstressed one creates a hammering, grief-stricken rhythm that mirrors Lear\'s utter despair at Cordelia\'s death. The monosyllabic simplicity strips away all royal eloquence, reducing a king to raw, animal grief. Shakespeare breaks every rule of his own metre to show that Lear\'s suffering has broken the natural order itself.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Physical clapping and drumming in the starter makes the rhythm tangible — avoid jumping straight to written scanning.',
    'Students often find scanning difficult; emphasise that they should read lines aloud and exaggerate the stresses.',
    'The verse/prose distinction is one of the highest-impact contextual skills for GCSE — flag this as a "secret weapon" for exams.',
    'Avoid the oversimplification that verse = good characters and prose = bad characters; Iago uses verse extensively.',
    'This lesson connects directly to Lesson 4 on soliloquies, where verse form becomes even more significant.',
  ],
  targetedSkills: [
    'AO2: Writer\'s methods',
    'Language analysis',
    'Metre and rhythm',
    'Close reading',
    'Analytical writing',
  ],
};

// ─── Lesson 4: Soliloquies and Dramatic Irony ───────────────────────────────

const lesson4: LessonPlan = {
  id: 'shakespeare-context-04-soliloquies-dramatic-irony',
  title: 'Soliloquies and Dramatic Irony',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Define soliloquy, aside, and dramatic irony as key dramatic techniques and explain their function in Shakespeare\'s plays.',
    'Analyse how soliloquies reveal a character\'s inner thoughts, conflicts, and motivations to the audience.',
    'Evaluate how dramatic irony creates tension, suspense, and audience engagement.',
  ],
  successCriteria: [
    'I can define soliloquy, aside, and dramatic irony accurately and give an example of each from Shakespeare.',
    'I can analyse a soliloquy explaining what it reveals about the character\'s psychology and Shakespeare\'s intentions.',
    'I can explain how dramatic irony functions in at least two different scenes and discuss its effect on the audience.',
  ],
  keywords: [
    'soliloquy', 'aside', 'dramatic irony', 'monologue',
    'audience complicity', 'inner conflict', 'dramatic tension', 'fourth wall',
  ],
  starterActivity: {
    title: 'Thinking Aloud',
    duration: '7 minutes',
    instructions:
      'Two students role-play a simple scenario: Student A asks Student B to a party. Student B says yes enthusiastically. Then replay the scene with Student B wearing a "thought bubble" card over their head, and a third student reads aloud Student B\'s real thoughts ("I don\'t want to go but I can\'t say no..."). Discuss: what changed? Introduce the concept: a soliloquy is Shakespeare\'s version of the thought bubble — it lets the audience hear what a character really thinks. An aside is a shorter version, spoken while other characters are present.',
    differentiation: {
      support: 'Provide a definition card distinguishing soliloquy, aside, and monologue with simple examples.',
      core: 'Students write their own definitions after the demonstration, then compare with the textbook definition.',
      stretch: 'Students discuss why soliloquies create a unique relationship between character and audience — the concept of "audience complicity."',
    },
    resources: ['Thought bubble cards', 'Role-play scenario script', 'Definition cards (support tier)'],
  },
  mainActivities: [
    {
      title: 'Soliloquy Deep Dive: Four Famous Speeches',
      duration: '22 minutes',
      instructions:
        'Students work in groups of four, each group assigned one famous soliloquy: (1) Hamlet\'s "To be, or not to be" — inner conflict about life and death; (2) Macbeth\'s "Is this a dagger which I see before me" — hallucination revealing guilt and anticipation; (3) Juliet\'s "Gallop apace, you fiery-footed steeds" — desire and impatience; (4) Richard III\'s "Now is the winter of our discontent" — villainy and audience manipulation. Each group receives a glossed copy of their soliloquy and completes a structured analysis: (a) Summarise what the character is saying in modern English; (b) Identify three language techniques and explain their effect; (c) Explain what the soliloquy reveals about the character that other characters do not know; (d) Discuss why Shakespeare chose a soliloquy here rather than a conversation. Groups present their key findings to the class.',
      differentiation: {
        support: 'Provide a modern English translation alongside the original and a partially completed analysis grid.',
        core: 'Students complete all four analysis tasks independently and prepare a two-minute group presentation.',
        stretch: 'Students compare their soliloquy\'s function with another group\'s and write a paragraph on how Shakespeare uses soliloquies differently depending on genre (tragedy vs comedy).',
      },
      resources: ['Glossed soliloquy handouts (x4)', 'Analysis grid', 'Modern English translations (support tier)'],
    },
    {
      title: 'Dramatic Irony in Action',
      duration: '18 minutes',
      instructions:
        'Teacher defines dramatic irony (when the audience knows something a character does not) and models an example: in Romeo and Juliet, the audience knows Juliet is not dead, but Romeo does not. Students then examine three scenarios of dramatic irony from across Shakespeare\'s plays: (1) Duncan praising Macbeth\'s castle as pleasant while the audience knows he will be murdered there; (2) Othello trusting Iago as "honest" while the audience has heard Iago\'s villainous soliloquies; (3) Viola disguised as Cesario in Twelfth Night while Olivia falls in love with "him." For each, students write: What does the audience know? What does the character not know? What effect does this create (tension, comedy, horror, sympathy)?',
      differentiation: {
        support: 'Provide a three-column table (audience knows / character doesn\'t know / effect) with the first example completed.',
        core: 'Students complete all three examples independently using full sentences.',
        stretch: 'Students explain how dramatic irony functions differently in comedy (Twelfth Night) vs tragedy (Othello) and why Shakespeare uses it for different purposes.',
      },
      resources: ['Dramatic irony scenario cards (x3)', 'Three-column table worksheet', 'Completed example (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Technique Auction',
    duration: '8 minutes',
    instructions:
      'Display five statements about soliloquies and dramatic irony, some correct and some deliberately wrong (e.g., "A soliloquy is when two characters speak privately" — wrong; "Dramatic irony always creates tension" — debatable). Students bid on the statements they believe are correct using a points budget. Reveal answers and discuss the debatable statements. Award points to accurate bidders.',
    differentiation: {
      support: 'Provide a glossary card to check definitions during the auction.',
      core: 'Students bid independently and justify their choices.',
      stretch: 'Students rewrite the incorrect statements to make them accurate.',
    },
  },
  homework:
    'Choose one soliloquy from the Shakespeare play you are studying. Write a paragraph analysing what it reveals about the character and explaining why Shakespeare chose this dramatic form rather than dialogue.',
  worksheetQuestions: [
    {
      question: 'Define "soliloquy" and explain its dramatic function in Shakespeare\'s plays.',
      lines: 5,
      modelAnswer:
        'A soliloquy is an extended speech delivered by a character alone on stage, addressed to the audience or to themselves. Its dramatic function is to reveal the character\'s innermost thoughts, feelings, and motivations that they cannot express to other characters. This creates intimacy between the character and the audience, who become privy to private doubts and plans. In Shakespeare\'s plays, soliloquies are crucial for character development — Hamlet\'s soliloquies, for example, reveal his indecision and philosophical depth, which his public behaviour conceals.',
      marks: 4,
    },
    {
      question: 'What is the difference between a soliloquy and an aside? Give an example of each.',
      lines: 5,
      modelAnswer:
        'A soliloquy is a long speech delivered when the character is alone on stage, exploring their thoughts in depth. An aside is a brief comment made directly to the audience while other characters are present but cannot hear. For example, Macbeth\'s "Is this a dagger" speech is a soliloquy — he is alone, wrestling with his conscience before murdering Duncan. An aside occurs when Macbeth hears the witches\' prophecy and says to the audience, "If chance will have me king, why, chance may crown me" — revealing his ambition while Banquo and the witches cannot hear.',
      marks: 4,
    },
    {
      question: 'Explain how dramatic irony creates tension in a Shakespeare tragedy. Use a specific example.',
      lines: 6,
      modelAnswer:
        'Dramatic irony creates tension by placing the audience in a position of superior knowledge — they know something a character does not, and this gap generates anxiety about the inevitable consequences. In Othello, the audience watches Othello repeatedly call Iago "honest Iago" while knowing from Iago\'s soliloquies that he is manipulating Othello to destroy him. Every time Othello trusts Iago, the tension increases because the audience can see the catastrophe approaching but is powerless to intervene. Shakespeare uses this technique to make the audience complicit in the tragedy — we watch, we know, and yet we cannot prevent it.',
      marks: 4,
    },
    {
      question: 'Why are soliloquies and dramatic irony particularly important techniques for GCSE students to analyse?',
      lines: 5,
      modelAnswer:
        'Soliloquies and dramatic irony are essential for GCSE analysis because they demonstrate Shakespeare\'s deliberate dramatic craftsmanship (AO2). Analysing a soliloquy allows students to discuss characterisation, language techniques, and authorial intention simultaneously. Dramatic irony shows students can think about the audience\'s experience and how Shakespeare manipulates response — a skill that moves analysis beyond simple comprehension into sophisticated evaluation. Both techniques also link to AO3 (context) because they arise from the conventions of the Globe Theatre, where the thrust stage made direct address and audience complicity natural and powerful.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The role-play starter is highly effective — brief, memorable, and gives students a concrete analogy for the soliloquy.',
    'Ensure glossed versions of the soliloquies are accessible; students will disengage if they cannot understand the language.',
    'Emphasise that dramatic irony is not always negative — it creates comedy in plays like Twelfth Night and A Midsummer Night\'s Dream.',
    'Link back to Lesson 2 (Globe Theatre) — soliloquies worked because of the thrust stage\'s intimacy with the audience.',
    'The "debatable" statements in the plenary are particularly valuable for developing evaluative skills (AO1).',
  ],
  targetedSkills: [
    'AO2: Writer\'s methods',
    'Dramatic techniques',
    'Soliloquy analysis',
    'Close reading',
    'Evaluative writing',
  ],
};

// ─── Lesson 5: The Great Chain of Being ─────────────────────────────────────

const lesson5: LessonPlan = {
  id: 'shakespeare-context-05-great-chain-of-being',
  title: 'The Great Chain of Being',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Explain the concept of the Great Chain of Being and its role in Elizabethan and Jacobean worldviews.',
    'Analyse how Shakespeare uses the disruption and restoration of the Chain as a central dramatic structure.',
    'Evaluate how understanding the Chain of Being deepens interpretation of character, conflict, and theme.',
  ],
  successCriteria: [
    'I can draw and explain the Great Chain of Being, placing God, monarch, nobles, men, women, animals, and nature in the correct order.',
    'I can identify at least two moments in Shakespeare\'s plays where the Chain is disrupted and explain the consequences.',
    'I can write an analytical paragraph linking the Chain of Being to a character\'s actions and Shakespeare\'s authorial intention.',
  ],
  keywords: [
    'Great Chain of Being', 'natural order', 'divine hierarchy', 'disruption',
    'restoration', 'usurpation', 'pathetic fallacy', 'cosmic disorder',
  ],
  starterActivity: {
    title: 'The Ladder of Power',
    duration: '8 minutes',
    instructions:
      'Give students cards with the following labels: God, King, Nobles, Gentlemen, Merchants, Peasants, Women, Animals, Plants, Minerals. Students arrange them in the order they think Elizabethans would have placed them in a hierarchy. Reveal the actual Great Chain of Being. Discuss: Where do women appear? Why? What happens if someone tries to move up or down the chain? Introduce the idea that disrupting the chain was believed to cause literal chaos — storms, plagues, unnatural events.',
    differentiation: {
      support: 'Provide three of the positions pre-placed and a brief explanation of the concept before sorting.',
      core: 'Students sort independently and then compare with the actual chain, noting any differences.',
      stretch: 'Students identify which modern beliefs still echo the Chain of Being and which have been rejected, explaining why.',
    },
    resources: ['Hierarchy cards (x10)', 'Great Chain of Being diagram', 'Explanation card (support tier)'],
  },
  mainActivities: [
    {
      title: 'When the Chain Breaks: Disruption Across the Plays',
      duration: '22 minutes',
      instructions:
        'Present five examples of the Chain being disrupted in Shakespeare\'s plays: (1) Macbeth murders the king — horses eat each other, darkness covers the land; (2) King Lear divides his kingdom — storms rage and he descends into madness; (3) Prospero is usurped by his brother in The Tempest — exiled to an island; (4) Julius Caesar is assassinated — civil war erupts; (5) Romeo and Juliet\'s families disrupt social harmony — the young lovers die. For each example, students complete a cause-and-effect chart: What was the disruption? What were the consequences? How does nature respond? What is Shakespeare\'s message? Students then write a summary paragraph: "Shakespeare consistently shows that disrupting the Great Chain of Being leads to..."',
      differentiation: {
        support: 'Provide the cause-and-effect chart partially completed with the first two examples filled in.',
        core: 'Students complete all five examples independently and write the summary paragraph.',
        stretch: 'Students argue whether Shakespeare genuinely believed in the Chain or used it as a convenient dramatic framework, supporting their view with evidence.',
      },
      resources: ['Five disruption scenario cards', 'Cause-and-effect chart', 'Summary paragraph frame (support tier)'],
    },
    {
      title: 'Restoration and Resolution: How Shakespeare Fixes the Chain',
      duration: '18 minutes',
      instructions:
        'Building on the previous activity, students now examine how each play restores order. Display the endings: Malcolm becomes king in Macbeth; Edgar takes the throne in King Lear; Prospero reclaims his dukedom; Octavius rises in Julius Caesar; the Prince restores peace in Romeo and Juliet. Students identify the pattern: a legitimate, divinely-sanctioned ruler always restores the chain. Discuss why this matters: Shakespeare\'s plays are structurally conservative — disorder is punished, order is restored. Students write a comparative paragraph on how the Chain shapes the endings of two different plays.',
      differentiation: {
        support: 'Provide a sentence frame: "In [play], the Chain is restored when... This shows that Shakespeare believed..."',
        core: 'Students write a comparative paragraph covering two plays without a frame.',
        stretch: 'Students consider whether the restoration is always convincing — is Malcolm really a better king than Macbeth? Is the Prince\'s peace worth the deaths of Romeo and Juliet? — and write a critical evaluation.',
      },
      resources: ['Endings summary cards', 'Sentence frame (support tier)', 'Comparative paragraph model'],
    },
  ],
  plenaryActivity: {
    title: 'Chain Reaction Exit Ticket',
    duration: '7 minutes',
    instructions:
      'Students answer: "Explain how the Great Chain of Being helps you understand Shakespeare\'s authorial intention in one play you have studied." Responses should name the play, identify a disruption, and explain what Shakespeare was telling his audience. Collect tickets for formative assessment.',
    differentiation: {
      support: 'Sentence starter: "In [play], Shakespeare uses the Great Chain of Being to show his audience that..."',
      core: 'Full response required with a specific disruption and authorial intention.',
      stretch: 'Students add a sentence explaining how a Jacobean audience would respond differently to a modern audience.',
    },
  },
  homework:
    'Create a visual representation (diagram, infographic, or comic strip) showing how the Great Chain of Being is disrupted and restored in the Shakespeare play you are studying. Include at least three annotations explaining Shakespeare\'s message.',
  worksheetQuestions: [
    {
      question: 'What is the Great Chain of Being and why was it important to Elizabethan and Jacobean audiences?',
      lines: 6,
      modelAnswer:
        'The Great Chain of Being was the belief that all of creation existed in a fixed, divinely-ordained hierarchy: God at the top, followed by angels, the monarch, nobles, gentlemen, merchants, peasants, animals, plants, and minerals. Every being had a fixed position, and attempting to move above your station was not merely ambitious but sinful — it disrupted God\'s plan. This was important to Shakespeare\'s audiences because it underpinned their entire worldview: social inequality was seen as natural and divinely sanctioned, and any disruption would cause cosmic chaos. It gave Shakespeare a powerful dramatic framework where political crimes like regicide had universal consequences.',
      marks: 4,
    },
    {
      question: 'How does Shakespeare use pathetic fallacy to show the disruption of the Great Chain of Being in Macbeth?',
      lines: 5,
      modelAnswer:
        'After Macbeth murders Duncan, Shakespeare uses pathetic fallacy to show that the natural world itself has been thrown into chaos. Lennox reports that the night was "unruly" with "lamentings heard i\' th\' air" and chimneys blown down by storms. Ross describes how "darkness does the face of earth entomb" even during daytime, and an old man reports that Duncan\'s horses "turned wild in nature" and ate each other. These unnatural events reflect the Jacobean belief that killing a king — God\'s representative on earth — would disrupt the entire Chain of Being, causing nature itself to revolt.',
      marks: 4,
    },
    {
      question: 'Why do Shakespeare\'s plays almost always end with the restoration of order?',
      lines: 5,
      modelAnswer:
        'Shakespeare\'s plays end with the restoration of order because his audiences believed that the Great Chain of Being would inevitably reassert itself — God\'s natural hierarchy could not be permanently overthrown. Dramatically, this provides a satisfying resolution: the audience sees that evil is punished and legitimacy triumphs. It also served a political purpose: in a society where the monarch\'s authority depended on the belief in divine right, plays that showed successful rebellion would have been dangerous. By always restoring a legitimate ruler, Shakespeare reinforced the social order his audience and his patron (the king) depended upon.',
      marks: 4,
    },
    {
      question: 'Do you think Shakespeare genuinely believed in the Great Chain of Being, or did he simply use it as a dramatic device? Explain your view.',
      lines: 6,
      modelAnswer:
        'This is debatable. On one hand, Shakespeare consistently structures his plays around the disruption and restoration of the Chain, suggesting he accepted it as a natural framework for storytelling and morality. His sympathetic portrayal of legitimate rulers and his punishment of usurpers align with Chain of Being ideology. On the other hand, Shakespeare\'s most compelling characters are often those who challenge the hierarchy — Macbeth, Prospero, Shylock, Katherina — suggesting he was fascinated by, and possibly sympathetic to, those who questioned their fixed position. It is possible that Shakespeare used the Chain as a dramatic convention that his audience expected while simultaneously interrogating its assumptions, which is what makes his plays enduringly complex.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'The Great Chain of Being is the single most important contextual concept for GCSE Shakespeare — it underpins virtually every play.',
    'Students often find the concept abstract; the physical sorting activity in the starter makes it concrete.',
    'Be careful not to present the Chain as something Shakespeare\'s audiences unanimously believed — there was debate even then.',
    'The pathetic fallacy connection is particularly useful for AO2 analysis: Shakespeare\'s use of nature to reflect moral disorder.',
    'This lesson connects to Lesson 7 (Kingship and Power) and Lesson 1 (Elizabethan and Jacobean Society).',
  ],
  targetedSkills: [
    'AO3: Context',
    'Thematic analysis',
    'Comparative writing',
    'Evaluative thinking',
    'Authorial intention',
  ],
};

// ─── Lesson 6: Gender Roles in Shakespeare ──────────────────────────────────

const lesson6: LessonPlan = {
  id: 'shakespeare-context-06-gender-roles',
  title: 'Gender Roles in Shakespeare',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Explain the expectations placed on women in Elizabethan and Jacobean society and how these are reflected in Shakespeare\'s plays.',
    'Analyse how Shakespeare creates female characters who both conform to and challenge contemporary gender norms.',
    'Evaluate whether Shakespeare can be considered progressive or conservative in his portrayal of women.',
  ],
  successCriteria: [
    'I can describe at least three expectations of women in Shakespeare\'s time, with reference to law, marriage, and behaviour.',
    'I can analyse how two different female characters respond to gender expectations — one who conforms and one who challenges.',
    'I can write a balanced argument about whether Shakespeare was progressive in his treatment of women.',
  ],
  keywords: [
    'patriarchy', 'gender roles', 'subversion', 'conformity',
    'coverture', 'obedience', 'agency', 'cross-dressing',
    'femininity', 'transgression',
  ],
  starterActivity: {
    title: 'The Rules of Being a Woman',
    duration: '8 minutes',
    instructions:
      'Display a list of real rules and expectations for women in Shakespeare\'s time: (1) Women could not own property after marriage (coverture); (2) Women could not vote or hold political office; (3) Women were expected to be silent, obedient, and chaste; (4) Women could not perform on stage — female roles were played by boy actors; (5) A disobedient wife could be legally punished by her husband. Ask students: "If you were a woman in 1600, which rule would you find hardest to live with?" Discuss in pairs, then share. Transition: "Shakespeare created some of the most complex, powerful women in literary history — within this world."',
    differentiation: {
      support: 'Provide a simplified version of each rule with modern comparisons to aid understanding.',
      core: 'Students identify the hardest rule and write a sentence explaining why, connecting to a Shakespeare character if possible.',
      stretch: 'Students consider how the fact that female roles were played by boys might have allowed Shakespeare to explore gender more radically.',
    },
    resources: ['Rules display slide', 'Discussion prompts', 'Simplified rules card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Shakespeare\'s Women: A Spectrum of Conformity and Rebellion',
      duration: '22 minutes',
      instructions:
        'Present brief character profiles of six Shakespearean women: (1) Juliet — defies her father to marry Romeo; (2) Lady Macbeth — rejects femininity, calls on spirits to "unsex" her; (3) Ophelia — obeys her father and is destroyed; (4) Portia (Merchant of Venice) — disguises as a male lawyer to save Antonio; (5) Katherina (Taming of the Shrew) — a "shrew" who is "tamed" into obedience; (6) Viola (Twelfth Night) — cross-dresses as Cesario and controls the plot. Students place each character on a spectrum from "Fully Conforms to Gender Expectations" to "Fully Challenges Gender Expectations" and write a justification for their placement. Class discussion: Is there a pattern? What happens to women who challenge expectations vs those who conform?',
      differentiation: {
        support: 'Provide character profiles with key quotations already highlighted and a simplified spectrum with three positions only.',
        core: 'Students place and justify all six characters on the spectrum independently.',
        stretch: 'Students identify how the same character might occupy different positions at different points in the play (e.g., Lady Macbeth begins challenging and ends conforming through madness and death).',
      },
      resources: ['Character profile cards (x6)', 'Spectrum worksheet', 'Simplified spectrum (support tier)'],
    },
    {
      title: 'Close Analysis: "Unsex Me Here" and the Language of Gender',
      duration: '18 minutes',
      instructions:
        'Distribute Lady Macbeth\'s "unsex me here" speech (Act 1, Scene 5, lines 40-54). Teacher models annotating the first four lines, identifying how Shakespeare uses language associated with femininity ("milk", "my breasts", "woman\'s milk") and violence ("make thick my blood", "stop up th\' access and passage to remorse") to show Lady Macbeth rejecting her gender. Students continue annotating independently, identifying: (a) words associated with femininity; (b) words associated with masculinity or violence; (c) the effect of imperative verbs ("Come... unsex... fill... stop up... take"); (d) what this speech reveals about gender expectations in Shakespeare\'s world. Students write a paragraph analysing how Shakespeare presents gender as a barrier to power.',
      differentiation: {
        support: 'Provide a glossed version of the speech and a colour-coding task: pink for feminine words, blue for masculine/violent words.',
        core: 'Students annotate independently and write the analytical paragraph using the focus question.',
        stretch: 'Students consider whether Lady Macbeth\'s subsequent madness and death is Shakespeare punishing her for rejecting femininity, and what this says about his attitude to gender transgression.',
      },
      resources: ['Speech extract (glossed and unglossed versions)', 'Annotation guide', 'Colour-coding sheet (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'The Big Question: Was Shakespeare a Feminist?',
    duration: '7 minutes',
    instructions:
      'Students write a brief response to the question: "Was Shakespeare progressive or conservative in his portrayal of women?" They must use evidence from at least one character studied today. Cold-call three students representing different viewpoints. Teacher consolidates: Shakespeare was probably neither fully progressive nor conservative — he created complex women who challenged expectations within a framework that ultimately reinforced them, which is precisely what makes his female characters so fascinating to study.',
    differentiation: {
      support: 'Provide sentence starters: "Shakespeare was progressive because..." OR "Shakespeare was conservative because..."',
      core: 'Students write a balanced response acknowledging both sides.',
      stretch: 'Students consider the anachronism problem: can we apply the term "feminist" to a 1600s writer, and what are the risks of doing so?',
    },
  },
  homework:
    'Choose a female character from the Shakespeare play you are studying. Write two paragraphs: one arguing she conforms to gender expectations, one arguing she challenges them. Conclude with your own judgement.',
  worksheetQuestions: [
    {
      question: 'Describe the expectations placed on women in Elizabethan and Jacobean society.',
      lines: 6,
      modelAnswer:
        'Women in Shakespeare\'s era were expected to be silent, chaste, and obedient — the three pillars of acceptable femininity. Legally, women had few rights: under coverture, a married woman\'s property and legal identity were absorbed into her husband\'s. Women could not vote, hold political office, attend university, or perform on stage. Their primary role was as wives and mothers, and disobedience was seen not just as socially unacceptable but as a disruption of the Great Chain of Being, where women occupied a position below men in the divine hierarchy. A woman who spoke too much, asserted independence, or displayed sexual agency risked being labelled a "shrew" or worse.',
      marks: 4,
    },
    {
      question: 'How does Shakespeare use Lady Macbeth to challenge and ultimately reinforce gender expectations?',
      lines: 6,
      modelAnswer:
        'Lady Macbeth initially challenges gender expectations dramatically by calling on spirits to "unsex" her, rejecting femininity as a weakness that prevents her from pursuing power. She manipulates Macbeth by questioning his masculinity ("When you durst do it, then you were a man") and takes charge of the murder plot. However, Shakespeare ultimately reinforces gender norms through her collapse: Lady Macbeth descends into madness, obsessively washing her hands and sleepwalking — behaviours associated with feminine fragility. Her death (implied suicide) can be read as Shakespeare showing that a woman who rejects her natural role will be destroyed by the consequences. This dual portrayal makes her a complex but ultimately cautionary figure.',
      marks: 6,
    },
    {
      question: 'Why does Shakespeare use cross-dressing in plays like Twelfth Night and The Merchant of Venice?',
      lines: 5,
      modelAnswer:
        'Cross-dressing allows Shakespeare to explore what happens when women step outside their prescribed gender roles. Viola (as Cesario) and Portia (as Balthazar) both achieve things in disguise that they could not as women: Viola navigates the court and wins Orsino\'s trust; Portia saves Antonio\'s life through legal argument. The cross-dressing device suggests that gender is a performance — a costume that can be put on and taken off — which was made even more layered by the fact that boy actors played these female characters. However, both women ultimately return to their "proper" gender roles by the end, marrying and resuming feminine identities, suggesting Shakespeare could only push gender boundaries so far before reasserting convention.',
      marks: 4,
    },
    {
      question: 'Is it fair to describe Shakespeare as a "feminist" writer? Explain your reasoning.',
      lines: 6,
      modelAnswer:
        'This question requires careful handling of anachronism. The term "feminist" did not exist until the 19th century, and applying it to Shakespeare risks distorting his intentions. However, Shakespeare undeniably created female characters of extraordinary complexity, intelligence, and agency — Portia, Viola, Beatrice, Cleopatra, Lady Macbeth — who challenge the simplistic expectations of their society. At the same time, his plays typically end with women returning to conventional roles through marriage or death, suggesting he did not fundamentally challenge the patriarchal structure. A balanced view might be that Shakespeare was remarkably empathetic in his portrayal of women\'s experiences within a restrictive society, without being a deliberate advocate for women\'s rights in the modern sense.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'This lesson can generate strong opinions — establish ground rules for respectful discussion before beginning.',
    'Be aware that applying modern concepts like "feminism" to historical texts is a valuable but complex exercise; guide students carefully.',
    'The spectrum activity works well as a physical activity (students place cards on a washing line) or as a written exercise.',
    'Lady Macbeth\'s "unsex me" speech is an excellent choice for close analysis because it explicitly addresses gender expectations.',
    'Connect to Lesson 5 (Great Chain of Being) — women\'s position below men was part of the divine hierarchy.',
  ],
  targetedSkills: [
    'AO3: Context',
    'Character analysis',
    'Close reading',
    'Evaluative writing',
    'Critical thinking',
  ],
};

// ─── Lesson 7: Kingship and Power ───────────────────────────────────────────

const lesson7: LessonPlan = {
  id: 'shakespeare-context-07-kingship-power',
  title: 'Kingship and Power',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Explain the Elizabethan and Jacobean concept of kingship, including the Divine Right of Kings and the qualities of an ideal monarch.',
    'Analyse how Shakespeare presents different models of kingship across his plays — good kings, tyrants, and usurpers.',
    'Evaluate how Shakespeare\'s exploration of power reflects the political anxieties of his time.',
  ],
  successCriteria: [
    'I can explain the Divine Right of Kings and the qualities an Elizabethan/Jacobean audience would expect in a good ruler.',
    'I can compare at least two different kings in Shakespeare\'s plays and explain what each represents.',
    'I can write an analytical paragraph exploring how Shakespeare uses kingship to comment on the politics of his time.',
  ],
  keywords: [
    'Divine Right of Kings', 'kingship', 'tyrant', 'usurper',
    'legitimacy', 'sovereignty', 'Machiavellian', 'benevolent',
    'regicide', 'succession',
  ],
  starterActivity: {
    title: 'Design the Perfect King',
    duration: '8 minutes',
    instructions:
      'Students brainstorm qualities of an ideal leader in pairs (modern or historical). Collect on the board. Then reveal a list of qualities a Jacobean audience would have expected in a king: pious, brave, just, merciful, divinely ordained, male, legitimate by bloodline. Compare the two lists. Discuss: What qualities overlap? What\'s different? Why would "divinely ordained" matter more than "democratically elected"? Introduce the Divine Right of Kings: the belief that the monarch was God\'s chosen representative on Earth, and opposing the king was opposing God.',
    differentiation: {
      support: 'Provide a word bank of leadership qualities and a simplified definition of the Divine Right of Kings.',
      core: 'Students generate their own list and write two sentences comparing modern and Jacobean ideals of leadership.',
      stretch: 'Students consider why the idea of Divine Right would be politically useful for a monarch and potentially dangerous for a playwright.',
    },
    resources: ['Comparison display slide', 'Word bank (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Kings on Trial: Evaluating Shakespeare\'s Rulers',
      duration: '22 minutes',
      instructions:
        'Set up a "courtroom" exercise. Present five of Shakespeare\'s kings with brief character summaries: (1) Duncan (Macbeth) — kind, trusting, legitimate, but naive; (2) Macbeth — brave warrior but illegitimate tyrant who rules through fear; (3) Henry V — charismatic, decisive war hero but ruthless and manipulative; (4) Richard III — brilliant but murderous usurper who eliminates rivals; (5) Prospero (The Tempest) — wise but controlling duke who was overthrown for neglecting governance. Students act as judges, rating each ruler on five criteria: Legitimacy, Justice, Bravery, Piety, and Effectiveness. They record ratings on a score card and write a verdict for each: "good king", "flawed king", or "tyrant". Class discussion: Is any of Shakespeare\'s kings truly ideal? Why might Shakespeare avoid creating a perfect king?',
      differentiation: {
        support: 'Provide pre-written character summaries with key evidence highlighted and a simplified three-point rating scale.',
        core: 'Students rate and justify all five kings independently using full sentences.',
        stretch: 'Students argue that Shakespeare deliberately avoids creating a perfect king to show that power always corrupts, using evidence from at least two plays.',
      },
      resources: ['King character cards (x5)', 'Score card worksheet', 'Simplified rating scale (support tier)'],
    },
    {
      title: 'The Politics of Kingship: Why Shakespeare Had to Be Careful',
      duration: '18 minutes',
      instructions:
        'Teacher explains the political tightrope Shakespeare walked: he depended on royal patronage (the Lord Chamberlain\'s Men became the King\'s Men under James I) but also needed to entertain audiences who enjoyed seeing power interrogated. Discuss three examples: (1) Richard II was censored because Elizabeth I saw parallels to her own situation ("I am Richard II, know ye not that?"); (2) Macbeth was written partly to flatter James I, a descendant of Banquo; (3) The Tempest explores colonialism and Prospero\'s authoritarian control, which some read as a critique of absolute power. Students write a paragraph answering: "How did Shakespeare manage to explore the theme of power without endangering himself?" — focusing on the use of historical settings, ambiguity, and dramatic distancing.',
      differentiation: {
        support: 'Provide a paragraph frame with key vocabulary and sentence starters for each of the three examples.',
        core: 'Students write independently, referencing at least two of the three examples.',
        stretch: 'Students evaluate whether Shakespeare was genuinely subversive or simply a skilled entertainer who knew how to flatter his patrons while appearing to challenge them.',
      },
      resources: ['Political context information sheet', 'Paragraph frame (support tier)', 'Elizabeth I quotation slide'],
    },
  ],
  plenaryActivity: {
    title: 'Kingship Continuum',
    duration: '7 minutes',
    instructions:
      'Draw a continuum on the board from "Legitimate and Just" to "Illegitimate and Tyrannical." Students place each of the five kings studied on the continuum and justify one placement in writing. Discuss: Does Shakespeare suggest that legitimacy matters more than effectiveness? Or does he present a more complex view?',
    differentiation: {
      support: 'Students place two kings and justify one using a sentence starter.',
      core: 'Students place all five kings and justify at least two placements.',
      stretch: 'Students argue that the continuum is too simplistic and explain why Shakespeare\'s presentation of kingship resists binary categories.',
    },
  },
  homework:
    'Write a paragraph comparing the ruler in the Shakespeare play you are studying with one other Shakespearean ruler. Evaluate which is presented as a more effective leader and explain what Shakespeare might be saying about the nature of power.',
  worksheetQuestions: [
    {
      question: 'What is the "Divine Right of Kings" and how does it affect Shakespeare\'s presentation of kingship?',
      lines: 5,
      modelAnswer:
        'The Divine Right of Kings was the belief that the monarch\'s authority came directly from God, making the king or queen God\'s representative on Earth. Opposing or killing the king was therefore not just treason but sacrilege. This profoundly affects Shakespeare\'s presentation of kingship: in Macbeth, Duncan\'s murder causes cosmic chaos precisely because he is a divinely appointed king. Shakespeare consistently shows that usurpers like Macbeth and Richard III are punished, while legitimate rulers (Malcolm, Richmond) are rewarded with the throne, reinforcing the Jacobean belief that divine order will always prevail.',
      marks: 4,
    },
    {
      question: 'Compare Duncan and Macbeth as rulers. What does Shakespeare suggest about kingship through this contrast?',
      lines: 6,
      modelAnswer:
        'Duncan embodies the ideal of a legitimate, pious, and merciful king — he rewards loyalty, trusts his subjects, and is described as a gracious ruler. However, his trusting nature is also his weakness, as he cannot see Macbeth\'s treachery. Macbeth, by contrast, takes the throne through murder and rules through fear and paranoia, ordering further killings to secure his position. Shakespeare uses this contrast to suggest that legitimacy and moral authority are more important than military strength: Duncan may be naive, but his kingship is divinely sanctioned, while Macbeth\'s stolen crown brings only suffering. The contrast also warns that the qualities that make a good warrior (aggression, ruthlessness) do not make a good king.',
      marks: 6,
    },
    {
      question: 'Why was the theme of kingship politically sensitive in Shakespeare\'s time?',
      lines: 5,
      modelAnswer:
        'Kingship was politically sensitive because Elizabeth I had no heir, creating succession anxiety, and the Gunpowder Plot of 1605 demonstrated real threats to James I\'s life. Plays depicting regicide or rebellion could be seen as encouraging treason — Elizabeth\'s government censored the deposition scene from Richard II because it paralleled her own vulnerability. Shakespeare had to explore power carefully, using historical or foreign settings to create distance from contemporary politics. His company depended on royal patronage, so he needed to flatter the monarch while still writing dramatically compelling explorations of flawed rulers.',
      marks: 4,
    },
    {
      question: 'Does Shakespeare present power as inherently corrupting? Use evidence from at least two plays to support your answer.',
      lines: 6,
      modelAnswer:
        'Shakespeare frequently suggests that the pursuit of power corrupts those who seek it illegitimately. Macbeth is the clearest example: a noble warrior is transformed into a paranoid tyrant by his ambition. Similarly, Richard III is consumed by his ruthless pursuit of the crown, becoming increasingly isolated and haunted. However, Shakespeare also shows that power can be wielded wisely: Prospero in The Tempest ultimately chooses to relinquish his magical power and forgive his enemies, suggesting that true authority lies in mercy, not domination. Shakespeare\'s nuanced view seems to be that power is not inherently corrupting, but that the methods used to obtain and maintain it determine whether a ruler becomes a legitimate king or a tyrant.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'The courtroom activity generates excellent discussion — encourage students to disagree and defend their verdicts.',
    'James I was Shakespeare\'s patron from 1603, which is essential context for understanding plays like Macbeth and The Tempest.',
    'The Elizabeth I quotation about Richard II is a powerful hook for discussing the political dangers of writing about kings.',
    'Avoid oversimplifying: Shakespeare\'s best kings are complex and flawed, which is precisely what makes them dramatically interesting.',
    'This lesson connects strongly to Lesson 5 (Great Chain of Being) and Lesson 1 (Elizabethan and Jacobean Society).',
  ],
  targetedSkills: [
    'AO3: Context',
    'Character analysis',
    'Comparative writing',
    'Evaluative thinking',
    'Political literacy',
  ],
};

// ─── Lesson 8: The Supernatural in Shakespeare ─────────────────────────────

const lesson8: LessonPlan = {
  id: 'shakespeare-context-08-supernatural',
  title: 'The Supernatural in Shakespeare',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Explain Elizabethan and Jacobean beliefs about the supernatural, including witchcraft, ghosts, and fate.',
    'Analyse how Shakespeare uses supernatural elements for dramatic effect and to explore themes of guilt, power, and moral order.',
    'Evaluate whether the supernatural in Shakespeare\'s plays is presented as real, psychological, or ambiguous.',
  ],
  successCriteria: [
    'I can describe at least three Jacobean beliefs about the supernatural and explain how they differ from modern views.',
    'I can analyse how Shakespeare uses a supernatural element in a specific play to create dramatic effect.',
    'I can write a balanced argument about whether the supernatural in Shakespeare is real or imagined.',
  ],
  keywords: [
    'supernatural', 'witchcraft', 'apparition', 'prophecy',
    'Daemonologie', 'fate', 'free will', 'psychomachia',
    'hallucination', 'omen',
  ],
  starterActivity: {
    title: 'Believe It or Not',
    duration: '8 minutes',
    instructions:
      'Display five facts about Jacobean beliefs regarding the supernatural: (1) James I wrote a book called Daemonologie about how to identify and prosecute witches; (2) Thousands of people, mostly women, were executed for witchcraft in the 16th and 17th centuries; (3) Ghosts were believed to be real — the debate was whether they came from God or the Devil; (4) Natural disasters, eclipses, and comets were seen as supernatural warnings; (5) Seeing a ghost could mean you were being warned, punished, or tempted by evil. Students rate each fact on a "surprise scale" from 1-5. Discuss: "If you genuinely believed witches existed and ghosts were real, how would you respond to watching Macbeth?"',
    differentiation: {
      support: 'Provide simplified explanations of each fact and a modern comparison for context.',
      core: 'Students rate all five facts and write a sentence explaining which would most change their experience of a Shakespeare play.',
      stretch: 'Students hypothesise how James I\'s personal beliefs about witchcraft might have influenced what Shakespeare chose to write about.',
    },
    resources: ['Facts display slide', 'Surprise scale recording sheet', 'Simplified explanations (support tier)'],
  },
  mainActivities: [
    {
      title: 'Supernatural Casebook: Four Types of the Supernatural',
      duration: '22 minutes',
      instructions:
        'Present four categories of supernatural elements in Shakespeare with examples: (1) Witches and Prophecy — the Weird Sisters in Macbeth who deliver ambiguous prophecies; (2) Ghosts — Banquo\'s ghost (Macbeth), King Hamlet\'s ghost (Hamlet), Caesar\'s ghost (Julius Caesar); (3) Magic and Enchantment — Prospero\'s magic in The Tempest, the fairy world in A Midsummer Night\'s Dream; (4) Omens and Portents — the storm in Julius Caesar, the knocking in Macbeth. For each category, students read a short extract and complete a casebook entry: What supernatural element appears? What is its dramatic function? How would a Jacobean audience respond vs a modern audience? Is it presented as definitely real, definitely imagined, or deliberately ambiguous?',
      differentiation: {
        support: 'Provide casebook entries partially completed for the first two categories; students complete the remaining two.',
        core: 'Students complete all four casebook entries independently with specific textual evidence.',
        stretch: 'Students identify which category Shakespeare uses most effectively and write a paragraph defending their choice.',
      },
      resources: ['Extract handouts (x4 categories)', 'Casebook worksheet', 'Partially completed casebook (support tier)'],
    },
    {
      title: 'The Dagger and the Ghost: Real or Imagined?',
      duration: '18 minutes',
      instructions:
        'Focus on two key moments of supernatural ambiguity: Macbeth\'s dagger hallucination ("Is this a dagger which I see before me?") and Banquo\'s ghost at the banquet. Read both extracts aloud. Teacher poses the central question: Are these supernatural events real, or are they projections of Macbeth\'s guilty mind? Students gather evidence for both interpretations using a for/against table: REAL — other characters react to the witches, the witches\' prophecies come true, Jacobean audiences believed in ghosts; IMAGINED — only Macbeth sees the dagger and the ghost, he is clearly under extreme psychological stress, the dagger is described in terms that suggest hallucination. Students write a paragraph taking a position and defending it.',
      differentiation: {
        support: 'Provide the for/against table partially completed and a paragraph frame for the written response.',
        core: 'Students complete the table and write an independent paragraph taking a clear position.',
        stretch: 'Students argue that Shakespeare deliberately keeps the answer ambiguous and explain why this ambiguity is more powerful than a definitive answer.',
      },
      resources: ['Dagger and ghost extracts', 'For/against table', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Supernatural Verdict',
    duration: '7 minutes',
    instructions:
      'Students vote with their feet: move to one side of the room if they think the supernatural in Shakespeare is real (within the world of the play), the other side if they think it is psychological. Students in the middle must explain why they are undecided. Teacher facilitates a brief debate between the sides. Conclude: the ambiguity is the point — Shakespeare creates a world where the boundary between the real and the imagined is deliberately blurred, which is what makes the supernatural so dramatically powerful.',
    differentiation: {
      support: 'Provide a sentence starter for verbal contributions: "I think the supernatural is real/imagined because..."',
      core: 'Students justify their position with specific textual evidence.',
      stretch: 'Students explain how the ambiguity serves Shakespeare\'s broader thematic concerns about guilt, power, and moral order.',
    },
  },
  homework:
    'Research one real historical case of a witchcraft trial in England or Scotland during Shakespeare\'s lifetime. Write a paragraph explaining how this historical context helps you understand the supernatural elements in the play you are studying.',
  worksheetQuestions: [
    {
      question: 'Explain why James I\'s Daemonologie is important context for understanding the supernatural in Shakespeare.',
      lines: 5,
      modelAnswer:
        'James I published Daemonologie in 1597, a treatise arguing that witchcraft was real and that witches made pacts with the Devil. This is crucial context for Macbeth (written 1606) because it shows that Shakespeare\'s patron and king genuinely believed in witchcraft and expected it to be taken seriously. The play\'s witches would have terrified Jacobean audiences in a way modern audiences might not fully appreciate. Shakespeare may have included the witches partly to flatter James by validating his beliefs, and partly because the genuine fear of witchcraft gave him powerful dramatic material for exploring temptation, manipulation, and evil.',
      marks: 4,
    },
    {
      question: 'How does Shakespeare use ghosts differently in Macbeth and Hamlet?',
      lines: 6,
      modelAnswer:
        'In Hamlet, the Ghost of King Hamlet is presented as relatively unambiguous — multiple characters (the guards, Horatio) see it, and it delivers specific information about its own murder. It functions as a catalyst for the plot, demanding revenge. In Macbeth, Banquo\'s ghost is more ambiguous: only Macbeth can see it, and Lady Macbeth tells him it is a figment of his guilty mind. The ghost functions as a manifestation of Macbeth\'s conscience rather than as an independent supernatural agent. Shakespeare uses ghosts differently depending on their dramatic purpose: Hamlet\'s ghost drives external action, while Macbeth\'s ghost reveals internal psychological torment.',
      marks: 4,
    },
    {
      question: 'Why does Shakespeare make the witches\' prophecies in Macbeth ambiguous rather than straightforward?',
      lines: 5,
      modelAnswer:
        'Shakespeare makes the prophecies ambiguous to explore the tension between fate and free will. The witches tell Macbeth he will be king but never tell him to murder Duncan — that choice is his own. The later prophecies ("none of woman born", "Birnam Wood") seem to guarantee Macbeth\'s safety but are fulfilled in unexpected ways, showing that Macbeth was deceived by his own interpretation. The ambiguity serves Shakespeare\'s moral purpose: if the witches simply controlled Macbeth, he would be a victim, not a villain. By making the prophecies open to interpretation, Shakespeare ensures that Macbeth remains morally responsible for his own choices.',
      marks: 4,
    },
    {
      question: 'How would a Jacobean audience\'s response to the supernatural in Shakespeare differ from a modern audience\'s response?',
      lines: 5,
      modelAnswer:
        'A Jacobean audience would have experienced the supernatural elements as genuinely frightening because they believed in witchcraft, ghosts, and divine punishment as real forces in the world. The witches in Macbeth would not have been theatrical entertainment but a reminder of genuine dangers; Banquo\'s ghost would have been terrifying proof that murdered men could return. A modern audience, generally secular and sceptical, is more likely to interpret these elements psychologically — seeing the dagger as a hallucination caused by stress, the witches as symbols of temptation rather than literal agents of evil. Both readings are valid, but understanding the Jacobean perspective deepens our appreciation of how much was at stake in these plays for their original audience.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson is particularly important for students studying Macbeth, where the supernatural is central to AO3 marks.',
    'Be sensitive to students\' own religious or spiritual beliefs when discussing the supernatural.',
    'The ambiguity question (real vs psychological) is an excellent preparation for evaluative writing at the top of the mark scheme.',
    'James I\'s Daemonologie is freely available online — consider showing an image of the title page as a primary source.',
    'Connect to Lesson 5 (Great Chain of Being) — the supernatural operates within and disrupts the divine hierarchy.',
  ],
  targetedSkills: [
    'AO3: Context',
    'AO2: Writer\'s methods',
    'Evaluative writing',
    'Textual analysis',
    'Audience response',
  ],
};

// ─── Lesson 9: Comedy vs Tragedy — Genre Conventions ────────────────────────

const lesson9: LessonPlan = {
  id: 'shakespeare-context-09-comedy-vs-tragedy',
  title: 'Comedy vs Tragedy: Genre Conventions',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Define the key conventions of Shakespearean comedy and tragedy, including structure, character types, and resolution.',
    'Analyse how Shakespeare both follows and subverts genre conventions to create complex dramatic effects.',
    'Evaluate how understanding genre enhances interpretation of Shakespeare\'s plays and deepens exam responses.',
  ],
  successCriteria: [
    'I can list at least four conventions of Shakespearean comedy and four of tragedy.',
    'I can identify specific examples where Shakespeare follows or challenges genre conventions.',
    'I can write a paragraph explaining how genre conventions shape audience expectations and dramatic meaning.',
  ],
  keywords: [
    'tragedy', 'comedy', 'hamartia', 'catharsis',
    'denouement', 'anagnorisis', 'peripeteia', 'resolution',
    'subversion', 'tragicomedy',
  ],
  starterActivity: {
    title: 'Genre Prediction',
    duration: '7 minutes',
    instructions:
      'Display the titles of six Shakespeare plays without identifying them as comedies or tragedies: Macbeth, A Midsummer Night\'s Dream, Othello, Much Ado About Nothing, Romeo and Juliet, Twelfth Night. Students sort them into Comedy and Tragedy based on what they know or can infer. Reveal answers and discuss: How did you know? What expectations does each genre create? Introduce the idea that Shakespeare\'s genius lies partly in how he plays with these expectations — Romeo and Juliet is a tragedy that begins like a comedy, and Much Ado About Nothing contains a near-tragic subplot.',
    differentiation: {
      support: 'Provide a simple rule: "Comedies usually end in marriage; tragedies usually end in death." Students apply this rule.',
      core: 'Students sort independently and write a sentence explaining the patterns they notice.',
      stretch: 'Students identify plays that blur the boundary between comedy and tragedy and explain why Shakespeare does this.',
    },
    resources: ['Title cards display', 'Sorting grid', 'Genre rule card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Convention Comparison: Building the Genre Framework',
      duration: '20 minutes',
      instructions:
        'Students complete a detailed comparison table of Shakespearean comedy and tragedy conventions. Teacher provides categories and students fill in features for each genre: (1) Typical plot structure (comedy: confusion followed by resolution followed by marriage; tragedy: rise followed by fall followed by death); (2) Character types (comedy: lovers, fools, tricksters; tragedy: noble protagonist with a fatal flaw, antagonist); (3) Setting (comedy: pastoral, foreign, magical; tragedy: courts, battlefields, domestic interiors); (4) Language (comedy: puns, prose, wordplay, bawdy humour; tragedy: verse, soliloquies, elevated diction); (5) Ending (comedy: multiple marriages, reconciliation, social harmony restored; tragedy: death of protagonist, catharsis, order restored through sacrifice); (6) Audience response (comedy: laughter, relief, satisfaction; tragedy: pity, fear, catharsis). Teacher models the first row, then students complete independently.',
      differentiation: {
        support: 'Provide a partially completed table with key terms filled in; students add examples from specific plays.',
        core: 'Students complete the full table and add at least one specific play example per row.',
        stretch: 'Students add a third column for "tragicomedy" or "problem play" (e.g., The Merchant of Venice, Measure for Measure) and explain why Shakespeare sometimes resists neat categorisation.',
      },
      resources: ['Genre comparison table worksheet', 'Partially completed table (support tier)', 'Key terms glossary'],
    },
    {
      title: 'Genre in Action: Close Analysis of Openings',
      duration: '20 minutes',
      instructions:
        'Distribute the opening lines of three plays: (1) Macbeth — "When shall we three meet again? / In thunder, lightning, or in rain?" (witches establish a dark, supernatural atmosphere); (2) A Midsummer Night\'s Dream — Theseus and Hippolyta discussing their wedding; (3) Romeo and Juliet — the Prologue revealing the "star-crossed lovers" will die. For each opening, students annotate: What genre signals does Shakespeare give? What expectations does he create for the audience? Students then focus on Romeo and Juliet\'s Prologue, which tells the audience the ending before the play begins. Why would Shakespeare spoil his own story? Students write a paragraph explaining how the Prologue transforms a love story into a tragedy and creates dramatic irony from the very first line.',
      differentiation: {
        support: 'Provide annotated versions of the first two openings; students annotate Romeo and Juliet\'s Prologue independently.',
        core: 'Students annotate all three openings and write the analytical paragraph on the Prologue.',
        stretch: 'Students compare how the opening of Macbeth and A Midsummer Night\'s Dream establish their respective genres through language, imagery, and atmosphere, writing a comparative paragraph.',
      },
      resources: ['Opening extracts handout (x3)', 'Annotation guide', 'Annotated examples (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Genre Mashup',
    duration: '8 minutes',
    instructions:
      'Challenge question: "What would Macbeth be like as a comedy? What would A Midsummer Night\'s Dream be like as a tragedy?" Students brainstorm in pairs for two minutes, then share the funniest or most disturbing ideas. Teacher uses this to reinforce the serious point: genre shapes everything — character, plot, language, ending — and Shakespeare chose his genres deliberately. Understanding genre helps students explain why Shakespeare made specific choices.',
    differentiation: {
      support: 'Provide a prompt: "In a comedy version of Macbeth, the murder scene would be..." to get students started.',
      core: 'Students generate their own genre-swapped scenarios and explain what would change.',
      stretch: 'Students argue that Shakespeare already includes comedic elements in Macbeth (e.g., the Porter scene) and explain what purpose these serve within a tragedy.',
    },
  },
  homework:
    'Write a paragraph explaining the genre of the Shakespeare play you are studying. Identify three specific genre conventions Shakespeare uses and explain their effect on the audience.',
  worksheetQuestions: [
    {
      question: 'List four key conventions of Shakespearean tragedy and explain each one.',
      lines: 8,
      modelAnswer:
        'First, the protagonist is typically a noble figure (king, prince, general) who possesses a fatal flaw (hamartia) that leads to their downfall — Macbeth\'s ambition, Othello\'s jealousy, Hamlet\'s indecision. Second, the plot follows a rise-and-fall structure: the protagonist begins in a position of power or fortune, makes a critical error, and descends into suffering and death. Third, the tragedy involves a moment of recognition (anagnorisis) where the protagonist realises their mistake too late — Macbeth\'s "Tomorrow, and tomorrow, and tomorrow" speech acknowledges the futility of his actions. Fourth, the ending produces catharsis — a purging of emotion in the audience through pity and fear — as order is restored, usually by a legitimate successor who inherits the throne or restores peace.',
      marks: 8,
    },
    {
      question: 'How does the Prologue of Romeo and Juliet establish the play\'s genre and create dramatic irony?',
      lines: 5,
      modelAnswer:
        'The Prologue immediately identifies the play as a tragedy by revealing that the "star-crossed lovers" will "take their life" — the audience knows the ending before the story begins. This creates pervasive dramatic irony: every moment of joy between Romeo and Juliet is shadowed by the audience\'s knowledge of their inevitable death. Shakespeare signals through the Prologue that this is not a story about whether the lovers will survive but about how and why they will die. The Prologue also establishes fate as a central theme — the word "star-crossed" suggests their destiny is written in the stars and cannot be avoided.',
      marks: 4,
    },
    {
      question: 'Why does Shakespeare include comedy within his tragedies? Use a specific example.',
      lines: 5,
      modelAnswer:
        'Shakespeare includes comic scenes within tragedies to provide emotional relief, heighten the horror through contrast, and reflect the complexity of real life. The most famous example is the Porter scene in Macbeth (Act 2, Scene 3), where a drunken porter jokes about damnation immediately after Duncan\'s murder. The crude humour momentarily releases the unbearable tension for the audience, but the references to hell and damnation ironically reinforce the horror of what has just occurred. Shakespeare understood that tragedy is more powerful when punctuated by moments of dark humour — the contrast makes both the comedy and the horror more intense.',
      marks: 4,
    },
    {
      question: 'Explain the concept of "hamartia" and discuss its importance to Shakespearean tragedy.',
      lines: 6,
      modelAnswer:
        'Hamartia, from the Greek, refers to the tragic hero\'s fatal flaw — the characteristic that, combined with circumstances, brings about their downfall. In Macbeth, the hamartia is ambition: Macbeth is a brave, respected warrior, but his desire for power leads him to commit regicide. In Othello, the hamartia is jealousy (or perhaps misplaced trust). Hamartia is essential to Shakespearean tragedy because it ensures the protagonist is neither purely good nor purely evil: they are recognisably human, which makes their fall pitiable rather than merely just. The audience sees how easily a single flaw can destroy a noble person, creating the catharsis — emotional purging — that Aristotle identified as the purpose of tragedy.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'This lesson provides genre vocabulary that students can deploy across all their Shakespeare responses.',
    'The terms hamartia, catharsis, anagnorisis, and peripeteia are not required by AQA but significantly enhance top-band responses.',
    'Romeo and Juliet\'s Prologue is an ideal text for teaching dramatic irony and genre simultaneously.',
    'The genre mashup plenary is deliberately playful but makes a serious analytical point — genre is a choice, not an accident.',
    'Link to Lesson 4 (Soliloquies) — the soliloquy is a convention more associated with tragedy than comedy.',
  ],
  targetedSkills: [
    'AO1: Response to text',
    'AO2: Writer\'s methods',
    'Genre analysis',
    'Comparative thinking',
    'Analytical writing',
  ],
};

// ─── Lesson 10: Exam Skills — Writing About Shakespeare ─────────────────────

const lesson10: LessonPlan = {
  id: 'shakespeare-context-10-exam-skills',
  title: 'Exam Skills: Writing About Shakespeare',
  text: 'Shakespeare Context & Skills',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the structure and requirements of the AQA GCSE Shakespeare exam question (Paper 1, Section A).',
    'Apply a clear analytical framework (PETAL: Point, Evidence, Technique, Analysis, Link) to Shakespeare extracts.',
    'Practise integrating context (AO3) and writer\'s methods (AO2) into a timed response on a Shakespeare text.',
  ],
  successCriteria: [
    'I can decode a Shakespeare exam question, identifying what the examiner is asking and how marks are allocated.',
    'I can write a PETAL paragraph that integrates quotation, technique analysis, and contextual understanding.',
    'I can complete a timed practice response that addresses AO1, AO2, AO3, and AO4.',
  ],
  keywords: [
    'PETAL', 'assessment objectives', 'AO1', 'AO2',
    'AO3', 'AO4', 'extract-based question', 'authorial intention',
    'embedded quotation', 'topic sentence',
  ],
  starterActivity: {
    title: 'Mark Scheme Detective',
    duration: '8 minutes',
    instructions:
      'Display the AQA mark scheme descriptors for Level 2 (basic), Level 4 (good), and Level 6 (top band) for the Shakespeare question. Students read all three and highlight the key differences between each level in three different colours. Discuss: What does a Level 6 response do that a Level 2 response does not? Key findings: Level 6 integrates context rather than bolting it on, analyses language and structure in detail, uses embedded quotations, and considers alternative interpretations. Students write the three most important things they need to do to reach the top band.',
    differentiation: {
      support: 'Provide a simplified version of the mark scheme with key words underlined and a "translation" into student-friendly language.',
      core: 'Students highlight independently and identify three key differences between levels.',
      stretch: 'Students rewrite a Level 2 descriptor to make it Level 6, demonstrating understanding of progression.',
    },
    resources: ['Mark scheme display (Levels 2, 4, 6)', 'Highlighters (three colours)', 'Simplified mark scheme (support tier)'],
  },
  mainActivities: [
    {
      title: 'Building the Perfect Paragraph: PETAL in Action',
      duration: '22 minutes',
      instructions:
        'Teacher introduces the PETAL framework: Point (a clear topic sentence answering the question), Evidence (an embedded quotation from the extract or wider play), Technique (identification of a specific language, structural, or dramatic method), Analysis (detailed exploration of the effect of the technique on the audience), Link (connection to context, authorial intention, or the wider play). Teacher models a full PETAL paragraph on the board using a Macbeth extract, thinking aloud at each stage. Students then receive a different extract and question and write their own PETAL paragraph. Pairs swap and peer-assess using a checklist: Does the paragraph have all five elements? Is the quotation embedded? Is the analysis detailed (not just identifying a technique)? Is context integrated, not bolted on?',
      differentiation: {
        support: 'Provide a PETAL scaffold with sentence starters for each element and a word bank of analytical verbs (suggests, implies, reveals, conveys).',
        core: 'Students write a full PETAL paragraph independently and peer-assess using the checklist.',
        stretch: 'Students write two PETAL paragraphs offering different interpretations of the same extract, demonstrating the ability to consider alternative readings.',
      },
      resources: ['PETAL framework poster', 'Model paragraph display', 'Extract and question handout', 'Peer assessment checklist', 'PETAL scaffold (support tier)'],
    },
    {
      title: 'Timed Practice: Mini Shakespeare Response',
      duration: '18 minutes',
      instructions:
        'Students complete a mini timed response (15 minutes of writing plus 3 minutes of planning). Provide a Shakespeare extract and question in exam format: "Starting with this extract, explore how Shakespeare presents [theme/character] in [play]. Write about: how Shakespeare presents [theme/character] in this extract; how Shakespeare presents [theme/character] in the play as a whole." Students should aim for two or three PETAL paragraphs in 15 minutes, covering the extract and at least one reference to the wider play. Teacher circulates to support, particularly checking that students are analysing language (AO2) and integrating context (AO3) rather than narrating the plot.',
      differentiation: {
        support: 'Provide a planning template with space for two paragraphs, each with PETAL prompts, and a reminder of key contextual points.',
        core: 'Students plan and write independently, aiming for three paragraphs with integrated context.',
        stretch: 'Students include an evaluative opening or closing that considers Shakespeare\'s overall authorial intention or alternative interpretations.',
      },
      resources: ['Exam-style extract and question', 'Planning template (support tier)', 'Lined response paper', 'Timer (15 minutes)'],
    },
  ],
  plenaryActivity: {
    title: 'Traffic Light Self-Assessment',
    duration: '7 minutes',
    instructions:
      'Students re-read their timed response and use traffic light colours to self-assess: Green = confident and well-done; Amber = present but needs improvement; Red = missing or weak. They colour-code four areas: (1) Clear point answering the question (AO1); (2) Quotation with technique analysis (AO2); (3) Context integrated into the analysis (AO3); (4) Accurate spelling, punctuation, and grammar (AO4). Students write one specific target for improvement based on their weakest area. Teacher collects responses for marking and uses the self-assessments to plan targeted intervention.',
    differentiation: {
      support: 'Provide a self-assessment checklist with specific prompts for each colour (e.g., "Did I embed a quotation? If yes = green, if I used a standalone quotation = amber, if no quotation = red").',
      core: 'Students self-assess independently and set a specific, actionable target.',
      stretch: 'Students swap with a partner and compare self-assessments, offering additional feedback on one another\'s work.',
    },
  },
  homework:
    'Rewrite your weakest paragraph from today\'s timed practice, improving it based on your self-assessment target. Highlight the improvements you have made.',
  worksheetQuestions: [
    {
      question: 'What are the four Assessment Objectives for the AQA GCSE Shakespeare question, and how many marks are they worth?',
      lines: 6,
      modelAnswer:
        'AO1 (12 marks) requires a critical, personal response to the text with appropriate textual references. AO2 (12 marks) requires analysis of the writer\'s methods, including language, form, and structure, using relevant subject terminology. AO3 (6 marks) requires understanding of the relationship between the text and its historical, social, and cultural context. AO4 (4 marks) assesses spelling, punctuation, and grammar. The total for the Shakespeare question is 34 marks (30 + 4 for SPaG). Students should note that AO1 and AO2 carry equal weight and together account for the majority of marks, but AO3 is essential for accessing the top band.',
      marks: 4,
    },
    {
      question: 'Write a PETAL paragraph analysing how Shakespeare uses the word "blood" in Macbeth.',
      lines: 8,
      modelAnswer:
        'Shakespeare uses the motif of blood throughout Macbeth to chart the protagonist\'s moral decline and overwhelming guilt. After murdering Duncan, Macbeth stares at his hands and asks, "Will all great Neptune\'s ocean wash this blood clean from my hand?" The hyperbolic reference to "Neptune\'s ocean" — the entire sea — emphasises that Macbeth\'s guilt is so vast that no amount of water could cleanse it. The metaphor of blood as a permanent stain suggests that murder has fundamentally changed Macbeth; he can never return to innocence. Shakespeare may have intended this to terrify his Jacobean audience, who believed that regicide was a sin against God that could never be absolved. The blood motif connects the physical act of violence to its psychological and spiritual consequences, showing that Macbeth\'s ambition has cost him not just his morality but his soul.',
      marks: 6,
    },
    {
      question: 'Explain the difference between "bolted on" context and "integrated" context. Give an example of each.',
      lines: 6,
      modelAnswer:
        '"Bolted on" context is when a student adds contextual information as a separate, disconnected fact rather than weaving it into their analysis. Example: "Lady Macbeth calls on spirits to unsex her. In Shakespeare\'s time, women were expected to be obedient." This states a contextual fact but does not explain how it connects to the analysis. "Integrated" context embeds the contextual knowledge within the analytical point: "Lady Macbeth\'s plea to be \'unsexed\' would have shocked a Jacobean audience, for whom femininity was defined by obedience, nurturing, and passivity — by rejecting these qualities, she is not merely ambitious but transgressing the divinely ordained gender hierarchy." The second version uses context to deepen the analysis rather than decorating it.',
      marks: 4,
    },
    {
      question: 'Why is it important to discuss Shakespeare\'s "authorial intention" in a GCSE exam response?',
      lines: 5,
      modelAnswer:
        'Discussing authorial intention demonstrates that the student understands the text as a deliberately crafted artefact rather than an accidental narrative. Phrases like "Shakespeare presents...", "Shakespeare may have intended...", and "Shakespeare uses X to suggest..." show the examiner that the student recognises the playwright as an active decision-maker with a purpose. This is essential for accessing the top bands of AO1 and AO2, which require "critical" and "exploratory" responses. Without authorial intention, analysis remains descriptive ("Macbeth feels guilty") rather than interpretive ("Shakespeare presents Macbeth\'s guilt as inescapable to warn his audience about the moral consequences of unchecked ambition").',
      marks: 4,
    },
    {
      question: 'What are the most common mistakes students make in the Shakespeare exam, and how can they be avoided?',
      lines: 6,
      modelAnswer:
        'The most common mistakes are: (1) Narrating the plot rather than analysing — students retell what happens instead of explaining how and why Shakespeare creates effects. This is avoided by always focusing on Shakespeare\'s methods rather than the story. (2) Feature-spotting without analysis — identifying a metaphor or simile without explaining its effect. Students should always ask "so what?" after naming a technique. (3) Bolting on context as a separate paragraph rather than integrating it into analysis. Context should explain why Shakespeare made a particular choice. (4) Ignoring the extract — the question asks students to start with the given passage, and marks are lost by immediately jumping to the wider play. Students should spend at least two paragraphs on the extract before broadening out. (5) Running out of time — students should spend no more than 50-55 minutes on this question and plan for 3-4 paragraphs, not 6-7.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'This is the most exam-focused lesson in the sequence — ensure students treat the timed practice seriously.',
    'The PETAL framework is a scaffold, not a straitjacket; encourage advanced students to vary their paragraph structure.',
    'Collect the timed responses and mark them against the AQA mark scheme to provide targeted feedback.',
    'The "bolted on" vs "integrated" context distinction is one of the most impactful skills to teach — it alone can move students up a level.',
    'This lesson works best after students have studied the contextual content in Lessons 1-9, as they need that knowledge to integrate.',
    'Consider following up with a full timed essay in the next lesson, using the targets set in the plenary.',
  ],
  targetedSkills: [
    'AO1: Response to text',
    'AO2: Writer\'s methods',
    'AO3: Context',
    'AO4: SPaG',
    'Exam technique',
    'Timed writing',
    'Self-assessment',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const shakespeareContextLessons: LessonPlan[] = [
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
