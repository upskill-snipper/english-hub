'use client'

import { useT } from '@/lib/i18n/use-t'

const separator = ' ✶ ' // ✶

export default function MarqueeStrip() {
  const t = useT()
  const phrases = [
    t('home.marquee.phrase.1'),
    t('home.marquee.phrase.2'),
    t('home.marquee.phrase.3'),
    t('home.marquee.phrase.4'),
    t('home.marquee.phrase.5'),
    t('home.marquee.phrase.6'),
    t('home.marquee.phrase.7'),
  ]
  const text = phrases.join(separator) + separator

  return (
    <section className="border-y border-cream-200/15 bg-cream-100/[0.03] overflow-hidden">
      <div className="relative py-4 sm:py-5">
        {/* Duplicate the text for seamless loop */}
        <div className="animate-marquee flex whitespace-nowrap">
          {[0, 1, 2].map((copy) => (
            <span
              key={copy}
              className="font-serif italic text-lg sm:text-[22px] text-cream-200/50 tracking-wide px-2 shrink-0"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Keyframe injected via style tag (marquee animation) */}
      <style jsx>{`
        @keyframes marquee-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee-slide 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
