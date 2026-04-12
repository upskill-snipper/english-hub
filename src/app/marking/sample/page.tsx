"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradePredictionCard } from "@/components/marking/GradePredictionCard";
import { AOBreakdown } from "@/components/marking/AOBreakdown";
import {
  AnnotatedEssay,
  type Annotation,
} from "@/components/marking/AnnotatedEssay";

/* ─── Sample essays ────────────────────────────────────────── */

interface SampleEssay {
  id: string;
  grade: 5 | 7 | 9;
  title: string;
  paper: string;
  board: string;
  confidence: number;
  commentary: string;
  paragraphs: string[];
  annotations: Annotation[];
  aos: { code: string; label: string; score: number; max: number }[];
}

const SAMPLES: SampleEssay[] = [
  {
    id: "grade-5",
    grade: 5,
    title: "Macbeth — Grade 5 response",
    board: "AQA",
    paper: "English Literature — Paper 1",
    confidence: 86,
    commentary:
      "A clear and relevant response with some understanding of ambition. Textual references are mostly appropriate but analysis tends to identify rather than explore methods. Context is attached rather than integrated.",
    paragraphs: [
      "Shakespeare shows that Macbeth is very ambitious in the play. At the start he is called 'brave Macbeth' which shows he is a good soldier. But after he meets the witches he starts to think about being king.",
      "Lady Macbeth also pushes him to kill Duncan. She says he should 'screw his courage to the sticking place'. This shows she is ambitious too and wants Macbeth to be king so she can be queen.",
      "In the end Macbeth dies because his ambition was too much. Shakespeare is showing that ambition is bad if you do not control it. The audience at the time would not like someone killing a king because of the divine right of kings.",
    ],
    annotations: [
      {
        id: "g5-a1",
        paragraphIndex: 0,
        quote: "'brave Macbeth'",
        kind: "strength",
        comment:
          "Relevant quotation used. To reach Grade 6+, explain HOW the adjective 'brave' creates a heroic starting point that Shakespeare will subvert.",
      },
      {
        id: "g5-a2",
        paragraphIndex: 1,
        quote: "This shows she is ambitious",
        kind: "improve",
        comment:
          "Identifies rather than analyses. Try: 'the imperative verb shows her controlling influence over Macbeth's psyche.'",
      },
      {
        id: "g5-a3",
        paragraphIndex: 2,
        quote: "divine right of kings",
        kind: "technique",
        comment:
          "Relevant context, but stapled on. Link it to Shakespeare's intention — what does he want the Jacobean audience to feel?",
      },
    ],
    aos: [
      { code: "AO1", label: "Read, understand, respond", score: 7, max: 12 },
      { code: "AO2", label: "Language, form, structure", score: 6, max: 12 },
      { code: "AO3", label: "Context", score: 3, max: 6 },
      { code: "AO4", label: "SPaG", score: 2, max: 4 },
    ],
  },
  {
    id: "grade-7",
    grade: 7,
    title: "Macbeth — Grade 7 response",
    board: "AQA",
    paper: "English Literature — Paper 1",
    confidence: 88,
    commentary:
      "A thoughtful, developed response with sustained focus on ambition. Methods are identified and analysed, with context integrated into the argument. To reach Grade 8/9, push towards conceptualised analysis and more precise word-level commentary.",
    paragraphs: [
      "Shakespeare presents ambition as a corrupting force throughout Macbeth, using the titular character's tragic trajectory to warn his Jacobean audience of the dangers of unchecked desire. At the play's opening, Macbeth is described as 'brave Macbeth', establishing a heroic baseline that makes his moral decline all the more tragic.",
      "The metaphor of 'vaulting ambition' captures Shakespeare's central warning. The equestrian image suggests a rider who, in attempting to mount his horse, overshoots and falls on the other side — a self-defeating overreach. The verb 'vaulting' carries connotations of both athleticism and recklessness, implying that ambition contains the seeds of its own destruction.",
      "Contextually, Shakespeare was writing for King James I, a monarch who survived the Gunpowder Plot and who believed firmly in the divine right of kings. By showing Macbeth's ambition leading to regicide and damnation, Shakespeare reinforces the Jacobean worldview that usurping a divinely-appointed king invites chaos on both a personal and cosmic level.",
    ],
    annotations: [
      {
        id: "g7-a1",
        paragraphIndex: 0,
        quote: "tragic trajectory",
        kind: "strength",
        comment:
          "Confident conceptual language that signals a developed thesis.",
      },
      {
        id: "g7-a2",
        paragraphIndex: 1,
        quote: "equestrian image",
        kind: "technique",
        comment:
          "Precise AO2 terminology. Could push further into the symbolism of the fall.",
      },
      {
        id: "g7-a3",
        paragraphIndex: 2,
        quote: "chaos on both a personal and cosmic level",
        kind: "strength",
        comment:
          "Well integrated AO3 — context is doing analytical work, not sitting on top.",
      },
    ],
    aos: [
      { code: "AO1", label: "Read, understand, respond", score: 10, max: 12 },
      { code: "AO2", label: "Language, form, structure", score: 9, max: 12 },
      { code: "AO3", label: "Context", score: 4, max: 6 },
      { code: "AO4", label: "SPaG", score: 3, max: 4 },
    ],
  },
  {
    id: "grade-9",
    grade: 9,
    title: "Macbeth — Grade 9 response",
    board: "AQA",
    paper: "English Literature — Paper 1",
    confidence: 94,
    commentary:
      "A perceptive, conceptualised response. Methods are analysed at word level with sophisticated vocabulary. Context is woven into interpretation rather than bolted on. The argument is sustained and original.",
    paragraphs: [
      "Shakespeare weaponises ambition in Macbeth, presenting it not merely as a character flaw but as a destabilising force that threatens the divinely-ordained social order. Macbeth's tragedy is not that he is ambitious, but that his ambition is untethered from the moral and cosmic hierarchy that the Jacobean worldview held sacred.",
      "The soliloquy in which Macbeth acknowledges his 'vaulting ambition, which o'erleaps itself / And falls on th' other' is remarkable for its self-awareness: even as he articulates the mechanism of his own destruction, he proves unable to resist it. The enjambment enacts the very overreach it describes, the syntactic fall mirroring the moral one. Shakespeare thus collapses the distance between form and content — ambition becomes the sentence as well as the subject.",
      "This self-consuming quality is reinforced in the play's final act, where Macbeth's 'tomorrow and tomorrow and tomorrow' soliloquy reduces life itself to an empty performance — 'a poor player / That struts and frets his hour upon the stage'. The theatrical metaphor is savagely ironic: Macbeth, who sought to be the author of his own destiny, becomes instead a hollow actor in a meaningless drama. For a Jacobean audience, the implication was clear: ambition that violates divine order does not elevate the self, it evacuates it.",
    ],
    annotations: [
      {
        id: "g9-a1",
        paragraphIndex: 0,
        quote: "weaponises ambition",
        kind: "strength",
        comment:
          "Conceptualised verb choice signals a perceptive thesis from the first line.",
      },
      {
        id: "g9-a2",
        paragraphIndex: 1,
        quote: "enjambment enacts the very overreach it describes",
        kind: "technique",
        comment:
          "Outstanding AO2: form is analysed as meaning, not catalogue. This is Grade 9 territory.",
      },
      {
        id: "g9-a3",
        paragraphIndex: 2,
        quote: "ambition that violates divine order does not elevate the self, it evacuates it",
        kind: "strength",
        comment:
          "Original, epigrammatic conclusion. Demonstrates conceptual control of the whole argument.",
      },
    ],
    aos: [
      { code: "AO1", label: "Read, understand, respond", score: 12, max: 12 },
      { code: "AO2", label: "Language, form, structure", score: 12, max: 12 },
      { code: "AO3", label: "Context", score: 6, max: 6 },
      { code: "AO4", label: "SPaG", score: 4, max: 4 },
    ],
  },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function SampleMarkingPage() {
  const [activeId, setActiveId] = useState<string>(SAMPLES[1].id);
  const active = SAMPLES.find((s) => s.id === activeId) ?? SAMPLES[1];

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
          <li className="font-medium text-foreground">Sample marked essays</li>
        </ol>
      </nav>

      <header className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
          Sample marked essays
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Three fully-annotated responses to the same Macbeth question — Grade
          5, 7 and 9 — with examiner commentary on why each lands where it
          does.
        </p>
      </header>

      {/* ── Grade tabs ────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Sample grade"
        className="mb-6 flex flex-wrap gap-2"
      >
        {SAMPLES.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(s.id)}
              className={
                isActive
                  ? "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary"
                  : "inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              }
            >
              <span className="font-heading text-base font-extrabold">
                {s.grade}
              </span>
              <span>Grade {s.grade} sample</span>
            </button>
          );
        })}
      </div>

      {/* ── Examiner commentary ───────────────────────────── */}
      <Card className="mb-6 border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge>{active.board}</Badge>
            <CardDescription>{active.paper}</CardDescription>
          </div>
          <CardTitle className="mt-2">Examiner commentary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-foreground">
            {active.commentary}
          </p>
        </CardContent>
      </Card>

      {/* ── Grade + AO ────────────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <GradePredictionCard
          grade={active.grade}
          confidence={active.confidence}
          paperLabel={`${active.board} · ${active.paper}`}
        />
        <AOBreakdown scores={active.aos} />
      </div>

      {/* ── Annotated sample ──────────────────────────────── */}
      <div className="mt-6">
        <AnnotatedEssay
          paragraphs={active.paragraphs}
          annotations={active.annotations}
        />
      </div>

      {/* ── Text-specific essay banks ────────────────────── */}
      <section className="mt-10 rounded-xl border border-border bg-muted/30 p-5">
        <h2 className="mb-1 font-heading text-lg font-bold text-foreground">
          Text-specific essay banks
        </h2>
        <p className="mb-4 text-xs text-muted-foreground">
          Full model essays at multiple grades with paragraph-level examiner
          annotations.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/marking/sample/macbeth"
            className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-heading text-lg font-extrabold text-primary">
              5
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Macbeth
              </p>
              <p className="text-xs text-muted-foreground">
                5 essays &middot; Lady Macbeth &amp; Guilt &middot; Grades 5, 7
                &amp; 9
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────── */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button variant="outline" render={<Link href="/marking" />}>
          Back to marking hub
        </Button>
        <Button render={<Link href="/marking/submit" />}>
          Mark your own essay
        </Button>
      </div>
    </div>
  );
}
