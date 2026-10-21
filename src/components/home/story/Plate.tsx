import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * One of the site's own comic plates, shown whole.
 *
 * The plates are the SVG files the build renders into public/comics/<text>/,
 * the same files the study guides and quests show; nothing is recoloured or
 * cropped. They are drawn in black and cream, and the copy calls them drawn.
 * Each is 860 by 340. An .svg source is served as it is by next/image, so the
 * drawing arrives as the vector it was made as.
 */
export function Plate({
  src,
  alt,
  caption,
  priority = false,
  onInk = false,
  className,
}: {
  src: string
  alt: string
  caption: string
  priority?: boolean
  onInk?: boolean
  className?: string
}) {
  return (
    <figure className={cn('m-0 grid gap-2', className)}>
      <Image
        src={src}
        width={860}
        height={340}
        alt={alt}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full rounded-xl bg-cream-200"
      />
      <figcaption
        className={cn(
          'font-mono text-xs tracking-[0.02em]',
          onInk ? 'text-ink-200' : 'text-muted-foreground',
        )}
      >
        {caption}
      </figcaption>
    </figure>
  )
}
