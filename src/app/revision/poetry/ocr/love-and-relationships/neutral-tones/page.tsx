'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const neutralTones: PoemData = {
  title: 'Neutral Tones',
  poet: 'Thomas Hardy',
  lines: [
    {
      text: 'We stood by a pond that winter day,',
      annotations: [
        {
          type: 'Setting',
          note: 'The poem begins with a static image: two people standing motionless. The "winter day" instantly establishes a cold, lifeless atmosphere -- pathetic fallacy linking the season to the dying relationship.',
          color: '#a855f7',
        },
        {
          type: 'Pronoun',
          note: '"We" -- the only moment in the first line of togetherness. From here on, the speaker and the woman feel increasingly separate.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the sun was white, as though chidden of God,',
      annotations: [
        {
          type: 'Imagery',
          note: '"White" sun -- the sun has lost its colour and warmth. Normally yellow or golden, here it is pale and drained, mirroring the drained love between the couple.',
          color: '#10b981',
        },
        {
          type: 'Religious imagery',
          note: '"Chidden of God" -- as if God has scolded the sun. The world feels punished, joyless, almost guilty. Hardy questions whether any benevolent force is at work.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And a few leaves lay on the starving sod;',
      annotations: [
        {
          type: 'Personification',
          note: '"Starving sod" -- the ground is personified as malnourished. The earth itself is wasting away, just as the love is wasting away.',
          color: '#10b981',
        },
        {
          type: 'Imagery',
          note: '"A few leaves" -- not many. The world is almost empty. Hardy chooses sparse, minimal details to evoke desolation.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '— They had fallen from an ash.',
      annotations: [
        {
          type: 'Symbolism',
          note: 'The ash tree is significant: "ash" can mean the burnt remains of fire (love that has burned out) and the tree is associated in folklore with grief. The dash creates a pause, like a sigh.',
          color: '#10b981',
        },
        {
          type: 'Caesura',
          note: 'The dash ("—") at the start of the line creates a hesitation, as if the speaker has to add this detail as an afterthought.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Your eyes on me were as eyes that rove',
      annotations: [
        {
          type: 'Simile',
          note: '"As eyes that rove" -- her eyes wander, distracted. She looks at him without really seeing him. There is no focus, no engagement.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'A devastating image of emotional disconnection. She is physically present but mentally absent.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Over tedious riddles of years ago;',
      annotations: [
        {
          type: 'Diction',
          note: '"Tedious riddles" -- their relationship has become a boring puzzle. The word "tedious" is brutal: love is now dull, exhausting, unrewarding.',
          color: '#ef4444',
        },
        {
          type: 'Time',
          note: '"Years ago" -- the love is in the past, not the present. They are stuck in a relationship that died long ago.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And some words played between us to and fro',
      annotations: [
        {
          type: 'Imagery',
          note: '"Played" and "to and fro" -- like a meaningless game of catch. There is talk, but no real communication. The words are empty.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'On which lost the more by our love.',
      annotations: [
        {
          type: 'Bitterness',
          note: 'They are arguing about who has suffered the most from being together. Love has become a competition of grievances. The word "lost" is crushing -- love has cost them, not enriched them.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'The smile on your mouth was the deadest thing',
      annotations: [
        {
          type: 'Hyperbole',
          note: '"The deadest thing" -- a striking superlative. Smiles should be alive and warm, but hers is the deadest thing of all. Love has produced its own corpse.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The most quoted line of the poem. The smile -- normally a sign of happiness -- has become death-in-life.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Alive enough to have strength to die;',
      annotations: [
        {
          type: 'Paradox',
          note: 'A devastating paradox: alive enough to die. Her smile is barely living -- but still has just enough life to perform its own death. The dying of the smile mirrors the dying of love.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And a grin of bitterness swept thereby',
      annotations: [
        {
          type: 'Imagery',
          note: '"Grin of bitterness" -- not a smile but a grin, with all its associations of sarcasm and malice. "Swept" suggests something quick and unstoppable, like a sudden wave.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Like an ominous bird a-wing....',
      annotations: [
        {
          type: 'Simile',
          note: '"Ominous bird" -- the smile is compared to a bird of ill omen (a raven, perhaps). The image suggests that something terrible is being foretold by this brief expression.',
          color: '#10b981',
        },
        {
          type: 'Ellipsis',
          note: 'The "..." trails off, leaving the reader hanging. The bird flies away into the distance -- and so does the moment. Time itself feels unfinished.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Since then, keen lessons that love deceives,',
      annotations: [
        {
          type: 'Volta',
          note: 'The poem turns. After three stanzas in the past tense, the final stanza is in the present. The speaker reflects on what he has learned.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: '"Love deceives" -- the central message of the poem. Love is not what it appears to be; it lies. This bitter conclusion shapes the speaker\'s view of the world ever after.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And wrings with wrong, have shaped to me',
      annotations: [
        {
          type: 'Alliteration',
          note: '"Wrings with wrong" -- the harsh "w" sounds and twisted phrasing physically embody the speaker\'s pain. Love has wrung him out and wronged him.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Your face, and the God-curst sun, and a tree,',
      annotations: [
        {
          type: 'Imagery',
          note: 'The speaker\'s pain has fused into one composite image: her face, the cursed sun, and the tree. He cannot separate the woman from the scene; they have all merged into a single symbol of betrayal.',
          color: '#10b981',
        },
        {
          type: 'Religious imagery',
          note: '"God-curst sun" -- earlier the sun was "chidden" by God; now it is "curst". The hostility has intensified. The whole world feels accursed because of love.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And a pond edged with grayish leaves.',
      annotations: [
        {
          type: 'Cyclical structure',
          note: 'The poem ends where it began: by the pond with grey leaves. But now the description is even more drained -- "grayish" is a blurry, uncertain colour. The image is permanently fixed in the speaker\'s memory.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'The poem closes on a colourless image. "Neutral tones" -- the title -- describes not just the scene but the deadened emotional state of the speaker forever after.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Thomas Hardy (1840--1928)</h3>
    <p>Thomas Hardy was both a major Victorian novelist (<em>Tess of the d'Urbervilles</em>, <em>Jude the Obscure</em>) and one of the most important English poets of the early twentieth century. He turned exclusively to poetry late in life. His worldview is famously bleak: he often writes about the cruelty of fate, the deceptiveness of love, and the indifference of nature.</p>

    <h3>Composition (1867)</h3>
    <p>"Neutral Tones" was written in <strong>1867</strong> when Hardy was only 27, but not published until 1898 in his collection <em>Wessex Poems</em>. It is one of the earliest of his poems and remarkably mature in its bitter pessimism. We do not know exactly which relationship inspired it -- Hardy himself never said.</p>

    <h3>Hardy's Pessimism</h3>
    <p>Hardy is often called a pessimist, but he preferred to call himself a "meliorist" -- someone who hopes for improvement but expects disappointment. His poetry is shaped by a sense that the universe is indifferent to human happiness. "Neutral Tones" is a perfect example: nothing dramatic happens; love simply fades into a cold, colourless landscape.</p>

    <h3>The title</h3>
    <p>"Neutral" suggests the absence of feeling or commitment. "Tones" can mean colours but also voices and emotions. The title sets up the central idea: a love that has lost all colour and feeling, leaving only a flat, grey emotional palette.</p>
  `,

  summary: `Stanza 1: The speaker recalls standing by a pond on a winter day with someone he loved. The setting is bleak: the sun is "white" (drained of warmth), the ground is "starving", and a few dead leaves have fallen from an ash tree. Pathetic fallacy: the dying landscape mirrors the dying love.

Stanza 2: He remembers her wandering eyes, looking past him as if puzzling over old, boring problems. They exchanged words, but the conversation became an argument about who had been hurt more by their love. The relationship has reduced to grievance.

Stanza 3: He recalls her smile -- a smile so empty it was "the deadest thing / Alive enough to have strength to die". A bitter grin then crossed her face like an "ominous bird". Even her facial expressions feel like death.

Stanza 4: The poem shifts to the present. Looking back, the speaker says love has taught him "keen lessons" -- that love deceives. The bitter memory of that day has become a permanent image in his mind: her face, the cursed sun, the tree, and the pond with its grey leaves.

Overall meaning: The poem is a meditation on the death of love. Hardy uses cold, washed-out winter imagery to suggest that love -- once thought passionate and alive -- can drain away into something dead and grey. The speaker's pessimism is total: love is not just lost, but actively deceptive.`,

  formAndStructure: `Form: Four stanzas of four lines each (quatrains), with a regular ABBA rhyme scheme (enclosed rhyme). The "envelope" structure of each stanza creates a sense of being trapped, with the outer rhymes wrapping around the inner ones.

Metre: Loosely iambic, but with frequent variations. The rhythm is irregular and stumbling, mirroring the broken communication between the lovers.

Cyclical structure: The poem begins and ends with the same scene -- the pond, the leaves, the tree. This circular structure traps the speaker in his memory: he cannot escape that one bleak afternoon. The final stanza adds the speaker's reflection in the present, but the imagery is identical, showing that nothing has changed inside him.

Volta: The turn happens at the start of the final stanza ("Since then..."). Hardy moves from past description to present reflection, showing how this single memory has shaped his entire worldview ever since.

Pathetic fallacy: The whole poem operates through pathetic fallacy: the winter day mirrors the dying relationship. The setting and the relationship are inseparable -- which is why, in the final stanza, they have fused into a single symbolic image.

Tone: Cold, bitter, restrained. The poem never shouts -- the emotion is "neutral", drained, controlled. This restraint is more powerful than overt grief: the speaker has been so damaged that he can no longer feel intensely.`,

  keyQuotes: [
    {
      quote: 'the sun was white, as though chidden of God',
      analysis:
        'A startling image: a sun drained of colour and warmth, as though it has been told off by God. White sun is unnatural -- normally golden or yellow. Hardy uses pathetic fallacy: the dying sun reflects the dying love. The religious diction also suggests a guilty, joyless world.',
      themes: ['Pathetic fallacy', 'Loss', 'Bleakness'],
    },
    {
      quote: 'Your eyes on me were as eyes that rove',
      analysis:
        'A devastating simile of emotional absence. Her eyes look at him but do not focus -- they wander as if she is bored. The relationship is dead because there is no real attention left between them. Eye contact, the foundation of intimacy, has failed.',
      themes: ['Emotional disconnection', 'End of love', 'Indifference'],
    },
    {
      quote: 'tedious riddles of years ago',
      analysis:
        'The relationship has become a "tedious riddle" -- a boring puzzle from the past. "Tedious" is brutal: love is now dull and exhausting. "Years ago" tells us this love has been dying for a long time; nothing in the present matters anymore.',
      themes: ['Boredom', 'Time', 'End of love'],
    },
    {
      quote: 'The smile on your mouth was the deadest thing / Alive enough to have strength to die',
      analysis:
        'A devastating paradox. A smile should be alive and warm, but hers is "the deadest thing" -- as dead as anything can be. Yet it is "alive enough" to perform the act of dying, like a final gasp. The lover\'s smile becomes a corpse going through the motions.',
      themes: ['Death of love', 'Paradox', 'Decay'],
    },
    {
      quote: 'keen lessons that love deceives',
      analysis:
        'The poem\'s central thesis. "Keen" suggests sharp, painful, and well-learned. "Love deceives" reduces love to a lie -- a force that promises happiness but delivers misery. This bitter conclusion shapes the speaker\'s entire worldview from this day onwards.',
      themes: ['Bitterness', 'Disillusionment', 'Hardy\'s pessimism'],
    },
    {
      quote: 'Your face, and the God-curst sun, and a tree, / And a pond edged with grayish leaves',
      analysis:
        'The closing image fuses the woman with the bleak landscape. He cannot separate her from the scene -- they have merged into a single symbol of betrayal. The "God-curst sun" intensifies the earlier "chidden" sun: the curse has hardened. The grey, drained palette reflects his own deadened emotional state.',
      themes: ['Memory', 'Symbolism', 'Cyclical structure'],
    },
  ],

  languageDevices: [
    {
      device: 'Pathetic fallacy',
      example: 'the sun was white, as though chidden of God',
      effect:
        'The whole landscape mirrors the dying relationship. By making the sun, leaves and ground reflect emotional emptiness, Hardy suggests that love\'s decay is so profound it darkens the entire world.',
      lineRef: 1,
    },
    {
      device: 'Simile',
      example: 'eyes that rove / Over tedious riddles',
      effect:
        'Her eyes are compared to wandering, distracted gazes. The simile dramatises emotional absence: she is physically present but mentally elsewhere. Love has become a tedious puzzle.',
      lineRef: 4,
    },
    {
      device: 'Paradox',
      example: 'The smile on your mouth was the deadest thing / Alive enough to have strength to die',
      effect:
        'A devastating contradiction: a smile that is the deadest thing yet still alive enough to die. The paradox captures the limbo of a relationship that is technically still going but emotionally finished.',
      lineRef: 8,
    },
    {
      device: 'Personification',
      example: 'starving sod',
      effect:
        'The earth is given the human quality of hunger. By personifying the ground as "starving", Hardy suggests the whole landscape is suffering, mirroring the emotional starvation of the relationship.',
      lineRef: 2,
    },
    {
      device: 'Cyclical structure',
      example: 'a pond edged with grayish leaves (echoing the opening pond)',
      effect:
        'The poem ends where it began. This circular structure traps the speaker in the memory -- he cannot move on. The repetition of the image shows that this moment has become permanently fixed in his mind.',
      lineRef: 15,
    },
    {
      device: 'Religious imagery',
      example: 'chidden of God / God-curst sun',
      effect:
        'God appears twice -- first scolding the sun, then cursing it. Hardy is questioning whether divine love exists in a world this bleak. The religious diction makes the misery feel cosmic, not just personal.',
      lineRef: 1,
    },
    {
      device: 'Symbolism',
      example: 'the ash tree',
      effect:
        'The ash is symbolic in two ways: "ash" suggests the burnt remains of fire (love that has burned out), and ash trees are traditionally associated with grief. The fallen leaves visually echo the fallen love.',
      lineRef: 3,
    },
  ],
}

const comparisons = [
  {
    title: 'She Walks in Beauty',
    poet: 'Lord Byron',
    href: '/revision/poetry/ocr/love-and-relationships/she-walks-in-beauty',
    reason:
      'A perfect contrast: Byron celebrates a loving woman in radiant terms; Hardy mourns a dying love in colourless ones. Both use light and dark imagery, but where Byron finds harmony, Hardy finds drained emptiness.',
    themes: ['Light and dark', 'Imagery', 'Contrasting moods'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'nt-1', question: 'What is the poem about?', type: 'multiple-choice', options: ['A happy walk', 'The painful memory of a relationship ending beside a bleak winter pond', 'A nature description', 'A celebration'], correctIndex: 1, explanation: 'Hardy recalls the moment a relationship died, set beside a pond on a grey winter day. The bleak landscape mirrors the emotional deadness.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'nt-2', question: 'What does the pond symbolise?', type: 'multiple-choice', options: ['Beauty', 'Stagnation and emotional deadness', 'Swimming', 'Wealth'], correctIndex: 1, explanation: 'The pond is stagnant and lifeless, mirroring the dead relationship.', topic: 'Language', difficulty: 'foundation' },
  { id: 'nt-3', question: 'What is the "neutral tones" palette?', type: 'multiple-choice', options: ['Bright colours', 'White, grey, and ash — all warmth drained', 'Vivid greens', 'Random'], correctIndex: 1, explanation: 'Hardy removes colour from the poem, matching the emotional neutrality of the failed love.', topic: 'Language', difficulty: 'foundation' },
  { id: 'nt-4', question: 'What does "the deadest thing" suggest?', type: 'multiple-choice', options: ['Beauty', 'The smile is false and lifeless — total death of feeling', 'Shyness', 'Sadness'], correctIndex: 1, explanation: 'The superlative "deadest" emphasises total emotional extinction.', topic: 'Language', difficulty: 'higher' },
  { id: 'nt-5', question: 'What form is used?', type: 'multiple-choice', options: ['Free verse', 'Four quatrains with ABBA rhyme', 'A sonnet', 'Blank verse'], correctIndex: 1, explanation: 'ABBA (envelope) rhyme — the enclosing structure traps the speaker in the memory.', topic: 'Structure', difficulty: 'foundation' },
  { id: 'nt-6', question: 'What is the cyclical structure?', type: 'multiple-choice', options: ['Time passing', 'The poem ends where it began, trapping the speaker', 'Resolution', 'No effect'], correctIndex: 1, explanation: 'The final stanza returns to the pond — the speaker is locked in inescapable memory.', topic: 'Structure', difficulty: 'higher' },
  { id: 'nt-7', question: 'When was it written?', type: 'multiple-choice', options: ['1867 by Thomas Hardy', '1818', '1914', '1950'], correctIndex: 0, explanation: 'Written in 1867 by Hardy, who frequently presented love as doomed.', topic: 'Context', difficulty: 'higher' },
  { id: 'nt-8', question: 'What does pathetic fallacy achieve?', type: 'multiple-choice', options: ['Cheerfulness', 'The landscape mirrors emotional deadness', 'Decoration', 'Suspense'], correctIndex: 1, explanation: 'Grey sky, white sun, fallen leaves mirror the speaker\'s state. Nature reinforces the deadness.', topic: 'Language', difficulty: 'higher' },
  { id: 'nt-9', question: 'How does the final stanza transform the memory?', type: 'multiple-choice', options: ['Stays personal', 'Becomes a universal lesson — "keen lessons that love deceives"', 'New character', 'Hope'], correctIndex: 1, explanation: 'The memory becomes "keen lessons" about love\'s inevitable deception.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'nt-10', question: 'What pairs well with Neutral Tones?', type: 'multiple-choice', options: ['She Walks in Beauty', 'She Dwelt Among the Untrodden Ways', 'The Eagle', 'Crossing the Bar'], correctIndex: 1, explanation: 'Both explore love and loss through nature imagery. Wordsworth mourns a lost person; Hardy mourns a lost relationship.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Neutral Tones explores the death of love, bleakness of memory, and how one painful experience defines all future relationships.', keyPoints: ['Love as deception', 'Emotional deadness — all warmth drained', 'Memory as trap', 'Pessimism — love is doomed'] },
  { topic: 'Language & Imagery', summary: 'Hardy uses pathetic fallacy, drained colour palette, and death imagery to create emotional extinction.', keyPoints: ['White, grey, ash — all warmth removed', '"The deadest thing" — superlative death imagery', 'Pathetic fallacy — landscape mirrors deadness', '"Starving sod" — even the earth is dying'] },
  { topic: 'Structure & Form', summary: 'Four quatrains with ABBA rhyme — enclosed, trapped structure.', keyPoints: ['ABBA rhyme traps the speaker', 'Cyclical — begins and ends at the pond', 'Regular form contrasts with disordered emotions', 'Past tense — memory becomes permanent'] },
]

const ESSAY_PROMPTS = [
  'How does Hardy present the end of love in Neutral Tones?',
  'Compare how lost love is presented in Neutral Tones and one other poem from the anthology.',
  'How does Hardy use natural imagery to convey emotional pain?',
]

export default function NeutralTonesPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Neutral Tones by Thomas Hardy — Analysis & Annotations"
        description="Line-by-line analysis of Neutral Tones with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Poetry", url: "https://theenglishhub.app/revision/poetry" },
          { name: "OCR Poetry", url: "https://theenglishhub.app/revision/poetry/ocr" },
          { name: "Neutral Tones", url: "https://theenglishhub.app/revision/poetry/ocr/neutral-tones" },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Love and Relationships
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Neutral Tones</h1>
            <p className="text-body-sm text-muted-foreground">
              Thomas Hardy &middot; Love and Relationships cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">OCR</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Neutral Tones"
        textType="poem"
        examBoard="OCR"
        cluster="Love and Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Neutral Tones"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={neutralTones} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;Neutral Tones&rdquo; is in the public domain. All annotations and
          critical commentary on this page are original to english-hub and are provided for
          private study and educational purposes under the fair dealing provisions of the
          Copyright, Designs and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with Neutral Tones for the OCR Love and Relationships cluster.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
