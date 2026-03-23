import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cambridge IGCSE Exam Guide",
  description:
    "Complete Cambridge IGCSE English exam guide. Paper structures, mark allocations, assessment objectives, time management tips, and examiner advice for English Language (0500/0990) and English Literature (0475/0992).",
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
    <h2 id={id} className="text-2xl font-bold text-gray-900 scroll-mt-24">
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
          <p className="text-xs font-semibold text-gray-400 uppercase">Duration</p>
          <p className="mt-1 text-sm font-bold text-primary">{duration}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase">Marks</p>
          <p className="mt-1 text-sm font-bold text-primary">{totalMarks}</p>
        </div>
        <div className="px-4 py-3 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase">Weighting</p>
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
      <td className="py-2.5 pr-3 text-sm font-semibold text-primary whitespace-nowrap">{question}</td>
      <td className="py-2.5 pr-3 text-sm text-gray-700">{focus}</td>
      <td className="py-2.5 pr-3 text-sm font-medium text-gray-900 text-center whitespace-nowrap">{marks}</td>
      <td className="py-2.5 text-sm text-gray-500 whitespace-nowrap">{timing}</td>
    </tr>
  );
}

/* ─── Page component ─────────────────────────────────────────── */

export default function CAIEExamGuidePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Cambridge IGCSE English
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete guide to Cambridge IGCSE English Language (0500/0990) and
            English Literature (0475/0992). Covers both Core and Extended tiers.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/exam-guide" className="hover:text-primary transition-colors">Exam Guide</Link></li>
          <li>/</li>
          <li className="font-medium text-primary">Cambridge IGCSE</li>
        </ol>
      </nav>

      {/* Table of contents */}
      <nav className="mx-auto max-w-5xl px-4 py-8" aria-label="On this page">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">On this page</p>
          <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
            <li><a href="#lang-paper-1" className="text-accent hover:text-primary transition-colors">Language Paper 1 (Reading)</a></li>
            <li><a href="#lang-paper-2" className="text-accent hover:text-primary transition-colors">Language Paper 2 (Writing)</a></li>
            <li><a href="#lang-paper-3" className="text-accent hover:text-primary transition-colors">Language Paper 3 (Directed Writing &amp; Composition)</a></li>
            <li><a href="#lit-poetry" className="text-accent hover:text-primary transition-colors">Literature: Poetry &amp; Prose</a></li>
            <li><a href="#lit-drama" className="text-accent hover:text-primary transition-colors">Literature: Drama</a></li>
            <li><a href="#assessment-objectives" className="text-accent hover:text-primary transition-colors">Assessment Objectives</a></li>
            <li><a href="#time-management" className="text-accent hover:text-primary transition-colors">Time Management</a></li>
            <li><a href="#command-words" className="text-accent hover:text-primary transition-colors">Command Words</a></li>
            <li><a href="#examiner-tips" className="text-accent hover:text-primary transition-colors">Examiner Tips</a></li>
            <li><a href="#common-mistakes" className="text-accent hover:text-primary transition-colors">Common Mistakes</a></li>
            <li><a href="#grade-9" className="text-accent hover:text-primary transition-colors">What Makes a Grade 9 / A*</a></li>
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4 pb-16 space-y-16">
        {/* ─── Important note about routes ──────────────────────── */}
        <section>
          <div className="rounded-xl border border-accent-200 bg-accent-50/50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Important: Cambridge IGCSE has multiple routes</h2>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>
                Cambridge IGCSE English Language offers two syllabuses: <strong>0500</strong> (English as a First Language) and <strong>0990</strong> (the UK-regulated version of 0500). Both have the same content, but 0990 is graded 9-1 for UK schools.
              </p>
              <p>
                Cambridge IGCSE English Literature: <strong>0475</strong> (international) and <strong>0992</strong> (UK-regulated, 9-1 grading). Both share the same structure.
              </p>
              <p>
                Students may take either a <strong>coursework route</strong> (Papers 1 + 3 for Language) or an <strong>exam-only route</strong> (Papers 1 + 2 for Language). Your school will tell you which route you are following.
              </p>
            </div>
          </div>
        </section>

        {/* ─── ENGLISH LANGUAGE ────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Syllabus 0500 / 0990</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">English Language</h2>
          <p className="mt-2 text-gray-600">
            Cambridge IGCSE English Language (First Language) has three components. Most students sit Paper 1 (Reading) plus either Paper 2 (exam writing) or Paper 3 (coursework). The exam tests reading comprehension, summary, directed writing, and composition.
          </p>
        </section>

        {/* Language Paper 1 */}
        <section aria-labelledby="lang-paper-1">
          <SectionHeading id="lang-paper-1">Paper 1: Reading</SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 1" subtitle="Reading" duration="2h" totalMarks="80" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Three passages of text. Candidates answer reading comprehension, summary, and language analysis questions. Available at Core and Extended tiers.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Q</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="Q1(a-d)" marks={25} focus="Comprehension questions on Passage A: retrieve, explain, infer from the text" timing="~30 min" />
                    <QuestionRow question="Q2" marks={25} focus="Summary: select and organise ideas from Passages A and B on a specific focus" timing="~30 min" />
                    <QuestionRow question="Q3" marks={25} focus="Language analysis: analyse how the writer achieves effects using language in Passage C (Extended) or explain meanings and effects (Core)" timing="~35 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                5 marks for quality of writing are included within the mark for each question. Extended tier candidates access the full grade range (A*-G / 9-1). Core tier is capped at grade C / grade 5.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Language Paper 2 */}
        <section aria-labelledby="lang-paper-2">
          <SectionHeading id="lang-paper-2">Paper 2: Directed Writing and Composition</SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 2" subtitle="Directed Writing and Composition (Exam route)" duration="2h" totalMarks="50" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Two sections. Section A is a directed writing task based on a reading passage. Section B is a composition (creative writing) -- choose one from a range of titles.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Section</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="Sec A" marks={25} focus="Directed writing: read a passage and respond in a specified form (e.g. letter, report, speech) using information from the passage and your own ideas" timing="~55 min" />
                    <QuestionRow question="Sec B" marks={25} focus="Composition: choose one from descriptive, narrative, or argumentative/discursive titles" timing="~55 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Directed writing: 15 marks for content and response, 10 marks for style and accuracy. Composition: 13 marks for content and structure, 12 marks for style and accuracy.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Language Paper 3 (Coursework) */}
        <section aria-labelledby="lang-paper-3">
          <SectionHeading id="lang-paper-3">Paper 3: Directed Writing and Composition (Coursework)</SectionHeading>
          <div className="mt-6">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-600 px-6 py-4 text-white">
                <h3 className="text-lg font-bold">Paper 3 (Coursework)</h3>
                <p className="mt-1 text-sm text-white/80">Directed Writing and Composition</p>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm text-gray-600 mb-4">
                  A portfolio of three assignments completed during the course. This replaces Paper 2 for schools following the coursework route.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Assignment 1:</strong> Directed / Informative / Analytical writing (500-800 words)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Assignment 2:</strong> Descriptive / Narrative writing (500-800 words)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <strong>Assignment 3:</strong> Response to a text (500-800 words)
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  Total: 50 marks, weighted at 50%. Internally assessed and externally moderated by Cambridge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENGLISH LITERATURE ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Syllabus 0475 / 0992</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">English Literature</h2>
          <p className="mt-2 text-gray-600">
            Cambridge IGCSE English Literature examines set texts in poetry, prose, and drama. Students answer on texts chosen by their school from the Cambridge set text list. The exam is open book -- clean copies of set texts are allowed.
          </p>
        </section>

        {/* Literature: Poetry and Prose */}
        <section aria-labelledby="lit-poetry">
          <SectionHeading id="lit-poetry">Paper 1: Poetry and Prose</SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 1" subtitle="Poetry and Prose" duration="1h 30m" totalMarks="50" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Two sections. Section A: poetry from the set anthology or collection. Section B: prose (a set novel or short stories). Answer one question from each section.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Section</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="Sec A" marks={25} focus="Poetry: passage-based question or essay question on your set poetry text. Analyse how the poet creates meaning through language and structure." timing="~45 min" />
                    <QuestionRow question="Sec B" marks={25} focus="Prose: passage-based question or essay question on your set novel / short stories. Discuss character, theme, or the writer's methods." timing="~45 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Each question offers a choice: an extract-based (passage) question or an essay question. Passage questions provide a specific extract to anchor your response.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Literature: Drama */}
        <section aria-labelledby="lit-drama">
          <SectionHeading id="lit-drama">Paper 2: Drama</SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 2" subtitle="Drama" duration="1h 30m" totalMarks="50" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Answer on two set drama texts. One question per text. Choose either a passage-based or essay question for each.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Section</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="Q1" marks={25} focus="Essay or passage question on your first set drama text" timing="~45 min" />
                    <QuestionRow question="Q2" marks={25} focus="Essay or passage question on your second set drama text" timing="~45 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Clean copies of set texts are allowed in the exam. Set texts vary by year -- check the Cambridge set text list for your examination series.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ASSESSMENT OBJECTIVES ────────────────────────────── */}
        <section aria-labelledby="assessment-objectives">
          <SectionHeading id="assessment-objectives">Assessment Objectives</SectionHeading>
          <p className="mt-3 text-gray-600">
            Cambridge uses its own assessment objectives, which differ slightly from UK GCSE boards.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Language AOs</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">R1 &mdash; Understand and demonstrate reading skills</dt>
                  <dd className="mt-1 text-sm text-gray-600">Show detailed understanding of texts. Retrieve, infer, deduce, and evaluate. Recognise and respond to meanings conveyed through language.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">R2 &mdash; Understand and analyse how writers achieve effects</dt>
                  <dd className="mt-1 text-sm text-gray-600">Analyse how writers use linguistic and structural devices to create effects. Respond critically and sensitively.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">W1 &mdash; Articulate experience and express ideas</dt>
                  <dd className="mt-1 text-sm text-gray-600">Communicate clearly, accurately, and appropriately. Order and present facts, ideas, and opinions with clarity.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">W2 &mdash; Audience, purpose, and form</dt>
                  <dd className="mt-1 text-sm text-gray-600">Use language and register appropriate to audience and purpose. Show control of grammar, punctuation, and spelling.</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature AOs</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">AO1 &mdash; Personal response</dt>
                  <dd className="mt-1 text-sm text-gray-600">Show detailed knowledge of the content of literary texts. Develop a personal response supported by appropriate reference to the text.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO2 &mdash; Understanding of writers&rsquo; methods</dt>
                  <dd className="mt-1 text-sm text-gray-600">Understand how writers achieve their effects, including the use of language, form, and structure. Use relevant literary terminology.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO3 &mdash; Informed personal response</dt>
                  <dd className="mt-1 text-sm text-gray-600">Develop an informed personal response to texts, recognising that texts can be interpreted in different ways.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO4 &mdash; Communication</dt>
                  <dd className="mt-1 text-sm text-gray-600">Communicate a sensitive and informed personal response effectively, using appropriate terminology and well-structured arguments.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ─── TIME MANAGEMENT ──────────────────────────────────── */}
        <section aria-labelledby="time-management">
          <SectionHeading id="time-management">Time Management Tips</SectionHeading>
          <p className="mt-3 text-gray-600">
            Cambridge IGCSE papers tend to be longer than UK GCSE papers. Careful
            time planning is essential.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Language Paper 1 (2h)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Reading all passages</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q1 comprehension (25 marks)</span><span className="font-semibold text-primary">30 min</span></li>
                <li className="flex justify-between"><span>Q2 summary (25 marks)</span><span className="font-semibold text-primary">30 min</span></li>
                <li className="flex justify-between"><span>Q3 language analysis (25 marks)</span><span className="font-semibold text-primary">35 min</span></li>
                <li className="flex justify-between"><span>Checking and proofreading</span><span className="font-semibold text-primary">10 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Language Paper 2 (2h)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Reading the passage</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Section A directed writing (25 marks)</span><span className="font-semibold text-primary">55 min</span></li>
                <li className="flex justify-between"><span>Section B composition (25 marks)</span><span className="font-semibold text-primary">55 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Literature Paper 1 (1h 30m)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Poetry question (25 marks)</span><span className="font-semibold text-primary">45 min</span></li>
                <li className="flex justify-between"><span>Prose question (25 marks)</span><span className="font-semibold text-primary">45 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Literature Paper 2 (1h 30m)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Drama text 1 (25 marks)</span><span className="font-semibold text-primary">45 min</span></li>
                <li className="flex justify-between"><span>Drama text 2 (25 marks)</span><span className="font-semibold text-primary">45 min</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── COMMAND WORDS ────────────────────────────────────── */}
        <section aria-labelledby="command-words">
          <SectionHeading id="command-words">Command Words Explained</SectionHeading>
          <p className="mt-3 text-gray-600">
            Cambridge uses specific command words. Understanding them is critical to
            answering correctly.
          </p>
          <div className="mt-6 space-y-4">
            {[
              { word: "Re-read from... to...", meaning: "Focus closely on the specified section of the passage. Your answer should draw primarily from this section, though brief reference to other parts may be relevant.", papers: "Lang P1" },
              { word: "Summarise", meaning: "Select and organise relevant points from the text(s). Use your own words as far as possible. Do not copy long sections of text. Focus on the specific topic stated in the question.", papers: "Lang P1 Q2" },
              { word: "How does the writer use language to...", meaning: "Identify and analyse specific language choices (words, images, techniques) and explain their effects on the reader. Support with short quotations.", papers: "Lang P1 Q3" },
              { word: "Imagine you are [character/person]", meaning: "In directed writing, adopt the specified role and perspective. Use details from the passage and your own ideas. Write in the specified form (diary, letter, speech, report).", papers: "Lang P2 Sec A" },
              { word: "Explore the ways in which [author] presents...", meaning: "Analyse the methods and techniques the writer uses. Consider language, imagery, structure, and dramatic effects. Develop a personal response.", papers: "Lit P1 & P2" },
              { word: "How far do you agree...", meaning: "Consider the statement and present a balanced argument. You may agree, disagree, or partially agree. Support your view with close reference to the text.", papers: "Lit P1 & P2" },
            ].map((item) => (
              <div key={item.word} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-gray-900">&ldquo;{item.word}&rdquo;</h3>
                  <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-600">{item.papers}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── EXAMINER TIPS ────────────────────────────────────── */}
        <section aria-labelledby="examiner-tips">
          <SectionHeading id="examiner-tips">What Examiners Are Looking For</SectionHeading>
          <p className="mt-3 text-gray-600">
            Based on published Cambridge examiner reports.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Using your own words in summaries", detail: "Cambridge examiners consistently penalise 'lifting' -- copying chunks from the text. Paraphrase ideas in your own words while retaining the meaning." },
              { title: "Quality of analysis in the language question", detail: "The highest marks go to candidates who explore the effects of individual words and images, not just identify them. Discuss connotation, tone, and impact." },
              { title: "Form and register in directed writing", detail: "If the task says 'write a letter', it must look and sound like a letter. Match your tone and register to the specified audience and purpose." },
              { title: "Personal engagement in Literature answers", detail: "Cambridge rewards responses that show genuine engagement with the text -- not rehearsed answers. Develop your own ideas about characters and themes." },
              { title: "Precise and short quotations", detail: "Short, embedded quotations are more effective than long passages. Select single words or short phrases and analyse them closely." },
              { title: "Well-structured compositions", detail: "In the composition section, plan before you write. Examiners note that the strongest compositions have a clear structure with a deliberate opening, development, and ending." },
            ].map((tip) => (
              <div key={tip.title} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900">{tip.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── COMMON MISTAKES ──────────────────────────────────── */}
        <section aria-labelledby="common-mistakes">
          <SectionHeading id="common-mistakes">Common Mistakes to Avoid</SectionHeading>
          <div className="mt-6 rounded-xl border border-warn-100 bg-warn-50/50 p-6">
            <ul className="space-y-4 text-gray-700">
              {[
                { mistake: "Copying from the text instead of using own words", fix: "In summary questions, paraphrase ideas. Cambridge examiners specifically look for evidence that you can express ideas in your own words." },
                { mistake: "Ignoring the specified form in directed writing", fix: "If the question asks for a diary entry, write a diary entry. If it asks for a formal report, use formal register. Marks are allocated for form and register." },
                { mistake: "Not covering both passages in the summary question", fix: "Q2 usually requires you to use material from two passages. Make sure you draw points from both, not just one." },
                { mistake: "Writing about the story rather than the writing", fix: "In the language analysis question, focus on how the writer uses language, not on what happens. Analyse techniques, word choices, and their effects." },
                { mistake: "Running out of time on the composition", fix: "The composition in Paper 2 is worth 25 marks. Do not spend so long on directed writing that you rush or skip it." },
                { mistake: "Not using clean copies of set texts effectively (Literature)", fix: "You can take clean texts into the Literature exam. Prepare by knowing where key passages are so you can find evidence quickly. Do not rely on annotation -- the copies must be clean." },
                { mistake: "Writing a planned response that does not answer the specific question", fix: "Cambridge examiners note that some candidates write pre-prepared essays that do not address the actual question set. Always adapt your answer to the specific wording." },
              ].map((item) => (
                <li key={item.mistake} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warn-100 text-warn-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.mistake}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.fix}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── GRADE 9 / A* ────────────────────────────────────── */}
        <section aria-labelledby="grade-9">
          <SectionHeading id="grade-9">What Makes a Grade 9 / A* Response</SectionHeading>
          <p className="mt-3 text-gray-600">
            Cambridge IGCSE uses either A*-G (0500/0475) or 9-1 (0990/0992) grading
            depending on the syllabus. Here is what distinguishes the very highest
            level of performance, based on Cambridge mark scheme band descriptors.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Language</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Precise, confident summary skills:</strong> You select and reorganise key ideas from the text into your own words with clarity and economy. There is no lifting or unnecessary repetition.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sensitive language analysis:</strong> You analyse individual words and images with real insight, exploring connotation, tone, and the subtle effects of the writer&rsquo;s choices on the reader.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Assured directed writing:</strong> Your response fully adopts the required form and register. You use the source material skilfully while adding your own convincing ideas. The voice is consistent and appropriate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sophisticated compositions:</strong> Your narrative or descriptive writing is crafted with deliberate control of structure, pace, and atmosphere. Your vocabulary is precise and varied, and your sentences are consciously shaped for effect.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sustained personal engagement:</strong> Your response shows genuine, individual engagement with the text. You develop your own ideas rather than reproducing taught interpretations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Detailed analysis of the writer&rsquo;s methods:</strong> You explore how language, form, and dramatic/structural techniques create meaning. You analyse specific words and phrases with depth, not just identify features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Well-selected textual support:</strong> You choose precise, short quotations and use them to anchor detailed analysis. Your references are apt and well-integrated into your argument.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Awareness of multiple interpretations:</strong> You show that you understand texts can be read in different ways. You consider how an audience might respond and why the writer has made particular choices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Coherent, well-structured argument:</strong> Your essay has a clear line of argument that develops logically. Each paragraph builds on the last, leading to a convincing conclusion.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to practise?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Now you know the Cambridge IGCSE exam inside and out, put your
            knowledge into practice with AI-powered essay feedback.
          </p>
          <Link href="/dashboard/essay/new" className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100 transition-colors">
            Write a practice essay
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-4" />
      </div>

    </>
  );
}
