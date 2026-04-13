"use client";

import Link from "next/link";

/* ─── Role guard ──────────────────────────────────────────────
   Stub: uses mock role. Replace with real auth context check
   to redirect non-teachers to /resources.
   ───────────────────────────────────────────────────────────── */
const MOCK_USER_ROLE: "student" | "teacher" | "parent" = "teacher";

/* ─── Data ───────────────────────────────────────────────────── */

const SECTIONS: {
  title: string;
  description: string;
  href: string;
  count: number;
  icon: React.ReactNode;
  external?: boolean;
  comingSoon?: boolean;
}[] = [
  {
    title: "Lesson Plans",
    description:
      "Ready-made lesson plans for GCSE English Language and Literature. Covering every major text, topic, and exam skill with differentiated activities.",
    href: "/resources/teaching/lesson-plans",
    count: 10,
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Assessment Tools",
    description:
      "Quick quiz generators, essay question banks, mark scheme templates, and progress tracker downloads for formative and summative assessment.",
    href: "/resources/teaching/assessment",
    count: 4,
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    title: "Printable Resources",
    description:
      "Downloadable worksheets, revision mats, knowledge organisers, and display materials you can print for classroom use.",
    href: "/resources/teaching/printables",
    count: 6,
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Exam Board Specifications",
    description:
      "Direct links to the official AQA, Edexcel, OCR, and Cambridge IGCSE specifications, sample papers, and examiner reports.",
    href: "#specifications",
    count: 0,
    external: true,
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
  },
];

const SPEC_LINKS = [
  {
    board: "AQA",
    links: [
      { label: "English Language (8700)", url: "https://www.aqa.org.uk/subjects/english/gcse/english-8700" },
      { label: "English Literature (8702)", url: "https://www.aqa.org.uk/subjects/english/gcse/english-8702" },
    ],
    color: "border-primary",
  },
  {
    board: "Edexcel",
    links: [
      { label: "English Language (1EN0)", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html" },
      { label: "English Literature (1ET0)", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html" },
    ],
    color: "border-primary",
  },
  {
    board: "OCR",
    links: [
      { label: "English Language (J351)", url: "https://www.ocr.org.uk/qualifications/gcse/english-language-j351/" },
      { label: "English Literature (J352)", url: "https://www.ocr.org.uk/qualifications/gcse/english-literature-j352/" },
    ],
    color: "border-primary",
  },
  {
    board: "Cambridge IGCSE",
    links: [
      { label: "First Language English (0500)", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-english-first-language-0500/" },
      { label: "Literature in English (0475)", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-literature-in-english-0475/" },
    ],
    color: "border-primary",
  },
];

const QUICK_STATS = [
  { label: "Lesson Plans", value: "10+", color: "bg-primary" },
  { label: "Assessment Tools", value: "4", color: "bg-primary" },
  { label: "Exam Boards", value: "4", color: "bg-primary" },
  { label: "Topics Covered", value: "10+", color: "bg-primary" },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function TeachingResourcesHub() {
  /* ── Access guard ──────────────────────────────────────────── */
  if (MOCK_USER_ROLE !== "teacher") {
    return (
      <>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="max-w-md rounded-xl border border-border bg-card p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <h2 className="mt-4 text-lg font-bold text-red-700 dark:text-red-300">Teacher Access Only</h2>
            <p className="mt-2 text-sm text-red-600">
              Teaching resources are only available to verified teacher accounts.
              Please log in with a teacher account or contact support if you believe this is an error.
            </p>
            <Link
              href="/resources"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-14 sm:py-18">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-card/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Teacher Resources
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Teaching Resources Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ready-made lesson plans, assessment tools, and printable resources
            designed for GCSE and IGCSE English teachers.
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="mx-auto -mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-card p-5 text-center shadow-md"
            >
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main sections */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Browse Resources</h2>
        <p className="mt-2 text-muted-foreground">
          Everything you need to plan, teach, and assess GCSE English.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((section) => {
            const CardWrapper = section.comingSoon
              ? "div"
              : section.external
                ? "div"
                : Link;
            const cardProps = section.comingSoon
              ? {}
              : section.external
                ? {}
                : { href: section.href };

            return (
              <div
                key={section.title}
                className={`group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition ${
                  section.comingSoon
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:shadow-md hover:border-primary/40"
                }`}
              >
                {section.comingSoon && (
                  <span className="absolute right-4 top-4 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Coming Soon
                  </span>
                )}
                {section.icon}
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                  {section.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                {!section.comingSoon && !section.external && (
                  <Link
                    href={section.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-foreground transition-colors"
                  >
                    Explore
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Exam Board Specifications */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Exam Board Specifications</h2>
          <p className="mt-2 text-muted-foreground">
            Quick access to official specifications, sample papers, and examiner reports.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SPEC_LINKS.map((board) => (
              <div
                key={board.board}
                className={`rounded-xl border-l-4 ${board.color} bg-card p-5 shadow-md`}
              >
                <h3 className="font-bold text-foreground">{board.board}</h3>
                <ul className="mt-3 space-y-2">
                  {board.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-foreground hover:underline transition-colors"
                      >
                        {link.label}
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
