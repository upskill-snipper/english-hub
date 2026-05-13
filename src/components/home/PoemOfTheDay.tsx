'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

export default function PoemOfTheDay() {
  const t = useT()
  // Poem body stays in original English (Wordsworth is a primary text);
  // surrounding chrome (kicker, summary, tags, CTA) is translated.
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl bg-cream-100/[0.05] border border-cream-200/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — poem text (always English — primary source) */}
          <div className="font-serif text-lg sm:text-xl leading-loose text-cream-200/80 italic">
            <p>
              I wandered lonely as a{' '}
              <span className="bg-ochre-500/20 text-ochre-300 not-italic px-1 rounded">cloud</span>
            </p>
            <p>
              That floats on high o&rsquo;er vales and{' '}
              <span className="bg-teal-700/30 text-teal-300 not-italic px-1 rounded">hills</span>,
            </p>
            <p>When all at once I saw a crowd,</p>
            <p>
              A host, of golden{' '}
              <span className="bg-ochre-500/20 text-ochre-300 not-italic px-1 rounded">
                daffodils
              </span>
              ;
            </p>
            <p>
              Beside the{' '}
              <span className="bg-teal-700/30 text-teal-300 not-italic px-1 rounded">lake</span>,
              beneath the trees,
            </p>
            <p>
              Fluttering and dancing in the{' '}
              <span className="bg-clay-500/20 text-clay-300 not-italic px-1 rounded">breeze</span>.
            </p>
            <p className="mt-4 text-sm text-cream-200/40 not-italic">{t('home.poem.author')}</p>
          </div>

          {/* Right — details */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-mono tracking-widest uppercase text-cream-200/40 mb-3">
              {t('home.poem.kicker')}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-cream-50 mb-4">
              {t('home.poem.title')}
            </h3>
            <p className="text-cream-200/60 leading-relaxed mb-6">{t('home.poem.summary')}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                t('home.poem.tag.romanticism'),
                t('home.poem.tag.nature'),
                t('home.poem.tag.personification'),
                'AQA',
                'Edexcel',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cream-200/15 bg-cream-50/[0.04] px-3 py-1 text-xs font-medium text-cream-200/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/revision/poetry"
              className="inline-flex items-center self-start rounded-full bg-clay-500 px-6 py-2.5 text-sm font-bold text-cream-50 transition-colors hover:bg-clay-600 shadow-lg shadow-clay-500/20"
            >
              {t('home.poem.cta_library')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
