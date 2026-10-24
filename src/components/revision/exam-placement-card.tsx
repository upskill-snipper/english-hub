import { ClipboardList, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getDisplayName } from '@/lib/board/board-config'
import { examPlacements, readerNotice, type ReaderNotice } from '@/lib/board/exam-placement'
import { getServerBoard } from '@/lib/board/get-server-board'
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
 * WHEN IT KNOWS NOTHING IT SAYS SO, AND SAYS WHICH NOTHING. "We have not
 * checked your board" and "your board does not set this" are different
 * statements and a student acting on the wrong one loses a paper. Until 24
 * October 2026 the card had only the first, and printed it for an AQA reader
 * of Hamlet beside a rail saying the second; and where other boards had cards
 * and the reader's had none it said nothing about the reader's exam at all.
 * It now reads the reader's board and prints the one that is true; see
 * readerNotice in exam-placement.ts.
 */
export async function ExamPlacementCard({ slug }: { slug: string }) {
  const placements = examPlacements(slug)
  const board = await getServerBoard()
  const notice = readerNotice(slug, board, placements)

  const [h2, intro, assessedIn, selection, source, examYear, readOn, noticeText] =
    await Promise.all([
      t('placement.h2'),
      t('placement.intro'),
      t('placement.assessed_in'),
      t('placement.selection'),
      t('placement.source'),
      t('placement.exam_year'),
      t('placement.read_on'),
      noticeSentence(notice),
    ])

  return (
    <section>
      {/* items-start, not centred: on a phone the heading wraps to two lines
          and a centred icon floated beside the second one. */}
      <div className="mb-5 flex items-start gap-3">
        <ClipboardList aria-hidden="true" className="mt-1.5 size-5 shrink-0 text-emerald-700" />
        <div>
          <h2 className="font-heading text-heading-lg text-foreground">{h2}</h2>
          <p className="text-body-sm text-muted-foreground">
            {placements.length > 0 ? intro : null}
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {noticeText ? (
          // The Card's own py-5 is the padding. CardContent added pt-6 on top
          // of it, which left about 50px above the sentence and 30px below.
          <Card>
            <CardContent>
              <p className="text-body-sm text-foreground">{noticeText}</p>
            </CardContent>
          </Card>
        ) : null}

        {placements.map((p, i) => (
          <Card key={`${p.board}-${i}`}>
            <CardHeader>
              <CardTitle className="font-heading text-heading-md">{p.boardName}</CardTitle>
              {/* Every held series that sets the text here, not one "current"
                  year: Cambridge rotates its lists annually. On its own line,
                  in the body face: as a span beside the board name it wrapped
                  mid-phrase on a phone, in small muted serif, and it is the
                  fact a Cambridge reader most needs. */}
              {p.examYears && p.examYears.length > 0 ? (
                <p className="text-body-sm font-medium text-foreground">
                  {examYear} {p.examYears.join(', ')}
                </p>
              ) : null}
              {p.notSet ? (
                <p className="text-body-sm font-medium text-foreground">{p.notSet}</p>
              ) : null}
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
    </section>
  )
}

/** The sentence for the reader's board, or null when their card says it all. */
async function noticeSentence(notice: ReaderNotice | null): Promise<string | null> {
  if (!notice) return null
  switch (notice.kind) {
    case 'not-checked':
      return t('placement.none')
    case 'not-checked-for-board':
      return (await t('placement.not_checked_board')).replace(
        '{board}',
        getDisplayName(notice.board),
      )
    case 'off-board':
      // The rail's own words, so the rail and the card cannot drift apart.
      return t('textnav.off_board_hint')
    case 'no-board':
      return t('placement.no_board')
  }
}
