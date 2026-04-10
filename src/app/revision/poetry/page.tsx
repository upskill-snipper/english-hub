import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Poetry Revision -- The English Hub',
  description:
    'Interactive poetry analysis for GCSE English Literature. Study anthology poems with annotations, comparisons, and practice questions.',
}

export default function PoetryPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <FileText className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Poetry</h1>
            <p className="text-body-sm text-muted-foreground">
              Interactive analysis of every anthology poem
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
        <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Poetry analysis is being built
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-md mx-auto">
          Full interactive annotations for Power and Conflict, Love and Relationships,
          Edexcel anthology, and unseen poetry techniques.
        </p>
      </div>
    </div>
  )
}
