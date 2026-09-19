import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A11Y-5: what an Arabic screen-reader user hears.
 *
 * On /ar the root element is `<html lang="ar" dir="rtl">`, and the study
 * content inside it is English by design - Macbeth, an exam extract, a
 * student's own essay. None of it carried a language mark. Verified before
 * changing anything: `InteractiveTextViewer`, which renders every full set
 * text in the product, contained zero `lang="en"` and zero `dir="ltr"`.
 *
 * So a screen reader announced English words using Arabic pronunciation rules.
 * That is not an accent; it is unintelligible. It is the product's core
 * content, and the Arabic surface is where a blind student most needs it to
 * work. WCAG 2.1 SC 3.1.2 (Language of Parts, AA) requires the language of each
 * passage to be programmatically determinable.
 *
 * Bidirectional layout is the second half: RTL rules applied to English prose
 * move trailing punctuation to the wrong end of a line and reorder anything
 * with digits or brackets, which is every act, scene and line reference.
 *
 * WHAT IS DELIBERATELY NOT MARKED. Interface copy. It is translated, so
 * wrapping it would tell a screen reader that Arabic UI is English - the same
 * defect pointing the other way. The tests below assert both directions,
 * because a component like this is easy to apply too widely.
 *
 * STILL OUTSTANDING from this item: the 169 English ARIA labels the entry lists
 * need sweeping into dictionary keys. That is a separate, larger pass and is
 * recorded in the work log rather than half-done here.
 */

const ROOT = process.cwd()
const COMPONENT = readFileSync(join(ROOT, 'src/components/i18n/EnglishText.tsx'), 'utf8')
const VIEWER = readFileSync(join(ROOT, 'src/components/study/InteractiveTextViewer.tsx'), 'utf8')
const READER = readFileSync(join(ROOT, 'src/components/study/FullTextReader.tsx'), 'utf8')

/**
 * The component's own docblock quotes `dir="ltr"` and `lang="en"` while
 * explaining them. A first version of these assertions matched that prose, so
 * deleting the attribute from the JSX left the test green. Comments are
 * stripped before asserting.
 */
const COMPONENT_CODE = COMPONENT.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the wrapper marks both things a screen reader needs', () => {
  it('the language', () => {
    expect(COMPONENT_CODE).toContain('lang="en"')
  })

  it('and the direction', () => {
    // Without dir, the text is announced correctly and rendered wrongly: on an
    // RTL page, English punctuation and line references reorder.
    expect(COMPONENT_CODE).toContain('dir="ltr"')
  })

  it('and both on the same element', () => {
    expect(COMPONENT_CODE).toMatch(/<Tag\s+lang="en"\s+dir="ltr"/)
  })

  it('and can be any element, so it does not force a div into a paragraph', () => {
    expect(COMPONENT).toContain('as: Tag = ')
  })
})

describe('the set text itself is marked', () => {
  it('the body of every section', () => {
    // The largest English surface in the product, and it had nothing.
    expect(VIEWER).toContain('<EnglishText className="text-body-lg')
    expect(VIEWER).toContain('<AnnotatedContent')
  })

  it("and the section headings, which are the work's own words", () => {
    expect(VIEWER).toContain('<EnglishText as="h2"')
    expect(VIEWER).toContain('{section.title}')
  })

  it('and the title and author on the reader', () => {
    // Matched on the attributes rather than an exact line break: prettier
    // rewraps these as the class list changes, and the first version of this
    // asserted a newline that prettier promptly removed.
    expect(READER).toMatch(/<EnglishText\s+as="h1"/)
    expect(READER).toMatch(/<EnglishText\s+as="p"/)
  })
})

describe('translated copy is left alone, which matters just as much', () => {
  it('the reading-time line is not marked as English', () => {
    // It is `t('text_viewer.words')` and friends: Arabic on an Arabic page.
    // Marking it would tell a screen reader to pronounce Arabic as English -
    // the same defect pointing the other way.
    const at = VIEWER.indexOf("t('text_viewer.words')")
    expect(at).toBeGreaterThan(-1)
    const around = VIEWER.slice(at - 300, at)
    expect(around).not.toContain('<EnglishText')
  })

  it('and the end-of-text block is not either', () => {
    const at = VIEWER.indexOf("t('text_viewer.end_of_play')")
    expect(at).toBeGreaterThan(-1)
    expect(VIEWER.slice(at - 300, at)).not.toContain('<EnglishText')
  })

  it('so the wrapper is used sparingly, not sprayed over the file', () => {
    // A component applied everywhere is the same as one applied nowhere: it
    // stops carrying information. Three sites in the viewer and two in the
    // reader is the whole of it.
    const uses = VIEWER.split('<EnglishText').length - 1
    expect(uses).toBeGreaterThan(0)
    expect(uses).toBeLessThan(6)
  })
})

describe('the defect this replaces', () => {
  it('the viewer no longer relies on ad-hoc inline attributes', () => {
    // Eleven places were already spelling out `dir="ltr" lang="en"` by hand
    // while the biggest surface had none. One component means one place to be
    // right and a grep that finds every site.
    const inline = VIEWER.match(/dir="ltr"\s+lang="en"|lang="en"\s+dir="ltr"/g) ?? []
    expect(inline).toHaveLength(0)
  })
})
