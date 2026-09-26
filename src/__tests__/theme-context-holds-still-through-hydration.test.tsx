// @vitest-environment jsdom
import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup, act } from '@testing-library/react'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { ThemeProvider, useTheme } from '@/components/theme/theme-provider'

/**
 * The theme context publishes one value through mount.
 *
 * THE DEFECT, found 26 September 2026. next-themes 0.4.6 subscribed to
 * prefers-color-scheme on mount and put the result in state its context value
 * depended on, even with system theming off. Whenever the OS scheme differed
 * from the stored or default theme, the provider published a new context value
 * during hydration. React 19 cannot see the consumers inside a Suspense
 * boundary that has not hydrated, so it discarded the boundary's server HTML
 * and rebuilt it on the client, and the root loading.tsx makes the whole page
 * one such boundary. On the homepage, with a warm cache and a dark OS scheme,
 * that happened on 3 of 4 local loads before the fix and 0 of 4 after, and on
 * 2 of 3 production loads.
 *
 * What this observes is the mechanism: a consumer rendered under the provider
 * must see exactly one context value from first render to settled mount, in
 * every combination of OS scheme and stored theme. The old provider published
 * two in three of the four combinations below.
 */

function stubOsScheme(dark: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: dark && query.includes('dark'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

function mountAndRecord() {
  const seen: unknown[] = []
  function Probe() {
    seen.push(useTheme())
    return null
  }
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  )
  return seen
}

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.className = ''
})

describe('the theme context', () => {
  it.each([
    ['a dark OS, nothing stored', true, null],
    ['a light OS, dark stored', false, 'dark'],
    ['a dark OS, light stored', true, 'light'],
    ['a light OS, nothing stored', false, null],
  ])('publishes one value through mount on %s', (_label, osDark, stored) => {
    stubOsScheme(osDark as boolean)
    if (stored) localStorage.setItem('theme', stored as string)
    const seen = mountAndRecord()
    expect(new Set(seen).size, 'the context value changed during mount').toBe(1)
  })

  it('follows the stored choice, and light otherwise', () => {
    stubOsScheme(true)
    localStorage.setItem('theme', 'dark')
    const seen = mountAndRecord()
    expect((seen[0] as { theme: string }).theme).toBe('dark')
    cleanup()
    localStorage.clear()
    const again = mountAndRecord()
    expect((again[0] as { theme: string }).theme).toBe('light')
  })

  it('still changes when the student changes it, and says so on <html>', () => {
    stubOsScheme(false)
    let api: ReturnType<typeof useTheme> | undefined
    function Grab() {
      api = useTheme()
      return null
    }
    render(
      <ThemeProvider>
        <Grab />
      </ThemeProvider>,
    )
    act(() => api!.setTheme('dark'))
    expect(api!.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('follows a change made in another tab', () => {
    stubOsScheme(false)
    let api: ReturnType<typeof useTheme> | undefined
    function Grab() {
      api = useTheme()
      return null
    }
    render(
      <ThemeProvider>
        <Grab />
      </ThemeProvider>,
    )
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: 'theme', newValue: 'dark' }))
    })
    expect(api!.theme).toBe('dark')
  })
})

describe('the codebase', () => {
  it('no longer imports next-themes anywhere', () => {
    // Its provider is the defect above; its useTheme reads its own context,
    // which nothing provides any more, so an import would silently read nothing.
    const hits: string[] = []
    const walk = (dir: string) => {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, e.name)
        if (e.isDirectory()) {
          if (e.name !== '__tests__' && e.name !== 'generated') walk(p)
        } else if (
          /\.(tsx?|jsx?|mjs)$/.test(e.name) &&
          /from ['"]next-themes['"]/.test(readFileSync(p, 'utf8'))
        ) {
          hits.push(p)
        }
      }
    }
    walk(join(process.cwd(), 'src'))
    expect(hits).toEqual([])
  })

  it('keeps the pre-paint script, so the page never flashes the wrong theme', () => {
    const src = readFileSync(join(process.cwd(), 'src/components/theme/theme-provider.tsx'), 'utf8')
    expect(src).toMatch(/dangerouslySetInnerHTML=\{\{ __html: PRE_PAINT \}\}/)
    expect(src).toMatch(/localStorage\.getItem/)
  })
})
