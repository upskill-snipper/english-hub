'use client'

import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/**
 * A thin client wrapper around ExamBoardDisclaimer.
 * Board-specific logic has been removed - always shows the generic disclaimer.
 */
export function ExamBoardDisclaimerWithContext({
  variant,
  className,
}: {
  variant: 'footer' | 'content' | 'ai-feedback' | 'marketing'
  className?: string
}) {
  return <ExamBoardDisclaimer variant={variant} className={className} />
}
