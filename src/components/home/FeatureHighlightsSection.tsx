'use client'

import {
  GraduationCap,
  Award,
  Smartphone,
  Shield,
  Star,
  BookOpen,
  Clock,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Expert-Written Content',
    desc: 'Written by English teachers and markers who know exactly what gets top marks.',
  },
  {
    icon: Award,
    title: 'Certificate on Completion',
    desc: 'Earn a verifiable digital certificate for every course you complete. Share it with pride.',
  },
  {
    icon: Star,
    title: 'Rated 4.9/5 by Students',
    desc: 'Students love the clear explanations, structured approach, and exam-focused content.',
  },
  {
    icon: BookOpen,
    title: '470+ Full Courses',
    desc: 'From KS3 Reading to GCSE and IGCSE Literature — comprehensive courses for every stage of your English journey.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Feedback',
    desc: 'Submit essays and get instant, expert-level feedback with grade estimates, strengths, and improvements.',
  },
  {
    icon: Clock,
    title: 'Study at Your Own Pace',
    desc: 'All content is available 24/7. Study at your own pace, on your own schedule, with no deadlines.',
  },
  {
    icon: Smartphone,
    title: 'Works on Any Device',
    desc: 'Desktop, tablet, or mobile — your courses sync seamlessly so you can study anywhere.',
  },
  {
    icon: Shield,
    title: 'Cancel Anytime',
    desc: 'No lock-in contracts. Your first month is free, and you can cancel anytime — no questions asked.',
  },
]

export default function FeatureHighlightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            Why Students Love Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            Everything you need to go from uncertain to unstoppable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center sm:text-left">
              <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
