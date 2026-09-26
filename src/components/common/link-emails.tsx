import type { ReactNode } from 'react'

/**
 * Render any email address in a string as its own mailto link.
 *
 * WHY, and it is not about convenience (26 September 2026). Cloudflare's
 * Email Address Obfuscation, which is on for theenglishhub.app, rewrites every
 * address in the HTML it serves into an encoded placeholder and injects a
 * script that decodes it before React hydrates. An address that sits in the
 * middle of a sentence ("... by contacting us at info@... Upon cancellation")
 * comes back from that round trip as separate text nodes, while React's server
 * render had one, so hydration fails with React error #418 and the whole page
 * is re-rendered on the client. /terms did this on every production load. An
 * address that is already its own element comes back as that element, text
 * intact, which is why /contact and /about hydrate cleanly. Local development
 * has no Cloudflare in front of it, so the error only ever showed in
 * production.
 *
 * Use it wherever dictionary text that may hold an address is rendered as JSX
 * children. A string without an address is returned unchanged.
 */
const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,})/

export function linkEmails(text: string): ReactNode {
  const parts = text.split(EMAIL)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="text-primary underline underline-offset-2 hover:no-underline"
      >
        {part}
      </a>
    ) : (
      part
    ),
  )
}
