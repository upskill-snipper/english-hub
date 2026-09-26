// @vitest-environment jsdom
//
// The render assertions at the bottom drive the real viewer, which needs a DOM.
// The project default is 'node', and without this pragma they fail on
// "document is not defined" rather than on behaviour.
import { describe, it, expect } from 'vitest'
import { act } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { render, screen } from '@testing-library/react'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { TEXT_ANNOTATIONS } from '@/data/text-annotations.generated'
import { InteractiveTextViewer, type TextData } from '@/components/study/InteractiveTextViewer'
import { macbethText } from '@/data/full-texts/macbeth'

/**
 * The reader offered five highlighting overlays and highlighted almost nothing.
 *
 * REPORTED BY CALUM, and measured on the live site before the fix, on
 * /revision/texts/a-christmas-carol/read:
 *
 *     28,862 words in the text
 *        136 words highlighted          0.47% of the novella
 *          7 annotations, ALL of type 'quote'
 *          0 language, 0 theme, 0 character, 0 context - on every one of the
 *            twenty-six texts
 *
 * So four of the five toggles were controls for an empty set, everywhere, and
 * the fifth highlighted seven spans in a novella. Scrolling the text you saw
 * nothing for pages. "No quotes, no language, no themes" was an accurate
 * description of the experience even though seven quote annotations existed.
 *
 * THE CAUSES, three of them, each the same shape as everything else in this
 * codebase - working code reporting success while delivering nothing:
 *
 *   1. The generator only ever emitted `type: 'quote'`. The authored material
 *      for the other four overlays was sitting in the guides the whole time:
 *      themes[].body, characters[].body and historicalContext[] all quote the
 *      text while discussing it, and the key-quotes pages carry explicit
 *      per-quotation theme tags and technique analysis.
 *
 *   2. `const quotes: KeyQuote[] = [` was never read, because the block finder
 *      scanned for the first `[` after the declaration and found the one in the
 *      TYPE ANNOTATION, `KeyQuote[]`. It balanced that empty pair and returned
 *      an empty block. A Christmas Carol's twenty-nine authored key quotations
 *      reached nobody and the script reported no error.
 *
 *   3. `whoAr` between `who` and `analysis` broke a three-field regex, so a
 *      guide translated into Arabic produced zero annotations and did not
 *      appear in the generator's own report at all. Jekyll and Hyde had
 *      twenty-four authored quotations and contributed none.
 *
 * And a fourth, in the viewer rather than the data: co-located annotations were
 * DISCARDED. A key quotation usually carries a theme too, and the renderer's
 * overlap rule kept one match per span and dropped the rest - so with every
 * overlay on, which is the default, two of every three authored notes vanished.
 * Fixing the generator without fixing that would have produced a bigger data
 * file and the same page.
 *
 * AFTER: 315 annotations across 14 texts, all five overlays populated, and A
 * Christmas Carol at 56 rather than 7.
 *
 * MUTATIONS RUN, each verified to have altered the file before the run:
 *
 *   the viewer's co-located merge reverted to dropping       1 of 11 failed
 *   every non-quote annotation stripped from the data        4 of 11 failed
 *
 * The second is worth naming: it recreates EXACTLY the state that was
 * reported - a quote-only corpus - and four assertions catch it. If they had
 * not, this file would be decoration.
 *
 * WHAT IS STILL NOT FIXED, and must not be papered over: twelve of the
 * twenty-six full texts have no authored guide at all, so they get nothing.
 * That is a writing job, not a code job, and the generator names them on every
 * run rather than quietly reporting success over a smaller corpus.
 */

const ROOT = process.cwd()
const OVERLAYS = ['quote', 'theme', 'language', 'character', 'context'] as const

type Ann = { type: string; text: string; note: string }
const everyAnnotation = (): { slug: string; section: string; ann: Ann }[] =>
  Object.entries(TEXT_ANNOTATIONS).flatMap(([slug, sections]) =>
    Object.entries(sections).flatMap(([section, anns]) =>
      (anns as readonly Ann[]).map((ann) => ({ slug, section, ann })),
    ),
  )

describe('the generated annotations are a real corpus', () => {
  it('there are materially more than the seven that were there', () => {
    // Vacuity guard, and the headline number. Seven annotations on one text was
    // the state that produced the report.
    const all = everyAnnotation()
    expect(all.length).toBeGreaterThan(250)
    expect(Object.keys(TEXT_ANNOTATIONS).length).toBeGreaterThan(12)
  })

  it('every overlay has something to highlight, which is the actual defect', () => {
    // THE ASSERTION THAT MATTERS. Four of these five were empty on every text.
    const present = new Set(everyAnnotation().map((a) => a.ann.type))
    for (const type of OVERLAYS) {
      expect(present.has(type), `the ${type} overlay still highlights nothing anywhere`).toBe(true)
    }
  })

  it('and no annotation carries a type the viewer cannot render', () => {
    // The counterweight to the test above: inventing a sixth type would satisfy
    // "all five present" while rendering as an unstyled span.
    for (const { ann, slug } of everyAnnotation()) {
      expect(OVERLAYS, `${slug} has an unrenderable type ${ann.type}`).toContain(ann.type)
    }
  })

  it('A Christmas Carol specifically, which is the page that was reported', () => {
    const acc = Object.values(TEXT_ANNOTATIONS['a-christmas-carol'] ?? {}).flat() as Ann[]
    expect(acc.length, 'still as sparse as it was').toBeGreaterThan(40)
    for (const type of ['quote', 'theme', 'language'] as const) {
      expect(
        acc.some((a) => a.type === type),
        `A Christmas Carol still has no ${type} highlighting`,
      ).toBe(true)
    }
  })

  it('and Jekyll and Hyde, which the Arabic translation had silently emptied', () => {
    const jh = Object.values(TEXT_ANNOTATIONS['jekyll-and-hyde'] ?? {}).flat() as Ann[]
    expect(jh.length, 'the whoAr regression is back').toBeGreaterThan(20)
  })
})

describe('nothing here is invented', () => {
  it('every highlighted span occurs verbatim in our own edition', async () => {
    // THE HONESTY GUARANTEE, and the reason this check is worth more than the
    // counts above. The viewer matches an annotation against the rendered text
    // literally: a span that is not in the text highlights nothing, and a span
    // that is ALMOST in the text would mean the generator had approximated a
    // quotation. Either way the annotation must be cut from the real edition.
    const failures: string[] = []
    let checked = 0
    for (const [slug, sections] of Object.entries(TEXT_ANNOTATIONS)) {
      const mod = await import(`@/data/full-texts/${slug}`)
      const data = Object.values(mod).find(
        (v): v is { sections: { id: string; content: string }[] } =>
          !!v && typeof v === 'object' && 'sections' in (v as object),
      )
      expect(data, `${slug} has annotations but no text`).toBeDefined()
      for (const [sectionId, anns] of Object.entries(sections)) {
        const section = data!.sections.find((s) => s.id === sectionId)
        if (!section) {
          failures.push(`${slug}: annotations for missing section ${sectionId}`)
          continue
        }
        const plain = section.content.replace(/<[^>]*>/g, '')
        for (const ann of anns as readonly Ann[]) {
          checked += 1
          if (!plain.includes(ann.text)) {
            failures.push(`${slug}/${sectionId}: "${ann.text.slice(0, 60)}" is not in the text`)
          }
        }
      }
    }
    // Vacuity guard. An empty `failures` from a loop that compared nothing is
    // indistinguishable from a clean corpus, and a dynamic import that silently
    // resolved to nothing is exactly how that would happen here.
    expect(checked, 'the comparison ran against no annotations at all').toBeGreaterThan(250)
    expect(failures).toEqual([])
  })

  it('every note is authored prose, not the quotation echoed back', () => {
    for (const { slug, ann } of everyAnnotation()) {
      expect(ann.note.length, `${slug} has an empty note`).toBeGreaterThan(20)
      expect(ann.note, `${slug} echoes the span as its own note`).not.toBe(ann.text)
    }
  })

  it('and the generator still refuses the texts it has no guide for', () => {
    // Twelve texts have no authored analysis. They must be ABSENT, not present
    // with generated filler - which is the one thing this whole exercise exists
    // to avoid.
    const withText = readdirSync(join(ROOT, 'src/data/full-texts'))
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
    const annotated = Object.keys(TEXT_ANNOTATIONS)
    expect(annotated.length).toBeLessThan(withText.length)
    for (const slug of annotated) {
      expect(withText, `${slug} has annotations but no text file`).toContain(slug)
    }
  })

  it('the generator says out loud which texts it produced nothing for', () => {
    // A generator that printed only its successes is how a translated guide
    // contributed zero for weeks without anyone noticing.
    const src = readFileSync(join(ROOT, 'scripts/generate-text-annotations.mjs'), 'utf8')
    expect(src).toContain('have NO authored guide')
  })
})

describe('the viewer keeps every note on a shared span', () => {
  const SPAN = 'Old Marley was as dead as a door-nail'
  const data = {
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    type: 'novella' as const,
    sections: [
      {
        id: 'section-1',
        title: 'Stave One',
        content: `<p>${SPAN}. There is no doubt whatever about that.</p>`,
        annotations: [
          { type: 'quote' as const, text: SPAN, note: 'Narrator. The famous opening simile.' },
          {
            type: 'theme' as const,
            text: SPAN,
            note: 'Death and Mortality. Marley is truly dead.',
          },
          {
            type: 'language' as const,
            text: SPAN,
            note: 'simile. A common simile, conversationally.',
          },
        ],
      },
    ],
  }

  it('renders one highlight carrying all three authored notes', () => {
    // THE ASSERTION THAT MATTERS for the viewer half. Before the fix the
    // overlap rule kept ONE of these three and discarded the other two, so a
    // student with the default overlays on lost two notes per span. The
    // accessible name is where all of them have to survive.
    render(<InteractiveTextViewer data={data} storageKey="test-acc" />)
    const marks = screen.getAllByRole('button').filter((el) => el.textContent === SPAN)
    expect(marks, 'the span is not highlighted at all').toHaveLength(1)
    const label = marks[0].getAttribute('aria-label') ?? ''
    expect(label).toContain('The famous opening simile')
    expect(label).toContain('Death and Mortality')
    expect(label).toContain('A common simile')
  })

  it('and a span with one note still renders exactly one highlight', () => {
    // The counterweight. A merge that concatenated everything regardless of
    // span would pass the test above and corrupt every unshared annotation.
    const single = {
      ...data,
      sections: [{ ...data.sections[0], annotations: [data.sections[0].annotations[0]] }],
    }
    render(<InteractiveTextViewer data={single} storageKey="test-acc-single" />)
    const marks = screen.getAllByRole('button').filter((el) => el.textContent === SPAN)
    expect(marks).toHaveLength(1)
    expect(marks[0].getAttribute('aria-label') ?? '').toContain('The famous opening simile')
  })
})

/**
 * A scene with notes shows the student "&c.", not "&amp;c.".
 *
 * WHAT BROKE (26 September 2026). The viewer renders a scene that carries
 * notes as plain text, so it can wrap each noted line in a highlight, and it
 * made that text by deleting the HTML tags and nothing else. The entities the
 * editions escape stayed escaped and were printed as written, in any text
 * whose noted scene holds one. It surfaced when Macbeth's reader moved to the
 * held edition, whose Act 4, Scene 1 has both notes and "Black Spirits, &c.";
 * the hand-typed text it replaced had no ampersand.
 */

const ENTITY_SCENE = macbethText.sections.find((s) => s.id === 'activ-scenei')!

function renderWith(annotations: TextData['sections'][number]['annotations']) {
  const data: TextData = {
    title: 'Macbeth',
    author: 'William Shakespeare',
    type: 'play',
    sections: [{ ...ENTITY_SCENE, annotations }],
  }
  return render(<InteractiveTextViewer data={data} storageKey="test-entities" />)
}

describe('an annotated scene', () => {
  it('holds the escaped ampersand this test is about', () => {
    // If the edition stopped escaping it, the test below would prove nothing.
    expect(ENTITY_SCENE.content).toContain('&amp;c.')
  })

  it('prints the character, not the entity', () => {
    const { container } = renderWith([
      {
        type: 'language',
        text: 'Double, double, toil and trouble;',
        note: 'The chant, in the rhythm the witches keep throughout.',
      },
    ])
    const text = container.textContent ?? ''
    expect(text).toContain('Black Spirits,” &c.')
    expect(text).not.toContain('&amp;')
  })

  it('and still finds a note whose span was cut from the escaped text', () => {
    // Generated notes are cut from the section's HTML with its tags removed, so
    // a span may carry the entity. It has to land on the decoded text.
    const { container } = renderWith([
      {
        type: 'context',
        text: 'Black Spirits,” &amp;c.',
        note: 'A song the edition names only by its first words.',
      },
    ])
    const marked = [...container.querySelectorAll('[role="button"]')].map((el) => el.textContent)
    expect(marked).toContain('Black Spirits,” &c.')
  })
})

/**
 * A returning reader's page hydrates, and then shows their progress.
 *
 * WHAT BROKE (found 26 September 2026). The viewer read the ticked sections
 * and the last section from localStorage in its useState initialisers. The
 * server has no storage, so for anyone who had read before, the server said
 * "0/28" and the browser's first render said otherwise; React threw "Hydration
 * failed because the server rendered text didn't match the client" and rebuilt
 * the whole reader in the browser. Every reader page, every returning student.
 *
 * The server render is simulated with storage empty, then hydrated with it
 * full, which is exactly the difference between the two.
 */
describe('a returning reader', () => {
  const data: TextData = {
    title: 'A Test',
    author: 'An Author',
    type: 'novella',
    sections: [
      { id: 'one', title: 'Chapter One', content: '<p>The first chapter.</p>' },
      { id: 'two', title: 'Chapter Two', content: '<p>The second chapter.</p>' },
    ],
  }
  const key = 'test-returning'

  it('hydrates without a mismatch and then restores what they had read', async () => {
    localStorage.clear()
    const html = renderToString(<InteractiveTextViewer data={data} storageKey={key} />)
    expect(html.replace(/<!-- -->/g, '')).toContain('0/2 sections')

    localStorage.setItem(`itv_${key}_completed`, JSON.stringify(['two']))
    localStorage.setItem(`itv_${key}_active`, JSON.stringify('two'))
    const container = document.createElement('div')
    container.innerHTML = html
    document.body.appendChild(container)
    const errors: unknown[] = []
    await act(async () => {
      hydrateRoot(container, <InteractiveTextViewer data={data} storageKey={key} />, {
        onRecoverableError: (e) => errors.push(e),
      })
    })

    expect(errors, String(errors[0])).toEqual([])
    expect(container.textContent).toContain('1/2 sections')
    const active = [...container.querySelectorAll('nav button')].find((b) =>
      b.className.includes('bg-primary/10'),
    )
    expect(active?.textContent).toContain('Chapter Two')
    // and the defaults of the first render were never saved over the storage
    expect(JSON.parse(localStorage.getItem(`itv_${key}_completed`) ?? '[]')).toEqual(['two'])
    container.remove()
  })
})

/**
 * On a phone the text has the width of the screen.
 *
 * WHAT BROKE (found 26 September 2026, there since 10 April). The contents
 * sidebar's wrapper was a fixed w-64 at every width while the list inside it
 * is hidden below lg, so on a 390px phone the text column was 68px wide, one
 * word to a line, on every reader. jsdom has no layout, so this pins the
 * mechanism: below lg the wrapper is not displayed at all, and the height cap
 * sits on the row, not on the text, so the text fills its box.
 */
describe('the reader on a narrow screen', () => {
  it('gives the contents column no width below lg, and caps the row, not the text', () => {
    const { container } = render(
      <InteractiveTextViewer
        data={{
          title: 'A Test',
          author: 'An Author',
          type: 'novella',
          sections: [{ id: 'one', title: 'Chapter One', content: '<p>Text.</p>' }],
        }}
        storageKey="test-narrow"
      />,
    )
    const text = container.querySelector('[data-reader-text]') as HTMLElement
    const sidebar = text.previousElementSibling as HTMLElement
    const row = text.parentElement as HTMLElement
    expect(sidebar.className.split(/\s+/)).toEqual(expect.arrayContaining(['hidden', 'lg:block']))
    expect(text.style.maxHeight).toBe('')
    expect(row.style.maxHeight).toBe('70vh')
  })
})
