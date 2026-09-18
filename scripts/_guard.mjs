// ─── Production write guard for scripts/ ─────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, MAINT-6)
//
// `.env.local` in this repository points at the PRODUCTION Supabase project and
// carries the service-role key. RLS does not apply to anything run with it.
// Several scripts in `scripts/` load that file by default and write.
//
// `scripts/seed.ts` was the worst of them: it upserts an administrator account
// into whatever database is loaded, and until today the password was a string
// literal in a PUBLIC repository. Running `npx tsx scripts/seed.ts` in a
// checkout with the normal env file would have put a known-credential admin
// into the live database holding children's data. Nothing stopped it. CLAUDE.md
// warns about it in prose - "grep before running anything" - which is a warning,
// not a guard.
//
// ── THE SHAPE, AND WHY IT IS THIS SHAPE ─────────────────────────────────────
//
// TWO KEYS. Against production a script needs BOTH `EH_ALLOW_PRODUCTION_WRITE=1`
// in the environment AND `--apply` on the command line. Either alone yields
// plan mode. One key is a habit; two is a decision.
//
// IT RETURNS, IT NEVER EXITS. An earlier draft had plan mode call
// `process.exit(0)`. That makes the guard untestable - a function that exits
// cannot return a value to assert on, and under vitest it kills the worker. The
// guard reports; the script decides what to do about it.
//
// IT IS SYNCHRONOUS, and is called at MODULE SCOPE immediately above the client
// construction. Nine of the eleven scripts build their Prisma or Supabase
// client at module scope, above `main()`, so a top-of-main() call would run
// after the connection already existed.
//
// FAIL CLOSED ON THE UNKNOWN. A host this cannot classify is treated as
// production. The failure mode of guessing "probably local" is writing to a
// customer database; the failure mode of guessing "probably production" is an
// operator typing one more flag.
// ────────────────────────────────────────────────────────────────────────────

/**
 * Supabase project refs and hosts that are PRODUCTION.
 *
 * Listed explicitly rather than inferred. A rule like "contains supabase.co"
 * would treat a future staging project as production (harmless) but a rule like
 * "does not contain localhost" would treat a mis-set variable as safe, which is
 * the direction that loses data.
 */
const PRODUCTION_MARKERS = [
  'arjjzkudncwqprpyamkw', // the live Supabase project ref
  'aws-1-ap-south-1.pooler.supabase.com', // its pooler host
]

/** Hosts that are unambiguously not production. */
const LOCAL_MARKERS = ['localhost', '127.0.0.1', '0.0.0.0', 'host.docker.internal']

/**
 * Where is this script pointed?
 *
 * Reads the same variables the scripts themselves use, in the order they
 * resolve them.
 */
/** @param {Record<string, string | undefined>} [env] */
export function resolveTarget(env = process.env) {
  const raw =
    env.DATABASE_URL ||
    env.DIRECT_URL ||
    env.NEXT_PUBLIC_SUPABASE_URL ||
    env.SUPABASE_URL ||
    ''

  let host = raw
  try {
    host = new URL(raw).host || raw
  } catch {
    // Not a URL (or empty). Fall through with the raw value; the classifier
    // below treats an unrecognised value as production.
  }

  const haystack = `${raw} ${host}`.toLowerCase()

  if (PRODUCTION_MARKERS.some((m) => haystack.includes(m))) {
    return { host, kind: 'production' }
  }
  if (LOCAL_MARKERS.some((m) => haystack.includes(m))) {
    return { host, kind: 'local' }
  }
  // Includes the empty case: a script with no DATABASE_URL set has not proved
  // it is safe, it has only failed to say.
  return { host: host || '(unset)', kind: 'unknown' }
}

/**
 * Decide whether this run may write.
 *
 * @param {{ script?: string, argv?: string[], env?: Record<string, string | undefined> }} [options]
 * @returns `{ mode: 'apply' | 'plan', kind, host, reason }`. NEVER exits, never
 *          throws - the caller owns what happens next, and the caller is the
 *          only thing that knows what "not writing" looks like for it.
 */
export function assertWritableTarget({
  script = '',
  argv = process.argv,
  env = process.env,
} = {}) {
  const { host, kind } = resolveTarget(env)
  const hasApplyFlag = argv.includes('--apply')
  const hasEnvKey = env.EH_ALLOW_PRODUCTION_WRITE === '1'

  if (kind === 'local') {
    return { mode: 'apply', kind, host, reason: 'target is local' }
  }

  if (hasApplyFlag && hasEnvKey) {
    return {
      mode: 'apply',
      kind,
      host,
      reason: 'both keys turned: --apply and EH_ALLOW_PRODUCTION_WRITE=1',
    }
  }

  const missing = []
  if (!hasEnvKey) missing.push('EH_ALLOW_PRODUCTION_WRITE=1')
  if (!hasApplyFlag) missing.push('--apply')

  return {
    mode: 'plan',
    kind,
    host,
    reason: `${kind === 'unknown' ? 'unrecognised target, treated as production' : 'production target'}; missing ${missing.join(' and ')}`,
    script,
  }
}

/**
 * The line every gated script prints when it declines to write.
 *
 * Shared so the message is identical everywhere and an operator learns it once.
 */
export function describePlanMode(result, script) {
  return [
    '',
    `REFUSING TO WRITE. ${script ?? result.script ?? 'This script'} is pointed at ${result.host}.`,
    `  ${result.reason}.`,
    '',
    '  To run it against this target, turn both keys:',
    `    EH_ALLOW_PRODUCTION_WRITE=1 npx tsx ${script ?? result.script ?? '<script>'} --apply`,
    '',
    '  If you did not expect this to be production, check which env file is loaded',
    '  before doing anything else. .env.local in this repo IS production.',
    '',
  ].join('\n')
}
