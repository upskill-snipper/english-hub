"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

/* ─── Types ──────────────────────────────────────────────────── */

type ChecklistItem = {
  id: string;
  label: string;
  detail?: string;
};

type ChecklistSection = {
  title: string;
  items: ChecklistItem[];
};

type ChecklistBoard = {
  slug: string;
  label: string;
  colour: string;
  sections: ChecklistSection[];
};

/* ─── Checklist data ─────────────────────────────────────────── */

const CHECKLISTS: ChecklistBoard[] = [
  {
    slug: "aqa-language",
    label: "AQA English Language (8700)",
    colour: "border-primary",
    sections: [
      {
        title: "Paper 1: Explorations in Creative Reading and Writing",
        items: [
          { id: "aqa-l-1", label: "Q1: Identify and interpret explicit information", detail: "4 marks -- list 4 things" },
          { id: "aqa-l-2", label: "Q2: Analyse language using subject terminology", detail: "8 marks -- 2-3 detailed paragraphs" },
          { id: "aqa-l-3", label: "Q3: Analyse structure and organisation", detail: "8 marks -- focus, shift, narrative perspective" },
          { id: "aqa-l-4", label: "Q4: Critically evaluate texts", detail: "20 marks -- agree/disagree with statement" },
          { id: "aqa-l-5", label: "Q5: Descriptive writing", detail: "40 marks (24 content + 16 SPaG)" },
          { id: "aqa-l-6", label: "Q5: Narrative writing", detail: "40 marks (24 content + 16 SPaG)" },
          { id: "aqa-l-7", label: "Timing practice: 15 min reading, 45 min Q5", detail: "Critical for exam success" },
        ],
      },
      {
        title: "Paper 2: Writers' Viewpoints and Perspectives",
        items: [
          { id: "aqa-l-8", label: "Q1: True/false statements", detail: "4 marks -- shade boxes" },
          { id: "aqa-l-9", label: "Q2: Summarise differences/similarities", detail: "8 marks -- use both sources" },
          { id: "aqa-l-10", label: "Q3: Analyse language in one source", detail: "12 marks -- detailed analysis" },
          { id: "aqa-l-11", label: "Q4: Compare writers' viewpoints", detail: "16 marks -- compare methods and perspectives" },
          { id: "aqa-l-12", label: "Q5: Writing to present a viewpoint", detail: "40 marks -- letter, article, speech, essay" },
          { id: "aqa-l-13", label: "Non-fiction text types and conventions", detail: "Letters, articles, speeches, leaflets" },
          { id: "aqa-l-14", label: "Persuasive and argumentative techniques", detail: "Rhetoric, anecdotes, statistics, counter-arguments" },
        ],
      },
      {
        title: "Core Skills",
        items: [
          { id: "aqa-l-15", label: "Subject terminology: identify and use correctly", detail: "Metaphor, simile, personification, alliteration, etc." },
          { id: "aqa-l-16", label: "Structural features vocabulary", detail: "Shift, cyclical structure, juxtaposition, flashback" },
          { id: "aqa-l-17", label: "Spelling, punctuation and grammar", detail: "Sentence variety, paragraphing, ambitious vocabulary" },
          { id: "aqa-l-18", label: "PEE/PEEL paragraph structure", detail: "Point, Evidence, Explanation, Link" },
          { id: "aqa-l-19", label: "Spoken Language endorsement", detail: "Presentation, listening, response to questions" },
        ],
      },
    ],
  },
  {
    slug: "aqa-literature",
    label: "AQA English Literature (8702)",
    colour: "border-primary",
    sections: [
      {
        title: "Paper 1: Shakespeare and the 19th-Century Novel",
        items: [
          { id: "aqa-lit-1", label: "Shakespeare: respond to extract + whole text", detail: "34 marks, 50-55 minutes" },
          { id: "aqa-lit-2", label: "Shakespeare: key quotes (10-15 memorised)", detail: "Must be embedded in response" },
          { id: "aqa-lit-3", label: "Shakespeare: context (historical, social, literary)", detail: "Jacobean/Elizabethan society" },
          { id: "aqa-lit-4", label: "Shakespeare: writer's methods (language, structure, form)", detail: "Soliloquy, dramatic irony, imagery" },
          { id: "aqa-lit-5", label: "19th-century novel: respond to extract + whole text", detail: "30 marks, 45-50 minutes" },
          { id: "aqa-lit-6", label: "19th-century novel: key quotes memorised", detail: "10-15 key quotes with analysis" },
          { id: "aqa-lit-7", label: "19th-century novel: Victorian context", detail: "Class, religion, science, gender, empire" },
        ],
      },
      {
        title: "Paper 2: Modern Texts and Poetry",
        items: [
          { id: "aqa-lit-8", label: "Modern text: essay on one theme/character", detail: "34 marks, no extract given" },
          { id: "aqa-lit-9", label: "Modern text: full plot and character knowledge", detail: "Must reference specific moments" },
          { id: "aqa-lit-10", label: "Poetry anthology: compare two poems", detail: "30 marks -- named poem + your choice" },
          { id: "aqa-lit-11", label: "Poetry: all 15 Power and Conflict poems studied", detail: "Or Love and Relationships cluster" },
          { id: "aqa-lit-12", label: "Poetry: comparison techniques", detail: "Theme, method, context links" },
          { id: "aqa-lit-13", label: "Unseen poetry: single poem analysis", detail: "24 marks" },
          { id: "aqa-lit-14", label: "Unseen poetry: compare two unseen poems", detail: "8 marks" },
        ],
      },
      {
        title: "Core Skills",
        items: [
          { id: "aqa-lit-15", label: "AO1: Responding to text with textual references", detail: "Use quotes, not just plot summary" },
          { id: "aqa-lit-16", label: "AO2: Analyse language, form and structure", detail: "Writer's methods and effects" },
          { id: "aqa-lit-17", label: "AO3: Show understanding of context", detail: "Social, historical, literary" },
          { id: "aqa-lit-18", label: "AO4: Spelling, punctuation and grammar", detail: "Only assessed on Paper 1 Shakespeare" },
          { id: "aqa-lit-19", label: "Essay planning under timed conditions", detail: "5 minutes planning per essay" },
        ],
      },
    ],
  },
  {
    slug: "edexcel-language",
    label: "Edexcel English Language (1EN0)",
    colour: "border-primary",
    sections: [
      {
        title: "Paper 1: Fiction and Imaginative Writing",
        items: [
          { id: "edx-l-1", label: "Section A Q1: one-word/short answers", detail: "Simple retrieval" },
          { id: "edx-l-2", label: "Section A Q2: close language analysis", detail: "Focus on specific words/phrases" },
          { id: "edx-l-3", label: "Section A Q3: language and structure", detail: "Whole text analysis" },
          { id: "edx-l-4", label: "Section A Q4: evaluate critically", detail: "How successful is the writer?" },
          { id: "edx-l-5", label: "Section B: imaginative writing (one task)", detail: "Narrative or descriptive" },
          { id: "edx-l-6", label: "Creative writing techniques", detail: "Imagery, varied sentences, ambitious vocabulary" },
        ],
      },
      {
        title: "Paper 2: Non-Fiction and Transactional Writing",
        items: [
          { id: "edx-l-7", label: "Section A: read and analyse two non-fiction texts", detail: "19th and 21st century sources" },
          { id: "edx-l-8", label: "Q1--Q4: retrieval, inference, language, synthesis", detail: "Progress through question types" },
          { id: "edx-l-9", label: "Q5: compare writers' perspectives", detail: "Use both texts with comparison connectives" },
          { id: "edx-l-10", label: "Section B Q6: transactional writing", detail: "Two tasks from choice" },
          { id: "edx-l-11", label: "Text types: articles, letters, reviews, speeches", detail: "Know conventions for each" },
        ],
      },
    ],
  },
  {
    slug: "edexcel-literature",
    label: "Edexcel English Literature (1ET0)",
    colour: "border-primary",
    sections: [
      {
        title: "Paper 1: Shakespeare and Post-1914 Literature",
        items: [
          { id: "edx-lit-1", label: "Shakespeare: extract-based essay", detail: "Analyse extract + link to whole play" },
          { id: "edx-lit-2", label: "Shakespeare: 15+ key quotes memorised" },
          { id: "edx-lit-3", label: "Shakespeare: context and writer's purpose" },
          { id: "edx-lit-4", label: "Post-1914 text: essay question (no extract)", detail: "Must know text thoroughly" },
          { id: "edx-lit-5", label: "Post-1914 text: themes and characters", detail: "AIC, LOTF, Blood Brothers, etc." },
        ],
      },
      {
        title: "Paper 2: 19th-Century Novel and Poetry",
        items: [
          { id: "edx-lit-6", label: "19th-century novel: extract + essay", detail: "ACC, J&H, Frankenstein, etc." },
          { id: "edx-lit-7", label: "Poetry anthology: compare two poems", detail: "Named poem + free choice" },
          { id: "edx-lit-8", label: "Poetry: know all poems in your cluster" },
          { id: "edx-lit-9", label: "Unseen poetry: analyse one poem", detail: "Language, structure, themes" },
          { id: "edx-lit-10", label: "Unseen poetry: compare two poems" },
        ],
      },
    ],
  },
  {
    slug: "caie-language",
    label: "Cambridge IGCSE First Language (0500)",
    colour: "border-primary",
    sections: [
      {
        title: "Paper 1: Reading",
        items: [
          { id: "caie-l-1", label: "Q1: Retrieve and organise information", detail: "15 marks -- select relevant points" },
          { id: "caie-l-2", label: "Q2: Understand and analyse language", detail: "25 marks -- explain effects of language choices" },
          { id: "caie-l-3", label: "Q3: Summary writing", detail: "10 marks -- concise, own words" },
        ],
      },
      {
        title: "Paper 2: Directed Writing and Composition",
        items: [
          { id: "caie-l-4", label: "Directed writing: respond to passage in given form", detail: "25 marks -- adapt style to audience/purpose" },
          { id: "caie-l-5", label: "Composition: descriptive writing", detail: "25 marks -- sensory detail, structure" },
          { id: "caie-l-6", label: "Composition: narrative writing", detail: "25 marks -- plot, characterisation, atmosphere" },
          { id: "caie-l-7", label: "Register and audience awareness", detail: "Formal/informal, persuasive/informative" },
        ],
      },
      {
        title: "Core Skills",
        items: [
          { id: "caie-l-8", label: "Own-words paraphrasing", detail: "Critical for Qs 1 and 3" },
          { id: "caie-l-9", label: "Selecting and organising evidence", detail: "Relevant quotation, not copying" },
          { id: "caie-l-10", label: "Accuracy in spelling and grammar", detail: "Assessed across all papers" },
        ],
      },
    ],
  },
  {
    slug: "caie-literature",
    label: "Cambridge IGCSE Literature (0475)",
    colour: "border-primary",
    sections: [
      {
        title: "Paper 1: Poetry and Prose",
        items: [
          { id: "caie-lit-1", label: "Poetry set text: passage-based question", detail: "25 marks" },
          { id: "caie-lit-2", label: "Poetry set text: essay question", detail: "25 marks" },
          { id: "caie-lit-3", label: "Prose set text: passage-based question", detail: "25 marks" },
          { id: "caie-lit-4", label: "Prose set text: essay question", detail: "25 marks" },
        ],
      },
      {
        title: "Paper 2: Drama",
        items: [
          { id: "caie-lit-5", label: "Drama set text: passage-based question", detail: "25 marks" },
          { id: "caie-lit-6", label: "Drama set text: essay question", detail: "25 marks" },
          { id: "caie-lit-7", label: "Shakespeare text thoroughly studied" },
          { id: "caie-lit-8", label: "Modern drama text thoroughly studied" },
        ],
      },
      {
        title: "Core Skills",
        items: [
          { id: "caie-lit-9", label: "Close reading and textual analysis" },
          { id: "caie-lit-10", label: "Understanding of form, structure and language" },
          { id: "caie-lit-11", label: "Personal and critical response to texts" },
          { id: "caie-lit-12", label: "Engagement with writers' ideas and attitudes" },
        ],
      },
    ],
  },
];

/* ─── LS key ─────────────────────────────────────────────────── */

const LS_CHECKED = "teh-checklists-checked";

/* ─── Component ──────────────────────────────────────────────── */

export default function ChecklistsPage() {
  const [activeBoard, setActiveBoard] = useState(CHECKLISTS[0].slug);
  const [checked, setChecked] = useState<Record<string, Set<string>>>({});
  const [mounted, setMounted] = useState(false);

  const board = CHECKLISTS.find((b) => b.slug === activeBoard)!;

  /* Load from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_CHECKED);
      if (saved) {
        const parsed: Record<string, string[]> = JSON.parse(saved);
        const mapped: Record<string, Set<string>> = {};
        for (const [key, val] of Object.entries(parsed)) {
          mapped[key] = new Set(val);
        }
        setChecked(mapped);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  /* Save to localStorage */
  useEffect(() => {
    if (!mounted) return;
    const serialisable: Record<string, string[]> = {};
    for (const [key, val] of Object.entries(checked)) {
      serialisable[key] = [...val];
    }
    localStorage.setItem(LS_CHECKED, JSON.stringify(serialisable));
  }, [checked, mounted]);

  /* Derived */
  const boardChecked = checked[activeBoard] ?? new Set<string>();

  const totalItems = useMemo(
    () => board.sections.reduce((sum, s) => sum + s.items.length, 0),
    [board]
  );
  const checkedCount = boardChecked.size;
  const progressPct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  /* Handlers */
  const toggleItem = useCallback(
    (itemId: string) => {
      setChecked((prev) => {
        const current = new Set(prev[activeBoard] ?? []);
        if (current.has(itemId)) current.delete(itemId);
        else current.add(itemId);
        return { ...prev, [activeBoard]: current };
      });
    },
    [activeBoard]
  );

  const clearAll = useCallback(() => {
    setChecked((prev) => ({ ...prev, [activeBoard]: new Set<string>() }));
  }, [activeBoard]);

  const checkAll = useCallback(() => {
    const allIds = board.sections.flatMap((s) => s.items.map((i) => i.id));
    setChecked((prev) => ({ ...prev, [activeBoard]: new Set(allIds) }));
  }, [activeBoard, board]);

  if (!mounted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Revision Checklists
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Comprehensive skill-by-skill checklists for every major exam board. Tick off each topic as you
          revise and track your progress. Everything saves automatically to your browser.
        </p>
      </div>

      {/* Board selector tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {CHECKLISTS.map((b) => {
          const bChecked = checked[b.slug] ?? new Set();
          const bTotal = b.sections.reduce((sum, s) => sum + s.items.length, 0);
          const bPct = bTotal > 0 ? Math.round((bChecked.size / bTotal) * 100) : 0;
          return (
            <button
              key={b.slug}
              onClick={() => setActiveBoard(b.slug)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                activeBoard === b.slug
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {b.label}
              {bChecked.size > 0 && (
                <span className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  activeBoard === b.slug ? "bg-card/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  {bPct}%
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mb-6 rounded-xl border border-border bg-card p-5 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">{board.label}</p>
            <p className="text-xs text-muted-foreground">
              {checkedCount} of {totalItems} skills covered
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-primary">{progressPct}%</span>
            <div className="flex gap-1.5">
              <button
                onClick={checkAll}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-muted"
              >
                Check all
              </button>
              <button
                onClick={clearAll}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-muted"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              progressPct === 100
                ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                : "bg-gradient-to-r from-primary to-primary/60"
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {progressPct === 100 && (
          <p className="mt-2 text-sm font-semibold text-emerald-500">
            All topics covered! Make sure to revisit weak areas before the exam.
          </p>
        )}
      </div>

      {/* Checklist sections */}
      <div className="space-y-6">
        {board.sections.map((section) => {
          const sectionChecked = section.items.filter((i) => boardChecked.has(i.id)).length;
          const sectionTotal = section.items.length;
          const sectionPct = Math.round((sectionChecked / sectionTotal) * 100);

          return (
            <section
              key={section.title}
              className={`overflow-hidden rounded-xl border-l-4 ${board.colour} border border-border bg-card shadow-md`}
            >
              {/* Section header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h2 className="text-base font-bold text-foreground">{section.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {sectionChecked}/{sectionTotal}
                  </span>
                  <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${sectionPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Items */}
              <ul className="divide-y divide-border">
                {section.items.map((item) => {
                  const isChecked = boardChecked.has(item.id);
                  return (
                    <li key={item.id}>
                      <label className="flex cursor-pointer items-start gap-3 px-5 py-3 transition-colors hover:bg-muted">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary/30"
                        />
                        <div className="flex-1">
                          <span
                            className={`text-sm leading-snug ${
                              isChecked ? "text-muted-foreground line-through" : "text-foreground"
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.detail && (
                            <p className={`mt-0.5 text-xs ${isChecked ? "text-muted-foreground/50" : "text-muted-foreground"}`}>
                              {item.detail}
                            </p>
                          )}
                        </div>
                        {isChecked && (
                          <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      {/* Tip box */}
      <div className="mt-10 rounded-xl border border-primary/20 bg-primary/[0.04] p-6">
        <h3 className="text-lg font-bold text-foreground">Using these checklists effectively</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span><strong>Do not tick until you are confident.</strong> Only check a skill when you can explain it and demonstrate it in an exam answer.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span><strong>Prioritise unchecked items.</strong> Focus your remaining revision time on the skills you have not yet covered.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span><strong>Revisit periodically.</strong> Come back weekly to uncheck anything you feel less confident about.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span><strong>Your progress is saved locally.</strong> It persists in your browser so you can return any time. Clearing browser data will reset it.</span>
          </li>
        </ul>
      </div>
    </>
  );
}
