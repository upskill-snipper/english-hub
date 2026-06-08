import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { t } from '@/lib/i18n/t'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  SECTIONS,
  ASSESSMENT_OBJECTIVES,
  QUESTION_TYPES,
  WAO1_GRID,
  WAO2_GRID,
  COMPARISON_LEVELS,
  SPEC_ATTRIBUTION,
  QUALIFICATION,
} from '@/lib/ilowersecondary/spec'
import {
  PRACTICE_PAPER_2,
  SECTION_A_MARKS,
  SECTION_A_QUESTION_COUNT,
} from '@/data/ilowersecondary/practice-paper-2'

export const metadata: Metadata = {
  openGraph: {
    title: 'Practice Paper 2: Journeys - iLowerSecondary English',
    description:
      'A complete original practice achievement test modelled on LEH11/01, theme “Journeys”: three original source texts, 22 Section A reading questions (40 marks), a 30-mark Section B writing task and a full Pearson-style mark scheme.',
  },
  title: 'Practice Paper 2: Journeys - iLowerSecondary English',
  description:
    'A complete original practice achievement test modelled on LEH11/01, theme “Journeys”: three original source texts, 22 Section A reading questions (40 marks), a 30-mark Section B writing task and a full Pearson-style mark scheme.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/practice/paper-2',
  },
}

const paper = PRACTICE_PAPER_2
const sb = paper.sectionB

function aoDescriptor(code: string): string {
  const first = code.split(/[ /+]/)[0] as keyof typeof ASSESSMENT_OBJECTIVES
  return ASSESSMENT_OBJECTIVES[first]?.descriptor ?? ''
}

export default async function PracticePaper2Page() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Practice papers',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/practice',
          },
          {
            name: 'Paper 2: Journeys',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/practice/paper-2',
          },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/practice" className="hover:text-foreground">
          {await t('ks3.page.bc.practice_papers')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.practice.paper_2.bc')}</span>
      </p>

      <h1>Practice Paper 2: Journeys</h1>
      <p className="lead">
        A complete original achievement test modelled exactly on the format of{' '}
        {QUALIFICATION.paperCode}. Theme: <strong>journeys</strong>. All three source texts are
        original works written by The English Hub - they are not taken from any past paper. Work
        through the paper first, then open the mark scheme to check your answers.
      </p>

      {/* ── Paper meta ───────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Paper at a glance</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-4">
          {[
            { k: 'Total marks', v: `${paper.totalMarks}` },
            { k: 'Time allowed', v: paper.durationLabel },
            {
              k: SECTIONS.A.name,
              v: `${paper.sections.a.marks} marks · ${SECTION_A_QUESTION_COUNT} questions`,
            },
            {
              k: SECTIONS.B.name,
              v: `${paper.sections.b.marks} marks · 1 task`,
            },
          ].map((m) => (
            <div key={m.k} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {m.k}
              </p>
              <p className="text-sm text-foreground">{m.v}</p>
            </div>
          ))}
        </div>
        <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
            Instructions
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {paper.instructions.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-primary">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Source Booklet ───────────────────────────────────────── */}
      <section className="my-10">
        <h2>Source Booklet - three texts on the theme of journeys</h2>
        <p>
          Read all three texts before you begin Section A. Paragraphs are numbered so you can refer
          to them in your answers.
        </p>

        {paper.texts.map((t) => (
          <article
            key={t.id}
            className="not-prose my-6 rounded-xl border border-border/60 bg-card p-5 sm:p-6"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
              {t.label} - {t.kind} ({t.textType})
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-1">{t.title}</h3>
            {t.byline ? (
              <p className="text-xs italic text-muted-foreground mb-4">
                {t.byline} · Purpose: {t.purpose}
              </p>
            ) : null}
            <ol className="space-y-3">
              {t.paragraphs.map((para, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-[11px] text-muted-foreground pt-1 select-none">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">{para}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}

        <p className="text-xs text-muted-foreground italic">
          All texts above are original works written by The English Hub for this practice paper.
          Factual content in Text 1 is well-known biology; the charity in Text 2 (the Open Road
          Trust) and its author are fictional.
        </p>
      </section>

      {/* ── Section A ────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>{SECTIONS.A.name}</h2>
        <p className="text-sm text-muted-foreground">
          {paper.sections.a.instruction} Total for this section:{' '}
          <strong>{SECTION_A_MARKS} marks</strong>. Recommended time: {SECTIONS.A.recommendedLabel}.
        </p>

        <div className="not-prose mt-5 space-y-4">
          {paper.sectionA.map((q) => (
            <div key={q.number} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="font-mono text-sm font-semibold text-foreground">
                  Question {q.number}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                  ({q.marks} {q.marks === 1 ? 'mark' : 'marks'})
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground mb-3">{q.prompt}</p>

              {q.options ? (
                <ul className="mb-3 space-y-1.5">
                  {q.options.map((opt) => (
                    <li key={opt} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-sm border border-primary/60" />
                      {opt}
                    </li>
                  ))}
                </ul>
              ) : null}

              {q.tickRows ? (
                <div className="mb-3 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-2 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                          Feature
                        </th>
                        <th className="p-2 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                          Text 1
                        </th>
                        <th className="p-2 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                          Text 2
                        </th>
                        <th className="p-2 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                          Neither
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {q.tickRows.map((row) => (
                        <tr key={row.feature} className="border-b border-border/40">
                          <td className="p-2 text-muted-foreground">{row.feature}</td>
                          {['Text 1', 'Text 2', 'Neither'].map((c) => (
                            <td key={c} className="p-2 text-center">
                              <span className="inline-block h-3.5 w-3.5 rounded-sm border border-primary/60" />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
                  {q.ao}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {aoDescriptor(String(q.ao))}
                </span>
              </div>

              <details className="mt-3 group">
                <summary className="cursor-pointer text-xs font-semibold text-primary marker:text-primary">
                  Show mark scheme
                </summary>
                <div className="mt-2 rounded-lg border border-border/60 bg-primary/[0.04] p-4 text-sm leading-relaxed text-muted-foreground">
                  {q.markScheme.answer ? (
                    <p className="mb-2">
                      <strong className="text-foreground">Indicative answer: </strong>
                      {q.markScheme.answer}
                    </p>
                  ) : null}
                  {q.markScheme.notes ? (
                    <p className="mb-2">
                      <strong className="text-foreground">Mark notes: </strong>
                      {q.markScheme.notes}
                    </p>
                  ) : null}
                  {q.markScheme.levelled === 'comparison' ? (
                    <div className="mt-3">
                      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                        Levelled grid
                      </p>
                      <table className="w-full border-collapse text-xs">
                        <tbody>
                          {COMPARISON_LEVELS.map((lvl) => (
                            <tr key={lvl.level} className="border-b border-border/40 align-top">
                              <td className="p-2 font-mono text-primary whitespace-nowrap">
                                {lvl.level}
                              </td>
                              <td className="p-2 font-mono text-foreground whitespace-nowrap">
                                {lvl.marks}
                              </td>
                              <td className="p-2">{lvl.descriptor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section B ────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>{SECTIONS.B.name}</h2>
        <p className="text-sm text-muted-foreground">
          {paper.sections.b.instruction} Total for this section:{' '}
          <strong>{paper.sections.b.marks} marks</strong>.
        </p>

        <div className="not-prose mt-5 rounded-xl border border-primary/40 bg-primary/[0.04] p-5">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <span className="font-mono text-sm font-semibold text-foreground">
              Question {sb.number}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">({sb.marks} marks)</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{sb.context}</p>
          <p className="text-sm font-semibold text-foreground mb-3">{sb.task}</p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-3">
            {sb.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-primary">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
              {sb.ao}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {ASSESSMENT_OBJECTIVES.WAO1.descriptor}
            </span>
          </div>
        </div>

        <details className="not-prose mt-4 group">
          <summary className="cursor-pointer text-xs font-semibold text-primary marker:text-primary">
            Show writing mark scheme (levelled grids)
          </summary>
          <div className="mt-2 space-y-5 rounded-xl border border-border/60 bg-primary/[0.04] p-5">
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p className="mb-2">
                <strong className="text-foreground">WAO1 indicative content (18 marks): </strong>
                {sb.markScheme.wao1Indicative}
              </p>
              <p>
                <strong className="text-foreground">WAO2 indicative content (12 marks): </strong>
                {sb.markScheme.wao2Indicative}
              </p>
            </div>

            {[
              {
                title: 'WAO1 - Form, communication and purpose (18 marks)',
                grid: WAO1_GRID,
              },
              {
                title: 'WAO2 - Grammar, punctuation and spelling (12 marks)',
                grid: WAO2_GRID,
              },
            ].map((g) => (
              <div key={g.title}>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                  {g.title}
                </p>
                <table className="w-full border-collapse text-xs">
                  <tbody>
                    {g.grid.map((row) => (
                      <tr key={row.level} className="border-b border-border/40 align-top">
                        <td className="p-2 font-mono text-primary whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="p-2 font-mono text-foreground whitespace-nowrap">
                          {row.marks}
                        </td>
                        <td className="p-2 text-muted-foreground">
                          <ul className="space-y-1">
                            {row.descriptors.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* ── Question-type reference ──────────────────────────────── */}
      <section className="my-10">
        <h2>How each question type is marked</h2>
        <p className="text-sm text-muted-foreground">
          This paper mirrors the real spread of question types. Use this table to see what each one
          demands.
        </p>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-2 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Question type
                </th>
                <th className="p-2 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  AO
                </th>
                <th className="p-2 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  How to answer
                </th>
              </tr>
            </thead>
            <tbody>
              {QUESTION_TYPES.map((qt) => (
                <tr key={qt.id} className="border-b border-border/40 align-top">
                  <td className="p-2 text-foreground whitespace-nowrap">{qt.name}</td>
                  <td className="p-2 font-mono text-xs text-primary whitespace-nowrap">{qt.ao}</td>
                  <td className="p-2 text-muted-foreground">{qt.howToAnswer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Fair-dealing footer ──────────────────────────────────── */}
      <footer className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground leading-relaxed">
        {SPEC_ATTRIBUTION}
      </footer>
    </>
  )
}
