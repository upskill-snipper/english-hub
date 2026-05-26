// ─── /admin/training-data - Platform-admin training-data console ─────────────
//
// Server Component (platform-admin only). Shows the anonymised training corpus:
//   • counts by exam board and by training status,
//   • a table of recent anonymised records (NO PII - only hashed ids + the
//     non-identifying question/mark context),
//   • a "Prepare eligible" action that promotes every approved + training-
//     eligible + not-yet-exported submission via prepareTrainingRecord (each
//     call re-enforces the teacher-approval + consent gates + audit log), and
//   • export buttons (jsonl / csv / eval) that hit /api/training/export.
//
// Why a Server Component (vs the client+fetch admin pattern used elsewhere):
// the page's data has no JSON API in scope and training_data is service-role-
// only, so reads happen here behind `verifyAdmin()`. The mutating action is a
// server action that fans out to the audited prepareTrainingRecord. Exports are
// plain links - the browser performs the authenticated GET + file download.
// ────────────────────────────────────────────────────────────────────────────

import { redirect } from 'next/navigation'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'
import { verifyAdmin } from '@/lib/admin-auth'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { prepareTrainingRecord } from '@/lib/training/prepare'
import { lookup } from '@/lib/i18n/dictionary'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const TRAINING_STATUSES = ['approved', 'training_ready', 'excluded_from_training'] as const

interface RecentRow {
  anon_submission_id: string
  exam_board: string | null
  qualification: string | null
  paper: string | null
  question_type: string | null
  ai_predicted_mark: number | null
  teacher_final_mark: number | null
  mark_delta: number | null
  grade_band: string | null
  source: string | null
  created_at: string
}

// ─── i18n (server-side: read the eh-lang cookie, mirror useT) ───────────────

async function getT(): Promise<(k: string) => string> {
  const store = await cookies()
  const raw = store.get('eh-lang')?.value
  const locale = raw === 'ar' ? 'ar' : 'en'
  return (k: string) => lookup(k, locale)
}

// ─── Server action: prepare every eligible submission ───────────────────────

async function prepareEligibleAction(): Promise<void> {
  'use server'

  const { error: authError } = await verifyAdmin()
  if (authError) {
    // Not authorised - do nothing (the page itself also gates on render).
    return
  }

  const admin = createServiceRoleClient()
  // Eligible == teacher-approved + flagged training-eligible + still in the
  // 'approved' state (i.e. not yet promoted to training_ready / excluded).
  const { data, error } = await admin
    .from('marking_submissions')
    .select('id')
    .eq('status', 'approved')
    .eq('training_eligible', true)
    .limit(500)

  if (error || !data) {
    console.error('[admin/training-data] eligible lookup failed', error?.message)
    revalidatePath('/admin/training-data')
    return
  }

  // Sequential - prepareTrainingRecord is idempotent and writes an audit row
  // per call; keep load predictable rather than hammering the DB in parallel.
  for (const r of data as { id: string }[]) {
    try {
      await prepareTrainingRecord(r.id)
    } catch (err) {
      console.error('[admin/training-data] prepare failed for a submission', err)
    }
  }

  revalidatePath('/admin/training-data')
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function TrainingDataAdminPage() {
  const { error: authError } = await verifyAdmin()
  if (authError === 'Unauthorized') {
    redirect('/auth/login?redirect=/admin/training-data')
  }
  if (authError === 'Forbidden') {
    redirect('/dashboard')
  }

  const t = await getT()
  const admin = createServiceRoleClient()

  // Counts by board + by training status + recent anonymised rows.
  const [boardRowsRes, statusCountsRes, recentRes, totalRes, eligibleRes] = await Promise.all([
    admin.from('training_data').select('exam_board').limit(50000),
    Promise.all(
      TRAINING_STATUSES.map(async (s) => {
        const { count } = await admin
          .from('marking_submissions')
          .select('id', { count: 'exact', head: true })
          .eq('status', s)
        return [s, count ?? 0] as const
      }),
    ),
    admin
      .from('training_data')
      .select(
        'anon_submission_id, exam_board, qualification, paper, question_type,' +
          ' ai_predicted_mark, teacher_final_mark, mark_delta, grade_band,' +
          ' source, created_at',
      )
      .order('created_at', { ascending: false })
      .limit(25),
    admin.from('training_data').select('id', { count: 'exact', head: true }),
    admin
      .from('marking_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'approved')
      .eq('training_eligible', true),
  ])

  const boardCounts = new Map<string, number>()
  for (const r of (boardRowsRes.data ?? []) as { exam_board: string | null }[]) {
    const b = r.exam_board?.trim() || 'Unknown'
    boardCounts.set(b, (boardCounts.get(b) ?? 0) + 1)
  }
  const boardEntries = Array.from(boardCounts.entries()).sort((a, b) => b[1] - a[1])
  const statusCounts = statusCountsRes as readonly (readonly [string, number])[]
  const recent = (recentRes.data ?? []) as unknown as RecentRow[]
  const totalRecords = totalRes.count ?? 0
  const eligibleCount = eligibleRes.count ?? 0

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← {t('admin.back_to_admin')}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">{t('admin.training.title')}</h1>
        <p className="text-muted-foreground mb-8">{t('admin.training.subtitle')}</p>

        {/* Summary cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="text-sm text-muted-foreground">{t('admin.training.stat.total')}</span>
            <p className="text-3xl font-bold text-foreground">{totalRecords.toLocaleString()}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="text-sm text-muted-foreground">
              {t('admin.training.stat.eligible')}
            </span>
            <p className="text-3xl font-bold text-foreground">{eligibleCount.toLocaleString()}</p>
          </div>
          {statusCounts.map(([s, c]) => (
            <div key={s} className="bg-card border border-border rounded-xl p-5">
              <span className="text-sm text-muted-foreground break-all">{s}</span>
              <p className="text-3xl font-bold text-foreground">{c.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-1">
            {t('admin.training.actions.title')}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">{t('admin.training.actions.desc')}</p>
          <div className="flex flex-wrap gap-3">
            <form action={prepareEligibleAction}>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                {t('admin.training.actions.prepare')} ({eligibleCount})
              </button>
            </form>
            <a
              href="/api/training/export?format=jsonl"
              className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
            >
              {t('admin.training.export.jsonl')}
            </a>
            <a
              href="/api/training/export?format=csv"
              className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
            >
              {t('admin.training.export.csv')}
            </a>
            <a
              href="/api/training/export?format=eval"
              className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
            >
              {t('admin.training.export.eval')}
            </a>
          </div>
        </section>

        {/* Counts by board */}
        <section className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.training.by_board')}
          </h2>
          {boardEntries.length === 0 ? (
            <p className="text-muted-foreground text-sm py-2">{t('admin.training.empty')}</p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {boardEntries.map(([board, count]) => (
                <div
                  key={board}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
                >
                  <span className="text-foreground font-medium">{board}</span>
                  <span className="text-muted-foreground">{count}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Recent anonymised records (NO PII) */}
        <section className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t('admin.training.recent')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.anon_id')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.board')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.paper')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.qtype')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.ai')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.teacher')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.delta')}</th>
                  <th className="pb-3 pr-4 font-medium">{t('admin.training.col.source')}</th>
                  <th className="pb-3 font-medium">{t('admin.training.col.created')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recent.map((r) => (
                  <tr key={r.anon_submission_id} className="text-foreground">
                    <td
                      className="py-3 pr-4 font-mono text-xs truncate max-w-[140px]"
                      title={r.anon_submission_id}
                    >
                      {r.anon_submission_id.slice(0, 12)}…
                    </td>
                    <td className="py-3 pr-4">
                      {r.exam_board || <span className="text-muted-foreground">--</span>}
                    </td>
                    <td className="py-3 pr-4">
                      {r.paper || <span className="text-muted-foreground">--</span>}
                    </td>
                    <td className="py-3 pr-4">
                      {r.question_type || <span className="text-muted-foreground">--</span>}
                    </td>
                    <td className="py-3 pr-4">
                      {r.ai_predicted_mark ?? <span className="text-muted-foreground">--</span>}
                    </td>
                    <td className="py-3 pr-4">
                      {r.teacher_final_mark ?? <span className="text-muted-foreground">--</span>}
                    </td>
                    <td className="py-3 pr-4">
                      {r.mark_delta === null ? (
                        <span className="text-muted-foreground">--</span>
                      ) : (
                        <span
                          className={
                            r.mark_delta === 0 ? 'text-muted-foreground' : 'text-foreground'
                          }
                        >
                          {r.mark_delta > 0 ? `+${r.mark_delta}` : r.mark_delta}
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-border text-muted-foreground">
                        {r.source || 'unknown'}
                      </span>
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
            {recent.length === 0 && (
              <p className="text-muted-foreground text-sm py-4 text-center">
                {t('admin.training.empty')}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
