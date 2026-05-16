import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/question-types'

export const metadata: Metadata = {
  title: 'Question types',
  description:
    'Every question type in the iLowerSecondary English Section A reading ' +
    'paper, with a dedicated masterclass: synonyms, short answers, ' +
    'punctuation effect, meaning & impact, closed tables and the extended ' +
    'comparison.',
  alternates: { canonical: PAGE_URL },
}

const PAGES: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/question-types/synonym-vocabulary',
    title: 'Synonyms & vocabulary',
    blurb: 'Circle/underline the synonym; vocabulary-in-context MCQs.',
  },
  {
    href: '/ks3/ilowersecondary/question-types/short-answer',
    title: 'Short answers',
    blurb: '1–2 mark “Why…?” / “How does…?” retrieval and inference.',
  },
  {
    href: '/ks3/ilowersecondary/question-types/punctuation-effect',
    title: 'Punctuation effect',
    blurb: 'Name the effect of a mark, then explain it from the text.',
  },
  {
    href: '/ks3/ilowersecondary/question-types/meaning-impact',
    title: 'Meaning & impact',
    blurb: '“What did the writer mean…?” and 4-mark “how does…” items.',
  },
  {
    href: '/ks3/ilowersecondary/question-types/feature-tables',
    title: 'Tables & closed questions',
    blurb: 'Tick-which-text tables, MCQs, underline, which-text-appealing.',
  },
  {
    href: '/ks3/ilowersecondary/question-types/extended-comparison',
    title: 'Extended comparison',
    blurb: 'The 6-mark levelled comparison (RAO2 + RAO4 + RAO5).',
  },
]

export default async function QuestionTypesIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Question types', url: PAGE_URL },
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
        <span>Question types</span>
      </p>

      <h1>Question types</h1>
      <p className="lead">
        Every question style that appears in the Section A reading paper has its own masterclass —
        how it is worded, exactly how the marks are awarded, and original worked examples.
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
        See them combined in a full <Link href="/ks3/ilowersecondary/practice">practice paper</Link>{' '}
        and compare to top-band <Link href="/ks3/ilowersecondary/model-answers">model answers</Link>
        .
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
