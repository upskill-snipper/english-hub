/**
 * Board-specific route registry - the SINGLE source of truth for "does the
 * exam board change what this page shows?".
 *
 * Two consumers, previously with two hand-maintained lists that drifted:
 *   - src/middleware.ts   decides whether to redirect to /board-select
 *   - src/components/board/BoardGate.tsx  decides whether to nudge with a modal
 *
 * BoardGate used to hold an ALLOW-list of everywhere the modal must NOT
 * appear. Any page the author forgot was therefore gated by default, which
 * is how /blog (the main organic entry point) and /ielts (a top-level nav
 * item) ended up behind a full-screen "pick your exam board" modal that had
 * no close button - and where an IELTS learner had no correct answer to
 * give. Inverting to this DENY-list makes "not gated" the default, so a
 * forgotten route fails open instead of trapping the visitor.
 *
 * A path belongs here only if the content genuinely differs by board:
 * revision material, board-filtered practice, exam papers and the personal
 * surfaces built from them. Marketing, legal, blog, IELTS, EAL, KS3 and
 * demo pages do not - they are board-agnostic by design.
 */

/** Route trees whose content is filtered by the visitor's exam board. */
export const BOARD_SPECIFIC_PREFIXES: readonly string[] = [
  '/revision',
  '/practice',
  '/mock-exams',
  '/games',
  '/assessment',
  '/courses',
  '/igcse',
  '/a-level',
  '/learn',
  '/marking',
  '/toolkit',
  '/dashboard',
] as const

/**
 * True when `pathname` sits inside a board-specific tree (exact match on the
 * root, or anything beneath it).
 */
export function isBoardSpecificPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  return BOARD_SPECIFIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}
