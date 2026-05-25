// ─── IELTS Centre / Tutor dashboard (read-only, Wave 1) ─────────────────────
// Server-rendered B2B view for IELTS centres, tutors and schools to monitor
// their linked learners. Shows each linked student's LATEST band per skill +
// an overall band (bandColour chips). No writes.
//
// Auth is enforced server-side, mirroring src/lib/admin.ts: resolve the Prisma
// User via `supabaseUserId` (email fallback) and require the TEACHER role.
// Non-teachers are redirected to the public IELTS hub rather than shown an
// empty dashboard. Students link via the Prisma-native User.linkedTeacherId.
//
// GRACEFUL throughout: the `ielts_attempts` table may be unmigrated in some
// environments, so every read of it is wrapped in try/catch and degrades to
// empty bands ("—"). Logged-out / DB-down requests redirect out cleanly.
// ────────────────────────────────────────────────────────────────────────────

import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Building2, ArrowLeft, Users, Headphones, BookOpen, PenLine, Mic, Info } from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { t } from '@/lib/i18n/t'
import { overallBand, bandColour, bandBgColour, bandLabel, bandTier } from '@/lib/ielts/bands'
import { IELTS_SKILLS, SKILL_META, type Band, type IeltsSkill } from '@/lib/ielts/types'

export const runtime = 'nodejs' // Prisma requires the Node.js runtime.
export const dynamic = 'force-dynamic' // Per-request auth + live attempt data.

const SKILL_ICON: Record<IeltsSkill, typeof Headphones> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
}

// Per-skill labels reuse the shared, already-translated IELTS keys
// (ielts.skill.*) rather than duplicating them in the centre shard.
const SKILL_LABEL_KEY: Record<IeltsSkill, string> = {
  listening: 'ielts.skill.listening',
  reading: 'ielts.skill.reading',
  writing: 'ielts.skill.writing',
  speaking: 'ielts.skill.speaking',
}

// Resolve the four skill labels once for the active locale.
async function skillLabels(): Promise<Record<IeltsSkill, string>> {
  const [listening, reading, writing, speaking] = await Promise.all(
    IELTS_SKILLS.map((skill) => t(SKILL_LABEL_KEY[skill])),
  )
  return { listening, reading, writing, speaking }
}

// 0–9 / 0.5-step union guard for Float bands read off the DB.
const VALID_BANDS: ReadonlySet<number> = new Set([
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
])

function toBand(value: number | null | undefined): Band | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null
  return VALID_BANDS.has(value) ? (value as Band) : null
}

interface CentreStudent {
  studentId: string
  name: string
  perSkillBands: Record<IeltsSkill, Band | null>
  overall: Band | null
  lastActive: string | null
}

interface CentreData {
  students: CentreStudent[]
  attemptsUnavailable: boolean
}

function formatDate(iso: string | null): string {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ─── Server-side auth: require an authenticated TEACHER ─────────────────────
// Returns the teacher's Prisma User.id, or null to signal "not a teacher /
// not signed in" (the page then redirects). DB reads are guarded so a
// transient DB issue redirects out rather than throwing a 500.
async function resolveTeacherId(): Promise<string | null> {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser()
    if (!authUser?.id) return null

    const bySupabase = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true, role: true },
    })
    const teacher =
      bySupabase ??
      (authUser.email
        ? await prisma.user.findUnique({
            where: { email: authUser.email.toLowerCase() },
            select: { id: true, role: true },
          })
        : null)

    if (!teacher || teacher.role !== 'TEACHER') return null
    return teacher.id
  } catch {
    return null
  }
}

// ─── Load the linked-student roster + latest bands ──────────────────────────
// Mirrors /api/ielts/centre/students. Always returns a (possibly empty) list;
// the ielts_attempts read is try/catch'd into graceful empty bands.
async function loadCentreData(teacherId: string): Promise<CentreData> {
  let students: { id: string; firstName: string; lastName: string }[] = []
  try {
    students = await prisma.user.findMany({
      where: { linkedTeacherId: teacherId, deletedAt: null },
      select: { id: true, firstName: true, lastName: true },
      orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }],
      take: 500,
    })
  } catch {
    return { students: [], attemptsUnavailable: false }
  }

  if (students.length === 0) return { students: [], attemptsUnavailable: false }

  const studentIds = students.map((s) => s.id)
  const latestBySkill = new Map<string, Partial<Record<IeltsSkill, Band | null>>>()
  const lastActiveById = new Map<string, string>()
  let attemptsUnavailable = false

  try {
    const rows = await prisma.iELTSAttempt.findMany({
      where: { userId: { in: studentIds } },
      orderBy: { createdAt: 'desc' },
      select: { userId: true, skill: true, band: true, createdAt: true },
    })

    const skillSet: ReadonlySet<string> = new Set(IELTS_SKILLS)
    for (const row of rows) {
      if (!lastActiveById.has(row.userId)) {
        lastActiveById.set(row.userId, row.createdAt.toISOString())
      }
      if (!skillSet.has(row.skill)) continue
      const skill = row.skill as IeltsSkill
      const perSkill = latestBySkill.get(row.userId) ?? {}
      if (!(skill in perSkill)) {
        perSkill[skill] = toBand(row.band)
        latestBySkill.set(row.userId, perSkill)
      }
    }
  } catch {
    attemptsUnavailable = true
  }

  const out: CentreStudent[] = students.map((s) => {
    const stored = latestBySkill.get(s.id) ?? {}
    const perSkillBands: Record<IeltsSkill, Band | null> = {
      listening: stored.listening ?? null,
      reading: stored.reading ?? null,
      writing: stored.writing ?? null,
      speaking: stored.speaking ?? null,
    }
    const overall = overallBand(IELTS_SKILLS.map((skill) => perSkillBands[skill]))
    return {
      studentId: s.id,
      name: `${s.firstName} ${s.lastName}`.trim() || 'Student',
      perSkillBands,
      overall,
      lastActive: lastActiveById.get(s.id) ?? null,
    }
  })

  return { students: out, attemptsUnavailable }
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function IeltsCentrePage() {
  const teacherId = await resolveTeacherId()
  // Private dashboard: anyone who is not a signed-in teacher goes to the public
  // IELTS hub. (Login is the public entry point; non-teachers have no roster.)
  if (!teacherId) redirect('/ielts')

  const { students, attemptsUnavailable } = await loadCentreData(teacherId)
  const hasStudents = students.length > 0
  const anyBands = students.some((s) =>
    IELTS_SKILLS.some((skill) => s.perSkillBands[skill] !== null),
  )

  const labels = await skillLabels()
  const [aboutTitle, aboutBody, rosterHeading, noData, unavailable] = await Promise.all([
    t('ielts.centre.about.title'),
    t('ielts.centre.about.body'),
    t('ielts.centre.roster.heading'),
    t('ielts.centre.roster.no_data'),
    t('ielts.centre.roster.unavailable'),
  ])

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <CentreHeader />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6">
        {/* ── What this is ─────────────────────────────────────────── */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Info className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground">{aboutTitle}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{aboutBody}</p>
            </div>
          </div>
        </section>

        {/* ── Roster ───────────────────────────────────────────────── */}
        {!hasStudents ? (
          <EmptyNoStudents />
        ) : (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-serif text-xl font-medium">
                <Users className="h-5 w-5 text-muted-foreground" aria-hidden />
                {rosterHeading}
                <span className="font-mono text-sm text-muted-foreground">({students.length})</span>
              </h2>
            </div>

            {!anyBands ? (
              <div className="rounded-xl border border-dashed border-border bg-muted/20 px-5 py-4">
                <p className="text-sm text-muted-foreground">{noData}</p>
              </div>
            ) : null}

            {attemptsUnavailable ? (
              <div className="rounded-xl border border-dashed border-amber-500/30 bg-amber-500/[0.06] px-5 py-4">
                <p className="text-sm text-muted-foreground">{unavailable}</p>
              </div>
            ) : null}

            {/* Desktop: table. Mobile: stacked cards. */}
            <StudentTable students={students} labels={labels} />
            <StudentCards students={students} labels={labels} />
          </section>
        )}
      </div>
    </main>
  )
}

// ─── Header ─────────────────────────────────────────────────────────────────

async function CentreHeader() {
  const [back, title, subtitle] = await Promise.all([
    t('ielts.centre.back'),
    t('ielts.centre.title'),
    t('ielts.centre.subtitle'),
  ])
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {back}
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Building2 className="h-6 w-6 text-primary" aria-hidden />
          </span>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Empty: no linked students ──────────────────────────────────────────────

async function EmptyNoStudents() {
  const [title, body] = await Promise.all([
    t('ielts.centre.empty.title'),
    t('ielts.centre.empty.body'),
  ])
  return (
    <section>
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Users className="h-7 w-7 text-primary" aria-hidden />
        </span>
        <h2 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </section>
  )
}

// ─── Desktop table ──────────────────────────────────────────────────────────

async function StudentTable({
  students,
  labels,
}: {
  students: CentreStudent[]
  labels: Record<IeltsSkill, string>
}) {
  const [studentCol, overallCol, lastActiveCol] = await Promise.all([
    t('ielts.centre.col.student'),
    t('ielts.centre.col.overall'),
    t('ielts.centre.col.last_active'),
  ])
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:block">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="px-5 py-3 font-medium text-muted-foreground">{studentCol}</th>
            {IELTS_SKILLS.map((skill) => (
              <th
                key={skill}
                className="px-3 py-3 text-center font-medium text-muted-foreground"
                title={labels[skill]}
              >
                <span className="inline-flex items-center gap-1.5">{labels[skill]}</span>
              </th>
            ))}
            <th className="px-3 py-3 text-center font-medium text-muted-foreground">
              {overallCol}
            </th>
            <th className="px-5 py-3 text-right font-medium text-muted-foreground">
              {lastActiveCol}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {students.map((s) => (
            <tr key={s.studentId} className="transition-colors hover:bg-muted/20">
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {initials(s.name)}
                  </span>
                  <span className="font-medium text-foreground">{s.name}</span>
                </div>
              </td>
              {IELTS_SKILLS.map((skill) => (
                <td key={skill} className="px-3 py-3.5 text-center">
                  <Badge
                    variant="outline"
                    className={cn('font-mono', bandColour(s.perSkillBands[skill]))}
                  >
                    {bandLabel(s.perSkillBands[skill])}
                  </Badge>
                </td>
              ))}
              <td className="px-3 py-3.5 text-center">
                <Badge
                  variant="outline"
                  className={cn(
                    'font-mono font-semibold',
                    bandBgColour(s.overall),
                    bandColour(s.overall),
                  )}
                  title={bandTier(s.overall)}
                >
                  {bandLabel(s.overall)}
                </Badge>
              </td>
              <td className="px-5 py-3.5 text-right font-mono text-xs text-muted-foreground">
                {formatDate(s.lastActive)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Mobile cards ───────────────────────────────────────────────────────────

async function StudentCards({
  students,
  labels,
}: {
  students: CentreStudent[]
  labels: Record<IeltsSkill, string>
}) {
  const [overallLabel, lastActiveLabel] = await Promise.all([
    t('ielts.centre.col.overall'),
    t('ielts.centre.card.last_active'),
  ])
  return (
    <div className="space-y-3 md:hidden">
      {students.map((s) => (
        <div key={s.studentId} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {initials(s.name)}
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium text-foreground">{s.name}</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {lastActiveLabel} {formatDate(s.lastActive)}
                </p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {overallLabel}
              </p>
              <p
                className={cn(
                  'font-serif text-2xl font-medium leading-none',
                  bandColour(s.overall),
                )}
              >
                {bandLabel(s.overall)}
              </p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {IELTS_SKILLS.map((skill) => {
              const Icon = SKILL_ICON[skill]
              return (
                <div
                  key={skill}
                  className={cn(
                    'flex items-center justify-between rounded-lg border px-3 py-2',
                    bandBgColour(s.perSkillBands[skill]),
                  )}
                >
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Icon className={cn('h-3.5 w-3.5', SKILL_META[skill].colour)} aria-hidden />
                    {labels[skill]}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-sm font-semibold',
                      bandColour(s.perSkillBands[skill]),
                    )}
                  >
                    {bandLabel(s.perSkillBands[skill])}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

function initials(name: string): string {
  return (
    name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'S'
  )
}
