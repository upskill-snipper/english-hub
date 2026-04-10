'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  createDefaultAccount,
  seedMockData,
  setAccount,
} from '@/components/affiliate/mock-data'
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react'

// TODO: Supabase — submit signup to affiliates table with pending status

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
  '< 1,000',
  '1,000 – 5,000',
  '5,000 – 25,000',
  '25,000 – 100,000',
  '100,000+',
]

const NICHE_OPTIONS = [
  'English tutoring',
  'School / classroom',
  'Parenting & homeschool',
  'EdTech reviews',
  'Language learning',
  'Other',
]

export default function AffiliateSignupPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Supabase — insert affiliate row with pending status
    const account = createDefaultAccount({
      name: form.name,
      email: form.email,
      website: form.website,
      audienceSize: form.audienceSize,
      niche: form.niche,
      tier: 'bronze',
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
          Back to programme
        </Button>

        {submitted ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Application received
              </h2>
              <p className="text-muted-foreground">
                Redirecting to your dashboard...
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <CardTitle className="text-2xl">Apply to become an affiliate</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Tell us about yourself and your audience. Applications are reviewed
                within 48 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website or social handle</Label>
                  <Input
                    id="website"
                    name="website"
                    required
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://yourblog.com or @yourhandle"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audienceSize">Audience size</Label>
                  <select
                    id="audienceSize"
                    name="audienceSize"
                    required
                    value={form.audienceSize}
                    onChange={handleChange}
                    className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {AUDIENCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="niche">Content niche</Label>
                  <select
                    id="niche"
                    name="niche"
                    required
                    value={form.niche}
                    onChange={handleChange}
                    className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25"
                  >
                    <option value="" disabled>
                      Select a niche
                    </option>
                    {NICHE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit application'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Already a partner?{' '}
                  <Link href="/affiliate/login" className="text-primary hover:underline">
                    Log in
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
