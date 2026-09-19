// ─── Set-text slugs with no dedicated page ───────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, SEO-10)
//
// `SET_TEXTS` holds 73 slugs. `src/app/revision/texts/` holds 53 dedicated
// pages. The remaining 20 fall through to `[slug]/page.tsx`, which renders the
// text's one-line description, a row of theme chips, some resource links and
// four paragraphs of boilerplate study tips that are identical on every one of
// them. Every one was indexable, self-canonical and listed in the sitemap.
//
// SIXTEEN OF THE TWENTY COMPETE WITH A REAL PAGE WE ALREADY PUBLISH, and both
// were in the sitemap at once - so for those queries the site was bidding
// against itself with the weaker page:
//
//   /igcse/edexcel/poetry/<slug>       an-unknown-girl, disabled (855 lines),
//                                      if, out-out, piano, sonnet-116,
//                                      still-i-rise,
//                                      the-bright-lights-of-sarajevo,
//                                      war-photographer
//   /revision/poetry/power-and-conflict/<slug>   my-last-duchess,
//                                      war-photographer (which has two)
//   /resources/revision-notes/<slug>   a-dolls-house (1,314 lines),
//                                      antony-and-cleopatra,
//                                      do-not-go-gentle-into-that-good-night
//                                      (548 lines), half-past-two and others
//
// The stubs are now noindex and out of the sitemap. They still RENDER - they
// are reachable from the set-text index and are a reasonable landing spot from
// inside the product - they simply stop asking search engines to rank them
// against our own better pages.
//
// ── THIS LIST IS DERIVED, AND A TEST PROVES IT ──────────────────────────────
// It is written out rather than computed at runtime because the sitemap and
// the page metadata must agree exactly, and a `readdirSync` in a route module
// is a worse idea than a list with a test behind it.
// `set-text-stubs.test.ts` recomputes the set difference from `SET_TEXTS` and
// the contents of `src/app/revision/texts/` and asserts it equals this array,
// so adding a real page for one of these and forgetting to remove it here
// fails the suite rather than quietly leaving a good page noindexed.
// ────────────────────────────────────────────────────────────────────────────

export const STUB_SET_TEXT_SLUGS: ReadonlySet<string> = new Set([
  'the-war-of-the-worlds',
  'antony-and-cleopatra',
  'the-waste-land',
  'the-handmaids-tale',
  'a-dolls-house',
  'disabled',
  'out-out',
  'an-unknown-girl',
  'the-bright-lights-of-sarajevo',
  'still-i-rise',
  'do-not-go-gentle-into-that-good-night',
  'refugee-blues',
  'war-photographer',
  'if',
  'prayer-before-birth',
  'piano',
  'hide-and-seek',
  'half-past-two',
  'my-last-duchess',
  'sonnet-116',
  // ── Added 19 September 2026 with the Part 3 correction ────────────────────
  // Seven poems the Edexcel International GCSE anthology prescribes for 4ET1
  // and our data did not hold at all. They have no page under
  // /revision/texts, so they land here like the rest. Four of them -
  // la-belle-dame-sans-merci, the-tyger, half-caste and remember - already
  // have a real guide under /igcse/edexcel/poetry, which is why they were
  // worth adding: the guides were written and unreachable. Being listed here
  // keeps the thin catch-all page out of the sitemap while the shelf links
  // past it to the guide. See src/lib/revision/guide-locations.generated.ts.
  'blessing',
  'search-for-my-tongue',
  'la-belle-dame-sans-merci',
  'poem-at-thirty-nine',
  'the-tyger',
  'half-caste',
  'remember',
])

/**
 * Whether `/revision/texts/<slug>` is a boilerplate stub.
 *
 * NOT the right predicate for `/revision/poetry/pearson-igcse/<slug>`. All 15
 * Pearson anthology slugs are in the set above, but ONE of them -
 * `the-bright-lights-of-sarajevo` - has a real study guide on the Pearson
 * route (that page branches to a dedicated component for it and renders a
 * placeholder for the other 14). Filtering the Pearson sitemap loop on this
 * predicate would drop the single Pearson URL worth indexing, which is the
 * opposite of the intent. That loop keys on the slug the render path keys on.
 */
export function isStubSetText(slug: string): boolean {
  return STUB_SET_TEXT_SLUGS.has(slug)
}
