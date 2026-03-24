import { allCourses } from '@/data/courses';

export function validateAllQuizzes(): { errors: string[], total: number, valid: number } {
  const errors: string[] = [];
  let total = 0;
  let valid = 0;

  for (const course of allCourses) {
    for (const mod of course.moduleList) {
      for (const q of mod.quiz) {
        total++;
        if (q.correct < 0 || q.correct >= q.options.length) {
          errors.push(`${course.id} > ${mod.id} > ${q.id}: correct index ${q.correct} out of bounds (${q.options.length} options)`);
        } else {
          valid++;
        }
        if (!q.question.trim()) errors.push(`${q.id}: empty question`);
        if (q.options.length < 2) errors.push(`${q.id}: fewer than 2 options`);
        if (!q.explanation.trim()) errors.push(`${q.id}: empty explanation`);
      }
    }
  }
  return { errors, total, valid };
}
