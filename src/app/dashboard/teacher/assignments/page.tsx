'use client'

import { useState } from 'react'
import { useT } from '@/lib/i18n/use-t'

interface Assignment {
  id: string
  title: string
  prompt: string
  subject: string
  group: string
  deadline: string
  totalStudents: number
  submitted: number
  graded: number
  status: 'active' | 'closed' | 'draft'
}

const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: 'a1',
    title: 'An Inspector Calls: Social Responsibility',
    prompt:
      "How does Priestley present ideas about social responsibility in 'An Inspector Calls'? Write a structured essay using evidence from the text.",
    subject: 'English Literature',
    group: '10A English Lit',
    deadline: '2026-03-28',
    totalStudents: 16,
    submitted: 12,
    graded: 8,
    status: 'active',
  },
  {
    id: 'a2',
    title: 'Persuasive Writing: Screen Time',
    prompt:
      'Write a persuasive article for a school newspaper arguing that screen time limits should be enforced for teenagers. Use rhetorical techniques.',
    subject: 'English Language',
    group: '10B English Lang',
    deadline: '2026-03-25',
    totalStudents: 14,
    submitted: 14,
    graded: 14,
    status: 'closed',
  },
  {
    id: 'a3',
    title: 'Macbeth: Ambition Essay',
    prompt:
      "Starting with the extract, how does Shakespeare present ambition in 'Macbeth'? Refer to the whole play in your answer.",
    subject: 'English Literature',
    group: '11A English Lit',
    deadline: '2026-04-01',
    totalStudents: 12,
    submitted: 5,
    graded: 2,
    status: 'active',
  },
  {
    id: 'a4',
    title: 'Descriptive Writing: Urban Landscape',
    prompt:
      'Describe a busy city street at dawn. Focus on sensory language and varied sentence structures.',
    subject: 'English Language',
    group: '10B English Lang',
    deadline: '2026-04-05',
    totalStudents: 14,
    submitted: 0,
    graded: 0,
    status: 'draft',
  },
]

const MOCK_GROUPS = ['10A English Lit', '10B English Lang', '11A English Lit']

function statusBadge(status: 'active' | 'closed' | 'draft') {
  if (status === 'active') return 'bg-green-500/10 text-green-600'
  if (status === 'closed') return 'bg-muted text-muted-foreground'
  return 'bg-amber-500/10 text-amber-600'
}

export default function AssignmentsPage() {
  const t = useT()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'closed' | 'draft'>('all')
  const [newTitle, setNewTitle] = useState('')
  const [newPrompt, setNewPrompt] = useState('')
  const [newSubject, setNewSubject] = useState('English Literature')
  const [newGroup, setNewGroup] = useState(MOCK_GROUPS[0])
  const [newDeadline, setNewDeadline] = useState('')

  const filteredAssignments = MOCK_ASSIGNMENTS.filter(
    (a) => filterStatus === 'all' || a.status === filterStatus,
  )

  const handleCreate = () => {
    setShowCreateModal(false)
    setNewTitle('')
    setNewPrompt('')
    setNewDeadline('')
  }

  const statusLabel = (status: 'active' | 'closed' | 'draft') => {
    if (status === 'active') return t('teacher.assignments.status.active')
    if (status === 'closed') return t('teacher.assignments.status.closed')
    return t('teacher.assignments.status.draft')
  }

  const filterLabel = (s: 'all' | 'active' | 'closed' | 'draft') => {
    if (s === 'all') return t('teacher.assignments.filter.all')
    if (s === 'active') return t('teacher.assignments.status.active')
    if (s === 'closed') return t('teacher.assignments.status.closed')
    return t('teacher.assignments.status.draft')
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">{t('teacher.assignments.title')}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t('teacher.assignments.subtitle')}</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="btn-primary gap-2 self-start">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          {t('teacher.assignments.new')}
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {(['all', 'active', 'closed', 'draft'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filterStatus === s ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:bg-muted'}`}
          >
            {filterLabel(s)}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredAssignments.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-muted-foreground">{t('teacher.assignments.empty')}</p>
          </div>
        ) : (
          filteredAssignments.map((assignment) => (
            <div key={assignment.id} className="card">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">{assignment.title}</h3>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge(assignment.status)}`}
                    >
                      {statusLabel(assignment.status)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {assignment.prompt}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{assignment.subject}</span>
                    <span>&middot;</span>
                    <span>{assignment.group}</span>
                    <span>&middot;</span>
                    <span>
                      {t('teacher.assignments.due')}{' '}
                      {new Date(assignment.deadline).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">
                      {assignment.submitted}/{assignment.totalStudents}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('teacher.assignments.submitted')}
                    </p>
                    <div className="mt-1 h-1.5 w-20 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{
                          width: `${(assignment.submitted / assignment.totalStudents) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">
                      {assignment.graded}/{assignment.submitted}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('teacher.assignments.graded')}
                    </p>
                    <div className="mt-1 h-1.5 w-20 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{
                          width:
                            assignment.submitted > 0
                              ? `${(assignment.graded / assignment.submitted) * 100}%`
                              : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-2">
                <button className="btn-outline text-xs px-3 py-1.5">
                  {t('teacher.assignments.action.view_submissions')}
                </button>
                {assignment.status === 'active' && (
                  <button className="btn-accent text-xs px-3 py-1.5">
                    {t('teacher.assignments.action.bulk_feedback')}
                  </button>
                )}
                {assignment.status === 'draft' && (
                  <button className="btn-primary text-xs px-3 py-1.5">
                    {t('teacher.assignments.action.publish')}
                  </button>
                )}
                <button className="text-xs px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  {t('teacher.assignments.action.edit')}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-xl bg-card p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                {t('teacher.assignments.create.title')}
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-muted-foreground hover:text-muted-foreground"
                aria-label={t('teacher.assignments.create.close')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="assign-title"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t('teacher.assignments.create.label.title')}
                </label>
                <input
                  id="assign-title"
                  type="text"
                  placeholder={t('teacher.assignments.create.placeholder.title')}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="assign-prompt"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t('teacher.assignments.create.label.prompt')}
                </label>
                <textarea
                  id="assign-prompt"
                  rows={4}
                  placeholder={t('teacher.assignments.create.placeholder.prompt')}
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  className="input-field resize-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="assign-subject"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    {t('teacher.assignments.create.label.subject')}
                  </label>
                  <select
                    id="assign-subject"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="input-field"
                  >
                    <option>English Literature</option>
                    <option>English Language</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="assign-group"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    {t('teacher.assignments.create.label.group')}
                  </label>
                  <select
                    id="assign-group"
                    value={newGroup}
                    onChange={(e) => setNewGroup(e.target.value)}
                    className="input-field"
                  >
                    {MOCK_GROUPS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="assign-deadline"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t('teacher.assignments.create.label.deadline')}
                </label>
                <input
                  id="assign-deadline"
                  type="date"
                  value={newDeadline}
                  onChange={(e) => setNewDeadline(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowCreateModal(false)} className="btn-outline">
                {t('teacher.assignments.create.cancel')}
              </button>
              <button onClick={handleCreate} className="btn-primary">
                {t('teacher.assignments.create.submit')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
