'use client'

import Link from 'next/link'

const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: [
      { href: '/courses', label: 'Courses' },
      { href: '/games', label: 'Games' },
      { href: '/assessment/reading', label: 'Reading Assessment' },
      { href: '/mock-exams', label: 'Mock Exams' },
      { href: '/practice', label: 'Practice' },
      { href: '/resources', label: 'Resources' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Revision',
    links: [
      { href: '/revision', label: 'Revision Hub' },
      { href: '/revision/poetry', label: 'Poetry' },
      { href: '/revision/texts', label: 'Texts' },
      { href: '/revision/flashcards', label: 'Flashcards' },
      { href: '/revision/exam-technique', label: 'Exam Technique' },
      { href: '/revision/language', label: 'Language' },
      { href: '/revision/grade-targets', label: 'Grade Targets' },
      { href: '/revision/quiz', label: 'Quiz' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources', label: 'Resources Hub' },
      { href: '/resources/revision-notes', label: 'Study Guides' },
      { href: '/resources/writing-skills', label: 'Writing Skills' },
      { href: '/resources/techniques', label: 'Techniques' },
      { href: '/resources/model-answers', label: 'Model Answers' },
      { href: '/resources/vocabulary', label: 'Vocabulary' },
      { href: '/resources/study-tools', label: 'Study Tools' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/for-teachers', label: 'For Teachers' },
      { href: '/for-schools', label: 'For Schools' },
      { href: '/for-parents', label: 'For Parents' },
      { href: '/contact', label: 'Contact' },
      { href: '/affiliates', label: 'Affiliate Programme' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookie-policy', label: 'Cookie Policy' },
      { href: '/refund-policy', label: 'Refund Policy' },
      { href: '/accessibility', label: 'Accessibility' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/help', label: 'Help Centre' },
      { href: '/faqs', label: 'FAQs' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {section.title === 'Legal' && (
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent('open-cookie-consent')
                        )
                      }
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      Manage Cookies
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/60 py-6 space-y-2">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2024–2026 The English Hub. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            A trading name of Upskill Energy Limited · Company No. 16254656 · Registered in England and Wales
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Contact:{' '}
            <a href="mailto:info@Upskillenergy.com" className="hover:text-foreground transition-colors">
              info@Upskillenergy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
