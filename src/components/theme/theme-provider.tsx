'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

/**
 * Site-wide light/dark theme provider (next-themes).
 *
 * The theme system is CSS-variable based — globals.css defines the
 * `:root` (light) and `.dark` (dark) custom-property blocks, and
 * tailwind.config maps every semantic token (bg-background,
 * text-foreground, bg-card …) to `hsl(var(--…))`. next-themes toggles
 * the `.dark` class on <html> (attribute="class"), so every
 * token-driven surface flips automatically and persists the choice.
 *
 * `enableSystem` is intentionally OFF for the initial rollout: a
 * handful of legacy pages still hardcode hex / force-dark and would
 * look broken if auto-flipped for OS-dark visitors. Dark is opt-in via
 * the header toggle until those pages are converted to tokens; flip
 * `enableSystem` on once the conversion is complete.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
