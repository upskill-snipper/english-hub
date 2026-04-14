'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Award,
  Sparkles,
  Eye,
  ListChecks,
  Zap,
} from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: ListChecks,
    title: 'Choose your exam board',
    desc: 'Select AQA, Edexcel, OCR, or WJEC and we tailor everything to your exam board.',
  },
  {
    step: 2,
    icon: BookOpen,
    title: 'Follow structured courses',
    desc: 'Work through expert-written lessons in a logical sequence — no guessing what to study next.',
  },
  {
    step: 3,
    icon: Eye,
    title: 'Practice with real exam questions',
    desc: 'Tackle exam-style questions with detailed mark schemes and model answers.',
  },
  {
    step: 4,
    icon: Sparkles,
    title: 'Get AI feedback on your essays',
    desc: 'Submit your writing and receive instant, detailed feedback with grade estimates from our AI marker.',
  },
  {
    step: 5,
    icon: Zap,
    title: 'Revise with flashcards & guides',
    desc: 'Lock in your knowledge with 2,000+ flashcards, terminology glossaries, and board-specific exam guides.',
  },
  {
    step: 6,
    icon: Award,
    title: 'Ace your exams',
    desc: 'Walk into your exam with confidence, backed by structured preparation and proven techniques.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            Six simple steps from sign-up to exam success.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((item) => (
            <Card key={item.step} className="flex items-start gap-5 p-6 border-border/40">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-base font-bold text-primary">{item.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button variant="default" size="lg" className="text-base px-10 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}
