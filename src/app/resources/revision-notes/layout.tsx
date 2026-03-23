"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const TEXT_LABELS: Record<string, string> = {
  macbeth: "Macbeth",
  "romeo-and-juliet": "Romeo and Juliet",
  "the-tempest": "The Tempest",
  "much-ado-about-nothing": "Much Ado About Nothing",
  "much-ado": "Much Ado About Nothing",
  othello: "Othello",
  "christmas-carol": "A Christmas Carol",
  "jekyll-and-hyde": "Jekyll and Hyde",
  frankenstein: "Frankenstein",
  "great-expectations": "Great Expectations",
  "pride-and-prejudice": "Pride and Prejudice",
  "inspector-calls": "An Inspector Calls",
  "lord-of-the-flies": "Lord of the Flies",
  "animal-farm": "Animal Farm",
  "blood-brothers": "Blood Brothers",
  "never-let-me-go": "Never Let Me Go",
  "power-and-conflict": "Power and Conflict Poetry",
  "love-and-relationships": "Love and Relationships Poetry",
  "view-from-the-bridge": "A View from the Bridge",
  "the-crucible": "The Crucible",
  "silas-marner": "Silas Marner",
  "merchant-of-venice": "The Merchant of Venice",
  "sign-of-four": "The Sign of the Four",
  "jane-eyre": "Jane Eyre",
  "woman-in-black": "The Woman in Black",
};

function buildBreadcrumbs(pathname: string) {
  const crumbs: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/resources/revision-notes", label: "Revision Notes" },
  ];

  const segments = pathname.split("/").filter(Boolean);
  const notesIdx = segments.indexOf("revision-notes");
  const textSlug = notesIdx >= 0 ? segments[notesIdx + 1] : undefined;
  if (textSlug && TEXT_LABELS[textSlug]) {
    crumbs.push({
      href: `/resources/revision-notes/${textSlug}`,
      label: TEXT_LABELS[textSlug],
    });
  }

  return crumbs;
}

export default function RevisionNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);
  const isHub = pathname === "/resources/revision-notes";

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb + back link */}
      <nav
        className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
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
                    className="transition-colors hover:text-[#1A5276]"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>

        {/* Back to resources link (shown on sub-pages, not hub) */}
        {!isHub && (
          <Link
            href="/resources/revision-notes"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#2E86C1] transition-colors hover:text-[#1A5276]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to all revision notes
          </Link>
        )}
      </nav>

      {/* Page content */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>

    </div>
  );
}
