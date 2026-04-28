import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  GitCompare,
  GraduationCap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title:
    'A Game of Polo with a Headless Goat — Emma Levine — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for the anthology extract from A Game of Polo with a Headless Goat by Emma Levine. Language analysis, structural analysis, themes and exam practice for Edexcel IGCSE English Language A Paper 1 Section A.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
  },
}

const themes = [
  {
    label: 'Cultural spectacle',
    detail:
      'Levine recounts witnessing buzkashi, a traditional Central Asian equestrian sport whose intensity both unsettles and fascinates an outsider observer.',
  },
  {
    label: 'Outsider perspective',
    detail:
      "A travel writer's gaze — at once curious, anxious and admiring — frames the entire piece. Levine is honest about her position as a visitor and does not pretend to insider authority.",
  },
  {
    label: 'Tradition and continuity',
    detail:
      'The sport she witnesses connects modern players to centuries of regional practice. Tradition is presented as living, not preserved behind glass.',
  },
  {
    label: 'Sensory overload',
    detail:
      "Levine's prose tracks the sensory press of the event — dust, noise, horses, crowds — building a pulse of controlled chaos that the reader has to absorb in real time.",
  },
  {
    label: 'Cross-cultural understanding',
    detail:
      'The text invites readers to suspend judgement of an unfamiliar custom and to attempt to see it on its own cultural terms rather than through a Western sporting lens.',
  },
]

const extractFocuses = [
  {
    id: 1,
    label: 'Approach and arrival',
    focus: "Establishing the location and the writer's position within it",
    context:
      'Levine sets the scene as a traveller arriving at an event she does not yet fully understand. The framing positions the reader alongside her as a fellow newcomer rather than as someone being given an authoritative explanation.',
  },
  {
    id: 2,
    label: 'Naming the sport',
    focus: 'Introducing buzkashi and its literal meaning',
    context:
      'The text foregrounds the sport\'s name and its translation as "goat-grabbing". The choice to translate rather than soften the term is part of Levine\'s strategy of presenting the spectacle without sanitising it.',
  },
  {
    id: 3,
    label: 'The action of the game',
    focus: 'Horses, riders and the press of the crowd',
    context:
      'Levine builds the description of play through movement, sound and shifting points of view. The prose becomes more kinetic at the centre of the extract, mirroring the physical intensity of what she is watching.',
  },
  {
    id: 4,
    label: 'A near-miss with the crowd',
    focus: 'The collision between spectators and the field of play',
    context:
      'A moment in which the boundary between audience and event collapses. The writer foregrounds her own physical presence and slight panic, which keeps the description honest about being an outsider in an unpredictable space.',
  },
  {
    id: 5,
    label: 'Reflection',
    focus: 'Standing back from the spectacle',
    context:
      'The closing movement of the extract steps back from immediate description and considers what has been witnessed. Levine resists turning the experience into a tidy lesson, leaving the reader with awe rather than judgement.',
  },
]

const languageFeatures = [
  {
    technique: 'First-person travel narration',
    explanation:
      'Levine writes from a clearly marked first-person "I", foregrounding her own perspective as a visitor. The reader is invited to share the position of an outsider trying to make sense of an unfamiliar event, rather than being given an authoritative third-person account.',
  },
  {
    technique: 'Sensory description',
    explanation:
      'Sight, sound, smell and texture are layered through the extract: dust, hooves, voices, horses pressing close. The accumulation of sensory detail produces immersion and forces the reader to feel the event as physically present rather than safely distant.',
  },
  {
    technique: 'Cultural specificity',
    explanation:
      'Levine names the sport in its original language and translates it precisely rather than substituting a Western analogue. The decision to keep the term "buzkashi" visible is itself a rhetorical choice: it asks the reader to accept the practice on its own terms.',
  },
  {
    technique: 'Pacing through sentence length',
    explanation:
      'Sentences expand as the description widens out and contract as the action intensifies. The shifting rhythm tracks the changing tempo of the event and gives the prose a controlled sense of crowd, motion and pause.',
  },
  {
    technique: 'Honest self-positioning',
    explanation:
      'Levine does not pretend to expertise she does not have. She admits to confusion, anxiety and the limits of her viewpoint. The honesty is a rhetorical strategy: it earns trust and prevents the writing from sliding into condescension.',
  },
  {
    technique: 'Restraint from judgement',
    explanation:
      'The text resists the temptation to label the sport as either picturesque or barbaric. Levine describes; she does not editorialise. The restraint is itself the argument — meaning is left for the reader to construct rather than handed down.',
  },
  {
    technique: 'Embedded dialogue and voices',
    explanation:
      "Voices from the event — players, organisers, fellow spectators — surface through the description. Their presence reminds the reader that this is a living social occasion, not a tableau staged for tourists, and complicates Levine's outsider gaze.",
  },
  {
    technique: "Movement of the writer's body",
    explanation:
      'Levine repeatedly foregrounds where she is standing, what she can see from there, and when she has to move. Tracking her physical position keeps the writing accountable to a specific point of view rather than claiming an omniscient overview.',
  },
]

const structuralAnalysis = {
  opening:
    "Levine opens by placing the reader in the location and signalling that something unusual is about to happen. The framing is a traveller's framing — the reader joins her as a fellow newcomer rather than receiving a finished explanation.",
  development:
    "The extract moves through arrival, anticipation, the spectacle itself and the reflection afterwards. The arc is from outside observation to felt experience, with the reader's sense of the event deepening as Levine's own does.",
  climax:
    "The climax is the chaotic peak of the game, where sound, motion and danger reach their highest intensity and Levine's prose becomes most kinetic. The boundary between observer and event briefly dissolves.",
  resolution:
    'The resolution leaves the reader with awe rather than verdict. Levine declines to editorialise; she lets the experience stand and trusts the reader to form a response.',
  perspective:
    "First-person travel narration. Levine's narrating voice is honest about being out of her depth, which earns the reader's trust and keeps the writing free of false authority.",
}

const writersPurpose = {
  achieve:
    'Levine aims to convey the texture and intensity of a cultural event most Western readers will never witness, while resisting easy stereotypes and refusing to flatten the practice into either spectacle or shock.',
  readerFeel:
    'The reader is meant to feel both the excitement of the spectacle and the slight unease of being a stranger inside it — a productive discomfort that opens the mind rather than closing down judgement.',
  message:
    'Cultural difference is presented not as a problem to be solved but as an experience to be entered. The reader is invited to suspend habitual judgement and to look before deciding.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about the event Levine witnesses.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Levine use language to convey the atmosphere of the spectacle?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'First-person travel narration positions the reader alongside Levine as a fellow outsider, so the text reads as shared discovery rather than expert commentary.',
      'Layered sensory description — dust, sound, the press of horses and bodies — produces immersion and shifts the reader from observer to near-participant in the spectacle.',
      'Cultural specificity, including the use of the original name of the sport and its literal translation, signals respect for the practice and asks the reader to accept it on its own terms.',
      'Restraint from explicit judgement makes the writing trustworthy: Levine describes rather than editorialises, leaving meaning for the reader to construct.',
    ],
  },
  q3: {
    question: 'How does Levine structure the text to take the reader through the experience?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both writers observe a culturally embedded practice (Inuit hunting / buzkashi) and balance fascination with ethical unease. Compare the two outsider gazes.',
    themes: ['Outsider perspective', 'Tradition', 'Ethics'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      'Two travel writers, two unfamiliar cultures, two different relationships to settling-in. Compare the day-trip spectator with the long-stay resident.',
    themes: ['Travel', 'Culture', 'Belonging'],
  },
  {
    title: 'Explorers or Boys Messing About?',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason:
      "Both texts are journalistic but adopt different stances. Compare Levine's observational openness with Morris's sceptical framing.",
    themes: ['Journalism', 'Authorial stance', 'Spectacle'],
  },
]

export default async function AGameOfPoloPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
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
              A Game of Polo with a Headless Goat
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Emma Levine &middot; Travel writing
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

      <section className="rounded-2xl border border-border/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-body-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">Page rebuilt April 2026.</strong> This page has been
          rewritten to remove unverifiable direct quotations. Analysis discusses structure,
          technique and effect without putting specific words into the writer&apos;s mouth. For the
          exact text of the extract, students should use the licensed Pearson Edexcel anthology.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Context</h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Emma Levine&apos;s book{' '}
            <em>
              A Game of Polo with a Headless Goat: An Erratic Search for Asia&apos;s Sporting Soul
            </em>{' '}
            (2000) documents traditional sports across Asia. The anthology extract recounts her
            experience of <em>buzkashi</em>, a fast, physically demanding equestrian sport played on
            horseback whose name translates literally as &ldquo;goat-grabbing&rdquo;, and which has
            been practised across Afghanistan and Central Asia for centuries.
          </p>
          <p>
            The extract is a study in{' '}
            <strong className="text-foreground">
              how a travel writer balances vivid description with respect for cultural specificity
            </strong>
            , neither sensationalising nor sanitising what she witnesses.
          </p>
          <p>Published by Little, Brown.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Themes</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {t.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Extract Focuses
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Key moments in the extract and what each one is doing structurally and thematically. Refer
          to the licensed anthology for the exact wording.
        </p>
        <div className="space-y-4">
          {extractFocuses.map((extract) => (
            <div key={extract.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">
                Moment {extract.id} — {extract.label}
              </span>
              <p className="mt-2 text-body-sm font-semibold text-foreground">{extract.focus}</p>
              <p className="mt-2 text-body-sm text-muted-foreground">{extract.context}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Language Analysis
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Key language features used by Levine and their effects on the reader. Discussed by
          technique rather than by quotation; bring exact wording from your anthology when you write
          up answers.
        </p>
        <div className="space-y-4">
          {languageFeatures.map((f) => (
            <div key={f.technique} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {f.technique}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {f.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

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

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">Rights notice:</strong> &copy; Little, Brown / Emma
          Levine, <em>A Game of Polo with a Headless Goat</em> (2000). This page contains no direct
          quotations from the work; commentary is provided under fair dealing for criticism, review
          and quotation under CDPA 1988 &sect;30. For the exact text of the extract, students should
          consult the licensed school edition (Pearson Edexcel IGCSE anthology, ISBN
          978-1-446-93108-0).
        </p>
        <p className="mt-2">
          <strong className="text-foreground">Page rebuilt April 2026.</strong> Aligned with Pearson
          Edexcel specification 4EA1.
        </p>
      </footer>
    </div>
  )
}
