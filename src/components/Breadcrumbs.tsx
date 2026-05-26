import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SITE_ORIGIN } from '@/lib/seo/canonical'
import { tMany } from '@/lib/i18n/t'

export type BreadcrumbEntry = { label: string; href: string }

/**
 * Unified breadcrumb component (SEO item #31).
 *
 * Renders a visual breadcrumb trail AND emits BreadcrumbList JSON-LD so
 * Google can show the hierarchy in SERP snippets.
 *
 * Include at the top of every section-level layout / page. The first
 * element is always the site home, injected automatically - pass only
 * the trail from the top-level section downward, e.g.:
 *
 *   <Breadcrumbs items={[
 *     { label: 'Courses', href: '/courses' },
 *     { label: 'GCSE English Language', href: '/courses/gcse-lang' },
 *   ]} />
 */
export async function Breadcrumbs({
  items,
  nonce,
  className,
}: {
  items: BreadcrumbEntry[]
  nonce?: string
  className?: string
}) {
  const [breadcrumbLabel, homeLabel] = await tMany(['a11y.breadcrumb', 'nav.home'])
  const fullTrail: BreadcrumbEntry[] = [{ label: homeLabel, href: '/' }, ...items]
  const ldItems = fullTrail.map((i) => ({
    name: i.label,
    url: i.href.startsWith('http') ? i.href : `${SITE_ORIGIN}${i.href}`,
  }))

  return (
    <>
      <BreadcrumbJsonLd items={ldItems} nonce={nonce} />
      <nav
        aria-label={breadcrumbLabel}
        className={
          className ??
          'mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 flex items-center gap-1.5 text-xs text-muted-foreground'
        }
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              href="/"
              className="hover:text-foreground inline-flex items-center"
              aria-label={homeLabel}
            >
              <Home className="h-3.5 w-3.5" />
            </Link>
          </li>
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={`${item.href}-${i}`} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
