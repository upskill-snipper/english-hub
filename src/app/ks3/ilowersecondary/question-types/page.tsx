import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

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

export default async function QuestionTypesIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const [
    trHome,
    trKS3,
    trILS,
    trQT,
    trH1,
    trLead,
    trPracticeText,
    trModelText,
    trSynTitle,
    trSynBlurb,
    trShortTitle,
    trShortBlurb,
    trPunctTitle,
    trPunctBlurb,
    trMITitle,
    trMIBlurb,
    trTablesTitle,
    trTablesBlurb,
    trExtTitle,
    trExtBlurb,
  ] = await Promise.all([
    t('ks3.ils.shared.home'),
    t('ks3.ils.breadcrumb.ks3'),
    t('ks3.ils.breadcrumb.ils'),
    t('ks3.ils.breadcrumb.question_types'),
    t('ks3.ils.qt.h1'),
    t('ks3.ils.qt.lead'),
    t('ks3.ils.qt.practice_link_text'),
    t('ks3.ils.qt.model_link_text'),
    t('ks3.ils.qt.synonyms.title'),
    t('ks3.ils.qt.synonyms.blurb'),
    t('ks3.ils.qt.short_answer.title'),
    t('ks3.ils.qt.short_answer.blurb'),
    t('ks3.ils.qt.punctuation.title'),
    t('ks3.ils.qt.punctuation.blurb'),
    t('ks3.ils.qt.meaning_impact.title'),
    t('ks3.ils.qt.meaning_impact.blurb'),
    t('ks3.ils.qt.tables.title'),
    t('ks3.ils.qt.tables.blurb'),
    t('ks3.ils.qt.extended.title'),
    t('ks3.ils.qt.extended.blurb'),
  ])

  const pages: { href: string; title: string; blurb: string }[] = [
    {
      href: '/ks3/ilowersecondary/question-types/synonym-vocabulary',
      title: trSynTitle,
      blurb: trSynBlurb,
    },
    {
      href: '/ks3/ilowersecondary/question-types/short-answer',
      title: trShortTitle,
      blurb: trShortBlurb,
    },
    {
      href: '/ks3/ilowersecondary/question-types/punctuation-effect',
      title: trPunctTitle,
      blurb: trPunctBlurb,
    },
    {
      href: '/ks3/ilowersecondary/question-types/meaning-impact',
      title: trMITitle,
      blurb: trMIBlurb,
    },
    {
      href: '/ks3/ilowersecondary/question-types/feature-tables',
      title: trTablesTitle,
      blurb: trTablesBlurb,
    },
    {
      href: '/ks3/ilowersecondary/question-types/extended-comparison',
      title: trExtTitle,
      blurb: trExtBlurb,
    },
  ]

  const breadcrumb = [
    { name: trHome, url: 'https://theenglishhub.app' },
    { name: trKS3, url: 'https://theenglishhub.app/ks3' },
    { name: trILS, url: 'https://theenglishhub.app/ks3/ilowersecondary' },
    { name: trQT, url: PAGE_URL },
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
        <span>{trQT}</span>
      </p>

      <h1>{trH1}</h1>
      <p className="lead">{trLead}</p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {pages.map((p) => (
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
        See them combined in a full{' '}
        <Link href="/ks3/ilowersecondary/practice">{trPracticeText}</Link> and compare to top-band{' '}
        <Link href="/ks3/ilowersecondary/model-answers">{trModelText}</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
