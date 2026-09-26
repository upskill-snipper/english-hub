/**
 * The index behind the text search, built on the server.
 *
 * THREE SOURCES, ONE LIST:
 * - every set text in SET_TEXTS, sent where the shelf sends it (resolveGuide),
 *   so a text whose guide lives under /igcse or the revision-notes library is
 *   found at its guide and not at a placeholder;
 * - every poem page (poem-pages.ts), because the anthology poems are
 *   prescribed as clusters and have no set-text row of their own;
 * - the anthology hubs, so "power and conflict" finds its cluster.
 *
 * ONE ENTRY PER DESTINATION. War Photographer is a set text and a poem page at
 * the same URL; it appears once. Ozymandias has three pages on three boards and
 * appears three times, each labelled with its anthology, because a student on
 * Eduqas wants the Eduqas page.
 *
 * NOTHING HERE CLAIMS MORE THAN THE SITE HOLDS. A result names the boards that
 * set a text only where that board's list is verified (shelfIsVerified), and
 * carries 'none' when the guide is not written, which the box shows.
 */

import { BOARDS, type ExamBoard } from '@/lib/board/board-config'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { shelfIsVerified } from '@/lib/board/shelf-provenance'
import { resolveGuide } from '@/lib/revision/shelf'
import { POEM_COLLECTIONS, POEM_PAGES } from './poem-pages'
import { initialsOf, normalise, type TextSearchEntry } from './match-texts'

/** Words to match on, each once. */
function termsOf(...parts: ReadonlyArray<string | undefined>): string {
  return [...new Set(normalise(parts.filter(Boolean).join(' ')).split(' '))].join(' ')
}

/** "J.B. Priestley (1894-1984)" is "J.B. Priestley". */
function withoutDates(author: string): string {
  return author.replace(/\s*\([^)]*\)\s*/g, ' ').trim()
}

const SHORT_NAME = new Map(BOARDS.map((b) => [b.id, b.shortName]))

/**
 * Build the index.
 *
 * A text no verified board sets gets no context line rather than its category.
 * The category labels were tried first: "William Shakespeare · Shakespeare" said
 * nothing, and the prose label reads "Anthology Prose", which is false for a
 * short story in no anthology.
 */
export function buildTextSearchIndex(): TextSearchEntry[] {
  const entries: TextSearchEntry[] = []
  const seen = new Set<string>()

  for (const poem of POEM_PAGES) {
    if (seen.has(poem.href)) continue
    seen.add(poem.href)
    entries.push({
      title: poem.title,
      by: poem.poet,
      href: poem.href,
      context: poem.collection,
      kind: 'poem',
      terms: termsOf(poem.title, poem.poet, poem.collection),
      initials: initialsOf(poem.title),
    })
  }

  for (const hub of POEM_COLLECTIONS) {
    if (seen.has(hub.href)) continue
    seen.add(hub.href)
    entries.push({
      title: hub.title,
      by: '',
      href: hub.href,
      context: hub.context,
      kind: 'collection',
      terms: termsOf(hub.title, hub.context, ...(hub.aliases ?? [])),
      initials: initialsOf(hub.title),
    })
  }

  for (const text of SET_TEXTS) {
    const { readiness, href } = resolveGuide(text.slug)
    if (seen.has(href)) continue
    seen.add(href)
    const boards = text.boards
      .filter((b) => shelfIsVerified(b as ExamBoard))
      .map((b) => SHORT_NAME.get(b as ExamBoard) ?? b)
    const by = withoutDates(text.author)
    const context = boards.join(' · ')
    entries.push({
      title: text.title,
      by,
      href,
      context,
      kind: 'text',
      ...(readiness === 'full' ? { status: 'full' as const } : {}),
      ...(readiness === 'none' ? { status: 'none' as const } : {}),
      // The slug too: it holds the short names students use ("jekyll-and-hyde").
      terms: termsOf(text.title, by, context, text.slug.replace(/-/g, ' ')),
      initials: initialsOf(text.title),
    })
  }

  return entries
}
