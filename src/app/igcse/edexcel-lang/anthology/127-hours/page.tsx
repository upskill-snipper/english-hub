import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Layers, Pen, Target, BookMarked, GitCompare, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: '127 Hours — Aron Ralston — IGCSE Language A Anthology — The English Hub',
  description:
    'Full study guide for 127 Hours by Aron Ralston. Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/127-hours' },
}

const keyExtracts = [
  {
    id: 1,
    label: 'The boulder',
    text: '"The boulder shifts. A jolt of adrenaline shoots through my body... my right hand is caught between the boulder and the canyon wall."',
    context: 'Ralston describes the moment the boulder falls, trapping his arm. The present tense creates immediacy and terror.',
  },
  {
    id: 2,
    label: 'Isolation',
    text: '"No one knows where I am. I didn\'t tell anyone where I was going. This is my own fault."',
    context: 'Ralston acknowledges his isolation and takes responsibility for his predicament, adding a layer of guilt to the fear.',
  },
  {
    id: 3,
    label: 'Desperation',
    text: '"I\'m going to have to do something drastic... I understand now that I will not be rescued."',
    context: 'The moment of realisation that no one is coming — Ralston must save himself or die.',
  },
  {
    id: 4,
    label: 'Hallucinations',
    text: '"I see a small boy running through a sunlit living room... I know that this boy is my future son."',
    context: 'Dehydration causes Ralston to hallucinate. The vision of his unborn son gives him the will to survive.',
  },
  {
    id: 5,
    label: 'Survival',
    text: '"I am Joshua Tree, I am a Spartan warrior... I scream as I pull and twist my arm free."',
    context: 'Ralston psychs himself up with warrior imagery before the act of self-amputation, using mental strength to overcome physical pain.',
  },
]

const languageFeatures = [
  {
    technique: 'Present tense narration',
    quote: '"The boulder shifts"',
    explanation: 'Ralston uses the present tense throughout to create immediacy — the reader experiences each moment as it happens, with no reassuring past-tense distance. The effect is visceral and claustrophobic.',
  },
  {
    technique: 'Short sentences',
    quote: '"No one knows where I am."',
    explanation: 'Short, blunt sentences convey panic and finality. They mirror the stark, unavoidable facts of Ralston\'s situation and create a rhythm of escalating desperation.',
  },
  {
    technique: 'Sensory language',
    quote: '"A jolt of adrenaline shoots through my body"',
    explanation: 'Ralston describes internal physical sensations — adrenaline, pain, thirst — to place the reader inside his body. The effect is deeply empathetic and uncomfortable.',
  },
  {
    technique: 'Metaphor',
    quote: '"I am Joshua Tree, I am a Spartan warrior"',
    explanation: 'Ralston uses metaphor to transform himself mentally from a trapped, weakened man into something powerful and enduring. The metaphors are acts of will — he talks himself into strength.',
  },
  {
    technique: 'Self-blame',
    quote: '"This is my own fault"',
    explanation: 'Ralston takes full responsibility for his situation. This honesty prevents the reader from seeing him as merely a victim — he is an active agent in both his predicament and his survival.',
  },
  {
    technique: 'Contrast',
    quote: '"sunlit living room" vs. the dark canyon',
    explanation: 'The hallucination of a sunlit room contrasts sharply with the dark, cold canyon. Light and warmth represent hope and the future; darkness represents the present danger of death.',
  },
  {
    technique: 'Emotive language',
    quote: '"I scream"',
    explanation: 'The raw, unfiltered description of screaming conveys primal pain and desperation. There is no attempt to be heroic or restrained — the honesty makes the moment more powerful.',
  },
  {
    technique: 'Internal monologue',
    quote: '"I understand now that I will not be rescued"',
    explanation: 'Ralston shares his thought process in real time, allowing the reader to follow his logic and experience each terrifying conclusion alongside him.',
  },
  {
    technique: 'Listing / accumulation',
    quote: '"pull and twist"',
    explanation: 'The listing of physical actions creates a sense of effort and sequence. Each verb adds another layer of pain, forcing the reader to experience the act step by step.',
  },
  {
    technique: 'Imperative / self-directed speech',
    quote: '"I\'m going to have to do something drastic"',
    explanation: 'Ralston talks to himself, using language as a survival tool. The self-directed commands show his psychological fight against despair and his determination to act.',
  },
]

const structuralAnalysis = {
  opening: 'Ralston opens with the moment of the boulder fall — in medias res. There is no preamble or context; the reader is dropped straight into the crisis, mirroring Ralston\'s own shock.',
  development: 'The text develops through escalating desperation: initial shock, assessment of the situation, failed attempts at escape, the creeping realisation that no rescue is coming, and finally the hallucination that gives him the will to act.',
  climax: 'The climax is the act of self-amputation — the moment Ralston breaks his own arm and cuts himself free. The text builds to this moment through 127 hours of psychological preparation.',
  resolution: 'The resolution is survival itself — Ralston frees himself and walks out of the canyon. But the text does not end neatly; the trauma and the decision linger.',
  perspective: 'First person, present tense throughout. This is an intensely subjective narrative — the reader is locked inside Ralston\'s body and mind, with no external perspective or relief.',
  paragraphing: 'Short paragraphs and sentence fragments create pace and urgency. The text reads almost like a screenplay, with each paragraph a new "shot" in the unfolding drama.',
  time: 'Time is a central structural device. Ralston tracks hours and days, and the passage of time becomes both enemy (dehydration, hypothermia) and measure of his endurance. The title itself — 127 Hours — foregrounds time.',
  openingClosing: 'The opening is chaos (the boulder falls); the closing is resolve (Ralston acts). The structural movement from helplessness to agency mirrors the psychological journey from victim to survivor.',
}

const writersPurpose = {
  achieve: 'Ralston wants to give an honest, unflinching account of his survival. He does not romanticise the experience — he includes the fear, the self-blame, the pain and the desperation alongside the determination.',
  readerFeel: 'He wants the reader to experience the claustrophobia, the fear and the primal will to survive. The present-tense narration is designed to put the reader inside the canyon with him.',
  message: 'His central message is about the power of the human will. When every physical resource is gone, the mind alone can drive survival. The hallucination of his future son suggests that hope — even imagined hope — is the ultimate survival tool.',
}

const keyVocabulary = [
  { word: 'adrenaline', definition: 'A hormone released in response to stress, increasing heart rate and energy. The body\'s "fight or flight" chemical.' },
  { word: 'canyon', definition: 'A deep, narrow gorge with steep sides, typically formed by a river.' },
  { word: 'tourniquet', definition: 'A device used to stop bleeding by compressing a blood vessel, typically a tight bandage.' },
  { word: 'hallucination', definition: 'An experience of seeing, hearing or sensing something that is not present, often caused by dehydration or exhaustion.' },
  { word: 'amputation', definition: 'The surgical removal of a limb or body part.' },
  { word: 'predicament', definition: 'A difficult, unpleasant or embarrassing situation.' },
  { word: 'dehydration', definition: 'The loss of a large amount of water from the body, leading to confusion and organ failure.' },
  { word: 'hypothermia', definition: 'Dangerously low body temperature, caused by prolonged exposure to cold.' },
  { word: 'resilience', definition: 'The capacity to recover quickly from difficulties; toughness and determination.' },
  { word: 'primal', definition: 'Relating to the most basic, instinctive level of human behaviour.' },
  { word: 'drastic', definition: 'Extreme and likely to have a serious or far-reaching effect.' },
  { word: 'visceral', definition: 'Relating to deep inner feelings rather than to the intellect; gut-level.' },
]

const examPractice = {
  q1: {
    question: 'List four things you learn about Ralston\'s physical condition during his time trapped in the canyon.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Ralston use language to convey the intensity of his survival experience?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Ralston\'s use of present tense narration ("The boulder shifts") places the reader in the immediate moment, removing the safety of past-tense distance and creating a sense of unfolding crisis that mirrors his own shock.',
      'Short, declarative sentences such as "No one knows where I am" convey panic and finality, their bluntness reflecting the stark, unavoidable facts of his situation with no room for comfort or evasion.',
      'The metaphor "I am a Spartan warrior" shows Ralston using language itself as a survival tool — he talks himself into strength, transforming from helpless victim to active agent through the power of self-directed narrative.',
      'Sensory language describing internal physical sensations ("A jolt of adrenaline shoots through my body") forces the reader into Ralston\'s body, creating an empathetic, visceral connection that makes the reader feel the experience rather than merely observe it.',
    ],
  },
  q3: {
    question: 'How does Ralston structure the text to build tension towards the moment of his escape?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'Explorers or Boys Messing About',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason: 'Both texts concern adventurers in danger. Compare Ralston\'s first-person survival account with Morris\'s critical newspaper article — one celebrates resilience from inside, the other condemns recklessness from outside.',
    themes: ['Adventure', 'Risk', 'Different perspectives'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason: 'Both texts deal with extreme physical suffering. Compare Ralston\'s self-focused survival narrative with Alagiah\'s empathetic witness account — two different relationships to pain and endurance.',
    themes: ['Suffering', 'Survival', 'Perspective'],
  },
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason: 'Both texts describe humans confronting the power of nature. Compare Ralston\'s individual battle with Herbert\'s communal hunt — solo survival versus collective tradition in hostile environments.',
    themes: ['Nature', 'Survival', 'Human vs environment'],
  },
]

export default async function OneHundredTwentySevenHoursPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" className="mb-3 -ml-2 text-muted-foreground" render={<Link href="/igcse/edexcel-lang/anthology" />}>
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">127 Hours: Between a Rock and a Hard Place</h1>
            <p className="text-body-sm text-muted-foreground">Aron Ralston &middot; Autobiography</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">Edexcel IGCSE Language A</Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">Paper 1 Section A</Badge>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Key Extracts</h2>
          <span className="font-mono text-body-xs text-muted-foreground ml-auto">Fair-dealing extracts for study</span>
        </div>
        <div className="space-y-4">
          {keyExtracts.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">Extract {extract.id} — {extract.label}</span>
              <blockquote className="mt-2 border-l-2 border-amber-500/40 pl-4 font-serif text-body text-foreground italic leading-relaxed">{extract.text}</blockquote>
              <p className="mt-2 text-body-sm text-muted-foreground">{extract.context}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4"><Pen className="size-4.5 text-primary" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Language Analysis</h2></div>
        <p className="text-body-sm text-muted-foreground mb-5">Key language features used by Ralston and their effects on the reader.</p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{f.technique}</span>
              <p className="mt-2 text-body-sm text-foreground"><span className="font-serif italic text-amber-700 dark:text-clay-600">&ldquo;{f.quote}&rdquo;</span></p>
              <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">{f.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4"><Layers className="size-4.5 text-primary" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Structural Analysis</h2></div>
        <div className="space-y-4">
          {[
            { label: 'Opening', content: structuralAnalysis.opening },
            { label: 'Development', content: structuralAnalysis.development },
            { label: 'Climax', content: structuralAnalysis.climax },
            { label: 'Resolution', content: structuralAnalysis.resolution },
            { label: 'Narrative perspective', content: structuralAnalysis.perspective },
            { label: 'Paragraph structure', content: structuralAnalysis.paragraphing },
            { label: 'Use of time', content: structuralAnalysis.time },
            { label: 'Opening & closing techniques', content: structuralAnalysis.openingClosing },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{item.label}</span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4"><Target className="size-4.5 text-primary" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Writer&apos;s Purpose</h2></div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4"><span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">What is the writer trying to achieve?</span><p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.achieve}</p></div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4"><span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">How does the writer want the reader to feel?</span><p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.readerFeel}</p></div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4"><span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">Central message or argument</span><p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.message}</p></div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4"><BookMarked className="size-4.5 text-primary" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Key Vocabulary</h2></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyVocabulary.map((v) => (
            <div key={v.word} className="rounded-lg border border-border/40 bg-muted/20 p-3"><span className="font-mono text-body-sm font-semibold text-foreground">{v.word}</span><p className="mt-1 text-body-xs text-muted-foreground">{v.definition}</p></div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4"><GraduationCap className="size-4.5 text-primary" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Exam Practice</h2></div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4"><span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q1.type}</span><p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p></div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q2.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-50/50 p-4 dark:bg-amber-950/20">
              <span className="font-mono text-body-xs text-amber-700 dark:text-clay-600 uppercase tracking-wider font-semibold">Model answer outline</span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {examPractice.q2.modelOutline.map((point, i) => (<li key={i} className="flex gap-2"><span className="shrink-0 text-amber-600 dark:text-clay-600">&bull;</span><span>{point}</span></li>))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4"><span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q3.type}</span><p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p></div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4"><GitCompare className="size-4.5 text-primary" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Compare With</h2></div>
        <p className="text-body-sm text-muted-foreground mb-5">Strong pairings for comparison questions in the exam.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">{c.themes.map((t) => (<span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>))}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>Extracts used under fair dealing for the purposes of criticism, review and education. <em>127 Hours: Between a Rock and a Hard Place</em> &copy; Aron Ralston. All rights reserved. Students should refer to the full text in their Pearson Edexcel anthology.</p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
