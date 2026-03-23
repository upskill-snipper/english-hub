import type { LessonPlan } from '@/types'

export const poetryLoveRelationshipsLessons: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1 — Introduction to the Cluster
  // ─────────────────────────────────────────────
  {
    id: "lr-01-intro-cluster",
    title: "Introduction to the Cluster: Types of Love & Key Themes",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure of the AQA Love & Relationships cluster and the Paper 2 Section B exam format",
      "Identify the fifteen poems and their poets within the anthology",
      "Categorise the poems by type of love: romantic, familial, obsessive, nostalgic, and unrequited",
      "Begin to make thematic links between poems in preparation for comparison work"
    ],
    successCriteria: [
      "I can name all fifteen poems and their poets in the Love & Relationships cluster",
      "I can group poems into at least four categories of love",
      "I can explain the AQA Paper 2 Section B exam format and what examiners are looking for"
    ],
    keywords: [
      "anthology",
      "cluster",
      "romantic love",
      "familial love",
      "obsessive love",
      "nostalgia",
      "unrequited",
      "comparison",
      "Paper 2 Section B"
    ],
    starterActivity: {
      title: "Love Brainstorm: What Types of Love Exist?",
      duration: "8 minutes",
      instructions:
        "Display the word 'LOVE' in the centre of the board. Students work in pairs for three minutes to brainstorm as many types of love as possible on mini-whiteboards (e.g. romantic, parental, unrequited, obsessive, platonic, self-love). Pairs share with the class; teacher builds a mind-map on the board, colour-coding types. Explain that the anthology explores many of these — love is not just romance.",
      differentiation: {
        support: "Provide a list of six types of love with definitions; students match and add examples.",
        core: "Students brainstorm independently and provide real-world or literary examples for each type.",
        stretch: "Students rank the types by which they think will appear most in a poetry anthology and justify their order."
      },
      resources: ["Mini-whiteboards", "Whiteboard markers", "Love types mind-map template"]
    },
    mainActivities: [
      {
        title: "Meet the Poems: Card Sort & Categorisation",
        duration: "20 minutes",
        instructions:
          "Distribute a set of fifteen cards, each showing a poem title, poet name, and a one-sentence summary. Students work in groups of three or four to sort the cards into categories of love (romantic, familial, obsessive, nostalgic, loss). Some poems will fit multiple categories — encourage debate. Each group records their groupings on a large sheet of sugar paper. Gallery walk: groups move around and compare other groupings, noting differences. Teacher facilitates whole-class discussion on which poems were hardest to categorise and why.",
        differentiation: {
          support: "Provide pre-sorted colour-coded cards with two categories already filled in; students complete the remaining groups.",
          core: "Students sort all fifteen cards independently and justify each placement with a sentence.",
          stretch: "Students identify poems that belong in multiple categories and write a sentence for each explaining the overlap."
        },
        resources: [
          "Poem card sort set (x15 cards per group)",
          "Sugar paper and glue sticks",
          "Category heading cards"
        ]
      },
      {
        title: "Exam Format Walkthrough & First Connections",
        duration: "20 minutes",
        instructions:
          "Display a sample Paper 2 Section B question on the board (e.g. 'Compare how poets present the effects of love in [named poem] and one other poem from the anthology'). Walk students through the format: one named poem printed on the paper, students choose the second poem, 30 marks, approximately 45 minutes. Introduce the four AOs assessed: AO1 (response), AO2 (language/structure/form), AO3 (context), AO4 (comparison). Students then work in pairs: given the named poem 'Sonnet 29', they choose a second poem from their card sort and write three bullet-point connections. Share under the visualiser.",
        differentiation: {
          support: "Provide a writing frame: 'Both poems explore... However, in Sonnet 29 the poet... whereas in [poem] the poet...'",
          core: "Students write three bullet-point connections independently, covering at least two AOs.",
          stretch: "Students write a full introductory comparison sentence and explain which AO each connection targets."
        },
        resources: [
          "Sample AQA Paper 2 question slide",
          "AO breakdown reference sheet",
          "Comparison writing frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Exit Ticket: My Anthology Overview",
      duration: "7 minutes",
      instructions:
        "Students complete an exit ticket with three prompts: (1) Name three poems and their poets from the cluster. (2) Which type of love interests you most and why? (3) What will the exam ask you to do? Collect and review to identify gaps for next lesson.",
      differentiation: {
        support: "Sentence starters provided for each prompt.",
        core: "Full written responses expected for all three prompts.",
        stretch: "Add a fourth prompt: 'Which two poems do you think would make a strong comparison pair and why?'"
      }
    },
    homework:
      "Create a revision poster showing all fifteen poems grouped by theme. Include poet names, one key quotation per poem (use the anthology), and colour-code by type of love.",
    worksheetQuestions: [
      {
        question: "Name the fifteen poems in the AQA Love & Relationships cluster and their poets.",
        lines: 8,
        modelAnswer:
          "The fifteen poems are: 'When We Two Parted' (Byron), 'Love's Philosophy' (Shelley), 'Porphyria's Lover' (Browning), 'Sonnet 29 — I think of thee!' (Barrett Browning), 'Neutral Tones' (Hardy), 'The Farmer's Bride' (Mew), 'Walking Away' (Day Lewis), 'Letters from Yorkshire' (Dooley), 'Eden Rock' (Causley), 'Follower' (Heaney), 'Mother, Any Distance' (Armitage), 'Before You Were Mine' (Duffy), 'Winter Swans' (Sheers), 'Singh Song!' (Nagra), 'My Last Duchess' (Browning).",
        marks: 5
      },
      {
        question: "Explain what is meant by 'romantic love' and 'familial love'. Give one poem example for each.",
        lines: 4,
        modelAnswer:
          "Romantic love is the passionate, intimate love between partners, as seen in 'Sonnet 29' where Barrett Browning expresses intense longing for her lover. Familial love is the bond between family members, as seen in 'Walking Away' where Day Lewis reflects on the painful love of letting a child grow up.",
        marks: 3
      },
      {
        question: "What does the AQA Paper 2, Section B exam question ask you to do? How many marks is it worth?",
        lines: 4,
        modelAnswer:
          "The exam gives you one named poem (printed on the paper) and asks you to compare how two poets present a theme or idea. You must choose a second poem from the anthology. It is worth 30 marks and you should spend approximately 45 minutes on it. You are assessed on AO1 (your response to the poems), AO2 (analysis of language, structure, and form), AO3 (context), and AO4 (comparison).",
        marks: 4
      },
      {
        question: "Why might some poems fit into more than one category of love? Give an example.",
        lines: 5,
        modelAnswer:
          "Love is complex and poets often explore multiple dimensions. For example, 'Before You Were Mine' by Carol Ann Duffy is a familial poem about a mother-daughter relationship, but it also contains nostalgia and a sense of possessive longing — the speaker almost claims ownership of the mother's past. This blurring of categories reflects the reality that love rarely fits neatly into one box.",
        marks: 4
      },
      {
        question: "Choose two poems from the cluster that you think would make a strong comparison pair. Explain your choice.",
        lines: 5,
        modelAnswer:
          "'Porphyria's Lover' and 'My Last Duchess' would make a strong pair because both are dramatic monologues by Robert Browning that explore possessive, controlling love. Both speakers treat women as objects they wish to control, and both poems end with a disturbing sense of the speaker's power. Comparing them allows analysis of how Browning uses the same form to expose similar themes of toxic masculinity.",
        marks: 4
      },
      {
        question: "What are the four Assessment Objectives for this question? Which do you think is most important and why?",
        lines: 5,
        modelAnswer:
          "AO1: personal response supported by textual references. AO2: analysis of language, form, and structure. AO3: understanding of context. AO4: comparison between poems. AO2 is often considered most important because detailed analysis of how poets use language and structure is what separates competent responses from excellent ones — it shows the examiner you can explore how meaning is created, not just what the poem is about.",
        marks: 4
      }
    ],
    teacherNotes: [
      "This lesson assumes no prior knowledge of the anthology. Gauge existing understanding during the starter.",
      "Card sort sets should be laminated for reuse across classes.",
      "Emphasise from the outset that students will need to memorise quotations — the anthology is not provided in the exam.",
      "The gallery walk can be shortened if time is tight; prioritise the exam format walkthrough.",
      "Collect exit tickets to identify students who may need additional scaffolding in subsequent lessons."
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO4: Comparison",
      "Thematic categorisation",
      "Exam technique awareness"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 2 — When We Two Parted & Love's Philosophy
  // ─────────────────────────────────────────────
  {
    id: "lr-02-byron-shelley",
    title: "When We Two Parted & Love's Philosophy: Romantic Love & Loss",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Byron presents the pain of lost love in 'When We Two Parted'",
      "Analyse how Shelley uses natural imagery to argue for requited love in 'Love's Philosophy'",
      "Compare the two poets' contrasting presentations of romantic love",
      "Develop close language analysis skills targeting AO2"
    ],
    successCriteria: [
      "I can explain how Byron uses sensory imagery and structure to convey grief and betrayal",
      "I can explain how Shelley uses rhetorical devices and natural imagery to persuade",
      "I can write a comparative paragraph linking both poems through the theme of romantic love"
    ],
    keywords: [
      "sensory imagery",
      "rhetorical question",
      "personification",
      "semantic field",
      "caesura",
      "ABAB rhyme scheme",
      "apostrophe (address)",
      "persuasion",
      "betrayal"
    ],
    starterActivity: {
      title: "Emotion Spectrum: How Does Lost Love Feel?",
      duration: "7 minutes",
      instructions:
        "Draw a spectrum on the board from 'Sadness' to 'Anger'. Read aloud the first stanza of 'When We Two Parted' without revealing the title or poet. Students place themselves on the spectrum using a sticky note with their name. Discuss: what clues in the language suggest the speaker's emotion? Reveal the poem and poet. Explain that this lesson pairs it with another Romantic poet exploring the opposite problem — wanting love you cannot have.",
      differentiation: {
        support: "Provide the stanza printed with three key words highlighted; students focus on these.",
        core: "Students identify two language choices and explain their emotional effect.",
        stretch: "Students predict the rest of the poem based on the tone and imagery of the first stanza."
      },
      resources: ["Printed first stanza strips", "Sticky notes", "Emotion spectrum display"]
    },
    mainActivities: [
      {
        title: "Deep Dive: 'When We Two Parted' — Language & Structure Analysis",
        duration: "20 minutes",
        instructions:
          "Distribute the full poem. Read aloud together. Students annotate independently for five minutes, focusing on: sensory imagery ('pale grew thy cheek and cold'), the semantic field of death and silence, the shift in tone across the four stanzas, and the circular structure (opening and closing with 'silence and tears'). Teacher models annotation of stanza one under the visualiser. Students then complete a guided analysis table: Quotation | Technique | Effect | Link to Theme. Pairs share their best row; teacher selects three to display and discuss whole-class.",
        differentiation: {
          support: "Provide a pre-annotated copy with key techniques labelled; students fill in the 'Effect' column only.",
          core: "Students complete the full analysis table with four quotations.",
          stretch: "Students write a paragraph analysing how the circular structure mirrors the speaker's inability to move on."
        },
        resources: [
          "Full text of 'When We Two Parted'",
          "Analysis table worksheet",
          "Pre-annotated copy (support tier)",
          "Highlighters"
        ]
      },
      {
        title: "Deep Dive: 'Love's Philosophy' — Rhetoric & Natural Imagery",
        duration: "15 minutes",
        instructions:
          "Read 'Love's Philosophy' aloud — first seriously, then playfully. Discuss: is this poem sincere or a chat-up line? Students annotate for: personification of nature ('the fountains mingle with the river'), the listing structure, rhetorical questions, and the final volta 'What are all these kissings worth / If thou kiss not me?' Students complete the same analysis table format. Quick comparison discussion: Byron mourns love lost; Shelley argues for love not yet given. What do they share? (Intensity, direct address, emotional vulnerability.)",
        differentiation: {
          support: "Provide sentence starters: 'Shelley personifies nature by... This suggests...'",
          core: "Students complete the analysis table independently and write one comparison sentence.",
          stretch: "Students evaluate whether Shelley's argument is genuinely romantic or manipulative, using textual evidence."
        },
        resources: [
          "Full text of 'Love's Philosophy'",
          "Analysis table worksheet",
          "Comparison sentence frame"
        ]
      },
      {
        title: "Model Comparative Paragraph & Guided Writing",
        duration: "10 minutes",
        instructions:
          "Display a model comparative paragraph on the board: 'Both Byron and Shelley present speakers who are deeply affected by love, yet their emotional states contrast sharply. Byron's speaker in \"When We Two Parted\" is consumed by grief, as the sensory imagery of \"pale grew thy cheek and cold\" associates the beloved with death, suggesting love has left him emotionally frozen. In contrast, Shelley's speaker in \"Love's Philosophy\" is animated by desire; the personification of \"the fountains mingle with the river\" presents nature itself as an argument for physical union, implying that love should be as natural and inevitable as the merging of water. However, both poets use direct address to create intimacy — Byron's \"thy\" and Shelley's \"thou\" both place the reader in the position of the beloved, forcing engagement with the speaker's longing.' Annotate the paragraph together, identifying: topic sentence, embedded quotation, technique, effect, comparison connective, second poem, and the 'however' that complicates. Students then write their own comparative paragraph on a different aspect (e.g. structure, tone, or use of nature).",
        differentiation: {
          support: "Provide a paragraph frame with gaps for quotations and techniques.",
          core: "Students write a full comparative paragraph using the model as a guide.",
          stretch: "Students write two paragraphs and include AO3 context (Romantic movement, biographical details)."
        },
        resources: [
          "Model paragraph display slide",
          "Comparative paragraph frame (support tier)",
          "AO3 context fact sheet on Byron and Shelley"
        ]
      }
    ],
    plenaryActivity: {
      title: "Quotation Relay & Key Takeaways",
      duration: "5 minutes",
      instructions:
        "Quick-fire quotation relay: teacher reads a quotation, students hold up 'B' (Byron) or 'S' (Shelley) on mini-whiteboards. Then: 'In one sentence, what is the key difference between how these two poems present romantic love?' Students write on whiteboards and hold up. Select three to read aloud and discuss.",
      differentiation: {
        support: "Provide a quotation bank on the desk for reference during the relay.",
        core: "Students respond from memory.",
        stretch: "Students must name the technique used in each quotation as well as the poet."
      }
    },
    homework:
      "Learn five key quotations from each poem (ten total). Write a paragraph comparing how Byron and Shelley use imagery to present the effects of love. Use at least two quotations from each poem.",
    worksheetQuestions: [
      {
        question: "What is the overall mood of 'When We Two Parted'? How does Byron create this mood through language?",
        lines: 5,
        modelAnswer:
          "The overall mood is one of grief, betrayal, and silent suffering. Byron creates this through the semantic field of death and coldness: 'pale grew thy cheek and cold' associates the beloved with a corpse, while 'a knell to mine ear' compares hearing her name to a funeral bell. The repeated motif of 'silence and tears' in the opening and closing stanzas creates a mood of suppressed emotion, as though the pain is too great to articulate.",
        marks: 4
      },
      {
        question: "How does the circular structure of 'When We Two Parted' reflect the speaker's emotional state?",
        lines: 4,
        modelAnswer:
          "The poem begins and ends with 'silence and tears', creating a circular structure that mirrors the speaker's inability to move on from the pain of separation. Just as the poem returns to its starting point, the speaker remains trapped in grief — nothing has changed, no resolution has been found, and the wound remains as fresh as when the parting first occurred.",
        marks: 4
      },
      {
        question: "How does Shelley use personification of nature in 'Love's Philosophy'? What is its purpose?",
        lines: 5,
        modelAnswer:
          "Shelley personifies natural elements to argue that union between lovers is natural and inevitable. 'The fountains mingle with the river' and 'the winds of heaven mix for ever' present nature as constantly joining together, implying that for two people to remain apart is unnatural. The cumulative listing of natural pairs builds a persuasive argument, with nature itself serving as evidence that the beloved should yield to the speaker's desire.",
        marks: 4
      },
      {
        question: "Compare how Byron and Shelley present the speakers' attitudes to love. Who suffers more?",
        lines: 6,
        modelAnswer:
          "Byron's speaker suffers from love that has been lost and betrayed — the pain is retrospective and tinged with bitterness ('they name thee before me, / A knell to mine ear'). Shelley's speaker suffers from love that is unrequited — the pain is present and driven by frustrated desire. Arguably Byron's speaker suffers more deeply because the loss is permanent and involves betrayal, whereas Shelley's speaker still has hope. However, both are united by their powerlessness: neither can control whether they are loved in return.",
        marks: 5
      },
      {
        question: "Identify the rhetorical question at the end of 'Love's Philosophy'. What effect does it have?",
        lines: 4,
        modelAnswer:
          "'What are all these kissings worth / If thou kiss not me?' This rhetorical question serves as the poem's volta, turning the philosophical argument into a personal plea. After presenting nature's unity as evidence, Shelley suddenly makes it intimate and direct. The effect is almost playful — the grand argument collapses into a simple request for a kiss, which could be read as charmingly vulnerable or as a calculated manipulation.",
        marks: 4
      },
      {
        question: "What contextual information about the Romantic period helps you understand these poems?",
        lines: 5,
        modelAnswer:
          "Both Byron and Shelley were key figures of the Romantic movement (early 19th century), which valued intense emotion, individual experience, and the power of nature. Byron's poem reflects the Romantic focus on personal suffering and the idea that love is the most powerful human experience. Shelley's use of nature as a philosophical argument reflects the Romantic belief that the natural world holds truths about human existence. Both poets lived unconventional personal lives — their own love affairs informed their poetry.",
        marks: 4
      }
    ],
    teacherNotes: [
      "Students do not have the anthology in the exam — stress the importance of memorising quotations from this lesson onwards.",
      "The debate about whether 'Love's Philosophy' is sincere or manipulative generates strong engagement; allow time for it.",
      "The model comparative paragraph is a key teaching moment — spend time deconstructing it and displaying it for future reference.",
      "Byron's biographical context (his affair with Lady Caroline Lamb) can be referenced but keep it age-appropriate.",
      "Shelley and Byron were friends — this adds an interesting contextual layer for stretch students."
    ],
    targetedSkills: [
      "AO1: Personal response with textual references",
      "AO2: Language and structure analysis",
      "AO3: Romantic period context",
      "AO4: Comparative writing",
      "Close reading and annotation"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 3 — Porphyria's Lover & My Last Duchess
  // ─────────────────────────────────────────────
  {
    id: "lr-03-browning-obsessive",
    title: "Porphyria's Lover & My Last Duchess: Obsessive & Possessive Love",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Browning uses the dramatic monologue form to expose obsessive love in 'Porphyria's Lover'",
      "Analyse how Browning presents possessive love and control in 'My Last Duchess'",
      "Compare how both poems use an unreliable narrator to critique toxic masculinity",
      "Explore how Victorian context shapes the power dynamics in both poems"
    ],
    successCriteria: [
      "I can explain the features of a dramatic monologue and why Browning uses this form",
      "I can analyse how language reveals the speakers' disturbing attitudes to love",
      "I can write a comparative paragraph exploring possessive love across both poems"
    ],
    keywords: [
      "dramatic monologue",
      "unreliable narrator",
      "possessive love",
      "objectification",
      "enjambment",
      "caesura",
      "patriarchy",
      "Victorian values",
      "control",
      "power"
    ],
    starterActivity: {
      title: "Would You Trust This Speaker? First Impressions",
      duration: "8 minutes",
      instructions:
        "Display the opening five lines of 'Porphyria's Lover' ('The rain set in early tonight...') without title or poet. Students read silently and answer: 'What kind of person is speaking? What clues does the language give you?' Students share predictions on whiteboards. Then reveal that this speaker murders the woman he loves. Discuss: can we trust what a speaker tells us in a poem? Introduce the concept of the dramatic monologue and the unreliable narrator.",
      differentiation: {
        support: "Provide three guided questions to scaffold response: 'What is the setting? What is the mood? What does the speaker seem to be feeling?'",
        core: "Students write two sentences explaining what the opening reveals about the speaker's character.",
        stretch: "Students identify the pathetic fallacy in the opening and predict how it foreshadows events."
      },
      resources: ["Opening lines display slide", "Mini-whiteboards", "Dramatic monologue definition card"]
    },
    mainActivities: [
      {
        title: "Analysing 'Porphyria's Lover': From Worship to Murder",
        duration: "18 minutes",
        instructions:
          "Read the full poem aloud. Students follow on printed copies. Pause at the pivot point ('That moment she was mine') and ask: what changes? Students annotate in two colours — blue for moments where the speaker seems loving, red for moments that seem disturbing. Key focus areas: the power shift when Porphyria arrives ('she shut the cold out and the storm'), the objectification after death ('her smooth white shoulder bare'), the terrifying calm of 'And yet God has not said a word!' Students complete an analysis grid: Quotation | What it reveals about the speaker | How Browning wants the reader to feel.",
        differentiation: {
          support: "Provide six pre-selected quotations with sentence starters for analysis.",
          core: "Students select their own quotations and complete the full analysis grid.",
          stretch: "Students write about how Browning uses enjambment and the single stanza form to create a sense of obsessive, unstoppable momentum."
        },
        resources: [
          "Full text of 'Porphyria's Lover'",
          "Two-colour annotation guide",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "Analysing 'My Last Duchess': Power, Art, and Silence",
        duration: "17 minutes",
        instructions:
          "Read the poem aloud in character (teacher or confident student as the Duke). Students follow on printed copies. Establish the dramatic situation: who is the Duke speaking to? Why? What happened to the Duchess? Students annotate for: the Duke's possessiveness ('since none puts by / The curtain I have drawn for you, but I'), objectification of the Duchess as art ('That's my last Duchess painted on the wall'), the chilling understatement of 'I gave commands; / Then all smiles stopped together'. Complete the same analysis grid. Class discussion: how does the Duke's language reveal what he will not say directly?",
        differentiation: {
          support: "Provide a simplified prose summary alongside the poem and three key quotations pre-highlighted.",
          core: "Students annotate and complete the grid independently, selecting four quotations.",
          stretch: "Students analyse how the Duke's control of the conversation mirrors his desire to control the Duchess, linking form to meaning."
        },
        resources: [
          "Full text of 'My Last Duchess'",
          "Prose summary (support tier)",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "Comparative Writing: Two Browning Speakers",
        duration: "10 minutes",
        instructions:
          "Display a model comparative paragraph: 'Both speakers in Browning's dramatic monologues reveal possessive attitudes towards the women they claim to love. In \"Porphyria's Lover\", the speaker's assertion that \"That moment she was mine\" reduces Porphyria to a possession to be seized; the demonstrative \"that\" pins down the exact instant of ownership. Similarly, the Duke in \"My Last Duchess\" refers to the Duchess as \"my last Duchess\" — the possessive pronoun \"my\" and the adjective \"last\" reveal she was merely one item in a collection. However, their methods of control differ: Porphyria's lover acts in a moment of passionate madness, while the Duke is coldly calculated — his chilling euphemism \"I gave commands\" suggests institutional, aristocratic power rather than individual rage. Browning perhaps suggests that possessive love, whether hot or cold, always ends in the silencing of women.' Deconstruct the paragraph. Students write their own comparative paragraph on a different aspect (e.g. how both speakers try to justify their actions).",
        differentiation: {
          support: "Provide a paragraph frame with sentence starters and quotation options.",
          core: "Students write a full paragraph independently using the model structure.",
          stretch: "Students include AO3 Victorian context (women as property, coverture laws, patriarchal control)."
        },
        resources: [
          "Model paragraph display slide",
          "Comparative writing frame (support tier)",
          "Victorian context fact sheet"
        ]
      }
    ],
    plenaryActivity: {
      title: "Who Is More Dangerous? Continuum Debate",
      duration: "7 minutes",
      instructions:
        "Place signs at either end of the room: 'Porphyria's Lover is more dangerous' and 'The Duke is more dangerous'. Students stand on the continuum to show their opinion. Select students from different points to justify their position using textual evidence. Teacher summarises: Browning wrote both poems in the same year (1842) — what does this tell us about his fascination with extreme love?",
      differentiation: {
        support: "Students prepare one reason with a quotation before moving to the continuum.",
        core: "Students give a spoken justification with at least one embedded quotation.",
        stretch: "Students must respond to and challenge a classmate's argument before stating their own."
      }
    },
    homework:
      "Write a full comparison essay paragraph: 'Compare how Browning presents the speakers' attitudes to women in \"Porphyria's Lover\" and \"My Last Duchess\".' Include at least two quotations from each poem and one AO3 context point.",
    worksheetQuestions: [
      {
        question: "What is a dramatic monologue? Why does Browning use this form in both poems?",
        lines: 4,
        modelAnswer:
          "A dramatic monologue is a poem spoken by a single character to a silent listener, revealing the speaker's personality through their own words. Browning uses it to let the speakers expose themselves — the reader sees through the speakers' attempts to justify their behaviour. The irony is that the more they talk, the more they condemn themselves. The form gives Browning plausible deniability: the poet never comments directly, letting the reader judge.",
        marks: 4
      },
      {
        question: "How does the speaker in 'Porphyria's Lover' try to justify the murder? Is he convincing?",
        lines: 5,
        modelAnswer:
          "The speaker claims Porphyria 'worshipped' him and wanted to be his forever, suggesting he was fulfilling her wish by preserving the moment of her love. He states 'No pain felt she' to absolve himself and 'And yet God has not said a word!' to suggest divine approval. He is not convincing — the calm, matter-of-fact tone after strangling her with her own hair is deeply disturbing, and his need to justify himself reveals guilt beneath the surface.",
        marks: 5
      },
      {
        question: "What does the phrase 'I gave commands; / Then all smiles stopped together' reveal about the Duke?",
        lines: 4,
        modelAnswer:
          "This euphemism strongly implies the Duke had the Duchess killed, but his refusal to state it directly reveals his aristocratic sense of propriety — he considers it beneath him to be explicit. The caesura created by the semicolon creates a chilling pause between the command and its consequence. The word 'commands' shows he operates through institutional power; he does not need to act himself. 'All smiles stopped' is devastating in its understatement — her life is reduced to the cessation of an expression that annoyed him.",
        marks: 5
      },
      {
        question: "Compare how the two speakers objectify the women in these poems. Use quotations from both.",
        lines: 6,
        modelAnswer:
          "Both speakers reduce women to objects they can control. In 'Porphyria's Lover', the speaker describes her after death as having 'smooth white shoulder bare' and 'her smiling rosy little head' — she becomes a beautiful doll to be admired. In 'My Last Duchess', the Duke has literally turned the Duchess into a painting: 'That's my last Duchess painted on the wall, / Looking as if she were alive.' For both speakers, the women are only satisfactory when silenced and still — love is not about connection but possession.",
        marks: 5
      },
      {
        question: "How does Victorian context help us understand the power dynamics in these poems?",
        lines: 5,
        modelAnswer:
          "In Victorian England, women were legally the property of their husbands under coverture laws — they had no independent legal identity. The Duke's treatment of the Duchess as property ('my last Duchess') reflects this legal reality. Porphyria crosses class boundaries by visiting her lower-status lover, which in Victorian society would have been scandalous. Browning uses both poems to critique the patriarchal system that enabled men to control and silence women, reflecting growing Victorian anxieties about women's rights.",
        marks: 4
      },
      {
        question: "Which speaker do you find more disturbing and why? Support your answer with evidence.",
        lines: 5,
        modelAnswer:
          "The Duke is arguably more disturbing because his violence is premeditated and systematic. Porphyria's lover acts in a moment of passion — twisted as it is, there is an emotional logic. The Duke, however, is entirely cold: he disposes of one wife and calmly negotiates for the next ('his fair daughter's self... is my object'). The word 'object' is devastating — it applies to both the daughter and the painting. His cruelty is institutional, not emotional, which makes it more dangerous because it is repeatable.",
        marks: 4
      }
    ],
    teacherNotes: [
      "Sensitive content warning: both poems deal with violence against women. Be aware of potential safeguarding considerations.",
      "Reading 'My Last Duchess' in character (with appropriate menace) significantly improves student engagement.",
      "The continuum debate generates strong discussion — insist on textual evidence for every claim.",
      "Both poems were published in 1842 in 'Dramatic Lyrics' — this context adds depth for stretch students.",
      "The model comparative paragraph is deliberately detailed — students may need to see it twice before writing their own."
    ],
    targetedSkills: [
      "AO1: Critical personal response",
      "AO2: Language, form, and structure analysis",
      "AO3: Victorian context",
      "AO4: Comparative writing",
      "Understanding dramatic monologue"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 4 — Sonnet 29 & Letters from Yorkshire
  // ─────────────────────────────────────────────
  {
    id: "lr-04-distance-connection",
    title: "Sonnet 29 & Letters from Yorkshire: Distance & Connection",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Barrett Browning uses the Petrarchan sonnet form to convey intense longing in 'Sonnet 29'",
      "Analyse how Dooley explores the gap between physical and emotional connection in 'Letters from Yorkshire'",
      "Compare how both poems present love that transcends physical distance",
      "Develop understanding of how form and structure create meaning (AO2)"
    ],
    successCriteria: [
      "I can explain how Barrett Browning uses extended metaphor and the sonnet volta to convey longing",
      "I can explain how Dooley uses contrast and imagery to explore connection despite distance",
      "I can write a comparative paragraph about how both poems present love across distance"
    ],
    keywords: [
      "Petrarchan sonnet",
      "volta",
      "extended metaphor",
      "enjambment",
      "contrast",
      "sensory imagery",
      "epistolary",
      "physical vs emotional",
      "longing"
    ],
    starterActivity: {
      title: "Distance & Connection: How Do We Stay Close?",
      duration: "6 minutes",
      instructions:
        "Display the question: 'How do people maintain love when they are physically apart?' Students list methods on whiteboards (letters, texts, calls, memories, gifts). Discuss: which method creates the deepest connection? Explain that today's poems explore this question — one from the Victorian era (letters and longing) and one from the modern era (letters and reflection). Yet both find that love transcends physical distance.",
      differentiation: {
        support: "Provide a visual prompt with images of communication methods across different eras.",
        core: "Students write their answer and rank methods by emotional depth.",
        stretch: "Students consider how the method of communication changes the nature of the connection (e.g. a letter vs a text)."
      },
      resources: ["Discussion prompt slide", "Mini-whiteboards"]
    },
    mainActivities: [
      {
        title: "'Sonnet 29': The Vine Metaphor & the Petrarchan Volta",
        duration: "18 minutes",
        instructions:
          "Read 'Sonnet 29' aloud. Explain the Petrarchan sonnet form: octave (first 8 lines) presents a problem; sestet (final 6 lines) provides a resolution or shift. Students identify the volta. Focus on the extended metaphor: the beloved is a tree, the speaker is a vine ('I think of thee! — my thoughts do twine and bud / About thee, as wild vines about a tree'). In the sestet, the speaker recognises that thoughts are not enough — she wants the real person ('Renew thy presence'). Students annotate the poem, colour-coding octave and sestet, and complete a two-column table: 'What the speaker thinks/imagines' vs 'What the speaker wants'. Discuss: how does the exclamation mark in the title ('I think of thee!') set the tone?",
        differentiation: {
          support: "Provide a prose paraphrase alongside the poem and pre-label the octave/sestet division.",
          core: "Students identify the volta independently and complete the two-column table with quotations.",
          stretch: "Students analyse how Barrett Browning subverts the traditional Petrarchan form — the woman is the active speaker, not the passive beloved."
        },
        resources: [
          "Full text of 'Sonnet 29'",
          "Petrarchan sonnet structure diagram",
          "Two-column analysis table",
          "Prose paraphrase (support tier)"
        ]
      },
      {
        title: "'Letters from Yorkshire': Physical Labour vs Intellectual Work",
        duration: "17 minutes",
        instructions:
          "Read 'Letters from Yorkshire' aloud. Establish context: a modern poem about two people living different lives — one rural, one urban — connected by letters. Students identify the central contrast: his physical world ('he saw the first lapwings return') vs her intellectual world ('my desk, my screen, my email'). Focus on the key quotation: 'Is his life more real because he digs and plants?' Discuss: what does Dooley mean by 'real'? Annotate for: present tense (immediacy), sensory imagery, and the final image of letters as connection ('Still, it's the Word that connects'). Students complete analysis grid matching the Lesson 2 format.",
        differentiation: {
          support: "Provide a stanza-by-stanza summary and three pre-highlighted quotations with technique labels.",
          core: "Students annotate independently and complete the full analysis grid.",
          stretch: "Students analyse the significance of the capitalised 'Word' in the final stanza — link to religious/spiritual meaning."
        },
        resources: [
          "Full text of 'Letters from Yorkshire'",
          "Analysis grid worksheet",
          "Stanza summary (support tier)"
        ]
      },
      {
        title: "Comparative Paragraph: Love Across Distance",
        duration: "12 minutes",
        instructions:
          "Display the comparison question: 'Compare how Barrett Browning and Dooley present the experience of loving someone at a distance.' Students plan using a Venn diagram (similarities in the overlap, differences on each side). Then write one comparative paragraph. Remind them of the model from Lesson 2. Teacher circulates, offering verbal feedback. Select two students to read paragraphs aloud under the visualiser; class offers 'what went well' and 'even better if' feedback.",
        differentiation: {
          support: "Provide a completed Venn diagram with key points; students write the paragraph using a frame.",
          core: "Students complete the Venn diagram and write a paragraph independently.",
          stretch: "Students write two paragraphs — one on similarity, one on contrast — and include AO3 context for both poets."
        },
        resources: [
          "Comparison question slide",
          "Venn diagram template",
          "Paragraph writing frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "One Quotation, Two Poems",
      duration: "5 minutes",
      instructions:
        "Display the statement: 'Both poems suggest that love is strongest in the mind, not the body.' Students write one sentence agreeing or disagreeing, using a quotation from each poem. Three students share. Teacher summarises key learning and links forward to next lesson on parent-child love.",
      differentiation: {
        support: "Provide two quotation options for each poem to choose from.",
        core: "Students select their own quotations and write a full response.",
        stretch: "Students challenge the statement by arguing that one poem disagrees with it."
      }
    },
    homework:
      "Learn five quotations from each poem. Write a comparison paragraph: 'Compare how the speakers in \"Sonnet 29\" and \"Letters from Yorkshire\" feel about the absence of the person they love.'",
    worksheetQuestions: [
      {
        question: "What is a Petrarchan sonnet? How does Barrett Browning use this form in 'Sonnet 29'?",
        lines: 5,
        modelAnswer:
          "A Petrarchan sonnet has 14 lines divided into an octave (8 lines) presenting a problem and a sestet (6 lines) offering a shift or resolution. In 'Sonnet 29', the octave presents the speaker's thoughts overwhelming her — her imagined beloved is so vivid it becomes suffocating ('my thoughts do twine and bud / About thee, as wild vines'). The sestet's volta shifts to a desire for reality over imagination: 'Renew thy presence.' Barrett Browning subverts the tradition by making the woman the active, desiring speaker.",
        marks: 4
      },
      {
        question: "Analyse the extended metaphor of the vine and tree in 'Sonnet 29'. What does it reveal?",
        lines: 5,
        modelAnswer:
          "The speaker compares her thoughts to 'wild vines' growing around the beloved, who is a 'tree'. Initially this seems romantic — her love is natural and organic. However, the vines become excessive: they 'twine and bud' until the tree is hidden, 'set with thine'. This suggests her thoughts are overwhelming her, obscuring the real person with her idealised version. The volta recognises this: she wants to 'burst, shattered' the vines and see the real beloved, acknowledging that imagination is not enough.",
        marks: 5
      },
      {
        question: "What is the central contrast in 'Letters from Yorkshire'? How does Dooley present it?",
        lines: 5,
        modelAnswer:
          "The central contrast is between his physical, rural life ('digging his garden, planting potatoes') and her intellectual, urban life ('my desk, my screen, my email'). Dooley presents his world through sensory, natural imagery — 'the first lapwings return' — making it seem vivid and alive. Her world is presented through technology and abstraction. The key question 'Is his life more real because he digs and plants?' challenges this binary, suggesting that the emotional connection in their letters makes both lives equally 'real'.",
        marks: 4
      },
      {
        question: "Compare how both poems suggest that love can overcome physical distance.",
        lines: 6,
        modelAnswer:
          "Both poems present love as primarily a mental and emotional experience rather than a physical one. Barrett Browning's speaker in 'Sonnet 29' is so consumed by thoughts of her beloved that he becomes present in her mind — 'my thoughts do twine and bud / About thee' — suggesting imagination can substitute for physical presence. Similarly, Dooley's speaker finds that letters create genuine connection: 'Still, it's the Word that connects.' However, Barrett Browning ultimately rejects imagination as insufficient ('Renew thy presence'), while Dooley seems to accept the letters as a valid form of intimacy, suggesting a more mature acceptance of distance.",
        marks: 5
      },
      {
        question: "What does the capitalised 'Word' suggest in the final stanza of 'Letters from Yorkshire'?",
        lines: 4,
        modelAnswer:
          "The capitalised 'Word' elevates the concept of written communication to something almost sacred — it echoes the biblical 'In the beginning was the Word' (John 1:1), suggesting that language has a creative, life-giving power. Dooley implies that the words in their letters are not mere communication but something that creates and sustains their bond. The capitalisation transforms an ordinary act (writing a letter) into something profound and meaningful.",
        marks: 4
      },
      {
        question: "How does Barrett Browning's context as a Victorian woman poet affect your reading of 'Sonnet 29'?",
        lines: 4,
        modelAnswer:
          "Barrett Browning was one of the most celebrated poets of the Victorian era, yet she wrote love poetry from a woman's perspective in a tradition dominated by male speakers. 'Sonnet 29' is part of 'Sonnets from the Portuguese', written secretly for her husband Robert Browning. The poem's passionate female voice was radical — women were expected to be the objects of love poetry, not the active, desiring subjects. Her use of the Petrarchan form, traditionally used by male poets to worship silent women, is itself a subversion.",
        marks: 4
      }
    ],
    teacherNotes: [
      "The Petrarchan sonnet structure is a key teaching point — use a visual diagram to make the octave/sestet/volta clear.",
      "Barrett Browning's biography (her controlling father, her secret marriage to Robert Browning, her escape to Italy) adds rich AO3 context.",
      "'Letters from Yorkshire' is a modern poem — students may find it more accessible but should not treat it as less complex.",
      "The comparative paragraph is a formative assessment opportunity — collect and provide written feedback.",
      "The capitalised 'Word' is a productive point of debate; do not over-prescribe one interpretation."
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO2: Form and structure analysis",
      "AO3: Context (Victorian women poets)",
      "AO4: Comparative writing",
      "Understanding the Petrarchan sonnet"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 5 — Walking Away & Eden Rock
  // ─────────────────────────────────────────────
  {
    id: "lr-05-parent-child",
    title: "Walking Away & Eden Rock: Parent-Child Relationships",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Day Lewis presents the pain of letting go in 'Walking Away'",
      "Analyse how Causley presents an idealised vision of reunion in 'Eden Rock'",
      "Compare how both poems explore parent-child love through the lens of separation",
      "Develop understanding of how time and memory function in poetry"
    ],
    successCriteria: [
      "I can explain how Day Lewis uses simile and natural imagery to convey a parent's pain",
      "I can explain how Causley uses specific detail and the Eden metaphor to present longing",
      "I can compare the two poems' presentations of parent-child separation"
    ],
    keywords: [
      "simile",
      "natural imagery",
      "separation",
      "Eden",
      "idealisation",
      "memory",
      "paternal love",
      "letting go",
      "afterlife",
      "rite of passage"
    ],
    starterActivity: {
      title: "First Day: Letting Go",
      duration: "7 minutes",
      instructions:
        "Display a photograph of a child walking into school for the first time. Ask students: 'How do you think the parent feels? How does the child feel?' Brief pair discussion, then share. Then ask: 'Is there a moment in your life when someone had to let you go — or you had to let someone go?' (Sensitivity note: frame carefully.) Explain that both poems today explore this from a parent's perspective, and both are deeply personal — one father watching his son, one adult imagining his dead parents.",
      differentiation: {
        support: "Provide three emotion words to choose from and a sentence starter: 'The parent might feel... because...'",
        core: "Students write a short paragraph exploring both the parent's and child's perspectives.",
        stretch: "Students predict what imagery a poet might use to describe this moment (e.g. bird leaving nest, boat sailing away)."
      },
      resources: ["Photograph slide", "Discussion prompt"]
    },
    mainActivities: [
      {
        title: "'Walking Away': The Pain of Parental Love",
        duration: "18 minutes",
        instructions:
          "Read 'Walking Away' aloud. Context: Day Lewis wrote this about watching his son Sean (later the actor Daniel Day-Lewis) walk away to his first day of school. Students annotate for: the natural similes ('like a winged seed loosened from its parent stem', 'like a satellite / Wrenched from its orbit'), the time structure (memory recalled 'eighteen years ago'), and the devastating final couplet: 'love is proved in the letting go.' Focus question: why does Day Lewis compare his son to things in nature? How does this make the letting go feel? Students complete a quotation-analysis-effect grid.",
        differentiation: {
          support: "Provide the three key similes pre-identified with a writing frame: 'Day Lewis compares his son to... This suggests...'",
          core: "Students independently identify four key quotations and analyse technique and effect.",
          stretch: "Students analyse how the poem's structure — four regular stanzas — contrasts with the emotional turmoil, and what this restraint suggests about masculine grief."
        },
        resources: [
          "Full text of 'Walking Away'",
          "Context card on Day Lewis and his son",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "'Eden Rock': An Idealised Afterlife",
        duration: "17 minutes",
        instructions:
          "Read 'Eden Rock' aloud. Context: Causley's parents both died when he was young; this poem imagines them waiting for him in an afterlife. Students annotate for: the hyper-specific domestic details ('Her hair, the colour of wheat, takes on the light', 'The same three plates, the painted tin'), the Eden metaphor (paradise, innocence), and the mysterious final line 'I had not thought that it would be like this.' Focus question: is this poem comforting or unsettling? Students complete the analysis grid. Discuss the ambiguity: is the speaker dying? Dreaming? Remembering? The poem refuses to answer.",
        differentiation: {
          support: "Provide a stanza-by-stanza summary and highlight three key images for analysis.",
          core: "Students annotate independently and complete the grid with four quotations.",
          stretch: "Students analyse the significance of the title 'Eden Rock' — linking to the Garden of Eden, innocence, and the idea of paradise before the Fall."
        },
        resources: [
          "Full text of 'Eden Rock'",
          "Context card on Causley's biography",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "Comparative Writing: Two Views of Separation",
        duration: "10 minutes",
        instructions:
          "Students plan a comparison using a T-chart: 'Walking Away — parent letting go of child (painful but necessary)' vs 'Eden Rock — child imagining reunion with parents (comforting but ambiguous)'. Then write one comparative paragraph. Teacher provides a key comparative connective list: 'Similarly... In contrast... While... Both poets... However...' Select two to share under the visualiser.",
        differentiation: {
          support: "Provide a paragraph frame with the first sentence written and quotation options.",
          core: "Students write independently using the T-chart and connective list.",
          stretch: "Students explore the reversal: in 'Walking Away' the parent watches the child leave; in 'Eden Rock' the child moves toward the parents. What does this reversal suggest about the cycle of love?"
        },
        resources: [
          "T-chart template",
          "Comparative connective list",
          "Paragraph frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "The Last Line Challenge",
      duration: "5 minutes",
      instructions:
        "Display both final lines: 'love is proved in the letting go' (Walking Away) and 'I had not thought that it would be like this' (Eden Rock). Students vote: which is more powerful? Justify with one sentence on a sticky note. Place sticky notes on a class poll board. Brief discussion of the most convincing justifications.",
      differentiation: {
        support: "Students choose one and explain in a simple sentence.",
        core: "Students explain their choice with reference to the poem's themes.",
        stretch: "Students argue for the line they did not choose — playing devil's advocate."
      }
    },
    homework:
      "Learn five key quotations from each poem. Write a paragraph: 'Compare how Day Lewis and Causley present the experience of being separated from a loved one.'",
    worksheetQuestions: [
      {
        question: "How does Day Lewis use simile to convey the pain of letting go in 'Walking Away'?",
        lines: 5,
        modelAnswer:
          "Day Lewis compares his son to 'a winged seed loosened from its parent stem', suggesting the separation is natural (like a seed leaving its plant) but also involves a loss — the 'loosened' implies something has been broken. The later simile 'like a satellite / Wrenched from its orbit' is more violent — 'wrenched' suggests pain and force, implying that letting go is not gentle but an agonising tearing away. Together, the similes show the parent's conflicting feelings: knowing separation is necessary for growth, but finding it physically painful.",
        marks: 5
      },
      {
        question: "What is the effect of the final couplet 'love is proved in the letting go'?",
        lines: 4,
        modelAnswer:
          "This line is the poem's emotional and philosophical climax. It redefines love: true love is not about holding on but about having the courage to release someone. The word 'proved' is significant — it means both 'demonstrated' and 'tested', suggesting that letting go is the ultimate test of parental love. The simplicity of the language after the complex similes earlier creates a stark, memorable conclusion.",
        marks: 4
      },
      {
        question: "Why does Causley include such specific domestic details in 'Eden Rock'? What effect do they create?",
        lines: 5,
        modelAnswer:
          "Details like 'Her hair, the colour of wheat', 'the same three plates, the painted tin', and 'a Thermos flask' create an atmosphere of hyper-real domesticity. These specific, mundane objects make the scene feel genuine — as if the speaker is truly remembering or seeing his parents. However, the precision also creates an uncanny effect: the afterlife (or dream) is so detailed it feels almost too perfect, like a photograph or a preserved memory. The domestic simplicity also reflects the parents' ordinariness, making the love feel authentic and unpretentious.",
        marks: 4
      },
      {
        question: "What is the significance of the title 'Eden Rock'? How does it connect to the poem's themes?",
        lines: 4,
        modelAnswer:
          "Eden evokes the Garden of Eden — paradise, innocence, and a state of grace before the Fall. Causley names this imagined meeting place 'Eden Rock', suggesting it is a paradise where his parents wait and where he can return to an innocent, pre-loss state. The name also implies that crossing to Eden Rock would mean leaving the mortal world — the poem hovers between life and death, reunion and loss, making the title both comforting and haunting.",
        marks: 4
      },
      {
        question: "Compare how both poems present the relationship between time and parent-child love.",
        lines: 6,
        modelAnswer:
          "In 'Walking Away', time has passed ('eighteen years ago') but the memory remains vivid and painful — 'I can see / You walking away from me.' Time has not healed the wound; it has only confirmed its significance. In 'Eden Rock', time is transcended entirely: the speaker's dead parents appear as they were in life, and the present tense ('They beckon to me') erases the boundary between past and present, life and death. Both poems suggest that parent-child love exists outside time — Day Lewis's eighteen-year-old memory is as sharp as yesterday, and Causley's parents are alive in his imagination despite being dead.",
        marks: 5
      },
      {
        question: "Analyse the final line of 'Eden Rock': 'I had not thought that it would be like this.' What does it suggest?",
        lines: 4,
        modelAnswer:
          "This deliberately ambiguous line could mean several things: 'I did not expect death/the afterlife to feel so ordinary and gentle', 'I did not expect the memory to feel so real', or 'I did not expect this moment of peace.' The past tense 'had not thought' places the speaker before this experience, suggesting a threshold has been crossed. The ambiguity is the point — Causley leaves the reader uncertain whether the speaker has died, is dreaming, or is simply lost in memory. The understatement is deeply moving.",
        marks: 4
      }
    ],
    teacherNotes: [
      "Sensitivity warning: both poems deal with loss and parental relationships. Be aware of students who may have experienced bereavement or difficult family situations.",
      "Day Lewis's son being Daniel Day-Lewis is a useful hook but should not dominate the analysis.",
      "The ambiguity of 'Eden Rock' is a strength — resist the temptation to prescribe a single interpretation.",
      "'Walking Away' works beautifully when read aloud slowly and seriously; consider having a student read it.",
      "The reversal noted in the stretch task (parent watches child leave vs child moves toward parents) is an excellent exam-quality observation."
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO2: Simile and imagery analysis",
      "AO3: Biographical context",
      "AO4: Comparative writing",
      "Understanding ambiguity in poetry"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 6 — Follower & Before You Were Mine
  // ─────────────────────────────────────────────
  {
    id: "lr-06-memory-family",
    title: "Follower & Before You Were Mine: Memory & Family",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Heaney presents the shift in the father-son relationship in 'Follower'",
      "Analyse how Duffy explores possessive nostalgia for her mother's past in 'Before You Were Mine'",
      "Compare how both poems use memory to explore family relationships",
      "Develop understanding of how structural shifts create meaning"
    ],
    successCriteria: [
      "I can explain how Heaney's role reversal is conveyed through language and structure",
      "I can explain how Duffy's present-tense address to her mother creates intimacy and possessiveness",
      "I can write a comparative paragraph about memory and family love"
    ],
    keywords: [
      "role reversal",
      "nostalgia",
      "possessive",
      "monosyllabic language",
      "enjambment",
      "present tense",
      "direct address",
      "idealisation",
      "agricultural imagery",
      "volta"
    ],
    starterActivity: {
      title: "Then & Now: How Relationships Change",
      duration: "7 minutes",
      instructions:
        "Display two images: a small child holding a parent's hand, and an elderly parent being helped by an adult child. Ask: 'What has changed between these two images? What has stayed the same?' Brief discussion. Then ask: 'Do your parents ever tell you stories about what they were like before you were born? How does that make you feel?' Explain that both poems today explore how memory reveals the changing dynamics of family love.",
      differentiation: {
        support: "Provide three guided discussion questions to focus the pair talk.",
        core: "Students write three sentences about how family relationships change over time.",
        stretch: "Students predict how a poet might structure a poem about changing relationships (e.g. chronological, then/now contrast, reversal)."
      },
      resources: ["Paired images slide", "Discussion prompt"]
    },
    mainActivities: [
      {
        title: "'Follower': Hero Worship to Role Reversal",
        duration: "18 minutes",
        instructions:
          "Read 'Follower' aloud. Context: Heaney grew up on a farm in Northern Ireland; his father was a skilled ploughman. Students annotate for: the admiring, precise description of the father's skill ('An expert. He would set the wing / And fit the bright steel-pointed sock'), the child's clumsiness ('I stumbled in his hob-nailed wake'), and the devastating final stanza reversal: 'But today / It is my father who keeps stumbling / Behind me, and will not go away.' Focus on how the short, monosyllabic final words create a blunt emotional impact. Students complete analysis grid.",
        differentiation: {
          support: "Provide a stanza-by-stanza summary and highlight the key quotation for each stanza.",
          core: "Students annotate independently and complete the grid with five quotations.",
          stretch: "Students analyse how Heaney's use of technical agricultural vocabulary ('sock', 'headrig', 'furrow') creates admiration and how its absence in the final stanza signals the father's decline."
        },
        resources: [
          "Full text of 'Follower'",
          "Context card on Heaney's rural upbringing",
          "Analysis grid worksheet",
          "Agricultural vocabulary glossary"
        ]
      },
      {
        title: "'Before You Were Mine': Possessive Nostalgia",
        duration: "17 minutes",
        instructions:
          "Read 'Before You Were Mine' aloud. Context: Duffy writes to her mother, imagining her life as a young woman before Duffy was born. Students annotate for: the possessive title ('Mine'), the present-tense address that brings the past to life ('I'm not here yet'), the glamorous imagery ('Marilyn'), and the guilt/possessiveness of 'I wanted the bold girl who winks / in the pavement with no child at her heels.' Focus question: does the speaker feel guilty for taking away her mother's freedom, or proud to claim her? Students complete analysis grid.",
        differentiation: {
          support: "Provide three key quotations with guided analysis questions for each.",
          core: "Students annotate and complete the grid independently with four quotations.",
          stretch: "Students explore the ethical complexity: is the speaker's possessiveness loving or selfish? Compare to the possessiveness in 'Porphyria's Lover' — how is it different?"
        },
        resources: [
          "Full text of 'Before You Were Mine'",
          "Context card on Carol Ann Duffy",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "Comparative Writing: Memory as a Lens for Love",
        duration: "10 minutes",
        instructions:
          "Display the question: 'Compare how Heaney and Duffy use memory to present family relationships.' Students create a comparison plan using the WHAT/HOW/WHY structure: WHAT theme connects them? HOW do the poets present it differently? WHY does context matter? Write one comparative paragraph. Peer assess using a two-star-and-a-wish format.",
        differentiation: {
          support: "Provide a completed WHAT/HOW/WHY plan; students write the paragraph using a frame.",
          core: "Students complete the plan and write independently.",
          stretch: "Students write two paragraphs and address how the structural shift in each poem creates a different emotional effect."
        },
        resources: [
          "Comparison question slide",
          "WHAT/HOW/WHY planning template",
          "Paragraph frame (support tier)",
          "Peer assessment checklist"
        ]
      }
    ],
    plenaryActivity: {
      title: "Memory Jar: What Will You Remember?",
      duration: "5 minutes",
      instructions:
        "Each student writes on a slip of paper: one key quotation from each poem and one sentence explaining how memory functions differently in each. Fold and place in the 'Memory Jar'. Teacher draws three at random to read aloud and discuss. Keep the jar for revision sessions later in the year.",
      differentiation: {
        support: "Students write the quotations only, with poem names.",
        core: "Students write quotations plus a one-sentence comparison.",
        stretch: "Students write quotations plus explain which poem they find more emotionally effective and why."
      }
    },
    homework:
      "Learn five quotations from each poem. Write a paragraph: 'Compare how the speakers in \"Follower\" and \"Before You Were Mine\" feel about the passage of time.'",
    worksheetQuestions: [
      {
        question: "How does Heaney present his father in the first four stanzas of 'Follower'? What techniques does he use?",
        lines: 5,
        modelAnswer:
          "Heaney presents his father as a heroic, skilled figure through precise agricultural vocabulary ('He would set the wing / And fit the bright steel-pointed sock') and powerful physical imagery ('His shoulders globed like a full sail strung'). The simile comparing shoulders to a sail suggests both strength and grace. The technical language shows the child's admiration — he observes every detail because he idolises his father. The verb 'mapping' suggests the father reads the land like a text, elevating ploughing to an art form.",
        marks: 5
      },
      {
        question: "Analyse the effect of the final stanza of 'Follower'. How does the role reversal work?",
        lines: 5,
        modelAnswer:
          "The final stanza shatters the poem's nostalgic tone: 'But today / It is my father who keeps stumbling / Behind me, and will not go away.' The word 'But' signals the volta. The father, once the expert, now 'stumbles' — the same verb used for the child earlier. The roles have reversed: the son leads and the father follows. The phrase 'will not go away' is ambiguous — it could mean the ageing father is physically dependent, or that the memory of the strong father haunts the speaker. The bluntness of the monosyllabic ending creates a stark emotional impact.",
        marks: 5
      },
      {
        question: "How does Duffy use the title 'Before You Were Mine' to establish the poem's themes?",
        lines: 4,
        modelAnswer:
          "The title is possessive: 'Mine' claims ownership of the mother. The word 'Before' establishes that the poem looks backward in time to a period before the speaker existed. The title implies that having a child changed the mother — she belonged to herself before, but now she belongs to the speaker. It sets up the poem's central tension: the speaker's love is entangled with guilt and possessiveness.",
        marks: 4
      },
      {
        question: "How does Duffy's use of present tense affect the reader's experience of 'Before You Were Mine'?",
        lines: 4,
        modelAnswer:
          "Duffy writes in the present tense even though she is describing the past: 'I'm ten years away from the corner you laugh on.' This creates a strange, almost supernatural intimacy — the speaker inserts herself into a time before her own existence. It makes the past feel vivid and immediate rather than distant, as if the speaker can see and touch the scene. It also reinforces the possessiveness: even the mother's past, which the speaker never witnessed, is claimed as present experience.",
        marks: 4
      },
      {
        question: "Compare how both poems present the idea that family love involves loss.",
        lines: 6,
        modelAnswer:
          "In 'Follower', the loss is mutual: the son loses the heroic father he admired ('An expert'), and the father loses his strength and independence ('keeps stumbling'). The poem suggests that time inevitably diminishes those we love. In 'Before You Were Mine', the loss is different: the mother lost her freedom and glamour ('the bold girl who winks') when she became a parent. Duffy's guilt at this loss ('I wanted the bold girl... with no child at her heels') shows that family love, for her, is shadowed by the knowledge of what was sacrificed. Both poems suggest love and loss are inseparable, but Heaney's is about ageing while Duffy's is about identity.",
        marks: 5
      },
      {
        question: "Which poem do you find more moving and why? Support your answer with evidence.",
        lines: 5,
        modelAnswer:
          "'Follower' is arguably more moving because the final reversal is so unexpected and devastating. The reader spends five stanzas admiring the powerful father, only to discover in the final lines that he has become frail and dependent. The word 'stumbling' — previously applied to the child — now applied to the father creates a painful echo. The simplicity of the language makes the emotion feel raw and honest, whereas Duffy's poem, while powerful, has a more complex, intellectualised tone that creates distance.",
        marks: 4
      }
    ],
    teacherNotes: [
      "Heaney's agricultural vocabulary may need glossing — provide a mini-glossary for 'sock', 'headrig', 'furrow', 'wing'.",
      "The debate about whether Duffy's speaker is loving or selfish generates excellent discussion.",
      "Both poems deal with ageing parents — be sensitive to students whose parents or grandparents may be unwell.",
      "The 'Memory Jar' plenary creates a physical resource you can return to during revision lessons.",
      "The stretch task comparing Duffy's possessiveness to Browning's is an excellent cross-anthology connection."
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO2: Language, form, and structure",
      "AO3: Biographical context",
      "AO4: Comparative writing",
      "Understanding role reversal and structural shifts"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 7 — Mother, Any Distance & Singh Song!
  // ─────────────────────────────────────────────
  {
    id: "lr-07-independence-celebration",
    title: "Mother, Any Distance & Singh Song!: Independence & Celebration",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Armitage uses the extended metaphor of a tape measure to present the tension between dependence and independence in 'Mother, Any Distance'",
      "Analyse how Nagra celebrates joyful, modern love through voice, humour, and cultural fusion in 'Singh Song!'",
      "Compare how both poems present positive, celebratory aspects of love and identity",
      "Develop understanding of how voice and form shape meaning"
    ],
    successCriteria: [
      "I can explain how the tape measure metaphor works across 'Mother, Any Distance'",
      "I can explain how Nagra uses phonetic dialect, humour, and imagery to celebrate love",
      "I can write a comparative paragraph contrasting the tones and types of love in both poems"
    ],
    keywords: [
      "extended metaphor",
      "sonnet (loose)",
      "phonetic spelling",
      "dialect",
      "colloquial voice",
      "cultural identity",
      "independence",
      "umbilical cord",
      "celebration",
      "humour"
    ],
    starterActivity: {
      title: "Love Is... Completing the Sentence",
      duration: "6 minutes",
      instructions:
        "Display: 'Love is...' Students write three completions on whiteboards — one serious, one funny, one using an image or metaphor. Share examples. Point out: not all love poetry is serious or sad. Today's poems show love as playful, warm, and celebratory — even when mixed with tension. One is about a son measuring up his first flat with his mum; the other is about a newlywed running a corner shop.",
      differentiation: {
        support: "Provide three example completions and ask students to add one of their own.",
        core: "Students write three independent completions in different tones.",
        stretch: "Students try to write one that sounds like it could be from a poem — using imagery or figurative language."
      },
      resources: ["Display slide", "Mini-whiteboards"]
    },
    mainActivities: [
      {
        title: "'Mother, Any Distance': The Tape Measure as Umbilical Cord",
        duration: "18 minutes",
        instructions:
          "Read 'Mother, Any Distance' aloud. Context: Armitage writes about measuring rooms in a new home with his mother — the tape measure connecting them becomes a metaphor for the bond between parent and child. Students annotate for: the extended metaphor ('You at the zero-end, me with the spool'), the imagery of the tape measure as an umbilical cord ('the line still feeding out'), the shift upward ('I climb the stairs... to the loft'), and the final ambiguous image: 'to fall or fly.' Focus: why does Armitage end with uncertainty rather than resolution? Students complete analysis grid.",
        differentiation: {
          support: "Provide a diagram showing the tape measure metaphor mapped onto the parent-child relationship.",
          core: "Students annotate and complete the grid independently, explaining the metaphor's development.",
          stretch: "Students analyse how the poem is a loose sonnet (roughly 14 lines) and why Armitage might adapt the love poem form for a mother-son relationship."
        },
        resources: [
          "Full text of 'Mother, Any Distance'",
          "Metaphor diagram (support tier)",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "'Singh Song!': Love, Laughter & Cultural Identity",
        duration: "17 minutes",
        instructions:
          "Read 'Singh Song!' aloud — ideally with enjoyment of the voice and humour. Context: Nagra writes in a British-Punjabi voice, celebrating a newlywed shopkeeper who neglects his shop to be with his wife. Students annotate for: the phonetic dialect ('my bride / she effing at my mum'), the humorous catalogue of neglected shop duties, the tender love imagery ('she is tiny / like a mouse'), and the final romantic scene on the shop roof. Discuss: how does Nagra use humour alongside genuine tenderness? How does the poem celebrate cultural identity? Students complete analysis grid.",
        differentiation: {
          support: "Provide a glossary for dialect terms and a stanza-by-stanza summary.",
          core: "Students annotate and complete the grid with four quotations, identifying tone shifts.",
          stretch: "Students analyse how the poem challenges stereotypes about arranged marriages and South Asian masculinity, and how the form (no regular metre, free verse) mirrors the speaker's carefree attitude."
        },
        resources: [
          "Full text of 'Singh Song!'",
          "Dialect glossary",
          "Analysis grid worksheet",
          "Stanza summary (support tier)"
        ]
      },
      {
        title: "Comparative Writing: Celebration vs Tension",
        duration: "10 minutes",
        instructions:
          "Display the question: 'Compare how Armitage and Nagra present love as a positive force.' Students note that both are positive but in different ways — Armitage's love is warm but tense (the fear of letting go), while Nagra's is joyful and unrestrained. Write one comparative paragraph. Model the opening sentence: 'While both Armitage and Nagra present love as a fundamentally positive force, the emotional register of each poem differs significantly.' Students continue from this starter.",
        differentiation: {
          support: "Provide the opening sentence plus a sentence-by-sentence frame to continue.",
          core: "Students continue from the opening sentence independently.",
          stretch: "Students write a second paragraph exploring how cultural context shapes the presentation of love in each poem."
        },
        resources: [
          "Comparison question and sentence starter slide",
          "Paragraph frame (support tier)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Tone Thermometer",
      duration: "5 minutes",
      instructions:
        "Draw a thermometer on the board from 'Cold/Tense' to 'Warm/Joyful'. Students place each poem on the thermometer with a justification. Discuss: can a poem be both warm and tense at the same time? (Yes — 'Mother, Any Distance'.) Which poem would you rather live inside and why?",
      differentiation: {
        support: "Students choose a position and give one reason.",
        core: "Students justify with a quotation from each poem.",
        stretch: "Students argue that both poems contain elements of both warmth and tension."
      }
    },
    homework:
      "Learn five quotations from each poem. Write a paragraph: 'How does Armitage present the relationship between a mother and son in \"Mother, Any Distance\"? Analyse at least two quotations in detail.'",
    worksheetQuestions: [
      {
        question: "Explain the extended metaphor of the tape measure in 'Mother, Any Distance'. What does it represent?",
        lines: 5,
        modelAnswer:
          "The tape measure represents the bond between mother and son — specifically the umbilical cord. The mother holds 'the zero-end' (the origin, the beginning of life), while the son has 'the spool' (the part that extends outward). As he measures the new house, the tape 'feeds out' like a cord, maintaining connection even as he moves further away. The eventual breaking or stretching of the tape represents the moment of independence — the son must eventually separate from the mother, which is both liberating ('fly') and frightening ('fall').",
        marks: 5
      },
      {
        question: "What is the effect of the final image 'to fall or fly' in 'Mother, Any Distance'?",
        lines: 4,
        modelAnswer:
          "The binary 'fall or fly' presents independence as a moment of genuine risk — the outcome is uncertain. 'Fly' suggests freedom, ambition, and successful independence; 'fall' suggests failure and the loss of maternal protection. The 'or' makes the reader hold both possibilities at once, capturing the exact feeling of leaving home: exciting and terrifying simultaneously. The assonance of 'fall' and 'fly' links the two opposites, suggesting they are two sides of the same coin.",
        marks: 4
      },
      {
        question: "How does Nagra create a distinctive voice in 'Singh Song!'? What effect does this have?",
        lines: 5,
        modelAnswer:
          "Nagra uses phonetic spelling and British-Punjabi dialect ('my bride / she effing at my mum', 'di breddi') to create an authentic, individual voice. This has multiple effects: it celebrates cultural identity and bilingualism, it creates humour and warmth, and it resists the 'standard English' expectations of traditional poetry. The voice is energetic and joyful, mirroring the speaker's love. By writing in dialect, Nagra also makes a political statement — this voice and this love story deserve to be in the poetry anthology alongside Shelley and Byron.",
        marks: 5
      },
      {
        question: "How does Nagra use humour alongside tenderness in 'Singh Song!'?",
        lines: 5,
        modelAnswer:
          "The humour comes from the speaker's gleeful neglect of his shop duties ('di shoppers always point and cry / di milk is out of date') and his wife's feisty personality ('she effing at my mum'). But the tenderness emerges in the final scene on the roof: 'she is tiny / like a mouse' is gentle and protective, while their shared moment watching the moon is genuinely romantic. The combination of humour and tenderness makes the love feel real and human — not idealised or artificial, but grounded in the messy, joyful reality of daily life.",
        marks: 4
      },
      {
        question: "Compare how both poems present the idea of leaving or moving on. Which is more optimistic?",
        lines: 6,
        modelAnswer:
          "In 'Mother, Any Distance', moving on is presented as necessary but frightening: the son climbs to the loft (independence) but faces the uncertain choice to 'fall or fly'. The tone is loving but anxious. In 'Singh Song!', the speaker has already moved on — he is married, running a shop, building a new life — and the tone is entirely celebratory. He has no anxiety about independence because his new love fills the space his family once occupied. Nagra's poem is more optimistic because the speaker has already made the transition successfully, while Armitage's speaker is still on the threshold, uncertain of the outcome.",
        marks: 5
      },
      {
        question: "How does cultural context shape the presentation of love in 'Singh Song!'?",
        lines: 4,
        modelAnswer:
          "The poem is rooted in British-Punjabi culture: the corner shop setting, the references to family expectations, and the arranged (or semi-arranged) marriage all reflect a specific cultural experience. Nagra presents this positively — the marriage is joyful and passionate, challenging Western stereotypes about arranged marriages. The cultural fusion in the language (mixing Punjabi dialect with English) mirrors the fusion of the couple's lives. The poem celebrates multicultural Britain and suggests that love transcends cultural boundaries while also being enriched by them.",
        marks: 4
      }
    ],
    teacherNotes: [
      "Students often find 'Singh Song!' the most enjoyable poem in the anthology — use this energy to deepen analysis.",
      "Be sensitive to the dialect: celebrate it as a literary choice, not as 'incorrect' English. Discuss Nagra's deliberate artistry.",
      "The tape measure metaphor in 'Mother, Any Distance' benefits from a physical demonstration — bring in a tape measure and have two students hold each end.",
      "The sonnet form of 'Mother, Any Distance' is loose (roughly 14 lines) — stretch students can debate whether this looseness is deliberate.",
      "Nagra has spoken in interviews about wanting to bring British-Asian voices into the literary canon — this is valuable AO3 context."
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO2: Extended metaphor, voice, and form",
      "AO3: Cultural and biographical context",
      "AO4: Comparative writing",
      "Understanding voice and dialect in poetry"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 8 — Winter Swans & Neutral Tones
  // ─────────────────────────────────────────────
  {
    id: "lr-08-crisis-resolution",
    title: "Winter Swans & Neutral Tones: Relationships in Crisis",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Analyse how Sheers uses the swans as a symbol of reconciliation in 'Winter Swans'",
      "Analyse how Hardy uses pathetic fallacy and imagery to present the death of love in 'Neutral Tones'",
      "Compare how both poems present relationships at a point of crisis — one finding hope, the other not",
      "Develop understanding of how symbolism and pathetic fallacy create meaning"
    ],
    successCriteria: [
      "I can explain how Sheers uses the swans as a turning point in the couple's relationship",
      "I can explain how Hardy's imagery creates a mood of emotional death",
      "I can write a comparative paragraph contrasting hope and despair in relationships under strain"
    ],
    keywords: [
      "pathetic fallacy",
      "symbolism",
      "reconciliation",
      "semantic field",
      "volta",
      "circular structure",
      "monochrome",
      "natural imagery",
      "enjambment",
      "couplet"
    ],
    starterActivity: {
      title: "The Weather of Relationships",
      duration: "7 minutes",
      instructions:
        "Display four weather images: storm, frost, sunshine, gentle rain. Ask: 'If your relationship was weather, what would each of these represent?' Students match emotions/relationship states to weather types. Discuss how poets use weather and nature to mirror human emotions (pathetic fallacy). Explain that both poems today use nature to reflect the state of a relationship — one moves from storm to calm, the other is frozen throughout.",
      differentiation: {
        support: "Provide emotion words alongside each weather image for matching.",
        core: "Students create their own weather-emotion matches and explain the link.",
        stretch: "Students write a sentence of 'pathetic fallacy' for a relationship in crisis and one for a relationship healing."
      },
      resources: ["Weather images slide", "Mini-whiteboards"]
    },
    mainActivities: [
      {
        title: "'Winter Swans': From Storm to Reconciliation",
        duration: "18 minutes",
        instructions:
          "Read 'Winter Swans' aloud. Context: a contemporary poem about a couple walking in silence after an argument, who are reunited by watching swans on a lake. Students annotate for: the opening pathetic fallacy ('the clouds had given their all'), the physical distance between the couple ('we skirted the lake'), the symbolic turning point when the swans appear ('they halved themselves in the water, / icebergs of white'), and the tender final couplet where their hands reconnect ('our hands, that had been left out / folded, one over the other, / like the wings of a bird settling after flight'). Focus on the shift from tercets to the final couplet — form mirrors reconciliation. Students complete analysis grid.",
        differentiation: {
          support: "Provide a colour-coded version: blue for sadness/distance, green for hope/reunion. Students explain the shift.",
          core: "Students annotate independently and complete the grid, identifying the volta.",
          stretch: "Students analyse how the shift from tercets (three-line stanzas, suggesting imbalance) to a final couplet (two lines, togetherness) mirrors the couple's reconciliation."
        },
        resources: [
          "Full text of 'Winter Swans'",
          "Colour-coded version (support tier)",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "'Neutral Tones': The Death of Love",
        duration: "17 minutes",
        instructions:
          "Read 'Neutral Tones' aloud — slowly, bleakly. Context: Hardy wrote this after a painful relationship breakdown. Students annotate for: the monochrome palette ('white', 'grey', 'starving sod'), the pathetic fallacy ('the sun was white, as though chidden of God'), the devastating simile of the smile ('your eyes on me were as eyes that rove / Over tedious riddles'), and the circular structure (the pond appears in stanza one and stanza four). Focus: what does 'neutral' mean here — is it truly neutral, or is it something worse? Students complete analysis grid.",
        differentiation: {
          support: "Provide a stanza-by-stanza paraphrase and three pre-selected quotations for analysis.",
          core: "Students annotate and complete the grid independently with four quotations.",
          stretch: "Students analyse how the circular structure traps the speaker in the memory of the failed relationship — he cannot escape the pond, just as he cannot escape the pain."
        },
        resources: [
          "Full text of 'Neutral Tones'",
          "Stanza paraphrase (support tier)",
          "Analysis grid worksheet"
        ]
      },
      {
        title: "Comparative Paragraph: Hope vs Despair",
        duration: "10 minutes",
        instructions:
          "Display the question: 'Compare how Sheers and Hardy present relationships in crisis.' Students create a simple comparison grid: Poem | Crisis | Natural imagery used | Outcome | Key quotation. Then write one paragraph. Model the technique of embedding the comparison within sentences rather than writing 'Poem A does X, Poem B does Y.' For example: 'While the couple in \"Winter Swans\" move from distance to tenderness, Hardy's speaker in \"Neutral Tones\" remains trapped in emotional desolation.' Students practise this integrated comparison style.",
        differentiation: {
          support: "Provide a completed comparison grid; students write the paragraph using a frame.",
          core: "Students complete the grid and write independently.",
          stretch: "Students include AO3 context (Hardy's biography, the Victorian crisis of faith reflected in 'chidden of God')."
        },
        resources: [
          "Comparison question slide",
          "Comparison grid template",
          "Paragraph frame (support tier)",
          "Hardy context card"
        ]
      }
    ],
    plenaryActivity: {
      title: "Colour Card Vote: Which Poem Resonates More?",
      duration: "5 minutes",
      instructions:
        "Give each student two cards: blue (Winter Swans) and grey (Neutral Tones). Read a statement aloud (e.g. 'This poem shows love more realistically', 'This poem is more powerful', 'This poem is more relevant to modern relationships'). Students hold up the card for their choice. Discuss the most divided responses. Exit: write one sentence on a sticky note: 'The biggest difference between these poems is...'",
      differentiation: {
        support: "Students hold up the card and give a one-word reason.",
        core: "Students justify each choice with a sentence.",
        stretch: "Students argue for the opposite of their instinct on at least one statement."
      }
    },
    homework:
      "Learn five quotations from each poem. Write a paragraph: 'Compare how Sheers and Hardy use natural imagery to reflect the state of a relationship.'",
    worksheetQuestions: [
      {
        question: "How does Sheers use the swans as a symbol in 'Winter Swans'? What do they represent?",
        lines: 5,
        modelAnswer:
          "The swans symbolise faithful, enduring love — swans mate for life, which mirrors the couple's commitment despite their argument. When the swans 'halved themselves in the water', the word 'halved' suggests two becoming one, modelling the unity the couple has temporarily lost. The swans also represent grace and beauty in a bleak setting, suggesting that love can endure even in difficult conditions. Their appearance is the poem's turning point: watching something beautiful together reminds the couple of their connection.",
        marks: 5
      },
      {
        question: "Analyse the final image in 'Winter Swans': 'our hands... folded, one over the other, / like the wings of a bird settling after flight.'",
        lines: 4,
        modelAnswer:
          "This simile compares the couple's reunited hands to a bird's wings settling, suggesting that their conflict was like turbulent flight and they have now found peace. 'Folded, one over the other' implies mutual protection and tenderness. The shift to a final couplet (two lines instead of the poem's usual tercets) visually represents the couple becoming a pair again. The bird imagery connects to the swans, extending the natural symbolism through to the poem's resolution.",
        marks: 4
      },
      {
        question: "How does Hardy create a mood of hopelessness in 'Neutral Tones'?",
        lines: 5,
        modelAnswer:
          "Hardy drains all colour and warmth from the setting: 'the sun was white' (not golden), the leaves are 'grey' and 'fallen from an ash' (a tree associated with death), and the ground is 'starving sod'. This monochrome palette reflects the emotional deadness of the relationship. The sun is described 'as though chidden of God', suggesting even God has abandoned the scene. The circular structure — beginning and ending at 'a pond edged with greyish leaves' — traps the speaker in this bleak landscape, mirroring his inability to escape the memory of the relationship's end.",
        marks: 5
      },
      {
        question: "What does the title 'Neutral Tones' suggest? Is the poem truly 'neutral'?",
        lines: 4,
        modelAnswer:
          "The title suggests emotional flatness — the colours are muted ('grey', 'white'), the feelings are deadened, and the relationship has reached a point beyond anger or passion. However, the poem is not truly neutral: the bitter imagery ('your eyes on me were as eyes that rove / Over tedious riddles') reveals suppressed pain and resentment. The 'neutrality' is worse than outright conflict — it represents the death of feeling entirely, where the beloved cannot even muster the energy to care. True neutrality would mean indifference; Hardy's 'neutrality' is the silence after love has died.",
        marks: 4
      },
      {
        question: "Compare how nature functions in both poems. Which poet uses it more effectively?",
        lines: 6,
        modelAnswer:
          "In 'Winter Swans', nature provides the catalyst for reconciliation: the bleak weather mirrors the couple's distance, but the swans offer a model of faithful love that inspires reunion. Nature moves from hostile to healing. In 'Neutral Tones', nature only reinforces despair: the 'starving sod', grey leaves, and white sun all reflect the relationship's deadness, and there is no shift or turning point. Hardy's use is arguably more effective because the relentless bleakness is unbroken — there is no hope, which makes the poem more emotionally devastating. However, Sheers's use is more structurally sophisticated, as nature drives the plot forward rather than simply reflecting mood.",
        marks: 5
      },
      {
        question: "How does the structure of each poem reflect its emotional content?",
        lines: 5,
        modelAnswer:
          "In 'Winter Swans', the shift from tercets to a final couplet mirrors the couple's journey from separation to reunion — three-line stanzas suggest imbalance and odd-one-out tension, while the couplet represents togetherness. In 'Neutral Tones', the circular structure (the pond in stanza one returns in stanza four) traps the speaker in the memory, reflecting his inability to move on. Hardy's regular ABAB quatrains create a controlled, restrained form that contrasts with the pain beneath, suggesting the speaker is holding himself together with rigid formality. Both poets use form to reinforce meaning — structure is not decoration but a carrier of emotion.",
        marks: 5
      }
    ],
    teacherNotes: [
      "Reading 'Neutral Tones' slowly and bleakly sets the right tone — avoid rushing it.",
      "The tercet-to-couplet shift in 'Winter Swans' is an excellent form-meaning link that examiners reward highly.",
      "Hardy's biography (his first wife Emma, their estrangement, his grief after her death) provides rich AO3 context.",
      "Some students may find 'Neutral Tones' depressing — frame it as Hardy being honest about a universal experience.",
      "The colour card vote generates quick, low-stakes engagement and gives you a read on student understanding."
    ],
    targetedSkills: [
      "AO1: Personal response",
      "AO2: Symbolism, pathetic fallacy, structure",
      "AO3: Hardy's biographical context",
      "AO4: Comparative writing",
      "Understanding form-meaning relationships"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 9 — Comparing Poems: Top-Band Response
  // ─────────────────────────────────────────────
  {
    id: "lr-09-comparison-skills",
    title: "Comparing Poems: Structuring a Top-Band Response",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Understand the AQA mark scheme for Paper 2 Section B and what separates band 3 from band 5/6",
      "Learn and practise a clear structure for comparative poetry essays",
      "Develop the skill of integrated comparison (weaving both poems together rather than writing about them separately)",
      "Build a toolkit of comparison connectives and analytical sentence structures"
    ],
    successCriteria: [
      "I can explain the difference between a band 3 and a band 5/6 response using the mark scheme",
      "I can structure a comparative essay using the PEACE method (Point, Evidence, Analyse, Compare, Evaluate/context)",
      "I can write an integrated comparative paragraph that weaves both poems together fluently"
    ],
    keywords: [
      "integrated comparison",
      "mark scheme",
      "band descriptors",
      "connectives",
      "PEACE structure",
      "topic sentence",
      "embedded quotation",
      "analytical verb",
      "evaluation",
      "juxtaposition"
    ],
    starterActivity: {
      title: "Spot the Difference: Band 3 vs Band 6",
      duration: "8 minutes",
      instructions:
        "Display two short sample paragraphs side by side — one band 3 (simple, separate discussion of each poem, feature-spotting) and one band 6 (integrated, analytical, exploratory). Students read both and list three differences on whiteboards. Discuss: what makes the second paragraph better? Introduce the key principles: (1) weave both poems together, (2) analyse HOW not just WHAT, (3) use tentative language ('perhaps', 'could suggest'), (4) include context naturally, not bolted on.",
      differentiation: {
        support: "Provide a checklist of features to look for when comparing the two paragraphs.",
        core: "Students identify three differences independently and explain each.",
        stretch: "Students rewrite the opening sentence of the band 3 paragraph to make it band 5/6 quality."
      },
      resources: ["Band 3 and Band 6 sample paragraph display", "Mini-whiteboards", "Feature checklist (support tier)"]
    },
    mainActivities: [
      {
        title: "The PEACE Structure: Building a Comparative Paragraph",
        duration: "15 minutes",
        instructions:
          "Teach the PEACE structure for comparative paragraphs: P = Point (a thematic topic sentence covering both poems), E = Evidence (embedded quotation from poem 1), A = Analyse (explore technique, connotation, effect), C = Compare (transition to poem 2 with embedded quotation, showing similarity or contrast), E = Evaluate/Context (step back, assess the significance, link to context if relevant). Display a fully worked example paragraph using 'When We Two Parted' and 'Neutral Tones' on the theme of 'the pain of lost love'. Annotate each sentence with its PEACE label. Students copy the example and the structure into their books for reference.",
        differentiation: {
          support: "Provide the PEACE structure as a laminated bookmark with sentence starters for each stage.",
          core: "Students copy the example and annotate the PEACE stages independently.",
          stretch: "Students evaluate the model paragraph — is there anything they would improve? Could the context feel more integrated?"
        },
        resources: [
          "PEACE structure display slide",
          "Model paragraph display",
          "PEACE bookmark (support tier)"
        ]
      },
      {
        title: "Connective Toolkit: The Language of Comparison",
        duration: "10 minutes",
        instructions:
          "Provide a 'Connective Toolkit' handout with three categories: (1) Similarity: 'Similarly', 'Likewise', 'Both poets', 'In the same way', 'This is echoed in'; (2) Contrast: 'In contrast', 'Whereas', 'However', 'Conversely', 'While... the other'; (3) Complication: 'Yet', 'Although', 'Arguably', 'On the other hand', 'This nuance is further explored in'. Students practise using each type by completing gap-fill sentences comparing pairs of poems. Then translate three simple sentences into sophisticated comparative ones (e.g. transform 'Both poems are about love' into 'Both Barrett Browning and Sheers present love as a force that endures despite physical distance, yet the emotional register of each poem differs markedly').",
        differentiation: {
          support: "Gap-fill sentences with connective options provided; students select the best fit.",
          core: "Students complete gap-fills and then write three original sentences using different connective types.",
          stretch: "Students write a paragraph using at least one connective from each category, demonstrating range and fluency."
        },
        resources: [
          "Connective Toolkit handout",
          "Gap-fill exercise sheet",
          "Sentence transformation task"
        ]
      },
      {
        title: "Guided Practice: Writing a Top-Band Paragraph",
        duration: "20 minutes",
        instructions:
          "Display the practice question: 'Compare how poets present the power of memory in \"Follower\" and one other poem from the Love & Relationships cluster.' Students choose their second poem. Spend five minutes planning using a comparison grid (Theme | Poem 1 quotation + technique | Poem 2 quotation + technique | Similarity or difference?). Then write one full PEACE paragraph. Teacher circulates, giving verbal feedback and targeting specific students. After 12 minutes of writing, select two paragraphs to display under the visualiser. Class assesses: which band would each reach? What would push it higher? Students then have three minutes to improve their own paragraph based on the feedback.",
        differentiation: {
          support: "Provide a partially completed comparison grid and a PEACE paragraph frame with the Point and first Evidence sentence written.",
          core: "Students complete the grid and write a full paragraph independently.",
          stretch: "Students write two PEACE paragraphs — one on similarity, one on difference — and include a short introduction that sets up the comparison."
        },
        resources: [
          "Practice question slide",
          "Comparison grid template",
          "PEACE paragraph frame (support tier)",
          "AQA mark scheme extract (bands 3-6)"
        ]
      }
    ],
    plenaryActivity: {
      title: "Mark Scheme Bingo",
      duration: "7 minutes",
      instructions:
        "Give each student a 3x3 bingo grid containing mark scheme phrases (e.g. 'exploratory response', 'integrated comparison', 'judicious use of quotation', 'analysis of methods', 'convincing exploration of context'). Read out definitions; students cross off the matching phrase. First to complete a line wins. Discuss: which of these phrases appeared in the paragraphs we saw today? Which is the hardest to achieve?",
      differentiation: {
        support: "Provide definitions alongside phrases on the bingo card for reference.",
        core: "Students match definitions to phrases from memory.",
        stretch: "Students explain how they would demonstrate each phrase in their own writing."
      }
    },
    homework:
      "Using the PEACE structure, write a full comparative paragraph: 'Compare how poets present the theme of separation in \"Walking Away\" and \"Mother, Any Distance\".\" Include at least two quotations from each poem, name a technique for each, and include one AO3 context point.",
    worksheetQuestions: [
      {
        question: "What is the difference between a 'bolt-on' comparison and an 'integrated' comparison? Give an example of each.",
        lines: 5,
        modelAnswer:
          "A bolt-on comparison discusses one poem fully, then adds a brief comparison to the second poem at the end (e.g. 'Byron uses cold imagery. Similarly, Hardy uses cold imagery too.'). An integrated comparison weaves both poems together in every sentence (e.g. 'Both Byron and Hardy use cold imagery to convey emotional devastation, yet while Byron's \"pale grew thy cheek\" suggests the beloved has become corpse-like, Hardy's \"starving sod\" extends the coldness to the entire landscape, implying the death of love has infected the natural world.'). Integrated comparison scores higher because it demonstrates the ability to hold both poems in mind simultaneously.",
        marks: 4
      },
      {
        question: "What does the PEACE structure stand for? Write a brief explanation of each stage.",
        lines: 6,
        modelAnswer:
          "P = Point: a thematic topic sentence that covers both poems (e.g. 'Both poets present love as a force that transcends physical distance.'). E = Evidence: an embedded quotation from poem 1 with poet attribution. A = Analyse: explore the technique, connotation, and effect of the quotation — how does it create meaning? C = Compare: transition to poem 2 using a comparative connective, embed a quotation, and show similarity or contrast. E = Evaluate/Context: step back and assess the significance — why does this matter? What does context add to our understanding?",
        marks: 5
      },
      {
        question: "Rewrite this band 3 sentence as a band 5/6 sentence: 'Both poems are about love and use metaphors.'",
        lines: 4,
        modelAnswer:
          "A band 5/6 version might be: 'Both Barrett Browning and Armitage employ extended metaphors to externalise the invisible dynamics of love — Barrett Browning's vine that \"twines and buds\" embodies the suffocating intensity of longing, while Armitage's tape measure that \"feeds out\" captures the fragile, measurable tension between dependence and independence.' This version specifies the poems, names the metaphors, analyses their effects, and integrates comparison.",
        marks: 4
      },
      {
        question: "Why is tentative language (e.g. 'perhaps', 'could suggest', 'arguably') valued by examiners?",
        lines: 4,
        modelAnswer:
          "Tentative language demonstrates that the student understands poetry is open to multiple interpretations. Saying 'perhaps Sheers suggests...' shows the student is exploring possibilities rather than making dogmatic claims. The mark scheme rewards 'exploratory' responses — this means considering alternative readings and acknowledging ambiguity. Tentative language also reflects genuine literary critical practice: scholars rarely make absolute statements about meaning. It shows intellectual maturity and a nuanced understanding of how poetry works.",
        marks: 3
      },
      {
        question: "Write a topic sentence for a comparative paragraph on the theme of 'possessive love' in two poems of your choice.",
        lines: 3,
        modelAnswer:
          "Example: 'Both Browning in \"My Last Duchess\" and Duffy in \"Before You Were Mine\" present speakers whose love is inseparable from possessiveness, yet while the Duke's possessiveness is sinister and controlling, Duffy's is tinged with guilt and self-awareness, suggesting that the desire to possess those we love is a more universal — and more complicated — impulse than the Duke's villainy alone might suggest.'",
        marks: 4
      },
      {
        question: "What are the four Assessment Objectives for Paper 2 Section B? How many marks is each worth (approximately)?",
        lines: 5,
        modelAnswer:
          "AO1 (12 marks): Read, understand, and respond to texts — maintain a critical style, use textual references. AO2 (12 marks): Analyse the language, form, and structure used by writers to create meanings and effects, using relevant terminology. AO3 (6 marks): Show understanding of the relationships between texts and the contexts in which they were written. AO4 is assessed through the quality of comparison across the response. AO2 and AO1 carry the most weight, so detailed analysis of methods and a well-supported personal response are crucial.",
        marks: 4
      }
    ],
    teacherNotes: [
      "This lesson is purely skills-focused — no new poems are introduced. Students should have their anthology notes from previous lessons.",
      "The band 3 vs band 6 comparison at the start is the most impactful teaching moment — spend time on it.",
      "The PEACE structure is a scaffold, not a straitjacket. Explain that top-band students may deviate from it once confident.",
      "The model paragraph should be displayed and revisited throughout the remaining poetry lessons.",
      "Mark scheme bingo is a revision activity that can be repeated with different grids.",
      "Collect the guided practice paragraphs for formative assessment — provide detailed written feedback before the exam practice lesson."
    ],
    targetedSkills: [
      "AO1: Critical response with textual references",
      "AO2: Analysis of methods",
      "AO3: Contextual understanding",
      "AO4: Integrated comparative writing",
      "Essay structure and academic register"
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 10 — Exam Practice: Full Comparison Essay
  // ─────────────────────────────────────────────
  {
    id: "lr-10-exam-practice",
    title: "Exam Practice: Full Comparison Essay Under Timed Conditions",
    text: "AQA Love & Relationships Poetry Anthology",
    board: "AQA",
    yearGroup: "Year 10/11",
    duration: "60 minutes",
    objectives: [
      "Apply all skills from the Love & Relationships scheme of work in a full timed essay",
      "Practise selecting an appropriate second poem for comparison under exam conditions",
      "Demonstrate integrated comparison, close analysis, and contextual understanding",
      "Develop time management skills for the 45-minute exam allocation"
    ],
    successCriteria: [
      "I can plan a comparative essay in under 5 minutes, selecting a strong second poem",
      "I can write a structured response covering at least three comparative points in 40 minutes",
      "I can self-assess my response against the AQA mark scheme and identify areas for improvement"
    ],
    keywords: [
      "timed conditions",
      "planning",
      "second poem selection",
      "integrated comparison",
      "mark scheme",
      "self-assessment",
      "time management",
      "exam technique",
      "annotation"
    ],
    starterActivity: {
      title: "Quick-Fire Revision: Poem Speed-Dating",
      duration: "8 minutes",
      instructions:
        "Students sit in two facing rows. Each student has a poem name card. They have 60 seconds to tell their partner: (1) the poem's key theme, (2) one key quotation, (3) one technique the poet uses. Then one row moves along. Repeat three times so students revise three poems in rapid succession. This warms up their recall before the timed essay. Teacher circulates, correcting misconceptions and praising strong quotation recall.",
      differentiation: {
        support: "Students can use their revision posters or notes during the speed-dating (open-book warm-up).",
        core: "Students recall from memory and name the technique precisely.",
        stretch: "Students add a comparison link: 'This poem pairs well with... because...'"
      },
      resources: ["Poem name cards (x15)", "Timer display"]
    },
    mainActivities: [
      {
        title: "Reading the Question & Planning (Timed: 5 minutes)",
        duration: "5 minutes",
        instructions:
          "Display the exam question: 'Compare how poets present intense emotions in \"Porphyria's Lover\" and one other poem from the Love & Relationships anthology.' Distribute the printed text of 'Porphyria's Lover' (as it would appear in the exam). Students spend exactly five minutes: (1) reading and annotating the printed poem (2 minutes), (2) choosing their second poem and noting why (1 minute), (3) creating a brief comparison plan — three points with quotations from both poems (2 minutes). Teacher times strictly. After five minutes, stop. Quick poll: which second poems have students chosen? Discuss briefly — strong and weak choices.",
        differentiation: {
          support: "Provide a planning template with three boxes: Point 1 / Point 2 / Point 3, each with space for two quotations.",
          core: "Students plan independently using their preferred method.",
          stretch: "Students plan four points and include AO3 context notes in their plan."
        },
        resources: [
          "Exam question slide",
          "Printed text of 'Porphyria's Lover'",
          "Planning template (support tier)",
          "Timer display"
        ]
      },
      {
        title: "Timed Writing: Full Comparative Essay (Timed: 40 minutes)",
        duration: "40 minutes",
        instructions:
          "Students write their full comparative essay in silence under timed conditions. Teacher displays a countdown timer. Students should aim for: a brief introduction (2-3 sentences setting up the comparison), three to four PEACE paragraphs, and a brief conclusion. Remind students: the printed poem is in front of them but the second poem must be quoted from memory. Teacher circulates silently, making notes on common strengths and areas for development but not intervening. At 20 minutes, display a discreet 'halfway' prompt. At 35 minutes, display '5 minutes remaining — start your conclusion.' Collect essays at 40 minutes.",
        differentiation: {
          support: "Provide a structural guide: Introduction (3 mins) / Paragraph 1 (10 mins) / Paragraph 2 (10 mins) / Paragraph 3 (10 mins) / Conclusion (3 mins) with the PEACE prompts alongside each section.",
          core: "Students write independently under timed conditions.",
          stretch: "Students aim for four paragraphs and include a conceptualised introduction that establishes a critical argument (e.g. 'Both Browning and Hardy suggest that intense emotion, whether passion or despair, traps the speaker in a moment from which they cannot escape')."
        },
        resources: [
          "Exam question displayed throughout",
          "Printed 'Porphyria's Lover' text",
          "Countdown timer",
          "Structural time guide (support tier)",
          "Lined paper or exam booklets"
        ]
      }
    ],
    plenaryActivity: {
      title: "Self-Assessment Against the Mark Scheme",
      duration: "7 minutes",
      instructions:
        "Distribute a simplified AQA mark scheme grid (bands 1-6 with student-friendly descriptors). Students reread their essay and highlight where they demonstrate each AO. They then write a self-assessment: 'I think my response is band ___ because ___. To reach band ___, I need to ___.' This is a crucial metacognitive exercise. Students attach the self-assessment to their essay for teacher marking. Teacher collects all essays with self-assessments.",
      differentiation: {
        support: "Provide a tick-list version of the mark scheme: 'Did you... compare? quote from both poems? name techniques? include context?'",
        core: "Students use the full simplified mark scheme and write a two-sentence self-assessment.",
        stretch: "Students identify their single weakest AO and write a specific improvement target with an example of what they would add."
      }
    },
    homework:
      "Rewrite your weakest paragraph from the timed essay, improving it based on your self-assessment. Then write a new paragraph on a point you did not have time to include. Bring both to the next lesson for peer comparison.",
    worksheetQuestions: [
      {
        question: "You have 45 minutes for this question in the exam. How should you divide your time? Create a time plan.",
        lines: 4,
        modelAnswer:
          "Reading and annotating the printed poem: 2 minutes. Choosing second poem and planning: 3 minutes. Writing introduction: 2-3 minutes. Paragraph 1: 10 minutes. Paragraph 2: 10 minutes. Paragraph 3: 10 minutes. Conclusion: 3 minutes. Proofreading: 2 minutes. Total: approximately 43 minutes, allowing a small buffer.",
        marks: 3
      },
      {
        question: "What makes a good choice of second poem? What should you consider when selecting it?",
        lines: 5,
        modelAnswer:
          "A good second poem should share a clear thematic connection with the named poem but offer enough difference for genuine comparison. Consider: (1) Do I know this poem well enough to quote from memory? (2) Can I identify at least three comparison points? (3) Do the poems use different techniques to explore a similar theme (this makes for richer analysis)? (4) Can I include relevant context for both? Avoid choosing a poem just because you like it — choose the one that creates the strongest comparison.",
        marks: 4
      },
      {
        question: "Write a model introduction for the question: 'Compare how poets present intense emotions in \"Porphyria's Lover\" and one other poem.'",
        lines: 5,
        modelAnswer:
          "Both Browning's 'Porphyria's Lover' and Hardy's 'Neutral Tones' present speakers consumed by intense emotion, yet the nature of that intensity differs profoundly. Browning's speaker is driven by obsessive passion that culminates in violence, while Hardy's speaker is overwhelmed by the desolating numbness of love's death. Both poets use natural settings to externalise internal turmoil, but where Browning's storm gives way to a disturbing calm, Hardy's bleak landscape remains unbroken — suggesting that despair, unlike passion, offers no release.",
        marks: 5
      },
      {
        question: "What is the most common mistake students make in comparative poetry essays? How can you avoid it?",
        lines: 4,
        modelAnswer:
          "The most common mistake is writing about each poem separately — spending half the essay on poem 1 and half on poem 2 with a brief link at the end. This is a 'bolt-on' approach and rarely scores above band 3. To avoid it, use the PEACE structure to weave both poems into every paragraph. Every paragraph should contain quotations from both poems and a comparative connective. The reader should never feel like they are reading two separate mini-essays.",
        marks: 3
      },
      {
        question: "Write a model conclusion for a comparison of 'Porphyria's Lover' and a poem of your choice.",
        lines: 5,
        modelAnswer:
          "Ultimately, both Browning and Barrett Browning present love as an overwhelming force that consumes the speaker entirely. However, while Porphyria's lover is consumed by a desire to possess and freeze a moment of love — resulting in murder — Barrett Browning's speaker in 'Sonnet 29' is consumed by longing that ultimately seeks the real, living beloved ('Renew thy presence'). Browning's monologue exposes the horror of love turned to control; Barrett Browning's sonnet celebrates the yearning that makes love vital. Perhaps the critical difference is that one speaker destroys the beloved to preserve love, while the other destroys her own illusions to find it.",
        marks: 5
      },
      {
        question: "Self-assessment: Look at the AQA mark scheme. Which band do you think your timed essay reached? What is one specific thing you could do to improve it?",
        lines: 5,
        modelAnswer:
          "This is a personal reflection question. A strong self-assessment might say: 'I think my essay reached band 4 because I compared both poems throughout and used quotations, but my analysis was sometimes surface-level — I named techniques without fully exploring their effects. To reach band 5, I need to develop my AO2 analysis by explaining connotations of individual words and linking technique to the poet's overall message. For example, instead of writing \"Browning uses a metaphor\", I should write \"Browning's metaphor of... suggests... which reveals...\"'",
        marks: 4
      }
    ],
    teacherNotes: [
      "This lesson should feel like a genuine exam rehearsal — maintain silence during the timed writing and use a visible countdown.",
      "The speed-dating starter is crucial for warming up recall; do not skip it.",
      "When circulating during the timed write, note common issues (e.g. bolt-on comparison, no context, weak quotation recall) for a whole-class feedback lesson.",
      "The self-assessment is the most important part of the plenary — it builds metacognitive skills and helps students take ownership of their progress.",
      "Plan a feedback lesson for the next session: return marked essays, model how to improve using real examples (anonymised), and give students time to redraft.",
      "Consider providing a 'quotation bank' revision sheet for students who struggled with recall — this should be used for revision, not during future timed practices."
    ],
    targetedSkills: [
      "AO1: Sustained critical response",
      "AO2: Detailed analysis of methods",
      "AO3: Integrated contextual understanding",
      "AO4: Fluent integrated comparison",
      "Exam technique and time management",
      "Metacognitive self-assessment"
    ]
  }
]
