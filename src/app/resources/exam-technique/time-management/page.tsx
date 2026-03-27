import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/exam-technique/time-management' },
  title: "Time Management in English Exams",
  description:
    "Paper-by-paper timing breakdowns for AQA, Edexcel, CAIE, and OCR English exams. Learn how to divide time per question, plan your time allocation, and what to do if you run out of time.",
};

/* ─── Timing data ────────────────────────────────────────────── */

const AQA_TIMINGS = {
  board: "AQA",
  colour: "bg-[#40197F]",
  papers: [
    {
      name: "Language Paper 1 -- Explorations in Creative Reading & Writing",
      duration: "1 hour 45 minutes",
      total: 80,
      questions: [
        { q: "Q1: List 4 things", marks: 4, time: "5 mins", notes: "Simple retrieval -- be quick." },
        { q: "Q2: How does the writer use language?", marks: 8, time: "10 mins", notes: "2-3 detailed language points." },
        { q: "Q3: How has the writer structured the text?", marks: 8, time: "10 mins", notes: "Focus on structural shifts." },
        { q: "Q4: To what extent do you agree?", marks: 20, time: "25 mins", notes: "Evaluative -- needs a clear stance." },
        { q: "Q5: Creative writing", marks: 40, time: "45 mins", notes: "Include 5 mins planning time." },
      ],
    },
    {
      name: "Language Paper 2 -- Writers' Viewpoints & Perspectives",
      duration: "1 hour 45 minutes",
      total: 80,
      questions: [
        { q: "Q1: Choose 4 true statements", marks: 4, time: "5 mins", notes: "Careful reading -- no rush." },
        { q: "Q2: Summarise differences/similarities", marks: 8, time: "10 mins", notes: "Comparative -- both texts." },
        { q: "Q3: How does the writer use language?", marks: 12, time: "15 mins", notes: "3-4 language points." },
        { q: "Q4: Compare viewpoints", marks: 16, time: "20 mins", notes: "Integrated comparison." },
        { q: "Q5: Transactional writing", marks: 40, time: "45 mins", notes: "Include 5 mins planning." },
      ],
    },
    {
      name: "Literature Paper 1 -- Shakespeare & 19th-Century Novel",
      duration: "1 hour 45 minutes",
      total: 64,
      questions: [
        { q: "Shakespeare extract + essay", marks: 34, time: "55 mins", notes: "~30 marks + 4 SPaG. Plan for 5 mins." },
        { q: "19th-century novel extract + essay", marks: 30, time: "50 mins", notes: "Start with extract, widen to whole text." },
      ],
    },
    {
      name: "Literature Paper 2 -- Modern Text, Poetry & Unseen Poetry",
      duration: "2 hours 15 minutes",
      total: 96,
      questions: [
        { q: "Modern prose/drama essay", marks: 34, time: "45 mins", notes: "~30 marks + 4 SPaG." },
        { q: "Poetry anthology comparison", marks: 30, time: "45 mins", notes: "Compare 2 poems." },
        { q: "Unseen poetry (single poem)", marks: 24, time: "25 mins", notes: "Fresh analysis." },
        { q: "Unseen poetry (comparison)", marks: 8, time: "20 mins", notes: "Brief but focused comparison." },
      ],
    },
  ],
};

const EDEXCEL_TIMINGS = {
  board: "Edexcel",
  colour: "bg-[#E5231B]",
  papers: [
    {
      name: "Language Paper 1 -- Fiction & Imaginative Writing",
      duration: "1 hour 45 minutes",
      total: 64,
      questions: [
        { q: "Q1-Q4: Short reading questions", marks: 12, time: "15 mins", notes: "Quick comprehension responses." },
        { q: "Q5: Language analysis", marks: 12, time: "15 mins", notes: "Close analysis of extract." },
        { q: "Q6: Extended reading response", marks: 16, time: "20 mins", notes: "Sustained analytical writing." },
        { q: "Q7: Imaginative writing", marks: 24, time: "45 mins", notes: "Include 5 mins planning." },
      ],
    },
    {
      name: "Language Paper 2 -- Non-Fiction & Transactional Writing",
      duration: "2 hours 5 minutes",
      total: 64,
      questions: [
        { q: "Q1-Q4: Short reading questions", marks: 12, time: "15 mins", notes: "Comprehension and inference." },
        { q: "Q5: Language analysis", marks: 12, time: "15 mins", notes: "Focus on writer's methods." },
        { q: "Q6: Compare/contrast viewpoints", marks: 16, time: "20 mins", notes: "Sustained comparison." },
        { q: "Q7: Transactional writing (Task A)", marks: 12, time: "25 mins", notes: "Purpose, audience, form." },
        { q: "Q8: Transactional writing (Task B)", marks: 12, time: "30 mins", notes: "Different form from Q7." },
      ],
    },
    {
      name: "Literature Paper 1 -- Shakespeare & Post-1914 Literature",
      duration: "1 hour 45 minutes",
      total: 80,
      questions: [
        { q: "Shakespeare extract + essay", marks: 40, time: "55 mins", notes: "Extract then wider text." },
        { q: "Post-1914 British play/novel", marks: 40, time: "50 mins", notes: "Essay response." },
      ],
    },
    {
      name: "Literature Paper 2 -- 19th-Century Novel & Poetry Since 1789",
      duration: "2 hours 15 minutes",
      total: 80,
      questions: [
        { q: "19th-century novel extract + essay", marks: 40, time: "55 mins", notes: "Extract then wider text." },
        { q: "Poetry anthology comparison", marks: 20, time: "35 mins", notes: "2 poems from anthology." },
        { q: "Unseen poetry", marks: 20, time: "25 mins", notes: "Single unseen poem analysis." },
      ],
    },
  ],
};

const CAIE_TIMINGS = {
  board: "Cambridge IGCSE",
  colour: "bg-[#00A651]",
  papers: [
    {
      name: "Language Paper 1 -- Reading (0500)",
      duration: "2 hours",
      total: 80,
      questions: [
        { q: "Q1: Information retrieval & summary", marks: 15, time: "25 mins", notes: "Select and summarise key points." },
        { q: "Q2: Extended response -- language analysis", marks: 25, time: "35 mins", notes: "Analyse how language creates effects." },
        { q: "Q3: Summary writing", marks: 15, time: "25 mins", notes: "Concise, own words." },
      ],
    },
    {
      name: "Language Paper 2 -- Directed Writing & Composition (0500)",
      duration: "2 hours",
      total: 50,
      questions: [
        { q: "Q1: Directed writing", marks: 25, time: "45 mins", notes: "Respond to source material in a given form." },
        { q: "Q2: Composition (choice of tasks)", marks: 25, time: "45 mins", notes: "Descriptive or narrative writing." },
      ],
    },
    {
      name: "Literature Paper 1 -- Poetry & Prose (0475)",
      duration: "1 hour 30 minutes",
      total: 50,
      questions: [
        { q: "Poetry question", marks: 25, time: "45 mins", notes: "Extract-based or essay." },
        { q: "Prose question", marks: 25, time: "45 mins", notes: "Extract-based or essay." },
      ],
    },
    {
      name: "Literature Paper 2 -- Drama (0475)",
      duration: "1 hour 30 minutes",
      total: 50,
      questions: [
        { q: "Drama question (passage-based or essay)", marks: 25, time: "45 mins", notes: "Close reference to text." },
        { q: "Drama question (second text)", marks: 25, time: "45 mins", notes: "May be essay or passage-based." },
      ],
    },
  ],
};

const OCR_TIMINGS = {
  board: "OCR",
  colour: "bg-[#2A7DE1]",
  papers: [
    {
      name: "Language Paper 1 -- Communicating Information & Ideas",
      duration: "2 hours",
      total: 80,
      questions: [
        { q: "Section A: Reading (multiple questions)", marks: 40, time: "60 mins", notes: "Comprehension, inference, language analysis." },
        { q: "Section B: Writing (one task)", marks: 40, time: "50 mins", notes: "Transactional writing task." },
      ],
    },
    {
      name: "Language Paper 2 -- Exploring Effects & Impact",
      duration: "2 hours",
      total: 80,
      questions: [
        { q: "Section A: Reading (multiple questions)", marks: 40, time: "55 mins", notes: "Analysis of literary and non-fiction texts." },
        { q: "Section B: Writing (one task)", marks: 40, time: "50 mins", notes: "Creative or imaginative writing." },
      ],
    },
    {
      name: "Literature Paper 1 -- Exploring Modern & Literary Heritage Texts",
      duration: "2 hours",
      total: 80,
      questions: [
        { q: "Modern prose or drama", marks: 40, time: "55 mins", notes: "Extract-based essay." },
        { q: "Literary heritage prose text", marks: 40, time: "55 mins", notes: "Essay response." },
      ],
    },
    {
      name: "Literature Paper 2 -- Exploring Poetry & Shakespeare",
      duration: "2 hours",
      total: 80,
      questions: [
        { q: "Shakespeare extract + essay", marks: 40, time: "55 mins", notes: "Start with extract, then wider text." },
        { q: "Poetry comparison (anthology + unseen)", marks: 40, time: "55 mins", notes: "Compare anthology poem with unseen." },
      ],
    },
  ],
};

const ALL_BOARDS = [AQA_TIMINGS, EDEXCEL_TIMINGS, CAIE_TIMINGS, OCR_TIMINGS];

/* ─── Page ───────────────────────────────────────────────────── */

export default function TimeManagementPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Technique
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Time Management
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Paper-by-paper timing breakdowns for every major exam board. Know
            exactly how long to spend on each question before you walk into the
            exam hall.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="hover:text-primary transition-colors">
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/exam-technique" className="hover:text-primary transition-colors">
              Exam Technique
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-primary">Time Management</li>
        </ol>
      </nav>

      {/* Golden rule */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-accent-100 bg-accent-50/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            The golden rule of exam timing
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            <strong>One mark = approximately one minute.</strong> This simple
            rule works across almost every English exam. A 30-mark question
            deserves about 30 minutes; an 8-mark question deserves about 8-10
            minutes. Use this as your anchor, then adjust slightly to allow for
            reading time and planning.
          </p>
        </div>
      </section>

      {/* Board timings */}
      {ALL_BOARDS.map((board) => (
        <section
          key={board.board}
          className="mx-auto max-w-5xl px-4 pb-12"
          aria-labelledby={`${board.board.toLowerCase()}-heading`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${board.colour}`}
            >
              {board.board === "Cambridge IGCSE"
                ? "CIE"
                : board.board.toUpperCase().slice(0, 3)}
            </span>
            <h2
              id={`${board.board.toLowerCase()}-heading`}
              className="text-2xl font-bold text-foreground"
            >
              {board.board}
            </h2>
          </div>

          <div className="space-y-6">
            {board.papers.map((paper) => (
              <div
                key={paper.name}
                className="rounded-xl border border-border bg-card shadow-md overflow-hidden"
              >
                <div className="bg-muted border-b border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">{paper.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {paper.duration} &middot; {paper.total} marks total
                  </p>
                </div>

                {/* Desktop table */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <th className="px-6 py-3">Question</th>
                        <th className="px-6 py-3">Marks</th>
                        <th className="px-6 py-3">Suggested Time</th>
                        <th className="px-6 py-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {paper.questions.map((q) => (
                        <tr key={q.q} className="hover:bg-muted/50">
                          <td className="px-6 py-3 font-medium text-foreground">
                            {q.q}
                          </td>
                          <td className="px-6 py-3 text-muted-foreground">
                            {q.marks}
                          </td>
                          <td className="px-6 py-3">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground">
                              {q.time}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-muted-foreground">
                            {q.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="sm:hidden divide-y divide-gray-100">
                  {paper.questions.map((q) => (
                    <div key={q.q} className="px-4 py-4 space-y-2">
                      <p className="font-medium text-foreground text-sm">
                        {q.q}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">
                          {q.marks} marks
                        </span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground">
                          {q.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{q.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* How to divide time */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            How to divide time per question
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-foreground">
                Step 1: Calculate your rate
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Divide total exam time (in minutes) by total marks. For most
                English papers, this gives you roughly 1 minute per mark.
                Example: AQA Language Paper 1 is 105 minutes for 80 marks =
                about 1.3 minutes per mark.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-foreground">
                Step 2: Subtract reading time
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Allow 10-15 minutes at the start to read and annotate the
                source texts carefully. This is not wasted time -- it makes
                every answer faster and better. Deduct this from your total
                before dividing.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-foreground">
                Step 3: Add planning time for big questions
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                For any question worth 20+ marks, build in 3-5 minutes of
                planning. A quick bullet-point plan keeps your essay focused
                and prevents you from going off on tangents.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="font-bold text-foreground">
                Step 4: Write target times on the paper
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                At the start of the exam, jot down the time you should finish
                each question next to the question number. For example, if the
                exam starts at 9:00 and Q1 should take 5 minutes, write
                &ldquo;9:05&rdquo; next to Q1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to do if you run out of time */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-foreground">
          What to do if you run out of time
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          It happens. Here is how to salvage the situation and still pick up
          marks.
        </p>

        <div className="mt-8 space-y-4">
          {[
            {
              title: "Do not panic",
              detail:
                "Panicking wastes the little time you have left. Take a breath, assess what is left, and make a plan.",
            },
            {
              title: "Never leave a question blank",
              detail:
                "A blank answer scores zero. Even a few bullet points will pick up some marks. Examiners can only mark what is on the page.",
            },
            {
              title: "Switch to bullet points",
              detail:
                "If you cannot write a full essay, write your key points as clear, analytical bullet points. Include quotations and brief analysis. You will lose some marks for expression, but you will gain marks for content.",
            },
            {
              title: "Prioritise the higher-mark questions",
              detail:
                "If you have 10 minutes left and two questions to do, spend more time on the one worth more marks. A half-finished 30-mark answer is worth more than a complete 8-mark answer.",
            },
            {
              title: "Write a quick conclusion",
              detail:
                "If you are mid-essay and running out of time, write a brief concluding sentence that summarises your argument. This gives your answer a sense of completion.",
            },
            {
              title: "Learn from it",
              detail:
                "After the exam, review where your timing went wrong. In practice papers, enforce strict time limits so this does not happen on the real day.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planning time allocation */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Planning your time allocation
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Use this framework to create a personalised timing plan for any
            English exam paper.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-md">
            <div className="divide-y divide-gray-100">
              {[
                {
                  phase: "Reading time",
                  duration: "10-15 mins",
                  desc: "Read all source texts. Highlight key phrases, interesting language, and structural features. Read the questions so you know what to look for.",
                },
                {
                  phase: "Short questions",
                  duration: "1-1.5 mins per mark",
                  desc: "Answer concisely. Do not over-write. Move on quickly to save time for bigger questions.",
                },
                {
                  phase: "Extended response planning",
                  duration: "3-5 mins per question",
                  desc: "Write a quick plan: thesis statement, 3-4 key points, quotations to use, a concluding idea.",
                },
                {
                  phase: "Extended response writing",
                  duration: "Remaining time per mark",
                  desc: "Write focused paragraphs using your plan. Do not deviate. Keep checking the clock.",
                },
                {
                  phase: "Review and proofread",
                  duration: "Last 5 mins",
                  desc: "Check spelling, punctuation, and grammar. Add any missing analysis. Ensure all questions are attempted.",
                },
              ].map((row) => (
                <div
                  key={row.phase}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 px-6 py-4"
                >
                  <div className="sm:w-48 shrink-0">
                    <span className="font-bold text-foreground">{row.phase}</span>
                    <span className="ml-2 sm:ml-0 sm:mt-1 sm:block text-xs font-semibold text-primary">
                      {row.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 mt-10 mb-6" />
    </>
  );
}
