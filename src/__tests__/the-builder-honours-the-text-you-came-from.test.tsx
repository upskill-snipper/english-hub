// @vitest-environment jsdom
//
// This file drives a React hook that reads window.location, so it needs a DOM.
// The project default is 'node' (vitest.config), and without this pragma every
// assertion below fails on `window is not defined` rather than on behaviour.
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { useTopicFromUrl } from '@/lib/toolkit/use-topic-from-url'

/**
 * "Generate revision notes for Macbeth" opened an empty builder.
 *
 * Every set-text page offers two AI tools, and both links carry the text:
 *
 *   /toolkit/revision-builder?text=Macbeth&type=play&board=AQA
 *   /toolkit/test-builder?text=Macbeth&type=play
 *
 * Neither page read a search parameter. Not one, in either file. So a student
 * who clicked from the Macbeth guide arrived at "Select a text or topic..."
 * and had to find Macbeth again in a list of more than a hundred.
 *
 * It is the third instance of one shape found tonight, after `/games?text=`
 * which nothing read and the marker that was never given the question: a
 * promise made in a URL and dropped on arrival. None of them failed. Each one
 * rendered a working page that had quietly discarded what the reader asked for.
 *
 * These assertions drive the hook rather than reading the source, because the
 * thing that was wrong was behaviour, not spelling.
 */

function setUrl(search: string) {
  window.history.replaceState({}, '', `/toolkit/revision-builder${search}`)
}

const ALLOWED = ['Macbeth', 'An Inspector Calls', 'A Christmas Carol']

describe('the text the link carried', () => {
  beforeEach(() => setUrl(''))

  it('is selected when the builder offers it', () => {
    setUrl('?text=Macbeth&type=play&board=AQA')
    let chosen = ''
    renderHook(() => useTopicFromUrl(ALLOWED, '', (v) => (chosen = v)))
    expect(chosen).toBe('Macbeth')
  })

  it('including when the URL encoded its spaces', () => {
    setUrl('?text=An%20Inspector%20Calls')
    let chosen = ''
    renderHook(() => useTopicFromUrl(ALLOWED, '', (v) => (chosen = v)))
    expect(chosen).toBe('An Inspector Calls')
  })

  it('and matching is not case sensitive, but the stored value is the real title', () => {
    // The select's option values are the titles exactly. Setting "macbeth"
    // would leave the field looking empty, which is the bug wearing a hat.
    setUrl('?text=macbeth')
    let chosen = ''
    renderHook(() => useTopicFromUrl(ALLOWED, '', (v) => (chosen = v)))
    expect(chosen).toBe('Macbeth')
  })
})

describe('what it refuses', () => {
  beforeEach(() => setUrl(''))

  it('a text this builder does not offer', () => {
    // The list is the reader's own board. A link naming a text their board does
    // not set must leave the field alone rather than select an option that is
    // not rendered.
    setUrl('?text=Hamlet')
    let called = false
    renderHook(() => useTopicFromUrl(ALLOWED, '', () => (called = true)))
    expect(called).toBe(false)
  })

  it('anything else in the query, because a URL is user input', () => {
    setUrl('?text=<script>alert(1)</script>')
    let called = false
    renderHook(() => useTopicFromUrl(ALLOWED, '', () => (called = true)))
    expect(called).toBe(false)
  })

  it('and no parameter at all', () => {
    setUrl('?type=play')
    let called = false
    renderHook(() => useTopicFromUrl(ALLOWED, '', () => (called = true)))
    expect(called).toBe(false)
  })
})

describe('what it will not overwrite', () => {
  beforeEach(() => setUrl(''))

  it('a topic the student has already chosen', () => {
    // The whole point of the guard. Re-applying the URL over a student's own
    // selection would be a worse bug than the one being fixed.
    setUrl('?text=Macbeth')
    let called = false
    renderHook(() => useTopicFromUrl(ALLOWED, 'A Christmas Carol', () => (called = true)))
    expect(called).toBe(false)
  })
})

describe('both builders use it', () => {
  const FILES = ['revision-builder', 'test-builder']

  it.each(FILES)('%s reads the parameter', (page) => {
    // Two pages had the identical gap. Fixing one is how the pair drifts.
    const src = readFileSync(join(process.cwd(), 'src/app/toolkit', page, 'page.tsx'), 'utf8')
    expect(src).toContain('useTopicFromUrl(')
  })

  it.each(FILES)('%s validates against the list it renders', (page) => {
    const src = readFileSync(join(process.cwd(), 'src/app/toolkit', page, 'page.tsx'), 'utf8')
    expect(src).toContain('texts.map((t) => t.title)')
  })
})

describe('and the links that carry it still do', () => {
  const HUB = readFileSync(join(process.cwd(), 'src/components/study/TextStudyHub.tsx'), 'utf8')

  it('the revision link carries the text name', () => {
    expect(HUB).toContain('/toolkit/revision-builder?text=${encodeURIComponent(textName)}')
  })

  it('and so does the test link', () => {
    expect(HUB).toContain('/toolkit/test-builder?text=${encodeURIComponent(textName)}')
  })
})
