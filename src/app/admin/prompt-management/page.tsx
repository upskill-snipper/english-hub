'use client'

// ─── Platform-admin — Prompt Management ─────────────────────────────────────
// Site-admin only (server route enforces; redirect on 401/403 mirrors
// src/app/admin/affiliates/page.tsx). Lists prompt_versions, creates a new
// version (active by default), and can re-activate an existing version.
//
// "Set active" reuses the idempotent POST /api/admin/prompts: re-posting an
// existing version's exact text (same content_hash) re-activates that row and
// deactivates its siblings — no extra endpoint needed. Empty-table safe.

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
import { Shield, ArrowLeft, RefreshCw, Loader2, ScrollText, Plus, CheckCircle2 } from 'lucide-react'

interface PromptVersion {
  id: string
  prompt_key: string
  subject: string | null
  exam_board: string | null
  question_type: string | null
  prompt_text: string
  content_hash: string
  rubric_version_id: string | null
  active: boolean
  created_at: string
}

export default function AdminPromptManagementPage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const t = useT()

  const [prompts, setPrompts] = useState<PromptVersion[]>([])
  const [storeAvailable, setStoreAvailable] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authorized, setAuthorized] = useState(false)

  // Create form.
  const [promptKey, setPromptKey] = useState('')
  const [subject, setSubject] = useState('')
  const [examBoard, setExamBoard] = useState('')
  const [questionType, setQuestionType] = useState('')
  const [promptText, setPromptText] = useState('')
  const [activateOnSave, setActivateOnSave] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formMsg, setFormMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
  const [activatingId, setActivatingId] = useState<string | null>(null)

  const fetchPrompts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/prompts')
      if (res.status === 401) {
        router.push('/auth/login?redirect=/admin/prompt-management')
        return
      }
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!res.ok) throw new Error('fetch failed')
      const json = (await res.json()) as {
        prompts: PromptVersion[]
        storeAvailable: boolean
      }
      setPrompts(json.prompts ?? [])
      setStoreAvailable(json.storeAvailable !== false)
      setAuthorized(true)
    } catch {
      setError(t('admin.aim.error_load'))
    }
    setLoading(false)
  }, [router, t])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/prompt-management')
      return
    }
    if (user) fetchPrompts()
  }, [user, profile, router, fetchPrompts])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!promptKey.trim() || !promptText.trim()) {
      setFormMsg({ kind: 'err', text: t('admin.aim.pm.required') })
      return
    }
    setSaving(true)
    setFormMsg(null)
    try {
      const res = await fetch('/api/admin/prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt_key: promptKey.trim(),
          prompt_text: promptText.trim(),
          subject: subject.trim() || null,
          exam_board: examBoard.trim() || null,
          question_type: questionType.trim() || null,
          activate: activateOnSave,
        }),
      })
      if (res.ok) {
        setFormMsg({ kind: 'ok', text: t('admin.aim.pm.saved') })
        setPromptText('')
        await fetchPrompts()
      } else {
        const d = await res.json().catch(() => ({}))
        setFormMsg({ kind: 'err', text: d.error || t('admin.aim.pm.save_failed') })
      }
    } catch {
      setFormMsg({ kind: 'err', text: t('admin.aim.pm.save_failed') })
    }
    setSaving(false)
  }

  const handleSetActive = async (p: PromptVersion) => {
    setActivatingId(p.id)
    try {
      // Idempotent POST: identical content_hash re-activates this row and
      // deactivates siblings of the same prompt_key.
      const res = await fetch('/api/admin/prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt_key: p.prompt_key,
          prompt_text: p.prompt_text,
          subject: p.subject,
          exam_board: p.exam_board,
          question_type: p.question_type,
          rubric_version_id: p.rubric_version_id,
          activate: true,
        }),
      })
      if (res.ok) await fetchPrompts()
      else {
        const d = await res.json().catch(() => ({}))
        setFormMsg({ kind: 'err', text: d.error || t('admin.aim.pm.save_failed') })
      }
    } catch {
      setFormMsg({ kind: 'err', text: t('admin.aim.pm.save_failed') })
    }
    setActivatingId(null)
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
          href="/admin/ai-marking"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('admin.aim.back_to_admin')}
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <ScrollText className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{t('admin.aim.pm.title')}</h1>
          </div>
          <button
            onClick={fetchPrompts}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {t('admin.aim.refresh')}
          </button>
        </div>
        <p className="text-muted-foreground mb-8">{t('admin.aim.pm.subtitle')}</p>

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

        {/* Create form */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" />
            {t('admin.aim.pm.new_version')}
          </h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-1">
                  {t('admin.aim.pm.f.prompt_key')}
                </label>
                <input
                  value={promptKey}
                  onChange={(e) => setPromptKey(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                  placeholder="marking.aqa.lit.essay"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">
                  {t('admin.aim.pm.f.subject')}
                </label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">
                  {t('admin.aim.pm.f.exam_board')}
                </label>
                <input
                  value={examBoard}
                  onChange={(e) => setExamBoard(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">
                  {t('admin.aim.pm.f.question_type')}
                </label>
                <input
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">
                {t('admin.aim.pm.f.prompt_text')}
              </label>
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                rows={6}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground font-mono"
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={activateOnSave}
                  onChange={(e) => setActivateOnSave(e.target.checked)}
                />
                {t('admin.aim.pm.f.activate')}
              </label>
              <button
                type="submit"
                disabled={saving}
                className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {saving ? t('admin.aim.pm.saving') : t('admin.aim.pm.save')}
              </button>
            </div>
            {formMsg && (
              <p className={`text-sm ${formMsg.kind === 'ok' ? 'text-primary' : 'text-red-400'}`}>
                {formMsg.text}
              </p>
            )}
          </form>
        </section>

        {/* Versions list */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.aim.pm.list')} ({prompts.length})
          </h2>
          {prompts.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">
              {t('admin.aim.pm.empty')}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.pm.col.key')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.pm.col.scope')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.pm.col.hash')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.pm.col.active')}</th>
                    <th className="pb-3 pr-4 font-medium">{t('admin.aim.pm.col.created')}</th>
                    <th className="pb-3 font-medium">{t('admin.aim.pm.col.action')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {prompts.map((p) => (
                    <tr key={p.id} className="text-foreground align-top">
                      <td className="py-3 pr-4 font-mono text-xs">{p.prompt_key}</td>
                      <td className="py-3 pr-4 text-xs text-muted-foreground">
                        {[p.subject, p.exam_board, p.question_type].filter(Boolean).join(' · ') ||
                          '—'}
                      </td>
                      <td className="py-3 pr-4 font-mono text-xs">
                        {p.content_hash.slice(0, 12)}…
                      </td>
                      <td className="py-3 pr-4">
                        {p.active ? (
                          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {t('admin.aim.pm.is_active')}
                          </span>
                        ) : (
                          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-border text-muted-foreground">
                            {t('admin.aim.pm.inactive')}
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground text-xs">
                        {new Date(p.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="py-3">
                        {!p.active && (
                          <button
                            onClick={() => handleSetActive(p)}
                            disabled={activatingId === p.id}
                            className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground"
                          >
                            {activatingId === p.id ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <CheckCircle2 className="w-3 h-3" />
                            )}
                            {t('admin.aim.pm.set_active')}
                          </button>
                        )}
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
