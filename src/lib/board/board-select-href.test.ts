/**
 * What a card on /board-select actually links to.
 *
 * 26 September 2026. The page's card arrays said `/set-texts/aqa?setBoard=aqa`,
 * and the test guarding that read the arrays. The page then rewrote every href
 * to `/revision?setBoard=<id>` before rendering it, so a student choosing a
 * board never reached their set texts and the test passed throughout. These
 * tests call the function the page calls, with the inputs the page gives it,
 * so they check the link a visitor gets rather than the one the source
 * mentions. The full account is in board-select-href.ts.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'

import { BOARDS } from './board-config'
import { boardLandingHref } from './board-landing'
import { boardSelectCardHref, boardSelectNext } from './board-select-href'

/**
 * The board ids the page's cards are built from, read from the page itself so
 * that a card added there is covered here without anyone remembering to.
 */
const PAGE = readFileSync(join(process.cwd(), 'src', 'app', 'board-select', 'page.tsx'), 'utf8')
const PAGE_BOARD_IDS = [
  ...new Set([...PAGE.matchAll(/boardLandingHref\('([a-z0-9-]+)'\)/g)].map((m) => m[1])),
]
const EAL_HREF = '/eal'

function setBoardOf(href: string): string[] {
  return new URLSearchParams(href.split(/[?#]/)[1] ?? '').getAll('setBoard')
}

describe('the page this tests', () => {
  it('builds its cards from boardLandingHref for every level it offers', () => {
    // KS3, four GCSE boards, three IGCSE. If the extraction found nothing,
    // every loop below would pass vacuously.
    for (const id of [
      'ks3',
      'aqa',
      'edexcel',
      'ocr',
      'eduqas',
      'cambridge-0500',
      'edexcel-igcse',
      'edexcel-igcse-lang',
    ]) {
      expect(PAGE_BOARD_IDS).toContain(id)
    }
  })

  it('still has an EAL card that sets no board', () => {
    expect(PAGE).toContain(`href: '${EAL_HREF}'`)
  })
})

describe('with no next, every card keeps its own landing link', () => {
  // The normal way in: a student clicks "choose your board". The founder's
  // rule is that the next page is their set texts, or the hub for a board
  // that sets none.
  it.each(PAGE_BOARD_IDS)('%s', (id) => {
    expect(boardSelectCardHref(boardLandingHref(id), undefined)).toBe(boardLandingHref(id))
  })

  it('which for a board with set texts is its shelf', () => {
    for (const id of ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse', 'edexcel-igcse-lang']) {
      expect(boardSelectCardHref(boardLandingHref(id), undefined)).toBe(
        `/set-texts/${id}?setBoard=${id}`,
      )
    }
  })

  it('and for KS3 and Cambridge is their hub', () => {
    expect(boardSelectCardHref(boardLandingHref('ks3'), undefined)).toBe('/ks3?setBoard=ks3')
    expect(boardSelectCardHref(boardLandingHref('cambridge-0500'), undefined)).toBe(
      '/igcse/cambridge/0500?setBoard=cambridge-0500',
    )
  })

  it('never the board-agnostic revision hub', () => {
    for (const id of PAGE_BOARD_IDS) {
      expect(boardSelectCardHref(boardLandingHref(id), undefined)).not.toMatch(/^\/revision\b/)
    }
  })

  it.each([
    ['null', null],
    ['an empty string', ''],
    ['a repeated parameter', ['/dashboard', '/marking']],
  ])('and %s counts as no next', (_label, raw) => {
    expect(boardSelectCardHref(boardLandingHref('aqa'), raw)).toBe(boardLandingHref('aqa'))
  })

  it('for every board the site knows, not only the ones on the page', () => {
    for (const { id } of BOARDS) {
      expect(boardSelectCardHref(boardLandingHref(id), undefined)).toBe(boardLandingHref(id))
    }
  })
})

describe('with a valid next, every card goes there and sets its board', () => {
  it.each(PAGE_BOARD_IDS)('/dashboard, %s', (id) => {
    expect(boardSelectCardHref(boardLandingHref(id), '/dashboard')).toBe(
      `/dashboard?setBoard=${id}`,
    )
  })

  it.each(['/dashboard/teacher', '/dashboard/parent', '/marking', '/revision'])('%s', (next) => {
    expect(boardSelectCardHref(boardLandingHref('ocr'), next)).toBe(`${next}?setBoard=ocr`)
  })

  it('keeps the query string the board gate put on next, and adds setBoard to it', () => {
    // The middleware builds next from path AND search. Appending "?setBoard="
    // to that gave /mock-exams?paper=1?setBoard=aqa, where setBoard is part of
    // the value of paper: no cookie, and the gate sent the visitor straight
    // back here.
    const href = boardSelectCardHref(boardLandingHref('aqa'), '/mock-exams?paper=1')
    expect(href).toBe('/mock-exams?paper=1&setBoard=aqa')
    const query = new URLSearchParams(href.split('?')[1])
    expect(query.get('paper')).toBe('1')
    expect(query.getAll('setBoard')).toEqual(['aqa'])
  })

  it('lets the card the visitor chose win over a setBoard already on next', () => {
    const href = boardSelectCardHref(boardLandingHref('aqa'), '/revision?setBoard=ocr')
    expect(setBoardOf(href)).toEqual(['aqa'])
    expect(href.startsWith('/revision?')).toBe(true)
  })

  it('puts setBoard before a fragment, where the server will see it', () => {
    expect(boardSelectCardHref(boardLandingHref('aqa'), '/dashboard#progress')).toBe(
      '/dashboard?setBoard=aqa#progress',
    )
  })
})

describe('an unsafe or unusable next is treated as absent', () => {
  // Never an open redirect, and never a fallback destination the visitor did
  // not ask for: the old code sent every one of these to /dashboard.
  const unsafe = [
    'https://evil.example/steal',
    'http://evil.example',
    '//evil.example',
    '//evil.example/dashboard',
    '/\\evil.example',
    '\\\\evil.example',
    '/dashboard\\..\\..',
    'javascript:alert(1)',
    '/javascript:alert(1)',
    'data:text/html,hi',
    '/path%2e%2e',
    '/%2F%2Fevil.example',
    'user@evil.example',
    '/@evil.example',
    '/dashboard\n/evil',
    '/dashboard\t',
    'dashboard',
    ' /dashboard',
    // Dot segments. Each passes validateRedirect, and the URL parser resolves
    // it to the pathname `//evil.example`. The first version of the helper
    // returned that pathname, so every card linked off the site.
    '/..//evil.example',
    '/.//evil.example',
    '/a/..//evil.example',
    '/dashboard/../..//evil.example',
    '/..//evil.example/dashboard?x=1',
    '/./dashboard',
    '/dashboard/..',
  ]

  it.each(unsafe)('%j', (bad) => {
    for (const id of PAGE_BOARD_IDS) {
      const href = boardSelectCardHref(boardLandingHref(id), bad)
      expect(href).toBe(boardLandingHref(id))
      expect(href.startsWith('//')).toBe(false)
      expect(href).not.toContain('evil')
      // What the browser does with it, which is the thing that matters.
      expect(new URL(href, 'https://theenglishhub.app/board-select').origin).toBe(
        'https://theenglishhub.app',
      )
    }
  })

  it('resolves to this site whatever next is, dot segments included', () => {
    // Built rather than listed, so the combinations nobody thought to write
    // down are covered too.
    const heads = ['', '/.', '/..', '/a/..', '/a/b/../..', '/./.']
    const tails = ['//evil.example', '/\\evil.example', '//evil.example/x?y=1', '/dashboard']
    for (const head of heads) {
      for (const tail of tails) {
        const next = `${head}${tail}`
        for (const id of PAGE_BOARD_IDS) {
          const href = boardSelectCardHref(boardLandingHref(id), next)
          expect(href.startsWith('//'), `${next} -> ${href}`).toBe(false)
          expect(new URL(href, 'https://theenglishhub.app/board-select').origin).toBe(
            'https://theenglishhub.app',
          )
        }
      }
    }
  })

  it.each(['/board-select', '/board-select?next=/dashboard', '/board-select/'])(
    'a next that points back at the picker, %s',
    (loop) => {
      expect(boardSelectCardHref(boardLandingHref('aqa'), loop)).toBe(boardLandingHref('aqa'))
    },
  )
})

describe('the EAL card is never touched', () => {
  it.each([
    ['no next', undefined],
    ['a valid next', '/dashboard'],
    ['an unsafe next', '//evil.example'],
  ])('%s', (_label, raw) => {
    expect(boardSelectCardHref(EAL_HREF, raw)).toBe(EAL_HREF)
  })
})

describe('boardSelectNext', () => {
  it('returns a safe same-site path unchanged, /dashboard included', () => {
    // /dashboard is validateRedirect's fallback value as well as a real
    // destination. Telling them apart by comparing with '/dashboard' would
    // throw the real one away.
    expect(boardSelectNext('/dashboard')).toBe('/dashboard')
    expect(boardSelectNext('/mock-exams?paper=1')).toBe('/mock-exams?paper=1')
    // A dot in a name, or dots in the query, are not dot segments.
    expect(boardSelectNext('/blog/v1.2-notes')).toBe('/blog/v1.2-notes')
    expect(boardSelectNext('/search?q=../x')).toBe('/search?q=../x')
  })

  it('returns null for anything it will not honour', () => {
    expect(boardSelectNext(undefined)).toBeNull()
    expect(boardSelectNext(null)).toBeNull()
    expect(boardSelectNext('')).toBeNull()
    expect(boardSelectNext(['/dashboard'])).toBeNull()
    expect(boardSelectNext('//evil.example')).toBeNull()
    expect(boardSelectNext('/..//evil.example')).toBeNull()
    expect(boardSelectNext('/board-select')).toBeNull()
  })
})
