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

const winterSwansPoem: PoemData = {
  title: 'Winter Swans',
  poet: 'Owen Sheers',
  lines: [
    // Stanza 1
    {
      text: 'The clouds had given their all \u2014',
      annotations: [
        { type: 'Pathetic fallacy', note: 'The poem opens with heavy rain \u2014 the weather reflects the emotional state of the couple. "Given their all" personifies the clouds as exhausted, suggesting an argument has drained both partners.', color: '#10b981' },
      ],
    },
    {
      text: 'two days of rain and then a break',
      annotations: [
        { type: 'Structure', note: 'The "break" in the weather foreshadows the emotional turning point in the relationship. A storm has passed, and clarity is returning.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'in which we walked,',
      annotations: [
        { type: 'Pronoun', note: '"We" establishes that this is a poem about a couple, but the sparse detail suggests distance and silence between them.', color: '#3b82f6' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: 'the waterlogged earth',
      annotations: [
        { type: 'Imagery', note: '"Waterlogged" suggests saturation \u2014 the ground is heavy and sodden, mirroring the emotional heaviness of the relationship.', color: '#10b981' },
      ],
    },
    {
      text: 'gulping for breath at our feet',
      annotations: [
        { type: 'Personification', note: 'The earth "gulps for breath" as though drowning. This vivid personification of the landscape reflects the couple\'s own struggle to breathe through their difficulties.', color: '#ef4444' },
      ],
    },
    {
      text: 'as wood water water ripped wood.',
      annotations: [
        { type: 'Chiasmus', note: '"Wood water water wood" mirrors itself \u2014 a reversed pattern that enacts the disruption and confusion. The natural order is churned up, just like the relationship.', color: '#f59e0b' },
        { type: 'Sound', note: 'The alliterative "w" sounds create a wet, wading quality. The reader can almost hear the waterlogged landscape.', color: '#3b82f6' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'We skirted the lake, breathless and changed',
      annotations: [
        { type: 'Ambiguity', note: '"Skirted" means walked around the edge, but also suggests avoidance \u2014 the couple are circling their problems rather than confronting them. "Changed" hints at transformation.', color: '#f59e0b' },
      ],
    },
    {
      text: 'by the swans that came and went and came again.',
      annotations: [
        { type: 'Natural imagery', note: 'The swans arrive as a healing presence. Their movement \u2014 coming, going, returning \u2014 mirrors the ebb and flow of the relationship. They model fidelity and resilience.', color: '#10b981' },
      ],
    },
    {
      text: 'They were somehow between us, out of earshot,',
      annotations: [
        { type: 'Symbolism', note: 'The swans position themselves "between" the couple, becoming mediators. "Out of earshot" suggests the swans communicate wordlessly, modelling a connection beyond language.', color: '#ef4444' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'icebergs of white feather, wood water.',
      annotations: [
        { type: 'Metaphor', note: '"Icebergs" suggests that what is visible above the surface is only a fraction of the whole \u2014 like the hidden depths of the relationship. The swans appear serene but work hard beneath.', color: '#ef4444' },
      ],
    },
    {
      text: 'Wood water. Wood water. Wood water.',
      annotations: [
        { type: 'Repetition', note: 'The phrase "wood water" is repeated three times, creating a meditative, calming rhythm. The churning chaos of earlier has settled into a gentle, lapping pattern \u2014 the relationship is steadying.', color: '#f59e0b' },
      ],
    },
    {
      text: 'A flush of white. A stroke of white.',
      annotations: [
        { type: 'Visual imagery', note: '"Flush" and "stroke" are painterly terms, as though the swans are being painted onto the landscape. They are beautiful, luminous interruptions in the grey winter scene.', color: '#10b981' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 5
    {
      text: 'They were settled and folded and stilled',
      annotations: [
        { type: 'Tricolon', note: 'Three gentle verbs create a sense of peace and resolution. The swans have stopped moving \u2014 they are calm, paired, and at rest. This models what the couple might achieve.', color: '#f59e0b' },
      ],
    },
    {
      text: 'as wood pools wood. Wood pools wood.',
      annotations: [
        { type: 'Natural imagery', note: '"Pools" replaces the violent "ripped" from earlier. Water and wood now coexist peacefully, reflecting the couple\'s reconciliation.', color: '#10b981' },
      ],
    },
    {
      text: 'I took your hand,',
      annotations: [
        { type: 'Turning point', note: 'The first physical contact in the poem. After the emotional distance, one partner reaches out. This is the volta \u2014 the moment of reconciliation.', color: '#ec4899' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 6 (the final couplet)
    {
      text: 'our fingers folding together like the swans\u2019 wings',
      annotations: [
        { type: 'Simile', note: 'The couple\'s hands are compared to the swans\' folded wings \u2014 a beautiful image of two becoming one. The word "folding" echoes the swans being "folded" earlier, unifying couple and nature.', color: '#ef4444' },
      ],
    },
    {
      text: 'settling after flight.',
      annotations: [
        { type: 'Metaphor', note: '"Settling after flight" compares the relationship to a bird landing. The turmoil ("flight") is over and the couple have come to rest together. Peace has been restored.', color: '#ef4444' },
        { type: 'Structure', note: 'The final two lines form a couplet \u2014 the only paired lines in a poem of tercets. The form itself enacts reunification: two lines together, mirroring two people reunited.', color: '#8b5cf6' },
      ],
    },
  ],

  context:
    '<p><strong>Owen Sheers (b. 1974)</strong> is a Welsh poet, author, and playwright. His poetry is known for its connection to the natural world, particularly the Welsh landscape, and its exploration of relationships and intimacy.</p>' +
    '<p><strong>"Winter Swans"</strong> was published in <em>Skirrid Hill</em> (2005). The title "Skirrid" comes from the Welsh word <em>ysgariad</em>, meaning "divorce" or "separation". The collection explores relationships that are strained, broken, or healing.</p>' +
    '<p>The poem describes a <strong>couple walking together after an argument</strong>, using the natural world \u2014 particularly a pair of swans \u2014 as a catalyst for reconciliation. Swans traditionally <strong>mate for life</strong>, making them a powerful symbol of enduring love and fidelity.</p>' +
    '<p>Sheers uses <strong>pathetic fallacy</strong> throughout: the weather mirrors the couple\'s emotional state. The rain represents their conflict; the clearing skies represent healing. Nature is not just a backdrop but an active participant in the emotional narrative.</p>' +
    '<p>The poem suggests that <strong>love can be repaired through shared experience and the natural world</strong>. The couple do not speak \u2014 reconciliation happens through physical proximity, observation, and the simple act of holding hands.</p>',

  summary:
    'Stanzas 1\u20132 (lines 1\u20137): After two days of rain, a couple walk through a waterlogged landscape. The environment is churned up and chaotic \u2014 "wood water water ripped wood" \u2014 reflecting the disruption in their relationship.\n\n' +
    'Stanzas 3\u20134 (lines 9\u201315): They reach a lake where swans appear. The swans are serene and beautiful \u2014 "icebergs of white feather". The repeated phrase "wood water" shifts from violent to calm, marking the emotional turning point.\n\n' +
    'Stanzas 5\u20136 (lines 17\u201321): The swans settle and fold their wings, modelling peace. One partner takes the other\'s hand, and the poem ends with a couplet comparing their fingers to swans\' wings "settling after flight". The relationship is repaired.',

  formAndStructure:
    'Form: Six stanzas, five of which are tercets (three-line stanzas) and one final couplet (two lines). The shift from tercets to a couplet is structurally significant \u2014 the odd, unbalanced tercets represent the fractured relationship, while the final couplet brings two lines together, mirroring the couple\'s reunion.\n\n' +
    'Enjambment: Used extensively throughout. Lines flow into each other across stanza breaks, reflecting the continuous walk and the gradual, fluid process of reconciliation. The couple\'s healing is not abrupt but flowing.\n\n' +
    'Pathetic fallacy: The poem\'s structure follows the weather: storm \u2192 clearing \u2192 calm. This arc mirrors the couple\'s emotional journey from conflict through tension to reconciliation.\n\n' +
    'Volta: "I took your hand" (line 19) is the turning point. After stanzas of distance and observation, physical contact marks the moment of reconnection.\n\n' +
    'Natural imagery: The swans function as a structural centre. They arrive in the middle of the poem and drive the emotional transformation. Nature acts as healer and mediator.\n\n' +
    'Repetition and rhythm: "Wood water" shifts from the violent "wood water water ripped wood" to the calm "wood pools wood", enacting the transition from chaos to peace through the same words used differently.',

  keyQuotes: [
    {
      quote: 'The clouds had given their all',
      analysis:
        'Personification of the clouds suggests exhaustion after a storm. "Given their all" implies the conflict (both weather and relationship) has been intense but is now spent. There is space for recovery.',
      themes: ['Nature', 'Conflict', 'Healing'],
    },
    {
      quote: 'the waterlogged earth / gulping for breath',
      analysis:
        'The earth is personified as drowning, gasping for air. This mirrors the couple\'s own suffocation within their conflict \u2014 they too need space to breathe.',
      themes: ['Nature', 'Conflict', 'Struggle'],
    },
    {
      quote: 'wood water water ripped wood',
      analysis:
        'The chiasmus creates a sense of disorder and turbulence. "Ripped" is violent and destructive. The natural elements are in conflict, just like the couple.',
      themes: ['Conflict', 'Nature', 'Disruption'],
    },
    {
      quote: 'icebergs of white feather',
      analysis:
        'The swans are compared to icebergs \u2014 most of their substance is hidden beneath the surface. This mirrors both the hidden depths of the relationship and the calm surface that conceals emotional turmoil.',
      themes: ['Nature', 'Hidden Depths', 'Love'],
    },
    {
      quote: 'settled and folded and stilled',
      analysis:
        'A tricolon of gentle, peaceful verbs. Each word suggests a different aspect of calm: settling (coming to rest), folding (closing, protecting), stilling (becoming motionless). The swans model the peace the couple seek.',
      themes: ['Peace', 'Nature', 'Reconciliation'],
    },
    {
      quote: 'I took your hand',
      analysis:
        'The simplest and most powerful line in the poem. After stanzas of distance, one partner reaches out. The gesture is small but transformative \u2014 physical touch bridges the emotional gap.',
      themes: ['Love', 'Reconciliation', 'Connection'],
    },
    {
      quote: 'our fingers folding together like the swans\u2019 wings',
      analysis:
        'A beautiful simile comparing human hands to swan wings. "Folding together" suggests two becoming one. The couple mirror the swans, becoming a pair that belongs together.',
      themes: ['Love', 'Unity', 'Nature'],
    },
    {
      quote: 'settling after flight',
      analysis:
        '"Flight" works literally (the swans landing) and metaphorically (the couple\'s argument/turmoil). "Settling" means both physically landing and emotionally calming down. The relationship is at peace.',
      themes: ['Reconciliation', 'Peace', 'Nature'],
    },
  ],

  languageDevices: [
    {
      device: 'Pathetic fallacy',
      example: 'two days of rain and then a break',
      effect:
        'The weather mirrors the emotional state of the relationship throughout the poem. Rain represents conflict; the break represents the possibility of healing. Nature and emotion are inseparable.',
      lineRef: 1,
    },
    {
      device: 'Personification',
      example: 'the waterlogged earth / gulping for breath',
      effect:
        'The earth is given human qualities of struggling to breathe, creating empathy between the landscape and the couple. Their suffocation within the relationship is projected onto the natural world.',
      lineRef: 4,
    },
    {
      device: 'Chiasmus',
      example: 'wood water water ripped wood',
      effect:
        'The mirrored structure (ABBA) creates a sense of inversion and disorder. The natural elements are tangled and disrupted, reflecting the emotional turbulence of the relationship.',
      lineRef: 6,
    },
    {
      device: 'Simile',
      example: 'our fingers folding together like the swans\u2019 wings',
      effect:
        'The couple\'s reconciliation is directly compared to the swans\' behaviour. By mirroring the natural world, the couple\'s reunion feels organic, instinctive, and inevitable.',
      lineRef: 19,
    },
    {
      device: 'Symbolism',
      example: 'the swans that came and went and came again',
      effect:
        'Swans mate for life, making them a traditional symbol of fidelity and enduring love. Their presence between the couple acts as a reminder that lasting bonds can survive difficulty.',
      lineRef: 9,
    },
    {
      device: 'Metaphor',
      example: 'icebergs of white feather',
      effect:
        'Comparing swans to icebergs suggests that what is visible is only a small part of the whole. Like the relationship, the swans\' serene surface conceals effort and depth beneath.',
      lineRef: 12,
    },
    {
      device: 'Structural shift',
      example: 'Final couplet after five tercets',
      effect:
        'The poem\'s tercets (groups of three) are unbalanced \u2014 like the fractured couple. The final couplet (two lines paired together) enacts reunification through form. Structure mirrors meaning.',
      lineRef: 19,
    },
    {
      device: 'Repetition',
      example: 'Wood water. Wood water. Wood water.',
      effect:
        'The threefold repetition creates a meditative, calming rhythm \u2014 like lapping waves. What was violent ("ripped") earlier becomes soothing, marking the emotional transformation.',
      lineRef: 13,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */


const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'ws-1', question: 'What is the poem about?', type: 'multiple-choice', options: ['Birdwatching', 'A couple whose troubled relationship is repaired after watching swans together on a walk', 'A winter holiday', 'Feeding ducks in a park'], correctIndex: 1, explanation: 'A couple who have been arguing walk together in silence after rain. Watching swans on a lake becomes a turning point — nature shows them how to reconnect.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'ws-2', question: 'What do the swans symbolise?', type: 'multiple-choice', options: ['Winter weather', 'Lifelong partnership and reconciliation — swans mate for life, modelling the loyalty the couple needs', 'Freedom', 'Loneliness'], correctIndex: 1, explanation: 'Swans mate for life, making them a perfect symbol for committed love. Watching the swans "mate for life" prompts the couple to reconnect — nature teaches them about lasting partnership.', topic: 'Language', difficulty: 'foundation' },
  { id: 'ws-3', question: 'What does "the waterlogged earth gulping for breath" suggest about the relationship?', type: 'multiple-choice', options: ['The earth is drowning', 'The relationship has been saturated with conflict — it needs air and relief, just like the waterlogged ground', 'It describes normal rain', 'The couple is swimming'], correctIndex: 1, explanation: 'The pathetic fallacy of waterlogged earth mirrors the relationship — overwhelmed, saturated with tension, needing to breathe. The landscape reflects the couple\'s emotional state.', topic: 'Language', difficulty: 'higher' },
  { id: 'ws-4', question: 'What happens at the end of the poem?', type: 'multiple-choice', options: ['The couple separates', 'Their hands "swum the distance between us" and settle together — reconciliation', 'They argue again', 'They watch more birds'], correctIndex: 1, explanation: 'The couple\'s hands find each other and "fold, one over the other, like swans\' wings folding". The reconciliation mirrors the swans\' behaviour — nature has shown them the way back to each other.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'ws-5', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'Six tercets followed by a final couplet — the shift from three lines to two mirrors two people coming together', 'Free verse', 'Quatrains'], correctIndex: 1, explanation: 'Six tercets (three-line stanzas) followed by a final couplet (two lines). The shift from three to two lines enacts the couple coming together — two people, two lines, one unit.', topic: 'Structure', difficulty: 'higher' },
  { id: 'ws-6', question: 'Who is Owen Sheers?', type: 'multiple-choice', options: ['A Victorian poet', 'A contemporary Welsh poet and novelist known for exploring relationships and the natural world', 'A war poet', 'A Romantic poet'], correctIndex: 1, explanation: 'Owen Sheers (b. 1974) is a Welsh poet and novelist. His poetry frequently explores relationships, landscape, and the connection between the natural and human worlds.', topic: 'Context', difficulty: 'foundation' },
  { id: 'ws-7', question: 'What does "they mate for life" achieve in the poem?', type: 'multiple-choice', options: ['It is a nature fact', 'It is the poem\'s turning point — the fact about swans becomes an unspoken message about the couple\'s own relationship', 'It is irrelevant', 'It describes other animals'], correctIndex: 1, explanation: 'This line functions as the poem\'s volta. The fact about swans is not just ornithology — it is a mirror held up to the couple, silently asking: will you commit to each other like the swans do?', topic: 'Structure', difficulty: 'higher' },
  { id: 'ws-8', question: 'How does Sheers use water imagery throughout?', type: 'multiple-choice', options: ['As decoration', 'Water represents both the conflict (rain, waterlogged earth) and the resolution (the lake where swans reunite)', 'To describe the weather literally', 'Water is negative only'], correctIndex: 1, explanation: 'Water works dually: the rain and mud represent the relationship\'s difficulties, but the lake where the swans swim represents the calm, reflective space where reconciliation happens.', topic: 'Language', difficulty: 'higher' },
  { id: 'ws-9', question: 'How does the final couplet enact the poem\'s meaning structurally?', type: 'multiple-choice', options: ['It doesn\'t', 'The shift from tercets (3 lines) to a couplet (2 lines) physically enacts two people coming together into one unit', 'It creates a summary', 'It introduces a new idea'], correctIndex: 1, explanation: 'The structural shift from three lines to two is the poem\'s most elegant technique. The final couplet — two lines, like two people — physically enacts the reunion on the page.', topic: 'Structure', difficulty: 'grade-9' },
  { id: 'ws-10', question: 'Which poem pairs best with Winter Swans?', type: 'multiple-choice', options: ['When We Two Parted', 'Letters from Yorkshire by Maura Dooley', 'Porphyria\'s Lover', 'The Charge of the Light Brigade'], correctIndex: 0, explanation: 'Both Winter Swans and When We Two Parted explore relationships under strain, but from opposite outcomes — Winter Swans shows reconciliation while When We Two Parted shows permanent loss.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Winter Swans explores reconciliation, the healing power of nature, lifelong commitment, and the connection between landscape and emotion.', keyPoints: ['Reconciliation — the couple moves from distance to togetherness', 'Nature as teacher — the swans model lifelong partnership', 'Pathetic fallacy — landscape mirrors the relationship\'s state', 'Silent communication — the couple reconnects without words'] },
  { topic: 'Language & Imagery', summary: 'Sheers uses water imagery, swan symbolism, pathetic fallacy, and tactile detail to chart the journey from conflict to reconciliation.', keyPoints: ['Swans as symbol — "they mate for life" mirrors the relationship', 'Water imagery — rain/mud (conflict) vs lake (calm, resolution)', '"Waterlogged earth gulping for breath" — pathetic fallacy for the relationship', '"Folding" hands like swans\' wings — reconciliation through natural imagery'] },
  { topic: 'Structure & Form', summary: 'Six tercets followed by a closing couplet — the structural shift from three to two lines enacts two people coming together.', keyPoints: ['Tercets to couplet — form mirrors content (separation to union)', 'Volta at "they mate for life" — the turning point', 'Enjambment — connection flowing across stanza breaks', 'Present tense — the reconciliation is happening now'] },
]

const ESSAY_PROMPTS = [
  'How does Sheers present reconciliation in Winter Swans?',
  'Compare how nature is used to explore relationships in Winter Swans and one other poem from the anthology.',
  'How does Sheers use language and structure to show the journey from distance to togetherness?',
]

const comparePoems = [
  {
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    link: '/revision/poetry/love-and-relationships/neutral-tones',
    reason: 'Both use natural settings to reflect a relationship\'s state. Hardy\'s bleak landscape mirrors a dying relationship; Sheers\' landscape mirrors one healing.',
    themes: ['Nature', 'Love', 'Pathetic Fallacy'],
  },
  {
    title: 'Love\u2019s Philosophy',
    poet: 'Percy Bysshe Shelley',
    link: '/revision/poetry/love-and-relationships/loves-philosophy',
    reason: 'Both use nature to argue for togetherness. Shelley uses rivers and mountains as evidence that all things should unite; Sheers uses swans to model reconciliation.',
    themes: ['Nature', 'Love', 'Unity'],
  },
  {
    title: 'Singh Song!',
    poet: 'Daljit Nagra',
    link: '/revision/poetry/love-and-relationships/singh-song',
    reason: 'Both celebrate love that endures through difficulty. Sheers\' couple survive an argument; Nagra\'s couple sustain love amid cultural tension and duty.',
    themes: ['Love', 'Resilience', 'Connection'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function WinterSwansPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Winter Swans by Owen Sheers — Analysis & Annotations"
        description="Line-by-line analysis of Winter Swans with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Poetry", url: "https://theenglishhub.app/revision/poetry" },
          { name: "Love and Relationships", url: "https://theenglishhub.app/revision/poetry/love-and-relationships" },
          { name: "Winter Swans", url: "https://theenglishhub.app/revision/poetry/love-and-relationships/winter-swans" },
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
          <h1 className="text-heading-lg font-heading text-foreground">Winter Swans</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Owen Sheers &middot; <em>Skirrid Hill</em> (2005)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Love', 'Nature', 'Reconciliation', 'Conflict', 'Healing', 'Connection'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Winter Swans"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Winter Swans"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={winterSwansPoem} />

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
