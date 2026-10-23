import type { Metadata } from 'next'
import { TrackEvent } from '@/components/analytics/TrackEvent'
import { Epilogue } from '@/components/home/story/Epilogue'
import { GamesBand, type GameLink } from '@/components/home/story/GamesBand'
import { HomeHero } from '@/components/home/story/HomeHero'
import { StoryChapters } from '@/components/home/story/StoryChapters'
import type { Board } from '@/components/home/story/boards'
import { boardLandingHref } from '@/lib/board/board-landing'
import { TEXT_GAMES_INDEX, textGamesHref } from '@/lib/revision/text-games-href'

/**
 * The homepage: one scroll story.
 *
 * REBUILT 20 OCTOBER 2026 from the winning entry of the landing-page
 * competition. The page it replaces had 87 links, nine of them to school
 * sales and one to sign-up, and showed no product: a seven-card track grid
 * whose Teachers and Schools cards opened synthetic demos, six institutional
 * sections of benefit lists and capabilities for school leaders, a pilot
 * banner, a pricing preview with a school tier, and a closing call to book a
 * school pilot. Its visitors are students and parents; 400 or so had signed up
 * and three had paid.
 *
 * What is here now, in order: the hero (search, one call to action, the board
 * picker strip), the games band, five chapters that take Macbeth from the
 * first page to the exam room with the live product in frame, and an epilogue
 * with the same call to action, what the trial covers, the free list and the
 * Student plan price. The sections live in src/components/home/story/; this
 * file is the composition and holds the three lists the tests read.
 *
 * Every fact on the page is from section 3 of the design brief of 18 October
 * 2026 (TEHC-079). Facts a page cannot verify are not here: no counts of
 * people, no testimonials, no grade, no speed for AI marking.
 */

const TITLE = 'Set-text revision for GCSE and IGCSE'
const DESCRIPTION =
  'English revision for GCSE and IGCSE, built around the set texts: study guides, quests and comics free with no account, and AI marking on a 7-day free trial.'
const OG = `/api/og?title=${encodeURIComponent(TITLE)}&subtitle=${encodeURIComponent(
  'Study guides, quests and comics, free with no account',
)}`

export const metadata: Metadata = {
  // The suffix is written here, not left to the layout's title.template: Next
  // applies a layout's template to child segments and not to the page in the
  // layout's own segment, so the root page would otherwise ship without it.
  // 54 characters in all.
  title: `${TITLE} - The English Hub`,
  description: DESCRIPTION,
  alternates: { canonical: 'https://theenglishhub.app' },
  keywords: [
    'GCSE English revision',
    'IGCSE English revision',
    'GCSE English Literature set texts',
    'Macbeth revision',
    'AQA English revision',
    'Edexcel English revision',
    'OCR English revision',
    'Eduqas English revision',
    'EAL English support',
  ],
  openGraph: {
    title: `${TITLE} - The English Hub`,
    description: DESCRIPTION,
    url: 'https://theenglishhub.app',
    images: [
      {
        url: OG,
        width: 1200,
        height: 630,
        alt: 'The English Hub: set-text revision for GCSE and IGCSE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG],
  },
}

/*
 * The board picker's seven cards. Each href is boardLandingHref(<id>) and
 * nothing else: the path and the ?setBoard= parameter must name the same
 * board, or a card would set one board and show another, which is the 2026
 * "GCSE card to IGCSE shelf" defect homepage-board-cards.test.ts was written
 * for. The names are the brief's. KS3 is not a card: it sets no texts, so it
 * has no shelf to send a student to, and the epilogue names it in plain text.
 */
const GCSE_BOARDS: Board[] = [
  { name: 'AQA', id: 'aqa', href: boardLandingHref('aqa') },
  { name: 'Pearson Edexcel', id: 'edexcel', href: boardLandingHref('edexcel') },
  { name: 'OCR', id: 'ocr', href: boardLandingHref('ocr') },
  { name: 'WJEC Eduqas', id: 'eduqas', href: boardLandingHref('eduqas') },
]

const IGCSE_BOARDS: Board[] = [
  { name: 'Cambridge IGCSE', id: 'cambridge-0500', href: boardLandingHref('cambridge-0500') },
  {
    name: 'Pearson Edexcel IGCSE Literature',
    id: 'edexcel-igcse',
    href: boardLandingHref('edexcel-igcse'),
  },
  {
    name: 'Pearson Edexcel IGCSE Language A',
    id: 'edexcel-igcse-lang',
    href: boardLandingHref('edexcel-igcse-lang'),
  },
]

/*
 * The games band, directly after the hero: the guided quests, the four exam
 * games, and the hub. games-are-one-step-from-anywhere.test.ts reads this
 * list.
 */
const GAME_LINKS: GameLink[] = [
  { href: TEXT_GAMES_INDEX, labelKey: 'home.story.games.quests' },
  { href: '/games/theme-matcher', labelKey: 'home.story.games.theme_matcher' },
  { href: '/games/speed-analysis', labelKey: 'home.story.games.speed_analysis' },
  { href: '/games/quote-detective', labelKey: 'home.story.games.quote_detective' },
  { href: '/games/grade-climber', labelKey: 'home.story.games.grade_climber' },
  { href: '/games', labelKey: 'home.story.games.all', all: true },
]

export default async function Home() {
  const boards = { gcse: GCSE_BOARDS, igcse: IGCSE_BOARDS }
  // Asked of the games themselves, so the chapter cannot link to a quest that
  // does not exist; the index is the fallback the rule would give anyway.
  const questHref = textGamesHref('macbeth') ?? TEXT_GAMES_INDEX

  return (
    <div className="min-h-screen bg-background">
      {/* Funnel: home_viewed (consent-gated in src/lib/posthog.ts; never for minors) */}
      <TrackEvent event="home_viewed" />

      <HomeHero boards={boards} />
      <GamesBand links={GAME_LINKS} />
      <StoryChapters boards={boards} questHref={questHref} />
      <Epilogue />
    </div>
  )
}
