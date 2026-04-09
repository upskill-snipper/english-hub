import type { GradeLevel } from "./grade-data";

/* ─── Grade badge ───────────────────────────────────────────── */

export function GradeBadge({
  grade,
  color,
}: {
  grade: string;
  color: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white ${color}`}
    >
      {grade}
    </span>
  );
}

/* ─── "What makes this a Grade X?" summary box ──────────────── */

export function GradeSummary({
  level,
  points,
}: {
  level: GradeLevel;
  points: string[];
}) {
  return (
    <div
      className={`mt-4 rounded-xl border-2 ${level.borderColor} bg-card p-5`}
    >
      <h4 className="font-bold text-foreground">
        What makes this a {level.label} ({level.descriptor})?
      </h4>
      <ul className="mt-2 space-y-1.5">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span
              className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${level.bgColor}`}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
