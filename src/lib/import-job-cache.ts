// ---------------------------------------------------------------------------
// Shared import-job cache
// Extracted from the /api/school/import route so other route files can access
// it without re-exporting non-handler symbols from a Next.js App Router route.
// ---------------------------------------------------------------------------

export interface ImportedUser {
  email: string
  temporaryPassword: string
  firstName: string
  lastName: string
  role: string
  yearGroup: string
  className: string
}

export interface ImportJob {
  jobId: string
  schoolId: string
  createdAt: number
  total: number
  success: number
  errors: Array<{ row: number; email: string; error: string }>
  users: ImportedUser[]
}

// Module-level cache (fast path - same serverless instance only)
const jobCache = new Map<string, ImportJob>()

export function getJobFromCache(jobId: string): ImportJob | undefined {
  return jobCache.get(jobId)
}

export function setJobInCache(jobId: string, job: ImportJob): void {
  jobCache.set(jobId, job)
}
