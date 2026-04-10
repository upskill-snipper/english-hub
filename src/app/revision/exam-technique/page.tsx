import { Target, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Exam Technique -- The English Hub',
  description:
    'Master essay structures, timing strategies, question types, and mark scheme breakdowns for GCSE English exams.',
}

export default function ExamTechniquePage() {
  return (
    <div className="space-y-6">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Revision Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Target className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Exam Technique</h1>
            <p className="text-body-sm text-muted-foreground">
              Essay structure, timing, and mark scheme mastery
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
        <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Exam technique guides are being built
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-md mx-auto">
          Step-by-step essay structures, timing plans for every paper,
          question type breakdowns, and mark scheme demystification.
        </p>
      </div>
    </div>
  )
}
