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
  getAccount,
  seedMockData,
  setAccount,
} from '@/components/affiliate/mock-data'
import { useT } from '@/lib/i18n/use-t'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function AffiliateLoginPage() {
  const t = useT()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError(t('aff.login.enter_both'))
      return
    }
    setLoading(true)
    // Phase-7: Supabase - use signInWithPassword
    setTimeout(() => {
      const existing = getAccount()
      if (!existing) {
        // Demo-friendly: auto-create an account the first time
        setAccount(createDefaultAccount({ email, name: email.split('@')[0] }))
      }
      seedMockData()
      router.push('/affiliate/dashboard')
    }, 400)
  }

  return (
    <div className="min-h-screen px-4 py-16 sm:py-24">
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 -ml-2"
          render={<Link href="/affiliate" />}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('aff.login.back_to_programme')}
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Sparkles className="w-4 h-4" />
              </div>
              <CardTitle className="text-2xl">{t('aff.login.title')}</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">{t('aff.login.subtitle')}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('aff.login.email_label')}</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('aff.login.email_placeholder')}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t('aff.login.password_label')}</Label>
                  <Link href="#" className="text-xs text-primary hover:underline">
                    {t('aff.login.forgot')}
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="text-xs text-destructive" role="alert">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? t('aff.login.signing_in') : t('aff.login.sign_in')}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t('aff.login.new_here')}{' '}
                <Link href="/affiliate/signup" className="text-primary hover:underline">
                  {t('aff.login.apply_to_join')}
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
