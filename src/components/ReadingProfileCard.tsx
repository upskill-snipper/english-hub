'use client'

import Link from 'next/link'
import { BookOpen, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ReadingProfileCardProps {
  /** Reading age in months (e.g. 148 = 12y 4m) */
  readingAge: number | null
  /** Decoding age in months */
  decodingAge: number | null
  /** Fluency age in months */
  fluencyAge: number | null
  /** ISO date string of last assessment */
  assessmentDate: string | null
  /** Student year group string, e.g. "Year 11" */
  yearGroup: string
  /** Whether to show the reassessment link */
  showReassessLink?: boolean
  /** Use compact layout (for student-facing views) */
  compact?: boolean
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function monthsToDisplay(months: number): string {
  const y = Math.floor(months / 12)
  const m = months % 12
  return m === 0 ? `${y}y` : `${y}y ${m}m`
}

function getChronologicalMonths(yearGroup: string): number {
  const ygNum = parseInt(yearGroup.replace(/\D/g, ''), 10) || 7
  return (ygNum + 5) * 12
}

type AgeStatus = 'above' | 'at' | 'below'

function getAgeStatus(ageMonths: number, chronoMonths: number): AgeStatus {
  const diff = ageMonths - chronoMonths
  if (diff >= 6) return 'above'
  if (diff <= -6) return 'below'
  return 'at'
}

function statusColor(status: AgeStatus): string {
  if (status === 'above') return 'text-emerald-400'
  if (status === 'below') return 'text-red-400'
  return 'text-clay-600'
}

function statusBgColor(status: AgeStatus): string {
  if (status === 'above') return 'bg-emerald-500/10 border-emerald-500/20'
  if (status === 'below') return 'bg-red-500/10 border-red-500/20'
  return 'bg-amber-500/10 border-amber-500/20'
}

function statusLabelKey(status: AgeStatus): string {
  if (status === 'above') return 'reading.above_expected'
  if (status === 'below') return 'reading.below_expected'
  return 'reading.at_expected'
}

function formatAssessmentDate(dateStr: string | null): string | null {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function ReadingProfileCard({
  readingAge,
  decodingAge,
  fluencyAge,
  assessmentDate,
  yearGroup,
  showReassessLink = true,
  compact = false,
}: ReadingProfileCardProps) {
  const t = useT()
  const chronoMonths = getChronologicalMonths(yearGroup)

  if (readingAge == null && decodingAge == null && fluencyAge == null) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            {t('reading.profile_title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{t('reading.no_data')}</p>
          {showReassessLink && (
            <Button
              variant="outline"
              size="sm"
              className="mt-3 border-border text-muted-foreground hover:bg-muted"
              render={<Link href="/assessment/reading" />}
            >
              {t('reading.take_assessment')}
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  const ages: { labelKey: string; value: number | null }[] = [
    { labelKey: 'reading.reading_age', value: readingAge },
    { labelKey: 'reading.decoding_age', value: decodingAge },
    { labelKey: 'reading.fluency_age', value: fluencyAge },
  ]

  const assessedLabel = formatAssessmentDate(assessmentDate) ?? t('reading.not_assessed')

  return (
    <Card className="bg-card border-border">
      <CardHeader className={compact ? 'pb-2' : undefined}>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          {t('reading.profile_title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid ${compact ? 'grid-cols-3 gap-2' : 'grid-cols-3 gap-3'}`}>
          {ages.map(({ labelKey, value }) => {
            if (value == null) return null
            const status = getAgeStatus(value, chronoMonths)
            return (
              <div
                key={labelKey}
                className={`rounded-lg border p-3 text-center ${statusBgColor(status)}`}
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  {t(labelKey)}
                </p>
                <p className={`text-xl font-bold ${statusColor(status)}`}>
                  {monthsToDisplay(value)}
                </p>
                <p className={`text-[10px] mt-1 ${statusColor(status)}`}>
                  {t(statusLabelKey(status))}
                </p>
              </div>
            )
          })}
        </div>

        {/* Chronological age comparison */}
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {t('reading.chronological_age')}: {monthsToDisplay(chronoMonths)}
          </span>
        </div>

        {/* Assessment date & reassess link */}
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            {t('reading.last_assessed')}: {assessedLabel}
          </span>
          {showReassessLink && (
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs border-border text-muted-foreground hover:bg-muted"
              render={<Link href="/assessment/reading" />}
            >
              {t('reading.reassess')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Compact inline reading age display (for tables/lists) ──────────────────

export function ReadingAgeInline({
  readingAge,
  yearGroup,
}: {
  readingAge: number | null
  yearGroup: string
}) {
  if (readingAge == null) return <span className="text-muted-foreground">--</span>
  const chronoMonths = getChronologicalMonths(yearGroup)
  const status = getAgeStatus(readingAge, chronoMonths)
  return <span className={`font-medium ${statusColor(status)}`}>{monthsToDisplay(readingAge)}</span>
}
