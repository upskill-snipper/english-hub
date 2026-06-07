import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/text-types/autobiography-biography'

const TEXT_TYPE_LABEL = NON_FICTION_TEXT_TYPES[0] // 'autobiography/biography'
const GENRE_PROMPTS = GUIDED_READING_PROMPTS.nonFiction.Genre

export const metadata: Metadata = {
  openGraph: {
    title: 'Autobiography & biography - iLowerSecondary English text types',
    description:
      'A reading-and-writing guide to autobiography and biography for LEH11: definitions, conventions, language features to spot, exam questions, and original annotated extracts with model answers.',
  },
  title: 'Autobiography & biography - iLowerSecondary English',
  description:
    'A reading-and-writing guide to autobiography and biography for LEH11: definitions, conventions, language features to spot, exam questions, and original annotated extracts with model answers.',
  alternates: { canonical: PAGE_URL },
}

// ── Definition / difference cards ───────────────────────────────────
const DEFINITIONS: { term: string; person: string; meaning: string }[] = [
  {
    term: 'Autobiography',
    person: 'First person - written by the subject',
    meaning:
      'A person tells the story of their own life. The writer and the subject are the same person, so the account is shaped by memory, hindsight and personal feeling. Look for "I", "we", "my" and a reflective, looking-back tone.',
  },
  {
    term: 'Biography',
    person: 'Third person - written about someone else',
    meaning:
      'A writer tells the story of another person’s life, usually after researching it. The writer stands outside the events, so the account often feels more distanced and may weigh up evidence. Look for "he", "she", "they" and the subject’s name.',
  },
]

// ── Typical conventions ─────────────────────────────────────────────
const CONVENTIONS: { focus: string; explanation: string }[] = [
  {
    focus: 'Chronology and flashback',
    explanation:
      'Most life writing moves roughly forward in time, but writers often jump back (flashback) or forward (flash-forward) to link an early moment to its later importance.',
  },
  {
    focus: 'Selection of significant moments',
    explanation:
      'A whole life cannot be told, so the writer chooses turning points, first times and decisions that mattered. What is left out is a deliberate choice as much as what is kept.',
  },
  {
    focus: 'Reflective tone and hindsight',
    explanation:
      'The writer knows how things turned out. Phrases such as "I did not realise then" or "looking back" judge the past from the present, adding wisdom or regret.',
  },
  {
    focus: 'Anecdote',
    explanation:
      'A short, vivid true story is used to reveal character or make a point memorable, rather than simply listing dates and facts.',
  },
  {
    focus: 'Direct address',
    explanation:
      'Autobiographers in particular often speak straight to the reader ("you") to build closeness and make a private memory feel shared.',
  },
  {
    focus: 'Emotive reflection',
    explanation:
      'Feeling is named and explored, not just events. The writer tells us not only what happened but what it meant to them or to the subject.',
  },
]

// ── Language features to spot when reading ──────────────────────────
const LANGUAGE_FEATURES: { feature: string; whatToSpot: string; example: string }[] = [
  {
    feature: 'First-person pronouns (autobiography)',
    whatToSpot: '"I", "me", "my", "we", "our" signal a self-account written by the subject.',
    example: '"I had never seen the sea, and I was not sure I believed in it."',
  },
  {
    feature: 'Third-person reference (biography)',
    whatToSpot:
      '"he", "she", "they" and the subject’s name show a writer reporting on someone else.',
    example: '"Esther Vane was forty before she repaired her first engine."',
  },
  {
    feature: 'Past tense',
    whatToSpot:
      'Life writing usually recounts events that have already happened, so verbs are mostly in the past tense.',
    example: '"We packed the van. We left before dawn."',
  },
  {
    feature: 'Emotive / reflective language',
    whatToSpot: 'Words that name or judge feeling, often added with hindsight.',
    example: '"I was proud, foolishly proud, of a journey I had not yet made."',
  },
  {
    feature: 'Time markers',
    whatToSpot:
      'Phrases such as "by then", "years later", "that summer", "looking back" organise the timeline and signal flashback or hindsight.',
    example: '"Years later, she would call that the day everything changed."',
  },
  {
    feature: 'Direct address',
    whatToSpot:
      'The word "you", or a question aimed at the reader, draws the reader into the memory.',
    example: '"You would have laughed at me. I almost laugh now."',
  },
]

// ── How examiners might question these ──────────────────────────────
const EXAM_FOCUS: { focus: string; detail: string }[] = [
  {
    focus: 'Identify the text type and how you can tell',
    detail:
      'A genre question may ask you to point at the language features that show this is autobiography or biography - first-person pronouns and a reflective tone, or third-person reference and a researched, distanced voice.',
  },
  {
    focus: 'Retrieval and inference',
    detail:
      'Short "Why…?" questions ask what happened or why the subject acted as they did. Read beyond the literal: hindsight comments often imply more than they state.',
  },
  {
    focus: 'Language at word level',
    detail:
      'You may be asked how an emotive or reflective word changes how you see the subject - name the word, explain the connotation, and link it to the effect on the reader.',
  },
  {
    focus: 'Writer’s purpose and viewpoint',
    detail:
      'Autobiography is rarely neutral: the writer shapes how we judge their own past. Biography may praise, defend or question its subject. Comment on viewpoint, not just events.',
  },
  {
    focus: 'Structure and selection',
    detail:
      'A structure question may ask why the writer opens with a particular moment, or uses a flashback. Explain the effect of the choice, not just that it happened.',
  },
]

// ── How to write one for Section B ──────────────────────────────────
const WRITING_STEPS: { step: string; detail: string }[] = [
  {
    step: 'Match the form precisely',
    detail:
      'If the task says "autobiographical", write in the first person about yourself or an invented "I". If it says "biographical", write in the third person about another person. Mixing the two loses marks for form.',
  },
  {
    step: 'Choose one or two significant moments',
    detail:
      'Do not summarise a whole life. Pick a turning point and develop it with detail. Depth beats coverage in 35 minutes.',
  },
  {
    step: 'Use hindsight and reflection',
    detail:
      'Add a sentence that judges the moment from now - "I did not know it then, but…" - to show the reflective tone examiners reward in this form.',
  },
  {
    step: 'Control the timeline with time markers',
    detail:
      'Open clearly, then use phrases such as "that morning", "by the end of the year" or a deliberate flashback to organise paragraphs and link sections.',
  },
  {
    step: 'Vary sentences and use accurate punctuation',
    detail:
      'A short sentence after a long one isolates an important feeling. Demarcate sentences correctly and use commas, dashes and apostrophes confidently.',
  },
]

// ── Original annotated extracts (100% original; invented person) ────
const EXTRACTS: {
  id: string
  label: string
  kind: string
  paragraphs: string[]
  annotations: { feature: string; note: string }[]
}[] = [
  {
    id: 'extract-auto',
    label: 'Extract 1',
    kind: 'Autobiographical - first person, original',
    paragraphs: [
      'I was eleven the summer my grandmother taught me to mend a net. We sat on the cold step behind her house, the twine cutting small red lines into my fingers, and I complained until my voice ran out. She never once told me to be quiet. She simply waited, her hands moving in the slow, certain way I would spend the rest of my life trying to copy.',
      'I did not understand, then, that she was not really teaching me about nets. Years later, when my own work fell apart and there was no one beside me on any step, I finally heard what she had been saying with her hands. You learn patience or you learn nothing. I think of her every time I tie a knot, and I am no longer in any hurry.',
    ],
    annotations: [
      {
        feature: 'First-person pronouns',
        note: '"I was eleven", "my grandmother", "my fingers" - the writer is the subject; this is a self-account.',
      },
      {
        feature: 'Past tense',
        note: '"We sat", "She never once told me", "her hands moving" - recounting events already lived.',
      },
      {
        feature: 'Hindsight / reflective tone',
        note: '"I did not understand, then" and "Years later… I finally heard" judge the past from the present.',
      },
      {
        feature: 'Anecdote and significant moment',
        note: 'One small, vivid scene (mending a net) is chosen to stand for a life-long lesson, not a list of dates.',
      },
      {
        feature: 'Direct address',
        note: '"You learn patience or you learn nothing" turns to the reader, sharing the lesson directly.',
      },
      {
        feature: 'Emotive reflection',
        note: '"there was no one beside me" and "I am no longer in any hurry" name the feeling, not just the event.',
      },
    ],
  },
  {
    id: 'extract-bio',
    label: 'Extract 2',
    kind: 'Biographical - third person, original',
    paragraphs: [
      'Esther Vane was forty years old before she repaired her first engine, and almost sixty before anyone outside her village had heard her name. She had grown up believing, as she was told, that machines were not for her. For nearly two decades she ignored that belief only in private, taking watches apart at the kitchen table and rebuilding them by candlelight while the house slept.',
      'By the time the regional newspaper finally photographed her workshop, Vane had trained eleven young engineers, nine of them women. She rarely spoke about the early years and never asked for sympathy. Those who knew her best say she measured her life not by the recognition that came late, but by the quiet hours she had refused to waste.',
    ],
    annotations: [
      {
        feature: 'Third-person reference',
        note: '"Esther Vane was forty", "She had grown up", "her workshop" - a writer reporting on another person.',
      },
      {
        feature: 'Past tense',
        note: '"was forty", "had grown up", "ignored that belief" - a researched account of events that have happened.',
      },
      {
        feature: 'Time markers',
        note: '"before she repaired her first engine", "For nearly two decades", "By the time…" organise the timeline.',
      },
      {
        feature: 'Selection of significant moments',
        note: 'First engine, the newspaper photograph and the trained engineers are chosen as turning points.',
      },
      {
        feature: 'Viewpoint of the biographer',
        note: '"never asked for sympathy" and "refused to waste" shape the reader to admire her - biography is not neutral.',
      },
      {
        feature: 'Sourcing',
        note: '"Those who knew her best say…" shows the distanced, evidence-weighing voice typical of biography.',
      },
    ],
  },
]

// ── Practice questions with model answers ───────────────────────────
const PRACTICE: {
  q: string
  ao: string
  marks: string
  model: string
  markNote: string
}[] = [
  {
    q: 'Look at Extract 1. Identify two language features that show this is autobiography rather than biography.',
    ao: 'RAO4 · genre identification',
    marks: '(2 marks)',
    model:
      'It uses first-person pronouns - "I was eleven", "my grandmother" - which shows the writer is also the subject. It also uses a reflective, hindsight tone - "I did not understand, then" - judging the writer’s own past from the present.',
    markNote:
      'One mark for each correctly named feature with appropriate evidence (first-person pronouns; reflective / hindsight tone; direct address). Naming a feature without evidence is not credited.',
  },
  {
    q: 'In Extract 2, why did Esther Vane take watches apart "by candlelight while the house slept"?',
    ao: 'RAO2 · inference',
    marks: '(1 mark)',
    model:
      'Because she had been taught that machines "were not for her", so she practised in secret to avoid disapproval.',
    markNote:
      'Award the mark for a clear inference about secrecy / hiding the work because of the belief she had been given. A literal lift with no inference is not credited.',
  },
  {
    q: 'How does the writer of Extract 1 use language to show what the grandmother meant to the writer? Use evidence from the text.',
    ao: 'RAO4 + RAO5 · language and effect',
    marks: '(4 marks)',
    model:
      'The writer uses the reflective phrase "the slow, certain way I would spend the rest of my life trying to copy", where the verb "trying" suggests the grandmother set a standard the writer never fully reached, making her feel important and admired. The writer also chooses the emotive contrast "there was no one beside me on any step", echoing the earlier "cold step" so that her absence is felt physically, which makes the reader understand how much the writer relied on her.',
    markNote:
      'Two developed points, each with precise evidence and an explanation of the effect on the reader (2 + 2). Reward comment on language at word level; unexplained lifts are not credited.',
  },
  {
    q: 'How does the writer of Extract 2 shape the reader’s view of Esther Vane? Use evidence from the text.',
    ao: 'RAO5 · purpose and viewpoint',
    marks: '(2 marks)',
    model:
      'The writer presents her positively: the detail that she "never asked for sympathy" and "measured her life… by the quiet hours she had refused to waste" guides the reader to admire her determination rather than pity her late recognition.',
    markNote:
      'One mark for identifying the admiring / positive viewpoint, one mark for appropriate supporting evidence. The point must be about the writer’s shaping of the reader, not just the events.',
  },
]

// ── Original "write the opening" task with model ────────────────────
const WRITE_TASK = {
  prompt:
    'Write the opening of an autobiographical piece (about 120-150 words) describing a moment when you first tried something difficult. Write in the first person and include at least one moment of hindsight.',
  model: [
    'The first time I stood in front of a crowd, I forgot my own name. I was thirteen. The hall smelt of floor polish and nerves - most of them mine - and the small card in my hand had stopped meaning anything, as if the words had quietly walked off it while I waited.',
    'I got through perhaps four sentences before my voice cracked, and I remember staring at a single light on the ceiling as though it might rescue me. It did not. Somehow, I finished.',
    'I did not know it then, but that ordinary, awful afternoon was the most useful thing that happened to me all year. I have been nervous many times since, in rooms far larger than that one. I have never again been quite that frightened. Looking back, I am almost grateful to the boy who forgot his name, because everything I can do now began with him.',
  ],
  markNote:
    'A strong response (toward S3-S4 on WAO1) maintains the autobiographical form throughout, selects one significant moment rather than summarising, and includes genuine hindsight ("I did not know it then…"). On WAO2, sentences are varied and correctly demarcated, with confident commas and dashes.',
}

export default async function AutobiographyBiographyPage() {
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
      url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types',
    },
    { name: 'Autobiography & biography', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

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
        <Link href="/ks3/ilowersecondary/text-types" className="hover:text-foreground">
          {await t('ks3.page.bc.text_types')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.text_types.autobiography_biography.bc')}</span>
      </p>

      <h1>Autobiography &amp; biography</h1>
      <p className="lead">
        A reading-and-writing guide to one of the non-fiction text types studied for LEH11 &mdash;
        how to recognise life writing, the features to spot, how examiners question it, and how to
        write your own for Section B. Every example below is original.
      </p>

      {/* ── Definition and difference ─────────────────────────────── */}
      <section className="my-10">
        <h2>Definition and difference</h2>
        <p className="text-sm text-muted-foreground">
          Both are life writing, listed in the specification as the text type{' '}
          <span className="font-mono text-foreground">&ldquo;{TEXT_TYPE_LABEL}&rdquo;</span>. The
          key difference is who is telling the story.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {DEFINITIONS.map((d) => (
            <div key={d.term} className="rounded-xl border border-primary/40 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {d.term}
              </p>
              <p className="text-xs text-primary mb-2">{d.person}</p>
              <p className="text-sm text-foreground leading-relaxed">{d.meaning}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Both are non-fiction, so they share the wider non-fiction purposes &mdash; most often to{' '}
          {NON_FICTION_PURPOSES.join(', ')}. Life writing usually sets out to inform and describe,
          but it also persuades the reader to see the subject in a particular way.
        </p>
      </section>

      {/* ── Typical conventions ───────────────────────────────────── */}
      <section className="my-10">
        <h2>Typical conventions</h2>
        <p className="text-sm text-muted-foreground">
          These are the building blocks writers use. Spotting them helps you read closely &mdash;
          and using them helps you write well.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {CONVENTIONS.map((c) => (
            <div key={c.focus} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {c.focus}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{c.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Language features to spot ─────────────────────────────── */}
      <section className="my-10">
        <h2>Language features to spot when reading</h2>
        <p className="text-sm text-muted-foreground">
          When an unseen text appears in Section A, scan for these signals. Each example is
          original.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {LANGUAGE_FEATURES.map((f) => (
            <div key={f.feature} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {f.feature}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{f.whatToSpot}</p>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;{f.example}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How examiners question this ───────────────────────────── */}
      <section className="my-10">
        <h2>How examiners might question these texts</h2>
        <div className="not-prose mt-2 rounded-xl border border-border/60 bg-card p-5">
          <dl className="grid gap-4 sm:grid-cols-2">
            {EXAM_FOCUS.map((e) => (
              <div key={e.focus} className="border-t border-border/60 pt-3">
                <dt className="text-sm font-semibold text-foreground">{e.focus}</dt>
                <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Original annotated extracts ───────────────────────────── */}
      <section className="my-10">
        <h2>Two original extracts, annotated for features</h2>
        <p className="text-sm text-muted-foreground">
          Both extracts below were written for this page about an invented person. Neither is
          reproduced from any real biography or past paper.
        </p>
        <div className="not-prose mt-4 space-y-6">
          {EXTRACTS.map((x) => (
            <div key={x.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {x.label}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{x.kind}</p>
              <div className="space-y-2 rounded-lg border border-border/60 bg-background p-4">
                {x.paragraphs.map((para, i) => (
                  <p key={i} className="text-sm text-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                Features annotated
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {x.annotations.map((a) => (
                  <li key={a.feature} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      →
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">{a.feature}:</span> {a.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice questions and model answers ──────────────────── */}
      <section className="my-10">
        <h2>Practice questions and model answers</h2>
        <p className="text-sm text-muted-foreground">
          Four questions on the extracts above, with model answers written in the Pearson mark
          style.
        </p>
        <div className="not-prose mt-4 space-y-4">
          <ol className="space-y-4">
            {PRACTICE.map((item, i) => (
              <li key={i}>
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  {i + 1}. {item.q}{' '}
                  <span className="font-normal text-muted-foreground">{item.marks}</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{item.ao}</p>
                <div className="mt-2 rounded-lg border border-primary/40 bg-background p-3">
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                    Model answer
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{item.model}</p>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                    Mark scheme guidance
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.markNote}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── How to write one for Section B ────────────────────────── */}
      <section className="my-10">
        <h2>How to write one for Section B</h2>
        <p className="text-sm text-muted-foreground">
          A Section B task may ask for autobiographical or biographical writing linked to the
          Section A theme. Work through these steps.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {WRITING_STEPS.map((s) => (
            <div key={s.step} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {s.step}
              </p>
              <p className="text-sm text-foreground leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Write the opening task ────────────────────────────────── */}
      <section className="my-10">
        <h2>Task: write the opening</h2>
        <div className="not-prose rounded-xl border border-primary/40 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Original writing task
          </p>
          <p className="text-sm text-foreground leading-relaxed">{WRITE_TASK.prompt}</p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Model opening
          </p>
          <div className="space-y-2 rounded-lg border border-border/60 bg-background p-4">
            {WRITE_TASK.model.map((para, i) => (
              <p key={i} className="text-sm text-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
            Mark scheme guidance
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{WRITE_TASK.markNote}</p>
        </div>
      </section>

      {/* ── Genre toolkit ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Genre toolkit</h2>
        <p className="text-sm text-muted-foreground">
          When you meet any non-fiction extract, use these guided-reading prompts from the
          iLowerSecondary Teacher&rsquo;s Guide to decide quickly whether it is autobiography or
          biography.
        </p>
        <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {GENRE_PROMPTS.map((prompt) => (
              <li key={prompt} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  →
                </span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ───────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
