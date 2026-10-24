/**
 * One lock on page scrolling, shared by every overlay that needs it
 * (24 October 2026).
 *
 * THE DEFECT. Each overlay locked the page on its own: it saved
 * `document.body.style.overflow`, set it to 'hidden', and put the saved value
 * back when it closed. Two overlays open at once undo each other in the wrong
 * order. The second saves 'hidden' as its "previous" value; if the first closes
 * first it unlocks the page while the second is still open, and when the
 * second closes it restores 'hidden', and the page stays frozen with nothing
 * on screen to explain it. The founder reported pages that "do not scroll so
 * you can not move down the page".
 *
 * THE RULE. Every overlay takes a lock from here and releases it on close. The
 * page is unlocked when the last lock is released, and is then given back the
 * value it had before the first lock. Releasing twice is harmless.
 */

let held = 0
let before: string | null = null

/** Lock page scrolling until the returned function is called. */
export function lockPageScroll(): () => void {
  if (typeof document === 'undefined') return () => {}
  if (held === 0) {
    before = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  held++
  let released = false
  return () => {
    if (released) return
    released = true
    held = Math.max(0, held - 1)
    if (held === 0) {
      document.body.style.overflow = before ?? ''
      before = null
    }
  }
}

/** For tests: how many locks are held. */
export function heldScrollLocks(): number {
  return held
}
