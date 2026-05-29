/**
 * IELTS Writing Task 2 — Conventions & Common Pitfalls (knowledge-pack content)
 * ---------------------------------------------------------------------------
 * DATA module for the marking engine knowledge pack. This file contains marking
 * GUIDANCE authored in the project's own words: board conventions, common
 * pitfalls, L1-transfer error patterns (with special attention to Arabic-L1,
 * this product's core EAL audience), and integrity considerations.
 *
 * SOURCING MANIFEST (plan R-COPY — the cardinal rule)
 * ---------------------------------------------------------------------------
 * - authoredBy: english-hub content team (own paraphrase / original guidance).
 * - sourcing: own-paraphrase. The four-criterion framework (Task Response,
 *   Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) and
 *   the 0–9 whole-band scale derive from the PUBLIC IELTS band-descriptor
 *   framework published by the British Council, IDP: IELTS Australia and
 *   Cambridge Assessment English, aligned to the CEFR. The descriptive language
 *   here is the project's own characterisation of those public criteria.
 * - containsBoardSecureMaterial: false. No secure/official descriptor wording is
 *   reproduced. No verbatim board descriptor text is present. All assessment
 *   language below is paraphrased/original guidance written for this product.
 * - derivedFrom: "IELTS public band-descriptor framework + CEFR alignment".
 *
 * SHAPE NOTE / ASSUMPTION
 * ---------------------------------------------------------------------------
 * The canonical KnowledgePack types live in
 *   src/lib/marking/engine/knowledge-pack/types.ts
 * which is owned and built by the Phase-2 engine core in parallel and is not
 * read/modified here. To keep this DATA module self-contained and compilable in
 * isolation, the shapes it relies on are mirrored locally below as exported
 * interfaces. If the engine's canonical types differ in field names, the loader
 * should adapt these consts (e.g. via a thin mapping) rather than this file
 * being edited to import from types.ts. Fields are named conservatively and
 * documented so the mapping is mechanical. (Assumption flagged per task brief:
 * "mirror it and note the assumption — do not edit that file".)
 */

/* ===========================================================================
 * Mirrored shape declarations (local, see SHAPE NOTE above)
 * =========================================================================== */

/** Provenance/copyright manifest carried by every knowledge-pack data file. */
export interface SourcingManifest {
  /** Who authored this content. */
  authoredBy: string
  /** Provenance classification of the descriptor language. */
  sourcing: 'own-paraphrase'
  /** Hard assertion: no board secure/official descriptor wording reproduced. */
  containsBoardSecureMaterial: false
  /** The public authority/framework the criteria are derived from. */
  derivedFrom: string
  /** Free-text notes on scope and limitations. */
  notes?: string
  /** ISO date this content was last reviewed by a human author. */
  lastReviewed?: string
}

/**
 * The four IELTS Writing assessment criteria (public framework).
 *
 * Keys are kept identical to the canonical `criteria` array in this pack's
 * sibling `sourcing-manifest.ts` (`ieltsWritingTask2SourcingManifest.criteria`)
 * so every file in the pack agrees on criterion identifiers. Note the sibling
 * per-criterion descriptor modules (e.g. `descriptors-coherence-cohesion.ts`)
 * use a hyphenated form (`coherence-and-cohesion`) for their own local
 * `criterion` field; the loader maps between the two — these underscore keys are
 * the provenance/canonical form.
 */
export type Criterion =
  | 'task_response'
  | 'coherence_and_cohesion'
  | 'lexical_resource'
  | 'grammatical_range_and_accuracy'

/** How heavily an issue should weigh when an examiner-style model marks. */
export type Severity = 'minor' | 'moderate' | 'major'

/** Confidence that an observed surface feature is the diagnosed cause. */
export type Confidence = 'low' | 'medium' | 'high'

/**
 * A board/exam convention: a fixed expectation of the Task 2 genre that the
 * marker should hold candidates to (or explicitly NOT penalise).
 */
export interface MarkingConvention {
  id: string
  /** Short human-readable label. */
  title: string
  /** Which criteria this convention chiefly informs. */
  criteria: Criterion[]
  /** The convention, stated as marking guidance. */
  guidance: string
  /** Concrete do / don't notes for the marking model. */
  examinerNotes?: string[]
}

/**
 * A common pitfall a marker should recognise. May be a genre/task error, a
 * generic L2 error, or an L1-transfer pattern. L1-transfer entries set
 * `l1Transfer` so guidance can distinguish transfer from comprehension failure.
 */
export interface Pitfall {
  id: string
  /** Short human-readable label. */
  title: string
  /** Criteria primarily affected. */
  criteria: Criterion[]
  /** Plain description of the pitfall. */
  description: string
  /** Typical surface signals the model can look for (illustrative, not lexicon). */
  surfaceSignals: string[]
  /** Illustrative learner-style example and a corrected form. */
  example?: { learner: string; corrected: string }
  /** Suggested severity weighting under the four-criteria rubric. */
  severity: Severity
  /** Marking guidance: how this should (and should not) move the bands. */
  markingGuidance: string
  /** If this is an L1→English transfer pattern, the source-language note. */
  l1Transfer?: {
    l1: string // e.g. 'arabic'
    mechanism: string // why the L1 produces this in English
    confidence: Confidence // confidence the signal indicates transfer
  }
}

/**
 * An integrity consideration: a condition that can cap or invalidate a score
 * irrespective of language quality (e.g. memorised, copied, under-length).
 */
export interface IntegrityConsideration {
  id: string
  title: string
  description: string
  /** Observable signals that should raise the flag. */
  detectionSignals: string[]
  /** What the marker should DO when the condition is detected. */
  markingAction: string
  /** Whether this gates/caps the overall band rather than nudging a criterion. */
  effect: 'cap_band' | 'flag_for_review' | 'penalise_criterion' | 'invalidate'
}

/** Top-level export shape for this content file. */
export interface ConventionsAndPitfallsPack {
  packId: string
  task: 'ielts-writing-task2'
  sourcing: SourcingManifest
  conventions: MarkingConvention[]
  pitfalls: Pitfall[]
  integrity: IntegrityConsideration[]
  /** Cross-cutting principle the marking model must apply to all of the above. */
  markingPhilosophy: string[]
}

/* ===========================================================================
 * Sourcing manifest (R-COPY)
 * =========================================================================== */

export const SOURCING: SourcingManifest = {
  authoredBy: 'english-hub content team',
  sourcing: 'own-paraphrase',
  containsBoardSecureMaterial: false,
  derivedFrom: 'IELTS public band-descriptor framework + CEFR alignment',
  notes:
    'Original marking guidance written for this product. No British Council / ' +
    'IDP / Cambridge secure or official descriptor wording is reproduced. The ' +
    'four-criterion model and 0–9 band scale are the publicly documented IELTS ' +
    'framework; all characterisations here are the project’s own paraphrase.',
  lastReviewed: '2026-05-29',
}

/* ===========================================================================
 * Cross-cutting marking philosophy
 * =========================================================================== */

export const MARKING_PHILOSOPHY: string[] = [
  'Mark against the four published criteria — Task Response, Coherence & ' +
    'Cohesion, Lexical Resource, Grammatical Range & Accuracy — not against ' +
    'native-speaker idiom or personal stylistic preference.',
  'Distinguish TRANSFER errors (systematic patterns carried over from the ' +
    'writer’s first language) from COMPREHENSION errors (the reader cannot ' +
    'recover the intended meaning). Transfer errors that leave meaning fully ' +
    'recoverable are accuracy/range issues, not coherence failures, and should ' +
    'be weighted accordingly.',
  'Penalise an error once, under the criterion it actually belongs to. A ' +
    'misused article is a Grammatical Range & Accuracy matter; do not also ' +
    'down-rate Lexical Resource or Coherence for the same surface slip.',
  'Reward what the writer demonstrably controls. Ambition that produces ' +
    'occasional slips (attempting complex structures, less common vocabulary) ' +
    'is credited at the higher bands; do not reward error-free simplicity above ' +
    'flawed range when the rubric rewards range.',
  'Frequency and communicative impact drive severity. An error that recurs ' +
    'systematically, or that obscures meaning, weighs more than an isolated ' +
    'slip that the reader passes over without effort.',
  'Treat the marker as an international, sympathetic-but-rigorous reader: ' +
    'comprehension is judged from the standpoint of a trained examiner used to ' +
    'EAL writing, not a monolingual lay reader unused to L2 English.',
]

/* ===========================================================================
 * Board / genre conventions
 * =========================================================================== */

export const CONVENTIONS: MarkingConvention[] = [
  {
    id: 'conv.format.essay-genre',
    title: 'Task 2 is a formal discursive essay',
    criteria: ['task_response', 'coherence_and_cohesion'],
    guidance:
      'The expected response is a formal, semi-academic essay that develops a ' +
      'position or discussion in connected paragraphs. Bullet points, note ' +
      'form, headings, or letter/report formatting are out of genre and should ' +
      'be treated as a Coherence & Cohesion and Task Response weakness, not as ' +
      'a neutral stylistic choice.',
    examinerNotes: [
      'A clear introduction, body paragraphs each with a central idea, and a ' +
        'conclusion is the genre norm; absence of paragraphing is penalised ' +
        'under Coherence & Cohesion.',
      'Do not require a fixed paragraph count — reward logical organisation, ' +
        'not a memorised template.',
    ],
  },
  {
    id: 'conv.length.minimum-250',
    title: 'Minimum length is ~250 words',
    criteria: ['task_response'],
    guidance:
      'Responses are expected to reach at least roughly 250 words. Scripts ' +
      'clearly under length cannot fully address the task and are limited under ' +
      'Task Response (see integrity: under-length). Do not reward padding or ' +
      'repetition used merely to reach the count.',
    examinerNotes: [
      'Word count is a Task Response consideration, not a separate score.',
      'Over-length scripts are not rewarded for length and risk relevance ' +
        'drift and time-pressure errors.',
    ],
  },
  {
    id: 'conv.task.address-all-parts',
    title: 'Every part of the prompt must be addressed',
    criteria: ['task_response'],
    guidance:
      'The marker must check the response answers the SPECIFIC question asked ' +
      '(agree/disagree, discuss both views, advantages/disadvantages, ' +
      'problem/solution, two-part questions). Addressing the broad topic but ' +
      'not the exact task — or covering only one of two required parts — caps ' +
      'Task Response regardless of language quality.',
    examinerNotes: [
      'Identify the prompt type before scoring Task Response.',
      'A clear, sustained position throughout is required for the higher Task ' +
        'Response bands where the prompt asks for an opinion.',
    ],
  },
  {
    id: 'conv.position.clear-stance',
    title: 'A clear, developed position with support',
    criteria: ['task_response'],
    guidance:
      'Higher bands require a position that is clear, sustained and supported ' +
      'with relevant, extended and developed ideas. Mark down responses where ' +
      'the stance is unclear, shifts without signposting, or is asserted ' +
      'without development. Examples and reasons should be relevant, not ' +
      'merely present.',
  },
  {
    id: 'conv.register.formality',
    title: 'Formal-to-neutral register is expected',
    criteria: ['lexical_resource', 'task_response'],
    guidance:
      'A consistent academic-leaning register is the norm. Contractions, slang, ' +
      'and conversational asides are register slips assessed under Lexical ' +
      'Resource. Treat them as minor unless pervasive; do not over-penalise an ' +
      'otherwise controlled script for occasional informality.',
  },
  {
    id: 'conv.cohesion.natural-not-mechanical',
    title: 'Cohesion should be natural, not mechanically signposted',
    criteria: ['coherence_and_cohesion'],
    guidance:
      'Linking should guide the reader without drawing attention to itself. ' +
      'Over-use of obvious connectors at the start of every sentence ' +
      '(“Firstly… Secondly… Moreover… In conclusion…” ' +
      'applied mechanically) is explicitly a higher-band limiter, not a ' +
      'strength. Reward referencing, substitution and paragraph-level ' +
      'progression, not connector density.',
    examinerNotes: [
      'Accurate but mechanical/over-signalled cohesion is capped below the top ' +
        'Coherence & Cohesion bands.',
      'Mis-paragraphing (one long block, or a new paragraph per sentence) is a ' +
        'Coherence & Cohesion weakness.',
    ],
  },
  {
    id: 'conv.lexis.reward-flexibility-not-showpieces',
    title: 'Reward flexible, precise vocabulary — not inserted "big words"',
    criteria: ['lexical_resource'],
    guidance:
      'Lexical Resource credits range, precision and natural collocation. ' +
      'Memorised low-frequency words used inaccurately, or thesaurus ' +
      'substitutions that break collocation, are errors, not evidence of range. ' +
      'Mark on whether word choice communicates precisely and naturally.',
  },
  {
    id: 'conv.grammar.reward-range-with-control',
    title: 'Reward grammatical range alongside accuracy',
    criteria: ['grammatical_range_and_accuracy'],
    guidance:
      'The criterion rewards BOTH a range of structures AND accuracy. A script ' +
      'of only simple, error-free sentences is limited on range; a script that ' +
      'attempts complex structures with some error can still reach higher bands ' +
      'if a good proportion of sentences are error-free. Weigh range and ' +
      'error-free proportion together.',
  },
]

/* ===========================================================================
 * Common pitfalls — generic L2 + genre
 * =========================================================================== */

const GENERIC_PITFALLS: Pitfall[] = [
  {
    id: 'pitfall.template.memorised-frame',
    title: 'Memorised template framing',
    criteria: ['task_response', 'coherence_and_cohesion', 'lexical_resource'],
    description:
      'Whole sentences or scaffolds lifted from coaching templates ' +
      '(generic openers, filler topic sentences, formulaic conclusions) that ' +
      'are not tailored to the prompt.',
    surfaceSignals: [
      'Opening/closing sentences that would fit any essay prompt',
      'Generic "It is a controversial issue in modern society" framing',
      'Topic sentences that restate the question without advancing an idea',
    ],
    example: {
      learner:
        'In this modern era, this is a very controversial topic which has both ' +
        'merits and demerits that I will discuss in this essay.',
      corrected:
        'Whether governments should fund public transport ahead of road ' +
        'building is contested; this essay argues that investment in transit ' +
        'yields the greater long-term benefit.',
    },
    severity: 'moderate',
    markingGuidance:
      'Templated framing does not count as developed content for Task Response ' +
      'and is not rewarded as range for Lexical Resource. Score only the ' +
      'candidate’s own engagement with the specific prompt. See integrity: ' +
      'memorised content for the stronger case where most of the script is ' +
      'pre-learned.',
  },
  {
    id: 'pitfall.relevance.topic-drift',
    title: 'Topic drift / answering a related but different question',
    criteria: ['task_response'],
    description:
      'The response discusses the general topic but not the exact task, or ' +
      'drifts onto a tangent partway through.',
    surfaceSignals: [
      'Body paragraphs that stop referring back to the prompt question',
      'An "agree/disagree" prompt answered as a neutral "discuss both sides"',
    ],
    example: {
      learner:
        '(Prompt: do the benefits of tourism outweigh the drawbacks?) ' +
        'Tourism is very important. Many people like to travel to other ' +
        'countries to see new cultures and eat new food…',
      corrected:
        'The economic gains from tourism — jobs and foreign revenue — outweigh ' +
        'its drawbacks, provided environmental costs are managed.',
    },
    severity: 'major',
    markingGuidance:
      'Caps Task Response: the task is not fully addressed. Language criteria ' +
      'are still scored on what is written, but do not let strong language ' +
      'lift Task Response above the cap that drift imposes.',
  },
  {
    id: 'pitfall.development.assertion-without-support',
    title: 'Under-developed ideas (assertion without support)',
    criteria: ['task_response'],
    description:
      'Points are stated but not explained, exemplified or extended; ideas are ' +
      'listed rather than developed.',
    surfaceSignals: [
      'Multiple short paragraphs each making one unsupported claim',
      'Absence of "because / for example / this means that" development chains',
    ],
    severity: 'moderate',
    markingGuidance:
      'Limits Task Response (ideas not extended/supported). It is not a ' +
      'Coherence & Cohesion fault unless the lack of development also breaks ' +
      'logical flow.',
  },
  {
    id: 'pitfall.cohesion.connector-overload',
    title: 'Mechanical connector overload',
    criteria: ['coherence_and_cohesion'],
    description:
      'Heavy front-loading of obvious linkers on nearly every sentence, often ' +
      'misused, in place of genuine paragraph progression and referencing.',
    surfaceSignals: [
      'Most sentences begin with Moreover/Furthermore/In addition',
      'Connectors used where the logical relation does not actually hold',
    ],
    severity: 'moderate',
    markingGuidance:
      'Explicitly caps Coherence & Cohesion below the top bands even when the ' +
      'connectors are accurate — mechanical signalling is a limiter, not a ' +
      'strength. Reward referencing and substitution instead.',
  },
  {
    id: 'pitfall.lexis.thesaurus-misfit',
    title: 'Thesaurus substitution breaking collocation',
    criteria: ['lexical_resource'],
    description:
      'Low-frequency words swapped in for common ones with the wrong ' +
      'collocation, connotation or part of speech, reducing precision.',
    surfaceSignals: [
      'Unusual word with a near-but-wrong meaning in context',
      'Collocation clashes ("make a damage", "do a mistake")',
    ],
    example: {
      learner: 'Governments must ameliorate the damage of the populace.',
      corrected: 'Governments must reduce the harm done to the public.',
    },
    severity: 'moderate',
    markingGuidance:
      'A Lexical Resource error: range attempted but control lacking. Credit ' +
      'the attempt at less common vocabulary, but mark the inaccuracy. Do not ' +
      'also penalise grammar for the same item unless it is genuinely a ' +
      'grammatical error.',
  },
  {
    id: 'pitfall.spelling.l2-spelling',
    title: 'Spelling and word-form errors',
    criteria: ['lexical_resource', 'grammatical_range_and_accuracy'],
    description:
      'Misspellings and wrong word forms (e.g. noun for adjective) that may or ' +
      'may not impede meaning.',
    surfaceSignals: ['Phonetic spellings', 'Wrong derivational suffix ("benefical", "advantagey")'],
    severity: 'minor',
    markingGuidance:
      'Spelling sits under Lexical Resource; word-FORM accuracy can touch ' +
      'Grammatical Range & Accuracy. Treat as minor unless errors are frequent ' +
      'enough to cause strain or obscure meaning.',
  },
]

/* ===========================================================================
 * Common pitfalls — Arabic-L1 transfer patterns (core EAL audience)
 * ---------------------------------------------------------------------------
 * Each entry sets l1Transfer so the marker can recognise the pattern as a
 * systematic first-language influence and apply the philosophy above:
 * mark on the criteria, weigh communicative impact, and do NOT treat a
 * recognisable transfer slip as a comprehension breakdown when meaning is
 * fully recoverable.
 * =========================================================================== */

const ARABIC_L1_PITFALLS: Pitfall[] = [
  {
    id: 'pitfall.ar.articles.indefinite-omission',
    title: 'Article use — omitted indefinite article ("a/an")',
    criteria: ['grammatical_range_and_accuracy'],
    description:
      'Arabic has no indefinite article, so "a/an" is frequently omitted ' +
      'before singular countable nouns. The definite article exists in Arabic ' +
      '(the al- prefix) but maps imperfectly onto English use, producing both ' +
      'omitted and over-supplied "the".',
    surfaceSignals: [
      'Singular countable noun with no determiner ("He is teacher")',
      '"The" inserted before generic/abstract nouns ("The life is hard")',
      '"The" omitted where English requires it for a specified noun',
    ],
    example: {
      learner: 'Education is key for build better society and get good job.',
      corrected: 'Education is key to building a better society and getting a good job.',
    },
    severity: 'moderate',
    markingGuidance:
      'A Grammatical Range & Accuracy matter, not a coherence failure: meaning ' +
      'is almost always recoverable, so do not down-rate comprehension. Weigh ' +
      'by frequency — pervasive article errors are a systematic accuracy ' +
      'limiter; occasional slips are minor. Score once, under GRA.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'No indefinite article in Arabic; definite-article (al-) distribution ' +
        'differs from English, especially with generic and abstract nouns.',
      confidence: 'high',
    },
  },
  {
    id: 'pitfall.ar.wordorder.vso-and-adj',
    title: 'Word order — verb-first clauses and noun–adjective order',
    criteria: ['grammatical_range_and_accuracy', 'coherence_and_cohesion'],
    description:
      'Arabic permits verb–subject–object order and places adjectives AFTER ' +
      'the noun. Transfer can surface as occasional verb-first English clauses ' +
      'or post-nominal modifier ordering.',
    surfaceSignals: [
      'Verb fronted before the subject in a statement',
      'Adjective placed after the noun ("a problem big")',
      'Unusual constituent order that still parses with effort',
    ],
    example: {
      learner: 'Believe many people that the technology made the life easy.',
      corrected: 'Many people believe that technology has made life easier.',
    },
    severity: 'moderate',
    markingGuidance:
      'Primarily Grammatical Range & Accuracy. Only treat as a Coherence & ' +
      'Cohesion issue if the ordering genuinely forces the reader to re-read to ' +
      'recover meaning. Recognise it as a transfer pattern and avoid double ' +
      'penalty across criteria.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'Arabic allows VSO clause order and uses post-nominal adjective ' +
        'placement, unlike fixed English SVO and pre-nominal adjectives.',
      confidence: 'medium',
    },
  },
  {
    id: 'pitfall.ar.tense.aspect-mapping',
    title: 'Tense / aspect mapping — perfect and continuous',
    criteria: ['grammatical_range_and_accuracy'],
    description:
      'The Arabic verb system marks aspect (completed vs. ongoing) more than ' +
      'the fine tense/aspect distinctions of English. This produces mismatches ' +
      'with the present perfect, past perfect and continuous forms, and ' +
      'sometimes the dropped copula "be" (Arabic can form verbless present ' +
      'sentences).',
    surfaceSignals: [
      'Past simple where present perfect is expected ("Since 2010 the rate increased")',
      'Missing auxiliary "be" in continuous forms or "is" as copula',
      'Inconsistent tense across a paragraph without time-shift reason',
    ],
    example: {
      learner: 'Since many years, the pollution increase and now it very bad.',
      corrected: 'For many years, pollution has increased, and now it is very bad.',
    },
    severity: 'moderate',
    markingGuidance:
      'Grammatical Range & Accuracy. Distinguish a systematic aspect-mapping ' +
      'pattern (transfer — weigh by frequency) from a one-off slip. Dropped ' +
      'copula is an accuracy error, not a sign the writer cannot be understood; ' +
      'keep it under GRA.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'Arabic foregrounds aspect over English-style tense, lacks a one-to-one ' +
        'present-perfect equivalent, and permits verbless (copula-less) present ' +
        'sentences.',
      confidence: 'high',
    },
  },
  {
    id: 'pitfall.ar.prepositions.collocation',
    title: 'Prepositions — non-matching collocations',
    criteria: ['lexical_resource', 'grammatical_range_and_accuracy'],
    description:
      'Preposition–verb and preposition–noun collocations differ between ' +
      'Arabic and English, so prepositions are often substituted, added or ' +
      'omitted ("depend of", "discuss about", "in the other hand").',
    surfaceSignals: [
      '"discuss about", "depend of/on" confusion, "married with"',
      '"in the other hand" for "on the other hand"',
      'Omitted preposition after a verb that requires one',
    ],
    example: {
      learner: 'We must depend of the government to discuss about this problem.',
      corrected: 'We must depend on the government to discuss this problem.',
    },
    severity: 'minor',
    markingGuidance:
      'Preposition collocation errors are typically minor and meaning is ' +
      'recoverable. They touch Lexical Resource (collocation) and GRA ' +
      '(accuracy); score under whichever the specific error best fits, once. ' +
      'Frequent dependent-preposition errors become a moderate accuracy ' +
      'limiter.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'English dependent prepositions do not map onto Arabic governance, so ' +
        'learners transfer the Arabic preposition or omit one.',
      confidence: 'high',
    },
  },
  {
    id: 'pitfall.ar.cohesion.run-on-coordination',
    title: 'Cohesion — long coordinated run-ons ("and"/"so" chaining)',
    criteria: ['coherence_and_cohesion', 'grammatical_range_and_accuracy'],
    description:
      'Classical/written Arabic favours long, additively coordinated sentences ' +
      'chained with connectives. Transferred to English this surfaces as ' +
      'run-on sentences joined by repeated "and/so", comma splices, and few ' +
      'subordinated structures.',
    surfaceSignals: [
      'Very long sentences chained with "and … and … so …"',
      'Comma splices in place of full stops or subordination',
      'Few subordinate clauses relative to coordination',
    ],
    example: {
      learner:
        'The cities are crowded and the people are stressed and the pollution ' +
        'is high so the government must do something and build more parks.',
      corrected:
        'Because cities are crowded and polluted, residents are increasingly ' +
        'stressed, so the government must act — for instance, by building more ' +
        'parks.',
    },
    severity: 'moderate',
    markingGuidance:
      'Affects Coherence & Cohesion (sentence-level flow and punctuation) and ' +
      'Grammatical Range & Accuracy (limited range when only coordination is ' +
      'used). Recognise the additive style as a rhetorical-transfer pattern; ' +
      'guide the writer toward subordination rather than treating the style as ' +
      'a comprehension failure.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'Arabic written rhetoric favours additive coordination and longer ' +
        'periodic sentences; English prizes sentence boundaries and ' +
        'subordination.',
      confidence: 'medium',
    },
  },
  {
    id: 'pitfall.ar.cohesion.repetition-for-emphasis',
    title: 'Cohesion — lexical repetition / parallelism for emphasis',
    criteria: ['coherence_and_cohesion', 'lexical_resource'],
    description:
      'Arabic rhetoric values emphatic repetition and parallel restatement. ' +
      'Transferred to English this can read as redundant repetition of the ' +
      'same word or idea where English would use referencing, substitution or ' +
      'synonyms.',
    surfaceSignals: [
      'The same key noun repeated where a pronoun/synonym is expected',
      'Restated ideas for emphasis read as padding',
    ],
    severity: 'minor',
    markingGuidance:
      'A Coherence & Cohesion point (reference/substitution under-used) and a ' +
      'Lexical Resource point (limited flexibility). Treat as minor and as a ' +
      'rhetorical-transfer feature; coach toward referencing rather than ' +
      'penalising heavily.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'Emphatic repetition and parallelism are valued cohesive devices in ' +
        'Arabic rhetoric; English prefers pronominal reference and lexical ' +
        'variation.',
      confidence: 'medium',
    },
  },
  {
    id: 'pitfall.ar.plurals.agreement',
    title: 'Number / agreement — plural and subject–verb agreement',
    criteria: ['grammatical_range_and_accuracy'],
    description:
      'Arabic plural and agreement rules (including broken plurals and ' +
      'feminine-singular agreement for non-human plurals) differ from English, ' +
      'producing subject–verb agreement slips and irregular plural errors.',
    surfaceSignals: [
      'Plural subject with singular verb or vice versa',
      'Non-count nouns pluralised ("informations", "advices")',
    ],
    example: {
      learner: 'The informations about this problems is not enough.',
      corrected: 'The information about these problems is not enough.',
    },
    severity: 'minor',
    markingGuidance:
      'Grammatical Range & Accuracy. Common and meaning-transparent; weigh by ' +
      'frequency. Pervasive agreement/plural errors become a moderate accuracy ' +
      'limiter, but isolated ones are minor.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'Arabic plural morphology (broken plurals) and agreement rules differ ' +
        'from English regular plural + subject–verb agreement.',
      confidence: 'high',
    },
  },
  {
    id: 'pitfall.ar.spelling.phonology',
    title: 'Spelling — vowel and consonant phonology transfer',
    criteria: ['lexical_resource'],
    description:
      'Arabic orthography under-represents short vowels and lacks some English ' +
      'consonant contrasts (e.g. p/b), so spellings transfer these gaps ' +
      '("problem" as "broblem", inconsistent vowels).',
    surfaceSignals: ['p/b confusion in spelling', 'omitted/added short vowels'],
    severity: 'minor',
    markingGuidance:
      'Lexical Resource (spelling). Minor unless frequent enough to strain the ' +
      'reader. Recognise as phonological transfer, not carelessness.',
    l1Transfer: {
      l1: 'arabic',
      mechanism:
        'Arabic script under-marks short vowels and lacks a /p/–/b/ contrast, ' +
        'transferring into English spelling.',
      confidence: 'medium',
    },
  },
]

export const PITFALLS: Pitfall[] = [...GENERIC_PITFALLS, ...ARABIC_L1_PITFALLS]

/* ===========================================================================
 * Integrity considerations
 * =========================================================================== */

export const INTEGRITY: IntegrityConsideration[] = [
  {
    id: 'integrity.copied-from-prompt',
    title: 'Copied from the prompt / question rubric',
    description:
      'Stretches of the response are lifted directly from the task prompt or ' +
      'its instructions. Copied text does not demonstrate the candidate’s ' +
      'own language and must be excluded from what is rewarded.',
    detectionSignals: [
      'Sentences that reproduce the prompt wording verbatim',
      'Word count inflated mainly by quoted prompt material',
      'A genuine-response remainder that falls below the length norm once ' +
        'copied text is discounted',
    ],
    markingAction:
      'Discount copied material when assessing length and when scoring all ' +
      'four criteria — score only the candidate’s own writing. If, after ' +
      'discounting, the genuine response is under length or fails to address ' +
      'the task, apply the corresponding Task Response cap.',
    effect: 'penalise_criterion',
  },
  {
    id: 'integrity.memorised',
    title: 'Memorised / pre-learned content',
    description:
      'The script reproduces a pre-learned essay or large memorised chunks ' +
      'only loosely fitted to the actual prompt, rather than an original ' +
      'response to the specific question.',
    detectionSignals: [
      'Polished, idiomatic passages sitting beside much weaker original spans ' +
        '(register/accuracy discontinuity)',
      'Content that addresses a generic version of the topic but not the exact ' + 'task asked',
      'Recognisable "model-essay" templates and stock examples bolted on',
    ],
    markingAction:
      'Memorised language is not evidence of the candidate’s own ability: ' +
      'do not reward it under Lexical Resource or Grammatical Range & Accuracy, ' +
      'and do not credit off-prompt memorised content under Task Response. ' +
      'Where memorised material dominates and the task is not genuinely ' +
      'addressed, cap the overall band and flag for human review.',
    effect: 'cap_band',
  },
  {
    id: 'integrity.under-length',
    title: 'Under length (below ~250 words)',
    description:
      'The response is clearly shorter than the ~250-word minimum, so the task ' +
      'cannot be fully addressed and there is insufficient language to ' +
      'demonstrate range.',
    detectionSignals: [
      'Genuine word count materially below 250 (after discounting any copied ' +
        'or memorised text)',
      'Missing required parts because the script was cut short',
    ],
    markingAction:
      'Limit Task Response (the task is not fully addressed) and recognise that ' +
      'limited text constrains the evidence available for the language ' +
      'criteria. Apply the under-length limitation as a Task Response cap; do ' +
      'not invent credit for language that is not present. Record the measured ' +
      'word count.',
    effect: 'cap_band',
  },
  {
    id: 'integrity.off-topic-or-no-attempt',
    title: 'Off-topic or no genuine attempt',
    description:
      'The response does not engage with the task at all (wrong topic, refusal, ' +
      'placeholder text), so the criteria cannot be meaningfully applied.',
    detectionSignals: [
      'No relationship between the content and the prompt',
      'Placeholder, nonsense, or refusal text',
    ],
    markingAction:
      'Flag as off-topic / no attempt for human review and apply the lowest ' +
      'Task Response treatment; do not award credit for incidental language.',
    effect: 'flag_for_review',
  },
]

/* ===========================================================================
 * Aggregate export
 * =========================================================================== */

export const CONVENTIONS_AND_PITFALLS: ConventionsAndPitfallsPack = {
  packId: 'ielts-writing-task2.conventions-and-pitfalls',
  task: 'ielts-writing-task2',
  sourcing: SOURCING,
  conventions: CONVENTIONS,
  pitfalls: PITFALLS,
  integrity: INTEGRITY,
  markingPhilosophy: MARKING_PHILOSOPHY,
}

export default CONVENTIONS_AND_PITFALLS
