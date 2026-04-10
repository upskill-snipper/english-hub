"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type AnnotationKind = "strength" | "improve" | "technique";

export interface Annotation {
  id: string;
  /** Index into the paragraph array that this annotation belongs to */
  paragraphIndex: number;
  /** Substring of the paragraph to highlight — must appear verbatim */
  quote: string;
  /** Kind of comment — drives colour token */
  kind: AnnotationKind;
  /** Examiner-style comment */
  comment: string;
}

export interface AnnotatedEssayProps {
  paragraphs: string[];
  annotations: Annotation[];
  className?: string;
}

/**
 * Essay body with inline highlighted comments.
 * Clicking a highlight pops a side comment; hovering shows the preview.
 * Uses only theme tokens (primary, destructive, chart-3) for highlight colour.
 */
export function AnnotatedEssay({
  paragraphs,
  annotations,
  className,
}: AnnotatedEssayProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Annotated Essay</CardTitle>
        <p className="text-xs text-muted-foreground">
          Click a highlight to read the examiner comment.
        </p>
      </CardHeader>
      <CardContent className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* ── Essay body ─────────────────────────────────────────── */}
        <article className="space-y-4 text-[0.9375rem] leading-relaxed text-foreground">
          {paragraphs.map((para, i) => {
            const paraAnns = annotations.filter((a) => a.paragraphIndex === i);
            return (
              <p key={i}>
                {renderParagraph(para, paraAnns, activeId, setActiveId)}
              </p>
            );
          })}
        </article>

        {/* ── Comment rail ──────────────────────────────────────── */}
        <aside className="space-y-3 lg:border-l lg:border-border lg:pl-4">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Examiner Comments
          </p>
          <ul className="space-y-2">
            {annotations.map((a) => (
              <li key={a.id}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveId((cur) => (cur === a.id ? null : a.id))
                  }
                  className={cn(
                    "w-full rounded-lg border border-border/60 bg-muted/40 p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted",
                    activeId === a.id && "border-primary/60 bg-primary/10"
                  )}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex h-5 items-center rounded-full px-2 text-[0.625rem] font-bold uppercase tracking-wider",
                        kindBadgeClass(a.kind)
                      )}
                    >
                      {kindLabel(a.kind)}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground">
                    {a.comment}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </CardContent>
    </Card>
  );
}

/** Render a paragraph, wrapping each annotation's quote in a highlight span. */
function renderParagraph(
  text: string,
  anns: Annotation[],
  activeId: string | null,
  setActiveId: (id: string | null) => void
) {
  if (anns.length === 0) return text;

  // Find all match ranges
  type Range = { start: number; end: number; ann: Annotation };
  const ranges: Range[] = [];
  for (const ann of anns) {
    const idx = text.indexOf(ann.quote);
    if (idx >= 0) {
      ranges.push({ start: idx, end: idx + ann.quote.length, ann });
    }
  }
  ranges.sort((a, b) => a.start - b.start);

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((r, i) => {
    if (r.start > cursor) parts.push(text.slice(cursor, r.start));
    const isActive = activeId === r.ann.id;
    parts.push(
      <mark
        key={`${r.ann.id}-${i}`}
        className={cn(
          "cursor-pointer rounded px-0.5 py-px transition-colors",
          kindHighlightClass(r.ann.kind),
          isActive && "ring-2 ring-primary/60"
        )}
        onClick={() => setActiveId(isActive ? null : r.ann.id)}
      >
        {text.slice(r.start, r.end)}
      </mark>
    );
    cursor = r.end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

function kindHighlightClass(kind: AnnotationKind): string {
  switch (kind) {
    case "strength":
      return "bg-primary/20 text-foreground hover:bg-primary/30";
    case "improve":
      return "bg-destructive/15 text-foreground hover:bg-destructive/25";
    case "technique":
      return "bg-accent text-foreground hover:bg-accent/70";
  }
}

function kindBadgeClass(kind: AnnotationKind): string {
  switch (kind) {
    case "strength":
      return "bg-primary/15 text-primary";
    case "improve":
      return "bg-destructive/15 text-destructive";
    case "technique":
      return "bg-accent text-foreground";
  }
}

function kindLabel(kind: AnnotationKind): string {
  switch (kind) {
    case "strength":
      return "Strength";
    case "improve":
      return "Improve";
    case "technique":
      return "Technique";
  }
}

export default AnnotatedEssay;
