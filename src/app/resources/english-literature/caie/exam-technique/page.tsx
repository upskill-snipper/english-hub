"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  subtitle,
  defaultOpen = false,
  children,
}: {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <span className="flex flex-col gap-0.5">
          <span className="text-lg font-bold text-foreground">{title}</span>
          {subtitle && (
            <span className="text-sm text-muted-foreground">{subtitle}</span>
          )}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-5 py-5">{children}</div>
      )}
    </div>
  );
}

/* ─── Tip Card ─────────────────────────────────────────────── */

function TipCard({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 mb-3">
      <p className="text-sm font-semibold text-foreground mb-1">{heading}</p>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}

/* ─── Band Descriptor Row ──────────────────────────────────── */

function BandRow({
  band,
  marks,
  label,
  descriptors,
  colour,
}: {
  band: number;
  marks: string;
  label: string;
  descriptors: string[];
  colour: string;
}) {
  return (
    <div
      className={`rounded-lg border p-4 mb-3 ${colour}`}
    >
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-base font-bold text-foreground">
          Band {band}
        </span>
        <span className="text-sm font-semibold text-primary">
          ({marks} marks)
        </span>
        <span className="text-sm italic text-muted-foreground">{label}</span>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {descriptors.map((d, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Route Badge ──────────────────────────────────────────── */

function RouteBadge({
  route,
  papers,
}: {
  route: string;
  papers: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4">
      <h4 className="font-bold text-foreground">Route {route}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
        {papers}
      </p>
    </div>
  );
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function CAIEExamTechniquePage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            CAIE IGCSE
          </span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Exam Technique
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">
          Cambridge IGCSE Literature Exam Technique
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          A comprehensive guide to every paper in the Cambridge IGCSE English
          Literature syllabus (0475/0992). Learn how each paper works, what
          examiners want, and how to structure your answers for top marks.
        </p>
      </div>

      {/* ─── Overview & Routes ──────────────────────────────── */}

      <Section title="Overview: Papers & Routes" defaultOpen>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Cambridge IGCSE Literature offers three assessment routes. Every
          candidate sits <strong>Paper 1</strong> (Poetry &amp; Prose), then
          chooses a drama component depending on their route.
        </p>

        <div className="grid gap-3 sm:grid-cols-3 mb-5">
          <RouteBadge
            route="A"
            papers="Paper 1 (Poetry & Prose) + Paper 2 (Drama, closed text)"
          />
          <RouteBadge
            route="B"
            papers="Paper 1 (Poetry & Prose) + Paper 3 (Drama, open text)"
          />
          <RouteBadge
            route="C"
            papers="Paper 1 (Poetry & Prose) + Paper 4 (Unseen)"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>At a Glance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-2 pr-4 font-semibold text-foreground">Paper</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">Focus</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">Duration</th>
                    <th className="py-2 font-semibold text-foreground">Marks</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Paper 1</td>
                    <td className="py-2 pr-4">Poetry &amp; Prose</td>
                    <td className="py-2 pr-4">1 h 30 min</td>
                    <td className="py-2">50</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Paper 2</td>
                    <td className="py-2 pr-4">Drama (closed text)</td>
                    <td className="py-2 pr-4">1 h 30 min</td>
                    <td className="py-2">50</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-foreground">Paper 3</td>
                    <td className="py-2 pr-4">Drama (open text)</td>
                    <td className="py-2 pr-4">45 min</td>
                    <td className="py-2">25</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Paper 4</td>
                    <td className="py-2 pr-4">Unseen</td>
                    <td className="py-2 pr-4">1 h 15 min</td>
                    <td className="py-2">25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ─── Paper 1 ────────────────────────────────────────── */}

      <Section title="Paper 1: Poetry & Prose" subtitle="1 h 30 min | 50 marks | Two sections, 25 marks each">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Paper 1 is split into <strong>Section A (Poetry)</strong> and{" "}
          <strong>Section B (Prose)</strong>. You answer{" "}
          <strong>one question per section</strong>, choosing between a
          passage-based question and an essay question.
        </p>

        {/* Section A */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Section A: Poetry (25 marks)</CardTitle>
            <CardDescription>
              Anthology poems from Songs of Ourselves
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-foreground mb-2">
              Passage-based question
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              A poem (or extract) is printed on the paper. You are asked to
              explore how the poet conveys ideas, feelings, or atmosphere.
            </p>
            <TipCard heading="How to approach it">
              <ol className="list-decimal list-inside space-y-1">
                <li>Read the poem twice: once for meaning, once for method.</li>
                <li>
                  Annotate key language choices, imagery, structure, and sound
                  devices.
                </li>
                <li>
                  Write a brief introduction stating the poem&rsquo;s central concern.
                </li>
                <li>
                  Work through the poem roughly in order, combining
                  point&ndash;evidence&ndash;analysis.
                </li>
                <li>
                  Always link technique to effect &mdash; &ldquo;the metaphor
                  suggests...&rdquo;, not just &ldquo;the poet uses a
                  metaphor&rdquo;.
                </li>
              </ol>
            </TipCard>

            <h4 className="font-semibold text-foreground mb-2 mt-4">
              Essay question
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              You are given a theme or idea and asked to discuss how it is
              presented in two or more anthology poems of your choice.
            </p>
            <TipCard heading="How to approach it">
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Choose two poems you know well that genuinely connect to the
                  question.
                </li>
                <li>
                  Plan a brief comparative structure: similarities first, then
                  differences, or alternate between poems.
                </li>
                <li>
                  Quote precisely and keep quotations short (phrases, not
                  stanzas).
                </li>
                <li>Show personal response: &ldquo;I find this particularly striking because...&rdquo;</li>
              </ol>
            </TipCard>
          </CardContent>
        </Card>

        {/* Section B */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Section B: Prose (25 marks)</CardTitle>
            <CardDescription>
              Set prose text (novel or short stories)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-foreground mb-2">
              Passage-based question
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              An extract from your set text is printed. You must explore the
              writer&rsquo;s methods and their effects within and beyond the
              passage.
            </p>
            <TipCard heading="How to approach it">
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Focus on the passage first &mdash; close-read the language,
                  narrative voice, and structure.
                </li>
                <li>
                  Then broaden out: how does this moment connect to the wider
                  novel&rsquo;s themes?
                </li>
                <li>
                  Comment on the significance of where this passage falls in the
                  plot.
                </li>
                <li>
                  Avoid simply retelling the story &mdash; every paragraph should
                  analyse, not narrate.
                </li>
              </ol>
            </TipCard>

            <h4 className="font-semibold text-foreground mb-2 mt-4">
              Essay question
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              A broad question on theme, character, or the writer&rsquo;s
              methods. You choose your own evidence from across the text.
            </p>
            <TipCard heading="How to approach it">
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Plan three to four key points, each supported by a specific
                  moment from the text.
                </li>
                <li>
                  Embed short quotations into your sentences for fluency.
                </li>
                <li>
                  Track how the theme or character develops across the novel
                  (beginning, middle, end).
                </li>
                <li>
                  End with a considered personal judgement, not a summary.
                </li>
              </ol>
            </TipCard>
          </CardContent>
        </Card>

        {/* Time management */}
        <TipCard heading="Time management">
          <p>
            You have <strong>90 minutes</strong> for two 25-mark answers. Spend
            roughly <strong>45 minutes per section</strong>: 5 minutes planning,
            35 minutes writing, 5 minutes checking. Do not overrun on
            Section A &mdash; your Section B answer is worth the same marks.
          </p>
        </TipCard>
      </Section>

      {/* ─── Paper 2 ────────────────────────────────────────── */}

      <Section title="Paper 2: Drama (Closed Text)" subtitle="1 h 30 min | 50 marks | Two drama texts, 25 marks each">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          You answer <strong>one question on each of two set drama texts</strong>{" "}
          (e.g. Shakespeare + a modern play). This is a{" "}
          <strong>closed-text</strong> exam &mdash; you do not have the book in
          front of you.
        </p>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Question Types</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Each text offers a choice of passage-based or essay question, just
              like Paper 1. The same principles apply, but with a drama-specific
              lens:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-3">
              <li>
                <strong>Analyse dramatic technique:</strong> stage directions,
                dialogue, soliloquy, dramatic irony, tension, entrances/exits.
              </li>
              <li>
                <strong>Consider the audience:</strong> What would the audience
                feel at this moment? How does the playwright manipulate their
                response?
              </li>
              <li>
                <strong>Remember it is a play:</strong> Refer to &ldquo;the
                audience&rdquo; not &ldquo;the reader&rdquo;. Think about
                performance, not just text on a page.
              </li>
            </ul>
          </CardContent>
        </Card>

        <TipCard heading="Balancing your time">
          <p>
            Split your time <strong>45 minutes per text</strong>. It is tempting
            to spend longer on the text you know best, but both carry equal
            marks. If you finish one early, use that time to review rather than
            over-writing.
          </p>
        </TipCard>

        <TipCard heading="Closed-text tip">
          <p>
            Since you cannot refer to the text, learn{" "}
            <strong>short, precise quotations</strong> (5&ndash;8 words). You do
            not need to be word-perfect &mdash; close paraphrase with a few key
            words is acceptable and still earns credit.
          </p>
        </TipCard>
      </Section>

      {/* ─── Paper 3 ────────────────────────────────────────── */}

      <Section title="Paper 3: Drama (Open Text)" subtitle="45 min | 25 marks | One drama text with your annotated copy">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Paper 3 is a shorter, sharper test. You answer{" "}
          <strong>one question on one drama text</strong> and you have your{" "}
          <strong>annotated copy</strong> of the play in the exam room.
        </p>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Using Your Annotated Text Effectively</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                <strong>Before the exam:</strong> Use colour-coded tabs or sticky
                notes for key themes, turning points, and important speeches. Do
                not over-annotate &mdash; too many notes become impossible to
                navigate under pressure.
              </li>
              <li>
                <strong>In the exam:</strong> Use your text to find precise
                quotations, but do not waste time re-reading whole scenes. You
                should already know the play well enough to go straight to the
                right moments.
              </li>
              <li>
                <strong>Annotation tip:</strong> Write brief analytical comments
                in margins (&ldquo;dramatic irony&rdquo;, &ldquo;power
                shift&rdquo;, &ldquo;audience sympathy&rdquo;) rather than long
                notes. These act as memory triggers.
              </li>
            </ul>
          </CardContent>
        </Card>

        <TipCard heading="Avoid narration">
          <p>
            The biggest trap in Paper 3 is retelling the plot. With the text open
            in front of you, it is tempting to describe what happens. Instead,
            every paragraph must <strong>analyse</strong>: focus on{" "}
            <em>how</em> and <em>why</em> the playwright creates effects, not{" "}
            <em>what</em> happens.
          </p>
        </TipCard>

        <TipCard heading="Time is tight">
          <p>
            You only have <strong>45 minutes</strong>. Spend 5 minutes planning,
            35 minutes writing, and 5 minutes reviewing. Be selective &mdash;
            three well-developed points beat five rushed ones.
          </p>
        </TipCard>
      </Section>

      {/* ─── Paper 4 ────────────────────────────────────────── */}

      <Section title="Paper 4: Unseen" subtitle="1 h 15 min | 25 marks | Critical commentary on an unseen passage">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Paper 4 tests your ability to respond to a piece of writing you have
          never seen before &mdash; it could be prose or poetry. You write a{" "}
          <strong>critical commentary</strong>.
        </p>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>The Critical Commentary Method</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
              <li>
                <strong>Read the passage three times:</strong> first for overall
                meaning and tone; second to annotate language, imagery, and
                structure; third to confirm your interpretation.
              </li>
              <li>
                <strong>Identify the big picture:</strong> What is the subject?
                What is the writer&rsquo;s attitude or purpose? What is the
                overall mood or atmosphere?
              </li>
              <li>
                <strong>Plan your response:</strong> Group your observations into
                three or four key areas (e.g. imagery, tone, structure, voice)
                rather than working line by line.
              </li>
              <li>
                <strong>Write analytically:</strong> For each point, quote a
                specific detail, name the technique, and explain its effect on the
                reader.
              </li>
              <li>
                <strong>Consider structure:</strong> How does the piece begin and
                end? Does the tone shift? Are there contrasts, repetitions, or a
                turning point?
              </li>
              <li>
                <strong>Conclude with a personal response:</strong> What is your
                overall impression? How effective is the writing? Avoid simply
                summarising.
              </li>
            </ol>
          </CardContent>
        </Card>

        <TipCard heading="Time allocation">
          <p>
            You have <strong>75 minutes</strong> for one answer. Spend at least{" "}
            <strong>15 minutes reading and planning</strong> before you write.
            The quality of your annotation directly affects the quality of your
            essay.
          </p>
        </TipCard>
      </Section>

      {/* ─── Mark Scheme ────────────────────────────────────── */}

      <Section title="Mark Scheme Explained: 25-Mark Level Descriptors">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          All 25-mark questions across Papers 1&ndash;4 are marked using the same
          five-band descriptors. Understanding these bands helps you target the
          skills examiners reward.
        </p>

        <BandRow
          band={5}
          marks="21-25"
          label="Assured, personal, analytical"
          colour="border-green-500/40 bg-green-500/5"
          descriptors={[
            "Assured, well-developed personal response with close and detailed knowledge of the text.",
            "Critically analytical, evaluating the writer\u2019s choices with sophistication.",
            "Convincingly explores the effects of language, structure, and form.",
            "Precisely selected, integrated quotations that enhance the argument.",
            "Sustained engagement with the question from start to finish.",
          ]}
        />

        <BandRow
          band={4}
          marks="16-20"
          label="Effective, detailed"
          colour="border-blue-500/40 bg-blue-500/5"
          descriptors={[
            "Effective, well-informed personal response with secure knowledge of the text.",
            "Detailed analysis of the writer\u2019s methods with clear understanding of effects.",
            "Well-chosen quotations that support the argument.",
            "Thoughtful engagement with the question throughout.",
          ]}
        />

        <BandRow
          band={3}
          marks="11-15"
          label="Competent, relevant"
          colour="border-yellow-500/40 bg-yellow-500/5"
          descriptors={[
            "Competent, relevant response showing sound knowledge of the text.",
            "Some analytical comment on the writer\u2019s methods, though sometimes descriptive.",
            "Relevant quotations used, though not always precisely chosen.",
            "Consistent focus on the question, though may lack development in places.",
          ]}
        />

        <BandRow
          band={2}
          marks="6-10"
          label="Some understanding"
          colour="border-orange-500/40 bg-orange-500/5"
          descriptors={[
            "Some understanding of the text, though response may be surface-level.",
            "Occasional reference to the writer\u2019s methods, but largely narrative or descriptive.",
            "Some relevant quotation or textual reference, though limited.",
            "Partial focus on the question with some drift into irrelevance.",
          ]}
        />

        <BandRow
          band={1}
          marks="1-5"
          label="Limited"
          colour="border-red-500/40 bg-red-500/5"
          descriptors={[
            "Limited engagement with the text; may misunderstand key elements.",
            "Little or no awareness of the writer\u2019s methods.",
            "Few or no supporting quotations; heavy reliance on retelling the plot.",
            "Poorly focused or largely irrelevant to the question asked.",
          ]}
        />

        <TipCard heading="How to move up a band">
          <p>
            The single biggest difference between Band 3 and Band 4/5 is{" "}
            <strong>analysis of the writer&rsquo;s methods</strong>. Instead of
            saying what happens, explain <em>how</em> the writer makes it happen
            and <em>why</em> that choice is effective. Embed short quotations,
            name techniques, and always connect back to the question.
          </p>
        </TipCard>
      </Section>

      {/* ─── Common Mistakes ────────────────────────────────── */}

      <Section title="Common Mistakes & How to Avoid Them">
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Retelling the plot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>The mistake:</strong> Spending paragraphs describing what
                happens in the text instead of analysing how and why it is
                written.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>The fix:</strong> Start every paragraph with an
                analytical point, not a plot event. Use the formula:{" "}
                <em>The writer uses [technique] to [effect], as seen when
                &ldquo;[quotation]&rdquo;.</em>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Feature-spotting without analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>The mistake:</strong> Listing techniques (&ldquo;the
                writer uses a simile, alliteration, and enjambment&rdquo;)
                without explaining their effect.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>The fix:</strong> For every technique you identify, ask
                yourself: <em>So what? What does this make the reader feel,
                think, or imagine?</em> That answer is your analysis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Ignoring the question</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>The mistake:</strong> Writing a pre-prepared essay about
                the text instead of answering the specific question asked.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>The fix:</strong> Underline key words in the question.
                Refer back to those key words in every paragraph. Your final
                sentence should directly answer the question.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Poor time management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>The mistake:</strong> Spending too long on the first
                question and rushing or not finishing the second.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>The fix:</strong> Set a timer or note the clock time when
                you start each answer. A solid Band 3 answer on the second
                question earns more marks than perfecting the first into a Band 5
                and leaving the second blank.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Long quotations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>The mistake:</strong> Copying out entire sentences or
                paragraphs from the text as evidence.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>The fix:</strong> Keep quotations to{" "}
                <strong>key phrases of 3&ndash;8 words</strong> and embed them
                into your own sentences. Short, precise quotations show you can
                identify the most important language.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">No personal response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>The mistake:</strong> Writing in a detached, mechanical
                way without showing your own engagement with the text.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                <strong>The fix:</strong> Band 5 requires a &ldquo;personal
                response&rdquo;. Use phrases like &ldquo;I find this
                compelling because...&rdquo; or &ldquo;This is particularly
                effective as it suggests...&rdquo; Your genuine reaction to the
                writing is what makes an answer stand out.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
