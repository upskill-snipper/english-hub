import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUESTION_TYPES,
  COMPARISON_LEVELS,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  openGraph: {
    title: 'The 6-mark extended comparison question - iLowerSecondary English',
    description:
      'A deep masterclass on the extended comparison question: how to climb the levelled grid from an implicit comment to a clear, developed explanation of the contrast, with two original extracts and three annotated model answers.',
  },
  title: 'The 6-mark extended comparison question - iLowerSecondary English',
  description:
    'A deep masterclass on the extended comparison question: how to climb the levelled grid from an implicit comment to a clear, developed explanation of the contrast, with two original extracts and three annotated model answers.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/question-types/extended-comparison',
  },
}

const QUESTION = QUESTION_TYPES.find((q) => q.id === 'comparison-6-mark')!

const RAO2 = ASSESSMENT_OBJECTIVES.RAO2
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5

const MAX_MARKS = COMPARISON_LEVELS[COMPARISON_LEVELS.length - 1].marks.split('-')[1]

export default function ExtendedComparisonPage() {
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
            name: 'Question types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/question-types',
          },
          {
            name: 'Extended comparison',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/question-types/extended-comparison',
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
        <Link href="/ks3/ilowersecondary/question-types" className="hover:text-foreground">
          Question types
        </Link>
        <span> · </span>
        <span>Extended comparison</span>
      </p>

      <h1>The {QUESTION.typicalMarks}-mark extended comparison question</h1>
      <p className="lead">
        This is the longest reading question on the paper and the one that separates a safe pass
        from a top result. It asks you to {QUESTION.name.toLowerCase()} - and it is marked on a
        levelled grid, so the words you choose decide which level you land in.
      </p>

      {/* ── What the question assesses ───────────────────────────── */}
      <section className="my-10">
        <h2>What it is testing - three objectives at once</h2>
        <p>
          Most reading questions test one objective. This one tests three together, which is why it
          carries {QUESTION.typicalMarks} marks. To reach the top you have to do all three jobs in
          the same answer, not just one of them well.
        </p>
        <div className="not-prose grid gap-3 sm:grid-cols-3">
          {[RAO2, RAO4, RAO5].map((ao) => (
            <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {ao.code}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{ao.descriptor}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          In plain English: {RAO2.code} is <strong>reading between the lines</strong> (what each
          quotation implies, not just what it says); {RAO4.code} is{' '}
          <strong>zooming in on a single word</strong> and saying what it does; and {RAO5.code} is{' '}
          <strong>why the writer wrote it and how it makes the reader feel</strong>. The contrast
          between the two writers is the thread that ties all three together.
        </p>
      </section>

      {/* ── The official grid ────────────────────────────────────── */}
      <section className="my-10">
        <h2>The official levelled grid</h2>
        <p>
          The examiner reads your whole answer, then chooses the single level that fits it best
          overall. You do not lose marks for what you leave out - you climb by showing more. Notice
          how each level adds one more demand than the one below it.
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

      {/* ── The climb ────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The climb - Level 1 to Level 3</h2>
        <p>
          The grid describes a ladder. Each rung keeps everything below it and adds one new thing.
          Learn the ladder and you always know what the next mark needs.
        </p>
        <div className="not-prose grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {COMPARISON_LEVELS[0].level} - implicit comment
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You make a simple comment about each quotation. The contrast is <em>implied</em>{' '}
              rather than spelled out - the reader can tell the two are different, but you have not
              actually said how or why. You touch one or two of the three objectives.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {COMPARISON_LEVELS[1].level} - explicit explanation
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You name the contrast openly with a comparison word (<em>whereas</em>,{' '}
              <em>by contrast</em>) and explain it. You cover two of the three objectives clearly,
              but one strand is missing or thin.
            </p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-primary/[0.04] p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {COMPARISON_LEVELS[2].level} - clear developed explanation
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You explain the contrast clearly and do all three jobs: an <strong>inference</strong>,
              a comment on <strong>language at word level</strong>, and each writer&apos;s{' '}
              <strong>purpose, viewpoint and effect on the reader</strong> - all woven into one
              developed comparison.
            </p>
          </div>
        </div>
      </section>

      {/* ── The two extracts ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>Practise on these two original extracts</h2>
        <p>
          Both extracts below were written by The English Hub for this lesson - they are not taken
          from any past paper. They are short non-fiction pieces on the same theme:{' '}
          <strong>swimming in cold water</strong>. One warns; one celebrates. That difference in
          purpose is exactly what the comparison question wants you to unpick.
        </p>

        <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Text 1 - a safety leaflet
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              The water does not care how strong a swimmer you think you are. The moment your skin
              meets the cold, your chest clamps shut and you gasp without choosing to. Within
              seconds your arms stiffen and stop obeying you. People do not drown here because they
              are weak; they drown because the river ambushes the body before the mind can argue.
              Treat every cold pool, lake and harbour as a trap that is already set.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Text 2 - a magazine column
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              The first shock of the cold is not a punishment - it is an invitation. My breath
              races, my skin sings, and for one bright minute every dull worry of the week is rinsed
              clean away. I float on my back under an enormous sky and feel, absurdly, more alive
              than I have all day. The lake gives this gift to anyone brave enough to wade past
              their own hesitation.
            </p>
          </div>
        </div>

        <div className="not-prose my-5 rounded-xl border border-primary/40 bg-primary/[0.04] p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            The question ({QUESTION.typicalMarks} marks)
          </p>
          <p className="text-sm text-foreground italic mb-4">
            “Compare how the writer of <strong>Text&nbsp;1</strong> uses the quotation{' '}
            <em>“the river ambushes the body before the mind can argue”</em> and how the writer of{' '}
            <strong>Text&nbsp;2</strong> uses the quotation{' '}
            <em>“the first shock of the cold … is an invitation”</em> to reflect each writer&apos;s
            purpose.”
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">{QUESTION.howToAnswer}</p>
        </div>
      </section>

      {/* ── Three model answers ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Three model answers, annotated</h2>
        <p>
          The same two quotations, answered three ways. Read each model, then read the annotation
          that shows <strong>exactly which words earn which credit</strong> against the grid above.
        </p>

        {/* Level 1 model */}
        <div className="not-prose my-5 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            {COMPARISON_LEVELS[0].level} answer ({COMPARISON_LEVELS[0].marks} marks)
          </p>
          <p className="text-sm text-foreground italic leading-relaxed mb-4">
            “Text 1 says the river ambushes the body, so it sounds dangerous. Text 2 says the cold
            is an invitation, so it sounds nicer. They are different because one is scary and one is
            good.”
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Why this is Level 1:</strong> The contrast is only{' '}
            <em>implicit</em> - &ldquo;they are different&rdquo; states that a difference exists
            without explaining it. &ldquo;Sounds dangerous&rdquo; and &ldquo;sounds nicer&rdquo; are
            simple comments that gesture at effect ({RAO5.code}) but never zoom in on a single word
            ({RAO4.code}) and never read between the lines ({RAO2.code}). It mostly re-tells the
            quotations. A simple comment with an implied contrast touching one strand sits at the
            bottom of the grid.
          </p>
        </div>

        {/* Level 2 model */}
        <div className="not-prose my-5 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            {COMPARISON_LEVELS[1].level} answer ({COMPARISON_LEVELS[1].marks} marks)
          </p>
          <p className="text-sm text-foreground italic leading-relaxed mb-4">
            “The writer of Text&nbsp;1 chooses the word{' '}
            <span className="text-primary">“ambushes”</span> to make the river sound like a hidden
            enemy attacking without warning, which suggests the danger is sudden and unfair.{' '}
            <span className="text-primary">Whereas</span> the writer of Text&nbsp;2 calls the cold
            an <span className="text-primary">“invitation”</span>, which makes it sound welcoming
            and chosen. This shows the first writer wants to warn the reader and the second wants to
            make swimming sound tempting.”
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Why this is Level 2:</strong> The contrast is now{' '}
            <em>explicit</em> - the comparison connective{' '}
            <span className="text-primary">&ldquo;Whereas&rdquo;</span> openly joins the two
            writers. It zooms in on the single words{' '}
            <span className="text-primary">&ldquo;ambushes&rdquo;</span> and{' '}
            <span className="text-primary">&ldquo;invitation&rdquo;</span> ({RAO4.code}) and names
            each writer&apos;s purpose, &ldquo;wants to warn&rdquo; / &ldquo;make swimming sound
            tempting&rdquo; ({RAO5.code}). Two strands are done clearly. What is missing is a true
            <em> inference</em> ({RAO2.code}) - reading beyond the words to what is implied - and a
            comment on the effect <em>on the reader</em>, so it cannot reach the top level.
          </p>
        </div>

        {/* Level 3 model */}
        <div className="not-prose my-5 rounded-xl border border-primary/40 bg-primary/[0.04] p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            {COMPARISON_LEVELS[2].level} answer ({COMPARISON_LEVELS[2].marks} marks)
          </p>
          <p className="text-sm text-foreground italic leading-relaxed mb-4">
            “The writer of Text&nbsp;1 uses the verb{' '}
            <span className="text-primary">“ambushes”</span> to cast the river as a calculating
            predator that strikes from hiding. The word implies that the danger is not the
            swimmer&apos;s fault and cannot be out-thought -{' '}
            <span className="text-primary">
              the body is overpowered “before the mind can argue”
            </span>
            , so even a confident reader is left feeling that skill offers no protection. The
            writer&apos;s purpose is to frighten the reader into caution.{' '}
            <span className="text-primary">By contrast</span>, the writer of Text&nbsp;2 chooses the
            noun <span className="text-primary">“invitation”</span>, which implies the cold is
            generous and personal - something held out to be accepted rather than survived. This
            reflects a celebratory, persuasive purpose: where Text&nbsp;1 positions the reader as a
            potential victim, Text&nbsp;2 positions them as a guest, leaving the reader tempted
            rather than afraid.”
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Why this reaches the top level:</strong> All three
            jobs are done inside one developed comparison. <strong>Inference</strong> ({RAO2.code}):
            &ldquo;the danger is not the swimmer&apos;s fault&rdquo; and &ldquo;held out to be
            accepted&rdquo; read beyond the literal words. <strong>Language at word level</strong> (
            {RAO4.code}): the verb <span className="text-primary">&ldquo;ambushes&rdquo;</span> and
            the noun <span className="text-primary">&ldquo;invitation&rdquo;</span> are each named
            and explained. <strong>Purpose and effect</strong> ({RAO5.code}): &ldquo;to frighten the
            reader into caution&rdquo; vs a &ldquo;celebratory, persuasive purpose&rdquo;, plus the
            contrast in how the reader is positioned (victim vs guest). The connective{' '}
            <span className="text-primary">&ldquo;By contrast&rdquo;</span> makes the comparison
            clear and sustained.
          </p>
        </div>
      </section>

      {/* ── Sentence frames ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>Comparison sentence frames</h2>
        <p>
          A comparison falls apart when the two halves are answered separately. These frames force
          the contrast into a single sentence. Fill the gaps with your own words and evidence.
        </p>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          {[
            {
              tag: 'Open the contrast',
              frame:
                'The writer of Text 1 chooses the word “___” to imply ___, whereas the writer of Text 2 chooses “___” to suggest ___.',
            },
            {
              tag: 'Add the inference',
              frame:
                'This implies that ___, which the second writer does not suggest at all; instead the choice of “___” hints that ___.',
            },
            {
              tag: 'Name each purpose',
              frame:
                'The first writer’s purpose is to ___ the reader, while the second writer’s purpose is to ___ the reader.',
            },
            {
              tag: 'Contrast the effect',
              frame:
                'As a result, Text 1 leaves the reader feeling ___, by contrast Text 2 leaves the reader feeling ___.',
            },
            {
              tag: 'Position the reader',
              frame:
                'Where Text 1 positions the reader as ___, Text 2 positions the reader as ___.',
            },
            {
              tag: 'Sum up the difference',
              frame:
                'Both writers describe the same thing, yet the contrast in ___ shows they want the reader to ___ in completely different ways.',
            },
          ].map((f) => (
            <div key={f.tag} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {f.tag}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed italic">{f.frame}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Self-mark checklist ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Self-mark checklist</h2>
        <p>
          Mark your own practice answer against this list before you check the grid. Each unticked
          box tells you which level you are stuck on and what to add next.
        </p>
        <div className="not-prose rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              {
                lvl: 'Level 1 → 2',
                check:
                  'Have I used a comparison connective (whereas, by contrast, while) so the contrast is explicit, not just implied?',
              },
              {
                lvl: 'Level 1 → 2',
                check:
                  'Have I quoted a single word from each text rather than re-telling the whole quotation?',
              },
              {
                lvl: 'Level 2',
                check:
                  'Have I said what each chosen word does to the meaning, not just that it is “effective” or “powerful”?',
              },
              {
                lvl: 'Level 2 → 3',
                check:
                  'Have I made an inference - written what each quotation implies beyond its literal words (RAO2)?',
              },
              {
                lvl: 'Level 2 → 3',
                check:
                  'Have I named each writer’s purpose and viewpoint, and said how each makes the reader feel (RAO5)?',
              },
              {
                lvl: 'Level 3',
                check:
                  'Are all three strands woven into one comparison about the same point, rather than three separate paragraphs?',
              },
            ].map((item) => (
              <li key={item.check} className="flex gap-3">
                <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-primary/60" />
                <span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
                    {item.lvl}
                  </span>
                  <br />
                  {item.check}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ──────────────────────────────────── */}
      <footer className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground leading-relaxed">
        {SPEC_ATTRIBUTION}
      </footer>
    </>
  )
}
