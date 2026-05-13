'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useBoard } from '@/hooks/useBoard'
import { useT } from '@/lib/i18n/use-t'
import { GraduationCap } from 'lucide-react'

// Board names stay in Latin (per i18n policy) — translate only the
// surrounding labels (h2, lead, "Your board" badge, descriptions).
const boards = [
  {
    id: 'aqa',
    board: 'AQA',
    color: 'border-blue-500/30 hover:border-blue-500/60',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    id: 'edexcel',
    board: 'Edexcel',
    color: 'border-violet-500/30 hover:border-violet-500/60',
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    id: 'ocr',
    board: 'OCR',
    color: 'border-orange-500/30 hover:border-orange-500/60',
    accent: 'text-clay-600',
    bg: 'bg-orange-500/10',
  },
  {
    id: 'eduqas',
    board: 'WJEC Eduqas',
    color: 'border-red-500/30 hover:border-red-500/60',
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
  },
] as const

export default function ExamGuideSection() {
  const t = useT()
  const { board: selectedBoard } = useBoard()

  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">{t('home.guide.h2')}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            {t('home.guide.lead')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {boards.map((item) => (
            <Link key={item.board} href="/revision/exam-technique" className="block group">
              <Card
                className={cn(
                  'p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover',
                  item.color,
                  selectedBoard === item.id &&
                    `ring-2 ring-offset-2 ring-offset-background ring-current ${item.accent}`,
                )}
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-4',
                    item.bg,
                  )}
                >
                  <GraduationCap className={cn('w-5 h-5', item.accent)} />
                </div>
                <h3 className={cn('text-lg font-bold tracking-tight mb-1', item.accent)}>
                  {item.board}
                </h3>
                {selectedBoard === item.id && (
                  <Badge className="bg-primary/20 text-primary mb-2">
                    {t('home.guide.your_board')}
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('home.guide.card_desc')}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="link"
            className="text-primary font-semibold"
            render={<Link href="/revision/exam-technique" />}
          >
            {t('home.guide.cta_full')}
          </Button>
        </div>
      </div>
    </section>
  )
}
