/**
 * Whether `value` is a uuid, the type of every school, class and member id.
 *
 * Checked before an id reaches a query. A site administrator's synthetic school
 * membership carries the id '__site_admin__' (src/lib/school-auth.ts), and
 * Postgres answers that with 22P02 rather than "no such school", which would
 * otherwise surface as a 500 or, worse, as rows written against nothing.
 */
export function isUuid(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
  )
}
