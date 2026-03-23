"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function ChevronRight() {
  return (
    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const PAGE_LABELS: Record<string, string> = {
  "revision-planner": "Revision Planner",
  flashcards: "Quote Flashcards",
  tester: "Quote Tester",
  checklists: "Revision Checklists",
};

function buildBreadcrumbs(pathname: string) {
  const crumbs: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/resources/study-tools", label: "Study Tools" },
  ];

  const segments = pathname.split("/").filter(Boolean);
  const toolIdx = segments.indexOf("study-tools");
  const pageSlug = segments[toolIdx + 1];
  if (pageSlug && PAGE_LABELS[pageSlug]) {
    crumbs.push({
      href: `/resources/study-tools/${pageSlug}`,
      label: PAGE_LABELS[pageSlug],
    });
  }

  return crumbs;
}

export default function StudyToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);

  return (
    <>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight />}
                {isLast ? (
                  <span className="font-medium text-primary">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Page content */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>

    </>
  );
}
