'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import DOMPurify from 'dompurify'
import {
  ArrowLeft,
  FolderOpen,
  PenTool,
  FileText,
  Quote,
  Trash2,
  Eye,
  RotateCcw,
  Calendar,
  BookOpen,
  X,
} from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  LS_KEYS,
  lsGet,
  lsSet,
  type SavedMaterial,
  type GeneratedTest,
} from '@/components/toolkit/toolkit-types'

// ─── My Materials ────────────────────────────────────────────────────────
// Lists all saved custom tests, revision notes, and quote banks.
// Stored in localStorage. Students can re-view, re-take, or delete.
// ──────────────────────────────────────────────────────────────────────────

type FilterType = 'all' | 'test' | 'notes' | 'quotes'

const TYPE_ICONS = {
  test: PenTool,
  notes: FileText,
  quotes: Quote,
}

const TYPE_LABELS = {
  test: 'Test',
  notes: 'Revision Notes',
  quotes: 'Quote Bank',
}

const TYPE_COLOURS = {
  test: { text: 'text-violet-500', bg: 'bg-violet-500/10' },
  notes: { text: 'text-blue-500', bg: 'bg-blue-500/10' },
  quotes: { text: 'text-amber-500', bg: 'bg-amber-500/10' },
}

export default function MyMaterialsPage() {
  const { board } = useBoard()
  const [mounted, setMounted] = useState(false)
  const [materials, setMaterials] = useState<SavedMaterial[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [viewingMaterial, setViewingMaterial] = useState<SavedMaterial | null>(null)

  useEffect(() => {
    setMounted(true)
    setMaterials(lsGet<SavedMaterial[]>(LS_KEYS.myMaterials, []))
  }, [])

  // Delete a material
  const deleteMaterial = useCallback(
    (id: string) => {
      if (!confirm('Are you sure you want to delete this material?')) return
      const updated = materials.filter((m) => m.id !== id)
      setMaterials(updated)
      lsSet(LS_KEYS.myMaterials, updated)
      if (viewingMaterial?.id === id) setViewingMaterial(null)
    },
    [materials, viewingMaterial],
  )

  // Filtered materials
  const filtered = filter === 'all' ? materials : materials.filter((m) => m.type === filter)

  // Sort by date (newest first)
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime(),
  )

  // Format date
  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
              My Materials
            </h1>
            <p className="text-sm text-muted-foreground">
              Your saved tests, revision notes, and quote banks
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 rounded-xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Toolkit
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
              <FolderOpen className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                My Materials
              </h1>
              <p className="text-sm text-muted-foreground">
                Your saved tests, revision notes, and quote banks
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* ── Filters ───────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {(['all', 'test', 'notes', 'quotes'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`chip ${filter === f ? 'chip-active' : 'chip-inactive'}`}
            >
              {f === 'all' ? 'All' : TYPE_LABELS[f]}
              {f !== 'all' && (
                <span className="font-mono text-xs opacity-60 ml-1">
                  ({materials.filter((m) => m.type === f).length})
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto text-sm text-muted-foreground font-mono">
            {materials.length} total
          </span>
        </div>

        {/* ── Material viewing overlay ───────────────────────────── */}
        {viewingMaterial && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-16 px-4 overflow-y-auto">
            <div className="w-full max-w-3xl bg-card rounded-xl border border-border shadow-elevated p-6 sm:p-8 mb-16">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-serif text-xl font-medium">{viewingMaterial.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(viewingMaterial.dateCreated)} -- {viewingMaterial.topic}
                  </p>
                </div>
                <button
                  onClick={() => setViewingMaterial(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {viewingMaterial.type === 'notes' && (
                <div className="prose prose-sm max-w-none course-content">
                  {/* P2-SEC-1: DOMPurify-wrap the hand-rolled markdown
                      pipeline so any HTML smuggled through the AI path
                      (prompt injection → model emits <script>) is stripped
                      before it reaches a minor's browser. */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        ((viewingMaterial.data as { notes: string })?.notes || '')
                          .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                          .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                          .replace(/^# (.+)$/gm, '<h1>$1</h1>')
                          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.+?)\*/g, '<em>$1</em>')
                          .replace(/^- (.+)$/gm, '<li>$1</li>')
                          .replace(/^---$/gm, '<hr />')
                          .replace(/\n\n/g, '</p><p>')
                          .replace(/\n/g, '<br />'),
                        { USE_PROFILES: { html: true } },
                      ),
                    }}
                  />
                </div>
              )}

              {viewingMaterial.type === 'test' && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    This test has{' '}
                    {
                      ((viewingMaterial.data as { test: GeneratedTest })?.test?.questions || [])
                        .length
                    }{' '}
                    questions.
                  </p>
                  <Link href="/toolkit/test-builder" className="btn-primary inline-flex">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Take a New Test
                  </Link>
                </div>
              )}

              {viewingMaterial.type === 'quotes' && (
                <div className="text-sm text-muted-foreground">
                  <pre className="whitespace-pre-wrap font-sans">
                    {JSON.stringify(viewingMaterial.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Materials Grid ─────────────────────────────────────── */}
        {sorted.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((material) => {
              const colours = TYPE_COLOURS[material.type]
              const Icon = TYPE_ICONS[material.type]

              return (
                <div
                  key={material.id}
                  className="group rounded-xl border border-border bg-card p-5 shadow-soft hover:shadow-medium hover:border-primary/25 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${colours.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${colours.text}`} />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono">
                      {TYPE_LABELS[material.type]}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-base font-medium mb-1 line-clamp-2">
                    {material.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3" />
                    {formatDate(material.dateCreated)}
                    <span className="mx-1">--</span>
                    <BookOpen className="h-3 w-3" />
                    {material.topic}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <button
                      onClick={() => setViewingMaterial(material)}
                      className="btn-ghost text-xs py-1.5 px-3 flex-1"
                    >
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      View
                    </button>
                    {material.type === 'test' && (
                      <Link
                        href="/toolkit/test-builder"
                        className="btn-ghost text-xs py-1.5 px-3 flex-1"
                      >
                        <RotateCcw className="h-3.5 w-3.5 mr-1" />
                        Re-take
                      </Link>
                    )}
                    <button
                      onClick={() => deleteMaterial(material.id)}
                      className="btn-ghost text-xs py-1.5 px-3 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <FolderOpen className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-serif text-lg font-medium mb-2">No materials saved yet</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Generate custom tests or revision notes using the AI tools, then save them here for
              quick access later.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/toolkit/test-builder" className="btn-primary text-sm">
                <PenTool className="h-4 w-4 mr-2" />
                Create a Test
              </Link>
              <Link href="/toolkit/revision-builder" className="btn-secondary text-sm">
                <FileText className="h-4 w-4 mr-2" />
                Generate Notes
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
