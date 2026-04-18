'use client'

import Link from 'next/link'

const roles = [
  {
    badge: 'Student',
    heading: 'Ace every paper.',
    features: [
      '470+ structured lessons mapped to your board',
      'AI essay feedback with grade + targets',
      '130+ mock exams with real boundaries',
      '7 revision games to learn through play',
      'Grade ladder tracking from 1 to 9',
      '2,000+ flashcards & terminology drills',
    ],
    cta: { label: 'Start free', href: '/auth/register' },
    badgeColor: 'bg-teal-700 text-cream-50',
  },
  {
    badge: 'Teacher',
    heading: 'Plan less. Teach more.',
    features: [
      'AI lesson builder — board-aligned in seconds',
      'Student analytics dashboard',
      '300+ ready-to-use resources & worksheets',
      'Set & track assignments per class',
      'Export reports for parents\u2019 evenings',
      'Priority support from a real human',
    ],
    cta: { label: 'Teacher plans', href: '/for-teachers' },
    badgeColor: 'bg-clay-500 text-cream-50',
  },
  {
    badge: 'School',
    heading: 'Whole-department access.',
    features: [
      'Unlimited students & teachers',
      'Department analytics & progress reports',
      'Bulk onboarding via CSV or SSO',
      'Teacher admin portal',
      'CPD resources included',
      'Founding programme — locked rates for 2-3 yrs',
    ],
    cta: { label: 'Book a call', href: '/for-schools' },
    badgeColor: 'bg-ochre-500 text-ink-900',
  },
]

export default function RolesSection() {
  return (
    <section className="py-20 sm:py-28 bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
            Built for three <em className="italic text-clay-300">audiences</em>.
          </h2>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.badge}
              className="group rounded-2xl border-2 border-dashed border-cream-200/15 p-7 sm:p-8 transition-all duration-300 hover:border-solid hover:border-clay-400/60 flex flex-col"
            >
              {/* Badge */}
              <span className={`inline-block self-start rounded-full px-3.5 py-1 text-xs font-bold tracking-wide uppercase mb-5 ${role.badgeColor}`}>
                {role.badge}
              </span>

              {/* Heading */}
              <h3 className="font-serif text-2xl font-bold tracking-tight text-cream-50 mb-5">
                {role.heading}
              </h3>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {role.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cream-200/60">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-clay-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={role.cta.href}
                className="inline-flex items-center justify-center rounded-full border border-cream-200/20 px-6 py-2.5 text-sm font-semibold text-cream-100 transition-colors hover:bg-cream-50/10"
              >
                {role.cta.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
