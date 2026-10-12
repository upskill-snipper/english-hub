/**
 * An in-memory stand-in for the Supabase service-role client, for the school
 * setup tests: just enough PostgREST to run the queries those modules make,
 * and strict where production is strict.
 *
 * WHY STRICT. The defects this work fixes all passed mocked tests: an upsert
 * whose ON CONFLICT named no unique key (Postgres 42P10, every row refused),
 * a select naming a column the table does not have (PostgREST refuses the
 * whole query). A mock that accepts anything proves nothing about either. So
 * each table here carries its LIVE column list and unique keys (003, 20260404,
 * 20260818 and 20261012 migrations; school_members' only unique key besides
 * its id is (school_id, email), checked on production 12 October 2026), and:
 *   - a write or filter naming an unknown column is refused (PGRST204/42703);
 *   - an upsert whose onConflict is not one of the table's unique keys is
 *     refused with 42P10, as Postgres refuses it;
 *   - an insert that breaks a unique key is refused with 23505.
 *
 * Failures can be injected per table and operation, and every call is
 * recorded, so a test can assert what was written and what was refused.
 */

export type Row = Record<string, unknown>

export interface TableSpec {
  readonly columns: readonly string[]
  /** Unique keys besides `id`. An upsert's onConflict must name one of these, or `id`. */
  readonly unique: ReadonlyArray<readonly string[]>
  readonly defaults?: Row
}

export const LIVE_TABLES: Record<string, TableSpec> = {
  schools: {
    columns: [
      'id',
      'name',
      'slug',
      'address',
      'city',
      'postcode',
      'contact_email',
      'contact_phone',
      'school_type',
      'stripe_customer_id',
      'subscription_status',
      'subscription_plan',
      'seat_limit',
      'seats_used',
      'logo_url',
      'created_at',
      'updated_at',
      'access_type',
      'access_until',
      'promo_code_used',
      'exam_board',
      'curriculum',
      'website',
      'timezone',
      'ai_authorised_at',
      'ai_authorised_by',
    ],
    unique: [['slug']],
    defaults: { access_type: 'trial', ai_authorised_at: null, ai_authorised_by: null },
  },
  school_members: {
    columns: [
      'id',
      'school_id',
      'user_id',
      'role',
      'full_name',
      'email',
      'department',
      'invite_status',
      'invite_token',
      'invited_at',
      'accepted_at',
      'last_active_at',
      'created_at',
      'year_group',
      'invite_expires_at',
    ],
    unique: [['school_id', 'email'], ['invite_token']],
    defaults: { role: 'teacher', invite_status: 'pending', user_id: null, invite_token: null },
  },
  classes: {
    columns: [
      'id',
      'school_id',
      'teacher_id',
      'name',
      'year_group',
      'exam_board',
      'academic_year',
      'student_count',
      'is_active',
      'created_at',
      'updated_at',
    ],
    unique: [],
    defaults: {
      teacher_id: null,
      year_group: null,
      exam_board: null,
      academic_year: '2025-2026',
      student_count: 0,
      is_active: true,
    },
  },
  class_students: {
    columns: ['id', 'class_id', 'student_id', 'joined_at', 'removed_at', 'is_active'],
    unique: [['class_id', 'student_id']],
    defaults: { removed_at: null, is_active: true },
  },
  school_students: {
    columns: ['id', 'school_id', 'user_id', 'year_group', 'class_name', 'status', 'joined_at'],
    unique: [['school_id', 'user_id']],
    defaults: { status: 'active', year_group: null, class_name: null },
  },
  profiles: {
    columns: ['id', 'email', 'full_name', 'role', 'year_group', 'school_name', 'created_at'],
    unique: [],
  },
}

export interface DbError {
  readonly code: string
  readonly message: string
}

type Op = 'select' | 'insert' | 'upsert' | 'update' | 'delete'

export interface Call {
  readonly table: string
  readonly op: Op
  readonly payload: Row[] | Row | null
  readonly onConflict?: string
  readonly filters: ReadonlyArray<{ col: string; value: unknown }>
}

interface Failure {
  readonly table: string
  readonly op: Op
  readonly error: DbError
  readonly when?: (call: Call) => boolean
}

interface Result {
  data: unknown
  error: DbError | null
  count: number | null
}

function sameSet(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((x) => b.includes(x))
}

/** Column names in a select list, ignoring embedded resources such as `schools(*)`. */
function selectedColumns(list: string): string[] {
  return list
    .replace(/\w+\([^)]*\)/g, '')
    .split(',')
    .map((c) => c.trim())
    .filter((c) => c && c !== '*')
}

class FakeQuery implements PromiseLike<Result> {
  private op: Op = 'select'
  private payload: Row[] | Row | null = null
  private onConflict: string | undefined
  private selectList = '*'
  private returning: string | null = null
  private countExact = false
  private head = false
  private filters: Array<{ col: string; value: unknown; test: (r: Row) => boolean }> = []
  private orderBy: { col: string; ascending: boolean } | null = null
  private limitN: number | null = null
  private mode: 'single' | 'maybe' | null = null

  constructor(
    private readonly db: FakeSupabase,
    private readonly table: string,
  ) {}

  select(list = '*', opts?: { count?: 'exact'; head?: boolean }) {
    if (this.op === 'select') {
      this.selectList = list
      this.countExact = opts?.count === 'exact'
      this.head = opts?.head === true
    } else {
      this.returning = list
    }
    return this
  }
  insert(rows: Row[] | Row) {
    this.op = 'insert'
    this.payload = rows
    return this
  }
  upsert(rows: Row[] | Row, opts?: { onConflict?: string }) {
    this.op = 'upsert'
    this.payload = rows
    this.onConflict = opts?.onConflict
    return this
  }
  update(patch: Row) {
    this.op = 'update'
    this.payload = patch
    return this
  }
  delete() {
    this.op = 'delete'
    return this
  }
  eq(col: string, value: unknown) {
    this.filters.push({ col, value, test: (r) => r[col] === value })
    return this
  }
  neq(col: string, value: unknown) {
    this.filters.push({ col, value, test: (r) => r[col] !== value })
    return this
  }
  in(col: string, values: unknown[]) {
    this.filters.push({ col, value: values, test: (r) => values.includes(r[col]) })
    return this
  }
  is(col: string, value: unknown) {
    this.filters.push({ col, value, test: (r) => (r[col] ?? null) === value })
    return this
  }
  order(col: string, opts?: { ascending?: boolean }) {
    this.orderBy = { col, ascending: opts?.ascending !== false }
    return this
  }
  limit(n: number) {
    this.limitN = n
    return this
  }
  single() {
    this.mode = 'single'
    return this
  }
  maybeSingle() {
    this.mode = 'maybe'
    return this
  }

  then<A = Result, B = never>(
    onFulfilled?: ((value: Result) => A | PromiseLike<A>) | null,
    onRejected?: ((reason: unknown) => B | PromiseLike<B>) | null,
  ): PromiseLike<A | B> {
    return Promise.resolve()
      .then(() => this.execute())
      .then(onFulfilled, onRejected)
  }

  private fail(error: DbError): Result {
    return { data: null, error, count: null }
  }

  private execute(): Result {
    const call: Call = {
      table: this.table,
      op: this.op,
      payload: this.payload,
      onConflict: this.onConflict,
      filters: this.filters.map(({ col, value }) => ({ col, value })),
    }
    this.db.calls.push(call)

    const injected = this.db.failures.find(
      (f) => f.table === this.table && f.op === this.op && (!f.when || f.when(call)),
    )
    if (injected) return this.fail(injected.error)

    const spec = this.db.specs[this.table]
    if (!spec) {
      return this.fail({ code: '42P01', message: `relation "public.${this.table}" does not exist` })
    }
    const unknown = (cols: string[]) => cols.find((c) => !spec.columns.includes(c))

    const readCols = [
      ...selectedColumns(this.op === 'select' ? this.selectList : (this.returning ?? '')),
      ...this.filters.map((f) => f.col),
      ...(this.orderBy ? [this.orderBy.col] : []),
    ]
    const badRead = unknown(readCols)
    if (badRead) {
      return this.fail({ code: '42703', message: `column ${this.table}.${badRead} does not exist` })
    }
    const writes =
      this.payload === null ? [] : Array.isArray(this.payload) ? this.payload : [this.payload]
    const badWrite = unknown(writes.flatMap((w) => Object.keys(w)))
    if (badWrite) {
      return this.fail({
        code: 'PGRST204',
        message: `Could not find the '${badWrite}' column of '${this.table}' in the schema cache`,
      })
    }

    const rows = this.db.tables[this.table]
    const matches = () => rows.filter((r) => this.filters.every((f) => f.test(r)))
    let affected: Row[] = []

    if (this.op === 'select') {
      affected = matches()
      if (this.orderBy) {
        const { col, ascending } = this.orderBy
        affected = [...affected].sort(
          (a, b) => String(a[col] ?? '').localeCompare(String(b[col] ?? '')) * (ascending ? 1 : -1),
        )
      }
      if (this.limitN !== null) affected = affected.slice(0, this.limitN)
      const count = this.countExact ? affected.length : null
      if (this.head) return { data: null, error: null, count }
      return this.finish(affected, this.selectList, count)
    }

    if (this.op === 'insert' || this.op === 'upsert') {
      let conflictCols: string[] | null = null
      if (this.op === 'upsert') {
        conflictCols = (this.onConflict ?? 'id').split(',').map((c) => c.trim())
        const named = [['id'], ...spec.unique].some((key) => sameSet(key, conflictCols as string[]))
        if (!named) {
          return this.fail({
            code: '42P10',
            message:
              'there is no unique or exclusion constraint matching the ON CONFLICT specification',
          })
        }
      }
      const staged = rows.map((r) => ({ ...r }))
      const results: Row[] = []
      for (const w of writes) {
        const existing = conflictCols
          ? staged.find((r) => (conflictCols as string[]).every((c) => r[c] === w[c]))
          : undefined
        if (existing) {
          Object.assign(existing, w)
          results.push(existing)
          continue
        }
        const row: Row = { ...(spec.defaults ?? {}), ...w, id: w.id ?? this.db.nextId() }
        for (const key of [['id'], ...spec.unique]) {
          if (key.some((c) => row[c] === null || row[c] === undefined)) continue
          if (staged.some((r) => key.every((c) => r[c] === row[c]))) {
            return this.fail({
              code: '23505',
              message: `duplicate key value violates unique constraint on ${this.table} (${key.join(', ')})`,
            })
          }
        }
        staged.push(row)
        results.push(row)
      }
      this.db.tables[this.table] = staged
      affected = results
    } else if (this.op === 'update') {
      affected = matches()
      for (const r of affected) Object.assign(r, this.payload as Row)
    } else {
      affected = matches()
      this.db.tables[this.table] = rows.filter((r) => !affected.includes(r))
    }

    if (this.returning === null) return { data: null, error: null, count: null }
    return this.finish(affected, this.returning, null)
  }

  private finish(found: Row[], list: string, count: number | null): Result {
    const cols = selectedColumns(list)
    const project = (r: Row) =>
      cols.length === 0 ? { ...r } : Object.fromEntries(cols.map((c) => [c, r[c] ?? null]))
    const data = found.map(project)
    if (this.mode === 'single' || this.mode === 'maybe') {
      if (data.length > 1 || (this.mode === 'single' && data.length === 0)) {
        return this.fail({
          code: 'PGRST116',
          message: `JSON object requested, ${data.length} rows returned`,
        })
      }
      return { data: data[0] ?? null, error: null, count }
    }
    return { data, error: null, count }
  }
}

export interface FakeAuthUser {
  id: string
  email: string
  user_metadata?: Row
}

export class FakeSupabase {
  readonly specs: Record<string, TableSpec>
  tables: Record<string, Row[]> = {}
  readonly calls: Call[] = []
  readonly failures: Failure[] = []
  readonly authUsers: FakeAuthUser[] = []
  private seq = 0

  constructor(specs: Record<string, TableSpec> = LIVE_TABLES) {
    this.specs = specs
    for (const t of Object.keys(specs)) this.tables[t] = []
  }

  /** A fresh uuid-shaped id, so it passes the routes' uuid check. */
  nextId(): string {
    this.seq += 1
    return `00000000-0000-4000-8000-${this.seq.toString(16).padStart(12, '0')}`
  }

  seed(table: string, rows: Row[]): Row[] {
    const spec = this.specs[table]
    const added = rows.map((r) => ({ ...(spec?.defaults ?? {}), ...r, id: r.id ?? this.nextId() }))
    this.tables[table] = [...(this.tables[table] ?? []), ...added]
    return added
  }

  rows(table: string): Row[] {
    return this.tables[table] ?? []
  }

  /** Refuse matching calls with `error`, as the database would. */
  failOn(table: string, op: Op, error: DbError, when?: (call: Call) => boolean): void {
    this.failures.push({ table, op, error, when })
  }

  callsTo(table: string, op?: Op): Call[] {
    return this.calls.filter((c) => c.table === table && (!op || c.op === op))
  }

  from(table: string) {
    return new FakeQuery(this, table)
  }

  /** GoTrue's admin calls: an email already registered is refused, as GoTrue refuses it. */
  readonly auth = {
    admin: {
      createUser: async ({ email, user_metadata }: { email: string; user_metadata?: Row }) => {
        if (this.authUsers.some((u) => u.email === email)) {
          return {
            data: { user: null },
            error: {
              code: 'email_exists',
              message: 'A user with this email address has already been registered',
            },
          }
        }
        const user = { id: this.nextId(), email, user_metadata }
        this.authUsers.push(user)
        return { data: { user }, error: null }
      },
      deleteUser: async (id: string) => {
        const at = this.authUsers.findIndex((u) => u.id === id)
        if (at >= 0) this.authUsers.splice(at, 1)
        return { data: null, error: null }
      },
    },
  }
}
