import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Every scheduled job, held to one shape (REL-8).
 *
 * THE DEFECT THIS GUARDS (19 September 2026). The only structural test over
 * scheduled work covered two of the sixteen routes - the two Trustpilot ones
 * that were found answering 405 to every run for five months. The other
 * fourteen were unguarded, and thirteen of them carried a hand-copied
 * `CRON_SECRET` comparison rather than the shared helper written to end
 * exactly that class of bug. `/api/cron/trustpilot-retention-invite` had no
 * observability wrapper at all, so a throw inside it was read by nothing.
 *
 * A guard over two routes out of sixteen is the shape this codebase keeps
 * finding: it reports green for a property that holds in one eighth of the
 * places it is claimed. This one covers every scheduled path in vercel.json
 * and every cron route file, in both directions.
 *
 * THE SCHEDULE ASSERTION IS THE ONE THAT NEEDED CARE. Comparing schedule
 * strings finds `15 4 * * *` twice and misses `0 4 * * *` against
 * `0 4 * * 0`, which is the collision that matters: those two are the jobs
 * that delete children's accounts, and they met every Sunday.
 */

const ROOT = process.cwd()
const CRON_DIR = join(ROOT, 'src/app/api/cron')

interface CronEntry {
  path: string
  schedule: string
}

const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8')) as {
  crons: CronEntry[]
}

/** Read a route file by its scheduled path, or null when there is none. */
function routeSource(cronPath: string): string | null {
  const file = join(ROOT, 'src/app', `${cronPath}/route.ts`)
  return existsSync(file) ? readFileSync(file, 'utf8') : null
}

/** Source with comments removed, so an assertion cannot match its own docblock. */
function code(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
}

const scheduled = vercel.crons.map((c) => ({ ...c, source: routeSource(c.path) }))

describe('the scheduled paths and the route files', () => {
  it('there are some, or every assertion below is vacuous', () => {
    expect(vercel.crons.length).toBeGreaterThanOrEqual(16)
  })

  it.each(vercel.crons.map((c) => c.path))('%s has a route file', (path) => {
    expect(routeSource(path), `${path} is scheduled but has no route.ts`).not.toBeNull()
  })

  it('every cron route file is actually scheduled', () => {
    // The other direction. A route nobody schedules is dead code that reads
    // like working machinery, which is how `/api/cron/weekly-reports` sat in
    // the tree returning 401 to its own schedule.
    const scheduledPaths = new Set(vercel.crons.map((c) => c.path))
    const unscheduled = readdirSync(CRON_DIR).filter(
      (name) =>
        existsSync(join(CRON_DIR, name, 'route.ts')) && !scheduledPaths.has(`/api/cron/${name}`),
    )
    expect(unscheduled, 'these cron routes exist but nothing runs them').toEqual([])
  })
})

describe('every scheduled route', () => {
  it.each(scheduled.map((s) => [s.path, s.source] as const))(
    '%s answers the GET that Vercel Cron sends',
    (path, source) => {
      // Two routes exported only POST. Vercel Cron issues GET, so every run
      // was a 405 - and a 405 never reaches the observability wrapper,
      // because the handler it wraps is never entered.
      expect(source, `${path} has no route file`).not.toBeNull()
      expect(code(source!), `${path} does not export GET`).toMatch(
        /export (async function GET|const GET)/,
      )
    },
  )

  it.each(scheduled.map((s) => [s.path, s.source] as const))(
    '%s authenticates through the shared helper',
    (path, source) => {
      expect(code(source!), `${path} does not use authoriseCronRequest`).toContain(
        'authoriseCronRequest(',
      )
    },
  )

  it.each(scheduled.map((s) => [s.path, s.source] as const))(
    '%s rolls no comparison of its own',
    (path, source) => {
      // Matching the CALL, not the word, so the helper's own explanatory
      // comments may still name it. Three of these copies omitted the length
      // check, and `timingSafeEqual` throws on unequal lengths - a 500 where
      // an honest 401 belonged.
      expect(code(source!), `${path} compares CRON_SECRET by hand`).not.toMatch(
        /timingSafeEqual\s*\(/,
      )
    },
  )

  it.each(
    scheduled
      .filter((s) => s.path.startsWith('/api/cron/'))
      .map((s) => [s.path, s.source] as const),
  )('%s reports through runCron', (path, source) => {
    // The wrapper is what turns a throw into a Sentry event and a duration,
    // and since REL-8 it is also what takes the run lock. A cron outside it
    // fails into a 500 that nothing reads.
    expect(code(source!), `${path} does not call runCron`).toMatch(/runCron\(/)
  })
})

// ─── Schedules ──────────────────────────────────────────────────────────────

/** Expand one cron field into the set of values it fires on. */
function expand(field: string, min: number, max: number): Set<number> {
  const out = new Set<number>()
  for (const part of field.split(',')) {
    const [range, stepText] = part.split('/')
    const step = stepText ? Number(stepText) : 1
    let lo = min
    let hi = max
    if (range !== '*') {
      const bounds = range.split('-').map(Number)
      lo = bounds[0]
      hi = bounds.length > 1 ? bounds[1] : bounds[0]
    }
    for (let v = lo; v <= hi; v += step) out.add(v)
  }
  return out
}

function overlaps(a: Set<number>, b: Set<number>): boolean {
  for (const v of a) if (b.has(v)) return true
  return false
}

interface Parsed {
  minute: Set<number>
  hour: Set<number>
  dom: Set<number>
  month: Set<number>
  dow: Set<number>
}

function parse(schedule: string): Parsed {
  const [minute, hour, dom, month, dow] = schedule.trim().split(/\s+/)
  return {
    minute: expand(minute, 0, 59),
    hour: expand(hour, 0, 23),
    dom: expand(dom, 1, 31),
    month: expand(month, 1, 12),
    dow: expand(dow, 0, 6),
  }
}

/** Can these two schedules fire in the same minute? */
function canCollide(a: string, b: string): boolean {
  const x = parse(a)
  const y = parse(b)
  return (
    overlaps(x.minute, y.minute) &&
    overlaps(x.hour, y.hour) &&
    overlaps(x.month, y.month) &&
    overlaps(x.dom, y.dom) &&
    overlaps(x.dow, y.dow)
  )
}

describe('the schedule table', () => {
  it('parses, or the collision assertion below is vacuous', () => {
    // If `expand` silently produced empty sets, nothing could ever overlap and
    // the test would pass by doing nothing.
    expect(canCollide('0 4 * * *', '0 4 * * 0')).toBe(true)
    expect(canCollide('0 4 * * *', '1 4 * * *')).toBe(false)
    expect(canCollide('0 */12 * * *', '0 12 * * *')).toBe(true)
    expect(parse('0 */12 * * *').hour.size).toBe(2)
  })

  it('never fires two jobs in the same minute', () => {
    // This is the assertion the string-comparison version could not make.
    // `0 4 * * *` (data-retention) and `0 4 * * 0` (dormancy-purge) are not
    // equal as strings and collided every Sunday - and those two are the
    // pair that delete dormant children's accounts.
    const collisions: string[] = []
    for (let i = 0; i < vercel.crons.length; i++) {
      for (let j = i + 1; j < vercel.crons.length; j++) {
        const a = vercel.crons[i]
        const b = vercel.crons[j]
        if (canCollide(a.schedule, b.schedule)) {
          collisions.push(`${a.path} (${a.schedule}) and ${b.path} (${b.schedule})`)
        }
      }
    }
    expect(collisions).toEqual([])
  })
})

// ─── The two that delete children's accounts ────────────────────────────────

describe('the child-deletion jobs', () => {
  const RETENTION = readFileSync(join(ROOT, 'src/app/api/cron/data-retention/route.ts'), 'utf8')
  const PURGE = readFileSync(join(ROOT, 'src/app/api/cron/dormancy-purge/route.ts'), 'utf8')

  it('share one lock name, not merely their own', () => {
    // Moving the schedules apart narrows the window. Only a shared lock name
    // closes it, and `purgeDormantAccount` uses a transaction while the
    // dormancy pass inside data-retention does not.
    for (const [name, src] of [
      ['data-retention', RETENTION],
      ['dormancy-purge', PURGE],
    ] as const) {
      expect(code(src), `${name} does not take the shared lock`).toContain(
        'lockName: CHILD_DELETION_LOCK',
      )
    }
  })

  it('import that name from one place, so the two cannot drift apart', () => {
    for (const src of [RETENTION, PURGE]) {
      expect(src).toContain("from '@/lib/cron/lock'")
    }
  })
})
