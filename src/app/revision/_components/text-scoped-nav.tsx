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
import { getSetText } from '@/lib/board/set-texts'

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
  const nav = buildTextNav(slug)
  const text = getSetText(slug)

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
        <Link
          href="/revision/texts"
          onClick={onNavigate}
          className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-3" />
          {t('textnav.back_to_shelf')}
        </Link>
      </div>

      {nav.sectionCount === 0 ? (
        // Twenty of the fifty-three texts are placeholders. Saying so is better
        // than rendering an empty rail that looks broken, and better than
        // rendering links to pages that are not written.
        <p className="px-2.5 text-xs text-muted-foreground">{t('textnav.no_sections')}</p>
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
