import type { ExamBoard } from './board-store'

export type TextCategory =
  | 'shakespeare'
  | '19th-century'
  | 'modern'
  | 'poetry-anthology'
  | 'non-fiction'
  | 'prose'

export type SetText = {
  slug: string
  title: string
  author: string
  category: TextCategory
  boards: ExamBoard[] // which boards study this text
  copyrightStatus: 'public-domain' | 'copyright'
  description?: string
  keyThemes?: string[]
  /** Optional period / publication year for anthology entries */
  year?: string
  /**
   * Optional UK-specific rights notice. Used for texts that are public-domain in
   * one jurisdiction (e.g. the United States) but still in copyright in the UK.
   * Renders on the study-guide page so students using overseas revision resources
   * understand what is and is not redistributable on the UK platform.
   */
  ukRightsNotice?: string
}

export const SET_TEXTS: SetText[] = [
  // ── Shakespeare ───────────────────────────────────────────────────────────
  {
    slug: 'macbeth',
    title: 'Macbeth',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'romeo-and-juliet',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'much-ado-about-nothing',
    title: 'Much Ado About Nothing',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-merchant-of-venice',
    title: 'The Merchant of Venice',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-tempest',
    title: 'The Tempest',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'edexcel', 'ocr-a-level', 'eduqas-a-level'], // OCR prescribes four Shakespeare plays and this is not one. Edexcel does prescribe it.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'julius-caesar',
    title: 'Julius Caesar',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'othello',
    title: 'Othello',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: [
      'eduqas',
      'aqa-a-level',
      'edexcel-a-level',
      'ocr-a-level',
      'eduqas-a-level',
      'ial-edexcel',
    ],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'henry-v',
    title: 'Henry V',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: [], // Eduqas replaced it with Twelfth Night for assessment from 2025; no board we cover examines it at GCSE. Deliberately empty rather than guessed.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'twelfth-night',
    title: 'Twelfth Night',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['edexcel', 'eduqas', 'ial-edexcel', 'edexcel-a-level'], // Eduqas added it for assessment from 2025, replacing Henry V.
    copyrightStatus: 'public-domain',
  },

  // ── 19th-Century Novels ───────────────────────────────────────────────────
  {
    slug: 'a-christmas-carol',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'], // OCR added it in August 2018 and we never picked it up.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'jekyll-and-hyde',
    title: 'Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'great-expectations',
    title: 'Great Expectations',
    author: 'Charles Dickens',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'ial-edexcel', 'edexcel-igcse'], // Prescribed by Edexcel and OCR as well; both were missing.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'jane-eyre',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'aqa-a-level', 'ocr-a-level'], // Prescribed by Edexcel and Eduqas as well; both were missing.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ial-edexcel', 'edexcel-a-level', 'ocr-a-level'], // Zero occurrences of Frankenstein in the OCR J352 specification.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse', 'cambridge-0475'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-sign-of-four',
    title: 'The Sign of Four',
    author: 'Arthur Conan Doyle',
    category: '19th-century',
    boards: ['aqa'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'silas-marner',
    title: 'Silas Marner',
    author: 'George Eliot',
    category: '19th-century',
    boards: ['edexcel', 'eduqas'], // AQA does not prescribe it: the spec contains no occurrence of Silas or Eliot.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-war-of-the-worlds',
    title: 'The War of the Worlds',
    author: 'H.G. Wells',
    category: '19th-century',
    boards: ['ocr', 'eduqas', 'edexcel-a-level'],
    copyrightStatus: 'public-domain',
  },

  // ── Modern Texts ──────────────────────────────────────────────────────────
  {
    slug: 'an-inspector-calls',
    title: 'An Inspector Calls',
    author: 'J.B. Priestley',
    category: 'modern',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'lord-of-the-flies',
    title: 'Lord of the Flies',
    author: 'William Golding',
    category: 'modern',
    boards: ['aqa', 'edexcel', 'eduqas'], // Zero occurrences of Golding in OCR J352. Edexcel does prescribe it, in the post-1914 list.
    copyrightStatus: 'copyright',
  },
  {
    slug: 'animal-farm',
    title: 'Animal Farm',
    author: 'George Orwell',
    category: 'modern',
    boards: ['aqa', 'edexcel', 'ocr'],
    // Orwell died on 21 January 1950, so the UK copyright ended on 31 December
    // 2020. Marked 'copyright' until 26 September 2026 because the novella is
    // still in copyright in the United States; the site works to UK law only,
    // as it does for 'Out, Out-' the other way round.
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'of-mice-and-men',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'to-kill-a-mockingbird',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'modern',
    boards: ['edexcel-igcse', 'cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'things-fall-apart',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    category: 'modern',
    boards: ['edexcel-igcse', 'cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'a-view-from-the-bridge',
    title: 'A View from the Bridge',
    author: 'Arthur Miller',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'curious-incident',
    title: 'The Curious Incident of the Dog in the Night-Time',
    // CORRECTED 25 September 2026. Both boards that set this text prescribe
    // Simon Stephens's stage adaptation: the 4ET1 specification lists it under
    // Modern Drama as "Mark Haddon (adapted by Simon Stephens)".
    author: 'Mark Haddon, adapted for the stage by Simon Stephens',
    category: 'modern',
    boards: ['edexcel-igcse', 'eduqas'], // Eduqas prescribes the Simon Stephens play script (Bloomsbury, ISBN 978-1-4081-8521-6); the tag was missing.
    copyrightStatus: 'copyright',
  },
  {
    slug: 'blood-brothers',
    title: 'Blood Brothers',
    author: 'Willy Russell (b. 1947)',
    category: 'modern',
    boards: ['aqa', 'edexcel', 'eduqas'], // AQA prescribes the musical version; the tag was missing.
    copyrightStatus: 'copyright',
    ukRightsNotice:
      'Rights notice: © Methuen Drama / Bloomsbury Publishing on behalf of Willy Russell. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Methuen Drama Modern Classics edition or the AQA / Eduqas board-licensed school edition.',
  },
  {
    slug: 'anita-and-me',
    title: 'Anita and Me',
    author: 'Meera Syal',
    category: 'modern',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'pigeon-english',
    title: 'Pigeon English',
    author: 'Stephen Kelman',
    category: 'modern',
    boards: ['aqa'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'never-let-me-go',
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    category: 'modern',
    boards: ['ocr', 'ial-edexcel', 'edexcel-a-level'], // AQA examined it for the last time in summer 2024. OCR does prescribe it, and we were not tagging the one board that still teaches it.
    copyrightStatus: 'copyright',
  },

  // ── A-Level - Shakespeare tragedies & histories ────────────────────────────
  {
    slug: 'hamlet',
    title: 'Hamlet',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'king-lear',
    title: 'King Lear',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'antony-and-cleopatra',
    title: 'Antony and Cleopatra',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['edexcel-a-level', 'eduqas-a-level', 'cambridge-0475'],
    copyrightStatus: 'public-domain',
  },

  // ── A-Level - Modernist & 20th-century ─────────────────────────────────────
  {
    slug: 'the-waste-land',
    title: 'The Waste Land',
    author: 'T.S. Eliot',
    category: 'poetry-anthology',
    boards: ['edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'a-streetcar-named-desire',
    title: 'A Streetcar Named Desire',
    author: 'Tennessee Williams',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-handmaids-tale',
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-great-gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'modern',
    boards: ['aqa-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'a-dolls-house',
    title: "A Doll's House",
    author: 'Henrik Ibsen',
    category: 'modern',
    boards: ['aqa-a-level', 'ocr-a-level'],
    copyrightStatus: 'public-domain',
  },

  // ── Pearson Edexcel IGCSE English Language A (4EA1) Anthology ──────────────
  //
  // RIGHTS NOTICES CORRECTED 26 September 2026 against the anthology's own
  // acknowledgements (Issue 8, pages 71 to 73). Many named Pearson Education
  // or a publisher as the copyright holder "on behalf of" the writer, or an
  // estate "via Pearson Education". Pearson owns the compilation, not these
  // works, and the acknowledgements name the writer (or estate) as holder and
  // say whose permission the text is printed by. Write a new notice from that
  // page, not by copying a neighbouring row: that is how the wrong holder
  // spread.
  //
  // Section A - Non-fiction (10 texts)
  {
    slug: 'the-danger-of-a-single-story',
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie (b. 1977)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2009',
    keyThemes: ['Identity', 'Stereotypes', 'Cultural representation', 'Power of stories'],
    description:
      "Adichie's TED talk arguing that reducing any people, place or culture to a single story dispossesses them of full humanity, and that many stories are needed to see the world honestly.",
    // The holder and permission match the acknowledgements. Until 26 September
    // 2026 this sent students to an "Edexcel-licensed school edition": Pearson
    // publishes the anthology free as a PDF.
    ukRightsNotice:
      'Rights notice: © Chimamanda Ngozi Adichie 2009, reproduced in the anthology by permission of The Wylie Agency (UK). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the anthology (ISBN 978-1-446-93108-0), which Pearson publishes free as a PDF, or the original TEDGlobal 2009 talk transcript.',
  },
  {
    slug: 'a-passage-to-africa',
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955-2023)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2001',
    keyThemes: ['Suffering', 'Empathy', 'Guilt', 'Media ethics'],
    description:
      "George Alagiah (1955-2023) was a Sri Lankan-born British BBC journalist and broadcaster. In this memoir extract, Alagiah recalled reporting on famine in Somalia and the moment one man's apologetic smile forced him to question how journalism turns suffering into spectacle.",
    ukRightsNotice:
      'Rights notice: © George Alagiah 2001, reproduced in the anthology by permission of Little, Brown Book Group and the author c/o The Hanbury Agency. Short fair-dealing extracts; full anthology selections require an Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'the-explorers-daughter',
    title: "The Explorer's Daughter",
    author: 'Kari Herbert (b. 1970)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2004',
    keyThemes: ['Nature', 'Tradition', 'Survival', 'Moral conflict'],
    description:
      "Herbert watches Inuit hunters pursue narwhal in the Arctic and reflects on the tension between her instinctive sympathy for the whales and the community's need to hunt to survive.",
    ukRightsNotice:
      'Rights notice: © Kari Herbert 2004, reproduced in the anthology by permission of Aitken Alexander Associates. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'explorers-or-boys-messing-about',
    title: 'Explorers, or boys messing about?',
    author: 'Steven Morris',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2003',
    keyThemes: ['Adventure', 'Risk', 'Responsibility', 'Public criticism'],
    description:
      'Originally published in The Guardian, 28 January 2003; adapted for the Edexcel anthology by Pearson. The article reports the rescue of two British explorers whose helicopter ditched in the sea off Antarctica, and the public debate over whether their expedition was bravery or recklessness.',
    ukRightsNotice:
      'Anthology version warning: This text is an adapted version printed in the Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0). The freely-available Guardian original (linked from many revision sites) differs in cuts, re-orderings, and minor word choice. Always use the anthology version when answering Edexcel exam questions - examiners will mark against the anthology text. Originally published in The Guardian, 28 January 2003; adapted for the Edexcel anthology by Pearson. © Guardian News & Media Ltd. Short fair-dealing extracts only.',
  },
  {
    slug: 'between-a-rock-and-a-hard-place',
    title: 'Between a Rock and a Hard Place',
    author: 'Aron Ralston (b. 1975)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2004',
    keyThemes: ['Survival', 'Isolation', 'Determination', 'Nature'],
    // CORRECTED 26 September 2026. This said he amputated his own arm. The
    // anthology extract ends minutes after the boulder traps it, with his
    // first attempts to shift the rock; the amputation is not in it.
    description:
      'Ralston recounts the moment a falling boulder crushed his hand and trapped his arm in a remote Utah canyon, and his first desperate attempts to free himself - a meditation on solitude, willpower and the limits of the body.',
    ukRightsNotice:
      'Rights notice: © Aron Ralston 2004. The anthology prints the extract from the Simon & Schuster 2010 edition, by permission of Simon & Schuster UK and Atria Books, a division of Simon & Schuster, Inc. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'young-and-dyslexic',
    title: "Young and dyslexic? You've got it going on",
    author: 'Benjamin Zephaniah (1958-2023)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2015',
    keyThemes: ['Education', 'Identity', 'Disability', 'Self-belief'],
    // Until 26 September 2026 this said rights to his work "are now held by
    // his estate" (the anthology names no estate, only permission from Jessica
    // Kingsley Publishers, as the notice below says) and called the text
    // "originally" a Guardian piece, when the anthology's headnote says the
    // Guardian article was adapted from his contribution to a 2015 book.
    description:
      'Benjamin Zephaniah (1958-2023) was a British dub poet and rights campaigner; he died on 7 December 2023. The text is a Guardian article (2 October 2015) adapted from his contribution to Creative, Successful, Dyslexic (2015), and has been adapted for the Edexcel anthology - the printed version differs from the freely-available online original in cuts and re-orderings. In it, Zephaniah wrote about growing up labelled as stupid because of dyslexia, and argued that creative thinking and refusal to be defined by an educational system are strengths.',
    ukRightsNotice:
      'Anthology version warning: This text is an adapted version printed in the Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0). The freely-available Guardian original (linked from many revision sites) differs in cuts, re-orderings, and minor word choice. Always use the anthology version when answering Edexcel exam questions - examiners will mark against the anthology text. Rights notice: the anthology prints no copyright line for this article, only that it is reproduced by permission of Jessica Kingsley Publishers. Quotations are short fair-dealing extracts.',
  },
  {
    slug: 'a-game-of-polo-with-a-headless-goat',
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2000',
    keyThemes: ['Culture', 'Spectacle', 'Tradition', 'Travel writing'],
    // CORRECTED 25 September 2026. The description said the text was about
    // buzkashi, the sport in the book's title. The anthology extract is Levine
    // filming a donkey-cart race on a main road in Karachi; buzkashi is not in
    // it. The publisher was André Deutsch (2000), not Little, Brown.
    //
    // CORRECTED 26 September 2026: "illegal" removed. The extract never says
    // the race is illegal; it shows traffic rules flouted, bookmakers and an
    // underage driver, and the study guide says so.
    description:
      "Levine's account of filming a donkey-cart race along a main road in Karachi, from the long wait to the chaotic chase that follows it.",
    ukRightsNotice:
      'Rights notice: © Emma Levine 2000, reproduced in the anthology by permission of Carlton Publishing Group. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'beyond-the-sky-and-the-earth',
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa (b. 1965)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1999',
    keyThemes: ['Culture shock', 'Isolation', 'Beauty', 'Transformation'],
    description:
      "Zeppa's memoir of arriving as a young Canadian teacher in remote Bhutan, and how the strangeness of the landscape and language slowly reshaped her sense of home.",
    ukRightsNotice:
      'Rights notice: © Jamie Zeppa 1999, reproduced in the anthology by permission of The McDermid Agency, Riverhead (Penguin Random House) and Doubleday Canada. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'h-is-for-hawk',
    title: 'H is for Hawk',
    author: 'Helen Macdonald (b. 1970)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2014',
    keyThemes: ['Grief', 'Nature', 'Obsession', 'Identity'],
    // CORRECTED 26 September 2026. The description was of the memoir
    // ("training a goshawk"); the extract is the handover on the quayside and
    // ends before any training. The notice sent students to an
    // "Edexcel-licensed school edition": Pearson publishes the anthology free
    // as a PDF. Holder and permission already matched the acknowledgements.
    description:
      'In the anthology extract from her memoir, Macdonald, whose father has died, meets the goshawk she has come to collect from a breeder, prefers the smaller bird meant for someone else, and asks to swap.',
    ukRightsNotice:
      'Rights notice: © Helen Macdonald 2014, reproduced in the anthology by permission of The Random House Group and Grove/Atlantic. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the anthology (ISBN 978-1-446-93108-0), which Pearson publishes free as a PDF.',
  },
  {
    slug: 'chinese-cinderella',
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah (b. 1937)',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1999',
    keyThemes: ['Family', 'Rejection', 'Resilience', 'Identity'],
    description:
      'Yen Mah recalls her childhood in mid-twentieth-century China as the unwanted daughter blamed for her mother’s death, and how academic success became her way of being seen.',
    ukRightsNotice:
      'Rights notice: © Adeline Yen Mah 1999, reproduced in the anthology by permission of Penguin Books, Delacorte Press (Random House Children’s Books) and Penguin Random House Australia. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },

  // Poetry. This heading read "Section B - Poetry (15 poems)" until 26
  // September 2026. The first five rows are the anthology's Part 2 poems
  // (4EA1, Unit 2 Section A); most of the rest are Part 3 poems, set for
  // English Literature (4ET1) only, and Refugee Blues is in no anthology.
  // Each row's boards say where it is set.
  {
    slug: 'disabled',
    title: 'Disabled',
    author: 'Wilfred Owen',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1917',
    keyThemes: ['War', 'Loss of youth', 'Isolation', 'Disability'],
    // CORRECTED 26 September 2026. This said he enlisted before he had
    // started shaving, which is not in the poem. What the poem says is that
    // he lied about his age and the recruiters wrote the lie down.
    description:
      'A young soldier, now a multiple amputee, sits in a wheelchair at dusk and remembers the careless decisions and patriotic pressure that led him to lie about his age and enlist.',
  },
  {
    slug: 'out-out',
    title: "'Out, Out-'",
    author: 'Robert Frost',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'ocr', 'edexcel-a-level'],
    // Frost died 1963; UK copyright (CDPA 1988 §12: life + 70 years) expires
    // 31 December 2033. Public domain in the United States, but NOT in the UK.
    copyrightStatus: 'copyright',
    year: '1916',
    keyThemes: ['Death', 'Childhood', 'Indifference of nature', 'Work'],
    // CORRECTED 26 September 2026. This called it a Vermont farm. The poem
    // does not place the farm in Vermont; the view from the yard stretches
    // into Vermont.
    description:
      'A boy doing chores on a farm loses his hand to a buzz-saw and dies; the watching adults, after a brief shock, "turn[] to their affairs". Frost’s title quotes Macbeth.',
    ukRightsNotice:
      'Rights notice (UK): Frost died 1963; UK copyright expires 31 December 2033. Quotations are short fair-dealing extracts. Frost is public domain in the United States, but not in the UK - students using overseas revision resources should be aware that those reproductions are not redistributable in the UK platform.',
  },
  {
    slug: 'an-unknown-girl',
    title: 'An Unknown Girl',
    author: 'Moniza Alvi (b. 1954)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1996',
    keyThemes: ['Identity', 'Heritage', 'Belonging', 'Cultural connection'],
    description:
      'In an Indian bazaar, the speaker has her hand decorated with henna by a girl she does not know; the temporary pattern becomes a meditation on her own divided sense of cultural identity.',
    ukRightsNotice:
      'Rights notice: © Moniza Alvi, reproduced in the anthology by permission of Bloodaxe Books on behalf of the author. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Alvi’s collection Carrying My Wife (2000).',
  },
  {
    slug: 'the-bright-lights-of-sarajevo',
    title: 'The Bright Lights of Sarajevo',
    // Harrison died on 26 September 2025 (his publisher Bloodaxe's obituary
    // notice; Wikipedia agrees). This read "b. 1937" until 26 September 2026.
    author: 'Tony Harrison (1937-2025)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1995',
    keyThemes: ['War', 'Resilience', 'Love', 'Hope'],
    description:
      'Harrison reports from besieged Sarajevo, where young couples flirt in the dark streets between sniper fire and shell craters - the persistence of ordinary life inside war.',
    ukRightsNotice:
      'Rights notice: © Tony Harrison, reproduced in the anthology by kind permission of Tony Harrison. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0). Note: the anthology layout uses extra stanza breaks not in the original 1995 Guardian text or the Bloodaxe collected edition - students should revise from the anthology.',
  },
  {
    slug: 'still-i-rise',
    title: 'Still I Rise',
    author: 'Maya Angelou (1928-2014)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1978',
    keyThemes: ['Defiance', 'Race', 'Resilience', 'Female strength'],
    description:
      'Angelou addresses an oppressor directly and refuses to be broken by hatred, history or contempt; the refrain "I rise" enacts the unbreakable spirit she describes.',
    ukRightsNotice:
      'Rights notice: © Random House / Penguin Random House on behalf of the Maya Angelou estate (1928-2014). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Angelou’s collection And Still I Rise (1978).',
  },
  {
    slug: 'do-not-go-gentle-into-that-good-night',
    title: 'Do not go gentle into that good night',
    author: 'Dylan Thomas (1914-1953)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    // Thomas died on 9 November 1953: out of UK copyright since 1 January 2024.
    // Marked 'copyright' until 26 September 2026 for its US status; the site
    // works to UK law only.
    copyrightStatus: 'public-domain',
    year: '1951',
    keyThemes: ['Death', 'Defiance', 'Fatherhood', 'Grief'],
    description:
      "A son's villanelle urging his dying father to resist death with rage and fire rather than accept it quietly; the circling repetitions enact the refusal to let go.",
    ukRightsNotice:
      'Rights notice: © David Higham Associates on behalf of the Dylan Thomas estate (1914-1953). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Thomas’s Collected Poems (Dent / Weidenfeld).',
  },
  {
    slug: 'refugee-blues',
    title: 'Refugee Blues',
    author: 'W.H. Auden (1907-1973)',
    category: 'poetry-anthology',
    // NOT PRESCRIBED BY ANY SPECIFICATION WE HAVE READ. This text carried an
    // `edexcel-igcse-lang` tag until 19 September 2026. It is verifiably not in
    // the Pearson Edexcel International GCSE English Anthology, Issue 8,
    // February 2026, whose three parts are established in full, and it is not in
    // Cambridge 0475 for 2026, 2027 or 2028-2030 either - that hypothesis was
    // tested and falsified. Where it does belong is not established.
    //
    // The tag is gone rather than left pending, because "we do not know where
    // this belongs" and "this is on your exam" are different statements and only
    // the first is true. A founder clicking through IGCSE Language found this
    // text on the shelf and followed it out of the qualification entirely.
    // The guide stays reachable at /revision/texts and from the all-texts index.
    boards: [],
    copyrightStatus: 'copyright',
    year: '1939',
    keyThemes: ['Displacement', 'Persecution', 'Statelessness', 'Antisemitism'],
    description:
      'Two German-Jewish refugees walk through New York on the eve of the Second World War, finding everywhere shut to them; the blues form gives political horror a quietly mournful music.',
    ukRightsNotice:
      'Rights notice: © Curtis Brown / Faber & Faber on behalf of the W.H. Auden estate (1907-1973; UK copyright runs to 2044). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). The full poem is in Auden’s Collected Poems (Faber). It is not in the Pearson Edexcel International GCSE English Anthology, which earlier versions of this notice named.',
  },
  {
    slug: 'war-photographer',
    title: 'War Photographer',
    author: 'Carol Ann Duffy (b. 1955)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse', 'aqa'],
    copyrightStatus: 'copyright',
    year: '1985',
    keyThemes: ['War', 'Suffering', 'Moral responsibility', 'Detachment'],
    description:
      'A war photographer develops his pictures alone in a darkroom in rural England, caught between the horrors he has witnessed abroad and the brief sympathy of distant readers.',
    ukRightsNotice:
      'Rights notice: © Picador / Pan Macmillan and Rogers Coleridge & White on behalf of Carol Ann Duffy. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Duffy’s collection Standing Female Nude (1985).',
  },
  {
    slug: 'if',
    title: 'If-',
    author: 'Rudyard Kipling',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1910',
    keyThemes: ['Stoicism', 'Identity', 'Growing up', 'Self-control'],
    description:
      'A father addresses his son and lists the qualities - composure, integrity, persistence, humility - required to live a balanced and honourable life and finally become "a Man".',
  },
  {
    slug: 'prayer-before-birth',
    title: 'Prayer Before Birth',
    author: 'Louis MacNeice (1907-1963)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1944',
    keyThemes: ['Innocence', 'Fear of the world', 'War', 'Dehumanisation'],
    description:
      "An unborn child pleads to be protected from the violence, dehumanisation and moral corruption of the adult world; the prayer's mounting urgency reflects mid-war anxiety.",
    ukRightsNotice:
      'Rights notice: © The Estate of Louis MacNeice (1907-1963), 1966 and 1979, reproduced in the anthology by permission of David Higham Associates. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or MacNeice’s Collected Poems (Faber).',
  },
  {
    slug: 'piano',
    title: 'Piano',
    author: 'D.H. Lawrence',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1918',
    keyThemes: ['Nostalgia', 'Memory', 'Motherhood', 'Loss of childhood'],
    description:
      "A woman's singing pulls the adult speaker helplessly back into childhood memories of his mother at the piano on Sunday evenings; the present is overwhelmed by the past.",
  },
  {
    slug: 'hide-and-seek',
    title: 'Hide and Seek',
    author: 'Vernon Scannell (1922-2007)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
    // CORRECTED 26 September 2026 from '1984'. The poem is in Walking Wounded
    // (1965), per LitCharts; Wikipedia dates that collection 1965. The
    // anthology prints it from Collected Poems 1950-1993 (Faber & Faber, 2011).
    year: '1965',
    keyThemes: ['Childhood', 'Isolation', 'Betrayal', 'Imagination'],
    description:
      'A child hiding in an ingenious spot waits to be found, only to discover with a jolt that the others have already gone and the hider is alone in the dark.',
    ukRightsNotice:
      'Rights notice: the anthology reproduces the poem, from Collected Poems 1950-1993 (Faber & Faber, 2011), by permission of the Estate of Vernon Scannell (1922-2007). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'half-past-two',
    title: 'Half-past Two',
    author: 'U.A. Fanthorpe (1929-2009)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1992',
    keyThemes: ['Childhood', 'Time', 'Authority', 'Innocence'],
    description:
      'A small boy kept in the schoolroom as a punishment becomes lost in a timeless world because he cannot yet read a clock, and a careless punishment becomes an accidental gift of escape.',
    ukRightsNotice:
      'Rights notice: © Peterloo Poets / Enitharmon on behalf of the U.A. Fanthorpe estate (1929-2009). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'my-last-duchess',
    title: 'My Last Duchess',
    author: 'Robert Browning',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse', 'aqa', 'edexcel', 'ial-edexcel', 'aqa-a-level', 'edexcel-a-level'],
    copyrightStatus: 'public-domain',
    year: '1842',
    keyThemes: ['Power', 'Jealousy', 'Control', 'Possession'],
    description:
      'A Renaissance Duke shows a portrait of his late wife to a marriage envoy and reveals, through a calm dramatic monologue, how he had her silenced for smiling too freely.',
  },
  {
    slug: 'sonnet-116',
    title: 'Sonnet 116',
    author: 'William Shakespeare',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1609',
    keyThemes: ['Love', 'Constancy', 'Time', 'Faithfulness'],
    description:
      'A meditation on true love as an "ever-fixed mark" that cannot be altered by time, circumstance or trouble; love that changes when it finds change is, the speaker insists, not love at all.',
  },

  // Prose, and texts set nowhere we cover. This heading read "Section C - Prose
  // (10 short stories)" until 26 September 2026. The anthology has no Section C
  // (its parts are Unit 1 Section A, Unit 2 Section A and Unit 1 Section B), and
  // several rows below are in no anthology at all: each row's own comment says
  // where it is set.
  {
    slug: 'the-door',
    title: 'The Door',
    author: 'Miroslav Holub (1923-1998)',
    category: 'poetry-anthology',
    // CORRECTED 26 September 2026. Until then this row described a short story
    // by E.M. Forster, dated 1911, about an office worker who finds a door in
    // the underground onto a meadow, with a rights notice naming the Forster
    // estate and pointing to the Pearson anthology's ISBN. Forster wrote no
    // story called The Door (his four collections were checked), the summary
    // matches none of his work (it reads like H.G. Wells's The Door in the
    // Wall), and the anthology prints no such text. Every word of it was
    // invented. The guide this slug has always led to, at
    // /resources/revision-notes/the-door, is about Miroslav Holub's poem, so
    // the row now describes that.
    //
    // Sources: Holub's dates, Wikipedia and Poetry by Heart. The translator
    // (Ian Milner alone, tagged [IM] under the poem) from Bloodaxe's Poems
    // Before & After (1990), p. 64. The Czech original, "Dveře", opening the
    // collection Jdi a otevři dveře (Mladá fronta, 1961), from the Czech
    // bibliography of Holub's work. Bloodaxe as UK publisher, from its own
    // catalogue and the Scottish Poetry Library's permission line.
    //
    // NOT PRESCRIBED BY ANY SPECIFICATION WE HAVE READ, checked again on
    // 26 September 2026 against AQA 8702, Edexcel 1ET0, the Pearson
    // International GCSE anthology (Issue 8), OCR J352, Eduqas C720, WJEC,
    // CCEA, Cambridge 0475 and 0992, and the IB prescribed list. Hence no
    // boards: the guide is unseen-poetry practice, and says so.
    boards: [],
    copyrightStatus: 'copyright',
    year: '1961',
    keyThemes: ['Curiosity', 'Risk and fear', 'Freedom', 'Hope without illusion'],
    description:
      'A short free-verse poem that urges the reader, again and again, to open a door, while admitting honestly that there may be nothing worth seeing on the other side.',
    ukRightsNotice:
      "Rights notice: the poem and Ian Milner's English translation are in UK copyright (Holub died in 1998). The translation is published in the UK by Bloodaxe Books in Poems Before & After: Collected English Translations. Quotations here are short fair-dealing extracts for criticism and review under CDPA 1988 s.30; read the full poem in that collection.",
  },
  {
    slug: 'the-necklace',
    title: 'The Necklace',
    author: 'Guy de Maupassant',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    // CORRECTED 25 September 2026 from 'public-domain'. Maupassant's French is
    // out of copyright; the text the anthology prints is David Coward's
    // translation, which is not. The older free translations are not the
    // prescribed text. Marked by the words a student actually studies.
    copyrightStatus: 'copyright',
    ukRightsNotice:
      'Rights notice: the anthology prints the translation by David Coward, which is in copyright. Quotations are short fair-dealing extracts under CDPA 1988 s.30 (criticism and review). Older translations that are freely available online are not the prescribed text, and their wording differs.',
    year: '1884',
    keyThemes: ['Vanity', 'Class', 'Pride', 'Ironic reversal'],
    description:
      'A vain young Parisian woman borrows a diamond necklace for a single glittering ball, loses it, and spends ten brutalising years repaying its cost - only to learn the truth at the end.',
  },
  {
    slug: 'significant-cigarettes',
    title: 'Significant Cigarettes',
    author: 'Rose Tremain (b. 1943)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2007',
    keyThemes: ['Migration', 'Loneliness', 'Hope', 'Memory'],
    description:
      'On a long coach journey from rural Eastern Europe to London, a migrant worker named Lev contemplates the past he is leaving and the precarious future ahead.',
    ukRightsNotice:
      'Rights notice: © Rose Tremain 2007, reproduced in the anthology by permission of The Random House Group and Little, Brown and Company. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Tremain’s novel The Road Home (2007).',
  },
  {
    slug: 'whistle-and-ill-come-to-you',
    // CORRECTED 25 September 2026. This row said M.R. James's 1904 ghost story
    // "Oh, Whistle, and I'll Come to You, My Lad", public domain, with a
    // description of its plot. The Pearson Edexcel International GCSE English
    // Anthology (Issue 8, February 2026) prints the chapter "Whistle and I'll
    // Come to You" from Susan Hill's The Woman in Black (1983), which is in
    // copyright. A guide written from the old row would have analysed the wrong
    // story and, marked public domain, could have published James's in full as
    // though it were the prescribed text. See edexcel-igcse-anthology.ts.
    title: "Whistle and I'll Come to You (from The Woman in Black)",
    author: 'Susan Hill (b. 1942)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1983',
  },
  {
    slug: 'night',
    // CORRECTED 25 September 2026. This row credited Bernard MacLaverty and
    // described an elderly woman listening to a neighbour through the floor.
    // The anthology (Issue 8) prints Alice Munro's "Night", from Dear Life
    // (2012), and the description matched neither story. The description and
    // themes are removed rather than rewritten from memory; the study guide
    // for this text is the verified account.
    title: 'Night',
    author: 'Alice Munro (1931-2024)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2012',
  },
  {
    slug: 'the-pedestrian',
    title: 'The Pedestrian',
    author: 'Ray Bradbury (1920-2012)',
    category: 'prose',
    // NOT PRESCRIBED BY ANY SPECIFICATION WE HAVE READ. This text carried an
    // `edexcel-igcse-lang` tag until 19 September 2026. It is verifiably not in
    // the Pearson Edexcel International GCSE English Anthology, Issue 8,
    // February 2026, whose three parts are established in full, and it is not in
    // Cambridge 0475 for 2026, 2027 or 2028-2030 either - that hypothesis was
    // tested and falsified. Where it does belong is not established.
    //
    // The tag is gone rather than left pending, because "we do not know where
    // this belongs" and "this is on your exam" are different statements and only
    // the first is true. A founder clicking through IGCSE Language found this
    // text on the shelf and followed it out of the qualification entirely.
    // The guide stays reachable at /revision/texts and from the all-texts index.
    boards: [],
    copyrightStatus: 'copyright',
    year: '1951',
    keyThemes: ['Conformity', 'Technology', 'Isolation', 'Dystopia'],
    description:
      "In a future city where everyone watches television indoors, a man's nightly walks alone become so unusual that an automated police car arrests him for being on the street.",
    ukRightsNotice:
      // Until 25 September 2026 this named Pearson as a rights holder and sent
      // students to the Edexcel anthology (ISBN 978-1-446-93108-0), which does
      // not contain this story. Checked against the anthology PDF, Issue 8.
      'Rights notice: © the Ray Bradbury estate (1920-2012). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). The full story is in Bradbury’s collection The Golden Apples of the Sun (1953). It is not in the Pearson Edexcel International GCSE English Anthology.',
  },
  {
    slug: 'the-yellow-wallpaper',
    title: 'The Yellow Wall Paper',
    author: 'Charlotte Perkins Gilman',
    category: 'prose',
    // NOT PRESCRIBED BY ANY SPECIFICATION WE HAVE READ. This text carried an
    // `edexcel-igcse-lang` tag until 19 September 2026. It is verifiably not in
    // the Pearson Edexcel International GCSE English Anthology, Issue 8,
    // February 2026, whose three parts are established in full, and it is not in
    // Cambridge 0475 for 2026, 2027 or 2028-2030 either - that hypothesis was
    // tested and falsified. Where it does belong is not established.
    //
    // The tag is gone rather than left pending, because "we do not know where
    // this belongs" and "this is on your exam" are different statements and only
    // the first is true. A founder clicking through IGCSE Language found this
    // text on the shelf and followed it out of the qualification entirely.
    // The guide stays reachable at /revision/texts and from the all-texts index.
    boards: [],
    copyrightStatus: 'public-domain',
    year: '1892',
    keyThemes: ['Mental health', 'Patriarchy', 'Confinement', 'Female autonomy'],
    description:
      "A woman confined to a single bedroom by her physician husband as a 'rest cure' becomes obsessed with the patterns in the wallpaper, in a story that pioneered feminist psychological fiction.",
  },
  {
    slug: 'when-greek-meets-greek',
    title: 'When Greek Meets Greek',
    author: 'Sam Selvon (1923-1994)',
    category: 'prose',
    // NOT PRESCRIBED BY ANY SPECIFICATION WE HAVE READ. This text carried an
    // `edexcel-igcse-lang` tag until 19 September 2026. It is verifiably not in
    // the Pearson Edexcel International GCSE English Anthology, Issue 8,
    // February 2026, whose three parts are established in full, and it is not in
    // Cambridge 0475 for 2026, 2027 or 2028-2030 either - that hypothesis was
    // tested and falsified. Where it does belong is not established.
    //
    // The tag is gone rather than left pending, because "we do not know where
    // this belongs" and "this is on your exam" are different statements and only
    // the first is true. A founder clicking through IGCSE Language found this
    // text on the shelf and followed it out of the qualification entirely.
    // The guide stays reachable at /revision/texts and from the all-texts index.
    boards: [],
    copyrightStatus: 'copyright',
    year: '1957',
    keyThemes: ['Race', 'Migration', 'Prejudice', 'Survival in Britain'],
    description:
      'A comic but biting story of Caribbean migrants in 1950s London, where two friends pretend to be Indian to navigate the racism of the British housing market.',
    ukRightsNotice:
      // Until 25 September 2026 this named Pearson as a rights holder and sent
      // students to the Edexcel anthology (ISBN 978-1-446-93108-0), which does
      // not contain this story. Checked against the anthology PDF, Issue 8.
      'Rights notice: © the Sam Selvon estate (1923-1994). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). The full story is in Selvon’s collection Ways of Sunlight (1957). It is not in the Pearson Edexcel International GCSE English Anthology.',
  },
  {
    slug: 'the-man-who-loved-flowers',
    title: 'The Man Who Loved Flowers',
    author: 'Stephen King (b. 1947)',
    category: 'prose',
    // NOT PRESCRIBED BY ANY SPECIFICATION WE HAVE READ. This text carried an
    // `edexcel-igcse-lang` tag until 19 September 2026. It is verifiably not in
    // the Pearson Edexcel International GCSE English Anthology, Issue 8,
    // February 2026, whose three parts are established in full, and it is not in
    // Cambridge 0475 for 2026, 2027 or 2028-2030 either - that hypothesis was
    // tested and falsified. Where it does belong is not established.
    //
    // The tag is gone rather than left pending, because "we do not know where
    // this belongs" and "this is on your exam" are different statements and only
    // the first is true. A founder clicking through IGCSE Language found this
    // text on the shelf and followed it out of the qualification entirely.
    // The guide stays reachable at /revision/texts and from the all-texts index.
    boards: [],
    copyrightStatus: 'copyright',
    year: '1977',
    keyThemes: ['Romance and horror', 'Obsession', 'Mental illness', 'Mistaken identity'],
    description:
      "On a beautiful spring evening in 1960s New York, a young man in love walks the streets buying flowers - but his sweet anticipation curdles into something terrifying by the story's end.",
    ukRightsNotice:
      // Until 25 September 2026 this named Pearson as a rights holder and sent
      // students to the Edexcel anthology (ISBN 978-1-446-93108-0), which does
      // not contain this story. Checked against the anthology PDF, Issue 8.
      'Rights notice: © Stephen King. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). The full story is in King’s collection Night Shift (1978). It is not in the Pearson Edexcel International GCSE English Anthology.',
  },
  {
    slug: 'the-story-of-an-hour',
    title: 'The Story of an Hour',
    author: 'Kate Chopin',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1894',
    keyThemes: ['Marriage', 'Female autonomy', 'Freedom', 'Irony'],
    description:
      'A woman is told her husband has been killed in a train accident and, alone in her room, slowly realises she feels free - until the door opens and her hour of liberty ends.',
  },

  // ── Edexcel International GCSE anthology, Part 3 ───────────────────────────
  //
  // ADDED 19 September 2026. These seven poems are prescribed for 4ET1 and were
  // absent from this file entirely, so no shelf, index or search could reach
  // them. Four of them - La Belle Dame sans Merci, The Tyger, Half-caste and
  // Remember - already had a finished study guide written and published under
  // /igcse/edexcel/poetry, unreachable because nothing in the data claimed the
  // poem existed.
  //
  // Source: Pearson Edexcel International GCSE English Anthology, Issue 8,
  // February 2026, ISBN 978 1 446 93108 0, Part 3, pages 53 to 70. See
  // src/lib/board/edexcel-igcse-anthology.ts, which carries the full list and
  // the citation.
  //
  // NO DESCRIPTION OR THEMES ARE RECORDED HERE, deliberately. Title, author,
  // page and prescription are facts printed in the anthology. A summary and a
  // theme list are editorial judgements, and inventing seven of them to make
  // the cards look uniform would be exactly the kind of confident filler this
  // product cannot afford. They are left empty until someone writes them.
  {
    slug: 'blessing',
    title: 'Blessing',
    author: 'Imtiaz Dharker (b. 1954)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'search-for-my-tongue',
    title: 'Search For My Tongue',
    author: 'Sujata Bhatt (b. 1956)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'la-belle-dame-sans-merci',
    title: 'La Belle Dame sans Merci',
    author: 'John Keats (1795-1821)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse', 'edexcel', 'aqa-a-level'],
    // Keats died 1821, so UK copyright (CDPA 1988 s12: life + 70) lapsed long
    // ago. Publishable in full.
    copyrightStatus: 'public-domain',
    year: '1819',
  },
  {
    slug: 'poem-at-thirty-nine',
    title: 'Poem at Thirty-Nine',
    author: 'Alice Walker (b. 1944)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-tyger',
    title: 'The Tyger',
    author: 'William Blake (1757-1827)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse', 'ial-edexcel', 'edexcel-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
    year: '1794',
  },
  {
    slug: 'half-caste',
    title: 'Half-caste',
    author: 'John Agard (b. 1949)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse', 'edexcel'],
    copyrightStatus: 'copyright',
    // The anthology's own acknowledgement (Issue 8, page 73): copyright 1996
    // by John Agard. Added 26 September 2026; the row had no year.
    year: '1996',
  },
  {
    slug: 'remember',
    title: 'Remember',
    author: 'Christina Rossetti (1830-1894)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse', 'ial-edexcel', 'edexcel-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
    year: '1862',
  },

  // ── Edexcel International GCSE Literature 4ET1, whole texts ────────────────
  //
  // ADDED 19 September 2026. Seven texts the 4ET1 specification prescribes and
  // this file did not hold at all, so no Edexcel IGCSE Literature student could
  // see them listed as an option for their own paper. Two of them, Klara and
  // the Sun and Western Lane, are the 2024 additions: first teaching September
  // 2024, FIRST ASSESSMENT MAY 2026, so they are live for Summer 2026 and
  // Summer 2027 and were not assessable before.
  //
  // Source: Pearson Edexcel International GCSE in English Literature (4ET1)
  // Specification, Issue 3, August 2025, ISBN 978 1 446 95435 5. See
  // src/lib/board/edexcel-igcse-literature.ts for the full structure and the
  // citation.
  //
  // As with the anthology rows, no description and no themes: title, author and
  // prescription are printed facts, a summary is an editorial judgement, and
  // seven invented ones would be filler.
  {
    slug: 'the-whale-rider',
    title: 'The Whale Rider',
    author: 'Witi Ihimaera (b. 1944)',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-joy-luck-club',
    title: 'The Joy Luck Club',
    author: 'Amy Tan (b. 1952)',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'klara-and-the-sun',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro (b. 1954)',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'western-lane',
    title: 'Western Lane',
    author: 'Chetna Maroo',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'kindertransport',
    title: 'Kindertransport',
    author: 'Diane Samuels (b. 1960)',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'death-and-the-kings-horseman',
    title: "Death and the King's Horseman",
    author: 'Wole Soyinka (b. 1934)',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-scarlet-letter',
    title: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne (1804-1864)',
    category: '19th-century',
    boards: ['edexcel-igcse'],
    // Hawthorne died 1864, so UK copyright (CDPA 1988 s12: life + 70) lapsed
    // long ago. Publishable in full.
    copyrightStatus: 'public-domain',
    year: '1850',
  },

  // ── UK GCSE texts we prescribe on paper and did not hold ───────────────────
  //
  // ADDED 19 September 2026. Fifteen titles that src/lib/board/prescribed-texts.ts
  // records as prescribed, read from the boards' own specifications, and that
  // this file had no row for at all. They cover twenty board-title pairs across
  // AQA, Edexcel, OCR and Eduqas.
  //
  // THIS IS THE GAP THE "100% COVERED" FIGURE HID. Coverage was being computed
  // against our own list - AQA 20 of 20, Edexcel 14 of 14 - which is a
  // denominator that cannot fail. Measured against the specifications, six AQA
  // texts, eight Edexcel, three OCR and five Eduqas were not in the data, so a
  // student looking for them was told their board does not set them.
  //
  // NO DESCRIPTION AND NO THEMES, as with the other rows added today. The title
  // and the prescription are read from a specification; a summary is not.
  //
  // TWO EDITIONS ARE NOT SETTLED AND ARE MARKED. Refugee Boy and Coram Boy each
  // exist as a novel and as a stage adaptation by a different writer, and
  // prescribed-texts.ts records only the title. Until the prescribed edition is
  // read from the specification's own editions appendix, the original author is
  // recorded and the ambiguity is stated rather than resolved by guessing. The
  // Necklace is the precedent: its prescribed text is a copyright translation,
  // not the free one, and assuming otherwise would have had us publish the
  // wrong work.
  {
    slug: 'dna',
    title: 'DNA',
    author: 'Dennis Kelly (b. 1970)',
    category: 'modern',
    boards: ['aqa', 'ocr'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'a-taste-of-honey',
    title: 'A Taste of Honey',
    author: 'Shelagh Delaney (1938-2011)',
    category: 'modern',
    boards: ['aqa', 'cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'telling-tales',
    title: 'Telling Tales',
    // An anthology of short stories, not a single-author work. Recorded as the
    // specification names it rather than inventing a headline author.
    author: 'AQA Anthology (various writers)',
    category: 'modern',
    boards: ['aqa'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'princess-and-the-hustler',
    title: 'Princess & The Hustler',
    author: 'Chinonyerem Odimba',
    category: 'modern',
    boards: ['aqa', 'cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'leave-taking',
    title: 'Leave Taking',
    author: 'Winsome Pinnock (b. 1961)',
    category: 'modern',
    boards: ['aqa', 'ocr', 'eduqas'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'my-name-is-leon',
    title: 'My Name is Leon',
    author: 'Kit de Waal (b. 1960)',
    category: 'modern',
    boards: ['aqa'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'hobsons-choice',
    title: "Hobson's Choice",
    author: 'Harold Brighouse (1882-1958)',
    category: 'modern',
    boards: ['edexcel'],
    // Brighouse died 1958, so UK copyright (CDPA 1988 s12: life + 70) runs to
    // the end of 2028. Not publishable in full yet.
    copyrightStatus: 'copyright',
  },
  {
    slug: 'journeys-end',
    title: "Journey's End",
    author: 'R C Sherriff (1896-1975)',
    category: 'modern',
    boards: ['edexcel', 'aqa-a-level'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-woman-in-black',
    title: 'The Woman in Black',
    author: 'Susan Hill (b. 1942)',
    category: 'modern',
    boards: ['edexcel', 'eduqas'],
    // Distinct from 'whistle-and-ill-come-to-you', which is an EXTRACT from
    // this novel prescribed separately in the Edexcel International GCSE
    // anthology. Same book, different prescribed text.
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-empress',
    title: 'The Empress',
    author: 'Tanika Gupta (b. 1963)',
    category: 'modern',
    boards: ['edexcel'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'refugee-boy',
    title: 'Refugee Boy',
    // EDITION SETTLED 25 September 2026. The Edexcel 1ET0 specification, Issue
    // 2 (June 2019), lists "play: Refugee Boy, Benjamin Zephaniah (adapted for
    // the stage by Lemn Sissay)". The prescribed text is Sissay's 2013 play, not
    // Zephaniah's 2001 novel, whose plot and structure differ.
    author: 'Benjamin Zephaniah, adapted for the stage by Lemn Sissay',
    year: '2013',
    category: 'modern',
    boards: ['edexcel'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'coram-boy',
    title: 'Coram Boy',
    // EDITION SETTLED 25 September 2026. The Edexcel 1ET0 specification, Issue
    // 2, lists "novel: Coram Boy, Jamila Gavin". Helen Edmundson's stage
    // adaptation is not the prescribed text.
    author: 'Jamila Gavin (b. 1941)',
    category: 'modern',
    boards: ['edexcel'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'boys-dont-cry',
    title: "Boys Don't Cry",
    // CORRECTED 25 September 2026. Both Edexcel 1ET0 and Eduqas prescribe
    // Malorie Blackman's 2010 novel. Fiona Scarlett's 2021 novel of the same
    // title is a different book on no specification. prescribed-texts.ts holds
    // titles only, which is how the wrong author got through.
    author: 'Malorie Blackman (b. 1962)',
    year: '2010',
    category: 'modern',
    boards: ['edexcel', 'eduqas'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'oranges-are-not-the-only-fruit',
    title: 'Oranges are not the Only Fruit',
    author: 'Jeanette Winterson (b. 1959)',
    category: 'modern',
    boards: ['eduqas', 'aqa-a-level', 'ocr-a-level'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-history-boys',
    title: 'The History Boys',
    author: 'Alan Bennett (b. 1934)',
    category: 'modern',
    // Eduqas only. AQA's list carries "Last exam 2024" against it, so it must
    // not be shown to an AQA student as a live option.
    boards: ['eduqas'],
    copyrightStatus: 'copyright',
  },

  // ── Cambridge IGCSE Literature in English 0475 ─────────────────────────────
  //
  // ADDED 19 September 2026. The board read as completely empty: a student in
  // the Gulf, which is most of this board's cohort, was shown that we have no
  // idea what they study. We held rows and finished guides for several of its
  // texts, tagged to other boards - Antony and Cleopatra, the longest guide on
  // the site at 1,491 lines, is a prescribed 0475 drama text.
  //
  // These six are the prescribed whole texts we had no row for at all, for the
  // 2027 examination, which is the series the current cohort sits.
  //
  // Source: Cambridge IGCSE Literature in English 0475 syllabus for examination
  // in 2027, Version 2, published October 2024. See
  // src/lib/board/cambridge-0475.ts, which holds both live years in full and
  // explains why the year matters: Cambridge rotates these every single year and
  // serves four syllabus PDFs side by side with no archived label on any of them.
  //
  // NOT ADDED HERE, deliberately: the 45 prescribed poems and the 10 Stories of
  // Ourselves stories. Paper 1 Section A is a choice of THREE alternative
  // fifteen-poem sets and a candidate answers on one. SetText has no way to say
  // "one of three alternatives", so listing all 45 on one shelf would tell a
  // student they must revise three times what they do. They are held in
  // cambridge-0475.ts until there is a surface that can show the choice
  // honestly.
  {
    slug: 'blues-for-an-alabama-sky',
    title: 'Blues for an Alabama Sky',
    author: 'Pearl Cleage',
    category: 'modern',
    boards: ['cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'a-midsummer-nights-dream',
    title: "A Midsummer Night's Dream",
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['cambridge-0475', 'edexcel-a-level'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'what-it-means-when-a-man-falls-from-the-sky',
    title: 'What it Means When a Man Falls from the Sky',
    author: 'Lesley Nneka Arimah',
    category: 'modern',
    // In for 2027, replacing H G Wells's The War of the Worlds.
    boards: ['cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'fire-on-the-mountain',
    title: 'Fire on the Mountain',
    author: 'Anita Desai',
    category: 'modern',
    boards: ['cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'hullaballoo-in-the-guava-orchard',
    // The syllabus spells it "Hullaballoo". Kept as printed rather than
    // corrected to the publisher's "Hullabaloo", so a teacher searching the
    // syllabus text finds it.
    title: 'Hullaballoo in the Guava Orchard',
    author: 'Kiran Desai',
    category: 'modern',
    boards: ['cambridge-0475'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'im-the-king-of-the-castle',
    title: "I'm the King of the Castle",
    author: 'Susan Hill',
    category: 'modern',
    boards: ['cambridge-0475'],
    copyrightStatus: 'copyright',
  },
]

export function getSetTextsForBoard(board: ExamBoard | null): SetText[] {
  if (!board) return SET_TEXTS
  return SET_TEXTS.filter((t) => t.boards.includes(board))
}

export function getSetText(slug: string): SetText | undefined {
  return SET_TEXTS.find((t) => t.slug === slug)
}

export function textAvailableForBoard(slug: string, board: ExamBoard | null): boolean {
  const text = getSetText(slug)
  if (!text) return false
  if (!board) return true
  return text.boards.includes(board)
}
