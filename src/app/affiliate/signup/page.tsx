'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createDefaultAccount, seedMockData, setAccount } from '@/components/affiliate/mock-data'
import { useT } from '@/lib/i18n/use-t'
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react'

interface FormState {
  name: string
  email: string
  website: string
  audienceSize: string
  niche: string
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  website: '',
  audienceSize: '',
  niche: '',
}

const AUDIENCE_OPTIONS = [
  { value: '< 1,000', labelKey: 'aff.signup.audience.under_1k' },
  { value: '1,000 - 5,000', labelKey: 'aff.signup.audience.1k_5k' },
  { value: '5,000 - 25,000', labelKey: 'aff.signup.audience.5k_25k' },
  { value: '25,000 - 100,000', labelKey: 'aff.signup.audience.25k_100k' },
  { value: '100,000+', labelKey: 'aff.signup.audience.over_100k' },
] as const

const NICHE_OPTIONS = [
  { value: 'English tutoring', labelKey: 'aff.signup.niche.english_tutoring' },
  { value: 'School / classroom', labelKey: 'aff.signup.niche.school_classroom' },
  { value: 'Parenting & homeschool', labelKey: 'aff.signup.niche.parenting_homeschool' },
  { value: 'EdTech reviews', labelKey: 'aff.signup.niche.edtech_reviews' },
  { value: 'Language learning', labelKey: 'aff.signup.niche.language_learning' },
  { value: 'Other', labelKey: 'aff.signup.niche.other' },
] as const

export default function AffiliateSignupPage() {
  const t = useT()
  const router = useRouter()
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Phase-7: Supabase - insert affiliate row with pending status
    const account = createDefaultAccount({
      name: form.name,
      email: form.email,
      website: form.website,
      audienceSize: form.audienceSize,
      niche: form.niche,
      tier: 'tier-1',
    })
    setAccount(account)
    seedMockData()
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => router.push('/affiliate/dashboard'), 1200)
    }, 400)
  }

  return (
    <div className="min-h-screen px-4 py-16 sm:py-24">
      <div className="max-w-xl mx-auto">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 -ml-2"
          render={<Link href="/affiliate" />}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('aff.signup.back_to_programme')}
        </Button>

        {submitted ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {t('aff.signup.received_title')}
              </h2>
              <p className="text-muted-foreground">{t('aff.signup.redirecting')}</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <CardTitle className="text-2xl">{t('aff.signup.title')}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">{t('aff.signup.subtitle')}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('aff.signup.full_name_label')}</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('aff.signup.full_name_placeholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('aff.signup.email_label')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('aff.signup.email_placeholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">{t('aff.signup.website_label')}</Label>
                  <Input
                    id="website"
                    name="website"
                    required
                    value={form.website}
                    onChange={handleChange}
                    placeholder={t('aff.signup.website_placeholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audienceSize">{t('aff.signup.audience_size_label')}</Label>
                  <select
                    id="audienceSize"
                    name="audienceSize"
                    required
                    value={form.audienceSize}
                    onChange={handleChange}
                    className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25"
                  >
                    <option value="" disabled>
                      {t('aff.signup.audience_size_placeholder')}
                    </option>
                    {AUDIENCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="niche">{t('aff.signup.niche_label')}</Label>
                  <select
                    id="niche"
                    name="niche"
                    required
                    value={form.niche}
                    onChange={handleChange}
                    className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25"
                  >
                    <option value="" disabled>
                      {t('aff.signup.niche_placeholder')}
                    </option>
                    {NICHE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? t('aff.signup.submitting') : t('aff.signup.submit')}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t('aff.signup.already_partner')}{' '}
                  <Link href="/affiliate/login" className="text-primary hover:underline">
                    {t('aff.signup.log_in')}
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
