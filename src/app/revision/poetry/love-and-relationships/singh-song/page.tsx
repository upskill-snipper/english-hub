'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

/* ── Poem data ─────────────────────────────────────────────────────── */

const singhSongPoem: PoemData = {
  title: 'Singh Song!',
  poet: 'Daljit Nagra',
  lines: [
    {
      text: 'I run just one ov my daddy\u2019s shops',
      annotations: [
        { type: 'Voice', note: 'The phonetic spelling ("ov" for "of") establishes the speaker\'s British-Indian accent from the first line. Nagra celebrates this voice rather than standardising it.', color: '#3b82f6' },
        { type: 'Context', note: '"My daddy\'s shops" (plural) suggests a family business empire. The speaker runs just one \u2014 the least ambitious son, perhaps, more interested in love than commerce.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'from 9 o\u2019clock to 9 o\u2019clock',
      annotations: [
        { type: 'Repetition', note: 'The twelve-hour shift "9 to 9" emphasises the monotonous, relentless grind of running the shop. The speaker\'s life is dominated by duty and routine.', color: '#f59e0b' },
      ],
    },
    {
      text: 'and di whole Indian road is all mine.',
      annotations: [
        { type: 'Pride', note: '"All mine" expresses ownership and pride, but "di whole Indian road" also hints at cultural segregation \u2014 this is an Indian community within Britain, a world within a world.', color: '#10b981' },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: 'My bride',
      annotations: [
        { type: 'Introduction', note: 'The "bride" is introduced abruptly and simply. She is the centre of the speaker\'s world, but the brevity also reflects the arranged marriage context \u2014 she arrived as a "bride", a role before a person.', color: '#ec4899' },
      ],
    },
    {
      text: 'she effing at my mum',
      annotations: [
        { type: 'Humour', note: '"Effing" is a euphemism that creates comedy through its bluntness. The bride is foul-mouthed and confrontational \u2014 nothing like the demure wife the parents expected.', color: '#f59e0b' },
        { type: 'Rebellion', note: 'The bride swears at her mother-in-law, subverting expectations of a dutiful daughter-in-law in a traditional Sikh household. She refuses to conform.', color: '#ef4444' },
      ],
    },
    {
      text: 'in all di colours of Punjabi',
      annotations: [
        { type: 'Metaphor', note: '"Colours of Punjabi" transforms swearing into something vivid and beautiful. Language is celebrated as colourful, expressive, and culturally rich \u2014 even profanity has aesthetic value.', color: '#ef4444' },
      ],
    },
    {
      text: 'den stumble like a drunk',
      annotations: [
        { type: 'Simile', note: '"Stumble like a drunk" makes the bride clumsy and chaotic \u2014 endearingly imperfect. She disrupts the orderly household with her wild energy.', color: '#10b981' },
      ],
    },
    {
      text: 'making everyone\u2019s teeth ache',
      annotations: [
        { type: 'Imagery', note: '"Teeth ache" suggests she is so sweet (to the speaker) that she causes a physical reaction, like eating too much sugar. To the customers, she may cause discomfort.', color: '#10b981' },
      ],
    },
    {
      text: 'on behalf ov my daddy on di ground floor.',
      annotations: [
        { type: 'Comic structure', note: 'The stanza cycles back to "my daddy" and the shop, grounding the romantic chaos in the reality of family business. The refrain creates a comic, cyclical rhythm.', color: '#8b5cf6' },
      ],
    },
    // Stanza break
    { text: '' },
    // Customers section
    {
      text: 'Customers dey say,',
      annotations: [
        { type: 'Dialogue', note: 'The poem shifts to the customers\' voice. Their complaints about the shop\'s decline create a comic chorus \u2014 they are outraged while the speaker is oblivious, absorbed in love.', color: '#3b82f6' },
      ],
    },
    {
      text: 'Hey Singh, ver is your milk? Vere is your bread?',
      annotations: [
        { type: 'Phonetic spelling', note: '"Ver" and "Vere" phonetically render another accent, possibly older-generation Indian English. Nagra gives voice to the community, not just the speaker.', color: '#3b82f6' },
        { type: 'Humour', note: 'The customers\' outraged questions about missing stock are funny because the reader knows the speaker is upstairs with his wife instead of minding the shop.', color: '#f59e0b' },
      ],
    },
    {
      text: 'Hey Singh, ver is your little barley? Vere is your wheat?',
      annotations: [
        { type: 'Refrain', note: 'The customers\' complaints form a refrain that recurs throughout the poem, creating a comic rhythm. Their indignation grows as the shop deteriorates.', color: '#f59e0b' },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: 'My bride',
      annotations: [
        { type: 'Repetition', note: '"My bride" begins multiple stanzas, becoming an affectionate refrain. Each time, it introduces another aspect of the bride\'s rebellious, lovable character.', color: '#f59e0b' },
      ],
    },
    {
      text: 'she\u2019s in the back',
      annotations: [
        { type: 'Setting', note: 'The bride is always "in the back" or upstairs \u2014 in the private, domestic space above the public shop. The contrast between shopfront duty and private love drives the poem\'s comedy.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'making up di new leg of di shopkeeper stockin',
      annotations: [
        { type: 'Double meaning', note: '"Making up di new leg of di shopkeeper stockin" suggests she is either mending stockings or \u2014 more likely \u2014 this is a playful sexual innuendo about what the couple do behind closed doors.', color: '#ec4899' },
      ],
    },
    // Stanza break
    { text: '' },
    // Night section
    {
      text: 'Vee share di chutney',
      annotations: [
        { type: 'Cultural detail', note: '"Chutney" is a specifically Indian food, grounding the love scene in cultural specificity. Sharing food is intimate \u2014 a domestic, sensual act.', color: '#10b981' },
      ],
    },
    {
      text: 'after vee made luv',
      annotations: [
        { type: 'Phonetic spelling', note: '"Luv" is a phonetic, affectionate spelling. The frank, unembarrassed reference to sex is refreshing \u2014 physical love is celebrated as natural and joyful.', color: '#3b82f6' },
      ],
    },
    {
      text: 'like vee share in di chutney',
      annotations: [
        { type: 'Simile', note: 'Lovemaking is compared to sharing chutney \u2014 both are spicy, warm, and communal. The simile is deliberately unromantic in a traditional Western sense, celebrating a different cultural register of intimacy.', color: '#ef4444' },
      ],
    },
    {
      text: 'of an evening ven she says,',
      annotations: [
        { type: 'Transition', note: 'The poem shifts to the intimate evening scene. The day\'s chaos gives way to quiet togetherness. "Ven she says" introduces the bride\'s own voice directly.', color: '#8b5cf6' },
      ],
    },
    // Stanza break
    { text: '' },
    // The bride speaks
    {
      text: 'for di moon in your eyes is a priceless ting',
      annotations: [
        { type: 'Romantic imagery', note: '"The moon in your eyes" is a traditional romantic image, but spoken in the bride\'s distinctive phonetic voice ("ting"), it becomes fresh and genuine rather than clich\u00e9d.', color: '#10b981' },
        { type: 'Contrast', note: '"Priceless" contrasts with the commercial world of the shop. Love is valued above money, trade, and family duty.', color: '#ef4444' },
      ],
    },
    {
      text: 'and our eyes lock like di doors ov di tandoori oven,',
      annotations: [
        { type: 'Simile', note: 'Their eyes "lock like di doors ov di tandoori oven" \u2014 a brilliantly original simile that is both romantic (locked gazes) and culturally specific (tandoori oven). Heat, passion, and Indian identity fuse.', color: '#ef4444' },
      ],
    },
    {
      text: 'sharing di same hot sigh at di same time.',
      annotations: [
        { type: 'Unity', note: '"Di same hot sigh at di same time" emphasises perfect synchronicity. The couple are in complete harmony \u2014 breathing together, feeling together. This is true intimacy.', color: '#ec4899' },
      ],
    },
    // Stanza break
    { text: '' },
    {
      text: 'My bride she say dis is di life.',
      annotations: [
        { type: 'Contentment', note: 'The bride\'s final statement is simple and profound. "Dis is di life" expresses total satisfaction with their love, their world, their defiance of expectation. Happiness needs no complexity.', color: '#ec4899' },
        { type: 'Phonetic voice', note: 'The phonetic spelling is maintained to the last line, celebrating the bride\'s authentic voice. Nagra refuses to translate or standardise \u2014 this is how she speaks, and it is beautiful.', color: '#3b82f6' },
      ],
    },
  ],

  context:
    '<p><strong>Daljit Nagra (b. 1966)</strong> is a British poet of Punjabi Sikh heritage, born in West London and raised in Sheffield. He won the Forward Prize for Best First Collection with <em>Look We Have Coming to Dover!</em> (2007) and has been BBC Radio 4\'s Poet in Residence.</p>' +
    '<p><strong>"Singh Song!"</strong> was published in <em>Look We Have Coming to Dover!</em> (2007). The poem celebrates the British-Indian experience with humour, warmth, and unapologetic cultural pride.</p>' +
    '<p><strong>"Singh"</strong> is a common Sikh surname meaning "lion". The title puns on "sing-song" \u2014 the poem\'s musical, rhythmic quality. It also celebrates Sikh identity as something joyful and vocal.</p>' +
    '<p>The poem explores the <strong>tension between duty and desire</strong>: the speaker is supposed to run his father\'s shop but keeps sneaking off to be with his new wife. Family obligation clashes with romantic love, and love wins.</p>' +
    '<p>Nagra uses <strong>phonetic spelling</strong> to represent British-Indian speech patterns. This is not mockery but celebration \u2014 an assertion that this voice is as valid and poetic as Standard English. The poem challenges whose language "counts" as literary.</p>' +
    '<p>The poem also touches on <strong>generational and cultural expectations</strong>: the parents expect a dutiful son and obedient daughter-in-law; instead they get a lovesick shopkeeper and a rebellious bride who swears in Punjabi.</p>',

  summary:
    'Opening (lines 1\u20133): The speaker introduces himself as the runner of one of his father\'s shops, working twelve-hour days. He takes pride in "di whole Indian road".\n\n' +
    'The bride (lines 5\u201310): His new wife is introduced \u2014 she swears at his mother, stumbles around, and disrupts the household. She is nothing like the obedient daughter-in-law expected.\n\n' +
    'Customer complaints (lines 12\u201314): The customers complain that the shop is neglected \u2014 no milk, no bread. The speaker is clearly upstairs with his wife instead of working.\n\n' +
    'Intimacy (lines 19\u201327): The couple share chutney after lovemaking. The bride speaks romantically about the moon in his eyes and their gazes locking "like di doors ov di tandoori oven". She declares "dis is di life".',

  formAndStructure:
    'Form: Irregular stanzas of varying length, reflecting the chaotic, playful energy of the relationship. The poem resists neat containment, just like the couple resists convention.\n\n' +
    'Refrain: "My bride" recurs as an affectionate refrain, introducing each new description of the wife. The customer complaints ("Hey Singh, ver is your milk?") form a comic counter-refrain.\n\n' +
    'Dialogue: The poem weaves together three voices \u2014 the speaker\'s narration, the customers\' complaints, and the bride\'s romantic declarations. This polyphony creates a lively, dramatic texture.\n\n' +
    'Phonetic spelling: Throughout the poem, Nagra uses phonetic representations ("ov", "di", "vee", "ven", "ting") to capture the speaker\'s British-Indian accent. This is a political and artistic choice that validates non-standard English as poetic language.\n\n' +
    'Movement from public to private: The poem moves from the public shop floor to the private upstairs, from duty to love, from day to night. This structural journey reflects the speaker\'s priorities \u2014 love over commerce.\n\n' +
    'Tone: The poem is predominantly humorous and celebratory, but beneath the comedy lies a serious point about cultural identity, belonging, and the right to define your own happiness.',

  keyQuotes: [
    {
      quote: 'I run just one ov my daddy\u2019s shops',
      analysis:
        '"Just one" suggests the speaker is the underachiever of the family. "My daddy\'s" emphasises the patriarchal ownership \u2014 the shop belongs to the father, and the son is merely managing it. Duty, not ambition, drives him.',
      themes: ['Duty', 'Family', 'Identity'],
    },
    {
      quote: 'she effing at my mum / in all di colours of Punjabi',
      analysis:
        'The bride swears at her mother-in-law in Punjabi \u2014 a shocking breach of family decorum. But "colours of Punjabi" transforms profanity into art. Language is celebrated as vibrant and expressive, not shameful.',
      themes: ['Rebellion', 'Culture', 'Language'],
    },
    {
      quote: 'Hey Singh, ver is your milk? Vere is your bread?',
      analysis:
        'The customers\' outraged complaints create a comic chorus. The shop is failing because the speaker neglects it for love. The phonetic spelling gives the customers their own distinctive voice.',
      themes: ['Duty', 'Humour', 'Community'],
    },
    {
      quote: 'Vee share di chutney / after vee made luv',
      analysis:
        'A beautifully unconventional love scene. Sharing chutney after sex is intimate, domestic, and culturally specific. Nagra refuses to use Western romantic conventions, celebrating Indian culture as equally romantic.',
      themes: ['Love', 'Culture', 'Intimacy'],
    },
    {
      quote: 'for di moon in your eyes is a priceless ting',
      analysis:
        '"Priceless" stands in deliberate contrast to the commercial world of the shop. Love cannot be bought or sold. The moon imagery is traditional romance, made fresh by the phonetic voice.',
      themes: ['Love', 'Value', 'Romance'],
    },
    {
      quote: 'our eyes lock like di doors ov di tandoori oven',
      analysis:
        'A brilliantly original simile. The tandoori oven is hot, sealed, and culturally Indian. The comparison fuses romantic intensity with cultural identity \u2014 their love is expressed through their heritage, not despite it.',
      themes: ['Love', 'Culture', 'Identity'],
    },
    {
      quote: 'sharing di same hot sigh at di same time',
      analysis:
        'Perfect synchronicity between the lovers. "Hot" connects to the tandoori oven simile. "Di same... di same" emphasises their unity \u2014 they breathe, feel, and exist as one.',
      themes: ['Love', 'Unity', 'Intimacy'],
    },
    {
      quote: 'My bride she say dis is di life',
      analysis:
        'The bride\'s final declaration is simple but profound. "Dis is di life" rejects external judgement and celebrates the couple\'s happiness on their own terms. It is an assertion of contentment and defiance.',
      themes: ['Love', 'Happiness', 'Defiance'],
    },
  ],

  languageDevices: [
    {
      device: 'Phonetic spelling',
      example: 'ov / di / vee / ven / ting / luv',
      effect:
        'Nagra uses phonetic spelling throughout to represent a British-Indian accent. This is a deliberate artistic and political choice: it asserts that this voice is poetic, valid, and worth celebrating, challenging Standard English\'s monopoly on literature.',
      lineRef: 0,
    },
    {
      device: 'Refrain',
      example: 'My bride',
      effect:
        'The repeated "My bride" functions as a loving refrain that structures the poem. Each occurrence introduces a new aspect of the bride\'s character, building a portrait of someone who is chaotic, rebellious, and deeply loved.',
      lineRef: 4,
    },
    {
      device: 'Simile',
      example: 'our eyes lock like di doors ov di tandoori oven',
      effect:
        'This culturally specific simile fuses romantic intensity with Indian identity. The tandoori oven is hot, sealed, and central to Indian cuisine \u2014 the couple\'s love is expressed through their cultural heritage.',
      lineRef: 24,
    },
    {
      device: 'Humour',
      example: 'Hey Singh, ver is your milk? Vere is your bread?',
      effect:
        'The customers\' indignant questions create comedy. The speaker\'s neglect of the shop for love is a running joke that also makes a serious point: love matters more than commerce.',
      lineRef: 12,
    },
    {
      device: 'Dialogue',
      example: 'Customers dey say / she says',
      effect:
        'Multiple voices create a dramatic, polyphonic texture. The poem becomes almost theatrical, with the speaker, customers, and bride each contributing their perspective.',
      lineRef: 11,
    },
    {
      device: 'Contrast',
      example: 'from 9 o\u2019clock to 9 o\u2019clock / dis is di life',
      effect:
        'The monotonous duty of the shop (9 to 9) contrasts with the joyful declaration "dis is di life". The poem\'s structure moves from obligation to freedom, from duty to love.',
      lineRef: 1,
    },
    {
      device: 'Double entendre',
      example: 'making up di new leg of di shopkeeper stockin',
      effect:
        'The phrase operates on two levels: literally mending stockings, and as a playful sexual innuendo. The ambiguity adds humour and intimacy without being crude.',
      lineRef: 17,
    },
    {
      device: 'Metaphor',
      example: 'in all di colours of Punjabi',
      effect:
        'Swearing in Punjabi is described as "colours" \u2014 vivid, various, and beautiful. Language becomes a palette. Even profanity is celebrated as culturally rich and expressive.',
      lineRef: 6,
    },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */


const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'ss-1', question: 'What is the poem about?', type: 'multiple-choice', options: ['Running a supermarket', 'A young shopkeeper who neglects his father\'s shop to spend time with his new wife, celebrating their playful love', 'A cooking competition', 'A family argument about business'], correctIndex: 1, explanation: 'The speaker runs his father\'s shop but keeps sneaking upstairs to be with his new wife. The poem celebrates their joyful, uninhibited love through humour and cultural detail.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'ss-2', question: 'What language does Nagra use and why?', type: 'multiple-choice', options: ['Standard English only', 'A mixture of Punjabi-English dialect and Standard English, celebrating dual cultural identity', 'Only Punjabi', 'French'], correctIndex: 1, explanation: 'Nagra blends Punjabi-English dialect with Standard English, reflecting the speaker\'s British-Indian identity. The language itself celebrates cultural hybridity.', topic: 'Language', difficulty: 'foundation' },
  { id: 'ss-3', question: 'What is the wife like?', type: 'multiple-choice', options: ['Quiet and traditional', 'Rebellious, playful, and unconventional — she defies traditional expectations', 'Angry and critical', 'Absent from the poem'], correctIndex: 1, explanation: 'The wife is described as unconventional and rebellious — she puts her "red crew-Loss Loss cut" in the mirror, challenges traditional roles, and is playfully disruptive. She defies expectations.', topic: 'Meaning', difficulty: 'higher' },
  { id: 'ss-4', question: 'What is the tone of the poem?', type: 'multiple-choice', options: ['Sad and melancholy', 'Joyful, humorous, and celebratory — love is presented as fun and liberating', 'Angry and bitter', 'Formal and serious'], correctIndex: 1, explanation: 'The poem is consistently joyful and humorous. Love is presented as playful, passionate, and liberating — a stark contrast to the more painful love poems in the anthology.', topic: 'Themes', difficulty: 'foundation' },
  { id: 'ss-5', question: 'What does the shop represent?', type: 'multiple-choice', options: ['Wealth and success', 'Duty, family expectation, and the older generation — which the speaker neglects for love', 'A happy workplace', 'The speaker\'s dream'], correctIndex: 1, explanation: 'The shop represents duty, family responsibility, and the expectations of the older generation (the father). The speaker\'s neglect of it for love shows passion triumphing over obligation.', topic: 'Themes', difficulty: 'higher' },
  { id: 'ss-6', question: 'Who is Daljit Nagra?', type: 'multiple-choice', options: ['A Victorian poet', 'A British-Indian poet who explores Punjabi-British identity through humour and dialect', 'A war poet', 'A Romantic poet'], correctIndex: 1, explanation: 'Daljit Nagra (b. 1966) is a British poet of Punjabi heritage. His poetry celebrates the experience of second-generation British-Indians, using humour and dialect.', topic: 'Context', difficulty: 'foundation' },
  { id: 'ss-7', question: 'How does the poem challenge traditional presentations of love?', type: 'multiple-choice', options: ['It follows conventions exactly', 'It presents love through humour, cultural specificity, and physical comedy rather than romantic idealism', 'It avoids love entirely', 'It criticises love'], correctIndex: 1, explanation: 'Singh Song! replaces Western romantic conventions with playful, culturally specific imagery. Love is expressed through shared chutney, sneaking from the shop, and irreverent humour.', topic: 'Themes', difficulty: 'higher' },
  { id: 'ss-8', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'A long free-verse poem with a song-like refrain ("Singh Song!") and dialogue sections', 'Blank verse', 'Quatrains'], correctIndex: 1, explanation: 'The poem uses free verse with a distinctive song-like quality (the title itself is a pun on "sing-song"). Dialogue sections and refrains create a musical, oral-tradition feel.', topic: 'Structure', difficulty: 'higher' },
  { id: 'ss-9', question: 'What is the effect of the customers\' complaints?', type: 'multiple-choice', options: ['They make the speaker sad', 'Their comic complaints highlight the speaker\'s neglect of duty — but the reader sides with love over commerce', 'They are supportive', 'They are ignored entirely'], correctIndex: 1, explanation: 'The customers\' frustrated complaints about out-of-date produce and poor service provide comic contrast. The reader enjoys the speaker\'s prioritisation of love over the mundane duty of shopkeeping.', topic: 'Structure', difficulty: 'grade-9' },
  { id: 'ss-10', question: 'Which poem pairs best with Singh Song!?', type: 'multiple-choice', options: ['Neutral Tones', 'Letters from Yorkshire by Maura Dooley', 'Exposure', 'Ozymandias'], correctIndex: 1, explanation: 'Both Singh Song! and Letters from Yorkshire explore relationships within specific cultural/social settings. Both present love through everyday, unglamorous detail rather than romantic idealism.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Singh Song! celebrates joyful, playful love, cultural identity, the tension between duty and desire, and unconventional relationships.', keyPoints: ['Love as joy and play — contrasts with painful love poems in the anthology', 'Duty vs desire — the shop (obligation) vs the wife (passion)', 'Cultural identity — Punjabi-British experience celebrated through language', 'The wife as unconventional — she defies traditional expectations'] },
  { topic: 'Language & Imagery', summary: 'Nagra uses Punjabi-English dialect, humour, food imagery, and playful cultural references to celebrate love.', keyPoints: ['Punjabi-English dialect — language as cultural identity', 'Food imagery — chutney and cooking as expressions of intimacy', 'Humour — love is fun, not solemn', 'Customers\' complaints — comic contrast with the love story'] },
  { topic: 'Structure & Form', summary: 'Free verse with song-like qualities, dialogue sections, and a refrain. The loose form mirrors the speaker\'s carefree attitude.', keyPoints: ['Free verse — no rigid form, matching the speaker\'s freedom', 'Song-like refrain — "Singh Song!" as musical, oral quality', 'Dialogue — voices of customers contrast with the love story', 'Long, flowing lines — energy and exuberance'] },
]

const ESSAY_PROMPTS = [
  'How does Nagra present love as joyful and liberating in Singh Song!?',
  'Compare how love is celebrated in Singh Song! and one other poem from the anthology.',
  'How does Nagra use language and form to explore cultural identity and love?',
]

const comparePoems = [
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason: 'Both celebrate love expressed through everyday, domestic details rather than grand romantic gestures. Both find beauty in the ordinary.',
    themes: ['Love', 'Everyday Life', 'Connection'],
  },
  {
    title: 'Winter Swans',
    poet: 'Owen Sheers',
    link: '/revision/poetry/love-and-relationships/winter-swans',
    reason: 'Both portray relationships that endure through difficulty. Sheers\' couple survive an argument silently; Nagra\'s couple thrive amid cultural tension with joyful defiance.',
    themes: ['Love', 'Resilience', 'Unity'],
  },
  {
    title: 'Porphyria\u2019s Lover',
    poet: 'Robert Browning',
    link: '/revision/poetry/love-and-relationships/porphyrias-lover',
    reason: 'Both feature dramatic monologues with a distinctive voice. Browning\'s speaker is obsessive and violent; Nagra\'s speaker is joyful and celebratory. Both challenge conventions of love poetry.',
    themes: ['Love', 'Voice', 'Dramatic Monologue'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function SinghSongPage() {
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
          <h1 className="text-heading-lg font-heading text-foreground">Singh Song!</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Daljit Nagra &middot; <em>Look We Have Coming to Dover!</em> (2007)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Love', 'Identity', 'Culture', 'Duty', 'Rebellion', 'Humour'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Singh Song!"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Singh Song!"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={singhSongPoem} />

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
