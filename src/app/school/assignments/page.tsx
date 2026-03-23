'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Plus,
  ClipboardList,
  Search,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { AssignmentCard } from '@/components/school/AssignmentCard'
import type { Assignment } from '@/lib/types/assignment'
import { getAssignments } from '@/lib/types/assignment'

/* ── Main Component ───────────────────────────────────────────────────── */

export default function AssignmentsListingPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState('active')

  useEffect(() => {
    setAssignments(getAssignments())
    setLoading(false)
  }, [])

  const filtered = useMemo(() => {
    let list = assignments

    // Tab filter
    if (tab === 'active') {
      list = list.filter((a) => a.status === 'active')
    } else if (tab === 'draft') {
      list = list.filter((a) => a.status === 'draft')
    } else if (tab === 'closed') {
      list = list.filter((a) => a.status === 'closed')
    }
    // 'all' -> no filter

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q),
      )
    }

    // Sort: active first by due date ascending, then others by createdAt desc
    return list.sort((a, b) => {
      if (a.status === 'active' && b.status === 'active') {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
  }, [assignments, tab, search])

  // Summary stats
  const activeCount = assignments.filter((a) => a.status === 'active').length
  const totalSubmissions = assignments.reduce((acc, a) => acc + a.submissions.length, 0)
  const totalSubmitted = assignments.reduce(
    (acc, a) =>
      acc + a.submissions.filter((s) => s.status === 'submitted' || s.status === 'graded').length,
    0,
  )
  const overallCompletion =
    totalSubmissions > 0 ? Math.round((totalSubmitted / totalSubmissions) * 100) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <ClipboardList className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              Assignments
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {activeCount} active assignment{activeCount !== 1 ? 's' : ''} &middot;{' '}
              {overallCompletion}% overall completion
            </p>
          </div>
        </div>
        <Button render={<Link href="/school/assignments/create" />}>
          <Plus className="h-4 w-4" />
          New Assignment
        </Button>
      </div>

      <Separator className="mb-6" />

      {/* Search + Tabs */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assignments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <Tabs value={tab} onValueChange={(v) => v && setTab(v)}>
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
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
              {search ? 'No matching assignments' : 'No assignments yet'}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {search
                ? 'Try adjusting your search terms.'
                : 'Create your first assignment to start tracking student work.'}
            </p>
            {!search && (
              <Button render={<Link href="/school/assignments/create" />}>
                <Plus className="h-4 w-4" />
                Create Assignment
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
