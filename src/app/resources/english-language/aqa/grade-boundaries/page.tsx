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
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            AQA GCSE English Language (8700)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grade Boundaries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
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
            <Link href="/resources/english-language/aqa" className="hover:text-primary transition-colors">
              AQA English Language
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
              href="https://www.aqa.org.uk/exams-administration/results-days/grade-boundaries"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              AQA website
            </a>{" "}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* Overall grade boundaries */}
        <Section title="Overall grade boundaries (combined Paper 1 + Paper 2)" defaultOpen>
          <p>
            The total number of marks across both papers is <strong>160</strong>{" "}
            (80 per paper). Your raw marks from both papers are combined to
            produce your overall grade. Below are the approximate boundaries
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
                  <td className="py-2 pr-4">119</td>
                  <td className="py-2 pr-4">121</td>
                  <td className="py-2 pr-4">122</td>
                  <td className="py-2 pr-4">~75%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pr-4 font-bold text-success-700">8</td>
                  <td className="py-2 pr-4">108</td>
                  <td className="py-2 pr-4">110</td>
                  <td className="py-2 pr-4">111</td>
                  <td className="py-2 pr-4">~69%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">97</td>
                  <td className="py-2 pr-4">99</td>
                  <td className="py-2 pr-4">100</td>
                  <td className="py-2 pr-4">~62%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">6</td>
                  <td className="py-2 pr-4">84</td>
                  <td className="py-2 pr-4">86</td>
                  <td className="py-2 pr-4">87</td>
                  <td className="py-2 pr-4">~54%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">5</td>
                  <td className="py-2 pr-4">70</td>
                  <td className="py-2 pr-4">72</td>
                  <td className="py-2 pr-4">73</td>
                  <td className="py-2 pr-4">~45%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">52</td>
                  <td className="py-2 pr-4">54</td>
                  <td className="py-2 pr-4">55</td>
                  <td className="py-2 pr-4">~34%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">3</td>
                  <td className="py-2 pr-4">38</td>
                  <td className="py-2 pr-4">40</td>
                  <td className="py-2 pr-4">40</td>
                  <td className="py-2 pr-4">~25%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">2</td>
                  <td className="py-2 pr-4">24</td>
                  <td className="py-2 pr-4">25</td>
                  <td className="py-2 pr-4">26</td>
                  <td className="py-2 pr-4">~16%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">1</td>
                  <td className="py-2 pr-4">10</td>
                  <td className="py-2 pr-4">10</td>
                  <td className="py-2 pr-4">11</td>
                  <td className="py-2 pr-4">~7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These boundaries are approximate and based on publicly
            available AQA data. The &ldquo;Approx. %&rdquo; column shows
            roughly what percentage of the total 160 marks you need.
          </p>
        </Section>

        {/* What each grade looks like */}
        <Section title="What each grade looks like in practice">
          <p>
            Understanding the grade descriptors helps you see exactly what
            markers expect at each level. Here is what typical work looks like
            at the key grade boundaries:
          </p>

          <div className="mt-4 space-y-6">
            <div className="rounded-lg border-l-4 border-success-500 bg-success-50/30 p-5">
              <h3 className="text-lg font-bold text-success-700">Grade 9 &mdash; Exceptional</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Perceptive, original analysis that goes beyond the obvious interpretation.</li>
                  <li>Judicious, precisely selected quotations seamlessly embedded in sentences.</li>
                  <li>Sophisticated subject terminology used accurately and purposefully.</li>
                  <li>Critical evaluation that explores multiple interpretations and considers the writer&rsquo;s intentions.</li>
                  <li>Consistently engages with connotations, nuance, and the subtleties of language.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Compelling, convincing writing that sustains the reader&rsquo;s interest throughout.</li>
                  <li>Extensive, ambitious vocabulary used precisely and naturally.</li>
                  <li>Varied, inventive structural choices that shape meaning (e.g., cyclical structure, deliberate shifts in pace).</li>
                  <li>A distinctive, authentic voice that feels crafted, not formulaic.</li>
                  <li>A full range of punctuation used accurately and for deliberate effect.</li>
                  <li>Virtually flawless spelling and grammar, including complex and irregular words.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary/50 bg-primary/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 7-8 &mdash; Strong</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Detailed, well-developed analysis with clear explanations of effects.</li>
                  <li>Well-chosen quotations with thorough exploration of language and structure.</li>
                  <li>Accurate subject terminology used consistently.</li>
                  <li>Thoughtful evaluation that engages with the statement and writer&rsquo;s methods.</li>
                  <li>Some exploration of alternative interpretations.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Engaging, well-crafted writing with a clear sense of purpose and audience.</li>
                  <li>Increasingly sophisticated vocabulary and phrasing.</li>
                  <li>Effective structural features that contribute to the overall effect.</li>
                  <li>Wide range of sentence structures used for effect.</li>
                  <li>Mostly accurate spelling and punctuation with only minor errors.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-primary/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 5-6 &mdash; Secure</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Clear explanations of language and structural effects.</li>
                  <li>Relevant quotations selected and commented on.</li>
                  <li>Subject terminology used, mostly accurately.</li>
                  <li>A clear response to the evaluation statement with some personal engagement.</li>
                  <li>Analysis may lack depth or consistency &mdash; some points developed well, others more surface-level.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Writing is clear and communicates effectively with some engaging moments.</li>
                  <li>Vocabulary is chosen for effect, though may occasionally lack precision.</li>
                  <li>Paragraphs are used effectively with some structural awareness.</li>
                  <li>Some variety in sentence structures.</li>
                  <li>Generally accurate spelling and punctuation with some errors on more complex words.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-500/10/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">Grade 4 &mdash; Standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Some understanding of language effects, but explanations may be thin.</li>
                  <li>Some appropriate references to the text, though not always well-chosen.</li>
                  <li>Some subject terminology, not always accurate.</li>
                  <li>Some response to the evaluation statement, though may lack detail.</li>
                  <li>May feature-spot (identify techniques without explaining their effect).</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Writing communicates with some clarity but may drift or lose focus.</li>
                  <li>Some attempts at vocabulary for effect.</li>
                  <li>Basic structural features (paragraphs, some variety).</li>
                  <li>Sentence demarcation mostly secure but some comma splicing or run-on sentences.</li>
                  <li>Spelling of basic words accurate; errors with more complex vocabulary.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-border bg-muted/50 p-5">
              <h3 className="text-lg font-bold text-muted-foreground">Grades 1-3 &mdash; Below standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Simple comments on language with limited or no analysis.</li>
                  <li>Simple references that may paraphrase rather than quote.</li>
                  <li>Little or no subject terminology.</li>
                  <li>May retell the text rather than analyse or evaluate it.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Simple ideas with limited development.</li>
                  <li>Basic, everyday vocabulary.</li>
                  <li>Limited structural features; may lack clear paragraphing.</li>
                  <li>Simple sentence forms; frequent errors in spelling and punctuation.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* How to push your grade up */}
        <Section title="How to push your grade higher">
          <p>
            Here are targeted strategies for moving from one grade band to the
            next:
          </p>

          <div className="mt-4 space-y-5">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-primary">Grade 4 &rarr; Grade 5</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Stop feature-spotting. Every time you
                  identify a technique, write at least two sentences explaining
                  its effect on the reader. Use the formula: &ldquo;This
                  suggests&hellip;&rdquo; or &ldquo;This creates a sense
                  of&hellip;&rdquo;
                </li>
                <li>
                  <strong>Writing:</strong> Focus on technical accuracy.
                  Eliminating comma splicing, using capital letters correctly,
                  and spelling common words accurately can gain you several
                  marks on Technical accuracy (AO6) alone.
                </li>
                <li>
                  <strong>Timing:</strong> Make sure you attempt every question
                  and complete Q5 in full. An unfinished Q5 is the most common
                  reason students miss a Grade 5.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-primary">Grade 5 &rarr; Grade 7</h3>
              <ul className="mt-2 ml-5 list-disc space-y-2 text-sm">
                <li>
                  <strong>Reading:</strong> Move from explaining effects to
                  analysing <em>why</em> the writer made specific choices.
                  Explore connotations of individual words. Use tentative
                  language (&ldquo;Perhaps,&rdquo; &ldquo;This could
                  suggest&rdquo;) to show you are exploring meaning.
                </li>
                <li>
                  <strong>Writing:</strong> Upgrade your vocabulary. Replace
                  basic verbs and adjectives with more precise alternatives
                  (see the Writing Skills page). Use a wider range of
                  punctuation: semicolons, colons, and dashes for effect.
                </li>
                <li>
                  <strong>Structure:</strong> Plan your creative writing. A
                  clear structural journey (e.g., calm &rarr; tension &rarr;
                  climax &rarr; resolution) with deliberate paragraph breaks
                  shows organisation and control.
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
                  as Y.&rdquo; Engage with the writer&rsquo;s broader purpose
                  and the text&rsquo;s context.
                </li>
                <li>
                  <strong>Writing:</strong> Develop a distinctive voice. The
                  difference between Grade 7 and Grade 9 creative writing is
                  often authenticity and originality &mdash; the sense that the
                  writing has a unique perspective, not that it follows a formula.
                </li>
                <li>
                  <strong>Precision:</strong> Every word should earn its place.
                  Cut unnecessary phrases. Choose the single best word rather
                  than listing adjectives. Make every literary device feel
                  organic and purposeful.
                </li>
                <li>
                  <strong>Reading widely:</strong> Students who achieve Grade 9
                  almost always read extensively outside of class. Reading
                  high-quality fiction and non-fiction gives you a larger
                  vocabulary, a better sense of style, and more sophisticated
                  structural instincts.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Marks per question */}
        <Section title="Marks per question at a glance">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Paper 1</th>
                  <th className="py-2 pr-4">Paper 2</th>
                  <th className="py-2 pr-4">Assessment objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q1</td>
                  <td className="py-2 pr-4">4 marks (list 4 things)</td>
                  <td className="py-2 pr-4">4 marks (shade 4 true statements)</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q2</td>
                  <td className="py-2 pr-4">8 marks (language analysis)</td>
                  <td className="py-2 pr-4">8 marks (summary / synthesis)</td>
                  <td className="py-2 pr-4">P1: Language and structure analysis (AO2) / P2: Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q3</td>
                  <td className="py-2 pr-4">8 marks (structure)</td>
                  <td className="py-2 pr-4">12 marks (language analysis)</td>
                  <td className="py-2 pr-4">Language and structure analysis (AO2)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q4</td>
                  <td className="py-2 pr-4">20 marks (evaluation)</td>
                  <td className="py-2 pr-4">16 marks (comparison)</td>
                  <td className="py-2 pr-4">P1: Critical evaluation (AO4) / P2: Comparing writers (AO3)</td>
                </tr>
                <tr className="bg-primary/10">
                  <td className="py-2 pr-4 font-semibold">Q5</td>
                  <td className="py-2 pr-4">40 marks (creative writing)</td>
                  <td className="py-2 pr-4">40 marks (writing for real purposes)</td>
                  <td className="py-2 pr-4">Content and organisation (AO5, 24) + Technical accuracy (AO6, 16)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">Total</td>
                  <td className="py-2 pr-4">80 marks</td>
                  <td className="py-2 pr-4">80 marks</td>
                  <td className="py-2 pr-4">160 combined</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Notice that Q5 on each paper is worth <strong>half the total
            marks</strong> for that paper. This means your writing is just as
            important as your reading &mdash; if not more so, since a strong
            piece of writing can be produced through preparation and practice
            regardless of what unseen text appears.
          </p>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/aqa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to AQA English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
