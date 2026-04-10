'use client'

import { useEffect, useMemo, useState } from 'react'
import { AffiliateSidebar } from '@/components/affiliate/AffiliateSidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getAccount, type AffiliateAccount } from '@/components/affiliate/mock-data'
import { Check, Copy, Link2, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

// TODO: Supabase — persist generated tracking links to affiliate_links table

const BASE_URL = 'https://english-hub.app'

const DESTINATIONS = [
  { id: 'homepage', label: 'Homepage', path: '/' },
  { id: 'pricing', label: 'Pricing', path: '/pricing' },
  { id: 'igcse', label: 'IGCSE', path: '/igcse' },
  { id: 'mock-exams', label: 'Mock Exams', path: '/mock-exams' },
  { id: 'for-schools', label: 'For Schools', path: '/for-schools' },
]

const UTM_PRESETS = [
  {
    id: 'social',
    label: 'Social Post',
    params: { utm_source: 'social', utm_medium: 'post', utm_campaign: 'affiliate' },
  },
  {
    id: 'newsletter',
    label: 'Newsletter',
    params: {
      utm_source: 'newsletter',
      utm_medium: 'email',
      utm_campaign: 'affiliate',
    },
  },
  {
    id: 'blog',
    label: 'Blog review',
    params: { utm_source: 'blog', utm_medium: 'review', utm_campaign: 'affiliate' },
  },
  {
    id: 'youtube',
    label: 'YouTube',
    params: {
      utm_source: 'youtube',
      utm_medium: 'video',
      utm_campaign: 'affiliate',
    },
  },
]

export default function AffiliateLinksPage() {
  const [account, setAccountState] = useState<AffiliateAccount | null>(null)
  const [destination, setDestination] = useState(DESTINATIONS[0].id)
  const [preset, setPreset] = useState(UTM_PRESETS[0].id)
  const [customCampaign, setCustomCampaign] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    setAccountState(getAccount())
  }, [])

  const affiliateId = account?.id ?? 'demo-affiliate'

  const destObj = DESTINATIONS.find((d) => d.id === destination) ?? DESTINATIONS[0]
  const presetObj = UTM_PRESETS.find((p) => p.id === preset) ?? UTM_PRESETS[0]

  const trackingUrl = useMemo(() => {
    const url = new URL(BASE_URL + destObj.path)
    url.searchParams.set('ref', affiliateId)
    Object.entries(presetObj.params).forEach(([k, v]) => {
      url.searchParams.set(k, v)
    })
    if (customCampaign) url.searchParams.set('utm_content', customCampaign)
    return url.toString()
  }, [destObj, presetObj, affiliateId, customCampaign])

  const quickLinks = DESTINATIONS.map((d) => {
    const url = new URL(BASE_URL + d.path)
    url.searchParams.set('ref', affiliateId)
    url.searchParams.set('utm_source', 'affiliate')
    return { ...d, url: url.toString() }
  })

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1500)
    } catch {
      // noop
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AffiliateSidebar />
      <main className="flex-1 px-4 py-8 sm:px-8 max-w-4xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Tracking Links</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Generate personalised links with UTM tracking and copy them in one click.
          </p>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <CardTitle>Link builder</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label>Destination page</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DESTINATIONS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDestination(d.id)}
                    className={cn(
                      'rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
                      destination === d.id
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border/60 bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground'
                    )}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>UTM preset</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {UTM_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPreset(p.id)}
                    className={cn(
                      'rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
                      preset === p.id
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border/60 bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground'
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="campaign">Custom campaign tag (optional)</Label>
              <Input
                id="campaign"
                placeholder="e.g. spring-launch"
                value={customCampaign}
                onChange={(e) => setCustomCampaign(e.target.value)}
              />
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                Your tracking link
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 truncate font-mono text-xs sm:text-sm text-foreground">
                  {trackingUrl}
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(trackingUrl, 'main')}
                >
                  {copiedId === 'main' ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
            <p className="text-sm text-muted-foreground">
              Pre-built links for our most popular pages.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/20 p-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-foreground shrink-0">
                  <Link2 className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{link.label}</p>
                  <p className="text-xs text-muted-foreground truncate font-mono">
                    {link.url}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(link.url, link.id)}
                >
                  {copiedId === link.id ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy
                    </>
                  )}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
