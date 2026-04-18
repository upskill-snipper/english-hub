'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Settings,
  User,
  CreditCard,
  Bell,
  Tag,
  FileText,
  ExternalLink,
  Save,
  Check,
} from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import type { Affiliate } from '@/lib/types'

interface AffiliateSettingsClientProps {
  affiliate: Affiliate
}

export default function AffiliateSettingsClient({
  affiliate,
}: AffiliateSettingsClientProps) {
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // Profile fields
  const [displayName, setDisplayName] = useState(affiliate.full_name)
  const [tiktok, setTiktok] = useState(affiliate.tiktok_handle ?? '')
  const [instagram, setInstagram] = useState(affiliate.instagram_handle ?? '')
  const [youtube, setYoutube] = useState('')
  const [twitter, setTwitter] = useState('')
  const [followers, setFollowers] = useState(affiliate.approx_follower_count ?? '')
  const [bio, setBio] = useState(affiliate.audience_description ?? '')

  // Payout fields
  const [bankName, setBankName] = useState(affiliate.bank_account_name ?? '')
  const [sortCode, setSortCode] = useState(affiliate.bank_sort_code ?? '')
  const [accountNumber, setAccountNumber] = useState(affiliate.bank_account_number ?? '')
  const [payoutToGuardian, setPayoutToGuardian] = useState(affiliate.payout_to_guardian)
  const [guardianName, setGuardianName] = useState(
    affiliate.parental_consent_guardian_name ?? ''
  )
  const [guardianEmail, setGuardianEmail] = useState(
    affiliate.parental_consent_guardian_email ?? ''
  )

  // Notification preferences
  const [notifyReferral, setNotifyReferral] = useState(true)
  const [notifyCommission, setNotifyCommission] = useState(true)
  const [notifyPayout, setNotifyPayout] = useState(true)
  const [notifyMonthlySummary, setNotifyMonthlySummary] = useState(true)

  // Promo code
  const viaToken =
    affiliate.rewardful_link_token ?? affiliate.rewardful_affiliate_id ?? ''
  const [customCode, setCustomCode] = useState('')
  const [codeRequested, setCodeRequested] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    // Stub: wire up Supabase update when backend is ready
    await new Promise((r) => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleRequestCode = () => {
    if (!customCode.trim()) return
    // Stub: submit custom code request when API route exists
    setCodeRequested(true)
    setTimeout(() => setCodeRequested(false), 3000)
  }

  const agreementDate = affiliate.affiliate_agreement_signed_at
    ? new Date(affiliate.affiliate_agreement_signed_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

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
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input-field"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  TikTok
                </label>
                <input
                  type="text"
                  value={tiktok}
                  onChange={(e) => setTiktok(e.target.value)}
                  placeholder="@handle"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Instagram
                </label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="@handle"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  YouTube
                </label>
                <input
                  type="text"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder="Channel name or URL"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Twitter / X
                </label>
                <input
                  type="text"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="@handle"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Approximate Follower Count
              </label>
              <input
                type="text"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
                placeholder="e.g. 15,000"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Bio / About
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                placeholder="Tell us about your audience and content..."
                className="input-field resize-none"
              />
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
                Bank Account Name
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
                  Sort Code
                </label>
                <input
                  type="text"
                  value={sortCode}
                  onChange={(e) => setSortCode(e.target.value)}
                  placeholder="00-00-00"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Account Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="00000000"
                  className="input-field"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Payout to guardian
                </p>
                <p className="text-xs text-muted-foreground">
                  Enable if you are under 18 and payouts go to a parent/guardian
                </p>
              </div>
              <Switch
                checked={payoutToGuardian}
                onCheckedChange={setPayoutToGuardian}
              />
            </div>

            {payoutToGuardian && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 border-l-2 border-primary/30 ml-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Guardian Email
                  </label>
                  <input
                    type="email"
                    value={guardianEmail}
                    onChange={(e) => setGuardianEmail(e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground border-t border-border pt-3">
              Payouts are processed monthly for confirmed commissions. You will receive
              payment on the 1st of each month for the previous month&apos;s confirmed
              earnings.
            </p>
          </div>
        </section>

        {/* ── Notification Preferences ─────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              Notification Preferences
            </h2>
          </div>

          <div className="space-y-4">
            <NotificationRow
              label="Email on new referral signup"
              checked={notifyReferral}
              onChange={setNotifyReferral}
            />
            <NotificationRow
              label="Email on commission confirmed"
              checked={notifyCommission}
              onChange={setNotifyCommission}
            />
            <NotificationRow
              label="Email on payout processed"
              checked={notifyPayout}
              onChange={setNotifyPayout}
            />
            <NotificationRow
              label="Monthly performance summary"
              checked={notifyMonthlySummary}
              onChange={setNotifyMonthlySummary}
            />
          </div>
        </section>

        {/* ── Your Promo Code ──────────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Tag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Your Promo Code</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Current Promo Code
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-background rounded-lg border border-border px-4 py-3 font-mono text-sm text-foreground">
                  {viaToken || 'Not assigned'}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Request Custom Promo Code
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                  placeholder="e.g. EMMA25"
                  className="input-field flex-1"
                  maxLength={20}
                />
                <button
                  onClick={handleRequestCode}
                  disabled={!customCode.trim() || codeRequested}
                  className="btn-primary px-4 py-3 text-sm shrink-0"
                >
                  {codeRequested ? (
                    <>
                      <Check className="w-4 h-4" />
                      Requested
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">
                Custom codes are subject to approval and availability.
              </p>
            </div>
          </div>
        </section>

        {/* ── Affiliate Agreement ───────────────────────────────────── */}
        <section className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-5">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              Affiliate Agreement
            </h2>
          </div>

          <div className="space-y-3">
            {agreementDate && (
              <p className="text-sm text-foreground">
                Signed on{' '}
                <span className="font-semibold">{agreementDate}</span>
                {affiliate.affiliate_agreement_version && (
                  <span className="text-muted-foreground">
                    {' '}(v{affiliate.affiliate_agreement_version})
                  </span>
                )}
              </p>
            )}

            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              View affiliate agreement
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-3">
              <p className="text-sm text-yellow-700">
                <strong>Disclosure reminder:</strong> You must include{' '}
                <code className="bg-yellow-500/20 px-1 rounded">#ad</code> in the first
                3 words of every promotional post. Failure to disclose may result in
                commission being voided.
              </p>
            </div>
          </div>
        </section>

        {/* ── Save Button ──────────────────────────────────────────── */}
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
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function NotificationRow({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-sm text-foreground">{label}</span>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  )
}
