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
      <section
        className="px-4 py-16 text-white sm:py-20"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)) 50%, hsl(var(--primary)) 80%)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            WJEC Eduqas GCSE English Language (C700QS)
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
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/english-language/wjec" className="hover:text-foreground transition-colors">
              WJEC English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">Grade Boundaries</li>
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
              href="https://www.wjec.co.uk/qualifications/grade-boundaries/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              WJEC Eduqas website
            </a>{" "}
            for the most up-to-date boundaries after results day.
          </p>
        </div>

        {/* Overall grade boundaries */}
        <Section title="Overall grade boundaries (combined Component 1 + Component 2)" defaultOpen>
          <p>
            The total number of marks across both components is <strong>160</strong>.
            Component 1 is worth 40% (64 marks) and Component 2 is worth 60%
            (96 marks). Your raw marks from both components are combined to
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
                  <td className="py-2 pr-4">121</td>
                  <td className="py-2 pr-4">123</td>
                  <td className="py-2 pr-4">124</td>
                  <td className="py-2 pr-4">~77%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pr-4 font-bold text-success-700">8</td>
                  <td className="py-2 pr-4">109</td>
                  <td className="py-2 pr-4">111</td>
                  <td className="py-2 pr-4">112</td>
                  <td className="py-2 pr-4">~70%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">98</td>
                  <td className="py-2 pr-4">100</td>
                  <td className="py-2 pr-4">101</td>
                  <td className="py-2 pr-4">~63%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">6</td>
                  <td className="py-2 pr-4">85</td>
                  <td className="py-2 pr-4">87</td>
                  <td className="py-2 pr-4">88</td>
                  <td className="py-2 pr-4">~55%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-foreground">5</td>
                  <td className="py-2 pr-4">71</td>
                  <td className="py-2 pr-4">73</td>
                  <td className="py-2 pr-4">74</td>
                  <td className="py-2 pr-4">~46%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">53</td>
                  <td className="py-2 pr-4">55</td>
                  <td className="py-2 pr-4">56</td>
                  <td className="py-2 pr-4">~35%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">3</td>
                  <td className="py-2 pr-4">39</td>
                  <td className="py-2 pr-4">41</td>
                  <td className="py-2 pr-4">41</td>
                  <td className="py-2 pr-4">~26%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">2</td>
                  <td className="py-2 pr-4">25</td>
                  <td className="py-2 pr-4">26</td>
                  <td className="py-2 pr-4">27</td>
                  <td className="py-2 pr-4">~17%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">1</td>
                  <td className="py-2 pr-4">11</td>
                  <td className="py-2 pr-4">11</td>
                  <td className="py-2 pr-4">12</td>
                  <td className="py-2 pr-4">~7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These boundaries are approximate and based on publicly
            available WJEC Eduqas data. The &ldquo;Approx. %&rdquo; column shows
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

            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 7-8 &mdash; Strong</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Detailed, well-developed analysis with clear explanations of effects.</li>
                  <li>Well-chosen quotations with thorough exploration of language and structure.</li>
                  <li>Accurate subject terminology used consistently.</li>
                  <li>Thoughtful evaluation that engages with the text and writer&rsquo;s methods.</li>
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

            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10/20 p-5">
              <h3 className="text-lg font-bold text-foreground">Grades 5-6 &mdash; Secure</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Clear explanations of language and structural effects.</li>
                  <li>Relevant quotations selected and commented on.</li>
                  <li>Subject terminology used, mostly accurately.</li>
                  <li>A clear response to questions with some personal engagement.</li>
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
              <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-300">Grade 4 &mdash; Standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Some understanding of language effects, but explanations may be thin.</li>
                  <li>Some appropriate references to the text, though not always well-chosen.</li>
                  <li>Some subject terminology, not always accurate.</li>
                  <li>Some response to questions, though may lack detail or development.</li>
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
              <h3 className="font-bold text-foreground">Grade 4 &rarr; Grade 5</h3>
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
                  marks on the writing assessment objectives.
                </li>
                <li>
                  <strong>Timing:</strong> Make sure you attempt every question
                  and complete both the reading and writing sections in full.
                  Leaving questions unanswered is the most common reason
                  students miss a Grade 5 on the WJEC Eduqas paper.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">Grade 5 &rarr; Grade 7</h3>
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
                  basic verbs and adjectives with more precise alternatives.
                  Use a wider range of punctuation: semicolons, colons, and
                  dashes for effect.
                </li>
                <li>
                  <strong>Proofreading:</strong> In Component 2, the
                  proofreading and editing tasks are straightforward marks.
                  Practise identifying spelling, punctuation, and grammar
                  errors under timed conditions to secure these marks.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-foreground">Grade 7 &rarr; Grade 9</h3>
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
          <p className="mb-4">
            WJEC Eduqas English Language is split into two components.
            Component 1 (20th Century Literature Reading and Creative Prose
            Writing) is worth 40% and Component 2 (19th and 21st Century
            Non-Fiction Reading and Transactional/Persuasive Writing) is
            worth 60%.
          </p>

          <h3 className="font-bold text-foreground mb-2">Component 1 &mdash; 20th Century Literature Reading and Creative Prose Writing (40%)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold" rowSpan={5}>A &mdash; Reading</td>
                  <td className="py-2 pr-4">A1</td>
                  <td className="py-2 pr-4">5 marks</td>
                  <td className="py-2 pr-4">Retrieval / comprehension</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A2</td>
                  <td className="py-2 pr-4">5 marks</td>
                  <td className="py-2 pr-4">Inference / impressions</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A3</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Language analysis</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A4</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Structure / organisation</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A5</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Extended critical response</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="py-2 pr-4 font-semibold">B &mdash; Writing</td>
                  <td className="py-2 pr-4">B1</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Creative prose writing</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4" colSpan={2}>Component 1 Total</td>
                  <td className="py-2 pr-4">64 marks</td>
                  <td className="py-2 pr-4">40% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-foreground mt-6 mb-2">Component 2 &mdash; 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing (60%)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Section</th>
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold" rowSpan={6}>A &mdash; Reading</td>
                  <td className="py-2 pr-4">A1</td>
                  <td className="py-2 pr-4">5 marks</td>
                  <td className="py-2 pr-4">Retrieval / comprehension</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A2</td>
                  <td className="py-2 pr-4">5 marks</td>
                  <td className="py-2 pr-4">Inference / summary</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A3</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Language analysis</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A4</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Comparison of texts</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A5</td>
                  <td className="py-2 pr-4">10 marks</td>
                  <td className="py-2 pr-4">Synthesis and comparison</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">A6</td>
                  <td className="py-2 pr-4">5 marks</td>
                  <td className="py-2 pr-4">Proofreading and editing</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="py-2 pr-4 font-semibold" rowSpan={2}>B &mdash; Writing</td>
                  <td className="py-2 pr-4">B1</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Transactional / persuasive writing (shorter task)</td>
                </tr>
                <tr className="bg-blue-500/5">
                  <td className="py-2 pr-4">B2</td>
                  <td className="py-2 pr-4">27 marks</td>
                  <td className="py-2 pr-4">Transactional / persuasive writing (longer task)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4" colSpan={2}>Component 2 Total</td>
                  <td className="py-2 pr-4">96 marks</td>
                  <td className="py-2 pr-4">60% of qualification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Notice that the writing sections across both components contribute
            a significant portion of the marks. Strong creative and
            transactional writing can be developed through preparation and
            practice regardless of what unseen text appears on the day.
          </p>
        </Section>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/wjec"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to WJEC English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
