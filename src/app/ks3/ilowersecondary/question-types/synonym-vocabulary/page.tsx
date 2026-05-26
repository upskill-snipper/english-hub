import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUESTION_TYPES, ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  title: 'Synonyms & vocabulary-in-context - question-type masterclass',
  description:
    'How to answer "circle the synonym", "underline the closest meaning" and "this word means…" questions on the Pearson Edexcel iLowerSecondary English achievement test: read in context, eliminate distractors, and weigh connotation. 20+ original graded practice items with answers and rationales.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/question-types/synonym-vocabulary',
  },
  openGraph: {
    title:
      'Synonyms & vocabulary-in-context - iLowerSecondary English question-type masterclass - The English Hub',
    description:
      'Master synonym and vocabulary-in-context questions: read the word in context, eliminate distractors, weigh connotation. 20+ original graded practice items with answers.',
  },
}

// ─── Synonym-select and MCQ question-type facts (from spec) ────────────
const SYNONYM_SELECT = QUESTION_TYPES.find((q) => q.id === 'synonym-select')!
const MULTIPLE_CHOICE = QUESTION_TYPES.find((q) => q.id === 'multiple-choice')!
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4

// ─── Strategy steps ───────────────────────────────────────────────────
const STRATEGY: { step: string; detail: string }[] = [
  {
    step: 'Read the whole sentence first',
    detail:
      'Never judge the target word on its own. A word can mean different things in different sentences, so the sentence around it tells you which meaning is in play.',
  },
  {
    step: 'Predict before you look',
    detail:
      'Cover the four options. Say a word of your own that would fit the gap if the target word were removed. Then find the option closest to your prediction.',
  },
  {
    step: 'Substitute each option back in',
    detail:
      'Read the sentence four times, once with each option swapped in. The correct answer leaves the meaning unchanged; a wrong one makes the sentence say something different.',
  },
  {
    step: 'Weigh the connotation',
    detail:
      'Two options can share a dictionary meaning but feel different. A word can be positive, negative or neutral; pick the one whose feeling matches the sentence.',
  },
  {
    step: 'Eliminate, then commit to one',
    detail:
      'Cross out options you can prove wrong until one remains. Mark a single answer only - selecting more than one scores nothing.',
  },
]

// ─── Tricky-distractor worked examples ────────────────────────────────
const TRICKY: {
  sentence: string
  target: string
  trap: string
  answer: string
  why: string
}[] = [
  {
    sentence: 'The old bridge looked fragile, so the council closed it before winter.',
    target: 'fragile',
    trap: 'A reader who knows the bridge is old may pick "ancient", because old things are often ancient.',
    answer: 'delicate',
    why: '"Ancient" describes age, but the sentence is about the bridge being easily broken - "delicate" keeps that meaning.',
  },
  {
    sentence: 'She gave a modest smile and refused to talk about the prize she had won.',
    target: 'modest',
    trap: '"Modest" can mean "small" or "not boastful". The smile being small is tempting, but the second half of the sentence is the clue.',
    answer: 'humble',
    why: 'Because she refuses to talk about her own prize, "modest" here means not boastful - "humble" - not small.',
  },
  {
    sentence: 'The detective gave the witness a keen look before asking the next question.',
    target: 'keen',
    trap: '"Keen" often means "very interested" or "eager", so "enthusiastic" looks right.',
    answer: 'sharp',
    why: 'A "keen look" is a sharp, searching look, not an eager feeling - "sharp" fits the action of studying the witness.',
  },
  {
    sentence: 'After the storm the sailors were spent and could barely lift the ropes.',
    target: 'spent',
    trap: '"Spent" makes readers think of money that has been used up, so "paid" seems linked.',
    answer: 'exhausted',
    why: 'Here "spent" describes the sailors, not money - they can barely move, so it means "exhausted".',
  },
  {
    sentence: 'The teacher chose her words carefully so the news would not appear harsh.',
    target: 'harsh',
    trap: '"Loud" is tempting because a harsh voice can be loud, and the sentence mentions words.',
    answer: 'cruel',
    why: 'The teacher softens the news so it does not feel unkind; "harsh" here means "cruel", not loud.',
  },
]

// ─── Original graded practice bank (≥20 items) ────────────────────────
type Item = {
  sentence: string
  target: string
  options: [string, string, string, string]
  answer: string
  rationale: string
}

const EASY: Item[] = [
  {
    sentence: 'The garden was tidy, with every plant in a neat row.',
    target: 'tidy',
    options: ['dirty', 'orderly', 'empty', 'wild'],
    answer: 'orderly',
    rationale: 'Neat rows show the garden is well arranged, so "tidy" means "orderly".',
  },
  {
    sentence: 'He felt glad when his lost dog came running back home.',
    target: 'glad',
    options: ['tired', 'pleased', 'cross', 'afraid'],
    answer: 'pleased',
    rationale: 'A returning lost pet brings happiness, so "glad" means "pleased".',
  },
  {
    sentence: 'The path was narrow, and only one person could pass at a time.',
    target: 'narrow',
    options: ['thin', 'long', 'steep', 'muddy'],
    answer: 'thin',
    rationale: 'Only one person fits at once, so the path is "thin" in width.',
  },
  {
    sentence: 'She spoke in a calm voice even though the room was noisy.',
    target: 'calm',
    options: ['angry', 'quick', 'peaceful', 'loud'],
    answer: 'peaceful',
    rationale: 'A calm voice is settled and untroubled, which matches "peaceful".',
  },
  {
    sentence: 'The journey was swift because the road was clear.',
    target: 'swift',
    options: ['slow', 'fast', 'safe', 'long'],
    answer: 'fast',
    rationale: 'A clear road allows speed, so "swift" means "fast".',
  },
  {
    sentence: 'The soup was bland, so he added salt and pepper.',
    target: 'bland',
    options: ['hot', 'tasteless', 'spicy', 'sweet'],
    answer: 'tasteless',
    rationale: 'He adds seasoning because the soup lacks flavour; "bland" means "tasteless".',
  },
  {
    sentence: 'The crowd grew restless while they waited for the late train.',
    target: 'restless',
    options: ['sleepy', 'fidgety', 'silent', 'cheerful'],
    answer: 'fidgety',
    rationale: 'A waiting crowd that cannot settle is "fidgety", which matches "restless".',
  },
]

const MEDIUM: Item[] = [
  {
    sentence: 'The explorer was determined to reach the summit before nightfall.',
    target: 'determined',
    options: ['nervous', 'resolved', 'curious', 'lazy'],
    answer: 'resolved',
    rationale: 'Being firmly set on a goal is "resolved", the closest match to "determined".',
  },
  {
    sentence: 'Her reluctant reply showed she did not want to join the trip.',
    target: 'reluctant',
    options: ['unwilling', 'cheerful', 'sudden', 'polite'],
    answer: 'unwilling',
    rationale: 'She does not want to go, so the reply is "unwilling".',
  },
  {
    sentence: 'The lawyer presented a compelling argument that changed the jury’s mind.',
    target: 'compelling',
    options: ['boring', 'persuasive', 'brief', 'quiet'],
    answer: 'persuasive',
    rationale: 'An argument that changes minds is "persuasive", matching "compelling".',
  },
  {
    sentence: 'A faint sound came from the cellar, almost too soft to hear.',
    target: 'faint',
    options: ['sharp', 'weak', 'cheerful', 'sudden'],
    answer: 'weak',
    rationale: '"Almost too soft to hear" signals a "weak" sound, the meaning of "faint".',
  },
  {
    sentence: 'The new manager was decisive and settled the dispute within minutes.',
    target: 'decisive',
    options: ['firm', 'gentle', 'unsure', 'late'],
    answer: 'firm',
    rationale: 'Settling a dispute quickly shows "firm" decision-making, matching "decisive".',
  },
  {
    sentence: 'The witness gave a vague account that left the police confused.',
    target: 'vague',
    options: ['clear', 'unclear', 'honest', 'long'],
    answer: 'unclear',
    rationale: 'An account that confuses the police is "unclear", the sense of "vague".',
  },
  {
    sentence: 'The host was gracious, thanking every guest as they left.',
    target: 'gracious',
    options: ['rude', 'courteous', 'silent', 'rushed'],
    answer: 'courteous',
    rationale: 'Thanking each guest is polite behaviour; "gracious" means "courteous".',
  },
  {
    sentence: 'Heavy rain hampered the rescue team as they searched the valley.',
    target: 'hampered',
    options: ['helped', 'hindered', 'followed', 'cheered'],
    answer: 'hindered',
    rationale: 'Heavy rain makes the search harder, so "hampered" means "hindered".',
  },
]

const HARD: Item[] = [
  {
    sentence: 'The minister gave an evasive answer and refused to confirm the date.',
    target: 'evasive',
    options: ['honest', 'shifty', 'brief', 'loud'],
    answer: 'shifty',
    rationale: 'Refusing to confirm and dodging the point is "shifty", the meaning of "evasive".',
  },
  {
    sentence: 'Their resilience was remarkable; the family rebuilt the farm after the flood.',
    target: 'resilience',
    options: ['weakness', 'toughness', 'sadness', 'wealth'],
    answer: 'toughness',
    rationale: 'Recovering and rebuilding after disaster shows "toughness", matching "resilience".',
  },
  {
    sentence: 'The scientist remained sceptical until the experiment was repeated.',
    target: 'sceptical',
    options: ['certain', 'doubtful', 'excited', 'tired'],
    answer: 'doubtful',
    rationale: 'Waiting for repetition before believing shows doubt; "sceptical" means "doubtful".',
  },
  {
    sentence: 'A pervasive smell of smoke spread through every room of the house.',
    target: 'pervasive',
    options: ['faint', 'widespread', 'pleasant', 'brief'],
    answer: 'widespread',
    rationale: 'The smell reaches every room, so "pervasive" means "widespread".',
  },
  {
    sentence: 'The committee deemed the proposal unworkable and rejected it at once.',
    target: 'deemed',
    options: ['judged', 'wrote', 'asked', 'delayed'],
    answer: 'judged',
    rationale: 'To "deem" something is to form an opinion about it, so it means "judged".',
  },
  {
    sentence: 'His candid review admitted the film’s flaws as well as its strengths.',
    target: 'candid',
    options: ['frank', 'cruel', 'vague', 'dull'],
    answer: 'frank',
    rationale: 'Admitting flaws openly is being "frank", the closest sense of "candid".',
  },
  {
    sentence: 'The treaty sought to reconcile two nations after years of conflict.',
    target: 'reconcile',
    options: ['divide', 'reunite', 'ignore', 'rule'],
    answer: 'reunite',
    rationale:
      'A treaty after conflict aims to bring sides back together; "reconcile" means "reunite".',
  },
  {
    sentence: 'The general issued a terse command and the soldiers moved instantly.',
    target: 'terse',
    options: ['gentle', 'curt', 'long', 'unclear'],
    answer: 'curt',
    rationale: 'A short, sharp command that brings instant action is "curt", matching "terse".',
  },
]

const SECTIONS: { title: string; band: string; items: Item[] }[] = [
  { title: 'Easy', band: 'Warm-up - concrete describing words', items: EASY },
  { title: 'Medium', band: 'Building up - abstract and formal vocabulary', items: MEDIUM },
  { title: 'Hard', band: 'Stretch - connotation and precise verbs', items: HARD },
]

const TOTAL_ITEMS = EASY.length + MEDIUM.length + HARD.length

export default function SynonymVocabularyPage() {
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
            name: 'Synonyms & vocabulary',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/question-types/synonym-vocabulary',
          },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3" className="hover:text-primary">
                KS3
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                iLowerSecondary English
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary/question-types" className="hover:text-primary">
                Question types
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-muted-foreground" aria-current="page">
              Synonyms &amp; vocabulary
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            Question-type masterclass
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold text-foreground">
            Synonyms &amp; vocabulary-in-context
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            These short, closed questions ask you to show that you understand a single word the way
            the writer used it. You might be told to <em>circle the synonym</em>, to{' '}
            <em>underline the word closest in meaning</em>, or to choose, in a multiple-choice box,
            what a quoted word <em>means</em> in the passage. They look easy and quick, and they are
            - once you train yourself to read the word in its sentence rather than guessing from
            memory.
          </p>
        </header>

        {/* What the exam is testing */}
        <section
          aria-labelledby="what-it-tests"
          className="mb-10 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="what-it-tests"
            className="mb-4 font-heading text-2xl font-semibold text-foreground"
          >
            What these questions are testing
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Both the &ldquo;{SYNONYM_SELECT.name}&rdquo; task and the &ldquo;
              {MULTIPLE_CHOICE.name}&rdquo; task draw on the same reading skill:{' '}
              <span className="font-medium text-foreground">{RAO4.code}</span> &mdash;{' '}
              {RAO4.descriptor.toLowerCase()} In plain terms, the examiner wants proof that you can
              work out a word&rsquo;s meaning from the words around it.
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md bg-card p-4 border border-border/60">
                <dt className="mb-1 font-semibold text-foreground">{SYNONYM_SELECT.name}</dt>
                <dd className="text-sm text-muted-foreground">
                  {SYNONYM_SELECT.format} {SYNONYM_SELECT.howToAnswer}
                </dd>
              </div>
              <div className="rounded-md bg-card p-4 border border-border/60">
                <dt className="mb-1 font-semibold text-foreground">{MULTIPLE_CHOICE.name}</dt>
                <dd className="text-sm text-muted-foreground">
                  {MULTIPLE_CHOICE.format} {MULTIPLE_CHOICE.howToAnswer}
                </dd>
              </div>
            </dl>
            <p>
              Notice the rule both share:{' '}
              <span className="font-semibold text-foreground">
                there is exactly one correct answer
              </span>
              . If you mark two, you cannot score the mark, even if one of them is right.
            </p>
          </div>
        </section>

        {/* Strategy box */}
        <section
          aria-labelledby="strategy"
          className="mb-10 rounded-lg border-l-4 border-primary/40 bg-card p-6 border border-border/60 sm:p-8"
        >
          <h2 id="strategy" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Strategy box: five steps to the mark
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Use the same routine every time. It is fast once it becomes a habit.
          </p>
          <ol className="space-y-4">
            {STRATEGY.map((s, i) => (
              <li key={s.step} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{s.step}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Why context and connotation matter */}
        <section aria-labelledby="context-connotation" className="mb-10 px-1">
          <h2
            id="context-connotation"
            className="mb-4 font-heading text-2xl font-semibold text-foreground"
          >
            Read in context, not in isolation
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Many English words carry more than one meaning. Take the word <em>sharp</em>. In
              &ldquo;a sharp knife&rdquo; it means having a fine cutting edge; in &ldquo;a sharp
              pain&rdquo; it means sudden and severe; in &ldquo;a sharp student&rdquo; it means
              quick to understand. The dictionary lists all three, but the sentence decides which
              one the writer intended. That is why the safest move is always to predict a
              replacement from the sentence first, then match it to an option.
            </p>
            <p>
              <span className="font-semibold text-foreground">Connotation</span> is the feeling a
              word carries on top of its plain meaning. <em>Thrifty</em>, <em>careful</em> and{' '}
              <em>stingy</em> all describe someone who does not spend much, but <em>thrifty</em>{' '}
              sounds approving, <em>careful</em> sounds neutral and <em>stingy</em> sounds critical.
              Distractor options are often built from this gap: they share the dictionary meaning
              but carry the wrong feeling. Decide whether the writer is being positive, negative or
              neutral, and let that break the tie.
            </p>
          </div>
        </section>

        {/* Tricky distractor worked examples */}
        <section
          aria-labelledby="tricky"
          className="mb-10 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2 id="tricky" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Five tricky-distractor worked examples
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Each example shows the trap a quick reader falls into and how context defeats it.
          </p>
          <ol className="space-y-6">
            {TRICKY.map((t, i) => (
              <li key={t.target} className="border-l-4 border-primary/40 pl-4">
                <p className="mb-2 font-mono text-xs font-semibold text-primary">
                  Example {i + 1} &middot; target word:{' '}
                  <span className="lowercase">{t.target}</span>
                </p>
                <p className="mb-2 font-heading text-lg italic leading-snug text-foreground">
                  &ldquo;{t.sentence}&rdquo;
                </p>
                <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">The trap: </span>
                  {t.trap}
                </p>
                <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Best answer: </span>
                  <span className="font-semibold text-primary">{t.answer}</span>
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Why: </span>
                  {t.why}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Practice bank */}
        <section aria-labelledby="practice" className="mb-10 px-1">
          <h2 id="practice" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Practice bank &mdash; {TOTAL_ITEMS} original items
          </h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Cover the answers. For each sentence, pick the option closest in meaning to the bold
            target word as it is used here. Then check the answer and the one-line reason. Items are
            graded from easy to hard.
          </p>

          {SECTIONS.map((sec) => (
            <div key={sec.title} className="mb-10">
              <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">
                {sec.title}
              </h3>
              <p className="mb-5 text-sm italic text-muted-foreground">{sec.band}</p>
              <ol className="space-y-6">
                {sec.items.map((item, idx) => (
                  <li
                    key={item.target + idx}
                    className="rounded-lg bg-card p-5 border border-border/60"
                  >
                    <p className="mb-3 text-base leading-relaxed text-foreground">
                      {item.sentence.split(new RegExp(`(${item.target})`)).map((part, p) =>
                        part === item.target ? (
                          <strong
                            key={p}
                            className="font-semibold text-foreground underline decoration-primary/60 decoration-2 underline-offset-2"
                          >
                            {part}
                          </strong>
                        ) : (
                          <span key={p}>{part}</span>
                        ),
                      )}
                    </p>
                    <ul className="mb-3 grid gap-2 sm:grid-cols-2">
                      {item.options.map((opt, oi) => (
                        <li
                          key={opt}
                          className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground border border-border/60"
                        >
                          <span className="font-mono text-xs font-semibold text-primary">
                            {String.fromCharCode(65 + oi)}
                          </span>{' '}
                          {opt}
                        </li>
                      ))}
                    </ul>
                    <details className="text-sm">
                      <summary className="cursor-pointer font-semibold text-primary">
                        Answer &amp; reason
                      </summary>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground">{item.answer}</span> &mdash;{' '}
                        {item.rationale}
                      </p>
                    </details>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        {/* Quick recap */}
        <section
          aria-labelledby="recap"
          className="mb-12 rounded-lg border-l-4 border-primary/40 bg-card p-6 border border-border/60 sm:p-8"
        >
          <h2 id="recap" className="mb-3 font-heading text-2xl font-semibold text-foreground">
            Remember
          </h2>
          <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
            <li>Read the sentence; never judge the word alone.</li>
            <li>Predict your own replacement before reading the options.</li>
            <li>Substitute each option back into the sentence.</li>
            <li>Match the connotation: positive, negative or neutral.</li>
            <li>Mark one answer only.</li>
          </ul>
        </section>

        <footer className="border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          {SPEC_ATTRIBUTION}
        </footer>
      </main>
    </>
  )
}
