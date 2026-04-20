// Apply the quiz_questions SELECT-policy consolidation migration against prod.
require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const MIGRATION_PATH = path.join(
  __dirname,
  '..',
  'supabase',
  'migrations',
  '20260420_consolidate_quiz_questions_select.sql'
);

(async () => {
  const sql = fs.readFileSync(MIGRATION_PATH, 'utf8');
  const client = new Client({ connectionString: process.env.DIRECT_URL });
  await client.connect();
  try {
    const beforeRes = await client.query(`
      SELECT policyname, cmd FROM pg_policies
      WHERE schemaname='public' AND tablename='quiz_questions'
      ORDER BY policyname;
    `);
    console.log('=== BEFORE ===');
    for (const r of beforeRes.rows) console.log(`  ${r.policyname} [${r.cmd}]`);
    const beforeSelectCount = beforeRes.rows.filter(r => r.cmd === 'SELECT').length;
    console.log(`  (SELECT policy count: ${beforeSelectCount})`);

    console.log('\n=== APPLYING MIGRATION ===');
    await client.query('BEGIN');
    await client.query(sql);
    await client.query('COMMIT');
    console.log('  applied.');

    const afterRes = await client.query(`
      SELECT policyname, cmd, pg_get_expr(polqual, polrelid) AS using_expr
      FROM pg_policies
      JOIN pg_policy ON pg_policy.polname = pg_policies.policyname
      WHERE schemaname='public' AND tablename='quiz_questions'
      ORDER BY policyname;
    `);
    console.log('\n=== AFTER ===');
    for (const r of afterRes.rows) {
      console.log(`  ${r.policyname} [${r.cmd}]`);
      console.log(`    USING: ${r.using_expr}`);
    }
    const afterSelectCount = afterRes.rows.filter(r => r.cmd === 'SELECT').length;
    console.log(`  (SELECT policy count: ${afterSelectCount})`);

    // Assertions
    const names = afterRes.rows.map(r => r.policyname);
    if (!names.includes('Enrolled users view quiz questions')) {
      throw new Error('Expected consolidated policy "Enrolled users view quiz questions" not present.');
    }
    if (names.includes('Enrolled users can view quiz questions')) {
      throw new Error('Old policy "Enrolled users can view quiz questions" still present.');
    }
    if (names.includes('Enrolled users view questions')) {
      throw new Error('Old policy "Enrolled users view questions" still present.');
    }
    if (afterSelectCount !== 1) {
      throw new Error(`Expected exactly 1 SELECT policy on quiz_questions, got ${afterSelectCount}.`);
    }
    console.log('\nOK: exactly one SELECT policy "Enrolled users view quiz questions" on public.quiz_questions.');
  } catch (e) {
    try { await client.query('ROLLBACK'); } catch {}
    throw e;
  } finally {
    await client.end();
  }
})().catch(e => { console.error(e); process.exit(1); });
