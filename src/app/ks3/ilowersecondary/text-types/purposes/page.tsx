import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  NON_FICTION_PURPOSES,
  NON_FICTION_TEXT_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types/purposes'

const RAO5 = ASSESSMENT_OBJECTIVES.RAO5

export const metadata: Metadata = {
  openGraph: {
    title: 'The five non-fiction purposes - argue, describe, explain, inform, persuade',
    description:
      'The hub guide to the five iLowerSecondary non-fiction purposes. Definitions, tell-tale language and structure, original examples, a purpose-detective decision tree, and a 12-item self-test with answers.',
  },
  title: 'The five non-fiction purposes - argue, describe, explain, inform, persuade',
  description:
    'The hub guide to the five iLowerSecondary non-fiction purposes. Definitions, tell-tale language and structure, original examples, a purpose-detective decision tree, and a 12-item self-test with answers.',
  alternates: { canonical: PAGE_URL },
}

// ── One profile per NON_FICTION_PURPOSES value ─────────────────────────
type Purpose = (typeof NON_FICTION_PURPOSES)[number]

const PROFILES: Record<
  Purpose,
  {
    oneLiner: string
    definition: string
    language: string[]
    structure: string[]
    example: string
    exampleNote: string
  }
> = {
  argue: {
    oneLiner: 'Win the reader round to one side of a debate.',
    definition:
      'A text written to argue takes a clear position on a question that has two sides and builds a reasoned case for it. Unlike persuade, which targets feelings, argue leans on logic, evidence and the orderly defeat of the opposing view.',
    language: [
      'Discourse markers that build a case: "firstly", "moreover", "consequently", "therefore"',
      'Assertive claims: "It is undeniable that…", "The evidence clearly shows…"',
      'Concede-then-rebut moves: "Some claim X. However, this overlooks…"',
      'Evidence and reasoning rather than purely emotive vocabulary',
    ],
    structure: [
      'A stated thesis near the opening',
      'One reason per paragraph, each developed with evidence',
      'A counter-argument raised, then knocked down',
      'A firm restatement of the position at the end',
    ],
    example:
      'Some say homework teaches discipline. However, the evidence points the other way: pupils who read for pleasure each evening outperform those drilled with worksheets. Therefore, schools should replace nightly homework with a single reading habit - the gain is real and the cost is nothing.',
    exampleNote:
      'Notice the concede ("Some say…"), the rebuttal connective ("However…"), and the logical close ("Therefore…"). The case is built, not merely felt.',
  },
  describe: {
    oneLiner: 'Build a vivid picture the reader can almost see.',
    definition:
      'A text written to describe recreates a place, person or moment so precisely that the reader can imagine it. It prizes atmosphere and sensory texture over facts, instructions or arguments.',
    language: [
      'Sensory imagery - sight, sound, smell, touch, taste',
      'Expanded noun phrases: "a low, copper-coloured winter sun"',
      'Similes and metaphors that make the unfamiliar vivid',
      'Carefully chosen adjectives and adverbs for mood',
    ],
    structure: [
      'A slowed pace; little new information, much texture',
      'Movement through space or the senses, not through time',
      'A controlling mood that holds the whole piece together',
      'Often a still, settled ending rather than a resolution',
    ],
    example:
      'The harbour lay under a low, copper-coloured sun. Salt and tar hung in the cold air, and the only sound was the slow knock of a loose rope against a mast. Nothing moved; the boats sat as still as photographs of themselves.',
    exampleNote:
      'No facts to memorise and nothing to do - only a scene you could draw. Expanded noun phrases and the simile carry the mood.',
  },
  explain: {
    oneLiner: 'Make a process or reason clear - answer "how?" or "why?"',
    definition:
      'A text written to explain helps the reader understand how something works or why something happens. It is close to inform, but it does more than list facts: it links them into a chain of cause and effect.',
    language: [
      'Causal connectives: "because", "so that", "as a result", "this leads to"',
      'Sequencing language: "first", "then", "next", "finally"',
      'Defining phrases: "this means that…", "in other words…"',
      'A calm, neutral tone that assumes the reader does not yet understand',
    ],
    structure: [
      'A logical, step-by-step sequence',
      'Cause linked clearly to effect at each stage',
      'A general statement followed by the detail behind it',
      'Often a closing summary of the whole process',
    ],
    example:
      'Bread rises because yeast feeds on the sugars in the dough. As it feeds, it releases carbon dioxide, which is trapped by the stretchy gluten. This is why a well-kneaded loaf swells in the oven while a poorly mixed one stays flat.',
    exampleNote:
      'The causal connectives ("because", "as a result", "this is why") turn a set of facts into an understood process.',
  },
  inform: {
    oneLiner: 'Give the reader accurate facts about a subject.',
    definition:
      'A text written to inform delivers clear, accurate facts so the reader knows more than before. It stays neutral and impersonal: opinion and emotion are kept out of the way.',
    language: [
      'Facts, dates, figures and named sources',
      'Impersonal, third-person voice; the writer stays hidden',
      'Mostly present tense for general truths',
      'Few opinion or emotive words',
    ],
    structure: [
      'Clear topic sentences and short, focused paragraphs',
      'Sub-headings, captions or figures to organise content',
      'Most important information first',
      'No call to action and no argument',
    ],
    example:
      'The town library is open from nine until six on weekdays and from ten until two on Saturdays. It holds about forty thousand titles and offers free internet access on twelve computers. Membership is open to all residents and is renewed each year.',
    exampleNote:
      'Strip out any single sentence and the rest still stands: these are checkable facts, neutrally given.',
  },
  persuade: {
    oneLiner: 'Move the reader towards an action, choice or feeling.',
    definition:
      'A text written to persuade is designed to change what the reader does, chooses or feels. It targets emotion as much as reason and presents the most flattering case rather than the full picture.',
    language: [
      'Direct address: "you", "imagine", "join us"',
      'Emotive vocabulary and rhetorical questions',
      'Tripling and repetition for rhythm and emphasis',
      'Selective statistics chosen to flatter one side',
    ],
    structure: [
      'A hook that grabs the reader at once',
      'Emotional build through the middle',
      'Selective evidence - the best case, not the whole one',
      'A memorable call to action at the close',
    ],
    example:
      'Imagine never wasting a wet lunchtime again. Nine out of ten members say the new club changed their week - and it could change yours. One hour. One small step. Sign up today, before the last places are gone.',
    exampleNote:
      'Direct address ("you", "imagine"), a flattering statistic, tripling ("One hour. One small step.") and a closing call to action all aim at the reader, not just the facts.',
  },
}

// ── Why purpose powers RAO5 answers ────────────────────────────────────
const RAO5_LINKS = [
  {
    heading: 'It unlocks the "what did the writer mean?" question',
    body: 'Once you have named the purpose, the writer\'s choices stop being random. A loaded word in a persuasive text is there to make you feel something; the same word in an informative text would be a slip. Naming the purpose gives you the "why" the mark scheme rewards.',
  },
  {
    heading: 'It frames the effect on the reader',
    body: 'RAO5 credits the effect on the reader. That effect is always relative to purpose: a persuasive text aims to move you to act, an informative one to leave you better informed. State the effect in terms of the purpose and the second mark follows.',
  },
  {
    heading: 'It anchors viewpoint and the comparison question',
    body: "A one-sided selection of evidence signals a persuasive or argumentative purpose and a strong viewpoint. In the extended comparison item, contrasting two writers' purposes is one of the surest routes into the top level.",
  },
  {
    heading: 'It stops you mislabelling tone',
    body: 'Readers often call a calm explanation "boring" or a vivid description "biased". Knowing the purpose tells you what the tone is meant to do, so you can describe the overall effect precisely instead of guessing.',
  },
]

// ── Purpose-detective decision tree ────────────────────────────────────
const TREE = [
  {
    q: 'Q1 - Is the writer trying to change what you do, think or feel?',
    yes: 'Go to Q2.',
    no: 'Go to Q4 (the text mainly delivers content, not a stance).',
  },
  {
    q: 'Q2 - Is the case built mainly with reasoning and a defeated counter-argument?',
    yes: 'PURPOSE: ARGUE - logic-led, concede-then-rebut, discourse markers.',
    no: 'Go to Q3.',
  },
  {
    q: 'Q3 - Does it lean on emotion, direct address and a call to action?',
    yes: 'PURPOSE: PERSUADE - "you", emotive words, tripling, "sign up today".',
    no: 'Treat as ARGUE if a clear thesis is still being defended.',
  },
  {
    q: 'Q4 - Could you draw the scene, with mood mattering more than facts?',
    yes: 'PURPOSE: DESCRIBE - sensory imagery, expanded noun phrases.',
    no: 'Go to Q5.',
  },
  {
    q: 'Q5 - Are facts linked by cause and effect so you understand how/why?',
    yes: 'PURPOSE: EXPLAIN - "because", "as a result", logical sequence.',
    no: 'PURPOSE: INFORM - neutral, impersonal, checkable facts only.',
  },
]

// ── 12-item self-test (all snippets 100% original) ─────────────────────
const SELF_TEST: { id: number; snippet: string; answer: Purpose; why: string }[] = [
  {
    id: 1,
    snippet:
      'The museum opened in 1974 and welcomes around two hundred thousand visitors a year. Entry is free; the café closes at half past four.',
    answer: 'inform',
    why: 'Neutral, impersonal, checkable facts; no stance and no call to action.',
  },
  {
    id: 2,
    snippet:
      "Picture the moment the lights go down and the whole hall holds its breath. You could be there on Friday - don't miss it.",
    answer: 'persuade',
    why: 'Direct address ("you"), an emotive hook and a closing call to action.',
  },
  {
    id: 3,
    snippet:
      'Ice forms because water expands as it cools below four degrees, so the lighter, colder water rises and freezes from the top down.',
    answer: 'explain',
    why: 'Causal connectives ("because", "so") link facts into a why-chain.',
  },
  {
    id: 4,
    snippet:
      'The kitchen smelled of warm cinnamon and old wood. Light pooled on the worn red tiles, and somewhere a kettle began its low, patient hum.',
    answer: 'describe',
    why: 'Sensory imagery and expanded noun phrases build mood, not facts.',
  },
  {
    id: 5,
    snippet:
      'Some insist longer school days raise results. However, tired pupils learn less, not more; therefore the school day should stay as it is.',
    answer: 'argue',
    why: 'Concede ("Some insist…"), rebut ("However…"), conclude ("therefore").',
  },
  {
    id: 6,
    snippet:
      'The river rises in the hills, falls eighty metres over three waterfalls, and reaches the sea after ninety kilometres.',
    answer: 'inform',
    why: 'A run of plain, verifiable facts with no opinion or persuasion.',
  },
  {
    id: 7,
    snippet:
      'Engines stall when the fuel filter clogs, because the pump can no longer draw enough petrol, which starves the cylinders of fuel.',
    answer: 'explain',
    why: 'Cause-and-effect language makes a process understood, not just listed.',
  },
  {
    id: 8,
    snippet:
      'Join us. Give one hour. Change a life. Every volunteer we lose is a child left waiting - surely you would not turn away?',
    answer: 'persuade',
    why: 'Tripling, emotive appeal, rhetorical question and a call to act.',
  },
  {
    id: 9,
    snippet:
      'The fog came off the marsh in slow grey ropes and swallowed the fence-posts one by one, until the field was just a rumour.',
    answer: 'describe',
    why: 'Metaphor and sensory detail recreate a scene; mood over information.',
  },
  {
    id: 10,
    snippet:
      'It is often said that zoos protect endangered species. Yet most cannot release animals into the wild; consequently the claim does not hold.',
    answer: 'argue',
    why: 'A stated counter-claim is raised and logically defeated.',
  },
  {
    id: 11,
    snippet:
      'Bees communicate by dancing: a returning bee waggles in a figure of eight, and the angle of the dance tells the hive where the flowers are.',
    answer: 'explain',
    why: 'The colon and "tells" link facts so the reader understands how it works.',
  },
  {
    id: 12,
    snippet:
      'The festival runs from the third to the seventh of July. Tickets cost twelve pounds for adults and are half price for under-sixteens.',
    answer: 'inform',
    why: 'Dates and prices delivered impersonally; nothing is being argued or sold.',
  },
]

export default async function PurposesPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Text types',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Purposes', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          Text types
        </Link>
        <span> · </span>
        <span>Purposes</span>
      </p>

      <h1>The five non-fiction purposes</h1>
      <p className="lead">
        Every non-fiction text in the reading paper is written to do one main job. Name that job -
        the writer&rsquo;s <em>purpose</em> - and the rest of the text starts to make sense. This
        hub covers all five purposes assessed at iLowerSecondary, the language and structure that
        give each one away, and how naming the purpose powers your {RAO5.code} answers. There is a
        purpose-detective decision tree and a 12-question self-test at the end.
      </p>

      {/* ── The five at a glance ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>The five purposes at a glance</h2>
        <p className="text-sm text-muted-foreground">
          You will meet these across the non-fiction text types in Section A - biography, blogs,
          journals, leaflets, articles, instructions, recounts and reports. Most real texts mix
          purposes; your job is to name the <em>dominant</em> one.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {NON_FICTION_PURPOSES.map((p) => (
            <div key={p} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary mb-1">
                To {p}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {PROFILES[p].oneLiner}
              </p>
            </div>
          ))}
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1">
              Where they appear
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Across all {NON_FICTION_TEXT_TYPES.length} non-fiction text types:{' '}
              {NON_FICTION_TEXT_TYPES.join(', ')}.
            </p>
          </div>
        </div>
      </section>

      {/* ── Full profile per purpose ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Each purpose in detail</h2>
        <p className="text-sm text-muted-foreground">
          For each purpose: a clear definition, the tell-tale language and structure, and a short
          original example. Every example below is an original work written for this page.
        </p>
        <div className="not-prose mt-4 space-y-4">
          {NON_FICTION_PURPOSES.map((p) => {
            const g = PROFILES[p]
            return (
              <article key={p} className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="text-base font-semibold text-foreground capitalize">To {p}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{g.definition}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Tell-tale language
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {g.language.map((l) => (
                        <li key={l} className="flex gap-2">
                          <span className="text-primary" aria-hidden>
                            ·
                          </span>
                          <span className="leading-relaxed">{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Tell-tale structure
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {g.structure.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="text-primary" aria-hidden>
                            ·
                          </span>
                          <span className="leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-border/60 bg-background p-4">
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                    Original example
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{g.example}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      Why this signals &ldquo;{p}&rdquo;:{' '}
                    </span>
                    {g.exampleNote}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ── How purpose powers RAO5 ───────────────────────────────────── */}
      <section className="my-10">
        <h2>How identifying purpose powers {RAO5.code} answers</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {RAO5.code} asks you to {RAO5.descriptor.toLowerCase()} It is among the most heavily
          weighted reading objectives on the paper. Naming the purpose first is the fastest way into
          the marks it carries.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {RAO5_LINKS.map((r) => (
            <div key={r.heading} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-semibold text-foreground">{r.heading}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Purpose detective decision tree ───────────────────────────── */}
      <section className="my-10">
        <div className="not-prose rounded-xl border border-primary/40 bg-primary/5 p-6">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary mb-1">
            Decision tree
          </p>
          <h2 className="text-xl font-semibold text-foreground mb-2">The purpose detective</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Run any unseen non-fiction text through these questions in order. Stop the moment a
            purpose is named.
          </p>
          <ol className="space-y-3">
            {TREE.map((t, i) => (
              <li key={t.q} className="flex gap-3">
                <span className="font-mono text-xs text-primary mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold text-foreground">{t.q}</p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-foreground">Yes → </span>
                    {t.yes}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">No → </span>
                    {t.no}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Self-test ─────────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Self-test - name the purpose</h2>
        <p className="text-sm text-muted-foreground">
          Read each original snippet and decide its dominant purpose before checking the answer. All
          twelve snippets are original works written for this page.
        </p>
        <div className="not-prose mt-4 space-y-3">
          {SELF_TEST.map((q) => (
            <details key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              <summary className="cursor-pointer text-sm text-foreground leading-relaxed">
                <span className="font-mono text-xs text-primary mr-2">
                  {String(q.id).padStart(2, '0')}
                </span>
                &ldquo;{q.snippet}&rdquo;
              </summary>
              <p className="mt-3 text-sm text-foreground">
                <span className="font-semibold">Purpose: </span>
                <span className="capitalize">{q.answer}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Why: </span>
                {q.why}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Ten or more correct and you can name a purpose reliably under exam conditions. Anything
          lower, re-read the &ldquo;tell-tale&rdquo; lists above - the language and structure are
          the evidence the mark scheme expects you to point to.
        </p>
      </section>

      {/* ── Fair-dealing footer ───────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
