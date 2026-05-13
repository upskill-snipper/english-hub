'use client'

import { useEffect, useMemo, useState } from 'react'
import { AffiliateSidebar } from '@/components/affiliate/AffiliateSidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  getAccount,
  getConversions,
  seedMockData,
  setAccount,
  type AffiliateAccount,
  type AffiliateConversion,
} from '@/components/affiliate/mock-data'
import { useT } from '@/lib/i18n/use-t'
import { Banknote, Check, CircleDollarSign, Info, Wallet } from 'lucide-react'
import { cn } from '@/lib/utils'

// Phase-7: Supabase — move payout history and payment method to secure tables

const MINIMUM_PAYOUT_GBP = 50

type PayoutStatus = 'paid' | 'processing' | 'pending'

interface MockPayout {
  id: string
  period: string
  amount: number
  status: PayoutStatus
  method: string
  date: string
}

export default function AffiliatePayoutsPage() {
  const t = useT()
  const [account, setAccountState] = useState<AffiliateAccount | null>(null)
  const [conversions, setConversions] = useState<AffiliateConversion[]>([])
  const [method, setMethod] = useState<'paypal' | 'bank'>('paypal')
  const [details, setDetails] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    seedMockData()
    const acc = getAccount()
    setAccountState(acc)
    setConversions(getConversions())
    if (acc?.paymentMethod) {
      setMethod(acc.paymentMethod.type)
      setDetails(acc.paymentMethod.details)
    }
  }, [])

  const pendingBalance = useMemo(
    () => conversions.filter((c) => c.status !== 'paid').reduce((sum, c) => sum + c.commission, 0),
    [conversions],
  )

  const lifetimeEarnings = useMemo(
    () => conversions.reduce((sum, c) => sum + c.commission, 0),
    [conversions],
  )

  const payouts: MockPayout[] = useMemo(
    () => [
      {
        id: 'p-1',
        period: 'March 2026',
        amount: 218.4,
        status: 'paid',
        method: 'PayPal',
        date: '2026-04-02',
      },
      {
        id: 'p-2',
        period: 'February 2026',
        amount: 156.72,
        status: 'paid',
        method: 'PayPal',
        date: '2026-03-02',
      },
      {
        id: 'p-3',
        period: 'January 2026',
        amount: 89.1,
        status: 'paid',
        method: 'PayPal',
        date: '2026-02-02',
      },
    ],
    [],
  )

  const handleSavePaymentMethod = (e: React.FormEvent) => {
    e.preventDefault()
    if (!account) return
    // Phase-7: Supabase — persist to affiliate_payment_methods
    const updated: AffiliateAccount = {
      ...account,
      paymentMethod: { type: method, details },
    }
    setAccount(updated)
    setAccountState(updated)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AffiliateSidebar />
      <main className="flex-1 px-4 py-8 sm:px-8 max-w-5xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">{t('aff.payouts.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t('aff.payouts.subtitle')}</p>
        </header>

        {/* Balance summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card size="sm">
            <CardContent className="pt-2 space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Wallet className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('aff.payouts.pending_balance')}
                </p>
                <p className="text-2xl font-bold text-primary mt-1">£{pendingBalance.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent className="pt-2 space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-foreground">
                <CircleDollarSign className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('aff.payouts.lifetime_earnings')}
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  £{lifetimeEarnings.toFixed(2)}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent className="pt-2 space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-foreground">
                <Banknote className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('aff.payouts.minimum_payout')}
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">£{MINIMUM_PAYOUT_GBP}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/20 p-4 mb-8 flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0">
            <Info className="h-4 w-4" />
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">
              {t('aff.payouts.monthly_note_lead')}
            </span>{' '}
            {t('aff.payouts.monthly_note_body').replace('{min}', String(MINIMUM_PAYOUT_GBP))}
          </div>
        </div>

        {/* Payment method form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('aff.payouts.payment_method')}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {t('aff.payouts.payment_method_subtitle')}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSavePaymentMethod} className="space-y-5">
              <div className="grid grid-cols-2 gap-2">
                {(['paypal', 'bank'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMethod(m)}
                    className={cn(
                      'rounded-lg border px-4 py-3 text-sm font-medium transition-colors text-left',
                      method === m
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border/60 bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground',
                    )}
                  >
                    {m === 'paypal' ? t('aff.payouts.method_paypal') : t('aff.payouts.method_bank')}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">
                  {method === 'paypal'
                    ? t('aff.payouts.paypal_email_label')
                    : t('aff.payouts.account_ref_label')}
                </Label>
                <Input
                  id="details"
                  placeholder={
                    method === 'paypal'
                      ? t('aff.payouts.paypal_email_placeholder')
                      : t('aff.payouts.account_ref_placeholder')
                  }
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  required
                />
                {method === 'bank' && (
                  <p className="text-xs text-muted-foreground">{t('aff.payouts.bank_demo_hint')}</p>
                )}
              </div>

              <Button type="submit">
                {saved ? (
                  <>
                    <Check className="h-4 w-4" /> {t('aff.payouts.saved')}
                  </>
                ) : (
                  t('aff.payouts.save_payment_method')
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Payout history */}
        <Card>
          <CardHeader>
            <CardTitle>{t('aff.payouts.history_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto -mx-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="py-2 px-5 text-left font-medium">
                      {t('aff.payouts.col_period')}
                    </th>
                    <th className="py-2 px-3 text-left font-medium">
                      {t('aff.payouts.col_method')}
                    </th>
                    <th className="py-2 px-3 text-left font-medium">{t('aff.payouts.col_date')}</th>
                    <th className="py-2 px-3 text-left font-medium">
                      {t('aff.payouts.col_status')}
                    </th>
                    <th className="py-2 px-5 text-right font-medium">
                      {t('aff.payouts.col_amount')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payouts.map((p) => (
                    <tr key={p.id} className="border-b border-border/40 last:border-0">
                      <td className="py-3 px-5 font-medium text-foreground">{p.period}</td>
                      <td className="py-3 px-3 text-muted-foreground">{p.method}</td>
                      <td className="py-3 px-3 text-muted-foreground">{p.date}</td>
                      <td className="py-3 px-3">
                        <StatusBadge status={p.status} t={t} />
                      </td>
                      <td className="py-3 px-5 text-right font-semibold text-foreground">
                        £{p.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function StatusBadge({ status, t }: { status: PayoutStatus; t: (k: string) => string }) {
  const styles =
    status === 'paid'
      ? 'bg-primary/15 text-primary border-primary/30'
      : status === 'processing'
        ? 'bg-accent text-foreground border-border'
        : 'bg-muted text-muted-foreground border-border'
  const label =
    status === 'paid'
      ? t('aff.payouts.status_paid')
      : status === 'processing'
        ? t('aff.payouts.status_processing')
        : t('aff.payouts.status_pending')

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        styles,
      )}
    >
      {label}
    </span>
  )
}
