// ---------------------------------------------------------------------------
// 2026 exam dates -- bundled for offline countdown display
// ---------------------------------------------------------------------------

export type ExamBoard = 'aqa' | 'igcse';

export interface ExamDate {
  board: ExamBoard;
  paper: string;
  date: string; // ISO date string (YYYY-MM-DD)
  label: string;
}

// ── AQA GCSE English 2026 ──────────────────────────────────────────────────

export const AQA_GCSE_DATES: ExamDate[] = [
  {
    board: 'aqa',
    paper: 'lang-p1',
    date: '2026-05-19',
    label: 'Language Paper 1',
  },
  {
    board: 'aqa',
    paper: 'lang-p2',
    date: '2026-06-05',
    label: 'Language Paper 2',
  },
  {
    board: 'aqa',
    paper: 'lit-p1',
    date: '2026-05-20',
    label: 'Literature Paper 1',
  },
  {
    board: 'aqa',
    paper: 'lit-p2',
    date: '2026-05-26',
    label: 'Literature Paper 2',
  },
];

// ── Cambridge IGCSE May/June 2026 ─────────────────────────────────────────

export const IGCSE_DATES: ExamDate[] = [
  {
    board: 'igcse',
    paper: 'igcse-p1',
    date: '2026-05-01',
    label: 'IGCSE English Paper 1 (May/June)',
  },
  {
    board: 'igcse',
    paper: 'igcse-p2',
    date: '2026-06-01',
    label: 'IGCSE English Paper 2 (May/June)',
  },
];

// ── All dates combined ─────────────────────────────────────────────────────

export const ALL_EXAM_DATES: ExamDate[] = [
  ...AQA_GCSE_DATES,
  ...IGCSE_DATES,
];
