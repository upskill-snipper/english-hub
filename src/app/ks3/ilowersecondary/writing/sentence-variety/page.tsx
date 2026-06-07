import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  WRITING_SKILLS,
  WAO2_GRID,
  YEAR9_CODES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/writing/sentence-variety'

const WAO2 = ASSESSMENT_OBJECTIVES.WAO2
const SKILL_2_3 = WRITING_SKILLS.find((s) => s.code === '2.3')!
const SENTENCE_BULLET = SKILL_2_3.bullets[0]
const W9_3C = YEAR9_CODES.find((c) => c.code === 'W9.3C')!

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: a range of sentences & sentence openings (WAO2)',
    description:
      'A masterclass on using simple, compound, complex and minor sentences for effect, varied sentence openings, short sentences for tension, the short-then-long rhythm and single-clause vs subordinate development - with original before/after rewrites, a sentence-opener bank and a drill task with a model answer.',
  },
  title: 'A range of sentences & sentence openings - a masterclass',
  description:
    'How to use a range of sentences and sentence openings for effect and impact in iLowerSecondary English writing: simple, compound, complex and minor sentences and when each works, varied openings, short sentences for tension, the short-then-long rhythm and single-clause precision vs subordinate development (W9.3C), with original before/after rewrites and a drill task with a model answer.',
  alternates: { canonical: PAGE_URL },
}

type SentenceType = {
  name: string
  what: string
  example: string
  whenEffective: string
}

const SENTENCE_TYPES: SentenceType[] = [
  {
    name: 'Simple sentence',
    what: 'One main clause: a single subject and a single verb that makes complete sense on its own.',
    example: 'The lift jolted to a stop.',
    whenEffective:
      'Use it to land a single, clear fact or action with no clutter. A run of simple sentences in a row speeds the pace up and is ideal for a moment of sudden action or shock.',
  },
  {
    name: 'Compound sentence',
    what: 'Two main clauses of equal weight joined by a coordinating conjunction (and, but, or, so) or a semicolon.',
    example: 'The doors would not open, so I pressed every button at once.',
    whenEffective:
      'Use it to link two equally important ideas or to show a cause-and-effect or a contrast between them, without making one idea subordinate to the other.',
  },
  {
    name: 'Complex sentence',
    what: 'A main clause plus at least one subordinate clause, which adds detail but cannot stand alone.',
    example:
      'Because the alarm kept ringing, the engineer who had been called out finally arrived.',
    whenEffective:
      'Use it to develop an idea - adding cause, time, condition or description - and to control emphasis: whatever you put in the main clause is what the reader notices most.',
  },
  {
    name: 'Minor sentence',
    what: 'A deliberate fragment with no main verb, used for a controlled effect rather than by accident.',
    example: 'Silence. Then a single, distant click.',
    whenEffective:
      'Use it sparingly, for emphasis, atmosphere or a beat of tension. It only works if it is clearly a choice; used carelessly it reads as an error and the marks fall.',
  },
]

type Opener = {
  type: string
  example: string
  effect: string
}

const OPENERS: Opener[] = [
  {
    type: 'Adverb / adverbial',
    example: 'Slowly, the door swung inward.',
    effect:
      'Foregrounds how or when something happens, setting the manner or pace before the action arrives.',
  },
  {
    type: '-ing participle phrase',
    example: 'Gripping the rail, she leaned out over the drop.',
    effect:
      'Shows two actions happening together and adds movement, which keeps description active rather than static.',
  },
  {
    type: 'Prepositional phrase',
    example: 'Beyond the gate, the road simply stopped.',
    effect:
      'Places the reader in time or space first, so the main idea lands in a setting that has already been built.',
  },
  {
    type: 'Subordinate clause',
    example: 'Although no one had warned us, we should have known.',
    effect:
      'Holds the main idea back, building a small amount of suspense and signalling a relationship (contrast, cause, time) before the payoff.',
  },
  {
    type: 'Conjunction (deliberate)',
    example: 'And then, far too late, the lights came back on.',
    effect:
      'Starting with And or But is a calculated rule-break used for emphasis or a sudden turn. It is effective once; over-used it looks like a mistake.',
  },
  {
    type: 'Single noun / minor opening',
    example: 'Footsteps. Closer now, and unhurried.',
    effect:
      'Drops the reader straight into a single sharp image, creating tension by withholding the full sentence structure.',
  },
]

type Rewrite = {
  before: string
  after: string
  changes: { label: string; note: string }[]
}

const REWRITES: Rewrite[] = [
  {
    before:
      'I woke up early. I got dressed. I went downstairs. I opened the front door. Then I saw that the street was completely empty. I felt scared. I walked outside. I called out but no one answered.',
    after:
      'I woke before the alarm. Dressed in the dark, I went downstairs and opened the front door - and stopped. The street was empty. Completely empty. Although I called out twice, no one answered, and the silence pressed back at me like a hand against my chest.',
    changes: [
      {
        label: 'Simple → -ing participle opening',
        note: '“I got dressed. I went downstairs.” becomes “Dressed in the dark, I went downstairs”, which shows two actions at once and removes a repeated “I” opening.',
      },
      {
        label: 'Compound + dash for a turn',
        note: 'Two equal clauses are joined with “and” and a dash sets up “and stopped”, so the reader feels the action break off.',
      },
      {
        label: 'Short sentence + minor sentence for emphasis',
        note: '“The street was empty. Completely empty.” uses a short sentence then a deliberate minor sentence to hit the key fact twice and slow the pace.',
      },
      {
        label: 'Subordinate-clause opening',
        note: '“Although I called out twice” holds the main idea back and signals a contrast before “no one answered”.',
      },
      {
        label: 'Single-clause precision → subordinate development (W9.3C)',
        note: 'The flat “I felt scared” is cut; the fear is now shown through the developed subordinate structure “like a hand against my chest”.',
      },
    ],
  },
  {
    before:
      'The exam started. I read the first question. I did not understand it. I read it again. I still did not understand it. Then I looked at the clock. I had wasted five minutes. I started to panic. I moved on to question two.',
    after:
      'The exam started. I read the first question - and read it again, and still it made no sense. The clock had taken five minutes from me. Panic. Forcing my eyes down the page, I moved on to question two and, for the first time, breathed.',
    changes: [
      {
        label: 'Kept one simple sentence for pace',
        note: '“The exam started.” is left short on purpose: a crisp opening that drops the reader straight in.',
      },
      {
        label: 'Compound build with a dash',
        note: 'Three short repetitive clauses become one controlled compound sentence, the dash and “and still” building frustration without the listy “I… I… I…”.',
      },
      {
        label: 'Short-then-long rhythm',
        note: 'A short factual sentence (“The clock had taken five minutes from me.”) is followed by a longer one, so the rhythm varies instead of staying flat.',
      },
      {
        label: 'Minor sentence for tension',
        note: '“Panic.” is a one-word minor sentence that spikes the tension far harder than “I started to panic”.',
      },
      {
        label: '-ing participle opening + single-clause precision',
        note: '“Forcing my eyes down the page, I moved on…” opens with a participle phrase and ends on a tight single clause (“and, for the first time, breathed”) for a precise, controlled close.',
      },
    ],
  },
]

type DrillLine = { n: number; text: string }

const DRILL_LINES: DrillLine[] = [
  { n: 1, text: 'I left the house. It was raining. I forgot my umbrella.' },
  { n: 2, text: 'I waited for the bus. The bus was late. I was getting wet.' },
  { n: 3, text: 'A man stood at the stop. He did not look at me. He held a newspaper.' },
  { n: 4, text: 'The bus arrived. I got on. I sat down at the back.' },
  { n: 5, text: 'The man got on too. He sat behind me. I felt uneasy.' },
  { n: 6, text: 'The bus moved off. It was almost empty. The windows were misted.' },
  { n: 7, text: 'I wiped the glass. I saw my street go past. I did not press the bell.' },
  { n: 8, text: 'The man stood up. He walked towards me. I did not turn around.' },
  { n: 9, text: 'He passed me. He got off at the next stop. I let out a breath.' },
  { n: 10, text: 'The bus carried on. I had missed my stop. I did not mind.' },
]

const DRILL_MODEL = [
  'I left the house into rain I had not expected, my umbrella still hanging by the door.',
  'The bus was late, and standing there I felt the wet reach my collar.',
  'A man waited at the stop too. He never once looked at me; he simply held his newspaper open, unread.',
  'When the bus finally arrived I climbed on and took the back seat.',
  'The man followed. Of all the empty seats, he chose the one directly behind mine, and a small unease settled in me.',
  'We pulled away through almost-empty streets, the windows misted to a soft grey.',
  'Wiping a circle in the glass, I watched my own road slide past - and did not press the bell.',
  'Then the man stood. He began to walk towards me. I kept my eyes fixed forward.',
  'He passed without a word and stepped off at the next stop. Only then did I breathe out.',
  'The bus carried on. I had missed my stop entirely. Strangely, I did not mind at all.',
]

export default async function SentenceVarietyPage() {
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
            name: 'Writing skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/writing',
          },
          { name: 'Sentence variety', url: PAGE_URL },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {await t('ks3.page.bc.home')}
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary/writing" className="hover:text-foreground">
          {await t('ks3.page.bc.writing_skills')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.writing.sentence_variety.bc')}</span>
      </p>

      <h1>A range of sentences &amp; sentence openings &mdash; a masterclass</h1>
      <p className="lead">
        This page is a deep dive into a single writing skill bullet: &ldquo;{SENTENCE_BULLET}&rdquo;
        It sits under writing skill{' '}
        <strong>
          {SKILL_2_3.code}: {SKILL_2_3.title}
        </strong>{' '}
        and is assessed under <strong>{WAO2.code}</strong> &mdash; &ldquo;
        {WAO2.descriptor}&rdquo; The matching Year&nbsp;9 objective is <strong>{W9_3C.code}</strong>
        : &ldquo;{W9_3C.descriptor}&rdquo;
      </p>

      <section className="my-10">
        <h2>Why sentence variety earns marks</h2>
        <p>
          The {WAO2.code} mark grid does not reward long sentences or short sentences &mdash; it
          rewards <strong>control</strong>. Look at how the grid moves: from sentences that are
          merely &ldquo;grammatically sound&rdquo; with &ldquo;some complex connectives&rdquo;, up
          through an &ldquo;emerging range&rdquo;, then &ldquo;complex connectives used to develop
          sentences&rdquo;, and finally sentences that are{' '}
          <strong>&ldquo;grammatically assured and used effectively throughout&rdquo;</strong>. The
          jump to the top band is about using a range of structures <em>on purpose</em>, not about
          writing more.
        </p>
        <div className="not-prose my-6 space-y-3">
          {WAO2_GRID.map((row) => (
            <div key={row.level} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-sm font-medium">{row.level}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  {row.marks} marks
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{row.descriptors[0]}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The single sentence-level criterion above is what this page trains. Punctuation and
          spelling are the other two strands of {WAO2.code} and are covered elsewhere.
        </p>
      </section>

      <section className="my-10">
        <h2>The four sentence types &mdash; and when each works</h2>
        <p>
          You cannot vary sentences if you only have one kind. These are the four building blocks.
          The column that earns marks is the last one &mdash;{' '}
          <strong>when the type is effective</strong>, because that is the &ldquo;for effect and
          impact&rdquo; part of the skill.
        </p>
        <div className="not-prose my-6 space-y-3">
          {SENTENCE_TYPES.map((t) => (
            <div key={t.name} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium mb-2">{t.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">What it is: </span>
                {t.what}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">Example: </span>
                <span className="italic">{t.example}</span>
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">When it is effective: </span>
                {t.whenEffective}
              </p>
            </div>
          ))}
        </div>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Short sentences, the short-then-long rhythm, and tension
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A <strong>short sentence</strong> after several longer ones acts like a full stop on the
            whole paragraph: the reader is forced to slow down and the short sentence carries weight
            it would not have on its own. This is the <strong>short-then-long rhythm</strong>: build
            an idea across a longer sentence, then snap it shut with a short one &mdash; or open
            with a short hook and follow with a developed sentence that explains it. Used at a
            moment of fear or surprise, a cluster of short sentences raises tension because the pace
            quickens and the reader has less to hold onto. The skill is not &ldquo;use short
            sentences&rdquo; &mdash; it is <strong>placing</strong> them where the rhythm change
            does work.
          </p>
        </div>
      </section>

      <section className="my-10">
        <h2>Varied sentence openings</h2>
        <p>
          The fastest way to spot weak writing is that every sentence opens the same way &mdash;
          usually with the subject (&ldquo;I&hellip;&rdquo;, &ldquo;The&hellip;&rdquo;,
          &ldquo;He&hellip;&rdquo;). Changing where a sentence <em>starts</em> changes what the
          reader notices first. Each opening below is a deliberate tool, not decoration.
        </p>
        <div className="not-prose my-6 space-y-3">
          {OPENERS.map((o) => (
            <div key={o.type} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium mb-2">{o.type}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Example: </span>
                <span className="italic">{o.example}</span>
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">Effect: </span>
                {o.effect}
              </p>
            </div>
          ))}
        </div>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Single-clause precision vs subordinate development ({W9_3C.code})
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {W9_3C.code} asks for two opposite skills. A{' '}
            <strong>tight single-clause sentence</strong> is precise: it states one thing and stops,
            so nothing dilutes it &mdash; ideal for a key fact or a hard final beat. A{' '}
            <strong>subordinate structure</strong> develops an idea by adding cause, time, condition
            or description, so the reader gets depth and the relationship between ideas. Top-band
            writing does not pick one; it moves between them on purpose &mdash; developing where the
            idea needs room, then cutting to a single clause where impact matters more than detail.
          </p>
        </div>
      </section>

      <section className="my-10">
        <h2>
          Before &amp; after: turning &ldquo;I did&hellip; then I&hellip;&rdquo; into controlled
          writing
        </h2>
        <p>
          The two passages below are <strong>original, written for this page</strong>. Each
          &ldquo;before&rdquo; is the monotonous subject-first, simple-sentence style; each
          &ldquo;after&rdquo; is the same content rewritten with a controlled range of sentences and
          openings. Every change is labelled so you can see exactly what was done and why.
        </p>
        {REWRITES.map((r, i) => (
          <div key={i} className="my-8">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              Rewrite {i + 1}
            </p>
            <div className="not-prose my-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                  Before
                </p>
                <p className="text-sm text-foreground leading-relaxed">{r.before}</p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary mb-2">
                  After
                </p>
                <p className="text-sm text-foreground leading-relaxed">{r.after}</p>
              </div>
            </div>
            <ol className="not-prose my-4 space-y-3">
              {r.changes.map((c) => (
                <li key={c.label} className="rounded-xl border border-border/60 bg-card p-4">
                  <p className="text-sm font-medium">
                    <span className="font-mono text-primary mr-2">&rarr;</span>
                    {c.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{c.note}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <section className="my-10">
        <h2>Sentence-opener bank</h2>
        <p>
          Keep this bank in your head for the exam. When you notice two sentences in a row starting
          the same way, reach for a different opener from this list and rebuild the second sentence
          around it.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {OPENERS.map((o) => (
            <div key={o.type} className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {o.type}
              </p>
              <p className="text-sm text-foreground leading-relaxed italic">{o.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Drill task: rewrite ten monotonous lines</h2>
        <p>
          Below are <strong>ten original lines</strong> written in the flat &ldquo;I did&hellip;
          then I&hellip;&rdquo; style. Rewrite all ten so the passage uses a controlled range of
          sentence types and openings: at least one minor sentence, one subordinate-clause opening,
          one participle opening, and one deliberate short sentence for tension. Then check your
          version against the model.
        </p>
        <div className="not-prose my-6 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
            The task lines
          </p>
          <ol className="space-y-2">
            {DRILL_LINES.map((l) => (
              <li key={l.n} className="flex gap-3 text-sm text-foreground leading-relaxed">
                <span className="font-mono text-primary">{l.n}.</span>
                <span>{l.text}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
            Model answer
          </p>
          <div className="space-y-2">
            {DRILL_MODEL.map((line, i) => (
              <p key={i} className="text-sm text-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-4 border-t border-border/60 pt-3">
            <span className="font-medium text-foreground">
              Why this would sit in the top band:{' '}
            </span>
            sentence types are mixed on purpose (a one-word build &mdash; &ldquo;Then the man
            stood.&rdquo; &mdash; against developed complex sentences); openings are varied
            (participle &ldquo;Wiping a circle&hellip;&rdquo;, subordinate &ldquo;When the bus
            finally arrived&hellip;&rdquo;, prepositional &ldquo;Of all the empty
            seats&hellip;&rdquo;); a deliberate short sentence &ldquo;The man followed.&rdquo;
            spikes the tension; and the writing moves between single-clause precision and
            subordinate development rather than staying flat. That is &ldquo;grammatically assured
            and used effectively throughout&rdquo;.
          </p>
        </div>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
