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
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title:
    'Between a Rock and a Hard Place — Aron Ralston — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for the anthology extract from Between a Rock and a Hard Place by Aron Ralston (filmed as 127 Hours). Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/127-hours' },
}

const extractFocuses = [
  {
    id: 1,
    label: 'The boulder falls',
    focus: 'The opening moment of the accident',
    context:
      'Ralston describes the instant the rock shifts and traps his right hand against the canyon wall. The narration is locked into the present tense, removing any sense of safe hindsight and forcing the reader to share the disorientation of the impact.',
  },
  {
    id: 2,
    label: 'Isolation and self-blame',
    focus: 'Realising no one knows where he is',
    context:
      'Ralston confronts the fact that he told no one his route into Bluejohn Canyon. The text shifts inward as he assigns responsibility to himself, layering guilt on top of fear and refusing to position himself purely as a victim.',
  },
  {
    id: 3,
    label: 'The decision',
    focus: 'Accepting that no rescue is coming',
    context:
      'After exhausting practical attempts to free himself, Ralston records the moment he understands that survival now depends entirely on his own action. The shift from waiting to deciding is the structural pivot of the extract.',
  },
  {
    id: 4,
    label: 'Hallucination',
    focus: 'A vision of a future child',
    context:
      'Severe dehydration produces a vision of a small boy in a sunlit room — a figure Ralston interprets as a future son. The hallucination introduces hope and a stake in the future at the moment of greatest physical decline.',
  },
  {
    id: 5,
    label: 'Self-amputation',
    focus: 'The act of cutting himself free',
    context:
      'Ralston narrates the process of breaking and cutting through his own arm. The prose stays methodical and physical rather than melodramatic, foregrounding decisions and sensations rather than reflection.',
  },
]

const languageFeatures = [
  {
    technique: 'Present-tense narration',
    explanation:
      'The whole extract is told in the present tense. The reader experiences each moment as Ralston experiences it, with no reassuring past-tense distance. The effect is visceral and claustrophobic — events happen now, not safely in memory.',
  },
  {
    technique: 'Short, clipped sentences',
    explanation:
      'At points of highest stress, Ralston compresses sentences down to single statements of fact. The bluntness mirrors panic and the absence of options, and creates a rhythm that escalates and then forces a pause.',
  },
  {
    technique: 'Sensory and bodily language',
    explanation:
      'Ralston repeatedly names internal physical sensations — adrenaline, thirst, cold, pain. By describing what is happening inside his body rather than only what is visible outside it, he creates an empathetic, uncomfortable closeness with the reader.',
  },
  {
    technique: 'Self-directed metaphor',
    explanation:
      'Before the act of self-amputation, Ralston casts himself in heroic and stoic roles. The metaphors are not decoration — they are acts of will, language he uses on himself to manufacture the strength his body can no longer supply.',
  },
  {
    technique: 'Acceptance of fault',
    explanation:
      'Ralston is candid about the choices that led to his predicament: he travelled alone and told no one his route. By taking responsibility, he prevents the reader from reducing him to a passive victim and frames survival as an active correction of his earlier mistake.',
  },
  {
    technique: 'Contrasting imagery',
    explanation:
      'The cold, narrow, dark canyon is set against the warm, lit, domestic vision of his hallucinated future son. The contrast organises the extract around two poles — the closing-in physical present and the opening-out imagined future.',
  },
  {
    technique: 'Unfiltered emotional detail',
    explanation:
      'Ralston includes screams, tears, and moments of breakdown without trying to make them dignified. The refusal to clean up the experience is itself a rhetorical choice: it earns trust and makes the survival that follows feel costly rather than triumphant.',
  },
  {
    technique: 'Internal monologue',
    explanation:
      'Much of the extract is thought rather than action. The reader follows Ralston working through options, ruling them out, and arriving at conclusions. The pacing of the thinking is the pacing of the suspense.',
  },
  {
    technique: 'Sequenced verbs of action',
    explanation:
      'When the extract finally moves into physical action, Ralston records the procedure as a sequence of discrete verbs. The listing forces the reader through the action one step at a time, mirroring the deliberate, unrushed quality of the act itself.',
  },
  {
    technique: 'Self-talk as survival tool',
    explanation:
      'Ralston quotes the orders he gives himself. Language becomes equipment — a way to override despair and convert thought into the next action. The technique demonstrates the central idea of the extract: that the mind is the last resource when the body is trapped.',
  },
]

const structuralAnalysis = {
  opening:
    'Ralston opens in medias res, with the boulder already shifting. There is no preamble, no setting-up of context — the reader is dropped into the crisis at exactly the moment Ralston is, mirroring his own shock.',
  development:
    'The extract develops through escalating stages: initial shock, assessment of the trap, attempts at physical escape, recognition that no rescue is coming, hallucination, and finally the decision to act. Each stage closes off a route the reader might have hoped for.',
  climax:
    'The climax is the act of self-amputation. The text builds towards this moment through the long psychological preparation that fills most of the extract, so when the action arrives it feels less like a sudden event than the only remaining option.',
  resolution:
    'The resolution is survival rather than rescue: Ralston frees himself and walks out. The text resists a tidy ending, leaving the trauma and the moral weight of the decision in place rather than resolving them.',
  perspective:
    "First person, present tense throughout. The narrative is locked inside Ralston's body and mind, with no external viewpoint and no relief from his perspective.",
  paragraphing:
    'Paragraphs and sentences are often very short. The fragmented layout produces pace, urgency and the sense of a mind working in pulses rather than continuous streams.',
  time: 'Time is a structural device as well as a subject. Ralston tracks hours and days, and time becomes both the enemy (dehydration, hypothermia) and the measure of his endurance. The framing duration — 127 hours — is foregrounded as a structural unit.',
  openingClosing:
    'The extract moves from helplessness at the start (the boulder falls onto him) to agency at the end (he acts on himself). The structural arc from passive to active mirrors the psychological journey from victim to survivor.',
}

const writersPurpose = {
  achieve:
    'Ralston aims to give an honest, unflinching account of survival under extreme constraint. The extract refuses to romanticise: fear, self-blame, pain and desperation sit alongside determination rather than being edited out.',
  readerFeel:
    'The reader is meant to feel the claustrophobia of the canyon, the slow narrowing of options, and the primal will that finally drives the decision to act. The present-tense narration is engineered to place the reader inside the situation rather than outside it.',
  message:
    'The central idea is the power of the human will. When external resources fail and rescue does not come, the mind itself — through self-talk, imagined futures, and decisions made in language — becomes the means of survival.',
}

const keyVocabulary = [
  {
    word: 'adrenaline',
    definition:
      'A hormone released in response to stress, increasing heart rate and energy. The body\'s "fight or flight" chemical.',
  },
  {
    word: 'canyon',
    definition: 'A deep, narrow gorge with steep sides, typically formed by a river.',
  },
  {
    word: 'tourniquet',
    definition:
      'A device used to stop bleeding by compressing a blood vessel, typically a tight bandage.',
  },
  {
    word: 'hallucination',
    definition:
      'An experience of seeing, hearing or sensing something that is not present, often caused by dehydration or exhaustion.',
  },
  { word: 'amputation', definition: 'The surgical removal of a limb or body part.' },
  { word: 'predicament', definition: 'A difficult, unpleasant or embarrassing situation.' },
  {
    word: 'dehydration',
    definition:
      'The loss of a large amount of water from the body, leading to confusion and organ failure.',
  },
  {
    word: 'hypothermia',
    definition: 'Dangerously low body temperature, caused by prolonged exposure to cold.',
  },
  {
    word: 'resilience',
    definition: 'The capacity to recover quickly from difficulties; toughness and determination.',
  },
  {
    word: 'primal',
    definition: 'Relating to the most basic, instinctive level of human behaviour.',
  },
  { word: 'drastic', definition: 'Extreme and likely to have a serious or far-reaching effect.' },
  {
    word: 'visceral',
    definition: 'Relating to deep inner feelings rather than to the intellect; gut-level.',
  },
]

const examPractice = {
  q1: {
    question:
      "List four things you learn about Ralston's physical condition during his time trapped in the canyon.",
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Ralston use language to convey the intensity of his survival experience?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Present-tense narration removes the safety of past-tense distance and locks the reader into the unfolding crisis at the same speed Ralston experiences it.',
      'Short, declarative sentence structures convey panic and finality, their bluntness reflecting situations in which there is no room for evasion or comfort.',
      'Self-directed metaphor and self-talk show Ralston using language as a survival tool, transforming himself from a trapped subject into an active agent through the way he describes himself to himself.',
      "Sensory description of bodily sensations — adrenaline, thirst, cold, pain — places the reader inside Ralston's body rather than outside the experience, creating a visceral rather than observational effect.",
    ],
  },
  q3: {
    question:
      'How does Ralston structure the text to build tension towards the moment of his escape?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'Explorers or Boys Messing About',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason:
      "Both texts concern adventurers in danger. Compare Ralston's first-person survival account with Morris's critical newspaper article — one celebrates resilience from inside, the other condemns recklessness from outside.",
    themes: ['Adventure', 'Risk', 'Different perspectives'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955–2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      "Both texts deal with extreme physical suffering. Compare Ralston's self-focused survival narrative with Alagiah's empathetic witness account — two different relationships to pain and endurance.",
    themes: ['Suffering', 'Survival', 'Perspective'],
  },
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      "Both texts describe humans confronting the power of nature. Compare Ralston's individual battle with Herbert's communal hunt — solo survival versus collective tradition in hostile environments.",
    themes: ['Nature', 'Survival', 'Human vs environment'],
  },
]

export default async function OneHundredTwentySevenHoursPage() {
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
              From Between a Rock and a Hard Place
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Aron Ralston (b. 1975) &middot; Autobiography
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
          <strong className="text-foreground">A note on the title.</strong> The anthology lists this
          extract under the heading &ldquo;127 Hours&rdquo;, which is the title of the 2010 film
          adaptation. The book itself is <em>Between a Rock and a Hard Place</em>, published by
          Simon &amp; Schuster in 2004. The extract describes Ralston&apos;s experience in Bluejohn
          Canyon, Utah, in April 2003, where he was trapped by a fallen boulder and ultimately freed
          himself by amputating his own right forearm.
        </p>
        <p className="mt-2 text-body-xs">
          <strong className="text-foreground">Page rebuilt April 2026.</strong> This page has been
          rewritten to remove unverifiable direct quotations. Analysis discusses structure,
          technique and effect without putting specific words into the writer&apos;s mouth. For the
          exact text of the extract, students should use the licensed Pearson Edexcel anthology.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Extract Focuses
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Key moments in the extract and what each one is doing structurally and emotionally. Refer
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
          Key language features used by Ralston and their effects on the reader. Discussed by
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
          <strong className="text-foreground">Rights notice:</strong> &copy; Simon &amp; Schuster on
          behalf of Aron Ralston (b. 1975). The book is <em>Between a Rock and a Hard Place</em>{' '}
          (2004); &ldquo;127 Hours&rdquo; is the title of the 2010 film adaptation. This page
          contains no direct quotations from the work; commentary is provided under fair dealing for
          criticism, review and quotation under CDPA 1988 &sect;30. For the exact text of the
          extract, students should consult the licensed school edition (Pearson Edexcel IGCSE
          anthology, ISBN 978-1-446-93108-0).
        </p>
        <p className="mt-2">
          <strong className="text-foreground">Page rebuilt April 2026.</strong> Aligned with Pearson
          Edexcel specification 4EA1.
        </p>
      </footer>
    </div>
  )
}
