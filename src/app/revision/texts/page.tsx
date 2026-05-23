import Link from 'next/link'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { t } from '@/lib/i18n/t'

import TextsRevisionView from './texts-view'

export default async function TextsRevisionPage() {
  const board = await getServerBoard()

  // SEO landing list: every set text on the platform, each entry labelled
  // with its board(s). Shown only when the visitor has not chosen a board
  // yet — once they have, we hide this catch-all and show their personalised
  // texts via TextsRevisionView, otherwise an AQA student would see Cambridge
  // IGCSE prose, OCR-only Shakespeare, etc. above their own filtered list.
  return (
    <>
      {!board && (
        <section className="mx-auto max-w-5xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {await t('texts.boardless.h2')}
          </h1>
          <p className="mt-2 text-slate-600">{await t('texts.boardless.intro')}</p>

          <h3 className="mt-6 text-lg font-semibold">{await t('texts.section.shakespeare')}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            <li>
              <Link className="text-blue-700 hover:underline" href="/revision/texts/macbeth">
                Macbeth
              </Link>{' '}
              — ambition, guilt, the supernatural; AQA / Edexcel / Eduqas / OCR
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/romeo-and-juliet"
              >
                Romeo and Juliet
              </Link>{' '}
              — fate, love, family honour; AQA / Edexcel / Eduqas
            </li>
            <li>
              <Link className="text-blue-700 hover:underline" href="/revision/texts/the-tempest">
                The Tempest
              </Link>{' '}
              — power, colonialism, forgiveness; Edexcel / OCR
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/much-ado-about-nothing"
              >
                Much Ado About Nothing
              </Link>{' '}
              — deception, gender, reputation; AQA only
            </li>
            <li>
              <Link className="text-blue-700 hover:underline" href="/revision/texts/julius-caesar">
                Julius Caesar
              </Link>{' '}
              — political power, betrayal, rhetoric; OCR only
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">{await t('texts.section.c19_novel')}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/a-christmas-carol"
              >
                A Christmas Carol
              </Link>{' '}
              — redemption, poverty, Victorian social conscience; AQA / Eduqas
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/jekyll-and-hyde"
              >
                Dr Jekyll and Mr Hyde
              </Link>{' '}
              — duality, repression, gothic; AQA / Edexcel
            </li>
            <li>
              <Link className="text-blue-700 hover:underline" href="/revision/texts/frankenstein">
                Frankenstein
              </Link>{' '}
              — creation, hubris, outsider narrative; AQA / OCR
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/great-expectations"
              >
                Great Expectations
              </Link>{' '}
              — class, guilt, bildungsroman; AQA / Edexcel
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/the-sign-of-four"
              >
                The Sign of Four
              </Link>{' '}
              — empire, deduction, Victorian anxieties; AQA
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/pride-and-prejudice"
              >
                Pride and Prejudice
              </Link>{' '}
              — marriage, class, irony; AQA only
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">
            {await t('texts.section.modern_prose_drama')}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/an-inspector-calls"
              >
                An Inspector Calls
              </Link>{' '}
              — social responsibility, class, generational change; AQA / Edexcel / Eduqas
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/lord-of-the-flies"
              >
                Lord of the Flies
              </Link>{' '}
              — civilisation vs savagery, power, allegory; AQA / OCR
            </li>
            <li>
              <Link className="text-blue-700 hover:underline" href="/revision/texts/animal-farm">
                Animal Farm
              </Link>{' '}
              — allegory of Russian Revolution, corruption of power; AQA / Edexcel
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/of-mice-and-men"
              >
                Of Mice and Men
              </Link>{' '}
              — the American Dream, loneliness, dreams deferred; IGCSE + some legacy GCSE
            </li>
            <li>
              <Link className="text-blue-700 hover:underline" href="/revision/texts/blood-brothers">
                Blood Brothers
              </Link>{' '}
              — nature vs nurture, class, fate; AQA / Edexcel
            </li>
            <li>
              DNA{' '}
              <span className="ml-1 inline-block rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                Coming soon
              </span>{' '}
              — responsibility, group dynamics, tragedy; AQA only
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">{await t('texts.section.igcse_a_level')}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            <li>
              The Kite Runner{' '}
              <span className="ml-1 inline-block rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                Coming soon
              </span>{' '}
              — guilt, friendship, Afghan history; Cambridge IGCSE 0475
            </li>
            <li>
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/a-view-from-the-bridge"
              >
                A View from the Bridge
              </Link>{' '}
              — immigration, honour, tragedy; IGCSE + A-Level
            </li>
            <li>
              Spies{' '}
              <span className="ml-1 inline-block rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                Coming soon
              </span>{' '}
              — memory, wartime, narrative unreliability; Cambridge IGCSE 0475
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold">
            {await t('texts.section.pearson_anthology')}
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            {await t('texts.section.pearson_anthology_note')}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
            <li>
              <strong>{await t('texts.label.non_fiction')}</strong>{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/the-danger-of-a-single-story"
              >
                The Danger of a Single Story
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/a-passage-to-africa"
              >
                A Passage to Africa
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/the-explorers-daughter"
              >
                The Explorer&rsquo;s Daughter
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/explorers-or-boys-messing-about"
              >
                Explorers, or boys messing about?
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/between-a-rock-and-a-hard-place"
              >
                Between a Rock and a Hard Place
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/young-and-dyslexic"
              >
                Young and dyslexic?
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/a-game-of-polo-with-a-headless-goat"
              >
                A Game of Polo with a Headless Goat
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/beyond-the-sky-and-the-earth"
              >
                Beyond the Sky and the Earth
              </Link>
              ,{' '}
              <Link className="text-blue-700 hover:underline" href="/revision/texts/h-is-for-hawk">
                H is for Hawk
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/chinese-cinderella"
              >
                Chinese Cinderella
              </Link>
              .
            </li>
            <li>
              <strong>{await t('texts.label.poetry')}</strong>{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/disabled"
              >
                Disabled
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/out-out"
              >
                &lsquo;Out, Out&mdash;&rsquo;
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/an-unknown-girl"
              >
                An Unknown Girl
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/the-bright-lights-of-sarajevo"
              >
                The Bright Lights of Sarajevo
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/still-i-rise"
              >
                Still I Rise
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/do-not-go-gentle-into-that-good-night"
              >
                Do not go gentle into that good night
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/refugee-blues"
              >
                Refugee Blues
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/war-photographer"
              >
                War Photographer
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/if"
              >
                If&mdash;
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/prayer-before-birth"
              >
                Prayer Before Birth
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/piano"
              >
                Piano
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/hide-and-seek"
              >
                Hide and Seek
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/half-past-two"
              >
                Half-past Two
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/my-last-duchess"
              >
                My Last Duchess
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/poetry/pearson-igcse/sonnet-116"
              >
                Sonnet 116
              </Link>
              .
            </li>
            <li>
              <strong>{await t('texts.label.prose')}</strong>{' '}
              <Link className="text-blue-700 hover:underline" href="/revision/texts/the-door">
                The Door
              </Link>
              ,{' '}
              <Link className="text-blue-700 hover:underline" href="/revision/texts/the-necklace">
                The Necklace
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/significant-cigarettes"
              >
                Significant Cigarettes
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/whistle-and-ill-come-to-you"
              >
                Whistle and I&rsquo;ll Come to You
              </Link>
              ,{' '}
              <Link className="text-blue-700 hover:underline" href="/revision/texts/night">
                Night
              </Link>
              ,{' '}
              <Link className="text-blue-700 hover:underline" href="/revision/texts/the-pedestrian">
                The Pedestrian
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/the-yellow-wallpaper"
              >
                The Yellow Wall Paper
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/when-greek-meets-greek"
              >
                When Greek Meets Greek
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/the-man-who-loved-flowers"
              >
                The Man Who Loved Flowers
              </Link>
              ,{' '}
              <Link
                className="text-blue-700 hover:underline"
                href="/revision/texts/the-story-of-an-hour"
              >
                The Story of an Hour
              </Link>
              .
            </li>
          </ul>
        </section>
      )}

      {board ? (
        <TextsRevisionView
          boardId={board}
          boardName={
            getBoardConfig(board)?.shortName ?? getBoardConfig(board)?.name ?? 'Your Board'
          }
          texts={getSetTextsForBoard(board)}
        />
      ) : (
        <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">{await t('texts.personalise.title')}</h3>
            <p className="mt-1 text-slate-600">{await t('texts.personalise.body')}</p>
            <Link
              href="/board-select?next=/revision/texts"
              className="mt-3 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              {await t('texts.personalise.cta')}
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
