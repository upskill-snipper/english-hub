import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, sep } from 'node:path'

/**
 * Exactly one main landmark per page, and exactly one #main-content.
 *
 * THE DEFECT (19 September 2026). `RootLayoutShell` wraps every route outside
 * /school in `<div id="main-content" role="main">`. That div is the skip-link
 * target for the whole site. 153 page and component files then rendered their
 * OWN `<main>` inside it, and 20 of those also carried `id="main-content"`.
 *
 * Two failures, both on essentially every page:
 *
 *   • Two main landmarks. A screen-reader user asking for the main content is
 *     offered a choice between two, one of which is the entire page. ARIA
 *     permits one.
 *   • A duplicate id on those 20. The HTML is invalid, and "skip to content"
 *     resolves to whichever the browser finds first - the outer wrapper - so
 *     the skip link silently did nothing for the reader it exists for.
 *
 * `<main>` and `<div>` are both display:block, so demoting the inner elements
 * changes no layout; the outer wrapper keeps the landmark and the id.
 *
 * /school and /demo/school are the exception: RootLayoutShell returns bare
 * children for them, so their own <main> IS the only landmark and must stay.
 */

const APP = join(process.cwd(), 'src/app')
const SHELL = join(process.cwd(), 'src/components/layout/root-layout-shell.tsx')

/** Routes where RootLayoutShell renders no wrapper of its own. */
const SHELL_EXEMPT = ['src/app/school', 'src/app/demo/school']

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      walk(full, out)
      continue
    }
    if (name.endsWith('.tsx')) out.push(full)
  }
  return out
}

const ALL = walk(APP)
const rel = (f: string) => f.replace(process.cwd(), '').replace(/\\/g, '/').replace(/^\//, '')
const isExempt = (f: string) => SHELL_EXEMPT.some((p) => rel(f).startsWith(p + '/'))

const insideShell = ALL.filter((f) => !isExempt(f))
const exempt = ALL.filter(isExempt)

describe('the layout shell', () => {
  const shell = readFileSync(SHELL, 'utf8')

  it('still provides the landmark every page relies on', () => {
    expect(shell).toContain('id="main-content"')
    expect(shell).toContain('role="main"')
  })

  it('still bypasses itself on the school routes', () => {
    // Those routes have their own full layout, so their own <main> is correct.
    expect(shell).toContain('FULL_LAYOUT_PREFIXES')
    expect(shell).toContain('return <>{children}</>')
  })
})

describe('pages inside the shell', () => {
  it('scans the whole app, or this guards nothing', () => {
    expect(insideShell.length).toBeGreaterThan(500)
  })

  it('render no <main> of their own, because it would nest inside role="main"', () => {
    const offenders = insideShell.filter((f) => /<main[\s>]/.test(readFileSync(f, 'utf8'))).map(rel)
    expect(
      offenders,
      `these nest a second main landmark inside the shell's role="main":\n  ${offenders.join('\n  ')}\n` +
        'Use a <div> - the shell already provides the landmark.',
    ).toEqual([])
  })

  it('carry no second id="main-content"', () => {
    // A duplicate id makes "skip to content" resolve to the outer wrapper, so
    // the skip link does nothing for the reader it exists for.
    const offenders = insideShell
      .filter((f) => readFileSync(f, 'utf8').includes('id="main-content"'))
      .map(rel)
    expect(offenders).toEqual([])
  })
})

describe('the school routes, which bypass the shell', () => {
  it('keep their own main landmark', () => {
    // If this ever reads zero, those pages have NO landmark at all - the
    // opposite defect, and one the test above would not catch.
    const withMain = exempt.filter((f) => /<main[\s>]/.test(readFileSync(f, 'utf8')))
    expect(withMain.length).toBeGreaterThan(0)
  })

  it('never render two at once in the same component', () => {
    // school-portal-gate.tsx has two, but in mutually exclusive branches:
    // NotAuthorised() returns instead of the portal layout.
    for (const f of exempt) {
      const src = readFileSync(f, 'utf8')
      const count = (src.match(/<main[\s>]/g) ?? []).length
      if (count <= 1) continue
      expect(
        src,
        `${rel(f)} has ${count} <main> elements - confirm they are exclusive branches`,
      ).toMatch(/function NotAuthorised|return \(/)
    }
  })
})
