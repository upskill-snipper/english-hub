// School FAQ section — server component. Reuses the existing FAQItem
// client island (open/close toggle) and emits FAQPage JSON-LD for SEO.
// Default question set is the institutional list from the repositioning
// spec; pass `items` to override.

import { FAQItem } from '@/components/for-schools/FAQItem'
import { FAQPageJsonLd } from '@/components/seo/json-ld'

export interface QA {
  q: string
  a: string
}

export const SCHOOL_FAQS: QA[] = [
  {
    q: 'How long is a school pilot?',
    a: 'School pilots usually run for one term — around 8 to 12 weeks — so the department can see value across a full teaching cycle before any wider commitment.',
  },
  {
    q: 'What does a pilot include?',
    a: 'Onboarding and setup, teacher and student access, a baseline review, weekly adoption check-ins, an analytics and intervention review, and an end-of-pilot impact report with a rollout recommendation.',
  },
  {
    q: 'Can we start with one year group?',
    a: 'Yes. Schools can begin with a single year group, a whole English department, or a wider rollout depending on priorities. A single year-group pilot is the most common starting point.',
  },
  {
    q: 'Is this suitable for EAL learners?',
    a: 'The platform includes structured support designed to help EAL learners build vocabulary, reading fluency, comprehension and writing confidence, with teacher visibility over progress.',
  },
  {
    q: 'Does AI replace teacher judgement?',
    a: 'No. AI-assisted feedback is designed to support teacher judgement and reduce repetitive workload — it does not replace professional assessment. Teachers stay in control.',
  },
  {
    q: 'How does AI marking work?',
    a: 'Students submit written work and receive structured, criteria-referenced feedback. Teachers can review, adjust and build on that feedback rather than starting from a blank page.',
  },
  {
    q: 'Can leaders see year-group progress?',
    a: 'Yes. Class and year-group analytics are designed to give leaders clearer visibility of where support is needed across the department.',
  },
  {
    q: 'Is pricing per student or per school?',
    a: 'School pricing is structured around pilots and annual deployment rather than per-student fees. Final pricing depends on school size, scope and rollout requirements.',
  },
  {
    q: 'Can international schools use it?',
    a: 'Yes. The platform is built to support international schools, including those following IGCSE English specifications and schools with significant EAL cohorts.',
  },
  {
    q: 'Can we use it for IGCSE English?',
    a: 'Yes. The platform supports IGCSE English Language and Literature alongside other major specifications.',
  },
  {
    q: 'Is data handled securely?',
    a: 'Data protection is treated as a first-class requirement. The platform is built with a data-minimisation posture and parent-visible controls for younger users.',
  },
  {
    q: 'Can we pilot before committing to a full year?',
    a: 'Yes — that is the recommended path. The structured pilot is designed to prove value before any annual deployment decision.',
  },
]

export function SchoolFAQ({
  items = SCHOOL_FAQS,
  emitJsonLd = true,
}: {
  items?: QA[]
  emitJsonLd?: boolean
}) {
  return (
    <div className="space-y-3">
      {emitJsonLd && <FAQPageJsonLd faqs={items.map(({ q, a }) => ({ question: q, answer: a }))} />}
      {items.map((item) => (
        <FAQItem key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  )
}
