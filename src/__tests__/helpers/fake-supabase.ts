/**
 * An in-memory stand-in for the parts of supabase-js the school portal's
 * routes use, for tests that must prove what a QUERY returns rather than what
 * a mock was told to return.
 *
 * WHY (12 October 2026). The school portal's tests are about scope: a teacher
 * sees only their own classes' essays, a member of another school sees
 * nothing. A test that mocks `.from().select().eq()` to return fixed rows
 * cannot fail when the scoping filter is deleted, because the filter is never
 * applied to anything. This fake holds real rows and applies the filters the
 * route actually builds, so deleting a filter changes the answer and the test
 * fails.
 *
 * It supports what the portal routes call: select (with a column list or *,
 * and count/head), eq, neq, in, gte, gt, lte, lt, is, not('col', 'is', null),
 * order, limit, maybeSingle, single, insert and update. Embedded relations in
 * a select (`schools(*)`) are not supported and are ignored.
 *
 * Failures are injected per table, so a test can prove a route reports a
 * failed read as a failure.
 */

export type Row = Record<string, unknown>

interface Failure {
  message: string
  code?: string
}

export interface FakeQueryLog {
  table: string
  op: 'select' | 'insert' | 'update'
  filters: string[]
}

type Filter = (row: Row) => boolean

/** Order a cell against a value the way Postgres orders text, numbers and ISO timestamps. */
function compare(cell: unknown, value: string | number): number | null {
  if (cell === null || cell === undefined) return null
  const x = cell as string | number
  return x < value ? -1 : x > value ? 1 : 0
}

export function createFakeSupabase(
  seed: Record<string, Row[]>,
  options: {
    /**
     * Answer at most this many rows per request and say nothing about the
     * rest, as PostgREST does at its db-max-rows setting (1,000 on Supabase).
     * A number caps every table; an object caps only the tables it names.
     */
    maxRows?: number | Record<string, number>
  } = {},
) {
  const tables: Record<string, Row[]> = {}
  for (const [name, rows] of Object.entries(seed)) tables[name] = rows.map((r) => ({ ...r }))
  const failures = new Map<string, Failure>()
  const log: FakeQueryLog[] = []

  function builder(table: string) {
    const filters: Filter[] = []
    const described: string[] = []
    let op: 'select' | 'insert' | 'update' = 'select'
    let columns: string[] | null = null
    let countOnly = false
    let wantCount = false
    const orderBy: Array<{ col: string; asc: boolean }> = []
    let limitN: number | null = null
    let rangeFrom = 0
    let single: 'single' | 'maybe' | null = null
    let payload: Row | Row[] | null = null
    let returnRows = false

    const api = {
      select(cols?: string, opts?: { count?: string; head?: boolean }) {
        // After insert or update, select() asks for the written rows back.
        if (op !== 'select') returnRows = true
        if (cols && cols.trim() !== '*') {
          columns = cols
            .split(',')
            .map((c) => c.trim())
            .filter((c) => c && !c.includes('('))
        }
        if (opts?.count) wantCount = true
        if (opts?.head) countOnly = true
        return api
      },
      insert(values: Row | Row[]) {
        op = 'insert'
        payload = values
        return api
      },
      update(values: Row) {
        op = 'update'
        payload = values
        return api
      },
      eq(col: string, val: unknown) {
        described.push(`eq:${col}=${String(val)}`)
        filters.push((r) => r[col] === val)
        return api
      },
      neq(col: string, val: unknown) {
        described.push(`neq:${col}=${String(val)}`)
        filters.push((r) => r[col] !== val)
        return api
      },
      in(col: string, vals: readonly unknown[]) {
        described.push(`in:${col}=${vals.length}`)
        const set = new Set(vals)
        filters.push((r) => set.has(r[col]))
        return api
      },
      gte(col: string, val: string | number) {
        described.push(`gte:${col}`)
        filters.push((r) => (compare(r[col], val) ?? -1) >= 0)
        return api
      },
      gt(col: string, val: string | number) {
        filters.push((r) => (compare(r[col], val) ?? -1) > 0)
        return api
      },
      lte(col: string, val: string | number) {
        filters.push((r) => (compare(r[col], val) ?? 1) <= 0)
        return api
      },
      lt(col: string, val: string | number) {
        filters.push((r) => (compare(r[col], val) ?? 1) < 0)
        return api
      },
      is(col: string, val: null) {
        filters.push((r) => (r[col] ?? null) === val)
        return api
      },
      not(col: string, operator: string, val: unknown) {
        if (operator === 'is') {
          filters.push((r) => (r[col] ?? null) !== val)
          return api
        }
        if (operator === 'in' && typeof val === 'string') {
          // PostgREST list syntax: ("a","b") or (a,b).
          const list = val
            .replace(/^\(|\)$/g, '')
            .split(',')
            .map((s) => s.trim().replace(/^"|"$/g, ''))
          described.push(`not.in:${col}=${list.length}`)
          const set = new Set(list)
          filters.push((r) => !set.has(String(r[col])))
          return api
        }
        throw new Error(`fake-supabase: not(${operator}) unsupported`)
      },
      order(col: string, opts?: { ascending?: boolean }) {
        orderBy.push({ col, asc: opts?.ascending !== false })
        return api
      },
      limit(n: number) {
        limitN = n
        return api
      },
      range(from: number, to: number) {
        rangeFrom = from
        limitN = to - from + 1
        return api
      },
      maybeSingle() {
        single = 'maybe'
        return api
      },
      single() {
        single = 'single'
        return api
      },
      then<T>(
        resolve: (value: { data: unknown; error: Failure | null; count?: number | null }) => T,
        reject?: (reason: unknown) => unknown,
      ) {
        try {
          return Promise.resolve(run()).then(resolve, reject)
        } catch (err) {
          return Promise.reject(err).then(resolve, reject)
        }
      },
    }

    function project(row: Row): Row {
      if (!columns) return { ...row }
      const out: Row = {}
      for (const c of columns) out[c] = row[c]
      return out
    }

    function run(): { data: unknown; error: Failure | null; count?: number | null } {
      log.push({ table, op, filters: [...described] })
      const failure = failures.get(table)
      if (failure) return { data: null, error: failure, count: null }

      const rows = tables[table] ?? (tables[table] = [])

      if (op === 'insert') {
        const list = (Array.isArray(payload) ? payload : [payload]) as Row[]
        const inserted = list.map((r) => ({ ...r }))
        rows.push(...inserted)
        const data = returnRows ? inserted.map(project) : null
        return { data: single ? (data?.[0] ?? null) : data, error: null }
      }

      let matched = rows.filter((r) => filters.every((f) => f(r)))

      if (op === 'update') {
        for (const r of matched) Object.assign(r, payload)
        const data = returnRows ? matched.map(project) : null
        if (single === 'single' && returnRows && matched.length !== 1) {
          return { data: null, error: { message: 'not exactly one row', code: 'PGRST116' } }
        }
        return { data: single ? (data?.[0] ?? null) : data, error: null }
      }

      if (orderBy.length > 0) {
        matched = [...matched].sort((a, b) => {
          for (const { col, asc } of orderBy) {
            const x = a[col] as never
            const y = b[col] as never
            if (x === y) continue
            return (x < y ? -1 : 1) * (asc ? 1 : -1)
          }
          return 0
        })
      }
      const total = matched.length
      if (limitN !== null) matched = matched.slice(rangeFrom, rangeFrom + limitN)
      else if (rangeFrom > 0) matched = matched.slice(rangeFrom)
      const cap = typeof options.maxRows === 'number' ? options.maxRows : options.maxRows?.[table]
      if (cap !== undefined) matched = matched.slice(0, cap)

      if (countOnly) return { data: null, error: null, count: total }

      const data = matched.map(project)
      if (single === 'single') {
        if (data.length !== 1) {
          return { data: null, error: { message: 'not exactly one row', code: 'PGRST116' } }
        }
        return { data: data[0], error: null }
      }
      if (single === 'maybe') {
        if (data.length > 1) {
          return { data: null, error: { message: 'more than one row', code: 'PGRST116' } }
        }
        return { data: data[0] ?? null, error: null }
      }
      return { data, error: null, count: wantCount ? total : null }
    }

    return api
  }

  return {
    client: { from: (table: string) => builder(table) },
    tables,
    log,
    /** Make every read and write of this table fail with this message. */
    fail(table: string, message = 'simulated failure', code?: string) {
      failures.set(table, { message, code })
    },
    heal(table: string) {
      failures.delete(table)
    },
  }
}
