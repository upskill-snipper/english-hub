import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  ASSESSMENT_OBJECTIVES,
  NARRATIVE_PERSPECTIVES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/fiction/narrative-perspective'

const RAO3 = ASSESSMENT_OBJECTIVES.RAO3
const RAO5 = ASSESSMENT_OBJECTIVES.RAO5
const PLOT_PROMPTS = GUIDED_READING_PROMPTS.fiction['Plot and structure']

export const metadata: Metadata = {
  openGraph: {
    title: 'Narrative perspective - iLowerSecondary English fiction guide',
    description:
      'Spot and analyse first person, second person, third person limited and omniscient narration: pronouns and markers, what each viewpoint lets a writer do, the effect on the reader, limitations, original annotated extracts and a self-test.',
  },
  title: 'Narrative perspective - fiction guide',
  description:
    'Spot and analyse first, second, third-limited and omniscient narration: markers, effects, limitations, original annotated extracts and a "spot the perspective" self-test for KS3 iLowerSecondary English.',
  alternates: { canonical: PAGE_URL },
}

// ── Perspective reference cards ────────────────────────────────────────
// The three spec perspectives plus second person, because real KS3 fiction
// (instructional/choose-your-path and some literary openings) uses "you".
type PerspectiveKey = (typeof NARRATIVE_PERSPECTIVES)[number] | 'second person'

const PERSPECTIVE_GUIDE: Record<
  PerspectiveKey,
  {
    label: string
    inSpec: boolean
    definition: string
    markers: string[]
    lets: string
    effect: string
    limitation: string
  }
> = {
  'first person': {
    label: 'First person',
    inSpec: true,
    definition:
      'The story is told by a character inside it, who refers to themselves as "I" (or "we"). The narrator is also a participant in the events.',
    markers: [
      'Pronouns "I", "me", "my", "we", "us", "our"',
      'A named or unnamed narrator who is part of the action',
      "Opinions, feelings and judgements stated as the narrator's own",
      'Only what the narrator sees, hears, remembers or guesses is reported',
    ],
    lets: 'It lets the writer put the reader directly inside one mind, build a strong, distinctive voice, and control exactly how much the reader is told - including hiding or distorting the truth.',
    effect:
      "The reader feels close and trusting, almost as if the narrator is a friend confiding in them. We share that character's emotions and tend to take their side.",
    limitation:
      'We only ever know what this one person knows. The narrator can be biased, mistaken or deliberately unreliable, and events they were not present for must be reported second-hand.',
  },
  'second person': {
    label: 'Second person',
    inSpec: false,
    definition:
      'The narrator addresses the reader directly as "you", placing the reader inside the story as if they are the character carrying out the action.',
    markers: [
      'Pronoun "you" used as the main character, not just direct address',
      'Often the present tense ("you open the door")',
      'Common in interactive or choose-your-own-path fiction and some literary openings',
      'Imperative or instructional rhythms ("turn left", "you must decide")',
    ],
    lets: 'It lets the writer pull the reader into the role of protagonist, create urgency and immediacy, and make choices or consequences feel personal.',
    effect:
      'The reader feels implicated and involved - events seem to be happening to them, which can be gripping, claustrophobic or unsettling.',
    limitation:
      'It is difficult to sustain over a long text and can feel artificial if the "you" behaves in ways the real reader would not. It is the rarest of the four in exam fiction.',
  },
  'third person': {
    label: 'Third person (limited)',
    inSpec: true,
    definition:
      'The story is told by a narrator outside it, using "he", "she" and "they". The narration stays close to one character\'s thoughts and feelings - we follow that character but are not them.',
    markers: [
      'Pronouns "he", "she", "they", or characters\' names - never "I" for the narrator',
      'Thoughts and feelings of one focus character are reported ("she wondered…")',
      "Other characters' inner lives are guessed at, not stated",
      'The narrator can describe the focus character from the outside too',
    ],
    lets: "It lets the writer keep a clear, steady storytelling voice while still giving the reader access to one character's inner world, and it can move slightly closer to or further from that character as needed.",
    effect:
      'The reader sympathises with the focus character but keeps a little critical distance, so we can sometimes see more than the character does.',
    limitation:
      "We are tied to one viewpoint character: events elsewhere, and other characters' true thoughts, stay hidden unless the focus character learns of them.",
  },
  omniscient: {
    label: 'Third person omniscient',
    inSpec: true,
    definition:
      "An all-knowing narrator outside the story can enter any character's mind, move freely in time and place, and comment on events the characters cannot see.",
    markers: [
      "Third-person pronouns, but the narrator moves between several characters' thoughts",
      'Knowledge no single character could have ("neither of them knew that…")',
      'Wide overview shots - whole towns, the future, the past',
      'Sometimes a commenting voice that judges or explains',
    ],
    lets: 'It lets the writer build dramatic irony (the reader knows what a character does not), weave several storylines, and step back to give the big picture or a moral.',
    effect:
      'The reader feels in a position of knowledge and control, often tense because we can see danger approaching that the characters cannot.',
    limitation:
      'The reader is held at a greater emotional distance from any single character, and a heavy commenting narrator can feel intrusive or old-fashioned.',
  },
}

const PERSPECTIVE_ORDER: PerspectiveKey[] = [
  'first person',
  'second person',
  'third person',
  'omniscient',
]

// ── One scene, four viewpoints (100% original - no past-paper text) ────
// The same brief moment rewritten so the contrast is unmistakable.
const SCENE_BRIEF =
  'The brief scene: a girl called Tara waits at a bus stop in heavy rain; the bus is late, and she does not know that a fallen tree has closed the road ahead.'

const REWRITES: {
  key: PerspectiveKey
  text: string
  annotation: string
}[] = [
  {
    key: 'first person',
    text: 'I pressed myself against the cold glass of the shelter and counted the seconds between cars. The bus was nine minutes late now, and the rain had already won - my shoes were two small ponds. Where was it? I told myself it would come. It always came.',
    annotation:
      'The narrator is Tara herself: "I", "my shoes". We are locked inside her impatience and her hopeful self-talk ("I told myself it would come"). We share her not knowing about the tree - and trust her, even though she may be wrong.',
  },
  {
    key: 'second person',
    text: 'You press yourself against the cold glass of the shelter and count the seconds between cars. The bus is nine minutes late now, and the rain has already won. You tell yourself it will come. It always comes. You do not yet think to wonder why the road ahead is so quiet.',
    annotation:
      'The pronoun "you" puts the reader in Tara\'s place. The present tense ("you press") makes it immediate, and the last line speaks over the reader\'s shoulder to plant unease - you are the one standing in the rain.',
  },
  {
    key: 'third person',
    text: 'Tara pressed herself against the cold glass of the shelter and counted the seconds between cars. The bus was nine minutes late now, and she could feel the rain seeping into her shoes. It would come, she told herself. It always came.',
    annotation:
      'Now the narrator is outside Tara ("Tara pressed", "she could feel") but stays close to her thoughts ("she told herself"). We sympathise with her yet watch from a small, steadying distance - we are not inside her skin.',
  },
  {
    key: 'omniscient',
    text: 'Tara pressed herself against the cold glass of the shelter, counting the seconds between cars. She did not know that, two miles up the valley, an old oak had come down across the road, and that the bus she was waiting for would never round the corner. She only knew that her shoes were wet, and that it always came.',
    annotation:
      'The narrator knows what Tara cannot - the fallen oak "two miles up the valley" and the bus that "would never round the corner". This builds dramatic irony: the reader is tense because we see the disappointment coming before she does.',
  },
]

// ── Analysis question + model answer (RAO5 / RAO3) ─────────────────────
const ANALYSIS_Q = {
  stem: "Look again at the first-person and the omniscient versions of the bus-stop scene above. How does each narrative perspective shape the reader's response to Tara's situation? (6 marks)",
  model:
    'In the first-person version the reader is placed directly inside Tara\'s mind through the pronoun "I" and her private self-talk ("I told myself it would come"). Because we only know what she knows, we share her hope and her ignorance of the fallen tree, so our response is one of sympathy and suspense without certainty - we worry with her rather than for her. The writer\'s purpose here is to make the reader feel close to and trusting of Tara. In the omniscient version the narrator steps outside and above the scene, telling us what Tara "did not know" - that "the bus … would never round the corner". This creates dramatic irony: the reader now knows more than the character, so our response shifts from shared hope to anxious anticipation, almost wanting to warn her. The contrast shows that perspective is not just a technical choice: the same events produce sympathy and uncertainty in first person, but tension and pity in the omniscient version, because each viewpoint controls exactly how much the reader is allowed to know.',
  markNote: `This item draws on ${RAO5.code} (writers' purposes and viewpoints, and the overall effect on the reader) and ${RAO3.code} (how the text is structured and organised). A top-band answer makes an explicit, developed comparison, names the perspective and its markers, and links each one to a specific effect on the reader rather than just labelling the technique.`,
}

// ── "Spot the perspective" self-test ──────────────────────────────────
const SELF_TEST: { q: string; a: string }[] = [
  {
    q: '"By the time we reached the harbour, I had stopped pretending I was not afraid."',
    a: 'First person - the narrator uses "we" and "I" and is inside the events.',
  },
  {
    q: '"You climb the last step, push the door, and the smell of smoke tells you that you are already too late."',
    a: 'Second person - "you" is the protagonist and the present tense makes it immediate.',
  },
  {
    q: '"Marcus checked his watch for the third time and decided he would give her five more minutes, no more."',
    a: 'Third person limited - "Marcus", "he", and we stay close to one character\'s thoughts.',
  },
  {
    q: '"What none of the passengers realised was that the captain had not slept for two days, and that the storm to the south was turning."',
    a: 'Omniscient - the narrator knows what "none of the passengers realised", spanning more than one mind and place.',
  },
  {
    q: '"My grandmother never spoke of the war, and I never learned to ask."',
    a: 'First person - "my", "I"; a participant narrator recalling their own past.',
  },
  {
    q: '"Priya laughed at the joke, although she did not find it funny; her smile, she hoped, hid the rest."',
    a: 'Third person limited - outside Priya ("she") but tied to her single inner viewpoint.',
  },
  {
    q: '"In the north tower the queen was already weeping; in the south, her son slept on, knowing nothing of the messenger\'s news."',
    a: 'Omniscient - the narrator moves between two characters in two places and reports what one does not know.',
  },
  {
    q: '"You don\'t remember falling. You only remember the cold, and the voice telling you to stay awake."',
    a: 'Second person - sustained "you" as the character, present-tense immediacy and direct involvement.',
  },
]

export default async function NarrativePerspectivePage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Fiction',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Narrative perspective', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.fiction')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.fiction.narrative_perspective.bc')}</span>
      </p>

      <h1>Narrative perspective - who is telling the story?</h1>
      <p className="lead">
        Every piece of fiction is told by <em>someone</em>, from <em>somewhere</em>. That choice -
        the narrative perspective - decides what you are allowed to know, whose feelings you share,
        and how much you can trust what you read. Learn to spot it quickly and to explain its
        effect, and you can answer the viewpoint and structure questions on the fiction text with
        confidence.
      </p>

      {/* ── Why perspective matters ───────────────────────────────────── */}
      <section className="my-10">
        <h2>Why perspective is worth marks</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {RAO5.code}
            </p>
            <p className="text-sm text-foreground leading-relaxed">{RAO5.descriptor}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Perspective is one of the biggest tools a writer has for controlling the effect of a
              text on you.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {RAO3.code}
            </p>
            <p className="text-sm text-foreground leading-relaxed">{RAO3.descriptor}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Who narrates, and how much they know, is a structural choice the writer has made on
              purpose.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          In plain English: spotting the perspective is the first step; the marks come from
          explaining <em>what it lets the writer do</em> and{' '}
          <em>how it makes you, the reader, respond</em>. When you study a fiction extract, the
          guided-reading question &ldquo;{PLOT_PROMPTS[1]}&rdquo; is exactly this question.
        </p>
      </section>

      {/* ── The four perspectives ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>The four perspectives you will meet</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The fiction text uses {NARRATIVE_PERSPECTIVES.join(', ')} narration. We also cover second
          person, because real KS3 fiction - especially interactive and choose-your-path stories,
          and some literary openings - does narrate with &ldquo;you&rdquo;.
        </p>
        <div className="not-prose mt-4 space-y-4">
          {PERSPECTIVE_ORDER.map((k) => {
            const g = PERSPECTIVE_GUIDE[k]
            return (
              <article key={k} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground">{g.label}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                    {g.inSpec ? 'On the spec' : 'Also worth knowing'}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground leading-relaxed">{g.definition}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Markers to spot
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {g.markers.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="text-primary" aria-hidden>
                        ·
                      </span>
                      <span className="leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      What it lets the writer do
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.lets}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Effect on the reader
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.effect}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                      Limitation
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.limitation}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ── One scene, four viewpoints ────────────────────────────────── */}
      <section className="my-10">
        <h2>One scene, four viewpoints</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The clearest way to feel the difference is to read the same moment rewritten from each
          perspective. {SCENE_BRIEF} These extracts are original works written for this page.
        </p>
        <div className="not-prose mt-4 space-y-4">
          {REWRITES.map((r) => {
            const g = PERSPECTIVE_GUIDE[r.key]
            return (
              <article key={r.key} className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="text-base font-semibold text-foreground">{g.label}</h3>
                <div className="mt-3 rounded-lg border border-border/60 bg-background p-4">
                  <p className="text-sm text-foreground leading-relaxed italic">{r.text}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Annotation: </span>
                  {r.annotation}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      {/* ── Worked analysis question ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Worked analysis - how perspective shapes the response</h2>
        <div className="not-prose rounded-xl border border-border/60 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
            Exam-style question · 6 marks · {RAO5.code} + {RAO3.code}
          </p>
          <p className="text-sm text-foreground leading-relaxed">{ANALYSIS_Q.stem}</p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
            Model answer
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{ANALYSIS_Q.model}</p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
            How the marks are awarded
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{ANALYSIS_Q.markNote}</p>
        </div>
      </section>

      {/* ── Spot the perspective self-test ────────────────────────────── */}
      <section className="my-10">
        <div className="not-prose rounded-xl border border-primary/40 bg-primary/5 p-6">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary mb-1">
            Self-test
          </p>
          <h2 className="text-xl font-semibold text-foreground mb-2">Spot the perspective</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Name the narrative perspective in each original line, then check yourself against the
            answer. Cover the answers first.
          </p>
          <ol className="space-y-4">
            {SELF_TEST.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs text-primary mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-sm text-foreground leading-relaxed italic">{item.q}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Answer: </span>
                    {item.a}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Quick revision checklist ──────────────────────────────────── */}
      <section className="my-10">
        <h2>Before the exam - the perspective checklist</h2>
        <div className="not-prose rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              'Check the pronouns first: "I/we" = first person; "you" as the character = second person; "he/she/they" = third person.',
              'For third person, decide if it stays with one mind (limited) or knows everything (omniscient).',
              'Ask what the narrator cannot know - that limitation is often the point.',
              'Link the perspective to a specific effect on you: closeness, suspense, dramatic irony, distance.',
              'Watch for an unreliable first-person narrator - bias or mistakes can be deliberate.',
              'In your answer, name the perspective AND explain its effect - labelling alone earns little.',
            ].map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  ✓
                </span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fair-dealing footer ───────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
