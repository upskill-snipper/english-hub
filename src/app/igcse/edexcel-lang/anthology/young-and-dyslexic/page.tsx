import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Layers, Pen, Target, BookMarked, GitCompare, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: "Young and Dyslexic? You've Got It Going On — Benjamin Zephaniah — IGCSE Language A Anthology — The English Hub",
  description:
    "Full study guide for Young and Dyslexic? You've Got It Going On by Benjamin Zephaniah. Language analysis, structural analysis, key vocabulary and exam practice for Edexcel IGCSE English Language A.",
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/young-and-dyslexic' },
}

const keyExtracts = [
  {
    id: 1,
    label: 'Opening — school failure',
    text: '"I was told I was stupid because I couldn\'t spell... I left school at 13, unable to read or write."',
    context: 'Zephaniah opens with his painful school experience, establishing the damage done by an education system that could not accommodate his dyslexia.',
  },
  {
    id: 2,
    label: 'Reframing dyslexia',
    text: '"Dyslexia is not a disability. It is a different ability... we see the world differently, and that is our strength."',
    context: 'Zephaniah challenges the deficit model of dyslexia, reframing it as a positive difference rather than a flaw.',
  },
  {
    id: 3,
    label: 'Creative thinking',
    text: '"When I couldn\'t read maps, I remembered landscapes. When I couldn\'t write essays, I told stories."',
    context: 'Zephaniah describes how his dyslexia forced him to develop alternative skills — visual memory, oral storytelling — that became his greatest assets.',
  },
  {
    id: 4,
    label: 'Success despite the system',
    text: '"I became a poet, a novelist, a playwright... all without being able to spell the word \'necessary\'."',
    context: 'Zephaniah lists his achievements with deliberate irony — he succeeded in the world of words despite struggling with the mechanics of writing.',
  },
  {
    id: 5,
    label: 'Direct address to young people',
    text: '"If you are young and dyslexic, you have so much going for you. Don\'t let anyone tell you otherwise."',
    context: 'The closing directly addresses young dyslexic readers, offering encouragement and solidarity from someone who has been where they are.',
  },
]

const languageFeatures = [
  {
    technique: 'Conversational tone',
    quote: '"you\'ve got it going on"',
    explanation: 'Zephaniah uses informal, encouraging language that sounds like a friend talking to you. This tone builds trust and makes his message accessible, especially to the young readers he is addressing.',
  },
  {
    technique: 'Repetition',
    quote: '"I was told"',
    explanation: 'The repetition of "I was told" emphasises how often Zephaniah was dismissed by others. The passive construction shows him as a child who had no power — things were done to him, labels were imposed on him.',
  },
  {
    technique: 'Contrast',
    quote: '"not a disability... a different ability"',
    explanation: 'The contrast between "disability" and "different ability" is the rhetorical heart of the text. By changing one word, Zephaniah transforms the entire meaning of dyslexia from weakness to strength.',
  },
  {
    technique: 'Parallelism',
    quote: '"When I couldn\'t read maps... When I couldn\'t write essays"',
    explanation: 'Parallel structures show how each supposed failure was actually a redirection towards a different skill. The repetition of "When I couldn\'t..." creates a pattern that turns limitations into launching pads.',
  },
  {
    technique: 'Listing / accumulation',
    quote: '"a poet, a novelist, a playwright"',
    explanation: 'The list of achievements is deliberately long, piling up successes to overwhelm the earlier catalogue of failures. Each item in the list pushes back against the label of "stupid".',
  },
  {
    technique: 'Irony',
    quote: '"without being able to spell \'necessary\'"',
    explanation: 'The irony is deliberate and playful — a professional writer who cannot spell a common word. It challenges the assumption that spelling equals intelligence and makes the reader smile while making a serious point.',
  },
  {
    technique: 'Direct address',
    quote: '"If you are young and dyslexic"',
    explanation: 'Zephaniah speaks directly to his target audience — young dyslexic people. The second person "you" creates intimacy and solidarity, making each reader feel personally addressed.',
  },
  {
    technique: 'Emotive language',
    quote: '"I was told I was stupid"',
    explanation: 'The word "stupid" is blunt and painful. Zephaniah uses it without softening because he wants the reader to feel the cruelty of that label and understand the damage it does.',
  },
  {
    technique: 'Imperative',
    quote: '"Don\'t let anyone tell you otherwise"',
    explanation: 'The closing imperative is a command of empowerment. Zephaniah moves from storytelling to direct instruction, giving his readers permission to reject negative labels.',
  },
  {
    technique: 'Anecdote',
    quote: '"I left school at 13"',
    explanation: 'Personal anecdotes ground the argument in real experience. Zephaniah does not theorise about dyslexia — he tells you what it felt like, making his authority experiential rather than academic.',
  },
]

const structuralAnalysis = {
  opening: 'Zephaniah opens with failure — "I was told I was stupid." The negative opening is a deliberate structural choice: by starting at the lowest point, every paragraph that follows is an upward journey.',
  development: 'The text develops from past failure to present success. Zephaniah moves chronologically through his life, showing how each obstacle became an opportunity. The development is a transformation narrative.',
  climax: 'The climax is the reframing: "Dyslexia is not a disability. It is a different ability." This is the moment where the text shifts from personal story to universal argument.',
  resolution: 'The resolution is the direct address to young readers. Having told his own story, Zephaniah applies its lessons to his audience, turning memoir into manifesto.',
  perspective: 'First person throughout — this is personal testimony. The authority of the text comes entirely from lived experience, not from research or statistics.',
  paragraphing: 'Short paragraphs and punchy sentences reflect Zephaniah\'s background as a performer and poet. The text is designed to be spoken as much as read, with each paragraph landing like a stanza.',
  time: 'Broadly chronological: school failure in the past, creative success in the present, hope for the future. The temporal structure mirrors a redemption arc — from darkness to light.',
  openingClosing: 'The opening tells a young person they are "stupid"; the closing tells a young person they have "so much going for you". This inversion is the structural embodiment of the text\'s message: your story does not have to end where others begin it.',
}

const writersPurpose = {
  achieve: 'Zephaniah wants to challenge the way society defines dyslexia and to empower young people who have been made to feel inadequate by the education system. He is reclaiming a label that was used to diminish him.',
  readerFeel: 'He wants young dyslexic readers to feel proud, hopeful and validated. He also wants non-dyslexic readers to question their assumptions about intelligence and success.',
  message: 'His central argument is that dyslexia is a difference, not a deficiency. The education system\'s narrow definition of intelligence fails dyslexic students, but their different way of thinking is actually a strength in creative and practical fields.',
}

const keyVocabulary = [
  { word: 'dyslexia', definition: 'A learning difference that primarily affects reading, writing and spelling skills. It is neurological, not related to intelligence.' },
  { word: 'stigma', definition: 'A mark of disgrace associated with a particular circumstance, quality or person.' },
  { word: 'accommodate', definition: 'To adjust or adapt for someone\'s needs; to make room for a difference.' },
  { word: 'deficit', definition: 'A deficiency or shortage; in education, a "deficit model" focuses on what someone cannot do rather than what they can.' },
  { word: 'neurodiversity', definition: 'The idea that neurological differences (like dyslexia, ADHD, autism) are normal variations in the human brain, not disorders.' },
  { word: 'empowerment', definition: 'The process of becoming stronger and more confident, especially in controlling one\'s life and claiming one\'s rights.' },
  { word: 'resilience', definition: 'The ability to recover from setbacks and keep going; toughness.' },
  { word: 'manifesto', definition: 'A public declaration of aims, motives or views; a statement of principles.' },
  { word: 'advocate', definition: 'A person who publicly supports or recommends a particular cause or policy.' },
  { word: 'alternative', definition: 'Available as another possibility or choice; different from the usual.' },
  { word: 'creativity', definition: 'The use of imagination or original ideas to create something; inventiveness.' },
]

const examPractice = {
  q1: {
    question: 'List four things you learn about Zephaniah\'s experience of school from the text.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Zephaniah use language to challenge negative attitudes towards dyslexia?',
    type: 'Language analysis — 12 marks',
    modelOutline: [
      'Zephaniah\'s contrast between "disability" and "different ability" is the text\'s most powerful technique, transforming the meaning of dyslexia from a weakness into a strength through a simple but brilliant wordplay.',
      'The blunt, emotive use of the word "stupid" — reported as what he "was told" — confronts the reader with the cruelty of labelling, making them feel the injustice and challenging them to reject such language.',
      'Parallel structures ("When I couldn\'t read maps, I remembered landscapes") show each failure as a redirection, using grammatical balance to argue that every inability creates an alternative ability.',
      'The deliberate irony of a professional writer who "can\'t spell necessary" challenges the assumption that technical accuracy equals intelligence, using humour to disarm the reader before making a serious argument.',
    ],
  },
  q3: {
    question: 'How does Zephaniah structure the text to move from personal experience to a message for young readers?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason: 'Both writers challenge the "single story" others have created about them — Adichie as an African woman, Zephaniah as a dyslexic person. Compare how each uses personal experience to dismantle stereotypes.',
    themes: ['Identity', 'Stereotypes', 'Self-definition'],
  },
  {
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
    reason: 'Both texts describe childhood experiences of being made to feel worthless by authority figures. Compare how each writer uses their past pain as the foundation for a message of resilience.',
    themes: ['Childhood', 'Rejection', 'Resilience'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason: 'Both texts celebrate the power of the human will. Compare Ralston\'s physical survival with Zephaniah\'s intellectual and emotional survival — both refuse to accept the labels others place on them.',
    themes: ['Resilience', 'Self-belief', 'Overcoming adversity'],
  },
]

export default async function YoungAndDyslexicPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground font-serif">Young and Dyslexic? You&apos;ve Got It Going On</h1>
            <p className="text-body-sm text-muted-foreground">Benjamin Zephaniah &middot; Opinion article / autobiography</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">Edexcel IGCSE Language A</Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">Paper 1 Section A</Badge>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4"><Quote className="size-4.5 text-amber-600 dark:text-clay-600" /><h2 className="text-heading-sm font-heading text-foreground font-serif">Key Extracts</h2><span className="font-mono text-body-xs text-muted-foreground ml-auto">Fair-dealing extracts for study</span></div>
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
        <p className="text-body-sm text-muted-foreground mb-5">Key language features used by Zephaniah and their effects on the reader.</p>
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
          {keyVocabulary.map((v) => (<div key={v.word} className="rounded-lg border border-border/40 bg-muted/20 p-3"><span className="font-mono text-body-sm font-semibold text-foreground">{v.word}</span><p className="mt-1 text-body-xs text-muted-foreground">{v.definition}</p></div>))}
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
        <p>Extracts used under fair dealing for the purposes of criticism, review and education. <em>Young and Dyslexic? You&apos;ve Got It Going On</em> &copy; Benjamin Zephaniah. All rights reserved. Students should refer to the full text in their Pearson Edexcel anthology.</p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
