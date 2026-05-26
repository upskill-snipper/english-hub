/**
 * KS3 Assessment Tracker - Years 7, 8, and 9
 * Covers assessment criteria, target-setting data, and parent report phrases.
 */

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface AssessmentCriterion {
  id: string
  strand: 'reading' | 'writing' | 'spoken-language' | 'grammar'
  skillCode: string
  descriptor: string
  yearGroup: 'Year 7' | 'Year 8' | 'Year 9'
  belowExpected: string
  meetingExpected: string
  exceedingExpected: string
}

export interface TargetSetting {
  yearGroup: string
  term: number
  expectedLevel: string
  keyMilestones: string[]
  gcseReadinessIndicators: string[]
}

export interface ParentReportPhrase {
  id: string
  area: 'reading' | 'writing' | 'spoken-language' | 'overall'
  performance: 'exceeding' | 'meeting' | 'approaching' | 'below'
  yearGroup: string
  phrase: string
  nextSteps: string
}

// ── Assessment Criteria ───────────────────────────────────────────────────────

export const assessmentCriteria: AssessmentCriterion[] = [
  // ── Year 7: Reading (3) ───────────────────────────────────────────────────
  {
    id: 'ac-7r-01',
    strand: 'reading',
    skillCode: '7R1',
    descriptor: 'Retrieve and record information from a text',
    yearGroup: 'Year 7',
    belowExpected:
      'Identifies some relevant details with limited accuracy; often copies verbatim without processing meaning.',
    meetingExpected:
      'Selects relevant details accurately and begins to use own words to record information.',
    exceedingExpected:
      'Retrieves precise information from multiple parts of the text and consistently paraphrases with clarity.',
  },
  {
    id: 'ac-7r-02',
    strand: 'reading',
    skillCode: '7R2',
    descriptor: "Explain and comment on writers' use of language for effect",
    yearGroup: 'Year 7',
    belowExpected: 'Identifies a language feature but provides little or no comment on its effect.',
    meetingExpected:
      'Identifies language features and makes a valid comment on the effect on the reader.',
    exceedingExpected:
      "Analyses language choices precisely, exploring connotations and linking effect to the text's wider purpose.",
  },
  {
    id: 'ac-7r-03',
    strand: 'reading',
    skillCode: '7R3',
    descriptor: 'Infer meaning and support with textual evidence',
    yearGroup: 'Year 7',
    belowExpected:
      'Makes a simple inference without textual support or uses evidence that does not match the inference.',
    meetingExpected: 'Makes a relevant inference and supports it with appropriate quotation.',
    exceedingExpected:
      'Develops multiple layered inferences and selects well-chosen embedded quotations to support each point.',
  },

  // ── Year 7: Writing (3) ───────────────────────────────────────────────────
  {
    id: 'ac-7w-01',
    strand: 'writing',
    skillCode: '7W1',
    descriptor: 'Organise writing with clear structural features',
    yearGroup: 'Year 7',
    belowExpected: 'Writing lacks clear paragraphing; ideas are listed rather than developed.',
    meetingExpected:
      'Uses paragraphs with a clear topic focus; basic linking between paragraphs is evident.',
    exceedingExpected:
      'Employs varied structural techniques (e.g. cyclical structure, varied paragraph length) for deliberate effect.',
  },
  {
    id: 'ac-7w-02',
    strand: 'writing',
    skillCode: '7W2',
    descriptor: 'Use a range of sentences for clarity, purpose, and effect',
    yearGroup: 'Year 7',
    belowExpected:
      'Predominantly uses simple or compound sentences; limited variety reduces impact.',
    meetingExpected: 'Attempts complex sentences and some variation in sentence openings.',
    exceedingExpected:
      'Deploys a deliberate variety of sentence types and lengths; manipulates syntax for rhetorical or literary effect.',
  },
  {
    id: 'ac-7w-03',
    strand: 'writing',
    skillCode: '7W3',
    descriptor: 'Write for a specific audience and purpose',
    yearGroup: 'Year 7',
    belowExpected:
      'Register and tone are inconsistent; writing does not clearly address the intended audience.',
    meetingExpected:
      'Maintains an appropriate register throughout and shows awareness of audience expectations.',
    exceedingExpected:
      'Sustains a precise tone and voice tailored to audience; makes sophisticated choices that enhance purpose.',
  },

  // ── Year 7: Spoken Language (2) ───────────────────────────────────────────
  {
    id: 'ac-7sl-01',
    strand: 'spoken-language',
    skillCode: '7SL1',
    descriptor: 'Speak clearly and with confidence in a range of contexts',
    yearGroup: 'Year 7',
    belowExpected:
      'Speaks quietly or with significant hesitation; limited eye contact with the audience.',
    meetingExpected:
      'Speaks with reasonable clarity and maintains some eye contact; delivery is mostly fluent.',
    exceedingExpected:
      'Speaks with confidence, clear projection, and varied pace; sustains strong audience engagement.',
  },
  {
    id: 'ac-7sl-02',
    strand: 'spoken-language',
    skillCode: '7SL2',
    descriptor: 'Listen and respond to others, building on their ideas',
    yearGroup: 'Year 7',
    belowExpected: 'Listens passively; responses are tangential or merely repeat what was said.',
    meetingExpected:
      'Listens attentively and makes relevant contributions that acknowledge prior speakers.',
    exceedingExpected:
      "Actively builds on others' ideas, challenges respectfully, and steers discussion constructively.",
  },

  // ── Year 7: Grammar (2) ───────────────────────────────────────────────────
  {
    id: 'ac-7g-01',
    strand: 'grammar',
    skillCode: '7G1',
    descriptor:
      'Use accurate sentence punctuation including full stops, capital letters, and commas',
    yearGroup: 'Year 7',
    belowExpected: 'Frequent errors in sentence demarcation; commas often missing or misused.',
    meetingExpected:
      'Mostly accurate sentence demarcation; uses commas in lists and some subordinate clauses.',
    exceedingExpected:
      'Consistently accurate sentence punctuation; uses commas with precision across a range of clause types.',
  },
  {
    id: 'ac-7g-02',
    strand: 'grammar',
    skillCode: '7G2',
    descriptor: 'Use a range of conjunctions to create complex sentences',
    yearGroup: 'Year 7',
    belowExpected:
      'Relies on "and", "but", and "because"; complex sentences are rare or inaccurate.',
    meetingExpected:
      'Uses a range of subordinating and coordinating conjunctions to form mostly accurate complex sentences.',
    exceedingExpected:
      'Selects conjunctions for nuanced logical relationships (e.g. concession, condition); embeds clauses fluently.',
  },

  // ── Year 8: Reading (3) ───────────────────────────────────────────────────
  {
    id: 'ac-8r-01',
    strand: 'reading',
    skillCode: '8R1',
    descriptor: 'Analyse how structure contributes to meaning',
    yearGroup: 'Year 8',
    belowExpected:
      'Identifies a structural feature (e.g. opening or ending) but does not explain its contribution to meaning.',
    meetingExpected:
      'Comments on how structural choices (e.g. paragraph order, shifts in perspective) create meaning.',
    exceedingExpected:
      "Analyses the cumulative effect of structural decisions, linking them to the text's overall message or impact.",
  },
  {
    id: 'ac-8r-02',
    strand: 'reading',
    skillCode: '8R2',
    descriptor: "Compare writers' methods across two texts",
    yearGroup: 'Year 8',
    belowExpected: 'Lists similarities or differences without analysis; comparison is superficial.',
    meetingExpected:
      'Makes valid comparisons of language or structural choices with some analytical comment.',
    exceedingExpected:
      "Compares writers' methods in an integrated way, evaluating the relative effectiveness of each approach.",
  },
  {
    id: 'ac-8r-03',
    strand: 'reading',
    skillCode: '8R3',
    descriptor: "Evaluate a text's effectiveness and the writer's choices",
    yearGroup: 'Year 8',
    belowExpected:
      'Gives a personal opinion without reference to the text or with limited support.',
    meetingExpected: 'Offers a supported evaluative judgement and uses relevant textual evidence.',
    exceedingExpected:
      'Evaluates with confidence, considering alternative interpretations and the extent to which the text achieves its purpose.',
  },

  // ── Year 8: Writing (3) ───────────────────────────────────────────────────
  {
    id: 'ac-8w-01',
    strand: 'writing',
    skillCode: '8W1',
    descriptor: 'Use a range of vocabulary for precision and effect',
    yearGroup: 'Year 8',
    belowExpected:
      'Vocabulary is limited and repetitive; word choices rarely create deliberate effect.',
    meetingExpected:
      'Selects some precise or ambitious vocabulary; word choices are generally appropriate to purpose.',
    exceedingExpected:
      'Deploys rich and varied vocabulary with clear intent; shows awareness of connotation and register.',
  },
  {
    id: 'ac-8w-02',
    strand: 'writing',
    skillCode: '8W2',
    descriptor: 'Use a range of literary or rhetorical techniques',
    yearGroup: 'Year 8',
    belowExpected:
      'Techniques are absent or used inaccurately; there is no apparent intention behind their use.',
    meetingExpected:
      'Attempts at least two techniques (e.g. metaphor, repetition) with some purposeful effect.',
    exceedingExpected:
      'Deploys multiple techniques with sophistication; the effect is precisely controlled and consistent with overall purpose.',
  },
  {
    id: 'ac-8w-03',
    strand: 'writing',
    skillCode: '8W3',
    descriptor: 'Craft a convincing narrative or argument across extended writing',
    yearGroup: 'Year 8',
    belowExpected:
      'Ideas are underdeveloped or contradictory; the piece does not sustain a clear line of thought.',
    meetingExpected:
      'Develops ideas logically with some elaboration; the overall argument or narrative is coherent.',
    exceedingExpected:
      'Sustains a compelling and coherent extended piece; ideas are fully developed and the writing demonstrates control throughout.',
  },

  // ── Year 8: Spoken Language (2) ───────────────────────────────────────────
  {
    id: 'ac-8sl-01',
    strand: 'spoken-language',
    skillCode: '8SL1',
    descriptor: 'Present a structured spoken argument or explanation',
    yearGroup: 'Year 8',
    belowExpected: 'Presentation lacks clear structure; key points are difficult to follow.',
    meetingExpected:
      'Presents ideas in a logical sequence with a clear introduction and conclusion.',
    exceedingExpected:
      'Delivers a well-structured, persuasive presentation with effective use of evidence and counter-argument.',
  },
  {
    id: 'ac-8sl-02',
    strand: 'spoken-language',
    skillCode: '8SL2',
    descriptor: 'Use Standard English appropriately in formal spoken contexts',
    yearGroup: 'Year 8',
    belowExpected:
      'Relies predominantly on informal register even in formal contexts; code-switching is not evident.',
    meetingExpected:
      'Switches to Standard English in formal contexts with generally appropriate vocabulary.',
    exceedingExpected:
      'Consistently and confidently uses Standard English in formal contexts; vocabulary is precise and audience-aware.',
  },

  // ── Year 8: Grammar (2) ───────────────────────────────────────────────────
  {
    id: 'ac-8g-01',
    strand: 'grammar',
    skillCode: '8G1',
    descriptor: 'Use a range of punctuation including colons, semicolons, and dashes',
    yearGroup: 'Year 8',
    belowExpected:
      'Advanced punctuation is absent or used incorrectly; over-reliance on commas and full stops.',
    meetingExpected:
      'Attempts colons, semicolons, or dashes with mostly accurate use in at least one context.',
    exceedingExpected:
      'Uses a full range of punctuation accurately and for deliberate effect, demonstrating clear understanding of function.',
  },
  {
    id: 'ac-8g-02',
    strand: 'grammar',
    skillCode: '8G2',
    descriptor: 'Maintain consistent tense and agreement across extended writing',
    yearGroup: 'Year 8',
    belowExpected:
      'Tense shifts are frequent and unintentional; subject-verb agreement errors are common.',
    meetingExpected:
      'Maintains consistent tense in most of the writing; subject-verb agreement is generally accurate.',
    exceedingExpected:
      'Demonstrates full control of tense and agreement throughout; any variation is deliberate and purposeful.',
  },

  // ── Year 9: Reading (3) ───────────────────────────────────────────────────
  {
    id: 'ac-9r-01',
    strand: 'reading',
    skillCode: '9R1',
    descriptor: "Analyse how context influences a writer's choices",
    yearGroup: 'Year 9',
    belowExpected:
      'Mentions context as background information without linking it to specific textual choices.',
    meetingExpected:
      'Explains how context (historical, social, or biographical) shapes at least one specific aspect of the text.',
    exceedingExpected:
      'Integrates contextual understanding throughout the analysis, showing how it illuminates meaning at multiple levels.',
  },
  {
    id: 'ac-9r-02',
    strand: 'reading',
    skillCode: '9R2',
    descriptor: 'Explore different interpretations and critical perspectives',
    yearGroup: 'Year 9',
    belowExpected:
      'Offers a single reading with no awareness that alternative interpretations exist.',
    meetingExpected:
      'Acknowledges alternative interpretations and considers which is better supported by the text.',
    exceedingExpected:
      'Explores multiple interpretations with confidence, weighing evidence and considering the implications of each reading.',
  },
  {
    id: 'ac-9r-03',
    strand: 'reading',
    skillCode: '9R3',
    descriptor: 'Demonstrate close reading through precise and embedded quotation',
    yearGroup: 'Year 9',
    belowExpected:
      'Quotations are lengthy or poorly integrated; analysis rarely goes beyond surface features.',
    meetingExpected:
      'Embeds short, relevant quotations within analysis and comments on specific word choices.',
    exceedingExpected:
      'Selects forensically precise quotations; unpacks individual words and phrases with sophisticated analytical insight.',
  },

  // ── Year 9: Writing (3) ───────────────────────────────────────────────────
  {
    id: 'ac-9w-01',
    strand: 'writing',
    skillCode: '9W1',
    descriptor: 'Write with a distinctive and controlled voice',
    yearGroup: 'Year 9',
    belowExpected:
      'Voice is generic or inconsistent; the writing lacks personality or a sense of authorial control.',
    meetingExpected:
      'Demonstrates a recognisable voice that is mostly consistent with the chosen purpose and audience.',
    exceedingExpected:
      'Sustains a distinctive, confident voice throughout; stylistic choices are purposeful and create a strong authorial presence.',
  },
  {
    id: 'ac-9w-02',
    strand: 'writing',
    skillCode: '9W2',
    descriptor: 'Use sophisticated structural and presentational devices',
    yearGroup: 'Year 9',
    belowExpected:
      'Structure is formulaic; presentational features are absent or inconsistent with purpose.',
    meetingExpected:
      'Uses structural devices (e.g. flashback, fragmentation) or presentational features with a clear rationale.',
    exceedingExpected:
      'Employs complex structural and presentational techniques to enhance meaning; the overall shape of the piece is crafted with skill.',
  },
  {
    id: 'ac-9w-03',
    strand: 'writing',
    skillCode: '9W3',
    descriptor: 'Demonstrate accurate and varied spelling, including ambitious vocabulary',
    yearGroup: 'Year 9',
    belowExpected:
      'Frequent spelling errors, including in common or high-frequency words; vocabulary range is narrow.',
    meetingExpected:
      'Spelling is mostly accurate; attempts some ambitious vocabulary with only occasional errors.',
    exceedingExpected:
      'Spelling is consistently accurate across a wide vocabulary, including sophisticated and technical terminology.',
  },

  // ── Year 9: Spoken Language (2) ───────────────────────────────────────────
  {
    id: 'ac-9sl-01',
    strand: 'spoken-language',
    skillCode: '9SL1',
    descriptor: 'Lead and manage a collaborative discussion',
    yearGroup: 'Year 9',
    belowExpected: 'Takes a passive or disruptive role; does not help move discussion forward.',
    meetingExpected: "Contributes meaningfully and begins to facilitate others' contributions.",
    exceedingExpected:
      'Leads discussion with skill, managing turns, summarising points, and guiding the group to a considered conclusion.',
  },
  {
    id: 'ac-9sl-02',
    strand: 'spoken-language',
    skillCode: '9SL2',
    descriptor: 'Use spoken language for varied purposes including debate and creative performance',
    yearGroup: 'Year 9',
    belowExpected:
      'Struggles to adapt spoken language across different purposes; delivery is uniform regardless of context.',
    meetingExpected:
      'Adapts tone and delivery appropriately between, for example, debate and performance contexts.',
    exceedingExpected:
      'Moves fluently between spoken purposes with striking effect; demonstrates command of register, pace, and emphasis.',
  },

  // ── Year 9: Grammar (2) ───────────────────────────────────────────────────
  {
    id: 'ac-9g-01',
    strand: 'grammar',
    skillCode: '9G1',
    descriptor: 'Manipulate clauses and phrases for sophisticated effect',
    yearGroup: 'Year 9',
    belowExpected: 'Clause structure is limited; phrases are rarely used for deliberate effect.',
    meetingExpected:
      'Uses a range of clause types and fronted phrases with mostly controlled effect.',
    exceedingExpected:
      'Manipulates syntax with confidence; fronting, embedding, and inversion are deployed for precise rhetorical or literary effect.',
  },
  {
    id: 'ac-9g-02',
    strand: 'grammar',
    skillCode: '9G2',
    descriptor: 'Understand and apply grammatical metalanguage accurately',
    yearGroup: 'Year 9',
    belowExpected:
      'Uses vague or incorrect terminology when discussing grammar; metalanguage is largely absent.',
    meetingExpected:
      'Accurately identifies and names key grammatical features (e.g. noun phrase, passive voice, subordinate clause).',
    exceedingExpected:
      'Applies a wide range of grammatical metalanguage precisely in analysis and can explain the effect of features with confidence.',
  },
]

// ── Target Setting Data ───────────────────────────────────────────────────────

export const targetSettingData: TargetSetting[] = [
  // Year 7
  {
    yearGroup: 'Year 7',
    term: 1,
    expectedLevel: 'Emerging KS3',
    keyMilestones: [
      'Can retrieve and record relevant information from an unseen text',
      'Writes in paragraphs with a clear topic focus',
      'Uses Standard English in formal writing',
      'Participates in class discussions with relevant contributions',
    ],
    gcseReadinessIndicators: [
      'Shows early awareness that writers make deliberate choices',
      'Can identify at least two language features by name',
      'Produces an extended written response of a paragraph or more',
    ],
  },
  {
    yearGroup: 'Year 7',
    term: 2,
    expectedLevel: 'Developing KS3',
    keyMilestones: [
      'Makes supported inferences using short embedded quotations',
      'Uses varied sentence structures including complex sentences',
      'Begins to comment on the effect of language choices',
      'Contributes to paired and group discussion tasks with some elaboration',
    ],
    gcseReadinessIndicators: [
      'Moves beyond identification to basic analysis of language effect',
      'Produces a coherent multi-paragraph response',
      'Demonstrates awareness of audience in own writing',
    ],
  },
  {
    yearGroup: 'Year 7',
    term: 3,
    expectedLevel: 'Securing KS3 Foundation',
    keyMilestones: [
      'Analyses language and structure with evidence across a full text response',
      'Writes a complete piece for a given purpose, audience, and form',
      'Uses a range of punctuation including commas and apostrophes accurately',
      'Delivers a short prepared talk with clear structure',
    ],
    gcseReadinessIndicators: [
      'Demonstrates understanding of how both language and structure create meaning',
      'Applies PEE or equivalent analytical framework consistently',
      'Shows consistent spelling of high-frequency vocabulary',
    ],
  },

  // Year 8
  {
    yearGroup: 'Year 8',
    term: 1,
    expectedLevel: 'Securing KS3',
    keyMilestones: [
      'Compares language choices across two linked texts',
      'Writes persuasively using a range of rhetorical techniques',
      'Uses colons and semicolons accurately in writing',
      'Adapts spoken register between formal and informal contexts',
    ],
    gcseReadinessIndicators: [
      'Can write an analytical paragraph that integrates context',
      'Produces comparison work that goes beyond surface observation',
      'Applies vocabulary that is ambitious and generally well-chosen',
    ],
  },
  {
    yearGroup: 'Year 8',
    term: 2,
    expectedLevel: 'Progressing KS3',
    keyMilestones: [
      "Evaluates a text's effectiveness with supported judgements",
      'Crafts an extended creative or transactional piece with deliberate structural choices',
      'Maintains tense consistency and subject-verb agreement in extended writing',
      'Presents a structured argument in a formal spoken context',
    ],
    gcseReadinessIndicators: [
      'Evaluation goes beyond personal opinion to consider intended effect on reader',
      'Written voice is broadly consistent throughout an extended piece',
      'Demonstrates understanding of how context shapes a text',
    ],
  },
  {
    yearGroup: 'Year 8',
    term: 3,
    expectedLevel: 'Consolidating KS3',
    keyMilestones: [
      'Produces an independent analytical essay with limited support',
      'Writes across a range of forms (narrative, argument, description) with confidence',
      'Uses a full range of punctuation accurately and for effect',
      'Leads a group discussion and summarises key points',
    ],
    gcseReadinessIndicators: [
      'Demonstrates analytical writing that would transfer to GCSE Paper 1 Section B or Paper 2 Section A',
      'Extended writing shows control of structure, tone, and vocabulary',
      'Spoken language demonstrates confident Standard English use',
    ],
  },

  // Year 9
  {
    yearGroup: 'Year 9',
    term: 1,
    expectedLevel: 'GCSE Ready - Foundation',
    keyMilestones: [
      "Analyses contextual influence on a writer's choices in a full essay",
      'Writes with a distinctive and sustained voice across extended tasks',
      'Applies grammatical metalanguage accurately in spoken and written analysis',
      'Contributes to and facilitates collaborative discussions',
    ],
    gcseReadinessIndicators: [
      'Written analysis mirrors GCSE mark scheme Band 3 expectations',
      'Can produce a timed analytical paragraph unaided',
      'Demonstrates awareness of multiple interpretations of a text',
    ],
  },
  {
    yearGroup: 'Year 9',
    term: 2,
    expectedLevel: 'GCSE Ready - Core',
    keyMilestones: [
      'Explores alternative critical perspectives with textual evidence',
      'Employs sophisticated structural devices in own writing',
      'Demonstrates consistently accurate and ambitious spelling',
      'Adapts spoken language confidently across debate and performance',
    ],
    gcseReadinessIndicators: [
      'Written analysis mirrors GCSE mark scheme Band 4 expectations',
      'Can sustain a full timed essay response independently',
      'Comparative writing shows integrated analysis rather than alternating paragraphs',
    ],
  },
  {
    yearGroup: 'Year 9',
    term: 3,
    expectedLevel: 'GCSE Ready - Secure',
    keyMilestones: [
      'Produces a timed analytical essay under GCSE-style conditions',
      'Crafts a polished creative or transactional piece for a real audience',
      'Uses syntax manipulation (fronting, inversion, embedding) for deliberate effect',
      "Leads a high-quality discussion drawing on all participants' ideas",
    ],
    gcseReadinessIndicators: [
      'Performance in unseen tasks reflects GCSE readiness at Grade 5 or above',
      'Reading and writing tasks can be completed within GCSE time constraints',
      'Spoken language endorsement criteria can be met at Pass level or above',
    ],
  },
]

// ── Parent Report Phrases ─────────────────────────────────────────────────────

export const parentReportPhrases: ParentReportPhrase[] = [
  // Reading ── exceeding
  {
    id: 'prp-r-exc-y7',
    area: 'reading',
    performance: 'exceeding',
    yearGroup: 'Year 7',
    phrase:
      '[Name] demonstrates a sophisticated understanding of how writers use language for effect, consistently selecting precise textual evidence to support well-developed analytical points.',
    nextSteps:
      "Challenge yourself to explore how structural choices, as well as language, contribute to a text's overall meaning.",
  },
  {
    id: 'prp-r-exc-y8',
    area: 'reading',
    performance: 'exceeding',
    yearGroup: 'Year 8',
    phrase:
      "[Name] produces high-quality comparative analysis, exploring writers' methods with confidence and moving fluently between texts to draw perceptive, well-supported conclusions.",
    nextSteps:
      'Practise considering alternative critical interpretations to add further depth to your evaluative responses.',
  },
  {
    id: 'prp-r-exc-y9',
    area: 'reading',
    performance: 'exceeding',
    yearGroup: 'Year 9',
    phrase:
      '[Name] reads with exceptional analytical rigour, integrating contextual knowledge and exploring multiple interpretations to produce responses that reflect GCSE distinction-level thinking.',
    nextSteps:
      'Focus on extending the range of critical lenses you apply, particularly historical and social context, to further enrich your analysis.',
  },

  // Reading ── meeting
  {
    id: 'prp-r-met-y7',
    area: 'reading',
    performance: 'meeting',
    yearGroup: 'Year 7',
    phrase:
      '[Name] makes valid inferences and supports them with appropriate quotations, showing a secure understanding of the texts studied this year.',
    nextSteps:
      'Work on developing your analytical points further by explaining the effect of specific word choices in more detail.',
  },
  {
    id: 'prp-r-met-y8',
    area: 'reading',
    performance: 'meeting',
    yearGroup: 'Year 8',
    phrase:
      "[Name] compares texts competently, identifying similarities and differences in writers' methods and offering considered evaluative judgements supported by evidence.",
    nextSteps:
      'Aim to integrate quotations more seamlessly into your analysis and develop each point with greater depth.',
  },
  {
    id: 'prp-r-met-y9',
    area: 'reading',
    performance: 'meeting',
    yearGroup: 'Year 9',
    phrase:
      '[Name] analyses texts with confidence, commenting on language, structure, and context to produce responses that are well on track for success at GCSE.',
    nextSteps:
      'Challenge yourself to consider more than one interpretation of key moments in a text, showing an awareness of ambiguity.',
  },

  // Reading ── approaching
  {
    id: 'prp-r-app-y7',
    area: 'reading',
    performance: 'approaching',
    yearGroup: 'Year 7',
    phrase:
      '[Name] is developing their reading skills and can identify relevant details from a text, though analytical comments would benefit from closer engagement with specific language choices.',
    nextSteps:
      'Practise the PEE paragraph structure to ensure each response includes a clear point, relevant evidence, and a comment on effect.',
  },
  {
    id: 'prp-r-app-y8',
    area: 'reading',
    performance: 'approaching',
    yearGroup: 'Year 8',
    phrase:
      "[Name] demonstrates emerging analytical ability and makes some valid observations about writers' methods, though responses need to be more consistently supported with textual evidence.",
    nextSteps:
      'Focus on choosing shorter, more precise quotations and explaining exactly what effect each creates on the reader.',
  },
  {
    id: 'prp-r-app-y9',
    area: 'reading',
    performance: 'approaching',
    yearGroup: 'Year 9',
    phrase:
      '[Name] is making progress with analytical reading and shows an awareness of how context shapes texts, though responses would benefit from greater precision and development.',
    nextSteps:
      'Revise key analytical terminology and practise applying it in timed conditions to build confidence and speed.',
  },

  // Writing ── exceeding
  {
    id: 'prp-w-exc-y7',
    area: 'writing',
    performance: 'exceeding',
    yearGroup: 'Year 7',
    phrase:
      '[Name] writes with impressive maturity, deploying a range of literary techniques, varied sentence structures, and precise vocabulary to engage the reader throughout.',
    nextSteps:
      'Experiment with more ambitious structural choices, such as non-linear sequencing or the use of an unreliable narrator.',
  },
  {
    id: 'prp-w-exc-y8',
    area: 'writing',
    performance: 'exceeding',
    yearGroup: 'Year 8',
    phrase:
      '[Name] produces consistently high-quality extended writing that demonstrates a confident voice, sophisticated use of techniques, and excellent control of structure and form.',
    nextSteps:
      'Push yourself to refine your writing through self-editing, particularly reviewing vocabulary choices for maximum impact.',
  },
  {
    id: 'prp-w-exc-y9',
    area: 'writing',
    performance: 'exceeding',
    yearGroup: 'Year 9',
    phrase:
      '[Name] is an accomplished writer whose work shows mastery of voice, form, and technical accuracy, placing them firmly on track for the highest grades at GCSE.',
    nextSteps:
      'Focus on crafting a distinctive personal style that can be adapted effectively across different GCSE writing tasks.',
  },

  // Writing ── meeting
  {
    id: 'prp-w-met-y7',
    area: 'writing',
    performance: 'meeting',
    yearGroup: 'Year 7',
    phrase:
      '[Name] writes clearly and with a growing sense of audience and purpose, organising ideas into well-focused paragraphs and demonstrating sound technical accuracy.',
    nextSteps:
      'Expand your vocabulary range by keeping a personal word bank of ambitious synonyms and trying to use one or two in each piece of writing.',
  },
  {
    id: 'prp-w-met-y8',
    area: 'writing',
    performance: 'meeting',
    yearGroup: 'Year 8',
    phrase:
      '[Name] writes competently across a range of forms, using rhetorical and literary techniques with reasonable effect and maintaining a broadly appropriate register.',
    nextSteps:
      'Develop your extended writing by varying sentence length more deliberately - shorter sentences can create powerful emphasis.',
  },
  {
    id: 'prp-w-met-y9',
    area: 'writing',
    performance: 'meeting',
    yearGroup: 'Year 9',
    phrase:
      '[Name] produces coherent, well-structured writing and is building the skills needed to perform consistently well in GCSE writing assessments.',
    nextSteps:
      'Practise writing under timed conditions to develop your ability to plan and execute a high-quality piece within exam constraints.',
  },

  // Writing ── approaching
  {
    id: 'prp-w-app-y8',
    area: 'writing',
    performance: 'approaching',
    yearGroup: 'Year 8',
    phrase:
      '[Name] shows commitment in writing tasks and is developing a range of skills, though pieces would benefit from greater precision in vocabulary and more consistent structural control.',
    nextSteps:
      'Before writing, spend two minutes planning your structure - knowing where your piece is going will help you maintain focus and coherence.',
  },
  {
    id: 'prp-w-app-y9',
    area: 'writing',
    performance: 'approaching',
    yearGroup: 'Year 9',
    phrase:
      '[Name] is working towards the writing standard expected for GCSE entry and shows effort in assessments, though accuracy and development of ideas need to be more consistent.',
    nextSteps:
      'Make proofreading a habit: reading your work aloud at the end will help you catch errors and identify sentences that need more development.',
  },

  // Spoken Language ── exceeding
  {
    id: 'prp-sl-exc-y8',
    area: 'spoken-language',
    performance: 'exceeding',
    yearGroup: 'Year 8',
    phrase:
      '[Name] is an outstanding communicator who presents ideas with clarity, confidence, and excellent audience awareness, adapting their register and delivery with impressive ease.',
    nextSteps:
      'Challenge yourself in debate contexts by actively seeking out and challenging counter-arguments to sharpen your verbal reasoning.',
  },
  {
    id: 'prp-sl-exc-y9',
    area: 'spoken-language',
    performance: 'exceeding',
    yearGroup: 'Year 9',
    phrase:
      '[Name] excels in all spoken language contexts, leading discussions with authority and performing with genuine presence and control - excellent preparation for the GCSE Spoken Language endorsement.',
    nextSteps:
      'Begin preparing a polished individual presentation that could serve as your formal GCSE Spoken Language endorsement task.',
  },

  // Spoken Language ── meeting
  {
    id: 'prp-sl-met-y9',
    area: 'spoken-language',
    performance: 'meeting',
    yearGroup: 'Year 9',
    phrase:
      '[Name] participates confidently in spoken language tasks, demonstrating good listening skills and the ability to express ideas clearly in both formal and informal contexts.',
    nextSteps:
      "Work on sustaining your contributions for longer and building on others' points more explicitly in group discussion tasks.",
  },

  // Overall ── exceeding
  {
    id: 'prp-ov-exc-y9',
    area: 'overall',
    performance: 'exceeding',
    yearGroup: 'Year 9',
    phrase:
      '[Name] has had an exceptional year in English, demonstrating outstanding progress across reading, writing, and spoken language and showing all the qualities of a GCSE high achiever.',
    nextSteps:
      'Ensure you enter Year 10 with a list of key analytical vocabulary and a clear understanding of each GCSE assessment objective.',
  },

  // Overall ── meeting
  {
    id: 'prp-ov-met-y8',
    area: 'overall',
    performance: 'meeting',
    yearGroup: 'Year 8',
    phrase:
      '[Name] has made solid progress in English this year, meeting age-related expectations across all three strands and building a strong foundation for the final year of KS3.',
    nextSteps:
      'Over the summer, read widely across fiction and non-fiction to develop your vocabulary and analytical thinking ahead of Year 9.',
  },

  // Overall ── approaching
  {
    id: 'prp-ov-app-y7',
    area: 'overall',
    performance: 'approaching',
    yearGroup: 'Year 7',
    phrase:
      '[Name] is settling into KS3 English and showing a positive attitude to learning; with continued effort and focus, they are well placed to meet expectations by the end of the year.',
    nextSteps:
      'Read for at least 20 minutes each day - this is the single most effective way to improve both your reading comprehension and writing quality.',
  },

  // Overall ── below
  {
    id: 'prp-ov-bel-y8',
    area: 'overall',
    performance: 'below',
    yearGroup: 'Year 8',
    phrase:
      '[Name] is finding some aspects of English challenging at present and is encouraged to seek support proactively, as targeted effort now will make a significant difference to their progress.',
    nextSteps:
      'Attend the reading and writing support drop-in sessions and aim to complete all homework tasks in full to consolidate skills covered in lessons.',
  },
]
