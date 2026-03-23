import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Exam Day Advice",
  description:
    "Practical exam day advice for GCSE and IGCSE English. What to bring, how to read the paper, how to plan answers, how to stay calm under pressure, and what to do in the last 5 minutes.",
};

/* ─── Page ───────────────────────────────────────────────────── */

export default function ExamDayPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Exam Technique
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Exam Day Advice
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Practical, no-nonsense advice for the day itself. You have done the
            revision -- now make sure nothing else gets in the way of your best
            performance.
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
          <li className="font-medium text-primary">Exam Day</li>
        </ol>
      </nav>

      {/* What to bring */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          What to bring
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Pack everything the night before. Do not leave this to the morning.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="font-bold text-green-700">Essentials</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Black pens (at least 2 -- one will run out at the worst moment)",
                "A clear pencil case or clear plastic bag",
                "Your candidate number and centre number (check with your school)",
                "A watch (non-smart) to track time independently",
                "Water bottle (clear, with the label removed)",
                "Any required ID or exam card",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                    &#10003;
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-md">
            <h3 className="font-bold text-primary">Useful extras</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Pencil and eraser (for annotations and planning)",
                "Highlighters (check your school allows them)",
                "A small ruler (useful for underlining in source texts)",
                "Spare pens in case a friend forgets theirs",
                "A light snack for between papers (nothing noisy or messy)",
                "Tissues (just in case)",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to read the paper */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How to read the paper
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The first 10-15 minutes of your exam should be spent reading, not
            writing. This is an investment that pays off in every answer you
            write.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "1",
                title: "Read the questions first",
                detail:
                  "Before reading the source texts, skim through the questions. This tells your brain what to look for when you read the texts. You will naturally start spotting relevant material.",
              },
              {
                step: "2",
                title: "Read the source texts carefully",
                detail:
                  "Read each text from start to finish. Do not just skim. Many marks are lost because students misunderstand the text. Pay attention to tone, shifts in mood, and the overall arc of the piece.",
              },
              {
                step: "3",
                title: "Annotate as you read",
                detail:
                  "Underline interesting language choices. Circle structural features. Write brief notes in the margins: \"metaphor -- creates tension\", \"shift in tone here\", \"contrast with opening\". These annotations become your evidence bank.",
              },
              {
                step: "4",
                title: "Re-read the question you are about to answer",
                detail:
                  "Before writing each answer, re-read the question. Underline the key command words (analyse, compare, evaluate, describe). Identify the specific focus (language, structure, a particular theme). This prevents you from drifting off-topic.",
              },
              {
                step: "5",
                title: "Check the marks",
                detail:
                  "The mark allocation tells you how much to write. An 8-mark question needs far less than a 30-mark question. Adjust your depth and length accordingly.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to plan answers */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          How to plan answers
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          A planned answer is always better than an unplanned one. Planning takes
          3-5 minutes but saves you from waffle, repetition, and running out of
          ideas mid-paragraph.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-[#2E86C1] bg-card p-6 shadow-md">
            <h3 className="font-bold text-foreground">
              For analytical/essay questions
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Write your thesis (your overall argument) in one sentence at the top.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>List 3-4 key points as bullet points underneath.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Next to each point, jot down the quotation you will use.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Note any key techniques to mention (metaphor, contrast, etc.).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">5.</span>
                <span>Write a one-line conclusion idea so you know where you are heading.</span>
              </li>
            </ol>
          </div>

          <div className="rounded-xl border-2 border-accent bg-card p-6 shadow-md">
            <h3 className="font-bold text-foreground">
              For creative writing tasks
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-accent">1.</span>
                <span>Decide on your setting, main character, and mood/atmosphere.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">2.</span>
                <span>Plan your opening image or moment -- how will you hook the reader?</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">3.</span>
                <span>Sketch 3-4 &ldquo;moments&rdquo; or &ldquo;scenes&rdquo; -- keep the plot simple.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">4.</span>
                <span>Plan 2-3 specific language techniques you want to use (a metaphor, a simile, sensory detail).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">5.</span>
                <span>Decide on your ending -- make it deliberate, not rushed.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-accent-100 bg-accent-50/50 p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Pro tip:</strong> Cross out your plan with a single line
            when you are done. The examiner will not mark it, but if you run out
            of time, they can see what you intended to write -- and it shows
            deliberate planning.
          </p>
        </div>
      </section>

      {/* How to stay calm */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How to stay calm
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Exam anxiety is completely normal. The students who perform best are
            not the ones who feel no nerves -- they are the ones who manage their
            nerves effectively.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Before the exam",
                tips: [
                  "Get a full night's sleep -- cramming until 2am does more harm than good.",
                  "Eat a proper breakfast. Your brain needs fuel.",
                  "Arrive early but do not stand around listening to other people's panic.",
                  "Avoid last-minute revision in the corridor -- it creates anxiety, not confidence.",
                  "Listen to music or do breathing exercises if that helps you focus.",
                ],
              },
              {
                title: "During the exam",
                tips: [
                  "If you feel overwhelmed, put your pen down and take three slow, deep breaths.",
                  "Focus only on the question in front of you, not the whole paper.",
                  "If you get stuck on a question, move on and come back to it later.",
                  "Do not watch other students. Their speed is irrelevant to your performance.",
                  "Remind yourself: you have prepared for this. Trust your preparation.",
                ],
              },
              {
                title: "If you go blank",
                tips: [
                  "Re-read the question and the source text slowly. Familiarity will return.",
                  "Start writing anything -- even a rough point. Writing unlocks thinking.",
                  "Look at your annotations. They were written by a calm version of you.",
                  "Use the PEEL structure as scaffolding. Point first, then find evidence.",
                  "Remember: you do not need a perfect answer. You need a good-enough answer.",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="font-bold text-foreground">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The last 5 minutes */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          What to do in the last 5 minutes
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          The last five minutes of an exam are some of the most valuable. Use them
          wisely and you can pick up several extra marks.
        </p>

        <div className="mt-8 space-y-4">
          {[
            {
              title: "Check for unanswered questions",
              detail:
                "Quickly flip through the paper. Make sure every question has been attempted. A blank answer is a guaranteed zero -- even bullet points are better than nothing.",
            },
            {
              title: "Proofread for SPaG errors",
              detail:
                "Read through your writing and correct any spelling, punctuation, and grammar mistakes. On AQA Language Paper 1 Q5, SPaG is worth up to 16 marks. A missing full stop or a misspelled word is an easy mark thrown away.",
            },
            {
              title: "Add missing analysis",
              detail:
                "If you spot a quotation you used but did not fully analyse, add a sentence of analysis in the margin or at the end. Use an asterisk (*) and write \"see additional point\" next to the relevant paragraph.",
            },
            {
              title: "Strengthen weak conclusions",
              detail:
                "If any of your essays trail off without a proper conclusion, add a brief concluding sentence. Even two sentences that summarise your argument are better than an essay that just stops.",
            },
            {
              title: "Check you have answered the right questions",
              detail:
                "This sounds obvious, but every year students answer the wrong question. Double-check that you have answered the correct option, especially on Literature papers where you choose a text.",
            },
            {
              title: "Tidy up your handwriting",
              detail:
                "If any words are illegible, rewrite them clearly above. Examiners cannot award marks for words they cannot read.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final message */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            You have got this
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            The fact that you are reading this page means you care about doing
            well -- and that already puts you ahead. Trust your preparation,
            follow these strategies, and give every question your best effort.
            That is all anyone can ask.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/exam-technique/time-management"
              className="rounded-lg bg-[#1A5276] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1A5276]/90"
            >
              Review time management
            </Link>
            <Link
              href="/resources/exam-technique/question-types"
              className="rounded-lg border-2 border-[#2E86C1] px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-primary/10"
            >
              Review question types
            </Link>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 mt-10 mb-6" />
    </>
  );
}
