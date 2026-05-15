'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  School,
  Users,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  Shield,
  UserCheck,
  UserPlus,
  Upload,
  KeyRound,
  BarChart3,
  HelpCircle,
  ArrowRight,
  FileSpreadsheet,
  Lock,
  RefreshCw,
  Layers,
  Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// -- Types ---------------------------------------------------------------------

interface QuickStep {
  id: number
  label: string
}

interface AccordionSection {
  id: string
  icon: React.ReactNode
  title: string
  badge?: string
  content: React.ReactNode
}

// -- Data ----------------------------------------------------------------------

const QUICK_STEPS: QuickStep[] = [
  { id: 1, label: 'Create school account' },
  { id: 2, label: 'Import teachers' },
  { id: 3, label: 'Import students' },
  { id: 4, label: 'Create classes and assign students' },
  { id: 5, label: 'Share login details with staff and students' },
]

// -- Sub-components ------------------------------------------------------------

function StepRow({
  step,
  checked,
  onToggle,
}: {
  step: QuickStep
  checked: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors',
        checked
          ? 'border-primary/30 bg-primary/5 text-muted-foreground line-through'
          : 'border-border bg-card hover:border-primary/40 hover:bg-primary/5',
      )}
    >
      {checked ? (
        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
      ) : (
        <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />
      )}
      <span className="flex items-center gap-2 text-sm font-medium">
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
          {step.id}
        </span>
        {step.label}
      </span>
    </button>
  )
}

function AccordionItem({ section }: { section: AccordionSection }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 bg-card px-5 py-4 text-left transition-colors hover:bg-muted/40"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {section.icon}
          </span>
          <span className="font-semibold text-sm sm:text-base truncate">{section.title}</span>
          {section.badge && (
            <Badge variant="secondary" className="hidden sm:inline-flex shrink-0">
              {section.badge}
            </Badge>
          )}
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="border-t border-border bg-background px-5 py-5">{section.content}</div>
      )}
    </div>
  )
}

// -- Permission matrix ---------------------------------------------------------

const PERMISSION_ROWS = [
  {
    action: 'View all student data',
    admin: 'Yes',
    teacher: 'Own classes only',
    student: 'Own data only',
  },
  { action: 'Manage users', admin: 'Yes', teacher: 'No', student: 'No' },
  { action: 'Create classes', admin: 'Yes', teacher: 'No', student: 'No' },
  { action: 'View analytics', admin: 'All', teacher: 'Own classes', student: 'Own progress' },
  { action: 'Access resources', admin: 'Yes', teacher: 'Yes', student: 'Yes' },
  { action: 'Mark essays', admin: 'No', teacher: 'Yes', student: 'No' },
  { action: 'Submit work', admin: 'No', teacher: 'No', student: 'Yes' },
]

function cellClass(value: string) {
  if (value === 'Yes' || value === 'All') return 'text-emerald-400 font-semibold'
  if (value === 'No') return 'text-muted-foreground'
  return 'text-clay-600 font-medium'
}

function PermissionMatrix() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Action</th>
            <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Admin</th>
            <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Teacher</th>
            <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Student</th>
          </tr>
        </thead>
        <tbody>
          {PERMISSION_ROWS.map((row, i) => (
            <tr
              key={row.action}
              className={cn(
                'border-b border-border last:border-0',
                i % 2 === 0 ? 'bg-card' : 'bg-muted/20',
              )}
            >
              <td className="px-4 py-3 text-sm">{row.action}</td>
              <td className={cn('px-4 py-3 text-center text-sm', cellClass(row.admin))}>
                {row.admin}
              </td>
              <td className={cn('px-4 py-3 text-center text-sm', cellClass(row.teacher))}>
                {row.teacher}
              </td>
              <td className={cn('px-4 py-3 text-center text-sm', cellClass(row.student))}>
                {row.student}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// -- Prose helpers -------------------------------------------------------------

function StepList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex gap-3 rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
      <p className="text-sm text-blue-300/90">{children}</p>
    </div>
  )
}

function RoleCard({
  icon,
  role,
  color,
  description,
}: {
  icon: React.ReactNode
  role: string
  color: string
  description: string
}) {
  return (
    <div className={cn('rounded-lg border p-4 space-y-1.5', color)}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-semibold text-sm">{role}</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-medium hover:text-primary transition-colors"
      >
        {question}
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && <div className="pb-4 text-sm text-muted-foreground leading-relaxed">{answer}</div>}
    </div>
  )
}

// -- Section content -----------------------------------------------------------

function RolesContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        English Hub has three user roles. Each role has a specific set of permissions designed to
        keep your school secure and organised.
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        <RoleCard
          icon={<Shield className="h-4 w-4 text-violet-400" />}
          role="School Admin"
          color="border-violet-500/20 bg-violet-500/5"
          description="Full access to all settings, all users, all analytics, and billing. Can add or remove admins, teachers, and students. Can create and delete classes."
        />
        <RoleCard
          icon={<UserCheck className="h-4 w-4 text-blue-400" />}
          role="Teacher"
          color="border-blue-500/20 bg-blue-500/5"
          description="Can view their assigned classes, mark and give feedback on work, see student progress for their students, and access all teaching resources and lesson plans."
        />
        <RoleCard
          icon={<GraduationCap className="h-4 w-4 text-emerald-400" />}
          role="Student"
          color="border-emerald-500/20 bg-emerald-500/5"
          description="Can access all courses, submit essays and homework, view their own progress, and receive AI feedback on their work."
        />
      </div>
      <div>
        <p className="text-sm font-semibold mb-3">Permission matrix</p>
        <PermissionMatrix />
      </div>
    </div>
  )
}

function ImportTeachersContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        The fastest way to add your whole teaching team at once is via a spreadsheet import.
      </p>
      <StepList
        items={[
          <span key="1">
            Download the teacher import template:{' '}
            <Link
              href="/api/school/export/template?type=teacher"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Download template
            </Link>
          </span>,
          <span key="2">
            Fill in the required columns:{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">first_name</code>,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">last_name</code>,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">email</code>,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">job_title</code>. One teacher
            per row.
          </span>,
          <span key="3">
            Go to{' '}
            <Link
              href="/school/import"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              School &rsaquo; Import
            </Link>{' '}
            and select the <strong className="text-foreground">Teachers</strong> tab, then upload
            your file.
          </span>,
          'Each teacher receives an automated email with their login details.',
          <span key="5">
            Alternatively, after the import finishes you can{' '}
            <strong className="text-foreground">download the credentials spreadsheet</strong> and
            distribute login details yourself.
          </span>,
        ]}
      />
      <InfoBox>
        Teachers are created with a temporary password. They will be prompted to set a new password
        on their first login.
      </InfoBox>
    </div>
  )
}

function ImportStudentsContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Import your entire student cohort in one go using the student template.
      </p>
      <StepList
        items={[
          <span key="1">
            Download the student import template from the{' '}
            <Link
              href="/school/import"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Import page
            </Link>
            .
          </span>,
          <span key="2">
            Fill in the required columns:{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">first_name</code>,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">last_name</code>,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">email</code>,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">year_group</code>. The column{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">class_name</code> is optional
            and will auto-assign students to an existing class.
          </span>,
          <span key="3">
            Go to{' '}
            <Link
              href="/school/import"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              School &rsaquo; Import
            </Link>{' '}
            and select the <strong className="text-foreground">Students</strong> tab, then upload
            your file.
          </span>,
          'Students can log in immediately after the import completes.',
          'Download the credentials spreadsheet after import to distribute login details to students.',
        ]}
      />
      <InfoBox>
        If you include a <code className="rounded bg-muted/80 px-1 text-xs">class_name</code> that
        does not yet exist, the import will still succeed and you can assign students to classes
        afterwards.
      </InfoBox>
    </div>
  )
}

function CreatingClassesContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Classes connect teachers to students and are the primary unit of organisation in English
        Hub.
      </p>
      <BulletList
        items={[
          <span key="1">
            Navigate to{' '}
            <Link
              href="/school/classes"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              School &rsaquo; Classes
            </Link>{' '}
            and click <strong className="text-foreground">Create class</strong>.
          </span>,
          'Set a class name, year group, exam board, and assign a lead teacher.',
          'Add students to the class manually, or they will be auto-assigned if you used the class_name column during import.',
          "Students in a class automatically appear on the assigned teacher's dashboard.",
        ]}
      />
      <InfoBox>
        Only School Admins can create and delete classes. Teachers can view their classes but cannot
        create new ones.
      </InfoBox>
    </div>
  )
}

function DistributingLoginsContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        After a successful import you can download a ready-made spreadsheet to hand out to students
        and teachers.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            What the file contains
          </div>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Full name
            </li>
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Email address
            </li>
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Temporary password
            </li>
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Direct login URL
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Lock className="h-4 w-4 text-clay-600" />
            Security reminders
          </div>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Keep the spreadsheet secure
            </li>
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> All passwords are temporary
            </li>
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Users must change password on first
              login
            </li>
            <li className="flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3 text-primary" /> Delete the file once distributed
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-muted/20 px-4 py-3 flex items-center gap-3 text-sm">
        <KeyRound className="h-4 w-4 shrink-0 text-primary" />
        <span>
          Login URL for all users:{' '}
          <a
            href="/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-primary underline-offset-4 hover:underline"
          >
            https://theenglishhub.app/auth/login
          </a>
        </span>
      </div>
    </div>
  )
}

function OngoingManagementContent() {
  const tasks = [
    {
      icon: <UserPlus className="h-4 w-4 text-primary" />,
      label: 'Add individual user',
      path: 'Users > Add User',
    },
    {
      icon: <Users className="h-4 w-4 text-primary" />,
      label: 'Remove a user',
      path: 'Users > find user > Remove',
    },
    {
      icon: <RefreshCw className="h-4 w-4 text-primary" />,
      label: 'Reset a password',
      path: 'Users > find user > Reset Password',
    },
    {
      icon: <BarChart3 className="h-4 w-4 text-primary" />,
      label: 'View school analytics',
      path: 'Analytics section',
    },
    {
      icon: <Download className="h-4 w-4 text-primary" />,
      label: 'Generate a report',
      path: 'Analytics > Export Report',
    },
  ]
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Day-to-day management tasks can all be done from your admin dashboard.
      </p>
      <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
        {tasks.map((t) => (
          <div key={t.label} className="flex items-center gap-3 bg-card px-4 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
              {t.icon}
            </span>
            <div className="flex flex-1 items-center justify-between gap-2 flex-wrap">
              <span className="text-sm font-medium">{t.label}</span>
              <span className="text-xs text-muted-foreground font-mono bg-muted rounded px-2 py-0.5">
                {t.path}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FaqContent() {
  const faqs = [
    {
      question: 'What if a student forgets their password?',
      answer: (
        <span>
          Go to <strong>Users</strong>, find the student, and click <strong>Reset Password</strong>.
          They will receive an email with a new temporary password, or you can copy the reset link
          and send it yourself.
        </span>
      ),
    },
    {
      question: 'Can teachers be promoted to admin?',
      answer:
        'Yes. Go to Users, find the teacher, open their profile, and change their role to School Admin. They will immediately gain full admin permissions.',
    },
    {
      question: 'What happens when FOUNDER access expires?',
      answer:
        'Your school will move to the standard subscription plan. You will be notified in advance. All your data, classes, and users are preserved. You can renew or upgrade from the Billing section in Settings.',
    },
    {
      question: 'Can we have multiple admins?',
      answer:
        'Yes. There is no limit on the number of School Admins. It is good practice to have at least two so no single person is a single point of failure.',
    },
    {
      question: 'How do we renew or pay?',
      answer: (
        <span>
          Go to <strong>School &rsaquo; Settings &rsaquo; Billing</strong>. From there you can view
          your current plan, update payment details, and download invoices. For enterprise pricing
          or purchase orders, contact us at{' '}
          <a
            href="mailto:info@Upskillenergy.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            info@Upskillenergy.com
          </a>
          .
        </span>
      ),
    },
  ]

  return (
    <div>
      {faqs.map((faq) => (
        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

// -- Accordion sections config -------------------------------------------------

function buildSections(): AccordionSection[] {
  return [
    {
      id: 'roles',
      icon: <Shield className="h-4 w-4" />,
      title: 'Understanding User Roles & Permissions',
      badge: 'Start here',
      content: <RolesContent />,
    },
    {
      id: 'import-teachers',
      icon: <UserCheck className="h-4 w-4" />,
      title: 'Importing Teachers',
      content: <ImportTeachersContent />,
    },
    {
      id: 'import-students',
      icon: <GraduationCap className="h-4 w-4" />,
      title: 'Importing Students',
      content: <ImportStudentsContent />,
    },
    {
      id: 'classes',
      icon: <Layers className="h-4 w-4" />,
      title: 'Creating Classes',
      content: <CreatingClassesContent />,
    },
    {
      id: 'logins',
      icon: <KeyRound className="h-4 w-4" />,
      title: 'Distributing Login Details',
      content: <DistributingLoginsContent />,
    },
    {
      id: 'management',
      icon: <BarChart3 className="h-4 w-4" />,
      title: 'Ongoing Management',
      content: <OngoingManagementContent />,
    },
    {
      id: 'faq',
      icon: <HelpCircle className="h-4 w-4" />,
      title: 'Frequently Asked Questions',
      content: <FaqContent />,
    },
  ]
}

// -- Page ----------------------------------------------------------------------

export default function SchoolSetupGuidePage() {
  const [checked, setChecked] = useState<Set<number>>(new Set())

  function toggleStep(id: number) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const sections = buildSections()
  const completedCount = checked.size

  return (
    <div className="space-y-8 pb-16">
      {/* -- Header -------------------------------------------------------- */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">School Setup Guide</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Everything you need to get your school up and running in under 30 minutes
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" className="gap-1.5" disabled>
            <Download className="h-4 w-4" />
            Download as PDF
          </Button>
          <Button size="sm" className="gap-1.5" render={<a href="mailto:info@Upskillenergy.com" />}>
            <Mail className="h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>

      <Separator />

      {/* -- Quick start tracker -------------------------------------------- */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <CardTitle className="text-base">Quick Start Checklist</CardTitle>
              <CardDescription className="text-sm mt-0.5">
                Tick off each step as you complete it
              </CardDescription>
            </div>
            <Badge
              variant={completedCount === QUICK_STEPS.length ? 'default' : 'secondary'}
              className="text-xs"
            >
              {completedCount} / {QUICK_STEPS.length} complete
            </Badge>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(completedCount / QUICK_STEPS.length) * 100}%` }}
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-2">
          {QUICK_STEPS.map((step) => (
            <StepRow
              key={step.id}
              step={step}
              checked={checked.has(step.id)}
              onToggle={() => toggleStep(step.id)}
            />
          ))}

          {completedCount === QUICK_STEPS.length && (
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span className="font-medium">All done! Your school is ready to go.</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* -- Detailed sections ---------------------------------------------- */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Detailed Setup Guide</h2>
        <div className="space-y-2.5">
          {sections.map((section) => (
            <AccordionItem key={section.id} section={section} />
          ))}
        </div>
      </div>

      {/* -- Footer CTA ---------------------------------------------------- */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between py-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Need help getting set up?</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Our school support team typically responds within one working day.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <Button variant="outline" size="sm" disabled className="gap-1.5">
              <Download className="h-4 w-4" />
              Download PDF guide
            </Button>
            <Button
              size="sm"
              className="gap-1.5"
              render={<a href="mailto:info@Upskillenergy.com" />}
            >
              <Mail className="h-4 w-4" />
              info@Upskillenergy.com
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
