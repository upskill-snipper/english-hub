import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "OCR Exam Guide",
  description:
    "Complete OCR GCSE English exam guide. Paper structures, mark allocations, assessment objectives, time management tips, command words, and examiner advice for English Language (J351) and English Literature (J352).",
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

export default function OCRExamGuidePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            OCR GCSE English
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete guide to OCR GCSE English Language (J351) and English
            Literature (J352). Every paper, every question, every mark.
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
          <li className="font-medium text-primary">OCR</li>
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
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Specification J351</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">English Language</h2>
          <p className="mt-2 text-gray-600">
            Two externally examined papers. Paper 1 (Communicating Information and
            Ideas) is worth 50% and Paper 2 (Exploring Effects and Impact) is
            worth 50%. Plus a separate Spoken Language endorsement. Total: 160
            marks.
          </p>
        </section>

        {/* Language Paper 1 */}
        <section aria-labelledby="lang-paper-1">
          <SectionHeading id="lang-paper-1">
            Language Paper 1: Communicating Information and Ideas
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 1" subtitle="Communicating Information and Ideas" duration="2h" totalMarks="80" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Section A: reading comprehension on two unseen non-fiction texts
                (one contemporary, one from the 19th century). Section B:
                writing to present a viewpoint (one task).
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Reading (40 marks)</h4>
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
                    <QuestionRow question="Q1(a)" marks={4} focus="Identify four things from one text (retrieval)" timing="~5 min" />
                    <QuestionRow question="Q1(b)" marks={6} focus="Summarise and synthesise from both texts on a given theme" timing="~10 min" />
                    <QuestionRow question="Q2" marks={6} focus="Explain how the writer uses language and/or structure to present ideas" timing="~10 min" />
                    <QuestionRow question="Q3" marks={12} focus="Analyse how the writer uses language and/or structure for effect (longer analysis)" timing="~15 min" />
                    <QuestionRow question="Q4" marks={12} focus="Compare how the two writers convey their ideas and perspectives" timing="~15 min" />
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Writing (40 marks)</h4>
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
                    <QuestionRow question="Q5" marks={40} focus="Writing to present a viewpoint (e.g. article, letter, essay, speech). Linked thematically to the reading texts." timing="~45 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Q5 marks: 24 for communication and organisation (AO5), 16 for
                vocabulary, sentence structure, spelling and punctuation (AO6).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Language Paper 2 */}
        <section aria-labelledby="lang-paper-2">
          <SectionHeading id="lang-paper-2">
            Language Paper 2: Exploring Effects and Impact
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 2" subtitle="Exploring Effects and Impact" duration="2h" totalMarks="80" weighting="50%">
              <p className="text-sm text-gray-600 mb-4">
                Section A: reading analysis on one unseen literary fiction text
                (20th or 21st century). Section B: creative / imaginative
                writing (one task from a choice of four).
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Reading (40 marks)</h4>
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
                    <QuestionRow question="Q1" marks={4} focus="Identify and interpret: retrieve explicit information from the text" timing="~5 min" />
                    <QuestionRow question="Q2" marks={6} focus="Explain how the writer uses language to create a specific effect" timing="~10 min" />
                    <QuestionRow question="Q3" marks={10} focus="Analyse how the writer uses language and structure to achieve effects (extended analysis)" timing="~15 min" />
                    <QuestionRow question="Q4" marks={20} focus="Evaluate how effectively the writer has achieved their purpose. Give your personal opinion supported by evidence." timing="~25 min" />
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
                    <QuestionRow question="Q5" marks={40} focus="One imaginative / creative writing task from a choice of four (narrative or descriptive). May include an image stimulus." timing="~45 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Q5 marks: 24 for communication and organisation (AO5), 16 for
                vocabulary, sentence structure, spelling and punctuation (AO6).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ENGLISH LITERATURE ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Specification J352</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">English Literature</h2>
          <p className="mt-2 text-gray-600">
            Two externally examined papers. Paper 1 (Exploring Modern and
            Literary Heritage Texts) is worth 50%. Paper 2 (Exploring Poetry
            and Shakespeare) is worth 50%. All exams are closed book. Total: 160
            marks.
          </p>
        </section>

        {/* Literature Paper 1 */}
        <section aria-labelledby="lit-paper-1">
          <SectionHeading id="lit-paper-1">
            Literature Paper 1: Exploring Modern and Literary Heritage Texts
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 1" subtitle="Exploring Modern and Literary Heritage Texts" duration="2h" totalMarks="80" weighting="50%">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Modern prose or drama (40 marks)</h4>
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
                    <QuestionRow question="1 part" marks={40} focus="Extract-based essay on your studied modern text. How does the writer present a theme, character, or idea? Refer to the extract and the text as a whole." timing="~60 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set texts include: An Inspector Calls, My Mother Said I Never Should, Anita and Me, Never Let Me Go, Animal Farm, Lord of the Flies, A Christmas Carol, Great Expectations, Jane Eyre, Pride and Prejudice, The Strange Case of Dr Jekyll and Mr Hyde, Frankenstein.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Literary heritage prose or drama (40 marks)</h4>
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
                    <QuestionRow question="1 part" marks={40} focus="Extract-based essay on your studied literary heritage text. Explore how the writer presents a theme, character, or relationship. Refer to the extract and wider text." timing="~60 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                You study one text from each section. Section A is post-1914; Section B is pre-1914 (literary heritage).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* Literature Paper 2 */}
        <section aria-labelledby="lit-paper-2">
          <SectionHeading id="lit-paper-2">
            Literature Paper 2: Exploring Poetry and Shakespeare
          </SectionHeading>
          <div className="mt-6">
            <PaperCard title="Paper 2" subtitle="Exploring Poetry and Shakespeare" duration="2h" totalMarks="80" weighting="50%">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Section A &mdash; Poetry across time (40 marks)</h4>
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
                    <QuestionRow question="Part (a)" marks={24} focus="Compare two poems from the OCR poetry anthology on a given theme. One poem is named; you choose the second." timing="~35 min" />
                    <QuestionRow question="Part (b)" marks={16} focus="Analyse one unseen poem: how does the poet present ideas and feelings?" timing="~25 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                OCR poetry anthology clusters: Love and Relationships, Conflict, or Youth and Age. The named poem is printed on the paper.
              </p>

              <h4 className="text-sm font-bold text-gray-900 mt-6 mb-2">Section B &mdash; Shakespeare (40 marks)</h4>
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
                    <QuestionRow question="1 part" marks={40} focus="Extract-based essay: explore how Shakespeare presents a theme or character. Refer to the extract and the play as a whole." timing="~60 min" />
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Set plays: Romeo and Juliet, A Midsummer Night&rsquo;s Dream, The Merchant of Venice, Much Ado About Nothing, Macbeth, Henry V (Henry V less common).
              </p>
            </PaperCard>
          </div>
        </section>

        {/* ─── ASSESSMENT OBJECTIVES ────────────────────────────── */}
        <section aria-labelledby="assessment-objectives">
          <SectionHeading id="assessment-objectives">Assessment Objectives</SectionHeading>
          <p className="mt-3 text-gray-600">
            OCR uses the same national assessment objectives as AQA and
            Edexcel, but the weighting per question can differ.
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
                  <dd className="mt-1 text-sm text-gray-600">Communicate clearly, effectively and imaginatively. Select and adapt tone, style and register for different forms and purposes. Organise information and ideas using structural and grammatical features.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO6 &mdash; Technical accuracy</dt>
                  <dd className="mt-1 text-sm text-gray-600">Use a range of vocabulary and sentence structures for clarity, purpose and effect. Spell and punctuate accurately. Use grammar correctly.</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature AOs</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">AO1 &mdash; Informed personal response</dt>
                  <dd className="mt-1 text-sm text-gray-600">Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">AO2 &mdash; Analyse language, form and structure</dt>
                  <dd className="mt-1 text-sm text-gray-600">Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.</dd>
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
            OCR papers are 2 hours each, giving slightly more time than some
            other boards. Use the extra time wisely -- it allows for more
            thoughtful planning and checking.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Language Paper 1 (2h)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Reading both texts</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q1a (4 marks)</span><span className="font-semibold text-primary">5 min</span></li>
                <li className="flex justify-between"><span>Q1b (6 marks)</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Q2 (6 marks)</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Q3 (12 marks)</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q4 (12 marks)</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q5 writing (40 marks)</span><span className="font-semibold text-primary">45 min</span></li>
                <li className="flex justify-between"><span>Checking</span><span className="font-semibold text-primary">5 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Language Paper 2 (2h)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Reading the source text</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q1 (4 marks)</span><span className="font-semibold text-primary">5 min</span></li>
                <li className="flex justify-between"><span>Q2 (6 marks)</span><span className="font-semibold text-primary">10 min</span></li>
                <li className="flex justify-between"><span>Q3 (10 marks)</span><span className="font-semibold text-primary">15 min</span></li>
                <li className="flex justify-between"><span>Q4 (20 marks)</span><span className="font-semibold text-primary">25 min</span></li>
                <li className="flex justify-between"><span>Q5 writing (40 marks)</span><span className="font-semibold text-primary">45 min</span></li>
                <li className="flex justify-between"><span>Checking</span><span className="font-semibold text-primary">5 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Literature Paper 1 (2h)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Modern text (40 marks)</span><span className="font-semibold text-primary">60 min</span></li>
                <li className="flex justify-between"><span>Literary heritage text (40 marks)</span><span className="font-semibold text-primary">60 min</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900">Literature Paper 2 (2h)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Poetry comparison (24 marks)</span><span className="font-semibold text-primary">35 min</span></li>
                <li className="flex justify-between"><span>Unseen poetry (16 marks)</span><span className="font-semibold text-primary">25 min</span></li>
                <li className="flex justify-between"><span>Shakespeare (40 marks)</span><span className="font-semibold text-primary">60 min</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── COMMAND WORDS ────────────────────────────────────── */}
        <section aria-labelledby="command-words">
          <SectionHeading id="command-words">Command Words Explained</SectionHeading>
          <p className="mt-3 text-gray-600">
            OCR uses command words consistent with other UK boards but with its
            own distinctive question styles.
          </p>
          <div className="mt-6 space-y-4">
            {[
              { word: "Identify four things...", meaning: "Simply retrieve explicit information from the text. Keep your answers short and factual. Do not analyse -- just find the information.", papers: "Lang P1 Q1a, Lang P2 Q1" },
              { word: "How does the writer use language and/or structure to...", meaning: "Analyse specific word choices, sentence structures, and structural features. Explain the effects created. Use subject terminology where it adds to your analysis.", papers: "Lang P1 Q2/Q3, Lang P2 Q2/Q3" },
              { word: "Compare how the two writers convey...", meaning: "Discuss both texts throughout your answer. Identify similarities and differences in methods and viewpoints. Use comparative language (both, however, in contrast).", papers: "Lang P1 Q4" },
              { word: "Evaluate how effectively...", meaning: "Give your judgement on how successful the writer has been. Support with evidence. Consider different interpretations. Use evaluative language.", papers: "Lang P2 Q4" },
              { word: "Explore how [author] presents...", meaning: "Analyse the methods the writer uses to present a character, theme, or idea. Consider language, form, structure, and context. Write about the extract and the whole text.", papers: "Lit P1 & P2" },
              { word: "Compare how poets present ideas about...", meaning: "Write about two poems together. Analyse methods and compare how each poet handles the shared theme. Structure around points of comparison, not poem by poem.", papers: "Lit P2 Sec A" },
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
            Based on published OCR examiner reports and chief examiner guidance.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Balance between extract and wider text", detail: "In Literature extract questions, OCR examiners want to see close analysis of the given extract alongside references to the rest of the text. Aim for roughly equal attention to both." },
              { title: "Critical evaluation with personal voice", detail: "In Paper 2 Q4, examiners reward answers that go beyond summary to give a genuine personal evaluation. Be opinionated and support your views with specific evidence." },
              { title: "Effective use of the 2-hour format", detail: "OCR gives 2 hours per paper. Examiners note that strong candidates use the extra time for planning, proofreading, and refining their answers rather than writing excessively long responses." },
              { title: "Poetry comparison, not two separate essays", detail: "In the poetry comparison, examiners want integrated comparison throughout. Avoid writing about one poem in full and then the other." },
              { title: "Precise, analytical language", detail: "OCR examiners highlight that top-band responses use precise, analytical vocabulary rather than vague descriptions. Aim for specificity in your analysis." },
              { title: "Context woven into analysis (Literature)", detail: "AO3 requires understanding of context. Integrate it naturally -- do not add a 'context paragraph' at the end. Show how context shapes the writer's choices." },
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
                { mistake: "Spending too long on low-mark questions", fix: "Q1 (4 marks) needs 4 brief points -- not a detailed paragraph for each. Save your time and energy for the higher-mark questions." },
                { mistake: "Not linking writing to the reading texts thematically", fix: "In Language Paper 1, the writing task is linked to the reading texts' theme. Make sure your response connects to the broader topic, even if you write creatively." },
                { mistake: "Listing techniques without explaining effects", fix: "OCR examiners consistently note that feature-spotting without analysis earns minimal marks. Always explain why the technique is effective and what it makes the reader think or feel." },
                { mistake: "Writing two separate poem analyses instead of comparing", fix: "In the poetry comparison, structure your answer around points of comparison. Discuss both poems in each paragraph using comparative connectives." },
                { mistake: "Ignoring structure in reading analysis", fix: "OCR questions often say 'language and/or structure'. Do not ignore structural features like narrative perspective, sentence length, paragraph structure, and shifts in focus." },
                { mistake: "Not proofreading writing answers", fix: "The 2-hour format gives you time to check your work. Use the final 5 minutes to proofread. SPaG errors in writing tasks cost marks under AO6." },
                { mistake: "Context as a bolt-on in Literature", fix: "Examiners see many answers with a final paragraph that says 'In the Victorian era...' with no connection to analysis. Weave context into your points throughout." },
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
            Grade 9 is the very highest grade. Here is what separates a Grade 9
            from a Grade 7 or 8 in OCR English, based on mark scheme band
            descriptors and chief examiner guidance.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Language</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Perceptive, analytical reading:</strong> You analyse language and structure with genuine insight, exploring how the writer&rsquo;s choices create specific effects. You move beyond identification to evaluate why techniques are effective.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Convincing critical evaluation:</strong> In Paper 2 Q4, you present a sophisticated personal judgement, engaging with the complexity of the text rather than offering simple agreement or disagreement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Assured, integrated comparison:</strong> In Paper 1 Q4, your comparison is genuinely integrated -- you discuss both texts together throughout, drawing out meaningful similarities and differences in methods and viewpoints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Compelling, crafted writing:</strong> Your writing shows deliberate control of structure, pace, and register. Whether creative or transactional, your choices are purposeful and your style is assured.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-primary">English Literature</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Critical, conceptualised response:</strong> You write about ideas and concepts (e.g. power, justice, identity) rather than retelling the story. Your essay has a clear argument that develops throughout.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Precise analysis of the writer&rsquo;s craft:</strong> You explore how language, form, and structure create meaning. You analyse specific words with depth, considering connotation and multiple layers of interpretation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Context illuminates analysis:</strong> You use historical, social, and cultural context to deepen your reading, showing how context shapes meaning rather than treating it as separate knowledge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Balanced extract and wider-text analysis:</strong> In extract questions, you give close attention to the given passage while confidently ranging across the wider text to build a complete argument.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><strong>Sophisticated poetry comparison:</strong> Your poetry answers are genuinely comparative, structured around shared themes and methods rather than writing about each poem in turn.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to practise?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Now you know the OCR exam inside and out, put your knowledge into
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
