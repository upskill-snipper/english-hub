// ─── Backfill profiles from auth.users metadata ─────────────────────────────
//
// Companion to 20260918_handle_new_user_reads_signup_metadata.sql. Every
// signup before 18 September 2026 lost its profile write (see that migration's
// header), but Supabase kept whatever the page put into signUp options.data:
// on 18 September that was `role` for 24 users and `utm_*` for 11. This script
// copies those back into public.profiles where the profile still holds the
// column default. Date of birth was never in the metadata and cannot be
// recovered; those users are asked for it at the point of use.
//
// Report-only by default. Pass --apply to write. Prints counts and ids only,
// never an email address. Run from the repo root:
//
//   node --env-file=.env.local scripts/backfill-profiles-from-auth-metadata.mjs
//   node --env-file=.env.local scripts/backfill-profiles-from-auth-metadata.mjs --apply
// ────────────────────────────────────────────────────────────────────────────

import pg from 'pg'

const APPLY = process.argv.includes('--apply')
const url = process.env.DIRECT_URL || process.env.DATABASE_URL
if (!url) {
  console.error('No DIRECT_URL or DATABASE_URL in the environment.')
  process.exit(1)
}

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } })
await client.connect()
try {
  const { rows } = await client.query(`
    SELECT p.id,
           p.role AS profile_role,
           u.raw_user_meta_data->>'role' AS meta_role,
           p.utm_source, p.utm_medium, p.utm_campaign,
           NULLIF(TRIM(u.raw_user_meta_data->>'utm_source'), '')   AS meta_source,
           NULLIF(TRIM(u.raw_user_meta_data->>'utm_medium'), '')   AS meta_medium,
           NULLIF(TRIM(u.raw_user_meta_data->>'utm_campaign'), '') AS meta_campaign
    FROM public.profiles p
    JOIN auth.users u ON u.id = p.id
  `)

  const roleFixes = rows.filter(
    (r) => r.profile_role === 'student' && (r.meta_role === 'teacher' || r.meta_role === 'parent'),
  )
  const utmFixes = rows.filter(
    (r) =>
      (r.utm_source === null && r.meta_source) ||
      (r.utm_medium === null && r.meta_medium) ||
      (r.utm_campaign === null && r.meta_campaign),
  )

  console.log(`profiles joined to auth users: ${rows.length}`)
  console.log(`role corrections (student -> teacher/parent from metadata): ${roleFixes.length}`)
  for (const r of roleFixes) console.log(`  ${r.id}  student -> ${r.meta_role}`)
  console.log(`attribution backfills (utm_* from metadata): ${utmFixes.length}`)
  for (const r of utmFixes) console.log(`  ${r.id}  source=${r.meta_source ?? '-'} medium=${r.meta_medium ?? '-'} campaign=${r.meta_campaign ?? '-'}`)

  if (!APPLY) {
    console.log('\nReport only. Re-run with --apply to write these changes.')
  } else {
    await client.query('BEGIN')
    let n = 0
    for (const r of roleFixes) {
      await client.query(`UPDATE public.profiles SET role = $2, updated_at = NOW() WHERE id = $1 AND role = 'student'`, [r.id, r.meta_role])
      n++
    }
    for (const r of utmFixes) {
      await client.query(
        `UPDATE public.profiles
            SET utm_source   = COALESCE(utm_source, LEFT($2, 200)),
                utm_medium   = COALESCE(utm_medium, LEFT($3, 200)),
                utm_campaign = COALESCE(utm_campaign, LEFT($4, 200)),
                updated_at   = NOW()
          WHERE id = $1`,
        [r.id, r.meta_source, r.meta_medium, r.meta_campaign],
      )
      n++
    }
    await client.query('COMMIT')
    console.log(`\nApplied ${n} update(s).`)
  }
} catch (err) {
  await client.query('ROLLBACK').catch(() => {})
  console.error('Failed:', err instanceof Error ? err.message : err)
  process.exitCode = 1
} finally {
  await client.end()
}
