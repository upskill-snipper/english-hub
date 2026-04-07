import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "English Hub for Schools | Founding Schools Programme 2026",
  description: "Join the Founding Schools Programme. Full platform access for all students and teachers. 5-8 hours saved per teacher per week. Ofsted-ready reporting. Only 20 places.",
  alternates: { canonical: "https://theenglishhub.app/for-schools" },
  openGraph: {
    title: "English Hub for Schools | Founding Schools Programme 2026",
    description: "Founding Schools Programme: unlimited students and teachers, all courses, analytics dashboard, priority onboarding. Only 20 places for 2026.",
    images: [{ url: "https://theenglishhub.app/og/schools.png", width: 1200, height: 630 }]
  },
  keywords: ["school English platform", "GCSE English online", "school subscription", "English department", "IGCSE resources"]
}

export default function ForSchoolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
