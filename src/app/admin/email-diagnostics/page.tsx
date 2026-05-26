'use client'

// ─── Admin Email Diagnostics ────────────────────────────────────────────
//
// Surfaces the Resend domain-verification state and lets an admin send
// a test email through the production Resend wrapper. Useful when sign-up
// verification emails are failing to deliver and we need to figure out
// whether the issue is:
//   (a) Resend API key (no-key / 401)
//   (b) Sending domain not verified (DNS records missing) - most common
//   (c) Recipient blocking / spam folder
//   (d) Supabase SMTP misconfiguration (covered by RUNBOOK below)
// ────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'
import {
  ArrowLeft,
  Mail,
  RefreshCw,
  Send,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Loader2,
} from 'lucide-react'

interface DomainRecord {
  record: string
  name: string
  type: string
  value: string
  status?: string
  ttl?: string | number
  priority?: number
}

interface ResendDomain {
  id: string
  name: string
  status: string
  region?: string
  created_at?: string
  records?: DomainRecord[]
}

interface StatusResponse {
  ok: boolean
  reason?: string
  summary: string
  targetDomain?: string
  target?: ResendDomain | null
  domains?: ResendDomain[]
  detail?: string
  status?: number
}

interface TestResponse {
  ok: boolean
  messageId?: string
  to?: string
  sentAt?: string
  reason?: string
  detail?: string
  hint?: string
}

export default function EmailDiagnosticsPage() {
  const t = useT()
  const [status, setStatus] = useState<StatusResponse | null>(null)
  const [statusLoading, setStatusLoading] = useState(true)
  const [statusError, setStatusError] = useState<string | null>(null)

  const [testTo, setTestTo] = useState('')
  const [testToken, setTestToken] = useState('')
  const [testResult, setTestResult] = useState<TestResponse | null>(null)
  const [testLoading, setTestLoading] = useState(false)

  useEffect(() => {
    void loadStatus()
  }, [])

  async function loadStatus() {
    setStatusLoading(true)
    setStatusError(null)
    try {
      const res = await fetch('/api/admin/email-status', { cache: 'no-store' })
      const data = (await res.json()) as StatusResponse
      if (!res.ok && res.status !== 200) {
        setStatusError(`HTTP ${res.status}: ${data.summary ?? 'failed to load'}`)
      }
      setStatus(data)
    } catch (err) {
      setStatusError(err instanceof Error ? err.message : t('admin.email.unknown_error'))
    } finally {
      setStatusLoading(false)
    }
  }

  async function sendTest(e: React.FormEvent) {
    e.preventDefault()
    if (!testTo.trim()) return
    setTestLoading(true)
    setTestResult(null)
    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (testToken.trim()) headers['x-admin-token'] = testToken.trim()
      const res = await fetch('/api/admin/email-test', {
        method: 'POST',
        headers,
        body: JSON.stringify({ to: testTo.trim() }),
      })
      const data = (await res.json()) as TestResponse
      setTestResult(data)
    } catch (err) {
      setTestResult({
        ok: false,
        reason: 'network',
        detail: err instanceof Error ? err.message : t('admin.email.unknown_error'),
      })
    } finally {
      setTestLoading(false)
    }
  }

  const target = status?.target
  const isVerified = target?.status === 'verified'
  const targetExists = !!target

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.back_to_admin')}
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Mail className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.email.title')}</h1>
          </div>
          <button
            onClick={loadStatus}
            disabled={statusLoading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${statusLoading ? 'animate-spin' : ''}`} />
            {t('admin.refresh')}
          </button>
        </div>

        {/* ── Resend domain status ───────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.email.domain_status')}
          </h2>

          {statusLoading && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
              {t('admin.email.calling_api')}
            </div>
          )}

          {statusError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
              {statusError}
            </div>
          )}

          {!statusLoading && status && (
            <>
              <div
                className={`rounded-lg p-4 mb-4 flex items-start gap-3 ${
                  isVerified
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : targetExists
                      ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {isVerified ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                ) : targetExists ? (
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 mt-0.5 shrink-0" />
                )}
                <div className="text-sm font-medium">{status.summary}</div>
              </div>

              {target && target.records && target.records.length > 0 && (
                <details className="text-sm" open={!isVerified}>
                  <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                    {t('admin.email.dns_records')} ({target.records.length})
                  </summary>
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border text-left text-muted-foreground">
                          <th className="pb-2 pr-3 font-medium">{t('admin.email.col.status')}</th>
                          <th className="pb-2 pr-3 font-medium">{t('admin.email.col.type')}</th>
                          <th className="pb-2 pr-3 font-medium">{t('admin.email.col.name')}</th>
                          <th className="pb-2 pr-3 font-medium">{t('admin.email.col.value')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {target.records.map((r, i) => (
                          <tr key={i} className="text-foreground align-top">
                            <td className="py-2 pr-3">
                              <span
                                className={`inline-block text-[10px] px-2 py-0.5 rounded-full ${
                                  r.status === 'verified'
                                    ? 'bg-green-500/10 text-green-400'
                                    : 'bg-amber-500/10 text-amber-400'
                                }`}
                              >
                                {r.status ?? t('admin.email.status_unknown')}
                              </span>
                            </td>
                            <td className="py-2 pr-3 font-mono">{r.type}</td>
                            <td className="py-2 pr-3 font-mono break-all">{r.name}</td>
                            <td className="py-2 pr-3 font-mono break-all max-w-md">{r.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              )}

              {status.detail && (
                <p className="text-xs text-muted-foreground mt-3 font-mono break-all">
                  {status.detail}
                </p>
              )}
            </>
          )}
        </section>

        {/* ── Send test email ───────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.email.send_test_title')}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">{t('admin.email.send_test_body')}</p>

          <form onSubmit={sendTest} className="space-y-3">
            <div>
              <label className="block text-xs text-muted-foreground mb-1" htmlFor="email-to">
                {t('admin.email.recipient_label')}
              </label>
              <input
                id="email-to"
                type="email"
                required
                value={testTo}
                onChange={(e) => setTestTo(e.target.value)}
                placeholder={t('admin.email.recipient_placeholder')}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1" htmlFor="email-token">
                {t('admin.email.token_label')}
              </label>
              <input
                id="email-token"
                type="password"
                value={testToken}
                onChange={(e) => setTestToken(e.target.value)}
                placeholder={t('admin.email.token_placeholder')}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={testLoading || !testTo.trim()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {testLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {t('admin.email.send_test')}
            </button>
          </form>

          {testResult && (
            <div
              className={`mt-4 rounded-lg p-3 text-sm ${
                testResult.ok
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {testResult.ok ? (
                <>
                  <div className="font-medium">{t('admin.email.sent')}</div>
                  <div className="text-xs mt-1">
                    {t('admin.email.resend_msg_id')}{' '}
                    <span className="font-mono">{testResult.messageId}</span>
                  </div>
                  <div className="text-xs">
                    {t('admin.email.delivered_to')} {testResult.to}
                  </div>
                </>
              ) : (
                <>
                  <div className="font-medium">
                    {t('admin.email.failed_prefix')} {testResult.reason}
                  </div>
                  {testResult.hint && <div className="text-xs mt-1">{testResult.hint}</div>}
                  {testResult.detail && (
                    <div className="text-xs mt-1 font-mono break-all opacity-80">
                      {testResult.detail}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>

        {/* ── Runbook ───────────────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.email.runbook_title')}
          </h2>
          <ol className="text-sm text-foreground space-y-3 list-decimal list-inside">
            <li>
              <strong>{t('admin.email.runbook.1_strong')}</strong> {t('admin.email.runbook.1_body')}
            </li>
            <li>
              <strong>{t('admin.email.runbook.2_strong')}</strong>{' '}
              {t('admin.email.runbook.2_body_pre')}{' '}
              <a
                className="text-primary underline"
                href="https://resend.com/domains"
                target="_blank"
                rel="noreferrer"
              >
                resend.com/domains
              </a>
              .
            </li>
            <li>
              <strong>{t('admin.email.runbook.3_strong')}</strong>{' '}
              {t('admin.email.runbook.3_body_pre')}{' '}
              <a
                className="text-primary underline"
                href="https://resend.com/emails"
                target="_blank"
                rel="noreferrer"
              >
                /emails
              </a>{' '}
              {t('admin.email.runbook.3_body_post')}
            </li>
            <li>
              <strong>{t('admin.email.runbook.4_strong')}</strong> {t('admin.email.runbook.4_body')}
            </li>
            <li>
              <strong>{t('admin.email.runbook.5_strong')}</strong> {t('admin.email.runbook.5_body')}
              <span className="block ml-4 mt-1 font-mono text-xs text-muted-foreground">
                host=smtp.resend.com · port=587 · username=resend · sender=noreply@theenglishhub.app
              </span>
            </li>
            <li>
              <strong>{t('admin.email.runbook.6_strong')}</strong> {t('admin.email.runbook.6_body')}
            </li>
            <li>
              <strong>{t('admin.email.runbook.7_strong')}</strong> {t('admin.email.runbook.7_body')}
            </li>
          </ol>
        </section>

        {/* ── DNS records ───────────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mt-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.email.dns_title')}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {t('admin.email.dns_body_pre')}{' '}
            <a
              className="text-primary underline"
              href="https://resend.com/domains"
              target="_blank"
              rel="noreferrer"
            >
              resend.com/domains
            </a>{' '}
            {t('admin.email.dns_body_post')} <strong>{t('admin.email.dns_body_strong')}</strong>{' '}
            {t('admin.email.dns_body_for_every')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-2 pr-3 font-medium">{t('admin.email.col.num')}</th>
                  <th className="pb-2 pr-3 font-medium">{t('admin.email.col.type')}</th>
                  <th className="pb-2 pr-3 font-medium">{t('admin.email.col.name')}</th>
                  <th className="pb-2 pr-3 font-medium">{t('admin.email.col.value')}</th>
                  <th className="pb-2 font-medium">{t('admin.email.col.purpose')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground align-top">
                <tr>
                  <td className="py-2 pr-3">1</td>
                  <td className="py-2 pr-3 font-mono">TXT</td>
                  <td className="py-2 pr-3 font-mono">@</td>
                  <td className="py-2 pr-3 font-mono break-all">
                    v=spf1 include:_spf.resend.com ~all
                  </td>
                  <td className="py-2 text-muted-foreground">{t('admin.email.dns.spf')}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">2</td>
                  <td className="py-2 pr-3 font-mono">CNAME</td>
                  <td className="py-2 pr-3 font-mono">resend._domainkey</td>
                  <td className="py-2 pr-3 font-mono break-all opacity-70">
                    {t('admin.email.dns.dkim_value_placeholder')}
                  </td>
                  <td className="py-2 text-muted-foreground">{t('admin.email.dns.dkim1')}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">3</td>
                  <td className="py-2 pr-3 font-mono">CNAME</td>
                  <td className="py-2 pr-3 font-mono">resend2._domainkey</td>
                  <td className="py-2 pr-3 font-mono break-all opacity-70">
                    {t('admin.email.dns.dkim_value_placeholder')}
                  </td>
                  <td className="py-2 text-muted-foreground">{t('admin.email.dns.dkim2')}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">4</td>
                  <td className="py-2 pr-3 font-mono">TXT</td>
                  <td className="py-2 pr-3 font-mono">_dmarc</td>
                  <td className="py-2 pr-3 font-mono break-all">
                    v=DMARC1; p=none; rua=mailto:dmarc@theenglishhub.app
                  </td>
                  <td className="py-2 text-muted-foreground">{t('admin.email.dns.dmarc')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-4">{t('admin.email.dns_footer')}</p>
        </section>
      </div>
    </div>
  )
}
