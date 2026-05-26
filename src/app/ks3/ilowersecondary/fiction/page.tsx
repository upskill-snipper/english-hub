import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  FICTION_GENRES,
  NARRATIVE_PERSPECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/fiction'

export const metadata: Metadata = {
  title: 'Fiction',
  description:
    'How to read the fiction text in Section A of the iLowerSecondary ' +
    'English exam - the five genres, narrative perspective, and a full ' +
    'guided-reading method with original extracts.',
  alternates: { canonical: PAGE_URL },
}

export default async function FictionIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const [
    trHome,
    trKS3,
    trILS,
    trFic,
    trH1,
    trLead,
    trPracticeText,
    trReadingTitle,
    trReadingBlurb,
    trGenresTitle,
    trGenresBlurbPre,
    trGenresBlurbPost,
    trPerspTitle,
    trPerspBlurbPost,
  ] = await Promise.all([
    t('ks3.ils.shared.home'),
    t('ks3.ils.breadcrumb.ks3'),
    t('ks3.ils.breadcrumb.ils'),
    t('ks3.ils.breadcrumb.fiction'),
    t('ks3.ils.fic.h1'),
    t('ks3.ils.fic.lead'),
    t('ks3.ils.fic.practice_link_text'),
    t('ks3.ils.fic.reading.title'),
    t('ks3.ils.fic.reading.blurb'),
    t('ks3.ils.fic.genres.title'),
    t('ks3.ils.fic.genres.blurb_pre'),
    t('ks3.ils.fic.genres.blurb_post'),
    t('ks3.ils.fic.perspective.title'),
    t('ks3.ils.fic.perspective.blurb_post'),
  ])

  const pages: { href: string; title: string; blurb: string }[] = [
    {
      href: '/ks3/ilowersecondary/fiction/reading-fiction',
      title: trReadingTitle,
      blurb: trReadingBlurb,
    },
    {
      href: '/ks3/ilowersecondary/fiction/genres',
      title: trGenresTitle,
      blurb: `${trGenresBlurbPre} ${FICTION_GENRES.join(', ')} ${trGenresBlurbPost}`.trim(),
    },
    {
      href: '/ks3/ilowersecondary/fiction/narrative-perspective',
      title: trPerspTitle,
      blurb: `${NARRATIVE_PERSPECTIVES.join(', ')} ${trPerspBlurbPost}`.trim(),
    },
  ]

  const breadcrumb = [
    { name: trHome, url: 'https://theenglishhub.app' },
    { name: trKS3, url: 'https://theenglishhub.app/ks3' },
    { name: trILS, url: 'https://theenglishhub.app/ks3/ilowersecondary' },
    { name: trFic, url: PAGE_URL },
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
        <span>{trFic}</span>
      </p>

      <h1>{trH1}</h1>
      <p className="lead">{trLead}</p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
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
        Then apply it under timed conditions in a{' '}
        <Link href="/ks3/ilowersecondary/practice">{trPracticeText}</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
