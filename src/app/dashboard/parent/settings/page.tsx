'use client'

import { useState } from 'react'
import { useT } from '@/lib/i18n/use-t'

/* ─── Mock data (replace with real data fetching) ────────────────── */

interface LinkedStudent {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
  school: string
  plan: string
  planStatus: 'Active' | 'Cancelled' | 'Trial'
  targetGrades: { subject: string; grade: string }[]
}

const MOCK_LINKED_STUDENTS: LinkedStudent[] = [
  {
    id: 's1',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex@example.com',
    age: 15,
    school: 'Westfield Academy',
    plan: 'Monthly',
    planStatus: 'Active',
    targetGrades: [
      { subject: 'English Literature', grade: '7' },
      { subject: 'English Language', grade: '7' },
    ],
  },
  {
    id: 's2',
    firstName: 'Emma',
    lastName: 'Johnson',
    email: 'emma@example.com',
    age: 14,
    school: 'Westfield Academy',
    plan: 'Monthly',
    planStatus: 'Active',
    targetGrades: [
      { subject: 'English Literature', grade: '6' },
      { subject: 'English Language', grade: '6' },
    ],
  },
]

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const REPORT_TIMES = [
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
]

const GRADE_OPTIONS = ['9', '8', '7', '6', '5', '4', '3', '2', '1']

/* ─── Inline SVG icons ─────────────────────────────────────────────── */

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-5 w-5'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-5 w-5'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-5 w-5'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function ParentSettingsPage() {
  const t = useT()
  // Notification preferences
  const [weeklyReportEmail, setWeeklyReportEmail] = useState(true)
  const [lowScoreAlert, setLowScoreAlert] = useState(true)
  const [inactivityAlert, setInactivityAlert] = useState(true)
  const [milestoneAlerts, setMilestoneAlerts] = useState(false)

  // Report schedule
  const [reportDay, setReportDay] = useState('Sunday')
  const [reportTime, setReportTime] = useState('09:00')

  // Linked students state
  const [students, setStudents] = useState<LinkedStudent[]>(MOCK_LINKED_STUDENTS)
  const [showAddForm, setShowAddForm] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviting, setInviting] = useState(false)
  const [inviteError, setInviteError] = useState('')

  // Target grades editing
  const [editingGrades, setEditingGrades] = useState<string | null>(null)
  const [gradeEdits, setGradeEdits] = useState<Record<string, string>>({})

  // Save state
  const [savingNotifications, setSavingNotifications] = useState(false)
  const [savingSchedule, setSavingSchedule] = useState(false)
  const [savingGrades, setSavingGrades] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  function showSuccess(message: string) {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  async function handleSaveNotifications() {
    setSavingNotifications(true)
    try {
      // Stub: PUT /api/parent/notifications — simulated until endpoint exists
      await new Promise((resolve) => setTimeout(resolve, 500))
      showSuccess('Notification preferences saved.')
    } finally {
      setSavingNotifications(false)
    }
  }

  async function handleSaveSchedule() {
    setSavingSchedule(true)
    try {
      // Stub: PUT /api/parent/report-schedule — simulated until endpoint exists
      await new Promise((resolve) => setTimeout(resolve, 500))
      showSuccess('Report schedule saved.')
    } finally {
      setSavingSchedule(false)
    }
  }

  async function handleInviteStudent() {
    setInviteError('')
    if (!inviteEmail.trim()) {
      setInviteError('Please enter an email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inviteEmail)) {
      setInviteError('Please enter a valid email address.')
      return
    }

    setInviting(true)
    try {
      // Stub: POST /api/parent/invite-student — simulated until endpoint exists
      await new Promise((resolve) => setTimeout(resolve, 1000))
      showSuccess(`Invitation sent to ${inviteEmail}. The student must accept the link request.`)
      setInviteEmail('')
      setShowAddForm(false)
    } finally {
      setInviting(false)
    }
  }

  async function handleRemoveStudent(studentId: string) {
    if (
      !confirm(
        'Are you sure you want to unlink this student? You will no longer be able to view their progress.',
      )
    ) {
      return
    }
    // Stub: DELETE /api/parent/students/:id — currently only removes from local state
    setStudents((prev) => prev.filter((s) => s.id !== studentId))
    showSuccess('Student unlinked successfully.')
  }

  function startEditingGrades(student: LinkedStudent) {
    const edits: Record<string, string> = {}
    student.targetGrades.forEach((tg) => {
      edits[tg.subject] = tg.grade
    })
    setGradeEdits(edits)
    setEditingGrades(student.id)
  }

  async function handleSaveGrades(studentId: string) {
    setSavingGrades(true)
    try {
      // Stub: PUT /api/parent/students/:id/grades — simulated until endpoint exists
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStudents((prev) =>
        prev.map((s) => {
          if (s.id !== studentId) return s
          return {
            ...s,
            targetGrades: s.targetGrades.map((tg) => ({
              ...tg,
              grade: gradeEdits[tg.subject] || tg.grade,
            })),
          }
        }),
      )
      setEditingGrades(null)
      showSuccess('Target grades updated.')
    } finally {
      setSavingGrades(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* ── Header ───────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          {t('dashboard.parent_settings.title')}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('dashboard.parent_settings.subtitle')}
        </p>
      </div>

      {/* ── Success toast ────────────────────────────────────── */}
      {successMessage && (
        <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-success px-4 py-3 text-sm font-medium text-white shadow-lg">
          {successMessage}
        </div>
      )}

      {/* ── Free access note ─────────────────────────────────── */}
      <div className="card bg-primary/10 border-primary/20">
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-accent mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-semibold text-primary">
              {t('dashboard.parent_settings.free_access_title')}
            </p>
            <p className="mt-1 text-sm text-primary">
              {t('dashboard.parent_settings.free_access_desc')}
            </p>
          </div>
        </div>
      </div>

      {/* ── Email notification preferences ───────────────────── */}
      <section className="card" aria-labelledby="notifications-heading">
        <h2 id="notifications-heading" className="text-lg font-semibold text-foreground">
          {t('dashboard.parent_settings.notifications_title')}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('dashboard.parent_settings.notifications_desc')}
        </p>

        <div className="mt-6 space-y-5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={weeklyReportEmail}
              onChange={(e) => setWeeklyReportEmail(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('dashboard.parent_settings.notif_weekly_label')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('dashboard.parent_settings.notif_weekly_desc')}
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={lowScoreAlert}
              onChange={(e) => setLowScoreAlert(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('dashboard.parent_settings.notif_low_score_label')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('dashboard.parent_settings.notif_low_score_desc')}
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={inactivityAlert}
              onChange={(e) => setInactivityAlert(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('dashboard.parent_settings.notif_inactivity_label')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('dashboard.parent_settings.notif_inactivity_desc')}
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={milestoneAlerts}
              onChange={(e) => setMilestoneAlerts(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('dashboard.parent_settings.notif_milestone_label')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('dashboard.parent_settings.notif_milestone_desc')}
              </p>
            </div>
          </label>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleSaveNotifications}
            disabled={savingNotifications}
            className="btn-primary"
          >
            {savingNotifications
              ? t('dashboard.parent_settings.saving')
              : t('dashboard.parent_settings.save_notifications')}
          </button>
        </div>
      </section>

      {/* ── Weekly report schedule ────────────────────────────── */}
      <section className="card" aria-labelledby="schedule-heading">
        <h2 id="schedule-heading" className="text-lg font-semibold text-foreground">
          {t('dashboard.parent_settings.schedule_title')}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('dashboard.parent_settings.schedule_desc')}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-md">
          <div>
            <label htmlFor="report-day" className="block text-sm font-medium text-foreground">
              {t('dashboard.parent_settings.schedule_day_label')}
            </label>
            <select
              id="report-day"
              value={reportDay}
              onChange={(e) => setReportDay(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            >
              {DAYS_OF_WEEK.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="report-time" className="block text-sm font-medium text-foreground">
              {t('dashboard.parent_settings.schedule_time_label')}
            </label>
            <select
              id="report-time"
              value={reportTime}
              onChange={(e) => setReportTime(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-border bg-card px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            >
              {REPORT_TIMES.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleSaveSchedule}
            disabled={savingSchedule}
            className="btn-primary"
          >
            {savingSchedule
              ? t('dashboard.parent_settings.saving')
              : t('dashboard.parent_settings.save_schedule')}
          </button>
        </div>
      </section>

      {/* ── Linked students ──────────────────────────────────── */}
      <section className="card" aria-labelledby="students-heading">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="students-heading" className="text-lg font-semibold text-foreground">
              {t('dashboard.parent_settings.students_title')}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('dashboard.parent_settings.students_desc')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
            {t('dashboard.parent_settings.add_student_btn')}
          </button>
        </div>

        {/* Add student form */}
        {showAddForm && (
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-4">
            <h3 className="text-sm font-semibold text-foreground">
              {t('dashboard.parent_settings.link_student_title')}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {t('dashboard.parent_settings.link_student_desc')}
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => {
                  setInviteEmail(e.target.value)
                  setInviteError('')
                }}
                placeholder="student@example.com"
                className="flex-1 rounded-lg border border-border px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleInviteStudent}
                  disabled={inviting}
                  className="btn-primary text-sm"
                >
                  {inviting
                    ? t('dashboard.parent_settings.sending')
                    : t('dashboard.parent_settings.send_invite_btn')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setInviteEmail('')
                    setInviteError('')
                  }}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {t('dashboard.parent_settings.cancel_btn')}
                </button>
              </div>
            </div>
            {inviteError && <p className="mt-2 text-xs text-warn">{inviteError}</p>}
          </div>
        )}

        {/* Student list */}
        <div className="mt-6 space-y-4">
          {students.map((student) => (
            <div key={student.id} className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {student.firstName} {student.lastName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {student.email} &middot; Age {student.age} &middot; {student.school}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          student.planStatus === 'Active'
                            ? 'bg-success-50 text-success-700'
                            : student.planStatus === 'Trial'
                              ? 'bg-yellow-500/10 text-yellow-700'
                              : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {student.plan} - {student.planStatus}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveStudent(student.id)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-warn-50 hover:text-warn transition-colors"
                  title="Unlink student"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>

              {/* Target grades */}
              <div className="mt-4 border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">
                    {t('dashboard.parent_settings.target_grades')}
                  </h4>
                  {editingGrades === student.id ? (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveGrades(student.id)}
                        disabled={savingGrades}
                        className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white hover:bg-primary/90 disabled:opacity-50 transition-colors"
                      >
                        {savingGrades
                          ? t('dashboard.parent_settings.saving')
                          : t('dashboard.parent_settings.save_btn')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingGrades(null)}
                        className="rounded-lg border border-border px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors"
                      >
                        {t('dashboard.parent_settings.cancel_btn')}
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => startEditingGrades(student)}
                      className="text-xs font-medium text-accent hover:text-primary transition-colors"
                    >
                      {t('dashboard.parent_settings.edit_targets')}
                    </button>
                  )}
                </div>

                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {student.targetGrades.map((tg) => (
                    <div
                      key={tg.subject}
                      className="flex items-center justify-between rounded-lg bg-muted px-3 py-2"
                    >
                      <span className="text-sm text-foreground">{tg.subject}</span>
                      {editingGrades === student.id ? (
                        <select
                          value={gradeEdits[tg.subject] || tg.grade}
                          onChange={(e) =>
                            setGradeEdits((prev) => ({ ...prev, [tg.subject]: e.target.value }))
                          }
                          className="rounded border border-border bg-card px-2 py-1 text-sm font-bold text-primary focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                          {GRADE_OPTIONS.map((g) => (
                            <option key={g} value={g}>
                              Grade {g}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className="text-sm font-bold text-primary">Grade {tg.grade}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {students.length === 0 && (
            <div className="text-center py-8">
              <UserIcon className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">
                {t('dashboard.parent_settings.no_students')}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t('dashboard.parent_settings.no_students_hint')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
