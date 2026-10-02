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
 */
import * as React from 'react'
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

let pathname = '/revision/texts/night'
vi.mock('next/navigation', () => ({ usePathname: () => pathname }))
vi.mock('@/components/board/BoardSelectorSection', () => ({ BoardSelectorSection: () => null }))
vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

import { BoardGate } from './BoardGate'
import { useBoardStore } from '@/lib/board/board-store'

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
