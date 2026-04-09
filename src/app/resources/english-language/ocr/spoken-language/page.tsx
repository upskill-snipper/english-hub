import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/ocr/spoken-language' },
  title: "OCR Spoken Language Endorsement | The English Hub",
  description:
    "Complete guide to the OCR GCSE English Language Spoken Language endorsement. Presentation skills, audience interaction, and Standard English guidance.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRSpokenLanguagePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-language/ocr"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; OCR English Language
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Spoken Language Endorsement
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Component 03 &middot; Separately endorsed &middot; Pass, Merit, or
            Distinction
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Overview */}
        <section aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="text-2xl font-bold text-foreground"
          >
            What Is the Spoken Language Endorsement?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Spoken Language endorsement is a compulsory component of OCR
              GCSE English Language, but it is reported <strong>separately</strong>{" "}
              from your main GCSE grade. It does not contribute to the 9&ndash;1
              grade but appears on your certificate as Pass, Merit, or
              Distinction (or Not Classified).
            </p>
            <p>
              You are required to deliver a <strong>formal presentation or
              speech</strong> on a topic of your choice, respond to questions
              and feedback from the audience, and use spoken Standard English
              throughout.
            </p>
            <p>
              Your teacher will assess you in class. The assessment is
              internally marked and externally moderated by OCR.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Assessment objectives */}
        <section aria-labelledby="ao-heading">
          <h2
            id="ao-heading"
            className="text-2xl font-bold text-foreground"
          >
            Assessment Objectives
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground">AO7 &mdash; Presenting</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Demonstrate presentation skills in a formal setting. This
                means you should speak clearly, maintain appropriate pace and
                volume, use gestures and eye contact effectively, and
                structure your talk logically. You should also use visual aids,
                notes, or prompts where appropriate (but avoid reading from a
                full script).
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground">AO8 &mdash; Listening and Responding</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Listen and respond appropriately to spoken language, including
                to questions and feedback on presentations. After your
                presentation, you will be asked questions by your teacher
                and/or classmates. You need to listen carefully, understand
                the question, and respond thoughtfully and fully. This is not
                just about answering correctly &mdash; it is about
                demonstrating that you can engage in a spoken exchange at a
                formal level.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground">AO9 &mdash; Using Standard English</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use spoken Standard English effectively in speeches and
                presentations. This means using formal grammar, avoiding
                slang, and speaking in complete, well-formed sentences. You
                should demonstrate that you can adapt your spoken language to
                a formal context.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Choosing a topic */}
        <section aria-labelledby="topic-heading">
          <h2
            id="topic-heading"
            className="text-2xl font-bold text-foreground"
          >
            Choosing Your Topic
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              You can choose any topic for your presentation, but the best
              topics are ones that:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>You are genuinely interested in</strong> &mdash;
                passion and enthusiasm come across when you speak and make
                your presentation more engaging.
              </li>
              <li>
                <strong>Allow you to present a viewpoint or argument</strong>{" "}
                &mdash; persuasive or argumentative topics give you the chance
                to use rhetorical devices and demonstrate higher-level
                speaking skills.
              </li>
              <li>
                <strong>Have enough depth for extended discussion</strong>{" "}
                &mdash; you need to speak for a sustained period and answer
                questions, so your topic must have substance.
              </li>
              <li>
                <strong>Are appropriate for a formal setting</strong> &mdash;
                remember, this is assessed in a formal context.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-foreground">
              Example Topics
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Persuasive / Argumentative</p>
                <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Should school uniforms be abolished?</li>
                  <li>The impact of social media on mental health</li>
                  <li>Should the voting age be lowered to 16?</li>
                  <li>Is space exploration worth the cost?</li>
                  <li>Should animals be used in scientific research?</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Informative / Explanatory</p>
                <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>How climate change affects the UK</li>
                  <li>The history and impact of a cultural movement</li>
                  <li>How AI is changing education</li>
                  <li>The importance of mental health awareness</li>
                  <li>A person who has inspired you and why</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Planning your presentation */}
        <section aria-labelledby="planning-heading">
          <h2
            id="planning-heading"
            className="text-2xl font-bold text-foreground"
          >
            Planning Your Presentation
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="text-lg font-semibold text-foreground">
              Structure
            </h3>
            <p>
              A strong presentation follows a clear structure. Use this
              framework as a starting point:
            </p>
            <ol className="ml-6 list-decimal space-y-3">
              <li>
                <strong>Introduction</strong> &mdash; Hook your audience with
                a compelling opening: a question, a surprising fact, a
                quotation, or a bold statement. State your topic and your main
                argument or position clearly. Example: &ldquo;Imagine a world
                where every young person&rsquo;s voice is heard in elections.
                Today, I want to argue that the voting age should be lowered
                to sixteen.&rdquo;
              </li>
              <li>
                <strong>Main points (3&ndash;4)</strong> &mdash; Each main
                point should be supported with evidence, examples, or
                statistics. Organise them logically, with the strongest point
                either first (for immediate impact) or last (for a powerful
                conclusion).
              </li>
              <li>
                <strong>Counter-argument</strong> &mdash; Acknowledge the
                opposing view and explain why your position is still stronger.
                This shows maturity and critical thinking.
              </li>
              <li>
                <strong>Conclusion</strong> &mdash; Summarise your key points,
                restate your argument, and end with a memorable closing line
                or call to action. Circle back to your opening hook for a
                satisfying circular structure.
              </li>
            </ol>

            <h3 className="mt-6 text-lg font-semibold text-foreground">
              Notes and Prompts
            </h3>
            <p>
              You may use brief notes or cue cards, but you should
              <strong> not read from a full script</strong>. Cue cards should
              contain key words and phrases, not full sentences. This ensures
              you maintain eye contact and speak naturally. Number your cue
              cards so you can keep track of the order.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Delivery skills */}
        <section aria-labelledby="delivery-heading">
          <h2
            id="delivery-heading"
            className="text-2xl font-bold text-foreground"
          >
            Delivery Skills
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Eye Contact</h3>
                <p className="mt-2 text-sm">
                  Look at your audience, not at the floor, ceiling, or your
                  notes. Scan different parts of the room to engage everyone.
                  Eye contact builds confidence and credibility.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Pace</h3>
                <p className="mt-2 text-sm">
                  Speak at a measured pace. Nerves often cause people to
                  rush &mdash; consciously slow down. Use pauses for emphasis
                  after key points. A deliberate pause can be more powerful
                  than any word.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Volume and Projection</h3>
                <p className="mt-2 text-sm">
                  Ensure everyone in the room can hear you clearly. Project
                  your voice without shouting. Vary your volume for effect
                  &mdash; a quieter moment can draw the audience in.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Tone and Expression</h3>
                <p className="mt-2 text-sm">
                  Avoid speaking in a monotone. Vary your intonation to
                  express enthusiasm, concern, humour, or urgency. Your voice
                  should reflect the content of what you are saying.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Body Language</h3>
                <p className="mt-2 text-sm">
                  Stand up straight and use open, confident body language.
                  Avoid fidgeting, crossing your arms, or swaying. Use hand
                  gestures naturally to emphasise points, but don&rsquo;t
                  overdo it.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Rhetorical Techniques</h3>
                <p className="mt-2 text-sm">
                  Use rhetorical questions, tricolon (rule of three), anaphora
                  (repetition), emotive language, and direct address to engage
                  your audience. These are the hallmarks of an effective
                  speaker.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Answering questions */}
        <section aria-labelledby="questions-heading">
          <h2
            id="questions-heading"
            className="text-2xl font-bold text-foreground"
          >
            Answering Questions
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              After your presentation, you will face questions from your
              teacher and/or classmates. This tests AO8. Here are strategies
              for success:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Listen to the full question</strong> before you start
                answering. Don&rsquo;t interrupt or jump in prematurely.
              </li>
              <li>
                <strong>Take a moment to think</strong> &mdash; it is
                perfectly acceptable to pause briefly before responding. A
                thoughtful answer is better than a rushed one.
              </li>
              <li>
                <strong>Answer in full sentences</strong> using Standard
                English. Avoid one-word answers or informal language.
              </li>
              <li>
                <strong>If you don&rsquo;t know the answer</strong>, say so
                honestly: &ldquo;That&rsquo;s an interesting question. I
                haven&rsquo;t researched that specific aspect, but based on
                what I do know, I would suggest&hellip;&rdquo;
              </li>
              <li>
                <strong>Refer back to your presentation</strong> where
                relevant: &ldquo;As I mentioned earlier&hellip;&rdquo;
              </li>
              <li>
                <strong>Engage with challenging questions</strong> &mdash;
                these are opportunities to demonstrate critical thinking, not
                threats.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Grade descriptors */}
        <section aria-labelledby="grades-heading">
          <h2
            id="grades-heading"
            className="text-2xl font-bold text-foreground"
          >
            Grade Descriptors
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-success/30 bg-success-50 p-5">
              <h3 className="font-semibold text-success-700">Distinction</h3>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Presentation is confidently and skillfully delivered</li>
                <li>Content is challenging, well-researched, and compelling</li>
                <li>Uses a wide range of rhetorical and presentational techniques effectively</li>
                <li>Responds to questions perceptively and with authority</li>
                <li>Standard English is used fluently and consistently throughout</li>
              </ul>
            </div>

            <div className="rounded-lg border border-accent/30 bg-primary/10 p-5">
              <h3 className="font-semibold text-primary">Merit</h3>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Presentation is clearly and competently delivered</li>
                <li>Content is well-organised and engaging</li>
                <li>Uses rhetorical and presentational techniques with some success</li>
                <li>Responds to questions clearly and with some detail</li>
                <li>Standard English is used securely with occasional minor errors</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="font-semibold text-muted-foreground">Pass</h3>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Presentation is delivered with basic competence</li>
                <li>Content is understandable and has some structure</li>
                <li>Some attempt to use presentational techniques</li>
                <li>Responds to questions with simple, relevant answers</li>
                <li>Standard English is used with some consistency</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Practice checklist */}
        <section aria-labelledby="checklist-heading">
          <h2
            id="checklist-heading"
            className="text-2xl font-bold text-foreground"
          >
            Practice Checklist
          </h2>
          <div className="mt-4 space-y-2 text-muted-foreground">
            <p>Use this checklist to prepare for your spoken language assessment:</p>
            <ul className="ml-6 mt-3 list-disc space-y-2">
              <li>I have chosen a topic I am knowledgeable and passionate about</li>
              <li>My presentation has a clear introduction, main body, and conclusion</li>
              <li>I have included at least three strong, evidence-based points</li>
              <li>I have addressed a counter-argument</li>
              <li>I have used rhetorical techniques (tricolon, anaphora, rhetorical questions)</li>
              <li>I have prepared cue cards with key words (not a full script)</li>
              <li>I have practised delivering my presentation aloud at least three times</li>
              <li>I have practised maintaining eye contact</li>
              <li>I have timed my presentation (aim for 3&ndash;5 minutes)</li>
              <li>I have prepared for likely questions and practised answering them</li>
              <li>I am confident using Standard English throughout</li>
              <li>I have asked someone to give me feedback on my delivery</li>
            </ul>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
