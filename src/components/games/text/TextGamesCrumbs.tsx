import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

/**
 * The visible trail on the text-game pages: Home, Games, Text games, and the
 * text. Server-rendered and plain: the BreadcrumbList structured data is
 * derived from the path for every page by PathBreadcrumbJsonLd in the root
 * layout, so this renders none of its own (every-page-says-where-it-sits.test
 * pins the few pages that do).
 *
 * It wraps rather than scrolls on a phone, its chevrons turn round in Arabic,
 * and each link is a full-height tap target.
 */
export function TextGamesCrumbs({
  label,
  items,
}: {
  /** The landmark's name, translated: "Breadcrumb". */
  label: string
  /** The last item is the current page and has no href. */
  items: { label: string; href?: string; english?: boolean }[]
}) {
  return (
    <nav aria-label={label} className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-1 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.href ?? item.label} className="flex min-w-0 items-center gap-x-1">
            {i > 0 && (
              <ChevronRight className="size-3.5 shrink-0 rtl:rotate-180" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-md px-1 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="inline-flex min-h-11 items-center px-1 font-medium text-foreground"
                {...(item.english ? { lang: 'en', dir: 'ltr' } : {})}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
