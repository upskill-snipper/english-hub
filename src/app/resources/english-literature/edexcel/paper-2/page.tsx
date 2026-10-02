import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel Paper 2: 19th-Century Novel',
    description:
      'Edexcel GCSE Literature Paper 2: the 19th-century novel set texts, all four poetry anthology collections and unseen poetry, with marks and timings.',
    images: [
      {
        url: '/api/og?title=Edexcel+Paper+2%3A+19th-Century+Novel',
        width: 1200,
        height: 630,
        alt: 'Edexcel Paper 2: 19th-Century Novel',
      },
    ],
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/paper-2',
  },
  title: 'Edexcel Paper 2: 19th-Century Novel',
  description:
    'Edexcel GCSE Literature Paper 2: the 19th-century novel set texts, all four poetry anthology collections and unseen poetry, with marks and timings.',
}

/* ─── Page component ─────────────────────────────────────────── */

export default async function Paper2Page() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: 19th-Century Novel and Poetry since 1789
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            2 hours 15 minutes &middot; 80 marks &middot; 50% of GCSE
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Exam structure ────────────────────────────────────── */}
        {/* Until 2 October 2026 this page described a paper Pearson does not set: three
            sections, a novel essay with no extract and 4 SPaG marks, a 24-mark anthology
            section and a 16-mark unseen "Section C" in two parts of 8. The 1ET0
            specification (Issue 2) has two sections and four questions of 20 marks; the
            marking engine holds the same split in src/lib/marking/mark-schemes/edexcel-lit.ts. */}
        <section>
          <h2 className="text-2xl font-bold text-foreground">{_tr(`Exam Structure`)}</h2>
          <p className="mt-2 text-muted-foreground">
            Paper 2 has two sections and four questions, each worth 20 marks. The exam is closed
            book: texts are not allowed, and the paper prints the extract and the poems it asks
            about.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                {_tr(`Section A: 19th-Century Novel`)}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                40 marks &middot; ~1 hour
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  One two-part question on your studied novel.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  (a) Explore an extract of about 400 words, printed on the paper (20 marks).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  (b) An essay on the novel as a whole (20 marks).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Part (a) is assessed on analysis of methods, part (b) on reading and response. No
                  marks for context or SPaG in this section.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                {_tr(`Section B: Poetry Anthology`)}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Part 1 &middot; 20 marks &middot; ~35 minutes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  One named poem from your collection is printed in the exam paper.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  You must compare it with another poem from the same collection (from memory).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Assessed on analysis of methods (15 marks) and context (5 marks).
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">Section B: Unseen Poetry</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Part 2 &middot; 20 marks &middot; ~35 minutes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Two contemporary poems you have not seen before are printed in the paper, linked
                  by a theme.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  One question: compare how the poets present that theme.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Assessed on reading and response (8 marks) and analysis of methods (12 marks).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 19th-Century Novels ───────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Section A: 19th-Century Novel Set Texts
          </h2>

          <div className="mt-6 space-y-6">
            {/* A Christmas Carol */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-foreground">
                  A Christmas Carol - Charles Dickens (1843)
                </h3>
                <Link
                  href="/resources/english-literature/edexcel/christmas-carol"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Full Study Guide &rarr;
                </Link>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ebenezer Scrooge, a miserly old man, is visited on Christmas Eve by three spirits
                who show him the error of his ways. Dickens wrote the novella to highlight the
                plight of the Victorian poor and promote compassion and generosity.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Redemption, social injustice, Christmas spirit, greed vs generosity, family,
                    isolation
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scrooge, Bob Cratchit, Tiny Tim, Fred, Fezziwig, Marley, Belle, the three
                    spirits
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Context
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Victorian poverty, the Poor Law (1834), Malthusian economics, industrial
                    revolution, workhouses
                  </p>
                </div>
              </div>
            </div>

            {/* Great Expectations */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Great Expectations - Charles Dickens (1861)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Pip, an orphan raised by his sister and her husband Joe, comes into a mysterious
                fortune and moves to London to become a gentleman. Dickens explores class, ambition,
                loyalty, and the true meaning of being a &quot;gentleman.&quot;
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Class and social mobility, ambition and self-improvement, guilt, loyalty,
                    justice, love and rejection
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pip, Estella, Miss Havisham, Joe Gargery, Magwitch, Herbert Pocket, Jaggers
                  </p>
                </div>
              </div>
            </div>

            {/* Jekyll and Hyde */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                The Strange Case of Dr Jekyll and Mr Hyde - R.L. Stevenson (1886)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The respectable Dr Jekyll creates a potion that transforms him into the evil Mr
                Hyde. Stevenson explores the duality of human nature and Victorian repression.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Duality of man, repression, science and religion, secrecy, reputation, good vs
                    evil
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Dr Jekyll, Mr Hyde, Mr Utterson, Dr Lanyon, Mr Enfield, Poole
                  </p>
                </div>
              </div>
            </div>

            {/* Jane Eyre */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Jane Eyre - Charlotte Bronte (1847)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                An orphaned girl endures a cruel childhood, becomes a governess at Thornfield Hall,
                and falls in love with the brooding Mr Rochester. Jane struggles for independence,
                equality, and moral integrity in a patriarchal society.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Independence, gender equality, social class, religion, love and passion, the
                    Gothic
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Jane Eyre, Mr Rochester, Mrs Reed, Helen Burns, St John Rivers, Bertha Mason
                  </p>
                </div>
              </div>
            </div>

            {/* Pride and Prejudice */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Pride and Prejudice - Jane Austen (1813)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Elizabeth Bennet and Mr Darcy overcome their initial misjudgements to find love.
                Austen satirises the marriage market, class snobbery, and the limited options
                available to women in Regency England.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pride and prejudice, marriage, class, reputation, gender, love vs financial
                    security
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Elizabeth Bennet, Mr Darcy, Jane Bennet, Mr Bingley, Mr Wickham, Lady Catherine
                    de Bourgh
                  </p>
                </div>
              </div>
            </div>

            {/* Frankenstein */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Frankenstein - Mary Shelley (1818)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Victor Frankenstein creates a living creature from dead body parts, then abandons it
                in horror. The creature, rejected by society, turns to violence. Shelley explores
                the dangers of unchecked ambition, parental responsibility, and what makes us human.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Dangerous knowledge, nature vs nurture, isolation, monstrosity, creation and
                    responsibility, the sublime
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Victor Frankenstein, the Creature, Robert Walton, Elizabeth Lavenza, Henry
                    Clerval
                  </p>
                </div>
              </div>
            </div>

            {/* Silas Marner */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Silas Marner - George Eliot (1861)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A weaver falsely accused of theft becomes a recluse obsessed with his gold. When his
                gold is stolen and a golden-haired orphan appears, Silas finds redemption through
                love and community. Eliot explores class, faith, and moral worth.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Themes
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Community and isolation, faith, moral values, class, family, redemption
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Characters
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Silas Marner, Eppie, Godfrey Cass, Dunstan Cass, Dolly Winthrop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Poetry Anthology ──────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            {_tr(`Section B: Poetry Anthology`)}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Pearson&apos;s anthology has four collections of 15 poems, and your school will have
            studied one. In Section B Part 1 you compare a named poem (printed in the exam) with one
            of your choice from the same collection.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                {_tr(`Relationships Collection`)}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {[
                  // The Pearson Edexcel anthology's Collection A (Issue 4), in its order. Until
                  // 2 October 2026 this list had Love's Philosophy, Climbing My Grandfather and
                  // Singh Song!, which are AQA poems, and a "Sonnet 29" by Edna St Vincent
                  // Millay, in place of A Complaint, Neutral Tones, The Manhunt and My Father
                  // Would Not Show Us.
                  'La Belle Dame Sans Merci - John Keats',
                  'A Child to his Sick Grandfather - Joanna Baillie',
                  'She Walks in Beauty - Lord Byron',
                  'A Complaint - William Wordsworth',
                  'Neutral Tones - Thomas Hardy',
                  'Sonnet 43 - Elizabeth Barrett Browning',
                  'My Last Duchess - Robert Browning',
                  '1st Date - She / 1st Date - He - Wendy Cope',
                  'Valentine - Carol Ann Duffy',
                  'One Flesh - Elizabeth Jennings',
                  'i wanna be yours - John Cooper Clarke',
                  "Love's Dog - Jen Hadfield",
                  'Nettles - Vernon Scannell',
                  'The Manhunt - Simon Armitage',
                  'My Father Would Not Show Us - Ingrid de Kok',
                ].map((poem) => (
                  <li key={poem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {poem}
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/english-literature/edexcel/poetry"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Analysis of every poem in this collection &rarr;
              </Link>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">{_tr(`Conflict Collection`)}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {[
                  'The Charge of the Light Brigade - Alfred Lord Tennyson',
                  'Exposure - Wilfred Owen',
                  'Catrin - Gillian Clarke',
                  'War Photographer - Carole Satyamurti',
                  'Belfast Confetti - Ciaran Carson',
                  'The Destruction of Sennacherib - Lord Byron',
                  'Half-caste - John Agard',
                  'A Poison Tree - William Blake',
                  'The Man He Killed - Thomas Hardy',
                  'Cousin Kate - Christina Rossetti',
                  'No Problem - Benjamin Zephaniah',
                  'What Were They Like? - Denise Levertov',
                  'The Class Game - Mary Casey',
                  'Poppies - Jane Weir',
                  'Extract from The Prelude - William Wordsworth',
                ].map((poem) => (
                  <li key={poem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {poem}
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/english-literature/edexcel/poetry"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Analysis of every poem in this collection &rarr;
              </Link>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                {_tr(`Time and Place Collection`)}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {[
                  // The anthology's Collection C, in its order. Until 2 October 2026 this page
                  // listed only Relationships and Conflict, two of the four collections.
                  'To Autumn - John Keats',
                  'Composed upon Westminster Bridge - William Wordsworth',
                  'London - William Blake',
                  'I started Early - Took my Dog - Emily Dickinson',
                  'Where the Picnic was - Thomas Hardy',
                  'Adlestrop - Edward Thomas',
                  'Home Thoughts from Abroad - Robert Browning',
                  'First Flight - U. A. Fanthorpe',
                  'Stewart Island - Fleur Adcock',
                  'Presents from my Aunts in Pakistan - Moniza Alvi',
                  'Hurricane Hits England - Grace Nichols',
                  "Nothing's Changed - Tatamkhulu Afrika",
                  'Postcard from a Travel Snob - Sophie Hannah',
                  'In Romney Marsh - John Davidson',
                  'Absence - Elizabeth Jennings',
                ].map((poem) => (
                  <li key={poem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {poem}
                  </li>
                ))}
              </ul>
              <Link
                href="/revision/poetry/edexcel/time-and-place"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                All 15 poems, with guides to four &rarr;
              </Link>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">{_tr(`Belonging Collection`)}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {[
                  // The anthology's Collection D, in its order.
                  'Peckham Rye Lane - A. K. Blakemore',
                  'Us - Zaffar Kunial',
                  'In Wales, wanting to be Italian - Imtiaz Dharker',
                  'Kumukanda - Kayo Chingonyi',
                  'Jamaican British - Raymond Antrobus',
                  "My Mother's Kitchen - Choman Hardi",
                  'The Émigrée - Carol Rumens',
                  'To My Sister - William Wordsworth',
                  'Sunday Dip - John Clare',
                  'Mild the Mist Upon the Hill - Emily Brontë',
                  'Captain Cook (To My Brother) - Letitia Elizabeth Landon',
                  'Clear and Gentle Stream - Robert Bridges',
                  'I Remember, I Remember - Thomas Hood',
                  'Island Man - Grace Nichols',
                  'We Refugees - Benjamin Zephaniah',
                ].map((poem) => (
                  <li key={poem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {poem}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                The site has no study guides to this collection yet.
              </p>
            </div>
          </div>
        </section>

        {/* ── Unseen poetry ─────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Section B Part 2: Unseen Poetry</h2>
          <p className="mt-2 text-muted-foreground">
            You will be given two contemporary poems you have never seen before, linked by a theme,
            and one question asking you to compare them (20 marks). This part tests your ability to
            analyse poetry independently.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">Reading the Two Poems</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The question tells you what to compare: how the poets present a theme the two poems
                share. Read each poem with that theme in mind.
              </p>
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  {_tr(`Step-by-step approach:`)}
                </h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      1
                    </span>
                    <span>
                      Read each poem twice. Annotate key words, images, and techniques on the second
                      read.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      2
                    </span>
                    <span>
                      {_tr(`Identify the poem's subject matter, tone, and overall message.`)}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      3
                    </span>
                    <span>
                      Look at language (imagery, word choice, figurative language), structure
                      (stanzas, line length, enjambment), and form (sonnet, free verse, dramatic
                      monologue).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      4
                    </span>
                    <span>
                      Note where the two poems meet and where they differ, then plan 3-4 points of
                      comparison.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Writing the Comparison (20 marks)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You must compare how the poets present the theme across both poems. The marks are
                for your response, supported by references (8), and for analysis of methods (12).
                Context is not assessed in this part.
              </p>
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  {_tr(`Tips for comparison:`)}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Use comparative connectives: &quot;Similarly,&quot; &quot;In contrast,&quot;
                    &quot;Whereas,&quot; &quot;Both poets...&quot;
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Focus on methods (how they write), not just content (what they write about).
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Compare tone, imagery, structure, and the effect on the reader.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Write 3-4 comparative paragraphs. Each paragraph should reference both poems.
                  </li>
                </ul>
              </div>
            </div>

            {/* Key techniques checklist */}
            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Poetry Analysis Techniques Checklist
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use these when approaching any poem - anthology or unseen.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Language</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>{_tr(`Metaphor and simile`)}</li>
                    <li>Personification</li>
                    <li>Semantic fields</li>
                    <li>{_tr(`Sensory language`)}</li>
                    <li>{_tr(`Tone and register`)}</li>
                    <li>Connotations of word choices</li>
                    <li>{_tr(`Symbolism and imagery`)}</li>
                    <li>{_tr(`Repetition and listing`)}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {_tr(`Structure & Form`)}
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>{_tr(`Stanza arrangement`)}</li>
                    <li>{_tr(`Enjambment and caesura`)}</li>
                    <li>{_tr(`Rhyme scheme`)}</li>
                    <li>{_tr(`Rhythm and metre`)}</li>
                    <li>{_tr(`Volta (a shift or turn)`)}</li>
                    <li>{_tr(`Opening and closing lines`)}</li>
                    <li>{_tr(`Form (sonnet, ballad, free verse)`)}</li>
                    <li>Narrative voice and perspective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timing guide ──────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">{_tr(`Timing Guide`)}</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary text-start">
                  <th className="py-2 pe-4 font-semibold text-foreground">Section</th>
                  <th className="py-2 pe-4 font-semibold text-foreground">Marks</th>
                  <th className="py-2 pe-4 font-semibold text-foreground">Time</th>
                  <th className="py-2 font-semibold text-foreground">Tip</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pe-4 font-medium">A(a): The Extract</td>
                  <td className="py-3 pe-4">20</td>
                  <td className="py-3 pe-4">~30 mins</td>
                  <td className="py-3">Stay with the extract: language, form, structure</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pe-4 font-medium">A(b): The Whole Novel</td>
                  <td className="py-3 pe-4">20</td>
                  <td className="py-3 pe-4">~30 mins</td>
                  <td className="py-3">5 min plan, then range across the novel</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pe-4 font-medium">B Part 1: Anthology Poetry</td>
                  <td className="py-3 pe-4">20</td>
                  <td className="py-3 pe-4">~35 mins</td>
                  <td className="py-3">{_tr(`Compare named poem with your choice`)}</td>
                </tr>
                <tr>
                  <td className="py-3 pe-4 font-medium">B Part 2: Unseen Poetry</td>
                  <td className="py-3 pe-4">20</td>
                  <td className="py-3 pe-4">~35 mins</td>
                  <td className="py-3">Read both poems twice, then compare</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            That leaves about 5 minutes to check your answers. Pearson sets only the total time;
            this split follows the marks.
          </p>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">{_tr(`Paper 2 Exam Technique`)}</h2>

          <div className="mt-6 rounded-xl bg-muted p-6">
            <h3 className="text-lg font-bold text-foreground">19th-Century Novel - Top Tips</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>{_tr(`Memorise short, versatile quotes`)}</strong> - part (a) prints an
                  extract, but part (b) is about the whole novel, so you need quotes ready for many
                  topics. Learn 15-20 key quotes that cover major themes and characters.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Context earns no marks in Section A</strong> - part (a) is assessed on
                  analysis of the extract and part (b) on your response to the whole novel. Use
                  context only where it helps you explain the text; on this paper it earns marks in
                  Section B Part 1.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Write clearly anyway</strong> - Paper 2 has no marks for spelling,
                  punctuation and grammar (those are on Paper 1), but clear writing and accurate
                  terminology are how your argument reaches the marker.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>{_tr(`Show awareness of the whole text`)}</strong> - in part (b),
                  reference the beginning, middle, and end to demonstrate complete knowledge.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  )
}
