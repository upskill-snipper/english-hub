import Link from 'next/link'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

import TextsRevisionView from './texts-view'

export default async function TextsRevisionPage() {
  const board = await getServerBoard()

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          GCSE English Literature set texts — revision library
        </h2>
        <p className="mt-2 text-slate-600">
          Choose a text to see full revision notes, character maps, theme trackers, model
          paragraphs, and past-paper practice.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Shakespeare</h3>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
          <li>
            <Link className="text-blue-700 hover:underline" href="/revision/texts/macbeth">
              Macbeth
            </Link>{' '}
            — ambition, guilt, the supernatural; AQA / Edexcel / Eduqas / OCR
          </li>
          <li>
            <Link className="text-blue-700 hover:underline" href="/revision/texts/romeo-and-juliet">
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

        <h3 className="mt-6 text-lg font-semibold">19th-century novel</h3>
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
            <Link className="text-blue-700 hover:underline" href="/revision/texts/jekyll-and-hyde">
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
            <Link className="text-blue-700 hover:underline" href="/revision/texts/the-sign-of-four">
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

        <h3 className="mt-6 text-lg font-semibold">Modern prose + drama</h3>
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
            <Link className="text-blue-700 hover:underline" href="/revision/texts/of-mice-and-men">
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

        <h3 className="mt-6 text-lg font-semibold">IGCSE + A-Level texts</h3>
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
      </section>

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
            <h3 className="text-lg font-semibold">Personalise your revision</h3>
            <p className="mt-1 text-slate-600">
              Pick your exam board to filter the texts above to just the ones you&apos;re sitting,
              and to unlock progress tracking.
            </p>
            <Link
              href="/board-select?next=/revision/texts"
              className="mt-3 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Choose your exam board
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
