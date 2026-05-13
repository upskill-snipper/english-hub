'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
import {
  ArrowLeft,
  Download,
  Loader2,
  CheckCircle,
  AlertTriangle,
  Shield,
  FileJson,
  Users,
} from 'lucide-react'

/**
 * /account/data-export
 *
 * GDPR Article 15 (Right of Access) and Article 20 (Right to Data
 * Portability) self-serve export. Aligned with the ICO's Children's Code:
 * the language and layout are intentionally plain so a 13- to 17-year-old
 * can use it without help. Under-13 accounts are routed via the parent
 * portal because consent for that age band sits with the parent.
 */
export default function DataExportPage() {
  const t = useT()
  const router = useRouter()
  const { user } = useAuthStore()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/account/data-export')
      return
    }
    if (user) setPageReady(true)
  }, [user, router])

  async function handleDownload() {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('/api/account/export', { method: 'POST' })

      if (!res.ok) {
        // Try to parse a JSON error envelope; fall back to a friendly default.
        let message = t('account.export.err_generic')
        try {
          const data = await res.json()
          if (typeof data?.error === 'string') message = data.error
        } catch {
          // Body wasn't JSON — keep the default message.
        }

        if (res.status === 429) {
          message = t('account.export.err_rate_limit')
        } else if (res.status === 401) {
          message = t('account.export.err_unauth')
        }

        setError(message)
        setLoading(false)
        return
      }

      // Stream the JSON file to the browser as a download.
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)

      // Try to honour the server-provided filename if present.
      const disposition = res.headers.get('Content-Disposition') || ''
      const match = disposition.match(/filename="?([^"]+)"?/)
      const filename =
        match?.[1] || `english-hub-data-${new Date().toISOString().slice(0, 10)}.json`

      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)

      setSuccess(true)
    } catch {
      setError(t('account.export.err_network'))
    } finally {
      setLoading(false)
    }
  }

  if (!pageReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('account.back_to_account')}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">{t('account.export.title')}</h1>
        <p className="text-muted-foreground mb-8">{t('account.export.subtitle')}</p>

        <section
          aria-labelledby="data-export-heading"
          className="bg-card border border-border rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileJson className="w-5 h-5 text-primary" />
            <h2 id="data-export-heading" className="text-xl font-semibold text-foreground">
              {t('account.export.what_in_file')}
            </h2>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{t('account.export.bundle_intro')}</p>

          <ul className="text-sm text-foreground space-y-2 mb-6 list-disc pl-5 marker:text-primary">
            <li>{t('account.export.bullet_profile')}</li>
            <li>{t('account.export.bullet_board')}</li>
            <li>{t('account.export.bullet_scores')}</li>
            <li>{t('account.export.bullet_marking')}</li>
            <li>{t('account.export.bullet_consent')}</li>
            <li>{t('account.export.bullet_requests')}</li>
          </ul>

          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="flex items-start gap-2 rounded-lg p-3 mb-4 text-sm bg-red-500/10 border border-red-500/30 text-red-600"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div
              role="status"
              aria-live="polite"
              className="flex items-start gap-2 rounded-lg p-3 mb-4 text-sm bg-emerald-500/10 border border-emerald-500/30 text-teal-700"
            >
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{t('account.export.success')}</span>
            </div>
          )}

          <button type="button" onClick={handleDownload} disabled={loading} className="btn-primary">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                {t('account.export.button_preparing')}
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                {t('account.export.button')}
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground mt-3">
            {t('account.export.rate_limit_note')}
          </p>
        </section>

        <section
          aria-labelledby="legal-basis-heading"
          className="bg-card border border-border rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-5 h-5 text-primary" />
            <h2 id="legal-basis-heading" className="text-lg font-semibold text-foreground">
              {t('account.export.legal_basis_heading')}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">{t('account.export.legal_basis_body')}</p>
        </section>

        <section
          aria-labelledby="under-13-heading"
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <h2 id="under-13-heading" className="text-lg font-semibold text-foreground">
              {t('account.export.under13_heading')}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('account.export.under13_body_prefix')}{' '}
            <Link href="/parent/delete-data" className="text-primary hover:underline">
              {t('account.export.under13_link_text')}
            </Link>
            {t('account.export.under13_body_suffix')}
          </p>
        </section>
      </div>
    </div>
  )
}
