import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { WRITING_SKILLS, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reference/connectives'

export const metadata: Metadata = {
  title: 'Connectives bank',
  description:
    'A connectives and discourse-marker bank for the iLowerSecondary ' +
    'English exam — organised by job, for linking paragraphs and ' +
    'developing sentences in Section B, and for comparing texts in ' +
    'Section A.',
  alternates: { canonical: PAGE_URL },
}

const GROUPS: { job: string; note: string; words: string[] }[] = [
  {
    job: 'Sequencing / time',
    note: 'Order events in recounts, narratives and explanations.',
    words: [
      'first',
      'then',
      'next',
      'after that',
      'meanwhile',
      'soon',
      'eventually',
      'finally',
      'before long',
      'at last',
    ],
  },
  {
    job: 'Adding',
    note: 'Build a point or pile up detail.',
    words: [
      'also',
      'in addition',
      'furthermore',
      'moreover',
      'as well as',
      'not only … but also',
      'what is more',
    ],
  },
  {
    job: 'Contrasting',
    note: 'Essential for comparing two texts and for balanced argument.',
    words: [
      'however',
      'whereas',
      'in contrast',
      'on the other hand',
      'yet',
      'nevertheless',
      'although',
      'even so',
      'conversely',
    ],
  },
  {
    job: 'Comparing (similarity)',
    note: 'Link ideas across texts in the comparison question.',
    words: ['similarly', 'likewise', 'in the same way', 'just as', 'equally', 'both texts'],
  },
  {
    job: 'Cause and effect',
    note: 'Explain why something happens — strong for “explain” writing.',
    words: [
      'because',
      'so',
      'therefore',
      'as a result',
      'consequently',
      'this means that',
      'thus',
      'since',
    ],
  },
  {
    job: 'Emphasising',
    note: 'Signal the idea that matters most.',
    words: [
      'indeed',
      'above all',
      'in particular',
      'most importantly',
      'significantly',
      'crucially',
      'notably',
    ],
  },
  {
    job: 'Giving examples',
    note: 'Anchor a general point in evidence.',
    words: ['for example', 'for instance', 'such as', 'in particular', 'to illustrate', 'namely'],
  },
  {
    job: 'Concluding',
    note: 'Close a paragraph or a whole piece with control.',
    words: [
      'in conclusion',
      'overall',
      'to sum up',
      'ultimately',
      'in the end',
      'on balance',
      'all things considered',
    ],
  },
  {
    job: 'Developing a sentence (subordinating)',
    note: 'Build complex sentences for WAO2 S3–S4 — use a range, not just “and”.',
    words: [
      'although',
      'while',
      'whereas',
      'if',
      'unless',
      'as',
      'when',
      'because',
      'so that',
      'even though',
      'provided that',
    ],
  },
]

export default async function ConnectivesReference() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Connectives bank', url: PAGE_URL },
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
        <span>Connectives bank</span>
      </p>

      <h1>Connectives bank</h1>
      <p className="lead">
        {WRITING_SKILLS[1].title}: linking paragraphs “using a range of methods” is a named writing
        skill. This bank groups connectives and discourse markers by the job they do — for
        developing sentences and linking paragraphs in Section B, and for comparing texts in Section
        A.
      </p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.job} className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-semibold text-foreground">{g.job}</p>
            <p className="mt-1 text-xs text-muted-foreground">{g.note}</p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {g.words.map((w) => (
                <span
                  key={w}
                  className="rounded border border-border/60 bg-background px-2 py-0.5 text-xs text-foreground"
                >
                  {w}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <h2>Use them well, not just often</h2>
      <ul>
        <li>
          <strong>Vary them.</strong> Repeating “and then … and then” keeps you in the lower bands.
          A range of methods lifts WAO1 cohesion.
        </li>
        <li>
          <strong>Match the job.</strong> A causal connective (“therefore”) must follow an actual
          cause — don’t bolt them on for show.
        </li>
        <li>
          <strong>Link paragraphs, not just sentences.</strong> Open a new paragraph with a
          connective that signals its relationship to the last one.
        </li>
        <li>
          <strong>For comparison answers</strong> (Section A), lean on the contrasting and
          similarity groups — see the{' '}
          <Link href="/ks3/ilowersecondary/reading/comparison">comparison masterclass</Link>.
        </li>
      </ul>

      <p>
        Pair this with the{' '}
        <Link href="/ks3/ilowersecondary/reference/sentence-openers">sentence-openers bank</Link>{' '}
        and the{' '}
        <Link href="/ks3/ilowersecondary/writing/structure-organisation">
          structure &amp; organisation
        </Link>{' '}
        masterclass.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
