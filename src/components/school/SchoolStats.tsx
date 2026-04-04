import {
  BookOpen,
  FileText,
  GraduationCap,
  Award,
  Brain,
  Zap,
} from "lucide-react"
import { type LucideIcon } from "lucide-react"

interface Stat {
  value: string
  label: string
  Icon: LucideIcon
}

const stats: Stat[] = [
  {
    value: "470+",
    label: "Courses",
    Icon: BookOpen,
  },
  {
    value: "130+",
    label: "Mock Papers",
    Icon: FileText,
  },
  {
    value: "Y7-Y13",
    label: "Coverage",
    Icon: GraduationCap,
  },
  {
    value: "5",
    label: "Exam Boards",
    Icon: Award,
  },
  {
    value: "2,000+",
    label: "Flashcards",
    Icon: Brain,
  },
  {
    value: "Instant",
    label: "Setup",
    Icon: Zap,
  },
]

function StatPill({ stat }: { stat: Stat }) {
  const { value, label, Icon } = stat
  return (
    <div className="flex min-w-[140px] flex-col items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/50 px-6 py-6 text-center shadow-md shadow-black/20 transition-colors duration-200 hover:border-emerald-500/30 hover:bg-slate-800/80 md:min-w-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
        <Icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
      </div>
      <div>
        <p className="text-2xl font-bold tabular-nums text-white leading-tight">
          {value}
        </p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </p>
      </div>
    </div>
  )
}

export function SchoolStats() {
  return (
    <section
      className="w-full py-10 px-4"
      aria-label="Platform statistics"
    >
      {/* Mobile: horizontal scroll - Desktop: 6-column grid */}
      <div className="mx-auto max-w-6xl">
        {/* Scroll container - visible only on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none md:hidden">
          {stats.map((stat) => (
            <StatPill key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Grid - visible only on md+ */}
        <div className="hidden md:grid md:grid-cols-6 md:gap-4 lg:gap-5">
          {stats.map((stat) => (
            <StatPill key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
