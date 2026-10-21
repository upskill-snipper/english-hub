import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * A screenshot of the live site, cropped to the part that proves the claim
 * beside it.
 *
 * The captures in public/home are 1440 by 900 or 390 by 844 CSS pixels at
 * scale 2, taken signed out on 18 October 2026. A frame shows the region
 * (x, y, w, h), in CSS pixels of the capture, by scaling the whole image and
 * sliding it, never by stretching or by editing the file: the same capture
 * serves a laptop crop and a phone crop. Left and top are physical on purpose,
 * because a crop region does not mirror when the page is read right to left.
 *
 * Two crops are placed where they are so that forbidden copy stays out of
 * frame: the marking form starts below the live page's "predicted grade"
 * subline, and the mock-papers list starts below "in your board's format, with
 * mark schemes". Move a region and check what comes into view.
 */
export type ShotProps = {
  src: string
  /** The capture's own CSS size. */
  iw: number
  ih: number
  /** The region to show, in the capture's CSS pixels. */
  x: number
  y: number
  w: number
  h: number
  alt: string
  caption?: string
  /** A phone capture, shown inside a phone-shaped bezel. */
  phone?: boolean
  /** The frames sit on the ink bands as often as on cream. */
  onInk?: boolean
  priority?: boolean
  className?: string
}

export function Shot({
  src,
  iw,
  ih,
  x,
  y,
  w,
  h,
  alt,
  caption,
  phone = false,
  onInk = false,
  priority = false,
  className,
}: ShotProps) {
  const scale = iw / w
  return (
    <figure className={cn('m-0 grid gap-2.5', phone && 'w-full max-w-[320px]', className)}>
      <div
        className={cn(
          'relative overflow-hidden bg-muted',
          phone
            ? 'rounded-[32px] border-8 border-ink-900 shadow-lg dark:border-ink-950 dark:outline dark:outline-1 dark:outline-cream-50/20'
            : 'rounded-[20px] border shadow-md',
          !phone && (onInk ? 'border-cream-50/20' : 'border-border'),
        )}
        style={{ aspectRatio: `${w} / ${h}` }}
      >
        <Image
          src={src}
          width={iw}
          height={ih}
          alt={alt}
          priority={priority}
          // The image is drawn `scale` times wider than its frame, so the
          // browser needs a candidate that wide: roughly the frame width at
          // each breakpoint multiplied by the scale.
          sizes={
            phone
              ? `${Math.round(320 * scale)}px`
              : `(min-width: 1280px) ${Math.round(640 * scale)}px, (min-width: 768px) ${Math.round(700 * scale)}px, ${Math.round(100 * scale)}vw`
          }
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            maxWidth: 'none',
            width: `${scale * 100}%`,
            height: 'auto',
            transform: `translate(${(-x / iw) * 100}%, ${(-y / ih) * 100}%)`,
          }}
        />
      </div>
      {caption ? (
        <figcaption
          className={cn(
            'font-mono text-xs tracking-[0.02em]',
            onInk ? 'text-ink-200' : 'text-muted-foreground',
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
