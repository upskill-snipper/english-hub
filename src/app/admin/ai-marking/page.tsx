'use client'

// ─── Platform-admin - AI Marking overview ───────────────────────────────────
// Site-admin only (server route enforces; this page redirects on 401/403,
// mirroring src/app/admin/affiliates/page.tsx). Composes the high-level
// counts from /api/admin/model-performance and links to the deeper surfaces.
// Empty-table safe: zeros + an empty-state note, never a crash.

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
import {
  Shield,
  ArrowLeft,
  RefreshCw,
  Loader2,
  FileText,
  CheckCircle2,
  Clock,
  Gauge,
  ClipboardList,
  ScrollText,
  BookOpenCheck,
  BarChart3,
} from 'lucide-react'

interface PerfPayload {
  storeAvailable: boolean
  note: string | null
  totals: { submissions: number; reviewed: number; scoredPairs: number }
  teacherOverrideRate: number
  feedbackEditRate: number
  decisionBreakdown: Record<string, number>
}

export default function AdminAiMarkingPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const t = useT()

  const [data, setData] = useState<PerfPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/model-performance')
      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/ai-marking')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!res.ok) throw new Error('fetch failed')
      const json = (await res.json()) as PerfPayload
      setAuthorized(true)
      setData(json)
    } catch {
      setError(t('admin.aim.error_load'))
    }
    setLoading(false)
  }, [router, t])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/ai-marking')
      return
    }
    if (user) fetchData()
  }, [user, profile, router, fetchData])

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const totals = data?.totals ?? { submissions: 0, reviewed: 0, scoredPairs: 0 }
  const awaiting = Math.max(0, totals.submissions - totals.reviewed)
  const decisions = data?.decisionBreakdown ?? {}
  const approved = decisions['approved'] ?? 0

  const links = [
    {
      href: '/admin/model-performance',
      label: t('admin.aim.ov.link.performance'),
      icon: <Gauge className="w-5 h-5" />,
    },
    {
      href: '/admin/model-performance#evals',
      label: t('admin.aim.ov.link.evals'),
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      href: '/admin/prompt-management',
      label: t('admin.aim.ov.link.prompts'),
      icon: <ScrollText className="w-5 h-5" />,
    },
    {
      href: '/admin/rubric-management',
      label: t('admin.aim.ov.link.rubrics'),
      icon: <BookOpenCheck className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.aim.back_to_admin')}
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.aim.ov.title')}</h1>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {t('admin.aim.refresh')}
          </button>
        </div>
        <p className="text-muted-foreground mb-8">{t('admin.aim.ov.subtitle')}</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {data && !data.storeAvailable && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-clay-600 text-sm">
            {t('admin.aim.store_unavailable')}
          </div>
        )}

        {/* Counts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<FileText className="w-5 h-5" />}
            label={t('admin.aim.ov.stat.total')}
            value={totals.submissions}
          />
          <StatCard
            icon={<CheckCircle2 className="w-5 h-5" />}
            label={t('admin.aim.ov.stat.reviewed')}
            value={totals.reviewed}
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label={t('admin.aim.ov.stat.awaiting')}
            value={awaiting}
          />
          <StatCard
            icon={<CheckCircle2 className="w-5 h-5" />}
            label={t('admin.aim.ov.stat.approved')}
            value={approved}
          />
        </div>

        {/* By status / decision */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {t('admin.aim.ov.by_status')}
          </h2>
          {Object.keys(decisions).length === 0 ? (
            <p className="text-muted-foreground text-sm py-4 text-center">
              {t('admin.aim.empty_generic')}
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {Object.entries(decisions)
                .sort((a, b) => b[1] - a[1])
                .map(([decision, count]) => (
                  <span
                    key={decision}
                    className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-background border border-border text-foreground"
                  >
                    <span className="text-muted-foreground">{decision}</span>
                    <span className="font-semibold">{count}</span>
                  </span>
                ))}
            </div>
          )}
        </section>

        {/* Navigation */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t('admin.aim.ov.links')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors text-foreground"
              >
                <span className="text-primary">{l.icon}</span>
                <span className="font-medium">{l.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-2 text-primary mb-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-3xl font-bold text-foreground">{value.toLocaleString()}</p>
    </div>
  )
}
