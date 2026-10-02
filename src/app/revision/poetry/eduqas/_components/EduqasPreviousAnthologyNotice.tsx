import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * The notice at the top of a page written for the Eduqas anthology that
 * Eduqas examined for the last time in summer 2026.
 *
 * THE DEFECT, found 2 October 2026. Eight such pages carried a notice calling
 * the old anthology "pre-2025" and the new one "the current Eduqas 2025
 * cluster". The old anthology was examined until summer 2026; the new one is
 * not a cluster and is examined from summer 2027 (see
 * src/lib/board/eduqas-anthology.ts). The notice was also set in amber-100
 * text on a pale amber ground, which in the light theme can barely be read. A
 * student landing here from a search needs to know first whether the poem is
 * on their paper, so this says that, and where another board sets the poem.
 */
export default function EduqasPreviousAnthologyNotice({
  title,
  children,
}: {
  title: string
  /** Where the poem is set now, if anywhere. */
  children?: ReactNode
}) {
  return (
    <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm">
      <p className="mb-1 font-semibold text-foreground">From the previous Eduqas anthology</p>
      <p className="leading-relaxed text-muted-foreground">
        This page was written for the Eduqas anthology that was examined for the last time in summer
        2026. The anthology Eduqas examines from summer 2027 does not include {title}.
        {children ? <> {children}</> : null}
      </p>
      <p className="mt-2">
        <Link
          href="/revision/poetry/eduqas"
          className="font-medium text-foreground underline underline-offset-2"
        >
          The fifteen poems Eduqas sets from 2027
        </Link>
      </p>
    </div>
  )
}
