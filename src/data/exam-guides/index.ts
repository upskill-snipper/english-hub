// ─── Exam Guide Data Index ───────────────────────────────────────────────────

import type { BoardExamGuide } from './types';
import { aqaGuide } from './aqa-guide';
import { edexcelGuide } from './edexcel-guide';
import { ocrGuide } from './ocr-guide';
import { wjecGuide } from './wjec-guide';
import { igcseGuide } from './igcse-guide';

export { aqaGuide, edexcelGuide, ocrGuide, wjecGuide, igcseGuide };
export { ks3Guide } from './ks3-guide';
export type { KS3Guide } from './ks3-guide';
export { genericOverview } from './generic-overview';
export { terminologyList } from './terminology';
export { grade9Strategy } from './grade9-strategy';
export { contextPeriods } from './context-periods';
export type * from './types';

// ─── Guide lookup helpers ────────────────────────────────────────────────────

const guides: Record<string, BoardExamGuide> = {
  aqa: aqaGuide,
  edexcel: edexcelGuide,
  ocr: ocrGuide,
  wjec: wjecGuide,
  igcse: igcseGuide,
};

export function getGuideByBoard(boardId: string): BoardExamGuide | undefined {
  return guides[boardId.toLowerCase()];
}

export function getAllGuides(): BoardExamGuide[] {
  return Object.values(guides);
}

export function getGuideIds(): string[] {
  return Object.keys(guides);
}
