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

const motherAnyDistancePoem: PoemData = {
  title: 'Mother, any distance',
  poet: 'Simon Armitage',
  lines: [
    {
      text: 'Mother, any distance greater than a single span',
      annotations: [
        {
          type: 'Direct address',
          note: 'Opening with "Mother" makes this intimate and personal, as though the speaker is calling out to her directly.',
          color: '#3b82f6',
        },
        {
          type: 'Metaphor',
          note: '"Single span" means an arm\'s length, but also suggests the small distances of childhood when mother and child were always close.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'requires a second pair of hands.',
      annotations: [
        {
          type: 'Dependence',
          note: "The speaker still needs his mother's help. The practical task of measuring a house becomes a metaphor for the emotional transition of leaving home.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'You come to help me measure windows, pelmets, doors,',
      annotations: [
        {
          type: 'Domestic imagery',
          note: 'The list of household features grounds the poem in a real, specific moment \u2014 moving into a new home \u2014 while the measuring tape becomes an extended metaphor.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'the acres of the walls, the prairies of the floors.',
      annotations: [
        {
          type: 'Hyperbole',
          note: '"Acres" and "prairies" exaggerate the size of the new home, reflecting the speaker\'s sense of the vastness and daunting nature of independence.',
          color: '#f59e0b',
        },
        {
          type: 'Metaphor',
          note: 'The rooms become wide open landscapes \u2014 exciting but intimidating. The new space represents the adult world the speaker is entering.',
          color: '#ef4444',
        },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: 'You at the zero-end, me with the spool of tape, recording',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Zero-end" suggests the mother is at the origin, the starting point \u2014 she is where the speaker\'s life began. He moves away while she stays anchored.',
          color: '#ef4444',
        },
        {
          type: 'Extended metaphor',
          note: 'The measuring tape represents the umbilical cord connecting mother and child \u2014 a lifeline that stretches but has not yet been cut.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'length, reporting metres, centimetres back to base, then leaving',
      annotations: [
        {
          type: 'Military language',
          note: '"Reporting back to base" uses military-style language, suggesting the mother is a safe headquarters and the speaker is venturing into unknown territory.',
          color: '#3b82f6',
        },
        {
          type: 'Enjambment',
          note: '"then leaving" runs into the next line, physically enacting the movement away from the mother. The line break mirrors the separation.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'up the stairs, the line still feeding out, unreeling',
      annotations: [
        {
          type: 'Vertical movement',
          note: 'Moving "up the stairs" suggests aspiration and growth. The speaker is rising, progressing, climbing towards independence.',
          color: '#10b981',
        },
        {
          type: 'Umbilical imagery',
          note: '"The line still feeding out" echoes an umbilical cord delivering nourishment. The connection sustains the speaker even as he moves away.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'years between us. Anchor. Kite.',
      annotations: [
        {
          type: 'Caesura',
          note: 'The full stops create dramatic pauses, slowing the poem to a halt for two powerful single-word sentences.',
          color: '#8b5cf6',
        },
        {
          type: 'Metaphor',
          note: '"Anchor" and "Kite" are contrasting images. The mother is the anchor (stable, grounding, holding fast). The speaker is the kite (wanting to fly, to be free, but still attached by a string).',
          color: '#ef4444',
        },
        {
          type: 'Tension',
          note: "These two words encapsulate the poem's central tension: security vs freedom, dependence vs independence, staying vs leaving.",
          color: '#f59e0b',
        },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: 'I space-making across the landing to the door,',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Space-making" is hyphenated as though newly invented. The speaker is literally creating space between himself and his mother \u2014 forging his own identity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'to the wall of windows, hoping to escape.',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Hoping to escape" reveals mixed emotions. He wants freedom but the word "hoping" suggests uncertainty \u2014 he is not confident he can manage alone.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Two floors below your fingertips still pinch',
      annotations: [
        {
          type: 'Precision',
          note: 'The "two floors below" emphasises the growing physical distance \u2014 the mother is far below, anchoring the tape. "Pinch" suggests careful holding and reluctance: she is unwilling to let the tape slip out of her grip.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'the last one-hundredth of an inch... I reach',
      annotations: [
        {
          type: 'Reluctance to release',
          note: 'The precise measurement "one-hundredth of an inch" shows how little connection remains \u2014 yet the mother still holds on. The image captures the painful, tender reluctance of letting go.',
          color: '#ef4444',
        },
        {
          type: 'Ellipsis',
          note: 'The three dots create a pause, a held breath, before the speaker stretches further. The ellipsis embodies the suspended moment between holding on and letting go.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'towards a hatch that opens on an endless sky',
      annotations: [
        {
          type: 'Imagery',
          note: 'The "hatch" opens onto "an endless sky" \u2014 a thrilling image of infinite possibility but also of danger. There is nothing to hold onto in an endless sky.',
          color: '#10b981',
        },
        {
          type: 'Symbolism',
          note: 'The sky represents the limitless potential of adulthood and independence. The hatch is the threshold between childhood security and the unknown.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'to fall or fly.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'The final line offers two outcomes: falling (failure, danger) or flying (freedom, success). The poem ends on this unresolved tension \u2014 independence is both exhilarating and terrifying.',
          color: '#f59e0b',
        },
        {
          type: 'Half-rhyme',
          note: '"Fly" half-rhymes with "sky" above, creating a sense of near-resolution without full closure, mirroring the speaker\'s uncertain future.',
          color: '#8b5cf6',
        },
      ],
    },
  ],

  context:
    '<p><strong>Simon Armitage (b. 1963)</strong> is a contemporary British poet from Marsden, West Yorkshire. He has been UK Poet Laureate since May 2019, succeeding Carol Ann Duffy (2009-2019). He originally trained as a probation officer, is now a professor at Leeds University, and served as Oxford Professor of Poetry from 2015 to 2019. His poetry is known for its colloquial language, dry humour, and exploration of everyday life. (Note: although his anthology poems include war pieces such as <em>Remains</em> and <em>The Manhunt</em>, Armitage never served in any military or combat role — those poems are based on interviews with veterans.)</p>' +
    '<p><strong>"Mother, any distance"</strong> was published in <em>Book of Matches</em> (1993), a collection where each poem was designed to last the time it takes a match to burn. The poem draws on Armitage\'s own experience of leaving home.</p>' +
    '<p><strong>The extended metaphor</strong> of a measuring tape connects to the <strong>umbilical cord</strong> \u2014 the physical link between mother and child. As the speaker moves through his new house, the tape stretches and eventually must be released, just as a child must eventually separate from their parent.</p>' +
    '<p>The poem explores the <strong>emotional complexity of growing up</strong>: the desire for independence battling against the security of parental love. It captures a universal moment \u2014 leaving home \u2014 with tenderness and honesty.</p>' +
    '<p>Armitage has described the poem as being about <strong>the point at which you have to let go</strong>, acknowledging that both parent and child find this difficult.</p>',

  summary:
    'Stanza 1 (lines 1\u20134): The speaker asks his mother to help him measure his new home. The domestic task is grounded in reality but the exaggerated language ("acres", "prairies") hints at the daunting scale of adult independence.\n\n' +
    'Stanza 2 (lines 5\u20138): The mother holds the "zero-end" of the tape while the speaker moves away. The tape becomes an umbilical cord, stretching through the house. The stanza ends with "Anchor. Kite." \u2014 two powerful metaphors for the mother\u2019s stability and the speaker\u2019s desire for freedom.\n\n' +
    'Stanza 3 (lines 9\u201312): The speaker reaches the top of the house and looks out through a hatch at "an endless sky". The poem ends with the unresolved phrase "to fall or fly" \u2014 independence could bring triumph or disaster, and the speaker stands on the threshold between the two.',

  formAndStructure:
    'Form: A loose, extended sonnet \u2014 the poem has 15 lines (one more than the traditional 14-line sonnet), echoing the love-sonnet tradition while exceeding it. Its irregular line lengths and lack of a strict rhyme scheme reflect the messy, imperfect reality of this parent-child relationship.\n\n' +
    'Stanza structure: Three stanzas of unequal length (roughly 4, 8 and 3 lines), with the final line "to fall or fly" set apart for emphasis. The asymmetry mirrors the way the measuring tape stretches and the gradual separation it enacts.\n\n' +
    'Enjambment: Used extensively throughout, especially "then leaving / up the stairs" and "recording / length". Lines run into each other just as the tape runs through the house, creating a sense of continuous movement away from the mother.\n\n' +
    'Caesura: "Anchor. Kite." uses dramatic full stops mid-line to create two punchy, contrasting images that encapsulate the poem\'s central tension.\n\n' +
    'Rhyme: Occasional half-rhymes ("doors/floors", "sky/fly") create a sense of almost-connection, reflecting the bond that is stretching but not yet broken.\n\n' +
    'End-stopped final line: "to fall or fly" ends the poem with a stark choice, leaving the outcome unresolved \u2014 the speaker is suspended between two possibilities.\n\n' +
    'Extended metaphor: The measuring tape/umbilical cord metaphor is sustained throughout the entire poem, giving it structural and thematic coherence.',

  keyQuotes: [
    {
      quote: 'Mother, any distance greater than a single span',
      analysis:
        'The direct address and reference to "a single span" (an arm\'s length) establishes the poem\'s core idea: the speaker has outgrown the close physical proximity of childhood and must now navigate greater distances alone.',
      themes: ['Family', 'Growing Up', 'Independence'],
    },
    {
      quote: 'the acres of the walls, the prairies of the floors',
      analysis:
        "Hyperbolic metaphors that transform a domestic interior into a vast landscape. The new home feels overwhelmingly large, reflecting the speaker's anxiety about the scale of adult responsibility.",
      themes: ['Independence', 'Fear', 'Growing Up'],
    },
    {
      quote: 'You at the zero-end',
      analysis:
        'The mother is at the origin point \u2014 where everything begins. "Zero" suggests she is the foundation, the starting point of the speaker\'s entire life. He measures his distance from her.',
      themes: ['Family', 'Dependence', 'Origins'],
    },
    {
      quote: 'reporting metres, centimetres back to base',
      analysis:
        'Military-style language casts the speaker as an explorer or soldier venturing into unknown territory, with the mother as "base" \u2014 the safe point to return to.',
      themes: ['Independence', 'Security', 'Family'],
    },
    {
      quote: 'the line still feeding out, unreeling',
      analysis:
        'The tape/umbilical cord continues to unspool. "Feeding" echoes a mother nourishing her child. The connection sustains the speaker even at a distance, but it is thinning.',
      themes: ['Family', 'Connection', 'Separation'],
    },
    {
      quote: 'Anchor. Kite.',
      analysis:
        "Two single-word sentences that crystallise the poem's central conflict. The mother is an anchor (grounding, stable, heavy) and the speaker is a kite (airborne, free, but dependent on the string). The tension between these is never resolved.",
      themes: ['Family', 'Independence', 'Tension'],
    },
    {
      quote: 'an endless sky',
      analysis:
        'The sky represents limitless possibility and freedom, but "endless" also implies a void \u2014 without boundaries or safety. Independence is exciting but terrifying.',
      themes: ['Independence', 'Fear', 'Freedom'],
    },
    {
      quote: 'to fall or fly',
      analysis:
        "The poem's final line presents two outcomes with equal weight. There is no reassurance \u2014 the speaker genuinely does not know whether independence will bring success or failure. The ambiguity is deliberate and powerful.",
      themes: ['Independence', 'Growing Up', 'Uncertainty'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor',
      example: 'the spool of tape / the line still feeding out, unreeling',
      effect:
        'The measuring tape represents the umbilical cord connecting mother and child. As the speaker moves through the house, the tape stretches \u2014 just as the emotional bond stretches when a child leaves home. This metaphor unifies the entire poem.',
      lineRef: 5,
    },
    {
      device: 'Hyperbole',
      example: 'the acres of the walls, the prairies of the floors',
      effect:
        'Exaggerating the size of the rooms makes the new home feel overwhelmingly vast, reflecting the speaker\'s anxiety. "Prairies" evokes the American frontier \u2014 uncharted, wild territory.',
      lineRef: 3,
    },
    {
      device: 'Metaphor',
      example: 'Anchor. Kite.',
      effect:
        'Two contrasting metaphors compressed into two words. The anchor grounds and restricts; the kite soars but needs a string. Together they capture the push-and-pull of the parent-child relationship during separation.',
      lineRef: 7,
    },
    {
      device: 'Enjambment',
      example: 'then leaving / up the stairs',
      effect:
        'The line break physically enacts the separation. "Leaving" hangs at the end of the line before the reader discovers it is just "up the stairs" \u2014 momentarily, it feels like leaving for good.',
      lineRef: 5,
    },
    {
      device: 'Ambiguity',
      example: 'to fall or fly',
      effect:
        'The final line refuses to resolve the poem\'s tension. "Fall" and "fly" are given equal weight, reflecting the genuine uncertainty of growing up. The reader is left suspended, just like the speaker.',
      lineRef: 11,
    },
    {
      device: 'Symbolism',
      example: 'a hatch that opens on an endless sky',
      effect:
        'The hatch is a threshold between childhood (the house, the mother) and adulthood (the open sky). Stepping through it means leaving safety behind. The "endless sky" symbolises infinite possibility and vulnerability.',
      lineRef: 10,
    },
    {
      device: 'Caesura',
      example: 'years between us. Anchor. Kite.',
      effect:
        'The full stops create dramatic pauses, breaking the flowing rhythm of the poem. Each word lands with impact, forcing the reader to consider "Anchor" and "Kite" as separate, weighty ideas.',
      lineRef: 7,
    },
    {
      device: 'Neologism',
      example: 'I space-making across the landing',
      effect:
        '"Space-making" is a coined compound word. The speaker is actively creating distance \u2014 it is a deliberate, effortful action, not passive drifting. Language itself bends to express this new experience.',
      lineRef: 9,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'mad-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'Buying furniture',
      'A son measuring his new home with his mother, using the tape measure as a metaphor for their bond',
      'A mother redecorating',
      'Moving house literally',
    ],
    correctIndex: 1,
    explanation:
      'The speaker measures rooms in a new home with his mother holding one end of the tape measure. The extending tape becomes a metaphor for the umbilical cord — the bond that stretches as the child gains independence.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'mad-2',
    question: 'What does the tape measure symbolise?',
    type: 'multiple-choice',
    options: [
      'A DIY tool only',
      'The umbilical cord — the bond between mother and child that stretches but never quite breaks',
      'A ruler',
      'A telephone wire',
    ],
    correctIndex: 1,
    explanation:
      'The tape measure is an extended metaphor for the umbilical cord. The mother holds one end (the anchor) while the son moves further away. It stretches but maintains connection.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'mad-3',
    question: 'What does "Anchor. Kite." suggest about the mother and son?',
    type: 'multiple-choice',
    options: [
      'They enjoy sailing and flying kites',
      'The mother is the anchor (stability, security) while the son is the kite (freedom, flight, independence)',
      'They are both stuck',
      'It describes the weather',
    ],
    correctIndex: 1,
    explanation:
      'The one-word sentences encapsulate the relationship perfectly. The mother anchors; the son soars. Both are necessary — a kite needs an anchor, and an anchor needs something to hold.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'mad-4',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Almost a sonnet — 15 lines that fall just outside the 14-line sonnet form',
      'A ballad',
      'Rhyming couplets',
    ],
    correctIndex: 1,
    explanation:
      "The poem has 15 lines — almost but not quite a sonnet. This near-miss mirrors the poem's theme of almost-but-not-quite letting go, of boundaries being tested.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'mad-5',
    question: 'Who is Simon Armitage?',
    type: 'multiple-choice',
    options: [
      'A Victorian poet',
      'The current Poet Laureate, known for accessible, conversational poetry rooted in Northern English experience',
      'A war correspondent',
      'A Romantic poet',
    ],
    correctIndex: 1,
    explanation:
      'Simon Armitage (b. 1963) became Poet Laureate in 2019. He is known for accessible, witty poetry that uses everyday language and imagery to explore universal themes.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'mad-6',
    question: 'What does "to fall or fly" suggest about independence?',
    type: 'multiple-choice',
    options: [
      'The speaker is afraid of heights',
      'Independence is presented as both thrilling and terrifying — freedom carries the risk of failure',
      'The speaker is a pilot',
      'It describes a bird',
    ],
    correctIndex: 1,
    explanation:
      'The final image presents independence as a leap into the unknown. "Fly" suggests exciting freedom; "fall" suggests the risk of failure. Growing up means accepting both possibilities.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'mad-7',
    question: 'What is the effect of the spatial imagery (floors, stairs, loft)?',
    type: 'multiple-choice',
    options: [
      'It describes a house tour',
      "The upward movement through the house mirrors the son's growing independence — higher means further from the mother",
      'It shows the house is large',
      'It is random description',
    ],
    correctIndex: 1,
    explanation:
      'The speaker moves upward through the house — from ground floor to loft. Each level takes him further from his mother at the base, physically enacting the growing distance of independence.',
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'mad-8',
    question: 'What does "your fingertips still pinch the last one-hundredth of an inch" suggest?',
    type: 'multiple-choice',
    options: [
      'The mother has strong hands',
      'The mother clings to the very last possible point of connection — she is reluctant to let go completely',
      'The tape measure is stuck',
      'The measurement is exact',
    ],
    correctIndex: 1,
    explanation:
      'The precise measurement "one-hundredth of an inch" shows how little connection remains — and yet the mother still holds on. The image captures the painful reluctance of letting go.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'mad-9',
    question: 'How does the poem move from security to risk?',
    type: 'multiple-choice',
    options: [
      "It doesn't change",
      'It progresses from the safe, shared measuring to the speaker alone at the top, contemplating whether to fly or fall',
      'It moves from risk to security',
      'It stays at the same level',
    ],
    correctIndex: 1,
    explanation:
      'The poem charts a progression from the shared, secure activity of measuring together to the speaker alone at the open window, facing the terrifying choice of independence.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'mad-10',
    question: 'Which poem pairs best with Mother, any distance?',
    type: 'multiple-choice',
    options: [
      'Neutral Tones',
      'Before You Were Mine by Carol Ann Duffy',
      "Porphyria's Lover",
      'When We Two Parted',
    ],
    correctIndex: 1,
    explanation:
      "Both explore the mother-child bond. Before You Were Mine looks back at the mother's past; Mother, any distance captures the present moment of separation and independence.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Mother, any distance explores the mother-child bond, the tension between security and independence, and the frightening thrill of growing up.',
    keyPoints: [
      'The umbilical cord metaphor — the bond stretches but persists',
      'Independence — thrilling but terrifying ("fall or fly")',
      'The mother as anchor — stability and reluctance to let go',
      'Growing up means accepting risk',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Armitage uses the extended tape measure metaphor, spatial imagery, and the anchor/kite contrast to explore separation.',
    keyPoints: [
      'Tape measure as umbilical cord — physical bond stretching',
      '"Anchor. Kite." — one-word sentences encapsulate the dynamic',
      '"Fall or fly" — independence as both risk and freedom',
      '"Last one-hundredth of an inch" — the mother\'s reluctance to release',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Almost a sonnet (15 lines) — the near-miss form mirrors the theme of almost-but-not-quite separating.',
    keyPoints: [
      '15 lines — almost but not quite a sonnet',
      'Upward movement through the house mirrors growing independence',
      'Half-rhymes — partial connections, like the stretching bond',
      'Final image of the open window — freedom and danger',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Armitage present the relationship between mother and son in Mother, any distance?',
  'Compare how parent-child separation is presented in Mother, any distance and one other poem from the anthology.',
  'How does Armitage use the extended metaphor of the tape measure to explore growing up?',
]

const comparePoems = [
  {
    title: 'Before You Were Mine',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/love-and-relationships/before-you-were-mine',
    reason:
      "Both explore the mother-child bond. Armitage focuses on separation; Duffy looks back possessively at her mother's life before motherhood.",
    themes: ['Family', 'Love', 'Independence'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason:
      "Both explore a child's evolving relationship with a parent. Heaney's roles reverse as the father ages; Armitage focuses on the moment of physical separation.",
    themes: ['Family', 'Growing Up'],
  },
  {
    title: 'Climbing My Grandfather',
    poet: 'Andrew Waterhouse',
    link: '/revision/poetry/love-and-relationships/climbing-my-grandfather',
    reason:
      'Both use extended metaphors to explore family bonds. Armitage uses a measuring tape; Waterhouse uses mountain climbing. Both convey love through physical imagery.',
    themes: ['Family', 'Love', 'Extended Metaphor'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function MotherAnyDistancePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Mother, Any Distance by Simon Armitage — Analysis & Annotations"
        description="Line-by-line analysis of Mother, Any Distance with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'Love and Relationships',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships',
          },
          {
            name: 'Mother, Any Distance',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/mother-any-distance',
          },
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
          <h1 className="text-heading-lg font-heading text-foreground">Mother, any distance</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Simon Armitage &middot; <em>Book of Matches</em> (1993)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Family', 'Independence', 'Growing Up', 'Love', 'Separation', 'Fear'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Mother, any distance"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Mother, any distance"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={motherAnyDistancePoem} />

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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cp.reason}</p>
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
        Poem text is reproduced for the purpose of private study and educational criticism under UK
        fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial use
        is intended. All quotations remain the intellectual property of the respective rights
        holders.
      </footer>
    </div>
  )
}
