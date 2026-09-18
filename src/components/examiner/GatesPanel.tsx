'use client'

// ─── Examiner tool - the manual best-fit engine ─────────────────────────────
//
// Works with no model at all. The examiner answers the pack's gates in order,
// picks the position within the level, names the lifting or capping feature,
// and the panel writes the commentary scaffold in the right register. This is
// the check on the AI mark, and it is also the tool a teacher uses to learn
// how the board actually awards marks.
// ────────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'
import { Copy, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  applyCap,
  levelFromGates,
  markForPlacement,
  renderCountCommentary,
  renderLevelCommentary,
  renderWritingCommentary,
} from '@/lib/marking/examiner/engine'
import type {
  ExaminerGrid,
  ExaminerLevelSpec,
  ExaminerQuestionSpec,
  ExaminerWritingSpec,
  GateAnswer,
  Placement,
} from '@/lib/marking/examiner/types'
import { Panel, MarkOut, copyText } from './ui'

type Answers = Record<number, GateAnswer | undefined>

interface GridState {
  answers: Answers
  place: Placement | null
}

function emptyGrid(): GridState {
  return { answers: {}, place: null }
}

function GateList({
  grid,
  state,
  prefix,
  onChange,
}: {
  grid: ExaminerGrid
  state: GridState
  prefix: string
  onChange: (next: GridState) => void
}) {
  const outcome = levelFromGates(grid, state.answers)
  const rows: React.ReactNode[] = []
  let locked = false
  for (let i = 0; i < grid.gates.length; i++) {
    const g = grid.gates[i]!
    const a = state.answers[i]
    rows.push(
      <div
        key={i}
        className={`rounded-lg border border-border bg-card p-3 text-sm ${locked ? 'pointer-events-none opacity-40' : ''}`}
      >
        <p className="font-medium">
          {prefix}
          {i + 1} · {g.q}
        </p>
        <div className="mt-2 flex gap-2">
          <Button
            size="sm"
            variant={a === 'yes' ? 'default' : 'outline'}
            onClick={() => {
              const answers: Answers = {}
              for (let j = 0; j < i; j++) answers[j] = state.answers[j]
              answers[i] = 'yes'
              onChange({ answers, place: null })
            }}
          >
            Yes
          </Button>
          <Button
            size="sm"
            variant={a === 'no' ? 'destructive' : 'outline'}
            onClick={() => {
              const answers: Answers = {}
              for (let j = 0; j < i; j++) answers[j] = state.answers[j]
              answers[i] = 'no'
              onChange({ answers, place: null })
            }}
          >
            No
          </Button>
        </div>
        <p className="mt-2 text-xs italic text-muted-foreground">{g.ev}</p>
      </div>,
    )
    if (a === 'no') break
    if (a !== 'yes') locked = true
  }
  return (
    <div className="space-y-2">
      {rows}
      {outcome.complete && (
        <PlacementPicker
          grid={grid}
          lvl={outcome.lvl}
          place={state.place}
          onPick={(p) => onChange({ ...state, place: p })}
        />
      )}
    </div>
  )
}

function PlacementPicker({
  grid,
  lvl,
  place,
  onPick,
}: {
  grid: ExaminerGrid
  lvl: number
  place: Placement | null
  onPick: (p: Placement) => void
}) {
  const level = grid.levels[lvl - 1]!
  const mid = Math.round((level.lo + level.hi) / 2)
  const opts: [Placement, string][] = [
    ['bottom', `${level.lo} - criteria just met, or one named flaw`],
    ['mid', `${mid} - "comfortably within"`],
    ['top', `${level.hi} - all criteria met, nothing caps it`],
  ]
  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-sm">
      <p className="font-medium">
        Position within Level {lvl}. Printed rule: "the top mark in the level is used for work that
        is as good as can realistically be expected within that level."
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {opts.map(([k, label]) => (
          <Button
            key={k}
            size="sm"
            variant={place === k ? 'default' : 'outline'}
            onClick={() => onPick(k)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}

function CountEngine({ spec }: { spec: Extract<ExaminerQuestionSpec, { kind: 'count' }> }) {
  const [count, setCount] = useState(0)
  const mark = Math.min(count, spec.max)
  const commentary = renderCountCommentary(spec, mark)
  return (
    <>
      <Panel title="Count the surviving points against the pasted scheme">
        <p className="text-sm">
          Kill-tests per item: {spec.killTests.join(' · ')}. Map survivors generously - the printed
          lists are non-exhaustive ("Reward all valid points").
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Remove a credited point"
            onClick={() => setCount((c) => Math.max(0, c - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="min-w-[3ch] text-center font-serif text-3xl font-bold tabular-nums">
            {count}
          </span>
          <Button
            variant="outline"
            size="icon"
            aria-label="Add a credited point"
            onClick={() => setCount((c) => Math.min(spec.max + 3, c + 1))}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">distinct creditable points</span>
        </div>
        <MarkOut
          mark={mark}
          max={spec.max}
          note={`mark = min(count, ${spec.max}) - no deductions`}
        />
      </Panel>
      <CommentaryDraft
        title="Commentary scaffold - Register A (1-3 sentences, no level language)"
        text={commentary}
      />
    </>
  )
}

function LevelEngine({ spec }: { spec: ExaminerLevelSpec }) {
  const [state, setState] = useState<GridState>(emptyGrid)
  const [capped, setCapped] = useState(false)
  const [feature, setFeature] = useState('')
  const outcome = levelFromGates(spec.grid, state.answers)
  const ready = outcome.complete || (capped && spec.capNote)
  const { lvl } = applyCap(spec, capped, outcome.lvl, null)
  const rawMark = state.place ? markForPlacement(spec.grid, lvl, state.place) : null
  const mark = applyCap(spec, capped, lvl, rawMark).mark
  const commentary =
    ready && mark !== null && state.place
      ? renderLevelCommentary(spec, lvl, mark, state.place, feature)
      : ''

  return (
    <>
      {spec.capNote && (
        <label className="flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={capped}
            onChange={(e) => setCapped(e.target.checked)}
          />
          <span>
            <b>{spec.capNote.label}.</b> {spec.capNote.effect}
          </span>
        </label>
      )}
      <Panel title="Best-fit gates - answer in order, stop at the first No">
        <GateList grid={spec.grid} state={state} prefix="G" onChange={setState} />
      </Panel>
      {ready && mark !== null && state.place && (
        <Panel title="Mark">
          <MarkOut
            mark={mark}
            max={spec.max}
            note={`Level ${lvl}${capped ? ' - capped' : ''} · ${state.place} of level`}
          />
          <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Name the lifting or capping feature (goes into the commentary)
          </label>
          <input
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            placeholder="e.g. the overall balance of references lifts this just into Level 4"
          />
          <CommentaryDraft
            title="Commentary draft - Register B (40-110 words, end on the terminal formula)"
            text={commentary}
          />
        </Panel>
      )}
    </>
  )
}

function WritingEngine({ spec }: { spec: ExaminerWritingSpec }) {
  const [states, setStates] = useState<GridState[]>(() => spec.grids.map(() => emptyGrid()))
  const [feature, setFeature] = useState('')
  const parts = useMemo(() => {
    return spec.grids.map((g, i) => {
      const st = states[i] ?? emptyGrid()
      const o = levelFromGates(g, st.answers)
      const mark = o.complete && st.place ? markForPlacement(g, o.lvl, st.place) : null
      return { gridId: g.id, lvl: o.lvl, mark, complete: o.complete && st.place !== null }
    })
  }, [spec.grids, states])
  const allDone = parts.every((p) => p.complete && p.mark !== null)
  const total = parts.reduce((s, p) => s + (p.mark ?? 0), 0)
  const commentary = allDone
    ? renderWritingCommentary(
        spec,
        parts.map((p) => ({ gridId: p.gridId, lvl: p.lvl, mark: p.mark ?? 0 })),
        feature,
      )
    : ''
  return (
    <>
      {spec.grids.map((g, i) => (
        <Panel key={g.id} title={g.name}>
          <GateList
            grid={g}
            state={states[i] ?? emptyGrid()}
            prefix={String.fromCharCode(65 + i)}
            onChange={(next) => setStates((prev) => prev.map((s, j) => (j === i ? next : s)))}
          />
        </Panel>
      ))}
      {allDone && (
        <Panel title="Mark">
          <MarkOut
            mark={total}
            max={spec.max}
            note={parts.map((p) => `${p.gridId} Level ${p.lvl} - ${p.mark}`).join(' · ')}
          />
          {spec.totalAnchors && (
            <p className="mt-2 text-xs text-muted-foreground">{spec.totalAnchors}</p>
          )}
          <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Name the lifting or capping feature (goes into the commentary)
          </label>
          <input
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            placeholder="e.g. ideas are developed and convincingly supported from the opening"
          />
          <CommentaryDraft
            title="Commentary scaffold - Register C (walkthrough, one paragraph per AO, tally)"
            text={commentary}
          />
        </Panel>
      )}
    </>
  )
}

function CommentaryDraft({ title, text }: { title: string; text: string }) {
  const [value, setValue] = useState(text)
  const [seed, setSeed] = useState(text)
  if (seed !== text) {
    setSeed(text)
    setValue(text)
  }
  return (
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      <Textarea
        className="mt-2 min-h-[160px] font-serif"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-2">
        <Button size="sm" variant="outline" onClick={() => copyText(value)}>
          <Copy className="h-3.5 w-3.5" /> Copy commentary
        </Button>
      </div>
    </div>
  )
}

export function GatesPanel({ spec }: { spec: ExaminerQuestionSpec }) {
  // Remount per question so answers never leak from Q4 into Q5.
  if (spec.kind === 'count') return <CountEngine key={spec.id} spec={spec} />
  if (spec.kind === 'level') return <LevelEngine key={spec.id} spec={spec} />
  return <WritingEngine key={spec.id} spec={spec} />
}
