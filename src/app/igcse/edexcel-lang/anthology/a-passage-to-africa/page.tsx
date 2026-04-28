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
  Info,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'A Passage to Africa — George Alagiah — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for A Passage to Africa by George Alagiah. Thematic and structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-passage-to-africa',
  },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const keyMoments = [
  {
    id: 1,
    label: 'Opening — the catalogue of suffering',
    context:
      'Alagiah opened with a panoramic view of starvation across Somalia, criss-crossing the country between warring clans. The accumulation of suffering establishes the scale of the 1992 famine and his role as a journalist witnessing it.',
  },
  {
    id: 2,
    label: 'The encounter at Gufgaduud',
    context:
      'In the village of Gufgaduud, Alagiah met an emaciated man who turned and smiled at him. This single human gesture, made amid devastation, becomes the emotional centre of the extract and the moment Alagiah cannot forget.',
  },
  {
    id: 3,
    label: "The journalist's calculus",
    context:
      'Alagiah reflected on the disturbing logic of news reporting: that suffering must reach a certain scale before editors deem it newsworthy. He was openly self-critical about the moral compromises of foreign correspondence.',
  },
  {
    id: 4,
    label: 'The meaning of the smile',
    context:
      'The teacher note below explains why this is the most-quoted line of the piece. Alagiah re-read the smile not as a greeting but as something more painful — a recognition of being witnessed in degradation.',
  },
  {
    id: 5,
    label: 'Closing reflection',
    context:
      'Alagiah ended by reframing the smile as an assertion of humanity — a refusal to be reduced to a victim or a statistic. The closing recovers the individual that the opening submerged in the mass.',
  },
]

const languageFeatures = [
  {
    technique: 'Listing / accumulation',
    explanation:
      'Alagiah accumulated adjectives across physical, emotional and political registers in his opening, overwhelming the reader with the multidimensional nature of the famine. The list does the work of a wide camera shot.',
  },
  {
    technique: 'Metaphor of arithmetic',
    explanation:
      "A central metaphor in the extract reduced human lives to numbers, exposing the cold calculation of newsroom decision-making. The metaphor is paired with a strongly negative adjective so the reader feels Alagiah's discomfort with his own profession.",
  },
  {
    technique: 'Contrast',
    explanation:
      'The contrast between physical devastation and a small human gesture (the smile) is the emotional engine of the piece. It forces the reader to see the individual within the mass of suffering.',
  },
  {
    technique: 'Emotive and visceral diction',
    explanation:
      'Alagiah chose words that connote violent destruction and bodily decay, making abstract suffering concrete. The reader cannot maintain emotional distance from the language he selected.',
  },
  {
    technique: 'Sensory language',
    explanation:
      'He layered in sensory detail — particularly smell, the most unavoidable sense — to immerse the reader in the reality of the famine. You can look away from a photograph, but not a smell.',
  },
  {
    technique: 'Sentence variety',
    explanation:
      "Long descriptive sentences are punctuated by short, declarative ones at moments of revelation. The shorter sentences function as emphasis and create rhythmic shifts that reflect the journalist's shifting emotional state.",
  },
  {
    technique: 'Irony',
    explanation:
      'The text turns bitterly ironic when Alagiah explains that hundreds of dead are sometimes "not enough" to be news. He uses irony to expose the moral failings of the media industry he was part of.',
  },
  {
    technique: 'Repetition',
    explanation:
      "The motif of the smile recurs through the extract, reinterpreted each time — as greeting, as embarrassment, as humanity. The repetition tracks Alagiah's changing understanding of a single gesture.",
  },
  {
    technique: 'Rhetorical questioning',
    explanation:
      'Alagiah used rhetorical questions to invite the reader into his moral investigation. The text shifts from reportage to memoir as the reader becomes a fellow investigator of conscience.',
  },
  {
    technique: 'First-person reflective voice',
    explanation:
      'The narrator is both observer and participant. The tension between Alagiah-the-journalist and Alagiah-the-human-being drives the piece — the professional who must record suffering and the person who feels it.',
  },
]

const structuralAnalysis = {
  opening:
    'Alagiah opened with a panoramic view of suffering across Somalia — a wide shot establishing the overwhelming scale. This mirrors the technique of a news broadcast, starting with the big picture before zooming in.',
  development:
    "The text gradually narrows its focus from the general (a country, a famine, many faces) to the particular (one village, one man, one smile). This structural movement from wide to close-up is the text's most powerful device.",
  climax:
    'The climax is the moment of realisation about the smile — when Alagiah reinterpreted it not as a greeting but as something more troubling. This is both an emotional and intellectual climax.',
  resolution:
    'Alagiah reframed the smile a final time as an assertion of humanity. The resolution is not neat — the guilt remains — but the writer reaches a deeper understanding of what the encounter meant.',
  perspective:
    'First person throughout. Alagiah wrote as both journalist (observer) and human being (participant). The tension between these two roles drives the text: the professional who must record suffering and the person who feels it.',
  paragraphing:
    'Short paragraphs create pace and impact, particularly around the key revelation. Longer paragraphs are used for description and context, shorter ones for emotional moments.',
  time: 'The text moves between the general past (covering Somalia over weeks) and one specific moment (the man who smiled in Gufgaduud). There is a shift from professional time (deadlines, filing reports) to personal time (the moment that haunts you).',
  openingClosing:
    "The opening presents suffering as a mass; the closing recovers the individual. This structural arc — from dehumanisation to re-humanisation — embodies the text's central message about the importance of seeing individuals.",
}

const writersPurpose = {
  achieve:
    'Alagiah wanted to explore the moral complexity of being a journalist in a crisis zone. He questioned whether the media dehumanises the people it claims to help, and whether his own presence as a reporter contributed to the indignity of those he witnessed.',
  readerFeel:
    'He wanted the reader to feel the uncomfortable tension between compassion and voyeurism — the same tension he felt as a correspondent. He also wanted to restore humanity to the people he reported on.',
  message:
    "His central argument is that behind every news statistic is a human being who deserves to be seen as an individual. The man's smile in Gufgaduud is a refusal to be reduced to a victim — it is an assertion of dignity and humanity.",
}

const keyVocabulary = [
  { word: 'criss-crossed', definition: 'To move back and forth across an area repeatedly.' },
  { word: 'ghastly', definition: 'Causing great horror or fear; frightful or macabre.' },
  {
    word: 'arithmetic',
    definition:
      'The branch of mathematics dealing with numbers; here used metaphorically to describe the cold calculation of suffering.',
  },
  {
    word: 'degradation',
    definition:
      'The condition of being treated with shame or disrespect; being reduced to a lower state.',
  },
  { word: 'warring', definition: 'Engaged in conflict or fighting against each other.' },
  {
    word: 'emaciated',
    definition: 'Abnormally thin or weak, especially because of illness or lack of food.',
  },
  {
    word: 'famine',
    definition: 'Extreme scarcity of food affecting a population, often causing widespread death.',
  },
  {
    word: 'resilience',
    definition: 'The capacity to recover quickly from difficulties; toughness.',
  },
  {
    word: 'humanity',
    definition: 'The quality of being humane; benevolence. Also: human beings collectively.',
  },
  {
    word: 'mortality',
    definition: 'The state of being subject to death; the death rate in a population.',
  },
  {
    word: 'compassion',
    definition: 'Sympathetic pity and concern for the sufferings or misfortunes of others.',
  },
  {
    word: 'voyeurism',
    definition:
      "The practice of gaining pleasure from watching others' suffering or private moments; here applied to media consumption.",
  },
]

const examPractice = {
  q1: {
    question:
      'List four things you learn about the conditions in Somalia from the opening paragraphs.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question:
      'How does Alagiah use language to convey the impact of suffering on both the victims and himself as a journalist?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Identify the metaphor Alagiah uses for newsroom decision-making and explain how its negative modifier reveals his own moral discomfort with the profession.',
      'Track the listing of adjectives in the opening: how the cumulative effect moves the reader through the physical, emotional and political dimensions of suffering in a single sentence.',
      'Analyse the sensory language — particularly references to smell — and explain why this sense is harder to ignore than visual description.',
      'Examine the central contrast between devastation and the human gesture of the smile. Why does this contrast force both Alagiah and the reader to reconsider how they see victims of crisis?',
    ],
  },
  q3: {
    question:
      'How does Alagiah structure the text to move from a wide view of suffering to a focus on one individual?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Adichie warns about the single-story portrayal of Africa; Alagiah, as a BBC correspondent, was part of the media that creates it. Compare how each writer handles the ethics of representing Africa and the tension between individual stories and collective narratives.',
    themes: ['Africa', 'Representation', 'Media'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      "Both writers are outsiders encountering unfamiliar cultures. Compare Alagiah's guilt-laden journalism in a crisis zone with Zeppa's wonder-filled travel memoir — two very different ways of writing about the unfamiliar.",
    themes: ['Outsider perspective', 'Cultural encounter', 'Personal growth'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      "Both texts deal with extreme physical suffering. Compare Ralston's first-person survival narrative with Alagiah's journalistic witness account — one is the sufferer, the other is the observer.",
    themes: ['Suffering', 'Survival', 'Human resilience'],
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function APassageToAfricaPage() {
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

        <div className="mb-4 rounded-md border border-blue-500/30 bg-blue-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-blue-950/20">
          <strong className="text-foreground">Page rebuilt April 2026.</strong> Direct quotations
          have been removed pending verification against a licensed Edexcel anthology copy. Use the
          structural and thematic commentary on this page alongside your own anthology to source
          exact wording.
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              A Passage to Africa
            </h1>
            <p className="text-body-sm text-muted-foreground">
              George Alagiah (1955&ndash;2023) &middot; Memoir / journalism
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Edexcel IGCSE Language A
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                Paper 1 Section A
              </Badge>
            </div>
            <p className="mt-3 max-w-3xl text-body-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">George Alagiah (1955&ndash;2023)</strong> was a
              Sri Lankan-born British BBC journalist and broadcaster. The anthology extract, drawn
              from his 2001 memoir of the same name, recounts his reporting on the 1992 Somalia
              famine and a brief encounter with a man in the village of Gufgaduud. Rights to his
              work are now held by his estate.
            </p>
            <p className="mt-3 max-w-3xl rounded-md border border-amber-500/30 bg-amber-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-amber-950/20">
              <strong className="text-foreground">Rights notice:</strong> &copy; Alagiah estate via
              Pearson Education. Full anthology selections require an Edexcel-licensed school
              edition (ISBN 978-1-446-93108-0).
            </p>
          </div>
        </div>
      </div>

      {/* Key Moments */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Key Moments</h2>
          <span className="font-mono text-body-xs text-muted-foreground ml-auto">
            Use with your anthology
          </span>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Map of the extract’s key moments. Look up the exact wording in your licensed anthology.
        </p>
        <div className="space-y-4">
          {keyMoments.map((moment) => (
            <div key={moment.id} className="rounded-xl border border-border/40 bg-card p-4">
              <span className="font-mono text-body-xs text-amber-600 dark:text-clay-600 uppercase tracking-wider">
                Moment {moment.id} — {moment.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {moment.context}
              </p>
              {moment.id === 4 && (
                <div className="mt-3 rounded-md border border-blue-500/30 bg-blue-50/40 p-3 text-body-xs text-muted-foreground leading-relaxed dark:bg-blue-950/20">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                    <Info className="size-3.5" /> Teacher note
                  </span>
                  <p className="mt-1">
                    Alagiah famously frames this as a &ldquo;smile of embarrassment&rdquo; — verify
                    exact phrasing against your anthology before quoting.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Language Analysis */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Language Analysis
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Key language features used by Alagiah and their effects on the reader. Pair each technique
          with an exact quotation from your licensed anthology when writing exam answers.
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

      {/* Structural Analysis */}
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

      {/* Writer's Purpose */}
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
              What was the writer trying to achieve?
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              How did the writer want the reader to feel?
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

      {/* Key Vocabulary */}
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

      {/* Exam Practice */}
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

      {/* Comparison Links */}
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
          <strong className="text-foreground">Rights notice:</strong> &copy; Alagiah estate via
          Pearson Education. Full anthology selections require an Edexcel-licensed school edition
          (ISBN 978-1-446-93108-0). <em>A Passage to Africa</em> by George Alagiah (1955&ndash;2023)
          appears in his memoir <em>A Passage to Africa</em> (2001).
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
