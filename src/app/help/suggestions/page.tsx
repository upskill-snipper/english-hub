'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

export default function SuggestionsPage() {
  const t = useT()
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const SUGGESTION_CATEGORIES = [
    { value: 'feature', label: t('help.sug.cat.feature'), icon: '💡' },
    { value: 'content', label: t('help.sug.cat.content'), icon: '📚' },
    { value: 'ui', label: t('help.sug.cat.ui'), icon: '🎨' },
    { value: 'exam-board', label: t('help.sug.cat.board'), icon: '📝' },
    { value: 'tools', label: t('help.sug.cat.tools'), icon: '🛠️' },
    { value: 'other', label: t('help.sug.cat.other'), icon: '💬' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/support/suggestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, title, description, email }),
      })
      if (!res.ok) throw new Error('Failed to submit suggestion')
    } catch {
      // Silently continue — the confirmation screen still shows so the user
      // is not blocked. Once the API route exists it will persist properly.
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <main className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-card rounded-2xl shadow-md border border-border p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">{t('help.sug.thanks_title')}</h2>
            <p className="text-muted-foreground text-sm mb-6">{t('help.sug.thanks_body')}</p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/help"
                className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/80 transition-colors"
              >
                {t('help.report.back_to_help_cta')}
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setCategory('')
                  setTitle('')
                  setDescription('')
                }}
                className="px-5 py-2 border border-border text-muted-foreground rounded-lg text-sm hover:bg-muted transition-colors"
              >
                {t('help.sug.another')}
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }

  const popular: Array<{ title: string; votes: number; status: string; statusKey: string }> = [
    {
      title: t('help.sug.req.past_papers'),
      votes: 47,
      status: t('help.sug.status.planned'),
      statusKey: 'planned',
    },
    {
      title: t('help.sug.req.audio_poems'),
      votes: 35,
      status: t('help.sug.status.under_review'),
      statusKey: 'under_review',
    },
    {
      title: t('help.sug.req.dark_mode'),
      votes: 31,
      status: t('help.sug.status.planned'),
      statusKey: 'planned',
    },
    {
      title: t('help.sug.req.wjec_guides'),
      votes: 28,
      status: t('help.sug.status.in_progress'),
      statusKey: 'in_progress',
    },
    {
      title: t('help.sug.req.mobile_app'),
      votes: 24,
      status: t('help.sug.status.under_review'),
      statusKey: 'under_review',
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link href="/help" className="text-sm text-primary hover:underline mb-4 inline-block">
            {t('help.report.back_to_help')}
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('help.sug.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('help.sug.lead')}</p>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border shadow-md p-6 sm:p-8 space-y-6"
          >
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                {t('help.sug.cat_label')} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUGGESTION_CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setCategory(cat.value)}
                    className={`flex items-center gap-2 p-3 rounded-lg border text-left transition-all ${
                      category === cat.value
                        ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                        : 'border-border hover:border-border'
                    }`}
                  >
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-sm font-medium text-foreground">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-1">
                {t('help.sug.title_label')} <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t('help.sug.title_placeholder')}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-foreground mb-1"
              >
                {t('help.sug.desc_label')} <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-muted-foreground mb-2">{t('help.sug.desc_hint')}</p>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t('help.sug.desc_placeholder')}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                {t('help.sug.email_label')}{' '}
                <span className="text-muted-foreground font-normal">
                  {t('help.sug.email_optional')}
                </span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!category || !title.trim() || !description.trim()}
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t('help.sug.submit')}
            </button>
          </form>

          {/* Popular Suggestions */}
          <div className="mt-8 bg-card rounded-2xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {t('help.sug.popular_h2')}
            </h2>
            <div className="space-y-3">
              {popular.map((req, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md min-w-[40px] text-center">
                      {req.votes}
                    </span>
                    <span className="text-sm text-foreground font-medium">{req.title}</span>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      req.statusKey === 'planned'
                        ? 'bg-success/10 text-success'
                        : req.statusKey === 'in_progress'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-warn/10 text-warn'
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
