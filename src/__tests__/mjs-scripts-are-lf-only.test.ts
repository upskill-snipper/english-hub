import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Line endings on the `.mjs` scripts, and why they are not a style question.
 *
 * THE DEFECT (19 September 2026). A `.mjs` script checked out with CRLF line
 * endings CANNOT BE IMPORTED BY VITEST. The suite fails to collect the
 * importing test with:
 *
 *   SyntaxError: Invalid or unexpected token
 *
 * and names no line, no column and no file. Both esbuild and tsc parse the very
 * same file without complaint, so nothing else in the toolchain agrees that
 * anything is wrong, which makes it unusually hard to attribute to its cause.
 *
 * It surfaced after a routine `git merge` renormalised line endings and took
 * scripts/check-route-conflicts.mjs from LF to CRLF. Thirty-one tests vanished
 * from the run - not failed, VANISHED, because the file they lived in never
 * loaded. A suite that silently sheds a whole file is worse than one that fails,
 * and this repository has a documented history of exactly that shape.
 *
 * Seven scripts under scripts/ are imported directly by tests today
 * (_guard, apply-migrations, check-contrast, check-route-conflicts,
 * growth-report, rtl-logical-classes, social-draft), so any of them can trip
 * it, and it recurs on any checkout that renormalises.
 *
 * `.gitattributes` now pins `*.mjs` and `*.cjs` to LF, which prevents it at
 * checkout. This test is the belt to that braces: .gitattributes only applies
 * to files git writes, and a script created or rewritten locally by a tool that
 * emits CRLF would slip past it.
 */

const ROOT = process.cwd()
const SCRIPTS = join(ROOT, 'scripts')

const FILES = existsSync(SCRIPTS)
  ? readdirSync(SCRIPTS).filter((f) => f.endsWith('.mjs') || f.endsWith('.cjs'))
  : []

describe('the scripts directory', () => {
  it('has scripts to check, so this is not vacuous', () => {
    expect(FILES.length).toBeGreaterThan(30)
  })

  it('contains no CRLF line endings in any .mjs or .cjs file', () => {
    const offenders = FILES.filter((f) => readFileSync(join(SCRIPTS, f), 'utf8').includes('\r\n'))
    expect(offenders, `these cannot be imported by vitest:\n  ${offenders.join('\n  ')}`).toEqual(
      [],
    )
  })
})

describe('.gitattributes', () => {
  const PATH = join(ROOT, '.gitattributes')

  it('exists, so a fresh checkout does not reintroduce CRLF', () => {
    expect(existsSync(PATH), '.gitattributes has gone').toBe(true)
  })

  it('pins .mjs to LF', () => {
    const text = readFileSync(PATH, 'utf8')
    expect(text).toMatch(/^\*\.mjs\s+text\s+eol=lf$/m)
  })

  it('does not blanket-normalise the whole repository', () => {
    // `* text=auto` would renormalise every file in one commit and bury
    // whatever else that commit was for. The rule is deliberately scoped to the
    // extensions that have actually broken.
    const text = readFileSync(PATH, 'utf8')
    const rules = text
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
    expect(rules.every((r) => r.startsWith('*.'))).toBe(true)
    expect(rules).not.toContain('* text=auto')
  })
})

describe('the scripts tests actually import', () => {
  // The seven that would take a whole test file down with them. Named
  // explicitly because they are the ones where the failure is silent.
  const IMPORTED = [
    '_guard.mjs',
    'apply-migrations.mjs',
    'check-contrast.mjs',
    'check-route-conflicts.mjs',
    'growth-report.mjs',
    'rtl-logical-classes.mjs',
    'social-draft.mjs',
  ]

  it.each(IMPORTED)('%s is LF', (name) => {
    const p = join(SCRIPTS, name)
    if (!existsSync(p)) return // covered by the directory-wide check above
    expect(readFileSync(p, 'utf8').includes('\r\n')).toBe(false)
  })
})
