import { ClipboardList, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { examPlacements } from '@/lib/board/exam-placement'
import { t } from '@/lib/i18n/t'

/**
 * Where a set text sits on the student's paper.
 *
 * WHAT THIS REPLACED. Four paragraphs of study tips - "memorise short
 * quotations", "read the whole text" - byte-identical on all 108 set-text
 * pages. For the 75 texts with no guide written that boilerplate WAS the page,
 * and it told a student nothing they could not have guessed and nothing about
 * their own exam.
 *
 * This says the thing almost nobody publishes and every student needs before
 * they start: which paper, which section, what it is worth, and whether they
 * had a choice about studying it. All of it is printed in a specification, and
 * every line carries the document and its version so a teacher can check us.
 *
 * WHEN IT KNOWS NOTHING IT SAYS SO. A text with no verified placement renders
 * the honest sentence rather than a hedge or a guess, because "we have not
 * checked your board" and "your board does not set this" are different
 * statements and a student acting on the wrong one loses a paper.
 */
export async function ExamPlacementCard({ slug }: { slug: string }) {
  const placements = examPlacements(slug)

  const [h2, intro, assessedIn, selection, source, examYear, readOn, none] = await Promise.all([
    t('placement.h2'),
    t('placement.intro'),
    t('placement.assessed_in'),
    t('placement.selection'),
    t('placement.source'),
    t('placement.exam_year'),
    t('placement.read_on'),
    t('placement.none'),
  ])

  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <ClipboardList className="size-5 text-emerald-700" />
        <div>
          <h2 className="font-heading text-heading-lg text-foreground">{h2}</h2>
          <p className="text-body-sm text-muted-foreground">
            {placements.length > 0 ? intro : null}
          </p>
        </div>
      </div>

      {placements.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-body-sm text-muted-foreground">{none}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {placements.map((p, i) => (
            <Card key={`${p.board}-${i}`}>
              <CardHeader>
                <CardTitle className="font-heading text-heading-md">
                  {p.boardName}
                  {p.examYear ? (
                    <span className="ms-2 text-body-sm font-normal text-muted-foreground">
                      {examYear} {p.examYear}
                    </span>
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {assessedIn}
                  </p>
                  <p className="mt-1 text-body-sm text-foreground">{p.assessedIn}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {selection}
                  </p>
                  <p className="mt-1 text-body-sm text-foreground">{p.selection}</p>
                  {p.detail ? (
                    <p className="mt-1 text-body-sm text-muted-foreground">{p.detail}</p>
                  ) : null}
                </div>
                {/* The citation is part of the claim, not decoration. A teacher
                    who disagrees has to be able to check the same document. */}
                <p className="flex items-start gap-1.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  <FileText aria-hidden="true" className="mt-0.5 size-3 shrink-0" />
                  <span>
                    {source}: {p.source.title}, {p.source.version} ({readOn} {p.source.readOn}).
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
