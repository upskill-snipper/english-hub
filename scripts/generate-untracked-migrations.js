/**
 * For each untracked policy, emit a capture-only migration file that
 * re-creates the exact live DDL. Naming:
 *   20260420_track_untracked_<tablename>_<policyname_slug>.sql
 */
const fs = require('fs');
const path = require('path');

const untracked = require('../rls-untracked.json');
const audit = require('../rls-audit.json');
const outDir = path.join(__dirname, '..', 'supabase', 'migrations');

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

// Lookup roles array-to-SQL
function rolesToSql(roles) {
  if (!roles || !Array.isArray(roles) || roles.length === 0) return 'public';
  // pg returns roles like '{authenticated}' or {public}
  return roles.join(', ');
}

const created = [];

for (const u of untracked) {
  // Find the full row from audit to get roles + permissive mode
  const full = audit.public.find(
    (r) => r.tablename === u.tablename && r.policyname === u.policyname,
  );
  if (!full) throw new Error(`No full row for ${u.tablename}/${u.policyname}`);

  const cmd = full.cmd; // SELECT | INSERT | UPDATE | DELETE | ALL
  const permissive =
    full.permissive === 'PERMISSIVE' || full.permissive === true
      ? 'PERMISSIVE'
      : 'RESTRICTIVE';
  const qual = full.qual_expr; // may be null
  const withCheck = full.with_check_expr; // may be null
  const roles = rolesToSql(full.roles);

  const parts = [];
  parts.push(`AS ${permissive}`);
  parts.push(`FOR ${cmd}`);
  parts.push(`TO ${roles}`);
  if (qual) parts.push(`USING (${qual})`);
  if (withCheck) parts.push(`WITH CHECK (${withCheck})`);

  const createStmt = `CREATE POLICY "${full.policyname}" ON public.${full.tablename}
  ${parts.join('\n  ')};`;

  const filename = `20260420_track_untracked_${full.tablename}_${slug(full.policyname)}.sql`;
  const body = `-- ============================================================================
-- Capture-only migration: previously-untracked RLS policy
-- Discovered: 2026-04-20 RLS drift audit
-- Table:  public.${full.tablename}
-- Policy: "${full.policyname}"
--
-- This policy existed in production but was NOT present in any prior committed
-- migration. It appears to have been created via the Supabase dashboard or
-- drifted from its original DDL (e.g. renamed in-place after a dashboard edit).
--
-- Purpose of this file: reproducibility only. If prod is ever rebuilt from
-- migrations (disaster recovery, fresh staging env), this guarantees the
-- policy is re-created with the exact predicate that is currently live.
-- This file does NOT alter production state on its own — the policy already
-- exists there, so the DROP + CREATE is a no-op re-apply.
-- ============================================================================

DROP POLICY IF EXISTS "${full.policyname}" ON public.${full.tablename};

${createStmt}
`;

  const fullPath = path.join(outDir, filename);
  fs.writeFileSync(fullPath, body);
  created.push(filename);
}

console.log('Created migrations:');
for (const f of created) console.log(' -', f);
console.log(`\nTotal: ${created.length}`);
