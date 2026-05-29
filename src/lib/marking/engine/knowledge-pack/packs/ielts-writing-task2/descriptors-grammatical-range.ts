/**
 * IELTS Writing Task 2 — Knowledge Pack
 * Criterion: Grammatical Range & Accuracy (GRA)
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
 *                              IELTS Writing Task 2 Grammatical Range & Accuracy),
 *                              cross-referenced with CEFR level alignment.
 *   publicAuthority:           IELTS partners (British Council / IDP IELTS /
 *                              Cambridge University Press & Assessment) public
 *                              criteria framework + CEFR (Council of Europe).
 *   verbatimReproduction:      none. No board secure or official descriptor text
 *                              is reproduced. All wording below is original
 *                              paraphrase characterising the same assessment
 *                              constructs (range of structures, accuracy, error
 *                              density, control of punctuation).
 *
 * HOW THIS BINDS TO THE ENGINE CONTRACT (must NOT fork it):
 *   The engine-wide contract (`KnowledgePack`, `PackCriterion`,
 *   `PackBandDescriptor`, `PackSourcing`, …) is owned solely by
 *   `src/lib/marking/engine/types.ts` and re-exported from
 *   `src/lib/marking/engine/knowledge-pack/types.ts`. Per the codebase anti-fork
 *   rule (design doc 10 §5 R6) this DATA module must NOT redefine that contract —
 *   it imports it type-only.
 *
 *   Two layers are exported:
 *     1. The AUTHORED SOURCE OF TRUTH — `ieltsWritingTask2GraDescriptors`
 *        (`GraDescriptorPack`). It keeps the richer, faceted shape
 *        (summary + rangeOfStructures/accuracy/errorDensity/punctuation +
 *        positive/limiting indicators) because that is how the criteria are best
 *        authored and reviewed. These LOCAL interfaces are content shapes, NOT a
 *        fork of the engine contract.
 *     2. The CONTRACT-READY projection — `ieltsWritingTask2GraCriterion`
 *        (`PackCriterion`) + `graPackSourcing` (`PackSourcing`). These are
 *        produced from layer 1 by `flattenGraBand` and slot straight into the
 *        `KnowledgePack.criteria[]` / `manifest.sourcing` with ZERO remapping.
 *        `PackBandDescriptor` carries a single `descriptor` string (doc 11 §2.4),
 *        so the projection flattens the facets + indicators into one descriptor
 *        block per band; the loader consumes `criteria[].bands[]` whole (doc 12
 *        §2.1).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type {
  PackSourcing,
  PackBandDescriptor,
  PackCriterion,
} from '@/lib/marking/engine/knowledge-pack/types'

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

/** Sub-criterion facets the GRA criterion is assessed against. */
export interface GraDescriptorFacets {
  /** Variety of sentence forms attempted (simple / compound / complex / sophisticated). */
  readonly rangeOfStructures: string
  /** How accurate the grammar is overall (correctness of forms used). */
  readonly accuracy: string
  /** How frequent and how disruptive errors are to the reader. */
  readonly errorDensity: string
  /** Control of punctuation (and sentence boundaries). */
  readonly punctuation: string
}

/** A single whole-band descriptor for the GRA criterion. */
export interface GraBandDescriptor {
  /** Whole band number, 0–9. This module supplies 4–9. */
  readonly band: number
  /** One-line own-paraphrase headline summarising the band. */
  readonly summary: string
  /** Facet-level own-paraphrase characterisation. */
  readonly facets: GraDescriptorFacets
  /**
   * Observable signals a marker / model can look for at this band.
   * Original phrasing; diagnostic aids, not official descriptor text.
   */
  readonly positiveIndicators: readonly string[]
  /** Limitations that cap a script at this band. */
  readonly limitingIndicators: readonly string[]
}

/** Top-level shape of this descriptor data module. */
export interface GraDescriptorPack {
  readonly criterion: 'grammatical-range-and-accuracy'
  readonly criterionCode: 'GRA'
  readonly task: 'ielts-writing-task2'
  readonly bandScale: { readonly min: 0; readonly max: 9; readonly step: 1 }
  /** Bands actually authored in this module. */
  readonly bandsProvided: readonly number[]
  readonly sourcing: KnowledgePackSourcing
  /** Descriptors keyed by whole band number as a string ('4'..'9'). */
  readonly descriptors: Readonly<Record<string, GraBandDescriptor>>
}

const sourcing: KnowledgePackSourcing = {
  authoring: 'own-paraphrase',
  containsBoardSecureMaterial: false,
  derivedFrom: [
    'IELTS public band-descriptor framework (Writing Task 2, Grammatical Range & Accuracy)',
    'British Council / IDP IELTS / Cambridge University Press & Assessment public criteria',
    'CEFR level alignment (Council of Europe)',
  ],
  note:
    'Own-paraphrase characterisation of the publicly described GRA assessment ' +
    'constructs. No board secure or official descriptor wording is reproduced.',
}

/**
 * The same sourcing provenance, shaped for the ENGINE contract (`PackSourcing`,
 * engine/types §5). The loader can lift this straight into `manifest.sourcing`.
 * `containsBoardSecureMaterial` is the hard publish gate and is `false`
 * (machine-checked by the coverage test, refused by the loader). `expertMarker`
 * is optional on `PackSourcing` and is manifest/exemplar-level, so it is supplied
 * by the loader when exemplars are added, not here in the descriptor module.
 *
 * `satisfies PackSourcing` (not an annotation) checks the object against the
 * contract at compile time while preserving its literal types — if the contract's
 * field names change, the build fails here and points the maintainer at this
 * module rather than letting a mismatch slip silently into a pack.
 */
export const graPackSourcing = {
  descriptorSource: 'own_paraphrase',
  exemplarSource: 'own_expert_marked',
  containsBoardSecureMaterial: false,
  licenceNote:
    'GRA band descriptors (bands 4–9) are original paraphrase capturing the ' +
    'publicly described IELTS assessment criteria (range of structures, ' +
    'accuracy, error density, punctuation control), cross-referenced with CEFR ' +
    'level alignment. No board secure or official descriptor text is reproduced.',
} satisfies PackSourcing

/**
 * Band-keyed GRA descriptors (4–9).
 *
 * The progression is deliberately monotonic across facets so the engine can
 * reason about adjacent-band boundaries:
 *   - rangeOfStructures widens from mostly-simple (4) to a full, flexible
 *     repertoire (9);
 *   - accuracy rises from frequently-faulty (4) to virtually error-free (9);
 *   - errorDensity falls from pervasive (4) to occasional slips only (9);
 *   - punctuation control tightens from weak (4) to consistently apt (9).
 */
const descriptors: Record<string, GraBandDescriptor> = {
  '9': {
    band: 9,
    summary:
      'A full, flexible repertoire of structures used with complete naturalness; ' +
      'virtually all sentences are correct.',
    facets: {
      rangeOfStructures:
        'Deploys the complete spread of sentence forms — simple, compound, complex ' +
        'and more elaborate constructions — choosing whichever best fits the meaning, ' +
        'with no sense of strain or repetition.',
      accuracy:
        'Grammar is essentially flawless. Forms are handled with precision across ' +
        'tense, agreement, articles, prepositions and word order.',
      errorDensity:
        'Errors are at most rare, isolated slips of the kind a careful native ' +
        'writer might make; they never affect meaning.',
      punctuation:
        'Punctuation and sentence boundaries are used accurately throughout, ' +
        'supporting the reader effortlessly.',
    },
    positiveIndicators: [
      'Wide variety of structures appears unforced and well chosen for purpose',
      'Reads as natural, fluent and controlled across the whole response',
      'No structural error that the reader would notice',
    ],
    limitingIndicators: [
      'Only the most occasional, trivial slip prevents this from being indistinguishable from an expert user',
    ],
  },

  '8': {
    band: 8,
    summary:
      'A broad spread of structures, handled flexibly; the great bulk of the ' +
      'writing carries no grammatical error, with only occasional, non-impeding slips.',
    facets: {
      rangeOfStructures:
        'Commands a broad variety of sentence forms and uses them flexibly to ' +
        'shade meaning, including controlled use of complex and subordinate ' +
        'constructions.',
      accuracy:
        'Grammar is highly accurate. Control is strong across the full range of ' +
        'forms attempted, including the more demanding ones.',
      errorDensity:
        'Across the response, grammatical errors are scarce; the handful that ' +
        'appear are occasional, minor and do not reduce clarity.',
      punctuation:
        'Punctuation is well managed and reliably supports the structure of the ' + 'writing.',
    },
    positiveIndicators: [
      'The bulk of the writing is grammatically clean',
      'Complex structures are attempted often and handled well',
      'Any errors are infrequent and never obscure meaning',
    ],
    limitingIndicators: [
      'Occasional minor errors or non-systematic slips remain',
      'Range, while wide, is not yet used with the total effortlessness of band 9',
    ],
  },

  '7': {
    band: 7,
    summary:
      'Several different complex sentence forms appear; many sentences carry no ' +
      'error, though some errors persist.',
    facets: {
      rangeOfStructures:
        'Produces several different complex sentence forms alongside simpler ' +
        'ones, attempting subordination, relative clauses and other elaboration ' +
        'with reasonable confidence.',
      accuracy:
        'Good overall control: much of the writing is grammatically clean, ' +
        'though accuracy is not yet sustained across every complex attempt.',
      errorDensity:
        'Errors occur but are limited in number; they rarely interfere with ' +
        'communication and are often confined to the more ambitious structures.',
      punctuation: 'Punctuation is generally well controlled, with only occasional lapses.',
    },
    positiveIndicators: [
      'Frequent, varied complex sentences rather than a narrow set repeated',
      'A good share of the writing runs cleanly, with whole stretches free of grammatical fault',
      'Errors tend to cluster in risk-taking structures, not basic ones',
    ],
    limitingIndicators: [
      'A few errors recur and prevent the higher accuracy of band 8',
      'Some complex attempts are only partially successful',
    ],
  },

  '6': {
    band: 6,
    summary:
      'Blends straightforward sentences with some more elaborate ones; errors ' +
      'occur but only sometimes reduce clarity.',
    facets: {
      rangeOfStructures:
        'Builds on basic sentence patterns and reaches for more elaborate ' +
        'constructions too, though the elaborate ones are fewer and less evenly ' +
        'controlled than the simpler patterns.',
      accuracy:
        'Reasonable control of basic structures; complex forms are more error-prone. ' +
        'Accuracy is uneven but communication generally succeeds.',
      errorDensity:
        'Errors are noticeable and can be fairly frequent, yet only occasionally ' +
        'do they make a sentence hard to follow.',
      punctuation:
        'Punctuation is used with some control; faults appear but usually do not ' +
        'block understanding.',
    },
    positiveIndicators: [
      'Goes beyond basic patterns to attempt longer, subordinated sentences',
      'Meaning generally comes through despite errors',
      'Some complex sentences are produced accurately',
    ],
    limitingIndicators: [
      'Errors are frequent enough to be conspicuous',
      'Complex structures are markedly less accurate than simple ones',
      'Occasional sentences require effort from the reader',
    ],
  },

  '5': {
    band: 5,
    summary:
      'Limited range of structures, leaning on simple sentences; frequent errors ' +
      'that can leave parts of the writing a struggle to follow.',
    facets: {
      rangeOfStructures:
        'Range is limited. Simple sentences predominate; attempts at complex forms ' +
        'are few and tend to be faulty or incomplete.',
      accuracy:
        'Control is weak. Even where structures are repeated, errors persist; ' +
        'subordination and other complex forms are seldom managed correctly.',
      errorDensity:
        'Grammatical errors are frequent and can slow reading, sometimes leaving ' +
        'a sentence hard to untangle.',
      punctuation:
        'Punctuation is faulty or used inconsistently, which can make the writing ' +
        'harder still to read.',
    },
    positiveIndicators: [
      'Simple sentence forms are mostly intact and communicative',
      'Some attempts at complex structures are made',
    ],
    limitingIndicators: [
      'Reliance on a narrow, repetitive set of structures',
      'Frequent errors throughout, including in basic patterns',
      'Errors and shaky punctuation make parts of the response a struggle to follow',
    ],
  },

  '4': {
    band: 4,
    summary:
      'Very limited range, mostly memorised or simple phrases; errors are pervasive ' +
      'and frequently impede meaning.',
    facets: {
      rangeOfStructures:
        'Only a very narrow set of structures is used, largely short simple ' +
        'sentences or memorised phrasing. Complex constructions are rare and ' +
        'generally break down when attempted.',
      accuracy:
        'Grammatical control is poor even in simple forms; basic patterns such as ' +
        'tense, agreement and word order are unreliable.',
      errorDensity:
        'Errors are pervasive and dense. They frequently distort meaning and ' +
        'demand considerable effort from the reader.',
      punctuation:
        'Punctuation is often missing, misused or absent at sentence boundaries, ' +
        'compounding the difficulty of reading.',
    },
    positiveIndicators: [
      'Some short, simple sentences communicate a basic message',
      'A few formulaic phrases are produced correctly',
    ],
    limitingIndicators: [
      'Structural range is severely restricted',
      'Errors are present in almost every sentence, including basic ones',
      'Faulty grammar and punctuation frequently obscure the intended meaning',
    ],
  },
}

/**
 * The exported GRA descriptor pack for IELTS Writing Task 2.
 * Bands 4–9 are authored here; bands 0–3 are intentionally out of scope for this
 * module (handled, if needed, by a low-band module) and are noted via
 * `bandsProvided` so the loader can detect coverage.
 */
export const ieltsWritingTask2GraDescriptors: GraDescriptorPack = {
  criterion: 'grammatical-range-and-accuracy',
  criterionCode: 'GRA',
  task: 'ielts-writing-task2',
  bandScale: { min: 0, max: 9, step: 1 },
  bandsProvided: [4, 5, 6, 7, 8, 9],
  sourcing,
  descriptors,
}

// ─────────────────────────────────────────────────────────────────────────────
// Contract-ready projection onto the engine's PackCriterion / PackBandDescriptor
// (engine/types §5). The engine `PackBandDescriptor.descriptor` is a single
// string, so each band's faceted authored content is flattened into one
// descriptor block. The loader drops `ieltsWritingTask2GraCriterion` straight
// into `KnowledgePack.criteria[]` with no remapping.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Flatten one authored, faceted GRA band into the engine's single-string
 * {@link PackBandDescriptor}. The layout (headline → four facet lines → positive
 * vs limiting indicators) is stable and deterministic so the resulting
 * `{{BAND_DESCRIPTORS}}` rubric block reads consistently across bands.
 */
function flattenGraBand(d: GraBandDescriptor): PackBandDescriptor {
  const lines: string[] = [
    d.summary,
    `Range of structures: ${d.facets.rangeOfStructures}`,
    `Accuracy: ${d.facets.accuracy}`,
    `Error density: ${d.facets.errorDensity}`,
    `Punctuation: ${d.facets.punctuation}`,
  ]
  if (d.positiveIndicators.length > 0) {
    lines.push(`At this band you would expect: ${d.positiveIndicators.join('; ')}.`)
  }
  if (d.limitingIndicators.length > 0) {
    lines.push(`What holds a response at this band: ${d.limitingIndicators.join('; ')}.`)
  }
  return { band: d.band, descriptor: lines.join('\n') }
}

/**
 * The GRA criterion as the engine consumes it (engine/types §5
 * {@link PackCriterion}). Bands are ordered high→low (9→4) for a stable rubric
 * block; the loader/retrieval layer selects by `band` regardless of order.
 * `code: 'GRA'` and `label` match the IELTS Writing Task 2 four-criteria model
 * (spec §2 / §4 enum "Grammatical Range and Accuracy").
 */
export const ieltsWritingTask2GraCriterion: PackCriterion = {
  code: 'GRA',
  label: 'Grammatical Range and Accuracy',
  bands: ieltsWritingTask2GraDescriptors.bandsProvided
    .slice()
    .sort((a, b) => b - a)
    .map((band) => flattenGraBand(descriptors[String(band)])),
}

export default ieltsWritingTask2GraDescriptors
