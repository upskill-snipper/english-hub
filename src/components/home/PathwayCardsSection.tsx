'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  BookMarked,
  PenTool,
  RotateCcw,
  BookOpen,
} from 'lucide-react'

export default function PathwayCardsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            Choose Your Path
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            Structured learning pathways designed for every stage of your
            English journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: BookMarked,
              color: 'text-blue-400 bg-blue-500/10',
              title: 'KS3 Reading & Writing',
              subtitle: 'Years 7–9',
              desc: 'Build your foundation with core reading comprehension, analysis, and writing skills.',
            },
            {
              icon: PenTool,
              color: 'text-primary bg-primary/10',
              title: 'GCSE Language',
              subtitle: 'All Boards',
              desc: 'Master reading analysis and writing techniques for your Language papers.',
            },
            {
              icon: BookOpen,
              color: 'text-purple-400 bg-purple-500/10',
              title: 'GCSE Literature',
              subtitle: 'All Boards',
              desc: 'Poetry, prose, and drama — essay technique and textual analysis for top grades.',
            },
            {
              icon: RotateCcw,
              color: 'text-clay-600 bg-amber-500/10',
              title: 'Revision & Exam Prep',
              subtitle: 'Exam-Ready',
              desc: 'Intensive revision courses to boost your grade in weeks, not months.',
            },
          ].map((card) => (
            <Link key={card.title} href="/courses" className="block group">
            <Card
              className="p-6 border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-4', card.color)}
              >
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 mb-2">
                {card.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
