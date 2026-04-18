import Link from 'next/link'
import { ArrowRight, BookOpen, BookText, Clock, PenLine, Quote, Users, Lightbulb } from 'lucide-react'

export type DeepDiveLink = {
  href: string
  icon: 'acts' | 'essays' | 'quotes' | 'characters' | 'themes' | 'read' | 'context'
  title: string
  description: string
}

const iconMap = {
  acts: BookOpen,
  essays: PenLine,
  quotes: Quote,
  characters: Users,
  themes: Lightbulb,
  read: BookText,
  context: Clock,
} as const

const iconColorMap = {
  acts: 'text-teal-400',
  essays: 'text-clay-600',
  quotes: 'text-violet-400',
  characters: 'text-emerald-400',
  themes: 'text-rose-400',
  read: 'text-blue-400',
  context: 'text-clay-600',
} as const

const bgColorMap = {
  acts: 'bg-teal-500/10',
  essays: 'bg-amber-500/10',
  quotes: 'bg-violet-500/10',
  characters: 'bg-emerald-500/10',
  themes: 'bg-rose-500/10',
  read: 'bg-blue-500/10',
  context: 'bg-orange-500/10',
} as const

export function DeepDiveSection({ links }: { links: DeepDiveLink[] }) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <BookOpen className="size-5 text-teal-400" />
        <h2 className="text-heading-lg font-heading text-foreground">Deep Dive</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => {
          const Icon = iconMap[link.icon]
          const iconColor = iconColorMap[link.icon]
          const bgColor = bgColorMap[link.icon]
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-teal-500/40 hover:bg-teal-500/[0.03] hover:shadow-sm"
            >
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${bgColor}`}
              >
                <Icon className={`size-5 ${iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-teal-400 transition-colors">
                  {link.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </div>
              <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-400" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
