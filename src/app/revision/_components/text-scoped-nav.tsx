'use client'

/**
 * The sidebar a student gets while they are standing inside a set text.
 *
 * THE DEFECT. On /revision/texts/macbeth the sidebar showed the site-wide
 * revision register: Poetry, Language skills, Mock exams, Reading assessment,
 * Games, Vocabulary, Toolkit, My papers. Twenty-eight entries, not one of them
 * about Macbeth. Everything genuinely about the text lived in an in-body tile
 * grid that vanished the moment you opened a sub-page, after which the only way
 * onward was two hand-wired buttons in the footer. A student who had chosen a
 * text could not move around inside it.
 *
 * WHAT THIS DOES. While the path is inside a text, that text's own sections come
 * first, grouped the way a student thinks about revision rather than the way our
 * routes are named: the text, its characters, its ideas, its quotations, the
 * exam. The site-wide register does not disappear - it collapses into one
 * closed group underneath, so the route back to marking, the dashboard and mock
 * exams is still one click away. Replacing it outright would have traded one
 * navigation problem for another.
 *
 * WHAT IT WILL NOT DO. Offer a link to a page that does not exist. Every entry
 * comes from `buildTextNav`, which reads the generated register of real routes.
 * The grid this replaces was fed hand-written arrays that declared 172 tiles
 * against 93 real pages. See src/lib/revision/text-nav.ts.
 */

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  PenLine,
  BookOpen,
  BookText,
  Users,
  Lightbulb,
  Landmark,
  Quote,
  ClipboardList,
  ScanText,
} from 'lucide-react'

import { useT } from '@/lib/i18n/use-t'
import { buildTextNav, type TextNavIcon } from '@/lib/revision/text-nav'
import { getSetText, textAvailableForBoard } from '@/lib/board/set-texts'
import { canonicalTextSlug, isKnownSetText } from '@/lib/revision/text-slug-aliases'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { guideElsewhere } from '@/lib/revision/guide-href'
import { markingLink } from '@/lib/marking/submit-prefill'
import { useBoard } from '@/hooks/useBoard'
import { textBackLink } from '@/lib/revision/text-back-href'

import { SidebarLink } from './sidebar-link'

/**
 * Icons live here rather than in the model so that `text-nav.ts` stays
 * data-only and a server component can import it without pulling in an icon
 * library.
 */
const ICONS: Record<TextNavIcon, { Icon: typeof BookOpen; colour: string }> = {
  read: { Icon: BookOpen, colour: 'text-blue-400' },
  structure: { Icon: BookText, colour: 'text-blue-400' },
  characters: { Icon: Users, colour: 'text-violet-400' },
  themes: { Icon: Lightbulb, colour: 'text-rose-400' },
  context: { Icon: Landmark, colour: 'text-amber-400' },
  quotes: { Icon: Quote, colour: 'text-clay-600' },
  essays: { Icon: ClipboardList, colour: 'text-emerald-400' },
  extract: { Icon: ScanText, colour: 'text-emerald-400' },
  mark: { Icon: ClipboardList, colour: 'text-emerald-400' },
}

export function TextScopedNav({ slug, onNavigate }: { slug: string; onNavigate?: () => void }) {
  const pathname = usePathname()
  const t = useT()

  // RESOLVED ONCE, AT THE TOP, AND THAT IS THE FIX (20 September 2026).
  //
  // The alias existed and was applied to exactly one of the five things in this
  // component that need it - the off-board notice, which is the bug its author
  // was chasing. Every other use still took the raw route segment, so on the six
  // revision-notes routes whose directory drops an article the rail was quietly
  // wrong in three ways at once:
  //
  //   `getSetText('christmas-carol')` found nothing, so `title` was null. That
  //   gates the text's name in the rail AND the "Mark my essay" link, so the
  //   AI marking call-to-action - put in the rail precisely so it would "reach
  //   every guide in all five trees at once" - was absent from the revision
  //   notes for A Christmas Carol, An Inspector Calls, The Merchant of Venice,
  //   The Sign of Four, A View from the Bridge and Much Ado About Nothing.
  //
  //   `buildTextNav('christmas-carol')` built /revision/texts/christmas-carol.
  //   Verified on production: that URL returns the "Set Text Not Found" page
  //   while the real guide sits at /revision/texts/a-christmas-carol.
  //
  //   `textBackLink` and the placeholder check took the raw segment too.
  //
  // Active state still compares the real `pathname`, which is untouched: these
  // pages live under /resources/revision-notes, so no nav item matches there
  // either way, and on /revision/texts the slug is already canonical.
  const canonical = canonicalTextSlug(slug)
  const nav = buildTextNav(canonical)
  const text = getSetText(canonical)

  // THE REGRESSION THIS FIXES, shipped by me this morning and live for hours.
  //
  // The rail printed "This guide is still being written" whenever a text had no
  // SUB-PAGES. Only 16 of 53 texts have any, so it said that on 37 hubs - and
  // seventeen of those are finished guides of 700 to 750 lines. Hamlet, King
  // Lear, The Great Gatsby, Othello, Twelfth Night, Julius Caesar, Henry V,
  // Much Ado, Silas Marner and more were each telling the student their
  // complete guide did not exist yet, while the site-wide register was folded
  // away, so the page offered almost no navigation either.
  //
  // Having no sub-pages is not the same as being unwritten. The generated
  // placeholder register is the only thing that actually knows, so it decides.
  const isPlaceholder = PLACEHOLDER_TEXT_SLUGS.has(canonical)
  const elsewhere = isPlaceholder ? guideElsewhere(canonical, text?.boards) : null
  const { board, isHydrated } = useBoard()
  const back = textBackLink(canonical, isHydrated ? board : null)

  // Is this text on the student's own course?
  //
  // UNTIL 19 September 2026 THE ANSWER WAS A REDIRECT. Eighty-two text pages
  // carried a hard-coded board allowlist and bounced anyone outside it to
  // /revision/texts. A KS3 student clicking Macbeth was thrown to an index
  // headed "Your KS3 Set Texts" - which is empty, because KS3 prescribes none -
  // so the answer to "show me this text" was a page about having no texts.
  // Several of those allowlists were wrong as well: the Great Expectations
  // pages allowed AQA alone, and five boards set it.
  //
  // A student who clicks a text should see the text. So they do, and this says
  // plainly that it is not on their course rather than silently moving them.
  //
  // TWO CONDITIONS, AND THE SECOND ONE MATTERS. The revision-notes library uses
  // shorter directory names than the set-text register - `christmas-carol`
  // against `a-christmas-carol` - so resolving the route segment straight
  // against SET_TEXTS finds nothing and `textAvailableForBoard` returns false.
  // Without the alias and the known-text check, this rail was about to tell an
  // AQA student that A Christmas Carol is not on their course. All four UK
  // boards set it.
  //
  // So the notice needs a text we actually recognise AND a board that does not
  // set it. "We have no record of this" and "your board does not set this" are
  // different statements, and only one of them is safe to print.
  const offBoard =
    Boolean(board) && isHydrated && isKnownSetText(slug) && !textAvailableForBoard(canonical, board)

  // The title comes from the set-text register, which is the same source the
  // page headings use. Falling back to the slug would print "a-christmas-carol"
  // in a sidebar, so we fall back to nothing and let the eyebrow carry it.
  const title = text?.title ?? null

  return (
    <div className="mb-4">
      {/* Which text you are in, and the way back out. The shelf link is the
          only upward route from a sub-page; without it a student three levels
          deep has the browser back button and nothing else. */}
      <div className="mb-3 rounded-2xl border border-border/60 bg-card/60 p-3.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {t('textnav.studying')}
        </span>
        {title && (
          <Link
            href={nav.hubHref}
            onClick={onNavigate}
            className="mt-1 block font-heading text-base leading-tight text-foreground hover:text-primary"
          >
            {title}
          </Link>
        )}
        {/* The way back out, to the student's OWN shelf.

            It went to /revision/texts - every set text on the site, all 108 of
            them across fifteen specifications. A student revising Edexcel IGCSE
            Literature clicked "all set texts" and got the other seventy-four as
            well, most of which their board does not examine. Once the board is
            known, the shelf that means something is /set-texts/<board>, which
            lists their thirty-four and nothing else.

            `isHydrated` matters: the board is read from a cookie on the client,
            so before hydration it is null and linking to the all-texts index is
            correct rather than a guess at the wrong board. */}
        <Link
          href={back.href}
          onClick={onNavigate}
          className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-3" />
          {back.isBoardShelf ? t('textnav.back_to_board_shelf') : t('textnav.back_to_shelf')}
        </Link>
      </div>

      {offBoard && (
        <p className="mb-3 rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-3 text-xs leading-relaxed">
          <span className="block font-medium text-foreground">{t('textnav.off_board')}</span>
          <span className="block text-muted-foreground">{t('textnav.off_board_hint')}</span>
        </p>
      )}

      {/* The AI marker, scoped to this text.

          WHY IT IS HERE AND NOT ON THE PAGES. Not one of the 54 pages under
          /revision/texts linked to the marker - Macbeth included - so from the
          place a student actually studies there was no way to tell the AI was
          connected to anything. Putting it in the rail reaches every guide in
          all five trees at once and cannot drift page by page.

          It carries the text, not a paper. Mapping a text to a mark scheme
          would mean inventing a board-to-paper table; the form already resolves
          the board from the stored cookie, so the honest link is the one that
          says which text the essay is about and lets the student confirm the
          rest. */}
      {title && (
        <Link
          href={markingLink({ text: title, title })}
          onClick={onNavigate}
          className="mb-3 flex items-center gap-2.5 rounded-2xl border border-primary/30 bg-primary/5 p-3 transition-colors hover:border-primary/60 hover:bg-primary/10"
        >
          <PenLine aria-hidden="true" className="size-4 shrink-0 text-primary" />
          <span className="min-w-0">
            <span className="block text-sm font-medium leading-tight text-foreground">
              {t('textnav.mark_essay')}
            </span>
            <span className="block text-[11px] leading-tight text-muted-foreground">
              {t('textnav.mark_essay_hint')}
            </span>
          </span>
        </Link>
      )}

      {nav.sectionCount === 0 ? (
        // Twenty of the fifty-three texts are placeholders. Saying so is better
        // than rendering an empty rail that looks broken, and better than
        // rendering links to pages that are not written.
        // A placeholder whose guide is written on another route says where,
        // not "still being written" (26 September 2026).
        isPlaceholder ? (
          elsewhere ? (
            <SidebarLink
              href={elsewhere.href}
              label={t('textnav.guide_elsewhere')}
              icon={<BookOpen className="size-3.5" aria-hidden="true" />}
              iconColour="text-primary"
              isActive={false}
              onNavigate={onNavigate}
            />
          ) : (
            <p className="px-2.5 text-xs text-muted-foreground">{t('textnav.no_sections')}</p>
          )
        ) : null
      ) : (
        <nav className="flex flex-col gap-1" aria-label={title ?? undefined}>
          <SidebarLink
            href={nav.hubHref}
            label={t('textnav.overview')}
            icon={<BookOpen className="size-3.5" aria-hidden="true" />}
            iconColour="text-primary"
            isActive={pathname === nav.hubHref}
            onNavigate={onNavigate}
          />
          {nav.groups.map((group) => (
            <div key={group.key} className="mt-2.5">
              <p className="px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {t(group.labelKey)}
              </p>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const { Icon, colour } = ICONS[item.icon]
                  return (
                    <SidebarLink
                      key={item.href}
                      href={item.href}
                      label={t(item.labelKey)}
                      icon={<Icon className="size-3.5" aria-hidden="true" />}
                      iconColour={colour}
                      isActive={pathname === item.href}
                      onNavigate={onNavigate}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      )}
    </div>
  )
}
