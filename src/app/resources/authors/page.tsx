import type { Metadata } from 'next'
import Link from 'next/link'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Authors & Poets — Verified Bios for GCSE & IGCSE English',
    description:
      'Verified author and poet biographies for GCSE and IGCSE English Literature: dates, key works, exam-board notes, and the common factual errors students make.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/authors' },
  title: 'Authors & Poets — Verified Bios for GCSE & IGCSE English',
  description:
    'Verified author and poet biographies for GCSE and IGCSE English Literature: dates, key works, exam-board notes, and the common factual errors students make.',
}

/* ─── Types ──────────────────────────────────────────────────── */

interface AuthorEntry {
  name: string
  dates: string
  era: string
  bio: string
  keyWorks: string[]
  examNote?: string
  /** A common factual error worth flagging in essays. */
  commonError?: string
  studyLinks?: { label: string; href: string }[]
}

/* ─── Data — verified against the English Hub Verified Library ─ */

const NOVELISTS_DRAMATISTS: AuthorEntry[] = [
  {
    name: 'William Shakespeare',
    dates: 'c.1564–1616',
    era: 'Elizabethan / Jacobean',
    bio: "English playwright and poet, born and died in Stratford-upon-Avon. Wrote Macbeth c.1606 for the court of King James I — flattering the new Stuart monarch by tracing Banquo's line and incorporating James's own published work on witchcraft (Daemonologie, 1597).",
    keyWorks: [
      'Macbeth (c.1606) — AQA, Edexcel, OCR, CIE/CAIE, Eduqas',
      'Romeo and Juliet (c.1595) — AQA, Edexcel, OCR, Edexcel IGCSE',
      'Much Ado About Nothing (c.1598–99) — Edexcel IGCSE',
    ],
    examNote:
      'All major UK boards offer Macbeth as the Shakespeare option. Ground context in the Jacobean court, the 1605 Gunpowder Plot, and the Divine Right of Kings.',
    studyLinks: [
      { label: 'Macbeth (AQA)', href: '/resources/english-literature/aqa/macbeth' },
      { label: 'Romeo and Juliet', href: '/resources/english-literature/aqa/romeo-and-juliet' },
    ],
  },
  {
    name: 'Mary Shelley',
    dates: '1797–1851',
    era: 'Romantic',
    bio: 'English novelist, daughter of philosopher William Godwin and feminist writer Mary Wollstonecraft. Conceived Frankenstein at age 18 during the famous 1816 Villa Diodati creative competition with Percy Shelley and Lord Byron. Frankenstein was published anonymously in 1818.',
    keyWorks: ['Frankenstein (1818) — AQA Lit (19th-century novel option)'],
    commonError:
      'The phrase "It\'s alive!" is from the 1931 James Whale film, not the novel. The 1818 text uses no such cry — Victor\'s response is horror and revulsion, not exultation.',
    studyLinks: [{ label: 'Frankenstein', href: '/revision/texts/frankenstein' }],
  },
  {
    name: 'Charles Dickens',
    dates: '1812–1870',
    era: 'Victorian',
    bio: 'English novelist whose own childhood poverty (his father was imprisoned for debt) shaped his lifelong commitment to social reform. The most popular novelist of the Victorian era; mastered the serial form for All the Year Round and Household Words.',
    keyWorks: [
      'A Christmas Carol (19 Dec 1843, Chapman & Hall) — AQA, Edexcel, OCR, CIE/CAIE',
      'Great Expectations (1860–61) — CIE/CAIE',
      'Oliver Twist (1837–39) — wider reading',
    ],
    examNote:
      'A Christmas Carol responds to the 1834 Poor Law Amendment Act; cite Chapman & Hall as publisher and the precise December 1843 publication.',
    studyLinks: [
      { label: 'A Christmas Carol', href: '/resources/english-literature/aqa/christmas-carol' },
      { label: 'Great Expectations', href: '/revision/texts/great-expectations' },
    ],
  },
  {
    name: 'Charlotte Brontë',
    dates: '1816–1855',
    era: 'Victorian',
    bio: 'English novelist; eldest of the three Brontë sisters who survived to adulthood. Published Jane Eyre (1847) under the male pseudonym Currer Bell.',
    keyWorks: ['Jane Eyre (1847) — wider reading / 19th-century novel option'],
  },
  {
    name: 'Emily Brontë',
    dates: '1818–1848',
    era: 'Victorian',
    bio: 'English novelist and poet; published as Ellis Bell. Died of tuberculosis aged 30, the year after Wuthering Heights appeared.',
    keyWorks: ['Wuthering Heights (1847) — wider reading'],
  },
  {
    name: 'Anne Brontë',
    dates: '1820–1849',
    era: 'Victorian',
    bio: 'English novelist; published as Acton Bell. The youngest Brontë; died of tuberculosis aged 29.',
    keyWorks: [
      'Agnes Grey (1847) — wider reading',
      'The Tenant of Wildfell Hall (1848) — wider reading',
    ],
  },
  {
    name: 'George Orwell',
    dates: '1903–1950',
    era: 'Twentieth century',
    bio: 'Pen name of Eric Arthur Blair. Anglo-Indian-born British novelist, essayist and democratic socialist. His experiences fighting in the Spanish Civil War (1936–37) sharpened his lifelong opposition to totalitarianism.',
    keyWorks: [
      'Animal Farm (1945) — Edexcel Lit (modern prose option)',
      'Nineteen Eighty-Four (1949) — wider reading',
    ],
    examNote:
      'Animal Farm is estate-enforced; UK rights still active. Use short fair-dealing extracts only.',
  },
]

const ROMANTIC_VICTORIAN_POETS: AuthorEntry[] = [
  {
    name: 'William Blake',
    dates: '1757–1827',
    era: 'Romantic',
    bio: 'London-born engraver, painter, poet and radical visionary. Lived in London his entire life. Combined poetry with hand-coloured illuminated printing to publish his own work.',
    keyWorks: [
      'Songs of Innocence (1789) and Songs of Experience (1794) — combined edition 1794',
      'London (Songs of Experience, 1794) — AQA Power & Conflict, OCR Power & Natural World, Eduqas',
      'The Tyger (Songs of Experience, 1794) — Edexcel IGCSE',
      'A Poison Tree (Songs of Experience, 1794) — Edexcel Conflict',
      'The Schoolboy (Songs of Experience, 1794) — Eduqas',
    ],
    commonError:
      'Blake wrote TWO poems titled "Holy Thursday" — one in Songs of Innocence (joyful), one in Songs of Experience (satirical). Always check which version your board prescribes.',
    studyLinks: [
      { label: 'London', href: '/revision/poetry/power-and-conflict/london' },
      { label: 'The Tyger', href: '/igcse/edexcel/poetry/the-tyger' },
    ],
  },
  {
    name: 'William Wordsworth',
    dates: '1770–1850',
    era: 'Romantic',
    bio: 'Founder of English Romanticism, born in Cumbria. Co-wrote the Lyrical Ballads (1798) with Coleridge. Was Poet Laureate from 1843 until his death. The Prelude was published posthumously in 1850.',
    keyWorks: [
      'Lyrical Ballads (with Coleridge, 1798)',
      'The Prelude (1850, posthumous; earlier versions 1799 and 1805) — AQA Power & Conflict (1850), OCR Power & Natural World (1799 two-part)',
      'Composed Upon Westminster Bridge (1802) — Edexcel Time and Place, OCR Power & Natural World',
      'I Wandered Lonely as a Cloud (1807) — Eduqas',
      'She Dwelt Among the Untrodden Ways (1800) — OCR Love & Relationships',
    ],
    examNote:
      'AQA prints the 1850 posthumous Prelude. OCR uses the 1799 two-part Prelude (Part First, lines 81–129). The wording is materially different — never cross-quote between the versions.',
    studyLinks: [{ label: 'The Prelude', href: '/revision/poetry/power-and-conflict/the-prelude' }],
  },
  {
    name: 'Lord Byron',
    dates: '1788–1824',
    era: 'Romantic',
    bio: 'George Gordon, 6th Baron Byron. Aristocratic, scandalous, charismatic Romantic poet. Created the "Byronic hero." Died of fever at Missolonghi while supporting the Greek War of Independence.',
    keyWorks: [
      'She Walks in Beauty (1814) — OCR Love & Relationships',
      'When We Two Parted (written 1815/16, pub. 1816) — AQA Love & Relationships',
      'The Destruction of Sennacherib (1815) — Edexcel Conflict, OCR Conflict',
      'Don Juan (1819–24) — wider reading',
    ],
    studyLinks: [
      {
        label: 'When We Two Parted',
        href: '/revision/poetry/love-and-relationships/when-we-two-parted',
      },
    ],
  },
  {
    name: 'Percy Bysshe Shelley',
    dates: '1792–1822',
    era: 'Romantic',
    bio: 'English Romantic poet and political radical, expelled from Oxford for atheism. Drowned in a sailing accident off the Italian coast aged 29. Husband of Mary Shelley.',
    keyWorks: [
      'Ozymandias (written 1817; pub. Jan 1818 in The Examiner / The Indicator sonnet competition with Horace Smith) — AQA Power & Conflict, OCR Power & Natural World, Eduqas',
      "Love's Philosophy (1820) — AQA Love & Relationships",
      'Ode to the West Wind (1820) — OCR Power & Natural World',
    ],
    studyLinks: [{ label: 'Ozymandias', href: '/revision/poetry/power-and-conflict/ozymandias' }],
  },
  {
    name: 'John Keats',
    dates: '1795–1821',
    era: 'Romantic',
    bio: 'English Romantic poet. Trained as a surgeon before turning to poetry. Died of tuberculosis in Rome aged 25.',
    keyWorks: [
      'La Belle Dame sans Merci (two versions: 1819 manuscript and 1820 published version in The Indicator) — Edexcel',
      'Ode to a Nightingale (1819) — wider reading',
      'To Autumn (1819) — Edexcel Time and Place, Eduqas',
      'When I Have Fears (1818) — OCR Youth and Age',
    ],
    examNote:
      'Edexcel uses the 1820 Indicator version of La Belle Dame sans Merci — quote from that text, not the 1819 manuscript.',
  },
  {
    name: 'Alfred, Lord Tennyson',
    dates: '1809–1892',
    era: 'Victorian',
    bio: 'Poet Laureate from 1850 until his death — the longest tenure in the role\'s history. Wrote "The Charge of the Light Brigade" within minutes of reading the Times report of the disastrous Battle of Balaclava charge in October 1854.',
    keyWorks: [
      'The Charge of the Light Brigade (1854) — AQA Power & Conflict, Edexcel Conflict, OCR Conflict',
      'The Eagle (1851) — OCR Power & Natural World',
      'Crossing the Bar (1889) — OCR Youth and Age',
      'In Memoriam A.H.H. (1850) — wider reading',
    ],
    studyLinks: [
      {
        label: 'The Charge of the Light Brigade',
        href: '/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
      },
    ],
  },
  {
    name: 'Christina Rossetti',
    dates: '1830–1894',
    era: 'Victorian',
    bio: "English poet; sister of the Pre-Raphaelite painter Dante Gabriel Rossetti. Devout High Anglican; lifelong illness (Graves' disease) gave mortality a constant presence in her work.",
    keyWorks: [
      'Goblin Market and Other Poems (1862) — wider reading',
      'Remember (1862) — Edexcel IGCSE',
      'Cousin Kate (1862) — Edexcel Conflict, OCR Conflict, Eduqas',
    ],
  },
  {
    name: 'Thomas Hardy',
    dates: '1840–1928',
    era: 'Late Victorian / early modern',
    bio: "English novelist and poet, born in Dorset. Hardy's poetry is Victorian in its reach but pre-modernist in its bleakness. Lost his religious faith partly under the influence of Darwin's On the Origin of Species (1859).",
    keyWorks: [
      'Drummer Hodge (1899) — Eduqas',
      'Neutral Tones (written 1867; pub. 1898) — AQA Love & Relationships, OCR Love & Relationships',
      'The Man He Killed (1902) — Edexcel Conflict, OCR Conflict',
      "Tess of the d'Urbervilles (1891) — wider reading",
    ],
    commonError:
      '"Drummer Hodge" is set in the Second Boer War (1899) — NOT World War I. Hardy wrote it 15 years before WWI began.',
  },
]

const TWENTIETH_CENTURY_POETS: AuthorEntry[] = [
  {
    name: 'Wilfred Owen',
    dates: '1893–1918',
    era: 'WWI',
    bio: 'English poet who served as an officer in the Manchester Regiment on the Western Front. Met Siegfried Sassoon at Craiglockhart military hospital in 1917, an encounter that shaped his mature anti-war poetry. Killed in action on 4 November 1918, just one week before the Armistice.',
    keyWorks: [
      'Anthem for Doomed Youth (1917) — wider reading',
      'Disabled (1917) — Eduqas',
      'Exposure (drafted winter 1917–18) — AQA Power & Conflict, Edexcel Conflict, OCR Conflict',
      'Dulce et Decorum Est (1917) — Eduqas',
    ],
    examNote:
      'In Exposure the spelling "knive" (verb) is correct — Owen\'s coinage; do not "correct" it to "knife" in quotation.',
    studyLinks: [{ label: 'Exposure', href: '/revision/poetry/power-and-conflict/exposure' }],
  },
  {
    name: 'C. Day-Lewis',
    dates: '1904–1972',
    era: 'Mid-twentieth century',
    bio: 'Anglo-Irish poet (note the hyphenated surname Day-Lewis). Part of the politically-engaged 1930s generation alongside Auden and Spender. UK Poet Laureate from 1968 until his death in 1972.',
    keyWorks: [
      'Walking Away (in The Gate and Other Poems, 1956) — AQA Love & Relationships, OCR Youth and Age',
    ],
    commonError:
      '"Walking Away" is dedicated to his eldest son Sean Day-Lewis (the journalist) — NOT to Daniel Day-Lewis the actor, who was the poet\'s youngest son and not yet born when the poem was written.',
    studyLinks: [
      { label: 'Walking Away', href: '/revision/poetry/love-and-relationships/walking-away' },
    ],
  },
  {
    name: 'W.H. Auden',
    dates: '1907–1973',
    era: 'Mid-twentieth century',
    bio: 'Anglo-American poet. Emigrated to the United States in 1939 and took US citizenship in 1946. Prolific essayist and librettist as well as poet.',
    keyWorks: [
      'Funeral Blues ("Stop all the clocks") — 1936 original; 1940 revised version is the one usually anthologised — CIE/CAIE Songs of Ourselves',
      'Tell Me the Truth About Love (1938) — wider reading',
    ],
    examNote:
      "UK copyright on Auden's work runs until 2044 (death + 70 years). Quote only short fair-dealing extracts.",
  },
  {
    name: 'Charles Causley',
    dates: '1917–2003',
    era: 'Mid-twentieth century',
    bio: 'Cornish poet, born and died in Launceston. Served in the Royal Navy in WWII; afterwards taught for many years at his old primary school. His father died from war injuries when Causley was seven.',
    keyWorks: ['Eden Rock (1988, in A Field of Vision) — AQA Love & Relationships'],
    commonError:
      '"Eden Rock" is an INVENTED place — Causley confirmed in interview: "I have no idea, I mean I made it up!" Some interpretations link it to the biblical Eden plus his Cornish landscape, but the place itself is fictional.',
    studyLinks: [{ label: 'Eden Rock', href: '/revision/poetry/love-and-relationships/eden-rock' }],
  },
  {
    name: 'Ted Hughes',
    dates: '1930–1998',
    era: 'Modern',
    bio: 'Yorkshire-born English poet. Husband of Sylvia Plath (married 1956–1963). UK Poet Laureate from 1984 until his death in 1998.',
    keyWorks: [
      'The Hawk in the Rain (1957) — debut collection containing Bayonet Charge (AQA Power & Conflict) and Wind (OCR Power & Natural World)',
      'Crow (1970) — wider reading',
      'Birthday Letters (1998) — wider reading',
    ],
    commonError:
      'Hughes was BORN IN 1930 — he never served in any war. "Bayonet Charge" imagines a WWI infantry charge, drawing on his father William Hughes\'s accounts (William was one of only seventeen survivors of his Lancashire Fusiliers regiment at Gallipoli).',
    studyLinks: [
      { label: 'Bayonet Charge', href: '/revision/poetry/power-and-conflict/bayonet-charge' },
    ],
  },
  {
    name: 'Beatrice Garland',
    dates: 'b. 1938',
    era: 'Contemporary',
    bio: 'English poet and clinical psychologist working in the NHS. Began publishing poetry relatively late in her career.',
    keyWorks: ['Kamikaze (in The Invention of Fireworks, 2013) — AQA Power & Conflict, Eduqas'],
  },
  {
    name: 'Seamus Heaney',
    dates: '1939–2013',
    era: 'Modern',
    bio: 'Northern Irish poet, born in County Derry. Awarded the Nobel Prize in Literature in 1995. Boston University professor of poetry. His childhood on a Catholic farm in rural Ulster underpins much of his early work.',
    keyWorks: [
      'Death of a Naturalist (1966) — debut collection containing Storm on the Island (AQA Power & Conflict, OCR Power & Natural World), Follower (AQA Love & Relationships, OCR Youth and Age), Blackberry Picking (Eduqas)',
      'At a Potato Digging (Death of a Naturalist, 1966) — OCR Power & Natural World',
      'North (1975) — wider reading',
    ],
    studyLinks: [
      {
        label: 'Storm on the Island',
        href: '/revision/poetry/power-and-conflict/storm-on-the-island',
      },
      { label: 'Follower', href: '/revision/poetry/love-and-relationships/follower' },
    ],
  },
  {
    name: 'Carol Rumens',
    dates: 'b. 1944',
    era: 'Contemporary',
    bio: 'English poet, novelist and critic.',
    keyWorks: [
      'The Émigrée (in Thinking of Skins, 1993) — AQA Power & Conflict, OCR Youth and Age',
    ],
    commonError:
      'The city in The Émigrée is deliberately UNNAMED — do not identify it as any specific place. Note the accents on Émigrée (feminine French form).',
    studyLinks: [{ label: 'The Émigrée', href: '/revision/poetry/power-and-conflict/the-emigree' }],
  },
  {
    name: 'John Agard',
    dates: 'b. 1949',
    era: 'Contemporary',
    bio: "British-Caribbean poet, playwright and children's writer; born in British Guiana (now Guyana) and moved to England in 1977. Uses Caribbean Creole alongside Standard English to interrogate colonialism, race and identity.",
    keyWorks: [
      'Half-Caste (1996) — Edexcel Conflict, OCR Conflict',
      'Checking Out Me History (in Half-Caste and Other Poems, 2005) — AQA Power & Conflict',
      'Flag — OCR Conflict',
    ],
    examNote:
      'Quote Agard\'s spelling exactly: "yu" (not "you"), "dem" (not "them"). The Creole orthography is part of the poem\'s argument.',
    studyLinks: [
      {
        label: 'Checking Out Me History',
        href: '/revision/poetry/power-and-conflict/checking-out-me-history',
      },
    ],
  },
  {
    name: 'Imtiaz Dharker',
    dates: 'b. 1954',
    era: 'Contemporary',
    bio: "Pakistani-born British poet, artist and documentary filmmaker. Born in Lahore, raised in Glasgow, has lived in India. Awarded the Queen's Gold Medal for Poetry in 2014.",
    keyWorks: [
      'Blessing (1989, in Postcards from god) — wider reading',
      'Tissue (in The Terrorist at My Table, 2006) — AQA Power & Conflict',
      'Living Space — OCR Power & Natural World',
      'Honour Killing — OCR Conflict',
    ],
    commonError:
      '"Blessing" is set in INDIA — specifically a Mumbai/Bombay water-pipe burst in a slum neighbourhood — NOT in Africa, despite frequent classroom assumptions.',
    studyLinks: [{ label: 'Tissue', href: '/revision/poetry/power-and-conflict/tissue' }],
  },
  {
    name: 'Carol Ann Duffy',
    dates: 'b. 1955',
    era: 'Contemporary',
    bio: 'Glasgow-born Scottish poet. UK Poet Laureate 2009–2019 — the first woman, first Scot and first openly LGBTQ+ person to hold the role. Professor of Contemporary Poetry at Manchester Metropolitan University.',
    keyWorks: [
      'Standing Female Nude (1985) — contains War Photographer (AQA Power & Conflict)',
      'Mean Time (1993) — contains Before You Were Mine (AQA Love & Relationships)',
      'Valentine (1993) — OCR Love & Relationships',
    ],
    studyLinks: [
      { label: 'War Photographer', href: '/revision/poetry/power-and-conflict/war-photographer' },
      {
        label: 'Before You Were Mine',
        href: '/revision/poetry/love-and-relationships/before-you-were-mine',
      },
    ],
  },
  {
    name: 'Benjamin Zephaniah',
    dates: '1958–2023',
    era: 'Contemporary',
    bio: 'British dub poet, novelist, playwright and rights campaigner; born in Birmingham to Jamaican and Barbadian parents. Died on 7 January 2023.',
    keyWorks: [
      'City Psalms (1992) — wider reading',
      'No Problem (Propa Propaganda, 1996) — Edexcel Conflict, OCR Conflict',
      'Refugee Boy (2001) — wider reading',
      "Young and dyslexic? You've got it going on — Edexcel IGCSE Language anthology",
    ],
    examNote:
      "Rights to Zephaniah's work are now held by his estate via Pearson Education. Use short fair-dealing extracts only.",
  },
  {
    name: 'Jane Weir',
    dates: 'b. 1963',
    era: 'Contemporary',
    bio: 'British poet and textile designer; has lived in Italy, England and Northern Ireland.',
    keyWorks: [
      'Poppies (commissioned by Carol Ann Duffy; pub. 2009 in Exit Wounds) — AQA Power & Conflict, Edexcel Conflict, OCR Conflict',
    ],
  },
  {
    name: 'Simon Armitage',
    dates: 'b. 1963',
    era: 'Contemporary',
    bio: 'Yorkshire-born English poet, originally trained as a probation officer. Professor of Poetry at the University of Leeds; Oxford Professor of Poetry 2015–2019. Appointed UK Poet Laureate in May 2019.',
    keyWorks: [
      'Book of Matches (1993) — contains Mother, any distance (AQA Love & Relationships)',
      'The Not Dead (2008) — contains Remains (AQA Power & Conflict)',
      'The Manhunt (2008) — OCR Love & Relationships',
    ],
    commonError:
      'Armitage NEVER served in any military or combat role. "Remains" was commissioned for the 2007 Channel 4 documentary The Not Dead and is based on interviews with Iraq War veterans (especially Guardsman Tromans).',
    studyLinks: [
      { label: 'Remains', href: '/revision/poetry/power-and-conflict/remains' },
      {
        label: 'Mother, Any Distance',
        href: '/revision/poetry/love-and-relationships/mother-any-distance',
      },
    ],
  },
]

const NON_FICTION_AUTHORS: AuthorEntry[] = [
  {
    name: 'George Alagiah',
    dates: '1955–2023',
    era: 'Contemporary non-fiction',
    bio: 'Sri Lankan-born British BBC journalist, broadcaster and author. Reported from sub-Saharan Africa for the BBC for many years; later anchor of BBC News at Six. Died on 24 July 2023.',
    keyWorks: [
      'A Passage to Africa (2001) — memoir extracted in the Edexcel IGCSE Language anthology',
    ],
    examNote:
      "Rights to Alagiah's work are now held by his estate via Pearson Education. Quote only short fair-dealing extracts.",
  },
]

/* ─── Components ─────────────────────────────────────────────── */

function AuthorCard({ author }: { author: AuthorEntry }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md">
      <header className="mb-3">
        <h3 className="text-lg font-bold text-foreground">{author.name}</h3>
        <p className="text-sm text-muted-foreground">
          {author.dates} &middot; {author.era}
        </p>
      </header>

      <p className="text-sm leading-relaxed text-muted-foreground">{author.bio}</p>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Key works
        </h4>
        <ul className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
          {author.keyWorks.map((work) => (
            <li key={work} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              <span>{work}</span>
            </li>
          ))}
        </ul>
      </div>

      {author.examNote && (
        <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Exam note</p>
          <p className="mt-1 text-sm text-muted-foreground">{author.examNote}</p>
        </div>
      )}

      {author.commonError && (
        <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-destructive">
            Common error
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{author.commonError}</p>
        </div>
      )}

      {author.studyLinks && author.studyLinks.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {author.studyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}

function AuthorSection({
  id,
  title,
  description,
  authors,
}: {
  id: string
  title: string
  description: string
  authors: AuthorEntry[]
}) {
  return (
    <section id={id} className="mb-16">
      <header className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{description}</p>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {authors.map((author) => (
          <AuthorCard key={author.name} author={author} />
        ))}
      </div>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function AuthorsHubPage() {
  const totalAuthors =
    NOVELISTS_DRAMATISTS.length +
    ROMANTIC_VICTORIAN_POETS.length +
    TWENTIETH_CENTURY_POETS.length +
    NON_FICTION_AUTHORS.length

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Authors & Poets
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Verified Author Biographies
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Concise, exam-ready bios for every novelist, dramatist and poet on the GCSE and IGCSE
            specifications. Dates, key works, and the common factual errors students make in essays.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-3.5 py-1 font-medium">
              {totalAuthors} authors
            </span>
            <span className="text-border">&middot;</span>
            <span className="rounded-full border border-border bg-card px-3.5 py-1 font-medium">
              All UK boards
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <AuthorSection
          id="novelists-dramatists"
          title="Novelists & Dramatists"
          description="Set-text authors for GCSE and IGCSE Literature Paper 1 and Paper 2."
          authors={NOVELISTS_DRAMATISTS}
        />

        <AuthorSection
          id="romantic-victorian-poets"
          title="Romantic & Victorian Poets"
          description="Pre-twentieth-century poets across the Power & Conflict, Love & Relationships, Edexcel and OCR anthologies."
          authors={ROMANTIC_VICTORIAN_POETS}
        />

        <AuthorSection
          id="twentieth-century-poets"
          title="Twentieth-Century & Contemporary Poets"
          description="Modern and contemporary anthology poets — most under active copyright."
          authors={TWENTIETH_CENTURY_POETS}
        />

        <AuthorSection
          id="non-fiction"
          title="Non-Fiction & Anthology Authors"
          description="Memoirists and journalists whose extracts appear on IGCSE Language anthology specifications."
          authors={NON_FICTION_AUTHORS}
        />

        <aside className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="text-lg font-bold text-foreground">How to use author context in essays</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Don&apos;t bolt biographical paragraphs on top of analysis. Weave a single, precise
            contextual fact into a sentence about meaning &mdash; for example, &quot;Writing in the
            immediate aftermath of the Crimean War, Tennyson&hellip;&quot; or &quot;Owen, killed in
            action one week before the Armistice, &hellip;&quot;. Generic life-and-times paragraphs
            lose AO3 marks.
          </p>
        </aside>
      </section>
    </main>
  )
}
