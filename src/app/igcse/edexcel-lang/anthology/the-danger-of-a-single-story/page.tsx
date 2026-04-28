import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  BookMarked,
  GitCompare,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title:
    'The Danger of a Single Story — Chimamanda Ngozi Adichie — IGCSE Language A Anthology — The English Hub',
  description:
    'Full study guide for The Danger of a Single Story by Chimamanda Ngozi Adichie. Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
  },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const verifiedTedLines = [
  {
    id: 1,
    label: 'On the cumulative effect of a single story',
    text: '"…show a people as one thing, as only one thing, over and over again, and that is what they become."',
    context:
      'A widely-attested line from the TED talk, capturing how repeated narratives harden into perceived reality.',
  },
  {
    id: 2,
    label: 'On the importance of stories',
    text: '"…stories matter. Many stories matter."',
    context:
      'A concise refrain near the close of the talk, asserting that no single narrative is sufficient.',
  },
  {
    id: 3,
    label: 'Closing image — paradise regained',
    text: '"When we reject the single story, when we realize that there is never a single story about any place, we regain a kind of paradise."',
    context:
      'The final sentence of the TED talk: rejecting the single story is framed as a recovery of fullness and humanity.',
  },
]

const languageFeatures = [
  {
    technique: 'Anecdote',
    explanation:
      'Adichie opens with a personal anecdote about her childhood reading habits, establishing intimacy with the audience and grounding her argument in lived experience rather than abstract theory.',
  },
  {
    technique: 'Repetition',
    explanation:
      'The phrase "single story" recurs throughout the text like a refrain, reinforcing the central concept and ensuring it stays in the audience\'s mind. The repetition mirrors how single stories themselves are reinforced through repeated telling.',
  },
  {
    technique: 'Emotive language',
    explanation:
      'Adichie uses emotionally charged vocabulary to convey the frustration and hurt of being reduced to a stereotype, prompting the audience to share her discomfort.',
  },
  {
    technique: 'Contrast / antithesis',
    explanation:
      'Adichie contrasts the destructive and constructive uses of stories using parallel pairs, showing that narrative is a tool that can cut both ways.',
  },
  {
    technique: 'Rhetorical question',
    explanation:
      'Rhetorical questions challenge the audience to consider alternatives to their own assumptions. They invite reflection without demanding an answer, drawing the listener into active engagement.',
  },
  {
    technique: 'List of three',
    explanation:
      "Triadic structures give Adichie's arguments a persuasive, rhythmic quality. Lists build from identification of the problem toward its consequence, following a logical chain.",
  },
  {
    technique: 'Direct address',
    explanation:
      'As a speech, the text directly addresses its audience throughout. This creates a sense of personal conversation, breaking down the barrier between speaker and listener.',
  },
  {
    technique: 'Inclusive pronouns',
    explanation:
      'Adichie uses "we" to include herself and the audience in the problem. She is not exempting herself from the tendency to create single stories — she admits her own complicity.',
  },
  {
    technique: 'Irony',
    explanation:
      'There is irony in a Nigerian child writing imitation stories about white children playing in the snow. Adichie uses this to show how powerfully imported narratives shape imagination, even when they bear no relation to lived reality.',
  },
  {
    technique: 'Metaphor',
    explanation:
      'The "single story" itself functions as a metaphor — one narrative standing in for an entire culture or identity. The metaphor makes an abstract idea tangible and memorable.',
  },
]

const structuralAnalysis = {
  opening:
    'Adichie opens with a personal childhood anecdote about reading British and American books. This disarms the audience by starting with vulnerability and self-deprecation rather than direct argument.',
  development:
    "The text develops chronologically through Adichie's life: childhood reading, discovering African literature, arriving in America, travelling to Mexico. Each anecdote builds the argument that single stories are everywhere and affect everyone.",
  climax:
    "The emotional climax comes when Adichie describes her American roommate's patronising assumptions — this is the moment where the abstract concept of the single story becomes painfully personal and concrete.",
  resolution:
    'Adichie resolves by widening her argument from personal experience to a universal principle: that seeking many stories is an act of empowerment. She ends with a call to action rather than a neat conclusion.',
  perspective:
    'First person throughout, using "I" to ground every argument in personal experience. This is a deliberate rhetorical choice: by making herself both victim and perpetrator of single stories, Adichie removes any sense of moral superiority.',
  paragraphing:
    'As a speech transcript, the text uses short, punchy paragraphs suited to oral delivery. Longer narrative sections alternate with concise, memorable thesis statements.',
  time: 'Broadly chronological (childhood to adulthood) but with embedded flashbacks and flash-forwards. The chronological structure mirrors a journey of understanding — the speaker grows as the text progresses.',
  openingClosing:
    'The opening uses a specific, small-scale anecdote (a child reading); the closing uses a large-scale, universal claim about the power of stories. This movement from particular to universal gives the text its persuasive arc.',
}

const writersPurpose = {
  achieve:
    'Adichie wants to persuade her audience that relying on a single narrative about any group of people is dangerous. She argues that stereotypes are not necessarily untrue but are fundamentally incomplete.',
  readerFeel:
    'She wants the audience to feel uncomfortable — to recognise their own single stories and the harm those stories cause. She also wants them to feel empowered to seek out multiple perspectives.',
  message:
    'Her central argument is that stories carry power, and that the dominance of a single story — whether about Africa, about immigrants, about any group — flattens complexity and denies humanity. The antidote is a balance of stories.',
}

const keyVocabulary = [
  {
    word: 'dispossess',
    definition:
      'To deprive someone of land, property, or other belongings; here used metaphorically to mean stripping people of their identity.',
  },
  {
    word: 'malign',
    definition: 'To speak about someone in a spitefully critical manner; to slander.',
  },
  {
    word: 'patronising',
    definition: 'Treating someone with an apparent kindness that reveals a feeling of superiority.',
  },
  {
    word: 'stereotype',
    definition:
      'A widely held but oversimplified and fixed image or idea of a particular type of person or group.',
  },
  {
    word: 'impressionable',
    definition: 'Easily influenced or affected, especially by new ideas or experiences.',
  },
  {
    word: 'vulnerability',
    definition: 'The quality of being open to emotional or physical harm; exposure.',
  },
  { word: 'perception', definition: 'The way in which something is understood or interpreted.' },
  {
    word: 'catastrophe',
    definition:
      'A sudden disaster or great misfortune; used by Adichie to describe the consequence of a single story.',
  },
  {
    word: 'authenticity',
    definition: "The quality of being genuine, real, or true to one's own character.",
  },
  {
    word: 'humanise',
    definition:
      'To make something more humane or civilised; to portray someone as a full, complex person.',
  },
  {
    word: 'narrative',
    definition:
      'A spoken or written account of connected events; a story or way of telling a story.',
  },
  {
    word: 'default',
    definition:
      'A preselected option or position adopted automatically; here meaning the assumed story about a group.',
  },
]

const examPractice = {
  q1: {
    question:
      "List four things you learn about Adichie's childhood reading habits from the opening of the text.",
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Adichie use language to convey the impact of stereotypes on individuals?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Adichie uses emotive language to convey the patronising assumptions of her American roommate, making the reader feel the frustration of being reduced to a single narrative.',
      'The repetition of the phrase "single story" throughout the text reinforces the central concept and mirrors how stereotypes are themselves reinforced through repetition, creating a cumulative effect on the audience.',
      'Antithetical pairings — stories that diminish set against stories that empower — present narrative as a tool with dual potential, sharpening the argument that storytelling power must be used responsibly.',
      "Adichie's use of personal anecdote — her own single story of her family's house boy, Fide — is particularly effective because it removes moral superiority: she includes herself as both perpetrator and victim of stereotyping, which strengthens her credibility.",
    ],
  },
  q3: {
    question:
      'How does Adichie structure her speech to build a persuasive argument about the danger of single stories?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason:
      'Both texts explore how identity is shaped by the stories others tell about you. Adichie examines cultural stereotyping; Yen Mah examines family rejection. Compare how each writer uses personal experience to challenge limiting narratives.',
    themes: ['Identity', 'Stereotypes', 'Belonging'],
  },
  {
    title: 'Young and Dyslexic',
    author: 'Benjamin Zephaniah (1958–2023)',
    href: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    reason:
      'Both writers challenge the single story others have constructed about them — Adichie as an African, Zephaniah as a dyslexic person. Compare how each uses personal voice and direct address to reclaim their identity.',
    themes: ['Identity', 'Challenging assumptions', 'Self-belief'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955–2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Adichie warns about the single story of Africa; Alagiah wrestled with being part of the media that helps create it. Compare how each writer handles the ethics of representing African suffering.',
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
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
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
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                Paper 1 Section A
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* ── Editorial notice ───────────────────────────────────────── */}
      <section className="rounded-xl border border-amber-500/30 bg-amber-50/40 p-4 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-4.5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="text-body-sm text-foreground/90 leading-relaxed">
            <strong className="text-foreground">
              Page rebuilt April 2026 — direct quotations removed pending verified anthology review.
            </strong>{' '}
            We retain only widely-attested lines from the TED talk transcript while we re-verify the
            Edexcel anthology adaptation against a licensed copy. Structural and thematic
            commentary, vocabulary, and comparison guidance remain unchanged.
          </div>
        </div>
      </section>

      {/* ── Verified TED Lines ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Verified TED talk lines
          </h2>
          <span className="font-mono text-body-xs text-muted-foreground ml-auto">
            Fair-dealing extracts for study
          </span>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          The lines below are widely attested in the 2009 TEDGlobal talk and are highly likely to
          appear in the Edexcel anthology adaptation. All other direct quotations have been
          temporarily removed pending verification against the licensed anthology text.
        </p>
        <div className="space-y-4">
          {verifiedTedLines.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">
                {extract.label}
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
          Key language features used by Adichie and their effects on the reader. Specific quotations
          have been removed pending verification; the techniques themselves are clearly present in
          the text.
        </p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                  {f.technique}
                </span>
              </div>
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
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
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
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              How does the writer want the reader to feel?
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.readerFeel}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              Central message or argument
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.message}
            </p>
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
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Exam Practice</h2>
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
              <span className="font-mono text-body-xs text-amber-700 dark:text-clay-600 uppercase tracking-wider font-semibold">
                Model answer outline
              </span>
              <ul className="mt-2 space-y-2 text-body-sm text-muted-foreground">
                {examPractice.q2.modelOutline.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 text-amber-600 dark:text-clay-600">&bull;</span>
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
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Compare With</h2>
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
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
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
          <strong className="text-foreground">Rights notice:</strong> &copy; Wylie Agency / TED
          Conferences / Pearson Education on behalf of Chimamanda Ngozi Adichie (b. 1977).
          Quotations are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review,
          quotation). For full text, students should consult the licensed school edition (Pearson
          Edexcel IGCSE anthology, ISBN 978-1-446-93108-0) or the original TEDGlobal 2009 talk
          transcript.
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
