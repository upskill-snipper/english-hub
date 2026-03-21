'use client'

import React from 'react'

export default function EditorialDashboard() {
  const currentHour = new Date().getHours()
  const greeting =
    currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  const recentActivity = [
    { time: '9:41 am', text: 'Completed Paper 2 — Writers\u2019 Viewpoints and Perspectives' },
    { time: '8:15 am', text: 'Reviewed unseen poetry comparison notes' },
    { time: 'Yesterday', text: 'Practised transactional writing — letter to editor' },
    { time: 'Yesterday', text: 'Finished Act 3 annotations for An Inspector Calls' },
    { time: 'Mon', text: 'Timed essay — How does Priestley present responsibility?' },
    { time: 'Mon', text: 'Language Paper 1, Question 5 creative writing draft' },
  ]

  const currentStudy = [
    { label: 'Now reading', title: 'An Inspector Calls', detail: 'Act 3 \u2014 The Inspector\u2019s final speech' },
    { label: 'Up next', title: 'Power and Conflict Poetry', detail: 'Ozymandias vs. My Last Duchess comparison' },
    { label: 'This week', title: 'Language Paper 2', detail: 'Section B \u2014 Writing to argue and persuade' },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-amber-500/20">
      {/* Top bar — barely there */}
      <nav className="max-w-4xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          English Hub
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          GCSE English
        </span>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero greeting — extreme typography */}
        <section className="pt-12 pb-20">
          <h1 className="font-serif italic text-[6rem] leading-[0.95] tracking-tight text-white">
            {greeting},
            <br />
            Calum
          </h1>
          <p className="mt-8 text-lg font-light text-neutral-400 max-w-md leading-relaxed">
            Saturday, 21 March 2026. Your exams are in{' '}
            <span className="text-white">67 days</span>. Here is where you stand.
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Stats — magazine infographic style */}
        <section className="py-16">
          <div className="grid grid-cols-2 gap-0">
            {/* Left stat */}
            <div>
              <p className="text-[7rem] font-extralight leading-none tabular-nums text-white">
                78
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Lessons completed
              </p>
            </div>

            {/* Right stat */}
            <div className="border-l border-neutral-800 pl-12">
              <p className="text-[7rem] font-extralight leading-none tabular-nums text-white">
                12
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Day streak
              </p>
            </div>
          </div>

          {/* Secondary stats row */}
          <div className="grid grid-cols-4 gap-8 mt-16 pt-8 border-t border-neutral-800">
            <div>
              <p className="text-4xl font-extralight tabular-nums">94</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Vocab terms
              </p>
            </div>
            <div>
              <p className="text-4xl font-extralight tabular-nums">
                6<span className="text-neutral-600">/8</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Texts studied
              </p>
            </div>
            <div>
              <p className="text-4xl font-extralight tabular-nums">23</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Essays written
              </p>
            </div>
            <div>
              <p className="text-4xl font-extralight tabular-nums">
                B<span className="text-neutral-600">+</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Avg. grade
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Pull quote — motivational */}
        <section className="py-16">
          <blockquote className="border-l-2 border-neutral-600 pl-8 max-w-2xl">
            <p className="font-serif italic text-3xl leading-snug text-neutral-300">
              The difference between the almost right word and the right word is the
              difference between the lightning bug and the{' '}
              <span className="text-[#f59e0b]">lightning</span>.
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Mark Twain
            </footer>
          </blockquote>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Currently studying */}
        <section className="py-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12">
            Currently studying
          </h2>

          <div className="space-y-10">
            {currentStudy.map((item, i) => (
              <div key={i} className="group">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-2">
                  {item.label}
                </p>
                <p className="font-serif italic text-4xl text-white leading-tight">
                  {item.title}
                </p>
                <p className="mt-2 text-base font-light text-neutral-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Recent activity — newspaper column */}
        <section className="py-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12">
            Recent activity
          </h2>

          <div className="space-y-6">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-baseline gap-6">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-24 shrink-0 text-right tabular-nums">
                  {item.time}
                </span>
                <span className="text-base font-light text-neutral-300 leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Atmospheric / barely visible section */}
        <section className="py-16">
          <p className="text-neutral-700 text-sm font-light leading-relaxed max-w-lg">
            You have been studying for 47 days continuously. In that time you have
            written over 18,000 words across essays, annotations, and practice papers.
            The quiet accumulation of effort is its own reward.
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Weekly focus */}
        <section className="py-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12">
            This week&apos;s focus
          </h2>

          <div className="grid grid-cols-7 gap-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-center">
                <p className="text-xs text-neutral-600 mb-3">{day}</p>
                <div
                  className={`h-1 rounded-full ${
                    i < 6
                      ? 'bg-neutral-500'
                      : 'bg-neutral-800'
                  }`}
                />
                <p className="mt-3 text-xs tabular-nums text-neutral-500">
                  {i < 6 ? `${[45, 30, 60, 25, 50, 40][i]}m` : '\u2014'}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-baseline gap-3">
            <p className="text-5xl font-extralight tabular-nums">4.2</p>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Hours this week
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Footer — minimal */}
        <footer className="py-16 pb-24 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            English Hub &middot; Editorial
          </span>
          <span className="text-xs text-neutral-700">
            Vol. I, No. 47
          </span>
        </footer>
      </main>
    </div>
  )
}
