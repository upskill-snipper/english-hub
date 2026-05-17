import { Shield, BookOpen, Users, CheckCircle, XCircle, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { tMany } from '@/lib/i18n/t'

// ── Types ────────────────────────────────────────────────────────────────────

interface PermissionRow {
  feature: string
  admin: boolean
  teacher: boolean
  student: boolean
}

// ── Data ─────────────────────────────────────────────────────────────────────

const permissionMatrix: PermissionRow[] = [
  { feature: 'View all students', admin: true, teacher: false, student: false },
  { feature: 'Manage users', admin: true, teacher: false, student: false },
  { feature: 'Create classes', admin: true, teacher: false, student: false },
  { feature: 'View own class students', admin: true, teacher: true, student: false },
  { feature: 'Submit work', admin: false, teacher: false, student: true },
  { feature: 'Mark work', admin: true, teacher: true, student: false },
  { feature: 'View school analytics', admin: true, teacher: false, student: false },
  { feature: 'View class analytics', admin: true, teacher: true, student: false },
  { feature: 'View own analytics', admin: true, teacher: true, student: true },
  { feature: 'Access all resources', admin: true, teacher: true, student: false },
  { feature: 'Access lesson plans', admin: true, teacher: true, student: false },
  { feature: 'Manage billing', admin: true, teacher: false, student: false },
  { feature: 'Export data', admin: true, teacher: false, student: false },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function PermCheck({ allowed }: { allowed: boolean }) {
  if (allowed) {
    return <CheckCircle className="mx-auto h-5 w-5 text-emerald-400" />
  }
  return <XCircle className="mx-auto h-5 w-5 text-zinc-600" />
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-xl font-semibold tracking-tight text-white">{children}</h2>
}

function CanDo({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function CannotDo({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 border-t border-zinc-700 pt-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-zinc-500">
          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function StepPath({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {steps.map((step, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="rounded bg-zinc-700 px-2 py-0.5 text-sm font-medium text-zinc-200">
            {step}
          </span>
          {i < steps.length - 1 && <ChevronRight className="h-3 w-3 text-zinc-500" />}
        </span>
      ))}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function PermissionsPage() {
  const [
    pageTitle,
    subtitle,
    sectionRoles,
    sectionMatrix,
    sectionChanging,
    sectionSecurity,
    whoIs,
    whatCan,
    colFeature,
    colAdmin,
    colTeacher,
    colStudent,
    roleAdmin,
    roleAdminWho,
    badgeFullAccess,
    roleTeacher,
    roleTeacherWho,
    badgeClassAccess,
    roleStudent,
    roleStudentWho,
    badgePersonal,
    promoteTitle,
    promoteNote,
    promoteInstant,
    demoteTitle,
    demoteNote,
    demoteWarning,
    classAccessTitle,
    classAccessDesc,
    secDataIsolation,
    secDataIsolationDesc,
    secTeacherScope,
    secTeacherScopeDesc,
    secAudit,
    secAuditDesc,
    secGdpr,
    secGdprDesc,
  ] = await tMany([
    'school.b15.permissions.title',
    'school.b15.permissions.subtitle',
    'school.b15.permissions.section_roles',
    'school.b15.permissions.section_matrix',
    'school.b15.permissions.section_changing',
    'school.b15.permissions.section_security',
    'school.b15.permissions.who_is',
    'school.b15.permissions.what_can',
    'school.b15.permissions.col_feature',
    'school.b15.permissions.col_admin',
    'school.b15.permissions.col_teacher',
    'school.b15.permissions.col_student',
    'school.b15.permissions.role_admin',
    'school.b15.permissions.role_admin_who',
    'school.b15.permissions.badge_full_access',
    'school.b15.permissions.role_teacher',
    'school.b15.permissions.role_teacher_who',
    'school.b15.permissions.badge_class_access',
    'school.b15.permissions.role_student',
    'school.b15.permissions.role_student_who',
    'school.b15.permissions.badge_personal',
    'school.b15.permissions.promote_title',
    'school.b15.permissions.promote_note',
    'school.b15.permissions.promote_instant',
    'school.b15.permissions.demote_title',
    'school.b15.permissions.demote_note',
    'school.b15.permissions.demote_warning',
    'school.b15.permissions.class_access_title',
    'school.b15.permissions.class_access_desc',
    'school.b15.permissions.sec_data_isolation',
    'school.b15.permissions.sec_data_isolation_desc',
    'school.b15.permissions.sec_teacher_scope',
    'school.b15.permissions.sec_teacher_scope_desc',
    'school.b15.permissions.sec_audit',
    'school.b15.permissions.sec_audit_desc',
    'school.b15.permissions.sec_gdpr',
    'school.b15.permissions.sec_gdpr_desc',
  ])

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* ── Header ── */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{pageTitle}</h1>
          <p className="mt-2 text-zinc-400">{subtitle}</p>
        </div>

        {/* ── Role Cards ── */}
        <section>
          <SectionHeading>{sectionRoles}</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {/* School Admin */}
            <Card className="border border-rose-800/50 bg-zinc-900">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-rose-950">
                  <Shield className="h-6 w-6 text-rose-400" />
                </div>
                <CardTitle className="text-white">{roleAdmin}</CardTitle>
                <Badge className="mt-1 w-fit bg-rose-900/60 text-rose-300 hover:bg-rose-900/60">
                  {badgeFullAccess}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {whoIs}
                  </p>
                  <p className="text-sm text-zinc-400">{roleAdminWho}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {whatCan}
                  </p>
                  <CanDo
                    items={[
                      'Manage all users (add, remove, reset passwords)',
                      'View all analytics across all year groups',
                      'Create and manage all classes',
                      'Upload students / teachers via Excel',
                      'Download login credentials',
                      'Manage school settings and subscription',
                      'Grant / revoke admin access to other teachers',
                      'Export full school data',
                      'Delete school account',
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Teacher */}
            <Card className="border border-blue-800/50 bg-zinc-900">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-950">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">{roleTeacher}</CardTitle>
                <Badge className="mt-1 w-fit bg-blue-900/60 text-blue-300 hover:bg-blue-900/60">
                  {badgeClassAccess}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {whoIs}
                  </p>
                  <p className="text-sm text-zinc-400">{roleTeacherWho}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {whatCan}
                  </p>
                  <CanDo
                    items={[
                      'View and manage their own assigned classes',
                      'See student progress for their students only',
                      'Mark and give feedback on student essays',
                      'Set homework for their classes',
                      'Access all 300+ lesson plans and resources',
                      'View assignment completion for their classes',
                      'Generate class progress reports',
                    ]}
                  />
                  <CannotDo
                    items={[
                      "See other teachers' students",
                      'Manage other users',
                      'Access billing or school settings',
                      'Create classes (admin must do this)',
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Student */}
            <Card className="border border-emerald-800/50 bg-zinc-900">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-950">
                  <Users className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white">{roleStudent}</CardTitle>
                <Badge className="mt-1 w-fit bg-emerald-900/60 text-emerald-300 hover:bg-emerald-900/60">
                  {badgePersonal}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {whoIs}
                  </p>
                  <p className="text-sm text-zinc-400">{roleStudentWho}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {whatCan}
                  </p>
                  <CanDo
                    items={[
                      'Access all courses for their year group and exam board',
                      'Submit essays and homework',
                      'View their own progress and scores',
                      'Receive AI feedback on their work',
                      'Take mock exams',
                      'Access flashcards and study tools',
                      'Download revision resources',
                    ]}
                  />
                  <CannotDo
                    items={[
                      "See other students' work or progress",
                      'Access teacher resources or lesson plans',
                      'Change school settings',
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Permission Matrix ── */}
        <section>
          <SectionHeading>{sectionMatrix}</SectionHeading>
          <Card className="border border-zinc-800 bg-zinc-900">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="py-3 pl-6 pr-4 text-left font-semibold text-zinc-300">
                        {colFeature}
                      </th>
                      <th className="w-28 py-3 text-center font-semibold text-rose-400">
                        <div className="flex items-center justify-center gap-1.5">
                          <Shield className="h-4 w-4" />
                          {colAdmin}
                        </div>
                      </th>
                      <th className="w-28 py-3 text-center font-semibold text-blue-400">
                        <div className="flex items-center justify-center gap-1.5">
                          <BookOpen className="h-4 w-4" />
                          {colTeacher}
                        </div>
                      </th>
                      <th className="w-28 py-3 pr-4 text-center font-semibold text-emerald-400">
                        <div className="flex items-center justify-center gap-1.5">
                          <Users className="h-4 w-4" />
                          {colStudent}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {permissionMatrix.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={
                          i % 2 === 0
                            ? 'border-b border-zinc-800/60 bg-zinc-900'
                            : 'border-b border-zinc-800/60 bg-zinc-800/30'
                        }
                      >
                        <td className="py-3 pl-6 pr-4 text-zinc-300">{row.feature}</td>
                        <td className="py-3 text-center">
                          <PermCheck allowed={row.admin} />
                        </td>
                        <td className="py-3 text-center">
                          <PermCheck allowed={row.teacher} />
                        </td>
                        <td className="py-3 pr-4 text-center">
                          <PermCheck allowed={row.student} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Changing Roles ── */}
        <section>
          <SectionHeading>{sectionChanging}</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            <Card className="border border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-white">{promoteTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-zinc-400">{promoteNote}</p>
                <StepPath steps={['Users', 'Select teacher', 'Edit', 'Role: Admin', 'Save']} />
                <p className="text-xs text-zinc-500">{promoteInstant}</p>
              </CardContent>
            </Card>

            <Card className="border border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-white">{demoteTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-zinc-400">{demoteNote}</p>
                <StepPath steps={['Users', 'Select admin', 'Edit', 'Role: Teacher', 'Save']} />
                <p className="text-xs text-amber-500/80">{demoteWarning}</p>
              </CardContent>
            </Card>

            <Card className="border border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-white">{classAccessTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-zinc-400">{classAccessDesc}</p>
                <StepPath steps={['Classes', 'Select class', 'Assign Teacher']} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Security Notes ── */}
        <section>
          <SectionHeading>{sectionSecurity}</SectionHeading>
          <Card className="border border-zinc-800 bg-zinc-900">
            <CardContent className="divide-y divide-zinc-800 p-0">
              <div className="flex items-start gap-4 px-6 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-950">
                  <Shield className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{secDataIsolation}</p>
                  <p className="mt-0.5 text-sm text-zinc-400">{secDataIsolationDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 px-6 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-950">
                  <BookOpen className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{secTeacherScope}</p>
                  <p className="mt-0.5 text-sm text-zinc-400">{secTeacherScopeDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 px-6 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800">
                  <CheckCircle className="h-4 w-4 text-zinc-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{secAudit}</p>
                  <p className="mt-0.5 text-sm text-zinc-400">{secAuditDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 px-6 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800">
                  <Users className="h-4 w-4 text-zinc-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{secGdpr}</p>
                  <p className="mt-0.5 text-sm text-zinc-400">{secGdprDesc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
