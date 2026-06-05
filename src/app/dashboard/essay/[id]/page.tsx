'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { HumanReviewButton } from '@/components/HumanReviewButton'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'

/* ─── Mock data (replace with real data fetching) ────────────── */

const MOCK_ESSAY = {
  id: '1',
  title: 'An Inspector Calls: Responsibility Theme',
  subject: 'English Literature',
  examBoard: 'AQA',
  topic: 'How does Priestley present the theme of responsibility in An Inspector Calls?',
  content: `In J.B. Priestley's "An Inspector Calls", the theme of responsibility is central to the play's message. Written in 1945 but set in 1912, Priestley uses the Birling family to explore how individuals and society must take responsibility for their actions and their impact on others.

Mr Birling represents the capitalist refusal to accept responsibility. His dismissal of Eva Smith from his factory for requesting higher wages demonstrates his prioritisation of profit over people. Priestley uses dramatic irony through Birling's confident predictions about the Titanic and the impossibility of war to undermine his authority, suggesting that those who refuse responsibility are fundamentally misguided.

Sheila, in contrast, undergoes a significant transformation. Initially complicit in Eva's suffering - having her dismissed from Milwards out of jealousy - she comes to accept her responsibility fully. Her development represents Priestley's hope for the younger generation. The stage direction "with feeling" when she says "I know. I had her turned out of a job" shows genuine remorse and moral growth.

The Inspector himself functions as Priestley's mouthpiece. His final speech - "We are members of one body. We are responsible for each other" - encapsulates the play's socialist message. The use of "we" is deliberately inclusive, extending responsibility beyond the Birlings to the audience themselves.

Gerald's response is particularly interesting. While he shows some emotion regarding Daisy Renton, he ultimately sides with the older generation in attempting to disprove the Inspector's visit. This suggests that class loyalty can override moral responsibility.

In conclusion, Priestley presents responsibility as a moral imperative that transcends class boundaries. Through the contrasting responses of his characters, he argues that accepting responsibility for others is essential for a just society.`,
  createdAt: '2026-03-20T14:30:00Z',
  contentWarnings: [] as string[],
}

const MOCK_FEEDBACK = {
  overallScore: 82,
  categories: [
    { name: 'Grammar & Spelling', score: 90, maxScore: 100 },
    { name: 'Structure & Organisation', score: 85, maxScore: 100 },
    { name: 'Argument & Analysis', score: 78, maxScore: 100 },
    { name: 'Vocabulary & Expression', score: 75, maxScore: 100 },
  ],
  detailedFeedback: `This is a strong response that demonstrates a solid understanding of how Priestley presents the theme of responsibility in "An Inspector Calls".

**Strengths:**
Your essay structure is clear and well-organised, with each paragraph focusing on a different character's relationship with responsibility. You make effective use of textual evidence, particularly the quotation from the Inspector's final speech. The contextual understanding - noting the play was written in 1945 but set in 1912 - shows good awareness of Priestley's intentions.

**Areas for Development:**
While your analysis of Mr Birling and Sheila is effective, the paragraph on Gerald could be developed further with specific textual evidence. Consider embedding shorter quotations more frequently throughout your analysis rather than relying on longer ones. Your conclusion, while functional, could be strengthened by linking back to Priestley's context and purpose more explicitly.

You could also explore the significance of Eric's character, whose forced responsibility (through Daisy's pregnancy) contrasts with Sheila's voluntary acceptance of guilt. This would add depth to your analysis of the generational divide.`,
  suggestions: [
    'Embed shorter quotations throughout your paragraphs to strengthen your points with textual evidence.',
    'Develop the paragraph on Gerald with specific quotes and analysis of language choices.',
    "Consider including analysis of Eric's character to explore forced vs voluntary responsibility.",
    "Strengthen your conclusion by explicitly linking back to Priestley's 1945 context and socialist message.",
    'Use more subject terminology (e.g., dramatic irony, symbolism, stage directions) to demonstrate analytical skills.',
  ],
}

/* ─── Score gauge component ──────────────────────────────────── */

function ScoreGauge({ score }: { score: number }) {
  const t = useT()
  const circumference = 2 * Math.PI * 54
  const offset = circumference - (score / 100) * circumference

  let colour = 'text-warn'
  if (score >= 80) colour = 'text-success'
  else if (score >= 60) colour = 'text-accent'

  return (
    <div className="relative mx-auto h-36 w-36">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-foreground"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`${colour} transition-all duration-700`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-2xl font-bold ${gcseGradeColor(percentageToGCSEGrade(score))}`}>
          {t('dash.essay_view.grade_prefix')} {percentageToGCSEGrade(score)}
        </span>
        <span className="text-xs text-muted-foreground">{score}%</span>
      </div>
    </div>
  )
}

/* ─── Category bar component ─────────────────────────────────── */

function CategoryBar({ name, score, maxScore }: { name: string; score: number; maxScore: number }) {
  const percentage = Math.round((score / maxScore) * 100)

  let barColour = 'bg-warn'
  if (percentage >= 80) barColour = 'bg-success'
  else if (percentage >= 60) barColour = 'bg-accent'

  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">
          {score}/{maxScore}
        </span>
      </div>
      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${barColour} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={score}
          aria-valuemin={0}
          aria-valuemax={maxScore}
          aria-label={`${name}: ${score} out of ${maxScore}`}
        />
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function EssayFeedbackPage() {
  const t = useT()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const essay = MOCK_ESSAY
  const feedback = MOCK_FEEDBACK

  function handleDelete() {
    // Stub: DELETE /api/essays/:id - currently just redirects
    window.location.href = '/dashboard/essays'
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/dashboard" className="hover:text-accent">
              {t('dash.essay_view.bc_dashboard')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/dashboard/essays" className="hover:text-accent">
              {t('dash.essay_view.bc_essays')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="max-w-[200px] truncate font-medium text-foreground">{essay.title}</li>
        </ol>
      </nav>

      {/* ── Header with actions ─────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-primary sm:text-2xl">{essay.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {essay.subject} &middot; {essay.examBoard} &middot;{' '}
            {new Date(essay.createdAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          {essay.topic && (
            <p className="mt-2 text-sm italic text-muted-foreground">
              {t('dash.essay_view.prompt')} &ldquo;{essay.topic}&rdquo;
            </p>
          )}
        </div>

        <div className="flex gap-2 self-start">
          <Link href={`/dashboard/essay/new`} className="btn-outline text-xs px-3 py-1.5">
            {t('dash.essay_view.edit')}
          </Link>
          {showDeleteConfirm ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDelete}
                className="rounded-lg bg-warn px-3 py-1.5 text-xs font-medium text-white hover:bg-warn-600 transition-colors"
              >
                {t('dash.essay_view.confirm_delete')}
              </button>
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                {t('dash.essay_view.cancel')}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="rounded-lg border-2 border-warn px-3 py-1.5 text-xs font-medium text-warn hover:bg-warn hover:text-white transition-colors"
            >
              {t('dash.essay_view.delete')}
            </button>
          )}
        </div>
      </div>

      {/* ── Content warnings ────────────────────────────────── */}
      {essay.contentWarnings.length > 0 && (
        <div className="mt-4 rounded-lg border border-warn-200 bg-warn-50 px-4 py-3" role="alert">
          <p className="text-sm font-medium text-warn-700">{t('dash.essay_view.content_notice')}</p>
          <ul className="mt-1 list-inside list-disc text-sm text-warn-600">
            {essay.contentWarnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Two-column layout: essay + feedback ─────────────── */}
      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        {/* ── Essay text (left / top) ───────────────────────── */}
        <div className="lg:col-span-3">
          <div className="card">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('dash.essay_view.your_essay')}
            </h2>
            <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
              {essay.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {essay.content.trim().split(/\s+/).length} {t('dash.essay_view.words')}
            </p>
          </div>
        </div>

        {/* ── AI feedback panel (right / bottom) ────────────── */}
        <div className="space-y-6 lg:col-span-2">
          {/* Overall score */}
          <div className="card text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('dash.essay_view.overall_score')}
            </h2>
            <ScoreGauge score={feedback.overallScore} />
          </div>

          {/* Category scores */}
          <div className="card">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('dash.essay_view.category_scores')}
            </h2>
            <div className="space-y-4">
              {feedback.categories.map((cat) => (
                <CategoryBar
                  key={cat.name}
                  name={cat.name}
                  score={cat.score}
                  maxScore={cat.maxScore}
                />
              ))}
            </div>
          </div>

          {/* Detailed feedback */}
          <div className="card">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('dash.essay_view.detailed_feedback')}
            </h2>
            <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
              {feedback.detailedFeedback.split('\n\n').map((paragraph, i) => {
                // Handle **bold** markers in text
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)
                return (
                  <p key={i}>
                    {parts.map((part, j) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={j}>{part.slice(2, -2)}</strong>
                      ) : (
                        <span key={j}>{part}</span>
                      ),
                    )}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Improvement suggestions */}
          <div className="card">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('dash.essay_view.improvement_suggestions')}
            </h2>
            <ul className="space-y-3" role="list">
              {feedback.suggestions.map((suggestion, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI disclaimer - always visible, not dismissible */}
          <ExamBoardDisclaimer variant="ai-feedback" selectedBoard={essay.examBoard} />

          {/* Human review button */}
          <HumanReviewButton essayId={essay.id} />
        </div>
      </div>
    </div>
  )
}
