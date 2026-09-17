// ─── The eval harness must measure the model production actually calls ──────
//
// `evals/adapters/llm-marker.ts` hard-coded EVAL_MODEL = 'claude-sonnet-4-
// 20250514', retired in June 2026, and the offline fixture cache is keyed on
// that literal. Production moved off it twice (see src/lib/anthropic-client.ts)
// and the harness did not, so every offline run replayed cleanly and reported a
// marking-accuracy figure for a model production had not used since August.
//
// The fixture key folds in the model id, which detects a change TO EVAL_MODEL -
// it cannot detect EVAL_MODEL itself drifting away from production. Only this
// can: EVAL_MODEL must BE the production constant, and no fixture on disk may
// claim another model.
//
// This test lives under src/ so it runs in `npm test`, not only in
// `npm run eval:marking`, which is not what CI gates on.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { EVAL_MODEL, fixtureKey } from '../../evals/adapters/llm-marker'

const EVALS = join(process.cwd(), 'evals')
const FIXTURES = join(EVALS, 'fixtures')

const adapterSource = readFileSync(join(EVALS, 'adapters', 'llm-marker.ts'), 'utf8')

function fixtureFiles(): string[] {
  return readdirSync(FIXTURES).filter((f) => f.endsWith('.json'))
}

describe('the eval harness is pinned to the production model', () => {
  it('evaluates exactly the model the AI routes call', () => {
    expect(EVAL_MODEL).toBe(ANTHROPIC_MODEL)
  })

  it('declares EVAL_MODEL from the constant, never from a literal of its own', () => {
    const declaration = adapterSource
      .split('\n')
      .find((line) => line.includes('export const EVAL_MODEL'))

    expect(declaration).toBeDefined()
    expect(declaration).toMatch(/=\s*ANTHROPIC_MODEL/)
    // A quoted model id on that line is the defect coming back.
    expect(declaration).not.toMatch(/['"`]claude-/)
  })

  it('still refuses a fixture recorded under a different model', () => {
    expect(adapterSource).toMatch(/fixture\.model\s*!==\s*EVAL_MODEL/)
  })
})

describe('no fixture replays a retired model', () => {
  it('ships fixtures, so the offline path is exercised at all', () => {
    expect(fixtureFiles().length).toBeGreaterThan(0)
  })

  it('has no fixture on disk claiming a model other than the production one', () => {
    const offenders: string[] = []

    for (const file of fixtureFiles()) {
      const fixture = JSON.parse(readFileSync(join(FIXTURES, file), 'utf8')) as {
        key: string
        model: string
      }
      if (fixture.model !== ANTHROPIC_MODEL) {
        offenders.push(`${file}: recorded for ${fixture.model}`)
      }
      // The filename IS the key; a mismatch means a hand-edited fixture that
      // could never be found by the adapter anyway.
      expect(`${fixture.key}.json`).toBe(file)
    }

    expect(offenders).toEqual([])
  })

  it('re-keys every fixture when the model changes', () => {
    const args = {
      systemPrompt: 'system',
      userMessage: 'user',
      markSchemeId: 'aqa-lang-p1',
      questionId: 'q2',
      caseId: 'syn-01',
    }

    const current = fixtureKey({ ...args, model: ANTHROPIC_MODEL })
    const retired = fixtureKey({ ...args, model: 'claude-sonnet-4-20250514' })

    expect(current).not.toBe(retired)
    expect(fixtureFiles()).not.toContain(`${retired}.json`)
  })
})
