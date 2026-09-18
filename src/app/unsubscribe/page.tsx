// ─── /unsubscribe ────────────────────────────────────────────────────────────
//
// The page four email templates have linked to since long before it existed.
// Until 19 September 2026 this URL returned a 404, so every marketing email we
// sent advertised an opt-out that did not work. See
// `@/lib/email/unsubscribe-token` for the full history.
//
// ── WHY A CONFIRM BUTTON AND NOT A ONE-VISIT OPT-OUT ────────────────────────
// The tempting design is to unsubscribe on page load: the reader clicks once
// and it is done. It is wrong. Outlook Safe Links, Proofpoint and every other
// mail-security scanner fetches every URL in a delivered message, so a
// write-on-GET would unsubscribe people who never clicked anything - and never
// tell them. The preference would then be a record of which mail providers
// scan links, not of what anybody chose.
//
// So GET renders a button and POSTs. That is one extra click; the dark pattern
// this guards against is a re-subscribe upsell or a login wall, and there is
// neither. Providers offering RFC 8058 one-click go straight to the POST route
// and never render this page at all, so the common path is still one click.
// ────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import { UnsubscribeForm } from './UnsubscribeForm'

export const metadata: Metadata = {
  title: 'Unsubscribe | The English Hub',
  description: 'Stop receiving marketing email from The English Hub.',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>
}) {
  const { token } = await searchParams

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight">Email preferences</h1>

      {token ? (
        <UnsubscribeForm token={token} />
      ) : (
        <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
          {/*
            The tokenless state. Reached when a link predates the signing key,
            when CRON_SECRET has been rotated since the mail was sent, or when a
            reader arrives here by hand. It must NOT read as an error: the
            reader's intention is clear and we should still help them act on it.
          */}
          <p>
            We could not identify which account this link belongs to, so we have not changed
            anything.
          </p>
          <p>
            Sign in and open your privacy settings to turn marketing email off, or reply to any
            email from us and we will do it for you.
          </p>
          <a
            className="inline-block rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            href="/dashboard/privacy"
          >
            Go to privacy settings
          </a>
        </div>
      )}

      <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
        This only stops marketing and progress-report email. Messages about your account, your
        subscription and anything we are required to send you will still reach you.
      </p>
    </div>
  )
}
