/**
 * A school's authorisation of AI marking for its pupils.
 *
 * Calum decided on 12 October 2026 that a school's pupils get permission for
 * AI marking from the school, as data controller, recorded once per school
 * (supabase/migrations/20261012_schools_pilot_columns.sql). The operator
 * records it at /admin/schools/[schoolId], which shows this statement word for
 * word and requires a note saying where the school's written confirmation is
 * held. POST /api/admin/schools/[schoolId]/ai-authorisation then sets
 * schools.ai_authorised_at and ai_authorised_by, and writes the statement and
 * the note to the AuditLog, whose entries are kept for compliance.
 *
 * This module records the authorisation; it does not decide what the consent
 * gate does with it. That is src/lib/consent-check.ts.
 *
 * No server imports, so the page can show the same words the route records.
 */

export const AI_AUTHORISATION_STATEMENT =
  'The school, as data controller, has confirmed in writing that its privacy notice covers AI marking and that parents have been told'

/** The AuditLog action an authorisation is recorded under. */
export const AI_AUTHORISATION_AUDIT_ACTION = 'SCHOOL_AI_AUTHORISED'

/** A note long enough to say where a document is held; longer is refused. */
export const AI_AUTHORISATION_NOTE_MAX = 1000
