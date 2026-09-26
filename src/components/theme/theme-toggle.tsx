'use client'

/**
 * ThemeToggle - light/dark switcher, visually paired with
 * LanguageToggle (same segmented-pill shape) so the header chrome
 * stays consistent. Uses ThemeProvider; persistence + the `.dark` class
 * on <html> are handled by the provider.
 *
 * A mounted guard prevents a hydration mismatch: the server can't know
 * the persisted theme, so we render a neutral placeholder until the
 * client resolves it.
 */

import { useEffect, useState } from 'react'
import { useTheme } from './theme-provider'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Mode = 'light' | 'dark'

const MODES: { value: Mode; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
]

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current: Mode = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-background/80 p-0.5 text-xs font-medium shadow-sm backdrop-blur',
        className,
      )}
    >
      {MODES.map((m) => {
        const Icon = m.icon
        const active = mounted && m.value === current
        return (
          <button
            key={m.value}
            type="button"
            onClick={() => setTheme(m.value)}
            aria-pressed={active}
            aria-label={`${m.label} theme`}
            title={`${m.label} theme`}
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : // Inherits the wrapper's colour rather than setting its own (A11Y-8).
                  // `text-muted-foreground` is a LIGHT-theme grey, and these toggles
                  // sit in the dark glass header: measured at 2.27:1 in a browser on
                  // 19 September 2026. The active option is already marked by a filled
                  // pill and aria-pressed, so dimming the inactive label bought nothing
                  // and cost the contrast.
                  'text-current hover:bg-white/10',
            )}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{m.label}</span>
          </button>
        )
      })}
    </div>
  )
}
