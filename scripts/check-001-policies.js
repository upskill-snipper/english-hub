// Inspect which policies named in 001_initial_schema.sql actually exist on prod.
require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');

const POLICIES_FROM_001 = [
  { table: 'profiles', name: 'Users can view own profile' },
  { table: 'profiles', name: 'Users can update own profile' },
  { table: 'profiles', name: 'Users can insert own profile' },
  { table: 'enrolments', name: 'Users can view own enrolments' },
  { table: 'module_progress', name: 'Users can manage own progress' },
  { table: 'assessment_attempts', name: 'Users can manage own assessments' },
  { table: 'certificates', name: 'Users can view own certificates' },
  { table: 'certificates', name: 'Public can verify certificates' },
  { table: 'courses', name: 'Courses are public' },
  { table: 'modules', name: 'Modules preview public' },
  { table: 'modules', name: 'Enrolled users view modules' },
  { table: 'practice_sessions', name: 'Users can manage own practice' },
];

(async () => {
  const client = new Client({ connectionString: process.env.DIRECT_URL });
  await client.connect();
  try {
    const { rows } = await client.query(`
      SELECT schemaname, tablename, policyname, cmd
      FROM pg_policies
      WHERE schemaname = 'public'
      ORDER BY tablename, policyname;
    `);
    const live = new Set(rows.map(r => `${r.tablename}::${r.policyname}`));
    console.log('=== ALL LIVE public.* policies ===');
    for (const r of rows) {
      console.log(`  ${r.tablename}.${r.policyname} (${r.cmd})`);
    }
    console.log('\n=== 001_initial_schema.sql policy check ===');
    for (const p of POLICIES_FROM_001) {
      const key = `${p.table}::${p.name}`;
      const exists = live.has(key);
      console.log(`  [${exists ? 'KEEP' : 'DROP'}] ${p.table}."${p.name}"`);
    }
  } finally {
    await client.end();
  }
})().catch(e => { console.error(e); process.exit(1); });
