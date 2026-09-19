import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { textSlugFromPath, buildTextNav } from '@/lib/revision/text-nav'
import { GUIDE_LOCATIONS } from '@/lib/revision/guide-locations.generated'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { BOARDS } from '@/lib/board/board-config'
import { buildShelf } from '@/lib/revision/shelf'

/**
 * Following a set text out of the product.
 *
 * WHAT THE FOUNDER HIT, on 19 September 2026, caused by a change shipped the
 * same morning. He chose IGCSE Language, clicked The Yellow Wallpaper, and
 * landed somewhere that looked like an unrelated overview page. Two separate
 * defects, and the second was mine.
 *
 * ONE. THE TEXT WAS NOT ON THAT COURSE AT ALL. The Yellow Wallpaper carried an
 * `edexcel-igcse-lang` tag and is verifiably not in the Pearson Edexcel
 * International GCSE English Anthology, Issue 8. The obvious alternative - that
 * it was a mis-tagged Cambridge text - was tested against 0475 for 2026, 2027
 * and 2028-2030, and falsified. The tag had been left in place "pending a
 * source", which confused two different questions: where does this belong, and
 * is this claim false. The second had an answer.
 *
 * TWO. THE GUIDE LIVED OUTSIDE THE SHELL. Nine set texts keep their only real
 * guide under /resources/revision-notes - The Yellow Wallpaper at 825 lines,
 * A Doll's House at 1,315, Antony and Cleopatra at 1,491 - and the board
 * shelves had just been corrected to link straight to them instead of to a
 * placeholder. That made them reachable and threw the reader out of the product
 * to do it: `RevisionShell` mounts on /revision, /igcse and /a-level and did not
 * mount there, and those pages carry no breadcrumb of their own. The sidebar,
 * the board context and the text-scoped rail all vanished at the moment the
 * student arrived at the thing they were looking for.
 *
 * THE RULE THIS FILE ENFORCES. A student who follows a text from a board shelf
 * stays inside the product: the page is wrapped in the shell, and the rail
 * knows which text they are reading. Reaching a guide is not enough if arriving
 * there feels like leaving.
 */

const ROOT = process.cwd()

/** The layouts that mount the study shell. */
const SHELLED_TREES = ['revision', 'igcse', 'a-level', 'resources/revision-notes']

function layoutMountsShell(tree: string): boolean {
  const file = join(ROOT, 'src/app', tree, 'layout.tsx')
  if (!existsSync(file)) return false
  const src = readFileSync(file, 'utf8')
  // RENDERED, not merely imported. The first version of this checked for the
  // string "RevisionShell" anywhere in the file and a mutant survived it:
  // replacing `return <RevisionShell>{children}</RevisionShell>` with
  // `return children` leaves the import line untouched, so the word is still
  // there and the assertion still passed while the shell was gone.
  return /<RevisionShell[\s>]/.test(src)
}

/** Is this href inside a tree whose layout mounts the shell? */
function insideShell(href: string): boolean {
  return SHELLED_TREES.some((t) => href.startsWith(`/${t}/`) || href === `/${t}`)
}

describe('the trees that hold guides all mount the shell', () => {
  it.each(SHELLED_TREES)('/%s has a layout that mounts RevisionShell', (tree) => {
    expect(layoutMountsShell(tree), `/${tree} does not mount the shell`).toBe(true)
  })

  it('and revision-notes is the one that was missing it', () => {
    // Named, because this is the specific regression. If someone removes it,
    // the nine guides go back to dropping the reader out of the product.
    expect(layoutMountsShell('resources/revision-notes')).toBe(true)
  })
})

describe('every link a board shelf emits stays inside the shell', () => {
  it('has no escape hatches', () => {
    const escapes: string[] = []
    for (const board of BOARDS) {
      for (const entry of buildShelf(board.id)) {
        if (!insideShell(entry.href)) {
          escapes.push(`${board.id}: ${entry.text.slug} -> ${entry.href}`)
        }
      }
    }
    expect(escapes).toEqual([])
  })

  it('and there are enough links for that to mean something', () => {
    const total = BOARDS.reduce((n, b) => n + buildShelf(b.id).length, 0)
    expect(total).toBeGreaterThan(100)
  })
})

describe('the rail knows which text you are reading, in every tree', () => {
  it.each([...GUIDE_LOCATIONS].flatMap(([slug, gs]) => gs.map((g) => [slug, g.href] as const)))(
    'recognises %s at %s',
    (slug, href) => {
      expect(textSlugFromPath(href), `${href} does not resolve to a text`).toBe(slug)
    },
  )

  it('still recognises the canonical location', () => {
    expect(textSlugFromPath('/revision/texts/macbeth')).toBe('macbeth')
    expect(textSlugFromPath('/revision/texts/macbeth/themes')).toBe('macbeth')
  })

  it.each([
    ['/revision/texts', 'the set-text shelf'],
    ['/resources/revision-notes', 'the revision-notes hub'],
    ['/igcse/edexcel/poetry', 'the poetry hub'],
    ['/resources', 'the resources library'],
    ['/', 'the homepage'],
  ])('does not mistake %s (%s) for a text', (path) => {
    // A bare hub is not a text. Resolving one would put a text-scoped rail on a
    // page about every text.
    expect(textSlugFromPath(path)).toBeNull()
  })
})

describe('the rail points back at the guide you are reading', () => {
  it.each([
    [
      'explorers-or-boys-messing-about',
      '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    ],
    ['the-yellow-wallpaper', '/resources/revision-notes/the-yellow-wallpaper'],
    ['disabled', '/igcse/edexcel/poetry/disabled'],
    ['macbeth', '/revision/texts/macbeth'],
  ])('%s hub is %s', (slug, expected) => {
    expect(buildTextNav(slug).hubHref).toBe(expected)
  })
})

describe('the six texts that were on a course that does not set them', () => {
  const ORPHANS = [
    'refugee-blues',
    'the-door',
    'the-pedestrian',
    'the-yellow-wallpaper',
    'when-greek-meets-greek',
    'the-man-who-loved-flowers',
  ]

  it.each(ORPHANS)('%s is on no board shelf', (slug) => {
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text, `${slug} is missing from SET_TEXTS`).toBeTruthy()
    expect(text?.boards, `${slug} still claims a board`).toEqual([])
  })

  it.each(ORPHANS)('%s is still reachable, not deleted', (slug) => {
    // Removing a false claim must not remove the text. These keep their row, so
    // they stay in the all-texts index and at their own URL.
    const text = SET_TEXTS.find((t) => t.slug === slug)
    expect(text?.title).toBeTruthy()
    expect(text?.author).toBeTruthy()
  })

  it('none of them appears on any shelf', () => {
    const onShelf = BOARDS.flatMap((b) => buildShelf(b.id).map((e) => e.text.slug))
    for (const slug of ORPHANS) {
      expect(onShelf, `${slug} is still on a shelf`).not.toContain(slug)
    }
  })
})
