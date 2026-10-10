import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Gamepad2, Lock, Palette } from 'lucide-react'

import { TextGameProgressNote } from '@/components/games/text/TextGameProgressNote'
import { TextGamesCrumbs } from '@/components/games/text/TextGamesCrumbs'
import { EnglishText } from '@/components/i18n/EnglishText'
import { Badge } from '@/components/ui/badge'
import { COMIC_LOADERS } from '@/data/comics'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getSetText, type SetText } from '@/lib/board/set-texts'
import { textGameSlugs } from '@/lib/games/text-games/slugs'
import { t } from '@/lib/i18n/t'
import { CATEGORY_ORDER, categoryLabelKey } from '@/lib/revision/shelf'

/**
 * The index of guided text games: /games/texts. One card per text that has a
 * path (src/lib/games/text-games/slugs.ts), grouped the way the board shelves
 * group set texts, with the student's own course first in each group when a
 * board is chosen. The list is read from the register, never written out here.
 *
 * What a student has done is read from their browser by a small client note on
 * each card; the page itself knows nothing about them.
 */

export const metadata: Metadata = {
  title: 'Set text games for GCSE and IGCSE English - The English Hub',
  description:
    'Guided revision games on GCSE and IGCSE set texts, from Shakespeare to modern plays, novels and poems: who’s who, story order, quotations, methods and themes.',
  alternates: { canonical: 'https://theenglishhub.app/games/texts' },
  openGraph: {
    title: 'Set text games - The English Hub',
    description:
      'Guided revision games on GCSE and IGCSE set texts, from Shakespeare to modern plays, novels and poems: who’s who, story order, quotations, methods and themes.',
    url: 'https://theenglishhub.app/games/texts',
    images: [
      {
        url: '/api/og?title=Set+text+games+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Set text games - The English Hub',
      },
    ],
  },
}

export default async function TextGamesIndexPage() {
  const board = await getServerBoard()
  const texts = textGameSlugs()
    .map((slug) => getSetText(slug))
    .filter((x): x is SetText => Boolean(x))
  const onCourse = (text: SetText) => Boolean(board && text.boards.includes(board))

  const [crumbs, home, games, crumb, eyebrow, title, lead, yourCourse, comics, play, privacy] =
    await Promise.all([
      t('a11y.breadcrumb'),
      t('breadcrumb.home'),
      t('games_page.breadcrumb'),
      t('text_games.index.crumb'),
      t('text_games.index.eyebrow'),
      t('text_games.index.title'),
      t('text_games.index.lead'),
      t('text_games.index.your_course'),
      t('text_games.index.comics'),
      t('text_games.index.play'),
      t('text_games.privacy'),
    ])

  const groups = await Promise.all(
    CATEGORY_ORDER.map(async (category) => ({
      category,
      label: await t(categoryLabelKey(category)),
      texts: texts
        .filter((x) => x.category === category)
        .sort(
          (a, b) =>
            Number(onCourse(b)) - Number(onCourse(a)) || a.title.localeCompare(b.title, 'en'),
        ),
    })),
  )

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-8">
      <TextGamesCrumbs
        label={crumbs}
        items={[{ label: home, href: '/' }, { label: games, href: '/games' }, { label: crumb }]}
      />

      <section className="mb-10 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.05] p-6 sm:p-8">
        <Badge variant="secondary" className="mb-3">
          <Gamepad2 className="size-3.5" aria-hidden="true" />
          {eyebrow}
        </Badge>
        <h1 className="font-heading text-display-sm text-foreground sm:text-display">{title}</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{lead}</p>
        <p className="mt-4 flex max-w-2xl items-start gap-2 text-sm text-muted-foreground">
          <Lock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {privacy}
        </p>
      </section>

      <div className="space-y-10">
        {groups
          .filter((g) => g.texts.length > 0)
          .map((group) => (
            <section key={group.category} aria-labelledby={`text-games-${group.category}`}>
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="size-4 text-primary" aria-hidden="true" />
                <h2
                  id={`text-games-${group.category}`}
                  className="font-heading text-heading-md text-foreground"
                >
                  {group.label}
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.texts.map((text) => (
                  <li key={text.slug}>
                    <Link
                      href={`/games/texts/${text.slug}`}
                      className="group flex h-full min-h-11 flex-col justify-between gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all duration-150 hover:border-primary/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 motion-reduce:transition-none"
                    >
                      <div>
                        <EnglishText
                          as="h3"
                          className="font-heading text-base leading-snug text-foreground group-hover:text-primary"
                        >
                          {text.title}
                        </EnglishText>
                        <EnglishText
                          as="p"
                          className="mt-1 text-body-sm text-muted-foreground-subtle"
                        >
                          {text.author}
                        </EnglishText>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {onCourse(text) && <Badge variant="secondary">{yourCourse}</Badge>}
                        {Object.prototype.hasOwnProperty.call(COMIC_LOADERS, text.slug) && (
                          <Badge variant="outline">
                            <Palette className="size-3.5" aria-hidden="true" />
                            {comics}
                          </Badge>
                        )}
                        <TextGameProgressNote slug={text.slug} />
                        <span className="ms-auto inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-foreground">
                          {play}
                          <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </div>
  )
}
