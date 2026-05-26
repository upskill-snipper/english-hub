import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { QUESTION_TYPES, ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/question-types/meaning-impact'

export const metadata: Metadata = {
  openGraph: {
    title: 'Meaning & impact questions - iLowerSecondary English masterclass',
    description:
      'Master the "What did the writer mean…?", "Explain the impact…" and "How does the writer show…?" reading questions for Pearson iLowerSecondary English (LEH11). Worked extracts, weak vs model answers, mark splits and a sentence-frame toolkit.',
  },
  title: 'Meaning & impact questions - iLowerSecondary English masterclass',
  description:
    'Master the "What did the writer mean…?", "Explain the impact…" and "How does the writer show…?" reading questions for Pearson iLowerSecondary English (LEH11). Worked extracts, weak vs model answers, mark splits and a sentence-frame toolkit.',
  alternates: { canonical: PAGE_URL },
}

// ── Spec-derived question-type metadata (numbers never restated inline) ──
const MEANING_IMPACT = QUESTION_TYPES.find((q) => q.id === 'meaning-impact')!
const HOW_SHOWN = QUESTION_TYPES.find((q) => q.id === 'language-structure-analysis')!
const RAO4 = ASSESSMENT_OBJECTIVES.RAO4
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5

// ── Original short extracts (written by The English Hub - no past-paper text) ──

type ShortItem = {
  id: string
  source: string
  extract: string
  stem: string
  weak: string
  weakWhy: string
  model: string
  markSplit: { mark: string; criterion: string }[]
}

const TWO_MARK_ITEMS: ShortItem[] = [
  {
    id: 'lighthouse',
    source: 'From an original travel article, “The Last Keeper”',
    extract:
      'The lighthouse had not blinked for thirty years, yet the old keeper still climbed its rusting stair every dawn, as if the sea might forget him if he stopped.',
    stem: 'What did the writer mean by “as if the sea might forget him if he stopped”?',
    weak: 'It means the sea might forget him if he stopped climbing the stairs.',
    weakWhy:
      'This is an unexplained lift: it copies the writer’s phrase and adds nothing. The mark scheme does not credit repeating the words - you must explain the deeper meaning and the effect.',
    model:
      'The writer suggests the keeper feels his whole identity depends on the routine - without it he would be unremembered and purposeless. This makes the reader feel sympathy for a man clinging to a job the world has moved past.',
    markSplit: [
      {
        mark: '1 mark',
        criterion:
          'Explains the implied meaning (his sense of purpose / fear of being forgotten depends on the routine).',
      },
      {
        mark: '1 mark',
        criterion: 'Explains the effect on the reader (e.g. evokes sympathy / poignancy).',
      },
    ],
  },
  {
    id: 'market',
    source: 'From an original recount, “Saturday Market”',
    extract:
      'The stallholder’s voice cut through the crowd like a blade, and shoppers turned the way iron filings turn to a magnet.',
    stem: 'Explain the impact of the comparison “shoppers turned the way iron filings turn to a magnet”.',
    weak: 'The shoppers turned like iron filings to a magnet because of the voice.',
    weakWhy:
      'This restates the simile without explaining what it shows or how it affects the reader, so it stays at zero developed analysis.',
    model:
      'The simile presents the shoppers as powerless and automatic, pulled in without choice, which shows how commanding the stallholder is. It makes the reader picture an instant, irresistible reaction and admire the seller’s control of the crowd.',
    markSplit: [
      {
        mark: '1 mark',
        criterion:
          'Explains the meaning of the comparison (shoppers are drawn irresistibly / have no choice).',
      },
      {
        mark: '1 mark',
        criterion:
          'Explains the effect on the reader (vivid image of instant pull; impression of the seller’s power).',
      },
    ],
  },
  {
    id: 'storm',
    source: 'From an original piece of descriptive fiction, “The Crossing”',
    extract:
      'The storm did not arrive so much as take possession, moving into the valley like a landlord who had decided the tenants had stayed too long.',
    stem: 'What did the writer mean by describing the storm as “a landlord who had decided the tenants had stayed too long”?',
    weak: 'The writer means the storm was like a landlord and the tenants had stayed too long.',
    weakWhy:
      'A direct lift with no interpretation. It does not say what the personification implies or how it shapes the reader’s response.',
    model:
      'The writer means the storm behaves with cold authority, as though it owns the valley and the people are unwelcome guests being evicted. This makes the reader feel the villagers are small and powerless against nature’s claim on the land.',
    markSplit: [
      {
        mark: '1 mark',
        criterion:
          'Explains the implied meaning (storm has total ownership / authority; people are unwelcome).',
      },
      {
        mark: '1 mark',
        criterion: 'Explains the effect on the reader (sense of human powerlessness / threat).',
      },
    ],
  },
  {
    id: 'letter',
    source: 'From an original autobiographical extract, “My Grandmother’s Hands”',
    extract:
      'My grandmother’s hands were a map of every winter she had survived, each line a road she would never tell me about.',
    stem: 'Explain the impact of the phrase “a map of every winter she had survived”.',
    weak: 'It means her hands were like a map of the winters she survived.',
    weakWhy:
      'This swaps two words but is still a lift. There is no explanation of the metaphor’s meaning or its effect on the reader.',
    model:
      'The metaphor suggests her hands record a hard life of hardship and endurance that words cannot fully capture. It makes the reader feel respect for her resilience and curiosity about the silent history she carries.',
    markSplit: [
      {
        mark: '1 mark',
        criterion: 'Explains the meaning (hands record a long, hard, surviving life).',
      },
      {
        mark: '1 mark',
        criterion: 'Explains the effect on the reader (admiration / intrigue about her past).',
      },
    ],
  },
  {
    id: 'factory',
    source: 'From an original report, “The Closing of Number Four”',
    extract:
      'When the last machine fell silent, the factory did not feel empty - it felt as though it were holding its breath, waiting for workers who would not come back.',
    stem: 'What did the writer mean by saying the factory “felt as though it were holding its breath”?',
    weak: 'It means the factory was holding its breath and waiting for the workers.',
    weakWhy:
      'Unexplained lift again. It repeats the personification without unpacking the meaning or the reader effect, so it scores nothing for analysis.',
    model:
      'The writer means the silence is tense and expectant rather than peaceful, as if the building itself mourns the loss of the people who gave it life. This makes the reader feel a heavy sense of loss and finality about the closure.',
    markSplit: [
      {
        mark: '1 mark',
        criterion:
          'Explains the implied meaning (tense, expectant, grieving silence - not mere emptiness).',
      },
      {
        mark: '1 mark',
        criterion: 'Explains the effect on the reader (sadness / sense of finality and loss).',
      },
    ],
  },
]

type HowItem = {
  id: string
  source: string
  extract: string
  stem: string
  weak: string
  weakWhy: string
  points: { point: string; evidence: string; effect: string }[]
}

const HOW_ITEM: HowItem = {
  id: 'first-day',
  source: 'From an original narrative extract, “First Day Down the Mine”',
  extract:
    'The cage dropped, and the daylight shrank to a coin above my head. The walls breathed coal dust. Somewhere below, men were already singing, and I could not tell if the song was bravery or a way of forgetting where they were.',
  stem: 'How does the writer show that the narrator finds the mine frightening?',
  weak: 'The writer shows it is frightening because the cage dropped and the walls breathed coal dust and the men were singing below.',
  weakWhy:
    'This lists quotations but never explains the effect of any of them, and it makes only one undeveloped idea. For a 4-mark “how does the writer show…?” item you need two developed points, each with evidence and an explanation of the effect.',
  points: [
    {
      point: 'The writer shrinks the safe, familiar world as the narrator descends.',
      evidence: '“the daylight shrank to a coin above my head”',
      effect:
        'The image of light reduced to a tiny “coin” shows how cut off and trapped the narrator feels, making the reader sense the danger of being so far underground.',
    },
    {
      point: 'The writer hints that even the experienced miners are uneasy.',
      evidence: '“I could not tell if the song was bravery or a way of forgetting where they were”',
      effect:
        'By questioning whether the singing is courage or denial, the writer suggests fear is normal here, which deepens the reader’s sense of how genuinely frightening the place is.',
    },
  ],
}

// ── Sentence-frame toolkit ──────────────────────────────────────────────

const SENTENCE_FRAMES: { stage: string; frames: string[] }[] = [
  {
    stage: 'Open with the meaning',
    frames: [
      'The writer suggests that…',
      'By using ___, the writer implies that…',
      'This phrase shows that…',
      'Here the writer means that…',
    ],
  },
  {
    stage: 'Develop the effect on the reader',
    frames: [
      '…which makes the reader feel…',
      '…so the reader pictures / imagines…',
      '…this creates a sense of ___ for the reader.',
      '…which encourages the reader to…',
    ],
  },
  {
    stage: 'Join meaning + effect in one move',
    frames: [
      'This suggests ___, which makes the reader…',
      'The word/image ___ implies ___, so the reader feels…',
      'The writer’s choice of ___ has the effect of ___ on the reader.',
    ],
  },
]

export default async function MeaningImpactPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
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
    { name: 'Meaning & impact', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary/question-types" className="hover:text-foreground">
          Question types
        </Link>
        <span> · </span>
        <span>Meaning &amp; impact</span>
      </p>

      <h1>Meaning &amp; impact questions: a masterclass</h1>
      <p className="lead">
        This guide trains you on the reading questions that ask{' '}
        <strong>“What did the writer mean by…?”</strong>, <strong>“Explain the impact of…”</strong>{' '}
        and <strong>“How does the writer show…?”</strong> - short open-response items that reward
        genuine explanation, not copied words.
      </p>

      {/* ── What these questions assess ─────────────────────────────── */}
      <section className="my-10">
        <h2>What these questions assess</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
              {MEANING_IMPACT.name}
            </p>
            <p className="text-sm text-foreground mb-2">
              {MEANING_IMPACT.format} Assessed against {MEANING_IMPACT.ao}.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {MEANING_IMPACT.howToAnswer}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
              {HOW_SHOWN.name}
            </p>
            <p className="text-sm text-foreground mb-2">
              {HOW_SHOWN.format} Assessed against {HOW_SHOWN.ao}.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{HOW_SHOWN.howToAnswer}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
              {RAO4.code}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{RAO4.descriptor}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
              {RAO5.code}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{RAO5.descriptor}</p>
          </div>
        </div>
      </section>

      {/* ── The golden rule ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The golden rule: explain meaning AND effect</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every mark on these questions is earned by <strong>explanation</strong>. A two-part answer
          almost always works:
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Part 1 - Meaning
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              What does the writer actually mean here? Put the implied idea in your own words. Do
              not just repeat the quotation.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Part 2 - Effect on the reader
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              What does this make the reader think, feel, picture or understand? This is the half
              most students forget.
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          For a four-mark <strong>“How does the writer show…?”</strong> question, do this twice:
          make <strong>two developed points</strong>, each carrying its own evidence and an
          explanation of the effect - two marks for each developed point with evidence.
        </p>
      </section>

      {/* ── Worked two-mark items ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Worked examples: two-mark meaning &amp; impact</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Each extract below is original. Read the stem, see why the weak answer fails, then study
          the model and the Pearson-style mark split.
        </p>
        <div className="not-prose mt-6 space-y-6">
          {TWO_MARK_ITEMS.map((item) => (
            <article key={item.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {item.source}
              </p>
              <blockquote className="border-l-2 border-primary pl-4 text-sm text-foreground italic leading-relaxed">
                {item.extract}
              </blockquote>
              <p className="text-sm font-semibold text-foreground mt-4">Q: {item.stem}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-3">
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-destructive mb-1">
                    Weak answer (0 marks)
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-2">“{item.weak}”</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.weakWhy}</p>
                </div>
                <div className="rounded-lg border border-primary/40 bg-primary/5 p-3">
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                    Model answer (full marks)
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">“{item.model}”</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-border/60 p-3">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                  Mark split (Pearson style)
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {item.markSplit.map((m) => (
                    <li key={m.mark} className="flex gap-2">
                      <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap">
                        {m.mark}
                      </span>
                      <span className="leading-relaxed">{m.criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Worked four-mark "how does the writer show" ─────────────── */}
      <section className="my-10">
        <h2>Worked example: four-mark “How does the writer show…?”</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Here the mark scheme rewards <strong>two developed points</strong>, each worth two marks:
          one mark for relevant evidence and one for explaining its effect.
        </p>
        <article className="not-prose mt-6 rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            {HOW_ITEM.source}
          </p>
          <blockquote className="border-l-2 border-primary pl-4 text-sm text-foreground italic leading-relaxed">
            {HOW_ITEM.extract}
          </blockquote>
          <p className="text-sm font-semibold text-foreground mt-4">Q: {HOW_ITEM.stem}</p>

          <div className="mt-4 rounded-lg border border-destructive/40 bg-destructive/5 p-3">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-destructive mb-1">
              Weak answer (1 mark at most)
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-2">“{HOW_ITEM.weak}”</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{HOW_ITEM.weakWhy}</p>
          </div>

          <div className="mt-4 space-y-3">
            {HOW_ITEM.points.map((p, i) => (
              <div key={p.point} className="rounded-lg border border-primary/40 bg-primary/5 p-3">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                  Developed point {i + 1} (2 marks)
                </p>
                <p className="text-sm font-semibold text-foreground mb-1">{p.point}</p>
                <p className="text-sm text-foreground leading-relaxed mb-1">
                  <span className="font-semibold">Evidence: </span>
                  {p.evidence}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Effect: </span>
                  {p.effect}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-border/60 p-3">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Mark split (Pearson style)
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap">
                  2 marks
                </span>
                <span className="leading-relaxed">
                  Developed point 1: appropriate evidence (1) + explanation of its effect on the
                  reader (1).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap">
                  2 marks
                </span>
                <span className="leading-relaxed">
                  Developed point 2: appropriate evidence (1) + explanation of its effect on the
                  reader (1).
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* ── Sentence-frame toolkit ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Sentence-frame toolkit</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Build every answer from a meaning move plus an effect move. The frame{' '}
          <strong>“This suggests… which makes the reader…”</strong> will carry you through most
          two-mark items on its own.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          {SENTENCE_FRAMES.map((group) => (
            <div key={group.stage} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
                {group.stage}
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {group.frames.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Common mistakes ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Common mistakes that lose marks</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          {[
            'Lifting the writer’s words and adding no explanation - copied phrases are not credited.',
            'Explaining the meaning but forgetting the effect on the reader (or vice versa).',
            'Giving one developed point on a four-mark “how does the writer show…?” question instead of two.',
            'Choosing evidence that does not actually support the point you have made.',
            'Writing about your own feelings vaguely (“it was good”) instead of the reader’s response.',
            'Naming a technique (“this is a metaphor”) without saying what it means or does.',
          ].map((m) => (
            <div key={m} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
