import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  SECTIONS,
  WAO1_GRID,
  WAO2_GRID,
  COMPARISON_LEVELS,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  openGraph: {
    title: 'How your answers are marked - iLowerSecondary English',
    description:
      'Plain-English guide to Pearson’s marking rules for the iLowerSecondary English achievement test: positive marking, best-fit levels, indicative content, and the full Section B writing and comparison grids.',
  },
  title: 'How your answers are marked - iLowerSecondary English',
  description:
    'Plain-English guide to Pearson’s marking rules for the iLowerSecondary English achievement test: positive marking, best-fit levels, indicative content, and the full Section B writing and comparison grids.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/mark-scheme',
  },
}

const WAO1 = ASSESSMENT_OBJECTIVES.WAO1
const WAO2 = ASSESSMENT_OBJECTIVES.WAO2

export default function MarkSchemePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Mark scheme',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/mark-scheme',
          },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <span>Mark scheme</span>
      </p>

      <h1>How your answers are marked</h1>
      <p className="lead">
        Every script for the iLowerSecondary English achievement test is marked using the same set
        of rules. Knowing them helps you see exactly what an examiner is looking for - and what wins
        or loses marks.
      </p>

      {/* ── General marking guidance ─────────────────────────────── */}
      <section className="my-10">
        <h2>The general rules examiners follow</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          {[
            {
              title: 'Positive marking',
              body: 'Examiners reward what you have shown you can do. They look for evidence of achievement and credit it - they do not deduct marks for things you have left out or for not reaching the very top of a level.',
            },
            {
              title: 'Best-fit levels',
              body: 'For levelled questions the examiner reads the whole answer, then chooses the level whose description fits it best overall. A single weaker sentence does not drag a strong answer down a level - the balance of the response decides.',
            },
            {
              title: 'Indicative content is illustrative',
              body: 'The points listed in a mark scheme are examples of creditable answers, not a compulsory checklist. Any valid, well-explained point that answers the question earns credit, even if the mark scheme does not list it.',
            },
            {
              title: 'Explain your evidence',
              body: 'A direct lift of words from the text with no explanation is not credited. Quote briefly, then say what it shows or how it works.',
            },
            {
              title: 'No vague references',
              body: 'A vague reference without expansion is not accepted. “The writer uses language” is not enough - name the choice and explain its effect.',
            },
            {
              title: 'One mark per developed point',
              body: 'On points-based questions, one mark is given for each clearly developed point supported by appropriate evidence from the text. Repeating the same point twice does not earn a second mark.',
            },
            {
              title: 'Closed questions',
              body: 'On closed questions (circling, ticking, crossing or underlining) any clear positive indication of the correct answer is accepted, even if it is not perfectly neat - as long as the intended choice is unambiguous.',
            },
            {
              title: 'Own words or precise quotation',
              body: 'For retrieval and inference, either your own accurate words or a precise short quotation can earn the mark. The reference must be specific, not a general gist of the text.',
            },
          ].map((rule) => (
            <div key={rule.title} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {rule.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{rule.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section B writing grids ──────────────────────────────── */}
      <section className="my-10">
        <h2>{SECTIONS.B.name}: the writing grids</h2>
        <p>
          The single extended writing task is worth {SECTIONS.B.marks} marks. It is marked against
          two separate levelled grids that are added together: one for {WAO1.code} (worth{' '}
          {WAO1_GRID[WAO1_GRID.length - 1].marks.split('-')[1]} marks) and one for {WAO2.code}{' '}
          (worth {WAO2_GRID[WAO2_GRID.length - 1].marks.split('-')[1]} marks). Each grid runs from
          level S1 (lowest) to S4 (highest); the examiner picks the best-fit level for each, then
          totals the two.
        </p>

        <h3 className="mt-8">{WAO1.code}: form, communication and purpose</h3>
        <p className="text-sm text-muted-foreground">{WAO1.descriptor}</p>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Level
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Marks
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Descriptors
                </th>
              </tr>
            </thead>
            <tbody>
              {WAO1_GRID.map((row) => (
                <tr key={row.level} className="border-b border-border/40 align-top">
                  <td className="p-3 font-mono text-xs text-primary">{row.level}</td>
                  <td className="p-3 font-mono text-xs text-foreground whitespace-nowrap">
                    {row.marks}
                  </td>
                  <td className="p-3 text-muted-foreground">
                    <ul className="list-disc space-y-1 pl-4">
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

        <h3 className="mt-8">{WAO2.code}: grammar, punctuation and spelling</h3>
        <p className="text-sm text-muted-foreground">{WAO2.descriptor}</p>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Level
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Marks
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Descriptors
                </th>
              </tr>
            </thead>
            <tbody>
              {WAO2_GRID.map((row) => (
                <tr key={row.level} className="border-b border-border/40 align-top">
                  <td className="p-3 font-mono text-xs text-primary">{row.level}</td>
                  <td className="p-3 font-mono text-xs text-foreground whitespace-nowrap">
                    {row.marks}
                  </td>
                  <td className="p-3 text-muted-foreground">
                    <ul className="list-disc space-y-1 pl-4">
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
      </section>

      {/* ── Comparison grid ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>The Section A comparison grid</h2>
        <p>
          The extended comparison question in{' '}
          {SECTIONS.A.name.replace('Section A: ', 'Section A - ')} is marked out of{' '}
          {COMPARISON_LEVELS[COMPARISON_LEVELS.length - 1].marks.split('-')[1]} using its own
          levelled grid. It assesses three reading objectives at once -{' '}
          {ASSESSMENT_OBJECTIVES.RAO2.code}, {ASSESSMENT_OBJECTIVES.RAO4.code} and{' '}
          {ASSESSMENT_OBJECTIVES.RAO5.code} - so the strongest answers move from an implicit comment
          to a clear, explicit explanation of the contrast.
        </p>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Level
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Marks
                </th>
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Descriptor
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_LEVELS.map((row) => (
                <tr key={row.level} className="border-b border-border/40 align-top">
                  <td className="p-3 font-mono text-xs text-primary whitespace-nowrap">
                    {row.level}
                  </td>
                  <td className="p-3 font-mono text-xs text-foreground whitespace-nowrap">
                    {row.marks}
                  </td>
                  <td className="p-3 text-muted-foreground">{row.descriptor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Worked example ───────────────────────────────────────── */}
      <section className="my-10">
        <h2>Worked example: 1 mark vs 2 marks</h2>
        <p>
          Here is an original two-mark short open-response question - written by The English Hub,
          not taken from any past paper - that asks students to explain a writer&apos;s choice. The
          neutral topic is a notice about a school&apos;s new bicycle shelter.
        </p>
        <div className="not-prose my-5 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Question (2 marks)
          </p>
          <p className="text-sm text-foreground italic">
            “The writer ends the notice with the sentence: <em>“Lock it or lose it.”</em> Explain
            why the writer chose to finish this way and the effect it has on the reader.”
          </p>
        </div>

        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              Earns 1 mark
            </p>
            <p className="text-sm text-foreground italic mb-3">
              “The writer ends with ‘Lock it or lose it.’ It is a short sentence at the end.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This identifies one true point (a short closing sentence) but it is mostly a lift of
              the text with a vague observation. There is no explanation of <em>why</em> the choice
              was made or its effect on the reader, so only one mark is available.
            </p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-primary/[0.04] p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              Earns 2 marks
            </p>
            <p className="text-sm text-foreground italic mb-3">
              “The blunt, snappy command ‘Lock it or lose it’ leaves the reader with a clear
              warning. Its short, punchy rhythm makes the advice memorable and pushes students to
              act, so the notice ends on a persuasive note.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This makes one developed point with brief evidence, then explains both the
              writer&apos;s purpose (to persuade and warn) and the effect on the reader (a memorable
              call to act). Two clearly developed strands of explanation earn the full two marks.
            </p>
          </div>
        </div>
      </section>

      {/* ── Fair-dealing footer ──────────────────────────────────── */}
      <footer className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground leading-relaxed">
        {SPEC_ATTRIBUTION}
      </footer>
    </>
  )
}
