// ─── Demo School ──────────────────────────────────────────────────────────────
// The single fictional school every demo surface is framed around.
// ──────────────────────────────────────────────────────────────────────────────

export const DEMO_SCHOOL = {
  id: 'demo-school',
  name: 'Riverside Academy',
  type: 'secondary',
  studentCount: 342,
  teacherCount: 18,
  classCount: 24,
  yearGroups: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'],
  examBoard: 'AQA',
  curriculum: 'GCSE English Language & Literature',
  accessType: 'founder' as const,
  accessUntil: '2026-08-31',
}
