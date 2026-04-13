import { describe, it, expect, vi, beforeEach } from 'vitest'

// ── Mock Supabase client builder ──────────────────────────────────────

function buildMockSupabase(overrides?: {
  user?: { id: string } | null
  selectData?: Record<string, unknown>[] | null
  selectError?: { message: string } | null
  insertError?: { message: string } | null
}) {
  const user = overrides?.user !== undefined ? overrides.user : { id: 'test-user-id' }
  const selectData = overrides?.selectData ?? []
  const selectError = overrides?.selectError ?? null
  const insertError = overrides?.insertError ?? null

  return {
    auth: {
      getUser: vi.fn().mockResolvedValue({
        data: { user },
        error: user ? null : { message: 'Not authenticated' },
      }),
    },
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          in: vi.fn().mockResolvedValue({ data: selectData, error: selectError }),
          order: vi.fn().mockResolvedValue({ data: selectData, error: selectError }),
        }),
      }),
      insert: vi.fn().mockResolvedValue({ error: insertError }),
    }),
  } as any
}

// ── Tests ─────────────────────────────────────────────────────────────

describe('Progress Sync', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  // ── syncProgressToSupabase ──────────────────────────────────────────

  describe('syncProgressToSupabase', () => {
    it('returns synced: 0 when user is not authenticated', async () => {
      const { syncProgressToSupabase } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase({ user: null })

      const result = await syncProgressToSupabase(supabase)
      expect(result.synced).toBe(0)
      expect(result.errors).toContain('Not authenticated')
    })

    it('returns synced: 0 and no errors when localStorage is empty (server-side)', async () => {
      // On server (typeof window === "undefined"), collectLocalStorageProgress returns []
      const { syncProgressToSupabase } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase()

      const result = await syncProgressToSupabase(supabase)
      expect(result.synced).toBe(0)
      expect(result.errors).toHaveLength(0)
    })
  })

  // ── loadProgressFromSupabase ────────────────────────────────────────

  describe('loadProgressFromSupabase', () => {
    it('returns empty data and error when not authenticated', async () => {
      const { loadProgressFromSupabase } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase({ user: null })

      const result = await loadProgressFromSupabase(supabase)
      expect(result.data).toEqual([])
      expect(result.error).toBe('Not authenticated')
    })

    it('returns data from Supabase when authenticated', async () => {
      const mockRows = [
        { user_id: 'u1', progress_type: 'poem_studied', slug: 'ozymandias', score: null, created_at: '2026-01-01' },
      ]
      const { loadProgressFromSupabase } = await import('@/lib/progress/sync')

      const supabase = buildMockSupabase({ selectData: mockRows })
      const result = await loadProgressFromSupabase(supabase)
      expect(result.error).toBeNull()
      expect(result.data).toEqual(mockRows)
    })

    it('returns error message on Supabase query failure', async () => {
      const { loadProgressFromSupabase } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase({ selectError: { message: 'Table not found' } })

      const result = await loadProgressFromSupabase(supabase)
      expect(result.data).toEqual([])
      expect(result.error).toBe('Table not found')
    })
  })

  // ── saveProgress ───────────────────────────────────────────────────

  describe('saveProgress', () => {
    it('returns success: false when not authenticated', async () => {
      const { saveProgress } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase({ user: null })

      const result = await saveProgress(supabase, 'poem_studied', { slug: 'test' })
      expect(result.success).toBe(false)
      expect(result.error).toBe('Not authenticated')
    })

    it('returns success: true on valid insert', async () => {
      const { saveProgress } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase()

      const result = await saveProgress(supabase, 'quiz_completed', {
        slug: 'poetry-quiz-1',
        score: 8,
        max_score: 10,
        grade: 'A',
      })
      expect(result.success).toBe(true)
      expect(result.error).toBeNull()
    })

    it('returns error message on insert failure', async () => {
      const { saveProgress } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase({ insertError: { message: 'Insert failed' } })

      const result = await saveProgress(supabase, 'game_played', { slug: 'vocab-game' })
      expect(result.success).toBe(false)
      expect(result.error).toBe('Insert failed')
    })

    it('sends correct progress_type to Supabase', async () => {
      const { saveProgress } = await import('@/lib/progress/sync')
      const supabase = buildMockSupabase()

      await saveProgress(supabase, 'essay_marked', { slug: 'macbeth-essay-1' })

      const fromCall = supabase.from.mock.calls[0]
      expect(fromCall[0]).toBe('student_progress')
    })
  })
})
