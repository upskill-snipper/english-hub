// Founder School Pilot timeline - server component. A 4-phase vertical
// timeline for the ~one-term pilot. Phases and deliverables are taken
// from the institutional pilot spec. All wording is forward-looking
// ("pilot schools will receive") - no claimed results.

import { cn } from '@/lib/utils'

export interface PilotPhase {
  weeks: string
  title: string
  points: string[]
}

const DEFAULT_PHASES: PilotPhase[] = [
  {
    weeks: 'Week 1',
    title: 'Setup, onboarding and baseline',
    points: [
      'Onboarding session with the English team',
      'Teacher and student accounts created',
      'Baseline usage and scope agreed',
    ],
  },
  {
    weeks: 'Weeks 2-4',
    title: 'Student and teacher usage begins',
    points: [
      'Students start structured practice',
      'Teachers set homework and use AI-assisted feedback',
      'Early adoption check-ins',
    ],
  },
  {
    weeks: 'Weeks 5-8',
    title: 'Intervention insights and review',
    points: [
      'Class and year-group analytics reviewed',
      'Students who may need support surfaced earlier',
      'Teacher feedback gathered',
    ],
  },
  {
    weeks: 'Weeks 9-12',
    title: 'Impact review and rollout recommendation',
    points: [
      'Usage and engagement summary',
      'Intervention insight report',
      'Recommended rollout plan and annual deployment proposal',
    ],
  },
]

export function PilotTimeline({
  phases = DEFAULT_PHASES,
  className,
}: {
  phases?: PilotPhase[]
  className?: string
}) {
  return (
    <ol className={cn('relative space-y-6 sm:space-y-0', className)}>
      {phases.map((p, i) => (
        <li key={p.weeks} className="relative sm:grid sm:grid-cols-[170px_1fr] sm:gap-6 sm:pb-10">
          {/* connector line */}
          {i < phases.length - 1 && (
            <span
              aria-hidden
              className="absolute left-[7px] top-6 hidden h-full w-px bg-border sm:block sm:left-[83px]"
            />
          )}
          <div className="flex items-center gap-3 sm:flex-col sm:items-start">
            <span className="relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-primary/15 sm:mt-1.5" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {p.weeks}
            </span>
          </div>
          <div className="mt-2 sm:mt-0">
            <h3 className="font-serif text-lg font-semibold text-foreground">{p.title}</h3>
            <ul className="mt-2 space-y-1.5">
              {p.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
