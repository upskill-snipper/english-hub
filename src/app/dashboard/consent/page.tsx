'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ──────────────────────────────────────────────────────────────

interface ConsentRecord {
  id: string
  consentType: string
  version: string
  granted: boolean
  grantedAt: string
  withdrawnAt: string | null
  method: string
  isEssential: boolean
}

interface HistoryRecord {
  id: string
  consentType: string
  version: string
  granted: boolean
  grantedAt: string
  withdrawnAt: string | null
  method: string
}

// ─── Display labels ─────────────────────────────────────────────────────

// Maps a consent enum value to its translation-key stem in the
// dash.consent.type.* namespace. Resolved at render via t().
const CONSENT_KEY_STEM: Record<string, string> = {
  TERMS: 'terms',
  PRIVACY: 'privacy',
  AI_PROCESSING: 'ai',
  DATA_TRANSFER: 'transfer',
  MARKETING: 'marketing',
  COOLING_OFF_WAIVER: 'cooling',
  COOKIE_ANALYTICS: 'cookie_analytics',
  COOKIE_MARKETING: 'cookie_marketing',
}

function getLabel(type: string, t: (key: string) => string): string {
  const stem = CONSENT_KEY_STEM[type]
  return stem ? t(`dash.consent.type.${stem}.label`) : type
}

function getDescription(type: string, t: (key: string) => string): string {
  const stem = CONSENT_KEY_STEM[type]
  return stem ? t(`dash.consent.type.${stem}.desc`) : ''
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// ─── Component ──────────────────────────────────────────────────────────

export default function ConsentManagementPage() {
  const t = useT()
  const [consents, setConsents] = useState<ConsentRecord[]>([])
  const [history, setHistory] = useState<HistoryRecord[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const [loading, setLoading] = useState(true)
  const [withdrawing, setWithdrawing] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const fetchConsents = useCallback(async () => {
    try {
      const res = await fetch('/api/consent')
      if (!res.ok) throw new Error('Failed to load consents')
      const data = await res.json()
      setConsents(data.consents)
    } catch {
      setError(t('dash.consent.err.load'))
    } finally {
      setLoading(false)
    }
  }, [t])

  useEffect(() => {
    fetchConsents()
  }, [fetchConsents])

  async function fetchHistory() {
    try {
      const res = await fetch('/api/consent/history')
      if (!res.ok) throw new Error('Failed to load history')
      const data = await res.json()
      setHistory(data.history)
      setShowHistory(true)
    } catch {
      setError(t('dash.consent.err.history'))
    }
  }

  async function handleWithdraw(consentType: string) {
    const confirmed = window.confirm(
      t('dash.consent.confirm_withdraw').replace('{label}', getLabel(consentType, t)),
    )
    if (!confirmed) return

    setWithdrawing(consentType)
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch('/api/consent', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consentType }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? t('dash.consent.err.withdraw'))
      }

      setSuccess(t('dash.consent.withdrawn_success').replace('{label}', getLabel(consentType, t)))
      await fetchConsents()
      if (showHistory) await fetchHistory()
    } catch (err) {
      setError(err instanceof Error ? err.message : t('dash.consent.err.withdraw'))
    } finally {
      setWithdrawing(null)
    }
  }

  function downloadConsentRecord() {
    const data = {
      exportedAt: new Date().toISOString(),
      activeConsents: consents,
      fullHistory: history.length > 0 ? history : undefined,
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `consent-record-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // ─── Loading state ─────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-muted-foreground">{t('dash.consent.loading')}</p>
      </div>
    )
  }

  // ─── Render ─────────────────────────────────────────────────────────

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-2">
        <Link
          href="/dashboard"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {t('dash.consent.back')}
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-primary">{t('dash.consent.title')}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t('dash.consent.intro')}</p>

      {/* Alerts */}
      {error && (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-500/30 bg-red-950/20 p-3 text-sm text-red-400"
        >
          {error}
        </div>
      )}
      {success && (
        <div
          role="status"
          className="mt-4 rounded-lg border border-green-500/30 bg-green-950/20 p-3 text-sm text-green-400"
        >
          {success}
        </div>
      )}

      {/* Active consents */}
      <section className="mt-8">
        <h2 className="text-lg font-medium text-foreground">{t('dash.consent.active_title')}</h2>

        {consents.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">{t('dash.consent.none_active')}</p>
        ) : (
          <div className="mt-4 space-y-4">
            {consents.map((consent) => (
              <div
                key={consent.id}
                className="rounded-lg border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-foreground">
                        {getLabel(consent.consentType, t)}
                      </h3>
                      {consent.isEssential ? (
                        <span className="inline-flex items-center rounded-full bg-blue-950/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                          {t('dash.consent.badge_essential')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          {t('dash.consent.badge_optional')}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {getDescription(consent.consentType, t)}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span>
                        {t('dash.consent.granted')} {formatDate(consent.grantedAt)}
                      </span>
                      <span>
                        {t('dash.consent.policy_version')} {consent.version}
                      </span>
                      <span>
                        {t('dash.consent.method')} {consent.method.replace('_', ' ').toLowerCase()}
                      </span>
                    </div>
                  </div>

                  {!consent.isEssential && (
                    <button
                      onClick={() => handleWithdraw(consent.consentType)}
                      disabled={withdrawing === consent.consentType}
                      className="ml-4 shrink-0 rounded-md border border-red-500/30 bg-card px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-950/20 disabled:opacity-50 transition-colors"
                    >
                      {withdrawing === consent.consentType
                        ? t('dash.consent.withdrawing')
                        : t('dash.consent.withdraw')}
                    </button>
                  )}
                </div>

                {consent.isEssential && (
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    {t('dash.consent.essential_note_a')}{' '}
                    <Link href="/dashboard/privacy" className="text-primary underline">
                      {t('dash.consent.essential_note_link')}
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Actions */}
      <section className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={showHistory ? () => setShowHistory(false) : fetchHistory}
          className="btn-outline text-sm"
        >
          {showHistory ? t('dash.consent.hide_history') : t('dash.consent.view_history')}
        </button>

        <button
          onClick={async () => {
            if (history.length === 0) await fetchHistory()
            downloadConsentRecord()
          }}
          className="btn-outline text-sm"
        >
          {t('dash.consent.download_record')}
        </button>
      </section>

      {/* Consent history */}
      {showHistory && (
        <section className="mt-8">
          <h2 className="text-lg font-medium text-foreground">{t('dash.consent.history_title')}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t('dash.consent.history_intro')}</p>

          {history.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">{t('dash.consent.no_history')}</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <th className="px-3 py-2">{t('dash.consent.col_type')}</th>
                    <th className="px-3 py-2">{t('dash.consent.col_action')}</th>
                    <th className="px-3 py-2">{t('dash.consent.col_version')}</th>
                    <th className="px-3 py-2">{t('dash.consent.col_date')}</th>
                    <th className="px-3 py-2">{t('dash.consent.col_method')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {history.map((record) => (
                    <tr key={record.id} className="hover:bg-muted">
                      <td className="px-3 py-2 font-medium text-foreground">
                        {getLabel(record.consentType, t)}
                      </td>
                      <td className="px-3 py-2">
                        {record.granted ? (
                          <span className="text-green-600">{t('dash.consent.action_granted')}</span>
                        ) : (
                          <span className="text-red-600">{t('dash.consent.action_withdrawn')}</span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">{record.version}</td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {formatDate(record.grantedAt)}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {record.method.replace('_', ' ').toLowerCase()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* Rights notice */}
      <section className="mt-10 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
        <p className="font-medium text-primary">{t('dash.consent.rights_title')}</p>
        <p className="mt-1">{t('dash.consent.rights_body')}</p>
      </section>
    </div>
  )
}
