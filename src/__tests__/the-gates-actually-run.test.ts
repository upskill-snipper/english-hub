import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The gates the documentation demanded, which nothing ran (MAINT-4).
 *
 * THE DEFECT (19 September 2026). CLAUDE.md said "Gates before every commit:
 * `npx tsc --noEmit`, `npx vitest run`, `node scripts/verify-i18n-locales.mjs`".
 * None of them ran anywhere. `.husky/pre-commit` runs a placeholder check and
 * lint-staged; lint-staged runs `eslint --fix` and `prettier --write`. No
 * typecheck, no tests, no i18n check existed in the mechanical path at all.
 *
 * `docs/system/01-architecture.md` said so in as many words - "There is almost
 * no pre-commit gate, whatever the convention says" - so the codebase held BOTH
 * the rule and the observation that the rule was fiction, in two files, for
 * months. This is the CLAUDE.md pattern by name: a document asserting what the
 * code does not do.
 *
 * Husky was already wired for the fix. `.husky/_/pre-push` existed and
 * dispatched to `.husky/pre-push`; its `[ ! -f "$s" ] && exit 0` is precisely
 * why nothing ran - the file it looks for had never been created.
 *
 * WHY PUSH AND NOT COMMIT. The three gates take about 20 seconds. That is too
 * slow to pay on every commit in a debugging loop and nothing once per push, so
 * commits stay cheap and `main` is protected where work leaves the machine.
 */

const ROOT = process.cwd()
const HOOK_PATH = join(ROOT, '.husky/pre-push')
const NEWLINE = String.fromCharCode(10)

describe('the pre-push hook', () => {
  it('exists, which is the entire defect', () => {
    // Husky's dispatcher exits 0 when this file is absent, silently, so its
    // absence looked exactly like success.
    expect(existsSync(HOOK_PATH)).toBe(true)
  })

  it('is dispatched by husky', () => {
    // Without _/pre-push, dropping a hook here does nothing.
    expect(existsSync(join(ROOT, '.husky/_/pre-push'))).toBe(true)
  })

  const hook = existsSync(HOOK_PATH) ? readFileSync(HOOK_PATH, 'utf8') : ''

  /**
   * The hook with its comment lines removed.
   *
   * The header lists all three gates with their timings, so searching the whole
   * file finds the PROSE and measures the distance to an `exit 1` belonging to
   * some other gate. The first version of this assertion did exactly that and
   * failed for a reason unrelated to what it was testing.
   */
  const commands = hook
    .split(NEWLINE)
    .filter((line) => !line.trim().startsWith('#'))
    .join(NEWLINE)

  it('has a shebang, without which Windows cannot spawn it', () => {
    // The pre-commit hook carries a comment explaining that its absence gives
    // "Exec format error" on Git Bash and PowerShell. Same trap here.
    expect(hook.split(/\r?\n/)[0]).toBe('#!/usr/bin/env sh')
  })

  it.each([
    ['tsc --noEmit', /npx tsc --noEmit/],
    ['vitest run', /npx vitest run/],
    ['verify-i18n-locales', /node scripts\/verify-i18n-locales\.mjs/],
  ])('runs %s', (_name, pattern) => {
    expect(commands).toMatch(pattern)
  })

  it.each([
    ['tsc --noEmit', /npx tsc --noEmit \|\| \{/],
    ['vitest run', /npx vitest run \|\| \{/],
    ['verify-i18n-locales.mjs', /node scripts\/verify-i18n-locales\.mjs \|\| \{/],
  ])('fails the push when %s fails', (gate, pattern) => {
    // A gate that runs and is ignored is worse than no gate: it looks like
    // protection.
    //
    // Asserted on STRUCTURE - the command immediately followed by `|| {` - not
    // on an `exit 1` appearing somewhere nearby. The nearby version passed with
    // the vitest guard deleted, because the NEXT gate's exit 1 fell inside the
    // window. Twice now on this codebase a proximity check has measured
    // somebody else's error handling; it is not a reliable shape for this.
    expect(commands, `${gate} runs but its failure is not fatal`).toMatch(pattern)
  })

  it('names the escape hatch', () => {
    // HUSKY=0 is honoured by husky's own dispatcher. An undocumented gate with
    // no way past it gets deleted the first time someone is in a hurry.
    expect(hook).toMatch(/HUSKY=0/)
  })
})

describe('the generated-dictionary note', () => {
  // Read defensively: deleting the hook is the exact regression this file
  // guards, and a top-level throw makes vitest report "no tests" rather than a
  // failure - which reads as a pass in a grep of the output.
  const hook = existsSync(HOOK_PATH) ? readFileSync(HOOK_PATH, 'utf8') : ''

  it('warns on a large regeneration rather than blocking it', () => {
    // The three generated files are 59,761 lines, so a whole-file rewrite is a
    // ~119,000-line diff that buries everything else. But a legitimate
    // dictionary change really is that big, and a gate that blocks correct work
    // is a gate people learn to bypass.
    expect(hook).toContain('src/lib/i18n/generated/')
    expect(hook).toMatch(/pre-push NOTE/)
    const noteAt = hook.indexOf('echo "pre-push NOTE')
    expect(noteAt).toBeGreaterThan(-1)
    expect(hook.slice(noteAt, noteAt + 500)).not.toMatch(/exit 1/)
  })

  it('offers no diagnosis, because the intuitive one is wrong', () => {
    // The generator emits double-quoted keys via JSON.stringify; the committed
    // files are single-quoted; `prettier --write` in lint-staged is what
    // CONVERTS generator output into the committed form. Prettier is the
    // repair, not the cause - and a hook that said otherwise would be the
    // "comment asserting what the code does not do" pattern all over again.
    expect(hook).toMatch(/repair, not the damage|repair, not the cause/)
  })
})

describe('the documents that disagreed with the machine', () => {
  it('CLAUDE.md no longer claims the gates run on commit', () => {
    const claude = readFileSync(join(ROOT, 'CLAUDE.md'), 'utf8')
    expect(claude).not.toMatch(/\*\*Gates before every commit:\*\*/)
    expect(claude).toMatch(/\.husky\/pre-push/)
  })

  it('the architecture doc no longer stops at "there is almost no gate"', () => {
    const arch = readFileSync(join(ROOT, 'docs/system/01-architecture.md'), 'utf8')
    const at = arch.indexOf('There is almost no pre-COMMIT gate')
    expect(at, 'the sentence was deleted rather than corrected').toBeGreaterThan(-1)
    // It must go on to say where the gates DID end up, or it is still
    // describing a codebase with no gate at all.
    expect(arch.slice(at, at + 600)).toMatch(/pre-push/)
  })
})
