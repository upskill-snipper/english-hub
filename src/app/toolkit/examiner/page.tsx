import type { Metadata } from 'next'
import { ExaminerTool } from '@/components/examiner/ExaminerTool'

// ─── /toolkit/examiner ──────────────────────────────────────────────────────
// The examiner marking tool for teachers. Sits under /toolkit so the
// middleware's auth wall and the toolkit layout's noindex apply; the AI calls
// behind it are gated on the Teacher/Pro entitlement by their routes.
// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Examiner marking tool',
  description:
    "Mark handwritten or typed scripts as a senior examiner marks: best-fit levels, boundary triggers and commentary in the board's own voice.",
  robots: { index: false, follow: true },
}

export default function ExaminerPage() {
  return <ExaminerTool />
}
