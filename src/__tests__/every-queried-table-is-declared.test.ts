import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Every Supabase table the code queries must be declared by a migration.
 *
 * WHY (19 September 2026)
 *
 * CLAUDE.md structural fact 3: `_migrations_applied` records an intention, not
 * reality. `scripts/apply-migrations.mjs` has a BASELINE_CUTOFF and inserted 66
 * files as applied without executing them. `scripts/check-schema-drift.mjs`
 * catches part of the damage - it compares what the migrations DECLARE against
 * what the database HAS.
 *
 * It cannot catch this: a table the CODE queries that no migration declares
 * either. Nothing is out of step, because nothing ever claimed the table would
 * exist. The drift script reports clean and the query fails in production.
 *
 * Auditing that gap on 19 September found EIGHT such tables, every one of them
 * absent from production, behind live routes:
 *
 *   student_progress       /api/progress
 *   assignments            /api/school/analytics, /school/dashboard
 *   assignment_submissions /api/school/analytics
 *   import_jobs            /api/school/import, /api/school/export/logins
 *   poems                  src/lib/recommendations/focus-on.ts
 *   reading_assessments    src/lib/recommendations/focus-on.ts
 *   games                  src/lib/analytics/aggregate-progress.ts
 *   quizzes                src/lib/analytics/aggregate-progress.ts
 *
 * They are NOT renames of the progress_* tables: `poems` is queried for
 * `slug, popularity, board`, a content catalogue, while `progress_poems` holds
 * `user_id, poem_slug, status`. Reconciling them is a design decision about
 * which of these features is actually wanted, not a defect fix, so the list
 * below is a recorded gap rather than something silently patched.
 *
 * The test's job is to stop it GROWING. A ninth undeclared table fails the
 * build; declaring one of these fails the build until its entry is removed.
 */

const SRC = join(process.cwd(), 'src')
const MIGRATIONS = join(process.cwd(), 'supabase', 'migrations')

/**
 * Tables the code queries that no migration creates, and that do not exist in
 * production. Counted read-only against the live database on 19 September
 * 2026: all eight absent.
 */
const KNOWN_UNDECLARED: Readonly<Record<string, string>> = {
  student_progress:
    'Queried by /api/progress and src/lib/progress/sync.ts. The progress_* tables created on 19 September cover per-activity progress; whether this aggregate table is still wanted is open.',
  assignments:
    'Queried by /api/school/analytics and /school/dashboard. Part of the school workspace, which has no live customer yet.',
  assignment_submissions:
    'Queried by /api/school/analytics for completion and score roll-ups. Pairs with `assignments`; neither exists, so the school analytics page has never had data.',
  import_jobs:
    'Queried by /api/school/import, its [jobId] route and /api/school/export/logins. The bulk-import feature cannot work without it.',
  poems:
    'Queried by src/lib/recommendations/focus-on.ts for `slug, popularity, board` - a content catalogue, not per-user progress, so progress_poems is not a substitute.',
  reading_assessments:
    'Queried by src/lib/recommendations/focus-on.ts. progress_reading_age holds the per-user rows; this appears to be the passage catalogue.',
  games:
    'Queried by src/lib/analytics/aggregate-progress.ts for `game, time_spent_seconds`; progress_games names those columns game_slug and total_time_seconds, so this is a different shape rather than a rename.',
  quizzes: 'Queried by src/lib/analytics/aggregate-progress.ts. Same situation as `games`.',
}

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      walk(full, out)
      continue
    }
    if (/\.(ts|tsx)$/.test(name)) out.push(full)
  }
  return out
}

/** Table names the code passes to a Supabase `.from('...')`. */
function queriedTables(): Set<string> {
  const found = new Set<string>()
  for (const file of walk(SRC)) {
    // Tests may reference fixture tables that are deliberately fictional.
    if (file.includes('__tests__')) continue
    const source = readFileSync(file, 'utf8')
    for (const m of source.matchAll(/\.from\(\s*'([a-z_][a-z0-9_]*)'\s*\)/g)) {
      found.add(m[1]!)
    }
  }
  return found
}

/** Table names any migration creates. */
function declaredTables(): Set<string> {
  const found = new Set<string>()
  for (const name of readdirSync(MIGRATIONS)) {
    if (!name.endsWith('.sql')) continue
    const sql = readFileSync(join(MIGRATIONS, name), 'utf8')
    for (const m of sql.matchAll(
      /create\s+table\s+(?:if\s+not\s+exists\s+)?"?(?:public\.)?"?([a-zA-Z_][a-zA-Z0-9_]*)"?/gi,
    )) {
      found.add(m[1]!.toLowerCase())
    }
    // Some migrations create a table inside a DO block with format(%I).
    for (const m of sql.matchAll(/ALTER\s+TABLE\s+(?:public\.)?"?([a-z_][a-z0-9_]*)"?/gi)) {
      found.add(m[1]!.toLowerCase())
    }
  }
  return found
}

const used = queriedTables()
const declared = declaredTables()
const undeclared = [...used].filter((t) => !declared.has(t)).sort()

describe('every table the code queries', () => {
  it('finds a meaningful number of queried tables, or this test guards nothing', () => {
    // If the scanner breaks, `used` goes empty and every assertion below
    // passes vacuously. This is the canary.
    expect(used.size).toBeGreaterThan(30)
    expect(declared.size).toBeGreaterThan(30)
  })

  it('is declared by a migration, except the eight recorded gaps', () => {
    const unexpected = undeclared.filter((t) => !(t in KNOWN_UNDECLARED))
    expect(
      unexpected,
      `queried but never declared by any migration, and not a recorded gap:\n  ${unexpected.join('\n  ')}\n` +
        'Either add the migration, or add an entry to KNOWN_UNDECLARED explaining why it is absent.',
    ).toEqual([])
  })

  it('has exactly the eight gaps found on 19 September, no more', () => {
    // Pinned so the list cannot grow quietly. A new undeclared table is a new
    // feature written against a table nobody created.
    expect(undeclared.sort()).toEqual(Object.keys(KNOWN_UNDECLARED).sort())
  })

  it('fails when one of the gaps is finally closed, so the record is updated', () => {
    // Declaring `import_jobs` without removing it here would leave a comment
    // claiming the bulk import is broken after it had been fixed.
    for (const t of Object.keys(KNOWN_UNDECLARED)) {
      expect(declared.has(t), `${t} is now declared - remove it from KNOWN_UNDECLARED`).toBe(false)
    }
  })

  it('explains every gap well enough to act on', () => {
    for (const [table, why] of Object.entries(KNOWN_UNDECLARED)) {
      expect(why.length, `${table} has no explanation`).toBeGreaterThan(60)
    }
  })
})

// ─── The progress tables specifically ───────────────────────────────────

describe('the progress tables', () => {
  it('are declared, after being recorded as applied but never executed', () => {
    // 20260512_progress_tables.sql was one of the 66 files the BASELINE_CUTOFF
    // inserted into _migrations_applied without running. The four tables did
    // not exist while the tracker said they did, so /api/progress/poems and
    // its siblings queried nothing on every call - which is why the
    // cancellation page's "Progress tracking" line described a dead feature.
    for (const t of [
      'progress_poems',
      'progress_games',
      'progress_quizzes',
      'progress_reading_age',
    ]) {
      expect(declared.has(t), `${t} is not declared by any migration`).toBe(true)
    }
  })

  it('has a migration that takes the anon grants away', () => {
    const sql = readFileSync(join(MIGRATIONS, '20260919_progress_tables_revoke_anon.sql'), 'utf8')
    // These hold a named child's reading age, quiz scores and game history.
    expect(sql).toContain('REVOKE ALL ON public.%I FROM anon')
    expect(sql).toContain('ENABLE ROW LEVEL SECURITY')
  })
})
