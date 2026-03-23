'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Lightbulb,
  MessageSquare,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import {
  getGuideById,
  categoryLabels,
  categoryColors,
  type TeachingGuideSection,
} from '@/data/teaching-guides'

// ── Section renderer ─────────────────────────────────────────────────────────

function GuideSection({
  section,
  index,
}: {
  section: TeachingGuideSection
  index: number
}) {
  return (
    <section className="space-y-5">
      {/* Section heading */}
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
          {index + 1}
        </span>
        <h2 className="text-xl font-semibold tracking-tight pt-0.5">{section.title}</h2>
      </div>

      {/* Content — render paragraphs from newline-separated text */}
      <div className="prose prose-sm dark:prose-invert max-w-none pl-10">
        {section.content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tips */}
      {section.tips.length > 0 && (
        <Card className="ml-10 border-primary/20 bg-primary/[0.03]">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Lightbulb className="h-4 w-4 text-primary" />
              Practical Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                  <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Examples */}
      {section.examples && section.examples.length > 0 && (
        <div className="ml-10 space-y-3">
          {section.examples.map((example, i) => (
            <Card key={i} className="border-amber-200/60 bg-amber-50/30 dark:border-amber-800/40 dark:bg-amber-950/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  Classroom Example
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Scenario
                  </p>
                  <p className="text-sm leading-relaxed">{example.scenario}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Approach
                  </p>
                  <p className="text-sm leading-relaxed">{example.approach}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GuideDetailPage() {
  const params = useParams<{ guideId: string }>()
  const guide = getGuideById(params.guideId)

  if (!guide) {
    notFound()
  }

  return (
    <div className="space-y-8">
      {/* ── Back link ────────────────────────────────────────────────────── */}
      <Link href="/school/guides">
        <Button variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          All Guides
        </Button>
      </Link>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
              categoryColors[guide.category]
            )}
          >
            {categoryLabels[guide.category]}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {guide.readTime} min read
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <BookOpen className="h-3 w-3" />
            {guide.sections.length} sections
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight">{guide.title}</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">{guide.description}</p>
      </div>

      <Separator />

      {/* ── Table of contents ────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">In This Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-1.5">
            {guide.sections.map((section, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-medium">
                  {i + 1}
                </span>
                <span>{section.title}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* ── Sections ─────────────────────────────────────────────────────── */}
      <div className="space-y-10">
        {guide.sections.map((section, i) => (
          <GuideSection key={i} section={section} index={i} />
        ))}
      </div>

      {/* ── Related resources ────────────────────────────────────────────── */}
      {guide.relatedResources.length > 0 && (
        <>
          <Separator />
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight">Related Guides</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {guide.relatedResources.map((resource) => (
                <Link key={resource.id} href={`/school/guides/${resource.id}`} className="group">
                  <Card className="transition-shadow hover:shadow-md hover:border-primary/30">
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {resource.title}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
