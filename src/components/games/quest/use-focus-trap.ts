'use client'

import { useEffect, type RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Keeps Tab inside a full-screen view (the level player, the comic): from the
 * last control it goes round to the first, and Shift+Tab the other way. The
 * page behind is covered, so a keyboard user who tabbed out of the view would
 * be moving through controls they cannot see.
 *
 * Only Tab is held. A pointer still reaches anything drawn above the view,
 * which is the site's cookie notice: it must stay answerable at all times.
 */
export function useFocusTrap(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const box = root.current
      if (e.key !== 'Tab' || !box) return
      const items = [...box.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => {
        if (el.closest('[hidden], [inert]')) return false
        const style = getComputedStyle(el)
        return style.display !== 'none' && style.visibility !== 'hidden'
      })
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (!active || !box.contains(active)) {
        e.preventDefault()
        ;(e.shiftKey ? last : first).focus()
      } else if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [root])
}
