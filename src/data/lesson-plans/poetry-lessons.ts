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

export const poetryLessonPlans: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1 — Introduction to the Anthology
  // ─────────────────────────────────────────────
  {
    id: "pc-01-intro-anthology",
    title: "Introduction to the Anthology — Themes and Approaches",
    text: "An introductory lesson that maps the fifteen poems of the AQA Power & Conflict anthology, grouping them by theme and introducing students to the skills they will need for the comparison essay.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure of the AQA Power & Conflict anthology and the exam requirements.",
      "Identify the key themes that run across the fifteen poems: power of nature, power of humans, effects of conflict, memory and loss, identity.",
      "Begin to make thematic links between poems in preparation for comparison work.",
    ],
    successCriteria: [
      "I can name all fifteen poems and their poets.",
      "I can sort the poems into at least three thematic groups.",
      "I can explain why comparison skills matter for Paper 2, Section B.",
    ],
    keywords: [
      "anthology",
      "theme",
      "comparison",
      "power",
      "conflict",
      "context",
      "structure",
      "language",
    ],
    starterActivity: {
      title: "Word Association — Power & Conflict",
      duration: "8 minutes",
      instructions:
        "Display the words POWER and CONFLICT on the board. Students have 3 minutes to individually mind-map associations (people, events, emotions, images). Pairs then share and add to each other's maps. Cold-call three students to feed back their most interesting link. Teacher draws out the idea that power and conflict appear in many forms — political, natural, personal, psychological.",
      differentiation: {
        support:
          "Provide a partially completed mind-map with prompt categories (e.g., 'People who have power', 'Types of conflict').",
        core: "Open mind-map with the two central words only.",
        stretch:
          "After completing the mind-map, write a single sentence that connects power and conflict using a subordinating conjunction.",
      },
      resources: ["Whiteboard/projector", "Mini whiteboards or paper"],
    },
    mainActivities: [
      {
        title: "Gallery Walk — Meet the Poems",
        duration: "20 minutes",
        instructions:
          "Fifteen stations around the room, each with a card showing: poem title, poet name, date, a single short quotation (under 10 words), and one contextual fact. Students circulate in pairs with a grid worksheet, noting for each poem: (a) what the poem seems to be about, (b) which theme it might link to, (c) one question they have. After 15 minutes, return to seats and share observations as a class. Teacher models grouping two or three poems by theme on the board.",
        differentiation: {
          support:
            "Provide a pre-filled column of themes so students only need to match poems to themes.",
          core: "Blank grid — students identify themes independently.",
          stretch:
            "Students must also predict which poems could be compared and justify their pairing in one sentence.",
        },
        resources: [
          "15 poem station cards (title, poet, date, short quote, context)",
          "Gallery Walk grid worksheet",
        ],
      },
      {
        title: "Thematic Sorting and Exam Link",
        duration: "20 minutes",
        instructions:
          "Teacher introduces the exam format: Paper 2, Section B — one named poem, students choose a second to compare. Emphasise that comparison is the core skill. Students work in groups of four with poem-title cards. Task: sort the fifteen poems into thematic clusters (power of nature, power of humans, effects of conflict, memory/loss, identity). Poems may appear in more than one group. Groups present their groupings to the class. Teacher highlights that the strongest exam answers draw on poems that share a theme but treat it differently. Students glue or write their finalised thematic map into their books.",
        differentiation: {
          support:
            "Provide a sorting frame with theme headings and two poems already placed.",
          core: "Blank sorting frame with theme headings only.",
          stretch:
            "Create an additional category of their own and justify it in writing.",
        },
        resources: [
          "Poem-title card sets (one per group)",
          "Thematic sorting frame worksheet",
          "Glue sticks",
        ],
      },
    ],
    plenaryActivity: {
      title: "Exit Ticket — 3-2-1",
      duration: "7 minutes",
      instructions:
        "Students complete an exit ticket: 3 poems they are most curious about, 2 themes they noticed running through the anthology, 1 question they still have. Collect tickets to inform next lesson planning. Quick verbal round: ask three students to share their question — teacher addresses or notes for future lessons.",
      differentiation: {
        support: "Sentence starters provided on the exit ticket.",
        core: "Standard 3-2-1 format.",
        stretch:
          "Replace the '1 question' with '1 prediction about which poems will be hardest to compare and why'.",
      },
      resources: ["Exit ticket slips"],
    },
    homework:
      "Read the first poem in the anthology (Ozymandias) twice — once silently, once aloud. Write down three initial reactions or questions to bring to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "List all fifteen poems in the AQA Power & Conflict anthology alongside their poets.",
        lines: 16,
        modelAnswer:
          "Ozymandias — Percy Bysshe Shelley; London — William Blake; Extract from The Prelude — William Wordsworth; My Last Duchess — Robert Browning; The Charge of the Light Brigade — Alfred, Lord Tennyson; Exposure — Wilfred Owen; Storm on the Island — Seamus Heaney; Bayonet Charge — Ted Hughes; Remains — Simon Armitage; Poppies — Jane Weir; War Photographer — Carol Ann Duffy; Tissue — Imtiaz Dharker; The Emigree — Carol Rumens; Kamikaze — Beatrice Garland; Checking Out Me History — John Agard.",
        marks: 5,
      },
      {
        question:
          "Name three key themes that run across the anthology and give one example poem for each.",
        lines: 6,
        modelAnswer:
          "Power of nature — Storm on the Island; Effects of conflict — Remains; Human power and pride — Ozymandias. Other valid themes include memory and loss, identity, and anger at authority.",
        marks: 6,
      },
      {
        question:
          "Explain why comparison skills are important for the AQA Paper 2 poetry exam.",
        lines: 5,
        modelAnswer:
          "In the exam, students are given one named poem and must choose a second poem to compare it with. The mark scheme rewards detailed comparison of how poets use language, structure, and form to present themes, so the ability to draw out similarities and differences is essential for achieving higher bands.",
        marks: 4,
      },
      {
        question:
          "Choose two poems from the anthology that you think could be compared. Explain which theme links them.",
        lines: 6,
        modelAnswer:
          "Ozymandias and My Last Duchess could be compared through the theme of human power and pride. Both poems present powerful male figures whose authority is undermined — Ozymandias by time and nature, the Duke by his own revealing monologue. This allows comparison of how poets critique power.",
        marks: 6,
      },
      {
        question:
          "What is the difference between a poem's 'context' and its 'content'? Give an example.",
        lines: 5,
        modelAnswer:
          "Content is what happens within the poem — its events, images, and ideas. Context is the background information surrounding the poem, such as when it was written, the poet's experiences, or the historical period. For example, the content of Exposure describes soldiers enduring freezing conditions, while the context is Owen's first-hand experience of trench warfare in World War One.",
        marks: 4,
      },
      {
        question:
          "Why might a poem fit into more than one thematic group? Use an example to support your answer.",
        lines: 5,
        modelAnswer:
          "Poems often explore multiple ideas simultaneously. For example, Kamikaze could sit in 'effects of conflict' because it deals with the aftermath of a wartime decision, but it could also fit 'memory and identity' because it explores how the pilot's choice shaped his family's memory of him. Recognising multiple themes strengthens comparison essays.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "This lesson is designed as a broad overview; resist the urge to deep-dive into any single poem.",
      "The gallery walk cards should contain only short phrases (under 10 words) from each poem — do not reproduce full texts.",
      "Collect exit tickets to identify which poems students feel least confident about — this can inform the teaching order.",
      "If time is tight, reduce the gallery walk to 10 stations (the poems most commonly examined) and set the remaining five as independent reading homework.",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding texts",
      "AO3 — Understanding contexts",
      "Thematic linking",
      "Exam technique awareness",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 2 — Ozymandias
  // ─────────────────────────────────────────────
  {
    id: "pc-02-ozymandias",
    title: "Ozymandias — Power and Its Impermanence",
    text: "A detailed study of Shelley's Ozymandias exploring how the poet uses structure, imagery, and irony to present the theme of the impermanence of human power.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Shelley uses irony and imagery to critique human arrogance and power.",
      "Explore the significance of the sonnet form and how Shelley subverts it.",
      "Understand the Romantic context and Shelley's political beliefs.",
    ],
    successCriteria: [
      "I can explain how the poem's structure reinforces its message about power.",
      "I can analyse at least two quotations in detail, exploring language and effect.",
      "I can link the poem's ideas to Shelley's Romantic and political context.",
    ],
    keywords: [
      "irony",
      "hubris",
      "sonnet",
      "volta",
      "tyranny",
      "Romanticism",
      "impermanence",
      "dramatic monologue",
    ],
    starterActivity: {
      title: "Image Inference — Ruins of Power",
      duration: "7 minutes",
      instructions:
        "Display images of ancient ruins (e.g., fallen statues, crumbling temples). Ask: 'What do these images tell us about power?' Students discuss in pairs and feed back. Introduce the concept of hubris — excessive pride that leads to downfall. Connect to the idea that even the most powerful rulers are eventually forgotten. Transition: 'Today we study a poem about exactly this idea.'",
      differentiation: {
        support:
          "Provide sentence starter: 'These images suggest that power is...'",
        core: "Open discussion with partner.",
        stretch:
          "Students consider: 'Why might a Romantic poet in the early 1800s be interested in fallen empires?'",
      },
      resources: [
        "Projected images of ancient ruins",
        "Mini whiteboards (optional)",
      ],
    },
    mainActivities: [
      {
        title: "Guided Reading and Annotation",
        duration: "18 minutes",
        instructions:
          "Teacher reads the poem aloud; students follow on their anthology copy. Second read: students annotate independently, circling powerful words and noting initial reactions. Teacher then guides whole-class annotation of key features: the framing narrative ('I met a traveller'), the description of the statue ('shattered visage', 'sneer of cold command'), the inscription ('Look on my Works'), and the final image ('lone and level sands'). Discuss the irony: the boastful inscription vs. the surrounding emptiness. Note the unconventional sonnet structure — no clear octave/sestet divide, enjambment across the volta — and how this mirrors the breaking down of Ozymandias's power.",
        differentiation: {
          support:
            "Provide a pre-annotated version with key quotations highlighted; students add their own notes alongside.",
          core: "Students annotate independently before teacher-led discussion.",
          stretch:
            "Students identify and annotate the poem's narrative layers (poet, traveller, sculptor, Ozymandias) and consider why Shelley distances us from the king.",
        },
        resources: [
          "Anthology copies or poem printout",
          "Annotation guide sheet",
          "Coloured pens",
        ],
      },
      {
        title: "Close Analysis — PEE Paragraphs",
        duration: "20 minutes",
        instructions:
          "Model a PEE (Point, Evidence, Explanation) paragraph on the board using the phrase 'sneer of cold command'. Point: Shelley presents Ozymandias as a cruel ruler. Evidence: the phrase 'sneer of cold command'. Explanation: the plosive 'c' sounds create a harsh tone reflecting the king's brutality, while 'sneer' suggests contempt for his subjects. The fact that this expression survives on a 'shattered visage' is deeply ironic — the sculptor's art has outlasted the ruler's power. Students then write their own PEE paragraph on one of the following quotations: 'Look on my Works, ye Mighty', 'lone and level sands stretch far away', or 'the hand that mocked them'. Peer assessment using a checklist: Does the paragraph include a clear point? Is the quotation embedded? Is there language analysis? Is there a link to theme?",
        differentiation: {
          support:
            "Provide a paragraph frame with sentence starters and a word bank (e.g., 'suggests', 'implies', 'reflects').",
          core: "Write independently using the modelled structure.",
          stretch:
            "Write a second paragraph that links the analysis to Shelley's Romantic context or to another poem in the anthology.",
        },
        resources: [
          "PEE paragraph model on board",
          "Peer assessment checklist",
          "Paragraph frame (support version)",
        ],
      },
    ],
    plenaryActivity: {
      title: "One-Sentence Summary Challenge",
      duration: "5 minutes",
      instructions:
        "Students write one sentence summarising Shelley's message about power in Ozymandias. Share three examples under the visualiser. Class votes on the most precise summary. Teacher reinforces the key takeaway: Shelley argues that all human power is temporary and that nature and time will always triumph.",
      differentiation: {
        support: "Sentence starter: 'In Ozymandias, Shelley suggests that...'",
        core: "Independent sentence.",
        stretch:
          "Include a reference to form or structure in the summary sentence.",
      },
      resources: ["Visualiser or whiteboard"],
    },
    homework:
      "Write a PEE paragraph analysing the phrase 'boundless and bare' and how it contributes to the poem's message about power. Include a comment on the alliteration.",
    worksheetQuestions: [
      {
        question:
          "What is the overall message of Ozymandias? Explain in your own words.",
        lines: 4,
        modelAnswer:
          "Shelley's message is that human power is temporary. No matter how mighty a ruler believes they are, time and nature will eventually destroy their legacy. The once-great statue is now a ruin in an empty desert, proving that arrogance and tyranny cannot survive.",
        marks: 4,
      },
      {
        question:
          "Explain the irony of the inscription 'Look on my Works, ye Mighty, and despair'. Why is this ironic in the context of the poem?",
        lines: 5,
        modelAnswer:
          "The inscription was originally a boast — Ozymandias wanted other rulers to despair at the greatness of his empire. However, because his works have been destroyed and only desert remains, the 'despair' now comes from seeing how completely power can be erased. The boast has become a warning about the futility of human pride.",
        marks: 5,
      },
      {
        question:
          "Analyse the effect of the phrase 'lone and level sands stretch far away' as the poem's closing image.",
        lines: 6,
        modelAnswer:
          "The alliterative 'l' sounds in 'lone and level' create a slow, sweeping rhythm that mirrors the vast emptiness of the desert. The word 'lone' emphasises isolation and the complete absence of the civilisation Ozymandias once ruled. 'Stretch far away' reinforces the idea of infinite, featureless space, contrasting sharply with the grandiose inscription. As the final image, it leaves the reader with a powerful sense of how completely nature has reclaimed the land, reinforcing the theme of impermanence.",
        marks: 6,
      },
      {
        question:
          "Why does Shelley use a framing narrative — a 'traveller from an antique land' — rather than describing the statue directly?",
        lines: 5,
        modelAnswer:
          "The framing narrative creates distance between the reader and Ozymandias, emphasising how far removed the king now is from the present day. It also means we receive the story second-hand, which mirrors the way power fades into rumour and legend. Shelley may also use this technique to highlight the role of storytelling and art in preserving memory when physical monuments crumble.",
        marks: 5,
      },
      {
        question:
          "How does Shelley subvert the traditional sonnet form in Ozymandias, and why might he do this?",
        lines: 6,
        modelAnswer:
          "A traditional sonnet has a clear octave (8 lines) and sestet (6 lines) with a volta or turn between them. Shelley disrupts this by using an unconventional rhyme scheme (ABABACDCEDEFEF) and running sentences across the expected volta with enjambment. This subversion of a rigid poetic form mirrors the poem's theme: just as Ozymandias's rigid power has crumbled, so Shelley breaks the rigid structure of the sonnet, suggesting that no established order lasts forever.",
        marks: 6,
      },
      {
        question:
          "What is the significance of the sculptor in the poem? What does the phrase 'the hand that mocked them' suggest?",
        lines: 5,
        modelAnswer:
          "The sculptor is significant because his art has outlasted the ruler's power — the 'passions' of Ozymandias 'well those passions read' survive through the sculptor's skill. The phrase 'the hand that mocked them' has a double meaning: 'mocked' can mean 'copied' (the sculptor reproduced the king's expressions) or 'ridiculed' (the sculptor subtly criticised the king through his art). This suggests that art has more lasting power than political authority.",
        marks: 5,
      },
      {
        question:
          "How does the context of Romanticism help us understand Shelley's message in this poem?",
        lines: 5,
        modelAnswer:
          "The Romantic poets valued nature, individual freedom, and emotion over industrial progress and political tyranny. Shelley was particularly radical in his political views, opposing monarchy and oppression. In Ozymandias, the triumph of the natural desert over the man-made statue reflects the Romantic belief that nature is more powerful and enduring than human civilisation. The poem can be read as a warning to contemporary rulers, including King George III, that their power too will eventually crumble.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "Do not reproduce the full poem text on worksheets — students should refer to their anthology copies. Only use short phrases for analysis prompts.",
      "When discussing the sonnet form, it helps to show the standard Petrarchan and Shakespearean structures side by side for comparison.",
      "The double meaning of 'mocked' is a frequent exam discriminator — ensure all students grasp at least the surface meaning.",
      "Extension: compare with My Last Duchess as another poem about arrogant male power — this pairs well for a future comparison lesson.",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding texts",
      "AO2 — Analysing language, form, and structure",
      "AO3 — Understanding contexts",
      "PEE paragraph writing",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 3 — London
  // ─────────────────────────────────────────────
  {
    id: "pc-03-london",
    title: "London — Social Criticism and Blake's Anger",
    text: "An in-depth study of Blake's London, examining how the poet uses repetition, symbolism, and structure to attack the institutions he holds responsible for human suffering.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Blake uses language and structural techniques to convey anger at social injustice.",
      "Explore the symbolism of key images including the 'mind-forg'd manacles' and the 'black'ning Church'.",
      "Understand the historical context of late-eighteenth-century London and the French Revolution's influence on Blake.",
    ],
    successCriteria: [
      "I can explain the significance of at least two symbolic images in the poem.",
      "I can analyse the effect of repetition and how it reinforces Blake's argument.",
      "I can link Blake's ideas to the social and political context of the 1790s.",
    ],
    keywords: [
      "repetition",
      "anaphora",
      "symbolism",
      "chartered",
      "institution",
      "oppression",
      "industrial revolution",
      "social criticism",
    ],
    starterActivity: {
      title: "Then and Now — Images of London",
      duration: "7 minutes",
      instructions:
        "Show two images side by side: a modern London tourist scene and an illustration of 1790s London (poverty, child labour, smog). Ask: 'What do you notice about the differences?' Students discuss in pairs. Draw out the idea that London has always had both wealth and poverty existing side by side. Introduce Blake as a poet who lived in London and was furious at the suffering he witnessed. Ask: 'If you were angry about injustice, how would you make your writing sound angry?' Collect responses — repetition, strong imagery, harsh sounds — and explain these are exactly Blake's tools.",
      differentiation: {
        support:
          "Provide a simple comparison table: 'Modern London / 1790s London' for students to fill in observations.",
        core: "Open paired discussion.",
        stretch:
          "Consider whether the inequalities Blake saw still exist in modern London and give a specific example.",
      },
      resources: [
        "Projected images: modern vs. 1790s London",
        "Mini whiteboards (optional)",
      ],
    },
    mainActivities: [
      {
        title: "Guided Reading and Repetition Analysis",
        duration: "18 minutes",
        instructions:
          "Teacher reads the poem aloud with emphasis on the repetition. Students listen and note every repeated word or sound. Second read: students highlight repetition on their copy. Class discussion: What words are repeated? ('Chartered', 'marks', 'every', 'cry'.) Why? Teacher explains anaphora and its rhetorical effect — it creates a relentless, cumulative sense of suffering. Focus on 'chartered' — it means mapped, controlled, owned. Even the river is 'chartered', suggesting nature itself has been claimed by commerce. Discuss 'mind-forg'd manacles': the most powerful chains are psychological — people are trapped not just by poverty but by their acceptance of the systems that oppress them.",
        differentiation: {
          support:
            "Provide a highlighted copy with repeated words already circled; students annotate the effect of each.",
          core: "Students find and annotate repetition independently before class discussion.",
          stretch:
            "Students compare Blake's use of anaphora with another rhetorical text they know (e.g., Martin Luther King's speeches) and consider why repetition is a tool of protest.",
        },
        resources: [
          "Anthology copies or poem printout",
          "Highlighters",
          "Annotation guide",
        ],
      },
      {
        title: "Symbolic Image Analysis — Carousel Activity",
        duration: "22 minutes",
        instructions:
          "Four tables, each with a large sheet focusing on one symbolic image: (1) 'mind-forg'd manacles', (2) 'black'ning Church', (3) 'hapless Soldier's sigh', (4) 'youthful Harlot's curse'. Groups spend 4 minutes at each table writing: what the image literally describes, what it symbolises, which institution Blake is attacking (government, church, military, society), and the emotional effect on the reader. Rotate until all groups have visited all tables. Return to seats; teacher leads whole-class summary, drawing out Blake's systematic attack on every pillar of society. Students write up their best analysis paragraph in their books, choosing the image they found most powerful.",
        differentiation: {
          support:
            "Provide a sentence frame at each table: 'This image literally describes... It symbolises... Blake is attacking... because...'",
          core: "Open annotations on the group sheets, then independent paragraph.",
          stretch:
            "In their paragraph, students must link two images together and explain how Blake builds his argument across the poem.",
        },
        resources: [
          "Four large sheets with image prompts",
          "Marker pens",
          "Timer for rotations",
        ],
      },
    ],
    plenaryActivity: {
      title: "Blake's Angriest Line — Class Vote",
      duration: "5 minutes",
      instructions:
        "Students nominate and justify which line they think is the 'angriest' in the poem. Take three to four nominations. Class votes by show of hands. The winning nomination's champion explains their reasoning. Teacher uses this to reinforce how Blake layers anger through language, sound, and structure. Remind students that in the exam, identifying the poet's attitude and how it is conveyed is crucial for higher marks.",
      differentiation: {
        support: "Choose from three pre-selected lines displayed on the board.",
        core: "Nominate any line and justify.",
        stretch: "Justify using a technical term (e.g., plosive, sibilance, symbolism).",
      },
    },
    homework:
      "Write a paragraph comparing the presentation of power in London and Ozymandias. Focus on one similarity and one difference.",
    worksheetQuestions: [
      {
        question:
          "What does the word 'chartered' mean in the poem, and why is it significant that both the streets and the Thames are described this way?",
        lines: 5,
        modelAnswer:
          "'Chartered' means mapped, controlled, or given over to commercial ownership. By describing both the streets and the river Thames as 'chartered', Blake suggests that every part of London — even nature — has been claimed and controlled by wealthy institutions. Nothing is free, and the repetition of the word emphasises how total this control is.",
        marks: 4,
      },
      {
        question:
          "Explain the metaphor 'mind-forg'd manacles'. What is Blake suggesting about the people of London?",
        lines: 5,
        modelAnswer:
          "'Manacles' are chains or shackles, and 'forg'd' means made in a forge, linking to the industrial imagery of the era. The modifier 'mind-forg'd' suggests these chains are mental rather than physical — people are imprisoned by their own acceptance of the systems that oppress them, whether through fear, ignorance, or indoctrination by institutions like the Church and government. Blake implies that true freedom requires a revolution in thinking.",
        marks: 5,
      },
      {
        question:
          "How does Blake use the image of the 'black'ning Church' to criticise religion?",
        lines: 5,
        modelAnswer:
          "The 'black'ning Church' is literally darkened by industrial soot, but symbolically it suggests moral corruption — the Church is 'blackened' by its failure to help the poor. The fact that Blake pairs this image with the 'Chimney-sweeper's cry' (a reference to child labour) implies the Church is complicit in the suffering of children, choosing wealth and power over compassion. The present participle 'black'ning' suggests this corruption is ongoing.",
        marks: 5,
      },
      {
        question:
          "Analyse the effect of repetition in the second stanza, where Blake repeats the word 'every'.",
        lines: 5,
        modelAnswer:
          "The repetition of 'every' creates an overwhelming, inescapable sense of suffering — it is universal and affects all people ('every Man', 'every Infant's cry'). The anaphora builds a relentless rhythm that mirrors the unending cycle of misery Blake witnesses. By insisting that no one is exempt, Blake makes it impossible for the reader to dismiss the suffering as an isolated problem.",
        marks: 5,
      },
      {
        question:
          "What is the significance of the poem's final image — the 'youthful Harlot's curse'?",
        lines: 6,
        modelAnswer:
          "The final stanza shocks the reader with its image of a young sex worker whose 'curse' — which can mean both a swear word and a disease — blights the 'new-born Infant's tear' and the 'Marriage hearse'. Blake combines birth, marriage, and death in a single disturbing image, suggesting that corruption has poisoned every stage of life. The oxymoronic 'Marriage hearse' implies that even love and union are tainted by the social conditions of London. Ending with this image gives the poem a devastating, hopeless conclusion.",
        marks: 6,
      },
      {
        question:
          "How does the structure of the poem — four quatrains with a regular rhyme scheme — contribute to its meaning?",
        lines: 5,
        modelAnswer:
          "The rigid ABAB rhyme scheme and regular quatrain structure create a sense of entrapment, mirroring the 'chartered' control Blake describes. The steady, marching rhythm reflects the speaker's relentless walk through the city and the inescapable nature of the suffering. The regularity could also suggest that this misery is systematic and built into the very structure of society, not random or accidental.",
        marks: 5,
      },
      {
        question:
          "How does the context of the 1790s help us understand Blake's message in London?",
        lines: 5,
        modelAnswer:
          "Blake wrote London in 1794, during the aftermath of the French Revolution (1789), which inspired many radicals to hope for social change in England. The Industrial Revolution was also transforming cities, creating wealth for factory owners but terrible conditions for workers. Blake was a radical thinker who opposed the monarchy, the Church, and social inequality. London channels this anger into a powerful attack on the institutions he believed were responsible for suffering, and its call for awareness echoes the revolutionary spirit of the era.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "Do not reproduce the full poem — students should work from their anthologies. Use only short phrases as quotation prompts.",
      "The carousel activity works best with groups of 3-4. Time each rotation strictly to maintain pace.",
      "The concept of 'mind-forg'd manacles' is abstract — consider using a concrete analogy (e.g., 'Have you ever believed you couldn't do something before even trying? That is a mind-forged manacle.').",
      "This poem pairs well with Checking Out Me History for a comparison on anger at institutional power, and with The Emigree for contrasting views of a city.",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding texts",
      "AO2 — Analysing language, form, and structure",
      "AO3 — Understanding contexts",
      "Paragraph writing with embedded quotation",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 4 — Exposure
  // ─────────────────────────────────────────────
  {
    id: "pc-04-exposure",
    title: "Exposure — Owen and the Reality of War",
    text: "A close study of Wilfred Owen's Exposure, focusing on how the poet uses weather imagery, repetition, and structure to convey the suffering and futility of trench warfare.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Owen uses weather as the poem's central antagonist to present suffering.",
      "Explore the structural effects of the shortened final lines and the repeated refrain.",
      "Understand Owen's first-hand experience of World War One and his purpose in writing.",
    ],
    successCriteria: [
      "I can explain how Owen personifies nature as a weapon of war.",
      "I can analyse the effect of the half-rhyme and refrain on the reader.",
      "I can link the poem's ideas to Owen's context and anti-war message.",
    ],
    keywords: [
      "personification",
      "half-rhyme",
      "refrain",
      "futility",
      "exposure",
      "sibilance",
      "caesura",
      "pararhyme",
    ],
    starterActivity: {
      title: "Sensory Starter — What Does Cold Feel Like?",
      duration: "7 minutes",
      instructions:
        "Ask students to close their eyes and imagine being outside in freezing conditions for hours with no shelter. After 30 seconds, ask them to open their eyes and write down five words or phrases describing what they felt, heard, or saw in their imagination. Share responses — teacher collects powerful language on the board. Introduce Owen: he experienced exactly this in the trenches of World War One, where more soldiers died of exposure to cold than from enemy bullets. The poem's title, 'Exposure', refers to this — being exposed to the elements.",
      differentiation: {
        support: "Provide sensory prompt categories: sight, sound, touch, emotion.",
        core: "Free response to the sensory prompt.",
        stretch:
          "After sharing, attempt to turn their five words into a single sentence that captures the feeling, using at least one technique (e.g., simile, personification).",
      },
      resources: ["Whiteboard for collecting vocabulary"],
    },
    mainActivities: [
      {
        title: "Guided Reading — Tracking the Weather as Enemy",
        duration: "18 minutes",
        instructions:
          "Teacher reads the poem aloud, slowly and quietly, reflecting its tone. Students follow along and underline every reference to weather or nature. Second pass: students annotate what the weather is doing in each stanza — is it attacking, waiting, deceiving? Class discussion: Owen personifies the weather as a more dangerous enemy than the German soldiers. Key quotations to explore: 'merciless iced east winds that knive us' (personification, violent verb, sibilance), 'pale flakes with fingering stealth' (alliterative personification suggests nature is sinister and deliberate), 'the buds... for God's invincible spring' (even the hope of spring is denied — 'Is it that we are dying?'). Discuss the structural refrain: the shortened final line of each stanza ('But nothing happens') — this creates anticlimax and mirrors the soldiers' experience of agonising waiting.",
        differentiation: {
          support:
            "Provide a table: Stanza | Weather image | What it does to the soldiers. Students fill in as teacher discusses.",
          core: "Independent annotation followed by guided discussion.",
          stretch:
            "Students track the progression of weather imagery across the poem and consider whether Owen presents nature as growing more or less threatening.",
        },
        resources: [
          "Anthology copies",
          "Weather tracking table (support version)",
          "Coloured pens for annotation",
        ],
      },
      {
        title: "Analytical Writing — Dual Coding and Paragraphing",
        duration: "22 minutes",
        instructions:
          "Introduce dual coding: students choose one key quotation and create a small visual sketch representing it (e.g., wind with a knife for 'winds that knive us'). Beneath the sketch, they write an analytical paragraph. Teacher models: choose 'merciless iced east winds that knive us'. Point: Owen presents nature as a deliberate, violent attacker. Evidence: embed the quotation. Explain: 'merciless' removes any possibility of compassion; 'knive' is a brutal, physical verb suggesting the wind causes wound-like pain; sibilance in 'iced east winds' creates a hissing sound echoing the wind itself. Context: Owen wanted readers at home to understand that the true enemy was not always the opposing army. Students write their own paragraph on a different quotation. Peer-assess using two stars and a wish.",
        differentiation: {
          support:
            "Provide three quotations to choose from and a paragraph frame with sentence starters.",
          core: "Choose their own quotation; write independently using the modelled structure.",
          stretch:
            "Write a second paragraph that compares Owen's use of nature with Heaney's in Storm on the Island, if already studied.",
        },
        resources: [
          "Blank paper or exercise books for dual coding",
          "Model paragraph on board",
          "Peer assessment checklist (two stars and a wish)",
        ],
      },
    ],
    plenaryActivity: {
      title: "True or False — Exposure Recap",
      duration: "5 minutes",
      instructions:
        "Read out eight statements about the poem — students hold up True or False cards. Include misconceptions (e.g., 'The main enemy in the poem is the German soldiers' — False). After each answer, ask a student to correct the false statements. Use the final statement to reinforce Owen's purpose: 'Owen wrote this poem to show people at home the reality of war' — True. Summarise: Owen's anger is not directed at the enemy soldiers but at the war itself and those who allowed it to continue.",
      differentiation: {
        support: "Provide True/False cards so all students can participate.",
        core: "Hold up cards and justify corrections verbally.",
        stretch:
          "For each false statement, provide the corrected version with a quotation from the poem.",
      },
      resources: ["True/False cards or mini whiteboards"],
    },
    homework:
      "Answer in a full paragraph: How does Owen use the refrain 'But nothing happens' to convey the soldiers' experience? Consider its structural position and emotional effect.",
    worksheetQuestions: [
      {
        question:
          "What is the main 'enemy' in Exposure? How does Owen make this clear?",
        lines: 5,
        modelAnswer:
          "The main enemy is the weather and the freezing conditions, not the opposing soldiers. Owen makes this clear by personifying nature as a violent attacker — winds 'knive' the soldiers, snow has 'fingering stealth', and dawn is a 'melancholy army'. The actual fighting barely features; instead, the soldiers suffer and die from exposure to cold, and the repeated refrain 'But nothing happens' emphasises that no battle occurs — only relentless suffering.",
        marks: 5,
      },
      {
        question:
          "Analyse the effect of the phrase 'merciless iced east winds that knive us'.",
        lines: 6,
        modelAnswer:
          "'Merciless' personifies the wind, removing any possibility of compassion or relief and presenting nature as deliberately cruel. 'Iced' functions as a compound modifier that makes the wind feel physically sharp and painful. The verb 'knive' is striking because it converts the noun 'knife' into a verb, making the action feel brutal and immediate — the wind does not merely blow but actively stabs the soldiers. The sibilance in 'iced east winds' creates a hissing quality that aurally mirrors the sound of biting wind, immersing the reader in the sensory experience.",
        marks: 6,
      },
      {
        question:
          "What is the effect of the shortened final line in each stanza — 'But nothing happens'?",
        lines: 5,
        modelAnswer:
          "The refrain 'But nothing happens' creates a powerful anticlimax at the end of each stanza. After building tension through descriptions of suffering and fear, the short final line deflates all expectation. Structurally, the shortened line mirrors the emptiness the soldiers feel — there is no resolution, no action, no relief. The repetition across the poem reinforces the agonising monotony of trench warfare, where soldiers waited endlessly in terrible conditions. It also conveys futility: all this suffering is for nothing.",
        marks: 5,
      },
      {
        question:
          "How does Owen use half-rhyme (pararhyme) in Exposure, and what effect does it create?",
        lines: 5,
        modelAnswer:
          "Owen uses half-rhyme (also called pararhyme), where consonant sounds match but vowels do not (e.g., 'knive us / nervous', 'wire / war'). This creates a sense of dissonance and unease — the sounds almost match but not quite, reflecting the disturbed, unsettling atmosphere of the trenches. Unlike full rhyme, which creates satisfaction and resolution, half-rhyme leaves the reader feeling uncomfortable, mirroring the soldiers' lack of comfort or closure.",
        marks: 5,
      },
      {
        question:
          "What is the significance of the stanza beginning with thoughts of home and warm fires? Why does Owen include this?",
        lines: 5,
        modelAnswer:
          "Owen includes a stanza where the soldiers imagine home — warm fires and closed doors — to contrast sharply with their current reality. This brief moment of comfort makes their suffering feel even worse by reminding us (and them) of what they are missing. However, the doors are 'closed' to them, suggesting they cannot return and that those at home have shut them out or forgotten them. This intensifies the sense of isolation and abandonment, and reinforces Owen's anger at the gap between the home front's comfort and the trenches' horror.",
        marks: 5,
      },
      {
        question:
          "Explain how Owen's own experiences in World War One shaped the poem Exposure.",
        lines: 5,
        modelAnswer:
          "Owen served as an officer on the Western Front and experienced the horrific conditions of trench warfare first-hand, including extreme cold, constant danger, and the psychological trauma of waiting under bombardment. He was eventually diagnosed with shell shock. Exposure draws directly on these experiences, and Owen's stated purpose was to warn — 'My subject is War, and the pity of War.' He wanted to challenge the patriotic propaganda of the time and show people at home the true, unglamorous reality of what soldiers endured.",
        marks: 4,
      },
      {
        question:
          "Compare how nature is presented in Exposure and one other poem from the anthology. Which poem do you think presents nature as more threatening, and why?",
        lines: 8,
        modelAnswer:
          "In Exposure, Owen presents nature as a deliberate, violent enemy using personification ('winds that knive us') and sustained weather imagery. Nature is relentless and deadly — it kills soldiers more effectively than bullets. In Storm on the Island, Heaney also presents nature as violent and threatening ('spits like a tame cat turned savage'), but the threat is more temporary and localised — a storm that will eventually pass. Owen's nature is arguably more threatening because it is inescapable, prolonged, and fatal. The soldiers have no shelter and no hope of relief, whereas Heaney's islanders, though afraid, have prepared for the storm and will survive it. Both poets use nature to explore powerlessness, but Owen's context of war makes the consequences far more devastating.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "Only reference short phrases from the poem (under 10 words) — students must use their anthology copies for the full text.",
      "The sensory starter works particularly well on a cold day — consider opening a window briefly (safely) to create an authentic starting point for discussion.",
      "Owen's half-rhyme (pararhyme) is a sophisticated concept; ensure you model examples clearly and avoid overwhelming lower-ability students with too much terminology.",
      "This poem pairs naturally with Bayonet Charge (Hughes) for a comparison on the reality of war, and with Storm on the Island for nature's power.",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding texts",
      "AO2 — Analysing language, form, and structure",
      "AO3 — Understanding contexts",
      "Dual coding for revision",
      "Analytical paragraph writing",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 5 — Storm on the Island
  // ─────────────────────────────────────────────
  {
    id: "pc-05-storm-on-the-island",
    title: "Storm on the Island — Nature's Power (Heaney)",
    text: "A detailed study of Heaney's Storm on the Island, exploring the power of nature, the use of collective voice, and the extended metaphor of political conflict hidden within the poem.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Heaney uses natural imagery and extended metaphor to explore powerlessness.",
      "Understand the shift in tone from confidence to fear and what drives it.",
      "Explore the political allegory — the word 'Stormont' hidden in the title and the Northern Irish Troubles context.",
    ],
    successCriteria: [
      "I can explain how Heaney presents the islanders' changing attitude to the storm.",
      "I can analyse at least two quotations exploring language and/or structural choices.",
      "I can discuss the political reading of the poem and link it to the Northern Ireland context.",
    ],
    keywords: [
      "blank verse",
      "enjambment",
      "collective voice",
      "extended metaphor",
      "allegory",
      "Troubles",
      "Stormont",
      "semantic field",
    ],
    starterActivity: {
      title: "Hidden Word Puzzle",
      duration: "6 minutes",
      instructions:
        "Display the title 'Storm on the Island' and ask students if they can find a hidden word in it. Give 30 seconds. Reveal: STORMONT — the seat of Northern Irish government. Ask: 'Why might Heaney, a Northern Irish poet, hide a political word inside a poem about a storm?' Pairs discuss for 2 minutes. Feed back ideas. Teacher introduces the concept of allegory — a story with a hidden meaning — and explains that this poem works on two levels: literally about a storm, and allegorically about the political conflict (the Troubles) in Northern Ireland.",
      differentiation: {
        support:
          "Provide a hint: 'The hidden word is the name of a government building in Northern Ireland.'",
        core: "Find the word independently and discuss significance.",
        stretch:
          "Before any teacher input, write a prediction of how a storm could be a metaphor for political conflict.",
      },
      resources: ["Whiteboard with title displayed"],
    },
    mainActivities: [
      {
        title: "Guided Reading — Tracking Confidence to Fear",
        duration: "18 minutes",
        instructions:
          "Teacher reads the poem aloud. Students annotate the tone at the beginning ('We are prepared') versus the end ('it is a huge nothing that we fear'). Whole-class discussion: the poem begins with confidence and preparation but shifts to fear and helplessness. Key areas to explore: the opening conversational tone ('Are prepared', 'you know what I mean'), the absence of trees ('no natural shelter'), the military language ('bombarded', 'strafes', 'salvo', 'exploding'), the simile 'spits like a tame cat turned savage', and the paradox of the ending — 'a huge nothing that we fear'. Teacher draws out the idea that fear of the unknown or invisible is the most powerful form of fear. Discuss the blank verse form: iambic pentameter without rhyme, lending a conversational but controlled tone that gradually breaks down as the storm intensifies.",
        differentiation: {
          support:
            "Provide a confidence-to-fear scale worksheet; students place quotations along it and annotate.",
          core: "Independent annotation of tone shifts before class discussion.",
          stretch:
            "Consider how the blank verse form contributes to the tone shift — where does the rhythm feel most disrupted, and why?",
        },
        resources: [
          "Anthology copies",
          "Confidence-to-fear scale worksheet (support version)",
          "Coloured pens",
        ],
      },
      {
        title: "Dual-Level Analysis — Nature and Politics",
        duration: "22 minutes",
        instructions:
          "Students work in pairs with a two-column table: 'Literal Reading (Nature)' and 'Allegorical Reading (Politics)'. For five key quotations provided on the board, pairs write an interpretation for each column. For example: 'spits like a tame cat turned savage' — Literal: the sea suddenly becomes violent and unpredictable. Allegorical: the Troubles erupted from within a seemingly peaceful community, turning neighbours against each other. After 12 minutes, pairs share their best dual reading with another pair. Teacher leads class feedback, emphasising that the strongest exam answers acknowledge multiple layers of meaning. Students then write one analytical paragraph that addresses both readings of a chosen quotation.",
        differentiation: {
          support:
            "Provide the literal reading pre-filled; students add the allegorical interpretation with guidance from teacher or TA.",
          core: "Complete both columns independently before writing the paragraph.",
          stretch:
            "In their paragraph, explicitly discuss why Heaney might have chosen to embed a political message within a nature poem rather than addressing the Troubles directly.",
        },
        resources: [
          "Two-column analysis worksheet",
          "Five quotations displayed on board",
          "Context card: brief summary of the Troubles",
        ],
      },
    ],
    plenaryActivity: {
      title: "Concept Continuum — Where Do You Stand?",
      duration: "5 minutes",
      instructions:
        "Designate one side of the room as 'This poem is mainly about nature' and the other as 'This poem is mainly about politics'. Students physically stand on the continuum based on their interpretation. Three students from different positions justify their stance. Teacher concludes: in the exam, acknowledging both readings and their interplay will score highest. The poem deliberately operates on both levels, and Heaney's genius is in making both equally valid.",
      differentiation: {
        support: "Choose a side and give one reason.",
        core: "Choose a position and justify with a quotation.",
        stretch:
          "Stand at a specific point on the continuum and argue that the two readings are inseparable rather than competing.",
      },
    },
    homework:
      "Write a paragraph analysing the final line: 'it is a huge nothing that we fear'. Explore the paradox and consider what the 'nothing' might represent on both a literal and allegorical level.",
    worksheetQuestions: [
      {
        question:
          "How does the tone of the poem change from beginning to end? Use quotations to support your answer.",
        lines: 6,
        modelAnswer:
          "The poem opens with confidence: 'We are prepared: we build our houses squat.' The short declarative and the collective pronoun 'we' suggest unity and readiness. However, by the end, the tone shifts to uncertainty and fear: 'it is a huge nothing that we fear.' The word 'nothing' is paradoxical — how can you fear nothing? — and suggests that the greatest threat is invisible and unknowable. The shift mirrors the experience of facing a force (whether natural or political) that cannot be fully anticipated or controlled.",
        marks: 6,
      },
      {
        question:
          "Analyse the simile 'spits like a tame cat turned savage'. What does this suggest about the storm?",
        lines: 5,
        modelAnswer:
          "The simile compares the sea to a domestic cat that suddenly becomes violent. 'Tame' suggests something familiar and safe, while 'turned savage' implies a shocking transformation. The word 'spits' conveys aggression and contempt. Heaney suggests that the storm's violence comes from a source that was previously harmless, making it more frightening because it was unexpected. Allegorically, this could reflect how the Troubles emerged from within communities where neighbours turned against each other.",
        marks: 5,
      },
      {
        question:
          "Why is the word 'Stormont' hidden in the title, and what does this tell us about the poem's meaning?",
        lines: 5,
        modelAnswer:
          "Stormont is the Northern Irish parliament building, and embedding it in the title hints that the poem has a political meaning beneath its surface narrative about a storm. Heaney grew up during the Troubles — the sectarian conflict in Northern Ireland — and many of his poems engage with this context indirectly. The hidden word suggests the poem can be read as an allegory for political conflict: the 'storm' represents the violence and instability of the Troubles, and the islanders' fear mirrors the anxiety of living through a period of unpredictable conflict.",
        marks: 5,
      },
      {
        question:
          "Heaney uses military vocabulary throughout the poem. Identify two examples and explain their effect.",
        lines: 6,
        modelAnswer:
          "Heaney uses 'bombarded' and 'strafes' — both words from military contexts. 'Bombarded' means subjected to sustained attack, suggesting the storm is not a single event but a prolonged assault. 'Strafes' means to attack with gunfire from low-flying aircraft, creating an image of the wind as a deliberate, targeted weapon. This military semantic field blurs the line between natural and human conflict, reinforcing the allegorical reading and suggesting that nature's violence mirrors the violence of war.",
        marks: 6,
      },
      {
        question:
          "Explain the paradox at the end of the poem: 'it is a huge nothing that we fear'. What is the 'nothing'?",
        lines: 5,
        modelAnswer:
          "The paradox lies in the phrase 'huge nothing' — something cannot be simultaneously enormous and non-existent. On a literal level, the 'nothing' is the invisible wind and air that causes such destruction — it has no physical form, yet its power is devastating. Allegorically, the 'nothing' could represent the intangible forces of fear, suspicion, and sectarian hatred that fuelled the Troubles — forces that are invisible but have real, destructive consequences. Heaney suggests that what we cannot see or understand is often what frightens us most.",
        marks: 6,
      },
      {
        question:
          "How does Heaney's use of blank verse (unrhymed iambic pentameter) suit the poem's subject matter?",
        lines: 5,
        modelAnswer:
          "Blank verse gives the poem a conversational, natural rhythm that suits the speaker's direct, almost chatty tone ('you know what I mean'). The absence of rhyme means there is no comforting pattern or resolution — just as the storm offers no resolution for the islanders. The iambic pentameter provides an underlying regularity, but Heaney disrupts it with enjambment and caesura as the storm intensifies, mirroring the loss of control the islanders experience. The form reflects the content: order gradually breaking down under pressure.",
        marks: 5,
      },
      {
        question:
          "Compare how nature is presented as powerful in Storm on the Island and one other poem from the anthology.",
        lines: 8,
        modelAnswer:
          "In Storm on the Island, nature is presented as a violent, invisible force — 'a huge nothing that we fear' — that overwhelms even those who have prepared for it. Heaney uses military imagery ('bombarded', 'strafes') to equate the storm with warfare. In Exposure, Owen similarly presents nature as a deadly enemy ('merciless iced east winds that knive us'), but Owen's soldiers are in a warzone where the weather kills more effectively than the enemy. Both poems use personification to make nature feel deliberate and malicious. However, a key difference is that Heaney's islanders survive — they are frightened but endure — whereas Owen's soldiers are dying. This makes Owen's presentation of nature arguably more devastating, as the stakes are fatal rather than psychological.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "The 'Stormont' anagram is a widely discussed reading — present it as a valid interpretation rather than a confirmed authorial intention, encouraging students to evaluate evidence.",
      "Ensure students understand the Troubles at a basic level before tackling the allegorical reading — a brief context card or 2-minute video clip is sufficient.",
      "The blank verse analysis is challenging; with lower-ability groups, focus on the conversational tone and the effect of enjambment rather than scanning metre.",
      "Comparison links: Exposure (nature as enemy), Ozymandias (power of nature over human achievements), Extract from The Prelude (nature as overwhelming force).",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding texts",
      "AO2 — Analysing language, form, and structure",
      "AO3 — Understanding contexts",
      "Identifying allegory and multiple interpretations",
      "Comparative thinking",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 6 — Remains
  // ─────────────────────────────────────────────
  {
    id: "pc-06-remains",
    title: "Remains — PTSD and the Haunting of Conflict",
    text: "A close study of Armitage's Remains, exploring how the poet uses colloquial voice, violent imagery, and structural techniques to convey the psychological aftermath of killing in war.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Armitage uses a colloquial, anecdotal voice to create authenticity and impact.",
      "Explore how the poem's language and structure convey the symptoms of PTSD.",
      "Understand the context: the poem is based on a real soldier's account from the Iraq War.",
    ],
    successCriteria: [
      "I can explain how the shift from anecdote to haunting reflects the soldier's psychological state.",
      "I can analyse the effect of specific language choices, including the graphic imagery.",
      "I can discuss PTSD as a consequence of conflict and link it to the poem's context.",
    ],
    keywords: [
      "PTSD",
      "colloquial",
      "anecdote",
      "enjambment",
      "caesura",
      "guilt",
      "graphic imagery",
      "psychological conflict",
    ],
    starterActivity: {
      title: "Freeze Frame — The Moment That Won't Leave",
      duration: "7 minutes",
      instructions:
        "Ask students: 'Has a moment ever replayed in your mind so vividly you felt like you were reliving it?' (Reassure students this can be trivial — e.g., an embarrassing moment, a near-miss accident.) Pairs share briefly. Teacher explains: 'Now imagine the moment replaying is the worst thing you have ever done. Imagine it replays every time you close your eyes.' Introduce PTSD (Post-Traumatic Stress Disorder) — intrusive memories, guilt, inability to move on. Explain that today's poem is based on a real soldier's testimony about a shooting in Iraq, and that the 'remains' of the title refer not just to a body but to the memories that remain.",
      differentiation: {
        support:
          "Provide a definition card for PTSD with three key symptoms listed.",
        core: "Open discussion, then link to PTSD concept.",
        stretch:
          "Consider why soldiers might find it particularly difficult to discuss PTSD and what barriers exist to seeking help.",
      },
      resources: ["PTSD definition card (support version)"],
    },
    mainActivities: [
      {
        title: "Guided Reading — From Anecdote to Haunting",
        duration: "18 minutes",
        instructions:
          "Teacher reads the poem in two distinct tones: the first half in a casual, conversational voice (reflecting the anecdotal opening) and the second half slower, quieter, more disturbed. Students note where they think the poem's tone shifts. Class discussion: the poem begins like a war story told in a pub ('On another occasion'), with colloquial language and a sense of distance. But the tone shifts sharply as the soldier begins to be haunted: 'his blood-Loss / shadow stays on the street'. Explore key features: the colloquial voice ('probably armed, possibly not'), the ambiguity of 'possibly not' (the soldier does not even know if the man was a threat), the graphic imagery ('I see broad daylight on the other side'), the repetition of the word 'remains', and the final image where the soldier is 'near to the knuckle' — an idiom meaning close to the uncomfortable truth. Discuss the irregular structure: no regular stanza length, frequent enjambment, suggesting the soldier's thoughts are disordered and spilling out uncontrollably.",
        differentiation: {
          support:
            "Provide a two-column table: 'Casual/Anecdotal Language' vs. 'Haunted/Disturbed Language' — students sort quotations into columns.",
          core: "Independent annotation of tone shift, then contribute to class discussion.",
          stretch:
            "Analyse why Armitage chose to write this in the soldier's voice (dramatic monologue) rather than in the third person — what is gained?",
        },
        resources: [
          "Anthology copies",
          "Two-column tone sorting table (support version)",
        ],
      },
      {
        title: "Analytical Writing — The Guilt Paragraph",
        duration: "22 minutes",
        instructions:
          "Focus question displayed on the board: 'How does Armitage present the soldier's guilt in Remains?' Teacher models unpicking the phrase 'probably armed, possibly not'. Point: Armitage conveys the soldier's guilt through persistent uncertainty. Evidence: 'probably armed, possibly not'. Explanation: the shift from 'probably' to 'possibly' shows decreasing certainty — the soldier cannot confirm the victim was a threat. The comma creates a caesura, a pause that mirrors the soldier's hesitation and doubt. 'Not' sits at the end, stark and unresolved, emphasising the devastating possibility that the killing was unjustified. Students then write their own analytical paragraph on one of: 'his blood-shadow stays on the street', 'he's here in my head when I close my eyes', or 'I see broad daylight on the other side'. Teacher circulates to support. Final 5 minutes: two students read paragraphs aloud; class offers one piece of specific praise and one improvement suggestion.",
        differentiation: {
          support:
            "Provide a paragraph frame with sentence starters and a technique word bank.",
          core: "Write independently, selecting their own quotation from the three options.",
          stretch:
            "Include a sentence that links the language analysis to the wider theme of conflict's psychological aftermath, referencing at least one other poem.",
        },
        resources: [
          "Focus question on board",
          "Model paragraph displayed",
          "Paragraph frame (support version)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Word on the Forehead",
      duration: "5 minutes",
      instructions:
        "Each student writes one word on a sticky note that they think best summarises the poem's message (e.g., guilt, haunting, futility, memory). Students stick notes on the board. Teacher groups similar words and identifies the class consensus. Discuss: the poem's power comes from the fact that this is a real person's experience — Armitage is giving voice to someone whose suffering continues long after the conflict is over. Final thought: 'The remains are not just the dead man's body — they are the psychological remains left in the soldier's mind.'",
      differentiation: {
        support: "Choose from a list of five words provided.",
        core: "Choose their own word independently.",
        stretch: "Write a sentence justifying their word choice using a quotation.",
      },
      resources: ["Sticky notes", "Board space for grouping"],
    },
    homework:
      "Research PTSD: find three facts about it (causes, symptoms, treatment) and write a paragraph explaining how understanding PTSD deepens our reading of Remains.",
    worksheetQuestions: [
      {
        question:
          "Why does Armitage use a colloquial, conversational voice at the beginning of the poem? What effect does this create?",
        lines: 5,
        modelAnswer:
          "The colloquial voice ('On another occasion', 'well myself and somebody else and somebody else') makes the poem sound like a soldier casually recounting an anecdote, as if this is just another story from deployment. This creates a sense of emotional distance or detachment, suggesting the soldier is trying to play down the event. It also makes the later shift to haunting and guilt more shocking by contrast — the reader realises this casual tone is a coping mechanism that breaks down as the poem progresses.",
        marks: 5,
      },
      {
        question:
          "Analyse the effect of the phrase 'probably armed, possibly not'.",
        lines: 5,
        modelAnswer:
          "The shift from 'probably' to 'possibly' reveals the soldier's decreasing certainty about whether the shooting was justified. 'Probably' suggests likelihood, but 'possibly not' introduces devastating doubt. The caesura created by the comma mirrors the soldier's hesitation and the gap between action and reflection. The stark word 'not' at the end leaves the uncertainty unresolved, suggesting this doubt is what haunts the soldier — the possibility that he killed an unarmed person, which drives his guilt and PTSD symptoms.",
        marks: 5,
      },
      {
        question:
          "How does the poem's structure reflect the soldier's psychological state?",
        lines: 6,
        modelAnswer:
          "The poem has irregular stanza lengths and frequent enjambment, suggesting the soldier's thoughts are disordered and uncontrollable — they spill across line and stanza breaks just as intrusive memories spill into his consciousness. The lack of a regular rhyme scheme reflects the absence of order or resolution in his mind. The poem grows more fragmented as it progresses, mirroring the breakdown of the soldier's composure. The final couplet is isolated, much like the soldier himself — cut off from normality by his trauma.",
        marks: 6,
      },
      {
        question:
          "What is the significance of the title 'Remains'? Explain the multiple meanings.",
        lines: 5,
        modelAnswer:
          "The title has several layers of meaning. 'Remains' literally refers to the dead body ('remains' as a noun for a corpse). It also refers to what remains in the soldier's mind — the memories that he cannot escape. The blood 'remains' on the street as a stain that will not wash away, symbolising permanent guilt. Finally, the soldier himself 'remains' stuck in this moment, unable to move on. The title encapsulates the poem's core idea: conflict leaves things behind that can never be fully cleaned up or forgotten.",
        marks: 5,
      },
      {
        question:
          "Analyse the image 'I see broad daylight on the other side'. What makes this so disturbing?",
        lines: 5,
        modelAnswer:
          "This image describes the soldier seeing light through the looter's bullet wounds — the body has been shot clean through. It is disturbing because of its graphic, physical precision, which contrasts with the casual tone of the narration. The phrase 'broad daylight' is usually associated with openness and visibility, but here it is visible through a fatal wound, making something ordinary feel horrific. It also suggests the soldier's memory is photographic in its clarity — he cannot forget even the smallest, most gruesome detail, which is a symptom of PTSD.",
        marks: 5,
      },
      {
        question:
          "How does the context of the Iraq War and real soldier testimony shape our reading of this poem?",
        lines: 5,
        modelAnswer:
          "Armitage based the poem on a real account from a soldier who served in Iraq, published in a documentary series called 'The Not Dead'. Knowing this makes the poem feel more urgent and authentic — it is not an imagined scenario but a real person's trauma. The Iraq War (2003 onwards) was controversial, with many questioning whether it was justified, which adds weight to the soldier's uncertainty ('possibly not'). The context reminds us that PTSD affects real soldiers long after conflicts end, and Armitage's purpose is partly to give voice to those whose suffering is often invisible.",
        marks: 4,
      },
      {
        question:
          "Compare how the effects of conflict are presented in Remains and one other poem from the anthology.",
        lines: 8,
        modelAnswer:
          "In Remains, Armitage presents conflict's effects as psychological — the soldier is physically unharmed but mentally devastated by guilt and PTSD. The colloquial voice masks deep trauma, and images like 'his blood-shadow stays on the street' show that memory is the true battlefield. In War Photographer, Duffy similarly explores the aftermath of conflict, but from the perspective of someone who witnesses suffering rather than causing it. The photographer's hands 'tremble' as he develops images, suggesting he too is haunted. Both poems show that conflict's worst damage may be invisible and long-lasting. However, a key difference is agency: the soldier in Remains pulled the trigger and carries personal guilt, while the photographer's pain comes from witnessing others' suffering and feeling powerless. Both poems argue that you do not leave conflict behind when you leave the warzone.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "Handle sensitively: some students or family members may have military experience or personal experience of PTSD. Frame the lesson with care and offer an alternative task if needed.",
      "Use only short phrases (under 10 words) as quotation prompts — do not reproduce the full poem on worksheets.",
      "The graphic imagery is deliberately shocking; discuss with students why Armitage makes this choice (authenticity, impact, refusal to sanitise war) rather than treating it as gratuitous.",
      "Strong comparison pairs: War Photographer (witnessing conflict), Poppies (family's perspective on conflict's aftermath), Bayonet Charge (the moment of violence vs. the aftermath).",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding texts",
      "AO2 — Analysing language, form, and structure",
      "AO3 — Understanding contexts",
      "Writing about a poet's purpose",
      "Close language analysis",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 7 — Comparing Poems
  // ─────────────────────────────────────────────
  {
    id: "pc-07-comparing-poems",
    title: "Comparing Poems — Building a Comparison Essay",
    text: "A skills-focused lesson teaching students how to structure and write a comparison essay for the AQA Paper 2, Section B poetry question, using poems already studied in the anthology.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the exam requirements for the AQA Paper 2, Section B comparison question.",
      "Learn and practise a clear comparative paragraph structure (PEEC — Point, Evidence, Explanation, Comparison).",
      "Write a structured comparison of two poems addressing a shared theme.",
    ],
    successCriteria: [
      "I can identify valid comparison points between two poems (theme, language, structure, context).",
      "I can write a comparative paragraph using the PEEC structure.",
      "I can use comparative connectives fluently (similarly, in contrast, whereas, however, likewise).",
    ],
    keywords: [
      "comparison",
      "contrast",
      "connective",
      "PEEC",
      "synthesis",
      "theme",
      "divergent",
      "convergent",
    ],
    starterActivity: {
      title: "Spot the Connection",
      duration: "7 minutes",
      instructions:
        "Display the titles and poets of four poems already studied (e.g., Ozymandias, London, Exposure, Storm on the Island). Students work in pairs to find as many connections as possible in 3 minutes — theme, technique, time period, tone, anything valid. Feedback: teacher lists connections on the board. Emphasise that in the exam, students must choose a second poem to compare with a named poem, so the ability to make quick, valid connections is a crucial skill. Introduce today's focus: how to turn those connections into a structured comparison essay.",
      differentiation: {
        support:
          "Provide a prompt sheet with categories to compare (theme, tone, form, context, language techniques).",
        core: "Open comparison in pairs.",
        stretch:
          "For each connection, identify whether it is a similarity or a difference, and which would make a stronger essay point.",
      },
      resources: ["Poem titles displayed on board", "Prompt sheet (support)"],
    },
    mainActivities: [
      {
        title: "PEEC Structure — Teacher Modelling",
        duration: "18 minutes",
        instructions:
          "Teacher introduces the PEEC comparative paragraph structure: Point (a comparative statement about both poems), Evidence (a short quotation from Poem A), Explanation (analysis of language/structure/form), Comparison (a short quotation from Poem B with analysis showing similarity or difference). Teacher models a full PEEC paragraph on the board comparing how power is presented in Ozymandias and London. For example — Point: Both Shelley and Blake present power as oppressive. Evidence (Ozymandias): 'sneer of cold command' suggests cruelty and contempt. Explanation: the plosive sounds and the word 'sneer' convey the king's disdain for his subjects. Comparison (London): Similarly, Blake presents power as controlling through 'chartered' — even the streets and river are owned and mapped, suggesting total institutional dominance. However, while Shelley shows power crumbling over time, Blake's London suggests power is actively and currently oppressing people. Students copy the model and annotate each section (P, E, E, C) in different colours.",
        differentiation: {
          support:
            "Provide the model paragraph pre-printed with each section colour-coded; students label and annotate rather than copying.",
          core: "Copy the model and annotate each PEEC section independently.",
          stretch:
            "After annotating, identify what the model paragraph could improve — e.g., add structural analysis, embed context, explore an alternative interpretation.",
        },
        resources: [
          "PEEC model paragraph on board/visualiser",
          "Coloured pens for annotation",
          "Printed model (support version)",
        ],
      },
      {
        title: "Guided Practice — Writing a PEEC Paragraph",
        duration: "22 minutes",
        instructions:
          "Students choose a comparison pair from three options provided (each using poems already studied): (1) How do Owen and Heaney present nature as a threat? (Exposure / Storm on the Island). (2) How do Shelley and Blake present the abuse of power? (Ozymandias / London). (3) How do Armitage and Owen present the reality of conflict? (Remains / Exposure). Students plan their paragraph using a PEEC planning grid (4 boxes: Point, Evidence A, Explanation, Comparison B). They then write the paragraph in full. Teacher circulates, focusing support on embedding quotations and using comparative connectives. With 5 minutes remaining, students swap books and peer-assess using a checklist: Is there a clear comparative point? Are quotations from both poems? Is there language analysis? Is there a connective linking the two poems? Peer writes one specific improvement suggestion.",
        differentiation: {
          support:
            "Provide a paragraph frame with sentence starters for each PEEC section and a connective word bank (similarly, in contrast, whereas, however, on the other hand).",
          core: "Use the planning grid, then write the paragraph independently.",
          stretch:
            "Write two PEEC paragraphs — one on a similarity and one on a difference — and add a concluding sentence that evaluates which poet's presentation is more effective.",
        },
        resources: [
          "PEEC planning grid worksheet",
          "Paragraph frame (support version)",
          "Comparative connective word bank",
          "Peer assessment checklist",
        ],
      },
    ],
    plenaryActivity: {
      title: "Live Marking — What Would the Examiner Say?",
      duration: "8 minutes",
      instructions:
        "Select one student's paragraph (with permission, or use a pre-prepared example) and display under the visualiser. As a class, mark it against a simplified version of the AQA mark scheme: Does it compare? (AO1) Does it analyse language? (AO2) Does it reference context? (AO3) Give the paragraph a band (1-4) and explain why. Then ask: what one improvement would move it up a band? This demystifies the marking process and helps students understand examiner expectations. Key takeaway: comparison must be woven through the paragraph, not bolted on at the end.",
      differentiation: {
        support: "Contribute to the class discussion with guided prompts from the teacher.",
        core: "Apply the mark scheme independently before class discussion.",
        stretch:
          "Suggest a specific rewording of a sentence in the paragraph to improve its band.",
      },
      resources: ["Visualiser", "Simplified AQA mark scheme (projected)"],
    },
    homework:
      "Write a full PEEC paragraph comparing how two poems of your choice present one of the following themes: the power of nature, the effects of conflict, or human pride. Use the planning grid from today's lesson.",
    worksheetQuestions: [
      {
        question:
          "What does the AQA Paper 2, Section B poetry question require you to do?",
        lines: 4,
        modelAnswer:
          "You are given one named poem from the anthology and asked how it presents a particular theme. You must compare it with another poem of your choice from the anthology that also addresses that theme. Your response should analyse language, form, and structure in both poems, use relevant context, and maintain a comparative structure throughout.",
        marks: 3,
      },
      {
        question:
          "What does PEEC stand for, and why is this structure useful for comparison essays?",
        lines: 5,
        modelAnswer:
          "PEEC stands for Point, Evidence, Explanation, Comparison. It is useful because it ensures every paragraph addresses both poems rather than writing about them separately. The Point makes a comparative claim, the Evidence and Explanation analyse the first poem, and the Comparison section brings in the second poem with its own evidence and analysis. This structure weaves comparison throughout, which is what the examiner is looking for.",
        marks: 4,
      },
      {
        question:
          "List five comparative connectives that can be used to link analysis of two poems.",
        lines: 3,
        modelAnswer:
          "Similarly, in contrast, whereas, however, likewise, on the other hand, conversely, equally, while, although.",
        marks: 3,
      },
      {
        question:
          "Identify one similarity and one difference between Exposure and Storm on the Island in their presentation of nature.",
        lines: 6,
        modelAnswer:
          "Similarity: Both Owen and Heaney personify nature as a violent, threatening force — Owen's winds 'knive' the soldiers while Heaney's sea 'spits like a tame cat turned savage'. Both poets use nature to explore human powerlessness. Difference: In Exposure, nature is fatal — soldiers die from the cold — whereas in Storm on the Island, the islanders survive the storm. Owen's nature is part of a real warzone context, while Heaney's operates as both a literal event and a political allegory for the Troubles.",
        marks: 6,
      },
      {
        question:
          "Why is it important to weave comparison throughout your essay rather than writing about Poem A and then Poem B separately?",
        lines: 5,
        modelAnswer:
          "Writing about poems separately (the 'tennis match' approach of dedicating half the essay to each poem) tends to produce description rather than analysis and makes it difficult for the examiner to see genuine comparison. Weaving comparison throughout — addressing both poems in every paragraph — demonstrates synthesis, which is a higher-order skill. It shows the examiner that you can hold both poems in mind simultaneously and draw out meaningful similarities and differences, which is rewarded in the higher mark bands.",
        marks: 4,
      },
      {
        question:
          "Write a PEEC paragraph comparing how Shelley and Blake present the abuse of power in Ozymandias and London.",
        lines: 12,
        modelAnswer:
          "Both Shelley and Blake present powerful figures who oppress those beneath them, yet they critique this abuse in different ways. Shelley uses the phrase 'sneer of cold command' to characterise Ozymandias as contemptuous of his subjects; the plosive 'c' sounds create a harsh, aggressive tone, and 'sneer' suggests the king took pleasure in his dominance. Similarly, Blake presents institutional power as inescapable through the repeated word 'chartered', which implies that London's streets and even its river are owned and controlled. However, while Shelley shows that abusive power is ultimately futile — the statue lies in ruins, its arrogance mocked by 'lone and level sands' — Blake presents power as actively and presently oppressive, with no sign of it crumbling. This difference reflects their contexts: Shelley looks back at a fallen empire to warn present rulers, while Blake writes from within the injustice he describes.",
        marks: 8,
      },
    ],
    teacherNotes: [
      "This lesson is deliberately skills-focused and draws on poems already studied. If students have not yet studied all the poems referenced, adjust the comparison pairs to those already covered.",
      "The PEEC structure is a scaffold, not a straitjacket — encourage higher-ability students to develop more fluid comparative writing once they have mastered the basic structure.",
      "Live marking is powerful but requires a supportive classroom culture. If students are reluctant to share work publicly, use a pre-prepared paragraph instead.",
      "Consider providing a simplified mark scheme handout for students to keep — understanding how they are assessed is one of the most effective revision tools.",
    ],
    targetedSkills: [
      "AO1 — Comparative reading and understanding",
      "AO2 — Analysing language, form, and structure comparatively",
      "AO3 — Contextual links between poems",
      "Essay structuring",
      "Comparative connective use",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 8 — Unseen Poetry
  // ─────────────────────────────────────────────
  {
    id: "pc-08-unseen-poetry",
    title: "Unseen Poetry — How to Approach an Unseen Poem",
    text: "A skills lesson teaching students a systematic approach to tackling the AQA Paper 2, Section C unseen poetry question, building confidence with unfamiliar texts.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Develop a clear, repeatable strategy for approaching an unseen poem under exam conditions.",
      "Practise annotating an unfamiliar poem for language, structure, and form features.",
      "Write an analytical response to an unseen poem within a time limit.",
    ],
    successCriteria: [
      "I can use the READ strategy to approach an unseen poem systematically.",
      "I can identify and analyse at least three techniques in an unfamiliar poem.",
      "I can write a focused analytical paragraph in response to a question about an unseen poem.",
    ],
    keywords: [
      "unseen",
      "annotation",
      "inference",
      "tone",
      "mood",
      "imagery",
      "volta",
      "voice",
    ],
    starterActivity: {
      title: "Myth Busting — Unseen Poetry Is Not Scary",
      duration: "7 minutes",
      instructions:
        "Display five common student statements about unseen poetry: (1) 'You can't revise for it.' (2) 'There's a right answer and I'll get it wrong.' (3) 'I won't understand it.' (4) 'It's impossible without knowing the context.' (5) 'I should just focus on the anthology — it's worth more marks.' Students vote True or False for each (mini whiteboards). Teacher debunks each: (1) You can practise the skill — that IS revision. (2) There are many valid interpretations — the examiner rewards analysis, not a single 'correct' reading. (3) You understand more than you think — trust your instincts and build from there. (4) You can infer context from the poem itself. (5) Section C is worth 32 marks — ignoring it is throwing away a third of the paper. Transition: 'Today I am going to give you a strategy that makes unseen poetry manageable.'",
      differentiation: {
        support: "True/False cards provided; teacher explains each debunk clearly.",
        core: "Vote and justify their reasoning before teacher reveals the answer.",
        stretch:
          "For each myth, suggest one specific thing a student could do to overcome that fear.",
      },
      resources: ["Five statements displayed on board", "Mini whiteboards"],
    },
    mainActivities: [
      {
        title: "The READ Strategy — Modelled Annotation",
        duration: "20 minutes",
        instructions:
          "Introduce the READ strategy: R — Read the poem twice (once for gist, once for detail). E — Examine the title, opening, and ending (these often hold the key). A — Annotate language, structure, and form features. D — Decide on the poet's message or purpose. Teacher models the strategy live using a short unseen poem (teacher to select a suitable out-of-copyright poem, 12-16 lines, with clear imagery and a discernible tone shift). Project the poem and talk through each stage: First read: 'My initial impression is...' Second read: circling and annotating — 'I notice this metaphor... this enjambment... this shift in tone at this point...' Examine: 'The title suggests... The opening establishes... The ending leaves us with...' Decide: 'I think the poet's message is...' Students copy the READ acronym and the teacher's annotations. Emphasise: you do not need to understand every word — focus on what you can say, not what you cannot.",
        differentiation: {
          support:
            "Provide a printed READ strategy card with prompts for each stage that students can keep for future use.",
          core: "Follow the teacher model and add their own annotations alongside.",
          stretch:
            "After the teacher model, identify one additional technique or interpretation the teacher did not mention.",
        },
        resources: [
          "Selected unseen poem (projected and printed)",
          "READ strategy card (support version)",
          "Coloured pens for annotation",
        ],
      },
      {
        title: "Independent Practice — New Unseen Poem",
        duration: "22 minutes",
        instructions:
          "Distribute a second unseen poem (teacher to select an appropriate out-of-copyright poem, 14-20 lines, with accessible imagery). Students apply the READ strategy independently: 5 minutes to read and annotate, then 15 minutes to write a response to the question: 'How does the poet present [theme — teacher to specify based on chosen poem]?' Remind students of the PEE structure and encourage them to write 2-3 paragraphs covering language, structure, and the poet's overall message. With 2 minutes remaining, students re-read their response and underline every place they have analysed a technique — this self-check reveals whether they have described or analysed.",
        differentiation: {
          support:
            "Provide the poem pre-annotated with three features highlighted and a paragraph frame for the response.",
          core: "Annotate and respond independently using the READ strategy.",
          stretch:
            "Include a comment on form (e.g., sonnet, free verse, ballad) and how it contributes to meaning. Also consider alternative interpretations.",
        },
        resources: [
          "Second unseen poem (printed)",
          "Lined paper or exercise books",
          "Timer displayed",
        ],
      },
    ],
    plenaryActivity: {
      title: "Strategy Recap and Confidence Check",
      duration: "6 minutes",
      instructions:
        "Quick-fire recall: 'What does R-E-A-D stand for?' Cold-call four students (one letter each). Then: students rate their confidence with unseen poetry on a scale of 1-5 on their mini whiteboard (1 = very anxious, 5 = very confident). Show on the count of three. Teacher acknowledges progress and reassures those still building confidence — this is a skill that improves with practice. Set the expectation: 'Every week from now, we will spend 10 minutes practising an unseen poem.' Key takeaway: you already have the analytical skills from studying the anthology — unseen poetry just asks you to apply them to a new text.",
      differentiation: {
        support: "Confidence rating with no pressure to justify publicly.",
        core: "Rate confidence and share one thing that helped today.",
        stretch:
          "Identify the most challenging aspect of unseen poetry for them and suggest a strategy to address it.",
      },
      resources: ["Mini whiteboards"],
    },
    homework:
      "Find a poem you have never read before (from a poetry website or book). Apply the READ strategy: annotate it and write one PEE paragraph analysing a technique you noticed. Bring the annotated poem and paragraph to the next lesson.",
    worksheetQuestions: [
      {
        question: "What does the READ strategy stand for? Explain each step.",
        lines: 6,
        modelAnswer:
          "R — Read the poem twice: once for overall impression (gist), once for detail. E — Examine the title, opening, and ending, as these often hold clues to the poem's meaning and structure. A — Annotate language, structure, and form features: circle powerful words, note techniques, mark tone shifts. D — Decide on the poet's message or purpose: what are they trying to say or make the reader feel?",
        marks: 4,
      },
      {
        question:
          "Why is it important to read an unseen poem at least twice before writing about it?",
        lines: 4,
        modelAnswer:
          "The first reading gives a general impression — the mood, subject, and tone. The second reading allows you to notice specific details: techniques, structural choices, shifts in tone, and patterns you missed the first time. Many poems reveal deeper meanings on the second read, and rushing to write after one reading often leads to superficial or inaccurate responses.",
        marks: 3,
      },
      {
        question:
          "What three areas should you look for when annotating an unseen poem?",
        lines: 4,
        modelAnswer:
          "Language: word choices, imagery (metaphor, simile, personification), sound devices (alliteration, sibilance), and connotations. Structure: how the poem is organised — stanza breaks, enjambment, caesura, the opening vs. closing, any volta or shift. Form: the type of poem (sonnet, free verse, dramatic monologue), rhyme scheme, and rhythm/metre. Ideally, your response should address all three.",
        marks: 3,
      },
      {
        question:
          "A student writes: 'The poet uses a metaphor in line 3.' Explain why this is description, not analysis, and rewrite it as analysis.",
        lines: 6,
        modelAnswer:
          "This is description because it simply identifies a technique without explaining its effect. Analysis requires exploration of how and why the technique works. Improved version: 'The poet uses the metaphor [quotation] to suggest [interpretation]. The word [specific word] connotes [meaning], creating a sense of [effect] for the reader. This reinforces the poem's wider theme of [theme].' Analysis always moves from identification to explanation of effect.",
        marks: 5,
      },
      {
        question:
          "Why should you pay particular attention to a poem's title, opening line, and final line?",
        lines: 5,
        modelAnswer:
          "The title often establishes the subject or provides a lens through which to read the poem. The opening line sets the tone and introduces the speaker's voice or situation. The final line is what the poet chooses to leave the reader with — it often delivers the poem's core message, provides a twist, or creates a lasting emotional effect. Comparing the opening and ending can also reveal a structural journey or shift in the poem.",
        marks: 4,
      },
      {
        question:
          "How can you comment on context in an unseen poetry response when you do not know anything about the poet?",
        lines: 5,
        modelAnswer:
          "You can infer context from the poem itself: the language (archaic or modern), the subject matter (war, nature, love), the setting, and the attitudes expressed. You can also comment on the type of context without specific historical detail — for example, 'The poet appears to be writing from personal experience' or 'The formal structure suggests this was written in a period when poetic conventions were important.' The examiner does not expect specific biographical context for unseen poems; they reward thoughtful inference.",
        marks: 4,
      },
      {
        question:
          "What is the difference between identifying a technique and analysing its effect? Write an example of each using the phrase 'the stars wept silver tears'.",
        lines: 6,
        modelAnswer:
          "Identification: 'The poet uses personification in the phrase the stars wept silver tears.' This names the technique but says nothing about its impact. Analysis: 'The personification in the phrase the stars wept silver tears imbues the natural world with human emotion, suggesting that the speaker's grief is so overwhelming that even the sky seems to mourn. The modifier silver gives the tears a precious, beautiful quality, implying that sorrow can coexist with beauty. This creates a bittersweet tone that deepens the reader's emotional engagement.' Analysis explains how the technique creates meaning and effect.",
        marks: 5,
      },
      {
        question:
          "A student says: 'I don't understand the poem so I can't write anything.' Give three pieces of advice to help them.",
        lines: 6,
        modelAnswer:
          "1. You do not need to understand everything — focus on what you can say. Even identifying the mood or tone ('this poem feels sad / angry / reflective') gives you a starting point. 2. Look for concrete images or individual words you recognise and analyse those — you can write a strong paragraph on a single word choice. 3. Use the poem's structure as a way in: comment on stanza breaks, enjambment, or the contrast between the opening and ending. Structure analysis does not require full comprehension of every line and can still score well.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Teacher must select two appropriate unseen poems for this lesson. Choose out-of-copyright poems (pre-1928) or poems you have permission to use. Poems by poets such as Christina Rossetti, Thomas Hardy, or Emily Dickinson work well. Ensure the poems are accessible but not simplistic.",
      "Do NOT reproduce any copyrighted poems on worksheets. Use only short phrases for analysis examples.",
      "The READ strategy is a scaffold — encourage students to internalise it so it becomes automatic, then gradually move beyond it as confidence grows.",
      "This lesson should be followed by regular short unseen poetry practice (10-15 minutes per week) to build fluency and confidence.",
      "Section C of Paper 2 is worth 32 marks (24 for the first question, 8 for the comparison). Students who neglect this section lose a significant proportion of available marks.",
    ],
    targetedSkills: [
      "AO1 — Reading and understanding unseen texts",
      "AO2 — Analysing language, form, and structure",
      "Exam technique",
      "Independent annotation",
      "Timed writing",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 9 — Unseen Poetry Comparison
  // ─────────────────────────────────────────────
  {
    id: "pc-09-unseen-comparison",
    title: "Unseen Poetry Comparison — Technique and Practice",
    text: "A focused lesson on tackling the AQA Paper 2, Section C, Question 2 unseen poetry comparison question (8 marks). Students learn to compare two unseen poems efficiently and effectively under timed conditions.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Understand the specific requirements of the 8-mark unseen poetry comparison question.",
      "Develop a rapid comparison strategy that identifies similarities and differences in method.",
      "Practise writing a focused, time-efficient comparison of two unseen poems.",
    ],
    successCriteria: [
      "I can identify at least two valid comparison points between two unseen poems.",
      "I can write a comparison response that addresses both poems with analytical detail.",
      "I can complete the comparison task within the recommended 12-15 minutes.",
    ],
    keywords: [
      "comparison",
      "method",
      "effect",
      "similarity",
      "difference",
      "tone",
      "imagery",
      "structure",
    ],
    starterActivity: {
      title: "Quick Recall — What Do We Know About Unseen Poetry?",
      duration: "5 minutes",
      instructions:
        "Rapid-fire quiz: teacher asks 5 questions about the unseen poetry section (from last lesson's READ strategy). Students answer on mini whiteboards. Questions: (1) How many times should you read an unseen poem? (Twice.) (2) What does the A in READ stand for? (Annotate.) (3) How many marks is the first unseen poetry question worth? (24.) (4) How many marks is the comparison question worth? (8.) (5) Roughly how long should you spend on the comparison question? (12-15 minutes.) Teacher emphasises: 8 marks for 12-15 minutes of work — this is efficient marks if you have a strategy.",
      differentiation: {
        support: "Multiple choice options displayed for each question.",
        core: "Answer from memory on mini whiteboards.",
        stretch:
          "After the quiz, explain why the comparison question is considered 'efficient marks' and what the examiner is looking for.",
      },
      resources: ["Mini whiteboards", "Quiz questions on board"],
    },
    mainActivities: [
      {
        title: "Comparison Strategy — The SAME/DIFF Approach",
        duration: "20 minutes",
        instructions:
          "Teacher introduces the SAME/DIFF comparison approach for the 8-mark question. Step 1: After reading both poems, ask — what is the SAME? (Theme, mood, a shared technique, the subject.) Step 2: What is DIFF(erent)? (Tone, the poet's attitude, the techniques used, the structure.) For 8 marks, students need 2-3 comparative points with evidence from both poems. Teacher models the strategy live using two short unseen poems (teacher to select two thematically linked out-of-copyright poems, 10-16 lines each). Project both poems. Think aloud: 'Both poems are about loss. Poem A uses a metaphor of water to represent grief, while Poem B uses autumn imagery. Both create a melancholic tone, but Poem A feels more angry while Poem B feels resigned.' Model writing a concise comparison response (approximately 200-250 words) in real time, demonstrating how to reference both poems throughout. Key point: this question rewards comparison of METHOD (how poets do it) not just THEME (what they write about).",
        differentiation: {
          support:
            "Provide a SAME/DIFF graphic organiser with columns for each poem and rows for theme, technique, tone, and structure.",
          core: "Follow the teacher model and take notes on the approach.",
          stretch:
            "During the modelling, mentally draft their own comparison and then compare their approach with the teacher's model — what did they do differently?",
        },
        resources: [
          "Two unseen poems projected and printed",
          "SAME/DIFF graphic organiser (support version)",
          "Timer",
        ],
      },
      {
        title: "Timed Practice — Independent Comparison",
        duration: "25 minutes",
        instructions:
          "Distribute two new unseen poems (teacher to select a thematically linked pair, out-of-copyright, 10-16 lines each) with the question: 'In both poems the speakers describe [theme — teacher to specify]. What are the similarities and/or differences between the methods the poets use to present [theme]?' Students have 15 minutes to read, annotate, and write their comparison response. Teacher signals 5 minutes remaining and 1 minute remaining. After writing, students spend 5 minutes on self-assessment using a checklist: (1) Did I compare, not just describe? (2) Did I reference both poems? (3) Did I discuss method (how) not just theme (what)? (4) Did I use evidence from both poems? (5) Is my response roughly 200-300 words? Students traffic-light each criterion. Final 5 minutes: teacher selects one strong response (with permission) to read aloud and discuss what makes it effective.",
        differentiation: {
          support:
            "Provide the SAME/DIFF graphic organiser pre-filled with one comparison point; students add one more and then write the response using a sentence starter frame.",
          core: "Independent annotation and response within the time limit.",
          stretch:
            "Complete the response in 12 minutes (exam pace) and use remaining time to add an additional comparison point or refine analysis.",
        },
        resources: [
          "Two new unseen poems (printed)",
          "Self-assessment checklist",
          "Timer displayed",
        ],
      },
    ],
    plenaryActivity: {
      title: "Top Tips Takeaway",
      duration: "5 minutes",
      instructions:
        "Students write their top three tips for the unseen poetry comparison question on a sticky note. Share two or three aloud. Teacher summarises the non-negotiables: (1) Always compare — never write about the poems separately. (2) Focus on method — how do the poets do it, not just what do they write about. (3) Keep it concise — 8 marks means 200-300 words, not a full essay. Stick notes in books as a revision resource.",
      differentiation: {
        support: "Choose three tips from a list of six provided.",
        core: "Write three tips independently.",
        stretch:
          "Write a tip that addresses a common mistake students make (e.g., retelling the poem's story instead of analysing technique).",
      },
      resources: ["Sticky notes"],
    },
    homework:
      "Find two short poems on a similar theme (from a poetry anthology, website, or book). Apply the SAME/DIFF strategy: annotate both and write a 200-300 word comparison. Bring to the next lesson for peer assessment.",
    worksheetQuestions: [
      {
        question:
          "How many marks is the unseen poetry comparison question worth, and approximately how long should you spend on it?",
        lines: 3,
        modelAnswer:
          "The unseen poetry comparison question is worth 8 marks. You should spend approximately 12-15 minutes on it, leaving the majority of your time for the 24-mark first question.",
        marks: 2,
      },
      {
        question:
          "What is the difference between comparing THEME and comparing METHOD? Why does the examiner reward method comparison?",
        lines: 5,
        modelAnswer:
          "Comparing theme means discussing what both poems are about — e.g., 'Both poems are about loss.' Comparing method means discussing how the poets present that theme — e.g., 'Poem A uses an extended metaphor to convey loss, while Poem B uses a fragmented structure.' The examiner rewards method comparison because it demonstrates analytical skill (AO2) — you are showing that you understand the craft of poetry, not just its subject matter.",
        marks: 4,
      },
      {
        question:
          "Explain the SAME/DIFF strategy for approaching the comparison question.",
        lines: 5,
        modelAnswer:
          "After reading both poems, identify what is the SAME: shared themes, techniques, tones, or subjects. Then identify what is DIFF(erent): contrasting tones, different techniques, opposing attitudes, or structural differences. Use these as your comparison points, ensuring you reference both poems with evidence in every paragraph. Aim for 2-3 comparison points in your response.",
        marks: 4,
      },
      {
        question:
          "A student writes: 'Poem A is about a storm. The poet uses a simile. Poem B is about the sea. The poet uses personification.' Explain why this is not a comparison and rewrite it comparatively.",
        lines: 6,
        modelAnswer:
          "This is not a comparison because it describes each poem separately without making connections. The student identifies techniques but does not compare them. Rewritten: 'Both poems explore the power of nature, but they use different techniques to convey this. Poem A uses a simile to compare the storm to [X], creating a sense of [effect], whereas Poem B personifies the sea as [Y], giving it a more threatening, deliberate quality. While Poem A's simile keeps the reader at a distance, Poem B's personification makes nature feel actively hostile.' This version weaves both poems together and compares method and effect.",
        marks: 5,
      },
      {
        question:
          "Why should you avoid retelling what happens in each poem in your comparison response?",
        lines: 4,
        modelAnswer:
          "Retelling (narrative summary) does not demonstrate analysis and will not score marks for AO2 (language, form, and structure). The examiner already knows what the poems say — they want to see what you notice about how the poets say it. Every sentence should focus on technique, effect, or comparison rather than describing the poem's content. Retelling also wastes precious time in a timed question.",
        marks: 3,
      },
      {
        question:
          "What should the structure of your comparison response look like for 8 marks?",
        lines: 5,
        modelAnswer:
          "A concise response of 200-300 words, organised into 2-3 short comparative paragraphs. Each paragraph should make a comparison point and reference both poems with brief evidence. There is no need for a lengthy introduction or conclusion — a single opening sentence establishing the comparison and a brief concluding sentence are sufficient. Every paragraph must compare (using connectives like similarly, whereas, in contrast) rather than treating the poems separately.",
        marks: 4,
      },
      {
        question:
          "List three things you should annotate when you first read the two unseen poems in preparation for the comparison question.",
        lines: 4,
        modelAnswer:
          "(1) Key imagery or techniques in each poem and their effects. (2) The tone or mood of each poem — are they similar or different? (3) Any structural features such as stanza breaks, enjambment, a volta, or contrasting openings and endings. These annotations will provide ready-made comparison points and evidence for your response.",
        marks: 3,
      },
      {
        question:
          "A student is running out of time on the comparison question. They have only written about one poem. What should they do?",
        lines: 4,
        modelAnswer:
          "They should immediately add a comparative sentence referencing the second poem, even if it is brief. For example: 'In contrast, Poem B takes a different approach by using [technique], which creates [effect].' A response that mentions both poems, however briefly, will always score higher than one that only addresses a single poem. It is better to have a shorter response that genuinely compares than a longer one that only discusses one text.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Teacher must select appropriate unseen poem pairs for both the modelling and independent practice. Use out-of-copyright poems or poems you have permission to use. Choose pairs with a clear thematic link but different approaches.",
      "Suitable thematic pairings for practice: two poems about childhood, two poems about nature, two poems about ageing, two poems about a journey.",
      "The 8-mark comparison is often under-practised. Regular short practice (even 10 minutes at the start of lessons) builds speed and confidence significantly.",
      "Common student errors: writing about poems separately, retelling content, identifying techniques without explaining effect, and spending too long on this question at the expense of the 24-mark response.",
      "Do NOT reproduce full copyrighted poems on any worksheets. Use only short illustrative phrases.",
    ],
    targetedSkills: [
      "AO1 — Comparative reading of unseen texts",
      "AO2 — Analysing and comparing methods",
      "Timed writing under exam conditions",
      "Efficient comparison structuring",
    ],
  },

  // ─────────────────────────────────────────────
  // LESSON 10 — Exam Skills
  // ─────────────────────────────────────────────
  {
    id: "pc-10-exam-skills",
    title: "Exam Skills — Timed Poetry Comparison Practice",
    text: "A full exam-simulation lesson where students complete a timed anthology comparison response under near-exam conditions, followed by structured self- and peer-assessment using the AQA mark scheme.",
    board: "AQA",
    yearGroup: "10-11",
    duration: "60 minutes",
    objectives: [
      "Apply all poetry analysis and comparison skills in a timed exam-style response.",
      "Manage time effectively across planning, writing, and checking phases.",
      "Self- and peer-assess using the AQA mark scheme to identify strengths and specific areas for improvement.",
    ],
    successCriteria: [
      "I can plan and write a comparative essay on a named poem and a poem of my choice within 45 minutes.",
      "I can use the AQA mark scheme to accurately assess my own and a peer's response.",
      "I can identify one specific action to improve my next response.",
    ],
    keywords: [
      "mark scheme",
      "band",
      "assessment objective",
      "time management",
      "comparison",
      "evaluation",
      "self-assessment",
      "improvement target",
    ],
    starterActivity: {
      title: "Exam Countdown — Strategy Recap",
      duration: "5 minutes",
      instructions:
        "Rapid recap of everything students need for the timed response. Display on the board: TIME — 45 minutes (5 planning, 35 writing, 5 checking). STRUCTURE — Comparative paragraphs using PEEC, not poem-by-poem. CONTENT — Language (AO2), Structure (AO2), Context (AO3), Comparison throughout (AO1). NON-NEGOTIABLES — Quotations from both poems, analytical vocabulary, comparative connectives. Students copy the checklist into the top of their response page as a quick-reference guide. Teacher sets expectations: exam silence, no talking, no anthologies for the second poem (they must work from memory). Distribute the exam-style question and the named poem (printed).",
      differentiation: {
        support:
          "Provide a printed strategy checklist card that students can refer to during the timed response.",
        core: "Copy the checklist and work from memory.",
        stretch:
          "Before starting, mentally plan their second poem choice and two key quotations they will use.",
      },
      resources: [
        "Strategy checklist on board",
        "Exam question and named poem (printed)",
        "Printed strategy card (support version)",
      ],
    },
    mainActivities: [
      {
        title: "Timed Response — Planning Phase",
        duration: "5 minutes",
        instructions:
          "Students read the question and the named poem. They have 5 minutes to: (1) Annotate the named poem for key language, structure, and form features. (2) Choose their comparison poem and jot down 3-4 quotations from memory. (3) Sketch a brief plan: 3-4 paragraph topics, each with a comparison point. Teacher circulates silently, offering a nod of encouragement but no verbal support — this simulates exam conditions. At the end of 5 minutes, teacher signals the transition to writing.",
        differentiation: {
          support:
            "Provide a planning frame with boxes for each paragraph: Comparison Point | Poem A Quotation | Poem B Quotation | Key technique.",
          core: "Free planning in any format they prefer (mind-map, bullet list, grid).",
          stretch:
            "Plan an introduction that addresses the question directly and a conclusion that evaluates which poet is more effective.",
        },
        resources: [
          "Planning frame (support version)",
          "Exam question and named poem",
        ],
      },
      {
        title: "Timed Response — Writing Phase",
        duration: "35 minutes",
        instructions:
          "Students write their comparative essay in exam silence. Teacher displays a countdown timer and gives quiet time checks at 15 minutes ('You should be on your second paragraph'), 25 minutes ('You should be starting your third paragraph or conclusion'), and 30 minutes ('5 minutes remaining — finish your current point and check your work'). Teacher circulates to monitor engagement but does not intervene with content support. Students who finish early should re-read their response, checking: Have I compared in every paragraph? Have I analysed language AND structure? Have I included context? Are my quotations accurate?",
        differentiation: {
          support:
            "Students may refer to their printed strategy checklist card. Accept 2-3 well-developed paragraphs rather than insisting on 4.",
          core: "Full timed response: 3-4 comparative paragraphs with introduction and conclusion.",
          stretch:
            "Include a counter-argument or alternative interpretation in at least one paragraph (e.g., 'However, it could also be argued that...').",
        },
        resources: [
          "Lined paper or exam booklets",
          "Countdown timer displayed",
          "Printed strategy card (support version)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Self- and Peer-Assessment with the Mark Scheme",
      duration: "12 minutes",
      instructions:
        "Distribute the simplified AQA mark scheme (4 bands). Students spend 4 minutes reading their own response and highlighting evidence of: AO1 (comparison and understanding) in one colour, AO2 (language/structure analysis) in another, AO3 (context) in a third. They then assign themselves a band with a brief justification. Swap books with a partner for 4 minutes: the partner reads, highlights, and assigns a band. If the bands differ, pairs discuss why and agree on a final band. Final 4 minutes: students write one specific improvement target on a sticky note and place it in their book (e.g., 'I need to analyse structure more — next time I will include a point about enjambment or stanza form'). Teacher collects responses for detailed marking and shares two exemplar responses in the following lesson.",
      differentiation: {
        support:
          "Provide a simplified mark scheme with student-friendly descriptors and examples for each band.",
        core: "Use the standard simplified mark scheme.",
        stretch:
          "After assessing, rewrite their weakest paragraph to move it into a higher band.",
      },
      resources: [
        "Simplified AQA mark scheme (printed)",
        "Three colours of highlighter",
        "Sticky notes for targets",
      ],
    },
    homework:
      "Rewrite your weakest paragraph from today's timed response, improving it based on your self-assessment target. Bring both the original and the improved version to the next lesson so you can see your progress.",
    worksheetQuestions: [
      {
        question:
          "How should you divide your 45 minutes for the anthology comparison question? Explain why each phase matters.",
        lines: 5,
        modelAnswer:
          "5 minutes planning: annotate the named poem, choose a comparison poem, note key quotations, and sketch a paragraph plan. This prevents a rambling, unstructured response. 35 minutes writing: aim for 3-4 comparative paragraphs plus a brief introduction and conclusion. This is the bulk of your marks, so spend the most time here. 5 minutes checking: re-read for accuracy, check you have compared in every paragraph, and correct any errors. Checking often reveals missing analysis or comparison that can be quickly added.",
        marks: 4,
      },
      {
        question:
          "What are the three Assessment Objectives for the poetry comparison question, and what does each reward?",
        lines: 6,
        modelAnswer:
          "AO1: Read, understand, and respond to texts — maintain a critical, comparative style and use textual references (quotations) that support interpretation. AO2: Analyse the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology. AO3: Show understanding of the relationships between texts and the contexts in which they were written. In practice, this means: compare and use quotations (AO1), analyse how poets use techniques (AO2), and link to relevant historical, social, or biographical context (AO3).",
        marks: 6,
      },
      {
        question:
          "What is the difference between a Band 2 response and a Band 4 response in the AQA poetry mark scheme?",
        lines: 6,
        modelAnswer:
          "A Band 2 response is 'supported': it shows some understanding of the poems, makes some reference to language or structure, and may comment on context, but comparison is limited or bolted on. Quotations may be used but analysis is often surface-level. A Band 4 response is 'convincing and exploratory': it offers a perceptive, personal interpretation with detailed analysis of language, structure, and form. Comparison is woven throughout, and context is used to deepen understanding. The key differences are the depth of analysis, the quality of comparison, and the ability to explore alternative interpretations.",
        marks: 5,
      },
      {
        question:
          "A student has written three paragraphs, each about a different technique, but has only discussed Poem A. They have two minutes left. What should they do?",
        lines: 4,
        modelAnswer:
          "They should immediately add a comparative point at the end referencing Poem B. Even a few sentences comparing Poem B's approach to the same theme will significantly improve the mark, as comparison is essential for AO1. For example: 'In contrast, [Poet B] approaches this theme differently by using [technique], which creates [effect]. While Poem A [approach], Poem B [different approach].' It is always better to compare briefly than to add more analysis of a single poem.",
        marks: 4,
      },
      {
        question:
          "Why is it important to memorise quotations from the anthology poems?",
        lines: 4,
        modelAnswer:
          "In the exam, you have the named poem printed on the paper, but you must recall quotations from your chosen comparison poem from memory. Without quotations, you cannot provide textual evidence (AO1) or analyse specific language choices (AO2), which limits you to the lower mark bands. Memorising 3-4 short, versatile quotations per poem gives you the evidence you need to write detailed, analytical paragraphs.",
        marks: 3,
      },
      {
        question:
          "Describe two common mistakes students make in the poetry comparison question and explain how to avoid each.",
        lines: 6,
        modelAnswer:
          "Mistake 1: Writing about each poem separately (the 'poem A then poem B' approach). This results in two mini-essays rather than a comparison. Avoid it by making a comparative point in every paragraph and using connectives to link analysis of both poems. Mistake 2: Retelling or paraphrasing the poems instead of analysing technique. This describes what the poem says rather than how the poet says it. Avoid it by always asking 'How does the poet achieve this effect?' and focusing on specific word choices, structural features, and their impact on the reader.",
        marks: 6,
      },
      {
        question:
          "After completing your timed response, how should you use the remaining time to check and improve your work?",
        lines: 5,
        modelAnswer:
          "Re-read every paragraph and check: (1) Have I compared both poems, not just one? If not, add a comparative sentence. (2) Have I analysed language techniques, not just identified them? If not, add an explanation of effect. (3) Have I mentioned context at least once? If not, add a brief contextual link. (4) Are my quotations accurate and properly embedded? Correct any errors. (5) Does my response answer the specific question asked? Even small additions during checking time — an extra comparative sentence, a corrected quotation — can move a response up a band.",
        marks: 4,
      },
      {
        question:
          "Write a specific improvement target for your next poetry comparison response. Explain what you will do differently and why it will improve your mark.",
        lines: 5,
        modelAnswer:
          "Example: 'My target is to include more structural analysis. In today's response, I focused on language but did not discuss enjambment, stanza form, or the poems' openings and endings. Next time, I will dedicate one paragraph to comparing the poets' structural choices — for example, how one uses regular stanzas while the other uses free verse, and what this suggests about their approach to the theme. This will improve my AO2 marks by showing the examiner I can analyse structure as well as language.'",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Teacher must prepare an exam-style question with a named poem. Use a question in the AQA format: 'Compare how poets present [theme] in [named poem] and in one other poem from your anthology.' Print the named poem for students; they recall the comparison poem from memory.",
      "Suggested question themes that span multiple poems: the power of nature, the effects of conflict on individuals, how poets present human pride, memory and its effects.",
      "During the timed response, maintain strict exam conditions — this trains students for the real experience and builds stamina.",
      "Collect all responses for detailed marking. In the following lesson, share two anonymised exemplars (one mid-band and one high-band) to show students what different levels look like.",
      "The self- and peer-assessment phase is crucial — students who understand the mark scheme make better decisions about what to include in their responses. Invest time in training them to use it accurately.",
      "Do NOT reproduce full poems on any materials. The named poem for the exam practice should be a single printed poem from the anthology — students work from this and from memory.",
    ],
    targetedSkills: [
      "AO1 — Comparative reading and response",
      "AO2 — Analysing language, form, and structure",
      "AO3 — Contextual understanding",
      "Timed exam writing",
      "Self-assessment and target setting",
      "Time management under pressure",
    ],
  },
];
