import { aqaQuestions } from "./aqa/questions";
import { edexcelQuestions } from "./edexcel/questions";
import { caieQuestions } from "./caie/questions";
import { ocrQuestions } from "./ocr/questions";
import { wjecQuestions } from "./wjec/questions";
import type { PracticeQuestion } from "./types";

export const allQuestions: PracticeQuestion[] = [
  ...aqaQuestions,
  ...edexcelQuestions,
  ...caieQuestions,
  ...ocrQuestions,
  ...wjecQuestions,
];

export function getQuestionById(id: string): PracticeQuestion | undefined {
  return allQuestions.find((q) => q.id === id);
}

export function getQuestionIndex(id: string): number {
  return allQuestions.findIndex((q) => q.id === id);
}

export function getAdjacentQuestions(
  id: string,
  board?: string | null
): { prev: PracticeQuestion | null; next: PracticeQuestion | null } {
  const pool = board
    ? allQuestions.filter((q) => q.examBoard === board)
    : allQuestions;
  const idx = pool.findIndex((q) => q.id === id);
  return {
    prev: idx > 0 ? pool[idx - 1] : null,
    next: idx < pool.length - 1 ? pool[idx + 1] : null,
  };
}

export function getUniqueTopics(questions: PracticeQuestion[]): string[] {
  return [...new Set(questions.map((q) => q.topic))].sort();
}
