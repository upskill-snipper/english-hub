'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import DOMPurify from 'dompurify'
import {
  ArrowLeft,
  FileText,
  Loader2,
  Download,
  Save,
  Sparkles,
  Target,
  AlertTriangle,
} from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  LS_KEYS,
  lsGet,
  lsSet,
  type SavedMaterial,
  type QuizHistoryEntry,
} from '@/components/toolkit/toolkit-types'

// ─── AI Revision Notes Builder ────────────────────────────────────────────
// Student selects a text/topic and AI generates personalised revision notes
// based on their weak areas and target grade.
// ──────────────────────────────────────────────────────────────────────────

export default function RevisionBuilderPage() {
  const { board } = useBoard()
  const texts = getSetTextsForBoard(board)

  // Config
  const [topic, setTopic] = useState('')
  const [targetGrade, setTargetGrade] = useState(5)

  // State
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')
  const [aiGenerated, setAiGenerated] = useState(false)

  // Detect weak areas from quiz history
  const getWeakAreas = useCallback((): string[] => {
    const history = lsGet<QuizHistoryEntry[]>(LS_KEYS.quizHistory, [])
    const topicScores: Record<string, number[]> = {}
    history.forEach((q) => {
      if (!topicScores[q.topic]) topicScores[q.topic] = []
      topicScores[q.topic].push(q.score)
    })
    return Object.entries(topicScores)
      .filter(([, scores]) => {
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length
        return avg < 60
      })
      .map(([t]) => t)
  }, [])

  // Generate notes
  const generateNotes = useCallback(async () => {
    if (!topic) {
      setError('Please select a topic.')
      return
    }
    setError('')
    setLoading(true)
    setNotes('')

    try {
      const weakAreas = getWeakAreas()
      const res = await fetch('/api/toolkit/generate-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          board: board || 'aqa',
          topic,
          targetGrade,
          weakAreas,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to generate notes')
      }

      const data = await res.json()
      setNotes(data.notes)
      setAiGenerated(data.metadata?.aiGenerated || false)

      // Record streak
      const streakDates = lsGet<string[]>(LS_KEYS.streakDates, [])
      streakDates.push(new Date().toISOString())
      lsSet(LS_KEYS.streakDates, streakDates)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }, [board, topic, targetGrade, getWeakAreas])

  // Save to My Materials
  const saveToMaterials = useCallback(() => {
    if (!notes) return
    const materials = lsGet<SavedMaterial[]>(LS_KEYS.myMaterials, [])
    materials.push({
      id: `notes-${Date.now()}`,
      title: `${topic} Revision Notes (Grade ${targetGrade})`,
      type: 'notes',
      topic,
      board: board || 'aqa',
      dateCreated: new Date().toISOString(),
      data: { notes, targetGrade },
    })
    lsSet(LS_KEYS.myMaterials, materials)
    alert('Notes saved to My Materials!')
  }, [notes, topic, targetGrade, board])

  // Download as PDF (print)
  const downloadPDF = useCallback(() => {
    window.print()
  }, [])

  // Simple markdown to HTML converter
  const renderMarkdown = (md: string): string => {
    return (
      md
        // Headers
        .replace(/^### (.+)$/gm, '<h3 class="text-lg font-serif font-medium mt-6 mb-2">$1</h3>')
        .replace(
          /^## (.+)$/gm,
          '<h2 class="text-xl font-serif font-medium mt-8 mb-3 pb-2 border-b border-border">$1</h2>',
        )
        .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-serif font-medium mt-4 mb-4">$1</h1>')
        // Bold and italic
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
        // Unordered lists
        .replace(
          /^- \[x\] (.+)$/gm,
          '<li class="flex items-center gap-2 text-emerald-600"><span class="text-emerald-500">&#10003;</span> $1</li>',
        )
        .replace(
          /^- \[ \] (.+)$/gm,
          '<li class="flex items-center gap-2"><span class="text-muted-foreground">&#9744;</span> $1</li>',
        )
        .replace(
          /^- (.+)$/gm,
          '<li class="ml-4 list-disc text-muted-foreground leading-relaxed">$1</li>',
        )
        // Horizontal rules
        .replace(/^---$/gm, '<hr class="my-6 border-border" />')
        // Paragraphs (double newline)
        .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-3">')
        // Single newlines within text
        .replace(/\n/g, '<br />')
    )
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Toolkit
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <FileText className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                AI Revision Notes Builder
              </h1>
              <p className="text-sm text-muted-foreground">
                Generate personalised revision summaries tailored to your weak areas
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {!notes ? (
          /* ── Configuration ─────────────────────────────────────── */
          <div className="space-y-6">
            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {/* Topic selection */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Text or Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="input-field"
              >
                <option value="">Select a text or topic...</option>
                <optgroup label="Set Texts">
                  {texts.map((t) => (
                    <option key={t.slug} value={t.title}>
                      {t.title} -- {t.author}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Skills & Techniques">
                  <option value="Language Analysis">Language Analysis</option>
                  <option value="Structure Analysis">Structure Analysis</option>
                  <option value="Creative Writing">Creative Writing</option>
                  <option value="Persuasive Writing">Persuasive Writing</option>
                  <option value="Comparison Skills">Comparison Skills</option>
                  <option value="Unseen Poetry">Unseen Poetry</option>
                </optgroup>
              </select>
            </div>

            {/* Target Grade */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                <Target className="h-3.5 w-3.5 inline mr-1" />
                Target Grade
              </label>
              <div className="flex gap-2 flex-wrap">
                {[4, 5, 6, 7, 8, 9].map((g) => (
                  <button
                    key={g}
                    onClick={() => setTargetGrade(g)}
                    className={`chip ${targetGrade === g ? 'chip-active' : 'chip-inactive'}`}
                  >
                    Grade {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Weak areas info */}
            {getWeakAreas().length > 0 && (
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4 text-sm">
                <p className="font-medium text-amber-700 mb-1">
                  Weak areas detected from your quiz history:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {getWeakAreas().map((area) => (
                    <Badge
                      key={area}
                      variant="outline"
                      className="text-xs border-amber-500/30 text-amber-700"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
                <p className="text-amber-600/80 mt-2 text-xs">
                  Your revision notes will include extra focus on these areas.
                </p>
              </div>
            )}

            {/* Generate */}
            <Button
              onClick={generateNotes}
              disabled={loading}
              className="w-full sm:w-auto"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Revision Notes
                </>
              )}
            </Button>
          </div>
        ) : (
          /* ── Notes Output ──────────────────────────────────────── */
          <div className="space-y-6 print:space-y-3">
            {/* AI badge */}
            <div className="flex items-center gap-2 print:hidden">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-mono">
                {aiGenerated ? 'AI-Generated' : 'Template-Based'}
              </Badge>
              <span className="text-xs text-muted-foreground">
                Generated for Grade {targetGrade} -- {topic}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 print:hidden">
              <Button variant="outline" size="sm" onClick={downloadPDF}>
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" onClick={saveToMaterials}>
                <Save className="h-3.5 w-3.5 mr-1.5" />
                Save to Materials
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setNotes('')
                  setError('')
                }}
              >
                Generate New Notes
              </Button>
            </div>

            {/* Rendered notes — sanitised via DOMPurify (P2-SEC-1) to
                strip any HTML the AI might emit under prompt-injection
                attack before it reaches a minor's browser. The markdown
                converter above is whitespace-/regex-based and does not
                itself guard against injected <script> or javascript:
                URLs; DOMPurify is the defence of record here. */}
            <div
              className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-soft course-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  `<p class="text-muted-foreground leading-relaxed mb-3">${renderMarkdown(notes)}</p>`,
                  { USE_PROFILES: { html: true } },
                ),
              }}
            />
          </div>
        )}
      </div>
    </main>
  )
}
