import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { ArrowLeft, BookOpen, Gamepad2 } from 'lucide-react'

import { LinocutStyles } from '@/components/comics/linocut/styles'
import { QuestMap } from '@/components/games/quest/QuestMap'
import { TextGamesCrumbs } from '@/components/games/text/TextGamesCrumbs'
import { EnglishText } from '@/components/i18n/EnglishText'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { loadQuest } from '@/lib/games/quest/load'
import { loadTextGame, textGameSlugs } from '@/lib/games/text-games/load'
import {
  textGameDescription,
  textGameSocialTitle,
  textGameTitle,
} from '@/lib/games/text-games/meta'
import { t } from '@/lib/i18n/t'
import { textGuideHref } from '@/lib/revision/guide-href'

/**
 * One set text's quest: /games/texts/<slug>.
 *
 * The quest is built here, on the server, from the text's study guide, its
 * comic registry, its comic art and the site's held edition, where there are
 * any (src/lib/games/quest/load.ts), and handed to the client map as plain
 * data: this text's levels and challenges and the descriptors of the panels
 * and portraits they show, never another guide and never a drawing. The
 * browser fetches each drawing when it is about to be seen
 * (src/components/comics/linocut/lazy-plate.tsx).
 *
 * Until 12 October 2026 this page played the guided path of six rounds
 * (src/lib/games/text-games). A quest is built from that path's checked items
 * and more, so the search description still names what the path covers.
 *
 * Only the texts textGameSlugs() names have a page; any other slug is a 404.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return textGameSlugs().map((slug) => ({ slug }))
}

type Params = { slug: string }

/** Built once per request, for the metadata and the page alike. */
const getGame = cache(loadTextGame)
const getQuest = cache(loadQuest)

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const [game, quest] = await Promise.all([getGame(slug), getQuest(slug)])
  if (!game || !quest) return {}
  const title = textGameTitle(game.title)
  const description = textGameDescription(game, quest.levels.length)
  const url = `https://theenglishhub.app/games/texts/${slug}`
  // Share cards do not inherit a title template, and are not cut at 60
  // characters, so they carry the whole title and the brand.
  const socialTitle = textGameSocialTitle(game.title)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      type: 'website',
      url,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(socialTitle)}`,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: { card: 'summary_large_image', title: socialTitle, description },
  }
}

export default async function TextGamePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const quest = await getQuest(slug)
  if (!quest) notFound()

  const board = await getServerBoard()
  const [crumbs, home, games, textGames, eyebrow, by, guideLink, allGames] = await Promise.all([
    t('a11y.breadcrumb'),
    t('breadcrumb.home'),
    t('games_page.breadcrumb'),
    t('text_games.index.crumb'),
    t('text_games.page.eyebrow'),
    t('text_games.page.by'),
    t('text_games.page.guide_link'),
    t('text_games.page.all_games'),
  ])
  const [byBefore, byAfter = ''] = by.split('{author}')
  const hasArt =
    Object.keys(quest.art.panels).length > 0 || Object.keys(quest.art.portraits).length > 0

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-4 sm:px-6 sm:pt-6">
      {/* The comic frames' stylesheet, hoisted into <head> once. The frames
          are drawn by the client map and do not carry it (see
          src/components/comics/linocut/styles.tsx). */}
      {hasArt && <LinocutStyles />}

      <TextGamesCrumbs
        label={crumbs}
        items={[
          { label: home, href: '/' },
          { label: games, href: '/games' },
          { label: textGames, href: '/games/texts' },
          { label: quest.title, english: true },
        ]}
      />

      <header className="mb-8 space-y-4">
        <Badge variant="secondary">
          <Gamepad2 className="size-3.5" aria-hidden="true" />
          {eyebrow}
        </Badge>
        <EnglishText
          as="h1"
          className="font-heading text-display-sm text-foreground sm:text-display"
        >
          {quest.title}
        </EnglishText>
        <p className="text-body-lg text-muted-foreground">
          {byBefore}
          <EnglishText as="span">{quest.author}</EnglishText>
          {byAfter}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="lg"
            className="h-auto min-h-11 whitespace-normal py-2"
            render={<Link href={textGuideHref(slug, board)} />}
          >
            <BookOpen aria-hidden="true" />
            {guideLink}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="h-auto min-h-11 whitespace-normal py-2"
            render={<Link href="/games/texts" />}
          >
            <ArrowLeft className="rtl:rotate-180" aria-hidden="true" />
            {allGames}
          </Button>
        </div>
      </header>

      <QuestMap quest={quest} />

      {/* A text in copyright is quoted under fair dealing, which needs an
          acknowledgement on the page that quotes it: the guide's own. */}
      {quest.acknowledgement && (
        <EnglishText as="p" className="mt-10 text-body-sm text-muted-foreground">
          {quest.acknowledgement}
        </EnglishText>
      )}
    </div>
  )
}
