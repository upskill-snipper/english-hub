"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

function ArrowLeftIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}

/* ─── Breadcrumb builder ─────────────────────────────────────── */

const SUB_LABELS: Record<string, string> = {
  "language-devices": "Language Devices",
  "structural-devices": "Structural Devices",
};

function buildBreadcrumbs(pathname: string) {
  const crumbs: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/resources/techniques", label: "Techniques" },
  ];

  const segments = pathname.split("/").filter(Boolean);
  const techIdx = segments.indexOf("techniques");
  const subSlug = techIdx >= 0 ? segments[techIdx + 1] : undefined;

  if (subSlug && SUB_LABELS[subSlug]) {
    crumbs.push({
      href: `/resources/techniques/${subSlug}`,
      label: SUB_LABELS[subSlug],
    });
  }

  return crumbs;
}

/* ─── Back link logic ────────────────────────────────────────── */

function getBackLink(pathname: string) {
  if (
    pathname.includes("/language-devices") ||
    pathname.includes("/structural-devices")
  ) {
    return { href: "/resources/techniques", label: "Back to Techniques" };
  }
  return { href: "/resources", label: "Back to Resources" };
}

/* ─── Layout ─────────────────────────────────────────────────── */

export default function TechniquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);
  const backLink = getBackLink(pathname);

  return (
    <>
      {/* Breadcrumb + back navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Back link */}
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
            >
              <ArrowLeftIcon />
              {backLink.label}
            </Link>

            {/* Breadcrumb trail */}
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
                {breadcrumbs.map((crumb, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.href} className="flex items-center gap-1.5">
                      {i > 0 && <ChevronRight />}
                      {isLast ? (
                        <span className="font-medium text-primary">
                          {crumb.label}
                        </span>
                      ) : (
                        <Link
                          href={crumb.href}
                          className="transition-colors hover:text-primary"
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Page content */}
      {children}
    </>
  );
}
