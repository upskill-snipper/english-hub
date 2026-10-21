import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * A text link with an arrow: the chapter links and the card links.
 *
 * A 44px minimum height keeps it a comfortable target on a phone; the arrow
 * turns round when the page is read right to left.
 */
export function TextLink({
  href,
  children,
  onInk = false,
  muted = false,
  className,
}: {
  href: string
  children: React.ReactNode
  onInk?: boolean
  /** The quieter of two links in a row. */
  muted?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex min-h-11 items-center gap-2 rounded-md font-semibold',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        onInk
          ? muted
            ? 'text-ink-200 hover:text-cream-50 focus-visible:ring-clay-300 focus-visible:ring-offset-ink-900'
            : 'text-clay-300 hover:text-cream-50 focus-visible:ring-clay-300 focus-visible:ring-offset-ink-900'
          : muted
            ? 'text-muted-foreground hover:text-foreground'
            : 'text-primary hover:text-primary/80',
        className,
      )}
    >
      <span className="underline decoration-1 underline-offset-4 group-hover:decoration-2">
        {children}
      </span>
      <ArrowRight
        aria-hidden="true"
        className="size-[18px] shrink-0 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5 motion-reduce:transition-none"
      />
    </Link>
  )
}
