// ─── Analytics Engine ────────────────────────────────────────────────────────
// Re-exports for convenient imports

export {
  getStudentProgress,
  getClassStudentIds,
  getStudentDetailedAnalytics,
  aggregateClassData,
  aggregateSchoolData,
  getTrendData,
} from './aggregation'

export { calculateTrajectory, predictGrade } from './trajectory'

export { identifyWeakAreas, buildModuleScoreData } from './weak-areas'

export { generateRecommendations, generateStudentRecommendations } from './recommendations'

export { generateCSV } from './export'

export type {
  StudentAnalytics,
  ClassAnalytics,
  SchoolOverview,
  WeakArea,
  Recommendation,
  TrendDataPoint,
} from './types'
