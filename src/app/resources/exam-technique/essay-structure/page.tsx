import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/exam-technique/essay-structure' },
  title: "Essay Structure Templates",
  description:
    "Proven essay structure templates for GCSE and IGCSE English exams. Introduction techniques, PEEL paragraphs, conclusion strategies, topic sentences, and paragraph count guidance for different mark allocations.",
};

/* ─── Page ───────────────────────────────────────────────────── */

export default function EssayStructurePage() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Exam Technique
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Essay Structure Templates
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A well-structured essay is easier to write, easier to read, and
            easier to mark. Use these proven templates to build clear, focused,
            high-scoring responses every time.
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
            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/exam-technique" className="hover:text-primary transition-colors">Exam Technique</Link>
          </li>
          <li>/</li>
          <li className="font-medium text-primary">Essay Structure</li>
        </ol>
      </nav>

      {/* Introduction techniques */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Introduction techniques
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Your introduction sets the tone and direction for your entire essay. It
          should be concise (3-5 sentences), address the question directly, and
          signal the line of argument you will take.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "The direct address",
              desc: "Start by rephrasing the question as a statement and immediately presenting your argument.",
              example:
                "Throughout 'Macbeth', Shakespeare presents ambition as an inherently destructive force. From the moment Macbeth encounters the witches, his unchecked ambition corrupts his morality, his relationships, and ultimately his grip on reality.",
              best: "Literature essays, evaluative questions",
            },
            {
              title: "The contextual opener",
              desc: "Begin with a brief piece of relevant context that frames your argument.",
              example:
                "Writing in 1912, at a time of deep social inequality, Priestley uses 'An Inspector Calls' to challenge the moral complacency of the upper classes. The Birling family's refusal to accept responsibility reflects the attitudes Priestley sought to dismantle.",
              best: "Literature essays where context is assessed (AO3)",
            },
            {
              title: "The conceptual statement",
              desc: "Open with a broader thematic observation before narrowing to the specific text.",
              example:
                "Power is rarely given freely -- it is seized, inherited, or fought for. In 'Animal Farm', Orwell explores how the pursuit of power inevitably corrupts those who attain it, transforming the pigs from liberators into tyrants.",
              best: "Thematic essay questions",
            },
            {
              title: "The provocative claim",
              desc: "Start with a bold interpretive statement that immediately engages the reader.",
              example:
                "The true horror of 'A Christmas Carol' is not Scrooge's miserliness but Victorian society's willingness to tolerate it. Dickens crafts Scrooge not as an anomaly but as a product of a system that valued profit over people.",
              best: "Evaluative and argumentative questions",
            },
          ].map((tech) => (
            <div
              key={tech.title}
              className="rounded-xl border border-border bg-card p-6 shadow-md"
            >
              <h3 className="font-bold text-foreground">{tech.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {tech.desc}
              </p>
              <blockquote className="mt-4 rounded-lg border-l-4 border-primary bg-muted px-4 py-3 text-sm italic text-muted-foreground leading-relaxed">
                {tech.example}
              </blockquote>
              <p className="mt-3 text-xs font-semibold text-primary">
                Best for: {tech.best}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PEEL paragraph template */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            The PEEL paragraph template
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            PEEL is the most reliable paragraph structure for English essays. Every
            analytical paragraph should follow this pattern. It keeps your writing
            focused, evidence-based, and analytical.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                letter: "P",
                label: "Point",
                colour: "bg-primary",
                desc: "Make a clear, specific point that directly answers the question. This is your topic sentence.",
                example:
                  "Shakespeare presents Lady Macbeth as the driving force behind Duncan's murder.",
              },
              {
                letter: "E",
                label: "Evidence",
                colour: "bg-primary",
                desc: "Support your point with a short, embedded quotation from the text. Choose precise, analysable words.",
                example:
                  "She commands Macbeth to \"look like th' innocent flower, but be the serpent under't\", revealing her capacity for deception.",
              },
              {
                letter: "E",
                label: "Explain",
                colour: "bg-primary",
                desc: "Analyse the evidence. Explore what specific words suggest, the effects of techniques, and how meaning is created.",
                example:
                  "The juxtaposition of \"innocent flower\" and \"serpent\" creates a stark contrast between appearance and reality. The biblical connotations of the serpent associate Lady Macbeth with temptation and original sin, positioning her as the catalyst for Macbeth's moral downfall.",
              },
              {
                letter: "L",
                label: "Link",
                colour: "bg-primary",
                desc: "Connect your analysis back to the question and/or to the wider text, themes, or context.",
                example:
                  "This reflects the play's broader exploration of duplicity and moral corruption, themes that Shakespeare's Jacobean audience -- living under the shadow of the Gunpowder Plot -- would have found deeply resonant.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white ${step.colour}`}
                >
                  {step.letter}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground">{step.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                  <blockquote className="mt-3 rounded-lg border-l-4 border-primary bg-muted px-4 py-3 text-sm italic text-muted-foreground leading-relaxed">
                    {step.example}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic sentences */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Topic sentences
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          A topic sentence is the first sentence of each paragraph. It tells the
          examiner exactly what the paragraph will be about and how it connects to
          the question. Strong topic sentences make your essay easy to follow and
          demonstrate a clear line of argument.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-card shadow-md overflow-hidden">
          <div className="divide-y divide-border">
            {[
              {
                bad: "Macbeth is a play about ambition.",
                good: "Shakespeare initially presents Macbeth's ambition as a noble quality, seen in his battlefield courage.",
                why: "The good version is specific, analytical, and directly addresses the writer's craft.",
              },
              {
                bad: "The writer uses lots of techniques.",
                good: "The writer creates a sense of unease through the recurring motif of darkness throughout the extract.",
                why: "The good version names a specific technique and its effect, giving the paragraph clear focus.",
              },
              {
                bad: "In this paragraph I will talk about the character of the Inspector.",
                good: "Priestley uses the Inspector as a mouthpiece for socialist values, challenging the Birlings' capitalist worldview.",
                why: "Never announce what you are going to do -- just do it. The good version is an argument, not a signpost.",
              },
              {
                bad: "Another technique the writer uses is simile.",
                good: "The writer heightens the reader's sympathy through the simile \"like a bird with a broken wing\", which emphasises the character's vulnerability.",
                why: "The good version integrates the technique, the quotation, and the effect into a single purposeful sentence.",
              },
            ].map((row, i) => (
              <div key={i} className="p-6 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 rounded-lg bg-red-500/10 p-3">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      Weak
                    </span>
                    <p className="mt-1 text-sm text-muted-foreground">{row.bad}</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-green-500/10 p-3">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                      Strong
                    </span>
                    <p className="mt-1 text-sm text-muted-foreground">{row.good}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Why:</strong> {row.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linking paragraphs */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Linking paragraphs
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Your essay should flow logically from one paragraph to the next. Each
            paragraph should build on, contrast with, or develop the idea from the
            previous one. Here are the main linking strategies:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                type: "Building",
                connectives: [
                  "Furthermore",
                  "Moreover",
                  "This is further demonstrated",
                  "Building on this idea",
                ],
                use: "When your next point develops or deepens the same idea.",
                example:
                  "Furthermore, Shakespeare reinforces Macbeth's deteriorating mental state through his inability to sleep...",
              },
              {
                type: "Contrasting",
                connectives: [
                  "However",
                  "In contrast",
                  "Conversely",
                  "On the other hand",
                ],
                use: "When your next point offers a different perspective or complication.",
                example:
                  "However, an alternative reading suggests that Lady Macbeth's apparent strength masks a deep fragility...",
              },
              {
                type: "Shifting",
                connectives: [
                  "Later in the text",
                  "As the narrative progresses",
                  "By the end of the play",
                  "Significantly",
                ],
                use: "When you are tracking a change or development across the text.",
                example:
                  "As the play progresses, this initial ambition curdles into paranoia, suggesting that power without moral foundation is inherently unstable...",
              },
            ].map((link) => (
              <div
                key={link.type}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="font-bold text-foreground">{link.type}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{link.use}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {link.connectives.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <blockquote className="mt-4 rounded-lg border-l-4 border-primary bg-muted px-4 py-3 text-sm italic text-muted-foreground leading-relaxed">
                  {link.example}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How many paragraphs */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          How many paragraphs for different mark allocations
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          The number of paragraphs you write should be proportional to the marks
          available. Here is a practical guide -- these are not rigid rules, but
          reliable targets.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-md">
          {/* Desktop table */}
          <div className="hidden sm:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-3">Mark allocation</th>
                  <th className="px-6 py-3">Suggested paragraphs</th>
                  <th className="px-6 py-3">Structure</th>
                  <th className="px-6 py-3">Example questions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    marks: "8-12 marks",
                    paras: "2-3 paragraphs",
                    structure: "Brief intro line + 2-3 PEEL paragraphs (no separate conclusion needed)",
                    examples: "AQA Language Q2/Q3, short analysis questions",
                  },
                  {
                    marks: "15-20 marks",
                    paras: "3-4 paragraphs",
                    structure: "Short intro + 3 PEEL paragraphs + brief conclusion",
                    examples: "AQA Language Q4, Edexcel Q6, CAIE summary",
                  },
                  {
                    marks: "25-30 marks",
                    paras: "4-5 paragraphs",
                    structure: "Introduction + 3-4 PEEL paragraphs + conclusion",
                    examples: "AQA Literature questions, CAIE Literature",
                  },
                  {
                    marks: "30-40 marks",
                    paras: "5-6 paragraphs",
                    structure: "Strong introduction + 4-5 PEEL paragraphs + developed conclusion",
                    examples: "AQA Literature (inc. SPaG), Edexcel Literature",
                  },
                ].map((row) => (
                  <tr key={row.marks} className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-bold text-foreground">
                      {row.marks}
                    </td>
                    <td className="px-6 py-4 font-semibold text-foreground">
                      {row.paras}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{row.structure}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden divide-y divide-border">
            {[
              {
                marks: "8-12 marks",
                paras: "2-3 paragraphs",
                structure: "Brief intro line + 2-3 PEEL paragraphs (no separate conclusion needed)",
                examples: "AQA Language Q2/Q3, short analysis questions",
              },
              {
                marks: "15-20 marks",
                paras: "3-4 paragraphs",
                structure: "Short intro + 3 PEEL paragraphs + brief conclusion",
                examples: "AQA Language Q4, Edexcel Q6, CAIE summary",
              },
              {
                marks: "25-30 marks",
                paras: "4-5 paragraphs",
                structure: "Introduction + 3-4 PEEL paragraphs + conclusion",
                examples: "AQA Literature questions, CAIE Literature",
              },
              {
                marks: "30-40 marks",
                paras: "5-6 paragraphs",
                structure: "Strong introduction + 4-5 PEEL paragraphs + developed conclusion",
                examples: "AQA Literature (inc. SPaG), Edexcel Literature",
              },
            ].map((row) => (
              <div key={row.marks} className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">{row.marks}</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground">
                    {row.paras}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{row.structure}</p>
                <p className="text-xs text-muted-foreground">{row.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion techniques */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Conclusion techniques
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A strong conclusion does three things: it answers the question
            decisively, it pulls together the threads of your argument, and it
            leaves the examiner with a final insight. It should never introduce new
            evidence or quotations.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "The definitive answer",
                desc: "Restate your argument with clarity and conviction. Leave no ambiguity about where you stand.",
                example:
                  "Ultimately, Shakespeare presents Macbeth not as a villain but as a tragic figure -- a man whose fatal flaw of ambition destroys everything he once valued.",
              },
              {
                title: "The wider significance",
                desc: "Connect your argument to a broader theme, context, or the writer's overall purpose.",
                example:
                  "Through the Inspector's final speech, Priestley makes clear that social responsibility is not optional -- it is the foundation upon which a just society depends. His message remains as urgent today as it was in 1945.",
              },
              {
                title: "The shift in perspective",
                desc: "Offer a final reinterpretation or complication that shows sophisticated thinking.",
                example:
                  "While Scrooge's transformation appears to offer a hopeful resolution, Dickens perhaps implies something more troubling: that compassion in this society requires supernatural intervention, because the system itself offers no incentive for change.",
              },
              {
                title: "The cyclical link",
                desc: "Echo the language or idea from your introduction to create a satisfying sense of completion.",
                example:
                  "The \"prison of silence\" that opens the extract ultimately proves inescapable. Despite the character's attempts to break free, the writer's return to the same image in the final line suggests that some confinements are not physical but psychological -- and all the more powerful for it.",
              },
            ].map((tech) => (
              <div
                key={tech.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="font-bold text-foreground">{tech.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {tech.desc}
                </p>
                <blockquote className="mt-4 rounded-lg border-l-4 border-primary bg-muted px-4 py-3 text-sm italic text-muted-foreground leading-relaxed">
                  {tech.example}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 mt-10 mb-6" />
    </>
  );
}
