'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ClipboardList, Plus, Loader2, AlertTriangle } from 'lucide-react'
import { toast } from 'sonner'

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
import { createAssignment } from '@/lib/types/assignment'
import { useT } from '@/lib/i18n/use-t'

/* ── API contract ──────────────────────────────────────────────────────────
 * Class list: GET /api/school/classes -> { classes: [{ id, name, ... }] }
 * Create:     POST /api/school/assignments with
 *   { class_id, title, description?, type, due_date?, status? }
 * where type is HOMEWORK | CLASSWORK | ASSESSMENT | REVISION and status is
 * DRAFT | ACTIVE (server-validated values).
 * ────────────────────────────────────────────────────────────────────────── */

interface SchoolClass {
  id: string
  name: string
  year_group?: string | null
}

const API_TYPES = ['HOMEWORK', 'CLASSWORK', 'ASSESSMENT', 'REVISION'] as const
type ApiAssignmentType = (typeof API_TYPES)[number]

const TYPE_LABELS: Record<ApiAssignmentType, string> = {
  HOMEWORK: 'Homework',
  CLASSWORK: 'Classwork',
  ASSESSMENT: 'Assessment',
  REVISION: 'Revision',
}

export default function CreateAssignmentPage() {
  const t = useT()
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  // Class list state
  const [classes, setClasses] = useState<SchoolClass[]>([])
  const [classesLoading, setClassesLoading] = useState(true)
  const [classesError, setClassesError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  // Form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [classId, setClassId] = useState('')
  const [type, setType] = useState<ApiAssignmentType | ''>('')
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState<'DRAFT' | 'ACTIVE'>('ACTIVE')

  useEffect(() => {
    let cancelled = false
    setClassesLoading(true)
    setClassesError(false)
    fetch('/api/school/classes')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((json: { classes?: SchoolClass[] }) => {
        if (!cancelled) setClasses(json.classes ?? [])
      })
      .catch(() => {
        if (!cancelled) setClassesError(true)
      })
      .finally(() => {
        if (!cancelled) setClassesLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !classId || !type || !dueDate) return

    setSaving(true)
    try {
      await createAssignment({
        class_id: classId,
        title: title.trim(),
        description: description.trim() || undefined,
        type,
        due_date: new Date(dueDate).toISOString(),
        status,
      })
      router.push('/school/assignments')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to create the assignment')
      setSaving(false)
    }
  }

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* Back link */}
      <Button
        variant="ghost"
        size="sm"
        className="mb-4 gap-1.5 text-muted-foreground"
        render={<Link href="/school/assignments" />}
      >
        <ArrowLeft className="h-4 w-4" />
        {t('school.assignments.back')}
      </Button>

      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <ClipboardList className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t('school.assignments.create.title')}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('school.assignments.create.subtitle')}
          </p>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Class-list error: cannot set work without a real class */}
      {classesError && (
        <Card className="mb-6 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-10 text-center">
            <AlertTriangle className="mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              We could not load your classes, so work cannot be set yet.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => setReloadKey((k) => k + 1)}
            >
              {t('school.classes.error.retry')}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* No classes yet: honest empty state with a route to fix it */}
      {!classesError && !classesLoading && classes.length === 0 && (
        <Card className="mb-6 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-10 text-center">
            <ClipboardList className="mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Your school has no classes yet. Create a class first, then set work for it.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              render={<Link href="/school/classes" />}
            >
              {t('school.classes.empty.cta')}
            </Button>
          </CardContent>
        </Card>
      )}

      {!classesError && (classesLoading || classes.length > 0) && (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>{t('school.assignments.create.form_title')}</CardTitle>
              <CardDescription>{t('school.assignments.create.form_subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">{t('school.assignments.field.title')} *</Label>
                <Input
                  id="title"
                  placeholder={t('school.assignments.field.title_placeholder')}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Description / Instructions */}
              <div className="space-y-2">
                <Label htmlFor="description">{t('school.assignments.field.instructions')}</Label>
                <Textarea
                  id="description"
                  placeholder={t('school.assignments.field.instructions_placeholder')}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Class - real classes from the API */}
                <div className="space-y-2">
                  <Label>{t('school.assignments.field.class')} *</Label>
                  <Select
                    value={classId}
                    onValueChange={(v) => setClassId(v ?? '')}
                    disabled={classesLoading}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={
                          classesLoading ? '…' : t('school.assignments.field.class_placeholder')
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls.id} value={cls.id}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Type - the values the API validates */}
                <div className="space-y-2">
                  <Label>{t('school.assignments.field.type')} *</Label>
                  <Select
                    value={type}
                    onValueChange={(v) => setType((v ?? '') as ApiAssignmentType | '')}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t('school.assignments.field.type_placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {API_TYPES.map((value) => (
                        <SelectItem key={value} value={value}>
                          {TYPE_LABELS[value]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Due Date */}
                <div className="space-y-2">
                  <Label htmlFor="dueDate">{t('school.assignments.field.due_date')} *</Label>
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
                  <Label>{t('school.assignments.field.status')}</Label>
                  <Select
                    value={status}
                    onValueChange={(v) => setStatus((v ?? 'ACTIVE') as 'DRAFT' | 'ACTIVE')}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DRAFT">{t('school.assignments.status.draft')}</SelectItem>
                      <SelectItem value="ACTIVE">
                        {t('school.assignments.status.active')}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    {t('school.assignments.field.status_hint')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-end gap-3">
            <Button type="button" variant="outline" render={<Link href="/school/assignments" />}>
              {t('school.assignments.action.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={saving || !title.trim() || !classId || !type || !dueDate}
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t('school.assignments.action.creating')}
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  {t('school.assignments.create_cta')}
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
