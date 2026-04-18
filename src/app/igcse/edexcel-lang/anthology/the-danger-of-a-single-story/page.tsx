import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Layers, Pen, Target, BookMarked, GitCompare, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'The Danger of a Single Story — Chimamanda Ngozi Adichie — IGCSE Language A Anthology — The English Hub',
  description:
    'Full study guide for The Danger of a Single Story by Chimamanda Ngozi Adichie. Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/the-danger-of-a-single-story' },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const keyExtracts = [
  {
    id: 1,
    label: 'Opening — childhood reading',
    text: '"I was an early reader, and what I read were British and American children\'s books... I wrote exactly the kinds of stories I was reading."',
    context: 'Adichie opens by showing how her early reading shaped her worldview, writing stories about white characters eating apples despite never having seen one.',
  },
  {
    id: 2,
    label: 'Discovering African literature',
    text: '"I went through a mental shift in my perception of literature. I realised that people like me... could also exist in literature."',
    context: 'The moment when Adichie discovered African writers transformed her understanding of who could be a character in stories.',
  },
  {
    id: 3,
    label: 'Fide and the single story',
    text: '"The only thing my mother had told us about them was that Fide\'s family was poor... their poverty was my single story of them."',
    context: 'Adichie admits her own susceptibility to single stories, describing how she saw her family\'s house boy only through the lens of poverty.',
  },
  {
    id: 4,
    label: 'American roommate',
    text: '"My American roommate was shocked by me. She asked where I had learned to speak English so well... She had felt sorry for me even before she saw me."',
    context: 'Adichie describes arriving at university in America and encountering her roommate\'s patronising assumptions about Africa.',
  },
  {
    id: 5,
    label: 'The power of stories',
    text: '"Stories matter. Many stories matter. Stories have been used to dispossess and to malign, but stories can also be used to empower and to humanise."',
    context: 'The concluding argument: stories are not neutral — they carry power, and we must seek out many stories rather than relying on one.',
  },
]

const languageFeatures = [
  {
    technique: 'Anecdote',
    quote: '"I was an early reader"',
    explanation: 'Adichie opens with a personal anecdote about her childhood reading, establishing intimacy with the audience and making her argument feel grounded in lived experience rather than abstract theory.',
  },
  {
    technique: 'Repetition',
    quote: '"single story"',
    explanation: 'The phrase "single story" is repeated throughout the text like a refrain, reinforcing the central concept and ensuring it stays in the audience\'s mind. The repetition mirrors how single stories themselves are reinforced through repeated telling.',
  },
  {
    technique: 'Emotive language',
    quote: '"She had felt sorry for me"',
    explanation: 'The word "sorry" carries condescension and pity. Adichie uses emotive language to convey the frustration and hurt of being reduced to a stereotype, making the audience feel her discomfort.',
  },
  {
    technique: 'Contrast',
    quote: '"to dispossess and to malign... to empower and to humanise"',
    explanation: 'Adichie contrasts the destructive and constructive power of stories using parallel antithetical pairs, showing that stories are a tool that can cut both ways.',
  },
  {
    technique: 'Rhetorical question',
    quote: '"What if my roommate knew about..."',
    explanation: 'Rhetorical questions challenge the audience to consider alternatives to their assumptions. They invite reflection without demanding an answer, drawing the listener into active engagement.',
  },
  {
    technique: 'List of three',
    quote: '"a single story creates stereotypes... they are incomplete"',
    explanation: 'Triadic structures give Adichie\'s arguments a persuasive, rhythmic quality. The list builds from identification of the problem to its consequence, following a logical chain.',
  },
  {
    technique: 'Direct address',
    quote: '"I would like to end with this thought"',
    explanation: 'As a speech, Adichie directly addresses her audience throughout. This creates a sense of personal conversation, breaking down the barrier between speaker and listener.',
  },
  {
    technique: 'Inclusive pronouns',
    quote: '"we"',
    explanation: 'Adichie uses "we" to include herself and the audience in the problem. She is not exempting herself from the tendency to create single stories — she admits her own single story of Fide.',
  },
  {
    technique: 'Irony',
    quote: '"I wrote exactly the kinds of stories I was reading"',
    explanation: 'There is irony in a Nigerian child writing about white children playing in the snow. Adichie uses this to show how powerfully stories shape imagination, even when they bear no relation to lived reality.',
  },
  {
    technique: 'Metaphor',
    quote: '"the single story creates stereotypes"',
    explanation: 'The "single story" itself is a metaphor — a single narrative standing in for an entire culture or identity. The metaphor makes an abstract concept tangible and memorable.',
  },
]

const structuralAnalysis = {
  opening: 'Adichie opens with a personal childhood anecdote about reading British and American books. This disarms the audience by starting with vulnerability and self-deprecation rather than direct argument.',
  development: 'The text develops chronologically through Adichie\'s life: childhood reading, discovering African literature, arriving in America, travelling to Mexico. Each anecdote builds the argument that single stories are everywhere and affect everyone.',
  climax: 'The emotional climax comes when Adichie describes her American roommate\'s patronising assumptions — this is the moment where the abstract concept of "single story" becomes painfully personal and concrete.',
  resolution: 'Adichie resolves by widening her argument from personal experience to a universal principle: that seeking many stories is an act of empowerment. She ends with a call to action rather than a neat conclusion.',
  perspective: 'First person throughout, using "I" to ground every argument in personal experience. This is a deliberate rhetorical choice: by making herself both victim and perpetrator of single stories, Adichie removes any sense of moral superiority.',
  paragraphing: 'As a speech transcript, the text uses short, punchy paragraphs suited to oral delivery. Longer narrative sections alternate with concise, memorable thesis statements.',
  time: 'Broadly chronological (childhood to adulthood) but with embedded flashbacks and flash-forwards. The chronological structure mirrors a journey of understanding — the speaker grows as the text progresses.',
  openingClosing: 'The opening uses a specific, small-scale anecdote (a child reading); the closing uses a large-scale, universal claim about the power of stories. This movement from particular to universal gives the text its persuasive arc.',
}

const writersPurpose = {
  achieve: 'Adichie wants to persuade her audience that relying on a single narrative about any group of people is dangerous. She argues that stereotypes are not necessarily untrue but are fundamentally incomplete.',
  readerFeel: 'She wants the audience to feel uncomfortable — to recognise their own single stories and the harm those stories cause. She also wants them to feel empowered to seek out multiple perspectives.',
  message: 'Her central argument is that stories carry power, and that the dominance of a single story — whether about Africa, about immigrants, about any group — flattens complexity and denies humanity. The antidote is to seek "a balance of stories".',
}

const keyVocabulary = [
  { word: 'dispossess', definition: 'To deprive someone of land, property, or other belongings; here used metaphorically to mean stripping people of their identity.' },
  { word: 'malign', definition: 'To speak about someone in a spitefully critical manner; to slander.' },
  { word: 'patronising', definition: 'Treating someone with an apparent kindness that reveals a feeling of superiority.' },
  { word: 'stereotype', definition: 'A widely held but oversimplified and fixed image or idea of a particular type of person or group.' },
  { word: 'impressionable', definition: 'Easily influenced or affected, especially by new ideas or experiences.' },
  { word: 'vulnerability', definition: 'The quality of being open to emotional or physical harm; exposure.' },
  { word: 'perception', definition: 'The way in which something is understood or interpreted.' },
  { word: 'catastrophe', definition: 'A sudden disaster or great misfortune; used by Adichie to describe the consequence of a single story.' },
  { word: 'authenticity', definition: 'The quality of being genuine, real, or true to one\'s own character.' },
  { word: 'humanise', definition: 'To make something more humane or civilised; to portray someone as a full, complex person.' },
  { word: 'narrative', definition: 'A spoken or written account of connected events; a story or way of telling a story.' },
  { word: 'default', definition: 'A preselected option or position adopted automatically; here meaning the assumed story about a group.' },
]

const examPractice = {
  q1: {
    question: 'List four things you learn about Adichie\'s childhood reading habits from the opening of the text.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Adichie use language to convey the impact of stereotypes on individuals?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Adichie uses emotive language such as "sorry" and "shocked" to convey the patronising assumptions of her American roommate, making the reader feel the frustration of being reduced to a single narrative.',
      'The repetition of the phrase "single story" throughout the text reinforces the central concept and mirrors how stereotypes are themselves reinforced through repetition, creating a cumulative effect on the audience.',
      'Contrast between "to dispossess and to malign" and "to empower and to humanise" presents stories as tools with dual potential, using antithesis to sharpen the argument that narrative power must be used responsibly.',
      'Adichie\'s use of personal anecdote — her own single story of Fide — is particularly effective because it removes moral superiority: she includes herself as both perpetrator and victim of stereotyping, which strengthens her credibility.',
    ],
  },
  q3: {
    question: 'How does Adichie structure her speech to build a persuasive argument about the danger of single stories?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason: 'Both texts explore how identity is shaped by the stories others tell about you. Adichie examines cultural stereotyping; Yen Mah examines family rejection. Compare how each writer uses personal experience to challenge limiting narratives.',
    themes: ['Identity', 'Stereotypes', 'Belonging'],
  },
  {
    title: 'Young and Dyslexic',
    author: 'Benjamin Zephaniah',
    href: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    reason: 'Both writers challenge the "single story" others have constructed about them — Adichie as an African, Zephaniah as a dyslexic person. Compare how each uses personal voice and direct address to reclaim their identity.',
    themes: ['Identity', 'Challenging assumptions', 'Self-belief'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason: 'Adichie warns about the "single story" of Africa; Alagiah wrestles with being part of the media that creates it. Compare how each writer handles the ethics of representing African suffering.',
    themes: ['Africa', 'Representation', 'Media ethics'],
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function TheDangerOfASingleStoryPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link & header ─────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang/anthology" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              The Danger of a Single Story
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Chimamanda Ngozi Adichie &middot; Speech / TED Talk transcript
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Edexcel IGCSE Language A
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400 text-[0.65rem]">
                Paper 1 Section A
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* ── Key Extracts ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-amber-400" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Key Extracts
          </h2>
          <span className="font-mono text-body-xs text-muted-foreground ml-auto">
            Fair-dealing extracts for study
          </span>
        </div>
        <div className="space-y-4">
          {keyExtracts.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Extract {extract.id} — {extract.label}
              </span>
              <blockquote className="mt-2 border-l-2 border-amber-500/40 pl-4 font-serif text-body text-foreground italic leading-relaxed">
                {extract.text}
              </blockquote>
              <p className="mt-2 text-body-sm text-muted-foreground">{extract.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Language Analysis ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Language Analysis
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Key language features used by Adichie and their effects on the reader.
        </p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                  {f.technique}
                </span>
              </div>
              <p className="text-body-sm text-foreground mb-2">
                <span className="font-serif italic text-amber-700 dark:text-amber-400">&ldquo;{f.quote}&rdquo;</span>
              </p>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{f.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Structural Analysis ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Structural Analysis
          </h2>
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
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {item.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Writer's Purpose ───────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Writer&apos;s Purpose
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              What is the writer trying to achieve?
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.achieve}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              How does the writer want the reader to feel?
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.readerFeel}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              Central message or argument
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{writersPurpose.message}</p>
          </div>
        </div>
      </section>

      {/* ── Key Vocabulary ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookMarked className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Key Vocabulary
          </h2>
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

      {/* ── Exam Practice ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Exam Practice
          </h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q1.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p>
          </div>

          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-50/50 p-4 dark:bg-amber-950/20">
              <span className="font-mono text-body-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">
                Model answer outline
              </span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {examPractice.q2.modelOutline.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 text-amber-600 dark:text-amber-400">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q3.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p>
          </div>
        </div>
      </section>

      {/* ── Comparison Links ───────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Compare With
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings for comparison questions in the exam.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Copyright notice ───────────────────────────────────────── */}
      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>
          Extracts used under fair dealing for the purposes of criticism, review and education.
          <em> The Danger of a Single Story</em> &copy; Chimamanda Ngozi Adichie. All rights reserved.
          Students should refer to the full text in their Pearson Edexcel anthology.
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
