'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Settings, User, CreditCard, Tag, Save, Check, AlertCircle } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────

export interface AffiliateAccountSettings {
  id: string
  code: string
  status: string
  tier: 'bronze' | 'silver' | 'gold'
  full_name: string
  email: string
  website: string | null
  social_handle: string | null
  audience_size: number | null
  audience_description: string | null
  promo_strategy: string | null
  payout_method: 'bank_transfer' | 'paypal' | 'stripe_connect'
  payout_email: string | null
  bank_account_name: string | null
  bank_sort_code: string | null
  bank_account_number: string | null
  stripe_connect_account_id: string | null
  approved_at: string | null
  created_at: string
}

interface AffiliateSettingsClientProps {
  affiliate: AffiliateAccountSettings
}

// ─── Helpers ──────────────────────────────────────────────────────────────

/** Format a UK sort code as `12-34-56`. Strips non-digits, then groups in 2s. */
function formatSortCode(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 6)
  const parts: string[] = []
  for (let i = 0; i < digits.length; i += 2) {
    parts.push(digits.slice(i, i + 2))
  }
  return parts.join('-')
}

/** UK sort code: exactly 6 digits, displayed `12-34-56`. */
function isValidSortCode(value: string): boolean {
  return /^\d{2}-\d{2}-\d{2}$/.test(value)
}

/** UK account number: exactly 8 digits. */
function isValidAccountNumber(value: string): boolean {
  return /^\d{8}$/.test(value)
}

/** Mask a stored sort code for display: `12-**-56`. Returns null if not 6 digits. */
function maskSortCode(stored: string | null): string | null {
  if (!stored) return null
  const digits = stored.replace(/\D/g, '')
  if (digits.length !== 6) return stored
  return `${digits.slice(0, 2)}-**-${digits.slice(4, 6)}`
}

/** Mask a stored account number: `****5678` (last 4 visible). */
function maskAccountNumber(stored: string | null): string | null {
  if (!stored) return null
  const digits = stored.replace(/\D/g, '')
  if (digits.length < 4) return stored
  return `****${digits.slice(-4)}`
}

// ─── Component ────────────────────────────────────────────────────────────

export default function AffiliateSettingsClient({ affiliate }: AffiliateSettingsClientProps) {
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Profile
  const [displayName, setDisplayName] = useState(affiliate.full_name)

  // Payout
  const [payoutMethod, setPayoutMethod] = useState<'bank_transfer' | 'paypal' | 'stripe_connect'>(
    affiliate.payout_method,
  )
  const [payoutEmail, setPayoutEmail] = useState(affiliate.payout_email ?? '')
  const [bankName, setBankName] = useState(affiliate.bank_account_name ?? '')
  const [sortCode, setSortCode] = useState('')
  const [accountNumber, setAccountNumber] = useState('')

  // Whether the user has typed new bank details this session — we only send
  // those fields to the API if they are non-empty, so stored values are not
  // overwritten with blanks when the user just edits their display name.
  const hasNewSortCode = sortCode.trim().length > 0
  const hasNewAccountNumber = accountNumber.trim().length > 0

  const storedSortCodeMasked = maskSortCode(affiliate.bank_sort_code)
  const storedAccountNumberMasked = maskAccountNumber(affiliate.bank_account_number)

  const handleSave = async () => {
    setError(null)

    // Client-side validation
    if (!displayName.trim() || displayName.trim().length < 2) {
      setError('Display name must be at least 2 characters.')
      return
    }
    if (payoutMethod === 'paypal' && !payoutEmail.trim()) {
      setError('A PayPal email address is required for PayPal payouts.')
      return
    }
    if (payoutMethod === 'bank_transfer') {
      if (hasNewSortCode && !isValidSortCode(sortCode)) {
        setError('Sort code must be 6 digits in the format 12-34-56.')
        return
      }
      if (hasNewAccountNumber && !isValidAccountNumber(accountNumber)) {
        setError('Account number must be exactly 8 digits.')
        return
      }
      // If the user has never set bank details and isn't entering any now,
      // block saving so we don't end up with a half-configured BACS payee.
      const hasStoredBankDetails =
        Boolean(affiliate.bank_sort_code) && Boolean(affiliate.bank_account_number)
      if (!hasStoredBankDetails && (!hasNewSortCode || !hasNewAccountNumber)) {
        setError('Please enter both sort code and account number for bank transfer payouts.')
        return
      }
    }

    setSaving(true)
    try {
      const payload: Record<string, unknown> = {
        full_name: displayName.trim(),
        payout_method: payoutMethod,
      }
      if (payoutMethod === 'paypal') {
        payload.payout_email = payoutEmail.trim()
      }
      if (payoutMethod === 'bank_transfer') {
        if (bankName.trim()) payload.bank_account_name = bankName.trim()
        if (hasNewSortCode) payload.bank_sort_code = sortCode
        if (hasNewAccountNumber) payload.bank_account_number = accountNumber
      }

      const res = await fetch('/api/affiliate/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        setError(json.error ?? 'Failed to save settings. Please try again.')
        setSaving(false)
        return
      }

      // Clear the fresh-input fields so subsequent renders show the masked
      // stored values (the page would need a refresh to reflect them, but
      // we should not keep the raw digits in component state).
      setSortCode('')
      setAccountNumber('')
      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch (err) {
      console.error('[affiliate/settings] save failed:', err)
      setError('Network error. Please try again.')
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/affiliates/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Settings className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Affiliate Settings</h1>
        </div>

        {/* ── Profile Section ──────────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Profile</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Display name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input-field"
                maxLength={120}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={affiliate.email}
                disabled
                className="input-field opacity-60 cursor-not-allowed"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Email is linked to your account and cannot be changed here.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Tier</label>
              <div className="flex items-center gap-3">
                <div className="bg-background rounded-lg border border-border px-4 py-3 text-sm text-foreground capitalize">
                  {affiliate.tier}
                </div>
                <p className="text-xs text-muted-foreground">
                  Your tier is determined by confirmed referrals and updates automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Payout Details ───────────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <CreditCard className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Payout Details</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Payout method
              </label>
              <select
                value={payoutMethod}
                onChange={(e) =>
                  setPayoutMethod(e.target.value as 'bank_transfer' | 'paypal' | 'stripe_connect')
                }
                className="input-field"
              >
                <option value="bank_transfer">UK Bank transfer (BACS)</option>
                <option value="paypal">PayPal</option>
                <option value="stripe_connect">Stripe Connect</option>
              </select>
            </div>

            {payoutMethod === 'paypal' && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  PayPal email
                </label>
                <input
                  type="email"
                  value={payoutEmail}
                  onChange={(e) => setPayoutEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Payouts will be sent to this PayPal address.
                </p>
              </div>
            )}

            {payoutMethod === 'bank_transfer' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Account name
                  </label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="Name on the bank account"
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Sort code
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={sortCode}
                      onChange={(e) => setSortCode(formatSortCode(e.target.value))}
                      placeholder={storedSortCodeMasked ?? '12-34-56'}
                      className="input-field font-mono"
                      maxLength={8}
                    />
                    {storedSortCodeMasked && !sortCode && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Stored: <span className="font-mono">{storedSortCodeMasked}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Account number
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={accountNumber}
                      onChange={(e) =>
                        setAccountNumber(e.target.value.replace(/\D/g, '').slice(0, 8))
                      }
                      placeholder={storedAccountNumberMasked ?? '12345678'}
                      className="input-field font-mono"
                      maxLength={8}
                    />
                    {storedAccountNumberMasked && !accountNumber && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Stored: <span className="font-mono">{storedAccountNumberMasked}</span>
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Leave the sort code and account number fields blank to keep your current details.
                  We only show the last 4 digits for security.
                </p>
              </>
            )}

            {payoutMethod === 'stripe_connect' && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-sm text-yellow-700">
                  Stripe Connect onboarding is handled separately. Please contact support to link
                  your Stripe account.
                </p>
                {affiliate.stripe_connect_account_id && (
                  <p className="text-xs text-yellow-700/80 mt-1 font-mono">
                    Connected: {affiliate.stripe_connect_account_id}
                  </p>
                )}
              </div>
            )}

            <p className="text-xs text-muted-foreground border-t border-border pt-3">
              Payouts are processed monthly for confirmed commissions on the 1st of each month for
              the previous month&apos;s confirmed earnings.
            </p>
          </div>
        </section>

        {/* ── Referral Code ────────────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Tag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Referral Code</h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Your referral code
              </label>
              <div className="bg-background rounded-lg border border-border px-4 py-3 font-mono text-sm text-foreground">
                {affiliate.code}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Your referral code is fixed and cannot be edited from this page. If you need to change
              it (for example to a custom branded code), please contact support.
            </p>
          </div>
        </section>

        {/* ── Save Button ──────────────────────────────────────────── */}
        {error && (
          <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn-primary px-6 py-3 text-sm gap-2"
          >
            {saving ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : saved ? (
              <>
                <Check className="w-4 h-4" />
                Saved
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save changes
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
