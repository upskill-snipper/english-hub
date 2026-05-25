// ─── Safe, dependency-free Markdown renderer ───────────────────────────────
// The repo has no markdown renderer in use (no react-markdown / markdown util;
// next-mdx-remote is installed but only for build-time MDX, not runtime strings),
// so this renders the SAFE subset that IELTS lesson bodies actually use:
// headings (#–###), paragraphs, bold/italic, inline code, links, blockquotes,
// ordered + unordered lists, and GFM-style tables.
//
// It builds React elements directly from the source string — it NEVER uses
// dangerouslySetInnerHTML, so untrusted HTML in the source can't execute. Links
// are restricted to http/https/mailto/relative and open external targets safely.
// Presentational only; styling mirrors the Tailwind "prose" look used elsewhere.
// ────────────────────────────────────────────────────────────────────────────

import * as React from 'react'

import { cn } from '@/lib/utils'

// ── Inline parsing: bold, italic, inline code, links ───────────────────────
// Order matters: code first (so its contents aren't re-parsed), then links,
// then bold, then italic. Each pass splits text nodes and leaves already-built
// React elements untouched.

type Inline = string | React.ReactElement

let inlineKey = 0
function nextKey(prefix: string): string {
  inlineKey += 1
  return `${prefix}-${inlineKey}`
}

/** Only allow safe link targets; everything else renders as plain text. */
function safeHref(raw: string): string | null {
  const href = raw.trim()
  if (
    href.startsWith('/') ||
    href.startsWith('#') ||
    /^https?:\/\//i.test(href) ||
    /^mailto:/i.test(href)
  ) {
    return href
  }
  return null
}

function applyPattern(
  nodes: Inline[],
  regex: RegExp,
  build: (match: RegExpExecArray) => React.ReactElement,
): Inline[] {
  const out: Inline[] = []
  for (const node of nodes) {
    if (typeof node !== 'string') {
      out.push(node)
      continue
    }
    let lastIndex = 0
    const local = new RegExp(regex.source, 'g')
    let m: RegExpExecArray | null
    while ((m = local.exec(node)) !== null) {
      if (m.index > lastIndex) out.push(node.slice(lastIndex, m.index))
      out.push(build(m))
      lastIndex = m.index + m[0].length
    }
    if (lastIndex < node.length) out.push(node.slice(lastIndex))
  }
  return out
}

function parseInline(text: string): React.ReactNode[] {
  // 1. Inline code — captured first so **/* inside it stays literal.
  let nodes: Inline[] = applyPattern([text], /`([^`]+)`/, (m) => (
    <code
      key={nextKey('code')}
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
    >
      {m[1]}
    </code>
  ))

  // 2. Links: [label](href)
  nodes = applyPattern(nodes, /\[([^\]]+)\]\(([^)\s]+)\)/, (m) => {
    const href = safeHref(m[2])
    if (!href) return <React.Fragment key={nextKey('txt')}>{m[0]}</React.Fragment>
    const external = /^https?:\/\//i.test(href)
    return (
      <a
        key={nextKey('link')}
        href={href}
        className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {m[1]}
      </a>
    )
  })

  // 3. Bold: **text**
  nodes = applyPattern(nodes, /\*\*([^*]+)\*\*/, (m) => (
    <strong key={nextKey('b')} className="font-semibold text-foreground">
      {m[1]}
    </strong>
  ))

  // 4. Italic: *text* (single asterisks; bold already consumed)
  nodes = applyPattern(nodes, /\*([^*]+)\*/, (m) => <em key={nextKey('i')}>{m[1]}</em>)

  return nodes
}

// ── Block parsing ──────────────────────────────────────────────────────────

function splitTableRow(line: string): string[] {
  // Trim the outer pipes, then split. Keeps empty cells.
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  return trimmed.split('|').map((c) => c.trim())
}

function isTableDivider(line: string): boolean {
  // e.g. | --- | :--: | ---: |
  return /^\s*\|?[\s:|-]+\|?\s*$/.test(line) && line.includes('-')
}

interface RenderProps {
  source: string
  className?: string
}

export function Markdown({ source, className }: RenderProps): React.ReactElement {
  inlineKey = 0
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const blocks: React.ReactNode[] = []
  let i = 0
  let key = 0
  const k = () => `blk-${key++}`

  while (i < lines.length) {
    const line = lines[i]

    // Blank line → skip.
    if (line.trim() === '') {
      i += 1
      continue
    }

    // Headings: # … ###
    const heading = /^(#{1,3})\s+(.*)$/.exec(line)
    if (heading) {
      const level = heading[1].length
      const content = parseInline(heading[2].trim())
      if (level === 1) {
        blocks.push(
          <h2
            key={k()}
            className="mt-10 font-serif text-2xl font-semibold tracking-tight text-foreground first:mt-0"
          >
            {content}
          </h2>,
        )
      } else if (level === 2) {
        blocks.push(
          <h3
            key={k()}
            className="mt-8 font-serif text-xl font-semibold tracking-tight text-foreground first:mt-0"
          >
            {content}
          </h3>,
        )
      } else {
        blocks.push(
          <h4
            key={k()}
            className="mt-6 font-serif text-lg font-semibold tracking-tight text-foreground first:mt-0"
          >
            {content}
          </h4>,
        )
      }
      i += 1
      continue
    }

    // Table: a header row, a divider row, then body rows.
    if (line.includes('|') && i + 1 < lines.length && isTableDivider(lines[i + 1])) {
      const header = splitTableRow(line)
      i += 2 // skip header + divider
      const rows: string[][] = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitTableRow(lines[i]))
        i += 1
      }
      blocks.push(
        <div key={k()} className="my-5 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {header.map((cell, ci) => (
                  <th
                    key={ci}
                    className="px-3 py-2 text-left font-semibold text-foreground"
                    scope="col"
                  >
                    {parseInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/60">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 align-top text-muted-foreground">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    // Blockquote: one or more consecutive "> " lines.
    if (/^>\s?/.test(line)) {
      const quoteLines: string[] = []
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''))
        i += 1
      }
      blocks.push(
        <blockquote
          key={k()}
          className="my-5 border-l-2 border-primary/40 bg-muted/40 py-2 pl-4 pr-3 text-muted-foreground italic"
        >
          {quoteLines.map((ql, qi) => (
            <p key={qi} className={qi > 0 ? 'mt-2' : undefined}>
              {parseInline(ql)}
            </p>
          ))}
        </blockquote>,
      )
      continue
    }

    // Ordered list: consecutive lines starting "1. ", "2. " …
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''))
        i += 1
      }
      blocks.push(
        <ol
          key={k()}
          className="my-4 ml-5 list-decimal space-y-2 text-muted-foreground marker:text-muted-foreground"
        >
          {items.map((it, ii) => (
            <li key={ii} className="pl-1 leading-relaxed">
              {parseInline(it)}
            </li>
          ))}
        </ol>,
      )
      continue
    }

    // Unordered list: consecutive lines starting "- " or "* ".
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''))
        i += 1
      }
      blocks.push(
        <ul
          key={k()}
          className="my-4 ml-5 list-disc space-y-2 text-muted-foreground marker:text-muted-foreground/60"
        >
          {items.map((it, ii) => (
            <li key={ii} className="pl-1 leading-relaxed">
              {parseInline(it)}
            </li>
          ))}
        </ul>,
      )
      continue
    }

    // Paragraph: gather consecutive non-blank lines that aren't another block.
    const para: string[] = [line]
    i += 1
    while (i < lines.length) {
      const next = lines[i]
      if (
        next.trim() === '' ||
        /^(#{1,3})\s+/.test(next) ||
        /^>\s?/.test(next) ||
        /^\d+\.\s+/.test(next) ||
        /^[-*]\s+/.test(next) ||
        (next.includes('|') && i + 1 < lines.length && isTableDivider(lines[i + 1]))
      ) {
        break
      }
      para.push(next)
      i += 1
    }
    blocks.push(
      <p key={k()} className="my-4 leading-relaxed text-muted-foreground">
        {parseInline(para.join(' '))}
      </p>,
    )
  }

  return <div className={cn('text-[15px]', className)}>{blocks}</div>
}
