'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useBoard } from '@/hooks/useBoard'
import { GraduationCap } from 'lucide-react'

const boards = [
  { id: 'aqa', board: 'AQA', color: 'border-blue-500/30 hover:border-blue-500/60', accent: 'text-blue-400', bg: 'bg-blue-500/10', desc: 'Paper structure, mark schemes, and expert tips.' },
  { id: 'edexcel', board: 'Edexcel', color: 'border-violet-500/30 hover:border-violet-500/60', accent: 'text-violet-400', bg: 'bg-violet-500/10', desc: 'Paper structure, mark schemes, and expert tips.' },
  { id: 'ocr', board: 'OCR', color: 'border-orange-500/30 hover:border-orange-500/60', accent: 'text-orange-400', bg: 'bg-orange-500/10', desc: 'Paper structure, mark schemes, and expert tips.' },
  { id: 'eduqas', board: 'WJEC Eduqas', color: 'border-red-500/30 hover:border-red-500/60', accent: 'text-red-400', bg: 'bg-red-500/10', desc: 'Paper structure, mark schemes, and expert tips.' },
] as const

export default function ExamGuideSection() {
  const { board: selectedBoard } = useBoard()

  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            Your Board&rsquo;s Exam Guide
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            Paper structure, mark schemes, and expert tips — tailored to your board.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {boards.map((item) => (
            <Link key={item.board} href="/revision/exam-technique" className="block group">
            <Card
              className={cn(
                'p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover',
                item.color,
                selectedBoard === item.id && `ring-2 ring-offset-2 ring-offset-background ring-current ${item.accent}`
              )}
            >
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-4', item.bg)}>
                <GraduationCap className={cn('w-5 h-5', item.accent)} />
              </div>
              <h3 className={cn('text-lg font-bold tracking-tight mb-1', item.accent)}>
                {item.board}
              </h3>
              {selectedBoard === item.id && (
                <Badge className="bg-primary/20 text-primary mb-2">
                  Your board
                </Badge>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-primary font-semibold" render={<Link href="/revision/exam-technique" />}>
            View Full Guide &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
