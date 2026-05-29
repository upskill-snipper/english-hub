/**
 * IELTS Writing Task 2 — Knowledge Pack
 * Criterion: Task Response (TR)
 *
 * OWN-PARAPHRASE band descriptors, bands 4–9 (plus a documented note for 0–3).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCING MANIFEST
 * ─────────────────────────────────────────────────────────────────────────────
 *   authoring:                 own-paraphrase
 *   containsBoardSecureMaterial: false
 *   boardSecureMaterialUsed:    none
 *   derivedFrom:               IELTS public band-descriptor framework
 *                              (the publicly described assessment criteria for
 *                              IELTS Writing Task 2 Task Response),
 *                              cross-referenced with CEFR level alignment.
 *   publicAuthority:           IELTS partners (British Council / IDP IELTS /
 *                              Cambridge University Press & Assessment) public
 *                              criteria framework + CEFR (Council of Europe).
 *   verbatimReproduction:      none. No board secure or official descriptor text
 *                              is reproduced. All wording below is original
 *                              paraphrase characterising the same assessment
 *                              constructs (addressing the task, position, idea
 *                              development, and relevant support).
 *
 * TYPE SHAPE
 *   This module mirrors the authoring pattern of its siblings
 *   `descriptors-coherence-cohesion.ts` / `descriptors-grammatical-range.ts`: a
 *   self-describing, criterion-local data shape keyed by whole band ('4'..'9'),
 *   carrying a per-band summary, facet-level characterisation, and
 *   positive/limiting indicators. It additionally exposes a `toPackCriterion()`
 *   adapter that flattens the data into the engine's settled `PackCriterion` /
 *   `PackBandDescriptor` contract (see `src/lib/marking/engine/types.ts`, doc 11
 *   §2.4) so the loader can assemble the four-criterion rubric uniformly without
 *   this data module re-declaring the seam contract. The richer criterion-local
 *   shape is retained for authoring clarity and for any tooling that wants the
 *   facet breakdown.
 *
 * UNDER-LENGTH & OFF-TOPIC (spec §2)
 *   Two engine-level considerations cap Task Response regardless of surface
 *   quality, and are characterised in the facets / indicators of the relevant
 *   bands and in `belowAssessableNote`:
 *     • Under-length — the task requires at least ~250 words. A markedly short
 *       essay cannot develop its argument and so cannot reach the upper TR
 *       bands (it is typically capped around band 5 or below). The engine flags
 *       `under_length = true` (spec §2 marker considerations).
 *     • Off-topic / memorised — a response that ignores the actual prompt
 *       (wholly off-topic, only tangentially related, or a pre-learned answer
 *       reproduced regardless of the question) cannot score in the upper bands;
 *       a wholly unrelated response scores at the very bottom. The engine flags
 *       `off_topic` / `likely_memorised` (spec §2).
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
 * Sub-criterion facets the TR criterion is assessed against. These are the four
 * recurring threads the criterion tracks across bands.
 */
export interface TrDescriptorFacets {
  /**
   * How completely every part of the prompt is dealt with — a two-part prompt
   * needs both parts; an "agree/disagree" or "to what extent" prompt needs a
   * stance on what is asked.
   */
  readonly addressingTheTask: string
  /**
   * Whether a clear point of view is set out and sustained so the reader can
   * track it from the opening to the conclusion.
   */
  readonly position: string
  /**
   * Whether main ideas are explained and pushed further (developed) rather than
   * merely listed or asserted.
   */
  readonly ideaDevelopment: string
  /**
   * Whether ideas are backed by relevant detail, reasons or examples without
   * drifting into over-generalisation or irrelevance.
   */
  readonly support: string
}

/** A single whole-band descriptor for the TR criterion. */
export interface TrBandDescriptor {
  /** Whole band number, 0–9. This module supplies 4–9 in full. */
  readonly band: number
  /** One-line own-paraphrase headline summarising the band. */
  readonly summary: string
  /** Facet-level own-paraphrase characterisation. */
  readonly facets: TrDescriptorFacets
  /**
   * Observable signals a marker / model can look for at this band.
   * Original phrasing; diagnostic aids, not official descriptor text.
   */
  readonly positiveIndicators: readonly string[]
  /** Limitations that cap a script at this band. */
  readonly limitingIndicators: readonly string[]
}

/** Top-level shape of this descriptor data module. */
export interface TrDescriptorPack {
  readonly criterion: 'task-response'
  readonly criterionCode: 'TR'
  readonly task: 'ielts-writing-task2'
  readonly bandScale: { readonly min: 0; readonly max: 9; readonly step: 1 }
  /** Bands actually authored in this module. */
  readonly bandsProvided: readonly number[]
  readonly sourcing: KnowledgePackSourcing
  /** Descriptors keyed by whole band number as a string ('4'..'9'). */
  readonly descriptors: Readonly<Record<string, TrBandDescriptor>>
  /**
   * Note covering bands 0–3 (below the level at which a developed argument can
   * be assessed) plus the under-length and off-topic/memorised caps from the
   * spec §2 marker considerations.
   */
  readonly belowAssessableNote: string
}

const sourcing: KnowledgePackSourcing = {
  authoring: 'own-paraphrase',
  containsBoardSecureMaterial: false,
  derivedFrom: [
    'IELTS public band-descriptor framework (Writing Task 2, Task Response)',
    'British Council / IDP IELTS / Cambridge University Press & Assessment public criteria',
    'CEFR level alignment (Council of Europe)',
  ],
  note:
    'Own-paraphrase characterisation of the publicly described Task Response ' +
    'assessment constructs (addressing the task, position, idea development, ' +
    'relevant support). No board secure or official descriptor wording is ' +
    'reproduced.',
}

/**
 * The same sourcing provenance, shaped for the ENGINE contract (`PackSourcing`,
 * doc 11 §2.2) so the loader can lift it straight into the pack manifest. Typed
 * loosely (the cardinal, machine-checked field is `containsBoardSecureMaterial`,
 * the hard publish gate, which is `false`); the loader supplies and validates the
 * full manifest-level sourcing block.
 */
export const trPackSourcing = {
  descriptorSource: 'own_paraphrase',
  exemplarSource: 'own_expert_marked',
  containsBoardSecureMaterial: false,
  licenceNote:
    'TR band descriptors (bands 4–9) are original paraphrase capturing the ' +
    'publicly described IELTS Task Response criteria (addressing the task, ' +
    'position, idea development, relevant support), cross-referenced with CEFR ' +
    'level alignment. No board secure or official descriptor text is reproduced.',
} as const

/**
 * Band-keyed TR descriptors (4–9).
 *
 * The progression is deliberately monotonic across facets so the engine can
 * reason about adjacent-band boundaries:
 *   - addressingTheTask widens from minimal/tangential (4) to complete coverage
 *     of every part (9);
 *   - position sharpens from unclear (4) to clear and fully sustained (9);
 *   - ideaDevelopment deepens from few/undeveloped ideas (4) to ideas explored
 *     in depth (9);
 *   - support strengthens from irrelevant/absent (4) to relevant, well-chosen
 *     and tied to the argument (9).
 */
const descriptors: Record<string, TrBandDescriptor> = {
  '9': {
    band: 9,
    summary:
      'Every part of the task is dealt with thoroughly through a fully developed, ' +
      'well-supported response.',
    facets: {
      addressingTheTask:
        'The essay engages completely with all parts of the prompt and leaves ' +
        'nothing important untreated; the response comfortably exceeds the ' +
        'minimum length.',
      position:
        'A clear point of view is set out and held consistently from the opening ' +
        'to the conclusion.',
      ideaDevelopment:
        'Each main idea is explored in depth rather than merely stated, with no ' +
        'padding, drift or repetition.',
      support:
        'Ideas are backed by relevant, well-chosen support, with any examples ' +
        'serving the argument directly; there is no irrelevant material.',
    },
    positiveIndicators: [
      'Answers every part of the prompt in full',
      'A clear stance held consistently throughout',
      'Main ideas developed in depth, not just stated',
      'Support is relevant, specific and tied to the argument',
    ],
    limitingIndicators: [
      'Any part of the task left thin or unanswered would point below band 9',
      'A stance that wavers or is hard to track would point below band 9',
    ],
  },

  '8': {
    band: 8,
    summary:
      'Every part of the task is covered adequately, with well-developed ideas ' +
      'and a clear, supported position.',
    facets: {
      addressingTheTask:
        'Every part of the prompt is covered to a sufficient depth; coverage is ' +
        'strong and on-task throughout, with at most a minor element treated more ' +
        'lightly.',
      position: 'The writer states a clear position and maintains it across the response.',
      ideaDevelopment:
        'Main ideas are well developed and extended; the only gap on the top band ' +
        'is the occasional point developed slightly less fully than the rest.',
      support: 'Relevant ideas are supported with extended detail that stays on-task.',
    },
    positiveIndicators: [
      'Every part of the task is covered to an adequate depth',
      'Clear position that is well supported',
      'Main ideas relevant and extended',
    ],
    limitingIndicators: [
      'An occasional idea less fully developed than the rest',
      'A minor part of the task treated more lightly',
    ],
  },

  '7': {
    band: 7,
    summary:
      'Every part of the task is dealt with and a clear position is held ' +
      'throughout, though support may over-generalise.',
    facets: {
      addressingTheTask:
        'Every part of the prompt is addressed; the response stays on-task from ' +
        'beginning to end.',
      position: 'A clear point of view is held throughout, so the argument is easy to ' + 'follow.',
      ideaDevelopment:
        'Main ideas are extended and supported, but the writer may slip into ' +
        'over-generalisation, or some points may not be carried as far as they ' +
        'could be.',
      support:
        'Support is present and relevant but can lose focus or generalise rather ' +
        'than stay specific.',
    },
    positiveIndicators: [
      'Every part of the task is dealt with',
      'A clear position held throughout',
      'Main ideas extended and supported',
    ],
    limitingIndicators: [
      'A tendency to over-generalise',
      'Some supporting points lack focus or stop short',
    ],
  },

  '6': {
    band: 6,
    summary:
      'Every part of the task is touched on but the coverage is patchy; the ' +
      'position is relevant but development may be thin or unclear.',
    facets: {
      addressingTheTask:
        'Every part of the prompt is touched on, though the depth of treatment is ' +
        'uneven between them, so coverage is patchy.',
      position:
        'A relevant position is put forward, even if the ending merely echoes ' +
        'earlier points or leaves the stance fuzzy.',
      ideaDevelopment:
        'Main ideas are on-topic but are sometimes not developed enough, or are ' +
        'expressed in a way that leaves their relevance less than fully clear.',
      support: 'Support is present but limited; some detail may add little to the ' + 'argument.',
    },
    positiveIndicators: [
      'Every part of the task is addressed in some way',
      'A relevant position is presented',
      'Main ideas are on-topic',
    ],
    limitingIndicators: [
      'The depth of treatment is markedly uneven between the parts',
      'The ending merely echoes earlier points or leaves the stance fuzzy',
      'Main ideas under-developed or not clearly relevant',
    ],
  },

  '5': {
    band: 5,
    summary:
      'The task is only partly addressed; a position exists but development is ' +
      'unclear and some content is irrelevant. Markedly under-length scripts are ' +
      'typically capped here or below.',
    facets: {
      addressingTheTask:
        'The essay engages with the task only in part, and the format or focus ' +
        'may be inappropriate in places. Under-length responses (fewer than ~250 ' +
        'words) commonly sit at this band or below because the argument cannot be ' +
        'developed in too few words.',
      position:
        'The writer does express a position, but its development is not ' +
        'consistently clear and the response may reach no real conclusion.',
      ideaDevelopment:
        'Some main ideas are offered but they are limited and insufficiently ' + 'developed.',
      support: 'Support is thin, and there may be detail that is irrelevant to the ' + 'prompt.',
    },
    positiveIndicators: [
      'A position is expressed, even if not clearly developed',
      'Some relevant main ideas are present',
    ],
    limitingIndicators: [
      'The task is only partially addressed',
      'No clear conclusion is drawn',
      'Ideas are limited and under-developed',
      'Some detail is irrelevant to the prompt',
      'May be under length (fewer than ~250 words), which caps the band',
    ],
  },

  '4': {
    band: 4,
    summary:
      'The response keeps SOME tangential connection to the task but engages it ' +
      'only minimally, with an unclear position and few developed ideas. A ' +
      'memorised answer counts here ONLY if it retains some genuine relevance to ' +
      'the actual question; a wholly off-topic or fully memorised-and-irrelevant ' +
      'answer falls below this band (capped at 2–3).',
    facets: {
      addressingTheTask:
        'The essay still bears some relevance to the task but engages it only ' +
        'minimally, or approaches it from a tangent rather than answering what ' +
        'was asked, and the format may be inappropriate. A memorised answer can ' +
        'sit here only while it keeps some real bearing on the prompt; once an ' +
        'answer is wholly off-topic, or is memorised and bears no genuine ' +
        'connection to the actual question, it no longer qualifies for band 4 ' +
        'and is capped lower (bands 2–3, or band 1 if entirely unrelated).',
      position: 'A position may be present but it is unclear or hard to identify.',
      ideaDevelopment:
        'There are few ideas, and those given may be irrelevant or barely ' + 'developed.',
      support: 'Support is largely absent or does not connect to the prompt.',
    },
    positiveIndicators: [
      'Some genuine, if slight, connection to the task is present (the floor for band 4)',
    ],
    limitingIndicators: [
      'Only minimally or tangentially related to the task',
      'Position unclear or hard to identify',
      'Few ideas, often irrelevant or undeveloped',
      'Format may be inappropriate',
      'May read as a memorised or off-question answer that nonetheless keeps ' +
        'some relevance to the prompt',
      'A WHOLLY off-topic answer, or a memorised answer with no genuine relevance ' +
        'to the actual question, does NOT meet band 4 — cap it at band 2–3 (band 1 ' +
        'if entirely unrelated)',
    ],
  },
}

/**
 * The exported TR descriptor pack for IELTS Writing Task 2.
 * Bands 4–9 are authored here; bands 0–3 (and the under-length / off-topic caps)
 * are characterised in `belowAssessableNote`, and the authored bands are listed
 * in `bandsProvided` so the loader can detect coverage.
 */
export const ieltsWritingTask2TrDescriptors: TrDescriptorPack = {
  criterion: 'task-response',
  criterionCode: 'TR',
  task: 'ielts-writing-task2',
  bandScale: { min: 0, max: 9, step: 1 },
  bandsProvided: [4, 5, 6, 7, 8, 9],
  sourcing,
  descriptors,
  belowAssessableNote:
    'Bands 0–3 fall below the level at which Task Response can be assessed as a ' +
    'developed argument. At band 3 no part of the task is adequately addressed ' +
    'and no clear position emerges, with very few ideas that are largely ' +
    'undeveloped or irrelevant. At band 2 the content barely relates to the ' +
    'prompt, no position is offered, and ideas are hard to identify. At band 1 ' +
    'the response is wholly unrelated to the task (and may be copied or written ' +
    'entirely off the question). At band 0 there is no assessable response at all ' +
    '(blank, illegible, or not in English). Two engine-level caps from the spec ' +
    '§2 marker considerations push responses toward this range regardless of ' +
    'surface quality: a response that is markedly under length (the task requires ' +
    'at least ~250 words; the engine flags under_length) cannot develop its ' +
    'argument and so cannot reach the upper TR bands; and a response that is ' +
    'off-topic, only tangential, or a memorised answer reproduced regardless of ' +
    'the question (the engine flags off_topic / likely_memorised) cannot score in ' +
    'the upper bands — a wholly unrelated answer scores at the bottom.',
}

/**
 * Flatten one criterion-local band descriptor into the engine's settled
 * {@link PackBandDescriptor} shape: a single `descriptor` prose string per band.
 * The summary + the four facets are concatenated into descriptor-anchored prose
 * the marker can match against (doc 12 §2.1 emits this as the
 * `{{BAND_DESCRIPTORS}}` rubric block).
 */
function toPackBandDescriptor(d: TrBandDescriptor): PackBandDescriptor {
  const facetLines = [
    `Addressing the task: ${d.facets.addressingTheTask}`,
    `Position: ${d.facets.position}`,
    `Idea development: ${d.facets.ideaDevelopment}`,
    `Support: ${d.facets.support}`,
  ].join(' ')
  return {
    band: d.band,
    descriptor: `${d.summary} ${facetLines}`,
  }
}

/**
 * Adapter to the engine's settled {@link PackCriterion} contract. The loader can
 * call this to slot TR into the four-criterion IELTS rubric (TR/CC/LR/GRA)
 * without the data module re-declaring the seam types. Bands are emitted
 * high→low (9..4) for stable, human-readable rubric ordering.
 */
export function toPackCriterion(): PackCriterion {
  const bands: PackBandDescriptor[] = ieltsWritingTask2TrDescriptors.bandsProvided
    .slice()
    .sort((a, b) => b - a)
    .map((band) => toPackBandDescriptor(descriptors[String(band)]))
  return {
    code: 'TR',
    label: 'Task Response',
    bands,
  }
}

export default ieltsWritingTask2TrDescriptors
