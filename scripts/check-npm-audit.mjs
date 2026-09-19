// ─── Fail a push on a NEW production advisory ───────────────────────────────
//
// WHY (SEC-1, 19 September 2026). Two critical Next.js advisories sat unpatched
// because nothing looked. `npm audit` is only useful if somebody runs it, and
// a bare `npm audit` in a hook is worse than nothing here: it exits non-zero on
// three accepted residuals, so it would fail every push from the first day and
// be bypassed by the second. A gate that cries wolf is a gate that gets a
// `HUSKY=0` alias written for it.
//
// So this compares against scripts/npm-audit-known.json and fails only on
// something NEW. The accepted three carry their reasons in that file.
//
// It also reports a pinned advisory that NO LONGER FIRES, because an allowlist
// that outlives its contents is how a checker starts lying: it goes on excusing
// something that is gone, and quietly excuses its return.
//
// PRODUCTION ONLY (`--omit=dev`). A vulnerability in a test runner is not a
// vulnerability in the product, and including dev dependencies would bury the
// signal under tooling churn.
//
// OFFLINE IS NOT A FAILURE. npm audit needs the registry. On a train, the right
// behaviour is to say so and let the push through, not to block work over a
// missing network. Anything else teaches people to skip the whole hook.
//
//   node scripts/check-npm-audit.mjs
//
// Measured at about 1.4 seconds against the ~20 seconds the pre-push gate
// already costs.

import { exec } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { promisify } from 'node:util'

const run = promisify(exec)
const KNOWN_FILE = 'scripts/npm-audit-known.json'

/**
 * npm audit exits non-zero whenever it finds anything, so the JSON on stdout is
 * the result and the exit code is not.
 *
 * `exec` with a command string, not `execFile` with an args array: on Windows
 * npm is `npm.cmd`, which execFile cannot launch without a shell, and passing
 * an args array through a shell is what Node now deprecates. The first version
 * of this used execFile and failed on every Windows run - reporting "offline"
 * and exiting 0, which is precisely the shape of fault this repository keeps
 * finding. Hence the skip message below says which failure it was.
 */
async function audit() {
  try {
    const { stdout } = await run('npm audit --omit=dev --json', {
      maxBuffer: 32 * 1024 * 1024,
      timeout: 60_000,
    })
    return { report: JSON.parse(stdout) }
  } catch (error) {
    if (error?.stdout) {
      try {
        return { report: JSON.parse(error.stdout) }
      } catch (parseError) {
        return { why: `npm produced output that is not JSON: ${parseError.message}` }
      }
    }
    return { why: error?.message ?? 'npm produced no output' }
  }
}

const { report, why } = await audit()

if (!report) {
  // Named, not shrugged at. A skip that always says the same thing is
  // indistinguishable from a check that has been broken for months.
  console.log(`npm audit: SKIPPED, could not run. Reason: ${why}`)
  console.log('  If this is not a network problem, the check is broken and is guarding nothing.')
  process.exit(0)
}

const known = JSON.parse(readFileSync(KNOWN_FILE, 'utf8'))
const accepted = new Map(known.accepted.map((a) => [a.id, a]))

/** Every advisory currently reported, keyed by its GHSA id. */
const found = new Map()
for (const [name, vuln] of Object.entries(report.vulnerabilities ?? {})) {
  for (const via of vuln.via ?? []) {
    if (typeof via !== 'object') continue
    const id = (via.url ?? '').split('/').pop()
    if (!id) continue
    if (!found.has(id)) found.set(id, { id, package: name, severity: via.severity, title: via.title })
  }
}

const isNew = [...found.values()].filter((f) => !accepted.has(f.id))
const goneAway = [...accepted.keys()].filter((id) => !found.has(id))

if (goneAway.length) {
  console.log('')
  console.log('npm audit NOTE: these are pinned in ' + KNOWN_FILE + ' but no longer fire.')
  console.log('  Delete the entry, so the list keeps meaning what it says:')
  for (const id of goneAway) console.log(`    ${id}  (${accepted.get(id).package})`)
}

if (isNew.length) {
  console.log('')
  console.log(`npm audit FAILED: ${isNew.length} new production advisor${isNew.length === 1 ? 'y' : 'ies'}.`)
  for (const f of isNew) {
    console.log(`  [${f.severity}] ${f.package}: ${f.title}`)
    console.log(`         https://github.com/advisories/${f.id}`)
  }
  console.log('')
  console.log('  Patch it, or - if it is genuinely not reachable - add it to')
  console.log(`  ${KNOWN_FILE} with the reason, not just the id.`)
  process.exit(1)
}

console.log(
  `npm audit OK: ${found.size} production advisor${found.size === 1 ? 'y' : 'ies'}, all accepted in ${KNOWN_FILE}.`,
)
