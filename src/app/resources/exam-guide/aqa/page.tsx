import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "AQA Exam Guide",
  description:
    "Complete AQA GCSE English exam guide. Paper structures, mark allocations, assessment objectives, time management tips, command words, and examiner advice for English Language (8700) and English Literature (8702).",
};

/* ─── Helper components ──────────────────────────────────────── */

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-gray-900 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function PaperCard({
  title,
  subtitle,
  duration,
  totalMarks,
  weighting,
  children,
}: {
  title: string;
  subtitle: string;
  duration: string;
  totalMarks: string;
  weighting: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary-600 px-6 py-4 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{subtitle}</p>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
        <div className="px-4 py-3 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase">
            Duration
          </p>
          <p className="mt-1 text-sm font-bold text-primary">{duration}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase">Marks</p>
          <p className="mt-1 text-sm font-bold text-primary">{totalMarks}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase">
            Weighting
          </p>
          <p className="mt-1 text-sm font-bold text-primary">{weighting}</p>
        </div>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function QuestionRow({
  question,
  marks,
  focus,
  timing,
}: {
  question: string;
  marks: number;
  focus: string;
  timing: string;
}) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-2.5 pr-3 text-sm font-semibold text-primary whitespace-nowrap">
        {question}
      </td>
      <td className="py-2.5 pr-3 text-sm text-gray-700">{focus}</td>
      <td className="py-2.5 pr-3 text-sm font-medium text-gray-900 text-center whitespace-nowrap">
        {marks}
      </td>
      <td className="py-2.5 text-sm text-gray-500 whitespace-nowrap">
        {timing}
      </td>
    </tr>
  );
}

/* ─── Page component ─────────────────────────────────────────── */

export default function AQAExamGuidePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            AQA GCSE English
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete guide to AQA English Language (8700) and English Literature
            (8702). Every paper, every question, every mark -- explained clearly.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources"
              className="hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/exam-guide"
              className="hover:text-primary transition-colors"
            >
              Exam Guide
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-primary">AQA</li>
        </ol>
      </nav>

      {/* Table of contents */}
      <nav className="mx-auto max-w-5xl px-4 py-8" aria-label="On this page">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            On this page
          </p>
          <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
            <li>
              <a href="#lang-paper-1" className="text-accent hover:text-primary transition-colors">
                Language Paper 1
              </a>
            </li>
            <li>
              <a href="#lang-paper-2" className="text-accent hover:text-primary transition-colors">
                Language Paper 2
              </a>
            </li>
            <li>
              <a href="#lit-paper-1" className="text-accent hover:text-primary transition-colors">
                Literature Paper 1
              </a>
            </li>
            <li>
              <a href="#lit-paper-2" className="text-accent hover:text-primary transition-colors">
                Literature Paper 2
              </a>
            </li>
            <li>
              <a href="#assessment-objectives" className="text-accent hover:text-primary transition-colors">
                Assessment Objectives
              </a>
            </li>
            <li>
              <a href="#time-management" className="text-accent hover:text-primary transition-colors">
                Time Management
              </a>
            </li>
            <li>
              <a href="#command-words" className="text-accent hover:text-primary transition-colors">
                Command Words
              </a>
            </li>
            <li>
              <a href="#examiner-tips" className="text-accent hover:text-primary transition-colors">
                Examiner Tips
              </a>
            </li>
            <li>
              <a href="#common-mistakes" className="text-accent hover:text-primary transition-colors">
                Common Mistakes
              </a>
            </li>
            <li>
              <a href="#grade-9" className="text-accent hover:text-primary transition-colors">
                What Makes a Grade 9
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ─── Main content ────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pb-16 space-y-16">
        {/* ─── ENGLISH LANGUAGE ────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">
              Specification 8700
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            English Language
          </h2>
          <p className="mt-2 text-gray-600">
            Two externally examined papers, each worth 50% of the GCSE. Total:
            160 marks. Plus a separate Spoken Language endorsement (Pass /
            Merit / Distinction) reported alongside the grade but not
            contributing to it.
          </p>
        </section>

        {/* Language Paper 1 */}
        <section aria-labelledby="lang-paper-1">
          <SectionHeading id="lang-paper-1">
            Language Paper 1: Explorations in Creative Reading and Writing
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Paper 1"
              subtitle="Explorations in Creative Reading and Writing"
              duration="1h 45m"
              totalMarks="80"
              weighting="50%"
            >
              <p className="text-sm text-gray-600 mb-4">
                One unseen literature fiction text (20th or 21st century). Section
                A tests reading; Section B tests descriptive or narrative writing.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Section A &mdash; Reading (40 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Q
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="Q1"
                      marks={4}
                      focus="List 4 things from a specific part of the text"
                      timing="~5 min"
                    />
                    <QuestionRow
                      question="Q2"
                      marks={8}
                      focus="How does the writer use language to... (analyse language)"
                      timing="~10 min"
                    />
                    <QuestionRow
                      question="Q3"
                      marks={8}
                      focus="How has the writer structured the text to... (analyse structure)"
                      timing="~10 min"
                    />
                    <QuestionRow
                      question="Q4"
                      marks={20}
                      focus="To what extent do you agree with the statement? (evaluate critically)"
                      timing="~20 min"
                    />
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; Writing (40 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Q
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="Q5"
                      marks={40}
                      focus="Descriptive or narrative writing (choice of two tasks, linked to a picture stimulus)"
                      timing="~45 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Q5 marks: 24 for content and organisation (AO5), 16 for
                technical accuracy (AO6).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Language Paper 2 */}
        <section aria-labelledby="lang-paper-2">
          <SectionHeading id="lang-paper-2">
            Language Paper 2: Writers&rsquo; Viewpoints and Perspectives
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Paper 2"
              subtitle="Writers' Viewpoints and Perspectives"
              duration="1h 45m"
              totalMarks="80"
              weighting="50%"
            >
              <p className="text-sm text-gray-600 mb-4">
                Two linked non-fiction texts: one from the 19th century, one from
                the 21st century. Section A tests reading; Section B tests
                writing to present a viewpoint.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Section A &mdash; Reading (40 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Q
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="Q1"
                      marks={4}
                      focus="Choose 4 true statements from a list of 8 (shade boxes)"
                      timing="~5 min"
                    />
                    <QuestionRow
                      question="Q2"
                      marks={8}
                      focus="Write a summary of the differences (or similarities) between the texts"
                      timing="~10 min"
                    />
                    <QuestionRow
                      question="Q3"
                      marks={12}
                      focus="How does the writer use language to... (analyse language in one text)"
                      timing="~12 min"
                    />
                    <QuestionRow
                      question="Q4"
                      marks={16}
                      focus="Compare how the two writers convey their perspectives (compare attitudes and methods)"
                      timing="~20 min"
                    />
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; Writing (40 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Q
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="Q5"
                      marks={40}
                      focus="Writing to present a viewpoint (e.g. article, letter, speech, essay)"
                      timing="~45 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Q5 marks: 24 for content and organisation (AO5), 16 for
                technical accuracy (AO6).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ENGLISH LITERATURE ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">
              Specification 8702
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            English Literature
          </h2>
          <p className="mt-2 text-gray-600">
            Two externally examined papers. Paper 1 is worth 40% and Paper 2 is
            worth 60%. All exams are closed book -- no texts are allowed in the
            exam room. Total: 128 marks.
          </p>
        </section>

        {/* Literature Paper 1 */}
        <section aria-labelledby="lit-paper-1">
          <SectionHeading id="lit-paper-1">
            Literature Paper 1: Shakespeare and the 19th-century novel
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Paper 1"
              subtitle="Shakespeare and the 19th-century novel"
              duration="1h 45m"
              totalMarks="64"
              weighting="40%"
            >
              <p className="text-sm text-gray-600 mb-4">
                Two sections. You answer on the Shakespeare play and the
                19th-century novel you have studied in class.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Section A &mdash; Shakespeare (34 marks, inc. 4 for SPaG)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Task
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="1 part"
                      marks={34}
                      focus="Extract-based question: how does Shakespeare present [theme/character]? Write about the extract and the play as a whole."
                      timing="~55 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                30 marks for the essay + 4 marks for SPaG (spelling, punctuation
                and grammar).
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; 19th-century novel (30 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Task
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="1 part"
                      marks={30}
                      focus="Extract-based question: how does the author present [theme/character]? Write about the extract and the novel as a whole."
                      timing="~50 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set texts include: A Christmas Carol, Great Expectations, Jane
                Eyre, Frankenstein, Pride and Prejudice, The Sign of Four, The
                Strange Case of Dr Jekyll and Mr Hyde.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Literature Paper 2 */}
        <section aria-labelledby="lit-paper-2">
          <SectionHeading id="lit-paper-2">
            Literature Paper 2: Modern texts and poetry
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Paper 2"
              subtitle="Modern texts and poetry"
              duration="2h 15m"
              totalMarks="96"
              weighting="60%"
            >
              <p className="text-sm text-gray-600 mb-4">
                Three sections covering a modern prose or drama text, the poetry
                anthology, and unseen poetry.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Section A &mdash; Modern prose or drama (34 marks, inc. 4 for SPaG)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Task
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="1 part"
                      marks={34}
                      focus="Essay question on how a theme or character is presented in your studied modern text (no extract given)"
                      timing="~45 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set texts include: An Inspector Calls, Blood Brothers, The
                History Boys, DNA, Lord of the Flies, Animal Farm, Never Let Me
                Go, Pigeon English, A Taste of Honey.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; Poetry anthology (30 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Task
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="1 part"
                      marks={30}
                      focus="Compare one named poem from the anthology with another poem of your choice on a shared theme"
                      timing="~45 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Clusters: Power and Conflict or Love and Relationships. One poem
                is printed; you choose the second poem to compare it with.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section C &mdash; Unseen poetry (32 marks)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Task
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">
                        Focus
                      </th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">
                        Marks
                      </th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">
                        Suggested time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow
                      question="Part 1"
                      marks={24}
                      focus="Analyse how the poet presents ideas/feelings in one unseen poem"
                      timing="~30 min"
                    />
                    <QuestionRow
                      question="Part 2"
                      marks={8}
                      focus="Compare methods used in the first poem with a second unseen poem"
                      timing="~15 min"
                    />
                  </tbody>
                </table>
              </div>
            </PaperCard>
          </div>
        </section>

        {/* ─── ASSESSMENT OBJECTIVES ────────────────────────────── */}
        <section aria-labelledby="assessment-objectives">
          <SectionHeading id="assessment-objectives">
            Assessment Objectives
          </SectionHeading>
          <p className="mt-3 text-gray-600">
            AQA assesses against four objectives per subject. Understanding
            these is essential -- the examiners literally mark against these
            criteria.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Language AOs */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">
                English Language AOs
              </h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO1 &mdash; Identify and interpret
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Identify and interpret explicit and implicit information and
                    ideas. Select and synthesise evidence from different texts.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO2 &mdash; Analyse language and structure
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Explain, comment on and analyse how writers use language and
                    structure to achieve effects and influence readers, using
                    relevant subject terminology.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO3 &mdash; Compare writers&rsquo; ideas
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Compare writers&rsquo; ideas and perspectives, as well as
                    how these are conveyed, across two or more texts.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO4 &mdash; Evaluate critically
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Evaluate texts critically and support this with appropriate
                    textual references. Used in Paper 1 Q4.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO5 &mdash; Content and organisation
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Communicate clearly, effectively and imaginatively, selecting
                    and adapting tone, style and register. Organise information
                    using structural and grammatical features.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO6 &mdash; Technical accuracy
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Use a range of vocabulary and sentence structures for clarity,
                    purpose and effect, with accurate spelling and punctuation.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Literature AOs */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">
                English Literature AOs
              </h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO1 &mdash; Informed personal response
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Read, understand and respond to texts. Maintain a critical
                    style and develop an informed personal response. Use textual
                    references, including quotations, to support and illustrate
                    interpretations.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO2 &mdash; Analyse language, form and structure
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Analyse the language, form and structure used by a writer to
                    create meanings and effects, using relevant subject
                    terminology where appropriate.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO3 &mdash; Contexts
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Show understanding of the relationships between texts and
                    the contexts in which they were written (historical, social,
                    cultural).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO4 &mdash; Comparison
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Use a range of vocabulary and sentence structures for
                    clarity, purpose and effect with accurate spelling and
                    punctuation. (Applied to Shakespeare and modern text SPaG
                    marks.)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ─── TIME MANAGEMENT ──────────────────────────────────── */}
        <section aria-labelledby="time-management">
          <SectionHeading id="time-management">
            Time Management Tips
          </SectionHeading>
          <p className="mt-3 text-gray-600">
            Time pressure is one of the biggest causes of lost marks. These
            recommended timings are based on marks available and examiner
            guidance.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Language Paper 1 (1h 45m)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Reading the source text</span>
                  <span className="font-semibold text-primary">15 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q1 (4 marks)</span>
                  <span className="font-semibold text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q2 (8 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q3 (8 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q4 (20 marks)</span>
                  <span className="font-semibold text-primary">20 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q5 (40 marks)</span>
                  <span className="font-semibold text-primary">45 min</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Language Paper 2 (1h 45m)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Reading both source texts</span>
                  <span className="font-semibold text-primary">15 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q1 (4 marks)</span>
                  <span className="font-semibold text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q2 (8 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q3 (12 marks)</span>
                  <span className="font-semibold text-primary">12 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q4 (16 marks)</span>
                  <span className="font-semibold text-primary">20 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Q5 (40 marks)</span>
                  <span className="font-semibold text-primary">45 min</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Literature Paper 1 (1h 45m)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Shakespeare (34 marks)</span>
                  <span className="font-semibold text-primary">55 min</span>
                </li>
                <li className="flex justify-between">
                  <span>19th-century novel (30 marks)</span>
                  <span className="font-semibold text-primary">50 min</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Literature Paper 2 (2h 15m)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Modern text (34 marks)</span>
                  <span className="font-semibold text-primary">45 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Poetry anthology (30 marks)</span>
                  <span className="font-semibold text-primary">45 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Unseen poetry (32 marks)</span>
                  <span className="font-semibold text-primary">45 min</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── COMMAND WORDS ────────────────────────────────────── */}
        <section aria-labelledby="command-words">
          <SectionHeading id="command-words">
            Command Words Explained
          </SectionHeading>
          <p className="mt-3 text-gray-600">
            Understanding exactly what the question is asking you to do is
            half the battle. Here are the key command words used across AQA
            English papers.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                word: "How does the writer use language to...",
                meaning:
                  "Identify specific language features (words, phrases, techniques) and explain the effect they create. You must use subject terminology and link back to the focus of the question.",
                papers: "Lang P1 Q2, Lang P2 Q3",
              },
              {
                word: "How has the writer structured the text to...",
                meaning:
                  "Look at the whole text and explain how the writer has organised it (opening, development, shifts in focus, ending). Consider structural features like narrative perspective, sentence length, paragraph structure, and focus shifts.",
                papers: "Lang P1 Q3",
              },
              {
                word: "To what extent do you agree...",
                meaning:
                  "Give a critical evaluation. You can agree, disagree, or partially agree, but you must support your view with evidence from the text. Show you have considered the statement carefully.",
                papers: "Lang P1 Q4",
              },
              {
                word: "Compare",
                meaning:
                  "Identify similarities and differences between two texts or poems. You must write about both texts throughout your answer, not one then the other. Use comparative connectives (similarly, whereas, in contrast, both writers).",
                papers: "Lang P2 Q4, Lit P2 Sec B",
              },
              {
                word: "Analyse",
                meaning:
                  "Examine something in close detail. Break down the writer's choices and explain why they made them and what effect they create. Go beyond identification -- explain the how and why.",
                papers: "All papers",
              },
              {
                word: "Evaluate",
                meaning:
                  "Make a judgement about the effectiveness of a text or technique. Support your judgement with evidence and explain your reasoning. Use evaluative language (effectively, convincingly, successfully).",
                papers: "Lang P1 Q4",
              },
              {
                word: "How does [author] present...",
                meaning:
                  "The most common Literature command. Discuss the methods (language, structure, form, context) the writer uses to present a character, theme, or idea. Write about the extract AND the wider text.",
                papers: "Lit P1 & P2",
              },
              {
                word: "Starting with this extract...",
                meaning:
                  "Begin your answer by analysing the given extract in detail, then broaden out to discuss the rest of the text. Aim for roughly equal coverage of the extract and the wider text.",
                papers: "Lit P1",
              },
            ].map((item) => (
              <div
                key={item.word}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-gray-900">
                    &ldquo;{item.word}&rdquo;
                  </h3>
                  <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-600">
                    {item.papers}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── EXAMINER TIPS ────────────────────────────────────── */}
        <section aria-labelledby="examiner-tips">
          <SectionHeading id="examiner-tips">
            What Examiners Are Looking For
          </SectionHeading>
          <p className="mt-3 text-gray-600">
            Based on published AQA examiner reports, these are the qualities
            that distinguish top-band responses.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Perceptive analysis, not feature-spotting",
                detail:
                  "Examiners consistently report that weaker answers identify techniques without explaining their effect. Strong answers explore why the writer chose that specific word or structure and how it shapes the reader's response.",
              },
              {
                title: "Embedded, well-chosen quotations",
                detail:
                  "Short, integrated quotations woven into your sentences are far more effective than long, copied-out passages. Aim for single words or short phrases that you can analyse closely.",
              },
              {
                title: "Conceptualised responses",
                detail:
                  "The highest marks go to students who explore ideas and concepts rather than simply working through the text line by line. Show you understand the bigger picture.",
              },
              {
                title: "Subject terminology used accurately",
                detail:
                  "Use literary terms only when you can explain their effect. Dropping in terms like 'pathetic fallacy' or 'sibilance' without analysis adds nothing. Using them precisely and analytically is rewarded.",
              },
              {
                title: "Sustained comparison (Literature)",
                detail:
                  "In comparison questions, examiners want to see both texts discussed together throughout, not 'text A then text B'. Use comparative connectives to weave your analysis together.",
              },
              {
                title: "Varied and ambitious vocabulary (Writing)",
                detail:
                  "In writing tasks, examiners reward varied sentence structures, precise vocabulary, and deliberate choices. Avoid cliches. Use sensory detail in creative writing and rhetorical devices in argumentative writing.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                <h3 className="font-bold text-gray-900">{tip.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── COMMON MISTAKES ──────────────────────────────────── */}
        <section aria-labelledby="common-mistakes">
          <SectionHeading id="common-mistakes">
            Common Mistakes to Avoid
          </SectionHeading>

          <div className="mt-6 rounded-xl border border-warn-100 bg-warn-50/50 p-6">
            <ul className="space-y-4 text-gray-700">
              {[
                {
                  mistake: "Running out of time on the writing question",
                  fix: "Q5 is worth 40 marks (half the paper). Stick rigidly to your time plan and leave 45 minutes for writing.",
                },
                {
                  mistake: "Retelling the story instead of analysing",
                  fix: "Especially in Literature. Examiners call this 'narrative' rather than 'analytical'. Always focus on how and why the writer makes choices, not what happens.",
                },
                {
                  mistake: "Not answering the question set",
                  fix: "Read the question twice. Underline the key words. Every paragraph should link back to the specific focus of the question.",
                },
                {
                  mistake: "Writing 'the writer uses a metaphor' without explaining its effect",
                  fix: "Identification alone gets minimal marks. Always follow up with: what effect does it create? What does it suggest? How does the reader respond?",
                },
                {
                  mistake: "Ignoring the 19th-century text in Paper 2",
                  fix: "Students often struggle with older texts and skip or rush them. Practise reading 19th-century non-fiction before the exam.",
                },
                {
                  mistake: "Not planning creative writing",
                  fix: "Spending 5 minutes planning your Q5 response leads to a more coherent, well-structured piece. Examiners can tell when writing is unplanned.",
                },
                {
                  mistake: "Writing too much for low-mark questions",
                  fix: "Q1 (4 marks) needs only 4 short points. Do not write a paragraph for each one. Proportional effort is key.",
                },
                {
                  mistake: "Forgetting context in Literature essays",
                  fix: "AO3 requires you to show understanding of historical, social and cultural context. Weave it naturally into your analysis -- do not bolt it on as a separate paragraph.",
                },
              ].map((item) => (
                <li key={item.mistake} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warn-100 text-warn-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.mistake}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{item.fix}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── GRADE 9 ──────────────────────────────────────────── */}
        <section aria-labelledby="grade-9">
          <SectionHeading id="grade-9">
            What Makes a Grade 9 Response
          </SectionHeading>
          <p className="mt-3 text-gray-600">
            Grade 9 is the very highest grade. Only a small percentage of
            students achieve it. Here is what separates a Grade 9 from a Grade
            7 or 8, based on AQA mark schemes and examiner commentary.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Language</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Perceptive, detailed analysis:</strong> You go beyond explaining what a technique does and explore nuanced layers of meaning, connotation, and ambiguity in the writer&rsquo;s choices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Convincing evaluation:</strong> In Q4 (Paper 1) you offer a sophisticated, personal judgement with carefully selected evidence, considering alternative readings of the text.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Compelling, crafted writing:</strong> Your Q5 response is not just technically accurate -- it is deliberately shaped, with controlled pace, varied sentence structures, and imaginative vocabulary that creates a strong effect on the reader.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Consistent quality:</strong> Grade 9 students sustain their analytical depth and writing quality across the entire paper, not just in one answer.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Critical, conceptualised response:</strong> You explore ideas and concepts (e.g. power, guilt, social class) rather than working through the text chronologically. Your argument is structured around a clear thesis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Judicious use of precise references:</strong> You select the most telling quotations -- often single words -- and analyse them with depth, exploring multiple layers of meaning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Context integrated seamlessly:</strong> You weave historical, social, and cultural context into your analysis so it illuminates the writer&rsquo;s intentions rather than sitting as a separate paragraph.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Alternative interpretations:</strong> You consider how different readers (or audiences) might respond to the text, showing awareness that texts can be read in multiple ways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Whole-text knowledge:</strong> You range confidently across the entire text, selecting moments from different parts to build your argument, rather than relying only on the given extract.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-8 text-center text-white">
          <h2 className="text-2xl font-bold">
            Ready to practise?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Now you know the exam inside and out, put your knowledge into
            practice with AI-powered essay feedback.
          </p>
          <Link
            href="/dashboard/essay/new"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100 transition-colors"
          >
            Write a practice essay
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-4" />
      </div>

    </>
  );
}
