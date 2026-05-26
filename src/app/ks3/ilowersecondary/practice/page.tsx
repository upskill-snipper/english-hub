import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUALIFICATION, SECTIONS, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/practice'

export const metadata: Metadata = {
  title: 'Practice papers',
  description:
    `Full original practice papers for the ${QUALIFICATION.title} ` +
    `(${QUALIFICATION.paperCode}). Each is a complete ${QUALIFICATION.totalMarks}-mark, ` +
    `${QUALIFICATION.durationLabel} paper with a Section A reading set (three linked ` +
    'unseen texts), a Section B writing task, and a full mark scheme.',
  alternates: { canonical: PAGE_URL },
}

// Paper theme data stays in English - these are proper names / themes set
// by the specification/authoring process, not UI copy. Blurbs are short
// descriptive synopses; we keep them English per the deep-article rule.
const PAPERS: { slug: string; n: number; theme: string; blurb: string }[] = [
  {
    slug: 'paper-1',
    n: 1,
    theme: 'Survival',
    blurb: 'Desert-animal adaptation, a wildlife appeal, and a survival story.',
  },
  {
    slug: 'paper-2',
    n: 2,
    theme: 'Journeys',
    blurb: 'Bird migration, a travel-charity appeal, and a difficult journey.',
  },
  {
    slug: 'paper-3',
    n: 3,
    theme: 'The Natural World',
    blurb: 'A coral-reef ecosystem, a conservation campaign, and a wild landscape.',
  },
  {
    slug: 'paper-4',
    n: 4,
    theme: 'Courage',
    blurb: 'Everyday bravery, an appeal celebrating courage, and a tense moment.',
  },
  {
    slug: 'paper-5',
    n: 5,
    theme: 'Change',
    blurb: 'Butterfly metamorphosis, a community opinion column, and a forced move.',
  },
  {
    slug: 'paper-6',
    n: 6,
    theme: 'Discovery',
    blurb: "The penicillin story, an explorer's recount, and a hidden-room mystery.",
  },
]

export default async function PracticePapersHub() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const [
    trHome,
    trKS3,
    trILS,
    trPrac,
    trH1,
    trLeadPre,
    trChooseHeading,
    trPaperLabel,
    trMoreWritingHeading,
    trTasksLinkText,
    trHowToHeading,
    trMarkSchLinkText,
    trSkillLinkText,
  ] = await Promise.all([
    t('ks3.ils.shared.home'),
    t('ks3.ils.breadcrumb.ks3'),
    t('ks3.ils.breadcrumb.ils'),
    t('ks3.ils.breadcrumb.practice'),
    t('ks3.ils.prac.h1'),
    t('ks3.ils.prac.lead_pre'),
    t('ks3.ils.prac.choose_heading'),
    t('ks3.ils.prac.paper_label'),
    t('ks3.ils.prac.more_writing_heading'),
    t('ks3.ils.prac.tasks_link_text'),
    t('ks3.ils.prac.how_to_heading'),
    t('ks3.ils.prac.mark_scheme_link_text'),
    t('ks3.ils.prac.skill_link_text'),
  ])

  const breadcrumb = [
    { name: trHome, url: 'https://theenglishhub.app' },
    { name: trKS3, url: 'https://theenglishhub.app/ks3' },
    { name: trILS, url: 'https://theenglishhub.app/ks3/ilowersecondary' },
    { name: trPrac, url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {trHome}
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          {trKS3}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {trILS}
        </Link>
        <span> · </span>
        <span>{trPrac}</span>
      </p>

      <h1>{trH1}</h1>
      <p className="lead">
        {trLeadPre} {QUALIFICATION.paperCode} format - {QUALIFICATION.totalMarks} marks,{' '}
        {QUALIFICATION.durationLabel}, two sections. Every source text is an original work written
        for The English Hub: nothing is reproduced from a real past paper.
      </p>

      <div className="not-prose my-6 grid gap-4 rounded-xl border border-border/60 bg-card p-5 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {SECTIONS.A.name}
          </p>
          <p className="mt-1 text-sm text-foreground">
            {SECTIONS.A.marks} marks · three unseen linked texts (two non-fiction, one fiction) ·
            recommended {SECTIONS.A.recommendedLabel}.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {SECTIONS.B.name}
          </p>
          <p className="mt-1 text-sm text-foreground">
            {SECTIONS.B.marks} marks · one extended writing task on the paper&apos;s theme ·
            recommended {SECTIONS.B.recommendedLabel}.
          </p>
        </div>
      </div>

      <h2>{trChooseHeading}</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {PAPERS.map((p) => (
          <Link
            key={p.slug}
            href={`/ks3/ilowersecondary/practice/${p.slug}`}
            className="group rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              {trPaperLabel} {p.n}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">{p.theme}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
            <p className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Open {trPaperLabel} {p.n} →
            </p>
          </Link>
        ))}
      </div>

      <h2>{trMoreWritingHeading}</h2>
      <p>
        Want to drill Section B on its own? The{' '}
        <Link href="/ks3/ilowersecondary/practice/writing-tasks">{trTasksLinkText}</Link> has a
        large set of original extended-writing prompts mapped to every form, audience and purpose on
        the specification, each with a planning steer and the band the examiner is looking for.
      </p>

      <h2>{trHowToHeading}</h2>
      <ul>
        <li>
          Sit one in a single {QUALIFICATION.durationLabel} session with no dictionary - that
          mirrors the real exam.
        </li>
        <li>
          Spend about {SECTIONS.A.recommendedLabel} on Section A and {SECTIONS.B.recommendedLabel}{' '}
          on Section B.
        </li>
        <li>
          Mark it yourself using the hidden mark scheme on each paper and the{' '}
          <Link href="/ks3/ilowersecondary/mark-scheme">{trMarkSchLinkText}</Link>.
        </li>
        <li>
          Diagnose weak question types, then revisit the matching{' '}
          <Link href="/ks3/ilowersecondary">{trSkillLinkText}</Link>.
        </li>
      </ul>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
