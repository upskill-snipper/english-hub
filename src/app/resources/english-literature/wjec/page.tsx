import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/wjec' },
  title: "WJEC Eduqas GCSE English Literature Revision",
  description:
    "Comprehensive revision resources for WJEC Eduqas GCSE English Literature. Component 1: Shakespeare and Poetry. Component 2: Post-1914 Prose/Drama, 19th Century Prose, and Unseen Poetry.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const COMPONENTS = [
  {
    title: "Component 1: Shakespeare and Poetry",
    description:
      "Section A: Shakespeare — one play studied in depth with an extract-based essay question. Section B: Poetry — two poems from the WJEC anthology compared in a single essay.",
    marks: "80 marks — 40% of GCSE",
    duration: "2 hours",
    colour: "bg-primary",
  },
  {
    title: "Component 2: Post-1914 Prose/Drama, 19th Century Prose & Unseen Poetry",
    description:
      "Section A: Post-1914 prose or drama (extract-based and essay). Section B: 19th-century prose (extract-based and essay). Section C: Unseen poetry — one analysis and one comparison.",
    marks: "80 marks — 60% of GCSE",
    duration: "2 hours 30 minutes",
    colour: "bg-primary",
  },
];

const SET_TEXTS = {
  shakespeare: [
    "Macbeth",
    "Romeo and Juliet",
    "The Merchant of Venice",
    "Much Ado About Nothing",
    "Henry V",
    "Othello",
    "The Tempest",
  ],
  post1914: [
    "An Inspector Calls — J.B. Priestley",
    "Blood Brothers — Willy Russell",
    "A Taste of Honey — Shelagh Delaney",
    "The History Boys — Alan Bennett",
    "Lord of the Flies — William Golding",
    "Animal Farm — George Orwell",
    "Anita and Me — Meera Syal",
    "Never Let Me Go — Kazuo Ishiguro",
    "About a Boy — Nick Hornby",
  ],
  nineteenth: [
    "A Christmas Carol — Charles Dickens",
    "Great Expectations — Charles Dickens",
    "The Strange Case of Dr Jekyll and Mr Hyde — R.L. Stevenson",
    "Jane Eyre — Charlotte Bronte",
    "Pride and Prejudice — Jane Austen",
    "The Sign of Four — Arthur Conan Doyle",
    "Silas Marner — George Eliot",
    "The War of the Worlds — H.G. Wells",
  ],
};

/* ─── Page component ─────────────────────────────────────────── */

export default function WJECEnglishLiteraturePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            WJEC Eduqas GCSE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Literature Revision
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Everything you need to revise for WJEC Eduqas GCSE English Literature.
            Component overviews, set text guides, poetry anthology analysis, and
            exam technique &mdash; all in one place.
          </p>
        </div>
      </section>

      {/* ── Exam overview ─────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Exam Overview</h2>
        <p className="mt-2 text-muted-foreground">
          The WJEC Eduqas GCSE English Literature qualification is assessed through
          two externally examined components. Component 1 is worth 40% and Component 2
          is worth 60% of the final grade. Both components are closed-book &mdash; no
          texts are allowed in the exam room.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {COMPONENTS.map((comp) => (
            <div
              key={comp.title}
              className="group rounded-xl border border-border p-6 shadow-md transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`inline-block rounded-full ${comp.colour} px-3 py-1 text-xs font-semibold text-white`}
                >
                  {comp.marks}
                </div>
                <span className="text-xs font-medium text-muted-foreground">{comp.duration}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary">
                {comp.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Component 1 detail ────────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Component 1: Shakespeare and Poetry
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">2 hours &bull; 80 marks &bull; 40% of GCSE</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Section A: Shakespeare (40 marks)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; One Shakespeare play studied in full</li>
                <li>&bull; An extract is printed on the exam paper</li>
                <li>&bull; One two-part question: part (i) on the extract, part (ii) on the play as a whole</li>
                <li>&bull; Must explore language, structure, and context</li>
                <li>&bull; No choice of question &mdash; one compulsory question on your set text</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Section B: Poetry (40 marks)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; Two poems from the WJEC Eduqas poetry anthology</li>
                <li>&bull; Both poems are printed on the paper</li>
                <li>&bull; One essay comparing the two poems</li>
                <li>&bull; Must analyse language, imagery, structure, and form</li>
                <li>&bull; Should consider poets&apos; purposes and effects on the reader</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Component 2 detail ────────────────────────────────── */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Component 2: Post-1914 Prose/Drama, 19th Century Prose &amp; Unseen Poetry
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">2 hours 30 minutes &bull; 80 marks &bull; 60% of GCSE</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Section A: Post-1914 Prose/Drama (20 marks)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; One post-1914 prose or drama text</li>
                <li>&bull; An extract is printed on the paper</li>
                <li>&bull; One question requiring analysis of the extract and the wider text</li>
                <li>&bull; Covers themes, characters, language, and context</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Section B: 19th Century Prose (20 marks)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; One 19th-century prose text</li>
                <li>&bull; An extract is printed on the paper</li>
                <li>&bull; One question on the extract and the wider novel</li>
                <li>&bull; Must address language, themes, and contextual factors</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Section C: Unseen Poetry (40 marks)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; Two previously unseen poems</li>
                <li>&bull; Part (i): Analysis of one poem (20 marks)</li>
                <li>&bull; Part (ii): Comparison of both poems (20 marks)</li>
                <li>&bull; Analyse language, imagery, structure, and form</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Set texts ─────────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Set Texts List
          </h2>
          <p className="mt-2 text-muted-foreground">
            Your school will choose one text from each category below. Check with
            your teacher which texts you are studying.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* Shakespeare */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-bold text-foreground">Shakespeare (Component 1)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {SET_TEXTS.shakespeare.map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-1914 */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-bold text-foreground">Post-1914 Prose/Drama (Component 2)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {SET_TEXTS.post1914.map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* 19th Century */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-bold text-foreground">19th Century Prose (Component 2)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {SET_TEXTS.nineteenth.map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assessment objectives ─────────────────────────────── */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Assessment Objectives
          </h2>
          <p className="mt-2 text-muted-foreground">
            All responses are marked against these four AOs. Knowing how marks
            are weighted for each question helps you structure your answer.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                ao: "AO1",
                desc: "Read, understand, and respond to texts. Use textual references (including quotations) to support and illustrate interpretations.",
              },
              {
                ao: "AO2",
                desc: "Analyse the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
              },
              {
                ao: "AO3",
                desc: "Show understanding of the relationships between texts and the contexts in which they were written.",
              },
              {
                ao: "AO4",
                desc: "Use a range of vocabulary and sentence structures for clarity, purpose, and effect, with accurate spelling and punctuation. (Only assessed on certain questions.)",
              },
            ].map((obj) => (
              <div
                key={obj.ao}
                className="rounded-lg border border-border bg-card p-5"
              >
                <span className="inline-block rounded bg-primary px-2 py-0.5 text-xs font-bold text-white">
                  {obj.ao}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key differences from AQA/Edexcel ──────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground">
            How WJEC Eduqas Differs from AQA &amp; Edexcel
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-4">
              <h3 className="font-semibold text-foreground">Poetry anthology is compared, not contrasted with unseen</h3>
              <p className="mt-1 text-sm">
                WJEC Eduqas prints both anthology poems on the paper and asks you to
                compare them in a single essay. AQA names one poem and asks you to choose
                a second to compare. Edexcel names one and asks for comparison with another
                from the cluster. The WJEC approach removes the need to memorise which poem
                to choose.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-4">
              <h3 className="font-semibold text-foreground">
                Unseen poetry carries heavy weight
              </h3>
              <p className="mt-1 text-sm">
                Section C of Component 2 is worth 40 marks (half of the paper, 25% of the
                total GCSE). This is significantly more than AQA (32 marks across the whole
                of Paper 2) or Edexcel. Strong unseen poetry skills are essential.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-4">
              <h3 className="font-semibold text-foreground">
                Extract provided for Shakespeare
              </h3>
              <p className="mt-1 text-sm">
                Like AQA, WJEC Eduqas provides a Shakespeare extract on the paper. Edexcel
                does not. However, the WJEC question is two-part: part (i) focuses on the
                extract and part (ii) requires discussion of the whole play.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-4">
              <h3 className="font-semibold text-foreground">
                40/60 weighting between components
              </h3>
              <p className="mt-1 text-sm">
                Component 2 (Post-1914, 19th century, and unseen poetry) is worth 60% of
                the GCSE, making it the more heavily weighted paper. AQA splits 50/50 between
                its two papers.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-4">
              <h3 className="font-semibold text-foreground">
                Different text options
              </h3>
              <p className="mt-1 text-sm">
                WJEC Eduqas offers some unique text choices such as The History Boys,
                About a Boy, and The War of the Worlds that are not available on AQA or
                Edexcel specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
