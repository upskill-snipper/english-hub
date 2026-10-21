import Link from 'next/link'
import { cn } from '@/lib/utils'
import { resolveCopy } from './copy'

/**
 * The one call to action: "Start your 7-day free trial", with "No card
 * needed." beneath it, as the brief sets the microcopy.
 *
 * It appears in the hero, in chapter IV where AI marking is introduced, and in
 * the epilogue, and nowhere else on the page, so that no screen holds more
 * than one filled primary button. The header's "Start free" pill is the same
 * route in the site chrome.
 */
export async function PrimaryCta({
  onInk = false,
  center = false,
  className,
}: {
  onInk?: boolean
  center?: boolean
  className?: string
}) {
  const c = await resolveCopy({
    label: 'home.story.cta.primary',
    noCard: 'home.story.cta.no_card',
  })
  return (
    <div
      className={cn(
        'grid justify-items-start gap-2.5',
        center && 'justify-items-center text-center',
        className,
      )}
    >
      <Link
        href="/auth/register"
        className={cn(
          'inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-[15px] font-semibold transition-colors sm:w-auto',
          'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2',
          onInk
            ? 'bg-cream-50 text-ink-900 hover:bg-cream-100 focus-visible:ring-clay-300 focus-visible:ring-offset-ink-900'
            : 'bg-primary text-primary-foreground hover:bg-primary/85 focus-visible:ring-primary/30 focus-visible:ring-offset-background',
        )}
      >
        {c.label}
      </Link>
      <span className={cn('text-base', onInk ? 'text-ink-200' : 'text-muted-foreground')}>
        {c.noCard}
      </span>
    </div>
  )
}
