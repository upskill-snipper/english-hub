export interface SkillProgression {
  skillId: string
  skillName: string
  strand: 'reading' | 'writing' | 'speaking-listening' | 'language' | 'literature'
  yearGroup: string
  emerging: string
  developing: string
  secure: string
  mastery: string
  assessmentEvidence: string[]
}

export interface CheckpointAssessment {
  id: string
  title: string
  yearGroup: string
  term: number
  type: 'diagnostic' | 'formative' | 'summative'
  skills: string[]
  taskDescription: string
  markingCriteria: { criterion: string; weight: number; descriptors: string[] }[]
  nextStepsGuidance: string[]
}

export interface InterventionStrategy {
  id: string
  targetSkill: string
  yearGroups: string[]
  issue: string
  strategy: string
  resources: string[]
  expectedImpact: string
  reviewPeriod: string
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILL PROGRESSIONS  (30 total: 6 per strand across Y7-Y13)
// ─────────────────────────────────────────────────────────────────────────────

export const skillProgressions: SkillProgression[] = [
  // ── READING (6) ──────────────────────────────────────────────────────────

  {
    skillId: 'read-01',
    skillName: 'Retrieving and summarising information',
    strand: 'reading',
    yearGroup: 'Y7',
    emerging: 'Locates single pieces of explicitly stated information with support.',
    developing: 'Retrieves multiple details and begins to group related points.',
    secure: 'Accurately summarises key information using own words and selects relevant evidence.',
    mastery:
      'Synthesises information across a text to produce a concise, precise summary that prioritises significance.',
    assessmentEvidence: [
      'Short-answer retrieval task on an unseen non-fiction passage',
      'Annotated summary paragraph with teacher feedback',
    ],
  },
  {
    skillId: 'read-02',
    skillName: 'Inferring meaning and reading between the lines',
    strand: 'reading',
    yearGroup: 'Y8',
    emerging: 'Makes simple, text-supported inferences with prompting.',
    developing:
      'Draws inferences independently and begins to explain reasoning using textual evidence.',
    secure:
      'Consistently supports inferences with well-chosen evidence and explains the connection clearly.',
    mastery:
      'Develops layered inferences, considering alternative interpretations and the limits of evidence.',
    assessmentEvidence: [
      'Inference question responses in a timed reading task',
      'Annotated extract showing inference chains',
    ],
  },
  {
    skillId: 'read-03',
    skillName: "Analysing writers' language choices",
    strand: 'reading',
    yearGroup: 'Y9',
    emerging: 'Identifies language features by name with limited comment on effect.',
    developing: 'Comments on effect of language choices using some subject terminology accurately.',
    secure:
      'Analyses specific language choices with detailed explanation of intended effect on the reader.',
    mastery:
      'Explores nuanced effects of language, considering connotation, context and authorial intention with sophistication.',
    assessmentEvidence: [
      'Language analysis paragraph on a stimulus extract',
      'Peer-assessed annotation task',
    ],
  },
  {
    skillId: 'read-04',
    skillName: "Evaluating writers' methods and intentions",
    strand: 'reading',
    yearGroup: 'Y10',
    emerging: 'Identifies some methods and offers a basic reason for their use.',
    developing: 'Explains how methods create effects, with some critical vocabulary.',
    secure:
      'Evaluates how writers use methods to achieve purposes, sustaining a critical stance across a response.',
    mastery:
      'Constructs a convincing critical argument about authorial craft, integrating close reading with wider context.',
    assessmentEvidence: [
      'IGCSE-style evaluation question (Q4 format)',
      'Essay plan and drafted response with annotations',
    ],
  },
  {
    skillId: 'read-05',
    skillName: 'Comparing texts across time and context',
    strand: 'reading',
    yearGroup: 'Y12',
    emerging: 'Identifies surface similarities and differences between texts.',
    developing:
      'Begins to explore how context shapes meaning; comparisons are juxtaposed rather than integrated.',
    secure:
      'Integrates comparison throughout, analysing how context, form and language interact across texts.',
    mastery:
      'Constructs a sophisticated, thesis-driven comparative argument that weighs the significance of contextual factors.',
    assessmentEvidence: [
      'A Level comparative essay on two unseen or set texts',
      'Seminar contribution log',
    ],
  },
  {
    skillId: 'read-06',
    skillName: 'Independent critical reading and research',
    strand: 'reading',
    yearGroup: 'Y13',
    emerging: 'Engages with critical sources but struggles to evaluate their relevance.',
    developing:
      'Selects relevant critical viewpoints and begins to position own argument in relation to them.',
    secure:
      'Integrates critical perspectives purposefully, challenging or supporting them with textual evidence.',
    mastery:
      'Demonstrates scholarly independence, synthesising a range of critical viewpoints to build an original argument.',
    assessmentEvidence: [
      'Annotated bibliography with evaluative commentary',
      'Extended essay or coursework draft incorporating secondary reading',
    ],
  },

  // ── WRITING (6) ──────────────────────────────────────────────────────────

  {
    skillId: 'write-01',
    skillName: 'Organising and structuring writing',
    strand: 'writing',
    yearGroup: 'Y7',
    emerging: 'Attempts to sequence ideas but paragraphing is inconsistent.',
    developing:
      'Uses paragraphs to organise ideas; topic sentences are present but underdeveloped.',
    secure:
      'Structures writing logically with effective paragraphing, topic sentences and signposting.',
    mastery:
      'Manipulates structure for effect, varying pace, emphasis and order to serve purpose and engage the reader.',
    assessmentEvidence: [
      'Extended writing piece with structural annotations',
      'Redraft showing improvement to organisation',
    ],
  },
  {
    skillId: 'write-02',
    skillName: 'Writing for purpose and audience',
    strand: 'writing',
    yearGroup: 'Y8',
    emerging: 'Shows awareness of audience and purpose but tone is inconsistent.',
    developing:
      'Adapts register and content to purpose; audience awareness evident in most of the response.',
    secure:
      'Sustains appropriate register throughout; form features are used purposefully to engage target audience.',
    mastery:
      'Crafts writing that is precisely calibrated to audience and purpose, using form, tone and content with flair.',
    assessmentEvidence: [
      'Two contrasting writing tasks (e.g. formal letter vs. personal narrative)',
      'Self-evaluation checklist against success criteria',
    ],
  },
  {
    skillId: 'write-03',
    skillName: 'Using descriptive and figurative language',
    strand: 'writing',
    yearGroup: 'Y9',
    emerging:
      'Uses some descriptive language; figurative devices are attempted but may be clichéd.',
    developing:
      'Employs a range of figurative devices with growing originality; description creates some atmosphere.',
    secure: 'Selects precise vocabulary and original imagery to create vivid, controlled effects.',
    mastery:
      'Writing demonstrates a distinctive voice; linguistic choices are consistently purposeful and create layered meaning.',
    assessmentEvidence: [
      'Descriptive or narrative writing task',
      'Vocabulary enrichment log reviewed by teacher',
    ],
  },
  {
    skillId: 'write-04',
    skillName: 'Constructing and sustaining an argument',
    strand: 'writing',
    yearGroup: 'Y10',
    emerging:
      'Presents a viewpoint with some supporting points; counter-argument is absent or undeveloped.',
    developing:
      'Develops points with evidence; some counter-argument present but not fully addressed.',
    secure:
      'Constructs a coherent argument with well-supported points and effective handling of counter-argument.',
    mastery:
      'Produces a persuasive, logically rigorous argument that anticipates objections and uses rhetoric with precision.',
    assessmentEvidence: [
      'IGCSE-style persuasive or argumentative writing task',
      'Peer-debate feedback form',
    ],
  },
  {
    skillId: 'write-05',
    skillName: 'Writing analytically and with a critical voice',
    strand: 'writing',
    yearGroup: 'Y12',
    emerging: 'Attempts analytical register but reverts to descriptive or narrative approaches.',
    developing:
      'Sustains analytical writing in most of the response; vocabulary is developing but not always precise.',
    secure:
      'Writes with a clear critical voice, using disciplinary vocabulary accurately and developing a line of argument.',
    mastery:
      'Produces sophisticated analytical prose that advances an original thesis with intellectual confidence.',
    assessmentEvidence: [
      'Timed essay with examiner-style marking',
      'Personal statement or extended writing sample',
    ],
  },
  {
    skillId: 'write-06',
    skillName: 'Editing, proofreading and redrafting',
    strand: 'writing',
    yearGroup: 'Y13',
    emerging:
      'Makes surface corrections when prompted; deeper structural issues remain unaddressed.',
    developing:
      'Identifies and corrects most SPaG errors; makes some purposeful revisions to improve clarity.',
    secure:
      'Proofreads systematically; revisions address both surface accuracy and the quality of argument or expression.',
    mastery:
      'Demonstrates mature editorial judgement, transforming drafts through purposeful revision of content, structure and style.',
    assessmentEvidence: [
      'Annotated first and final draft showing revision decisions',
      'Coursework portfolio with process documentation',
    ],
  },

  // ── SPEAKING AND LISTENING (6) ────────────────────────────────────────────

  {
    skillId: 'sl-01',
    skillName: 'Speaking clearly and with confidence',
    strand: 'speaking-listening',
    yearGroup: 'Y7',
    emerging: 'Speaks audibly in small groups; lacks confidence in whole-class contexts.',
    developing:
      'Contributes to class discussions with growing confidence; pace and clarity are developing.',
    secure:
      'Speaks clearly and confidently in a range of contexts, modulating pace and volume effectively.',
    mastery:
      'Commands the attention of an audience through deliberate use of pace, pause, tone and non-verbal communication.',
    assessmentEvidence: ['Short prepared talk or show-and-tell', 'Teacher observation checklist'],
  },
  {
    skillId: 'sl-02',
    skillName: 'Listening and responding to others',
    strand: 'speaking-listening',
    yearGroup: 'Y8',
    emerging: 'Listens but responses do not consistently build on what has been said.',
    developing: 'Responds to the contributions of others, beginning to develop or challenge ideas.',
    secure:
      "Actively listens and builds constructively on others' points, using reference-back and extension strategies.",
    mastery:
      'Synthesises contributions from others and steers discussion towards greater clarity or depth.',
    assessmentEvidence: [
      'Group discussion observation with self-assessment',
      'Video-recorded discussion with reflection task',
    ],
  },
  {
    skillId: 'sl-03',
    skillName: 'Presenting information and ideas',
    strand: 'speaking-listening',
    yearGroup: 'Y9',
    emerging: 'Presents rehearsed information but relies heavily on notes.',
    developing:
      'Structures a presentation clearly; eye contact and engagement with the audience are developing.',
    secure:
      'Delivers a well-structured, engaging presentation that uses spoken language purposefully.',
    mastery:
      'Adapts delivery in response to audience; uses rhetorical and presentational techniques with sophistication.',
    assessmentEvidence: [
      'Formal individual presentation with Q&A',
      'Peer feedback form using agreed criteria',
    ],
  },
  {
    skillId: 'sl-04',
    skillName: 'Debating and persuasive speaking',
    strand: 'speaking-listening',
    yearGroup: 'Y10',
    emerging: 'States a position and offers some reasons; lacks counter-argument.',
    developing: 'Presents an argument with evidence and begins to rebut opposing views.',
    secure:
      'Constructs and defends a well-reasoned argument, rebutting opposition points with precision.',
    mastery:
      'Leads debate with authority, using rhetoric strategically and handling challenges with confidence.',
    assessmentEvidence: [
      'Formal class or inter-group debate',
      'Examiner-style mark sheet for spoken language',
    ],
  },
  {
    skillId: 'sl-05',
    skillName: 'Individual spoken performance',
    strand: 'speaking-listening',
    yearGroup: 'Y11',
    emerging: 'Communicates a clear viewpoint with some development; delivery is uneven.',
    developing:
      'Sustains a viewpoint with evidence and some rhetorical awareness; delivery is generally controlled.',
    secure:
      'Delivers a polished individual talk that demonstrates linguistic control and audience awareness.',
    mastery:
      'Gives an authoritative performance that integrates content and delivery seamlessly, meriting distinction-level marks.',
    assessmentEvidence: [
      'IGCSE-style individual spoken language assessment',
      'Video recording with teacher commentary',
    ],
  },
  {
    skillId: 'sl-06',
    skillName: 'Seminar participation and academic discussion',
    strand: 'speaking-listening',
    yearGroup: 'Y12',
    emerging: 'Contributes to seminars when invited; responses are relevant but undeveloped.',
    developing:
      'Offers extended contributions; begins to use academic register and cite textual support.',
    secure:
      'Participates proactively, developing arguments with textual evidence and engaging critically with peers.',
    mastery:
      'Drives seminar discussion, synthesising diverse viewpoints and advancing scholarly debate.',
    assessmentEvidence: [
      'Tutor-assessed seminar participation log',
      'Reflective seminar journal entry',
    ],
  },

  // ── LANGUAGE (6) ─────────────────────────────────────────────────────────

  {
    skillId: 'lang-01',
    skillName: 'Sentence-level accuracy: punctuation',
    strand: 'language',
    yearGroup: 'Y7',
    emerging:
      'Uses full stops and capital letters mostly correctly; other punctuation is inconsistent.',
    developing:
      'Uses commas, question marks and exclamation marks; beginning to attempt more complex punctuation.',
    secure:
      'Uses a range of punctuation accurately, including colons, semi-colons and dashes for effect.',
    mastery:
      'Deploys the full range of punctuation with confidence, using it as a deliberate stylistic tool.',
    assessmentEvidence: [
      'Punctuation audit exercise on own writing',
      'Corrected redraft with annotated improvements',
    ],
  },
  {
    skillId: 'lang-02',
    skillName: 'Grammatical accuracy and control',
    strand: 'language',
    yearGroup: 'Y8',
    emerging: 'Constructs simple and some compound sentences; tense errors are frequent.',
    developing:
      'Attempts complex sentences; grammatical errors are reducing but agreement errors persist.',
    secure:
      'Writes with grammatical accuracy across a range of sentence structures; errors are rare.',
    mastery:
      'Varies syntax with deliberate effect; grammatical control enhances rather than merely supports meaning.',
    assessmentEvidence: [
      'Grammar diagnostic test',
      'Writing portfolio with tracked grammatical progress',
    ],
  },
  {
    skillId: 'lang-03',
    skillName: 'Vocabulary range and precision',
    strand: 'language',
    yearGroup: 'Y9',
    emerging:
      'Uses familiar, high-frequency vocabulary; attempts more ambitious words with some inaccuracy.',
    developing:
      'Employs Tier 2 vocabulary with growing confidence; word choices are mostly appropriate.',
    secure:
      'Selects precise and varied vocabulary, including subject-specific Tier 3 terms where appropriate.',
    mastery:
      'Demonstrates a rich, wide-ranging vocabulary deployed with nuance; word choice is always purposeful.',
    assessmentEvidence: [
      'Vocabulary in context exercise (replace simple word with precise alternative)',
      'Reading journal word-collection entries',
    ],
  },
  {
    skillId: 'lang-04',
    skillName: 'Spelling accuracy (including morphology)',
    strand: 'language',
    yearGroup: 'Y10',
    emerging:
      'Spells high-frequency words correctly; errors on polysyllabic or subject-specific words.',
    developing: 'Applies common spelling rules; morphological patterns are developing.',
    secure:
      'Spells accurately across a wide vocabulary, including subject-specific terms; errors are rare and minor.',
    mastery:
      'Demonstrates secure spelling across all registers; applies morphological knowledge to new words with confidence.',
    assessmentEvidence: [
      'Personalised spelling list mastery check',
      'Blind-marked written response for spelling accuracy',
    ],
  },
  {
    skillId: 'lang-05',
    skillName: 'Understanding grammar in context (metalinguistic knowledge)',
    strand: 'language',
    yearGroup: 'Y12',
    emerging: 'Identifies basic grammatical categories; explanations of function are limited.',
    developing:
      'Explains how grammatical choices create effects; metalinguistic vocabulary is developing.',
    secure:
      'Analyses grammatical structures with accuracy, linking form to meaning and effect in extended discussion.',
    mastery:
      'Applies advanced grammatical knowledge (e.g. deixis, modality, nominalisation) to illuminate literary and non-literary texts.',
    assessmentEvidence: [
      'Language analysis task applying grammatical frameworks',
      'Annotated passage with metalinguistic commentary',
    ],
  },
  {
    skillId: 'lang-06',
    skillName: 'Language change and variation',
    strand: 'language',
    yearGroup: 'Y13',
    emerging: 'Identifies some examples of language change or regional/social variation.',
    developing:
      'Explains causes and effects of language change or variation with some use of linguistic theory.',
    secure:
      'Analyses language change and variation using appropriate theoretical frameworks and supporting examples.',
    mastery:
      'Constructs a nuanced academic argument about language in society, engaging critically with linguistic theory.',
    assessmentEvidence: [
      'A Level language investigation data analysis',
      'Essay on a language change or variation topic',
    ],
  },

  // ── LITERATURE (6) ───────────────────────────────────────────────────────

  {
    skillId: 'lit-01',
    skillName: 'Understanding narrative and story elements',
    strand: 'literature',
    yearGroup: 'Y7',
    emerging: 'Identifies basic story elements (plot, character, setting) with support.',
    developing:
      'Describes how narrative elements work together; begins to comment on their effect.',
    secure:
      'Analyses how narrative choices (e.g. narrative voice, structure, setting) shape meaning and reader response.',
    mastery:
      'Evaluates the craft of narrative with insight, exploring how structural and stylistic choices serve thematic purposes.',
    assessmentEvidence: [
      'Character or setting analysis paragraph',
      'Narrative choices comparison task',
    ],
  },
  {
    skillId: 'lit-02',
    skillName: 'Responding to poetry: form, language and meaning',
    strand: 'literature',
    yearGroup: 'Y8',
    emerging: 'Responds personally to poems; comments on obvious features such as rhyme.',
    developing: 'Identifies poetic techniques and explains their effect with growing confidence.',
    secure:
      'Analyses how form, structure and language create meaning; responses are well-evidenced and sustained.',
    mastery:
      'Explores the relationship between form and meaning with sophistication, considering multiple interpretive possibilities.',
    assessmentEvidence: ['Single poem analysis essay', 'Comparative poem response'],
  },
  {
    skillId: 'lit-03',
    skillName: 'Understanding dramatic texts: stagecraft and performance',
    strand: 'literature',
    yearGroup: 'Y9',
    emerging:
      'Reads dialogue and stage directions; comments on character with basic support from text.',
    developing:
      'Explores how dramatic techniques (tension, dramatic irony, aside) create effects for an audience.',
    secure:
      'Analyses how playwrights use stagecraft and language to convey theme and character; considers audience impact.',
    mastery:
      'Interprets the play as both text and performance, exploring how staging choices enrich or complicate meaning.',
    assessmentEvidence: [
      'Extract-based drama analysis essay',
      'Directorial notes creative task with analytical commentary',
    ],
  },
  {
    skillId: 'lit-04',
    skillName: 'Contextualising literature: historical and social contexts',
    strand: 'literature',
    yearGroup: 'Y10',
    emerging: 'Identifies the period or context of a text but struggles to link it to meaning.',
    developing:
      'Explains how context influences meaning; context is used to support rather than replace textual analysis.',
    secure:
      'Integrates contextual knowledge purposefully, showing how it illuminates authorial choices and reader interpretation.',
    mastery:
      'Explores the complex interplay between text and context, considering how readers in different times have interpreted the same work.',
    assessmentEvidence: [
      'IGCSE literature context question or extended essay',
      "Research task on an author's biography and historical moment",
    ],
  },
  {
    skillId: 'lit-05',
    skillName: 'Developing an independent literary argument',
    strand: 'literature',
    yearGroup: 'Y12',
    emerging: 'Constructs an argument but relies heavily on plot summary or paraphrase.',
    developing:
      'Develops an analytical argument with evidence; interpretation is emerging but not yet sustained.',
    secure: 'Sustains an independent, well-evidenced literary argument across an extended essay.',
    mastery:
      'Constructs a sophisticated, original literary argument that engages with competing interpretations.',
    assessmentEvidence: [
      'Timed A Level literature essay',
      'Coursework first draft with teacher commentary',
    ],
  },
  {
    skillId: 'lit-06',
    skillName: 'Engaging with literary criticism and theory',
    strand: 'literature',
    yearGroup: 'Y13',
    emerging: 'Mentions a critical viewpoint but does not fully integrate or evaluate it.',
    developing:
      'Applies a critical lens (e.g. feminist, Marxist, post-colonial) with some accuracy.',
    secure:
      'Uses literary theory purposefully to extend and challenge own readings; engages critically with named critics.',
    mastery:
      'Demonstrates scholarly agility, selecting, applying and critiquing theoretical frameworks to generate original insight.',
    assessmentEvidence: [
      'Coursework essay with footnoted critical sources',
      'Seminar presentation on a theoretical approach',
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CHECKPOINT ASSESSMENTS  (15 total)
// Y7 T1/T2/T3, Y8 T1/T2/T3, Y9 T1/T2/T3 = 9
// Y10 T1/T3, Y11 T1/T3, Y12 T1, Y13 T1 = 6
// ─────────────────────────────────────────────────────────────────────────────

export const checkpointAssessments: CheckpointAssessment[] = [
  // ── Y7 ───────────────────────────────────────────────────────────────────

  {
    id: 'cp-y7-t1',
    title: 'Y7 Term 1 Diagnostic: Reading and Writing Baseline',
    yearGroup: 'Y7',
    term: 1,
    type: 'diagnostic',
    skills: ['read-01', 'write-01', 'lang-01'],
    taskDescription:
      'Students read a short non-fiction passage (approx. 300 words) and answer three graduated retrieval and inference questions. They then write one paragraph describing a place from their own experience.',
    markingCriteria: [
      {
        criterion: 'Retrieval accuracy',
        weight: 30,
        descriptors: [
          '0-1: No relevant information located',
          '2: One accurate point retrieved',
          '3: Two or more accurate points with some paraphrase',
        ],
      },
      {
        criterion: 'Inference with evidence',
        weight: 40,
        descriptors: [
          '0-1: No inference or unsupported assertion',
          '2-3: Simple inference with partial evidence',
          '4: Clear inference with well-chosen textual evidence',
        ],
      },
      {
        criterion: 'Written paragraph: structure and accuracy',
        weight: 30,
        descriptors: [
          '0-1: Little organisation; frequent SPaG errors',
          '2: Some structure; punctuation mostly correct',
          '3: Clear topic sentence, supporting detail, accurate punctuation',
        ],
      },
    ],
    nextStepsGuidance: [
      'Students scoring below 50% overall to be placed on a reading fluency programme.',
      'Students with persistent punctuation errors to receive targeted sentence-level support.',
      'Accelerated readers to be introduced to extended inference and analysis tasks ahead of schedule.',
    ],
  },
  {
    id: 'cp-y7-t2',
    title: 'Y7 Term 2 Formative: Narrative Writing',
    yearGroup: 'Y7',
    term: 2,
    type: 'formative',
    skills: ['write-01', 'write-03', 'lang-01', 'lang-02'],
    taskDescription:
      'Students write a short narrative (400-500 words) inspired by a visual prompt. The focus is on organisation, descriptive language and sentence-level accuracy.',
    markingCriteria: [
      {
        criterion: 'Structure and organisation',
        weight: 25,
        descriptors: [
          '1: No clear structure; no paragraphing',
          '2: Some paragraphing; limited development',
          '3: Coherent structure with clear beginning, middle and end',
          '4: Varied and purposeful structure that enhances narrative effect',
        ],
      },
      {
        criterion: 'Descriptive and figurative language',
        weight: 35,
        descriptors: [
          '1: Little or no descriptive language',
          '2: Some descriptive phrases; figurative devices attempted',
          '3: Range of effective descriptive and figurative language',
          '4: Original, precise imagery used consistently',
        ],
      },
      {
        criterion: 'Sentence-level accuracy',
        weight: 25,
        descriptors: [
          '1: Frequent errors impede meaning',
          '2: Some errors; basic punctuation mostly correct',
          '3: Accurate with varied sentence structures',
          '4: Deliberate syntactic variation for effect',
        ],
      },
      {
        criterion: 'Vocabulary range',
        weight: 15,
        descriptors: [
          '1: Limited, repetitive vocabulary',
          '2: Some varied word choices',
          '3: Wide, well-chosen vocabulary',
          '4: Precise and ambitious vocabulary throughout',
        ],
      },
    ],
    nextStepsGuidance: [
      'Use modelled writing examples to address common structural weaknesses.',
      'Introduce vocabulary enrichment strategies for students with a narrow word range.',
      'Encourage students at mastery level to experiment with non-linear narrative structures.',
    ],
  },
  {
    id: 'cp-y7-t3',
    title: 'Y7 Term 3 Summative: Reading and Writing Assessment',
    yearGroup: 'Y7',
    term: 3,
    type: 'summative',
    skills: ['read-01', 'read-02', 'write-01', 'write-02', 'lang-01', 'lang-02'],
    taskDescription:
      'Section A: Students answer four questions on a non-fiction extract, progressing from retrieval to inference to language analysis (30 marks). Section B: Students produce a piece of writing for a specific audience and purpose (20 marks).',
    markingCriteria: [
      {
        criterion: 'Section A: Retrieval and summary',
        weight: 20,
        descriptors: [
          '0-4: Limited retrieval; no selection',
          '5-8: Some accurate retrieval with paraphrase',
          '9-12: Accurate, well-selected retrieval with effective summarising',
        ],
      },
      {
        criterion: 'Section A: Inference and language analysis',
        weight: 30,
        descriptors: [
          '0-5: Basic assertion; little evidence',
          '6-10: Developing analysis with some terminology',
          '11-18: Detailed analysis of language effects with well-chosen evidence',
        ],
      },
      {
        criterion: 'Section B: Communication and organisation',
        weight: 30,
        descriptors: [
          '0-5: Limited awareness of purpose or audience',
          '6-10: Developing awareness; some structural features',
          '11-15: Clear purpose and audience; coherent structure',
          '16-20: Sophisticated control of form, purpose and audience',
        ],
      },
      {
        criterion: 'Section B: Technical accuracy',
        weight: 20,
        descriptors: [
          '0-3: Frequent errors',
          '4-7: Mostly accurate; varied sentences attempted',
          '8-10: Accurate; deliberate syntactic variation',
        ],
      },
    ],
    nextStepsGuidance: [
      'Share mark profiles with form tutors to identify whole-class patterns.',
      'Set individual SMART targets for the following year based on weakest criterion.',
      'Provide exemplar responses at each grade band for student reflection.',
    ],
  },

  // ── Y8 ───────────────────────────────────────────────────────────────────

  {
    id: 'cp-y8-t1',
    title: 'Y8 Term 1 Diagnostic: Prior Learning Check',
    yearGroup: 'Y8',
    term: 1,
    type: 'diagnostic',
    skills: ['read-01', 'read-02', 'write-01', 'lang-02'],
    taskDescription:
      'Students answer a series of short-answer comprehension questions on an unseen fiction extract and produce a single analytical paragraph using the PEE (Point-Evidence-Explain) framework.',
    markingCriteria: [
      {
        criterion: 'Comprehension accuracy',
        weight: 40,
        descriptors: [
          '0-4: Limited understanding; answers are unclear',
          '5-8: Some accurate comprehension with lapses',
          '9-12: Accurate and developed comprehension responses',
        ],
      },
      {
        criterion: 'PEE paragraph quality',
        weight: 60,
        descriptors: [
          '0-6: No clear PEE structure',
          '7-12: Point and evidence present; explanation thin',
          '13-18: Full PEE with developed explanation',
        ],
      },
    ],
    nextStepsGuidance: [
      'Re-teach the PEE framework to students who do not demonstrate its use.',
      'Identify students who have regressed over summer and assign bridging tasks.',
      'Extend confident students with multi-paragraph analytical responses.',
    ],
  },
  {
    id: 'cp-y8-t2',
    title: 'Y8 Term 2 Formative: Poetry Analysis',
    yearGroup: 'Y8',
    term: 2,
    type: 'formative',
    skills: ['read-02', 'read-03', 'lit-02', 'lang-03'],
    taskDescription:
      'Students read two short poems on the theme of conflict and write a comparative analytical paragraph identifying key language choices and their effects.',
    markingCriteria: [
      {
        criterion: 'Understanding of poetic meaning',
        weight: 25,
        descriptors: [
          '1: Surface or inaccurate reading',
          '2: Basic understanding with some development',
          '3: Clear understanding with inference',
          '4: Nuanced, layered understanding',
        ],
      },
      {
        criterion: 'Analysis of language and form',
        weight: 50,
        descriptors: [
          '1: Names features with no comment on effect',
          '2: Some effect explained; limited terminology',
          '3: Effect explained with appropriate terminology',
          '4: Detailed analysis of multiple effects; precise terminology',
        ],
      },
      {
        criterion: 'Comparison',
        weight: 25,
        descriptors: [
          '1: Texts treated separately',
          '2: Simple comparison; points juxtaposed',
          '3: Integrated comparison with connectives',
          '4: Fluid, analytical comparison throughout',
        ],
      },
    ],
    nextStepsGuidance: [
      'Provide a bank of comparative connectives for students who juxtapose rather than compare.',
      'Model how to embed quotations fluently for students over-quoting.',
      'Introduce a wider range of poetic terminology for students reaching mastery.',
    ],
  },
  {
    id: 'cp-y8-t3',
    title: 'Y8 Term 3 Summative: Persuasive Writing and Non-Fiction Reading',
    yearGroup: 'Y8',
    term: 3,
    type: 'summative',
    skills: ['read-03', 'write-02', 'write-04', 'lang-02', 'sl-02'],
    taskDescription:
      'Section A: Students analyse a persuasive speech extract, focusing on rhetorical devices and their effects (20 marks). Section B: Students write a persuasive speech on a given motion (25 marks).',
    markingCriteria: [
      {
        criterion: 'Section A: Identifying and analysing rhetoric',
        weight: 40,
        descriptors: [
          '0-5: Identifies features without analysis',
          '6-12: Explains effect of rhetorical choices',
          '13-20: Detailed analysis of how rhetoric positions the audience',
        ],
      },
      {
        criterion: 'Section B: Argument construction',
        weight: 35,
        descriptors: [
          '0-5: Limited argument; no counter-argument',
          '6-12: Developing argument with some counter-argument',
          '13-25: Well-structured argument with effective counter and rebuttal',
        ],
      },
      {
        criterion: 'Section B: Use of rhetorical techniques',
        weight: 25,
        descriptors: [
          '0-3: Little or no rhetorical technique',
          '4-8: Some techniques used; limited effect',
          '9-15: Range of techniques used purposefully',
          '16-25: Sophisticated and varied rhetoric integrated throughout',
        ],
      },
    ],
    nextStepsGuidance: [
      'Return scripts with a personalised target for Y9.',
      'Share top-band exemplars anonymously and ask students to annotate them.',
      'Discuss the relationship between spoken and written rhetoric in preparation for Y9 speaking work.',
    ],
  },

  // ── Y9 ───────────────────────────────────────────────────────────────────

  {
    id: 'cp-y9-t1',
    title: 'Y9 Term 1 Diagnostic: GCSE Readiness Check',
    yearGroup: 'Y9',
    term: 1,
    type: 'diagnostic',
    skills: ['read-02', 'read-03', 'write-03', 'lang-03', 'lit-01'],
    taskDescription:
      'Students complete a 45-minute paper modelled on IGCSE Paper 1 Section A, analysing a fiction extract, followed by a 20-minute free writing task to assess independent writing skills.',
    markingCriteria: [
      {
        criterion: 'Reading: inference and evidence',
        weight: 30,
        descriptors: [
          '0-5: Surface comments; assertion without evidence',
          '6-12: Developing inference with some evidence',
          '13-18: Consistent inference with well-chosen, embedded quotations',
        ],
      },
      {
        criterion: 'Reading: language analysis',
        weight: 40,
        descriptors: [
          '0-7: Feature-spotting; no or minimal effect comment',
          '8-16: Effect explained; terminology developing',
          '17-24: Detailed analysis of language effects; subject terminology used accurately',
        ],
      },
      {
        criterion: 'Writing: quality and accuracy',
        weight: 30,
        descriptors: [
          '0-5: Limited development; frequent SPaG errors',
          '6-12: Developing quality; mostly accurate',
          '13-18: Effective writing; accurate; some stylistic ambition',
        ],
      },
    ],
    nextStepsGuidance: [
      'Use results to set ability-informed reading groups for the year.',
      'Identify students requiring pre-teaching of GCSE terminology before Y10.',
      'Brief parents of students below national expectations.',
    ],
  },
  {
    id: 'cp-y9-t2',
    title: 'Y9 Term 2 Formative: Drama and Context',
    yearGroup: 'Y9',
    term: 2,
    type: 'formative',
    skills: ['lit-03', 'lit-04', 'read-03', 'write-05'],
    taskDescription:
      'Students write a response of approximately 500 words on how a playwright presents a key theme in a studied scene, with explicit reference to dramatic techniques, stagecraft and context.',
    markingCriteria: [
      {
        criterion: 'Dramatic technique analysis',
        weight: 40,
        descriptors: [
          '1: Names techniques with no effect comment',
          '2: Explains some effects of dramatic techniques',
          '3: Detailed analysis of how techniques affect the audience',
          '4: Sophisticated exploration of technique as vehicle for meaning',
        ],
      },
      {
        criterion: 'Contextual integration',
        weight: 30,
        descriptors: [
          '1: Context mentioned but not linked to text',
          '2: Context used to support some interpretations',
          '3: Context integrated purposefully throughout',
        ],
      },
      {
        criterion: 'Quality of written argument',
        weight: 30,
        descriptors: [
          '1: Descriptive or narrative approach',
          '2: Some analytical argument present',
          '3: Sustained analytical argument',
          '4: Confident critical voice throughout',
        ],
      },
    ],
    nextStepsGuidance: [
      'Model how to weave context into analysis rather than presenting it in isolation.',
      'Provide a glossary of dramatic terminology for students who name without explaining.',
      'Set an extension task for mastery-level students requiring independent critical reading.',
    ],
  },
  {
    id: 'cp-y9-t3',
    title: 'Y9 Term 3 Summative: End-of-Year Reading and Writing',
    yearGroup: 'Y9',
    term: 3,
    type: 'summative',
    skills: [
      'read-01',
      'read-02',
      'read-03',
      'write-02',
      'write-03',
      'write-04',
      'lang-01',
      'lang-02',
      'lang-03',
    ],
    taskDescription:
      'Full mock IGCSE Paper 1: Section A (35 marks) on a non-fiction passage with four graduated questions; Section B (25 marks) writing for purpose and audience. 1 hour 45 minutes.',
    markingCriteria: [
      {
        criterion: 'Section A Q1: Retrieval',
        weight: 10,
        descriptors: [
          '1-2: Partially correct retrieval',
          '3-4: Accurate retrieval with paraphrase',
          '5-6: Precise retrieval, relevant selection',
        ],
      },
      {
        criterion: 'Section A Q2: Inference',
        weight: 15,
        descriptors: [
          '1-3: Assertion or simple comment',
          '4-7: Developing inference with evidence',
          '8-10: Perceptive inference; embedded quotation',
        ],
      },
      {
        criterion: 'Section A Q3: Language analysis',
        weight: 25,
        descriptors: [
          '1-5: Names devices; limited effect comment',
          '6-12: Explains effects; some terminology',
          '13-19: Detailed analysis; accurate terminology throughout',
        ],
      },
      {
        criterion: 'Section B: Writing quality',
        weight: 50,
        descriptors: [
          '1-8: Limited; little audience/purpose awareness',
          '9-16: Developing; some form features',
          '17-23: Clear, effective writing; form used purposefully',
          '24-25: Sophisticated; compelling and controlled throughout',
        ],
      },
    ],
    nextStepsGuidance: [
      'Produce a detailed mark analysis to inform Y10 setting and grouping decisions.',
      'Share GCSE grade-band descriptors with students and parents.',
      'Create personalised summer bridging tasks for students with specific gaps.',
    ],
  },

  // ── Y10 ──────────────────────────────────────────────────────────────────

  {
    id: 'cp-y10-t1',
    title: 'Y10 Term 1 Formative: IGCSE Language Paper 1 Practice',
    yearGroup: 'Y10',
    term: 1,
    type: 'formative',
    skills: ['read-02', 'read-03', 'read-04', 'write-02', 'write-04'],
    taskDescription:
      'Timed practice of IGCSE English Language Paper 1 under near-exam conditions. Section A: comprehension and language analysis (35 marks). Section B: directed writing or argument (25 marks).',
    markingCriteria: [
      {
        criterion: 'Comprehension and analysis (Section A)',
        weight: 58,
        descriptors: [
          '0-12: Limited comprehension and feature-spotting',
          '13-22: Developing analysis with some sustained focus',
          '23-35: Detailed, well-evidenced analysis with confident terminology',
        ],
      },
      {
        criterion: 'Writing quality (Section B)',
        weight: 42,
        descriptors: [
          '0-8: Limited; little form or purpose awareness',
          '9-16: Developing; mostly appropriate register',
          '17-25: Effective, controlled writing appropriate to task',
        ],
      },
    ],
    nextStepsGuidance: [
      'Introduce students to the IGCSE mark scheme and assessment objectives.',
      'Use targeted feedback on Section A to refine analytical writing style.',
      'Begin timed practice with strict word counts for Section B writing.',
    ],
  },
  {
    id: 'cp-y10-t3',
    title: 'Y10 Term 3 Summative: Mock IGCSE Language and Literature',
    yearGroup: 'Y10',
    term: 3,
    type: 'summative',
    skills: [
      'read-03',
      'read-04',
      'write-04',
      'write-05',
      'lit-04',
      'lang-02',
      'lang-03',
      'lang-04',
    ],
    taskDescription:
      'Full mock for IGCSE Language Paper 1 (1 hour 45 min) and a literature essay on a studied text (45 min). Marked against IGCSE mark schemes.',
    markingCriteria: [
      {
        criterion: 'Language Paper 1: Section A analysis',
        weight: 35,
        descriptors: [
          '0-11: Below expected standard',
          '12-22: Approaching expected standard',
          '23-35: At or above expected standard',
        ],
      },
      {
        criterion: 'Language Paper 1: Section B writing',
        weight: 25,
        descriptors: [
          '0-8: Below expected standard',
          '9-16: Approaching expected standard',
          '17-25: At or above expected standard',
        ],
      },
      {
        criterion: 'Literature essay: argument and analysis',
        weight: 40,
        descriptors: [
          '0-13: Below expected; description dominates',
          '14-26: Developing analysis; some argument',
          '27-40: Sustained, well-evidenced analytical argument',
        ],
      },
    ],
    nextStepsGuidance: [
      'Convert mock results to projected IGCSE grades and share with students.',
      'Identify top intervention priorities for each student ahead of Y11.',
      'Plan Y11 revision scheme based on class-wide patterns in mock results.',
    ],
  },

  // ── Y11 ──────────────────────────────────────────────────────────────────

  {
    id: 'cp-y11-t1',
    title: 'Y11 Term 1 Formative: IGCSE Literature Paper Practice',
    yearGroup: 'Y11',
    term: 1,
    type: 'formative',
    skills: ['lit-03', 'lit-04', 'read-04', 'write-05'],
    taskDescription:
      'Students complete timed essay responses on two studied texts (prose and drama), followed by an unseen poetry question. Marked against IGCSE Literature mark scheme.',
    markingCriteria: [
      {
        criterion: 'Prose essay: analysis and argument',
        weight: 35,
        descriptors: [
          '0-10: Limited; story-telling or paraphrase',
          '11-20: Developing analysis with some argument',
          '21-35: Well-sustained analytical argument; effective use of context',
        ],
      },
      {
        criterion: 'Drama essay: stagecraft and context',
        weight: 35,
        descriptors: [
          '0-10: Limited dramatic awareness; context bolted on',
          '11-20: Developing exploration of dramatic methods',
          '21-35: Detailed, contextualised analysis of dramatic craft',
        ],
      },
      {
        criterion: 'Unseen poetry response',
        weight: 30,
        descriptors: [
          '0-8: Surface reading; some feature identification',
          '9-16: Analysis of key features with developing effect comment',
          '17-24: Confident analysis of form, language and structure',
        ],
      },
    ],
    nextStepsGuidance: [
      'Address the most common error (story-telling) through modelled re-drafts.',
      'Build unseen poetry confidence through weekly timed practice.',
      'Create revision action plans with students based on their weakest essay.',
    ],
  },
  {
    id: 'cp-y11-t3',
    title: 'Y11 Term 3 Summative: Final IGCSE Mock Examinations',
    yearGroup: 'Y11',
    term: 3,
    type: 'summative',
    skills: [
      'read-01',
      'read-02',
      'read-03',
      'read-04',
      'write-02',
      'write-04',
      'write-05',
      'lit-03',
      'lit-04',
      'lang-02',
      'lang-03',
      'lang-04',
      'sl-05',
    ],
    taskDescription:
      'Full IGCSE mock examination series under exam conditions: Language Paper 1, Language Paper 2 and Literature Paper. Results used to confirm teacher-assessed grades and identify final intervention priorities.',
    markingCriteria: [
      {
        criterion: 'Language Paper 1',
        weight: 34,
        descriptors: [
          '0-19: Below C/4 equivalent',
          '20-39: C/4 to B/6 range',
          '40-60: A/7 to A*/9 range',
        ],
      },
      {
        criterion: 'Language Paper 2',
        weight: 33,
        descriptors: [
          '0-19: Below C/4 equivalent',
          '20-39: C/4 to B/6 range',
          '40-60: A/7 to A*/9 range',
        ],
      },
      {
        criterion: 'Literature Paper',
        weight: 33,
        descriptors: [
          '0-19: Below C/4 equivalent',
          '20-39: C/4 to B/6 range',
          '40-60: A/7 to A*/9 range',
        ],
      },
    ],
    nextStepsGuidance: [
      'Provide each student with a written report of strengths and areas for development.',
      'Run targeted revision clinics in the final weeks before external exams.',
      'Ensure spoken language endorsement evidence is complete and signed off.',
    ],
  },

  // ── Y12 ──────────────────────────────────────────────────────────────────

  {
    id: 'cp-y12-t1',
    title: 'Y12 Term 1 Diagnostic: A Level Transition Assessment',
    yearGroup: 'Y12',
    term: 1,
    type: 'diagnostic',
    skills: ['read-05', 'write-05', 'lit-05', 'lang-05', 'sl-06'],
    taskDescription:
      'Students write a timed analytical essay (45 minutes) on an unseen literary prose extract. The assessment identifies gaps in analytical writing and close reading from GCSE and informs Y12 teaching priorities.',
    markingCriteria: [
      {
        criterion: 'Close reading and textual analysis',
        weight: 50,
        descriptors: [
          '0-10: Paraphrase or basic feature identification',
          '11-20: Developing analysis; some close attention to language',
          '21-30: Detailed close reading; effects explored with precision',
        ],
      },
      {
        criterion: 'Argument construction and critical voice',
        weight: 30,
        descriptors: [
          '0-6: Descriptive or narrative approach',
          '7-12: Argument present but not sustained',
          '13-18: Clear critical voice; sustained argument throughout',
        ],
      },
      {
        criterion: 'Written accuracy and expression',
        weight: 20,
        descriptors: [
          '0-4: Frequent errors; limited expression',
          '5-8: Mostly accurate; some ambitious expression',
          '9-12: Accurate; fluent, scholarly expression developing',
        ],
      },
    ],
    nextStepsGuidance: [
      'Run a structured transition programme for students still writing descriptively.',
      'Introduce analytical essay frameworks (e.g. thesis-evidence-analysis-evaluation).',
      'Identify students who may benefit from an extended writing support programme.',
    ],
  },

  // ── Y13 ──────────────────────────────────────────────────────────────────

  {
    id: 'cp-y13-t1',
    title: 'Y13 Term 1 Summative: Pre-Mock Full Paper Assessment',
    yearGroup: 'Y13',
    term: 1,
    type: 'summative',
    skills: [
      'read-05',
      'read-06',
      'write-05',
      'write-06',
      'lit-05',
      'lit-06',
      'lang-05',
      'lang-06',
    ],
    taskDescription:
      'Full A Level mock paper under exam conditions. For English Literature students: two essay questions on set texts plus a comparative unseen question. For English Language students: language investigation analysis and production with commentary.',
    markingCriteria: [
      {
        criterion: 'AO1: Communication and literary/linguistic knowledge',
        weight: 25,
        descriptors: [
          '0-6: Limited knowledge; expression impedes communication',
          '7-12: Developing knowledge; mostly clear expression',
          '13-18: Secure knowledge; fluent, well-organised response',
        ],
      },
      {
        criterion: 'AO2: Analysis of language, form and structure',
        weight: 35,
        descriptors: [
          '0-8: Feature identification; limited effect comment',
          '9-16: Analysis developing; some detailed comment',
          '17-25: Detailed, consistently perceptive analysis',
        ],
      },
      {
        criterion: 'AO3: Contexts and connections',
        weight: 25,
        descriptors: [
          '0-6: Context mentioned; not integrated',
          '7-12: Context used relevantly in support',
          '13-18: Context meaningfully integrated; illuminates interpretation',
        ],
      },
      {
        criterion: 'AO4/AO5: Critical reading and evaluation',
        weight: 15,
        descriptors: [
          '0-3: No or minimal engagement with alternative readings',
          '4-7: Some awareness of multiple perspectives',
          '8-12: Confident engagement with critical viewpoints',
        ],
      },
    ],
    nextStepsGuidance: [
      'Provide written feedback using AO commentary to align with examiner language.',
      'Set a coursework redraft deadline based on mock performance.',
      'Run final examination technique clinics: time management, question selection, planning.',
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// INTERVENTION STRATEGIES  (15 total)
// ─────────────────────────────────────────────────────────────────────────────

export const interventionStrategies: InterventionStrategy[] = [
  {
    id: 'int-01',
    targetSkill: 'read-01',
    yearGroups: ['Y7', 'Y8'],
    issue:
      'Student cannot locate or paraphrase information from a text without significant scaffolding.',
    strategy:
      'Implement a structured retrieval programme using PEEL (Point, Evidence, Explain, Link) frames. Begin with single-sentence retrieval and build to paragraph-length summary over four weeks. Use colour-coded annotation (yellow for facts, blue for opinions) to make retrieval visible.',
    resources: [
      'Retrieval practice worksheets (graduated difficulty)',
      'Colour annotation guides',
      'Short non-fiction passages at reading-age-appropriate level',
    ],
    expectedImpact:
      'Student can accurately retrieve and paraphrase three or more points from an unseen text independently within six weeks.',
    reviewPeriod: '6 weeks',
  },
  {
    id: 'int-02',
    targetSkill: 'read-02',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    issue: 'Student makes assertions without evidence or cannot move beyond literal meaning.',
    strategy:
      'Use the "Because/But/So" inference scaffold. Student states an inference, justifies it with "because" (textual evidence), qualifies it with "but" (counter-reading) and extends it with "so" (significance). Model with teacher think-aloud and then fade the scaffold over three lessons.',
    resources: [
      '"Because/But/So" sentence frames handout',
      'Inference ladder graphic organiser',
      'Paired inference discussion protocols',
    ],
    expectedImpact:
      'Student produces a fully evidenced inference paragraph independently within four weeks.',
    reviewPeriod: '4 weeks',
  },
  {
    id: 'int-03',
    targetSkill: 'read-03',
    yearGroups: ['Y8', 'Y9', 'Y10'],
    issue:
      'Student identifies language features by name but cannot explain the effect on the reader.',
    strategy:
      'Introduce the "Zoom In" method: students select a single word or phrase, consider multiple possible effects using "this could suggest... or perhaps...", then commit to the most convincing interpretation with reasoning. Use worked examples comparing shallow and deep analysis.',
    resources: [
      '"Zoom In" analysis frame',
      'Exemplar annotations showing shallow vs. deep analysis',
      'Extract bank for paired practice',
    ],
    expectedImpact:
      'Student can explain the effect of at least two language choices with developed reasoning within three weeks.',
    reviewPeriod: '3 weeks',
  },
  {
    id: 'int-04',
    targetSkill: 'write-01',
    yearGroups: ['Y7', 'Y8'],
    issue: 'Writing lacks paragraphing; ideas are listed rather than developed.',
    strategy:
      'Use the TIPTOP (Topic sentence, Introduce evidence, Point, Technique, Opinion, Point again) paragraph model for structured writing tasks. Provide a visual scaffold showing the function of each sentence. Practice in-class with teacher feedback on structure before SPaG is addressed.',
    resources: [
      'TIPTOP paragraph planning sheet',
      'Colour-coded exemplar paragraphs',
      'Sentence starter bank',
    ],
    expectedImpact:
      'Student consistently uses paragraphs with topic sentences and developed points within five weeks.',
    reviewPeriod: '5 weeks',
  },
  {
    id: 'int-05',
    targetSkill: 'write-03',
    yearGroups: ['Y8', 'Y9'],
    issue: 'Descriptive writing is vague or relies on clichéd phrases.',
    strategy:
      'Run a two-week vocabulary immersion sprint: daily five-minute activities (thesaurus exploration, "show not tell" rewrites, sensory description challenges). Students maintain a personal "Word Hoard" notebook. Each week they must incorporate five new words into extended writing.',
    resources: [
      'Daily vocabulary warm-up slides',
      'Word Hoard notebook template',
      '"Show Don\'t Tell" rewriting tasks',
      'Curated word lists by theme (nature, emotion, conflict)',
    ],
    expectedImpact:
      "Student's writing demonstrates a noticeably wider and more precise vocabulary range within three weeks.",
    reviewPeriod: '3 weeks',
  },
  {
    id: 'int-06',
    targetSkill: 'write-04',
    yearGroups: ['Y9', 'Y10', 'Y11'],
    issue: 'Argumentative writing lacks a counter-argument or fails to rebut opposing views.',
    strategy:
      'Introduce a debate-into-writing cycle: students first debate a motion orally (structured academic controversy format), then convert their spoken rebuttals into written paragraphs. Use a "Devil\'s Advocate" frame that requires every argument to anticipate an objection.',
    resources: [
      'Structured academic controversy protocol cards',
      'Counter-argument sentence frames ("While some argue... this view overlooks...")',
      'Sample A-grade argumentative paragraphs with annotations',
    ],
    expectedImpact:
      'Student includes effective counter-argument and rebuttal in argumentative writing within four weeks.',
    reviewPeriod: '4 weeks',
  },
  {
    id: 'int-07',
    targetSkill: 'lang-01',
    yearGroups: ['Y7', 'Y8'],
    issue:
      'Student makes persistent punctuation errors (comma splices, missing full stops, inconsistent capitalisation).',
    strategy:
      'Implement a "Fix It" daily editing routine: student is given three sentences per lesson with deliberate errors to correct and explain. Errors are drawn from the student\'s own recent writing. Weekly error-free paragraph challenge with positive recognition.',
    resources: [
      'Personalised "Fix It" error sentence cards',
      'Punctuation reference mat',
      'Error-free paragraph challenge tracker',
    ],
    expectedImpact:
      'Comma splices and full stop errors are eliminated within six weeks; other punctuation errors reduce by at least 75%.',
    reviewPeriod: '6 weeks',
  },
  {
    id: 'int-08',
    targetSkill: 'lang-02',
    yearGroups: ['Y8', 'Y9'],
    issue:
      'Student overuses simple sentences and cannot construct complex or compound-complex sentences accurately.',
    strategy:
      'Sentence expansion workshop: start with a simple sentence kernel and practise adding one grammatical element per lesson (subordinate clause, relative clause, adverbial, appositive). Use sentence-combining exercises drawn from literary texts to show the craft of complex syntax.',
    resources: [
      'Sentence expansion cards (add a relative clause, add an adverbial, etc.)',
      'Sentence combining exercise pack',
      'Annotated literary extracts showing varied syntax',
    ],
    expectedImpact:
      'Student uses a range of sentence structures including complex sentences accurately within four weeks.',
    reviewPeriod: '4 weeks',
  },
  {
    id: 'int-09',
    targetSkill: 'lang-04',
    yearGroups: ['Y9', 'Y10', 'Y11'],
    issue:
      'Student has a high frequency of spelling errors including common homophones and polysyllabic words.',
    strategy:
      "Introduce a personalised Look-Cover-Write-Check (LCWC) programme using words identified from the student's own writing. Focus on morphological pattern groupings (prefixes, suffixes, roots) rather than isolated word lists. Test mastery weekly using contextualised sentences.",
    resources: [
      'Personal spelling error log (drawn from marked work)',
      'Morphological pattern word sort cards',
      'LCWC weekly test proforma',
    ],
    expectedImpact:
      'Frequency of spelling errors in free writing reduces by 60% within eight weeks.',
    reviewPeriod: '8 weeks',
  },
  {
    id: 'int-10',
    targetSkill: 'lit-01',
    yearGroups: ['Y7', 'Y8'],
    issue: 'Student retells the story rather than analysing narrative choices.',
    strategy:
      'Use the "Author\'s Chair" perspective shift: student is asked "Why did the author choose this? What effect does it have?" after every story-telling sentence. Teach explicitly the distinction between what happens and how the writer creates effects. Use a two-column annotation frame: "What happens" vs. "How and why the writer does this".',
    resources: [
      'Two-column annotation frame',
      'Author intention sentence starters',
      'Before-and-after exemplar responses',
    ],
    expectedImpact:
      'Student consistently uses analytical language ("the writer suggests... in order to...") rather than narrative retelling within three weeks.',
    reviewPeriod: '3 weeks',
  },
  {
    id: 'int-11',
    targetSkill: 'lit-04',
    yearGroups: ['Y10', 'Y11'],
    issue:
      'Student includes contextual knowledge as a separate block rather than integrating it into literary analysis.',
    strategy:
      'Practice the "Lens" model: context is always introduced as a lens through which to view the text, not a fact to be stated. Use the stem "Viewed through the lens of [context], this suggests..." Students rewrite their own paragraphs replacing bolted-on context with integrated contextual analysis.',
    resources: [
      '"Lens" model paragraph frame',
      'Context integration before-and-after examples',
      'Historical and biographical context fact sheets for set texts',
    ],
    expectedImpact:
      'Student integrates context into analysis in at least three of five paragraphs within four weeks.',
    reviewPeriod: '4 weeks',
  },
  {
    id: 'int-12',
    targetSkill: 'lit-05',
    yearGroups: ['Y12', 'Y13'],
    issue:
      'Student cannot sustain an independent argument across a full essay; paragraphs feel disconnected.',
    strategy:
      'Introduce the "Golden Thread" essay planning technique: before writing, student writes a one-sentence thesis and checks every planned paragraph against it, removing or redirecting any that do not serve the thesis. Post-writing, student highlights the words or phrases in each paragraph that explicitly connect back to the thesis.',
    resources: [
      'Thesis statement writing guide',
      '"Golden Thread" planning scaffold',
      'Annotated A-grade essays demonstrating argument continuity',
    ],
    expectedImpact:
      "Student's essays demonstrate a coherent, sustained argument across all paragraphs within five weeks.",
    reviewPeriod: '5 weeks',
  },
  {
    id: 'int-13',
    targetSkill: 'sl-01',
    yearGroups: ['Y7', 'Y8'],
    issue:
      'Student is reluctant to speak in front of the class; contributions are inaudible or monosyllabic.',
    strategy:
      'Graduated exposure programme: start with paired talk, then small group (3-4), then report back on behalf of the group, then solo contribution. Use "Talk Tokens" to gamify participation - each student has three tokens per lesson to spend on contributions. Celebrate all attempts.',
    resources: [
      'Paired talk prompt cards',
      'Talk Tokens tracker',
      'Sentence starter display for class contributions',
    ],
    expectedImpact:
      'Student makes at least one voluntary whole-class contribution per lesson within six weeks.',
    reviewPeriod: '6 weeks',
  },
  {
    id: 'int-14',
    targetSkill: 'write-05',
    yearGroups: ['Y12', 'Y13'],
    issue:
      "Student's analytical writing remains descriptive; lacks a critical voice and evaluative stance.",
    strategy:
      'Run a "So What?" revision drill: after every analytical sentence, student must ask "So what does this reveal about the writer\'s broader purpose or meaning?" and write one more sentence in response. Supplement with reading of short critical extracts to model academic register. Practice converting a descriptive paragraph into an analytical one daily for two weeks.',
    resources: [
      '"So What?" drill worksheet',
      'Short critical extracts for modelling',
      'Analytical vs. descriptive paragraph comparison handout',
    ],
    expectedImpact:
      'Student sustains an analytical, evaluative register throughout at least 80% of a timed essay within four weeks.',
    reviewPeriod: '4 weeks',
  },
  {
    id: 'int-15',
    targetSkill: 'lang-06',
    yearGroups: ['Y13'],
    issue:
      'Student references linguistic theory superficially without applying it to data or text analysis.',
    strategy:
      "Use a Theory Application Matrix: student maps each theoretical framework (e.g. Labov's narrative theory, Grice's maxims, Trudgill's dialect levelling) to specific data examples. Each application must include a description of the evidence, the theoretical concept used and a qualification of the theory's limitations. Weekly seminar discussions on a theory-data pairing.",
    resources: [
      'Theory Application Matrix template',
      'Summary cards for key linguistic theories',
      'Data transcripts and language samples for analysis',
      'Academic journal article excerpts (accessible level)',
    ],
    expectedImpact:
      'Student applies at least three distinct theoretical frameworks accurately in a language essay within six weeks.',
    reviewPeriod: '6 weeks',
  },
]
