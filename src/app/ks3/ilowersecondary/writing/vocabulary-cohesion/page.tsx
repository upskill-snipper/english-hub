import type { Metadata } from 'next'
import Link from 'next/link'
import {
  WRITING_SKILLS,
  WAO1_GRID,
  YEAR9_CODES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: vocabulary & cohesion masterclass — The English Hub',
    description:
      'Choose the exact word, vary synonyms without thesaurus-abuse, match register to your reader, and bind paragraphs with cohesion devices. Upgrade tables, a labelled rewrite and a 15-word challenge.',
  },
  title: 'Vocabulary & cohesion: precision, synonyms and register',
  description:
    'A plain-English masterclass on selecting vocabulary for clarity and impact and using synonyms for cohesion — with original upgrade tables, a labelled rewrite, a thesaurus-trap warning and an upgrade challenge.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/writing/vocabulary-cohesion',
  },
}

const SITE = 'https://theenglishhub.app'

/* ─── Skill anchors (labels only — never restate spec numbers inline) ─── */

const skill23 = WRITING_SKILLS.find((s) => s.code === '2.3') as
  | (typeof WRITING_SKILLS)[number]
  | undefined

const w93g = YEAR9_CODES.find((c) => c.code === 'W9.3G') as (typeof YEAR9_CODES)[number] | undefined

// The two strand bullets this page teaches, quoted from the canonical
// content skill so wording stays in sync with the specification.
const synonymBullet = skill23?.bullets.find((b) => b.toLowerCase().includes('synonyms'))
const vocabBullet = skill23?.bullets.find((b) => b.toLowerCase().includes('range of vocabulary'))

const topBand = WAO1_GRID[WAO1_GRID.length - 1]

/* ─── Original upgrade tables: weak word → 3 precise alternatives ─────── */

type Upgrade = {
  weak: string
  context: string
  options: { word: string; nuance: string }[]
}

const UPGRADES: Upgrade[] = [
  {
    weak: 'said',
    context: 'a character speaking in a tense moment',
    options: [
      {
        word: 'murmured',
        nuance: 'low and barely audible — signals secrecy or exhaustion, not volume.',
      },
      {
        word: 'insisted',
        nuance: 'repetition under pressure — implies the listener has resisted before.',
      },
      {
        word: 'conceded',
        nuance: 'agreement given reluctantly — carries the loss of an argument inside one verb.',
      },
    ],
  },
  {
    weak: 'big',
    context: 'describing the scale of a problem',
    options: [
      {
        word: 'substantial',
        nuance: 'measurable and serious — neutral, suited to a report or formal letter.',
      },
      {
        word: 'sprawling',
        nuance: 'large and spreading without order — adds the idea of being unmanaged.',
      },
      {
        word: 'colossal',
        nuance: 'overwhelmingly large — emphatic, better for persuasion than for analysis.',
      },
    ],
  },
  {
    weak: 'walked',
    context: 'a figure crossing an empty street',
    options: [
      {
        word: 'trudged',
        nuance: 'heavy, effortful steps — implies tiredness, mud or low spirits.',
      },
      {
        word: 'strode',
        nuance: 'long, confident steps — implies purpose and energy, the opposite mood.',
      },
      {
        word: 'wandered',
        nuance: 'movement with no fixed route — suggests aimlessness or distraction.',
      },
    ],
  },
  {
    weak: 'good',
    context: 'evaluating a piece of someone else’s work',
    options: [
      {
        word: 'thorough',
        nuance: 'praises completeness — nothing has been left out or skimped.',
      },
      {
        word: 'inventive',
        nuance: 'praises originality — the ideas, not the effort, are what impress.',
      },
      {
        word: 'dependable',
        nuance: 'praises consistency — quietly reliable rather than brilliant once.',
      },
    ],
  },
  {
    weak: 'bad',
    context: 'reporting the effect of a decision',
    options: [
      {
        word: 'harmful',
        nuance: 'states real damage — factual, fits an explanatory tone.',
      },
      {
        word: 'reckless',
        nuance: 'blames the lack of care behind the decision, not just its result.',
      },
      {
        word: 'counter-productive',
        nuance:
          'precise: it did the opposite of what was intended, a sharper criticism than “bad”.',
      },
    ],
  },
  {
    weak: 'happy',
    context: 'a character’s reaction to good news',
    options: [
      {
        word: 'relieved',
        nuance: 'happiness that follows worry — implies a fear has just lifted.',
      },
      {
        word: 'elated',
        nuance: 'intense, almost giddy joy — short-lived and overwhelming.',
      },
      {
        word: 'content',
        nuance:
          'quiet, settled satisfaction — calm rather than excited, a different feeling entirely.',
      },
    ],
  },
]

/* ─── Cohesion devices ───────────────────────────────────────────────── */

type Device = {
  name: string
  what: string
  example: string
}

const DEVICES: Device[] = [
  {
    name: 'Referencing',
    what: 'A pronoun or determiner points back to something already named, so you do not repeat the noun.',
    example:
      'The committee rejected the plan. They argued it would cost too much. — “They” and “it” carry the earlier nouns forward.',
  },
  {
    name: 'Substitution',
    what: 'A short word stands in for a longer phrase already used, keeping the sentence light.',
    example: 'My first idea failed, so I tried a different one. — “one” substitutes for “idea”.',
  },
  {
    name: 'Lexical chains',
    what: 'A run of related words keeps a topic alive across a paragraph without repeating a single term.',
    example:
      'The harbour was silent: no gulls, no engines, no voices — only the slap of water on stone. — “gulls / engines / voices / water” chain the idea of sound.',
  },
  {
    name: 'Connectives',
    what: 'A linking word signals the logical relationship between sentences, so the reader is never guessing.',
    example:
      'The repairs were expensive. Nevertheless, the bridge reopened on time. — “Nevertheless” marks a contrast the reader would otherwise have to infer.',
  },
]

/* ─── 15-word upgrade challenge ──────────────────────────────────────── */

type Challenge = {
  n: number
  weak: string
  model: string
}

const CHALLENGE: Challenge[] = [
  { n: 1, weak: 'a nice day', model: 'a still, bright morning' },
  { n: 2, weak: 'very big', model: 'towering' },
  { n: 3, weak: 'got worse', model: 'deteriorated' },
  { n: 4, weak: 'looked at', model: 'studied' },
  { n: 5, weak: 'a lot of people', model: 'a crowd' },
  { n: 6, weak: 'really good', model: 'outstanding' },
  { n: 7, weak: 'a bad smell', model: 'a sour, lingering reek' },
  { n: 8, weak: 'said sorry', model: 'apologised' },
  { n: 9, weak: 'thought about', model: 'considered' },
  { n: 10, weak: 'made smaller', model: 'reduced' },
  { n: 11, weak: 'walked slowly', model: 'ambled' },
  { n: 12, weak: 'a small change', model: 'a slight adjustment' },
  { n: 13, weak: 'very tired', model: 'exhausted' },
  { n: 14, weak: 'in the end', model: 'eventually' },
  { n: 15, weak: 'because of this', model: 'consequently' },
]

export default function VocabularyCohesionPage() {
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
            name: 'Writing skills',
            url: `${SITE}/ks3/ilowersecondary/writing`,
          },
          {
            name: 'Vocabulary & cohesion',
            url: `${SITE}/ks3/ilowersecondary/writing/vocabulary-cohesion`,
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
        <span>Writing skills</span>
        <span> · </span>
        <span>Vocabulary &amp; cohesion</span>
      </p>

      <h1>Vocabulary &amp; cohesion: the exact word, well joined</h1>
      <p className="lead">
        Strong writing is not writing that uses big words. It is writing where every word is the{' '}
        <em>right</em> word and where sentences hold together so the reader never has to work out
        what links them. This masterclass covers four habits: choosing the precise word over the
        vague one, varying synonyms without abusing a thesaurus, matching register to the reader,
        and binding paragraphs with cohesion devices.
      </p>

      {synonymBullet && vocabBullet ? (
        <p className="text-sm text-muted-foreground">
          It develops two strands of the iLowerSecondary writing content —{' '}
          <em>{synonymBullet.replace(/\.$/, '')}</em> and <em>{vocabBullet.replace(/\.$/, '')}</em>
          {w93g ? (
            <>
              {' '}
              — and the Year 9 objective <span className="font-mono">{w93g.code}</span>:{' '}
              {w93g.descriptor.charAt(0).toLowerCase() + w93g.descriptor.slice(1)}
            </>
          ) : null}
        </p>
      ) : null}

      <section className="my-10">
        <h2>1. Precision: the exact word beats the vague one</h2>
        <p>
          A vague word makes the reader do your work. &ldquo;The situation was bad&rdquo; tells them
          almost nothing; <em>which</em> kind of bad? A precise word carries the meaning, the
          attitude and sometimes the cause all at once. Before you reach for a longer word, ask a
          sharper question: not &ldquo;what is a fancier word for this?&rdquo; but &ldquo;what
          exactly do I mean?&rdquo;
        </p>
        <p>
          Each table below takes one tired word and offers three precise replacements. They are{' '}
          <strong>not interchangeable</strong> — the nuance note explains what each one adds,
          because choosing well means knowing the difference, not just having options.
        </p>

        <div className="not-prose mt-6 space-y-6">
          {UPGRADES.map((u) => (
            <div
              key={u.weak}
              className="overflow-hidden rounded-xl border border-border/60 bg-card"
            >
              <div className="border-b border-border/60 bg-muted/40 px-5 py-3">
                <p className="text-sm">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                    Weak word
                  </span>{' '}
                  <span className="font-semibold text-primary">“{u.weak}”</span>{' '}
                  <span className="text-muted-foreground">— {u.context}</span>
                </p>
              </div>
              <ul className="divide-y divide-border/60">
                {u.options.map((o) => (
                  <li key={o.word} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
                    <span className="font-mono text-sm font-semibold text-foreground sm:w-44 sm:shrink-0">
                      {o.word}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {o.nuance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>2. Synonym variation — without thesaurus-abuse</h2>
        <p>
          Repeating the same noun five times in a paragraph is dull and can read as carelessness.
          Varying it — through a synonym, a pronoun or a related phrase — keeps the prose alive and
          is one way to achieve cohesion. But variation has a strict rule:{' '}
          <strong>only swap in a word that means what you actually mean</strong>.
        </p>

        <div className="not-prose my-6 rounded-xl border border-destructive/40 bg-destructive/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-destructive">
            ⚠ The thesaurus trap
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            A thesaurus lists words that are <em>near</em> a meaning, not words that are{' '}
            <em>equal</em> to it. Reaching for the longest synonym to sound clever almost always
            backfires: it loses the exact sense, shifts the register, or produces a phrase no one
            would ever say.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="text-foreground">Meant:</span> &ldquo;She was <em>sad</em> when the
              team lost.&rdquo; → <span className="text-foreground">Trap:</span> &ldquo;She was{' '}
              <em>lugubrious</em> when the team lost.&rdquo; — technically a synonym, but absurdly
              formal for the moment.
            </li>
            <li>
              <span className="text-foreground">Meant:</span> &ldquo;a <em>quick</em> reply&rdquo; →{' '}
              <span className="text-foreground">Trap:</span> &ldquo;an <em>expeditious</em>{' '}
              reply&rdquo; — correct in a dictionary, wrong in a friendly email.
            </li>
            <li>
              <span className="text-foreground">Meant:</span> &ldquo;He <em>used</em> the
              tool.&rdquo; → <span className="text-foreground">Trap:</span> &ldquo;He{' '}
              <em>utilised</em> the tool.&rdquo; — longer, not clearer; plain &ldquo;used&rdquo; is
              the better choice.
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed">
            <strong>The test:</strong> if you would not say the word aloud to explain your point to
            a friend, do not write it to impress an examiner. Reach for precision, not length.
          </p>
        </div>

        <p>
          Good variation often is <em>not</em> a synonym at all. Instead of repeating &ldquo;the
          storm&rdquo;, a strong writer might use &ldquo;it&rdquo;, &ldquo;the gale&rdquo;,
          &ldquo;the worst weather in years&rdquo;, or simply restructure so the noun is not needed.
          Variety for clarity, never variety for show.
        </p>
      </section>

      <section className="my-10">
        <h2>3. Register: match the word to the reader</h2>
        <p>
          Register is the level of formality a piece of writing keeps. The same idea is worded
          differently for different readers, and the iLowerSecondary writing tasks can address
          adults, older children or students of the same age — so the audience decides the words,
          not your largest vocabulary.
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-3">
          {[
            {
              tag: 'Formal — a letter to a manufacturer',
              line: '“I am writing to report a recurring fault and to request a replacement.”',
              note: 'Full forms, precise nouns, a measured tone.',
            },
            {
              tag: 'Neutral — an article for a general readership',
              line: '“The fault keeps coming back, and most owners want a straightforward fix.”',
              note: 'Clear and plain — neither stiff nor casual.',
            },
            {
              tag: 'Informal — a diary entry',
              line: '“It’s broken again. I just want the thing to work.”',
              note: 'Contractions and short sentences suit a private voice.',
            },
          ].map((r) => (
            <div key={r.tag} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                {r.tag}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{r.line}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          The content is identical in all three. Only the register changes — and changing it well is
          itself a vocabulary skill.
        </p>
      </section>

      <section className="my-10">
        <h2>4. Cohesion devices: how sentences hold together</h2>
        <p>
          Cohesion is the invisible wiring that makes a paragraph feel like one thought rather than
          a list. Four devices do most of the work. Each example below is original, written for this
          page.
        </p>
        <div className="not-prose mt-5 space-y-4">
          {DEVICES.map((d) => (
            <div key={d.name} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-sm font-semibold text-primary">{d.name}</p>
              <p className="mt-2 text-sm leading-relaxed">{d.what}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>A paragraph rebuilt for precision and cohesion</h2>
        <p>
          Below is a flat original paragraph, then the same paragraph rewritten. Every change is
          labelled so you can see <em>why</em> it is an improvement, not just <em>that</em> it is
          one.
        </p>

        <div className="not-prose mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              Before — flat and repetitive
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              &ldquo;The town was bad after the flood. The flood made the town bad. People were sad
              and the town was sad too. People wanted help and people did not get help. It was a bad
              time and the town was a bad place to be.&rdquo;
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              &ldquo;Bad&rdquo;, &ldquo;town&rdquo;, &ldquo;people&rdquo; and &ldquo;sad&rdquo;
              repeat with no variation; sentences list rather than connect; nothing is precise.
            </p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary">
              After — precise and cohesive
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              &ldquo;The flood left the town <strong>devastated</strong>. Streets that had been busy
              were now
              <strong> deserted</strong>, and the families who remained <strong>waited</strong> for
              an aid convoy that <strong>never came</strong>. <strong>Their</strong> patience
              hardened slowly into anger. <strong>It</strong> was, by any measure, the worst week
              the place had known.&rdquo;
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              See the labelled changes below.
            </p>
          </div>
        </div>

        <div className="not-prose mt-4 overflow-hidden rounded-xl border border-border/60 bg-card">
          <ul className="divide-y divide-border/60 text-sm">
            {[
              {
                change: '“bad” → “devastated”',
                why: 'Precision: one word states the scale and the cause instead of a vague judgement.',
              },
              {
                change: '“town … town … town” → “the town”, “Streets”, “the place”',
                why: 'Synonym/lexical variation: the topic stays alive without repeating one noun.',
              },
              {
                change: '“people … people … people” → “the families who remained”, “Their”',
                why: 'Referencing: a pronoun carries the noun forward, removing repetition.',
              },
              {
                change:
                  '“People wanted help and people did not get help” → “waited for an aid convoy that never came”',
                why: 'Precision + economy: a concrete image replaces an abstract, repeated statement.',
              },
              {
                change: 'Added “and”, “slowly into”, “It was, by any measure,”',
                why: 'Connectives & cohesion: logical links replace a flat list, so the paragraph reads as one argument.',
              },
            ].map((row) => (
              <li key={row.change} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
                <span className="font-mono text-xs font-semibold text-foreground sm:w-72 sm:shrink-0">
                  {row.change}
                </span>
                <span className="leading-relaxed text-muted-foreground">{row.why}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-10">
        <h2>The 15-word upgrade challenge</h2>
        <p>
          Cover the right-hand column. For each weak phrase, write one precise replacement{' '}
          <em>before</em> you check the model. There is rarely a single correct answer — judge yours
          by whether it is sharper and still says exactly what was meant. Avoid the thesaurus trap:
          do not pick a word just because it is longer.
        </p>
        <div className="not-prose mt-5 overflow-hidden rounded-xl border border-border/60 bg-card">
          <div className="grid grid-cols-[2rem_1fr_1fr] gap-x-4 border-b border-border/60 bg-muted/40 px-5 py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            <span>#</span>
            <span>Weak phrase</span>
            <span>Model upgrade</span>
          </div>
          <ul className="divide-y divide-border/60">
            {CHALLENGE.map((c) => (
              <li key={c.n} className="grid grid-cols-[2rem_1fr_1fr] gap-x-4 px-5 py-2.5 text-sm">
                <span className="font-mono text-muted-foreground">{c.n}</span>
                <span className="text-muted-foreground">“{c.weak}”</span>
                <span className="font-medium text-foreground">{c.model}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Notice that several models are <em>shorter</em> than the weak phrase (&ldquo;a lot of
          people&rdquo; → &ldquo;a crowd&rdquo;). Precision often cuts words rather than adding long
          ones — exactly what the highest band rewards, where{' '}
          <em>{topBand.descriptors[2].replace(/\.$/, '').toLowerCase()}</em>.
        </p>
      </section>

      <section className="my-10">
        <h2>Using this page</h2>
        <p>
          When you redraft, run two passes. First a <strong>precision pass</strong>: hunt for
          &ldquo;bad&rdquo;, &ldquo;good&rdquo;, &ldquo;nice&rdquo;, &ldquo;big&rdquo;,
          &ldquo;said&rdquo;, &ldquo;got&rdquo;, &ldquo;thing&rdquo; and ask what you really mean.
          Then a <strong>cohesion pass</strong>: check that each sentence is wired to the one before
          it by a reference, a substitution, a lexical chain or a connective. Precision then
          cohesion, every time.
        </p>
      </section>

      <footer className="mt-12 border-t border-border/60 pt-6">
        <p className="text-xs leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Every example sentence, upgrade word, rewrite and challenge item on this page is an
          original work written by The English Hub for the purpose of instruction and is not
          reproduced from any past paper or set text.
        </p>
      </footer>
    </>
  )
}
