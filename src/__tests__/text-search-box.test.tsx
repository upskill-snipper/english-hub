// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The search box as a student uses it: type, arrow down, Enter.
 *
 * The matching rules are tested in text-search.test.ts in the node
 * environment. This file needs the DOM because what it guards is behaviour
 * that exists only once the component runs: the combobox wiring a screen
 * reader depends on, where Enter actually goes, and what the analytics event
 * carries. See the-gates-actually-run.test.ts for why the DOM count went up.
 */

const push = vi.fn()
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }) }))
const capture = vi.fn()
vi.mock('@/lib/posthog', () => ({ capture: (...a: unknown[]) => capture(...a) }))

const { TextSearch } = await import('@/components/search/text-search')
const { buildTextSearchIndex } = await import('@/lib/search/text-search-index')

const INDEX = buildTextSearchIndex()
const COPY = {
  label: 'Search set texts and poems',
  placeholder: 'Search a text, poem or author',
  none: 'No set text or poem matches that.',
  noneHint: "Try the author's surname, or",
  browseAll: 'browse every set text',
  countOne: '1 result',
  countOther: '{n} results',
  more: 'Showing {shown} of {n}. Keep typing to narrow it down.',
  go: 'Go to the guide',
  statusFull: 'Full guide',
  statusNone: 'Not written yet',
}

function setup() {
  render(<TextSearch index={INDEX} copy={COPY} />)
  const input = screen.getByRole('combobox')
  const type = (value: string) => {
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value } })
  }
  return { input, type }
}

beforeEach(() => {
  push.mockClear()
  capture.mockClear()
})
afterEach(cleanup)

describe('the search box', () => {
  it('is a labelled combobox inside a search landmark', () => {
    const { input } = setup()
    expect(screen.getByRole('search')).toBeTruthy()
    expect(input.getAttribute('aria-autocomplete')).toBe('list')
    expect(input.getAttribute('aria-expanded')).toBe('false')
    expect(screen.getByLabelText('Search set texts and poems')).toBe(input)
  })

  it('lists matches as options and says how many', () => {
    const { input, type } = setup()
    type('ozymandias')
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(3)
    expect(input.getAttribute('aria-expanded')).toBe('true')
    expect(input.getAttribute('aria-controls')).toBe(screen.getByRole('listbox').id)
    expect(screen.getByText('3 results')).toBeTruthy()
  })

  it('moves the active option with the arrow keys', () => {
    const { input, type } = setup()
    type('ozymandias')
    const [first, second] = screen.getAllByRole('option')
    expect(input.getAttribute('aria-activedescendant')).toBe(first.id)
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    expect(input.getAttribute('aria-activedescendant')).toBe(second.id)
    expect(second.getAttribute('aria-selected')).toBe('true')
    fireEvent.keyDown(input, { key: 'ArrowUp' })
    expect(input.getAttribute('aria-activedescendant')).toBe(first.id)
  })

  it('opens the active result on Enter', () => {
    const { input, type } = setup()
    type('an inspector calls')
    fireEvent.submit(input.closest('form')!)
    expect(push).toHaveBeenCalledWith('/revision/texts/an-inspector-calls')
  })

  it('opens a result on click', () => {
    const { type } = setup()
    type('remains')
    fireEvent.click(screen.getAllByRole('option')[0])
    expect(push).toHaveBeenCalledWith('/revision/poetry/power-and-conflict/remains')
  })

  it('never sends what was typed to analytics', () => {
    const { input, type } = setup()
    type('macbeth')
    fireEvent.submit(input.closest('form')!)
    expect(capture).toHaveBeenCalledTimes(1)
    const [event, props] = capture.mock.calls[0] as [string, Record<string, unknown>]
    expect(event).toBe('text_search_selected')
    expect(props.href).toBe('/revision/texts/macbeth')
    expect(props.query_length).toBe(7)
    // The destination names the text, which is fine: it is a page, not input.
    // Nothing else may carry the typed words.
    for (const [key, value] of Object.entries(props)) {
      if (key !== 'href') expect(String(value), key).not.toMatch(/macbeth/i)
    }
  })

  it('says so when nothing matches, and offers every set text', () => {
    const { input, type } = setup()
    type('xyzzy')
    expect(screen.queryAllByRole('option')).toHaveLength(0)
    expect(screen.getAllByText('No set text or poem matches that.').length).toBeGreaterThan(0)
    expect(screen.getByText('browse every set text').getAttribute('href')).toBe('/revision/texts')
    fireEvent.submit(input.closest('form')!)
    expect(push).toHaveBeenCalledWith('/revision/texts')
  })

  it('closes on Escape, then clears on a second Escape', () => {
    const { input, type } = setup()
    type('macbeth')
    fireEvent.keyDown(input, { key: 'Escape' })
    expect(screen.queryAllByRole('option')).toHaveLength(0)
    expect((input as HTMLInputElement).value).toBe('macbeth')
    fireEvent.keyDown(input, { key: 'Escape' })
    expect((input as HTMLInputElement).value).toBe('')
  })

  it('labels a text whose guide is not written', () => {
    // Synthetic: since 26 September 2026 no real set text is unwritten.
    const none = {
      ...INDEX.find((e) => e.kind === 'text')!,
      title: 'Zzyzx Unwritten',
      href: '/revision/texts/zzyzx',
      status: 'none' as const,
      terms: 'zzyzx unwritten',
    }
    cleanup()
    render(<TextSearch index={[...INDEX, none]} copy={COPY} />)
    const input = screen.getByRole('combobox')
    const type = (value: string) => {
      fireEvent.focus(input)
      fireEvent.change(input, { target: { value } })
    }
    type(none.title)
    const option = screen.getAllByRole('option').find((o) => o.textContent?.includes(none.title))!
    expect(option.textContent).toContain('Not written yet')
  })
})

describe('the homepage', () => {
  const HOME = readFileSync(join(process.cwd(), 'src/app/page.tsx'), 'utf8')

  it('puts the search above the course picker', () => {
    const search = HOME.indexOf('<TextSearchBox')
    const picker = HOME.indexOf('{TRACKS.map(')
    expect(search, 'the search is not on the homepage').toBeGreaterThan(-1)
    expect(picker).toBeGreaterThan(-1)
    expect(search).toBeLessThan(picker)
    // And under the hero's own heading, not above it.
    expect(search).toBeGreaterThan(HOME.indexOf('{heroH1}'))
  })
})
