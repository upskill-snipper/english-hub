'use client'

// ─── Platform-admin - Rubric Versions (read-only) ───────────────────────────
// Site-admin only (server route enforces; redirect on 401/403 mirrors
// src/app/admin/affiliates/page.tsx). Read-only listing of rubric_versions
// with their content hash. Rubrics are content-hash pointers to the in-code
// mark schemes - not editable from this surface by design. Empty-table safe.

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
import { ArrowLeft, RefreshCw, Loader2, BookOpenCheck } from 'lucide-react'

interface RubricVersion {
  id: string
  mark_scheme_id: string
  scheme_version: string
  content_hash: string
  exam_board: string | null
  qualification: string | null
  source_url: string | null
  is_active: boolean
  created_at: string
}

export default function AdminRubricManagementPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const t = useT()

  const [rubrics, setRubrics] = useState<RubricVersion[]>([])
  const [storeAvailable, setStoreAvailable] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)

  const fetchRubrics = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/rubrics')
      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/rubric-management')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!res.ok) throw new Error('fetch failed')
      const json = (await res.json()) as {
        rubrics: RubricVersion[]
        storeAvailable: boolean
      }
      setRubrics(json.rubrics ?? [])
      setStoreAvailable(json.storeAvailable !== false)
      setAuthorized(true)
    } catch {
      setError(t('admin.aim.error_load'))
    }
    setLoading(false)
  }, [router, t])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/rubric-management')
      return
    }
    if (user) fetchRubrics()
  }, [user, profile, router, fetchRubrics])

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin/ai-marking"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.aim.back_to_admin')}
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.aim.rm.title')}</h1>
          </div>
          <button
            onClick={fetchRubrics}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {t('admin.aim.refresh')}
          </button>
        </div>
        <p className="text-muted-foreground mb-8">{t('admin.aim.rm.subtitle')}</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {!storeAvailable && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-clay-600 text-sm">
            {t('admin.aim.store_unavailable')}
          </div>
        )}

        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.aim.rm.title')} ({rubrics.length})
          </h2>
          {rubrics.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">
              {t('admin.aim.rm.empty')}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.rm.col.scheme')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.rm.col.version')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.rm.col.board')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.rm.col.qual')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.rm.col.hash')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.rm.col.active')}</th>
                    <th className="pb-3 font-medium">{t('admin.aim.rm.col.created')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rubrics.map((r) => (
                    <tr key={r.id} className="text-foreground">
                      <td className="py-3 pr-4 font-mono text-xs">{r.mark_scheme_id}</td>
                      <td className="py-3 pr-4">{r.scheme_version}</td>
                      <td className="py-3 pr-4">{r.exam_board ?? '-'}</td>
                      <td className="py-3 pr-4">{r.qualification ?? '-'}</td>
                      <td className="py-3 pr-4 font-mono text-xs">
                        {r.content_hash.slice(0, 16)}…
                      </td>
                      <td className="py-3 pr-4">
                        {r.is_active ? (
                          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {t('admin.aim.pm.is_active')}
                          </span>
                        ) : (
                          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-border text-muted-foreground">
                            {t('admin.aim.pm.inactive')}
                          </span>
                        )}
                      </td>
                      <td className="py-3 text-muted-foreground text-xs">
                        {new Date(r.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
