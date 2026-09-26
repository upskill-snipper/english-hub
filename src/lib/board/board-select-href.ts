/**
 * Where a card on /board-select links to.
 *
 * THE DEFECT (26 September 2026). On 19 September every board picker was
 * changed to land on the board's own set texts, and /board-select's cards were
 * rewritten to say so: `/set-texts/aqa?setBoard=aqa` and so on. On the same
 * page, a helper added the day before to honour `?next=` then rewrote every one
 * of those hrefs to `<destination>?setBoard=<id>`, and when there was no `next`
 * - the normal case, a student clicking "choose your board" - the destination
 * was hard-coded to `/revision`. So the source said set texts and the page
 * rendered `/revision?setBoard=aqa` for every card. The test that guarded the
 * landing rule read the hrefs as written in the source, not what the page
 * rendered, and passed throughout.
 *
 * It also got the other two cases wrong:
 *
 *   - An unsafe `next` (`//evil.com`, `javascript:`, a backslash trick) was
 *     caught by validateRedirect, whose fallback is `/dashboard`, and that
 *     fallback was then used as the destination. Safe, but it sent a visitor
 *     who had asked for nothing to their dashboard. An unusable `next` is now
 *     treated as absent.
 *   - The middleware's board gate builds `next` from the path AND its query
 *     string, and the old code appended `?setBoard=` blindly. A gated page
 *     reached with a query came back as `/mock-exams?paper=1?setBoard=aqa`,
 *     where `setBoard` is part of the value of `paper`. The middleware never saw
 *     it, never set the cookie, and the gate sent the visitor straight back
 *     here. The parameter is now added with URLSearchParams.
 *
 * The rule, which the tests beside this file exercise directly:
 *
 *   - No usable `next`: the card's own landing link, from boardLandingHref,
 *     exactly as the homepage and /exam-boards give it.
 *   - A usable `next`: `<next>` with `setBoard=<id>` added. The parameter goes
 *     on the destination, not on this page, because the middleware reads it,
 *     sets the cookie and redirects to the clean URL - see the docblock on
 *     src/app/board-select/page.tsx.
 *   - A card that sets no board (EAL, which links to /eal) is never touched.
 *
 * AND THE FIRST VERSION OF THIS FILE WAS AN OPEN REDIRECT (26 September 2026)
 *
 * It parsed `next` with the URL API, added setBoard, and returned
 * `pathname + search + hash`. validateRedirect accepts `/..//evil.com`: it
 * starts with one slash, not two, and has no colon, backslash or percent sign.
 * The URL parser then resolves the dot segment, the pathname comes out as
 * `//evil.com`, and the card href became `//evil.com?setBoard=aqa` - a
 * protocol-relative link to another site, on every card, from a link anyone
 * could send a child. `/.//evil.com` and `/a/..//evil.com` did the same. The
 * origin check that was meant to stop it ran on the parsed URL, whose origin is
 * this site, not on the string that became the link.
 *
 * The code before it was not vulnerable, only because it pasted `next` in
 * verbatim, and a browser resolves `/..//evil.com` against the current host.
 * There are now two locks, both tested:
 *
 *   - a `next` with a `.` or `..` segment is refused outright. The board gate
 *     builds `next` from the request's pathname, which is already normalised,
 *     so no genuine `next` carries one;
 *   - the returned string itself is checked: it must start with exactly one
 *     slash and resolve to this site.
 *
 * A page file may not export anything but its component and Next's own names,
 * which is why this lives here rather than in the page.
 */

import { validateRedirect } from '@/lib/utils'

/**
 * Used only to parse a same-site path with the URL API. It never appears in a
 * link: the helper returns path, query and fragment, and refuses any result
 * that would not resolve to this site (isSameSitePath, below).
 */
const PARSE_BASE = 'https://theenglishhub.app'

/**
 * A `.` or `..` path segment. The URL parser removes these, and removing one
 * can leave a pathname that begins `//`, which is how `/..//evil.com` became a
 * link to evil.com.
 */
const DOT_SEGMENT = /(^|\/)\.{1,2}(\/|$)/

/**
 * True when `href` is a path on this site and nothing else: exactly one
 * leading slash, and it resolves to this origin. Checked on the finished
 * string, because that is what the browser follows.
 */
function isSameSitePath(href: string): boolean {
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/\\')) return false
  try {
    return new URL(href, `${PARSE_BASE}/board-select`).origin === PARSE_BASE
  } catch {
    return false
  }
}

/**
 * The same-site path the picker has been asked to return to, or null when there
 * is none worth honouring.
 *
 * Accepts the raw search-param value, including the array Next gives for a
 * repeated `?next=`, so that every judgement about it is made here, where it is
 * tested.
 */
export function boardSelectNext(rawNext: string | string[] | null | undefined): string | null {
  if (typeof rawNext !== 'string' || rawNext === '') return null
  // validateRedirect returns its input unchanged when it is safe and
  // '/dashboard' when it is not, so equality is the test. Comparing the result
  // with '/dashboard' instead would mistake a genuine next=/dashboard for a
  // rejected one.
  if (validateRedirect(rawNext) !== rawNext) return null
  const path = rawNext.split(/[?#]/, 1)[0]
  // `/..//evil.com` passes validateRedirect and parses to the pathname
  // `//evil.com`. See the docblock at the top of this file.
  if (DOT_SEGMENT.test(path)) return null
  // Returning to the picker itself would set the cookie and show the picker
  // again. The middleware never sends that, but a hand-made link could.
  if (path === '/board-select' || path.startsWith('/board-select/')) return null
  return rawNext
}

/**
 * The href for one card on /board-select.
 *
 * `cardHref` is the card's own landing link. The board id is read from its
 * `setBoard` parameter so that the page keeps one source of board ids; a card
 * without one is returned as it is.
 */
export function boardSelectCardHref(
  cardHref: string,
  rawNext: string | string[] | null | undefined,
): string {
  const board = new URLSearchParams(cardHref.split('?')[1] ?? '').get('setBoard')
  if (!board) return cardHref

  const next = boardSelectNext(rawNext)
  if (!next) return cardHref

  const url = new URL(next, PARSE_BASE)
  url.searchParams.set('setBoard', board)
  const href = `${url.pathname}${url.search}${url.hash}`
  // The second lock, on the string the browser will follow. The first version
  // checked url.origin instead, which is this site even when the pathname has
  // become `//evil.com`.
  return isSameSitePath(href) ? href : cardHref
}
