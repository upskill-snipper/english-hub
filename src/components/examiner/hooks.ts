'use client'

// ─── Examiner tool - data hooks ─────────────────────────────────────────────

import { useCallback, useEffect, useState } from 'react'
import type { ExaminerPack, ExaminerPackSummary } from '@/lib/marking/examiner/types'
import { deleteJson, getJson, postJson } from './lib/sse'

export function usePackList() {
  const [packs, setPacks] = useState<ExaminerPackSummary[] | null>(null)
  const [error, setError] = useState('')
  useEffect(() => {
    const ctrl = new AbortController()
    getJson<{ packs: ExaminerPackSummary[] }>('/api/examiner/packs', ctrl.signal)
      .then((r) => setPacks(r.packs))
      .catch((e) => {
        if (ctrl.signal.aborted) return
        setError(e instanceof Error ? e.message : 'Could not load the list of papers.')
      })
    return () => ctrl.abort()
  }, [])
  return { packs, error }
}

const packCache = new Map<string, ExaminerPack>()

export function usePack(packId: string | null) {
  const [pack, setPack] = useState<ExaminerPack | null>(
    packId ? (packCache.get(packId) ?? null) : null,
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    if (!packId) {
      setPack(null)
      return
    }
    const cached = packCache.get(packId)
    if (cached) {
      setPack(cached)
      return
    }
    const ctrl = new AbortController()
    setLoading(true)
    setError('')
    getJson<{ pack: ExaminerPack }>(
      `/api/examiner/packs/${encodeURIComponent(packId)}`,
      ctrl.signal,
    )
      .then((r) => {
        packCache.set(packId, r.pack)
        setPack(r.pack)
      })
      .catch((e) => {
        if (ctrl.signal.aborted) return
        setError(e instanceof Error ? e.message : 'Could not load this paper.')
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoading(false)
      })
    return () => ctrl.abort()
  }, [packId])
  return { pack, loading, error }
}

export interface SavedScheme {
  id: string
  pack_id: string
  name: string
  char_count: number
  source_kind: string | null
  updated_at: string
}

export function useSchemes(packId: string | null) {
  const [schemes, setSchemes] = useState<SavedScheme[]>([])
  const [error, setError] = useState('')
  const [signedOut, setSignedOut] = useState(false)

  const refresh = useCallback(async () => {
    try {
      const r = await getJson<{ schemes: SavedScheme[] }>('/api/examiner/schemes')
      setSchemes(r.schemes)
      setSignedOut(false)
    } catch (e) {
      const status = (e as { status?: number }).status
      if (status === 401) {
        setSignedOut(true)
        return
      }
      setError(e instanceof Error ? e.message : 'Could not load your saved schemes.')
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const save = useCallback(
    async (name: string, body: string, sourceKind: 'pdf' | 'docx' | 'text' | 'paste') => {
      if (!packId) throw new Error('Choose a paper first.')
      const res = await postJson('/api/examiner/schemes', { packId, name, body, sourceKind })
      const r = (await res.json()) as { scheme: SavedScheme }
      await refresh()
      return r.scheme
    },
    [packId, refresh],
  )

  const load = useCallback(async (id: string) => {
    const r = await getJson<{ scheme: SavedScheme & { body: string } }>(
      `/api/examiner/schemes/${encodeURIComponent(id)}`,
    )
    return r.scheme
  }, [])

  const remove = useCallback(
    async (id: string) => {
      await deleteJson(`/api/examiner/schemes/${encodeURIComponent(id)}`)
      await refresh()
    },
    [refresh],
  )

  const forPack = packId ? schemes.filter((s) => s.pack_id === packId) : schemes
  return { schemes: forPack, all: schemes, error, signedOut, refresh, save, load, remove }
}

export interface SavedRun {
  id: string
  pack_id: string
  question_id: string
  batch_id: string | null
  candidate_label: string | null
  page_count: number
  mark: number | null
  max_mark: number | null
  mark_note: string | null
  doubtful_readings: number
  unreadable_stretches: number
  created_at: string
  expires_at: string
}

export interface SavedRunDetail extends SavedRun {
  transcript: string | null
  transcript_notes: string | null
  commentary: string | null
}

export interface SaveRunInput {
  packId: string
  questionId: string
  batchId?: string
  candidateLabel?: string
  pageCount: number
  transcript?: string
  transcriptNotes?: string
  commentary?: string
  mark?: number | null
  maxMark?: number | null
  markNote?: string
  doubtfulReadings: number
  unreadableStretches: number
  modelTranscribe?: string
  modelMark?: string
}

export function useRuns() {
  const [runs, setRuns] = useState<SavedRun[] | null>(null)
  const [error, setError] = useState('')

  const refresh = useCallback(async () => {
    try {
      const r = await getJson<{ runs: SavedRun[] }>('/api/examiner/runs')
      setRuns(r.runs)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load your saved marking.')
    }
  }, [])

  const save = useCallback(async (input: SaveRunInput) => {
    const res = await postJson('/api/examiner/runs', input)
    const r = (await res.json()) as { run: SavedRun }
    setRuns((prev) => (prev ? [r.run, ...prev] : [r.run]))
    return r.run
  }, [])

  const load = useCallback(async (id: string) => {
    const r = await getJson<{ run: SavedRunDetail }>(`/api/examiner/runs/${encodeURIComponent(id)}`)
    return r.run
  }, [])

  const remove = useCallback(async (id: string) => {
    await deleteJson(`/api/examiner/runs/${encodeURIComponent(id)}`)
    setRuns((prev) => (prev ? prev.filter((r) => r.id !== id) : prev))
  }, [])

  return { runs, error, refresh, save, load, remove }
}
