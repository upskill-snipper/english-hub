'use client'

const phrases = [
  'Master the sonnet',
  'Plan before you write',
  'Annotate everything',
  'Know your AOs',
  'Model answer libraries',
  'Read twice, write once',
  'Timed, not rushed',
]

const separator = ' \u2736 ' // ✶

export default function MarqueeStrip() {
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
