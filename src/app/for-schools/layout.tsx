import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "English Hub for Schools | £1,500/year Site License",
  description: "Give every student and teacher at your school access to 470+ English courses, AI feedback, and analytics for just £1,500/year. Register FREE now with code FOUNDER until August 2026.",
  alternates: { canonical: "https://theenglishhub.app/for-schools" },
  openGraph: {
    title: "English Hub for Schools | £1,500/year Site License",
    description: "School site license: unlimited students and teachers, all courses, analytics dashboard, bulk user management. Register FREE with FOUNDER until August 2026.",
    images: [{ url: "https://theenglishhub.app/og/schools.png", width: 1200, height: 630 }]
  },
  keywords: ["school English platform", "GCSE English online", "school subscription", "English department", "IGCSE resources"]
}

export default function ForSchoolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
