import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register Your School | The English Hub",
  description: "Register your school for free with code FOUNDER. Full access for all students and teachers until August 2026, then £1,500/year. Unlimited users, all resources included.",
  alternates: { canonical: "https://theenglishhub.app/for-schools/register" },
  openGraph: {
    title: "Register Your School | The English Hub",
    description: "Free school registration with FOUNDER promo. £1,500/year site license for all students and teachers.",
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-foreground">The English Hub</a>
          <a href="/for-schools" className="text-sm text-muted-foreground hover:text-foreground">
            &larr; Back to school plans
          </a>
        </div>
        {children}
      </div>
    </div>
  )
}
