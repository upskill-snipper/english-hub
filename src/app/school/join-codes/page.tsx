'use client'

import { useEffect, useState, useCallback } from 'react'
import {
  Key,
  Copy,
  Plus,
  Trash2,
  Users,
  GraduationCap,
  CheckCircle,
  Link2,
  QrCode,
  RefreshCw,
  Loader2,
  AlertCircle,
  ExternalLink,
  ShieldOff,
  Shield,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useT } from '@/lib/i18n/use-t'

// ── Types ─────────────────────────────────────────────────────────────────────

interface JoinCode {
  id: string
  code: string
  type: 'student' | 'teacher'
  max_uses: number
  uses: number
  expires_at: string | null
  class_id: string | null
  classes: { id: string; name: string } | null
  is_active: boolean
  created_at: string
  remaining_uses: number | null
  is_expired: boolean
  is_usable: boolean
}

interface SchoolClass {
  id: string
  name: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from(crypto.getRandomValues(new Uint8Array(6)), (b) => chars[b % chars.length]).join(
    '',
  )
}

function formatExpiry(expiresAt: string | null): string {
  if (!expiresAt) return 'Never'
  const d = new Date(expiresAt)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function getStatusBadge(code: JoinCode, tx: (key: string) => string) {
  if (!code.is_active) {
    return (
      <Badge variant="secondary" className="bg-zinc-700 text-zinc-300">
        {tx('school.b15.join_codes.status_disabled')}
      </Badge>
    )
  }
  if (code.is_expired) {
    return (
      <Badge variant="secondary" className="bg-amber-900/40 text-clay-600">
        {tx('school.b15.join_codes.status_expired')}
      </Badge>
    )
  }
  if (code.max_uses > 0 && code.uses >= code.max_uses) {
    return (
      <Badge variant="secondary" className="bg-zinc-700 text-zinc-300">
        {tx('school.b15.join_codes.status_full')}
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="bg-emerald-900/40 text-emerald-400">
      {tx('school.b15.join_codes.status_active')}
    </Badge>
  )
}

// ── Join URL ──────────────────────────────────────────────────────────────────

const JOIN_BASE_URL = 'https://theenglishhub.app/school/join'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function JoinCodesPage() {
  const tx = useT()
  const [codes, setCodes] = useState<JoinCode[]>([])
  const [classes, setClasses] = useState<SchoolClass[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  // Create form state
  const [formType, setFormType] = useState<'student' | 'teacher'>('student')
  const [formMaxUses, setFormMaxUses] = useState('200')
  const [formExpires, setFormExpires] = useState('')
  const [formClassId, setFormClassId] = useState('')
  const [formCode, setFormCode] = useState(generateCode())
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)

  // Action state
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  // ── Fetch join codes ────────────────────────────────────────────────────────

  const fetchCodes = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/school/join-codes')
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Failed to load join codes.')
        return
      }
      setCodes(data.join_codes ?? [])
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Fetch classes for dropdown ──────────────────────────────────────────────

  const fetchClasses = useCallback(async () => {
    try {
      const res = await fetch('/api/school/classes')
      const data = await res.json()
      if (res.ok) {
        setClasses(data.classes ?? [])
      }
    } catch {
      // Non-critical — dropdown stays empty
    }
  }, [])

  useEffect(() => {
    fetchCodes()
    fetchClasses()
  }, [fetchCodes, fetchClasses])

  // ── Copy to clipboard ───────────────────────────────────────────────────────

  async function copyToClipboard(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(key)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopiedCode(key)
      setTimeout(() => setCopiedCode(null), 2000)
    }
  }

  // ── Create join code ────────────────────────────────────────────────────────

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setCreateError(null)

    const maxUses = parseInt(formMaxUses, 10)
    if (isNaN(maxUses) || maxUses < 0 || maxUses > 10000) {
      setCreateError('Max uses must be a number between 0 and 10000.')
      return
    }

    if (!formCode.trim()) {
      setCreateError('Code cannot be empty.')
      return
    }

    setCreating(true)
    try {
      const res = await fetch('/api/school/join-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formType,
          code: formCode.trim().toUpperCase(),
          maxUses: maxUses,
          expiresAt: formExpires ? new Date(formExpires).toISOString() : null,
          classId: formClassId || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setCreateError(data.error ?? 'Failed to create join code.')
        return
      }
      // Reset form (generate new code)
      setFormCode(generateCode())
      setFormMaxUses('200')
      setFormExpires('')
      setFormClassId('')
      setFormType('student')
      await fetchCodes()
    } catch {
      setCreateError('Network error. Please try again.')
    } finally {
      setCreating(false)
    }
  }

  // ── Disable / re-enable code ────────────────────────────────────────────────

  async function handleToggleActive(code: JoinCode) {
    setActionLoading(code.code)
    try {
      const res = await fetch(`/api/school/join-codes/${encodeURIComponent(code.code)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: !code.is_active }),
      })
      if (res.ok) {
        await fetchCodes()
      }
    } catch {
      // Silent — table will stay as-is
    } finally {
      setActionLoading(null)
    }
  }

  // ── Delete code ─────────────────────────────────────────────────────────────

  async function handleDelete(code: JoinCode) {
    if (!confirm(`Delete join code ${code.code}? This cannot be undone.`)) return
    setActionLoading(code.code)
    try {
      const res = await fetch(`/api/school/join-codes/${encodeURIComponent(code.code)}`, {
        method: 'DELETE',
      })
      if (res.ok || res.status === 204) {
        await fetchCodes()
      }
    } catch {
      // Silent
    } finally {
      setActionLoading(null)
    }
  }

  // ── First active code (shown prominently at top) ────────────────────────────

  const primaryCode = codes.find((c) => c.is_usable) ?? codes[0] ?? null

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">{tx('school.b15.join_codes.title')}</h1>
        <p className="mt-1 text-sm text-zinc-400">{tx('school.b15.join_codes.subtitle')}</p>
      </div>

      {/* Primary code spotlight */}
      {!loading && primaryCode && (
        <Card className="border-zinc-700 bg-zinc-900">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
              <Key className="h-4 w-4" />
              {tx('school.b15.join_codes.spotlight_label')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Big code display */}
              <div className="flex items-center gap-3 flex-1">
                <span className="font-mono text-4xl font-bold tracking-[0.2em] text-white">
                  {primaryCode.code}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(primaryCode.code, `spotlight-${primaryCode.code}`)}
                  className="text-zinc-400 hover:text-white"
                >
                  {copiedCode === `spotlight-${primaryCode.code}` ? (
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </Button>
              </div>

              {/* Share URL */}
              <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 flex-1 min-w-0">
                <Link2 className="h-4 w-4 shrink-0 text-zinc-400" />
                <span className="font-mono text-sm text-zinc-300 truncate">
                  {JOIN_BASE_URL}?code={primaryCode.code}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto shrink-0 text-zinc-400 hover:text-white px-1"
                  onClick={() =>
                    copyToClipboard(
                      `${JOIN_BASE_URL}?code=${primaryCode.code}`,
                      `url-${primaryCode.code}`,
                    )
                  }
                >
                  {copiedCode === `url-${primaryCode.code}` ? (
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <a
                  href={`${JOIN_BASE_URL}?code=${primaryCode.code}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-zinc-400 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Type badge */}
              <div className="flex items-center gap-2">
                {primaryCode.type === 'student' ? (
                  <GraduationCap className="h-4 w-4 text-zinc-400" />
                ) : (
                  <Users className="h-4 w-4 text-zinc-400" />
                )}
                <span className="text-sm capitalize text-zinc-400">{primaryCode.type}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* QR code placeholder */}
      <Card className="border-zinc-700 bg-zinc-900">
        <CardContent className="flex items-start gap-4 pt-5">
          <div className="shrink-0 rounded-lg border border-dashed border-zinc-700 bg-zinc-800 p-4">
            <QrCode className="h-8 w-8 text-zinc-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-300">
              {tx('school.b15.join_codes.qr_title')}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{tx('school.b15.join_codes.qr_desc')}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Active codes table — takes up 3/5 on large screens */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">
              {tx('school.b15.join_codes.active_title')}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchCodes}
              disabled={loading}
              className="text-zinc-400 hover:text-white"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {loading ? (
            <Card className="border-zinc-700 bg-zinc-900">
              <CardContent className="py-8 flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
              </CardContent>
            </Card>
          ) : codes.length === 0 ? (
            <Card className="border-zinc-700 bg-zinc-900">
              <CardContent className="py-12 text-center">
                <Key className="h-10 w-10 mx-auto mb-3 text-zinc-600" />
                <p className="text-sm text-zinc-400">{tx('school.b15.join_codes.no_codes')}</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-zinc-700 bg-zinc-900 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 text-xs text-zinc-500">
                      <th className="px-4 py-3 text-left font-medium">
                        {tx('school.b15.join_codes.col_code')}
                      </th>
                      <th className="px-4 py-3 text-left font-medium">
                        {tx('school.b15.join_codes.col_type')}
                      </th>
                      <th className="px-4 py-3 text-left font-medium">
                        {tx('school.b15.join_codes.col_uses')}
                      </th>
                      <th className="px-4 py-3 text-left font-medium">
                        {tx('school.b15.join_codes.col_expires')}
                      </th>
                      <th className="px-4 py-3 text-left font-medium">
                        {tx('school.b15.join_codes.col_class')}
                      </th>
                      <th className="px-4 py-3 text-left font-medium">
                        {tx('school.b15.join_codes.col_status')}
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        {tx('school.b15.join_codes.col_actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {codes.map((code) => {
                      const isLoading = actionLoading === code.code
                      return (
                        <tr key={code.id} className="group transition-colors hover:bg-zinc-800/50">
                          {/* Code */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-semibold tracking-wider text-white">
                                {code.code}
                              </span>
                              <button
                                onClick={() => copyToClipboard(code.code, `row-${code.code}`)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-white"
                                title={tx('school.b15.join_codes.title_copy')}
                              >
                                {copiedCode === `row-${code.code}` ? (
                                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                                ) : (
                                  <Copy className="h-3.5 w-3.5" />
                                )}
                              </button>
                            </div>
                          </td>

                          {/* Type */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5 text-zinc-400">
                              {code.type === 'student' ? (
                                <GraduationCap className="h-3.5 w-3.5" />
                              ) : (
                                <Users className="h-3.5 w-3.5" />
                              )}
                              <span className="capitalize">{code.type}</span>
                            </div>
                          </td>

                          {/* Uses */}
                          <td className="px-4 py-3 text-zinc-400">
                            {code.max_uses === 0 ? (
                              <span title="Unlimited">{code.uses} / ∞</span>
                            ) : (
                              <span>
                                {code.uses}/{code.max_uses}
                              </span>
                            )}
                          </td>

                          {/* Expires */}
                          <td className="px-4 py-3 text-zinc-400 whitespace-nowrap">
                            {formatExpiry(code.expires_at)}
                          </td>

                          {/* Class */}
                          <td className="px-4 py-3 text-zinc-400">
                            {code.classes ? (
                              <span className="inline-flex items-center gap-1">
                                <Link2 className="h-3 w-3" />
                                {code.classes.name}
                              </span>
                            ) : (
                              <span className="text-zinc-600">-</span>
                            )}
                          </td>

                          {/* Status */}
                          <td className="px-4 py-3">{getStatusBadge(code, tx)}</td>

                          {/* Actions */}
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-1">
                              {/* Copy */}
                              <button
                                onClick={() => copyToClipboard(code.code, `action-${code.code}`)}
                                title={tx('school.b15.join_codes.title_copy')}
                                className="rounded p-1.5 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                              >
                                {copiedCode === `action-${code.code}` ? (
                                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </button>

                              {/* Disable / Enable */}
                              <button
                                onClick={() => handleToggleActive(code)}
                                disabled={isLoading}
                                title={
                                  code.is_active
                                    ? tx('school.b15.join_codes.title_disable')
                                    : tx('school.b15.join_codes.title_enable')
                                }
                                className="rounded p-1.5 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors disabled:opacity-40"
                              >
                                {isLoading ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : code.is_active ? (
                                  <ShieldOff className="h-4 w-4" />
                                ) : (
                                  <Shield className="h-4 w-4" />
                                )}
                              </button>

                              {/* Delete */}
                              <button
                                onClick={() => handleDelete(code)}
                                disabled={isLoading}
                                title={tx('school.b15.join_codes.title_delete')}
                                className="rounded p-1.5 text-zinc-400 hover:bg-red-900/40 hover:text-red-400 transition-colors disabled:opacity-40"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>

        {/* Create form — takes up 2/5 on large screens */}
        <div className="lg:col-span-2">
          <Card className="border-zinc-700 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <Plus className="h-4 w-4" />
                {tx('school.b15.join_codes.create_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="space-y-5">
                {/* Code type */}
                <div className="space-y-2">
                  <Label className="text-zinc-300">
                    {tx('school.b15.join_codes.label_code_type')}
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormType('student')}
                      className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                        formType === 'student'
                          ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300'
                          : 'border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300'
                      }`}
                    >
                      <GraduationCap className="h-4 w-4" />
                      {tx('school.b15.join_codes.type_student')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType('teacher')}
                      className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                        formType === 'teacher'
                          ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300'
                          : 'border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300'
                      }`}
                    >
                      <Users className="h-4 w-4" />
                      {tx('school.b15.join_codes.type_teacher')}
                    </button>
                  </div>
                </div>

                {/* Code value */}
                <div className="space-y-2">
                  <Label htmlFor="form-code" className="text-zinc-300">
                    {tx('school.b15.join_codes.label_code')}
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="form-code"
                      value={formCode}
                      onChange={(e) =>
                        setFormCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))
                      }
                      placeholder="E.g. ABC123"
                      maxLength={12}
                      className="font-mono tracking-widest bg-zinc-800 border-zinc-700 text-white uppercase placeholder:text-zinc-600"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setFormCode(generateCode())}
                      title="Regenerate code"
                      className="shrink-0 border-zinc-700 bg-zinc-800 text-zinc-400 hover:text-white"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-zinc-500">{tx('school.b15.join_codes.code_hint')}</p>
                </div>

                {/* Max uses */}
                <div className="space-y-2">
                  <Label htmlFor="form-max-uses" className="text-zinc-300">
                    {tx('school.b15.join_codes.label_max_uses')}
                  </Label>
                  <Input
                    id="form-max-uses"
                    type="number"
                    min="0"
                    max="10000"
                    value={formMaxUses}
                    onChange={(e) => setFormMaxUses(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                  <p className="text-xs text-zinc-500">
                    {tx('school.b15.join_codes.max_uses_hint')}
                  </p>
                </div>

                {/* Expires */}
                <div className="space-y-2">
                  <Label htmlFor="form-expires" className="text-zinc-300">
                    {tx('school.b15.join_codes.label_expires')}
                    <span className="ml-1 text-zinc-500 font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="form-expires"
                    type="date"
                    value={formExpires}
                    min={new Date(Date.now() + 86400000).toISOString().slice(0, 10)}
                    onChange={(e) => setFormExpires(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white [color-scheme:dark]"
                  />
                  <p className="text-xs text-zinc-500">
                    {tx('school.b15.join_codes.expires_hint')}
                  </p>
                </div>

                {/* Link to class */}
                <div className="space-y-2">
                  <Label htmlFor="form-class" className="text-zinc-300">
                    {tx('school.b15.join_codes.label_class')}
                    <span className="ml-1 text-zinc-500 font-normal">(optional)</span>
                  </Label>
                  <select
                    id="form-class"
                    value={formClassId}
                    onChange={(e) => setFormClassId(e.target.value)}
                    className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">{tx('school.b15.join_codes.no_class')}</option>
                    {classes.map((cls) => (
                      <option key={cls.id} value={cls.id}>
                        {cls.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-zinc-500">{tx('school.b15.join_codes.class_hint')}</p>
                </div>

                {createError && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-900/50 bg-red-950/30 px-3 py-2.5 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {createError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={creating}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {creating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {tx('school.b15.join_codes.btn_generating')}
                    </>
                  ) : (
                    <>
                      <Key className="mr-2 h-4 w-4" />
                      {tx('school.b15.join_codes.btn_generate')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
