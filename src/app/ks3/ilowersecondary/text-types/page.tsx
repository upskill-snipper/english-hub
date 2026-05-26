import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { NON_FICTION_TEXT_TYPES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'
import { t } from '@/lib/i18n/t'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types'

export const metadata: Metadata = {
  title: 'Non-fiction text types',
  description:
    'Reading-and-writing guides to every non-fiction text type on the ' +
    'iLowerSecondary English specification - autobiography, blogs, ' +
    'leaflets, articles, instructions, recount, reports - and the five ' +
    'purposes.',
  alternates: { canonical: PAGE_URL },
}

export default async function TextTypesIndex() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const [
    trHome,
    trKS3,
    trILS,
    trTT,
    trH1,
    trLeadPre,
    trLeadPost,
    trFictionLinkText,
    trAutoBioTitle,
    trAutoBioBlurb,
    trBlogsTitle,
    trBlogsBlurb,
    trLeafletsTitle,
    trLeafletsBlurb,
    trArticlesTitle,
    trArticlesBlurb,
    trInstrTitle,
    trInstrBlurb,
    trRecountTitle,
    trRecountBlurb,
    trReportsTitle,
    trReportsBlurb,
    trPurposesTitle,
    trPurposesBlurb,
  ] = await Promise.all([
    t('ks3.ils.shared.home'),
    t('ks3.ils.breadcrumb.ks3'),
    t('ks3.ils.breadcrumb.ils'),
    t('ks3.ils.breadcrumb.text_types'),
    t('ks3.ils.tt.h1'),
    t('ks3.ils.tt.lead_pre'),
    t('ks3.ils.tt.lead_post'),
    t('ks3.ils.tt.fiction_link_text'),
    t('ks3.ils.tt.auto_bio.title'),
    t('ks3.ils.tt.auto_bio.blurb'),
    t('ks3.ils.tt.blogs.title'),
    t('ks3.ils.tt.blogs.blurb'),
    t('ks3.ils.tt.leaflets.title'),
    t('ks3.ils.tt.leaflets.blurb'),
    t('ks3.ils.tt.articles.title'),
    t('ks3.ils.tt.articles.blurb'),
    t('ks3.ils.tt.instructions.title'),
    t('ks3.ils.tt.instructions.blurb'),
    t('ks3.ils.tt.recount.title'),
    t('ks3.ils.tt.recount.blurb'),
    t('ks3.ils.tt.reports.title'),
    t('ks3.ils.tt.reports.blurb'),
    t('ks3.ils.tt.purposes.title'),
    t('ks3.ils.tt.purposes.blurb'),
  ])

  const pages: { href: string; title: string; blurb: string }[] = [
    {
      href: '/ks3/ilowersecondary/text-types/autobiography-biography',
      title: trAutoBioTitle,
      blurb: trAutoBioBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/blogs-journals',
      title: trBlogsTitle,
      blurb: trBlogsBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/leaflets-brochures-guides',
      title: trLeafletsTitle,
      blurb: trLeafletsBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/articles',
      title: trArticlesTitle,
      blurb: trArticlesBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/instructions',
      title: trInstrTitle,
      blurb: trInstrBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/recount',
      title: trRecountTitle,
      blurb: trRecountBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/reports',
      title: trReportsTitle,
      blurb: trReportsBlurb,
    },
    {
      href: '/ks3/ilowersecondary/text-types/purposes',
      title: trPurposesTitle,
      blurb: trPurposesBlurb,
    },
  ]

  const breadcrumb = [
    { name: trHome, url: 'https://theenglishhub.app' },
    { name: trKS3, url: 'https://theenglishhub.app/ks3' },
    { name: trILS, url: 'https://theenglishhub.app/ks3/ilowersecondary' },
    { name: trTT, url: PAGE_URL },
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
        <span>{trTT}</span>
      </p>

      <h1>{trH1}</h1>
      <p className="lead">
        {trLeadPre} {NON_FICTION_TEXT_TYPES.length} {trLeadPost}
      </p>

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
        The third Section A text is always fiction - see the{' '}
        <Link href="/ks3/ilowersecondary/fiction">{trFictionLinkText}</Link>.
      </p>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
