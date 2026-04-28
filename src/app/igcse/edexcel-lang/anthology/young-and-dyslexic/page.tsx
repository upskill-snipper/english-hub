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
    "Young and Dyslexic? You've Got It Going On — Benjamin Zephaniah — IGCSE Language A Anthology — The English Hub",
  description:
    "Study guide for Young and Dyslexic? You've Got It Going On by Benjamin Zephaniah (1958–2023). Themes, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.",
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/young-and-dyslexic',
  },
}

const themes = [
  {
    label: 'Reframing dyslexia',
    detail:
      'Zephaniah challenged the deficit view of dyslexia. The text repositioned the condition as a different way of thinking rather than a failing — a difference, not a deficiency.',
  },
  {
    label: 'School and the education system',
    detail:
      'The article drew on Zephaniah’s own experience of leaving school early and being labelled by teachers. It indicted a system that mistook one narrow definition of intelligence for the whole.',
  },
  {
    label: 'Identity and self-worth',
    detail:
      'Zephaniah refused the labels imposed on him as a child. The text traced how he built an authorial identity that did not depend on the institutional approval he had been denied.',
  },
  {
    label: 'Creativity and alternative ability',
    detail:
      'The piece argued that dyslexic thinking can underwrite creative achievement — in poetry, performance, problem-solving — and that conventional schooling often misses what such minds can do.',
  },
  {
    label: 'Encouragement of young readers',
    detail:
      'The closing of the piece addressed young dyslexic readers directly. Zephaniah used his own life as evidence that the labels of childhood need not become the verdict of adulthood.',
  },
]

const languageFeatures = [
  {
    technique: 'Conversational tone',
    explanation:
      'Zephaniah wrote in an informal, addressing-you register that resembled spoken speech rather than journalistic prose. The effect was warmth and immediacy — the article reads as a message from someone who has been where the young reader is now.',
  },
  {
    technique: 'Direct address',
    explanation:
      'The text spoke straight to the reader, with the young dyslexic person clearly imagined as the audience. Second-person address built solidarity and made each reader feel personally invited into the argument.',
  },
  {
    technique: 'Personal anecdote',
    explanation:
      'Zephaniah grounded his case in autobiographical detail — leaving school early, being labelled, finding alternative routes into work and writing. The authority of the piece came from lived experience rather than abstract advocacy.',
  },
  {
    technique: 'Contrast and reframing',
    explanation:
      'A central rhetorical move was the substitution of one frame for another — reading dyslexia not as a deficit but as a different ability. The piece worked by replacing the language of disability with the language of difference.',
  },
  {
    technique: 'Listing and accumulation',
    explanation:
      'The article piled up examples of achievement against the earlier catalogue of failure, using lists to overwhelm the reductive label of “stupid” with evidence of capability.',
  },
  {
    technique: 'Humour and irony',
    explanation:
      'Zephaniah used self-deprecating humour about his own struggles with spelling, which disarmed the reader and made the more serious argument easier to accept. The lightness of tone made the seriousness of the message more, not less, persuasive.',
  },
  {
    technique: 'Imperative and encouragement',
    explanation:
      'The closing movement of the article shifted from memoir into instruction, urging the young dyslexic reader directly to reject the verdicts they had been handed. The change of register turned a personal story into a public message.',
  },
  {
    technique: 'Emotive vocabulary',
    explanation:
      'Zephaniah did not soften the language used about him as a child. The blunt vocabulary of school-era judgement was reproduced precisely so the reader could feel the cruelty of those labels.',
  },
]

const structuralAnalysis = {
  opening:
    'The piece opened from a position of school-era failure — Zephaniah established the negative starting point first, so that everything that followed registered as upward movement away from it.',
  development:
    'The text developed chronologically: school in the past, success in the present, encouragement for the future. Each section reframed the previous one, so that early failure became the precondition for later achievement rather than evidence of inadequacy.',
  climax:
    'The structural climax was the moment of reframing — the shift from disability to difference — which transformed the article from personal memoir into general argument.',
  resolution:
    'The resolution was outward-facing: having told his own story, Zephaniah turned to the young dyslexic reader and applied the lesson directly. The article ended as a message rather than as autobiography.',
  perspective:
    'First-person throughout. The authority of the piece rested entirely on lived experience — there were no statistics or expert voices, only Zephaniah’s own testimony.',
  paragraphing:
    'Short paragraphs and direct sentences reflected Zephaniah’s background as a performance poet. The text was written to be spoken as much as read, with each unit landing as a discrete beat.',
  time: 'Broadly chronological — past failure, present success, future hope. The temporal structure mirrored a redemption arc, from the labels of childhood to the agency of adulthood.',
  openingClosing:
    'The opening dwelt on a young person being told they were inadequate; the closing told a young person they had real capability. The structural inversion was the embodiment of the article’s argument.',
}

const writersPurpose = {
  achieve:
    'Zephaniah set out to challenge a reductive definition of dyslexia and to reach young dyslexic readers who had been made to feel inadequate by their schooling. The article reclaimed a label that had been used to diminish him.',
  readerFeel:
    'He wanted young dyslexic readers to feel proud, hopeful and validated, and non-dyslexic readers to question their assumptions about what intelligence looks like.',
  message:
    'Dyslexia is a difference, not a deficit. The narrow definitions of intelligence used by schools fail dyslexic students, but the same different thinking is often a strength in creative and practical fields.',
}

const keyVocabulary = [
  {
    word: 'dyslexia',
    definition:
      'A learning difference that primarily affects reading, writing and spelling skills. It is neurological and unrelated to intelligence.',
  },
  {
    word: 'stigma',
    definition: 'A mark of disgrace associated with a particular circumstance, quality or person.',
  },
  {
    word: 'accommodate',
    definition: 'To adjust or adapt for someone’s needs; to make room for a difference.',
  },
  {
    word: 'deficit',
    definition:
      'A deficiency or shortage; in education, a "deficit model" focuses on what someone cannot do rather than what they can.',
  },
  {
    word: 'neurodiversity',
    definition:
      'The idea that neurological differences (such as dyslexia, ADHD, autism) are normal variations in the human brain rather than disorders.',
  },
  {
    word: 'empowerment',
    definition:
      'The process of becoming stronger and more confident, especially in controlling one’s life and claiming one’s rights.',
  },
  { word: 'resilience', definition: 'The ability to recover from setbacks and keep going.' },
  {
    word: 'manifesto',
    definition: 'A public declaration of aims, motives or views; a statement of principles.',
  },
  {
    word: 'advocate',
    definition: 'A person who publicly supports or recommends a particular cause or policy.',
  },
  {
    word: 'alternative',
    definition: 'Available as another possibility or choice; different from the usual.',
  },
  {
    word: 'creativity',
    definition: 'The use of imagination or original ideas to create something; inventiveness.',
  },
]

const examPractice = {
  q1: {
    question: 'List four things you learn about Zephaniah’s experience of school from the text.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Zephaniah use language to challenge negative attitudes towards dyslexia?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Zephaniah’s reframing of dyslexia — from disability to difference — is the article’s central rhetorical move, replacing one vocabulary with another to transform the meaning of the condition.',
      'Personal anecdote and direct address combine to give the piece its authority: the reader is being spoken to by someone who has lived through what is being described, rather than being lectured at by an outside expert.',
      'The piling-up of later achievements answers the earlier catalogue of school-era failures, so that the structure of the prose itself argues against the labels of childhood.',
      'Humour and self-deprecation about his own struggles with the mechanics of writing disarm the reader and challenge the assumption that surface accuracy equals intelligence — a serious argument carried by a light tone.',
    ],
  },
  q3: {
    question:
      'How does Zephaniah structure the text to move from personal experience to a message for young readers?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Both writers challenge the reductive single story others have created about them — Adichie as an African woman, Zephaniah as a dyslexic person. Compare how each uses personal experience to dismantle stereotypes.',
    themes: ['Identity', 'Stereotypes', 'Self-definition'],
  },
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason:
      'Both texts describe childhood experiences of being made to feel worthless by authority figures. Compare how each writer uses early pain as the foundation for a message of resilience.',
    themes: ['Childhood', 'Rejection', 'Resilience'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both texts celebrate the power of human will. Compare Ralston’s physical survival with Zephaniah’s intellectual and emotional survival — both refuse the labels others place on them.',
    themes: ['Resilience', 'Self-belief', 'Overcoming adversity'],
  },
]

export default async function YoungAndDyslexicPage() {
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
              Young and Dyslexic? You&apos;ve Got It Going On
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Benjamin Zephaniah (1958&ndash;2023) &middot; Opinion article (Guardian, 2017 &mdash;
              adapted for the anthology)
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
              <strong className="text-foreground">Benjamin Zephaniah (1958&ndash;2023)</strong> was
              a British dub poet, novelist and rights campaigner. He died in January 2023; rights to
              his work are now held by his estate.
            </p>
          </div>
        </div>
      </div>

      <section
        aria-label="Page rebuilt notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div>
            <p>
              <strong className="text-foreground">Page rebuilt April 2026.</strong> This page was
              rebuilt to remove direct quotations that could not be confidently verified against a
              primary source. Discussion is now thematic. For the studied wording, students should
              always consult the licensed Pearson Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0) —
              examiners mark against the anthology text.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Anthology version warning"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div>
            <p className="mb-2">
              <strong className="text-foreground">Anthology version warning:</strong> This text is
              the <strong className="text-foreground">adapted</strong> version printed in the
              Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0). The freely-available{' '}
              <em>Guardian</em> original (linked from many revision sites) differs in cuts,
              re-orderings, and minor word choice. Always use the anthology version when answering
              Edexcel exam questions — examiners will mark against the anthology text.
            </p>
            <p>
              <strong className="text-foreground">Rights notice:</strong> Benjamin Zephaniah
              (1958&ndash;2023) — rights now held by his estate. &copy; estate via Pearson
              Education. Brief paraphrases on this page are short fair-dealing references for the
              purposes of criticism, review and education.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Context</h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Benjamin Zephaniah (1958&ndash;2023) was a British dub poet, novelist and political
            campaigner. He left school at thirteen, struggled with dyslexia, and built a literary
            career on performance, oral storytelling and a refusal to let institutional verdicts
            define him. He published this article in <em>The Guardian</em> in 2017, addressing young
            dyslexic readers directly.
          </p>
          <p>
            The anthology version studied here is an{' '}
            <strong className="text-foreground">adapted</strong> form of that 2017 article.
            Zephaniah died in January 2023; rights now sit with his estate.
          </p>
          <p>
            The piece functions as both memoir and manifesto — personal experience used as the
            engine of a public argument about how dyslexia should be understood and how dyslexic
            young people should be addressed.
          </p>
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
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Language Features
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Key language features used by Zephaniah and their effects on the reader. Discussion is
          thematic — students should source the studied wording from the licensed anthology.
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
          <strong className="text-foreground">Anthology version warning:</strong> This text is the{' '}
          <strong>adapted</strong> version printed in the Edexcel IGCSE Anthology (ISBN
          978-1-446-93108-0). The freely-available <em>Guardian</em> original differs in cuts,
          re-orderings, and minor word choice. Always use the anthology version when answering
          Edexcel exam questions — examiners will mark against the anthology text.
        </p>
        <p className="mt-2">
          <strong className="text-foreground">Rights notice:</strong> Benjamin Zephaniah
          (1958&ndash;2023) — rights now held by his estate. &copy; estate via Pearson Education.
          Brief paraphrases on this page are short fair-dealing references used for the purposes of
          criticism, review and education; full anthology selections require an Edexcel-licensed
          school edition.
        </p>
        <p className="mt-2">
          Aligned with Pearson Edexcel specification 4EA1 &middot; Paper 1 Section A — Anthology
          Non-Fiction
        </p>
      </footer>
    </div>
  )
}
