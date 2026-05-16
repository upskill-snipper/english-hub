'use client'

/**
 * EAL CEFR placement test — interactive diagnostic.
 *
 * Phase machine: intro → testing → result. Answers are collected
 * (no per-question feedback — it's a placement test, not practice),
 * then scored deterministically by src/lib/eal/cefr.ts. The result
 * (CEFR band, per-skill breakdown, routed next topics) is persisted to
 * sessionStorage so the mock-practice and topic pages can pick it up.
 *
 * Persistence to Supabase (progress_cefr) is a Phase-3 follow-up — the
 * seam is the `persistResult` call below.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/lib/i18n/use-locale'
import { loc } from '@/lib/eal/types'
import {
  calculateCEFRLevel,
  CEFR_LABEL,
  type CEFRAnswer,
  type CEFRDiagnosticResult,
} from '@/lib/eal/cefr'
import { getDiagnosticQuestions } from '@/lib/eal/diagnostic-bank'
import { findEALTopic, recommendTopics } from '@/lib/eal/curriculum'

const SKILL_LABEL: Record<string, { en: string; ar: string }> = {
  grammar: { en: 'Grammar', ar: 'القواعد' },
  sentence: { en: 'Sentence structure', ar: 'بناء الجملة' },
  vocabulary: { en: 'Vocabulary', ar: 'المفردات' },
  pronunciation: { en: 'Pronunciation', ar: 'النطق' },
  common_errors: { en: 'Common errors', ar: 'الأخطاء الشائعة' },
}

/** Fisher–Yates — deterministic per mount via useState initializer. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Phase = 'intro' | 'testing' | 'result'

export default function EALDiagnosticPage() {
  const locale = useLocale()
  const t = (s: { en: string; ar?: string }) => loc(s, locale)
  const isAr = locale === 'ar'

  const bank = useMemo(() => getDiagnosticQuestions(), [])
  const [questions] = useState(() => shuffle(getDiagnosticQuestions()))

  const [phase, setPhase] = useState<Phase>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<CEFRAnswer[]>([])
  const [result, setResult] = useState<CEFRDiagnosticResult | null>(null)

  function record(selectedIndex: number) {
    const q = questions[current]
    const next = [...answers, { questionId: q.id, selectedIndex }]
    setAnswers(next)
    if (current + 1 >= questions.length) {
      finish(next)
    } else {
      setCurrent(current + 1)
    }
  }

  function finish(finalAnswers: CEFRAnswer[]) {
    const res = calculateCEFRLevel(finalAnswers, bank, recommendTopics)
    setResult(res)
    setPhase('result')
    try {
      sessionStorage.setItem(
        'eal-cefr-result',
        JSON.stringify({ ...res, takenAt: new Date().toISOString() }),
      )
    } catch {
      /* sessionStorage unavailable — non-fatal */
    }
    // Phase-3 seam: when progress_cefr lands, persist `res` for the
    // signed-in learner here (saveProgress 'cefr_diagnostic').
  }

  function restart() {
    setAnswers([])
    setCurrent(0)
    setResult(null)
    setPhase('intro')
  }

  // ─── Intro ──────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-teal-600 mb-3">
          <Link href="/eal">EAL · {isAr ? 'تحديد المستوى' : 'Placement'}</Link>
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {isAr ? 'اختبار تحديد المستوى (CEFR)' : 'CEFR Placement Test'}
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {isAr
            ? `${questions.length} سؤال اختيار من متعدد عبر القواعد وبناء الجملة والمفردات والنطق والأخطاء الشائعة. النتيجة تحدّد مستواك من A2 إلى C1 وتوجّهك للمواضيع المناسبة. ما فيه ضغط وقت.`
            : `${questions.length} multiple-choice questions across grammar, sentence structure, vocabulary, pronunciation and common errors. You'll get a CEFR level (A2–C1), a per-skill breakdown, and the topics to study next. No time limit.`}
        </p>
        <div className="rounded-xl border border-teal-300/30 bg-teal-500/[0.04] p-5 mb-8 text-sm leading-relaxed">
          {isAr
            ? 'صحّح إجابتك بصدق — الهدف وضعك في المستوى الصح، مو الدرجة.'
            : 'Answer honestly — the goal is the right level for you, not a high score.'}
        </div>
        <button
          type="button"
          onClick={() => setPhase('testing')}
          className="rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          {isAr ? 'ابدأ الاختبار' : 'Start the test'}
        </button>
      </main>
    )
  }

  // ─── Testing ────────────────────────────────────────────────────────
  if (phase === 'testing') {
    const q = questions[current]
    const pct = Math.round((current / questions.length) * 100)
    return (
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>
              {isAr ? 'سؤال' : 'Question'} {current + 1} / {questions.length}
            </span>
            <span>{pct}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted">
            <div
              className="h-1.5 rounded-full bg-teal-600 transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <p className="font-medium text-foreground">{t(q.question)}</p>
          <p className="mt-2 text-sm" dir="auto">
            {t(q.prompt)}
          </p>
          <div className="mt-5 grid gap-2">
            {q.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => record(i)}
                className="text-left text-sm rounded-lg border border-border bg-background px-3 py-2.5 transition-colors hover:border-teal-400/60 hover:bg-muted"
              >
                {t(opt)}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => record(-1)}
            className="mt-4 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {isAr ? 'تخطّي السؤال' : 'Skip this question'}
          </button>
        </div>
      </main>
    )
  }

  // ─── Result ─────────────────────────────────────────────────────────
  if (phase === 'result' && result) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-teal-600 mb-3">
          <Link href="/eal">EAL · {isAr ? 'النتيجة' : 'Result'}</Link>
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {isAr ? 'مستواك التقديري' : 'Your estimated level'}
        </h1>

        <div className="my-6 rounded-2xl border border-teal-400/40 bg-teal-500/[0.06] p-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-700">CEFR</p>
          <p className="my-1 text-5xl font-bold tracking-tight text-teal-700">{result.level}</p>
          <p className="text-sm font-medium text-foreground">{t(CEFR_LABEL[result.level])}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {t(result.descriptor)}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {isAr ? 'الثقة' : 'Confidence'}: {result.confidence}% ·{' '}
            {isAr ? 'الدرجة المركّبة' : 'Composite'}: {result.compositePercentage}%
          </p>
        </div>

        {/* Per-skill breakdown (weakest first) */}
        <h2 className="text-lg font-semibold mb-3">
          {isAr ? 'تفصيل المهارات' : 'Skill breakdown'}
        </h2>
        <div className="space-y-3 mb-8">
          {result.skills.map((s) => {
            const label = SKILL_LABEL[s.skill] ?? { en: s.skill, ar: s.skill }
            const tone =
              s.percentage >= 75
                ? 'bg-teal-600'
                : s.percentage >= 50
                  ? 'bg-amber-500'
                  : 'bg-red-500'
            return (
              <div key={s.skill}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{isAr ? label.ar : label.en}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {s.score}/{s.max} · {s.percentage}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className={`h-2 rounded-full ${tone} transition-all`}
                    style={{ width: `${s.percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="rounded-xl border border-teal-300/30 bg-teal-500/[0.04] p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-teal-700 mb-2">
              {isAr ? 'نقاط القوة' : 'Strengths'}
            </p>
            <ul className="space-y-1 text-sm text-foreground">
              {result.strengths.map((s, i) => (
                <li key={i}>• {t(s)}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-400/30 bg-amber-500/[0.04] p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-amber-700 mb-2">
              {isAr ? 'محاور التركيز' : 'Focus areas'}
            </p>
            <ul className="space-y-1 text-sm text-foreground">
              {result.focusAreas.map((s, i) => (
                <li key={i}>• {t(s)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Routed next topics */}
        {result.recommendedTopicIds.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-3">
              {isAr ? 'ادرس هذي المواضيع تالياً' : 'Study these topics next'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {result.recommendedTopicIds.map((id) => {
                const topic = findEALTopic(id)
                if (!topic) return null
                return (
                  <Link
                    key={id}
                    href={`/eal/${id}/level/${result.band.toLowerCase()}`}
                    className="block rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-teal-600 mb-1">
                      {topic.cefr}
                    </p>
                    <p className="font-semibold text-foreground">{t(topic.title)}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {t(topic.description)}
                    </p>
                  </Link>
                )
              })}
            </div>
          </>
        )}

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/eal/practice/mock-exam-${result.band.toLowerCase()}`}
            className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            {isAr ? `تدرّب على مستوى ${result.band}` : `Practise at ${result.band}`}
          </Link>
          <button
            type="button"
            onClick={restart}
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {isAr ? 'أعد الاختبار' : 'Retake the test'}
          </button>
          <Link
            href="/eal"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {isAr ? 'كل المواضيع' : 'All topics'}
          </Link>
        </div>
      </main>
    )
  }

  return null
}
