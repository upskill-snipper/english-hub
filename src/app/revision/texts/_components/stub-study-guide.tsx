import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Construction, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { SetText } from '@/lib/board/set-texts'

const CATEGORY_LABEL: Record<SetText['category'], string> = {
  shakespeare: 'Shakespeare',
  '19th-century': '19th-Century Novel',
  modern: 'Modern Text',
  'poetry-anthology': 'Poetry Anthology',
  'non-fiction': 'Non-Fiction Anthology',
  prose: 'Anthology Prose',
}

type Props = {
  text: SetText
  /** Where the "back" button should go. */
  backHref?: string
  backLabel?: string
}

/**
 * Lightweight study-guide placeholder used while full content is being authored.
 * Renders the title, author, category and the registered teaser/keyThemes from
 * set-texts.ts, plus a "study guide in production" notice.
 */
export function StubStudyGuide({
  text,
  backHref = '/revision/texts',
  backLabel = 'Back to set texts',
}: Props) {
  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href={backHref} />}
          >
            <ArrowLeft className="size-3.5" />
            {backLabel}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {CATEGORY_LABEL[text.category]}
            </Badge>
            {text.year && (
              <Badge variant="outline" className="text-muted-foreground">
                {text.year}
              </Badge>
            )}
            <Badge variant="outline" className="text-muted-foreground">
              Pearson IGCSE Language A (4EA1)
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {text.title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">by {text.author}</p>

          {text.description && (
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">{text.description}</p>
          )}

          {text.keyThemes && text.keyThemes.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {text.keyThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {theme}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <Card className="border-amber-500/40 bg-amber-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
              <Construction className="size-5 text-clay-600" />
            </div>
            <CardTitle className="text-heading-md font-heading">
              Study guide in production
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            We are currently writing a full study guide for{' '}
            <strong className="text-foreground">{text.title}</strong>: line-by-line analysis,
            language and structure features, key vocabulary and exam-style practice questions
            aligned with the Pearson Edexcel International GCSE English Language A (4EA1) mark
            scheme.
          </p>
          <p>
            In the meantime you can revise other anthology texts, work through writing-skills
            sessions, or use the unseen-poetry and unseen-prose practice in the IGCSE hub.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="outline" size="sm" render={<Link href="/revision/texts" />}>
              <BookOpen className="size-3.5" />
              Browse other set texts
              <ArrowRight className="size-3.5" />
            </Button>
            <Button variant="ghost" size="sm" render={<Link href="/igcse/edexcel-lang" />}>
              IGCSE Language A hub
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
