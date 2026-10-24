import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckSquare, Clock, ExternalLink, Lightbulb, ListChecks } from 'lucide-react'

import {
  GUIDES_HOME,
  MARK_SCHEME_GUIDES,
  durationWords,
  guideBySlug,
  guideSearchDescription,
  guideSearchTitle,
  guideSlug,
  questionCount,
} from '@/data/mark-scheme-guides'
import type { GuideLevel, GuideQuestion, MarkSchemeGuide } from '@/data/mark-scheme-guides/types'
import { MARKER_NOT_ALIGNED } from '@/lib/marking/guide-links'

/**
 * One paper's mark scheme, explained in plain English (24 October 2026).
 *
 * The boxes on the marking hub and on /resources/teacher-library/mark-schemes
 * had nothing behind them (src/data/mark-scheme-guides/types.ts says what was
 * wrong). This is what each now opens: what every question asks, what earns
 * marks, what each level looks like, what to avoid, a tip, and a link that
 * opens the AI marker on that question. The boards' own mark schemes are their
 * copyright and are not reproduced: the page links to them.
 *
 * Every paper the marker can mark against has a guide
 * (the-mark-scheme-guides-are-complete.test.ts), so the static params are the
 * whole set. An unknown slug is answered with a real 404 by the middleware,
 * before this route runs (src/lib/seo/known-pages.sources.ts lists the
 * guides): the notFound() below comes after the section's loading screen has
 * already sent a 200, which is what production served for an unknown slug on
 * the day these pages went live (24 October 2026), and dynamicParams does not
 * change that on a page the site renders per request. Both stay as the
 * backstop.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return MARK_SCHEME_GUIDES.map((g) => ({ slug: guideSlug(g) }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const g = guideBySlug(slug)
  if (!g) return {}
  // Written to fit a search result; a computed title cannot be measured from
  // this file, so the guides' test measures each (guideSearchTitle).
  const title = guideSearchTitle(g)
  const description = guideSearchDescription(g)
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `https://theenglishhub.app${GUIDES_HOME}/${slug}` },
    openGraph: {
      title,
      description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

/** The question's anchor on this page. */
const anchorOf = (sectionIndex: number, questionIndex: number) =>
  `q-${sectionIndex + 1}-${questionIndex + 1}`

/** Where "mark an answer" goes: the marker with this paper (and question) chosen. */
function markHref(g: MarkSchemeGuide, q?: GuideQuestion): string {
  const params = new URLSearchParams({ paper: g.schemeId })
  if (q?.markerQuestionId) params.set('question', q.markerQuestionId)
  return `/marking/submit?${params.toString()}`
}

/**
 * A question marked on two grids lists both, each lowest first, the second
 * grid's level names starting with its objective ("AO5: Level 1") or ending
 * with it ("Level 1 (AO5)"). Grouped here so each grid is its own table.
 */
function gridsOf(levels: GuideLevel[]): { name: string; levels: GuideLevel[] }[] {
  const grids: { name: string; levels: GuideLevel[] }[] = []
  for (const l of levels) {
    const prefix = /^([^:]{1,40}):\s/.exec(l.name)?.[1] ?? /\(([^)]{1,30})\)\s*$/.exec(l.name)?.[1]
    const name = prefix ?? ''
    const last = grids[grids.length - 1]
    if (last && last.name === name) last.levels.push(l)
    else grids.push({ name, levels: [l] })
  }
  return grids
}

/** A level's own name, without the grid it belongs to. */
const levelName = (l: GuideLevel, grid: string) =>
  grid ? l.name.replace(`${grid}: `, '').replace(` (${grid})`, '') : l.name

export default async function MarkSchemeGuidePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const g = guideBySlug(slug)
  if (!g) notFound()

  const questions = g.sections.flatMap((s, si) =>
    s.questions.map((q, qi) => ({ q, section: s.name, anchor: anchorOf(si, qi) })),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* ── The paper at a glance ─────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/resources/teacher-library" className="hover:text-primary">
              Teacher Library
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={GUIDES_HOME} className="hover:text-primary">
              Mark Schemes
            </Link>
          </nav>

          <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            {g.board} · {g.qualification}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {g.title}
          </h1>
          <p className="mt-1 text-base text-muted-foreground">{g.paperName}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Time', value: durationWords(g.durationMinutes) },
              { label: 'Marks', value: String(g.totalMarks) },
              { label: 'Share', value: g.weighting },
              { label: 'Questions', value: String(questionCount(g)) },
            ].map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-background px-3 py-2.5"
              >
                <dt className="text-xs text-muted-foreground">{f.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground">{g.summary}</p>

          {MARKER_NOT_ALIGNED.has(g.schemeId) && (
            <p className="mt-5 max-w-3xl rounded-xl border border-border bg-muted/50 p-3 text-sm text-muted-foreground">
              This guide follows the board&apos;s current paper. Our AI marker does not yet mark
              this paper&apos;s questions exactly as the board does, so a mark it gives for this
              paper is a rough guide only.
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={markHref(g)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Mark an answer against this paper
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="#at-a-glance"
              className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
            >
              Jump to the questions
            </a>
          </div>
        </div>
      </section>

      {/* A div: the site shell already provides the main landmark. */}
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6">
        {/* ── At a glance ─────────────────────────────────────── */}
        <section id="at-a-glance" aria-labelledby="at-a-glance-h" className="scroll-mt-24">
          <h2 id="at-a-glance-h" className="font-heading text-2xl font-semibold text-foreground">
            The questions at a glance
          </h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[34rem] text-sm">
              <thead className="bg-muted/50 text-start text-xs text-muted-foreground">
                <tr>
                  <th scope="col" className="px-3 py-2 text-start font-medium">
                    Question
                  </th>
                  <th scope="col" className="px-3 py-2 text-start font-medium">
                    What it is
                  </th>
                  <th scope="col" className="px-3 py-2 text-end font-medium">
                    Marks
                  </th>
                  <th scope="col" className="px-3 py-2 text-start font-medium">
                    Tests
                  </th>
                  <th scope="col" className="px-3 py-2 text-end font-medium">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {questions.map(({ q, anchor }) => (
                  <tr key={anchor} className="border-t border-border">
                    <th scope="row" className="px-3 py-2 text-start font-medium">
                      <a
                        href={`#${anchor}`}
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        {q.label}
                      </a>
                    </th>
                    <td className="px-3 py-2 text-muted-foreground">{q.kind}</td>
                    <td className="px-3 py-2 text-end tabular-nums">{q.marks}</td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {q.objectives.map((o) => o.id).join(', ')}
                    </td>
                    <td className="px-3 py-2 text-end tabular-nums text-muted-foreground">
                      {q.minutes ? `${q.minutes} min` : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── The objectives ──────────────────────────────────── */}
        <section aria-labelledby="objectives-h">
          <h2 id="objectives-h" className="font-heading text-2xl font-semibold text-foreground">
            What the examiner is looking for
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The board calls these its assessment objectives. Each question tests one or more of
            them.
          </p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {g.objectives.map((o) => (
              <div key={o.id} className="rounded-xl border border-border bg-card p-4">
                <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  {o.id}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">{o.plain}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Each section and question ───────────────────────── */}
        {g.sections.map((s, si) => (
          <section key={s.name} aria-labelledby={`section-${si}`} className="space-y-5">
            <div>
              <h2
                id={`section-${si}`}
                className="font-heading text-2xl font-semibold text-foreground"
              >
                {s.name}
                <span className="ms-2 align-middle text-sm font-normal text-muted-foreground">
                  {s.marks} marks
                </span>
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{s.about}</p>
            </div>

            {s.questions.map((q, qi) => (
              <QuestionCard key={q.label} g={g} q={q} anchor={anchorOf(si, qi)} />
            ))}
          </section>
        ))}

        {/* ── Timing and the last five minutes ─────────────────── */}
        <section aria-labelledby="timing-h" className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2
              id="timing-h"
              className="flex items-center gap-2 font-heading text-xl font-semibold text-foreground"
            >
              <Clock className="size-5 text-primary" aria-hidden="true" />
              Using your time
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
              {g.timing.map((line) => (
                <li key={line} className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
              <ListChecks className="size-5 text-primary" aria-hidden="true" />
              Before you hand in
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
              {g.checklist.map((line) => (
                <li key={line} className="flex gap-2">
                  <CheckSquare className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Where this comes from ───────────────────────────── */}
        <section
          aria-labelledby="about-h"
          className="rounded-2xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground"
        >
          <h2 id="about-h" className="font-semibold text-foreground">
            About this guide
          </h2>
          <p className="mt-2 leading-relaxed">
            This guide explains the mark scheme in plain English, in our own words. It is not the
            board&apos;s mark scheme, and it is not a prediction of any mark. The questions, marks
            and levels were checked against {g.source.document} on{' '}
            {new Date(`${g.source.checkedOn}T12:00:00Z`).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
            .
          </p>
          <p className="mt-2">
            <a
              href={g.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              The official mark schemes and past papers ({g.board})
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

function QuestionCard({ g, q, anchor }: { g: MarkSchemeGuide; q: GuideQuestion; anchor: string }) {
  const grids = gridsOf(q.levels)
  return (
    <article
      id={anchor}
      aria-labelledby={`${anchor}-h`}
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-5 sm:p-6"
    >
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 id={`${anchor}-h`} className="font-heading text-xl font-semibold text-foreground">
            {q.label}
          </h3>
          <p className="text-sm text-muted-foreground">{q.kind}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            {q.marks} marks
          </span>
          {q.objectives.map((o) => (
            <span
              key={o.id}
              className="rounded-full border border-border px-2.5 py-1 text-muted-foreground"
            >
              {o.id}
              {q.objectives.length > 1 && Number.isInteger(o.marks) ? ` · ${o.marks}` : ''}
            </span>
          ))}
          {q.minutes ? (
            <span className="rounded-full border border-border px-2.5 py-1 text-muted-foreground">
              About {q.minutes} min
            </span>
          ) : null}
        </div>
      </header>

      <div className="mt-4 space-y-5 text-sm leading-relaxed text-foreground">
        <div>
          <h4 className="font-semibold">What it asks</h4>
          <p className="mt-1">{q.task}</p>
        </div>

        <div>
          <h4 className="font-semibold">What earns marks</h4>
          <ul className="mt-1.5 space-y-1.5">
            {q.rewards.map((r) => (
              <li key={r} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {grids.length > 0 && (
          <div>
            <h4 className="font-semibold">What each level looks like</h4>
            <p className="mt-0.5 text-xs text-muted-foreground">Top level first.</p>
            {grids.map((grid) => (
              <div
                key={grid.name || 'grid'}
                className="mt-2 overflow-x-auto rounded-xl border border-border"
              >
                <table className="w-full min-w-[28rem] text-sm">
                  {grid.name && (
                    <caption className="bg-muted/50 px-3 py-1.5 text-start text-xs font-semibold text-muted-foreground">
                      {grid.name}
                    </caption>
                  )}
                  <thead className="text-xs text-muted-foreground">
                    <tr className="border-b border-border">
                      <th scope="col" className="px-3 py-2 text-start font-medium">
                        Level
                      </th>
                      <th scope="col" className="px-3 py-2 text-start font-medium">
                        Marks
                      </th>
                      <th scope="col" className="px-3 py-2 text-start font-medium">
                        What an answer at this level does
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...grid.levels].reverse().map((l) => (
                      <tr
                        key={l.name + l.marks}
                        className="border-b border-border last:border-0 align-top"
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-3 py-2 text-start font-medium"
                        >
                          {levelName(l, grid.name)}
                        </th>
                        <td className="whitespace-nowrap px-3 py-2 tabular-nums text-muted-foreground">
                          {l.marks}
                        </td>
                        <td className="px-3 py-2">{l.looksLike}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        <div>
          <h4 className="font-semibold">What to avoid</h4>
          <ul className="mt-1.5 space-y-1.5">
            {q.avoid.map((a) => (
              <li key={a} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive/60"
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="flex gap-2 rounded-xl bg-primary/5 p-3">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            <span className="font-semibold">Tip: </span>
            {q.tip}
          </span>
        </p>

        {q.markerQuestionId && (
          <Link
            href={markHref(g, q)}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Mark an answer to this question
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  )
}
