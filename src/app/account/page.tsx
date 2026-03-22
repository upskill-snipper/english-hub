'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { YEAR_GROUPS, EXAM_BOARDS } from '@/lib/utils'
import {
  User,
  Save,
  Lock,
  Trash2,
  Loader2,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  GraduationCap,
  BookOpen,
  CreditCard,
  ChevronRight,
} from 'lucide-react'

export default function AccountPage() {
  const router = useRouter()
  const { user, profile, setProfile } = useAuthStore()
  const supabase = createClient()

  const [fullName, setFullName] = useState('')
  const [yearGroup, setYearGroup] = useState('')
  const [examBoard, setExamBoard] = useState('')
  const [profileLoading, setProfileLoading] = useState(false)
  const [profileMessage, setProfileMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const [deleteConfirm, setDeleteConfirm] = useState('')
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/account')
      return
    }
    if (profile) {
      setFullName(profile.full_name || '')
      setYearGroup(profile.year_group || '')
      setExamBoard(profile.exam_board || '')
      setPageLoading(false)
    }
  }, [user, profile, router])

  async function handleProfileSave(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return

    setProfileLoading(true)
    setProfileMessage(null)

    const { data, error } = await supabase
      .from('profiles')
      .update({
        full_name: fullName.trim() || null,
        year_group: yearGroup || null,
        exam_board: examBoard || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)
      .select()
      .single()

    if (error) {
      setProfileMessage({ type: 'error', text: error.message })
    } else {
      setProfile(data)
      setProfileMessage({ type: 'success', text: 'Profile updated successfully.' })
    }

    setProfileLoading(false)
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault()
    setPasswordMessage(null)

    if (newPassword.length < 8) {
      setPasswordMessage({
        type: 'error',
        text: 'New password must be at least 8 characters.',
      })
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage({
        type: 'error',
        text: 'New passwords do not match.',
      })
      return
    }

    setPasswordLoading(true)

    // Verify current password first
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user?.email || '',
      password: currentPassword,
    })
    if (signInError) {
      setPasswordMessage({ type: 'error', text: 'Current password is incorrect.' })
      setPasswordLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      setPasswordMessage({ type: 'error', text: error.message })
    } else {
      setPasswordMessage({ type: 'success', text: 'Password updated successfully.' })
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    }

    setPasswordLoading(false)
  }

  async function handleDeleteAccount() {
    if (deleteConfirm !== 'DELETE') {
      setDeleteError('Please type DELETE to confirm.')
      return
    }

    setDeleteLoading(true)
    setDeleteError(null)

    try {
      const res = await fetch('/api/account/delete', { method: 'POST' })
      const data = await res.json()

      if (!res.ok) {
        setDeleteError(
          data.error || 'Failed to delete account. Please contact support.'
        )
        setDeleteLoading(false)
        return
      }

      await supabase.auth.signOut()
      useAuthStore.getState().clear()
      router.push('/')
    } catch {
      setDeleteError('Something went wrong. Please try again or contact support.')
      setDeleteLoading(false)
    }
  }

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">
          Account Settings
        </h1>

        {/* Profile Section */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Profile</h2>
          </div>

          {profileMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className={`flex items-center gap-2 rounded-lg p-3 mb-4 text-sm ${
                profileMessage.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {profileMessage.type === 'success' ? (
                <CheckCircle className="w-4 h-4 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 shrink-0" />
              )}
              {profileMessage.text}
            </div>
          )}

          <form onSubmit={handleProfileSave} className="space-y-4">
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={user?.email || ''}
                disabled
                className="input-field opacity-60 cursor-not-allowed"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Email cannot be changed.
              </p>
            </div>

            <div>
              <label htmlFor="fullName" className="label">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="yearGroup" className="label">
                Year Group
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                <select
                  id="yearGroup"
                  value={yearGroup}
                  onChange={(e) => setYearGroup(e.target.value)}
                  className="input-field pl-11 appearance-none"
                >
                  <option value="">Select year group</option>
                  {YEAR_GROUPS.map((yg) => (
                    <option key={yg} value={yg}>
                      {yg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="examBoard" className="label">
                Exam Board
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                <select
                  id="examBoard"
                  value={examBoard}
                  onChange={(e) => setExamBoard(e.target.value)}
                  className="input-field pl-11 appearance-none"
                >
                  <option value="">Select exam board</option>
                  {EXAM_BOARDS.map((eb) => (
                    <option key={eb} value={eb}>
                      {eb}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={profileLoading}
              className="btn-primary"
            >
              {profileLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </form>
        </section>

        {/* Billing Link */}
        <Link
          href="/account/billing"
          className="flex items-center justify-between bg-card border border-border rounded-xl p-6 mb-6 group hover:border-primary/40 transition-colors"
        >
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-primary" />
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Billing &amp; Subscription
              </h2>
              <p className="text-sm text-muted-foreground">
                Manage your plan, view purchases, and update payment details
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </Link>

        {/* Change Password Section */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Change Password
            </h2>
          </div>

          {passwordMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className={`flex items-center gap-2 rounded-lg p-3 mb-4 text-sm ${
                passwordMessage.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {passwordMessage.type === 'success' ? (
                <CheckCircle className="w-4 h-4 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 shrink-0" />
              )}
              {passwordMessage.text}
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="label">
                Current Password
              </label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input-field"
                placeholder="Enter current password"
                required
                autoComplete="current-password"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="label">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="input-field"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat new password"
                className="input-field"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="btn-primary"
            >
              {passwordLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Updating...
                </>
              ) : (
                'Update Password'
              )}
            </button>
          </form>
        </section>

        {/* Danger Zone */}
        <section className="bg-card border border-red-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 className="w-5 h-5 text-red-400" />
            <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>

          {deleteError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 text-red-400 text-sm">
              {deleteError}
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label htmlFor="deleteConfirm" className="label">
                Type <span className="font-mono font-bold text-red-400">DELETE</span> to confirm
              </label>
              <input
                id="deleteConfirm"
                type="text"
                value={deleteConfirm}
                onChange={(e) => setDeleteConfirm(e.target.value)}
                placeholder="DELETE"
                className="input-field"
              />
            </div>

            <button
              onClick={handleDeleteAccount}
              disabled={deleteLoading || deleteConfirm !== 'DELETE'}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {deleteLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  Delete My Account
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
