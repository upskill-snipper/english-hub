import { CheckCircle, X } from "lucide-react"

interface ComparisonRow {
  feature: string
  individual: string | false
  school: string | true
}

const rows: ComparisonRow[] = [
  {
    feature: "Price",
    individual: "PS9.99/student/month",
    school: "PS1,500/year total",
  },
  {
    feature: "Students covered",
    individual: "1 student",
    school: "Unlimited students",
  },
  {
    feature: "Teachers covered",
    individual: false,
    school: "All teachers included",
  },
  {
    feature: "Admin dashboard",
    individual: false,
    school: "Full school analytics",
  },
  {
    feature: "Bulk user management",
    individual: false,
    school: "Yes - Excel import",
  },
  {
    feature: "Department analytics",
    individual: false,
    school: true,
  },
  {
    feature: "Progress reports",
    individual: false,
    school: "Automated",
  },
  {
    feature: "Dedicated support",
    individual: false,
    school: "Priority",
  },
  {
    feature: "Typical 200-student cost",
    individual: "~PS24,000/year",
    school: "PS1,500/year",
  },
]

function CellValue({ value }: { value: string | boolean }) {
  if (value === false) {
    return (
      <span className="flex items-center justify-center">
        <X className="h-5 w-5 text-red-400" aria-label="Not included" />
      </span>
    )
  }
  if (value === true) {
    return (
      <span className="flex items-center justify-center">
        <CheckCircle className="h-5 w-5 text-emerald-400" aria-label="Included" />
      </span>
    )
  }
  return <span>{value}</span>
}

export function SchoolComparison() {
  return (
    <section className="w-full py-12 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          School Site License vs Individual Plans
        </h2>
        <p className="text-slate-400 text-lg">
          One simple price for your entire school. No per-seat counting.
        </p>
      </div>

      {/* Savings callout */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 px-6 py-5">
          <div className="text-center sm:text-left">
            <p className="text-slate-300 text-sm font-medium uppercase tracking-widest mb-1">
              Based on 200 students
            </p>
            <p className="text-white text-2xl font-bold">
              Save <span className="text-emerald-400">PS22,476/year</span> with
              the school license
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-block rounded-full bg-emerald-500 px-5 py-2 text-white font-extrabold text-xl tracking-tight shadow-lg">
              Save 94%
            </span>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-slate-700 shadow-2xl">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="bg-slate-800">
              <th className="px-6 py-4 text-left text-slate-400 text-sm font-semibold uppercase tracking-wider w-1/3">
                Feature
              </th>
              <th className="px-6 py-4 text-center text-slate-300 text-sm font-semibold uppercase tracking-wider w-1/3">
                <div className="flex flex-col items-center gap-1">
                  <span>Individual</span>
                  <span className="text-slate-500 text-xs font-normal normal-case tracking-normal">
                    per student
                  </span>
                </div>
              </th>
              <th className="px-6 py-4 text-center w-1/3 relative">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      School Site License
                    </span>
                  </div>
                  <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold px-3 py-0.5">
                    Recommended
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={
                  i % 2 === 0
                    ? "bg-slate-900 hover:bg-slate-800/60 transition-colors"
                    : "bg-slate-800/50 hover:bg-slate-800/80 transition-colors"
                }
              >
                <td className="px-6 py-4 text-slate-300 text-sm font-medium border-t border-slate-700/50">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-center text-slate-400 text-sm border-t border-slate-700/50">
                  <CellValue value={row.individual} />
                </td>
                <td className="px-6 py-4 text-center text-emerald-300 text-sm font-medium border-t border-slate-700/50 bg-emerald-500/5">
                  <CellValue value={row.school} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-800 border-t-2 border-slate-600">
              <td className="px-6 py-5 text-slate-300 font-semibold text-sm">
                Annual cost (200 students)
              </td>
              <td className="px-6 py-5 text-center">
                <span className="text-red-400 font-bold text-lg line-through decoration-2">
                  PS23,976
                </span>
                <p className="text-slate-500 text-xs mt-0.5">
                  PS9.99 x 200 x 12
                </p>
              </td>
              <td className="px-6 py-5 text-center bg-emerald-500/5">
                <span className="text-emerald-400 font-extrabold text-2xl">
                  PS1,500
                </span>
                <p className="text-slate-400 text-xs mt-0.5">flat annual fee</p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Sub-note */}
      <p className="max-w-5xl mx-auto mt-4 text-center text-slate-500 text-sm">
        School site license covers all students and all teachers. No per-seat
        fees. Prices shown in GBP. VAT may apply.
      </p>
    </section>
  )
}
