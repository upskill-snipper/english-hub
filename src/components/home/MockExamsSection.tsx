'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import {
  FileText,
  Sparkles,
  CheckCircle,
} from 'lucide-react'

type PaperStat = { label: string; value: string; key: ExamBoard | 'all' }

const ALL_PAPER_STATS: PaperStat[] = [
  { label: 'AQA Papers', value: '26+', key: 'aqa' },
  { label: 'Edexcel Papers', value: '24+', key: 'edexcel' },
  { label: 'OCR Papers', value: '15+', key: 'ocr' },
  { label: 'WJEC Eduqas Papers', value: '22+', key: 'eduqas' },
  { label: 'Edexcel IGCSE Papers', value: '14+', key: 'edexcel-igcse' },
  { label: 'Cambridge 0500 Papers', value: '12+', key: 'cambridge-0500' },
  { label: 'Cambridge 0990 Papers', value: '10+', key: 'cambridge-0990' },
]

function getStatsForBoard(board: ExamBoard | null): PaperStat[] {
  if (!board) {
    // Marketing variant: show the 4 main GCSE boards as before.
    return ALL_PAPER_STATS.filter((s) => s.key === 'aqa' || s.key === 'edexcel' || s.key === 'ocr' || s.key === 'eduqas')
  }
  const mine = ALL_PAPER_STATS.find((s) => s.key === board)
  return mine ? [mine] : []
}

export default function MockExamsSection({ board }: { board?: ExamBoard | null }) {
  const config = board ? getBoardConfig(board) : null
  const stats = getStatsForBoard(board ?? null)

  const cardTitle = config ? `${config.shortName} Mock Exam Papers` : 'Full Mock Exam Papers'
  const cardDesc = config
    ? `Full-length timed exams matching the real ${config.fullName} format. Every paper includes detailed model answers at multiple grade bands and official mark schemes.`
    : 'Full-length timed exams matching the real GCSE format. Every paper includes detailed model answers at multiple grade bands and official mark schemes.'

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-orange-500/20 bg-orange-500/[0.06] text-orange-400 text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <FileText className="w-4 h-4" />
            {config ? `${config.shortName} Mock Exams` : 'New Feature'}
          </Badge>
          <h2 className="text-foreground">Full Mock Exams & AI Feedback</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-body-lg">
            {config
              ? `The most comprehensive ${config.shortName} exam preparation available. Practice under real exam conditions and get instant AI-powered feedback on your writing.`
              : 'The most comprehensive exam preparation tools available. Practice under real exam conditions and get instant AI-powered feedback on your writing.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Mock Exams Card */}
          <Card className="p-8 border-border/40 hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">{cardTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{cardDesc}</p>
            {stats.length > 0 && (
              <div
                className={`grid gap-3 mb-6 ${
                  stats.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                }`}
              >
                {stats.map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-lg bg-card border border-border/40">
                    <p className="text-lg font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
            <Button variant="secondary" className="w-full" render={<Link href="/mock-exams" />}>
              {config ? `Try a free ${config.shortName} mock exam →` : 'Try a Free Mock Exam →'}
            </Button>
          </Card>

          {/* AI Essay Feedback Card */}
          <Card className="p-8 border-border/40 hover:border-cyan-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">AI Essay Feedback</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {config
                ? `Submit your essay and get instant, expert-level feedback. Our AI examiner analyses your work against real ${config.shortName} mark schemes.`
                : 'Submit your essay and get instant, expert-level feedback. Our AI examiner analyses your work against real GCSE mark schemes.'}
            </p>
            <div className="space-y-3 mb-6">
              {[
                'Estimated grade band (4-5, 6-7, or 8-9)',
                'Assessment objective scores with comments',
                'Specific strengths with direct quotes',
                'Actionable improvement suggestions',
                'Paragraph-by-paragraph annotation',
              ].map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="w-full" render={<Link href="/auth/register" />}>
              Start Free Trial for AI Feedback →
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
