import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Layers, Pen, Target, BookMarked, GitCompare, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'A Passage to Africa — George Alagiah — IGCSE Language A Anthology — The English Hub',
  description:
    'Full study guide for A Passage to Africa by George Alagiah. Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-passage-to-africa' },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const keyExtracts = [
  {
    id: 1,
    label: 'Opening — the catalogue of suffering',
    text: '"I saw a thousand hungry, lean, scared and betrayed faces as I criss-crossed Somalia between the warring clans."',
    context: 'Alagiah opens with an overwhelming list of human suffering, establishing the scale of the crisis and his role as a journalist witnessing it.',
  },
  {
    id: 2,
    label: 'The man who smiled',
    text: '"There was one face I could not forget... amidst the wreckage of his life, he managed to smile."',
    context: 'The central image of the text — a dying man who smiles at Alagiah. This moment haunts the writer and becomes the emotional core of the memoir.',
  },
  {
    id: 3,
    label: 'Professional detachment',
    text: '"In the ghastly arithmetic of Africa\'s misery, those numbers were just too small."',
    context: 'Alagiah reveals the disturbing calculus of news journalism: suffering must reach a certain scale before it becomes "newsworthy".',
  },
  {
    id: 4,
    label: 'The guilt',
    text: '"What was it about that smile? I had to find out... it was not the smile of greeting. It was the smile of embarrassment."',
    context: 'Alagiah realises the man smiled out of shame — embarrassed to be seen in such degradation. This revelation triggers intense guilt in the journalist.',
  },
  {
    id: 5,
    label: 'Closing reflection',
    text: '"In the end I was proved wrong... his smile was his hello, his attempt to be recognised as a human being."',
    context: 'Alagiah reinterprets the smile as an assertion of humanity, a refusal to be reduced to just another victim in a news report.',
  },
]

const languageFeatures = [
  {
    technique: 'Listing / accumulation',
    quote: '"hungry, lean, scared and betrayed"',
    explanation: 'The list of adjectives overwhelms the reader with the scale of suffering. Each word adds a different dimension — physical ("lean"), emotional ("scared"), political ("betrayed") — building a complete picture of devastation.',
  },
  {
    technique: 'Metaphor',
    quote: '"ghastly arithmetic"',
    explanation: 'The metaphor reduces human lives to numbers, exposing the cold calculation of journalism. The adjective "ghastly" shows Alagiah\'s discomfort with this process, creating moral tension.',
  },
  {
    technique: 'Contrast',
    quote: '"amidst the wreckage... he managed to smile"',
    explanation: 'The contrast between destruction and the simple human gesture of a smile is deeply moving. It forces the reader to see the individual within the mass of suffering.',
  },
  {
    technique: 'Emotive language',
    quote: '"the wreckage of his life"',
    explanation: 'The word "wreckage" connotes violent destruction, as if the man\'s life has been shattered like a building. It is visceral and physical, making abstract suffering concrete.',
  },
  {
    technique: 'Sensory language',
    quote: '"the smell of decaying flesh"',
    explanation: 'Alagiah uses the sense of smell — the most visceral and unavoidable sense — to immerse the reader in the horror. You cannot look away from a smell.',
  },
  {
    technique: 'Short sentences',
    quote: '"I had to find out."',
    explanation: 'Short, declarative sentences create moments of emphasis amid longer descriptive passages. They reflect the journalist\'s determination and the emotional weight of each realisation.',
  },
  {
    technique: 'Irony',
    quote: '"those numbers were just too small"',
    explanation: 'The statement is bitterly ironic: hundreds of dead people are "too small" to be newsworthy. Alagiah uses irony to expose the moral failings of the media industry he works within.',
  },
  {
    technique: 'Personification',
    quote: '"Somalia\'s misery"',
    explanation: 'The country itself is personified as suffering. This technique shifts blame from individuals to a larger, systemic catastrophe — the suffering belongs to the whole nation.',
  },
  {
    technique: 'Repetition',
    quote: '"smile" / "smiled"',
    explanation: 'The word "smile" recurs throughout the text, each time with a different meaning — greeting, embarrassment, humanity. The repetition traces Alagiah\'s changing understanding of this single gesture.',
  },
  {
    technique: 'Rhetorical question',
    quote: '"What was it about that smile?"',
    explanation: 'The rhetorical question draws the reader into Alagiah\'s personal quest for understanding. It shifts the text from reportage to memoir, making the reader a fellow investigator.',
  },
]

const structuralAnalysis = {
  opening: 'Alagiah opens with a panoramic view of suffering across Somalia — a wide shot that establishes the overwhelming scale. This mirrors the technique of a news broadcast, starting with the big picture before zooming in.',
  development: 'The text gradually narrows its focus from the general ("a thousand hungry faces") to the particular (one man, one smile). This structural movement from wide to close-up is the text\'s most powerful device.',
  climax: 'The climax is the moment of realisation about the smile — when Alagiah understands it was not a greeting but an expression of embarrassment. This is both an emotional and intellectual climax.',
  resolution: 'Alagiah reinterprets the smile a final time as an assertion of humanity. The resolution is not neat — the guilt remains — but the writer has reached a deeper understanding of what the encounter meant.',
  perspective: 'First person throughout. Alagiah is both journalist (observer) and human being (participant). The tension between these two roles drives the text: the professional who must record suffering and the person who feels it.',
  paragraphing: 'Short paragraphs create pace and impact, particularly around the key revelation. Longer paragraphs are used for description and context, shorter ones for emotional moments.',
  time: 'The text moves between the general past (covering Somalia) and one specific moment (the man who smiled). There is a shift from professional time (news deadlines, filing reports) to personal time (the moment that haunts you).',
  openingClosing: 'The opening presents suffering as a mass; the closing recovers the individual. This structural arc — from dehumanisation to re-humanisation — embodies the text\'s central message about the importance of seeing individuals.',
}

const writersPurpose = {
  achieve: 'Alagiah wants to explore the moral complexity of being a journalist in a crisis zone. He questions whether the media dehumanises the people it claims to help, and whether his own presence as a reporter contributed to the suffering he witnessed.',
  readerFeel: 'He wants the reader to feel the uncomfortable tension between compassion and voyeurism — the same tension he felt as a journalist. He also wants to restore humanity to the people he reported on.',
  message: 'His central argument is that behind every news statistic is a human being who deserves to be seen as an individual. The man\'s smile is a refusal to be reduced to a victim — it is an assertion of dignity and humanity.',
}

const keyVocabulary = [
  { word: 'criss-crossed', definition: 'To move back and forth across an area repeatedly.' },
  { word: 'ghastly', definition: 'Causing great horror or fear; frightful or macabre.' },
  { word: 'arithmetic', definition: 'The branch of mathematics dealing with numbers; here used metaphorically to describe the cold calculation of suffering.' },
  { word: 'degradation', definition: 'The condition of being treated with shame or disrespect; being reduced to a lower state.' },
  { word: 'warring', definition: 'Engaged in conflict or fighting against each other.' },
  { word: 'emaciated', definition: 'Abnormally thin or weak, especially because of illness or lack of food.' },
  { word: 'decaying', definition: 'Rotting or decomposing; the process of organic matter breaking down.' },
  { word: 'resilience', definition: 'The capacity to recover quickly from difficulties; toughness.' },
  { word: 'humanity', definition: 'The quality of being humane; benevolence. Also: human beings collectively.' },
  { word: 'mortality', definition: 'The state of being subject to death; the death rate in a population.' },
  { word: 'compassion', definition: 'Sympathetic pity and concern for the sufferings or misfortunes of others.' },
  { word: 'voyeurism', definition: 'The practice of gaining pleasure from watching others\' suffering or private moments; here applied to media consumption.' },
]

const examPractice = {
  q1: {
    question: 'List four things you learn about the conditions in Somalia from the opening paragraphs.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Alagiah use language to convey the impact of suffering on both the victims and himself as a journalist?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Alagiah uses the metaphor "ghastly arithmetic" to expose the cold calculation behind news journalism, where human suffering is reduced to statistics. The adjective "ghastly" reveals his own moral discomfort with this process.',
      'The listing of adjectives — "hungry, lean, scared and betrayed" — overwhelms the reader with the multi-dimensional nature of suffering, moving from physical to emotional to political in a single sentence.',
      'Sensory language such as "the smell of decaying flesh" forces the reader into the visceral reality of the crisis, using the most unavoidable sense to prevent emotional detachment.',
      'The contrast between "wreckage" and the man\'s "smile" creates the text\'s central tension: beauty and humanity surviving amid destruction, which forces both Alagiah and the reader to reconsider how they see victims of crisis.',
    ],
  },
  q3: {
    question: 'How does Alagiah structure the text to move from a wide view of suffering to a focus on one individual?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason: 'Adichie warns about the "single story" of Africa; Alagiah is part of the media that creates it. Compare how each writer handles the ethics of representing Africa and the tension between individual stories and collective narratives.',
    themes: ['Africa', 'Representation', 'Media'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason: 'Both writers are outsiders encountering unfamiliar cultures. Compare Alagiah\'s guilt-laden journalism in a crisis zone with Zeppa\'s wonder-filled travel memoir — two very different ways of writing about the unfamiliar.',
    themes: ['Outsider perspective', 'Cultural encounter', 'Personal growth'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason: 'Both texts deal with extreme physical suffering. Compare Ralston\'s first-person survival narrative with Alagiah\'s journalistic witness account — one is the sufferer, the other is the observer.',
    themes: ['Suffering', 'Survival', 'Human resilience'],
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function APassageToAfricaPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground font-serif">A Passage to Africa</h1>
            <p className="text-body-sm text-muted-foreground">George Alagiah &middot; Memoir / journalism</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">Edexcel IGCSE Language A</Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">Paper 1 Section A</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Key Extracts */}
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

      {/* Language Analysis */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Language Analysis</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">Key language features used by Alagiah and their effects on the reader.</p>
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

      {/* Structural Analysis */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Structural Analysis</h2>
        </div>
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

      {/* Writer's Purpose */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Writer&apos;s Purpose</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">What is the writer trying to achieve?</span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.achieve}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">How does the writer want the reader to feel?</span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.readerFeel}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">Central message or argument</span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.message}</p>
          </div>
        </div>
      </section>

      {/* Key Vocabulary */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookMarked className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Key Vocabulary</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyVocabulary.map((v) => (
            <div key={v.word} className="rounded-lg border border-border/40 bg-muted/20 p-3">
              <span className="font-mono text-body-sm font-semibold text-foreground">{v.word}</span>
              <p className="mt-1 text-body-xs text-muted-foreground">{v.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Practice */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Exam Practice</h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q1.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q2.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-50/50 p-4 dark:bg-amber-950/20">
              <span className="font-mono text-body-xs text-amber-700 dark:text-clay-600 uppercase tracking-wider font-semibold">Model answer outline</span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {examPractice.q2.modelOutline.map((point, i) => (
                  <li key={i} className="flex gap-2"><span className="shrink-0 text-amber-600 dark:text-clay-600">&bull;</span><span>{point}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">{examPractice.q3.type}</span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p>
          </div>
        </div>
      </section>

      {/* Comparison Links */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Compare With</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">Strong pairings for comparison questions in the exam.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (<span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>Extracts used under fair dealing for the purposes of criticism, review and education. <em>A Passage to Africa</em> &copy; George Alagiah. All rights reserved. Students should refer to the full text in their Pearson Edexcel anthology.</p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
