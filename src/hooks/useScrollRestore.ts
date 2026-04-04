'use client'
import { useEffect } from 'react'

// Save scroll position before navigating away
// Restore it when returning via back button
export function useScrollRestore(key?: string) {
  useEffect(() => {
    const pageKey = key || window.location.pathname

    // Restore scroll position if returning to this page
    const saved = sessionStorage.getItem(`scroll_${pageKey}`)
    if (saved) {
      const pos = parseInt(saved, 10)
      // Use requestAnimationFrame to wait for render
      requestAnimationFrame(() => {
        window.scrollTo(0, pos)
      })
      sessionStorage.removeItem(`scroll_${pageKey}`)
    }

    // Save scroll position on navigation
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll_${pageKey}`, String(window.scrollY))
    }

    // Save on any link click (Next.js client navigation)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && link.href && !link.href.startsWith('#')) {
        sessionStorage.setItem(`scroll_${pageKey}`, String(window.scrollY))
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('click', handleClick, true)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('click', handleClick, true)
    }
  }, [key])
}
