import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reading-skills'

export const metadata: Metadata = {
  title: 'Reading skills',
  description:
    'Every Section A reading skill for the iLowerSecondary English exam - ' +
    'retrieval, inference, structure, language, purpose and viewpoint, ' +
    'critical response and comparison - each a full masterclass.',
  alternates: { canonical: PAGE_URL },
}

const PAGES: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/reading/retrieval',
    title: `Retrieval - RAO1 (${ASSESSMENT_OBJECTIVES.RAO1.weightPct}%)`,
    blurb: 'Identify and retrieve explicit ideas and information precisely.',
  },
  {
    href: '/ks3/ilowersecondary/reading/inference',
    title: `Inference - RAO2 (${ASSESSMENT_OBJECTIVES.RAO2.weightPct}%)`,
    blurb: 'Deduce, infer and interpret beyond the literal.',
  },
  {
    href: '/ks3/ilowersecondary/reading/structure',
    title: `Structure & organisation - RAO3 (${ASSESSMENT_OBJECTIVES.RAO3.weightPct}%)`,
    blurb: 'Comment on how a text is built and the effect of its order.',
  },
  {
    href: '/ks3/ilowersecondary/reading/language',
    title: `Language - RAO4 (${ASSESSMENT_OBJECTIVES.RAO4.weightPct}%)`,
    blurb: 'The biggest-weighted objective: word- and sentence-level analysis.',
  },
  {
    href: '/ks3/ilowersecondary/reading/purpose-viewpoint',
    title: `Purpose & viewpoint - RAO5 (${ASSESSMENT_OBJECTIVES.RAO5.weightPct}%)`,
    blurb: 'Writers’ purposes, viewpoint and the overall effect on you.',
  },
  {
    href: '/ks3/ilowersecondary/reading/critical-response',
    title: 'Critical response',
    blurb: 'Interpret a text and select the best textual evidence.',
  },
  {
    href: '/ks3/ilowersecondary/reading/comparison',
    title: 'Comparison',
    blurb: 'Link and contrast two non-fiction texts - the 6-mark question.',
  },
  {
    href: '/ks3/ilowersecondary/reading/grammar-terminology',
    title: 'Grammar terminology',
    blurb: 'Name word and sentence classes precisely for the closed items.',
  },
]

export default async function ReadingSkillsIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Reading skills', url: PAGE_URL },
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
        <span>Reading skills</span>
      </p>

      <h1>Reading skills (Section A)</h1>
      <p className="lead">
        Section A is worth{' '}
        {ASSESSMENT_OBJECTIVES.RAO1.weightPct +
          ASSESSMENT_OBJECTIVES.RAO2.weightPct +
          ASSESSMENT_OBJECTIVES.RAO3.weightPct +
          ASSESSMENT_OBJECTIVES.RAO4.weightPct +
          ASSESSMENT_OBJECTIVES.RAO5.weightPct}
        % of the qualification across five reading objectives. Work through each masterclass - they
        include original practice extracts and model answers in the Pearson mark style.
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
        Then drill the matching{' '}
        <Link href="/ks3/ilowersecondary/question-types">question types</Link> and sit a{' '}
        <Link href="/ks3/ilowersecondary/practice">practice paper</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
