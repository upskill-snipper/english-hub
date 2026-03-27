// @ts-nocheck
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

export const poetryPowerConflictLessons: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1: Introduction to the Anthology
  // ─────────────────────────────────────────────
  {
    id: "ppc-01-intro-anthology",
    title: "Introduction to the Anthology: Themes, Contexts & Comparison Skills",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure and requirements of AQA GCSE English Literature Paper 2, Section B",
      "Identify and categorise the fifteen poems across key thematic clusters: power of individuals, power of nature, effects of conflict, memory and identity",
      "Develop an initial framework for comparing poems across shared themes",
      "Recognise the importance of context in shaping poets' perspectives on power and conflict",
    ],
    successCriteria: [
      "I can name all fifteen poems and their poets",
      "I can sort the poems into at least four thematic groups and justify my choices",
      "I can explain the exam structure for the poetry comparison question",
      "I can identify at least two contextual factors that shape the anthology",
    ],
    keywords: [
      "anthology",
      "thematic cluster",
      "comparison",
      "context",
      "power",
      "conflict",
      "perspective",
      "Paper 2 Section B",
    ],
    starterActivity: {
      title: "Word Association: Power & Conflict",
      duration: "8 minutes",
      instructions:
        "Display the words 'POWER' and 'CONFLICT' on the board. Students have 2 minutes to individually brainstorm associations, connotations, and real-world examples for each word on mini-whiteboards. Pairs then compare and categorise their ideas into 'types of power' and 'types of conflict'. Teacher takes feedback, building a class mind-map on the board that will be returned to throughout the unit.",
      differentiation: {
        support:
          "Provide prompt cards with sentence starters: 'Power can mean...', 'Conflict might involve...'",
        core: "Students independently generate and categorise their ideas before pair discussion.",
        stretch:
          "Students consider how power and conflict might be connected — can you have one without the other?",
      },
      resources: [
        "Mini-whiteboards",
        "Power & Conflict prompt cards (support tier)",
      ],
    },
    mainActivities: [
      {
        title: "Meet the Anthology: Poem Sorting Challenge",
        duration: "20 minutes",
        instructions:
          "Distribute the 'Poem Profile Cards' — each card has the poem title, poet name, a one-sentence summary, date of composition, and one key quotation. In groups of three, students sort the fifteen cards into thematic groups of their own devising. Groups must create labels for their categories and be prepared to justify their choices. Teacher circulates, questioning groupings and encouraging debate. After 12 minutes, groups present their categories to the class. Teacher then reveals the commonly used clusters (Power of Individuals, War & Suffering, Reality of Conflict, Memory & Identity, Power of Place, Identity & Power Structures) and students compare these with their own groupings.",
        differentiation: {
          support:
            "Provide pre-labelled category headings and ask students to sort the cards into them.",
          core: "Students create their own categories and justify each placement with reference to the summary and quotation.",
          stretch:
            "Students identify poems that could sit in multiple categories and explain the ambiguity — this mirrors the flexibility needed in the exam.",
        },
        resources: [
          "Poem Profile Cards (set of 15 per group)",
          "Category heading cards (support tier)",
          "A3 sorting mats",
        ],
      },
      {
        title: "Exam Structure & Comparison Skills Introduction",
        duration: "20 minutes",
        instructions:
          "Display a sample Paper 2 Section B question on the board. Walk students through the mark scheme using the AQA assessment objectives: AO1 (response to poems), AO2 (language, form, structure), AO3 (context). Model the concept of a 'comparison connector' — words and phrases that link analysis of one poem to another (similarly, in contrast, whereas, both poets, however). Students then complete a 'Comparison Connector' worksheet: given two short quotations from different poems on the theme of power, they write three sentences using different comparison connectors. Share exemplar responses under the visualiser.",
        differentiation: {
          support:
            "Provide a sentence frame: '[Poem A] presents power as ___ through the use of ___. Similarly/In contrast, [Poem B] ___.'",
          core: "Students write three comparison sentences independently using the connector word bank.",
          stretch:
            "Students write a full comparative paragraph (PEEL structure) comparing the two quotations, embedding context.",
        },
        resources: [
          "Sample Paper 2 Section B question (projected)",
          "AO1/AO2/AO3 summary handout",
          "Comparison Connector worksheet",
          "Sentence frames (support tier)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Exit Ticket: My Anthology Map",
      duration: "7 minutes",
      instructions:
        "Students complete a quick-draw 'Anthology Map' on their exit ticket: they write the name of the thematic cluster that interests them most, name two poems in it, and write one sentence explaining why these poems might be compared. Collect and use responses to gauge initial engagement and understanding.",
      differentiation: {
        support:
          "Provide the cluster names and poem titles pre-printed; students select and add their sentence.",
        core: "Students complete the full exit ticket from memory.",
        stretch:
          "Students add a second comparison pair from a different cluster and note a linking theme between the two pairs.",
      },
    },
    homework:
      "Read the full text of 'Ozymandias' by Percy Bysshe Shelley and 'My Last Duchess' by Robert Browning. For each poem, note down: (a) who is speaking, (b) what kind of power is shown, (c) one quotation that stands out. Bring notes to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "Name the fifteen poems in the AQA Power & Conflict anthology and their poets.",
        lines: 8,
        modelAnswer:
          "Ozymandias (Shelley), London (Blake), The Prelude: Stealing the Boat (Wordsworth), My Last Duchess (Browning), The Charge of the Light Brigade (Tennyson), Exposure (Owen), Storm on the Island (Heaney), Bayonet Charge (Hughes), Remains (Armitage), Kamikaze (Garland), Checking Out Me History (Agard), Tissue (Dharker), Poppies (Weir), War Photographer (Duffy), The Emigrée (Rumens).",
        marks: 5,
      },
      {
        question:
          "Explain what is meant by a 'thematic cluster' and give an example using two poems from the anthology.",
        lines: 5,
        modelAnswer:
          "A thematic cluster is a group of poems linked by a shared theme or idea. For example, 'Ozymandias' and 'My Last Duchess' both explore the power of individuals — Ozymandias was a tyrannical pharaoh whose power has decayed, while the Duke in Browning's poem exerts controlling, possessive power over his wife. Grouping poems thematically helps build comparison skills for the exam.",
        marks: 4,
      },
      {
        question:
          "What are the three assessment objectives tested in Paper 2 Section B? Explain each briefly.",
        lines: 6,
        modelAnswer:
          "AO1: Read, understand and respond to texts — students must use textual references to support interpretations. AO2: Analyse the language, form and structure used by a writer to create meanings and effects — students must use subject terminology. AO3: Show understanding of the relationships between texts and the contexts in which they were written.",
        marks: 6,
      },
      {
        question:
          "Write two sentences comparing the theme of power in any two poems from the anthology. Use a comparison connector.",
        lines: 5,
        modelAnswer:
          "In 'Ozymandias', Shelley presents the power of a tyrant as ultimately temporary, since the statue lies 'half sunk' and broken in the desert. In contrast, Browning's Duke in 'My Last Duchess' still exerts his power at the end of the poem, suggesting that some forms of control are more enduring than the power of empires.",
        marks: 4,
      },
      {
        question:
          "Why is context important when analysing poetry? Give one example of how a poet's context might shape their poem.",
        lines: 5,
        modelAnswer:
          "Context helps us understand why a poet wrote in a particular way and what message they intended. For example, Wilfred Owen wrote 'Exposure' based on his first-hand experience of trench warfare in World War One, so his descriptions of suffering and futility carry the authority of personal witness and were intended to challenge the glorification of war.",
        marks: 4,
      },
      {
        question:
          "Explain why the ability to compare poems is essential for success in Paper 2 Section B.",
        lines: 4,
        modelAnswer:
          "The exam question asks students to compare how poets present a particular theme or idea, so comparison is built into the task. Students who analyse poems in isolation cannot access the higher mark bands, which require sustained, detailed comparison throughout the response. Strong comparison shows the examiner that the student can think critically about different perspectives.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "This lesson is designed as the unit opener. No prior knowledge of the poems is assumed.",
      "Laminate the Poem Profile Cards for reuse across classes.",
      "The thematic clusters used here are a guide — the exam can pair any two poems, so encourage flexibility.",
      "Collect exit tickets to identify students who may need additional support with the comparison skill focus in Lesson 8.",
      "Consider displaying the class mind-map on the wall as a reference throughout the unit.",
    ],
    targetedSkills: [
      "AO1: Textual knowledge",
      "AO3: Context",
      "Comparison skills",
      "Thematic categorisation",
      "Exam technique",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 2: Ozymandias & My Last Duchess
  // ─────────────────────────────────────────────
  {
    id: "ppc-02-ozymandias-duchess",
    title: "Ozymandias & My Last Duchess: Power of Individuals",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Shelley presents the transience of political power in 'Ozymandias'",
      "Analyse how Browning presents possessive, patriarchal power in 'My Last Duchess'",
      "Compare how both poets use dramatic voices to explore the abuse of power",
      "Develop the skill of embedding comparative analysis using AO1, AO2, and AO3",
    ],
    successCriteria: [
      "I can analyse at least two key quotations from each poem using subject terminology",
      "I can explain how form and structure contribute to the presentation of power in both poems",
      "I can write a comparative paragraph linking both poems through the theme of power",
      "I can incorporate relevant contextual knowledge into my analysis",
    ],
    keywords: [
      "hubris",
      "tyranny",
      "dramatic monologue",
      "sonnet",
      "enjambment",
      "patriarchy",
      "possessive power",
      "transience",
      "irony",
    ],
    starterActivity: {
      title: "Two Voices of Power",
      duration: "8 minutes",
      instructions:
        "Display two quotations on the board: 'Look on my Works, ye Mighty, and despair!' (Ozymandias) and 'Then all smiles stopped together' (My Last Duchess). Students discuss in pairs: What kind of person is speaking? What kind of power do they hold? What tone of voice would you use to read each aloud? Take feedback and establish that both poems feature powerful individuals who abuse their authority, but in very different ways.",
      differentiation: {
        support:
          "Provide a glossary defining 'tone', 'authority', and 'power' with examples.",
        core: "Students annotate the quotations with initial impressions before pair discussion.",
        stretch:
          "Students predict what might happen to each speaker's power by the end of their poem.",
      },
      resources: ["Quotation slide", "Glossary cards (support tier)"],
    },
    mainActivities: [
      {
        title: "Deep Dive: Ozymandias by Percy Bysshe Shelley",
        duration: "18 minutes",
        instructions:
          "Read 'Ozymandias' aloud twice — once for understanding, once for annotation. Students annotate a printed copy focusing on: (1) the narrative frame — who is telling the story and why this matters; (2) the description of the statue — 'shattered visage', 'wrinkled lip', 'sneer of cold command'; (3) the irony of the inscription versus the 'lone and level sands'; (4) the unconventional sonnet form — broken structure mirroring broken power. Teacher models analysis of one quotation on the board using PEEL (Point, Evidence, Explain, Link to context). Students then independently write a PEEL paragraph on a second quotation. Context to embed: Shelley was a Romantic poet who opposed tyranny and believed in the power of nature over human authority.",
        differentiation: {
          support:
            "Provide a pre-annotated version with three key quotations highlighted and a PEEL frame with sentence starters.",
          core: "Students select their own quotation and write a full PEEL paragraph independently.",
          stretch:
            "Students analyse how the sonnet form is deliberately disrupted and evaluate Shelley's purpose in breaking convention.",
        },
        resources: [
          "Printed copy of 'Ozymandias'",
          "PEEL paragraph frame (support tier)",
          "Context card: Shelley and Romanticism",
        ],
      },
      {
        title: "Deep Dive: My Last Duchess by Robert Browning",
        duration: "18 minutes",
        instructions:
          "Read 'My Last Duchess' aloud (teacher or audio recording), pausing at key moments for think-aloud annotation. Students annotate focusing on: (1) the dramatic monologue form — the Duke controls the narrative just as he controlled the Duchess; (2) key quotations — 'That's my last Duchess painted on the wall', 'I gave commands; then all smiles stopped together'; (3) the use of enjambment and caesura to create the Duke's conversational yet sinister tone; (4) the rhyming couplets contained within iambic pentameter suggesting the Duke's desire for order and control. Students write a PEEL paragraph analysing how Browning presents the Duke's power. Context to embed: Based on the real Duke of Ferrara in Renaissance Italy; Browning critiques patriarchal power and the treatment of women as possessions.",
        differentiation: {
          support:
            "Provide a guided annotation sheet with arrows pointing to key lines and prompts for what to notice.",
          core: "Students annotate and write a PEEL paragraph on a quotation of their choice.",
          stretch:
            "Students analyse what the Duke reveals unintentionally — how does Browning use the dramatic monologue form to expose the Duke's flaws to the reader while the Duke remains unaware?",
        },
        resources: [
          "Printed copy of 'My Last Duchess'",
          "Audio recording (optional)",
          "Guided annotation sheet (support tier)",
          "Context card: Browning and the Duke of Ferrara",
        ],
      },
    ],
    plenaryActivity: {
      title: "Comparison Flash Draft",
      duration: "10 minutes",
      instructions:
        "Students write a comparative paragraph in 8 minutes using the frame: 'Both Shelley and Browning present powerful individuals who... However, while Shelley's Ozymandias... Browning's Duke...' After writing, students swap with a partner and highlight every comparison connector used. Teacher selects one or two strong examples to share under the visualiser.",
      differentiation: {
        support:
          "Use the full sentence frame provided, filling in the blanks with specific evidence.",
        core: "Write a comparative paragraph using the frame as a guide but developing their own expression.",
        stretch:
          "Write without the frame and include a contextual link explaining why each poet chose to present power in this way.",
      },
    },
    homework:
      "Write a full comparative essay paragraph answering: 'Compare how poets present the abuse of power in Ozymandias and My Last Duchess.' Use PEEL structure and at least two comparison connectors. Aim for 150-200 words.",
    worksheetQuestions: [
      {
        question:
          "What is the effect of the narrative frame in 'Ozymandias'? Why does Shelley have a traveller tell the story rather than the speaker?",
        lines: 5,
        modelAnswer:
          "The narrative frame distances the reader from Ozymandias, emphasising how far removed his power is from the present day. The fact that the story is second-hand — told by 'a traveller from an antique land' — reinforces the idea that Ozymandias' empire has crumbled into obscurity. Shelley uses this structure to show that even the most powerful rulers are eventually forgotten.",
        marks: 4,
      },
      {
        question:
          "Analyse the effect of the phrase 'sneer of cold command' in 'Ozymandias'.",
        lines: 5,
        modelAnswer:
          "The sibilance in 'sneer' and 'cold command' creates a harsh, hissing sound that reflects Ozymandias' cruelty. 'Cold' suggests he was emotionless and detached from his people's suffering, while 'command' emphasises his authoritarian rule. The fact that this expression survives in stone, long after his empire has fallen, suggests that tyranny leaves a lasting mark even when power itself is transient.",
        marks: 4,
      },
      {
        question:
          "How does Browning use the dramatic monologue form to reveal the Duke's character in 'My Last Duchess'?",
        lines: 6,
        modelAnswer:
          "The dramatic monologue allows the Duke to speak continuously without interruption, which mirrors his controlling nature — he dominates the conversation just as he dominated the Duchess. However, Browning uses dramatic irony: the Duke inadvertently reveals his jealousy, possessiveness, and implied violence ('I gave commands; then all smiles stopped together') while believing he is presenting himself favourably. The form thus becomes a tool for Browning to critique patriarchal power.",
        marks: 5,
      },
      {
        question:
          "Compare how power is presented as destructive in both 'Ozymandias' and 'My Last Duchess'.",
        lines: 8,
        modelAnswer:
          "In 'Ozymandias', Shelley presents power as self-destructive through the ironic contrast between the inscription — 'Look on my Works, ye Mighty, and despair!' — and the 'lone and level sands' that surround the ruined statue. The political power of the pharaoh has been destroyed by time and nature, reflecting Shelley's Romantic belief that human authority is ultimately insignificant. In contrast, Browning presents power as destructive to others: the Duke's possessive control led to the Duchess' implied death, yet his power remains intact as he moves on to negotiate a new marriage. While Shelley shows power collapsing from within, Browning shows power that persists through the oppression of others, making the Duke arguably more sinister than Ozymandias.",
        marks: 8,
      },
      {
        question:
          "Explain one way context is important to understanding 'Ozymandias' and one way context is important to understanding 'My Last Duchess'.",
        lines: 6,
        modelAnswer:
          "Shelley was a Romantic poet who believed in the supremacy of nature over human institutions. This context is important because 'Ozymandias' demonstrates that nature (the desert) outlasts even the greatest human empires, reflecting Shelley's political opposition to tyranny. Browning based the Duke on Alfonso II, Duke of Ferrara, whose first wife died in suspicious circumstances. This historical context adds menace to the poem and supports the reading that 'I gave commands; then all smiles stopped together' refers to the Duchess being murdered.",
        marks: 6,
      },
      {
        question:
          "How does Shelley's use of the sonnet form contribute to the meaning of 'Ozymandias'?",
        lines: 5,
        modelAnswer:
          "Shelley deliberately disrupts the traditional sonnet form — the rhyme scheme does not follow a conventional Petrarchan or Shakespearean pattern, and the volta is not in the expected position. This structural breakdown mirrors the collapse of Ozymandias' empire and power. Just as the statue is 'shattered', so too is the poem's form, reinforcing the message that nothing — not even artistic conventions — can contain or preserve human power forever.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Ensure students have access to the full text of both poems. Check copyright/licensing for reprographic use.",
      "The PEEL model should be displayed on the board throughout for reference.",
      "This lesson pairs well with Lesson 1's thematic sorting — refer back to the 'Power of Individuals' cluster.",
      "The comparison flash draft in the plenary provides formative assessment data for planning Lesson 8.",
      "For lower-attaining groups, consider spending two lessons on this content, with one poem per lesson.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language, form, structure analysis",
      "AO3: Context",
      "Comparison writing",
      "PEEL paragraph construction",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 3: Charge of the Light Brigade & Exposure
  // ─────────────────────────────────────────────
  {
    id: "ppc-03-charge-exposure",
    title:
      "The Charge of the Light Brigade & Exposure: War & Suffering",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Tennyson presents the heroism and futility of war in 'The Charge of the Light Brigade'",
      "Analyse how Owen presents the physical and psychological suffering of soldiers in 'Exposure'",
      "Compare how both poets use form, structure, and language to convey attitudes to war",
      "Understand the contrasting contexts and purposes of each poem",
    ],
    successCriteria: [
      "I can analyse key quotations from both poems with subject terminology",
      "I can explain how rhythm and repetition shape meaning in 'The Charge of the Light Brigade'",
      "I can explain how Owen uses sensory language and half-rhyme to convey suffering in 'Exposure'",
      "I can write a comparative paragraph contrasting the two poets' attitudes to war",
    ],
    keywords: [
      "heroism",
      "futility",
      "dactylic metre",
      "repetition",
      "half-rhyme",
      "sensory imagery",
      "propaganda",
      "war poetry",
      "pathos",
    ],
    starterActivity: {
      title: "Two Photographs of War",
      duration: "7 minutes",
      instructions:
        "Display two images: (1) a Victorian painting glorifying a cavalry charge; (2) a WWI photograph of soldiers in waterlogged trenches. Students write three words to describe each image, then discuss in pairs: How are these two representations of war different? Why might people at different times have viewed war differently? Teacher takes feedback and introduces the idea that 'The Charge of the Light Brigade' (1854) and 'Exposure' (1917) represent two very different attitudes to conflict.",
      differentiation: {
        support:
          "Provide a word bank of descriptive vocabulary (e.g. glorious, heroic, bleak, futile, suffering).",
        core: "Students generate their own descriptive words and make inferences about attitudes to war.",
        stretch:
          "Students consider who created each image and why — what is the purpose behind each representation?",
      },
      resources: [
        "Image slide (cavalry painting + trench photograph)",
        "Word bank (support tier)",
      ],
    },
    mainActivities: [
      {
        title:
          "Analysis: The Charge of the Light Brigade by Alfred, Lord Tennyson",
        duration: "18 minutes",
        instructions:
          "Read the poem aloud with energy, emphasising the driving rhythm. Students annotate focusing on: (1) dactylic metre and repetition — 'Half a league, half a league, half a league onward' — mimicking the galloping horses; (2) the refrain 'Into the valley of Death' — capitalised and biblical; (3) 'Theirs not to make reply, / Theirs not to reason why, / Theirs but to do and die' — obedience and duty; (4) the shift in the final stanza to memorialisation — 'Honour the Light Brigade'. Discuss: Is Tennyson glorifying war or criticising the commanders who sent men to die? Students write a PEEL paragraph on one aspect. Context: Tennyson was Poet Laureate; the poem was written in response to a newspaper report of a disastrous cavalry charge in the Crimean War where 600 men were sent into a heavily armed valley due to a miscommunicated order.",
        differentiation: {
          support:
            "Provide a colour-coded annotation guide matching each focus area to a colour, plus a PEEL frame.",
          core: "Students annotate independently and write a PEEL paragraph on their chosen focus.",
          stretch:
            "Students evaluate whether Tennyson's poem functions as celebration or critique — or both simultaneously.",
        },
        resources: [
          "Printed copy of 'The Charge of the Light Brigade'",
          "Colour-coded annotation guide (support tier)",
          "Context card: Tennyson and the Crimean War",
        ],
      },
      {
        title: "Analysis: Exposure by Wilfred Owen",
        duration: "18 minutes",
        instructions:
          "Read 'Exposure' aloud slowly, allowing the bleakness to settle. Students annotate focusing on: (1) the personification of weather as the true enemy — 'merciless iced east winds that knive us', 'Dawn massing in the east her melancholy army'; (2) the refrain 'But nothing happens' — the anti-climax and monotony of trench warfare; (3) half-rhyme throughout (e.g. 'wire/war', 'snow/renew') creating a sense of discord and unease; (4) the rhetorical question 'What are we doing here?' expressing existential despair. Students write a PEEL paragraph. Context: Owen served in WWI and suffered shell shock (PTSD). He wrote to expose the true horror of war, challenging the patriotic narratives of poets like Tennyson. He was killed one week before the Armistice in 1918.",
        differentiation: {
          support:
            "Pre-highlight five key quotations and provide a PEEL frame with the point already written.",
          core: "Students select their own quotation and write a complete PEEL paragraph.",
          stretch:
            "Students analyse how Owen's use of half-rhyme creates a specific emotional effect and why full rhyme would undermine his message.",
        },
        resources: [
          "Printed copy of 'Exposure'",
          "Pre-highlighted version (support tier)",
          "Context card: Owen and WWI",
        ],
      },
    ],
    plenaryActivity: {
      title: "Attitude Spectrum & Comparison Sentence",
      duration: "10 minutes",
      instructions:
        "Draw a spectrum on the board: 'War is glorious' on one end, 'War is futile' on the other. Students place each poem on the spectrum and justify their positioning to a partner. Then write one comparison sentence: 'While Tennyson presents the soldiers as _____, Owen presents them as _____, reflecting their different purposes of _____ and _____.' Share two or three examples.",
      differentiation: {
        support:
          "Use the sentence frame with word options provided.",
        core: "Complete the sentence frame with their own vocabulary and reasoning.",
        stretch:
          "Write two to three sentences without the frame, including a contextual explanation for the different attitudes.",
      },
    },
    homework:
      "Write a comparative paragraph (150-200 words) answering: 'Compare how Tennyson and Owen present the experience of soldiers in war.' Include at least one quotation from each poem and one piece of contextual knowledge.",
    worksheetQuestions: [
      {
        question:
          "How does the rhythm of 'The Charge of the Light Brigade' reflect its subject matter?",
        lines: 5,
        modelAnswer:
          "Tennyson uses dactylic metre — a stressed syllable followed by two unstressed syllables — in 'Half a league, half a league, half a league onward'. This creates a galloping rhythm that mimics the sound of horses charging, immersing the reader in the energy and momentum of the cavalry attack. The relentless rhythm also suggests the soldiers' unquestioning obedience — they charge forward without hesitation.",
        marks: 4,
      },
      {
        question:
          "Analyse the effect of the refrain 'But nothing happens' in 'Exposure'.",
        lines: 5,
        modelAnswer:
          "The refrain 'But nothing happens' is repeated at the end of multiple stanzas, creating a sense of anti-climax and monotonous despair. Owen shows that the greatest suffering in war is not always the battle itself, but the agonising wait in freezing conditions with no purpose or progress. The short, blunt sentence contrasts with the rich imagery in each stanza, deflating any sense of hope and reinforcing the futility of the soldiers' situation.",
        marks: 4,
      },
      {
        question:
          "Explain how Owen personifies nature as an enemy in 'Exposure'. Use two quotations.",
        lines: 6,
        modelAnswer:
          "Owen writes that 'merciless iced east winds that knive us' — the verb 'knive' personifies the wind as a deliberate attacker, and 'merciless' suggests nature has agency and cruelty. Later, 'Dawn massing in the east her melancholy army' personifies dawn as a military force gathering to attack, which is deeply ironic since dawn should represent hope. Owen's purpose is to show that nature, not the enemy soldiers, is the real killer in the trenches.",
        marks: 5,
      },
      {
        question:
          "Compare the attitudes to duty and sacrifice in 'The Charge of the Light Brigade' and 'Exposure'.",
        lines: 8,
        modelAnswer:
          "Tennyson presents duty as noble and admirable. 'Theirs not to reason why, / Theirs but to do and die' elevates the soldiers' obedience into a form of heroism — they follow orders despite knowing they will likely die. The imperative 'Honour the Light Brigade' in the final stanza commands the reader to respect their sacrifice. In contrast, Owen presents duty as meaningless suffering. The rhetorical question 'What are we doing here?' suggests the soldiers themselves cannot see the point of their sacrifice. While Tennyson, as Poet Laureate, had a public duty to memorialise the soldiers, Owen wrote from personal experience to challenge exactly this kind of glorification.",
        marks: 8,
      },
      {
        question:
          "Why is context essential when comparing these two poems?",
        lines: 5,
        modelAnswer:
          "Tennyson wrote in 1854 as Poet Laureate in response to a newspaper report — he had not witnessed the battle himself. His purpose was public memorialisation. Owen wrote from the trenches of WWI in 1917-18, having witnessed the horror first-hand. Understanding this context explains why their attitudes to war differ so dramatically: Tennyson could romanticise the charge, while Owen, suffering from shell shock, felt a moral duty to expose the reality of warfare.",
        marks: 4,
      },
      {
        question:
          "How does Owen's use of half-rhyme in 'Exposure' differ from Tennyson's use of full rhyme, and what effect does this create?",
        lines: 5,
        modelAnswer:
          "Tennyson uses full rhyme and a strong rhythmic pattern to create a sense of energy, unity, and purpose that reflects the soldiers' charge. Owen deliberately uses half-rhyme (e.g. 'wire/war', 'snow/renew') which creates a dissonant, unsettling sound. The near-miss of the rhyme mirrors the soldiers' sense that something is fundamentally wrong — the world is out of joint. Full rhyme would create a sense of resolution and harmony that would contradict Owen's message of futility and suffering.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "This is a high-contrast pairing that works well for teaching comparison skills — the poems share the subject of war but differ in attitude, form, and context.",
      "Be sensitive to students who may have family members in the armed forces.",
      "The dactylic metre in 'The Charge of the Light Brigade' is best demonstrated through choral reading.",
      "Owen's half-rhyme can be tricky for students to identify — consider a brief phonics exercise comparing full and half-rhyme before the main activity.",
      "This lesson pairs with Lesson 4 (Bayonet Charge & Remains) to build a war poetry cluster.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language, form, structure",
      "AO3: Context",
      "Comparison writing",
      "Poetic terminology",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 4: Bayonet Charge & Remains
  // ─────────────────────────────────────────────
  {
    id: "ppc-04-bayonet-remains",
    title: "Bayonet Charge & Remains: The Reality of Conflict",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Hughes presents the terror and chaos of a soldier's charge in 'Bayonet Charge'",
      "Analyse how Armitage presents the psychological aftermath of killing in 'Remains'",
      "Compare how both poets use structure and voice to convey the reality of conflict",
      "Evaluate how these poems challenge romanticised views of warfare",
    ],
    successCriteria: [
      "I can analyse the use of in medias res and disrupted rhythm in 'Bayonet Charge'",
      "I can explain how the colloquial voice in 'Remains' conveys guilt and trauma",
      "I can write a comparative paragraph on the reality of conflict across both poems",
      "I can connect both poems to their contexts and the poets' purposes",
    ],
    keywords: [
      "in medias res",
      "enjambment",
      "caesura",
      "colloquial",
      "PTSD",
      "trauma",
      "guilt",
      "psychological conflict",
      "immediacy",
    ],
    starterActivity: {
      title: "Before, During, After",
      duration: "7 minutes",
      instructions:
        "Display three headings: 'Before Battle', 'During Battle', 'After Battle'. Students write one word or phrase for what a soldier might think or feel at each stage. Teacher takes feedback and explains that today's poems focus on two of these stages — 'Bayonet Charge' captures the terrifying moment of battle itself, while 'Remains' explores the haunting aftermath. Introduce the idea that both poems strip away any glory from conflict.",
      differentiation: {
        support:
          "Provide emotion word cards to select from for each stage.",
        core: "Students generate their own words and justify their choices.",
        stretch:
          "Students predict which stage would be hardest to write about and why — linking to the challenge poets face in representing war.",
      },
      resources: [
        "Three-column slide",
        "Emotion word cards (support tier)",
      ],
    },
    mainActivities: [
      {
        title: "Analysis: Bayonet Charge by Ted Hughes",
        duration: "18 minutes",
        instructions:
          "Read the poem aloud with urgency, reflecting the breathless pace. Students annotate focusing on: (1) in medias res opening — 'Suddenly he awoke and was running' — throws the reader into the chaos without preparation; (2) the disruption of patriotic ideals — 'King, honour, human dignity, etcetera / Dropped like luxuries'; (3) visceral imagery — 'his foot hung like / Statuary in mid-stride', the hare 'rolled like a flame'; (4) the shift from physical action to frozen, philosophical doubt in stanza two, then back to animalistic survival in stanza three. Students write a PEEL paragraph. Context: Hughes was influenced by his father's WWI experiences and the wider culture of war that shaped post-war Britain. The poem is not about a specific conflict but about the universal terror of combat.",
        differentiation: {
          support:
            "Provide a stanza-by-stanza summary alongside the poem and a PEEL frame.",
          core: "Students annotate and write a PEEL paragraph on their chosen quotation.",
          stretch:
            "Students analyse the symbolic significance of the hare — what does it represent and why does Hughes include it?",
        },
        resources: [
          "Printed copy of 'Bayonet Charge'",
          "Stanza summary sheet (support tier)",
          "Context card: Ted Hughes",
        ],
      },
      {
        title: "Analysis: Remains by Simon Armitage",
        duration: "18 minutes",
        instructions:
          "Read 'Remains' aloud using a conversational, soldier-telling-a-story tone. Students annotate focusing on: (1) the colloquial, anecdotal voice — 'On another occasion', 'probably armed, possibly not' — mimicking a soldier recounting events; (2) the graphic imagery of the killing — 'I see broad daylight on the other side' — the bullet passing through the body; (3) the shift from collective action ('we') to isolated guilt ('I') in the second half; (4) the haunting final lines — 'his bloody life in my bloody hands' — the double meaning of 'bloody' (literal blood and the swear word expressing anguish). Students write a PEEL paragraph. Context: Based on a real soldier's testimony from the Iraq War, collected in Armitage's documentary 'The Not Dead'. The poem explores PTSD and moral injury.",
        differentiation: {
          support:
            "Provide a dual-coded annotation (images alongside key quotations) and a PEEL frame.",
          core: "Students annotate independently and write a PEEL paragraph.",
          stretch:
            "Students analyse how Armitage blurs the line between physical and psychological conflict — at what point does the poem shift from external action to internal torment?",
        },
        resources: [
          "Printed copy of 'Remains'",
          "Dual-coded annotation sheet (support tier)",
          "Context card: Armitage and 'The Not Dead'",
        ],
      },
    ],
    plenaryActivity: {
      title: "Comparative Venn Diagram & Key Sentence",
      duration: "10 minutes",
      instructions:
        "Students complete a Venn diagram comparing 'Bayonet Charge' and 'Remains' (similarities in the overlap, differences in the outer sections). They then convert one overlap point into a comparative sentence using 'Both Hughes and Armitage...' and one difference into a sentence using 'However, while Hughes... Armitage...'. Share examples.",
      differentiation: {
        support:
          "Provide a partially completed Venn diagram with prompts in each section.",
        core: "Students complete the Venn diagram and write both sentences independently.",
        stretch:
          "Students write a mini-paragraph weaving together a similarity and a difference in one cohesive response.",
      },
    },
    homework:
      "Answer in 200 words: 'How do Hughes and Armitage challenge the idea that war is glorious?' Refer to specific language choices and contextual knowledge.",
    worksheetQuestions: [
      {
        question:
          "What is 'in medias res' and how does Hughes use it in 'Bayonet Charge'?",
        lines: 5,
        modelAnswer:
          "In medias res means 'into the middle of things' — beginning a narrative in the midst of the action. Hughes opens with 'Suddenly he awoke and was running', plunging the reader directly into the terrifying moment of the charge without warning or preparation. This mirrors the soldier's own experience — there is no time to think or prepare, only to react. It creates immediacy and panic from the very first line.",
        marks: 4,
      },
      {
        question:
          "Analyse the effect of 'King, honour, human dignity, etcetera / Dropped like luxuries' in 'Bayonet Charge'.",
        lines: 5,
        modelAnswer:
          "Hughes lists the abstract ideals that might motivate a soldier to fight — 'King, honour, human dignity' — but the dismissive 'etcetera' undermines them, suggesting they are meaningless clichés. The simile 'Dropped like luxuries' implies that in the reality of combat, these noble concepts are the first things abandoned — they are unnecessary extras, not essential to survival. Hughes challenges patriotic narratives by showing that war reduces humans to raw, animal instinct.",
        marks: 5,
      },
      {
        question:
          "How does Armitage use pronouns to show the soldier's growing isolation in 'Remains'?",
        lines: 5,
        modelAnswer:
          "The poem begins with collective pronouns — 'we get sent out', 'all three of us' — suggesting shared responsibility for the killing. However, as the poem progresses and guilt sets in, the pronoun shifts to 'I': 'I see broad daylight on the other side', 'his bloody life in my bloody hands'. This shift shows the soldier becoming psychologically isolated — while the physical act was shared, the guilt and trauma are his alone to bear, reflecting the isolating nature of PTSD.",
        marks: 5,
      },
      {
        question:
          "Compare how Hughes and Armitage present the psychological impact of conflict.",
        lines: 8,
        modelAnswer:
          "Hughes presents the psychological impact as occurring in the moment of combat. In stanza two, the soldier freezes mid-stride — 'his foot hung like / Statuary in mid-stride' — as his mind catches up with his body and he questions why he is fighting. The simile compares him to a statue, suggesting he is paralysed by doubt. Armitage, in contrast, presents the psychological impact as a long-term haunting. The soldier in 'Remains' replays the killing endlessly — 'his bloody life in my bloody hands' — and the guilt follows him home. While Hughes shows conflict destroying rational thought in the moment, Armitage shows it destroying peace of mind long after the event, reflecting the modern understanding of PTSD.",
        marks: 8,
      },
      {
        question:
          "What is the significance of the double meaning of 'bloody' in the final line of 'Remains'?",
        lines: 4,
        modelAnswer:
          "The word 'bloody' works on two levels: literally, it refers to the dead man's blood that the soldier cannot wash from his hands (echoing Lady Macbeth's guilt); figuratively, it functions as a swear word expressing the soldier's frustration, anger, and despair. This double meaning captures the collision of physical violence and emotional torment that defines the soldier's experience of PTSD.",
        marks: 4,
      },
      {
        question:
          "How does the context of 'Remains' add to the reader's understanding of the poem?",
        lines: 5,
        modelAnswer:
          "The poem is based on a real soldier's testimony from the Iraq War, collected by Armitage for the documentary 'The Not Dead'. Knowing this adds weight to the colloquial, conversational tone — it reads like a real person telling a real story, which makes the horror more immediate and harder to dismiss. It also highlights the ongoing issue of PTSD among veterans and suggests Armitage's purpose was to give voice to soldiers whose suffering is often invisible.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson builds on the war poetry cluster from Lesson 3. Briefly recap Tennyson and Owen's attitudes before introducing Hughes and Armitage.",
      "The graphic content of both poems requires sensitivity. Check in with students and offer alternative tasks if needed.",
      "'Remains' works particularly well when read aloud in a flat, conversational tone to capture the soldier's voice.",
      "The Venn diagram plenary is a useful formative tool — photograph and keep for Lesson 8 revision.",
      "Consider linking 'Remains' to Macbeth ('Will all great Neptune's ocean wash this blood clean from my hand?') for students studying both texts.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language, form, structure",
      "AO3: Context",
      "Comparison writing",
      "Inference and interpretation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 5: Kamikaze & The Emigrée
  // ─────────────────────────────────────────────
  {
    id: "ppc-05-kamikaze-emigree",
    title: "Kamikaze & The Emigrée: Memory, Identity & Loss",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Garland presents the conflict between duty and survival in 'Kamikaze'",
      "Analyse how Rumens presents the power of memory and the pain of exile in 'The Emigrée'",
      "Compare how both poets explore the tension between personal identity and external forces",
      "Evaluate how memory functions as both a source of power and a source of pain in each poem",
    ],
    successCriteria: [
      "I can analyse how Garland uses the daughter's narrative voice to explore shame and sympathy",
      "I can explain how Rumens uses light imagery to present memory as a positive force",
      "I can write a comparative paragraph on memory and identity across both poems",
      "I can link analysis to the poets' contexts and purposes",
    ],
    keywords: [
      "kamikaze",
      "honour",
      "shame",
      "exile",
      "emigrée",
      "nostalgia",
      "identity",
      "memory",
      "imagery",
      "narrative voice",
    ],
    starterActivity: {
      title: "Memory Box",
      duration: "7 minutes",
      instructions:
        "Ask students: 'If you had to leave your home forever and could only take one memory with you, what would it be?' Students write their answer on a sticky note and add it to the class 'Memory Box' display on the board. Discuss: Why are memories so powerful? Can a memory keep you connected to a place or identity even when everything else has changed? Teacher introduces the idea that both poems today explore how memory shapes identity — sometimes as a source of strength, sometimes as a source of pain.",
      differentiation: {
        support:
          "Provide prompt: 'My strongest memory is ___ because ___.'",
        core: "Students write freely and share with a partner before adding to the display.",
        stretch:
          "Students consider whether a memory can be both comforting and painful at the same time — and why.",
      },
      resources: ["Sticky notes", "Memory Box display board"],
    },
    mainActivities: [
      {
        title: "Analysis: Kamikaze by Beatrice Garland",
        duration: "18 minutes",
        instructions:
          "Read 'Kamikaze' aloud, with different students reading the narrator's voice and the italicised sections. Students annotate focusing on: (1) the third-person narrative frame — the daughter tells her father's story, suggesting distance and unresolved emotion; (2) the vivid natural imagery — 'a shaved, tousled, samurai sword' of fish, 'the loose silver of whitebait' — beauty that pulls the pilot back to life; (3) the devastating social consequences — 'my mother never spoke again / in his presence' — the living death of rejection; (4) the ambiguous ending — 'he must have wondered / which had been the better way to die' — was turning back an act of courage or cowardice? Students write a PEEL paragraph. Context: Japanese kamikaze pilots in WWII were expected to sacrifice their lives for the Emperor. Turning back brought profound shame upon the family.",
        differentiation: {
          support:
            "Provide a guided reading sheet with comprehension questions for each stanza before annotation.",
          core: "Students annotate and write a PEEL paragraph independently.",
          stretch:
            "Students evaluate whose perspective is most sympathetic — the father, the mother, or the daughter — and consider why Garland chose the daughter as narrator.",
        },
        resources: [
          "Printed copy of 'Kamikaze'",
          "Guided reading sheet (support tier)",
          "Context card: Kamikaze pilots in WWII Japan",
        ],
      },
      {
        title: "Analysis: The Emigrée by Carol Rumens",
        duration: "18 minutes",
        instructions:
          "Read 'The Emigrée' aloud slowly, allowing the lyrical quality to come through. Students annotate focusing on: (1) the extended light imagery — 'sunlight-clear', 'bright, filled paperweight' — memory preserves the homeland in idealised, radiant terms; (2) the contrast between the personal memory and external reality — 'They accuse me of being dark in their free city' — the emigrée is treated with suspicion; (3) the personification of the city — 'my city takes me dancing' — memory is alive and active, not passive; (4) the defiant final tone — 'I comb out my hair and, in front of the stranger, rehearse departure' — suggesting both vulnerability and resilience. Students write a PEEL paragraph. Context: Rumens has written about displacement and exile. The poem may reference Cold War Eastern Europe but is deliberately unspecific, making it universal.",
        differentiation: {
          support:
            "Provide a quotation bank with the six most important quotations and one-line explanations.",
          core: "Students annotate and write a PEEL paragraph independently.",
          stretch:
            "Students analyse why Rumens keeps the homeland deliberately unnamed and evaluate the effect of this ambiguity on the reader.",
        },
        resources: [
          "Printed copy of 'The Emigrée'",
          "Quotation bank (support tier)",
          "Context card: Carol Rumens and displacement poetry",
        ],
      },
    ],
    plenaryActivity: {
      title: "Memory as Power or Pain? Comparative Table",
      duration: "10 minutes",
      instructions:
        "Students complete a two-column table: 'Memory as Power' and 'Memory as Pain', adding quotations and ideas from both poems into the relevant column. Some quotations may appear in both columns. Students then write one comparative sentence using the structure: 'In both poems, memory is presented as ___, however in Kamikaze it _____ while in The Emigrée it _____.' Share and discuss.",
      differentiation: {
        support:
          "Provide quotations pre-selected; students sort them into the columns.",
        core: "Students select their own quotations and write the comparative sentence.",
        stretch:
          "Students write a comparative paragraph arguing whether memory is ultimately more powerful or more painful in each poem.",
      },
    },
    homework:
      "Write a diary entry from the perspective of either the kamikaze pilot's daughter or the emigrée, exploring how memory shapes their sense of identity. 200-300 words.",
    worksheetQuestions: [
      {
        question:
          "How does Garland use the daughter's narrative voice to create sympathy for the father in 'Kamikaze'?",
        lines: 5,
        modelAnswer:
          "The daughter narrates in the third person, creating distance that suggests she is still processing her father's decision. Her description of his journey — the beautiful imagery of 'the loose silver of whitebait' — shows she understands why he turned back, creating sympathy for his choice. Yet she also reveals the consequences: 'my mother never spoke again in his presence'. The dual perspective creates sympathy because the reader sees both the beauty of his choice to live and the cruelty of its social consequences.",
        marks: 5,
      },
      {
        question:
          "Analyse the effect of the light imagery in 'The Emigrée'. Use two quotations.",
        lines: 6,
        modelAnswer:
          "Rumens uses 'sunlight-clear' to describe the emigrée's memory of her homeland, suggesting that memory preserves it in a permanent, idealised glow — untouched by the reality of what has happened since. The 'bright, filled paperweight' extends this, comparing the memory to a beautiful, solid object that cannot be broken or altered. The light imagery contrasts with the 'dark' accusations the emigrée faces in her new city, suggesting that her inner world of memory is luminous and sustaining even when her external reality is hostile.",
        marks: 5,
      },
      {
        question:
          "Compare how memory functions as a source of conflict in both 'Kamikaze' and 'The Emigrée'.",
        lines: 8,
        modelAnswer:
          "In 'Kamikaze', the pilot's memories of natural beauty — 'a flock of dark-winged fishing boats' and children playing — conflict with his sense of duty to die for the Emperor. His memories of life pull him back from death, but this act of survival creates a new conflict: social rejection so complete that 'he must have wondered which had been the better way to die'. In 'The Emigrée', the speaker's childhood memories of her homeland conflict with its present reality — it may now be 'at war' or 'sick with tyrants' — yet she refuses to let external events overwrite her personal memory. While memory in 'Kamikaze' creates devastating consequences, in 'The Emigrée' it becomes an act of resistance and self-preservation.",
        marks: 8,
      },
      {
        question:
          "What does the ending of 'Kamikaze' suggest about the consequences of the pilot's decision?",
        lines: 5,
        modelAnswer:
          "The final lines — 'he must have wondered / which had been the better way to die' — are devastatingly ambiguous. The 'better way to die' implies that his life after returning was itself a form of death: shunned by his family and community, he was socially dead even while physically alive. Garland suggests that in a culture where honour demands sacrifice, choosing life can be a punishment worse than the death he avoided.",
        marks: 4,
      },
      {
        question:
          "How does Rumens present the emigrée's homeland as a living presence in the poem?",
        lines: 5,
        modelAnswer:
          "Rumens personifies the city as a companion: 'my city takes me dancing through the city of walls'. This personification transforms memory from a passive recollection into an active, living relationship. The homeland is not simply remembered — it accompanies the speaker, offering comfort and connection. The phrase 'I comb out my hair' before this meeting suggests preparation, as if she is getting ready for a reunion with a loved one, reinforcing the deep emotional bond between the speaker and her lost home.",
        marks: 4,
      },
      {
        question:
          "Why might both poets have chosen female perspectives or voices in these poems?",
        lines: 5,
        modelAnswer:
          "In 'Kamikaze', the daughter's voice allows Garland to show the ripple effects of conflict on families — not just the soldier but those left behind. The female perspective adds emotional depth and a domestic dimension to a military story. In 'The Emigrée', the female speaker navigating a hostile new city while holding onto her identity may reflect the particular vulnerability of displaced women. Both poets use female voices to explore the personal, emotional dimensions of power and conflict that are often overlooked in favour of military narratives.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This pairing works well because both poems deal with memory, identity, and the personal costs of conflict — but from very different cultural contexts.",
      "The 'Kamikaze' context requires sensitivity. Emphasise the human story, not the politics of WWII Japan.",
      "The Emigrée's deliberate ambiguity is a strength for teaching — encourage students to resist the urge to pin down a single 'correct' reading.",
      "The creative homework (diary entry) allows students to demonstrate empathy and understanding in a lower-stakes format before formal essay writing in Lesson 8.",
      "This lesson links forward to Lesson 7 (Checking Out Me History & Tissue) through the theme of identity.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language and imagery analysis",
      "AO3: Context",
      "Comparison writing",
      "Empathy and interpretation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 6: Storm on the Island & London
  // ─────────────────────────────────────────────
  {
    id: "ppc-06-storm-london",
    title: "Storm on the Island & London: Power of Place",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Heaney presents the power of nature and the vulnerability of human communities in 'Storm on the Island'",
      "Analyse how Blake presents the oppressive power structures of London and their effect on ordinary people",
      "Compare how both poets use place as a lens through which to explore power and control",
      "Evaluate the different types of power each poet presents: natural versus institutional",
    ],
    successCriteria: [
      "I can analyse how Heaney uses extended metaphor and military imagery to present the storm",
      "I can explain how Blake uses repetition and sensory imagery to convey suffering in London",
      "I can compare how both poems present the relationship between people and the places they inhabit",
      "I can embed contextual knowledge about both poets into my analysis",
    ],
    keywords: [
      "blank verse",
      "extended metaphor",
      "charter'd",
      "anaphora",
      "synecdoche",
      "institutional power",
      "nature's power",
      "Troubles",
      "Industrial Revolution",
    ],
    starterActivity: {
      title: "Place and Power: Where Do You Feel Powerless?",
      duration: "7 minutes",
      instructions:
        "Students reflect: 'Think of a place where you have felt small, vulnerable, or powerless. What made you feel that way — was it the weather, the people, the buildings, the rules?' Students write a short description (3-4 sentences) capturing the feeling. Share in pairs. Teacher introduces the idea that both poems today explore how places can make people feel powerless — whether it is an island battered by storms or a city controlled by corrupt institutions.",
      differentiation: {
        support:
          "Provide a sentence starter: 'I felt powerless when I was at ___ because ___.'",
        core: "Students write independently and share.",
        stretch:
          "Students consider whether the place itself has power or whether it is the systems and forces within the place that hold power.",
      },
      resources: ["Reflective writing prompt slide"],
    },
    mainActivities: [
      {
        title: "Analysis: Storm on the Island by Seamus Heaney",
        duration: "18 minutes",
        instructions:
          "Read the poem aloud, emphasising the conversational opening and the escalating tension. Students annotate focusing on: (1) the confident opening — 'We are prepared: we build our houses squat' — soon undermined by the storm's power; (2) military imagery — 'It pummels your house', 'spits like a tame cat / Turned savage', 'We are bombarded by the empty air' — nature as an attacking force; (3) the hidden word 'Stormont' in the title (Storm on the Island) — a possible political allegory for the Troubles in Northern Ireland; (4) blank verse form — the lack of rhyme creates unease and reflects the relentless, unpredictable nature of the storm. Students write a PEEL paragraph. Context: Heaney grew up in Northern Ireland during the Troubles. The poem can be read as both a literal account of island life and a political allegory about living under threat.",
        differentiation: {
          support:
            "Provide a dual-reading chart: 'Literal meaning' and 'Possible political meaning' side by side for key quotations.",
          core: "Students annotate and write a PEEL paragraph on a quotation of their choice.",
          stretch:
            "Students evaluate the 'Stormont' reading — how convincing is the political allegory and does it change the poem's meaning?",
        },
        resources: [
          "Printed copy of 'Storm on the Island'",
          "Dual-reading chart (support tier)",
          "Context card: Heaney and the Troubles",
        ],
      },
      {
        title: "Analysis: London by William Blake",
        duration: "18 minutes",
        instructions:
          "Read 'London' aloud with emphasis on the repetitive, incantatory rhythm. Students annotate focusing on: (1) 'charter'd' — repeated to show everything in London is controlled, owned, mapped out — even the river, which should be free; (2) the anaphora of 'In every' — 'In every cry of every Man, / In every Infants cry of fear, / In every voice: in every ban' — building an overwhelming sense of universal suffering; (3) 'mind-forg'd manacles' — a powerful metaphor suggesting people are imprisoned by their own acceptance of oppression; (4) the final stanza — 'the youthful Harlots curse' blighting 'the new-born Infant's tear' — corruption passes from one generation to the next. Students write a PEEL paragraph. Context: Blake was a Romantic poet and social critic writing during the Industrial Revolution. He opposed the Church, monarchy, and institutions that exploited the poor.",
        differentiation: {
          support:
            "Provide a stanza-by-stanza paraphrase alongside the poem and highlight three key quotations to analyse.",
          core: "Students annotate and write a PEEL paragraph independently.",
          stretch:
            "Students compare Blake's 'mind-forg'd manacles' to modern forms of institutional control — is Blake's message still relevant today?",
        },
        resources: [
          "Printed copy of 'London'",
          "Stanza paraphrase sheet (support tier)",
          "Context card: Blake and the Industrial Revolution",
        ],
      },
    ],
    plenaryActivity: {
      title: "Power Grid Comparison",
      duration: "10 minutes",
      instructions:
        "Students complete a 2x2 grid: rows are 'Storm on the Island' and 'London'; columns are 'Type of Power' and 'Effect on People'. Fill in each cell with quotations and analysis. Then write a comparison sentence: 'Both Heaney and Blake present places where people are _____, however Heaney's power is _____ while Blake's is _____.' Share and refine.",
      differentiation: {
        support:
          "Grid is partially completed with prompts in each cell.",
        core: "Students complete the grid and write the comparative sentence independently.",
        stretch:
          "Students add a third row comparing their own example from the starter activity to the two poems.",
      },
    },
    homework:
      "Write a comparative paragraph (150-200 words): 'Compare how Heaney and Blake present places where people feel powerless.' Use PEEL structure and embed context.",
    worksheetQuestions: [
      {
        question:
          "Analyse the effect of the military imagery in 'Storm on the Island'. Use two examples.",
        lines: 6,
        modelAnswer:
          "Heaney describes the wind as something that 'pummels your house' — the verb 'pummels' implies repeated, aggressive blows as if the storm is physically attacking the community. Later, 'We are bombarded by the empty air' uses the military term 'bombarded' to present the storm as a siege, yet the paradox of being attacked by 'empty air' emphasises the invisible, intangible nature of the threat. If read as a political allegory, the military imagery could represent the ever-present threat of violence during the Troubles in Northern Ireland.",
        marks: 5,
      },
      {
        question:
          "What does Blake mean by 'mind-forg'd manacles' in 'London' and why is this phrase so powerful?",
        lines: 5,
        modelAnswer:
          "'Mind-forg'd manacles' is a metaphor meaning chains created by the mind — people are imprisoned not by physical restraints but by their acceptance of oppression. Blake suggests that institutions (Church, monarchy, government) have conditioned people to accept their suffering as normal. The image is powerful because it implies that liberation requires not just political change but a revolution in thinking — people must first recognise their mental chains before they can break free.",
        marks: 5,
      },
      {
        question:
          "Compare how Heaney and Blake present the relationship between people and their environment.",
        lines: 8,
        modelAnswer:
          "In 'Storm on the Island', people are physically at the mercy of nature — despite being 'prepared' with 'squat' houses and 'rock', the storm overwhelms them until they are 'bombarded by the empty air'. The community is resilient but ultimately vulnerable. In 'London', Blake presents people as trapped within a man-made environment of control: every street is 'charter'd', every voice carries 'marks of weakness, marks of woe'. While Heaney's community faces a natural force they cannot control, Blake's Londoners face institutional oppression that they could resist if they broke their 'mind-forg'd manacles'. Both poets show people diminished by their environment, but Blake implies the possibility of change while Heaney suggests the storm — and perhaps the Troubles — is a force that simply must be endured.",
        marks: 8,
      },
      {
        question:
          "How does the hidden word 'Stormont' affect your reading of 'Storm on the Island'?",
        lines: 5,
        modelAnswer:
          "The letters of the title spell 'Stormont' — the seat of the Northern Irish government during the Troubles. This hidden reference suggests the poem can be read as a political allegory: the 'storm' represents the threat of violence and political instability, the islanders represent the people of Northern Ireland living under constant fear, and the 'empty air' could symbolise the intangible yet terrifying presence of sectarian tension. This dual reading adds depth to the poem and reflects Heaney's characteristic technique of embedding political commentary within descriptions of the natural landscape.",
        marks: 4,
      },
      {
        question:
          "How does Blake use repetition in 'London' to build his argument?",
        lines: 5,
        modelAnswer:
          "Blake repeats 'In every' four times in the second stanza — 'In every cry of every Man, / In every Infants cry of fear, / In every voice: in every ban'. This anaphora creates a cumulative effect, hammering home the idea that suffering in London is universal and inescapable. The repetition of 'every' emphasises that no one is exempt — men, infants, and all voices are affected. The relentless rhythm mirrors the relentless oppression Blake is describing.",
        marks: 4,
      },
      {
        question:
          "Which poem do you find more powerful in its presentation of place — 'Storm on the Island' or 'London'? Explain your choice with evidence.",
        lines: 6,
        modelAnswer:
          "Answers will vary. A strong response might argue: 'London' is more powerful because Blake identifies specific, man-made causes of suffering — 'charter'd streets', 'the Church', 'the Palace' — which makes his critique politically actionable. The final image of the 'youthful Harlots curse' blighting a newborn child is devastating because it shows how corruption passes through generations with no escape. Alternatively, 'Storm on the Island' is more powerful because the threat is invisible and unpredictable — 'bombarded by the empty air' — which captures the psychological toll of living in fear more effectively.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The 'Stormont' reading is widely debated — present it as one interpretation rather than a definitive reading.",
      "Blake's 'London' is rich with political content. Be prepared to explain the role of the Church, monarchy, and chartered companies in 18th-century oppression.",
      "Both poems benefit from being read aloud — Heaney's conversational blank verse and Blake's rhythmic quatrains are best appreciated through performance.",
      "This lesson's 'Power of Place' cluster connects to The Prelude (Wordsworth) if you wish to extend the pairing.",
      "The Power Grid plenary template can be reused for other comparison pairings throughout the unit.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language, form, structure",
      "AO3: Context",
      "Comparison writing",
      "Allegorical interpretation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 7: Checking Out Me History & Tissue
  // ─────────────────────────────────────────────
  {
    id: "ppc-07-history-tissue",
    title: "Checking Out Me History & Tissue: Identity & Power Structures",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Agard challenges Eurocentric education and reclaims Black Caribbean identity in 'Checking Out Me History'",
      "Analyse how Dharker uses the extended metaphor of tissue/paper to explore how human structures are fragile and temporary",
      "Compare how both poets challenge established power structures through form, voice, and imagery",
      "Evaluate the different strategies each poet uses to assert identity against systems of control",
    ],
    successCriteria: [
      "I can explain how Agard uses phonetic spelling and Caribbean dialect to assert cultural identity",
      "I can analyse how Dharker uses the motif of paper to represent both fragility and power",
      "I can write a comparative paragraph on how both poets challenge power structures",
      "I can link analysis to contexts of post-colonial identity and globalisation",
    ],
    keywords: [
      "post-colonial",
      "identity",
      "dialect",
      "phonetic spelling",
      "extended metaphor",
      "Eurocentric",
      "reclamation",
      "power structures",
      "fragility",
      "globalisation",
    ],
    starterActivity: {
      title: "Whose History?",
      duration: "8 minutes",
      instructions:
        "Display two lists: List A contains Dick Whittington, 1066, Florence Nightingale, Guy Fawkes. List B contains Toussaint L'Ouverture, Nanny de Maroon, Mary Seacole, Shaka Zulu. Ask students: Which list were you taught about in school? Why might one list dominate over the other? Discuss the concept of 'whose stories get told' and how education can be a form of power. This leads directly into Agard's poem.",
      differentiation: {
        support:
          "Provide brief descriptions of the figures in both lists so all students can engage.",
        core: "Students discuss and form their own opinions about why one list dominates.",
        stretch:
          "Students consider who benefits from certain histories being taught and others being silenced — linking to the concept of institutional power.",
      },
      resources: [
        "Two-list display slide",
        "Figure description cards (support tier)",
      ],
    },
    mainActivities: [
      {
        title: "Analysis: Checking Out Me History by John Agard",
        duration: "18 minutes",
        instructions:
          "Read the poem aloud using Agard's Caribbean dialect — ideally play a recording of Agard performing it. Students annotate focusing on: (1) the alternating structure — sections in Standard English (the imposed history) versus sections in Caribbean dialect (the reclaimed history) — showing two competing identities; (2) phonetic spelling — 'Dem tell me', 'Bandage up me eye' — asserting Caribbean voice against colonial language; (3) the metaphor of blindness — 'Bandage up me eye with me own history' — colonial education blinds people to their own heritage; (4) the celebratory tone of the Caribbean history sections — Toussaint, Nanny de Maroon, Mary Seacole — presented with reverence and light imagery. Students write a PEEL paragraph. Context: Agard is a British-Guyanese poet who challenges post-colonial power dynamics. The poem critiques the Eurocentric British education system.",
        differentiation: {
          support:
            "Provide a colour-coded text (one colour for imposed history, another for reclaimed history) with guiding questions.",
          core: "Students annotate and write a PEEL paragraph independently.",
          stretch:
            "Students evaluate whether the poem's message is still relevant today — has the curriculum changed enough since Agard wrote this?",
        },
        resources: [
          "Printed copy of 'Checking Out Me History'",
          "Audio recording of Agard performing",
          "Colour-coded text (support tier)",
          "Context card: Agard and post-colonial writing",
        ],
      },
      {
        title: "Analysis: Tissue by Imtiaz Dharker",
        duration: "18 minutes",
        instructions:
          "Read 'Tissue' aloud carefully — this poem requires patience as its meaning builds slowly. Students annotate focusing on: (1) the extended metaphor of paper/tissue — representing human records, borders, money, identity documents — all fragile; (2) the Quran reference — 'Paper that lets the light / shine through' — sacred texts have an enduring, luminous quality; (3) the idea that human-made structures (borders, buildings, economies) are as impermanent as paper — 'turned into your skin' — the final stanza suggests that human life itself is the thinnest tissue of all; (4) the enjambment throughout, with sentences flowing across stanzas, reflecting the paper-thin boundaries the poem describes. Students write a PEEL paragraph. Context: Dharker was born in Pakistan, raised in Glasgow, and lives between India and England. Her poetry explores borders, identity, and the structures humans create to organise the world.",
        differentiation: {
          support:
            "Provide a stanza-by-stanza summary and a quotation bank with guided analysis prompts.",
          core: "Students annotate and write a PEEL paragraph independently.",
          stretch:
            "Students analyse the final stanza shift — why does Dharker move from paper to skin, and what does this suggest about the relationship between human identity and the structures we create?",
        },
        resources: [
          "Printed copy of 'Tissue'",
          "Stanza summary sheet (support tier)",
          "Context card: Dharker and identity",
        ],
      },
    ],
    plenaryActivity: {
      title: "Challenge the System: Comparative Exit Ticket",
      duration: "10 minutes",
      instructions:
        "Students write on their exit ticket: 'Both Agard and Dharker challenge power structures. Agard challenges ___ by ___, while Dharker challenges ___ by ___. The most significant difference is ___.' Collect and read out two strong examples anonymously for class discussion.",
      differentiation: {
        support:
          "Provide the sentence frame with word options for each blank.",
        core: "Students complete the exit ticket independently.",
        stretch:
          "Students add a sentence evaluating which poet's challenge is more effective and why.",
      },
    },
    homework:
      "Write a response (150-200 words): 'How does either Agard or Dharker use their poem to challenge power?' Focus on specific language and structural choices, and include one piece of contextual knowledge.",
    worksheetQuestions: [
      {
        question:
          "How does Agard use the structure of 'Checking Out Me History' to convey his message?",
        lines: 5,
        modelAnswer:
          "Agard alternates between two types of section: Standard English stanzas describing the 'official' British history he was taught (Dick Whittington, 1066, Guy Fawkes) and Caribbean dialect stanzas celebrating the Black Caribbean history that was denied to him (Toussaint, Nanny de Maroon, Mary Seacole). This structural contrast visually and aurally represents the two competing identities — the imposed colonial identity and the authentic Caribbean identity. The poem's form itself becomes an act of reclamation.",
        marks: 5,
      },
      {
        question:
          "Analyse the effect of 'Bandage up me eye with me own history' in 'Checking Out Me History'.",
        lines: 5,
        modelAnswer:
          "The metaphor of bandaging the eye suggests that the colonial education system deliberately blinds people to their own heritage. The use of 'me own history' in Caribbean dialect is significant — the speaker's history belongs to them, yet it has been used as a tool of oppression ('bandage up'). The image implies both violence (bandaging a wound) and deliberate concealment (covering the eyes), suggesting that colonial education is not just incomplete but actively harmful.",
        marks: 5,
      },
      {
        question:
          "How does Dharker use the motif of paper to explore power in 'Tissue'?",
        lines: 6,
        modelAnswer:
          "Dharker presents paper as the material on which all human power structures are recorded: maps that define borders, receipts that track wealth, passports that control movement, and holy books that shape belief. By choosing paper — a fragile, easily torn material — as her central motif, Dharker suggests that all these structures of power are ultimately impermanent and artificial. The repeated emphasis on paper that 'lets the light shine through' implies that the most meaningful things are transparent and fragile, not solid and permanent.",
        marks: 5,
      },
      {
        question:
          "Compare how Agard and Dharker challenge power structures in their poems.",
        lines: 8,
        modelAnswer:
          "Agard challenges the power of the Eurocentric education system by directly confronting what he was taught — 'Dem tell me bout 1066 and all dat' — and asserting the Black Caribbean history that was suppressed. His use of Caribbean dialect is itself a challenge to the dominance of Standard English, reclaiming language as a tool of identity. Dharker takes a different approach, using the extended metaphor of paper to suggest that all human power structures — borders, economies, nations — are as fragile as tissue. While Agard's challenge is loud, angry, and specific (naming individuals and events), Dharker's is quiet, philosophical, and universal. Both poets ultimately argue that the structures humans create to organise and control are less permanent than we believe.",
        marks: 8,
      },
      {
        question:
          "Why is the use of Caribbean dialect important in 'Checking Out Me History'?",
        lines: 4,
        modelAnswer:
          "The dialect — 'Dem tell me', 'Bandage up me eye' — asserts Agard's Caribbean identity and challenges the dominance of Standard English, which represents colonial power. By writing in his own voice rather than the language of the coloniser, Agard performs the very act of reclamation the poem describes. The dialect is not 'incorrect' English — it is a deliberate, political choice that embodies the poem's message.",
        marks: 4,
      },
      {
        question:
          "What does the final stanza of 'Tissue' suggest about human identity?",
        lines: 5,
        modelAnswer:
          "The final stanza shifts from paper to skin — 'turned into your skin'. Dharker suggests that even the human body is a form of 'tissue' — fragile, temporary, and ultimately impermanent. This final image dissolves the boundary between the structures we create (maps, borders, documents) and the people who create them. It implies that human identity itself is as delicate as paper, and that we should hold our constructed categories (nationality, race, religion) lightly, recognising that they are human-made and not fixed or eternal.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Playing a recording of Agard performing this poem is extremely effective — his energy and conviction bring the text to life.",
      "'Tissue' is widely considered one of the more challenging poems in the anthology. Allow extra time for comprehension before analysis.",
      "The starter activity can provoke strong feelings about representation in education. Facilitate the discussion with sensitivity and openness.",
      "This pairing connects to Lesson 5 (identity) and offers a bridge to Lesson 8 (building comparison essays).",
      "Consider displaying examples of the different types of 'paper' Dharker references (maps, receipts, passports, religious texts) to make the extended metaphor concrete.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Language, form, structure",
      "AO3: Context",
      "Comparison writing",
      "Critical evaluation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 8: Building a Grade 8/9 Comparison Essay
  // ─────────────────────────────────────────────
  {
    id: "ppc-08-comparison-essay",
    title: "Comparing Poems: Building a Grade 8/9 Comparison Essay",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the mark scheme criteria for Grade 7, 8, and 9 in Paper 2 Section B",
      "Develop a strategic approach to structuring a comparison essay using the 'alternating method'",
      "Practise writing comparative analytical paragraphs with embedded AO1, AO2, and AO3",
      "Self-assess and peer-assess comparative paragraphs against the mark scheme",
    ],
    successCriteria: [
      "I can explain the difference between a Grade 5 and a Grade 8/9 comparison response",
      "I can structure a comparison essay using the alternating method (not the block method)",
      "I can write a comparative paragraph that integrates quotation analysis, subject terminology, comparison connectors, and context",
      "I can identify strengths and areas for improvement in my own and others' comparative writing",
    ],
    keywords: [
      "alternating method",
      "comparison connectors",
      "embedded quotation",
      "analytical verbs",
      "mark scheme",
      "perceptive",
      "conceptualised",
      "exploratory",
      "critical",
    ],
    starterActivity: {
      title: "Grade It: What Makes the Difference?",
      duration: "10 minutes",
      instructions:
        "Display two student responses (anonymised and teacher-written) to the same comparison question. Response A is a solid Grade 5 (separate paragraphs on each poem, some quotation, basic comparison). Response B is a Grade 8/9 (integrated comparison, embedded quotations, sophisticated terminology, contextual depth, exploratory tone). Students read both and discuss in pairs: What does Response B do that Response A does not? Teacher takes feedback and builds a checklist of 'Grade 8/9 ingredients' on the board: integrated comparison, embedded quotations, subject terminology (AO2), context (AO3), analytical verbs (suggests, implies, reflects, challenges, embodies), exploratory language (perhaps, arguably, it could be interpreted).",
      differentiation: {
        support:
          "Provide the checklist partially completed and ask students to find examples of each ingredient in Response B.",
        core: "Students identify the differences and contribute to building the checklist.",
        stretch:
          "Students rewrite one sentence from Response A to make it Grade 8/9 quality before the class discussion.",
      },
      resources: [
        "Response A and Response B handout",
        "Grade 8/9 ingredients checklist (partially completed for support tier)",
      ],
    },
    mainActivities: [
      {
        title: "The Alternating Method: Structure for Success",
        duration: "15 minutes",
        instructions:
          "Teach the 'alternating method' of comparison essay structure explicitly. Display a visual diagram: Introduction (brief, thesis-driven) → Paragraph 1: Theme/idea + Poem A analysis + comparison connector + Poem B analysis → Paragraph 2: Different aspect + Poem A + comparison + Poem B → Paragraph 3: Form/structure comparison → Paragraph 4 (optional): Context and evaluation → Conclusion. Model writing an introduction and topic sentence for a sample question: 'Compare how poets present the power of nature in Storm on the Island and one other poem.' Use The Prelude as the comparison poem. Students take notes on the structure and write their own topic sentences for each paragraph. Contrast this with the 'block method' (all of Poem A, then all of Poem B) and explain why the alternating method scores higher — it forces sustained comparison throughout.",
        differentiation: {
          support:
            "Provide a paragraph planner template with the structure pre-built and sentence starters for each section.",
          core: "Students use the visual diagram to plan their own essay structure with topic sentences.",
          stretch:
            "Students plan a conceptualised introduction that goes beyond naming the poems — e.g. 'Both poets explore the terrifying realisation that human beings are insignificant in the face of natural power.'",
        },
        resources: [
          "Alternating method structure diagram (projected and printed)",
          "Paragraph planner template (support tier)",
          "Sample question slide",
        ],
      },
      {
        title: "Comparative Paragraph Workshop",
        duration: "20 minutes",
        instructions:
          "Students write one full comparative paragraph (approximately 150 words) in response to the sample question. Display the 'Grade 8/9 ingredients checklist' and the comparative paragraph frame on the board for reference. After 15 minutes of writing, students swap paragraphs with a partner for peer assessment. Partners highlight: (green) effective comparison connectors, (yellow) embedded quotations with analysis, (pink) contextual links. Partners write one 'strength' and one 'next step' at the bottom. Students then have 5 minutes to revise their paragraph based on feedback.",
        differentiation: {
          support:
            "Use the full comparative paragraph frame: 'In [Poem A], [poet] presents [theme] as ___ through the use of [technique] in the quotation \"___\". This suggests ___. Similarly/In contrast, [Poem B] ___. [Poet B] uses [technique] to ___. Contextually, this reflects ___.'",
          core: "Students use the checklist as a guide but write with their own expression and structure.",
          stretch:
            "Students write without the frame and aim to include an evaluative sentence (e.g. 'Arguably, Heaney's presentation is more unsettling because...').",
        },
        resources: [
          "Grade 8/9 ingredients checklist (displayed)",
          "Comparative paragraph frame (support tier)",
          "Coloured highlighters for peer assessment",
          "Peer assessment feedback slips",
        ],
      },
    ],
    plenaryActivity: {
      title: "Gallery Walk: Exemplar Paragraphs",
      duration: "8 minutes",
      instructions:
        "Select four to five strong paragraphs (with student permission) and display them around the room or under the visualiser. Students circulate and read each one, placing a dot sticker next to the one they think is strongest. Class discussion: What makes the winning paragraph effective? Teacher summarises the key takeaways and reinforces the 'Grade 8/9 ingredients'.",
      differentiation: {
        support:
          "Students choose the paragraph they find clearest and explain why it helped them understand.",
        core: "Students choose the most effective paragraph and justify with reference to the checklist.",
        stretch:
          "Students identify what could still be improved even in the best paragraph — modelling the idea that writing can always be refined.",
      },
    },
    homework:
      "Write a full comparison essay (500-600 words) in response to: 'Compare how poets present the effects of conflict in Remains and one other poem from the anthology.' Use the alternating method and the Grade 8/9 checklist. This will be marked using the AQA mark scheme.",
    worksheetQuestions: [
      {
        question:
          "List four 'Grade 8/9 ingredients' that distinguish a top-band comparison essay from a mid-band response.",
        lines: 5,
        modelAnswer:
          "(1) Sustained, integrated comparison throughout — not separate blocks on each poem. (2) Embedded quotations analysed with precise subject terminology (AO2). (3) Contextual knowledge woven into analysis, not bolted on separately (AO3). (4) Exploratory, tentative language showing multiple interpretations — 'perhaps', 'arguably', 'it could be interpreted'. Additional: analytical verbs (suggests, implies, reflects, embodies, subverts), conceptualised introduction, evaluative conclusion.",
        marks: 4,
      },
      {
        question:
          "Explain the difference between the 'alternating method' and the 'block method' of comparison. Why is the alternating method more effective?",
        lines: 5,
        modelAnswer:
          "The block method analyses all of Poem A first, then all of Poem B — comparison only happens at the transition between the two blocks, so the response reads as two separate essays. The alternating method weaves analysis of both poems together within each paragraph, using comparison connectors to link them. This is more effective because it demonstrates sustained comparison — a key requirement for the higher mark bands — and forces the student to think about similarities and differences throughout the response rather than just at one point.",
        marks: 4,
      },
      {
        question:
          "Rewrite this Grade 5 sentence as a Grade 8/9 sentence: 'In Ozymandias, Shelley uses the word despair to show that the king was powerful.'",
        lines: 6,
        modelAnswer:
          "Grade 8/9 version: 'Shelley's use of the imperative \"despair\" in Ozymandias' inscription reveals the pharaoh's arrogant belief that his power would inspire fear for eternity; however, the ironic juxtaposition of this command with the \"lone and level sands\" that surround the ruined statue suggests that Shelley, as a Romantic poet opposed to tyranny, uses Ozymandias to embody the inevitable collapse of authoritarian power.' This version embeds the quotation, uses subject terminology (imperative, ironic juxtaposition), includes context (Romantic poet opposed to tyranny), and employs analytical verbs (reveals, suggests, embodies).",
        marks: 5,
      },
      {
        question:
          "Write five comparison connectors or phrases that you could use in a comparison essay.",
        lines: 3,
        modelAnswer:
          "Similarly, In contrast, Whereas [Poet A] presents... [Poet B]..., Both poets use... however..., While [Poem A] suggests... [Poem B] challenges this by..., This parallels [Poet B]'s use of..., Unlike [Poet A]'s approach... [Poet B] instead... Additional options: Conversely, In a similar vein, This is echoed in, This contrasts sharply with.",
        marks: 3,
      },
      {
        question:
          "Why is exploratory language important in a Grade 8/9 response? Give two examples of exploratory phrases.",
        lines: 4,
        modelAnswer:
          "Exploratory language shows the examiner that the student can consider multiple interpretations rather than stating a single, fixed meaning. This is a key descriptor for the top mark bands: 'critical, exploratory, conceptualised response'. Examples: 'Perhaps Shelley intends to suggest...', 'Arguably, the most significant effect of this technique is...', 'It could be interpreted that Owen is challenging...', 'This might reflect the poet's belief that...'",
        marks: 4,
      },
      {
        question:
          "Write a comparative topic sentence for the following question: 'Compare how poets present the power of memory in Kamikaze and The Emigrée.'",
        lines: 4,
        modelAnswer:
          "Example: 'Both Garland and Rumens present memory as a force powerful enough to shape identity and defy external pressures; however, while Garland explores how the pull of memory can lead to devastating social consequences, Rumens celebrates memory as an act of resistance that preserves selfhood against displacement and hostility.' This topic sentence names both poets, identifies the shared theme, and sets up the contrast that will be developed in the paragraph.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is a crucial skill-building session. It should be taught after students have studied at least four poem pairings.",
      "The model responses (A and B) should be tailored to your students' level — Response A should represent a realistic 'good' attempt, not a poor one.",
      "The peer assessment activity requires clear modelling. Demonstrate the highlighting process with a sample paragraph first.",
      "Keep the Grade 8/9 checklist displayed for the rest of the unit as a reference tool.",
      "The homework essay provides a summative assessment opportunity — consider marking it formally and returning with individualised targets.",
    ],
    targetedSkills: [
      "AO1: Textual references",
      "AO2: Subject terminology",
      "AO3: Context",
      "Comparison essay structure",
      "Peer assessment",
      "Self-assessment",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 9: Unseen Poetry
  // ─────────────────────────────────────────────
  {
    id: "ppc-09-unseen-poetry",
    title: "Unseen Poetry: Approaching Unknown Poems with Confidence",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the requirements and mark allocation of Paper 2 Section C (Unseen Poetry)",
      "Develop a systematic approach to reading and annotating an unseen poem",
      "Practise analysing language, form, and structure in a poem encountered for the first time",
      "Build confidence in forming a personal response to unfamiliar poetry",
    ],
    successCriteria: [
      "I can explain the structure of Paper 2 Section C and how marks are allocated",
      "I can apply the 'Four Reads' strategy to an unseen poem and produce meaningful annotations",
      "I can write a PEEL paragraph analysing an unseen poem using subject terminology",
      "I can identify the theme, tone, and key techniques of an unseen poem within a timed period",
    ],
    keywords: [
      "unseen poetry",
      "annotation strategy",
      "personal response",
      "tone",
      "theme",
      "voice",
      "imagery",
      "form",
      "structure",
    ],
    starterActivity: {
      title: "Myth Busting: Unseen Poetry",
      duration: "7 minutes",
      instructions:
        "Display five statements about unseen poetry and ask students to vote 'myth' or 'fact': (1) 'You have to know the poem already to do well' — MYTH; (2) 'The skills you use for anthology poems work here too' — FACT; (3) 'There is one correct answer' — MYTH; (4) 'You should spend about 45 minutes on this section' — FACT; (5) 'You need to compare two unseen poems' — FACT (for Question 2). Discuss each answer, addressing anxiety and building confidence. Emphasise: everything they need is on the page.",
      differentiation: {
        support:
          "Students vote with thumbs up/down and teacher explains each answer clearly.",
        core: "Students vote and justify their answers before the reveal.",
        stretch:
          "Students predict what skills from the anthology unit will transfer directly to unseen poetry.",
      },
      resources: ["Myth/Fact statement slide"],
    },
    mainActivities: [
      {
        title: "The Four Reads Strategy",
        duration: "20 minutes",
        instructions:
          "Introduce the 'Four Reads' strategy for approaching any unseen poem. Display the strategy on a poster/slide: Read 1 — Read for Gist: What is the poem about? Who is speaking? What is the tone? Read 2 — Read for Language: Circle powerful words, highlight imagery, note connotations. Read 3 — Read for Form & Structure: How is the poem organised? What is the effect of line breaks, stanza breaks, enjambment, rhythm? Read 4 — Read for Meaning: What is the poet's message or purpose? How does it connect to the question? Distribute an unseen poem on the theme of power or conflict (e.g. 'Flag' by John Agard, 'What Were They Like?' by Denise Levertov, or another suitable poem not in the anthology). Students work through all four reads, annotating as they go. Teacher models Read 1 and Read 2 on the board, then students complete Reads 3 and 4 independently or in pairs.",
        differentiation: {
          support:
            "Provide a structured annotation sheet with prompts for each read and space to write notes.",
          core: "Students annotate the poem using the Four Reads strategy with the poster as reference.",
          stretch:
            "Students complete all four reads independently and then write a thesis statement summarising the poet's message before the class discussion.",
        },
        resources: [
          "Four Reads strategy poster/handout",
          "Unseen poem handout (printed)",
          "Structured annotation sheet (support tier)",
          "Highlighters and pens",
        ],
      },
      {
        title: "Writing an Unseen Poetry Response",
        duration: "20 minutes",
        instructions:
          "Display a sample Question 1 for the unseen poem (e.g. 'In this poem, how does the poet present ideas about power?'). Remind students: Question 1 is worth 24 marks and should take about 25-30 minutes in the exam. Using their annotations, students plan and write one or two PEEL paragraphs in response to the question. Teacher circulates and provides live feedback. After 15 minutes of writing, select two or three students to share their opening paragraph. Class discusses: What works well? What could be improved? Teacher highlights effective use of subject terminology, embedded quotation, and personal response.",
        differentiation: {
          support:
            "Provide a PEEL frame with the point already written based on class discussion of the poem.",
          core: "Students plan and write independently, using their annotations as the basis for their response.",
          stretch:
            "Students write two paragraphs exploring different aspects of the poem (e.g. language in paragraph 1, structure in paragraph 2) and aim for an exploratory, tentative tone.",
        },
        resources: [
          "Sample question slide",
          "PEEL frame (support tier)",
          "Lined response paper",
        ],
      },
    ],
    plenaryActivity: {
      title: "Confidence Thermometer",
      duration: "7 minutes",
      instructions:
        "Display a 'confidence thermometer' on the board (scale 1-10). Students write their confidence level for approaching unseen poetry at the start of the lesson (before) and now (after) on a sticky note, plus one thing they will remember to do in the exam. Place on the class thermometer display. Teacher reads out a selection of strategies students have identified and reinforces the Four Reads approach.",
      differentiation: {
        support:
          "Provide a prompt: 'The most important thing I learned today is ___.'",
        core: "Students reflect and write both their rating and their key takeaway.",
        stretch:
          "Students write their key takeaway and one question they still have about unseen poetry.",
      },
    },
    homework:
      "Find a poem you have never read before (online or in a book). Apply the Four Reads strategy and write a paragraph (100-150 words) analysing one technique the poet uses. Bring the poem and your paragraph to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "List the four steps of the 'Four Reads' strategy and explain what you do at each stage.",
        lines: 8,
        modelAnswer:
          "Read 1 — Read for Gist: Read the whole poem through once to understand the basic subject, who is speaking, and the overall tone (e.g. angry, sad, reflective). Read 2 — Read for Language: Re-read closely, circling powerful words, highlighting imagery (similes, metaphors, personification), and noting connotations of key vocabulary. Read 3 — Read for Form & Structure: Examine the poem's organisation — stanza lengths, line breaks, enjambment, rhythm, rhyme scheme — and consider the effects of these choices. Read 4 — Read for Meaning: Synthesise your observations to identify the poet's message or purpose and connect your analysis to the exam question.",
        marks: 4,
      },
      {
        question:
          "How are marks allocated in Paper 2 Section C? Why does this matter for how you spend your time?",
        lines: 5,
        modelAnswer:
          "Question 1 is worth 24 marks and asks for analysis of one unseen poem. Question 2 is worth 8 marks and asks for a comparison of the first poem with a second unseen poem. This means you should spend approximately 25-30 minutes on Question 1 and 15-20 minutes on Question 2. Many students make the mistake of spending too long on Question 2, which is worth far fewer marks, so understanding the allocation helps you prioritise effectively.",
        marks: 3,
      },
      {
        question:
          "Why is personal response important in an unseen poetry answer? How can you show personal engagement?",
        lines: 5,
        modelAnswer:
          "Personal response is important because the mark scheme rewards students who engage thoughtfully with the poem rather than simply identifying techniques. You can show personal engagement by: using exploratory language ('perhaps', 'arguably', 'the reader might feel'), explaining the effect of techniques on you as a reader ('this creates a sense of unease'), and offering more than one possible interpretation of a word or image. The key is to respond to the poem, not just describe it.",
        marks: 4,
      },
      {
        question:
          "What should you do if you read an unseen poem and feel confused?",
        lines: 4,
        modelAnswer:
          "First, stay calm — confusion on a first read is normal and expected. Re-read the poem using the Four Reads strategy. Focus on what you can understand: individual words, images, the tone of voice. Look at the title for clues. Identify one or two quotations you can say something about confidently and build your answer around those. You do not need to understand every line to write a strong response — the examiner is assessing the quality of your analysis, not your ability to decode every meaning.",
        marks: 3,
      },
      {
        question:
          "Write a PEEL paragraph analysing one technique used in the unseen poem studied in today's lesson.",
        lines: 8,
        modelAnswer:
          "Model answer will depend on the unseen poem selected. A strong response will: make a clear point about a technique or effect, embed a short quotation, analyse the effect using subject terminology, and link to the poet's purpose or the reader's response. For example, if studying 'Flag' by Agard: 'Agard uses the rhetorical question-and-answer structure to challenge the reader's assumptions about patriotism. Each stanza opens with \"What's that...?\" and the answer — \"It's just a piece of cloth\" — deliberately minimises the flag, stripping away its symbolic power. The repetition of \"just\" implies that nationalism is artificially constructed, and the shift in the final stanza to \"Then blind your conscience to the end\" reveals the sinister consequence of flag-worship: moral blindness.'",
        marks: 6,
      },
      {
        question:
          "How can the skills you have developed studying the Power & Conflict anthology help you with unseen poetry?",
        lines: 5,
        modelAnswer:
          "The same analytical skills transfer directly: identifying and analysing language techniques (AO2), understanding how form and structure create meaning (AO2), making inferences about the poet's message and purpose (AO1), and using subject terminology precisely. The main difference is that you cannot prepare specific quotations in advance — but the ability to close-read, annotate, and construct PEEL paragraphs is identical. Studying the anthology has built a 'toolkit' of analytical approaches that can be applied to any poem.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Choose an unseen poem that connects to the Power & Conflict themes so students can see the transferability of their skills.",
      "The Four Reads strategy should be printed as a wallet-sized card for students to keep — they can use it in the exam.",
      "Unseen poetry is often the most anxiety-inducing part of the exam. This lesson prioritises confidence-building alongside skill development.",
      "Consider returning to this lesson's strategies in subsequent revision lessons to reinforce the approach.",
      "The homework task (finding their own poem) builds independence and engagement — share some examples next lesson.",
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO2: Language, form, structure analysis",
      "Annotation strategy",
      "Timed writing",
      "Exam technique",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 10: Exam Practice
  // ─────────────────────────────────────────────
  {
    id: "ppc-10-exam-practice",
    title: "Exam Practice: Timed Comparison & Unseen Poetry Response",
    text: "AQA Power & Conflict Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Apply comparison essay skills under timed conditions for Paper 2 Section B",
      "Apply unseen poetry analysis skills under timed conditions for Paper 2 Section C",
      "Develop effective time management strategies for the poetry sections of the exam",
      "Self-assess responses against the AQA mark scheme to identify strengths and targets",
    ],
    successCriteria: [
      "I can plan and write a comparison essay paragraph within 15 minutes",
      "I can apply the Four Reads strategy to an unseen poem and write an analytical response within 12 minutes",
      "I can allocate my time effectively across both tasks",
      "I can identify at least one strength and one target in my own work using the mark scheme",
    ],
    keywords: [
      "timed conditions",
      "exam technique",
      "time management",
      "mark scheme",
      "self-assessment",
      "Section B",
      "Section C",
      "comparison",
      "unseen",
    ],
    starterActivity: {
      title: "Exam Clock Challenge",
      duration: "5 minutes",
      instructions:
        "Display the Paper 2 timing breakdown: Section A (Modern Prose/Drama) — 50 minutes; Section B (Poetry Comparison) — 45 minutes; Section C (Unseen Poetry) — 45 minutes. Total: 2 hours 15 minutes. Ask students: How long should you spend planning? How long writing? When should you move on even if you have not finished? Students write their timing plan on a sticky note. Teacher reveals recommended breakdown: Section B — 5 mins planning + 35 mins writing + 5 mins checking; Section C Q1 — 3 mins reading + 22 mins writing; Section C Q2 — 2 mins reading + 13 mins writing. Students compare with their own plans.",
      differentiation: {
        support:
          "Provide the timing breakdown pre-printed as a card for students to keep.",
        core: "Students create their own timing plan and compare with the recommended breakdown.",
        stretch:
          "Students consider which section they personally find hardest and plan to allocate extra time to it — discussing the trade-offs.",
      },
      resources: [
        "Timing breakdown slide",
        "Timing plan cards (support tier)",
        "Sticky notes",
      ],
    },
    mainActivities: [
      {
        title: "Timed Task 1: Poetry Comparison (Section B)",
        duration: "25 minutes",
        instructions:
          "Distribute a comparison question: 'Compare how poets present the effects of conflict on individuals in Remains and one other poem from the Power & Conflict anthology.' Students have 5 minutes to plan (using the alternating method structure from Lesson 8) and 20 minutes to write their response. Exam conditions: silent working, no access to poem texts (testing recall — or provide the named poem and let students choose their comparison poem from memory). Timer displayed on the board. Teacher circulates silently, noting common issues for the feedback session. When time is called, students put pens down immediately — practising the discipline of exam conditions.",
        differentiation: {
          support:
            "Provide the printed text of 'Remains' and a planning frame with the alternating method structure. Allow students to choose from three suggested comparison poems (Bayonet Charge, Exposure, or The Charge of the Light Brigade) with a key quotation provided for each.",
          core: "Provide the printed text of 'Remains' only. Students choose their own comparison poem and plan independently.",
          stretch:
            "No printed texts provided — students work entirely from memory, as they will in the exam. This tests recall alongside analytical skill.",
        },
        resources: [
          "Comparison question handout",
          "Printed text of 'Remains' (support and core tiers)",
          "Planning frame (support tier)",
          "Comparison poem prompt cards (support tier)",
          "Timer display",
        ],
      },
      {
        title: "Timed Task 2: Unseen Poetry (Section C, Question 1)",
        duration: "18 minutes",
        instructions:
          "Distribute an unseen poem on the theme of power or conflict (e.g. 'The Man He Killed' by Thomas Hardy, 'Dulce et Decorum Est' by Wilfred Owen, or another suitable poem not in the anthology — ensure it is genuinely unseen). Students have 3 minutes to read and annotate using the Four Reads strategy, then 15 minutes to write a response to: 'In this poem, how does the poet present ideas about conflict?' Timer displayed. Exam conditions as before. When time is called, students stop writing.",
        differentiation: {
          support:
            "Provide the Four Reads strategy card and a PEEL frame. The poem should have a glossary for any archaic vocabulary.",
          core: "Students apply the Four Reads strategy independently and write without a frame.",
          stretch:
            "Students aim to write two paragraphs covering different aspects (e.g. language in one, structure in another) and include exploratory language throughout.",
        },
        resources: [
          "Unseen poem handout with question",
          "Four Reads strategy card (support tier)",
          "PEEL frame (support tier)",
          "Timer display",
        ],
      },
    ],
    plenaryActivity: {
      title: "Mark Scheme Self-Assessment & Target Setting",
      duration: "10 minutes",
      instructions:
        "Distribute a simplified AQA mark scheme for both Section B and Section C. Students re-read their own responses and highlight evidence of: AO1 (response to text — green), AO2 (language/form/structure — yellow), AO3 (context — pink, Section B only). Students then complete a self-assessment slip: 'My strongest AO was ___ because ___. My target AO is ___ because ___. One specific thing I will do differently next time is ___.' Teacher collects slips and uses them to plan targeted intervention before the exam.",
      differentiation: {
        support:
          "Teacher models the self-assessment process on a sample response before students attempt their own.",
        core: "Students self-assess independently using the mark scheme.",
        stretch:
          "Students estimate their own grade band and justify with specific evidence from their response, then set a precise, actionable target.",
      },
    },
    homework:
      "Complete a second timed comparison essay at home (40 minutes strict): 'Compare how poets present the power of memory in Kamikaze and one other poem from the anthology.' Self-assess against the mark scheme and highlight your AO1, AO2, and AO3 evidence in three different colours before submitting.",
    worksheetQuestions: [
      {
        question:
          "What is the recommended timing breakdown for Paper 2 Section B (Poetry Comparison)?",
        lines: 3,
        modelAnswer:
          "You should spend approximately 45 minutes total on Section B: 5 minutes planning your response (choosing your comparison poem, identifying key quotations, structuring your paragraphs using the alternating method), 35 minutes writing your response, and 5 minutes checking and improving your work. This allows for a well-structured, detailed comparison that addresses AO1, AO2, and AO3.",
        marks: 2,
      },
      {
        question:
          "What should you do in the first 3-5 minutes when you see the comparison question in the exam?",
        lines: 5,
        modelAnswer:
          "First, read the question carefully and identify the theme or idea you are being asked to compare (e.g. 'the effects of conflict', 'the power of nature'). Second, choose your comparison poem — pick the poem you know best that shares the strongest thematic link. Third, jot down 3-4 key quotations from each poem that relate to the theme. Fourth, plan your paragraph structure using the alternating method: decide which aspects (language, form, structure, context) you will focus on in each paragraph. This planning time is essential — it prevents rambling and ensures sustained comparison.",
        marks: 4,
      },
      {
        question:
          "How should you approach Paper 2 Section C Question 2 differently from Question 1?",
        lines: 5,
        modelAnswer:
          "Question 1 (24 marks) requires detailed analysis of one unseen poem — you should write multiple paragraphs covering language, form, structure, and personal response. Question 2 (8 marks) requires a comparison of the first poem with a second unseen poem — this should be shorter and more focused. You do not need to analyse both poems in equal depth for Question 2; instead, focus on one or two key similarities or differences. Use comparison connectors to link the poems efficiently. Spending too long on Question 2 is a common mistake — it is worth one-third of the marks of Question 1.",
        marks: 4,
      },
      {
        question:
          "What are the key differences between a Grade 5 and a Grade 8/9 response in the poetry comparison?",
        lines: 6,
        modelAnswer:
          "A Grade 5 response typically: addresses both poems but may treat them in separate blocks rather than integrating comparison; uses quotations but analysis may be surface-level; mentions context but may not weave it into analysis; uses some subject terminology. A Grade 8/9 response: sustains integrated comparison throughout using the alternating method; embeds quotations fluently with precise, perceptive analysis; weaves context naturally into interpretation; uses sophisticated subject terminology; employs exploratory language (perhaps, arguably) showing multiple interpretations; has a conceptualised thesis and evaluative tone throughout.",
        marks: 5,
      },
      {
        question:
          "Reflect on your timed comparison response from today. Identify one strength and one area for improvement with specific evidence.",
        lines: 6,
        modelAnswer:
          "Answers will vary. A strong self-assessment might read: 'My strength was AO2 — I analysed the effect of Armitage's pronoun shift from \"we\" to \"I\" in Remains, using the term \"semantic shift\" accurately. My area for improvement is AO3 — I mentioned that Armitage wrote about the Iraq War but did not link this contextual knowledge to a specific analytical point. Next time, I will embed context within my analysis, e.g. \"The colloquial tone reflects the real soldier's testimony Armitage collected, lending the poem an authenticity that reinforces its anti-war message.\"'",
        marks: 4,
      },
      {
        question:
          "Write a plan for a comparison essay on: 'Compare how poets present powerful emotions in Poppies and one other poem.' Include your chosen poem, three comparison points, and one key quotation per poem per point.",
        lines: 10,
        modelAnswer:
          "Example plan — Comparison poem: Kamikaze. Point 1 (Language — grief and loss): Poppies — 'the world overflowing / like a treasure chest' (mother's overwhelming emotion); Kamikaze — 'my mother never spoke again / in his presence' (grief expressed through silence). Point 2 (Structure — perspective and voice): Poppies — first-person maternal voice, stream of consciousness; Kamikaze — third-person daughter's narration, distanced but emotional. Point 3 (Context and purpose): Poppies — Weir wrote about mothers of soldiers in modern conflicts; Kamikaze — Garland explores the cultural expectations of honour in WWII Japan. Introduction thesis: Both poets explore how conflict creates powerful emotions that endure long after the event, but while Weir focuses on a mother's private grief, Garland examines the emotional devastation of social rejection.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "This lesson works best as a penultimate or final lesson in the unit, after all poems and skills have been taught.",
      "Strict exam conditions are important — explain to students that practising under pressure now reduces anxiety in the real exam.",
      "Choose the unseen poem carefully: it should be accessible enough for all students to engage with but rich enough for higher-attaining students to analyse in depth.",
      "The self-assessment slips are extremely valuable formative data. Use them to plan targeted revision sessions or one-to-one conferences.",
      "Consider running a follow-up lesson where students redraft their comparison essay using feedback, demonstrating the improvement cycle.",
      "If time is limited, this lesson can be split across two sessions: Session 1 for the comparison task and Session 2 for the unseen poetry task.",
    ],
    targetedSkills: [
      "AO1: Textual references and personal response",
      "AO2: Language, form, structure analysis",
      "AO3: Context (Section B)",
      "Comparison essay writing",
      "Unseen poetry analysis",
      "Time management",
      "Self-assessment",
    ],
  },
];
