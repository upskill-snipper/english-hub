// ─── Anchor ids for the mark-scheme reference cards ──────────────────────────
//
// WHY THIS IS SHARED (19 September 2026, UX-6)
//
// The marking hub advertised twelve "mark scheme guide" links and every one of
// them was `href: '#'`. They looked like links, they were styled like links,
// and clicking one did nothing at all. A student on a board filter saw two to
// four of them, all dead.
//
// The guides they promise DO exist - they are the reference cards on
// /resources/teacher-library/mark-schemes - so the hub now deep-links to the
// right card. Both sides build the anchor with this function, so a card
// renamed on the guide page cannot leave the hub pointing at an id that no
// longer exists. A test asserts every hub link resolves to a card that really
// is on that page.
//
// It lives here rather than in the page module because a Next route file may
// only export its own reserved names - exporting a helper from a page.tsx is a
// build error, not just untidy.
// ────────────────────────────────────────────────────────────────────────────

/** Stable anchor id for a reference-card title. */
export function markSchemeAnchor(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
