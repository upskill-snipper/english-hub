// Offline unit tests for the synthetic-essay generator (Track C, doc 23 §4).
//
// Every test stubs the model call (no SDK, no network, no key) per the doc-23 §4
// guardrail that generation is injectable so the suite runs fully offline. The
// tests assert the four contract points the task calls out:
//   1. produces a tagged synthetic essay;
//   2. targetBand is stored as spec only, never surfaced as a reference mark;
//   3. dataSource is always 'synthetic';
//   4. diversity params (band/length/L1/error mix/topic) are threaded through.

import { describe, it, expect, vi } from 'vitest'

import {
  generateSyntheticEssay,
  buildSyntheticPrompt,
  validateSyntheticSpec,
  SyntheticSpecError,
  SYNTHETIC_DIVERSITY_AXES,
  DATA_SOURCES,
  type SyntheticSpec,
  type GenerateFn,
  type SyntheticEssay,
} from '../generator'
import { MARKING_MODELS } from '../../../models'
import { MARKING_ERROR_TYPES } from '../../../error-taxonomy'

/** A representative, valid spec exercising every diversity axis. */
function makeSpec(overrides: Partial<SyntheticSpec> = {}): SyntheticSpec {
  return {
    targetBand: 6,
    errorProfile: { 'grammar.article': 3, 'lexical.collocation': 2 },
    topic: 'Some people think technology makes us less social.',
    length: 'medium',
    l1Transfer: 'gulf-arabic',
    taskType: 'IELTS_Writing_Task2',
    ...overrides,
  }
}

/** A stub model call returning a delimited prompt+essay; records what it saw. */
function stubGenerate(): { fn: GenerateFn; calls: Array<{ prompt: string; model: string }> } {
  const calls: Array<{ prompt: string; model: string }> = []
  const fn: GenerateFn = async (args) => {
    calls.push({ prompt: args.prompt, model: args.model })
    return 'Generated WT2 prompt about technology.\n---ESSAY---\nThis is the synthetic essay body.'
  }
  return { fn, calls }
}

describe('generateSyntheticEssay', () => {
  it('produces a tagged synthetic essay with prompt, body and spec', async () => {
    const { fn } = stubGenerate()
    const spec = makeSpec()

    const essay: SyntheticEssay = await generateSyntheticEssay(spec, { generate: fn })

    expect(essay.essayText).toBe('This is the synthetic essay body.')
    expect(essay.taskPrompt).toBe('Generated WT2 prompt about technology.')
    expect(essay.syntheticSpec).toEqual(spec)
    expect(essay.dataSource).toBe('synthetic')
  })

  it("tags dataSource as 'synthetic' regardless of spec (honesty rule, doc 23 §8)", async () => {
    const { fn } = stubGenerate()
    for (const band of [4, 6.5, 9] as const) {
      const essay = await generateSyntheticEssay(makeSpec({ targetBand: band }), { generate: fn })
      expect(essay.dataSource).toBe('synthetic')
    }
    // 'real' exists in the union but is never produced by this generator.
    expect(DATA_SOURCES).toContain('real')
  })

  it('records targetBand ONLY as a spec target, never as a reference mark', async () => {
    const { fn } = stubGenerate()
    const spec = makeSpec({ targetBand: 7 })

    const essay = await generateSyntheticEssay(spec, { generate: fn })

    // The intended band lives exactly one place: syntheticSpec.targetBand.
    expect(essay.syntheticSpec.targetBand).toBe(7)
    // The essay carries NO band/score/criterion/humanReference field — there is
    // structurally nowhere to smuggle the AI's opinion as a mark (doc 23 §4).
    const keys = Object.keys(essay)
    expect(keys).not.toContain('band')
    expect(keys).not.toContain('score')
    expect(keys).not.toContain('overallBand')
    expect(keys).not.toContain('humanReference')
    expect(keys).not.toContain('referenceMark')
    expect(keys.sort()).toEqual(
      ['dataSource', 'essayText', 'generatorModel', 'syntheticSpec', 'taskPrompt'].sort(),
    )
  })

  it('uses the strongest (escalation/Opus) model tier by default', async () => {
    const { fn, calls } = stubGenerate()

    const essay = await generateSyntheticEssay(makeSpec(), { generate: fn })

    expect(calls).toHaveLength(1)
    expect(calls[0]?.model).toBe(MARKING_MODELS.escalation)
    expect(essay.generatorModel).toBe(MARKING_MODELS.escalation)
  })

  it('threads every diversity param into the model prompt', async () => {
    const { fn, calls } = stubGenerate()
    const spec = makeSpec({
      targetBand: 5.5,
      length: 'long',
      l1Transfer: 'gulf-arabic',
      topic: 'Governments should fund space exploration.',
      errorProfile: { 'grammar.tense': 4, 'discourse.cohesion': 2 },
    })

    await generateSyntheticEssay(spec, { generate: fn })
    const prompt = calls[0]?.prompt ?? ''

    expect(prompt).toContain('5.5') // band
    expect(prompt).toContain('long') // length
    expect(prompt).toContain('gulf-arabic') // L1 transfer
    expect(prompt).toContain('Governments should fund space exploration.') // topic
    expect(prompt).toContain('grammar.tense') // error mix
    expect(prompt).toContain('discourse.cohesion')
    expect(prompt).toContain('IELTS_Writing_Task2') // task type
    // The prompt must state the band is a generation target, not a self-mark.
    expect(prompt.toLowerCase()).toContain('generation target')
  })

  it('passes the injected stub only (no SDK / network) — offline guarantee', async () => {
    const impl: GenerateFn = async () => 'p\n---ESSAY---\ne'
    const fn = vi.fn(impl)
    await generateSyntheticEssay(makeSpec(), { generate: fn })
    expect(fn).toHaveBeenCalledOnce()
  })

  it('keeps whole output as essay when the model omits the delimiter', async () => {
    const fn: GenerateFn = async () => 'No delimiter here, just an essay body.'
    const essay = await generateSyntheticEssay(makeSpec(), { generate: fn })
    expect(essay.essayText).toBe('No delimiter here, just an essay body.')
    expect(essay.taskPrompt).toBe('')
  })
})

describe('validateSyntheticSpec', () => {
  it('rejects a non-canonical error-taxonomy key (cannot fork the taxonomy)', () => {
    const bad = makeSpec({
      // @ts-expect-error — intentionally invalid key to prove the runtime guard.
      errorProfile: { 'grammar.made_up': 1 },
    })
    expect(() => validateSyntheticSpec(bad)).toThrow(SyntheticSpecError)
  })

  it('rejects an off-grid target band', () => {
    const bad = makeSpec({ targetBand: 6.25 as unknown as SyntheticSpec['targetBand'] })
    expect(() => validateSyntheticSpec(bad)).toThrow(SyntheticSpecError)
  })

  it('rejects an empty topic', () => {
    expect(() => validateSyntheticSpec(makeSpec({ topic: '   ' }))).toThrow(SyntheticSpecError)
  })

  it('rejects negative / non-integer error counts', () => {
    expect(() =>
      validateSyntheticSpec(makeSpec({ errorProfile: { 'grammar.article': -1 } })),
    ).toThrow(SyntheticSpecError)
    expect(() =>
      validateSyntheticSpec(makeSpec({ errorProfile: { 'grammar.article': 1.5 } })),
    ).toThrow(SyntheticSpecError)
  })

  it('accepts a fully valid spec', () => {
    expect(() => validateSyntheticSpec(makeSpec())).not.toThrow()
  })

  it('generateSyntheticEssay validates before calling the model', async () => {
    const impl: GenerateFn = async () => 'x'
    const fn = vi.fn(impl)
    await expect(
      generateSyntheticEssay(makeSpec({ topic: '' }), { generate: fn }),
    ).rejects.toBeInstanceOf(SyntheticSpecError)
    expect(fn).not.toHaveBeenCalled()
  })
})

describe('buildSyntheticPrompt', () => {
  it('lists every requested taxonomy error type', () => {
    const prompt = buildSyntheticPrompt(
      makeSpec({ errorProfile: { 'task.development': 2, 'lexical.spelling': 5 } }),
    )
    expect(prompt).toContain('task.development')
    expect(prompt).toContain('lexical.spelling')
  })

  it("handles 'none' L1 transfer without claiming a fingerprint", () => {
    const prompt = buildSyntheticPrompt(makeSpec({ l1Transfer: 'none' }))
    expect(prompt.toLowerCase()).toContain('do not model any specific first-language')
  })
})

describe('SYNTHETIC_DIVERSITY_AXES', () => {
  it('draws error types from the canonical taxonomy (no fork)', () => {
    expect(SYNTHETIC_DIVERSITY_AXES.errorTypes).toBe(MARKING_ERROR_TYPES)
    expect(SYNTHETIC_DIVERSITY_AXES.errorTypes).toHaveLength(20)
  })

  it('spans bands 4 through 9 (doc 23 §3 coverage)', () => {
    expect(SYNTHETIC_DIVERSITY_AXES.bands[0]).toBe(4)
    expect(SYNTHETIC_DIVERSITY_AXES.bands[SYNTHETIC_DIVERSITY_AXES.bands.length - 1]).toBe(9)
  })

  it('includes the Gulf-Arabic L1 profile (EAL audience, doc 23 §4)', () => {
    expect(SYNTHETIC_DIVERSITY_AXES.l1Transfers).toContain('gulf-arabic')
  })
})
