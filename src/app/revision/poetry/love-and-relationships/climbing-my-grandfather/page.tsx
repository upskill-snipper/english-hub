'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ─────────────────────────────────────────────────────── */

const climbingMyGrandfatherPoem: PoemData = {
  title: 'Climbing My Grandfather',
  poet: 'Andrew Waterhouse',
  lines: [
    {
      text: 'I decide to do it free, without a rope or net.',
      annotations: [
        { type: 'Extended metaphor', note: 'The poem opens by establishing the central conceit: the speaker will "climb" his grandfather like a mountaineer scaling a rock face. "Free" means without safety equipment \u2014 this is an act of trust and vulnerability.', color: '#ef4444' },
        { type: 'Tone', note: '"I decide" is confident and deliberate. The speaker chooses to engage with his grandfather openly, without emotional protection or barriers.', color: '#3b82f6' },
      ],
    },
    {
      text: 'First, the foothills of his knees,',
      annotations: [
        { type: 'Metaphor', note: '"Foothills" transforms the grandfather\'s body into a landscape. The knees are the lower slopes \u2014 the accessible, easy starting point of the climb.', color: '#ef4444' },
        { type: 'Structure', note: '"First" signals the beginning of a journey. The poem will methodically ascend the grandfather\'s body from bottom to top.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'the rough material of his trousers',
      annotations: [
        { type: 'Tactile imagery', note: '"Rough material" evokes the physical texture of the grandfather\'s clothing. The detail is intimate and specific \u2014 the speaker remembers exactly how his grandfather felt.', color: '#10b981' },
      ],
    },
    {
      text: 'splintering crevasses of corduroy.',
      annotations: [
        { type: 'Visual imagery', note: '"Splintering crevasses" transforms the ridges of corduroy fabric into mountain crevasses. The mundane detail of clothing becomes dramatic and geological.', color: '#10b981' },
        { type: 'Sound', note: 'The hard "c" and "s" sounds in "splintering crevasses of corduroy" create a rough, textured sound that mirrors the feel of the fabric.', color: '#f59e0b' },
      ],
    },
    {
      text: 'Pushing up on his shirt, I pull myself',
      annotations: [
        { type: 'Physical verbs', note: '"Pushing" and "pull" are effortful, physical actions. The climb requires work \u2014 understanding a grandparent takes effort and engagement, not passive observation.', color: '#3b82f6' },
      ],
    },
    {
      text: 'on to his arm. The skin is smooth and thick',
      annotations: [
        { type: 'Enjambment', note: 'The line breaks across "myself / on to his arm", enacting the physical movement of hauling oneself up. The reader moves with the speaker.', color: '#8b5cf6' },
        { type: 'Tactile imagery', note: '"Smooth and thick" describes aged skin with tenderness. The physical detail creates intimacy \u2014 the speaker knows his grandfather\'s body through touch.', color: '#10b981' },
      ],
    },
    {
      text: 'like warm overcooked pastry.',
      annotations: [
        { type: 'Simile', note: 'Comparing elderly skin to "warm overcooked pastry" is affectionate rather than mocking. "Warm" adds comfort and love. The grandfather is associated with domestic warmth, perhaps baking.', color: '#ef4444' },
      ],
    },
    {
      text: 'I keep climbing, climbing,',
      annotations: [
        { type: 'Repetition', note: 'The repetition of "climbing" creates a sense of sustained effort and determination. The speaker will not give up until he reaches the summit \u2014 until he fully knows his grandfather.', color: '#f59e0b' },
      ],
    },
    {
      text: 'feeling his old tweed jacket',
      annotations: [
        { type: 'Tactile imagery', note: '"Old tweed jacket" is a specific, textured garment associated with an older generation. The clothing becomes a landscape feature to navigate, and a marker of the grandfather\'s era and character.', color: '#10b981' },
      ],
    },
    {
      text: 'rough at the fingers.',
      annotations: [
        { type: 'Sensory detail', note: '"Rough at the fingers" places the reader\'s hands on the jacket. The poem is intensely physical \u2014 understanding comes through touch, not words.', color: '#10b981' },
      ],
    },
    {
      text: 'Here I rested for a while, out of breath,',
      annotations: [
        { type: 'Pace', note: '"Rested for a while, out of breath" slows the poem down. The climb is tiring \u2014 getting to know someone deeply requires pauses, patience, and reflection.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'feeling the rise and fall of his breathing,',
      annotations: [
        { type: 'Intimacy', note: '"The rise and fall of his breathing" is an extraordinarily intimate detail. The speaker is close enough to feel his grandfather breathe. This closeness is the point of the entire climb.', color: '#ec4899' },
        { type: 'Rhythm', note: '"Rise and fall" creates a gentle, rocking rhythm that mimics breathing itself. The poem breathes with the grandfather.', color: '#f59e0b' },
      ],
    },
    {
      text: 'the overhanging of his chin.',
      annotations: [
        { type: 'Metaphor', note: '"Overhanging" transforms the grandfather\'s chin into a rock ledge or cliff overhang. The mountaineering metaphor is sustained with geological precision.', color: '#ef4444' },
      ],
    },
    {
      text: 'Finally, I pull myself up, reaching',
      annotations: [
        { type: 'Climax', note: '"Finally" signals the approach to the summit. "Pull myself up" requires maximum effort \u2014 the deepest understanding demands the most work.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'the crow\u2019s nest of his eyes.',
      annotations: [
        { type: 'Metaphor', note: '"Crow\'s nest" is the lookout platform at the top of a ship\'s mast \u2014 the highest point with the widest view. The grandfather\'s eyes are where the speaker finally sees the world from his perspective.', color: '#ef4444' },
        { type: 'Wordplay', note: '"Crow\'s nest" also puns on "crow\'s feet" \u2014 the wrinkles around elderly eyes. The metaphor works on multiple levels, blending age with elevation.', color: '#f59e0b' },
      ],
    },
    {
      text: 'All I can see is sky.',
      annotations: [
        { type: 'Final image', note: 'At the summit (the grandfather\'s eyes), the speaker sees only sky \u2014 openness, clarity, and infinity. Understanding the grandfather brings a sense of peace, freedom, and transcendence.', color: '#10b981' },
        { type: 'Ambiguity', note: 'Given Waterhouse\'s death, "all I can see is sky" takes on an elegiac quality. The grandfather may have already passed \u2014 looking into his eyes, the speaker sees heaven, or the vast emptiness of loss.', color: '#8b5cf6' },
      ],
    },
  ],

  context:
    '<p><strong>Andrew Waterhouse (1958\u20132001)</strong> was an English poet and environmentalist from Northumberland. He won the Forward Prize for Best First Collection with <em>In</em> (2000). Tragically, he took his own life in 2001, making his poetry posthumously poignant.</p>' +
    '<p><strong>"Climbing My Grandfather"</strong> was published in <em>In</em> (2000). The poem uses a single sustained metaphor \u2014 climbing a mountain \u2014 to explore the speaker\'s relationship with his grandfather.</p>' +
    '<p>The <strong>extended metaphor of mountaineering</strong> transforms the act of getting to know a grandparent into a physical journey. The grandfather\'s body becomes a landscape to explore, with clothing as terrain and features as geological formations.</p>' +
    '<p>The poem is <strong>entirely positive</strong>. Unlike many poems in the anthology that explore conflict, loss, or difficulty, "Climbing My Grandfather" presents family love as a source of wonder, warmth, and discovery.</p>' +
    '<p>Given Waterhouse\'s <strong>posthumous publication</strong> and early death, the poem has acquired additional layers of meaning. The final image of "sky" can be read as the grandfather looking towards heaven, or as the infinite, ungraspable nature of truly knowing another person.</p>' +
    '<p>The poem may also reflect on <strong>intergenerational connection</strong> \u2014 how a grandchild can bridge the gap between generations through patient, loving attention to physical detail.</p>',

  summary:
    'Lines 1\u20134: The speaker decides to "climb" his grandfather without safety equipment. He begins at the knees \u2014 the "foothills" \u2014 and navigates the corduroy of his trousers.\n\n' +
    'Lines 5\u201310: He ascends to the arm, feeling the smooth, thick skin. He continues up through the tweed jacket, which is rough at the fingers. Each physical detail reveals something about the grandfather\'s character and era.\n\n' +
    'Lines 11\u201313: The speaker rests, feeling his grandfather breathe. This intimate pause is the emotional heart of the poem \u2014 closeness itself is the reward.\n\n' +
    'Lines 14\u201316: He reaches the summit: the "crow\'s nest" of his grandfather\'s eyes. Looking out, "all I can see is sky" \u2014 understanding brings openness, clarity, and a kind of transcendence.',

  formAndStructure:
    'Form: Free verse with no regular rhyme scheme or metre. The lack of formal constraints mirrors the free, exploratory nature of the climb \u2014 the speaker discovers the grandfather without a predetermined path.\n\n' +
    'Single stanza: The poem is written as one continuous block of text, reflecting the unbroken, sustained effort of the climb. There are no pauses or stanza breaks \u2014 the journey is continuous and committed.\n\n' +
    'Sustained metaphor: The entire poem is built on a single extended metaphor: the grandfather as a mountain. This metaphor is maintained with remarkable consistency from "foothills" to "summit", giving the poem structural coherence.\n\n' +
    'Ascending structure: The poem physically moves upward through the grandfather\'s body: knees \u2192 trousers \u2192 shirt \u2192 arm \u2192 jacket \u2192 chin \u2192 eyes. The reader ascends with the speaker, creating a sense of building momentum and discovery.\n\n' +
    'Enjambment: Lines frequently run into each other, mimicking the continuous, hand-over-hand movement of climbing. The reader cannot pause \u2014 they must keep moving upward.\n\n' +
    'Present tense: The climb is narrated in present tense, making it feel immediate and ongoing. The speaker is discovering his grandfather in real time, and the reader discovers alongside him.\n\n' +
    'Pace variation: The poem slows at "I rested for a while" before the final push to the summit, mirroring the rhythm of an actual climb.',

  keyQuotes: [
    {
      quote: 'I decide to do it free, without a rope or net',
      analysis:
        'Free climbing without safety equipment requires trust and courage. The speaker approaches his grandfather without emotional barriers or protection \u2014 he is willing to be vulnerable.',
      themes: ['Family', 'Trust', 'Vulnerability'],
    },
    {
      quote: 'the foothills of his knees',
      analysis:
        '"Foothills" transforms the grandfather\'s body into a mountainous landscape. The knees are the gentle starting slopes. The metaphor establishes the grandfather as something vast, impressive, and worth exploring.',
      themes: ['Family', 'Admiration', 'Extended Metaphor'],
    },
    {
      quote: 'splintering crevasses of corduroy',
      analysis:
        'The ridges of corduroy fabric become geological crevasses. This transforms a mundane clothing detail into something dramatic and textured, showing how the speaker sees grandeur in the ordinary.',
      themes: ['Extended Metaphor', 'Memory', 'Perception'],
    },
    {
      quote: 'like warm overcooked pastry',
      analysis:
        'The grandfather\'s skin is compared to pastry \u2014 warm, soft, and slightly overdone. This is affectionate and domestic: the grandfather is associated with comfort, home, and nourishment.',
      themes: ['Love', 'Family', 'Warmth'],
    },
    {
      quote: 'feeling the rise and fall of his breathing',
      analysis:
        'The most intimate moment in the poem. The speaker is close enough to feel his grandfather breathe. This physical closeness represents emotional closeness \u2014 being truly present with another person.',
      themes: ['Intimacy', 'Love', 'Connection'],
    },
    {
      quote: 'the crow\u2019s nest of his eyes',
      analysis:
        'The "crow\'s nest" is the highest lookout point on a ship \u2014 reaching the grandfather\'s eyes is reaching the summit. It also puns on "crow\'s feet" (wrinkles), blending elevation with ageing.',
      themes: ['Family', 'Understanding', 'Perspective'],
    },
    {
      quote: 'I keep climbing, climbing',
      analysis:
        'Repetition conveys determination and sustained effort. Understanding a grandparent requires persistence \u2014 it is not easy or instant but a continuous, committed process.',
      themes: ['Determination', 'Family', 'Love'],
    },
    {
      quote: 'All I can see is sky',
      analysis:
        'The final line is expansive and ambiguous. At the summit, the speaker sees infinite openness \u2014 clarity, peace, perhaps heaven. Understanding the grandfather brings transcendence. The simplicity of the line is its power.',
      themes: ['Understanding', 'Peace', 'Transcendence'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'foothills / crevasses / overhanging / crow\u2019s nest / summit',
      effect:
        'The grandfather-as-mountain metaphor is sustained throughout the entire poem. Every physical detail of the grandfather is translated into mountaineering terminology, creating a unified, coherent conceit that transforms intimacy into adventure.',
      lineRef: 1,
    },
    {
      device: 'Tactile imagery',
      example: 'rough material / smooth and thick / rough at the fingers',
      effect:
        'The poem is dominated by the sense of touch. The speaker understands his grandfather through physical contact \u2014 the textures of clothing, skin, and fabric. Touch becomes a language of love.',
      lineRef: 2,
    },
    {
      device: 'Simile',
      example: 'like warm overcooked pastry',
      effect:
        'This affectionate, domestic comparison associates the grandfather with warmth, home, and baking. The simile is endearing rather than critical \u2014 "overcooked" conveys age without cruelty.',
      lineRef: 6,
    },
    {
      device: 'Enjambment',
      example: 'I pull myself / on to his arm',
      effect:
        'Lines run into each other, mimicking the continuous, hand-over-hand motion of climbing. The reader is pulled forward through the poem without rest, experiencing the physical effort.',
      lineRef: 4,
    },
    {
      device: 'Repetition',
      example: 'I keep climbing, climbing',
      effect:
        'The doubled "climbing" conveys determination and ongoing effort. The speaker will not stop until he reaches the top \u2014 until he fully knows and understands his grandfather.',
      lineRef: 7,
    },
    {
      device: 'Wordplay',
      example: 'the crow\u2019s nest of his eyes',
      effect:
        '"Crow\'s nest" simultaneously means a ship\'s lookout (elevation, perspective) and puns on "crow\'s feet" (wrinkles of age). The dual meaning enriches the final image with both height and tenderness.',
      lineRef: 14,
    },
    {
      device: 'Personification (reversed)',
      example: 'the foothills of his knees / the overhanging of his chin',
      effect:
        'Rather than personifying nature, Waterhouse "geographifies" the human body. The grandfather becomes a landscape, suggesting he is as vast, ancient, and worthy of exploration as a mountain.',
      lineRef: 1,
    },
    {
      device: 'Ambiguity',
      example: 'All I can see is sky',
      effect:
        'The final line can mean: the view from the summit is clear and infinite; the grandfather looks towards heaven (afterlife); or that truly knowing someone opens up vast, endless perspective. The ambiguity is powerful and moving.',
      lineRef: 15,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const comparePoems = [
  {
    title: 'Mother, any distance',
    poet: 'Simon Armitage',
    link: '/revision/poetry/love-and-relationships/mother-any-distance',
    reason: 'Both use extended metaphors to explore family bonds. Armitage uses a measuring tape/umbilical cord; Waterhouse uses mountaineering. Both convey love through physical imagery.',
    themes: ['Family', 'Love', 'Extended Metaphor'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason: 'Both present family members with warmth and tenderness. Causley\'s parents are idealised in a heavenly setting; Waterhouse\'s grandfather is a mountain to be explored with love.',
    themes: ['Family', 'Memory', 'Love'],
  },
  {
    title: 'Before You Were Mine',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/love-and-relationships/before-you-were-mine',
    reason: 'Both explore family relationships through vivid sensory detail. Duffy imaginatively reconstructs her mother\'s past; Waterhouse physically maps his grandfather\'s present.',
    themes: ['Family', 'Intimacy', 'Detail'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function ClimbingMyGrandfatherPage() {
  return (
    <div className="space-y-8">
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
          <h1 className="text-heading-lg font-heading text-foreground">Climbing My Grandfather</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Andrew Waterhouse &middot; <em>In</em> (2000)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Family', 'Love', 'Memory', 'Admiration', 'Connection', 'Understanding'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Climbing My Grandfather"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InteractivePoemViewer poem={climbingMyGrandfatherPoem} />

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
