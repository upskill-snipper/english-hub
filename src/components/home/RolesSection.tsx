'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

export default function RolesSection() {
  const t = useT()

  const roles = [
    {
      badge: t('audience.role.student'),
      heading: t('audience.student.headline'),
      features: [
        t('audience.student.feat.lessons'),
        t('audience.student.feat.ai_feedback'),
        t('audience.student.feat.mocks'),
        t('audience.student.feat.games'),
        t('audience.student.feat.grade_ladder'),
        t('audience.student.feat.flashcards'),
      ],
      cta: { label: t('audience.cta.start_free'), href: '/auth/register' },
      badgeColor: 'bg-teal-700 text-cream-50',
    },
    {
      badge: t('audience.role.teacher'),
      heading: t('audience.teacher.headline'),
      features: [
        t('audience.teacher.feat.lesson_builder'),
        t('audience.teacher.feat.analytics'),
        t('audience.teacher.feat.resources'),
        t('audience.teacher.feat.assignments'),
        t('audience.teacher.feat.reports'),
        t('audience.teacher.feat.priority_support'),
      ],
      cta: { label: t('audience.cta.teacher_plans'), href: '/for-teachers' },
      badgeColor: 'bg-clay-500 text-cream-50',
    },
    {
      badge: t('audience.role.school'),
      heading: t('audience.school.headline'),
      features: [
        t('audience.school.feat.unlimited'),
        t('audience.school.feat.dept_analytics'),
        t('audience.school.feat.bulk_onboard'),
        t('audience.school.feat.admin_portal'),
        t('audience.school.feat.cpd'),
        t('audience.school.feat.founding_locked'),
      ],
      cta: { label: t('audience.cta.book_call'), href: '/for-schools' },
      badgeColor: 'bg-ochre-500 text-ink-900',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
            {t('audience.built_for_three.prefix')}{' '}
            <em className="italic text-clay-300">{t('audience.built_for_three.emphasis')}</em>.
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
              <span
                className={`inline-block self-start rounded-full px-3.5 py-1 text-xs font-bold tracking-wide uppercase mb-5 ${role.badgeColor}`}
              >
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
