'use client'

/**
 * "I know my text, take me to it": a search box that goes straight to a set
 * text's or poem's guide.
 *
 * ADDED 26 September 2026 at the founder's request. Before it, a student who
 * knew they wanted Ozymandias had to pick a track, then a board, then find the
 * poem on a shelf of forty. The index is built on the server and passed in as
 * plain data (see text-search-index.ts); this file only matches and navigates.
 *
 * ACCESSIBILITY. The ARIA 1.2 combobox pattern: the input owns a listbox, the
 * arrow keys move the active option, Enter opens it, Escape closes the list and
 * then clears the box. A polite live region says how many results there are.
 * Options are not links, because a listbox may not contain interactive
 * children; Ctrl or Cmd with a click still opens a new tab.
 *
 * PRIVACY. Many of the people typing here are children, and a search box
 * invites free text. The analytics event carries the destination, its position
 * and the result count, never what was typed. capture() is consent-gated and
 * off for minors in any case.
 *
 * WITHOUT JAVASCRIPT the form submits to /revision/texts, the index of every
 * set text, which is the nearest thing to a results page the site has.
 */

import { useId, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { capture } from '@/lib/posthog'
import { searchTexts, type TextSearchEntry } from '@/lib/search/match-texts'

export interface TextSearchCopy {
  label: string
  placeholder: string
  none: string
  noneHint: string
  browseAll: string
  /** "{n} results", with {n} replaced. */
  countOne: string
  countOther: string
  /** "Showing {shown} of {n}. Keep typing to narrow it down." */
  more: string
  go: string
  statusFull: string
  statusNone: string
}

interface Props {
  index: readonly TextSearchEntry[]
  copy: TextSearchCopy
  /** Where the search sits. The hero box is larger. */
  size?: 'hero' | 'default'
  className?: string
}

const LIMIT = 8

export function TextSearch({ index, copy, size = 'default', className }: Props) {
  const router = useRouter()
  const id = useId()
  const listId = `${id}-list`
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  const { results, total } = useMemo(() => searchTexts(index, query, LIMIT), [index, query])
  const typed = query.trim().length >= 2
  const showList = open && typed

  function go(entry: TextSearchEntry, position: number, newTab = false) {
    capture('text_search_selected', {
      href: entry.href,
      kind: entry.kind,
      position,
      results: total,
      query_length: query.trim().length,
    })
    if (newTab) {
      window.open(entry.href, '_blank', 'noopener')
      return
    }
    setOpen(false)
    router.push(entry.href)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      if (results.length > 0) setActive((i) => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setOpen(true)
      if (results.length > 0) setActive((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === 'Escape') {
      if (showList) setOpen(false)
      else setQuery('')
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const entry = results[active] ?? results[0]
    if (entry) go(entry, results.indexOf(entry))
    // Nothing matches: the same place the no-JavaScript form goes, and the one
    // the "no results" message offers.
    else if (typed) router.push('/revision/texts')
  }

  const count = (total === 1 ? copy.countOne : copy.countOther).replace('{n}', String(total))
  const activeId = showList && results[active] ? `${id}-opt-${active}` : undefined
  const hero = size === 'hero'

  return (
    <form
      role="search"
      action="/revision/texts"
      method="get"
      onSubmit={onSubmit}
      className={cn('relative w-full text-start', className)}
      data-text-search
    >
      <label htmlFor={`${id}-input`} className="sr-only">
        {copy.label}
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute start-3.5 top-1/2 -translate-y-1/2 text-muted-foreground',
            hero ? 'size-5' : 'size-4',
          )}
        />
        <input
          ref={inputRef}
          id={`${id}-input`}
          name="q"
          type="search"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showList && results.length > 0}
          aria-controls={showList ? listId : undefined}
          aria-activedescendant={activeId}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          placeholder={copy.placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActive(0)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={onKeyDown}
          className={cn(
            'w-full rounded-2xl border border-border bg-card text-foreground shadow-sm outline-none transition-colors',
            'placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/25',
            '[&::-webkit-search-cancel-button]:hidden',
            hero ? 'h-14 ps-11 pe-14 text-base' : 'h-11 ps-10 pe-12 text-sm',
          )}
        />
        <button
          type="submit"
          aria-label={copy.go}
          className={cn(
            'absolute end-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90',
            hero ? 'size-10' : 'size-8',
          )}
        >
          <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {typed ? (total > 0 ? count : copy.none) : ''}
      </p>

      {showList && (
        <div
          className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-lg"
          // Clicking inside must not blur the input before the click lands.
          onMouseDown={(e) => e.preventDefault()}
        >
          {results.length > 0 ? (
            <>
              <ul
                id={listId}
                role="listbox"
                aria-label={copy.label}
                className="max-h-[22rem] overflow-y-auto p-1.5"
              >
                {results.map((entry, i) => (
                  <li
                    key={entry.href}
                    id={`${id}-opt-${i}`}
                    role="option"
                    aria-selected={i === active}
                    onMouseEnter={() => setActive(i)}
                    onClick={(e) => go(entry, i, e.metaKey || e.ctrlKey)}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5',
                      i === active ? 'bg-muted text-foreground' : 'text-foreground',
                    )}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{entry.title}</span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {[entry.by, entry.context].filter(Boolean).join(' · ')}
                      </span>
                    </span>
                    {entry.status && (
                      <span
                        className={cn(
                          'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium',
                          entry.status === 'full'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground',
                        )}
                      >
                        {entry.status === 'full' ? copy.statusFull : copy.statusNone}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              {total > results.length && (
                <p className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                  {copy.more
                    .replace('{shown}', String(results.length))
                    .replace('{n}', String(total))}
                </p>
              )}
            </>
          ) : (
            <div id={listId} className="px-4 py-3 text-sm">
              <p className="font-medium text-foreground">{copy.none}</p>
              <p className="mt-1 text-muted-foreground">
                {copy.noneHint}{' '}
                <Link
                  href="/revision/texts"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  {copy.browseAll}
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </form>
  )
}
