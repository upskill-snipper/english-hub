import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import { resolveFeatureFlags, getFeatureFlagDefaults } from '@/config/feature-flags'

/**
 * The flags are release switches, not an experiment system (ANA-10).
 *
 * THE DEFECT (19 September 2026). Nothing in the code was broken - the problem
 * was what the code implied. `src/config/feature-flags.ts` is a static
 * build-time map whose docblock said "For Wave 4 we do not yet wire a remote
 * provider (PostHog, Statsig, etc.)". That reads as a scheduling note about
 * something imminent. It is not: there is no variant assignment anywhere in the
 * repository, no bucketing input reaches the resolver, and wiring one is gated
 * on a compliance decision about processing children's data, not on capacity.
 *
 * A growth plan that assumed A/B testing existed would have been measuring
 * nothing, and attributing week-on-week movement to variants that do not exist.
 *
 * This file pins the absence, so that if someone does wire a provider they have
 * to come here and delete an assertion on purpose - at which point they will
 * read why it was gated.
 */

const ROOT = process.cwd()
const SOURCE = readFileSync(join(ROOT, 'src/config/feature-flags.ts'), 'utf8')

describe('the flag resolver', () => {
  it('takes no user identity, so it cannot bucket anybody', () => {
    // The signature is the whole argument. If a userId ever appears here,
    // something has started assigning variants.
    expect(resolveFeatureFlags.length).toBeLessThanOrEqual(1)
    const sig = SOURCE.slice(SOURCE.indexOf('export function resolveFeatureFlags'), -1).slice(
      0,
      200,
    )
    expect(sig).not.toMatch(/userId|user_id|supabaseUserId|hash|bucket|seed/i)
  })

  it('returns the same flags for every caller with the same overrides', () => {
    // Determinism is what makes these release switches rather than variants.
    expect(resolveFeatureFlags({})).toEqual(resolveFeatureFlags({}))
  })

  it('only ever narrows, never enables', () => {
    // The two opt-outs must not be able to turn a flag ON for one user - that
    // would be per-user divergence by another name.
    const defaults = getFeatureFlagDefaults()
    const resolved = resolveFeatureFlags({ marketingEnabled: false })
    for (const [key, value] of Object.entries(resolved)) {
      if (value === true) {
        expect(
          defaults[key as keyof typeof defaults],
          `${key} was enabled by the resolver rather than by the default`,
        ).toBe(true)
      }
    }
  })

  it('every flag is a boolean, not a variant name', () => {
    for (const [key, value] of Object.entries(getFeatureFlagDefaults())) {
      expect(typeof value, `${key} is not a boolean`).toBe('boolean')
    }
  })
})

describe('the codebase as a whole', () => {
  function sourceFiles(dir: string, out: string[] = []): string[] {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) {
        if (entry === 'node_modules' || entry === 'generated' || entry === '__tests__') continue
        sourceFiles(full, out)
      } else if (/\.tsx?$/.test(entry) && !/\.test\.tsx?$/.test(entry)) {
        out.push(full)
      }
    }
    return out
  }

  /** Strip comments. `$` with the m flag needs no literal newline. */
  function code(source: string): string {
    return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
  }

  it('contains no variant-assignment machinery', () => {
    // Deliberately narrow patterns: `variant` alone matches framer-motion props
    // on hundreds of components, and a test that fails on those gets deleted
    // within a week.
    const PATTERNS = [
      /\bassignVariant\b/,
      /\bexperimentVariant\b/,
      /\bfeatureFlagVariant\b/,
      /posthog\.(getFeatureFlag|isFeatureEnabled|onFeatureFlags)\b/,
    ]

    /**
     * Named, with reasons. This one was flagged by the first version of the
     * scan and is a false positive, which is worth recording so the next person
     * to see a hit knows the difference.
     */
    const ALLOWED: Record<string, string> = {
      'src/app/dashboard/page.tsx':
        'a local getVariant() that picks a Badge COLOUR from a status string - nothing to do with flags',
    }

    const offenders: string[] = []
    for (const file of sourceFiles(join(ROOT, 'src'))) {
      const rel = relative(ROOT, file).split(/[\\/]/).join('/')
      if (rel in ALLOWED) continue
      if (PATTERNS.some((re) => re.test(code(readFileSync(file, 'utf8'))))) {
        offenders.push(rel)
      }
    }

    expect(
      offenders,
      'variant assignment has appeared. That means identified users - mostly ' +
        'children here - are being bucketed, which needs a DPA and a settled ' +
        'consent position first. Update the docblock and this test deliberately.',
    ).toEqual([])
  })

  it('scans a realistic number of files', () => {
    expect(sourceFiles(join(ROOT, 'src')).length).toBeGreaterThan(400)
  })

  it('has no experiments module', () => {
    expect(existsSync(join(ROOT, 'src/lib/experiments'))).toBe(false)
    expect(existsSync(join(ROOT, 'src/lib/experiments.ts'))).toBe(false)
  })
})

describe('the docblock', () => {
  it('says plainly that this is not an experiment system', () => {
    expect(SOURCE).toMatch(/NOT AN EXPERIMENT SYSTEM/)
  })

  it('no longer implies a provider is merely pending a sprint', () => {
    expect(SOURCE).not.toMatch(/For Wave 4 we do not yet wire a remote provider/)
  })

  it('records that the gate is compliance, not capacity', () => {
    // The reason this matters more than tidiness: bucketing identified users is
    // processing, and most of these users are children.
    expect(SOURCE).toMatch(/dpaStatus|DPA status|consent position/i)
  })
})
