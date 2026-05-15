import { Metadata } from 'next'
import Link from 'next/link'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Rights & Permissions — The English Hub',
    description:
      'Directory of publishers, literary agents, and rights-holders we contact for permissions and source attribution. Quotations on the platform are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation).',
  },
  alternates: { canonical: 'https://theenglishhub.app/legal/rights' },
  title: 'Rights & Permissions — The English Hub',
  description:
    'Directory of publishers, literary agents, and rights-holders we contact for permissions and source attribution. Quotations on the platform are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation).',
}

/* ─── Rights-holder data ─────────────────────────────────────── */

type RightsHolder = {
  publisher: string
  website: string
  url: string
  keyTexts: string
}

const RIGHTS_HOLDERS: RightsHolder[] = [
  {
    publisher: 'Faber & Faber',
    website: 'faberpermissions.com',
    url: 'https://www.faberpermissions.com',
    keyTexts:
      'Ted Hughes, Seamus Heaney, Simon Armitage, Philip Larkin, Sylvia Plath, Daljit Nagra, Andrew Waterhouse, Louis MacNeice, Thom Gunn, Fleur Adcock',
  },
  {
    publisher: 'Bloodaxe Books',
    website: 'bloodaxebooks.com',
    url: 'https://www.bloodaxebooks.com',
    keyTexts:
      'Tony Harrison, Jackie Kay, Imtiaz Dharker (Blessing / Tissue / Honour Killing), Carol Rumens, Moniza Alvi, Liz Lochhead',
  },
  {
    publisher: 'Carcanet Press',
    website: 'carcanet.co.uk/permissions',
    url: 'https://www.carcanet.co.uk/permissions',
    keyTexts: 'Sujata Bhatt, Gillian Clarke (Catrin / Blackberry Picking)',
  },
  {
    publisher: 'Peters Fraser & Dunlop',
    website: 'petersfraserdunlop.com',
    url: 'https://www.petersfraserdunlop.com',
    keyTexts: 'C. Day-Lewis (Walking Away), James Fenton',
  },
  {
    publisher: 'Rogers, Coleridge & White',
    website: 'rcwlitagency.com',
    url: 'https://www.rcwlitagency.com',
    keyTexts: 'Carol Ann Duffy (War Photographer)',
  },
  {
    publisher: 'Picador / Pan Macmillan',
    website: 'panmacmillan.com/permissions',
    url: 'https://www.panmacmillan.com/permissions',
    keyTexts: 'Carol Ann Duffy (Before You Were Mine / Valentine), Raymond Antrobus',
  },
  {
    publisher: 'David Higham Associates',
    website: 'davidhigham.co.uk',
    url: 'https://www.davidhigham.co.uk',
    keyTexts: 'Charles Causley (Eden Rock), Dylan Thomas',
  },
  {
    publisher: 'Enitharmon Press',
    website: 'enitharmon.co.uk',
    url: 'https://www.enitharmon.co.uk',
    keyTexts: 'Beatrice Garland (Kamikaze)',
  },
  {
    publisher: 'Templar Poetry',
    website: 'templarpoetry.com',
    url: 'https://www.templarpoetry.com',
    keyTexts: 'Jane Weir (Poppies)',
  },
  {
    publisher: 'Haymarket Books',
    website: 'haymarketbooks.org',
    url: 'https://www.haymarketbooks.org',
    keyTexts: 'Eve L. Ewing (Origin Story)',
  },
  {
    publisher: 'Seren Books',
    website: 'serenbooks.com',
    url: 'https://www.serenbooks.com',
    keyTexts: 'Owen Sheers (Winter Swans)',
  },
  {
    publisher: 'Methuen Drama (Bloomsbury)',
    website: 'bloomsbury.com/permissions',
    url: 'https://www.bloomsbury.com/permissions',
    keyTexts: 'Willy Russell (Blood Brothers)',
  },
  {
    publisher: 'Samuel French / Concord Theatricals',
    website: 'concordtheatricals.co.uk',
    url: 'https://www.concordtheatricals.co.uk',
    keyTexts: 'J. B. Priestley (An Inspector Calls)',
  },
  {
    publisher: 'Pearson Education Ltd',
    website: 'pearsoned.com/permissions',
    url: 'https://www.pearson.com/permissions',
    keyTexts: 'All Edexcel IGCSE anthology content (ISBN 978-1-446-93108-0)',
  },
  {
    publisher: 'Cambridge University Press',
    website: 'cambridge.org/permissions',
    url: 'https://www.cambridge.org/permissions',
    keyTexts: 'Songs of Ourselves anthology',
  },
  {
    publisher: 'Alfred A. Knopf / Penguin Random House',
    website: 'penguinrandomhouse.com/permissions',
    url: 'https://www.penguinrandomhouse.com/permissions',
    keyTexts: 'Langston Hughes (UK PD 2038)',
  },
  {
    publisher: 'Orwell Estate / A. M. Heath',
    website: 'amheath.com',
    url: 'https://www.amheath.com',
    keyTexts: 'George Orwell (Animal Farm) — actively enforced',
  },
  {
    publisher: 'Farrar, Straus & Giroux',
    website: 'fsgpermissions.com',
    url: 'https://www.fsgpermissions.com',
    keyTexts: 'Derek Walcott',
  },
]

/* ─── US PD but not UK ───────────────────────────────────────── */

const US_PD_NOT_UK = [
  {
    author: 'Robert Frost',
    died: '1963',
    ukExpires: '2034',
  },
  {
    author: 'W. H. Auden',
    died: '1973',
    ukExpires: '2044',
  },
  {
    author: 'Langston Hughes',
    died: '1967',
    ukExpires: '2038',
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function RightsAndPermissionsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Rights & Permissions</h1>
      <p className="text-muted-foreground text-sm mb-6">
        <strong>The English Hub</strong> — operated by Upskill Energy Limited
        <br />
        Last updated: 28 April 2026
      </p>

      {/* ── Preamble ─────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">About This Page</h2>
        <p>
          This page lists every publisher, literary agent, and rights-holder we contact for
          permissions and source attribution. Quotations on the platform are short fair-dealing
          extracts under <strong>CDPA 1988 §30</strong> (criticism, review, quotation). For any
          extended quotation beyond fair-dealing limits, contact the rights-holder directly via the
          contact below.
        </p>
        <p className="mt-3">
          We maintain this directory so that students, teachers, parents, and third parties can
          verify our sources and reach the appropriate rights-holder when they need to use a longer
          extract — for example, in a printed worksheet, a school anthology, or a public
          performance.
        </p>
      </section>

      {/* ── Rights-holder table ──────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Rights-Holder Directory</h2>
        <p className="mb-4">
          The table below is grouped by primary publisher or agent. Rights-holders are listed
          alphabetically within each row by the authors they represent for the texts most commonly
          studied at GCSE and IGCSE level.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">
              Directory of publishers and literary agents we contact for permissions, with
              associated author texts.
            </caption>
            <thead className="bg-muted">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 text-left font-semibold text-foreground border-b border-border whitespace-nowrap"
                >
                  Publisher / Agent
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left font-semibold text-foreground border-b border-border"
                >
                  Permissions Website
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left font-semibold text-foreground border-b border-border"
                >
                  Authors / Key Texts
                </th>
              </tr>
            </thead>
            <tbody>
              {RIGHTS_HOLDERS.map((holder) => (
                <tr key={holder.publisher} className="border-b border-border last:border-b-0">
                  <th
                    scope="row"
                    className="px-3 py-3 text-left align-top font-medium text-foreground whitespace-nowrap"
                  >
                    {holder.publisher}
                  </th>
                  <td className="px-3 py-3 align-top">
                    <a
                      href={holder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline hover:no-underline break-all"
                    >
                      {holder.website}
                    </a>
                  </td>
                  <td className="px-3 py-3 align-top text-muted-foreground">{holder.keyTexts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── US PD but not UK ─────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Caution: US Public Domain but Not UK</h2>
        <div
          role="note"
          className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100"
        >
          <p className="font-semibold mb-2">Important rights-clearance note</p>
          <p className="mb-3">
            UK copyright runs for the life of the author plus 70 years. Several authors whose works
            are in the public domain in the United States remain{' '}
            <strong>in copyright in the United Kingdom</strong>. We treat the following as still
            requiring permission for any non-fair-dealing reproduction within the UK:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            {US_PD_NOT_UK.map((entry) => (
              <li key={entry.author}>
                <strong>{entry.author}</strong> (d.&nbsp;{entry.died}) — UK copyright expires{' '}
                {entry.ukExpires}.
              </li>
            ))}
          </ul>
          <p className="mt-3">
            If you have located a US public-domain edition of these authors online, this does not
            grant you UK reproduction rights. Please contact the appropriate rights-holder before
            using extended extracts.
          </p>
        </div>
      </section>

      {/* ── How to request extended quotation rights ─────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">How to Request Extended Quotation Rights</h2>
        <p className="mb-3">
          If you wish to reproduce more than a fair-dealing extract — for example, a full poem, a
          long passage from a novel, or a scene from a play — please follow these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Identify the rights-holder.</strong> Locate the relevant publisher or literary
            agent in the directory above based on the author of the text you want to use.
          </li>
          <li>
            <strong>Visit their permissions website.</strong> Most rights-holders listed here
            operate a dedicated permissions portal where you can submit a request directly. Click
            the website link in the table to open it in a new tab.
          </li>
          <li>
            <strong>Prepare your request.</strong> A standard permissions request will require: the
            title and author of the work, the specific extract (with line numbers or page numbers),
            the intended use (e.g. printed classroom handout, online course, public performance),
            the territory of use (UK / worldwide), the print run or audience size, and whether the
            use is commercial or non-commercial.
          </li>
          <li>
            <strong>Allow time for a response.</strong> Most publishers respond within 4–8 weeks.
            Some texts (especially anthology entries) may require sub-licensing through more than
            one rights-holder.
          </li>
          <li>
            <strong>Pay any clearance fee and keep the licence.</strong> Retain the written
            permission alongside any materials you produce. Keep a copy of the licence on file for
            the duration of your use.
          </li>
        </ol>
        <p className="mt-4">
          If you are unable to identify the correct rights-holder, or if you believe a quotation we
          use on the platform exceeds fair-dealing limits, please contact us directly at{' '}
          <a
            href="mailto:rights@upskillenergy.com"
            className="text-foreground underline hover:no-underline"
          >
            rights@upskillenergy.com
          </a>{' '}
          and we will redirect your enquiry or remove the extract.
        </p>
      </section>

      {/* ── Footer / cross-link ──────────────────────────────── */}
      <section className="mb-2">
        <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link href="/legal/disclaimer" className="text-foreground underline hover:no-underline">
              Full Disclaimer
            </Link>{' '}
            — exam-board non-affiliation and trademark attributions.
          </li>
          <li>
            <Link
              href="/legal/ai-transparency"
              className="text-foreground underline hover:no-underline"
            >
              AI Transparency
            </Link>{' '}
            — how AI feedback uses these source materials.
          </li>
          <li>
            {/* TODO: add /legal/copyright when the dedicated copyright notice page is created */}
            <span className="text-muted-foreground">Copyright Notice — coming soon.</span>
          </li>
        </ul>
      </section>
    </>
  )
}
