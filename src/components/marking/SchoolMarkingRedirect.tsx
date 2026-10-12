'use client'

/**
 * What a school pupil sees in place of the standalone AI essay feedback.
 *
 * Calum decided on 12 October 2026 that a school pupil's teacher reviews
 * their AI feedback. The standalone feedback (/dashboard/essay-feedback and
 * the inline panels on /practice and the Mock Exam Mode) stores its result
 * where no teacher can see it, so a school pupil is pointed at Mark an essay
 * instead, which reaches their teacher. src/lib/marking/school-route.ts has
 * the reasoning, and why /api/essay-feedback refuses them as well.
 */

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { SCHOOL_MARKING_PATH } from '@/lib/marking/school-route'
import { saveMarkingDraft } from '@/lib/marking/draft-store'

function withFallback(t: (k: string) => string, key: string, fallback: string): string {
  const value = t(key)
  return value === `[[${key}]]` || value === key ? fallback : value
}

export function SchoolMarkingRedirect({
  href = SCHOOL_MARKING_PATH,
  essay,
  className,
}: {
  /** A deep link into the marking form, when the caller knows the question. */
  href?: string
  /**
   * An answer the pupil has already written (the Mock Exam Mode passes one).
   * Carried to the marking form in the same tab-scoped, read-once draft the
   * sign-in round trip uses (src/lib/marking/draft-store.ts), so following
   * the link does not cost them their work.
   */
  essay?: string
  className?: string
}) {
  const t = useT()
  const carryEssay = () => {
    if (essay?.trim()) saveMarkingDraft({ board: '', paper: '', question: '', title: '', essay })
  }
  return (
    <Card className={cn('border-primary/30 bg-primary/5', className)} data-testid="school-marking">
      <CardHeader>
        <CardTitle>
          {withFallback(t, 'marking.school_route.title', 'Your teacher sees your essays')}
        </CardTitle>
        <CardDescription>
          {withFallback(
            t,
            'marking.school_route.body',
            "Your school marks essays through Mark an essay, so your teacher can see your work and check the AI's mark. Your AI feedback still appears straight away.",
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button render={<Link href={href} onClick={carryEssay} />}>
          {withFallback(t, 'header.nav.marking', 'Mark an essay')}
        </Button>
      </CardContent>
    </Card>
  )
}
