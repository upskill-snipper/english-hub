import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  READING_SKILLS,
  QUESTION_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reading/inference'

const RAO2 = ASSESSMENT_OBJECTIVES.RAO2
const SKILL_1_1 = READING_SKILLS.find((s) => s.code === '1.1')!
const SKILL_1_2A = READING_SKILLS.find((s) => s.code === '1.2a')!
const INFERENCE_Q = QUESTION_TYPES.find((q) => q.id === 'inference')!
const MEANING_Q = QUESTION_TYPES.find((q) => q.id === 'meaning-impact')!

export const metadata: Metadata = {
  openGraph: {
    title: 'Inference (RAO2): reading beyond the literal - masterclass',
    description:
      'A masterclass on the iLowerSecondary English inference objective: literal vs implied meaning, deduction vs inference vs interpretation, the evidence-plus-suggestion sentence frame, how 1-mark and 2-mark questions are marked, and three original practice extracts with model answers.',
  },
  title: 'Inference (RAO2): reading beyond the literal',
  description:
    'A masterclass on the iLowerSecondary English inference objective: literal vs implied meaning, deduction vs inference vs interpretation, the evidence-plus-suggestion sentence frame, how 1-mark and 2-mark questions are marked, and three original practice extracts with model answers.',
  alternates: { canonical: PAGE_URL },
}

type Layer = { name: string; gloss: string; example: string }

const THREE_LAYERS: Layer[] = [
  {
    name: 'Deduce',
    gloss:
      'Work something out logically from facts the text states directly. The text gives you the pieces; you reach the only conclusion they allow.',
    example:
      'If a text says the shop’s shutters were down at noon on a weekday and a hand-written notice was taped inside the glass, you can deduce the shop was not trading that day.',
  },
  {
    name: 'Infer',
    gloss:
      'Read a meaning the writer implies but never states. The text hints; you fill the gap with the most reasonable unstated idea.',
    example:
      'If a character “folded the letter back along its old creases and did not look up,” you infer the news was unwelcome or already known - the writer never says she is upset.',
  },
  {
    name: 'Interpret',
    gloss:
      'Decide what a detail, image or choice means in the wider context of the text and explain its significance, not just its surface sense.',
    example:
      'A repeated reference to a clock that has stopped can be interpreted as the writer signalling a household frozen by loss - a meaning built across the text, not from one line.',
  },
]

type Extract = {
  id: string
  kind: string
  title: string
  lines: string[]
  questions: {
    prompt: string
    marks: number
    model: string
    markNote: string
  }[]
}

const EXTRACTS: Extract[] = [
  {
    id: 'tide-clock',
    kind: 'Non-fiction · recount',
    title: 'Extract A - “The last bus”',
    lines: [
      'I had walked the coast path before, but never alone, and never this late in the year. The guidebook in my pocket said the causeway to the island was “passable for roughly four hours either side of low water.” I had read that sentence three times in the café and still set off at half past two.',
      'By the time I reached the shingle the gulls had gone quiet. A man coiling a rope by the slipway looked at me, then at the water, then back at me, and said nothing at all. I checked the laces on both boots and started across the wet stones a little faster than I had meant to.',
    ],
    questions: [
      {
        prompt:
          'Why does the writer “set off at half past two” even though they had read the warning about the causeway three times? (1)',
        marks: 1,
        model:
          'The writer set off anyway because they were determined to make the crossing and did not want to be put off, even though part of them knew the timing was risky.',
        markNote:
          'RAO2, 1 mark. A single accurate inference earns the mark. Credit any answer that reads beyond the literal (e.g. impatience, over-confidence, ignoring a known risk). Simply re-stating “they had read it three times” with no implied reason is a lift and is not credited.',
      },
      {
        prompt:
          'Explain what the writer suggests by the man who “looked at me, then at the water, then back at me, and said nothing at all.” (2)',
        marks: 2,
        model:
          'The writer suggests the local man can see the crossing is dangerous at that time but chooses not to warn the walker. His silence, after looking deliberately between the walker and the water, implies he expects trouble and perhaps disapproves, which builds a sense of unease for the reader before anything has gone wrong.',
        markNote:
          'RAO2-style 2-mark “explain what the writer means” item. One mark for an explained inference (the man recognises the danger / the timing is wrong); a second mark for developing it (his pointed silence creates tension or hints the walker should not go). The answer must expand the idea - quoting “said nothing at all” without explaining what the silence implies would not gain the second mark.',
      },
    ],
  },
  {
    id: 'classroom',
    kind: 'Non-fiction · blog',
    title: 'Extract B - “New school, week one”',
    lines: [
      'Everyone keeps asking how I’m settling in. I say “fine, thanks” and reorganise my pencil case for the second time that lesson. The case has three pens I will never use and a rubber I keep lending to a girl whose name I have written on my hand so I do not forget it.',
      'At lunch I take the long way to the hall, the one past the music rooms, because it adds four minutes and four minutes is four minutes I do not have to spend deciding where to sit.',
    ],
    questions: [
      {
        prompt:
          'What does the writer’s answer of “fine, thanks” suggest about how they really feel? (1)',
        marks: 1,
        model:
          'It suggests the writer is not actually fine and is hiding how unsettled or anxious they feel behind a polite, automatic reply.',
        markNote:
          'RAO2, 1 mark. The mark is for the inference that the words mask a different, less positive feeling. Answering only “they feel fine” takes the line literally and misses the implied meaning, so it is not credited.',
      },
      {
        prompt:
          'Explain what the writer means by taking “the long way to the hall … because it adds four minutes.” (2)',
        marks: 2,
        model:
          'The writer means they are deliberately delaying arriving at lunch because they have nowhere comfortable to sit and no group to join. Stretching the walk out is a way of avoiding the difficult moment of choosing a seat alone, which shows how isolated and uncertain they feel in the new school.',
        markNote:
          'RAO2-style 2-mark item. One mark for the inference that the detour is deliberate avoidance; one mark for explaining what this reveals (loneliness / not yet belonging). The phrase must be interpreted, not lifted - repeating “four minutes is four minutes” without explanation does not expand the meaning and earns no second mark.',
      },
    ],
  },
  {
    id: 'kitchen',
    kind: 'Fiction · mystery',
    title: 'Extract C - “The kettle”',
    lines: [
      'Maya let herself in with the spare key. The kitchen was warm and the kettle, when she touched it, was still hot, though her grandmother’s coat was gone from its hook and the back door stood a hand’s width open.',
      '“Gran?” she said, to the empty room. The radio was on, turned down so low it was only a murmur, the way it was never left. Maya stood very still and listened to the house instead.',
    ],
    questions: [
      {
        prompt:
          'Why does Maya “stand very still and listen to the house” at the end of the extract? (1)',
        marks: 1,
        model:
          'She stands still and listens because she senses something is wrong and is trying to work out whether anyone, or anything, is still there.',
        markNote:
          'RAO2, 1 mark. Credit the inference that she is alarmed/suspicious and checking for danger or for her grandmother. A literal answer such as “because she wanted to hear the radio” ignores the implied tension and is not credited.',
      },
      {
        prompt:
          'Explain what the writer implies through the hot kettle, the missing coat and the door left “a hand’s width open.” (2)',
        marks: 2,
        model:
          'The writer implies that Maya’s grandmother left suddenly and only moments before Maya arrived. The kettle is still hot and the door is not properly shut, which suggests an interrupted, hurried departure rather than a planned one, creating a sense of mystery and unease about what has happened to her.',
        markNote:
          'RAO2-style 2-mark item. One mark for the inference of a recent, sudden departure; one mark for developing it (the clues point to haste/interruption and build mystery). The details must be drawn together and explained - simply listing “the kettle was hot and the coat was gone” without saying what it implies is a lift and gains only limited credit at best.',
      },
    ],
  },
]

const PITFALLS = [
  {
    label: 'Lifting without explaining',
    text: 'Copying the words straight out of the text and stopping there. A lift proves you found the line; it does not show what you inferred from it. Mark schemes for 2-mark “explain what the writer means” items reward the expansion, not the quotation - you must say what the words suggest.',
  },
  {
    label: 'Over-reading',
    text: 'Inventing a meaning the text cannot support - claiming a character is grieving when the evidence only shows they are tired, or building a dramatic backstory from a single neutral detail. A good inference is the most reasonable unstated idea, not the most exciting one. Tie every inference back to the actual words on the page.',
  },
  {
    label: 'Answering the literal question',
    text: 'Treating an inference question as a retrieval question and just repeating what the text states directly. If the answer is sitting on the surface of the text word-for-word, you have probably not inferred anything.',
  },
  {
    label: 'Inferring without evidence',
    text: 'Giving a plausible-sounding feeling or reason with nothing in the text behind it. Even a 1-mark inference must be anchored to a specific detail; an unanchored guess is not a deduction.',
  },
]

export default async function InferencePage() {
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
            name: 'Reading skills',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/reading',
          },
          { name: 'Inference (RAO2)', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary/reading" className="hover:text-foreground">
          {await t('ks3.page.bc.reading_skills')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.reading.inference.bc')}</span>
      </p>

      <h1>Inference: reading beyond the literal</h1>
      <p className="lead">
        {RAO2.code} asks you to <strong>{RAO2.descriptor.replace(/\.$/, '').toLowerCase()}</strong>.
        It is one of the most heavily weighted reading objectives on the paper, and it is the skill
        examiners use to separate students who only <em>find</em> information from students who can
        work out what a writer is really telling them. This masterclass shows you exactly what the
        objective means, how the questions are marked, and how to write answers that earn the marks.
      </p>

      <section className="my-10">
        <h2>What this objective is testing</h2>
        <p>
          In the reading content, this objective sits under{' '}
          <strong>
            {SKILL_1_1.code} {SKILL_1_1.title}
          </strong>{' '}
          and{' '}
          <strong>
            {SKILL_1_2A.code} {SKILL_1_2A.title}
          </strong>
          . The two skills it draws on most directly are:
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {SKILL_1_1.code} · second bullet
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{SKILL_1_1.bullets[1]}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
              {SKILL_1_2A.code} · first bullet
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{SKILL_1_2A.bullets[0]}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          It carries a {RAO2.weightPct}% weighting of the qualification - see the specification page
          for how every objective is weighted. The point is that it is large enough that you cannot
          afford to treat inference questions as quick wins to rush.
        </p>
      </section>

      <section className="my-10">
        <h2>Literal vs implied meaning</h2>
        <p>
          Every text carries two kinds of meaning. <strong>Literal</strong> meaning is what the
          words say on the surface - it can be pointed to directly. <strong>Implied</strong> meaning
          is what the words make you understand without stating it. Retrieval questions test the
          literal; inference questions test the implied.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
              Literal - what it says
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              “She put her coat on before he had finished speaking.” The literal fact is simply that
              she put on her coat.
            </p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary mb-2">
              Implied - what it suggests
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We <em>infer</em> she has already decided to leave, is not interested in what he is
              saying, or wants the conversation to end - none of which the writer states.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2>Deduce vs infer vs interpret</h2>
        <p>
          The objective names three related skills. They are not the same, and knowing the
          difference helps you judge how much an answer needs to do.
        </p>
        <div className="not-prose my-6 space-y-3">
          {THREE_LAYERS.map((layer) => (
            <div key={layer.name} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary mb-2">
                {layer.name}
              </p>
              <p className="text-sm leading-relaxed mb-2">{layer.gloss}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Example: </span>
                {layer.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>The “evidence + what it suggests” frame</h2>
        <p>
          Almost every inference answer is stronger when it does two things in order: it points to
          the specific evidence, then it states the unstated idea that evidence supports. A reliable
          sentence frame:
        </p>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="text-sm leading-relaxed">
            <span className="font-medium text-foreground">The detail that …</span>{' '}
            <span className="text-muted-foreground">[evidence - what the text actually says]</span>{' '}
            <span className="font-medium text-foreground">suggests that …</span>{' '}
            <span className="text-muted-foreground">[the implied meaning you have worked out]</span>
            .
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          For a 1-mark inference you can often give just the “suggests that …” half, provided it is
          clearly anchored to the text. For a 2-mark “explain what the writer means” answer you need
          both halves and then a step of development - why that implied meaning matters or what
          effect it has on the reader.
        </p>
      </section>

      <section className="my-10">
        <h2>How the two question types are marked</h2>
        <p>
          Inference is assessed through two main item types on the paper. The marking logic for each
          is different, and most lost marks come from answering one as if it were the other.
        </p>
        <div className="not-prose my-6 space-y-3">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-sm font-medium">{INFERENCE_Q.name}</span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                {INFERENCE_Q.ao}
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                {INFERENCE_Q.typicalMarks} mark (typical)
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Format: </span>
              {INFERENCE_Q.format}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              <span className="font-medium text-foreground">How it is marked: </span>
              {INFERENCE_Q.howToAnswer} You do not need a quotation or extended explanation - but
              the inference must genuinely go beyond the literal. A correct literal retrieval scores
              nothing here.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-sm font-medium">{MEANING_Q.name}</span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                {MEANING_Q.ao}
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                {MEANING_Q.typicalMarks} marks (typical)
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Format: </span>
              {MEANING_Q.format}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              <span className="font-medium text-foreground">How it is marked: </span>
              {MEANING_Q.howToAnswer} In practice this means roughly one mark for an explained
              inference and one mark for developing it. You must <strong>expand</strong> the
              meaning, not lift the writer’s words and leave them to speak for themselves.
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Marks and formats above are typical of these question types - exact wording, order and
          number of items vary between papers.
        </p>
      </section>

      <section className="my-10">
        <h2>Three practice extracts with model answers</h2>
        <p>
          Each extract below is an original passage written for this guide. Read the whole extract
          before the questions, then compare your answer with the model and the mark note. Notice
          how every model answer makes the inference <em>explicit</em> rather than leaving it
          implied in a quotation.
        </p>
        <div className="not-prose my-6 space-y-6">
          {EXTRACTS.map((ex) => (
            <article key={ex.id} className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                {ex.kind}
              </p>
              <h3 className="text-base font-semibold mb-3">{ex.title}</h3>
              <div className="space-y-3 border-l-2 border-primary/30 pl-4 mb-5">
                {ex.lines.map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
              <div className="space-y-4">
                {ex.questions.map((q, qi) => (
                  <div key={qi} className="rounded-lg border border-border/50 bg-background p-4">
                    <p className="text-sm font-medium mb-2">
                      <span className="font-mono text-primary mr-2">Q{qi + 1}.</span>
                      {q.prompt}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      <span className="font-medium text-foreground">Model answer: </span>
                      {q.model}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">
                        Mark note ({q.marks} mark
                        {q.marks === 1 ? '' : 's'}):{' '}
                      </span>
                      {q.markNote}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Common pitfalls to avoid</h2>
        <div className="not-prose my-6 space-y-3">
          {PITFALLS.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-destructive/30 bg-destructive/5 p-5"
            >
              <p className="flex items-baseline gap-2 text-sm font-medium mb-1">
                <span className="text-destructive font-mono">×</span>
                <span>{p.label}</span>
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Quick checklist before you write an inference answer</h2>
        <ul className="not-prose my-4 space-y-2">
          {[
            'Have I gone beyond what the text states on the surface?',
            'Can I point to the specific detail my inference rests on?',
            'For a 2-mark answer, have I explained the meaning and then developed it - not just quoted?',
            'Is my inference the most reasonable reading, not the most dramatic one?',
            'Have I avoided over-reading details the text cannot actually support?',
          ].map((c) => (
            <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">☐</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
