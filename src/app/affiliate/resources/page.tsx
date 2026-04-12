'use client'

import { useState } from 'react'
import { AffiliateSidebar } from '@/components/affiliate/AffiliateSidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Copy, Download, FileText, Image as ImageIcon } from 'lucide-react'

const BANNERS = [
  { id: 'banner-1', label: 'Leaderboard', size: '728 × 90' },
  { id: 'banner-2', label: 'Medium Rectangle', size: '300 × 250' },
  { id: 'banner-3', label: 'Square', size: '500 × 500' },
  { id: 'banner-4', label: 'Skyscraper', size: '160 × 600' },
]

const COPY_TEMPLATES = [
  {
    id: 'tweet-1',
    label: 'Short social post',
    body: 'Just discovered @TheEnglishHub — my students have levelled up their writing faster than I thought possible. Worth checking out if you teach IGCSE English 👉 {link}',
  },
  {
    id: 'email-1',
    label: 'Newsletter blurb',
    body: "I've been recommending The English Hub to families this term and the results have been remarkable. If your child is preparing for exams, it's the cleanest practice platform I've used. Get a look here: {link}",
  },
  {
    id: 'review-1',
    label: 'Blog review hook',
    body: 'After testing over a dozen English-learning platforms this year, one keeps standing out: The English Hub. Here is why I recommend it to every student I coach — {link}',
  },
]

const SCREENSHOTS = [
  { id: 'screen-1', label: 'Dashboard overview' },
  { id: 'screen-2', label: 'Practice question' },
  { id: 'screen-3', label: 'Essay feedback' },
  { id: 'screen-4', label: 'Progress report' },
]

export default function AffiliateResourcesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

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
      <main className="flex-1 px-4 py-8 sm:px-8 max-w-5xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Marketing Resources</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Grab ready-to-use banners, copy templates, and product shots.
          </p>
        </header>

        {/* Banners */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <ImageIcon className="h-4 w-4" />
              </div>
              <CardTitle>Banners</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BANNERS.map((banner) => (
                <div
                  key={banner.id}
                  className="rounded-xl border border-border/60 overflow-hidden bg-muted/20"
                >
                  <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent to-muted text-muted-foreground text-sm">
                    {banner.label} placeholder
                  </div>
                  <div className="flex items-center justify-between p-3 border-t border-border/40">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {banner.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{banner.size}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" /> PNG
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Copy templates */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <FileText className="h-4 w-4" />
              </div>
              <CardTitle>Copy templates</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground pt-1">
              Replace <code className="text-xs">{'{link}'}</code> with your tracking URL before publishing.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {COPY_TEMPLATES.map((tpl) => (
              <div
                key={tpl.id}
                className="rounded-xl border border-border/60 bg-muted/20 p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm font-medium text-foreground">{tpl.label}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(tpl.body, tpl.id)}
                  >
                    {copiedId === tpl.id ? (
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tpl.body}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Screenshots */}
        <Card>
          <CardHeader>
            <CardTitle>Product screenshots</CardTitle>
            <p className="text-sm text-muted-foreground pt-1">
              Use in reviews, videos, and blog posts. Crediting is appreciated but not required.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SCREENSHOTS.map((shot) => (
                <div
                  key={shot.id}
                  className="rounded-xl border border-border/60 overflow-hidden bg-muted/20"
                >
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-accent via-muted to-primary/10 text-muted-foreground text-xs text-center px-2">
                    {shot.label}
                  </div>
                  <div className="p-2 border-t border-border/40">
                    <Button size="xs" variant="ghost" className="w-full">
                      <Download className="h-3 w-3" /> Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
