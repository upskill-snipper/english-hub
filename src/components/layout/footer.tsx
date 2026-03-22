import Link from 'next/link'

const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: [
      { href: '/courses', label: 'Courses' },
      { href: '/mock-exams', label: 'Mock Exams' },
      { href: '/games', label: 'Games' },
      { href: '/practice', label: 'Practice' },
      { href: '/revision', label: 'Revision' },
      { href: '/exam-guide', label: 'Exam Guide' },
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
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookie-policy', label: 'Cookie Policy' },
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
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
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
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/60 py-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2026 The English Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
