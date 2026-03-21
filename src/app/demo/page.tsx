'use client'

import Link from 'next/link'
import { Palette, ArrowRight } from 'lucide-react'

const designs = [
  {
    number: 1,
    slug: 'design-1',
    name: 'Spotify Learn',
    description: 'Sidebar + main stage + Now Studying bar. Familiar Spotify-like layout.',
    color: 'emerald',
    dot: 'bg-emerald-500',
    ring: 'ring-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'hover:shadow-emerald-500/10',
  },
  {
    number: 2,
    slug: 'design-2',
    name: 'Pill Navigation',
    description: 'No sidebar. Horizontal pill nav + chip filters. Mobile-first feel.',
    color: 'blue',
    dot: 'bg-blue-500',
    ring: 'ring-blue-500/30',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    glow: 'hover:shadow-blue-500/10',
  },
  {
    number: 3,
    slug: 'design-3',
    name: 'Tinted Sections',
    description: 'Each section has a color tint. Instant visual orientation.',
    color: 'purple',
    dot: 'bg-purple-500',
    ring: 'ring-purple-500/30',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    glow: 'hover:shadow-purple-500/10',
  },
  {
    number: 4,
    slug: 'design-4',
    name: 'Board Blocks',
    description: 'UI accent adapts to selected exam board. Click to see it change.',
    color: 'orange',
    dot: 'bg-orange-500',
    ring: 'ring-orange-500/30',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    glow: 'hover:shadow-orange-500/10',
  },
  {
    number: 5,
    slug: 'design-5',
    name: 'Midnight Scholar',
    description: 'Dark academia with serif headings + gold accents. Premium scholarly feel.',
    color: 'gold',
    dot: 'bg-yellow-500',
    ring: 'ring-yellow-500/30',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    glow: 'hover:shadow-yellow-500/10',
  },
]

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Header */}
      <div className="border-b border-brand-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/20">
              <Palette className="h-5 w-5 text-brand-accent" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              The English Hub
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-brand-text mb-3">
            Design Gallery
            <span className="text-brand-accent"> — </span>
            Choose Your Favourite
          </h1>
          <p className="max-w-2xl text-brand-muted leading-relaxed">
            Five distinct design concepts for The English Hub. Each explores a different
            visual language and navigation model. Browse them all, then pick the one that
            feels right.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <Link
              key={design.slug}
              href={`/demo/${design.slug}`}
              className={[
                'group relative flex flex-col rounded-xl border border-brand-border',
                'bg-surface p-6 shadow-medium transition-all duration-200',
                'hover:border-brand-border hover:bg-surface-raised',
                `hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${design.glow}`,
                `hover:ring-1 ${design.ring}`,
              ].join(' ')}
            >
              {/* Number badge */}
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={[
                    'inline-flex items-center rounded-full border px-2.5 py-0.5',
                    'text-xs font-semibold tracking-wide',
                    design.badge,
                  ].join(' ')}
                >
                  {String(design.number).padStart(2, '0')}
                </span>

                {/* Color dot */}
                <span
                  className={[
                    'h-2.5 w-2.5 rounded-full opacity-60 transition-opacity',
                    'group-hover:opacity-100',
                    design.dot,
                  ].join(' ')}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="mb-2 text-lg font-semibold text-brand-text group-hover:text-white transition-colors">
                  {design.name}
                </h2>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {design.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-accent">
                <span>View Demo</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>

              {/* Subtle top accent line */}
              <div
                className={[
                  'absolute inset-x-0 top-0 h-px rounded-t-xl opacity-0',
                  'transition-opacity duration-200 group-hover:opacity-100',
                  design.dot,
                ].join(' ')}
              />
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-xs text-brand-muted/60 tracking-wide">
          All designs share the same content — only the visual treatment differs.
        </p>
      </div>
    </div>
  )
}
