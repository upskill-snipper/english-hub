'use client'

import { useState } from 'react'
import { useT } from '@/lib/i18n/use-t'
import Link from 'next/link'
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  BookOpen,
  RefreshCw,
  Loader2,
  Star,
  X,
} from 'lucide-react'
import DemoBanner from '@/components/demo/DemoBanner'
import { AnimatedNumber, RadialScore } from '@/components/dataviz'

// ---------------------------------------------------------------------------
// Sample essays
// ---------------------------------------------------------------------------

interface SampleEssay {
  title: string
  student: string
  text: string
  grade: string
  ao1: number
  ao1Max: number
  ao2: number
  ao2Max: number
  ao3: number
  ao3Max: number
  ao4: number
  ao4Max: number
  total: number
  totalMax: number
  percentage: number
  strengths: string[]
  improvements: string[]
  feedback: string[]
}

const SAMPLE_ESSAYS: SampleEssay[] = [
  {
    title: 'How does Priestley present responsibility in An Inspector Calls?',
    student: 'Emily Chen - Year 11B',
    text: `Priestley presents responsibility as a central theme in An Inspector Calls, using the Birling family to explore how different generations respond to their moral obligations. The play, written in 1945 but set in 1912, allows Priestley to critique the capitalist attitudes of the Edwardian era.

Mr Birling is presented as irresponsible from the outset. His dismissal of Eva Smith's request for higher wages reveals his prioritisation of profit over people. Priestley uses dramatic irony when Birling declares the Titanic is "unsinkable," undermining his authority and suggesting that those who reject social responsibility are fundamentally misguided.

In contrast, Sheila represents hope for change. Her immediate guilt upon learning of her role in Eva's death -- "I'll never, never do it again" -- shows genuine remorse. The repetition of "never" emphasises her determination to change, and Priestley uses her as a mouthpiece for socialist values.

The Inspector himself functions as a moral authority. His final speech warning that "we are members of one body" echoes socialist principles and serves as a direct address to the audience. Priestley deliberately breaks the fourth wall to challenge the audience's own sense of responsibility.

Ultimately, Priestley suggests that responsibility cannot be avoided. The cyclical structure of the play, with the final phone call announcing a real inspector, implies that those who refuse to accept responsibility will be forced to confront it again and again.`,
    grade: '6',
    ao1: 14,
    ao1Max: 20,
    ao2: 12,
    ao2Max: 20,
    ao3: 10,
    ao3Max: 20,
    ao4: 8,
    ao4Max: 10,
    total: 44,
    totalMax: 70,
    percentage: 63,
    strengths: [
      "Clear understanding of Priestley's intentions and socialist message",
      'Effective use of embedded quotations throughout the response',
      'Good structural analysis identifying dramatic irony and cyclical structure',
      'Strong paragraph organisation with clear topic sentences',
    ],
    improvements: [
      'Develop AO3 contextual links more fully -- the 1912/1945 contrast needs deeper exploration',
      'Include alternative interpretations to access the highest mark bands',
      "Analyse individual word choices more closely for AO2 (e.g. 'body' as metaphor)",
      "Consider the audience's perspective and how Priestley manipulates their response",
    ],
    feedback: [
      "This is a well-structured response that demonstrates clear understanding of Priestley's message about responsibility. The comparison between Mr Birling and Sheila is effective and shows awareness of generational differences in the play.",
      "To move from a Grade 6 to a Grade 7, you need to develop your contextual analysis. The post-war context is mentioned but not explored in depth. Consider how the welfare state and Beveridge Report influenced Priestley's writing. Additionally, exploring critical perspectives (e.g. feminist readings of Sheila's transformation) would demonstrate higher-level thinking.",
    ],
  },
  {
    title: 'How does Shakespeare present ambition in Macbeth?',
    student: 'James Wilson - Year 10A',
    text: `Shakespeare presents ambition as a destructive force in Macbeth, showing how it corrupts both Macbeth and Lady Macbeth throughout the play. Set in medieval Scotland, the play explores the consequences of unchecked ambition and its impact on the natural order.

Macbeth's ambition is first revealed through his reaction to the witches' prophecy. The aside "why do I yield to that suggestion whose horrid image doth unfix my hair" shows that thoughts of murder already exist within him. Shakespeare's use of the word "yield" suggests Macbeth is surrendering to his darker impulses, implying ambition was always present beneath his loyal exterior.

Lady Macbeth's ambition initially appears even stronger than her husband's. Her invocation to "unsex me here" and fill her "from the crown to the toe top-full of direst cruelty" reveals her willingness to reject her femininity to achieve power. The imperative verbs and violent imagery demonstrate her ruthless determination.

However, Shakespeare shows that ambition ultimately leads to destruction. Macbeth's paranoia after becoming king -- "full of scorpions is my mind" -- uses a metaphor of internal torment to show how ambition has poisoned his mental state. Similarly, Lady Macbeth's sleepwalking in Act 5 reveals that her ambition has been replaced by overwhelming guilt.

Shakespeare's message is clear: ambition that overrides morality leads to inevitable downfall, reflecting the Jacobean belief in the Divine Right of Kings.`,
    grade: '7',
    ao1: 16,
    ao1Max: 20,
    ao2: 15,
    ao2Max: 20,
    ao3: 12,
    ao3Max: 20,
    ao4: 9,
    ao4Max: 10,
    total: 52,
    totalMax: 70,
    percentage: 74,
    strengths: [
      'Excellent close analysis of language with precise terminology',
      'Sophisticated vocabulary and academic register throughout',
      "Strong understanding of both characters' relationship with ambition",
      "Effective use of the word 'yield' analysis showing individual word-level focus",
    ],
    improvements: [
      'AO3 context could be developed further -- explore Gunpowder Plot and regicide fears',
      'Consider structural choices: why does Shakespeare reveal ambition gradually?',
      'Include a counter-argument or alternative reading for top marks',
      "The conclusion could be more nuanced rather than stating Shakespeare's message is 'clear'",
    ],
    feedback: [
      "An impressive response that demonstrates sophisticated analytical skills. Your close reading of 'yield' is exactly the kind of detailed language analysis that examiners reward. The comparison between Macbeth and Lady Macbeth's ambition is well-handled.",
      "To reach Grade 8/9, develop your contextual understanding beyond surface-level references. The Jacobean context is mentioned but could be woven more organically into your analysis. Consider how James I's own interest in witchcraft and his book Daemonologie might inform the play's treatment of supernatural ambition.",
    ],
  },
  {
    title: "How does Dickens present Scrooge's transformation in A Christmas Carol?",
    student: 'Sophie Taylor - Year 9C',
    text: `In A Christmas Carol, Dickens presents Scrooge as a cold and selfish character who undergoes a dramatic transformation. The novella was written in 1843 to highlight the plight of the poor in Victorian England.

At the beginning, Scrooge is described as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner." The list of adjectives emphasises his greed, and the harsh sounds create an unpleasant impression. Dickens wants the reader to dislike Scrooge so that his later transformation feels more powerful.

The Ghost of Christmas Past begins Scrooge's change by showing him memories of his lonely childhood. When Scrooge sees his younger self "a solitary child, neglected by his friends," he begins to cry. This is significant because it shows that Scrooge was not always cold -- he was shaped by his experiences, which makes him more sympathetic.

By the end of the story, Scrooge has completely changed. He buys the biggest turkey for the Cratchit family and raises Bob Cratchit's salary. Dickens writes that Scrooge "knew how to keep Christmas well." This simple statement contrasts with the complex list of negative adjectives at the start, showing that goodness is straightforward while greed is complicated.

Dickens uses Scrooge's transformation to argue that anyone can change and that the wealthy have a duty to help the poor.`,
    grade: '4',
    ao1: 11,
    ao1Max: 20,
    ao2: 9,
    ao2Max: 20,
    ao3: 8,
    ao3Max: 20,
    ao4: 7,
    ao4Max: 10,
    total: 35,
    totalMax: 70,
    percentage: 50,
    strengths: [
      "Clear narrative understanding of Scrooge's transformation arc",
      'Good selection of quotations that are relevant to the question',
      'Interesting final point comparing complex adjectives with simple goodness',
      "Awareness of Dickens' purpose in writing the novella",
    ],
    improvements: [
      'Analysis needs more depth -- move beyond identifying techniques to explaining their effects',
      'Explore the role of all three ghosts, not just Christmas Past',
      'Develop contextual understanding: link to Poor Law, workhouses, and Malthusian economics',
      "Use more analytical vocabulary: 'presents', 'conveys', 'implies' rather than 'shows' and 'wants'",
      'Consider structural choices and how Dickens builds tension across the staves',
    ],
    feedback: [
      "A solid response that shows you understand Scrooge's journey from miser to generous benefactor. Your point about the contrast between complex negative adjectives and simple goodness is genuinely insightful and shows original thinking.",
      "To improve, you need to develop your analytical skills. When you identify a technique, always explain WHY the writer has used it and WHAT effect it has on the reader. Your contextual knowledge also needs building -- research the conditions of the Victorian poor and Dickens' own experiences to strengthen your AO3 marks significantly.",
    ],
  },
]

// ---------------------------------------------------------------------------
// Toast component
// ---------------------------------------------------------------------------

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-primary/10 border border-primary/30 px-4 py-3 text-sm text-primary shadow-xl animate-in slide-in-from-bottom-4">
      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-primary/60 hover:text-primary">
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function EssayMarkingDemoPage() {
  const t = useT()
  const [essayIndex, setEssayIndex] = useState(0)
  const [analysed, setAnalysed] = useState(false)
  const [loading, setLoading] = useState(false)

  const essay = SAMPLE_ESSAYS[essayIndex]

  function handleAnalyse() {
    setLoading(true)
    setAnalysed(false)
    setTimeout(() => {
      setLoading(false)
      setAnalysed(true)
    }, 2000)
  }

  function handleTryAnother() {
    setEssayIndex((prev) => (prev + 1) % SAMPLE_ESSAYS.length)
    setAnalysed(false)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <DemoBanner message="This is an interactive demo of AI essay marking. No real data is saved." />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-clay-500/20 to-clay-400/20 border border-clay-500/20">
              <Sparkles className="h-5 w-5 text-clay-600 dark:text-clay-400" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">{t('demo.b15.essays.title')}</h1>
          </div>
          <p className="text-muted-foreground text-sm mt-1">{t('demo.b15.essays.subtitle')}</p>
        </div>

        {/* Essay display */}
        <div className="rounded-xl border border-border/60 bg-card p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-foreground">{essay.title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{essay.student}</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border/60">
              {t('demo.b15.essays.sample_pre')} {essayIndex + 1} {t('demo.b15.essays.sample_of')}{' '}
              {SAMPLE_ESSAYS.length}
            </span>
          </div>
          <div className="rounded-lg bg-card border border-border/60 p-5 text-sm text-muted-foreground leading-relaxed whitespace-pre-line max-h-[350px] overflow-y-auto">
            {essay.text}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={handleAnalyse}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-clay-500 to-clay-400 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t('demo.b15.essays.analysing_btn')}
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                {t('demo.b15.essays.analyse_btn')}
              </>
            )}
          </button>
          <button
            onClick={handleTryAnother}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            {t('demo.b15.essays.try_another')}
          </button>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="rounded-xl border border-clay-500/20 bg-clay-500/5 p-8 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-clay-600 dark:text-clay-400 mx-auto mb-3" />
            <p className="text-sm text-clay-600 dark:text-clay-400">
              {t('demo.b15.essays.loading_main')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{t('demo.b15.essays.loading_sub')}</p>
          </div>
        )}

        {/* Analysis results */}
        {analysed && !loading && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Grade + scores row */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {/* Predicted grade */}
              <div className="md:col-span-2 rounded-xl border border-clay-500/20 bg-clay-500/5 p-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-clay-500/30 to-clay-400/30 border border-clay-500/30">
                  <AnimatedNumber
                    value={Number(essay.grade)}
                    className="text-3xl font-bold text-clay-600 dark:text-clay-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {t('demo.b15.essays.predicted_grade')}
                  </p>
                  <p className="text-lg font-bold text-foreground">Grade {essay.grade}</p>
                  <p className="text-xs text-muted-foreground">
                    {essay.total}/{essay.totalMax} ({essay.percentage}%)
                  </p>
                </div>
              </div>

              {/* AO scores */}
              <div className="md:col-span-4 rounded-xl border border-border/60 bg-card p-5">
                <h3 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  {t('demo.b15.essays.assessment_objectives')}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'AO1 Reading', score: essay.ao1, max: essay.ao1Max },
                    { label: 'AO2 Analysis', score: essay.ao2, max: essay.ao2Max },
                    { label: 'AO3 Context', score: essay.ao3, max: essay.ao3Max },
                    { label: 'AO4 SPaG', score: essay.ao4, max: essay.ao4Max },
                  ].map((ao) => (
                    <div key={ao.label} className="flex flex-col items-center text-center">
                      <RadialScore value={Math.round((ao.score / ao.max) * 100)} size={64} />
                      <p className="mt-1 text-xs font-semibold text-foreground tabular-nums">
                        {ao.score}/{ao.max}
                      </p>
                      <p className="text-xs text-muted-foreground">{ao.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed feedback */}
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {t('demo.b15.essays.detailed_feedback')}
              </h3>
              <div className="space-y-3">
                {essay.feedback.map((para, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Strengths */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-primary">
                    {t('demo.b15.essays.strengths')}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {essay.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary/60 mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas for improvement */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="h-4 w-4 text-clay-600 dark:text-clay-400" />
                  <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                    {t('demo.b15.essays.improvements')}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {essay.improvements.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 text-clay-600/60 dark:text-clay-400/60 mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-border/60 bg-gradient-to-r from-clay-500/10 via-pink-500/10 to-clay-400/10 p-6 text-center">
              <Sparkles className="h-6 w-6 text-clay-600 dark:text-clay-400 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {t('demo.b15.essays.cta_title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{t('demo.b15.essays.cta_body')}</p>
              <Link
                href="/auth/teacher-register"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-clay-500 to-clay-400 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {t('demo.b15.essays.cta_btn')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
