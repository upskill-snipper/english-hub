import { BookText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Set Texts Revision -- The English Hub',
  description:
    'In-depth study guides for GCSE English Literature set texts. Shakespeare, 19th-century novels, and modern texts.',
}

export default function TextsPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
            <BookText className="size-5 text-blue-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Set Texts</h1>
            <p className="text-body-sm text-muted-foreground">
              Study guides for Shakespeare, 19th-century novels, and modern texts
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
        <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Set text guides are being built
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-md mx-auto">
          Comprehensive study guides with character analysis, theme tracking,
          key quotes, and reading progress for every GCSE set text.
        </p>
      </div>
    </div>
  )
}
