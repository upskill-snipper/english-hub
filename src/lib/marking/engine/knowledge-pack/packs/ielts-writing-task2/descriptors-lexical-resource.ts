/**
 * IELTS Writing Task 2 — Knowledge Pack
 * Criterion: Lexical Resource (LR)
 *
 * OWN-PARAPHRASE band descriptors, bands 4–9.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCING MANIFEST
 * ─────────────────────────────────────────────────────────────────────────────
 *   authoring:                 own-paraphrase
 *   containsBoardSecureMaterial: false
 *   boardSecureMaterialUsed:    none
 *   derivedFrom:               IELTS public band-descriptor framework
 *                              (the publicly described assessment criteria for
 *                              IELTS Writing Task 2 Lexical Resource),
 *                              cross-referenced with CEFR level alignment.
 *   publicAuthority:           IELTS partners (British Council / IDP IELTS /
 *                              Cambridge University Press & Assessment) public
 *                              criteria framework + CEFR (Council of Europe).
 *   verbatimReproduction:      none. No board secure or official descriptor text
 *                              is reproduced. All wording below is original
 *                              paraphrase characterising the same assessment
 *                              constructs (range and precision of vocabulary,
 *                              collocation, appropriacy / register, and accuracy
 *                              of spelling and word formation — together with the
 *                              communicative impact of any lexical errors).
 *
 * TYPE SHAPE
 *   This module mirrors the authoring pattern of its siblings
 *   `descriptors-coherence-cohesion.ts` and `descriptors-grammatical-range.ts`:
 *   a self-describing, criterion-local data shape keyed by whole band ('4'..'9'),
 *   carrying a per-band summary, facet-level characterisation, and
 *   positive/limiting indicators. It additionally exposes a `toPackCriterion()`
 *   adapter that flattens the data into the engine's settled `PackCriterion` /
 *   `PackBandDescriptor` contract (see `src/lib/marking/engine/types.ts`,
 *   doc 11 §2.4) so the loader can assemble the four-criterion rubric uniformly
 *   without this data module re-declaring the seam contract. The richer
 *   criterion-local shape is retained for authoring clarity and for any tooling
 *   that wants the facet breakdown.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { PackBandDescriptor, PackCriterion } from '@/lib/marking/engine/types'

/** Sourcing provenance carried on every knowledge-pack data module. */
export interface KnowledgePackSourcing {
  /** How the content was produced. Always own-paraphrase for this pack. */
  readonly authoring: 'own-paraphrase'
  /** Hard guarantee that no board secure/official descriptor text is present. */
  readonly containsBoardSecureMaterial: false
  /** Public authority whose published criteria framework the paraphrase derives from. */
  readonly derivedFrom: readonly string[]
  /** Free-text note for auditors. */
  readonly note: string
}

/**
 * Sub-criterion facets the LR criterion is assessed against. These are the four
 * recurring threads the criterion tracks across bands.
 */
export interface LrDescriptorFacets {
  /**
   * Breadth of vocabulary the writer commands — from a narrow, repeated core to a
   * wide, flexible resource that includes less common and sophisticated items.
   */
  readonly range: string
  /**
   * Precision of word choice and the naturalness of collocation — how exactly the
   * chosen words convey the intended meaning and how idiomatically words combine.
   */
  readonly precisionAndCollocation: string
  /**
   * Appropriacy and register — whether word choice and style suit a formal
   * academic essay, including awareness of connotation and tone.
   */
  readonly appropriacyAndRegister: string
  /**
   * Spelling and word formation, and the communicative impact of lexical errors —
   * how frequent the errors are and whether they strain or obscure meaning.
   */
  readonly spellingFormationAndErrorImpact: string
}

/** A single whole-band descriptor for the LR criterion. */
export interface LrBandDescriptor {
  /** Whole band number, 0–9. This module supplies 4–9. */
  readonly band: number
  /** One-line own-paraphrase headline summarising the band. */
  readonly summary: string
  /** Facet-level own-paraphrase characterisation. */
  readonly facets: LrDescriptorFacets
  /**
   * Observable signals a marker / model can look for at this band.
   * Original phrasing; diagnostic aids, not official descriptor text.
   */
  readonly positiveIndicators: readonly string[]
  /** Limitations that cap a script at this band. */
  readonly limitingIndicators: readonly string[]
}

/** Top-level shape of this descriptor data module. */
export interface LrDescriptorPack {
  readonly criterion: 'lexical-resource'
  readonly criterionCode: 'LR'
  readonly task: 'ielts-writing-task2'
  readonly bandScale: { readonly min: 0; readonly max: 9; readonly step: 1 }
  /** Bands actually authored in this module. */
  readonly bandsProvided: readonly number[]
  readonly sourcing: KnowledgePackSourcing
  /** Descriptors keyed by whole band number as a string ('4'..'9'). */
  readonly descriptors: Readonly<Record<string, LrBandDescriptor>>
}

const sourcing: KnowledgePackSourcing = {
  authoring: 'own-paraphrase',
  containsBoardSecureMaterial: false,
  derivedFrom: [
    'IELTS public band-descriptor framework (Writing Task 2, Lexical Resource)',
    'British Council / IDP IELTS / Cambridge University Press & Assessment public criteria',
    'CEFR level alignment (Council of Europe)',
  ],
  note:
    'Own-paraphrase characterisation of the publicly described LR assessment ' +
    'constructs (range, precision, collocation, appropriacy/register, spelling ' +
    'and word formation). No board secure or official descriptor wording is reproduced.',
}

/**
 * Band-keyed LR descriptors (4–9).
 *
 * The progression is deliberately monotonic across facets so the engine can
 * reason about adjacent-band boundaries:
 *   - range widens from a basic, repeated core (4) to a broad, flexible resource
 *     with naturally handled sophisticated and less common items (9);
 *   - precisionAndCollocation sharpens from frequently inappropriate, unnatural
 *     pairings (4) to consistently exact word choice with native-like collocation (9);
 *   - appropriacyAndRegister strengthens from little control of style (4) to a
 *     fully sustained, well-judged academic register (9);
 *   - spellingFormationAndErrorImpact improves from frequent, reader-straining
 *     errors (4) to at most rare incidental slips with no effect (9).
 */
const descriptors: Record<string, LrBandDescriptor> = {
  '9': {
    band: 9,
    summary:
      'Vocabulary is wide, precise and natural throughout; word choice conveys ' +
      'fine shades of meaning with full control, and on the rare occasion ' +
      'something is mistyped it passes unnoticed.',
    facets: {
      range:
        'Draws on a broad, flexible vocabulary, including sophisticated and ' +
        'lower-frequency items, and deploys it effortlessly to express exactly ' +
        'what is meant.',
      precisionAndCollocation:
        'Word choice is consistently exact, capturing subtle distinctions of ' +
        'meaning; collocation, idiom and fixed phrasing read as fully natural, ' +
        'with no sense of strained or learned-by-rote combinations.',
      appropriacyAndRegister:
        'Tone and style are fully appropriate to a formal academic essay and are ' +
        'sustained without lapse, with sure command of connotation.',
      spellingFormationAndErrorImpact:
        'Spelling and word formation are accurate; on the very rare occasion ' +
        'something slips through it is trivial and the reader does not notice.',
    },
    positiveIndicators: [
      'Sophisticated and less common words used as easily as everyday ones',
      'Fine distinctions of meaning made through precise word choice',
      'Collocation and idiom feel native-like rather than decorative',
      'Register stays consistently academic and controlled',
    ],
    limitingIndicators: [
      'Any noticeable imprecision, unnatural collocation or register slip points below band 9',
    ],
  },

  '8': {
    band: 8,
    summary:
      'Commands a broad vocabulary and deploys it smoothly and adaptably to pin ' +
      'down exact meaning, including skilful use of less common and idiomatic ' +
      'items; inaccuracies are occasional and do not impede.',
    facets: {
      range:
        'Vocabulary is wide and readily available, letting the writer convey ' +
        'meaning flexibly and handle a variety of content with ease.',
      precisionAndCollocation:
        'Meaning is conveyed precisely with well-judged word choice; collocation ' +
        'is generally natural and idiomatic language is used skilfully, with only ' +
        'occasional, non-misleading lapses.',
      appropriacyAndRegister:
        'Register is appropriate and well controlled, suited to a formal essay ' +
        'throughout, with awareness of style and connotation.',
      spellingFormationAndErrorImpact:
        'Spelling and word formation are largely accurate; errors are sporadic ' +
        'and do not disrupt reading or communication.',
    },
    positiveIndicators: [
      'Less common and idiomatic items used aptly and with a sure sense of tone',
      'Word choice conveys precise meaning across varied content',
      'Collocation is mostly natural and confident',
    ],
    limitingIndicators: [
      'The odd misjudged term, word pairing or spelling slips through',
      'Idiomatic use that occasionally over-reaches, though without obscuring meaning',
    ],
  },

  '7': {
    band: 7,
    summary:
      'Has a vocabulary broad enough to give the writer room to vary expression ' +
      'and choose words with reasonable exactness, generally pairing words ' +
      'naturally and pitching tone to suit a formal essay, with some use of less ' +
      'common items; errors occur but do not impede communication.',
    facets: {
      range:
        'Vocabulary is sufficiently wide to give the writer flexibility and to ' +
        'discuss the topic with variety beyond the most common words, including ' +
        'some less common items.',
      precisionAndCollocation:
        'Less common and topic-specific words are attempted and often used with ' +
        'precision; the writer shows a developing sense of which words sit ' +
        'together naturally, mostly pairing them well with the occasional mismatch.',
      appropriacyAndRegister:
        'Pitches tone and word choice to suit a formal academic essay, at times ' +
        'to strong effect.',
      spellingFormationAndErrorImpact:
        'Spelling and word formation are generally controlled, with some errors ' +
        'that remain easy to read past and do not impede communication.',
    },
    positiveIndicators: [
      'Attempts less common and more precise vocabulary, often successfully',
      'Chooses words that generally pair naturally and pitches tone to suit a formal essay',
      'Conveys meaning with some flexibility and variety',
    ],
    limitingIndicators: [
      'Some errors in word choice, spelling or word formation (never blocking meaning)',
      'Less common words sometimes used imprecisely or with the wrong form',
      'Collocation is awareness-level rather than consistently natural',
    ],
  },

  '6': {
    band: 6,
    summary:
      'Vocabulary is adequate for the task and conveys meaning clearly despite ' +
      'some imprecision; attempts at less common words have mixed success and ' +
      'errors do not reduce overall clarity.',
    facets: {
      range:
        'Vocabulary is adequate and generally sufficient for the topic, though it ' +
        'can run thin when more nuanced ideas are required.',
      precisionAndCollocation:
        'Meaning is generally clear even where the word chosen is not the most ' +
        'precise option; common collocations are mostly handled, but less ' +
        'familiar combinations are sometimes unnatural or incorrect.',
      appropriacyAndRegister:
        'Register is broadly appropriate, with occasional lapses into informal or ' +
        'conversational choices.',
      spellingFormationAndErrorImpact:
        'Spelling and word formation contain some errors; these are noticeable ' +
        'but do not prevent the reader from following the argument.',
    },
    positiveIndicators: [
      'Has enough vocabulary to address the task and convey ideas clearly',
      'Makes attempts at less common words even when control is incomplete',
      'Common collocations are largely correct',
    ],
    limitingIndicators: [
      'Imprecise word choices where a more exact term is needed',
      'Errors in less common vocabulary, collocation, spelling or word formation',
      'Occasional register slips toward the informal',
    ],
  },

  '5': {
    band: 5,
    summary:
      'Vocabulary is limited but workable; meaning is generally conveyed, though ' +
      'noticeable errors in word choice, collocation, spelling and word formation ' +
      'can leave the reader briefly stuck.',
    facets: {
      range:
        'Vocabulary is limited and tends to rely on a narrow, repeated set of ' +
        'words, which constrains how fully ideas can be expressed.',
      precisionAndCollocation:
        'Word choice is often approximate, so the intended meaning is usually ' +
        'recoverable but not pinned down exactly; collocation is frequently ' +
        'inaccurate, with words combined in ways that sound unnatural.',
      appropriacyAndRegister:
        'Register is inconsistent, with recurrent informal or imprecise choices ' +
        'in a context that calls for formality.',
      spellingFormationAndErrorImpact:
        'Spelling and word-formation errors are noticeable and recurrent and may ' +
        'at times slow the reader, though the overall message stays accessible.',
    },
    positiveIndicators: [
      'Has enough basic vocabulary to attempt the task and convey the main idea',
      'Some control of high-frequency words and everyday collocations',
    ],
    limitingIndicators: [
      'Limited range that forces repetition of the same words',
      'Frequent imprecision in word choice and collocation',
      'Noticeable, recurring spelling and word-formation errors',
      'Register slips that are at odds with an academic essay',
    ],
  },

  '4': {
    band: 4,
    summary:
      'Vocabulary is basic and used repetitively, often adequate only for the ' +
      'most familiar ideas; frequent errors in word choice, spelling and word ' +
      'formation visibly slow and tax the reader.',
    facets: {
      range:
        'Vocabulary is basic and narrow, sufficient only for simple or very ' +
        'familiar content and often inadequate for the demands of the task; the ' +
        'same few words are reused throughout.',
      precisionAndCollocation:
        'Word choice is frequently inappropriate or vague, so meaning is often ' +
        'imprecise or has to be guessed at; there is little control of ' +
        'collocation, with words combined unnaturally and fixed phrases commonly wrong.',
      appropriacyAndRegister:
        'There is limited control of register, with frequent reliance on informal ' +
        'or memorised expressions that may not fit the context.',
      spellingFormationAndErrorImpact:
        'Errors in spelling and word formation are frequent and conspicuous, ' +
        'forcing the reader to work hard to follow the meaning and at points ' +
        'making it unclear.',
    },
    positiveIndicators: [
      'Possesses a basic stock of words able to handle simple, familiar topics',
      'Some isolated word choices are correct and on-topic',
    ],
    limitingIndicators: [
      'Repetitive use of a very small range of basic words',
      'Frequent inappropriate or vague word choices',
      'Frequent, conspicuous spelling and word-formation errors',
      'Reliance on memorised phrases that may not fit the context',
    ],
  },
}

/**
 * The exported LR descriptor pack for IELTS Writing Task 2.
 * Bands 4–9 are authored here; bands 0–3 are intentionally out of scope for this
 * module (handled, if needed, by a low-band module) and are noted via
 * `bandsProvided` so the loader can detect coverage.
 */
export const ieltsWritingTask2LrDescriptors: LrDescriptorPack = {
  criterion: 'lexical-resource',
  criterionCode: 'LR',
  task: 'ielts-writing-task2',
  bandScale: { min: 0, max: 9, step: 1 },
  bandsProvided: [4, 5, 6, 7, 8, 9],
  sourcing,
  descriptors,
}

/**
 * Flatten one criterion-local band descriptor into the engine's settled
 * {@link PackBandDescriptor} shape: a single `descriptor` prose string per band.
 * The summary + the four facets are concatenated into descriptor-anchored prose
 * the marker can match against (doc 12 §2.1 emits this as the `{{BAND_DESCRIPTORS}}`
 * rubric block).
 */
function toPackBandDescriptor(d: LrBandDescriptor): PackBandDescriptor {
  const facetLines = [
    `Range: ${d.facets.range}`,
    `Precision & collocation: ${d.facets.precisionAndCollocation}`,
    `Appropriacy & register: ${d.facets.appropriacyAndRegister}`,
    `Spelling, word formation & error impact: ${d.facets.spellingFormationAndErrorImpact}`,
  ].join(' ')
  return {
    band: d.band,
    descriptor: `${d.summary} ${facetLines}`,
  }
}

/**
 * Adapter to the engine's settled {@link PackCriterion} contract. The loader can
 * call this to slot LR into the four-criterion IELTS rubric (TR/CC/LR/GRA) without
 * the data module re-declaring the seam types. Bands are emitted high→low (9..4)
 * for stable, human-readable rubric ordering.
 */
export function toPackCriterion(): PackCriterion {
  const bands: PackBandDescriptor[] = ieltsWritingTask2LrDescriptors.bandsProvided
    .slice()
    .sort((a, b) => b - a)
    .map((band) => toPackBandDescriptor(descriptors[String(band)]))
  return {
    code: 'LR',
    label: 'Lexical Resource',
    bands,
  }
}

export default ieltsWritingTask2LrDescriptors
