'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  GraduationCap,
  Filter,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import {
  allTeachingGuides,
  categoryLabels,
  categoryColors,
  getGuideCategories,
  type GuideCategory,
} from '@/data/teaching-guides'

// ── Helpers ──────────────────────────────────────────────────────────────────

function matchesSearch(query: string, title: string, description: string): boolean {
  const q = query.toLowerCase()
  return title.toLowerCase().includes(q) || description.toLowerCase().includes(q)
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GuidesListPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<GuideCategory | 'all'>('all')

  const categories = useMemo(() => getGuideCategories(), [])

  const filteredGuides = useMemo(() => {
    return allTeachingGuides.filter((guide) => {
      const categoryMatch = activeCategory === 'all' || guide.category === activeCategory
      const searchMatch = search.trim() === '' || matchesSearch(search, guide.title, guide.description)
      return categoryMatch && searchMatch
    })
  }, [search, activeCategory])

  return (
    <div className="space-y-8">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Teaching Guides</h1>
            <p className="text-sm text-muted-foreground">
              Practical, evidence-based guides to strengthen your English teaching practice
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* ── Search & Filters ────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('all')}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat)}
            >
              {categoryLabels[cat]}
            </Button>
          ))}
        </div>
      </div>

      {/* ── Guide Cards ─────────────────────────────────────────────────── */}
      {filteredGuides.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-16 text-center">
          <BookOpen className="h-10 w-10 text-muted-foreground/40 mb-3" />
          <p className="text-muted-foreground font-medium">No guides match your search</p>
          <p className="text-sm text-muted-foreground/70 mt-1">
            Try adjusting your search term or clearing the category filter
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {filteredGuides.map((guide) => (
            <Link key={guide.id} href={`/school/guides/${guide.id}`} className="group">
              <Card className="h-full transition-shadow hover:shadow-md hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                    <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </div>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
