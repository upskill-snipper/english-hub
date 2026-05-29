/**
 * Contract tests for the engine SEAM interfaces (`../types`).
 *
 * WHY THESE ARE MOSTLY TYPE-LEVEL
 * -------------------------------
 * `types.ts` is the single seam authority every Stage-3 component implements against
 * (design doc 10 §2.1, build Step 1). It contains NO runtime logic, so the meaningful
 * regressions are SHAPE regressions — a field renamed, a discriminant dropped, a seam
 * function signature drifting from what the façade wires. These tests therefore:
 *   1. construct a valid fixture of every seam type with `satisfies T` (a fixture that
 *      stops compiling is a breaking change to the contract — the acceptance criterion
 *      in doc 10 Step 1: "a unit test imports every type and constructs a fixture");
 *   2. assert the discriminated unions narrow on their discriminants;
 *   3. assert the seam request/response types compose the SETTLED result schema
 *      (`../result-schema`) and model tiers (`../models`) rather than forking them
 *      (doc 10 §5 R4/R6).
 * The single runtime `expect` keeps Vitest happy (a file with only type assertions
 * still needs one assertion to register as a passing test).
 */

import { describe, it, expect, expectTypeOf } from 'vitest'

import type {
  // routing dimensions
  Area,
  TaskType,
  Level,
  // engine input
  RawSubmission,
  EngineContext,
  EngineCaps,
  MarkSubmissionInput,
  SubmissionSource,
  // router output
  RoutingBasis,
  RoutingCandidate,
  RoutingDecision,
  NeedsConfirmation,
  RouterResult,
  // typed errors
  RoutingErrorCode,
  RoutingErrorShape,
  // knowledge pack
  KnowledgePackRef,
  KnowledgePack,
  PackManifest,
  PackSourcing,
  PackCriterion,
  PackBandDescriptor,
  PackExemplar,
  PackEstimator,
  CriteriaModel,
  PackStatus,
  // retrieval
  RetrievalResult,
  RetrievalRequest,
  RetrievalOptions,
  FirstPassEstimate,
  BudgetReport,
  FirstPassSource,
  // seam requests
  PackResolveRequest,
  PackResolveResult,
  MarkRequest,
  RawMarkResult,
  ValidateRequest,
  FeedbackRequest,
  // façade
  EngineProvenance,
  EngineResult,
  MarkSubmissionOutcome,
  EngineComponents,
  RouteFn,
  ResolvePackFn,
  RetrieveFn,
  MarkFn,
  ValidateFn,
  GenerateFeedbackFn,
  MarkSubmissionFn,
  // re-exports that prove composition over the settled schemas
  MarkingResultV2,
  CriterionScoreV2,
  Overall,
  MarkingError,
  IntegrityFlags,
  ValidationFlags,
  FeedbackBlock,
  ResultProvenance,
  EvidenceSpanV2,
  MarkingModelTier,
  LegacyMarkScheme,
} from '../types'

// ── Shared, minimal fixtures of the SETTLED result-schema parts ──────────────────
// Built once and reused so the seam fixtures stay focused on the seam shape.

const integrityFlags = {
  under_length: false,
  off_topic: false,
  likely_memorised: false,
  copied_from_prompt: false,
} satisfies IntegrityFlags

const validationFlags = {
  unverifiedEvidenceCount: 0,
  overallDisagreement: false,
  selfConsistencyRun: false,
  selfConsistencyDiverged: false,
} satisfies ValidationFlags

const evidence = {
  quote: 'Some societies have become increasingly individualistic.',
  explanation: 'Clear position statement addressing the prompt.',
  verified: true,
} satisfies EvidenceSpanV2

const bandCriterion = {
  scale: 'band',
  code: 'TR',
  label: 'Task Response',
  descriptorMatched: 'Addresses all parts of the task with a clear position.',
  evidence: [evidence],
  confidence: 0.82,
  rationale: 'Position is clear and sustained throughout.',
  band: 7,
  maxBand: 9,
} satisfies CriterionScoreV2

const bandOverall = {
  kind: 'band',
  overallBand: 7,
  proposedOverallBand: 7,
} satisfies Overall

const markingError = {
  type: 'grammar' as MarkingError['type'],
  quote: 'they was',
  correction: 'they were',
  severity: 'minor' as MarkingError['severity'],
  verified: true,
} satisfies MarkingError

const feedbackBlock = {
  strengths: [{ point: 'Clear thesis.' }],
  improvements: [{ point: 'Develop the second body paragraph.' }],
  nextAction: 'Add one concrete example to paragraph two.',
  summary: 'A solid band 7 response with room to extend development.',
} satisfies FeedbackBlock

const resultProvenance = {
  markedAt: '2026-05-29T12:00:00Z',
  runCount: 1,
} satisfies ResultProvenance

const validatedResult = {
  schemaVersion: 2,
  packVersion: 'ielts_writing_v2025.1',
  module: 'ielts_writing',
  board: 'ielts',
  taskType: 'IELTS_Writing_Task2',
  criteria: [bandCriterion],
  overall: bandOverall,
  errors: [markingError],
  integrityFlags,
  validationFlags,
  overallConfidence: 0.82,
  needsHumanReview: false,
  feedback: feedbackBlock,
  provenance: resultProvenance,
} satisfies MarkingResultV2

// ── A minimal KnowledgePack fixture (doc 11 §2.4) reused by the seam fixtures ─────

const sourcing = {
  descriptorSource: 'own_paraphrase',
  exemplarSource: 'own_expert_marked',
  containsBoardSecureMaterial: false,
} satisfies PackSourcing

const manifest = {
  packId: 'ielts_writing_task2_academic',
  version: 'v2025.1',
  fullId: 'ielts_writing_v2025.1',
  board: 'ielts',
  subjectOrExam: 'writing',
  qualification: 'academic',
  taskType: 'task2',
  criteriaModel: 'ielts_4criteria',
  status: 'published',
  specVersion: '1.0',
  verified: true,
  checksums: { 'rubric.json': 'abc123' },
  sourcing,
} satisfies PackManifest

const bandDescriptor = {
  band: 7,
  descriptor: 'A clear position addressing all parts.',
} satisfies PackBandDescriptor
const criterion = {
  code: 'TR',
  label: 'Task Response',
  bands: [bandDescriptor],
} satisfies PackCriterion
const exemplar = {
  id: 'ex-b7-001',
  overallBand: 7,
  essay: 'In recent decades…',
  rationale: 'Clear position, well-developed, minor lexical slips.',
  sourceTag: 'own_expert_marked_2026',
} satisfies PackExemplar
const estimator = {
  minBand: 4,
  maxBand: 8,
  thresholds: { wordCountFloor: 250 },
} satisfies PackEstimator

const pack = {
  version: 'ielts_writing_v2025.1',
  manifest,
  criteria: [criterion],
  exemplars: [exemplar],
  conventions: { commonPitfalls: ['memorised intros'] },
  promptTemplate: 'You are an examiner. {{BAND_DESCRIPTORS}} {{EXEMPLARS}}',
  estimator,
} satisfies KnowledgePack

// ── A RawSubmission fixture reused across the input + seam fixtures ───────────────

const rawSubmission = {
  questionText: 'Some people think… To what extent do you agree?',
  answerText: 'In recent decades, societies have…',
  areaHint: 'ielts',
  taskTypeHint: 'IELTS_Writing_Task2',
} satisfies RawSubmission

describe('engine seam types — fixtures compile (doc 10 build Step 1 acceptance)', () => {
  it('constructs MarkSubmissionInput + its parts', () => {
    const level = { area: 'ielts', value: 7, scaleHint: 'ielts_band' } satisfies Level
    const context = {
      userId: 'u1',
      source: 'b2c_self',
      locale: 'en-GB',
      isMinor: false,
    } satisfies EngineContext
    const caps = { allowClarify: true } satisfies EngineCaps
    const input = {
      rawSubmission: { ...rawSubmission, levelHint: level },
      context,
      caps,
    } satisfies MarkSubmissionInput

    // openness of Area/TaskType (a new area "plugs in" — doc 10 §2.3)
    expectTypeOf<'gcse'>().toMatchTypeOf<Area>()
    expectTypeOf<'a_future_board'>().toMatchTypeOf<Area>()
    expectTypeOf<TaskType>().toEqualTypeOf<string>()
    expectTypeOf<SubmissionSource>().toEqualTypeOf<'b2c_self' | 'b2b_class'>()

    expect(input.context.userId).toBe('u1')
  })

  it('RouterResult narrows on `status` (routed vs needs_confirmation)', () => {
    const decision = {
      status: 'routed',
      area: 'ielts',
      taskType: 'IELTS_Writing_Task2',
      packVersion: 'ielts_writing_v2025.1',
      confidence: 1,
      basis: 'explicit',
    } satisfies RoutingDecision

    const candidate = {
      area: 'gcse',
      taskType: 'aqa-paper2-q5',
      confidence: 0.4,
      label: 'GCSE AQA Paper 2 — Q5',
    } satisfies RoutingCandidate

    const confirm = {
      status: 'needs_confirmation',
      candidates: [candidate],
      reason: 'Two near-tie candidates.',
    } satisfies NeedsConfirmation

    const results: RouterResult[] = [decision, confirm]
    for (const r of results) {
      if (r.status === 'routed') {
        expectTypeOf(r).toEqualTypeOf<RoutingDecision>()
      } else {
        expectTypeOf(r).toEqualTypeOf<NeedsConfirmation>()
      }
    }

    expectTypeOf<RoutingBasis>().toEqualTypeOf<'explicit' | 'pinned' | 'classified'>()
    expect(results).toHaveLength(2)
  })

  it('RoutingError contract is a closed code set on an Error shape', () => {
    expectTypeOf<RoutingErrorCode>().toEqualTypeOf<
      'NO_PACK' | 'AMBIGUOUS_SUBMISSION' | 'INVALID_METADATA'
    >()
    // a class can implement this without this module shipping runtime code
    const errLike: RoutingErrorShape = Object.assign(new Error('no pack'), {
      code: 'NO_PACK' as RoutingErrorCode,
      offendingKey: 'ielts/task2',
    })
    expect(errLike.code).toBe('NO_PACK')
  })

  it('constructs KnowledgePack + KnowledgePackRef (versioned, doc 11)', () => {
    const ref = {
      packId: 'ielts_writing_task2_academic',
      version: 'v2025.1',
      fullId: 'ielts_writing_v2025.1',
      board: 'ielts',
      checksum: 'abc123',
    } satisfies KnowledgePackRef

    expectTypeOf<CriteriaModel>().toMatchTypeOf<string>()
    expectTypeOf<PackStatus>().toEqualTypeOf<'draft' | 'published' | 'deprecated'>()
    expect(ref.fullId).toBe(pack.version)
    expect(pack.manifest.sourcing.containsBoardSecureMaterial).toBe(false)
  })

  it('constructs RetrievalResult with the cache-boundary marker (doc 12 §2.5)', () => {
    const estimate = { band: 7, source: 'heuristic' } satisfies FirstPassEstimate
    const budget = {
      estTokens: 5200,
      exemplarTokens: 900,
      exemplarTrimmed: false,
      exemplarsOmitted: false,
      cacheableTokens: 3000,
    } satisfies BudgetReport
    const opts = { exemplarTokenCap: 1200 } satisfies RetrievalOptions

    const retrieval = {
      rubricBlock: 'TR / CC / LR / GRA full band tables…',
      exemplarBlock: 'Band 7 exemplar…\nBand 8 exemplar…',
      selectedExemplars: [exemplar],
      cacheableBoundary: 'after-rubric',
      firstPassEstimate: estimate,
      packVersion: 'ielts_writing_v2025.1',
      budget,
    } satisfies RetrievalResult

    const req = { pack, submission: rawSubmission, opts } satisfies RetrievalRequest

    expectTypeOf<FirstPassSource>().toEqualTypeOf<'heuristic' | 'cheap-model'>()
    // the two blocks are separate strings so a cache breakpoint can sit between them
    expect(retrieval.cacheableBoundary).toBe('after-rubric')
    expect(req.pack.version).toBe(retrieval.packVersion)
  })

  it('constructs the five seam request/response shapes (doc 10 Step 1)', () => {
    const resolveReq = {
      area: 'ielts',
      taskType: 'IELTS_Writing_Task2',
      packPin: 'ielts_writing_v2025.1',
    } satisfies PackResolveRequest

    const ref = {
      packId: 'ielts_writing_task2_academic',
      version: 'v2025.1',
      fullId: 'ielts_writing_v2025.1',
      board: 'ielts',
    } satisfies KnowledgePackRef

    const packResolved = { kind: 'pack', ref, pack } satisfies PackResolveResult
    // the legacy branch carries a LegacyMarkScheme (re-exported alias of MarkScheme)
    expectTypeOf<PackResolveResult>().toMatchTypeOf<PackResolveResult>()

    const rawMark = {
      criteria: [bandCriterion],
      errors: [markingError],
      integrityFlags,
      proposedOverall: bandOverall,
      proposedConfidence: 0.82,
    } satisfies RawMarkResult

    const markReq = {
      pack,
      retrieval: {
        rubricBlock: 'r',
        exemplarBlock: 'e',
        selectedExemplars: [exemplar],
        cacheableBoundary: 'after-rubric',
        firstPassEstimate: { band: 7, source: 'heuristic' },
        packVersion: 'ielts_writing_v2025.1',
        budget: {
          estTokens: 1,
          exemplarTokens: 1,
          exemplarTrimmed: false,
          exemplarsOmitted: false,
          cacheableTokens: 1,
        },
      },
      submission: rawSubmission,
      modelTier: 'marker',
    } satisfies MarkRequest

    const validateReq = { raw: rawMark, submission: rawSubmission, pack } satisfies ValidateRequest
    const feedbackReq = { result: validatedResult, pack, isMinor: false } satisfies FeedbackRequest

    // modelTier is a key into MARKING_MODELS, NOT an inline id (doc 10 §5 R4/R7)
    expectTypeOf<MarkRequest['modelTier']>().toEqualTypeOf<MarkingModelTier>()
    expectTypeOf<MarkingModelTier>().toMatchTypeOf<'classifier' | 'marker' | 'escalation'>()

    expect(resolveReq.packPin).toBe('ielts_writing_v2025.1')
    expect(packResolved.kind).toBe('pack')
    expect(markReq.modelTier).toBe('marker')
    expect(validateReq.pack.version).toBe('ielts_writing_v2025.1')
    expect(feedbackReq.isMinor).toBe(false)
  })

  it('PackResolveResult narrows on `kind` (pack vs legacy)', () => {
    const legacy: LegacyMarkScheme = {} as LegacyMarkScheme
    const results: PackResolveResult[] = [
      {
        kind: 'pack',
        ref: { packId: 'p', version: 'v', fullId: 'f', board: 'ielts' },
        pack,
      },
      {
        kind: 'legacy',
        ref: { packId: 'p', version: 'v', fullId: 'f', board: 'gcse' },
        scheme: legacy,
        questionId: 'q1',
      },
    ]
    for (const r of results) {
      if (r.kind === 'pack') {
        expectTypeOf(r.pack).toEqualTypeOf<KnowledgePack>()
      } else {
        expectTypeOf(r.scheme).toEqualTypeOf<LegacyMarkScheme>()
      }
    }
    expect(results).toHaveLength(2)
  })

  it('constructs EngineResult + MarkSubmissionOutcome (the façade output)', () => {
    const provenance = {
      packVersion: 'ielts_writing_v2025.1',
      packChecksum: 'abc123',
    } satisfies EngineProvenance

    const decision = {
      status: 'routed',
      area: 'ielts',
      taskType: 'IELTS_Writing_Task2',
      packVersion: 'ielts_writing_v2025.1',
      confidence: 1,
      basis: 'explicit',
    } satisfies RoutingDecision

    const engineResult = {
      routingDecision: decision,
      result: validatedResult,
      provenance,
    } satisfies EngineResult

    const outcomes: MarkSubmissionOutcome[] = [
      engineResult,
      { status: 'needs_confirmation', candidates: [], reason: 'ambiguous' },
    ]
    // MarkSubmissionOutcome narrows: only NeedsConfirmation carries `status`, so
    // checking for its absence isolates the EngineResult branch.
    for (const o of outcomes) {
      if ('status' in o) {
        expectTypeOf(o).toEqualTypeOf<NeedsConfirmation>()
        expect(o.status).toBe('needs_confirmation')
      } else {
        expectTypeOf(o).toEqualTypeOf<EngineResult>()
        expect(o.result.schemaVersion).toBe(2)
      }
    }
    expect(engineResult.provenance.packVersion).toBe('ielts_writing_v2025.1')
  })
})

describe('engine seam function contracts (doc 10 §2.1 EngineComponents)', () => {
  it('per-seam Fn aliases equal the matching EngineComponents member', () => {
    expectTypeOf<RouteFn>().toEqualTypeOf<EngineComponents['route']>()
    expectTypeOf<ResolvePackFn>().toEqualTypeOf<EngineComponents['resolvePack']>()
    expectTypeOf<RetrieveFn>().toEqualTypeOf<EngineComponents['retrieve']>()
    expectTypeOf<MarkFn>().toEqualTypeOf<EngineComponents['mark']>()
    expectTypeOf<ValidateFn>().toEqualTypeOf<EngineComponents['validate']>()
    expectTypeOf<GenerateFeedbackFn>().toEqualTypeOf<EngineComponents['generateFeedback']>()
    expect(true).toBe(true)
  })

  it('the seams compose the SETTLED result schema (no fork — doc 10 §5 R6)', () => {
    // validate/feedback traffic in the canonical MarkingResultV2, not a parallel type
    expectTypeOf<ReturnType<ValidateFn>>().toEqualTypeOf<MarkingResultV2>()
    expectTypeOf<ReturnType<GenerateFeedbackFn>>().toEqualTypeOf<MarkingResultV2>()
    // the marker's raw output reuses the settled criterion/error/overall parts
    expectTypeOf<RawMarkResult['criteria']>().toEqualTypeOf<readonly CriterionScoreV2[]>()
    expectTypeOf<RawMarkResult['errors']>().toEqualTypeOf<readonly MarkingError[]>()
    expectTypeOf<RawMarkResult['proposedOverall']>().toEqualTypeOf<Overall>()
    expect(true).toBe(true)
  })

  it('a mock EngineComponents object is assignable (the contract is implementable)', () => {
    const components: EngineComponents = {
      route: async () => ({
        status: 'routed',
        area: 'ielts',
        taskType: 'IELTS_Writing_Task2',
        packVersion: 'ielts_writing_v2025.1',
        confidence: 1,
        basis: 'explicit',
      }),
      resolvePack: async () => ({
        kind: 'pack',
        ref: { packId: 'p', version: 'v', fullId: 'ielts_writing_v2025.1', board: 'ielts' },
        pack,
      }),
      retrieve: () => ({
        rubricBlock: 'r',
        exemplarBlock: 'e',
        selectedExemplars: [],
        cacheableBoundary: 'after-rubric',
        firstPassEstimate: { band: 7, source: 'heuristic' },
        packVersion: 'ielts_writing_v2025.1',
        budget: {
          estTokens: 1,
          exemplarTokens: 1,
          exemplarTrimmed: false,
          exemplarsOmitted: false,
          cacheableTokens: 1,
        },
      }),
      mark: async () => ({
        criteria: [bandCriterion],
        errors: [],
        integrityFlags,
        proposedOverall: bandOverall,
        proposedConfidence: 0.8,
      }),
      validate: () => validatedResult,
      generateFeedback: () => validatedResult,
    }

    // The façade type accepts an orchestrator built over these components.
    const markSubmission: MarkSubmissionFn = async (input) => {
      const routed = await components.route(input)
      if (routed.status === 'needs_confirmation') return routed
      const resolved = await components.resolvePack({
        area: routed.area,
        taskType: routed.taskType,
      })
      if (resolved.kind !== 'pack') throw new Error('legacy branch not exercised in this fixture')
      const retrieval = components.retrieve({
        pack: resolved.pack,
        submission: input.rawSubmission,
      })
      const raw = await components.mark({
        pack: resolved.pack,
        retrieval,
        submission: input.rawSubmission,
        modelTier: 'marker',
      })
      const validated = components.validate({
        raw,
        submission: input.rawSubmission,
        pack: resolved.pack,
      })
      const withFeedback = components.generateFeedback({
        result: validated,
        pack: resolved.pack,
        isMinor: input.context.isMinor,
      })
      return {
        routingDecision: routed,
        result: withFeedback,
        provenance: { packVersion: routed.packVersion },
      }
    }

    expectTypeOf(markSubmission).toEqualTypeOf<MarkSubmissionFn>()
    expect(typeof markSubmission).toBe('function')
  })
})
