/**
 * /legal/privacy-qatar-supplement - superseded.
 *
 * The content of this supplement (v1.0, 12 May 2026) was merged into the
 * authoritative Qatar Privacy Notice at /legal/privacy-qatar (v2.0,
 * 20 May 2026) as part of the PDPPL gap‑analysis remediation. The
 * supplement no longer exists as a separate document - shipping two live
 * Qatar privacy pages was itself a PDPPL Article 5 transparency defect.
 *
 * This file remains as a 308 redirect shim so any bookmarked or
 * back‑linked URLs continue to land on the current notice.
 * Metadata sets noindex + canonical to /legal/privacy-qatar so crawlers
 * stop carrying the duplicate URL forward.
 */

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Qatar Privacy Notice - moved',
  description:
    'The Qatar Privacy Notice Supplement has been merged into the authoritative Qatar Privacy Notice at /legal/privacy-qatar.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://theenglishhub.app/legal/privacy-qatar' },
}

export default function PrivacyQatarSupplementRedirect(): never {
  redirect('/legal/privacy-qatar')
}
