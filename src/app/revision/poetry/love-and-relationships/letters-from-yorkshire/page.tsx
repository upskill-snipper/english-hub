'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

/* ── Poem data ─────────────────────────────────────────────────────── */

const lettersPoem: PoemData = {
  title: 'Letters from Yorkshire',
  poet: 'Maura Dooley',
  lines: [
    // Stanza 1
    {
      text: 'In February, digging his garden, planting potatoes,',
      annotations: [
        { type: 'Imagery', note: 'Opening with a specific month and physical activity immediately establishes the rural, seasonal world of the Yorkshire correspondent.', color: '#10b981' },
      ],
    },
    { text: 'he wrote to tell me the first lapwings had returned' },
    { text: 'and, on his allotment, the cutting of a rose.' },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: 'It\'s not romance, simply how things are.',
      annotations: [
        { type: 'Tone', note: 'The speaker pre-empts any assumption of romantic love; the relationship is defined by a deeper, quieter connection.', color: '#8b5cf6' },
      ],
    },
    {
      text: 'You wouldn\'t think that such a casual thing could be',
      annotations: [
        { type: 'Direct address', note: '"You" draws the reader in, making us reflect on how we value everyday communication.', color: '#3b82f6' },
      ],
    },
    { text: 'more romantic than a dozen roses.' },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'His are the true transformations \u2014',
      annotations: [
        { type: 'Contrast', note: 'The dash creates a pause before the contrast between his physical, tangible world and her intellectual, screen-based one.', color: '#f59e0b' },
      ],
    },
    { text: 'word of mouth, from field to stove,' },
    {
      text: 'he feeds his days on what he finds.',
      annotations: [
        { type: 'Metaphor', note: 'Presents his daily experience as nourishment, implying his connection to nature sustains him spiritually as well as physically.', color: '#10b981' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'Is his life more real because he digs and plants',
      annotations: [
        { type: 'Rhetorical question', note: 'The speaker questions whether physical labour is more authentic than digital work, revealing her insecurity about her own urban lifestyle.', color: '#ef4444' },
      ],
    },
    { text: 'and tends, rather than just logging on and off?' },
    // Stanza break
    { text: '' },
    // Stanza 5
    { text: 'Sometimes I need to stand at the door,' },
    { text: 'perching at the edge of a country' },
    {
      text: 'I love, watching the sheep, the sky over Yorkshire,',
      annotations: [
        { type: 'Visual imagery', note: 'The vast Yorkshire sky symbolises the emotional and physical distance between the two correspondents.', color: '#3b82f6' },
      ],
    },
    { text: 'and to remember how a letter fixed things firmly.' },
    // Stanza break
    { text: '' },
    // Stanza 6
    {
      text: 'Still, it\'s the same old thing; he\'s out there',
      annotations: [
        { type: 'Colloquial tone', note: '"Same old thing" is deliberately understated, suggesting constancy and reliability in the relationship.', color: '#8b5cf6' },
      ],
    },
    { text: 'feeding the hens, stopping by the garden gate,' },
    {
      text: 'and looking out for me, and I for him.',
      annotations: [
        { type: 'Ambiguity', note: '"Looking out" means both physically watching and emotionally caring. The symmetry conveys mutual devotion and equality.', color: '#f59e0b' },
      ],
    },
  ],
  context: '<p><strong>Maura Dooley</strong> (born 1957) is a poet who lives in London but maintains a deep connection to the Yorkshire countryside through a long-distance correspondence. The poem explores the contrast between <strong>rural and urban lives</strong> and how genuine human connection can be sustained through simple, everyday communication.</p><p>The poem questions whether a life rooted in nature and physical labour is more <strong>authentic</strong> than one spent in front of screens. It celebrates the power of ordinary language and shared observation over grand romantic gestures, suggesting that true intimacy lies in <strong>noticing and reporting the small details</strong> of daily life.</p><p>Key themes include <strong>distance and connection</strong>, the tension between <strong>nature and technology</strong>, and the idea that love can be expressed through <strong>attention to the everyday</strong> rather than dramatic declarations.</p>',
  summary: 'The speaker receives a letter from a man in Yorkshire describing seasonal changes \u2014 lapwings returning, roses being cut. She reflects on the contrast between his hands-on rural life and her urban, screen-based existence. She questions which life is more "real" and finds herself drawn to the Yorkshire landscape in her imagination. The poem ends with a sense of mutual watchfulness and quiet devotion, as both correspondents look out for each other across the distance.',
  formAndStructure: 'Form: Free verse with no regular rhyme scheme, reflecting the natural, unforced quality of the correspondence.\n\nStructure: Six stanzas of varying length, mirroring the informal rhythm of letter-writing.\n\nTense: Present tense throughout, creating immediacy and suggesting the correspondence is ongoing and habitual.\n\nEnjambment: Frequent run-on lines mirror the flowing, conversational quality of letters and the continuous nature of the relationship.\n\nCaesura: Mid-line pauses (e.g. "It\'s not romance, simply how things are") create a reflective, considered tone.\n\nPronoun shift: Movement between "he," "I," and "you" widens the poem\'s scope from personal reflection to universal statement.',
  keyQuotes: [
    { quote: 'the first lapwings had returned', analysis: 'The lapwings symbolise renewal and the cyclical nature of both seasons and the relationship. "Returned" implies loyalty and constancy.', themes: ['Nature', 'Connection', 'Cycles'] },
    { quote: 'It\'s not romance, simply how things are', analysis: 'This denial of romance paradoxically makes the relationship seem more deeply romantic \u2014 love expressed through reality rather than artifice.', themes: ['Love', 'Authenticity'] },
    { quote: 'His are the true transformations', analysis: 'The word "true" elevates his physical, natural work above her intellectual labour. "Transformations" suggests something almost magical about working with the land.', themes: ['Nature vs Technology', 'Authenticity'] },
    { quote: 'he feeds his days on what he finds', analysis: 'Metaphor suggesting he is spiritually as well as physically nourished by his connection to the land. His life has a wholeness hers may lack.', themes: ['Nature', 'Fulfilment'] },
    { quote: 'Is his life more real because he digs and plants', analysis: 'The rhetorical question reveals the speaker\'s anxiety about the value of her own urban, desk-bound existence compared to his tangible, physical one.', themes: ['Identity', 'Nature vs Technology'] },
    { quote: 'perching at the edge of a country', analysis: '"Perching" suggests she is an outsider looking in, not quite belonging to either world. The word also echoes the bird imagery used earlier.', themes: ['Distance', 'Belonging'] },
    { quote: 'how a letter fixed things firmly', analysis: '"Fixed" has a double meaning: making permanent and repairing. Letters create a solid, lasting connection that digital communication may not.', themes: ['Communication', 'Connection'] },
    { quote: 'looking out for me, and I for him', analysis: 'The final line\'s perfect symmetry and mutual gaze convey equality and reciprocity in the relationship. "Looking out" means both watching and caring.', themes: ['Love', 'Reciprocity', 'Connection'] },
  ],
  languageDevices: [
    { device: 'Contrast', example: 'digs and plants / logging on and off', effect: 'Juxtaposes his physical, earthy labour with her digital, ephemeral work, highlighting the poem\'s central tension between rural authenticity and urban abstraction.', lineRef: 12 },
    { device: 'Rhetorical question', example: 'Is his life more real because he digs and plants and tends?', effect: 'Invites the reader to question what constitutes a meaningful life, while revealing the speaker\'s own self-doubt about her lifestyle choices.', lineRef: 12 },
    { device: 'Metaphor', example: 'he feeds his days on what he finds', effect: 'Presents his daily experience as nourishment, implying his connection to nature sustains him spiritually as well as physically.', lineRef: 10 },
    { device: 'Semantic field of nature', example: 'lapwings / rose / field / sheep / hens', effect: 'A rich accumulation of natural imagery reinforces the idea that the Yorkshire correspondent\'s life is rooted in the living world.', lineRef: 1 },
    { device: 'Enjambment', example: 'could be / more romantic than a dozen roses', effect: 'The run-on line mirrors the flow of conversation in a letter and delays the surprising conclusion, emphasising that simple communication outweighs grand gestures.', lineRef: 5 },
    { device: 'Ambiguity', example: 'looking out for me', effect: '"Looking out" means both physically watching and emotionally caring. This double meaning encapsulates the poem\'s message that love is expressed through attentiveness.', lineRef: 22 },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */


const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'lfy-1', question: 'What is the poem about?', type: 'multiple-choice', options: ['A tourist visiting Yorkshire', 'The connection between two people maintained through letters despite living very different lives', 'A love letter', 'A business correspondence'], correctIndex: 1, explanation: 'The poem explores how two people maintain a deep connection through letters despite living different lives — one rural and physical, the other urban and desk-bound.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'lfy-2', question: 'What does "Is his life more real because he digs and plants" suggest?', type: 'multiple-choice', options: ['His life is definitely better', 'The speaker questions whether a physical, outdoor life is more authentic than her own indoor, intellectual life', 'She looks down on gardening', 'She wants to move to Yorkshire'], correctIndex: 1, explanation: 'This rhetorical question reveals the speaker\'s anxiety about the value of her own work compared to his tangible, physical existence. She questions what constitutes a "real" life.', topic: 'Themes', difficulty: 'higher' },
  { id: 'lfy-3', question: 'What do the letters represent?', type: 'multiple-choice', options: ['Business documents', 'A lifeline of connection — words that bridge physical distance and different ways of living', 'Postcards from holiday', 'Official notices'], correctIndex: 1, explanation: 'The letters are the thread connecting two different worlds. They represent how language and shared feeling can bridge any distance — physical or experiential.', topic: 'Language', difficulty: 'foundation' },
  { id: 'lfy-4', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'Five tercets (three-line stanzas) — a compact, contained form', 'Free verse with no structure', 'Rhyming couplets'], correctIndex: 1, explanation: 'Five tercets (three-line stanzas) with no regular rhyme. The compact form mirrors the concise, meaningful nature of a letter.', topic: 'Structure', difficulty: 'foundation' },
  { id: 'lfy-5', question: 'Who wrote the poem?', type: 'multiple-choice', options: ['Carol Ann Duffy', 'Maura Dooley', 'Jane Weir', 'Imtiaz Dharker'], correctIndex: 1, explanation: 'Maura Dooley is a contemporary British poet. Letters from Yorkshire explores how communication sustains relationships across distance and difference.', topic: 'Context', difficulty: 'foundation' },
  { id: 'lfy-6', question: 'What does "It\'s the watching and the thinking that make this special" mean?', type: 'multiple-choice', options: ['She enjoys birdwatching', 'The act of observing, reflecting, and sharing — not the activity itself — creates connection between them', 'She prefers thinking to doing', 'Watching TV is special'], correctIndex: 1, explanation: 'The speaker realises that what makes their relationship special is not what they do but how they observe, think, and share. Connection comes from attention and care, not matching lifestyles.', topic: 'Themes', difficulty: 'higher' },
  { id: 'lfy-7', question: 'How does the poem present the contrast between two ways of living?', type: 'multiple-choice', options: ['One is clearly better than the other', 'Both are presented as valid — the physical/rural and intellectual/urban lives complement each other', 'Only the rural life is valued', 'Only the urban life is valued'], correctIndex: 1, explanation: 'The poem resolves its initial anxiety by recognising both ways of living are valid. What matters is not what you do but your capacity for observation, thought, and connection.', topic: 'Themes', difficulty: 'higher' },
  { id: 'lfy-8', question: 'What is the effect of "word of it"?', type: 'multiple-choice', options: ['It emphasises words are unreliable', 'It highlights the power of language — a single "word" can transmit the essence of an experience across distance', 'Words are unimportant', 'It is a cliche'], correctIndex: 1, explanation: '"Word" emphasises how language can compress and transmit experience. A letter carries not just information but the feeling and essence of a moment.', topic: 'Language', difficulty: 'grade-9' },
  { id: 'lfy-9', question: 'What is the ambiguity about the relationship between the two people?', type: 'multiple-choice', options: ['They are clearly married', 'Dooley deliberately leaves the nature of the relationship undefined — friends, lovers, or family — making it universal', 'They are strangers', 'They are work colleagues'], correctIndex: 1, explanation: 'The poem never defines the relationship precisely. This ambiguity makes the poem universal — it could be about any deep connection maintained across distance.', topic: 'Meaning', difficulty: 'grade-9' },
  { id: 'lfy-10', question: 'Which poem pairs best with Letters from Yorkshire?', type: 'multiple-choice', options: ['Porphyria\'s Lover', 'Sonnet 29 by Barrett Browning', 'Neutral Tones', 'Ozymandias'], correctIndex: 1, explanation: 'Both Letters from Yorkshire and Sonnet 29 explore the tension between physical presence and distance in a relationship. Both value connection but from different perspectives.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Letters from Yorkshire explores connection across distance, the value of different lifestyles, communication, and the power of shared observation.', keyPoints: ['Connection through letters — words bridge physical distance', 'Two ways of living — physical/rural vs intellectual/urban', 'Both are valid — what matters is observation and care', 'Communication sustains relationships'] },
  { topic: 'Language & Imagery', summary: 'Dooley uses nature imagery, rhetorical questioning, and simple, precise language to explore how words carry experience across distance.', keyPoints: ['Nature imagery — "the first lapwings" carry seasonal beauty', '"Is his life more real?" — questioning the value of different lives', 'Letters as lifeline — "word of it" transmits experience', 'Simple, precise language mirrors the clarity of a good letter'] },
  { topic: 'Structure & Form', summary: 'Five compact tercets with no regular rhyme — the form mirrors the concise, meaningful nature of a letter.', keyPoints: ['Tercets — compact, contained stanzas like paragraphs in a letter', 'No regular rhyme — natural, conversational tone', 'Enjambment — thoughts flow across line and stanza breaks', 'Present tense — the connection is ongoing and alive'] },
]

const ESSAY_PROMPTS = [
  'How does Dooley present the importance of communication in Letters from Yorkshire?',
  'Compare how relationships are maintained across distance in Letters from Yorkshire and one other poem from the anthology.',
  'How does Dooley use language and structure to explore what connects people?',
]

const comparePoems = [
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason: 'Both explore non-romantic love sustained across distance. Dooley\'s correspondents are separated by geography; Causley\'s speaker is separated from his parents by death.',
    themes: ['Distance', 'Connection', 'Memory'],
  },
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason: 'Both meditate on how love is expressed through quiet acts rather than grand declarations. Day-Lewis finds love in letting go; Dooley finds it in everyday correspondence.',
    themes: ['Love', 'Distance', 'Reflection'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason: 'Both contrast intellectual and physical worlds. Heaney\'s father ploughs while he writes poetry; Dooley\'s correspondent digs while she types at a screen.',
    themes: ['Rural life', 'Identity', 'Nature vs Intellect'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function LettersFromYorkshirePage() {
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
          <h1 className="text-heading-lg font-heading text-foreground">Letters from Yorkshire</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Maura Dooley &middot; <em>Sound Barrier: Poems 1982&ndash;2002</em> (2002)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Distance', 'Connection', 'Nature', 'Technology', 'Authenticity', 'Communication'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Letters from Yorkshire"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Letters from Yorkshire"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={lettersPoem} />

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
