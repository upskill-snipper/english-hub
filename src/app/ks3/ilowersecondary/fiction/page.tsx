import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  FICTION_GENRES,
  NARRATIVE_PERSPECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/fiction'

export const metadata: Metadata = {
  title: 'Fiction',
  description:
    'How to read the fiction text in Section A of the iLowerSecondary ' +
    'English exam — the five genres, narrative perspective, and a full ' +
    'guided-reading method with original extracts.',
  alternates: { canonical: PAGE_URL },
}

const PAGES: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/fiction/reading-fiction',
    title: 'Reading fiction',
    blurb:
      'The guided-reading method: characters, plot/structure, style — with a full worked extract.',
  },
  {
    href: '/ks3/ilowersecondary/fiction/genres',
    title: 'Fiction genres',
    blurb: `Conventions of ${FICTION_GENRES.join(', ')} — with original genre extracts.`,
  },
  {
    href: '/ks3/ilowersecondary/fiction/narrative-perspective',
    title: 'Narrative perspective',
    blurb: `${NARRATIVE_PERSPECTIVES.join(', ')} — and the effect each has on the reader.`,
  },
]

export default async function FictionIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Fiction', url: PAGE_URL },
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
        <span>Fiction</span>
      </p>

      <h1>Fiction (Section A)</h1>
      <p className="lead">
        One of the three Section A texts is always fiction. These guides teach you how to read it
        analytically — by genre, by narrative perspective, and through a complete guided-reading
        method.
      </p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
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
        Then apply it under timed conditions in a{' '}
        <Link href="/ks3/ilowersecondary/practice">practice paper</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
