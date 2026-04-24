import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { InfographicBanner } from '@/components/marketing/InfographicBanner'
import {
  BookOpen,
  Target,
  TrendingUp,
  Globe2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Rocket,
} from 'lucide-react'

export const metadata = {
  title: 'For Students — The English Hub',
  description:
    'Learn English, build your future. Personalised lessons, AI-marked essays, and real progress tracking for GCSE, IGCSE and A-Level English students.',
}

// ─── /for-students ──────────────────────────────────────────────────────────
//
// Student-facing marketing page. The infographic banner up top is the
// one-glance product summary. The body repeats the main value props in
// scannable text + points the visitor to registration.
//
// Sits alongside /for-teachers, /for-schools, /for-parents — all share the
// InfographicBanner pattern at the top (commit introducing this page).
// ────────────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: BookOpen,
    title: 'All-in-one learning',
    desc: 'Lessons, practice, mock exams, and revision notes for every skill — reading, writing, listening, speaking.',
  },
  {
    icon: Target,
    title: 'Personalised learning',
    desc: 'Smart recommendations that adapt to where you are and push toward the grade you want.',
  },
  {
    icon: TrendingUp,
    title: 'Track & achieve',
    desc: 'See your progress week-by-week. Set goals. Celebrate every win with predicted-grade tracking.',
  },
  {
    icon: Globe2,
    title: 'Real world, real you',
    desc: 'Build the English confidence you\u2019ll actually use at school, university, work, and everywhere after.',
  },
]

const outcomes = [
  { icon: GraduationCap, label: 'Better grades' },
  { icon: Rocket, label: 'More confidence' },
  { icon: Globe2, label: 'Global opportunities' },
  { icon: Sparkles, label: 'Your future. Your choice.' },
]

export default function ForStudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Infographic banner — one-glance product summary for students */}
      <InfographicBanner
        src="/infographics/for-students.svg"
        alt="Infographic: Learn English, build your future. Shows 78% progress toward goals, skills being built (reading, writing, listening, speaking), all-in-one learning, personalised recommendations, progress tracking, real-world confidence. Student testimonial: 'I'm more confident in English than ever before' \u2014 Aanya, Student."
      />

      {/* Hero + CTAs */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            For students
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            Learn English. Build <span className="text-primary">your future.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            All the skills. Real progress. Unlimited possibilities. Built for GCSE, IGCSE and
            International A-Level English.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="text-base h-12 px-6" render={<Link href="/auth/register" />}>
              Start free &mdash; no card
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12 px-6"
              render={<Link href="/pricing" />}
            >
              See pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <Card key={f.title} className="border-border/40">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{f.title}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* USP banner */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              A complete, personalised learning hub
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
              Built by examiners. Marked by AI. Designed to help you go further, faster.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="border-y border-border/40 bg-muted/20 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {outcomes.map((o) => {
              const Icon = o.icon
              return (
                <div key={o.label} className="flex flex-col items-center gap-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="text-sm font-medium text-foreground">{o.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Ready to level up your English?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Free trial, no card. Cancel any time. Unlimited courses, flashcards, and revision
            notes &mdash; 3 free uses of every AI tool before you decide.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="text-base h-12 px-6" render={<Link href="/auth/register" />}>
              Create free account
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12 px-6"
              render={<Link href="/pricing" />}
            >
              Compare plans
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
