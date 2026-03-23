export interface PracticeQuestion {
  id: string;
  title: string;
  examBoard: "aqa" | "edexcel" | "caie" | "ocr" | "wjec";
  subject: "language" | "literature";
  topic: string;
  paper?: string;
  questionNumber?: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  marks: number;
  timeMinutes: number;
  question: string;
  sourceText?: string;
  modelAnswer: string;
  markScheme?: string;
  tips?: string[];
}

export const EXAM_BOARDS = [
  { slug: "aqa", label: "AQA" },
  { slug: "edexcel", label: "Edexcel" },
  { slug: "caie", label: "Cambridge (CAIE)" },
  { slug: "ocr", label: "OCR" },
  { slug: "wjec", label: "WJEC" },
] as const;

export const SUBJECTS = [
  { slug: "language", label: "English Language" },
  { slug: "literature", label: "English Literature" },
] as const;

export const DIFFICULTY_LABELS: Record<number, string> = {
  1: "Foundation",
  2: "Foundation+",
  3: "Intermediate",
  4: "Higher",
  5: "Higher+",
};

export const DIFFICULTY_COLORS: Record<number, string> = {
  1: "bg-emerald-100 text-emerald-700 border-emerald-200",
  2: "bg-teal-100 text-teal-700 border-teal-200",
  3: "bg-amber-100 text-amber-700 border-amber-200",
  4: "bg-orange-100 text-orange-700 border-orange-200",
  5: "bg-rose-100 text-rose-700 border-rose-200",
};
