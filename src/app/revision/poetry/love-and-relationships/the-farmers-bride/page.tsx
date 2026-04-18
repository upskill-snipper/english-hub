'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

/* ── Poem data ─────────────────────────────────────────────────────── */

const farmersBridePoem: PoemData = {
  title: "The Farmer's Bride",
  poet: 'Charlotte Mew',
  lines: [
    // Stanza 1
    {
      text: 'Three Summers since I chose a maid,',
      annotations: [
        { type: 'Possessive language', note: '"Chose" implies ownership \u2014 she had no agency in the marriage. The farmer speaks of selecting her like livestock.', color: '#f59e0b' },
      ],
    },
    { text: 'Too young maybe \u2014 but more\'s to do' },
    { text: 'At harvest-time than bide and woo.' },
    {
      text: 'When us was wed she turned afraid',
      annotations: [
        { type: 'Dialect', note: '"Us was wed" is non-standard grammar, establishing the farmer\'s rural, uneducated voice and grounding the poem in a specific social class.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'Of love and me and all things human;',
      annotations: [
        { type: 'List of three', note: 'The tricolon escalates from the specific ("love") to the universal ("all things human"), suggesting her fear is existential, not merely of the farmer.', color: '#10b981' },
      ],
    },
    {
      text: 'Like the shut of a winter\'s day',
      annotations: [
        { type: 'Simile', note: 'Compares her emotional withdrawal to the abrupt closing of a winter day \u2014 sudden, cold, and final.', color: '#3b82f6' },
      ],
    },
    { text: 'Her smile went out, and \'twasn\'t a woman \u2014' },
    { text: '' },
    { text: 'More like a little frightened fay.' },
    {
      text: 'One night, in the Fall, she runned away.',
      annotations: [
        { type: 'Dialect', note: '"Runned" is non-standard past tense, reinforcing the farmer\'s rural voice. "Fall" (autumn) adds seasonal decay imagery.', color: '#8b5cf6' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 2
    { text: '"We caught her, fetched her home again.' },
    {
      text: 'Not we, not any one of us.',
      annotations: [
        { type: 'Self-correction', note: 'The farmer corrects himself from "We" to "Not we," revealing guilt and awareness that the recapture was violent. The community acted as one oppressive force.', color: '#ef4444' },
      ],
    },
    { text: 'Too many men; and all she\'d do was stare' },
    {
      text: 'And shake and cower and cry. She\'d not been used,',
      annotations: [
        { type: 'Listing', note: 'The accumulation of frightened verbs ("shake," "cower," "cry") conveys her terror at being surrounded by men who forcibly returned her.', color: '#10b981' },
      ],
    },
    { text: 'Not her \u2014 she\'d never been so rough;' },
    // Stanza break
    { text: '' },
    // Stanza 3
    { text: 'She does the work about the house' },
    {
      text: 'As well as most, but like a mouse:',
      annotations: [
        { type: 'Simile', note: 'Reduces her to a small, frightened creature. The couplet rhyme (house/mouse) formally enacts her confinement within domestic space.', color: '#3b82f6' },
      ],
    },
    { text: 'Too many stairs to climb, too many rooms' },
    { text: 'And nothing, nothing in the house at night.' },
    // Stanza break
    { text: '' },
    // Stanza 4
    { text: 'But the young things need it \u2014 not me. Oh!' },
    {
      text: 'The brown of her \u2014 her eyes, her hair, her hair!',
      annotations: [
        { type: 'Repetition', note: 'The obsessive repetition of "her hair" reveals the farmer\'s fixation spiralling out of control. The exclamation "Oh!" marks a complete loss of composure.', color: '#ef4444' },
      ],
    },
  ],
  context: '<p><strong>Charlotte Mew</strong> (1869\u20131928) was a modernist poet who experienced personal tragedy, including the institutionalisation of two siblings and lifelong poverty. She published this poem in 1916.</p><p>The poem is a <strong>dramatic monologue</strong> spoken by a farmer whose young bride is terrified of him and of physical intimacy. It explores themes of <strong>trapped marriage</strong>, <strong>female oppression</strong>, and <strong>male desire</strong> in a rural setting where women had very little agency.</p><p>The bride is presented as a creature of nature \u2014 compared to animals and fairies \u2014 while the farmer\'s language reveals a troubling mix of <strong>tenderness and possessiveness</strong>. The poem can be read as a critique of Victorian and Edwardian marriage, where women were essentially <strong>property</strong> and had no legal right to refuse their husbands.</p><p>Mew\'s own experience as a queer woman in a repressive society likely informed her sympathy for the trapped bride and her understanding of desire that cannot be fulfilled.</p>',
  summary: 'A farmer narrates the story of his young bride who, from the moment of their wedding, was terrified of intimacy and "all things human." She ran away one night but was caught and brought back by the men of the village. Now she lives in the house, doing domestic work silently like a mouse, but the marriage remains unconsummated. The farmer\'s monologue shifts from matter-of-fact narration to increasingly desperate desire, ending with an obsessive fixation on her physical appearance that suggests the situation may become dangerous.',
  formAndStructure: 'Form: Dramatic monologue \u2014 the farmer is the sole speaker, giving us only his perspective. The bride is entirely voiceless.\n\nStructure: Irregular stanza lengths and line lengths mirror the farmer\'s unstable emotional state. The poem grows more fragmented as his composure breaks down.\n\nRhyme: Irregular rhyme scheme with frequent couplets (maid/afraid, house/mouse) that create a sense of confinement and entrapment.\n\nDialect: Non-standard grammar ("us was wed," "runned away") establishes the rural, working-class setting and the farmer\'s limited education.\n\nCaesura: Frequent dashes and mid-line pauses reflect the farmer\'s hesitation and self-correction, suggesting he is aware his behaviour is troubling.\n\nProgression: The poem moves from past narration to present description to desperate exclamation, tracking the farmer\'s escalating obsession.',
  keyQuotes: [
    { quote: 'Three Summers since I chose a maid', analysis: '"Chose" implies ownership and selection rather than mutual love. "Maid" emphasises her youth and virginity as commodities.', themes: ['Power', 'Ownership', 'Marriage'] },
    { quote: 'she turned afraid / Of love and me and all things human', analysis: 'Her fear extends beyond the farmer to humanity itself. The enjambment across the line break enacts the turning away.', themes: ['Fear', 'Isolation', 'Humanity'] },
    { quote: 'Like the shut of a winter\'s day', analysis: 'The simile captures the sudden, cold finality of her emotional withdrawal. Winter connotes death and barrenness.', themes: ['Loss', 'Coldness', 'Nature'] },
    { quote: '\'twasn\'t a woman \u2014 / More like a little frightened fay', analysis: 'He dehumanises her by comparing her to a fairy creature, both idealising and objectifying her. She becomes something other than human in his eyes.', themes: ['Dehumanisation', 'Fantasy', 'Othering'] },
    { quote: 'We caught her, fetched her home again', analysis: 'The language of capture \u2014 "caught," "fetched" \u2014 treats her like an escaped animal, revealing the violent power dynamics of the marriage.', themes: ['Power', 'Entrapment', 'Violence'] },
    { quote: 'She does the work about the house / As well as most, but like a mouse', analysis: 'The simile reduces her to a small, frightened creature. The couplet rhyme (house/mouse) formally enacts her confinement within domestic space.', themes: ['Domesticity', 'Entrapment', 'Silence'] },
    { quote: 'nothing, nothing in the house at night', analysis: 'The repetition of "nothing" conveys the emptiness of their marriage and the farmer\'s sexual frustration. Night-time implies the absent intimacy.', themes: ['Desire', 'Emptiness', 'Frustration'] },
    { quote: 'her eyes, her hair, her hair!', analysis: 'The obsessive repetition and exclamation mark signal the farmer losing control. His gaze fragments her into body parts, objectifying her completely.', themes: ['Obsession', 'Objectification', 'Desire'] },
  ],
  languageDevices: [
    { device: 'Dramatic monologue', example: 'Three Summers since I chose a maid', effect: 'The farmer is the sole narrator, so we only get his perspective. The bride is voiceless, which itself enacts the power imbalance the poem critiques.', lineRef: 0 },
    { device: 'Animal imagery', example: 'like a mouse / like a frightened fay', effect: 'Repeated animal and fairy comparisons dehumanise the bride, reducing her to a creature to be caught and kept rather than a person with agency.', lineRef: 18 },
    { device: 'Dialect', example: 'us was wed / she runned away', effect: 'Non-standard grammar establishes the farmer\'s rural working-class voice and creates authenticity, but also suggests limited self-awareness.', lineRef: 3 },
    { device: 'Possessive language', example: 'I chose / we caught her / fetched her home', effect: 'Verbs of ownership and control reveal the patriarchal power structures underlying the marriage. She is acted upon, never acting.', lineRef: 11 },
    { device: 'Repetition', example: 'her hair, her hair!', effect: 'The obsessive repetition at the poem\'s climax reveals the farmer\'s desire overwhelming his restraint, creating an ominous, unsettling ending.', lineRef: 22 },
    { device: 'Simile', example: 'Like the shut of a winter\'s day', effect: 'Captures the sudden, cold withdrawal of the bride\'s warmth. "Shut" is abrupt and final, while winter connotes death and emotional barrenness.', lineRef: 5 },
    { device: 'Caesura / self-correction', example: 'We caught her... Not we, not any one of us', effect: 'The farmer\'s self-correction reveals guilt and awareness that the recapture was violent, even as he tries to distance himself from it.', lineRef: 12 },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */


const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'fb-1', question: 'Who is the speaker?', type: 'multiple-choice', options: ['The bride herself', 'A farmer whose young wife is terrified of him and of physical intimacy', 'A neighbour', 'A priest'], correctIndex: 1, explanation: 'The poem is a dramatic monologue spoken by a farmer whose young bride fears him and all men. He describes her flight, capture, and continued terror with a mix of tenderness and frustration.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'fb-2', question: 'Why does the bride run away?', type: 'multiple-choice', options: ['She wants adventure', 'She is terrified of the farmer and of physical intimacy — "afraid of all things human"', 'She is homesick', 'She found another lover'], correctIndex: 1, explanation: 'The bride is "afraid of all things human", especially men and physical intimacy. She flees the marriage but is caught and brought back by the farmer and other men.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'fb-3', question: 'How is the bride described?', type: 'multiple-choice', options: ['As strong and confident', 'As an animal or fairy — compared to a hare, a mouse, a leveret — more creature than person', 'As angry and defiant', 'As elderly and wise'], correctIndex: 1, explanation: 'The bride is consistently compared to wild animals — a hare, a mouse, a leveret (young hare). She is associated with nature rather than human society, suggesting she is trapped in a role she cannot inhabit.', topic: 'Language', difficulty: 'foundation' },
  { id: 'fb-4', question: 'What does the final stanza reveal about the farmer?', type: 'multiple-choice', options: ['He is content with the situation', 'His desire becomes increasingly possessive and disturbing — "her eyes, her hair, her hair!" suggests barely contained obsession', 'He decides to let her go', 'He is angry at her'], correctIndex: 1, explanation: 'The final stanza\'s repetition of "her hair!" reveals the farmer\'s desire becoming obsessive and predatory. The exclamation marks suggest barely controlled passion that edges toward threat.', topic: 'Language', difficulty: 'higher' },
  { id: 'fb-5', question: 'What does the poem suggest about marriage in this period?', type: 'multiple-choice', options: ['Marriage was always happy', 'Women had little agency — the bride is essentially property, caught and returned like a runaway animal', 'Women could easily divorce', 'Marriage was optional'], correctIndex: 1, explanation: 'The poem critiques Victorian/Edwardian marriage where women had little legal right to refuse their husbands. The bride is captured and returned like escaped livestock — she has no autonomy.', topic: 'Context', difficulty: 'higher' },
  { id: 'fb-6', question: 'Who wrote the poem?', type: 'multiple-choice', options: ['Elizabeth Barrett Browning', 'Charlotte Mew (1869-1928), a modernist poet who experienced personal tragedy', 'Jane Austen', 'Carol Ann Duffy'], correctIndex: 1, explanation: 'Charlotte Mew (1869-1928) was a modernist poet. Her own experience as a queer woman in a repressive society likely informed her sympathy for the trapped bride.', topic: 'Context', difficulty: 'higher' },
  { id: 'fb-7', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'A dramatic monologue with varying line lengths and an irregular rhyme scheme', 'Free verse', 'Regular quatrains'], correctIndex: 1, explanation: 'The poem is a dramatic monologue with irregular line lengths and an inconsistent rhyme scheme. The formal irregularity mirrors the farmer\'s agitated, unstable emotional state.', topic: 'Structure', difficulty: 'foundation' },
  { id: 'fb-8', question: 'What does the changing of seasons represent?', type: 'multiple-choice', options: ['Nothing — it is just setting', 'Time passing without resolution — each season brings new frustration as the marriage remains unconsummated', 'The farmer enjoys gardening', 'Hope for improvement'], correctIndex: 1, explanation: 'The poem moves through seasons — "three Summers" have passed. Time moves but nothing changes — the bride remains fearful, the farmer grows more frustrated, and the situation becomes increasingly tense.', topic: 'Structure', difficulty: 'higher' },
  { id: 'fb-9', question: 'How does Mew create sympathy for both characters?', type: 'multiple-choice', options: ['She doesn\'t — only the bride gets sympathy', 'The farmer is presented as genuinely confused and frustrated, not purely villainous — while the bride\'s fear is painfully real', 'Only the farmer gets sympathy', 'Neither character is sympathetic'], correctIndex: 1, explanation: 'Mew creates a complex portrait: the farmer is not a cartoon villain but a confused, lonely man. Yet his desire becomes increasingly threatening. The bride\'s terror is genuine and pitiable. Both are trapped.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'fb-10', question: 'Which poem pairs best with The Farmer\'s Bride?', type: 'multiple-choice', options: ['Singh Song!', 'Porphyria\'s Lover by Robert Browning', 'Walking Away', 'Eden Rock'], correctIndex: 1, explanation: 'Both The Farmer\'s Bride and Porphyria\'s Lover feature male speakers with possessive desire for women. Both use dramatic monologue to reveal disturbing psychology beneath a surface of love.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'The Farmer\'s Bride explores trapped marriage, female oppression, male desire, the nature vs culture divide, and the loss of agency.', keyPoints: ['Trapped marriage — the bride has no freedom or choice', 'Female oppression — caught and returned like property', 'Male desire — increasingly possessive and threatening', 'Nature vs culture — the bride belongs to nature, not human society'] },
  { topic: 'Language & Imagery', summary: 'Mew uses animal comparisons, seasonal imagery, and an increasingly agitated voice to reveal the farmer\'s desire and the bride\'s fear.', keyPoints: ['Animal imagery — hare, mouse, leveret — the bride as wild creature', '"Her eyes, her hair, her hair!" — obsessive repetition', 'Seasonal change — time passes but nothing resolves', 'The bride compared to nature — she belongs outside, not in marriage'] },
  { topic: 'Structure & Form', summary: 'A dramatic monologue with irregular line lengths and rhyme, mirroring the farmer\'s unstable emotional state.', keyPoints: ['Dramatic monologue — the farmer reveals more than he intends', 'Irregular form — reflects agitation and instability', 'Changing stanza lengths — tension builds toward the disturbing finale', 'Seasonal structure — time frames the growing frustration'] },
]

const ESSAY_PROMPTS = [
  'How does Mew present the relationship between the farmer and his bride?',
  'Compare how desire is presented in The Farmer\'s Bride and one other poem from the anthology.',
  'How does Mew use the dramatic monologue form to create sympathy and unease?',
]

const comparePoems = [
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason: 'Both explore rural settings, but while Dooley\'s poem finds beauty in distance and communication, Mew\'s poem shows entrapment and the failure of connection within close proximity.',
    themes: ['Rural life', 'Communication', 'Distance'],
  },
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason: 'Both involve one person watching another. Day-Lewis watches with love as his son leaves; the farmer watches with obsessive desire as his bride is trapped.',
    themes: ['Watching', 'Power', 'Love vs Obsession'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason: 'Both use rural farming settings and dialect to establish voice. Heaney\'s speaker admires his father\'s skill; Mew\'s farmer reveals troubling possessiveness through his dialect.',
    themes: ['Rural life', 'Dialect', 'Power dynamics'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function TheFarmersBridePage() {
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
          <h1 className="text-heading-lg font-heading text-foreground">The Farmer&apos;s Bride</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Charlotte Mew &middot; <em>The Farmer&apos;s Bride</em> (1916)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Power', 'Desire', 'Entrapment', 'Marriage', 'Fear', 'Oppression'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="The Farmer's Bride"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="The Farmer's Bride"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={farmersBridePoem} />

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
    </div>
  )
}
