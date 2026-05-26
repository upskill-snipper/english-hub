import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUESTION_TYPES, ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/question-types/short-answer'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: short open-response answers',
    description:
      'A masterclass on the 1- and 2-mark short open-response questions - answer length discipline, reading the question stem, quoting vs paraphrasing, and worked examples with weak and credited model answers.',
  },
  title: 'iLowerSecondary English: short open-response answers',
  description:
    'A masterclass on the 1- and 2-mark short open-response questions - answer length discipline, reading the question stem, quoting vs paraphrasing, and worked examples with weak and credited model answers.',
  alternates: { canonical: PAGE_URL },
}

const SHORT_RETRIEVAL = QUESTION_TYPES.find((q) => q.id === 'short-retrieval')!
const INFERENCE = QUESTION_TYPES.find((q) => q.id === 'inference')!
const RAO1 = ASSESSMENT_OBJECTIVES.RAO1
const RAO2 = ASSESSMENT_OBJECTIVES.RAO2

// ─── Pedagogy: the four habits of a short answer ──────────────────────

const HABITS = [
  {
    title: 'Match the length to the marks',
    detail:
      'A 1-mark item wants one precise piece of information; a 2-mark item wants that, plus a short development. One or two lines is enough. Extra sentences do not earn extra marks - they only cost you time you need for the high-tariff comparison and the writing task.',
  },
  {
    title: 'Answer the actual stem',
    detail:
      'Underline the question word. "Why…?" wants a reason. "How does…?" wants a method. "What does X mean…?" wants a meaning in your own words. If the answer you have written would not finish the sentence the question started, you have answered a different question.',
  },
  {
    title: 'Be specific, not vague',
    detail:
      'A general gist - "because it was bad" or "to make it interesting" - is not creditable. Name the exact reason, detail or idea the text gives. Specificity is what separates a mark from no mark on these items.',
  },
  {
    title: 'Quote or paraphrase deliberately',
    detail:
      'A short, exact quotation is fine for a retrieval point. For a meaning or inference, put it in your own words: a lift copied out without expansion shows nothing about your understanding and is not credited.',
  },
]

const WHY_VAGUE_FAILS = [
  'A vague reference could be true of almost any text - it does not prove you located the right place or understood the specific point, so the examiner cannot award the mark.',
  "A lift without expansion just re-copies the writer's words. On a retrieval item a precise lift can be enough; on a meaning or inference item it shows no understanding, so it is not credited.",
  'The mark scheme lists the creditable points. "Do not accept vague references" tells the examiner to withhold the mark when the answer is too general to match a listed point.',
  'Answering the wrong question stem - giving a reason when the stem asked "how", or vice versa - means the response, however neat, does not address what was assessed.',
]

// ─── Worked extracts (all original, written by The English Hub) ───────

type Worked = {
  id: string
  title: string
  context: string
  extract: string
  items: {
    q: string
    marks: 1 | 2
    weak: string
    weakNote: string
    model: string
    markNote: string
  }[]
}

const EXTRACTS: Worked[] = [
  {
    id: 'lighthouse',
    title: 'Extract A - The keeper (fiction)',
    context: 'Original third-person narrative written for this page.',
    extract:
      'Morag had kept the light for thirty winters, and not once had she let it fail. The lamp did not care that her hands were slower now, or that the stairs to the lantern room took her twice as long. Each evening she climbed them anyway, counting the steps aloud so the climb would feel shorter, and each evening the beam swung out across the water exactly when the boats expected it.',
    items: [
      {
        q: 'Why did Morag count the steps aloud?',
        marks: 1,
        weak: 'Because she was old and the stairs were hard.',
        weakNote:
          'Vague. The text gives a specific reason; "old" and "hard" are a general gist, not the point the writer makes.',
        model: 'So that the climb would feel shorter.',
        markNote:
          '1 mark for the specific reason given in the text (the climb feeling shorter / to make the climb feel easier). Do not accept vague references to age or tiredness alone.',
      },
      {
        q: 'How does the writer show that Morag is reliable? Use two details.',
        marks: 2,
        weak: 'She is reliable because she is a good keeper and people trust her.',
        weakNote:
          'No textual detail. The stem asks for two details from the extract; the answer offers opinion instead.',
        model:
          'She had kept the light for thirty winters and "not once" let it fail, and the beam swung out "exactly when the boats expected it".',
        markNote:
          '1 mark for each appropriate detail showing reliability (e.g. thirty winters without failure; the beam appearing exactly on time), to a maximum of 2. Lifts are acceptable here as they are the relevant details.',
      },
    ],
  },
  {
    id: 'market',
    title: 'Extract B - The night market (non-fiction recount)',
    context: 'Original first-person recount written for this page.',
    extract:
      'I had read that the market only came alive after dark, but I did not believe it until I arrived. By six the square was half-empty; by nine you could not move. Stallholders who had looked half-asleep an hour earlier were now calling out their prices over each other, and the smell of frying onions had replaced the dust of the afternoon.',
    items: [
      {
        q: 'Why did the writer not believe the market came alive after dark?',
        marks: 1,
        weak: 'Because markets are usually busy in the day.',
        weakNote:
          'Invented reasoning. The text gives the reason - the writer had only read it, not seen it.',
        model: 'Because they had only read about it and had not seen it for themselves.',
        markNote:
          '1 mark for the reason the text supplies (it was something read, not witnessed / not believed until seen). Do not accept general comments about markets.',
      },
      {
        q: 'What does the phrase "you could not move" suggest about the square by nine?',
        marks: 2,
        weak: 'It means it was busy.',
        weakNote:
          'Minimal. "Busy" restates without explaining what the phrase implies, so it cannot reach 2 marks.',
        model:
          'It suggests the square had become extremely crowded - so packed with people that there was no space to walk - which contrasts sharply with it being half-empty at six.',
        markNote:
          '1 mark for the implied meaning (extremely crowded / no room to move); 1 mark for development (the contrast with the half-empty earlier square). Do not accept an unexplained lift of the phrase.',
      },
    ],
  },
  {
    id: 'glacier',
    title: 'Extract C - Reading the ice (non-fiction explanation)',
    context: 'Original explanatory text written for this page.',
    extract:
      'A glacier looks still, but it is always moving. Snow falling near the top is slowly pressed into ice, and the weight of all that ice forces the whole mass to creep downhill - sometimes only a few centimetres a day. Scientists push thin stakes into the surface and return months later to measure how far each stake has travelled.',
    items: [
      {
        q: 'Why do scientists return months later to measure the stakes?',
        marks: 1,
        weak: 'To check on the glacier.',
        weakNote: 'Too vague to match the point. It does not say what the measurement shows.',
        model: 'To measure how far each stake - and so the ice - has moved.',
        markNote:
          '1 mark for the specific purpose (to measure how far the ice/stake has moved/travelled). Do not accept vague references such as "to check the glacier".',
      },
      {
        q: 'How does the writer make clear that a glacier is moving even though it looks still? Use the text.',
        marks: 2,
        weak: 'The writer says it moves a lot every day.',
        weakNote:
          'Inaccurate - the text says only a few centimetres a day. A wrong detail cannot be credited.',
        model:
          'The writer states it is "always moving" and explains the weight of the ice "forces the whole mass to creep downhill", even if only a few centimetres a day.',
        markNote:
          '1 mark for identifying the explanation (weight forces it to creep downhill); 1 mark for accurate supporting detail (always moving / a few centimetres a day). Accept precise lifts as the relevant evidence.',
      },
    ],
  },
  {
    id: 'letter',
    title: 'Extract D - A letter home (non-fiction, autobiographical)',
    context: 'Original autobiographical letter written for this page.',
    extract:
      'Dear Aunt Priya, I promise the food here is better than I made it sound on the phone. The first week I lived on bread because I was too shy to ask where anything was. Then a girl in my corridor took me to the canteen, pointed at everything, and named it for me. Now I eat with her every evening.',
    items: [
      {
        q: 'Why did the writer live on bread in the first week?',
        marks: 1,
        weak: 'Because the food was bad.',
        weakNote:
          'Contradicts the text - the writer says the food is good. The reason given is shyness.',
        model: 'Because they were too shy to ask where anything was.',
        markNote:
          '1 mark for the stated reason (too shy to ask / did not know where things were). Do not accept references to the food being bad.',
      },
      {
        q: 'What does the letter suggest has changed for the writer? Give two things.',
        marks: 2,
        weak: 'Things are better now.',
        weakNote: 'Unspecified. "Better" is a gist; the stem asks for two specific changes.',
        model:
          'They no longer eat only bread but eat properly in the canteen, and they now have a friend they eat with every evening rather than being alone and shy.',
        markNote:
          '1 mark for each appropriate change (eating properly in the canteen; having a companion / no longer isolated), to a maximum of 2.',
      },
    ],
  },
  {
    id: 'race',
    title: 'Extract E - The last lap (fiction)',
    context: 'Original third-person narrative written for this page.',
    extract:
      'On the final bend Dele heard the crowd before he saw them. His legs had stopped feeling like his own a hundred metres ago. He did not look at the runner beside him; he had learned, the hard way, that looking sideways was how you lost. He fixed his eyes on the line and let everything else fall away.',
    items: [
      {
        q: 'Why did Dele not look at the runner beside him?',
        marks: 1,
        weak: 'Because he was concentrating.',
        weakNote:
          'Partly relevant but not the point. The text gives a precise reason: looking sideways is how you lose.',
        model: 'Because he had learned that looking sideways was how you lost.',
        markNote:
          '1 mark for the specific reason from the text (looking sideways causes you to lose). Do not accept a vague reference to "concentrating".',
      },
      {
        q: 'What does "His legs had stopped feeling like his own" suggest about Dele?',
        marks: 2,
        weak: 'His legs were tired.',
        weakNote:
          'A bare lift-and-restate. "Tired" does not explain what the image implies, so it stays at 1 at best.',
        model:
          'It suggests he is so exhausted that his legs feel numb and detached from him, as though he is no longer in control of his own body in the final effort.',
        markNote:
          '1 mark for the implied meaning (extreme exhaustion / numbness); 1 mark for development (loss of control / pushing past his limit). Do not accept an unexplained lift.',
      },
    ],
  },
  {
    id: 'workshop',
    title: 'Extract F - The repair shop (non-fiction report)',
    context: 'Original report-style text written for this page.',
    extract:
      'The shop does not advertise. It does not need to. People bring in clocks that other repairers have already given up on, because word has spread that Mr Owusu will not return a clock until it keeps perfect time. He says a clock that is "nearly right" is just a clock that is wrong more slowly.',
    items: [
      {
        q: 'Why does the shop not need to advertise?',
        marks: 1,
        weak: 'Because it is a good shop.',
        weakNote:
          'Vague. The text gives a specific cause: its reputation has spread by word of mouth.',
        model: 'Because its reputation has spread by word of mouth.',
        markNote:
          '1 mark for the specific reason (word has spread / reputation brings customers in). Do not accept vague references to it being "good".',
      },
      {
        q: 'What does Mr Owusu mean by "a clock that is nearly right is just a clock that is wrong more slowly"?',
        marks: 2,
        weak: 'He means the clock is a bit wrong.',
        weakNote: 'Surface only. It repeats "wrong" without explaining the standard he is setting.',
        model:
          'He means that "nearly right" is not good enough - a clock that is slightly inaccurate is still inaccurate, just less obviously, so he insists on perfect accuracy before returning it.',
        markNote:
          '1 mark for the core meaning (nearly right still counts as wrong/inaccurate); 1 mark for development (he therefore demands perfect accuracy). Do not credit an unexplained restatement.',
      },
    ],
  },
]

export default async function ShortAnswerPage() {
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
            name: 'Question types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/question-types',
          },
          { name: 'Short answers', url: PAGE_URL },
        ]}
      />

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
        <Link href="/ks3/ilowersecondary/question-types" className="hover:text-foreground">
          Question types
        </Link>
        <span> · </span>
        <span>Short answers</span>
      </p>

      <h1>Short open-response answers: a masterclass</h1>
      <p className="lead">
        These are the {SHORT_RETRIEVAL.typicalMarks}- and 2-mark questions that begin
        &ldquo;Why&hellip;?&rdquo;, &ldquo;How does&hellip;?&rdquo; or &ldquo;What does X
        mean&hellip;?&rdquo;. They look easy, and they are &mdash; if you say one precise thing and
        stop. Most lost marks here are not lost to ignorance but to vagueness, padding and answering
        a question that was never asked.
      </p>

      <section className="my-10">
        <h2>What these questions assess</h2>
        <p>
          Short retrieval items sit under <strong>{RAO1.code}</strong> &mdash;{' '}
          {RAO1.descriptor.toLowerCase()} Short inference items sit under{' '}
          <strong>{RAO2.code}</strong> &mdash; {RAO2.descriptor.toLowerCase()} The first asks you to{' '}
          <em>find</em> something the text states; the second asks you to <em>work out</em>{' '}
          something the text implies.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[SHORT_RETRIEVAL, INFERENCE].map((q) => (
            <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-sm font-medium">{q.name}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  {q.ao}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  {q.typicalMarks} mark{q.typicalMarks === 1 ? '' : 's'} (typical)
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Format: </span>
                {q.format}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">How to answer: </span>
                {q.howToAnswer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>The four habits of a short answer</h2>
        <div className="not-prose my-6 space-y-3">
          {HABITS.map((h, i) => (
            <div key={h.title} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="text-sm font-medium">
                <span className="font-mono text-primary mr-2">{i + 1}.</span>
                {h.title}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>1-mark vs 2-mark: what changes</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border/60 bg-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="p-4 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  Aspect
                </th>
                <th className="p-4 font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  1-mark answer
                </th>
                <th className="p-4 font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  2-mark answer
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                {
                  a: 'What it wants',
                  one: 'One precise, correct piece of information or one accurate inference.',
                  two: 'A correct point plus a short development, or two separate creditable details.',
                },
                {
                  a: 'Length',
                  one: 'A phrase or one short sentence.',
                  two: 'One to two short sentences - no more.',
                },
                {
                  a: 'Quote or paraphrase',
                  one: 'A precise lift can be enough for retrieval; paraphrase for meaning.',
                  two: 'Brief evidence and an explanation in your own words.',
                },
                {
                  a: 'How marks are lost',
                  one: 'Vague gist; wrong detail; answering the wrong stem.',
                  two: 'Same, plus stopping at the point with no development, or an unexplained lift.',
                },
              ].map((r) => (
                <tr key={r.a} className="border-b border-border/40 last:border-0">
                  <td className="p-4 font-medium text-foreground align-top">{r.a}</td>
                  <td className="p-4 align-top leading-relaxed">{r.one}</td>
                  <td className="p-4 align-top leading-relaxed">{r.two}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          The jump from one mark to two is not &ldquo;write more&rdquo; &mdash; it is &ldquo;say a
          second creditable thing&rdquo;. Padding a 1-mark answer never reaches the second mark; a
          precise, developed sentence does.
        </p>
      </section>

      <section className="my-10">
        <h2>Why &ldquo;do not accept vague references / lifts&rdquo;?</h2>
        <p>
          Mark schemes for these items repeatedly say <em>do not accept vague references</em> and{' '}
          <em>do not credit unexplained lifts</em>. This is not the examiner being harsh &mdash; it
          follows from what the question assesses:
        </p>
        <ul className="not-prose my-4 space-y-2">
          {WHY_VAGUE_FAILS.map((w) => (
            <li key={w} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">·</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10">
        <h2>Worked extracts</h2>
        <p>
          Every extract below is an <strong>original text written for this page</strong> &mdash; no
          past paper material is reproduced. For each, compare the weak answer with the credited
          model answer and read the mark note, which is written in the style Pearson examiners use.
        </p>
        <div className="not-prose my-6 space-y-8">
          {EXTRACTS.map((ex) => (
            <article key={ex.id} className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <h3 className="text-base font-semibold text-foreground">{ex.title}</h3>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  {ex.context}
                </span>
              </div>
              <blockquote className="border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground italic">
                {ex.extract}
              </blockquote>

              <div className="mt-5 space-y-5">
                {ex.items.map((it) => (
                  <div key={it.q} className="rounded-lg border border-border/50 p-4">
                    <p className="text-sm font-medium text-foreground">
                      {it.q}{' '}
                      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary ml-1">
                        {it.marks} mark{it.marks === 1 ? '' : 's'}
                      </span>
                    </p>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-md border border-destructive/30 bg-destructive/5 p-3">
                        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-destructive mb-1">
                          Weak answer
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          &ldquo;{it.weak}&rdquo;
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                          <span className="font-medium text-foreground">Why it fails: </span>
                          {it.weakNote}
                        </p>
                      </div>
                      <div className="rounded-md border border-primary/30 bg-primary/5 p-3">
                        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary mb-1">
                          Credited model
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          &ldquo;{it.model}&rdquo;
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                      <span className="font-medium text-foreground">Mark note: </span>
                      {it.markNote}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>One last check before you move on</h2>
        <p>
          Re-read your answer against the question word. Does it{' '}
          <em>finish the sentence the question started</em>? Is it specific enough that it could
          only be true of this text? Is it the right length for the marks? If yes to all three, move
          on &mdash; the marks you save here are the marks you spend on the comparison and the
          writing task.
        </p>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
        <p className="text-[11px] leading-relaxed text-muted-foreground mt-2">
          All practice extracts on this page are original works written by The English Hub for
          instructional purposes and are not reproduced from any Pearson source booklet or past
          paper. Question stems and mark notes illustrate the published mark-scheme conventions and
          are used here for criticism and instruction under fair dealing.
        </p>
      </footer>
    </>
  )
}
