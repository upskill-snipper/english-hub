"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Constants ──────────────────────────────────────────────── */

const SUBJECTS = [
  { href: "/resources/english-language", label: "English Language" },
  { href: "/resources/english-literature", label: "English Literature" },
] as const;

const EXAM_BOARDS = [
  { slug: "aqa", label: "AQA" },
  { slug: "edexcel", label: "Edexcel" },
  { slug: "caie", label: "Cambridge" },
  { slug: "ocr", label: "OCR" },
] as const;

const SECTION_GROUPS = [
  {
    label: "Study & Revision",
    sections: [
      { href: "/resources/revision-notes", label: "Revision Notes" },
      { href: "/resources/practice", label: "Practice Questions" },
      { href: "/resources/model-answers", label: "Model Answers" },
      { href: "/resources/vocabulary", label: "Vocabulary" },
      { href: "/resources/glossary", label: "Glossary" },
    ],
  },
  {
    label: "Skills & Techniques",
    sections: [
      { href: "/resources/writing-skills", label: "Writing Skills" },
      { href: "/resources/techniques", label: "Techniques" },
      { href: "/resources/comparison", label: "Comparison Skills" },
      { href: "/resources/spoken-language", label: "Spoken Language" },
    ],
  },
  {
    label: "Texts & Analysis",
    sections: [
      { href: "/resources/poetry", label: "Poetry" },
      { href: "/resources/context", label: "Context" },
      { href: "/resources/themes", label: "Themes" },
    ],
  },
  {
    label: "Exams & Progress",
    sections: [
      { href: "/resources/exam-guide", label: "Exam Guides" },
      { href: "/resources/exam-technique", label: "Exam Technique" },
      { href: "/resources/grade-targets", label: "Grade Targets" },
      { href: "/resources/study-tools", label: "Study Tools" },
    ],
  },
  {
    label: "For Teachers",
    sections: [
      { href: "/resources/teaching", label: "Teaching Resources" },
    ],
  },
] as const;

/** Flat list of all section links for quick matching */
const ALL_SECTIONS: { href: string; label: string }[] = SECTION_GROUPS.flatMap((g) => [...g.sections]);

const TEACHER_TABS = [
  { href: "/resources?view=teaching", label: "Teaching Resources" },
  { href: "/resources?view=lesson-plans", label: "Lesson Plans" },
  { href: "/resources?view=assessment", label: "Assessment Tools" },
] as const;

const PARENT_TABS = [
  { href: "/resources?view=progress", label: "Progress Overview" },
] as const;

/* ─── Icons ──────────────────────────────────────────────────── */

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ─── Breadcrumb builder ─────────────────────────────────────── */

function buildBreadcrumbs(pathname: string) {
  const crumbs: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
  ];

  if (pathname.includes("/english-language")) {
    crumbs.push({ href: "/resources/english-language", label: "English Language" });
  } else if (pathname.includes("/english-literature")) {
    crumbs.push({ href: "/resources/english-literature", label: "English Literature" });
  }

  // Detect section in path
  for (const section of ALL_SECTIONS) {
    const slug = section.href.replace("/resources/", "");
    if (pathname.includes(`/${slug}`)) {
      crumbs.push({ href: section.href, label: section.label });
      break;
    }
  }

  // Detect board in path
  for (const board of EXAM_BOARDS) {
    if (pathname.includes(`/${board.slug}`)) {
      const subject = pathname.includes("/english-language")
        ? "/resources/english-language"
        : "/resources/english-literature";
      crumbs.push({ href: `${subject}/${board.slug}`, label: board.label });
      break;
    }
  }

  return crumbs;
}

/* ─── Detect active board from path ──────────────────────────── */

function getActiveBoardSlug(pathname: string): string | null {
  for (const board of EXAM_BOARDS) {
    if (pathname.includes(`/${board.slug}`)) return board.slug;
  }
  return null;
}

/* ─── Layout ─────────────────────────────────────────────────── */

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  // Close mobile nav on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileNavOpen(false);
      }
    }
    if (mobileNavOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [mobileNavOpen]);

  const breadcrumbs = buildBreadcrumbs(pathname);
  const activeBoard = getActiveBoardSlug(pathname);

  // Determine current subject path prefix for board links
  const isLanguage = pathname.includes("/english-language");
  const isLiterature = pathname.includes("/english-literature");
  const subjectBase = isLanguage
    ? "/resources/english-language"
    : isLiterature
      ? "/resources/english-literature"
      : null;

  // Placeholder: role detection would come from auth context
  const userRole = "student" as "student" | "teacher" | "parent";

  const isSubjectActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const isBoardActive = (slug: string) => activeBoard === slug;

  const isSectionActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Resource navigation bar ─────────────────────────────── */}
      <div ref={navRef} className="sticky top-14 z-30 border-b border-gray-200 bg-white shadow-sm">
        {/* Desktop navigation */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex md:items-center md:gap-6 md:py-3">
            {/* Subject tabs */}
            <div className="flex items-center gap-1" role="tablist" aria-label="Subject">
              {SUBJECTS.map((subject) => (
                <Link
                  key={subject.href}
                  href={subject.href}
                  role="tab"
                  aria-selected={isSubjectActive(subject.href)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] ${
                    isSubjectActive(subject.href)
                      ? "bg-[#1A5276] text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {subject.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200" aria-hidden="true" />

            {/* Exam board pills */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Exam board">
              {EXAM_BOARDS.map((board) => {
                const boardHref = subjectBase
                  ? `${subjectBase}/${board.slug}`
                  : `/resources/english-language/${board.slug}`;
                return (
                  <Link
                    key={board.slug}
                    href={boardHref}
                    role="tab"
                    aria-selected={isBoardActive(board.slug)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1] ${
                      isBoardActive(board.slug)
                        ? "bg-[#2E86C1] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#2E86C1]"
                    }`}
                  >
                    {board.label}
                  </Link>
                );
              })}
            </div>

            {/* Role-specific tabs */}
            {userRole === "teacher" && (
              <>
                <div className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <div className="flex items-center gap-1">
                  {TEACHER_TABS.map((tab) => (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
            {userRole === "parent" && (
              <>
                <div className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <div className="flex items-center gap-1">
                  {PARENT_TABS.map((tab) => (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Desktop: Section navigation — horizontally scrollable */}
          <div className="hidden md:block border-t border-gray-100">
            <nav
              className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-300"
              aria-label="Resource sections"
            >
              {SECTION_GROUPS.map((group) => (
                <div key={group.label} className="flex items-center gap-1 shrink-0">
                  <span className="pl-3 pr-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">
                    {group.label}
                  </span>
                  {group.sections.map((section) => (
                    <Link
                      key={section.href}
                      href={section.href}
                      className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] ${
                        isSectionActive(section.href)
                          ? "bg-[#1A5276]/10 text-[#1A5276] font-semibold"
                          : "text-gray-600 hover:bg-gray-100 hover:text-[#1A5276]"
                      }`}
                    >
                      {section.label}
                    </Link>
                  ))}
                  <div className="mx-1 h-4 w-px bg-gray-200 shrink-0" aria-hidden="true" />
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile: hamburger toggle */}
          <div className="flex items-center justify-between py-2.5 md:hidden">
            <span className="text-sm font-semibold text-[#1A5276]">Resources</span>
            <button
              onClick={() => setMobileNavOpen((o) => !o)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
              aria-expanded={mobileNavOpen}
              aria-label={mobileNavOpen ? "Close resource navigation" : "Open resource navigation"}
            >
              {mobileNavOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileNavOpen && (
            <div className="border-t border-gray-200 pb-4 pt-2 md:hidden max-h-[80vh] overflow-y-auto">
              {/* Subjects */}
              <p className="px-1 pb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Subject
              </p>
              <div className="flex flex-col gap-1">
                {SUBJECTS.map((subject) => (
                  <Link
                    key={subject.href}
                    href={subject.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isSubjectActive(subject.href)
                        ? "bg-[#1A5276]/10 text-[#1A5276]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {subject.label}
                  </Link>
                ))}
              </div>

              {/* Exam boards */}
              <p className="mt-3 px-1 pb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Exam Board
              </p>
              <div className="flex flex-wrap gap-2 px-1">
                {EXAM_BOARDS.map((board) => {
                  const boardHref = subjectBase
                    ? `${subjectBase}/${board.slug}`
                    : `/resources/english-language/${board.slug}`;
                  return (
                    <Link
                      key={board.slug}
                      href={boardHref}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isBoardActive(board.slug)
                          ? "bg-[#2E86C1] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#2E86C1]"
                      }`}
                    >
                      {board.label}
                    </Link>
                  );
                })}
              </div>

              {/* Section groups — collapsible on mobile */}
              {SECTION_GROUPS.map((group) => (
                <div key={group.label} className="mt-3">
                  <button
                    onClick={() =>
                      setOpenGroup((prev) =>
                        prev === group.label ? null : group.label
                      )
                    }
                    className="flex w-full items-center justify-between px-1 pb-1.5"
                    aria-expanded={openGroup === group.label}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {group.label}
                    </span>
                    <ChevronDown open={openGroup === group.label} />
                  </button>
                  {(openGroup === group.label ||
                    group.sections.some((s) => isSectionActive(s.href))) && (
                    <div className="flex flex-col gap-0.5">
                      {group.sections.map((section) => (
                        <Link
                          key={section.href}
                          href={section.href}
                          className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                            isSectionActive(section.href)
                              ? "bg-[#1A5276]/10 text-[#1A5276] font-semibold"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {section.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Teacher tabs */}
              {userRole === "teacher" && (
                <>
                  <p className="mt-3 px-1 pb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Teaching
                  </p>
                  <div className="flex flex-col gap-1">
                    {TEACHER_TABS.map((tab) => (
                      <Link
                        key={tab.href}
                        href={tab.href}
                        className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {tab.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {/* Parent tabs */}
              {userRole === "parent" && (
                <>
                  <p className="mt-3 px-1 pb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Parent
                  </p>
                  <div className="flex flex-col gap-1">
                    {PARENT_TABS.map((tab) => (
                      <Link
                        key={tab.href}
                        href={tab.href}
                        className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {tab.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Breadcrumb ──────────────────────────────────────────── */}
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight />}
                {isLast ? (
                  <span className="font-medium text-[#1A5276]">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#1A5276] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── Page content ────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
