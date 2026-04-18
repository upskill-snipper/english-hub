'use client'

import { useMemo, useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  GraduationCap,
  HelpCircle,
  Layers,
  Printer,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import type { ResourceRecommendation, WeeklyPlan } from '@/lib/analytics-recommendations'
import { mapWeakAreasToResources, generateStudyPath } from '@/lib/analytics-recommendations'

// ── Print Styles ─────────────────────────────────────────────────────────────

const PRINT_STYLES = `
@media print {
  body > *:not(#suggested-studies-print-root) {
    display: none !important;
  }

  nav, header, aside, footer,
  [data-print-hide],
  .no-print {
    display: none !important;
  }

  #suggested-studies-print-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .print-container {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    padding: 15mm 20mm;
    background: white !important;
    color: black !important;
    font-size: 11pt;
    line-height: 1.5;
  }

  .print-container * {
    color: black !important;
    border-color: #333 !important;
  }

  .print-header {
    border-bottom: 2px solid black !important;
    padding-bottom: 8mm;
    margin-bottom: 8mm;
  }

  .print-week {
    page-break-inside: avoid;
    margin-bottom: 6mm;
    border: 1px solid #ccc !important;
    padding: 4mm;
    border-radius: 2mm;
  }

  .print-resource {
    page-break-inside: avoid;
    margin-bottom: 3mm;
    padding: 2mm 0;
    border-bottom: 1px dotted #ddd !important;
  }

  .print-resource:last-child {
    border-bottom: none !important;
  }

  .print-badge {
    border: 1px solid #666 !important;
    padding: 1px 6px;
    border-radius: 3px;
    font-size: 9pt;
  }

  .print-footer {
    position: fixed;
    bottom: 10mm;
    left: 20mm;
    right: 20mm;
    text-align: center;
    font-size: 9pt;
    color: #666 !important;
    border-top: 1px solid #ccc !important;
    padding-top: 3mm;
  }

  /* Hide interactive elements */
  button, .no-print {
    display: none !important;
  }
}
`

// ── Props ────────────────────────────────────────────────────────────────────

interface SuggestedStudiesProps {
  weakAreas: string[]
  board: string
  className?: string
  schoolName?: string
  weeks?: number
}

// ── Resource type config ─────────────────────────────────────────────────────

const RESOURCE_TYPE_CONFIG: Record<
  ResourceRecommendation['type'],
  { icon: typeof BookOpen; label: string; color: string; bgColor: string }
> = {
  lesson_plan: {
    icon: BookOpen,
    label: 'Lesson Plan',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  course_module: {
    icon: GraduationCap,
    label: 'Course Module',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  practice_questions: {
    icon: HelpCircle,
    label: 'Practice Questions',
    color: 'text-clay-600',
    bgColor: 'bg-amber-500/10',
  },
  flashcard_deck: {
    icon: Layers,
    label: 'Flashcard Deck',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
}

// ── Main Component ───────────────────────────────────────────────────────────

export function SuggestedStudies({
  weakAreas,
  board,
  className,
  schoolName,
  weeks = 4,
}: SuggestedStudiesProps) {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(0)
  const [viewMode, setViewMode] = useState<'path' | 'all'>('path')
  const printRef = useRef<HTMLDivElement>(null)

  const resources = useMemo(
    () => mapWeakAreasToResources(weakAreas, board),
    [weakAreas, board]
  )

  const studyPath = useMemo(
    () => generateStudyPath(weakAreas, board, weeks),
    [weakAreas, board, weeks]
  )

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  if (weakAreas.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="mb-3 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
            <Lightbulb className="h-7 w-7 text-green-400" />
          </div>
          <h3 className="mb-1 font-semibold text-foreground">No weak areas to address</h3>
          <p className="text-sm text-muted-foreground">
            All areas are meeting or exceeding targets. Great work!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRINT_STYLES }} />

      <div ref={printRef} id="suggested-studies-print-root">
        <div className="print-container">
          {/* Print-only header */}
          <div className="print-header hidden print:block">
            <div className="flex items-start justify-between gap-4">
              <div>
                {schoolName && (
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {schoolName}
                  </p>
                )}
                <h1 className="text-xl font-bold text-foreground">
                  Suggested Study Path
                </h1>
                {className && (
                  <p className="text-sm text-muted-foreground mt-1">Class: {className}</p>
                )}
              </div>
              <div className="text-right text-sm text-muted-foreground shrink-0">
                <p>Generated: {new Date().toLocaleDateString('en-GB')}</p>
                <p>Duration: {weeks} weeks</p>
                <p>Focus areas: {weakAreas.length}</p>
              </div>
            </div>
          </div>

          {/* Interactive header (hidden in print) */}
          <div className="no-print flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-foreground">Suggested Studies</h2>
              <p className="text-sm text-muted-foreground">
                {resources.length} resources across {weakAreas.length} weak area{weakAreas.length !== 1 ? 's' : ''} — {weeks}-week study path
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-border overflow-hidden">
                <button
                  className={cn(
                    'px-3 py-1.5 text-xs font-medium transition-colors',
                    viewMode === 'path'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-muted-foreground hover:text-foreground'
                  )}
                  onClick={() => setViewMode('path')}
                >
                  Study Path
                </button>
                <button
                  className={cn(
                    'px-3 py-1.5 text-xs font-medium transition-colors',
                    viewMode === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-muted-foreground hover:text-foreground'
                  )}
                  onClick={() => setViewMode('all')}
                >
                  All Resources
                </button>
              </div>
              <Button variant="outline" size="sm" onClick={handlePrint} className="gap-1.5">
                <Printer className="h-3.5 w-3.5" />
                Print Summary
              </Button>
            </div>
          </div>

          {/* Study Path View */}
          {viewMode === 'path' && (
            <div className="space-y-4">
              {studyPath.map((week, wi) => (
                <Card key={wi} className="print-week overflow-hidden">
                  <button
                    className="no-print w-full"
                    onClick={() => setExpandedWeek(expandedWeek === wi ? null : wi)}
                  >
                    <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                            {week.week}
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-sm">{week.theme}</CardTitle>
                            <CardDescription className="text-xs mt-0.5">
                              {week.resources.length} resource{week.resources.length !== 1 ? 's' : ''} — {week.focus_areas.join(', ')}
                            </CardDescription>
                          </div>
                        </div>
                        {expandedWeek === wi ? (
                          <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                  </button>

                  {/* Always visible in print, toggled on screen */}
                  <div className={cn(
                    'print:block',
                    expandedWeek === wi ? 'block' : 'hidden'
                  )}>
                    <CardContent className="pt-0">
                      {/* Target outcome */}
                      <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                          Target Outcome
                        </p>
                        <p className="text-sm text-foreground">{week.target_outcome}</p>
                      </div>

                      {/* Resources */}
                      <div className="space-y-3">
                        {week.resources.map((resource, ri) => (
                          <ResourceCard key={ri} resource={resource} showReason />
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}

              {/* Path connector visual (screen only) */}
              <div className="no-print flex justify-center py-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>End of {weeks}-week study path</span>
                </div>
              </div>
            </div>
          )}

          {/* All Resources View */}
          {viewMode === 'all' && (
            <div className="space-y-6">
              {weakAreas.map((area, ai) => {
                const areaResources = resources.filter((r) => r.weak_area === area)
                if (areaResources.length === 0) return null

                return (
                  <Card key={ai}>
                    <CardHeader>
                      <CardTitle className="text-sm">{area}</CardTitle>
                      <CardDescription className="text-xs">
                        {areaResources.length} recommended resource{areaResources.length !== 1 ? 's' : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {areaResources.map((resource, ri) => (
                          <ResourceCard key={ri} resource={resource} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Print-only footer */}
          <div className="print-footer hidden print:block">
            {schoolName && <span>{schoolName}</span>}
            {schoolName && <span> — </span>}
            <span>Suggested Study Path — Generated {new Date().toLocaleDateString('en-GB')}</span>
          </div>
        </div>
      </div>
    </>
  )
}

// ── Resource Card ────────────────────────────────────────────────────────────

function ResourceCard({
  resource,
  showReason = false,
}: {
  resource: ResourceRecommendation
  showReason?: boolean
}) {
  const config = RESOURCE_TYPE_CONFIG[resource.type]
  const Icon = config.icon

  return (
    <div className="print-resource rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/30">
      <div className="flex items-start gap-3">
        {/* Type icon */}
        <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg shrink-0', config.bgColor)}>
          <Icon className={cn('h-5 w-5', config.color)} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h4 className="font-semibold text-sm text-foreground leading-snug">
                {resource.title}
              </h4>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className={cn('text-[10px] print-badge', config.color)}
                >
                  {config.label}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {resource.duration_minutes} min
                </span>
              </div>
            </div>
            <Link href={resource.href} className="shrink-0 no-print">
              <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                View
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {resource.description}
          </p>

          {/* Reason (shown in study path view) */}
          {showReason && (
            <div className="mt-2 rounded border border-dashed border-muted-foreground/20 bg-muted/30 px-2.5 py-1.5">
              <p className="text-[11px] text-muted-foreground leading-snug">
                <span className="font-semibold">Why: </span>
                {resource.reason}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
