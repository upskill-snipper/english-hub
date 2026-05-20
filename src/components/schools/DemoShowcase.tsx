// Demo showcase — server component. Surfaces the 3 main demos as a
// prominent visual block so school leaders can sample the platform
// without sign-up. Used on the homepage, pricing page, and anywhere
// else we want to convert curiosity into a click.

import Link from 'next/link'
import { Building2, Users2, GraduationCap, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DemoTile {
  href: string
  icon: typeof Building2
  eyebrow: string
  title: string
  body: string
  cta: string
}

const TILES: DemoTile[] = [
  {
    href: '/demo/school',
    icon: Building2,
    eyebrow: 'For leaders',
    title: 'School dashboard',
    body: 'Department analytics, intervention insights and reporting at a glance.',
    cta: 'Open the school demo',
  },
  {
    href: '/demo/teacher',
    icon: Users2,
    eyebrow: 'For teachers',
    title: 'Teacher workspace',
    body: 'Marking queue, class analytics, homework setting and student insight.',
    cta: 'Open the teacher demo',
  },
  {
    href: '/demo/student',
    icon: GraduationCap,
    eyebrow: 'For students',
    title: 'Student experience',
    body: 'Revision, exam practice, AI-assisted feedback and progress tracking.',
    cta: 'Open the student demo',
  },
]

export function DemoShowcase({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="demo-showcase-heading"
      className={cn('border-y border-border/60 bg-muted/30', className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
            Sample the platform
          </p>
          <h2
            id="demo-showcase-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Browse the demos — no sign-up
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            See exactly what school leaders, teachers and students experience inside The English
            Hub. The demos are guest-accessible and use synthetic data so you can explore freely.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {TILES.map(({ href, icon: Icon, eyebrow, title, body, cta }) => (
            <Card
              key={href}
              className="group flex h-full flex-col p-6 border-border/50 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {eyebrow}
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:underline"
              >
                {cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-12 px-7" render={<Link href="/demo" />}>
            See all demos
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-7"
            render={<Link href="/school-pilot" />}
          >
            Book a School Pilot
          </Button>
        </div>
      </div>
    </section>
  )
}
