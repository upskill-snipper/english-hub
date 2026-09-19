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
import { notFound } from 'next/navigation'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BOARDS, getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { buildShelf, groupShelf, type ShelfEntry } from '@/lib/revision/shelf'
import { t } from '@/lib/i18n/t'

const SITE = 'https://theenglishhub.app'

/**
 * Boards that already have a hand-built specification hub worth linking to.
 *
 * Those pages carry paper-by-paper structure this shelf deliberately does not
 * duplicate. Where a board has no hub the reader is sent to the revision hub
 * instead, which is what every board picker on the site already does.
 */
const SPEC_HUBS: Partial<Record<ExamBoard, string>> = {
  'edexcel-igcse': '/igcse/edexcel',
  'edexcel-igcse-lang': '/igcse/edexcel-lang',
  'cambridge-0500': '/igcse/cambridge/0500',
  'cambridge-0990': '/igcse/cambridge/0990',
  'ial-edexcel': '/revision/ial',
}

/** The four boards that prescribe no set texts, and why, so the page can say so. */
const LANGUAGE_ONLY: ExamBoard[] = ['cambridge-0500', 'cambridge-0990']

/**
 * The board list is closed, so any other value must be a real 404.
 *
 * WITHOUT THIS the route soft-404s: `notFound()` renders the not-found UI but
 * the response still carries HTTP 200, so /set-texts/anything-at-all becomes an
 * indexable page and a crawler can mint unlimited junk URLs under this prefix.
 * Verified against a production server: /set-texts/not-a-board returned 200 with
 * the "Page not found" body until this line was added.
 *
 * That soft-404 is not unique to this route - /blog/<anything>,
 * /eal/<anything> and /revision/texts/<anything> all behave the same way today,
 * and only /learn returns a true 404. Fixing those is separate work; closing
 * this route's parameter set is the correct fix HERE because the fifteen boards
 * are a fixed, known set rather than a database lookup.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return BOARDS.map((b) => ({ board: b.id }))
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

  const entries = buildShelf(config.id)
  const groups = groupShelf(entries)
  const specHub = SPEC_HUBS[config.id]

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
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          {entries.length > 0 ? tLead : ''}
        </p>
        {specHub && (
          <Button variant="outline" size="sm" className="mt-5" render={<Link href={specHub} />}>
            {tSpecHub}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        )}
      </section>

      {entries.length === 0 ? (
        // Four of the fifteen boards prescribe no set texts. For Cambridge 0500
        // and 0990 that is correct by design rather than a gap, and saying which
        // it is stops the page reading as broken.
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="font-heading text-heading-lg text-foreground">
            {await t('shelf.none.heading')}
          </h2>
          <p className="mt-3 max-w-2xl text-body text-muted-foreground">
            {LANGUAGE_ONLY.includes(config.id)
              ? await t('shelf.none.language')
              : await t('shelf.none.generic')}
          </p>
          <Button className="mt-5" render={<Link href="/revision" />}>
            {await t('shelf.none.cta')}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        </section>
      ) : (
        groupsWithLabels.map((group) => (
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
        ))
      )}
    </div>
  )
}
