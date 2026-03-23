import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "WJEC Eduqas Exam Guide",
  description:
    "Complete WJEC Eduqas GCSE English exam guide. Component structures, mark allocations, assessment objectives, time management tips, command words, and examiner advice for English Language (C700U) and English Literature (C720U).",
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

export default function WJECExamGuidePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            WJEC Eduqas GCSE English
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete guide to WJEC Eduqas English Language (C700U) and English
            Literature (C720U). Every component, every question, every mark
            -- explained clearly.
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
          <li className="font-medium text-primary">WJEC Eduqas</li>
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
              <a href="#lang-comp-1" className="text-accent hover:text-primary transition-colors">
                Language Component 1
              </a>
            </li>
            <li>
              <a href="#lang-comp-2" className="text-accent hover:text-primary transition-colors">
                Language Component 2
              </a>
            </li>
            <li>
              <a href="#lit-comp-1" className="text-accent hover:text-primary transition-colors">
                Literature Component 1
              </a>
            </li>
            <li>
              <a href="#lit-comp-2" className="text-accent hover:text-primary transition-colors">
                Literature Component 2
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
              Specification C700U
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            English Language
          </h2>
          <p className="mt-2 text-gray-600">
            Two externally examined components. Component 1 is worth 40% and
            Component 2 is worth 60% of the GCSE. Total: 160 marks. Plus a
            separate Spoken Language endorsement (Pass / Merit / Distinction)
            reported alongside the grade but not contributing to it.
          </p>
        </section>

        {/* Language Component 1 */}
        <section aria-labelledby="lang-comp-1">
          <SectionHeading id="lang-comp-1">
            Language Component 1: 20th Century Literature Reading and Creative
            Prose Writing
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Component 1"
              subtitle="20th Century Literature Reading and Creative Prose Writing"
              duration="1h 45m"
              totalMarks="80"
              weighting="40%"
            >
              <p className="text-sm text-gray-600 mb-4">
                One extract from a 20th century literary prose text. Section A
                tests reading comprehension and analysis; Section B tests
                creative prose writing. The extract is previously unseen.
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
                      question="A1"
                      marks={5}
                      focus="Read and retrieve key information from a specified section of the text (5 x 1-mark responses)"
                      timing="~5 min"
                    />
                    <QuestionRow
                      question="A2"
                      marks={5}
                      focus="Select and interpret implicit meanings from specific lines in the text"
                      timing="~5 min"
                    />
                    <QuestionRow
                      question="A3"
                      marks={10}
                      focus="Analyse how the writer uses language to create effects (close language analysis)"
                      timing="~10 min"
                    />
                    <QuestionRow
                      question="A4"
                      marks={10}
                      focus="Comment on what a specific part of the text suggests about a character/relationship/mood, considering the whole extract"
                      timing="~10 min"
                    />
                    <QuestionRow
                      question="A5"
                      marks={10}
                      focus="Evaluate how successfully the writer achieves an effect, giving a personal response supported by references"
                      timing="~10 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                A1 and A2 test AO1 (retrieval and inference). A3 tests AO2
                (language analysis). A4 tests AO1 and AO2. A5 tests AO4
                (critical evaluation).
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; Creative Prose Writing (40 marks)
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
                      question="B1"
                      marks={40}
                      focus="Creative prose writing: choice of four titles/prompts. Write one narrative or descriptive piece."
                      timing="~45 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                B1 marks: 24 for communication and organisation (AO5), 16 for
                vocabulary, sentence structure, spelling and punctuation (AO6).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Language Component 2 */}
        <section aria-labelledby="lang-comp-2">
          <SectionHeading id="lang-comp-2">
            Language Component 2: 19th and 21st Century Non-Fiction Reading and
            Transactional/Persuasive Writing
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Component 2"
              subtitle="19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing"
              duration="2h"
              totalMarks="80"
              weighting="60%"
            >
              <p className="text-sm text-gray-600 mb-4">
                Two unseen non-fiction texts: one from the 19th century and one
                from the 21st century, linked by theme. Section A tests reading;
                Section B tests transactional and persuasive writing. You answer
                both writing tasks.
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
                      question="A1"
                      marks={5}
                      focus="Retrieve key information from the 21st century text (5 x 1-mark responses)"
                      timing="~5 min"
                    />
                    <QuestionRow
                      question="A2"
                      marks={5}
                      focus="Summarise differences or similarities between the two texts on a given focus"
                      timing="~8 min"
                    />
                    <QuestionRow
                      question="A3"
                      marks={10}
                      focus="Analyse how the writer of one text uses language to achieve effects"
                      timing="~10 min"
                    />
                    <QuestionRow
                      question="A4"
                      marks={10}
                      focus="Compare the writers' use of language and/or structural features to present their viewpoints"
                      timing="~12 min"
                    />
                    <QuestionRow
                      question="A5"
                      marks={10}
                      focus="Evaluate how successfully one writer conveys their point of view to the reader"
                      timing="~10 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                A1 tests AO1. A2 tests AO1 (synthesis). A3 tests AO2. A4 tests
                AO3 (comparison). A5 tests AO4 (evaluation).
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; Transactional/Persuasive Writing (40 marks)
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
                      question="B1"
                      marks={20}
                      focus="Transactional/persuasive writing task 1 (e.g. letter, article, review, speech, report, guide)"
                      timing="~20 min"
                    />
                    <QuestionRow
                      question="B2"
                      marks={20}
                      focus="Transactional/persuasive writing task 2 (different form from B1)"
                      timing="~20 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Each writing task: 12 marks for communication and organisation
                (AO5), 8 marks for vocabulary, sentence structure, spelling and
                punctuation (AO6). You must answer both tasks.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ENGLISH LITERATURE ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">
              Specification C720U
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            English Literature
          </h2>
          <p className="mt-2 text-gray-600">
            Two externally examined components. Component 1 is worth 40% and
            Component 2 is worth 60%. All exams are closed book -- no texts are
            allowed in the exam room except for the Poetry Anthology (a clean
            copy is provided). Total: 160 marks.
          </p>
        </section>

        {/* Literature Component 1 */}
        <section aria-labelledby="lit-comp-1">
          <SectionHeading id="lit-comp-1">
            Literature Component 1: Shakespeare and Poetry
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Component 1"
              subtitle="Shakespeare and Poetry"
              duration="2h"
              totalMarks="80"
              weighting="40%"
            >
              <p className="text-sm text-gray-600 mb-4">
                Two sections. Section A covers your studied Shakespeare play;
                Section B covers poetry from the WJEC Eduqas Poetry Anthology (a
                clean copy of the anthology is provided in the exam).
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Section A &mdash; Shakespeare (40 marks)
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
                      question="Part (a)"
                      marks={15}
                      focus="Extract-based question: analyse how a character/theme/relationship is presented in the given extract"
                      timing="~20 min"
                    />
                    <QuestionRow
                      question="Part (b)"
                      marks={25}
                      focus="Essay question: discuss how the same character/theme is presented in the play as a whole (beyond the extract)"
                      timing="~35 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Part (a) assesses AO1 and AO2. Part (b) assesses AO1, AO2 and
                AO3 (context). 5 marks for AO1, 5 for AO2, 5 for AO3 in
                part (b). Set texts include: Macbeth, Romeo and Juliet, Othello,
                Much Ado About Nothing, The Merchant of Venice, Henry V.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; Poetry (40 marks)
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
                      question="Part (a)"
                      marks={20}
                      focus="Analyse one named poem from the anthology: how does the poet present ideas about [theme]?"
                      timing="~25 min"
                    />
                    <QuestionRow
                      question="Part (b)"
                      marks={20}
                      focus="Choose one other poem from the anthology and compare how both poets present ideas about the same theme"
                      timing="~25 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Part (a) assesses AO1 and AO2. Part (b) assesses AO1, AO2 and
                AO4 (comparison). A clean copy of the anthology is provided in
                the exam.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Literature Component 2 */}
        <section aria-labelledby="lit-comp-2">
          <SectionHeading id="lit-comp-2">
            Literature Component 2: Post-1914 Prose/Drama, 19th Century Prose
            and Unseen Poetry
          </SectionHeading>

          <div className="mt-6">
            <PaperCard
              title="Component 2"
              subtitle="Post-1914 Prose/Drama, 19th Century Prose, Unseen Poetry"
              duration="2h 30m"
              totalMarks="80"
              weighting="60%"
            >
              <p className="text-sm text-gray-600 mb-4">
                Three sections covering a post-1914 prose or drama text, a 19th
                century prose text, and unseen poetry. All sections are closed
                book.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Section A &mdash; Post-1914 Prose/Drama (20 marks)
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
                      marks={20}
                      focus="Extract-based question: how does the writer present [theme/character]? Write about the extract and the text as a whole."
                      timing="~35 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Assesses AO1, AO2, and AO4 (evaluation). Set texts include: An
                Inspector Calls, Blood Brothers, A Taste of Honey, The Woman in
                Black, Lord of the Flies, Animal Farm, Never Let Me Go, Anita
                and Me, About a Boy.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section B &mdash; 19th Century Prose (20 marks)
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
                      marks={20}
                      focus="Extract-based question: how does the writer present [theme/character]? Write about the extract and the novel as a whole."
                      timing="~35 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Assesses AO1, AO2, and AO3 (context). Set texts include: A
                Christmas Carol, Great Expectations, Jane Eyre, The Strange Case
                of Dr Jekyll and Mr Hyde, Silas Marner, Pride and Prejudice, The
                War of the Worlds.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">
                Section C &mdash; Unseen Poetry (40 marks)
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
                      question="Part (a)"
                      marks={20}
                      focus="Analyse how the poet conveys ideas/feelings in one unseen poem"
                      timing="~25 min"
                    />
                    <QuestionRow
                      question="Part (b)"
                      marks={20}
                      focus="Compare methods used in the first unseen poem with a second unseen poem"
                      timing="~25 min"
                    />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Part (a) assesses AO1 and AO2. Part (b) assesses AO1, AO2
                and AO4 (comparison). Unseen poetry carries significant weight
                in this component -- do not neglect it.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ASSESSMENT OBJECTIVES ────────────────────────────── */}
        <section aria-labelledby="assessment-objectives">
          <SectionHeading id="assessment-objectives">
            Assessment Objectives
          </SectionHeading>
          <p className="mt-3 text-gray-600">
            WJEC Eduqas assesses against the same national assessment objectives
            as all English exam boards. Understanding these is essential -- the
            examiners literally mark against these criteria.
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
                    textual references. Used in Component 1 A5 and Component 2
                    A5.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO5 &mdash; Communication and organisation
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
                    Use a range of vocabulary and sentence structures for
                    clarity, purpose and effect, with accurate spelling and
                    punctuation.
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
                    cultural). Assessed in Shakespeare Part (b) and 19th Century
                    Prose.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">
                    AO4 &mdash; Comparison
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">
                    Compare and contrast texts, considering the ways in which
                    meaning is conveyed. Assessed in Poetry Part (b) and Unseen
                    Poetry Part (b).
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
                Language Component 1 (1h 45m)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Reading the extract</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A1 (5 marks)</span>
                  <span className="font-semibold text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A2 (5 marks)</span>
                  <span className="font-semibold text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A3 (10 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A4 (10 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A5 (10 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>B1 &mdash; Creative writing (40 marks)</span>
                  <span className="font-semibold text-primary">45 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Checking and proofreading</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Language Component 2 (2h)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Reading both texts</span>
                  <span className="font-semibold text-primary">15 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A1 (5 marks)</span>
                  <span className="font-semibold text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A2 (5 marks)</span>
                  <span className="font-semibold text-primary">8 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A3 (10 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A4 (10 marks)</span>
                  <span className="font-semibold text-primary">12 min</span>
                </li>
                <li className="flex justify-between">
                  <span>A5 (10 marks)</span>
                  <span className="font-semibold text-primary">10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>B1 (20 marks)</span>
                  <span className="font-semibold text-primary">20 min</span>
                </li>
                <li className="flex justify-between">
                  <span>B2 (20 marks)</span>
                  <span className="font-semibold text-primary">20 min</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Literature Component 1 (2h)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Shakespeare Part (a) (15 marks)</span>
                  <span className="font-semibold text-primary">20 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Shakespeare Part (b) (25 marks)</span>
                  <span className="font-semibold text-primary">35 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Poetry Part (a) (20 marks)</span>
                  <span className="font-semibold text-primary">25 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Poetry Part (b) (20 marks)</span>
                  <span className="font-semibold text-primary">25 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Checking and review</span>
                  <span className="font-semibold text-primary">15 min</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                Literature Component 2 (2h 30m)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>Post-1914 Prose/Drama (20 marks)</span>
                  <span className="font-semibold text-primary">35 min</span>
                </li>
                <li className="flex justify-between">
                  <span>19th Century Prose (20 marks)</span>
                  <span className="font-semibold text-primary">35 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Unseen Poetry Part (a) (20 marks)</span>
                  <span className="font-semibold text-primary">25 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Unseen Poetry Part (b) (20 marks)</span>
                  <span className="font-semibold text-primary">25 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Checking and review</span>
                  <span className="font-semibold text-primary">10 min</span>
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
            half the battle. Here are the key command words used across WJEC
            Eduqas English papers.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                word: "How does the writer use language to...",
                meaning:
                  "Identify specific language features (words, phrases, techniques) and explain the effect they create. You must use subject terminology and link back to the focus of the question. This is the core analytical question in both Language components.",
                papers: "Lang C1 A3, Lang C2 A3",
              },
              {
                word: "What does [part of the text] suggest about...",
                meaning:
                  "Go beyond the surface meaning. Explain what the writer implies about a character, mood, or relationship. Support your ideas with evidence from the text and explore inferences.",
                papers: "Lang C1 A4",
              },
              {
                word: "To what extent do you agree...",
                meaning:
                  "Give a critical evaluation. You can agree, disagree, or partially agree, but you must support your view with evidence from the text. Show you have considered the statement carefully and engaged personally.",
                papers: "Lang C1 A5, Lang C2 A5",
              },
              {
                word: "Compare",
                meaning:
                  "Identify similarities and differences between two texts or poems. You must write about both texts throughout your answer, not one then the other. Use comparative connectives (similarly, whereas, in contrast, both writers).",
                papers: "Lang C2 A4, Lit C1 Poetry (b), Lit C2 Unseen (b)",
              },
              {
                word: "Analyse",
                meaning:
                  "Examine something in close detail. Break down the writer's choices and explain why they made them and what effect they create. Go beyond identification -- explain the how and why.",
                papers: "All components",
              },
              {
                word: "How does [author] present...",
                meaning:
                  "The most common Literature command. Discuss the methods (language, structure, form, context) the writer uses to present a character, theme, or idea. Write about the extract AND the wider text where required.",
                papers: "Lit C1 & C2",
              },
              {
                word: "You should use the extract as a starting point...",
                meaning:
                  "Begin by analysing the given extract in detail, then broaden out to discuss the rest of the text. In WJEC Eduqas, the (a) and (b) split often handles this -- (a) is the extract, (b) is the wider text.",
                papers: "Lit C1 Shakespeare, Lit C2 Sec A & B",
              },
              {
                word: "Summarise the differences...",
                meaning:
                  "Identify key differences between the two texts on a specific focus. Use evidence from both texts and make clear, direct comparisons. Keep it concise -- this is synthesis, not detailed analysis.",
                papers: "Lang C2 A2",
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
            Based on published WJEC Eduqas examiner reports, these are the
            qualities that distinguish top-band responses.
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
                title: "Engaged personal response (evaluation questions)",
                detail:
                  "In A5 questions, WJEC Eduqas rewards genuine personal engagement with the text. Do not just identify techniques -- explain how effectively they work and whether you find them convincing.",
              },
              {
                title: "Subject terminology used accurately",
                detail:
                  "Use literary terms only when you can explain their effect. Dropping in terms like 'pathetic fallacy' or 'sibilance' without analysis adds nothing. Using them precisely and analytically is rewarded.",
              },
              {
                title: "Sustained comparison throughout",
                detail:
                  "In comparison questions (Component 2 Language A4, Poetry Part (b), Unseen Poetry Part (b)), examiners want to see both texts discussed together, not 'text A then text B'. Weave your analysis together with comparative connectives.",
              },
              {
                title: "Awareness of form and audience in writing tasks",
                detail:
                  "In Component 2 writing, examiners specifically reward understanding of the form you are writing in (letter, article, speech, review). Match your tone, structure, and conventions to the form.",
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
                  mistake: "Spending too long on low-mark reading questions",
                  fix: "A1 (5 marks) needs only five brief points. Do not write full paragraphs for 1-mark retrieval questions. Match your effort to the marks available.",
                },
                {
                  mistake: "Retelling the story instead of analysing",
                  fix: "Especially in Literature. Examiners call this 'narrative' rather than 'analytical'. Always focus on how and why the writer makes choices, not what happens.",
                },
                {
                  mistake: "Only writing about the extract in Literature",
                  fix: "WJEC Eduqas Literature questions often require you to write about the extract AND the wider text. Part (b) in Shakespeare specifically asks for the play as a whole -- do not just repeat the extract.",
                },
                {
                  mistake: "Writing 'the writer uses a metaphor' without explaining its effect",
                  fix: "Identification alone gets minimal marks. Always follow up with: what effect does it create? What does it suggest? How does the reader respond?",
                },
                {
                  mistake: "Not answering both writing tasks in Component 2",
                  fix: "Component 2 Language has two writing tasks (B1 and B2), each worth 20 marks. Some students only answer one, losing 20 marks immediately. Budget your time to complete both.",
                },
                {
                  mistake: "Not planning creative writing",
                  fix: "Spending 5 minutes planning your B1 creative writing response leads to a more coherent, well-structured piece. Examiners can tell when writing is unplanned.",
                },
                {
                  mistake: "Ignoring the 19th century text in Component 2 reading",
                  fix: "Students often struggle with older texts and skip or rush them. Practise reading 19th century non-fiction before the exam to build confidence.",
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
            7 or 8, based on WJEC Eduqas mark schemes and examiner commentary.
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
                  <span><strong>Convincing evaluation:</strong> In A5 questions you offer a sophisticated, personal judgement with carefully selected evidence, considering alternative readings of the text and engaging with the writer&rsquo;s craft.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Compelling, crafted writing:</strong> Your creative prose is not just technically accurate -- it is deliberately shaped, with controlled pace, varied sentence structures, and imaginative vocabulary that creates a strong effect on the reader.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Confident transactional writing:</strong> In Component 2 writing, you demonstrate a sophisticated command of form, audience, and purpose. Your writing is persuasive, engaging, and structurally polished.</span>
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
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sophisticated comparison in poetry:</strong> In Poetry Part (b) and Unseen Poetry Part (b), you compare methods and ideas in an integrated way, showing how both poets achieve similar or contrasting effects through different techniques.</span>
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
