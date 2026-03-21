'use client'

import Link from 'next/link'

const designs = [
  {
    number: 1,
    slug: 'design-1',
    name: 'Bento Box',
    description: 'Apple-style asymmetric grid. Gradient mesh cards, massive display numbers, SVG progress rings. Premium and spacious.',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    border: 'hover:border-emerald-500/30',
  },
  {
    number: 2,
    slug: 'design-2',
    name: 'Neon Brutalist',
    description: 'True black. Thick neon borders, hard offset shadows, monospace type, terminal command bar. Punk energy.',
    gradient: 'from-lime-500/20 to-pink-500/20',
    border: 'hover:border-lime-400/30',
  },
  {
    number: 3,
    slug: 'design-3',
    name: 'Soft Aurora',
    description: 'Light theme. Warm off-white, floating gradient blobs, frosted glass, pastel accents. Calm and airy.',
    gradient: 'from-violet-500/20 to-pink-500/20',
    border: 'hover:border-violet-400/30',
  },
  {
    number: 4,
    slug: 'design-4',
    name: 'Editorial',
    description: 'Magazine layout. Enormous serif typography, no cards, thin dividers, monochrome with one amber accent.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-400/30',
  },
  {
    number: 5,
    slug: 'design-5',
    name: 'Dopamine',
    description: 'Bold gradients, emoji icons, gamified XP & streaks, chunky progress bars. Duolingo meets Spotify Wrapped.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-400/30',
  },
]

export default function DemoGallery() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
          The English Hub
        </p>
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-3">
          Pick a direction
        </h1>
        <p className="text-neutral-500 text-lg mb-16 max-w-xl">
          Five completely different design systems. Same content, wildly different vibes.
        </p>

        <div className="space-y-4">
          {designs.map((d) => (
            <Link
              key={d.slug}
              href={`/demo/${d.slug}`}
              className={`group relative flex items-center gap-8 p-8 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] ${d.border}`}
            >
              {/* Gradient blob on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />

              {/* Number */}
              <span className="text-6xl font-extralight text-white/10 group-hover:text-white/20 transition-colors tabular-nums">
                {String(d.number).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors mb-1">
                  {d.name}
                </h2>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                  {d.description}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-neutral-600 group-hover:text-white/50 transition-all group-hover:translate-x-1 text-2xl">
                &rarr;
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Same mock data &middot; different visual language
        </p>
      </div>
    </div>
  )
}
