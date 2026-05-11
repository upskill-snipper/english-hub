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

const beforeYouWereMinePOem: PoemData = {
  title: 'Before You Were Mine',
  poet: 'Carol Ann Duffy',
  lines: [
    // Stanza 1
    {
      text: 'I\u2019m ten years away from the corner you laugh on',
      annotations: [
        {
          type: 'Time shift',
          note: "The speaker projects herself back in time to ten years before her own birth, imagining her mother's youth. This creates a possessive, controlling perspective over the past.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'with your pals, Maggie McGeeney and Jean Duff.',
      annotations: [
        {
          type: 'Detail',
          note: "Naming real friends grounds the poem in autobiographical specificity. These are real people from Duffy's mother's life, giving the poem documentary authenticity.",
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'The three of you bend from the waist, holding',
      annotations: [
        {
          type: 'Visual imagery',
          note: 'The image of three young women doubled over with laughter is vivid and joyful. The mother is carefree, young, and full of life \u2014 before motherhood changed everything.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'each other, or your knees, and shriek at the pavement.',
      annotations: [
        {
          type: 'Verb choice',
          note: '"Shriek" conveys uninhibited, wild laughter. The mother was loud, free, and unself-conscious \u2014 qualities the speaker associates with her pre-motherhood identity.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Your polka-dot dress blows round your legs. Marilyn.',
      annotations: [
        {
          type: 'Allusion',
          note: '"Marilyn" references Marilyn Monroe\'s iconic scene of her dress blowing up. The mother is glamorous and sexy \u2014 an image that clashes with her later identity as "Mum".',
          color: '#ef4444',
        },
        {
          type: 'Caesura',
          note: 'The full stop before "Marilyn" isolates the word, making it land with dramatic impact \u2014 a single-word sentence that transforms the mother into a movie star.',
          color: '#8b5cf6',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: 'I\u2019m not here yet. The thought of me doesn\u2019t occur',
      annotations: [
        {
          type: 'Possessive tone',
          note: 'The speaker is almost jealous of this time when her mother existed without her. "The thought of me doesn\'t occur" emphasises the mother\'s total freedom from parental responsibility.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'in the ballroom with the thousand eyes, the fizzy, movie tomorrows',
      annotations: [
        {
          type: 'Imagery',
          note: '"Thousand eyes" evokes a glittering dancehall \u2014 disco balls, admiring gazes. "Fizzy" suggests excitement, champagne, effervescence. The mother\'s youth is intoxicating.',
          color: '#10b981',
        },
        {
          type: 'Metaphor',
          note: '"Movie tomorrows" suggests her future seemed glamorous and full of possibility, like a film. Motherhood was not the script she imagined.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'the right walk home could bring. I\u2019m the spark',
      annotations: [
        {
          type: 'Enjambment',
          note: "\"I'm the spark\" runs across the stanza, connecting the mother's romantic youth to the speaker's own conception. The line break creates a momentary shock.",
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'that changed your life. Not the angel you\u2019d think of',
      annotations: [
        {
          type: 'Self-awareness',
          note: 'The speaker acknowledges she "changed" her mother\'s life \u2014 not necessarily for the better. She rejects the sentimental image of a baby as an "angel".',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'if you\u2019d looked up from your arms\u2019 content.',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Arms\' content" could mean the content of her arms (a baby) or the contentment her arms feel. Either way, the mother is absorbed in caring for the child, looking down rather than outward.',
          color: '#f59e0b',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'Even then I wanted the bold girl winking in Portobello,',
      annotations: [
        {
          type: 'Possessive language',
          note: '"I wanted" is controlling and acquisitive. The speaker claims desire for a version of her mother that existed before her \u2014 as though the mother belongs to her in every era.',
          color: '#ec4899',
        },
      ],
    },
    {
      text: 'somewhere in Italy, with a handful of paper roses.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Paper roses" are artificial \u2014 beautiful but not real. This hints that the speaker\'s vision of her mother\'s past may be romanticised and constructed from imagination rather than memory.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The street you\u2019re walking with the confidence of a woman',
      annotations: [
        {
          type: 'Characterisation',
          note: 'The mother walks with "confidence" \u2014 she is self-assured, independent, and free. This is a woman who has not yet been defined by motherhood.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'should be under my feet. I\u2019d like to be there.',
      annotations: [
        {
          type: 'Possessive language',
          note: '"Under my feet" and "I\'d like to be there" express a desire to own, occupy, and control her mother\'s past. The speaker wants to be present in every moment of her mother\'s life.',
          color: '#ec4899',
        },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'You reckon it\u2019s the dress, after a late night,',
      annotations: [
        {
          type: 'Colloquial tone',
          note: '"Reckon" is informal and conversational, suggesting a real mother-daughter exchange. The tone shifts to warmth and intimacy.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'you\u2019d dress up in for the walk from the station.',
      annotations: [
        {
          type: 'Detail',
          note: 'The mother puts on a special dress just for the short walk from the station \u2014 she takes pride in her appearance, in being seen. Fashion is her self-expression.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I\u2019m her. I\u2019m the cha-cha-cha on the marble stair.',
      annotations: [
        {
          type: 'Identification',
          note: '"I\'m her" \u2014 the speaker identifies completely with her mother, claiming her identity. The cha-cha-cha is a dance of joy and freedom that the mother taught the speaker.',
          color: '#ec4899',
        },
        {
          type: 'Sound',
          note: '"Cha-cha-cha" is onomatopoeic and rhythmic, evoking the sound of heels on marble stairs. It brings the memory alive through sound.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'You sparkle and waltz and laugh and clatter and blow.',
      annotations: [
        {
          type: 'Polysyndeton',
          note: 'The repeated "and" creates a breathless, excited list. Each verb captures a different facet of the mother\'s vitality \u2014 she is dazzling, joyful, and alive.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'I stamped my feet on that glamorous street.',
      annotations: [
        {
          type: 'Possessive language',
          note: '"Stamped my feet" suggests a child\'s tantrum \u2014 demanding attention, demanding ownership. The speaker claims her mother\'s glamorous past as her own territory.',
          color: '#ec4899',
        },
        {
          type: 'Rhyme',
          note: '"Feet" and "street" create an internal rhyme that ties the speaker physically to her mother\'s world, anchoring her in the glamorous past.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'I\u2019m her. Your ghost. The one who changed your life.',
      annotations: [
        {
          type: 'Role reversal',
          note: "The speaker calls herself her mother's \"ghost\" \u2014 reversing expectations. Usually it is the dead who haunt the living, but here the unborn child haunts the mother's past. Motherhood is framed as a kind of death of the mother's former self.",
          color: '#ef4444',
        },
        {
          type: 'Repetition',
          note: '"I\'m her" and "changed your life" are repeated from earlier, creating a cyclical structure. The poem ends where it conceptually began \u2014 with possession and transformation.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context:
    '<p><strong>Carol Ann Duffy (b. 1955)</strong> is a Scottish poet who served as Poet Laureate of the United Kingdom from 2009 to 2019 \u2014 the first woman and first openly LGBTQ+ person to hold the role. Her poetry often explores themes of identity, love, and the lives of women.</p>' +
    '<p><strong>"Before You Were Mine"</strong> was published in <em>Mean Time</em> (1993). The poem is addressed to Duffy\'s mother, imagining her life as a young, glamorous woman in 1950s Glasgow before she became a parent.</p>' +
    "<p>The poem is inspired by <strong>a photograph</strong> of Duffy's mother as a young woman, laughing with friends. Duffy has said the photo made her realise her mother had a whole life and identity before motherhood.</p>" +
    '<p>The title <strong>"Before You Were Mine"</strong> reverses the expected parent-child dynamic. Usually a parent might say "before you were born"; instead, Duffy says "before you were <em>mine</em>" \u2014 possessively claiming ownership of her mother.</p>' +
    '<p>The poem raises questions about <strong>how motherhood changes identity</strong>, whether children have the right to claim their parents, and how we romanticise the past through photographs and imagination.</p>',

  summary:
    "Stanza 1 (lines 1\u20135): The speaker imagines her mother ten years before she was born, laughing with friends on a street corner. Her dress blows like Marilyn Monroe's \u2014 she is young, glamorous, and free.\n\n" +
    'Stanza 2 (lines 6\u201310): The mother dances in ballrooms with "fizzy, movie tomorrows" ahead of her. The speaker acknowledges she is "the spark that changed your life" \u2014 she is aware that her birth ended her mother\'s carefree youth.\n\n' +
    "Stanza 3 (lines 11\u201315): The speaker expresses desire to occupy her mother's past \u2014 to walk those same streets, to claim that confidence. The possessive language intensifies.\n\n" +
    'Stanza 4 (lines 16\u201320): The poem shifts to childhood memories: the mother\'s dress, teaching the speaker to dance. The final line \u2014 "Your ghost. The one who changed your life" \u2014 frames the speaker as haunting her mother\'s former self.',

  formAndStructure:
    'Form: Four quintains (five-line stanzas), giving the poem a regular, balanced structure that contrasts with the messy emotional content of nostalgia and possession.\n\n' +
    'Present tense about the past: Duffy uses present tense ("I\'m ten years away", "your polka-dot dress blows") to describe events that happened before she was born. This makes the past feel vivid and immediate, as though the speaker is actually there \u2014 an act of imaginative possession.\n\n' +
    'Possessive language: The title itself ("Before You Were Mine") establishes a possessive dynamic. "Mine" recurs implicitly throughout \u2014 "I wanted", "I\'d like to be there", "I stamped my feet". The mother is treated as belonging to the speaker.\n\n' +
    'Direct address: The poem is addressed to "you" (the mother) throughout, creating an intimate, confrontational tone \u2014 almost like an accusation of having had a life before the speaker existed.\n\n' +
    'Cyclical structure: "I\'m her" and "the one who changed your life" appear in the second stanza and return in the final line, creating a circular structure that traps the mother in the speaker\'s possessive gaze.\n\n' +
    'Enjambment: Lines flow into each other, particularly between stanzas, reflecting the blurring of past and present, memory and imagination.\n\n' +
    'Contrast: The poem constantly contrasts the mother\'s glamorous youth with the implied domesticity of motherhood. The "before" is dazzling; the "after" is largely absent.',

  keyQuotes: [
    {
      quote: 'Before You Were Mine',
      analysis:
        'The title reverses parental possession. Instead of "before you were born", Duffy says "before you were mine" \u2014 claiming ownership of her mother. It frames the mother-daughter relationship as one of belonging and control.',
      themes: ['Love', 'Possession', 'Family'],
    },
    {
      quote: 'Your polka-dot dress blows round your legs. Marilyn.',
      analysis:
        'The allusion to Marilyn Monroe transforms the mother into a glamorous icon. The caesura before "Marilyn" makes the comparison land with dramatic force. The mother is sexy, confident, and admired.',
      themes: ['Youth', 'Glamour', 'Identity'],
    },
    {
      quote: 'the fizzy, movie tomorrows',
      analysis:
        '"Fizzy" suggests champagne, excitement, and effervescence. "Movie tomorrows" implies a future that seemed glamorous and cinematic. Motherhood was not the script the mother imagined for herself.',
      themes: ['Youth', 'Nostalgia', 'Lost Potential'],
    },
    {
      quote: 'I\u2019m the spark that changed your life',
      analysis:
        '"Spark" could mean a small flame (conception) or a catalyst for transformation. "Changed" is deliberately ambiguous \u2014 it does not say "improved". The speaker acknowledges that her birth was a turning point that ended her mother\'s freedom.',
      themes: ['Family', 'Change', 'Guilt'],
    },
    {
      quote: 'Even then I wanted the bold girl winking in Portobello',
      analysis:
        '"Even then" stretches the speaker\'s desire impossibly back before her own birth. "Bold" and "winking" characterise the mother as confident and flirtatious \u2014 a woman the speaker admires and envies.',
      themes: ['Possession', 'Nostalgia', 'Admiration'],
    },
    {
      quote: 'I stamped my feet on that glamorous street',
      analysis:
        'A child stamping her feet demands attention and claims territory. The speaker asserts her presence in her mother\'s past, refusing to let it exist without her. "Glamorous" shows she romanticises this world.',
      themes: ['Possession', 'Childhood', 'Nostalgia'],
    },
    {
      quote: 'You sparkle and waltz and laugh and clatter and blow',
      analysis:
        'Five verbs connected by "and" create a breathless, energetic list. Each verb captures a different quality: light, grace, joy, noise, movement. The mother is overwhelmingly alive.',
      themes: ['Youth', 'Vitality', 'Joy'],
    },
    {
      quote: 'Your ghost. The one who changed your life.',
      analysis:
        'The speaker calls herself her mother\'s "ghost", inverting the haunting metaphor. The unborn child haunts the mother\'s past, suggesting motherhood killed the mother\'s former identity. "Changed your life" is repeated from stanza 2, closing the cycle.',
      themes: ['Loss', 'Identity', 'Family'],
    },
  ],

  languageDevices: [
    {
      device: 'Allusion',
      example: 'Marilyn',
      effect:
        'The reference to Marilyn Monroe casts the mother as a glamorous, desirable icon. It elevates her from an ordinary woman to a cultural figure, emphasising what was lost when she became "just" a mother.',
      lineRef: 4,
    },
    {
      device: 'Possessive language',
      example: 'Before You Were Mine / I wanted / I stamped my feet',
      effect:
        'The speaker repeatedly claims ownership of her mother. "Mine" in the title sets the tone for a poem that treats the mother as the speaker\'s possession \u2014 subverting the usual parent-child power dynamic.',
      lineRef: 12,
    },
    {
      device: 'Present tense',
      example: 'your polka-dot dress blows / you sparkle and waltz',
      effect:
        "Using present tense for past events makes the mother's youth feel vivid, immediate, and ongoing. The speaker imaginatively inserts herself into a past she never witnessed.",
      lineRef: 4,
    },
    {
      device: 'Polysyndeton',
      example: 'sparkle and waltz and laugh and clatter and blow',
      effect:
        'The repeated "and" creates a breathless, accelerating rhythm. The mother\'s energy seems unstoppable, each verb piling on another facet of her vitality.',
      lineRef: 19,
    },
    {
      device: 'Metaphor',
      example: 'the fizzy, movie tomorrows',
      effect:
        "The mother's future is described as fizzy (effervescent, intoxicating) and cinematic. This romanticised vision contrasts with the implied reality of domestic motherhood.",
      lineRef: 7,
    },
    {
      device: 'Role reversal',
      example: 'Your ghost. The one who changed your life.',
      effect:
        "The speaker becomes the ghost, haunting her mother's past. This inverts the expected dynamic where the dead haunt the living, suggesting the unborn child's future existence cast a shadow backwards over the mother's youth.",
      lineRef: 21,
    },
    {
      device: 'Caesura',
      example: 'Your polka-dot dress blows round your legs. Marilyn.',
      effect:
        'The full stop isolates "Marilyn" as a one-word sentence, giving it cinematic impact. The pause forces the reader to linger on the comparison, transforming an ordinary detail into a glamorous allusion.',
      lineRef: 4,
    },
    {
      device: 'Internal rhyme',
      example: 'I stamped my feet on that glamorous street',
      effect:
        '"Feet" and "street" create a satisfying internal rhyme that ties the speaker physically to her mother\'s world. The rhyme also echoes the rhythm of stamping feet, reinforcing the childish demand for attention.',
      lineRef: 20,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bywm-1',
    question: 'Who is the speaker addressing?',
    type: 'multiple-choice',
    options: [
      'A friend',
      'Her mother — imagining her life before she became a parent',
      'A lover',
      'Herself',
    ],
    correctIndex: 1,
    explanation:
      'Duffy addresses her mother, imagining the glamorous, carefree life she had before motherhood changed everything. The title "Before You Were Mine" suggests possessive love.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-2',
    question: 'What does the title suggest about the relationship?',
    type: 'multiple-choice',
    options: [
      'The mother belongs to the daughter',
      'The speaker possessively claims her mother — "mine" suggests ownership of the mother by the child',
      'The mother was sold',
      'It refers to a pet',
    ],
    correctIndex: 1,
    explanation:
      'The possessive "mine" in the title reverses the usual parent-child dynamic. The daughter claims ownership of her mother, suggesting love so intense it becomes possessive.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-3',
    question: 'How does Duffy present the mother before motherhood?',
    type: 'multiple-choice',
    options: [
      'As sad and lonely',
      'As glamorous, carefree, and full of life — dancing, laughing, like Marilyn Monroe',
      'As strict and serious',
      'As elderly',
    ],
    correctIndex: 1,
    explanation:
      'The mother is compared to Marilyn Monroe, shown dancing and laughing with friends on the pavement. She represents freedom, glamour, and youthful joy before motherhood restricted her.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-4',
    question: 'What is the effect of the Marilyn Monroe reference?',
    type: 'multiple-choice',
    options: [
      'It shows the mother was a film star',
      'It glamorises the mother and suggests her pre-parenthood life was exciting, even iconic',
      'It is a random cultural reference',
      'It shows the mother was American',
    ],
    correctIndex: 1,
    explanation:
      'Comparing the mother to Marilyn Monroe — a glamorous, iconic figure — elevates her ordinary youth into something extraordinary and emphasises what was lost when motherhood began.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'bywm-5',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'A sonnet',
      'Four quintains (four five-line stanzas) — 20 lines in total, written in free verse',
      'Free verse with no stanza divisions',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      'Four five-line stanzas (quintains) = 20 lines. The regular five-line stanzas create a measured, balanced structure that contrasts with the messy emotional content of nostalgia and possession.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'bywm-6',
    question: 'What does "even then I wanted the bold girl" suggest?',
    type: 'multiple-choice',
    options: [
      'The speaker wanted a sister',
      'The speaker loved her mother before she was even born — love transcends chronology',
      'The speaker is selfish',
      'It refers to a friend',
    ],
    correctIndex: 1,
    explanation:
      'Duffy imagines wanting her mother even before being born. This impossibility intensifies the love — it is so powerful it breaks the rules of time itself.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'bywm-7',
    question: 'Who is Carol Ann Duffy?',
    type: 'multiple-choice',
    options: [
      'A Victorian novelist',
      'The first female and first openly gay Poet Laureate, known for dramatic monologues and persona poems',
      'A war correspondent',
      "A children's author only",
    ],
    correctIndex: 1,
    explanation:
      'Carol Ann Duffy (b. 1955) became the UK Poet Laureate in 2009. She is known for giving voice to marginalised perspectives and exploring relationships with vivid, accessible language.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'bywm-8',
    question: 'How does Duffy use tense in the poem?',
    type: 'multiple-choice',
    options: [
      'Only past tense',
      "She blends past and present tense, collapsing time — the mother's past life is imagined as vividly present",
      'Only future tense',
      'Only present tense',
    ],
    correctIndex: 1,
    explanation:
      "Duffy moves between past and present tense, making the mother's pre-parenthood life feel vivid and immediate. Time collapses — the past is as real as the present.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'bywm-9',
    question: 'What tension exists in the poem about motherhood?',
    type: 'multiple-choice',
    options: [
      'None — motherhood is celebrated',
      "The daughter loves being the child, but recognises her birth took away her mother's freedom and glamour",
      'The mother regrets having children',
      'The daughter wants to leave home',
    ],
    correctIndex: 1,
    explanation:
      'The poem contains a bittersweet tension: the daughter is grateful to exist, but acknowledges that her existence cost her mother the carefree, glamorous life she once had.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'bywm-10',
    question: 'Which poem pairs best with Before You Were Mine?',
    type: 'multiple-choice',
    options: [
      'Neutral Tones',
      'Mother, any distance by Simon Armitage',
      'When We Two Parted',
      "Porphyria's Lover",
    ],
    correctIndex: 1,
    explanation:
      "Both explore the mother-child relationship. Before You Were Mine looks back at the mother's past; Mother, any distance explores the present moment of separation.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Before You Were Mine explores possessive love, the impact of motherhood on identity, memory, and the tension between gratitude and guilt.',
    keyPoints: [
      'Possessive love — the daughter claims ownership of her mother',
      'Identity and sacrifice — motherhood changed who the mother was',
      'Memory and imagination — the daughter recreates a past she never witnessed',
      'Time — love transcends chronology',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      "Duffy uses glamorous imagery, pop culture references, sensory detail, and possessive language to recreate her mother's youth.",
    keyPoints: [
      'Marilyn Monroe comparison — the mother as glamorous icon',
      '"Before you were mine" — possessive claim on the mother',
      'Dancing and laughing imagery — freedom and joy before motherhood',
      '"Even then I wanted the bold girl" — love that transcends time',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Four quintains (five-line stanzas) — 20 lines total — with tense shifts that collapse past and present into a vivid, immediate experience.',
    keyPoints: [
      'Four five-line stanzas (quintains) — 20 lines total',
      'Tense shifts — past becomes present, making memories vivid',
      'Direct address ("you") — intimate, personal tone',
      'No regular rhyme — conversational, natural voice',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Duffy present the relationship between mother and daughter in Before You Were Mine?',
  'Compare how parent-child relationships are presented in Before You Were Mine and one other poem from the anthology.',
  'How does Duffy use language and structure to explore memory and identity?',
]

const comparePoems = [
  {
    title: 'Mother, any distance',
    poet: 'Simon Armitage',
    link: '/revision/poetry/love-and-relationships/mother-any-distance',
    reason:
      "Both explore the mother-child bond. Duffy looks back possessively at her mother's past; Armitage looks forward to the moment of separation.",
    themes: ['Family', 'Love', 'Separation'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason:
      'Both idealise parents in a past setting. Causley places his parents in a heavenly picnic; Duffy places her mother in a glamorous 1950s world.',
    themes: ['Family', 'Nostalgia', 'Memory'],
  },
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason:
      'Both explore connection across distance. Duffy bridges time; Dooley bridges physical distance. Both find intimacy through imagination.',
    themes: ['Love', 'Distance', 'Connection'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function BeforeYouWereMinePage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Before You Were Mine by Carol Ann Duffy — Analysis & Annotations"
        description="Line-by-line analysis of Before You Were Mine with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
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
            name: 'Before You Were Mine',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/before-you-were-mine',
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
          <h1 className="text-heading-lg font-heading text-foreground">Before You Were Mine</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Carol Ann Duffy &middot; <em>Mean Time</em> (1993)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Love', 'Family', 'Possession', 'Nostalgia', 'Identity', 'Youth'].map((theme) => (
          <Badge key={theme} variant="outline" className="text-xs">
            {theme}
          </Badge>
        ))}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Before You Were Mine"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Before You Were Mine"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={beforeYouWereMinePOem} />

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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground space-y-2">
        <p>
          <strong>Rights notice:</strong> &copy; Picador / Pan Macmillan and Rogers Coleridge &amp;
          White on behalf of Carol Ann Duffy (b. 1955). Quotations from{' '}
          <em>Before You Were Mine</em> are short fair-dealing extracts under CDPA 1988 &sect;30
          (criticism, review, quotation). For full text, students should consult the board-licensed
          AQA Love &amp; Relationships anthology or Duffy&rsquo;s collection <em>Mean Time</em>{' '}
          (1993).
        </p>
        <p>
          Poem text is reproduced for the purpose of private study and educational criticism under
          UK fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial
          use is intended. All quotations remain the intellectual property of the respective rights
          holders.
        </p>
      </footer>
    </div>
  )
}
