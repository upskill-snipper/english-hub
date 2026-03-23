"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Teacher navigation tabs ────────────────────────────────── */

const TEACHER_NAV = [
  { href: "/resources/teaching", label: "Overview", exact: true },
  { href: "/resources/teaching/lesson-plans", label: "Lesson Plans" },
  { href: "/resources/teaching/assessment", label: "Assessment Tools" },
  { href: "/resources/teaching/printables", label: "Printable Resources" },
] as const;

/* ─── Icons ──────────────────────────────────────────────────── */

function ChevronRight() {
  return (
    <svg
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Breadcrumb builder ─────────────────────────────────────── */

function buildTeachingBreadcrumbs(pathname: string) {
  const crumbs: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/resources/teaching", label: "Teaching" },
  ];

  if (pathname.includes("/lesson-plans")) {
    crumbs.push({ href: "/resources/teaching/lesson-plans", label: "Lesson Plans" });
  } else if (pathname.includes("/assessment")) {
    crumbs.push({ href: "/resources/teaching/assessment", label: "Assessment Tools" });
  } else if (pathname.includes("/printables")) {
    crumbs.push({ href: "/resources/teaching/printables", label: "Printable Resources" });
  }

  return crumbs;
}

/* ─── Layout ─────────────────────────────────────────────────── */

export default function TeachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const breadcrumbs = buildTeachingBreadcrumbs(pathname);

  const isActive = (tab: (typeof TEACHER_NAV)[number]) =>
    ("exact" in tab && tab.exact) ? pathname === tab.href : pathname.startsWith(tab.href);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Teacher sub-navigation ───────────────────────────────── */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop tabs */}
          <nav
            className="hidden md:flex md:items-center md:gap-1 md:py-3"
            aria-label="Teaching sections"
          >
            {TEACHER_NAV.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] ${
                  isActive(tab)
                    ? "bg-[#1A5276] text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="mx-2 h-6 w-px bg-gray-200" aria-hidden="true" />

            {/* External spec links */}
            <a
              href="https://www.aqa.org.uk/subjects/english"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              AQA Specs
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              Edexcel Specs
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </nav>

          {/* Mobile: horizontal scroll tabs */}
          <nav
            className="flex gap-1 overflow-x-auto py-2.5 md:hidden scrollbar-hide"
            aria-label="Teaching sections"
          >
            {TEACHER_NAV.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(tab)
                    ? "bg-[#1A5276] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Breadcrumbs ──────────────────────────────────────────── */}
      <nav
        className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight />}
                {isLast ? (
                  <span className="font-medium text-[#1A5276]">
                    {crumb.label}
                  </span>
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

      {/* ── Page content ─────────────────────────────────────────── */}
      <main>{children}</main>
    </div>
  );
}
