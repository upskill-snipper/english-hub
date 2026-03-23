'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ClipboardList,
  Plus,
  Loader2,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import type {
  Assignment,
  AssignmentType,
  AssignmentStatus,
  AssignmentSubmission,
} from '@/lib/types/assignment'
import {
  addAssignment,
  ASSIGNMENT_TYPE_LABELS,
} from '@/lib/types/assignment'

/* ── Mock data for classes and resources ───────────────────────────────── */
// In production these would come from API/store; using localStorage stubs for now

const MOCK_CLASSES = [
  { id: 'class-1', name: 'Year 10 English' },
  { id: 'class-2', name: 'Year 11 Literature' },
  { id: 'class-3', name: 'Year 9 Language' },
]

const MOCK_RESOURCES: Record<string, { id: string; name: string }[]> = {
  module: [
    { id: 'mod-1', name: 'Shakespeare: Macbeth' },
    { id: 'mod-2', name: 'Poetry Analysis' },
    { id: 'mod-3', name: 'Creative Writing Fundamentals' },
  ],
  mock_exam: [
    { id: 'mock-1', name: 'AQA Paper 1 Mock' },
    { id: 'mock-2', name: 'Edexcel Paper 2 Mock' },
  ],
  quiz: [
    { id: 'quiz-1', name: 'Grammar Basics Quiz' },
    { id: 'quiz-2', name: 'Comprehension Skills Quiz' },
  ],
  flashcards: [
    { id: 'fc-1', name: 'Key Literary Terms' },
    { id: 'fc-2', name: 'Vocabulary Set A' },
  ],
  essay: [],
  custom: [],
}

const MOCK_STUDENTS: Record<string, { id: string; name: string }[]> = {
  'class-1': [
    { id: 'stu-1', name: 'Alice Johnson' },
    { id: 'stu-2', name: 'Ben Carter' },
    { id: 'stu-3', name: 'Charlie Davis' },
    { id: 'stu-4', name: 'Diana Evans' },
    { id: 'stu-5', name: 'Ethan Foster' },
  ],
  'class-2': [
    { id: 'stu-6', name: 'Fiona Green' },
    { id: 'stu-7', name: 'George Hill' },
    { id: 'stu-8', name: 'Hannah Irving' },
  ],
  'class-3': [
    { id: 'stu-9', name: 'Isaac Jones' },
    { id: 'stu-10', name: 'Julia King' },
    { id: 'stu-11', name: 'Kevin Lee' },
    { id: 'stu-12', name: 'Laura Martin' },
  ],
}

/* ── Component ─────────────────────────────────────────────────────────── */

export default function CreateAssignmentPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  // Form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [classId, setClassId] = useState('')
  const [type, setType] = useState<AssignmentType | ''>('')
  const [resourceId, setResourceId] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState<AssignmentStatus>('active')

  const availableResources = type ? (MOCK_RESOURCES[type] ?? []) : []
  const hasResources = availableResources.length > 0

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !classId || !type || !dueDate) return

    setSaving(true)

    const students = MOCK_STUDENTS[classId] ?? []
    const submissions: AssignmentSubmission[] = students.map((s) => ({
      studentId: s.id,
      studentName: s.name,
      status: 'pending' as const,
    }))

    const assignment: Assignment = {
      id: crypto.randomUUID(),
      classId,
      title: title.trim(),
      description: description.trim(),
      type: type as AssignmentType,
      resourceId: resourceId || undefined,
      dueDate: new Date(dueDate).toISOString(),
      createdAt: new Date().toISOString(),
      status,
      submissions,
    }

    addAssignment(assignment)

    // Brief delay for UX
    setTimeout(() => {
      router.push('/school/assignments')
    }, 300)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Back link */}
      <Button
        variant="ghost"
        size="sm"
        className="mb-4 gap-1.5 text-muted-foreground"
        render={<Link href="/school/assignments" />}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Assignments
      </Button>

      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <ClipboardList className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Create Assignment
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Set up a new assignment for your class.
          </p>
        </div>
      </div>

      <Separator className="mb-6" />

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Assignment Details</CardTitle>
            <CardDescription>
              Fill in the details below to create a new assignment.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="e.g. Macbeth Act 3 Essay"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description / Instructions */}
            <div className="space-y-2">
              <Label htmlFor="description">Instructions</Label>
              <Textarea
                id="description"
                placeholder="Add instructions or context for your students..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Class */}
              <div className="space-y-2">
                <Label>Class *</Label>
                <Select value={classId} onValueChange={(v) => setClassId(v ?? '')}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                  <SelectContent>
                    {MOCK_CLASSES.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type */}
              <div className="space-y-2">
                <Label>Type *</Label>
                <Select
                  value={type}
                  onValueChange={(v) => {
                    setType((v ?? '') as AssignmentType | '')
                    setResourceId('')
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.entries(ASSIGNMENT_TYPE_LABELS) as [AssignmentType, string][]).map(
                      ([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Linked Resource */}
            {type && hasResources && (
              <div className="space-y-2">
                <Label>Linked Resource</Label>
                <Select value={resourceId} onValueChange={(v) => setResourceId(v ?? '')}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Link a resource (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableResources.map((r) => (
                      <SelectItem key={r.id} value={r.id}>
                        {r.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Optionally link a {ASSIGNMENT_TYPE_LABELS[type as AssignmentType]?.toLowerCase()} to this assignment.
                </p>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Due Date */}
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input
                  id="dueDate"
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={status}
                  onValueChange={(v) => setStatus((v ?? 'active') as AssignmentStatus)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Draft assignments are not visible to students.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            render={<Link href="/school/assignments" />}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={saving || !title.trim() || !classId || !type || !dueDate}
          >
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Create Assignment
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
