import { Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Quick Quizzes -- The English Hub',
  description:
    'Test yourself with timed quizzes on any GCSE English topic. Instant feedback and progress tracking.',
}

export default function QuizPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
            <Zap className="size-5 text-orange-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Quick Quizzes</h1>
            <p className="text-body-sm text-muted-foreground">
              Test yourself on any topic
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
        <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Quick quizzes are being built
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-md mx-auto">
          100+ timed quizzes across poetry, set texts, language skills, and
          exam technique with instant feedback and score tracking.
        </p>
      </div>
    </div>
  )
}
