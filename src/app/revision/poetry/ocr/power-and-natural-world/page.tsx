import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { t } from '@/lib/i18n/t'
import { OCR_CLUSTERS } from '@/lib/board/ocr-anthology'

/**
 * There is no OCR cluster called Power and the Natural World.
 *
 * THE DEFECT, found 2 October 2026. This URL described a fourth OCR cluster
 * with fifteen poems, and the OCR hub, the board's paper structure and the
 * revision shelf all linked to it. OCR's anthology has three clusters (see
 * src/lib/board/ocr-anthology.ts). Of the fifteen poems listed here, one is
 * an OCR poem, Boat Stealing, and OCR sets it in Conflict.
 *
 * The page is kept rather than deleted so that a student who saved the link,
 * having been told it was their cluster, finds out that it is not and where to
 * go instead. It is noindex, and excluded from the sitemap, so that it does not
 * draw new visitors to a cluster name OCR has never used. The robots rule is
 * set here rather than in the layout because the layout also wraps The Eagle,
 * which stays indexed as wider reading.
 */
export const metadata: Metadata = {
  title: 'OCR has no Power and the Natural World cluster',
  description:
    "OCR's GCSE anthology, Towards a World Unknown, has three clusters: Love and Relationships, Conflict, and Youth and Age.",
  robots: { index: false, follow: true },
}

/** Poems the old page listed that another board sets, with where the site covers them. */
const ELSEWHERE: { title: string; poet: string; whereKey: string; href: string }[] = [
  {
    title: 'Boat Stealing (from 1799 Prelude)',
    poet: 'William Wordsworth',
    whereKey: 'poetry_hub.ocr.pnw_notice.ocr_conflict',
    href: '/revision/poetry/ocr/conflict',
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    whereKey: 'poetry_hub.ocr.pnw_notice.aqa_pc',
    href: '/revision/poetry/power-and-conflict/ozymandias',
  },
  {
    title: 'London',
    poet: 'William Blake',
    whereKey: 'poetry_hub.ocr.pnw_notice.aqa_pc',
    href: '/revision/poetry/power-and-conflict/london',
  },
  {
    title: 'London',
    poet: 'William Blake',
    whereKey: 'poetry_hub.ocr.pnw_notice.edexcel_tp',
    href: '/revision/poetry/edexcel/time-and-place/london',
  },
  {
    title: 'Storm on the Island',
    poet: 'Seamus Heaney',
    whereKey: 'poetry_hub.ocr.pnw_notice.aqa_pc',
    href: '/revision/poetry/power-and-conflict/storm-on-the-island',
  },
  {
    title: 'Composed upon Westminster Bridge',
    poet: 'William Wordsworth',
    whereKey: 'poetry_hub.ocr.pnw_notice.edexcel_tp',
    href: '/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
  },
  {
    title: 'The Eagle',
    poet: 'Alfred Lord Tennyson',
    whereKey: 'poetry_hub.ocr.pnw_notice.wider',
    href: '/revision/poetry/ocr/power-and-natural-world/the-eagle',
  },
]

const CLUSTER_TITLE_KEY: Record<string, string> = {
  'love-and-relationships': 'poetry_hub.ocr.cluster.lr.title',
  conflict: 'poetry_hub.ocr.cluster.conflict.title',
  'youth-and-age': 'poetry_hub.ocr.cluster.ya.title',
}

export default async function OCRPowerAndNaturalWorldPage() {
  return (
    <div className="space-y-8 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('poetry_hub.ocr.back_to_anthology')}
        </Button>
      </div>

      <section className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 sm:p-8">
        <Badge variant="secondary" className="mb-4">
          <AlertTriangle className="me-1 size-3" />
          {await t('poetry_hub.ocr.pnw_notice.badge')}
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground">
          {await t('poetry_hub.ocr.pnw_notice.title')}
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
          {await t('poetry_hub.ocr.pnw_notice.body')}
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-heading-md font-heading text-foreground">
          {await t('poetry_hub.ocr.pnw_notice.choose_cluster')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {await Promise.all(
            OCR_CLUSTERS.map(async (c) => (
              <Link
                key={c.slug}
                href={`/revision/poetry/ocr/${c.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-border hover:bg-muted/40"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                  {await t(CLUSTER_TITLE_KEY[c.slug])}
                </span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            )),
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          {await t('poetry_hub.ocr.pnw_notice.elsewhere_title')}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {await Promise.all(
            ELSEWHERE.map(async (p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-xl border border-border/60 p-4 transition-colors hover:border-border hover:bg-muted/40"
                >
                  <span
                    className="text-sm font-semibold text-foreground group-hover:text-primary"
                    dir="ltr"
                    lang="en"
                  >
                    {p.title}
                  </span>
                  <span className="text-caption text-muted-foreground" dir="ltr" lang="en">
                    {p.poet}
                  </span>
                  <span className="mt-2 text-caption text-muted-foreground">
                    {await t(p.whereKey)}
                  </span>
                </Link>
              </li>
            )),
          )}
        </ul>
      </section>
    </div>
  )
}
