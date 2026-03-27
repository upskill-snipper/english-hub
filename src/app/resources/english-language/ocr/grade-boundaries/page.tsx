"use client";

import Link from "next/link";
import { useState } from "react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-foreground hover:bg-muted transition-colors"
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-6 py-6 text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function GradeBoundariesPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/20">
            OCR GCSE English Language (J351)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grade Boundaries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Recent grade boundaries, what each grade looks like in practice,
            and how to push your marks into the next band.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/english-language/ocr" className="hover:text-primary transition-colors">
              OCR English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">Grade Boundaries</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">

        {/* Important note */}
        <div className="rounded-xl border border-warn-200 bg-warn-50 p-6">
          <h2 className="font-bold text-warn-800">Important note</h2>
          <p className="mt-2 text-sm text-warn-700">
            Grade boundaries change every year based on the difficulty of the
            papers and the performance of the whole cohort. The boundaries below
            are from recent exam series and are provided as a <strong>guide</strong>{" "}
            only. Your actual grade boundary may be slightly higher or lower.
            Always check the{" "}
            <a
              href="https://www.ocr.org.uk/administration/stage-4-results/grade-boundaries/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              OCR website
            </a>{" "}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* Overall grade boundaries */}
        <Section title="Overall grade boundaries (combined Component 01 + Component 02)" defaultOpen>
          <p>
            The total number of marks across both components is <strong>160</strong>{" "}
            (80 per component). Your raw marks from both components are combined
            to produce your overall grade. Below are the approximate boundaries
            from recent exam series:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2 pr-4">June 2023</th>
                  <th className="py-2 pr-4">June 2024</th>
                  <th className="py-2 pr-4">June 2025</th>
                  <th className="py-2 pr-4">Approx. %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-success-50">
                  <td className="py-2 pr-4 font-bold text-success-700">9</td>
                  <td className="py-2 pr-4">122</td>
                  <td className="py-2 pr-4">124</td>
                  <td className="py-2 pr-4">125</td>
                  <td className="py-2 pr-4">~77%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pr-4 font-bold text-success-700">8</td>
                  <td className="py-2 pr-4">111</td>
                  <td className="py-2 pr-4">113</td>
                  <td className="py-2 pr-4">114</td>
                  <td className="py-2 pr-4">~71%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">100</td>
                  <td className="py-2 pr-4">102</td>
                  <td className="py-2 pr-4">103</td>
                  <td className="py-2 pr-4">~64%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">6</td>
                  <td className="py-2 pr-4">87</td>
                  <td className="py-2 pr-4">89</td>
                  <td className="py-2 pr-4">90</td>
                  <td className="py-2 pr-4">~56%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">5</td>
                  <td className="py-2 pr-4">73</td>
                  <td className="py-2 pr-4">75</td>
                  <td className="py-2 pr-4">76</td>
                  <td className="py-2 pr-4">~47%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">55</td>
                  <td className="py-2 pr-4">57</td>
                  <td className="py-2 pr-4">58</td>
                  <td className="py-2 pr-4">~36%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">3</td>
                  <td className="py-2 pr-4">40</td>
                  <td className="py-2 pr-4">42</td>
                  <td className="py-2 pr-4">42</td>
                  <td className="py-2 pr-4">~26%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">2</td>
                  <td className="py-2 pr-4">26</td>
                  <td className="py-2 pr-4">27</td>
                  <td className="py-2 pr-4">28</td>
                  <td className="py-2 pr-4">~17%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">1</td>
                  <td className="py-2 pr-4">11</td>
                  <td className="py-2 pr-4">12</td>
                  <td className="py-2 pr-4">12</td>
                  <td className="py-2 pr-4">~7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These boundaries are approximate and based on publicly
            available OCR data. The &ldquo;Approx. %&rdquo; column shows
            roughly what percentage of the total 160 marks you need.
          </p>
        </Section>

        {/* What each grade looks like */}
        <Section title="What each grade looks like in practice">
          <p>
            Understanding the grade descriptors helps you see exactly what
            examiners expect at each level. Here is what typical work looks like
            at the key grade boundaries:
          </p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border-l-4 border-success-500 bg-success-50/30 p-5">
              <h3 className="text-lg font-bold text-success-700">Grade 9 &mdash; Exceptional</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Perceptive, original analysis that moves beyond the obvious and explores layers of meaning.</li>
                  <li>Precisely selected evidence seamlessly woven into argument, showing critical awareness of the text.</li>
                  <li>Sophisticated, accurate use of linguistic and literary terminology to sharpen analysis.</li>
                  <li>Sustained critical evaluation with confident exploration of alternative interpretations.</li>
                  <li>Consistent engagement with the writer&rsquo;s choices, effects, and purpose across the whole text.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Compelling, assured writing with a distinctive voice sustained throughout.</li>
                  <li>Ambitious, precise vocabulary deployed naturally and with flair.</li>
                  <li>Inventive structural choices that control meaning and reader response (e.g., non-linear narrative, deliberate pacing shifts).</li>
                  <li>A full range of punctuation used accurately and for deliberate stylistic effect.</li>
                  <li>Virtually flawless spelling and grammar, including complex and irregular words.</li>
                  <li>Writing that feels crafted and original rather than formulaic.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary/50 bg-primary/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 7&ndash;8 &mdash; Strong</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Detailed, well-developed analysis with clear explanations of writers&rsquo; effects.</li>
                  <li>Well-chosen evidence with thorough exploration of language, form, and structure.</li>
                  <li>Accurate and consistent use of subject terminology.</li>
                  <li>Thoughtful evaluation that engages with the text and the writer&rsquo;s methods.</li>
                  <li>Some exploration of alternative readings and contextual influences.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Engaging, well-crafted writing with a clear sense of purpose, audience, and form.</li>
                  <li>Increasingly sophisticated vocabulary and phrasing chosen for effect.</li>
                  <li>Effective structural features that shape the reader&rsquo;s experience.</li>
                  <li>Wide range of sentence structures used consciously for effect.</li>
                  <li>Mostly accurate spelling, punctuation, and grammar with only minor slips.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-primary/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 5&ndash;6 &mdash; Secure</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Clear explanations of language and structural effects with relevant detail.</li>
                  <li>Relevant evidence selected and commented on, mostly with clear purpose.</li>
                  <li>Subject terminology used, mostly accurately.</li>
                  <li>A clear response to the task with some personal engagement and interpretation.</li>
                  <li>Analysis may lack depth or consistency &mdash; some points well developed, others more surface-level.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Writing communicates effectively with some engaging moments and awareness of audience.</li>
                  <li>Vocabulary chosen for effect, though may occasionally lack precision.</li>
                  <li>Paragraphs used effectively with some deliberate structural choices.</li>
                  <li>Some variety in sentence structures and conscious use of sentence types.</li>
                  <li>Generally accurate spelling and punctuation with errors on more complex words.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">Grade 4 &mdash; Standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Some understanding of language effects, but explanations may be thin or underdeveloped.</li>
                  <li>Some appropriate references to the text, though not always precisely chosen.</li>
                  <li>Some subject terminology used, not always accurately.</li>
                  <li>Some response to the task, though may lack sustained focus or detailed support.</li>
                  <li>May feature-spot (identify techniques without explaining their effect) or retell.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Writing communicates with some clarity but may drift from purpose or audience.</li>
                  <li>Some attempts at vocabulary for effect, though choices may be generic.</li>
                  <li>Basic structural features present (paragraphs, some variety in openings).</li>
                  <li>Sentence demarcation mostly secure but some comma splicing or run-on sentences.</li>
                  <li>Spelling of common words accurate; errors with more ambitious vocabulary.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-border bg-muted/50 p-5">
              <h3 className="text-lg font-bold text-muted-foreground">Grades 1&ndash;3 &mdash; Below standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Simple comments on language with limited or no analysis of effects.</li>
                  <li>Simple references that may paraphrase or copy rather than analyse.</li>
                  <li>Little or no subject terminology.</li>
                  <li>May retell or describe events rather than analyse the writer&rsquo;s craft.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Simple ideas with limited development and little sense of audience.</li>
                  <li>Basic, everyday vocabulary with little attempt at effect.</li>
                  <li>Limited structural features; paragraphing may be absent or random.</li>
                  <li>Simple sentence forms; frequent errors in spelling, punctuation, and grammar.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* How to push your grade up */}
        <Section title="How to push your grade higher">
          <p>
            Here are targeted strategies for moving from one grade band to the
            next, tailored to the OCR specification:
          </p>

          <div className="mt-4 space-y-5">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-primary">Grade 4 &rarr; Grade 5</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Stop feature-spotting. Every time you
                  identify a technique, write at least two sentences explaining
                  its effect on the reader. Use phrases like &ldquo;This
                  suggests&hellip;&rdquo; or &ldquo;This creates a sense
                  of&hellip;&rdquo; to move from identification to analysis.
                </li>
                <li>
                  <strong>Writing:</strong> Focus on technical accuracy.
                  Eliminating comma splicing, using capital letters correctly,
                  and spelling common words accurately can gain you several
                  marks on AO6 alone. Practise proofreading your work in the
                  final five minutes of each component.
                </li>
                <li>
                  <strong>Timing:</strong> Make sure you attempt every question
                  and complete the writing task in full. An unfinished writing
                  response is the most common reason students miss a Grade 5 on
                  OCR papers.
                </li>
                <li>
                  <strong>Component 01 tip:</strong> On the non-fiction reading
                  questions, practise identifying the writer&rsquo;s viewpoint
                  and the methods they use to persuade &mdash; this is where
                  many Grade 4 students lose marks.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-primary">Grade 5 &rarr; Grade 7</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Move from explaining effects to
                  analysing <em>why</em> the writer made specific choices.
                  Explore connotations of individual words and consider how
                  language choices connect to the writer&rsquo;s wider purpose.
                  Use tentative language (&ldquo;Perhaps,&rdquo; &ldquo;This
                  could suggest&rdquo;) to show you are exploring meaning.
                </li>
                <li>
                  <strong>Writing:</strong> Upgrade your vocabulary. Replace
                  basic verbs and adjectives with more precise alternatives.
                  Use a wider range of punctuation: semicolons, colons, and
                  dashes for effect. Show clear awareness of your audience
                  and purpose throughout.
                </li>
                <li>
                  <strong>Structure:</strong> Plan your writing tasks. A clear
                  structural arc with deliberate paragraph breaks shows
                  organisation and control. In Component 02 creative writing,
                  experiment with pacing, perspective, and narrative hooks.
                </li>
                <li>
                  <strong>Comparison:</strong> In Component 01 comparison
                  questions, make sure you integrate both texts throughout
                  rather than writing about one and then the other. Use
                  comparative connectives: &ldquo;Similarly,&rdquo;
                  &ldquo;In contrast,&rdquo; &ldquo;While Source A&hellip;,
                  Source B&hellip;&rdquo;
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-primary">Grade 7 &rarr; Grade 9</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Develop a critical, evaluative voice.
                  Consider alternative interpretations: &ldquo;While one reading
                  of this image suggests X, it could equally be interpreted
                  as Y.&rdquo; Engage with the writer&rsquo;s broader purpose,
                  context, and the effect on different audiences.
                </li>
                <li>
                  <strong>Writing:</strong> Develop a distinctive voice. The
                  difference between Grade 7 and Grade 9 writing is often
                  authenticity and originality &mdash; the sense that the writing
                  has a unique perspective, not that it follows a template.
                  Avoid generic openings and predictable plots.
                </li>
                <li>
                  <strong>Precision:</strong> Every word should earn its place.
                  Cut unnecessary phrases. Choose the single best word rather
                  than listing adjectives. Make every rhetorical or literary
                  device feel organic and purposeful.
                </li>
                <li>
                  <strong>Component 02 mastery:</strong> In your creative
                  writing, show sophisticated control of narrative voice,
                  atmosphere, and reader response. Use motifs, symbolism,
                  and subtext. Demonstrate that you can control tension and
                  pacing with restraint.
                </li>
                <li>
                  <strong>Reading widely:</strong> Students who achieve Grade 9
                  almost always read extensively outside of class. Reading
                  high-quality fiction, journalism, and speeches gives you a
                  larger vocabulary, a better sense of style, and more
                  sophisticated structural instincts.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Marks per question - Component 01 */}
        <Section title="Marks per question: Component 01 &mdash; Communicating Information and Ideas">
          <p>
            Component 01 tests reading and writing of non-fiction texts. It is
            worth <strong>80 marks</strong> and makes up <strong>50%</strong> of
            the qualification. You have <strong>2 hours</strong> to complete it.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">What it tests</th>
                  <th className="py-2 pr-4">AO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4" rowSpan={5}>Section A: Reading</td>
                  <td className="py-2 pr-4 font-semibold">Q1</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Retrieve and interpret information from one text</td>
                  <td className="py-2 pr-4">AO1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q2</td>
                  <td className="py-2 pr-4">6 marks</td>
                  <td className="py-2 pr-4">Explain how language is used for effect</td>
                  <td className="py-2 pr-4">AO2</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q3</td>
                  <td className="py-2 pr-4">6 marks</td>
                  <td className="py-2 pr-4">Identify and interpret themes or ideas across both texts</td>
                  <td className="py-2 pr-4">AO1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q4</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Compare how writers convey viewpoints and perspectives</td>
                  <td className="py-2 pr-4">AO3</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q5</td>
                  <td className="py-2 pr-4">6 marks</td>
                  <td className="py-2 pr-4">Evaluate how effectively a writer achieves their purpose</td>
                  <td className="py-2 pr-4">AO4</td>
                </tr>
                <tr className="bg-primary/10/50">
                  <td className="py-2 pr-4" rowSpan={2}>Section B: Writing</td>
                  <td className="py-2 pr-4 font-semibold">Q6</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Writing to present a viewpoint (e.g., article, speech, letter)</td>
                  <td className="py-2 pr-4">AO5 (14) + AO6 (10)</td>
                </tr>
                <tr className="bg-primary/10/50">
                  <td className="py-2 pr-4 font-semibold">Q7</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Writing to present a viewpoint (shorter task or different form)</td>
                  <td className="py-2 pr-4">AO5 (14) + AO6 (10)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">Total</td>
                  <td className="py-2 pr-4" colSpan={2}>80 marks</td>
                  <td className="py-2 pr-4" colSpan={2}>Reading: 32 / Writing: 48</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            The writing section (Q6 and Q7 combined) is worth <strong>48 out
            of 80 marks</strong> &mdash; 60% of this component. Strong
            transactional writing skills are essential for a high mark on
            Component 01.
          </p>
        </Section>

        {/* Marks per question - Component 02 */}
        <Section title="Marks per question: Component 02 &mdash; Exploring Effects and Impact">
          <p>
            Component 02 tests reading and writing of fiction and literary
            non-fiction. It is worth <strong>80 marks</strong> and makes up{" "}
            <strong>50%</strong> of the qualification. You have{" "}
            <strong>2 hours</strong> to complete it.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">What it tests</th>
                  <th className="py-2 pr-4">AO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4" rowSpan={4}>Section A: Reading</td>
                  <td className="py-2 pr-4 font-semibold">Q1</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Retrieve and interpret information from a 21st-century text</td>
                  <td className="py-2 pr-4">AO1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q2</td>
                  <td className="py-2 pr-4">6 marks</td>
                  <td className="py-2 pr-4">Explain how language and structure create effects</td>
                  <td className="py-2 pr-4">AO2</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q3</td>
                  <td className="py-2 pr-4">6 marks</td>
                  <td className="py-2 pr-4">Analyse a 19th-century text: how language creates meaning</td>
                  <td className="py-2 pr-4">AO2</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q4</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Evaluate critically how a writer achieves impact on the reader</td>
                  <td className="py-2 pr-4">AO4</td>
                </tr>
                <tr className="bg-primary/10/50">
                  <td className="py-2 pr-4">Section B: Writing</td>
                  <td className="py-2 pr-4 font-semibold">Q5</td>
                  <td className="py-2 pr-4">40 marks</td>
                  <td className="py-2 pr-4">Creative / imaginative writing (narrative or descriptive)</td>
                  <td className="py-2 pr-4">AO5 (24) + AO6 (16)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">Total</td>
                  <td className="py-2 pr-4" colSpan={2}>80 marks</td>
                  <td className="py-2 pr-4" colSpan={2}>Reading: 40 / Writing: 40</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Component 02 is split evenly between reading and writing.
            The creative writing task (Q5) alone is worth <strong>40 out
            of 80 marks</strong> &mdash; half the component. A well-prepared,
            polished piece of creative writing can make an enormous difference
            to your overall grade.
          </p>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/ocr"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to OCR English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
