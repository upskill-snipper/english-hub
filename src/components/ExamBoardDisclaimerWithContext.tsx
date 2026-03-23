"use client";

import { useExamBoardSafe } from "@/contexts/ExamBoardContext";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/**
 * A thin client wrapper around ExamBoardDisclaimer that automatically reads
 * the selected board from ExamBoardContext.  Use this inside server components
 * (like Footer) that cannot call useExamBoard() directly.
 *
 * Falls back to the generic (all-boards) disclaimer when no board is selected
 * or when rendered outside the ExamBoardProvider.
 */
export function ExamBoardDisclaimerWithContext({
  variant,
  className,
}: {
  variant: "footer" | "content" | "ai-feedback" | "marketing";
  className?: string;
}) {
  const ctx = useExamBoardSafe();

  return (
    <ExamBoardDisclaimer
      variant={variant}
      className={className}
      selectedBoard={ctx?.selectedBoard ?? null}
    />
  );
}
