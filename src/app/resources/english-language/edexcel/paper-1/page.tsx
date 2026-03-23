import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Edexcel Paper 1: Fiction & Imaginative Writing",
  description:
    "Complete revision guide for Edexcel English Language Paper 1 (1EN0/01). 19th-century fiction reading, imaginative writing, mark schemes, AOs, and example responses.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function Paper1Page() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/english-language/edexcel"
            className="mb-4 inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Back to Edexcel Hub
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Fiction &amp; Imaginative Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            1 hour 45 minutes &bull; 64 marks &bull; 40% of your GCSE
          </p>
        </div>
      </section>

      {/* ── Paper overview ────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Paper Overview</h2>
          <p className="mt-3 leading-relaxed text-gray-700">
            Paper 1 tests your ability to read and analyse a 19th-century fiction extract, then produce your own piece of
            imaginative writing. The paper is split into two sections and you should aim to spend approximately
            <strong> 1 hour on Section A</strong> (reading) and <strong>45 minutes on Section B</strong> (writing).
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">A</div>
              <h3 className="mt-3 text-lg font-bold text-gray-900">Section A: Reading</h3>
              <p className="mt-1 text-sm text-gray-600">24 marks &bull; ~1 hour</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  One unseen 19th-century fiction extract (approx. 500-700 words)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Five compulsory questions testing AO1, AO2, and AO4
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Typical authors: Dickens, Hardy, Shelley, Stevenson, Bront&euml;, Conan Doyle
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm">B</div>
              <h3 className="mt-3 text-lg font-bold text-gray-900">Section B: Imaginative Writing</h3>
              <p className="mt-1 text-sm text-gray-600">40 marks &bull; ~45 minutes</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Choice of two tasks (pick one)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Often linked to the reading extract theme
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Assessed on AO5 (content &amp; organisation, 24 marks) and AO6 (technical accuracy, 16 marks)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section A: Reading questions breakdown ────────────────── */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Section A: Reading &mdash; Question Breakdown</h2>
          <p className="mt-3 text-gray-600">
            Each question targets a different skill. Here is the exact structure you will see in the exam.
          </p>

          <div className="mt-8 space-y-6">
            {/* Q1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
                <h3 className="text-lg font-bold text-gray-900">Short Retrieval (1 mark)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                <strong>AO1</strong> &mdash; A single-mark question asking you to retrieve explicit information from a specific part of the text.
              </p>
              <div className="mt-3 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Example question:</p>
                <p className="mt-1 text-sm italic text-gray-800">
                  &ldquo;From lines 1-5, identify the phrase that tells us the weather was unpleasant.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-gray-700">
                  Copy the exact phrase from the text. Do not waste time explaining &mdash; this is a simple retrieval question. Spend no more than 1 minute here.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</span>
                <h3 className="text-lg font-bold text-gray-900">Short Retrieval / Summary (2 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                <strong>AO1</strong> &mdash; Two retrieval points from a specified section of the text. You need to identify two things.
              </p>
              <div className="mt-3 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Example question:</p>
                <p className="mt-1 text-sm italic text-gray-800">
                  &ldquo;From lines 6-14, give two reasons why the narrator felt uncomfortable.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-gray-700">
                  Write two clear, separate points. Quote briefly or paraphrase. Do not over-explain. Spend 2-3 minutes maximum.
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
                <h3 className="text-lg font-bold text-gray-900">Language Analysis (6 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                <strong>AO2</strong> &mdash; Analyse how the writer uses language to create a specific effect. This question will direct you to a particular section of the text.
              </p>
              <div className="mt-3 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Example question:</p>
                <p className="mt-1 text-sm italic text-gray-800">
                  &ldquo;In lines 15-25, how does the writer use language to describe the setting?&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-gray-700">
                  Use the <strong>What-How-Why</strong> method: identify a technique (what), name it using subject terminology (how), and explain the effect on the reader (why). Aim for 2-3 developed analytical points. Spend about 8-10 minutes.
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary">Mark scheme &mdash; Level descriptors:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li><strong>Level 1 (1-2 marks):</strong> Simple awareness of language, limited use of terminology.</li>
                  <li><strong>Level 2 (3-4 marks):</strong> Some analysis of language with appropriate examples and terminology.</li>
                  <li><strong>Level 3 (5-6 marks):</strong> Detailed analysis of language with well-chosen examples, precise terminology, and perceptive comments on effect.</li>
                </ul>
              </div>
            </div>

            {/* Q4 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">4</span>
                <h3 className="text-lg font-bold text-gray-900">Structural / Language Analysis (6 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                <strong>AO2</strong> &mdash; Analyse how the writer uses language and/or structure to achieve a specific effect in a different section of the text.
              </p>
              <div className="mt-3 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Example question:</p>
                <p className="mt-1 text-sm italic text-gray-800">
                  &ldquo;In lines 26-39, how does the writer make the reader feel sympathy for the character?&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-gray-700">
                  Think about both language <em>and</em> structure here. Consider sentence lengths, paragraph structure, focus shifts, narrative perspective, and use of dialogue alongside language devices. Spend about 8-10 minutes.
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">5</span>
                <h3 className="text-lg font-bold text-gray-900">Critical Evaluation (15 marks)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                <strong>AO4</strong> &mdash; Evaluate critically how effective the writer has been, referring to the whole text. You will be given a statement and asked to what extent you agree.
              </p>
              <div className="mt-3 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Example question:</p>
                <p className="mt-1 text-sm italic text-gray-800">
                  &ldquo;A student said: &lsquo;This extract creates a strong sense of danger throughout.&rsquo; To what extent do you agree? You should refer to the writer&rsquo;s use of language and structure to support your answer.&rdquo;
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-accent-50 p-4">
                <p className="text-sm font-medium text-accent-700">Top tip:</p>
                <p className="mt-1 text-sm text-gray-700">
                  This is the highest-tariff reading question. Structure your response as a mini-essay. Address the statement directly, use multiple quotations from across the whole text, analyse language and structure, and offer a balanced evaluation. Spend 20-25 minutes. Aim for 3-4 paragraphs.
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary">Mark scheme &mdash; Level descriptors:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li><strong>Level 1 (1-3 marks):</strong> Limited evaluation with little textual reference. Simple, unsupported comments.</li>
                  <li><strong>Level 2 (4-6 marks):</strong> Some evaluation with references. Attempts to respond to the statement but may be descriptive.</li>
                  <li><strong>Level 3 (7-9 marks):</strong> Clear evaluation with relevant examples. Responds to the statement with some analysis of effects.</li>
                  <li><strong>Level 4 (10-12 marks):</strong> Detailed, developed evaluation. Convincing analysis of both language and structure across the text.</li>
                  <li><strong>Level 5 (13-15 marks):</strong> Perceptive, evaluative response with sophisticated analysis. Precisely selected evidence; nuanced, original interpretation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section B: Imaginative Writing ────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Section B: Imaginative Writing (40 marks)</h2>
          <p className="mt-3 leading-relaxed text-gray-700">
            You will be given a <strong>choice of two tasks</strong>. Pick the one that sparks your imagination. Tasks are often linked
            thematically to the Section A extract. You might be asked to write a description, a narrative, or a piece that begins
            with a given opening.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
              <h3 className="font-bold text-accent-700">AO5: Content &amp; Organisation (24 marks)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Communicate clearly, effectively, and imaginatively
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Select and adapt tone, style, and register
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Use structural features including paragraphs, varied sentence forms, and discourse markers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Engage and sustain the reader&rsquo;s interest throughout
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary-200 bg-primary-50 p-6">
              <h3 className="font-bold text-primary-700">AO6: Technical Accuracy (16 marks)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Wide range of vocabulary chosen for effect
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Varied and controlled sentence structures (simple, compound, complex)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Accurate spelling including ambitious vocabulary
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Full range of punctuation used accurately (commas, semicolons, colons, dashes, ellipses)
                </li>
              </ul>
            </div>
          </div>

          {/* Mark scheme levels */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Level</th>
                  <th className="px-4 py-3 font-semibold">AO5 Marks</th>
                  <th className="px-4 py-3 font-semibold">AO5 Descriptor</th>
                  <th className="px-4 py-3 font-semibold">AO6 Marks</th>
                  <th className="px-4 py-3 font-semibold">AO6 Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">1</td>
                  <td className="px-4 py-3 text-gray-700">1-6</td>
                  <td className="px-4 py-3 text-gray-700">Simple communication; limited vocabulary; minimal paragraphing; little awareness of audience.</td>
                  <td className="px-4 py-3 text-gray-700">1-4</td>
                  <td className="px-4 py-3 text-gray-700">Simple vocabulary; limited sentence structures; errors in spelling and punctuation impede meaning.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">2</td>
                  <td className="px-4 py-3 text-gray-700">7-12</td>
                  <td className="px-4 py-3 text-gray-700">Some attempt to match purpose; some structural features; begins to engage the reader.</td>
                  <td className="px-4 py-3 text-gray-700">5-8</td>
                  <td className="px-4 py-3 text-gray-700">Some varied vocabulary; attempts complex sentences; mostly accurate spelling of common words.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">3</td>
                  <td className="px-4 py-3 text-gray-700">13-18</td>
                  <td className="px-4 py-3 text-gray-700">Clear, connected writing; sustained register; effective use of paragraphs and discourse markers.</td>
                  <td className="px-4 py-3 text-gray-700">9-12</td>
                  <td className="px-4 py-3 text-gray-700">Increasingly varied vocabulary; secure sentence control; generally accurate spelling and punctuation.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">4</td>
                  <td className="px-4 py-3 text-gray-700">19-24</td>
                  <td className="px-4 py-3 text-gray-700">Compelling, convincing writing; sophisticated structural choices; highly engaging; assured control of tone and style.</td>
                  <td className="px-4 py-3 text-gray-700">13-16</td>
                  <td className="px-4 py-3 text-gray-700">Extensive, ambitious vocabulary; full range of sentence forms for effect; virtually faultless spelling and punctuation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Example responses ─────────────────────────────────────── */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Example Responses</h2>

          {/* Q3 example */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Question 3 &mdash; Language Analysis (Level 3 / 6 marks)</h3>
            <div className="mt-3 rounded-lg bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">Question:</p>
              <p className="mt-1 text-sm italic text-gray-800">
                &ldquo;In lines 10-20, how does the writer use language to create a sense of fear?&rdquo;
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">Extract context (imagined):</p>
              <p className="mt-1 text-sm italic text-gray-700">
                &ldquo;The darkness swallowed him whole, pressing against his skin like a living creature. Each footstep echoed
                through the hollow corridor, returning to him distorted and strange, as though the house itself were mocking
                his courage.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-50 p-4">
              <p className="text-sm font-semibold text-accent-700">Example response:</p>
              <div className="mt-2 space-y-3 text-sm text-gray-800 leading-relaxed">
                <p>
                  The writer uses personification in &ldquo;the darkness swallowed him whole&rdquo; to present the darkness
                  as a predatory force, suggesting the character has been consumed and is powerless. The verb &ldquo;swallowed&rdquo;
                  has connotations of being devoured, implying the character is vulnerable prey, which creates fear in the reader
                  as the darkness is transformed from a passive absence of light into an active, threatening entity.
                </p>
                <p>
                  Furthermore, the simile &ldquo;pressing against his skin like a living creature&rdquo; reinforces this
                  sense of the supernatural by giving the darkness a physical, tactile quality. The word &ldquo;pressing&rdquo;
                  suggests claustrophobia and entrapment, making the reader feel the character&rsquo;s growing panic.
                </p>
                <p>
                  The writer also personifies the house itself, saying it was &ldquo;mocking his courage,&rdquo; which
                  subverts the reader&rsquo;s expectation that a house should be a place of safety. This creates an unsettling
                  sense that the environment is hostile and sentient, deepening the atmosphere of fear.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-4">
              <p className="text-sm font-medium text-primary">Examiner commentary:</p>
              <p className="mt-1 text-sm text-gray-700">
                This response achieves Level 3 because it makes perceptive comments about the effects of language, uses precise
                subject terminology (personification, simile, connotations), embeds quotations fluently, and analyses the effect
                on the reader rather than merely describing what happens.
              </p>
            </div>
          </div>

          {/* Q5 example */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Question 5 &mdash; Critical Evaluation (Level 4-5 / 13-15 marks)</h3>
            <div className="mt-3 rounded-lg bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">Question:</p>
              <p className="mt-1 text-sm italic text-gray-800">
                &ldquo;A student said: &lsquo;The writer successfully creates a character the reader admires.&rsquo;
                To what extent do you agree?&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-50 p-4">
              <p className="text-sm font-semibold text-accent-700">Example opening paragraph:</p>
              <div className="mt-2 text-sm text-gray-800 leading-relaxed">
                <p>
                  I largely agree with this statement. The writer establishes the protagonist as admirable from the outset
                  through her defiance of social conventions. In the opening lines, the narrator states she &ldquo;refused to
                  lower her gaze,&rdquo; which immediately signals resilience and self-assurance. The verb &ldquo;refused&rdquo;
                  is decisive and active, placing her in control of the situation. For a 19th-century female character, this
                  refusal to submit to societal pressure would have been particularly striking to a contemporary reader, and
                  it positions her as a figure worthy of admiration. However, the writer also introduces complexity by hinting
                  at the personal cost of this defiance through the adverb &ldquo;wearily,&rdquo; suggesting that maintaining
                  her principles is exhausting, which makes her more human and therefore more deserving of the reader&rsquo;s respect.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-4">
              <p className="text-sm font-medium text-primary">Why this works:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-700">
                <li>&bull; Directly addresses the statement (&ldquo;I largely agree&rdquo;)</li>
                <li>&bull; Embeds quotations and analyses specific word choices</li>
                <li>&bull; Considers the 19th-century context (demonstrates AO4 evaluation)</li>
                <li>&bull; Offers a balanced view (&ldquo;However...&rdquo;)</li>
                <li>&bull; Discusses effect on the reader throughout</li>
              </ul>
            </div>
          </div>

          {/* Section B example */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Section B &mdash; Imaginative Writing (Level 4 opening)</h3>
            <div className="mt-3 rounded-lg bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500">Task:</p>
              <p className="mt-1 text-sm italic text-gray-800">
                &ldquo;Write a description suggested by this image: a lone figure standing at the edge of a cliff at sunset.&rdquo;
              </p>
            </div>
            <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-50 p-4">
              <p className="text-sm font-semibold text-accent-700">Example opening:</p>
              <div className="mt-2 text-sm text-gray-800 leading-relaxed">
                <p>
                  The world burned. Not with flames, but with colour &mdash; great swathes of amber and crimson bleeding
                  across the horizon as though the sky had been wounded. She stood at the precipice, her silhouette carved
                  against the dying light, and felt the wind tear at her coat like desperate hands trying to pull her back.
                </p>
                <p className="mt-3">
                  Below, the sea churned. Restless. Relentless. It threw itself against the cliff face with the patience
                  of something that knew, eventually, it would win. The spray reached her like cold whispers, settling
                  on her cheeks and mingling with salt of a different kind.
                </p>
                <p className="mt-3">
                  She did not move. There was something defiant in her stillness &mdash; a refusal to be rushed by the
                  encroaching darkness, by the gulls that screamed overhead, by the distant hum of a world that had already
                  moved on without her. Here, at the edge of everything, time had agreed to wait.
                </p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary-50 p-4">
              <p className="text-sm font-medium text-primary">Techniques demonstrated:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-700">
                <li>&bull; <strong>One-line paragraph opener</strong> for impact</li>
                <li>&bull; <strong>Metaphor &amp; personification:</strong> &ldquo;the sky had been wounded,&rdquo; &ldquo;cold whispers&rdquo;</li>
                <li>&bull; <strong>Minor sentences:</strong> &ldquo;Restless. Relentless.&rdquo; for rhythm and emphasis</li>
                <li>&bull; <strong>Sensory detail:</strong> touch (spray, wind), sight (colour), sound (gulls, hum)</li>
                <li>&bull; <strong>Varied sentence structure:</strong> short declarative, complex, and compound sentences</li>
                <li>&bull; <strong>Ambitious vocabulary:</strong> &ldquo;precipice,&rdquo; &ldquo;encroaching,&rdquo; &ldquo;silhouette&rdquo;</li>
                <li>&bull; <strong>Semicolons and dashes</strong> used accurately for effect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exam strategy ─────────────────────────────────────────── */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Exam Strategy &amp; Timing</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                  <th className="px-4 py-3 font-semibold">Suggested Time</th>
                  <th className="px-4 py-3 font-semibold">Key Advice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Q1</td>
                  <td className="px-4 py-3 text-gray-700">1</td>
                  <td className="px-4 py-3 text-gray-700">1 min</td>
                  <td className="px-4 py-3 text-gray-700">Copy exact phrase. Do not explain.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Q2</td>
                  <td className="px-4 py-3 text-gray-700">2</td>
                  <td className="px-4 py-3 text-gray-700">2-3 min</td>
                  <td className="px-4 py-3 text-gray-700">Two clear, separate points. Brief quotation or paraphrase.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Q3</td>
                  <td className="px-4 py-3 text-gray-700">6</td>
                  <td className="px-4 py-3 text-gray-700">8-10 min</td>
                  <td className="px-4 py-3 text-gray-700">2-3 analytical points. What-How-Why. Use terminology.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Q4</td>
                  <td className="px-4 py-3 text-gray-700">6</td>
                  <td className="px-4 py-3 text-gray-700">8-10 min</td>
                  <td className="px-4 py-3 text-gray-700">Consider both language and structure. Same approach as Q3.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Q5</td>
                  <td className="px-4 py-3 text-gray-700">15</td>
                  <td className="px-4 py-3 text-gray-700">20-25 min</td>
                  <td className="px-4 py-3 text-gray-700">Mini-essay. Address statement. Evidence from whole text. Balanced.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Q6 (Writing)</td>
                  <td className="px-4 py-3 text-gray-700">40</td>
                  <td className="px-4 py-3 text-gray-700">45 min</td>
                  <td className="px-4 py-3 text-gray-700">5 min planning, 35 min writing, 5 min proofreading.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-success-200 bg-success-50 p-5">
              <h3 className="font-bold text-success-700">Do:</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>&bull; Read the extract twice before answering</li>
                <li>&bull; Highlight or underline key words in each question</li>
                <li>&bull; Only write about the specified line references</li>
                <li>&bull; Use short, embedded quotations (&ldquo;zoom in&rdquo; on individual words)</li>
                <li>&bull; Plan your creative writing before starting</li>
                <li>&bull; Leave 5 minutes at the end to proofread</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warn-200 bg-warn-50 p-5">
              <h3 className="font-bold text-warn-700">Don&rsquo;t:</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>&bull; Feature-spot without analysing effect</li>
                <li>&bull; Retell or paraphrase the story</li>
                <li>&bull; Write outside the given line references</li>
                <li>&bull; Use overly long quotations</li>
                <li>&bull; Try to write a full novel &mdash; quality over quantity</li>
                <li>&bull; Forget punctuation variety in your creative writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
