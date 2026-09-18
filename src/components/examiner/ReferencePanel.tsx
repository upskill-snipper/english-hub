'use client'

// ─── Examiner tool - the paper's rules, laid out for reading ────────────────

import type {
  ExaminerGrid,
  ExaminerPack,
  ExaminerQuestionSpec,
  ExaminerTrigger,
} from '@/lib/marking/examiner/types'
import type { ExaminerAnchor } from '@/lib/marking/examiner/calibration'
import type { PackCalibration } from './hooks'
import { CalibrationBadge, Panel } from './ui'

/**
 * The standardisation ladder: what real examiners awarded on this paper and
 * why. This is the same data the marking prompt is calibrated on, so what a
 * teacher reads here is what the model was told, which is the transparency
 * position the product takes everywhere else.
 */
function StandardisationLadder({
  calibration,
  question,
}: {
  calibration: PackCalibration
  question: ExaminerQuestionSpec
}) {
  const anchors: ExaminerAnchor[] = calibration.anchors[question.id] ?? []
  if (!anchors.length) return null
  const award = (a: ExaminerAnchor) => {
    if (a.award) {
      const total = Object.values(a.award).reduce((s, v) => s + v, 0)
      return `${Object.entries(a.award)
        .map(([k, v]) => `${k} ${v}`)
        .join(' · ')} = ${total}`
    }
    if (a.mark !== undefined) return `${a.mark} / ${question.max}`
    return a.level ? `Level ${a.level}` : 'not stated'
  }
  return (
    <Panel title="Standardisation: marks real examiners awarded on this paper">
      <p className="text-sm text-muted-foreground">
        Use this the way you would use standardisation scripts: to see where the boundaries actually
        fall. The candidate wrote to a different task, so never expect the same content. No
        candidate writing is reproduced; these are the examiners{"'"} own margin notes.
      </p>
      <div className="mt-3 space-y-2">
        {anchors.map((a, i) => (
          <div key={i} className="rounded-md border border-border p-3 text-sm">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-serif text-lg font-bold text-primary tabular-nums">
                {award(a)}
              </span>
              {a.level && <span className="text-xs text-muted-foreground">level {a.level}</span>}
              {a.sourceQuestion && a.sourceQuestion !== question.id && (
                <span className="text-xs text-muted-foreground">on {a.sourceQuestion}</span>
              )}
              {a.inferred && (
                <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[11px] text-amber-700 dark:text-amber-300">
                  mark derived from the note, not printed
                </span>
              )}
            </div>
            {a.decisive && <p className="mt-1 leading-relaxed">{a.decisive}</p>}
            {a.notes.length > 0 && (
              <ul className="mt-1 list-disc space-y-0.5 ps-4 text-xs italic text-muted-foreground">
                {a.notes.map((n, k) => (
                  <li key={k}>{n}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
        {calibration.sources.map((s, i) => (
          <p key={i}>
            <b>{s.series}</b>: {s.source}
          </p>
        ))}
      </div>
    </Panel>
  )
}

function Grid({ grid }: { grid: ExaminerGrid }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{grid.name}</p>
      {grid.levels.map((l) => (
        <div key={l.n} className="rounded-md border border-border p-3 text-sm">
          <p className="font-semibold">
            Level {l.n}{' '}
            <span className="font-normal text-muted-foreground">
              ({l.lo}-{l.hi})
            </span>{' '}
            - {l.head}
          </p>
          <p className="mt-1 leading-relaxed">{l.desc}</p>
          {grid.anchors && (
            <p className="mt-1 text-xs text-muted-foreground">
              {Object.entries(grid.anchors)
                .filter(([m]) => Number(m) >= l.lo && Number(m) <= l.hi)
                .map(([m, note]) => `${m}: ${note}`)
                .join(' · ')}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function Triggers({ triggers }: { triggers: readonly ExaminerTrigger[] }) {
  if (!triggers.length) return null
  const cls = {
    opener: 'border-l-emerald-500 bg-emerald-500/10',
    cap: 'border-l-amber-500 bg-amber-500/10',
    neutral: 'border-l-border bg-muted/40 text-muted-foreground',
  }
  return (
    <ul className="space-y-2">
      {triggers.map((t, i) => (
        <li key={i} className={`rounded-md border-s-4 p-2.5 text-sm ${cls[t.t]}`}>
          <b>{t.h}.</b> {t.d}
        </li>
      ))}
    </ul>
  )
}

function Question({ q }: { q: ExaminerQuestionSpec }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-serif text-lg font-medium">{q.title}</h3>
        <p className="text-sm text-muted-foreground">{q.meta}</p>
      </div>
      {q.kind === 'count' && (
        <div className="grid gap-3 md:grid-cols-3">
          <Panel title="What opens marks">
            <ul className="list-disc space-y-1 ps-4 text-sm">
              {q.openers.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Panel>
          <Panel title="What kills an item">
            <ul className="list-disc space-y-1 ps-4 text-sm">
              {q.caps.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Panel>
          <Panel title="Never penalise">
            <ul className="list-disc space-y-1 ps-4 text-sm">
              {q.neutrals.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Panel>
        </div>
      )}
      {q.kind === 'level' && (
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Panel title="Level grid with exemplar anchors">
            <Grid grid={q.grid} />
          </Panel>
          <Panel title="Boundary triggers and caps">
            <Triggers triggers={q.triggers} />
            {q.capNote && (
              <p className="mt-3 rounded-md border border-amber-500/40 bg-amber-500/10 p-2 text-sm">
                <b>{q.capNote.label}.</b> {q.capNote.effect}
              </p>
            )}
          </Panel>
        </div>
      )}
      {q.kind === 'writing' && (
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            {q.grids.map((g) => (
              <Panel key={g.id} title={g.id}>
                <Grid grid={g} />
              </Panel>
            ))}
          </div>
          <Panel title="Boundary triggers and caps">
            <Triggers triggers={q.triggers} />
            {q.totalAnchors && (
              <p className="mt-3 text-xs text-muted-foreground">{q.totalAnchors}</p>
            )}
          </Panel>
        </div>
      )}
      {q.phrases.length > 0 && (
        <details className="rounded-md border border-border bg-card p-3">
          <summary className="cursor-pointer text-sm font-medium">Examiner phrase bank</summary>
          <div className="mt-2 space-y-2 text-sm text-muted-foreground">
            {q.phrases.map((ph, i) => (
              <p key={i}>{ph}</p>
            ))}
          </div>
        </details>
      )}
    </div>
  )
}

export function ReferencePanel({
  pack,
  question,
  calibration,
}: {
  pack: ExaminerPack
  question: ExaminerQuestionSpec | null
  calibration?: PackCalibration | null
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-serif text-xl font-medium">
            {pack.board} · {pack.subject} · {pack.paper}
          </h2>
          <CalibrationBadge calibration={pack.calibration} />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {pack.title} · {pack.totalMarks} marks
          {pack.codes.length ? ` · ${pack.codes.join(', ')}` : ''}
        </p>
        <p className="mt-3 text-sm leading-relaxed">{pack.provenance}</p>
      </div>
      {question ? (
        <Question q={question} />
      ) : (
        <p className="text-sm text-muted-foreground">Choose a question above.</p>
      )}
      <details className="rounded-md border border-border bg-card p-3">
        <summary className="cursor-pointer text-sm font-medium">
          What the AI examiner is told (the briefing, verbatim)
        </summary>
        <pre className="mt-2 max-h-[480px] overflow-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-muted-foreground">
          {pack.systemPrompt}
        </pre>
      </details>
    </div>
  )
}
