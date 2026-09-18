// ─── Carry an essay through a sign-in round trip ────────────────────────────
//
// THE DEFECT THIS FIXES (19 September 2026)
//
// /marking is not in `protectedRoutes` (src/lib/supabase/middleware.ts), so a
// signed-out visitor reaches /marking/submit, picks a board, a paper and a
// question, types a 600-word essay, presses submit, and is told "You need to
// sign in before submitting an essay for marking" as plain text. Nothing
// carried the essay through login, so signing in meant typing it again.
//
// This is the one screen where a trialist decides whether the product works.
// Production `marking_submissions` has 0 rows, ever.
//
// WHY sessionStorage AND NOT localStorage
//
// The draft is a child's schoolwork on what may be a shared or school machine.
// sessionStorage is scoped to the tab and cleared when it closes, so the essay
// cannot outlive the session and greet the next person at that computer.
// `takeMarkingDraft` also removes it on read, so it is consumed exactly once.
//
// Every access is wrapped: storage throws in a private window, and with site
// data blocked it can be absent entirely. A failure here must never stop
// someone submitting - it just means they retype.
// ────────────────────────────────────────────────────────────────────────────

const KEY = 'eh-marking-draft'

/** How long a stashed draft stays valid. A login round trip is seconds. */
const MAX_AGE_MS = 60 * 60 * 1000

export interface MarkingDraft {
  board: string
  paper: string
  question: string
  title: string
  essay: string
}

interface StoredDraft extends MarkingDraft {
  savedAt: number
}

/** Stash the in-progress essay. Silent on failure. */
export function saveMarkingDraft(draft: MarkingDraft): void {
  if (typeof window === 'undefined') return
  // Nothing to carry: do not leave an empty record behind that would later
  // overwrite a genuine draft with blanks.
  if (!draft.essay.trim()) return
  try {
    const payload: StoredDraft = { ...draft, savedAt: Date.now() }
    window.sessionStorage.setItem(KEY, JSON.stringify(payload))
  } catch {
    /* private window, blocked site data, or quota - the user retypes */
  }
}

/**
 * Read and remove the stashed draft.
 *
 * Removing on read is deliberate: a draft that survived a second visit would
 * silently overwrite whatever the person had started typing.
 */
export function takeMarkingDraft(): MarkingDraft | null {
  if (typeof window === 'undefined') return null
  let raw: string | null = null
  try {
    raw = window.sessionStorage.getItem(KEY)
    window.sessionStorage.removeItem(KEY)
  } catch {
    return null
  }
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as Partial<StoredDraft>
    if (typeof parsed?.essay !== 'string' || !parsed.essay.trim()) return null
    if (typeof parsed.savedAt !== 'number' || Date.now() - parsed.savedAt > MAX_AGE_MS) return null
    return {
      board: typeof parsed.board === 'string' ? parsed.board : '',
      paper: typeof parsed.paper === 'string' ? parsed.paper : '',
      question: typeof parsed.question === 'string' ? parsed.question : '',
      title: typeof parsed.title === 'string' ? parsed.title : '',
      essay: parsed.essay,
    }
  } catch {
    // Corrupt or foreign value. It has already been removed above.
    return null
  }
}

/** Drop any stashed draft without reading it. */
export function clearMarkingDraft(): void {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.removeItem(KEY)
  } catch {
    /* nothing to do */
  }
}
