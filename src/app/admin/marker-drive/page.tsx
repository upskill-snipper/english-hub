'use client'

// ─── Platform-admin - Paid Marker Drive ─────────────────────────────────────
// Site-admin only. The server API routes enforce verifyAdmin; this page
// redirects on 401/403 exactly like src/app/admin/affiliates/page.tsx and
// src/app/admin/ai-marking/page.tsx (auth gate + layout match).
//
// One screen to: create/list batches with live counts, ingest (paste JSON or
// upload CSV), "AI-draft next 25", manage paid markers, and assign work.
//
// i18n: useT() with explicit English fallbacks. The dictionary lookup()
// returns the sentinel "[[key]]" for an unknown key (it does NOT fall back to
// English by itself), so `tf(key, english)` below substitutes the English
// copy when a key is not yet in the dictionary. New keys are listed in the
// agent report (dictionaries are intentionally NOT edited here).
//
// Empty-table safe: every fetch tolerates an empty / unavailable store and
// renders an empty state rather than crashing.

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
  Users,
  Package,
  UploadCloud,
  Sparkles,
  UserPlus,
  ClipboardList,
} from 'lucide-react'

// ─── Types (mirror the API contracts) ────────────────────────────────────────

interface BatchCounts {
  total: number
  ai_drafted: number
  assigned: number
  approved: number
}
interface Batch {
  id: string
  label: string
  board: string
  paper: string | null
  source_type: string
  target_count: number
  status: string
  created_at: string
  counts: BatchCounts
}
interface Marker {
  id: string
  display_name: string
  email: string | null
  boards: string[]
  qualification: string | null
  status: string
  pay_rate_pence: number | null
  contract_signed_at: string | null
  nda_signed_at: string | null
}

const SOURCE_TYPES = ['commissioned', 'platform', 'specimen'] as const

export default function AdminMarkerDrivePage() {
  const router = useRouter()
  const { user, profile } = useAuthStore()
  const t = useT()
  // Dictionary lookup() returns "[[key]]" when a key is missing - fall back
  // to the supplied English copy in that case.
  const tf = useCallback(
    (key: string, english: string) => {
      const v = t(key)
      return !v || v === `[[${key}]]` ? english : v
    },
    [t],
  )

  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState<string | null>(null)

  const [batches, setBatches] = useState<Batch[]>([])
  const [markers, setMarkers] = useState<Marker[]>([])

  // New-batch form.
  const [bLabel, setBLabel] = useState('')
  const [bBoard, setBBoard] = useState('')
  const [bPaper, setBPaper] = useState('')
  const [bSource, setBSource] = useState<(typeof SOURCE_TYPES)[number]>('commissioned')
  const [bTarget, setBTarget] = useState<number>(0)

  // New-marker form.
  const [mName, setMName] = useState('')
  const [mEmail, setMEmail] = useState('')
  const [mBoards, setMBoards] = useState('')
  const [mQual, setMQual] = useState('')
  const [mRate, setMRate] = useState<string>('')

  // Ingest / assign per-batch UI state.
  const [ingestBatchId, setIngestBatchId] = useState<string>('')
  const [ingestJson, setIngestJson] = useState('')
  const [ingestMsg, setIngestMsg] = useState<string | null>(null)
  const [assignBatchId, setAssignBatchId] = useState<string>('')
  const [assignMarkerId, setAssignMarkerId] = useState<string>('')
  const [assignCount, setAssignCount] = useState<number>(10)
  const [assignMsg, setAssignMsg] = useState<string | null>(null)

  const fetchAll = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [bRes, mRes] = await Promise.all([
        fetch('/api/admin/marker-batches'),
        fetch('/api/admin/markers'),
      ])
      if (bRes.status === 401 || mRes.status === 401) {
        router.push('/auth/login?redirect=/admin/marker-drive')
        return
      }
      if (bRes.status === 403 || mRes.status === 403) {
        router.push('/dashboard')
        return
      }
      if (!bRes.ok || !mRes.ok) throw new Error('fetch failed')
      const bJson = (await bRes.json()) as { batches: Batch[] }
      const mJson = (await mRes.json()) as { markers: Marker[] }
      setAuthorized(true)
      setBatches(bJson.batches ?? [])
      setMarkers(mJson.markers ?? [])
    } catch {
      setError(tf('admin.md.error_load', 'Could not load the marker drive. Try again.'))
    }
    setLoading(false)
  }, [router, tf])

  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/marker-drive')
      return
    }
    if (user) fetchAll()
  }, [user, profile, router, fetchAll])

  const createBatch = async () => {
    if (!bLabel.trim() || !bBoard.trim()) {
      setError(tf('admin.md.batch.need_label_board', 'Label and board are required.'))
      return
    }
    setBusy('batch')
    setError(null)
    try {
      const res = await fetch('/api/admin/marker-batches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          label: bLabel.trim(),
          board: bBoard.trim(),
          paper: bPaper.trim() || null,
          source_type: bSource,
          target_count: Number.isFinite(bTarget) ? bTarget : 0,
        }),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        setError(d.error || tf('admin.md.batch.create_failed', 'Failed to create batch.'))
      } else {
        setBLabel('')
        setBBoard('')
        setBPaper('')
        setBTarget(0)
        await fetchAll()
      }
    } catch {
      setError(tf('admin.md.network_error', 'Network error. Please try again.'))
    }
    setBusy(null)
  }

  const createMarker = async () => {
    if (!mName.trim()) {
      setError(tf('admin.md.marker.need_name', 'Marker display name is required.'))
      return
    }
    setBusy('marker')
    setError(null)
    try {
      const res = await fetch('/api/admin/markers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          display_name: mName.trim(),
          email: mEmail.trim() || null,
          boards: mBoards.trim(),
          qualification: mQual.trim() || null,
          pay_rate_pence: mRate.trim() ? Number(mRate.trim()) : null,
        }),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        setError(d.error || tf('admin.md.marker.create_failed', 'Failed to save marker.'))
      } else {
        setMName('')
        setMEmail('')
        setMBoards('')
        setMQual('')
        setMRate('')
        await fetchAll()
      }
    } catch {
      setError(tf('admin.md.network_error', 'Network error. Please try again.'))
    }
    setBusy(null)
  }

  const ingest = async () => {
    if (!ingestBatchId) {
      setIngestMsg(tf('admin.md.ingest.pick_batch', 'Pick a batch first.'))
      return
    }
    const raw = ingestJson.trim()
    if (!raw) {
      setIngestMsg(tf('admin.md.ingest.empty', 'Paste JSON or CSV to ingest.'))
      return
    }
    setBusy('ingest')
    setIngestMsg(null)
    // Decide JSON vs CSV from the pasted text shape.
    const looksJson = raw.startsWith('{') || raw.startsWith('[')
    try {
      let bodyText = raw
      let contentType = 'text/csv'
      if (looksJson) {
        contentType = 'application/json'
        // Allow either a bare array or a { items: [...] } object.
        const parsed = JSON.parse(raw)
        bodyText = JSON.stringify(Array.isArray(parsed) ? { items: parsed } : parsed)
      }
      const res = await fetch(`/api/admin/marker-batches/${ingestBatchId}/ingest`, {
        method: 'POST',
        headers: { 'Content-Type': contentType },
        body: bodyText,
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok && res.status !== 201) {
        setIngestMsg(d.error || tf('admin.md.ingest.failed', 'Ingest failed.'))
      } else {
        setIngestMsg(
          `${tf('admin.md.ingest.done', 'Ingested')}: ${d.inserted ?? 0} · ${tf(
            'admin.md.ingest.skipped',
            'skipped',
          )}: ${d.skipped ?? 0}`,
        )
        setIngestJson('')
        await fetchAll()
      }
    } catch {
      setIngestMsg(tf('admin.md.ingest.bad_json', 'Could not parse the pasted JSON.'))
    }
    setBusy(null)
  }

  const onCsvFile = async (file: File) => {
    const text = await file.text()
    setIngestJson(text)
  }

  const draftNext = async (batchId: string) => {
    setBusy(`draft:${batchId}`)
    setError(null)
    try {
      const res = await fetch(`/api/admin/marker-batches/${batchId}/draft`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: 25 }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(d.error || tf('admin.md.draft.failed', 'AI drafting failed.'))
      } else {
        setError(null)
        setIngestMsg(
          `${tf('admin.md.draft.done', 'Drafted')}: ${d.drafted ?? 0} · ${tf(
            'admin.md.draft.remaining',
            'remaining',
          )}: ${d.remaining ?? 0}`,
        )
        await fetchAll()
      }
    } catch {
      setError(tf('admin.md.network_error', 'Network error. Please try again.'))
    }
    setBusy(null)
  }

  const assign = async () => {
    if (!assignBatchId || !assignMarkerId) {
      setAssignMsg(tf('admin.md.assign.need_both', 'Pick a batch and a marker.'))
      return
    }
    setBusy('assign')
    setAssignMsg(null)
    try {
      const res = await fetch('/api/admin/marker-assign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          batchId: assignBatchId,
          markerId: assignMarkerId,
          count: assignCount,
        }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) {
        setAssignMsg(d.error || tf('admin.md.assign.failed', 'Assignment failed.'))
      } else {
        setAssignMsg(`${tf('admin.md.assign.done', 'Assigned')}: ${d.assigned ?? 0}`)
        await fetchAll()
      }
    } catch {
      setAssignMsg(tf('admin.md.network_error', 'Network error. Please try again.'))
    }
    setBusy(null)
  }

  if (loading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {tf('admin.md.back_to_admin', 'Back to admin')}
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              {tf('admin.md.title', 'Paid Marker Drive')}
            </h1>
          </div>
          <button
            onClick={fetchAll}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {tf('admin.md.refresh', 'Refresh')}
          </button>
        </div>
        <p className="text-muted-foreground mb-8">
          {tf(
            'admin.md.subtitle',
            'Ingest scripts, AI-draft them, manage paid markers and assign work.',
          )}
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Counts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Package className="w-5 h-5" />}
            label={tf('admin.md.stat.batches', 'Batches')}
            value={batches.length}
          />
          <StatCard
            icon={<ClipboardList className="w-5 h-5" />}
            label={tf('admin.md.stat.scripts', 'Scripts')}
            value={batches.reduce((s, b) => s + b.counts.total, 0)}
          />
          <StatCard
            icon={<Sparkles className="w-5 h-5" />}
            label={tf('admin.md.stat.drafted', 'AI-drafted')}
            value={batches.reduce((s, b) => s + b.counts.ai_drafted, 0)}
          />
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label={tf('admin.md.stat.markers', 'Markers')}
            value={markers.length}
          />
        </div>

        {/* Create batch */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            {tf('admin.md.batch.new', 'New batch')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <input
              value={bLabel}
              onChange={(e) => setBLabel(e.target.value)}
              placeholder={tf('admin.md.batch.label', 'Label')}
              className="input-field"
            />
            <input
              value={bBoard}
              onChange={(e) => setBBoard(e.target.value)}
              placeholder={tf('admin.md.batch.board', 'Board')}
              className="input-field"
            />
            <input
              value={bPaper}
              onChange={(e) => setBPaper(e.target.value)}
              placeholder={tf('admin.md.batch.paper', 'Paper (optional)')}
              className="input-field"
            />
            <select
              value={bSource}
              onChange={(e) => setBSource(e.target.value as (typeof SOURCE_TYPES)[number])}
              className="input-field"
            >
              {SOURCE_TYPES.map((s) => (
                <option key={s} value={s}>
                  {tf(`admin.md.source.${s}`, s)}
                </option>
              ))}
            </select>
            <input
              type="number"
              min={0}
              value={bTarget}
              onChange={(e) => setBTarget(Number(e.target.value))}
              placeholder={tf('admin.md.batch.target', 'Target count')}
              className="input-field"
            />
          </div>
          <button
            onClick={createBatch}
            disabled={busy === 'batch'}
            className="btn-primary px-4 py-2 text-sm mt-4"
          >
            {busy === 'batch'
              ? tf('admin.md.saving', 'Saving…')
              : tf('admin.md.batch.create', 'Create batch')}
          </button>
        </section>

        {/* Batches list */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {tf('admin.md.batch.list', 'Batches')} ({batches.length})
          </h2>
          {batches.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">
              {tf('admin.md.batch.none', 'No batches yet.')}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.label', 'Label')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.board', 'Board')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.source', 'Source')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.total', 'Total')}</th>
                    <th className="pb-3 pr-4 font-medium">
                      {tf('admin.md.col.drafted', 'Drafted')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">
                      {tf('admin.md.col.assigned', 'Assigned')}
                    </th>
                    <th className="pb-3 pr-4 font-medium">
                      {tf('admin.md.col.approved', 'Approved')}
                    </th>
                    <th className="pb-3 font-medium">{tf('admin.md.col.action', 'Action')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {batches.map((b) => (
                    <tr key={b.id} className="text-foreground">
                      <td className="py-3 pr-4">
                        <div className="font-medium">{b.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {fmtDate(b.created_at)}
                          {b.paper ? ` · ${b.paper}` : ''}
                        </div>
                      </td>
                      <td className="py-3 pr-4">{b.board}</td>
                      <td className="py-3 pr-4">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-background border border-border">
                          {tf(`admin.md.source.${b.source_type}`, b.source_type)}
                        </span>
                      </td>
                      <td className="py-3 pr-4">{b.counts.total}</td>
                      <td className="py-3 pr-4">{b.counts.ai_drafted}</td>
                      <td className="py-3 pr-4">{b.counts.assigned}</td>
                      <td className="py-3 pr-4">{b.counts.approved}</td>
                      <td className="py-3">
                        <button
                          onClick={() => draftNext(b.id)}
                          disabled={busy === `draft:${b.id}`}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground"
                        >
                          <Sparkles className="w-3 h-3" />
                          {busy === `draft:${b.id}`
                            ? tf('admin.md.draft.running', 'Drafting…')
                            : tf('admin.md.draft.next25', 'AI-draft next 25')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Ingest */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-primary" />
            {tf('admin.md.ingest.title', 'Ingest scripts')}
          </h2>
          <div className="flex flex-col gap-3">
            <select
              value={ingestBatchId}
              onChange={(e) => setIngestBatchId(e.target.value)}
              className="input-field max-w-sm"
            >
              <option value="">{tf('admin.md.ingest.choose_batch', 'Choose a batch…')}</option>
              {batches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label} ({b.board})
                </option>
              ))}
            </select>
            <textarea
              value={ingestJson}
              onChange={(e) => setIngestJson(e.target.value)}
              rows={6}
              placeholder={tf(
                'admin.md.ingest.placeholder',
                'Paste JSON { "items": [...] } or CSV with a header row',
              )}
              className="input-field font-mono text-xs"
            />
            <div className="flex flex-wrap items-center gap-3">
              <label className="text-xs text-muted-foreground">
                {tf('admin.md.ingest.or_csv', 'or upload a CSV:')}
              </label>
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (f) void onCsvFile(f)
                }}
                className="text-xs"
              />
              <button
                onClick={ingest}
                disabled={busy === 'ingest'}
                className="btn-primary px-4 py-2 text-sm"
              >
                {busy === 'ingest'
                  ? tf('admin.md.ingest.running', 'Ingesting…')
                  : tf('admin.md.ingest.go', 'Ingest')}
              </button>
            </div>
            {ingestMsg && <p className="text-sm text-muted-foreground">{ingestMsg}</p>}
          </div>
        </section>

        {/* Markers */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-primary" />
            {tf('admin.md.marker.title', 'Markers')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
            <input
              value={mName}
              onChange={(e) => setMName(e.target.value)}
              placeholder={tf('admin.md.marker.name', 'Display name')}
              className="input-field"
            />
            <input
              value={mEmail}
              onChange={(e) => setMEmail(e.target.value)}
              placeholder={tf('admin.md.marker.email', 'Email')}
              className="input-field"
            />
            <input
              value={mBoards}
              onChange={(e) => setMBoards(e.target.value)}
              placeholder={tf('admin.md.marker.boards', 'Boards (comma-sep)')}
              className="input-field"
            />
            <input
              value={mQual}
              onChange={(e) => setMQual(e.target.value)}
              placeholder={tf('admin.md.marker.qual', 'Qualification')}
              className="input-field"
            />
            <input
              type="number"
              min={0}
              value={mRate}
              onChange={(e) => setMRate(e.target.value)}
              placeholder={tf('admin.md.marker.rate', 'Pay rate (pence)')}
              className="input-field"
            />
          </div>
          <button
            onClick={createMarker}
            disabled={busy === 'marker'}
            className="btn-primary px-4 py-2 text-sm mb-6"
          >
            {busy === 'marker'
              ? tf('admin.md.saving', 'Saving…')
              : tf('admin.md.marker.add', 'Add / update marker')}
          </button>

          {markers.length === 0 ? (
            <p className="text-muted-foreground text-sm py-6 text-center">
              {tf('admin.md.marker.none', 'No markers yet.')}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.name', 'Name')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.email', 'Email')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.boards', 'Boards')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.status', 'Status')}</th>
                    <th className="pb-3 pr-4 font-medium">{tf('admin.md.col.rate', 'Rate (p)')}</th>
                    <th className="pb-3 font-medium">{tf('admin.md.col.docs', 'Docs')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {markers.map((m) => (
                    <tr key={m.id} className="text-foreground">
                      <td className="py-3 pr-4">{m.display_name}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{m.email ?? '-'}</td>
                      <td className="py-3 pr-4">
                        {m.boards.length > 0 ? m.boards.join(', ') : '-'}
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-background border border-border">
                          {tf(`admin.md.mstatus.${m.status}`, m.status)}
                        </span>
                      </td>
                      <td className="py-3 pr-4">{m.pay_rate_pence ?? '-'}</td>
                      <td className="py-3 text-xs text-muted-foreground">
                        {m.contract_signed_at
                          ? tf('admin.md.marker.contract_ok', 'Contract ✓')
                          : tf('admin.md.marker.contract_no', 'No contract')}
                        {' · '}
                        {m.nda_signed_at
                          ? tf('admin.md.marker.nda_ok', 'NDA ✓')
                          : tf('admin.md.marker.nda_no', 'No NDA')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Assign work */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            {tf('admin.md.assign.title', 'Assign work')}
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            {tf(
              'admin.md.assign.hint',
              'Assigns AI-drafted, unassigned scripts in the batch to the marker.',
            )}
          </p>
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label className="label">{tf('admin.md.assign.batch', 'Batch')}</label>
              <select
                value={assignBatchId}
                onChange={(e) => setAssignBatchId(e.target.value)}
                className="input-field w-56"
              >
                <option value="">{tf('admin.md.assign.pick', 'Pick…')}</option>
                {batches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label} ({b.counts.ai_drafted}/{b.counts.total})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">{tf('admin.md.assign.marker', 'Marker')}</label>
              <select
                value={assignMarkerId}
                onChange={(e) => setAssignMarkerId(e.target.value)}
                className="input-field w-56"
              >
                <option value="">{tf('admin.md.assign.pick', 'Pick…')}</option>
                {markers
                  .filter((m) => m.status === 'active')
                  .map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.display_name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="label">{tf('admin.md.assign.count', 'Count')}</label>
              <input
                type="number"
                min={1}
                value={assignCount}
                onChange={(e) => setAssignCount(Number(e.target.value))}
                className="input-field w-28"
              />
            </div>
            <button
              onClick={assign}
              disabled={busy === 'assign'}
              className="btn-primary px-4 py-3 text-sm"
            >
              {busy === 'assign'
                ? tf('admin.md.assign.running', 'Assigning…')
                : tf('admin.md.assign.go', 'Assign')}
            </button>
          </div>
          {assignMsg && <p className="text-sm text-muted-foreground mt-4">{assignMsg}</p>}
        </section>
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
  value: number | string
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-2 text-primary mb-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-3xl font-bold text-foreground">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
    </div>
  )
}
