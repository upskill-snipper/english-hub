// ─── IELTS-11 Academic-transition modules - self-authored content ────────────
// Short, self-guided modules to prepare a Gulf applicant for life as a UK
// university student, directly addressing the UCAS finding that international
// students often arrive feeling underprepared. ALL content here is original /
// self-authored — no copyrighted material.
//
// Each module is a short read plus ONE self-rating. The four self-ratings map
// EXACTLY onto the AcademicTransitionReadinessInput shape the readiness engine
// consumes, so completing the modules upgrades the report's Academic-transition
// domain (weight 15) from self-report to module-driven. The mapping is declared
// per-module via `field` + `optionValue`, so the client can write the slice
// without any bespoke glue.
//
// i18n: every USER-FACING string below (title, summary, body[], keyPoints[],
// question, options[].label) is a DICTIONARY KEY, not literal copy. The English
// + Khaleeji translations live in src/lib/i18n/dictionary-ielts-transition.ts
// (IELTS_TRANSITION_DICTIONARY). UI consumers resolve these via t()/useT().
// NON-UI fields stay literal: id, icon, field, options[].value (the last two
// are consumed by the readiness engine).
// ────────────────────────────────────────────────────────────────────────────

import type { AcademicTransitionReadinessInput } from './readiness'

/** Which readiness field a module's self-rating feeds. */
export type TransitionField = keyof AcademicTransitionReadinessInput

export interface TransitionRatingOption {
  /** The literal value written into the readiness slice for this field. */
  value: string
  /** Learner-facing label — a dictionary KEY resolved via t()/useT(). */
  label: string
}

export interface TransitionModule {
  id: 'writing' | 'lectures' | 'budgeting' | 'accommodation'
  icon: 'PenLine' | 'NotebookPen' | 'Wallet' | 'Home'
  /** Dictionary KEY resolved via t()/useT(). */
  title: string
  /** One-line summary shown on the card before expanding — dictionary KEY. */
  summary: string
  /** Short self-authored read, as paragraphs — each a dictionary KEY. */
  body: string[]
  /** Quick "key points" chips — each a dictionary KEY. */
  keyPoints: string[]
  /** The single self-rating question for this module — dictionary KEY. */
  question: string
  /** Which readiness field this rating sets. */
  field: TransitionField
  /** Ordered best→worst; each maps to a literal field value. */
  options: TransitionRatingOption[]
}

export const TRANSITION_MODULES: TransitionModule[] = [
  {
    id: 'writing',
    icon: 'PenLine',
    title: 'ielts.transition.writing.title',
    summary: 'ielts.transition.writing.summary',
    body: [
      'ielts.transition.writing.body.0',
      'ielts.transition.writing.body.1',
      'ielts.transition.writing.body.2',
      'ielts.transition.writing.body.3',
    ],
    keyPoints: [
      'ielts.transition.writing.kp.0',
      'ielts.transition.writing.kp.1',
      'ielts.transition.writing.kp.2',
    ],
    question: 'ielts.transition.writing.question',
    field: 'academicWriting',
    options: [
      { value: 'confident', label: 'ielts.transition.writing.opt.confident' },
      { value: 'some', label: 'ielts.transition.writing.opt.some' },
      { value: 'low', label: 'ielts.transition.writing.opt.low' },
    ],
  },
  {
    id: 'lectures',
    icon: 'NotebookPen',
    title: 'ielts.transition.lectures.title',
    summary: 'ielts.transition.lectures.summary',
    body: [
      'ielts.transition.lectures.body.0',
      'ielts.transition.lectures.body.1',
      'ielts.transition.lectures.body.2',
      'ielts.transition.lectures.body.3',
    ],
    keyPoints: [
      'ielts.transition.lectures.kp.0',
      'ielts.transition.lectures.kp.1',
      'ielts.transition.lectures.kp.2',
    ],
    question: 'ielts.transition.lectures.question',
    field: 'contactHours',
    options: [
      { value: 'understand', label: 'ielts.transition.lectures.opt.understand' },
      { value: 'unsure', label: 'ielts.transition.lectures.opt.unsure' },
    ],
  },
  {
    id: 'budgeting',
    icon: 'Wallet',
    title: 'ielts.transition.budgeting.title',
    summary: 'ielts.transition.budgeting.summary',
    body: [
      'ielts.transition.budgeting.body.0',
      'ielts.transition.budgeting.body.1',
      'ielts.transition.budgeting.body.2',
      'ielts.transition.budgeting.body.3',
    ],
    keyPoints: [
      'ielts.transition.budgeting.kp.0',
      'ielts.transition.budgeting.kp.1',
      'ielts.transition.budgeting.kp.2',
    ],
    question: 'ielts.transition.budgeting.question',
    field: 'budgeting',
    options: [
      { value: 'confident', label: 'ielts.transition.budgeting.opt.confident' },
      { value: 'some', label: 'ielts.transition.budgeting.opt.some' },
      { value: 'low', label: 'ielts.transition.budgeting.opt.low' },
    ],
  },
  {
    id: 'accommodation',
    icon: 'Home',
    title: 'ielts.transition.accommodation.title',
    summary: 'ielts.transition.accommodation.summary',
    body: [
      'ielts.transition.accommodation.body.0',
      'ielts.transition.accommodation.body.1',
      'ielts.transition.accommodation.body.2',
      'ielts.transition.accommodation.body.3',
    ],
    keyPoints: [
      'ielts.transition.accommodation.kp.0',
      'ielts.transition.accommodation.kp.1',
      'ielts.transition.accommodation.kp.2',
    ],
    question: 'ielts.transition.accommodation.question',
    field: 'accommodation',
    options: [
      { value: 'sorted', label: 'ielts.transition.accommodation.opt.sorted' },
      { value: 'searching', label: 'ielts.transition.accommodation.opt.searching' },
      { value: 'not_started', label: 'ielts.transition.accommodation.opt.not_started' },
    ],
  },
]
