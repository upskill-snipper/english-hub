/**
 * IELTS Writing Task 2 — Knowledge Pack
 * Criterion: Coherence & Cohesion (CC)
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
 *                              IELTS Writing Task 2 Coherence & Cohesion),
 *                              cross-referenced with CEFR level alignment.
 *   publicAuthority:           IELTS partners (British Council / IDP IELTS /
 *                              Cambridge University Press & Assessment) public
 *                              criteria framework + CEFR (Council of Europe).
 *   verbatimReproduction:      none. No board secure or official descriptor text
 *                              is reproduced. All wording below is original
 *                              paraphrase characterising the same assessment
 *                              constructs (logical organisation, information
 *                              progression, paragraphing, and cohesive devices +
 *                              referencing — used accurately vs mechanically).
 *
 * TYPE SHAPE
 *   This module mirrors the authoring pattern of its sibling
 *   `descriptors-grammatical-range.ts`: a self-describing, criterion-local data
 *   shape keyed by whole band ('4'..'9'), carrying a per-band summary, facet-level
 *   characterisation, and positive/limiting indicators. It additionally exposes a
 *   `toPackCriterion()` adapter that flattens the data into the engine's settled
 *   `PackCriterion` / `PackBandDescriptor` contract (see
 *   `src/lib/marking/engine/types.ts`, doc 11 §2.4) so the loader can assemble the
 *   four-criterion rubric uniformly without this data module re-declaring the seam
 *   contract. The richer criterion-local shape is retained for authoring clarity
 *   and for any tooling that wants the facet breakdown.
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
 * Sub-criterion facets the CC criterion is assessed against. These are the four
 * recurring threads the criterion tracks across bands.
 */
export interface CcDescriptorFacets {
  /** Whether an underlying line of argument organises the whole response. */
  readonly logicalOrganisation: string
  /** Whether the message moves forward clearly (clear progression). */
  readonly progression: string
  /** Whether paragraphing is present and each block holds one central idea. */
  readonly paragraphing: string
  /**
   * Whether cohesive devices (linkers) and referencing (pronouns, this/these,
   * such, substitution, ellipsis) are used naturally and accurately, or
   * mechanically / faultily / over- or under-used.
   */
  readonly cohesionAndReferencing: string
}

/** A single whole-band descriptor for the CC criterion. */
export interface CcBandDescriptor {
  /** Whole band number, 0–9. This module supplies 4–9. */
  readonly band: number
  /** One-line own-paraphrase headline summarising the band. */
  readonly summary: string
  /** Facet-level own-paraphrase characterisation. */
  readonly facets: CcDescriptorFacets
  /**
   * Observable signals a marker / model can look for at this band.
   * Original phrasing; diagnostic aids, not official descriptor text.
   */
  readonly positiveIndicators: readonly string[]
  /** Limitations that cap a script at this band. */
  readonly limitingIndicators: readonly string[]
}

/** Top-level shape of this descriptor data module. */
export interface CcDescriptorPack {
  readonly criterion: 'coherence-and-cohesion'
  readonly criterionCode: 'CC'
  readonly task: 'ielts-writing-task2'
  readonly bandScale: { readonly min: 0; readonly max: 9; readonly step: 1 }
  /** Bands actually authored in this module. */
  readonly bandsProvided: readonly number[]
  readonly sourcing: KnowledgePackSourcing
  /** Descriptors keyed by whole band number as a string ('4'..'9'). */
  readonly descriptors: Readonly<Record<string, CcBandDescriptor>>
}

const sourcing: KnowledgePackSourcing = {
  authoring: 'own-paraphrase',
  containsBoardSecureMaterial: false,
  derivedFrom: [
    'IELTS public band-descriptor framework (Writing Task 2, Coherence & Cohesion)',
    'British Council / IDP IELTS / Cambridge University Press & Assessment public criteria',
    'CEFR level alignment (Council of Europe)',
  ],
  note:
    'Own-paraphrase characterisation of the publicly described CC assessment ' +
    'constructs. No board secure or official descriptor wording is reproduced.',
}

/**
 * Band-keyed CC descriptors (4–9).
 *
 * The progression is deliberately monotonic across facets so the engine can
 * reason about adjacent-band boundaries:
 *   - logicalOrganisation strengthens from ideas-present-but-unarranged (4) to a
 *     fully sustained, effortless line of argument (9);
 *   - progression sharpens from none (4) to seamless (9);
 *   - paragraphing develops from absent/unhelpful (4) to faultless and
 *     purposeful (9);
 *   - cohesionAndReferencing improves from only-basic-and-faulty connectors with
 *     absent referencing (4) to invisible, fully natural linking and referencing (9).
 */
const descriptors: Record<string, CcBandDescriptor> = {
  '9': {
    band: 9,
    summary:
      'Effortlessly coherent; the reader is guided through the argument with no ' +
      'conscious effort, and cohesion is so well managed it goes unnoticed.',
    facets: {
      logicalOrganisation:
        'A clear, fully sustained line of thought underpins the whole response; ' +
        'every part contributes to a single, easily traced argument.',
      progression:
        'The message advances seamlessly from point to point with no gaps, ' +
        'detours or repetition that the reader has to work around.',
      paragraphing:
        'Paragraphing is faultless and purposeful — each paragraph carries one ' +
        'clear central idea and the division of ideas could not be improved.',
      cohesionAndReferencing:
        'Linking and referencing are so skilfully and naturally woven in that ' +
        'they are not noticeable; substitution, ellipsis and reference words are ' +
        'all accurate and varied.',
    },
    positiveIndicators: [
      'Reader never has to re-read to recover the thread',
      'Cohesion feels organic rather than bolted on or signposted',
      'Reference words (this, such, the former, etc.) always resolve unambiguously',
    ],
    limitingIndicators: [
      'Any noticeable signposting or mechanical linking would point below band 9',
    ],
  },

  '8': {
    band: 8,
    summary:
      'Ideas are ordered and held together logically; cohesion is handled well ' +
      'and paragraphing is apt, with only the very occasional lapse.',
    facets: {
      logicalOrganisation:
        'Ideas and information are set out in a sound, logical order that the ' +
        'reader can follow without effort across the whole answer.',
      progression:
        'The response progresses clearly from start to finish, with at most an ' +
        'isolated minor lapse in flow.',
      paragraphing:
        'Paragraphing is used appropriately to organise ideas, with central ' +
        'topics that are easy to identify.',
      cohesionAndReferencing:
        'A range of cohesive devices and referencing is managed well and used ' +
        'accurately; lapses are occasional and minor rather than systematic, and ' +
        'never disrupt the reader.',
    },
    positiveIndicators: [
      'Clear logical sequencing maintained across all paragraphs',
      'Wide range of cohesive devices used with control and accuracy',
      'Only rare, non-disruptive cohesion slips',
    ],
    limitingIndicators: [
      'More than the occasional cohesion lapse holds the script to band 7',
      'Any device misuse that briefly slows the reader prevents band 9',
    ],
  },

  '7': {
    band: 7,
    summary:
      'Ideas are organised logically with clear progression; a variety of linking ' +
      'is used, if at times imperfectly, and every paragraph is built around one ' +
      'identifiable main idea.',
    facets: {
      logicalOrganisation:
        'There is an evident logical structure and the argument can be followed ' +
        'clearly throughout the response.',
      progression:
        'Clear progression is maintained; the reader can always see where the ' +
        'argument is going from one stage to the next.',
      paragraphing:
        'Paragraphing is logical and each paragraph has a clear central idea, ' +
        'even where the supporting development is not always complete.',
      cohesionAndReferencing:
        'A range of linkers and reference words is used appropriately, but they ' +
        'may sometimes be over-used, under-used or slightly inaccurate, so ' +
        'cohesion reads as good rather than seamless.',
    },
    positiveIndicators: [
      'Logical sequencing with visible signposting between stages',
      'Variety of cohesive devices, not just basic connectors',
      'Every paragraph is built around one main idea the reader can pick out easily',
    ],
    limitingIndicators: [
      'Cohesive devices noticeably over- or under-used, or occasionally faulty',
      'A paragraph whose central topic is unclear, or development that stays thin',
    ],
  },

  '6': {
    band: 6,
    summary:
      'The answer hangs together overall and moves forward, but linking words are ' +
      'sometimes inaccurate or mechanical, referencing is not always clear, and ' +
      'paragraph divisions do not always follow the line of argument.',
    facets: {
      logicalOrganisation:
        'Ideas and information hang together overall and the reader can follow ' +
        'the general direction of the answer.',
      progression:
        'The reader can follow the overall direction of the answer, though the ' +
        'movement forward can be uneven and some transitions between ideas are abrupt.',
      paragraphing:
        'Paragraph breaks are used, though the divisions do not always follow the ' +
        'line of argument — a break may fall in an odd place or a single ' +
        'paragraph may mix more than one idea.',
      cohesionAndReferencing:
        'Cohesive devices are used but not always accurately, and the joining of ' +
        'ideas can feel mechanical or repetitive; referencing (pronouns, ' +
        'this/these, such) is not always clear, which can momentarily obscure meaning.',
    },
    positiveIndicators: [
      'Overall message and direction remain clear to the reader',
      'Connectors are present and broadly appropriate',
      'Some attempt at varied linking beyond the most basic connectors',
    ],
    limitingIndicators: [
      'Mechanical or formulaic use of linkers (heavy reliance on a fixed set)',
      'Unclear referents that force the reader to infer who or what is meant',
      'Occasional illogical paragraph breaks or paragraphs covering several ideas',
    ],
  },

  '5': {
    band: 5,
    summary:
      'Some attempt at structure is visible, but the answer does not build ' +
      'steadily from one point to the next; cohesive devices are inaccurate, ' +
      'over-used or repetitive, referencing is often faulty, and paragraphing may ' +
      'be inadequate or missing.',
    facets: {
      logicalOrganisation:
        'Some sense of organisation is evident, but the structure is loose and ' +
        'the reader must work to see how the parts relate.',
      progression:
        'Progression is not wholly clear; ideas may be repeated, jump around, or ' +
        'stall so the argument does not move steadily forward.',
      paragraphing:
        'Paragraphing may be absent, minimal, or used inadequately — ideas are ' +
        'not reliably grouped into coherent blocks.',
      cohesionAndReferencing:
        'Cohesive devices are limited, inaccurate or over-used (e.g. the same ' +
        'connector repeated), and reference words are often faulty or missing, ' +
        'making the relationships between ideas hard to follow.',
    },
    positiveIndicators: [
      'Some grouping of related ideas is attempted',
      'A few connectors are used, even if repetitively',
    ],
    limitingIndicators: [
      'Over-reliance on a small set of linkers used incorrectly or to excess',
      'Frequent faulty referencing (ambiguous or missing pronouns / reference words)',
      'Little or no effective paragraphing',
      'Reader frequently loses the thread of the argument',
    ],
  },

  '4': {
    band: 4,
    summary:
      'Ideas reach the page but are not pulled into a coherent whole; there is ' +
      'no clear progression, basic cohesive devices are used inaccurately or ' +
      'repetitively, and there may be no paragraphing or very limited control.',
    facets: {
      logicalOrganisation:
        'Ideas are put down but not organised into a coherent whole; the reader ' +
        'cannot trace a clear plan behind the response.',
      progression:
        'There is no clear progression; points are listed or repeated rather than ' +
        'built into a developing argument.',
      paragraphing:
        'Paragraphing is absent or used in a way that does not help the reader, ' +
        'so ideas run together.',
      cohesionAndReferencing:
        'Only basic connectors (and, but, because, so) appear, and even these are ' +
        'used inaccurately or over-repeated; referencing is largely absent or ' +
        'wrong, so links between ideas are unclear.',
    },
    positiveIndicators: [
      'Some relevant ideas are present on the page',
      'A few basic connectors are attempted',
    ],
    limitingIndicators: [
      'No coherent overall arrangement of ideas',
      'Repetitive or incorrect use of only the simplest connectors',
      'Little or no paragraphing',
      'Referencing essentially absent or consistently faulty',
      'Reader has to reconstruct the intended meaning',
    ],
  },
}

/**
 * The exported CC descriptor pack for IELTS Writing Task 2.
 * Bands 4–9 are authored here; bands 0–3 are intentionally out of scope for this
 * module (handled, if needed, by a low-band module) and are noted via
 * `bandsProvided` so the loader can detect coverage.
 */
export const ieltsWritingTask2CcDescriptors: CcDescriptorPack = {
  criterion: 'coherence-and-cohesion',
  criterionCode: 'CC',
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
function toPackBandDescriptor(d: CcBandDescriptor): PackBandDescriptor {
  const facetLines = [
    `Logical organisation: ${d.facets.logicalOrganisation}`,
    `Progression: ${d.facets.progression}`,
    `Paragraphing: ${d.facets.paragraphing}`,
    `Cohesion & referencing: ${d.facets.cohesionAndReferencing}`,
  ].join(' ')
  return {
    band: d.band,
    descriptor: `${d.summary} ${facetLines}`,
  }
}

/**
 * Adapter to the engine's settled {@link PackCriterion} contract. The loader can
 * call this to slot CC into the four-criterion IELTS rubric (TR/CC/LR/GRA) without
 * the data module re-declaring the seam types. Bands are emitted high→low (9..4)
 * for stable, human-readable rubric ordering.
 */
export function toPackCriterion(): PackCriterion {
  const bands: PackBandDescriptor[] = ieltsWritingTask2CcDescriptors.bandsProvided
    .slice()
    .sort((a, b) => b - a)
    .map((band) => toPackBandDescriptor(descriptors[String(band)]))
  return {
    code: 'CC',
    label: 'Coherence and Cohesion',
    bands,
  }
}

export default ieltsWritingTask2CcDescriptors
