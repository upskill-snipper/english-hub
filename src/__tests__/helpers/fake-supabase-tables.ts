/**
 * A programmable stand-in for the Supabase query builder, for tests whose code
 * reads a handful of tables.
 *
 * Each table is a list of rows. `.eq()` and `.in()` filter them the way
 * PostgREST would, including a dotted column such as `classes.is_active`,
 * which is read from an embedded row the way an `!inner` join filter applies.
 * Give a table an `error` and every read of it fails with that error, which is
 * how the fail-closed paths are driven. Every query is recorded in `calls`, so
 * a test can assert what was asked as well as what came back.
 */

export interface FakeTable {
  rows?: Record<string, unknown>[]
  error?: { code?: string; message: string } | null
}

type Filter = ['eq' | 'in', string, unknown]

export interface RecordedQuery {
  table: string
  select: string | null
  filters: Filter[]
}

function valueAt(row: unknown, path: string): unknown {
  if (row === null || row === undefined) return undefined
  const [head, ...rest] = path.split('.')
  let value = (row as Record<string, unknown>)[head]
  if (rest.length === 0) return value
  if (Array.isArray(value)) value = value[0]
  return valueAt(value, rest.join('.'))
}

function matches(row: Record<string, unknown>, [op, column, expected]: Filter): boolean {
  const actual = valueAt(row, column)
  if (op === 'eq') return actual === expected
  return Array.isArray(expected) && expected.includes(actual)
}

export function fakeSupabaseTables(tables: Record<string, FakeTable>) {
  const calls: RecordedQuery[] = []

  function from(table: string) {
    const query: RecordedQuery = { table, select: null, filters: [] }
    calls.push(query)

    const result = () => {
      const config = tables[table] ?? { rows: [] }
      if (config.error) return { data: null, error: config.error }
      const rows = (config.rows ?? []).filter((row) => query.filters.every((f) => matches(row, f)))
      return { data: rows, error: null }
    }

    const builder = {
      select(columns?: string) {
        query.select = columns ?? '*'
        return builder
      },
      eq(column: string, value: unknown) {
        query.filters.push(['eq', column, value])
        return builder
      },
      in(column: string, values: unknown[]) {
        query.filters.push(['in', column, values])
        return builder
      },
      order() {
        return builder
      },
      limit() {
        return builder
      },
      async single() {
        const r = result()
        if (r.error) return r
        const rows = r.data as Record<string, unknown>[]
        return rows.length === 1
          ? { data: rows[0], error: null }
          : { data: null, error: { code: 'PGRST116', message: 'not exactly one row' } }
      },
      async maybeSingle() {
        const r = result()
        if (r.error) return r
        return { data: (r.data as Record<string, unknown>[])[0] ?? null, error: null }
      },
      then<T1, T2>(
        onFulfilled?: (value: ReturnType<typeof result>) => T1 | PromiseLike<T1>,
        onRejected?: (reason: unknown) => T2 | PromiseLike<T2>,
      ) {
        return Promise.resolve(result()).then(onFulfilled, onRejected)
      },
    }
    return builder
  }

  return { client: { from }, calls }
}

/** A day offset from now, as an ISO string. */
export function daysFromNow(days: number): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
}
