import { TrendingUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Grade Targets -- The English Hub',
  description:
    'Personalised revision plans based on your GCSE English target grade. Know exactly what to focus on for grades 4-9.',
}

export default function GradeTargetsPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <TrendingUp className="size-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Grade Targets</h1>
            <p className="text-body-sm text-muted-foreground">
              Personalised revision plans by target grade
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
        <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Grade target plans are being built
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-md mx-auto">
          Set your target grade (4-9) and get a personalised revision plan
          showing exactly what to learn, practise, and master.
        </p>
      </div>
    </div>
  )
}
