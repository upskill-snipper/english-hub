import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  Target,
  TrendingUp,
  Star,
  Info,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Grade Boundaries — IGCSE Language A',
  description:
    'Historical grade boundaries for IGCSE Language A First Language English and how to hit an A* grade. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/0500/grade-boundaries',
  },
}

// NOTE: boundaries are indicative historic ranges. They move each session.
const boundaries = [
  { series: 'June 2023', aStar: 123, a: 109, b: 94, c: 79, d: 64, e: 49, f: 35, g: 22 },
  { series: 'Nov 2022', aStar: 120, a: 106, b: 92, c: 77, d: 62, e: 48, f: 34, g: 21 },
  { series: 'June 2022', aStar: 125, a: 111, b: 96, c: 81, d: 66, e: 51, f: 37, g: 23 },
  { series: 'Nov 2021', aStar: 121, a: 107, b: 93, c: 78, d: 63, e: 49, f: 35, g: 22 },
  { series: 'June 2019', aStar: 128, a: 113, b: 98, c: 82, d: 67, e: 52, f: 38, g: 24 },
]

const aStarProfile = [
  {
    paper: 'Paper 1 Reading',
    target: '65+ / 80',
    detail:
      'Q1 short answers all correct; a sharp directed response showing wide reading; eight well-chosen words analysed for Q2; 15+ own-words summary points for Q3.',
  },
  {
    paper: 'Paper 2 Writing',
    target: '65+ / 80',
    detail:
      'Section A in fully adapted register for the right form; Section B with distinctive voice, varied sentences, near-perfect accuracy and a satisfying shape.',
  },
]

const tips = [
  'Treat every practice paper as if it were the real thing — full timing, no notes.',
  'Target your weakest question type once a week, not your strongest.',
  'Build a personal bank of sophisticated vocabulary and test yourself weekly.',
  'Read 15 minutes of non-fiction daily — broadsheet opinion pieces are perfect for Q2-style analysis.',
  'Get a second pair of eyes on your descriptive/narrative compositions — self-marking rarely catches style issues.',
  'Memorise the examiner\'s assessment language so your writing sounds like it meets the criteria before the marker has to look.',
]

export default async function GradeBoundariesPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          IGCSE Language A hub
        </Button>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section>
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          IGCSE Language A
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground">
          Grade boundaries
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          IGCSE Language A is marked out of 160 (Paper 1 + Paper 2 each out of
          80). Grade thresholds are set fresh each session, but the five-year
          trend gives you a reliable target range.
        </p>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────── */}
      <section className="rounded-xl border border-border/60 bg-muted/30 p-5">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h3 className="text-body-md font-semibold text-foreground">
              Indicative boundaries only
            </h3>
            <p className="mt-1 text-body-sm text-muted-foreground">
              The figures below are drawn from Cambridge&apos;s historic
              published thresholds. Boundaries drift year to year and the
              only authoritative source is the Cambridge grade threshold
              tables published after each exam session. Use these as
              training targets, not guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* ── Table ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Historic thresholds out of 160
          </h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-body-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left">
                    <th className="py-2 pr-4 font-semibold text-foreground">
                      Series
                    </th>
                    <th className="py-2 pr-4 font-semibold text-foreground">A*</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">A</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">B</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">C</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">D</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">E</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">F</th>
                    <th className="py-2 pr-4 font-semibold text-foreground">G</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {boundaries.map((row) => (
                    <tr
                      key={row.series}
                      className="border-b border-border/40 last:border-0"
                    >
                      <td className="py-2 pr-4 font-medium text-foreground">
                        {row.series}
                      </td>
                      <td className="py-2 pr-4">{row.aStar}</td>
                      <td className="py-2 pr-4">{row.a}</td>
                      <td className="py-2 pr-4">{row.b}</td>
                      <td className="py-2 pr-4">{row.c}</td>
                      <td className="py-2 pr-4">{row.d}</td>
                      <td className="py-2 pr-4">{row.e}</td>
                      <td className="py-2 pr-4">{row.f}</td>
                      <td className="py-2 pr-4">{row.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Rough rule of thumb: A* ≈ 76–80%, A ≈ 68–70%, C ≈ 49–51%. Treat
          125/160 as your A* training target and you will have a buffer.
        </p>
      </section>

      {/* ── A* profile ────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Star className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            What an A* candidate looks like
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {aStarProfile.map((p) => (
            <Card key={p.paper}>
              <CardHeader className="pb-2">
                <CardTitle className="text-heading-sm font-heading">
                  {p.paper}
                </CardTitle>
                <CardDescription>{p.target}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {p.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── How to hit A* ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <TrendingUp className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Six habits that push you from A to A*
          </h2>
        </div>
        <ul className="space-y-3 text-body-sm text-muted-foreground">
          {tips.map((t, i) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Footer note ─────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500
      </p>
    </div>
  )
}
