"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface GradePredictionCardProps {
  /** GCSE grade 1-9 */
  grade: number;
  /** 0-100 model confidence */
  confidence: number;
  /** e.g. "AQA English Literature Paper 1" */
  paperLabel?: string;
  className?: string;
}

/**
 * Big prominent grade display with confidence.
 * Uses theme tokens only — no hardcoded colours.
 */
export function GradePredictionCard({
  grade,
  confidence,
  paperLabel,
  className,
}: GradePredictionCardProps) {
  const confidenceLabel =
    confidence >= 80 ? "High" : confidence >= 60 ? "Moderate" : "Developing";

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card",
        className
      )}
    >
      <CardContent className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Predicted Grade
          </p>
          {paperLabel && (
            <p className="text-sm font-medium text-foreground">{paperLabel}</p>
          )}
          <p className="text-xs text-muted-foreground">
            Based on AQA-style marking guide
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            aria-label={`Predicted grade ${grade}`}
            className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-primary/40 bg-primary/15 shadow-lg shadow-primary/20"
          >
            <span className="font-heading text-6xl font-extrabold tracking-tight text-primary">
              {grade}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              {confidenceLabel} confidence ({confidence}%)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default GradePredictionCard;
