// @vitest-environment jsdom
//
// The render assertion drives the real viewer, which needs a DOM.
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { InteractiveTextViewer } from '@/components/study/InteractiveTextViewer'
import { decodeHtmlEntities } from '@/lib/html/decode-entities'

/**
 * Hamlet's stage directions read "Enter two Clowns with spades, &amp;c."
 *
 * FOUND 26 September 2026, by the same sitemap crawl that found the tr()
 * strings: eight full-text readers served a literal "&amp;c." (Hamlet six
 * times). Here the data is right. The plays are stored as HTML, and in HTML an
 * ampersand is written `&amp;`. The defect is the annotated render path, which
 * strips the tags with a regex and hands what is left to React as TEXT, so the
 * references were never decoded. It only runs when an overlay is on, which is
 * the default, so the path a student actually sees was the broken one.
 *
 * MUTATION RUN: with the decodeHtmlEntities call removed from
 * AnnotatedContent, the render test below fails on "&amp;c.".
 */

const SPAN = 'Enter two Clowns'
const data = {
  title: 'Hamlet',
  author: 'William Shakespeare',
  type: 'play' as const,
  sections: [
    {
      id: 'act-5-scene-1',
      title: 'Act 5, Scene 1',
      content: `<p>${SPAN} with spades, &amp;c.</p><p>Is &lt;this&gt; &ldquo;Christian burial&rdquo;?</p>`,
      annotations: [{ type: 'quote' as const, text: SPAN, note: 'The gravediggers enter.' }],
    },
  ],
}

describe('the annotated reader renders characters, not references', () => {
  it('shows "&c." where the HTML says "&amp;c."', () => {
    const { container } = render(<InteractiveTextViewer data={data} storageKey="test-entities" />)
    const text = container.textContent ?? ''
    // The annotation must have matched, or this is the innerHTML path and
    // proves nothing about the annotated one. Its highlight is the proof. (This
    // looked for the .whitespace-pre-line wrapper until 2 October 2026, when the
    // test landed on main: the reader had been rebuilt in the meantime to keep a
    // scene's markup under its notes, and that wrapper was removed on purpose.)
    const highlight = [...container.querySelectorAll('[role="button"]')].find((el) =>
      (el.textContent ?? '').includes(SPAN),
    )
    expect(highlight, 'the annotated text path did not run').toBeDefined()
    expect(text).toContain('with spades, &c.')
    expect(text).not.toContain('&amp;')
    expect(text).toContain('Is <this> “Christian burial”?')
  })
})

describe('decodeHtmlEntities', () => {
  it('decodes named and numeric references', () => {
    expect(decodeHtmlEntities('Witches&apos; &amp; Macbeth&rsquo;s &#8220;fair&#x201D;')).toBe(
      "Witches' & Macbeth’s “fair”",
    )
  })

  it('leaves text that only looks like a reference exactly as written', () => {
    // Guessing would turn a garbled translation into a different garble.
    expect(decodeHtmlEntities('R&D, &wla; and &#0; stay')).toBe('R&D, &wla; and &#0; stay')
  })

  it('decodes once, so an escaped reference survives as text', () => {
    // "&amp;amp;" is the text "&amp;". Decoding twice would lose that.
    expect(decodeHtmlEntities('&amp;amp;')).toBe('&amp;')
  })
})
