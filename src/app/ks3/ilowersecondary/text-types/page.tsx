import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { NON_FICTION_TEXT_TYPES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types'

export const metadata: Metadata = {
  title: 'Non-fiction text types',
  description:
    'Reading-and-writing guides to every non-fiction text type on the ' +
    'iLowerSecondary English specification — autobiography, blogs, ' +
    'leaflets, articles, instructions, recount, reports — and the five ' +
    'purposes.',
  alternates: { canonical: PAGE_URL },
}

const PAGES: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/text-types/autobiography-biography',
    title: 'Autobiography & biography',
    blurb: 'First-person life writing and accounts of others.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/blogs-journals',
    title: 'Blogs & journals',
    blurb: 'Personal voice, informal register, dated entries.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/leaflets-brochures-guides',
    title: 'Leaflets, brochures & guides',
    blurb: 'Headings, direct address, layout features and effect.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/articles',
    title: 'Newspaper & magazine articles',
    blurb: 'Headline, standfirst, report vs opinion structure.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/instructions',
    title: 'Instructions',
    blurb: 'Imperative verbs and sequencing — a common RAO4 focus.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/recount',
    title: 'Recount',
    blurb: 'Chronological, past tense — a text type and a writing form.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/reports',
    title: 'Reports',
    blurb: 'Objective, impersonal, classified information.',
  },
  {
    href: '/ks3/ilowersecondary/text-types/purposes',
    title: 'The five purposes',
    blurb: 'Argue, describe, explain, inform, persuade — how to spot each.',
  },
]

export default async function TextTypesIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Text types', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <span>Text types</span>
      </p>

      <h1>Non-fiction text types</h1>
      <p className="lead">
        Section A always includes two non-fiction texts. The specification expects experience of{' '}
        {NON_FICTION_TEXT_TYPES.length} text types written for five purposes. Each guide shows how
        to read it analytically and how to write it for Section B.
      </p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {PAGES.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
          >
            <h3 className="text-base font-semibold tracking-tight text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
          </Link>
        ))}
      </div>

      <p>
        The third Section A text is always fiction — see the{' '}
        <Link href="/ks3/ilowersecondary/fiction">fiction guides</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
