/**
 * Where a school pupil's essay feedback goes, and the code that says so.
 *
 * WHY (12 October 2026). The product has two ways to get AI feedback on an
 * essay. "Mark an essay" (/marking/submit) saves a `marking_submissions` row
 * that a pupil's teacher can see, review and change. The standalone AI essay
 * feedback (/api/essay-feedback, behind /dashboard/essay-feedback and the
 * inline panels on /practice and the Mock Exam Mode) stores its result in the
 * Prisma `Essay` table, which no school surface reads. Once a school's live
 * access opened the paywall for its pupils, that second path would have given
 * them AI marks no teacher could ever see, against Calum's decision that the
 * teacher reviews a school pupil's AI feedback afterwards.
 *
 * The smaller and safer of the two fixes was chosen: hide the standalone
 * feedback from school pupils and point them to Mark an essay, rather than
 * re-plumbing a second marking pipeline into the teacher's queue. The pages
 * hide it up front (GET /api/user/access says who is a school pupil), and
 * /api/essay-feedback refuses a school pupil with the code below, so a page
 * that has not caught up, or a direct call, still cannot get round it.
 *
 * NO IMPORTS on purpose: the route and the client components both read it.
 * The value is an API contract: do not rename it.
 */

/** Sent with the 403 when a school pupil asks the standalone essay feedback. */
export const SCHOOL_MARKING_ROUTE_CODE = 'school_pupil_uses_marking'

/** Where a school pupil marks an essay so that their teacher can see it. */
export const SCHOOL_MARKING_PATH = '/marking/submit'

/** True only for the refusal above, read from a parsed JSON error body. */
export function isSchoolMarkingRefusal(status: number, body: unknown): boolean {
  return (
    status === 403 &&
    typeof body === 'object' &&
    body !== null &&
    (body as { code?: unknown }).code === SCHOOL_MARKING_ROUTE_CODE
  )
}
