import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/comparison' },
  title: "Comparison Skills Hub | The English Hub",
  description:
    "Master the art of comparing texts for GCSE and IGCSE English. Comprehensive guides covering poetry comparison, prose and drama comparison, and Language Paper 2 comparison skills with full annotated model responses.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const COMPARISON_AREAS = [
  {
    title: "Poetry Comparison",
    href: "/resources/comparison/poetry-comparison",
    description:
      "Step-by-step method for comparing poems, structural approaches (alternating vs block), 50+ comparative connectives, full example comparisons including Ozymandias vs My Last Duchess and Remains vs Exposure, plus what examiners want.",
    topics: [
      "Step-by-step method",
      "Alternating & block structures",
      "50+ comparative connectives",
      "Ozymandias vs My Last Duchess",
      "Remains vs Exposure",
      "Examiner expectations",
      "Common mistakes",
    ],
    icon: (
      <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    colour: "border-primary",
    bg: "bg-primary/5",
  },
  {
    title: "Text Comparison (Prose & Drama)",
    href: "/resources/comparison/text-comparison",
    description:
      "Learn when and why you compare prose and drama texts. Cross-text comparison technique explained with examples including Macbeth vs Lady Macbeth's guilt and Inspector Goole vs Arthur Birling.",
    topics: [
      "When & why to compare",
      "Cross-text technique",
      "Macbeth vs Lady Macbeth",
      "Goole vs Birling",
      "Thematic linking",
      "Structural comparison",
    ],
    icon: (
      <svg className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    colour: "border-accent",
    bg: "bg-accent/5",
  },
  {
    title: "Language Paper 2 Comparison",
    href: "/resources/comparison/language-comparison",
    description:
      "How to compare writers' methods across two non-fiction texts. Clear structure for comparison responses, a fully annotated example response, and key phrases for sophisticated comparative writing.",
    topics: [
      "Comparing writers' methods",
      "Response structure",
      "Annotated example",
      "Key comparison phrases",
      "Non-fiction techniques",
      "Synthesis skills",
    ],
    icon: (
      <svg className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    colour: "border-secondary",
    bg: "bg-secondary/5",
  },
];

const QUICK_TIPS = [
  {
    tip: "Always compare, never describe separately",
    example: "Examiners reward integrated comparison -- weave both texts together in every paragraph.",
  },
  {
    tip: "Use comparative connectives throughout",
    example: '"Similarly", "In contrast", "Whereas", "Both poets" -- these signal you are comparing, not listing.',
  },
  {
    tip: "Compare methods, not just themes",
    example: "Don't just say both texts are about power -- explain HOW each writer presents power differently.",
  },
  {
    tip: "Start with the most obvious similarity or difference",
    example: "Open with a clear, confident comparison to set the tone for your response.",
  },
  {
    tip: "End by evaluating which text is more effective",
    example: "A strong conclusion weighs up the two texts and gives a personal judgement.",
  },
  {
    tip: "Use the 'zoom in, zoom out' technique",
    example: "Zoom in on specific words/devices, then zoom out to compare the overall effect on the reader.",
  },
];

/* ─── Arrow icon ─────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ComparisonHubPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Comparison Skills
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How to Compare Texts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Board-agnostic comparison guides that work for AQA, Edexcel, OCR, and
            Cambridge IGCSE. Whether you are comparing poems, prose texts, or
            non-fiction sources, these guides will sharpen your comparative skills.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">Comparison Skills</li>
        </ol>
      </nav>

      {/* Comparison area cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Choose a Comparison Guide</h2>
        <p className="mt-2 text-muted-foreground">
          Each guide is a complete masterclass with methods, model responses, and examiner insights.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISON_AREAS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className={`group flex flex-col rounded-xl border-2 ${area.colour} ${area.bg} p-6 shadow-md transition hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                {area.icon}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {area.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground shadow-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-foreground transition-colors">
                Start learning <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick tips */}
      <section className="bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Quick Tips for Every Comparison</h2>
          <p className="mt-2 text-muted-foreground">
            Six principles that will improve your comparative writing in any exam, on any board.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_TIPS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-muted p-5"
              >
                <p className="text-sm font-bold text-foreground">{item.tip}</p>
                <p className="mt-2 text-sm italic text-muted-foreground">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why comparison matters */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Why Comparison Skills Matter</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-foreground">High-Mark Questions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Comparison questions often carry the highest marks on the paper.
              Mastering this skill can make a significant difference to your overall grade.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-foreground">Transferable Skill</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Comparison is a skill that transfers across all your English papers --
              poetry, prose, drama, and non-fiction. Learn it once, use it everywhere.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <svg className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-foreground">Full Model Responses</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every guide includes complete annotated model comparisons so you can
              see exactly how top-grade comparative writing looks.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
