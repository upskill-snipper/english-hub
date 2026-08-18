'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { Plus, ClipboardList, Search, Loader2, AlertTriangle } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  AssignmentCard,
  API_TYPE_LABELS,
  type AssignmentCardData,
  type AssignmentCardStatus,
} from '@/components/school/AssignmentCard'
import { fetchAssignments, type ApiAssignment } from '@/lib/types/assignment'
import { useT } from '@/lib/i18n/use-t'

/* ── Adapter: server row -> card view ─────────────────────────────────── */

function apiToCard(a: ApiAssignment): AssignmentCardData {
  const status = a.status.toLowerCase()
  return {
    id: a.id,
    title: a.title,
    description: a.description,
    typeLabel: API_TYPE_LABELS[a.type] ?? a.type,
    status: (['draft', 'active', 'closed'].includes(status)
      ? status
      : 'draft') as AssignmentCardStatus,
    dueDate: a.dueDate,
    totalStudents: a.totalStudents,
    submittedCount: a.submissionsCount,
  }
}

/* ── Main Component ───────────────────────────────────────────────────── */

export default function AssignmentsListingPage() {
  const t = useT()
  const [assignments, setAssignments] = useState<AssignmentCardData[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState('active')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setLoadError(false)
    fetchAssignments()
      .then((rows) => {
        if (!cancelled) setAssignments(rows.map(apiToCard))
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  const filtered = useMemo(() => {
    let list = assignments

    // Tab filter ('all' -> no filter)
    if (tab === 'active' || tab === 'draft' || tab === 'closed') {
      list = list.filter((a) => a.status === tab)
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (a) => a.title.toLowerCase().includes(q) || (a.description ?? '').toLowerCase().includes(q),
      )
    }

    // Sort: active first by due date ascending, then most recent first
    return [...list].sort((a, b) => {
      if (a.status === 'active' && b.status === 'active') {
        const aDue = a.dueDate ? new Date(a.dueDate).getTime() : Number.MAX_SAFE_INTEGER
        const bDue = b.dueDate ? new Date(b.dueDate).getTime() : Number.MAX_SAFE_INTEGER
        return aDue - bDue
      }
      return 0
    })
  }, [assignments, tab, search])

  // Summary stats - derived from real submission counts only
  const activeCount = assignments.filter((a) => a.status === 'active').length
  const totalExpected = assignments.reduce((acc, a) => acc + a.totalStudents, 0)
  const totalSubmitted = assignments.reduce((acc, a) => acc + a.submittedCount, 0)
  const overallCompletion =
    totalExpected > 0 ? Math.round((totalSubmitted / totalExpected) * 100) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <ClipboardList className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              {t('school.assignments.title')}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {activeCount}{' '}
              {activeCount !== 1
                ? t('school.assignments.active_plural')
                : t('school.assignments.active_singular')}{' '}
              &middot; {overallCompletion}% {t('school.assignments.overall_completion')}
            </p>
          </div>
        </div>
        <Button render={<Link href="/school/assignments/create" />}>
          <Plus className="h-4 w-4" />
          {t('school.assignments.new')}
        </Button>
      </div>

      <Separator className="mb-6" />

      {/* Error state - never placeholder assignments */}
      {loadError ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <AlertTriangle className="mb-3 h-10 w-10 text-muted-foreground" />
            <h3 className="mb-1 font-semibold text-foreground">
              {t('school.classes.error.title')}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              We could not load your assignments.
            </p>
            <Button variant="outline" onClick={() => setReloadKey((k) => k + 1)}>
              {t('school.classes.error.retry')}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Search + Tabs */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('school.assignments.search_placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            <Tabs value={tab} onValueChange={(v) => v && setTab(v)}>
              <TabsList className="bg-transparent gap-1.5 p-0">
                <TabsTrigger
                  value="active"
                  className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
                >
                  {t('school.assignments.tab.active')}
                </TabsTrigger>
                <TabsTrigger
                  value="draft"
                  className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
                >
                  {t('school.assignments.tab.drafts')}
                </TabsTrigger>
                <TabsTrigger
                  value="closed"
                  className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
                >
                  {t('school.assignments.tab.closed')}
                </TabsTrigger>
                <TabsTrigger
                  value="all"
                  className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40"
                >
                  {t('school.assignments.tab.all')}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Assignment grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <ClipboardList className="mb-3 h-10 w-10 text-muted-foreground" />
                <h3 className="mb-1 font-semibold text-foreground">
                  {search
                    ? t('school.assignments.empty.no_match')
                    : t('school.assignments.empty.none_yet')}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {search
                    ? t('school.assignments.empty.search_hint')
                    : t('school.assignments.empty.create_hint')}
                </p>
                {!search && (
                  <Button render={<Link href="/school/assignments/create" />}>
                    <Plus className="h-4 w-4" />
                    {t('school.assignments.create_cta')}
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
