/**
 * RLS policy audit — read-only pass against prod DB.
 * Writes every public/auth/storage policy to stdout as JSON so the caller
 * can diff it against committed migrations.
 *
 * Usage: node scripts/audit-rls-policies.js
 */
require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');

async function main() {
  const c = new Client({ connectionString: process.env.DIRECT_URL });
  await c.connect();
  try {
    // public schema policies — full DDL recreated via pg_policies + pg_policy
    const publicRows = await c.query(`
      SELECT
        p.schemaname,
        p.tablename,
        p.policyname,
        p.cmd,
        p.permissive,
        p.roles,
        p.qual,
        p.with_check,
        pol.polqual,
        pol.polwithcheck,
        pg_get_expr(pol.polqual, pol.polrelid) AS qual_expr,
        pg_get_expr(pol.polwithcheck, pol.polrelid) AS with_check_expr
      FROM pg_policies p
      JOIN pg_policy pol ON pol.polname = p.policyname
      JOIN pg_class cls ON cls.oid = pol.polrelid AND cls.relname = p.tablename
      JOIN pg_namespace ns ON ns.oid = cls.relnamespace AND ns.nspname = p.schemaname
      WHERE p.schemaname = 'public'
      ORDER BY p.tablename, p.policyname;
    `);

    const otherRows = await c.query(`
      SELECT schemaname, tablename, policyname, cmd, permissive, roles, qual, with_check
      FROM pg_policies
      WHERE schemaname IN ('auth', 'storage')
      ORDER BY schemaname, tablename, policyname;
    `);

    const output = {
      public: publicRows.rows,
      otherSchemas: otherRows.rows,
    };
    process.stdout.write(JSON.stringify(output, null, 2));
  } finally {
    await c.end();
  }
}

main().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
