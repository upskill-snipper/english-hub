"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TrendPoint {
  /** ISO date */
  date: string;
  /** GCSE grade 1-9 */
  grade: number;
  /** Optional short label e.g. "Macbeth Q" */
  label?: string;
}

export interface ImprovementTrendProps {
  points: TrendPoint[];
  className?: string;
}

/**
 * Inline SVG line chart showing grade over time.
 * Pure theme tokens — uses currentColor with text-primary, etc.
 */
export function ImprovementTrend({ points, className }: ImprovementTrendProps) {
  if (points.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Improvement Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Submit a few essays to start seeing your trend.
          </p>
        </CardContent>
      </Card>
    );
  }

  const width = 600;
  const height = 220;
  const padX = 36;
  const padY = 24;
  const minGrade = 1;
  const maxGrade = 9;

  const stepX =
    points.length > 1 ? (width - padX * 2) / (points.length - 1) : 0;

  const toXY = (p: TrendPoint, i: number) => {
    const x = padX + i * stepX;
    const y =
      height -
      padY -
      ((p.grade - minGrade) / (maxGrade - minGrade)) * (height - padY * 2);
    return { x, y };
  };

  const coords = points.map(toXY);
  const path = coords
    .map((c, i) => (i === 0 ? `M ${c.x} ${c.y}` : `L ${c.x} ${c.y}`))
    .join(" ");

  const areaPath =
    path +
    ` L ${coords[coords.length - 1].x} ${height - padY} L ${coords[0].x} ${
      height - padY
    } Z`;

  const firstGrade = points[0].grade;
  const lastGrade = points[points.length - 1].grade;
  const delta = lastGrade - firstGrade;

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Improvement Trend</CardTitle>
        <p className="text-xs text-muted-foreground">
          {points.length} essay{points.length === 1 ? "" : "s"} marked
          {delta !== 0 && (
            <>
              {" · "}
              <span
                className={cn(
                  "font-semibold",
                  delta > 0 ? "text-primary" : "text-destructive"
                )}
              >
                {delta > 0 ? "+" : ""}
                {delta} grade{Math.abs(delta) === 1 ? "" : "s"}
              </span>
            </>
          )}
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-56 w-full min-w-[360px] text-primary"
            role="img"
            aria-label="Line chart of grades over time"
          >
            {/* ── Grid lines ─────────────────────────────────── */}
            {[1, 3, 5, 7, 9].map((g) => {
              const y =
                height -
                padY -
                ((g - minGrade) / (maxGrade - minGrade)) *
                  (height - padY * 2);
              return (
                <g key={g}>
                  <line
                    x1={padX}
                    x2={width - padX}
                    y1={y}
                    y2={y}
                    className="stroke-border"
                    strokeWidth={1}
                    strokeDasharray="3 3"
                  />
                  <text
                    x={padX - 8}
                    y={y + 4}
                    textAnchor="end"
                    className="fill-muted-foreground text-[10px]"
                  >
                    {g}
                  </text>
                </g>
              );
            })}

            {/* ── Area fill ──────────────────────────────────── */}
            <path d={areaPath} fill="currentColor" fillOpacity={0.12} />

            {/* ── Trend line ─────────────────────────────────── */}
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* ── Data points ────────────────────────────────── */}
            {coords.map((c, i) => (
              <g key={i}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={5}
                  className="fill-card"
                  stroke="currentColor"
                  strokeWidth={2.5}
                />
                <text
                  x={c.x}
                  y={height - 6}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[10px]"
                >
                  {formatDate(points[i].date)}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default ImprovementTrend;
