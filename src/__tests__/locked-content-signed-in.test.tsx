import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

/**
 * The lock on model answers, for somebody already signed in.
 *
 * THE DEFECT (found 10 November 2026). The panel only spoke to signed-out
 * visitors: "Create a free account", main button to /auth/register. The
 * middleware sends a signed-in user who opens /auth/register to /dashboard, so
 * for a signed-in reader without a plan (most often an ex-trialist) the main
 * button on the paywall led away from both the content and the price.
 */

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

import { LockedContent } from '@/components/paywall/LockedContent'

describe('LockedContent', () => {
  it('still invites a signed-out visitor to sign up', () => {
    const html = renderToStaticMarkup(<LockedContent label="the answers" />)
    expect(html).toContain('href="/auth/register"')
  })

  it('never sends a signed-in reader to sign-up', () => {
    const html = renderToStaticMarkup(<LockedContent label="the answers" signedIn />)
    expect(html).not.toContain('/auth/register')
    expect(html).not.toContain('Create a free account')
  })

  it('shows a signed-in reader the plans and the price', () => {
    const html = renderToStaticMarkup(<LockedContent label="the answers" signedIn />)
    expect(html).toContain('href="/pricing?plan=student_monthly"')
    expect(html).toMatch(/&pound;|£/)
  })
})

describe('every page that locks content says who is reading', () => {
  const pages = [
    'src/app/resources/model-answers/creative-writing/page.tsx',
    'src/app/resources/model-answers/language-analysis/page.tsx',
    'src/app/resources/model-answers/literature-essay/page.tsx',
    'src/app/resources/model-answers/persuasive-writing/page.tsx',
    'src/app/revision/model-essays/[text]/[slug]/page.tsx',
  ]

  it.each(pages)('%s passes signedIn to every panel', (page) => {
    const src = readFileSync(join(process.cwd(), page), 'utf8')
    const panels = (src.match(/<LockedContent(?=[\s>])/g) ?? []).length
    const told = (src.match(/<LockedContent\s+signedIn=\{signedIn\}/g) ?? []).length
    expect(panels).toBeGreaterThan(0)
    expect(told).toBe(panels)
  })
})
