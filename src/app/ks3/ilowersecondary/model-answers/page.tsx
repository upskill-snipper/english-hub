import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUESTION_TYPES,
  ASSESSMENT_OBJECTIVES,
  WAO1_GRID,
  WAO2_GRID,
  COMPARISON_LEVELS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/model-answers'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English model answers (LEH11)',
    description:
      'A curated bank of full-mark, original exemplar answers for every LEH11/01 question type, each with an examiner-style annotation tied to the official mark grids.',
  },
  title: 'iLowerSecondary English model answers (LEH11)',
  description:
    'A curated bank of full-mark, original exemplar answers for every LEH11/01 question type, each with an examiner-style annotation tied to the official mark grids.',
  alternates: { canonical: PAGE_URL },
}

// ─── Exemplar bank (all stimuli, questions and answers ORIGINAL) ──────

type Exemplar = {
  id: string
  /** Matches a QUESTION_TYPES id so AO / marks / format come from spec. */
  typeId: string
  stimulusLabel: string
  /** Original short text written for this page only. */
  stimulus: string
  question: string
  /** Each line is one paragraph / point of the model answer. */
  answer: string[]
  /** Examiner annotation - why it reaches the top band. */
  annotation: string
  /** One-line top-vs-average contrast. */
  topVsAverage: string
}

const READING_EXEMPLARS: Exemplar[] = [
  {
    id: 'synonym-select',
    typeId: 'synonym-select',
    stimulusLabel: 'Non-fiction - report',
    stimulus:
      'The new footbridge across the canal proved remarkably durable, surviving three winters of frost without a single repair.',
    question:
      'Circle the word that is closest in meaning to “durable” as it is used in the sentence: fragile / hard-wearing / colourful / expensive.',
    answer: ['hard-wearing'],
    annotation:
      'Awards the single mark because the chosen word substitutes for “durable” without altering the meaning of the sentence - the context (“surviving three winters … without a single repair”) confirms toughness over time. Only one option is circled, as the closed format requires.',
    topVsAverage:
      'A top answer reads the word in context and tests the substitution; an average answer is distracted by a word that merely appears near it (“expensive”).',
  },
  {
    id: 'short-retrieval',
    typeId: 'short-retrieval',
    stimulusLabel: 'Non-fiction - recount',
    stimulus:
      'We set off at dawn because the guide warned that the mountain path becomes dangerously slippery once the afternoon mist rolls in.',
    question: 'Why did the group set off at dawn?',
    answer: [
      'They left at dawn so they could cross the path before the afternoon mist made it dangerously slippery.',
    ],
    annotation:
      'Earns the retrieval mark with a precise, specific reason drawn directly from the text and recast in the candidate’s own words. It pinpoints the exact cause (the mist making the path slippery) rather than offering a vague gist such as “to be safe”.',
    topVsAverage:
      'A top answer gives the specific stated reason; an average answer paraphrases so loosely that the actual cause is lost.',
  },
  {
    id: 'multiple-choice',
    typeId: 'multiple-choice',
    stimulusLabel: 'Fiction - mystery',
    stimulus:
      'Mara turned the brass key over and over, her thumb tracing its worn teeth, as though the metal itself might whisper where the locked room’s secret lay.',
    question:
      'What does the phrase “as though the metal itself might whisper” suggest about Mara? Cross one box: A she is bored - B she is hopeful the key will reveal something - C she dislikes the key - D she is asleep.',
    answer: ['B - she is hopeful the key will reveal something'],
    annotation:
      'Selects the option that the figurative phrase supports in context: personifying the key as able to “whisper” a secret implies Mara’s longing for a clue. The distractors are tested and rejected because none fits the alert, searching behaviour described.',
    topVsAverage:
      'A top answer re-reads the quoted phrase and eliminates distractors; an average answer picks the first option that looks plausible without checking the context.',
  },
  {
    id: 'punctuation-effect',
    typeId: 'punctuation-effect',
    stimulusLabel: 'Fiction - adventure',
    stimulus: 'The rope snapped - and the whole crate plunged into the river.',
    question: 'What is the effect of the dash in this sentence? (2 marks)',
    answer: [
      'The dash creates a sudden pause that builds tension before the outcome is revealed.',
      'This makes the crate falling feel abrupt and shocking to the reader, mirroring how quickly the accident happens.',
    ],
    annotation:
      'One mark for naming the structural effect of the dash (a tension-building pause); the second mark for an explanation tied to the content (the abruptness of the crate plunging). It does not merely label the punctuation - it explains its impact on the reader.',
    topVsAverage:
      'A top answer names the effect and links it to what happens in the text; an average answer only states “it makes you stop” with no connection to meaning.',
  },
  {
    id: 'meaning-impact',
    typeId: 'meaning-impact',
    stimulusLabel: 'Non-fiction - blog',
    stimulus:
      'For the volunteers, every cleared beach was a small flag planted against an ocean of plastic.',
    question:
      'What did the writer mean by “a small flag planted against an ocean of plastic”, and what is the effect on the reader? (2 marks)',
    answer: [
      'The writer means that each cleaned beach is only a tiny, hard-won victory set against an overwhelming, vast problem of pollution.',
      'The image of a lone flag against an “ocean” makes the reader feel both the scale of the challenge and admiration for the volunteers’ determination.',
    ],
    annotation:
      'The first mark is for explaining the deeper meaning of the metaphor (a small victory against a huge problem); the second for the effect on the reader (scale plus admiration). The image is interpreted, not lifted unexplained, which the mark scheme requires.',
    topVsAverage:
      'A top answer unpacks the metaphor and names the reader’s response; an average answer simply re-quotes the phrase and says “it sounds powerful”.',
  },
  {
    id: 'underline-word-class',
    typeId: 'underline-word-class',
    stimulusLabel: 'Non-fiction - instructions',
    stimulus: 'Switch off the power before you open the casing.',
    question: 'Underline the imperative verb in the sentence: Switch / power / before / casing.',
    answer: ['Switch'],
    annotation:
      'Awards the mark because “Switch” is correctly identified as the imperative verb - a command form addressing the reader directly, typical of instructions. Grammatical terminology is applied precisely and only the verb, not a noun or preposition, is underlined.',
    topVsAverage:
      'A top answer applies the grammatical label exactly; an average answer underlines any action-related word without checking its word class.',
  },
  {
    id: 'feature-tick-table',
    typeId: 'feature-tick-table',
    stimulusLabel: 'Two non-fiction texts',
    stimulus:
      'Text 1: “Can a city really run on sunlight alone? The engineers think so.” Text 2: “The mayor’s plan - bold, costly and untested - divided the council.”',
    question:
      'Tick which text uses each feature: (a) a question mark; (b) a pair of dashes for an aside. (2 marks)',
    answer: ['(a) A question mark - Text 1.', '(b) A pair of dashes for an aside - Text 2.'],
    annotation:
      'Both rows are correct: the rhetorical question is scanned and found only in Text 1, and the parenthetical dashes only in Text 2. Each named feature is matched to the right text, securing full marks; partial credit would apply if only one row were right.',
    topVsAverage:
      'A top answer scans both texts feature by feature; an average answer guesses “both” when unsure rather than checking each text.',
  },
  {
    id: 'inference',
    typeId: 'inference',
    stimulusLabel: 'Fiction - historical',
    stimulus:
      'Tomas slid the last coin back into his pocket and told the baker he had already eaten, though his stomach tightened at the smell of warm bread.',
    question: 'Why did Tomas say he had already eaten? (1 mark)',
    answer: [
      'He could not afford the bread and did not want to admit he was hungry, so he hid it with a polite excuse.',
    ],
    annotation:
      'A single accurate inference earns the mark. The candidate reads beyond the literal - linking the saved coin and the tightening stomach - to deduce the unstated reason (he was poor and proud) rather than restating that he “said he had eaten”.',
    topVsAverage:
      'A top answer states the implied reason from the evidence; an average answer repeats the literal action without explaining the motive.',
  },
  {
    id: 'language-structure-analysis',
    typeId: 'language-structure-analysis',
    stimulusLabel: 'Fiction - science fiction',
    stimulus:
      'The station hummed. Lights flickered, then died. In the sudden, swallowing dark, Ada heard only her own breathing - quick, shallow, far too loud.',
    question:
      'How does the writer use language and structure to create a sense of fear in this extract? (4 marks)',
    answer: [
      'The writer uses a short, blunt sentence - “The station hummed.” - followed by the abrupt “then died”, and the structural shift from sound to silence makes the danger feel sudden and out of the character’s control.',
      'At word level, the metaphor “swallowing dark” and the listed adjectives “quick, shallow, far too loud” isolate Ada with her own panicked body, so the reader shares her growing fear and claustrophobia.',
    ],
    annotation:
      'Two developed points, each with embedded evidence and an explanation of the effect on the reader (RAO4 language + RAO5 effect): one on sentence structure / organisation, one on word-level choices. Two marks per developed, evidenced point reaches the full four.',
    topVsAverage:
      'A top answer makes two points each with evidence and a clear effect; an average answer spots a device but never explains what it does to the reader.',
  },
  {
    id: 'which-text-appealing',
    typeId: 'which-text-appealing',
    stimulusLabel: 'Two non-fiction texts',
    stimulus:
      'Text 1 describes a coral reef as “a city of colour that breathes with the tide”. Text 2 lists reef facts in plain bullet points with figures and dates.',
    question:
      'Which text do you find more appealing, and why? Support your answer with evidence. (2 marks)',
    answer: [
      'I find Text 1 more appealing because its vivid imagery brings the reef to life and makes me want to read on.',
      'The metaphor “a city of colour that breathes with the tide” paints a living, moving picture, which is far more engaging than Text 2’s plain list of figures.',
    ],
    annotation:
      'One mark for a reasonable, clearly reasoned preference; one mark for appropriate textual evidence (the quoted metaphor) that genuinely supports the preference, rather than evidence quoted with no link to the judgement.',
    topVsAverage:
      'A top answer ties a specific quotation to a clear reason for the preference; an average answer states a preference but offers no evidence.',
  },
  {
    id: 'comparison-6-mark',
    typeId: 'comparison-6-mark',
    stimulusLabel: 'Two non-fiction texts',
    stimulus:
      'Text 1: “The flood took everything in minutes; we stood in the rain and watched our home become a river.” Text 2: “Flood-defence spending must rise by 30% if coastal towns are to remain viable, the report concludes.”',
    question:
      'Compare how the writers of Text 1 and Text 2 use these quotations to reflect their different purposes. (6 marks)',
    answer: [
      'Both writers respond to flooding, but their purposes contrast sharply. Text 1 is written to make the reader feel the personal loss, while Text 2 is written to argue for a policy change.',
      'At word level, Text 1’s emotive choices - “took everything”, “watched our home become a river” - position the reader to share the survivor’s grief and helplessness. Text 2 instead uses the precise, impersonal “must rise by 30%” and “the report concludes” to sound authoritative and to press for action.',
      'The effect on the reader differs accordingly: Text 1 builds empathy and a sense of human cost, whereas Text 2 builds a logical, urgent case for funding. The explicit contrast is therefore one of an emotional eyewitness recount against a measured, persuasive argument.',
    ],
    annotation:
      'This sits in the top level of COMPARISON_LEVELS: a clear explanation of the contrast that covers all three required strands together - interpreting ideas (personal loss vs policy need), language at word level (emotive vs impersonal/statistical), and each writer’s purpose with the effect on the reader. The comparison is explicit and developed, not an implicit comment, which is what separates the top level from the lower two.',
    topVsAverage:
      'A top answer explains the contrast explicitly across all three strands; an average answer comments on each text separately and only implies a difference.',
  },
]

const WRITING_EXEMPLARS: Exemplar[] = [
  {
    id: 'writing-task',
    typeId: 'writing-task',
    stimulusLabel: 'Section B - extended writing (30 marks)',
    stimulus: 'Linked to a Section A theme of protecting the natural world.',
    question:
      'Write a letter to the editor of a national newspaper persuading readers that every school should plant and care for its own garden. (30 marks)',
    answer: [
      'Dear Editor, I am writing because I believe a simple square of soil could change how a whole generation sees the world - and it costs almost nothing.',
      'Every school, however small its budget, can find a corner for a garden. When pupils plant a seed in March and harvest beans in July, they learn patience, responsibility and science in a way no textbook can match. They also eat what they grow, and a child who has grown a vegetable is far more likely to value it.',
      'Some will object that gardens are a luxury when timetables are crowded. Yet thirty minutes outside, hands in the earth, sharpens concentration for the lessons that follow; it is not lost time but invested time. Moreover, a garden tended by hundreds of pupils becomes a shared promise to look after something beyond ourselves.',
      'So I urge your readers to ask one question at their next school meeting: where is our garden? The answer could be growing within a year. Yours faithfully, A. Reader.',
    ],
    annotation:
      'WAO1 (top band, 15-18): the letter form is adapted and controlled for purpose with a sophisticated awareness of the newspaper audience, paragraphs are organised with complete control and full coherence (hook → benefits → counter-argument → call to action), and stylistic features - the rhetorical question, direct address and the “invested time” antithesis - confidently support the persuasive purpose. WAO2 (top band, 10-12): sentences are grammatically assured and varied in length and opening, punctuation is used with sophistication (the dash, semicolon and colon all deployed for effect), and vocabulary is ambitious and accurate. Together this reaches the top of both the WAO1 and WAO2 grids.',
    topVsAverage:
      'A top answer adapts the form for purpose, handles a counter-argument and varies sentences with assured punctuation; an average answer states benefits in a flat, repetitive structure with safe, simple sentences.',
  },
]

// ─── UI helpers ──────────────────────────────────────────────────────

function ExemplarCard({ exemplar }: { exemplar: Exemplar }) {
  const type = QUESTION_TYPES.find((t) => t.id === exemplar.typeId)
  if (!type) return null

  return (
    <article className="rounded-xl border border-border/60 bg-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">{type.name}</h3>
        <span className="font-mono text-xs text-primary">
          {type.typicalMarks} {type.typicalMarks === 1 ? 'mark' : 'marks'} · {type.ao}
        </span>
      </div>
      <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
        {type.format}
      </p>

      <div className="mt-4">
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
          Original stimulus · {exemplar.stimulusLabel}
        </p>
        <p className="rounded-lg border border-border/60 bg-background/40 p-3 text-sm italic text-foreground leading-relaxed">
          {exemplar.stimulus}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
          Question
        </p>
        <p className="text-sm text-foreground leading-relaxed">{exemplar.question}</p>
      </div>

      <details className="mt-4 rounded-lg border border-border/60 bg-background/40">
        <summary className="cursor-pointer select-none px-3 py-2 font-mono text-[11px] tracking-[0.14em] uppercase text-primary">
          Reveal the full-mark model answer
        </summary>
        <div className="border-t border-border/60 px-3 py-3">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Model answer
          </p>
          <div className="space-y-2 text-sm text-foreground leading-relaxed">
            {exemplar.answer.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <p className="mt-4 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Examiner annotation
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{exemplar.annotation}</p>
        </div>
      </details>

      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Top vs average: </span>
        {exemplar.topVsAverage}
      </p>
    </article>
  )
}

export default async function ModelAnswersPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Model answers', url: PAGE_URL },
  ]

  const rao = ASSESSMENT_OBJECTIVES.RAO5
  const wao1 = ASSESSMENT_OBJECTIVES.WAO1
  const wao2 = ASSESSMENT_OBJECTIVES.WAO2
  const topComparison = COMPARISON_LEVELS[COMPARISON_LEVELS.length - 1]
  const topWao1 = WAO1_GRID[WAO1_GRID.length - 1]
  const topWao2 = WAO2_GRID[WAO2_GRID.length - 1]

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
        <span>{await t('ks3.page.model_answers.bc')}</span>
      </p>

      <h1>iLowerSecondary English model answers</h1>
      <p className="lead">
        A curated bank of full-mark exemplar responses for every question type on the LEH11/01
        achievement test. Each example pairs an original stimulus with the question, a top-band
        model answer and an examiner-style annotation explaining exactly why it earns each mark.
      </p>

      <div className="not-prose my-6 rounded-xl border border-primary/40 bg-primary/5 p-4">
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold">Every text on this page is original.</span> All stimuli,
          questions and answers below were written by The English Hub for teaching purposes. None is
          reproduced from any past paper, source booklet or published novel. Marking language
          follows the official assessment objectives and mark grids only.
        </p>
      </div>

      {/* ── Section A: Reading ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>Section A: Reading</h2>
        <p className="text-sm text-muted-foreground">
          The reading question types, in the order they typically appear, from one-mark closed items
          to the levelled six-mark comparison. The comparison annotation is tied to the levelled
          grid; effect and viewpoint marks reflect{' '}
          <span className="font-mono text-primary">{rao.code}</span> -{' '}
          {rao.descriptor.toLowerCase()}
        </p>
        <div className="not-prose mt-4 grid gap-4">
          {READING_EXEMPLARS.map((ex) => (
            <ExemplarCard key={ex.id} exemplar={ex} />
          ))}
        </div>

        <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-4">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Why the six-mark comparison reaches the top level
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-mono text-primary">
              {topComparison.level} ({topComparison.marks})
            </span>{' '}
            - {topComparison.descriptor}
          </p>
        </div>
      </section>

      {/* ── Section B: Writing ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>Section B: Writing</h2>
        <p className="text-sm text-muted-foreground">
          The single extended writing task is marked on{' '}
          <span className="font-mono text-primary">{wao1.code}</span> (
          {wao1.descriptor.toLowerCase()}) and{' '}
          <span className="font-mono text-primary">{wao2.code}</span> (
          {wao2.descriptor.toLowerCase()}). The annotation below shows how the exemplar reaches the
          top band of each grid.
        </p>
        <div className="not-prose mt-4 grid gap-4">
          {WRITING_EXEMPLARS.map((ex) => (
            <ExemplarCard key={ex.id} exemplar={ex} />
          ))}
        </div>

        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {wao1.code} top band - {topWao1.level} ({topWao1.marks})
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {topWao1.descriptors.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {wao2.code} top band - {topWao2.level} ({topWao2.marks})
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {topWao2.descriptors.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
