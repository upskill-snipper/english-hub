'use client'

import Link from 'next/link'
import { DEMO_TEACHERS, DEMO_CLASSES } from '@/data/demo-data'
import DemoBanner from '@/components/demo/DemoBanner'
import { useT } from '@/lib/i18n/use-t'

const ROLE_MAP: Record<string, 'HOD' | 'Teacher'> = {
  't-001': 'HOD',
  't-003': 'HOD',
}

type LastActiveKey = 'today' | 'yesterday' | 'days_2' | 'days_3' | 'week_1'

const LAST_ACTIVE_MAP: Record<string, LastActiveKey> = {
  't-001': 'today',
  't-002': 'today',
  't-003': 'yesterday',
  't-004': 'today',
  't-005': 'today',
  't-006': 'yesterday',
  't-007': 'today',
  't-008': 'days_2',
  't-009': 'today',
  't-010': 'today',
  't-011': 'days_3',
  't-012': 'today',
  't-013': 'yesterday',
  't-014': 'today',
  't-015': 'today',
  't-016': 'week_1',
  't-017': 'today',
  't-018': 'week_1',
}

function getRole(id: string): 'HOD' | 'Teacher' {
  return ROLE_MAP[id] || 'Teacher'
}

function getLastActiveKey(id: string): LastActiveKey {
  return LAST_ACTIVE_MAP[id] || 'today'
}

function getClassesForTeacher(teacherId: string) {
  return DEMO_CLASSES.filter((c) => c.teacherId === teacherId)
}

export default function TeachersListPage() {
  const t = useT()
  const totalTeachers = DEMO_TEACHERS.length
  const activeThisWeek = DEMO_TEACHERS.filter(
    (teacher) => getLastActiveKey(teacher.id) !== 'week_1',
  ).length
  const totalClasses = DEMO_CLASSES.length

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DemoBanner message={t('demo_school.teachers.banner')} />

      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Riverside Academy
          </p>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground mb-2">
            {t('demo_school.teachers.title')}
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg">
            {t('demo_school.teachers.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {t('demo_school.teachers.stat.total')}
            </p>
            <p className="text-3xl font-light text-foreground tabular-nums">{totalTeachers}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {t('demo_school.teachers.stat.active')}
            </p>
            <p className="text-3xl font-light text-primary tabular-nums">{activeThisWeek}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {t('demo_school.teachers.stat.covered')}
            </p>
            <p className="text-3xl font-light text-primary tabular-nums">{totalClasses}</p>
          </div>
        </div>

        {/* Teacher Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_1fr_100px_100px_120px] gap-4 px-5 py-3 border-b border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>{t('demo_school.teachers.col.name')}</span>
            <span>{t('demo_school.teachers.col.email')}</span>
            <span>{t('demo_school.teachers.col.role')}</span>
            <span className="text-center">{t('demo_school.teachers.col.classes')}</span>
            <span className="text-right">{t('demo_school.teachers.col.last_active')}</span>
          </div>

          {/* Teacher rows */}
          {DEMO_TEACHERS.map((teacher) => {
            const role = getRole(teacher.id)
            const lastKey = getLastActiveKey(teacher.id)
            const lastActive = t(`demo_school.teachers.last.${lastKey}`)
            const classes = getClassesForTeacher(teacher.id)
            const isInactive = lastKey === 'week_1'

            return (
              <Link
                key={teacher.id}
                href={`/demo/school/teachers/${teacher.id}`}
                className="group grid grid-cols-1 sm:grid-cols-[1fr_1fr_100px_100px_120px] gap-1 sm:gap-4 px-5 py-4 border-b border-border/60 hover:bg-muted transition-colors cursor-pointer"
              >
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-muted flex items-center justify-center text-[11px] font-medium text-muted-foreground">
                    {teacher.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm text-foreground group-hover:text-foreground transition-colors">
                      {teacher.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground sm:hidden">{teacher.email}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="hidden sm:flex items-center">
                  <p className="text-sm text-muted-foreground truncate">{teacher.email}</p>
                </div>

                {/* Role badge */}
                <div className="flex items-center sm:justify-start">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${
                      role === 'HOD'
                        ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                        : 'bg-muted text-muted-foreground border border-border'
                    }`}
                  >
                    {role === 'HOD'
                      ? t('demo_school.teachers.role.hod')
                      : t('demo_school.teachers.role.teacher')}
                  </span>
                </div>

                {/* Classes count */}
                <div className="flex items-center sm:justify-center">
                  <span className="text-sm text-muted-foreground tabular-nums sm:text-center">
                    <span className="sm:hidden text-muted-foreground text-[11px] mr-1">
                      {t('demo_school.teachers.row.classes_mobile')}
                    </span>
                    {classes.length}
                  </span>
                </div>

                {/* Last Active */}
                <div className="flex items-center sm:justify-end">
                  <span
                    className={`text-sm tabular-nums ${
                      isInactive ? 'text-red-700 dark:text-red-300' : 'text-muted-foreground'
                    }`}
                  >
                    <span className="sm:hidden text-muted-foreground text-[11px] mr-1">
                      {t('demo_school.teachers.row.active_mobile')}
                    </span>
                    {lastActive}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {t('demo_school.teachers.footer.demo_data')} &middot; {totalTeachers}{' '}
          {t('demo_school.teachers.footer.teachers_suffix')} &middot; {totalClasses}{' '}
          {t('demo_school.teachers.footer.classes_suffix')}
        </p>
      </div>
    </div>
  )
}
