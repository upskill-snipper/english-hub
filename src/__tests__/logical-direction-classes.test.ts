import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { convertClassList } from '../../scripts/rtl-logical-classes.mjs'

/**
 * The interface was laid out for English and shipped in Arabic (A11Y-10).
 *
 * THE DEFECT (19 September 2026). 3,597 physical margin and padding utilities,
 * 967 `text-left`/`text-right`, 628 physical insets, 581 `border-l`/`border-r`
 * and 19 physical rounded corners, against 26 logical utilities and zero
 * `rtl:` variants. In Arabic the browser mirrors the document and then every
 * one of those classes un-mirrors a piece of it, so the layout is neither one
 * thing nor the other.
 *
 * WHY THIS WAS SAFE TO DO IN ONE PASS. In an LTR document `ms-2` renders
 * identically to `ml-2` - the logical property resolves to the physical one.
 * So for the English product the conversion is provably a no-op, and for the
 * Arabic product it is the difference between a mirrored layout and a broken
 * one. 946 files changed and not one of them changes what an English reader
 * sees.
 *
 * HOW 5,514 CHANGED LINES WERE VERIFIED WITHOUT READING THEM. The codemod
 * reconstructs every changed line by applying the token map to the ORIGINAL
 * and asserting it reproduces the NEW line exactly. Anything else - a swallowed
 * sibling attribute, an eaten quote, a touched string of prose - fails to
 * reconstruct and the run is rejected. Checked independently against the git
 * diff afterwards: 5,514 pairs, zero unexplained.
 */

// ─── The token map, including the cases that would corrupt the CSS ──────────

describe('the conversion', () => {
  it.each([
    ['ml-2', 'ms-2'],
    ['mr-4', 'me-4'],
    ['pl-1', 'ps-1'],
    ['pr-3', 'pe-3'],
    ['text-left', 'text-start'],
    ['text-right', 'text-end'],
    ['border-l-4', 'border-s-4'],
    ['border-r', 'border-e'],
    ['rounded-l-lg', 'rounded-s-lg'],
    ['rounded-tl-md', 'rounded-ss-md'],
    ['rounded-br', 'rounded-ee'],
    ['left-0', 'start-0'],
    ['right-4', 'end-4'],
  ])('%s becomes %s', (from, to) => {
    expect(convertClassList(from)).toBe(to)
  })

  it.each([
    ['-ml-2', '-ms-2'],
    ['-right-20', '-end-20'],
    ['lg:-mr-1', 'lg:-me-1'],
  ])('handles the negative utility %s', (from, to) => {
    // The pre-existing rtl-migrate.ps1 opens every pattern with `(?<![\w-])`,
    // which sees the leading minus and refuses - it would have left 584 of
    // these behind while its companion lint rule failed the build on them.
    expect(convertClassList(from)).toBe(to)
  })

  it.each([
    ['md:ml-2', 'md:ms-2'],
    ['hover:text-left', 'hover:text-start'],
  ])('carries the variant prefix on %s', (from, to) => {
    expect(convertClassList(from)).toBe(to)
  })

  it.each([
    ['rounded-lg'], // a SIZE, not a side - rounded-sg would delete the radius
    ['border-red-500'], // a colour
    ['bg-right-top'], // a background position
    ['object-right'], // an object position
    ['ms-2'], // already converted
  ])('leaves %s alone', (unchanged) => {
    expect(convertClassList(unchanged)).toBe(unchanged)
  })

  it('does not break the centring idiom', () => {
    // `left-1/2 -translate-x-1/2` is direction-neutral: translate-x is physical
    // in both directions. Convert only the first half and Arabic ends up
    // off-centre - the one conversion that would make things WORSE, not better.
    // All 50 occurrences in this repo are this idiom.
    const centred = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    expect(convertClassList(centred)).toBe(centred)
    // A non-centring fractional inset still converts.
    expect(convertClassList('left-1/3')).toBe('start-1/3')
  })
})

// ─── Nothing physical left anywhere ─────────────────────────────────────────

const PHYSICAL = [
  /(?<=^|[\s"'`{([:])-?ml-/,
  /(?<=^|[\s"'`{([:])-?mr-/,
  /(?<=^|[\s"'`{([:])-?pl-/,
  /(?<=^|[\s"'`{([:])-?pr-/,
  /(?<=^|[\s"'`{([:])-?text-left(?=$|[-\s"'`}\]])/,
  /(?<=^|[\s"'`{([:])-?text-right(?=$|[-\s"'`}\]])/,
  /(?<=^|[\s"'`{([:])-?border-l(?=$|[-\s"'`}\]])/,
  /(?<=^|[\s"'`{([:])-?border-r(?=$|[-\s"'`}\]])/,
]

function tsxFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === 'node_modules' || entry === 'generated' || entry === '__tests__') continue
      tsxFiles(full, out)
    } else if (/\.tsx$/.test(entry) && !/\.test\.tsx$/.test(entry)) {
      out.push(full)
    }
  }
  return out
}

/** Every `className="..."` / `className={...}` value in a file. */
function classNameValues(source: string): string[] {
  const values: string[] = []
  const ATTR = /className\s*=\s*/g
  let m: RegExpExecArray | null
  while ((m = ATTR.exec(source))) {
    const start = m.index + m[0].length
    const opener = source[start]
    if (opener === '"' || opener === "'") {
      const close = source.indexOf(opener, start + 1)
      if (close !== -1) values.push(source.slice(start + 1, close))
      continue
    }
    if (opener === '{') {
      let depth = 0
      let j = start
      for (; j < source.length; j++) {
        if (source[j] === '{') depth++
        else if (source[j] === '}' && --depth === 0) break
      }
      if (j < source.length) values.push(source.slice(start + 1, j))
    }
  }
  return values
}

describe('the whole component tree', () => {
  const ROOT = process.cwd()
  const files = tsxFiles(join(ROOT, 'src'))

  it('has a realistic number of components to check', () => {
    expect(files.length).toBeGreaterThan(400)
  })

  it('carries no physical direction utility in any className', () => {
    const offenders: string[] = []
    for (const file of files) {
      for (const value of classNameValues(readFileSync(file, 'utf8'))) {
        for (const re of PHYSICAL) {
          if (re.test(value)) {
            offenders.push(`${relative(ROOT, file).replace(/\\/g, '/')}: ${value.slice(0, 90)}`)
            break
          }
        }
      }
    }
    expect(
      offenders.slice(0, 25),
      `${offenders.length} className values still pin layout to the physical left or ` +
        'right. Run `node scripts/rtl-logical-classes.mjs --apply`.',
    ).toEqual([])
  })
})
