"use client";

import Link from "next/link";
import { useState } from "react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Collapsible section ───────────────────────────────────── */

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

/* ─── Helper ─────────────────────────────────────────────────── */

function pct(mark: number, max: number) {
  return `${Math.round((mark / max) * 100)}%`;
}

/* ─── Page component ─────────────────────────────────────────── */

export default function GradeBoundariesPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Edexcel GCSE English Language (1EN0)
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

      {/* ── Breadcrumb ────────────────────────────────────────────── */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/english-language/edexcel" className="hover:text-primary transition-colors">
              Edexcel English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">Grade Boundaries</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">

        {/* ── Important note ────────────────────────────────────────── */}
        <div className="rounded-xl border border-warn-200 bg-warn-50 p-6">
          <h2 className="font-bold text-warn-800">Important note</h2>
          <p className="mt-2 text-sm text-warn-700">
            Grade boundaries change every year based on the difficulty of the
            papers and the performance of the whole cohort. The boundaries below
            are from recent exam series and are provided as a <strong>guide</strong>{" "}
            only. Your actual grade boundary may be slightly higher or lower.
            Always check the{" "}
            <a
              href="https://qualifications.pearson.com/en/support/support-topics/results-certification/grade-boundaries.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-warn-900"
            >
              Pearson Edexcel website
            </a>{" "}
            for the most up-to-date boundaries after results day. The total mark
            for Edexcel English Language is <strong>128</strong> (Paper 1: 64 + Paper 2: 64).
            The Spoken Language Endorsement is reported separately and does not
            contribute to the numerical grade.
          </p>
        </div>

        {/* ── Overall grade boundaries ──────────────────────────────── */}
        <Section title="Overall grade boundaries (combined Paper 1 + Paper 2)" defaultOpen>
          <p>
            The total number of marks across both papers is <strong>128</strong>{" "}
            (64 per paper). Your raw marks from both papers are combined to
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
                  <td className="py-2 pr-4">105</td>
                  <td className="py-2 pr-4">107</td>
                  <td className="py-2 pr-4">108</td>
                  <td className="py-2 pr-4">~83%</td>
                </tr>
                <tr className="bg-success-50/50">
                  <td className="py-2 pr-4 font-bold text-success-700">8</td>
                  <td className="py-2 pr-4">94</td>
                  <td className="py-2 pr-4">96</td>
                  <td className="py-2 pr-4">97</td>
                  <td className="py-2 pr-4">~75%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">83</td>
                  <td className="py-2 pr-4">85</td>
                  <td className="py-2 pr-4">86</td>
                  <td className="py-2 pr-4">~66%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">6</td>
                  <td className="py-2 pr-4">72</td>
                  <td className="py-2 pr-4">74</td>
                  <td className="py-2 pr-4">75</td>
                  <td className="py-2 pr-4">~58%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">5</td>
                  <td className="py-2 pr-4">61</td>
                  <td className="py-2 pr-4">63</td>
                  <td className="py-2 pr-4">64</td>
                  <td className="py-2 pr-4">~49%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">50</td>
                  <td className="py-2 pr-4">52</td>
                  <td className="py-2 pr-4">53</td>
                  <td className="py-2 pr-4">~40%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">3</td>
                  <td className="py-2 pr-4">37</td>
                  <td className="py-2 pr-4">39</td>
                  <td className="py-2 pr-4">40</td>
                  <td className="py-2 pr-4">~30%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">2</td>
                  <td className="py-2 pr-4">25</td>
                  <td className="py-2 pr-4">26</td>
                  <td className="py-2 pr-4">27</td>
                  <td className="py-2 pr-4">~20%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-muted-foreground">1</td>
                  <td className="py-2 pr-4">13</td>
                  <td className="py-2 pr-4">13</td>
                  <td className="py-2 pr-4">14</td>
                  <td className="py-2 pr-4">~10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: These boundaries are approximate and based on publicly
            available Pearson Edexcel data. The &ldquo;Approx. %&rdquo; column shows
            roughly what percentage of the total 128 marks you need.
          </p>
        </Section>

        {/* ── Component boundaries ──────────────────────────────────── */}
        <Section title="Component grade boundaries (per paper, out of 64)">
          <p>
            Individual paper boundaries help you identify your stronger paper
            and where to focus your revision. Each paper is marked out of{" "}
            <strong>64</strong>.
          </p>

          <div className="overflow-x-auto mt-4">
            <h3 className="font-bold text-primary mb-3">Paper 1: Fiction and Imaginative Writing</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2 pr-4">June 2023</th>
                  <th className="py-2 pr-4">June 2024</th>
                  <th className="py-2 pr-4">June 2025</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-bold text-success-700">9</td>
                  <td className="py-2 pr-4">53 <span className="text-xs text-muted-foreground">({pct(53, 64)})</span></td>
                  <td className="py-2 pr-4">54 <span className="text-xs text-muted-foreground">({pct(54, 64)})</span></td>
                  <td className="py-2 pr-4">55 <span className="text-xs text-muted-foreground">({pct(55, 64)})</span></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">42 <span className="text-xs text-muted-foreground">({pct(42, 64)})</span></td>
                  <td className="py-2 pr-4">43 <span className="text-xs text-muted-foreground">({pct(43, 64)})</span></td>
                  <td className="py-2 pr-4">44 <span className="text-xs text-muted-foreground">({pct(44, 64)})</span></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">5</td>
                  <td className="py-2 pr-4">30 <span className="text-xs text-muted-foreground">({pct(30, 64)})</span></td>
                  <td className="py-2 pr-4">31 <span className="text-xs text-muted-foreground">({pct(31, 64)})</span></td>
                  <td className="py-2 pr-4">32 <span className="text-xs text-muted-foreground">({pct(32, 64)})</span></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">25 <span className="text-xs text-muted-foreground">({pct(25, 64)})</span></td>
                  <td className="py-2 pr-4">26 <span className="text-xs text-muted-foreground">({pct(26, 64)})</span></td>
                  <td className="py-2 pr-4">27 <span className="text-xs text-muted-foreground">({pct(27, 64)})</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-6">
            <h3 className="font-bold text-accent mb-3">Paper 2: Non-Fiction and Writing for Real Purposes</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2 pr-4">June 2023</th>
                  <th className="py-2 pr-4">June 2024</th>
                  <th className="py-2 pr-4">June 2025</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-bold text-success-700">9</td>
                  <td className="py-2 pr-4">52 <span className="text-xs text-muted-foreground">({pct(52, 64)})</span></td>
                  <td className="py-2 pr-4">53 <span className="text-xs text-muted-foreground">({pct(53, 64)})</span></td>
                  <td className="py-2 pr-4">54 <span className="text-xs text-muted-foreground">({pct(54, 64)})</span></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">7</td>
                  <td className="py-2 pr-4">41 <span className="text-xs text-muted-foreground">({pct(41, 64)})</span></td>
                  <td className="py-2 pr-4">42 <span className="text-xs text-muted-foreground">({pct(42, 64)})</span></td>
                  <td className="py-2 pr-4">43 <span className="text-xs text-muted-foreground">({pct(43, 64)})</span></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-primary">5</td>
                  <td className="py-2 pr-4">31 <span className="text-xs text-muted-foreground">({pct(31, 64)})</span></td>
                  <td className="py-2 pr-4">32 <span className="text-xs text-muted-foreground">({pct(32, 64)})</span></td>
                  <td className="py-2 pr-4">33 <span className="text-xs text-muted-foreground">({pct(33, 64)})</span></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-yellow-600">4</td>
                  <td className="py-2 pr-4">25 <span className="text-xs text-muted-foreground">({pct(25, 64)})</span></td>
                  <td className="py-2 pr-4">26 <span className="text-xs text-muted-foreground">({pct(26, 64)})</span></td>
                  <td className="py-2 pr-4">27 <span className="text-xs text-muted-foreground">({pct(27, 64)})</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── What each grade looks like ─────────────────────────────── */}
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
                  <li>Perceptive, original analysis that goes beyond surface-level interpretation.</li>
                  <li>Judicious, precisely selected quotations seamlessly embedded in analysis.</li>
                  <li>Sophisticated subject terminology used accurately and purposefully.</li>
                  <li>Critical evaluation that explores multiple interpretations and considers the writer&rsquo;s intentions and wider purpose.</li>
                  <li>Consistently engages with connotations, nuance, and the subtleties of language and structure.</li>
                  <li>Synthesis of ideas across texts (Paper 2) is insightful and well-sustained.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Compelling, convincing writing that sustains the reader&rsquo;s interest throughout.</li>
                  <li>Extensive, ambitious vocabulary used precisely and naturally.</li>
                  <li>Varied, inventive structural choices that shape meaning (e.g., cyclical structure, deliberate shifts in pace or focus).</li>
                  <li>A distinctive, authentic voice that feels crafted, not formulaic.</li>
                  <li>A full range of punctuation used accurately and for deliberate effect (semicolons, colons, ellipsis, dashes).</li>
                  <li>Virtually flawless spelling and grammar, including complex and irregular words.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary/50 bg-primary/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 7-8 &mdash; Strong</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Detailed, well-developed analysis with clear explanations of effects on the reader.</li>
                  <li>Well-chosen quotations with thorough exploration of language and structure.</li>
                  <li>Accurate subject terminology used consistently and purposefully.</li>
                  <li>Thoughtful evaluation that engages with the text critically and considers writer&rsquo;s methods.</li>
                  <li>Some exploration of alternative interpretations and layers of meaning.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Engaging, well-crafted writing with a clear sense of purpose and audience.</li>
                  <li>Increasingly sophisticated vocabulary and phrasing.</li>
                  <li>Effective structural features that contribute to the overall effect and guide the reader.</li>
                  <li>Wide range of sentence structures used deliberately for effect.</li>
                  <li>Mostly accurate spelling and punctuation with only minor, infrequent errors.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-primary/10/30 p-5">
              <h3 className="text-lg font-bold text-primary">Grades 5-6 &mdash; Secure</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Clear explanations of language and structural effects with relevant examples.</li>
                  <li>Relevant quotations selected and commented on with some analysis.</li>
                  <li>Subject terminology used, mostly accurately.</li>
                  <li>A clear response to evaluation tasks with some personal engagement and reasoning.</li>
                  <li>Analysis may lack depth or consistency &mdash; some points developed well, others more surface-level.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Writing is clear and communicates effectively with some engaging moments.</li>
                  <li>Vocabulary is chosen for effect, though may occasionally lack precision.</li>
                  <li>Paragraphs are used effectively with some structural awareness and deliberate organisation.</li>
                  <li>Some variety in sentence structures, including compound and complex sentences.</li>
                  <li>Generally accurate spelling and punctuation with some errors on more complex words.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-500/10/30 p-5">
              <h3 className="text-lg font-bold text-yellow-700">Grade 4 &mdash; Standard pass</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Reading:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Some understanding of language effects, but explanations may be thin or underdeveloped.</li>
                  <li>Some appropriate references to the text, though not always well-chosen or fully explored.</li>
                  <li>Some subject terminology, not always accurate or used effectively.</li>
                  <li>Some response to evaluation tasks, though may lack detail or sustained argument.</li>
                  <li>May feature-spot (identify techniques without explaining their effect on the reader).</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Writing communicates with some clarity but may drift or lose focus.</li>
                  <li>Some attempts at vocabulary for effect, though choices may be limited.</li>
                  <li>Basic structural features (paragraphs, some variety in openings).</li>
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
                  <li>Simple references that may paraphrase rather than quote directly.</li>
                  <li>Little or no subject terminology.</li>
                  <li>May retell the text rather than analyse or evaluate it.</li>
                </ul>
                <p className="mt-3"><strong>Writing:</strong></p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Simple ideas with limited development or detail.</li>
                  <li>Basic, everyday vocabulary with little attempt at effect.</li>
                  <li>Limited structural features; may lack clear paragraphing.</li>
                  <li>Simple sentence forms; frequent errors in spelling and punctuation that hinder communication.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ── How to push your grade higher ─────────────────────────── */}
        <Section title="How to push your grade higher">
          <p>
            Here are targeted strategies for moving from one grade band to the
            next, tailored to the Edexcel English Language specification:
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
                  of&hellip; for the reader because&hellip;&rdquo;
                </li>
                <li>
                  <strong>Writing:</strong> Focus on technical accuracy.
                  Eliminating comma splicing, using capital letters correctly,
                  and spelling common words accurately can gain you several
                  marks on content and organisation alone.
                </li>
                <li>
                  <strong>Paper 2 Q7 (summary):</strong> Practise synthesising
                  information from two texts. Use connectives like &ldquo;Both
                  sources&hellip;&rdquo; and &ldquo;However, Source B
                  differs&hellip;&rdquo; to show you can compare, not just list.
                </li>
                <li>
                  <strong>Timing:</strong> Make sure you attempt every question
                  and complete the writing tasks in full. An unfinished
                  Section B response is the most common reason students miss a
                  Grade 5.
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
                  suggest&rdquo;) to show you are exploring layers of meaning.
                </li>
                <li>
                  <strong>Paper 1 Q4 (evaluation):</strong> This is worth 20
                  marks &mdash; engage critically with the statement given.
                  Don&rsquo;t just agree; consider what the writer does and why,
                  and use the text as evidence for a sustained argument.
                </li>
                <li>
                  <strong>Writing:</strong> Upgrade your vocabulary. Replace
                  basic verbs and adjectives with more precise alternatives.
                  Use a wider range of punctuation: semicolons, colons, and
                  dashes for deliberate effect.
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
                  and the text&rsquo;s context where relevant.
                </li>
                <li>
                  <strong>Paper 2 Q8 (language analysis):</strong> This
                  12-mark question rewards depth. Analyse word-level choices,
                  sentence-level patterns, and the cumulative effect of the
                  writer&rsquo;s language across the extract.
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
                  high-quality fiction and non-fiction builds a larger
                  vocabulary, a better sense of style, and more sophisticated
                  structural instincts.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Marks per question ────────────────────────────────────── */}
        <Section title="Marks per question at a glance">
          <p>
            Understanding the mark allocation helps you plan your time and focus
            your revision. The Edexcel specification splits each paper into
            Section A (reading) and Section B (writing).
          </p>

          <div className="overflow-x-auto mt-4">
            <h3 className="font-bold text-primary mb-3">Paper 1: Fiction and Imaginative Writing (1h 45m)</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Focus</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Assessment objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q1</td>
                  <td className="py-2 pr-4">Short response &mdash; identify explicit information from the extract</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q2</td>
                  <td className="py-2 pr-4">Language analysis &mdash; explain how language is used for effect</td>
                  <td className="py-2 pr-4">8 marks</td>
                  <td className="py-2 pr-4">Language and structure analysis (AO2)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q3</td>
                  <td className="py-2 pr-4">Structure &mdash; explain how the writer structures the text for effect</td>
                  <td className="py-2 pr-4">8 marks</td>
                  <td className="py-2 pr-4">Language and structure analysis (AO2)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q4</td>
                  <td className="py-2 pr-4">Evaluation &mdash; critically evaluate the text with reference to a statement</td>
                  <td className="py-2 pr-4">20 marks</td>
                  <td className="py-2 pr-4">Critical evaluation (AO4)</td>
                </tr>
                <tr className="bg-primary/10">
                  <td className="py-2 pr-4 font-semibold">Q5</td>
                  <td className="py-2 pr-4">Imaginative / creative writing</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Content and organisation (AO5, 16) + Technical accuracy (AO6, 8)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">Total</td>
                  <td className="py-2 pr-4"></td>
                  <td className="py-2 pr-4">64 marks</td>
                  <td className="py-2 pr-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-6">
            <h3 className="font-bold text-accent mb-3">Paper 2: Non-Fiction and Writing for Real Purposes (2h 05m)</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Question</th>
                  <th className="py-2 pr-4">Focus</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Assessment objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q1</td>
                  <td className="py-2 pr-4">Short response &mdash; identify true statements from Source A</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q2</td>
                  <td className="py-2 pr-4">Short response &mdash; identify true statements from Source B</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q3</td>
                  <td className="py-2 pr-4">Short response &mdash; identify explicit information from one source</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q4</td>
                  <td className="py-2 pr-4">Short response &mdash; identify explicit information from one source</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q5</td>
                  <td className="py-2 pr-4">Short response &mdash; identify explicit information from one source</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q6</td>
                  <td className="py-2 pr-4">Short response &mdash; identify explicit information from one source</td>
                  <td className="py-2 pr-4">4 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q7</td>
                  <td className="py-2 pr-4">Summary &mdash; synthesise and compare ideas from both sources</td>
                  <td className="py-2 pr-4">8 marks</td>
                  <td className="py-2 pr-4">Reading and retrieval (AO1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Q8</td>
                  <td className="py-2 pr-4">Language analysis &mdash; analyse how language is used in one source</td>
                  <td className="py-2 pr-4">12 marks</td>
                  <td className="py-2 pr-4">Language and structure analysis (AO2)</td>
                </tr>
                <tr className="bg-primary/10">
                  <td className="py-2 pr-4 font-semibold">Q9</td>
                  <td className="py-2 pr-4">Writing for real purposes (e.g., letter, article, speech, review)</td>
                  <td className="py-2 pr-4">24 marks</td>
                  <td className="py-2 pr-4">Content and organisation (AO5, 16) + Technical accuracy (AO6, 8)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 pr-4">Total</td>
                  <td className="py-2 pr-4"></td>
                  <td className="py-2 pr-4">64 marks</td>
                  <td className="py-2 pr-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Notice that the writing task on each paper is worth <strong>24 marks
            (37.5% of the paper)</strong>. The reading questions in Paper 2
            include many short-response questions worth 4 marks each &mdash;
            these are &ldquo;quick wins&rdquo; that reward careful reading.
            The two highest-tariff questions are Paper 1 Q4 (20 marks) and
            Paper 2 Q8 (12 marks) &mdash; these are where strong analytical
            skills make the biggest difference.
          </p>
        </Section>

        {/* ── Key takeaways ─────────────────────────────────────────── */}
        <Section title="Key takeaways and quick targets">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-primary">For a Grade 5 (Strong Pass)</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  You need roughly <strong>49-50%</strong> overall (~63/128)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  That is about <strong>31-32 out of 64</strong> on each paper
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Focus on getting full marks on the short-response questions, solid marks on Q4/Q8, and a competent writing response
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-accent">For a Grade 7+</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  You need roughly <strong>66-67%</strong> overall (~85/128)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  That is about <strong>42-43 out of 64</strong> on each paper
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  You need strong language analysis, a well-sustained evaluation on Paper 1, and engaging, well-organised writing
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-bold text-success">For a Grade 9</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  You need roughly <strong>83-84%</strong> overall (~107/128)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  That is about <strong>53-55 out of 64</strong> on each paper
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  Top marks across all questions. Perceptive analysis, sophisticated writing, virtually flawless accuracy
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-warn-200 bg-warn-50 p-5">
              <h3 className="font-bold text-warn-700">Remember</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  Grade boundaries change every year &mdash; aim <strong>above</strong> the boundary to be safe
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  Paper 1 Q4 (20 marks) and Paper 2 Q8 (12 marks) are the highest-tariff reading questions &mdash; prioritise these in revision
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  The writing sections on both papers total <strong>48 marks</strong> (37.5% of the GCSE) &mdash; improving your writing is one of the fastest ways to raise your grade
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Back link ─────────────────────────────────────────────── */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/edexcel"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Edexcel English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
