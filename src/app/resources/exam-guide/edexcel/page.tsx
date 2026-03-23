import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Edexcel Exam Guide",
  description:
    "Complete Pearson Edexcel GCSE English exam guide. Paper structures, mark allocations, assessment objectives, time management tips, command words, and examiner advice for English Language (1EN0) and English Literature (1ET0).",
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

export default function EdexcelExamGuidePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pearson Edexcel GCSE English
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete guide to Edexcel English Language (1EN0) and English
            Literature (1ET0). Every paper, every question, every mark.
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
          <li className="font-medium text-primary">Edexcel</li>
        </ol>
      </nav>

      {/* Table of contents */}
      <nav className="mx-auto max-w-5xl px-4 py-8" aria-label="On this page">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">On this page</p>
          <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
            <li><a href="#lang-paper-1" className="text-accent hover:text-primary transition-colors">Language Paper 1</a></li>
            <li><a href="#lang-paper-2" className="text-accent hover:text-primary transition-colors">Language Paper 2</a></li>
            <li><a href="#lit-paper-1" className="text-accent hover:text-primary transition-colors">Literature Paper 1</a></li>
            <li><a href="#lit-paper-2" className="text-accent hover:text-primary transition-colors">Literature Paper 2</a></li>
            <li><a href="#assessment-objectives" className="text-accent hover:text-primary transition-colors">Assessment Objectives</a></li>
            <li><a href="#time-management" className="text-accent hover:text-primary transition-colors">Time Management</a></li>
            <li><a href="#command-words" className="text-accent hover:text-primary transition-colors">Command Words</a></li>
            <li><a href="#examiner-tips" className="text-accent hover:text-primary transition-colors">Examiner Tips</a></li>
            <li><a href="#common-mistakes" className="text-accent hover:text-primary transition-colors">Common Mistakes</a></li>
            <li><a href="#grade-9" className="text-accent hover:text-primary transition-colors">What Makes a Grade 9</a></li>
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4 pb-16 space-y-16">
        {/* ─── ENGLISH LANGUAGE ────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Specification 1EN0</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">English Language</h2>
          <p className="mt-2 text-gray-600">
            Two externally examined papers, each worth 50% of the GCSE. Total:
            128 marks across both papers. Plus a separate Spoken Language
            endorsement.
          </p>
        </section>

        {/* Language Paper 1 */}
        <section aria-labelledby="lang-paper-1">
          <SectionHeading id="lang-paper-1">
            Language Paper 1: Fiction and Imaginative Writing
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 1" subtitle="Fiction and Imaginative Writing" duration="1h 45m" totalMarks="64" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Section A: one unseen 19th-century fiction extract. Section B:
                imaginative / creative writing. Two writing tasks; students
                choose one.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Reading (24 marks)</h4>
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
                    <QuestionRow question="Q1" marks={3} focus="Retrieve key information from the text" timing="~5 min" />
                    <QuestionRow question="Q2" marks={6} focus="Analyse how language is used in a specific section" timing="~10 min" />
                    <QuestionRow question="Q3" marks={6} focus="Analyse how the whole text is structured to interest the reader" timing="~10 min" />
                    <QuestionRow question="Q4" marks={9} focus="Critically evaluate the text, giving a personal opinion supported by evidence" timing="~15 min" />
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Imaginative Writing (40 marks)</h4>
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
                    <QuestionRow question="Q5 or Q6" marks={40} focus="One creative / imaginative writing task from a choice of two (e.g. narrative, descriptive writing linked to an image)" timing="~55 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Writing marks: 24 for content and organisation, 16 for technical accuracy.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Language Paper 2 */}
        <section aria-labelledby="lang-paper-2">
          <SectionHeading id="lang-paper-2">
            Language Paper 2: Non-Fiction and Transactional Writing
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 2" subtitle="Non-Fiction and Transactional Writing" duration="2h 05m" totalMarks="64" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Section A: two linked non-fiction texts (one 19th century, one
                20th/21st century). Section B: transactional writing -- two
                compulsory tasks.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Reading (24 marks)</h4>
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
                    <QuestionRow question="Q1" marks={3} focus="Retrieve information from Text 1" timing="~5 min" />
                    <QuestionRow question="Q2" marks={3} focus="Summarise differences or similarities between the two texts" timing="~5 min" />
                    <QuestionRow question="Q3" marks={10} focus="Analyse how language is used in one text" timing="~15 min" />
                    <QuestionRow question="Q4" marks={8} focus="Compare how the writers convey their viewpoints" timing="~15 min" />
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Transactional Writing (40 marks)</h4>
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
                    <QuestionRow question="Q5" marks={20} focus="Shorter transactional writing task (e.g. letter, review, article)" timing="~25 min" />
                    <QuestionRow question="Q6" marks={20} focus="Longer transactional writing task (e.g. speech, essay, article)" timing="~35 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Each writing task: 12 marks for content and organisation, 8 for technical accuracy.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ENGLISH LITERATURE ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Specification 1ET0</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">English Literature</h2>
          <p className="mt-2 text-gray-600">
            Two externally examined papers. Paper 1 is worth 50% and Paper 2 is
            worth 50%. All exams are closed book. Total: 120 marks.
          </p>
        </section>

        {/* Literature Paper 1 */}
        <section aria-labelledby="lit-paper-1">
          <SectionHeading id="lit-paper-1">
            Literature Paper 1: Shakespeare and Post-1914 Literature
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 1" subtitle="Shakespeare and Post-1914 Literature" duration="1h 45m" totalMarks="80" weighting="50%">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Shakespeare (40 marks)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Task</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="1 part" marks={40} focus="Extract-based essay: explore how Shakespeare presents a theme or character. Refer to the extract and the play as a whole." timing="~55 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set texts: Macbeth, Romeo and Juliet, The Merchant of Venice, The Tempest, Twelfth Night, Much Ado About Nothing.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Post-1914 British play or novel (40 marks)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Task</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="1 part" marks={40} focus="Essay question (choice of two) on a theme, character or idea in your studied post-1914 text. No extract given." timing="~50 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set texts include: An Inspector Calls, Animal Farm, Lord of the Flies, Never Let Me Go, Anita and Me.
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Literature Paper 2 */}
        <section aria-labelledby="lit-paper-2">
          <SectionHeading id="lit-paper-2">
            Literature Paper 2: 19th-century Novel and Poetry since 1789
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 2" subtitle="19th-century Novel and Poetry since 1789" duration="2h 15m" totalMarks="40" weighting="50%">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; 19th-century novel (20 marks)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Task</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="1 part" marks={20} focus="Extract-based essay on your studied 19th-century novel. Explore how a theme or character is presented in the extract and the novel as a whole." timing="~50 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set texts: A Christmas Carol, Great Expectations, Jane Eyre, Frankenstein, Pride and Prejudice, The Strange Case of Dr Jekyll and Mr Hyde, Silas Marner.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Poetry anthology and unseen poetry (20 marks)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Task</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase">Focus</th>
                      <th className="py-2 pr-3 text-xs font-bold text-gray-400 uppercase text-center">Marks</th>
                      <th className="py-2 text-xs font-bold text-gray-400 uppercase">Suggested time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <QuestionRow question="Part (i)" marks={20} focus="Compare two poems from the Pearson poetry anthology on a shared theme" timing="~45 min" />
                    <QuestionRow question="Part (ii)" marks={20} focus="Analyse an unseen poem, then compare it with a second unseen poem" timing="~40 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Anthology clusters: Belonging, Conflict, or Relationships (depending on when you started).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ASSESSMENT OBJECTIVES ────────────────────────────── */}
        <section aria-labelledby="assessment-objectives">
          <SectionHeading id="assessment-objectives">Assessment Objectives</SectionHeading>
          <p className="mt-3 text-gray-600">
            Edexcel uses the same national assessment objectives as other boards, but the
            weighting per question differs. Understanding these helps you know
            exactly what to prioritise in each answer.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Language AOs</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">AO1 &mdash; Identify and interpret</dt>
                  <dd className="mt-1 text-sm text-gray-600">Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO2 &mdash; Analyse language and structure</dt>
                  <dd className="mt-1 text-sm text-gray-600">Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO3 &mdash; Compare writers&rsquo; ideas</dt>
                  <dd className="mt-1 text-sm text-gray-600">Compare writers&rsquo; ideas and perspectives, as well as how these are conveyed, across two or more texts.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO4 &mdash; Evaluate critically</dt>
                  <dd className="mt-1 text-sm text-gray-600">Evaluate texts critically and support this with appropriate textual references.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO5 &mdash; Content and organisation</dt>
                  <dd className="mt-1 text-sm text-gray-600">Communicate clearly, effectively and imaginatively. Select and adapt tone, style and register. Organise information using structural and grammatical features.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO6 &mdash; Technical accuracy</dt>
                  <dd className="mt-1 text-sm text-gray-600">Use a range of vocabulary and sentence structures. Spell and punctuate accurately.</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature AOs</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">AO1 &mdash; Informed personal response</dt>
                  <dd className="mt-1 text-sm text-gray-600">Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO2 &mdash; Analyse language, form and structure</dt>
                  <dd className="mt-1 text-sm text-gray-600">Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO3 &mdash; Contexts</dt>
                  <dd className="mt-1 text-sm text-gray-600">Show understanding of the relationships between texts and the contexts in which they were written.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO4 &mdash; Comparison</dt>
                  <dd className="mt-1 text-sm text-gray-600">Use a range of vocabulary and sentence structures for clarity, purpose and effect with accurate spelling and punctuation.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ─── TIME MANAGEMENT ──────────────────────────────────── */}
        <section aria-labelledby="time-management">
          <SectionHeading id="time-management">Time Management Tips</SectionHeading>
          <p className="mt-3 text-gray-600">
            Edexcel papers have slightly different timings to other boards. Paper 2 Language
            is notably longer at 2 hours 5 minutes because it includes two compulsory
            writing tasks.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Language Paper 1 (1h 45m)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Reading the source</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Q1 (3 marks)</span><span className="font-semibold text-primary">5 min</span></li>
                <li className="flex justify-between"><span>Q2 (6 marks)</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Q3 (6 marks)</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Q4 (9 marks)</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Writing task (40 marks)</span><span className="font-semibold text-primary">55 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Language Paper 2 (2h 05m)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Reading both sources</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q1 (3 marks)</span><span className="font-semibold text-primary">5 min</span></li>
                <li className="flex justify-between"><span>Q2 (3 marks)</span><span className="font-semibold text-primary">5 min</span></li>
                <li className="flex justify-between"><span>Q3 (10 marks)</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q4 (8 marks)</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q5 (20 marks)</span><span className="font-semibold text-primary">25 min</span></li>
                <li className="flex justify-between"><span>Q6 (20 marks)</span><span className="font-semibold text-primary">35 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Literature Paper 1 (1h 45m)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Shakespeare (40 marks)</span><span className="font-semibold text-primary">55 min</span></li>
                <li className="flex justify-between"><span>Post-1914 text (40 marks)</span><span className="font-semibold text-primary">50 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Literature Paper 2 (2h 15m)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>19th-century novel (20 marks)</span><span className="font-semibold text-primary">50 min</span></li>
                <li className="flex justify-between"><span>Poetry anthology comparison (20 marks)</span><span className="font-semibold text-primary">45 min</span></li>
                <li className="flex justify-between"><span>Unseen poetry (20 marks)</span><span className="font-semibold text-primary">40 min</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── COMMAND WORDS ────────────────────────────────────── */}
        <section aria-labelledby="command-words">
          <SectionHeading id="command-words">Command Words Explained</SectionHeading>
          <p className="mt-3 text-gray-600">
            Edexcel uses specific command words and phrasing. Understanding them
            ensures you answer the question being asked.
          </p>
          <div className="mt-6 space-y-4">
            {[
              { word: "Analyse how the writer uses language to...", meaning: "Focus on specific word choices, phrases, and language techniques. Explain the effect each choice has on the reader. Use subject terminology.", papers: "Lang P1 Q2, Lang P2 Q3" },
              { word: "How does the writer structure the text to...", meaning: "Discuss the organisation of the whole text: opening, development, shifts in focus, ending, narrative perspective, and how these engage the reader.", papers: "Lang P1 Q3" },
              { word: "Evaluate how successfully...", meaning: "Give your judgement on how effective the writer's choices are. Support with evidence and explain your reasoning. You can partially agree.", papers: "Lang P1 Q4" },
              { word: "Compare how the writers convey...", meaning: "Discuss both texts throughout your answer. Identify similarities and differences in their methods and viewpoints. Use comparative connectives.", papers: "Lang P2 Q4, Lit P2 poetry" },
              { word: "Explore how [author] presents...", meaning: "Analyse the methods the writer uses (language, form, structure, context) to present a character, theme or idea. Common in Literature papers.", papers: "Lit P1 & P2" },
              { word: "You must refer to the context of the play/novel", meaning: "Include relevant historical, social, and cultural context. Weave it into your analysis -- do not add it as a separate paragraph at the end.", papers: "Lit P1 & P2" },
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
            From published Edexcel examiner reports and mark scheme guidance.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Close analysis of specific words and phrases", detail: "Edexcel examiners repeatedly highlight that the strongest answers zoom in on individual words and explain their connotations, effects, and how they shape meaning." },
              { title: "Secure knowledge of the whole text", detail: "In Literature, examiners note that strong candidates reference different parts of the text fluently, showing they know the entire text rather than just key scenes." },
              { title: "Two compulsory writing tasks in Paper 2", detail: "Many students lose marks by spending too long on one writing task. Both Q5 and Q6 are compulsory. Plan your time carefully and ensure both answers are well-developed." },
              { title: "Accurate subject terminology", detail: "Use literary and linguistic terms precisely. Incorrect use of terminology is worse than not using it at all. If you name a technique, explain its effect." },
              { title: "Critical evaluation, not summary", detail: "In Q4 (Language), examiners want to see you make a judgement and support it. Avoid simply describing what happens in the text." },
              { title: "Ambitious vocabulary in writing tasks", detail: "Examiners reward students who demonstrate a wide vocabulary, varied sentence structures, and deliberate stylistic choices. Avoid repetition and cliches." },
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
                { mistake: "Not completing both writing tasks in Paper 2", fix: "Both Q5 and Q6 are compulsory. Budget your time: 25 min for Q5, 35 min for Q6. An incomplete answer loses far more marks than a slightly shorter but complete one." },
                { mistake: "Confusing the 19th-century text in Language vs Literature", fix: "Language Paper 1 uses a 19th-century fiction extract for reading analysis. Literature Paper 2 tests your studied 19th-century novel. They require different skills." },
                { mistake: "Feature-spotting without analysis", fix: "Naming a technique (e.g. 'the writer uses alliteration') earns minimal marks. You must explain why it is used and what effect it creates." },
                { mistake: "Writing about one text then the other in comparison questions", fix: "Examiners want integrated comparison throughout. Structure your answer around themes and methods, discussing both texts in each paragraph." },
                { mistake: "Neglecting structure in reading answers", fix: "Q3 specifically asks about structure. Consider opening, ending, shifts in focus, narrative voice, and how the writer controls what the reader knows and when." },
                { mistake: "Not adapting tone and register in writing tasks", fix: "A letter requires different conventions to a speech or article. Show awareness of audience, purpose, and form in your transactional writing." },
                { mistake: "Bolting context on as a separate paragraph", fix: "In Literature, context should be woven into your analysis, not added as an afterthought. Link historical/social context to the writer's choices." },
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

        {/* ─── GRADE 9 ──────────────────────────────────────────── */}
        <section aria-labelledby="grade-9">
          <SectionHeading id="grade-9">What Makes a Grade 9 Response</SectionHeading>
          <p className="mt-3 text-gray-600">
            Grade 9 is the highest possible grade. Here is what separates a
            Grade 9 from a Grade 7 or 8 in Edexcel English, based on mark
            scheme descriptors and senior examiner commentary.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Language</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Perceptive, exploratory analysis:</strong> You analyse language and structure with real insight, exploring how specific choices create subtle effects. You consider connotation, ambiguity, and tone with genuine understanding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Convincing critical evaluation:</strong> In Q4, you go beyond simple agreement or disagreement. You offer a nuanced, well-supported personal judgement that engages with the complexity of the text.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Compelling, assured writing:</strong> Your creative and transactional writing is crafted with deliberate stylistic choices -- controlled tone, varied syntax, precise vocabulary, and a strong sense of audience and purpose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sustained quality across both writing tasks:</strong> In Paper 2, both Q5 and Q6 are fully developed and equally strong. You do not sacrifice one for the other.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Critical, exploratory personal response:</strong> You move beyond explaining what the writer does to exploring why and how their choices create meaning. Your argument is driven by ideas, not by the text&rsquo;s chronology.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Precise, discriminating references:</strong> You select the most revealing quotations -- often individual words -- and explore layers of meaning, connotation, and effect.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Context enhances analysis:</strong> You integrate historical, social, and cultural context so it deepens your reading of the text. Context is never a bolt-on -- it illuminates the writer&rsquo;s purpose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sustained comparison in poetry:</strong> Your poetry comparisons are genuinely integrated, discussing both poems throughout each paragraph with comparative analysis of methods and effects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Confident whole-text knowledge:</strong> You reference different parts of the text fluently and purposefully, demonstrating that you understand the text as a complete work, not just isolated scenes.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to practise?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Now you know the Edexcel exam inside and out, put your knowledge into
            practice with AI-powered essay feedback.
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
