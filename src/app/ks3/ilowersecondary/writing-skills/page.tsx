import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { ASSESSMENT_OBJECTIVES, SECTIONS, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/writing-skills'

export const metadata: Metadata = {
  title: 'Writing skills',
  description:
    'Everything for Section B of the iLowerSecondary English exam — form, ' +
    'audience and purpose, structure, sentence variety, vocabulary, ' +
    'grammar and punctuation, planning, and every writing form.',
  alternates: { canonical: PAGE_URL },
}

const SKILLS: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/writing/form-audience-purpose',
    title: 'Form, audience & purpose',
    blurb: 'Decode the task and match every convention (WAO1, skill 2.1).',
  },
  {
    href: '/ks3/ilowersecondary/writing/structure-organisation',
    title: 'Structure & organisation',
    blurb: 'Topic sentences, paragraphs and linking for coherence (2.2).',
  },
  {
    href: '/ks3/ilowersecondary/writing/sentence-variety',
    title: 'Sentence variety',
    blurb: 'A range of sentences and openings for effect (2.3 / W9.3C).',
  },
  {
    href: '/ks3/ilowersecondary/writing/vocabulary-cohesion',
    title: 'Vocabulary & cohesion',
    blurb: 'Precise word choice and synonyms for clarity (2.3 / W9.3G).',
  },
  {
    href: '/ks3/ilowersecondary/writing/grammar-punctuation-spelling',
    title: 'Grammar, punctuation & spelling',
    blurb: `The ${ASSESSMENT_OBJECTIVES.WAO2.code} marks (12) — accuracy and control.`,
  },
  {
    href: '/ks3/ilowersecondary/writing/planning-proofreading',
    title: 'Planning & proofreading',
    blurb: 'Plan fast, write, then proofread within the time limit.',
  },
  {
    href: '/ks3/ilowersecondary/writing/section-b-task',
    title: 'The Section B task',
    blurb: 'A full worked example marked against the WAO1/WAO2 grids.',
  },
]

const FORMS: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/writing-forms/letter-diary',
    title: 'Letter & diary',
    blurb: 'Formal/informal letters and reflective diary entries.',
  },
  {
    href: '/ks3/ilowersecondary/writing-forms/narrative-descriptive',
    title: 'Narrative & descriptive',
    blurb: 'Story craft and atmospheric description.',
  },
  {
    href: '/ks3/ilowersecondary/writing-forms/recount-newsletter-biography',
    title: 'Recount, newsletter & biography',
    blurb: 'Chronological recount, community newsletter, life writing.',
  },
]

export default async function WritingSkillsIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Writing skills', url: PAGE_URL },
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
        <span>Writing skills</span>
      </p>

      <h1>Writing skills (Section B)</h1>
      <p className="lead">
        {SECTIONS.B.name} is worth {SECTIONS.B.marks} marks — {ASSESSMENT_OBJECTIVES.WAO1.weightPct}
        % (WAO1) + {ASSESSMENT_OBJECTIVES.WAO2.weightPct}% (WAO2) of the whole qualification. Build
        the skills, then practise every form.
      </p>

      <h2>Core writing skills</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {SKILLS.map((p) => (
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

      <h2>Writing forms</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
        {FORMS.map((p) => (
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
        Practise with the{' '}
        <Link href="/ks3/ilowersecondary/practice/writing-tasks">writing task bank</Link> and check
        yourself against the <Link href="/ks3/ilowersecondary/grade-targets">grade targets</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
