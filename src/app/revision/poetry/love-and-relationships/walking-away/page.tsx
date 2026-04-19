'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Poem data ─────────────────────────────────────────────────────── */

const walkingAwayPoem: PoemData = {
  title: 'Walking Away',
  poet: 'Cecil Day-Lewis',
  lines: [
    // Stanza 1
    {
      text: 'It is eighteen years ago, almost to the day \u2014',
      annotations: [
        { type: 'Precision', note: 'The specific timeframe shows the memory is vivid and deeply significant. "Almost to the day" suggests an anniversary the father cannot forget.', color: '#3b82f6' },
      ],
    },
    { text: 'A sunny day with the leaves just turning,' },
    { text: 'The touch-Loss too new in and not yet noticed \u2014' },
    { text: 'When I watched you play your first game of football,' },
    {
      text: 'And my heart went with you as you walked away',
      annotations: [
        { type: 'Metaphor', note: 'The father\'s heart literally departing with his son captures the physical pain of letting go. This image echoes throughout the poem.', color: '#10b981' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    { text: 'To the ignominy of a side that lost;' },
    { text: 'And in the agony of having to decide,' },
    { text: 'It\'s as if the child I\'d fathered had, grown,' },
    { text: 'Put on a survey of himself and gone.' },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'Like a satellite wrenched from its orbit, you went,',
      annotations: [
        { type: 'Simile', note: 'The cosmic comparison elevates a personal moment to universal significance. "Wrenched" conveys the violence of separation, while "orbit" implies the child was once held in the parent\'s gravitational pull.', color: '#10b981' },
      ],
    },
    {
      text: 'Half-fledged, half-knowing, wide-eyed into a world',
      annotations: [
        { type: 'Compound adjectives', note: 'The "half-" prefix repeated twice emphasises the child\'s incompleteness and vulnerability. He is not yet ready but must go anyway.', color: '#8b5cf6' },
      ],
    },
    { text: 'That lay ahead, for your survey of the road.' },
    // Stanza break
    { text: '' },
    // Stanza 4
    { text: 'I can see, now, how that survey of the road' },
    {
      text: 'Has altered, though it was not so at first.',
      annotations: [
        { type: 'Volta', note: 'The shift to present tense and the word "now" marks the turn from memory to mature reflection. The father can finally understand what the moment meant.', color: '#f59e0b' },
      ],
    },
    {
      text: 'I have had worse partings, but none that so',
      annotations: [
        { type: 'Understatement', note: 'This understated acknowledgement (possibly referring to deaths) makes the final revelation more powerful \u2014 that this small parting haunts him most.', color: '#ef4444' },
      ],
    },
    { text: 'Gnaws at my mind still. Perhaps it is roughly' },
    // Stanza break
    { text: '' },
    // Stanza 5
    {
      text: 'Saying what God alone could perfectly show \u2014',
      annotations: [
        { type: 'Religious allusion', note: 'The reference to God elevates parental love to something sacred and ineffable \u2014 beyond what human language can fully express.', color: '#3b82f6' },
      ],
    },
    { text: 'How selfhood begins with a walking away,' },
    {
      text: 'And love is proved in the letting go.',
      annotations: [
        { type: 'Aphorism', note: 'The final line distils the poem\'s meaning into a universal truth. "Proved" means both tested and demonstrated \u2014 love must endure separation to be real.', color: '#10b981' },
      ],
    },
  ],
  context: '<p><strong>Cecil Day-Lewis</strong> (1904\u20131972) was Poet Laureate from 1968 until his death. He was the father of actor Daniel Day-Lewis. This poem reflects on watching his son <strong>Sean</strong> walk away to play his first game of football at school.</p><p>Written eighteen years after the event, the poem explores the universal experience of a <strong>parent letting go</strong> of a child. The specific memory \u2014 a football match \u2014 becomes a metaphor for every moment a child steps further into independence.</p><p>The poem grapples with the <strong>paradox of parental love</strong>: that truly loving someone means allowing them to leave. This connects to broader themes of <strong>growing up</strong>, <strong>identity formation</strong>, and the <strong>pain of separation</strong> that is inherent in all loving relationships.</p><p>Day-Lewis wrote the poem late in life, giving it the quality of <strong>mature reflection</strong> rather than immediate emotion. The distance of time allows him to articulate what he could not express in the moment.</p>',
  summary: 'The speaker recalls watching his young son walk away to play his first football match eighteen years ago. He remembers the physical wrench of separation as the child moved into the world independently for the first time. Using metaphors of satellites and fledgling birds, he captures the child\'s vulnerability and his own helplessness. In the final stanza, the father reflects that although he has experienced worse partings since, this one still haunts him because it represents the fundamental truth that love requires letting go.',
  formAndStructure: 'Form: Four quintains (five-line stanzas) with a loose ABACA rhyme scheme, giving the poem a gentle, reflective rhythm without rigidity.\n\nStructure: Chronological movement from past memory (stanzas 1\u20133) to present reflection (stanzas 4\u20135), mirroring the process of understanding that comes with time.\n\nRhyme: Partial, imperfect rhymes reflect the imperfect, painful nature of the separation being described.\n\nTense: Shifts from past ("I watched") to present ("I can see now"), enacting the movement from experience to understanding.\n\nEnjambment: Lines frequently run on, particularly across stanza breaks, mirroring the continuous, unresolved nature of parental anxiety.\n\nTone: Reflective and measured, with an undertone of persistent grief. The calm surface conceals deep emotional pain.',
  keyQuotes: [
    { quote: 'It is eighteen years ago, almost to the day', analysis: 'The precision shows this memory has been relived repeatedly. "Almost to the day" suggests an unwilled anniversary \u2014 the pain returns annually.', themes: ['Memory', 'Time', 'Loss'] },
    { quote: 'my heart went with you as you walked away', analysis: 'The father\'s heart literally departing with the child is both metaphor and felt truth. It establishes that separation is a form of physical loss.', themes: ['Parental love', 'Separation', 'Pain'] },
    { quote: 'Like a satellite wrenched from its orbit', analysis: 'The cosmic simile elevates a small domestic moment to universal significance. "Wrenched" conveys violence and pain \u2014 this separation is not gentle.', themes: ['Separation', 'Pain', 'Growing up'] },
    { quote: 'Half-fledged, half-knowing', analysis: 'Bird imagery presents the child as not yet ready to fly independently. The repetition of "half" emphasises incompleteness and vulnerability.', themes: ['Vulnerability', 'Growing up', 'Protection'] },
    { quote: 'I have had worse partings', analysis: 'This understated acknowledgement makes the final revelation more powerful \u2014 that this small parting haunts him most of all.', themes: ['Loss', 'Memory', 'Perspective'] },
    { quote: 'Gnaws at my mind still', analysis: 'The verb "gnaws" is visceral and animalistic, suggesting the memory is a persistent, consuming pain that erodes him from within.', themes: ['Memory', 'Pain', 'Persistence'] },
    { quote: 'selfhood begins with a walking away', analysis: 'The child must separate from the parent to become an individual. Identity requires independence, which requires distance.', themes: ['Identity', 'Independence', 'Growing up'] },
    { quote: 'love is proved in the letting go', analysis: 'The poem\'s concluding aphorism: real love is demonstrated not by holding on but by releasing. "Proved" means both tested and demonstrated.', themes: ['Love', 'Sacrifice', 'Parental love'] },
  ],
  languageDevices: [
    { device: 'Simile', example: 'Like a satellite wrenched from its orbit', effect: 'The cosmic comparison elevates a personal moment to universal significance. "Wrenched" conveys the violence of separation, while "orbit" implies the child was once held in the parent\'s gravitational pull.', lineRef: 11 },
    { device: 'Metaphor', example: 'Half-fledged', effect: 'Bird imagery presents the child as a young bird not yet ready to fly, emphasising vulnerability and the parent\'s anxiety about whether they can survive independently.', lineRef: 12 },
    { device: 'Sensory language', example: 'Gnaws at my mind still', effect: 'The visceral, animalistic verb "gnaws" makes the abstract concept of memory physically painful, suggesting persistent, consuming grief.', lineRef: 18 },
    { device: 'Aphorism', example: 'love is proved in the letting go', effect: 'The final line condenses the poem\'s meaning into a memorable, universal statement. Its simplicity and balance give it proverbial authority.', lineRef: 22 },
    { device: 'Enjambment', example: 'so / Gnaws at my mind still', effect: 'The line break isolates "Gnaws" at the start of the line, giving it greater impact and enacting the way the memory catches him unexpectedly.', lineRef: 17 },
    { device: 'Religious allusion', example: 'what God alone could perfectly show', effect: 'Elevates parental love to something divine and beyond full human expression, suggesting the letting-go is a sacred, almost spiritual act.', lineRef: 20 },
    { device: 'Pathetic fallacy', example: 'A sunny day with the leaves just turning', effect: 'The autumn setting mirrors the transition from childhood to independence. "Just turning" parallels the child who is just beginning to change.', lineRef: 1 },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */


const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'wa-1', question: 'What event does the poem describe?', type: 'multiple-choice', options: ['A funeral', 'A father watching his son walk away to his first day of school or a football match', 'A couple breaking up', 'A soldier leaving for war'], correctIndex: 1, explanation: 'The speaker (a father) recalls watching his son walk away to a football game or school — a small moment of separation that represents the larger process of letting go.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'wa-2', question: 'What does "like a satellite wrenched from its orbit" suggest?', type: 'multiple-choice', options: ['The son enjoys space', 'Separation from a parent is as painful and unnatural as breaking a gravitational bond', 'The son is spinning', 'Space travel is important'], correctIndex: 1, explanation: 'The simile compares the son to a satellite torn from its orbit — suggesting the parent-child bond has a gravitational pull, and separation feels violent and unnatural.', topic: 'Language', difficulty: 'foundation' },
  { id: 'wa-3', question: 'What does the final line "selfhood begins with a walking away" mean?', type: 'multiple-choice', options: ['Walking is good exercise', 'Becoming your own person requires separating from your parents — independence starts with leaving', 'Walking away is always sad', 'Children should walk more'], correctIndex: 1, explanation: 'The father recognises that his child must walk away to become an independent person. "Selfhood" — individual identity — can only develop through separation, however painful.', topic: 'Themes', difficulty: 'higher' },
  { id: 'wa-4', question: 'What is the seed metaphor about?', type: 'multiple-choice', options: ['Gardening advice', '"Like a winged seed loosened from its parent stem" — the child must be released to grow independently, like a seed dispersing', 'The son plants a garden', 'Seeds represent food'], correctIndex: 1, explanation: 'The seed metaphor shows separation as natural and necessary. A seed must leave its parent plant to grow. The father understands this intellectually but still finds it emotionally painful.', topic: 'Language', difficulty: 'higher' },
  { id: 'wa-5', question: 'Who wrote the poem?', type: 'multiple-choice', options: ['Seamus Heaney', 'Cecil Day-Lewis (1904-1972), who was Poet Laureate and father of actor Daniel Day-Lewis', 'Ted Hughes', 'Simon Armitage'], correctIndex: 1, explanation: 'Cecil Day-Lewis (1904-1972) was Poet Laureate from 1968 until his death. He was the father of actor Daniel Day-Lewis. The poem reflects real parental experience.', topic: 'Context', difficulty: 'foundation' },
  { id: 'wa-6', question: 'What form does the poem use?', type: 'multiple-choice', options: ['Free verse', 'Five quatrains with a loose half-rhyme scheme', 'A sonnet', 'Blank verse'], correctIndex: 1, explanation: 'Five quatrains with loose half-rhyme. The regular structure reflects the father\'s attempt to understand and contain his emotions, while the half-rhymes suggest things not quite resolved.', topic: 'Structure', difficulty: 'foundation' },
  { id: 'wa-7', question: 'Why has the memory haunted the speaker for so long?', type: 'multiple-choice', options: ['It was a bad football match', '"Eighteen years ago, almost to the day" — the moment symbolises the larger, ongoing process of letting go', 'He forgot something', 'The weather was bad'], correctIndex: 1, explanation: 'The specific detail "eighteen years ago" shows this small moment has haunted the father for years. It represents not just one day but the entire process of watching a child become independent.', topic: 'Meaning', difficulty: 'higher' },
  { id: 'wa-8', question: 'What does "love is proved in the letting go" mean?', type: 'multiple-choice', options: ['Love means holding on tightly', 'True love means giving the other person freedom — the greatest act of love is releasing your child', 'Love is easy', 'Letting go is selfish'], correctIndex: 1, explanation: 'The poem\'s deepest insight: love is not possession but release. The hardest thing a parent does is let go, but doing so is the ultimate proof of love.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'wa-9', question: 'How does the poem balance pain and acceptance?', type: 'multiple-choice', options: ['Only pain, no acceptance', 'The poem moves from painful memory to philosophical acceptance — separation hurts but is necessary for growth', 'Only acceptance, no pain', 'Neither — the tone is neutral'], correctIndex: 1, explanation: 'Day-Lewis balances genuine pain ("wrenched from its orbit") with mature acceptance ("selfhood begins with a walking away"). The poem does not pretend separation is easy, but recognises its necessity.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'wa-10', question: 'Which poem pairs best with Walking Away?', type: 'multiple-choice', options: ['Porphyria\'s Lover', 'Follower by Seamus Heaney', 'Neutral Tones', 'Love\'s Philosophy'], correctIndex: 1, explanation: 'Both Walking Away and Follower explore parent-child relationships and the passage of time. Walking Away is from the parent\'s perspective; Follower from the child\'s. Both deal with separation.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Walking Away explores the pain of parental love, the necessity of letting go, and how independence is the ultimate gift a parent gives.', keyPoints: ['Letting go — the hardest act of love', '"Selfhood begins with a walking away" — independence requires separation', 'Memory — one small moment haunts the father for 18 years', 'Love is proved in release, not possession'] },
  { topic: 'Language & Imagery', summary: 'Day-Lewis uses satellite and seed metaphors to present separation as both painful and natural.', keyPoints: ['"Satellite wrenched from its orbit" — violent, unnatural separation', '"Winged seed loosened from its parent stem" — natural, necessary dispersal', '"Dazed" — the father\'s bewilderment at losing control', '"Proved in the letting go" — love defined by release'] },
  { topic: 'Structure & Form', summary: 'Five quatrains with half-rhyme moving from specific memory to philosophical reflection on the nature of love.', keyPoints: ['Five quatrains — orderly structure containing complex emotion', 'Half-rhyme — things not quite resolved, like parental worry', 'Progression from memory to philosophy', '"Eighteen years ago" — the specific opening grounds the universal theme'] },
]

const ESSAY_PROMPTS = [
  'How does Day-Lewis present the pain of letting go in Walking Away?',
  'Compare how parent-child relationships are presented in Walking Away and one other poem from the anthology.',
  'How does Day-Lewis use language and structure to explore the relationship between love and independence?',
]

const comparePoems = [
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason: 'Both explore father-son relationships and role reversal. Day-Lewis watches his son leave; Heaney\'s father eventually stumbles behind the son. Both capture the pain of changing dynamics.',
    themes: ['Father-son', 'Role reversal', 'Growing up'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason: 'Both explore parental love across a threshold. Day-Lewis watches his child cross into independence; Causley\'s parents wait beyond the boundary of death.',
    themes: ['Parental love', 'Separation', 'Thresholds'],
  },
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason: 'Both meditate on how love is expressed through quiet acts rather than grand declarations. Day-Lewis finds love in letting go; Dooley finds it in everyday correspondence.',
    themes: ['Love', 'Distance', 'Reflection'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function WalkingAwayPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Walking Away by C. Day Lewis — Analysis & Annotations"
        description="Line-by-line analysis of Walking Away with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Poetry", url: "https://theenglishhub.app/revision/poetry" },
          { name: "Love and Relationships", url: "https://theenglishhub.app/revision/poetry/love-and-relationships" },
          { name: "Walking Away", url: "https://theenglishhub.app/revision/poetry/love-and-relationships/walking-away" },
        ]}
      />
      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Love and Relationships
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">Walking Away</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Cecil Day-Lewis &middot; <em>The Gate and Other Poems</em> (1962)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Parental love', 'Separation', 'Growing up', 'Memory', 'Identity', 'Sacrifice'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Walking Away"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Walking Away"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={walkingAwayPoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparePoems.map((cp) => (
            <div
              key={cp.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80 hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cp.title}</h3>
                  <p className="text-xs text-muted-foreground">{cp.poet}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {cp.reason}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cp.themes.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cp.link} />}
              >
                Study {cp.title}
                <ArrowRight className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational
        criticism under UK fair-dealing provisions (Copyright, Designs and
        Patents Act 1988, s.30). No commercial use is intended. All quotations
        remain the intellectual property of the respective rights holders.
      </footer>
    </div>
  )
}
