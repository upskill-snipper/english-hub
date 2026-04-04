/**
 * Comprehensive assessment rubrics and mark schemes for all year groups.
 * Covers KS3 (Y7-Y9), IGCSE, and IAL assessment criteria.
 */

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface RubricBand {
  level: number;
  label: string;
  description: string;
  exemplar: string;
  markRange: string;
}

export interface MarkingCode {
  code: string;
  meaning: string;
  example: string;
}

export interface FeedbackTemplate {
  category: 'www' | 'ebi';
  yearGroup: 'Y7' | 'Y8' | 'Y9' | 'IGCSE' | 'IAL';
  area: string;
  templates: string[];
}

export interface EndOfYearExpectation {
  code: string;
  strand: 'Reading' | 'Writing' | 'Speaking & Listening';
  description: string;
  emergingIndicator: string;
  expectedIndicator: string;
  masteryIndicator: string;
}

export interface QuestionMarkScheme {
  question: string;
  description: string;
  maxMarks: number;
  assessmentObjective: string;
  bands: RubricBand[];
  guidance: string;
}

export interface PaperMarkScheme {
  paperId: string;
  paperTitle: string;
  totalMarks: number;
  duration: string;
  questions: QuestionMarkScheme[];
}

export interface GradeBoundaryGuidance {
  grade: string;
  percentageRange: string;
  ums?: string;
  descriptor: string;
}

export interface AssessmentRubric {
  id: string;
  title: string;
  yearGroup: string;
  assessmentType:
    | 'reading'
    | 'writing'
    | 'speaking-listening'
    | 'spag'
    | 'marking-codes'
    | 'feedback'
    | 'end-of-year'
    | 'language-paper'
    | 'literature-paper'
    | 'ial-unit'
    | 'ial-coursework'
    | 'grade-boundaries';
  examBoard?: string;
  totalMarks?: number;
  bands?: RubricBand[];
  markingCodes?: MarkingCode[];
  feedbackTemplates?: FeedbackTemplate[];
  expectations?: EndOfYearExpectation[];
  papers?: PaperMarkScheme[];
  gradeBoundaries?: GradeBoundaryGuidance[];
}

// ── KS3 Reading Assessment Rubric (7 bands) ──────────────────────────────────

const ks3ReadingRubric: AssessmentRubric = {
  id: 'ks3-reading-rubric',
  title: 'KS3 Reading Assessment Rubric',
  yearGroup: 'KS3',
  assessmentType: 'reading',
  totalMarks: 30,
  bands: [
    {
      level: 1,
      label: 'Emerging',
      markRange: '1-4',
      description:
        'Can identify simple, explicit information from a text. Limited ability to make inferences. Responses are brief and may not be supported by textual evidence. Shows basic awareness of language features but cannot explain their effect.',
      exemplar:
        'The writer says the character is scared. This shows the character does not like the dark.',
    },
    {
      level: 2,
      label: 'Developing',
      markRange: '5-8',
      description:
        'Can locate relevant information and make straightforward inferences. Beginning to use quotations to support ideas but may not embed them fluently. Can identify some language features and offer simple comments on their effect. Shows basic awareness of structure.',
      exemplar:
        'The writer uses the word "trembling" to show the character is frightened. The short sentence "He ran." creates tension.',
    },
    {
      level: 3,
      label: 'Securing',
      markRange: '9-13',
      description:
        'Selects relevant evidence and makes clear inferences. Uses quotations that are generally well chosen to support ideas. Explains the effect of language choices with some accuracy. Beginning to comment on structural features and their purpose.',
      exemplar:
        'The verb "trembling" conveys the character\'s fear, suggesting he is physically overwhelmed by his anxiety. The writer uses the short sentence at the paragraph\'s end to create a sudden shift in pace.',
    },
    {
      level: 4,
      label: 'Expected',
      markRange: '14-18',
      description:
        'Makes secure inferences supported by well-chosen textual references. Explains the effect of the writer\'s language choices clearly and accurately, using subject terminology. Comments on structure and its effects on the reader. Beginning to consider context and alternative interpretations.',
      exemplar:
        'The semantic field of darkness throughout the opening paragraph establishes an ominous atmosphere, foreshadowing the danger that awaits the protagonist. The writer\'s use of the present tense creates immediacy, drawing the reader into the scene.',
    },
    {
      level: 5,
      label: 'Advancing',
      markRange: '19-22',
      description:
        'Analyses the effect of language and structure with confidence and precision. Selects judicious quotations and embeds them fluently. Uses a range of subject terminology accurately. Considers multiple interpretations and the writer\'s purpose. Shows awareness of context.',
      exemplar:
        'The metaphor "a cage of shadows" not only emphasises the character\'s entrapment but also implies a psychological imprisonment, reflecting the Gothic tradition of using setting as an externalisation of internal turmoil.',
    },
    {
      level: 6,
      label: 'Excelling',
      markRange: '23-26',
      description:
        'Provides perceptive and detailed analysis of language, form, and structure. Demonstrates a sophisticated understanding of the writer\'s methods and their effects. Evaluates critically with convincing textual support. Draws on contextual knowledge to deepen interpretation.',
      exemplar:
        'The sibilant alliteration in "silence slithered" personifies the quiet, imbuing it with a predatory quality that mirrors the lurking threat. This technique, combined with the fragmented syntax, reflects the protagonist\'s fractured psychological state, a motif prevalent in post-war literature.',
    },
    {
      level: 7,
      label: 'Mastery',
      markRange: '27-30',
      description:
        'Produces an exploratory, critical analysis that demonstrates originality of thought. Synthesises understanding of language, form, structure, and context to produce a cohesive, conceptualised response. Evaluates with precision and offers nuanced, convincing interpretations. Engages with ambiguity and complexity.',
      exemplar:
        'The deliberate subversion of the pastoral idyll through lexical choices such as "scorched" and "barren" functions as both a literal description and an allegorical commentary on post-industrial disillusionment. The cyclical structure reinforces the inevitability of the character\'s fate, inviting the reader to question whether true agency exists within the text\'s deterministic framework.',
    },
  ],
};

// ── KS3 Writing Assessment Rubric (7 bands) ──────────────────────────────────

const ks3WritingRubric: AssessmentRubric = {
  id: 'ks3-writing-rubric',
  title: 'KS3 Writing Assessment Rubric',
  yearGroup: 'KS3',
  assessmentType: 'writing',
  totalMarks: 40,
  bands: [
    {
      level: 1,
      label: 'Emerging',
      markRange: '1-6',
      description:
        'Writing communicates meaning at a basic level. Simple vocabulary with limited variation. Sentence structures are mostly simple, with frequent errors in spelling, punctuation, and grammar. Organisation is limited with little sense of paragraphing or structure.',
      exemplar:
        'the man went to the shop and he got some food and then he went home.',
    },
    {
      level: 2,
      label: 'Developing',
      markRange: '7-12',
      description:
        'Writing communicates ideas with some clarity. Some attempt at varied vocabulary. Sentence structures show some variety but may be repetitive. Basic paragraphing is present but may not be consistently applied. Spelling and punctuation are mostly accurate for common words.',
      exemplar:
        'The man walked quickly to the shop. He was hungry and needed food. When he arrived, the shop was busy so he had to wait in a long queue.',
    },
    {
      level: 3,
      label: 'Securing',
      markRange: '13-18',
      description:
        'Writing is generally clear and purposeful. Vocabulary choices are sometimes effective. A range of sentence structures is used, including compound and complex sentences. Paragraphs are used to organise ideas. Spelling, punctuation, and grammar are generally accurate.',
      exemplar:
        'Despite the biting cold, Marcus hurried towards the corner shop, his stomach growling impatiently. The fluorescent lights flickered overhead as he pushed open the heavy glass door, scanning the aisles for something to satisfy his hunger.',
    },
    {
      level: 4,
      label: 'Expected',
      markRange: '19-24',
      description:
        'Writing is well structured and clearly adapted to purpose and audience. Vocabulary is varied and often effective. A range of sentence structures is used for effect. Paragraphs are well organised with clear topic sentences and linking. Spelling, punctuation, and grammar are accurate with only occasional errors.',
      exemplar:
        'The amber glow of the streetlights barely penetrated the thick fog as Marcus navigated the familiar route. Each step echoed against the wet pavement, a rhythmic counterpoint to his racing thoughts. He needed answers, and time was running out.',
    },
    {
      level: 5,
      label: 'Advancing',
      markRange: '25-30',
      description:
        'Writing is compelling and well crafted. Ambitious vocabulary is selected for precision and effect. Sentence structures are varied and controlled, including use of subordination and varied openings. Paragraphs are cohesive and contribute to overall structure. Technical accuracy is consistently high.',
      exemplar:
        'Silence. Not the peaceful kind that settles over a sleeping village, but something sharper, more deliberate. It clung to the walls of the abandoned factory like a living thing, thick and suffocating, daring anyone to break its hold.',
    },
    {
      level: 6,
      label: 'Excelling',
      markRange: '31-36',
      description:
        'Writing is sophisticated and engaging, demonstrating a clear and distinctive voice. Vocabulary is ambitious, precise, and used to create specific effects. Structural choices are deliberate and contribute to the overall impact. Technical accuracy is assured across complex constructions.',
      exemplar:
        'In the half-light between memory and forgetting, the house waited. Its windows, opaque with decades of neglect, gazed blindly at the overgrown garden where roses had once bloomed with militant precision. Now, only the ivy thrived, patient as grief, claiming the brickwork inch by imperceptible inch.',
    },
    {
      level: 7,
      label: 'Mastery',
      markRange: '37-40',
      description:
        'Writing is exceptionally crafted with a confident, original voice. Vocabulary and imagery are precise, evocative, and controlled. Structure is innovative and purposeful, with deliberate manipulation of form for effect. Technical accuracy is flawless, including sophisticated punctuation for impact.',
      exemplar:
        'Consider the lock. Not as a mechanism, though it was certainly that, but as a covenant between two kinds of fear: the fear of what might enter, and the fear of what might escape. Mrs Kellerman understood this duality intimately. She had been turning the key for forty-seven years, and still the click echoed through her like a question she could never quite answer.',
    },
  ],
};

// ── KS3 Speaking & Listening Rubric (5 bands) ────────────────────────────────

const ks3SpeakingListeningRubric: AssessmentRubric = {
  id: 'ks3-speaking-listening-rubric',
  title: 'KS3 Speaking & Listening Assessment Rubric',
  yearGroup: 'KS3',
  assessmentType: 'speaking-listening',
  totalMarks: 20,
  bands: [
    {
      level: 1,
      label: 'Limited',
      markRange: '1-4',
      description:
        'Communicates simple ideas but with limited clarity. Vocabulary is basic and may be imprecise. Struggles to sustain a line of argument or respond to others. Contributions to discussion are brief and infrequent. May rely heavily on informal register regardless of context.',
      exemplar:
        'Student gives one-word or very brief responses. Rarely initiates discussion. May speak too quietly or lack confidence in delivery.',
    },
    {
      level: 2,
      label: 'Developing',
      markRange: '5-8',
      description:
        'Communicates ideas with some clarity. Uses some relevant vocabulary. Can sustain a short contribution and respond to straightforward questions. Makes some attempt to adapt register to context. Listens to others but may not build on their ideas.',
      exemplar:
        'Student offers opinions with some reasoning. Responds to direct questions. Beginning to use formal register in presentations but may lapse.',
    },
    {
      level: 3,
      label: 'Competent',
      markRange: '9-12',
      description:
        'Communicates ideas clearly and coherently. Uses varied vocabulary appropriate to the context. Sustains contributions and responds constructively to others. Adapts register to suit audience and purpose. Listens actively and builds on the ideas of peers.',
      exemplar:
        'Student presents a structured argument with supporting evidence. Asks follow-up questions of peers. Uses Standard English in formal contexts and adapts language for effect.',
    },
    {
      level: 4,
      label: 'Confident',
      markRange: '13-16',
      description:
        'Communicates with flair and precision. Uses ambitious vocabulary and rhetorical techniques. Sustains complex arguments and challenges others respectfully. Adapts tone, register, and pace to engage the audience. Listens perceptively and synthesises the ideas of others.',
      exemplar:
        'Student delivers a persuasive speech using anaphora and tricolon. Mediates group discussion effectively. Responds to counterarguments with evidence and nuance.',
    },
    {
      level: 5,
      label: 'Exceptional',
      markRange: '17-20',
      description:
        'Communicates with authority, sophistication, and originality. Demonstrates mastery of rhetorical techniques and command of register. Leads and shapes discussion with sensitivity and purpose. Listens with discrimination and responds with insight. Shows awareness of the power of spoken language.',
      exemplar:
        'Student commands the room with assured delivery, varying pace and intonation for emphasis. Synthesises multiple viewpoints into a nuanced conclusion. Handles challenging questions with composure and depth.',
    },
  ],
};

// ── SPAG Assessment Criteria ─────────────────────────────────────────────────

const spagCriteria: AssessmentRubric = {
  id: 'ks3-spag-criteria',
  title: 'Spelling, Punctuation & Grammar Assessment Criteria',
  yearGroup: 'KS3',
  assessmentType: 'spag',
  totalMarks: 16,
  bands: [
    {
      level: 1,
      label: 'Emerging',
      markRange: '1-3',
      description:
        'Spelling: Common words are generally accurate, but frequent errors in more ambitious vocabulary. Punctuation: Full stops and capital letters are used but inconsistently. Grammar: Simple sentences are mostly accurate but errors occur in agreement and tense.',
      exemplar: 'Common errors: there/their/they\'re, were/where, missing full stops, comma splices.',
    },
    {
      level: 2,
      label: 'Developing',
      markRange: '4-6',
      description:
        'Spelling: Most common and some complex words are spelled correctly. Punctuation: Commas, full stops, and question marks are used accurately. Some attempt at apostrophes. Grammar: Compound sentences are used correctly. Subject-verb agreement is mostly accurate.',
      exemplar: 'Beginning to use apostrophes for possession. Attempting commas in lists and after fronted adverbials.',
    },
    {
      level: 3,
      label: 'Securing',
      markRange: '7-9',
      description:
        'Spelling: Accurate spelling of complex and irregular words. Punctuation: Commas, apostrophes, and speech marks are used accurately. Some use of colons and semicolons. Grammar: Complex sentences with subordinate clauses are used correctly.',
      exemplar: 'Accurate use of the comma to separate clauses. Correct apostrophe use for possession and contraction. Attempting semicolons.',
    },
    {
      level: 4,
      label: 'Expected',
      markRange: '10-12',
      description:
        'Spelling: Consistently accurate, including ambitious and subject-specific vocabulary. Punctuation: Full range of punctuation is used accurately, including colons, semicolons, and dashes. Grammar: A variety of sentence structures is controlled accurately.',
      exemplar: 'Confident use of semicolons to link related clauses. Colons used to introduce lists and explanations. Dashes and parentheses for additional detail.',
    },
    {
      level: 5,
      label: 'Excelling',
      markRange: '13-14',
      description:
        'Spelling: Flawless spelling throughout, including sophisticated vocabulary. Punctuation: Punctuation is used precisely for effect, including ellipsis and varied dash usage. Grammar: Grammar is assured across all constructions, including the subjunctive and passive voice.',
      exemplar: 'Uses ellipsis for dramatic effect. Employs the dash for parenthetical asides. Confidently uses the passive voice and subjunctive mood where appropriate.',
    },
    {
      level: 6,
      label: 'Mastery',
      markRange: '15-16',
      description:
        'Spelling: Impeccable accuracy across all registers and contexts. Punctuation: Sophisticated and deliberate use of punctuation to control meaning and rhythm. Grammar: Complete grammatical control with purposeful manipulation of conventions for stylistic effect.',
      exemplar: 'Punctuation is wielded as a tool for craft: the em dash interrupts for dramatic effect; the semicolon balances parallel ideas; the comma controls pacing with surgical precision.',
    },
  ],
};

// ── Marking Codes ─────────────────────────────────────────────────────────────

const markingCodes: AssessmentRubric = {
  id: 'ks3-marking-codes',
  title: 'Standardised Marking Codes',
  yearGroup: 'KS3',
  assessmentType: 'marking-codes',
  markingCodes: [
    { code: 'sp', meaning: 'Spelling error', example: 'Word circled or underlined with "sp" in margin' },
    { code: 'p', meaning: 'Punctuation error', example: 'Missing or incorrect punctuation indicated' },
    { code: 'gr', meaning: 'Grammar error', example: 'Grammatical error such as incorrect tense or agreement' },
    { code: 'C', meaning: 'Capital letter needed', example: 'Lowercase letter where capital required' },
    { code: '//', meaning: 'New paragraph needed', example: 'Double slash where new paragraph should begin' },
    { code: '^', meaning: 'Word or phrase missing', example: 'Caret mark indicating omission' },
    { code: '~', meaning: 'Word order error', example: 'Wavy line indicating awkward phrasing' },
    { code: 'rep', meaning: 'Repetition', example: 'Repeated word or phrase that needs varying' },
    { code: 'ww', meaning: 'Wrong word', example: 'Incorrect word choice or malapropism' },
    { code: 'exp', meaning: 'Expression unclear', example: 'Meaning is muddled or ambiguous' },
    { code: '?', meaning: 'Meaning unclear', example: 'Sentence does not make sense' },
    { code: 'T', meaning: 'Good use of terminology', example: 'Accurate and effective subject terminology' },
    { code: 'E', meaning: 'Evidence well used', example: 'Well-chosen and embedded quotation' },
    { code: 'A', meaning: 'Strong analysis', example: 'Effective exploration of writer\'s methods' },
    { code: 'V', meaning: 'Effective vocabulary choice', example: 'Ambitious or precise word selection' },
    { code: 'SS', meaning: 'Varied sentence structure', example: 'Effective variation in sentence length and type' },
    { code: 'D', meaning: 'Good detail/development', example: 'Point is well developed with supporting detail' },
  ],
};

// ── WWW/EBI Feedback Templates ────────────────────────────────────────────────

const feedbackTemplates: AssessmentRubric = {
  id: 'ks3-feedback-templates',
  title: 'WWW/EBI Feedback Templates',
  yearGroup: 'KS3',
  assessmentType: 'feedback',
  feedbackTemplates: [
    // Y7 WWW
    {
      category: 'www',
      yearGroup: 'Y7',
      area: 'Reading',
      templates: [
        'You identified key information from the text and used some quotations to support your ideas.',
        'Your inference about the character was well supported with evidence from the text.',
        'You showed a clear understanding of the main events and their significance.',
        'You used subject terminology accurately to describe the writer\'s language choices.',
        'Your personal response to the text was thoughtful and clearly expressed.',
      ],
    },
    {
      category: 'www',
      yearGroup: 'Y7',
      area: 'Writing',
      templates: [
        'Your writing communicates your ideas clearly and your paragraphs are well organised.',
        'You used a range of sentence structures including compound and complex sentences.',
        'Your vocabulary choices were effective, particularly your use of descriptive adjectives.',
        'You adapted your writing well to suit the purpose and audience of the task.',
        'Your opening was engaging and drew the reader into your narrative.',
      ],
    },
    {
      category: 'www',
      yearGroup: 'Y7',
      area: 'Speaking & Listening',
      templates: [
        'You spoke clearly and maintained good eye contact with your audience.',
        'Your ideas were well organised and presented in a logical sequence.',
        'You listened respectfully to others and responded to their ideas.',
      ],
    },
    // Y7 EBI
    {
      category: 'ebi',
      yearGroup: 'Y7',
      area: 'Reading',
      templates: [
        'You could embed your quotations more fluently within your sentences rather than presenting them separately.',
        'Try to explain the effect of the writer\'s language choices on the reader rather than just identifying them.',
        'You need to develop your points further by exploring why the writer may have chosen specific techniques.',
        'Consider what the text suggests implicitly, not just what it states explicitly.',
        'Use more precise subject terminology when discussing language features.',
      ],
    },
    {
      category: 'ebi',
      yearGroup: 'Y7',
      area: 'Writing',
      templates: [
        'Vary your sentence openings rather than starting most sentences with the subject.',
        'Use more ambitious vocabulary to create a more vivid picture for the reader.',
        'Ensure you proofread for basic spelling and punctuation errors.',
        'Develop your ideas more fully in each paragraph before moving on.',
        'Try to use a wider range of punctuation, including commas, semicolons, and dashes.',
      ],
    },
    // Y8 WWW
    {
      category: 'www',
      yearGroup: 'Y8',
      area: 'Reading',
      templates: [
        'Your analysis of the writer\'s language choices was perceptive and well supported.',
        'You explored the effect of structural features on the reader with confidence.',
        'Your use of subject terminology was accurate and enhanced your analysis.',
        'You considered the writer\'s purpose and how this influenced their choices.',
        'Your critical evaluation was convincing and supported by well-chosen evidence.',
      ],
    },
    {
      category: 'www',
      yearGroup: 'Y8',
      area: 'Writing',
      templates: [
        'Your narrative voice was distinctive and engaging throughout.',
        'You crafted your sentences with precision, varying structure for deliberate effect.',
        'Your use of imagery was vivid and contributed to the atmosphere of your writing.',
        'Structural choices such as your use of flashback added depth to your narrative.',
        'Your technical accuracy was impressive, particularly your use of semicolons and dashes.',
      ],
    },
    {
      category: 'www',
      yearGroup: 'Y8',
      area: 'Speaking & Listening',
      templates: [
        'You adapted your register effectively for the formal context of the presentation.',
        'Your use of rhetorical devices strengthened your persuasive speech.',
        'You built on the ideas of others in discussion, showing excellent active listening.',
      ],
    },
    // Y8 EBI
    {
      category: 'ebi',
      yearGroup: 'Y8',
      area: 'Reading',
      templates: [
        'Consider alternative interpretations of the text rather than settling on a single reading.',
        'Explore the connotations of individual words more deeply to strengthen your analysis.',
        'Link your analysis to the wider context in which the text was written.',
        'Move beyond feature-spotting to explore how multiple techniques work together.',
        'Develop a more evaluative tone by considering the effectiveness of the writer\'s choices.',
      ],
    },
    {
      category: 'ebi',
      yearGroup: 'Y8',
      area: 'Writing',
      templates: [
        'Experiment with more ambitious structural choices such as non-linear narratives.',
        'Refine your vocabulary to select the most precise word for each context.',
        'Use symbolism and motifs to add layers of meaning to your writing.',
        'Control your pacing more deliberately, using sentence length to create tension.',
        'Consider how your ending connects thematically to your opening.',
      ],
    },
    // Y9 WWW
    {
      category: 'www',
      yearGroup: 'Y9',
      area: 'Reading',
      templates: [
        'Your conceptualised response demonstrated a sophisticated understanding of the text.',
        'You synthesised analysis of language, structure, and context seamlessly.',
        'Your exploration of ambiguity in the text was nuanced and convincing.',
        'You engaged critically with the text, offering original and perceptive interpretations.',
        'Your use of precise terminology elevated the academic quality of your response.',
      ],
    },
    {
      category: 'www',
      yearGroup: 'Y9',
      area: 'Writing',
      templates: [
        'Your writing demonstrates a confident and original voice that sustains throughout.',
        'Your manipulation of form and structure was innovative and purposeful.',
        'The sophistication of your vocabulary and imagery was exceptional.',
        'Your control of tone and register was assured, adapting seamlessly for effect.',
        'Your technical accuracy was flawless, with punctuation used as a tool for craft.',
      ],
    },
    {
      category: 'www',
      yearGroup: 'Y9',
      area: 'Speaking & Listening',
      templates: [
        'You commanded the room with authority, varying pace and intonation for maximum impact.',
        'Your ability to synthesise multiple viewpoints showed exceptional critical thinking.',
        'You handled challenging questions with composure and intellectual rigour.',
      ],
    },
    // Y9 EBI
    {
      category: 'ebi',
      yearGroup: 'Y9',
      area: 'Reading',
      templates: [
        'Push your analysis further by exploring how the text challenges or subverts genre conventions.',
        'Engage more fully with the socio-historical context to deepen your interpretation.',
        'Develop a more exploratory approach, considering how the text resists a single definitive reading.',
        'Synthesise your analysis of language and structure more cohesively within your argument.',
        'Consider the ideological implications of the writer\'s choices more explicitly.',
      ],
    },
    {
      category: 'ebi',
      yearGroup: 'Y9',
      area: 'Writing',
      templates: [
        'Experiment with subverting reader expectations through unconventional structural choices.',
        'Develop your authorial voice further through more deliberate control of syntax.',
        'Consider how form can be manipulated to mirror or contrast with content.',
        'Refine your use of extended metaphor to sustain thematic resonance throughout a piece.',
        'Challenge yourself to write in unfamiliar forms and genres to expand your range.',
      ],
    },
  ],
};

// ── Y7 End of Year Expectations ───────────────────────────────────────────────

const y7Expectations: AssessmentRubric = {
  id: 'y7-end-of-year-expectations',
  title: 'Year 7 Foundational Expectations',
  yearGroup: 'Y7',
  assessmentType: 'end-of-year',
  expectations: [
    // Reading
    {
      code: '7R.1',
      strand: 'Reading',
      description: 'Identify explicit and implicit information in a range of fiction and non-fiction texts.',
      emergingIndicator: 'Can find some explicit information but struggles with implicit meaning.',
      expectedIndicator: 'Identifies explicit information accurately and makes straightforward inferences.',
      masteryIndicator: 'Confidently distinguishes between explicit and implicit information, making perceptive inferences.',
    },
    {
      code: '7R.2',
      strand: 'Reading',
      description: 'Select and use textual evidence (quotations) to support ideas.',
      emergingIndicator: 'Rarely uses quotations; when used, they may not be relevant.',
      expectedIndicator: 'Selects relevant quotations and uses them to support ideas, sometimes embedded.',
      masteryIndicator: 'Selects precise, well-chosen quotations and embeds them fluently within analysis.',
    },
    {
      code: '7R.3',
      strand: 'Reading',
      description: 'Identify and comment on writers\' use of language, including vocabulary choices and literary devices.',
      emergingIndicator: 'Can name some language features but cannot explain their effect.',
      expectedIndicator: 'Identifies language features and explains their effect on the reader with some accuracy.',
      masteryIndicator: 'Analyses language choices in detail, exploring connotations and multiple layers of meaning.',
    },
    {
      code: '7R.4',
      strand: 'Reading',
      description: 'Comment on the structure of texts, including openings, endings, and paragraph organisation.',
      emergingIndicator: 'Shows limited awareness of structural features.',
      expectedIndicator: 'Comments on structural features such as openings, shifts in focus, and paragraph organisation.',
      masteryIndicator: 'Analyses structural choices and explains how they contribute to meaning and reader engagement.',
    },
    {
      code: '7R.5',
      strand: 'Reading',
      description: 'Respond personally to texts, expressing opinions supported by reasoning.',
      emergingIndicator: 'Offers simple opinions without supporting reasoning.',
      expectedIndicator: 'Expresses clear personal opinions with reasons linked to the text.',
      masteryIndicator: 'Offers thoughtful, nuanced personal responses, considering multiple perspectives.',
    },
    {
      code: '7R.6',
      strand: 'Reading',
      description: 'Read a range of age-appropriate texts with fluency and understanding.',
      emergingIndicator: 'Reads with some hesitation; understanding is surface-level.',
      expectedIndicator: 'Reads fluently and demonstrates clear comprehension of age-appropriate texts.',
      masteryIndicator: 'Reads widely and independently with excellent comprehension, including challenging texts.',
    },
    // Writing
    {
      code: '7W.1',
      strand: 'Writing',
      description: 'Write for a range of purposes (describe, narrate, explain, persuade) adapting tone and style.',
      emergingIndicator: 'Writing shows limited awareness of purpose; tone is inconsistent.',
      expectedIndicator: 'Adapts writing to suit different purposes with generally appropriate tone.',
      masteryIndicator: 'Confidently adapts tone, style, and register to suit purpose with precision.',
    },
    {
      code: '7W.2',
      strand: 'Writing',
      description: 'Organise writing using paragraphs with clear topic sentences.',
      emergingIndicator: 'Paragraphing is inconsistent or absent.',
      expectedIndicator: 'Uses paragraphs consistently with identifiable topic sentences.',
      masteryIndicator: 'Paragraphs are cohesive with clear topic sentences, development, and effective linking.',
    },
    {
      code: '7W.3',
      strand: 'Writing',
      description: 'Use a range of sentence structures including simple, compound, and complex.',
      emergingIndicator: 'Relies predominantly on simple sentences.',
      expectedIndicator: 'Uses a mix of simple, compound, and complex sentences.',
      masteryIndicator: 'Controls sentence structure for deliberate effect, varying length and type.',
    },
    {
      code: '7W.4',
      strand: 'Writing',
      description: 'Select vocabulary for clarity and effect.',
      emergingIndicator: 'Vocabulary is basic and repetitive.',
      expectedIndicator: 'Selects varied vocabulary that is generally appropriate and sometimes effective.',
      masteryIndicator: 'Chooses ambitious, precise vocabulary that creates specific effects.',
    },
    {
      code: '7W.5',
      strand: 'Writing',
      description: 'Use descriptive techniques including similes, metaphors, and sensory language.',
      emergingIndicator: 'Limited use of descriptive techniques.',
      expectedIndicator: 'Uses similes, metaphors, and sensory language with some effectiveness.',
      masteryIndicator: 'Crafts original and effective imagery that enhances the reader\'s experience.',
    },
    {
      code: '7W.6',
      strand: 'Writing',
      description: 'Spell common and frequently used words accurately.',
      emergingIndicator: 'Frequent errors in common words.',
      expectedIndicator: 'Spells common words accurately with only occasional errors in complex vocabulary.',
      masteryIndicator: 'Spelling is consistently accurate, including ambitious vocabulary.',
    },
    {
      code: '7W.7',
      strand: 'Writing',
      description: 'Use basic punctuation accurately (full stops, commas, apostrophes, speech marks).',
      emergingIndicator: 'Inconsistent use of full stops and capital letters.',
      expectedIndicator: 'Uses full stops, commas, apostrophes, and speech marks accurately.',
      masteryIndicator: 'Uses a full range of punctuation with confidence and accuracy.',
    },
    {
      code: '7W.8',
      strand: 'Writing',
      description: 'Maintain grammatical accuracy including tense consistency and subject-verb agreement.',
      emergingIndicator: 'Frequent grammatical errors, particularly in tense and agreement.',
      expectedIndicator: 'Maintains grammatical accuracy with only occasional slips.',
      masteryIndicator: 'Grammar is assured across all constructions.',
    },
    {
      code: '7W.9',
      strand: 'Writing',
      description: 'Plan and draft writing, making improvements through editing and proofreading.',
      emergingIndicator: 'Limited evidence of planning or editing.',
      expectedIndicator: 'Plans writing and makes some improvements through editing.',
      masteryIndicator: 'Plans strategically and edits meticulously to refine expression and accuracy.',
    },
    // Speaking & Listening
    {
      code: '7SL.1',
      strand: 'Speaking & Listening',
      description: 'Speak clearly and audibly in formal and informal contexts.',
      emergingIndicator: 'Speaks too quietly or unclearly in formal contexts.',
      expectedIndicator: 'Speaks clearly and audibly, adapting volume to context.',
      masteryIndicator: 'Projects voice confidently, modulating tone and pace for effect.',
    },
    {
      code: '7SL.2',
      strand: 'Speaking & Listening',
      description: 'Listen actively and respond appropriately to others in discussion.',
      emergingIndicator: 'Struggles to listen attentively; responses are often off-topic.',
      expectedIndicator: 'Listens actively and responds with relevant contributions.',
      masteryIndicator: 'Listens perceptively, building on others\' ideas with insight.',
    },
    {
      code: '7SL.3',
      strand: 'Speaking & Listening',
      description: 'Present ideas in an organised manner, using Standard English where appropriate.',
      emergingIndicator: 'Presentations lack organisation; limited use of Standard English.',
      expectedIndicator: 'Presents ideas in a logical sequence using Standard English.',
      masteryIndicator: 'Delivers structured, engaging presentations with confident use of Standard English.',
    },
  ],
};

// ── Y8 End of Year Expectations ───────────────────────────────────────────────

const y8Expectations: AssessmentRubric = {
  id: 'y8-end-of-year-expectations',
  title: 'Year 8 Developing Expectations',
  yearGroup: 'Y8',
  assessmentType: 'end-of-year',
  expectations: [
    // Reading
    {
      code: '8R.1',
      strand: 'Reading',
      description: 'Make secure inferences and deductions, supporting ideas with well-chosen evidence.',
      emergingIndicator: 'Inferences are sometimes insecure or unsupported.',
      expectedIndicator: 'Makes secure inferences supported by relevant textual evidence.',
      masteryIndicator: 'Makes perceptive inferences, selecting evidence with precision and embedding it fluently.',
    },
    {
      code: '8R.2',
      strand: 'Reading',
      description: 'Analyse the effect of writers\' language choices, using subject terminology accurately.',
      emergingIndicator: 'Identifies language features but analysis of effect is undeveloped.',
      expectedIndicator: 'Analyses language choices and explains effects using accurate terminology.',
      masteryIndicator: 'Provides detailed, perceptive analysis of language, exploring connotations and layers of meaning.',
    },
    {
      code: '8R.3',
      strand: 'Reading',
      description: 'Explain how writers use structure to achieve effects and engage the reader.',
      emergingIndicator: 'Comments on structure are superficial or descriptive.',
      expectedIndicator: 'Explains how structural features such as shifts, repetition, and pacing engage the reader.',
      masteryIndicator: 'Analyses structural choices with sophistication, linking them to meaning and reader response.',
    },
    {
      code: '8R.4',
      strand: 'Reading',
      description: 'Evaluate texts critically, considering effectiveness and the writer\'s purpose.',
      emergingIndicator: 'Offers opinions with limited critical evaluation.',
      expectedIndicator: 'Evaluates the effectiveness of texts with clear reasoning and supporting evidence.',
      masteryIndicator: 'Evaluates critically with conviction, considering purpose, audience, and effectiveness.',
    },
    {
      code: '8R.5',
      strand: 'Reading',
      description: 'Compare and contrast ideas, themes, and language across texts.',
      emergingIndicator: 'Makes simple comparisons without detailed exploration.',
      expectedIndicator: 'Compares ideas and techniques across texts with clear, supported observations.',
      masteryIndicator: 'Synthesises comparison of ideas and techniques with insight and analytical depth.',
    },
    {
      code: '8R.6',
      strand: 'Reading',
      description: 'Understand and comment on the influence of context on writers and their texts.',
      emergingIndicator: 'Shows limited awareness of contextual influences.',
      expectedIndicator: 'Comments on how context influences the writer\'s choices and the text\'s meaning.',
      masteryIndicator: 'Integrates contextual knowledge seamlessly to deepen interpretation.',
    },
    {
      code: '8R.7',
      strand: 'Reading',
      description: 'Synthesise information and ideas from across a text to form a cohesive interpretation.',
      emergingIndicator: 'Tends to comment on isolated sections rather than the text as a whole.',
      expectedIndicator: 'Draws on different parts of the text to build a clear, cohesive interpretation.',
      masteryIndicator: 'Synthesises understanding across the text to produce a conceptualised, exploratory response.',
    },
    // Writing
    {
      code: '8W.1',
      strand: 'Writing',
      description: 'Adapt writing confidently for different purposes, audiences, and formats.',
      emergingIndicator: 'Some adaptation of tone but format and audience awareness are inconsistent.',
      expectedIndicator: 'Adapts writing effectively to suit purpose, audience, and format.',
      masteryIndicator: 'Shows sophisticated control of tone, register, and format for maximum impact.',
    },
    {
      code: '8W.2',
      strand: 'Writing',
      description: 'Organise writing with cohesive paragraphs linked by discourse markers and connectives.',
      emergingIndicator: 'Paragraphs exist but cohesion between them is weak.',
      expectedIndicator: 'Paragraphs are linked using discourse markers and connectives effectively.',
      masteryIndicator: 'Paragraphing is seamless with sophisticated linking that enhances the flow of argument.',
    },
    {
      code: '8W.3',
      strand: 'Writing',
      description: 'Use a wide range of sentence structures for deliberate effect.',
      emergingIndicator: 'Some variety in sentence structure but not always controlled.',
      expectedIndicator: 'Uses a range of sentence structures deliberately for effect.',
      masteryIndicator: 'Manipulates sentence structure with precision, creating rhythm, tension, and emphasis.',
    },
    {
      code: '8W.4',
      strand: 'Writing',
      description: 'Select ambitious and precise vocabulary to create specific effects.',
      emergingIndicator: 'Vocabulary is occasionally ambitious but not always precise.',
      expectedIndicator: 'Selects ambitious vocabulary that creates clear effects.',
      masteryIndicator: 'Vocabulary is unerringly precise, creating layered meanings and powerful imagery.',
    },
    {
      code: '8W.5',
      strand: 'Writing',
      description: 'Use a range of literary and rhetorical techniques effectively.',
      emergingIndicator: 'Uses some techniques but they may feel forced or formulaic.',
      expectedIndicator: 'Employs literary and rhetorical techniques effectively and with control.',
      masteryIndicator: 'Integrates sophisticated techniques seamlessly, enhancing meaning and reader engagement.',
    },
    {
      code: '8W.6',
      strand: 'Writing',
      description: 'Develop ideas within and across paragraphs with depth and detail.',
      emergingIndicator: 'Ideas are sometimes underdeveloped or lack detail.',
      expectedIndicator: 'Develops ideas with sufficient detail and depth within paragraphs.',
      masteryIndicator: 'Ideas are richly developed with layered detail and thematic resonance.',
    },
    {
      code: '8W.7',
      strand: 'Writing',
      description: 'Spell accurately, including complex and irregular vocabulary.',
      emergingIndicator: 'Spelling of complex words is inconsistent.',
      expectedIndicator: 'Spells accurately, including complex and irregular words.',
      masteryIndicator: 'Spelling is flawless throughout, including subject-specific and ambitious vocabulary.',
    },
    {
      code: '8W.8',
      strand: 'Writing',
      description: 'Use a full range of punctuation accurately, including semicolons and colons.',
      emergingIndicator: 'Attempts semicolons and colons but use is not always accurate.',
      expectedIndicator: 'Uses semicolons, colons, and dashes accurately.',
      masteryIndicator: 'Uses punctuation as a tool for craft, controlling pacing and emphasis with precision.',
    },
    {
      code: '8W.9',
      strand: 'Writing',
      description: 'Maintain consistent grammatical accuracy across extended writing.',
      emergingIndicator: 'Grammatical accuracy lapses in extended pieces.',
      expectedIndicator: 'Maintains grammatical accuracy consistently across extended writing.',
      masteryIndicator: 'Grammar is assured and purposeful, including deliberate manipulation for effect.',
    },
    {
      code: '8W.10',
      strand: 'Writing',
      description: 'Plan, draft, and refine writing, making deliberate improvements to content, structure, and accuracy.',
      emergingIndicator: 'Planning is superficial; limited evidence of refinement.',
      expectedIndicator: 'Plans effectively and refines writing to improve content, structure, and accuracy.',
      masteryIndicator: 'Plans strategically and revises with a critical eye, refining every aspect of craft.',
    },
    // Speaking & Listening
    {
      code: '8SL.1',
      strand: 'Speaking & Listening',
      description: 'Adapt spoken language to suit formal and informal contexts, using Standard English confidently.',
      emergingIndicator: 'Some awareness of register but adaptation is inconsistent.',
      expectedIndicator: 'Adapts register confidently, using Standard English in formal contexts.',
      masteryIndicator: 'Commands register with sophistication, shifting fluently between formal and informal.',
    },
    {
      code: '8SL.2',
      strand: 'Speaking & Listening',
      description: 'Sustain a structured argument in discussion and presentation, using evidence to support ideas.',
      emergingIndicator: 'Arguments are sometimes unfocused or unsupported.',
      expectedIndicator: 'Sustains a structured argument supported by relevant evidence.',
      masteryIndicator: 'Builds compelling, nuanced arguments, responding to counterpoints with agility.',
    },
    {
      code: '8SL.3',
      strand: 'Speaking & Listening',
      description: 'Listen perceptively and build on the contributions of others to advance discussion.',
      emergingIndicator: 'Listens but does not consistently build on others\' ideas.',
      expectedIndicator: 'Listens actively and builds on others\' contributions constructively.',
      masteryIndicator: 'Synthesises multiple viewpoints to advance the quality and depth of discussion.',
    },
  ],
};

// ── Y9 End of Year Expectations ───────────────────────────────────────────────

const y9Expectations: AssessmentRubric = {
  id: 'y9-end-of-year-expectations',
  title: 'Year 9 Mastery Expectations',
  yearGroup: 'Y9',
  assessmentType: 'end-of-year',
  expectations: [
    // Reading
    {
      code: '9R.1',
      strand: 'Reading',
      description: 'Analyse texts critically, producing conceptualised and exploratory responses.',
      emergingIndicator: 'Responses show some analysis but lack conceptualisation.',
      expectedIndicator: 'Produces conceptualised responses that explore the text analytically.',
      masteryIndicator: 'Responses are fully exploratory, demonstrating originality and critical sophistication.',
    },
    {
      code: '9R.2',
      strand: 'Reading',
      description: 'Analyse writers\' methods with precision, exploring layers of meaning in language and imagery.',
      emergingIndicator: 'Analysis of methods is competent but sometimes surface-level.',
      expectedIndicator: 'Analyses methods with precision, exploring connotations and implications.',
      masteryIndicator: 'Provides forensic analysis of methods, uncovering subtle and sophisticated layers of meaning.',
    },
    {
      code: '9R.3',
      strand: 'Reading',
      description: 'Evaluate the interrelationship between structure, language, and meaning.',
      emergingIndicator: 'Comments on structure and language are separate rather than integrated.',
      expectedIndicator: 'Evaluates how structure and language work together to create meaning.',
      masteryIndicator: 'Synthesises analysis of structure, language, form, and context into a cohesive critical response.',
    },
    {
      code: '9R.4',
      strand: 'Reading',
      description: 'Engage with ambiguity and complexity, considering multiple interpretations.',
      emergingIndicator: 'Tends towards a single interpretation without exploring alternatives.',
      expectedIndicator: 'Considers alternative interpretations and engages with complexity.',
      masteryIndicator: 'Embraces ambiguity, offering nuanced readings that acknowledge the text\'s resistance to closure.',
    },
    {
      code: '9R.5',
      strand: 'Reading',
      description: 'Integrate contextual understanding to inform and deepen textual analysis.',
      emergingIndicator: 'Context is mentioned but not integrated into analysis.',
      expectedIndicator: 'Contextual knowledge is used to inform and deepen interpretation.',
      masteryIndicator: 'Context is woven seamlessly into analysis, enriching meaning without becoming reductive.',
    },
    {
      code: '9R.6',
      strand: 'Reading',
      description: 'Compare texts confidently, analysing connections and contrasts in purpose, method, and effect.',
      emergingIndicator: 'Comparisons are made but tend to be descriptive rather than analytical.',
      expectedIndicator: 'Compares texts analytically, examining connections and contrasts.',
      masteryIndicator: 'Produces sophisticated comparative analysis that synthesises texts conceptually.',
    },
    {
      code: '9R.7',
      strand: 'Reading',
      description: 'Read widely across genres, periods, and cultures, demonstrating independent critical thought.',
      emergingIndicator: 'Reading is limited in range; critical thought is developing.',
      expectedIndicator: 'Reads across genres and periods, applying critical thinking independently.',
      masteryIndicator: 'Reads voraciously and eclectically, bringing independent critical thought to all encounters with text.',
    },
    // Writing
    {
      code: '9W.1',
      strand: 'Writing',
      description: 'Write with a confident, distinctive voice that is sustained across different forms.',
      emergingIndicator: 'Authorial voice is present but inconsistent.',
      expectedIndicator: 'Writes with a clear, distinctive voice sustained throughout.',
      masteryIndicator: 'Voice is compelling, original, and unmistakably assured.',
    },
    {
      code: '9W.2',
      strand: 'Writing',
      description: 'Structure writing innovatively, using form and organisation to enhance meaning.',
      emergingIndicator: 'Structure is competent but conventional.',
      expectedIndicator: 'Structures writing with deliberate and effective organisational choices.',
      masteryIndicator: 'Structure is innovative and purposeful, with form serving as an integral part of meaning.',
    },
    {
      code: '9W.3',
      strand: 'Writing',
      description: 'Craft sentences with precision, manipulating syntax for rhythm, emphasis, and effect.',
      emergingIndicator: 'Sentence construction is varied but not always controlled.',
      expectedIndicator: 'Crafts sentences with deliberate variation for effect.',
      masteryIndicator: 'Syntax is manipulated with surgical precision, creating rhythm and emphasis.',
    },
    {
      code: '9W.4',
      strand: 'Writing',
      description: 'Deploy sophisticated vocabulary with precision and nuance.',
      emergingIndicator: 'Vocabulary is ambitious but occasionally imprecise.',
      expectedIndicator: 'Deploys ambitious vocabulary with accuracy and clear effect.',
      masteryIndicator: 'Vocabulary is exquisitely precise, each word selected for its exact shade of meaning.',
    },
    {
      code: '9W.5',
      strand: 'Writing',
      description: 'Use extended imagery, symbolism, and motifs to create layered meaning.',
      emergingIndicator: 'Uses imagery but it may not be sustained or layered.',
      expectedIndicator: 'Uses extended imagery and symbolism effectively.',
      masteryIndicator: 'Creates rich, sustained patterns of imagery and symbolism that resonate thematically.',
    },
    {
      code: '9W.6',
      strand: 'Writing',
      description: 'Write persuasively and argumentatively with sophistication, using rhetorical strategies.',
      emergingIndicator: 'Uses some rhetorical techniques but argument is not always fully developed.',
      expectedIndicator: 'Constructs persuasive arguments using a range of rhetorical strategies effectively.',
      masteryIndicator: 'Produces compelling, sophisticated argumentation that commands and persuades.',
    },
    {
      code: '9W.7',
      strand: 'Writing',
      description: 'Develop complex characters, settings, and narratives in creative writing.',
      emergingIndicator: 'Characters and settings are sometimes underdeveloped.',
      expectedIndicator: 'Creates well-developed characters, settings, and narratives.',
      masteryIndicator: 'Crafts psychologically complex characters and richly realised worlds.',
    },
    {
      code: '9W.8',
      strand: 'Writing',
      description: 'Demonstrate flawless technical accuracy across extended and complex writing.',
      emergingIndicator: 'Technical accuracy is generally good but lapses under ambition.',
      expectedIndicator: 'Maintains high technical accuracy across extended, complex writing.',
      masteryIndicator: 'Technical accuracy is impeccable; conventions are manipulated for stylistic effect.',
    },
    {
      code: '9W.9',
      strand: 'Writing',
      description: 'Use punctuation as a tool for craft, controlling tone, pace, and meaning.',
      emergingIndicator: 'Uses a range of punctuation but not always for deliberate effect.',
      expectedIndicator: 'Uses punctuation deliberately to control tone and pacing.',
      masteryIndicator: 'Punctuation is wielded with mastery, shaping the reader\'s experience of the text.',
    },
    {
      code: '9W.10',
      strand: 'Writing',
      description: 'Critically evaluate and refine own writing through multiple drafts.',
      emergingIndicator: 'Some evidence of revision but improvements are surface-level.',
      expectedIndicator: 'Revises writing critically, improving content, structure, and expression.',
      masteryIndicator: 'Approaches revision as essential craft, refining writing through multiple drafts with exacting standards.',
    },
    // Speaking & Listening
    {
      code: '9SL.1',
      strand: 'Speaking & Listening',
      description: 'Communicate with authority and sophistication, deploying rhetorical techniques for impact.',
      emergingIndicator: 'Communication is clear but lacks rhetorical sophistication.',
      expectedIndicator: 'Communicates with authority, using rhetorical techniques effectively.',
      masteryIndicator: 'Commands any speaking context with sophistication, originality, and rhetorical mastery.',
    },
    {
      code: '9SL.2',
      strand: 'Speaking & Listening',
      description: 'Lead, shape, and mediate discussions with sensitivity, intellectual rigour, and purpose.',
      emergingIndicator: 'Contributes to discussion but does not actively shape or lead it.',
      expectedIndicator: 'Leads and shapes discussion with purpose and sensitivity.',
      masteryIndicator: 'Mediates complex discussions with intellectual rigour, drawing out and synthesising contributions.',
    },
    {
      code: '9SL.3',
      strand: 'Speaking & Listening',
      description: 'Evaluate spoken language critically, reflecting on the impact of choices in tone, register, and delivery.',
      emergingIndicator: 'Limited reflection on spoken language choices.',
      expectedIndicator: 'Reflects on the impact of tone, register, and delivery in spoken language.',
      masteryIndicator: 'Evaluates spoken language critically, demonstrating meta-linguistic awareness and reflexivity.',
    },
  ],
};

// ── IGCSE Language Paper 1 Mark Scheme ─────────────────────────────────────────

const igcseLanguagePaper1: AssessmentRubric = {
  id: 'igcse-lang-p1-mark-scheme',
  title: 'IGCSE English Language Paper 1 Mark Scheme',
  yearGroup: 'IGCSE',
  assessmentType: 'language-paper',
  examBoard: 'Cambridge (CIE)',
  totalMarks: 80,
  papers: [
    {
      paperId: 'igcse-lang-p1',
      paperTitle: 'Paper 1: Reading Passages (Core)',
      totalMarks: 80,
      duration: '1 hour 45 minutes',
      questions: [
        {
          question: 'Question 1',
          description: 'Short-answer comprehension questions on Passage A.',
          maxMarks: 15,
          assessmentObjective: 'R1: Demonstrate understanding of explicit meanings',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-3', description: 'Identifies isolated details; responses are often inaccurate or too vague. Copies chunks of text without selecting relevant material.', exemplar: 'Lifts whole sentences without selecting the relevant detail.' },
            { level: 2, label: 'Basic', markRange: '4-6', description: 'Identifies some relevant details from the passage. Answers show basic understanding but may include irrelevant material.', exemplar: 'Identifies the correct area of the text but includes extra information.' },
            { level: 3, label: 'Competent', markRange: '7-9', description: 'Selects relevant information accurately. Answers are focused and demonstrate clear understanding of the passage.', exemplar: 'Selects the correct detail and presents it clearly and concisely.' },
            { level: 4, label: 'Confident', markRange: '10-12', description: 'Identifies precise details with accuracy. Responses are concise and demonstrate thorough understanding.', exemplar: 'Pinpoints the exact information required using own words where appropriate.' },
            { level: 5, label: 'Excellent', markRange: '13-15', description: 'Demonstrates comprehensive understanding with precise, well-focused responses throughout.', exemplar: 'Consistently selects precise details and reformulates in own words with clarity.' },
          ],
          guidance: 'Award 1 mark per correct point identified. Accept reasonable own-words paraphrases. Do not penalise for lifting if the correct detail is selected.',
        },
        {
          question: 'Question 2',
          description: 'Short-answer comprehension questions on Passage B.',
          maxMarks: 15,
          assessmentObjective: 'R1: Demonstrate understanding of explicit meanings',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-3', description: 'Identifies isolated details from Passage B with limited accuracy.', exemplar: 'Copies text without isolating the relevant point.' },
            { level: 2, label: 'Basic', markRange: '4-6', description: 'Locates some relevant information with basic understanding.', exemplar: 'Identifies the correct area but answer is imprecise.' },
            { level: 3, label: 'Competent', markRange: '7-9', description: 'Selects relevant details accurately from the passage.', exemplar: 'Correctly identifies and presents required information.' },
            { level: 4, label: 'Confident', markRange: '10-12', description: 'Precise identification of details with thorough comprehension.', exemplar: 'Accurately selects and reformulates information in own words.' },
            { level: 5, label: 'Excellent', markRange: '13-15', description: 'Comprehensive and precise responses demonstrating full understanding.', exemplar: 'All points accurately identified with clear, focused responses.' },
          ],
          guidance: 'As for Question 1. Ensure answers relate to Passage B specifically.',
        },
        {
          question: 'Question 3',
          description: 'Summary task: select and organise relevant ideas from both passages.',
          maxMarks: 25,
          assessmentObjective: 'R2: Demonstrate understanding of implicit meanings; W3: Use appropriate register',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Few relevant points identified. Response is poorly organised and relies heavily on lifting. Little or no use of own words.', exemplar: 'Lists unconnected details copied directly from the passages.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant points identified from both passages. Organisation is basic. Some attempt to use own words but reliance on lifting remains.', exemplar: 'Some relevant points with partial use of own words.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Most relevant points identified and organised logically. Uses own words with some success. Ideas from both passages are addressed.', exemplar: 'Points are grouped thematically with reasonable use of own words.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Relevant points are selected and organised effectively. Own words are used fluently. The summary is focused, coherent, and draws on both passages.', exemplar: 'Well-organised summary covering both passages with fluent own-words expression.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'All relevant points are identified and synthesised skilfully. Writing is fluent, concise, and entirely in own words. The summary is coherent and well-structured.', exemplar: 'A polished, concise summary that synthesises both passages with precision.' },
          ],
          guidance: 'Content (15 marks): 1 mark per relevant point, up to 15. Quality of writing (10 marks): assess own words, focus, and organisation.',
        },
        {
          question: 'Question 4',
          description: 'Extended response: personal/persuasive writing linked to the topic of the passages.',
          maxMarks: 25,
          assessmentObjective: 'W1-W5: Articulate experience, order and present facts, communicate effectively, employ conventions, use appropriate register',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Content is thin and largely irrelevant. Expression is unclear with frequent errors. Little awareness of purpose, audience, or form.', exemplar: 'Brief, unfocused response with significant errors.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant content with basic development. Expression is sometimes unclear. Some awareness of purpose but form is not well managed.', exemplar: 'Addresses the topic with simple ideas and basic sentence structures.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Content is relevant and developed with some detail. Expression is generally clear. Purpose and audience are addressed with some effectiveness.', exemplar: 'A clear response with relevant ideas and generally accurate expression.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Content is well developed with effective detail. Expression is fluent and engaging. Writing is well adapted to purpose and audience.', exemplar: 'An engaging response with well-developed ideas and varied expression.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'Content is compelling with sophisticated development. Expression is assured and precise. Writing demonstrates mastery of form, purpose, and audience.', exemplar: 'A compelling, polished piece with distinctive voice and sophisticated craft.' },
          ],
          guidance: 'Content and structure (15 marks): assess relevance, development, organisation, and engagement. Language (10 marks): assess vocabulary, sentence structures, accuracy, and style.',
        },
      ],
    },
  ],
};

// ── IGCSE Language Paper 2 Mark Scheme ─────────────────────────────────────────

const igcseLanguagePaper2: AssessmentRubric = {
  id: 'igcse-lang-p2-mark-scheme',
  title: 'IGCSE English Language Paper 2 Mark Scheme',
  yearGroup: 'IGCSE',
  assessmentType: 'language-paper',
  examBoard: 'Cambridge (CIE)',
  totalMarks: 80,
  papers: [
    {
      paperId: 'igcse-lang-p2',
      paperTitle: 'Paper 2: Reading Passages (Extended)',
      totalMarks: 80,
      duration: '2 hours',
      questions: [
        {
          question: 'Question 1',
          description: 'Comprehension and language analysis on Passage A.',
          maxMarks: 20,
          assessmentObjective: 'R1, R2: Explicit and implicit understanding; R4: Select and use information',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-4', description: 'Identifies isolated details. Little understanding of implicit meaning. No analysis of language.', exemplar: 'Simple identification of surface-level information.' },
            { level: 2, label: 'Basic', markRange: '5-8', description: 'Some relevant points with basic understanding. Limited analysis of language choices.', exemplar: 'Identifies some relevant details with simple language comments.' },
            { level: 3, label: 'Competent', markRange: '9-12', description: 'Clear understanding of both explicit and implicit meaning. Some effective analysis of language with apt quotation.', exemplar: 'Explains effects of language choices with relevant textual support.' },
            { level: 4, label: 'Confident', markRange: '13-16', description: 'Thorough understanding with developed analysis. Language choices are examined with precision.', exemplar: 'Analyses language effects perceptively with well-chosen quotations.' },
            { level: 5, label: 'Excellent', markRange: '17-20', description: 'Comprehensive understanding with sophisticated analysis. Language choices are evaluated with nuance and insight.', exemplar: 'Forensic analysis of language with original insights and precise terminology.' },
          ],
          guidance: 'Up to 10 marks for comprehension; up to 10 marks for language analysis. Quotations should be short and well-integrated.',
        },
        {
          question: 'Question 2',
          description: 'Comprehension and language analysis on Passage B.',
          maxMarks: 20,
          assessmentObjective: 'R1, R2: Explicit and implicit understanding; R4: Select and use information',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-4', description: 'Identifies isolated details from Passage B with little analytical depth.', exemplar: 'Surface-level identification of information.' },
            { level: 2, label: 'Basic', markRange: '5-8', description: 'Some relevant points with basic understanding. Limited language analysis.', exemplar: 'Basic comprehension with simple observations about language.' },
            { level: 3, label: 'Competent', markRange: '9-12', description: 'Sound understanding with clear analysis. Language choices explored with support.', exemplar: 'Clear analysis of language effects with appropriate evidence.' },
            { level: 4, label: 'Confident', markRange: '13-16', description: 'Thorough understanding with developed, precise analysis of language.', exemplar: 'Detailed analysis with perceptive comments and well-selected evidence.' },
            { level: 5, label: 'Excellent', markRange: '17-20', description: 'Sophisticated understanding and analysis. Language evaluation shows genuine insight.', exemplar: 'Exceptional analysis demonstrating critical reading skills.' },
          ],
          guidance: 'As for Question 1 but relating to Passage B. Ensure candidates address language analysis explicitly.',
        },
        {
          question: 'Question 3',
          description: 'Summary: identify and organise ideas from both passages on a specific topic.',
          maxMarks: 15,
          assessmentObjective: 'R4: Select, organise, and structure information; W3: Appropriate register and style',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-3', description: 'Few relevant points. Heavy reliance on lifting. Poor organisation.', exemplar: 'Disorganised response with copied text.' },
            { level: 2, label: 'Basic', markRange: '4-6', description: 'Some relevant points from both passages. Partial use of own words.', exemplar: 'Several relevant points with mixed lifting and own words.' },
            { level: 3, label: 'Competent', markRange: '7-9', description: 'Most points identified. Generally good use of own words. Clear organisation.', exemplar: 'Organised summary covering both passages in own words.' },
            { level: 4, label: 'Confident', markRange: '10-12', description: 'All key points selected. Fluent use of own words. Cohesive and focused.', exemplar: 'Well-structured, focused summary with fluent expression.' },
            { level: 5, label: 'Excellent', markRange: '13-15', description: 'Comprehensive identification and synthesis of points. Concise, fluent, and entirely in own words.', exemplar: 'Polished summary synthesising both passages with precision and economy.' },
          ],
          guidance: 'Content (10 marks): 1 mark per point. Quality of writing (5 marks): own words, concision, and focus.',
        },
        {
          question: 'Question 4',
          description: 'Extended writing: argumentative, discursive, or persuasive response.',
          maxMarks: 25,
          assessmentObjective: 'W1-W5: Writing skills across content, structure, language, and accuracy',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Thin content with poor expression. Little sense of audience or purpose. Frequent errors.', exemplar: 'Brief, unfocused response with limited development.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant ideas with basic development. Expression is simple and occasionally unclear.', exemplar: 'Addresses the topic with simple, straightforward ideas.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Relevant content with clear development. Expression is generally fluent. Awareness of audience and purpose.', exemplar: 'Clear, well-organised response with relevant ideas.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Well-developed content with engaging detail. Expression is varied and effective. Strong adaptation to audience.', exemplar: 'Engaging and well-crafted response with effective techniques.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'Sophisticated content with compelling development. Expression is assured and distinctive. Mastery of form.', exemplar: 'Outstanding response with distinctive voice and sophisticated argumentation.' },
          ],
          guidance: 'Content and structure (15 marks): assess ideas, development, and organisation. Language and accuracy (10 marks): assess vocabulary, style, and technical accuracy.',
        },
      ],
    },
  ],
};

// ── IGCSE Literature Paper 1 Mark Scheme ──────────────────────────────────────

const igcseLiteraturePaper1: AssessmentRubric = {
  id: 'igcse-lit-p1-mark-scheme',
  title: 'IGCSE English Literature Paper 1 Mark Scheme',
  yearGroup: 'IGCSE',
  assessmentType: 'literature-paper',
  examBoard: 'Cambridge (CIE)',
  totalMarks: 50,
  papers: [
    {
      paperId: 'igcse-lit-p1',
      paperTitle: 'Paper 1: Poetry and Prose',
      totalMarks: 50,
      duration: '1 hour 30 minutes',
      questions: [
        {
          question: 'Section A: Poetry (passage-based)',
          description: 'Analysis of an extract from a studied poem with wider reference to the collection.',
          maxMarks: 25,
          assessmentObjective: 'AO1-AO4: Knowledge, understanding, analysis of language/structure, informed personal response, context',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Some awareness of the passage but response is largely narrative or descriptive. Little analysis of language. No wider reference to the text.', exemplar: 'Retells the content of the poem without analysis.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant comments on the passage with basic understanding. Some attempt at language analysis, though undeveloped. Limited wider reference.', exemplar: 'Identifies some features with simple comments on effect.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Sound understanding of the passage with clear analysis. Language and structural features are explored with relevant support. Some effective wider reference.', exemplar: 'Analyses language choices with clear explanations and relevant quotation.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Thorough analysis with perceptive insights. Language, structure, and form are examined in depth. Wider reference enriches the response.', exemplar: 'Perceptive analysis linking passage detail to wider themes and methods.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'Sophisticated, exploratory analysis demonstrating critical insight. Language, structure, and form are evaluated with precision. Wider reference is integrated seamlessly.', exemplar: 'A conceptualised response with original insights and assured critical analysis.' },
          ],
          guidance: 'Candidates must address the passage in detail and make wider reference to the collection or poem as a whole. Reward engagement with language and form.',
        },
        {
          question: 'Section B: Prose (essay)',
          description: 'Essay question on a studied prose text, exploring themes, characters, or the writer\'s craft.',
          maxMarks: 25,
          assessmentObjective: 'AO1-AO4: Knowledge, understanding, analysis, personal response, context',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Response is largely narrative with thin analysis. Knowledge of the text is superficial.', exemplar: 'Retells plot events without exploring the question.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant knowledge with basic understanding. Response addresses the question but analysis is undeveloped.', exemplar: 'Makes some relevant points about the text with limited development.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Sound knowledge and understanding. Analysis of the writer\'s methods is present and supported. Clear engagement with the question.', exemplar: 'Structured response with clear analysis supported by textual evidence.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Detailed knowledge with perceptive analysis. Writer\'s methods are explored in depth. Personal response is well developed.', exemplar: 'Thorough exploration of the question with perceptive textual analysis.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'Comprehensive knowledge with sophisticated analysis. Evaluation of the writer\'s craft is nuanced and convincing. Demonstrates genuine critical engagement.', exemplar: 'An authoritative response with original critical insight and comprehensive textual knowledge.' },
          ],
          guidance: 'Reward close engagement with the question and the writer\'s methods. Penalise prepared answers that do not address the specific question.',
        },
      ],
    },
  ],
};

// ── IGCSE Literature Paper 2 Mark Scheme ──────────────────────────────────────

const igcseLiteraturePaper2: AssessmentRubric = {
  id: 'igcse-lit-p2-mark-scheme',
  title: 'IGCSE English Literature Paper 2 Mark Scheme',
  yearGroup: 'IGCSE',
  assessmentType: 'literature-paper',
  examBoard: 'Cambridge (CIE)',
  totalMarks: 50,
  papers: [
    {
      paperId: 'igcse-lit-p2',
      paperTitle: 'Paper 2: Drama',
      totalMarks: 50,
      duration: '1 hour 30 minutes',
      questions: [
        {
          question: 'Section A: Passage-based question',
          description: 'Analysis of an extract from a studied drama text, considering its significance in the play.',
          maxMarks: 25,
          assessmentObjective: 'AO1-AO4: Knowledge, understanding, analysis, personal response, dramatic context',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Some awareness of the passage content. Response is descriptive with minimal analysis. Little sense of dramatic context.', exemplar: 'Describes what happens in the extract without analysis.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant comments on the passage. Basic awareness of dramatic techniques. Limited wider reference.', exemplar: 'Identifies some features of dialogue or staging with simple comments.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Sound understanding with clear analysis of dramatic methods. Language and staging are explored. Some effective wider reference.', exemplar: 'Analyses how dialogue and stage directions create dramatic effect.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Perceptive analysis of dramatic methods and their effects. Thorough understanding of the passage in context of the whole play.', exemplar: 'Perceptive exploration of how the extract develops themes and character.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'Sophisticated analysis demonstrating critical insight into dramatic craft. Evaluates the significance of the passage within the play\'s architecture.', exemplar: 'A critically assured response with original insights into dramatic art.' },
          ],
          guidance: 'Reward awareness of the text as drama. Candidates should consider language, staging, dramatic irony, and the passage\'s significance within the play.',
        },
        {
          question: 'Section B: Essay question',
          description: 'Essay exploring character, theme, or the playwright\'s craft across the studied drama text.',
          maxMarks: 25,
          assessmentObjective: 'AO1-AO4: Knowledge, understanding, analysis, personal response, context',
          bands: [
            { level: 1, label: 'Limited', markRange: '1-5', description: 'Thin knowledge with narrative response. No analysis of dramatic methods.', exemplar: 'Retells plot events without addressing the question.' },
            { level: 2, label: 'Basic', markRange: '6-10', description: 'Some relevant knowledge with basic understanding. Limited analysis of playwright\'s methods.', exemplar: 'Some relevant ideas with basic reference to the text.' },
            { level: 3, label: 'Competent', markRange: '11-15', description: 'Sound knowledge with clear analysis. Engages with the question and explores the playwright\'s methods.', exemplar: 'Structured argument with analysis of dramatic techniques.' },
            { level: 4, label: 'Confident', markRange: '16-20', description: 'Detailed knowledge with perceptive analysis. Strong engagement with the playwright\'s craft and the text as drama.', exemplar: 'Thorough, perceptive response with detailed analysis of dramatic art.' },
            { level: 5, label: 'Excellent', markRange: '21-25', description: 'Comprehensive knowledge with sophisticated critical analysis. Evaluates the playwright\'s craft with originality and authority.', exemplar: 'An authoritative, critically sophisticated response demonstrating deep dramatic understanding.' },
          ],
          guidance: 'Ensure responses treat the text as drama, not merely as narrative. Reward analysis of staging, dialogue, structure, and audience response.',
        },
      ],
    },
  ],
};

// ── IGCSE Grade Boundary Guidance ─────────────────────────────────────────────

const igcseGradeBoundaries: AssessmentRubric = {
  id: 'igcse-grade-boundaries',
  title: 'IGCSE Grade Boundary Guidance',
  yearGroup: 'IGCSE',
  assessmentType: 'grade-boundaries',
  examBoard: 'Cambridge (CIE)',
  gradeBoundaries: [
    { grade: 'A*', percentageRange: '90-100%', descriptor: 'Exceptional achievement across all assessment objectives. Demonstrates sophisticated critical thinking, analytical precision, and assured technical control.' },
    { grade: 'A', percentageRange: '80-89%', descriptor: 'High achievement. Confident and perceptive analysis. Well-developed arguments with effective use of evidence. Assured writing craft.' },
    { grade: 'B', percentageRange: '70-79%', descriptor: 'Good achievement. Clear analysis with competent use of evidence. Writing is well organised with generally effective expression.' },
    { grade: 'C', percentageRange: '60-69%', descriptor: 'Competent achievement. Sound understanding with relevant analysis. Writing communicates clearly with appropriate structure.' },
    { grade: 'D', percentageRange: '50-59%', descriptor: 'Adequate achievement. Basic understanding with some relevant analysis. Writing is generally clear but may lack development.' },
    { grade: 'E', percentageRange: '40-49%', descriptor: 'Basic achievement. Limited understanding with simple responses. Writing communicates meaning but with limited range and some inaccuracy.' },
    { grade: 'F', percentageRange: '30-39%', descriptor: 'Below expectations. Partial understanding. Responses are incomplete or superficial. Significant weaknesses in expression.' },
    { grade: 'G', percentageRange: '20-29%', descriptor: 'Minimal achievement. Very limited understanding demonstrated. Responses are fragmentary with major weaknesses in all areas.' },
    { grade: 'U', percentageRange: '0-19%', descriptor: 'Ungraded. Insufficient quality for the award of a grade. Response is absent, irrelevant, or negligible.' },
  ],
};

// ── IAL Unit 1 Mark Scheme ────────────────────────────────────────────────────

const ialUnit1: AssessmentRubric = {
  id: 'ial-unit1-mark-scheme',
  title: 'IAL English Literature Unit 1: Post-2000 Prose',
  yearGroup: 'IAL',
  assessmentType: 'ial-unit',
  examBoard: 'Pearson Edexcel',
  totalMarks: 60,
  papers: [
    {
      paperId: 'ial-unit1',
      paperTitle: 'Unit 1: Post-2000 Prose',
      totalMarks: 60,
      duration: '1 hour 30 minutes',
      questions: [
        {
          question: 'Section A: Close reading',
          description: 'Close analysis of a passage from the studied prose text.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Articulate informed personal response. AO2: Analyse language, form, and structure.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited response. Some awareness of content but minimal analysis of writer\'s methods. Personal response is simplistic.', exemplar: 'Describes the passage content with little or no analysis.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some understanding of the passage. Identifies some features of language but analysis is undeveloped. Basic personal response.', exemplar: 'Identifies language features with basic comments on effect.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound understanding with clear analysis. Explores effects of language, form, and structure. Personal response is clear and supported.', exemplar: 'Explains effects of language and structure with relevant quotation.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Detailed and perceptive analysis. Language, form, and structure are examined in depth. Personal response is developed and convincing.', exemplar: 'Perceptive analysis integrating language, form, and thematic concerns.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Sophisticated, exploratory analysis with critical originality. Writer\'s methods are evaluated with precision. Personal response is compelling and conceptualised.', exemplar: 'A critically assured, conceptualised response demonstrating original insight.' },
          ],
          guidance: 'AO1 (15 marks): quality of argument, use of evidence, written accuracy. AO2 (15 marks): analysis of language, form, structure, and effects.',
        },
        {
          question: 'Section B: Essay',
          description: 'Essay question exploring a theme, character, or aspect of the writer\'s craft across the whole text.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Articulate informed response. AO3: Demonstrate understanding of contexts.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited engagement with the question. Knowledge is thin. Response is descriptive or narrative.', exemplar: 'Retells content with minimal reference to the question.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some relevant knowledge with basic understanding. Engages with the question at a simple level.', exemplar: 'Some relevant points with basic textual support.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound knowledge with clear engagement. Analysis is relevant and supported. Some consideration of context.', exemplar: 'Structured argument with clear analysis and some contextual awareness.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Detailed knowledge with perceptive analysis. Contextual understanding enhances interpretation. Well-structured argument.', exemplar: 'A thorough, perceptive response integrating text and context convincingly.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Comprehensive knowledge with sophisticated analysis. Context is explored with nuance. Argument is compelling and original.', exemplar: 'An authoritative response demonstrating critical sophistication and contextual depth.' },
          ],
          guidance: 'AO1 (15 marks): quality of argument and textual reference. AO3 (15 marks): understanding of significance of contexts.',
        },
      ],
    },
  ],
};

// ── IAL Unit 2 Mark Scheme ────────────────────────────────────────────────────

const ialUnit2: AssessmentRubric = {
  id: 'ial-unit2-mark-scheme',
  title: 'IAL English Literature Unit 2: Drama',
  yearGroup: 'IAL',
  assessmentType: 'ial-unit',
  examBoard: 'Pearson Edexcel',
  totalMarks: 60,
  papers: [
    {
      paperId: 'ial-unit2',
      paperTitle: 'Unit 2: Drama',
      totalMarks: 60,
      duration: '1 hour 30 minutes',
      questions: [
        {
          question: 'Section A: Close reading of drama extract',
          description: 'Close analysis of an extract from the studied drama text.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Informed personal response. AO2: Analysis of dramatic methods.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited analysis. Awareness of content but minimal exploration of dramatic methods.', exemplar: 'Describes events in the extract without analysis of dramatic craft.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some awareness of dramatic techniques. Basic analysis of dialogue, staging, or characterisation.', exemplar: 'Notes some dramatic features with simple observations.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound analysis of dramatic methods. Clear exploration of how the playwright creates effects.', exemplar: 'Analyses dialogue, structure, and staging with relevant support.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Perceptive analysis of dramatic craft. Explores the interplay of language, staging, and audience response.', exemplar: 'Perceptive exploration of how the playwright shapes audience experience.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Sophisticated evaluation of dramatic art. Critical insight into the playwright\'s methods. Response is conceptualised and original.', exemplar: 'A critically sophisticated response demonstrating deep understanding of drama as performance.' },
          ],
          guidance: 'AO1 (15 marks): quality of argument and evidence. AO2 (15 marks): analysis of dramatic methods and effects. Reward awareness of text as drama.',
        },
        {
          question: 'Section B: Essay on drama',
          description: 'Essay exploring themes, characters, or the playwright\'s craft across the whole play.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Informed response. AO3: Understanding of context. AO4: Connections across texts (where relevant).',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited engagement. Narrative response with thin knowledge.', exemplar: 'Retells plot without engaging with the question.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some relevant knowledge and basic engagement. Limited exploration of themes or craft.', exemplar: 'Basic response with some relevant points.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound knowledge with clear analysis. Some contextual understanding. Engages clearly with the question.', exemplar: 'Structured response with clear analysis and contextual awareness.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Detailed knowledge with perceptive analysis. Context enriches interpretation. Strong argument.', exemplar: 'Thorough response with perceptive textual analysis and contextual depth.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Comprehensive knowledge with sophisticated critical analysis. Context is integral to interpretation.', exemplar: 'An authoritative, original response with sophisticated critical engagement.' },
          ],
          guidance: 'AO1 (10 marks): argument and evidence. AO3 (10 marks): contexts. AO4 (10 marks): connections if comparing texts.',
        },
      ],
    },
  ],
};

// ── IAL Unit 3 Mark Scheme ────────────────────────────────────────────────────

const ialUnit3: AssessmentRubric = {
  id: 'ial-unit3-mark-scheme',
  title: 'IAL English Literature Unit 3: Poetry',
  yearGroup: 'IAL',
  assessmentType: 'ial-unit',
  examBoard: 'Pearson Edexcel',
  totalMarks: 60,
  papers: [
    {
      paperId: 'ial-unit3',
      paperTitle: 'Unit 3: Poetry',
      totalMarks: 60,
      duration: '1 hour 30 minutes',
      questions: [
        {
          question: 'Section A: Close reading of poem/extract',
          description: 'Close analysis of a poem or extract from the studied poetry collection.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Informed personal response. AO2: Analysis of language, form, and structure in poetry.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited response. Some awareness of the poem but minimal analysis of poetic methods.', exemplar: 'Paraphrases the poem with little or no analysis.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some understanding with basic identification of poetic features. Analysis is undeveloped.', exemplar: 'Identifies some poetic features with basic comment.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound understanding with clear analysis of language, imagery, and form. Effects explored with evidence.', exemplar: 'Analyses imagery and form with clear explanation of effects.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Perceptive analysis of poetic craft. Imagery, rhythm, and form are examined in depth.', exemplar: 'Perceptive exploration of how form and language create meaning.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Sophisticated analysis of poetic art. Evaluates the interplay of sound, imagery, structure, and meaning with originality.', exemplar: 'A critically sophisticated response demonstrating genuine poetic sensibility.' },
          ],
          guidance: 'AO1 (15 marks): argument quality and use of evidence. AO2 (15 marks): analysis of poetic methods and their effects.',
        },
        {
          question: 'Section B: Comparative essay',
          description: 'Comparative essay on two or more poems from the studied collection, exploring a theme or technique.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Informed response. AO3: Contexts. AO4: Connections between texts.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited engagement with both poems. Comparison is absent or superficial.', exemplar: 'Discusses poems separately without comparison.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some comparison attempted. Knowledge of poems is basic. Limited contextual awareness.', exemplar: 'Simple comparison with basic observations.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Clear comparison with relevant analysis. Some contextual understanding supports interpretation.', exemplar: 'Structured comparison with clear analytical points.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Effective, detailed comparison with perceptive analysis. Context is integrated meaningfully.', exemplar: 'Sophisticated comparison integrating analysis and context.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Outstanding comparative analysis. Poems are examined with critical sophistication. Context deepens insight.', exemplar: 'A masterful comparative response with original critical insight.' },
          ],
          guidance: 'AO1 (10 marks): argument and evidence. AO3 (10 marks): contexts. AO4 (10 marks): quality of comparison.',
        },
      ],
    },
  ],
};

// ── IAL Unit 4 Mark Scheme ────────────────────────────────────────────────────

const ialUnit4: AssessmentRubric = {
  id: 'ial-unit4-mark-scheme',
  title: 'IAL English Literature Unit 4: Shakespeare and Pre-1900 Prose',
  yearGroup: 'IAL',
  assessmentType: 'ial-unit',
  examBoard: 'Pearson Edexcel',
  totalMarks: 60,
  papers: [
    {
      paperId: 'ial-unit4',
      paperTitle: 'Unit 4: Shakespeare and Pre-1900 Prose',
      totalMarks: 60,
      duration: '1 hour 30 minutes',
      questions: [
        {
          question: 'Section A: Shakespeare close reading',
          description: 'Close analysis of an extract from the studied Shakespeare play.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Informed response. AO2: Analysis of dramatic and poetic methods. AO5: Literary connections and comparisons.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited engagement with the extract. Little analysis of Shakespeare\'s language or dramatic craft.', exemplar: 'Paraphrases the extract without analysis.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some relevant comments on language or dramatic effect. Basic understanding of the extract.', exemplar: 'Notes some language features with simple comments.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound analysis of Shakespeare\'s language and dramatic methods. Clear understanding of the extract in context.', exemplar: 'Analyses verse, imagery, and dramatic technique with relevant support.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Perceptive analysis of Shakespeare\'s craft. Explores the interplay of verse, imagery, and dramatic structure.', exemplar: 'Perceptive exploration of Shakespeare\'s language and dramatic art.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Sophisticated critical engagement with Shakespeare\'s art. Evaluates language, form, and dramatic craft with originality.', exemplar: 'An authoritative response demonstrating deep critical engagement with Shakespeare.' },
          ],
          guidance: 'AO1 (10 marks): argument and evidence. AO2 (10 marks): analysis of dramatic and poetic methods. AO5 (10 marks): literary connections.',
        },
        {
          question: 'Section B: Pre-1900 Prose essay',
          description: 'Essay on the studied pre-1900 prose text, exploring theme, character, or narrative craft.',
          maxMarks: 30,
          assessmentObjective: 'AO1: Informed response. AO3: Understanding of contexts. AO4: Connections between texts.',
          bands: [
            { level: 1, label: 'Band 1', markRange: '1-6', description: 'Limited response with thin knowledge. Narrative rather than analytical.', exemplar: 'Retells content with minimal engagement with the question.' },
            { level: 2, label: 'Band 2', markRange: '7-12', description: 'Some relevant knowledge with basic analysis. Limited contextual understanding.', exemplar: 'Makes some relevant points with basic textual reference.' },
            { level: 3, label: 'Band 3', markRange: '13-18', description: 'Sound knowledge and clear analysis. Contextual understanding informs interpretation.', exemplar: 'Clear analysis with relevant contextual awareness.' },
            { level: 4, label: 'Band 4', markRange: '19-24', description: 'Detailed knowledge with perceptive analysis. Context is integrated to deepen interpretation.', exemplar: 'Perceptive, contextually-informed analysis with strong argument.' },
            { level: 5, label: 'Band 5', markRange: '25-30', description: 'Comprehensive knowledge with sophisticated analysis. Contextual depth enriches a compelling argument.', exemplar: 'An authoritative, original response with contextual sophistication.' },
          ],
          guidance: 'AO1 (10 marks): argument and evidence. AO3 (10 marks): significance of contexts. AO4 (10 marks): connections.',
        },
      ],
    },
  ],
};

// ── IAL Coursework Marking Criteria ───────────────────────────────────────────

const ialCoursework: AssessmentRubric = {
  id: 'ial-coursework-marking',
  title: 'IAL Coursework Marking Criteria',
  yearGroup: 'IAL',
  assessmentType: 'ial-coursework',
  examBoard: 'Pearson Edexcel',
  totalMarks: 60,
  bands: [
    {
      level: 1,
      label: 'Band 1 (Limited)',
      markRange: '1-12',
      description:
        'AO1: Response demonstrates limited knowledge of the text(s). Argument is unfocused or absent. Written expression is weak with frequent errors. AO2: Limited awareness of writer\'s methods. AO3: Little or no understanding of contextual factors. AO4: Minimal connection between texts (if applicable).',
      exemplar:
        'Coursework retells content with minimal analytical engagement. Points are unsupported or irrelevant. Expression is poor.',
    },
    {
      level: 2,
      label: 'Band 2 (Basic)',
      markRange: '13-24',
      description:
        'AO1: Some relevant knowledge with basic understanding. Argument is present but underdeveloped. Written expression is generally clear but limited. AO2: Some awareness of methods with basic analysis. AO3: Basic contextual awareness. AO4: Simple connections between texts.',
      exemplar:
        'Coursework makes relevant points with basic textual support. Engages with the question at a surface level. Expression is adequate.',
    },
    {
      level: 3,
      label: 'Band 3 (Competent)',
      markRange: '25-36',
      description:
        'AO1: Sound knowledge with a clear, structured argument. Written expression is clear and accurate. AO2: Clear analysis of writer\'s methods with relevant evidence. AO3: Contextual understanding informs interpretation. AO4: Clear, relevant connections between texts.',
      exemplar:
        'Coursework presents a well-structured argument with sound analysis and appropriate contextual awareness. Expression is clear and accurate.',
    },
    {
      level: 4,
      label: 'Band 4 (Confident)',
      markRange: '37-48',
      description:
        'AO1: Detailed knowledge with a well-crafted, perceptive argument. Written expression is assured. AO2: Perceptive analysis of methods with precise evidence. AO3: Context is integrated to deepen interpretation. AO4: Effective, developed connections between texts.',
      exemplar:
        'Coursework demonstrates perceptive analysis within a compelling argument. Contextual knowledge enriches interpretation. Expression is confident and precise.',
    },
    {
      level: 5,
      label: 'Band 5 (Exceptional)',
      markRange: '49-60',
      description:
        'AO1: Comprehensive knowledge with a sophisticated, original argument. Written expression is exceptional. AO2: Evaluative analysis of methods with critical insight. AO3: Context is explored with nuance and depth. AO4: Sophisticated synthesis across texts.',
      exemplar:
        'Coursework presents an authoritative, original argument demonstrating critical sophistication. Analysis and contextual engagement are exemplary. Expression is of the highest calibre.',
    },
  ],
};

// ── IAL Grade Descriptors ─────────────────────────────────────────────────────

const ialGradeDescriptors: AssessmentRubric = {
  id: 'ial-grade-descriptors',
  title: 'IAL Grade Descriptors',
  yearGroup: 'IAL',
  assessmentType: 'grade-boundaries',
  examBoard: 'Pearson Edexcel',
  gradeBoundaries: [
    { grade: 'A*', percentageRange: '90-100%', ums: '270-300', descriptor: 'Exceptional critical engagement demonstrating originality, sophistication, and comprehensive textual knowledge. Analysis is forensic and conceptualised. Written expression is exemplary.' },
    { grade: 'A', percentageRange: '80-89%', ums: '240-269', descriptor: 'Confident and perceptive critical analysis with detailed knowledge of texts. Arguments are well-crafted and convincingly supported. Strong contextual understanding.' },
    { grade: 'B', percentageRange: '70-79%', ums: '210-239', descriptor: 'Competent analysis with sound textual knowledge. Arguments are clearly structured and supported. Good awareness of writer\'s methods and context.' },
    { grade: 'C', percentageRange: '60-69%', ums: '180-209', descriptor: 'Clear engagement with texts and questions. Analysis is present and generally relevant. Some effective use of evidence and awareness of context.' },
    { grade: 'D', percentageRange: '50-59%', ums: '150-179', descriptor: 'Basic engagement with texts. Some relevant analysis but responses may lack development or precision. Limited contextual understanding.' },
    { grade: 'E', percentageRange: '40-49%', ums: '120-149', descriptor: 'Limited but adequate engagement. Basic understanding of texts with simple analysis. Written expression may be unclear or inaccurate.' },
    { grade: 'U', percentageRange: '0-39%', ums: '0-119', descriptor: 'Insufficient quality for the award of a grade. Response demonstrates inadequate knowledge, understanding, or analytical skill.' },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────────

export const assessmentRubrics: AssessmentRubric[] = [
  // KS3 Rubrics
  ks3ReadingRubric,
  ks3WritingRubric,
  ks3SpeakingListeningRubric,
  spagCriteria,
  markingCodes,
  feedbackTemplates,

  // End of Year Expectations
  y7Expectations,
  y8Expectations,
  y9Expectations,

  // IGCSE Mark Schemes
  igcseLanguagePaper1,
  igcseLanguagePaper2,
  igcseLiteraturePaper1,
  igcseLiteraturePaper2,
  igcseGradeBoundaries,

  // IAL Mark Schemes
  ialUnit1,
  ialUnit2,
  ialUnit3,
  ialUnit4,
  ialCoursework,
  ialGradeDescriptors,
];
