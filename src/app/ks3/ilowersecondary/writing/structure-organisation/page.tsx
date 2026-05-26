import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  WRITING_SKILLS,
  WAO1_GRID,
  ASSESSMENT_OBJECTIVES,
  YEAR9_CODES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/writing/structure-organisation'

const SKILL = WRITING_SKILLS.find((s) => s.code === '2.2')!
const WAO1 = ASSESSMENT_OBJECTIVES.WAO1
const W92C = YEAR9_CODES.find((c) => c.code === 'W9.2C')!

export const metadata: Metadata = {
  openGraph: {
    title: `Structure & organisation - writing skill ${SKILL.code} masterclass`,
    description:
      'A KS3 iLowerSecondary English masterclass on structuring and organising writing: whole-text shape, topic sentences, paragraph construction, and linking paragraphs with a range of methods.',
  },
  title: `Structure & organisation - writing skill ${SKILL.code}`,
  description:
    'A KS3 iLowerSecondary English masterclass on structuring and organising writing: whole-text shape, topic sentences, paragraph construction, and linking paragraphs with a range of methods.',
  alternates: { canonical: PAGE_URL },
}

// ─── Original teaching content (all examples written by The English Hub) ─

const LINKING_TOOLBOX: { method: string; how: string; example: string }[] = [
  {
    method: 'Connectives & conjunctive adverbs',
    how: 'Signal the logical relationship between one paragraph and the next - addition, contrast, cause, sequence or conclusion.',
    example: 'Consequently, the closure of the bus route does not only affect commuters.',
  },
  {
    method: 'Pronoun reference',
    how: 'Open a paragraph with a pronoun that points back to a noun in the previous paragraph, threading the two together without repeating it.',
    example: 'They had promised us a decision by spring. That promise was quietly broken.',
  },
  {
    method: 'A repeated motif',
    how: 'Carry an image, object or phrase from paragraph to paragraph so the reader feels a deliberate, controlled return.',
    example: 'The empty chair appeared again - this time at the head of the table.',
  },
  {
    method: 'Time and place shifts',
    how: 'Use a clear marker of when or where to move the reader cleanly into the next stage of a recount or description.',
    example: 'By the time the tide turned, the harbour had emptied of everyone but us.',
  },
  {
    method: 'A hook-and-echo',
    how: 'End a paragraph on an idea and begin the next by echoing a key word from it, so the seam is invisible.',
    example: '…and that silence said everything. Silence, in our house, was never neutral.',
  },
]

const PLANNING_SKELETON: { stage: string; purpose: string }[] = [
  {
    stage: 'Opening (1 short paragraph)',
    purpose:
      'Establish form and audience instantly: address the reader, state your reason for writing and your overall position or focus.',
  },
  {
    stage: 'Development paragraph 1',
    purpose:
      'Strongest point first. Topic sentence → evidence or example → explanation of why it matters to this reader.',
  },
  {
    stage: 'Development paragraph 2',
    purpose:
      'A clearly different point, linked back to the first with a connective or pronoun reference so the argument feels continuous.',
  },
  {
    stage: 'Development paragraph 3',
    purpose:
      'Counter-view or a widening of scope, then a return to your line - this shows control rather than a list of unconnected ideas.',
  },
  {
    stage: 'Closing (1 short paragraph)',
    purpose:
      'Echo a phrase from the opening (a deliberate motif), restate the intention and end on a memorable, purposeful note.',
  },
]

export default async function StructureOrganisationPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Writing skills',
      url: 'https://theenglishhub.app/ks3/ilowersecondary/writing-skills',
    },
    { name: 'Structure & organisation', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/writing-skills" className="hover:text-foreground">
          Writing skills
        </Link>
        <span> · </span>
        <span>Structure &amp; organisation</span>
      </p>

      <h1>Structure &amp; organisation - writing skill {SKILL.code}</h1>
      <p className="lead">
        {SKILL.title}. This masterclass shows you how to shape a whole text to achieve your
        intention and purpose, how to build a paragraph that does its job, and how to stitch
        paragraphs together so the examiner feels coherence from the first line to the last.
      </p>

      {/* ── What the skill asks ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>What skill {SKILL.code} actually asks for</h2>
        <p className="text-sm text-muted-foreground">
          In Section B, organisation is rewarded under {WAO1.code}: <em>{WAO1.descriptor}</em> The
          three sub-skills below are the whole of {SKILL.code} - every paragraph you write should be
          serving one of them.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          {SKILL.bullets.map((b) => (
            <div key={b} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm text-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
        <div className="not-prose mt-3 rounded-xl border border-border/60 bg-card p-4">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Curriculum objective {W92C.code}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{W92C.descriptor}</p>
        </div>
      </section>

      {/* ── How the grid rewards organisation ───────────────────────── */}
      <section className="my-10">
        <h2>How the {WAO1.code} grid rewards organisation</h2>
        <p className="text-sm text-muted-foreground">
          Read the middle descriptor in each band closely. The marks move with one idea: how much{' '}
          <em>control</em> you have over your paragraphs, and whether coherence is local or runs all
          the way through the piece.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Level
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Marks
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Organisation descriptor
                </th>
              </tr>
            </thead>
            <tbody>
              {WAO1_GRID.map((band) => (
                <tr key={band.level} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{band.level}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {band.marks}
                  </td>
                  <td className="px-4 py-3 text-foreground leading-relaxed">
                    {band.descriptors[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          The vocabulary climbs from <em>some sequencing with awkward transitions</em>, to{' '}
          <em>clear control</em>, to <em>coherence throughout</em>, and finally to{' '}
          <em>complete control</em>. To climb a band you do not need more ideas - you need cleaner
          topic sentences and stronger links between paragraphs.
        </p>
      </section>

      {/* ── Organising the whole text ───────────────────────────────── */}
      <section className="my-10">
        <h2>Step 1 - Organise the whole text for your purpose</h2>
        <p className="text-sm text-muted-foreground">
          The shape of the piece should be chosen by its purpose, not decided as you go. Pick the
          spine before you write a sentence.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              To argue or persuade
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A <strong>point-evidence-explanation</strong> (P-E-E) spine: each paragraph makes one
              claim, supports it, then explains its effect on the reader, building to your strongest
              point.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              To recount
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A <strong>chronological</strong> spine: events in time order, with time markers doing
              the linking so the reader never loses the thread of when things happened.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              To describe
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A <strong>zoom</strong> spine: move deliberately from wide to close (or far to near),
              so the description has a direction instead of being a random pile of details.
            </p>
          </div>
        </div>
      </section>

      {/* ── Topic sentences & paragraph construction ────────────────── */}
      <section className="my-10">
        <h2>Step 2 - Build the paragraph: the topic sentence</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A topic sentence announces what the paragraph is about and how it connects to your overall
          line. If a reader could cover the paragraph and still know its job from the first sentence
          alone, it is doing its work. Everything after the topic sentence should develop, prove or
          illustrate it - nothing should wander off it.
        </p>
        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Before - disorganised
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The library shuts at four now. I used to do my homework there and it was quiet. My
              brother got a job last year so he is busy. There are not many places to go after
              school and the new café is expensive anyway. Reading is good for you, everyone says
              so.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              After - reorganised
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>
                Shortening the library&rsquo;s hours has quietly removed the one place students
                could safely work after school.
              </strong>{' '}
              Until this year, its reading room filled every afternoon with pupils who had nowhere
              quieter at home. Now the doors close at four, those same students are left with an
              expensive café or the street. For many of us, the library was not a luxury - it was
              the only option.
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Notice what changed: the &ldquo;after&rdquo; version opens with a clear topic sentence,
          every following sentence proves it, the irrelevant lines about the brother and a general
          claim about reading are cut, and the paragraph closes on the point it began with. That
          return is what produces <em>coherence</em>, not just correct full stops.
        </p>
      </section>

      {/* ── Linking toolbox ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Step 3 - Link paragraphs with a range of methods</h2>
        <p className="text-sm text-muted-foreground">
          The top bands reward a <em>range</em> of linking methods, not the same connective every
          time. Reaching for &ldquo;Firstly… Secondly… Finally&rdquo; on its own keeps you low;
          varying the seam is what signals control. Keep this toolbox to hand.
        </p>
        <div className="not-prose mt-4 grid gap-3">
          {LINKING_TOOLBOX.map((tool) => (
            <div key={tool.method} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                {tool.method}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.how}</p>
              <p className="mt-2 text-sm text-foreground leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  e.g.{' '}
                </span>
                &ldquo;{tool.example}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Planning skeleton ───────────────────────────────────────── */}
      <section className="my-10">
        <h2>A planning skeleton for a Section B form</h2>
        <p className="text-sm text-muted-foreground">
          Use this five-part skeleton for a typical letter, recount or article task. Spend two or
          three minutes filling it in before you write - a planned shape is the difference between{' '}
          <em>clear control</em> and a piece that drifts.
        </p>
        <div className="not-prose mt-4 grid gap-3">
          {PLANNING_SKELETON.map((row, i) => (
            <div
              key={row.stage}
              className="rounded-xl border border-border/60 bg-card p-4 flex gap-4"
            >
              <span className="font-mono text-xs text-primary shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{row.stage}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{row.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Checklist ───────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Quick self-check before you hand it in</h2>
        <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              'Could a reader tell each paragraph’s job from its first sentence?',
              'Does every sentence in a paragraph stay on that topic sentence?',
              'Have I used at least three different linking methods, not one repeated connective?',
              'Does the closing echo something from the opening so the piece feels whole?',
              'Is the overall shape (P-E-E, chronological or zoom) right for my purpose?',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  ·
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
