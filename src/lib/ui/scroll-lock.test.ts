// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9).
import { describe, it, expect, beforeEach } from 'vitest'
import { heldScrollLocks, lockPageScroll } from './scroll-lock'

/**
 * The page lock shared by every overlay (24 October 2026). Each overlay used
 * to save and restore `body.style.overflow` itself, and two overlays closing
 * in the wrong order left the page frozen.
 */
beforeEach(() => {
  document.body.style.overflow = ''
})

describe('lockPageScroll', () => {
  it('locks, and unlocks when released', () => {
    const release = lockPageScroll()
    expect(document.body.style.overflow).toBe('hidden')
    release()
    expect(document.body.style.overflow).toBe('')
    expect(heldScrollLocks()).toBe(0)
  })

  it('stays locked until the LAST overlay closes, whatever the order', () => {
    // The defect: B saved 'hidden' as its previous value; A closed first and
    // unlocked; B then restored 'hidden' and the page never scrolled again.
    const a = lockPageScroll()
    const b = lockPageScroll()
    a()
    expect(document.body.style.overflow).toBe('hidden')
    b()
    expect(document.body.style.overflow).toBe('')
  })

  it('gives the page back the value it had before the first lock', () => {
    document.body.style.overflow = 'clip'
    const release = lockPageScroll()
    release()
    expect(document.body.style.overflow).toBe('clip')
  })

  it('does nothing harmful when released twice', () => {
    const a = lockPageScroll()
    const b = lockPageScroll()
    a()
    a()
    expect(document.body.style.overflow).toBe('hidden')
    b()
    expect(heldScrollLocks()).toBe(0)
  })
})
