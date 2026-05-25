// ─── IELTS Mock Test - objective marking (delegates to the shared module) ───
// Marking now lives in @/lib/ielts/objective so the Mock and the standalone
// Reading page score identically - including multi-mark `matching` questions
// (one mark per item, exactly like the real exam). These thin re-exports keep
// the mock's existing call sites stable while making them matching-aware:
//   • countCorrect / countAnswered now count MARKS, not array length.
//   • totalMarks gives the real question total for objectiveToBand.
//   • questionStartNumbers gives 1-based start numbers (matching reserves a range).
// ────────────────────────────────────────────────────────────────────────────

export {
  totalCorrect as countCorrect,
  totalAnswered as countAnswered,
  totalMarks,
  questionStartNumbers,
  correctAnswerLabel,
} from '@/lib/ielts/objective'
