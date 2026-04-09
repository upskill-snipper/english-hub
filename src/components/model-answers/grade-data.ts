/* ─── Types ─────────────────────────────────────────────────── */

export interface GradeLevel {
  grade: number;
  label: string;
  descriptor: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

/* ─── Data ──────────────────────────────────────────────────── */

export const GRADE_LEVELS: GradeLevel[] = [
  {
    grade: 9,
    label: "Grade 9",
    descriptor: "Exceptional",
    color: "text-white",
    bgColor: "bg-primary",
    borderColor: "border-primary",
  },
  {
    grade: 7,
    label: "Grade 7",
    descriptor: "Strong",
    color: "text-white",
    bgColor: "bg-green-600",
    borderColor: "border-green-600",
  },
  {
    grade: 5,
    label: "Grade 5",
    descriptor: "Solid",
    color: "text-white",
    bgColor: "bg-amber-500",
    borderColor: "border-amber-500",
  },
  {
    grade: 3,
    label: "Grade 3",
    descriptor: "Developing",
    color: "text-white",
    bgColor: "bg-red-500",
    borderColor: "border-red-500",
  },
];
