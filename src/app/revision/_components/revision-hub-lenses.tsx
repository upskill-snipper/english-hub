'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Star,
  Sparkles,
  Clock,
  Target,
  Layers,
  BookText,
  TrendingUp,
} from 'lucide-react'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'

const RECENTLY_STUDIED_KEY = 'english-hub-recently-studied'
const LAST_VISITED_KEY = 'english-hub-last-visited-revision'
const FAVOURITES_KEY = 'english-hub-favourites'
const FAVOURITES_EVENT = 'english-hub-favourites-changed'

interface InProgressItem {
  title: string
  href: string
  section: string
  timestamp: number
}

export interface RecommendedItem {
  href: string
  title: string
  blurb: string
  icon: 'target' | 'layers' | 'bookText' | 'trendingUp'
}

export interface AllSectionEntry {
  href: string
  title: string
}

const RECOMMENDED_ICON: Record<RecommendedItem['icon'], typeof Target> = {
  target: Target,
  layers: Layers,
  bookText: BookText,
  trendingUp: TrendingUp,
}

function readInProgress(): InProgressItem[] {
  const merged: InProgressItem[] = []
  const seen = new Set<string>()
  try {
    const stored = localStorage.getItem(RECENTLY_STUDIED_KEY)
    if (stored) {
      const parsed: InProgressItem[] = JSON.parse(stored)
      for (const item of parsed) {
        if (item && item.href && !seen.has(item.href)) {
          merged.push(item)
          seen.add(item.href)
        }
      }
    }
    const lastVisited = localStorage.getItem(LAST_VISITED_KEY)
    if (lastVisited) {
      try {
        const parsed = JSON.parse(lastVisited) as InProgressItem
        if (parsed && parsed.href && !seen.has(parsed.href)) {
          merged.push(parsed)
          seen.add(parsed.href)
        }
      } catch {
        // ignore
      }
    }
  } catch {
    // ignore parse errors
  }
  merged.sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0))
  return merged.slice(0, 4)
}

function readFavouriteHrefs(): string[] {
  try {
    const raw = localStorage.getItem(FAVOURITES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : []
  } catch {
    return []
  }
}

export function RevisionHubLenses({
  recommended,
  allSections,
}: {
  recommended: RecommendedItem[]
  allSections: AllSectionEntry[]
}) {
  const [mounted, setMounted] = useState(false)
  const [inProgress, setInProgress] = useState<InProgressItem[]>([])
  const [favourites, setFavourites] = useState<AllSectionEntry[]>([])

  const refreshFavourites = useCallback(() => {
    const hrefs = readFavouriteHrefs()
    const lookup = new Map(allSections.map((s) => [s.href, s]))
    const resolved: AllSectionEntry[] = []
    for (const href of hrefs) {
      const match = lookup.get(href)
      if (match) resolved.push(match)
    }
    setFavourites(resolved.slice(0, 4))
  }, [allSections])

  useEffect(() => {
    setMounted(true)
    setInProgress(readInProgress())
    refreshFavourites()
    const handler = () => refreshFavourites()
    window.addEventListener(FAVOURITES_EVENT, handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener(FAVOURITES_EVENT, handler)
      window.removeEventListener('storage', handler)
    }
  }, [refreshFavourites])

  return (
    <section aria-label="Your hub overview" className="grid gap-4 lg:grid-cols-3">
      {/* In Progress lens */}
      <GlassPanel accent="primary" className="p-5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <PanelEyebrow>In Progress</PanelEyebrow>
            <h2 className="mt-1 flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Pick up where you left off
            </h2>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {mounted && inProgress.length === 0 && (
            <li className="rounded-lg border border-dashed border-border/50 px-3 py-3 text-xs text-muted-foreground">
              Nothing in progress yet - pick a board topic below.
            </li>
          )}
          {!mounted && (
            <li
              className="h-9 rounded-lg border border-dashed border-border/40"
              aria-hidden="true"
            />
          )}
          {mounted &&
            inProgress.map((item) => (
              <li key={item.href + item.timestamp}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 px-3 py-2 transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <BookOpen className="size-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                      {item.title}
                    </span>
                    <span className="block truncate text-[0.7rem] text-muted-foreground">
                      {item.section}
                    </span>
                  </span>
                  <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
        </ul>

        <Link
          href="/revision/study-plan"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-1.5 transition-all"
        >
          View all <ArrowRight className="size-3" aria-hidden="true" />
        </Link>
      </GlassPanel>

      {/* Recommended lens */}
      <GlassPanel accent="clay" className="p-5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <PanelEyebrow>Recommended</PanelEyebrow>
            <h2 className="mt-1 flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <Sparkles className="size-4 text-clay-600" aria-hidden="true" />
              Fast wins for your board
            </h2>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {recommended.map((item) => {
            const Icon = RECOMMENDED_ICON[item.icon]
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 px-3 py-2 transition-colors hover:border-clay-500/40 hover:bg-clay-500/[0.04]"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-clay-500/10">
                    <Icon className="size-3.5 text-clay-600" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-clay-600">
                      {item.title}
                    </span>
                    <span className="block truncate text-[0.7rem] text-muted-foreground">
                      {item.blurb}
                    </span>
                  </span>
                  <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/demo/student"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-clay-600 hover:gap-1.5 transition-all"
        >
          View all <ArrowRight className="size-3" aria-hidden="true" />
        </Link>
      </GlassPanel>

      {/* Favourites lens */}
      <GlassPanel accent="teal" className="p-5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <PanelEyebrow>Favourites</PanelEyebrow>
            <h2 className="mt-1 flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <Star className="size-4 text-teal-500" aria-hidden="true" />
              Your pinned sections
            </h2>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {mounted && favourites.length === 0 && (
            <li className="rounded-lg border border-dashed border-border/50 px-3 py-3 text-xs text-muted-foreground">
              Star any section below to pin it here.
            </li>
          )}
          {!mounted && (
            <li
              className="h-9 rounded-lg border border-dashed border-border/40"
              aria-hidden="true"
            />
          )}
          {mounted &&
            favourites.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 px-3 py-2 transition-colors hover:border-teal-500/40 hover:bg-teal-500/[0.04]"
                >
                  <Star
                    className="size-3.5 shrink-0 fill-amber-500 text-amber-500"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-teal-600">
                      {item.title}
                    </span>
                  </span>
                  <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
        </ul>

        <p className="mt-4 text-[0.7rem] text-muted-foreground">
          Tip: every card below has a star button - click it to pin.
        </p>
      </GlassPanel>
    </section>
  )
}
