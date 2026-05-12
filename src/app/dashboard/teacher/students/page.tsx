'use client'

import { useState } from 'react'
import {
  percentageToGCSEGrade,
  percentageToGCSEGradeLabel,
  gcseGradeColor,
  predictedGradeColor,
  calculateWorkingAtGrade,
  calculateTargetGrade,
} from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'

interface Student {
  id: string
  name: string
  email: string
  group: string
  essaysSubmitted: number
  averageScore: number
  lastActive: string
  trend: 'up' | 'down' | 'stable'
}

const MOCK_GROUPS = ['All Classes', '10A English Lit', '10B English Lang', '11A English Lit']

const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    email: 'emma.t@school.edu',
    group: '10A English Lit',
    essaysSubmitted: 14,
    averageScore: 82,
    lastActive: '2026-03-23',
    trend: 'up',
  },
  {
    id: '2',
    name: 'Oliver Chen',
    email: 'oliver.c@school.edu',
    group: '10B English Lang',
    essaysSubmitted: 9,
    averageScore: 65,
    lastActive: '2026-03-23',
    trend: 'stable',
  },
  {
    id: '3',
    name: 'Amira Patel',
    email: 'amira.p@school.edu',
    group: '10A English Lit',
    essaysSubmitted: 12,
    averageScore: 77,
    lastActive: '2026-03-22',
    trend: 'up',
  },
  {
    id: '4',
    name: 'James Walker',
    email: 'james.w@school.edu',
    group: '10B English Lang',
    essaysSubmitted: 6,
    averageScore: 58,
    lastActive: '2026-03-20',
    trend: 'down',
  },
  {
    id: '5',
    name: 'Sophie Liu',
    email: 'sophie.l@school.edu',
    group: '11A English Lit',
    essaysSubmitted: 18,
    averageScore: 88,
    lastActive: '2026-03-23',
    trend: 'up',
  },
  {
    id: '6',
    name: 'Liam Roberts',
    email: 'liam.r@school.edu',
    group: '10A English Lit',
    essaysSubmitted: 7,
    averageScore: 61,
    lastActive: '2026-03-18',
    trend: 'down',
  },
  {
    id: '7',
    name: 'Chloe Martinez',
    email: 'chloe.m@school.edu',
    group: '11A English Lit',
    essaysSubmitted: 15,
    averageScore: 79,
    lastActive: '2026-03-22',
    trend: 'stable',
  },
  {
    id: '8',
    name: 'Daniel Kim',
    email: 'daniel.k@school.edu',
    group: '10B English Lang',
    essaysSubmitted: 4,
    averageScore: 52,
    lastActive: '2026-03-15',
    trend: 'down',
  },
]

const MOCK_STUDENT_ESSAYS = [
  { id: 'e1', title: 'An Inspector Calls: Responsibility', score: 85, date: '2026-03-20' },
  { id: 'e2', title: 'Macbeth: Power and Ambition', score: 78, date: '2026-03-15' },
  { id: 'e3', title: 'Poetry Anthology: Conflict', score: 82, date: '2026-03-10' },
]

function scoreColor(score: number): string {
  if (score >= 80) return 'text-green-500'
  if (score >= 60) return 'text-amber-500'
  return 'text-red-500'
}

function trendIcon(trend: 'up' | 'down' | 'stable') {
  if (trend === 'up')
    return (
      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    )
  if (trend === 'down')
    return (
      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    )
  return (
    <svg
      className="w-4 h-4 text-muted-foreground"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
  )
}

export default function StudentsPage() {
  const t = useT()
  const [selectedGroup, setSelectedGroup] = useState('All Classes')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null)
  const [inviteValue, setInviteValue] = useState('')

  const filteredStudents = MOCK_STUDENTS.filter((s) => {
    const matchesGroup = selectedGroup === 'All Classes' || s.group === selectedGroup
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesGroup && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">{t('teacher.students.title')}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t('teacher.students.subtitle')}</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary gap-2 self-start">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          {t('teacher.students.add_student')}
        </button>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <input
            type="text"
            placeholder={t('teacher.students.search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field"
          />
        </div>
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="input-field sm:w-56"
        >
          {MOCK_GROUPS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-3">
        {filteredStudents.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-muted-foreground">{t('teacher.students.empty')}</p>
          </div>
        ) : (
          filteredStudents.map((student) => (
            <div key={student.id} className="card">
              <div
                className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between cursor-pointer"
                onClick={() =>
                  setExpandedStudent(expandedStudent === student.id ? null : student.id)
                }
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {student.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.email} &middot; {student.group}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{student.essaysSubmitted}</p>
                    <p className="text-xs text-muted-foreground">
                      {t('teacher.students.col.essays')}
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className={`font-semibold ${gcseGradeColor(percentageToGCSEGrade(student.averageScore))}`}
                    >
                      {t('teacher.students.grade_prefix')}{' '}
                      {percentageToGCSEGrade(student.averageScore)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('teacher.students.col.working_at')}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {trendIcon(student.trend)}
                    <span className="text-xs text-muted-foreground">
                      {t('teacher.students.col.trend')}
                    </span>
                  </div>
                  <div className="text-center hidden sm:block">
                    <p className="text-xs text-muted-foreground">
                      {t('teacher.students.last_active')}{' '}
                      {new Date(student.lastActive).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted-foreground transition-transform ${expandedStudent === student.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {expandedStudent === student.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {t('teacher.students.recent_essays')}
                  </h3>
                  <ul className="space-y-2">
                    {MOCK_STUDENT_ESSAYS.map((essay) => (
                      <li
                        key={essay.id}
                        className="flex items-center justify-between rounded-lg bg-background px-4 py-2.5"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">{essay.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(essay.date).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                        <span className={`text-sm font-bold ${scoreColor(essay.score)}`}>
                          {percentageToGCSEGradeLabel(essay.score)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-2">
                    <button className="btn-outline text-xs px-3 py-1.5">
                      {t('teacher.students.view_profile')}
                    </button>
                    <button className="btn-accent text-xs px-3 py-1.5">
                      {t('teacher.students.send_message')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-card p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                {t('teacher.students.add_modal.title')}
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-muted-foreground hover:text-muted-foreground"
                aria-label={t('teacher.students.add_modal.close')}
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
            <p className="text-sm text-muted-foreground mb-4">
              {t('teacher.students.add_modal.help')}
            </p>
            <input
              type="text"
              placeholder={t('teacher.students.add_modal.input_placeholder')}
              value={inviteValue}
              onChange={(e) => setInviteValue(e.target.value)}
              className="input-field mb-4"
            />
            <select className="input-field mb-4">
              {MOCK_GROUPS.filter((g) => g !== 'All Classes').map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowAddModal(false)} className="btn-outline">
                {t('teacher.students.add_modal.cancel')}
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false)
                  setInviteValue('')
                }}
                className="btn-primary"
              >
                {t('teacher.students.add_modal.submit')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
