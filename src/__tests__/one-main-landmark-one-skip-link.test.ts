import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A11Y-7. Two main landmarks and two skip links on the same page.
 *
 * `RootLayoutShell` wraps every non-school route in
 * `<div id="main-content" role="main">`. Components that rendered their own
 * `<main id="main-content">` inside it gave the page two main landmarks and two
 * elements carrying the same id, so a screen reader offered "main" twice and
 * the skip link had an ambiguous target.
 *
 * The audit counted 21 such files. Eighteen have since been fixed; the last was
 * ExaminerTool, at /toolkit/examiner.
 *
 * THE SCHOOL PORTAL IS NOT ONE OF THEM, and this is the part worth getting
 * right rather than fixing by pattern match. The shell returns bare children
 * for /school and /demo/school, so those pages have no wrapper and their own
 * <main> is the only one. Removing it would leave them with no main landmark at
 * all, which is worse than two.
 *
 * AND THE SKIP LINKS. There were two, both pointing at #main-content: one in
 * the root layout, translated, and one hard-coded in the header. A keyboard
 * user tabbed past both. On the Arabic surface they read as the Arabic link
 * followed by "Skip to main content" in English. The layout's survives, because
 * a skip link has to be the first focusable element in the body and the header
 * renders inside that document.
 */

const ROOT = process.cwd()
const SRC = join(ROOT, 'src')

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name)
    if (e.isDirectory()) walk(full, out)
    else if (e.name.endsWith('.tsx') && !e.name.endsWith('.test.tsx')) out.push(full)
  }
  return out
}

const FILES = walk(SRC)

/** Source with comments removed, because a docblock explaining a defect quotes it. */
function codeOf(file: string): string {
  return readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '')
}

/** Files that RENDER an element carrying id="main-content". */
const OWNERS = FILES.filter((f) => /id="main-content"/.test(codeOf(f))).map((f) =>
  f.replace(ROOT, '').replace(/\\/g, '/'),
)

describe('there is one main landmark per page', () => {
  it('the shell provides it for every non-school route', () => {
    const shell = readFileSync(join(SRC, 'components/layout/root-layout-shell.tsx'), 'utf8')
    expect(shell).toContain('id="main-content"')
    expect(shell).toContain('role="main"')
  })

  it('and returns bare children for the school portal, which has its own', () => {
    // The reason the two school files below are correct rather than duplicates.
    const shell = readFileSync(join(SRC, 'components/layout/root-layout-shell.tsx'), 'utf8')
    expect(shell).toContain('if (isSchoolRoute) {')
    expect(shell).toMatch(/return <>\{children\}<\/>/)
  })

  it('so only the shell and the school layouts own that id', () => {
    // Any other file here is rendering a second main landmark inside the
    // shell's. Named explicitly rather than counted, so a new offender is
    // reported by name.
    expect(OWNERS.sort()).toEqual(
      [
        '/src/app/demo/school/layout-client.tsx',
        '/src/app/school/school-portal-gate.tsx',
        '/src/components/layout/root-layout-shell.tsx',
      ].sort(),
    )
  })

  it('and the examiner tool no longer renders one', () => {
    // It sits at /toolkit/examiner, inside the shell's wrapper.
    const code = readFileSync(join(SRC, 'components/examiner/ExaminerTool.tsx'), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*/g, '')
    expect(code).not.toContain('<main')
    expect(code).not.toContain('id="main-content"')
  })
})

describe('there is one skip link', () => {
  const LAYOUT = readFileSync(join(SRC, 'app/layout.tsx'), 'utf8')
  const HEADER = readFileSync(join(SRC, 'components/layout/header.tsx'), 'utf8')

  it('in the root layout, where it can be first in the body', () => {
    expect(LAYOUT).toContain('href="#main-content"')
  })

  it('and it is translated rather than hard-coded', () => {
    // The removed one said "Skip to main content" in English on every locale.
    expect(LAYOUT).toContain("t('a11y.skip_short')")
    expect(LAYOUT).toContain('{skipToContent}')
  })

  it('and the header no longer renders a second', () => {
    const code = HEADER.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(code).not.toContain('href="#main-content"')
  })

  it('across the whole of src there is exactly one', () => {
    // The assertion that actually holds the line. A third could appear in any
    // layout or shell without either of the checks above noticing.
    const linking = FILES.filter((f) => {
      const code = readFileSync(f, 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*/g, '')
      return code.includes('href="#main-content"')
    }).map((f) => f.replace(ROOT, '').replace(/\\/g, '/'))
    expect(linking).toEqual(['/src/app/layout.tsx'])
  })
})
