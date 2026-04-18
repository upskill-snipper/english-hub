'use client'

/* ───────────────────── 01 — Contents : Playful Bento Grid ───────────────────── */

const features = [
  {
    title: 'AI Essay Feedback',
    description: 'Submit any essay. Get grade, AO breakdown, and next-step targets in seconds.',
    span: 'col-span-12 sm:col-span-6 lg:col-span-5 row-span-2',
    bg: 'bg-teal-800',
    text: 'text-cream-50',
    sub: 'text-cream-200/70',
    demo: (
      <div className="mt-4 space-y-2">
        <div className="rounded-lg bg-teal-900/60 px-3 py-2 text-xs text-cream-200/80 font-mono">
          <span className="text-clay-300">&quot;compelling&quot;</span> &mdash; precise vocabulary choice elevates register
        </div>
        <div className="rounded-lg bg-teal-900/60 px-3 py-2 text-xs text-cream-200/80 font-mono">
          <span className="text-sage-400">&quot;cyclical&quot;</span> &mdash; structural technique impresses markers
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs font-bold text-clay-300">Grade 8</span>
          <div className="flex-1 h-1.5 rounded-full bg-teal-900/50">
            <div className="h-full w-[85%] rounded-full bg-clay-400" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Grade Ladder',
    description: 'Visual 1–9 progression. See exactly what separates each grade boundary.',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-2',
    bg: 'bg-clay-500',
    text: 'text-cream-50',
    sub: 'text-cream-100/70',
    demo: (
      <div className="mt-4 flex items-end gap-1.5 h-24">
        {[20, 35, 45, 55, 65, 72, 80, 88, 95].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm bg-cream-50/20 transition-all"
              style={{ height: `${h}%` }}
            />
            <span className="text-[10px] text-cream-100/50 font-bold">{i + 1}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Mock Exams',
    description: 'Timed papers with real grade boundaries. Auto-marked where possible.',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3 row-span-2',
    bg: 'bg-cream-100',
    text: 'text-ink-900',
    sub: 'text-ink-500',
    demo: (
      <div className="mt-4 flex flex-col items-center justify-center">
        <span className="text-6xl font-extrabold tracking-tighter text-ink-800 font-serif">130+</span>
        <span className="text-xs font-semibold text-ink-400 mt-1 tracking-wide uppercase">Papers available</span>
      </div>
    ),
  },
  {
    title: 'Annotation Studio',
    description: 'Highlight, tag, and analyse key quotes from set texts and unseen extracts.',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-2',
    bg: 'bg-ochre-400',
    text: 'text-ink-900',
    sub: 'text-ink-700/70',
    demo: (
      <div className="mt-4 font-serif text-sm text-ink-800 leading-relaxed">
        <p>
          &ldquo;The <span className="bg-ochre-200 px-0.5 rounded">creature</span> had feelings of{' '}
          <span className="bg-clay-200 px-0.5 rounded">benevolence</span> and was filled with
          the greatest <span className="bg-sage-200 px-0.5 rounded">ardour</span>.&rdquo;
        </p>
        <p className="text-xs text-ink-500 mt-2 not-italic">— Mary Shelley, Frankenstein</p>
      </div>
    ),
  },
  {
    title: 'Grade Games',
    description: '7 revision games that make practice feel like play. From spelling bees to quote battles.',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-2',
    bg: 'bg-ink-800',
    text: 'text-cream-50',
    sub: 'text-cream-200/60',
    demo: (
      <div className="mt-4 grid grid-cols-2 gap-1.5">
        {['Spelling Bee', 'Quote Battle', 'Word Ladder', 'Vocab Sprint', 'Grammar Rush', 'AO Snap', 'Lit Bingo'].map(
          (game) => (
            <span
              key={game}
              className="rounded-md bg-ink-700/80 px-2 py-1.5 text-[11px] font-semibold text-cream-200/70 text-center truncate"
            >
              {game}
            </span>
          )
        )}
      </div>
    ),
  },
  {
    title: 'Exam Board Hub',
    description: 'Every spec, every AO, every grade descriptor — organised by your board.',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-2',
    bg: 'bg-sage-500',
    text: 'text-cream-50',
    sub: 'text-cream-100/70',
    demo: (
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['AQA', 'Edexcel', 'OCR', 'WJEC', 'IGCSE'].map((board) => (
          <span
            key={board}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-cream-50/20 text-xs font-bold text-cream-50/80 bg-sage-600/50"
          >
            {board}
          </span>
        ))}
      </div>
    ),
  },
]

export default function BentoFeatures() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section head */}
        <div className="mb-12">
          <p className="text-sm font-mono tracking-widest uppercase text-cream-200/40 mb-3">
            01 &mdash; Contents
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50 leading-tight">
            A <em className="italic text-clay-300">complete</em> English department, re-shelved.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.span} ${f.bg} ${f.text} rounded-2xl p-6 sm:p-8 flex flex-col transition-shadow duration-300 hover:shadow-card-hover`}
            >
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{f.title}</h3>
              <p className={`text-sm mt-1.5 leading-relaxed ${f.sub}`}>{f.description}</p>
              {f.demo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
