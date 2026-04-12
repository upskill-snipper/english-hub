import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AQA English Language Paper 1 & Paper 2 Technique Guides | The English Hub',
  description:
    'Question-by-question AQA English Language Paper 1 and Paper 2 technique guides for GCSE. Grade 9 model answers, mark schemes explained, timing and examiner tips. Written by GCSE examiners.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/language-paper' },
  openGraph: {
    title: 'AQA Language Paper 1 & 2 Technique Guides — The English Hub',
    description:
      'Grade 9 walkthroughs for every AQA English Language Paper 1 and Paper 2 question, written by GCSE examiners.',
  },
}

const paper1Questions = [
  { slug: 'aqa-language-paper-1-question-1-guide', title: 'Paper 1 Question 1 — List 4 things (4 marks)' },
  { slug: 'aqa-language-paper-1-question-2-language-analysis', title: 'Paper 1 Question 2 — Language analysis (8 marks)' },
  { slug: 'aqa-language-paper-1-question-3-structure', title: 'Paper 1 Question 3 — Structure (8 marks)' },
  { slug: 'aqa-language-paper-1-question-4-evaluation', title: 'Paper 1 Question 4 — Evaluation (20 marks)' },
  { slug: 'aqa-language-paper-1-question-5-creative-writing', title: 'Paper 1 Question 5 — Creative writing (40 marks)' },
]

const paper1Technique = [
  { slug: 'paper-1-descriptive-writing-grade-9-guide', title: 'Paper 1 descriptive writing — Grade 9 guide' },
  { slug: 'paper-1-narrative-writing-grade-9-guide', title: 'Paper 1 narrative writing — Grade 9 guide' },
  { slug: 'paper-1-time-management-60-minutes', title: 'Paper 1 time management in 60 minutes' },
  { slug: 'paper-1-how-to-identify-language-techniques', title: 'How to identify language techniques (Paper 1)' },
  { slug: 'paper-1-structural-features-explained', title: 'Structural features explained (Paper 1 Q3)' },
]

const paper2Questions = [
  { slug: 'aqa-language-paper-2-question-1-true-false', title: 'Paper 2 Question 1 — True/false (4 marks)' },
  { slug: 'aqa-language-paper-2-question-2-summary', title: 'Paper 2 Question 2 — Summary (8 marks)' },
  { slug: 'aqa-language-paper-2-question-3-language', title: 'Paper 2 Question 3 — Language (12 marks)' },
  { slug: 'aqa-language-paper-2-question-4-comparison', title: 'Paper 2 Question 4 — Comparison (16 marks)' },
  { slug: 'aqa-language-paper-2-question-5-transactional', title: 'Paper 2 Question 5 — Transactional writing (40 marks)' },
]

const paper2Technique = [
  { slug: 'paper-2-article-writing-grade-9-guide', title: 'Paper 2 article writing — Grade 9 guide' },
  { slug: 'paper-2-letter-writing-grade-9-guide', title: 'Paper 2 letter writing — Grade 9 guide' },
  { slug: 'paper-2-speech-writing-grade-9-guide', title: 'Paper 2 speech writing — Grade 9 guide' },
  { slug: 'paper-2-summary-question-step-by-step', title: 'Paper 2 summary question step-by-step' },
  { slug: 'paper-2-comparison-question-phrases-to-use', title: 'Paper 2 comparison question — phrases to use' },
]

const generalTechnique = [
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST and DAFFOREST persuasive techniques explained' },
  { slug: 'language-paper-grade-9-vocabulary-bank', title: 'Language Paper Grade 9 vocabulary bank' },
  { slug: 'common-mistakes-aqa-language-paper-1', title: 'Common mistakes in AQA Language Paper 1' },
  { slug: 'common-mistakes-aqa-language-paper-2', title: 'Common mistakes in AQA Language Paper 2' },
]

export default function LanguagePaperAnalysisHub() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AQA English Language Paper 1 & 2 Technique Hub',
    description:
      'A collection of AQA English Language Paper 1 and Paper 2 technique guides, covering every question and the writing tasks, for GCSE students.',
    url: 'https://theenglishhub.app/analysis/language-paper',
    author: { '@type': 'Organization', name: 'The English Hub' },
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span>Analysis</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">Language Paper</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA English Language Paper 1 &amp; Paper 2 Technique Guides
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Twenty-five focused guides covering every question on AQA English Language Paper 1
        and Paper 2, plus the writing tasks and general technique pages that most students
        need the night before the exam. Every page is written by experienced GCSE examiners
        and targets the exact phrases students type into search engines: how to answer
        Paper 1 Question 2, how to structure the Paper 2 comparison, and how to hit Grade 9
        on the 40-mark writing tasks.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">How to use this hub</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Start with the question you are weakest on and read the guide all the way through.
          Each page includes the mark scheme in plain English, a worked model answer, a
          timing plan, and common mistakes to avoid. Once you have covered every question,
          move to the general technique pages to sharpen your vocabulary and method. Every
          page links back to our full language revision notes so you can zoom out when you
          need wider context.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/language"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Open the full Language revision hub
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Paper 1 questions (5)</h2>
        <p className="mt-2 text-muted-foreground">
          One guide per question on Paper 1 (Explorations in Creative Reading and Writing).
          Mark scheme, model answer and timing for each.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper1Questions.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Paper 1 technique (5)</h2>
        <p className="mt-2 text-muted-foreground">
          Walkthroughs of Paper 1 skills: descriptive and narrative writing, timing, language
          techniques and structural features.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper1Technique.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Paper 2 questions (5)</h2>
        <p className="mt-2 text-muted-foreground">
          One guide per question on Paper 2 (Writers&apos; Viewpoints and Perspectives).
          True/false, summary, language, comparison, and the 40-mark transactional task.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper2Questions.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Paper 2 technique (5)</h2>
        <p className="mt-2 text-muted-foreground">
          Walkthroughs of every non-fiction form you might be asked to write, plus the
          summary and comparison method in detail.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {paper2Technique.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">General technique (5)</h2>
        <p className="mt-2 text-muted-foreground">
          Cross-paper guides: the techniques, persuasive devices and vocabulary every GCSE
          English Language student should recognise.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {generalTechnique.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/analysis/language-paper/${p.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Ready to revise the whole paper?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          These technique pages sit alongside our full Language revision notes, which cover
          reading, writing and SPAG in detail. If you are preparing for the real exam, use
          those as your spine and come back here for surgical practice on the questions you
          find hardest.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/language"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Go to full Language revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
