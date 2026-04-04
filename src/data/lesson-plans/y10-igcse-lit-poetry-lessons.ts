import type { LessonPlan } from '@/types';

export const y10IgcseLitPoetryLessons: LessonPlan[] = [
  // ── Lesson 1: Anthology Overview and Clusters ─────────────────────────────
  {
    id: 'y10litp-01',
    title: 'Anthology Overview and Thematic Clusters',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the structure and purpose of the Edexcel IGCSE Poetry Anthology (spec 4ET1)',
      'Identify the key thematic clusters that group poems for comparative study',
      'Apply a three-phase reading strategy to approach anthology poems effectively',
      'Build an initial overview of tone, subject matter, and mood across selected poems',
    ],
    successCriteria: [
      'I can explain what an anthology is and why this one has been curated for examination',
      'I can name at least three thematic clusters and assign poems to each cluster',
      'I can describe the three-phase reading approach and explain the purpose of each phase',
      'I can write a brief first-response to a poem noting subject, tone, and an initial impression',
    ],
    keywords: [
      'anthology',
      'cluster',
      'theme',
      'tone',
      'subject matter',
      'connotation',
      'comparison',
      'first response',
      'annotation',
    ],
    starterActivity: {
      title: 'What Is an Anthology? — Quick-Fire Discussion',
      duration: '8 minutes',
      instructions:
        'Display three contrasting short poems on the board (one about love, one about conflict, one about nature). Ask students: "What do these poems have in common? Why might an examiner group them together?" Students discuss in pairs for three minutes, then share ideas as a class. Teacher introduces the word "anthology" and its Greek root (anthologia — a gathering of flowers), explaining that the IGCSE anthology is a curated collection in which poem groupings are deliberate and reward comparative analysis. Record emerging thematic suggestions on the board.',
      differentiation: {
        support:
          'Provide a printed glossary card with key terms: anthology, theme, cluster, tone. Students use the card during the discussion.',
        core: 'Students identify at least two shared themes across the three poems and articulate what makes each poem distinctive.',
        stretch:
          'Students consider why an examiner might have deliberately chosen poems that contrast as well as connect, and predict what kinds of comparison questions might result.',
      },
      resources: [
        'Three short poems displayed on projector',
        'Glossary card (support)',
        'Mini-whiteboards and pens',
      ],
    },
    mainActivities: [
      {
        title: 'Mapping the Anthology: Thematic Clusters',
        duration: '22 minutes',
        instructions:
          'Distribute the full anthology poem list. Teacher models how to assign the first three poems to thematic clusters (e.g., Love and Relationships; Power and Conflict; Identity and Memory; Nature and the Environment) using a large mind-map projected on the board. Students then work in small groups to read opening stanzas of six further poems and assign each to a cluster, justifying their decisions with a brief note on subject matter and tone. Groups share findings; teacher builds a class-wide cluster map on the board. Stress that some poems can belong to multiple clusters — that complexity is valuable in the exam.',
        differentiation: {
          support:
            'Provide a pre-filled cluster map with two poems already placed in each cluster. Students add three further poems to the correct clusters.',
          core: 'Students independently assign poems to clusters with written justifications noting subject matter and tone.',
          stretch:
            'Students identify which poems they would describe as "bridging" poems — those that fit two or more clusters equally well — and explain the interpretive implications of each placement.',
        },
        resources: [
          'Full anthology poem list handout',
          'Blank cluster mind-map template',
          'Projected class cluster map',
        ],
      },
      {
        title: 'Three-Phase Reading in Practice',
        duration: '20 minutes',
        instructions:
          'Teacher explains the three-phase approach: Phase 1 — read without annotating and note instinctive reactions; Phase 2 — close annotation, line by line; Phase 3 — thematic grouping. Students apply Phase 1 to a new poem from the anthology, reading it silently twice and writing a single-sentence instinctive response. Teacher then leads a Phase 2 demonstration on the same poem using the visualiser, annotating for imagery, tone shifts, and structural features. Students annotate their own copies. In the final three minutes, students write: "This poem belongs in the ___ cluster because..."',
        differentiation: {
          support:
            'Provide an annotated model response for a different poem, showing the style and depth expected. Students use it as a scaffold for their own annotations.',
          core: 'Students complete independent Phase 1 and 2 annotations and write a justified cluster assignment.',
          stretch:
            'Students predict two exam questions that could be asked using this poem in comparison with another, explaining why those pairings would be productive.',
        },
        resources: [
          'Anthology copies (individual or class set)',
          'Annotation model on visualiser',
          'Sticky note for Phase 1 response',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket: Toolkit Check',
      duration: '7 minutes',
      instructions:
        'Students complete a half-page "Toolkit Card" for one poem studied today, filling in: subject matter (1 sentence), dominant theme (1 word + explanation), tone (2 adjectives + a brief justification), and cluster placement with reason. Teacher collects cards to assess readiness before Lesson 2. Three volunteers share their cards aloud; class votes thumbs-up or thumbs-down on whether each element is accurate.',
      differentiation: {
        support: 'Provide the Toolkit Card with sentence-starter prompts for each section.',
        core: 'Students complete all four sections of the Toolkit Card from memory using their annotations.',
        stretch:
          'Students add a fifth section to their card: "A question this poem raises for me..." and formulate one analytical question they want to explore in future lessons.',
      },
      resources: ['Toolkit Card template'],
    },
    homework:
      'Read three poems from the anthology independently at home. For each poem, complete a Toolkit Card (subject matter, dominant theme, tone, cluster) and write one sentence beginning: "What I find most interesting about this poem is..."',
    worksheetQuestions: [
      {
        question:
          'What is an anthology? Using the Greek origin of the word, explain what makes a curated anthology different from a random collection of poems.',
        lines: 4,
        modelAnswer:
          'An anthology is a published collection of literary pieces selected by an editor or examination board. The word derives from the Greek "anthologia," meaning "a gathering of flowers," suggesting deliberate curation. Unlike a random collection, a curated anthology groups texts because they share thematic connections, contrasting techniques, or complementary perspectives that reward comparative study.',
        marks: 3,
      },
      {
        question:
          'Choose one poem from the anthology and explain which thematic cluster it belongs to. Use evidence from the poem to support your answer.',
        lines: 5,
        modelAnswer:
          'The poem belongs to the [cluster name] cluster. This is evident from [specific detail/image/subject], which establishes [theme]. The opening lines, particularly the image of [quotation], suggest [thematic connection], placing it clearly alongside other poems concerned with [theme].',
        marks: 4,
      },
      {
        question:
          'Describe the three-phase reading approach. Why is it important NOT to annotate during Phase 1?',
        lines: 5,
        modelAnswer:
          'Phase 1 involves reading each poem once without annotating, noting instinctive reactions. Phase 2 involves close line-by-line annotation. Phase 3 involves thematic grouping. Avoiding annotation in Phase 1 is important because it allows the reader to experience the poem holistically and record a genuine first response, which often becomes the seed of a personal interpretive voice — something examiners reward.',
        marks: 3,
      },
      {
        question:
          'Explain why some poems might belong to more than one thematic cluster. Why is this complexity useful in an exam context?',
        lines: 4,
        modelAnswer:
          'Many poems explore more than one theme simultaneously — a poem about war may equally explore identity or loss. This complexity is useful because it means the same poem can be cited in comparison with poems from different clusters, giving the student flexible and adaptable knowledge. It also reflects the richness of poetry itself, which rarely reduces to a single meaning.',
        marks: 3,
      },
      {
        question:
          'Write a first-response (3–4 sentences) to a poem you read today. Include: subject, dominant tone, and the image or phrase that struck you most, with a brief explanation of why.',
        lines: 6,
        modelAnswer:
          'The poem explores [subject] through the perspective of [speaker/voice]. The dominant tone is [tone adjective], created by [technique or example]. The image that struck me most was [quotation] because it conveys [effect/meaning] in an unexpected or powerful way. This suggests the poet is inviting the reader to consider [theme or idea].',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Print the anthology poem list in advance so students can write on their copies; having tangible materials significantly improves engagement during the clustering activity.',
      'The thematic cluster categories given here (Love and Relationships; Power and Conflict; Identity and Memory; Nature and the Environment) are illustrative — adapt them to match the specific Edexcel anthology edition in use.',
      'Praise students who argue that a poem belongs to multiple clusters, as this demonstrates sophisticated thinking about theme rather than reductive categorisation.',
      'Collect Toolkit Cards from the exit ticket and use them diagnostically to identify students who are struggling to move beyond surface description — these students will need extra scaffolding in Lesson 2.',
      'If time is short, reduce the Phase 2 annotation activity to a teacher-led demonstration only, with students annotating independently at home.',
    ],
    targetedSkills: [
      'AO1 — Personal response and textual reference',
      'AO2 — Analysis of language, form, and structure',
      'Thematic classification and clustering',
      'Close reading and annotation',
      'Independent exploration of poetic meaning',
    ],
  },

  // ── Lesson 2: Close Reading a Single Poem (Annotation Method) ─────────────
  {
    id: 'y10litp-02',
    title: 'Close Reading a Single Poem — The Annotation Method',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply a systematic annotation method to a single anthology poem',
      'Distinguish between surface-level paraphrase and analytical commentary',
      'Identify language, structural, and contextual features through layered annotation',
      'Develop confidence in generating multiple interpretations of a single poem',
    ],
    successCriteria: [
      'I can annotate a poem using at least four different annotation lenses (language, form, tone, theme)',
      'I can explain the difference between paraphrase and analysis with a written example',
      'I can identify at least two ambiguous moments in a poem and suggest two interpretations of each',
      'I can use precise metalanguage when annotating (e.g., "sibilance creates...", "enjambment suggests...")',
    ],
    keywords: [
      'annotation',
      'paraphrase',
      'analysis',
      'metalanguage',
      'ambiguity',
      'connotation',
      'denotation',
      'lens',
      'inference',
      'implication',
    ],
    starterActivity: {
      title: 'Paraphrase vs. Analysis: Spot the Difference',
      duration: '8 minutes',
      instructions:
        'Display two written responses to the same quotation: Response A is pure paraphrase ("The poet is saying that the soldier is sad"); Response B is analytical ("The adjective \'hollow\' carries connotations of emptiness and lack of substance, suggesting the soldier has been psychologically drained by combat rather than merely physically wounded"). Students identify which is paraphrase and which is analysis, then articulate in writing the key differences between the two. Quick-fire class discussion: what are the three hallmarks of genuine analysis? Teacher records agreed criteria on the board.',
      differentiation: {
        support: 'Provide a checklist: "Analysis includes: 1. A named technique. 2. A connotation or implication. 3. A link to theme or effect."',
        core: 'Students write their own definition of analysis in one sentence, using the displayed example as a model.',
        stretch: 'Students rewrite Response A as a fully analytical comment, adding metalanguage, connotations, and a thematic link.',
      },
      resources: [
        'Two displayed responses on projector',
        'Analysis checklist (support)',
        'Mini-whiteboards',
      ],
    },
    mainActivities: [
      {
        title: 'The Four-Lens Annotation Framework',
        duration: '20 minutes',
        instructions:
          'Teacher introduces the Four-Lens framework: Lens 1 — Language (word choice, figurative language, sound devices); Lens 2 — Form and Structure (stanza pattern, line length, rhyme, enjambment); Lens 3 — Tone and Voice (speaker, mood shifts, register); Lens 4 — Theme and Context (what larger ideas does this poem explore?). Distribute copies of a chosen anthology poem. Teacher models annotating the first stanza live on the visualiser, using four different coloured pens for the four lenses and thinking aloud throughout. Students then annotate the remaining stanzas independently using the same colour-coding. Emphasis: every annotation must include an "effect" word — not just labelling but explaining.',
        differentiation: {
          support: 'Provide a partially annotated poem with six annotations already completed across the four lenses. Students add five further annotations.',
          core: 'Students annotate the full poem using the Four-Lens framework, aiming for at least twelve annotations total.',
          stretch: 'Students write a brief "annotation hierarchy" — ranking their three most significant annotations and justifying why those are the most analytically rich moments in the poem.',
        },
        resources: [
          'Printed copies of selected anthology poem',
          'Four-Lens annotation guide handout',
          'Four-colour highlighters or pens',
          'Visualiser for teacher modelling',
        ],
      },
      {
        title: 'Ambiguity Hunting and Multiple Interpretations',
        duration: '20 minutes',
        instructions:
          'Teacher explains that the richest poetry resists a single fixed interpretation. Model identifying an ambiguous moment in the poem: "The word \'bound\' could mean restrained, suggesting captivity, OR heading towards a destination, suggesting purpose — this duality is itself the meaning." Students identify two ambiguous words or phrases in their annotated poem. For each, they write: "Reading A suggests... because... Reading B suggests... because..." Pairs compare choices and discuss whether the ambiguities are thematically connected. Class discussion: which interpretation do you find more convincing, and why?',
        differentiation: {
          support: 'Teacher pre-marks three potentially ambiguous moments in the poem with a star. Students choose two of those three to explore.',
          core: 'Students independently identify and write up two ambiguous moments with two interpretations each.',
          stretch: 'Students explore whether their two chosen ambiguities relate to each other thematically, and write a short paragraph arguing that the poem deliberately sustains both meanings throughout.',
        },
        resources: [
          'Annotated poem copies from previous activity',
          'Ambiguity response frame handout',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Quote, Three Layers',
      duration: '7 minutes',
      instructions:
        'Each student selects the single quotation from the poem they find most analytically rich. They write three analytical layers on a post-it: Layer 1 — what the quotation literally says (denotation); Layer 2 — what it implies (connotation, figurative meaning); Layer 3 — how it connects to the poem\'s central theme. Post-its are placed on a class display board grouped by quotation choice. Teacher notes which moments in the poem attract the most analytical attention and discusses why.',
      differentiation: {
        support: 'Provide the three-layer frame with sentence starters for each layer.',
        core: 'Students write all three layers independently in full sentences.',
        stretch: 'Students add a fourth layer: "The ambiguity here means..." exploring what is left unresolved.',
      },
      resources: ['Post-it notes', 'Three-layer response frame (support)'],
    },
    homework:
      'Choose a second anthology poem you have not yet annotated. Apply the Four-Lens framework independently at home, producing at least ten annotations. Write one paragraph (5–7 sentences) that analyses the most interesting language feature you have identified, using connotations, effect, and a thematic link.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between paraphrase and analysis. Use a short example to illustrate each.',
        lines: 5,
        modelAnswer:
          'Paraphrase restates what the text says in simpler words (e.g., "The poet says the man is lonely"). Analysis examines how and why the language creates meaning (e.g., "The adjective \'hollow\' carries connotations of emptiness and absence, suggesting the speaker\'s isolation has consumed his sense of self"). Analysis always names a technique, explores connotation or effect, and links to theme.',
        marks: 4,
      },
      {
        question:
          'Name the Four Lenses of the annotation framework and give one example of what you would look for under each lens.',
        lines: 5,
        modelAnswer:
          'Lens 1 — Language: word choice, figurative language (e.g., a metaphor comparing loss to drowning). Lens 2 — Form and Structure: stanza pattern, enjambment (e.g., a volta at line 9 signals a shift in tone). Lens 3 — Tone and Voice: speaker\'s register, mood shifts (e.g., from intimate to aggressive). Lens 4 — Theme and Context: large ideas explored (e.g., the poem engages with post-colonial identity).',
        marks: 4,
      },
      {
        question:
          'Select one quotation from the poem studied in this lesson. Write a three-layer response: denotation, connotation, and thematic link.',
        lines: 6,
        modelAnswer:
          'Quotation: [chosen quotation]. Denotation: the phrase literally means [surface-level meaning]. Connotation: the word [specific word] carries connotations of [associated meanings], suggesting [implication for the speaker/subject]. Thematic link: this connects to the poem\'s central concern with [theme], reinforcing the idea that [thematic statement].',
        marks: 5,
      },
      {
        question:
          'Identify one ambiguous moment in the poem. Write two contrasting interpretations of it, beginning each with "Reading A suggests..." and "Reading B suggests..."',
        lines: 6,
        modelAnswer:
          'The word/phrase [quotation] is ambiguous. Reading A suggests [interpretation A] because [evidence/connotation]. Reading B suggests [interpretation B] because [evidence/connotation]. The tension between these two readings is itself meaningful, because [explanation of what the duality reveals about the poem\'s themes].',
        marks: 4,
      },
      {
        question:
          'Why do examiners value personal response alongside technical analysis? How can you signal genuine personal engagement in your writing?',
        lines: 4,
        modelAnswer:
          'Examiners reward genuine personal engagement because it demonstrates that the student has formed an interpretive relationship with the text rather than simply applying memorised points. Personal response can be signalled using phrases such as "I find it striking that...", "What I notice here is...", or "The ambiguity here suggests to me...", which show the student\'s own analytical voice rather than a rehearsed formula.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose a poem with clear ambiguity and multiple accessible language features for this lesson — avoid the most complex poem in the anthology, which should be saved for later in the sequence.',
      'The colour-coding annotation system is highly effective but can slow students down; monitor pacing and allow students to use a single pen if time is running short.',
      'Circulate during the independent annotation phase and prompt students who are paraphrasing with: "What does this word make you feel? What does it remind you of?" — these questions unlock connotative thinking.',
      'The post-it plenary creates a useful classroom resource; photograph the display for students to refer back to in revision.',
      'Stretch students are ready to begin drafting analytical paragraphs — signpost this as preparation for Lesson 7.',
    ],
    targetedSkills: [
      'AO1 — Personal response and close reading',
      'AO2 — Analysis of language with metalanguage',
      'Analytical writing: denotation, connotation, thematic link',
      'Identifying and exploring ambiguity',
      'Independent annotation using structured frameworks',
    ],
  },

  // ── Lesson 3: Analysing Form and Structure ────────────────────────────────
  {
    id: 'y10litp-03',
    title: 'Analysing Form and Structure in Anthology Poems',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Define and distinguish between poetic form and poetic structure',
      'Analyse how a poet\'s choices of form and structure create or reinforce meaning',
      'Apply understanding of common forms (sonnet, ballad, dramatic monologue, free verse) to anthology poems',
      'Write analytical commentary that integrates form and structure analysis with language analysis',
    ],
    successCriteria: [
      'I can define "form" and "structure" and explain the difference between them',
      'I can identify the form of at least two anthology poems and explain the significance of that choice',
      'I can analyse how structural features (volta, enjambment, stanza breaks, line length) create meaning',
      'I can write a paragraph that analyses form or structure and links the analysis to theme',
    ],
    keywords: [
      'form',
      'structure',
      'sonnet',
      'volta',
      'free verse',
      'dramatic monologue',
      'enjambment',
      'caesura',
      'stanza',
      'metre',
      'iambic pentameter',
      'rhyme scheme',
    ],
    starterActivity: {
      title: 'Form Sorting Challenge',
      duration: '8 minutes',
      instructions:
        'Provide groups of four with cards showing six short poem extracts (two sonnets, two free verse examples, two dramatic monologues). Groups must sort the cards into three form categories and justify each placement with one piece of evidence. Quick class feedback — teacher reveals answers and discusses what formal features were the "giveaways." Introduce the key distinction: form is the overall type or category of poem; structure is the way ideas are organised and sequenced within that form.',
      differentiation: {
        support: 'Provide a reference card with definitions and identifying features of each form.',
        core: 'Groups sort without a reference card, drawing on prior knowledge and the features of each extract.',
        stretch: 'Students consider: why might a poet choose a sonnet form for a poem about conflict rather than free verse? What effect does the constraint create?',
      },
      resources: [
        'Form sorting cards (laminated sets)',
        'Form reference card (support)',
      ],
    },
    mainActivities: [
      {
        title: 'Form Analysis: What Does the Choice Mean?',
        duration: '20 minutes',
        instructions:
          'Teacher selects two anthology poems — one with a clearly defined form (e.g., a sonnet) and one in free verse. For the sonnet, teacher models: naming the form; explaining the conventions (14 lines, iambic pentameter, volta); identifying where the poet follows or breaks the conventions; and analysing what the conventional or unconventional choice signifies. For example: "The volta at line 9 marks a sudden shift from celebration to grief — the structural turn mirrors the emotional turn." Students then complete a Form Analysis grid for the free verse poem independently, identifying line lengths, stanza pattern, and what the absence of regular form might suggest about the poem\'s subject or the speaker\'s state of mind.',
        differentiation: {
          support: 'Provide a partially completed Form Analysis grid with the form already named and two features already identified.',
          core: 'Students complete the grid independently and write two analytical sentences linking form choices to meaning.',
          stretch: 'Students compare the formal implications of both poems: "The structured form of [Poem A] suggests..., whereas the free verse of [Poem B] suggests..."',
        },
        resources: [
          'Printed copies of two selected anthology poems',
          'Form Analysis grid worksheet',
          'Sonnet conventions reference sheet',
        ],
      },
      {
        title: 'Structural Features: Enjambment, Caesura, and Volta',
        duration: '20 minutes',
        instructions:
          'Teacher explains and models three key structural features: enjambment (a line that runs on without a pause, creating momentum or mimicking a continuous thought), caesura (a mid-line pause, creating a jolt or hesitation), and volta (a turn in argument, tone, or subject). Model analysing a stanza that uses all three: show how enjambment creates breathless urgency, a caesura mid-line creates a sudden emotional stop, and the volta signals the poem\'s central tension. Students annotate a chosen poem for all three features, then write one analytical paragraph that discusses how at least two structural features work together to create meaning.',
        differentiation: {
          support: 'Highlight all enjambments, caesuras, and voltas for students in advance; students write analytical labels for each one rather than locating them independently.',
          core: 'Students locate and annotate all three features independently and write a full analytical paragraph.',
          stretch: 'Students explain how the structural choices interact with the poem\'s language to create a unified effect — writing two paragraphs, one on each technique, with a linking sentence.',
        },
        resources: [
          'Structural features definition card',
          'Selected anthology poem (printed)',
          'Analytical paragraph frame',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure in One Sentence',
      duration: '7 minutes',
      instructions:
        'Each student writes a single analytical sentence about form or structure for the poem studied in the main activity. Sentence must follow the model: "The poet\'s use of [feature] in [context] creates [effect] because [explanation]." Three students share their sentences; class provides peer feedback using two criteria: (1) Does it name a specific feature? (2) Does it explain the effect? Teacher addresses common weaknesses.',
      differentiation: {
        support: 'Provide the sentence frame with the four components clearly labelled.',
        core: 'Students write independently and refine their sentence after peer feedback.',
        stretch: 'Students write two linked sentences — one on form, one on structure — and explain how the two elements reinforce each other.',
      },
      resources: ['Analytical sentence frame (support)'],
    },
    homework:
      'Write a 150-word analytical paragraph on the form and structure of a poem you have not yet written about. Your paragraph must: name the form, analyse one structural feature (enjambment, caesura, or volta), and link both to the poem\'s theme. Use the Four-Lens framework from Lesson 2 to plan before writing.',
    worksheetQuestions: [
      {
        question:
          'Define "form" and "structure" in the context of poetry. Use an example to illustrate each definition.',
        lines: 5,
        modelAnswer:
          'Form refers to the overall type or category of a poem, defined by its conventions (e.g., a sonnet has 14 lines, typically in iambic pentameter). Structure refers to the way ideas are organised and sequenced within the poem (e.g., a volta at line 9 marks a shift from celebration to despair). Both shape the reader\'s experience of meaning, but form operates at the macro level and structure at the micro level.',
        marks: 4,
      },
      {
        question:
          'Explain what a volta is and describe its effect in a poem you have studied.',
        lines: 4,
        modelAnswer:
          'A volta is a structural turn or shift in the argument, tone, or subject of a poem. In [chosen poem], the volta at [location] shifts from [tone/subject A] to [tone/subject B], mirroring the speaker\'s change in emotional or intellectual position. This creates a sense of [effect — surprise, resolution, irony] that is central to the poem\'s meaning.',
        marks: 3,
      },
      {
        question:
          'Analyse how enjambment is used in one poem from the anthology. What effect does it create and how does this connect to the poem\'s theme?',
        lines: 5,
        modelAnswer:
          'In [poem], enjambment is used across [specific location], where the line runs on without a pause into the next. This creates a sense of [momentum/urgency/continuity], mirroring the speaker\'s [emotional state or action]. The absence of end-stopping means the reader is propelled forward without pause, reflecting the poem\'s theme of [theme — e.g., unstoppable grief, relentless time].',
        marks: 4,
      },
      {
        question:
          'Why might a poet choose to write in free verse rather than a traditional form such as the sonnet? Explain with reference to a specific poem.',
        lines: 5,
        modelAnswer:
          'A poet might choose free verse to suggest spontaneity, emotional rawness, or a rejection of conventional constraints. In [poem], the absence of a regular rhyme scheme or metre allows the poem\'s lines to shift and fragment in ways that mirror [theme/emotional experience]. This contrasts with the sonnet form, whose regularity can suggest tradition, order, or formal control — connotations that would be inappropriate for this poem\'s subject.',
        marks: 4,
      },
      {
        question:
          'Write a full analytical paragraph (5–8 sentences) examining how one formal or structural feature of a poem you have studied creates meaning.',
        lines: 8,
        modelAnswer:
          'In [poem], the poet employs [feature] to [purpose]. This is evident in [specific location/quotation], where [description of the feature in action]. The effect of this is [analytical effect], because [explanation using connotation or implication]. This structural choice connects to the poem\'s central theme of [theme], suggesting that [thematic statement]. The decision to use [feature] rather than [alternative] is significant because it [comparison/contrast with alternative]. Overall, the [feature] reinforces [wider point about meaning].',
        marks: 6,
      },
    ],
    teacherNotes: [
      'Students often confuse form and structure — invest time in the starter and the key definitions before moving into the analysis activities.',
      'The two poems selected for the main activity should be chosen to maximise contrast: a tightly formed poem alongside a loosely structured free verse poem will generate the most productive discussion.',
      'Many students initially describe structural features without analysing them — intervene with the prompt: "Why does that pause or line break appear there? What does it force the reader to do?"',
      'The analytical sentence in the plenary is a useful ongoing classroom routine — consider using it as a starter in subsequent lessons to build fluency.',
      'Stretch students should be encouraged to see form and structure as arguments the poet is making, not merely containers — this is the conceptual leap that characterises grade 8/9 responses.',
    ],
    targetedSkills: [
      'AO2 — Analysis of form and structure',
      'Using metalanguage accurately (volta, enjambment, caesura)',
      'Linking structural choices to thematic meaning',
      'Comparative formal analysis',
      'Sustained analytical paragraph writing',
    ],
  },

  // ── Lesson 4: Imagery and Language Technique Analysis ─────────────────────
  {
    id: 'y10litp-04',
    title: 'Imagery and Language Technique Analysis',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Identify and name a range of figurative language techniques in anthology poems',
      'Analyse the connotative and sensory effects of imagery beyond surface-level identification',
      'Recognise and explain semantic fields and their contribution to thematic meaning',
      'Write multi-layered analytical paragraphs that move from technique to connotation to theme',
    ],
    successCriteria: [
      'I can identify simile, metaphor, personification, pathetic fallacy, and sibilance in a poem',
      'I can explain the difference between denotation and connotation with a detailed example',
      'I can identify a semantic field in a poem and explain what it reveals about the poet\'s attitude',
      'I can write an analytical paragraph that names a technique, explores connotation, and links to theme',
    ],
    keywords: [
      'simile',
      'metaphor',
      'personification',
      'pathetic fallacy',
      'sibilance',
      'alliteration',
      'assonance',
      'semantic field',
      'diction',
      'imagery',
      'sensory',
      'connotation',
    ],
    starterActivity: {
      title: 'The Technique Pyramid',
      duration: '8 minutes',
      instructions:
        'Display a single line from an anthology poem containing at least three layers of language technique (e.g., a metaphor that also uses sibilance and a semantic field of death). Students work individually for five minutes to list every technique they can identify in the line. Class feedback — teacher draws a "pyramid" on the board with surface-level identification at the base, connotation analysis in the middle, and thematic link at the top. Discuss: most students reach the base; the goal today is to reach the top of the pyramid consistently.',
      differentiation: {
        support: 'Provide a named technique bank for students to work from.',
        core: 'Students identify techniques independently and attempt one connotation for each.',
        stretch: 'Students analyse the entire line at all three pyramid levels before the class discussion.',
      },
      resources: [
        'Single poem line displayed on projector',
        'Technique bank card (support)',
        'The Technique Pyramid diagram',
      ],
    },
    mainActivities: [
      {
        title: 'Imagery Dissection: Simile, Metaphor, Personification',
        duration: '20 minutes',
        instructions:
          'Distribute a poem rich in figurative imagery. Teacher models close analysis of one simile: naming it, exploring what the comparison introduces (the "vehicle" of the metaphor), unpacking its connotations, and linking to theme. Repeat with one metaphor and one example of personification. Key teaching point: the question is always "why this comparison?" — what does the vehicle bring to the subject? Students then find one of each device in the rest of the poem and write a three-sentence analysis of each: (1) name and quote; (2) connotations; (3) thematic link. Share with a partner; peer-check for all three layers.',
        differentiation: {
          support: 'Provide a three-sentence analysis frame with sentence starters for each layer.',
          core: 'Students complete three independent analyses (one per device) in full sentences.',
          stretch: 'Students compare two instances of the same device used in different parts of the poem, arguing how the second instance develops or subverts the first.',
        },
        resources: [
          'Selected anthology poem (printed)',
          'Three-sentence analysis frame (support)',
          'Figurative language reference card',
        ],
      },
      {
        title: 'Semantic Fields: Reading Below the Surface',
        duration: '20 minutes',
        instructions:
          'Teacher introduces semantic field: "A group of words that cluster around the same concept, even when the poem\'s stated subject is different." Model identifying a semantic field of warfare in a love poem ("battle," "siege," "surrender," "wounds") — explain what this semantic field reveals about the speaker\'s attitude to love. Students scan a new anthology poem for a dominant semantic field, list at least five words that constitute it, and write: "The semantic field of [concept] in this poem is built from [list]. This reveals that the poet regards [subject] as [attitude/interpretation]." Class discussion: does identifying the semantic field change your reading of the poem?',
        differentiation: {
          support: 'Teacher pre-highlights the relevant words; students identify the shared concept and write the analytical statement.',
          core: 'Students independently locate the semantic field and write the full analytical statement.',
          stretch: 'Students identify a second, contrasting semantic field in the same poem and write a paragraph arguing that the tension between the two fields is itself the poem\'s central meaning.',
        },
        resources: [
          'Second selected anthology poem (printed)',
          'Semantic field analysis template',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Best Sentence Competition',
      duration: '7 minutes',
      instructions:
        'Each student writes one analytical sentence about the imagery in either poem studied today. The sentence must contain: a named technique, a specific quotation, connotation analysis, and a thematic link — all in one sentence. Three volunteers read their sentences aloud; class votes on the "best" sentence and explains why using the four criteria. Teacher adds any missing element to the winning sentence to model a perfect response.',
      differentiation: {
        support: 'Allow students to use their three-sentence analysis frame as a scaffold, selecting the strongest elements.',
        core: 'Students draft independently and refine after hearing peer examples.',
        stretch: 'Students write two linked sentences — one identifying a technique and its connotations, the second exploring how the technique connects to a different poem in the same cluster.',
      },
      resources: ['Four-criteria checklist on projector'],
    },
    homework:
      'Select a poem you have not yet written about. Identify three language techniques (one simile or metaphor, one example of sound patterning, one semantic field). Write one full analytical paragraph for each technique, using the Technique Pyramid model. Total response: approximately 200 words.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between a simile and a metaphor. Why is a metaphor often considered more powerful than a simile?',
        lines: 4,
        modelAnswer:
          'A simile compares two things using "like" or "as" (e.g., "her eyes were like stars"), while a metaphor states that one thing is another (e.g., "her eyes were stars"). A metaphor is often considered more powerful because it makes the comparison absolute and direct — there is no "like" to soften it. The identification of the two things creates a stronger imaginative fusion, forcing the reader to experience the subject through the vehicle without qualification.',
        marks: 3,
      },
      {
        question:
          'Choose one example of personification from an anthology poem. Analyse it using the three-layer approach: name and quote; connotations; thematic link.',
        lines: 6,
        modelAnswer:
          'In [poem], the poet personifies [subject] as [human quality or action] in the phrase [quotation]. The connotations of [specific verb/adjective] include [associations], suggesting that the [subject] is [interpretation — e.g., predatory, suffering, yearning]. This connects to the poem\'s theme of [theme], because [explanation of how the personification advances the poem\'s argument or emotional effect].',
        marks: 4,
      },
      {
        question:
          'What is pathetic fallacy? Explain how it is used in one poem you have studied and what effect it creates.',
        lines: 4,
        modelAnswer:
          'Pathetic fallacy is the use of weather or natural setting to reflect or intensify a character\'s or speaker\'s emotional state. In [poem], [weather/natural element] is used to mirror [human emotion]. The [description] creates a sense of [effect], reinforcing the poem\'s theme of [theme] and aligning the outer world with the speaker\'s inner experience.',
        marks: 3,
      },
      {
        question:
          'Identify a semantic field in a poem you have studied. List five words from the field and explain what the field reveals about the poet\'s attitude to the poem\'s subject.',
        lines: 6,
        modelAnswer:
          'In [poem], a semantic field of [concept — e.g., imprisonment, warfare, decay] can be traced through the words [word 1], [word 2], [word 3], [word 4], and [word 5]. This reveals that the poet regards [subject] as [attitude — e.g., suffocating, violent, inevitable]. Even though the poem\'s stated subject is [topic], the consistent use of [concept] language implies that beneath the surface, the poem is really exploring [deeper theme].',
        marks: 4,
      },
      {
        question:
          'Explain what sound patterning (alliteration, assonance, or sibilance) adds to a poem that cannot be achieved by visual imagery alone. Illustrate your answer with a specific example.',
        lines: 5,
        modelAnswer:
          'Sound patterning creates a physical, sensory experience of meaning that visual imagery cannot replicate — the reader hears as well as sees. For example, the sibilance in [quotation] creates a [whispering/sinister/soothing] quality that [effect on atmosphere]. The repeated [s/sh] sounds slow the reading pace, forcing the reader to linger on [specific image or idea], thereby intensifying [emotional effect]. This contributes to the poem\'s theme of [theme] by making the reader experience [quality] rather than simply reading about it.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The Technique Pyramid model is transferable across all poetry lessons — use it consistently to train students to move from identification to analysis to thematic connection.',
      'Students frequently confuse personification and pathetic fallacy; clarify that pathetic fallacy is a specific type of personification applied to weather and the natural world to reflect human emotion.',
      'The semantic field activity is often revelatory for students who have been feature-spotting — it shows them that language patterns carry meaning even when the surface subject seems different.',
      'Peer-checking the three-layer analysis is highly effective: students are often better at spotting missing layers in each other\'s work than in their own.',
      'For the "Best Sentence Competition," consider keeping a running display of excellent analytical sentences from across the class — this models the standard and motivates competition.',
    ],
    targetedSkills: [
      'AO2 — Language analysis: figurative language, sound devices, semantic fields',
      'Moving from technique identification to connotation to theme',
      'Using metalanguage accurately and confidently',
      'Analytical paragraph construction: technique → connotation → theme',
      'Peer assessment and self-improvement of analytical writing',
    ],
  },

  // ── Lesson 5: Comparing Two Poems from the Same Cluster ───────────────────
  {
    id: 'y10litp-05',
    title: 'Comparing Two Poems from the Same Cluster',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Compare two poems from the same thematic cluster, identifying connections and contrasts',
      'Use comparative connectives fluently and purposefully in analytical writing',
      'Understand how comparison amplifies the analysis of each individual poem',
      'Construct a structured comparative paragraph using the point-evidence-analysis-comparison framework',
    ],
    successCriteria: [
      'I can identify at least two thematic connections and two technical contrasts between two poems',
      'I can use comparative connectives (whereas, similarly, in contrast, both poets, however) correctly in writing',
      'I can write a comparative paragraph that analyses both poems simultaneously rather than sequentially',
      'I can explain how comparing two poems deepens my understanding of each one individually',
    ],
    keywords: [
      'comparison',
      'contrast',
      'connective',
      'similarly',
      'whereas',
      'both',
      'cluster',
      'thematic link',
      'technique',
      'parallel',
      'diverge',
    ],
    starterActivity: {
      title: 'Venn Diagram Warm-Up',
      duration: '8 minutes',
      instructions:
        'Display two brief stanzas from two poems in the same cluster. Students draw a Venn diagram in their books: left circle = Poem A only, right circle = Poem B only, centre = both poems. In three minutes, students populate all three areas with observations about theme, tone, imagery, and form. Quick-fire class feedback to build a shared Venn diagram on the board. Teacher introduces the key lesson point: comparison means analysing what the similarities and differences reveal — not just listing them.',
      differentiation: {
        support: 'Provide a pre-drawn Venn diagram with six points already placed — three in the left circle, two in the centre, one in the right. Students add three more.',
        core: 'Students complete the Venn diagram independently and add one analytical comment to any two of their points.',
        stretch: 'Students rank the three most analytically significant comparisons from their Venn diagram and explain why those comparisons are richer than the others.',
      },
      resources: [
        'Two poem stanzas displayed on projector',
        'Pre-drawn Venn diagram template',
      ],
    },
    mainActivities: [
      {
        title: 'Comparative Connectives and the "Zoomed-In" Method',
        duration: '20 minutes',
        instructions:
          'Teacher explains the danger of "ping-pong" comparison (Poem A does this. Poem B does that. Poem A does this. Poem B does that...) and models the "zoomed-in" method: focus on one thematic idea, quote from Poem A and analyse it, then immediately introduce Poem B using a comparative connective and show how its treatment of the same idea is similar or different. Model a full comparative paragraph on the board. Introduce the five essential comparative connectives: "similarly," "whereas," "in contrast," "both poets," "however." Students practise by converting two separate single-poem analytical sentences into one comparative sentence using a connective.',
        differentiation: {
          support: 'Provide six pairs of single-poem sentences. Students choose three pairs and combine each using a connective from the provided list.',
          core: 'Students write three original comparative sentences without pre-written pairs, drawing on their own annotations of the two poems.',
          stretch: 'Students write a full comparative paragraph (5–7 sentences) using the zoomed-in method, integrating quotations from both poems around a single thematic focus.',
        },
        resources: [
          'Comparative connectives reference card',
          'Modelled comparative paragraph on projector',
          'Six sentence pairs handout (support)',
        ],
      },
      {
        title: 'Building a Full Comparative Response',
        duration: '20 minutes',
        instructions:
          'Teacher sets the comparison task: "Compare the ways the two poets present [theme] in these poems." Students plan their response using a PEAL grid (Point, Evidence A, Analysis A, Evidence B, Analysis B, Link). They then write two comparative paragraphs independently. First paragraph focuses on thematic/content comparisons; second focuses on a technical/formal contrast. Teacher circulates, prompting students to zoom in on language rather than discuss theme in the abstract.',
        differentiation: {
          support: 'Provide a PEAL grid with the thematic points already identified. Students supply evidence and analysis for each poem.',
          core: 'Students plan and write two paragraphs independently using the PEAL grid.',
          stretch: 'Students write a third paragraph that explores the most significant difference between the two poems, arguing which poem they find more effective and why.',
        },
        resources: [
          'PEAL comparison grid template',
          'Printed copies of both selected poems',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Peer Review: The Comparison Checklist',
      duration: '7 minutes',
      instructions:
        'Students swap their two paragraphs with a partner. Partners annotate using a three-point checklist: (1) Tick every genuine comparison (not ping-pong); (2) Circle any analytical comments that could be deeper; (3) Underline the best sentence in each paragraph. Partners give two written pieces of feedback: one "even better if..." and one "what worked well..." Students have two minutes to action one piece of feedback before the lesson ends.',
      differentiation: {
        support: 'Provide the three-point checklist as a printed prompt card.',
        core: 'Students peer-review and write feedback using the checklist independently.',
        stretch: 'Students write a third piece of feedback: "A question this comparison raises that you haven\'t yet answered is..."',
      },
      resources: ['Comparison checklist peer-review card'],
    },
    homework:
      'Write one additional comparative paragraph comparing the two poems studied today. Focus on a formal or structural contrast rather than a thematic link. Your paragraph must use at least two comparative connectives and two embedded quotations from each poem. Target: 120–150 words.',
    worksheetQuestions: [
      {
        question:
          'Explain what "ping-pong" comparison is and why it is less effective than the "zoomed-in" method.',
        lines: 4,
        modelAnswer:
          '"Ping-pong" comparison alternates between poems without integrating the analysis — e.g., "Poem A uses metaphor. Poem B uses simile. Poem A is in free verse. Poem B uses a sonnet form." This is less effective because it treats each poem in isolation rather than using the comparison to generate insight. The zoomed-in method focuses on one shared idea and analyses both poems simultaneously around that focus, which deepens understanding of each text.',
        marks: 3,
      },
      {
        question:
          'Write a comparative sentence using the connective "whereas" that analyses how two poems from the anthology treat the same theme differently.',
        lines: 3,
        modelAnswer:
          'In [Poem A], the poet presents [theme] as [treatment A], using [technique + quotation] to suggest [effect/meaning], whereas in [Poem B], [the same theme] is depicted as [treatment B] through [technique + quotation], implying [contrasting effect/meaning].',
        marks: 3,
      },
      {
        question:
          'Choose two poems from the same cluster. Identify one thematic similarity and one formal or technical contrast between them.',
        lines: 5,
        modelAnswer:
          'Thematic similarity: Both [Poem A] and [Poem B] explore [theme], as evidenced by [specific detail from each poem]. Technical contrast: [Poem A] uses [formal feature — e.g., strict rhyme scheme], which creates a sense of [effect], whereas [Poem B] employs [contrasting feature — e.g., free verse], which creates a different effect of [contrast]. This formal contrast means that even though both poems share the same theme, they create significantly different emotional experiences for the reader.',
        marks: 4,
      },
      {
        question:
          'Explain how comparing two poems can deepen your understanding of each individual poem.',
        lines: 4,
        modelAnswer:
          'Comparison illuminates what is distinctive and deliberate about each poem. Features that might seem unremarkable in isolation (e.g., a regular rhyme scheme) become analytically significant when contrasted with a poem that uses free verse to treat a similar theme. By reading poems against each other, we notice choices that the poet has made — and those choices carry meaning. The contrast becomes the context for each poem\'s significance.',
        marks: 3,
      },
      {
        question:
          'Write a full comparative paragraph (6–8 sentences) analysing how both poems you have studied today present the same theme. Use at least two comparative connectives.',
        lines: 8,
        modelAnswer:
          'Both [Poem A] and [Poem B] explore the theme of [theme], yet their treatments diverge significantly in tone and technique. In [Poem A], [specific evidence + analysis]. Similarly, [Poem B] addresses [same theme] through [evidence + analysis], suggesting [shared concern]. However, whereas [Poem A] uses [technique] to [effect], [Poem B] employs [contrasting technique], creating [contrasting effect]. This contrast reveals that [analytical point about what the comparison illuminates]. Both poets use [shared technique] to [shared purpose], but the effect in [Poem A] is [effect 1], while in [Poem B] it is [effect 2]. Overall, the comparison reveals [conclusion about what the two poems together say about the theme].',
        marks: 6,
      },
    ],
    teacherNotes: [
      'Poem selection is critical for this lesson — choose two poems with both clear thematic connections and significant formal/technical contrasts to maximise the analytical yield.',
      'The ping-pong vs. zoomed-in distinction is one of the most important conceptual shifts for students to make; return to it in subsequent comparison lessons until it becomes instinctive.',
      'Circulate during the independent writing phase specifically looking for students who are writing about each poem separately — redirect them with: "Can you put both poems in the same sentence?"',
      'The peer review checklist builds student metacognitive awareness of what good comparison looks like; use it consistently so students can eventually self-assess without the checklist.',
      'Consider co-creating a class display of excellent comparative sentences for ongoing reference.',
    ],
    targetedSkills: [
      'AO1 — Comparative personal response with textual evidence',
      'AO2 — Comparative analysis of language and form',
      'Using comparative connectives fluently in analytical writing',
      'Thematic clustering and cross-poem connections',
      'Peer review and responsive editing',
    ],
  },

  // ── Lesson 6: Comparing Across Clusters ───────────────────────────────────
  {
    id: 'y10litp-06',
    title: 'Comparing Poems Across Different Thematic Clusters',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Compare poems from different thematic clusters, identifying unexpected connections',
      'Understand how cross-cluster comparisons demonstrate sophisticated thematic thinking',
      'Develop an argument about which poem handles a shared concern more effectively',
      'Write a comparative response that integrates language, form, structure, and theme',
    ],
    successCriteria: [
      'I can identify a meaningful connection between two poems from different clusters',
      'I can explain why comparing across clusters requires more sophisticated thematic thinking than same-cluster comparison',
      'I can construct an evaluative argument about which poem is more effective and sustain it across two paragraphs',
      'I can write a comparison that integrates language, form, and theme simultaneously in each paragraph',
    ],
    keywords: [
      'cross-cluster',
      'unexpected connection',
      'evaluative',
      'effective',
      'argument',
      'integration',
      'juxtaposition',
      'sustained',
      'perspective',
      'voice',
    ],
    starterActivity: {
      title: 'Bridge-Building: Finding the Unexpected Link',
      duration: '8 minutes',
      instructions:
        'Display the names of four poems from two different clusters (e.g., two from Love and Relationships; two from Power and Conflict). Challenge students: can they find a connection between a poem from Cluster 1 and a poem from Cluster 2? Give three minutes for silent thinking, then pairs share ideas. Class discussion: what kinds of connections appear when we look across clusters? (e.g., both explore loss of control; both use a first-person confessional voice; both use natural imagery to represent human experience.) Teacher records the types of connection on the board: thematic, tonal, formal, linguistic.',
      differentiation: {
        support: 'Provide one connection as a model: e.g., "Both [Poem A from Cluster 1] and [Poem B from Cluster 2] use the imagery of water to represent [theme]."',
        core: 'Students generate two cross-cluster connections and write a sentence explaining each.',
        stretch: 'Students predict what exam question might arise from the most interesting cross-cluster pairing they have identified.',
      },
      resources: [
        'Four poem titles displayed on projector',
        'Connection model sentence (support)',
      ],
    },
    mainActivities: [
      {
        title: 'Reading for Cross-Cluster Connections',
        duration: '20 minutes',
        instructions:
          'Distribute one poem from each of two different clusters. Students read both poems and complete a Cross-Cluster Connections grid: Row 1 — shared theme (the unexpected link); Row 2 — shared technique or formal feature; Row 3 — key difference in tone or voice; Row 4 — a question raised by the juxtaposition of these two poems. Teacher models completing Row 1 and Row 2 live, demonstrating how to articulate a cross-cluster connection without forcing a connection that doesn\'t exist: "The link has to be earned from the text — not imposed." Class shares Row 3 and 4 responses.',
        differentiation: {
          support: 'Provide a completed Row 1 for each pair and sentence starters for Rows 2–4.',
          core: 'Students complete all four rows independently with full sentence responses.',
          stretch: 'Students write an analytical statement about whether the cross-cluster comparison reveals something about the anthology as a whole — what does the editor\'s curation suggest about the relationship between these themes?',
        },
        resources: [
          'Printed copies of two poems from different clusters',
          'Cross-Cluster Connections grid',
        ],
      },
      {
        title: 'Building an Evaluative Argument',
        duration: '20 minutes',
        instructions:
          'Teacher introduces evaluative comparison: not just comparing but arguing which poem handles a shared concern more powerfully or memorably. Model an evaluative statement: "While both poems explore loss through natural imagery, I find [Poem B]\'s extended metaphor of the eroding cliff more powerful than [Poem A]\'s simile of fallen leaves, because the former implies gradual, irreversible loss rather than seasonal renewal." Students write their own evaluative statement about the two poems, then build it into a two-paragraph response: Para 1 — the shared concern (with comparison); Para 2 — why one poem is more effective (evaluative argument, with specific evidence). Teacher circulates, prompting students to ground evaluative claims in textual evidence.',
        differentiation: {
          support: 'Provide the evaluative sentence frame: "While both poets explore [theme], I find [Poem] more effective because [reason supported by evidence]."',
          core: 'Students write both paragraphs independently with an evaluative argument.',
          stretch: 'Students challenge themselves to argue the opposite position in a third paragraph — playing devil\'s advocate — and then decide which argument is stronger.',
        },
        resources: [
          'Evaluative sentence frame (support)',
          'Annotated poem copies',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Most Interesting Comparison',
      duration: '7 minutes',
      instructions:
        'Each student writes one sentence naming the cross-cluster comparison they find most intellectually interesting from today\'s lesson and explaining why in a maximum of two further sentences. Volunteers share; class votes on the most thought-provoking comparison. Teacher explains that exam responses that make genuinely interesting observations — even unexpected ones — are rewarded, because they demonstrate authentic engagement with the texts.',
      differentiation: {
        support: 'Sentence frame: "The most interesting comparison I found today is between [Poem A] and [Poem B] because both [connection], yet [difference]."',
        core: 'Students write independently without a frame.',
        stretch: 'Students consider: does the cross-cluster comparison reveal a limitation in the thematic cluster system? Could the anthology be organised differently?',
      },
      resources: [],
    },
    homework:
      'Write a 200-word comparative response to this question: "Compare the ways two poets from different clusters present the idea of [chosen theme]." You must: write two full comparative paragraphs; include quotations from both poems; use at least three comparative connectives; and include one evaluative comment about which poem you find more effective.',
    worksheetQuestions: [
      {
        question:
          'Why is comparing poems from different clusters considered more sophisticated than comparing poems from the same cluster?',
        lines: 4,
        modelAnswer:
          'Same-cluster comparison is more straightforward because the poems have been deliberately grouped around a shared theme, making connections immediately apparent. Cross-cluster comparison requires the student to identify their own thematic link — one that is not built into the anthology structure — and to articulate why that connection is meaningful. This demonstrates higher-order thematic thinking: the ability to read across texts and construct a conceptual bridge from the evidence itself.',
        marks: 3,
      },
      {
        question:
          'What are the four types of cross-cluster connection identified in this lesson? Give a brief example of each.',
        lines: 5,
        modelAnswer:
          'Thematic connection: both poems share a concern with loss, even though they come from different clusters (e.g., Love and Relationships vs. Nature and Environment). Tonal connection: both adopt a bitter or ironic tone despite exploring different subjects. Formal connection: both use free verse despite treating very different themes, suggesting the formal choice carries similar ideological implications. Linguistic connection: both deploy a semantic field of warfare, revealing a shared underlying anxiety about power.',
        marks: 4,
      },
      {
        question:
          'Write an evaluative comparative sentence about two poems from different clusters. Your sentence must argue which poem handles a shared concern more effectively.',
        lines: 3,
        modelAnswer:
          'While both [Poem A] and [Poem B] explore the idea of [theme], I find [Poem B]\'s treatment more powerful because [specific technique and quotation] creates a more sustained and unsettling sense of [effect], whereas [Poem A]\'s [technique] resolves the tension too neatly, diminishing the complexity of [theme].',
        marks: 3,
      },
      {
        question:
          'A student argues: "A cross-cluster link only works if the connection is genuinely supported by the texts — you can\'t force a link." Do you agree? Explain your answer.',
        lines: 4,
        modelAnswer:
          'I agree. A forced connection — one not grounded in specific textual evidence — will be apparent to an examiner and weakens the response. A valid cross-cluster comparison must be "earned" from the text: both poems must demonstrably share the feature or theme being claimed, as evidenced by specific language, structural, or formal choices. Claiming that two poems share a theme of "feeling sad" without evidence is too vague; identifying that both use a semantic field of imprisonment to represent emotional constraint is a genuinely textual cross-cluster connection.',
        marks: 3,
      },
      {
        question:
          'Write two comparative paragraphs comparing a poem from one cluster with a poem from a different cluster. Include a thematic connection in Para 1 and an evaluative argument in Para 2.',
        lines: 10,
        modelAnswer:
          'Para 1: Both [Poem A] and [Poem B] explore [theme], despite belonging to different clusters. In [Poem A], [technique + quotation + analysis]. Similarly, [Poem B] engages with [same theme] through [technique + quotation + analysis], suggesting that [thematic statement applying to both]. The shared concern with [theme] means these poems reward cross-cluster reading, as each illuminates a dimension of [theme] that the other leaves implicit. Para 2: Despite this connection, [Poem B] handles [theme] more effectively than [Poem A] because [evaluative reason + evidence]. The [technique] in [Poem B] creates [effect], which is more [quality — nuanced/unsettling/memorable] than [Poem A\'s] [technique], which [limitation]. For this reason, [Poem B] offers a richer and more complex engagement with [theme].',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Select poem pairs that have a genuinely interesting but non-obvious cross-cluster connection — this models for students that sophisticated comparison requires reading effort, not just knowledge of clusters.',
      'The evaluative component is important preparation for the exam, where students are implicitly rewarded for taking a position rather than describing poems neutrally.',
      'Students who struggle with evaluation may find it helpful to frame it as a "preference" initially ("I find X more striking because...") before developing it into a more analytical judgement.',
      'The devil\'s advocate stretch activity is excellent preparation for the higher mark band, where examiners look for students who can complicate their own arguments.',
      'This lesson is a good opportunity to revisit the cluster map from Lesson 1 and ask students to add new connections they have discovered.',
    ],
    targetedSkills: [
      'AO1 — Evaluative personal response with sustained argument',
      'AO2 — Integrated language, form, and structure analysis in comparative writing',
      'Cross-cluster thematic thinking',
      'Constructing and sustaining an evaluative argument',
      'Writing comparative responses that integrate rather than alternate',
    ],
  },

  // ── Lesson 7: Writing a Timed Poetry Comparison Paragraph ─────────────────
  {
    id: 'y10litp-07',
    title: 'Writing a Timed Poetry Comparison Paragraph',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply the PEAL comparison framework under timed conditions',
      'Develop exam writing fluency: planning, drafting, and refining in compressed time',
      'Understand how to embed quotations efficiently without disrupting analytical flow',
      'Identify and self-correct common errors in timed comparative writing',
    ],
    successCriteria: [
      'I can plan a comparative paragraph in under three minutes using a PEAL grid',
      'I can write a full comparative paragraph in twelve minutes that integrates both poems',
      'I can embed quotations smoothly within my own sentences without block-quoting',
      'I can self-assess my paragraph using the mark scheme criteria and identify one target for improvement',
    ],
    keywords: [
      'PEAL',
      'embedded quotation',
      'timed writing',
      'analytical fluency',
      'mark scheme',
      'self-assessment',
      'planning',
      'drafting',
      'integration',
    ],
    starterActivity: {
      title: 'Quotation Embedding Drill',
      duration: '8 minutes',
      instructions:
        'Display five "clunky" quotation examples where quotations are dropped in as block-quotes rather than embedded (e.g., "The poet uses imagery. \'Like a broken drum.\' This is a simile."). Students rewrite each one as a properly embedded quotation sentence within two minutes. Teacher models the first example: "The poet compares [subject] to \'a broken drum,\' a simile that suggests [connotation]..." Quick-fire class correction of the remaining four. Key rule displayed on board: embed the quotation into your own sentence so the grammar flows continuously.',
      differentiation: {
        support: 'Provide a sentence frame for each example: "The [technique] of [quotation] suggests..."',
        core: 'Students rewrite all five independently before class correction.',
        stretch: 'Students write three additional embedded quotation sentences independently, each using a different analytical verb (explores, implies, conveys).',
      },
      resources: [
        'Five clunky quotation examples on projector',
        'Embedding sentence frame (support)',
      ],
    },
    mainActivities: [
      {
        title: 'The Three-Minute Plan',
        duration: '10 minutes',
        instructions:
          'Teacher explains the exam time pressure: students have approximately 45 minutes for the poetry comparison response, which includes planning. Model a three-minute plan using a PEAL grid for a live exam question on the board: "Compare the ways the poets present the theme of loss in [Poem A] and [Poem B]." Fill the grid: Point (the comparative theme), Evidence A (embedded quotation), Analysis A (connotation + effect), Evidence B (embedded quotation), Analysis B (connotation + effect), Comparative link (connecting sentence). Students then create their own three-minute plan for a different question on two poems they have annotated. Emphasise: the plan is a skeleton — don\'t write full sentences, just key words and quotations.',
        differentiation: {
          support: 'Provide a PEAL grid with the Point already written. Students supply evidence and analysis.',
          core: 'Students complete a full PEAL grid in three minutes independently.',
          stretch: 'Students plan two paragraphs in five minutes, with the second paragraph including an evaluative comparative sentence.',
        },
        resources: [
          'PEAL comparison grid template',
          'Modelled teacher plan on projector',
        ],
      },
      {
        title: 'Timed Paragraph Writing and Self-Assessment',
        duration: '30 minutes',
        instructions:
          'Part 1 (12 minutes, timed): Students write one full comparative paragraph from their plan. Silence. Teacher times on the projector. Part 2 (8 minutes): Students self-assess using a simplified mark scheme displayed on the board: Band 4 criteria — "Sustained comparative analysis; integrated quotations; explores effect on reader; links to theme." Students annotate their own paragraph: tick each criterion met, circle one sentence that could be improved. Part 3 (10 minutes): Students rewrite the circled sentence, applying one specific improvement (e.g., add a connotation, add a comparative connective, embed the quotation more fluently). Share before and after sentences with a partner.',
        differentiation: {
          support: 'In Part 1, allow students to use their PEAL grid as a sentence-by-sentence writing guide.',
          core: 'Students write independently, self-assess, and rewrite without additional support.',
          stretch: 'Students write a second paragraph in the remaining time, focusing on a formal or structural contrast rather than a thematic connection.',
        },
        resources: [
          'Timer displayed on projector',
          'Simplified mark scheme display',
          'PEAL grid from previous activity',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Before and After: Public Improvement',
      duration: '7 minutes',
      instructions:
        'Three volunteers share their "before" and "after" sentences under the visualiser. Class identifies what specific change was made (e.g., "They added the connotation of the word \'hollow\'") and discusses whether it genuinely improves the analysis. Teacher awards a "most improved sentence" to the writer who made the most significant analytical leap. Summary: what are the three most common improvements students need to make in timed writing?',
      differentiation: {
        support: 'Offer to share the teacher\'s own modelled improvement as one of the three examples if student volunteers are scarce.',
        core: 'Students participate in the class discussion and write down the three common improvements in their notes.',
        stretch: 'Students write a personalised target card: "In my next timed paragraph I will specifically improve..."',
      },
      resources: ['Visualiser for displaying student work'],
    },
    homework:
      'Complete one further timed practice: set a 15-minute timer and write one comparative paragraph in response to: "Compare the ways two poets present the idea of [chosen theme]." After the timer stops, self-assess using the mark scheme criteria and write a two-sentence target for your next practice.',
    worksheetQuestions: [
      {
        question:
          'Rewrite the following as a properly embedded quotation sentence: "The poet writes about fire. \'The city burned like a star.\' This is a simile about war."',
        lines: 3,
        modelAnswer:
          'The poet compares the burning city to a star — "the city burned like a star" — a simile that elevates destruction to something cosmically vast and indifferent, suggesting that the war has transcended human scale and become an almost natural catastrophe.',
        marks: 3,
      },
      {
        question:
          'List the six elements of a PEAL comparison grid. For each element, write one sentence explaining what information should go in it.',
        lines: 6,
        modelAnswer:
          'Point: the comparative theme or analytical focus of the paragraph. Evidence A: an embedded quotation from Poem A that illustrates the point. Analysis A: the connotations and effect of that quotation, linked to theme. Evidence B: an embedded quotation from Poem B that addresses the same point. Analysis B: the connotations and effect of that quotation, noting similarity or contrast with Evidence A. Comparative Link: a connecting sentence that draws the analysis of both poems together into a unified observation about the theme.',
        marks: 4,
      },
      {
        question:
          'Read this paragraph opening: "In Poem A, the poet uses a metaphor. In Poem B, the poet uses a simile. Both poets write about sadness." Identify three weaknesses and rewrite the opening as two improved sentences.',
        lines: 5,
        modelAnswer:
          'Weaknesses: (1) Techniques are named but not analysed — no connotations or effects. (2) The comparison is ping-pong rather than integrated. (3) "Sadness" is too vague — the thematic statement needs to be more precise. Improved version: "Both [Poem A] and [Poem B] explore the theme of [specific type of loss], though their tonal approaches diverge significantly. In [Poem A], the metaphor of [quotation] implies [connotation + effect], whereas [Poem B]\'s simile [quotation] frames the same experience as [contrasting effect], suggesting a more [quality] relationship with grief."',
        marks: 4,
      },
      {
        question:
          'What are the Band 4 mark scheme criteria for a comparative poetry response? Write a brief explanation of what each criterion means in practice.',
        lines: 5,
        modelAnswer:
          'Sustained comparative analysis: the comparison runs throughout the paragraph, not just in a linking sentence at the end. Integrated quotations: quotations are embedded into the student\'s own sentences rather than dropped in as block-quotes. Explores effect on reader: the student explains what the language makes the reader feel, think, or notice, not just what the poet is "saying." Links to theme: the analysis connects to the poem\'s wider meaning rather than remaining at word level.',
        marks: 4,
      },
      {
        question:
          'Write a full timed comparative paragraph in response to: "Compare the ways two poets present the idea of power." Use the PEAL framework and include at least two embedded quotations from different poems.',
        lines: 8,
        modelAnswer:
          'Both [Poem A] and [Poem B] explore the corrupting or destructive nature of power, yet their perspectives are strikingly different. In [Poem A], the verb [quotation] positions the speaker as [interpretation], suggesting that power is [thematic quality]. The connotations of [specific word] — [associations] — imply that [thematic statement about power]. Similarly, [Poem B] presents power through the image of [quotation], which conveys [effect]. However, whereas [Poem A] depicts power as [quality A], [Poem B] frames it as [quality B], implying that [comparative thematic insight]. Both poets use [shared technique] to suggest that power ultimately [evaluative conclusion], though [Poem B] conveys this more chillingly through [specific feature].',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The timed element is essential — students must practise writing under pressure or exam conditions will feel alien. Use the classroom clock or a projected timer rather than estimating time verbally.',
      'The self-assessment phase is as pedagogically important as the writing phase — students who can identify their own weaknesses are developing metacognitive skills that transfer across all exam writing.',
      'The "before and after" plenary is highly motivating: students can see tangible improvement in a short time, which builds confidence.',
      'Quotation embedding is one of the most common weaknesses in Year 10 exam responses — the starter drill alone may need to be repeated as a regular classroom routine.',
      'Stress to students that planning three minutes may feel "wasteful" in the exam but actually saves time — a clear plan prevents them from stopping mid-paragraph to rethink direction.',
    ],
    targetedSkills: [
      'AO1 — Timed personal response with embedded evidence',
      'AO2 — Analytical fluency under exam conditions',
      'Quotation embedding and syntactic integration',
      'Self-assessment using mark scheme criteria',
      'Exam technique: planning within strict time constraints',
    ],
  },

  // ── Lesson 8: The Unseen Poem Question Technique ──────────────────────────
  {
    id: 'y10litp-08',
    title: 'The Unseen Poem Question — Technique and Approach',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the specific demands and assessment criteria of the unseen poem question (4ET1)',
      'Apply a step-by-step reading strategy to an unseen poem encountered for the first time',
      'Identify how skills developed on anthology poems transfer to unseen poetry analysis',
      'Write a structured, well-evidenced analytical response to an unseen poem under timed conditions',
    ],
    successCriteria: [
      'I can describe the five-step approach to reading an unseen poem in the exam',
      'I can annotate an unseen poem within five minutes and identify subject, tone, key technique, and structure',
      'I can write an analytical paragraph about an unseen poem that names a technique, analyses its effect, and links to theme',
      'I can complete a full unseen poem response in approximately 20 minutes',
    ],
    keywords: [
      'unseen',
      'first reading',
      'annotation',
      'subject',
      'tone',
      'voice',
      'approach',
      'inference',
      'effect',
      'sustained',
      'response',
    ],
    starterActivity: {
      title: '"You\'ve Never Seen This Before" — First Reactions',
      duration: '8 minutes',
      instructions:
        'Distribute an unseen poem face-down. On "go," students turn it over and read it once in silence. After 90 seconds, before any discussion, they write three words describing their immediate reaction (not summary — emotional or impressionistic words: e.g., "unsettling," "tender," "fragmentary"). Class shares words — teacher records on board and asks: "Where do these reactions come from? What in the poem creates them?" Establish the lesson\'s central point: your first reactions are data — they tell you about the poem\'s tone and effect before you have analysed a single technique.',
      differentiation: {
        support: 'Provide a prompt: "Your three words should describe how the poem makes you feel OR the atmosphere it creates."',
        core: 'Students generate three independent reaction words and justify one of them with a brief reference to the poem.',
        stretch: 'Students predict the theme of the poem from their first reactions alone, then articulate what specific features of the poem produced that prediction.',
      },
      resources: [
        'Unseen poem printed face-down (one per student)',
      ],
    },
    mainActivities: [
      {
        title: 'The Five-Step Unseen Approach',
        duration: '22 minutes',
        instructions:
          'Teacher introduces and models the Five-Step approach on a second unseen poem using the visualiser: Step 1 — Read for overall meaning (what is happening?); Step 2 — Identify speaker, situation, and tone; Step 3 — Annotate for language techniques (imagery, sound, diction); Step 4 — Note form and structure (stanza pattern, line length, any formal choices); Step 5 — Identify the central theme and any shift in the poem. Teacher models Steps 1–3 live, thinking aloud throughout. Students then independently complete Steps 4 and 5 on the same poem. Class discussion: what did you notice in Steps 4 and 5 that you missed in Step 1? Key point: each step adds a new analytical layer; examiners assess all of these layers in a strong response.',
        differentiation: {
          support: 'Provide a Five-Step annotation guide with sentence starters for each step.',
          core: 'Students complete Steps 4 and 5 independently and write a one-sentence summary of the central theme and any shift.',
          stretch: 'Students predict what an exam question about this poem might focus on, and plan a one-paragraph response to their predicted question.',
        },
        resources: [
          'Second unseen poem (printed)',
          'Five-Step annotation guide (displayed and printed)',
          'Visualiser for teacher modelling',
        ],
      },
      {
        title: 'Timed Unseen Response',
        duration: '20 minutes',
        instructions:
          'Return to the first unseen poem from the starter activity. Set a 20-minute timer. Students write a full analytical response to: "What do you think the poet is saying about [theme identified from poem] and how do they say it? Support your answer with close reference to the poem." Encourage three paragraphs: Para 1 — opening reading and subject; Para 2 — language analysis (technique, connotation, effect); Para 3 — form/structure analysis and overall thematic statement. Teacher circulates; do not intervene unless a student has stopped writing entirely.',
        differentiation: {
          support: 'Provide a three-paragraph frame with the opening sentence of each paragraph already drafted, so students can focus on analytical content.',
          core: 'Students write a full independent three-paragraph response in 20 minutes.',
          stretch: 'Students aim for four paragraphs, including an evaluative concluding paragraph that reflects on the ambiguities in the poem and their effect.',
        },
        resources: [
          'First unseen poem (from starter)',
          'Timer on projector',
          'Three-paragraph frame (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Transfer: What Did You Borrow from the Anthology?',
      duration: '5 minutes',
      instructions:
        'Quick-fire class discussion: which skills from your anthology study did you use in the unseen response today? Students call out skills; teacher records on the board (e.g., Four-Lens annotation, connotation analysis, semantic field identification, form analysis). Key message: the unseen poem question is not a separate skill — it is the same analytical toolkit applied to an unfamiliar text. Your anthology revision is also your unseen preparation.',
      differentiation: {
        support: 'Prompt students with: "Did you use any of the techniques from the Four-Lens framework today?"',
        core: 'Students identify three specific skills transferred from anthology to unseen.',
        stretch: 'Students articulate which anthology skill was hardest to apply to an unseen poem and why, and suggest a practice strategy for strengthening it.',
      },
      resources: [],
    },
    homework:
      'Find one short poem you have not previously read (from a poetry anthology, book, or online resource). Apply the Five-Step approach to it independently. Write two analytical paragraphs: one on language, one on form or structure. Bring the poem and your paragraphs to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'List the five steps of the unseen poem approach. For each step, write one sentence explaining what you are looking for.',
        lines: 7,
        modelAnswer:
          'Step 1 — Overall meaning: read the poem for what is literally happening — the situation, the speaker, and the subject. Step 2 — Speaker, situation, tone: identify who is speaking, what their relationship to the subject is, and what emotional register the poem operates in. Step 3 — Language techniques: annotate for imagery, figurative language, sound devices, and word choice, noting the effect of each. Step 4 — Form and structure: note the stanza pattern, line length, rhyme scheme, and any significant structural features (volta, caesura, enjambment). Step 5 — Central theme and shift: identify the poem\'s larger meaning and any change in tone, argument, or subject that occurs during the poem.',
        marks: 5,
      },
      {
        question:
          'Explain why your first reactions to an unseen poem are analytically useful rather than something to be ignored.',
        lines: 4,
        modelAnswer:
          'First reactions are data about the poem\'s tone and effect because they are generated by the poem\'s language, form, and imagery before any analytical processing. If a poem feels unsettling, that feeling is being produced by specific choices the poet has made. Identifying what creates the reaction transforms it from a subjective impression into an analytical starting point: "I find this poem unsettling because the semantic field of [concept] and the fragmented structure suggest..." First reactions are the raw material of a personal response, which examiners actively reward.',
        marks: 3,
      },
      {
        question:
          'In what ways is the unseen poem question similar to the anthology question? In what ways is it different?',
        lines: 5,
        modelAnswer:
          'Similarities: both require close language analysis (AO2), a structured analytical response, embedded quotations, and a connection between language choices and theme. Both reward genuine personal engagement and the use of precise metalanguage. Differences: in the anthology question, the student has detailed prior knowledge of the text and can draw on weeks of annotation and contextual study; in the unseen question, all reading and analysis must happen in the exam. The unseen question therefore tests analytical agility — the ability to apply the same toolkit rapidly to an unfamiliar text.',
        marks: 4,
      },
      {
        question:
          'Write a first analytical paragraph in response to an unseen poem. Your paragraph should address the poem\'s subject, tone, and one key language technique.',
        lines: 6,
        modelAnswer:
          'The poem [title/opening line] explores the subject of [theme/situation], presenting the speaker as [characterisation of voice]. The dominant tone is [tone adjective], established from the outset through [specific technique + quotation]. The verb/noun/adjective [specific word] carries connotations of [associations], suggesting that the speaker regards [subject] as [interpretation]. This creates an immediate sense of [emotional effect on the reader], positioning us from the first stanza to view [subject] through a lens of [quality — anxiety/tenderness/irony].',
        marks: 4,
      },
      {
        question:
          'Explain how studying the poetry anthology helps you with the unseen poem question — referring to at least two specific analytical skills.',
        lines: 4,
        modelAnswer:
          'Studying the anthology builds the analytical habit of operating at the connotative level rather than the denotative level — a skill directly transferable to unseen poems. For example, the Four-Lens annotation framework (language, form, tone, theme) applies equally to an unseen poem encountered for the first time. Additionally, learning to identify semantic fields across the anthology makes it possible to trace word patterns rapidly in any poem, building a thematic reading within minutes of first encounter.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose an unseen poem of approximately 20–24 lines that contains clear technique, a discernible tone shift, and multiple accessible annotations — avoid deliberately obscure or culturally inaccessible texts for this introductory lesson.',
      'The "face-down" starter creates genuine unseen exam conditions and shows students that their instincts are reliable starting points rather than liabilities.',
      'During the timed response, enforce silence rigorously — students need to practise working independently without peer support.',
      'The transfer discussion in the plenary is important because many students believe the unseen poem requires completely different skills; establishing continuity with anthology skills builds confidence.',
      'If students are anxious about the unseen section, reassure them that the analytical vocabulary and methods from anthology study provide a comprehensive toolkit for any poem.',
    ],
    targetedSkills: [
      'AO1 — Personal response to unseen text with textual evidence',
      'AO2 — Rapid analytical reading and annotation of an unseen poem',
      'Five-step structured approach to unfamiliar texts',
      'Timed writing under exam conditions',
      'Transfer of analytical skills from known to unknown texts',
    ],
  },

  // ── Lesson 9: Exam Question Deconstruction and Planning ───────────────────
  {
    id: 'y10litp-09',
    title: 'Exam Question Deconstruction and Essay Planning',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Deconstruct an Edexcel IGCSE poetry exam question to identify the analytical task and key focus',
      'Produce a well-structured essay plan that integrates thematic, language, and form analysis',
      'Understand the assessment objectives (AO1 and AO2) and how they map onto mark bands',
      'Apply exam technique strategies: selecting relevant evidence, sequencing arguments, managing time',
    ],
    successCriteria: [
      'I can identify the key words in an exam question and explain what each one requires me to do',
      'I can produce a structured essay plan (introduction + three paragraphs + conclusion) in eight minutes',
      'I can explain the difference between AO1 and AO2 and identify which paragraphs serve each objective',
      'I can choose quotations strategically — selecting those that reward the most analytical commentary',
    ],
    keywords: [
      'deconstruction',
      'assessment objective',
      'AO1',
      'AO2',
      'essay plan',
      'command word',
      'evidence',
      'argument',
      'introduction',
      'conclusion',
      'mark band',
    ],
    starterActivity: {
      title: 'Command Word Clinic',
      duration: '8 minutes',
      instructions:
        'Display five different exam question openings on the board (e.g., "Compare the ways...", "Explore how the poet presents...", "How does the poet use language to...", "What is the effect of...", "Analyse the ways..."). Students match each command word or phrase to its analytical expectation: (A) analyse language techniques and their effects; (B) compare both poems simultaneously; (C) focus on method and its impact; (D) offer a personal interpretive response. Quick class discussion — some command words require both AO1 and AO2. Teacher clarifies that all IGCSE poetry questions ultimately require both: personal response (AO1) and analysis of methods (AO2).',
      differentiation: {
        support: 'Provide the four analytical expectations already written out; students match command words to expectations only.',
        core: 'Students match and then write one sentence explaining what the question is asking them to do in their own words.',
        stretch: 'Students rank the five questions by difficulty and justify their ranking, identifying which require the most sophisticated analytical skill.',
      },
      resources: [
        'Five exam question openings on projector',
        'Command word matching card (support)',
      ],
    },
    mainActivities: [
      {
        title: 'Question Deconstruction: Unpacking Every Word',
        duration: '20 minutes',
        instructions:
          'Teacher displays a full exam question: "Compare the ways the poets present the theme of conflict in [Poem A] and [Poem B]. In your answer you should consider: the poets\' use of language; the poets\' use of form and structure; the poets\' use of imagery." Teacher models deconstruction: (1) circle the command word (compare); (2) underline the thematic focus (conflict); (3) box the named poems; (4) note the three analytical lenses specified in the bullet points. Explain: the bullet points are a gift — they tell you exactly what your three main paragraphs should cover. Students then deconstruct two further questions independently, identifying command word, focus, poems, and analytical lenses. Pairs compare deconstructions.',
        differentiation: {
          support: 'Provide the four-step deconstruction framework as a printed guide with the first question already deconstructed.',
          core: 'Students deconstruct both questions independently using the four steps.',
          stretch: 'Students write a question of their own in the style of an IGCSE question, then deconstruct it to verify it is answerable using the four-step framework.',
        },
        resources: [
          'Full exam question displayed on projector',
          'Two further exam questions for practice',
          'Deconstruction framework guide (support)',
        ],
      },
      {
        title: 'Eight-Minute Essay Plan',
        duration: '22 minutes',
        instructions:
          'Teacher models an eight-minute essay plan for the main question: sketch an introduction sentence (contextualise the theme and name both poems); three body paragraphs (Para 1 — thematic comparison; Para 2 — language technique comparison; Para 3 — form and structure comparison), each with: one key point, one quotation from each poem, one comparative connective; a conclusion sentence (evaluative point — which poem engages with the theme more powerfully?). Students then plan their own response to the same question in eight minutes using the same structure. Teacher calls two minutes, five minutes, eight minutes aloud. Students compare plans with a partner: does every paragraph have a point, evidence, and a comparison? Students then annotate their plans with any evidence they had forgotten.',
        differentiation: {
          support: 'Provide an essay plan template with all five sections labelled and one bullet point per section already filled in.',
          core: 'Students complete the full plan in eight minutes independently.',
          stretch: 'Students add a fourth body paragraph (a cross-cluster comparison that brings in a third poem to support their argument) and a personal evaluative statement.',
        },
        resources: [
          'Essay plan template (support)',
          'Timer on projector',
          'Annotated copies of both poems',
        ],
      },
    ],
    plenaryActivity: {
      title: 'What Makes a Mark Band 4 Plan?',
      duration: '5 minutes',
      instructions:
        'Display two essay plans side by side: Plan A is underdeveloped (vague points, no specific quotations, no comparative connectives); Plan B is detailed (specific points, embedded quotations, clear comparisons, an evaluative concluding point). Students identify five specific features that distinguish Plan B from Plan A. Teacher confirms the list and adds: "The quality of your plan determines the quality of your essay. A five-minute plan in the exam is not wasted time — it is the most important five minutes of your response."',
      differentiation: {
        support: 'Provide a checklist of features to find in Plan B rather than generating them independently.',
        core: 'Students independently identify five distinguishing features.',
        stretch: 'Students annotate Plan A to show how they would improve it into a Band 4 plan.',
      },
      resources: ['Two essay plans on projector', 'Feature checklist (support)'],
    },
    homework:
      'Deconstruct this exam question and produce an essay plan in eight minutes: "Compare the ways the poets present the idea of memory in two poems from the anthology. Refer to language, imagery, and form in your answer." After producing the plan, write a 50-word justification of your paragraph order — explaining why you have sequenced your arguments in that way.',
    worksheetQuestions: [
      {
        question:
          'Deconstruct this question using the four-step framework: "Compare the ways the poets present power in [Poem A] and [Poem B]. Consider their use of language, form, and imagery."',
        lines: 5,
        modelAnswer:
          'Command word: "compare" — requires simultaneous analysis of both poems. Thematic focus: "power" — all analysis must connect to this concept. Named poems: [Poem A] and [Poem B]. Analytical lenses: language (word choice, figurative devices), form (type of poem, rhyme scheme, line length), and imagery (visual, sensory, figurative). The three bullet points indicate the structure of the required response: one paragraph per lens, each comparing both poems around the shared thematic focus of power.',
        marks: 4,
      },
      {
        question:
          'What is the difference between AO1 and AO2 in the IGCSE literature poetry question? Give an example of a sentence that demonstrates each.',
        lines: 5,
        modelAnswer:
          'AO1 (Reading with understanding and personal response) requires the student to interpret the text\'s meaning and express a personal view, supported by textual evidence. Example: "I find the speaker\'s ambivalent relationship to power deeply unsettling, as the poem seems simultaneously to celebrate and condemn control." AO2 (Analysing language, form, structure, and effects) requires the student to examine how specific choices create meaning and effect. Example: "The verb \'devoured\' carries connotations of predatory consumption, suggesting that power is not merely wielded but appetite — a hunger that cannot be satisfied."',
        marks: 4,
      },
      {
        question:
          'Why is it important to select quotations strategically when planning an exam response? What makes a quotation "analytically rich"?',
        lines: 4,
        modelAnswer:
          'Strategic quotation selection matters because not all quotations are equally productive. An analytically rich quotation is one that rewards detailed commentary — it contains ambiguity, figurative language, significant connotations, or multiple simultaneous meanings that can support several analytical points. A weak quotation is one that merely confirms the paraphrase. When planning, students should ask: "Can I say at least three different things about this quotation?" If yes, it is analytically rich.',
        marks: 3,
      },
      {
        question:
          'A student says: "I never plan in the exam because it wastes time." Argue against this view using what you have learned in this lesson.',
        lines: 4,
        modelAnswer:
          'Planning in the exam is essential, not wasteful. An eight-minute plan ensures the student\'s essay has a clear argument, selects the most analytically rich quotations before writing, and avoids the common error of stopping mid-paragraph to rethink direction. A student who plans knows where every paragraph is heading before they write the first word, which makes writing faster, more fluent, and more coherent. Without a plan, students risk writing themselves into a corner or drifting away from the question focus.',
        marks: 3,
      },
      {
        question:
          'Write an eight-minute essay plan for this question: "Compare the ways the poets present the theme of loss in two poems from the anthology." Your plan should include: an introduction sentence, three paragraph headings with a key point and one quotation from each poem, and a concluding evaluative sentence.',
        lines: 10,
        modelAnswer:
          'Introduction: Both [Poem A] and [Poem B] explore loss — the former through [framing], the latter through [contrasting framing]. Para 1 (Thematic comparison — what kind of loss?): Point: both present loss as permanent and irreversible. Evidence A: [quotation]. Evidence B: [quotation]. Para 2 (Language comparison): Point: imagery of decay/darkness/silence. Evidence A: [quotation + technique]. Evidence B: [quotation + technique]. Para 3 (Form and structure comparison): Point: structural fragmentation mirrors emotional disintegration. Evidence A: [form feature]. Evidence B: [contrasting form feature]. Conclusion: While both poems evoke profound loss, [Poem B] achieves a more unsettling effect because [evaluative reason], suggesting that loss in this poem is not merely personal but universal.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'Deconstruction should become a reflex — consider practising it as a warm-up in every subsequent lesson by displaying an exam question on arrival and asking students to deconstruct in the first three minutes.',
      'The eight-minute plan is a crucial exam skill; students who are surprised by the time constraint in practice will manage it better in the real exam.',
      'AO1 and AO2 are both assessed in every question — students sometimes think AO2 (language analysis) is the "real" exam skill and neglect personal response. Emphasise that the two objectives are equally weighted.',
      'The two-plan plenary comparison is a powerful visual teaching tool; consider laminating Plans A and B for reuse across multiple classes.',
      'Connect this lesson directly to Lesson 10 by explaining that the next lesson will be a full essay practice using everything from this planning lesson.',
    ],
    targetedSkills: [
      'AO1 — Reading with understanding; personal evaluative response',
      'AO2 — Analytical focus on language, form, and structure',
      'Exam technique: question deconstruction',
      'Exam technique: structured essay planning under time pressure',
      'Strategic evidence selection for maximum analytical yield',
    ],
  },

  // ── Lesson 10: Full Timed Poetry Comparison Essay ─────────────────────────
  {
    id: 'y10litp-10',
    title: 'Full Timed Poetry Comparison Essay',
    text: 'IGCSE Poetry Anthology',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Produce a full timed poetry comparison essay under near-exam conditions',
      'Demonstrate sustained integration of AO1 and AO2 across an extended response',
      'Apply all skills developed across the unit: annotation, comparison, language analysis, form and structure, unseen technique, and exam planning',
      'Engage in structured self-assessment and target-setting following the completed essay',
    ],
    successCriteria: [
      'I can complete a full comparative poetry essay (introduction + at least three body paragraphs + conclusion) in 45 minutes',
      'I can sustain a clear comparative argument throughout, referring to both poems in every paragraph',
      'I can integrate quotations, analyse language and form, and express a personal evaluative response across the full essay',
      'I can self-assess my essay using the mark scheme and identify specific targets for improvement',
    ],
    keywords: [
      'sustained',
      'extended response',
      'integrated',
      'argument',
      'evaluative',
      'AO1',
      'AO2',
      'mark band',
      'self-assessment',
      'target',
      'essay structure',
    ],
    starterActivity: {
      title: 'Quick-Fire Skills Recall',
      duration: '8 minutes',
      instructions:
        'No new content — this starter is a rapid consolidation of all prior learning. Teacher displays nine prompts on the board (one per lesson 1–9): thematic cluster, Four-Lens annotation, form and structure analysis, language technique analysis, same-cluster comparison, cross-cluster comparison, timed paragraph writing, unseen technique, question deconstruction. Students write one sentence about each in five minutes. Quick-fire class responses — teacher uses responses to correct any misconceptions before the essay. Final two minutes: teacher displays the essay question on the board and allows students to re-read their annotated poems in silence.',
      differentiation: {
        support: 'Provide a recall grid with the nine skill names and three prompts per skill (definitions, a technique, an example).',
        core: 'Students write one sentence per skill from memory.',
        stretch: 'Students identify which three skills they will use most in today\'s essay and explain why in one sentence each.',
      },
      resources: [
        'Nine-prompt recall display on projector',
        'Recall grid (support)',
        'Annotated poem copies for pre-essay reading',
      ],
    },
    mainActivities: [
      {
        title: 'Essay Planning (8 minutes)',
        duration: '8 minutes',
        instructions:
          'Students have eight minutes to plan their essay using the framework from Lesson 9. Essay question displayed on board (prepared in advance by teacher — a comparative question naming two poems from the anthology with bullet points for language, form, and imagery). Students complete their plan silently: introduction sentence; three paragraph headings with point, Evidence A, Evidence B; comparative connective for each paragraph; conclusion evaluative sentence. Teacher circulates and answers clarifying questions only — no content guidance during the plan.',
        differentiation: {
          support: 'Students use the essay plan template from Lesson 9 as a scaffold.',
          core: 'Students plan independently on a blank page.',
          stretch: 'Students plan four body paragraphs and include a cross-cluster reference in the fourth.',
        },
        resources: [
          'Essay question on projector (prepared in advance)',
          'Essay plan template (support)',
          'Annotated poem copies',
        ],
      },
      {
        title: 'Timed Essay Writing (37 minutes)',
        duration: '37 minutes',
        instructions:
          'Full exam conditions: silence, no discussion, timed. Students write their comparative essay. Teacher projects a countdown timer. At 15 minutes, teacher announces quietly: "If you are still on your first paragraph, move to your second." At 30 minutes: "Begin your conclusion if you have not already." At 37 minutes: "Pens down." Do not intervene in the writing. After pens down, students spend two minutes circling any quotation that is not embedded (block-quoted) and any paragraph that does not contain a comparative connective — these are the two most common Band 3 weaknesses.',
        differentiation: {
          support: 'Students may keep their essay plan template and annotated poems visible. They may write three paragraphs rather than four.',
          core: 'Students write introduction + three body paragraphs + conclusion without support materials visible.',
          stretch: 'Students aim for four body paragraphs + a conclusion that includes an evaluative judgement about which poem is more effective and why.',
        },
        resources: [
          'Countdown timer on projector',
          'Annotated poem copies (support only)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '7 minutes',
      instructions:
        'Teacher displays the simplified four-band mark scheme. Students self-assess by annotating their essays: (1) Place a star next to the paragraph they are most proud of and write in the margin why. (2) Place a question mark next to the weakest paragraph and identify in one phrase what it is missing. (3) Write at the bottom of their essay: "My next target is: [specific improvement]." Three volunteers share their best paragraph under the visualiser; class identifies one strength and one improvement for each. Teacher concludes the unit: "Everything in this lesson is everything you need for the exam. Revisit your annotated poems, practise your plans, and write timed paragraphs regularly."',
      differentiation: {
        support: 'Provide a mark scheme annotation guide: "This paragraph is in Band [X] because [evidence]."',
        core: 'Students self-assess independently against the full mark scheme.',
        stretch: 'Students write a 50-word improvement note identifying one structural change (e.g., sequencing of paragraphs) and one analytical change (e.g., deeper connotation work) they would make on redrafting.',
      },
      resources: [
        'Simplified four-band mark scheme on projector',
        'Visualiser for student work display',
        'Mark scheme annotation guide (support)',
      ],
    },
    homework:
      'Redraft your weakest paragraph from today\'s essay. Apply at least two specific improvements identified during self-assessment: e.g., embed a previously block-quoted quotation; add a connotation analysis where you simply named a technique; add a comparative connective where you wrote in ping-pong style. Submit the original paragraph alongside the redraft so your teacher can assess the progress.',
    worksheetQuestions: [
      {
        question:
          'What are the hallmarks of a Band 4 poetry comparison essay? List four features and explain each briefly.',
        lines: 6,
        modelAnswer:
          'Sustained comparative analysis: the comparison between poems is maintained throughout every paragraph, not just introduced in an opening or closing sentence. Integrated quotations: evidence from both poems is embedded into the student\'s own sentences rather than block-quoted. Exploration of effect on reader: the student consistently analyses how language choices create meaning and emotional impact, not just what techniques are present. Personal evaluative response: the student expresses a developed interpretive argument about the poems\' meanings or relative effectiveness, signalling a genuine analytical voice.',
        marks: 4,
      },
      {
        question:
          'Why is it important to include a conclusion in a poetry comparison essay rather than simply stopping at the end of your final paragraph?',
        lines: 4,
        modelAnswer:
          'A conclusion provides evaluative synthesis — it draws the essay\'s argument together into a final judgement about what the comparison reveals. Without a conclusion, an essay risks reading as a list of points rather than a sustained argument. A strong conclusion typically makes an evaluative claim: which poem handles the theme more effectively and why, or what the comparison between the two poems illuminates about the theme as a whole. This demonstrates AO1 — a developed personal response — at the highest level.',
        marks: 3,
      },
      {
        question:
          'A student writes: "In conclusion, I have analysed language, form, and structure in both poems." Explain why this is a weak conclusion and rewrite it as a strong one.',
        lines: 5,
        modelAnswer:
          'This is a weak conclusion because it simply summarises what has already been done rather than making an evaluative point. It adds no new insight. Strong rewrite: "Ultimately, while both [Poem A] and [Poem B] explore [theme] through [shared technique], [Poem B] offers the more unsettling and enduring portrait because its [specific formal/linguistic feature] refuses the comfort of resolution, leaving the reader with a sense of [effect]. [Poem A]\'s more contained form, by contrast, suggests that [thematic interpretation], which, though powerful, is ultimately more reassuring than disturbing."',
        marks: 4,
      },
      {
        question:
          'Identify the two most common Band 3 weaknesses in a comparative poetry essay. For each, write a specific strategy to avoid it.',
        lines: 5,
        modelAnswer:
          'Weakness 1 — Block-quoting: students drop in long quotations as separate sentences rather than embedding them grammatically. Strategy: practise the embedding drill from Lesson 7 regularly; before writing a quotation, start the sentence with your own analytical verb (e.g., "The poet\'s use of [verb + quotation] implies..."). Weakness 2 — Ping-pong structure: students write about each poem separately, alternating between them rather than comparing them simultaneously. Strategy: use the zoomed-in method — choose one thematic focus per paragraph and analyse both poems within that focus, connected by a comparative connective.',
        marks: 4,
      },
      {
        question:
          'Write an introduction and a conclusion for a comparative essay on this question: "Compare the ways the poets present the idea of identity in two poems from the anthology." Your introduction should contextualise the theme; your conclusion should offer an evaluative judgement.',
        lines: 8,
        modelAnswer:
          'Introduction: Identity — the sense of who we are and how we are perceived by others — is a preoccupation of several poems in the anthology, yet [Poem A] and [Poem B] approach this theme from strikingly different angles. [Poem A] presents identity as [characterisation], while [Poem B] explores it as [contrasting characterisation], and the tension between these two visions forms the basis of a rich comparative reading. Conclusion: Ultimately, both poems reveal that identity is not a stable possession but a contested and contingent condition — shaped by others, by language, and by circumstance. However, [Poem B] presents this instability with greater urgency, its [specific feature] refusing any settled self-image and leaving the speaker — and the reader — in a state of productive uncertainty. It is this refusal of resolution that makes [Poem B] the more searching and, I would argue, the more honest exploration of what it means to exist in relation to others.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'Prepare the essay question well in advance and ensure both named poems have been thoroughly studied in earlier lessons — students should not encounter an unfamiliar poem in a timed essay condition.',
      'The timing interventions ("move to your second paragraph") are essential for students who over-invest in one section — practise this prompting in earlier timed activities so it becomes familiar.',
      'Collect essays at the end of the lesson; use the self-assessment annotations as a guide when marking — students who have accurately diagnosed their own weaknesses are developmentally ahead.',
      'The redraft homework is one of the most powerful learning activities in the unit — students who compare their original and redrafted paragraphs side by side make the fastest analytical progress.',
      'This lesson consolidates the entire unit; consider displaying the unit\'s key skills on the board throughout the lesson as a visual reminder of how much students have developed across the ten lessons.',
    ],
    targetedSkills: [
      'AO1 — Sustained personal evaluative response across an extended essay',
      'AO2 — Integrated analysis of language, form, and structure throughout',
      'Full essay structure: introduction, body paragraphs, evaluative conclusion',
      'Exam technique: time management across a 45-minute response',
      'Self-assessment and responsive redrafting against mark scheme criteria',
    ],
  },
];
