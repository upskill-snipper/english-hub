'use client'

import Link from 'next/link'
import { ArrowLeft, Brain } from 'lucide-react'
import LearningProfileView from '@/components/learning/LearningProfileView'

export default function LearningProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link
        href="/dashboard"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to dashboard
      </Link>

      <div className="mb-2 flex items-center gap-2">
        <Brain className="size-5 text-primary" />
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Learning profile
        </p>
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Your strengths &amp; what to focus on next
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Built from the time you spend and the accuracy you reach in every game. We weight your most
        recent rounds most heavily, track whether each skill is improving or slipping, and recommend
        the next best practice — so revision goes where it counts.
      </p>

      <div className="mt-8">
        <LearningProfileView variant="full" />
      </div>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        This profile is built on your device from every game you play and syncs to your account when
        you’re signed in. Strengths are skills you score 80%+ on consistently; focus areas are below
        60% or slipping.
      </p>
    </div>
  )
}
