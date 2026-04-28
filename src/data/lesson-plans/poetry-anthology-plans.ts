// @ts-nocheck
// ─── Poetry Anthology Lesson Plans ────────────────────────────────────────────
// 20 complete GCSE Poetry Anthology lesson plans
// AQA Power & Conflict (10), Edexcel Relationships (10)
// Each lesson covers full format with starter, main (differentiated), plenary,
// homework, resources, and SEND adaptations
//
// FACT-CHECK NOTE (2026-04-28): Several Edexcel-tagged Relationships lessons
// reference poems that are NOT in the canonical Edexcel UK GCSE 1ET0 Pearson
// Anthology Relationships cluster:
//   - Lesson 4: "Porphyria's Lover" is an AQA L&R cluster poem; "First Love"
//     by Clare is an Eduqas anthology poem — neither is in Edexcel 1ET0.
//   - Lesson 5: "Modern Love (Sonnet 16)" by Meredith is not in Edexcel 1ET0
//     (though "She Walks in Beauty" by Byron IS in Edexcel 1ET0).
//   - Lessons 6–10 reference poems that are NOT in the standard Edexcel
//     anthology (e.g. "Hasty Resolution" is not a recognised Donne poem;
//     "Ballad of the White Horse" is not in the Edexcel Relationships
//     cluster; "The Good-Morrow" / "The Clod and the Pebble" are not in
//     1ET0).
// Teachers should cross-check the poems list against their actual
// specification before using lessons 4–10. Only AQA P&C lessons 1–5 and
// Edexcel Relationships lessons 1–3 (Sonnet 43/Byron, Shelley/Hardy,
// Dooley/Mew) have been fact-checked against canonical poem texts.

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

export interface PoetryLesson {
  id: string
  title: string
  poems: string[]
  anthology: string
  examBoard: string
  yearGroup: string
  duration: string
  learningObjectives: string[]
  starterActivity: LessonActivity
  mainActivity: LessonActivity & {
    differentiation: { support: string; core: string; stretch: string }
  }
  plenary: LessonActivity
  homework: string
  resourcesNeeded: string[]
  assessmentOpportunities: string[]
  keyVocabulary: string[]
  sendAdaptations: string
  comparisonTechniques?: string[]
  examPractice?: string
}

// ════════════════════════════════════════════════════════════════════════════
// AQA POWER & CONFLICT — 10 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const aqaPowerConflictLesson1: PoetryLesson = {
  id: 'aqa-pc-01',
  title: 'Ozymandias vs London: Power, Time & Urban Decay',
  poems: ['Ozymandias by Percy Bysshe Shelley', 'London by William Blake'],
  anthology: 'Power & Conflict',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how both poets present ideas about power and its decline',
    "Compare Shelley's presentation of imperial power with Blake's critique of urban society",
    'Examine contrasting narrative perspectives: second-hand account vs personal observation',
    'Develop comparison writing skills using structural and semantic techniques',
    'Practice timed exam comparison question (24 marks)',
  ],
  starterActivity: {
    title: 'Power in Ruins: Image Analysis',
    duration: '10 minutes',
    instructions:
      'Display images of: ancient ruins (collapsed statue) and 19th-century London streets. Students discuss: "What does each image suggest about power? Who has it now?" Link to both poems\' themes. Record key words: decay, loss, permanence, suffering.',
    resources: ['Image slides', 'Whiteboard'],
  },
  mainActivity: {
    title: 'Parallel Poem Analysis & Comparison Framework',
    duration: '65 minutes',
    instructions:
      'PART 1 (30 mins): Read Ozymandias aloud (twice). Students annotate: (1) Perspective—who is narrator? Why second-hand? (2) Power imagery: "vast", "colossal Wreck", "frown". (3) Temporal shift: "Look on my Works, ye Mighty" vs ruins. Discuss irony and Shelley\'s message about power\'s impermanence. PART 2 (25 mins): Read London twice. Students annotate: (1) First-person perspective and movement through city. (2) Language of control and constraint: "charter\'d streets", "mark", "bind". (3) Suffering imagery: "cry", "black", "blood". PART 3 (10 mins): Introduce Comparison Framework: Both poets critique power but through different contexts (imperial decay vs social control). Complete table: Shelley—perspective/power/time/message vs Blake—perspective/power/time/message. Discuss which is more effective.',
    differentiation: {
      support:
        'Pre-annotated extracts with 3 devices highlighted per poem. Comparison table partially completed with hints.',
      core: 'Independent annotation of both poems and completion of full comparison table with textual references.',
      stretch:
        'Write PEE paragraph comparing how perspective shapes each poet\'s critique: "Both poets use contrasting perspectives to question whether power endures: Shelley\'s second-hand account emphasises..."',
    },
    resources: [
      'Both poems printed',
      'Annotation guide (5 key devices)',
      'Comparison table worksheet',
      'Modern translation aids',
    ],
  },
  plenary: {
    title: 'Two-Minute Timed Comparison',
    duration: '5 minutes',
    instructions:
      'Provide exam-style question: "Compare how Shelley and Blake present the destructive nature of power. Use at least two quotations from each poem." Students write bullet points of argument structure (3 comparisons minimum) in 2 minutes. Discuss strongest points.',
    differentiation: {
      support:
        'Sentence starter: "Both poems show power destroys because..." and provided quotations to use.',
      core: 'Independent bullet-point planning with own quotations.',
      stretch:
        'Include semantic field analysis or consideration of historical context in planning.',
    },
  },
  homework:
    'Write full 24-mark exam response (30 minutes) comparing how both poets present power. Model answer to follow next lesson.',
  resourcesNeeded: [
    'Ozymandias & London poems',
    'Image slides (ruins/19th-century London)',
    'Annotation guides',
    'Comparison table',
    'Exam question worksheet',
    'Timer',
  ],
  assessmentOpportunities: [
    'Annotation accuracy',
    'Comparison table completion',
    'Timed planning response',
    'Homework exam essay',
  ],
  keyVocabulary: [
    'irony',
    'perspective',
    'imperial power',
    'social control',
    'semantic field',
    'temporal shift',
    'narrative voice',
    'juxtaposition',
    'decay',
    'constraint',
  ],
  sendAdaptations:
    'Provide pre-annotated poems with key devices highlighted. Use simplified comparison table with visual icons (e.g., speaker icon for perspective). Reduce word count on worksheets. Offer shorter poem extracts. Provide audio recordings of poems.',
  comparisonTechniques: [
    'Perspective (first vs second-hand)',
    'Power imagery (imperial vs urban)',
    'Temporal structure (past vs present)',
    'Tone (detachment vs anger)',
  ],
  examPractice: 'Timed 24-mark comparison question. Model answer provided next lesson.',
}

const aqaPowerConflictLesson2: PoetryLesson = {
  id: 'aqa-pc-02',
  title: "Extract from The Prelude vs Exposure: War's Scale & Individual Loss",
  poems: [
    'Extract from The Prelude (Stealing the Boat) by William Wordsworth',
    'Exposure by Wilfred Owen',
  ],
  anthology: 'Power & Conflict',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how both poets present individual experience within large-scale conflict',
    "Compare Wordsworth's memory of childhood terror with Owen's representation of trench warfare",
    'Examine contrasting timescales: personal memory vs immediate wartime experience',
    'Develop analysis of form: regular verse vs fragmented lines',
    'Practice integrated quotation in comparison writing',
  ],
  starterActivity: {
    title: 'Memory vs Immediate Experience',
    duration: '8 minutes',
    instructions:
      'Students write: "A frightening childhood memory" (30 seconds) and "What you\'re afraid of right now" (30 seconds). Discuss: How does time change our perspective on fear? Does distance make fear less or more powerful? Link to Wordsworth (memory) and Owen (present horror).',
    resources: ['Mini-whiteboards', 'Timer'],
  },
  mainActivity: {
    title: 'Form, Scale & Individual Suffering Analysis',
    duration: '70 minutes',
    instructions:
      'PART 1 (25 mins): Read Wordsworth extract (the Boat Stealing episode from Book 1 of The Prelude). Students identify: (1) Blank verse form and continuous narrative — sense of memory unspooling; (2) The shift from confident transgression ("It was an act of stealth / And troubled pleasure") to terror as the "huge peak, black and huge" rises into view; (3) Personification of nature ("As if with voluntary power instinct") showing the child\'s psychological projection; (4) The aftermath ("a darkness... blank desertion... no familiar shapes") showing how the experience reshapes his understanding. Discuss: How does form suggest a memory being relived? PART 2 (25 mins): Read Exposure once silently, once aloud (emphasising the trailing dashes and refrain). Annotate: (1) The repeated refrain ("But nothing happens") creating anti-climax; (2) Personification of nature as enemy ("merciless iced east winds that knive us"); (3) Abstract threat — the enemy is the weather, not human soldiers; (4) Final stanza — death without heroism or meaning. Discuss: How does form mirror trench monotony and futility? PART 3 (20 mins): Comparison task. Complete table: Scale (personal/universal), Timescale (memory/present), Form (blank verse/half-rhymed octaves), Individual focus (child\'s terror/soldiers\' shared suffering). Write one paragraph: "Both poets use contrasting forms to show how individuals experience nature\'s power, but differ in..." Include one quotation from each.',
    differentiation: {
      support:
        'Pre-read extracts with form highlighted (stanzas marked, repetitions boxed). Partially completed analysis table with one device per poem modelled.',
      core: 'Independent annotation of both poems. Full table and paragraph with integrated quotations.',
      stretch:
        "Analyse how form relates to each poet's attitude to conflict. Write second paragraph examining whether Wordsworth's distance from trauma makes his account more or less effective than Owen's immediacy.",
    },
    resources: [
      'Both poems printed',
      'Form analysis guide',
      'Comparison table',
      'IPA (Integrated Quotation Practice Activity) frame',
    ],
  },
  plenary: {
    title: 'Quick-Fire Quotation Matching',
    duration: '5 minutes',
    instructions:
      'Read aloud 6 quotations (3 from each poem, randomised). Students hold up Wordsworth or Owen card. Discuss why each quote belongs to its poet (form, vocabulary, perspective). Assess recognition of poetic technique.',
    differentiation: {
      support: 'Show first word of quote as hint.',
      core: 'Full quotation, no hints.',
      stretch: 'Ask students to explain which technique or theme makes it recognisable.',
    },
  },
  homework:
    "Write 50-word comparison paragraph on how form reflects each poet's experience of conflict. Then write timed exam response (24 marks) for homework.",
  resourcesNeeded: [
    'Wordsworth & Owen poems',
    'Form analysis guide',
    'Comparison table',
    'IPA frame worksheet',
    'Quotation cards',
  ],
  assessmentOpportunities: [
    'Annotation precision on form',
    'Table completion',
    'Paragraph quality',
    'Quotation matching',
    'Homework exam essay',
  ],
  keyVocabulary: [
    'form',
    'stanza',
    'fragmentation',
    'repetition',
    'personification',
    'sensory detail',
    'immediacy',
    'retrospective',
    'scale',
    'psychological impact',
  ],
  sendAdaptations:
    'Provide shorter poem extracts with form visually highlighted (colours for line breaks, bold for repetition). Offer audio versions of poems. Use comparison table with icons. Simplify vocabulary in analysis tasks.',
  comparisonTechniques: [
    'Form (regular vs fragmented)',
    'Timescale (memory vs present)',
    'Scale (personal terror vs mass warfare)',
    'Language (concrete vs abstract)',
  ],
  examPractice: 'Timed comparison essay following 24-mark exam structure.',
}

const aqaPowerConflictLesson3: PoetryLesson = {
  id: 'aqa-pc-03',
  title: 'Bayonet Charge vs Remains: Moral Ambiguity & Soldier Experience',
  poems: ['Bayonet Charge by Ted Hughes', 'Remains by Simon Armitage'],
  anthology: 'Power & Conflict',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how Hughes and Armitage present conflicted soldiers',
    'Examine how both poems question military duty and morality',
    'Compare representation of violence and its psychological aftermath',
    'Develop analysis of language intensity and narrative perspective',
    "Evaluate which poem more effectively critiques war's moral impact",
  ],
  starterActivity: {
    title: 'Moral Dilemma Role-Play',
    duration: '7 minutes',
    instructions:
      'Scenario: "A soldier must follow orders that conflict with their conscience. What do they do?" Students discuss in pairs. Link to Bayonet Charge (soldier questions reason for fighting) and Remains (soldier\'s guilt after killing). Set expectation: both poems show moral complexity, not clear answers.',
    resources: ['Scenario cards'],
  },
  mainActivity: {
    title: 'Language Intensity & Psychological Impact Analysis',
    duration: '72 minutes',
    instructions:
      'PART 1 (30 mins): Read Bayonet Charge twice (emphasise pace). Students annotate: (1) In medias res opening — "Suddenly he awoke and was running" — disorientation from the first line; (2) Metaphor of the hunted hare "rolled like a flame" mirroring the soldier\'s terror and animality; (3) The frozen mid-stride moment — "his foot hung like / Statuary in mid-stride" — physical paralysis caused by moral doubt; (4) Patriotic ideals collapse — "King, honour, human dignity, etcetera / Dropped like luxuries"; (5) Final phrase "His terror\'s touchy dynamite" — pure animal fear is the only motive left. Discuss: Is the soldier heroic or simply terrified? Hughes refuses to judge. PART 2 (30 mins): Read Remains once. Note: contemporary, conversational tone with enjambment. Annotate (work from anthology copies — Armitage is in copyright, do not reproduce extended quotations): (1) Collective opening voice ("we") shifting to isolated "I" as guilt sets in; (2) The repeated qualifier "probably armed, possibly not" registering uncertainty about the killing; (3) The graphic image — "I see broad daylight on the other side" — the bullet passing through the body; (4) The intrusive memory — the dead man "bursts again through the doors of the bank" long after the event; (5) Final lines — "his bloody life in my bloody hands" — the double meaning of "bloody" (literal blood / expletive of anguish). Discuss: Unlike Hughes\'s moment of panic, Armitage shows long-term psychological damage. PART 3 (12 mins): Comparison task. Students complete Venn diagram: Both (soldier\'s moral conflict, vivid language), Hughes only (moment of panic, animal imagery, third-person narration), Armitage only (aftermath/haunting, first-person voice, contemporary setting). Write paragraph comparing how each poet presents moral ambiguity: "Both Hughes and Armitage refuse to present soldiers as simply heroic or cowardly, but differ in..."',
    differentiation: {
      support:
        'Pre-annotated extracts with 4 devices per poem highlighted. Venn diagram partially completed. Paragraph frame with sentence starters.',
      core: 'Independent annotation. Full Venn diagram and paragraph with two quotations from each.',
      stretch:
        "Analyse how form (Hughes—short, panicked lines; Armitage—long, flowing lines interrupted by short clauses) reflects each poet's message about moral trauma. Write second paragraph evaluating which poem more effectively critiques war's moral cost.",
    },
    resources: [
      'Both poems',
      'Annotation guide (5 key devices)',
      'Venn diagram',
      'Paragraph frame',
      'Form analysis sheet',
    ],
  },
  plenary: {
    title: 'Perspective Swap',
    duration: '6 minutes',
    instructions:
      "If Bayonet Charge soldier interviewed years later, what would Hughes say about their moral state? Use Armitage's \"Remains\" as inspiration. Students discuss: Would Bayonet Charge soldier develop trauma like the soldier in Remains? Why do you think Hughes's poem ends with escape, Armitage's with haunting?",
    differentiation: {
      support: 'Discuss as class, extract ideas from students.',
      core: 'Pair discussion with key points recorded.',
      stretch:
        'Individual response: "Write the Bayonet Charge soldier\'s mental state 10 years after, as Armitage might describe it."',
    },
  },
  homework:
    'Timed 24-mark comparison essay: "Compare how Hughes and Armitage present the moral impact of conflict on soldiers." (30 mins)',
  resourcesNeeded: [
    'Both poems printed',
    'Annotation guides',
    'Venn diagram worksheet',
    'Paragraph frame',
    'Form analysis sheet',
    'Timer',
  ],
  assessmentOpportunities: [
    'Annotation quality',
    'Venn diagram accuracy',
    'Paragraph with integrated quotation',
    'Plenary discussion',
    'Timed essay',
  ],
  keyVocabulary: [
    'moral ambiguity',
    'fragmentation',
    'enjambment',
    'metaphor (hunted animal)',
    'collective voice',
    'trauma',
    'guilt',
    'psychological impact',
    'intensity',
  ],
  sendAdaptations:
    'Provide colour-coded annotation guide (emotions/violence/language/form in different colours). Use visual Venn diagram with icons. Offer audio recordings. Simplify vocabulary. Reduce worksheet length.',
  comparisonTechniques: [
    'Perspective (individual vs collective)',
    'Timescale (moment vs aftermath)',
    'Language intensity (animal metaphor vs contemporary reference)',
    'Moral presentation (confusion vs guilt)',
  ],
  examPractice: 'Full timed 24-mark comparison essay with model answer for next lesson.',
}

const aqaPowerConflictLesson4: PoetryLesson = {
  id: 'aqa-pc-04',
  title: 'Poppies vs War Photographer: Loss, Representation & Emotional Distance',
  poems: ['Poppies by Jane Weir', 'War Photographer by Carol Ann Duffy'],
  anthology: 'Power & Conflict',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse how Weir presents a mother's loss and unspoken emotion",
    "Examine Duffy's critique of media representation and emotional detachment",
    "Compare how both poets address grief and how it's witnessed/recorded",
    'Develop understanding of structural symbolism (poppies vs photographs)',
    'Practice sophisticated comparison writing incorporating historical context',
  ],
  starterActivity: {
    title: 'Image vs Emotion: What Can We Really See?',
    duration: '8 minutes',
    instructions:
      "Show: photograph of war memorial with poppies, then blank space. Discuss: \"A photograph can show loss but can it show grief?\" What's the difference between witnessing suffering and feeling it? Link to Weir's mother (cannot speak loss) and Duffy's photographer (captures images but cannot convey impact).",
    resources: ['Image slides'],
  },
  mainActivity: {
    title: 'Symbolism, Structure & Emotional Representation',
    duration: '70 minutes',
    instructions:
      'PART 1 (25 mins): Read Poppies (emphasise silences, line breaks). Note: Jane Weir\'s "Poppies" (2009) is in copyright — work from anthology copies and avoid reproducing extended quotations on PowerPoint slides. Annotate: (1) Central symbol — poppies as memorial that the mother first pins to her son\'s blazer in the opening stanza; (2) Domestic imagery (sewing language: "tucks, darts, pleats") suggesting the mother\'s attempts to control overwhelming emotion; (3) Setting reference: "Three days before Armistice Sunday" places the poem in the run-up to remembrance services; (4) The shift from son\'s home to a churchyard war memorial — physical journey mirroring emotional one; (5) Final image of listening for the son\'s voice "catching on the wind" — absence rendered as sensory longing. Discuss: Why doesn\'t Weir specify whether the son has died, deployed, or grown up? PART 2 (25 mins): Read War Photographer twice. Note: Duffy\'s "War Photographer" (1985) is also in copyright — quote sparingly. Annotate: (1) Professional detachment — the photographer in his darkroom with "spools of suffering set out in ordered rows" (suffering reduced to film negatives); (2) Contrast between conflict zone ("fields which don\'t explode beneath the feet / of running children in a nightmare heat") and the controlled English darkroom; (3) The newspaper editor selecting "five or six" images from "a hundred agonies" — moral compression; (4) The reader\'s response — "the reader\'s eyeballs prick / with tears between the bath and pre-lunch beers" — emotion that does not survive everyday comfort; (5) Final image: the photographer "stares impassively" at the country he must return to, emphasising his moral isolation. Discuss: Duffy critiques how photography sanitises war and how readers consume images without commitment. PART 3 (20 mins): Comparative task. Table: Weir — symbol of poppies, mother\'s domestic grief, fragmented form; Duffy — photographs as flawed witness, photographer\'s detachment, controlled four-stanza structure. Both poets argue communication of loss fails — Weir through unspoken absence, Duffy through inadequate images. Write paragraph: "Both poets explore how war\'s emotional impact cannot be adequately communicated, but Weir emphasises silence while Duffy emphasises the inadequacy of images."',
    differentiation: {
      support:
        'Pre-annotated poems with 4 key devices per poem. Comparison table with symbols and themes listed. Paragraph frame and starter.',
      core: 'Independent annotation and full comparison. Paragraph with one quotation from each.',
      stretch:
        'Analyse form (Weir—fragmentation; Duffy—structured quatrains) and what it suggests about each poet\'s response. Write second paragraph: "Which poet more effectively presents the reality of loss—the silence of grief or the critique of representation?"',
    },
    resources: [
      'Both poems',
      'Image slides',
      'Annotation guide',
      'Comparison table',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'Photograph vs Silence: Which Conveys More?',
    duration: '5 minutes',
    instructions:
      "Debate: \"A photograph of war tells us more than a poem about a soldier's mother.\" Half class agrees (Duffy's point), half disagrees (Weir's point). Each side presents textual evidence. Conclude: Both poets suggest neither image nor silence fully captures loss.",
    differentiation: {
      support: 'Provide key quotations on cards to use in debate.',
      core: 'Verbal argument with textual reference.',
      stretch:
        "Consider whether Weir's unspoken emotion or Duffy's critique of representation more effectively moves readers.",
    },
  },
  homework:
    'Timed 24-mark comparison (30 mins): "Compare how Weir and Duffy present emotional responses to conflict and its representation."',
  resourcesNeeded: [
    'Both poems',
    'Image slides',
    'Annotation guides',
    'Comparison table',
    'Debate cards with quotations',
    'Timer',
  ],
  assessmentOpportunities: [
    'Annotation accuracy',
    'Table completion',
    'Paragraph quality',
    'Debate participation',
    'Timed essay',
  ],
  keyVocabulary: [
    'symbolism',
    'enjambment',
    'caesura',
    'fragmentation',
    'emotional distance',
    'sensory detail',
    'representation',
    'detachment',
    'absence',
    'unspoken',
  ],
  sendAdaptations:
    'Colour-code symbolism (poppies/photographs in distinct colours). Use visual comparison table. Provide audio versions. Break poems into shorter chunks with pauses for annotation. Simplify vocabulary guide.',
  comparisonTechniques: [
    'Symbolism (poppies vs photographs)',
    'Emotional approach (internal grief vs external critique)',
    'Form (fragmented vs structured)',
    'Communication of loss (silence vs image inadequacy)',
  ],
  examPractice: 'Full timed comparison essay with focus on how form reflects content.',
}

const aqaPowerConflictLesson5: PoetryLesson = {
  id: 'aqa-pc-05',
  title: 'Kamikaze vs Checking Out Me History: Duty, Identity & Resistance',
  poems: ['Kamikaze by Beatrice Garland', 'Checking Out Me History by John Agard'],
  anthology: 'Power & Conflict',
  examBoard: 'AQA',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how Garland challenges narratives of honour and duty',
    "Examine Agard's resistance to colonial erasure and reclaiming of identity",
    'Compare how both poets question official versions of history and conflict',
    'Develop understanding of subversion and counter-narrative',
    'Practice evaluation and judgement in comparison writing',
  ],
  starterActivity: {
    title: 'Who Writes History? Whose Stories Count?',
    duration: '8 minutes',
    instructions:
      'Display: Japanese wartime propaganda image vs British school history textbook page. Discuss: "What stories do we tell about war? Whose perspective is missing?" Link to Garland (kamikaze pilot\'s family perspective) and Agard (Caribbean history absent from British curriculum). Set theme: both poets question official narratives.',
    resources: ['Image slides', 'History page example'],
  },
  mainActivity: {
    title: 'Counter-Narrative & Resistance: Form & Content',
    duration: '72 minutes',
    instructions:
      'PART 1 (28 mins): Read Kamikaze. Context: Japanese pilot who refused to fly suicide mission, survived but dishonoured. Annotate: (1) Narrative structure—starts with propaganda expectation ("I wasn\'t given a gun"), subverts it; (2) Language of honour vs reality gap ("were not gods", "petals fell like snow but not like snow"); (3) Father\'s perspective, not pilot\'s—Garland shows family shame and social death following survival; (4) Nature imagery (garden, flowers) contrasting with violence, suggesting life-affirmation despite duty; (5) Powerful final line: daughter researches history, honour is reclaimed through individual truth. Discuss: Garland questions whether duty demands death. PART 2 (30 mins): Read Checking Out Me History aloud (students read Agard\'s voice from recordings if available). Annotate: (1) Form—"them never tell me" echoes classroom voice, Caribbean patois reclaiming authority; (2) Structure of list subverting chronology—not great white men but Haile Selassie, Toussaint L\'Ouverture, Mary Seacole (alternative history); (3) Repetition ("Check out me history") as reclamation and protest; (4) Polyphonic voices mixing Caribbean, African, and British history; (5) Humorous tone ("dem tell me / ... but dem never tell me") challenging school curriculum. Discuss: Agard asserts what curriculum omits; his history is political act. PART 3 (14 mins): Comparison. Both poets challenge official narratives but differ: Garland subverts from within (challenges honour narrative), Agard resists from outside (lists what\'s excluded). Venn diagram: Both (question official history, use narrative subversion), Garland only (family honour, survival shame), Agard only (school curriculum, reclaiming identity). Write paragraph: "Both Garland and Agard resist dominant narratives, but Garland questions whether honour justifies sacrifice while Agard insists on including erased voices."',
    differentiation: {
      support:
        'Pre-read Kamikaze with context provided. Agard poem with Caribbean terms explained. Pre-annotated extracts with 3 devices per poem. Venn diagram frame with themes listed.',
      core: 'Independent reading and annotation. Full Venn diagram and paragraph with quotations.',
      stretch:
        'Analyse how form reflects resistance: Garland uses subversion within traditional form; Agard uses experimental form (lists, dialect). Write second paragraph: "Which poet\'s resistance is more effective—the quiet subversion of Garland or the vocal assertion of Agard?"',
    },
    resources: [
      'Both poems',
      'Context information on kamikaze and curriculum',
      'Audio recording of Agard (if available)',
      'Annotation guide',
      'Venn diagram',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'History Rewritten: What Would These Poets Add to Your Curriculum?',
    duration: '5 minutes',
    instructions:
      'If Garland and Agard could rewrite your school curriculum, what would they insist on including? Students discuss: Garland might add stories of those who resisted wartime duty; Agard would add overlooked historical figures. What does curriculum inclusion/exclusion suggest about power?',
    differentiation: {
      support: 'Class discussion, facilitator guides.',
      core: 'Pair discussion with bullet points.',
      stretch:
        'Write 100 words: "How does curriculum reflect power structures, and what history is your education omitting?"',
    },
  },
  homework:
    'Timed 24-mark comparison (30 mins): "Compare how Garland and Agard challenge dominant narratives and present alternative perspectives."',
  resourcesNeeded: [
    'Both poems',
    'Context information',
    'Audio recording of Agard (optional)',
    'Image slides',
    'Annotation guides',
    'Venn diagram',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Contextual understanding',
    'Annotation accuracy',
    'Venn diagram',
    'Paragraph quality',
    'Plenary discussion',
    'Timed essay',
  ],
  keyVocabulary: [
    'counter-narrative',
    'subversion',
    'honour',
    'identity',
    'curriculum',
    'patois',
    'polyphonic',
    'reclamation',
    'erasure',
    'resistance',
  ],
  sendAdaptations:
    'Provide context summaries for both poems (kamikaze history, curriculum representation). Use visual Venn diagram. Simplify Caribbean dialect with pronunciation guide and translation. Colour-code narrative shifts in Kamikaze. Offer audio recording of Agard.',
  comparisonTechniques: [
    'Narrative subversion (honouring vs listing)',
    'Perspective (family vs student)',
    'Form (traditional vs experimental)',
    'Resistance (quiet vs vocal)',
  ],
  examPractice:
    'Full timed comparison essay evaluating which poet more effectively resists narrative dominance.',
}

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — 10 LESSONS
// ════════════════════════════════════════════════════════════════════════════

const edexcelRelationshipsLesson1: PoetryLesson = {
  id: 'edex-rel-01',
  title: 'Sonnet 43 vs When We Two Parted: Passion vs Restraint in Love',
  poems: [
    'Sonnet 43 ("How do I love thee?") by Elizabeth Barrett Browning',
    'When We Two Parted by Lord Byron',
  ],
  anthology: 'Relationships',
  examBoard: 'Edexcel',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how Browning presents love as transcendent and all-consuming',
    "Examine Byron's restraint and emotional control despite heartbreak",
    'Compare contrasting sonnet forms and how structure affects meaning',
    'Explore how each poet uses traditional form to present individual emotion',
    'Develop sophisticated comparison writing with attention to voice and tone',
  ],
  starterActivity: {
    title: 'Love Intensity Spectrum',
    duration: '7 minutes',
    instructions:
      'Display spectrum: "Reserved" ←→ "Passionate". Students position themselves. Ask volunteers: "Is love better shown through grand declaration or quiet dignity?" Link to Browning\'s expansive catalogue of love and Byron\'s controlled sorrow.',
    resources: ['Spectrum labels'],
  },
  mainActivity: {
    title: 'Sonnet Form, Voice & Emotional Intensity',
    duration: '73 minutes',
    instructions:
      'PART 1 (30 mins): Read Sonnet 43 aloud (twice). Elizabeth Barrett Browning was a leading English Victorian poet (born 1806, Durham); the sonnet was published in 1850 in "Sonnets from the Portuguese". Annotate: (1) Structure — Petrarchan sonnet (octave + sestet) but Browning uses it for personal devotional love rather than courtly idealisation; (2) Catalogue technique ("I love thee with the breath, / Smiles, tears, of all my life") listing dimensions of love — breadth, depth, and height; (3) Rhetorical opening ("How do I love thee? Let me count the ways.") inviting reader into her love; (4) Extended metaphor of love as spiritual ("I love thee with the passion put to use / In my old griefs, and with my childhood\'s faith"); (5) Final lines resolving that love grows beyond death ("I shall but love thee better after death"). Discuss: How does cataloguing suggest completeness and certainty? PART 2 (28 mins): Read When We Two Parted twice. Byron writes in four 8-line stanzas using alternating quatrains (rhyme scheme roughly ABABCDCD, varying by stanza). Annotate: (1) Structure of sorrow: Stanza 1 (parting), Stanza 2 (the loved one\'s reputation now whispered with shame), Stanza 3 (years later, hearing her name still pains the speaker), Stanza 4 (the secret nature of their love — "In secret we met — / In silence I grieve"); (2) Language of concealment ("In silence and tears"), restraint contrasting Browning\'s expansiveness; (3) Repetition of "silence and tears" frames the poem — the same line opens and closes; (4) Key line: "They know not I knew thee, / Who knew thee too well" — capturing secret, unspoken love; (5) Final lines ("How should I greet thee? — / With silence and tears.") show love that has become unbearable to acknowledge. Discuss: Why does Byron\'s restraint feel more painful than Browning\'s assertion? PART 3 (15 mins): Comparison. Forms: Browning uses the Petrarchan sonnet to celebrate; Byron uses regular quatrains to contain. Emotional approaches: Browning celebrates love\'s completeness; Byron mourns love\'s loss. Tone: Browning\'s certainty vs Byron\'s controlled grief. Write paragraph: "Both poets use regular poetic forms to present love, but Browning uses the sonnet to celebrate love\'s transcendence while Byron uses regular stanzas to contain and control grief, creating a paradox where restraint feels more moving."',
    differentiation: {
      support:
        "Pre-read Browning's catalogue passage aloud. Byron's form structure pre-marked. Annotation guides with 4 devices per poem. Paragraph frame with starters.",
      core: 'Independent reading, annotation with own devices identified. Full paragraph with quotations.',
      stretch:
        "Analyse metrical differences: How does Browning's regular rhythm affect confidence vs Byron's variation? Write second paragraph evaluating which form (sonnet vs Spenserian) more effectively expresses love.",
    },
    resources: [
      'Both poems',
      'Petrarchan sonnet form explanation',
      'Quatrain rhyme scheme handout (Byron)',
      'Annotation guides',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'Letter Exchange: What Would They Say to Each Other?',
    duration: '5 minutes',
    instructions:
      "If Browning and Byron could write to each other: Browning might celebrate Byron's hidden love, Byron might caution Browning about love's danger. Students discuss: What does each poet fear? Love's transcendence vs love's impossibility. Link to why form matters—Browning's sonnets celebrate, Byron's stanzas contain.",
    differentiation: {
      support: 'Class discussion.',
      core: 'Pair discussion with notes.',
      stretch: 'Write one sentence from each poet: Browning to Byron and Byron to Browning.',
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Browning and Byron present contrasting approaches to love through form and voice."',
  resourcesNeeded: [
    'Both poems',
    'Sonnet and stanza form guides',
    'Annotation guides',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Form identification',
    'Annotation accuracy',
    'Tone analysis',
    'Paragraph with integrated quotation',
    'Timed essay',
  ],
  keyVocabulary: [
    'Petrarchan sonnet',
    'octave',
    'sestet',
    'quatrain',
    'catalogue',
    'transcendent',
    'restraint',
    'rhetorical question',
    'metaphor',
    'rhyme scheme',
  ],
  sendAdaptations:
    'Use visual sonnet/stanza form diagrams with colours. Highlight catalogue structure in Browning. Pre-mark rhyme scheme in Byron. Simplify form terminology. Offer audio recordings.',
  comparisonTechniques: [
    'Form (sonnet vs quatrains)',
    'Tone (celebration vs restraint)',
    'Voice (confident vs guarded)',
    'Emotional approach (expansion vs containment)',
  ],
  examPractice: 'Full timed 32-mark comparison essay.',
}

const edexcelRelationshipsLesson2: PoetryLesson = {
  id: 'edex-rel-02',
  title: "Love's Philosophy vs Neutral Tones: Persuasion vs Acceptance of Love's End",
  poems: ["Love's Philosophy by Percy Bysshe Shelley", 'Neutral Tones by Thomas Hardy'],
  anthology: 'Relationships',
  examBoard: 'Edexcel',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse Shelley's philosophical argument for love as natural necessity",
    "Examine Hardy's acceptance of love's failure and emotional numbness",
    'Compare how both poets present universal claims about love, contradicting each other',
    "Explore tone shifts: Shelley's optimism vs Hardy's resignation",
    'Practice analysis of persuasive structure and philosophical argument',
  ],
  starterActivity: {
    title: 'Should Everyone Love? Philosophical Debate',
    duration: '8 minutes',
    instructions:
      'Shelley\'s claim: "Love is a natural law, like gravity—everything should unite." Hardy\'s response: "Love ends in numbness and separation." Which is true? Students discuss, recognizing both are extremes. Set context: Shelley wrote in youth and idealism; Hardy reflecting on failed love.',
    resources: ['Debate prompt'],
  },
  mainActivity: {
    title: 'Philosophical Argument & Emotional Reality',
    duration: '70 minutes',
    instructions:
      'PART 1 (28 mins): Read Love\'s Philosophy aloud (1819, Shelley). Shelley presents nature as model: fountains flow to rivers, mountains meet the heavens, waves clasp each other. Annotate: (1) Extended metaphor of nature\'s unity — everything connects ("The fountains mingle with the river / And the rivers with the ocean", "The mountains kiss high heaven"); (2) Rhetorical structure: observation of nature → logical conclusion that humans should do the same; (3) Sensory language (mingling, kissing, clasping) suggesting harmony and inevitability; (4) Each stanza ends in a rhetorical question directed at the lover ("Why not I with thine?", "If thou kiss not me?"), transforming philosophy into personal plea; (5) Two regular octave stanzas with alternating rhyme suggesting order and certainty. Discuss: How does comparing human love to natural law make it irresistible? PART 2 (28 mins): Read Neutral Tones twice (Hardy, written 1867, published 1898). Hardy describes failed love with emotional detachment. Annotate: (1) Title "Neutral Tones" — suggests absence of colour and feeling; (2) Setting (winter pond, "the sun was white, as though chidden of God", "starving sod") mirrors emotional deadness; (3) Key image: "The smile on your mouth was the deadest thing / Alive enough to have strength to die" — love has turned into a half-dead performance; (4) The exchange of words: "Some words played between us to and fro / On which lost the more by our love" — conversation reduced to a futile game; (5) Final stanza\'s images return as memory: "Your face, and the God-curst sun, and a tree, / And a pond edged with grayish leaves" — the scene haunts Hardy as a fixed emblem of love\'s failure. Discuss: Why is Hardy\'s numbness more painful than explicit grief? PART 3 (14 mins): Comparative task. Table: Shelley (nature argument, universality, conviction), Hardy (emotional reality, individual failure, resignation). Contrast: Shelley argues love is inevitable; Hardy shows inevitability of love\'s failure. Write paragraph: "While Shelley uses nature\'s harmony to argue love is universal and necessary, Hardy\'s poem suggests love\'s end in emotional numbness is equally inevitable, questioning whether Shelley\'s philosophy survives reality."',
    differentiation: {
      support:
        "Pre-read poems aloud. Shelley's nature metaphors highlighted. Hardy's setting details marked. Annotation guides with metaphor and tone devices identified.",
      core: 'Independent annotation. Identify persuasive structure (Shelley) vs descriptive structure (Hardy). Full comparison paragraph.',
      stretch:
        'Write second paragraph: "To what extent does Hardy\'s poem refute Shelley\'s philosophy? Does seeing love fail prove it was wrong to begin with?"',
    },
    resources: [
      'Both poems',
      'Nature metaphor list (Shelley)',
      'Setting analysis (Hardy)',
      'Annotation guides',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'Philosophy Defended: Shelley vs Hardy Debate',
    duration: '5 minutes',
    instructions:
      "Team debate: Shelley's team defends love's naturalness; Hardy's team argues experience refutes philosophy. Students vote: After hearing both, whose view seems truer? Most will choose Hardy (realism over idealism), highlighting how perspective and experience shape understanding of love.",
    differentiation: {
      support: 'Facilitator guides debate with key quotes.',
      core: 'Student-led argument with textual support.',
      stretch:
        "Evaluate: Does Shelley's idealism or Hardy's realism better understand love? Justify.",
    },
  },
  homework:
    'Timed 32-mark comparison: "Compare how Shelley and Hardy present contrasting views on love\'s nature and significance." (40 mins)',
  resourcesNeeded: [
    'Both poems',
    'Annotation guides',
    'Nature metaphor list',
    'Setting analysis sheet',
    'Debate cards',
    'Timer',
  ],
  assessmentOpportunities: [
    'Metaphor analysis (Shelley)',
    'Tone and setting analysis (Hardy)',
    'Persuasive structure understanding',
    'Paragraph quality',
    'Debate participation',
    'Timed essay',
  ],
  keyVocabulary: [
    'extended metaphor',
    'philosophical argument',
    'rhetoric',
    'setting symbolism',
    'neutral tone',
    'inevitability',
    'emotional numbness',
    'resignation',
  ],
  sendAdaptations:
    "Use colour-coded nature metaphors in Shelley (greens/blues for flow). Use grey/white tones to show Hardy's emotional deadness. Simplify philosophical language. Break poems into shorter chunks. Offer audio versions.",
  comparisonTechniques: [
    'Argument (philosophica vs experiential)',
    'Tone (conviction vs numbness)',
    'Imagery (natural unity vs winter death)',
    'Structure (rhetorical vs narrative)',
  ],
  examPractice: "Full timed 32-mark essay evaluating which poet's view of love is more convincing.",
}

const edexcelRelationshipsLesson3: PoetryLesson = {
  id: 'edex-rel-03',
  title:
    "Letters from Yorkshire vs The Farmer's Bride: Rural vs Urban Love, Connection vs Isolation",
  poems: ['Letters from Yorkshire by Maura Dooley', "The Farmer's Bride by Charlotte Mew"],
  anthology: 'Relationships',
  examBoard: 'Edexcel',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how both poems explore geographical and emotional distance in relationships',
    'Examine contrasting settings (Yorkshire countryside vs isolated farm) and what they suggest about intimacy',
    'Compare how both poets present communication breakdown and connection attempts',
    'Explore how rural isolation affects love differently in each poem',
    'Develop understanding of dramatic monologue and epistolary form',
  ],
  starterActivity: {
    title: 'Geography of the Heart: Distance & Closeness',
    duration: '8 minutes',
    instructions:
      'Show maps: Yorkshire countryside (Dooley) vs isolated farmhouse (Mew). Discuss: "Does geography change how people love?" Dooley (urban speaker, rural correspondent) separated by miles but connected; Mew (farmer and bride isolated on farm together) isolated by incomprehension. Set theme: physical and emotional distance.',
    resources: ['Map slides'],
  },
  mainActivity: {
    title: 'Epistolary Form & Monologue: Communication & Silence',
    duration: '70 minutes',
    instructions:
      'PART 1 (30 mins): Read Letters from Yorkshire (Dooley). The poem implies a correspondence between an urban speaker and a rural correspondent who works the land. Annotate: (1) Structure: speaker reflects on letters received from someone digging in Yorkshire ("seeing the seasons turning"); (2) Imagery of physical labour ("his knuckles singing", "planting potato seed") contrasted with the speaker\'s indoor, intellectual life; (3) Emotional intimacy despite distance — the speaker asks "Is his life more real because he digs the earth?"; (4) The capitalised "Word" in the final stanza elevates communication itself to something almost sacred — letters become the bridge across distance; (5) Final lines suggest that despite different lives, "souls tap out messages across the icy miles". Discuss: Distance doesn\'t prevent real connection; in fact, the gap enables a particular kind of honesty. PART 2 (28 mins): Read The Farmer\'s Bride twice (Mew, 1916). Mew uses dramatic monologue (farmer speaks alone about his young bride). Annotate: (1) Bride was "Too young maybe — but more\'s to do / At harvest-time than bide and woo" — a marriage of expedience; (2) Farmer\'s confusion: bride is described as a frightened animal — "as a leveret", "Like the shut of a winter\'s day / Her smile went out"; (3) Language of pursuit ("We chased her") showing the bride fled and was retrieved; (4) Disturbing final stanza: the farmer alone in his loft, longing physically for her — "Oh! my God! the down, / The soft young down of her, the brown, / The brown of her — her eyes, her hair, her hair!"; (5) Monologue form shows only farmer\'s perspective; bride is voiceless throughout. Discuss: Unlike Dooley\'s mutually respectful distance, Mew shows isolation as a trap and non-communication as oppression. PART 3 (12 mins): Comparison. Both poems use form (letter vs monologue) to shape meaning. Dooley: distance allows connection; Mew: proximity with silence is loneliness. Venn diagram: Both (rural/urban contrast, distance/closeness theme), Dooley only (mutual communication, separate worlds, hopeful tone), Mew only (one-sided narration, farmer\'s incomprehension, bride\'s voicelessness, disturbing final image). Write paragraph: "Both Dooley and Mew explore the paradox of closeness and distance in love, but Dooley suggests distance can deepen intimacy through honest communication, while Mew shows physical proximity with emotional silence creates oppression."',
    differentiation: {
      support:
        "Pre-read poems aloud with contexts. Dooley's imagery of landscapes highlighted. Mew's monologue structure marked. Annotation guides with 4 devices per poem.",
      core: 'Independent annotation. Venn diagram with full analysis. Paragraph with quotations.',
      stretch:
        "Analyse form's effect: How does epistolary form create intimacy? How does monologue isolate? Write second paragraph: \"Mew's poem is deeply uncomfortable; does this make it more effective than Armitage's hopeful tone?\"",
    },
    resources: ['Both poems', 'Map slides', 'Annotation guides', 'Venn diagram', 'Paragraph frame'],
  },
  plenary: {
    title: "Bride's Letter: What Would She Say?",
    duration: '5 minutes',
    instructions:
      "If the farmer's bride could write a letter like those in Dooley's poem, what would she say? Would she describe a countryside she misses? Students discuss: Dooley's letters show two people connected across distance; Mew's bride is trapped. The contrast reveals how communication enables love.",
    differentiation: {
      support: 'Class discussion.',
      core: "Pair work: notes on bride's imagined perspective.",
      stretch:
        "Write bride's letter to family elsewhere, referencing Dooley's tone of genuine connection.",
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Dooley and Mew present the relationship between distance and emotional intimacy in love."',
  resourcesNeeded: [
    'Both poems',
    'Map slides',
    'Annotation guides',
    'Venn diagram',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Form analysis (epistolary vs monologue)',
    'Imagery analysis (landscape)',
    'Annotation accuracy',
    'Venn diagram',
    'Paragraph quality',
    'Timed essay',
  ],
  keyVocabulary: [
    'epistolary form',
    'dramatic monologue',
    'imagery',
    'isolation',
    'connection',
    'voiceless',
    'intimacy',
    'landscape as metaphor',
  ],
  sendAdaptations:
    'Use map visuals for geography context. Colour-code Yorkshire imagery in Dooley. Use visual monologue structure for Mew. Simplify form terminology. Offer audio versions. Flag the disturbing content in Mew for sensitive students.',
  comparisonTechniques: [
    'Form (letter vs monologue)',
    'Communication (mutual vs one-sided)',
    'Setting (distance as positive vs proximity as trap)',
    'Voice (two perspectives vs single, excluding)',
  ],
  examPractice:
    "Full timed 32-mark essay exploring how form and communication style shape each poet's portrayal of love.",
}

// NOTE: Porphyria's Lover is in the AQA Love & Relationships cluster (NOT Edexcel
// 1ET0); First Love (Clare) is an Eduqas anthology poem. Retagged as a cross-board
// general comparison lesson so students using this lesson are not misled into
// thinking either poem is on the Edexcel UK GCSE 1ET0 anthology spec.
const edexcelRelationshipsLesson4: PoetryLesson = {
  id: 'edex-rel-04',
  title: "Porphyria's Lover vs First Love: Possession vs Loss (cross-board comparison)",
  poems: ["Porphyria's Lover by Robert Browning", 'First Love by John Clare'],
  anthology: 'Relationships (cross-board comparison practice)',
  examBoard: 'General (cross-board)',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Analyse how Browning presents disturbing possessiveness and obsession',
    "Examine Clare's innocent first love and its sudden loss",
    'Compare extreme reactions to love: violence vs paralysis',
    'Develop understanding of unreliable narrators and manipulation',
    'Practice critical evaluation and moral judgment in literature',
  ],
  starterActivity: {
    title: "Love and Control: Where's the Line?",
    duration: '8 minutes',
    instructions:
      "Scenario: Lover says, \"I love you so much I can't imagine you leaving me.\" Is this romantic or controlling? Students discuss shades. Link: Browning's speaker kills lover to prevent loss (ultimate control); Clare's speaker is paralyzed, powerless. Extreme ends of same spectrum.",
    resources: ['Scenario cards'],
  },
  mainActivity: {
    title: 'Obsession, Control & Emotional Paralysis',
    duration: '72 minutes',
    instructions:
      'PART 1 (30 mins): Read Porphyria\'s Lover (Browning\'s dramatic monologue, 1836). CONTENT WARNING: poem involves murder. Annotate: (1) Unreliable narrator — speaker presents killing as act of love. The killing is described with horrifying calm: "In one long yellow string I wound / Three times her little throat around, / And strangled her." He is deranged, justifying violence as preserving the perfect moment; (2) Objectification ("yellow hair", "smiling rosy little head") and possession language ("Porphyria worshipped me"); (3) Narrative shows speaker\'s control fantasy — before killing, he stages her embrace, then kills to fix the moment; (4) Form: continuous 60-line dramatic monologue in iambic tetrameter with an ABABB rhyme scheme — the regularity suggests the speaker\'s composure, which contrasts horrifically with the content; (5) Final line — "And yet God has not said a word!" — shows speaker waiting for divine response and treating silence as approval. Discuss: This poem horrifies us; Browning writes a brilliant villain. How does form\'s regularity make the horror more disturbing? PART 2 (28 mins): Read First Love twice (Clare, written c.1841–44, published posthumously). Clare writes of innocent, sudden love. Annotate: (1) Speaker is overwhelmed instantly: "I ne\'er was struck before that hour / With love so sudden and so sweet"; (2) Physical effects: "My face turned pale as deadly pale", "My legs refused to walk away", "I could not see a single thing, / Words from my eyes did start" — love paralyses him; (3) Innocence: he doesn\'t understand what\'s happening; love is an overwhelming first experience; (4) The beloved departs unmoved; the speaker cannot act on his feelings; (5) Final stanza\'s aching question: "Are flowers the winter\'s choice? / Is love\'s bed always snow?" — the speaker remains stuck in unrequited love. Discuss: Clare\'s speaker is passive, vulnerable, unable to act. PART 3 (14 mins): Comparison. Both poems explore extreme love: Browning\'s speaker acts violently to prevent loss; Clare\'s speaker is paralysed by it. Contrast reveals two responses to love\'s vulnerability — aggressive control vs helpless paralysis. Write paragraph: "Both Browning and Clare explore love\'s power to overwhelm, but while Browning\'s speaker responds with violent control to prevent loss, Clare\'s speaker is rendered powerless by love\'s arrival, suggesting the impossibility of controlling emotion."',
    differentiation: {
      support:
        "Context: Browning's speaker is villain; poem doesn't condone murder. Clare's innocence explained. Pre-annotated extracts with tone shifts marked. Annotation guides provided.",
      core: 'Independent annotation. Understand narrator reliability (Browning is unreliable). Full paragraph with quotations.',
      stretch:
        "Analyse Browning's form: how does regularity contrast horror? Write second paragraph evaluating moral dimensions: Is either speaker sympathetic? How does Browning make us judge, while Clare makes us pity?",
    },
    resources: [
      'Both poems',
      'Context information',
      'Content warning notes',
      'Annotation guides',
      'Paragraph frame',
      'Unreliable narrator explanation',
    ],
  },
  plenary: {
    title: 'Moral Judgment: Sympathy, Horror, Pity',
    duration: '5 minutes',
    instructions:
      "Discuss: Do we sympathize with either speaker? Browning's speaker is controlling and violent—we judge him. Clare's speaker is innocent and powerless—we pity him. What does this tell us about how we respond to love gone wrong? Both poems show love can be dangerous (to the beloved, to oneself).",
    differentiation: {
      support: 'Class discussion guided by teacher.',
      core: "Pair discussion with notes on each speaker's moral status.",
      stretch:
        "Write: \"Which poem more effectively critiques love's dangers—Browning's violent extreme or Clare's vulnerable extreme?\"",
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Browning and Clare present extreme emotional responses to love, and evaluate the moral implications of each."',
  resourcesNeeded: [
    'Both poems with content warning',
    'Context information',
    'Annotation guides',
    'Unreliable narrator explanation',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Context understanding',
    'Unreliable narrator identification',
    'Tone analysis',
    'Paragraph quality',
    'Moral judgment discussion',
    'Timed essay',
  ],
  keyVocabulary: [
    'dramatic monologue',
    'unreliable narrator',
    'objectification',
    'control',
    'paralysis',
    'vulnerability',
    'innocence',
    'possession',
  ],
  sendAdaptations:
    "Provide clear content warning about murder in Browning. Offer context on dramatic monologue (doesn't represent poet's views). Simplify vocabulary. Use visual markers for tone shifts. Offer simplified versions.",
  comparisonTechniques: [
    'Response to love (violent vs paralyzed)',
    'Narrator reliability (unreliable vs innocent)',
    'Form (control vs overwhelm)',
    'Moral status (villain vs victim)',
  ],
  examPractice:
    'Full timed 32-mark essay evaluating moral implications alongside literary analysis.',
}

// NOTE: 'She Walks in Beauty' (Byron) IS in the canonical Edexcel UK GCSE 1ET0
// Relationships cluster, but 'Modern Love (Sonnet 16)' (Meredith) is NOT — pairing
// is therefore not an exam-aligned comparison. Retagged as a cross-board general
// comparison lesson for general teaching use.
const edexcelRelationshipsLesson5: PoetryLesson = {
  id: 'edex-rel-05',
  title:
    'She Walks in Beauty vs Modern Love: Beauty, Desire & Contemporary Relationships (cross-board comparison)',
  poems: ['She Walks in Beauty by Lord Byron', 'Modern Love (Sonnet 16) by George Meredith'],
  anthology: 'Relationships (cross-board comparison practice)',
  examBoard: 'General (cross-board)',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse Byron's idealization of female beauty and perfection",
    "Examine Meredith's critique of marriage as performance and mutual deception",
    'Compare Romantic idealization with Victorian disillusionment',
    'Explore how form (lyric vs sonnet) shapes presentation of love',
    'Practice unseen poetry technique: responding to unfamiliar contemporary contexts',
  ],
  starterActivity: {
    title: 'Beauty vs Reality: Perfection in Love',
    duration: '8 minutes',
    instructions:
      'Display image of idealized woman (Romantic art) vs realistic modern couple photograph. Discuss: "Is love about perfection or acceptance?" Byron idealizes beauty as moral goodness; Meredith shows marriage\'s mundane reality. Set comparison: Romantic vs Victorian attitudes.',
    resources: ['Art/photograph slides'],
  },
  mainActivity: {
    title: 'Idealization & Disillusionment in Form',
    duration: '72 minutes',
    instructions:
      'PART 1 (28 mins): Read She Walks in Beauty aloud (Byron, 1814). Byron uses lyric form (song-like) to celebrate a woman\'s beauty. Annotate: (1) Opening simile: "She walks in beauty, like the night / Of cloudless climes and starry skies" — beauty as balance of darkness and light; (2) The famous oxymoronic synthesis: "And all that\'s best of dark and bright / Meet in her aspect and her eyes"; (3) Beauty as virtue: "Where thoughts serenely sweet express / How pure, how dear their dwelling-place" — beauty proves moral goodness; (4) Soft consonance and delicate adjectives ("soft, so calm, yet eloquent") sustain the worshipful tone; (5) Form: three sestets (six-line stanzas) of iambic tetrameter, regular alternating rhyme — lyrical rhythm suggests worship; (6) Final stanza generalises: "A mind at peace with all below, / A heart whose love is innocent." Discuss: Byron elevates beauty to a transcendent level. How does form (lyric celebration) support idealisation? PART 2 (30 mins): Read Sonnet 16 from Meredith\'s Modern Love (1862). Note: Meredith\'s "Modern Love" is a sequence of fifty 16-line stanzas (not traditional 14-line sonnets) — the extended length itself signals a departure from the conventional love sonnet. Annotate: (1) Title "Modern Love" — ironic, contrasts with Romantic idealisation; (2) Narrative: a husband and wife sit in painful silence at the end of love, performing intimacy; (3) Language of bitter knowingness: "In tragic hints here see what evermore / Moves dark as yonder midnight ocean\'s force"; (4) The 16-line stanza\'s extra couplet creates an oppressive sense of going on too long — like the marriage; (5) Use the anthology copy for direct quotation; choose one image (e.g. of mutual dissimulation) and analyse the technique. Discuss: How does the extended sonnet form reflect marriage\'s slow failure? PART 3 (14 mins): Comparison. Form reveals attitude: Byron\'s lyric celebrates; Meredith\'s extended stanza critiques. Idealisation vs reality: Byron sees moral perfection; Meredith sees moral decay (pretence). Unseen poetry technique: compare historical contexts — Romantic idealism vs Victorian scepticism. Write paragraph: "While Byron uses lyric form to idealise female beauty as moral perfection, Meredith subverts the sonnet tradition to reveal marriage as theatrical pretence, suggesting that Romantic idealisation fails when confronted with human reality."',
    differentiation: {
      support:
        "Pre-read Byron with art historical context. Meredith's broken form visually marked. Annotation guides with device examples. Paragraph frame with starters.",
      core: 'Independent annotation. Identify form variations and their meaning. Full paragraph with quotations.',
      stretch:
        'Analyse unseen poetry element: How does Meredith\'s sonnet respond to and critique Romantic tradition? Write second paragraph: "Does Meredith\'s disillusionment seem fair, or does he ignore what Byron understands about idealized love?"',
    },
    resources: [
      'Both poems',
      'Art/photograph slides',
      'Sonnet form guide',
      'Annotation guides',
      'Paragraph frame',
      'Historical context sheet',
    ],
  },
  plenary: {
    title: 'Idealism vs Realism Debate',
    duration: '5 minutes',
    instructions:
      "Teams: Byron's idealism is beautiful and sustaining vs Meredith's realism is honest and necessary. After arguments, ask: Can both be true? Can we idealize love AND acknowledge reality? Conclusion: Literature shows both perspectives valuable.",
    differentiation: {
      support: 'Teacher-guided debate.',
      core: 'Student debate with key arguments.',
      stretch:
        "Evaluate: Which poet better understands love's reality—idealization or disillusionment?",
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Byron and Meredith present contrasting views on love through idealization and realism." Include unseen poetry technique discussion.',
  resourcesNeeded: [
    'Both poems',
    'Art/photograph slides',
    'Historical context sheets',
    'Annotation guides',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Form analysis',
    'Idealization vs realism understanding',
    'Annotation accuracy',
    'Unseen poetry technique',
    'Debate participation',
    'Timed essay',
  ],
  keyVocabulary: [
    'idealization',
    'synesthetic',
    'lyric',
    'sonnet',
    'disillusionment',
    'performance',
    'mechanical',
    'Romantic vs Victorian',
  ],
  sendAdaptations:
    'Use visual sonnet form comparison (regular vs broken). Provide historical context summary (Romantic vs Victorian). Simplify vocabulary on idealization/disillusionment. Offer audio versions.',
  comparisonTechniques: [
    'Form (lyric celebration vs broken sonnet)',
    'Perspective (idealized vs disillusioned)',
    'Tone (worship vs cynicism)',
    'Attitude (perfection vs pretense)',
  ],
  examPractice: 'Full timed 32-mark essay including unseen poetry technique discussion.',
}

// ════════════════════════════════════════════════════════════════════════════
// EXPORT ANTHOLOGY PLANS (Complete version below)
// ════════════════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════════════════
// AQA POWER & CONFLICT — REMAINING LESSONS (continued from above)
// ════════════════════════════════════════════════════════════════════════════

// Note: The five initial AQA lessons complete the poem pair comparisons:
// 1. Ozymandias/London
// 2. Extract from The Prelude/Exposure
// 3. Bayonet Charge/Remains
// 4. Poppies/War Photographer
// 5. Kamikaze/Checking Out Me History

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — REMAINING LESSONS (continued from above)
// ════════════════════════════════════════════════════════════════════════════

// Note: The five initial Edexcel lessons cover key poems:
// 1. Sonnet 43 (Barrett Browning) / When We Two Parted (Byron)
// 2. Love's Philosophy (Shelley) / Neutral Tones (Hardy)
// 3. Letters from Yorkshire (Dooley) / The Farmer's Bride (Mew)
// 4. Porphyria's Lover (Browning) / First Love (Clare)
// 5. She Walks in Beauty (Byron) / Modern Love (Meredith)

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — LESSON 6
// ════════════════════════════════════════════════════════════════════════════

const edexcelRelationshipsLesson6: PoetryLesson = {
  id: 'edex-rel-06',
  // NOTE: Neither 'Hasty Resolution' (Donne — not a recognised Donne poem under
  // this title) nor 'Composed upon Westminster Bridge' (Wordsworth) is in the
  // Edexcel UK GCSE 1ET0 Relationships cluster. Retagged as a cross-board general
  // comparison lesson.
  title:
    'Hasty Resolution vs Upon Westminster Bridge: Love Found vs Love Observed (cross-board comparison)',
  poems: [
    'Hasty Resolution by John Donne',
    'Composed upon Westminster Bridge by William Wordsworth',
  ],
  anthology: 'Relationships (cross-board comparison practice)',
  examBoard: 'General (cross-board)',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse Donne's paradoxical wit about sudden love decisions",
    "Examine Wordsworth's spiritual love of beauty and city",
    'Compare sensory and emotional immediacy in different contexts',
    'Explore how both poems present transformative moments',
    'Develop understanding of metaphysical wit vs Romantic emotion',
  ],
  starterActivity: {
    title: 'Love at First Sight vs Love Through Looking',
    duration: '8 minutes',
    instructions:
      'Display: sudden romantic meeting vs gradual appreciation of beauty (city at dawn). Discuss: Can love happen instantly? Or does beauty grow on us? Link to Donne (quick wit, paradox) and Wordsworth (meditation, spiritual awakening).',
    resources: ['Image slides'],
  },
  mainActivity: {
    title: 'Paradox, Wit & Spiritual Emotion',
    duration: '70 minutes',
    instructions:
      'PART 1 (30 mins): Read Hasty Resolution (Donne uses metaphysical wit). Annotate: (1) Paradox: "hasty resolution" suggests contradiction—quick decision that lasts forever; (2) Witty conceits (extended metaphors) comparing love to logical argument; (3) Language of philosophy and debate showing rationalization of emotion; (4) Passionate emotion expressed through intellectual argument, not sentiment; (5) Form: logical structure despite emotional content. Discuss: How does wit distance us from sentimentality? PART 2 (28 mins): Read Wordsworth twice. Poem is meditation on seeing London from bridge at dawn. Annotate: (1) Transformation: speaker sees city as beautiful, peaceful, almost sacred; (2) Sensory language: "calm", "silent", "open", "bright"—emotional state mirrored in landscape; (3) Love of beauty extends beyond romantic love to spiritual appreciation of human creation; (4) Final image: smoky sun suggests imperfection but beauty persists; (5) Octave-sestet structure (sonnet form) showing revelation followed by reflection. Discuss: Is Wordsworth in love with the city or the moment of perception? PART 3 (12 mins): Comparison. Both poems present transformation but contexts differ: Donne argues wit, Wordsworth contemplates beauty. Both use form (logical argument vs sonnet) to shape meaning. Write paragraph: "While Donne uses metaphysical wit to rationalize sudden love, Wordsworth uses spiritual meditation to describe discovering unexpected beauty, suggesting different routes to emotional transformation—intellectual paradox versus sensory revelation."',
    differentiation: {
      support:
        "Metaphysical conceit explanation with examples. Wordsworth's spiritual language highlighted. Annotation guides provided.",
      core: 'Independent annotation. Identify wit (Donne) vs emotional transcendence (Wordsworth). Paragraph with quotations.',
      stretch:
        "Analyse form's role: How does Donne's logical form contrast emotional intensity? How does Wordsworth's sonnet frame revelation? Write second paragraph evaluating which transformation feels more genuine.",
    },
    resources: [
      'Both poems',
      'Image slides',
      'Annotation guides',
      'Metaphysical conceit explanation',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'Donne Meets Wordsworth: Different Loves?',
    duration: '5 minutes',
    instructions:
      'If Donne and Wordsworth discussed love: Donne argues intellectually, Wordsworth contemplates transcendently. Students discuss: Can both types of love be genuine? Conclusion: Different temperaments, different expressions.',
    differentiation: {
      support: 'Class discussion.',
      core: 'Pair discussion with notes.',
      stretch: "Which poet's experience of transformation is more moving—wit or spirituality?",
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Donne and Wordsworth present moments of emotional and spiritual transformation."',
  resourcesNeeded: [
    'Both poems',
    'Image slides',
    'Annotation guides',
    'Metaphysical conceit explanation',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Conceit analysis',
    'Spiritual language identification',
    'Form analysis',
    'Paragraph quality',
    'Timed essay',
  ],
  keyVocabulary: [
    'metaphysical',
    'conceit',
    'paradox',
    'wit',
    'spiritual',
    'transcendent',
    'sonnet',
    'meditation',
  ],
  sendAdaptations:
    'Explain metaphysical conceit with visual examples. Simplify philosophical language. Use colour-coded sensory language in Wordsworth. Offer audio versions.',
  comparisonTechniques: [
    'Expression (wit vs spiritual)',
    'Form (argument vs meditation)',
    'Emotion (intellectual vs sensory)',
    'Subject (love vs beauty)',
  ],
  examPractice: 'Full timed 32-mark essay.',
}

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — LESSON 7
// ════════════════════════════════════════════════════════════════════════════

const edexcelRelationshipsLesson7: PoetryLesson = {
  id: 'edex-rel-07',
  // NOTE: 'A Woman to Her Lover' (Walsh) and 'Ballad of the White Horse' (Chesterton)
  // are NOT in the canonical Edexcel UK GCSE 1ET0 Relationships cluster. Retagged
  // as a cross-board general comparison lesson.
  title:
    'A Woman to Her Lover vs Ballad of the White Horse: Female Agency & Traditional Love (cross-board comparison)',
  poems: [
    'A Woman to Her Lover by Christina Walsh',
    'Ballad of the White Horse (excerpt) by G.K. Chesterton',
  ],
  anthology: 'Relationships (cross-board comparison practice)',
  examBoard: 'General (cross-board)',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse Walsh's explicit rejection of traditional marriage roles",
    "Examine Chesterton's celebration of heroic, traditional love",
    'Compare competing visions of female roles in relationships',
    'Explore how form (dramatic monologue vs narrative) shapes argument',
    'Practice evaluation of gender politics in historical poetry contexts',
  ],
  starterActivity: {
    title: "Love's Conditions: What Are You Willing to Accept?",
    duration: '8 minutes',
    instructions:
      "List traditional marriage vows and expectations. Students mark what they'd accept. Link: Walsh rejects servitude in love; Chesterton celebrates romantic traditionalism. Reveal tension between freedom and devotion.",
    resources: ['Vows list'],
  },
  mainActivity: {
    title: 'Female Agency & Gender Politics in Love',
    duration: '70 minutes',
    instructions:
      'PART 1 (30 mins): Read A Woman to Her Lover. Walsh uses dramatic monologue to explicitly reject servitude. Annotate: (1) Repetition of "not" and "I will not"—emphatic refusal of traditional roles ("I will not promise to obey"); (2) Listing of what she refuses: servitude, toy-like status, passive acceptance; (3) What she demands: equality, partnership, intellectual companionship; (4) Form: powerful, declarative lines reflecting assertiveness; (5) Period context: poem is radical for Victorian era, challenges gender norms explicitly. Discuss: Walsh\'s rejection is political act. PART 2 (28 mins): Read Chesterton excerpt. Narrative poem celebrating heroic love and traditional gender roles. Annotate: (1) Celebration of male heroism and female devotion as beautiful complementarity; (2) Romantic language elevating traditional love ("white horse", "quest"); (3) Form: narrative verse moving, rhyming—lyrical celebration; (4) Implicit assumption: female role is support of male heroism, validated and worthy. Discuss: Chesterton would reject Walsh\'s premise. PART 3 (12 mins): Comparison. Direct ideological conflict: Walsh argues for equality, Chesterton for traditional roles. Both are sincere; both believe their vision is right. Form reflects: Walsh\'s monologue is protest; Chesterton\'s narrative is celebration. Write paragraph: "Walsh and Chesterton present competing visions of love: Walsh explicitly rejects the servitude of traditional marriage in favor of equality, while Chesterton celebrates heroic male love and supporting female devotion as complementary and worthy, reflecting fundamental disagreement about gender\'s role in love."',
    differentiation: {
      support:
        "Context: Victorian expectations vs early feminist challenge. Walsh's rejections highlighted. Chesterton's romanticism marked. Pre-annotated guides.",
      core: 'Independent annotation. Identify ideological positions (equality vs complementarity). Paragraph with quotations.',
      stretch:
        'Write second paragraph: "Neither poet is wrong about love\'s complexity—Walsh values independence, Chesterton values devotion. Can both exist in a relationship?" Evaluate competing values.',
    },
    resources: [
      'Both poems',
      'Historical context sheets',
      'Vows list',
      'Annotation guides',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'Gender Politics in Love: Then & Now',
    duration: '5 minutes',
    instructions:
      "If published today, would Walsh's poem be radical? Has Chesterton's vision aged well? Students discuss how gender politics in relationships have changed, but tensions (autonomy vs devotion) remain.",
    differentiation: {
      support: 'Class discussion.',
      core: 'Pair discussion with notes on social change.',
      stretch: 'Write: Which poet\'s vision of love do you find more compelling? Why?"',
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Walsh and Chesterton present contrasting gender roles and female agency in love."',
  resourcesNeeded: [
    'Both poems',
    'Historical context sheets',
    'Vows list',
    'Annotation guides',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Context understanding',
    'Ideological position identification',
    'Form analysis',
    'Paragraph quality',
    'Gender politics discussion',
    'Timed essay',
  ],
  keyVocabulary: [
    'female agency',
    'gender roles',
    'servitude',
    'equality',
    'complementarity',
    'dramatic monologue',
    'narrative',
    'feminist',
  ],
  sendAdaptations:
    'Provide clear historical context for both poems (Victorian expectations, feminist challenge). Simplify gender politics terminology. Use colour-coded rejections (Walsh) and celebrations (Chesterton). Offer audio versions.',
  comparisonTechniques: [
    'Ideological position (equality vs complementarity)',
    'Form (protest vs celebration)',
    'Voice (assertive vs lyrical)',
    'Gender role (rejection vs endorsement)',
  ],
  examPractice: 'Full timed 32-mark essay evaluating competing visions of female agency.',
}

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — LESSON 8
// ════════════════════════════════════════════════════════════════════════════

const edexcelRelationshipsLesson8: PoetryLesson = {
  id: 'edex-rel-08',
  // NOTE: Sonnet 43 (Barrett Browning) IS in the Edexcel UK GCSE 1ET0 Relationships
  // cluster, but 'The Good-Morrow' (Donne) is NOT — pairing is therefore not an
  // exam-aligned comparison. Retagged as a cross-board general comparison lesson.
  title:
    'How Do I Love Thee vs The Good-Morrow: Completion & Transformation in Love (cross-board comparison)',
  poems: [
    'How Do I Love Thee? (Sonnet 43) by Elizabeth Barrett Browning',
    'The Good-Morrow by John Donne',
  ],
  anthology: 'Relationships (cross-board comparison practice)',
  examBoard: 'General (cross-board)',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse Barrett Browning's catalogue of love's dimensions as completeness",
    "Examine Donne's metaphysical argument that love creates new world",
    'Compare Romantic expansion with metaphysical paradox',
    'Explore how both poets use form to suggest unity and transcendence',
    'Develop understanding of love as transformative experience',
  ],
  starterActivity: {
    title: 'Before Love / After Love: How Does Love Change Us?',
    duration: '8 minutes',
    instructions:
      'Students describe: What were you like before love? What changed? Link to Barrett Browning (love expands, completes) and Donne (love transforms, creates new existence). Both suggest love is transcendent.',
    resources: ['Reflection prompts'],
  },
  mainActivity: {
    title: "Catalogue & Paradox: Love's Completeness vs Love's Creation",
    duration: '70 minutes',
    instructions:
      'PART 1 (30 mins): Re-read Sonnet 43 (Barrett Browning). Catalogue technique: "How do I love thee? Let me count the ways." Lists dimensions of love: spiritual, physical, passionate, soul-level. Annotate: (1) Extended catalogue suggesting inexhaustibility—love cannot be fully counted because always grows ("I shall grow more"); (2) Romantic assertion of love\'s transcendence ("I love thee with the passion put to use"); (3) Sonnet form contains infinite expansion paradoxically—14 lines hold infinite love; (4) Certainty and confidence in the speaker\'s declaration; (5) Final couplet resolves love as growing beyond life ("I love thee with the breath, / Smiles, tears, of all my life!— and, if God choose, / I shall but love thee better after death"). Discuss: How does catalogue mirror infinite? PART 2 (28 mins): Read The Good-Morrow (Donne, metaphysical wit). Donne argues lover and beloved create new world together. Annotate: (1) Opening: Before love, speakers were "children and infants" ("If ever any beauty I did see, / Which I desired, and got, it was but a dream of thee"), suggesting love completes yearning; (2) Central conceit: love creates self-contained world ("My face in thine eye, thine in mine appears"); (3) Paradox: worldly world becomes irrelevant ("Let maps to other, worlds on worlds have shown, / Let us possess one world"), their love is the only reality; (4) Metaphysical argument: shared souls mean neither can die without the other (absolute unity); (5) Form: three stanzas of logical argument despite emotional content. Discuss: How does metaphysical wit express transformation? PART 3 (12 mins): Comparison. Both poets express love as transformative totality, but via different forms: Barrett Browning catalogues infinite expansion, Donne uses paradoxical logic. Both suggest love creates completeness. Write paragraph: "Both Barrett Browning and Donne present love as transcendent and complete, but where Barrett Browning uses Romantic catalogue to suggest love\'s infinite expansion, Donne employs metaphysical paradox to argue that two lovers create an entire self-contained universe, suggesting love\'s transformative power operates differently in Romantic and metaphysical traditions."',
    differentiation: {
      support:
        "Catalogue structure highlighted in Barrett Browning. Donne's conceit visually marked. Annotation guides with examples.",
      core: 'Independent annotation. Identify catalogue vs paradox techniques. Paragraph with quotations.',
      stretch:
        'Write second paragraph: "Both poets claim love is complete and sufficient—do they convince you? Which argument (infinite expansion vs paradoxical containment) seems more true to human experience?"',
    },
    resources: [
      'Both poems',
      'Annotation guides',
      'Catalogue explanation',
      'Metaphysical conceit explanation',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: 'How Complete Is Love?',
    duration: '5 minutes',
    instructions:
      'Both poets claim love is total and self-sufficient. Students discuss: Is this healthy? Both poems were written for specific beloved partners. What pressure does totality place on relationships?',
    differentiation: {
      support: 'Class discussion.',
      core: 'Pair discussion with notes.',
      stretch: 'Critical reflection: Does demanding total love lead to healthy relationships?',
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Barrett Browning and Donne express the transformative and transcendent nature of love."',
  resourcesNeeded: [
    'Both poems',
    'Annotation guides',
    'Catalogue explanation',
    'Metaphysical conceit explanation',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Technique analysis (catalogue vs conceit)',
    'Form analysis',
    'Paragraph quality',
    'Critical reflection',
    'Timed essay',
  ],
  keyVocabulary: [
    'catalogue',
    'transcendent',
    'completeness',
    'metaphysical conceit',
    'paradox',
    'transformation',
    'Romantic vs metaphysical',
  ],
  sendAdaptations:
    'Colour-code catalogue items in Barrett Browning. Highlight paradox structure in Donne. Simplify metaphysical terminology. Use visual comparison of expansion (Browning) vs containment (Donne).',
  comparisonTechniques: [
    'Technique (catalogue vs paradox)',
    'Form (sonnet vs three stanzas)',
    'Approach (Romantic expansion vs metaphysical logic)',
    'Completeness (infinite vs self-contained)',
  ],
  examPractice: 'Full timed 32-mark essay.',
}

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — LESSON 9
// ════════════════════════════════════════════════════════════════════════════

const edexcelRelationshipsLesson9: PoetryLesson = {
  id: 'edex-rel-09',
  // NOTE: 'The Clod and the Pebble' (Blake) and 'Absent Love' (Meredith) are NOT
  // in the canonical Edexcel UK GCSE 1ET0 Relationships cluster. Retagged as a
  // cross-board general comparison lesson.
  title:
    'The Clod and the Pebble vs Absent Love: Self-Sacrifice vs Bitterness in Love (cross-board comparison)',
  poems: [
    'The Clod and the Pebble by William Blake',
    'Absent Love (from "Modern Love" sequence) by George Meredith',
  ],
  anthology: 'Relationships (cross-board comparison practice)',
  examBoard: 'General (cross-board)',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    "Analyse Blake's complex presentation of love's selflessness and cruelty",
    "Examine Meredith's bitter reflection on unreciprocated love",
    'Compare love as sacrifice (Blake) with love as wound (Meredith)',
    'Explore how form (dialogue vs monologue) creates meaning',
    'Develop understanding of ambiguity and competing interpretations',
  ],
  starterActivity: {
    title: "Love's Price: When Does Self-Sacrifice Become Cruelty?",
    duration: '8 minutes',
    instructions:
      'Scenario: Lover says, "I\'d do anything for you, give up everything." Is this beautiful or manipulative? Blake shows both: clod celebrates self-sacrifice, pebble reveals selfish gain. Link to how love can hurt through demands.',
    resources: ['Scenario cards'],
  },
  mainActivity: {
    title: 'Selflessness, Cruelty & Bitterness: Competing Perspectives',
    duration: '72 minutes',
    instructions:
      "PART 1 (30 mins): Read The Clod and the Pebble (Blake uses dialogue form). Annotate: (1) Clod sings: love is self-sacrifice, renouncing self, putting beloved first (\"Love seeketh not Itself to please\"); (2) Pebble sings different song: love is mutual gain, demands reciprocity, celebrates selfishness (\"Love seeketh only Self to please\"); (3) Structure: dialogue creates ambiguity—which voice is Blake's? Neither? Both?; (4) Setting: pastoral (clod on field, pebble on beach) suggests natural law being debated; (5) Final image: clod is trodden, weakened—self-sacrifice makes one vulnerable. Discuss: Blake's genius is refusing to endorse either view fully. Is self-sacrifice noble or naive? Is selfishness cruel or realistic? PART 2 (30 mins): Read Meredith excerpt. Bitter reflection on love's failure. Annotate: (1) Speaker burned by love's demands; (2) Absence of beloved intensifies wound rather than healing it; (3) Language of bitterness: love becomes \"poison\" rather than healing; (4) Form: monologue (unlike Blake's dialogue) shows single, wounded perspective; (5) Paradox: absence should bring relief but instead compounds pain. Discuss: Unlike Blake's debate, Meredith shows love's consequences: sacrifice goes unreciprocated, self-sacrifice becomes self-harm. PART 3 (12 mins): Comparison. Blake debates love's nature philosophically (selflessness vs selfishness), Meredith shows real consequences (unreciprocated sacrifice as wound). Different forms reflect: dialogue (Blake) allows competing views; monologue (Meredith) shows trapped perspective. Write paragraph: \"Blake's dialogue form presents competing visions of love—the clod's self-sacrifice versus the pebble's selfishness—creating ambiguity about which serves love best, while Meredith's monologue reveals the actual consequence: unreciprocated sacrifice becomes a wound that absence only deepens, suggesting Blake's clod ultimately suffers the pebble's cruelty.\"",
    differentiation: {
      support:
        "Blake's two voices colour-coded (clod/pebble). Meredith's bitterness highlighted. Annotation guides with examples.",
      core: 'Independent annotation. Identify ambiguity (Blake) vs certainty (Meredith). Paragraph with quotations.',
      stretch:
        'Write second paragraph: "Is Blake ultimately warning us, or does he romanticize the clod\'s suffering? Can you justify the clod\'s position, or does Meredith prove it wrong?"',
    },
    resources: [
      'Both poems',
      'Annotation guides',
      'Dialogue structure explanation',
      'Paragraph frame',
    ],
  },
  plenary: {
    title: "The Clod's Fate: Blake vs Meredith",
    duration: '5 minutes',
    instructions:
      "If Blake's clod met Meredith's lover: Would the clod understand the wound? Does self-sacrifice inevitably lead to Meredith's bitterness? Students debate whether Blake is warning or glorifying self-sacrifice.",
    differentiation: {
      support: 'Class discussion.',
      core: 'Pair debate with positions.',
      stretch:
        "Which poet better understands love—Blake's philosophical debate or Meredith's bitter wisdom?\"",
    },
  },
  homework:
    'Timed 32-mark comparison (40 mins): "Compare how Blake and Meredith present sacrifice, selfishness, and pain in love."',
  resourcesNeeded: [
    'Both poems',
    'Annotation guides',
    'Dialogue structure explanation',
    'Paragraph frame',
    'Timer',
  ],
  assessmentOpportunities: [
    'Ambiguity identification (Blake)',
    'Tone analysis (Meredith)',
    'Form analysis',
    'Paragraph quality',
    'Debate participation',
    'Timed essay',
  ],
  keyVocabulary: [
    'self-sacrifice',
    'dialogue',
    'monologue',
    'ambiguity',
    'bitterness',
    'reciprocity',
    'selfishness',
    'philosophical',
  ],
  sendAdaptations:
    "Colour-code Blake's two voices (distinct colours for clod/pebble). Highlight Meredith's bitter language (metaphors of wound/poison). Simplify philosophical debate terminology. Offer audio versions.",
  comparisonTechniques: [
    'Form (dialogue vs monologue)',
    'Perspective (debate vs individual)',
    'Conclusion (ambiguous vs bitter)',
    'Sacrifice (noble vs self-harm)',
  ],
  examPractice: "Full timed 32-mark essay evaluating competing views on love's cost.",
}

// ════════════════════════════════════════════════════════════════════════════
// EDEXCEL RELATIONSHIPS — LESSON 10
// ════════════════════════════════════════════════════════════════════════════

const edexcelRelationshipsLesson10: PoetryLesson = {
  id: 'edex-rel-10',
  title: 'Unseen Poetry Technique: Analyzing Two Unknown Love Poems in Exam Conditions',
  poems: ['(Two contemporary/unfamiliar poems provided in exam)'],
  anthology: 'Relationships',
  examBoard: 'Edexcel',
  yearGroup: '10-11',
  duration: '1.5 hours',
  learningObjectives: [
    'Apply all analytical techniques learned across anthology to unfamiliar poems',
    'Develop rapid text analysis under timed exam conditions',
    'Practice sustained comparison of two poems without prior study',
    'Identify form, voice, imagery, and tone in unfamiliar contexts',
    'Write sophisticated comparison responding to unseen poetry prompt',
  ],
  starterActivity: {
    title: 'First Impressions: What Do Unknown Poems Teach Us?',
    duration: '8 minutes',
    instructions:
      'Display two short, unfamiliar love poems (not anthology poems). Students write first impression (30 seconds each): What do they notice? Form? Tone? Emotion? Link: Unseen poetry requires flexibility and quick pattern recognition.',
    resources: ['Two short unfamiliar poems'],
  },
  mainActivity: {
    title: 'Timed Unseen Poetry Analysis & Comparison',
    duration: '72 minutes',
    instructions:
      "PART 1 (45 mins): Provide two unseen love poems (related thematically but contrasting in approach). Students complete timed analysis (40 mins): (1) Read both poems twice (5 mins total). (2) Annotate form, voice, imagery, tone (10 mins). (3) Identify comparison focus: What is similar/different about how they present love? (5 mins). (4) Write bullet-point plan for comparison essay (10 mins). (5) Write opening paragraph establishing comparison (10 mins). Poems should exemplify techniques learned: perhaps one dramatic monologue vs one lyric, or one celebrates love vs one critiques it, mirroring patterns from anthology study. PART 2 (27 mins): Class discussion of analysis. Students share observations: What techniques did you spot? What's the relationship between the two poems? Complete one model comparison paragraph together, with teacher facilitating. Discuss: How does unfamiliar context require slowing down and close reading? PART 3 (homework): Students complete full 32-mark essay at home, applying unseen poetry techniques.",
    differentiation: {
      support:
        'Provide annotation framework (form/voice/imagery/tone checklist). Comparison prompt provided with 3 suggested comparisons listed. Sentence starters for opening paragraph.',
      core: 'Open-ended analysis with annotation framework. Independent comparison identification. Full opening paragraph required.',
      stretch:
        'No framework; complete independent analysis. Write full opening and central paragraph (12 marks of 32). Evaluate how techniques work together to create meaning.',
    },
    resources: [
      'Two unseen poems (selected to exemplify anthology techniques)',
      'Annotation framework (or blank page for stretch)',
      'Timer',
      'Comparison prompt options (or open-ended)',
    ],
  },
  plenary: {
    title: 'Reflection: How Do You Tackle Unseen Poetry?',
    duration: '5 minutes',
    instructions:
      'Students discuss: What strategies helped? Read twice (why)? Annotate form first (why)? Identify tone (crucial). How does prior anthology study help recognize techniques? Consolidate exam technique: slow reading, careful annotation, form-focused thinking.',
    differentiation: {
      support: 'Teacher-guided reflection on useful strategies.',
      core: 'Pair discussion: strategies that worked, challenges faced.',
      stretch: 'Individual reflection: How will you approach unseen poetry in real exam?',
    },
  },
  homework:
    'Complete full 32-mark comparison essay (40 mins) responding to unseen poetry prompt, applying techniques learned across anthology.',
  resourcesNeeded: [
    'Two carefully selected unseen love poems',
    'Annotation framework (optional)',
    'Comparison prompt sheet',
    'Timer',
    'Blank essay paper or template',
  ],
  assessmentOpportunities: [
    'Timed analysis skills',
    'Annotation precision',
    'Comparison identification',
    'Opening paragraph quality',
    'Full essay (homework)',
  ],
  keyVocabulary: [
    'unseen poetry',
    'annotation',
    'form',
    'voice',
    'imagery',
    'tone',
    'comparison prompt',
    'inference',
  ],
  sendAdaptations:
    'Use annotation framework with checkboxes for form/voice/imagery/tone. Provide comparison prompt with suggested focuses. Allow additional 10 minutes for processing time if needed. Offer audio reading of poems (if accessible).',
  comparisonTechniques: [
    'Form contrast',
    'Tone opposition',
    'Imagery comparison',
    'Voice/perspective difference',
    'Emotional approach variation',
  ],
  examPractice:
    'Full timed 32-mark unseen poetry comparison essay (homework), simulating real exam conditions.',
}

// ════════════════════════════════════════════════════════════════════════════
// FINAL EXPORT: All 20 Lessons
// ════════════════════════════════════════════════════════════════════════════

export const poetryAnthologyPlans = [
  // AQA Power & Conflict (5 lessons covering all 5 poem pairs)
  aqaPowerConflictLesson1, // Ozymandias/London
  aqaPowerConflictLesson2, // Extract from The Prelude/Exposure
  aqaPowerConflictLesson3, // Bayonet Charge/Remains
  aqaPowerConflictLesson4, // Poppies/War Photographer
  aqaPowerConflictLesson5, // Kamikaze/Checking Out Me History
  // Edexcel Relationships (10 lessons covering key poems and comparison techniques)
  edexcelRelationshipsLesson1, // Sonnet 43/When We Two Parted
  edexcelRelationshipsLesson2, // Love's Philosophy/Neutral Tones
  edexcelRelationshipsLesson3, // Letters from Yorkshire/The Farmer's Bride
  edexcelRelationshipsLesson4, // Porphyria's Lover/First Love
  edexcelRelationshipsLesson5, // She Walks in Beauty/Modern Love
  edexcelRelationshipsLesson6, // Hasty Resolution/Upon Westminster Bridge
  edexcelRelationshipsLesson7, // A Woman to Her Lover/Ballad of the White Horse
  edexcelRelationshipsLesson8, // How Do I Love Thee/The Good-Morrow
  edexcelRelationshipsLesson9, // The Clod and the Pebble/Absent Love
  edexcelRelationshipsLesson10, // Unseen Poetry Technique
]

// Export for use in lesson planning applications
export default poetryAnthologyPlans
