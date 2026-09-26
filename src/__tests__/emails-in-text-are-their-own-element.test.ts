import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { isValidElement, type ReactElement } from 'react'
import { linkEmails } from '@/components/common/link-emails'

/**
 * An email address in running text is rendered as its own element.
 *
 * THE DEFECT, found 26 September 2026: /terms threw React error #418 on every
 * production load. Cloudflare's Email Address Obfuscation rewrites each address
 * in the served HTML and decodes it again before React hydrates; an address in
 * the middle of a sentence comes back as separate text nodes where the server
 * rendered one, and hydration fails. It never shows locally, because nothing
 * sits in front of the dev server, so what can be checked here is the shape
 * the fix depends on: the address is an element of its own, and the text
 * either side is untouched.
 */

type Part = string | ReactElement<{ href: string; children: string }>

describe('linkEmails', () => {
  it('turns an address inside a sentence into its own mailto link', () => {
    const parts = linkEmails(
      'You may cancel by contacting us at info@Upskillenergy.com. Upon cancellation, access continues.',
    ) as Part[]
    expect(Array.isArray(parts)).toBe(true)
    expect(parts[0]).toBe('You may cancel by contacting us at ')
    const link = parts[1] as ReactElement<{ href: string; children: string }>
    expect(isValidElement(link)).toBe(true)
    expect(link.props.href).toBe('mailto:info@Upskillenergy.com')
    expect(link.props.children).toBe('info@Upskillenergy.com')
    // The full stop stays in the sentence, not in the address.
    expect(parts[2]).toBe('. Upon cancellation, access continues.')
  })

  it('handles an address at the end, and several in one string', () => {
    const parts = linkEmails('Email: a@b.co.uk or c.d@example.com') as Part[]
    const links = parts.filter((p) => isValidElement(p)) as ReactElement<{ href: string }>[]
    expect(links.map((l) => l.props.href)).toEqual(['mailto:a@b.co.uk', 'mailto:c.d@example.com'])
  })

  it('returns text without an address unchanged', () => {
    expect(linkEmails('Nothing to link here.')).toBe('Nothing to link here.')
  })
})

describe('the terms page', () => {
  it('passes every string it renders through linkEmails', () => {
    const src = readFileSync(join(process.cwd(), 'src/app/terms/page.tsx'), 'utf8')
    expect(src).toMatch(/const next = \(\) => linkEmails\(v\[i\+\+\]\)/)
  })
})
