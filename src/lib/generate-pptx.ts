'use client'

import type { LessonPlanData } from './generate-teaching-pdf'

// ─── Re-export the ResourcePptxData type (used by callers) ───────────────────

export interface ResourcePptxData {
  title: string
  type: string
  yearGroup: string
  examBoard: string
  duration?: string
  objectives: string[]
  firstActivity: string
}

// ─── Download helper ─────────────────────────────────────────────────────────

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  setTimeout(() => {
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, 200)
}

// ─── Shared fetch → download logic ──────────────────────────────────────────

async function fetchAndDownload(body: Record<string, unknown>): Promise<void> {
  console.log('[PPTX] Requesting server-side generation:', body.variant)
  const res = await fetch('/api/generate-pptx', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => 'Unknown error')
    console.error('[PPTX] API error:', res.status, text)
    throw new Error('Failed to generate PowerPoint file. Please try the PDF download instead.')
  }

  const blob = await res.blob()
  console.log('[PPTX] Received blob, size:', blob.size)

  // Extract filename from Content-Disposition header if available
  const cd = res.headers.get('Content-Disposition')
  const match = cd?.match(/filename="?([^"]+)"?/)
  const fileName = match?.[1] ?? 'download.pptx'

  downloadBlob(blob, fileName)
  console.log('[PPTX] Download triggered:', fileName)
}

// ─── Lesson Plan PowerPoint ──────────────────────────────────────────────────

export async function generateLessonPlanPptx(topic: string, data: LessonPlanData): Promise<void> {
  await fetchAndDownload({ variant: 'lesson-plan', topic, data })
}

// ─── Generic Resource PowerPoint ─────────────────────────────────────────────

export async function generateResourcePptx(data: ResourcePptxData): Promise<void> {
  await fetchAndDownload({ variant: 'resource', data })
}
