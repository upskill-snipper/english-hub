/**
 * For each policy name discovered in the live DB, scan every migration file
 * and record whether the name appears verbatim. Output untracked names.
 */
const fs = require('fs');
const path = require('path');

const audit = require('../rls-audit.json');
const migrationsDir = path.join(__dirname, '..', 'supabase', 'migrations');

const allFiles = fs
  .readdirSync(migrationsDir)
  .filter((f) => f.endsWith('.sql'))
  .map((f) => ({ name: f, body: fs.readFileSync(path.join(migrationsDir, f), 'utf8') }));

// Build: for each policy name, list files containing it
const results = audit.public.map((row) => {
  const name = row.policyname;
  // Look for the exact name either as "<name>" (double-quoted) or as <name>
  // (bareword). Use indexOf to capture both.
  const hits = allFiles
    .filter((f) => f.body.indexOf(name) !== -1)
    .map((f) => f.name);
  return {
    tablename: row.tablename,
    policyname: name,
    cmd: row.cmd,
    permissive: row.permissive,
    qual: row.qual_expr,
    withCheck: row.with_check_expr,
    roles: row.roles,
    trackedIn: hits,
    untracked: hits.length === 0,
  };
});

// Dedupe by (tablename, policyname) pair — a policy with same name on
// different tables would be distinct, but we want unique results.
const seen = new Set();
const dedup = [];
for (const r of results) {
  const k = `${r.tablename}::${r.policyname}`;
  if (seen.has(k)) continue;
  seen.add(k);
  dedup.push(r);
}

const untracked = dedup.filter((r) => r.untracked);
const permissiveTrue = dedup.filter(
  (r) =>
    (r.qual && r.qual.trim() === 'true') ||
    (r.withCheck && r.withCheck.trim() === 'true'),
);

console.log('=== UNTRACKED (policy name not found in any migration file) ===');
console.log(`Count: ${untracked.length}\n`);
for (const u of untracked) {
  console.log(
    `- table=${u.tablename}  name="${u.policyname}"  cmd=${u.cmd}  qual=${u.qual}  with_check=${u.withCheck}`,
  );
}

console.log('\n=== PERMISSIVE (qual = true) ===');
console.log(`Count: ${permissiveTrue.length}\n`);
for (const p of permissiveTrue) {
  console.log(
    `- table=${p.tablename}  name="${p.policyname}"  cmd=${p.cmd}  tracked_in=${p.trackedIn.join(',') || 'NONE'}`,
  );
}

console.log('\n=== TRACKED count ===');
console.log(`Tracked: ${dedup.length - untracked.length} / ${dedup.length}`);

// Emit JSON for downstream migration generation.
fs.writeFileSync(
  path.join(__dirname, '..', 'rls-untracked.json'),
  JSON.stringify(untracked, null, 2),
);
fs.writeFileSync(
  path.join(__dirname, '..', 'rls-permissive.json'),
  JSON.stringify(permissiveTrue, null, 2),
);
fs.writeFileSync(
  path.join(__dirname, '..', 'rls-all-audit.json'),
  JSON.stringify(dedup, null, 2),
);
