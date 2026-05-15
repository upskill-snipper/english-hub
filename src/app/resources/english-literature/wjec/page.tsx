import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'WJEC GCSE English Literature resources — The English Hub',
    description:
      'WJEC Eduqas GCSE English Literature set-text guides, Eduqas anthology poetry, unseen poetry and exam technique aligned to the 2025 specification.',
  },
  title: 'WJEC GCSE English Literature resources — The English Hub',
  description:
    'WJEC Eduqas GCSE English Literature set-text guides, Eduqas anthology poetry, unseen poetry and exam technique aligned to the 2025 specification.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/wjec' },
}

/* ─── Data ───────────────────────────────────────────────────── */

const COMPONENTS = [
  {
    title: 'Paper 1: Shakespeare and Poetry',
    description:
      'Section A: Shakespeare — one play studied in depth with an extract-based essay question. Section B: Poetry — two poems from the WJEC anthology compared in a single essay.',
    marks: '80 marks — 40% of GCSE',
    duration: '2 hours',
  },
  {
    title: 'Paper 2: Post-1914 Prose/Drama, 19th Century Prose & Unseen Poetry',
    description:
      'Section A: Post-1914 prose or drama (extract-based and essay). Section B: 19th-century prose (extract-based and essay). Section C: Unseen poetry — one analysis and one comparison.',
    marks: '80 marks — 60% of GCSE',
    duration: '2 hours 30 minutes',
  },
]

const SET_TEXTS = {
  shakespeare: [
    'Macbeth',
    'Romeo and Juliet',
    'The Merchant of Venice',
    'Much Ado About Nothing',
    'Henry V',
    'Othello',
    'The Tempest',
  ],
  post1914: [
    'An Inspector Calls — J.B. Priestley',
    'Blood Brothers — Willy Russell',
    'A Taste of Honey — Shelagh Delaney',
    'The History Boys — Alan Bennett',
    'Lord of the Flies — William Golding',
    'Animal Farm — George Orwell',
    'Anita and Me — Meera Syal',
    'Never Let Me Go — Kazuo Ishiguro',
    'About a Boy — Nick Hornby',
  ],
  nineteenth: [
    'A Christmas Carol — Charles Dickens',
    'Great Expectations — Charles Dickens',
    'The Strange Case of Dr Jekyll and Mr Hyde — R.L. Stevenson',
    'Jane Eyre — Charlotte Bronte',
    'Pride and Prejudice — Jane Austen',
    'The Sign of Four — Arthur Conan Doyle',
    'Silas Marner — George Eliot',
    'The War of the Worlds — H.G. Wells',
  ],
}

/* ─── Page component ─────────────────────────────────────────── */

export default function WJECEnglishLiteraturePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          {
            name: 'English Literature',
            url: 'https://theenglishhub.app/resources/english-literature',
          },
          {
            name: 'WJEC Eduqas',
            url: 'https://theenglishhub.app/resources/english-literature/wjec',
          },
        ]}
      />
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            WJEC Eduqas GCSE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Literature Revision
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Everything you need to revise for WJEC Eduqas GCSE English Literature. Paper overviews,
            set text guides, poetry anthology analysis, and exam technique &mdash; all in one place.
          </p>
        </div>
      </section>

      {/* ── Exam overview ─────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Exam Overview</h2>
        <p className="mt-2 text-muted-foreground">
          The WJEC Eduqas GCSE English Literature qualification is assessed through two externally
          examined papers. Paper 1 is worth 40% and Paper 2 is worth 60% of the final grade. Both
          papers are closed-book &mdash; no texts are allowed in the exam room.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {COMPONENTS.map((comp) => (
            <div
              key={comp.title}
              className="group rounded-xl border border-border p-6 shadow-md transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {comp.marks}
                </div>
                <span className="text-xs font-medium text-muted-foreground">{comp.duration}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary">
                {comp.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{comp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Paper 1 detail ────────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">Paper 1: Shakespeare and Poetry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            2 hours &bull; 80 marks &bull; 40% of GCSE
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Section A: Shakespeare (40 marks)</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; One Shakespeare play studied in full</li>
                <li>&bull; An extract is printed on the exam paper</li>
                <li>
                  &bull; One two-part question: part (i) on the extract, part (ii) on the play as a
                  whole
                </li>
                <li>&bull; Must explore language, structure, and context</li>
                <li>
                  &bull; No choice of question &mdash; one compulsory question on your set text
                </li>
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

      {/* ── Paper 2 detail ────────────────────────────────── */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Paper 2: Post-1914 Prose/Drama, 19th Century Prose &amp; Unseen Poetry
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            2 hours 30 minutes &bull; 80 marks &bull; 60% of GCSE
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Section A: Post-1914 Prose/Drama (20 marks)
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>&bull; One post-1914 prose or drama text</li>
                <li>&bull; An extract is printed on the paper</li>
                <li>&bull; One question requiring analysis of the extract and the wider text</li>
                <li>&bull; Covers themes, characters, language, and context</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Section B: 19th Century Prose (20 marks)
              </h3>
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
          <h2 className="text-2xl font-bold text-foreground">Set Texts List</h2>
          <p className="mt-2 text-muted-foreground">
            Your school will choose one text from each category below. Check with your teacher which
            texts you are studying.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* Shakespeare */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-bold text-foreground">Shakespeare (Paper 1)</h3>
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
              <h3 className="font-bold text-foreground">Post-1914 Prose/Drama (Paper 2)</h3>
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
              <h3 className="font-bold text-foreground">19th Century Prose (Paper 2)</h3>
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
          <h2 className="text-2xl font-bold text-foreground">Assessment Objectives</h2>
          <p className="mt-2 text-muted-foreground">
            All responses are marked against these four AOs. Knowing how marks are weighted for each
            question helps you structure your answer.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                ao: 'Reading and response',
                desc: 'Read, understand, and respond to texts. Use textual references (including quotations) to support and illustrate interpretations.',
              },
              {
                ao: 'Language, form and structure',
                desc: 'Analyse the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
              },
              {
                ao: 'Contextual understanding',
                desc: 'Show understanding of the relationships between texts and the contexts in which they were written.',
              },
              {
                ao: 'Written accuracy',
                desc: 'Use a range of vocabulary and sentence structures for clarity, purpose, and effect, with accurate spelling and punctuation. (Only assessed on certain questions.)',
              },
            ].map((obj) => (
              <div key={obj.ao} className="rounded-lg border border-border bg-card p-5">
                <span className="inline-block rounded bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                  {obj.ao}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key features ─────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key features of the WJEC Eduqas exam
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
              <h3 className="font-semibold text-foreground">Both anthology poems are printed</h3>
              <p className="mt-1 text-sm">
                WJEC Eduqas prints both anthology poems on the paper and asks you to compare them in
                a single essay. This removes the need to memorise which poem to choose, but you must
                be ready to compare any pairing.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
              <h3 className="font-semibold text-foreground">Unseen poetry carries heavy weight</h3>
              <p className="mt-1 text-sm">
                Section C of Paper 2 is worth 40 marks (half of the paper, 25% of the total GCSE).
                Strong unseen poetry skills are essential for a high grade.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
              <h3 className="font-semibold text-foreground">Extract provided for Shakespeare</h3>
              <p className="mt-1 text-sm">
                WJEC Eduqas provides a Shakespeare extract on the paper. The question is two-part:
                part (i) focuses on the extract and part (ii) requires discussion of the whole play.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
              <h3 className="font-semibold text-foreground">40/60 weighting between papers</h3>
              <p className="mt-1 text-sm">
                Paper 2 (Post-1914, 19th century, and unseen poetry) is worth 60% of the GCSE,
                making it the more heavily weighted paper.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  )
}
