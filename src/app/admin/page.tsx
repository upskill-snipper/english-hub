'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { getCourseName } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { Shield, Users, Crown, BookOpen, Award, Loader2, ArrowLeft, RefreshCw } from 'lucide-react'

interface AdminStats {
  totalUsers: number
  activeSubscribers: number
  totalEnrolments: number
  certificateCount: number
  recentUsers: {
    id: string
    email: string
    full_name: string | null
    year_group: string | null
    subscription_status: string
    created_at: string
  }[]
  recentEnrolments: {
    id: string
    user_id: string
    course_id: string
    enrolled_at: string
    payment_type: string
  }[]
}

export default function AdminPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const t = useT()

  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin')
      return
    }

    if (user) {
      fetchStats()
    }
  }, [user, profile, router])

  async function fetchStats() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/admin/stats')

      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || t('admin.error_load_stats'))
        setLoading(false)
        return
      }

      setAuthorized(true)
      setStats(data)
    } catch {
      setError(t('admin.error_generic'))
    }

    setLoading(false)
  }

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
          href="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.back_to_dashboard')}
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.root.title')}</h1>
          </div>
          <button
            onClick={fetchStats}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {t('admin.refresh')}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {stats && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                icon={<Users className="w-5 h-5" />}
                label={t('admin.root.stat.total_users')}
                value={stats.totalUsers}
              />
              <StatCard
                icon={<Crown className="w-5 h-5" />}
                label={t('admin.root.stat.active_subscribers')}
                value={stats.activeSubscribers}
              />
              <StatCard
                icon={<BookOpen className="w-5 h-5" />}
                label={t('admin.root.stat.total_enrolments')}
                value={stats.totalEnrolments}
              />
              <StatCard
                icon={<Award className="w-5 h-5" />}
                label={t('admin.root.stat.certificates_issued')}
                value={stats.certificateCount}
              />
            </div>

            {/* Recent Users */}
            <section className="bg-card border border-border rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {t('admin.root.recent_registrations')}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.email')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.name')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.year')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.plan')}</th>
                      <th className="pb-3 font-medium">{t('admin.root.col.joined')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {stats.recentUsers.map((u) => (
                      <tr key={u.id} className="text-foreground">
                        <td className="py-3 pr-4 font-mono text-xs">{u.email}</td>
                        <td className="py-3 pr-4">
                          {u.full_name || <span className="text-muted-foreground">--</span>}
                        </td>
                        <td className="py-3 pr-4">
                          {u.year_group || <span className="text-muted-foreground">--</span>}
                        </td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                              u.subscription_status === 'pro'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-border text-muted-foreground'
                            }`}
                          >
                            {u.subscription_status}
                          </span>
                        </td>
                        <td className="py-3 text-muted-foreground text-xs">
                          {new Date(u.created_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {stats.recentUsers.length === 0 && (
                  <p className="text-muted-foreground text-sm py-4 text-center">
                    {t('admin.root.empty_users')}
                  </p>
                )}
              </div>
            </section>

            {/* Recent Enrolments */}
            <section className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {t('admin.root.recent_enrolments')}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.user_id')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.course')}</th>
                      <th className="pb-3 pr-4 font-medium">{t('admin.root.col.type')}</th>
                      <th className="pb-3 font-medium">{t('admin.root.col.date')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {stats.recentEnrolments.map((e) => (
                      <tr key={e.id} className="text-foreground">
                        <td className="py-3 pr-4 font-mono text-xs truncate max-w-[120px]">
                          {e.user_id.slice(0, 8)}...
                        </td>
                        <td className="py-3 pr-4">{getCourseName(e.course_id)}</td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                              e.payment_type === 'subscription'
                                ? 'bg-primary/10 text-primary'
                                : e.payment_type === 'one_time'
                                  ? 'bg-brand-blue/10 text-brand-blue'
                                  : 'bg-border text-muted-foreground'
                            }`}
                          >
                            {e.payment_type}
                          </span>
                        </td>
                        <td className="py-3 text-muted-foreground text-xs">
                          {new Date(e.enrolled_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {stats.recentEnrolments.length === 0 && (
                  <p className="text-muted-foreground text-sm py-4 text-center">
                    {t('admin.root.empty_enrolments')}
                  </p>
                )}
              </div>
            </section>
          </>
        )}
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
