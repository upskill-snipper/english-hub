'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { YEAR_GROUPS, EXAM_BOARDS } from '@/lib/utils'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-config'
import { ChangeBoardButton } from '@/components/board/ChangeBoardButton'
import { useT } from '@/lib/i18n/use-t'
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
  const t = useT()
  const router = useRouter()
  const { user, profile, setProfile } = useAuthStore()
  const supabase = createClient()
  const { board, isHydrated: boardHydrated } = useBoard()
  const boardConfig = getBoardConfig(board)

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
      setProfileMessage({ type: 'success', text: t('account.profile_saved') })
    }

    setProfileLoading(false)
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault()
    setPasswordMessage(null)

    if (newPassword.length < 8) {
      setPasswordMessage({
        type: 'error',
        text: t('account.pw_min_length'),
      })
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage({
        type: 'error',
        text: t('account.pw_no_match'),
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
      setPasswordMessage({ type: 'error', text: t('account.pw_current_wrong') })
      setPasswordLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      setPasswordMessage({ type: 'error', text: error.message })
    } else {
      setPasswordMessage({ type: 'success', text: t('account.pw_saved') })
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    }

    setPasswordLoading(false)
  }

  async function handleDeleteAccount() {
    if (deleteConfirm !== 'DELETE') {
      setDeleteError(t('account.type_delete_to_confirm'))
      return
    }

    setDeleteLoading(true)
    setDeleteError(null)

    try {
      const res = await fetch('/api/account/delete', { method: 'POST' })
      const data = await res.json()

      if (!res.ok) {
        setDeleteError(data.error || t('account.delete_failed'))
        setDeleteLoading(false)
        return
      }

      await supabase.auth.signOut()
      useAuthStore.getState().clear()
      router.push('/')
    } catch {
      setDeleteError(t('account.delete_error'))
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
          {t('account.back_to_dashboard')}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">{t('account.title')}</h1>

        {/* Exam Board Section */}
        <section
          aria-labelledby="account-board-heading"
          className="bg-card border border-border rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 id="account-board-heading" className="text-xl font-semibold text-foreground">
              {t('account.studying')} {boardConfig ? boardConfig.shortName : '-'}
            </h2>
          </div>

          {!boardHydrated ? (
            <div className="h-16 animate-pulse rounded-lg bg-muted/40" />
          ) : boardConfig ? (
            <>
              <p className="text-sm text-muted-foreground mb-4">{boardConfig.fullName}</p>
              <ChangeBoardButton variant="card" />
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-4">{t('account.no_board')}</p>
              <ChangeBoardButton variant="card" />
            </>
          )}
        </section>

        {/* Profile Section */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t('account.profile')}</h2>
          </div>

          {profileMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className={`flex items-center gap-2 rounded-lg p-3 mb-4 text-sm ${
                profileMessage.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-teal-700'
                  : 'bg-red-500/10 border border-red-500/30 text-red-600'
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
                {t('form.email')}
              </label>
              <input
                id="email"
                type="email"
                value={user?.email || ''}
                disabled
                className="input-field opacity-60 cursor-not-allowed"
              />
              <p className="text-xs text-muted-foreground mt-1">{t('account.email_locked')}</p>
            </div>

            <div>
              <label htmlFor="fullName" className="label">
                {t('form.full_name')}
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t('account.fullname_placeholder')}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="yearGroup" className="label">
                {t('account.year_group')}
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                <select
                  id="yearGroup"
                  value={yearGroup}
                  onChange={(e) => setYearGroup(e.target.value)}
                  className="input-field pl-11 appearance-none"
                >
                  <option value="">{t('account.select_year_group')}</option>
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
                {t('account.exam_board')}
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                <select
                  id="examBoard"
                  value={examBoard}
                  onChange={(e) => setExamBoard(e.target.value)}
                  className="input-field pl-11 appearance-none"
                >
                  <option value="">{t('account.select_exam_board')}</option>
                  {EXAM_BOARDS.map((eb) => (
                    <option key={eb} value={eb}>
                      {eb}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" disabled={profileLoading} className="btn-primary">
              {profileLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  {t('account.saving')}
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {t('form.save_changes')}
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
                {t('account.billing_subscription')}
              </h2>
              <p className="text-sm text-muted-foreground">{t('account.billing_blurb')}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </Link>

        {/* Change Password Section */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              {t('account.change_password')}
            </h2>
          </div>

          {passwordMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className={`flex items-center gap-2 rounded-lg p-3 mb-4 text-sm ${
                passwordMessage.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-teal-700'
                  : 'bg-red-500/10 border border-red-500/30 text-red-600'
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
                {t('account.current_password')}
              </label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input-field"
                placeholder={t('account.current_password_placeholder')}
                required
                autoComplete="current-password"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="label">
                {t('form.new_password')}
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={t('account.min_8_chars')}
                className="input-field"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label">
                {t('account.confirm_new_password')}
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t('account.repeat_new_password')}
                className="input-field"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            <button type="submit" disabled={passwordLoading} className="btn-primary">
              {passwordLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  {t('account.updating')}
                </>
              ) : (
                t('account.update_password')
              )}
            </button>
          </form>
        </section>

        {/* Danger Zone */}
        <section className="bg-card border border-red-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-semibold text-red-600">{t('account.danger_zone')}</h2>
          </div>

          <p className="text-muted-foreground text-sm mb-4">{t('account.delete_blurb')}</p>

          {deleteError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 text-red-600 text-sm">
              {deleteError}
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label htmlFor="deleteConfirm" className="label">
                {t('account.type_delete_prefix')}{' '}
                <span className="font-mono font-bold text-red-600">DELETE</span>{' '}
                {t('account.type_delete_suffix')}
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
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm bg-red-500/10 text-red-600 border border-red-500/30 hover:bg-red-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {deleteLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('account.deleting')}
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  {t('account.delete_account')}
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
