"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

/* ─── Types ──────────────────────────────────────────────────── */

type ExamEntry = {
  id: string;
  label: string;
  date: string; // YYYY-MM-DD
};

type TopicItem = {
  id: string;
  label: string;
  done: boolean;
};

type RevisionPhase = "early" | "mid" | "intensive" | "exam-week";

/* ─── Exam board topics ──────────────────────────────────────── */

const BOARD_TOPICS: Record<string, TopicItem[]> = {
  "AQA English Language": [
    { id: "aqa-lang-1", label: "Paper 1 Q1 -- Information retrieval", done: false },
    { id: "aqa-lang-2", label: "Paper 1 Q2 -- Language analysis", done: false },
    { id: "aqa-lang-3", label: "Paper 1 Q3 -- Structural analysis", done: false },
    { id: "aqa-lang-4", label: "Paper 1 Q4 -- Evaluation (20 marks)", done: false },
    { id: "aqa-lang-5", label: "Paper 1 Q5 -- Creative writing (40 marks)", done: false },
    { id: "aqa-lang-6", label: "Paper 2 Q1 -- True/false statements", done: false },
    { id: "aqa-lang-7", label: "Paper 2 Q2 -- Summary and synthesis", done: false },
    { id: "aqa-lang-8", label: "Paper 2 Q3 -- Language comparison", done: false },
    { id: "aqa-lang-9", label: "Paper 2 Q4 -- Comparison (16 marks)", done: false },
    { id: "aqa-lang-10", label: "Paper 2 Q5 -- Transactional writing (40 marks)", done: false },
    { id: "aqa-lang-11", label: "Spoken Language endorsement", done: false },
  ],
  "AQA English Literature": [
    { id: "aqa-lit-1", label: "Paper 1 Section A -- Shakespeare (Macbeth / R&J / Tempest)", done: false },
    { id: "aqa-lit-2", label: "Paper 1 Section B -- 19th-century novel", done: false },
    { id: "aqa-lit-3", label: "Paper 2 Section A -- Modern text (AIC / LOTF / etc.)", done: false },
    { id: "aqa-lit-4", label: "Paper 2 Section B -- Poetry anthology (15 poems)", done: false },
    { id: "aqa-lit-5", label: "Paper 2 Section C -- Unseen poetry", done: false },
    { id: "aqa-lit-6", label: "Key quotes: Shakespeare text", done: false },
    { id: "aqa-lit-7", label: "Key quotes: 19th-century novel", done: false },
    { id: "aqa-lit-8", label: "Key quotes: Modern text", done: false },
    { id: "aqa-lit-9", label: "Context for all set texts", done: false },
  ],
  "Edexcel English Language": [
    { id: "edx-lang-1", label: "Paper 1 Section A -- Reading fiction (Q1--Q4)", done: false },
    { id: "edx-lang-2", label: "Paper 1 Section B -- Imaginative writing", done: false },
    { id: "edx-lang-3", label: "Paper 2 Section A -- Reading non-fiction (Q1--Q6)", done: false },
    { id: "edx-lang-4", label: "Paper 2 Section B -- Transactional writing", done: false },
    { id: "edx-lang-5", label: "Spoken language endorsement", done: false },
  ],
  "Edexcel English Literature": [
    { id: "edx-lit-1", label: "Paper 1 Section A -- Shakespeare", done: false },
    { id: "edx-lit-2", label: "Paper 1 Section B -- Post-1914 prose/drama", done: false },
    { id: "edx-lit-3", label: "Paper 2 Section A -- 19th-century novel", done: false },
    { id: "edx-lit-4", label: "Paper 2 Section B -- Poetry anthology", done: false },
    { id: "edx-lit-5", label: "Paper 2 Section C -- Unseen poetry", done: false },
  ],
  "Cambridge IGCSE Language": [
    { id: "caie-lang-1", label: "Paper 1 -- Reading passages (Q1--Q3)", done: false },
    { id: "caie-lang-2", label: "Paper 1 -- Summary writing", done: false },
    { id: "caie-lang-3", label: "Paper 2 -- Directed writing", done: false },
    { id: "caie-lang-4", label: "Paper 2 -- Composition (descriptive / narrative)", done: false },
    { id: "caie-lang-5", label: "Coursework portfolio (if applicable)", done: false },
  ],
  "Cambridge IGCSE Literature": [
    { id: "caie-lit-1", label: "Paper 1 -- Poetry and prose", done: false },
    { id: "caie-lit-2", label: "Paper 2 -- Drama (Shakespeare / modern)", done: false },
    { id: "caie-lit-3", label: "Unseen analysis skills", done: false },
    { id: "caie-lit-4", label: "Coursework texts (if applicable)", done: false },
  ],
};

/* ─── Study tips by phase ────────────────────────────────────── */

const PHASE_TIPS: Record<RevisionPhase, { title: string; tips: string[] }> = {
  early: {
    title: "Early Revision (8+ weeks out)",
    tips: [
      "Focus on understanding, not memorisation. Re-read set texts and make notes on themes, characters, and context.",
      "Create a quote bank for each text -- aim for 10-15 key quotes per text with brief analysis notes.",
      "Identify your weakest topics and prioritise them. Use the checklist below to audit your knowledge.",
      "Practise one timed essay per week to build confidence with exam structure and timing.",
    ],
  },
  mid: {
    title: "Mid Revision (4--8 weeks out)",
    tips: [
      "Switch to active recall: test yourself on quotes, themes, and techniques rather than re-reading notes.",
      "Practise past paper questions under timed conditions -- aim for 2--3 per week.",
      "Condense your notes into single-page summaries or mind maps for each topic.",
      "Practise linking quotes to multiple themes -- this is what separates good answers from excellent ones.",
    ],
  },
  intensive: {
    title: "Intensive Revision (1--4 weeks out)",
    tips: [
      "Do a full past paper under exam conditions at least once a week.",
      "Focus on exam technique: PEE/PEEL paragraphs, embedding quotes, using subject terminology.",
      "Review mark schemes to understand exactly what examiners are looking for at each grade boundary.",
      "Use flashcards daily for quote recall -- short, frequent sessions beat long cramming.",
    ],
  },
  "exam-week": {
    title: "Exam Week",
    tips: [
      "Light revision only: re-read your condensed notes and key quote lists.",
      "Do not try to learn new material. Focus on what you already know.",
      "Get plenty of sleep -- your brain consolidates memories during rest.",
      "Read through one or two model answers to remind yourself of the expected standard.",
    ],
  },
};

/* ─── Helper: get phase from days ────────────────────────────── */

function getPhase(daysUntil: number): RevisionPhase {
  if (daysUntil <= 7) return "exam-week";
  if (daysUntil <= 28) return "intensive";
  if (daysUntil <= 56) return "mid";
  return "early";
}

/* ─── Helper: format date ────────────────────────────────────── */

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ─── Helper: days between ───────────────────────────────────── */

function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + "T00:00:00");
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

/* ─── Calendar helpers ───────────────────────────────────────── */

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  // Shift Sunday (0) to end: Mon=0, Tue=1, ..., Sun=6
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  return { startOffset, totalDays };
}

function monthLabel(year: number, month: number) {
  return new Date(year, month, 1).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

/* ─── LS keys ────────────────────────────────────────────────── */

const LS_EXAMS = "teh-revision-planner-exams";
const LS_BOARD = "teh-revision-planner-board";
const LS_TOPICS = "teh-revision-planner-topics";

/* ─── Component ──────────────────────────────────────────────── */

export default function RevisionPlannerPage() {
  /* State */
  const [exams, setExams] = useState<ExamEntry[]>([]);
  const [newLabel, setNewLabel] = useState("");
  const [newDate, setNewDate] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("AQA English Language");
  const [topics, setTopics] = useState<Record<string, TopicItem[]>>({});
  const [calMonth, setCalMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [mounted, setMounted] = useState(false);

  /* Load from localStorage */
  useEffect(() => {
    try {
      const savedExams = localStorage.getItem(LS_EXAMS);
      if (savedExams) setExams(JSON.parse(savedExams));
      const savedBoard = localStorage.getItem(LS_BOARD);
      if (savedBoard) setSelectedBoard(savedBoard);
      const savedTopics = localStorage.getItem(LS_TOPICS);
      if (savedTopics) setTopics(JSON.parse(savedTopics));
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  /* Save to localStorage */
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LS_EXAMS, JSON.stringify(exams));
  }, [exams, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LS_BOARD, selectedBoard);
  }, [selectedBoard, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LS_TOPICS, JSON.stringify(topics));
  }, [topics, mounted]);

  /* Derived */
  const sortedExams = useMemo(
    () => [...exams].sort((a, b) => a.date.localeCompare(b.date)),
    [exams]
  );

  const nearestExam = sortedExams.find((e) => daysUntil(e.date) >= 0);
  const currentPhase: RevisionPhase = nearestExam
    ? getPhase(daysUntil(nearestExam.date))
    : "early";

  /* Current board topics with saved state merged */
  const boardTopics = useMemo(() => {
    const defaults = BOARD_TOPICS[selectedBoard] ?? [];
    const saved = topics[selectedBoard];
    if (!saved) return defaults;
    return defaults.map((t) => {
      const s = saved.find((st) => st.id === t.id);
      return s ? { ...t, done: s.done } : t;
    });
  }, [selectedBoard, topics]);

  const completedCount = boardTopics.filter((t) => t.done).length;
  const progressPct = boardTopics.length > 0 ? Math.round((completedCount / boardTopics.length) * 100) : 0;

  /* Handlers */
  const addExam = useCallback(() => {
    if (!newLabel.trim() || !newDate) return;
    setExams((prev) => [
      ...prev,
      { id: crypto.randomUUID(), label: newLabel.trim(), date: newDate },
    ]);
    setNewLabel("");
    setNewDate("");
  }, [newLabel, newDate]);

  const removeExam = useCallback((id: string) => {
    setExams((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const toggleTopic = useCallback(
    (topicId: string) => {
      setTopics((prev) => {
        const current = prev[selectedBoard] ?? BOARD_TOPICS[selectedBoard] ?? [];
        const updated = current.map((t) =>
          t.id === topicId ? { ...t, done: !t.done } : t
        );
        return { ...prev, [selectedBoard]: updated };
      });
    },
    [selectedBoard]
  );

  /* Calendar data */
  const { startOffset, totalDays } = getMonthDays(calMonth.year, calMonth.month);
  const examDatesSet = new Set(exams.map((e) => e.date));

  const prevMonth = () =>
    setCalMonth((prev) => {
      const m = prev.month - 1;
      return m < 0 ? { year: prev.year - 1, month: 11 } : { year: prev.year, month: m };
    });

  const nextMonth = () =>
    setCalMonth((prev) => {
      const m = prev.month + 1;
      return m > 11 ? { year: prev.year + 1, month: 0 } : { year: prev.year, month: m };
    });

  if (!mounted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Revision Planner
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600 leading-relaxed">
          Set your exam dates, build a revision schedule, and track your topics.
          Everything saves automatically to your browser.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* ── Left column: exams + calendar ───────────────────────── */}
        <div className="lg:col-span-2 space-y-8">
          {/* Add exam */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Your Exams</h2>
            <p className="mt-1 text-sm text-gray-500">
              Add your exam dates to generate a countdown and suggested schedule.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="e.g. AQA English Language Paper 1"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                onClick={addExam}
                disabled={!newLabel.trim() || !newDate}
                className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>

            {/* Exam list with countdowns */}
            {sortedExams.length > 0 && (
              <div className="mt-6 space-y-3">
                {sortedExams.map((exam) => {
                  const days = daysUntil(exam.date);
                  const isPast = days < 0;
                  return (
                    <div
                      key={exam.id}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 ${
                        isPast
                          ? "border-gray-200 bg-gray-50 opacity-60"
                          : "border-accent-100 bg-accent-50/40"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{exam.label}</p>
                        <p className="text-xs text-gray-500">{formatDate(exam.date)}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            isPast
                              ? "bg-gray-200 text-gray-500"
                              : days <= 7
                                ? "bg-red-100 text-red-700"
                                : days <= 28
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {isPast ? "Done" : days === 0 ? "Today!" : `${days} day${days !== 1 ? "s" : ""}`}
                        </span>
                        <button
                          onClick={() => removeExam(exam.id)}
                          className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500 transition-colors"
                          aria-label={`Remove ${exam.label}`}
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Calendar */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Calendar</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevMonth}
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Previous month"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <span className="min-w-[140px] text-center text-sm font-semibold text-gray-700">
                  {monthLabel(calMonth.year, calMonth.month)}
                </span>
                <button
                  onClick={nextMonth}
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Next month"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="mt-4 grid grid-cols-7 text-center text-xs font-semibold text-gray-400">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-px">
              {/* Empty cells for offset */}
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10" />
              ))}
              {Array.from({ length: totalDays }).map((_, i) => {
                const day = i + 1;
                const dateStr = `${calMonth.year}-${String(calMonth.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isExamDay = examDatesSet.has(dateStr);
                const today = new Date();
                const isToday =
                  today.getFullYear() === calMonth.year &&
                  today.getMonth() === calMonth.month &&
                  today.getDate() === day;

                return (
                  <div
                    key={day}
                    className={`flex h-10 items-center justify-center rounded-lg text-sm transition-colors ${
                      isExamDay
                        ? "bg-red-100 font-bold text-red-700 ring-2 ring-red-300"
                        : isToday
                          ? "bg-accent-100 font-semibold text-accent-700"
                          : "text-gray-700 hover:bg-gray-50"
                    }`}
                    title={isExamDay ? exams.filter((e) => e.date === dateStr).map((e) => e.label).join(", ") : undefined}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-accent-100 ring-1 ring-accent-300" /> Today
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-red-100 ring-1 ring-red-300" /> Exam day
              </span>
            </div>
          </section>

          {/* Study tips */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Study Tips by Phase</h2>
            <p className="mt-1 text-sm text-gray-500">
              {nearestExam
                ? `Based on your nearest exam (${daysUntil(nearestExam.date)} days away), you are in the ${PHASE_TIPS[currentPhase].title.toLowerCase()} phase.`
                : "Add an exam date above to get personalised phase-based advice."}
            </p>

            <div className="mt-6 space-y-6">
              {(Object.keys(PHASE_TIPS) as RevisionPhase[]).map((phase) => {
                const isActive = phase === currentPhase && !!nearestExam;
                return (
                  <div
                    key={phase}
                    className={`rounded-lg border p-4 transition-colors ${
                      isActive
                        ? "border-accent-300 bg-accent-50/60"
                        : "border-gray-100 bg-gray-50/50"
                    }`}
                  >
                    <h3 className={`text-sm font-bold ${isActive ? "text-accent-700" : "text-gray-700"}`}>
                      {isActive && (
                        <span className="mr-2 inline-block rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                          Current
                        </span>
                      )}
                      {PHASE_TIPS[phase].title}
                    </h3>
                    <ul className="mt-2 space-y-1.5">
                      {PHASE_TIPS[phase].tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${isActive ? "bg-accent" : "bg-gray-300"}`} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* ── Right column: topic checklist ───────────────────────── */}
        <div className="space-y-6">
          {/* Board selector */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Topic Checklist</h2>
            <p className="mt-1 text-sm text-gray-500">
              Select your exam board and tick off topics as you revise.
            </p>

            <select
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              className="mt-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            >
              {Object.keys(BOARD_TOPICS).map((board) => (
                <option key={board} value={board}>
                  {board}
                </option>
              ))}
            </select>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{completedCount} / {boardTopics.length} topics</span>
                <span className="font-semibold text-accent">{progressPct}%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-400 transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Topic list */}
            <ul className="mt-5 space-y-2">
              {boardTopics.map((topic) => (
                <li key={topic.id}>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={topic.done}
                      onChange={() => toggleTopic(topic.id)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-accent focus:ring-accent/30"
                    />
                    <span className={`text-sm leading-snug ${topic.done ? "text-gray-400 line-through" : "text-gray-700"}`}>
                      {topic.label}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick countdown card */}
          {nearestExam && daysUntil(nearestExam.date) >= 0 && (
            <section className="rounded-xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-white p-6 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                Next Exam
              </p>
              <p className="mt-2 text-4xl font-extrabold text-primary">
                {daysUntil(nearestExam.date)}
              </p>
              <p className="text-sm font-medium text-gray-600">
                day{daysUntil(nearestExam.date) !== 1 ? "s" : ""} until
              </p>
              <p className="mt-1 text-sm font-bold text-gray-900">{nearestExam.label}</p>
              <p className="mt-0.5 text-xs text-gray-500">{formatDate(nearestExam.date)}</p>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
