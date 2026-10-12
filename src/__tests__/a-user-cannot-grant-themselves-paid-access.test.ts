import { describe, expect, it } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A signed-in user can edit their own name, year group and board, and
 * nothing that grants access, records an age or records consent.
 *
 * THE EXPOSURE (12 October 2026). Supabase's default grants gave
 * `authenticated` UPDATE on every column of public.profiles, and the update
 * policy restricts rows, not columns. Anyone signed in could set their own
 * subscription_status to 'pro' (which is all resolvePaidAccess reads), make
 * themselves an adult, or change their role, from the browser console with
 * the public key. Reproduced in a local Postgres with production's grants and
 * policies before the fix, and refused after it.
 *
 * supabase/migrations/20261012_profiles_users_edit_only_their_details.sql
 * now grants UPDATE on five columns only. These tests pin that list from both
 * ends: the migration grants nothing that matters, and every user-run write
 * in the app stays inside the list, so a new field on the /account form fails
 * here rather than in production with "permission denied".
 *
 * MUTATIONS RUN, each verified to have altered the file first: adding
 * subscription_status to the GRANT fails the first case; adding
 * school_name to the /account form's update fails the second.
 */

const root = process.cwd()
const read = (rel: string) => readFileSync(join(root, rel), 'utf8')

const MIGRATION = 'supabase/migrations/20261012_profiles_users_edit_only_their_details.sql'

function grantedColumns(sql: string): string[] {
  const code = sql
    .split('\n')
    .filter((line) => !line.trim().startsWith('--'))
    .join('\n')
  const m = code.match(/GRANT\s+UPDATE\s*\(([^)]*)\)\s*ON\s+public\.profiles\s+TO\s+authenticated/i)
  if (!m) throw new Error('no column GRANT on public.profiles found')
  return m[1].split(',').map((c) => c.trim())
}

/** The keys of every `.from('profiles') ... .update({ ... })` in a source file. */
function profileUpdateKeys(source: string): string[][] {
  const out: string[][] = []
  const re = /\.from\(\s*'profiles'\s*\)\s*\.update\(\s*\{([\s\S]*?)\}\s*\)/g
  for (const m of source.matchAll(re)) {
    out.push([...m[1].matchAll(/([a-z_]+)\s*:/g)].map((k) => k[1]))
  }
  return out
}

describe('what a signed-in user may update on their profile', () => {
  const sql = read(MIGRATION)
  const granted = grantedColumns(sql)

  it('takes the table-wide grant away and gives back only the details users edit', () => {
    expect(sql).toMatch(/REVOKE\s+UPDATE\s+ON\s+public\.profiles\s+FROM\s+anon,\s*authenticated/i)
    expect([...granted].sort()).toEqual(
      ['exam_board', 'full_name', 'stripe_customer_id', 'updated_at', 'year_group'].sort(),
    )
    for (const forbidden of [
      'subscription_status',
      'subscription_end_date',
      'ielts_status',
      'role',
      'date_of_birth',
      'is_minor',
      'parent_guardian_email',
      'data_transfer_consent_qa',
      'data_transfer_consent_qa_at',
      'email',
      'id',
    ]) {
      expect(granted, `${forbidden} must stay server-only`).not.toContain(forbidden)
    }
  })

  it('covers every write the app makes as the user', () => {
    // The three user-privileged writers found on 12 October 2026. Anything
    // else that writes profiles uses the service role.
    const writers = [
      'src/app/account/page.tsx',
      'src/app/api/stripe/checkout/route.ts',
      'src/app/api/promo/redeem/route.ts',
    ]
    for (const file of writers) {
      const updates = profileUpdateKeys(read(file))
      expect(
        updates.length,
        `${file} no longer updates profiles; revisit this list`,
      ).toBeGreaterThan(0)
      for (const keys of updates) {
        for (const key of keys) expect(granted, `${file} writes ${key}`).toContain(key)
      }
    }
  })

  it('is the latest word on profiles UPDATE grants', () => {
    // A later migration that re-grants UPDATE on the whole table would undo
    // this silently, because column privileges are only checked when no
    // table-wide grant exists.
    const later = readdirSync(join(root, 'supabase/migrations'))
      .filter(
        (f) => f.endsWith('.sql') && f > '20261012_profiles_users_edit_only_their_details.sql',
      )
      .map((f) => read(`supabase/migrations/${f}`))
    for (const body of later) {
      expect(body).not.toMatch(/GRANT\s+(ALL|UPDATE)\s+ON\s+(TABLE\s+)?public\.profiles\b/i)
    }
  })
})
