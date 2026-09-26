/**
 * Matching for the text search: "I know my text, take me to it".
 *
 * DELIBERATELY FREE OF IMPORTS. The search box is a client component on the
 * homepage, and this module is all of it the browser needs. The index is built
 * on the server (text-search-index.ts) and handed over as plain data, so the
 * set-text table, the shelf and the generated registers never reach the bundle.
 *
 * WHAT A STUDENT TYPES, AND WHAT EACH RULE IS FOR:
 * - a title, or the start of one ("inspector", "ozy"): word-prefix matching.
 * - an author's surname ("priestley"): authors are searched too.
 * - the short forms teachers use ("aic", "acc", "omam"): initials of the title.
 * - "r&j", "p&c": the ampersand is read as "and".
 * - a misspelling ("machbeth", "ozymandius"): if nothing matches exactly, one
 *   wrong letter is forgiven in a word of five or more, two in a word of eight.
 * - accents and apostrophes ("emigree", "farmers bride"): both are dropped.
 */

export interface TextSearchEntry {
  title: string
  /** Author or poet, without dates. Empty for an anthology hub. */
  by: string
  href: string
  /** Where it is examined, or which anthology it is in. */
  context: string
  kind: 'text' | 'poem' | 'collection'
  /**
   * 'full' for a multi-section guide and 'none' for a text whose guide is not
   * written yet, so a result never promises more than the page holds. Absent
   * for a single-page guide, which is a real guide and needs no label.
   */
  status?: 'full' | 'none'
  /** Normalised words to match against: title, author, context, aliases. */
  terms: string
  /** Initials of the title, when it has three words or more. */
  initials?: string
}

export interface TextSearchResult {
  results: TextSearchEntry[]
  total: number
}

/** Lower case, no accents, no apostrophes, "&" as "and", words split by one space. */
export function normalise(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['‘’`]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Initials of a title of three words or more: "An Inspector Calls" is "aic". */
export function initialsOf(title: string): string | undefined {
  const words = normalise(title).split(' ').filter(Boolean)
  return words.length >= 3 ? words.map((w) => w[0]).join('') : undefined
}

/** Edit distance, giving up as soon as it passes `max`. */
function within(a: string, b: string, max: number): boolean {
  if (Math.abs(a.length - b.length) > max) return false
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j)
  for (let i = 1; i <= a.length; i++) {
    const row = [i]
    let best = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + cost)
      if (row[j] < best) best = row[j]
    }
    if (best > max) return false
    prev = row
  }
  return prev[b.length] <= max
}

function allowance(token: string): number {
  if (token.length >= 8) return 2
  if (token.length >= 5) return 1
  return 0
}

/** Does `token` begin some word in `words`, or come close to one? */
function tokenMatches(token: string, words: readonly string[], fuzzy: boolean): boolean {
  if (words.some((w) => w.startsWith(token))) return true
  if (!fuzzy) return false
  const max = allowance(token)
  if (max === 0) return false
  // Compare against the word, and against its start at the token's length, so
  // a misspelt prefix ("machbe") still finds "macbeth".
  return words.some(
    (w) =>
      within(token, w, max) ||
      (w.length > token.length && within(token, w.slice(0, token.length), max)),
  )
}

function score(
  entry: TextSearchEntry,
  q: string,
  tokens: readonly string[],
  fuzzy: boolean,
): number {
  const title = normalise(entry.title)
  const titleWords = title.split(' ')
  let s: number
  if (title === q) s = 1000
  else if (title.startsWith(q)) s = 800
  else if (entry.initials && entry.initials === q.replace(/ /g, '')) s = 700
  else if (tokens.every((t) => tokenMatches(t, titleWords, false))) s = 600
  else if (entry.by && tokens.every((t) => tokenMatches(t, normalise(entry.by).split(' '), false)))
    s = 450
  else s = 300
  if (fuzzy) s -= 150
  // A text with no guide yet is still worth finding, but not first.
  if (entry.status === 'none') s -= 60
  return s
}

/**
 * The entries matching `query`, best first, at most `limit` of them, and how
 * many matched in all. Fewer than two characters matches nothing: one letter
 * finds half the index, which helps no one.
 */
export function searchTexts(
  index: readonly TextSearchEntry[],
  query: string,
  limit = 8,
): TextSearchResult {
  const q = normalise(query)
  if (q.length < 2) return { results: [], total: 0 }
  const tokens = q.split(' ')
  const compact = q.replace(/ /g, '')

  const run = (fuzzy: boolean) =>
    index
      .filter((e) => {
        if (e.initials && e.initials === compact && compact.length >= 3) return true
        const words = e.terms.split(' ')
        return tokens.every((t) => tokenMatches(t, words, fuzzy))
      })
      .map((e) => ({ e, s: score(e, q, tokens, fuzzy) }))

  let hits = run(false)
  if (hits.length === 0) hits = run(true)

  hits.sort(
    (a, b) =>
      b.s - a.s || a.e.title.length - b.e.title.length || a.e.title.localeCompare(b.e.title),
  )
  return { results: hits.slice(0, limit).map((h) => h.e), total: hits.length }
}
