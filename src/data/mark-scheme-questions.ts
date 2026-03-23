/**
 * Question-level mark scheme data for all GCSE English exam boards.
 * Each entry describes a single question with its level descriptors,
 * top tips, and common mistakes — designed for the mark scheme browser tool.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export interface MarkSchemeLevel {
  level: number
  marks: string
  descriptor: string
}

export interface MarkScheme {
  id: string
  board: string
  subject: 'Language' | 'Literature'
  paper: string
  question: string
  totalMarks: number
  levels: MarkSchemeLevel[]
  topTips: string[]
  commonMistakes: string[]
  exampleAnnotations?: string
}

// ── AQA English Language ─────────────────────────────────────────────────────

const aqaLanguagePaper1: MarkScheme[] = [
  {
    id: 'aqa-lang-p1-q1',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 1: Explorations in Creative Reading and Writing',
    question: 'Q1 — List four things (AO1)',
    totalMarks: 4,
    levels: [
      { level: 1, marks: '1', descriptor: 'Identifies one correct piece of explicit information from the specified section of the source.' },
      { level: 2, marks: '2', descriptor: 'Identifies two correct pieces of explicit information from the specified section.' },
      { level: 3, marks: '3', descriptor: 'Identifies three correct pieces of explicit information from the specified section.' },
      { level: 4, marks: '4', descriptor: 'Identifies four correct pieces of explicit information from the specified section.' },
    ],
    topTips: [
      'Read the specified lines carefully — only information from those lines counts.',
      'Keep answers short and clear. Full sentences are not required.',
      'Quote or paraphrase directly from the text.',
      'This is a retrieval question — no inference or analysis needed.',
    ],
    commonMistakes: [
      'Using information from outside the specified lines.',
      'Giving the same point twice in different words.',
      'Adding unnecessary analysis or explanation.',
      'Making inferences instead of listing explicit details.',
    ],
    exampleAnnotations: 'A good answer simply lists four distinct facts from the correct lines. For example: "The character is wearing a red coat" (1 mark). No analysis ticks — just factual accuracy.',
  },
  {
    id: 'aqa-lang-p1-q2',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 1: Explorations in Creative Reading and Writing',
    question: 'Q2 — Language analysis (AO2)',
    totalMarks: 8,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple, limited comment on the effect of language. Identifies simple language features with minimal or no explanation. Random or unsupported quotation.' },
      { level: 2, marks: '3-4', descriptor: 'Attempts to comment on the effect of language with some accurate use of subject terminology. Selects some relevant quotations. Identifies obvious language features with some explanation.' },
      { level: 3, marks: '5-6', descriptor: 'Clear explanation of the effects of language. Uses a range of accurate subject terminology. Selects appropriate quotations and explains their effect on the reader.' },
      { level: 4, marks: '7-8', descriptor: 'Perceptive, detailed analysis of the effects of language. Sophisticated use of precise subject terminology. Selects judicious quotations and analyses layers of meaning.' },
    ],
    topTips: [
      'Use the PEA/PETAL structure: Point, Evidence, Technique, Analysis, Link.',
      'Zoom in on specific words and phrases — avoid quoting long passages.',
      'Use subject terminology naturally, not forced (e.g. "the metaphor suggests..." not "I spotted a metaphor").',
      'Explore connotations and layers of meaning for top-level responses.',
      'Comment on the effect on the reader, not just what the writer does.',
    ],
    commonMistakes: [
      'Feature spotting without analysis (naming techniques but not explaining effects).',
      'Quoting too much text instead of zooming in on key words.',
      'Forgetting to comment on the effect on the reader.',
      'Using vague phrases like "makes the reader want to read on".',
      'Ignoring the specific focus of the question.',
    ],
    exampleAnnotations: 'Level 4 annotation: Multiple marginal ticks for perceptive points. "Excellent — explores connotation." "Sophisticated terminology used precisely." Level 2: "Some relevant comment" with "needs more on effect" noted.',
  },
  {
    id: 'aqa-lang-p1-q3',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 1: Explorations in Creative Reading and Writing',
    question: 'Q3 — Structure analysis (AO2)',
    totalMarks: 8,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple, limited comment on structural features. Identifies simple examples of structural choices with minimal or no explanation.' },
      { level: 2, marks: '3-4', descriptor: 'Some understanding of structural features. Attempts to comment on the effect of structural choices with some accuracy. Selects some relevant examples.' },
      { level: 3, marks: '5-6', descriptor: 'Clear understanding of structural features and how they achieve effects. Uses a range of relevant examples and explains how the writer has structured the text.' },
      { level: 4, marks: '7-8', descriptor: 'Perceptive, detailed analysis of structural features. Analyses the effects of the writer\'s structural choices at both whole-text and sentence level with sophistication.' },
    ],
    topTips: [
      'Think about the whole text: beginning, middle, end — how does focus shift?',
      'Consider narrative perspective, focus shifts, pace changes, and paragraph length.',
      'Use structural terminology: chronological, cyclical, foreshadowing, juxtaposition, climax.',
      'Discuss both whole-text and sentence-level structural choices for top marks.',
      'Explain WHY the writer structures the text this way — what effect does it create?',
    ],
    commonMistakes: [
      'Writing about language features instead of structure.',
      'Only discussing the beginning and end without addressing the middle.',
      'Listing structural features without analysing their effect.',
      'Confusing structure with language analysis.',
      'Not using structural terminology.',
    ],
    exampleAnnotations: 'Level 4: "Excellent whole-text awareness — tracks the shift in focus perceptively." "Analyses sentence-level structure too." Level 2: "Identifies opening/ending but limited analysis of effect."',
  },
  {
    id: 'aqa-lang-p1-q4',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 1: Explorations in Creative Reading and Writing',
    question: 'Q4 — Evaluation (AO4)',
    totalMarks: 20,
    levels: [
      { level: 1, marks: '1-5', descriptor: 'Simple, limited evaluation. Offers simple, personal opinions with little textual reference. Shows limited understanding of the focus of the statement.' },
      { level: 2, marks: '6-10', descriptor: 'Attempts an evaluative response with some relevant textual references. Makes some relevant comments in response to the statement. Identifies some relevant methods used by the writer.' },
      { level: 3, marks: '11-15', descriptor: 'Clear, relevant evaluation with well-chosen textual references. Responds clearly to the statement and develops a sustained viewpoint. Clearly explains the effect of writer\'s methods.' },
      { level: 4, marks: '16-20', descriptor: 'Perceptive, detailed evaluation. Develops a convincing and critical response to the statement. Analyses the effect of a range of writer\'s methods with precise, judicious textual references.' },
    ],
    topTips: [
      'Engage directly with the statement — agree, disagree, or offer a nuanced view.',
      'Use evidence from across the whole extract, not just one section.',
      'Evaluate the writer\'s methods: language, structure, and form.',
      'Offer a personal, critical response — "I think... because the writer...".',
      'This is worth 20 marks — spend adequate time (approx. 20 minutes).',
      'Balance your response: consider how far you agree AND disagree with the statement.',
    ],
    commonMistakes: [
      'Ignoring the statement and just analysing the text generally.',
      'Only using evidence from one part of the extract.',
      'Not explaining the effect of the writer\'s methods.',
      'Writing a language analysis answer instead of evaluating.',
      'Spending too little time on this high-mark question.',
    ],
    exampleAnnotations: 'Level 4: "Convincing critical engagement with the statement." "Perceptive selection of evidence from across the text." "Methods analysed with precision." Level 2: "Some engagement with statement but evaluation is underdeveloped."',
  },
  {
    id: 'aqa-lang-p1-q5',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 1: Explorations in Creative Reading and Writing',
    question: 'Q5 — Creative writing: descriptive or narrative (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content & Organisation (1-5): Simple, limited writing with little awareness of audience or purpose. Limited vocabulary and simple structural features. Technical Accuracy (1-5): Sentence demarcation sometimes accurate. Simple range of sentence forms. Some accurate basic spelling.' },
      { level: 2, marks: '11-20', descriptor: 'Content & Organisation (6-12): Some attempt to match register to purpose and audience. Some conscious crafting with some appropriate vocabulary. Some use of structural features. Technical Accuracy (6-10): Sentence demarcation mostly accurate. Some variety in sentence forms. Spelling of common words usually correct. Some accurate punctuation.' },
      { level: 3, marks: '21-30', descriptor: 'Content & Organisation (13-18): Writing is engaging, tone and style matched to purpose and audience. Increasingly sophisticated vocabulary and phrasing. Effective use of structural features. Technical Accuracy (11-14): Sentence demarcation consistently accurate. Good variety of sentence forms for effect. Spelling including complex words generally accurate. Good range of punctuation used accurately.' },
      { level: 4, marks: '31-40', descriptor: 'Content & Organisation (19-24): Compelling, convincing writing with extensive and ambitious vocabulary. Structural features used with sophisticated control. Compelling voice sustained throughout. Technical Accuracy (15-16): Wide range of sentence structures used accurately and with purpose. Spelling consistently accurate including irregular words. Full range of punctuation used with precision.' },
    ],
    topTips: [
      'Plan before writing: spend 5 minutes creating a clear structure.',
      'Use sensory language: sight, sound, smell, touch, taste.',
      'Vary sentence lengths for effect — short sentences for impact, longer for description.',
      'Use ambitious vocabulary but keep it natural — don\'t force it.',
      'Include a range of literary techniques: metaphor, simile, personification, symbolism.',
      'Focus on "showing not telling" — describe emotions through actions and setting.',
      'For narrative: create a clear beginning, development, and resolution.',
      'For descriptive: use a logical spatial or temporal structure.',
      'Leave time to proofread for SPaG errors.',
    ],
    commonMistakes: [
      'Not planning and losing structure halfway through.',
      'Using overly complex vocabulary incorrectly.',
      'Writing too much plot and not enough description/detail.',
      'Neglecting paragraphing and structural features.',
      'Comma splicing and run-on sentences.',
      'Rushing the ending due to poor time management.',
      'Forgetting that technical accuracy is worth 16 of the 40 marks.',
    ],
    exampleAnnotations: 'Content/Org Level 4: "Compelling opening — immediately engages." "Ambitious vocabulary used precisely." "Sophisticated structural control throughout." Tech Acc Level 4: "Consistently accurate SPaG." "Full range of punctuation used effectively."',
  },
  // Paper 2
  {
    id: 'aqa-lang-p2-q1',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 2: Writers\' Viewpoints and Perspectives',
    question: 'Q1 — True/false statements (AO1)',
    totalMarks: 4,
    levels: [
      { level: 1, marks: '1', descriptor: 'Identifies one correct true statement.' },
      { level: 2, marks: '2', descriptor: 'Identifies two correct true statements.' },
      { level: 3, marks: '3', descriptor: 'Identifies three correct true statements.' },
      { level: 4, marks: '4', descriptor: 'Identifies all four correct true statements.' },
    ],
    topTips: [
      'Read the statements carefully and check each one against the source text.',
      'Shade the boxes clearly — marks are for correct identification only.',
      'Only shade FOUR boxes. More or fewer will cost marks.',
      'This should take no more than 5 minutes.',
    ],
    commonMistakes: [
      'Shading more or fewer than four boxes.',
      'Not reading the statements carefully enough.',
      'Confusing information from Source A with Source B.',
      'Spending too long on this low-mark question.',
    ],
  },
  {
    id: 'aqa-lang-p2-q2',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 2: Writers\' Viewpoints and Perspectives',
    question: 'Q2 — Summary and synthesis (AO1)',
    totalMarks: 8,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple, limited statements about differences/similarities. Reference to one or both sources with little connection.' },
      { level: 2, marks: '3-4', descriptor: 'Some relevant statements about differences/similarities. Makes some links between the two sources with some textual references.' },
      { level: 3, marks: '5-6', descriptor: 'Clear, relevant summary of differences/similarities. Clear connections made between the two sources with well-chosen textual references.' },
      { level: 4, marks: '7-8', descriptor: 'Perceptive summary that synthesises differences/similarities. Makes perceptive connections between the sources with judicious textual references.' },
    ],
    topTips: [
      'This is a summary question — keep analysis of language to a minimum.',
      'Use connectives to compare: "Similarly...", "In contrast...", "However...".',
      'Use short, embedded quotations from BOTH sources.',
      'Make clear, direct comparisons — don\'t write about each source separately.',
      'Focus on the specific aspect the question asks about.',
    ],
    commonMistakes: [
      'Writing separate paragraphs about each source without comparing.',
      'Including detailed language analysis (this is not a language question).',
      'Only referring to one source.',
      'Copying out large sections of text instead of synthesising.',
    ],
  },
  {
    id: 'aqa-lang-p2-q3',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 2: Writers\' Viewpoints and Perspectives',
    question: 'Q3 — Language analysis (AO2)',
    totalMarks: 12,
    levels: [
      { level: 1, marks: '1-3', descriptor: 'Simple, limited comment on language. Identifies simple language features with limited or no subject terminology.' },
      { level: 2, marks: '4-6', descriptor: 'Some understanding of language. Comments on effect of language with some subject terminology. Selects some relevant quotations.' },
      { level: 3, marks: '7-9', descriptor: 'Clear understanding of language. Explains the effects of language clearly with a range of accurate subject terminology.' },
      { level: 4, marks: '10-12', descriptor: 'Detailed, perceptive analysis of language. Analyses the effects of language with sophisticated use of subject terminology. Selects judicious quotations.' },
    ],
    topTips: [
      'Focus on ONE source only (as specified in the question).',
      'Zoom in on individual words and phrases — close analysis scores highest.',
      'Explain connotations and associations of key words.',
      'Use a range of subject terminology naturally.',
      'Always link analysis back to the effect on the reader.',
    ],
    commonMistakes: [
      'Analysing the wrong source.',
      'Feature spotting without explaining effects.',
      'Quoting too much text at once.',
      'Using vague, generic comments about reader response.',
      'Forgetting subject terminology.',
    ],
  },
  {
    id: 'aqa-lang-p2-q4',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 2: Writers\' Viewpoints and Perspectives',
    question: 'Q4 — Comparison of viewpoints (AO3)',
    totalMarks: 16,
    levels: [
      { level: 1, marks: '1-4', descriptor: 'Simple, limited comparison. Makes simple cross-references of ideas between texts with little textual support.' },
      { level: 2, marks: '5-8', descriptor: 'Some comparison of ideas/perspectives. Makes some relevant comparisons with some textual references. Identifies some methods used to convey viewpoints.' },
      { level: 3, marks: '9-12', descriptor: 'Clear comparison of ideas/perspectives. Makes clear, relevant comparisons with well-chosen textual references. Clearly explains how methods are used to convey different viewpoints.' },
      { level: 4, marks: '13-16', descriptor: 'Perceptive comparison of ideas/perspectives. Analyses how methods are used with sophistication. Makes perceptive comparisons with judicious references.' },
    ],
    topTips: [
      'Compare throughout — don\'t write about Source A then Source B separately.',
      'Discuss both viewpoints AND the methods used to convey them.',
      'Use comparative connectives: "whereas", "in contrast", "similarly".',
      'Select evidence from both sources in every paragraph.',
      'This is the highest-mark reading question — spend around 20 minutes.',
    ],
    commonMistakes: [
      'Writing about each source in isolation without comparing.',
      'Only comparing viewpoints without discussing methods.',
      'Not using evidence from both sources.',
      'Spending too little time on this high-value question.',
      'Only identifying similarities OR differences, not both.',
    ],
  },
  {
    id: 'aqa-lang-p2-q5',
    board: 'AQA',
    subject: 'Language',
    paper: 'Paper 2: Writers\' Viewpoints and Perspectives',
    question: 'Q5 — Transactional writing: article, letter, speech, essay (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content & Organisation (1-5): Simple awareness of purpose and audience. Limited vocabulary. Simple structural features. Technical Accuracy (1-5): Sentence demarcation sometimes accurate. Simple sentence forms. Basic spelling mostly accurate.' },
      { level: 2, marks: '11-20', descriptor: 'Content & Organisation (6-12): Some adaptation to purpose/audience. Some use of persuasive/argumentative devices. Developing structural control. Technical Accuracy (6-10): Sentence demarcation mostly accurate. Some variety in sentence forms. Spelling usually correct.' },
      { level: 3, marks: '21-30', descriptor: 'Content & Organisation (13-18): Tone, style and register matched to purpose and audience. Range of persuasive/argumentative techniques. Effective structural features. Technical Accuracy (11-14): Sentence demarcation consistently accurate. Variety of sentence forms for effect. Spelling generally accurate.' },
      { level: 4, marks: '31-40', descriptor: 'Content & Organisation (19-24): Compelling, convincing communication. Extensive vocabulary deployed with precision. Sophisticated structural control. Technical Accuracy (15-16): Wide range of sentence structures. Spelling consistently accurate. Full punctuation range used precisely.' },
    ],
    topTips: [
      'Match form features: article (headline, subheadings), letter (addresses, sign-off), speech (rhetorical questions, direct address).',
      'Use a range of persuasive techniques: DAFOREST (Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Three/rule of three).',
      'Plan a clear argument structure: introduction, developed points, counter-argument, conclusion.',
      'Maintain a consistent tone and register throughout.',
      'Vary sentence structures for rhetorical effect.',
      'Technical accuracy is worth 16 marks — proofread carefully.',
    ],
    commonMistakes: [
      'Ignoring the specified form (writing a generic essay when asked for a letter).',
      'Losing the argumentative/persuasive thread.',
      'Being too informal or too aggressive in tone.',
      'Not varying sentence structures or punctuation.',
      'Forgetting to proofread for SPaG.',
      'Running out of time due to poor planning.',
    ],
    exampleAnnotations: 'Content/Org Level 4: "Compelling opening engages reader immediately." "Sustained, convincing register." "Sophisticated use of counter-argument." Tech Acc Level 4: "Consistently accurate." "Full punctuation range used for rhetorical effect."',
  },
]

// ── AQA English Literature ───────────────────────────────────────────────────

const aqaLiterature: MarkScheme[] = [
  {
    id: 'aqa-lit-p1-sa',
    board: 'AQA',
    subject: 'Literature',
    paper: 'Paper 1: Shakespeare and the 19th-Century Novel',
    question: 'Section A — Shakespeare: extract + essay (AO1, AO2, AO3, AO4)',
    totalMarks: 34,
    levels: [
      { level: 1, marks: '1-8', descriptor: 'Simple, limited personal response to text. Simple awareness of language, form and structure with limited subject terminology. Limited reference to context. Simple use of references from the text.' },
      { level: 2, marks: '9-16', descriptor: 'Some personal response with some relevant references. Some understanding of how language, form and structure create meaning. Some awareness of relevant context. References support some points.' },
      { level: 3, marks: '17-24', descriptor: 'Clear, explained personal response with well-chosen references. Clear understanding of writer\'s methods with appropriate terminology. Clear understanding of contextual factors. References effectively integrated.' },
      { level: 4, marks: '25-30', descriptor: 'Critical, exploratory, conceptualised response. Analysis of writer\'s methods with precise, sophisticated terminology. Detailed, perceptive understanding of context. Judicious, integrated references from across the text. (+4 marks for SPaG)' },
    ],
    topTips: [
      'Start with the extract: analyse language and structure closely.',
      'Then move beyond the extract to discuss the wider play.',
      'Use context naturally — weave it into your analysis, don\'t bolt it on.',
      'AO4 (SPaG) gives 4 extra marks — write clearly and accurately.',
      'Use the extract as a springboard, not the entirety of your response.',
      'Consider the significance of the extract within the play as a whole.',
    ],
    commonMistakes: [
      'Only writing about the extract without discussing the wider play.',
      'Bolting context on at the end instead of integrating it.',
      'Retelling the plot instead of analysing.',
      'Not using subject terminology for language/form/structure analysis.',
      'Ignoring SPaG marks — sloppy spelling/grammar loses 4 marks.',
    ],
    exampleAnnotations: 'Level 4: "Perceptive analysis of language in extract." "Excellent links to wider play." "Context woven seamlessly into argument." SPaG: "Consistently accurate with sophisticated expression."',
  },
  {
    id: 'aqa-lit-p1-sb',
    board: 'AQA',
    subject: 'Literature',
    paper: 'Paper 1: Shakespeare and the 19th-Century Novel',
    question: 'Section B — 19th-century novel: extract + essay (AO1, AO2, AO3)',
    totalMarks: 30,
    levels: [
      { level: 1, marks: '1-7', descriptor: 'Simple, limited personal response. Simple awareness of writer\'s methods with limited terminology. Limited reference to relevant contexts.' },
      { level: 2, marks: '8-14', descriptor: 'Some personal response with some textual references. Some understanding of writer\'s methods. Some awareness of relevant context.' },
      { level: 3, marks: '15-22', descriptor: 'Clear, explained response with well-chosen references. Clear understanding of writer\'s methods with appropriate terminology. Clear understanding of contexts.' },
      { level: 4, marks: '23-30', descriptor: 'Critical, exploratory response. Sophisticated analysis of writer\'s methods. Detailed, perceptive understanding of contexts. Judicious references integrated throughout.' },
    ],
    topTips: [
      'Analyse the extract in detail first, then link to the wider novel.',
      'Consider 19th-century contextual factors: social class, gender, industrialisation, religion.',
      'Track character development and thematic significance across the whole novel.',
      'Use precise terminology when discussing narrative techniques.',
      'Plan your response to ensure a balanced discussion of extract and wider text.',
    ],
    commonMistakes: [
      'Only focusing on the extract without discussing the rest of the novel.',
      'Adding context as a separate paragraph rather than integrating it.',
      'Narrative retelling instead of analytical response.',
      'Not knowing the novel well enough to move beyond the extract.',
      'Ignoring form and structure — focusing only on language.',
    ],
  },
  {
    id: 'aqa-lit-p2-sa',
    board: 'AQA',
    subject: 'Literature',
    paper: 'Paper 2: Modern Texts and Poetry',
    question: 'Section A — Modern text: essay (no extract) (AO1, AO2, AO3, AO4)',
    totalMarks: 34,
    levels: [
      { level: 1, marks: '1-8', descriptor: 'Simple personal response with limited references. Simple comment on writer\'s methods. Limited awareness of context. Simple use of SPaG.' },
      { level: 2, marks: '9-16', descriptor: 'Some personal response with some references. Some comment on writer\'s methods with some terminology. Some awareness of context. Reasonable SPaG accuracy.' },
      { level: 3, marks: '17-24', descriptor: 'Clear, well-explained response with effective references. Clear analysis of writer\'s methods with appropriate terminology. Clear understanding of context. Good SPaG accuracy.' },
      { level: 4, marks: '25-30', descriptor: 'Critical, exploratory, conceptualised response. Sophisticated analysis of writer\'s methods. Perceptive understanding of context. Judicious references. (+4 SPaG marks)' },
    ],
    topTips: [
      'No extract is provided — you MUST know the text thoroughly.',
      'Learn key quotations by heart for each character and theme.',
      'Structure your essay thematically, not chronologically.',
      'Integrate context into analytical points — don\'t separate it.',
      'Answer the specific question — don\'t write a pre-prepared essay.',
      'SPaG marks (4) reward clear, accurate, sophisticated expression.',
    ],
    commonMistakes: [
      'Writing a pre-prepared answer that doesn\'t address the specific question.',
      'Not using enough quotations due to poor memorisation.',
      'Retelling the plot instead of analysing.',
      'Adding context as an afterthought.',
      'Running out of time — this section needs careful time management.',
    ],
  },
  {
    id: 'aqa-lit-p2-sb',
    board: 'AQA',
    subject: 'Literature',
    paper: 'Paper 2: Modern Texts and Poetry',
    question: 'Section B — Poetry comparison (AO1, AO2, AO3)',
    totalMarks: 30,
    levels: [
      { level: 1, marks: '1-7', descriptor: 'Simple personal response to poems. Simple identification of methods. Limited comparison between poems.' },
      { level: 2, marks: '8-14', descriptor: 'Some understanding of poems with references. Some comment on methods in both poems. Some comparison of ideas and methods.' },
      { level: 3, marks: '15-22', descriptor: 'Clear understanding with well-chosen references. Clear analysis of methods in both poems. Clear, sustained comparison throughout.' },
      { level: 4, marks: '23-30', descriptor: 'Exploratory, critical response. Sophisticated analysis of methods. Perceptive, detailed comparison with integrated references from both poems.' },
    ],
    topTips: [
      'Compare throughout — don\'t write about each poem separately.',
      'Analyse methods (language, form, structure) in BOTH poems.',
      'Choose a second poem that allows meaningful comparison.',
      'Use comparative connectives to link points.',
      'Consider how context shapes each poet\'s perspective.',
      'Know your anthology poems well — including less popular choices.',
    ],
    commonMistakes: [
      'Writing about one poem then the other without comparing.',
      'Choosing a poor comparison poem that limits discussion.',
      'Only comparing content/themes without discussing methods.',
      'Not knowing the poems well enough to select useful quotations.',
      'Unbalanced response — spending too long on one poem.',
    ],
  },
  {
    id: 'aqa-lit-p2-sc',
    board: 'AQA',
    subject: 'Literature',
    paper: 'Paper 2: Modern Texts and Poetry',
    question: 'Section C — Unseen poetry: single poem (Q27) + comparison (Q28)',
    totalMarks: 32,
    levels: [
      { level: 1, marks: '1-8', descriptor: 'Q27 (24 marks) Level 1 (1-6): Simple personal response with limited references. Simple identification of methods. Q28 (8 marks) Level 1 (1-2): Simple, limited comparison.' },
      { level: 2, marks: '9-16', descriptor: 'Q27 Level 2 (7-12): Some understanding with some references. Some comment on methods. Q28 Level 2 (3-4): Some comparison of ideas and/or methods.' },
      { level: 3, marks: '17-24', descriptor: 'Q27 Level 3 (13-18): Clear understanding with well-chosen references. Clear analysis of methods. Q28 Level 3 (5-6): Clear comparison of ideas and methods in both poems.' },
      { level: 4, marks: '25-32', descriptor: 'Q27 Level 4 (19-24): Exploratory, critical analysis. Sophisticated discussion of methods. Q28 Level 4 (7-8): Perceptive comparison with integrated analysis of both poems.' },
    ],
    topTips: [
      'Q27 (24 marks): Spend about 20 minutes. Read the poem twice before writing.',
      'Q28 (8 marks): Spend about 15 minutes. Focus on comparison, not detailed analysis.',
      'Identify the tone, mood, and message before diving into technique.',
      'Consider form and structure as well as language.',
      'For Q28, focus on similarities AND differences.',
      'Don\'t panic — apply the same analytical skills you use for anthology poems.',
    ],
    commonMistakes: [
      'Spending too long on Q27 and rushing Q28.',
      'Only discussing what the poem is "about" without analysing methods.',
      'Ignoring form and structure in the unseen poem.',
      'Not comparing in Q28 — just writing about the second poem.',
      'Over-complicating simple poems — trust your first reading.',
    ],
  },
]

// ── Edexcel English Language ─────────────────────────────────────────────────

const edexcelLanguage: MarkScheme[] = [
  {
    id: 'edexcel-lang-p1-q1',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 1: Fiction and Imaginative Writing',
    question: 'Q1 — Short comprehension questions (AO1)',
    totalMarks: 4,
    levels: [
      { level: 1, marks: '1', descriptor: 'Identifies one relevant piece of information from the text.' },
      { level: 2, marks: '2', descriptor: 'Identifies two relevant pieces of information.' },
      { level: 3, marks: '3', descriptor: 'Identifies three relevant pieces of information.' },
      { level: 4, marks: '4', descriptor: 'Identifies all four relevant pieces of information accurately.' },
    ],
    topTips: [
      'Short, focused answers — no need for full sentences.',
      'Only use information from the specified section.',
      'Each answer should identify a distinct piece of information.',
    ],
    commonMistakes: [
      'Going beyond the specified lines.',
      'Repeating the same point in different words.',
      'Adding unnecessary analysis.',
    ],
  },
  {
    id: 'edexcel-lang-p1-q2',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 1: Fiction and Imaginative Writing',
    question: 'Q2 — Language analysis of a short extract (AO2)',
    totalMarks: 8,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Limited comment on language. Simple identification of features with little explanation.' },
      { level: 2, marks: '3-4', descriptor: 'Some comment on language effects. Some use of subject terminology. Selects some relevant evidence.' },
      { level: 3, marks: '5-6', descriptor: 'Clear explanation of language effects with accurate terminology. Well-chosen evidence with clear analysis.' },
      { level: 4, marks: '7-8', descriptor: 'Perceptive analysis of language with precise, sophisticated terminology. Explores layers of meaning with judicious evidence.' },
    ],
    topTips: [
      'Focus on the specific lines referenced in the question.',
      'Explore connotations of individual words for top marks.',
      'Use terminology precisely and naturally.',
      'Always explain the effect on the reader.',
    ],
    commonMistakes: [
      'Feature spotting without analysis.',
      'Quoting too much text.',
      'Not explaining effects on the reader.',
      'Using terminology inaccurately.',
    ],
  },
  {
    id: 'edexcel-lang-p1-q3',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 1: Fiction and Imaginative Writing',
    question: 'Q3 — Whole text analysis (AO2)',
    totalMarks: 12,
    levels: [
      { level: 1, marks: '1-3', descriptor: 'Simple, limited response. Simple comments on language and structure with minimal terminology.' },
      { level: 2, marks: '4-6', descriptor: 'Some understanding of language and structure. Some relevant comments with some terminology.' },
      { level: 3, marks: '7-9', descriptor: 'Clear analysis of language and structure across the whole text. Accurate use of terminology with clear explanations.' },
      { level: 4, marks: '10-12', descriptor: 'Perceptive, detailed analysis of language and structure across the whole text. Sophisticated terminology with exploration of effects.' },
    ],
    topTips: [
      'Cover the whole text — beginning, middle, and end.',
      'Analyse both language AND structure.',
      'Consider how meaning develops and shifts across the text.',
      'Select evidence from different parts of the text.',
    ],
    commonMistakes: [
      'Only analysing one section of the text.',
      'Ignoring structural features.',
      'Not tracking how the writer builds meaning across the text.',
    ],
  },
  {
    id: 'edexcel-lang-p1-q4',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 1: Fiction and Imaginative Writing',
    question: 'Q4 — Evaluation (AO4)',
    totalMarks: 16,
    levels: [
      { level: 1, marks: '1-4', descriptor: 'Simple, limited evaluation. Simple personal opinions with little textual reference.' },
      { level: 2, marks: '5-8', descriptor: 'Some evaluation with some relevant references. Some engagement with the focus of the question.' },
      { level: 3, marks: '9-12', descriptor: 'Clear evaluation with well-chosen references. Clear engagement with the question and writer\'s methods.' },
      { level: 4, marks: '13-16', descriptor: 'Perceptive, detailed evaluation. Convincing critical response with sophisticated analysis of writer\'s methods.' },
    ],
    topTips: [
      'Engage directly with the statement or question focus.',
      'Support your evaluation with evidence and method analysis.',
      'Consider multiple perspectives — agree and/or disagree.',
      'Use evidence from across the text.',
    ],
    commonMistakes: [
      'Not engaging with the evaluation focus.',
      'Only analysing without offering a personal viewpoint.',
      'Using evidence from only one section.',
    ],
  },
  {
    id: 'edexcel-lang-p1-q5',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 1: Fiction and Imaginative Writing',
    question: 'Q5 — Imaginative writing (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content (1-6): Limited awareness of purpose and audience. Simple vocabulary. Simple structural features. Technical (1-4): Simple sentence forms. Basic spelling.' },
      { level: 2, marks: '11-20', descriptor: 'Content (7-12): Some awareness of purpose/audience. Some crafting of vocabulary and structure. Technical (5-8): Some variety in sentence forms. Mostly accurate spelling.' },
      { level: 3, marks: '21-30', descriptor: 'Content (13-18): Clear, engaging writing matched to purpose. Effective vocabulary and structural features. Technical (9-12): Good variety of sentence forms. Accurate spelling and punctuation.' },
      { level: 4, marks: '31-40', descriptor: 'Content (19-24): Compelling, convincing imaginative writing. Extensive, ambitious vocabulary. Sophisticated structural control. Technical (13-16): Wide range of accurate sentence structures. Consistent accuracy in spelling and punctuation.' },
    ],
    topTips: [
      'Plan your response — even 3-5 minutes of planning improves quality significantly.',
      'Use the stimulus image or text as a starting point, not a constraint.',
      'Vary sentence structures: simple, compound, complex, minor.',
      'Use a range of literary techniques naturally.',
      'Focus on creating atmosphere and engaging the reader.',
      'Leave 5 minutes to check spelling, punctuation, and grammar.',
    ],
    commonMistakes: [
      'Not planning, leading to a rambling narrative.',
      'Over-reliance on dialogue.',
      'Neglecting description in favour of plot.',
      'Poor time management — rushing the ending.',
      'Ignoring technical accuracy.',
    ],
  },
  {
    id: 'edexcel-lang-p2-q1',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 2: Non-Fiction and Transactional Writing',
    question: 'Q1 — Information retrieval (AO1)',
    totalMarks: 4,
    levels: [
      { level: 1, marks: '1', descriptor: 'Identifies one relevant piece of information.' },
      { level: 2, marks: '2', descriptor: 'Identifies two relevant pieces of information.' },
      { level: 3, marks: '3', descriptor: 'Identifies three relevant pieces.' },
      { level: 4, marks: '4', descriptor: 'Identifies all relevant pieces of information accurately.' },
    ],
    topTips: [
      'Keep answers concise and directly from the text.',
      'Only refer to the specified source.',
    ],
    commonMistakes: [
      'Using information from the wrong source.',
      'Giving the same answer in different words.',
    ],
  },
  {
    id: 'edexcel-lang-p2-q2',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 2: Non-Fiction and Transactional Writing',
    question: 'Q2 — Summary and synthesis (AO1)',
    totalMarks: 8,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple statements about one or both texts. Limited textual reference.' },
      { level: 2, marks: '3-4', descriptor: 'Some relevant points from both texts. Some comparison with textual references.' },
      { level: 3, marks: '5-6', descriptor: 'Clear synthesis from both texts. Well-chosen references with clear comparison.' },
      { level: 4, marks: '7-8', descriptor: 'Perceptive synthesis. Judicious references with sophisticated comparison.' },
    ],
    topTips: [
      'Synthesise — draw points from both texts together.',
      'Use comparative connectives throughout.',
      'Keep to the specific focus of the question.',
      'Short, embedded quotations work best.',
    ],
    commonMistakes: [
      'Writing about each source separately.',
      'Including language analysis.',
      'Only referencing one source.',
    ],
  },
  {
    id: 'edexcel-lang-p2-q3',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 2: Non-Fiction and Transactional Writing',
    question: 'Q3 — Language analysis (AO2)',
    totalMarks: 12,
    levels: [
      { level: 1, marks: '1-3', descriptor: 'Simple identification of language features. Limited terminology and explanation.' },
      { level: 2, marks: '4-6', descriptor: 'Some comment on language effects with some terminology.' },
      { level: 3, marks: '7-9', descriptor: 'Clear analysis with accurate terminology and well-chosen evidence.' },
      { level: 4, marks: '10-12', descriptor: 'Perceptive, detailed analysis with sophisticated terminology and judicious evidence.' },
    ],
    topTips: [
      'Focus on the specified source only.',
      'Explore connotations and layers of meaning.',
      'Link language choices to the writer\'s purpose.',
    ],
    commonMistakes: [
      'Analysing the wrong source.',
      'Feature spotting without effect analysis.',
      'Not using subject terminology.',
    ],
  },
  {
    id: 'edexcel-lang-p2-q4',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 2: Non-Fiction and Transactional Writing',
    question: 'Q4 — Comparison of viewpoints (AO3)',
    totalMarks: 16,
    levels: [
      { level: 1, marks: '1-4', descriptor: 'Simple cross-references between texts. Limited comparison.' },
      { level: 2, marks: '5-8', descriptor: 'Some comparison of viewpoints with some references. Identifies some methods.' },
      { level: 3, marks: '9-12', descriptor: 'Clear comparison with well-chosen references. Clear analysis of how methods convey viewpoints.' },
      { level: 4, marks: '13-16', descriptor: 'Perceptive comparison. Sophisticated analysis of methods with judicious references from both texts.' },
    ],
    topTips: [
      'Compare throughout — integrate both sources in every paragraph.',
      'Discuss both viewpoints and methods.',
      'Use evidence from both sources.',
      'Spend appropriate time — this is a high-mark question.',
    ],
    commonMistakes: [
      'Writing about sources separately.',
      'Ignoring methods — only comparing ideas.',
      'Unbalanced use of evidence.',
    ],
  },
  {
    id: 'edexcel-lang-p2-q5',
    board: 'Edexcel',
    subject: 'Language',
    paper: 'Paper 2: Non-Fiction and Transactional Writing',
    question: 'Q5 — Transactional writing (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content (1-6): Limited purpose/audience awareness. Simple vocabulary/structure. Technical (1-4): Simple sentence forms. Basic spelling.' },
      { level: 2, marks: '11-20', descriptor: 'Content (7-12): Some purpose/audience awareness. Some persuasive devices. Technical (5-8): Some sentence variety. Mostly accurate.' },
      { level: 3, marks: '21-30', descriptor: 'Content (13-18): Clear, effective communication. Range of techniques. Technical (9-12): Good sentence variety. Accurate SPaG.' },
      { level: 4, marks: '31-40', descriptor: 'Content (19-24): Compelling communication with sophisticated control. Technical (13-16): Wide sentence range. Consistently accurate SPaG.' },
    ],
    topTips: [
      'Match the form: letter, article, speech, review — each has conventions.',
      'Use persuasive techniques purposefully.',
      'Maintain consistent register and tone.',
      'Plan a clear argumentative structure.',
      'Proofread for technical accuracy.',
    ],
    commonMistakes: [
      'Ignoring form conventions.',
      'Losing argumentative focus.',
      'Inconsistent tone or register.',
      'Poor technical accuracy.',
    ],
  },
]

// ── Edexcel English Literature ───────────────────────────────────────────────

const edexcelLiterature: MarkScheme[] = [
  {
    id: 'edexcel-lit-p1-sa',
    board: 'Edexcel',
    subject: 'Literature',
    paper: 'Paper 1: Shakespeare and Post-1914 Literature',
    question: 'Section A — Shakespeare: extract-based essay (AO1, AO2, AO3, AO4)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple, limited response. Simple comment on language/structure. Limited context. Basic SPaG.' },
      { level: 2, marks: '11-20', descriptor: 'Some personal response with references. Some analysis of methods. Some awareness of context. Reasonable SPaG.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear analysis of methods with terminology. Clear contextual understanding. Good SPaG.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated method analysis. Perceptive contextual understanding. Excellent SPaG.' },
    ],
    topTips: [
      'Start with close analysis of the extract, then broaden to the whole play.',
      'Use context to deepen analysis, not as a bolt-on.',
      'Cover language, form, and structure.',
      'SPaG quality contributes to your overall mark.',
    ],
    commonMistakes: [
      'Only discussing the extract without the wider play.',
      'Context added as a separate paragraph.',
      'Retelling the plot.',
      'Not using terminology.',
    ],
  },
  {
    id: 'edexcel-lit-p1-sb',
    board: 'Edexcel',
    subject: 'Literature',
    paper: 'Paper 1: Shakespeare and Post-1914 Literature',
    question: 'Section B — Post-1914 British play or novel (AO1, AO2, AO3, AO4)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple personal response. Simple identification of methods. Limited context. Basic SPaG.' },
      { level: 2, marks: '11-20', descriptor: 'Some response with references. Some method analysis. Some context. Reasonable SPaG.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear method analysis. Clear context. Good SPaG.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated analysis. Perceptive context. Excellent SPaG.' },
    ],
    topTips: [
      'You may or may not have an extract — check the question carefully.',
      'Select your own quotations from across the text.',
      'Integrate context meaningfully.',
      'Structure your essay around the question, not the plot.',
    ],
    commonMistakes: [
      'Writing a pre-prepared response.',
      'Not enough quotation evidence.',
      'Plot retelling.',
      'Ignoring the specific focus of the question.',
    ],
  },
  {
    id: 'edexcel-lit-p2-sa',
    board: 'Edexcel',
    subject: 'Literature',
    paper: 'Paper 2: 19th-Century Novel and Poetry since 1789',
    question: 'Section A — 19th-century novel: extract-based essay (AO1, AO2, AO3)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple response. Simple identification of language/structure. Limited context.' },
      { level: 2, marks: '11-20', descriptor: 'Some personal response. Some analysis of methods. Some context.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear analysis with terminology. Clear contextual understanding.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated analysis. Perceptive contextual insight.' },
    ],
    topTips: [
      'Closely analyse the extract before moving to the wider text.',
      'Consider 19th-century contexts: class, gender, morality, industrialisation.',
      'Balance extract analysis with wider text discussion.',
    ],
    commonMistakes: [
      'Spending all time on the extract.',
      'Not knowing the wider novel.',
      'Context as an afterthought.',
    ],
  },
  {
    id: 'edexcel-lit-p2-sb',
    board: 'Edexcel',
    subject: 'Literature',
    paper: 'Paper 2: 19th-Century Novel and Poetry since 1789',
    question: 'Section B — Poetry comparison from anthology (AO1, AO2, AO3, AO4)',
    totalMarks: 30,
    levels: [
      { level: 1, marks: '1-7', descriptor: 'Simple response to poems. Simple identification of methods. Limited comparison.' },
      { level: 2, marks: '8-14', descriptor: 'Some understanding with references. Some method analysis. Some comparison.' },
      { level: 3, marks: '15-22', descriptor: 'Clear understanding. Clear method analysis. Clear, sustained comparison.' },
      { level: 4, marks: '23-30', descriptor: 'Exploratory, critical response. Sophisticated method analysis. Perceptive comparison.' },
    ],
    topTips: [
      'Compare throughout — never write about poems separately.',
      'Choose a comparison poem that creates meaningful links.',
      'Analyse methods in both poems.',
      'Consider how context influences each poem.',
    ],
    commonMistakes: [
      'Writing about poems separately.',
      'Poor poem choice for comparison.',
      'Only comparing themes, not methods.',
    ],
  },
  {
    id: 'edexcel-lit-p2-sc',
    board: 'Edexcel',
    subject: 'Literature',
    paper: 'Paper 2: 19th-Century Novel and Poetry since 1789',
    question: 'Section C — Unseen poetry (AO1, AO2, AO4)',
    totalMarks: 30,
    levels: [
      { level: 1, marks: '1-7', descriptor: 'Simple response. Simple identification of language/structure. Limited comparison for part (b).' },
      { level: 2, marks: '8-14', descriptor: 'Some understanding. Some analysis. Some comparison for part (b).' },
      { level: 3, marks: '15-22', descriptor: 'Clear analysis with terminology. Clear comparison for part (b).' },
      { level: 4, marks: '23-30', descriptor: 'Perceptive analysis. Sophisticated comparison for part (b).' },
    ],
    topTips: [
      'Read each poem at least twice before writing.',
      'Identify tone and message first.',
      'Apply the same skills as for anthology poems.',
      'For part (b), focus on comparison rather than detailed analysis.',
    ],
    commonMistakes: [
      'Rushing into writing without understanding the poem.',
      'Only discussing content, not methods.',
      'Not comparing in part (b).',
    ],
  },
]

// ── OCR English Language ─────────────────────────────────────────────────────

const ocrLanguage: MarkScheme[] = [
  {
    id: 'ocr-lang-p1-q1',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 1: Communicating Information and Ideas',
    question: 'Q1 — Information retrieval and interpretation (AO1)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple identification of explicit information. Limited textual support.' },
      { level: 2, marks: '3-5', descriptor: 'Some relevant identification and interpretation. Some textual references.' },
      { level: 3, marks: '6-8', descriptor: 'Clear interpretation with well-chosen evidence. Secure inferences.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive interpretation with judiciously selected evidence. Sophisticated inferences.' },
    ],
    topTips: [
      'Read the question carefully — it may ask for explicit or implicit information.',
      'Support every point with textual evidence.',
      'Move beyond simple identification to interpretation for top marks.',
    ],
    commonMistakes: [
      'Not supporting points with evidence.',
      'Only identifying surface-level information.',
      'Misreading what the question asks for.',
    ],
  },
  {
    id: 'ocr-lang-p1-q2',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 1: Communicating Information and Ideas',
    question: 'Q2 — Language and structure analysis (AO2)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple comment on language or structure. Limited terminology.' },
      { level: 2, marks: '3-5', descriptor: 'Some comment on effects with some terminology. Some relevant examples.' },
      { level: 3, marks: '6-8', descriptor: 'Clear analysis of language and structure with accurate terminology.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive, detailed analysis with sophisticated terminology. Explores layers of meaning.' },
    ],
    topTips: [
      'Cover both language AND structure.',
      'Use terminology accurately and naturally.',
      'Explore effects on the reader.',
    ],
    commonMistakes: [
      'Only discussing language, ignoring structure.',
      'Feature spotting without effect analysis.',
      'Inaccurate terminology.',
    ],
  },
  {
    id: 'ocr-lang-p1-q3',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 1: Communicating Information and Ideas',
    question: 'Q3 — Comparison of texts (AO3)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple reference to one or both texts. Limited comparison.' },
      { level: 2, marks: '3-5', descriptor: 'Some comparison with some evidence. Identifies some similarities/differences.' },
      { level: 3, marks: '6-8', descriptor: 'Clear comparison with well-selected evidence from both texts.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive comparison evaluating how methods and contexts shape perspectives.' },
    ],
    topTips: [
      'Compare throughout — integrate both texts.',
      'Discuss both content and methods.',
      'Use comparative language throughout.',
    ],
    commonMistakes: [
      'Writing about texts separately.',
      'Only comparing content, not methods.',
      'Unbalanced use of sources.',
    ],
  },
  {
    id: 'ocr-lang-p1-q4',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 1: Communicating Information and Ideas',
    question: 'Q4 — Writing: persuade, argue, or advise (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content (1-6): Simple communication. Limited vocabulary. Technical (1-4): Basic accuracy.' },
      { level: 2, marks: '11-20', descriptor: 'Content (7-12): Some purpose/audience awareness. Some techniques. Technical (5-8): Some accuracy and variety.' },
      { level: 3, marks: '21-30', descriptor: 'Content (13-18): Clear, effective communication. Range of techniques. Technical (9-12): Good accuracy and variety.' },
      { level: 4, marks: '31-40', descriptor: 'Content (19-24): Compelling, sophisticated communication. Technical (13-16): Consistently accurate with wide range.' },
    ],
    topTips: [
      'Match the specified purpose: persuade, argue, or advise.',
      'Use appropriate rhetorical devices.',
      'Plan a clear structure.',
      'Vary sentence types for effect.',
      'Proofread for technical accuracy.',
    ],
    commonMistakes: [
      'Not matching the required purpose.',
      'No clear structure or argument.',
      'Poor technical accuracy.',
    ],
  },
  {
    id: 'ocr-lang-p2-q1',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 2: Exploring Effects and Impact',
    question: 'Q1 — Reading and understanding (AO1)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple identification with limited evidence.' },
      { level: 2, marks: '3-5', descriptor: 'Some understanding with some evidence.' },
      { level: 3, marks: '6-8', descriptor: 'Clear understanding with well-chosen evidence.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive understanding with judiciously selected evidence.' },
    ],
    topTips: [
      'Support all points with textual evidence.',
      'Move from identification to interpretation.',
    ],
    commonMistakes: [
      'Unsupported statements.',
      'Surface-level responses.',
    ],
  },
  {
    id: 'ocr-lang-p2-q2',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 2: Exploring Effects and Impact',
    question: 'Q2 — Language and structure analysis (AO2)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple comment on language/structure features.' },
      { level: 2, marks: '3-5', descriptor: 'Some comment on effects with some terminology.' },
      { level: 3, marks: '6-8', descriptor: 'Clear analysis with accurate terminology.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive analysis exploring layers of meaning.' },
    ],
    topTips: [
      'Cover both language and structure.',
      'Explore effects and layers of meaning.',
      'Use precise subject terminology.',
    ],
    commonMistakes: [
      'Ignoring structure.',
      'Feature spotting.',
      'Vague effect comments.',
    ],
  },
  {
    id: 'ocr-lang-p2-q3',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 2: Exploring Effects and Impact',
    question: 'Q3 — Evaluation (AO4)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple personal response with limited references.' },
      { level: 2, marks: '3-5', descriptor: 'Some evaluation with some relevant references.' },
      { level: 3, marks: '6-8', descriptor: 'Clear evaluation with well-chosen references.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive, critical evaluation with precise references.' },
    ],
    topTips: [
      'Engage with the statement or question focus.',
      'Support evaluation with evidence and method analysis.',
      'Offer a personal, critical viewpoint.',
    ],
    commonMistakes: [
      'Not engaging with the evaluation focus.',
      'No personal viewpoint.',
      'Limited evidence.',
    ],
  },
  {
    id: 'ocr-lang-p2-q4',
    board: 'OCR',
    subject: 'Language',
    paper: 'Paper 2: Exploring Effects and Impact',
    question: 'Q4 — Creative writing: descriptive or narrative (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content (1-6): Simple writing. Limited vocabulary. Technical (1-4): Basic accuracy.' },
      { level: 2, marks: '11-20', descriptor: 'Content (7-12): Some crafting and vocabulary. Technical (5-8): Some variety and accuracy.' },
      { level: 3, marks: '21-30', descriptor: 'Content (13-18): Engaging writing. Effective vocabulary and structure. Technical (9-12): Good variety. Accurate.' },
      { level: 4, marks: '31-40', descriptor: 'Content (19-24): Compelling, sophisticated writing. Technical (13-16): Consistently accurate. Wide range.' },
    ],
    topTips: [
      'Plan your piece — even briefly.',
      'Use sensory detail and literary techniques.',
      'Vary sentence structures.',
      'Create atmosphere and engage the reader.',
      'Proofread carefully.',
    ],
    commonMistakes: [
      'No planning.',
      'Over-reliance on plot at expense of description.',
      'Poor technical accuracy.',
      'Rushing the ending.',
    ],
  },
]

// ── OCR English Literature ───────────────────────────────────────────────────

const ocrLiterature: MarkScheme[] = [
  {
    id: 'ocr-lit-drama',
    board: 'OCR',
    subject: 'Literature',
    paper: 'Paper 1: Exploring Modern and Literary Heritage Texts',
    question: 'Section A — Modern prose or drama (AO1, AO2, AO3)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple response. Simple identification of methods. Limited context.' },
      { level: 2, marks: '11-20', descriptor: 'Some response with references. Some analysis. Some context.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear analysis. Clear context.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated analysis. Perceptive context.' },
    ],
    topTips: [
      'Address all AOs: response, methods, context.',
      'Use quotations to support your argument.',
      'Integrate contextual knowledge.',
    ],
    commonMistakes: [
      'Plot retelling.',
      'Context as a bolt-on.',
      'Limited method analysis.',
    ],
  },
  {
    id: 'ocr-lit-heritage',
    board: 'OCR',
    subject: 'Literature',
    paper: 'Paper 1: Exploring Modern and Literary Heritage Texts',
    question: 'Section B — Literary heritage prose or drama (AO1, AO2, AO3)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple response with limited references. Simple methods. Limited context.' },
      { level: 2, marks: '11-20', descriptor: 'Some response. Some analysis of methods. Some context.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear method analysis. Clear context.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated methods. Perceptive context.' },
    ],
    topTips: [
      'Know the text thoroughly — there may be an extract or it may be a closed-text question.',
      'Consider the historical and social context of the text.',
      'Analyse the writer\'s craft: language, form, structure.',
    ],
    commonMistakes: [
      'Insufficient textual knowledge.',
      'Superficial contextual understanding.',
      'Not analysing the writer\'s methods.',
    ],
  },
  {
    id: 'ocr-lit-poetry',
    board: 'OCR',
    subject: 'Literature',
    paper: 'Paper 2: Poetry and Unseen Texts',
    question: 'Section A — Poetry anthology comparison (AO1, AO2, AO3, AO4)',
    totalMarks: 32,
    levels: [
      { level: 1, marks: '1-8', descriptor: 'Simple response. Limited comparison. Simple methods.' },
      { level: 2, marks: '9-16', descriptor: 'Some comparison. Some method analysis from both poems.' },
      { level: 3, marks: '17-24', descriptor: 'Clear comparison. Clear method analysis. Contextual awareness.' },
      { level: 4, marks: '25-32', descriptor: 'Perceptive comparison. Sophisticated analysis. Detailed context.' },
    ],
    topTips: [
      'Compare throughout your response.',
      'Analyse methods in both poems.',
      'Consider contextual influences on each poem.',
      'Choose your comparison poem wisely.',
    ],
    commonMistakes: [
      'Writing about poems separately.',
      'Poor choice of comparison poem.',
      'Ignoring methods.',
    ],
  },
  {
    id: 'ocr-lit-unseen',
    board: 'OCR',
    subject: 'Literature',
    paper: 'Paper 2: Poetry and Unseen Texts',
    question: 'Section B — Unseen poetry (AO1, AO2)',
    totalMarks: 32,
    levels: [
      { level: 1, marks: '1-8', descriptor: 'Simple response. Simple identification of features.' },
      { level: 2, marks: '9-16', descriptor: 'Some understanding. Some analysis of methods.' },
      { level: 3, marks: '17-24', descriptor: 'Clear analysis with accurate terminology.' },
      { level: 4, marks: '25-32', descriptor: 'Perceptive analysis. Sophisticated exploration of effects.' },
    ],
    topTips: [
      'Read each poem carefully — at least twice.',
      'Identify tone, mood, and message first.',
      'Analyse language, form, and structure.',
      'Apply the same analytical skills as anthology poems.',
    ],
    commonMistakes: [
      'Rushing into writing.',
      'Only discussing content.',
      'Ignoring form and structure.',
    ],
  },
]

// ── WJEC English Language ────────────────────────────────────────────────────

const wjecLanguage: MarkScheme[] = [
  {
    id: 'wjec-lang-p1-q1',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 1: 20th Century Literature Reading and Creative Prose Writing',
    question: 'Q1 — Information retrieval (AO1)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple identification of explicit information. Limited evidence.' },
      { level: 2, marks: '3-5', descriptor: 'Some relevant points identified. Some appropriate evidence.' },
      { level: 3, marks: '6-8', descriptor: 'Clear identification and interpretation. Well-chosen evidence.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive interpretation. Judiciously selected evidence.' },
    ],
    topTips: [
      'Read the question carefully for the specific focus.',
      'Support every point with textual evidence.',
      'Include both explicit and implicit information.',
    ],
    commonMistakes: [
      'Not using evidence.',
      'Only surface-level responses.',
      'Missing the question focus.',
    ],
  },
  {
    id: 'wjec-lang-p1-q2',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 1: 20th Century Literature Reading and Creative Prose Writing',
    question: 'Q2 — Language analysis (AO2)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple comment on language features. Minimal terminology.' },
      { level: 2, marks: '3-5', descriptor: 'Some comment on effects. Some appropriate terminology.' },
      { level: 3, marks: '6-8', descriptor: 'Clear analysis with accurate terminology.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive, sophisticated analysis exploring layers of meaning.' },
    ],
    topTips: [
      'Zoom in on specific words and phrases.',
      'Explore connotations for top marks.',
      'Always explain the effect on the reader.',
      'Use terminology naturally.',
    ],
    commonMistakes: [
      'Feature spotting without effect.',
      'Too-long quotations.',
      'Vague effect statements.',
    ],
  },
  {
    id: 'wjec-lang-p1-q3',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 1: 20th Century Literature Reading and Creative Prose Writing',
    question: 'Q3 — Evaluation (AO4)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple personal response. Limited textual reference.' },
      { level: 2, marks: '3-5', descriptor: 'Some evaluation with some references.' },
      { level: 3, marks: '6-8', descriptor: 'Clear evaluation with well-chosen references.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive, critical evaluation with precise references.' },
    ],
    topTips: [
      'Engage with the statement provided.',
      'Support evaluation with evidence from the text.',
      'Consider multiple perspectives.',
    ],
    commonMistakes: [
      'Not engaging with the statement.',
      'No evidence to support evaluation.',
      'One-sided response.',
    ],
  },
  {
    id: 'wjec-lang-p1-q4',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 1: 20th Century Literature Reading and Creative Prose Writing',
    question: 'Q4 — Creative prose writing (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content (1-6): Simple communication. Limited vocabulary. Technical (1-4): Basic accuracy.' },
      { level: 2, marks: '11-20', descriptor: 'Content (7-12): Some crafting and awareness. Technical (5-8): Some variety and accuracy.' },
      { level: 3, marks: '21-30', descriptor: 'Content (13-18): Engaging, effective writing. Technical (9-12): Good variety and accuracy.' },
      { level: 4, marks: '31-40', descriptor: 'Content (19-24): Compelling, sophisticated writing. Technical (13-16): Consistently accurate with wide range.' },
    ],
    topTips: [
      'Plan before writing.',
      'Use sensory language and literary techniques.',
      'Vary sentence structures for effect.',
      'Create atmosphere and engage the reader.',
      'Leave time for proofreading.',
    ],
    commonMistakes: [
      'Not planning.',
      'All plot, no description.',
      'Poor technical accuracy.',
      'Rushed ending.',
    ],
  },
  {
    id: 'wjec-lang-p2-q1',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    question: 'Q1 — Information retrieval and summary (AO1)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple identification from one or both texts.' },
      { level: 2, marks: '3-5', descriptor: 'Some relevant points from both texts.' },
      { level: 3, marks: '6-8', descriptor: 'Clear synthesis from both texts with well-chosen evidence.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive synthesis with judicious evidence.' },
    ],
    topTips: [
      'Use evidence from both texts.',
      'Synthesise, don\'t separate.',
      'Focus on the specific question asked.',
    ],
    commonMistakes: [
      'Only using one text.',
      'Writing about each text separately.',
      'Not answering the specific question.',
    ],
  },
  {
    id: 'wjec-lang-p2-q2',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    question: 'Q2 — Language analysis (AO2)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple comment on language. Minimal terminology.' },
      { level: 2, marks: '3-5', descriptor: 'Some comment on effects with some terminology.' },
      { level: 3, marks: '6-8', descriptor: 'Clear analysis with accurate terminology.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive, detailed analysis with sophisticated terminology.' },
    ],
    topTips: [
      'Focus on the specified text.',
      'Use precise terminology.',
      'Explore effects on the reader.',
    ],
    commonMistakes: [
      'Analysing the wrong text.',
      'Feature spotting.',
      'Vague comments.',
    ],
  },
  {
    id: 'wjec-lang-p2-q3',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    question: 'Q3 — Comparison of perspectives (AO3)',
    totalMarks: 10,
    levels: [
      { level: 1, marks: '1-2', descriptor: 'Simple reference to one or both texts.' },
      { level: 2, marks: '3-5', descriptor: 'Some comparison with some evidence.' },
      { level: 3, marks: '6-8', descriptor: 'Clear comparison with well-selected evidence.' },
      { level: 4, marks: '9-10', descriptor: 'Perceptive comparison evaluating how contexts shape perspectives.' },
    ],
    topTips: [
      'Compare throughout.',
      'Discuss viewpoints and methods.',
      'Use evidence from both texts.',
    ],
    commonMistakes: [
      'Writing about texts separately.',
      'Only comparing content.',
      'Unbalanced evidence.',
    ],
  },
  {
    id: 'wjec-lang-p2-q4',
    board: 'WJEC',
    subject: 'Language',
    paper: 'Paper 2: 19th and 21st Century Non-Fiction Reading and Transactional Writing',
    question: 'Q4 — Transactional/persuasive writing (AO5 + AO6)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Content (1-6): Simple communication. Limited vocabulary. Technical (1-4): Basic accuracy.' },
      { level: 2, marks: '11-20', descriptor: 'Content (7-12): Some purpose/audience awareness. Some techniques. Technical (5-8): Some accuracy.' },
      { level: 3, marks: '21-30', descriptor: 'Content (13-18): Clear, effective communication. Range of techniques. Technical (9-12): Good accuracy.' },
      { level: 4, marks: '31-40', descriptor: 'Content (19-24): Compelling, sophisticated communication. Technical (13-16): Consistently accurate.' },
    ],
    topTips: [
      'Match form conventions precisely.',
      'Use a range of persuasive techniques.',
      'Maintain consistent register.',
      'Plan clearly.',
      'Proofread for accuracy.',
    ],
    commonMistakes: [
      'Ignoring form conventions.',
      'Losing argumentative thread.',
      'Inconsistent tone.',
      'Poor accuracy.',
    ],
  },
]

// ── WJEC English Literature ──────────────────────────────────────────────────

const wjecLiterature: MarkScheme[] = [
  {
    id: 'wjec-lit-p1-sa',
    board: 'WJEC',
    subject: 'Literature',
    paper: 'Paper 1: Shakespeare and Poetry',
    question: 'Section A — Shakespeare: extract-based essay (AO1, AO2, AO3, AO4)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple response. Simple identification of methods. Limited context. Basic quality of written communication.' },
      { level: 2, marks: '11-20', descriptor: 'Some personal response with references. Some method analysis. Some context.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear method analysis with terminology. Clear context.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated method analysis. Perceptive contextual understanding.' },
    ],
    topTips: [
      'Analyse the extract closely then link to the wider play.',
      'Integrate context — don\'t bolt it on.',
      'Cover language, form, and structure.',
      'Quality of written communication matters.',
    ],
    commonMistakes: [
      'Only discussing the extract.',
      'Context as a separate section.',
      'Plot retelling.',
      'Ignoring form and structure.',
    ],
  },
  {
    id: 'wjec-lit-p1-sb',
    board: 'WJEC',
    subject: 'Literature',
    paper: 'Paper 1: Shakespeare and Poetry',
    question: 'Section B — Poetry comparison from anthology (AO1, AO2, AO3, AO4)',
    totalMarks: 30,
    levels: [
      { level: 1, marks: '1-7', descriptor: 'Simple response. Limited comparison. Simple methods.' },
      { level: 2, marks: '8-14', descriptor: 'Some comparison. Some method analysis.' },
      { level: 3, marks: '15-22', descriptor: 'Clear comparison. Clear method analysis. Context used.' },
      { level: 4, marks: '23-30', descriptor: 'Perceptive comparison. Sophisticated analysis. Detailed context.' },
    ],
    topTips: [
      'Compare throughout — never separate the poems.',
      'Analyse methods in both poems.',
      'Consider how context shapes each poem.',
    ],
    commonMistakes: [
      'Writing about poems separately.',
      'Only comparing content.',
      'No method analysis.',
    ],
  },
  {
    id: 'wjec-lit-p2-sa',
    board: 'WJEC',
    subject: 'Literature',
    paper: 'Paper 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
    question: 'Section A — Post-1914 prose or drama (AO1, AO2, AO4)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple response. Simple methods. Basic written communication.' },
      { level: 2, marks: '11-20', descriptor: 'Some response with references. Some method analysis.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear analysis with terminology.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated analysis. Excellent written communication.' },
    ],
    topTips: [
      'Know the text thoroughly.',
      'Answer the specific question — not a pre-prepared essay.',
      'Use quotations effectively.',
      'Written communication quality contributes to your mark.',
    ],
    commonMistakes: [
      'Pre-prepared essay not matching the question.',
      'Insufficient quotation.',
      'Plot retelling.',
    ],
  },
  {
    id: 'wjec-lit-p2-sb',
    board: 'WJEC',
    subject: 'Literature',
    paper: 'Paper 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
    question: 'Section B — 19th-century prose (AO1, AO2, AO3)',
    totalMarks: 40,
    levels: [
      { level: 1, marks: '1-10', descriptor: 'Simple response. Simple methods. Limited context.' },
      { level: 2, marks: '11-20', descriptor: 'Some response with references. Some analysis. Some context.' },
      { level: 3, marks: '21-30', descriptor: 'Clear, developed response. Clear analysis. Clear context.' },
      { level: 4, marks: '31-40', descriptor: 'Critical, exploratory response. Sophisticated analysis. Perceptive context.' },
    ],
    topTips: [
      'Consider 19th-century contexts carefully.',
      'Track character development and themes.',
      'Balance extract and wider text discussion.',
    ],
    commonMistakes: [
      'Context as a bolt-on.',
      'Insufficient wider text knowledge.',
      'Not analysing the writer\'s methods.',
    ],
  },
  {
    id: 'wjec-lit-p2-sc',
    board: 'WJEC',
    subject: 'Literature',
    paper: 'Paper 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
    question: 'Section C — Unseen poetry (AO1, AO2)',
    totalMarks: 20,
    levels: [
      { level: 1, marks: '1-5', descriptor: 'Simple response. Simple identification of features.' },
      { level: 2, marks: '6-10', descriptor: 'Some understanding. Some analysis.' },
      { level: 3, marks: '11-15', descriptor: 'Clear analysis with terminology.' },
      { level: 4, marks: '16-20', descriptor: 'Perceptive, detailed analysis exploring effects.' },
    ],
    topTips: [
      'Read the poem at least twice.',
      'Identify tone and message first.',
      'Analyse language, form, and structure.',
      'Trust your own interpretation.',
    ],
    commonMistakes: [
      'Rushing into writing.',
      'Only discussing content.',
      'Ignoring form and structure.',
    ],
  },
]

// ── Exported registry ────────────────────────────────────────────────────────

export const markSchemeQuestions: MarkScheme[] = [
  ...aqaLanguagePaper1,
  ...aqaLiterature,
  ...edexcelLanguage,
  ...edexcelLiterature,
  ...ocrLanguage,
  ...ocrLiterature,
  ...wjecLanguage,
  ...wjecLiterature,
]

/** All unique boards */
export const boards = ['AQA', 'Edexcel', 'OCR', 'WJEC'] as const
export type Board = (typeof boards)[number]

/** Get all mark schemes for a given board */
export function getMarkSchemesForBoard(board: string): MarkScheme[] {
  return markSchemeQuestions.filter((ms) => ms.board === board)
}

/** Get all unique papers for a given board */
export function getPapersForBoard(board: string): string[] {
  const papers = markSchemeQuestions
    .filter((ms) => ms.board === board)
    .map((ms) => ms.paper)
  return [...new Set(papers)]
}

/** Get all mark schemes for a given board + paper */
export function getMarkSchemesForPaper(board: string, paper: string): MarkScheme[] {
  return markSchemeQuestions.filter((ms) => ms.board === board && ms.paper === paper)
}

/** Find a single mark scheme by ID */
export function getMarkSchemeById(id: string): MarkScheme | undefined {
  return markSchemeQuestions.find((ms) => ms.id === id)
}
