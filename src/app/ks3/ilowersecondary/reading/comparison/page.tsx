import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  READING_SKILLS,
  COMPARISON_LEVELS,
  ASSESSMENT_OBJECTIVES,
  QUESTION_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  openGraph: {
    title: 'Comparing non-fiction texts - iLowerSecondary English',
    description:
      'Masterclass on the levelled comparison question: linking ideas and viewpoints across two texts, comparative connectives, the feature-tick table, and graded model answers for every level.',
  },
  title: 'Comparing non-fiction texts - iLowerSecondary English',
  description:
    'Masterclass on the levelled comparison question: linking ideas and viewpoints across two texts, comparative connectives, the feature-tick table, and graded model answers for every level.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/reading/comparison',
  },
}

const SKILL = READING_SKILLS.find((s) => s.code === '1.5')!
const RAO2 = ASSESSMENT_OBJECTIVES.RAO2
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5
const COMPARE_Q = QUESTION_TYPES.find((q) => q.id === 'comparison-6-mark')!
const TICK_Q = QUESTION_TYPES.find((q) => q.id === 'feature-tick-table')!
const TOP_MARKS = COMPARISON_LEVELS[COMPARISON_LEVELS.length - 1].marks.split('-')[1]

const CONNECTIVES = [
  {
    group: 'Showing a similarity',
    words: ['similarly', 'likewise', 'in the same way', 'both texts'],
  },
  {
    group: 'Showing a difference',
    words: ['whereas', 'in contrast', 'however', 'on the other hand', 'unlike'],
  },
  {
    group: 'Building the contrast',
    words: ['by comparison', 'this differs because', 'while the first text…, the second…'],
  },
]

const FEATURE_ROWS = [
  { feature: 'A direct question to the reader', text1: true, text2: false },
  { feature: 'An exclamation mark for emphasis', text1: false, text2: true },
  { feature: 'A statistic or number', text1: true, text2: false },
  { feature: 'A first-person pronoun', text1: false, text2: true },
  { feature: 'A list of three', text1: true, text2: true },
]

export default async function ComparisonPage() {
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
            name: 'Reading skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading',
          },
          {
            name: 'Comparison',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading/comparison',
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
        <Link href="/ks3/ilowersecondary/reading" className="hover:text-foreground">
          {await t('ks3.page.bc.reading_skills')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.reading.comparison.bc')}</span>
      </p>

      <h1>Comparing non-fiction texts</h1>
      <p className="lead">
        Reading skill {SKILL.code} - {SKILL.title}. This is the one question on the paper that asks
        you to read <em>two</em> texts together and explain how they relate. Get the technique right
        and it is the biggest single block of reading marks you can win.
      </p>

      {/* ── What the skill actually asks ─────────────────────────── */}
      <section className="my-10">
        <h2>What this skill is</h2>
        <p>Skill {SKILL.code} has two strands, and you need both to reach the top level:</p>
        <ul>
          {SKILL.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p>
          The big comparison question - “{COMPARE_Q.name}” - is worth {COMPARE_Q.typicalMarks} marks
          and is the only item on the paper marked against three reading objectives at once:
        </p>
        <div className="not-prose my-5 grid gap-3 sm:grid-cols-3">
          {[RAO2, RAO4, RAO5].map((ao) => (
            <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {ao.code}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{ao.descriptor}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          In plain English: read beyond the literal ({RAO2.code}), look closely at the writers&apos;
          word choices ({RAO4.code}), and explain what each writer is trying to do to the reader (
          {RAO5.code}) - and do all of this <em>across</em> the two texts, not one then the other.
        </p>
      </section>

      {/* ── Linking ideas and viewpoints ─────────────────────────── */}
      <section className="my-10">
        <h2>Step 1 - link the key ideas and viewpoints</h2>
        <p>
          Before you write a word, find the <strong>point of contact</strong> between the two texts.
          They will be on the same theme, but they almost always have different purposes or
          viewpoints - one might inform calmly while the other argues passionately, or one might be
          enthusiastic while the other is critical. Ask:
        </p>
        <ul>
          <li>What is each writer&apos;s main idea or claim about the theme?</li>
          <li>
            What is each writer&apos;s viewpoint - are they for it, against it, neutral, excited,
            worried?
          </li>
          <li>
            What is each writer&apos;s purpose - to inform, explain, persuade, argue, describe?
          </li>
          <li>
            Where do the texts <em>agree</em>, and where do they <em>pull apart</em>?
          </li>
        </ul>
        <p>
          A strong answer is built around the differences and similarities you find here - not a
          feature spotted in Text 1 and an unrelated feature spotted in Text 2.
        </p>
      </section>

      {/* ── Comparative connectives ──────────────────────────────── */}
      <section className="my-10">
        <h2>Step 2 - join the texts with comparative connectives</h2>
        <p>
          The difference between a Level 1 and a Level 3 answer is often a single word. An{' '}
          <em>implicit</em> comment puts the two texts near each other and hopes the examiner sees
          the link. An <em>explicit</em> comparison uses a connective that makes the link impossible
          to miss. Keep these ready:
        </p>
        <div className="not-prose my-5 grid gap-3 sm:grid-cols-3">
          {CONNECTIVES.map((c) => (
            <div key={c.group} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {c.group}
              </p>
              <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-4 space-y-1">
                {c.words.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Sentence frame that always works:{' '}
          <em>
            “The first writer … <strong>whereas</strong> the second writer …, which suggests …”
          </em>{' '}
          - claim, connective, contrast, then the effect on the reader.
        </p>
      </section>

      {/* ── The official comparison grid ─────────────────────────── */}
      <section className="my-10">
        <h2>The official comparison grid</h2>
        <p>
          The {COMPARE_Q.typicalMarks}-mark question is levelled out of {TOP_MARKS}. The journey
          through the grid is exactly the journey from an <strong>implicit comment</strong> (Level
          1), to an <strong>explicit explanation</strong> (Level 2), to a{' '}
          <strong>clear, developed explanation of the contrast</strong> (Level 3). This is the grid
          examiners apply, word for word:
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
        <p className="mt-4 text-sm text-muted-foreground">
          Notice the ladder: Level 1 touches one or two of the three strands <em>implicitly</em>;
          Level 2 makes the contrast <em>explicit</em> and focuses on two strands; Level 3 explains
          the contrast <em>clearly</em> across all three - inference, language at word level, and
          purpose and effect on the reader.
        </p>
      </section>

      {/* ── Feature-tick table ───────────────────────────────────── */}
      <section className="my-10">
        <h2>The other comparison item: the feature-tick table</h2>
        <p>
          Alongside the extended question there is a quicker closed comparison item - “{TICK_Q.name}
          ”, worth {TICK_Q.typicalMarks} marks. You are given a list of language or punctuation
          features and you tick whether each appears in Text 1, Text 2, or both.{' '}
          {TICK_Q.howToAnswer}
        </p>
        <p className="text-sm text-muted-foreground">
          Below is an original worked example (written by The English Hub, not from any past paper)
          using two short notices on the same theme:
        </p>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Feature
                </th>
                <th className="p-3 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Text 1
                </th>
                <th className="p-3 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Text 2
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((r) => (
                <tr key={r.feature} className="border-b border-border/40 align-top">
                  <td className="p-3 text-muted-foreground">{r.feature}</td>
                  <td className="p-3 text-center text-foreground">{r.text1 ? '✓' : '-'}</td>
                  <td className="p-3 text-center text-foreground">{r.text2 ? '✓' : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Scan each text once per row. Marks are usually awarded for most rows correct, so do not
          leave any blank - an even guess on a row you are unsure of risks nothing.
        </p>
      </section>

      {/* ── The paired extracts ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Worked example: a pair of extracts</h2>
        <p>
          The two short non-fiction extracts below are completely original works written by The
          English Hub for this masterclass. They are on the same theme -{' '}
          <strong>keeping a city river clean</strong> - but they have deliberately contrasting
          purposes and viewpoints.
        </p>

        <div className="not-prose my-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
              Text 1 - Council information leaflet
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Purpose: to inform. Viewpoint: neutral and factual.
            </p>
            <div className="space-y-3 text-sm text-foreground leading-relaxed">
              <p>
                The River Calden runs for eleven kilometres through the centre of town. Each year,
                council teams remove around forty tonnes of litter from its banks. Most of this
                waste is plastic packaging that has been dropped on nearby streets and washed into
                the water by rain.
              </p>
              <p>
                Recycling bins are now placed every two hundred metres along the riverside path.
                Residents can also report a blocked drain or a pollution spill using the form on the
                council website. Reports are usually checked within three working days.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
              Text 2 - Campaigner&apos;s blog post
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Purpose: to argue and persuade. Viewpoint: angry and urgent.
            </p>
            <div className="space-y-3 text-sm text-foreground leading-relaxed">
              <p>
                Have you actually walked along the Calden lately? I have. Last Saturday I counted
                seven bottles, a tyre and a supermarket trolley in a single bend of the river. This
                is not somebody else&apos;s problem - it is ours, and it is getting worse every
                single month.
              </p>
              <p>
                A few extra bins will not save this river. We need people on the banks, sleeves
                rolled up, refusing to look away. Come to the clean-up on Sunday. Bring gloves,
                bring friends, and bring the anger this beautiful, neglected river deserves.
              </p>
            </div>
          </div>
        </div>

        <div className="not-prose my-5 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Comparison question ({COMPARE_Q.typicalMarks} marks)
          </p>
          <p className="text-sm text-foreground italic">
            “Text 1 ends with <em>“Reports are usually checked within three working days.”</em> Text
            2 ends with <em>“bring the anger this beautiful, neglected river deserves.”</em> Compare
            how these two endings reflect each writer&apos;s purpose and the effect on the reader.”
          </p>
        </div>
      </section>

      {/* ── Graded model answers ─────────────────────────────────── */}
      <section className="my-10">
        <h2>The same answer at every level</h2>
        <p>
          Read these three responses to the question above. They climb the official grid one rung at
          a time - watch what changes.
        </p>

        <div className="not-prose my-5 space-y-4">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {COMPARISON_LEVELS[0].level} ({COMPARISON_LEVELS[0].marks} marks) - a simple comment,
              implicit contrast
            </p>
            <p className="text-sm text-foreground italic mb-3">
              “Text 1 talks about reports being checked in three days. Text 2 talks about bringing
              anger to the river. They are both about the river but they end in different ways.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The contrast is only <em>implicit</em> - the writer places the two endings side by
              side and says they are “different” without explaining how or why. It touches one
              strand (a vague sense of purpose) but offers no comment on word choice and no effect
              on the reader. Best-fit: Level 1.
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {COMPARISON_LEVELS[1].level} ({COMPARISON_LEVELS[1].marks} marks) - explicit
              explanation of the contrast
            </p>
            <p className="text-sm text-foreground italic mb-3">
              “Text 1 ends with a calm, factual sentence about reports being ‘checked within three
              working days’, which shows the writer&apos;s purpose is to inform residents and
              reassure them. <strong>In contrast</strong>, Text 2 ends with the emotive word
              ‘anger’, because the writer&apos;s purpose is to persuade people to act, not just to
              give information.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Now the contrast is <em>explicit</em> - “in contrast” signals it directly. Two strands
              are covered: a word-level comment (“factual” vs the emotive “anger”) and each
              writer&apos;s purpose. What is still thin is the effect on the reader. Best-fit: Level
              2.
            </p>
          </div>

          <div className="rounded-xl border border-primary/40 bg-primary/[0.04] p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {COMPARISON_LEVELS[2].level} ({COMPARISON_LEVELS[2].marks} marks) - clear, developed
              explanation of the contrast
            </p>
            <p className="text-sm text-foreground italic mb-3">
              “The first writer closes on the measured phrase ‘checked within three working days’:
              the precise number and the bureaucratic tone imply a writer whose purpose is purely to
              inform, leaving the reader feeling calmly reassured that a system is in place.{' '}
              <strong>Whereas</strong> the second writer ends on ‘the anger this beautiful,
              neglected river deserves’ - the loaded noun ‘anger’ and the bitter contrast between
              ‘beautiful’ and ‘neglected’ reveal a purpose to provoke and persuade, deliberately
              leaving the reader unsettled and pushed towards action. <strong>However</strong>,
              although their tones pull sharply apart, both writers ultimately want the reader to
              care about the river - one through quiet trust, the other through stirred emotion.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is a <em>clear, developed</em> explanation of the contrast. All three strands are
              present and woven together: inference (“imply a writer whose purpose…”), language at
              word level (“loaded noun ‘anger’”, “bitter contrast”), and purpose with the effect on
              the reader (“calmly reassured” vs “unsettled and pushed towards action”). The final
              “however” even links them back together. Best-fit: Level 3.
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          The takeaway: the words on the page barely change between levels. What changes is whether
          the link is implied or stated, how closely the word choices are examined, and whether you
          finish on the effect on the reader. Aim to do all three in every comparison paragraph.
        </p>
      </section>

      {/* ── Fair-dealing footer ──────────────────────────────────── */}
      <footer className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground leading-relaxed">
        {SPEC_ATTRIBUTION}
      </footer>
    </>
  )
}
