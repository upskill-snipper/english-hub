'use client'

import { useState } from 'react'
import { AffiliateSidebar } from '@/components/affiliate/AffiliateSidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { Check, Copy, Download, FileText, Image as ImageIcon } from 'lucide-react'

const BANNERS = [
  { id: 'banner-1', labelKey: 'aff.resources.banner.leaderboard', size: '728 × 90' },
  { id: 'banner-2', labelKey: 'aff.resources.banner.medium_rectangle', size: '300 × 250' },
  { id: 'banner-3', labelKey: 'aff.resources.banner.square', size: '500 × 500' },
  { id: 'banner-4', labelKey: 'aff.resources.banner.skyscraper', size: '160 × 600' },
] as const

const COPY_TEMPLATES = [
  {
    id: 'tweet-1',
    labelKey: 'aff.resources.copy.short_social.label',
    bodyKey: 'aff.resources.copy.short_social.body',
  },
  {
    id: 'email-1',
    labelKey: 'aff.resources.copy.newsletter.label',
    bodyKey: 'aff.resources.copy.newsletter.body',
  },
  {
    id: 'review-1',
    labelKey: 'aff.resources.copy.blog_review.label',
    bodyKey: 'aff.resources.copy.blog_review.body',
  },
] as const

const SCREENSHOTS = [
  { id: 'screen-1', labelKey: 'aff.resources.shot.dashboard_overview' },
  { id: 'screen-2', labelKey: 'aff.resources.shot.practice_question' },
  { id: 'screen-3', labelKey: 'aff.resources.shot.essay_feedback' },
  { id: 'screen-4', labelKey: 'aff.resources.shot.progress_report' },
] as const

export default function AffiliateResourcesPage() {
  const t = useT()
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
          <h1 className="text-3xl font-bold text-foreground">{t('aff.resources.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t('aff.resources.subtitle')}</p>
        </header>

        {/* Banners */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <ImageIcon className="h-4 w-4" />
              </div>
              <CardTitle>{t('aff.resources.banners_title')}</CardTitle>
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
                    {t(banner.labelKey)} {t('aff.resources.placeholder_suffix')}
                  </div>
                  <div className="flex items-center justify-between p-3 border-t border-border/40">
                    <div>
                      <p className="text-sm font-medium text-foreground">{t(banner.labelKey)}</p>
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
              <CardTitle>{t('aff.resources.copy_templates_title')}</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground pt-1">
              {t('aff.resources.copy_templates_subtitle_lead')}{' '}
              <code className="text-xs">{'{link}'}</code>{' '}
              {t('aff.resources.copy_templates_subtitle_tail')}
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {COPY_TEMPLATES.map((tpl) => {
              const body = t(tpl.bodyKey)
              return (
                <div key={tpl.id} className="rounded-xl border border-border/60 bg-muted/20 p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-sm font-medium text-foreground">{t(tpl.labelKey)}</p>
                    <Button size="sm" variant="outline" onClick={() => handleCopy(body, tpl.id)}>
                      {copiedId === tpl.id ? (
                        <>
                          <Check className="h-4 w-4" /> {t('aff.resources.copied')}
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> {t('aff.resources.copy')}
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Screenshots */}
        <Card>
          <CardHeader>
            <CardTitle>{t('aff.resources.screenshots_title')}</CardTitle>
            <p className="text-sm text-muted-foreground pt-1">
              {t('aff.resources.screenshots_subtitle')}
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
                    {t(shot.labelKey)}
                  </div>
                  <div className="p-2 border-t border-border/40">
                    <Button size="xs" variant="ghost" className="w-full">
                      <Download className="h-3 w-3" /> {t('aff.resources.download')}
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
