import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  SECTIONS,
  WAO1_GRID,
  WAO2_GRID,
  WRITING_FORMS,
  WRITING_PURPOSES,
  QUESTION_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const SECTION_B = SECTIONS.B
const WRITING_TASK = QUESTION_TYPES.find((q) => q.id === 'writing-task')!
const S4_WAO1 = WAO1_GRID.find((g) => g.level === 'S4')!
const S4_WAO2 = WAO2_GRID.find((g) => g.level === 'S4')!

export const metadata: Metadata = {
  title: 'The Section B writing task — method & worked example | iLowerSecondary English',
  description:
    'A step-by-step walkthrough of the single extended writing task in Section B of the Pearson Edexcel iLowerSecondary English achievement test: decode, plan, draft and proofread, with an original worked example annotated against the WAO1 and WAO2 mark grids.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/writing/section-b-task',
  },
  openGraph: {
    title: 'The Section B writing task — method & worked example',
    description:
      'Decode the task, plan, draft and proofread the Section B extended writing task, with an original S4-standard model answer and examiner annotation.',
  },
}

// ─── Original worked-example task (invented end-to-end by The English Hub) ──

const MODEL_PLAN = [
  {
    label: 'Form',
    note: 'Letter to a friend — informal but shaped: greeting, sign-off, a warm and personal voice that speaks directly to one named reader.',
  },
  {
    label: 'Audience',
    note: 'A close friend of my own age. Chatty, but still organised so it is easy to follow.',
  },
  {
    label: 'Purpose',
    note: 'To recount and describe a memorable journey so that the friend can almost see it; a little reflection at the end.',
  },
  {
    label: 'Three sections',
    note: '1) Setting off, full of nerves. 2) The journey itself — the long climb and the storm. 3) Arriving, and what the trip taught me.',
  },
  {
    label: 'Best bits to bank',
    note: 'A weather image; a short punchy sentence at the tense moment; a semicolon to join two linked ideas; a reflective last line that loops back to the opening.',
  },
]

const MODEL_PARAGRAPHS = [
  {
    text: 'Dear Mia,',
  },
  {
    text: 'You will never guess where I am writing this from — a tiny mountain hut with the rain hammering on the roof like impatient fingers. I promised I would tell you about the journey, so here it is, every soggy, unforgettable minute of it.',
  },
  {
    text: 'We set off at dawn, and I was, honestly, terrified. The minibus rattled along a road so narrow that the wheels seemed to hang over the edge of nothing. My stomach lurched at every bend. Around me, everyone else chatted happily, but I just stared out at the valley dropping away beneath us and counted my breaths, the way you taught me before exams.',
  },
  {
    text: 'Then the real journey began: three hours of climbing on foot. The path twisted upwards through pine trees that smelled sharp and clean, and at first it was wonderful. But the weather turned. Clouds rolled in like grey smoke, the temperature plunged, and suddenly the rain arrived — not gentle, but furious. We pulled our hoods up and pushed on, boots squelching, fingers numb. Nobody spoke. I have never felt so small or so determined at the same time.',
  },
  {
    text: 'When we finally reached the hut, the relief was enormous. We crowded inside, dripping and laughing, and someone produced a flask of hot chocolate that tasted, in that moment, like the best thing I had ever drunk. I sat by the window and watched the storm fling itself against the glass, and I felt strangely proud. I had been scared at the start; I had carried on anyway.',
  },
  {
    text: 'I think that is what the journey really taught me, Mia. The hardest part was not the climb — it was deciding, at dawn, to get on that minibus at all. I keep thinking about that. Anyway, write back soon and tell me everything. I miss you, and I cannot wait to do this with you next time.',
  },
  {
    text: 'With love from your slightly braver friend,\nAisha',
  },
]

const ANNOTATIONS = [
  {
    feature: 'Form opened and closed correctly',
    detail:
      'A greeting ("Dear Mia,") and a personalised sign-off frame the response so the letter form is unmistakable, and the direct address to a named friend is sustained from first line to last.',
    grid: 'WAO1',
  },
  {
    feature: 'Sophisticated awareness of audience',
    detail:
      'The chatty tone ("You will never guess…"), the shared in-joke ("the way you taught me before exams") and the warm closing all show the writing is shaped precisely for one close friend, not a generic reader.',
    grid: 'WAO1',
  },
  {
    feature: 'Controlled, coherent structure',
    detail:
      'Three clear stages — setting off, the climb and the storm, arriving and reflecting — each in its own paragraph, linked by time markers ("at dawn", "Then", "When we finally"), giving complete control of sequencing.',
    grid: 'WAO1',
  },
  {
    feature: 'Stylistic features that fully support purpose',
    detail:
      'The simile "rain hammering on the roof like impatient fingers" and "Clouds rolled in like grey smoke" make the recount vivid and descriptive, exactly matching the chosen purpose.',
    grid: 'WAO1',
  },
  {
    feature: 'Grammatically assured, varied sentences',
    detail:
      'Long, layered sentences for the climb contrast with the blunt "Nobody spoke." at the tense moment — sentence variety used deliberately for effect throughout.',
    grid: 'WAO2',
  },
  {
    feature: 'Sophisticated punctuation',
    detail:
      'A dash for the surprise reveal, a semicolon balancing two linked clauses ("I had been scared at the start; I had carried on anyway."), and accurate commas and apostrophes throughout.',
    grid: 'WAO2',
  },
  {
    feature: 'Ambitious, accurate spelling',
    detail:
      'More ambitious choices — "terrified", "furious", "determined", "enormous" — are spelled correctly and used confidently rather than for show.',
    grid: 'WAO2',
  },
]

const LOSE_EASY_MARKS = [
  'Ignoring the form: writing a story when the task asked for a letter, an article or a diary entry — the form must be established and maintained.',
  'No greeting or sign-off in a letter, or no headline in an article: the conventions of the form are part of WAO1.',
  'Forgetting the audience: a letter to a friend that sounds like a formal essay loses the "awareness of audience" credit.',
  'One enormous paragraph with no breaks — organisation and paragraph control are explicitly assessed.',
  'No plan, so the writing wanders, repeats itself or runs out of time mid-sentence.',
  'Over-writing the opening and rushing the ending, so the response has no controlled shape.',
  'Comma splices and missing full stops: sentence demarcation is a whole strand of WAO2.',
  'Apostrophe slips ("its/it’s", plurals with apostrophes) scattered through the response.',
  'Showing off with ambitious words that are misspelled — accuracy matters more than ambition.',
  'Never re-reading: two minutes of proofreading recovers easy WAO2 marks for punctuation and spelling.',
]

const METHOD_STEPS = [
  {
    n: '1',
    title: 'Decode the task',
    body: 'Underline the form, the audience and the purpose. Note who you are writing to and why. The task is always linked to the theme of the Section A reading, so let that theme steer your ideas.',
  },
  {
    n: '2',
    title: 'Plan (about 3 minutes)',
    body: 'Jot a tiny plan: form, audience, purpose, then three or four sections in order. Bank one or two "best bits" you will definitely include — a strong image, a deliberate short sentence, a piece of accurate punctuation.',
  },
  {
    n: '3',
    title: 'Draft',
    body: 'Open in a way that signals the form immediately. Move through your planned sections, linking paragraphs with cohesive markers. Vary sentence length and openings on purpose, and keep the audience in view in every paragraph.',
  },
  {
    n: '4',
    title: 'Proofread',
    body: 'Spend the last two to three minutes reading back slowly. Hunt for the errors you know you make: sentence demarcation, apostrophes, agreement and the spelling of any ambitious words.',
  },
]

export default function SectionBTaskPage() {
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
            name: 'Writing skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing',
          },
          {
            name: 'The Section B task',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing/section-b-task',
          },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-950/60">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-emerald-700">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/ks3" className="hover:text-emerald-700">
                KS3
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-emerald-700">
                iLowerSecondary English
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/ks3/ilowersecondary/writing" className="hover:text-emerald-700">
                Writing skills
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-ink-950/80">
              The Section B task
            </li>
          </ol>
        </nav>

        <header className="mb-12">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
            iLowerSecondary English &middot; Writing skills
          </p>
          <h1 className="mb-4 font-serif text-4xl font-semibold text-ink-950">
            The Section B writing task
          </h1>
          <p className="text-lg leading-relaxed text-ink-950/85">
            {SECTION_B.name} is worth {SECTION_B.marks} marks and is a single piece of extended
            writing. {SECTION_B.description} You are advised to spend about{' '}
            {SECTION_B.recommendedLabel} on it. The task is marked against two assessment
            objectives: {SECTION_B.assessmentObjectives.join(' and ')}.
          </p>
        </header>

        <section
          aria-labelledby="how-it-is-marked"
          className="mb-12 rounded-lg bg-cream-100 p-6 ring-1 ring-ink-950/5 sm:p-8"
        >
          <h2 id="how-it-is-marked" className="mb-3 font-serif text-2xl font-semibold text-ink-950">
            How the task is marked
          </h2>
          <p className="mb-4 text-base leading-relaxed text-ink-950/85">
            One response, two grids. The examiner places your writing in a band on each grid
            independently and adds the two marks together.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
              <h3 className="mb-1 font-serif text-lg font-semibold text-ink-950">
                WAO1 &mdash; form, audience &amp; organisation
              </h3>
              <p className="text-sm leading-relaxed text-ink-950/80">
                Worth up to {WAO1_GRID[WAO1_GRID.length - 1].marks.split('–')[1]} marks. Rewards
                communicating appropriately for form, audience and purpose, and sequencing and
                structuring your writing coherently.
              </p>
            </div>
            <div className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
              <h3 className="mb-1 font-serif text-lg font-semibold text-ink-950">
                WAO2 &mdash; grammar, punctuation &amp; spelling
              </h3>
              <p className="text-sm leading-relaxed text-ink-950/80">
                Worth up to {WAO2_GRID[WAO2_GRID.length - 1].marks.split('–')[1]} marks. Rewards
                accurate grammar, well-demarcated and varied sentences, and confident punctuation
                and spelling.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-950/75">
            Examiner advice in the official structure: {WRITING_TASK.howToAnswer}
          </p>
        </section>

        <section aria-labelledby="the-method" className="mb-12">
          <h2 id="the-method" className="mb-2 font-serif text-2xl font-semibold text-ink-950">
            The method: decode &rarr; plan &rarr; draft &rarr; proofread
          </h2>
          <p className="mb-6 text-sm text-ink-950/75">
            With only {SECTION_B.recommendedLabel}, a quick, disciplined routine protects the easy
            marks.
          </p>
          <ol className="space-y-4">
            {METHOD_STEPS.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10"
              >
                <span className="font-mono text-2xl font-semibold text-emerald-700">{step.n}</span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-semibold text-ink-950">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-950/85">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-lg bg-cream-100 p-5 text-sm leading-relaxed text-ink-950/80 ring-1 ring-ink-950/5">
            <p className="mb-2">
              <span className="font-semibold text-ink-950">
                Forms you may be asked to write in:{' '}
              </span>
              {WRITING_FORMS.join(', ')}.
            </p>
            <p>
              <span className="font-semibold text-ink-950">Purposes you may be set: </span>
              {WRITING_PURPOSES.join(', ')}.
            </p>
          </div>
        </section>

        <section aria-labelledby="worked-example" className="mb-12">
          <h2 id="worked-example" className="mb-2 font-serif text-2xl font-semibold text-ink-950">
            One worked example, end to end
          </h2>
          <p className="mb-6 text-sm text-ink-950/75">
            Everything below is an original task and model answer written by The English Hub for
            teaching purposes. It is not taken from any past paper.
          </p>

          <div className="mb-8 rounded-lg border-l-4 border-emerald-400 bg-cream-100 p-6">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Section B-style task (invented example)
            </p>
            <p className="text-base leading-relaxed text-ink-950">
              The texts in Section A were all about travel and discovery. Write a{' '}
              <strong>letter to a friend</strong> describing <strong>a memorable journey</strong>{' '}
              you have made. In your letter you should recount what happened and describe how the
              journey made you feel.
            </p>
            <p className="mt-3 text-sm text-ink-950/70">
              Form: letter &middot; Audience: a friend of your own age &middot; Purpose: recount and
              describe.
            </p>
          </div>

          <h3 className="mb-3 font-serif text-xl font-semibold text-ink-950">The 3-minute plan</h3>
          <ul className="mb-8 space-y-2">
            {MODEL_PLAN.map((row) => (
              <li
                key={row.label}
                className="rounded-lg bg-cream-50 p-4 text-sm leading-relaxed text-ink-950/85 ring-1 ring-ink-950/10"
              >
                <span className="font-semibold text-ink-950">{row.label}: </span>
                {row.note}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 font-serif text-xl font-semibold text-ink-950">
            The model response (S4 standard, ~300 words)
          </h3>
          <div className="mb-8 space-y-4 rounded-lg bg-cream-50 p-6 ring-1 ring-ink-950/10">
            {MODEL_PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className="whitespace-pre-line font-serif text-base leading-relaxed text-ink-950"
              >
                {p.text}
              </p>
            ))}
          </div>

          <h3 className="mb-3 font-serif text-xl font-semibold text-ink-950">
            Examiner-style annotation
          </h3>
          <p className="mb-4 text-sm text-ink-950/75">
            Each strength below is tagged to the grid it earns credit on.
          </p>
          <ul className="space-y-4">
            {ANNOTATIONS.map((a) => (
              <li key={a.feature} className="rounded-lg bg-cream-50 p-5 ring-1 ring-ink-950/10">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-emerald-700">{a.grid}</span>
                  <span className="font-serif text-base font-semibold text-ink-950">
                    {a.feature}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-950/85">{a.detail}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-lg bg-cream-100 p-6 ring-1 ring-ink-950/5">
            <h3 className="mb-3 font-serif text-lg font-semibold text-ink-950">
              Why this would sit at the top band
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-ink-950/85">
              <span className="font-semibold text-ink-950">
                WAO1 ({S4_WAO1.level}, {S4_WAO1.marks}):{' '}
              </span>
              {S4_WAO1.descriptors.join(' ')}
            </p>
            <p className="text-sm leading-relaxed text-ink-950/85">
              <span className="font-semibold text-ink-950">
                WAO2 ({S4_WAO2.level}, {S4_WAO2.marks}):{' '}
              </span>
              {S4_WAO2.descriptors.join(' ')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-950/75">
              The letter sustains its form and a precisely judged audience, controls its paragraphs
              completely, and uses imagery, sentence variety and sophisticated punctuation to
              support its purpose, so it sits at the top of both grids.
            </p>
          </div>
        </section>

        <section aria-labelledby="lose-marks" className="mb-12">
          <h2 id="lose-marks" className="mb-2 font-serif text-2xl font-semibold text-ink-950">
            10 ways to lose easy marks
          </h2>
          <p className="mb-6 text-sm text-ink-950/75">
            None of these is about clever ideas &mdash; they are all avoidable with a plan and a
            proofread.
          </p>
          <ol className="space-y-3">
            {LOSE_EASY_MARKS.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg bg-cream-50 p-4 text-sm leading-relaxed text-ink-950/85 ring-1 ring-ink-950/10"
              >
                <span className="font-mono text-sm font-semibold text-emerald-700">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-16 border-t border-ink-950/10 pt-6 text-xs leading-relaxed text-ink-950/55">
          {SPEC_ATTRIBUTION}
        </footer>
      </main>
    </>
  )
}
