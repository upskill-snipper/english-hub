import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync, globSync } from 'node:fs'
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
/** Every test file in the repository, for the environment assertions below. */
const ALL_TEST_FILES = globSync(['src/**/*.test.ts', 'src/**/*.test.tsx'], { cwd: ROOT }).map((f) =>
  join(ROOT, f),
)
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
describe('what the suite runs in', () => {
  const CONFIG = readFileSync(join(ROOT, 'vitest.config.ts'), 'utf8')

  it('defaults to node, not jsdom', () => {
    // MAINT-9. The default was jsdom for all 187 files while 13 use a DOM.
    // Measured on 19 September 2026: cumulative environment setup fell from
    // 200 seconds to 12, and the wall clock from 13.9 to 6.8. Flipping this
    // back would undo that silently - every annotated file would still pass,
    // so nothing else in the suite would notice.
    expect(CONFIG).toMatch(/environment: 'node'/)
  })

  it('keeps the DOM annotation on the files that need one', () => {
    // If the annotations were stripped, those files would fail outright, so
    // this asserts the count has not GROWN - a DOM creeping into a file that
    // does not need one is how the default became jsdom in the first place.
    const annotated = ALL_TEST_FILES.filter((f) =>
      readFileSync(f, 'utf8').includes('@vitest-environment jsdom'),
    )
    expect(annotated.length).toBeGreaterThan(0)
    // Raised from 16 to 17 on 20 September 2026 for
    // every-overlay-highlights-something.test.tsx, which renders the real
    // InteractiveTextViewer to prove a span carrying three authored notes shows
    // all three. That assertion cannot be made without a DOM: the defect it
    // guards was the renderer silently discarding two of them.
    //
    // Then to 18, the same day, for the-rail-knows-which-text-it-is-in.test.tsx.
    // That defect is a MISSING LINK - the marking call-to-action vanished from
    // six guides because a lookup was given the wrong slug - and a missing
    // element is not observable without rendering the component.
    //
    // Then to 19 for the-byline-dates-the-page-it-is-on.test.tsx. Same reason
    // again: the assertion that matters is that NO date is printed when none is
    // known, and an absent element cannot be asserted from source text.
    //
    // Note poem-analysis-is-in-the-html.test.tsx deliberately did NOT take this
    // count up. It renders a component too, but in the `node` environment on
    // purpose - under jsdom it would pass while production crashed, because the
    // thing it guards is a sanitiser that throws when there is no DOM.
    //
    // Then to 20 for the-html-sitemap-is-reachable.test.tsx. It renders the
    // real Footer with no board cookie, because the question is whether the
    // link is in the DOM for a visitor the footer filters against, and source
    // text cannot answer that.
    //
    // Then to 21 for one-h1-per-page.test.tsx, which asserts the heading LEVEL
    // a component renders at. That depends on a prop its caller passes, so the
    // element has to exist to be inspected.
    //
    // Then to 22 on 25 September 2026 for button-links-are-links.test.tsx. What
    // it guards is what Base UI's Button actually puts on the element (type,
    // tabindex, role) and whether Base UI logs its warning, both of which exist
    // only once the component has rendered; the source text of 1,064 call sites
    // was identical before and after the fix.
    //
    // Then to 23 on 26 September 2026 for text-search-box.test.tsx. The search
    // is a combobox, and what it must get right is behaviour: the arrow keys
    // move aria-activedescendant, Enter opens the active result, and the
    // analytics event never carries what a child typed. None of that exists
    // until the component runs; its matching rules are tested in the node
    // environment in text-search.test.ts.
    //
    // Then to 24, the same day, for theme-context-holds-still-through-hydration.
    // The defect is a context value changing between first render and settled
    // mount, which only exists once a provider mounts and its effects run: run
    // against next-themes it fails the three OS-scheme mismatches, exactly the
    // combinations that made React discard the page's server HTML in a browser.
    //
    // Then to 25, the same day, for comics-motion-waits-for-its-drawing.test.tsx.
    // What it guards is an ordering over time: a linocut piece in view stays
    // armed until its fetched drawing arrives, and is released by a failure or
    // a time limit. That is state set by effects, an observer and a settled
    // fetch, none of which runs when a component is rendered to a string.
    expect(
      annotated.length,
      'more files now claim to need a DOM - check each one',
    ).toBeLessThanOrEqual(25)
  })
})

describe('regexes that can never match', () => {
  /**
   * A literal control character inside a regex literal.
   *
   * FOUND ON 19 SEPTEMBER 2026, by accident, while chasing my own instance of
   * it. Writing a JavaScript regex from a script that interprets backslash-b
   * produces a literal BACKSPACE (U+0008) where the word boundary was meant to
   * be. The regex still compiles. It simply never matches anything, because no
   * text contains a backspace character.
   *
   * Three live guards had it:
   *
   *   - `promises-match-the-product.test.ts` asserted the copy does not say
   *     "unlimited" - and could not have failed if it did
   *   - `rate-limit.test.ts` asserted a document does not claim limits are
   *     "enforced across instances" - same
   *   - `check-copy-quality.mjs`'s "unlimited" rule, in the gate that runs on
   *     every commit, had never once fired
   *
   * All three passed for the right reason once repaired, so nothing was being
   * hidden. That is luck, not design: each was a guard that could not fail,
   * which is the exact shape this repository keeps finding.
   */
  const SOURCE_FILES = [
    ...globSync(['src/**/*.ts', 'src/**/*.tsx'], { cwd: ROOT }),
    ...globSync(['scripts/**/*.mjs'], { cwd: ROOT }),
  ].map((f) => join(ROOT, f))

  it('has files to check, or this assertion is vacuous in its own right', () => {
    expect(SOURCE_FILES.length).toBeGreaterThan(200)
  })

  it('contains no literal backspace character', () => {
    // U+0008 specifically, and only that. There is no legitimate use of a
    // backspace in source, and it is the exact byte a mangled word-boundary escape leaves
    // behind. U+0001 IS used deliberately in two places as a join delimiter
    // (`tiles.join(...)` in the sentence builder, a composite key in
    // check-eal-level-dupes), which is a real technique - so the rule is
    // narrowed to the character that caused the defect rather than widened
    // until it catches something innocent and gets relaxed.
    const BACKSPACE = String.fromCharCode(8)
    const offenders: string[] = []
    for (const file of SOURCE_FILES) {
      const text = readFileSync(file, 'utf8')
      let at = text.indexOf(BACKSPACE)
      while (at !== -1) {
        const line = text.slice(0, at).split(String.fromCharCode(10)).length
        offenders.push(`${file.replace(ROOT, '.')}:${line}`)
        at = text.indexOf(BACKSPACE, at + 1)
      }
    }
    expect(offenders).toEqual([])
  })
})
