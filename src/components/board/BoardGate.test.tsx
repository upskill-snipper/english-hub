// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9).

/**
 * When the "Which exam board do you study?" modal asks, and when it must not.
 *
 * 2 October 2026. A visitor who chose IGCSE, then Edexcel Language, then
 * opened a text was asked again. Two causes are pinned here, rendering the
 * real component with the real board store:
 *
 *   - the modal asked on pages whose URL already names the board, where no
 *     answer could change the page (see BOARD_SPECIFIC_PREFIXES);
 *   - it read the board cookie once, on mount, so a board the middleware saved
 *     during a client-side navigation was invisible to it until a full reload.
 *
 * The first case below is the counterweight: a visitor with no board on a page
 * that IS filtered by board must still be asked, or a gate that never opened
 * would pass everything else here.
 *
 * 24 October 2026. On a phone the pop-up could not be used and the page behind
 * it could not be scrolled (see BoardGate.tsx). The second block pins the fix:
 * one tap chooses, the page is refreshed, the lock is released, and the
 * layout lets a card taller than the screen scroll from its top.
 */
import * as React from 'react'
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'

let pathname = '/revision/texts/night'
const refresh = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
  useRouter: () => ({ refresh, push: vi.fn() }),
}))
vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))
vi.mock('@/lib/gtag', () => ({ events: { boardSelected: vi.fn() } }))

import { BoardGate } from './BoardGate'
import { QUICK_PICK_GROUPS } from './BoardQuickPicker'
import { useBoardStore } from '@/lib/board/board-store'
import { BOARDS } from '@/lib/board/board-config'
import { heldScrollLocks } from '@/lib/ui/scroll-lock'

// A fresh element each time: rerendering the same element object lets React
// skip the component, where a real navigation re-renders it through
// usePathname's context.
const page = () => (
  <BoardGate>
    <p>page</p>
  </BoardGate>
)

beforeEach(() => {
  pathname = '/revision/texts/night'
  document.cookie = 'english-hub-board=; path=/; max-age=0'
  useBoardStore.setState({ board: null, isHydrated: true })
  // The cookie banner has been answered (see the last test for when it has not).
  localStorage.setItem('cookie-consent', 'essential')
  refresh.mockClear()
})
afterEach(cleanup)

describe('BoardGate', () => {
  it('asks a visitor with no board on a page filtered by board', () => {
    render(page())
    expect(screen.queryByRole('dialog')).not.toBeNull()
  })

  it('does not ask when the store has a board', () => {
    useBoardStore.setState({ board: 'edexcel-igcse-lang' })
    render(page())
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('notices a board saved after it mounted, on the next page', () => {
    // The middleware writes the cookie on a navigation carrying ?setBoard=;
    // a client-side navigation leaves the store as it was.
    const { rerender } = render(page())
    expect(screen.queryByRole('dialog')).not.toBeNull()
    document.cookie = 'english-hub-board=edexcel-igcse-lang; path=/'
    pathname = '/revision/texts/the-necklace'
    rerender(page())
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it.each([
    '/igcse',
    '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    '/igcse/edexcel/poetry/out-out',
    '/igcse/cambridge/0500',
    '/a-level/aqa',
  ])('never asks on %s, whose URL names the board', (path) => {
    pathname = path
    render(page())
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})

describe('on a phone (24 October 2026)', () => {
  it('chooses a board with one tap, closes, refreshes the page and unlocks it', () => {
    render(page())
    expect(document.body.style.overflow).toBe('hidden')
    fireEvent.click(screen.getByRole('button', { name: 'AQA' }))
    expect(useBoardStore.getState().board).toBe('aqa')
    expect(document.cookie).toContain('english-hub-board=aqa')
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(refresh).toHaveBeenCalledOnce()
    expect(document.body.style.overflow).toBe('')
    expect(heldScrollLocks()).toBe(0)
  })

  it('unlocks the page when the visitor browses without choosing', () => {
    render(page())
    fireEvent.click(screen.getByRole('button', { name: 'board.gate.browse_without' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.body.style.overflow).toBe('')
    expect(useBoardStore.getState().board).toBeNull()
  })

  it('scrolls the overlay itself, from a frame at least the screen high that starts at the top', () => {
    // The defect: a flex box centred in a fixed overlay. A card taller than
    // the screen overflowed upwards, out of reach of any scrolling.
    render(page())
    const overlay = screen.getByRole('dialog')
    expect(overlay.className).toMatch(/\boverflow-y-auto\b/)
    expect(overlay.className).not.toMatch(/\bitems-center\b/)
    const frame = overlay.querySelector('[data-board-gate-frame]') as HTMLElement
    expect(frame.className).toMatch(/\bmin-h-full\b/)
    expect(frame.className).toMatch(/(^|\s)items-start(\s|$)/)
  })

  it('waits for the cookie banner to be answered, so only one pop-up shows at a time', () => {
    localStorage.removeItem('cookie-consent')
    render(page())
    expect(screen.queryByRole('dialog')).toBeNull()
    act(() => {
      localStorage.setItem('cookie-consent', 'essential')
      window.dispatchEvent(new CustomEvent('cookie-consent-changed'))
    })
    expect(screen.queryByRole('dialog')).not.toBeNull()
  })

  it('offers every board the old three steps led to, each a real board id, once', () => {
    const ids = QUICK_PICK_GROUPS.flatMap((g) => g.boards.map((b) => b.id))
    const valid = new Set(BOARDS.map((b) => b.id))
    for (const id of ids) expect(valid.has(id), id).toBe(true)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of [
      'ks3',
      'aqa',
      'edexcel',
      'ocr',
      'eduqas',
      'cambridge-0500',
      'cambridge-0990',
      'cambridge-0475',
      'edexcel-igcse',
      'edexcel-igcse-lang',
      'aqa-a-level',
      'edexcel-a-level',
      'ocr-a-level',
      'eduqas-a-level',
      'ial-edexcel',
    ]) {
      expect(ids, id).toContain(id)
    }
  })
})
