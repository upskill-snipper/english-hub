/**
 * Compare what the repository expects against what the database has.
 *
 * Pure: no filesystem, no network, no Node builtins, so the same function runs
 * in the CLI checker and inside the serverless health route. Written as `.mjs`
 * with a hand-written `.d.ts` beside it for exactly that reason - the CLI is a
 * plain Node script and the route is TypeScript, and a second copy of this
 * logic is how the two would come to disagree about what "drift" means.
 *
 * DATA-1, 19 September 2026.
 */

/**
 * @param {import('./drift').SchemaManifest} manifest
 * @param {import('./drift').LiveSchema} live
 * @param {import('./drift').KnownDrift} known
 * @returns {import('./drift').DriftReport}
 */
export function compareSchema(manifest, live, known) {
  const liveTables = new Set(live.tables)
  const liveTablesLower = new Set(live.tables.map((t) => t.toLowerCase()))
  const liveColumns = new Set(live.columns.map((c) => c.toLowerCase()))
  const livePolicies = new Set(live.policies.map((p) => p.toLowerCase()))
  const liveIndexes = new Set(live.indexes.map((i) => i.toLowerCase()))
  const liveTriggers = new Set(live.triggers.map((t) => t.toLowerCase()))
  const liveFunctions = new Set(live.functions.map((f) => f.toLowerCase()))

  const findings = []

  const add = (kind, object, declaredIn, detail) => {
    findings.push({ kind, object, declaredIn, ...(detail ? { detail } : {}) })
  }

  // ── Tables the migrations declare ─────────────────────────────────────────
  for (const [name, file] of Object.entries(manifest.tables)) {
    if (!liveTablesLower.has(name)) add('missing-table', name, file)
  }

  // Only on tables that exist: a column on a missing table is already covered
  // by the missing table, and reporting both doubles the noise.
  for (const [key, file] of Object.entries(manifest.columns)) {
    const table = key.split('.')[0]
    if (liveTablesLower.has(table) && !liveColumns.has(key)) add('missing-column', key, file)
  }

  // ── Tables the CODE uses ──────────────────────────────────────────────────
  //
  // The half the checker never had. A `.from('x')` against a table nothing
  // created returns `{ data: null, error }`, and every call site here discards
  // the error, so the feature reports success and writes nothing.
  for (const [name, where] of Object.entries(manifest.codeTables)) {
    if (!liveTables.has(name) && !liveTablesLower.has(name.toLowerCase())) {
      add('code-references-missing-table', name, where)
    }
  }

  // Prisma models resolve to QUOTED PascalCase tables when they carry no
  // `@@map`, so `BulkUploadJob` and `bulkuploadjob` are different objects.
  // Compared case-sensitively for that reason.
  for (const [name, where] of Object.entries(manifest.prismaTables)) {
    if (!liveTables.has(name)) add('prisma-model-without-table', name, where)
  }

  // ── Policies, indexes, triggers, functions ────────────────────────────────
  for (const [key, file] of Object.entries(manifest.policies)) {
    const table = key.split(':')[0]
    if (liveTablesLower.has(table) && !livePolicies.has(key)) add('missing-policy', key, file)
  }

  for (const [name, entry] of Object.entries(manifest.indexes)) {
    if (liveTablesLower.has(entry.table) && !liveIndexes.has(name)) {
      add('missing-index', name, entry.file, `on ${entry.table}`)
    }
  }

  for (const [name, entry] of Object.entries(manifest.triggers)) {
    const relevant = entry.schema === 'auth' || liveTablesLower.has(entry.table)
    if (relevant && !liveTriggers.has(`${entry.schema}.${name}`)) {
      add('missing-trigger', name, entry.file, `on ${entry.schema}.${entry.table}`)
    }
  }

  for (const [name, file] of Object.entries(manifest.functions)) {
    if (!liveFunctions.has(name)) add('missing-function', name, file)
  }

  // ── Old news versus new drift ─────────────────────────────────────────────
  //
  // Without this split the report has carried the same fifteen entries since
  // May and a sixteenth would be invisible in the noise. `email_subscribers`
  // is the worked example: a permanent known finding that taught everyone to
  // skim the output.
  const allowed = new Set((known.allow ?? []).map((k) => `${k.kind}:${k.object}`))
  const introduced = findings.filter((f) => !allowed.has(`${f.kind}:${f.object}`))
  const expected = findings.filter((f) => allowed.has(`${f.kind}:${f.object}`))

  // An allowlist entry whose drift has been FIXED should be removed, or the
  // list grows into a second place that lies about the schema.
  const seen = new Set(findings.map((f) => `${f.kind}:${f.object}`))
  const stale = (known.allow ?? []).filter((k) => !seen.has(`${k.kind}:${k.object}`))

  return { introduced, expected, stale, checkedObjects: countExpectations(manifest) }
}

/** @param {import('./drift').SchemaManifest} manifest */
export function countExpectations(manifest) {
  return (
    Object.keys(manifest.tables).length +
    Object.keys(manifest.columns).length +
    Object.keys(manifest.codeTables).length +
    Object.keys(manifest.prismaTables).length +
    Object.keys(manifest.policies).length +
    Object.keys(manifest.indexes).length +
    Object.keys(manifest.triggers).length +
    Object.keys(manifest.functions).length
  )
}
