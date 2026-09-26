'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Site-wide light/dark theme provider.
 *
 * The theme system is CSS-variable based - globals.css defines the
 * `:root` (light) and `.dark` (dark) custom-property blocks, and
 * tailwind.config maps every semantic token (bg-background,
 * text-foreground, bg-card …) to `hsl(var(--…))`. This provider toggles
 * the `.dark` class on <html>, so every token-driven surface flips
 * automatically, and persists the choice in localStorage under `theme`.
 *
 * Following the OS colour scheme is intentionally OFF: a handful of legacy
 * pages still hardcode hex / force-dark and would look broken if
 * auto-flipped for OS-dark visitors. Dark is opt-in via the header toggle
 * until those pages are converted to tokens.
 *
 * WHY THIS IS NOT next-themes ANY MORE (26 September 2026). next-themes 0.4.6
 * (the latest release) subscribes to prefers-color-scheme on mount and stores
 * the result in state that its context value depends on, even with
 * enableSystem off, where the result is never used. So for every visitor whose
 * OS scheme differed from their stored or default theme (a dark-mode computer
 * that had never touched the toggle, say), the provider published a new
 * context value in the middle of hydration. React 19 cannot see the consumers
 * inside a Suspense boundary that has not hydrated yet, so it threw away that
 * boundary's server HTML and rebuilt it on the client. The root loading.tsx
 * makes the whole page one such boundary, and React 19.2 holds each streamed
 * boundary back for up to 300 ms before revealing it, so this happened on
 * ordinary visible page loads (5 of 5 warm loads of the homepage, measured):
 * the entire page rendered twice, with the discarded server copy left in a
 * hidden <div id="S:1"> until the reveal ran. See the investigation in the
 * commit that made this change.
 *
 * This provider keeps next-themes' behaviour for the settings the site used
 * (attribute "class", default "light", storage key "theme", the pre-paint
 * script, cross-tab sync, no transitions during a change) and its context
 * value changes only when the theme does.
 */

export type Theme = 'light' | 'dark'

const THEMES: readonly Theme[] = ['light', 'dark']
const STORAGE_KEY = 'theme'

export interface ThemeContextValue {
  /** Undefined on the server, which cannot read the stored choice. */
  theme: Theme | undefined
  /** The same as `theme`: with no system mode there is nothing to resolve. */
  resolvedTheme: Theme | undefined
  setTheme: (theme: Theme) => void
  themes: readonly Theme[]
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const OUTSIDE_PROVIDER: ThemeContextValue = {
  theme: undefined,
  resolvedTheme: undefined,
  setTheme: () => {},
  themes: THEMES,
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext) ?? OUTSIDE_PROVIDER
}

/** Anything stored other than "dark" is light, as the pre-paint script treats it. */
const asTheme = (stored: string | null): Theme => (stored === 'dark' ? 'dark' : 'light')

function readStored(): Theme | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    return asTheme(localStorage.getItem(STORAGE_KEY))
  } catch {
    return 'light'
  }
}

/**
 * Runs before first paint, so the page never flashes the wrong theme. It must
 * agree with readStored and applyTheme.
 */
const PRE_PAINT = `(function(){try{var d=document.documentElement,v=localStorage.getItem(${JSON.stringify(
  STORAGE_KEY,
)})==='dark'?'dark':'light';d.classList.remove('light','dark');d.classList.add(v);d.style.colorScheme=v}catch(e){}})()`

function applyTheme(theme: Theme) {
  // No transitions while the class flips, or every token-driven colour
  // animates at once. The same technique next-themes used.
  const style = document.createElement('style')
  style.appendChild(document.createTextNode('*,*::before,*::after{transition:none!important}'))
  document.head.appendChild(style)
  const root = document.documentElement
  root.classList.remove(...THEMES)
  root.classList.add(theme)
  root.style.colorScheme = theme
  window.getComputedStyle(document.body)
  setTimeout(() => style.remove(), 1)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme | undefined>(readStored)

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode or storage disabled: the choice lasts for this page only.
    }
  }, [])

  // Another tab changed the theme.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setThemeState(asTheme(e.newValue))
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  // Keep <html> in step. On mount this repeats what the pre-paint script did
  // and changes nothing; it matters when the theme is toggled.
  useEffect(() => {
    if (theme) applyTheme(theme)
  }, [theme])

  const value = useMemo(
    () => ({ theme, resolvedTheme: theme, setTheme, themes: THEMES }),
    [theme, setTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: PRE_PAINT }} />
      {children}
    </ThemeContext.Provider>
  )
}
