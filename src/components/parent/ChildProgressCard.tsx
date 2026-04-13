'use client'

import { BookOpen, Target, TrendingUp, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// Supabase: replace mock props with real child record from database
export interface ChildProgressCardProps {
  name: string
  yearGroup?: string
  school?: string
  workingAtGrade?: number
  predictedGrade?: number
  targetGrade?: number
  overallProgress?: number
  modulesCompleted?: number
  recentScoreAverage?: number | null
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function ChildProgressCard({
  name,
  yearGroup,
  school,
  workingAtGrade,
  predictedGrade,
  targetGrade,
  overallProgress = 0,
  modulesCompleted = 0,
  recentScoreAverage = null,
}: ChildProgressCardProps) {
  const initials = getInitials(name) || 'EH'
  const clampedProgress = Math.max(0, Math.min(100, Math.round(overallProgress)))

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        {/* Top row: avatar + grades */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarFallback className="bg-primary/10 text-lg font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-foreground">{name}</h2>
              {(yearGroup || school) && (
                <p className="truncate text-sm text-muted-foreground">
                  {[yearGroup, school].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </div>

          {(workingAtGrade != null || predictedGrade != null || targetGrade != null) && (
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              {workingAtGrade != null && (
                <div className="text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Now
                  </p>
                  <p className="text-2xl font-extrabold text-foreground">
                    {workingAtGrade}
                  </p>
                </div>
              )}
              {predictedGrade != null && (
                <>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Predicted
                    </p>
                    <p className="text-2xl font-extrabold text-primary">
                      {predictedGrade}
                    </p>
                  </div>
                </>
              )}
              {targetGrade != null && (
                <>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Target
                    </p>
                    <p className="text-2xl font-extrabold text-muted-foreground">
                      {targetGrade}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Overall progress bar */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">
              Overall revision progress
            </span>
            <span className="text-sm font-bold text-foreground">{clampedProgress}%</span>
          </div>
          <Progress value={clampedProgress} className="h-2" />
        </div>

        {/* Small stat row */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
            <BookOpen className="h-4 w-4 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="truncate text-xs text-muted-foreground">Modules</p>
              <p className="text-sm font-bold text-foreground">{modulesCompleted}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
            <Trophy className="h-4 w-4 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="truncate text-xs text-muted-foreground">Avg score</p>
              <p className="text-sm font-bold text-foreground">
                {recentScoreAverage != null ? `${recentScoreAverage}%` : '—'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
            <TrendingUp className="h-4 w-4 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="truncate text-xs text-muted-foreground">Trend</p>
              <p className="text-sm font-bold text-foreground">
                {recentScoreAverage != null && recentScoreAverage >= 60 ? 'Up' : 'Steady'}
              </p>
            </div>
          </div>
        </div>

        {targetGrade != null && predictedGrade != null && predictedGrade < targetGrade && (
          <div className="mt-5 flex items-start gap-2 rounded-lg border border-border bg-primary/10 p-3 text-sm text-primary">
            <Target className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {name.split(' ')[0]} is {targetGrade - predictedGrade} grade
              {targetGrade - predictedGrade === 1 ? '' : 's'} below target — see the Progress page for
              suggested focus areas.
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
