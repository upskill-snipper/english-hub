import { headers } from 'next/headers'
import Link from 'next/link'
import { lookup, type Locale } from '@/lib/i18n/dictionary'

/**
 * LegalArBanner - short Khaleeji (Gulf) Arabic banner shown ONLY when
 * the visitor is on the Arabic locale. Rendered at the top of long-form
 * legal / help / safeguarding pages whose body remains in formal MSA
 * (per the bilingual legal-copy policy: Khaleeji is reserved for short
 * banners and CTAs, never long legal prose).
 *
 * Each callsite passes a `pageKey` (e.g. "refund", "terms", "help_root")
 * and the component reads four dictionary entries:
 *   legal_banner.<pageKey>.title
 *   legal_banner.<pageKey>.body
 *   legal_banner.<pageKey>.cta
 *   legal_banner.<pageKey>.cta_href   ← English-source value used as URL
 *
 * Returns `null` when locale is not AR - zero markup on the EN render.
 */

interface LegalArBannerProps {
  pageKey: string
}

export async function LegalArBanner({ pageKey }: LegalArBannerProps) {
  const h = await headers()
  const locale: Locale = h.get('x-lang') === 'ar' ? 'ar' : 'en'
  if (locale !== 'ar') return null

  const title = lookup(`legal_banner.${pageKey}.title`, locale)
  const body = lookup(`legal_banner.${pageKey}.body`, locale)
  const cta = lookup(`legal_banner.${pageKey}.cta`, locale)
  const ctaHref = lookup(`legal_banner.${pageKey}.cta_href`, 'en')

  return (
    <aside
      dir="rtl"
      lang="ar"
      className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-right"
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <Link
        href={ctaHref}
        className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {cta}
      </Link>
    </aside>
  )
}
