'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { useT } from '@/lib/i18n/use-t'
import { FileText, Sparkles, CheckCircle } from 'lucide-react'

type PaperStat = { labelKey: string; value: string; key: ExamBoard | 'all' }

const ALL_PAPER_STATS: PaperStat[] = [
  { labelKey: 'home.mock.papers.aqa', value: '26+', key: 'aqa' },
  { labelKey: 'home.mock.papers.edexcel', value: '24+', key: 'edexcel' },
  { labelKey: 'home.mock.papers.ocr', value: '15+', key: 'ocr' },
  { labelKey: 'home.mock.papers.eduqas', value: '22+', key: 'eduqas' },
  { labelKey: 'home.mock.papers.edexcel_igcse', value: '14+', key: 'edexcel-igcse' },
  { labelKey: 'home.mock.papers.cambridge_0500', value: '12+', key: 'cambridge-0500' },
  { labelKey: 'home.mock.papers.cambridge_0990', value: '10+', key: 'cambridge-0990' },
]

function getStatsForBoard(board: ExamBoard | null): PaperStat[] {
  if (!board) {
    // Marketing variant: show the 4 main GCSE boards as before.
    return ALL_PAPER_STATS.filter(
      (s) => s.key === 'aqa' || s.key === 'edexcel' || s.key === 'ocr' || s.key === 'eduqas',
    )
  }
  const mine = ALL_PAPER_STATS.find((s) => s.key === board)
  return mine ? [mine] : []
}

export default function MockExamsSection({ board }: { board?: ExamBoard | null }) {
  const t = useT()
  const config = board ? getBoardConfig(board) : null
  const stats = getStatsForBoard(board ?? null)

  // Brand + board codes stay in Latin per i18n policy — interpolate them
  // into the English/Arabic copy verbatim rather than translating them.
  const shortName = config?.shortName ?? ''
  const fullName = config?.fullName ?? 'GCSE'
  const cardTitle = config
    ? `${shortName} ${t('home.mock.card.exams_title_default')}`
    : t('home.mock.card.exams_title_default')
  const cardDesc = config
    ? t('home.mock.card.exams_desc_default').replace('GCSE', fullName)
    : t('home.mock.card.exams_desc_default')
  const lead = config
    ? t('home.mock.lead_default').replace('exam preparation tools', `${shortName} exam preparation`)
    : t('home.mock.lead_default')
  const feedbackDesc = config
    ? t('home.mock.card.feedback_desc_default').replace('GCSE', shortName)
    : t('home.mock.card.feedback_desc_default')
  const ctaExams = config
    ? `${t('home.mock.card.exams_cta_default').replace('a Free Mock Exam', `a free ${shortName} mock exam`)}`
    : t('home.mock.card.exams_cta_default')

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-orange-500/20 bg-orange-500/[0.06] text-clay-600 text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <FileText className="w-4 h-4" />
            {config ? `${shortName} ${t('home.bento.mocks_title')}` : t('home.mock.badge_new')}
          </Badge>
          <h2 className="text-foreground">{t('home.mock.h2')}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-body-lg">{lead}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Mock Exams Card */}
          <Card className="p-8 border-border/40 hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-clay-600" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">{cardTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{cardDesc}</p>
            {stats.length > 0 && (
              <div
                className={`grid gap-3 mb-6 ${stats.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}
              >
                {stats.map((s) => (
                  <div
                    key={s.labelKey}
                    className="text-center p-3 rounded-lg bg-card border border-border/40"
                  >
                    <p className="text-lg font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{t(s.labelKey)}</p>
                  </div>
                ))}
              </div>
            )}
            <Button variant="secondary" className="w-full" render={<Link href="/mock-exams" />}>
              {ctaExams}
            </Button>
          </Card>

          {/* AI Essay Feedback Card */}
          <Card className="p-8 border-border/40 hover:border-cyan-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
              {t('home.mock.card.feedback_title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{feedbackDesc}</p>
            <div className="space-y-3 mb-6">
              {[
                t('home.mock.feedback.bullet.grade'),
                t('home.mock.feedback.bullet.ao'),
                t('home.mock.feedback.bullet.strengths'),
                t('home.mock.feedback.bullet.improvements'),
                t('home.mock.feedback.bullet.annotation'),
              ].map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="w-full" render={<Link href="/auth/register" />}>
              {t('home.mock.card.feedback_cta')}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
