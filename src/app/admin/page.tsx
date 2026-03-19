'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { getCourseName } from '@/lib/utils'
import {
  Shield,
  Users,
  Crown,
  BookOpen,
  Award,
  Loader2,
  ArrowLeft,
  RefreshCw,
} from 'lucide-react'

const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || 'admin@theenglishhub.app')
  .split(',')
  .map((e) => e.trim().toLowerCase())

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

  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const isAdmin = !!profile?.email && ADMIN_EMAILS.includes(profile.email.toLowerCase())

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin')
      return
    }

    if (profile && !isAdmin) {
      router.push('/dashboard')
      return
    }

    if (profile && isAdmin) {
      fetchStats()
    }
  }, [user, profile, router, isAdmin])

  async function fetchStats() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/admin/stats')
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to load admin stats.')
        setLoading(false)
        return
      }

      setStats(data)
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-accent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-brand-accent" />
            <h1 className="text-3xl font-bold text-brand-text">Admin Panel</h1>
          </div>
          <button
            onClick={fetchStats}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-accent/50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
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
                label="Total Users"
                value={stats.totalUsers}
              />
              <StatCard
                icon={<Crown className="w-5 h-5" />}
                label="Active Subscribers"
                value={stats.activeSubscribers}
              />
              <StatCard
                icon={<BookOpen className="w-5 h-5" />}
                label="Total Enrolments"
                value={stats.totalEnrolments}
              />
              <StatCard
                icon={<Award className="w-5 h-5" />}
                label="Certificates Issued"
                value={stats.certificateCount}
              />
            </div>

            {/* Recent Users */}
            <section className="bg-brand-card border border-brand-border rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-brand-text mb-4">
                Recent Registrations
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-border text-left text-brand-muted">
                      <th className="pb-3 pr-4 font-medium">Email</th>
                      <th className="pb-3 pr-4 font-medium">Name</th>
                      <th className="pb-3 pr-4 font-medium">Year</th>
                      <th className="pb-3 pr-4 font-medium">Plan</th>
                      <th className="pb-3 font-medium">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {stats.recentUsers.map((u) => (
                      <tr key={u.id} className="text-brand-text">
                        <td className="py-3 pr-4 font-mono text-xs">
                          {u.email}
                        </td>
                        <td className="py-3 pr-4">
                          {u.full_name || (
                            <span className="text-brand-muted">--</span>
                          )}
                        </td>
                        <td className="py-3 pr-4">
                          {u.year_group || (
                            <span className="text-brand-muted">--</span>
                          )}
                        </td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                              u.subscription_status === 'pro'
                                ? 'bg-brand-accent/10 text-brand-accent'
                                : 'bg-brand-border text-brand-muted'
                            }`}
                          >
                            {u.subscription_status}
                          </span>
                        </td>
                        <td className="py-3 text-brand-muted text-xs">
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
                  <p className="text-brand-muted text-sm py-4 text-center">
                    No users yet.
                  </p>
                )}
              </div>
            </section>

            {/* Recent Enrolments */}
            <section className="bg-brand-card border border-brand-border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-brand-text mb-4">
                Recent Enrolments
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-border text-left text-brand-muted">
                      <th className="pb-3 pr-4 font-medium">User ID</th>
                      <th className="pb-3 pr-4 font-medium">Course</th>
                      <th className="pb-3 pr-4 font-medium">Type</th>
                      <th className="pb-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {stats.recentEnrolments.map((e) => (
                      <tr key={e.id} className="text-brand-text">
                        <td className="py-3 pr-4 font-mono text-xs truncate max-w-[120px]">
                          {e.user_id.slice(0, 8)}...
                        </td>
                        <td className="py-3 pr-4">
                          {getCourseName(e.course_id)}
                        </td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                              e.payment_type === 'subscription'
                                ? 'bg-brand-accent/10 text-brand-accent'
                                : e.payment_type === 'one_time'
                                ? 'bg-brand-blue/10 text-brand-blue'
                                : 'bg-brand-border text-brand-muted'
                            }`}
                          >
                            {e.payment_type}
                          </span>
                        </td>
                        <td className="py-3 text-brand-muted text-xs">
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
                  <p className="text-brand-muted text-sm py-4 text-center">
                    No enrolments yet.
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

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number
}) {
  return (
    <div className="bg-brand-card border border-brand-border rounded-xl p-5">
      <div className="flex items-center gap-2 text-brand-accent mb-2">
        {icon}
        <span className="text-sm text-brand-muted">{label}</span>
      </div>
      <p className="text-3xl font-bold text-brand-text">
        {value.toLocaleString()}
      </p>
    </div>
  )
}
