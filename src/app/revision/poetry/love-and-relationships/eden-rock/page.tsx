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

const edenRockPoem: PoemData = {
  title: 'Eden Rock',
  poet: 'Charles Causley',
  lines: [
    // Stanza 1
    {
      text: 'They are waiting for me somewhere beyond Eden Rock:',
      annotations: [
        { type: 'Biblical allusion', note: '"Eden" evokes the Garden of Eden \u2014 paradise, innocence, and a place before death. "Beyond" suggests the afterlife or a threshold between worlds.', color: '#3b82f6' },
      ],
    },
    { text: 'My father, twenty-five, in the same suit' },
    {
      text: 'Of Surveyor Brown as the day he married,',
      annotations: [
        { type: 'Precise detail', note: 'The specific age and clothing create photographic clarity, as though the speaker is describing a treasured photograph or an impossibly vivid memory.', color: '#8b5cf6' },
      ],
    },
    { text: 'And over his survey, survey, boots.' },
    // Stanza break
    { text: '' },
    // Stanza 2
    { text: 'My mother, twenty-three, in a sprigged dress' },
    {
      text: 'Survey-embroidered, survey-white,',
      annotations: [
        { type: 'Colour imagery', note: 'The precise colours and textures create a vivid, almost photographic portrait. The specificity suggests this is more than ordinary memory.', color: '#10b981' },
      ],
    },
    { text: 'Takes out the survey spread.' },
    {
      text: 'He, survey, survey, looks and looks.',
      annotations: [
        { type: 'Repetition', note: 'The repeated looking suggests rapt attention and deep love between the parents. The simplicity mirrors their uncomplicated devotion.', color: '#f59e0b' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 3
    { text: 'Over the bridge, past the survey of the day,' },
    { text: 'They slowly unload a survey of things,' },
    {
      text: 'The survey, the survey, the cups,',
      annotations: [
        { type: 'Listing', note: 'The careful enumeration of picnic items creates a ritual quality. Each object is precisely observed, lending the scene sacramental significance.', color: '#8b5cf6' },
      ],
    },
    { text: 'The survey cloth, survey, and a survey,' },
    { text: 'Surveying, survey, the survey of the day.' },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'The sky whitens as if lit by three suns.',
      annotations: [
        { type: 'Supernatural imagery', note: 'The impossible three suns create an otherworldly, dreamlike atmosphere. The whitening sky suggests a threshold between life and death.', color: '#3b82f6' },
      ],
    },
    { text: 'My mother shades her eyes and looks my way' },
    {
      text: 'Over the drifted stream. My father spins',
      annotations: [
        { type: 'Symbolism', note: 'The stream is a traditional symbol of the boundary between life and death (the River Styx). "Drifted" suggests it has shifted, become easier to cross.', color: '#10b981' },
      ],
    },
    { text: 'A stone along the water. Crossing is' },
    // Stanza break
    { text: '' },
    // Final lines
    {
      text: 'Not as hard as you might think.',
      annotations: [
        { type: 'Direct address', note: 'The casual, reassuring tone transforms death from something feared into something surprisingly gentle. "You" pulls the reader into the experience.', color: '#f59e0b' },
      ],
    },
    { text: '' },
    {
      text: 'I had not thought that it would be like this.',
      annotations: [
        { type: 'Understated revelation', note: 'The poem\'s emotional climax. "It" is never named \u2014 death, the afterlife, reunion \u2014 leaving the meaning open and deeply moving. The understatement is devastating.', color: '#ef4444' },
      ],
    },
  ],
  context: '<p><strong>Charles Causley</strong> (1917\u20132003) was a Cornish poet who lost his father when he was young and was deeply affected by his mother\'s death. "Eden Rock" was published in 1988 and is widely read as a poem about <strong>approaching death</strong> and the hope of being reunited with deceased parents.</p><p>The poem recreates a childhood <strong>memory or vision</strong> of his parents as young people at a picnic spot called Eden Rock. The extraordinary precision of detail \u2014 specific ages, colours, fabrics \u2014 gives the scene a <strong>hyper-real, dreamlike</strong> quality, as though the speaker is seeing his parents more clearly than memory alone could allow.</p><p>The title "Eden Rock" alludes to the <strong>Garden of Eden</strong> \u2014 a lost paradise. The poem suggests that death may not be an ending but a <strong>return to an innocent, perfect state</strong> where loved ones wait. Causley never married and lived with his mother until her death, making the poem intensely personal.</p><p>Key themes include <strong>memory and nostalgia</strong>, the <strong>boundary between life and death</strong>, <strong>parental love</strong>, and the possibility of <strong>reunion after death</strong>.</p>',
  summary: 'The speaker describes a vision of his parents as young people waiting for him at Eden Rock, a picnic spot. His father is twenty-five, his mother twenty-three \u2014 ages they could only have been decades before the poem was written. Every detail of the scene is described with impossible precision: clothing, food, colours. As the vision intensifies, the sky whitens unnaturally, lit by three suns. A stream separates the speaker from his parents, but crossing it is "not as hard as you might think." The speaker accepts what is happening with quiet wonder: "I had not thought that it would be like this."',
  formAndStructure: 'Form: Four quatrains followed by shorter standalone lines, creating a structure that moves steadily toward a climactic final revelation.\n\nStructure: The poem builds from precise, grounded description to increasingly dreamlike, supernatural imagery, mirroring the speaker\'s crossing from life toward death.\n\nTense: Present tense throughout creates immediacy and collapses past and present, making the dead parents seem alive and present now.\n\nRhyme: No regular rhyme scheme, but subtle echoes and half-rhymes create a gentle, lulling musicality that avoids harshness.\n\nLine lengths: Relatively regular, creating a calm, measured pace that contrasts with the extraordinary subject matter.\n\nThe final short lines \u2014 separated by stanza breaks \u2014 create pauses before the poem\'s devastating, understated conclusions.',
  keyQuotes: [
    { quote: 'They are waiting for me somewhere beyond Eden Rock', analysis: '"Beyond" places the parents past a threshold the speaker has not yet crossed. "Eden" evokes paradise and innocence, suggesting death is a return to a perfect state.', themes: ['Death', 'Paradise', 'Reunion'] },
    { quote: 'My father, twenty-five', analysis: 'Specifying the father\'s age makes him younger than the speaker writing the poem, creating a poignant reversal where the child outlives the parent\'s youth.', themes: ['Memory', 'Time', 'Loss'] },
    { quote: 'looks and looks', analysis: 'The simple repetition conveys deep, wordless love between the parents. The present tense makes their love eternal \u2014 still happening in the speaker\'s vision.', themes: ['Love', 'Memory', 'Permanence'] },
    { quote: 'The sky whitens as if lit by three suns', analysis: 'The impossible, supernatural light marks the shift from memory to vision, from earthly to otherworldly. Three suns may allude to the Trinity.', themes: ['Supernatural', 'Death', 'Transcendence'] },
    { quote: 'My mother shades her eyes and looks my way', analysis: 'The mother\'s gesture of shading her eyes suggests she is looking across a great distance or a blinding light \u2014 the boundary between life and death.', themes: ['Motherhood', 'Death', 'Boundary'] },
    { quote: 'Over the drifted stream', analysis: 'The stream is a traditional symbol of the boundary between life and death (the River Styx). "Drifted" suggests it has shifted, perhaps become easier to cross.', themes: ['Death', 'Crossing', 'Symbolism'] },
    { quote: 'Crossing is / Not as hard as you might think', analysis: 'Enjambment isolates "Crossing is" at the line end, creating suspense. The reassuring tone transforms death from terror into gentle acceptance.', themes: ['Death', 'Acceptance', 'Comfort'] },
    { quote: 'I had not thought that it would be like this', analysis: 'The most devastating line. "It" is never named \u2014 death, the afterlife, reunion. The understatement makes it more powerful than any dramatic exclamation.', themes: ['Death', 'Acceptance', 'Wonder'] },
  ],
  languageDevices: [
    { device: 'Biblical allusion', example: 'Eden Rock', effect: 'The title evokes the Garden of Eden \u2014 a lost paradise of innocence. It frames death not as an ending but as a return to a perfect, prelapsarian state.', lineRef: 0 },
    { device: 'Present tense narration', example: 'They are waiting / My father... in the same suit', effect: 'Using present tense for a memory (or vision) collapses time, making the dead parents seem alive and present. It creates dreamlike immediacy.', lineRef: 0 },
    { device: 'Precise visual detail', example: 'twenty-five, in the same suit', effect: 'The photographic specificity of ages, colours, and clothing creates hyper-real clarity, suggesting this is more than ordinary memory \u2014 perhaps a vision.', lineRef: 1 },
    { device: 'Supernatural imagery', example: 'The sky whitens as if lit by three suns', effect: 'The impossible light signals a shift from the natural to the transcendent. The scene is no longer a memory but a threshold experience.', lineRef: 16 },
    { device: 'Symbolism', example: 'the drifted stream', effect: 'The stream separating the speaker from his parents echoes the mythological River Styx \u2014 the boundary between the living and the dead.', lineRef: 18 },
    { device: 'Understatement', example: 'I had not thought that it would be like this', effect: 'The restrained, conversational tone at the poem\'s climax is more emotionally devastating than dramatic language would be. The unnamed "it" resonates with mystery.', lineRef: 23 },
    { device: 'Enjambment', example: 'Crossing is / Not as hard as you might think', effect: 'The line break isolates "Crossing is" and forces a pause before the reassurance, enacting the hesitation before the final step across the threshold.', lineRef: 19 },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */


const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'er-1', question: 'What is the speaker describing?', type: 'multiple-choice', options: ['A holiday in Cornwall', 'A vivid memory or vision of his dead parents waiting for him across a stream', 'A childhood picnic', 'A dream about heaven'], correctIndex: 1, explanation: 'Causley describes his parents at a picnic by a stream, waiting for him. The stream represents the boundary between life and death — his parents beckon him to cross over to join them.', topic: 'Meaning', difficulty: 'foundation' },
  { id: 'er-2', question: 'What does the stream represent?', type: 'multiple-choice', options: ['A swimming pool', 'The boundary between life and death — crossing it means joining his dead parents', 'A river in Cornwall', 'Tears of sadness'], correctIndex: 1, explanation: 'The stream is a powerful symbol of the divide between the living and the dead. The parents are on the other side, beckoning the speaker to "cross" — a metaphor for death.', topic: 'Language', difficulty: 'foundation' },
  { id: 'er-3', question: 'What is the effect of the precise sensory detail in the poem?', type: 'multiple-choice', options: ['It makes the poem boring', 'The vivid details make the scene feel real and present, as if the memory is more alive than reality', 'It is just description', 'It shows the speaker has a good memory'], correctIndex: 1, explanation: 'The precise details — the "H.P. Sauce bottle", the mother\'s dress, the father\'s "survey" — make the memory intensely vivid. The scene feels more real than a dream, suggesting it may be a vision of the afterlife.', topic: 'Language', difficulty: 'higher' },
  { id: 'er-4', question: 'What does the final line "I had not thought that it would be like this" suggest?', type: 'multiple-choice', options: ['Disappointment', 'Death (or the approach of death) is gentler and more natural than expected — a calm acceptance', 'Surprise at a holiday destination', 'Confusion about the picnic'], correctIndex: 1, explanation: 'The final line is deliberately ambiguous but suggests the speaker is approaching death. It is not frightening but peaceful — "like this" implies something gentle, natural, and welcoming.', topic: 'Language', difficulty: 'higher' },
  { id: 'er-5', question: 'Who was Charles Causley?', type: 'multiple-choice', options: ['A war poet from WWI', 'A Cornish poet whose father died when he was young — this poem reflects on that loss and the hope of reunion', 'A Romantic poet', 'A London playwright'], correctIndex: 1, explanation: 'Charles Causley (1917-2003) was a Cornish poet. His father died from war injuries when Causley was young. Eden Rock imagines reunion with both parents after death.', topic: 'Context', difficulty: 'foundation' },
  { id: 'er-6', question: 'What form does the poem use?', type: 'multiple-choice', options: ['A sonnet', 'Four quatrains followed by a single final line — the isolation of the last line is significant', 'Free verse', 'Rhyming couplets'], correctIndex: 1, explanation: 'Four quatrains followed by a standalone final line. The isolated last line stands apart, like the speaker standing alone on one side of the stream, about to cross.', topic: 'Structure', difficulty: 'higher' },
  { id: 'er-7', question: 'What does "They are waiting for me somewhere beyond Eden Rock" suggest?', type: 'multiple-choice', options: ['They are hiding', 'The parents exist in a place beyond earthly experience — possibly heaven or the afterlife', 'They are lost', 'Eden Rock is a real place only'], correctIndex: 1, explanation: '"Beyond Eden Rock" suggests a place beyond the physical world. "Eden" echoes the Garden of Eden — a paradise. The parents wait in a realm beyond ordinary reality.', topic: 'Language', difficulty: 'grade-9' },
  { id: 'er-8', question: 'How does the poem present death?', type: 'multiple-choice', options: ['As terrifying and violent', 'As a gentle, natural crossing — a reunion with loved ones rather than an ending', 'As meaningless', 'As punishment'], correctIndex: 1, explanation: 'Death is presented not as something to fear but as a gentle crossing of a stream toward waiting loved ones. The calm, nostalgic tone makes death feel like a homecoming.', topic: 'Themes', difficulty: 'grade-9' },
  { id: 'er-9', question: 'What is the effect of present tense in a poem about the past?', type: 'multiple-choice', options: ['It is a mistake', 'Present tense makes the memory feel immediately alive — as if the vision is happening now, not in the past', 'It makes the poem confusing', 'It shows the speaker is forgetful'], correctIndex: 1, explanation: 'Using present tense for a memory/vision makes it feel vivid and current. The parents are not remembered — they are present, waiting now. This blurs the line between memory and vision.', topic: 'Structure', difficulty: 'grade-9' },
  { id: 'er-10', question: 'Which poem pairs best with Eden Rock?', type: 'multiple-choice', options: ['Singh Song!', 'Walking Away by Cecil Day-Lewis', 'Love\'s Philosophy', 'Porphyria\'s Lover'], correctIndex: 1, explanation: 'Both Eden Rock and Walking Away explore parent-child separation. Walking Away shows a parent letting go of a child; Eden Rock shows a child approaching reunion with dead parents.', topic: 'Comparison', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Key Themes', summary: 'Eden Rock explores death as reunion, the power of memory, the parent-child bond, and a peaceful acceptance of mortality.', keyPoints: ['Death as reunion — crossing the stream to join loved ones', 'Memory as vision — the scene is too vivid to be mere memory', 'The enduring parent-child bond — love persists beyond death', 'Acceptance — "I had not thought that it would be like this"'] },
  { topic: 'Language & Imagery', summary: 'Causley uses precise sensory detail, light imagery, water symbolism, and a calm, nostalgic tone to present death as gentle and natural.', keyPoints: ['Stream as boundary between life and death', 'Precise details (H.P. Sauce, dress colour) make the vision vivid', '"Beyond Eden Rock" — paradise beyond the physical world', 'Light and whiteness — the scene is illuminated, heavenly'] },
  { topic: 'Structure & Form', summary: 'Four quatrains followed by a standalone final line — the isolated last line enacts the moment of crossing or decision.', keyPoints: ['Isolated final line — stands alone like the speaker at the boundary', 'Present tense — the vision is happening now, not in the past', 'No regular rhyme — natural, conversational tone', 'Progression toward the stream — the poem moves toward crossing'] },
]

const ESSAY_PROMPTS = [
  'How does Causley present the relationship between the speaker and his parents in Eden Rock?',
  'Compare how memory is presented in Eden Rock and one other poem from the anthology.',
  'How does Causley use language and structure to present death as something peaceful?',
]

const comparePoems = [
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason: 'Both explore parental love across a threshold. Day-Lewis watches his child cross into independence; Causley\'s parents wait beyond the boundary of death. Both find love in separation.',
    themes: ['Parental love', 'Separation', 'Thresholds'],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    link: '/revision/poetry/love-and-relationships/follower',
    reason: 'Both are deeply personal poems about a parent. Heaney\'s father is a living presence who becomes a memory; Causley\'s parents are memories who become a living vision.',
    themes: ['Family', 'Memory', 'Parent-child'],
  },
  {
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    link: '/revision/poetry/love-and-relationships/letters-from-yorkshire',
    reason: 'Both sustain connection across distance. Dooley bridges geography through letters; Causley bridges the ultimate distance between life and death through memory and vision.',
    themes: ['Distance', 'Connection', 'Communication'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function EdenRockPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Eden Rock by Charles Causley — Analysis & Annotations"
        description="Line-by-line analysis of Eden Rock with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Poetry", url: "https://theenglishhub.app/revision/poetry" },
          { name: "Love and Relationships", url: "https://theenglishhub.app/revision/poetry/love-and-relationships" },
          { name: "Eden Rock", url: "https://theenglishhub.app/revision/poetry/love-and-relationships/eden-rock" },
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
          <h1 className="text-heading-lg font-heading text-foreground">Eden Rock</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Charles Causley &middot; <em>A Field of Vision</em> (1988)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Death', 'Memory', 'Parental love', 'Paradise', 'Nostalgia', 'Reunion'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Eden Rock"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Eden Rock"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={edenRockPoem} />

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
