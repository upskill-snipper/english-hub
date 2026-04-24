import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Our traction — in the open | The English Hub',
  description:
    'Live public metrics for The English Hub: monthly active users, paying students, and total essays marked. Published as a trust artefact for investors, partners, and school buyers.',
}

// Revalidate hourly. Cheap enough to be public and current enough that the
// numbers stay credible. Do not shorten without checking Supabase read load.
export const revalidate = 3600

type GrowthStats = {
  mau: number
  payingStudents: number
  essaysMarked: number
}

async function getGrowthStats(): Promise<GrowthStats> {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  // Monthly Active Users — any User with a login in the last 30 days.
  const mauPromise = prisma.user.count({
    where: {
      lastLoginAt: { gte: thirtyDaysAgo },
      deletedAt: null,
    },
  })

  // Paying students — ACTIVE subscriptions that are NOT teacher plans and
  // NOT attached to a reviewer/internal account. Reviewer accounts are
  // excluded via a conservative email-domain filter; adjust if the
  // diligence reviewer list lives elsewhere.
  const payingStudentsPromise = prisma.subscription.count({
    where: {
      status: 'ACTIVE',
      isTeacherPlan: false,
      user: {
        deletedAt: null,
        NOT: [
          { email: { contains: '+reviewer@' } },
          { email: { endsWith: '@theenglishhub.app' } },
        ],
      },
    },
  })

  // Total essays marked — every persisted AIFeedback row counts as one
  // marked submission (AIFeedback has a 1:1 with Essay). We use AIFeedback
  // because an Essay row can exist pre-marking (draft state).
  const essaysMarkedPromise = prisma.aIFeedback.count()

  const [mau, payingStudents, essaysMarked] = await Promise.all([
    mauPromise,
    payingStudentsPromise,
    essaysMarkedPromise,
  ])

  return { mau, payingStudents, essaysMarked }
}

function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-GB').format(n)
}

export default async function PublicGrowthDashboardPage() {
  let stats: GrowthStats | null = null
  let errored = false
  try {
    stats = await getGrowthStats()
  } catch {
    errored = true
  }

  const asOf = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <header className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Public dashboard · as of {asOf}
          </p>
          <h1 className="text-foreground mb-6 text-4xl md:text-5xl font-semibold">
            Our traction — in the open
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Investors, partners, and school buyers keep asking for numbers.
            We publish them. This page is regenerated every hour from the
            production database — no massaging, no vanity filters.
          </p>
        </header>

        {errored || !stats ? (
          <p className="text-center text-muted-foreground">
            Metrics are temporarily unavailable — please check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GrowthStat
              label="Monthly active users"
              value={formatNumber(stats.mau)}
              hint="Users who logged in within the last 30 days."
            />
            <GrowthStat
              label="Paying students"
              value={formatNumber(stats.payingStudents)}
              hint="Active, non-teacher subscriptions. Excludes comp / reviewer accounts."
            />
            <GrowthStat
              label="Essays marked"
              value={formatNumber(stats.essaysMarked)}
              hint="Total essays returned with AI feedback since launch."
            />
          </div>
        )}

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            Numbers refresh hourly. For a board-grade snapshot or due-diligence
            access, contact{' '}
            <a className="underline" href="mailto:investors@theenglishhub.app">
              investors@theenglishhub.app
            </a>
            .
          </p>
        </footer>
      </section>
    </main>
  )
}

function GrowthStat({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-2 text-4xl font-semibold text-foreground tabular-nums">
        {value}
      </p>
      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        {hint}
      </p>
    </div>
  )
}
