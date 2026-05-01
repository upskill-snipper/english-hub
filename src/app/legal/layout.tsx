'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const legalPages = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/legal/cancellation', label: 'Cancellation Policy' },
  { href: '/legal/acceptable-use', label: 'Acceptable Use Policy' },
  { href: '/legal/ai-transparency', label: 'AI Transparency' },
  { href: '/legal/safeguarding', label: 'Safeguarding Policy' },
  { href: '/accessibility', label: 'Accessibility Statement' },
  { href: '/legal/complaints', label: 'Complaints Procedure' },
  { href: '/data-processing', label: 'Data Processing' },
  { href: '/legal/privacy-qatar', label: 'Qatar Privacy Notice' },
  { href: '/legal/disclaimer', label: 'Full Disclaimer' },
  { href: '/legal/rights', label: 'Rights & Permissions' },
]

function ExamBoardDisclaimer() {
  return (
    <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
      <p className="font-semibold text-muted-foreground mb-2">Exam Board Disclaimer</p>
      <p>
        The English Hub is an independent educational platform. We are not endorsed by, affiliated
        with, or formally connected to any examination board, including AQA, Edexcel (Pearson), OCR,
        Cambridge Assessment International Education (CAIE), or WJEC/Eduqas. All exam board names,
        logos, and trademarks are the property of their respective owners and are used for
        identification and reference purposes only.
      </p>
    </div>
  )
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:opacity-90">
            The English Hub
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            &larr; Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-8">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Legal &amp; Policies
              </h2>
              <ul className="space-y-1">
                {legalPages.map((page) => {
                  const isActive = pathname === page.href
                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? 'bg-primary text-white font-medium'
                            : 'text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        {page.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Last updated: 22 March 2026</p>
                <button
                  onClick={() => window.print()}
                  className="mt-3 flex items-center gap-2 text-sm text-foreground hover:underline cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  Print this page
                </button>
              </div>
            </nav>
          </aside>

          {/* Mobile nav */}
          <div className="lg:hidden mb-6">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer bg-card rounded-lg px-4 py-3 shadow-md border border-border text-sm font-medium text-muted-foreground">
                Legal &amp; Policies Navigation
                <svg
                  className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="mt-2 bg-card rounded-lg shadow-md border border-border overflow-hidden">
                {legalPages.map((page) => {
                  const isActive = pathname === page.href
                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className={`block px-4 py-2.5 text-sm border-b border-border last:border-b-0 ${
                          isActive
                            ? 'bg-primary/5 text-foreground font-medium'
                            : 'text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        {page.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </details>
          </div>

          {/* Main content */}
          <main className="min-w-0">
            <article className="bg-card rounded-lg shadow-md border border-border p-6 sm:p-8 lg:p-10">
              <div className="prose dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-foreground prose-a:underline">
                {children}
              </div>
              <ExamBoardDisclaimer />
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
