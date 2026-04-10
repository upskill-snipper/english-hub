import { PenTool, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Language Skills -- The English Hub',
  description:
    'Master reading comprehension, creative writing, transactional writing, and SPaG for GCSE English Language.',
}

export default function LanguagePage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <PenTool className="size-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Language Skills</h1>
            <p className="text-body-sm text-muted-foreground">
              Reading, writing, and SPaG mastery
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
        <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Language skills guides are being built
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-md mx-auto">
          Structured revision for reading comprehension, creative writing,
          transactional writing, and spelling, punctuation, and grammar.
        </p>
      </div>
    </div>
  )
}
