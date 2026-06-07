import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import {
  QUALIFICATION,
  WAO1_GRID,
  WAO2_GRID,
  COMPARISON_LEVELS,
  SECTIONS,
  SPEC_ATTRIBUTION,
  type WritingLevel,
} from '@/lib/ilowersecondary/spec'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: grade targets (S1-S4) - The English Hub',
    description:
      'What an S1, S2, S3 and S4 answer looks like in iLowerSecondary English, and how to climb each band for writing and reading.',
  },
  title: 'iLowerSecondary English grade targets (S1-S4)',
  description:
    'A plain-English guide to the four-level S1-S4 scale: what each band reads like in writing and reading, and exactly how to move up a band.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/grade-targets',
  },
}

const SITE = 'https://theenglishhub.app'

/* ─── Profile data, all derived from the canonical spec grids ─────────── */

const wao1 = (lvl: WritingLevel) =>
  WAO1_GRID.find((r) => r.level === lvl) as (typeof WAO1_GRID)[number]
const wao2 = (lvl: WritingLevel) =>
  WAO2_GRID.find((r) => r.level === lvl) as (typeof WAO2_GRID)[number]

// "Reading skill at this band" narratives are written here from the
// published comparison-question levels + good exam behaviour, expressed
// in plain English. Numbers are never restated - only the band label is
// quoted from COMPARISON_LEVELS.
const readingProfile: Record<WritingLevel, string> = {
  S1: `Retrieval is usually right but answers can be vague. Inference stays close to the literal - the reader names what is on the page rather than what is implied. On the extended comparison item the response sits around ${COMPARISON_LEVELS[0].level}: a simple comment that hints at a contrast between the two texts without spelling it out, touching only one or two of inference, word-level language, and the writer's purpose.`,
  S2: `Retrieval is precise and inference is attempted with some success - the reader begins to read beyond the words. The comparison answer reaches the band of ${COMPARISON_LEVELS[1].level}: an explanation that states the contrast explicitly and stays focused on two of the three demands (inference, word-level language, writer's purpose and effect on the reader), though one strand is usually thinner than the others.`,
  S3: `Inference is secure and evidence is well chosen. The reader explains a writer's purpose and the effect on the reader rather than just identifying a technique. The comparison answer is heading into ${COMPARISON_LEVELS[2].level} territory: a clear explanation of the contrast that holds all three demands together - inference, language at word level, and purpose/effect - with appropriate textual support.`,
  S4: `Inference is assured and consistently linked to a writer's intention and viewpoint. Comparison is fully developed across both texts and across all three demands at once, with the sharpest, most economical evidence. The reader controls the contrast confidently from the first sentence - a clear explanation throughout, the strongest level the comparison grid describes.`,
}

const climb: { from: WritingLevel; to: WritingLevel; points: string[] }[] = [
  {
    from: 'S1',
    to: 'S2',
    points: [
      'Form & audience: lock the form in place and keep it - pick the conventions of a letter, diary or article on line one and never drift out of them. Make the awareness of the reader clear, not just present.',
      'Paragraph cohesion: move from a few logically ordered sections to controlled paragraphs that genuinely support coherence; replace awkward jumps with deliberate openings.',
      'Sentence variety: keep sentences grammatically sound while introducing an emerging range of complex connectives so ideas join rather than list.',
      'Punctuation range: demarcate most sentences correctly and start using internal punctuation (commas) on purpose, not by accident.',
      'Spelling ambition: keep common words accurate but begin reaching for more ambitious vocabulary and spelling it correctly.',
      'Inference & comparison: stop hinting at a contrast - state it explicitly and explain it.',
    ],
  },
  {
    from: 'S2',
    to: 'S3',
    points: [
      'Form & audience: turn a "mostly maintained" form into one established and maintained throughout, with a secure rather than emerging sense of audience.',
      'Paragraph cohesion: extend clear paragraph control so it supports coherence across the whole answer, not just in places - link paragraphs, do not merely separate them.',
      'Sentence variety: make sentences grammatically secure (not just "mostly sound") and use complex connectives to develop ideas, not only to connect them.',
      'Punctuation range: move from "mostly correct" to consistently correct demarcation with appropriate internal punctuation used to shape meaning.',
      'Spelling ambition: make spelling accurate with more ambitious choices used appropriately, not just attempted.',
      'Inference & comparison: hold all three comparison demands together - inference, word-level language, and purpose/effect - in one clear explanation rather than dropping one.',
    ],
  },
  {
    from: 'S3',
    to: 'S4',
    points: [
      'Form & audience: go beyond maintaining the form - adapt and control it for purpose, with a sophisticated awareness of the reader shaping every choice.',
      'Paragraph cohesion: move from clear control to complete control, so the whole piece coheres seamlessly with no slack section.',
      'Sentence variety: make grammar assured and used effectively throughout, varying structure and openings for deliberate effect.',
      'Punctuation range: progress from appropriate punctuation to sophisticated punctuation - colons, dashes and semicolons used confidently and correctly for impact.',
      'Spelling ambition: keep spelling accurate while using ambitious choices confidently, not cautiously.',
      'Inference & comparison: make inference assured and tie it explicitly to the writer’s intention across both texts with the most economical evidence.',
    ],
  },
]

const ORDER: WritingLevel[] = ['S1', 'S2', 'S3', 'S4']

export default async function GradeTargetsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE },
          { name: 'KS3', url: `${SITE}/ks3` },
          {
            name: 'iLowerSecondary English',
            url: `${SITE}/ks3/ilowersecondary`,
          },
          {
            name: 'Grade targets',
            url: `${SITE}/ks3/ilowersecondary/grade-targets`,
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
        <span>{await t('ks3.page.grade_targets.bc')}</span>
      </p>

      <h1>Grade targets: what S1-S4 looks like and how to climb</h1>
      <p className="lead">
        {QUALIFICATION.title} ({QUALIFICATION.subjectCode}) is{' '}
        {QUALIFICATION.gradeNote.charAt(0).toLowerCase() + QUALIFICATION.gradeNote.slice(1)} This
        page describes what an answer reads like at each band - in both the{' '}
        {SECTIONS.B.name.toLowerCase()} task and the {SECTIONS.A.name.toLowerCase()} questions - and
        the precise changes that move a piece up one level.
      </p>

      <section className="my-10">
        <h2>The four-level scale at a glance</h2>
        <p>
          The bands are ordered low to high, so progress always means moving rightwards along the
          same scale rather than switching to a different one:
        </p>
        <div className="not-prose my-5 flex flex-wrap items-stretch gap-2">
          {ORDER.map((lvl, i) => (
            <div key={lvl} className="flex items-stretch gap-2">
              <div className="rounded-xl border border-border/60 bg-card px-4 py-3 text-center">
                <p className="font-mono text-sm font-semibold text-primary">{lvl}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {lvl === 'S1' ? 'lowest classified' : lvl === 'S4' ? 'highest' : 'rising'}
                </p>
              </div>
              {i < ORDER.length - 1 ? (
                <span className="self-center text-muted-foreground" aria-hidden="true">
                  &rarr;
                </span>
              ) : null}
            </div>
          ))}
          <div className="self-center rounded-xl border border-dashed border-border/60 bg-muted/40 px-4 py-3 text-center">
            <p className="font-mono text-sm font-semibold text-muted-foreground">U</p>
            <p className="mt-1 text-[11px] text-muted-foreground">unclassified - below S1</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          A U result is awarded for work below the minimum standard for S1; it is not a fifth grade
          above or between the others, just the absence of a classified one.
        </p>
      </section>

      <section className="my-10">
        <h2>What each band reads like</h2>
        <p>
          Each card pairs a <strong>writing profile</strong> - built from the {SECTIONS.B.name} mark
          grids for form/communication and for grammar, punctuation and spelling - with a parallel{' '}
          <strong>reading profile</strong> describing how a {SECTIONS.A.name} answer behaves at the
          same band.
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
          {ORDER.map((lvl) => {
            const w1 = wao1(lvl)
            const w2 = wao2(lvl)
            return (
              <div key={lvl} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-lg font-semibold text-primary">{lvl}</p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                    {lvl === 'S4' ? 'highest' : lvl === 'S1' ? 'lowest classified' : 'mid-scale'}
                  </p>
                </div>

                <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Writing answer at this band
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {w1.descriptors.map((d) => (
                    <li key={d} className="leading-relaxed">
                      {d}
                    </li>
                  ))}
                  {w2.descriptors.map((d) => (
                    <li key={d} className="leading-relaxed">
                      {d}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Reading skill at this band
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {readingProfile[lvl]}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="my-10">
        <h2>How to move up a band</h2>
        <p>
          Each jump has the same six levers: control of form and audience, paragraph cohesion,
          sentence variety, punctuation range, spelling ambition, and the depth of inference and
          comparison. Here is what changes at each transition.
        </p>
        <div className="not-prose mt-5 space-y-4">
          {climb.map((step) => (
            <div
              key={`${step.from}-${step.to}`}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <p className="font-mono text-sm font-semibold text-primary">
                {step.from} <span aria-hidden="true">&rarr;</span> {step.to}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {step.points.map((p) => (
                  <li key={p} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Before and after: an S2 sentence rewritten to S4</h2>
        <p>
          Imagine a writing task asking students to{' '}
          <em>describe a market square early in the morning</em>. The two versions below are
          original, written for this page. They show the same idea climbing two bands.
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              Around S2
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              &ldquo;The market was quiet and it was early. The traders were setting up their stalls
              and it was cold so they wore coats. It looked nice.&rdquo;
            </p>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Grammatically sound and demarcated, but the form is plain, the sentences list rather
              than build, the connectives are basic (&ldquo;and&rdquo;, &ldquo;so&rdquo;) and the
              vocabulary is safe.
            </p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
              Around S4
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              &ldquo;Before the sun had cleared the rooftops, the square lay hushed; a single
              trader, breath clouding in the cold, unfolded his trestle table with the slow care of
              someone who has done it a thousand times. Nothing yet smelled of bread or fruit - only
              of wet stone and waiting.&rdquo;
            </p>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              The same scene, but the form is controlled for atmosphere: varied sentence lengths and
              openings, a semicolon and a dash used for deliberate effect, ambitious word choices
              (&ldquo;hushed&rdquo;, &ldquo;trestle&rdquo;, &ldquo;clouding&rdquo;) spelled
              confidently, and an implied observer the reader infers rather than is told about.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2>Using this page</h2>
        <p>
          Read your own draft against the relevant band card, then pick the single nearest
          transition above and act on its six levers one at a time. Most pieces are held back by one
          or two of them, not all six - fix the binding constraint first.
        </p>
      </section>

      <footer className="mt-12 border-t border-border/60 pt-6">
        <p className="text-xs leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
