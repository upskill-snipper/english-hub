// ─── Free-allowance limit resolver ──────────────────────────────────────────
//
// WHY THIS FILE EXISTS
// The requirement was "the founder can change the free allowance without a code
// change". Environment variables do NOT satisfy that on Vercel: changing an
// environment variable has no effect on an existing deployment until that
// deployment is rebuilt, so env alone removes the git push but not the deploy
// event. This repo has already been burned by numbers baked into constants that
// could not be changed without shipping.
//
// So every number is resolved through three layers, in this order:
//
//   1. `AppConfigSetting` row in Postgres  - changeable live, no deploy
//   2. environment variable                - changeable at the next deploy
//   3. the code default below              - the last resort
//
// Values are parsed and clamped AT CALL TIME. They are deliberately never
// captured in a module-level const: a const would be evaluated once per
// serverless instance and a live change would take effect only for instances
// that happened to cold-start afterwards, which is the same non-determinism the
// in-memory rate limiter had.
//
// An unparseable or out-of-range value LOGS and falls back to the next layer
// rather than throwing. A typo in the admin surface must not take a route down.
// ────────────────────────────────────────────────────────────────────────────

import { prisma } from '@/lib/prisma'

// ─── Code defaults ──────────────────────────────────────────────────────────
//
// These are DEFAULTS, not policy. They are the founder's call and are expected
// to be re-derived from the observed usage distribution after a week in shadow
// mode (see EH_FREE_ALLOWANCE_SHADOW_MODE below).

export interface LimitSpec {
  /** AppConfigSetting.key - the live, no-deploy override. */
  configKey: string
  /** Environment variable name - the deploy-time override. */
  envVar: string
  /** Code default - the last resort. */
  fallback: number
  /** Inclusive clamp. A value outside this range logs and falls back. */
  min: number
  max: number
}

export const LIMIT_SPECS = {
  /**
   * Free IELTS diagnostic, signed OUT, per rolling monthly bucket per IP hash.
   * One complete diagnostic costs 2 AI calls (one writing, one speaking), so 4
   * is two complete diagnostics from one address: one take plus one retake.
   */
  diagnosticSignedOut: {
    configKey: 'free_allowance.diagnostic.signed_out',
    envVar: 'EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_OUT',
    fallback: 4,
    min: 0,
    max: 1000,
  },
  /**
   * Free IELTS diagnostic, signed IN, per monthly bucket per user. Higher than
   * the signed-out number on purpose: signed-in is a known identity with an
   * email, it is the state we want, and it is the honest answer to the
   * shared-NAT problem (a classroom behind one public IP shares a single
   * IP-hash counter).
   */
  diagnosticSignedIn: {
    configKey: 'free_allowance.diagnostic.signed_in',
    envVar: 'EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN',
    fallback: 8,
    min: 0,
    max: 1000,
  },
  /** Controls the shape of the diagnostic period_key. */
  diagnosticWindowDays: {
    configKey: 'free_allowance.diagnostic.window_days',
    envVar: 'EH_FREE_DIAGNOSTIC_WINDOW_DAYS',
    fallback: 30,
    min: 1,
    max: 365,
  },
  /**
   * No-card trial AI ceiling, across the WHOLE trial (bucket
   * 'trial:<subscriptionId>'), not per month. 40 calls in seven days is roughly
   * six marked essays a day, more than any observed learner pattern.
   */
  trialAi: {
    configKey: 'free_allowance.trial_ai.limit',
    envVar: 'EH_TRIAL_AI_LIMIT',
    fallback: 40,
    min: 0,
    max: 10000,
  },
  /**
   * Sub-cap so a single scripted day cannot drain the whole trial ceiling
   * before anyone sees it.
   */
  trialAiDaily: {
    configKey: 'free_allowance.trial_ai.daily_limit',
    envVar: 'EH_TRIAL_AI_DAILY_LIMIT',
    fallback: 15,
    min: 0,
    max: 10000,
  },
} as const satisfies Record<string, LimitSpec>

export type LimitName = keyof typeof LIMIT_SPECS

export const FLAG_SPECS = {
  /**
   * Master switch. Set false to stop ENFORCING (counting continues) if the cap
   * misfires in production. This is the rollback that does not need a deploy.
   */
  enforced: {
    configKey: 'free_allowance.enforced',
    envVar: 'EH_FREE_ALLOWANCE_ENFORCED',
    fallback: true,
  },
  /**
   * When true the helper counts and logs what it WOULD have blocked but lets
   * the call through. Run one week in shadow before enforcing and set the real
   * numbers from the observed distribution rather than from an estimate.
   */
  shadowMode: {
    configKey: 'free_allowance.shadow_mode',
    envVar: 'EH_FREE_ALLOWANCE_SHADOW_MODE',
    fallback: false,
  },
} as const

export type FlagName = keyof typeof FLAG_SPECS

// ─── 60-second in-process cache over AppConfigSetting ───────────────────────
//
// One small read per instance per minute. The table is tiny (a handful of rows)
// so the whole thing is cached as a map rather than per key.

const CACHE_TTL_MS = 60000

interface ConfigCache {
  values: Map<string, string>
  loadedAt: number
}

let cache: ConfigCache | null = null
let inFlight: Promise<Map<string, string>> | null = null

/** Test seam: drop the cache so the next read hits the database again. */
export function resetConfigCache(): void {
  cache = null
  inFlight = null
}

async function loadConfig(): Promise<Map<string, string>> {
  const now = Date.now()
  if (cache && now - cache.loadedAt < CACHE_TTL_MS) return cache.values
  if (inFlight) return inFlight

  inFlight = (async () => {
    try {
      const rows = await prisma.appConfigSetting.findMany({
        select: { key: true, value: true },
      })
      const values = new Map<string, string>(
        rows.map((r: { key: string; value: string }) => [r.key, r.value] as const),
      )
      cache = { values, loadedAt: Date.now() }
      return values
    } catch (err) {
      // A config read failure must NOT take a route down - we fall through to
      // env and code defaults. This is deliberately different from
      // consumeAllowance(), which fails CLOSED on a database error: there the
      // failure mode is "spend money we cannot account for", here it is only
      // "use the previous number".
      console.error(
        '[usage/limits] AppConfigSetting read failed, falling back to env/defaults',
        err,
      )
      // Serve the stale cache if we have one; it is better than the default.
      if (cache) return cache.values
      // Cache the empty result briefly so a DB outage does not mean one query
      // per request.
      cache = { values: new Map<string, string>(), loadedAt: Date.now() }
      return cache.values
    } finally {
      inFlight = null
    }
  })()

  return inFlight
}

// ─── Parsing ────────────────────────────────────────────────────────────────

function parseIntegerIn(
  raw: string | undefined | null,
  spec: LimitSpec,
  source: string,
): number | null {
  if (raw === undefined || raw === null) return null
  const trimmed = raw.trim()
  if (trimmed === '') return null
  const n = Number(trimmed)
  if (!Number.isFinite(n) || !Number.isInteger(n)) {
    console.error(
      `[usage/limits] ${source} value for ${spec.configKey} is not an integer (${JSON.stringify(trimmed)}); ignoring it`,
    )
    return null
  }
  if (n < spec.min || n > spec.max) {
    console.error(
      `[usage/limits] ${source} value for ${spec.configKey} (${n}) is outside [${spec.min}, ${spec.max}]; ignoring it`,
    )
    return null
  }
  return n
}

function parseBoolean(raw: string | undefined | null, key: string, source: string): boolean | null {
  if (raw === undefined || raw === null) return null
  const v = raw.trim().toLowerCase()
  if (v === '') return null
  if (v === 'true' || v === '1' || v === 'yes' || v === 'on') return true
  if (v === 'false' || v === '0' || v === 'no' || v === 'off') return false
  console.error(
    `[usage/limits] ${source} value for ${key} is not a boolean (${JSON.stringify(raw)}); ignoring it`,
  )
  return null
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Resolve a numeric limit. Precedence: AppConfigSetting > env var > code
 * default. Never throws.
 */
export async function getLimit(name: LimitName): Promise<number> {
  const spec: LimitSpec = LIMIT_SPECS[name]

  const config = await loadConfig()
  const fromDb = parseIntegerIn(config.get(spec.configKey), spec, 'AppConfigSetting')
  if (fromDb !== null) return fromDb

  const fromEnv = parseIntegerIn(process.env[spec.envVar], spec, `env ${spec.envVar}`)
  if (fromEnv !== null) return fromEnv

  return spec.fallback
}

/**
 * Resolve a boolean flag. Precedence: AppConfigSetting > env var > code
 * default. Never throws.
 */
export async function getFlag(name: FlagName): Promise<boolean> {
  const spec = FLAG_SPECS[name]

  const config = await loadConfig()
  const fromDb = parseBoolean(config.get(spec.configKey), spec.configKey, 'AppConfigSetting')
  if (fromDb !== null) return fromDb

  const fromEnv = parseBoolean(process.env[spec.envVar], spec.configKey, `env ${spec.envVar}`)
  if (fromEnv !== null) return fromEnv

  return spec.fallback
}
