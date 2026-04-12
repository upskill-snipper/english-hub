"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradePredictionCard } from "@/components/marking/GradePredictionCard";
import {
  AOBreakdown,
  type AOScore,
} from "@/components/marking/AOBreakdown";
import {
  AnnotatedEssay,
  type Annotation,
} from "@/components/marking/AnnotatedEssay";

/* ─── Types ────────────────────────────────────────────────── */

interface FeedbackItem {
  point: string;
  suggestion?: string;
  quote?: string;
}

interface StoredResult {
  id: string;
  title: string;
  board: string;
  paper: string;
  question?: string;
  essay: string;
  wordCount: number;
  grade: number;
  predictedGrade?: string;
  gradeBand?: string;
  totalMarks?: number;
  maxMarks?: number;
  confidence: number;
  aos: AOScore[];
  submittedAt: string;
  // AI feedback fields
  strengths?: FeedbackItem[];
  improvements?: FeedbackItem[];
  nextStepsToNextGrade?: string[];
  summary?: string;
}

/* ─── Fallback mock so the page always renders ─────────────── */

const FALLBACK: StoredResult = {
  id: "sample",
  title: "Sample — Macbeth ambition",
  board: "AQA",
  paper: "English Literature — Paper 1",
  question: "How does Shakespeare present ambition in Macbeth?",
  wordCount: 612,
  grade: 7,
  confidence: 82,
  submittedAt: new Date().toISOString(),
  aos: [
    {
      code: "AO1",
      label: "Read, understand, respond",
      score: 10,
      max: 12,
    },
    {
      code: "AO2",
      label: "Analyse language, form and structure",
      score: 9,
      max: 12,
    },
    {
      code: "AO3",
      label: "Context",
      score: 4,
      max: 6,
    },
    {
      code: "AO4",
      label: "Accuracy of SPaG",
      score: 3,
      max: 4,
    },
  ],
  essay:
    "Shakespeare presents ambition in Macbeth as a destructive and corrupting force that ultimately leads to the downfall of those who pursue it without moral restraint. From the outset, Macbeth is described as 'brave Macbeth', a loyal soldier whose reputation is built on heroism. However, once the witches plant the seed of prophecy, his 'vaulting ambition' quickly overwhelms his better judgement.\n\nShakespeare uses the metaphor of 'vaulting ambition, which o'erleaps itself' to suggest that ambition, when unchecked, becomes self-defeating. The equestrian imagery implies a rider attempting to mount a horse with too much force, only to fall on the other side. This foreshadows Macbeth's eventual downfall and positions ambition as inherently dangerous when divorced from virtue.\n\nContextually, a Jacobean audience would have read Macbeth's ambition through the lens of the divine right of kings. Regicide was not just treason but a sin against God's order. Shakespeare, writing during the reign of James I—himself the target of the Gunpowder Plot—deliberately uses Macbeth to reinforce the idea that usurping a divinely-appointed monarch leads to chaos and damnation.\n\nBy the end of the play, Macbeth's ambition has hollowed him out. His famous 'tomorrow and tomorrow and tomorrow' soliloquy reveals a man whose pursuit of power has robbed life of meaning. The repetition mirrors the monotony of a life devoid of purpose, and the metaphor of the 'walking shadow' reduces his existence to something insubstantial. Shakespeare thus uses Macbeth's tragic arc to warn that unrestrained ambition does not elevate—it erodes.",
};

// Fallback feedback for legacy entries that don't have AI feedback stored
const FALLBACK_STRENGTHS = [
  "Clear thesis sustained across the response",
  "Judicious use of embedded quotations supporting AO1",
  "Relevant contextual links to Jacobean politics (AO3)",
];
const FALLBACK_IMPROVEMENTS = [
  "Push analytical vocabulary beyond general description",
  "Zoom in on individual word choices for deeper AO2",
  "Maintain consistent formality in phrasing",
];
const FALLBACK_NEXT_STEPS = [
  "Develop conceptualised arguments — show the examiner what the writer is DOING",
  "Integrate methods analysis at word/phrase level, not just metaphor-level",
  "Link context to the writer's intention, not just background facts",
];

/** Find the paragraph index that contains the given quote substring. */
function findParagraphForQuote(paragraphs: string[], quote: string): number {
  const normalised = quote.toLowerCase().replace(/['']/g, "'");
  return paragraphs.findIndex((p) =>
    p.toLowerCase().replace(/['']/g, "'").includes(normalised)
  );
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function ResultsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [result, setResult] = useState<StoredResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("english-hub-marking-history");
      if (raw) {
        const list: StoredResult[] = JSON.parse(raw);
        const found = list.find((e) => e.id === id);
        if (found) {
          setResult(found);
          setLoaded(true);
          return;
        }
      }
    } catch {
      /* ignore */
    }
    setResult(FALLBACK);
    setLoaded(true);
  }, [id]);

  if (!loaded || !result) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-sm text-muted-foreground">
        Loading results…
      </div>
    );
  }

  // Build paragraphs from essay body
  const paragraphs = result.essay
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  // Build annotations from AO evidence quotes if available
  const annotations: Annotation[] = result.aos
    .flatMap((ao, aoIdx) => {
      const evidence = (ao as AOScore & { evidence?: string[] }).evidence;
      if (!Array.isArray(evidence)) return [];
      return evidence.map((quote, evIdx) => ({
        id: `ao${aoIdx}-ev${evIdx}`,
        paragraphIndex: findParagraphForQuote(paragraphs, quote),
        quote,
        kind: "technique" as const,
        comment: (ao as AOScore & { justification?: string }).justification ?? `${ao.code}: ${ao.label}`,
      }));
    })
    .filter((a) => a.paragraphIndex >= 0 && a.paragraphIndex < paragraphs.length);

  // Use real AI feedback when available, fall back to the hardcoded defaults
  // only if the stored result doesn't include AI feedback (e.g. old entries)
  const strengths: string[] = result.strengths?.length
    ? result.strengths.map((s) => s.point)
    : FALLBACK_STRENGTHS;
  const improvements: string[] = result.improvements?.length
    ? result.improvements.map((s) => s.point)
    : FALLBACK_IMPROVEMENTS;
  const nextGradeAdvice: string[] = result.nextStepsToNextGrade?.length
    ? result.nextStepsToNextGrade
    : FALLBACK_NEXT_STEPS;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              Marking
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">Results</li>
        </ol>
      </nav>

      <header className="mb-6 flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          {result.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {result.board} · {result.paper}
          {result.question && ` · ${result.question}`} · {result.wordCount}{" "}
          words
        </p>
      </header>

      {/* ── Grade + AO side-by-side ───────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <GradePredictionCard
          grade={result.grade}
          confidence={result.confidence}
          paperLabel={`${result.board} · ${result.paper}`}
        />
        <AOBreakdown scores={result.aos} />
      </div>

      {/* ── Feedback columns ──────────────────────────────── */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Strengths</CardTitle>
            <CardDescription>What you did well</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground">
              {strengths.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Areas to improve</CardTitle>
            <CardDescription>Focus for your next draft</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground">
              {improvements.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle>To reach grade {Math.min(9, result.grade + 1)}</CardTitle>
            <CardDescription>Next-grade targets</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground">
              {nextGradeAdvice.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* ── Summary ─────────────────────────────────────────── */}
      {result.summary && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Examiner summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-foreground">
              {result.summary}
            </p>
          </CardContent>
        </Card>
      )}

      {/* ── Annotated essay ───────────────────────────────── */}
      <div className="mt-6">
        <AnnotatedEssay paragraphs={paragraphs} annotations={annotations} />
      </div>

      {/* ── Footer actions ────────────────────────────────── */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button variant="outline" render={<Link href="/marking/history" />}>
          Back to history
        </Button>
        <Button render={<Link href="/marking/submit" />}>
          Mark another essay
        </Button>
      </div>

    </div>
  );
}
