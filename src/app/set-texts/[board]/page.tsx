// ─── /set-texts/[board] ──────────────────────────────────────────────────────
//
// The page a student reaches straight after choosing their exam board: every
// text on their specification, on one screen, with an honest account of what we
// have for each.
//
// WHY IT IS A NEW ROUTE RATHER THAN A MOVE. A text belongs to several boards -
// Macbeth is on five - so putting the board in a text's own URL would turn one
// Macbeth guide into five near-identical pages competing with each other for
// the same search. The board is CONTEXT, not identity. This page supplies the
// context; the text keeps one canonical URL at /revision/texts/<slug>. That is
// also how the reference site the founder pointed at works: 121 guides at a flat
// root, with board-shaped index pages laid over the top.
//
// WHY EVERY TEXT IS SHOWN, INCLUDING THE ONES WE HAVE NOT WRITTEN. A student
// needs to know what is on their specification whether or not we have a guide
// for it. Hiding the gaps would make the shelf look stronger and make the
// product less useful, and it would send a third of the clicks on some boards
// into a placeholder with no warning. Each card says what is behind it.
// ────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BOARDS, getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { boardHasShelf, shelflessBoardHub, specHubHref } from '@/lib/board/board-landing'
import { buildShelf, groupShelf, type ShelfEntry } from '@/lib/revision/shelf'
import { t } from '@/lib/i18n/t'

const SITE = 'https://theenglishhub.app'

// WHY THERE IS NO EMPTY SHELF ANY MORE (26 September 2026). KS3, Cambridge 0500
// and Cambridge 0990 prescribe no set texts, and this page used to render for
// them anyway: "Your set texts", then "This specification has no prescribed set
// texts". A student who had just chosen 0500 was shown a page about having
// nothing. Those boards now land on their specification hub instead, and the
// decision - which boards, which hub - lives in src/lib/board/board-landing.ts,
// shared with the pickers, the middleware redirect and the sitemap so that none
// of them can disagree with this page. (The previous comment here said four
// boards had no texts; measured with buildShelf it is three.)

/**
 * A KNOWN, UNFIXED DEFECT, recorded here rather than papered over.
 *
 * /set-texts/<anything> returns HTTP 200 with the "Page not found" body. The
 * `notFound()` call below runs and renders the right UI, but the status stays
 * 200, which is a soft 404: a crawler can mint unlimited indexable URLs under
 * this prefix and Google will treat each as a real page.
 *
 * THIS IS NOT SPECIFIC TO THIS ROUTE. Verified against a production build and a
 * running server: /blog/<anything>, /eal/<anything> and
 * /revision/texts/<anything> all behave identically. Thirty-nine page modules in
 * src/app call notFound(), and none of them was observed to produce a 404.
 * (/learn/not-a-course does return 404, but that is Next's own built-in 404 for
 * an unmatched path - there is no page.tsx at /learn/[courseId] - so it is not
 * evidence that notFound() works here.)
 *
 * `export const dynamicParams = false` was tried and DOES NOT HELP, because this
 * page never prerenders in the first place: `t()` reads request headers to
 * resolve the locale, which makes the route request-dynamic, so
 * generateStaticParams produces nothing for dynamicParams to close. Confirmed in
 * the build output: prerender-manifest.json contains zero entries for this
 * route. The line was removed rather than left in place asserting a fix it does
 * not deliver.
 *
 * The real fix is site-wide and belongs in its own change: establish why
 * notFound() loses its status here, most likely in the interaction between the
 * async root not-found.tsx and dynamically rendered routes, and fix it once for
 * all thirty-nine call sites.
 *
 * generateStaticParams is kept because it is correct and costs nothing: the
 * twelve boards with a shelf are a closed set, and it will prerender them the
 * moment the locale is resolved without reading headers.
 */
export function generateStaticParams() {
  return BOARDS.filter((b) => boardHasShelf(b.id)).map((b) => ({ board: b.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ board: string }>
}): Promise<Metadata> {
  const { board } = await params
  const config = getBoardConfig(board as ExamBoard)
  if (!config) return {}
  return {
    title: `${config.fullName} set texts`,
    description: `Every set text on the ${config.fullName} specification, with a full revision guide for each: characters, themes, context, key quotations and essay plans.`,
    alternates: { canonical: `${SITE}/set-texts/${config.id}` },
  }
}

function ReadinessBadge({ entry, labels }: { entry: ShelfEntry; labels: ShelfLabels }) {
  if (entry.readiness === 'none') {
    return (
      <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground-subtle">
        {labels.none}
      </span>
    )
  }
  if (entry.readiness === 'partial') {
    return (
      <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground">
        {labels.partial}
      </span>
    )
  }
  return (
    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium text-primary">
      {entry.sectionCount === 1
        ? labels.sectionsOne
        : labels.sectionsOther.replace('{n}', String(entry.sectionCount))}
    </span>
  )
}

type ShelfLabels = {
  none: string
  partial: string
  sectionsOne: string
  sectionsOther: string
  fullText: string
}

function TextCard({ entry, labels }: { entry: ShelfEntry; labels: ShelfLabels }) {
  const { text } = entry
  const dimmed = entry.readiness === 'none'
  return (
    <Link
      href={entry.href}
      className={[
        'group relative flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-150',
        dimmed
          ? 'border-border/50 bg-card/40 hover:border-border hover:bg-card'
          : 'border-border/60 bg-card hover:border-primary/40 hover:shadow-card-hover',
      ].join(' ')}
    >
      <div>
        <h3
          className={[
            'font-heading text-base leading-snug',
            dimmed ? 'text-muted-foreground' : 'text-foreground group-hover:text-primary',
          ].join(' ')}
        >
          {text.title}
        </h3>
        <p className="mt-1 text-body-sm text-muted-foreground-subtle">
          {text.author}
          {text.year ? ` · ${text.year}` : ''}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <ReadinessBadge entry={entry} labels={labels} />
        {entry.hasFullText && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-700 dark:text-emerald-300">
            {labels.fullText}
          </span>
        )}
      </div>
    </Link>
  )
}

export default async function BoardShelfPage({ params }: { params: Promise<{ board: string }> }) {
  const { board } = await params
  const config = getBoardConfig(board as ExamBoard)
  if (!config) notFound()

  // The middleware has already sent a shelfless board to its hub with a 308;
  // this only catches a request that bypassed it, and may reach the browser as a
  // client-side redirect rather than a status, for the reason given above.
  const hub = shelflessBoardHub(config.id)
  if (hub) permanentRedirect(hub)

  const entries = buildShelf(config.id)
  const groups = groupShelf(entries)
  const specHub = specHubHref(config.id)

  const labels: ShelfLabels = {
    none: await t('shelf.status.none'),
    partial: await t('shelf.status.partial'),
    sectionsOne: await t('shelf.sections_one'),
    sectionsOther: await t('shelf.sections_other'),
    fullText: await t('shelf.status.full_text'),
  }

  const tEyebrow = await t('shelf.eyebrow')
  const tLead = await t('shelf.lead')
  const tSpecHub = await t('shelf.spec_hub')
  const tCrumbHome = await t('breadcrumb.home')

  // Category headings are resolved up front rather than inside the map, because
  // the map callback is not async and `t()` is. Mirrors the pattern in
  // src/app/revision/page.tsx.
  const groupsWithLabels = await Promise.all(
    groups.map(async (group) => ({ ...group, label: await t(group.labelKey) })),
  )

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: tCrumbHome, url: SITE },
          { name: `${config.fullName} set texts`, url: `${SITE}/set-texts/${config.id}` },
        ]}
      />

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">
            <Sparkles className="me-1 size-3" aria-hidden="true" />
            {tEyebrow}
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            {config.examCode}
          </Badge>
        </div>
        <h1 className="font-heading text-display-sm text-foreground sm:text-display">
          {config.fullName}
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{tLead}</p>
        {specHub && (
          <Button variant="outline" size="sm" className="mt-5" render={<Link href={specHub} />}>
            {tSpecHub}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        )}
      </section>

      {/* No empty-shelf branch: a board with no set texts is redirected to its hub above. */}
      {groupsWithLabels.map((group) => (
        <section key={group.category}>
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="size-4 text-primary" aria-hidden="true" />
            <h2 className="font-heading text-heading-md text-foreground">{group.label}</h2>
            <span className="text-body-sm text-muted-foreground-subtle">
              {group.entries.length}
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.entries.map((entry) => (
              <TextCard key={entry.text.slug} entry={entry} labels={labels} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
