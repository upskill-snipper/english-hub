import Link from "next/link";
import { ExamBoardDisclaimerWithContext } from "@/components/ExamBoardDisclaimerWithContext";

/* ─── Link groups ────────────────────────────────────────────── */

const PLATFORM_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
] as const;

const RESOURCE_LINKS = [
  { href: "/resources", label: "All Resources" },
  { href: "/resources/revision-notes", label: "Revision Notes" },
  { href: "/resources/practice", label: "Practice Questions" },
  { href: "/resources/exam-guide", label: "Exam Guides" },
  { href: "/resources/writing-skills", label: "Writing Skills" },
] as const;

const SUPPORT_LINKS = [
  { href: "/help", label: "Help Centre" },
  { href: "/help/contact", label: "Contact Us" },
  { href: "/help/report", label: "Report Issue" },
  { href: "/help/suggestions", label: "Suggestions" },
] as const;

const LEGAL_LINKS = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/cancellation", label: "Cancellation" },
  { href: "/legal/accessibility", label: "Accessibility" },
] as const;

/* ─── Footer Column ──────────────────────────────────────────── */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h2>
      <ul className="mt-3 space-y-2" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-300/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#1A5276] bg-[#1A5276] text-gray-300"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ── Top section: branding + 4 link columns ─────────── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
              aria-label="The English Hub - Home"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white"
                aria-hidden="true"
              >
                EH
              </span>
              The English Hub
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-300/80">
              AI-powered GCSE and IGCSE English revision for students aged
              14&ndash;18.
            </p>
            <p className="mt-4 text-sm text-gray-300/80">
              <a
                href="mailto:support@theenglishhub.app"
                className="font-medium text-white underline underline-offset-2 hover:text-[#2E86C1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
              >
                support@theenglishhub.app
              </a>
            </p>
          </div>

          {/* 4 link columns */}
          <FooterColumn title="Platform" links={PLATFORM_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <FooterColumn title="Support" links={SUPPORT_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* ── Exam board disclaimer ─────────────────────────── */}
        <ExamBoardDisclaimerWithContext variant="footer" className="mt-8" />

        {/* ── Bottom bar: company + copyright ──────────────── */}
        <div className="mt-6 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p>
                Upskill Energy Limited &mdash; Registered in England and Wales
              </p>
              <p>
                Company number: <span className="font-medium">[PENDING]</span>
                {" | "}
                ICO registration: <span className="font-medium">[PENDING]</span>
              </p>
            </div>
            <p>
              &copy; {currentYear} The English Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
