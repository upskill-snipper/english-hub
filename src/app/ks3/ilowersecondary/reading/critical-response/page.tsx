import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  READING_SKILLS,
  ASSESSMENT_OBJECTIVES,
  QUESTION_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reading/critical-response'

const SKILL = READING_SKILLS.find((s) => s.code === '1.2a')!
const RAO2 = ASSESSMENT_OBJECTIVES.RAO2
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5
const MEANING_IMPACT = QUESTION_TYPES.find((q) => q.id === 'meaning-impact')!
const INFERENCE = QUESTION_TYPES.find((q) => q.id === 'inference')!
const SHORT_RETRIEVAL = QUESTION_TYPES.find((q) => q.id === 'short-retrieval')!

export const metadata: Metadata = {
  openGraph: {
    title: 'Developing a critical response to texts - iLowerSecondary English',
    description:
      'A masterclass on reading skill 1.2a: interpreting information, selecting the best short quotation, embedding evidence and turning a vague answer into a credited, developed response.',
  },
  title: 'Developing a critical response to texts - iLowerSecondary English',
  description:
    'A masterclass on reading skill 1.2a: interpreting information, selecting the best short quotation, embedding evidence and turning a vague answer into a credited, developed response.',
  alternates: { canonical: PAGE_URL },
}

type Extract = {
  id: string
  label: string
  title: string
  lines: string[]
  question: string
  weak: string
  weakComment: string
  model: string
  modelComment: string
  evidence: string
}

const EXTRACTS: Extract[] = [
  {
    id: 'extract-a',
    label: 'Extract A - recount (non-fiction)',
    title: 'The morning the river rose',
    lines: [
      'We had been warned the night before, but warnings are easy to ignore',
      'when the sky is still and the kettle is on. By six the water had reached',
      'the bottom step. By seven it was licking at the door, patient and brown,',
      'and my grandmother stopped pretending it would stop. She did not shout.',
      'She simply began carrying the photographs upstairs, one careful armful',
      'at a time, as though the flood could be reasoned with if we stayed calm.',
    ],
    question:
      'Why does the writer say the grandmother “stopped pretending it would stop”? Explain what this tells the reader about her.',
    weak: 'It tells us she was worried because the water was coming in the door and she carried the photographs upstairs.',
    weakComment:
      'This retells the events and lifts surrounding detail without explaining the chosen phrase. It does not interpret what “stopped pretending” reveals, so it stays at the level of a simple, uncredited comment.',
    model:
      'The phrase “stopped pretending” shows the grandmother had until then been deliberately downplaying the danger to stay calm; the writer implies she was hiding her fear from the family rather than not noticing it. Choosing to save “the photographs” first suggests she values memories over possessions, which makes her seem brave and selfless under pressure.',
    modelComment:
      'A developed two-mark response. One mark for the precise interpretation of “stopped pretending” (she had been masking fear, not ignoring danger); a second mark for an explained inference about character drawn from a minimal, well-chosen quotation (“the photographs”) rather than a long lift.',
    evidence: '“stopped pretending” / “the photographs”',
  },
  {
    id: 'extract-b',
    label: 'Extract B - fiction',
    title: 'The new boy',
    lines: [
      'Tomas took the empty desk at the back without being told, the way you',
      'take a seat on a bus you expect to leave soon. He did not unpack his bag.',
      'He kept one hand flat on its zip, as though something inside it might',
      'try to leave without him. When Mr Adeyemi asked his name, Tomas',
      'answered in a voice sized for a smaller room, and did not say it twice.',
    ],
    question: 'What impression does the writer create of Tomas? Explain how the writer creates it.',
    weak: 'Tomas is shy and quiet. We know this because he is the new boy and he sits at the back of the class on his own.',
    weakComment:
      'The judgement (“shy and quiet”) is reasonable but the support is general knowledge about new pupils, not evidence from the text. No quotation is selected, so the answer is not credited for evidence.',
    model:
      'The writer creates the impression that Tomas feels temporary and guarded. The simile that he sits “the way you take a seat on a bus you expect to leave soon” suggests he does not believe he belongs here yet, and keeping “one hand flat on its zip” implies he is protecting something private and is not ready to settle. His voice “sized for a smaller room” shows he is shrinking himself to avoid attention.',
    modelComment:
      'A developed response that selects three short, precise quotations and explains the effect of each rather than quoting a whole sentence. The interpretation of feeling “temporary” goes beyond the literal, which is what lifts it above a simple comment.',
    evidence:
      '“a seat on a bus you expect to leave soon” / “one hand flat on its zip” / “sized for a smaller room”',
  },
  {
    id: 'extract-c',
    label: 'Extract C - magazine article (non-fiction)',
    title: 'Why we still queue',
    lines: [
      'Online, we are promised that waiting is over: a tap, a swipe, and the',
      'thing arrives. Yet on Saturday the bakery on Mill Lane had a queue out',
      'of the door, the same as it did thirty years ago. People did not seem',
      'annoyed. They talked. The wait, it turned out, was not the price of the',
      'bread - it was part of what they had come for.',
    ],
    question: 'What does the writer suggest about the queue at the bakery? Explain why.',
    weak: 'The writer suggests the queue is long because the bakery is popular and lots of people want bread on a Saturday.',
    weakComment:
      'This answers a question the text is not asking. It explains why a queue exists in general but ignores the writer’s actual point, signalled by the final sentence, so it earns no credit for interpretation.',
    model:
      'The writer suggests the queue is not an inconvenience but something people deliberately value. The contrast between online speed (“a tap, a swipe”) and a queue “the same as it did thirty years ago” sets up the idea, and the closing line that the wait “was part of what they had come for” makes the writer’s viewpoint explicit: the social ritual matters more than efficiency.',
    modelComment:
      'A developed response that identifies the writer’s viewpoint and supports it with the single most relevant short quotation (the final clause) plus a brief contrasting reference. It interprets rather than retrieves, which is exactly what the higher mark rewards.',
    evidence: '“part of what they had come for”',
  },
]

const CHECKLIST = [
  'Have I answered the question that is actually asked, not a related one?',
  'Is my quotation the shortest piece of text that proves my point - a few words, not a whole sentence?',
  'Is the quotation copied exactly, inside quotation marks, with the spelling unchanged?',
  'Is the evidence relevant - does it directly support the idea I just stated?',
  'Have I embedded the quotation into my own sentence rather than dropping it in on its own?',
  'Have I explained what the evidence shows, instead of leaving it to speak for itself?',
  'Have I gone beyond what the text literally says to what it implies (interpretation, not just retrieval)?',
  'Could the examiner tick a point and a developed explanation in what I have written?',
]

export default async function CriticalResponsePage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Reading skills',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Critical response', url: PAGE_URL },
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
          Reading skills
        </Link>
        <span> · </span>
        <span>Critical response</span>
      </p>

      <h1>Developing a critical response to texts</h1>
      <p className="lead">
        Reading skill {SKILL.code} - {SKILL.title}. This masterclass shows you how to interpret what
        a text means and how to choose and use the single best piece of evidence, so that a sensible
        idea in your head becomes a credited answer on the page.
      </p>

      {/* ── What this skill is ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>What &ldquo;a critical response&rdquo; actually means</h2>
        <p>
          A critical response is not criticism in the everyday sense. It means reading carefully,
          working out what the writer is really saying or implying, and then proving your view with
          the words on the page. The skill has two halves:
        </p>
        <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
          {SKILL.bullets.map((b) => (
            <div key={b} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                Skill {SKILL.code}
              </p>
              <p className="text-sm text-foreground">{b}</p>
            </div>
          ))}
        </div>
        <p>
          In the achievement test this skill is rewarded mainly through two assessment objectives.{' '}
          {RAO2.code} is about reading beyond the literal: {RAO2.descriptor.toLowerCase()}{' '}
          {RAO5.code} is about the bigger picture: {RAO5.descriptor.toLowerCase()} Together they
          mean the examiner is asking <em>what does this mean</em> and <em>how do you know</em> -
          never simply <em>what does it say</em>.
        </p>
      </section>

      {/* ── The PEE habit ───────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The Point-Evidence-Explain habit (built for short answers)</h2>
        <p>
          At GCSE, PEE often becomes a long paragraph. In the iLowerSecondary test most reading
          answers are only one or two lines, so PEE has to be compressed into a sentence or two
          without losing any of its three parts:
        </p>
        <div className="not-prose my-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Point
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              State your answer to the question in your own words. One clear sentence. This is your
              interpretation.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Evidence
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Embed a very short quotation that proves the point - a few words, copied exactly,
              inside quotation marks.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Explain
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Say what that wording shows or implies, and link it back to the question. This is the
              part that earns the second mark.
            </p>
          </div>
        </div>
        <p>
          A useful sentence frame is:{' '}
          <em>The writer shows … when they say &ldquo;…&rdquo;, which suggests …</em> The word{' '}
          <em>suggests</em> forces you to interpret rather than retell.
        </p>
      </section>

      {/* ── Choosing the best quotation ─────────────────────────────── */}
      <section className="my-10">
        <h2>Choosing the best short quotation</h2>
        <p>
          Weak answers quote too much and explain too little. The examiner is not impressed by the
          length of a quotation - only by how precisely it supports the point. Aim for the smallest
          piece of text that does the job.
        </p>
        <div className="not-prose my-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Precise
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pick the exact word or phrase that carries the meaning, not the whole sentence it sits
              in.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Relevant
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The quotation must directly prove the idea you just stated - if it only loosely
              relates, find a better one.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Minimal
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Three or four words is usually enough. Long lifts often hide the absence of an
              explanation.
            </p>
          </div>
        </div>
        <h3>Embedding evidence</h3>
        <p>
          Embedding means weaving the quotation into the grammar of your own sentence so it reads
          smoothly, rather than bolting it on at the end. Compare:
        </p>
        <div className="not-prose my-4 space-y-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Not embedded
            </p>
            <p className="text-sm text-foreground">
              The writer makes the flood seem calm and slow. &ldquo;patient and brown&rdquo;.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Embedded
            </p>
            <p className="text-sm text-foreground">
              Describing the water as &ldquo;patient and brown&rdquo; makes the flood seem calm and
              unstoppable, as if it has all the time it needs.
            </p>
          </div>
        </div>
        <p>
          The embedded version states a point, integrates the evidence and explains the effect - all
          in one controlled sentence. That is the shape every short reading answer should take.
        </p>
      </section>

      {/* ── 1 mark vs 2 mark ────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The difference between a 1-mark and a developed 2-mark answer</h2>
        <p>
          Some questions are worth a single mark for a correct, specific response; others are worth
          two and require development. Knowing which is which tells you how much to write.
        </p>
        <div className="not-prose my-5 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 text-left">
                <th className="py-2 pr-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Question type
                </th>
                <th className="py-2 pr-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  AO
                </th>
                <th className="py-2 pr-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Marks
                </th>
                <th className="py-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  What earns the marks
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/40 align-top">
                <td className="py-3 pr-4 text-foreground">{SHORT_RETRIEVAL.name}</td>
                <td className="py-3 pr-4">{SHORT_RETRIEVAL.ao}</td>
                <td className="py-3 pr-4">{SHORT_RETRIEVAL.typicalMarks}</td>
                <td className="py-3 leading-relaxed">{SHORT_RETRIEVAL.howToAnswer}</td>
              </tr>
              <tr className="border-b border-border/40 align-top">
                <td className="py-3 pr-4 text-foreground">{INFERENCE.name}</td>
                <td className="py-3 pr-4">{INFERENCE.ao}</td>
                <td className="py-3 pr-4">{INFERENCE.typicalMarks}</td>
                <td className="py-3 leading-relaxed">{INFERENCE.howToAnswer}</td>
              </tr>
              <tr className="align-top">
                <td className="py-3 pr-4 text-foreground">{MEANING_IMPACT.name}</td>
                <td className="py-3 pr-4">{MEANING_IMPACT.ao}</td>
                <td className="py-3 pr-4">{MEANING_IMPACT.typicalMarks}</td>
                <td className="py-3 leading-relaxed">{MEANING_IMPACT.howToAnswer}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The pattern is consistent: a one-mark answer needs one accurate, specific idea; a
          developed two-mark answer needs that idea <em>plus</em> an explanation that interprets the
          evidence and links it to the question. An unexplained lift from the text is the most
          common reason a two-mark answer scores one.
        </p>
      </section>

      {/* ── Worked extracts ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Three worked extracts</h2>
        <p>
          Each extract below is an original passage written for this guide. Read the passage, look
          at the question, then study how a weak answer is rebuilt into a credited model answer. The
          mark commentary uses Pearson-style language.
        </p>

        {EXTRACTS.map((ex) => (
          <article
            key={ex.id}
            id={ex.id}
            className="not-prose my-7 rounded-2xl border border-border/60 bg-card p-5 sm:p-6"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              {ex.label}
            </p>
            <h3 className="mt-1 mb-3 font-serif text-lg font-semibold text-foreground">
              {ex.title}
            </h3>

            <div className="rounded-xl border border-border/50 bg-background/50 p-4">
              {ex.lines.map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                Question
              </p>
              <p className="text-sm text-foreground">{ex.question}</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/50 p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                  Weak answer
                </p>
                <p className="text-sm text-foreground mb-3">&ldquo;{ex.weak}&rdquo;</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{ex.weakComment}</p>
              </div>
              <div className="rounded-xl border border-border/50 p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                  Improved model answer
                </p>
                <p className="text-sm text-foreground mb-3">&ldquo;{ex.model}&rdquo;</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Mark commentary: </span>
                  {ex.modelComment}
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-border/50 bg-background/40 p-3">
              <p className="text-xs text-muted-foreground">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase">
                  Best evidence selected:{' '}
                </span>
                <span className="text-foreground">{ex.evidence}</span>
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* ── Evidence selection checklist ────────────────────────────── */}
      <section className="my-10">
        <h2>Evidence selection checklist</h2>
        <div className="not-prose rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
            Run through this before you write any reading answer
          </p>
          <ul className="space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <span className="mt-0.5 text-primary font-semibold" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Turning a vague answer into a credited one ──────────────── */}
      <section className="my-10">
        <h2>From vague to credited: the one move that matters</h2>
        <p>
          If you only remember one thing, remember this: a vague answer describes; a credited answer
          interprets and proves. The fix is almost always the same - name the exact words you are
          relying on, then add the clause that begins{' '}
          <em>which suggests / which implies / which shows that …</em>. That single clause is
          usually the difference between a comment the examiner cannot credit and a developed point
          they can.
        </p>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
