'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

export default function FinalCTA() {
  const t = useT()
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-2xl bg-ink-800 px-8 py-16 sm:px-14 sm:py-20 text-center overflow-hidden">
          {/* Giant "&" watermark */}
          <span
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20rem] sm:text-[28rem] font-black leading-none text-teal-800/25 select-none"
            aria-hidden="true"
          >
            &amp;
          </span>

          <div className="relative">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-50 mb-5">
              {t('home.final_cta.heading')}
            </h2>
            <p className="text-cream-200/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
              {t('home.final_cta.body')}
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-8 py-3.5 text-base font-bold text-cream-50 transition-colors hover:bg-clay-600 shadow-lg shadow-clay-500/25"
            >
              {t('home.final_cta.button')} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
